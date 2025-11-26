const fs = require('fs');

console.log('Adding glassmorphism toggle buttons to all terrain pages...\n');

const files = [
  { file: 'topographic-flat-terrain.html', active: 2 },
  { file: 'topographic-escarpment.html', active: 3 },
  { file: 'topographic-2d-ridge.html', active: 4 },
  { file: 'topographic-3d-hill.html', active: 5 }
];

// Enhanced glassmorphism CSS for toggle buttons
const glassmorphismCSS = `
        /* Topographic Navigation Toggles with Glassmorphism */
        .topo-nav {
            position: sticky;
            top: 90px;
            z-index: 100;
            background: rgba(255, 255, 255, 0.95);
            backdrop-filter: blur(20px);
            border-bottom: 1px solid rgba(0, 24, 255, 0.1);
            padding: 1.5rem 0;
            margin-bottom: 3rem;
        }

        .topo-nav-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
            gap: 1rem;
            max-width: 1000px;
            margin: 0 auto;
        }

        .topo-nav-btn {
            display: flex;
            flex-direction: column;
            align-items: center;
            gap: 0.75rem;
            padding: 1.25rem 1rem;
            background: rgba(255, 255, 255, 0.7);
            backdrop-filter: blur(10px);
            border-radius: 20px;
            text-decoration: none;
            color: #1f2937;
            font-weight: 600;
            font-size: 0.95rem;
            box-shadow: 0 4px 15px rgba(0,0,0,0.08);
            transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
            border: 2px solid rgba(255, 255, 255, 0.5);
            position: relative;
            overflow: hidden;
        }

        .topo-nav-btn::before {
            content: '';
            position: absolute;
            top: 0;
            left: -100%;
            width: 100%;
            height: 100%;
            background: linear-gradient(90deg, transparent, rgba(255,255,255,0.8), transparent);
            transition: left 0.5s ease;
        }

        .topo-nav-btn:hover::before {
            left: 100%;
        }

        .topo-nav-btn:hover {
            transform: translateY(-8px) scale(1.02);
            box-shadow: 0 12px 35px rgba(0,0,0,0.2);
            background: rgba(255, 255, 255, 0.9);
            backdrop-filter: blur(20px);
            border-color: rgba(255, 255, 255, 0.8);
        }

        .topo-nav-btn.active {
            background: rgba(255, 255, 255, 0.95);
            border-color: currentColor;
            box-shadow: 0 10px 40px rgba(0,24,255,0.25);
            backdrop-filter: blur(25px);
        }

        .topo-icon {
            width: 50px;
            height: 50px;
            border-radius: 12px;
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 1.8rem;
        }

        /* Color-coded icons for each terrain type */
        .topo-nav-btn:nth-child(1) { color: #6b7280; }
        .topo-nav-btn:nth-child(1) .topo-icon { background: linear-gradient(135deg, #6b7280, #4b5563); }

        .topo-nav-btn:nth-child(2) { color: #06b6d4; }
        .topo-nav-btn:nth-child(2) .topo-icon { background: linear-gradient(135deg, #06b6d4, #0891b2); }

        .topo-nav-btn:nth-child(3) { color: #f97316; }
        .topo-nav-btn:nth-child(3) .topo-icon { background: linear-gradient(135deg, #f97316, #ea580c); }

        .topo-nav-btn:nth-child(4) { color: #a855f7; }
        .topo-nav-btn:nth-child(4) .topo-icon { background: linear-gradient(135deg, #a855f7, #9333ea); }

        .topo-nav-btn:nth-child(5) { color: #10b981; }
        .topo-nav-btn:nth-child(5) .topo-icon { background: linear-gradient(135deg, #10b981, #059669); }

        @media (max-width: 768px) {
            .topo-nav-grid {
                grid-template-columns: repeat(2, 1fr);
            }
        }
`;

// HTML for the navigation section
const getNavHTML = (activeIndex) => `    <!-- Topographic Navigation Toggles -->
    <div class="topo-nav">
        <div class="container">
            <div class="topo-nav-grid">
                <a href="topographic-effects-wind-loads.html" class="topo-nav-btn ${activeIndex === 1 ? 'active' : ''}">
                    <div class="topo-icon">📋</div>
                    <span>Overview</span>
                </a>
                <a href="topographic-flat-terrain.html" class="topo-nav-btn ${activeIndex === 2 ? 'active' : ''}">
                    <div class="topo-icon">🏜️</div>
                    <span>Flat Terrain</span>
                </a>
                <a href="topographic-escarpment.html" class="topo-nav-btn ${activeIndex === 3 ? 'active' : ''}">
                    <div class="topo-icon">⛰️</div>
                    <span>Escarpment</span>
                </a>
                <a href="topographic-2d-ridge.html" class="topo-nav-btn ${activeIndex === 4 ? 'active' : ''}">
                    <div class="topo-icon">🏔️</div>
                    <span>2D Ridge</span>
                </a>
                <a href="topographic-3d-hill.html" class="topo-nav-btn ${activeIndex === 5 ? 'active' : ''}">
                    <div class="topo-icon">🗻</div>
                    <span>3D Hill</span>
                </a>
            </div>
        </div>
    </div>
`;

let totalUpdated = 0;

files.forEach(({ file, active }) => {
  if (!fs.existsSync(file)) {
    console.log(`⚠️  File not found: ${file}`);
    return;
  }

  let content = fs.readFileSync(file, 'utf8');

  // Remove old terrain-toggle CSS and HTML if it exists
  content = content.replace(/\/\* Terrain Type Toggle Navigation \*\/[\s\S]*?@media \(max-width: 768px\) \{[\s\S]*?\.terrain-toggle-btn \{[\s\S]*?\}\s*\}/g, '');
  content = content.replace(/<!-- Terrain Type Toggle Buttons -->[\s\S]*?<\/div>\s*<div class="animation-container">/g, '<div class="animation-container">');

  // Find the closing </style> tag and add glassmorphism CSS before it
  if (!content.includes('.topo-nav {')) {
    content = content.replace('</style>', glassmorphismCSS + '\n    </style>');
  }

  // Find where to insert the navigation (after hero section, before animation section)
  const heroEndPattern = /<\/section>\s*<!-- Interactive Animation Section -->/;
  if (heroEndPattern.test(content)) {
    content = content.replace(
      heroEndPattern,
      `</section>\n\n${getNavHTML(active)}\n    <!-- Interactive Animation Section -->`
    );
  }

  fs.writeFileSync(file, content, 'utf8');
  console.log(`✅ ${file}: Added glassmorphism navigation toggles`);
  totalUpdated++;
});

console.log(`\n🎉 Successfully updated ${totalUpdated} terrain pages with glassmorphism toggles!`);
console.log('\n✨ Features added:');
console.log('- Glassmorphism backdrop-filter blur effects');
console.log('- Smooth cubic-bezier transitions');
console.log('- Shimmer animation on hover');
console.log('- Enhanced lift and scale effects');
console.log('- Color-coded gradient icons for each terrain type');
console.log('- Responsive grid layout');
