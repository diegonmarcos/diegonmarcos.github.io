// Mobile scroll-based carousel auto-selection

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
 * Check if device is mobile (narrow screen only - ignore touch capability)
 */
function isMobileDevice(): boolean {
  // Only check screen width, not touch capability
  // This prevents scroll handlers on touchscreen laptops
  return window.innerWidth <= 768;
}

/**
 * Get center Y position of a carousel
 */
function getCarouselCenterY(carousel: HTMLElement): number {
  const rect = carousel.getBoundingClientRect();
  return rect.top + rect.height / 2;
}

/**
 * Select carousel based on scroll position
 */
function selectCarouselByScroll(professionalRow: HTMLElement, personalRow: HTMLElement): void {
  if (!isMobileDevice()) return;

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
 * Initialize mobile scroll-based auto-selection
 */
export function initMobileScrollSelection(): void {
  const professionalRow = querySelector<HTMLElement>('.carousel-row:nth-of-type(1)');
  const personalRow = querySelector<HTMLElement>('.carousel-row:nth-of-type(2)');

  if (!professionalRow || !personalRow) return;

  const throttledSelect = throttle(
    () => selectCarouselByScroll(professionalRow, personalRow),
    150  // Increased throttle to reduce layout thrashing
  );

  if (isMobileDevice()) {
    window.addEventListener('scroll', throttledSelect, { passive: true });
    // Initial selection on load
    setTimeout(() => selectCarouselByScroll(professionalRow, personalRow), 100);
  }

  // Update on window resize (orientation change)
  window.addEventListener('resize', throttle(() => {
    if (isMobileDevice()) {
      selectCarouselByScroll(professionalRow, personalRow);
    }
  }, 200), { passive: true });
}
