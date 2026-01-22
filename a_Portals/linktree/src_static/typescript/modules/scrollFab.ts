// Scroll-based FAB visibility control
// Hides FABs during scroll, shows when scrolling stops

/**
 * Initialize scroll-based FAB hiding
 */
export function initScrollFab(): void {
  const controlsFab = document.querySelector('.controls-fab-container') as HTMLElement;
  const mindmapBtn = document.getElementById('mindmap-btn') as HTMLElement;

  if (!controlsFab || !mindmapBtn) {
    console.warn('ScrollFab: FAB elements not found');
    return;
  }

  let scrollTimeout: number | null = null;
  let isScrolling = false;
  let lastScrollY = window.scrollY;
  const SCROLL_THRESHOLD = 50; // Only hide if scrolled more than 50px

  /**
   * Hide FABs (fade out)
   */
  function hideFabs(): void {
    if (!isScrolling) {
      isScrolling = true;
      controlsFab.style.opacity = '0';
      controlsFab.style.pointerEvents = 'none';
      mindmapBtn.style.opacity = '0';
      mindmapBtn.style.pointerEvents = 'none';
    }
  }

  /**
   * Show FABs (fade in)
   */
  function showFabs(): void {
    if (isScrolling) {
      isScrolling = false;
      controlsFab.style.opacity = '1';
      controlsFab.style.pointerEvents = 'auto';
      mindmapBtn.style.opacity = '1';
      mindmapBtn.style.pointerEvents = 'auto';
    }
  }

  /**
   * Handle scroll event
   */
  function handleScroll(): void {
    const currentScrollY = window.scrollY;
    const scrollDelta = Math.abs(currentScrollY - lastScrollY);

    // Only hide FABs if user scrolled a meaningful distance
    if (scrollDelta > SCROLL_THRESHOLD) {
      hideFabs();
      lastScrollY = currentScrollY;
    }

    // Clear existing timeout
    if (scrollTimeout !== null) {
      clearTimeout(scrollTimeout);
    }

    // Show FABs after scrolling stops (500ms delay)
    scrollTimeout = window.setTimeout(() => {
      showFabs();
      scrollTimeout = null;
    }, 500);
  }

  // Add scroll listener
  window.addEventListener('scroll', handleScroll, { passive: true });

  console.log('ScrollFab: Initialized');
}
