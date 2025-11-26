#!/bin/bash

# List of files that need the promo section
FILES=(
    "asce-7-wind-load-velocity-finder-wind-speed-by-zip-code.html"
    "contact-us-wind-load-calculators-for-components-and-cladding-cc-wind-load-pressures-per-the-asce-7-16-and-asce-7-22-publication-windloads-made-easy.html"
    "faqfor-wind-load-calculator-software-for-wind-load-pressures-per-asce-7.html"
    "free-online-wind-load-calculators-demos-free-excel-wind-load-calculator.html"
    "instructional-videos-asce-7-wind-load-calculator-wind-load-pressure-software-components-cladding-wind-load-pressures-asce-7.html"
    "mwfrs-wind-load-calculator-asce-wind-pressure-analysis-building-design.html"
    "professional-engineer-sign-seal-wind-load-pressures.html"
    "wind-load-pressure-asd-lrfd-hvhz-proper-window-selection.html"
)

PROMO='
    <!-- WindLoadCalc.com Promotional Section -->
    <section class="windloadcalc-promo" style="background: linear-gradient(135deg, #0018ff 0%, #181E57 100%); color: white; padding: 4rem 0; text-align: center;">
        <div class="container" style="max-width: 1200px; margin: 0 auto; padding: 0 2rem;">
            <h2 style="font-size: 2.5rem; font-weight: 800; margin-bottom: 1.5rem;">Need Wind Load Calculators?</h2>
            <p style="font-size: 1.2rem; margin-bottom: 2rem; max-width: 800px; margin-left: auto; margin-right: auto;">Visit our sister site <strong>WindLoadCalc.com</strong> for professional ASCE 7 wind load calculator software and the Building Intelligence Platform (BIP).</p>
            <a href="https://windloadcalc.com" class="cta-button" style="display: inline-block; background: white; color: #0018ff; padding: 1.2rem 2.5rem; border-radius: 50px; font-weight: 700; font-size: 1.05rem; text-decoration: none; transition: all 0.3s ease;">Visit WindLoadCalc.com →</a>
        </div>
    </section>
'

for file in "${FILES[@]}"; do
    if [ -f "$file" ]; then
        echo "Adding promo to: $file"
        # Find the line number of </main> or the line before <footer
        if grep -q "</main>" "$file"; then
            # Insert after </main>
            perl -i -pe 'print "'"$PROMO"'\n" if /^\s*<\/main>/' "$file"
        elif grep -q "<footer" "$file"; then
            # Insert before <footer
            perl -i -pe 'print "'"$PROMO"'\n" if /^\s*<footer/' "$file"
        else
            echo "  Warning: Could not find insertion point in $file"
        fi
    fi
done

echo "Done adding promo sections!"
