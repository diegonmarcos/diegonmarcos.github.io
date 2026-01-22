// Main entry point for Linktree application

import { initLoader } from './modules/loader';
import { initStatusModal } from './modules/status';
import { initCollapsibleSections, initControlsToggle } from './modules/collapsible';
import { initVideoBackground, initVideoToggle } from './modules/videoBackground';
import { initCarousels } from './modules/carousel';
import { initMobileScrollSelection } from './modules/mobileScroll';
import { initGalleryToggle } from './modules/gallery';
import { initPerformanceMode } from './modules/performanceMode';
import { initSmoothSnap } from './modules/smoothSnap';
import { initMindmapOverlay } from './modules/mindmap-overlay';
import { initScrollFab } from './modules/scrollFab';

/**
 * Initialize all application modules
 */
function initApp(): void {
  // Initialize collapsible sections
  initCollapsibleSections();

  // Initialize controls toggle
  initControlsToggle();

  // Initialize status modal
  initStatusModal();

  // Initialize mindmap overlay
  initMindmapOverlay();

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

  // Initialize scroll-based FAB hiding
  initScrollFab();
}

// Declare Swiper as global
declare const Swiper: unknown;

// Initialize when DOM is ready and Swiper is loaded
function startApp(): void {
  requestAnimationFrame(() => {
    requestAnimationFrame(initApp);
  });
}

document.addEventListener('DOMContentLoaded', async () => {
  // Run loading screen first
  await initLoader();

  // Then check if Swiper is already loaded
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
