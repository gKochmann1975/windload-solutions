const fs = require('fs');

const navigationHTML = `    <!-- Navigation Overlay -->
    <div class="nav-overlay"></div>

    <!-- Navigation Menu -->
    <nav class="nav-links">
        <a href="index.html">Home</a>
        <a href="state-requirements.html">State Requirements</a>
        <a href="asce-7-standards.html">ASCE 7 Standards</a>
        <a href="components-cladding.html">Components & Cladding</a>
        <a href="mwfrs.html">MWFRS Guide</a>

        <div class="nav-item-with-submenu">
            <a href="topographic-effects-wind-loads.html">
                Topography Overview
                <i class="fas fa-chevron-down submenu-toggle"></i>
            </a>
            <div class="sub-menu">
                <a href="topographic-flat-terrain.html"><i class="fas fa-minus"></i> Flat Terrain</a>
                <a href="topographic-escarpment.html"><i class="fas fa-layer-group"></i> Escarpment</a>
                <a href="topographic-2d-ridge.html"><i class="fas fa-mountain"></i> 2D Ridge</a>
                <a href="topographic-3d-hill.html"><i class="fas fa-draw-polygon"></i> 3D Hill</a>
            </div>
        </div>

        <a href="resources.html">Free Resources</a>
        <a href="articles.html">Articles & Guides</a>
        <a href="about.html">About Us</a>
        <a href="contact.html">Contact</a>
    </nav>

`;

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

function addNavigation(filePath) {
    console.log(`\n🔧 ${filePath}`);

    if (!fs.existsSync(filePath)) {
        console.log(`   ⚠️  File not found`);
        return false;
    }

    let content = fs.readFileSync(filePath, 'utf8');

    // Check if navigation already exists
    if (content.includes('<nav class="nav-links">')) {
        console.log(`   ⏭️  Already has navigation`);
        return false;
    }

    // Insert navigation BEFORE the hero section or main content
    const insertPatterns = [
        /(\s*)(<!-- Hero Section -->)/,
        /(\s*)(<section class="hero-section">)/,
        /(\s*)(<!-- Main Content -->)/,
        /(\s*)(<main>)/
    ];

    let inserted = false;
    for (const pattern of insertPatterns) {
        if (pattern.test(content)) {
            content = content.replace(pattern, `${navigationHTML}$1$2`);
            console.log(`   ✅ Added navigation menu`);
            inserted = true;
            break;
        }
    }

    if (!inserted) {
        console.log(`   ❌ Could not find insertion point`);
        return false;
    }

    fs.writeFileSync(filePath, content, 'utf8');
    return true;
}

console.log('📱 ADDING NAVIGATION MENU TO ALL PAGES\n');
console.log('='.repeat(80));

let fixedCount = 0;

for (const page of pages) {
    try {
        if (addNavigation(page)) {
            fixedCount++;
        }
    } catch (err) {
        console.log(`   ❌ Error: ${err.message}`);
    }
}

console.log('\n' + '='.repeat(80));
console.log(`\n✅ Added navigation to ${fixedCount}/${pages.length} pages\n`);
