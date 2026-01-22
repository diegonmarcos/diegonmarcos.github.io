// Collapsible sections module

import { querySelectorAll, getElementById, addClass, removeClass, hasClass } from '../utils/dom';

/**
 * Update parent collapsible heights when child content changes
 */
function updateParentHeights(element: HTMLElement): void {
  let parentCollapsible = element.parentElement?.closest('.collapsible-content') as HTMLElement | null;

  while (parentCollapsible) {
    if (hasClass(parentCollapsible, 'open')) {
      // Set to a very large value temporarily to measure actual content
      const currentHeight = parentCollapsible.style.maxHeight;
      parentCollapsible.style.maxHeight = 'none';
      const actualHeight = parentCollapsible.scrollHeight;
      parentCollapsible.style.maxHeight = currentHeight;

      // Trigger reflow
      void parentCollapsible.offsetHeight;

      // Set to actual height
      parentCollapsible.style.maxHeight = actualHeight + 'px';
    }
    parentCollapsible = parentCollapsible.parentElement?.closest('.collapsible-content') as HTMLElement | null;
  }
}

/**
 * Initialize collapsible content heights
 */
function initCollapsibleHeights(): void {
  const contents = querySelectorAll<HTMLElement>('.collapsible-content');

  contents.forEach(content => {
    if (hasClass(content, 'open')) {
      content.style.maxHeight = content.scrollHeight + 'px';
    } else {
      content.style.maxHeight = '0px';
    }
  });
}

/**
 * Handle toggle click
 */
function handleToggleClick(toggle: HTMLElement): void {
  const targetId = toggle.getAttribute('data-target');
  if (!targetId) return;

  const content = getElementById<HTMLElement>(targetId);
  if (!content) return;

  if (hasClass(content, 'open')) {
    // Close the collapsible
    removeClass(content, 'open');
    removeClass(toggle, 'open');
    content.style.maxHeight = '0px';

    // Update parent heights after closing
    setTimeout(() => updateParentHeights(content), 100);
  } else {
    // Open the collapsible
    addClass(content, 'open');
    addClass(toggle, 'open');
    content.style.maxHeight = content.scrollHeight + 'px';

    // Update this collapsible's height after a moment
    setTimeout(() => {
      if (hasClass(content, 'open')) {
        content.style.maxHeight = content.scrollHeight + 'px';
      }
    }, 50);

    // Update parent collapsibles multiple times to ensure proper sizing
    setTimeout(() => updateParentHeights(content), 100);
    setTimeout(() => updateParentHeights(content), 300);
    setTimeout(() => updateParentHeights(content), 500);
  }
}

/**
 * Initialize collapsible sections
 */
export function initCollapsibleSections(): void {
  // Initialize heights
  initCollapsibleHeights();

  // Add click listeners to toggles
  const toggles = querySelectorAll<HTMLElement>('.more-toggle');

  toggles.forEach(toggle => {
    toggle.addEventListener('click', () => handleToggleClick(toggle));
  });
}

/**
 * Initialize controls FAB (floating action button)
 * Desktop: Hover to expand, auto-collapse after 1 second
 * Mobile: Click/tap to toggle, NO auto-collapse
 */
export function initControlsToggle(): void {
  const controlsFab = getElementById<HTMLElement>('controls-fab');
  const controlsList = getElementById<HTMLElement>('controls-list');
  const container = controlsFab?.parentElement;

  if (!controlsFab || !controlsList || !container) return;

  let autoCloseTimeout: number | null = null;

  // Detect if device is mobile/touch
  const isMobile = 'ontouchstart' in window || navigator.maxTouchPoints > 0;

  const closeControls = () => {
    removeClass(controlsList, 'open');
    removeClass(controlsFab, 'open');
    if (autoCloseTimeout) {
      clearTimeout(autoCloseTimeout);
      autoCloseTimeout = null;
    }
  };

  const openControls = (withAutoClose: boolean = true) => {
    addClass(controlsList, 'open');
    addClass(controlsFab, 'open');

    // Only auto-close on desktop, NOT on mobile
    if (withAutoClose && !isMobile) {
      autoCloseTimeout = window.setTimeout(() => {
        closeControls();
      }, 1000);
    }
  };

  const cancelAutoClose = () => {
    if (autoCloseTimeout) {
      clearTimeout(autoCloseTimeout);
      autoCloseTimeout = null;
    }
  };

  const restartAutoClose = () => {
    cancelAutoClose();
    if (hasClass(controlsList, 'open') && !isMobile) {
      autoCloseTimeout = window.setTimeout(() => {
        closeControls();
      }, 1000);
    }
  };

  // Desktop: Hover to expand
  if (!isMobile) {
    // Hover FAB button to expand (not container!)
    controlsFab.addEventListener('mouseenter', () => {
      cancelAutoClose();
      if (!hasClass(controlsList, 'open')) {
        openControls(true);
      }
    });

    // When hovering over the opened list, cancel auto-close
    controlsList.addEventListener('mouseenter', () => {
      cancelAutoClose();
    });

    // Restart auto-close when leaving the whole container
    container.addEventListener('mouseleave', () => {
      restartAutoClose();
    });
  }

  // Click/tap to toggle (works on both desktop and mobile)
  controlsFab.addEventListener('click', (e) => {
    e.preventDefault();
    e.stopPropagation();

    if (hasClass(controlsList, 'open')) {
      closeControls();
    } else {
      // On mobile: no auto-close, on desktop: with auto-close
      openControls(!isMobile);
    }
  });

  // Touch events for mobile (ensure tap works)
  if (isMobile) {
    controlsFab.addEventListener('touchstart', (e) => {
      e.preventDefault();

      if (hasClass(controlsList, 'open')) {
        closeControls();
      } else {
        openControls(false); // No auto-close on mobile
      }
    }, { passive: false });
  }
}
