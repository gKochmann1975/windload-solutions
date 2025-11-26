const fs = require('fs');

// Read index.html for template
const indexHTML = fs.readFileSync('index.html', 'utf8');

// Extract base CSS and JavaScript from index
const baseCSSMatch = indexHTML.match(/<style>([\s\S]*?)<\/style>/);
const baseCSS = baseCSSMatch ? baseCSSMatch[1] : '';

const scriptMatches = indexHTML.match(/<script>([\s\S]*?)<\/script>/g);
const mainScript = scriptMatches ? scriptMatches[scriptMatches.length - 1].replace(/<\/?script>/g, '') : '';

// Extract header
const headerMatch = indexHTML.match(/(<header class="main-header">[\s\S]*?<\/header>)/);
const headerHTML = headerMatch ? headerMatch[1] : '';

// Extract navigation
const navMatch = indexHTML.match(/(<!-- Navigation Overlay -->[\s\S]*?<\/nav>)/);
const navHTML = navMatch ? navMatch[1] : '';

// Extract footer
const footerMatch = indexHTML.match(/(<!-- Footer -->[\s\S]*?<\/footer>)/);
const footerHTML = footerMatch ? footerMatch[1] : '';

// Define the 4 pages
const pages = [
  {
    filename: 'topographic-flat-terrain.html',
    title: 'Flat Terrain Wind Loads - Kzt = 1.0 | ASCE 7 Guide',
    metaDesc: 'Understanding flat terrain wind loads where Kzt = 1.0. Interactive animation shows wind flow over flat terrain with no topographic amplification.',
    heroTitle: 'Flat Terrain Wind Loads',
    heroSubtitle: 'Interactive animation demonstrating wind behavior over flat terrain with Kzt = 1.0',
    color: '#06b6d4',
    animationFile: 'topographic-flat-terrain-animation.html'
  },
  {
    filename: 'topographic-escarpment.html',
    title: 'Escarpment Wind Loads - Topographic Factor Kzt | ASCE 7',
    metaDesc: 'Learn how escarpments amplify wind loads. Interactive animation shows wind speed-up effects on cliffs and steep slopes per ASCE 7.',
    heroTitle: 'Escarpment Topographic Effects',
    heroSubtitle: 'Interactive animation of wind acceleration over cliffs and steep slopes',
    color: '#f97316',
    animationFile: 'topographic-escarpment-animation.html'
  },
  {
    filename: 'topographic-2d-ridge.html',
    title: '2D Ridge Wind Loads - Topographic Factor Kzt | ASCE 7',
    metaDesc: 'Understand wind speed-up on elongated ridges. Interactive animation demonstrates 2D ridge topographic effects and Kzt calculations.',
    heroTitle: '2D Ridge Topographic Effects',
    heroSubtitle: 'Interactive animation of wind flow over elongated ridges',
    color: '#a855f7',
    animationFile: 'topographic-2d-ridge-animation.html'
  },
  {
    filename: 'topographic-3d-hill.html',
    title: '3D Hill Wind Loads - Topographic Factor Kzt | ASCE 7',
    metaDesc: 'Learn about wind effects on isolated hills. Interactive animation shows 3D axisymmetric hill wind patterns and Kzt calculations.',
    heroTitle: '3D Hill Topographic Effects',
    heroSubtitle: 'Interactive animation of wind flow around isolated hills',
    color: '#10b981',
    animationFile: 'topographic-3d-hill-animation.html'
  }
];

console.log('Creating all 4 topographic educational pages...\n');

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
${baseCSS}

        /* Animation iframe styling */
        .animation-container {
            width: 100%;
            max-width: 1600px;
            margin: 3rem auto;
            border-radius: 20px;
            overflow: hidden;
            box-shadow: 0 20px 60px rgba(0,0,0,0.3);
            border: 3px solid ${page.color};
        }

        .animation-iframe {
            width: 100%;
            height: 900px;
            border: none;
            display: block;
        }

        .content-section {
            padding: 5rem 0;
        }

        .content-section:nth-child(even) {
            background: #f8fafc;
        }

        .content-section h2 {
            font-size: clamp(2rem, 5vw, 2.75rem);
            font-weight: 800;
            color: #1f2937;
            margin-bottom: 2rem;
        }

        .content-section h3 {
            font-size: 1.75rem;
            font-weight: 700;
            color: ${page.color};
            margin: 2.5rem 0 1.25rem;
        }

        .content-section p {
            font-size: 1.15rem;
            line-height: 1.8;
            color: #4b5563;
            margin-bottom: 1.5rem;
        }

        @media (max-width: 768px) {
            .animation-iframe {
                height: 700px;
            }
        }

        /* Terrain Type Toggle Navigation */
        .terrain-toggles {
            display: flex;
            gap: 1rem;
            justify-content: center;
            flex-wrap: wrap;
            margin: 2rem 0 3rem;
            padding: 0 1rem;
        }

        .terrain-toggle-btn {
            display: inline-flex;
            align-items: center;
            gap: 0.5rem;
            padding: 1rem 2rem;
            border-radius: 50px;
            font-weight: 600;
            font-size: 1rem;
            text-decoration: none;
            transition: all 0.3s ease;
            border: 2px solid transparent;
            background: rgba(255, 255, 255, 0.1);
            color: rgba(255, 255, 255, 0.8);
            backdrop-filter: blur(10px);
        }

        .terrain-toggle-btn:hover {
            transform: translateY(-3px);
            box-shadow: 0 10px 30px rgba(0,0,0,0.3);
            background: rgba(255, 255, 255, 0.2);
            color: white;
        }

        .terrain-toggle-btn.active {
            background: white;
            color: #1f2937;
            border-color: white;
            box-shadow: 0 10px 40px rgba(255,255,255,0.3);
        }

        .terrain-toggle-btn i {
            font-size: 1.2rem;
        }

        /* Color-coded borders for each terrain type */
        .terrain-toggle-btn[href*="flat-terrain"]:hover {
            border-color: #06b6d4;
        }
        .terrain-toggle-btn[href*="escarpment"]:hover {
            border-color: #f97316;
        }
        .terrain-toggle-btn[href*="2d-ridge"]:hover {
            border-color: #a855f7;
        }
        .terrain-toggle-btn[href*="3d-hill"]:hover {
            border-color: #10b981;
        }

        @media (max-width: 768px) {
            .terrain-toggles {
                flex-direction: column;
                gap: 0.75rem;
            }
            .terrain-toggle-btn {
                width: 100%;
                justify-content: center;
            }
        }
    </style>
</head>
<body>
    ${headerHTML}
    ${navHTML}

    <!-- Hero Section -->
    <section class="hero-section" style="background: linear-gradient(135deg, ${page.color} 0%, #181E57 100%);">
        <div class="hero-overlay"></div>
        <div class="hero-content">
            <div class="hero-scale-wrapper">
                <h1 class="hero-title">${page.heroTitle}</h1>
                <p class="hero-subtitle">${page.heroSubtitle}</p>
            </div>
        </div>
    </section>

    <!-- Interactive Animation Section -->
    <section class="content-section">
        <div class="container">
            <h2 style="text-align: center; color: ${page.color};">Interactive Wind Load Animation</h2>
            <p style="text-align: center; font-size: 1.2rem; margin-bottom: 1rem;">Use the controls to adjust wind speed, exposure category, and watch real-time wind particle flow</p>

            <!-- Terrain Type Toggle Buttons -->
            <div class="terrain-toggles">
                <a href="topographic-flat-terrain.html" class="terrain-toggle-btn ${page.filename === 'topographic-flat-terrain.html' ? 'active' : ''}">
                    <i class="fas fa-minus"></i>
                    <span>Flat Terrain</span>
                </a>
                <a href="topographic-escarpment.html" class="terrain-toggle-btn ${page.filename === 'topographic-escarpment.html' ? 'active' : ''}">
                    <i class="fas fa-layer-group"></i>
                    <span>Escarpment</span>
                </a>
                <a href="topographic-2d-ridge.html" class="terrain-toggle-btn ${page.filename === 'topographic-2d-ridge.html' ? 'active' : ''}">
                    <i class="fas fa-mountain"></i>
                    <span>2D Ridge</span>
                </a>
                <a href="topographic-3d-hill.html" class="terrain-toggle-btn ${page.filename === 'topographic-3d-hill.html' ? 'active' : ''}">
                    <i class="fas fa-draw-polygon"></i>
                    <span>3D Hill</span>
                </a>
            </div>

            <div class="animation-container">
                <iframe src="${page.animationFile}" class="animation-iframe" title="${page.heroTitle} Animation"></iframe>
            </div>
        </div>
    </section>

    <!-- Educational Content Section -->
    <section class="content-section">
        <div class="container">
            <h2>Understanding This Terrain Type</h2>
            <p>Explore the animation above to see how wind behaves over this terrain configuration. The interactive controls allow you to:</p>
            <ul style="font-size: 1.1rem; line-height: 2; margin: 2rem 0 2rem 2rem;">
                <li>Adjust wind speed to see how higher velocities affect pressure distribution</li>
                <li>Change exposure categories (B, C, D) to understand terrain roughness effects</li>
                <li>Observe the velocity profile and atmospheric boundary layer</li>
                <li>Watch animated wind particles flow around the building</li>
            </ul>
        </div>
    </section>

    <!-- CTA Section -->
    <section class="content-section" style="background: linear-gradient(135deg, #0018ff 0%, #181E57 100%); text-align: center; color: white;">
        <div class="container">
            <h2 style="color: white; font-size: 2.5rem; margin-bottom: 1.5rem;">Need Professional Wind Load Calculations?</h2>
            <p style="font-size: 1.25rem; margin-bottom: 2.5rem; opacity: 0.95;">Our wind load calculator handles all terrain types and topographic factors automatically</p>
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
  console.log(`✅ Created ${page.filename}`);
});

console.log('\n🎉 All 4 topographic educational pages created successfully!');
