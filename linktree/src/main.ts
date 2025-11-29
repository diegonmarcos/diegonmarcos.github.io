// Main entry point for Linktree application

import { initCollapsibleSections } from './modules/collapsible';
import { initVideoBackground, initVideoToggle } from './modules/videoBackground';
import { initCarousels } from './modules/carousel';
import { initMobileScrollSelection } from './modules/mobileScroll';
import { initGalleryToggle } from './modules/gallery';

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
}

// Initialize when DOM is ready
document.addEventListener('DOMContentLoaded', initApp);

// Export for potential external use
export { initApp };
