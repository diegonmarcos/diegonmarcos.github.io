"use strict";
(() => {
  // src/utils/dom.ts
  function getElementById(id) {
    return document.getElementById(id);
  }
  function querySelector(selector, parent = document) {
    return parent.querySelector(selector);
  }
  function querySelectorAll(selector, parent = document) {
    return parent.querySelectorAll(selector);
  }
  function setCSSProperty(element, property, value) {
    element.style.setProperty(property, value);
  }
  function addClass(element, className) {
    element.classList.add(className);
  }
  function removeClass(element, className) {
    element.classList.remove(className);
  }
  function hasClass(element, className) {
    return element.classList.contains(className);
  }

  // src/modules/collapsible.ts
  function updateParentHeights(element) {
    let parentCollapsible = element.parentElement?.closest(".collapsible-content");
    while (parentCollapsible) {
      if (hasClass(parentCollapsible, "open")) {
        const currentHeight = parentCollapsible.style.maxHeight;
        parentCollapsible.style.maxHeight = "none";
        const actualHeight = parentCollapsible.scrollHeight;
        parentCollapsible.style.maxHeight = currentHeight;
        void parentCollapsible.offsetHeight;
        parentCollapsible.style.maxHeight = actualHeight + "px";
      }
      parentCollapsible = parentCollapsible.parentElement?.closest(".collapsible-content");
    }
  }
  function initCollapsibleHeights() {
    const contents = querySelectorAll(".collapsible-content");
    contents.forEach((content) => {
      if (hasClass(content, "open")) {
        content.style.maxHeight = content.scrollHeight + "px";
      } else {
        content.style.maxHeight = "0px";
      }
    });
  }
  function handleToggleClick(toggle) {
    const targetId = toggle.getAttribute("data-target");
    if (!targetId)
      return;
    const content = getElementById(targetId);
    if (!content)
      return;
    if (hasClass(content, "open")) {
      removeClass(content, "open");
      removeClass(toggle, "open");
      content.style.maxHeight = "0px";
      setTimeout(() => updateParentHeights(content), 100);
    } else {
      addClass(content, "open");
      addClass(toggle, "open");
      content.style.maxHeight = content.scrollHeight + "px";
      setTimeout(() => {
        if (hasClass(content, "open")) {
          content.style.maxHeight = content.scrollHeight + "px";
        }
      }, 50);
      setTimeout(() => updateParentHeights(content), 100);
      setTimeout(() => updateParentHeights(content), 300);
      setTimeout(() => updateParentHeights(content), 500);
    }
  }
  function initCollapsibleSections() {
    initCollapsibleHeights();
    const toggles = querySelectorAll(".more-toggle");
    toggles.forEach((toggle) => {
      toggle.addEventListener("click", () => handleToggleClick(toggle));
    });
  }

  // src/modules/videoBackground.ts
  var VIDEOS = [
    "public/videos/background.mp4",
    "public/videos/background2.mp4",
    "public/videos/background3.mp4",
    "public/videos/background4.mp4"
  ];
  var STATIC_BACKGROUND = "public/images/background_static.jpg";
  var videoElement = null;
  var isPlaying = true;
  function getRandomVideo() {
    return VIDEOS[Math.floor(Math.random() * VIDEOS.length)];
  }
  function initVideoBackground() {
    videoElement = getElementById("background-video");
    if (videoElement) {
      videoElement.src = getRandomVideo();
      videoElement.poster = STATIC_BACKGROUND;
    }
  }
  function initVideoToggle() {
    const toggle = getElementById("video-toggle");
    if (!toggle || !videoElement)
      return;
    const savedPref = localStorage.getItem("videoPlaying");
    if (savedPref === "false") {
      isPlaying = false;
      removeClass(toggle, "active");
      pauseAndShowStatic();
    } else {
      isPlaying = true;
      addClass(toggle, "active");
    }
    toggle.addEventListener("click", () => {
      if (isPlaying) {
        pauseAndShowStatic();
        removeClass(toggle, "active");
      } else {
        playVideo();
        addClass(toggle, "active");
      }
      localStorage.setItem("videoPlaying", String(isPlaying));
    });
  }
  function pauseAndShowStatic() {
    if (!videoElement)
      return;
    videoElement.pause();
    videoElement.removeAttribute("src");
    videoElement.load();
    isPlaying = false;
  }
  function playVideo() {
    if (!videoElement)
      return;
    videoElement.src = getRandomVideo();
    videoElement.play().catch(() => {
    });
    isPlaying = true;
  }

  // src/modules/carousel.ts
  var selectedCarousel = "professional";
  var professionalSwiper;
  var personalSwiper;
  var professionalRow;
  var personalRow;
  var professionalPrev;
  var professionalNext;
  var personalPrev;
  var personalNext;
  var trackpadDebounce = false;
  var TRACKPAD_DEBOUNCE_TIME = 300;
  var swiperConfig = {
    effect: "creative",
    grabCursor: true,
    centeredSlides: false,
    slidesPerView: 1,
    spaceBetween: 0,
    loop: true,
    creativeEffect: {
      prev: {
        shadow: true,
        translate: ["-120%", 0, -500],
        rotate: [0, 0, -15],
        opacity: 0,
        scale: 0.8
      },
      next: {
        shadow: true,
        translate: ["120%", 0, -500],
        rotate: [0, 0, 15],
        opacity: 0,
        scale: 0.8
      }
    },
    keyboard: {
      enabled: true,
      onlyInViewport: true
    },
    touchRatio: 1,
    resistanceRatio: 0.85,
    touchStartPreventDefault: false,
    touchStartForcePreventDefault: false,
    touchMoveStopPropagation: false,
    simulateTouch: true,
    allowTouchMove: true,
    touchEventsTarget: "container",
    threshold: 10,
    passiveListeners: true,
    speed: 900
  };
  function selectCarousel(carousel) {
    selectedCarousel = carousel;
    if (carousel === "professional") {
      addClass(professionalRow, "selected");
      removeClass(personalRow, "selected");
    } else {
      addClass(personalRow, "selected");
      removeClass(professionalRow, "selected");
    }
  }
  function updateArrowStates() {
    const professionalSwiperEl = querySelector(".professional-swiper");
    const personalSwiperEl = querySelector(".personal-swiper");
    if (!professionalSwiperEl || !personalSwiperEl)
      return;
    if (selectedCarousel === "professional") {
      professionalPrev.style.opacity = "1";
      professionalNext.style.opacity = "1";
      professionalPrev.style.pointerEvents = "auto";
      professionalNext.style.pointerEvents = "auto";
      professionalSwiper.allowTouchMove = true;
      professionalSwiper.enable();
      addClass(professionalSwiperEl, "swiper-enabled");
      removeClass(professionalSwiperEl, "swiper-disabled");
      personalPrev.style.opacity = "0.3";
      personalNext.style.opacity = "0.3";
      personalPrev.style.pointerEvents = "none";
      personalNext.style.pointerEvents = "none";
      personalSwiper.allowTouchMove = false;
      personalSwiper.disable();
      addClass(personalSwiperEl, "swiper-disabled");
      removeClass(personalSwiperEl, "swiper-enabled");
    } else {
      personalPrev.style.opacity = "1";
      personalNext.style.opacity = "1";
      personalPrev.style.pointerEvents = "auto";
      personalNext.style.pointerEvents = "auto";
      personalSwiper.allowTouchMove = true;
      personalSwiper.enable();
      addClass(personalSwiperEl, "swiper-enabled");
      removeClass(personalSwiperEl, "swiper-disabled");
      professionalPrev.style.opacity = "0.3";
      professionalNext.style.opacity = "0.3";
      professionalPrev.style.pointerEvents = "none";
      professionalNext.style.pointerEvents = "none";
      professionalSwiper.allowTouchMove = false;
      professionalSwiper.disable();
      addClass(professionalSwiperEl, "swiper-disabled");
      removeClass(professionalSwiperEl, "swiper-enabled");
    }
  }
  function handleTrackpadSwipe(e, swiper) {
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
  function professionalTrackpadHandler(e) {
    handleTrackpadSwipe(e, professionalSwiper);
  }
  function personalTrackpadHandler(e) {
    handleTrackpadSwipe(e, personalSwiper);
  }
  function updateTrackpadListeners() {
    professionalRow.removeEventListener("wheel", professionalTrackpadHandler);
    personalRow.removeEventListener("wheel", personalTrackpadHandler);
    if (selectedCarousel === "professional") {
      professionalRow.addEventListener("wheel", professionalTrackpadHandler, { passive: false });
    } else {
      personalRow.addEventListener("wheel", personalTrackpadHandler, { passive: false });
    }
  }
  function initTwoFingerSwipe() {
    let isTwoFingerSwipe = false;
    [professionalRow, personalRow].forEach((row, index) => {
      row.addEventListener("touchstart", (e) => {
        if (e.touches.length === 2) {
          isTwoFingerSwipe = true;
        }
      }, { passive: true });
      row.addEventListener("touchmove", (e) => {
        if (isTwoFingerSwipe && e.touches.length === 2) {
        }
      }, { passive: true });
      row.addEventListener("touchend", () => {
        if (isTwoFingerSwipe) {
          selectCarousel(index === 0 ? "professional" : "personal");
          updateArrowStates();
          isTwoFingerSwipe = false;
        }
      }, { passive: true });
    });
  }
  function initKeyboardNavigation() {
    document.addEventListener("keydown", (e) => {
      if (e.key === "ArrowLeft") {
        if (selectedCarousel === "professional") {
          professionalSwiper.slidePrev();
        } else {
          personalSwiper.slidePrev();
        }
      } else if (e.key === "ArrowRight") {
        if (selectedCarousel === "professional") {
          professionalSwiper.slideNext();
        } else {
          personalSwiper.slideNext();
        }
      } else if (e.key === "ArrowDown") {
        selectCarousel("personal");
        updateArrowStates();
      } else if (e.key === "ArrowUp") {
        selectCarousel("professional");
        updateArrowStates();
      }
    });
  }
  function initHoverSelection() {
    professionalRow.addEventListener("mouseenter", () => {
      selectCarousel("professional");
      updateArrowStates();
      updateTrackpadListeners();
    });
    personalRow.addEventListener("mouseenter", () => {
      selectCarousel("personal");
      updateArrowStates();
      updateTrackpadListeners();
    });
  }
  function initCarousels() {
    if (typeof Swiper === "undefined") {
      console.warn("Swiper not loaded - carousel disabled");
      return;
    }
    const profRow = querySelector(".professional-section .carousel-row");
    const persRow = querySelector(".personal-section .carousel-row");
    if (!profRow || !persRow)
      return;
    professionalRow = profRow;
    personalRow = persRow;
    const profPrev = querySelector(".professional-prev");
    const profNext = querySelector(".professional-next");
    const persPrev = querySelector(".personal-prev");
    const persNext = querySelector(".personal-next");
    if (!profPrev || !profNext || !persPrev || !persNext)
      return;
    professionalPrev = profPrev;
    professionalNext = profNext;
    personalPrev = persPrev;
    personalNext = persNext;
    professionalSwiper = new Swiper(".professional-swiper", {
      ...swiperConfig,
      navigation: {
        nextEl: ".professional-next",
        prevEl: ".professional-prev"
      },
      pagination: {
        el: ".professional-pagination",
        clickable: true
      }
    });
    personalSwiper = new Swiper(".personal-swiper", {
      ...swiperConfig,
      navigation: {
        nextEl: ".personal-next",
        prevEl: ".personal-prev"
      },
      pagination: {
        el: ".personal-pagination",
        clickable: true
      }
    });
    addClass(professionalRow, "selected");
    updateArrowStates();
    initTwoFingerSwipe();
    initKeyboardNavigation();
    initHoverSelection();
    updateTrackpadListeners();
  }
  function getSelectedCarousel() {
    return selectedCarousel;
  }

  // src/modules/mobileScroll.ts
  function throttle(func, limit) {
    let inThrottle = false;
    return function(...args) {
      if (!inThrottle) {
        func.apply(this, args);
        inThrottle = true;
        setTimeout(() => {
          inThrottle = false;
        }, limit);
      }
    };
  }
  function getCarouselCenterY(carousel) {
    const rect = carousel.getBoundingClientRect();
    return rect.top + rect.height / 2;
  }
  function isScrolledPastCarousels(personalRow2) {
    const rect = personalRow2.getBoundingClientRect();
    return rect.bottom < window.innerHeight / 2;
  }
  function selectCarouselByScroll(professionalRow2, personalRow2) {
    if (isScrolledPastCarousels(personalRow2)) {
      return;
    }
    const viewportCenter = window.innerHeight / 2;
    const professionalCenter = getCarouselCenterY(professionalRow2);
    const personalCenter = getCarouselCenterY(personalRow2);
    const professionalDistance = Math.abs(viewportCenter - professionalCenter);
    const personalDistance = Math.abs(viewportCenter - personalCenter);
    const currentSelection = getSelectedCarousel();
    if (professionalDistance < personalDistance) {
      if (currentSelection !== "professional") {
        selectCarousel("professional");
        updateArrowStates();
      }
    } else {
      if (currentSelection !== "personal") {
        selectCarousel("personal");
        updateArrowStates();
      }
    }
  }
  function initMobileScrollSelection() {
    const professionalRow2 = querySelector(".professional-section .carousel-row");
    const personalRow2 = querySelector(".personal-section .carousel-row");
    if (!professionalRow2 || !personalRow2)
      return;
    const throttledSelect = throttle(
      () => selectCarouselByScroll(professionalRow2, personalRow2),
      150
      // Throttle to reduce layout thrashing
    );
    window.addEventListener("scroll", throttledSelect, { passive: true });
    setTimeout(() => selectCarouselByScroll(professionalRow2, personalRow2), 100);
    window.addEventListener("resize", throttle(() => {
      selectCarouselByScroll(professionalRow2, personalRow2);
    }, 200), { passive: true });
  }

  // src/modules/gallery.ts
  var galleryEnabled = false;
  function setThumbnailBackgrounds() {
    const links = querySelectorAll(".link");
    links.forEach((link) => {
      const previewUrl = link.getAttribute("data-preview");
      if (previewUrl) {
        setCSSProperty(link, "--thumbnail-url", `url(${previewUrl})`);
      }
    });
  }
  function toggleGalleryMode(button) {
    galleryEnabled = !galleryEnabled;
    localStorage.setItem("galleryEnabled", String(galleryEnabled));
    if (galleryEnabled) {
      setThumbnailBackgrounds();
      addClass(document.body, "gallery-mode");
      addClass(button, "active");
    } else {
      removeClass(document.body, "gallery-mode");
      removeClass(button, "active");
    }
  }
  function initGalleryToggle() {
    const galleryToggle = getElementById("gallery-toggle");
    if (!galleryToggle)
      return;
    galleryEnabled = localStorage.getItem("galleryEnabled") === "true";
    if (galleryEnabled) {
      setThumbnailBackgrounds();
      addClass(document.body, "gallery-mode");
      addClass(galleryToggle, "active");
    }
    galleryToggle.addEventListener("click", () => toggleGalleryMode(galleryToggle));
  }

  // src/modules/performanceMode.ts
  var isLiteMode = false;
  function enableLiteMode() {
    document.body.classList.add("lite-mode");
    isLiteMode = true;
    const videoToggle = getElementById("video-toggle");
    if (videoToggle && videoToggle.classList.contains("active")) {
      videoToggle.click();
    }
  }
  function disableLiteMode() {
    document.body.classList.remove("lite-mode");
    isLiteMode = false;
    const videoToggle = getElementById("video-toggle");
    if (videoToggle && !videoToggle.classList.contains("active")) {
      videoToggle.click();
    }
  }
  function prefersReducedMotion() {
    return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  }
  function initPerformanceMode() {
    const toggle = getElementById("lite-toggle");
    if (prefersReducedMotion()) {
      enableLiteMode();
      if (toggle)
        addClass(toggle, "active");
      return;
    }
    if (!toggle)
      return;
    const savedPref = localStorage.getItem("liteMode");
    if (savedPref === "true") {
      isLiteMode = true;
      addClass(toggle, "active");
      enableLiteMode();
    }
    toggle.addEventListener("click", () => {
      if (isLiteMode) {
        disableLiteMode();
        removeClass(toggle, "active");
      } else {
        enableLiteMode();
        addClass(toggle, "active");
      }
      localStorage.setItem("liteMode", String(isLiteMode));
    });
    window.matchMedia("(prefers-reduced-motion: reduce)").addEventListener("change", (e) => {
      if (e.matches && !isLiteMode) {
        enableLiteMode();
        addClass(toggle, "active");
      }
    });
  }

  // src/modules/smoothSnap.ts
  var isScrolling = false;
  var scrollTimeout;
  var SCROLL_DURATION = 800;
  function smoothScrollTo(targetY, duration) {
    const startY = window.scrollY;
    const difference = targetY - startY;
    const startTime = performance.now();
    function step(currentTime) {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const easeProgress = 1 - Math.pow(1 - progress, 3);
      window.scrollTo(0, startY + difference * easeProgress);
      if (progress < 1) {
        requestAnimationFrame(step);
      } else {
        isScrolling = false;
      }
    }
    isScrolling = true;
    requestAnimationFrame(step);
  }
  function findNearestSnapPoint() {
    const header = document.querySelector("header");
    const professionalSection = document.querySelector(".professional-section");
    const personalSection = document.querySelector(".personal-section");
    const snapPoints = [];
    if (header) {
      snapPoints.push(header.getBoundingClientRect().top + window.scrollY);
    }
    if (professionalSection) {
      snapPoints.push(professionalSection.getBoundingClientRect().top + window.scrollY);
    }
    if (personalSection) {
      snapPoints.push(personalSection.getBoundingClientRect().top + window.scrollY);
    }
    const currentScroll = window.scrollY;
    let nearest = snapPoints[0];
    let minDistance = Math.abs(currentScroll - nearest);
    for (const point of snapPoints) {
      const distance = Math.abs(currentScroll - point);
      if (distance < minDistance) {
        minDistance = distance;
        nearest = point;
      }
    }
    return nearest;
  }
  function handleScrollEnd() {
    if (isScrolling)
      return;
    const nearestSnap = findNearestSnapPoint();
    const currentScroll = window.scrollY;
    const threshold = 50;
    if (Math.abs(currentScroll - nearestSnap) > threshold) {
      smoothScrollTo(nearestSnap, SCROLL_DURATION);
    }
  }
  function initSmoothSnap() {
    document.documentElement.style.scrollSnapType = "none";
    window.addEventListener("scroll", () => {
      clearTimeout(scrollTimeout);
      scrollTimeout = setTimeout(handleScrollEnd, 150);
    }, { passive: true });
  }

  // src/main.ts
  function initApp() {
    initCollapsibleSections();
    initVideoBackground();
    initVideoToggle();
    initCarousels();
    initMobileScrollSelection();
    initGalleryToggle();
    initPerformanceMode();
    initSmoothSnap();
  }
  function startApp() {
    requestAnimationFrame(() => {
      requestAnimationFrame(initApp);
    });
  }
  document.addEventListener("DOMContentLoaded", () => {
    if (typeof Swiper !== "undefined") {
      startApp();
    } else {
      const timeout = setTimeout(startApp, 5e3);
      window.addEventListener("swiperReady", () => {
        clearTimeout(timeout);
        startApp();
      });
    }
  });
})();
//# sourceMappingURL=script.js.map
