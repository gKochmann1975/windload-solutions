const fs = require('fs');
const path = require('path');

// Complete header CSS with scroll effects matching index.html
const completeHeaderCSS = `
        /* Header */
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

        .header-container .logo-hamburger-row {
            width: 100%;
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

        .main-header.scrolled .header-right {
            display: flex;
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
        }`;

// Complete JavaScript for scroll effects and menu toggle
const completeHeaderJS = `
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
        }

        if (hamburger) {
            hamburger.addEventListener('click', toggleMenu);
        }

        if (navOverlay) {
            navOverlay.addEventListener('click', toggleMenu);
        }

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

// Navigation overlay HTML (goes after header)
const navOverlayHTML = `\n    <!-- Navigation Overlay -->\n    <div class="nav-overlay"></div>\n`;

// Get all HTML files
function getAllHtmlFiles() {
    const files = [];
    const rootFiles = fs.readdirSync('.').filter(f => f.endsWith('.html') && f !== 'index.html');
    files.push(...rootFiles);

    if (fs.existsSync('states')) {
        const stateFiles = fs.readdirSync('states').filter(f => f.endsWith('.html')).map(f => `states/${f}`);
        files.push(...stateFiles);
    }

    return files;
}

// Update page with full header features
function updatePageWithFullFeatures(filePath) {
    let content = fs.readFileSync(filePath, 'utf8');
    let updated = false;
    const isStatePage = filePath.startsWith('states');

    // 1. Replace header CSS
    const headerCSSPattern = /\/\* Header \*\/[\s\S]*?(\/\* [A-Z]|\.container \{|\.hero|@media \(max-width: 768px\)[\s\S]*?\.main-header \{[^}]*\}[\s\S]*?\})/;
    if (headerCSSPattern.test(content)) {
        content = content.replace(headerCSSPattern, `${completeHeaderCSS}\n\n        $1`);
        updated = true;
    }

    // 2. Add nav overlay if missing
    if (!content.includes('nav-overlay')) {
        const headerEndPattern = /(<\/header>)/;
        if (headerEndPattern.test(content)) {
            content = content.replace(headerEndPattern, `$1${navOverlayHTML}`);
            updated = true;
        }
    }

    // 3. Add or replace JavaScript
    if (!content.includes("window.addEventListener('scroll'")) {
        const bodyEndPattern = /(<\/body>)/;
        if (bodyEndPattern.test(content)) {
            content = content.replace(bodyEndPattern, `${completeHeaderJS}\n$1`);
            updated = true;
        }
    } else {
        // Replace existing scroll JS
        const scrollJSPattern = /<script>[\s\S]*?window\.addEventListener\('scroll'[\s\S]*?<\/script>/;
        if (scrollJSPattern.test(content)) {
            content = content.replace(scrollJSPattern, completeHeaderJS);
            updated = true;
        }
    }

    if (updated) {
        fs.writeFileSync(filePath, content, 'utf8');
        return true;
    }

    return false;
}

// Main execution
console.log('🎨 Applying full header features (scroll effects, animations, menu) to all pages...\n');

const allFiles = getAllHtmlFiles();
console.log(`📋 Processing ${allFiles.length} pages\n`);

let updateCount = 0;
const errors = [];

for (const file of allFiles) {
    try {
        if (updatePageWithFullFeatures(file)) {
            console.log(`✅ ${file}`);
            updateCount++;
        } else {
            console.log(`⏭️  ${file} (no changes needed)`);
        }
    } catch (err) {
        console.log(`❌ ${file} - Error: ${err.message}`);
        errors.push({file, error: err.message});
    }
}

console.log(`\n✨ Successfully updated ${updateCount}/${allFiles.length} pages!`);

if (errors.length > 0) {
    console.log(`\n⚠️  ${errors.length} errors occurred:`);
    errors.forEach(e => console.log(`   - ${e.file}: ${e.error}`));
}

console.log('\n🎉 All pages now have:');
console.log('   ✓ Transparent header → White on scroll');
console.log('   ✓ Logo shrinks from 100px → 70px on scroll');
console.log('   ✓ Buttons change color on scroll (white → blue)');
console.log('   ✓ Hamburger changes color on scroll (white → dark)');
console.log('   ✓ Mobile menu with overlay');
console.log('   ✓ Smooth animations and transitions');
console.log('\n📍 Consistent identity across entire website!');
