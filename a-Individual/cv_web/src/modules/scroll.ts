// Scroll-related functionality module

import { getElementById, querySelector, querySelectorAll, hasClass, addClasses, removeClasses } from '../utils/dom';
import { animateElement, smoothScrollTo } from '../utils/animation';

interface ScrollSpyConfig {
  headerFadeThreshold: number;
  headingOffset: number;
}

const DEFAULT_CONFIG: ScrollSpyConfig = {
  headerFadeThreshold: 200,
  headingOffset: 60,
};

/**
 * Initialize scroll spy for navigation highlighting
 */
export function initScrollSpy(
  sideNav: HTMLElement,
  mainContent: HTMLElement,
  config: ScrollSpyConfig = DEFAULT_CONFIG
): void {
  const scrollSpyHeadings = querySelectorAll<HTMLHeadingElement>('main h2, main h3');
  const navLinks = querySelectorAll<HTMLAnchorElement>('a', sideNav);
  const headerContent = querySelector<HTMLElement>('.header-content');
  const careerSection = getElementById('career');
  let menuOpenedOnce = false;

  window.addEventListener('scroll', () => {
    // Header Fade-Out effect
    const scrollPosition = window.pageYOffset;
    if (headerContent) {
      if (scrollPosition < config.headerFadeThreshold) {
        headerContent.style.opacity = String(1 - scrollPosition / config.headerFadeThreshold);
      } else {
        headerContent.style.opacity = '0';
      }
    }

    // Find current section
    let current = '';
    scrollSpyHeadings.forEach((heading) => {
      const headingTop = heading.offsetTop;
      if (pageYOffset >= headingTop - config.headingOffset) {
        current = heading.getAttribute('id') || '';
      }
    });

    // Update active nav link
    navLinks.forEach((link) => {
      removeClasses(link, 'active');
      if (link.getAttribute('href')?.substring(1) === current) {
        addClasses(link, 'active');
      }
    });

    // Auto-open menu at Career section
    if (!menuOpenedOnce && careerSection && window.pageYOffset >= careerSection.offsetTop - config.headingOffset) {
      addClasses(sideNav, 'open');
      addClasses(mainContent, 'nav-open');
      menuOpenedOnce = true;
    }
  });
}

/**
 * Initialize scroll-triggered animations for sections
 */
export function initScrollAnimations(): void {
  const animatedSections = querySelectorAll<HTMLElement>('.animated-section');
  const animatedOnce = new Set<HTMLElement>();
  let lastScrollY = window.scrollY;

  const observer = new IntersectionObserver(
    (entries) => {
      const currentScrollY = window.scrollY;
      const scrollingDown = currentScrollY > lastScrollY;

      entries.forEach((entry) => {
        const target = entry.target as HTMLElement;

        if (entry.isIntersecting) {
          // Always fade in when entering viewport
          animateElement(target, 1, 0, 600);
          animatedOnce.add(target);
        } else {
          // Only fade out when scrolling DOWN past a section
          if (scrollingDown && animatedOnce.has(target)) {
            // Section is going above viewport - keep it visible
            target.style.opacity = '1';
            target.style.visibility = 'visible';
          } else if (!animatedOnce.has(target)) {
            // Section hasn't been seen yet, keep it hidden
            animateElement(target, 0, 30, 600);
          }
        }
      });

      lastScrollY = currentScrollY;
    },
    {
      root: null,
      threshold: 0.15, // Trigger when 15% of the element is visible
    }
  );

  animatedSections.forEach((section) => {
    observer.observe(section);
  });
}

/**
 * Initialize smooth scroll for arrow button
 */
export function initSmoothScrollArrow(): void {
  const scrollArrow = querySelector<HTMLAnchorElement>('.scroll-down-arrow');

  if (scrollArrow) {
    scrollArrow.addEventListener('click', function (e) {
      e.preventDefault();
      const targetId = this.getAttribute('href');
      if (targetId) {
        const targetElement = querySelector<HTMLElement>(targetId);
        if (targetElement) {
          smoothScrollTo(targetElement.offsetTop, 3000); // 3 seconds
        }
      }
    });
  }
}
