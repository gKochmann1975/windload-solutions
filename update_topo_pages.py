#!/usr/bin/env python3
"""
Update topographic pages with correct content for each type
"""

# Define replacements for each page type
replacements = {
    'escarpment': {
        'title': 'Escarpment Topographic Effects - Kzt > 1.0',
        'meta_desc': 'Understanding escarpment topographic effects on wind loads. Learn how cliffs and bluffs amplify wind speeds with Kzt factors per ASCE 7-22.',
        'gradient': 'linear-gradient(135deg, #f97316 0%, #ea580c 100%)',
        'border_color': 'rgba(249, 115, 22, 0.3)',
        'highlight_bg': '#ffedd5',
        'highlight_border': '#f97316',
        'icon': 'fa-layer-group',
        'hero_title': 'Escarpment',
        'hero_subtitle': '2D cliff-like terrain features with wind speed amplification',
        'kzt_value': 'Kzt > 1.0',
        'animation_file': 'topographic-escarpment-animation.html',
        'animation_title': 'Escarpment Wind Flow Animation',
        'link_color': '#f97316'
    },
    '2d-ridge': {
        'title': '2D Ridge Topographic Effects - Kzt > 1.0',
        'meta_desc': 'Understanding 2D ridge topographic effects on wind loads. Learn how elongated ridges amplify wind speeds with Kzt factors per ASCE 7-22.',
        'gradient': 'linear-gradient(135deg, #a855f7 0%, #9333ea 100%)',
        'border_color': 'rgba(168, 85, 247, 0.3)',
        'highlight_bg': '#f3e8ff',
        'highlight_border': '#a855f7',
        'icon': 'fa-mountain',
        'hero_title': '2D Ridge',
        'hero_subtitle': 'Elongated ridge features with wind speed amplification',
        'kzt_value': 'Kzt > 1.0',
        'animation_file': 'topographic-2d-ridge-animation.html',
        'animation_title': '2D Ridge Wind Flow Animation',
        'link_color': '#a855f7'
    },
    '3d-hill': {
        'title': '3D Axisymmetric Hill Topographic Effects - Kzt > 1.0',
        'meta_desc': 'Understanding 3D hill topographic effects on wind loads. Learn how isolated hills amplify wind speeds with Kzt factors per ASCE 7-22.',
        'gradient': 'linear-gradient(135deg, #10b981 0%, #059669 100%)',
        'border_color': 'rgba(16, 185, 129, 0.3)',
        'highlight_bg': '#d1fae5',
        'highlight_border': '#10b981',
        'icon': 'fa-draw-polygon',
        'hero_title': '3D Axisymmetric Hill',
        'hero_subtitle': 'Isolated circular hills with omnidirectional wind amplification',
        'kzt_value': 'Kzt > 1.0',
        'animation_file': 'topographic-3d-hill-animation.html',
        'animation_title': '3D Hill Wind Flow Animation',
        'link_color': '#10b981'
    }
}

# Process each file
for page_type, repl in replacements.items():
    filename = f'topographic-{page_type}.html'
    print(f"Processing {filename}...")

    with open(filename, 'r', encoding='utf-8') as f:
        content = f.read()

    # Replace meta and title
    content = content.replace(
        'Flat Terrain Topographic Effects - Kzt = 1.0',
        repl['title']
    )
    content = content.replace(
        'Understanding flat terrain and wind loads. Learn why Kzt equals 1.0 on flat terrain and when no topographic amplification occurs per ASCE 7-22.',
        repl['meta_desc']
    )

    # Replace colors
    content = content.replace(
        'linear-gradient(135deg, #06b6d4 0%, #0891b2 100%)',
        repl['gradient']
    )
    content = content.replace(
        'rgba(6, 182, 212, 0.3)',
        repl['border_color']
    )
    content = content.replace(
        '#e0f2fe',
        repl['highlight_bg']
    )
    content = content.replace(
        'border-left: 4px solid #06b6d4',
        f"border-left: 4px solid {repl['highlight_border']}"
    )
    content = content.replace(
        'color: #06b6d4',
        f"color: {repl['link_color']}"
    )

    # Replace hero section
    content = content.replace(
        '<i class="fas fa-minus"></i> Flat Terrain',
        f'<i class="fas {repl["icon"]}"></i> {repl["hero_title"]}'
    )
    content = content.replace(
        'No topographic amplification of wind speeds',
        repl['hero_subtitle']
    )
    content = content.replace(
        '<div class="kzt-badge">Kzt = 1.0</div>',
        f'<div class="kzt-badge">{repl["kzt_value"]}</div>'
    )

    # Replace animation
    content = content.replace(
        'topographic-flat-terrain-animation.html',
        repl['animation_file']
    )
    content = content.replace(
        'Flat Terrain Wind Flow Animation',
        repl['animation_title']
    )

    # Write updated content
    with open(filename, 'w', encoding='utf-8') as f:
        f.write(content)

    print(f"  ✅ Updated {filename}")

print("\n✅ All topographic pages updated with correct colors and branding!")
