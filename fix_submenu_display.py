#!/usr/bin/env python3
"""
Fix submenu display issue - make terrain types hidden by default
"""

import re

# Files to fix
files_to_fix = [
    r'c:\windload-solutions-parent\north-carolina-wind-load-requirements.html',
    r'c:\windload-solutions-parent\south-carolina-wind-load-requirements.html',
    r'c:\windload-solutions-parent\georgia-wind-load-requirements.html',
    r'c:\windload-solutions-parent\hawaii-wind-load-requirements.html',
    r'c:\windload-solutions-parent\new-york-wind-load-requirements.html'
]

def read_file(filepath):
    with open(filepath, 'r', encoding='utf-8') as f:
        return f.read()

def write_file(filepath, content):
    with open(filepath, 'w', encoding='utf-8') as f:
        f.write(content)

for filepath in files_to_fix:
    print(f"\nProcessing: {filepath}")
    content = read_file(filepath)

    # Replace the .sub-menu CSS to add !important and ensure it's properly hidden
    old_submenu_css = r'''        \.sub-menu \{
            display: none;
            flex-direction: column;
            padding-left: 1\.5rem;
            margin-top: 0\.5rem;
        \}

        \.sub-menu\.active \{
            display: flex;
        \}'''

    new_submenu_css = '''        .sub-menu {
            display: none !important;
            flex-direction: column;
            padding-left: 1.5rem;
            margin-top: 0.5rem;
        }

        .sub-menu.active {
            display: flex !important;
        }'''

    content = re.sub(old_submenu_css, new_submenu_css, content)

    write_file(filepath, content)
    print(f"✓ Fixed submenu display in: {filepath}")

print("\n✓ All submenu display issues fixed!")
