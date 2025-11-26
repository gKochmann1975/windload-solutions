const fs = require('fs');

// Read the template
const template = fs.readFileSync('asce-7-16-wind-speed-maps.html', 'utf8');

// Page configurations
const pages = {
    'asce-7-22-wind-speed-maps.html': {
        title: 'ASCE 7-22 Wind Speed Maps - MRI-Based Design Wind Speeds | Updated 2022 Standard',
        description: 'Complete guide to ASCE 7-22 MRI-based wind speed maps. Learn about the new 300, 700, 1,700, and 3,000-year wind speeds for Risk Categories I-IV and how they differ from ASCE 7-16.',
        heroTitle: 'ASCE 7-22 Wind Speed Maps',
        heroSubtitle: 'Understanding the new MRI-based approach to design wind speeds and changes from ASCE 7-16',
        breadcrumb: 'ASCE 7-22 Wind Speed Maps',
        icon: 'fa-map-marked-alt',
        gradientLight: '#5eead4',
        gradientDark: '#2dd4bf',
        gradientDeep: '#14b8a6',
    },
    'wind-speed-by-location.html': {
        title: 'Wind Speed by Location - Find Design Wind Speeds for Your Project Site | ASCE 7',
        description: 'Determine design wind speeds for any location in the United States. Learn how to use ASCE 7 maps, online tools, and account for terrain, elevation, and special wind regions.',
        heroTitle: 'Wind Speed by Location',
        heroSubtitle: 'Find accurate design wind speeds for your specific project location',
        breadcrumb: 'Wind Speed by Location',
        icon: 'fa-location-dot',
        gradientLight: '#c4b5fd',
        gradientDark: '#a78bfa',
        gradientDeep: '#8b5cf6',
    },
    'asce-7-wind-load-calculator.html': {
        title: 'ASCE 7 Wind Load Calculator - Professional Wind Pressure Analysis Software',
        description: 'Professional ASCE 7 wind load calculator software for Components & Cladding and MWFRS calculations. Automated wind pressure analysis with PE seal integration.',
        heroTitle: 'ASCE 7 Wind Load Calculator',
        heroSubtitle: 'Professional software for accurate wind pressure calculations per ASCE 7-16 and 7-22',
        breadcrumb: 'ASCE 7 Calculator',
        icon: 'fa-calculator',
        gradientLight: '#86efac',
        gradientDark: '#4ade80',
        gradientDeep: '#10b981',
    },
    'asce-7-wind-load-velocity-finder-wind-speed-by-zip-code.html': {
        title: 'Wind Speed by Zip Code - ASCE 7 Velocity Finder | Instant Design Wind Speed Lookup',
        description: 'Find ASCE 7 design wind speeds instantly by zip code. Free online wind speed lookup tool for ASCE 7-16 and 7-22 with Risk Category adjustments.',
        heroTitle: 'Wind Speed by Zip Code',
        heroSubtitle: 'Instant ASCE 7 wind speed lookup using zip code search',
        breadcrumb: 'Wind Speed Finder',
        icon: 'fa-search-location',
        gradientLight: '#fdba74',
        gradientDark: '#fb923c',
        gradientDeep: '#f59e0b',
    }
};

// Generate each page
for (const [filename, config] of Object.entries(pages)) {
    let content = template;

    // Replace metadata
    content = content.replace(
        '<title>ASCE 7-16 Wind Speed Maps - Design Wind Speeds for Building Code Compliance | Wind Load Solutions</title>',
        `<title>${config.title}</title>`
    );
    content = content.replace(
        'content="Complete guide to ASCE 7-16 wind speed maps (Figures 26.5-1A through 26.5-1C). Learn how to read wind speed contours, interpolate between zones, and determine design wind speeds for your project location."',
        `content="${config.description}"`
    );

    // Replace breadcrumb (all occurrences)
    content = content.split('ASCE 7-16 Wind Speed Maps').join(config.breadcrumb);

    // Replace hero icon (only first occurrence)
    content = content.replace(
        '<i class="fas fa-map"></i>',
        `<i class="fas ${config.icon}"></i>`
    );

    // Replace hero title and subtitle
    content = content.replace(
        '<h1>ASCE 7-16 Wind Speed Maps</h1>',
        `<h1>${config.heroTitle}</h1>`
    );
    content = content.replace(
        '<p class="hero-subtitle">Comprehensive guide to reading, interpreting, and applying ASCE 7-16 wind speed maps for building code compliance</p>',
        `<p class="hero-subtitle">${config.heroSubtitle}</p>`
    );

    // Replace color variables
    content = content.replace(/--map-light: #93c5fd;/g, `--map-light: ${config.gradientLight};`);
    content = content.replace(/--map-dark: #60a5fa;/g, `--map-dark: ${config.gradientDark};`);
    content = content.replace(/--map-deep: #3b82f6;/g, `--map-deep: ${config.gradientDeep};`);

    // Write the file
    fs.writeFileSync(filename, content, 'utf8');
    console.log(`✓ Created: ${filename}`);
}

console.log('\n✅ All 4 wind speed pages created successfully!');
console.log('📝 Pages have proper titles, colors, and structure from ASCE 7-16 template');
