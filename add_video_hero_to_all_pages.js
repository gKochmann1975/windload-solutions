const fs = require('fs');
const path = require('path');

// Hero CSS from index.html - COMPLETE
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

        .hero-scale-wrapper {
            max-width: 900px;
            margin: 0 auto;
        }

        @media (max-width: 768px) {
            .hero-section {
                min-height: 80vh;
                padding-top: 100px;
            }
        }
`;

// Get all HTML files
function getAllHtmlFiles() {
    const files = [];

    // Root HTML files (excluding index.html)
    const rootFiles = fs.readdirSync('.').filter(f => f.endsWith('.html') && f !== 'index.html');
    files.push(...rootFiles.map(f => ({ path: f, videoPath: 'videos/' })));

    // State pages
    if (fs.existsSync('states')) {
        const stateFiles = fs.readdirSync('states').filter(f => f.endsWith('.html'));
        files.push(...stateFiles.map(f => ({ path: `states/${f}`, videoPath: '../videos/' })));
    }

    return files;
}

// Get video filename for page
function getVideoFilename(htmlFilename) {
    const baseName = path.basename(htmlFilename, '.html');
    return baseName;
}

// Add video hero to page
function addVideoHeroToPage(filePath, videoPath) {
    console.log(`\n📹 Processing: ${filePath}`);

    let content = fs.readFileSync(filePath, 'utf8');
    const videoName = getVideoFilename(filePath);
    const videoSrcPath = videoPath + videoName;

    // Check if already has hero-section
    if (content.includes('class="hero-section"')) {
        console.log(`   ⏭️  Already has hero-section`);
        return false;
    }

    let updated = false;

    // 1. Add hero CSS if not present
    if (!content.includes('/* Hero Section */')) {
        // Find where to insert CSS (before </style> or before first major section)
        const styleEndPattern = /(\s*)(\/\* (?:Navigation|Main Content|Container|Body|Section)|<\/style>)/;
        if (styleEndPattern.test(content)) {
            content = content.replace(styleEndPattern, `${heroCSS}\n$1$2`);
            console.log(`   ✅ Added hero CSS`);
            updated = true;
        }
    }

    // 2. Find the first section/content after </header> or <body> and wrap it in hero
    // Look for patterns like: <section class="...", <main, <div class="container"
    const afterHeaderPattern = /((?:<\/header>|<nav[^>]*>[\s\S]*?<\/nav>)\s*(?:<!--[^>]*-->\s*)*)((?:<section|<main|<div class="(?:container|content|wrapper|page-content))[^>]*>)/;

    if (afterHeaderPattern.test(content)) {
        const videoHTML = `
    <!-- Hero Section with Video Background -->
    <section class="hero-section">
        <video class="hero-video" autoplay muted loop playsinline>
            <source src="${videoSrcPath}.webm" type="video/webm">
            <source src="${videoSrcPath}.mp4" type="video/mp4">
        </video>
        <div class="hero-overlay"></div>

        <div class="container hero-content">
`;

        // Close the hero section after the first major content block
        content = content.replace(afterHeaderPattern, (match, before, firstSection) => {
            return `${before}${videoHTML}${firstSection}`;
        });

        // Find the end of first section and close hero-section there
        // This is tricky - we need to find a good closing point
        // For now, let's close it after the first </section> or major closing tag
        const firstSectionEnd = content.indexOf('</section>', content.indexOf('hero-content'));
        if (firstSectionEnd > 0) {
            const insertPoint = firstSectionEnd + '</section>'.length;
            content = content.slice(0, insertPoint) + '\n        </div>\n    </section>\n' + content.slice(insertPoint);
        }

        console.log(`   ✅ Added video hero HTML (${videoName}.mp4/webm)`);
        updated = true;
    }

    if (updated) {
        fs.writeFileSync(filePath, content, 'utf8');
        console.log(`   💾 Saved ${filePath}`);
        return true;
    }

    console.log(`   ⚠️  Could not find insertion point`);
    return false;
}

// Main execution
console.log('🎬 ADDING FULL-PAGE VIDEO BACKGROUNDS TO ALL PAGES\n');
console.log('=' .repeat(80) + '\n');

const allFiles = getAllHtmlFiles();
console.log(`📋 Found ${allFiles.length} pages to process\n`);

let successCount = 0;
let skippedCount = 0;
let failedCount = 0;

for (const file of allFiles) {
    try {
        const result = addVideoHeroToPage(file.path, file.videoPath);
        if (result === true) {
            successCount++;
        } else if (result === false && fs.readFileSync(file.path, 'utf8').includes('hero-section')) {
            skippedCount++;
        } else {
            failedCount++;
        }
    } catch (err) {
        console.log(`   ❌ Error: ${err.message}`);
        failedCount++;
    }
}

console.log('\n' + '='.repeat(80));
console.log(`\n📊 SUMMARY:`);
console.log(`   ✅ Successfully added video hero: ${successCount}`);
console.log(`   ⏭️  Already had video hero: ${skippedCount}`);
console.log(`   ❌ Failed: ${failedCount}`);
console.log(`   📋 Total pages: ${allFiles.length}`);

console.log('\n🎬 Video files needed (create these in /videos/ folder):');
const allPages = getAllHtmlFiles();
const uniqueVideos = [...new Set(allPages.map(f => getVideoFilename(f.path)))];
uniqueVideos.slice(0, 10).forEach(v => console.log(`   - ${v}.mp4 / ${v}.webm`));
console.log(`   ... and ${uniqueVideos.length - 10} more`);

console.log('\n');
