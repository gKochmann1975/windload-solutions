#!/bin/bash

# List of files to process (excluding already done)
files=(
    "contact-us-wind-load-calculators-for-components-and-cladding-cc-wind-load-pressures-per-the-asce-7-16-and-asce-7-22-publication-windloads-made-easy.html"
    "faqfor-wind-load-calculator-software-for-wind-load-pressures-per-asce-7.html"
    "free-online-wind-load-calculators-demos-free-excel-wind-load-calculator.html"
    "instructional-videos-asce-7-wind-load-calculator-wind-load-pressure-software-components-cladding-wind-load-pressures-asce-7.html"
    "mwfrs-wind-load-calculator-asce-wind-pressure-analysis-building-design.html"
    "professional-engineer-sign-seal-wind-load-pressures.html"
    "state-requirements.html"
    "ultimate-nominal-asce-7-wind-load-pressure-calculator.html"
    "wind-load-calculator-software-for-how-to-calculate-wind-load-on-windows-doors-shutters-and-roofs-about-us-why-choose-us.html"
    "wind-load-pressure-asd-lrfd-hvhz-proper-window-selection.html"
)

echo "Processing ${#files[@]} files..."

for file in "${files[@]}"; do
    if [ ! -f "$file" ]; then
        echo "Skipping $file (not found)"
        continue
    fi

    echo "Processing: $file"

    # Create backup
    cp "$file" "${file}.processing.bak"

    # Fix CSS - add justify-content: space-between and flex: 1 to .logo-hamburger-row
    sed -i 's/\(\.logo-hamburger-row\s*{[^}]*align-items:\s*center;\)/\1\n            justify-content: space-between;\n            flex: 1;/' "$file"

    # Hide header-right
    sed -i 's/\(\.header-right\s*{[^}]*\)display:\s*flex;/\1display: none;/' "$file"

    echo "  ✓ Done"
done

echo "All files processed!"
