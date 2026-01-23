// Scroll-based carousel auto-selection (works on both mobile and desktop)
// Single source of truth for which carousel is active

import { selectCarousel, updateArrowStates, getSelectedCarousel } from './carousel';
import { querySelector } from '../utils/dom';

// Store element references
let professionalRow: HTMLElement | null = null;
let personalRow: HTMLElement | null = null;

/**
 * Throttle function to limit event frequency
 */
function throttle<T extends (...args: unknown[]) => void>(func: T, limit: number): T {
  let inThrottle = false;
  return function (this: unknown, ...args: unknown[]) {
    if (!inThrottle) {
      func.apply(this, args);
      inThrottle = true;
      setTimeout(() => {
        inThrottle = false;
      }, limit);
    }
  } as T;
}

/**
 * Get the center Y position of an element relative to viewport
 */
function getElementCenterY(element: HTMLElement): number {
  const rect = element.getBoundingClientRect();
  return rect.top + rect.height / 2;
}

/**
 * Select carousel based on which one is closest to viewport center
 */
function selectCarouselByScroll(): void {
  if (!professionalRow || !personalRow) return;

  const viewportCenter = window.innerHeight / 2;

  const professionalCenter = getElementCenterY(professionalRow);
  const personalCenter = getElementCenterY(personalRow);

  const professionalDistance = Math.abs(viewportCenter - professionalCenter);
  const personalDistance = Math.abs(viewportCenter - personalCenter);

  // Select whichever is closer to viewport center
  if (professionalDistance < personalDistance) {
    if (getSelectedCarousel() !== 'professional') {
      selectCarousel('professional');
      updateArrowStates();
    }
  } else {
    if (getSelectedCarousel() !== 'personal') {
      selectCarousel('personal');
      updateArrowStates();
    }
  }
}

/**
 * Initialize scroll-based auto-selection
 */
export function initMobileScrollSelection(): void {
  professionalRow = querySelector<HTMLElement>('.professional-section .carousel-row');
  personalRow = querySelector<HTMLElement>('.personal-section .carousel-row');

  if (!professionalRow || !personalRow) return;

  // Throttled scroll handler
  const throttledSelect = throttle(selectCarouselByScroll, 100);

  // Listen for scroll
  window.addEventListener('scroll', throttledSelect, { passive: true });

  // Initial selection after layout
  requestAnimationFrame(() => {
    requestAnimationFrame(selectCarouselByScroll);
  });

  // Re-select on resize
  window.addEventListener('resize', throttle(selectCarouselByScroll, 200), { passive: true });
}
