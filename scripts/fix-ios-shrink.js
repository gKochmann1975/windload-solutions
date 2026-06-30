#!/usr/bin/env node
/**
 * Site-wide fix for the iOS Safari "shrink-to-fit / tiny text" bug.
 *
 * Root cause: the slide-in mobile menu (.nav-links) was parked at right:-400px —
 * a position:fixed element hanging off the right edge of the page at all times.
 * iOS Safari shrinks the WHOLE page to "fit" it just after first paint, making
 * everything tiny. (Other browsers ignore off-screen fixed elements.)
 *
 * Fix (matches windloadcalc.com): slide the menu via transform instead of a
 * negative `right`, so nothing ever hangs off-page. Plus html{overflow-x:hidden}
 * as a clip safety net.
 *
 * All four target strings were verified identical across 197 pages before writing.
 */
const fs = require('fs');
const path = require('path');

const ROOT = path.resolve(__dirname, '..');
const SKIP_DIRS = new Set(['backups', 'node_modules', '.git', '.vercel']);

const REPLACEMENTS = [
  // A: stop parking the drawer off-screen; position at right:0 and translate it out
  ['right:-400px;width:360px', 'right:0;width:360px;transform:translateX(100%)'],
  // B: animate transform, not right
  ['transition:right .35s var(--luxe)', 'transition:transform .35s var(--luxe)'],
  // C: open state slides in via transform
  ['.nav-links.active{right:0}', '.nav-links.active{transform:translateX(0)}'],
  // D: root-level horizontal clip safety net
  ['html{scroll-behavior:smooth}', 'html{scroll-behavior:smooth;overflow-x:hidden}'],
];

function walk(dir, out = []) {
  for (const name of fs.readdirSync(dir)) {
    const fp = path.join(dir, name);
    const st = fs.statSync(fp);
    if (st.isDirectory()) {
      if (!SKIP_DIRS.has(name)) walk(fp, out);
    } else if (name.endsWith('.html')) {
      out.push(fp);
    }
  }
  return out;
}

const files = walk(ROOT);
let changed = 0;
const touched = [];
for (const fp of files) {
  let html = fs.readFileSync(fp, 'utf8');
  // only process pages that actually have the off-screen-drawer bug
  if (!html.includes('right:-400px;width:360px')) continue;
  const before = html;
  for (const [from, to] of REPLACEMENTS) html = html.split(from).join(to);
  if (html !== before) {
    fs.writeFileSync(fp, html);
    changed++;
    touched.push(path.relative(ROOT, fp));
  }
}
console.log('Pages fixed:', changed);
console.log(touched.slice(0, 10).join('\n') + (touched.length > 10 ? `\n... +${touched.length - 10} more` : ''));
