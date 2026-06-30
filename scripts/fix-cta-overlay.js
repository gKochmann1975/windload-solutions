#!/usr/bin/env node
/**
 * Fix unclickable hero CTAs site-wide.
 *
 * Bug: .sec-aurora::before (the hero's blurred aurora glow) is position:absolute
 * with z-index:0 but NO pointer-events:none. Since the hero CTAs are
 * position:static, the z-index:0 pseudo paints above them and swallows every
 * tap — "Explore the map", "10 mandatory states", etc. were dead on all
 * template-page heroes. (.sec-glow::before already had pointer-events:none.)
 *
 * Fix: add pointer-events:none to the decorative pseudo. Verified via headless
 * click test: buttons now receive the click and scroll to their anchors.
 */
const fs = require('fs');
const path = require('path');
const ROOT = path.resolve(__dirname, '..');
const SKIP = new Set(['backups', 'node_modules', '.git', '.vercel']);
const OLD = 'inset:-20%;z-index:0;filter:blur(46px)';
const NEW = 'inset:-20%;z-index:0;pointer-events:none;filter:blur(46px)';

function walk(dir, out = []) {
  for (const name of fs.readdirSync(dir)) {
    const fp = path.join(dir, name);
    const st = fs.statSync(fp);
    if (st.isDirectory()) { if (!SKIP.has(name)) walk(fp, out); }
    else if (name.endsWith('.html') && !name.endsWith('-old.html')) out.push(fp);
  }
  return out;
}

let changed = 0;
for (const fp of walk(ROOT)) {
  const html = fs.readFileSync(fp, 'utf8');
  if (!html.includes(OLD)) continue;
  fs.writeFileSync(fp, html.split(OLD).join(NEW));
  changed++;
}
console.log('CTA overlay fixed on', changed, 'pages');
