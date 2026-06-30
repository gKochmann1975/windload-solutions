#!/usr/bin/env node
/**
 * Site-wide mobile type-scale bump for the template pages (city/state/guide).
 * These pages drive headings off CSS vars (--h1/--h2/--h3) + .sub/.lead/.eyebrow,
 * so redeclaring the vars inside the shared <=880px block cascades a larger,
 * bolder mobile scale to every heading with zero structural risk.
 *
 * The OLD block is byte-identical across 196 pages (verified before writing).
 */
const fs = require('fs');
const path = require('path');

const ROOT = path.resolve(__dirname, '..');
const SKIP = new Set(['backups', 'node_modules', '.git', '.vercel']);

const OLD = '@media(max-width:880px){.header-right .lnk,.header-right .nav-cta{display:none}.hamburger{display:flex}.info-grid,.cards-grid,.feature-grid{grid-template-columns:1fr}.foot-grid{grid-template-columns:1fr 1fr}}';
const NEW = '@media(max-width:880px){.header-right .lnk,.header-right .nav-cta{display:none}.hamburger{display:flex}.info-grid,.cards-grid,.feature-grid{grid-template-columns:1fr}.foot-grid{grid-template-columns:1fr 1fr}:root{--h1:clamp(2.9rem,7.2vw,3.6rem);--h2:clamp(2rem,4.8vw,2.6rem);--h3:1.35rem}.sub{font-size:1.22rem}.lead{font-size:1.1rem}.eyebrow{font-size:.92rem}}';

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
console.log('Pages bumped:', changed);
