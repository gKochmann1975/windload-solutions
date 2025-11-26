const fs = require('fs');
const path = require('path');

// The correct navigation HTML with TOPO submenu
const correctNavHTML = `    <!-- Navigation Overlay -->
    <div class="nav-overlay" id="nav-overlay" onclick="toggleNav()"></div>

    <!-- Mobile Navigation -->
    <nav class="nav-links" id="nav-menu">
        <a href="index.html">Home</a>
        <a href="state-requirements.html">State Requirements</a>
        <a href="asce-7-standards.html">ASCE 7 Standards</a>
        <a href="components-cladding-wind-load-calculation-asce-7-pressure-analysis-building-design.html">Components & Cladding</a>
        <a href="mwfrs-wind-load-calculator-asce-wind-pressure-analysis-building-design.html">MWFRS Guide</a>

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
    </nav>`;

// Get all HTML files
const htmlFiles = fs.readdirSync('.').filter(f => f.endsWith('.html') && f !== 'index.html');

let updatedCount = 0;
let errorCount = 0;

htmlFiles.forEach(file => {
    try {
        let content = fs.readFileSync(file, 'utf8');

        // Find and replace the navigation section
        // Pattern: from "<!-- Navigation Overlay -->" to "</nav>"
        const navPattern = /(<!-- Navigation Overlay -->[\s\S]*?<\/nav>)/;

        if (navPattern.test(content)) {
            content = content.replace(navPattern, correctNavHTML);
            fs.writeFileSync(file, content, 'utf8');
            updatedCount++;
            console.log(`✅ Updated: ${file}`);
        } else {
            console.log(`⚠️  No nav found: ${file}`);
        }
    } catch (error) {
        console.error(`❌ Error processing ${file}:`, error.message);
        errorCount++;
    }
});

console.log(`\n📊 Summary:`);
console.log(`   ✅ Updated: ${updatedCount} files`);
console.log(`   ❌ Errors: ${errorCount} files`);
