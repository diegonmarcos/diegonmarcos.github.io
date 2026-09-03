// Folder navigation + rendering. Ported from linktree's iconViewToggle.ts,
// minus the overlay: this portal IS the view, so there is no open/close,
// no backdrop and no body-scroll locking to unwind.

import type { TreeNode } from '../types';

const FALLBACK_ICON = 'link';
const FOLDER_ICON = 'file-stack';

// ---------------------------------------------------------------------------
// Icons
// ---------------------------------------------------------------------------
// The glyph is INLINED into the span rather than set as an <img src> or a CSS
// mask. cloud-mobile's _tiles.scss records why, and it applies verbatim here:
// the tint comes from `color` through the SVG's own currentColor, an <img>
// cannot inherit that, and Android WebView renders `mask-image` as a solid
// square. All 55 icons in linktree/src/public/icons use currentColor, so they
// come out lavender on the dark glass with no per-icon work.
//
// Fetched once per name and cached. Failures resolve to null rather than
// throwing, so one missing file cannot blank a whole grid.
const iconCache = new Map<string, Promise<string | null>>();

function loadIcon(name: string): Promise<string | null> {
  const cached = iconCache.get(name);
  if (cached) return cached;
  const p = fetch(`public/icons/${name}.svg`)
    .then((r) => (r.ok ? r.text() : null))
    .catch(() => null);
  iconCache.set(name, p);
  return p;
}

/** Fill `host` with the named glyph once it arrives. */
function paintIcon(host: HTMLElement, name: string): void {
  void loadIcon(name).then((svg) => {
    if (svg) { host.innerHTML = svg; return; }
    if (name !== FALLBACK_ICON) paintIcon(host, FALLBACK_ICON);
  });
}

// ---------------------------------------------------------------------------
// Navigation state
// ---------------------------------------------------------------------------

let tree: TreeNode[] = [];
let navPath: TreeNode[] = []; // root -> current folder

function currentChildren(): TreeNode[] {
  return navPath.length === 0 ? tree : navPath[navPath.length - 1].children;
}

function navigateInto(folder: TreeNode): void {
  navPath.push(folder);
  // One history entry per level, so Back means "up one folder" — the same
  // thing it means in the launcher this layout mimics. Only the DEPTH is
  // stored: the path is still in navPath, and restoring by depth cannot go
  // stale the way a serialised path could.
  history.pushState({ depth: navPath.length }, '');
  render();
}
// Both ways UP go through history, so depth has exactly one source of truth
// and the Back gesture can never disagree with the breadcrumb. popstate does
// the actual unwinding; there is deliberately no direct navPath.pop() here.
function navigateToLevel(i: number): void {
  const steps = i - navPath.length;
  if (steps < 0) history.go(steps);
}

// ---------------------------------------------------------------------------
// Rendering
// ---------------------------------------------------------------------------
// Every class below is cloud-mobile's, not this portal's. style.css IS
// cloud-mobile's stylesheet — src/scss is a symlink to it — so the markup has
// to match its selectors exactly or nothing paints. Reimplementing a lookalike
// was the first attempt here and it was wrong: it reproduced the palette and
// the tile grid, and none of the shell.

function renderTabs(): HTMLElement {
  // page-tabs-bar. In the app these are a section's sibling pages (Apps /
  // Lnktree / C3 / Configs); here they are the path into the tree. Same
  // affordance — a flat row of chips with the current one is-active — so it
  // reuses that markup instead of inventing a breadcrumb of its own.
  const bar = document.createElement('div');
  bar.className = 'page-tabs-bar';
  const tabs = document.createElement('div');
  tabs.className = 'page-tabs';
  tabs.setAttribute('role', 'tablist');
  bar.appendChild(tabs);

  const crumb = (label: string, active: boolean, go?: () => void): void => {
    const a = document.createElement('a');
    a.className = active ? 'page-tabs__item is-active' : 'page-tabs__item';
    a.textContent = label;
    if (go) {
      a.href = '#';
      a.addEventListener('click', (e) => { e.preventDefault(); go(); });
    }
    tabs.appendChild(a);
  };

  crumb('All', navPath.length === 0,
    navPath.length === 0 ? undefined : () => navigateToLevel(0));
  navPath.forEach((folder, i) => {
    const last = i === navPath.length - 1;
    crumb(folder.title, last, last ? undefined : () => navigateToLevel(i + 1));
  });

  return bar;
}

/** span.tile__icon carrying an inlined, currentColor-tinted glyph. */
function tileIcon(name: string): HTMLElement {
  const icon = document.createElement('span');
  icon.className = 'tile__icon';
  icon.setAttribute('aria-hidden', 'true');
  paintIcon(icon, name);
  return icon;
}

function tileLabel(text: string): HTMLElement {
  const label = document.createElement('span');
  label.className = 'tile__label';
  label.textContent = text;
  return label;
}

function renderFolder(folder: TreeNode): HTMLElement {
  const tile = document.createElement('button');
  tile.className = 'tile';
  tile.type = 'button';
  tile.setAttribute('role', 'listitem');
  tile.setAttribute('aria-label', `${folder.title} — ${folder.children.length} items`);
  tile.appendChild(tileIcon(FOLDER_ICON));
  tile.appendChild(tileLabel(folder.title));
  tile.addEventListener('click', () => navigateInto(folder));
  return tile;
}

function renderLink(link: TreeNode): HTMLElement {
  const tile = document.createElement('a');
  tile.className = 'tile';
  tile.setAttribute('role', 'listitem');
  tile.href = link.url ?? '#';
  tile.title = link.title;
  // Embedded in linktree as an iframe, so links must break out of it —
  // otherwise the target loads inside the tile grid, and any site sending
  // X-Frame-Options renders blank.
  tile.target = '_top';
  tile.rel = 'noopener';
  if (link.download) tile.setAttribute('download', link.download);
  tile.appendChild(tileIcon(link.icon ?? FALLBACK_ICON));
  tile.appendChild(tileLabel(link.title));
  return tile;
}

function render(): void {
  const content = document.getElementById('content');
  if (!content) return;
  content.innerHTML = '';
  content.appendChild(renderTabs());

  const group = document.createElement('section');
  group.className = 'tile-group';

  const title = document.createElement('h2');
  title.className = 'tile-group__title';
  title.textContent = navPath.length === 0 ? 'All' : navPath[navPath.length - 1].title;
  group.appendChild(title);

  const grid = document.createElement('div');
  grid.className = 'tile-grid';
  grid.setAttribute('role', 'list');
  for (const item of currentChildren()) {
    grid.appendChild(item.type === 'folder' ? renderFolder(item) : renderLink(item));
  }
  group.appendChild(grid);
  content.appendChild(group);
}

/** The one genuinely live bit of the status strip, as in cloud-mobile. */
function startClock(): void {
  const el = document.getElementById('status-clock');
  if (!el) return;
  const tick = (): void => {
    const d = new Date();
    el.textContent = `${String(d.getHours()).padStart(2, '0')}:${String(d.getMinutes()).padStart(2, '0')}`;
  };
  tick();
  window.setInterval(tick, 30_000);
}

export function initIconView(data: TreeNode[]): void {
  tree = data;
  navPath = [];
  startClock();
  render();

  // Depth 0 is the root level; without it the first Back would leave the page
  // instead of doing nothing at the root.
  history.replaceState({ depth: 0 }, '');

  // Escape and the browser/system Back gesture both mean "up one level".
  // Both go THROUGH history so they cannot disagree about depth; popstate does
  // the actual unwinding.
  window.addEventListener('popstate', (e) => {
    const st = e.state as { depth?: number } | null;
    const depth = typeof st?.depth === 'number' ? st.depth : 0;
    if (depth < navPath.length) {
      navPath = navPath.slice(0, depth);
      render();
    }
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && navPath.length > 0) history.back();
  });
}
