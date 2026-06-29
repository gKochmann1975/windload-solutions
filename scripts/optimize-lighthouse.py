#!/usr/bin/env python3
"""
Normalize every live (non -old) HTML page to the Lighthouse-100 pattern.

IDEMPOTENT: safe to run repeatedly and after any page generator/engine. It
strips whatever font / Font Awesome <link> markup a page currently has and
rebuilds the single canonical, non-render-blocking block, then enforces logo
image dimensions and footer heading order.

Enforces:
  * Self-hosted Font Awesome at /css/all.min.css (font-display:swap), loaded
    non-render-blocking via media="print" onload, with a <noscript> fallback.
    Removes any cdnjs/3rd-party FA <link> (kills the third-party cookie that
    costs a Best-Practices point).
  * Google Fonts loaded non-render-blocking (preserves the page's own family/
    weight href), <noscript> fallback, de-duplicated.
  * Explicit width/height on .logo-icon <img> (CLS).
  * Footer column headers <h4> -> <h3> (heading-order / Accessibility).

Run:  python scripts/optimize-lighthouse.py
"""
import re, glob, os

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))

FONT_HREF  = re.compile(r'href="(https://fonts\.googleapis\.com/css2[^"]*)"')
# strip lines (blocking links, async links, noscript fallbacks, preconnects)
STRIP = [
    re.compile(r'[ \t]*<noscript><link[^>]*fonts\.googleapis\.com/css2[^>]*></noscript>[ \t]*\r?\n?'),
    re.compile(r'[ \t]*<link[^>]*fonts\.googleapis\.com/css2[^>]*>[ \t]*\r?\n?'),
    re.compile(r'[ \t]*<noscript><link[^>]*/css/all\.min\.css[^>]*></noscript>[ \t]*\r?\n?'),
    re.compile(r'[ \t]*<link[^>]*/css/all\.min\.css[^>]*>[ \t]*\r?\n?'),
    re.compile(r'[ \t]*<noscript><link[^>]*font-awesome[^>]*></noscript>[ \t]*\r?\n?'),
    re.compile(r'[ \t]*<link[^>]*cdnjs\.cloudflare\.com/ajax/libs/font-awesome/[^>]*all\.min\.css[^>]*>[ \t]*\r?\n?'),
    re.compile(r'[ \t]*<link rel="preconnect" href="https://fonts\.googleapis\.com">[ \t]*\r?\n?'),
    re.compile(r'[ \t]*<link rel="preconnect" href="https://fonts\.gstatic\.com" crossorigin>[ \t]*\r?\n?'),
]
LOGO_IMG = re.compile(r'<img((?:(?!width=)[^>])*?class="logo-icon"(?:(?!width=)[^>])*?)>')
FOOT_H4  = re.compile(r'(<div class="foot-col">)<h4>([^<]*)</h4>')


def build_block(font_href, had_fa):
    b = ''
    if font_href:
        b += (
            '    <link rel="preconnect" href="https://fonts.googleapis.com">\n'
            '    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>\n'
            f'    <link rel="stylesheet" href="{font_href}" media="print" onload="this.media=\'all\'">\n'
            f'    <noscript><link rel="stylesheet" href="{font_href}"></noscript>\n'
        )
    if had_fa:
        b += (
            '    <link rel="stylesheet" href="/css/all.min.css" media="print" onload="this.media=\'all\'">\n'
            '    <noscript><link rel="stylesheet" href="/css/all.min.css"></noscript>\n'
        )
    return b


def normalize(s):
    had_fa = ('class="fa' in s) or ('font-awesome' in s) or ('/css/all.min.css' in s)
    m = FONT_HREF.search(s)
    font_href = m.group(1) if m else None

    for rx in STRIP:
        s = rx.sub('', s)

    block = build_block(font_href, had_fa)
    if block:
        idx = s.find('<style')
        if idx == -1:
            idx = s.find('</head>')
        if idx != -1:
            s = s[:idx] + block + s[idx:]

    s = LOGO_IMG.sub(lambda mm: f'<img{mm.group(1)} width="40" height="40">', s)
    s = FOOT_H4.sub(r'\1<h3>\2</h3>', s)
    return s


def main():
    files = [f for f in glob.glob(os.path.join(ROOT, '*.html'))
             if not os.path.basename(f).endswith('-old.html')]
    changed = 0
    for f in files:
        s0 = open(f, encoding='utf-8').read()
        s = normalize(s0)
        if s != s0:
            open(f, 'w', encoding='utf-8', newline='').write(s)
            changed += 1
    print(f'optimize-lighthouse: scanned {len(files)} live pages, normalized {changed}')


if __name__ == '__main__':
    main()
