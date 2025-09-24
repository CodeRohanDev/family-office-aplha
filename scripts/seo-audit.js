#!/usr/bin/env node

/**
 * SEO Audit Script for Family Office Alpha
 * Run with: node scripts/seo-audit.js
 */

const fs = require('fs');
const path = require('path');

console.log('🔍 Running SEO Audit for Family Office Alpha...\n');

// Check for required SEO files
const requiredFiles = [
  'src/app/sitemap.ts',
  'src/app/robots.ts',
  'src/app/manifest.ts',
  'src/lib/seo.ts',
  'src/components/SchemaMarkup.tsx'
];

console.log('📁 Checking SEO Files:');
requiredFiles.forEach(file => {
  const exists = fs.existsSync(file);
  console.log(`${exists ? '✅' : '❌'} ${file}`);
});

// Check page files for metadata
const pageFiles = [
  'src/app/page.tsx',
  'src/app/services/layout.tsx',
  'src/app/team/layout.tsx',
  'src/app/company-profile/layout.tsx',
  'src/app/activities/layout.tsx',
  'src/app/contact/layout.tsx'
];

console.log('\n📄 Checking Page Metadata:');
pageFiles.forEach(file => {
  if (fs.existsSync(file)) {
    const content = fs.readFileSync(file, 'utf8');
    const hasMetadata = content.includes('generateSEOMetadata') || content.includes('export const metadata');
    console.log(`${hasMetadata ? '✅' : '❌'} ${file} - Metadata`);
  } else {
    console.log(`❌ ${file} - File not found`);
  }
});

// Check Next.js config
console.log('\n⚙️ Checking Configuration:');
const nextConfigExists = fs.existsSync('next.config.ts');
console.log(`${nextConfigExists ? '✅' : '❌'} next.config.ts`);

if (nextConfigExists) {
  const nextConfig = fs.readFileSync('next.config.ts', 'utf8');
  const hasHeaders = nextConfig.includes('async headers()');
  const hasRedirects = nextConfig.includes('async redirects()');
  const hasImageOptimization = nextConfig.includes('images:');
  
  console.log(`${hasHeaders ? '✅' : '❌'} Security Headers`);
  console.log(`${hasRedirects ? '✅' : '❌'} Redirects Configuration`);
  console.log(`${hasImageOptimization ? '✅' : '❌'} Image Optimization`);
}

// Check environment variables
console.log('\n🔧 Environment Variables:');
const envExampleExists = fs.existsSync('.env.example');
console.log(`${envExampleExists ? '✅' : '❌'} .env.example file`);

// Check package.json scripts
console.log('\n📦 Package.json Scripts:');
const packageJson = JSON.parse(fs.readFileSync('package.json', 'utf8'));
const hasAnalyzeScript = packageJson.scripts && packageJson.scripts.analyze;
const hasSitemapScript = packageJson.scripts && packageJson.scripts.sitemap;

console.log(`${hasAnalyzeScript ? '✅' : '❌'} Bundle Analysis Script`);
console.log(`${hasSitemapScript ? '✅' : '❌'} Sitemap Generation Script`);

// SEO Recommendations
console.log('\n💡 SEO Recommendations:');
console.log('1. Set up Google Analytics and Search Console');
console.log('2. Configure environment variables in .env.local');
console.log('3. Test all pages for mobile responsiveness');
console.log('4. Verify structured data with Google\'s Rich Results Test');
console.log('5. Monitor Core Web Vitals with PageSpeed Insights');
console.log('6. Set up regular SEO monitoring and reporting');

console.log('\n✨ SEO Audit Complete!\n');

// Generate a simple report
const report = {
  timestamp: new Date().toISOString(),
  filesChecked: requiredFiles.length + pageFiles.length,
  filesFound: requiredFiles.filter(file => fs.existsSync(file)).length + 
              pageFiles.filter(file => fs.existsSync(file)).length,
  recommendations: [
    'Configure Google Analytics',
    'Set up Search Console',
    'Test mobile responsiveness',
    'Verify structured data',
    'Monitor Core Web Vitals'
  ]
};

fs.writeFileSync('seo-audit-report.json', JSON.stringify(report, null, 2));
console.log('📊 Report saved to seo-audit-report.json');