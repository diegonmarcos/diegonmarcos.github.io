// Icon View Toggle Module
// Builds a compact icon grid (9 per row) of every link already rendered by
// portal-render.ts (inside `.section-box` > `.swiper-slide` markup) and
// toggles an overlay showing that grid vs. the normal swiper card view.
// Reuses each link's own white SVG icon — purely additive, never touches
// portal-render.ts or the JSON data.
//
// Hierarchy mirrored from the real card markup (see portal-render.ts):
//   .section-box            -> h2.box-title             -> iconview-group-title
//   .swiper-slide            -> h2.section-title          -> iconview-subgroup-title  (card title, e.g. "REPOS")
//   .tools-column            -> .tools-column__header      -> iconview-subsubgroup-title (e.g. "Front-end")
//   .profile-section / row   -> h3.subsection-title        -> iconview-subsubgroup-title (e.g. "MyMedia")
// Links with no such inner heading (top_links, primary_link, profile-icons
// rows, ...) are placed directly under the card subtitle with no third level,
// matching the fact that the card view shows no heading for them either.

import { getElementById, addClass, removeClass } from '../utils/dom';

/** Fallback icon when a source link carries no <img>. */
const FALLBACK_ICON = 'public/icons/link.svg';

/** Inner headings that introduce a card's own column/group structure. */
const SUBSUBGROUP_HEADING_SELECTOR = '.subsection-title, .tools-column__header';

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
   * Build one `.iconview-tile` from a rendered anchor. Returns null when the
   * anchor carries no usable href/label (e.g. decorative or empty links).
   */
  function buildTile(a: HTMLAnchorElement): HTMLAnchorElement | null {
    const href = a.getAttribute('href') ?? '';
    const label = (a.getAttribute('title') || a.textContent || '').trim();
    if (!href || href === '#' || !label) return null;

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

    return tile;
  }

  /**
   * Append a `.iconview-grid` of tiles built from `anchors` to `parent`,
   * de-duping (by href|label) against `seen` — a Set scoped to the caller so
   * that the same link repeated under a *different* card/column still shows.
   * Appends nothing (and returns false) when no anchor yields a usable tile.
   */
  function appendGrid(parent: HTMLElement, anchors: HTMLAnchorElement[], seen: Set<string>): boolean {
    const grid = document.createElement('div');
    grid.className = 'iconview-grid';

    anchors.forEach((a) => {
      const href = a.getAttribute('href') ?? '';
      const label = (a.getAttribute('title') || a.textContent || '').trim();
      const key = `${href}|${label}`;
      if (!href || href === '#' || !label || seen.has(key)) return;
      seen.add(key);

      const tile = buildTile(a);
      if (tile) grid.appendChild(tile);
    });

    if (grid.children.length === 0) return false;
    parent.appendChild(grid);
    return true;
  }

  /**
   * Split a card's links into runs keyed by the nearest preceding heading
   * (`.subsection-title` / `.tools-column__header`), mirroring the card's own
   * in-flow column/group structure. Anchors before any heading land under the
   * `null` key (rendered with no third heading level, same as the card view).
   */
  function groupLinksByHeading(card: HTMLElement): Map<string | null, HTMLAnchorElement[]> {
    const groups = new Map<string | null, HTMLAnchorElement[]>();
    let currentHeading: string | null = null;

    const walker = card.querySelectorAll<HTMLElement>(`${SUBSUBGROUP_HEADING_SELECTOR}, a[href]`);
    walker.forEach((node) => {
      // A tools-column__header can itself be an <a> — the combined selector
      // still returns it once, matched here as a heading, not as a tile.
      if (node.matches(SUBSUBGROUP_HEADING_SELECTOR)) {
        currentHeading = node.textContent?.trim() || null;
        return;
      }

      const list = groups.get(currentHeading) ?? [];
      list.push(node as HTMLAnchorElement);
      groups.set(currentHeading, list);
    });

    return groups;
  }

  /**
   * Read the already-rendered card markup (built by portal-render.ts) and
   * rebuild it as Section -> Card -> (column/group) -> icons, mirroring the
   * normal card view's hierarchy. Built once, lazily, on first open.
   */
  function buildGrid(): void {
    if (built) return;
    built = true;

    const sections = document.querySelectorAll<HTMLElement>('main .section-box');

    sections.forEach((section) => {
      const boxTitle = section.querySelector('.box-title')?.textContent?.trim() ?? '';

      const groupEl = document.createElement('div');
      groupEl.className = 'iconview-group';

      const groupTitle = document.createElement('h2');
      groupTitle.className = 'iconview-group-title';
      groupTitle.textContent = boxTitle;
      groupEl.appendChild(groupTitle);

      // Swiper (loop: true) clones slides at runtime for the loop illusion;
      // skip those clones so each card is represented exactly once.
      const cards = section.querySelectorAll<HTMLElement>('.swiper-slide:not(.swiper-slide-duplicate)');
      let sectionHasContent = false;

      cards.forEach((card) => {
        const cardTitle = card.querySelector('.section-title')?.textContent?.trim() ?? '';

        const cardEl = document.createElement('div');
        cardEl.className = 'iconview-card';

        if (cardTitle) {
          const subTitle = document.createElement('h3');
          subTitle.className = 'iconview-subgroup-title';
          subTitle.textContent = cardTitle;
          cardEl.appendChild(subTitle);
        }

        // De-dupe scoped to this one card: the same href can legitimately
        // repeat under a different card (e.g. a shared social link), so
        // de-duping globally would silently drop real tiles.
        const seen = new Set<string>();
        let cardHasContent = false;

        groupLinksByHeading(card).forEach((anchors, heading) => {
          // Build the grid into a detached fragment first so an empty group
          // (every anchor already de-duped/invalid) never leaves behind a
          // bare heading with nothing under it.
          const holder = document.createElement('div');
          if (!appendGrid(holder, anchors, seen)) return;

          if (heading) {
            const subSubTitle = document.createElement('h4');
            subSubTitle.className = 'iconview-subsubgroup-title';
            subSubTitle.textContent = heading;
            cardEl.appendChild(subSubTitle);
          }
          cardEl.appendChild(holder.firstElementChild as HTMLElement);
          cardHasContent = true;
        });

        // Skip cards that yielded no usable links.
        if (!cardHasContent) return;

        groupEl.appendChild(cardEl);
        sectionHasContent = true;
      });

      // Skip sections that yielded no usable cards.
      if (!sectionHasContent) return;

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
