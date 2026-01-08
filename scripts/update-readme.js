#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

// Read package.json
const packagePath = path.join(__dirname, '..', 'package.json');
const readmePath = path.join(__dirname, '..', 'README.md');
const packageJson = JSON.parse(fs.readFileSync(packagePath, 'utf8'));

// Get current versions
const nextVersion = packageJson.dependencies.next;
const reactVersion = packageJson.dependencies.react;
const reactDomVersion = packageJson.dependencies['react-dom'];
const gsapVersion = packageJson.dependencies.gsap;
const framerMotionVersion = packageJson.dependencies['framer-motion'];
const tailwindVersion = packageJson.devDependencies.tailwindcss;
const typescriptVersion = packageJson.devDependencies.typescript;

// Read current README
let readme = fs.readFileSync(readmePath, 'utf8');

// Update versions in README
readme = readme.replace(
  /- \*\*Framework\*\*: Next\.js [\d.]+/,
  `- **Framework**: Next.js ${nextVersion.replace('^', '')}`
);

readme = readme.replace(
  /- \*\*UI Library\*\*: React [\d.]+/,
  `- **UI Library**: React ${reactVersion.replace('^', '')}`
);

readme = readme.replace(
  /- \*\*Styling\*\*: Tailwind CSS [\d.]+/,
  `- **Styling**: Tailwind CSS ${tailwindVersion.replace('^', '')}`
);

readme = readme.replace(
  /- GSAP [\d.]+ \(GreenSock Animation Platform\)/,
  `- GSAP ${gsapVersion.replace('^', '')} (GreenSock Animation Platform)`
);

readme = readme.replace(
  /- Framer Motion [\d.]+/,
  `- Framer Motion ${framerMotionVersion.replace('^', '')}`
);

readme = readme.replace(
  /- \*\*Type Safety\*\*: TypeScript [\d.]+/,
  `- **Type Safety**: TypeScript ${typescriptVersion.replace('^', '')}`
);

// Add/Update last updated timestamp
const now = new Date();
const dateString = now.toISOString().split('T')[0];
const timeString = now.toTimeString().split(' ')[0];

// Check if there's already a "Last Updated" section
if (readme.includes('## 📅 Last Updated')) {
  readme = readme.replace(
    /## 📅 Last Updated[\s\S]*?(?=##|$)/,
    `## 📅 Last Updated\n\n**${dateString}** at ${timeString}\n\n`
  );
} else {
  // Add it before the License section
  if (readme.includes('## 📄 License')) {
    readme = readme.replace(
      '## 📄 License',
      `## 📅 Last Updated\n\n**${dateString}** at ${timeString}\n\n## 📄 License`
    );
  } else {
    // Add at the end
    readme += `\n\n## 📅 Last Updated\n\n**${dateString}** at ${timeString}\n`;
  }
}

// Write updated README
fs.writeFileSync(readmePath, readme, 'utf8');

console.log('✅ README.md updated successfully!');
console.log(`📦 Next.js: ${nextVersion}`);
console.log(`⚛️  React: ${reactVersion}`);
console.log(`🎨 Tailwind: ${tailwindVersion}`);
console.log(`📅 Updated: ${dateString} ${timeString}`);

