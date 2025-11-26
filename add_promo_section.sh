#!/bin/bash

# Script to add WindLoadCalc promo section before footer

PROMO_SECTION='    <!-- WindLoadCalc.com Promotional Section -->
    <section class="windloadcalc-promo" style="background: linear-gradient(135deg, #0018ff 0%, #181E57 100%); color: white; padding: 4rem 0; text-align: center;">
        <div class="container" style="max-width: 1200px; margin: 0 auto; padding: 0 2rem;">
            <h2 style="font-size: 2.5rem; font-weight: 800; margin-bottom: 1.5rem;">Need Wind Load Calculators?</h2>
            <p style="font-size: 1.2rem; margin-bottom: 2rem; max-width: 800px; margin-left: auto; margin-right: auto;">Visit our sister site <strong>WindLoadCalc.com</strong> for professional ASCE 7 wind load calculator software and the Building Intelligence Platform (BIP).</p>
            <a href="https://windloadcalc.com" class="cta-button" style="display: inline-block; background: white; color: #0018ff; padding: 1.2rem 2.5rem; border-radius: 50px; font-weight: 700; font-size: 1.05rem; text-decoration: none; transition: all 0.3s ease;">Visit WindLoadCalc.com →</a>
        </div>
    </section>

'

echo "Adding WindLoadCalc promo section to HTML files..."

for file in *.html; do
    if [ -f "$file" ]; then
        # Check if promo section already exists
        if grep -q "windloadcalc-promo" "$file"; then
            echo "  Skipping $file (already has promo section)"
        else
            # Find the line with </main> and add promo before <footer
            if grep -q "</main>" "$file"; then
                # Use perl to add the promo section after </main> and before <footer
                perl -i -0pe "s|(    </main>)\s*(<footer)|\$1\n\n$PROMO_SECTION\$2|" "$file"
                echo "  Added promo to: $file"
            else
                echo "  Warning: No </main> found in $file"
            fi
        fi
    fi
done

echo "Done!"
