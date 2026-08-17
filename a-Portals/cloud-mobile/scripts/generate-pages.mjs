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
const linktreeData = readJson('linktree.json');

const { app, bottomNav, cube, stars, longPress, notificationCenter, updateOverlay, statusBar, footer } = shell;
const sections = { ...core.sections, ...content.sections, home: { label: 'Home', icon: 'home', color: 'blue' } };

// suite/phone/quickmarks is DERIVED from mock-apps (filtered by category +
// pinned flag), not hand-duplicated per view. suite/phone/all no longer
// groups by category — see computeSmartFolders/topicalFoldersBody below,
// which group by the richer Smart Folder rules + phoneFolders instead.
function phoneGroupsFromMockData(pinnedOnly) {
  const categories = [...new Set(mockData.apps.map((a) => a.category))];
  return categories.map((category) => {
    const apps = mockData.apps
      .filter((a) => a.category === category && (!pinnedOnly || a.pinned))
      .map((a) => ({ name: a.name }));
    return { title: category, apps };
  });
}

// ── Smart Folders (suite/phone/all) — RULE-DRIVEN from each app's simulated
// Android metadata (package/installSource/first-install/last-used/usage),
// never hand-listed membership. Mirrors a real launcher's auto-generated
// "Recently installed" / "Recently used" / usage-ranked smart groups.
const INSTALL_SOURCE_LABELS = { play: 'Google Play', fdroid: 'F-Droid', uptodown: 'Uptodown', direct: 'Direct' };
function computeSmartFolders(apps) {
  const topBy = (key) => [...apps].sort((a, b) => b[key] - a[key]).slice(0, 7);
  const bySource = Object.keys(INSTALL_SOURCE_LABELS).map((src) => ({
    id: `smart_src_${src}`,
    label: INSTALL_SOURCE_LABELS[src],
    apps: apps.filter((a) => a.installSource === src),
  }));
  return [
    { id: 'smart_cloud', label: 'Cloud', apps: apps.filter((a) => a.package?.startsWith('com.diegonmarcos.')) },
    ...bySource,
    { id: 'smart_new', label: 'New Apps', apps: apps.filter((a) => a.firstInstallDaysAgo <= 14) },
    { id: 'smart_recent48', label: 'Recent 48h', apps: apps.filter((a) => a.lastUsedHoursAgo <= 48) },
    { id: 'smart_recent7d', label: 'Recent 7d', apps: apps.filter((a) => a.lastUsedHoursAgo <= 168) },
    { id: 'smart_top_opens', label: 'Top 7 Open', apps: topBy('opens7d') },
    { id: 'smart_top_battery', label: 'Top 7 Battery', apps: topBy('batteryPct7d') },
    { id: 'smart_top_time', label: 'Top 7 Time', apps: topBy('usageMin7d') },
  ];
}
function smartFoldersBody(smartFolders, rel) {
  const blocks = smartFolders.map((f) => `
            <details class="smart-folder">
                <summary class="smart-folder__summary"><span class="smart-folder__label">${f.label}</span><span class="smart-folder__badge">${f.apps.length}</span></summary>
                <div class="tile-grid tile-grid--dense" role="list">
                    ${f.apps.map((a) => avatarTileHtml(a.name, rel, null)).join('\n                    ')}
                </div>
            </details>`).join('\n');
  return `<section class="smart-folders">
                <h2 class="tile-group__title">Smart Folders</h2>${blocks}
            </section>`;
}

// ── topical folders (suite/phone/all) — every app carries a folderId, this
// just groups by it in phoneFolders' declared order.
function topicalFoldersBody(apps, phoneFolders, rel) {
  const ordered = [...phoneFolders].sort((a, b) => a.order - b.order);
  return ordered.map((f) => {
    const members = apps.filter((a) => a.folderId === f.id);
    if (!members.length) return '';
    return `
            <section class="tile-group">
                <h2 class="tile-group__title">${f.label} <span class="smart-folder__badge">${members.length}</span></h2>
                <div class="tile-grid tile-grid--dense" role="list">
                    ${members.map((a) => avatarTileHtml(a.name, rel, null)).join('\n                    ')}
                </div>
            </section>`;
  }).join('\n');
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
  const caption = card.caption ? `<p class="stack-card__caption">${card.caption}</p>` : '';

  let body;
  if (card.kind === 'stats' && card.rows) {
    body = `<div class="stack-card__stats">${card.rows.map(([l, v]) => `<div class="stack-card__stat"><span>${l}</span><b>${v}</b></div>`).join('')}</div>`;
  } else if (card.kind === 'mail_accounts' && card.rows) {
    // Real: one row per declared account (build.json::ui.mail_accounts) —
    // unread/total counts are pending a real JMAP/IMAP backend in the real
    // app too, so a caption explaining that is honest, not a placeholder.
    body = `<div class="stack-card__stats">${card.rows.map(([l, v]) => `<div class="stack-card__stat"><span>${l}</span><b>${v}</b></div>`).join('')}</div>${caption}`;
  } else if ((card.kind === 'chat_matrix' || card.kind === 'chat_mattermost') && card.linkLabel) {
    // Real: a single "Open Matrix"/"Open Mattermost" row — the real app has
    // no richer server-list content here either.
    body = `${href ? `<a class="stack-card__link-row" href="${href}">${card.linkLabel}</a>` : ''}${caption}`;
  } else if (card.kind === 'open_link') {
    // Real: a single tappable header row, no body at all — the generic
    // skeleton here was pure invention with nothing behind it.
    body = '';
  } else if (card.kind === 'calendar_month') {
    // Real: a month grid with working prev/next chevrons, today
    // highlighted — pure date math, so this mounts client-side (see
    // calendar-month-card.ts) rather than baking a build-time date into
    // the static HTML, which would break dist/ reproducibility.
    body = `<div class="calendar-card" data-calendar-card></div>`;
  } else {
    body = `<div class="stack-card__body"><div class="page-body__skeleton-row"></div></div>`;
  }

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

// groups come pre-filtered from phoneGroupsFromMockData(pinnedOnly). Used
// only by suite/phone/quickmarks now — suite/phone/all uses
// smartFoldersBody + topicalFoldersBody instead (see above).
function appListBody(groups, rel, footer, footerHref) {
  const blocks = groups.map((g) => `
            <section class="tile-group">
                <h2 class="tile-group__title">${g.title}</h2>
                <div class="tile-grid tile-grid--dense" role="list">
                    ${g.apps.map((a) => avatarTileHtml(a.name, rel, null)).join('\n                    ')}
                </div>
            </section>`).join('\n');
  const footerHtml = footer && footerHref ? `<a class="footer-link" href="${footerHref}">${footer.label}</a>` : '';
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
//
// A row is one of:
//   [label, value]                — plain settings row
//   [label, value, { active }]    — plain row, "active" marks the current
//                                    choice (theme/profile pickers etc.)
//   { group: "Title" }            — section header/divider, groups the
//                                    rows that follow (still backward
//                                    compatible with pages that only ever
//                                    used flat [label, value] rows)
//   { type: "qrcard", caption }   — the business-card QR block
function qrCardHtml(block) {
  return `
                <div class="qrcard">
                    <div class="qrcard__frame">
                        <div class="qrcard__plate">
                            <span class="qrcard__glyph">QR</span>
                        </div>
                    </div>
                    ${block.caption ? `<p class="qrcard__caption">${block.caption}</p>` : ''}
                </div>`;
}
function settingsListBody(rows) {
  const items = rows.map((row) => {
    if (Array.isArray(row)) {
      const [label, value, opts] = row;
      const active = opts?.active;
      return `
                <div class="settings-list__row${active ? ' settings-list__row--active' : ''}">
                    <span class="settings-list__label">${label}</span>
                    <span class="settings-list__value">${value}${active ? ' <span class="settings-list__active-badge" aria-hidden="true">✓</span>' : ''}</span>
                </div>`;
    }
    if (row.group) {
      return `
                <div class="settings-list__group">${row.group}</div>`;
    }
    if (row.type === 'qrcard') return qrCardHtml(row);
    return '';
  }).join('');
  return `<div class="settings-list">${items}
            </div>`;
}

// Mail inboxes, calendar events, vault entries, etc. — generic 3-field mock
// content (title/subtitle/meta) so every leaf page has believable real-shaped
// content instead of a shimmer placeholder, without needing a bespoke
// renderer per content type.
function itemListBody(items) {
  const rows = items.map((it) => `
                <div class="item-list__row">
                    <div class="item-list__text">
                        <span class="item-list__title">${it.title}</span>
                        ${it.subtitle ? `<span class="item-list__subtitle">${it.subtitle}</span>` : ''}
                    </div>
                    ${it.meta ? `<span class="item-list__meta">${it.meta}</span>` : ''}
                </div>`).join('');
  return `<div class="item-list">${rows}
            </div>`;
}

// Configs > Constellation — port of ConstellationFragment.kt. Every action
// here (install/update/uninstall/open a native APK, grant an Android
// permission) is fundamentally something a website cannot do, so all
// buttons render inert (decorative, not fake-clickable) — same treatment
// as every other real-device-only action elsewhere in this build. The
// per-app status line and its 5-way color coding (installed/update/
// missing/blocked/error) is real, verbatim from Fleet.State.
const CONSTELLATION_STATUS = {
  installed: { color: '#48BB78', glyph: '✓' },
  update: { color: '#ED8936', glyph: '⬆' },
  missing: { color: '#63B3ED', glyph: '◯' },
  blocked: { color: '#F56565', glyph: '⛔' },
  error: { color: '#ECC94B', glyph: '⚠' },
};
function constellationStatusText(app) {
  switch (app.status) {
    case 'installed': return `up to date  ·  v${app.version} (${app.versionCode})  ·  sha ${app.sha}`;
    case 'update': return `update available  ·  installed v${app.version ?? '—'} → ${app.remoteDigest}`;
    case 'missing': return 'not installed  ·  tap Install';
    case 'blocked': return 'not published yet';
    case 'error': return app.message ?? 'error';
    default: return '';
  }
}
function constellationBody(data) {
  const cards = data.apps.map((app) => {
    const st = CONSTELLATION_STATUS[app.status];
    const showInstall = app.status !== 'blocked';
    return `<div class="constellation__card">
                <p class="constellation__card-label">${app.label}</p>
                <p class="constellation__mono">${app.pkg}  ·  ${app.image}</p>
                <p class="constellation__status" style="color:${st.color}">${st.glyph} ${constellationStatusText(app)}</p>
                <div class="constellation__actions">
                    <span class="constellation__btn constellation__btn--inert">Open</span>
                    ${showInstall ? '<span class="constellation__btn constellation__btn--inert constellation__btn--accent">Install / Update</span>' : ''}
                    <span class="constellation__btn constellation__btn--inert">Uninstall</span>
                </div>
            </div>`;
  }).join('');
  return `<p class="constellation__title">Constellation AppStore</p>
            <p class="constellation__caption">${data.apps.length} apps · superapp is the fleet manager</p>
            <div class="constellation__btn-row">
                <span class="constellation__btn constellation__btn--inert constellation__btn--accent">⬆ Update all</span>
                <span class="constellation__btn constellation__btn--inert constellation__btn--blue">⬇ Install all</span>
            </div>
            <div class="constellation__btn-row">
                <span class="constellation__btn constellation__btn--inert">↻ Check all</span>
            </div>
            <div class="constellation__btn-row">
                <span class="constellation__btn constellation__btn--inert${data.autoUpdate ? ' constellation__btn--on' : ''}">Auto-update: ${data.autoUpdate ? 'ON' : 'OFF'}</span>
                <span class="constellation__btn constellation__btn--inert${data.installPermGranted ? '' : ' constellation__btn--accent'}">${data.installPermGranted ? '✓ Install perm' : 'Grant install'}</span>
            </div>
            <p class="constellation__caption">${data.installPermGranted ? 'Silent installs enabled.' : "Grant 'Install unknown apps' for no-tap updates."}</p>
            <div class="constellation__list">${cards}</div>`;
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
// LauncherStatusStripView — real device metrics (radio state, RAM/storage/
// CPU/battery) have no web equivalent, so left/right clusters are static
// mock values; the center clock is genuinely live (see main.ts's tiny
// setInterval clock updater — #status-clock's text is refreshed client-side,
// this server-rendered value is just the correct initial paint).
function statusStripHtml() {
  const left = statusBar.left.map((i) => `<span class="status-strip__chip${i.active ? ' is-active' : ''}">${i.label}</span>`).join('');
  const right = statusBar.right.map((i) => `<span class="status-strip__chip">${i.label} ${i.value}</span>`).join('');
  // No new Date() here on purpose — a build-time timestamp would make every
  // page's HTML differ across builds/redeploys with no source change,
  // breaking reproducibility (the whole dist/-is-committed-code convention
  // assumes same source -> byte-identical output). main.ts's initStatusClock()
  // fills the real time in immediately on load instead.
  return `<div class="status-strip">
            <div class="status-strip__row">
                <div class="status-strip__cluster status-strip__cluster--left">${left}</div>
                <div class="status-strip__camera" aria-hidden="true"></div>
                <div class="status-strip__cluster status-strip__cluster--right">${right}</div>
            </div>
            <button class="status-strip__clock" id="status-clock" type="button" aria-label="Calendar">--:--</button>
        </div>`;
}

// ── global footer — every generated page, very bottom of .content: a
// Google-Play-style APK download badge + the Constellation fleet as small
// glass icon chips. Data-driven from shell.json's "footer" key. Icon
// mapping is a sensible reuse of the existing generic-functional icon set
// (no bundled per-app trademarked icons, same reasoning as appIconHtml()
// above for the Phone tab's app tiles).
const FOOTER_ICON_MAP = {
  'cloud-mail': 'mail',
  'cloud-chat': 'chat',
  'cloud-matrix': 'chat',
  'cloud-dialer': 'phone',
  'cloud-ide': 'code',
  'cloud-nav': 'mesh',
  'cloud-calendar': 'calendar',
  'cloud-news': 'rss',
  'cloud-keyboard': 'tools',
  'cloud-wallet': 'wallet',
  'cloud-browser': 'browser',
  'cloud-vault': 'lock',
  'cloud-media-center': 'music',
};
function footerHtml(rel) {
  const { apk, constellation } = footer;
  const chips = constellation.map((c) => `
                    <a class="footer-chip" href="${c.url}" download>
                        <span class="footer-chip__icon-wrap">${iconImg(FOOTER_ICON_MAP[c.id] ?? 'suite', rel, 'footer-chip__icon')}</span>
                        <span class="footer-chip__label">${c.label}</span>
                    </a>`).join('');
  return `<footer class="site-footer">
                <a class="footer-badge" href="${apk.url}" download>
                    ${iconImg('play-badge', rel, 'footer-badge__icon')}
                    <span class="footer-badge__text">
                        <span class="footer-badge__label">${apk.label}</span>
                        <span class="footer-badge__sub">${apk.sub}</span>
                    </span>
                </a>
                <div class="footer-constellation">${chips}
                </div>
            </footer>`;
}

function renderShell({ title, sectionId, depth, bodyHtml, backHref }) {
  const rel = relPrefix(depth);
  const isHome = sectionId === 'home' ? ' is-home' : '';
  // Mirrors MainActivity's onPrepareOptionsMenu: action_back is visible
  // everywhere except the Home root; action_wallet slots into that same
  // toolbar position ONLY at the Home root ("mirror of action_back which
  // hides on Home"). Every non-home route always carries a real backHref
  // (see the route tree below), so this is a clean either/or — never both,
  // never neither.
  const rightIcon = sectionId === 'home'
    ? `<a class="toolbar-action" href="${routeHref(['wallet', 'cards'])}" aria-label="Wallet">${iconImg('wallet', rel, '')}</a>`
    : `<a class="toolbar-action" href="${backHref}" aria-label="Back">${iconImg('back', rel, '')}</a>`;

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
    <script type="speculationrules">{"prerender":[{"where":{"and":[{"href_matches":"/*"}]},"eagerness":"moderate"}]}</script>
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
        ${statusStripHtml()}
        <div class="galaxy-backdrop" aria-hidden="true"></div>
        ${sectionId === 'home' ? homeCubeHtml() : ''}

        <button class="star star--sirius" id="star-sirius" type="button" aria-label="Open menu">✦</button>
        <button class="star star--canopus" id="star-canopus" type="button" aria-label="Quick configs">${iconImg('settings', rel, 'star__icon')}</button>
        <button class="star star--centauri" id="star-centauri" type="button" aria-label="Recent apps">✦</button>

        <button class="icon-btn icon-btn--hamburger" id="hamburger-btn" type="button" aria-label="Open menu" aria-expanded="false" aria-controls="drawer">
            ${iconImg('menu', rel, '')}
        </button>

        <div class="music-island" aria-hidden="true">
            ${iconImg('music', rel, 'music-island__icon')}
            <span class="music-island__marquee"><span class="music-island__title">Weightless — Marconi Union</span></span>
        </div>

        <button class="dynamic-island" id="dynamic-island" type="button" aria-label="Notifications">
            <span class="dynamic-island__wave-clip" aria-hidden="true">
                <span class="dynamic-island__wave dynamic-island__wave--1"></span>
                <span class="dynamic-island__wave dynamic-island__wave--2"></span>
                <span class="dynamic-island__wave dynamic-island__wave--3"></span>
                <span class="dynamic-island__wave dynamic-island__wave--4"></span>
            </span>
            <span class="dynamic-island__shimmer" aria-hidden="true"></span>
        </button>

        ${rightIcon}

        <main class="content" id="content">
            ${bodyHtml}
            ${footerHtml(rel)}
        </main>

        <nav class="bottom-nav" id="bottom-nav" aria-label="Primary">
            ${navItems}
        </nav>

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
            <nav class="drawer__nav" id="drawer-nav"></nav>
        </aside>

        <div class="radial-menu" id="radial-menu" hidden aria-hidden="true"></div>
        <div class="fan-menu-scrim" id="fan-menu-scrim" hidden></div>
        <div class="fan-menu" id="fan-menu" hidden aria-hidden="true"></div>
        <div class="overlay-sheet" id="notification-center" hidden></div>
        <div class="overlay-sheet overlay-sheet--full" id="update-overlay" hidden></div>
        <div class="overlay-sheet" id="calendar-popup" hidden></div>
    </div>

    <script>window.PORTAL_DATA = window.PORTAL_DATA || {};</script>
    <script src="${rel}data-shell.json.js"></script>
    <script src="${rel}data-sections-core.json.js"></script>
    <script src="${rel}data-sections-content.json.js"></script>
    <script src="${rel}data-mock-apps.json.js"></script>
    <script src="${rel}data-linktree.json.js"></script>
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

// Home Apps — real app: HomeFanMenu's "action:open_home_apps" (and Sirius's
// same-named node) opens AppDrawerSheetFragment: a search bar + a tile grid
// of every section. The web version had proxied this to a bare JS search
// overlay with no real destination — replaced with an actual page so the
// long-press item and the star node both resolve to a real, working href.
{
  const rel1 = relPrefix(1);
  const tileIds = [...bottomNav, ...Object.keys(sections).filter((id) => id !== 'home' && !bottomNav.includes(id))]
    .filter((id) => id !== 'home');
  const tiles = tileIds.map((id) => ({ id, label: sections[id].label, icon: sections[id].icon, target: `section:${id}` }));
  const searchPill = `<div class="search-pill" aria-hidden="true">Search apps &amp; content</div>`;
  write(['home-apps'], 'Home Apps', 'home-apps',
    searchPill + '\n            ' + tileGridBody(tiles, rel1, (t) => sections[t.id].color), routeHref([]));
}

// Recent Apps — real app: HomeFanMenu's "page:recentapps/grid" opens
// RecentAppsFragment, a 3-per-row grid of the last 24 opened apps (device
// usage stats, no web equivalent — reuses the same deterministic recent-
// apps stand-in list Centauri's star already shows, single source of truth).
{
  const rel2 = relPrefix(2);
  const tiles = stars.centauri.recentApps.map((name) => avatarTileHtml(name, rel2, null)).join('\n                ');
  const body = `<div class="tile-grid tile-grid--dense" role="list">
                ${tiles}
            </div>`;
  write(['recentapps', 'grid'], 'Recent Apps', 'recentapps', body, routeHref([]));
}

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

// Suite — bottom-nav destination goes straight to the Cloud|Phone tabbed
// view (matching Communication/Infos/Tools's "tabs visible immediately"
// pattern — no intermediate shortcut-tiles page), plus the same view is
// also reachable at its own cloud/phone x quickmarks/all URLs for deep
// links (Sirius star, long-press menu, the "More" footer).
{
  const s = sections.suite;
  const rel1 = relPrefix(1);
  const rel3 = relPrefix(3);
  const cloudPhoneTabs = (mode, active, rel) => `<div class="page-tabs" role="tablist">
                <a class="page-tabs__item${active === 'cloud' ? ' is-active' : ''}" href="${routeHref(['suite', 'cloud', mode])}">Cloud</a>
                <a class="page-tabs__item${active === 'phone' ? ' is-active' : ''}" href="${routeHref(['suite', 'phone', mode])}">Phone</a>
            </div>`;

  write(['suite'], s.label, 'suite',
    cloudPhoneTabs('quickmarks', 'cloud', rel1) + '\n            ' +
    groupListBody(s.cloud.tileGroups, rel1, s.cloud.footer, routeHref(['suite', 'cloud', 'all'])), routeHref([]));

  write(['suite', 'cloud', 'quickmarks'], 'Suite · Cloud', 'suite',
    cloudPhoneTabs('quickmarks', 'cloud', rel3) + '\n            ' +
    groupListBody(s.cloud.tileGroups, rel3, s.cloud.footer, routeHref(['suite', 'cloud', 'all'])), routeHref([]));
  // Cloud's "all" (real app: action:open_suite_cloud_all, full-screen push of
  // the same tile_groups with no tab chrome) has no larger real-data universe
  // to reveal than quickmarks — unlike Phone, there's no bigger "installed
  // cloud services" list to pad out, so this reuses the same tileGroups.
  write(['suite', 'cloud', 'all'], 'Suite · Cloud · All', 'suite',
    groupListBody(s.cloud.tileGroups, rel3, null), routeHref(['suite']));

  write(['suite', 'phone', 'quickmarks'], 'Suite · Phone', 'suite',
    cloudPhoneTabs('quickmarks', 'phone', rel3) + '\n            ' +
    appListBody(phoneGroupsFromMockData(true), rel3, s.phone.footer, routeHref(['suite', 'phone', 'all'])), routeHref([]));
  write(['suite', 'phone', 'all'], 'Suite · Phone · All', 'suite',
    cloudPhoneTabs('all', 'phone', rel3) + '\n            ' +
    smartFoldersBody(computeSmartFolders(mockData.apps), rel3) + '\n            ' +
    topicalFoldersBody(mockData.apps, mockData.phoneFolders, rel3), routeHref(['suite']));
}

// Content-only sections. Config carries real settings rows; everything else
// still gets skeleton placeholders (no real backend to reflect either way).
for (const id of ['mail', 'rss', 'calendar', 'drive', 'vault', 'chat', 'wg', 'solutions', 'apptabs', 'myfin', 'health', 'wallet', 'config', 'c3', 'browser']) {
  const s = sections[id];
  const rel1 = relPrefix(1);
  write([id], s.label, id, pageListBody(s.pages, id, rel1), routeHref([]));

  const rel2 = relPrefix(2);
  for (const p of s.pages) {
    const label = typeof p === 'string' ? p : p.label;
    const pid = typeof p === 'string' ? slug(p) : p.id;
    if (typeof p === 'object' && p.target) continue; // routes elsewhere or inert — no own page
    const tabs = s.pages.length > 1 ? `${pageTabsHtml(s.pages, id, pid, rel2)}\n            ` : '';
    let inner;
    if (typeof p === 'object' && p.constellation) inner = constellationBody(p.constellation);
    else if (id === 'browser' && pid === 'linktree') {
      // Suite > Browser > Linktree — renders linktree.json's groups through
      // the same groupListBody used for suite's own tileGroups (a list of
      // titled tile groups), just fed from a separate data file.
      inner = groupListBody(linktreeData.groups.map((g) => ({
        title: g.label,
        tiles: g.tiles.map((t) => ({ label: t.label, icon: t.icon, target: t.href })),
      })), rel2, null, null);
    } else if (typeof p === 'object' && (p.tiles || p.stack)) {
      const parts = [];
      if (p.tiles) parts.push(tileGridBody(p.tiles, rel2, () => s.color));
      if (p.stack) parts.push(stackBody(p.stack, rel2));
      if (p.items) parts.push(itemListBody(p.items));
      inner = parts.join('\n            ');
    }
    else if (typeof p === 'object' && p.rows) inner = settingsListBody(p.rows);
    else if (typeof p === 'object' && p.items) inner = itemListBody(p.items);
    else inner = skeletonBody();
    write([id, pid], `${s.label} · ${label}`, id, tabs + inner, routeHref([id]));
  }
}

// Labs (tools) sub-pages — the stub tiles removed from sections-core.json's
// tools.tiles now point at real item-list pages here. tools itself stays a
// TabbedSectionFragment (Apps|Admin, see the aggregator loop above), so its
// extra "pages" array (additive, ignored by tabbedSectionBody) is walked
// separately rather than folded into the generic content-only loop above.
{
  const toolsSection = sections.tools;
  for (const p of toolsSection.pages ?? []) {
    write(['tools', p.id], `${toolsSection.label} · ${p.label}`, 'tools', itemListBody(p.items), routeHref(['tools']));
  }
}

console.log(`page_gen: done`);
