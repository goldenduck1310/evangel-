import { access, readFile } from 'node:fs/promises';
import { resolve } from 'node:path';

const files = [
  'dist/index.html',
  'dist/app.js',
  'dist/config.js',
  'dist/sections.js',
  'dist/styles.css',
  'dist/sections.css',
  'dist/favicon.svg',
  'dist/images/eli-logo.jpg'
];

for (const file of files) await access(resolve(file));
const html = await readFile(resolve('dist/index.html'), 'utf8');
if (!html.includes('<main id="main">')) throw new Error('dist/index.html is missing the main root element');
if (!html.includes('images/eli-logo.jpg')) throw new Error('The official ELI logo asset is not referenced');
console.log(`Static production build verified: ${files.length} required files present in dist/`);
