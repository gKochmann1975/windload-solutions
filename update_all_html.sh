#!/bin/bash

# Script to update all HTML files - remove sales content and add windloadcalc.com links

echo "Starting bulk HTML updates..."

# Find all HTML files
for file in *.html; do
    if [ -f "$file" ]; then
        echo "Processing: $file"

        # Create backup
        cp "$file" "$file.bak"

        # Use perl for better multi-line regex support
        # Remove product-price divs (complete with content)
        perl -i -0pe 's/<div class="product-price">.*?<\/div>//gs' "$file"

        # Update Get Started buttons to link to windloadcalc.com
        sed -i 's|href="wind-load-calculator-shop\.html" class="product-btn primary">Get Started|href="https://windloadcalc.com" class="product-btn primary">Get Calculators at WindLoadCalc.com|g' "$file"

        # Update Browse Calculators
        sed -i 's|>Browse Calculators<|>Explore Tools at WindLoadCalc.com<|g' "$file"

        # Update Try Free Calculator
        sed -i 's|>Try Free Calculator<|>Visit WindLoadCalc.com<|g' "$file"

        # Update View Options buttons
        sed -i 's|href="wind-load-calculator-shop\.html" class="product-btn primary">View Options|href="https://windloadcalc.com" class="product-btn primary">Get Calculators at WindLoadCalc.com|g' "$file"

        # Update shop links
        sed -i 's|href="wind-load-calculator-shop\.html"|href="https://windloadcalc.com"|g' "$file"
        sed -i 's|href="building-intelligence-platform-shop\.html"|href="https://windloadcalc.com"|g' "$file"

        echo "  Updated: $file"
    fi
done

echo "Done! Backups saved as .bak files"
