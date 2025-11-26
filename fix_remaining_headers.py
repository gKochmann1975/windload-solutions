#!/usr/bin/env python3
"""
Fix headers on Georgia, Hawaii, and New York state pages to match Louisiana/Florida format
"""

import re

# Files to fix
files_to_fix = [
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

# Read the correct Louisiana file to extract the header CSS and HTML
louisiana_content = read_file(r'c:\windload-solutions-parent\louisiana-wind-load-requirements.html')

# Extract the correct header CSS (from /* Header Styles from index.html */ to /* Hero Section)
header_css_match = re.search(
    r'([ ]*\/\* Header Styles from index\.html \*\/.*?)(\s*/\* Hero Section)',
    louisiana_content,
    re.DOTALL
)
correct_header_css = header_css_match.group(1) if header_css_match else None

# Extract the correct header HTML (from <!-- Header --> to </nav>)
header_html_match = re.search(
    r'([ ]*<!-- Header -->.*?</nav>)',
    louisiana_content,
    re.DOTALL
)
correct_header_html = header_html_match.group(1) if header_html_match else None

# Extract the correct JavaScript (from // Header scroll effect to end of script)
js_match = re.search(
    r'(<script>\s*// Header scroll effect.*?</script>)',
    louisiana_content,
    re.DOTALL
)
correct_js = js_match.group(1) if js_match else None

print(f"Extracted header CSS: {len(correct_header_css) if correct_header_css else 0} chars")
print(f"Extracted header HTML: {len(correct_header_html) if correct_header_html else 0} chars")
print(f"Extracted JavaScript: {len(correct_js) if correct_js else 0} chars")

for filepath in files_to_fix:
    print(f"\nProcessing: {filepath}")
    content = read_file(filepath)

    # Replace the header CSS (from /* Header Styles */ to /* Hero Section or .hero {)
    content = re.sub(
        r'[ ]*\/\* Header Styles.*?\n\n[ ]*(\/\* Hero Section|\.hero \{)',
        correct_header_css + r'\n\n        \1',
        content,
        flags=re.DOTALL
    )

    # Replace the header HTML (from <header> to </nav> or <section class="hero">)
    content = re.sub(
        r'[ ]*<header.*?</nav>',
        correct_header_html,
        content,
        flags=re.DOTALL
    )

    # Replace the JavaScript (from <script> to </script> at end of file)
    content = re.sub(
        r'<script>.*?</script>\s*</body>',
        correct_js + '\n</body>',
        content,
        flags=re.DOTALL
    )

    write_file(filepath, content)
    print(f"✓ Fixed: {filepath}")

print("\n✓ All files fixed!")
