// Collapsible sections module

import { querySelectorAll, hasClass, addClasses, removeClasses } from '../utils/dom';

/**
 * Initialize all collapsible sections in the document
 */
export function initCollapsibleSections(): void {
  const collapsers = querySelectorAll<HTMLElement>('.collapser');

  collapsers.forEach((collapser) => {
    const content = collapser.nextElementSibling as HTMLElement | null;

    if (!content || !hasClass(content, 'collapsible-content')) {
      return;
    }

    // Set initial state based on 'open' class
    if (!hasClass(collapser, 'open')) {
      addClasses(collapser, 'closed');
      removeClasses(content, 'open');
    }

    // Toggle on click
    collapser.addEventListener('click', () => {
      if (hasClass(content, 'open')) {
        removeClasses(content, 'open');
        removeClasses(collapser, 'open');
        addClasses(collapser, 'closed');
      } else {
        addClasses(content, 'open');
        addClasses(collapser, 'open');
        removeClasses(collapser, 'closed');
      }
    });
  });
}
