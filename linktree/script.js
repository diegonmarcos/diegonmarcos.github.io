document.addEventListener('DOMContentLoaded', () => {

    // Handle collapsible sections
    const moreToggles = document.querySelectorAll('.more-toggle');

    // Initialize collapsible sections - open ones stay open, others closed
    document.querySelectorAll('.collapsible-content').forEach(content => {
        if (content.classList.contains('open')) {
            content.style.maxHeight = content.scrollHeight + 'px';
        } else {
            content.style.maxHeight = '0px';
        }
    });

    function updateParentHeights(element) {
        let parentCollapsible = element.parentElement.closest('.collapsible-content');
        while (parentCollapsible) {
            if (parentCollapsible.classList.contains('open')) {
                // Set to a very large value temporarily to measure actual content
                const currentHeight = parentCollapsible.style.maxHeight;
                parentCollapsible.style.maxHeight = 'none';
                const actualHeight = parentCollapsible.scrollHeight;
                parentCollapsible.style.maxHeight = currentHeight;

                // Trigger reflow
                parentCollapsible.offsetHeight;

                // Set to actual height
                parentCollapsible.style.maxHeight = actualHeight + 'px';
            }
            parentCollapsible = parentCollapsible.parentElement.closest('.collapsible-content');
        }
    }

    moreToggles.forEach(toggle => {
        toggle.addEventListener('click', () => {
            const targetId = toggle.getAttribute('data-target');
            const content = document.getElementById(targetId);

            if (content.classList.contains('open')) {
                // Close the collapsible
                content.classList.remove('open');
                toggle.classList.remove('open');
                content.style.maxHeight = '0px';

                // Update parent heights after closing
                setTimeout(() => updateParentHeights(content), 100);
            } else {
                // Open the collapsible
                content.classList.add('open');
                toggle.classList.add('open');
                content.style.maxHeight = content.scrollHeight + 'px';

                // Update this collapsible's height after a moment
                setTimeout(() => {
                    if (content.classList.contains('open')) {
                        content.style.maxHeight = content.scrollHeight + 'px';
                    }
                }, 50);

                // Update parent collapsibles multiple times to ensure proper sizing
                setTimeout(() => updateParentHeights(content), 100);
                setTimeout(() => updateParentHeights(content), 300);
                setTimeout(() => updateParentHeights(content), 500);
            }
        });
    });

    const videos = [
        'public/videos/background.mp4',
        'public/videos/background2.mp4',
        'public/videos/background3.mp4',
        'public/videos/background4.mp4'
    ];

    const videoElement = document.getElementById('background-video');
    const randomVideo = videos[Math.floor(Math.random() * videos.length)];
    videoElement.src = randomVideo;



    // ====================================
    // SWIPER.JS INITIALIZATION
    // ====================================

    // Common Swiper configuration
    const swiperConfig = {
        // Core parameters
        effect: 'creative',
        grabCursor: true,
        centeredSlides: false,
        slidesPerView: 1,
        spaceBetween: 0,
        loop: true,

        // Creative 3D card swipe effect
        creativeEffect: {
            prev: {
                // Previous card slides left with 3D rotation and fade
                shadow: true,
                translate: ['-120%', 0, -500],
                rotate: [0, 0, -15],
                opacity: 0,
                scale: 0.8,
            },
            next: {
                // Next card enters from right with 3D rotation and scale
                shadow: true,
                translate: ['120%', 0, -500],
                rotate: [0, 0, 15],
                opacity: 0,
                scale: 0.8,
            },
        },

        // Keyboard control
        keyboard: {
            enabled: true,
            onlyInViewport: true,
        },

        // Enhanced touch settings for multi-touch gestures
        touchRatio: 1,
        resistanceRatio: 0.85,
        touchStartPreventDefault: false,
        touchStartForcePreventDefault: false,
        touchMoveStopPropagation: false,
        simulateTouch: true,
        allowTouchMove: true,
        touchEventsTarget: 'container',

        // Threshold for swipe detection (pixels)
        threshold: 10,

        // Allow sliding with mouse
        passiveListeners: false,

        // Speed and transitions
        speed: 900,

        // Events
        on: {
            init: function() {
                console.log('Swiper initialized with 3D creative effect');
            },
            touchStart: function(swiper, event) {
                // Detect multi-touch (two-finger swipe)
                if (event.touches && event.touches.length === 2) {
                    console.log('Two-finger swipe detected');
                }
            },
            touchMove: function(swiper, event) {
                // Handle two-finger gestures
                if (event.touches && event.touches.length === 2) {
                    // Two-finger swipe is active
                }
            },
        },
    };

    // Initialize Professional Swiper
    const professionalSwiper = new Swiper('.professional-swiper', {
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

    // Initialize Personal Swiper
    const personalSwiper = new Swiper('.personal-swiper', {
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

    // ====================================
    // TWO-FINGER SWIPE SELECTION SYSTEM
    // ====================================

    let selectedCarousel = 'professional'; // Default selection
    const professionalRow = document.querySelector('.carousel-row:nth-of-type(1)');
    const personalRow = document.querySelector('.carousel-row:nth-of-type(2)');

    // Set initial selected state
    professionalRow.classList.add('selected');

    // Two-finger swipe detection variables
    let touchStartY = 0;
    let touchStartX = 0;
    let isTwoFingerSwipe = false;

    // Function to select carousel
    function selectCarousel(carousel) {
        selectedCarousel = carousel;

        if (carousel === 'professional') {
            professionalRow.classList.add('selected');
            personalRow.classList.remove('selected');
            console.log('Professional carousel selected');
        } else {
            personalRow.classList.add('selected');
            professionalRow.classList.remove('selected');
            console.log('Personal carousel selected');
        }
    }

    // Add touch event listeners to carousel rows
    [professionalRow, personalRow].forEach((row, index) => {
        row.addEventListener('touchstart', (e) => {
            if (e.touches.length === 2) {
                isTwoFingerSwipe = true;
                touchStartY = (e.touches[0].clientY + e.touches[1].clientY) / 2;
                touchStartX = (e.touches[0].clientX + e.touches[1].clientX) / 2;
            }
        });

        row.addEventListener('touchmove', (e) => {
            if (isTwoFingerSwipe && e.touches.length === 2) {
                e.preventDefault();
            }
        }, { passive: false });

        row.addEventListener('touchend', (e) => {
            if (isTwoFingerSwipe) {
                const touchEndY = touchStartY;
                const deltaY = touchEndY - touchStartY;

                // Select the carousel that was touched with two fingers
                if (index === 0) {
                    selectCarousel('professional');
                } else {
                    selectCarousel('personal');
                }

                isTwoFingerSwipe = false;
            }
        });
    });

    // Override navigation arrows to control selected carousel only
    const professionalPrev = document.querySelector('.professional-prev');
    const professionalNext = document.querySelector('.professional-next');
    const personalPrev = document.querySelector('.personal-prev');
    const personalNext = document.querySelector('.personal-next');

    // Disable arrows and touch for non-selected carousels
    function updateArrowStates() {
        const professionalSwiperEl = document.querySelector('.professional-swiper');
        const personalSwiperEl = document.querySelector('.personal-swiper');

        if (selectedCarousel === 'professional') {
            // Enable professional carousel
            professionalPrev.style.opacity = '1';
            professionalNext.style.opacity = '1';
            professionalPrev.style.pointerEvents = 'auto';
            professionalNext.style.pointerEvents = 'auto';
            professionalSwiper.allowTouchMove = true;
            professionalSwiper.enable();
            professionalSwiperEl.classList.add('swiper-enabled');
            professionalSwiperEl.classList.remove('swiper-disabled');

            // Disable personal carousel
            personalPrev.style.opacity = '0.3';
            personalNext.style.opacity = '0.3';
            personalPrev.style.pointerEvents = 'none';
            personalNext.style.pointerEvents = 'none';
            personalSwiper.allowTouchMove = false;
            personalSwiper.disable();
            personalSwiperEl.classList.add('swiper-disabled');
            personalSwiperEl.classList.remove('swiper-enabled');
        } else {
            // Enable personal carousel
            personalPrev.style.opacity = '1';
            personalNext.style.opacity = '1';
            personalPrev.style.pointerEvents = 'auto';
            personalNext.style.pointerEvents = 'auto';
            personalSwiper.allowTouchMove = true;
            personalSwiper.enable();
            personalSwiperEl.classList.add('swiper-enabled');
            personalSwiperEl.classList.remove('swiper-disabled');

            // Disable professional carousel
            professionalPrev.style.opacity = '0.3';
            professionalNext.style.opacity = '0.3';
            professionalPrev.style.pointerEvents = 'none';
            professionalNext.style.pointerEvents = 'none';
            professionalSwiper.allowTouchMove = false;
            professionalSwiper.disable();
            professionalSwiperEl.classList.add('swiper-disabled');
            professionalSwiperEl.classList.remove('swiper-enabled');
        }
    }

    // Initial arrow state
    updateArrowStates();

    // Keyboard navigation for selected carousel
    document.addEventListener('keydown', (e) => {
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
            // Switch to personal carousel
            selectCarousel('personal');
            updateArrowStates();
        } else if (e.key === 'ArrowUp') {
            // Switch to professional carousel
            selectCarousel('professional');
            updateArrowStates();
        }
    });

    // ====================================
    // TRACKPAD TWO-FINGER SWIPE SUPPORT
    // ====================================

    let trackpadDebounce = false;
    const trackpadDebounceTime = 300; // ms between swipes

    // Add wheel event listeners for trackpad gestures
    function handleTrackpadSwipe(e, swiper) {
        // Check for horizontal scroll (trackpad two-finger swipe)
        if (Math.abs(e.deltaX) > Math.abs(e.deltaY)) {
            // Horizontal swipe detected
            if (!trackpadDebounce) {
                trackpadDebounce = true;

                if (e.deltaX > 30) {
                    // Swipe left (previous slide)
                    swiper.slidePrev();
                    console.log('Trackpad swipe left → Previous card');
                } else if (e.deltaX < -30) {
                    // Swipe right (next slide)
                    swiper.slideNext();
                    console.log('Trackpad swipe right → Next card');
                }

                setTimeout(() => {
                    trackpadDebounce = false;
                }, trackpadDebounceTime);

                e.preventDefault();
            }
        }
    }

    // Attach trackpad listeners to selected carousel only
    function updateTrackpadListeners() {
        // Remove all existing listeners first
        professionalRow.removeEventListener('wheel', professionalTrackpadHandler);
        personalRow.removeEventListener('wheel', personalTrackpadHandler);

        // Add listener only to selected carousel
        if (selectedCarousel === 'professional') {
            professionalRow.addEventListener('wheel', professionalTrackpadHandler, { passive: false });
        } else {
            personalRow.addEventListener('wheel', personalTrackpadHandler, { passive: false });
        }
    }

    // Handler functions for each carousel
    function professionalTrackpadHandler(e) {
        handleTrackpadSwipe(e, professionalSwiper);
    }

    function personalTrackpadHandler(e) {
        handleTrackpadSwipe(e, personalSwiper);
    }

    // Update hover listeners to also update trackpad listeners
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

    // Initial trackpad listener setup
    updateTrackpadListeners();

    // ====================================
    // MOBILE SCROLL-BASED AUTO-SELECTION
    // ====================================

    // Function to check if device is mobile (use touch capability instead of width)
    function isMobileDevice() {
        const isTouchDevice = ('ontouchstart' in window) || (navigator.maxTouchPoints > 0);
        const isNarrowScreen = window.innerWidth <= 768;
        const isMobile = isTouchDevice || isNarrowScreen;
        console.log('isMobileDevice check:', isMobile, '(touch:', isTouchDevice, 'width:', window.innerWidth + ')');
        return isMobile;
    }

    // Throttle function to limit scroll event frequency
    function throttle(func, limit) {
        let inThrottle;
        return function() {
            const args = arguments;
            const context = this;
            if (!inThrottle) {
                func.apply(context, args);
                inThrottle = true;
                setTimeout(() => inThrottle = false, limit);
            }
        };
    }

    // Function to get carousel center position
    function getCarouselCenterY(carousel) {
        const rect = carousel.getBoundingClientRect();
        return rect.top + (rect.height / 2);
    }

    // Function to determine which carousel is in viewport center
    function selectCarouselByScroll() {
        if (!isMobileDevice()) {
            console.log('Not mobile, skipping auto-select');
            return;
        }

        const viewportCenter = window.innerHeight / 2;
        const professionalCenter = getCarouselCenterY(professionalRow);
        const personalCenter = getCarouselCenterY(personalRow);

        const professionalDistance = Math.abs(viewportCenter - professionalCenter);
        const personalDistance = Math.abs(viewportCenter - personalCenter);

        console.log('Scroll selection:', {
            viewportCenter,
            professionalCenter,
            personalCenter,
            professionalDistance,
            personalDistance,
            currentSelection: selectedCarousel
        });

        // Select the carousel closest to viewport center
        if (professionalDistance < personalDistance) {
            if (selectedCarousel !== 'professional') {
                console.log('Switching to PROFESSIONAL carousel');
                selectCarousel('professional');
                updateArrowStates();
            }
        } else {
            if (selectedCarousel !== 'personal') {
                console.log('Switching to PERSONAL carousel');
                selectCarousel('personal');
                updateArrowStates();
            }
        }
    }

    // Add scroll listener for mobile
    console.log('Setting up mobile scroll listener...');
    if (isMobileDevice()) {
        console.log('Mobile detected - adding scroll listener');
        window.addEventListener('scroll', throttle(selectCarouselByScroll, 100));
        // Initial selection on load
        setTimeout(selectCarouselByScroll, 100);
    } else {
        console.log('Desktop detected - no scroll listener');
    }

    // Update on window resize (in case of orientation change)
    window.addEventListener('resize', throttle(() => {
        if (isMobileDevice()) {
            selectCarouselByScroll();
        }
    }, 200));

    console.log('Carousel navigation system enabled');
    console.log('- Touch screens: Single-finger swipe');
    console.log('- Desktop trackpad: Two-finger horizontal swipe');
    console.log('- Desktop mouse: Click navigation arrows');
    console.log('- Keyboard: ↑/↓ to switch carousels, ←/→ to navigate cards');
    console.log('- Hover over carousel to select it');
    console.log('- Mobile: Auto-select carousel in viewport center on scroll');

    // ====================================
    // GALLERY VIEW TOGGLE
    // ====================================

    const galleryToggle = document.getElementById('gallery-toggle');
    let galleryEnabled = localStorage.getItem('galleryEnabled') === 'true';
    galleryToggle.checked = galleryEnabled;

    // Function to get OpenGraph thumbnail URL from link
    function getThumbnailUrl(href, dataPreview) {
        // If data-preview points to a local image, use it
        if (dataPreview && dataPreview.startsWith('public/')) {
            return dataPreview;
        }

        // For external links, try to extract domain and create a favicon/thumbnail URL
        // This is a simplified approach - in production you'd want a backend service to fetch og:image
        if (href && (href.startsWith('http://') || href.startsWith('https://'))) {
            try {
                const url = new URL(href);
                // Use a placeholder gradient for now
                return null; // Will trigger placeholder gradient
            } catch (e) {
                return null;
            }
        }

        return null;
    }

    // Function to set thumbnail backgrounds for links
    function setThumbnailBackgrounds() {
        const links = document.querySelectorAll('.link');
        links.forEach(link => {
            const previewUrl = link.getAttribute('data-preview');
            if (previewUrl) {
                link.style.setProperty('--thumbnail-url', `url(${previewUrl})`);
            }
        });
    }

    // Function to toggle gallery mode
    function toggleGalleryMode() {
        galleryEnabled = galleryToggle.checked;
        localStorage.setItem('galleryEnabled', galleryEnabled);

        const body = document.body;

        if (galleryEnabled) {
            // Set thumbnail backgrounds
            setThumbnailBackgrounds();
            // Add gallery-mode class to body to trigger CSS changes
            body.classList.add('gallery-mode');
            console.log('Gallery view enabled');
        } else {
            // Remove gallery-mode class
            body.classList.remove('gallery-mode');
            console.log('Gallery view disabled');
        }
    }

    // Event listener for gallery toggle
    galleryToggle.addEventListener('change', toggleGalleryMode);

    // Initialize gallery mode on page load
    if (galleryEnabled) {
        // Set thumbnails first
        setThumbnailBackgrounds();
        toggleGalleryMode();
    }

    console.log('Gallery view toggle initialized');
});
