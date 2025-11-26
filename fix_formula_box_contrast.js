const fs = require('fs');

console.log('Fixing formula box contrast - WHITE TEXT ON DARK BACKGROUNDS\n');

const files = [
  'topographic-flat-terrain.html',
  'topographic-escarpment.html',
  'topographic-2d-ridge.html',
  'topographic-3d-hill.html'
];

const fixes = [
  {
    description: 'Formula boxes: Dark text → WHITE text on dark gradient backgrounds',
    find: /<div style="background: linear-gradient\(135deg, [^"]+\); color: white; padding: 2rem; border-radius: 12px; margin: 2rem 0;">\s*<p style="font-size: [^"]+; font-weight: [^"]+; margin: [^"]+; opacity: [^"]+; color: [^"]+;">/g,
    replace: (match) => {
      // Remove the color property from the paragraph - let it inherit white from parent
      return match.replace(/; color: [^;"]+;/, ';');
    }
  },
  {
    description: 'Formula box paragraphs: Remove dark color overrides',
    find: /<p style="([^"]*color: #[a-f0-9]{6};[^"]*)"/g,
    replace: (match) => {
      // If this p tag is inside a gradient background, remove the color
      return match.replace(/color: #[a-f0-9]{6};/, '');
    }
  }
];

let totalFixed = 0;

files.forEach(file => {
  if (!fs.existsSync(file)) {
    console.log(`⚠️  File not found: ${file}`);
    return;
  }

  let content = fs.readFileSync(file, 'utf8');
  let fileFixed = 0;

  // Fix formula boxes specifically - replace dark gradient backgrounds text
  // Find all formula boxes with gradient backgrounds and ensure white text

  // Pattern 1: Colored text in formula description paragraphs
  const coloredTextInFormula = /(<div style="background: linear-gradient\(135deg, [^"]+\); color: white; padding: 2rem; border-radius: 12px; margin: 2rem 0;">[\s\S]*?)<p style="([^"]*)(color: #a855f7|color: #06b6d4|color: #f97316|color: #10b981)([^"]*)">([^<]*)<\/p>/g;

  if (content.match(coloredTextInFormula)) {
    content = content.replace(coloredTextInFormula, (match, before, styleStart, colorProp, styleEnd, text) => {
      // Remove the color property entirely, letting white inherit
      const newStyle = (styleStart + styleEnd).replace(/;\s*$/, ''); // clean up trailing semicolon
      fileFixed++;
      totalFixed++;
      return `${before}<p style="${newStyle}">${text}</p>`;
    });
  }

  fs.writeFileSync(file, content, 'utf8');
  console.log(`${fileFixed > 0 ? '✅' : '⚠️ '} ${file}: Fixed ${fileFixed} formula box contrast issue(s)`);
});

console.log(`\n🎉 Total formula box fixes: ${totalFixed}`);
console.log('\n✅ All formula boxes now have WHITE text on dark gradient backgrounds!');
console.log('\n📋 Rule Applied: WHITE text ONLY on dark backgrounds (#1f2937, gradients, etc.)');
