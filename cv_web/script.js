document.addEventListener('DOMContentLoaded', () => {
    // Dynamically generate the side navigation
    const sideNav = document.getElementById('side-nav');
    const navToggle = document.getElementById('nav-toggle');
    const mainContent = document.getElementById('main-content');
    const headings = document.querySelectorAll('main h2, main h3');
    const careerSection = document.getElementById('career');
    let currentLists = [document.createElement('ul')];
    sideNav.appendChild(currentLists[0]);

    // Add HOME button
    const homeListItem = document.createElement('li');
    const homeLink = document.createElement('a');
    homeLink.href = '#';
    homeLink.textContent = 'HOME';
    homeListItem.appendChild(homeLink);
    currentLists[0].appendChild(homeListItem);

    headings.forEach(heading => {
        const level = parseInt(heading.tagName.substring(1)) - 2; // h2 -> 0, h3 -> 1
        const isMainSection = heading.tagName === 'H2'; // Track if it's a main section

        if (!heading.id) {
            heading.id = heading.textContent.trim().toLowerCase().replace(/\s+/g, '-');
        }

        const listItem = document.createElement('li');
        const link = document.createElement('a');
        link.href = `#${heading.id}`;

        // Mark main section links with a data attribute
        if (isMainSection) {
            link.setAttribute('data-main-section', 'true');
        }

        if (heading.textContent === 'Intro') {
            link.textContent = heading.textContent.toUpperCase();
        } else {
            link.textContent = heading.textContent;
        }
        listItem.appendChild(link);

        while (level >= currentLists.length) {
            const newList = document.createElement('ul');
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

    // Add collapsible functionality to the generated nav (only for sub-sections, not main sections)
    sideNav.querySelectorAll('li > a').forEach(link => {
        const sublist = link.nextElementSibling;
        const isMainSection = link.getAttribute('data-main-section') === 'true';

        // Only make h3+ level items collapsible, not main h2 sections
        if (sublist && sublist.tagName === 'UL' && !isMainSection) {
            link.classList.add('collapsible-nav');
            sublist.style.display = 'block'; // Start expanded

            link.addEventListener('click', (e) => {
                // Toggle the submenu display
                sublist.style.display = sublist.style.display === 'none' ? 'block' : 'none';
                link.classList.toggle('open');
                // Don't prevent default or stop propagation - let menu close handler work
            });
        }
    });

    // SIMPLE APPROACH: Close menu when ANY link in the nav is clicked
    sideNav.addEventListener('click', (e) => {
        // Check if clicked element is a link or inside a link
        const clickedLink = e.target.closest('a');
        if (clickedLink && clickedLink.getAttribute('href')) {
            // Close the menu for ANY link click
            sideNav.classList.remove('open');
            mainContent.classList.remove('nav-open');
            navToggle.classList.remove('open');
        }
    });

    // Scroll-spy functionality
    const scrollSpyHeadings = document.querySelectorAll('main h2, main h3');
    const navLinks = sideNav.querySelectorAll('a');
    const headerContent = document.querySelector('.header-content');
    let menuOpenedOnce = false;

    window.addEventListener('scroll', () => {
        // --- Header Fade-Out ---
        const scrollPosition = window.pageYOffset;
        const fadeOutThreshold = 200; // Pixels to scroll before fade starts
        if (headerContent) {
            if (scrollPosition < fadeOutThreshold) {
                headerContent.style.opacity = 1 - (scrollPosition / fadeOutThreshold);
            } else {
                headerContent.style.opacity = 0;
            }
        }

        let current = '';
        scrollSpyHeadings.forEach(heading => {
            const headingTop = heading.offsetTop;
            if (pageYOffset >= headingTop - 60) {
                current = heading.getAttribute('id');
            }
        });

        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href').substring(1) === current) {
                link.classList.add('active');
            }
        });

        // Auto-open menu at Career section
        if (!menuOpenedOnce && careerSection && window.pageYOffset >= careerSection.offsetTop - 60) {
            sideNav.classList.add('open');
            mainContent.classList.add('nav-open');
            menuOpenedOnce = true;
        }
    });

    // Select all elements that can act as a collapser
    const collapsers = document.querySelectorAll('.collapser');

    collapsers.forEach(collapser => {
        const content = collapser.nextElementSibling;
        
        if (!content || !content.classList.contains('collapsible-content')) {
            return;
        }

        if (collapser.classList.contains('open')) {
            // Content starts open
        } else {
            collapser.classList.add('closed');
            content.classList.remove('open');
        }

        collapser.addEventListener('click', () => {
            if (content.classList.contains('open')) {
                content.classList.remove('open');
                collapser.classList.remove('open');
                collapser.classList.add('closed');
            } else {
                content.classList.add('open');
                collapser.classList.add('open');
                collapser.classList.remove('closed');
                    }
                });
            
                // --- Custom Smooth Scroll for Arrow ---
                const scrollArrow = document.querySelector('.scroll-down-arrow');
                if (scrollArrow) {
                    scrollArrow.addEventListener('click', function(e) {
                        e.preventDefault();
                        const targetId = this.getAttribute('href');
                        const targetElement = document.querySelector(targetId);
                                    if (targetElement) {
                                        smoothScrollTo(targetElement.offsetTop, 3000); // 3000ms = 3 seconds
                                    }                    });
                }
            
                function smoothScrollTo(endY, duration) {
                    const startY = window.pageYOffset;
                    const distanceY = endY - startY;
                    let startTime = null;
            
                    function animation(currentTime) {
                        if (startTime === null) startTime = currentTime;
                        const timeElapsed = currentTime - startTime;
                        const run = ease(timeElapsed, startY, distanceY, duration);
                        window.scrollTo(0, run);
                        if (timeElapsed < duration) requestAnimationFrame(animation);
                    }
            
                    function ease(t, b, c, d) {
                        t /= d / 2;
                        if (t < 1) return c / 2 * t * t + b;
                        t--;
                        return -c / 2 * (t * (t - 2) - 1) + b;
                    }
            
                    requestAnimationFrame(animation);
                }
            });

    // Side Navigation Toggle
    navToggle.addEventListener('click', () => {
        sideNav.classList.toggle('open');
        mainContent.classList.toggle('nav-open');
        navToggle.classList.toggle('open');
    });

    // Auto-expand collapsed sections when navigating to them
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            const targetId = link.getAttribute('href');

            // If it's an actual anchor link (not just a navigation item)
            if (targetId && targetId.startsWith('#') && targetId !== '#') {
                const targetElement = document.querySelector(targetId);

                // Open ALL parent collapsible sections
                if (targetElement) {
                    let currentElement = targetElement;

                    // Traverse up the DOM tree
                    while (currentElement && currentElement !== document.body) {
                        // If we find a collapsible content container, open it
                        if (currentElement.classList.contains('collapsible-content')) {
                            if (!currentElement.classList.contains('open')) {
                                const collapser = currentElement.previousElementSibling;
                                if (collapser && collapser.classList.contains('collapser')) {
                                    currentElement.classList.add('open');
                                    collapser.classList.add('open');
                                    collapser.classList.remove('closed');
                                }
                            }
                        }

                        // If the current element itself is a collapser, open its content
                        if (currentElement.classList.contains('collapser')) {
                            const content = currentElement.nextElementSibling;
                            if (content && content.classList.contains('collapsible-content')) {
                                if (!content.classList.contains('open')) {
                                    content.classList.add('open');
                                    currentElement.classList.add('open');
                                    currentElement.classList.remove('closed');
                                }
                            }
                        }

                        currentElement = currentElement.parentElement;
                    }
                }
            }
            // REMOVED menu close from here - now handled by delegated handler on sideNav
        });
    });

    // Close nav when clicking outside
    mainContent.addEventListener('click', () => {
        if (sideNav.classList.contains('open')) {
            sideNav.classList.remove('open');
            mainContent.classList.remove('nav-open');
            navToggle.classList.remove('open');
        }
    });

    mainContent.addEventListener('touchend', () => {
        if (sideNav.classList.contains('open')) {
            sideNav.classList.remove('open');
            mainContent.classList.remove('nav-open');
            navToggle.classList.remove('open');
        }
    });

    // --- Desktop View Toggle ---
    const desktopViewToggle = document.getElementById('desktop-view-toggle');
    const viewport = document.querySelector('meta[name="viewport"]');
    let isDesktopView = false;

    if (desktopViewToggle) {
        desktopViewToggle.addEventListener('click', (event) => {
            event.preventDefault();
            isDesktopView = !isDesktopView;
            if (isDesktopView) {
                const DESKTOP_WIDTH = 1024;
                const mobileWidth = window.screen.width;
                const scale = mobileWidth / DESKTOP_WIDTH;
                viewport.setAttribute('content', `width=${DESKTOP_WIDTH}, initial-scale=${scale}`);
                desktopViewToggle.innerHTML = '<i class="fas fa-mobile-alt"></i>';
            } else {
                viewport.setAttribute('content', 'width=device-width, initial-scale=1.0');
                desktopViewToggle.innerHTML = '<i class="fas fa-desktop"></i>';
            }
        });
    }

    // --- Font Size Control ---
    const increaseFontSizeBtn = document.getElementById('increase-font-size-btn');
    const resetFontSizeBtn = document.getElementById('reset-font-size-btn');
    const body = document.body;
    const initialFontSize = getComputedStyle(body).fontSize;

    if (increaseFontSizeBtn) {
        increaseFontSizeBtn.addEventListener('click', (event) => {
            event.preventDefault();
            let currentFontSize = parseFloat(getComputedStyle(body).fontSize);
            body.style.fontSize = (currentFontSize * 1.2) + 'px';
        });
    }

    if (resetFontSizeBtn) {
        resetFontSizeBtn.addEventListener('click', (event) => {
            event.preventDefault();
            body.style.fontSize = initialFontSize;
        });
    }

    // --- Easter Egg Logic ---
    const nameTitle = document.querySelector('.header-content h1');
    let clickCount = 0;
    let clickTimer = null;

    if (nameTitle) {
        nameTitle.addEventListener('click', () => {
            clickCount++;

            if (clickTimer) {
                clearTimeout(clickTimer);
            }

            clickTimer = setTimeout(() => {
                clickCount = 0; // Reset after 2 seconds of inactivity
            }, 2000);

            if (clickCount === 7) {
                clickCount = 0;
                clearTimeout(clickTimer);
                showDevModeToast();
                createStarburst();
            }
        });
    }

    function showDevModeToast() {
        const toast = document.createElement('div');
        toast.className = 'dev-mode-toast';
        toast.textContent = 'Dev Mode Unlocked';
        document.body.appendChild(toast);

        // Fade in
        setTimeout(() => {
            toast.style.opacity = '1';
        }, 10);

        // Fade out and remove
        setTimeout(() => {
            toast.style.opacity = '0';
            setTimeout(() => {
                toast.remove();
            }, 500);
        }, 2500);
    }

    function createStarburst() {
        const particleCount = 50; // Increased for a fuller effect
        const screenWidth = window.innerWidth;
        const screenHeight = window.innerHeight;

        for (let i = 0; i < particleCount; i++) {
            const particle = document.createElement('div');
            particle.className = 'particle';
            document.body.appendChild(particle);

            const startX = Math.random() * screenWidth;
            const startY = Math.random() * screenHeight;

            const angle = Math.random() * 360;
            const distance = Math.random() * 100 + 50; // How far they travel
            const endX = startX + Math.cos(angle * Math.PI / 180) * distance;
            const endY = startY + Math.sin(angle * Math.PI / 180) * distance;

            particle.style.left = `${startX}px`;
            particle.style.top = `${startY}px`;

            // Trigger animation
            setTimeout(() => {
                particle.style.left = `${endX}px`;
                particle.style.top = `${endY}px`;
            }, 10);

            // Remove particle after animation
            setTimeout(() => {
                particle.remove();
            }, 7000);
        }
    }

    // --- Custom Animation Engine for Fade In/Fade Out ---
    function animate(element, targetOpacity, targetTransform, duration) {
        if (targetOpacity > 0) {
            element.style.visibility = 'visible';
        }

        const startOpacity = parseFloat(window.getComputedStyle(element).opacity);
        const matrix = new DOMMatrix(window.getComputedStyle(element).transform);
        const startTransform = matrix.m42;
        let startTime = null;

        function animationStep(timestamp) {
            if (!startTime) startTime = timestamp;
            const progress = Math.min((timestamp - startTime) / duration, 1);

            const currentOpacity = startOpacity + (targetOpacity - startOpacity) * progress;
            const currentTransform = startTransform + (targetTransform - startTransform) * progress;

            element.style.opacity = currentOpacity;
            element.style.transform = `translateY(${currentTransform}px)`;

            if (progress < 1) {
                requestAnimationFrame(animationStep);
            } else {
                if (targetOpacity === 0) {
                    element.style.visibility = 'hidden';
                }
            }
        }

        requestAnimationFrame(animationStep);
    }

    // --- Scroll Animation Logic using Intersection Observer ---
    const animatedSections = document.querySelectorAll('.animated-section');
    const animatedOnce = new Set(); // Track sections that have been animated
    let lastScrollY = window.scrollY;

    const observer = new IntersectionObserver((entries) => {
        const currentScrollY = window.scrollY;
        const scrollingDown = currentScrollY > lastScrollY;

        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // Always fade in when entering viewport
                animate(entry.target, 1, 0, 600);
                animatedOnce.add(entry.target);
            } else {
                // Only fade out when scrolling DOWN past a section
                // Keep visible when scrolling UP
                if (scrollingDown && animatedOnce.has(entry.target)) {
                    // Section is going above viewport - keep it visible
                    entry.target.style.opacity = '1';
                    entry.target.style.visibility = 'visible';
                } else if (!animatedOnce.has(entry.target)) {
                    // Section hasn't been seen yet, keep it hidden
                    animate(entry.target, 0, 30, 600);
                }
            }
        });

        lastScrollY = currentScrollY;
    }, {
        root: null,
        threshold: 0.15 // Trigger when 15% of the element is visible
    });

    animatedSections.forEach(section => {
        observer.observe(section);
    });
});
