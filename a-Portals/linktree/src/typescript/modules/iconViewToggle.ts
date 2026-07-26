// Icon View Toggle Module
// Builds a compact icon grid (9 per row) of every link already rendered by
// portal-render.ts (inside `.section-box` > `.swiper-slide` markup) and
// toggles an overlay showing that grid vs. the normal swiper card view.
// Reuses each link's own white SVG icon — purely additive, never touches
// portal-render.ts or the JSON data.

import { getElementById, addClass, removeClass } from '../utils/dom';

/** Fallback icon when a source link carries no <img>. */
const FALLBACK_ICON = 'public/icons/link.svg';

/**
 * Initialize the "Icon View" FAB toggle.
 */
export function initIconViewToggle(): void {
  const btn = getElementById<HTMLAnchorElement>('iconview-btn');
  const overlay = getElementById<HTMLElement>('iconview-overlay');
  const closeBtn = getElementById<HTMLButtonElement>('iconview-overlay-close');
  const gridContent = getElementById<HTMLElement>('iconview-content');

  if (!btn || !overlay || !closeBtn || !gridContent) return;

  let built = false;

  /**
   * Read the already-rendered card markup (built by portal-render.ts) and
   * flatten it into an icon grid. Built once, lazily, on first open.
   */
  function buildGrid(): void {
    if (built) return;
    built = true;

    const seen = new Set<string>();
    const sections = document.querySelectorAll<HTMLElement>('main .section-box');

    sections.forEach((section) => {
      const boxTitle = section.querySelector('.box-title')?.textContent?.trim() ?? '';

      const groupEl = document.createElement('div');
      groupEl.className = 'iconview-group';

      const groupTitle = document.createElement('h2');
      groupTitle.className = 'iconview-group-title';
      groupTitle.textContent = boxTitle;
      groupEl.appendChild(groupTitle);

      const grid = document.createElement('div');
      grid.className = 'iconview-grid';

      section.querySelectorAll<HTMLAnchorElement>('a[href]').forEach((a) => {
        const href = a.getAttribute('href') ?? '';
        const label = (a.getAttribute('title') || a.textContent || '').trim();
        if (!href || href === '#' || !label) return;

        // De-dupe: the same link can appear in more than one card.
        const key = `${href}|${label}`;
        if (seen.has(key)) return;
        seen.add(key);

        const tile = document.createElement('a');
        tile.className = 'iconview-tile';
        tile.href = href;
        tile.title = label;
        if (a.hasAttribute('target')) tile.target = a.getAttribute('target') as string;
        if (a.hasAttribute('rel')) tile.rel = a.getAttribute('rel') as string;
        if (a.hasAttribute('download')) {
          tile.setAttribute('download', a.getAttribute('download') as string);
        }

        const srcImg = a.querySelector('img');
        const icon = document.createElement('img');
        icon.className = 'iconview-tile-icon';
        icon.src = srcImg?.getAttribute('src') ?? FALLBACK_ICON;
        icon.alt = '';
        icon.loading = 'lazy';
        tile.appendChild(icon);

        const caption = document.createElement('span');
        caption.className = 'iconview-tile-label';
        caption.textContent = label;
        tile.appendChild(caption);

        grid.appendChild(tile);
      });

      // Skip sections that yielded no usable links.
      if (grid.children.length === 0) return;

      groupEl.appendChild(grid);
      gridContent!.appendChild(groupEl);
    });
  }

  function open(): void {
    buildGrid();
    addClass(overlay!, 'is-open');
    addClass(document.body, 'iconview-open');
    closeBtn!.focus();
  }

  function close(): void {
    removeClass(overlay!, 'is-open');
    removeClass(document.body, 'iconview-open');
    btn!.focus();
  }

  btn.addEventListener('click', (e) => {
    e.preventDefault();
    if (overlay!.classList.contains('is-open')) close();
    else open();
  });

  closeBtn.addEventListener('click', close);

  // Click the backdrop (but not the panel) to dismiss.
  overlay.addEventListener('click', (e) => {
    if (e.target === overlay) close();
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && overlay!.classList.contains('is-open')) close();
  });
}
