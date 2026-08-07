// Card view modes — two only:
//   cards-view-single-card (default): 3 groups stacked full-height, one
//     card visible at a time via swiper.
//   cards-view-all-cards (zoom out): 3 groups placed side by side and
//     shrunk to fit, so all of them are visible together.
// zoom-in/zoom-out buttons just toggle between the two.

import { getElementById } from '../utils/dom';

const ALL_CARDS_CLASS = 'cards-view-all-cards';

export function initZoomToggle(): void {
  const zoomOutBtn = getElementById<HTMLButtonElement>('zoom-out-btn');
  const zoomInBtn = getElementById<HTMLButtonElement>('zoom-in-btn');
  const root = document.documentElement;

  zoomOutBtn?.addEventListener('click', () => root.classList.add(ALL_CARDS_CLASS));
  zoomInBtn?.addEventListener('click', () => root.classList.remove(ALL_CARDS_CLASS));
}
