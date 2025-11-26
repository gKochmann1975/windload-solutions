const fs = require('fs');

// Read the template
const template = fs.readFileSync('state-requirements.html', 'utf8');

// Extract components
const cssMatch = template.match(/<style>([\s\S]*?)<\/style>/);
const css = cssMatch ? cssMatch[1] : '';

const scriptMatches = template.match(/<script>([\s\S]*?)<\/script>/g);
const mainScript = scriptMatches ? scriptMatches[scriptMatches.length - 1].replace(/<\/?script>/g, '') : '';

const headerMatch = template.match(/<!-- Header -->([\s\S]*?)<!-- Navigation Overlay -->/);
const headerHTML = headerMatch ? headerMatch[0] : '';

const navMatch = template.match(/(<!-- Navigation Overlay -->[\s\S]*?<\/nav>)/);
const navHTML = navMatch ? navMatch[1] : '';

const footerMatch = template.match(/<!-- Footer -->([\s\S]*?)<\/footer>/);
const footerHTML = footerMatch ? `<!-- Footer -->${footerMatch[1]}</footer>` : '';

// Common CSS additions for all terrain pages
const terrainCSS = `
        /* Terrain Navigation */
        .terrain-nav {
            background: linear-gradient(135deg, rgba(0, 24, 255, 0.05), rgba(0, 212, 255, 0.05));
            padding: 2rem 0;
            position: sticky;
            top: 80px;
            z-index: 100;
            border-bottom: 2px solid rgba(0, 24, 255, 0.1);
        }

        .terrain-nav-links {
            display: flex;
            gap: 1rem;
            flex-wrap: wrap;
            justify-content: center;
        }

        .terrain-nav-link {
            padding: 0.8rem 1.5rem;
            background: white;
            border: 2px solid var(--primary-blue);
            border-radius: 8px;
            font-weight: 600;
            color: var(--primary-blue);
            text-decoration: none;
            transition: all 0.3s ease;
            font-size: 0.95rem;
        }

        .terrain-nav-link:hover,
        .terrain-nav-link.active {
            background: var(--primary-blue);
            color: white;
            transform: translateY(-2px);
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
            .terrain-nav-links {
                flex-direction: column;
            }

            .terrain-nav-link {
                width: 100%;
            }
        }
`;

// Terrain navigation component
function getTerrainNav(activePage) {
    return `
    <!-- Terrain Type Navigation -->
    <div class="terrain-nav">
        <div class="container">
            <div class="terrain-nav-links">
                <a href="topographic-effects-wind-loads.html" class="terrain-nav-link">📋 Overview</a>
                <a href="topographic-flat-terrain.html" class="terrain-nav-link ${activePage === 'flat' ? 'active' : ''}">🏜️ Flat Terrain</a>
                <a href="topographic-escarpment.html" class="terrain-nav-link ${activePage === 'escarpment' ? 'active' : ''}">⛰️ Escarpment</a>
                <a href="topographic-2d-ridge.html" class="terrain-nav-link ${activePage === '2d' ? 'active' : ''}">🏔️ 2D Ridge</a>
                <a href="topographic-3d-hill.html" class="terrain-nav-link ${activePage === '3d' ? 'active' : ''}">⛰️ 3D Hill</a>
            </div>
        </div>
    </div>`;
}

// Page configurations
const pages = [
    {
        filename: 'topographic-flat-terrain.html',
        activePage: 'flat',
        title: 'Flat Terrain - Kzt = 1.0 | Topographic Factor Guide',
        metaDesc: 'Understanding flat terrain wind loads where Kzt = 1.0. Learn when topographic factor does not apply and how to identify flat terrain sites per ASCE 7.',
        heroTitle: 'Flat Terrain Wind Loads',
        heroSubtitle: 'When Kzt = 1.0 and topographic amplification does not occur',
        content: `
    <section class="content-section">
        <div class="container">
            <h2>What is Flat Terrain?</h2>

            <p>Flat terrain refers to sites with no significant topographic features that would cause wind speed-up effects. The vast majority of development sites fall into this category. When a site is classified as flat terrain, the topographic factor Kzt = 1.0, meaning there is no amplification of wind speeds due to terrain effects.</p>

            <div class="formula-box">
                <strong>For Flat Terrain:</strong><br>
                Kzt = 1.0
            </div>

            <p>This is the default and most common condition. Wind load calculations use the base wind speed from ASCE 7 wind speed maps without any topographic adjustments.</p>
        </div>
    </section>

    <section class="content-section">
        <div class="container">
            <h2>When is a Site Considered Flat Terrain?</h2>

            <h3>A site is flat terrain when ANY of these conditions exist:</h3>

            <ul>
                <li><strong>No significant elevation changes:</strong> The surrounding area within 2 miles upwind is relatively level</li>
                <li><strong>Upwind slope less than 10%:</strong> If there are elevation changes, the upwind slope (H/Lh) is less than 0.10</li>
                <li><strong>Not isolated:</strong> Topographic features are not isolated (surrounded by similar features at similar elevations)</li>
                <li><strong>Below minimum height criteria:</strong> Hills or ridges don't meet ASCE 7's minimum height requirements</li>
                <li><strong>Outside speed-up zones:</strong> Site is located far from any hills, ridges, or escarpments (beyond the defined speed-up zone distances)</li>
            </ul>

            <div class="info-box">
                <strong>📍 Key Point:</strong> If you're unsure whether your site has topographic effects, start by assuming Kzt = 1.0. Only calculate Kzt if you have clear evidence of an isolated hill, ridge, or escarpment meeting all ASCE 7 criteria.
            </div>
        </div>
    </section>

    <section class="content-section">
        <div class="container">
            <h2>Examples of Flat Terrain Sites</h2>

            <ul>
                <li><strong>Urban and suburban developments:</strong> Most residential and commercial sites in developed areas</li>
                <li><strong>Agricultural land:</strong> Farmland, prairies, plains with minimal elevation change</li>
                <li><strong>Coastal areas:</strong> Beach developments away from dunes or bluffs</li>
                <li><strong>River valleys:</strong> Development on valley floors (not on valley sides)</li>
                <li><strong>Plateau surfaces:</strong> Development on top of plateaus (not near edges)</li>
            </ul>

            <div class="warning-box">
                <strong>⚠️ Not Flat Terrain:</strong> Sites on or near isolated hills, ridges, coastal bluffs, or escarpments require topographic factor analysis and may have Kzt > 1.0.
            </div>
        </div>
    </section>

    <section class="content-section">
        <div class="container">
            <h2>Why Kzt = 1.0 for Flat Terrain</h2>

            <p>Wind speed-up occurs when airflow is compressed or accelerated over topographic features. On flat terrain, there is no compression of airflow, no acceleration around obstacles, and no orographic effects. The wind speed remains consistent with the regional wind climate represented in ASCE 7 wind speed maps.</p>

            <h3>Wind Behavior Over Flat Terrain:</h3>

            <ul>
                <li>Wind flows horizontally without vertical deflection</li>
                <li>No channeling or acceleration effects</li>
                <li>Wind speed determined primarily by exposure category (B, C, or D)</li>
                <li>Surface roughness is the dominant factor, not topography</li>
            </ul>
        </div>
    </section>

    <section class="content-section">
        <div class="container">
            <h2>ASCE 7 Requirements for Flat Terrain</h2>

            <p>Per ASCE 7-22 Section 26.8, when a site does not meet the conditions for topographic speed-up effects, Kzt shall be taken as 1.0. This includes:</p>

            <ul>
                <li>Sites where H/Lh ≤ 0.10 (upwind slope less than 10%)</li>
                <li>Sites located beyond the speed-up zone distances defined in Figure 26.8-1</li>
                <li>Topographic features that are not isolated</li>
                <li>Sites where the topographic feature height does not meet minimum criteria</li>
            </ul>

            <div class="info-box">
                <strong>💡 Design Simplification:</strong> Using Kzt = 1.0 simplifies wind load calculations and is conservative for most flat sites. You do not need to provide justification for Kzt = 1.0 unless the building official questions topographic conditions.
            </div>
        </div>
    </section>

    <section class="content-section">
        <div class="container">
            <h2>Documentation for Flat Terrain Sites</h2>

            <p>While detailed topographic analysis is not required for flat terrain, it's good practice to document:</p>

            <ul>
                <li><strong>Site photos:</strong> Show general terrain conditions</li>
                <li><strong>USGS topographic map:</strong> Demonstrate no significant elevation changes</li>
                <li><strong>Google Earth profile:</strong> Show terrain elevation along cardinal directions</li>
                <li><strong>Statement in calculations:</strong> "Site is located on flat terrain with no isolated topographic features. Kzt = 1.0 per ASCE 7-22 Section 26.8."</li>
            </ul>
        </div>
    </section>`
    },
    {
        filename: 'topographic-escarpment.html',
        activePage: 'escarpment',
        title: 'Escarpment Wind Loads - Kzt Calculations per ASCE 7',
        metaDesc: 'Complete guide to calculating topographic factor (Kzt) for escarpments. Learn ASCE 7 requirements for cliffs, bluffs, and steep slopes.',
        heroTitle: 'Escarpment Topographic Effects',
        heroSubtitle: 'Wind speed-up effects on cliffs, bluffs, and steep slopes',
        content: `
    <section class="content-section">
        <div class="container">
            <h2>What is an Escarpment?</h2>

            <p>An escarpment is a cliff or steep slope separating two relatively level areas of different elevations. Escarpments cause wind to accelerate as it flows up and over the sharp edge, creating a speed-up zone on the upper level near the crest.</p>

            <p>Common examples include:</p>
            <ul>
                <li>Coastal bluffs overlooking the ocean</li>
                <li>River valley walls</li>
                <li>Plateau edges (mesas)</li>
                <li>Man-made cuts (highway embankments, quarry walls)</li>
                <li>Fault scarps</li>
            </ul>
        </div>
    </section>

    <section class="content-section">
        <div class="container">
            <h2>When Does Kzt Apply to Escarpments?</h2>

            <h3>ALL of these conditions must be met:</h3>

            <ul>
                <li><strong>Isolated feature:</strong> Escarpment is unobstructed upwind by other similar topographic features</li>
                <li><strong>Height requirement:</strong> Escarpment height H ≥ 15 feet (4.5 meters)</li>
                <li><strong>Slope requirement:</strong> Upwind slope H/Lh ≥ 0.10 (10% or steeper)</li>
                <li><strong>Location requirement:</strong> Structure is within the speed-up zone (within specific distances from crest)</li>
            </ul>

            <div class="formula-box">
                <strong>Speed-Up Zone for Escarpments:</strong><br>
                Upwind: 0 to 2H from crest<br>
                Downwind: 0 to 4H from crest
            </div>
        </div>
    </section>

    <section class="content-section">
        <div class="container">
            <h2>Calculating Kzt for Escarpments</h2>

            <div class="formula-box">
                Kzt = (1 + K1 × K2 × K3)²
            </div>

            <h3>K1 - Shape Factor for Escarpments</h3>
            <p>From ASCE 7-22 Figure 26.8-1:</p>
            <ul>
                <li>Use escarpment values from table</li>
                <li>Depends on upwind slope H/Lh</li>
                <li>K1 ranges from 0.40 to 0.75 for escarpments</li>
            </ul>

            <h3>K2 - Horizontal Distance Factor</h3>
            <ul>
                <li>K2 = 1.0 at the crest</li>
                <li>Decreases with distance upwind and downwind from crest</li>
                <li>K2 = 0 beyond the speed-up zone</li>
            </ul>

            <h3>K3 - Height Above Ground Factor</h3>
            <ul>
                <li>K3 = 1.0 at ground level</li>
                <li>Decreases linearly with height above ground</li>
                <li>K3 accounts for reduction in topographic effects with elevation above local terrain</li>
            </ul>

            <div class="info-box">
                <strong>📊 Typical Range:</strong> For escarpments, Kzt typically ranges from 1.00 to 1.45, depending on height, slope, and location relative to the crest.
            </div>
        </div>
    </section>

    <section class="content-section">
        <div class="container">
            <h2>Design Considerations for Escarpment Sites</h2>

            <ul>
                <li><strong>Greatest effects at crest:</strong> Buildings located right at the escarpment edge experience maximum wind pressure increases</li>
                <li><strong>Wind direction matters:</strong> Speed-up only occurs for winds perpendicular to the escarpment edge</li>
                <li><strong>Lower level unaffected:</strong> Structures below the escarpment typically have Kzt = 1.0</li>
                <li><strong>Setback considerations:</strong> Moving structures back from the edge reduces Kzt effects</li>
            </ul>

            <div class="warning-box">
                <strong>⚠️ Coastal Bluffs:</strong> Structures on coastal bluffs often face both high wind exposure (Exposure D) AND topographic amplification (Kzt > 1.0), resulting in very high design wind pressures.
            </div>
        </div>
    </section>

    <section class="content-section">
        <div class="container">
            <h2>ASCE 7 References</h2>

            <ul>
                <li><strong>ASCE 7-22:</strong> Section 26.8, Figure 26.8-1 (Escarpment parameters)</li>
                <li><strong>ASCE 7-16:</strong> Section 26.8, Figure 26.8-1</li>
                <li><strong>ASCE 7-10:</strong> Section 26.8, Figure 26.8-1</li>
            </ul>

            <p>Commentary Section C26.8 provides additional guidance on identifying and analyzing escarpments.</p>
        </div>
    </section>`
    },
    // (Continuing in next part due to length...)
];

// Create pages
pages.forEach(page => {
    const html = `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="icon" type="image/svg+xml" href="images/windloadsolutions-favicon.svg">
    <title>${page.title}</title>
    <meta name="description" content="${page.metaDesc}">

    <style>
${css}
${terrainCSS}
    </style>
</head>
<body>
    ${headerHTML}
    ${navHTML}

    <!-- Hero Section -->
    <section class="hero-section">
        <div class="container">
            <div class="hero-content">
                <h1 class="hero-title">${page.heroTitle}</h1>
                <p class="hero-subtitle">${page.heroSubtitle}</p>
            </div>
        </div>
    </section>

    ${getTerrainNav(page.activePage)}

    ${page.content}

    <!-- CTA Section -->
    <section class="cta-section">
        <div class="container">
            <h2>Need Topographic Factor Calculations?</h2>
            <p>Our wind load calculator handles all terrain types automatically</p>
            <a href="https://windloadcalc.com" class="cta-button" target="_blank">Try Wind Load Calculator →</a>
        </div>
    </section>

    ${footerHTML}

    <script>
${mainScript}
    </script>
</body>
</html>`;

    fs.writeFileSync(page.filename, html, 'utf8');
    console.log(`✅ Created ${page.filename}`);
});

console.log('\n✅ All terrain pages created successfully!');
