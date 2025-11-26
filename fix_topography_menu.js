const fs = require('fs');
const path = require('path');

console.log('Fixing topography menu link across all HTML files\n');

// Get all HTML files in current directory (excluding backups)
const files = fs.readdirSync('.')
    .filter(f => f.endsWith('.html') && !f.startsWith('.'));

console.log(`Found ${files.length} HTML files to process\n`);

// The incorrect pattern to find
const incorrectPattern = /<a href="topographic-effects-wind-loads\.html">/;

// The correct pattern (just a button-like element, not a link)
const correctPattern = '<a href="#" onclick="return false;">';

let filesModified = 0;
let filesSkipped = 0;

files.forEach(file => {
    try {
        let content = fs.readFileSync(file, 'utf8');

        // Check if file contains the topography menu
        if (content.includes('Topography Overview')) {
            // Check if it has the incorrect link pattern
            if (incorrectPattern.test(content)) {
                // Replace the incorrect link with a non-functional one
                content = content.replace(
                    /<a href="topographic-effects-wind-loads\.html">/g,
                    '<a href="#" onclick="return false;">'
                );

                fs.writeFileSync(file, content, 'utf8');
                console.log(`✅ ${file}: Fixed topography menu link`);
                filesModified++;
            } else if (content.includes('<a href="#" onclick="return false;">')) {
                console.log(`⏭️  ${file}: Already correct`);
                filesSkipped++;
            } else {
                console.log(`⚠️  ${file}: Has topography menu but unrecognized pattern`);
                filesSkipped++;
            }
        }
    } catch (err) {
        console.log(`❌ ${file}: Error - ${err.message}`);
    }
});

console.log(`\n📊 Summary:`);
console.log(`   Modified: ${filesModified}`);
console.log(`   Skipped: ${filesSkipped}`);
console.log(`   Total: ${files.length}`);
console.log('\n✅ Topography menu links fixed!');
