const fs = require('fs');
const path = require('path');

// Correct header for state pages (with relative paths for images)
const correctHeader = `<body>
    <!-- Header -->
    <header class="main-header">
        <div class="header-container">
            <div class="logo-hamburger-row">
                <a href="../index.html" class="logo">
                    <img src="../images/windloadsolutions-logo.svg" alt="Wind Load Solutions" class="logo-image">
                </a>
            </div>

            <div class="header-right">
                <a href="../state-requirements.html" class="header-cta">State Requirements</a>
                <a href="../asce-7-standards.html" class="header-cta">ASCE 7</a>
                <a href="../resources.html" class="header-cta">Resources</a>
                <button class="hamburger" aria-label="Toggle menu">
                    <span></span>
                    <span></span>
                    <span></span>
                </button>
            </div>
        </div>
    </header>`;

// Required CSS for proper header styling
const requiredHeaderCSS = `
        /* Header */
        .main-header {
            position: fixed;
            top: 0;
            left: 0;
            right: 0;
            z-index: 1000;
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
            transition: opacity 0.3s ease, visibility 0.3s ease;
            text-decoration: none;
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

        .header-cta {
            background: rgba(0, 24, 255, 0.1);
            color: #0018ff;
            border: 2px solid rgba(0, 24, 255, 0.3);
            padding: 0.8rem 1.8rem;
            border-radius: 50px;
            font-weight: 600;
            font-size: 0.95rem;
            cursor: pointer;
            transition: all 0.3s ease;
            text-decoration: none;
            white-space: nowrap;
        }

        .header-cta:hover {
            background: rgba(0, 24, 255, 0.2);
            border-color: rgba(0, 24, 255, 0.5);
            transform: translateY(-2px);
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
            background: #1f2937;
            border-radius: 2px;
            transition: all 0.3s ease;
        }

        .hamburger.active span:nth-child(1) {
            transform: rotate(45deg) translate(6px, 6px);
        }

        .hamburger.active span:nth-child(2) {
            opacity: 0;
        }

        .hamburger.active span:nth-child(3) {
            transform: rotate(-45deg) translate(6px, -6px);
        }

        @media (max-width: 1024px) {
            .header-right a {
                display: none;
            }

            .header-container {
                padding: 0 2rem;
            }
        }

        @media (max-width: 768px) {
            .logo-image {
                height: 70px;
            }

            .main-header {
                padding: 0.5rem 0;
            }
        }`;

// Get all state HTML files
function getStateFiles() {
    if (!fs.existsSync('states')) {
        console.log('❌ States folder not found');
        return [];
    }
    return fs.readdirSync('states')
        .filter(f => f.endsWith('.html'))
        .map(f => path.join('states', f));
}

// Update state page header
function updateStateHeader(filePath) {
    let content = fs.readFileSync(filePath, 'utf8');
    let updated = false;

    // Replace old header (from <body> to </header>)
    const bodyHeaderPattern = /<body>\s*<header class="main-header">[\s\S]*?<\/header>/;
    if (bodyHeaderPattern.test(content)) {
        content = content.replace(bodyHeaderPattern, correctHeader);
        updated = true;
        console.log(`   ✓ Replaced header HTML in ${path.basename(filePath)}`);
    }

    // Add or replace header CSS
    const headerCSSPattern = /\/\* Header \*\/[\s\S]*?(@media \(max-width: 768px\)[\s\S]*?\.main-header \{[^}]*\}[\s\S]*?\})/;
    if (headerCSSPattern.test(content)) {
        content = content.replace(headerCSSPattern, requiredHeaderCSS.trim());
        updated = true;
        console.log(`   ✓ Updated header CSS in ${path.basename(filePath)}`);
    } else {
        // Try to add CSS before first @media or other selector
        const stylePattern = /(<style>[\s\S]*?)(\.main-header|@media)/;
        if (stylePattern.test(content) && !content.includes('.logo-image')) {
            content = content.replace(stylePattern, `$1${requiredHeaderCSS}\n\n        $2`);
            updated = true;
            console.log(`   ✓ Added header CSS to ${path.basename(filePath)}`);
        }
    }

    if (updated) {
        fs.writeFileSync(filePath, content, 'utf8');
        return true;
    }

    return false;
}

// Main execution
console.log('🔍 Fixing header structure in state pages...\n');

const stateFiles = getStateFiles();

if (stateFiles.length === 0) {
    console.log('❌ No state files found');
    process.exit(1);
}

console.log(`📋 Found ${stateFiles.length} state pages:\n`);
stateFiles.forEach(f => console.log(`   - ${f}`));
console.log('');

let updateCount = 0;
for (const file of stateFiles) {
    console.log(`\n🔧 Processing ${path.basename(file)}...`);
    try {
        if (updateStateHeader(file)) {
            updateCount++;
        }
    } catch (err) {
        console.log(`   ❌ Error: ${err.message}`);
    }
}

console.log(`\n\n✨ Successfully updated ${updateCount} state pages!`);
console.log('\n📍 State page headers now have:');
console.log('   • Logo (SVG image) - FAR LEFT (with ../ relative path)');
console.log('   • Hamburger menu - FAR RIGHT (after Resources button)');
console.log('   • Logo height: 100px (normal), 70px (scrolled)');
console.log('   • Proper responsive behavior');
