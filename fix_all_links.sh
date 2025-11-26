#!/bin/bash

# List of HTML files to fix
files=(
    "state-requirements.html"
    "asce-7-standards.html"
    "components-cladding-wind-load-calculation-asce-7-pressure-analysis-building-design.html"
    "mwfrs-wind-load-calculator-asce-wind-pressure-analysis-building-design.html"
    "resources.html"
    "articles.html"
    "about.html"
    "contact.html"
    "california-wind-load-requirements.html"
    "virginia-wind-load-requirements.html"
    "new-york-wind-load-requirements.html"
)

cd "c:\windload-solutions-parent"

for file in "${files[@]}"; do
    if [ -f "$file" ]; then
        echo "Fixing links in $file..."
        
        # Fix Components & Cladding links
        sed -i 's|href="components-cladding\.html"|href="components-cladding-wind-load-calculation-asce-7-pressure-analysis-building-design.html"|g' "$file"
        
        # Fix MWFRS links
        sed -i 's|href="mwfrs\.html"|href="mwfrs-wind-load-calculator-asce-wind-pressure-analysis-building-design.html"|g' "$file"
        
        echo "  ✓ Fixed $file"
    else
        echo "  ✗ File not found: $file"
    fi
done

echo ""
echo "All files processed!"
