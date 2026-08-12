#!/usr/bin/env node
// Static page generator — walks src/data/cloud-mobile.json and emits one
// real, independent, crawlable HTML file per route into dist/. No client
// router: every navigation in the output is a plain <a href>. A small
// shared script.js (built separately by esbuild) progressively enhances
// the shipped pages (drawer open/close, radial star menus) — see
// src/typescript/{drawer,stars}.ts. This script only runs at build time.
import { readFileSync, writeFileSync, mkdirSync } from 'node:fs';
import { join, dirname } from 'node:path';

const [, , PROJECT_DIR, DIST_DIR, MANIFEST] = process.argv;
const data = JSON.parse(readFileSync(join(PROJECT_DIR, MANIFEST), 'utf8'));
const { sections, bottomNav } = data;

// ── deterministic "random" app-name padding for /all views ─────────────
// Reproducible builds: a string hash picks names, not Math.random().
const APP_NAME_BANK = [
  'Compass', 'Ledger', 'Beacon', 'Prism', 'Nimbus', 'Anchor', 'Cascade', 'Drift',
  'Ember', 'Flint', 'Grove', 'Harbor', 'Kite', 'Lantern', 'Meadow', 'Nomad',
  'Orbit', 'Pulse', 'Quill', 'Ridge', 'Sable', 'Tundra', 'Umbra', 'Vellum',
  'Wren', 'Yonder', 'Zephyr', 'Atlas', 'Birch', 'Coral', 'Delta', ' Echo',
  'Fable', 'Glacier', 'Hearth', 'Ivy', 'Juniper', 'Knoll', 'Loom', 'Marrow',
];
function hash(str) {
  let h = 0;
  for (let i = 0; i < str.length; i++) h = (h * 31 + str.charCodeAt(i)) >>> 0;
  return h;
}
function paddingApps(seed, count) {
  const start = hash(seed) % APP_NAME_BANK.length;
  const out = [];
  for (let i = 0; i < count; i++) out.push(APP_NAME_BANK[(start + i * 7) % APP_NAME_BANK.length]);
  return out;
}

// ── target grammar → href (mirrors LauncherNavController's dispatch table) ─
function resolveTarget(target) {
  if (!target) return { href: null, external: false };
  if (target.startsWith('https://') || target.startsWith('http://')) return { href: target, external: true };
  if (target.startsWith('section:')) return { href: routeHref([target.slice(8)]), external: false };
  if (target.startsWith('page:')) return { href: routeHref(target.slice(5).split('/')), external: false };
  // extapp: / intent: / app: / tab: / action: / mode: / stub: — Android-only, no web destination.
  return { href: null, external: false };
}
function routeHref(segments) {
  return '/' + ['cloud-mobile', ...segments.filter(Boolean)].join('/') + '/';
}
function relPrefix(depth) {
  return depth === 0 ? './' : '../'.repeat(depth);
}

// ── icon + tile markup ──────────────────────────────────────────────────
function iconImg(icon, rel, cls) {
  return `<img class="${cls}" src="${rel}public/icons/${icon}.svg" alt="">`;
}
function tileHtml(tile, color, rel) {
  const { href, external } = resolveTarget(tile.target);
  const label = `<span class="tile__label">${tile.label}</span>`;
  const icon = iconImg(tile.icon, rel, 'tile__icon');
  const cls = `tile tile--${color}`;
  if (href) {
    const attrs = external ? ' target="_blank" rel="noopener"' : '';
    return `<a class="${cls}" href="${href}"${attrs} role="listitem">${icon}${label}</a>`;
  }
  return `<div class="${cls} tile--inert" role="listitem" aria-disabled="true">${icon}${label}</div>`;
}
function avatarTileHtml(label, rel, href) {
  const initial = label.charAt(0).toUpperCase();
  const body = `<span class="tile__avatar">${initial}</span><span class="tile__label">${label}</span>`;
  return href
    ? `<a class="tile tile--app" href="${href}" role="listitem">${body}</a>`
    : `<div class="tile tile--app tile--inert" role="listitem" aria-disabled="true">${body}</div>`;
}

// ── shared shell ─────────────────────────────────────────────────────────
function renderShell({ title, sectionId, depth, bodyHtml, backHref }) {
  const rel = relPrefix(depth);
  const isHome = sectionId === 'home' ? ' is-home' : '';
  const backBtn = backHref
    ? `<a class="back-btn" href="${backHref}" aria-label="Back">${iconImg('back', rel, '')}</a>`
    : `<span class="back-btn" hidden></span>`;

  const navItems = bottomNav.map((id) => {
    const s = sections[id];
    const active = id === sectionId ? ' is-active' : '';
    return `<a class="bottom-nav__item${active}" href="${rel}${id === 'home' ? '' : id + '/'}">${iconImg(s.icon, rel, '')}<span>${s.label}</span></a>`;
  }).join('\n            ');

  return `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover">
    <title>${title} · Cloud SuperApp</title>
    <link rel="icon" type="image/svg+xml" href="${rel}public/favicon.svg">
    <link rel="manifest" href="${rel}manifest.webmanifest">
    <meta name="theme-color" content="#000000">
<script>
  var _mtm = window._mtm = window._mtm || [];
  _mtm.push({'mtm.startTime': (new Date().getTime()), 'event': 'mtm.Start'});
  (function() {
    var d=document, g=d.createElement('script'), s=d.getElementsByTagName('script')[0];
    g.async=true; g.src='https://analytics.diegonmarcos.com/js/container_odwLIyPV.js'; s.parentNode.insertBefore(g,s);
  })();
</script>
    <link rel="stylesheet" href="${rel}style.css">
</head>
<body data-section="${sectionId}">
    <div class="shell${isHome}">
        <div class="galaxy-backdrop" aria-hidden="true"></div>

        <button class="star star--sirius" id="star-sirius" type="button" aria-label="Open menu">✦</button>
        <button class="star star--canopus" id="star-canopus" type="button" aria-label="Quick configs">✦</button>
        <button class="star star--centauri" id="star-centauri" type="button" aria-label="Recent apps">✦</button>

        <header class="toolbar-island">
            <button class="icon-btn" id="hamburger-btn" type="button" aria-label="Open menu" aria-expanded="false" aria-controls="drawer">
                ${iconImg('menu', rel, '')}
            </button>
            ${backBtn}
            <div class="dynamic-island" aria-hidden="true">
                <span class="dynamic-island__wave"></span>
                <span class="dynamic-island__label">Cloud SuperApp</span>
            </div>
            <span class="toolbar-island__spacer" aria-hidden="true"></span>
        </header>

        <main class="content" id="content">
            <h1 class="content__title">${title}</h1>
            ${bodyHtml}
        </main>

        <nav class="bottom-nav" id="bottom-nav" aria-label="Primary">
            ${navItems}
        </nav>
    </div>

    <div class="drawer-scrim" id="drawer-scrim"></div>
    <aside class="drawer" id="drawer" aria-hidden="true">
        <div class="drawer__banner drawer__banner--app" id="drawer-app-banner">
            ${iconImg('home', rel, 'drawer__banner-icon')}
            <div class="drawer__banner-text">
                <p class="drawer__title" id="drawer-app-name">Cloud SuperApp</p>
                <p class="drawer__meta" id="drawer-app-build">cloud-mobile · web</p>
            </div>
        </div>
        <div class="drawer__separator"></div>
        <button class="drawer__banner drawer__banner--user" id="drawer-user-banner" type="button">
            <span class="drawer__avatar" id="drawer-user-avatar">DCM</span>
            <div class="drawer__banner-text">
                <p class="drawer__title" id="drawer-user-name">Diego Coelho Marcos</p>
                <p class="drawer__meta" id="drawer-user-email">me@diegonmarcos.com</p>
                <p class="drawer__mode"><span id="drawer-user-mode">Mode: Apps</span> ${iconImg('refresh', rel, '')}</p>
            </div>
        </button>
        <div class="drawer__tabs" id="drawer-tabs" role="tablist">
            <button class="drawer__tab is-active" type="button" data-tab="home">Home</button>
            <button class="drawer__tab" type="button" data-tab="section">${sections[sectionId] ? sections[sectionId].label : 'Section'}</button>
        </div>
        <nav class="drawer__nav" id="drawer-nav-home"></nav>
        <nav class="drawer__nav" id="drawer-nav-section" hidden></nav>
    </aside>

    <div class="radial-menu" id="radial-menu" hidden aria-hidden="true"></div>

    <script>window.PORTAL_DATA = window.PORTAL_DATA || {};</script>
    <script src="${rel}data-cloud-mobile.json.js"></script>
    <script src="${rel}script.js"></script>
</body>
</html>
`;
}

// ── page-type content renderers ─────────────────────────────────────────
function tileGridBody(tiles, rel, colorFn) {
  const items = tiles.map((t) => tileHtml(t, colorFn(t), rel)).join('\n                ');
  return `<div class="tile-grid" role="list">
                ${items}
            </div>`;
}

function groupListBody(groups, rel, footer, footerHref) {
  const blocks = groups.map((g) => `
            <section class="tile-group">
                <h2 class="tile-group__title">${g.title}</h2>
                <div class="tile-grid tile-grid--dense" role="list">
                    ${g.tiles.map((t) => tileHtml(t, 'blue', rel)).join('\n                    ')}
                </div>
            </section>`).join('\n');
  // footer.target is an Android-only "action:" string with no generic web
  // destination (resolveTarget would return null) — the caller passes the
  // real sibling page href it already knows it generated (e.g. the /all/
  // view), since that's what this footer conceptually points to.
  const footerHtml = footer && footerHref ? `<a class="footer-link" href="${footerHref}">${footer.label}</a>` : '';
  return `${blocks}\n            ${footerHtml}`;
}

function appListBody(groups, rel, footer, allMode, seedPrefix, footerHref) {
  const blocks = groups.map((g) => {
    const apps = [...g.apps];
    if (allMode) apps.push(...paddingApps(seedPrefix + g.title, 4));
    const folderHtml = (g.folders || []).map((f) => {
      const fApps = allMode ? [...f.apps, ...paddingApps(seedPrefix + f.label, 3)] : f.apps;
      return `
                <div class="app-folder">
                    <h3 class="app-folder__title">${f.label}</h3>
                    <div class="tile-grid tile-grid--dense" role="list">
                        ${fApps.map((a) => avatarTileHtml(a, rel, null)).join('\n                        ')}
                    </div>
                </div>`;
    }).join('');
    return `
            <section class="tile-group">
                <h2 class="tile-group__title">${g.title}</h2>
                <div class="tile-grid tile-grid--dense" role="list">
                    ${apps.map((a) => avatarTileHtml(a, rel, null)).join('\n                    ')}
                </div>${folderHtml}
            </section>`;
  }).join('\n');
  const footerHtml = footer && !allMode && footerHref ? `<a class="footer-link" href="${footerHref}">${footer.label}</a>` : '';
  return `${blocks}\n            ${footerHtml}`;
}

function pageListBody(pages, sectionId, rel) {
  const items = pages.map((p) => {
    const label = typeof p === 'string' ? p : p.label;
    const id = typeof p === 'string' ? slug(p) : p.id;
    const override = typeof p === 'object' && p.target ? resolveTarget(p.target) : null;
    const href = override ? override.href : routeHref([sectionId, id]);
    return href
      ? `<a class="page-list__item" href="${href}">${label}</a>`
      : `<span class="page-list__item page-list__item--inert" aria-disabled="true">${label}</span>`;
  }).join('\n                ');
  return `<div class="page-list">
                ${items}
            </div>`;
}

function skeletonBody() {
  return `<div class="page-body">
                <div class="page-body__skeleton-row"></div>
                <div class="page-body__skeleton-row"></div>
                <div class="page-body__skeleton-row"></div>
            </div>`;
}

function slug(s) {
  return s.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
}

// ── colors: aggregator tiles use the section's own color; home tiles use
// the color of the section each tile points to. ─────────────────────────
function write(routeSegments, title, sectionId, bodyHtml, backHref) {
  const depth = routeSegments.length;
  const html = renderShell({ title, sectionId, depth, bodyHtml, backHref });
  const dir = join(DIST_DIR, ...routeSegments);
  mkdirSync(dir, { recursive: true });
  writeFileSync(join(dir, 'index.html'), html);
  console.log(`✓ /${routeSegments.join('/')}/`);
}

// ── route tree ───────────────────────────────────────────────────────────
// Home
{
  const rel = relPrefix(0);
  const homeTiles = Object.entries(sections)
    .filter(([id]) => id !== 'home')
    .map(([id, s]) => ({ id, label: s.label, icon: s.icon, target: `section:${id}`, _color: s.color }));
  const body = tileGridBody(homeTiles, rel, (t) => t._color);
  write([], 'Home', 'home', body, null);
}

// Aggregator sections (communication, infos, tools) — plain tile grids.
for (const id of ['communication', 'infos', 'tools']) {
  const s = sections[id];
  const rel = relPrefix(1);
  const body = tileGridBody(s.tiles, rel, () => s.color);
  write([id], s.label, id, body, routeHref([]));
}

// Suite — root index (the 5 home-style shortcuts) + cloud/phone x quickmarks/all.
{
  const s = sections.suite;
  const rel1 = relPrefix(1);
  write(['suite'], s.label, 'suite', tileGridBody(s.tiles, rel1, () => s.color), routeHref([]));

  const rel3 = relPrefix(3);
  write(['suite', 'cloud', 'quickmarks'], 'Suite · Cloud', 'suite',
    groupListBody(s.cloud.tileGroups, rel3, s.cloud.footer, routeHref(['suite', 'cloud', 'all'])), routeHref(['suite']));
  write(['suite', 'cloud', 'all'], 'Suite · Cloud · All', 'suite',
    groupListBody(s.cloud.tileGroups.map((g) => ({
      title: g.title,
      tiles: [...g.tiles], // real tiles first
    })), rel3, null) + tileGridBody(
      s.cloud.tileGroups.flatMap((g) => paddingApps('cloud-all-' + g.title, 3).map((n) => ({ id: slug(n), label: n, icon: 'suite', target: null }))),
      rel3, () => 'blue',
    ), routeHref(['suite']));

  write(['suite', 'phone', 'quickmarks'], 'Suite · Phone', 'suite',
    appListBody(s.phone.appGroups, rel3, s.phone.footer, false, 'phone-qm-', routeHref(['suite', 'phone', 'all'])), routeHref(['suite']));
  write(['suite', 'phone', 'all'], 'Suite · Phone · All', 'suite',
    appListBody(s.phone.appGroups, rel3, s.phone.footer, true, 'phone-all-'), routeHref(['suite']));
}

// Content-only sections (mail, rss, calendar, drive, vault, chat, wg, solutions, config,
// plus the 3 minimal stub sections Suite's Cloud tab page: targets point at).
for (const id of ['mail', 'rss', 'calendar', 'drive', 'vault', 'chat', 'wg', 'solutions', 'apptabs', 'myfin', 'health', 'config']) {
  const s = sections[id];
  const rel1 = relPrefix(1);
  write([id], s.label, id, pageListBody(s.pages, id, rel1), routeHref([]));

  for (const p of s.pages) {
    const label = typeof p === 'string' ? p : p.label;
    const pid = typeof p === 'string' ? slug(p) : p.id;
    if (typeof p === 'object' && p.target) continue; // routes elsewhere or inert — no own page
    write([id, pid], `${s.label} · ${label}`, id, skeletonBody(), routeHref([id]));
  }
}

console.log(`page_gen: done`);
