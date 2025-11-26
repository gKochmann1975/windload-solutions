const fs = require('fs');

// Final list of pages needing fixes
const pagesToFix = [
    {file: 'asce-7-wind-load-calculator.html', type: 'calculator'},
    {file: 'topographic-effects-wind-loads.html', type: 'regular'},
    {file: 'topographic-flat-terrain-animation.html', type: 'animation'},
    {file: 'topographic-escarpment-animation.html', type: 'animation'},
    {file: 'topographic-2d-ridge-animation.html', type: 'animation'},
    {file: 'topographic-3d-hill-animation.html', type: 'animation'}
];

// Standard header for regular pages
const standardHeader = `    <!-- Header -->
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
    </header>`;

function fixASCE7Calculator() {
    const file = 'asce-7-wind-load-calculator.html';
    console.log(`\n🔧 Fixing: ${file}`);
    let content = fs.readFileSync(file, 'utf8');

    // Find and replace the header section
    const headerPattern = /<header class="main-header"[\s\S]*?<\/header>/;
    if (headerPattern.test(content)) {
        content = content.replace(headerPattern, standardHeader);
        fs.writeFileSync(file, content, 'utf8');
        console.log(`   ✅ Fixed header HTML`);
        return true;
    }
    return false;
}

function fixTopoEffects() {
    const file = 'topographic-effects-wind-loads.html';
    console.log(`\n🔧 Fixing: ${file}`);
    let content = fs.readFileSync(file, 'utf8');
    let fixed = false;

    // Replace header HTML
    const headerPattern = /<!-- Header -->[\s\S]*?<\/header>/;
    if (headerPattern.test(content)) {
        content = content.replace(headerPattern, standardHeader);
        fixed = true;
    }

    // Fix CSS - make sure it has complete header CSS
    const cssPattern = /(\/\* Header \*\/[\s\S]*?)(\/\* Navigation|\.hero|\.topo-section)/;
    if (!content.includes('.main-header.scrolled .hamburger span')) {
        const completeCSS = `
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

        .logo-hamburger-row {
            display: flex;
            align-items: center;
        }

        .logo {
            z-index: 1001;
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
            text-decoration: none;
            transition: all 0.3s ease;
            backdrop-filter: blur(10px);
        }

        .header-cta:hover {
            background: rgba(255, 255, 255, 0.25);
            transform: translateY(-2px);
        }

        .main-header.scrolled .header-cta {
            color: #0018ff;
            background: rgba(0, 24, 255, 0.1);
            border-color: rgba(0, 24, 255, 0.3);
        }

        .hamburger {
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            width: 28px;
            height: 20px;
            background: none;
            border: none;
            cursor: pointer;
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

`;
        if (cssPattern.test(content)) {
            content = content.replace(cssPattern, `${completeCSS}\n        $2`);
            fixed = true;
        }
    }

    if (fixed) {
        fs.writeFileSync(file, content, 'utf8');
        console.log(`   ✅ Fixed header HTML and CSS`);
        return true;
    }
    return false;
}

function fixAnimationPage(file) {
    console.log(`\n🎬 Fixing: ${file}`);
    let content = fs.readFileSync(file, 'utf8');

    // These animation pages already have the header added, just need the CSS updated
    // Check if CSS exists and fix it
    if (!content.includes('.main-header.scrolled .logo-image')) {
        // Find the style tag and add missing CSS
        const styleEndPattern = /([\s\S]*?<style>[\s\S]*?)(body \{)/;
        const headerCSS = `        .main-header {
            position: fixed;
            top: 0;
            left: 0;
            right: 0;
            z-index: 1000;
            background: transparent;
            padding: 1rem 0;
            transition: all 0.3s ease;
        }

        .main-header.scrolled {
            background: rgba(255, 255, 255, 0.95);
            backdrop-filter: blur(20px);
            padding: 0.5rem 0;
            box-shadow: 0 1px 20px rgba(0,0,0,0.1);
        }

        .header-container {
            display: flex;
            justify-content: space-between;
            align-items: center;
            padding: 0 2rem;
        }

        .logo-hamburger-row {
            display: flex;
            align-items: center;
        }

        .logo {
            z-index: 1001;
        }

        .logo-image {
            height: 60px;
            width: auto;
            filter: drop-shadow(0 2px 10px rgba(0,0,0,0.3));
            transition: all 0.3s ease;
        }

        .main-header.scrolled .logo-image {
            height: 50px;
            filter: none;
        }

        .header-right {
            display: flex;
            align-items: center;
            gap: 0.5rem;
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
            padding: 0.6rem 1.2rem;
            border-radius: 50px;
            font-weight: 600;
            font-size: 0.85rem;
            text-decoration: none;
            transition: all 0.3s ease;
            backdrop-filter: blur(10px);
        }

        .header-cta:hover {
            background: rgba(255, 255, 255, 0.25);
            transform: translateY(-2px);
        }

        .main-header.scrolled .header-cta {
            color: #0018ff;
            background: rgba(0, 24, 255, 0.1);
            border-color: rgba(0, 24, 255, 0.3);
        }

        .hamburger {
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            width: 24px;
            height: 18px;
            background: none;
            border: none;
            cursor: pointer;
            z-index: 1002;
        }

        .hamburger span {
            display: block;
            height: 2px;
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
            transform: rotate(45deg) translate(5px, 5px);
        }

        .hamburger.active span:nth-child(2) {
            opacity: 0;
        }

        .hamburger.active span:nth-child(3) {
            transform: rotate(-45deg) translate(5px, -5px);
        }

        .nav-overlay {
            display: none;
            position: fixed;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            background: rgba(0, 0, 0, 0.5);
            z-index: 999;
        }

        .nav-overlay.active {
            display: block;
        }

        `;

        if (styleEndPattern.test(content)) {
            content = content.replace(styleEndPattern, `$1${headerCSS}\n        $2`);
            fs.writeFileSync(file, content, 'utf8');
            console.log(`   ✅ Added complete header CSS`);
            return true;
        }
    }

    console.log(`   ℹ️  No changes needed`);
    return false;
}

console.log('🎯 FINAL HEADER FIX - Fixing remaining 6 pages\n');
console.log('='.repeat(80) + '\n');

let fixCount = 0;

// Fix ASCE 7 Calculator
if (fixASCE7Calculator()) fixCount++;

// Fix Topo Effects
if (fixTopoEffects()) fixCount++;

// Fix Animation Pages
for (const page of pagesToFix) {
    if (page.type === 'animation') {
        if (fixAnimationPage(page.file)) fixCount++;
    }
}

console.log('\n' + '='.repeat(80));
console.log(`\n✨ Fixed ${fixCount} pages`);
console.log('\n🎉 ALL PAGES SHOULD NOW HAVE COMPLETE HEADER FEATURES!');
console.log('');
