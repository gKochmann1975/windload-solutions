#!/usr/bin/env python3
"""
Generate comprehensive wind speed educational pages based on ASCE 7-16 template
"""

# Read the template
with open('asce-7-16-wind-speed-maps.html', 'r', encoding='utf-8') as f:
    template = f.read()

# Page configurations
pages = {
    'asce-7-22-wind-speed-maps.html': {
        'title': 'ASCE 7-22 Wind Speed Maps - MRI-Based Design Wind Speeds | Updated 2022 Standard',
        'description': 'Complete guide to ASCE 7-22 MRI-based wind speed maps. Learn about the new 300, 700, 1,700, and 3,000-year wind speeds for Risk Categories I-IV and how they differ from ASCE 7-16.',
        'hero_title': 'ASCE 7-22 Wind Speed Maps',
        'hero_subtitle': 'Understanding the new MRI-based approach to design wind speeds and changes from ASCE 7-16',
        'breadcrumb': 'ASCE 7-22 Wind Speed Maps',
        'icon': 'fa-map-marked-alt',
        'gradient_light': '#5eead4',
        'gradient_dark': '#2dd4bf',
        'gradient_deep': '#14b8a6',
    },
    'wind-speed-by-location.html': {
        'title': 'Wind Speed by Location - Find Design Wind Speeds for Your Project Site | ASCE 7',
        'description': 'Determine design wind speeds for any location in the United States. Learn how to use ASCE 7 maps, online tools, and account for terrain, elevation, and special wind regions.',
        'hero_title': 'Wind Speed by Location',
        'hero_subtitle': 'Find accurate design wind speeds for your specific project location',
        'breadcrumb': 'Wind Speed by Location',
        'icon': 'fa-location-dot',
        'gradient_light': '#c4b5fd',
        'gradient_dark': '#a78bfa',
        'gradient_deep': '#8b5cf6',
    },
    'asce-7-wind-load-calculator.html': {
        'title': 'ASCE 7 Wind Load Calculator - Professional Wind Pressure Analysis Software',
        'description': 'Professional ASCE 7 wind load calculator software for Components & Cladding and MWFRS calculations. Automated wind pressure analysis with PE seal integration.',
        'hero_title': 'ASCE 7 Wind Load Calculator',
        'hero_subtitle': 'Professional software for accurate wind pressure calculations per ASCE 7-16 and 7-22',
        'breadcrumb': 'ASCE 7 Calculator',
        'icon': 'fa-calculator',
        'gradient_light': '#86efac',
        'gradient_dark': '#4ade80',
        'gradient_deep': '#10b981',
    },
    'asce-7-wind-load-velocity-finder-wind-speed-by-zip-code.html': {
        'title': 'Wind Speed by Zip Code - ASCE 7 Velocity Finder | Instant Design Wind Speed Lookup',
        'description': 'Find ASCE 7 design wind speeds instantly by zip code. Free online wind speed lookup tool for ASCE 7-16 and 7-22 with Risk Category adjustments.',
        'hero_title': 'Wind Speed by Zip Code',
        'hero_subtitle': 'Instant ASCE 7 wind speed lookup using zip code search',
        'breadcrumb': 'Wind Speed Finder',
        'icon': 'fa-search-location',
        'gradient_light': '#fdba74',
        'gradient_dark': '#fb923c',
        'gradient_deep': '#f59e0b',
    }
}

# Generate each page
for filename, config in pages.items():
    content = template

    # Replace metadata
    content = content.replace(
        '<title>ASCE 7-16 Wind Speed Maps - Design Wind Speeds for Building Code Compliance | Wind Load Solutions</title>',
        f'<title>{config["title"]}</title>'
    )
    content = content.replace(
        'content="Complete guide to ASCE 7-16 wind speed maps (Figures 26.5-1A through 26.5-1C). Learn how to read wind speed contours, interpolate between zones, and determine design wind speeds for your project location."',
        f'content="{config["description"]}"'
    )

    # Replace breadcrumb
    content = content.replace(
        'ASCE 7-16 Wind Speed Maps',
        config['breadcrumb']
    )

    # Replace hero icon
    content = content.replace(
        '<i class="fas fa-map"></i>',
        f'<i class="fas {config["icon"]}"></i>',
        1  # Only first occurrence in hero
    )

    # Replace hero title and subtitle
    content = content.replace(
        '<h1>ASCE 7-16 Wind Speed Maps</h1>',
        f'<h1>{config["hero_title"]}</h1>'
    )
    content = content.replace(
        '<p class="hero-subtitle">Comprehensive guide to reading, interpreting, and applying ASCE 7-16 wind speed maps for building code compliance</p>',
        f'<p class="hero-subtitle">{config["hero_subtitle"]}</p>'
    )

    # Replace color variables
    content = content.replace('--map-light: #93c5fd;', f'--map-light: {config["gradient_light"]};')
    content = content.replace('--map-dark: #60a5fa;', f'--map-dark: {config["gradient_dark"]};')
    content = content.replace('--map-deep: #3b82f6;', f'--map-deep: {config["gradient_deep"]};')

    # Write the file
    with open(filename, 'w', encoding='utf-8') as f:
        f.write(content)

    print(f'Created: {filename}')

print('\nAll 4 wind speed pages created successfully!')
print('Note: Content sections still need to be customized for each page.')
