// Main entry point for Linktree application

import { initCollapsibleSections } from './modules/collapsible';
import { initVideoBackground, initVideoToggle } from './modules/videoBackground';
import { initCarousels } from './modules/carousel';
import { initMobileScrollSelection } from './modules/mobileScroll';
import { initGalleryToggle } from './modules/gallery';
import { initPerformanceMode } from './modules/performanceMode';
import { initSmoothSnap } from './modules/smoothSnap';

/**
 * Initialize all application modules
 */
function initApp(): void {
  // Initialize collapsible sections
  initCollapsibleSections();

  // Initialize random background video
  initVideoBackground();

  // Initialize video play/pause toggle
  initVideoToggle();

  // Initialize Swiper carousels
  initCarousels();

  // Initialize mobile scroll-based carousel selection
  initMobileScrollSelection();

  // Initialize gallery view toggle
  initGalleryToggle();

  // Initialize performance/fast mode toggle
  initPerformanceMode();

  // Initialize smooth scroll snap
  initSmoothSnap();
}

// Declare Swiper as global
declare const Swiper: unknown;

// Initialize when DOM is ready and Swiper is loaded
function startApp(): void {
  requestAnimationFrame(() => {
    requestAnimationFrame(initApp);
  });
}

document.addEventListener('DOMContentLoaded', () => {
  // Check if Swiper is already loaded
  if (typeof Swiper !== 'undefined') {
    startApp();
  } else {
    // Wait for Swiper to load (max 5s timeout, then init anyway for non-carousel features)
    const timeout = setTimeout(startApp, 5000);
    window.addEventListener('swiperReady', () => {
      clearTimeout(timeout);
      startApp();
    });
  }
});

// Export for potential external use
export { initApp };
