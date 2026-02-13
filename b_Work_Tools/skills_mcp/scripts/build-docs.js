#!/usr/bin/env node

const { marked } = require('marked');
const fs = require('fs');
const path = require('path');

const DOCS_DIR = path.join(__dirname, '..', 'docs');
const DIST_DIR = path.join(__dirname, '..', 'dist', 'docs');

const HTML_TEMPLATE = (title, content, breadcrumb) => `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>${title} — Skills & MCP</title>
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Fira+Code:wght@400;500&display=swap" rel="stylesheet">
  <style>
    *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

    :root {
      --bg-primary: #1a1a2e;
      --bg-secondary: #16213e;
      --bg-tertiary: #0f0f23;
      --bg-card: #1e1e3f;
      --bg-code: #0d0d1a;
      --text-primary: #e4e4e7;
      --text-secondary: #a1a1aa;
      --text-muted: #71717a;
      --border: #2d2d4a;
      --border-light: #3d3d5c;
      --accent-blue: #61affe;
      --accent-green: #49cc90;
      --accent-purple: #a855f7;
      --accent-cyan: #22d3ee;
    }

    body {
      font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
      background: var(--bg-primary);
      color: var(--text-primary);
      line-height: 1.7;
      min-height: 100vh;
    }

    .container {
      max-width: 860px;
      margin: 0 auto;
      padding: 2rem 1.5rem;
    }

    .breadcrumb {
      font-size: 0.875rem;
      color: var(--text-muted);
      margin-bottom: 2rem;
    }
    .breadcrumb a {
      color: var(--accent-blue);
      text-decoration: none;
    }
    .breadcrumb a:hover { text-decoration: underline; }
    .breadcrumb span { margin: 0 0.5rem; }

    h1 {
      font-size: 1.875rem;
      font-weight: 700;
      margin-bottom: 1.5rem;
      color: var(--text-primary);
      border-bottom: 1px solid var(--border);
      padding-bottom: 0.75rem;
    }
    h2 {
      font-size: 1.25rem;
      font-weight: 600;
      margin-top: 2rem;
      margin-bottom: 1rem;
      color: var(--accent-purple);
    }
    h3 {
      font-size: 1.125rem;
      font-weight: 600;
      margin-top: 1.5rem;
      margin-bottom: 0.75rem;
      color: var(--accent-cyan);
    }

    p { margin-bottom: 1rem; color: var(--text-secondary); }
    strong { color: var(--text-primary); }

    a { color: var(--accent-blue); text-decoration: none; }
    a:hover { text-decoration: underline; }

    code {
      font-family: 'Fira Code', monospace;
      font-size: 0.875rem;
      background: var(--bg-code);
      padding: 0.15rem 0.4rem;
      border-radius: 4px;
      color: var(--accent-cyan);
    }
    pre {
      background: var(--bg-code);
      border: 1px solid var(--border);
      border-radius: 6px;
      padding: 1rem;
      overflow-x: auto;
      margin-bottom: 1rem;
    }
    pre code {
      background: none;
      padding: 0;
      color: var(--text-primary);
    }

    table {
      width: 100%;
      border-collapse: collapse;
      margin-bottom: 1.5rem;
      font-size: 0.875rem;
    }
    th {
      background: var(--bg-secondary);
      color: var(--accent-blue);
      font-weight: 600;
      text-align: left;
      padding: 0.75rem 1rem;
      border: 1px solid var(--border);
    }
    td {
      padding: 0.6rem 1rem;
      border: 1px solid var(--border);
      color: var(--text-secondary);
    }
    tr:nth-child(even) td { background: var(--bg-tertiary); }

    ul, ol {
      margin-bottom: 1rem;
      padding-left: 1.5rem;
      color: var(--text-secondary);
    }
    li { margin-bottom: 0.35rem; }

    .back-link {
      display: inline-block;
      margin-top: 2rem;
      padding: 0.5rem 1rem;
      background: var(--bg-card);
      border: 1px solid var(--border);
      border-radius: 6px;
      color: var(--accent-blue);
      font-size: 0.875rem;
      text-decoration: none;
    }
    .back-link:hover {
      background: var(--bg-secondary);
      text-decoration: none;
    }

    @media (max-width: 640px) {
      .container { padding: 1rem; }
      h1 { font-size: 1.5rem; }
      table { font-size: 0.75rem; }
      th, td { padding: 0.4rem 0.5rem; }
    }
  </style>
</head>
<body>
  <div class="container">
    <nav class="breadcrumb">${breadcrumb}</nav>
    ${content}
    <a class="back-link" href="index.html">Back to Docs Index</a>
  </div>
</body>
</html>`;

const INDEX_TEMPLATE = (sections) => `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Docs Index — Skills & MCP</title>
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Fira+Code:wght@400;500&display=swap" rel="stylesheet">
  <style>
    *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
    :root {
      --bg-primary: #1a1a2e;
      --bg-secondary: #16213e;
      --bg-card: #1e1e3f;
      --text-primary: #e4e4e7;
      --text-secondary: #a1a1aa;
      --text-muted: #71717a;
      --border: #2d2d4a;
      --accent-blue: #61affe;
      --accent-purple: #a855f7;
      --accent-cyan: #22d3ee;
      --accent-green: #49cc90;
    }
    body {
      font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
      background: var(--bg-primary);
      color: var(--text-primary);
      line-height: 1.7;
      min-height: 100vh;
    }
    .container { max-width: 860px; margin: 0 auto; padding: 2rem 1.5rem; }
    h1 {
      font-size: 1.875rem;
      font-weight: 700;
      margin-bottom: 0.5rem;
      border-bottom: 1px solid var(--border);
      padding-bottom: 0.75rem;
    }
    .subtitle { color: var(--text-muted); margin-bottom: 2rem; }
    h2 {
      font-size: 1.25rem;
      font-weight: 600;
      margin-top: 2rem;
      margin-bottom: 1rem;
      color: var(--accent-purple);
    }
    .card-grid {
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(240px, 1fr));
      gap: 1rem;
    }
    .card {
      display: block;
      background: var(--bg-card);
      border: 1px solid var(--border);
      border-radius: 8px;
      padding: 1rem 1.25rem;
      text-decoration: none;
      transition: border-color 0.2s ease, background 0.2s ease;
    }
    .card:hover {
      border-color: var(--accent-blue);
      background: var(--bg-secondary);
      text-decoration: none;
    }
    .card__title { color: var(--accent-blue); font-weight: 600; font-size: 0.95rem; }
    .card__desc { color: var(--text-muted); font-size: 0.8rem; margin-top: 0.35rem; }
    .card--mcp .card__title { color: var(--accent-cyan); }
    .card--api .card__title { color: var(--accent-green); }
    .back-link {
      display: inline-block;
      margin-top: 2rem;
      padding: 0.5rem 1rem;
      background: var(--bg-card);
      border: 1px solid var(--border);
      border-radius: 6px;
      color: var(--accent-blue);
      font-size: 0.875rem;
      text-decoration: none;
    }
    .back-link:hover { background: var(--bg-secondary); text-decoration: none; }
    @media (max-width: 640px) {
      .container { padding: 1rem; }
      .card-grid { grid-template-columns: 1fr; }
    }
  </style>
</head>
<body>
  <div class="container">
    <h1>Skills & MCP Documentation</h1>
    <p class="subtitle">Single source of truth for all skills, MCP servers, and APIs.</p>
    ${sections}
    <a class="back-link" href="../index.html">Back to Interactive UI</a>
  </div>
</body>
</html>`;

function walkDir(dir, base) {
  const entries = [];
  for (const item of fs.readdirSync(dir, { withFileTypes: true })) {
    const fullPath = path.join(dir, item.name);
    if (item.isDirectory()) {
      entries.push(...walkDir(fullPath, base));
    } else if (item.name.endsWith('.md')) {
      entries.push(path.relative(base, fullPath));
    }
  }
  return entries;
}

function titleFromFilename(filename) {
  return path.basename(filename, '.md')
    .replace(/-/g, ' ')
    .replace(/\b\w/g, c => c.toUpperCase());
}

function buildBreadcrumb(relPath) {
  const parts = relPath.replace(/\.md$/, '').split(path.sep);
  const crumbs = ['<a href="index.html">Docs</a>'];
  for (let i = 0; i < parts.length - 1; i++) {
    crumbs.push(`<span>/</span> ${titleFromFilename(parts[i])}`);
  }
  crumbs.push(`<span>/</span> ${titleFromFilename(parts[parts.length - 1])}`);
  return crumbs.join(' ');
}

function main() {
  if (!fs.existsSync(DOCS_DIR)) {
    console.error('docs/ directory not found');
    process.exit(1);
  }

  fs.mkdirSync(DIST_DIR, { recursive: true });

  const mdFiles = walkDir(DOCS_DIR, DOCS_DIR);
  console.log(`Found ${mdFiles.length} markdown files`);

  const grouped = {};

  for (const relPath of mdFiles) {
    const srcFile = path.join(DOCS_DIR, relPath);
    const outFile = path.join(DIST_DIR, relPath.replace(/\.md$/, '.html'));
    const outDir = path.dirname(outFile);

    fs.mkdirSync(outDir, { recursive: true });

    const md = fs.readFileSync(srcFile, 'utf-8');
    const htmlContent = marked.parse(md);
    const title = titleFromFilename(relPath);
    const breadcrumb = buildBreadcrumb(relPath);
    const html = HTML_TEMPLATE(title, htmlContent, breadcrumb);

    fs.writeFileSync(outFile, html);
    console.log(`  ${relPath} -> ${relPath.replace(/\.md$/, '.html')}`);

    const category = path.dirname(relPath).split(path.sep)[0] || 'other';
    if (!grouped[category]) grouped[category] = [];
    grouped[category].push({
      relPath: relPath.replace(/\.md$/, '.html'),
      title: titleFromFilename(path.basename(relPath)),
      category,
      subcat: path.dirname(relPath).split(path.sep).slice(1).join(' / ')
    });
  }

  const sectionOrder = ['skills', 'mcps', 'apis'];
  const sectionLabels = { skills: 'Skills', mcps: 'MCP Servers', apis: 'APIs' };
  const cardClass = { skills: '', mcps: 'card--mcp', apis: 'card--api' };

  let sectionsHtml = '';
  for (const key of sectionOrder) {
    const items = grouped[key];
    if (!items) continue;
    sectionsHtml += `<h2>${sectionLabels[key] || key}</h2>\n<div class="card-grid">\n`;
    for (const item of items) {
      const desc = item.subcat ? item.subcat : '';
      sectionsHtml += `  <a class="card ${cardClass[key] || ''}" href="${item.relPath}">
    <div class="card__title">${item.title}</div>
    ${desc ? `<div class="card__desc">${desc}</div>` : ''}
  </a>\n`;
    }
    sectionsHtml += `</div>\n`;
  }

  const indexHtml = INDEX_TEMPLATE(sectionsHtml);
  fs.writeFileSync(path.join(DIST_DIR, 'index.html'), indexHtml);
  console.log(`  Generated docs index`);
  console.log(`Done! ${mdFiles.length} docs built to dist/docs/`);
}

main();
