#!/usr/bin/env python3
"""
Fix all remaining issues across ALL HTML files
"""
import os
import re
from pathlib import Path

# Get all HTML files
html_files = []
html_files.extend(Path('.').glob('*.html'))
html_files.extend(Path('states').glob('*.html'))

print(f"Found {len(html_files)} HTML files to fix")

for html_file in html_files:
    print(f"Processing: {html_file}")

    with open(html_file, 'r', encoding='utf-8') as f:
        content = f.read()

    original_content = content

    # Fix 1: Ensure hamburger is on the RIGHT (order in HTML)
    # The logo-hamburger-row should have logo first, then hamburger
    # This is already correct in HTML structure, just need CSS

    # Fix 2: Push floating badge down - change top positioning
    content = re.sub(
        r'(\.electric-badge\s*\{[^}]*?position:\s*)(fixed|absolute)',
        r'\1relative',
        content,
        flags=re.DOTALL
    )

    # Fix 3: Add margin-top to electric badge for spacing
    content = re.sub(
        r'(\.electric-badge\s*\{)',
        r'\1\n            margin-top: 2rem;',
        content
    )

    # Fix 4: Change stat card colors to CONTRASTING electric colors
    # Card 1: Cyan/Turquoise
    content = re.sub(
        r'(\.stat-card:nth-child\(1\)\s*\{[^}]*?\})',
        r'.stat-card:nth-child(1) {\n            background: linear-gradient(135deg, #06b6d4 0%, #0891b2 100%);\n            border-color: rgba(6, 182, 212, 0.5);\n        }',
        content,
        flags=re.DOTALL
    )

    # Card 2: Orange
    content = re.sub(
        r'(\.stat-card:nth-child\(2\)\s*\{[^}]*?\})',
        r'.stat-card:nth-child(2) {\n            background: linear-gradient(135deg, #f97316 0%, #ea580c 100%);\n            border-color: rgba(249, 115, 22, 0.5);\n        }',
        content,
        flags=re.DOTALL
    )

    # Card 3: Purple/Violet
    content = re.sub(
        r'(\.stat-card:nth-child\(3\)\s*\{[^}]*?\})',
        r'.stat-card:nth-child(3) {\n            background: linear-gradient(135deg, #a855f7 0%, #9333ea 100%);\n            border-color: rgba(168, 85, 247, 0.5);\n        }',
        content,
        flags=re.DOTALL
    )

    # Card 4: Green/Emerald
    content = re.sub(
        r'(\.stat-card:nth-child\(4\)\s*\{[^}]*?\})',
        r'.stat-card:nth-child(4) {\n            background: linear-gradient(135deg, #10b981 0%, #059669 100%);\n            border-color: rgba(16, 185, 129, 0.5);\n        }',
        content,
        flags=re.DOTALL
    )

    # If no nth-child styles exist, add them before the closing </style> tag
    if '.stat-card:nth-child(1)' not in content:
        style_close = content.rfind('</style>')
        if style_close > 0:
            new_styles = '''
        /* Contrasting Electric Stat Card Colors */
        .stat-card:nth-child(1) {
            background: linear-gradient(135deg, #06b6d4 0%, #0891b2 100%);
            border-color: rgba(6, 182, 212, 0.5);
        }

        .stat-card:nth-child(2) {
            background: linear-gradient(135deg, #f97316 0%, #ea580c 100%);
            border-color: rgba(249, 115, 22, 0.5);
        }

        .stat-card:nth-child(3) {
            background: linear-gradient(135deg, #a855f7 0%, #9333ea 100%);
            border-color: rgba(168, 85, 247, 0.5);
        }

        .stat-card:nth-child(4) {
            background: linear-gradient(135deg, #10b981 0%, #059669 100%);
            border-color: rgba(16, 185, 129, 0.5);
        }

        /* Icon colors */
        .stat-card:nth-child(1) .stat-icon {
            color: #06b6d4;
        }

        .stat-card:nth-child(2) .stat-icon {
            color: #f97316;
        }

        .stat-card:nth-child(3) .stat-icon {
            color: #a855f7;
        }

        .stat-card:nth-child(4) .stat-icon {
            color: #10b981;
        }
'''
            content = content[:style_close] + new_styles + content[style_close:]

    # Fix 5: Change icon colors to match cards (yellow theme everywhere)
    content = re.sub(
        r'\.stat-icon\s*\{[^}]*?\}',
        r'''.stat-icon {
            font-size: 2.5rem;
            margin-bottom: 1rem;
            filter: drop-shadow(0 2px 10px rgba(255,255,255,0.3));
        }''',
        content,
        flags=re.DOTALL
    )

    # Fix 6: Favicon path fix
    content = re.sub(
        r'href="images/windload-solutions-favicon\.svg"',
        r'href="images/windloadsolutions-favicon.svg"',
        content
    )

    # Only write if changes were made
    if content != original_content:
        with open(html_file, 'w', encoding='utf-8') as f:
            f.write(content)
        print(f"  ✅ Updated {html_file}")
    else:
        print(f"  ⏭️  No changes needed for {html_file}")

print("\n✅ All files processed!")
