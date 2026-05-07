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
  function toggleClass(element, className, force) {
    return element.classList.toggle(className, force);
  }
  function addClasses(element, ...classNames) {
    element.classList.add(...classNames);
  }
  function removeClasses(element, ...classNames) {
    element.classList.remove(...classNames);
  }
  function hasClass(element, className) {
    return element.classList.contains(className);
  }
  function createElement(tag, attributes, ...children) {
    const element = document.createElement(tag);
    if (attributes) {
      Object.entries(attributes).forEach(([key, value]) => {
        element.setAttribute(key, value);
      });
    }
    children.forEach((child) => {
      if (typeof child === "string") {
        element.appendChild(document.createTextNode(child));
      } else {
        element.appendChild(child);
      }
    });
    return element;
  }

  // src/modules/navigation.ts
  function generateSideNavigation(sideNav) {
    const headings = querySelectorAll("main h2, main h3");
    const rootList = createElement("ul");
    sideNav.appendChild(rootList);
    const currentLists = [rootList];
    const homeListItem = createElement("li");
    const homeLink = createElement("a", { href: "#" }, "HOME");
    homeListItem.appendChild(homeLink);
    currentLists[0].appendChild(homeListItem);
    headings.forEach((heading) => {
      const level = parseInt(heading.tagName.substring(1)) - 2;
      const isMainSection = heading.tagName === "H2";
      if (!heading.id) {
        heading.id = heading.textContent?.trim().toLowerCase().replace(/\s+/g, "-") || "";
      }
      const listItem = createElement("li");
      const link = createElement("a", { href: `#${heading.id}` });
      if (isMainSection) {
        link.setAttribute("data-main-section", "true");
      }
      link.textContent = heading.textContent === "Intro" ? heading.textContent.toUpperCase() : heading.textContent || "";
      listItem.appendChild(link);
      while (level >= currentLists.length) {
        const newList = createElement("ul");
        const lastItem = currentLists[currentLists.length - 1].lastChild;
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
  function initCollapsibleNav(sideNav) {
    const navLinks = querySelectorAll("li > a", sideNav);
    navLinks.forEach((link) => {
      const sublist = link.nextElementSibling;
      const isMainSection = link.getAttribute("data-main-section") === "true";
      if (sublist && sublist.tagName === "UL" && !isMainSection) {
        addClasses(link, "collapsible-nav");
        sublist.style.display = "block";
        link.addEventListener("click", () => {
          const ul = sublist;
          ul.style.display = ul.style.display === "none" ? "block" : "none";
          toggleClass(link, "open");
        });
      }
    });
  }
  function initNavigationToggle(elements) {
    const { sideNav, navToggle, mainContent } = elements;
    navToggle.addEventListener("click", () => {
      toggleClass(sideNav, "open");
      toggleClass(mainContent, "nav-open");
      toggleClass(navToggle, "open");
    });
    sideNav.addEventListener("click", (e) => {
      const clickedLink = e.target.closest("a");
      if (clickedLink && clickedLink.getAttribute("href")) {
        removeClasses(sideNav, "open");
        removeClasses(mainContent, "nav-open");
        removeClasses(navToggle, "open");
      }
    });
    mainContent.addEventListener("click", () => {
      if (hasClass(sideNav, "open")) {
        removeClasses(sideNav, "open");
        removeClasses(mainContent, "nav-open");
        removeClasses(navToggle, "open");
      }
    });
    mainContent.addEventListener("touchend", () => {
      if (hasClass(sideNav, "open")) {
        removeClasses(sideNav, "open");
        removeClasses(mainContent, "nav-open");
        removeClasses(navToggle, "open");
      }
    });
  }
  function initAutoExpandOnNavigate(sideNav) {
    const navLinks = querySelectorAll("a", sideNav);
    navLinks.forEach((link) => {
      link.addEventListener("click", () => {
        const targetId = link.getAttribute("href");
        if (targetId && targetId.startsWith("#") && targetId !== "#") {
          const targetElement = querySelector(targetId);
          if (targetElement) {
            let currentElement = targetElement;
            while (currentElement && currentElement !== document.body) {
              if (hasClass(currentElement, "collapsible-content")) {
                if (!hasClass(currentElement, "open")) {
                  const collapser = currentElement.previousElementSibling;
                  if (collapser && hasClass(collapser, "collapser")) {
                    addClasses(currentElement, "open");
                    addClasses(collapser, "open");
                    removeClasses(collapser, "closed");
                  }
                }
              }
              if (hasClass(currentElement, "collapser")) {
                const content = currentElement.nextElementSibling;
                if (content && hasClass(content, "collapsible-content")) {
                  if (!hasClass(content, "open")) {
                    addClasses(content, "open");
                    addClasses(currentElement, "open");
                    removeClasses(currentElement, "closed");
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

  // src/modules/collapsible.ts
  function initCollapsibleSections() {
    const collapsers = querySelectorAll(".collapser");
    collapsers.forEach((collapser) => {
      const content = collapser.nextElementSibling;
      if (!content || !hasClass(content, "collapsible-content")) {
        return;
      }
      if (!hasClass(collapser, "open")) {
        addClasses(collapser, "closed");
        removeClasses(content, "open");
      }
      collapser.addEventListener("click", () => {
        if (hasClass(content, "open")) {
          removeClasses(content, "open");
          removeClasses(collapser, "open");
          addClasses(collapser, "closed");
        } else {
          addClasses(content, "open");
          addClasses(collapser, "open");
          removeClasses(collapser, "closed");
        }
      });
    });
  }

  // src/utils/animation.ts
  function easeInOutQuad(t, b, c, d) {
    t /= d / 2;
    if (t < 1)
      return c / 2 * t * t + b;
    t--;
    return -c / 2 * (t * (t - 2) - 1) + b;
  }
  function smoothScrollTo(endY, duration) {
    const startY = window.pageYOffset;
    const distanceY = endY - startY;
    let startTime = null;
    function animation(currentTime) {
      if (startTime === null)
        startTime = currentTime;
      const timeElapsed = currentTime - startTime;
      const run = easeInOutQuad(timeElapsed, startY, distanceY, duration);
      window.scrollTo(0, run);
      if (timeElapsed < duration)
        requestAnimationFrame(animation);
    }
    requestAnimationFrame(animation);
  }
  function animateElement(element, targetOpacity, targetTransformY, duration) {
    if (targetOpacity > 0) {
      element.style.visibility = "visible";
    }
    const startOpacity = parseFloat(window.getComputedStyle(element).opacity);
    const matrix = new DOMMatrix(window.getComputedStyle(element).transform);
    const startTransformY = matrix.m42;
    let startTime = null;
    function animationStep(timestamp) {
      if (!startTime)
        startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      const currentOpacity = startOpacity + (targetOpacity - startOpacity) * progress;
      const currentTransformY = startTransformY + (targetTransformY - startTransformY) * progress;
      element.style.opacity = String(currentOpacity);
      element.style.transform = `translateY(${currentTransformY}px)`;
      if (progress < 1) {
        requestAnimationFrame(animationStep);
      } else {
        if (targetOpacity === 0) {
          element.style.visibility = "hidden";
        }
      }
    }
    requestAnimationFrame(animationStep);
  }
  function createStarburst(particleCount = 50) {
    const screenWidth = window.innerWidth;
    const screenHeight = window.innerHeight;
    for (let i = 0; i < particleCount; i++) {
      const particle = document.createElement("div");
      particle.className = "particle";
      document.body.appendChild(particle);
      const startX = Math.random() * screenWidth;
      const startY = Math.random() * screenHeight;
      const angle = Math.random() * 360;
      const distance = Math.random() * 100 + 50;
      const endX = startX + Math.cos(angle * Math.PI / 180) * distance;
      const endY = startY + Math.sin(angle * Math.PI / 180) * distance;
      particle.style.left = `${startX}px`;
      particle.style.top = `${startY}px`;
      setTimeout(() => {
        particle.style.left = `${endX}px`;
        particle.style.top = `${endY}px`;
      }, 10);
      setTimeout(() => {
        particle.remove();
      }, 7e3);
    }
  }

  // src/modules/scroll.ts
  var DEFAULT_CONFIG = {
    headerFadeThreshold: 200,
    headingOffset: 60
  };
  function initScrollSpy(sideNav, mainContent, config = DEFAULT_CONFIG) {
    const scrollSpyHeadings = querySelectorAll("main h2, main h3");
    const navLinks = querySelectorAll("a", sideNav);
    const headerContent = querySelector(".header-content");
    const careerSection = getElementById("career");
    let menuOpenedOnce = false;
    window.addEventListener("scroll", () => {
      const scrollPosition = window.pageYOffset;
      if (headerContent) {
        if (scrollPosition < config.headerFadeThreshold) {
          headerContent.style.opacity = String(1 - scrollPosition / config.headerFadeThreshold);
        } else {
          headerContent.style.opacity = "0";
        }
      }
      let current = "";
      scrollSpyHeadings.forEach((heading) => {
        const headingTop = heading.offsetTop;
        if (pageYOffset >= headingTop - config.headingOffset) {
          current = heading.getAttribute("id") || "";
        }
      });
      navLinks.forEach((link) => {
        removeClasses(link, "active");
        if (link.getAttribute("href")?.substring(1) === current) {
          addClasses(link, "active");
        }
      });
      if (!menuOpenedOnce && careerSection && window.pageYOffset >= careerSection.offsetTop - config.headingOffset) {
        addClasses(sideNav, "open");
        addClasses(mainContent, "nav-open");
        menuOpenedOnce = true;
      }
    });
  }
  function initScrollAnimations() {
    const animatedSections = querySelectorAll(".animated-section");
    const animatedOnce = /* @__PURE__ */ new Set();
    let lastScrollY = window.scrollY;
    const observer = new IntersectionObserver(
      (entries) => {
        const currentScrollY = window.scrollY;
        const scrollingDown = currentScrollY > lastScrollY;
        entries.forEach((entry) => {
          const target = entry.target;
          if (entry.isIntersecting) {
            animateElement(target, 1, 0, 600);
            animatedOnce.add(target);
          } else {
            if (scrollingDown && animatedOnce.has(target)) {
              target.style.opacity = "1";
              target.style.visibility = "visible";
            } else if (!animatedOnce.has(target)) {
              animateElement(target, 0, 30, 600);
            }
          }
        });
        lastScrollY = currentScrollY;
      },
      {
        root: null,
        threshold: 0.15
        // Trigger when 15% of the element is visible
      }
    );
    animatedSections.forEach((section) => {
      observer.observe(section);
    });
  }
  function initSmoothScrollArrow() {
    const scrollArrow = querySelector(".scroll-down-arrow");
    if (scrollArrow) {
      scrollArrow.addEventListener("click", function(e) {
        e.preventDefault();
        const targetId = this.getAttribute("href");
        if (targetId) {
          const targetElement = querySelector(targetId);
          if (targetElement) {
            smoothScrollTo(targetElement.offsetTop, 3e3);
          }
        }
      });
    }
  }

  // src/modules/floatingMenu.ts
  function initFloatingMenu(elements) {
    const { floatingBtn, floatingMenu, navToggle } = elements;
    floatingBtn.addEventListener("click", (event) => {
      event.stopPropagation();
      toggleClass(floatingMenu, "show");
      toggleClass(floatingBtn, "active");
    });
    window.addEventListener("click", (event) => {
      const target = event.target;
      if (hasClass(floatingMenu, "show") && !floatingMenu.contains(target) && !floatingBtn.contains(target)) {
        removeClasses(floatingMenu, "show");
        removeClasses(floatingBtn, "active");
      }
    });
    initScrollFade(floatingBtn, navToggle);
  }
  function initScrollFade(floatingBtn, navToggle) {
    let scrollTimeout;
    window.addEventListener("scroll", () => {
      addClasses(floatingBtn, "fade-out");
      if (navToggle)
        addClasses(navToggle, "fade-out");
      clearTimeout(scrollTimeout);
      scrollTimeout = setTimeout(() => {
        removeClasses(floatingBtn, "fade-out");
        if (navToggle)
          removeClasses(navToggle, "fade-out");
      }, 1e3);
    });
  }

  // src/modules/viewSettings.ts
  var DESKTOP_WIDTH = 1024;
  function initDesktopViewToggle() {
    const desktopViewToggle = getElementById("desktop-view-toggle");
    const viewport = querySelector('meta[name="viewport"]');
    if (!desktopViewToggle || !viewport)
      return;
    let isDesktopView = false;
    desktopViewToggle.addEventListener("click", (event) => {
      event.preventDefault();
      isDesktopView = !isDesktopView;
      if (isDesktopView) {
        const mobileWidth = window.screen.width;
        const scale = mobileWidth / DESKTOP_WIDTH;
        viewport.setAttribute("content", `width=${DESKTOP_WIDTH}, initial-scale=${scale}`);
        desktopViewToggle.innerHTML = '<i class="fas fa-mobile-alt"></i>';
      } else {
        viewport.setAttribute("content", "width=device-width, initial-scale=1.0");
        desktopViewToggle.innerHTML = '<i class="fas fa-desktop"></i>';
      }
    });
  }
  function initFontSizeControls() {
    const increaseFontSizeBtn = getElementById("increase-font-size-btn");
    const resetFontSizeBtn = getElementById("reset-font-size-btn");
    const body = document.body;
    const initialFontSize = getComputedStyle(body).fontSize;
    if (increaseFontSizeBtn) {
      increaseFontSizeBtn.addEventListener("click", (event) => {
        event.preventDefault();
        const currentFontSize = parseFloat(getComputedStyle(body).fontSize);
        body.style.fontSize = `${currentFontSize * 1.2}px`;
      });
    }
    if (resetFontSizeBtn) {
      resetFontSizeBtn.addEventListener("click", (event) => {
        event.preventDefault();
        body.style.fontSize = initialFontSize;
      });
    }
  }

  // src/modules/easterEgg.ts
  var DEFAULT_CONFIG2 = {
    clickThreshold: 7,
    resetTimeout: 2e3,
    particleCount: 50
  };
  function showDevModeToast() {
    const toast = createElement("div", { class: "dev-mode-toast" }, "Dev Mode Unlocked");
    document.body.appendChild(toast);
    setTimeout(() => {
      toast.style.opacity = "1";
    }, 10);
    setTimeout(() => {
      toast.style.opacity = "0";
      setTimeout(() => {
        toast.remove();
      }, 500);
    }, 2500);
  }
  function initEasterEgg(config = DEFAULT_CONFIG2) {
    const nameTitle = querySelector(".header-content h1");
    if (!nameTitle)
      return;
    let clickCount = 0;
    let clickTimer = null;
    nameTitle.addEventListener("click", () => {
      clickCount++;
      if (clickTimer) {
        clearTimeout(clickTimer);
      }
      clickTimer = setTimeout(() => {
        clickCount = 0;
      }, config.resetTimeout);
      if (clickCount === config.clickThreshold) {
        clickCount = 0;
        if (clickTimer)
          clearTimeout(clickTimer);
        showDevModeToast();
        createStarburst(config.particleCount);
      }
    });
  }

  // src/main.ts
  function initApp() {
    const sideNav = getElementById("side-nav");
    const navToggle = getElementById("nav-toggle");
    const mainContent = getElementById("main-content");
    const floatingBtn = getElementById("floating-btn");
    const floatingMenu = getElementById("floating-menu");
    if (sideNav && navToggle && mainContent) {
      generateSideNavigation(sideNav);
      initCollapsibleNav(sideNav);
      initNavigationToggle({ sideNav, navToggle, mainContent });
      initAutoExpandOnNavigate(sideNav);
      initScrollSpy(sideNav, mainContent);
    }
    initCollapsibleSections();
    initScrollAnimations();
    initSmoothScrollArrow();
    if (floatingBtn && floatingMenu) {
      initFloatingMenu({
        floatingBtn,
        floatingMenu,
        navToggle
      });
    }
    initDesktopViewToggle();
    initFontSizeControls();
    initEasterEgg();
  }
  document.addEventListener("DOMContentLoaded", initApp);
})();
//# sourceMappingURL=script.js.map
