const fs = require('fs');

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
'state-requirements.html',
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

function fixEverything(filePath) {
    console.log(`\n🔧 ${filePath}`);

    if (!fs.existsSync(filePath)) {
        console.log(`   ⚠️  File not found`);
        return false;
    }

    let content = fs.readFileSync(filePath, 'utf8');
    let fixed = false;

    // 1. Fix favicon - change data:image to images/windloadsolutions-favicon.svg
    if (content.includes('data:image/svg+xml')) {
        content = content.replace(
            /<link rel="icon"[^>]*data:image\/svg\+xml[^>]*>/,
            '<link rel="icon" type="image/svg+xml" href="images/windloadsolutions-favicon.svg">'
        );
        console.log(`   ✅ Fixed favicon`);
        fixed = true;
    }

    // 2. Fix hamburger menu JavaScript - add body overflow line
    const oldToggleMenu = /function toggleMenu\(\) \{\s*hamburger\.classList\.toggle\('active'\);\s*navLinks\.classList\.toggle\('active'\);\s*navOverlay\.classList\.toggle\('active'\);\s*logo\.classList\.toggle\('menu-active'\);\s*\}/;

    if (oldToggleMenu.test(content)) {
        content = content.replace(
            oldToggleMenu,
            `function toggleMenu() {
            hamburger.classList.toggle('active');
            navLinks.classList.toggle('active');
            navOverlay.classList.toggle('active');
            logo.classList.toggle('menu-active');
            document.body.style.overflow = navLinks.classList.contains('active') ? 'hidden' : '';
        }`
        );
        console.log(`   ✅ Fixed hamburger menu JavaScript`);
        fixed = true;
    }

    // 3. Remove if (hamburger) checks and use direct event listeners
    if (content.includes('if (hamburger)')) {
        content = content.replace(
            /if \(hamburger\) \{\s*hamburger\.addEventListener\('click', toggleMenu\);\s*\}/,
            `hamburger.addEventListener('click', toggleMenu);`
        );
        content = content.replace(
            /if \(navOverlay\) \{\s*navOverlay\.addEventListener\('click', toggleMenu\);\s*\}/,
            `navOverlay.addEventListener('click', toggleMenu);`
        );
        console.log(`   ✅ Removed unnecessary if checks`);
        fixed = true;
    }

    if (fixed) {
        fs.writeFileSync(filePath, content, 'utf8');
        return true;
    }

    console.log(`   ⏭️  No changes needed`);
    return false;
}

console.log('🚀 FINAL FIX - FAVICON + HAMBURGER MENU\n');
console.log('='.repeat(80));

let fixedCount = 0;

for (const page of pages) {
    try {
        if (fixEverything(page)) {
            fixedCount++;
        }
    } catch (err) {
        console.log(`   ❌ Error: ${err.message}`);
    }
}

console.log('\n' + '='.repeat(80));
console.log(`\n✅ Fixed ${fixedCount}/${pages.length} pages\n`);
console.log('\n🎉 ALL PAGES SHOULD NOW WORK LIKE INDEX.HTML!\n');
