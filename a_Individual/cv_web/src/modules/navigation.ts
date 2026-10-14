// Navigation module - handles side nav generation and interaction

import { getElementById, querySelector, querySelectorAll, hasClass, addClasses, removeClasses, toggleClass, createElement } from '../utils/dom';

interface NavigationElements {
  sideNav: HTMLElement;
  navToggle: HTMLElement;
  mainContent: HTMLElement;
}

/**
 * Generate side navigation from document headings
 */
export function generateSideNavigation(sideNav: HTMLElement): void {
  const headings = querySelectorAll<HTMLHeadingElement>('main h2, main h3');
  const rootList = createElement('ul');
  sideNav.appendChild(rootList);

  // Track nested lists for building hierarchy
  const currentLists: HTMLUListElement[] = [rootList as HTMLUListElement];

  // Add HOME button
  const homeListItem = createElement('li');
  const homeLink = createElement('a', { href: '#' }, 'HOME');
  homeListItem.appendChild(homeLink);
  currentLists[0].appendChild(homeListItem);

  headings.forEach((heading) => {
    const level = parseInt(heading.tagName.substring(1)) - 2; // h2 -> 0, h3 -> 1
    const isMainSection = heading.tagName === 'H2';

    // Generate ID if not present
    if (!heading.id) {
      heading.id = heading.textContent?.trim().toLowerCase().replace(/\s+/g, '-') || '';
    }

    const listItem = createElement('li');
    const link = createElement('a', { href: `#${heading.id}` });

    // Mark main section links with a data attribute
    if (isMainSection) {
      link.setAttribute('data-main-section', 'true');
    }

    link.textContent = heading.textContent === 'Intro'
      ? heading.textContent.toUpperCase()
      : heading.textContent || '';

    listItem.appendChild(link);

    // Build hierarchy
    while (level >= currentLists.length) {
      const newList = createElement('ul') as HTMLUListElement;
      const lastItem = currentLists[currentLists.length - 1].lastChild as HTMLElement | null;
      if (lastItem) {
        lastItem.appendChild(newList);
        currentLists.push(newList);
      } else {
        currentLists[currentLists.length - 1].appendChild(newList);
      }
    }
    currentLists.length = level + 1;

    currentLists[level].appendChild(listItem);
  });
}

/**
 * Initialize collapsible navigation items
 */
export function initCollapsibleNav(sideNav: HTMLElement): void {
  const navLinks = querySelectorAll<HTMLAnchorElement>('li > a', sideNav);

  navLinks.forEach((link) => {
    const sublist = link.nextElementSibling;
    const isMainSection = link.getAttribute('data-main-section') === 'true';

    // Only make h3+ level items collapsible, not main h2 sections
    if (sublist && sublist.tagName === 'UL' && !isMainSection) {
      addClasses(link, 'collapsible-nav');
      (sublist as HTMLElement).style.display = 'block'; // Start expanded

      link.addEventListener('click', () => {
        const ul = sublist as HTMLElement;
        ul.style.display = ul.style.display === 'none' ? 'block' : 'none';
        toggleClass(link, 'open');
      });
    }
  });
}

/**
 * Initialize navigation toggle functionality
 */
export function initNavigationToggle(elements: NavigationElements): void {
  const { sideNav, navToggle, mainContent } = elements;

  navToggle.addEventListener('click', () => {
    toggleClass(sideNav, 'open');
    toggleClass(mainContent, 'nav-open');
    toggleClass(navToggle, 'open');
  });

  // Close menu when clicking on any nav link
  sideNav.addEventListener('click', (e) => {
    const clickedLink = (e.target as HTMLElement).closest('a');
    if (clickedLink && clickedLink.getAttribute('href')) {
      removeClasses(sideNav, 'open');
      removeClasses(mainContent, 'nav-open');
      removeClasses(navToggle, 'open');
    }
  });

  // Close nav when clicking outside
  mainContent.addEventListener('click', () => {
    if (hasClass(sideNav, 'open')) {
      removeClasses(sideNav, 'open');
      removeClasses(mainContent, 'nav-open');
      removeClasses(navToggle, 'open');
    }
  });

  mainContent.addEventListener('touchend', () => {
    if (hasClass(sideNav, 'open')) {
      removeClasses(sideNav, 'open');
      removeClasses(mainContent, 'nav-open');
      removeClasses(navToggle, 'open');
    }
  });
}

/**
 * Auto-expand collapsed sections when navigating to them
 */
export function initAutoExpandOnNavigate(sideNav: HTMLElement): void {
  const navLinks = querySelectorAll<HTMLAnchorElement>('a', sideNav);

  navLinks.forEach((link) => {
    link.addEventListener('click', () => {
      const targetId = link.getAttribute('href');

      if (targetId && targetId.startsWith('#') && targetId !== '#') {
        const targetElement = querySelector<HTMLElement>(targetId);

        if (targetElement) {
          let currentElement: HTMLElement | null = targetElement;

          // Traverse up the DOM tree and open all parent collapsible sections
          while (currentElement && currentElement !== document.body) {
            if (hasClass(currentElement, 'collapsible-content')) {
              if (!hasClass(currentElement, 'open')) {
                const collapser = currentElement.previousElementSibling as HTMLElement | null;
                if (collapser && hasClass(collapser, 'collapser')) {
                  addClasses(currentElement, 'open');
                  addClasses(collapser, 'open');
                  removeClasses(collapser, 'closed');
                }
              }
            }

            if (hasClass(currentElement, 'collapser')) {
              const content = currentElement.nextElementSibling as HTMLElement | null;
              if (content && hasClass(content, 'collapsible-content')) {
                if (!hasClass(content, 'open')) {
                  addClasses(content, 'open');
                  addClasses(currentElement, 'open');
                  removeClasses(currentElement, 'closed');
                }
              }
            }

            currentElement = currentElement.parentElement;
          }
        }
      }
    });
  });
}
