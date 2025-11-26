const fs = require('fs');

// Pages to fix with their titles and descriptions
const pages = {
'resources.html': {
    title: 'Free Wind Load Resources & Tools | Wind Load Solutions',
    desc: 'Free wind load calculation resources, guides, templates, and tools for engineers and designers.'
},
'asce-7-standards.html': {
    title: 'ASCE 7 Wind Load Standards Guide - 7-22, 7-16, 7-10',
    desc: 'Comprehensive guide to ASCE 7 wind load standards including ASCE 7-22, ASCE 7-16, and ASCE 7-10.'
}
};

function cleanFix(filename, pageInfo) {
    console.log(`\n🔧 ${filename}`);

    // Read state-requirements.html as template
    let template = fs.readFileSync('state-requirements.html', 'utf8');

    // Replace title
    template = template.replace(
        /<title>.*?<\/title>/,
        `<title>${pageInfo.title}</title>`
    );

    // Replace description
    template = template.replace(
        /<meta name="description" content=".*?">/,
        `<meta name="description" content="${pageInfo.desc}">`
    );

    // Write to file
    fs.writeFileSync(filename, template, 'utf8');
    console.log(`   ✅ Fixed`);
}

console.log('🧹 CLEAN FIX - Simple copy from state-requirements.html\n');
console.log('='.repeat(80));

for (const [filename, pageInfo] of Object.entries(pages)) {
    cleanFix(filename, pageInfo);
}

console.log('\n' + '='.repeat(80));
console.log('\n✅ Done - pages should now work perfectly\n');
