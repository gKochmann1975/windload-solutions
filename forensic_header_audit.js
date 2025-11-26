const fs = require('fs');
const path = require('path');

// Get all HTML files including subdirectories
function getAllHtmlFiles() {
    const files = [];

    // Root HTML files (excluding index.html)
    const rootFiles = fs.readdirSync('.').filter(f => f.endsWith('.html') && f !== 'index.html');
    files.push(...rootFiles.map(f => ({path: f, isState: false})));

    // States folder
    if (fs.existsSync('states')) {
        const stateFiles = fs.readdirSync('states').filter(f => f.endsWith('.html'));
        files.push(...stateFiles.map(f => ({path: `states/${f}`, isState: true})));
    }

    return files;
}

// Check for required header features
function auditPageHeader(filePath, isStatePage) {
    const content = fs.readFileSync(filePath, 'utf8');
    const issues = [];
    const features = {};

    // 1. Check for scroll JavaScript
    features.hasScrollJS = content.includes("window.addEventListener('scroll'") &&
                          content.includes("header.classList.add('scrolled')");
    if (!features.hasScrollJS) issues.push('Missing scroll JavaScript');

    // 2. Check for transparent → white header CSS
    features.hasTransparentHeader = content.includes('background: transparent') &&
                                    content.includes('.main-header.scrolled');
    if (!features.hasTransparentHeader) issues.push('Missing transparent header CSS');

    // 3. Check for logo size change (100px → 70px)
    features.hasLogoResize = content.includes('height: 100px') &&
                            content.includes('.main-header.scrolled .logo-image');
    if (!features.hasLogoResize) issues.push('Missing logo resize on scroll');

    // 4. Check for button color change on scroll
    features.hasButtonColorChange = content.includes('.main-header.scrolled .header-cta');
    if (!features.hasButtonColorChange) issues.push('Missing button color change on scroll');

    // 5. Check for hamburger color change
    features.hasHamburgerColorChange = content.includes('.main-header.scrolled .hamburger span');
    if (!features.hasHamburgerColorChange) issues.push('Missing hamburger color change on scroll');

    // 6. Check for nav overlay
    features.hasNavOverlay = content.includes('nav-overlay') || content.includes('class="nav-overlay"');
    if (!features.hasNavOverlay) issues.push('Missing nav overlay');

    // 7. Check for mobile menu toggle function
    features.hasMenuToggle = content.includes('toggleMenu') || content.includes('function toggleMenu');
    if (!features.hasMenuToggle) issues.push('Missing menu toggle function');

    // 8. Check for proper logo image path
    const expectedLogoPath = isStatePage ? '../images/windloadsolutions-logo.svg' : 'images/windloadsolutions-logo.svg';
    features.hasCorrectLogoPath = content.includes(expectedLogoPath);
    if (!features.hasCorrectLogoPath) issues.push(`Missing correct logo path (should be ${expectedLogoPath})`);

    // 9. Check for hamburger in correct position (after logo, in header-right)
    features.hasCorrectHamburgerPosition = content.includes('<div class="header-right">') &&
                                          content.match(/<div class="header-right">[\s\S]*?<button class="hamburger"/);
    if (!features.hasCorrectHamburgerPosition) issues.push('Hamburger not in header-right (wrong position)');

    // 10. Check for white hamburger/buttons initially
    features.hasWhiteInitialStyle = content.includes('background: white') &&
                                    content.match(/\.hamburger span[\s\S]{0,200}background: white/);
    if (!features.hasWhiteInitialStyle) issues.push('Missing white hamburger initial style');

    return { features, issues };
}

// Main execution
console.log('🔍 FORENSIC HEADER AUDIT - Checking ALL pages for complete header features\n');
console.log('=' .repeat(80) + '\n');

const allFiles = getAllHtmlFiles();
const problemPages = [];
const perfectPages = [];

for (const file of allFiles) {
    const audit = auditPageHeader(file.path, file.isState);

    if (audit.issues.length > 0) {
        problemPages.push({ file: file.path, issues: audit.issues, features: audit.features });
    } else {
        perfectPages.push(file.path);
    }
}

// Report results
if (problemPages.length > 0) {
    console.log(`❌ FOUND ${problemPages.length} PAGES WITH ISSUES:\n`);

    problemPages.forEach(page => {
        console.log(`📄 ${page.file}`);
        console.log(`   Issues (${page.issues.length}):`);
        page.issues.forEach(issue => console.log(`      ⚠️  ${issue}`));

        // Show what features ARE present
        const presentFeatures = Object.entries(page.features)
            .filter(([key, value]) => value === true)
            .map(([key]) => key);

        if (presentFeatures.length > 0) {
            console.log(`   ✓ Has: ${presentFeatures.join(', ')}`);
        }
        console.log('');
    });
} else {
    console.log('✅ NO ISSUES FOUND - All pages are perfect!\n');
}

console.log('=' .repeat(80));
console.log(`\n📊 AUDIT SUMMARY:`);
console.log(`   ✅ Perfect pages: ${perfectPages.length}`);
console.log(`   ❌ Pages with issues: ${problemPages.length}`);
console.log(`   📋 Total pages audited: ${allFiles.length}\n`);

if (perfectPages.length > 0 && problemPages.length === 0) {
    console.log('🎉 PERFECT! All pages have complete header scroll features!\n');
    console.log('All pages include:');
    console.log('   ✓ Scroll JavaScript (transparent → white header)');
    console.log('   ✓ Logo resize (100px → 70px)');
    console.log('   ✓ Button color change on scroll');
    console.log('   ✓ Hamburger color change (white → dark)');
    console.log('   ✓ Nav overlay');
    console.log('   ✓ Mobile menu toggle');
    console.log('   ✓ Correct logo paths');
    console.log('   ✓ Hamburger in correct position (far right)');
}

// Return exit code based on results
process.exit(problemPages.length > 0 ? 1 : 0);
