const fs = require('fs');

// Read the template
const template = fs.readFileSync('asce-7-16-wind-speed-maps.html', 'utf8');

// Exposure Category page configurations
const pages = {
    'exposure-b-suburban-residential-wind-loads.html': {
        title: 'Exposure B - Suburban & Residential Wind Loads | Urban Terrain | ASCE 7',
        description: 'Complete guide to Exposure B (Exposure Category B) for suburban and urban terrain. Learn surface roughness, velocity pressure coefficients, and when Exposure B applies per ASCE 7.',
        heroTitle: 'Exposure B - Suburban Terrain',
        heroSubtitle: 'Urban and suburban residential areas with closely spaced obstructions',
        breadcrumb: 'Exposure B',
        icon: 'fa-city',
        gradientLight: '#86efac',
        gradientDark: '#4ade80',
        gradientDeep: '#10b981',
    },
    'exposure-c-open-terrain-wind-loads.html': {
        title: 'Exposure C - Open Terrain Wind Loads | Flat Open Country | ASCE 7',
        description: 'Complete guide to Exposure C (Exposure Category C) for open terrain. Learn when open country, grasslands, and scattered obstructions qualify as Exposure C per ASCE 7.',
        heroTitle: 'Exposure C - Open Terrain',
        heroSubtitle: 'Open country and grasslands with scattered obstructions',
        breadcrumb: 'Exposure C',
        icon: 'fa-wheat-awn',
        gradientLight: '#fcd34d',
        gradientDark: '#fbbf24',
        gradientDeep: '#f59e0b',
    },
    'exposure-d-coastal-ocean-wind-loads.html': {
        title: 'Exposure D - Coastal & Ocean Wind Loads | Flat Unobstructed Areas | ASCE 7',
        description: 'Complete guide to Exposure D (Exposure Category D) for coastal areas and flat unobstructed terrain. Learn when waterfront and open ocean conditions apply per ASCE 7.',
        heroTitle: 'Exposure D - Coastal & Ocean',
        heroSubtitle: 'Flat unobstructed areas and water surfaces with maximum wind exposure',
        breadcrumb: 'Exposure D',
        icon: 'fa-water',
        gradientLight: '#93c5fd',
        gradientDark: '#60a5fa',
        gradientDeep: '#3b82f6',
    },
    'exposure-category-selection-guide.html': {
        title: 'Exposure Category Selection Guide - How to Determine B, C, or D | ASCE 7',
        description: 'Step-by-step guide to selecting the correct exposure category (B, C, or D) for your project. Learn ASCE 7 criteria, directional analysis, and common mistakes to avoid.',
        heroTitle: 'Exposure Category Selection Guide',
        heroSubtitle: 'How to correctly determine Exposure B, C, or D for your project site',
        breadcrumb: 'Exposure Selection',
        icon: 'fa-map-location-dot',
        gradientLight: '#c4b5fd',
        gradientDark: '#a78bfa',
        gradientDeep: '#8b5cf6',
    },
    'exposure-transition-zones.html': {
        title: 'Exposure Transition Zones - Surface Roughness Changes | ASCE 7',
        description: 'Complete guide to exposure transition zones where terrain changes from one category to another. Learn transition distance requirements and velocity pressure adjustments.',
        heroTitle: 'Exposure Transition Zones',
        heroSubtitle: 'Understanding terrain changes and surface roughness transitions',
        breadcrumb: 'Transition Zones',
        icon: 'fa-arrows-left-right',
        gradientLight: '#fdba74',
        gradientDark: '#fb923c',
        gradientDeep: '#f59e0b',
    },
    'wind-exposure-categories-guide.html': {
        title: 'Wind Exposure Categories Guide - Complete B, C, D Overview | ASCE 7',
        description: 'Comprehensive overview of all ASCE 7 exposure categories. Compare Exposure B, C, and D terrain classifications, velocity pressure coefficients, and design implications.',
        heroTitle: 'Wind Exposure Categories Overview',
        heroSubtitle: 'Complete guide to Exposure B, C, and D terrain classifications',
        breadcrumb: 'Exposure Overview',
        icon: 'fa-layer-group',
        gradientLight: '#5eead4',
        gradientDark: '#2dd4bf',
        gradientDeep: '#14b8a6',
    }
};

// Generate each page
for (const [filename, config] of Object.entries(pages)) {
    let content = template;

    // Replace metadata
    content = content.replace(
        /<title>ASCE 7-16 Wind Speed Maps.*?<\/title>/,
        `<title>${config.title}</title>`
    );
    content = content.replace(
        /content="Complete guide to ASCE 7-16 wind speed maps.*?"/,
        `content="${config.description}"`
    );

    // Replace breadcrumb
    content = content.split('ASCE 7-16 Wind Speed Maps').join(config.breadcrumb);

    // Replace hero icon
    content = content.replace(
        /<i class="fas fa-map"><\/i>/,
        `<i class="fas ${config.icon}"></i>`
    );

    // Replace hero title and subtitle
    content = content.replace(
        /<h1>ASCE 7-16 Wind Speed Maps<\/h1>/,
        `<h1>${config.heroTitle}</h1>`
    );
    content = content.replace(
        /<p class="hero-subtitle">Comprehensive guide to reading.*?<\/p>/,
        `<p class="hero-subtitle">${config.heroSubtitle}</p>`
    );

    // Replace color variables
    content = content.replace(/--map-light: #93c5fd;/g, `--map-light: ${config.gradientLight};`);
    content = content.replace(/--map-dark: #60a5fa;/g, `--map-dark: ${config.gradientDark};`);
    content = content.replace(/--map-deep: #3b82f6;/g, `--map-deep: ${config.gradientDeep};`);

    // Update breadcrumb path
    content = content.replace(
        /<a href="asce-7-standards.html">ASCE 7<\/a> ›/,
        '<a href="asce-7-standards.html">ASCE 7</a> › <a href="wind-exposure-categories-guide.html">Exposure Categories</a> ›'
    );

    // Write the file
    fs.writeFileSync(filename, content, 'utf8');
    console.log(`✓ Created: ${filename}`);
}

console.log('\n✅ All 6 Exposure Category pages created successfully!');
console.log('🏙️ Exposure B, C, D + Selection Guide + Transitions + Overview');
