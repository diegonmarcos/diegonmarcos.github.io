// List View Toggle Module
// Builds a flat, grouped list of every link already rendered by
// portal-render.ts (inside `.section-box` > `.swiper-slide` markup) and
// toggles an overlay showing that list vs. the normal swiper card view.
// Purely additive — never touches portal-render.ts or the JSON data.

import { getElementById, addClass, removeClass } from '../utils/dom';

/**
 * Initialize the "List View" FAB toggle.
 */
export function initListViewToggle(): void {
  const btn = getElementById<HTMLAnchorElement>('listview-btn');
  const overlay = getElementById<HTMLElement>('listview-overlay');
  const closeBtn = getElementById<HTMLButtonElement>('listview-overlay-close');
  const listContent = getElementById<HTMLElement>('listview-content');

  if (!btn || !overlay || !closeBtn || !listContent) return;

  let built = false;

  /**
   * Read the already-rendered card markup (built by portal-render.ts) and
   * flatten it into a grouped list. Built once, lazily, on first open.
   */
  function buildList(): void {
    if (built) return;
    built = true;

    const sections = document.querySelectorAll<HTMLElement>('main .section-box');
    sections.forEach((section) => {
      const boxTitle = section.querySelector('.box-title')?.textContent?.trim() ?? '';

      const groupEl = document.createElement('div');
      groupEl.className = 'listview-group';

      const groupTitle = document.createElement('h2');
      groupTitle.className = 'listview-group-title';
      groupTitle.textContent = boxTitle;
      groupEl.appendChild(groupTitle);

      const slides = section.querySelectorAll<HTMLElement>('.swiper-slide');
      slides.forEach((slide) => {
        const links = slide.querySelectorAll<HTMLAnchorElement>('a[href]');
        if (!links.length) return;

        const subTitle = slide.querySelector('.section-title')?.textContent?.trim();
        if (subTitle) {
          const subTitleEl = document.createElement('h3');
          subTitleEl.className = 'listview-subgroup-title';
          subTitleEl.textContent = subTitle;
          groupEl.appendChild(subTitleEl);
        }

        const ul = document.createElement('ul');
        ul.className = 'listview-links';
        links.forEach((a) => {
          const li = document.createElement('li');
          const clone = document.createElement('a');
          clone.href = a.href;
          clone.target = a.target || '_blank';
          clone.rel = 'noopener';
          clone.textContent = a.textContent?.trim() || a.title || a.href;
          li.appendChild(clone);
          ul.appendChild(li);
        });
        groupEl.appendChild(ul);
      });

      listContent.appendChild(groupEl);
    });
  }

  function openOverlay(): void {
    buildList();
    addClass(overlay, 'active');
  }

  function closeOverlay(): void {
    removeClass(overlay, 'active');
  }

  btn.addEventListener('click', (e) => {
    e.preventDefault();
    if (overlay.classList.contains('active')) {
      closeOverlay();
    } else {
      openOverlay();
    }
  });

  closeBtn.addEventListener('click', closeOverlay);

  overlay.addEventListener('click', (e) => {
    if (e.target === overlay) closeOverlay();
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && overlay.classList.contains('active')) closeOverlay();
  });
}
