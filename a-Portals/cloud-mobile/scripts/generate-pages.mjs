#!/usr/bin/env node
// Static page generator — reads the data manifests under src/data/ (split by
// domain, mirroring the real app's libs/ separation: shell chrome, the 4
// TabbedSectionFragment aggregators, every content-only section, and the
// Phone-tab mock app list) and emits one real, independent, crawlable HTML
// file per route into dist/. No client router: every navigation is a plain
// <a href>. A small shared script.js progressively enhances the shipped
// pages (drawer, radial star menus, overlays, card collapse) — this script
// only runs at build time.
import { readFileSync, writeFileSync, mkdirSync } from 'node:fs';
import { join, dirname } from 'node:path';

const [, , PROJECT_DIR, DIST_DIR, MANIFEST] = process.argv;
const DATA_DIR = join(PROJECT_DIR, dirname(MANIFEST));
const readJson = (name) => JSON.parse(readFileSync(join(DATA_DIR, name), 'utf8'));

const shell = readJson('shell.json');
const core = readJson('sections-core.json');
const content = readJson('sections-content.json');
const mockData = readJson('mock-apps.json');

const { app, bottomNav, cube, stars, longPress, search, notificationCenter, updateOverlay } = shell;
const sections = { ...core.sections, ...content.sections, home: { label: 'Home', icon: 'home', color: 'blue' } };

// Both suite/phone/quickmarks and suite/phone/all are DERIVED from mock-apps
// (filtered by category + pinned flag), not hand-duplicated per view.
function phoneGroupsFromMockData(pinnedOnly) {
  const categories = [...new Set(mockData.apps.map((a) => a.category))];
  return categories.map((category) => {
    const apps = mockData.apps
      .filter((a) => a.category === category && (!pinnedOnly || a.pinned))
      .map((a) => ({ name: a.name }));
    const folders = mockData.folders
      .filter((f) => f.category === category)
      .map((f) => ({ label: f.label, apps: f.apps.map((a) => ({ name: a.name })) }));
    return { title: category, apps, folders };
  });
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
function slug(s) {
  return s.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
}
function hash(str) {
  let h = 0;
  for (let i = 0; i < str.length; i++) h = (h * 31 + str.charCodeAt(i)) >>> 0;
  return h;
}
const TILE_COLORS = ['blue', 'green', 'purple', 'pink', 'orange', 'teal', 'amber', 'indigo'];

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
// Cloud tab tiles are our own self-hosted services — generic functional
// icons (mail/calendar/chat) make sense there. Phone tab tiles represent
// real installed Android apps, which each have a distinct branded icon on a
// real phone. We can't bundle real trademarked app icons, but showing them
// as uniform outline icons erases exactly the visual distinction the real
// app has between "our services" and "your apps" — so these render as a
// colored initial-letter badge instead, deterministic per name (stable
// across quickmarks/all, not random), so the grid reads as visually varied
// like a real app drawer rather than a second copy of the Cloud tab style.
function appIconHtml(name) {
  const color = TILE_COLORS[hash(name) % TILE_COLORS.length];
  const initial = name.charAt(0).toUpperCase();
  return `<span class="tile__app-icon tile__app-icon--${color}">${initial}</span>`;
}
function avatarTileHtml(name, rel, href) {
  const body = `${appIconHtml(name)}<span class="tile__label">${name}</span>`;
  return href
    ? `<a class="tile tile--app" href="${href}" role="listitem">${body}</a>`
    : `<div class="tile tile--app tile--inert" role="listitem" aria-disabled="true">${body}</div>`;
}

// ── AggregatorStackFragment card rendering (Communication/Infos/Tools) ───
function cardHtml(card, rel) {
  if (card.kind === 'section_title') {
    return `<h2 class="stack-divider">${card.title}</h2>`;
  }
  const { href, external } = resolveTarget(card.target);
  const titleInner = href
    ? `<a class="stack-card__title" href="${href}"${external ? ' target="_blank" rel="noopener"' : ''}>${card.title}</a>`
    : `<span class="stack-card__title">${card.title}</span>`;
  const subtitle = card.subtitle ? `<p class="stack-card__subtitle">${card.subtitle}</p>` : '';
  const body = card.kind === 'stats' && card.rows
    ? `<div class="stack-card__stats">${card.rows.map(([l, v]) => `<div class="stack-card__stat"><span>${l}</span><b>${v}</b></div>`).join('')}</div>`
    : `<div class="stack-card__body"><div class="page-body__skeleton-row"></div></div>`;
  return `<div class="stack-card">
                <button class="stack-card__header" type="button" aria-expanded="true">${titleInner}<span class="stack-card__chevron" aria-hidden="true">⌄</span></button>
                <div class="stack-card__content">${subtitle}${body}</div>
            </div>`;
}
function stackBody(cards, rel) {
  return `<div class="stack-list">
                ${cards.map((c) => cardHtml(c, rel)).join('\n                ')}
            </div>`;
}

// ── Apps|Admin tab strip + body, for Communication/Infos/Tools ──────────
function modeTabsHtml(sectionId, active) {
  return `<div class="page-tabs" role="tablist">
                <a class="page-tabs__item${active === 'apps' ? ' is-active' : ''}" href="${routeHref([sectionId])}">Apps</a>
                <a class="page-tabs__item${active === 'admin' ? ' is-active' : ''}" href="${routeHref([sectionId, 'admin'])}">Admin</a>
            </div>`;
}
function tabbedSectionBody(section, sectionId, mode, rel) {
  const modeData = section[mode];
  const inner = modeData.type === 'stack'
    ? stackBody(modeData.cards, rel)
    : tileGridBody(modeData.tiles, rel, () => section.color);
  return `${modeTabsHtml(sectionId, mode)}\n            ${inner}`;
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
  const footerHtml = footer && footerHref ? `<a class="footer-link" href="${footerHref}">${footer.label}</a>` : '';
  return `${blocks}\n            ${footerHtml}`;
}

// groups come pre-filtered from phoneGroupsFromMockData(pinnedOnly).
function appListBody(groups, rel, footer, isAllMode, footerHref) {
  const blocks = groups.map((g) => {
    const folderHtml = (g.folders || []).map((f) => `
                <div class="app-folder">
                    <h3 class="app-folder__title">${f.label}</h3>
                    <div class="tile-grid tile-grid--dense" role="list">
                        ${f.apps.map((a) => avatarTileHtml(a.name, rel, null)).join('\n                        ')}
                    </div>
                </div>`).join('');
    return `
            <section class="tile-group">
                <h2 class="tile-group__title">${g.title}</h2>
                <div class="tile-grid tile-grid--dense" role="list">
                    ${g.apps.map((a) => avatarTileHtml(a.name, rel, null)).join('\n                    ')}
                </div>${folderHtml}
            </section>`;
  }).join('\n');
  const footerHtml = footer && !isAllMode && footerHref ? `<a class="footer-link" href="${footerHref}">${footer.label}</a>` : '';
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

function pageTabsHtml(pages, sectionId, activeId, rel) {
  const items = pages.map((p) => {
    const label = typeof p === 'string' ? p : p.label;
    const id = typeof p === 'string' ? slug(p) : p.id;
    const override = typeof p === 'object' && p.target ? resolveTarget(p.target) : null;
    const href = override ? override.href : routeHref([sectionId, id]);
    const active = id === activeId ? ' is-active' : '';
    return href
      ? `<a class="page-tabs__item${active}" href="${href}">${label}</a>`
      : `<span class="page-tabs__item page-tabs__item--inert" aria-disabled="true">${label}</span>`;
  }).join('\n                ');
  return `<div class="page-tabs" role="tablist">
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

// Real config pages carry actual rows (settings values) instead of generic
// shimmer placeholders — it's a fully enumerable settings screen, not
// backend-fed content, so there's no reason to fake-load it.
function settingsListBody(rows) {
  const items = rows.map(([label, value]) => `
                <div class="settings-list__row">
                    <span class="settings-list__label">${label}</span>
                    <span class="settings-list__value">${value}</span>
                </div>`).join('');
  return `<div class="settings-list">${items}
            </div>`;
}

// ── the home cube — Home3DFragment's real centerpiece, CSS 3D transforms ─
function homeCubeHtml() {
  const face = (cls) => `<div class="home-cube__face home-cube__face--${cls}"></div>`;
  return `<div class="home-cube" aria-hidden="true">
                <div class="home-cube__inner">
                    ${['front', 'back', 'right', 'left', 'top', 'bottom'].map(face).join('\n                    ')}
                </div>
            </div>`;
}

function write(routeSegments, title, sectionId, bodyHtml, backHref) {
  const depth = routeSegments.length;
  const html = renderShell({ title, sectionId, depth, bodyHtml, backHref });
  const dir = join(DIST_DIR, ...routeSegments);
  mkdirSync(dir, { recursive: true });
  writeFileSync(join(dir, 'index.html'), html);
  console.log(`✓ /${routeSegments.join('/')}/`);
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
    return `<a class="bottom-nav__item${active}" href="${rel}${id === 'home' ? '' : id + '/'}" data-longpress="${id}">${iconImg(s.icon, rel, '')}<span>${s.label}</span></a>`;
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
        ${sectionId === 'home' ? homeCubeHtml() : ''}

        <button class="star star--sirius" id="star-sirius" type="button" aria-label="Open menu">✦</button>
        <button class="star star--canopus" id="star-canopus" type="button" aria-label="Quick configs">✦</button>
        <button class="star star--centauri" id="star-centauri" type="button" aria-label="Recent apps">✦</button>

        <header class="toolbar-island">
            <button class="icon-btn" id="hamburger-btn" type="button" aria-label="Open menu" aria-expanded="false" aria-controls="drawer">
                ${iconImg('menu', rel, '')}
            </button>
            ${backBtn}
            <button class="dynamic-island" id="dynamic-island" type="button" aria-label="Notifications">
                <span class="dynamic-island__wave"></span>
                <span class="dynamic-island__label">Cloud SuperApp</span>
            </button>
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
    <div class="fan-menu" id="fan-menu" hidden aria-hidden="true"></div>
    <div class="overlay-sheet" id="notification-center" hidden></div>
    <div class="overlay-sheet overlay-sheet--full" id="search-sheet" hidden></div>
    <div class="overlay-sheet overlay-sheet--full" id="update-overlay" hidden></div>

    <script>window.PORTAL_DATA = window.PORTAL_DATA || {};</script>
    <script src="${rel}data-shell.json.js"></script>
    <script src="${rel}data-sections-core.json.js"></script>
    <script src="${rel}data-sections-content.json.js"></script>
    <script src="${rel}data-mock-apps.json.js"></script>
    <script src="${rel}script.js"></script>
</body>
</html>
`;
}

// ── route tree ───────────────────────────────────────────────────────────
// Home — the real app's default (and only) home screen is Home3DFragment,
// a centered animated cube, NOT a tile grid. Discovery of sections happens
// via bottom nav / drawer / the star radial menus, matching the real app.
write([], 'Home', 'home', '', null);

// Communication / Infos / Tools — TabbedSectionFragment: real Apps|Admin
// tabs, each mode rendering either a tile grid or an AggregatorStack card
// list depending on section[mode].type (verbatim from build.json).
for (const id of ['communication', 'infos', 'tools']) {
  const s = sections[id];
  const rel1 = relPrefix(1);
  const rel2 = relPrefix(2);
  write([id], s.label, id, tabbedSectionBody(s, id, 'apps', rel1), routeHref([]));
  write([id, 'admin'], `${s.label} · Admin`, id, tabbedSectionBody(s, id, 'admin', rel2), routeHref([id]));
}

// Suite — root index (the 5 home-style shortcuts) + cloud/phone x quickmarks/all.
{
  const s = sections.suite;
  const rel1 = relPrefix(1);
  write(['suite'], s.label, 'suite', tileGridBody(s.tiles, rel1, () => s.color), routeHref([]));

  const rel3 = relPrefix(3);
  const cloudPhoneTabs = (mode, active) => `<div class="page-tabs" role="tablist">
                <a class="page-tabs__item${active === 'cloud' ? ' is-active' : ''}" href="${routeHref(['suite', 'cloud', mode])}">Cloud</a>
                <a class="page-tabs__item${active === 'phone' ? ' is-active' : ''}" href="${routeHref(['suite', 'phone', mode])}">Phone</a>
            </div>`;

  write(['suite', 'cloud', 'quickmarks'], 'Suite · Cloud', 'suite',
    cloudPhoneTabs('quickmarks', 'cloud') + '\n            ' +
    groupListBody(s.cloud.tileGroups, rel3, s.cloud.footer, routeHref(['suite', 'cloud', 'all'])), routeHref(['suite']));
  // Cloud's "all" (real app: action:open_suite_cloud_all, full-screen push of
  // the same tile_groups with no tab chrome) has no larger real-data universe
  // to reveal than quickmarks — unlike Phone, there's no bigger "installed
  // cloud services" list to pad out, so this reuses the same tileGroups.
  write(['suite', 'cloud', 'all'], 'Suite · Cloud · All', 'suite',
    groupListBody(s.cloud.tileGroups, rel3, null), routeHref(['suite']));

  write(['suite', 'phone', 'quickmarks'], 'Suite · Phone', 'suite',
    cloudPhoneTabs('quickmarks', 'phone') + '\n            ' +
    appListBody(phoneGroupsFromMockData(true), rel3, shell.longPress ? null : null, false, routeHref(['suite', 'phone', 'all'])), routeHref(['suite']));
  write(['suite', 'phone', 'all'], 'Suite · Phone · All', 'suite',
    cloudPhoneTabs('all', 'phone') + '\n            ' +
    appListBody(phoneGroupsFromMockData(false), rel3, null, true), routeHref(['suite']));
}

// Content-only sections. Config carries real settings rows; everything else
// still gets skeleton placeholders (no real backend to reflect either way).
for (const id of ['mail', 'rss', 'calendar', 'drive', 'vault', 'chat', 'wg', 'solutions', 'apptabs', 'myfin', 'health', 'config']) {
  const s = sections[id];
  const rel1 = relPrefix(1);
  write([id], s.label, id, pageListBody(s.pages, id, rel1), routeHref([]));

  const rel2 = relPrefix(2);
  for (const p of s.pages) {
    const label = typeof p === 'string' ? p : p.label;
    const pid = typeof p === 'string' ? slug(p) : p.id;
    if (typeof p === 'object' && p.target) continue; // routes elsewhere or inert — no own page
    const tabs = s.pages.length > 1 ? `${pageTabsHtml(s.pages, id, pid, rel2)}\n            ` : '';
    const inner = typeof p === 'object' && p.rows ? settingsListBody(p.rows) : skeletonBody();
    write([id, pid], `${s.label} · ${label}`, id, tabs + inner, routeHref([id]));
  }
}

console.log(`page_gen: done`);
