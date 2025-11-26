const fs = require('fs');

const heroCSS = `
        /* Hero Section */
        .hero-section {
            position: relative;
            min-height: 100vh;
            display: flex;
            align-items: center;
            justify-content: center;
            overflow: hidden;
            background: linear-gradient(135deg, #0018ff 0%, #181E57 100%);
            padding-top: 120px;
        }

        .hero-video {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            object-fit: cover;
            z-index: 1;
        }

        .hero-overlay {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: linear-gradient(135deg, rgba(0, 24, 255, 0) 0%, rgba(24, 30, 87, 0) 100%);
            z-index: 2;
        }

        .hero-content {
            position: relative;
            z-index: 3;
            color: white;
            text-align: center;
            padding: 2rem;
        }

        .hero-icon {
            font-size: 4rem;
            margin-bottom: 1.5rem;
            color: #fbbf24;
        }

        .hero-content h1 {
            font-size: clamp(2.5rem, 6vw, 4rem);
            font-weight: 800;
            margin-bottom: 1rem;
            text-shadow: 0 4px 20px rgba(0,0,0,0.5);
        }

        .hero-content p {
            font-size: clamp(1.1rem, 2.5vw, 1.5rem);
            opacity: 0.95;
            max-width: 800px;
            margin: 0 auto;
            text-shadow: 0 2px 10px rgba(0,0,0,0.3);
        }

        @media (max-width: 768px) {
            .hero-section {
                min-height: 80vh;
                padding-top: 100px;
            }
        }
`;

const pages = [
'3-second-gust-wind-speed.html',
'about.html',
'articles.html',
'asce-7-16-wind-speed-maps.html',
'asce-7-22-wind-speed-maps.html',
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

function addHeroCSS(filePath) {
    console.log(`\n🔧 ${filePath}`);

    if (!fs.existsSync(filePath)) {
        console.log(`   ⚠️  File not found`);
        return false;
    }

    let content = fs.readFileSync(filePath, 'utf8');

    // Check if hero CSS already exists
    if (content.includes('.hero-section') && content.includes('.hero-video')) {
        console.log(`   ⏭️  Already has hero CSS`);
        return false;
    }

    // Find where to insert CSS - before /* Main Content */ or before </style>
    const insertPatterns = [
        /(\s*)(\/\* Main Content \*\/)/,
        /(\s*)(\/\* CTA Section \*\/)/,
        /(\s*)(\/\* Footer \*\/)/,
        /(\s*)(<\/style>)/
    ];

    let inserted = false;
    for (const pattern of insertPatterns) {
        if (pattern.test(content)) {
            content = content.replace(pattern, `${heroCSS}\n$1$2`);
            console.log(`   ✅ Added hero CSS`);
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

console.log('🎨 ADDING HERO CSS TO ALL PAGES\n');
console.log('='.repeat(80));

let fixedCount = 0;

for (const page of pages) {
    try {
        if (addHeroCSS(page)) {
            fixedCount++;
        }
    } catch (err) {
        console.log(`   ❌ Error: ${err.message}`);
    }
}

console.log('\n' + '='.repeat(80));
console.log(`\n✅ Added CSS to ${fixedCount}/${pages.length} pages\n`);
