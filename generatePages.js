const fs = require('fs');

// Read pages data
const pagesData = JSON.parse(fs.readFileSync('pages_data.json', 'utf8'));

// HTML template function
function createPage(page) {
  return `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="icon" href="data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><text y='.9em' font-size='90'>💨</text></svg>">
    <title>${page.title}</title>
    <meta name="description" content="${page.description}">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">

    <style>
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }

        body {
            font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
            line-height: 1.6;
            color: #1f2937;
        }

        /* Header */
        .main-header {
            position: fixed;
            top: 0;
            left: 0;
            right: 0;
            background: white;
            box-shadow: 0 2px 20px rgba(0, 0, 0, 0.1);
            z-index: 1000;
            transition: all 0.3s ease;
        }

        .header-content {
            max-width: 1400px;
            margin: 0 auto;
            padding: 1rem 2rem;
            display: flex;
            justify-content: space-between;
            align-items: center;
        }

        .logo-hamburger-row {
            display: flex;
            align-items: center;
            gap: 1.5rem;
        }

        .logo {
            display: flex;
            align-items: center;
            gap: 1rem;
            text-decoration: none;
            color: #0018ff;
        }

        .logo-icon {
            font-size: 2rem;
        }

        .logo-text h1 {
            font-size: 1.5rem;
            font-weight: 800;
            background: linear-gradient(135deg, #0018ff 0%, #181E57 100%);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            background-clip: text;
        }

        .logo-text p {
            font-size: 0.75rem;
            color: #6b7280;
            font-weight: 500;
        }

        .hamburger {
            display: none;
            flex-direction: column;
            gap: 6px;
            background: none;
            border: none;
            cursor: pointer;
            padding: 0.5rem;
        }

        .hamburger span {
            display: block;
            width: 28px;
            height: 3px;
            background: #0018ff;
            border-radius: 3px;
            transition: all 0.3s ease;
        }

        .header-right {
            display: flex;
            gap: 2rem;
            align-items: center;
        }

        .header-cta {
            color: #0018ff;
            text-decoration: none;
            font-weight: 600;
            font-size: 0.95rem;
            transition: all 0.3s ease;
        }

        .header-cta:hover {
            color: #181E57;
        }

        /* Mobile Menu */
        .mobile-menu {
            position: fixed;
            top: 0;
            right: -100%;
            width: 320px;
            height: 100vh;
            background: white;
            box-shadow: -5px 0 30px rgba(0, 0, 0, 0.2);
            transition: right 0.3s ease;
            z-index: 2000;
            overflow-y: auto;
        }

        .mobile-menu.active {
            right: 0;
        }

        .menu-header {
            padding: 2rem;
            border-bottom: 2px solid #f3f4f6;
            display: flex;
            justify-content: space-between;
            align-items: center;
        }

        .menu-header h2 {
            font-size: 1.5rem;
            color: #0018ff;
        }

        .close-menu {
            background: none;
            border: none;
            font-size: 2rem;
            color: #6b7280;
            cursor: pointer;
        }

        .menu-items {
            padding: 1.5rem;
        }

        .menu-items > a {
            display: flex;
            align-items: center;
            gap: 0.75rem;
            padding: 1rem;
            color: #1f2937;
            text-decoration: none;
            font-weight: 600;
            font-size: 1.05rem;
            border-radius: 12px;
            transition: all 0.3s ease;
        }

        .menu-items > a:hover {
            background: #f3f4f6;
            color: #0018ff;
        }

        .nav-item-with-submenu {
            margin-bottom: 0.5rem;
        }

        .nav-item-with-submenu > a {
            display: flex;
            justify-content: space-between;
            align-items: center;
            padding: 1rem;
            color: #1f2937;
            text-decoration: none;
            font-weight: 600;
            font-size: 1.05rem;
            border-radius: 12px;
            transition: all 0.3s ease;
        }

        .nav-item-with-submenu > a:hover {
            background: #f3f4f6;
            color: #0018ff;
        }

        .submenu-toggle {
            transition: transform 0.3s ease;
            margin-left: auto;
        }

        .submenu-toggle.active {
            transform: rotate(180deg);
        }

        .sub-menu {
            max-height: 0;
            overflow: hidden;
            transition: max-height 0.3s ease;
            padding-left: 1rem;
        }

        .sub-menu.active {
            max-height: 1000px;
        }

        .sub-menu a {
            display: flex;
            align-items: center;
            gap: 0.75rem;
            font-size: 0.95rem;
            padding: 0.75rem 0 0.75rem 0.5rem;
            color: #1f2937;
            text-decoration: none;
            border-radius: 8px;
            transition: all 0.3s ease;
        }

        .sub-menu a:hover {
            background: #f3f4f6;
            color: #0018ff;
        }

        /* Hero Section */
        .hero {
            margin-top: 80px;
            background: linear-gradient(135deg, ${page.color} 0%, ${page.color}dd 100%);
            color: white;
            padding: 6rem 2rem 4rem;
            text-align: center;
        }

        .hero-content {
            max-width: 1200px;
            margin: 0 auto;
        }

        .hero-icon {
            font-size: 4rem;
            margin-bottom: 1.5rem;
            opacity: 0.9;
        }

        .hero h1 {
            font-size: clamp(2rem, 5vw, 3.5rem);
            font-weight: 800;
            margin-bottom: 1rem;
            line-height: 1.2;
        }

        .hero p {
            font-size: 1.3rem;
            opacity: 0.95;
            max-width: 800px;
            margin: 0 auto;
        }

        /* Main Content */
        .main-content {
            max-width: 1200px;
            margin: 0 auto;
            padding: 4rem 2rem;
        }

        .content-section {
            margin-bottom: 4rem;
        }

        .content-section h2 {
            font-size: 2rem;
            color: #1f2937;
            margin-bottom: 1.5rem;
            padding-bottom: 0.75rem;
            border-bottom: 3px solid ${page.color};
        }

        .content-section h3 {
            font-size: 1.5rem;
            color: #374151;
            margin: 2rem 0 1rem;
        }

        .content-section p {
            font-size: 1.1rem;
            line-height: 1.8;
            color: #4b5563;
            margin-bottom: 1.5rem;
        }

        .content-section ul {
            margin: 1.5rem 0;
            padding-left: 2rem;
        }

        .content-section li {
            font-size: 1.1rem;
            line-height: 1.8;
            color: #4b5563;
            margin-bottom: 0.75rem;
        }

        .highlight-box {
            background: linear-gradient(135deg, ${page.color}15 0%, ${page.color}05 100%);
            border-left: 4px solid ${page.color};
            padding: 2rem;
            border-radius: 12px;
            margin: 2rem 0;
        }

        .highlight-box h3 {
            color: ${page.color};
            margin-top: 0;
        }

        /* Grid Layout for Cards */
        .card-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
            gap: 2rem;
            margin: 3rem 0;
        }

        .info-card {
            background: white;
            border: 2px solid #e5e7eb;
            border-radius: 16px;
            padding: 2rem;
            transition: all 0.3s ease;
        }

        .info-card:hover {
            transform: translateY(-5px);
            box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
            border-color: ${page.color};
        }

        .info-card h3 {
            color: ${page.color};
            margin-bottom: 1rem;
            display: flex;
            align-items: center;
            gap: 0.75rem;
        }

        .info-card h3 i {
            font-size: 1.5rem;
        }

        /* CTA Section */
        .cta-section {
            background: linear-gradient(135deg, ${page.color} 0%, ${page.color}dd 100%);
            color: white;
            padding: 4rem 2rem;
            text-align: center;
            border-radius: 24px;
            margin: 4rem 0;
        }

        .cta-section h2 {
            font-size: 2.5rem;
            margin-bottom: 1.5rem;
            color: white;
            border: none;
        }

        .cta-section p {
            font-size: 1.2rem;
            margin-bottom: 2rem;
            opacity: 0.95;
            color: white;
        }

        .cta-button {
            display: inline-block;
            background: white;
            color: ${page.color};
            padding: 1.2rem 2.5rem;
            border-radius: 50px;
            font-weight: 700;
            font-size: 1.1rem;
            text-decoration: none;
            transition: all 0.3s ease;
        }

        .cta-button:hover {
            transform: translateY(-3px);
            box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
        }

        /* Footer */
        .footer {
            background: #1f2937;
            color: white;
            padding: 3rem 2rem 2rem;
        }

        .footer-content {
            max-width: 1200px;
            margin: 0 auto;
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
            gap: 3rem;
            margin-bottom: 2rem;
        }

        .footer-section h3 {
            font-size: 1.2rem;
            margin-bottom: 1rem;
            color: white;
        }

        .footer-section p,
        .footer-section a {
            color: #d1d5db;
            text-decoration: none;
            display: block;
            margin-bottom: 0.5rem;
            font-size: 0.95rem;
        }

        .footer-section a:hover {
            color: white;
        }

        .footer-bottom {
            max-width: 1200px;
            margin: 0 auto;
            padding-top: 2rem;
            border-top: 1px solid #374151;
            text-align: center;
            color: #9ca3af;
            font-size: 0.9rem;
        }

        /* Responsive */
        @media (max-width: 1024px) {
            .header-right {
                display: none;
            }

            .hamburger {
                display: flex;
            }
        }

        @media (max-width: 768px) {
            .hero {
                padding: 4rem 1.5rem 3rem;
            }

            .main-content {
                padding: 3rem 1.5rem;
            }

            .card-grid {
                grid-template-columns: 1fr;
            }
        }
    </style>
</head>
<body>
    <!-- Header -->
    <header class="main-header">
        <div class="header-content">
            <div class="logo-hamburger-row">
                <a href="index.html" class="logo">
                    <div class="logo-icon">💨</div>
                    <div class="logo-text">
                        <h1>Wind Load Solutions</h1>
                        <p>24+ Years of Excellence</p>
                    </div>
                </a>
                <button class="hamburger" id="hamburger">
                    <span></span>
                    <span></span>
                    <span></span>
                </button>
            </div>
            <div class="header-right">
                <a href="state-requirements.html" class="header-cta">State Requirements</a>
                <a href="asce-7-standards.html" class="header-cta">ASCE 7</a>
                <a href="resources.html" class="header-cta">Resources</a>
            </div>
        </div>
    </header>

    <!-- Mobile Menu -->
    <nav class="mobile-menu" id="mobileMenu">
        <div class="menu-header">
            <h2>Menu</h2>
            <button class="close-menu" id="closeMenu">&times;</button>
        </div>
        <div class="menu-items">
            <a href="index.html"><i class="fas fa-home"></i> Home</a>
            <a href="state-requirements.html"><i class="fas fa-map-marked-alt"></i> State Requirements</a>
            <a href="asce-7-standards.html"><i class="fas fa-book"></i> ASCE 7 Standards</a>

            <!-- Design Methods -->
            <div class="nav-item-with-submenu">
                <a href="nominal-vs-ultimate-wind-loads.html">
                    <i class="fas fa-balance-scale"></i> Design Methods
                    <i class="fas fa-chevron-down submenu-toggle"></i>
                </a>
                <div class="sub-menu">
                    <a href="asd-allowable-stress-design-wind-loads.html"><i class="fas fa-ruler-combined"></i> ASD Method</a>
                    <a href="lrfd-load-resistance-factor-design-wind-loads.html"><i class="fas fa-calculator"></i> LRFD Method</a>
                    <a href="nominal-wind-loads-explained.html"><i class="fas fa-chart-line"></i> Nominal Loads</a>
                    <a href="ultimate-wind-loads-explained.html"><i class="fas fa-arrow-up"></i> Ultimate Loads</a>
                    <a href="asd-lrfd-conversion-guide.html"><i class="fas fa-exchange-alt"></i> Conversion</a>
                </div>
            </div>

            <!-- Topography -->
            <div class="nav-item-with-submenu">
                <a href="topographic-effects-wind-loads.html">
                    <i class="fas fa-mountain"></i> Topography (Kzt)
                    <i class="fas fa-chevron-down submenu-toggle"></i>
                </a>
                <div class="sub-menu">
                    <a href="topographic-flat-terrain.html"><i class="fas fa-minus"></i> Flat Terrain</a>
                    <a href="topographic-escarpment.html"><i class="fas fa-layer-group"></i> Escarpment</a>
                    <a href="topographic-2d-ridge.html"><i class="fas fa-mountain"></i> 2D Ridge</a>
                    <a href="topographic-3d-hill.html"><i class="fas fa-draw-polygon"></i> 3D Hill</a>
                </div>
            </div>

            <!-- Exposure Categories -->
            <div class="nav-item-with-submenu">
                <a href="wind-exposure-categories-guide.html">
                    <i class="fas fa-city"></i> Exposure Categories
                    <i class="fas fa-chevron-down submenu-toggle"></i>
                </a>
                <div class="sub-menu">
                    <a href="exposure-b-suburban-residential-wind-loads.html"><i class="fas fa-building"></i> Exposure B</a>
                    <a href="exposure-c-open-terrain-wind-loads.html"><i class="fas fa-tree"></i> Exposure C</a>
                    <a href="exposure-d-coastal-ocean-wind-loads.html"><i class="fas fa-water"></i> Exposure D</a>
                    <a href="exposure-category-selection-guide.html"><i class="fas fa-map-marked-alt"></i> Selection Guide</a>
                    <a href="exposure-transition-zones.html"><i class="fas fa-random"></i> Transitions</a>
                </div>
            </div>

            <!-- Wind Speed & Velocity -->
            <div class="nav-item-with-submenu">
                <a href="wind-speed-zones-asce-7-guide.html">
                    <i class="fas fa-tachometer-alt"></i> Wind Speed & Velocity
                    <i class="fas fa-chevron-down submenu-toggle"></i>
                </a>
                <div class="sub-menu">
                    <a href="asce-7-wind-load-velocity-finder-wind-speed-by-zip-code.html"><i class="fas fa-search-location"></i> Speed by Zip</a>
                    <a href="basic-wind-speed-explained.html"><i class="fas fa-gauge-high"></i> Basic Wind Speed</a>
                    <a href="asce-7-22-wind-speed-maps.html"><i class="fas fa-map"></i> 7-22 Maps</a>
                    <a href="asce-7-16-wind-speed-maps.html"><i class="fas fa-map-marked"></i> 7-16 Maps</a>
                    <a href="3-second-gust-wind-speed.html"><i class="fas fa-clock"></i> 3-Second Gust</a>
                </div>
            </div>

            <!-- Risk Categories -->
            <div class="nav-item-with-submenu">
                <a href="risk-categories-wind-loads-guide.html">
                    <i class="fas fa-shield-alt"></i> Risk Categories
                    <i class="fas fa-chevron-down submenu-toggle"></i>
                </a>
                <div class="sub-menu">
                    <a href="risk-category-1-agricultural-buildings.html"><i class="fas fa-warehouse"></i> Category I</a>
                    <a href="risk-category-2-standard-occupancy.html"><i class="fas fa-home"></i> Category II</a>
                    <a href="risk-category-3-assembly-buildings.html"><i class="fas fa-school"></i> Category III</a>
                    <a href="risk-category-4-essential-facilities.html"><i class="fas fa-hospital"></i> Category IV</a>
                    <a href="risk-category-selection-guide.html"><i class="fas fa-list-check"></i> Selection Guide</a>
                </div>
            </div>

            <!-- HVHZ -->
            <div class="nav-item-with-submenu">
                <a href="hvhz-high-velocity-hurricane-zone-guide.html">
                    <i class="fas fa-hurricane"></i> HVHZ
                    <i class="fas fa-chevron-down submenu-toggle"></i>
                </a>
                <div class="sub-menu">
                    <a href="hvhz-florida-requirements.html"><i class="fas fa-map-pin"></i> Florida HVHZ</a>
                    <a href="hvhz-product-approvals.html"><i class="fas fa-certificate"></i> Product Approvals</a>
                    <a href="miami-dade-hvhz-requirements.html"><i class="fas fa-building-flag"></i> Miami-Dade</a>
                    <a href="broward-county-hvhz-requirements.html"><i class="fas fa-clipboard-check"></i> Broward County</a>
                    <a href="hvhz-vs-standard-wind-zones.html"><i class="fas fa-code-compare"></i> HVHZ vs Standard</a>
                </div>
            </div>

            <!-- Wind Directionality -->
            <div class="nav-item-with-submenu">
                <a href="wind-directionality-factor-guide.html">
                    <i class="fas fa-compass"></i> Directionality (Kd)
                    <i class="fas fa-chevron-down submenu-toggle"></i>
                </a>
                <div class="sub-menu">
                    <a href="kd-factor-explained.html"><i class="fas fa-circle-notch"></i> Kd Factor</a>
                    <a href="directional-vs-non-directional-wind-loads.html"><i class="fas fa-arrows-alt"></i> Directional Method</a>
                </div>
            </div>

            <a href="components-cladding-wind-load-calculation-asce-7-pressure-analysis-building-design.html"><i class="fas fa-th"></i> Components & Cladding</a>
            <a href="mwfrs-wind-load-calculator-asce-wind-pressure-analysis-building-design.html"><i class="fas fa-building"></i> MWFRS</a>
            <a href="solar-wind-loads.html"><i class="fas fa-solar-panel"></i> Solar Wind Loads</a>
            <a href="specialty-structures-wind-loads.html"><i class="fas fa-tower-broadcast"></i> Specialty Structures</a>
            <a href="resources.html"><i class="fas fa-toolbox"></i> Resources</a>
            <a href="articles.html"><i class="fas fa-newspaper"></i> Articles</a>
            <a href="about.html"><i class="fas fa-info-circle"></i> About Us</a>
            <a href="contact.html"><i class="fas fa-envelope"></i> Contact</a>
        </div>
    </nav>

    <!-- Hero Section -->
    <section class="hero">
        <div class="hero-content">
            <div class="hero-icon"><i class="fas ${page.icon}"></i></div>
            <h1>${page.hero_title}</h1>
            <p>${page.hero_subtitle}</p>
        </div>
    </section>

    <!-- Main Content -->
    <main class="main-content">
        <div class="content-section">
            <h2>Overview</h2>
            <p>This comprehensive guide covers everything you need to know about ${page.hero_title.toLowerCase()}. We'll explore the key concepts, requirements, and practical applications per ASCE 7-22 standards.</p>

            <div class="highlight-box">
                <h3><i class="fas fa-info-circle"></i> Key Information</h3>
                <p>Content will be added here covering the most important aspects of this topic. This section will include critical information that engineers and designers need to understand.</p>
            </div>
        </div>

        <div class="content-section">
            <h2>Understanding the Fundamentals</h2>
            <p>Detailed content about the fundamentals will be added here, including:</p>
            <ul>
                <li>Basic concepts and definitions</li>
                <li>ASCE 7 code requirements and references</li>
                <li>When and how to apply these principles</li>
                <li>Common applications and use cases</li>
                <li>Important considerations for design professionals</li>
            </ul>
        </div>

        <div class="content-section">
            <h2>Practical Applications</h2>
            <div class="card-grid">
                <div class="info-card">
                    <h3><i class="fas fa-building"></i> Building Design</h3>
                    <p>How this topic applies to building design and structural engineering projects.</p>
                </div>
                <div class="info-card">
                    <h3><i class="fas fa-calculator"></i> Calculations</h3>
                    <p>Methods and procedures for performing accurate calculations per ASCE 7.</p>
                </div>
                <div class="info-card">
                    <h3><i class="fas fa-clipboard-check"></i> Compliance</h3>
                    <p>Meeting code requirements and ensuring regulatory compliance.</p>
                </div>
            </div>
        </div>

        <!-- CTA Section -->
        <div class="cta-section">
            <h2>Need Professional Wind Load Calculations?</h2>
            <p>Visit our sister site WindLoadCalc.com for ASCE 7 calculator software and the Building Intelligence Platform (BIP).</p>
            <a href="https://windloadcalc.com" class="cta-button">Visit WindLoadCalc.com →</a>
        </div>

        <div class="content-section">
            <h2>Additional Resources</h2>
            <p>Explore these related topics to expand your understanding:</p>
            <ul>
                <li><a href="asce-7-standards.html" style="color: ${page.color}; text-decoration: none; font-weight: 600;">ASCE 7 Standards Guide</a></li>
                <li><a href="state-requirements.html" style="color: ${page.color}; text-decoration: none; font-weight: 600;">State Requirements</a></li>
                <li><a href="resources.html" style="color: ${page.color}; text-decoration: none; font-weight: 600;">Free Resources & Tools</a></li>
                <li><a href="articles.html" style="color: ${page.color}; text-decoration: none; font-weight: 600;">Educational Articles</a></li>
            </ul>
        </div>
    </main>

    <!-- Footer -->
    <footer class="footer">
        <div class="footer-content">
            <div class="footer-section">
                <h3>Wind Load Solutions</h3>
                <p>Professional wind load engineering resources and educational content since 2002.</p>
                <p>24+ years of excellence in structural wind engineering.</p>
            </div>
            <div class="footer-section">
                <h3>Quick Links</h3>
                <a href="index.html">Home</a>
                <a href="state-requirements.html">State Requirements</a>
                <a href="asce-7-standards.html">ASCE 7 Standards</a>
                <a href="resources.html">Resources</a>
            </div>
            <div class="footer-section">
                <h3>Tools & Calculators</h3>
                <a href="https://windloadcalc.com">WindLoadCalc.com</a>
                <a href="free-online-wind-load-calculators-demos-free-excel-wind-load-calculator.html">Free Calculators</a>
                <a href="asce-7-wind-load-velocity-finder-wind-speed-by-zip-code.html">Wind Speed by Zip</a>
            </div>
            <div class="footer-section">
                <h3>Contact</h3>
                <a href="contact.html">Get in Touch</a>
                <a href="professional-engineer-sign-seal-wind-load-pressures.html">PE Services</a>
                <a href="about.html">About Us</a>
            </div>
        </div>
        <div class="footer-bottom">
            <p>&copy; 2025 Wind Load Solutions. All rights reserved. | Since 2002 | Trusted by engineers nationwide</p>
        </div>
    </footer>

    <script>
        // Hamburger menu functionality
        const hamburger = document.getElementById('hamburger');
        const mobileMenu = document.getElementById('mobileMenu');
        const closeMenu = document.getElementById('closeMenu');

        hamburger.addEventListener('click', () => {
            mobileMenu.classList.add('active');
        });

        closeMenu.addEventListener('click', () => {
            mobileMenu.classList.remove('active');
        });

        // Submenu toggle functionality
        document.querySelectorAll('.nav-item-with-submenu > a').forEach(item => {
            item.addEventListener('click', (e) => {
                e.preventDefault();
                const submenu = item.nextElementSibling;
                const toggle = item.querySelector('.submenu-toggle');
                submenu.classList.toggle('active');
                toggle.classList.toggle('active');
            });
        });

        // Close menu when clicking outside
        document.addEventListener('click', (e) => {
            if (!mobileMenu.contains(e.target) && !hamburger.contains(e.target)) {
                mobileMenu.classList.remove('active');
            }
        });
    </script>
</body>
</html>`;
}

// Generate all pages
pagesData.pages.forEach(page => {
  const html = createPage(page);
  fs.writeFileSync(page.filename, html, 'utf8');
  console.log(`✅ Created ${page.filename}`);
});

console.log(`\n✅ Successfully generated all ${pagesData.pages.length} pages!`);
