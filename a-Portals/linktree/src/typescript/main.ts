// Main entry point for Linktree application

import { initLoader } from './modules/loader';
import { initStatusModal } from './modules/status/modal';
import { initCollapsibleSections, initControlsToggle } from './modules/collapsible';
import { initVideoBackground, initVideoToggle } from './modules/videoBackground';
import { initCarousels } from './modules/carousel';
import { initMobileScrollSelection } from './modules/mobileScroll';
import { initGalleryToggle } from './modules/gallery';
import { initPerformanceMode } from './modules/performanceMode';
import { initMindmapOverlay } from './modules/mindmap-overlay';
import { initVmControl } from './modules/vmControl';
import { initProfilePicSwiper } from './modules/profilePicSwiper';
import { initCardSwiper } from './modules/cardSwiper';

/**
 * Initialize all application modules
 */
function initApp(): void {
  // Initialize collapsible sections
  initCollapsibleSections();

  initProfilePicSwiper();
  initCardSwiper();

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

  // Initialize VM control buttons (on-demand VPS)
  initVmControl();

  // Show FABs after everything is loaded and positioned
  requestAnimationFrame(() => {
    requestAnimationFrame(() => {
      const controlsFab = document.querySelector('.controls-fab-container') as HTMLElement;
      const mindmapBtn = document.getElementById('mindmap-btn') as HTMLElement;
      const pixelworldBtn = document.getElementById('pixelworld-btn') as HTMLElement;

      if (controlsFab) {
        controlsFab.style.visibility = 'visible';
      }
      if (mindmapBtn) {
        mindmapBtn.style.visibility = 'visible';
      }
      if (pixelworldBtn) {
        pixelworldBtn.style.visibility = 'visible';
      }
    });
  });
}

// Initialize when DOM is ready
document.addEventListener('DOMContentLoaded', async () => {
  await initLoader();
  requestAnimationFrame(() => {
    requestAnimationFrame(initApp);
  });
});

// Export for potential external use
export { initApp };
