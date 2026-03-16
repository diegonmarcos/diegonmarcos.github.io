// Carousel module - Swiper.js integration

import { querySelector, addClass, removeClass } from '../utils/dom';
import type { CarouselType, SwiperOptions, Swiper as SwiperInstance } from '../types';

// Declare global Swiper constructor
declare const Swiper: new (selector: string, options: SwiperOptions) => SwiperInstance;

// State
let selectedCarousel: CarouselType = 'professional';
let professionalSwiper: SwiperInstance;
let personalSwiper: SwiperInstance;
let impersonalSwiper: SwiperInstance;
let professionalRow: HTMLElement;
let personalRow: HTMLElement;
let impersonalRow: HTMLElement;
let professionalPrev: HTMLElement;
let professionalNext: HTMLElement;
let personalPrev: HTMLElement;
let personalNext: HTMLElement;
let impersonalPrev: HTMLElement;
let impersonalNext: HTMLElement;

// Trackpad debounce
let trackpadDebounce = false;
const TRACKPAD_DEBOUNCE_TIME = 300;

/**
 * Common Swiper configuration
 */
const swiperConfig: SwiperOptions = {
  effect: 'creative',
  grabCursor: true,
  centeredSlides: false,
  slidesPerView: 1,
  spaceBetween: 0,
  loop: true,
  creativeEffect: {
    prev: {
      shadow: false,
      translate: ['-120%', 0, -500],
      rotate: [0, 0, -15],
      opacity: 0,
      scale: 0.8,
    },
    next: {
      shadow: false,
      translate: ['120%', 0, -500],
      rotate: [0, 0, 15],
      opacity: 0,
      scale: 0.8,
    },
  },
  keyboard: {
    enabled: true,
    onlyInViewport: true,
  },
  touchRatio: 1,
  resistanceRatio: 0.85,
  touchStartPreventDefault: false,
  touchStartForcePreventDefault: false,
  touchMoveStopPropagation: false,
  simulateTouch: true,
  allowTouchMove: true,
  touchEventsTarget: 'container',
  threshold: 10,
  passiveListeners: true,
  speed: 900,
};

interface CarouselSet {
  swiper: SwiperInstance;
  row: HTMLElement;
  prev: HTMLElement;
  next: HTMLElement;
  el: HTMLElement;
}

function getCarouselSet(type: CarouselType): CarouselSet {
  if (type === 'professional') {
    return { swiper: professionalSwiper, row: professionalRow, prev: professionalPrev, next: professionalNext, el: querySelector<HTMLElement>('.professional-swiper')! };
  } else if (type === 'impersonal') {
    return { swiper: impersonalSwiper, row: impersonalRow, prev: impersonalPrev, next: impersonalNext, el: querySelector<HTMLElement>('.impersonal-swiper')! };
  }
  return { swiper: personalSwiper, row: personalRow, prev: personalPrev, next: personalNext, el: querySelector<HTMLElement>('.personal-swiper')! };
}

const allTypes: CarouselType[] = ['professional', 'personal', 'impersonal'];

/**
 * Select a carousel
 */
export function selectCarousel(carousel: CarouselType): void {
  selectedCarousel = carousel;

  for (const t of allTypes) {
    const set = getCarouselSet(t);
    if (t === carousel) {
      addClass(set.row, 'selected');
    } else {
      removeClass(set.row, 'selected');
    }
  }
}

/**
 * Update arrow and touch states based on selected carousel
 */
export function updateArrowStates(): void {
  for (const t of allTypes) {
    const set = getCarouselSet(t);
    if (!set.el) continue;

    if (t === selectedCarousel) {
      set.prev.style.opacity = '1';
      set.next.style.opacity = '1';
      set.prev.style.pointerEvents = 'auto';
      set.next.style.pointerEvents = 'auto';
      set.swiper.allowTouchMove = true;
      set.swiper.enable();
      addClass(set.el, 'swiper-enabled');
      removeClass(set.el, 'swiper-disabled');
    } else {
      set.prev.style.opacity = '0.3';
      set.next.style.opacity = '0.3';
      set.prev.style.pointerEvents = 'none';
      set.next.style.pointerEvents = 'none';
      set.swiper.allowTouchMove = false;
      set.swiper.disable();
      addClass(set.el, 'swiper-disabled');
      removeClass(set.el, 'swiper-enabled');
    }
  }
}

/**
 * Handle trackpad swipe
 */
function handleTrackpadSwipe(e: WheelEvent, swiper: SwiperInstance): void {
  if (Math.abs(e.deltaX) > Math.abs(e.deltaY)) {
    if (!trackpadDebounce) {
      trackpadDebounce = true;

      if (e.deltaX > 30) {
        swiper.slidePrev();
      } else if (e.deltaX < -30) {
        swiper.slideNext();
      }

      setTimeout(() => {
        trackpadDebounce = false;
      }, TRACKPAD_DEBOUNCE_TIME);

      e.preventDefault();
    }
  }
}

/**
 * Professional trackpad handler
 */
function professionalTrackpadHandler(e: WheelEvent): void {
  handleTrackpadSwipe(e, professionalSwiper);
}

/**
 * Personal trackpad handler
 */
function personalTrackpadHandler(e: WheelEvent): void {
  handleTrackpadSwipe(e, personalSwiper);
}

/**
 * Impersonal trackpad handler
 */
function impersonalTrackpadHandler(e: WheelEvent): void {
  handleTrackpadSwipe(e, impersonalSwiper);
}

/**
 * Update trackpad listeners
 */
function updateTrackpadListeners(): void {
  professionalRow.removeEventListener('wheel', professionalTrackpadHandler);
  personalRow.removeEventListener('wheel', personalTrackpadHandler);
  impersonalRow.removeEventListener('wheel', impersonalTrackpadHandler);

  if (selectedCarousel === 'professional') {
    professionalRow.addEventListener('wheel', professionalTrackpadHandler, { passive: false });
  } else if (selectedCarousel === 'personal') {
    personalRow.addEventListener('wheel', personalTrackpadHandler, { passive: false });
  } else {
    impersonalRow.addEventListener('wheel', impersonalTrackpadHandler, { passive: false });
  }
}

/**
 * Initialize two-finger swipe detection
 */
function initTwoFingerSwipe(): void {
  let isTwoFingerSwipe = false;
  const rows = [professionalRow, personalRow, impersonalRow];
  const types: CarouselType[] = ['professional', 'personal', 'impersonal'];

  rows.forEach((row, index) => {
    row.addEventListener('touchstart', (e: TouchEvent) => {
      if (e.touches.length === 2) {
        isTwoFingerSwipe = true;
      }
    }, { passive: true });

    row.addEventListener('touchmove', (e: TouchEvent) => {
      if (isTwoFingerSwipe && e.touches.length === 2) {
        // Can't preventDefault with passive listener, but that's ok for scroll perf
      }
    }, { passive: true });

    row.addEventListener('touchend', () => {
      if (isTwoFingerSwipe) {
        selectCarousel(types[index]);
        updateArrowStates();
        isTwoFingerSwipe = false;
      }
    }, { passive: true });
  });
}

/**
 * Initialize keyboard navigation
 */
function initKeyboardNavigation(): void {
  const order: CarouselType[] = ['professional', 'personal', 'impersonal'];

  document.addEventListener('keydown', (e: KeyboardEvent) => {
    const currentSwiper = getCarouselSet(selectedCarousel).swiper;

    if (e.key === 'ArrowLeft') {
      currentSwiper.slidePrev();
    } else if (e.key === 'ArrowRight') {
      currentSwiper.slideNext();
    } else if (e.key === 'ArrowDown') {
      const idx = order.indexOf(selectedCarousel);
      if (idx < order.length - 1) {
        selectCarousel(order[idx + 1]);
        updateArrowStates();
      }
    } else if (e.key === 'ArrowUp') {
      const idx = order.indexOf(selectedCarousel);
      if (idx > 0) {
        selectCarousel(order[idx - 1]);
        updateArrowStates();
      }
    }
  });
}

/**
 * Initialize click selection (tap/click to select a carousel)
 */
function initClickSelection(): void {
  const pairs: [HTMLElement, CarouselType][] = [
    [professionalRow, 'professional'],
    [personalRow, 'personal'],
    [impersonalRow, 'impersonal'],
  ];

  for (const [row, type] of pairs) {
    row.addEventListener('click', (e) => {
      if ((e.target as HTMLElement).closest('a, button')) return;
      selectCarousel(type);
      updateArrowStates();
      updateTrackpadListeners();
    });
  }
}

/**
 * Initialize carousels
 */
export function initCarousels(): void {
  // Check if Swiper is available
  if (typeof Swiper === 'undefined') {
    console.warn('Swiper not loaded - carousel disabled');
    return;
  }

  // Get carousel rows
  const profRow = querySelector<HTMLElement>('.professional-section .carousel-row');
  const persRow = querySelector<HTMLElement>('.personal-section .carousel-row');
  const imperRow = querySelector<HTMLElement>('.impersonal-section .carousel-row');

  if (!profRow || !persRow || !imperRow) return;

  professionalRow = profRow;
  personalRow = persRow;
  impersonalRow = imperRow;

  // Get navigation elements
  const profPrev = querySelector<HTMLElement>('.professional-prev');
  const profNext = querySelector<HTMLElement>('.professional-next');
  const persPrev = querySelector<HTMLElement>('.personal-prev');
  const persNext = querySelector<HTMLElement>('.personal-next');
  const imperPrev = querySelector<HTMLElement>('.impersonal-prev');
  const imperNext = querySelector<HTMLElement>('.impersonal-next');

  if (!profPrev || !profNext || !persPrev || !persNext || !imperPrev || !imperNext) return;

  professionalPrev = profPrev;
  professionalNext = profNext;
  personalPrev = persPrev;
  personalNext = persNext;
  impersonalPrev = imperPrev;
  impersonalNext = imperNext;

  // Initialize Swiper instances
  professionalSwiper = new Swiper('.professional-swiper', {
    ...swiperConfig,
    navigation: {
      nextEl: '.professional-next',
      prevEl: '.professional-prev',
    },
    pagination: {
      el: '.professional-pagination',
      clickable: true,
    },
  });

  personalSwiper = new Swiper('.personal-swiper', {
    ...swiperConfig,
    navigation: {
      nextEl: '.personal-next',
      prevEl: '.personal-prev',
    },
    pagination: {
      el: '.personal-pagination',
      clickable: true,
    },
  });

  impersonalSwiper = new Swiper('.impersonal-swiper', {
    ...swiperConfig,
    navigation: {
      nextEl: '.impersonal-next',
      prevEl: '.impersonal-prev',
    },
    pagination: {
      el: '.impersonal-pagination',
      clickable: true,
    },
  });

  // Set initial selected state
  addClass(professionalRow, 'selected');

  // Initialize features
  updateArrowStates();
  initTwoFingerSwipe();
  initKeyboardNavigation();
  initClickSelection();
  updateTrackpadListeners();
}

/**
 * Get current selected carousel
 */
export function getSelectedCarousel(): CarouselType {
  return selectedCarousel;
}
