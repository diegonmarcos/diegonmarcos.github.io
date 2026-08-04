// Icon Grid View — Folder-based navigation (Android-inspired)
// Reads the DOM rendered by portal-render.ts, builds a tree of
// Section → Card → Subgroup → Link, and provides folder navigation
// with glassmorphism styling.
//
// Hierarchy:
//   .section-box            → Level 1 folder (3: Professional, Projects, Personal)
//   .swiper-slide            → Level 2 folder (cards: Repos, Suite, Nexus…)
//   .subsection-title /
//   .tools-column__header    → Level 3 folder (subgroups: Front-end, Back-end…)
//   a[href]                   → Level 4: link tiles

import { getElementById, addClass, removeClass } from '../utils/dom';

// ---------------------------------------------------------------------------
// Types
// ---------------------------------------------------------------------------

interface TreeNode {
  type: 'folder' | 'link';
  id: string;
  title: string;
  children: TreeNode[];
  // link-only fields
  url?: string;
  icon?: string;
  target?: string;
  rel?: string;
  download?: string;
}

// ---------------------------------------------------------------------------
// Constants
// ---------------------------------------------------------------------------

const FALLBACK_ICON = 'public/icons/link.svg';
const FOLDER_ICON = 'public/icons/file-stack.svg';
const SUBGROUP_SELECTOR = '.subsection-title, .tools-column__header';

// ---------------------------------------------------------------------------
// Tree building (reads DOM once, lazy on first open)
// ---------------------------------------------------------------------------

function buildTree(): TreeNode[] {
  const sections = document.querySelectorAll<HTMLElement>('main .section-box');
  const tree: TreeNode[] = [];

  sections.forEach((section, si) => {
    const boxTitle = section.querySelector('.box-title')?.textContent?.trim() ?? '';
    if (!boxTitle) return;

    const sectionNode: TreeNode = {
      type: 'folder',
      id: `s${si}`,
      title: boxTitle,
      children: [],
    };

    const cards = section.querySelectorAll<HTMLElement>(
      '.swiper-slide:not(.swiper-slide-duplicate)',
    );
    cards.forEach((card, ci) => {
      const cardTitle =
        card.querySelector('.section-title')?.textContent?.trim() ?? '';
      if (!cardTitle) return;

      const cardNode: TreeNode = {
        type: 'folder',
        id: `s${si}c${ci}`,
        title: cardTitle,
        children: [],
      };

      const groups = groupLinksByHeading(card);

      groups.forEach((anchors, heading) => {
        if (heading === null) {
          // Links without a heading → add directly to the card folder
          anchors.forEach((a) => {
            const node = anchorToNode(a);
            if (node) cardNode.children.push(node);
          });
        } else {
          // Links under a heading → create a subgroup folder
          const subNode: TreeNode = {
            type: 'folder',
            id: `s${si}c${ci}g${heading}`,
            title: heading,
            children: [],
          };
          anchors.forEach((a) => {
            const node = anchorToNode(a);
            if (node) subNode.children.push(node);
          });
          if (subNode.children.length > 0) {
            cardNode.children.push(subNode);
          }
        }
      });

      if (cardNode.children.length > 0) {
        sectionNode.children.push(cardNode);
      }
    });

    if (sectionNode.children.length > 0) {
      tree.push(sectionNode);
    }
  });

  return tree;
}

/**
 * Group `<a href>` elements inside a card by their nearest preceding
 * `.subsection-title` or `.tools-column__header` in document order.
 * Links before any heading land under the `null` key.
 */
function groupLinksByHeading(
  card: HTMLElement,
): Map<string | null, HTMLAnchorElement[]> {
  const groups = new Map<string | null, HTMLAnchorElement[]>();
  let currentHeading: string | null = null;

  const walker = card.querySelectorAll<HTMLElement>(
    `${SUBGROUP_SELECTOR}, a[href]`,
  );
  walker.forEach((node) => {
    // A tools-column__header can itself be an <a> — matched here as a
    // heading, not as a tile.
    if (node.matches(SUBGROUP_SELECTOR)) {
      currentHeading = node.textContent?.trim() || null;
      return;
    }
    const list = groups.get(currentHeading) ?? [];
    list.push(node as HTMLAnchorElement);
    groups.set(currentHeading, list);
  });

  return groups;
}

/** Convert a DOM anchor into a link TreeNode. Returns null for invalid links. */
function anchorToNode(a: HTMLAnchorElement): TreeNode | null {
  const href = a.getAttribute('href') ?? '';
  const label = (a.getAttribute('title') || a.textContent || '').trim();
  if (!href || href === '#' || !label) return null;

  const srcImg = a.querySelector('img');
  return {
    type: 'link',
    id: href,
    title: label,
    children: [],
    url: href,
    icon: srcImg?.getAttribute('src') ?? undefined,
    target: a.getAttribute('target') ?? undefined,
    rel: a.getAttribute('rel') ?? undefined,
    download: a.getAttribute('download') ?? undefined,
  };
}

// ---------------------------------------------------------------------------
// Navigation state
// ---------------------------------------------------------------------------

let tree: TreeNode[] = [];
let navPath: TreeNode[] = []; // stack from root to current folder
let built = false;

function currentChildren(): TreeNode[] {
  if (navPath.length === 0) return tree;
  return navPath[navPath.length - 1].children;
}

function navigateInto(folder: TreeNode): void {
  navPath.push(folder);
  renderLevel();
}

function navigateBack(): void {
  if (navPath.length > 0) {
    navPath.pop();
    renderLevel();
  }
}

function navigateToLevel(index: number): void {
  navPath = navPath.slice(0, index);
  renderLevel();
}

// ---------------------------------------------------------------------------
// Rendering
// ---------------------------------------------------------------------------

function renderLevel(): void {
  const content = getElementById<HTMLElement>('iconview-content');
  if (!content) return;

  content.innerHTML = '';
  content.appendChild(renderBreadcrumb());
  content.appendChild(renderGrid(currentChildren()));
}

// --- Breadcrumb ---

function renderBreadcrumb(): HTMLElement {
  const bc = document.createElement('nav');
  bc.className = 'iconview-breadcrumb';

  // "All" → always goes to root
  const root = document.createElement('button');
  root.className = 'iconview-breadcrumb-item';
  root.textContent = 'All';
  root.type = 'button';
  root.addEventListener('click', () => navigateToLevel(0));
  bc.appendChild(root);

  navPath.forEach((folder, i) => {
    const sep = document.createElement('span');
    sep.className = 'iconview-breadcrumb-sep';
    sep.textContent = '›';
    bc.appendChild(sep);

    const item = document.createElement('button');
    item.className = 'iconview-breadcrumb-item';
    item.textContent = folder.title;
    item.type = 'button';
    if (i < navPath.length - 1) {
      // clickable breadcrumb — jump to that level
      item.addEventListener('click', () => navigateToLevel(i + 1));
    } else {
      // current level — non-clickable, highlighted
      item.classList.add('iconview-breadcrumb-item--active');
    }
    bc.appendChild(item);
  });

  return bc;
}

// --- Grid ---

function renderGrid(items: TreeNode[]): HTMLElement {
  const grid = document.createElement('div');
  grid.className = 'iconview-grid';

  items.forEach((item) => {
    if (item.type === 'folder') {
      grid.appendChild(renderFolder(item));
    } else {
      grid.appendChild(renderLink(item));
    }
  });

  return grid;
}

// --- Folder tile ---

function renderFolder(folder: TreeNode): HTMLElement {
  const tile = document.createElement('button');
  tile.className = 'iconview-tile iconview-folder';
  tile.type = 'button';
  tile.setAttribute('aria-label', `${folder.title} — ${folder.children.length} items`);

  // 2×2 preview grid of the first 4 children
  const preview = document.createElement('div');
  preview.className = 'iconview-folder-preview';

  const previewItems = folder.children.slice(0, 4);
  for (let i = 0; i < 4; i++) {
    const child = previewItems[i];
    if (child && child.type === 'link' && child.icon) {
      const img = document.createElement('img');
      img.className = 'iconview-folder-preview-icon';
      img.src = child.icon;
      img.alt = '';
      preview.appendChild(img);
    } else if (child && child.type === 'folder') {
      const img = document.createElement('img');
      img.className = 'iconview-folder-preview-icon';
      img.src = FOLDER_ICON;
      img.alt = '';
      preview.appendChild(img);
    } else {
      const ph = document.createElement('span');
      ph.className = 'iconview-folder-preview-empty';
      preview.appendChild(ph);
    }
  }

  tile.appendChild(preview);

  // Label
  const label = document.createElement('span');
  label.className = 'iconview-tile-label';
  label.textContent = folder.title;
  tile.appendChild(label);

  // Count badge (top-right corner)
  const count = document.createElement('span');
  count.className = 'iconview-folder-count';
  count.textContent = String(folder.children.length);
  tile.appendChild(count);

  tile.addEventListener('click', (e) => {
    e.stopPropagation();
    navigateInto(folder);
  });

  return tile;
}

// --- Link tile ---

function renderLink(link: TreeNode): HTMLElement {
  const tile = document.createElement('a');
  tile.className = 'iconview-tile';
  tile.href = link.url ?? '#';
  tile.title = link.title;
  if (link.target) tile.target = link.target;
  if (link.rel) tile.rel = link.rel;
  if (link.download) tile.setAttribute('download', link.download);

  const icon = document.createElement('img');
  icon.className = 'iconview-tile-icon';
  icon.src = link.icon ?? FALLBACK_ICON;
  icon.alt = '';
  icon.loading = 'lazy';
  tile.appendChild(icon);

  const label = document.createElement('span');
  label.className = 'iconview-tile-label';
  label.textContent = link.title;
  tile.appendChild(label);

  return tile;
}

// ---------------------------------------------------------------------------
// Public API
// ---------------------------------------------------------------------------

export function initIconViewToggle(): void {
  const btn = getElementById<HTMLAnchorElement>('iconview-btn');
  const overlay = getElementById<HTMLElement>('iconview-overlay');
  const closeBtn = getElementById<HTMLButtonElement>('iconview-overlay-close');
  const content = getElementById<HTMLElement>('iconview-content');

  if (!btn || !overlay || !closeBtn || !content) return;

  function open(): void {
    if (!built) {
      tree = buildTree();
      built = true;
    }
    navPath = [];
    renderLevel();
    addClass(overlay!, 'is-open');
    addClass(document.body, 'iconview-open');
    closeBtn!.focus();
  }

  function close(): void {
    removeClass(overlay!, 'is-open');
    removeClass(document.body, 'iconview-open');
    btn!.focus();
  }

  // Toggle on button click
  btn.addEventListener('click', (e) => {
    e.preventDefault();
    overlay!.classList.contains('is-open') ? close() : open();
  });

  // Close button
  closeBtn.addEventListener('click', close);

  // Backdrop click: navigate back, or close at root
  overlay.addEventListener('click', (e) => {
    if (e.target !== overlay) return;
    if (navPath.length > 0) navigateBack();
    else close();
  });

  // Escape key: navigate back, or close at root
  document.addEventListener('keydown', (e) => {
    if (e.key !== 'Escape' || !overlay!.classList.contains('is-open')) return;
    if (navPath.length > 0) navigateBack();
    else close();
  });
}