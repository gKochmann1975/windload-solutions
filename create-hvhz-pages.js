const fs = require('fs');

// Read the template
const template = fs.readFileSync('asce-7-16-wind-speed-maps.html', 'utf8');

// HVHZ/Florida page configurations
const pages = {
    'hvhz-high-velocity-hurricane-zone-guide.html': {
        title: 'HVHZ Guide - High Velocity Hurricane Zone Requirements | Florida Building Code',
        description: 'Complete guide to High Velocity Hurricane Zone (HVHZ) requirements in Florida. Learn building code provisions, wind speeds, product approvals, and design criteria for HVHZ areas.',
        heroTitle: 'High Velocity Hurricane Zone (HVHZ)',
        heroSubtitle: 'Understanding HVHZ requirements and enhanced building standards',
        breadcrumb: 'HVHZ Guide',
        icon: 'fa-hurricane',
        gradientLight: '#fca5a5',
        gradientDark: '#f87171',
        gradientDeep: '#ef4444',
    },
    'hvhz-florida-requirements.html': {
        title: 'Florida HVHZ Requirements - High Velocity Hurricane Zone Building Code',
        description: 'Comprehensive Florida HVHZ building code requirements. Learn Miami-Dade, Broward, and coastal county regulations, wind load criteria, and product approval processes.',
        heroTitle: 'Florida HVHZ Requirements',
        heroSubtitle: 'State-wide High Velocity Hurricane Zone building code standards',
        breadcrumb: 'Florida HVHZ',
        icon: 'fa-flag-usa',
        gradientLight: '#fdba74',
        gradientDark: '#fb923c',
        gradientDeep: '#f59e0b',
    },
    'hvhz-product-approvals.html': {
        title: 'HVHZ Product Approvals - NOA, TAS, and Miami-Dade Certification Process',
        description: 'Complete guide to HVHZ product approval process including NOA (Notice of Acceptance), TAS testing protocols, and Miami-Dade product control certification requirements.',
        heroTitle: 'HVHZ Product Approvals',
        heroSubtitle: 'NOA, TAS testing, and product certification for High Velocity Hurricane Zones',
        breadcrumb: 'Product Approvals',
        icon: 'fa-certificate',
        gradientLight: '#c4b5fd',
        gradientDark: '#a78bfa',
        gradientDeep: '#8b5cf6',
    },
    'hvhz-vs-standard-wind-zones.html': {
        title: 'HVHZ vs Standard Wind Zones - Comparison of Requirements | Florida Building Code',
        description: 'Compare HVHZ and standard wind zone requirements. Learn key differences in wind speeds, product approvals, testing protocols, and design criteria.',
        heroTitle: 'HVHZ vs Standard Wind Zones',
        heroSubtitle: 'Comparing High Velocity Hurricane Zone and standard wind zone requirements',
        breadcrumb: 'HVHZ Comparison',
        icon: 'fa-code-compare',
        gradientLight: '#93c5fd',
        gradientDark: '#60a5fa',
        gradientDeep: '#3b82f6',
    },
    'miami-dade-hvhz-requirements.html': {
        title: 'Miami-Dade HVHZ Requirements - Product Control & Building Code | Florida',
        description: 'Complete Miami-Dade County HVHZ requirements including Product Control Division, NOA process, wind load criteria, and enhanced building code provisions.',
        heroTitle: 'Miami-Dade HVHZ Requirements',
        heroSubtitle: 'Product Control and enhanced building standards for Miami-Dade County',
        breadcrumb: 'Miami-Dade HVHZ',
        icon: 'fa-building-shield',
        gradientLight: '#5eead4',
        gradientDark: '#2dd4bf',
        gradientDeep: '#14b8a6',
    },
    'broward-county-hvhz-requirements.html': {
        title: 'Broward County HVHZ Requirements - Building Code & Wind Load Standards | Florida',
        description: 'Complete Broward County HVHZ building code requirements. Learn wind load criteria, product approval process, and enhanced construction standards.',
        heroTitle: 'Broward County HVHZ Requirements',
        heroSubtitle: 'Enhanced building standards and HVHZ requirements for Broward County',
        breadcrumb: 'Broward County HVHZ',
        icon: 'fa-shield-halved',
        gradientLight: '#86efac',
        gradientDark: '#4ade80',
        gradientDeep: '#10b981',
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
        '<a href="state-requirements.html">State Requirements</a> › <a href="hvhz-high-velocity-hurricane-zone-guide.html">HVHZ</a> ›'
    );

    // Write the file
    fs.writeFileSync(filename, content, 'utf8');
    console.log(`✓ Created: ${filename}`);
}

console.log('\n✅ All 6 HVHZ/Florida pages created successfully!');
console.log('🌀 High Velocity Hurricane Zone requirements and product approvals');
