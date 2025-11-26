const fs = require('fs');

const animationPages = [
    'topographic-flat-terrain-animation.html',
    'topographic-escarpment-animation.html',
    'topographic-2d-ridge-animation.html',
    'topographic-3d-hill-animation.html'
];

// Minimal header for animation pages (doesn't interfere with fullscreen animations)
const minimalHeader = `<body>
    <!-- Minimal Header -->
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

`;

// Minimal CSS for animation pages header
const minimalHeaderCSS = `        /* Header */
        .main-header {
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
            max-width: 1400px;
            margin: 0 auto;
            padding: 0 2rem;
        }

        .logo-hamburger-row {
            display: flex;
            align-items: center;
        }

        .logo {
            z-index: 1001;
            transition: opacity 0.3s ease;
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
            padding: 0.6rem 1.2rem;
            border-radius: 50px;
            font-weight: 600;
            font-size: 0.85rem;
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
            width: 24px;
            height: 18px;
            background: none;
            border: none;
            cursor: pointer;
            padding: 0;
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

        /* Nav Overlay */
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

`;

const scrollJS = `
    <script>
        // Header scroll effect
        window.addEventListener('scroll', () => {
            const header = document.querySelector('.main-header');
            if (header && window.scrollY > 50) {
                header.classList.add('scrolled');
            } else if (header) {
                header.classList.remove('scrolled');
            }
        });

        // Hamburger menu
        const hamburger = document.querySelector('.hamburger');
        const navOverlay = document.querySelector('.nav-overlay');

        if (hamburger) {
            hamburger.addEventListener('click', () => {
                hamburger.classList.toggle('active');
                navOverlay.classList.toggle('active');
            });
        }

        if (navOverlay) {
            navOverlay.addEventListener('click', () => {
                hamburger.classList.remove('active');
                navOverlay.classList.remove('active');
            });
        }
    </script>
</body>`;

function fixAnimationPage(filePath) {
    console.log(`\n🎬 Fixing: ${filePath}`);
    let content = fs.readFileSync(filePath, 'utf8');
    let fixed = false;
    const fixes = [];

    // 1. Add header CSS in <style> section
    if (!content.includes('.main-header')) {
        const stylePattern = /(<style>\s*body \{)/;
        if (stylePattern.test(content)) {
            content = content.replace(stylePattern, `<style>\n${minimalHeaderCSS}\n\n        body {`);
            fixes.push('Added header CSS');
            fixed = true;
        }
    }

    // 2. Add header HTML after <body>
    if (!content.includes('class="main-header"')) {
        const bodyPattern = /(<body>)/;
        if (bodyPattern.test(content)) {
            content = content.replace(bodyPattern, minimalHeader);
            fixes.push('Added header HTML');
            fixed = true;
        }
    }

    // 3. Add scroll JavaScript before </body>
    if (!content.includes("window.addEventListener('scroll'")) {
        const bodyEndPattern = /(<\/body>)/;
        if (bodyEndPattern.test(content)) {
            content = content.replace(bodyEndPattern, scrollJS);
            fixes.push('Added scroll JavaScript');
            fixed = true;
        }
    }

    if (fixed) {
        fs.writeFileSync(filePath, content, 'utf8');
        console.log(`   ✅ Fixed ${fixes.length} issues:`);
        fixes.forEach(fix => console.log(`      • ${fix}`));
    } else {
        console.log(`   ℹ️  Already has header features`);
    }

    return fixed;
}

console.log('🎬 FIXING ANIMATION PAGES WITH MINIMAL HEADER\n');
console.log('=' .repeat(80) + '\n');

let fixCount = 0;

for (const page of animationPages) {
    try {
        if (fixAnimationPage(page)) {
            fixCount++;
        }
    } catch (err) {
        console.log(`   ❌ Error: ${err.message}`);
    }
}

console.log('\n' + '='.repeat(80));
console.log(`\n📊 SUMMARY:`);
console.log(`   ✅ Fixed: ${fixCount}/${animationPages.length}`);

if (fixCount > 0) {
    console.log('\n🎉 Animation pages now have:');
    console.log('   ✓ Minimal header (doesn\'t interfere with animations)');
    console.log('   ✓ Logo far left, hamburger far right');
    console.log('   ✓ Transparent → white on scroll');
    console.log('   ✓ White buttons/hamburger → blue/dark on scroll');
}

console.log('');
