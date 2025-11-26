const fs = require('fs');
const path = require('path');

// Correct header structure matching index.html
const correctHeader = `    <!-- Header -->
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

// Logo styles that need to be in the CSS
const logoStyles = `
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
        }`;

// Get all HTML files in the project
function getAllHtmlFiles() {
    const files = [];

    // Root HTML files
    const rootFiles = fs.readdirSync('.').filter(f => f.endsWith('.html') && f !== 'index.html');
    files.push(...rootFiles);

    // States folder
    if (fs.existsSync('states')) {
        const stateFiles = fs.readdirSync('states').filter(f => f.endsWith('.html')).map(f => `states/${f}`);
        files.push(...stateFiles);
    }

    return files;
}

// Check if file needs header update
function needsHeaderUpdate(content) {
    // Check for various incorrect header patterns
    const hasWrongHamburgerPosition = content.includes('<div class="logo-hamburger-row">') &&
                                       content.match(/<div class="logo-hamburger-row">[\s\S]*?<button class="hamburger"[\s\S]*?<a href="index.html" class="logo">/);

    const hasEmojiLogo = content.includes('💨') && content.includes('Wind Load Solutions</');

    const missingLogoImage = content.includes('class="logo"') && !content.includes('windloadsolutions-logo.svg');

    const hasWrongLogoHeight = content.match(/\.logo-image\s*\{[^}]*height:\s*70px/);

    return hasWrongHamburgerPosition || hasEmojiLogo || missingLogoImage || hasWrongLogoHeight;
}

// Update header in file
function updateHeader(filePath) {
    let content = fs.readFileSync(filePath, 'utf8');
    let updated = false;

    // Pattern 1: Replace wrong hamburger position (hamburger before logo)
    const pattern1 = /<!-- Header -->\s*<header class="main-header">[\s\S]*?<\/header>/;
    if (pattern1.test(content)) {
        const oldHeader = content.match(pattern1)[0];

        // Check if hamburger is in wrong position
        if (oldHeader.includes('<button class="hamburger"') &&
            oldHeader.indexOf('<button class="hamburger"') < oldHeader.indexOf('<a href="index.html" class="logo">')) {
            content = content.replace(pattern1, correctHeader);
            updated = true;
        }
        // Check if using emoji instead of logo image
        else if (oldHeader.includes('💨') || !oldHeader.includes('windloadsolutions-logo.svg')) {
            content = content.replace(pattern1, correctHeader);
            updated = true;
        }
    }

    // Fix logo image height in CSS (should be 100px, not 70px)
    const logoHeightPattern = /(\.logo-image\s*\{[^}]*height:\s*)70px/;
    if (logoHeightPattern.test(content)) {
        content = content.replace(logoHeightPattern, '$1100px');
        updated = true;
    }

    // Add missing logo styles if not present
    if (!content.includes('.logo.menu-active') && content.includes('.logo-image')) {
        const styleEndPattern = /(\s*)(\/\* Header \*\/|\.main-header \{)/;
        if (styleEndPattern.test(content)) {
            content = content.replace(styleEndPattern, logoStyles + '\n$1$2');
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
console.log('🔍 Scanning all HTML files for header issues...\n');

const allFiles = getAllHtmlFiles();
const filesToUpdate = [];

// First pass: identify files that need updates
for (const file of allFiles) {
    try {
        const content = fs.readFileSync(file, 'utf8');
        if (needsHeaderUpdate(content)) {
            filesToUpdate.push(file);
        }
    } catch (err) {
        console.log(`❌ Error reading ${file}: ${err.message}`);
    }
}

console.log(`📋 Found ${filesToUpdate.length} files that need header updates:\n`);
filesToUpdate.forEach(f => console.log(`   - ${f}`));
console.log('');

// Second pass: update files
let updateCount = 0;
for (const file of filesToUpdate) {
    try {
        if (updateHeader(file)) {
            console.log(`✅ Updated: ${file}`);
            updateCount++;
        }
    } catch (err) {
        console.log(`❌ Error updating ${file}: ${err.message}`);
    }
}

console.log(`\n✨ Successfully updated ${updateCount} files with correct header structure!`);
console.log('\n📍 Header structure now matches index.html:');
console.log('   • Logo (SVG image) - FAR LEFT');
console.log('   • Hamburger menu - FAR RIGHT (after Resources button)');
console.log('   • Logo height: 100px (normal), 70px (scrolled)');
