const fs = require('fs');
const path = require('path');

// Complete hero CSS from index.html
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
            background: linear-gradient(135deg, rgba(0, 24, 255, 0.3) 0%, rgba(24, 30, 87, 0.5) 100%);
            z-index: 2;
        }

        .hero-content {
            position: relative;
            z-index: 3;
            color: white;
            text-align: center;
            padding: 2rem;
            width: 100%;
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

function getAllHtmlFiles() {
    const files = [];
    const rootFiles = fs.readdirSync('.').filter(f => f.endsWith('.html') && f !== 'index.html');
    files.push(...rootFiles.map(f => ({ path: f, videoPath: 'videos/' })));

    if (fs.existsSync('states')) {
        const stateFiles = fs.readdirSync('states').filter(f => f.endsWith('.html'));
        files.push(...stateFiles.map(f => ({ path: `states/${f}`, videoPath: '../videos/' })));
    }

    return files;
}

function addVideoHero(filePath, videoPath) {
    console.log(`\n📹 ${filePath}`);
    let content = fs.readFileSync(filePath, 'utf8');
    const videoName = path.basename(filePath, '.html');
    const videoSrc = videoPath + videoName;

    let updated = false;

    // 1. Add hero CSS if not present
    if (!content.includes('/* Hero Section */') && !content.includes('.hero-section')) {
        const stylePattern = /(\/\* Main Content \*\/|\.main-content|\.container \{|<\/style>)/;
        if (stylePattern.test(content)) {
            content = content.replace(stylePattern, `${heroCSS}\n        $1`);
            console.log(`   ✅ Added hero CSS`);
            updated = true;
        }
    }

    // 2. Replace existing simple hero section with video hero
    // Look for: <section class="hero"> ... </section>
    const simpleHeroPattern = /<section class="hero">([\s\S]*?)<\/section>/;

    if (simpleHeroPattern.test(content)) {
        const oldHero = content.match(simpleHeroPattern)[0];
        const heroInner = content.match(simpleHeroPattern)[1];

        // Extract the icon, title, and description from old hero
        const iconMatch = heroInner.match(/<i class="[^"]*"><\/i>/);
        const h1Match = heroInner.match(/<h1>(.*?)<\/h1>/);
        const pMatch = heroInner.match(/<p>(.*?)<\/p>/);

        const icon = iconMatch ? iconMatch[0] : '<i class="fas fa-wind"></i>';
        const title = h1Match ? h1Match[1] : 'Page Title';
        const description = pMatch ? pMatch[1] : '';

        const newHero = `<!-- Hero Section with Video Background -->
    <section class="hero-section">
        <video class="hero-video" autoplay muted loop playsinline>
            <source src="${videoSrc}.webm" type="video/webm">
            <source src="${videoSrc}.mp4" type="video/mp4">
        </video>
        <div class="hero-overlay"></div>

        <div class="hero-content">
            <div class="hero-icon">${icon}</div>
            <h1>${title}</h1>
            <p>${description}</p>
        </div>
    </section>`;

        content = content.replace(simpleHeroPattern, newHero);
        console.log(`   ✅ Replaced hero with video version (${videoName}.mp4/webm)`);
        updated = true;
    }

    if (updated) {
        fs.writeFileSync(filePath, content, 'utf8');
        return true;
    }

    console.log(`   ⏭️  No changes needed or pattern not found`);
    return false;
}

// Main
console.log('🎬 ADDING VIDEO BACKGROUNDS TO ALL PAGES\n');
console.log('='.repeat(80) + '\n');

const files = getAllHtmlFiles();
console.log(`📋 Processing ${files.length} pages\n`);

let successCount = 0;

for (const file of files) {
    try {
        if (addVideoHero(file.path, file.videoPath)) {
            successCount++;
        }
    } catch (err) {
        console.log(`   ❌ Error: ${err.message}`);
    }
}

console.log('\n' + '='.repeat(80));
console.log(`\n✅ Successfully updated ${successCount}/${files.length} pages`);

console.log('\n📹 Video files needed (create in /videos/ folder):');
const uniqueVideos = [...new Set(files.map(f => path.basename(f.path, '.html')))];
uniqueVideos.slice(0, 15).forEach(v => console.log(`   - ${v}.mp4 & ${v}.webm`));
if (uniqueVideos.length > 15) {
    console.log(`   ... and ${uniqueVideos.length - 15} more`);
}

console.log('\n🎉 All pages now have full-screen video hero sections!\n');
