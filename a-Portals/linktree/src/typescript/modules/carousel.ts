// Carousel module - Swiper.js integration

import Swiper from 'swiper';
import { EffectCreative, Navigation, Pagination, Keyboard } from 'swiper/modules';
import { querySelector, addClass, removeClass } from '../utils/dom';
import type { CarouselType } from '../types';

type SwiperInstance = Swiper;

// State
let selectedCarousel: CarouselType = 'professional';
let professionalSwiper: SwiperInstance;
let personalSwiper: SwiperInstance;
let personalToolsSwiper: SwiperInstance;
let professionalRow: HTMLElement;
let personalRow: HTMLElement;
let personalToolsRow: HTMLElement;
let professionalPrev: HTMLElement;
let professionalNext: HTMLElement;
let personalPrev: HTMLElement;
let personalNext: HTMLElement;
let personalToolsPrev: HTMLElement;
let personalToolsNext: HTMLElement;

// Trackpad debounce
let trackpadDebounce = false;
const TRACKPAD_DEBOUNCE_TIME = 300;

/**
 * Common Swiper configuration
 */
const swiperConfig = {
  modules: [EffectCreative, Navigation, Pagination, Keyboard],
  effect: 'creative' as const,
  grabCursor: true,
  centeredSlides: false,
  slidesPerView: 1,
  spaceBetween: 0,
  loop: true,
  autoHeight: false,
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
  longSwipes: false,
  passiveListeners: true,
  speed: 900,
  on: {
    afterInit: function (swiper: any) {
      const forceLayout = () => {
        // Force swiper container to 85dvh
        swiper.el.style.setProperty('height', '85dvh', 'important');
        swiper.el.style.setProperty('max-height', '85dvh', 'important');
        swiper.wrapperEl.style.setProperty('height', '100%', 'important');
        swiper.el.querySelectorAll('.swiper-slide').forEach((s: HTMLElement) => {
          s.style.setProperty('height', '100%', 'important');
        });
      };
      forceLayout();
      setTimeout(forceLayout, 0);
      setTimeout(forceLayout, 100);
      setTimeout(forceLayout, 500);
    },
    slideChangeTransitionEnd: function (swiper: any) {
      swiper.el.style.setProperty('height', '85dvh', 'important');
      swiper.el.style.setProperty('max-height', '85dvh', 'important');
      swiper.wrapperEl.style.setProperty('height', '100%', 'important');
      swiper.el.querySelectorAll('.swiper-slide').forEach((s: HTMLElement) => {
        s.style.setProperty('height', '100%', 'important');
      });
    },
  },
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
  } else if (type === 'personalTools') {
    return { swiper: personalToolsSwiper, row: personalToolsRow, prev: personalToolsPrev, next: personalToolsNext, el: querySelector<HTMLElement>('.personal-tools-swiper')! };
  }
  return { swiper: personalSwiper, row: personalRow, prev: personalPrev, next: personalNext, el: querySelector<HTMLElement>('.personal-swiper')! };
}

const allTypes: CarouselType[] = ['professional', 'personal', 'personalTools'];

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
 * Personal Tools trackpad handler
 */
function personalToolsTrackpadHandler(e: WheelEvent): void {
  handleTrackpadSwipe(e, personalToolsSwiper);
}

/**
 * Update trackpad listeners
 */
function updateTrackpadListeners(): void {
  professionalRow.removeEventListener('wheel', professionalTrackpadHandler);
  personalRow.removeEventListener('wheel', personalTrackpadHandler);
  personalToolsRow.removeEventListener('wheel', personalToolsTrackpadHandler);

  if (selectedCarousel === 'professional') {
    professionalRow.addEventListener('wheel', professionalTrackpadHandler, { passive: false });
  } else if (selectedCarousel === 'personal') {
    personalRow.addEventListener('wheel', personalTrackpadHandler, { passive: false });
  } else {
    personalToolsRow.addEventListener('wheel', personalToolsTrackpadHandler, { passive: false });
  }
}

/**
 * Initialize two-finger swipe detection
 */
function initTwoFingerSwipe(): void {
  let isTwoFingerSwipe = false;
  const rows = [professionalRow, personalRow, personalToolsRow];
  const types: CarouselType[] = ['professional', 'personal', 'personalTools'];

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
  const order: CarouselType[] = ['professional', 'personal', 'personalTools'];

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
    [personalToolsRow, 'personalTools'],
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
  // Get carousel rows
  const profRow = querySelector<HTMLElement>('.professional-profiles-section .carousel-row');
  const persRow = querySelector<HTMLElement>('.personal-profiles-section .carousel-row');
  const pToolsRow = querySelector<HTMLElement>('.personal-tools-section .carousel-row');

  if (!profRow || !persRow || !pToolsRow) return;

  professionalRow = profRow;
  personalRow = persRow;
  personalToolsRow = pToolsRow;

  // Get navigation elements
  const profPrev = querySelector<HTMLElement>('.professional-prev');
  const profNext = querySelector<HTMLElement>('.professional-next');
  const persPrev = querySelector<HTMLElement>('.personal-prev');
  const persNext = querySelector<HTMLElement>('.personal-next');
  const pToolsPrev = querySelector<HTMLElement>('.personal-tools-prev');
  const pToolsNext = querySelector<HTMLElement>('.personal-tools-next');

  if (!profPrev || !profNext || !persPrev || !persNext || !pToolsPrev || !pToolsNext) return;

  professionalPrev = profPrev;
  professionalNext = profNext;
  personalPrev = persPrev;
  personalNext = persNext;
  personalToolsPrev = pToolsPrev;
  personalToolsNext = pToolsNext;

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

  personalToolsSwiper = new Swiper('.personal-tools-swiper', {
    ...swiperConfig,
    navigation: {
      nextEl: '.personal-tools-next',
      prevEl: '.personal-tools-prev',
    },
    pagination: {
      el: '.personal-tools-pagination',
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

  // B1 — pre-promote the active slide to a compositor layer ONLY during
  // pointer/touch interaction. Constant `will-change` on every slide
  // wastes GPU memory; this gives us first-frame smoothness without the
  // memory cost.
  initWillChangeOnInteraction();
}

function initWillChangeOnInteraction(): void {
  const swipers = ['.professional-swiper', '.personal-swiper', '.personal-tools-swiper'];
  for (const sel of swipers) {
    const root = document.querySelector<HTMLElement>(sel);
    if (!root) continue;
    const setActive = () => {
      const active = root.querySelector<HTMLElement>('.swiper-slide-active');
      if (active) active.style.willChange = 'transform';
    };
    const clear = () => {
      root.querySelectorAll<HTMLElement>('.swiper-slide').forEach(s => { s.style.willChange = ''; });
    };
    root.addEventListener('pointerdown', setActive, { passive: true });
    root.addEventListener('touchstart', setActive, { passive: true });
    root.addEventListener('pointerup', clear, { passive: true });
    root.addEventListener('pointercancel', clear, { passive: true });
    root.addEventListener('touchend', clear, { passive: true });
    root.addEventListener('touchcancel', clear, { passive: true });
  }
}

/**
 * Get current selected carousel
 */
export function getSelectedCarousel(): CarouselType {
  return selectedCarousel;
}
