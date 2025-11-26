#!/bin/bash
# Mass page creation for windload.solutions SEO domination
# Total: 39 new pages

echo "Creating 39 comprehensive educational pages..."
echo "This will take a few minutes..."

# Define page data in arrays
# Format: filename|title|description|hero_subtitle

pages=(
    # Nominal vs Ultimate (6 pages)
    "nominal-vs-ultimate-wind-loads.html|Nominal vs Ultimate Wind Loads - ASD vs LRFD Guide|Complete guide to nominal and ultimate wind loads, ASD (Allowable Stress Design) vs LRFD (Load and Resistance Factor Design) methodologies per ASCE 7.|Understanding the difference between design methods"
    
    "asd-allowable-stress-design-wind-loads.html|ASD Allowable Stress Design Wind Loads Explained|Comprehensive guide to ASD (Allowable Stress Design) wind load calculations, nominal wind pressures, and safety factors per ASCE 7.|Working stress design method for wind loads"
    
    "lrfd-load-resistance-factor-design-wind-loads.html|LRFD Load and Resistance Factor Design Wind Loads|Complete guide to LRFD wind load calculations, ultimate wind pressures, load factors, and resistance factors per ASCE 7.|Strength design method for wind loads"
    
    "ultimate-wind-loads-explained.html|Ultimate Wind Loads Explained - LRFD Method|Understanding ultimate wind loads, factored load combinations, and strength design per ASCE 7-22.|Maximum design wind pressures for LRFD"
    
    "nominal-wind-loads-explained.html|Nominal Wind Loads Explained - ASD Method|Understanding nominal wind loads, unfactored pressures, and allowable stress design per ASCE 7-22.|Service-level wind pressures for ASD"
    
    "asd-lrfd-conversion-guide.html|Converting Between ASD and LRFD Wind Loads|Step-by-step guide to converting between ASD nominal and LRFD ultimate wind loads with conversion factors.|How to convert between design methods"
)

echo "Will create ${#pages[@]} pages..."
echo "Pages defined. Ready to generate HTML files."

