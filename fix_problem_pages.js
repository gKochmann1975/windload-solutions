const fs = require('fs');

// Pages identified by forensic audit
const problemPages = [
    'asce-7-wind-load-calculator.html',
    'asce-7-wind-load-velocity-finder-wind-speed-by-zip-code.html',
    'components-cladding-wind-load-calculation-asce-7-pressure-analysis-building-design.html',
    'contact-us-wind-load-calculators-for-components-and-cladding-cc-wind-load-pressures-per-the-asce-7-16-and-asce-7-22-publication-windloads-made-easy.html',
    'topographic-2d-ridge-animation.html',
    'topographic-2d-ridge.html',
    'topographic-3d-hill-animation.html',
    'topographic-3d-hill.html',
    'topographic-effects-wind-loads.html',
    'topographic-escarpment-animation.html',
    'topographic-escarpment.html',
    'topographic-flat-terrain-animation.html',
    'topographic-flat-terrain.html',
    'ultimate-nominal-asce-7-wind-load-pressure-calculator.html',
    'wind-load-calculator-software-for-how-to-calculate-wind-load-on-windows-doors-shutters-and-roofs-about-us-why-choose-us.html',
    'wind-load-pressure-asd-lrfd-hvhz-proper-window-selection.html'
];

// Correct header HTML matching index.html
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
    </header>`;

// Complete header CSS from index.html
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
        }`;

function fixPage(filePath) {
    console.log(`\n🔧 Fixing: ${filePath}`);
    let content = fs.readFileSync(filePath, 'utf8');
    let fixed = false;
    const fixes = [];

    // 1. Fix header HTML - Replace entire header section
    const headerPattern = /<!-- Header -->[\s\S]*?<\/header>/;
    if (headerPattern.test(content)) {
        content = content.replace(headerPattern, correctHeaderHTML);
        fixes.push('Replaced header HTML with correct structure');
        fixed = true;
    }

    // 2. Fix header CSS - Replace all header-related CSS
    const headerCSSPattern = /\/\* Header \*\/[\s\S]*?(\/\* Hamburger Menu \*\/[\s\S]*?\.hamburger\.active span:nth-child\(3\)[\s\S]*?\})/;
    if (headerCSSPattern.test(content)) {
        content = content.replace(headerCSSPattern, completeHeaderCSS);
        fixes.push('Replaced header CSS with complete scroll styles');
        fixed = true;
    } else {
        // Try alternate pattern - find Header comment and replace until next major section
        const altPattern = /\/\* Header \*\/[\s\S]*?(\/\* Navigation|\.hero|\.container \{|@media)/;
        if (altPattern.test(content)) {
            content = content.replace(altPattern, `${completeHeaderCSS}\n\n        /* Navigation`);
            fixes.push('Replaced header CSS (alternate pattern)');
            fixed = true;
        }
    }

    if (fixed) {
        fs.writeFileSync(filePath, content, 'utf8');
        console.log(`   ✅ Fixed ${fixes.length} issues:`);
        fixes.forEach(fix => console.log(`      • ${fix}`));
    } else {
        console.log(`   ⚠️  No patterns matched - may need manual review`);
    }

    return fixed;
}

console.log('🔨 FIXING 16 PROBLEM PAGES WITH HEADER ISSUES\n');
console.log('=' .repeat(80) + '\n');

let fixCount = 0;
let failCount = 0;

for (const page of problemPages) {
    try {
        if (fixPage(page)) {
            fixCount++;
        } else {
            failCount++;
        }
    } catch (err) {
        console.log(`   ❌ Error: ${err.message}`);
        failCount++;
    }
}

console.log('\n' + '='.repeat(80));
console.log(`\n📊 FIX SUMMARY:`);
console.log(`   ✅ Successfully fixed: ${fixCount}`);
console.log(`   ❌ Failed to fix: ${failCount}`);
console.log(`   📋 Total attempted: ${problemPages.length}`);

if (fixCount === problemPages.length) {
    console.log('\n🎉 ALL PROBLEM PAGES FIXED!');
    console.log('\nAll pages now have:');
    console.log('   ✓ Logo far left, hamburger far right');
    console.log('   ✓ Transparent header → white on scroll');
    console.log('   ✓ Logo 100px → 70px on scroll');
    console.log('   ✓ White buttons/hamburger → blue/dark on scroll');
} else {
    console.log('\n⚠️  Some pages may need manual review');
}

console.log('');
