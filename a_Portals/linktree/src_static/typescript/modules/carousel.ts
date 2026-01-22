// Carousel module - Swiper.js integration

import { querySelector, addClass, removeClass } from '../utils/dom';
import type { CarouselType, SwiperOptions, Swiper as SwiperInstance } from '../types';

// Declare global Swiper constructor
declare const Swiper: new (selector: string, options: SwiperOptions) => SwiperInstance;

// State
let selectedCarousel: CarouselType = 'professional';
let professionalSwiper: SwiperInstance;
let personalSwiper: SwiperInstance;
let professionalRow: HTMLElement;
let personalRow: HTMLElement;
let professionalPrev: HTMLElement;
let professionalNext: HTMLElement;
let personalPrev: HTMLElement;
let personalNext: HTMLElement;

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

/**
 * Select a carousel
 */
export function selectCarousel(carousel: CarouselType): void {
  selectedCarousel = carousel;

  if (carousel === 'professional') {
    addClass(professionalRow, 'selected');
    removeClass(personalRow, 'selected');
  } else {
    addClass(personalRow, 'selected');
    removeClass(professionalRow, 'selected');
  }
}

/**
 * Update arrow and touch states based on selected carousel
 */
export function updateArrowStates(): void {
  const professionalSwiperEl = querySelector<HTMLElement>('.professional-swiper');
  const personalSwiperEl = querySelector<HTMLElement>('.personal-swiper');

  if (!professionalSwiperEl || !personalSwiperEl) return;

  if (selectedCarousel === 'professional') {
    // Enable professional carousel
    professionalPrev.style.opacity = '1';
    professionalNext.style.opacity = '1';
    professionalPrev.style.pointerEvents = 'auto';
    professionalNext.style.pointerEvents = 'auto';
    professionalSwiper.allowTouchMove = true;
    professionalSwiper.enable();
    addClass(professionalSwiperEl, 'swiper-enabled');
    removeClass(professionalSwiperEl, 'swiper-disabled');

    // Disable personal carousel
    personalPrev.style.opacity = '0.3';
    personalNext.style.opacity = '0.3';
    personalPrev.style.pointerEvents = 'none';
    personalNext.style.pointerEvents = 'none';
    personalSwiper.allowTouchMove = false;
    personalSwiper.disable();
    addClass(personalSwiperEl, 'swiper-disabled');
    removeClass(personalSwiperEl, 'swiper-enabled');
  } else {
    // Enable personal carousel
    personalPrev.style.opacity = '1';
    personalNext.style.opacity = '1';
    personalPrev.style.pointerEvents = 'auto';
    personalNext.style.pointerEvents = 'auto';
    personalSwiper.allowTouchMove = true;
    personalSwiper.enable();
    addClass(personalSwiperEl, 'swiper-enabled');
    removeClass(personalSwiperEl, 'swiper-disabled');

    // Disable professional carousel
    professionalPrev.style.opacity = '0.3';
    professionalNext.style.opacity = '0.3';
    professionalPrev.style.pointerEvents = 'none';
    professionalNext.style.pointerEvents = 'none';
    professionalSwiper.allowTouchMove = false;
    professionalSwiper.disable();
    addClass(professionalSwiperEl, 'swiper-disabled');
    removeClass(professionalSwiperEl, 'swiper-enabled');
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
 * Update trackpad listeners
 */
function updateTrackpadListeners(): void {
  professionalRow.removeEventListener('wheel', professionalTrackpadHandler);
  personalRow.removeEventListener('wheel', personalTrackpadHandler);

  if (selectedCarousel === 'professional') {
    professionalRow.addEventListener('wheel', professionalTrackpadHandler, { passive: false });
  } else {
    personalRow.addEventListener('wheel', personalTrackpadHandler, { passive: false });
  }
}

/**
 * Initialize two-finger swipe detection
 */
function initTwoFingerSwipe(): void {
  let isTwoFingerSwipe = false;

  [professionalRow, personalRow].forEach((row, index) => {
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
        selectCarousel(index === 0 ? 'professional' : 'personal');
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
  document.addEventListener('keydown', (e: KeyboardEvent) => {
    if (e.key === 'ArrowLeft') {
      if (selectedCarousel === 'professional') {
        professionalSwiper.slidePrev();
      } else {
        personalSwiper.slidePrev();
      }
    } else if (e.key === 'ArrowRight') {
      if (selectedCarousel === 'professional') {
        professionalSwiper.slideNext();
      } else {
        personalSwiper.slideNext();
      }
    } else if (e.key === 'ArrowDown') {
      selectCarousel('personal');
      updateArrowStates();
    } else if (e.key === 'ArrowUp') {
      selectCarousel('professional');
      updateArrowStates();
    }
  });
}

/**
 * Initialize hover selection
 */
function initHoverSelection(): void {
  professionalRow.addEventListener('mouseenter', () => {
    selectCarousel('professional');
    updateArrowStates();
    updateTrackpadListeners();
  });

  personalRow.addEventListener('mouseenter', () => {
    selectCarousel('personal');
    updateArrowStates();
    updateTrackpadListeners();
  });
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

  if (!profRow || !persRow) return;

  professionalRow = profRow;
  personalRow = persRow;

  // Get navigation elements
  const profPrev = querySelector<HTMLElement>('.professional-prev');
  const profNext = querySelector<HTMLElement>('.professional-next');
  const persPrev = querySelector<HTMLElement>('.personal-prev');
  const persNext = querySelector<HTMLElement>('.personal-next');

  if (!profPrev || !profNext || !persPrev || !persNext) return;

  professionalPrev = profPrev;
  professionalNext = profNext;
  personalPrev = persPrev;
  personalNext = persNext;

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

  // Set initial selected state
  addClass(professionalRow, 'selected');

  // Initialize features
  updateArrowStates();
  initTwoFingerSwipe();
  initKeyboardNavigation();
  initHoverSelection();
  updateTrackpadListeners();
}

/**
 * Get current selected carousel
 */
export function getSelectedCarousel(): CarouselType {
  return selectedCarousel;
}
