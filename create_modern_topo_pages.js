const fs = require('fs');

// Read index.html to extract the proper modern styling
const indexHTML = fs.readFileSync('index.html', 'utf8');

// Extract CSS from index.html
const cssMatch = indexHTML.match(/<style>([\s\S]*?)<\/style>/);
const baseCSS = cssMatch ? cssMatch[1] : '';

// Extract JavaScript
const scriptMatches = indexHTML.match(/<script>([\s\S]*?)<\/script>/g);
const mainScript = scriptMatches ? scriptMatches[scriptMatches.length - 1].replace(/<\/?script>/g, '') : '';

// Extract header
const headerMatch = indexHTML.match(/<!-- Header -->([\s\S]*?)<!-- Navigation Overlay -->/);
const headerHTML = headerMatch ? headerMatch[0] : '';

// Extract navigation
const navMatch = indexHTML.match(/(<!-- Navigation Overlay -->[\s\S]*?<\/nav>)/);
const navHTML = navMatch ? navMatch[1] : '';

// Extract footer
const footerMatch = indexHTML.match(/<!-- Footer -->([\s\S]*?)<\/footer>/);
const footerHTML = footerMatch ? `<!-- Footer -->${footerMatch[1]}</footer>` : '';

// Additional modern CSS for topographic pages
const topoCSS = `
        /* Topographic Navigation Bar */
        .topo-nav {
            position: sticky;
            top: 90px;
            z-index: 100;
            background: rgba(255, 255, 255, 0.95);
            backdrop-filter: blur(20px);
            border-bottom: 1px solid rgba(0, 24, 255, 0.1);
            padding: 1.5rem 0;
            margin-bottom: 3rem;
        }

        .topo-nav-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
            gap: 1rem;
            max-width: 1000px;
            margin: 0 auto;
        }

        .topo-nav-btn {
            display: flex;
            flex-direction: column;
            align-items: center;
            gap: 0.75rem;
            padding: 1.25rem 1rem;
            background: white;
            border-radius: 15px;
            text-decoration: none;
            color: #1f2937;
            font-weight: 600;
            font-size: 0.95rem;
            box-shadow: 0 4px 15px rgba(0,0,0,0.08);
            transition: all 0.3s ease;
            border: 2px solid transparent;
        }

        .topo-nav-btn:hover {
            transform: translateY(-5px);
            box-shadow: 0 8px 25px rgba(0,0,0,0.15);
        }

        .topo-nav-btn.active {
            border-color: currentColor;
            box-shadow: 0 8px 30px rgba(0,24,255,0.2);
        }

        .topo-icon {
            width: 50px;
            height: 50px;
            border-radius: 12px;
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 1.8rem;
        }

        /* Color-coded icons for each terrain type */
        .topo-nav-btn:nth-child(1) { color: #6b7280; }
        .topo-nav-btn:nth-child(1) .topo-icon { background: linear-gradient(135deg, #6b7280, #4b5563); }

        .topo-nav-btn:nth-child(2) { color: #06b6d4; }
        .topo-nav-btn:nth-child(2) .topo-icon { background: linear-gradient(135deg, #06b6d4, #0891b2); }

        .topo-nav-btn:nth-child(3) { color: #f97316; }
        .topo-nav-btn:nth-child(3) .topo-icon { background: linear-gradient(135deg, #f97316, #ea580c); }

        .topo-nav-btn:nth-child(4) { color: #a855f7; }
        .topo-nav-btn:nth-child(4) .topo-icon { background: linear-gradient(135deg, #a855f7, #9333ea); }

        .topo-nav-btn:nth-child(5) { color: #10b981; }
        .topo-nav-btn:nth-child(5) .topo-icon { background: linear-gradient(135deg, #10b981, #059669); }

        /* Modern content sections */
        .topo-section {
            padding: 5rem 0;
        }

        .topo-section:nth-child(even) {
            background: #f8fafc;
        }

        .topo-section h2 {
            font-size: clamp(2rem, 5vw, 2.75rem);
            font-weight: 800;
            color: #1f2937;
            margin-bottom: 2rem;
        }

        .topo-section h3 {
            font-size: 1.75rem;
            font-weight: 700;
            color: #0018ff;
            margin: 2.5rem 0 1.25rem;
        }

        .topo-section p {
            font-size: 1.15rem;
            line-height: 1.8;
            color: #4b5563;
            margin-bottom: 1.5rem;
        }

        .topo-section ul {
            list-style: none;
            margin: 2rem 0;
        }

        .topo-section li {
            padding: 0.75rem 0 0.75rem 2rem;
            position: relative;
            font-size: 1.1rem;
            line-height: 1.7;
            color: #4b5563;
        }

        .topo-section li::before {
            content: "→";
            position: absolute;
            left: 0;
            color: #0018ff;
            font-weight: 700;
            font-size: 1.3rem;
        }

        /* Modern info boxes */
        .formula-box {
            background: linear-gradient(135deg, rgba(0, 24, 255, 0.05), rgba(6, 182, 212, 0.05));
            border-left: 4px solid #0018ff;
            border-radius: 15px;
            padding: 2rem;
            margin: 2.5rem 0;
            font-family: 'SF Mono', 'Monaco', 'Courier New', monospace;
            font-size: 1.3rem;
            text-align: center;
            font-weight: 600;
            color: #0018ff;
        }

        .info-box {
            background: linear-gradient(135deg, rgba(16, 185, 129, 0.08), rgba(5, 150, 105, 0.05));
            border-left: 4px solid #10b981;
            border-radius: 15px;
            padding: 1.75rem;
            margin: 2.5rem 0;
        }

        .info-box strong {
            color: #10b981;
            font-size: 1.1rem;
        }

        .warning-box {
            background: linear-gradient(135deg, rgba(249, 115, 22, 0.08), rgba(234, 88, 12, 0.05));
            border-left: 4px solid #f97316;
            border-radius: 15px;
            padding: 1.75rem;
            margin: 2.5rem 0;
        }

        .warning-box strong {
            color: #f97316;
            font-size: 1.1rem;
        }

        /* Feature cards grid */
        .feature-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
            gap: 2rem;
            margin: 3rem 0;
        }

        .feature-card {
            background: white;
            border-radius: 20px;
            padding: 2rem;
            box-shadow: 0 4px 20px rgba(0,0,0,0.08);
            transition: all 0.3s ease;
            border: 2px solid transparent;
        }

        .feature-card:hover {
            transform: translateY(-8px);
            box-shadow: 0 12px 40px rgba(0,24,255,0.15);
            border-color: #0018ff;
        }

        .feature-card h4 {
            font-size: 1.3rem;
            font-weight: 700;
            color: #1f2937;
            margin-bottom: 1rem;
        }

        .feature-card p {
            font-size: 1rem;
            color: #6b7280;
            line-height: 1.7;
        }

        @media (max-width: 768px) {
            .topo-nav-grid {
                grid-template-columns: 1fr;
            }

            .topo-section {
                padding: 3rem 0;
            }
        }
`;

// Terrain navigation component
function getTopoNav(activePage) {
    const pages = [
        { name: 'Overview', href: 'topographic-effects-wind-loads.html', icon: '📋' },
        { name: 'Flat Terrain', href: 'topographic-flat-terrain.html', icon: '🏜️' },
        { name: 'Escarpment', href: 'topographic-escarpment.html', icon: '⛰️' },
        { name: '2D Ridge', href: 'topographic-2d-ridge.html', icon: '🏔️' },
        { name: '3D Hill', href: 'topographic-3d-hill.html', icon: '🗻' }
    ];

    return `
    <!-- Topographic Navigation -->
    <div class="topo-nav">
        <div class="container">
            <div class="topo-nav-grid">
                ${pages.map((page, idx) => `
                <a href="${page.href}" class="topo-nav-btn ${activePage === idx ? 'active' : ''}">
                    <div class="topo-icon">${page.icon}</div>
                    <span>${page.name}</span>
                </a>`).join('')}
            </div>
        </div>
    </div>`;
}

// Page configurations with modern content
const pages = [
    {
        filename: 'topographic-effects-wind-loads.html',
        activePage: 0,
        title: 'Topographic Effects on Wind Loads - ASCE 7 Kzt Factor Guide',
        metaDesc: 'Comprehensive guide to topographic effects on wind loads. Learn about Kzt factors, escarpments, ridges, hills, and how terrain affects wind pressure calculations per ASCE 7.',
        heroTitle: 'Topographic Effects on Wind Loads',
        heroSubtitle: 'Understanding how terrain features amplify wind speeds and increase design pressures per ASCE 7',
        heroGradient: 'linear-gradient(135deg, #0018ff 0%, #181E57 100%)',
        content: `
    <section class="topo-section">
        <div class="container">
            <h2>What is the Topographic Factor (Kzt)?</h2>

            <p>The topographic factor, Kzt, is a multiplier in ASCE 7 wind load calculations that accounts for <strong>wind speed-up effects</strong> caused by terrain features such as hills, ridges, and escarpments. When wind flows over these features, it accelerates on the upwind slope and near the crest, resulting in higher wind speeds and increased pressures on structures.</p>

            <div class="formula-box">
                Kzt = (1 + K1 × K2 × K3)²
            </div>

            <p><strong>Where:</strong></p>
            <ul>
                <li><strong>K1</strong> = Factor for shape of topographic feature (hill, ridge, or escarpment)</li>
                <li><strong>K2</strong> = Factor for reduction with distance upwind or downwind of crest</li>
                <li><strong>K3</strong> = Factor for reduction with height above local terrain</li>
            </ul>

            <div class="info-box">
                <strong>📍 Key Point:</strong> For most flat terrain sites, Kzt = 1.0, meaning no topographic amplification. However, structures on or near hills, ridges, or escarpments may experience significantly higher wind pressures (Kzt up to 1.55).
            </div>
        </div>
    </section>

    <section class="topo-section">
        <div class="container">
            <h2>When Does Topographic Factor Apply?</h2>

            <h3>Kzt Must Be Calculated When ALL Conditions Are Met:</h3>

            <div class="feature-grid">
                <div class="feature-card">
                    <h4>🏔️ Isolated Feature</h4>
                    <p>Hill, ridge, or escarpment is unobstructed by other similar topographic features upwind</p>
                </div>

                <div class="feature-card">
                    <h4>📏 Height Requirement</h4>
                    <p>The topographic feature height (H) meets minimum criteria relative to surrounding terrain</p>
                </div>

                <div class="feature-card">
                    <h4>📐 Slope Requirement</h4>
                    <p>The upwind slope exceeds 10% (H/Lh > 0.10)</p>
                </div>

                <div class="feature-card">
                    <h4>📍 Location Requirement</h4>
                    <p>Structure is within the speed-up zone (specific distances from crest)</p>
                </div>
            </div>

            <div class="warning-box">
                <strong>⚠️ Important:</strong> If ANY of these conditions are not met, use Kzt = 1.0 (no topographic amplification).
            </div>
        </div>
    </section>

    <section class="topo-section">
        <div class="container">
            <h2>Four Terrain Types Defined by ASCE 7</h2>

            <div class="feature-grid">
                <div class="feature-card">
                    <h4>🏜️ Flat Terrain</h4>
                    <p><strong>Kzt = 1.0</strong></p>
                    <p>Most development sites. No wind speed-up effects. Uses base wind speed from ASCE 7 maps.</p>
                    <a href="topographic-flat-terrain.html" style="color: #06b6d4; font-weight: 600; margin-top: 1rem; display: inline-block;">Learn More →</a>
                </div>

                <div class="feature-card">
                    <h4>⛰️ Escarpment</h4>
                    <p><strong>Kzt: 1.0 to 1.45</strong></p>
                    <p>Cliff or steep slope separating two level areas. Wind accelerates over the edge.</p>
                    <a href="topographic-escarpment.html" style="color: #f97316; font-weight: 600; margin-top: 1rem; display: inline-block;">Learn More →</a>
                </div>

                <div class="feature-card">
                    <h4>🏔️ 2D Ridge</h4>
                    <p><strong>Kzt: 1.0 to 1.55</strong></p>
                    <p>Elongated hill with uniform cross-section. Maximum speed-up at crest.</p>
                    <a href="topographic-2d-ridge.html" style="color: #a855f7; font-weight: 600; margin-top: 1rem; display: inline-block;">Learn More →</a>
                </div>

                <div class="feature-card">
                    <h4>🗻 3D Hill</h4>
                    <p><strong>Kzt: 1.0 to 1.35</strong></p>
                    <p>Isolated hill with wind flow around all sides. Lower speed-up than 2D ridges.</p>
                    <a href="topographic-3d-hill.html" style="color: #10b981; font-weight: 600; margin-top: 1rem; display: inline-block;">Learn More →</a>
                </div>
            </div>
        </div>
    </section>

    <section class="topo-section">
        <div class="container">
            <h2>ASCE 7 References</h2>

            <ul>
                <li><strong>ASCE 7-22:</strong> Section 26.8 - Topographic Factor</li>
                <li><strong>ASCE 7-16:</strong> Section 26.8 - Topographic Factor</li>
                <li><strong>ASCE 7-10:</strong> Section 26.8 - Topographic Factor</li>
                <li><strong>Figure 26.8-1:</strong> Provides geometric parameters and K1, K2, K3 values</li>
            </ul>

            <div class="info-box">
                <strong>💡 Pro Tip:</strong> Always check local building codes and jurisdictional amendments, as some areas may have specific requirements for topographic analysis, especially in mountainous or hilly regions.
            </div>
        </div>
    </section>`
    }
];

console.log('Creating modern topographic overview page...');

// Create overview page
const page = pages[0];
const html = `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="icon" type="image/svg+xml" href="images/windloadsolutions-favicon.svg">
    <title>${page.title}</title>
    <meta name="description" content="${page.metaDesc}">

    <style>
${baseCSS}
${topoCSS}
    </style>
</head>
<body>
    ${headerHTML}
    ${navHTML}

    <!-- Hero Section -->
    <section class="hero-section">
        <div class="hero-overlay"></div>
        <div class="hero-content">
            <div class="hero-scale-wrapper">
                <h1 class="hero-title">${page.heroTitle}</h1>
                <p class="hero-subtitle">${page.heroSubtitle}</p>
            </div>
        </div>
    </section>

    ${getTopoNav(page.activePage)}

    ${page.content}

    <!-- CTA Section -->
    <section class="content-section" style="background: linear-gradient(135deg, #0018ff 0%, #181E57 100%); text-align: center; color: white;">
        <div class="container">
            <h2 style="color: white; font-size: 2.5rem; margin-bottom: 1.5rem;">Need Help with Topographic Factor Calculations?</h2>
            <p style="font-size: 1.25rem; margin-bottom: 2.5rem; opacity: 0.95;">Our wind load calculator automatically determines Kzt based on your site's topography</p>
            <a href="https://windloadcalc.com" class="hero-btn primary" target="_blank">Try Wind Load Calculator →</a>
        </div>
    </section>

    ${footerHTML}

    <script>
${mainScript}
    </script>
</body>
</html>`;

fs.writeFileSync(page.filename, html, 'utf8');
console.log(`✅ Created ${page.filename} with modern Web 3.0 styling!`);
