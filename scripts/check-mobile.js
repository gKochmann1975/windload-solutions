#!/usr/bin/env node
/*
 * check-mobile.js — mobile-first + SEO linter for windload.solutions
 *
 * Scans git-tracked *.html (excluding backups/) and flags the mobile failure
 * modes documented in CLAUDE.md / the project mobile-first brief. Rules are
 * media-query CONTEXT-AWARE: a declaration is only a *mobile* violation when it
 * sits inside an active `@media (max-width: …)` block, EXCEPT for rules that
 * also break mobile from base CSS (display:none / nowrap / oversized font on a
 * hero headline or CTA), which apply everywhere because base cascades to phones.
 *
 * Severities: CRITICAL exits 1 (commit gate). HIGH/WARN are reported, exit 0.
 *
 * Usage:
 *   node scripts/check-mobile.js                # scan all git-tracked html
 *   node scripts/check-mobile.js a.html b.html  # scan specific files
 *   node scripts/check-mobile.js --quiet        # only show files with findings
 *   node scripts/check-mobile.js --json         # machine-readable output
 *
 * Add a new rule in the SAME commit as any new mobile failure mode discovered.
 */
'use strict';

const fs = require('fs');
const { execSync } = require('child_process');

const args = process.argv.slice(2);
const QUIET = args.includes('--quiet');
const JSON_OUT = args.includes('--json');
const fileArgs = args.filter((a) => !a.startsWith('--'));

function trackedHtml() {
  const out = execSync('git ls-files "*.html"', { encoding: 'utf8' });
  return out
    .split('\n')
    .map((s) => s.trim())
    .filter(Boolean)
    .filter((f) => !f.startsWith('backups/'));
}

const files = fileArgs.length ? fileArgs : trackedHtml();

// --- selector classifiers -------------------------------------------------
// A hero HEADLINE selector: the indexable H1 / subtitle that must stay visible.
const HERO_HEADLINE = /(^|[\s,>])(hero-title|hero-subtitle|hero-content\s+h1|hero[\w-]*\s+h1|hero-heading|page-hero[\w-]*\s*h1)\b|\.hero[\w-]*\s+h1/i;
// A hero/header CTA / button selector.
const CTA = /(hero-btn|hero-buttons\s+a|header-cta|calculator-cta|cta-button|btn-primary|btn-cta|[-.]cta\b|hero[\w-]*-button)/i;

// --- helpers --------------------------------------------------------------
function lineOf(src, idx) {
  return src.slice(0, idx).split('\n').length;
}

// Parse a <style> block char-by-char, tracking brace depth, the current
// selector text, and whether we're inside a max-width @media block.
function scanStyle(css, baseLine, findings) {
  let i = 0;
  const n = css.length;
  // stack of { kind: 'media'|'rule', maxWidth: bool, selector: string }
  const stack = [];
  let buf = ''; // accumulates selector / at-rule prelude

  const inMaxWidthMedia = () =>
    stack.some((f) => f.kind === 'media' && f.maxWidth);
  const currentSelector = () => {
    for (let k = stack.length - 1; k >= 0; k--) {
      if (stack[k].kind === 'rule') return stack[k].selector;
    }
    return '';
  };

  while (i < n) {
    const c = css[i];
    if (c === '/' && css[i + 1] === '*') {
      const end = css.indexOf('*/', i + 2);
      i = end === -1 ? n : end + 2;
      continue;
    }
    if (c === '{') {
      const prelude = buf.trim();
      buf = '';
      if (prelude.startsWith('@media')) {
        stack.push({
          kind: 'media',
          maxWidth: /max-width/i.test(prelude),
          selector: '',
        });
      } else if (prelude.startsWith('@')) {
        // @keyframes, @supports, @font-face — treat as opaque block
        stack.push({ kind: 'at', maxWidth: false, selector: prelude });
      } else {
        stack.push({ kind: 'rule', maxWidth: false, selector: prelude });
      }
      i++;
      continue;
    }
    if (c === '}') {
      stack.pop();
      buf = '';
      i++;
      continue;
    }
    if (c === ';') {
      // a declaration inside the current rule
      const decl = buf.trim();
      buf = '';
      if (decl && stack.length && stack[stack.length - 1].kind === 'rule') {
        checkDecl(decl, currentSelector(), inMaxWidthMedia(), baseLine + lineOf(css, i) - 1, findings);
      }
      i++;
      continue;
    }
    buf += c;
    i++;
  }
}

function add(findings, sev, rule, line, sel, detail) {
  findings.push({ sev, rule, line, sel: sel.replace(/\s+/g, ' ').slice(0, 60), detail });
}

function checkDecl(decl, sel, inMobileMedia, line, findings) {
  const d = decl.toLowerCase();
  const prop = d.split(':')[0].trim();
  const val = d.slice(d.indexOf(':') + 1).trim();

  // RULE 1 — display:none on a hero headline (base OR mobile). CRITICAL.
  if (prop === 'display' && val.startsWith('none') && HERO_HEADLINE.test(sel)) {
    add(findings, 'CRITICAL', 'R1 hero-h1-hidden', line, sel,
      'display:none on hero headline hides the indexable H1');
  }

  // RULE 2 — white-space:nowrap on a hero/header CTA. CRITICAL.
  if (prop === 'white-space' && val.startsWith('nowrap') && CTA.test(sel)) {
    add(findings, 'CRITICAL', 'R2 cta-nowrap', line, sel,
      'white-space:nowrap on CTA — long label overflows on phones');
  }

  // RULE 3 — hero CTA *button* font-size >= 1.4rem. CRITICAL.
  // Only the clickable button/link — NOT section headings (h1-h6) that merely
  // live inside a *-cta section; large headings are fine and wrap naturally.
  const headingTerminated = /\bh[1-6]\s*$/.test(sel);
  if (prop === 'font-size' && CTA.test(sel) && !headingTerminated) {
    const m = val.match(/([\d.]+)\s*rem/);
    if (m && parseFloat(m[1]) >= 1.4) {
      add(findings, 'CRITICAL', 'R3 cta-oversized', line, sel,
        `CTA button font-size ${m[1]}rem >= 1.4rem`);
    }
  }

  // RULE 4 — .header-container stacked to column inside a mobile media. CRITICAL.
  if (
    inMobileMedia &&
    prop === 'flex-direction' &&
    val.startsWith('column') &&
    /header-container/.test(sel)
  ) {
    add(findings, 'CRITICAL', 'R4 header-column', line, sel,
      'header-container -> column on mobile; verify header height < hero padding-top');
  }

  // RULE 5 — body{padding…} inside a mobile media (double-gutter inset). CRITICAL.
  if (
    inMobileMedia &&
    /(^|[\s,>])body\b/.test(sel) &&
    /^padding(-left|-right|-inline|-inline-start|-inline-end)?$/.test(prop) &&
    !/^padding-(top|bottom|block)/.test(prop) &&
    val !== '0' && !/^0(px|rem|em)?(\s+0(px|rem|em)?)?$/.test(val)
  ) {
    add(findings, 'CRITICAL', 'R5 body-padding-mobile', line, sel,
      `body{${prop}:${val}} in mobile media — put gutters on inner .wrap`);
  }

  // RULE 6 — transform:scale() inside a per-breakpoint media block. HIGH.
  if (inMobileMedia && prop === 'transform' && /scale\(/.test(val)) {
    add(findings, 'HIGH', 'R6 mobile-scale', line, sel,
      'transform:scale() per breakpoint overflows/jumps on real phones');
  }
}

// JS parallax that sets a hero transform without a mobile guard. HIGH.
function scanScripts(html, findings) {
  const re = /(heroContent|hero-content|\.hero[\w-]*)[^;\n]{0,80}\.style\.transform\s*=/gi;
  let m;
  while ((m = re.exec(html))) {
    add(findings, 'HIGH', 'R6 js-parallax', lineOf(html, m.index), 'inline <script>',
      'JS sets hero transform (parallax) — needs a mobile guard');
  }
}

// --- run ------------------------------------------------------------------
const results = [];
for (const file of files) {
  let html;
  try {
    html = fs.readFileSync(file, 'utf8');
  } catch {
    continue;
  }
  const findings = [];
  const styleRe = /<style[^>]*>([\s\S]*?)<\/style>/gi;
  let m;
  while ((m = styleRe.exec(html))) {
    scanStyle(m[1], lineOf(html, m.index), findings);
  }
  scanScripts(html, findings);

  // RULE 7 — wide data table with no horizontal-scroll affordance. CRITICAL.
  // A .comparison-table/.data-table/.edition-table/.tornado-table will exceed a
  // 375px viewport; without overflow-x:auto (on the table or a wrapper) it forces
  // a horizontal page scroll on phones. Satisfied by any overflow-x:auto|scroll.
  const wide = html.match(/<table[^>]*class="[^"]*(?:comparison-table|data-table|edition-table|tornado-table)/i);
  if (wide && !/overflow-x:\s*(auto|scroll)/i.test(html)) {
    add(findings, 'CRITICAL', 'R7 table-no-scroll', lineOf(html, wide.index), 'table',
      'wide table without overflow-x scroll — horizontal page scroll on phones');
  }

  findings.sort((a, b) => a.line - b.line);
  results.push({ file, findings });
}

if (JSON_OUT) {
  console.log(JSON.stringify(results, null, 2));
  const crit = results.reduce((a, r) => a + r.findings.filter((f) => f.sev === 'CRITICAL').length, 0);
  process.exit(crit ? 1 : 0);
}

let totalCrit = 0, totalHigh = 0, filesWithCrit = 0;
const color = { CRITICAL: '\x1b[31m', HIGH: '\x1b[33m', reset: '\x1b[0m' };
for (const { file, findings } of results) {
  const crit = findings.filter((f) => f.sev === 'CRITICAL').length;
  const high = findings.filter((f) => f.sev === 'HIGH').length;
  totalCrit += crit;
  totalHigh += high;
  if (crit) filesWithCrit++;
  if (!findings.length) {
    if (!QUIET) console.log(`\x1b[32m✓\x1b[0m ${file}`);
    continue;
  }
  console.log(`\n${file}`);
  for (const f of findings) {
    const c = color[f.sev] || '';
    console.log(`  ${c}${f.sev}${color.reset} ${f.rule}  L${f.line}  {${f.sel}}  ${f.detail}`);
  }
}

console.log(
  `\n— scanned ${results.length} files | ` +
  `${color.CRITICAL}${totalCrit} CRITICAL${color.reset} in ${filesWithCrit} files | ` +
  `${color.HIGH}${totalHigh} HIGH${color.reset} —`
);
process.exit(totalCrit ? 1 : 0);
