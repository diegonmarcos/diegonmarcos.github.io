document.addEventListener('DOMContentLoaded', () => {

    // --- Animation State Management ---
    let animationsEnabled = localStorage.getItem('animations') !== 'disabled';
    // Background animations ON by default (only disabled if explicitly set)
    let backgroundAnimationsEnabled = localStorage.getItem('backgroundAnimations') !== 'disabled';

    // --- Fit to Screen Scaling Logic ---
    const container = document.querySelector('.container');

    // --- Space Background Setup ---
    const spaceBackground = document.createElement('div');
    spaceBackground.id = 'space-background';
    document.body.insertBefore(spaceBackground, document.body.firstChild);

    // Generate random stars
    function createStars(count) {
        for (let i = 0; i < count; i++) {
            const star = document.createElement('div');
            star.className = 'star';

            // Random position
            star.style.left = Math.random() * 100 + '%';
            star.style.top = Math.random() * 100 + '%';

            // Random size (1-3px)
            const size = Math.random() * 2 + 1;
            star.style.width = size + 'px';
            star.style.height = size + 'px';

            // Random opacity for depth
            star.style.opacity = Math.random() * 0.5 + 0.5; // 0.5 to 1

            // Random animation delay for varied twinkling
            star.style.animationDelay = Math.random() * 4 + 's';
            star.style.animationDuration = (Math.random() * 3 + 3) + 's'; // 3-6 seconds

            spaceBackground.appendChild(star);
        }
    }

    // Create 200 stars
    createStars(200);

    // Function to create star explosion
    function createStarExplosion() {
        if (!backgroundAnimationsEnabled) return;

        const explosion = document.createElement('div');
        explosion.className = 'star-explosion';
        explosion.style.left = Math.random() * window.innerWidth + 'px';
        explosion.style.top = Math.random() * window.innerHeight + 'px';
        spaceBackground.appendChild(explosion);

        setTimeout(() => explosion.remove(), 1000);
    }

    // Function to create comet
    function createComet(size = 'small') {
        if (!backgroundAnimationsEnabled) return;

        const comet = document.createElement('div');
        comet.className = `comet comet-${size}`;
        comet.style.right = '-100px';
        comet.style.top = Math.random() * (window.innerHeight / 2) + 'px';
        spaceBackground.appendChild(comet);

        const duration = size === 'medium' ? 3000 : 2000;
        setTimeout(() => comet.remove(), duration);
    }

    // Random animation scheduler
    let backgroundAnimationInterval;

    function startBackgroundAnimations() {
        if (!backgroundAnimationsEnabled) return;

        backgroundAnimationInterval = setInterval(() => {
            const rand = Math.random();
            if (rand < 0.3) {
                createStarExplosion();
            } else if (rand < 0.6) {
                createComet('small');
            } else if (rand < 0.8) {
                createComet('medium');
            }
        }, 3000); // Check every 3 seconds
    }

    function stopBackgroundAnimations() {
        if (backgroundAnimationInterval) {
            clearInterval(backgroundAnimationInterval);
            backgroundAnimationInterval = null;
        }
    }

    function calculateAndApplyScale() {
        if (!animationsEnabled && body.classList.contains('fit-to-screen')) {
            // Get the actual content height
            const contentHeight = container.scrollHeight;
            const viewportHeight = window.innerHeight;

            // Calculate scale to fit content in viewport with some padding
            const scale = (viewportHeight * 0.95) / contentHeight;

            // Apply the scale
            container.style.transform = `scale(${scale})`;
        }
    }

    // --- Data for Value Proposition Cards ---
    const valuePropSections = [
        {
            title: "Capital Markets & Venture Capital Acumen",
            icon: "ti-briefcase",
            description: "\"I don't just analyze businesses; I've built, funded, and scaled them. My experience is rooted in tangible results and strategic growth.\"",
            points: [
                "Successfully structured and managed deals in Investment Banking, including R$ 500Mi in MBS and R$ 100Mi in mezzanine debt.",
                "Directed portfolios with an Asset under Management (AuM) of R$ 500Mi, handling everything from exclusive funds to private credit.",
                "Led the full cycle of Venture Capital deals, from acquisition to disinvestment, with a focus on ESG-centric startups."
            ]
        },
        {
            title: "Engineering & Problem-Solving Mindset",
            icon: "ti-ruler",
            description: "\"My foundation in Civil Engineering trained me to deconstruct complex problems and build robust, lasting solutions from the ground up.\"",
            points: [
                "Honed in critical thinking and problem-solving through a B.Sc. in Structural Civil Engineering.",
                "Managed on-site construction of residential towers and developed infrastructure projects for NGOs, turning blueprints into reality.",
                "Applied financial modeling and project management not just to finance, but to the tangible world of infrastructure and development."
            ]
        },
        {
            title: "The Pivot: Product & Software Engineering",
            icon: "ti-code",
            description: "\"Driven by a passion for creative endeavors and innovation, I am channeling my experience into building the products of tomorrow.\"",
            points: [
                "Currently honing skills in C/C++ programming, data structures, and UNIX at L’École 42, and Product Management from Stanford.",
                "Learning to manage the entire product lifecycle—from user discovery and roadmap creation to running operational sprints.",
                "Combining a decade of understanding *what* to build with the emerging knowledge of *how* to build it."
            ]
        },
        {
            title: "Global Perspective & Cross Adaptability",
            icon: "ti-world",
            description: "\"My personal life has been a nomadic project, providing me with unparalleled learning opportunities.\"",
            points: [
                "Lived in Berlin, Barcelona, London, Paris, and Valencia, while traveling to over 170 cities in 40+ countries.",
                "Fluent in Portuguese, English, and Spanish, with a growing proficiency in German.",
                "Thrives in multicultural environments, bringing a unique worldview to every team."
            ]
        }
    ];

    // --- Dynamic Card Generation ---
    const gridContainer = document.getElementById('value-proposition-grid');
    if (gridContainer) {
        valuePropSections.forEach(section => {
            const card = document.createElement('div');
            card.className = 'card animated-section'; // Add animation class here too

            const cardTitle = document.createElement('h3');
            cardTitle.className = 'card-title';

            const icon = document.createElement('i');
            icon.className = `ti ${section.icon}`;
            cardTitle.appendChild(icon);

            const titleText = document.createElement('span');
            titleText.textContent = section.title;
            cardTitle.appendChild(titleText);

            const cardDescription = document.createElement('p');
            cardDescription.className = 'card-description';
            cardDescription.textContent = section.description;

            const pointsContainer = document.createElement('div');
            pointsContainer.className = 'card-points-container';

            section.points.forEach(pointText => {
                const pointBox = document.createElement('div');
                pointBox.className = 'point-box';
                pointBox.textContent = pointText;
                pointsContainer.appendChild(pointBox);
            });

            card.appendChild(cardTitle);
            card.appendChild(cardDescription);
            card.appendChild(pointsContainer);
            gridContainer.appendChild(card);
        });
    }

    // --- Custom Animation Engine ---
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

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (!animationsEnabled) {
                // If animations are disabled, show everything
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
                entry.target.style.visibility = 'visible';
                return;
            }

            if (entry.isIntersecting) {
                animate(entry.target, 1, 0, 600); // Fade in
            } else {
                animate(entry.target, 0, 30, 600); // Fade out
            }
        });
    }, {
        root: null,
        threshold: 0.95 // Trigger when 95% of the element is visible
    });

    animatedSections.forEach(section => {
        observer.observe(section);
    });

    // --- Theme Toggle Logic ---
    const themeToggleButton = document.getElementById('theme-toggle');
    const body = document.body;

    // Function to apply the saved theme on load
    const applyTheme = () => {
        const savedTheme = localStorage.getItem('theme');
        if (savedTheme === 'light') {
            body.classList.add('light-theme');
            themeToggleButton.innerHTML = '<i class="ti ti-moon"></i>';
        } else {
            body.classList.remove('light-theme');
            themeToggleButton.innerHTML = '<i class="ti ti-sun"></i>';
        }
    };

    // Theme toggle button event listener
    themeToggleButton.addEventListener('click', () => {
        body.classList.toggle('light-theme');
        if (body.classList.contains('light-theme')) {
            localStorage.setItem('theme', 'light');
            themeToggleButton.innerHTML = '<i class="ti ti-moon"></i>';
        } else {
            localStorage.setItem('theme', 'dark');
            themeToggleButton.innerHTML = '<i class="ti ti-sun"></i>';
        }
    });

    // Apply the theme when the page loads
    applyTheme();

    // --- Background Animation Toggle Logic ---
    const backgroundToggleButton = document.getElementById('background-toggle');

    // Function to apply background animation state
    const applyBackgroundState = () => {
        if (backgroundAnimationsEnabled) {
            backgroundToggleButton.innerHTML = '<i class="ti ti-player-pause-filled"></i>';
            backgroundToggleButton.classList.add('active');
            startBackgroundAnimations();
        } else {
            backgroundToggleButton.innerHTML = '<i class="ti ti-player-play-filled"></i>';
            backgroundToggleButton.classList.remove('active');
            stopBackgroundAnimations();
        }
    };

    // Background animation toggle button event listener
    backgroundToggleButton.addEventListener('click', () => {
        backgroundAnimationsEnabled = !backgroundAnimationsEnabled;
        localStorage.setItem('backgroundAnimations', backgroundAnimationsEnabled ? 'enabled' : 'disabled');
        applyBackgroundState();
    });

    // Apply the background animation state when the page loads
    applyBackgroundState();

    // --- Presentation Mode Toggle Logic ---
    const animationToggleButton = document.getElementById('animation-toggle');

    // Function to apply presentation mode state
    const applyAnimationState = () => {
        if (animationsEnabled) {
            animationToggleButton.innerHTML = '<i class="ti ti-presentation"></i>';
            animationToggleButton.classList.remove('active');
            body.classList.remove('fit-to-screen');
            container.style.transform = ''; // Reset transform
            // Reset animated sections to hidden state (observer will handle visibility)
            animatedSections.forEach(section => {
                section.style.opacity = '0';
                section.style.transform = 'translateY(30px)';
                section.style.visibility = 'hidden';
            });
            // Trigger observer to check current visibility
            observer.disconnect();
            animatedSections.forEach(section => observer.observe(section));
        } else {
            animationToggleButton.innerHTML = '<i class="ti ti-layout-grid"></i>';
            animationToggleButton.classList.add('active');
            body.classList.add('fit-to-screen');
            // Show all sections immediately
            animatedSections.forEach(section => {
                section.style.opacity = '1';
                section.style.transform = 'translateY(0)';
                section.style.visibility = 'visible';
            });
            // Calculate and apply the fit-to-screen scale
            setTimeout(calculateAndApplyScale, 50); // Small delay to ensure DOM is updated
        }
    };

    // Animation toggle button event listener
    animationToggleButton.addEventListener('click', () => {
        animationsEnabled = !animationsEnabled;
        localStorage.setItem('animations', animationsEnabled ? 'enabled' : 'disabled');
        applyAnimationState();
    });

    // Apply the animation state when the page loads
    applyAnimationState();

    // --- Window Resize Handler for Fit-to-Screen Mode ---
    window.addEventListener('resize', () => {
        calculateAndApplyScale();
    });

    // --- Scroll fade for floating button ---
    let scrollTimeout;
    const floatingBtn = document.getElementById('floating-btn');

    window.addEventListener('scroll', () => {
        if (floatingBtn) {
            floatingBtn.classList.add('fade-out');
        }

        clearTimeout(scrollTimeout);
        scrollTimeout = setTimeout(() => {
            if (floatingBtn) {
                floatingBtn.classList.remove('fade-out');
            }
        }, 1000); // Adjust timeout as needed
    });

    // --- Floating Action Button ---
    const floatingMenu = document.getElementById('floating-menu');

    if (floatingBtn && floatingMenu) {
        floatingBtn.addEventListener('click', (event) => {
            event.stopPropagation();
            floatingMenu.classList.toggle('show');
            floatingBtn.classList.toggle('active');
        });

        window.addEventListener('click', (event) => {
            if (floatingMenu.classList.contains('show') && !floatingMenu.contains(event.target) && !floatingBtn.contains(event.target)) {
                floatingMenu.classList.remove('show');
                floatingBtn.classList.remove('active');
            }
        });
    }
});