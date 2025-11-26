const fs = require('fs');

console.log('Fixing color contrast issues across all topographic pages...\n');

const files = [
  'topographic-flat-terrain.html',
  'topographic-escarpment.html',
  'topographic-2d-ridge.html',
  'topographic-3d-hill.html'
];

const fixes = {
  // Fix flat terrain info box - change colored heading to dark text on light background
  'topographic-flat-terrain.html': [
    {
      find: '<div style="background: #f8fafc; padding: 2rem; border-radius: 12px; border-left: 4px solid #06b6d4; margin: 2rem 0;">\n                <h4 style="color: #06b6d4; margin-top: 0;">',
      replace: '<div style="background: #f8fafc; padding: 2rem; border-radius: 12px; border-left: 4px solid #06b6d4; margin: 2rem 0;">\n                <h4 style="color: #1f2937; margin-top: 0;"><strong style="color: #06b6d4;">✓</strong> '
    }
  ],
  // Fix escarpment info box
  'topographic-escarpment.html': [
    {
      find: '<div style="background: #fff7ed; padding: 2rem; border-radius: 12px; border-left: 4px solid #f97316; margin: 2rem 0;">\n                <h4 style="color: #f97316; margin-top: 0;">',
      replace: '<div style="background: #fff7ed; padding: 2rem; border-radius: 12px; border-left: 4px solid #f97316; margin: 2rem 0;">\n                <h4 style="color: #1f2937; margin-top: 0;"><strong style="color: #f97316;">✓</strong> '
    }
  ],
  // Fix 2D ridge info box
  'topographic-2d-ridge.html': [
    {
      find: '<div style="background: #faf5ff; padding: 2rem; border-radius: 12px; border-left: 4px solid #a855f7; margin: 2rem 0;">\n                <h4 style="color: #a855f7; margin-top: 0;">',
      replace: '<div style="background: #faf5ff; padding: 2rem; border-radius: 12px; border-left: 4px solid #a855f7; margin: 2rem 0;">\n                <h4 style="color: #1f2937; margin-top: 0;"><strong style="color: #a855f7;">✓</strong> '
    }
  ],
  // Fix 3D hill info box
  'topographic-3d-hill.html': [
    {
      find: '<div style="background: #f0fdf4; padding: 2rem; border-radius: 12px; border-left: 4px solid #10b981; margin: 2rem 0;">\n                <h4 style="color: #10b981; margin-top: 0;">',
      replace: '<div style="background: #f0fdf4; padding: 2rem; border-radius: 12px; border-left: 4px solid #10b981; margin: 2rem 0;">\n                <h4 style="color: #1f2937; margin-top: 0;"><strong style="color: #10b981;">✓</strong> '
    }
  ]
};

let totalFixed = 0;

files.forEach(file => {
  if (!fixes[file]) {
    console.log(`⚠️  No fixes defined for ${file}`);
    return;
  }

  let content = fs.readFileSync(file, 'utf8');
  let fileFixed = 0;

  fixes[file].forEach(fix => {
    if (content.includes(fix.find)) {
      content = content.replace(fix.find, fix.replace);
      fileFixed++;
      totalFixed++;
    }
  });

  fs.writeFileSync(file, content, 'utf8');
  console.log(`✅ ${file}: Fixed ${fileFixed} contrast issue(s)`);
});

console.log(`\n🎉 Total contrast fixes: ${totalFixed}`);
console.log('\n✅ All info boxes now have dark text on light backgrounds!');
