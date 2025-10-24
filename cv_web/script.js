document.addEventListener('DOMContentLoaded', () => {
    // Dynamically generate the side navigation
    const sideNav = document.getElementById('side-nav');
    const headings = document.querySelectorAll('main h2, main h3');
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
        
        if (!heading.id) {
            heading.id = heading.textContent.trim().toLowerCase().replace(/\s+/g, '-');
        }

        const listItem = document.createElement('li');
        const link = document.createElement('a');
        link.href = `#${heading.id}`;
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

    // Add collapsible functionality to the generated nav
    sideNav.querySelectorAll('li > a').forEach(link => {
        const sublist = link.nextElementSibling;
        if (sublist && sublist.tagName === 'UL') {
            link.classList.add('collapsible-nav');
            sublist.style.display = 'block'; // Start expanded

            link.addEventListener('click', (e) => {
                e.preventDefault();
                sublist.style.display = sublist.style.display === 'none' ? 'block' : 'none';
                link.classList.toggle('open');
            });
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
        if (!menuOpenedOnce && window.pageYOffset >= careerSection.offsetTop - 60) {
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
    const navToggle = document.getElementById('nav-toggle');
    const mainContent = document.getElementById('main-content');

    navToggle.addEventListener('click', () => {
        sideNav.classList.toggle('open');
        mainContent.classList.toggle('nav-open');
    });

    // Auto-close on link click
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            sideNav.classList.remove('open');
            mainContent.classList.remove('nav-open');
        });
    });

    // Close nav when clicking outside
    mainContent.addEventListener('click', () => {
        if (sideNav.classList.contains('open')) {
            sideNav.classList.remove('open');
            mainContent.classList.remove('nav-open');
        }
    });

    mainContent.addEventListener('touchend', () => {
        if (sideNav.classList.contains('open')) {
            sideNav.classList.remove('open');
            mainContent.classList.remove('nav-open');
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
});
