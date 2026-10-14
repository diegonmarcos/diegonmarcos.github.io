// Main entry point for CV Web application

import { getElementById } from './utils/dom';
import {
  generateSideNavigation,
  initCollapsibleNav,
  initNavigationToggle,
  initAutoExpandOnNavigate,
} from './modules/navigation';
import { initCollapsibleSections } from './modules/collapsible';
import { initScrollSpy, initScrollAnimations, initSmoothScrollArrow } from './modules/scroll';
import { initFloatingMenu } from './modules/floatingMenu';
import { initDesktopViewToggle, initFontSizeControls } from './modules/viewSettings';
import { initEasterEgg } from './modules/easterEgg';

/**
 * Initialize all application modules
 */
function initApp(): void {
  // Get main DOM elements
  const sideNav = getElementById<HTMLElement>('side-nav');
  const navToggle = getElementById<HTMLElement>('nav-toggle');
  const mainContent = getElementById<HTMLElement>('main-content');
  const floatingBtn = getElementById<HTMLElement>('floating-btn');
  const floatingMenu = getElementById<HTMLElement>('floating-menu');

  // Initialize navigation
  if (sideNav && navToggle && mainContent) {
    generateSideNavigation(sideNav);
    initCollapsibleNav(sideNav);
    initNavigationToggle({ sideNav, navToggle, mainContent });
    initAutoExpandOnNavigate(sideNav);
    initScrollSpy(sideNav, mainContent);
  }

  // Initialize collapsible sections
  initCollapsibleSections();

  // Initialize scroll animations
  initScrollAnimations();
  initSmoothScrollArrow();

  // Initialize floating menu
  if (floatingBtn && floatingMenu) {
    initFloatingMenu({
      floatingBtn,
      floatingMenu,
      navToggle,
    });
  }

  // Initialize view settings
  initDesktopViewToggle();
  initFontSizeControls();

  // Initialize easter egg
  initEasterEgg();
}

// Initialize when DOM is ready
document.addEventListener('DOMContentLoaded', initApp);

// Export for potential external use
export { initApp };
