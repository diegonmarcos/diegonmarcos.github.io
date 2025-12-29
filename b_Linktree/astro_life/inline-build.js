#!/usr/bin/env node
/**
 * Post-build script to create dist with separate CSS/JS files
 * Makes the build work with file:// protocol
 */

import { readFileSync, writeFileSync, mkdirSync, copyFileSync, rmSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const outputDir = join(__dirname, '.output', 'public');
const distDir = join(__dirname, 'dist');

// Clean and create dist directory
rmSync(distDir, { recursive: true, force: true });
mkdirSync(distDir, { recursive: true });

// Read the index.html
let html = readFileSync(join(outputDir, 'index.html'), 'utf-8');

// Find and extract CSS
const cssMatch = html.match(/<link[^>]*rel="stylesheet"[^>]*href="([^"]+)"[^>]*>/);
if (cssMatch) {
  const cssPath = cssMatch[1].replace(/^\.?\//, '');
  const cssContent = readFileSync(join(outputDir, cssPath), 'utf-8');
  writeFileSync(join(distDir, 'style.css'), cssContent);
  html = html.replace(cssMatch[0], '<link rel="stylesheet" href="style.css">');
  console.log('Created: style.css');
}

// Find and extract JS
const jsMatch = html.match(/<script[^>]*src="([^"]+)"[^>]*><\/script>/);
if (jsMatch) {
  const jsPath = jsMatch[1].replace(/^\.?\//, '');
  let jsContent = readFileSync(join(outputDir, jsPath), 'utf-8');

  // Replace import.meta.url with window.location.href for file:// compatibility
  jsContent = jsContent.replace(/import\.meta\.url/g, 'window.location.href');

  writeFileSync(join(distDir, 'app.js'), jsContent);
  // Remove the script tag - we'll add it at the end
  html = html.replace(jsMatch[0], '');
  console.log('Created: app.js');
}

// Remove modulepreload links
html = html.replace(/<link[^>]*rel="modulepreload"[^>]*>/g, '');

// Remove crossorigin attributes
html = html.replace(/ crossorigin/g, '');

// Fix baseURL
html = html.replace(/baseURL:"\/"/g, 'baseURL:"./"');

// Add app.js at the end of body (after __NUXT__ config is set)
html = html.replace('</body>', '<script defer src="app.js"></script></body>');

// Write index.html
writeFileSync(join(distDir, 'index.html'), html);
console.log('Created: index.html');

// Copy favicon
try {
  copyFileSync(join(outputDir, 'favicon.svg'), join(distDir, 'favicon.svg'));
  console.log('Copied: favicon.svg');
} catch (e) {}

console.log('\nBuild complete! Files in dist/');
