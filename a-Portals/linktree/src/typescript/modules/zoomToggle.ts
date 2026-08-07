// Zoom out/in: two levels only — zoomed out shows all 3 card groups
// (Professional Profiles / Projects / Personal Profiles) at once via
// CSS zoom; zoomed in is the default per-card swiper view.

import { getElementById } from '../utils/dom';

export function initZoomToggle(): void {
  const zoomOutBtn = getElementById<HTMLButtonElement>('zoom-out-btn');
  const zoomInBtn = getElementById<HTMLButtonElement>('zoom-in-btn');
  const root = document.documentElement;

  zoomOutBtn?.addEventListener('click', () => root.classList.add('zoomed-out'));
  zoomInBtn?.addEventListener('click', () => root.classList.remove('zoomed-out'));
}
