// Floating menu module

import { getElementById, hasClass, addClasses, removeClasses, toggleClass } from '../utils/dom';

interface FloatingMenuElements {
  floatingBtn: HTMLElement;
  floatingMenu: HTMLElement;
  navToggle: HTMLElement | null;
}

/**
 * Initialize floating action button and menu
 */
export function initFloatingMenu(elements: FloatingMenuElements): void {
  const { floatingBtn, floatingMenu, navToggle } = elements;

  // Toggle menu on button click
  floatingBtn.addEventListener('click', (event) => {
    event.stopPropagation();
    toggleClass(floatingMenu, 'show');
    toggleClass(floatingBtn, 'active');
  });

  // Close menu when clicking outside
  window.addEventListener('click', (event) => {
    const target = event.target as HTMLElement;
    if (
      hasClass(floatingMenu, 'show') &&
      !floatingMenu.contains(target) &&
      !floatingBtn.contains(target)
    ) {
      removeClasses(floatingMenu, 'show');
      removeClasses(floatingBtn, 'active');
    }
  });

  // Fade out buttons on scroll
  initScrollFade(floatingBtn, navToggle);
}

/**
 * Initialize scroll-based fade effect for buttons
 */
function initScrollFade(floatingBtn: HTMLElement, navToggle: HTMLElement | null): void {
  let scrollTimeout: ReturnType<typeof setTimeout>;

  window.addEventListener('scroll', () => {
    addClasses(floatingBtn, 'fade-out');
    if (navToggle) addClasses(navToggle, 'fade-out');

    clearTimeout(scrollTimeout);
    scrollTimeout = setTimeout(() => {
      removeClasses(floatingBtn, 'fade-out');
      if (navToggle) removeClasses(navToggle, 'fade-out');
    }, 1000); // 1 second delay
  });
}
