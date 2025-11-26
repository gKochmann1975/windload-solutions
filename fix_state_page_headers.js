const fs = require('fs');

console.log('Fixing Florida and Texas page headers - adding logo + hamburger menu\n');

const files = [
    'florida-wind-load-requirements.html',
    'texas-wind-load-requirements.html'
];

// The correct header HTML structure from index.html
const correctHeaderHTML = `    <!-- Header -->
    <header class="main-header">
        <div class="header-container">
            <div class="logo-hamburger-row">
                <a href="index.html" class="logo">
                    <img src="images/windloadsolutions-logo.svg" alt="Wind Load Solutions" class="logo-image">
                </a>
            </div>

            <div class="header-right">
                <a href="state-requirements.html" class="header-cta">State Requirements</a>
                <a href="asce-7-standards.html" class="header-cta">ASCE 7</a>
                <a href="resources.html" class="header-cta">Resources</a>
                <button class="hamburger" aria-label="Toggle menu">
                    <span></span>
                    <span></span>
                    <span></span>
                </button>
            </div>
        </div>
    </header>

    <!-- Navigation Overlay -->
    <div class="nav-overlay"></div>

    <!-- Navigation Menu -->
    <nav class="nav-links">
        <a href="index.html">Home</a>
        <a href="state-requirements.html">State Requirements</a>
        <a href="asce-7-standards.html">ASCE 7 Standards</a>
        <a href="components-cladding-wind-load-calculation-asce-7-pressure-analysis-building-design.html">Components & Cladding</a>
        <a href="mwfrs-wind-load-calculator-asce-wind-pressure-analysis-building-design.html">MWFRS Guide</a>

        <div class="nav-item-with-submenu">
            <a href="topographic-effects-wind-loads.html">
                Topography Overview
                <i class="fas fa-chevron-down submenu-toggle"></i>
            </a>
            <div class="sub-menu">
                <a href="topographic-flat-terrain.html"><i class="fas fa-minus"></i> Flat Terrain</a>
                <a href="topographic-escarpment.html"><i class="fas fa-layer-group"></i> Escarpment</a>
                <a href="topographic-2d-ridge.html"><i class="fas fa-mountain"></i> 2D Ridge</a>
                <a href="topographic-3d-hill.html"><i class="fas fa-draw-polygon"></i> 3D Hill</a>
            </div>
        </div>

        <a href="resources.html">Free Resources</a>
        <a href="articles.html">Articles & Guides</a>
        <a href="about.html">About Us</a>
        <a href="contact.html">Contact</a>
    </nav>`;

// Correct header CSS from index.html
const headerCSSAdditions = `
        /* Header Styles from index.html */
        .main-header {
            position: fixed;
            top: 0;
            left: 0;
            right: 0;
            z-index: 1000;
            background: transparent;
            padding: 2rem 0;
            transition: all 0.3s ease;
        }

        .main-header.scrolled {
            background: rgba(255, 255, 255, 0.95);
            backdrop-filter: blur(20px);
            padding: 1rem 0;
            box-shadow: 0 1px 20px rgba(0,0,0,0.1);
        }

        .header-container {
            display: flex;
            justify-content: space-between;
            align-items: center;
            max-width: 1400px;
            margin: 0 auto;
            padding: 0 3rem;
        }

        .logo-hamburger-row {
            display: flex;
            align-items: center;
            flex: 1;
            gap: 1rem;
        }

        .logo {
            z-index: 1001;
            transition: opacity 0.3s ease, visibility 0.3s ease;
        }

        .logo.menu-active {
            opacity: 0;
            visibility: hidden;
        }

        .logo-image {
            height: 100px;
            width: auto;
            filter: drop-shadow(0 2px 10px rgba(0,0,0,0.3));
            transition: all 0.3s ease;
        }

        .main-header.scrolled .logo-image {
            height: 70px;
            filter: none;
        }

        .header-right {
            display: flex;
            align-items: center;
            gap: 1rem;
            z-index: 1001;
        }

        @media (max-width: 1024px) {
            .header-right a {
                display: none;
            }
        }

        .header-cta {
            background: rgba(255, 255, 255, 0.15);
            color: white;
            border: 2px solid rgba(255, 255, 255, 0.3);
            padding: 0.8rem 1.8rem;
            border-radius: 50px;
            font-weight: 600;
            font-size: 0.95rem;
            cursor: pointer;
            transition: all 0.3s ease;
            text-decoration: none;
            white-space: nowrap;
            backdrop-filter: blur(10px);
        }

        .header-cta:hover {
            background: rgba(255, 255, 255, 0.25);
            border-color: rgba(255, 255, 255, 0.6);
            transform: translateY(-2px);
            box-shadow: 0 8px 25px rgba(0,0,0,0.2);
        }

        .main-header.scrolled .header-cta {
            color: #0018ff;
            background: rgba(0, 24, 255, 0.1);
            border-color: rgba(0, 24, 255, 0.3);
        }

        /* Hamburger Menu */
        .hamburger {
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            width: 28px;
            height: 20px;
            background: none;
            border: none;
            cursor: pointer;
            padding: 0;
            z-index: 1002;
        }

        .hamburger span {
            display: block;
            height: 3px;
            width: 100%;
            background: white;
            border-radius: 2px;
            transition: all 0.3s ease;
            box-shadow: 0 1px 3px rgba(0,0,0,0.3);
        }

        .main-header.scrolled .hamburger span {
            background: #1f2937;
            box-shadow: none;
        }

        .hamburger.active span:nth-child(1) {
            transform: rotate(45deg) translate(6px, 6px);
        }

        .hamburger.active span:nth-child(2) {
            opacity: 0;
        }

        .hamburger.active span:nth-child(3) {
            transform: rotate(-45deg) translate(8px, -8px);
        }

        /* Navigation Overlay */
        .nav-overlay {
            display: none;
            position: fixed;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            background: rgba(0, 0, 0, 0.5);
            z-index: 999;
            opacity: 0;
            transition: opacity 0.3s ease;
        }

        .nav-overlay.active {
            display: block;
            opacity: 1;
        }

        /* Navigation Menu */
        .nav-links {
            display: none;
            position: fixed;
            top: 0;
            right: 0;
            height: 100vh;
            width: 400px;
            max-width: 85vw;
            background: rgba(255, 255, 255, 0.98);
            backdrop-filter: blur(20px);
            box-shadow: -10px 0 50px rgba(0,0,0,0.2);
            padding: 4rem 2rem 2rem 2rem;
            flex-direction: column;
            gap: 1.5rem;
            z-index: 10000;
            transform: translateX(100%);
            transition: transform 0.4s cubic-bezier(0.4, 0, 0.2, 1);
            overflow-y: auto;
            overflow-x: hidden;
        }

        .nav-links.active {
            display: flex;
            transform: translateX(0);
        }

        .nav-links a {
            text-decoration: none;
            color: #1f2937;
            font-weight: 600;
            font-size: 1.1rem;
            padding: 1rem 0;
            border-bottom: 1px solid rgba(0,0,0,0.08);
            transition: all 0.3s ease;
            position: relative;
        }

        .nav-links a::before {
            content: '';
            position: absolute;
            left: 0;
            bottom: 0;
            width: 0;
            height: 3px;
            background: linear-gradient(135deg, #0018ff 0%, #00d4ff 100%);
            transition: width 0.3s ease;
        }

        .nav-links a:hover::before {
            width: 100%;
        }

        .nav-links a:hover {
            color: #0018ff;
            padding-left: 1rem;
        }

        /* Sub-menu styles */
        .nav-item-with-submenu {
            position: relative;
        }

        .nav-item-with-submenu > a {
            display: flex;
            justify-content: space-between;
            align-items: center;
        }

        .sub-menu {
            display: none;
            flex-direction: column;
            padding-left: 1.5rem;
            margin-top: 0.5rem;
        }

        .sub-menu.active {
            display: flex;
        }

        .sub-menu a {
            font-size: 1rem;
            padding: 0.75rem 0;
        }

        .submenu-toggle {
            transition: transform 0.3s ease;
        }

        .submenu-toggle.active {
            transform: rotate(180deg);
        }`;

// JavaScript for menu functionality
const menuJS = `
    <!-- Font Awesome for icons -->
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">

    <script>
        // Header scroll effect
        window.addEventListener('scroll', () => {
            const header = document.querySelector('.main-header');
            if (window.scrollY > 100) {
                header.classList.add('scrolled');
            } else {
                header.classList.remove('scrolled');
            }
        });

        // Mobile menu toggle
        const hamburger = document.querySelector('.hamburger');
        const navLinks = document.querySelector('.nav-links');
        const navOverlay = document.querySelector('.nav-overlay');
        const logo = document.querySelector('.logo');

        function toggleMenu() {
            hamburger.classList.toggle('active');
            navLinks.classList.toggle('active');
            navOverlay.classList.toggle('active');
            logo.classList.toggle('menu-active');
            document.body.style.overflow = navLinks.classList.contains('active') ? 'hidden' : '';
        }

        hamburger.addEventListener('click', toggleMenu);
        navOverlay.addEventListener('click', toggleMenu);

        // Sub-menu toggle
        document.querySelectorAll('.nav-item-with-submenu > a').forEach(link => {
            link.addEventListener('click', (e) => {
                e.preventDefault();
                const subMenu = link.nextElementSibling;
                const toggle = link.querySelector('.submenu-toggle');

                if (subMenu) {
                    subMenu.classList.toggle('active');
                    if (toggle) {
                        toggle.classList.toggle('active');
                    }
                }
            });
        });

        // Close menu when clicking nav links
        const navLinkItems = document.querySelectorAll('.nav-links a');
        navLinkItems.forEach(link => {
            link.addEventListener('click', () => {
                if (navLinks.classList.contains('active')) {
                    toggleMenu();
                }
            });
        });
    </script>`;

files.forEach(file => {
    if (!fs.existsSync(file)) {
        console.log(`⚠️  File not found: ${file}`);
        return;
    }

    let content = fs.readFileSync(file, 'utf8');

    // Replace old header styles
    content = content.replace(/\/\* Header Styles \*\/[\s\S]*?\.logo \{[\s\S]*?\}/g, headerCSSAdditions);

    // Replace old header HTML
    const oldHeaderPattern = /<header>[\s\S]*?<\/header>/;
    content = content.replace(oldHeaderPattern, correctHeaderHTML);

    // Add Font Awesome and JavaScript before </body>
    content = content.replace('</body>', menuJS + '\n</body>');

    fs.writeFileSync(file, content, 'utf8');
    console.log(`✅ ${file}: Updated header with logo + hamburger menu`);
});

console.log('\n🎉 Florida and Texas pages updated with correct headers!');
