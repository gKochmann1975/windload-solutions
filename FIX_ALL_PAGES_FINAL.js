const fs = require('fs');
const path = require('path');

// Get ALL HTML files
function getAllHtmlFiles() {
    const files = [];

    // Root directory
    const rootFiles = fs.readdirSync('.').filter(f =>
        f.endsWith('.html') &&
        f !== 'index.html' &&
        f !== 'state-requirements.html' &&
        !f.includes('.BROKEN') &&
        !f.includes('.NEW')
    );
    files.push(...rootFiles);

    // States directory
    if (fs.existsSync('states')) {
        const stateFiles = fs.readdirSync('states').filter(f => f.endsWith('.html'));
        files.push(...stateFiles.map(f => `states/${f}`));
    }

    return files;
}

function fixPage(filePath) {
    console.log(`\n🔧 ${filePath}`);

    if (!fs.existsSync(filePath)) {
        console.log(`   ⚠️  File not found`);
        return false;
    }

    // Read current page to extract title and description
    const currentContent = fs.readFileSync(filePath, 'utf8');
    const titleMatch = currentContent.match(/<title>(.*?)<\/title>/);
    const descMatch = currentContent.match(/<meta name="description" content="(.*?)">/);

    const pageTitle = titleMatch ? titleMatch[1] : 'Wind Load Solutions';
    const pageDesc = descMatch ? descMatch[1] : 'Wind load engineering resources';

    // Read template
    let template = fs.readFileSync('state-requirements.html', 'utf8');

    // Replace title and description
    template = template.replace(
        /<title>.*?<\/title>/,
        `<title>${pageTitle}</title>`
    );

    template = template.replace(
        /<meta name="description" content=".*?">/,
        `<meta name="description" content="${pageDesc}">`
    );

    // Write the file
    fs.writeFileSync(filePath, template, 'utf8');
    console.log(`   ✅ Applied state-requirements.html template`);
    return true;
}

console.log('🚀 FINAL FIX - Applying state-requirements.html to ALL PAGES\n');
console.log('='.repeat(80));

const allFiles = getAllHtmlFiles();
console.log(`Found ${allFiles.length} HTML files to fix\n`);

let fixedCount = 0;

for (const file of allFiles) {
    try {
        if (fixPage(file)) {
            fixedCount++;
        }
    } catch (err) {
        console.log(`   ❌ Error: ${err.message}`);
    }
}

console.log('\n' + '='.repeat(80));
console.log(`\n✅ Fixed ${fixedCount}/${allFiles.length} pages`);
console.log('\n🎉 ALL PAGES NOW HAVE:');
console.log('   - Full screen video section (100vh)');
console.log('   - Logo shrinks on scroll (100px → 70px)');
console.log('   - Header transparent → white on scroll');
console.log('   - Working hamburger menu from index.html');
console.log('   - TOPO submenu items');
console.log('   - Correct favicon\n');
