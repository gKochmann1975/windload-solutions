const fs = require('fs');

// Read the template file (state-requirements.html)
const template = fs.readFileSync('state-requirements.html', 'utf8');

// Extract the CSS (everything between <style> and </style>)
const cssMatch = template.match(/<style>([\s\S]*?)<\/style>/);
const css = cssMatch ? cssMatch[1] : '';

// Extract the JavaScript (everything between last <script> and </script>)
const scriptMatches = template.match(/<script>([\s\S]*?)<\/script>/g);
const mainScript = scriptMatches ? scriptMatches[scriptMatches.length - 1].replace(/<\/?script>/g, '') : '';

// Extract header HTML
const headerMatch = template.match(/<!-- Header -->([\s\S]*?)<!-- Navigation Overlay -->/);
const headerHTML = headerMatch ? headerMatch[0] : '';

// Extract navigation overlay and menu
const navMatch = template.match(/(<!-- Navigation Overlay -->[\s\S]*?<\/nav>)/);
const navHTML = navMatch ? navMatch[1] : '';

// Extract footer
const footerMatch = template.match(/<!-- Footer -->([\s\S]*?)<\/footer>/);
const footerHTML = footerMatch ? `<!-- Footer -->${footerMatch[1]}</footer>` : '';

// Create the new topographic overview page
const topoOverviewPage = `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="icon" type="image/svg+xml" href="images/windloadsolutions-favicon.svg">
    <title>Topographic Effects on Wind Loads - ASCE 7 Kzt Factor Guide | Wind Load Solutions</title>
    <meta name="description" content="Comprehensive guide to topographic effects on wind loads. Learn about Kzt factors, escarpments, ridges, hills, and how terrain affects wind pressure calculations per ASCE 7-22.">
    <meta name="keywords" content="topographic factor, Kzt, topographic effects, wind loads, escarpment, ridge, hill, terrain effects, ASCE 7 topography, wind speed-up, orographic effects">

    <!-- Open Graph -->
    <meta property="og:title" content="Topographic Effects on Wind Loads - ASCE 7 Kzt Factor Guide">
    <meta property="og:description" content="Learn how terrain topography affects wind loads. Complete guide to Kzt calculations for escarpments, ridges, and hills per ASCE 7.">
    <meta property="og:type" content="website">
    <meta property="og:url" content="https://windload.solutions/topographic-effects-wind-loads.html">

    <!-- Schema Markup -->
    <script type="application/ld+json">
    {
        "@context": "https://schema.org",
        "@type": "WebPage",
        "name": "Topographic Effects on Wind Loads",
        "description": "Guide to topographic factor (Kzt) and terrain effects on wind loads per ASCE 7",
        "url": "https://windload.solutions/topographic-effects-wind-loads.html",
        "publisher": {
            "@type": "Organization",
            "name": "Wind Load Solutions"
        }
    }
    </script>

    <style>
${css}

        /* Additional styles for terrain type toggles */
        .terrain-toggles {
            display: flex;
            gap: 1rem;
            flex-wrap: wrap;
            justify-content: center;
            margin: 2rem 0;
        }

        .terrain-toggle {
            padding: 1.2rem 2rem;
            background: white;
            border: 3px solid var(--primary-blue);
            border-radius: 12px;
            font-weight: 700;
            font-size: 1.1rem;
            color: var(--primary-blue);
            text-decoration: none;
            transition: all 0.3s ease;
            box-shadow: 0 4px 15px rgba(0, 24, 255, 0.1);
        }

        .terrain-toggle:hover {
            background: var(--primary-blue);
            color: white;
            transform: translateY(-3px);
            box-shadow: 0 8px 25px rgba(0, 24, 255, 0.25);
        }

        .content-section {
            padding: 4rem 0;
            background: white;
        }

        .content-section:nth-child(even) {
            background: var(--bg-light);
        }

        .content-section h2 {
            font-size: 2.5rem;
            color: var(--text-primary);
            margin-bottom: 1.5rem;
            text-align: center;
        }

        .content-section h3 {
            font-size: 1.8rem;
            color: var(--primary-blue);
            margin: 2rem 0 1rem;
        }

        .content-section p {
            font-size: 1.15rem;
            line-height: 1.8;
            color: var(--text-secondary);
            margin-bottom: 1rem;
        }

        .content-section ul {
            margin: 1.5rem 0 1.5rem 2rem;
        }

        .content-section li {
            font-size: 1.1rem;
            line-height: 1.8;
            color: var(--text-secondary);
            margin-bottom: 0.75rem;
        }

        .formula-box {
            background: linear-gradient(135deg, rgba(0, 24, 255, 0.05), rgba(0, 212, 255, 0.05));
            border-left: 5px solid var(--primary-blue);
            padding: 2rem;
            margin: 2rem 0;
            border-radius: var(--radius-md);
            font-family: 'Courier New', monospace;
            font-size: 1.2rem;
            text-align: center;
        }

        .info-box {
            background: rgba(16, 185, 129, 0.1);
            border-left: 5px solid var(--electric-green);
            padding: 1.5rem;
            margin: 2rem 0;
            border-radius: var(--radius-md);
        }

        .warning-box {
            background: rgba(245, 158, 11, 0.1);
            border-left: 5px solid var(--electric-orange);
            padding: 1.5rem;
            margin: 2rem 0;
            border-radius: var(--radius-md);
        }

        @media (max-width: 768px) {
            .terrain-toggles {
                flex-direction: column;
            }

            .terrain-toggle {
                width: 100%;
            }
        }
    </style>
</head>
<body>
    ${headerHTML}

    ${navHTML}

    <!-- Hero Section -->
    <section class="hero-section">
        <div class="container">
            <div class="hero-content">
                <h1 class="hero-title">Topographic Effects on Wind Loads</h1>
                <p class="hero-subtitle">Understanding how terrain features amplify wind speeds and increase design pressures per ASCE 7</p>
            </div>
        </div>
    </section>

    <!-- Terrain Type Navigation -->
    <section class="content-section">
        <div class="container">
            <h2>Select Terrain Type to Learn More</h2>
            <div class="terrain-toggles">
                <a href="topographic-flat-terrain.html" class="terrain-toggle">🏜️ Flat Terrain</a>
                <a href="topographic-escarpment.html" class="terrain-toggle">⛰️ Escarpment</a>
                <a href="topographic-2d-ridge.html" class="terrain-toggle">🏔️ 2D Ridge</a>
                <a href="topographic-3d-hill.html" class="terrain-toggle">⛰️ 3D Hill</a>
            </div>
        </div>
    </section>

    <!-- What is Topographic Factor Section -->
    <section class="content-section">
        <div class="container">
            <h2>What is the Topographic Factor (Kzt)?</h2>

            <p>The topographic factor, Kzt, is a multiplier in ASCE 7 wind load calculations that accounts for wind speed-up effects caused by terrain features such as hills, ridges, and escarpments. When wind flows over these features, it accelerates on the upwind slope and near the crest, resulting in higher wind speeds and increased pressures on structures located in these areas.</p>

            <div class="formula-box">
                Kzt = (1 + K1 × K2 × K3)²
            </div>

            <p>Where:</p>
            <ul>
                <li><strong>K1</strong> = Factor for shape of topographic feature (hill, ridge, or escarpment)</li>
                <li><strong>K2</strong> = Factor for reduction with distance upwind or downwind of crest</li>
                <li><strong>K3</strong> = Factor for reduction with height above local terrain</li>
            </ul>

            <div class="info-box">
                <strong>📍 Key Point:</strong> For most flat terrain sites, Kzt = 1.0, meaning no topographic amplification. However, structures on or near hills, ridges, or escarpments may experience significantly higher wind pressures.
            </div>
        </div>
    </section>

    <!-- When Kzt Applies Section -->
    <section class="content-section">
        <div class="container">
            <h2>When Does Topographic Factor Apply?</h2>

            <h3>Kzt Must Be Calculated When ALL of These Conditions Are Met:</h3>

            <ul>
                <li><strong>Isolated topographic feature:</strong> Hill, ridge, or escarpment that is unobstructed by other similar topographic features</li>
                <li><strong>Height requirement:</strong> The topographic feature height (H) meets minimum criteria relative to surrounding terrain</li>
                <li><strong>Slope requirement:</strong> The upwind slope exceeds 10% (H/Lh > 0.10)</li>
                <li><strong>Location requirement:</strong> Structure is located in the speed-up zone (within specific distances from the crest)</li>
            </ul>

            <div class="warning-box">
                <strong>⚠️ Important:</strong> If ANY of these conditions are not met, Kzt = 1.0 is used (no topographic amplification).
            </div>

            <h3>When Kzt = 1.0 (No Topographic Amplification):</h3>

            <ul>
                <li>Site is located on flat terrain</li>
                <li>Upwind slope is less than 10%</li>
                <li>Structure is outside the speed-up zone</li>
                <li>Topographic feature is not isolated (surrounded by similar features)</li>
                <li>Height of feature doesn't meet minimum criteria</li>
            </ul>
        </div>
    </section>

    <!-- Four Terrain Types Section -->
    <section class="content-section">
        <div class="container">
            <h2>Four Terrain Types Defined by ASCE 7</h2>

            <h3>1. Flat Terrain (Kzt = 1.0)</h3>
            <p>Sites with no significant topographic features. Most development sites fall into this category. No wind speed-up effects occur, and calculations use the base wind speed from ASCE 7 wind speed maps.</p>
            <p><a href="topographic-flat-terrain.html" style="color: var(--primary-blue); font-weight: 600;">Learn more about Flat Terrain →</a></p>

            <h3>2. Escarpment</h3>
            <p>An escarpment is a cliff or steep slope separating two relatively level areas of different elevations. Wind accelerates as it flows up and over the escarpment edge, creating a speed-up zone on the upper level near the crest.</p>
            <p><strong>Typical Kzt range:</strong> 1.0 to 1.45</p>
            <p><a href="topographic-escarpment.html" style="color: var(--primary-blue); font-weight: 600;">Learn more about Escarpments →</a></p>

            <h3>3. Two-Dimensional Ridge</h3>
            <p>An elongated hill or ridge with a relatively uniform cross-section perpendicular to the wind direction. Wind accelerates up both sides of the ridge, with maximum speed-up occurring at the crest.</p>
            <p><strong>Typical Kzt range:</strong> 1.0 to 1.55</p>
            <p><a href="topographic-2d-ridge.html" style="color: var(--primary-blue); font-weight: 600;">Learn more about 2D Ridges →</a></p>

            <h3>4. Three-Dimensional Hill</h3>
            <p>An isolated hill or mountain with wind flow around all sides. Wind speeds increase as air flows up and over the hill, with the highest speeds occurring near the crest. 3D hills typically have lower speed-up than 2D ridges due to flow going around the sides.</p>
            <p><strong>Typical Kzt range:</strong> 1.0 to 1.35</p>
            <p><a href="topographic-3d-hill.html" style="color: var(--primary-blue); font-weight: 600;">Learn more about 3D Hills →</a></p>
        </div>
    </section>

    <!-- ASCE 7 References Section -->
    <section class="content-section">
        <div class="container">
            <h2>ASCE 7 References for Topographic Factor</h2>

            <ul>
                <li><strong>ASCE 7-22:</strong> Section 26.8 - Topographic Factor</li>
                <li><strong>ASCE 7-16:</strong> Section 26.8 - Topographic Factor</li>
                <li><strong>ASCE 7-10:</strong> Section 26.8 - Topographic Factor</li>
            </ul>

            <p>The methodology for calculating Kzt has remained relatively consistent across recent editions of ASCE 7. Figure 26.8-1 provides the geometric parameters and K1, K2, K3 values for different terrain types.</p>

            <div class="info-box">
                <strong>💡 Pro Tip:</strong> Always check local building codes and jurisdictional amendments, as some areas may have specific requirements for topographic analysis, especially in mountainous or hilly regions.
            </div>
        </div>
    </section>

    <!-- CTA Section -->
    <section class="cta-section">
        <div class="container">
            <h2>Need Help with Topographic Factor Calculations?</h2>
            <p>Our wind load calculator automatically determines Kzt based on your site's topography</p>
            <a href="https://windloadcalc.com" class="cta-button" target="_blank">Try Wind Load Calculator →</a>
        </div>
    </section>

    ${footerHTML}

    <script>
${mainScript}
    </script>
</body>
</html>`;

// Write the new file
fs.writeFileSync('topographic-effects-wind-loads.html', topoOverviewPage, 'utf8');
console.log('✅ Created topographic-effects-wind-loads.html');
