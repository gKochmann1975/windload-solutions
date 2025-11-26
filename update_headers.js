const fs = require('fs');

// Read the list of pages
const pagesData = JSON.parse(fs.readFileSync('pages_data.json', 'utf8'));
const files = pagesData.pages.map(p => p.filename);

// The correct header HTML structure from index.html
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

// Logo styles from index.html
const logoStyles = `        .logo {
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

let updatedCount = 0;

files.forEach(filename => {
    if (!fs.existsSync(filename)) {
        console.log(`⚠️  File not found: ${filename}`);
        return;
    }

    let content = fs.readFileSync(filename, 'utf8');
    
    // Replace the old header structure (with emoji + text)
    const oldHeaderPattern = /<header class="main-header">[\s\S]*?<\/header>/;
    
    if (content.match(oldHeaderPattern)) {
        content = content.replace(oldHeaderPattern, correctHeader);
        
        // Add logo styles if not present
        if (!content.includes('.logo-image')) {
            // Find where to insert logo styles (after .logo-hamburger-row styles)
            const insertPoint = content.indexOf('.logo-hamburger-row {');
            if (insertPoint !== -1) {
                const endOfBlock = content.indexOf('}', insertPoint) + 1;
                content = content.slice(0, endOfBlock) + '\n\n' + logoStyles + content.slice(endOfBlock);
            }
        }
        
        fs.writeFileSync(filename, content, 'utf8');
        console.log(`✅ Updated: ${filename}`);
        updatedCount++;
    } else {
        console.log(`⚠️  No header found in: ${filename}`);
    }
});

console.log(`\n✅ Updated ${updatedCount} files with correct header!`);
