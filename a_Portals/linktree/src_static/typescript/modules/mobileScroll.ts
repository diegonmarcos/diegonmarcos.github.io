// Scroll-based carousel auto-selection (works on both mobile and desktop)

import { selectCarousel, updateArrowStates, getSelectedCarousel } from './carousel';
import { querySelector } from '../utils/dom';

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
 * Get center Y position of a carousel
 */
function getCarouselCenterY(carousel: HTMLElement): number {
  const rect = carousel.getBoundingClientRect();
  return rect.top + rect.height / 2;
}

/**
 * Check if user has scrolled past all carousels (at bottom of page)
 */
function isScrolledPastCarousels(personalRow: HTMLElement): boolean {
  const rect = personalRow.getBoundingClientRect();
  // If the bottom of the personal row is above the viewport center, user is past carousels
  return rect.bottom < window.innerHeight / 2;
}

/**
 * Select carousel based on scroll position
 * Works on both mobile and desktop - the carousel closest to viewport center gets selected
 */
function selectCarouselByScroll(professionalRow: HTMLElement, personalRow: HTMLElement): void {
  // Don't change selection if user has scrolled past all carousels (viewing footer/controls)
  if (isScrolledPastCarousels(personalRow)) {
    return;
  }

  const viewportCenter = window.innerHeight / 2;
  const professionalCenter = getCarouselCenterY(professionalRow);
  const personalCenter = getCarouselCenterY(personalRow);

  const professionalDistance = Math.abs(viewportCenter - professionalCenter);
  const personalDistance = Math.abs(viewportCenter - personalCenter);

  const currentSelection = getSelectedCarousel();

  if (professionalDistance < personalDistance) {
    if (currentSelection !== 'professional') {
      selectCarousel('professional');
      updateArrowStates();
    }
  } else {
    if (currentSelection !== 'personal') {
      selectCarousel('personal');
      updateArrowStates();
    }
  }
}

/**
 * Initialize scroll-based auto-selection (works on all devices)
 */
export function initMobileScrollSelection(): void {
  const professionalRow = querySelector<HTMLElement>('.professional-section .carousel-row');
  const personalRow = querySelector<HTMLElement>('.personal-section .carousel-row');

  if (!professionalRow || !personalRow) return;

  const throttledSelect = throttle(
    () => selectCarouselByScroll(professionalRow, personalRow),
    150  // Throttle to reduce layout thrashing
  );

  // Add scroll listener for all devices (mobile and desktop)
  window.addEventListener('scroll', throttledSelect, { passive: true });

  // Initial selection on load
  setTimeout(() => selectCarouselByScroll(professionalRow, personalRow), 100);

  // Update on window resize (orientation change, window resize)
  window.addEventListener('resize', throttle(() => {
    selectCarouselByScroll(professionalRow, personalRow);
  }, 200), { passive: true });
}
