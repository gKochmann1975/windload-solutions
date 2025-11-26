#!/usr/bin/env python3
"""
Script to fix header layout in HTML files:
1. Move hamburger button from header-right into logo-hamburger-row
2. Update CSS for logo-hamburger-row to use space-between
3. Hide header-right section
"""

import re
import glob
import os

def fix_css(content):
    """Fix CSS for logo-hamburger-row and header-right"""
    # Fix logo-hamburger-row CSS
    content = re.sub(
        r'(\.logo-hamburger-row\s*\{[^}]*display:\s*flex;[^}]*align-items:\s*center;[^}]*)(gap:\s*1rem;\s*\})',
        r'\1justify-content: space-between;\n            flex: 1;\n            \2',
        content,
        flags=re.DOTALL
    )

    # Hide header-right CSS
    content = re.sub(
        r'(\.header-right\s*\{[^}]*)(display:\s*flex;)',
        r'\1display: none;',
        content,
        flags=re.DOTALL
    )

    return content

def move_hamburger_to_logo_row(content):
    """Move hamburger button from header-right to logo-hamburger-row"""
    # Find the hamburger button in header-right
    hamburger_match = re.search(
        r'(<button\s+class="hamburger"[^>]*>.*?</button>)',
        content,
        flags=re.DOTALL
    )

    if not hamburger_match:
        print("No hamburger button found")
        return content

    hamburger_html = hamburger_match.group(1)

    # Remove hamburger from header-right
    content = re.sub(
        r'\s*<button\s+class="hamburger"[^>]*>.*?</button>\s*',
        '\n',
        content,
        flags=re.DOTALL
    )

    # Add hamburger to logo-hamburger-row (after the logo)
    content = re.sub(
        r'(<div\s+class="logo-hamburger-row">.*?</a>)\s*(</div>)',
        rf'\1\n                {hamburger_html}\n            \2',
        content,
        flags=re.DOTALL,
        count=1
    )

    return content

def process_file(filepath):
    """Process a single HTML file"""
    print(f"Processing {filepath}...")

    try:
        with open(filepath, 'r', encoding='utf-8') as f:
            content = f.read()

        # Check if file has logo-hamburger-row
        if 'logo-hamburger-row' not in content:
            print(f"  Skipping (no logo-hamburger-row found)")
            return

        # Check if hamburger already in logo-hamburger-row
        logo_row_match = re.search(
            r'<div\s+class="logo-hamburger-row">(.*?)</div>',
            content,
            flags=re.DOTALL
        )

        if logo_row_match and 'class="hamburger"' in logo_row_match.group(1):
            print(f"  Hamburger already in logo-hamburger-row")
        else:
            content = move_hamburger_to_logo_row(content)

        # Fix CSS
        content = fix_css(content)

        # Write back
        with open(filepath, 'w', encoding='utf-8') as f:
            f.write(content)

        print(f"  ✓ Fixed successfully")

    except Exception as e:
        print(f"  Error: {e}")

def main():
    """Main function"""
    # Get all HTML files in root (excluding .bak files)
    html_files = [
        f for f in glob.glob('*.html')
        if not f.endswith('.bak')
    ]

    print(f"Found {len(html_files)} HTML files to process\n")

    for filepath in html_files:
        process_file(filepath)

    print("\nDone!")

if __name__ == '__main__':
    main()
