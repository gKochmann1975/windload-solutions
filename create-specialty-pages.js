const fs = require('fs');

// Read the template
const template = fs.readFileSync('asce-7-16-wind-speed-maps.html', 'utf8');

// Specialty Topics page configurations
const pages = {
    'kd-factor-explained.html': {
        title: 'Kd Factor Explained - Wind Directionality Factor in ASCE 7 | Wind Load Calculations',
        description: 'Complete guide to the wind directionality factor (Kd) in ASCE 7. Learn when to apply Kd = 0.85, directional vs non-directional procedures, and impact on wind load calculations.',
        heroTitle: 'Wind Directionality Factor (Kd)',
        heroSubtitle: 'Understanding the Kd factor and its role in ASCE 7 wind load calculations',
        breadcrumb: 'Kd Factor',
        icon: 'fa-compass',
        gradientLight: '#fcd34d',
        gradientDark: '#fbbf24',
        gradientDeep: '#f59e0b',
    },
    'wind-directionality-factor-guide.html': {
        title: 'Wind Directionality Factor Guide - Complete Kd Factor Application | ASCE 7',
        description: 'Comprehensive guide to wind directionality factor (Kd) application in ASCE 7. Learn directional analysis, Kd = 0.85 reduction, and when directional procedures apply.',
        heroTitle: 'Wind Directionality Guide',
        heroSubtitle: 'Complete application guide for the wind directionality factor in structural design',
        breadcrumb: 'Directionality Guide',
        icon: 'fa-location-crosshairs',
        gradientLight: '#c4b5fd',
        gradientDark: '#a78bfa',
        gradientDeep: '#8b5cf6',
    },
    'solar-wind-loads.html': {
        title: 'Solar Panel Wind Loads - Photovoltaic Array Design per ASCE 7 | Rooftop & Ground Mount',
        description: 'Complete guide to wind loads on solar panels and photovoltaic arrays. Learn ASCE 7 calculation methods, tilt angles, roof vs ground-mount considerations, and edge zone effects.',
        heroTitle: 'Solar Panel Wind Loads',
        heroSubtitle: 'Wind load design for photovoltaic arrays and solar installations',
        breadcrumb: 'Solar Wind Loads',
        icon: 'fa-solar-panel',
        gradientLight: '#fdba74',
        gradientDark: '#fb923c',
        gradientDeep: '#f59e0b',
    },
    'specialty-structures-wind-loads.html': {
        title: 'Specialty Structure Wind Loads - Unique Buildings per ASCE 7 | Non-Standard Design',
        description: 'Complete guide to wind loads on specialty structures including towers, tanks, chimneys, and non-standard buildings. Learn when standard ASCE 7 provisions apply vs wind tunnel testing.',
        heroTitle: 'Specialty Structure Wind Loads',
        heroSubtitle: 'Wind load design for towers, tanks, and non-standard structures',
        breadcrumb: 'Specialty Structures',
        icon: 'fa-tower-broadcast',
        gradientLight: '#93c5fd',
        gradientDark: '#60a5fa',
        gradientDeep: '#3b82f6',
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
        '<a href="asce-7-standards.html">ASCE 7</a> › <a href="articles.html">Advanced Topics</a> ›'
    );

    // Write the file
    fs.writeFileSync(filename, content, 'utf8');
    console.log(`✓ Created: ${filename}`);
}

console.log('\n✅ All 4 Specialty Topics pages created successfully!');
console.log('⚡ Kd factor, Solar panels, Specialty structures');
