#!/usr/bin/env python3
"""
Script to update all HTML files to remove sales content and link to windloadcalc.com
"""

import re
import os
from pathlib import Path

# Define the WindLoadCalc promo section to add before footer
WINDLOADCALC_PROMO = """    <!-- WindLoadCalc.com Promotional Section -->
    <section class="windloadcalc-promo" style="background: linear-gradient(135deg, #0018ff 0%, #181E57 100%); color: white; padding: 4rem 0; text-align: center;">
        <div class="container" style="max-width: 1200px; margin: 0 auto; padding: 0 2rem;">
            <h2 style="font-size: 2.5rem; font-weight: 800; margin-bottom: 1.5rem;">Need Wind Load Calculators?</h2>
            <p style="font-size: 1.2rem; margin-bottom: 2rem; max-width: 800px; margin-left: auto; margin-right: auto;">Visit our sister site <strong>WindLoadCalc.com</strong> for professional ASCE 7 wind load calculator software and the Building Intelligence Platform (BIP).</p>
            <a href="https://windloadcalc.com" class="cta-button" style="display: inline-block; background: white; color: #0018ff; padding: 1.2rem 2.5rem; border-radius: 50px; font-weight: 700; font-size: 1.05rem; text-decoration: none; transition: all 0.3s ease;">Visit WindLoadCalc.com &rarr;</a>
        </div>
    </section>

"""

def update_html_file(file_path):
    """Update a single HTML file according to requirements"""
    print(f"Processing: {file_path}")

    with open(file_path, 'r', encoding='utf-8') as f:
        content = f.read()

    original_content = content

    # 1. Remove pricing sections (product-price divs)
    content = re.sub(
        r'<div class="product-price">.*?</div>',
        '',
        content,
        flags=re.DOTALL
    )

    # 2. Remove price amounts ($XXX)
    content = re.sub(
        r'<span class="price-amount">\$\d+</span>',
        '',
        content
    )
    content = re.sub(
        r'<span class="price-label">.*?</span>',
        '',
        content
    )

    # 3. Remove Schema markup with pricing
    content = re.sub(
        r'"offers":\s*\{[^}]*"@type":\s*"AggregateOffer"[^}]*\}',
        '',
        content,
        flags=re.DOTALL
    )

    # Clean up trailing commas in JSON
    content = re.sub(r',(\s*})', r'\1', content)

    # 4. Update CTAs - "Try Free Calculator" → "Visit WindLoadCalc.com"
    content = re.sub(
        r'(href="[^"]*">)Try Free Calculator',
        r'\1Visit WindLoadCalc.com',
        content
    )
    content = re.sub(
        r'(<a[^>]*class="[^"]*cta[^"]*"[^>]*>)Try Free Calculator',
        r'\1Visit WindLoadCalc.com',
        content
    )

    # 5. Update CTAs - "Browse Calculators" → "Explore Tools at WindLoadCalc.com"
    content = re.sub(
        r'(href="[^"]*">)Browse Calculators',
        r'\1Explore Tools at WindLoadCalc.com',
        content
    )
    content = re.sub(
        r'(<a[^>]*>)Browse Calculators',
        r'\1Explore Tools at WindLoadCalc.com',
        content
    )

    # 6. Update CTAs - "Get Started" → "Learn More at WindLoadCalc.com"
    content = re.sub(
        r'(<a[^>]*class="product-btn primary"[^>]*>)Get Started',
        r'\1Learn More at WindLoadCalc.com',
        content
    )

    # 7. Update any "Purchase" or "Buy" CTAs → "Get Calculators at WindLoadCalc.com"
    content = re.sub(
        r'(<a[^>]*>)(Buy|Purchase|Shop)( Now| Calculators?)?',
        r'\1Get Calculators at WindLoadCalc.com',
        content,
        flags=re.IGNORECASE
    )

    # 8. Change links to windloadcalc.com for calculator/shop pages
    # Update shop/calculator links to windloadcalc.com
    content = re.sub(
        r'href="[^"]*wind-load-calculator-shop\.html"',
        'href="https://windloadcalc.com"',
        content
    )
    content = re.sub(
        r'href="[^"]*building-intelligence-platform-shop\.html"',
        'href="https://windloadcalc.com"',
        content
    )

    # 9. Update hero text to emphasize educational focus
    # Change "Professional ASCE 7 Wind Load Analysis Software" to educational
    content = re.sub(
        r'Professional ASCE 7 Wind Load Analysis Software',
        'Learn About ASCE 7 Wind Load Analysis',
        content
    )
    content = re.sub(
        r'WIND LOAD CALCULATORS',
        'WIND LOAD EDUCATION & RESOURCES',
        content
    )

    # 10. Add WindLoadCalc.com promotional section before footer
    if '<footer' in content and 'windloadcalc-promo' not in content:
        content = re.sub(
            r'(\s*)<footer',
            r'\n' + WINDLOADCALC_PROMO + r'\1<footer',
            content,
            count=1
        )

    # 11. Update email addresses to info@windload.solutions (if windloadcalc.com emails exist)
    content = re.sub(
        r'info@windloadcalc\.com',
        'info@windload.solutions',
        content
    )
    content = re.sub(
        r'support@windloadcalc\.com',
        'info@windload.solutions',
        content
    )
    content = re.sub(
        r'sales@windloadcalc\.com',
        'info@windload.solutions',
        content
    )

    # Only write if content changed
    if content != original_content:
        with open(file_path, 'w', encoding='utf-8') as f:
            f.write(content)
        print(f"  ✓ Updated: {file_path}")
        return True
    else:
        print(f"  - No changes needed: {file_path}")
        return False

def main():
    """Process all HTML files in the directory"""
    base_dir = Path(r'c:\windload-solutions-parent')
    html_files = list(base_dir.glob('*.html'))

    print(f"Found {len(html_files)} HTML files to process\n")

    updated_count = 0
    for html_file in html_files:
        if update_html_file(html_file):
            updated_count += 1
        print()

    print(f"\n{'='*60}")
    print(f"Processing complete!")
    print(f"Updated: {updated_count} files")
    print(f"Total files: {len(html_files)}")
    print(f"{'='*60}")

if __name__ == "__main__":
    main()
