#!/bin/bash
# Add topographic navigation to all 4 individual topo pages

for file in topographic-flat-terrain.html topographic-escarpment.html topographic-2d-ridge.html topographic-3d-hill.html; do
    echo "Processing $file..."
    
    # Add CSS for topo navigation buttons before the closing </style> tag
    sed -i '/<\/style>/i\
        /* Topographic Navigation */\
        .topo-nav {\
            background: white;\
            border-bottom: 2px solid #e5e7eb;\
            padding: 1.5rem 0;\
        }\
\
        .topo-nav-container {\
            max-width: 1200px;\
            margin: 0 auto;\
            padding: 0 2rem;\
        }\
\
        .topo-nav-title {\
            font-size: 0.9rem;\
            font-weight: 600;\
            color: #6b7280;\
            text-transform: uppercase;\
            letter-spacing: 0.05em;\
            margin-bottom: 1rem;\
        }\
\
        .topo-nav-buttons {\
            display: grid;\
            grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));\
            gap: 1rem;\
        }\
\
        .topo-nav-btn {\
            display: flex;\
            align-items: center;\
            gap: 0.75rem;\
            padding: 1rem 1.5rem;\
            background: white;\
            border: 2px solid #e5e7eb;\
            border-radius: 12px;\
            text-decoration: none;\
            color: #4b5563;\
            font-weight: 600;\
            transition: all 0.3s ease;\
        }\
\
        .topo-nav-btn:hover {\
            transform: translateY(-2px);\
            box-shadow: 0 4px 12px rgba(0,0,0,0.1);\
        }\
\
        .topo-nav-btn.active {\
            border-color: currentColor;\
            background: rgba(0, 24, 255, 0.05);\
        }\
\
        .topo-nav-btn i {\
            font-size: 1.5rem;\
        }\
\
        .topo-nav-btn.flat { color: #06b6d4; }\
        .topo-nav-btn.flat:hover, .topo-nav-btn.flat.active { border-color: #06b6d4; background: rgba(6, 182, 212, 0.05); }\
\
        .topo-nav-btn.escarpment { color: #f97316; }\
        .topo-nav-btn.escarpment:hover, .topo-nav-btn.escarpment.active { border-color: #f97316; background: rgba(249, 115, 22, 0.05); }\
\
        .topo-nav-btn.ridge { color: #a855f7; }\
        .topo-nav-btn.ridge:hover, .topo-nav-btn.ridge.active { border-color: #a855f7; background: rgba(168, 85, 247, 0.05); }\
\
        .topo-nav-btn.hill { color: #10b981; }\
        .topo-nav-btn.hill:hover, .topo-nav-btn.hill.active { border-color: #10b981; background: rgba(16, 185, 129, 0.05); }\
\
        @media (max-width: 768px) {\
            .topo-nav-buttons {\
                grid-template-columns: repeat(2, 1fr);\
            }\
        }
' "$file"

    # Insert the navigation HTML after the hero section
    sed -i '/<!-- Interactive Animation -->/i\
    <!-- Topographic Navigation -->\
    <section class="topo-nav">\
        <div class="topo-nav-container">\
            <div class="topo-nav-title">Jump to Topographic Type</div>\
            <div class="topo-nav-buttons">\
                <a href="topographic-flat-terrain.html" class="topo-nav-btn flat">\
                    <i class="fas fa-minus"></i>\
                    <span>Flat Terrain</span>\
                </a>\
                <a href="topographic-escarpment.html" class="topo-nav-btn escarpment">\
                    <i class="fas fa-layer-group"></i>\
                    <span>Escarpment</span>\
                </a>\
                <a href="topographic-2d-ridge.html" class="topo-nav-btn ridge">\
                    <i class="fas fa-mountain"></i>\
                    <span>2D Ridge</span>\
                </a>\
                <a href="topographic-3d-hill.html" class="topo-nav-btn hill">\
                    <i class="fas fa-draw-polygon"></i>\
                    <span>3D Hill</span>\
                </a>\
            </div>\
        </div>\
    </section>\

' "$file"

    echo "✅ Updated $file"
done

echo "All topographic pages updated with navigation!"
