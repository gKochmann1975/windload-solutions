const fs = require('fs');

// Read the working template
const template = fs.readFileSync('state-requirements.html', 'utf8');

// Extract sections from template
// 1. Everything from <!DOCTYPE> to </style>
const styleEndIndex = template.indexOf('</style>');
const templateHead = template.substring(0, styleEndIndex + 8); // +8 for </style>

// 2. Everything from </style> to <!-- Hero Section --> (includes header HTML)
const heroStartIndex = template.indexOf('<!-- Hero Section -->');
const templateHeaderHTML = template.substring(styleEndIndex + 8, heroStartIndex);

// 3. JavaScript section at the end
const scriptStartIndex = template.indexOf('<script>');
const scriptEndIndex = template.indexOf('</script>') + 9;
const templateScript = template.substring(scriptStartIndex, scriptEndIndex);

// 4. Footer section
const footerStartIndex = template.indexOf('<!-- Footer -->');
const footerEndIndex = template.indexOf('</body>');
const templateFooter = template.substring(footerStartIndex, footerEndIndex);

const pages = [
'3-second-gust-wind-speed.html',
'about.html',
'articles.html',
'asce-7-16-wind-speed-maps.html',
'asce-7-22-wind-speed-maps.html',
'asce-7-standards.html',
'asd-allowable-stress-design-wind-loads.html',
'asd-lrfd-conversion-guide.html',
'basic-wind-speed-explained.html',
'broward-county-hvhz-requirements.html',
'contact.html',
'directional-vs-non-directional-wind-loads.html',
'exposure-b-suburban-residential-wind-loads.html',
'exposure-c-open-terrain-wind-loads.html',
'exposure-category-selection-guide.html',
'exposure-d-coastal-ocean-wind-loads.html',
'exposure-transition-zones.html',
'hvhz-florida-requirements.html',
'hvhz-high-velocity-hurricane-zone-guide.html',
'hvhz-product-approvals.html',
'hvhz-vs-standard-wind-zones.html',
'kd-factor-explained.html',
'lrfd-load-resistance-factor-design-wind-loads.html',
'miami-dade-hvhz-requirements.html',
'nominal-vs-ultimate-wind-loads.html',
'nominal-wind-loads-explained.html',
'resources.html',
'risk-categories-wind-loads-guide.html',
'risk-category-1-agricultural-buildings.html',
'risk-category-2-standard-occupancy.html',
'risk-category-3-assembly-buildings.html',
'risk-category-4-essential-facilities.html',
'risk-category-selection-guide.html',
'solar-wind-loads.html',
'specialty-structures-wind-loads.html',
'ultimate-wind-loads-explained.html',
'wind-directionality-factor-guide.html',
'wind-exposure-categories-guide.html',
'wind-speed-by-location.html',
'wind-speed-zones-asce-7-guide.html',
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

function applyTemplate(filePath) {
    console.log(`\n🔧 ${filePath}`);

    if (!fs.existsSync(filePath)) {
        console.log(`   ⚠️  File not found`);
        return false;
    }

    let content = fs.readFileSync(filePath, 'utf8');

    // Extract the unique parts from this page:
    // 1. Title and meta description
    const titleMatch = content.match(/<title>(.*?)<\/title>/);
    const descMatch = content.match(/<meta name="description" content="(.*?)">/);

    const pageTitle = titleMatch ? titleMatch[1] : 'Wind Load Solutions';
    const pageDesc = descMatch ? descMatch[1] : '';

    // 2. Main content (everything between hero section and footer)
    const mainContentStart = content.indexOf('<!-- Main Content -->') || content.indexOf('<main>');
    const mainContentEnd = content.indexOf('<!-- Footer -->');

    let mainContent = '';
    if (mainContentStart > 0 && mainContentEnd > mainContentStart) {
        mainContent = content.substring(mainContentStart, mainContentEnd);
    } else {
        console.log(`   ⚠️  Could not extract main content`);
        return false;
    }

    // 3. Hero section (to get the page-specific title/icon)
    const heroSectionStart = content.indexOf('<section class="hero-section">');
    const heroSectionEnd = content.indexOf('</section>', heroSectionStart) + 10;

    let heroSection = '';
    if (heroSectionStart > 0) {
        heroSection = content.substring(heroSectionStart, heroSectionEnd);
    }

    // Build new page with template structure but page-specific content
    let newHead = templateHead;

    // Replace title and description
    newHead = newHead.replace(/<title>.*?<\/title>/, `<title>${pageTitle}</title>`);
    newHead = newHead.replace(/<meta name="description" content=".*?">/, `<meta name="description" content="${pageDesc}">`);

    // Assemble complete page
    const newPage = newHead + '\n' + templateHeaderHTML + '\n' +
                    (heroSection || '<!-- Hero Section -->\n') + '\n' +
                    mainContent + '\n' +
                    templateFooter + '\n' +
                    templateScript + '\n</body>\n</html>';

    // Write the new file
    fs.writeFileSync(filePath, newPage, 'utf8');
    console.log(`   ✅ Applied state-requirements.html template`);
    return true;
}

console.log('🎯 APPLYING STATE-REQUIREMENTS.HTML TEMPLATE TO ALL PAGES\n');
console.log('='.repeat(80));

let fixedCount = 0;

for (const page of pages) {
    try {
        if (applyTemplate(page)) {
            fixedCount++;
        }
    } catch (err) {
        console.log(`   ❌ Error: ${err.message}`);
    }
}

console.log('\n' + '='.repeat(80));
console.log(`\n✅ Applied template to ${fixedCount}/${pages.length} pages\n`);
console.log('🎉 ALL PAGES SHOULD NOW WORK EXACTLY LIKE STATE-REQUIREMENTS.HTML!\n');
