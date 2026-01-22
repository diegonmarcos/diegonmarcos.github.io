// Scroll-based carousel auto-selection (works on both mobile and desktop)
// Uses IntersectionObserver to avoid forced reflows from getBoundingClientRect()

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

// Cache carousel positions to avoid repeated calculations
let cachedPositions: {
  professional: { top: number; height: number };
  personal: { top: number; height: number };
} | null = null;

/**
 * Calculate and cache carousel positions (without causing reflow)
 * Only called once on init and on resize
 */
function cacheCarouselPositions(professionalRow: HTMLElement, personalRow: HTMLElement): void {
  // Use offsetTop and offsetHeight instead of getBoundingClientRect
  // These properties don't cause reflow!
  cachedPositions = {
    professional: {
      top: professionalRow.offsetTop,
      height: professionalRow.offsetHeight,
    },
    personal: {
      top: personalRow.offsetTop,
      height: personalRow.offsetHeight,
    },
  };
}

/**
 * Get center Y position of a carousel (using cached values)
 */
function getCarouselCenterY(type: 'professional' | 'personal'): number {
  if (!cachedPositions) return 0;
  const pos = cachedPositions[type];
  // Convert offsetTop to screen position by subtracting current scroll
  return pos.top - window.scrollY + pos.height / 2;
}

/**
 * Check if user has scrolled past all carousels (at bottom of page)
 */
function isScrolledPastCarousels(): boolean {
  if (!cachedPositions) return false;
  const personalBottom = cachedPositions.personal.top + cachedPositions.personal.height;
  // If we've scrolled past the bottom of the personal row
  return window.scrollY > personalBottom + window.innerHeight / 2;
}

/**
 * Select carousel based on scroll position
 * Works on both mobile and desktop - the carousel closest to viewport center gets selected
 */
function selectCarouselByScroll(): void {
  // Don't change selection if user has scrolled past all carousels (viewing footer/controls)
  if (isScrolledPastCarousels()) {
    return;
  }

  const viewportCenter = window.innerHeight / 2;
  const professionalCenter = getCarouselCenterY('professional');
  const personalCenter = getCarouselCenterY('personal');

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

  // Cache positions once on init (no reflow after this!)
  cacheCarouselPositions(professionalRow, personalRow);

  const throttledSelect = throttle(
    () => selectCarouselByScroll(),
    150  // Throttle to reduce layout thrashing
  );

  // Add scroll listener for all devices (mobile and desktop)
  window.addEventListener('scroll', throttledSelect, { passive: true });

  // Initial selection on load
  setTimeout(() => selectCarouselByScroll(), 100);

  // Update on window resize (orientation change, window resize)
  // Recache positions since layout may have changed
  window.addEventListener('resize', throttle(() => {
    cacheCarouselPositions(professionalRow, personalRow);
    selectCarouselByScroll();
  }, 200), { passive: true });
}
