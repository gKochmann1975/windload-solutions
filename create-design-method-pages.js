const fs = require('fs');

// Read the template (use ASCE 7-16 as base structure)
const template = fs.readFileSync('asce-7-16-wind-speed-maps.html', 'utf8');

// Page configurations for Design Method pages
const pages = {
    'asd-allowable-stress-design-wind-loads.html': {
        title: 'ASD Wind Loads - Allowable Stress Design Method for Wind Pressure | ASCE 7',
        description: 'Complete guide to Allowable Stress Design (ASD) wind loads. Learn the 0.6W load combination, design methodology, and how ASD differs from LRFD for wind load calculations.',
        heroTitle: 'ASD Allowable Stress Design',
        heroSubtitle: 'Understanding the Allowable Stress Design method for wind load calculations',
        breadcrumb: 'ASD Wind Loads',
        icon: 'fa-drafting-compass',
        gradientLight: '#93c5fd',
        gradientDark: '#60a5fa',
        gradientDeep: '#3b82f6',
    },
    'lrfd-load-resistance-factor-design-wind-loads.html': {
        title: 'LRFD Wind Loads - Load Resistance Factor Design Method | ASCE 7',
        description: 'Complete guide to Load and Resistance Factor Design (LRFD) wind loads. Learn the 1.0W load combination, strength-based approach, and modern design methodology.',
        heroTitle: 'LRFD Load & Resistance Factor Design',
        heroSubtitle: 'Modern strength-based approach to wind load design per ASCE 7',
        breadcrumb: 'LRFD Wind Loads',
        icon: 'fa-helmet-safety',
        gradientLight: '#5eead4',
        gradientDark: '#2dd4bf',
        gradientDeep: '#14b8a6',
    },
    'asd-lrfd-conversion-guide.html': {
        title: 'ASD to LRFD Conversion Guide - Wind Load Design Method Comparison | ASCE 7',
        description: 'Convert between ASD and LRFD wind loads. Complete conversion factors, load combinations, and side-by-side methodology comparison for structural design.',
        heroTitle: 'ASD ↔ LRFD Conversion Guide',
        heroSubtitle: 'Converting between Allowable Stress Design and Load & Resistance Factor Design',
        breadcrumb: 'ASD/LRFD Conversion',
        icon: 'fa-arrow-right-arrow-left',
        gradientLight: '#c4b5fd',
        gradientDark: '#a78bfa',
        gradientDeep: '#8b5cf6',
    },
    'nominal-vs-ultimate-wind-loads.html': {
        title: 'Nominal vs Ultimate Wind Loads - Understanding ASCE 7 Wind Pressure Types',
        description: 'Complete guide to nominal and ultimate wind loads in ASCE 7. Learn the differences, when to use each, and how they relate to ASD and LRFD design methods.',
        heroTitle: 'Nominal vs Ultimate Wind Loads',
        heroSubtitle: 'Understanding the two fundamental wind load types in ASCE 7',
        breadcrumb: 'Nominal vs Ultimate',
        icon: 'fa-scale-balanced',
        gradientLight: '#fdba74',
        gradientDark: '#fb923c',
        gradientDeep: '#f59e0b',
    },
    'nominal-wind-loads-explained.html': {
        title: 'Nominal Wind Loads Explained - ASD Design Wind Pressures | ASCE 7',
        description: 'Complete guide to nominal wind loads for Allowable Stress Design (ASD). Learn calculation methods, load combinations, and when nominal pressures are required.',
        heroTitle: 'Nominal Wind Loads',
        heroSubtitle: 'Allowable Stress Design wind pressures for component sizing',
        breadcrumb: 'Nominal Wind Loads',
        icon: 'fa-gauge',
        gradientLight: '#86efac',
        gradientDark: '#4ade80',
        gradientDeep: '#10b981',
    },
    'ultimate-wind-loads-explained.html': {
        title: 'Ultimate Wind Loads Explained - LRFD Strength Design Wind Pressures | ASCE 7',
        description: 'Complete guide to ultimate wind loads for Load and Resistance Factor Design (LRFD). Learn strength-based calculations and factored wind pressures.',
        heroTitle: 'Ultimate Wind Loads',
        heroSubtitle: 'Strength-based design wind pressures for LRFD methodology',
        breadcrumb: 'Ultimate Wind Loads',
        icon: 'fa-bolt',
        gradientLight: '#fca5a5',
        gradientDark: '#f87171',
        gradientDeep: '#ef4444',
    },
    'directional-vs-non-directional-wind-loads.html': {
        title: 'Directional vs Non-Directional Wind Loads - Wind Directionality Factor (Kd) | ASCE 7',
        description: 'Complete guide to directional and non-directional wind load procedures in ASCE 7. Learn when to use Kd factor and how it affects design wind pressures.',
        heroTitle: 'Directional vs Non-Directional',
        heroSubtitle: 'Understanding wind directionality and the Kd factor in ASCE 7 calculations',
        breadcrumb: 'Directional Wind Loads',
        icon: 'fa-compass',
        gradientLight: '#fcd34d',
        gradientDark: '#fbbf24',
        gradientDeep: '#f59e0b',
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

    // Replace breadcrumb (all occurrences)
    content = content.split('ASCE 7-16 Wind Speed Maps').join(config.breadcrumb);

    // Replace hero icon (only first occurrence in hero section)
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

    // Update breadcrumb path (ASCE 7 → Design Methods)
    content = content.replace(
        /<a href="asce-7-standards.html">ASCE 7<\/a> ›/,
        '<a href="asce-7-standards.html">ASCE 7</a> › <a href="nominal-vs-ultimate-wind-loads.html">Design Methods</a> ›'
    );

    // Write the file
    fs.writeFileSync(filename, content, 'utf8');
    console.log(`✓ Created: ${filename}`);
}

console.log('\n✅ All 7 Design Method pages created successfully!');
console.log('📐 ASD, LRFD, Nominal/Ultimate, Directional procedures');
