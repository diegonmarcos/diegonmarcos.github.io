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

function renderBreadcrumb(): HTMLElement {
  const bc = document.createElement('nav');
  bc.className = 'island';

  const root = document.createElement('button');
  root.className = 'crumb';
  root.type = 'button';
  root.textContent = 'All';
  root.addEventListener('click', () => navigateToLevel(0));
  bc.appendChild(root);

  navPath.forEach((folder, i) => {
    const sep = document.createElement('span');
    sep.className = 'crumb-sep';
    sep.textContent = '›';
    bc.appendChild(sep);

    const item = document.createElement('button');
    item.className = 'crumb';
    item.type = 'button';
    item.textContent = folder.title;
    if (i < navPath.length - 1) {
      item.addEventListener('click', () => navigateToLevel(i + 1));
    } else {
      item.classList.add('crumb--active');
      item.disabled = true;
    }
    bc.appendChild(item);
  });

  return bc;
}

function renderFolder(folder: TreeNode): HTMLElement {
  const tile = document.createElement('button');
  tile.className = 'tile';
  tile.type = 'button';
  tile.setAttribute('aria-label', `${folder.title} — ${folder.children.length} items`);

  // 2x2 mosaic of the first four children, like the APK's folder tiles.
  const mosaic = document.createElement('div');
  mosaic.className = 'tile__mosaic';
  for (let i = 0; i < 4; i++) {
    const child = folder.children[i];
    const cell = document.createElement('span');
    if (child) paintIcon(cell, child.type === 'folder' ? FOLDER_ICON : child.icon ?? FALLBACK_ICON);
    mosaic.appendChild(cell);
  }
  tile.appendChild(mosaic);

  const label = document.createElement('span');
  label.className = 'tile__label';
  label.textContent = folder.title;
  tile.appendChild(label);

  const count = document.createElement('span');
  count.className = 'tile__count';
  count.textContent = String(folder.children.length);
  tile.appendChild(count);

  tile.addEventListener('click', () => navigateInto(folder));
  return tile;
}

function renderLink(link: TreeNode): HTMLElement {
  const tile = document.createElement('a');
  tile.className = 'tile';
  tile.href = link.url ?? '#';
  tile.title = link.title;
  // The portal is embedded in linktree as an iframe, so every link must break
  // out of it — without this a target site loads inside the tile grid, and any
  // site sending X-Frame-Options just renders blank.
  tile.target = '_top';
  tile.rel = 'noopener';
  if (link.download) tile.setAttribute('download', link.download);

  const icon = document.createElement('span');
  icon.className = 'tile__icon';
  paintIcon(icon, link.icon ?? FALLBACK_ICON);
  tile.appendChild(icon);

  const label = document.createElement('span');
  label.className = 'tile__label';
  label.textContent = link.title;
  tile.appendChild(label);

  return tile;
}

function render(): void {
  const shell = document.getElementById('shell');
  if (!shell) return;
  shell.innerHTML = '';
  shell.appendChild(renderBreadcrumb());

  const items = currentChildren();
  if (items.length === 0) {
    const empty = document.createElement('p');
    empty.className = 'empty';
    empty.textContent = 'Nothing here.';
    shell.appendChild(empty);
    return;
  }

  const grid = document.createElement('div');
  grid.className = 'tile-grid';
  for (const item of items) {
    grid.appendChild(item.type === 'folder' ? renderFolder(item) : renderLink(item));
  }
  shell.appendChild(grid);
}

export function initIconView(data: TreeNode[]): void {
  tree = data;
  navPath = [];
  render();

  // Depth 0 is the root level; without it the first Back would leave the page
  // instead of doing nothing at the root.
  history.replaceState({ depth: 0 }, '');

  // Escape and the browser/system Back gesture both mean "up one level".
  // Escape unwinds navPath directly; Back unwinds history, and popstate then
  // trims navPath to whatever depth we landed on — never past it, so a
  // forward-navigation entry cannot re-enter a folder that is gone.
  window.addEventListener('popstate', (e) => {
    const st = e.state as { depth?: number } | null;
    const depth = typeof st?.depth === 'number' ? st.depth : 0;
    if (depth < navPath.length) {
      navPath = navPath.slice(0, depth);
      render();
    }
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && navPath.length > 0) {
      // history.back() so the two paths cannot disagree about depth; popstate
      // does the actual unwinding.
      history.back();
    }
  });
}
