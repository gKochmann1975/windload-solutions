const fs = require('fs');

// Read the working template
const template = fs.readFileSync('state-requirements.html', 'utf8');

// Extract sections from template
const styleEndIndex = template.indexOf('</style>');
const templateHead = template.substring(0, styleEndIndex + 8);

const heroStartIndex = template.indexOf('<!-- Hero Section -->');
const templateHeaderHTML = template.substring(styleEndIndex + 8, heroStartIndex);

const scriptStartIndex = template.indexOf('<script>');
const scriptEndIndex = template.indexOf('</script>') + 9;
const templateScript = template.substring(scriptStartIndex, scriptEndIndex);

const footerStartIndex = template.indexOf('<!-- Footer -->');
const footerEndIndex = template.indexOf('</body>');
const templateFooter = template.substring(footerStartIndex, footerEndIndex);

const statePages = [
'states/california-wind-load-requirements.html',
'states/florida-wind-load-requirements.html',
'states/georgia-wind-load-requirements.html',
'states/hawaii-wind-load-requirements.html',
'states/louisiana-wind-load-requirements.html',
'states/new-york-wind-load-requirements.html',
'states/north-carolina-wind-load-requirements.html',
'states/other-states-wind-load-requirements.html',
'states/south-carolina-wind-load-requirements.html',
'states/texas-wind-load-requirements.html',
'states/virginia-wind-load-requirements.html'
];

function fixStatePage(filePath) {
    console.log(`\n🔧 ${filePath}`);

    if (!fs.existsSync(filePath)) {
        console.log(`   ⚠️  File not found`);
        return false;
    }

    let content = fs.readFileSync(filePath, 'utf8');

    // Extract unique parts
    const titleMatch = content.match(/<title>(.*?)<\/title>/);
    const descMatch = content.match(/<meta name="description" content="(.*?)">/);

    const pageTitle = titleMatch ? titleMatch[1] : 'Wind Load Solutions';
    const pageDesc = descMatch ? descMatch[1] : '';

    // Find content between hero section and footer
    const heroStart = content.indexOf('<section class="hero-section">');
    const footerStart = content.indexOf('<footer>');

    let mainContent = '';
    if (heroStart > 0 && footerStart > heroStart) {
        mainContent = content.substring(heroStart, footerStart);
    } else {
        console.log(`   ⚠️  Could not extract content`);
        return false;
    }

    // Build new page
    let newHead = templateHead;
    newHead = newHead.replace(/<title>.*?<\/title>/, `<title>${pageTitle}</title>`);
    newHead = newHead.replace(/<meta name="description" content=".*?">/, `<meta name="description" content="${pageDesc}">`);

    const newPage = newHead + '\n' + templateHeaderHTML + '\n' +
                    mainContent + '\n' +
                    templateFooter + '\n' +
                    templateScript + '\n</body>\n</html>';

    fs.writeFileSync(filePath, newPage, 'utf8');
    console.log(`   ✅ Applied template`);
    return true;
}

console.log('🔧 FIXING STATE PAGES\n');
console.log('='.repeat(80));

let fixedCount = 0;

for (const page of statePages) {
    try {
        if (fixStatePage(page)) {
            fixedCount++;
        }
    } catch (err) {
        console.log(`   ❌ Error: ${err.message}`);
    }
}

console.log('\n' + '='.repeat(80));
console.log(`\n✅ Fixed ${fixedCount}/${statePages.length} state pages\n`);
