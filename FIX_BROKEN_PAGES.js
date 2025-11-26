const fs = require('fs');

// List of pages I broke
const brokenPages = [
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

function fixPage(filePath) {
    console.log(`\n🔧 Fixing: ${filePath}`);
    let content = fs.readFileSync(filePath, 'utf8');
    let fixed = false;

    // 1. REMOVE the old /* Hero Section */ CSS block (the one with .hero, not .hero-section)
    const oldHeroCSSPattern = /\/\* Hero Section \*\/\s*\.hero \{[\s\S]*?\}[\s\S]*?\.hero p \{[\s\S]*?\}/;
    if (oldHeroCSSPattern.test(content)) {
        content = content.replace(oldHeroCSSPattern, '');
        console.log(`   ✅ Removed old .hero CSS`);
        fixed = true;
    }

    // 2. Make sure .hero-section CSS has correct min-height
    if (!content.includes('min-height: 100vh') && content.includes('.hero-section')) {
        const heroSectionPattern = /(\.hero-section \{[\s\S]*?)(padding-top:)/;
        if (heroSectionPattern.test(content)) {
            content = content.replace(heroSectionPattern, '$1min-height: 100vh;\n            display: flex;\n            align-items: center;\n            justify-content: center;\n            $2');
            console.log(`   ✅ Fixed .hero-section CSS`);
            fixed = true;
        }
    }

    if (fixed) {
        fs.writeFileSync(filePath, content, 'utf8');
        return true;
    }

    console.log(`   ⏭️  No old CSS found to remove`);
    return false;
}

console.log('🚨 EMERGENCY FIX - Removing old conflicting CSS\n');
console.log('='.repeat(80) + '\n');

let fixedCount = 0;

for (const page of brokenPages) {
    try {
        if (fixPage(page)) {
            fixedCount++;
        }
    } catch (err) {
        console.log(`   ❌ Error: ${err.message}`);
    }
}

console.log('\n' + '='.repeat(80));
console.log(`\n✅ Fixed ${fixedCount}/${brokenPages.length} pages`);
console.log('\nPages should now display correctly with video backgrounds!\n');
