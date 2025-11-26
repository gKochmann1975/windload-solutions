const fs = require('fs');
const path = require('path');

const baseUrl = 'https://windload.solutions/';

// Get all HTML files
const files = fs.readdirSync('.').filter(f =>
    f.endsWith('.html') &&
    !f.includes('template') &&
    !f.includes('animation') &&
    !f.includes('OLD') &&
    !f.includes('NEW') &&
    f !== 'about.html' &&
    f !== 'contact.html'
);

let updatedCount = 0;
let errors = [];

files.forEach(filename => {
    try {
        let content = fs.readFileSync(filename, 'utf8');

        // Check if canonical already exists
        if (content.includes('<link rel="canonical"')) {
            console.log(`⚠ Skipped (already has canonical): ${filename}`);
            return;
        }

        // Construct canonical URL
        const canonicalUrl = baseUrl + filename;
        const canonicalTag = `    <link rel="canonical" href="${canonicalUrl}">`;

        // Find the best place to insert (after meta description or before closing </head>)
        let inserted = false;

        // Try to insert after meta description
        const metaDescRegex = /(<meta name="description"[^>]*>)/;
        if (metaDescRegex.test(content)) {
            content = content.replace(metaDescRegex, `$1\n${canonicalTag}`);
            inserted = true;
        }
        // Try to insert after title
        else if (content.includes('</title>')) {
            content = content.replace('</title>', `</title>\n${canonicalTag}`);
            inserted = true;
        }
        // Last resort: before </head>
        else if (content.includes('</head>')) {
            content = content.replace('</head>', `${canonicalTag}\n</head>`);
            inserted = true;
        }

        if (inserted) {
            fs.writeFileSync(filename, content, 'utf8');
            console.log(`✓ Added canonical: ${filename}`);
            updatedCount++;
        } else {
            errors.push(`Could not find insertion point in: ${filename}`);
        }
    } catch (error) {
        errors.push(`Error processing ${filename}: ${error.message}`);
    }
});

console.log('\n=== Canonical URL Addition Summary ===');
console.log(`Successfully updated: ${updatedCount} files`);
if (errors.length > 0) {
    console.log(`\nErrors: ${errors.length}`);
    errors.forEach(err => console.log(`  - ${err}`));
}
