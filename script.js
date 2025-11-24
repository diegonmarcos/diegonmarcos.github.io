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
    createStars(100);

    // Function to create constellation
    function createConstellation(name, stars, connections) {
        const constellation = [];

        // Create stars
        stars.forEach((starPos, index) => {
            const star = document.createElement('div');
            star.className = 'constellation-star';
            star.style.left = starPos.x + '%';
            star.style.top = starPos.y + '%';
            star.style.width = starPos.size + 'px';
            star.style.height = starPos.size + 'px';
            star.style.animationDelay = Math.random() * 4 + 's';
            star.style.animationDuration = (Math.random() * 3 + 3) + 's';
            spaceBackground.appendChild(star);
            constellation.push({ element: star, x: starPos.x, y: starPos.y });
        });

        // Create lines connecting stars
        connections.forEach(([startIdx, endIdx]) => {
            const start = constellation[startIdx];
            const end = constellation[endIdx];

            const line = document.createElement('div');
            line.className = 'constellation-line';

            // Calculate line position and angle
            const startRect = { x: start.x, y: start.y };
            const endRect = { x: end.x, y: end.y };

            const deltaX = endRect.x - startRect.x;
            const deltaY = endRect.y - startRect.y;
            const length = Math.sqrt(deltaX * deltaX + deltaY * deltaY);
            const angle = Math.atan2(deltaY, deltaX) * (180 / Math.PI);

            line.style.left = startRect.x + '%';
            line.style.top = startRect.y + '%';
            line.style.width = length + '%';
            line.style.transform = `rotate(${angle}deg)`;
            line.style.animationDelay = Math.random() * 4 + 's';
            line.style.animationDuration = (Math.random() * 3 + 3) + 's';

            spaceBackground.appendChild(line);
        });
    }

    // Cancer constellation (♋) - positioned in upper left
    const cancerStars = [
        { x: 15, y: 20, size: 3 },   // Acubens
        { x: 12, y: 18, size: 2.5 }, // Al Tarf
        { x: 18, y: 22, size: 2.5 }, // Asellus Australis
        { x: 16, y: 17, size: 2 },   // Asellus Borealis
        { x: 13, y: 15, size: 2 },   // Tegmine
        { x: 19, y: 19, size: 2 }    // Additional star
    ];

    const cancerConnections = [
        [0, 1], // Acubens to Al Tarf
        [0, 2], // Acubens to Asellus Australis
        [1, 4], // Al Tarf to Tegmine
        [4, 3], // Tegmine to Asellus Borealis
        [3, 5], // Asellus Borealis to additional
        [5, 2]  // Additional to Asellus Australis
    ];

    // Aries constellation (♈) - positioned in upper right
    const ariesStars = [
        { x: 80, y: 25, size: 3 },   // Hamal (brightest)
        { x: 83, y: 23, size: 2.5 }, // Sheratan
        { x: 85, y: 28, size: 2 },   // Mesarthim
        { x: 78, y: 22, size: 1.5 }  // Additional star
    ];

    const ariesConnections = [
        [0, 1], // Hamal to Sheratan
        [1, 2], // Sheratan to Mesarthim
        [0, 3]  // Hamal to additional
    ];

    createConstellation('cancer', cancerStars, cancerConnections);
    createConstellation('aries', ariesStars, ariesConnections);

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

    // --- Clippy Assistant ---
    const clippyContainer = document.getElementById('clippy-container');
    const clippySvg = document.getElementById('clippy-svg');
    const clippySpeech = document.querySelector('.clippy-speech');
    const clippyMenu = document.getElementById('clippy-menu');

    // Check if Clippy is disabled
    const clippyDisabled = localStorage.getItem('clippyDisabled') === 'true';
    if (clippyDisabled) {
        clippyContainer.style.display = 'none';
        return; // Exit early, don't initialize Clippy
    }

    // Assistant Mode: 'full' (animated Clippy) or 'pulse' (static pulsing circle)
    // On mobile (screen width <= 768px), default to pulse mode
    // On desktop, default to full mode
    const isMobile = window.innerWidth <= 768;
    let assistantMode = localStorage.getItem('assistantMode') || (isMobile ? 'pulse' : 'full');

    // Funny phrases for Clippy
    const clippyPhrases = [
        "Pretty sure there's a cat walking on the keyboard somewhere..",
        "What's computer's favorite snack? Microchips.",
        "Why do Java developers wear glasses? Because they don't C#.",
        "Why don't programmers like nature? It has too many bugs.",
        "Just waiting for that one semicolon to show up and fix everything.",
        "Why was the JavaScript developer sad? Because he didn't Node how to Express himself."
    ];

    // Define two vertical lanes (left and right)
    const LANE_LEFT = 50; // Left lane X position
    const LANE_RIGHT_OFFSET = 150; // Right lane offset from right edge
    let currentLane = 'right'; // Start in right lane

    function getLaneX(lane) {
        if (lane === 'left') {
            return LANE_LEFT;
        } else {
            return window.innerWidth - LANE_RIGHT_OFFSET;
        }
    }

    // Position Clippy initially (bottom right lane)
    let clippyX = getLaneX('right');
    let clippyY = window.innerHeight - 150;
    clippyContainer.style.left = clippyX + 'px';
    clippyContainer.style.top = clippyY + 'px';

    // Drag functionality - restricted to vertical movement in current lane
    let isDragging = false;
    let dragOffsetY = 0;

    clippyContainer.addEventListener('mousedown', (e) => {
        if (e.target.closest('#clippy-menu') || e.target.closest('.clippy-speech') || assistantMode === 'pulse') {
            return; // Don't drag if clicking menu, speech bubble, or in pulse mode
        }
        isDragging = true;
        clippyContainer.classList.add('dragging');
        dragOffsetY = e.clientY - clippyContainer.offsetTop;
        e.preventDefault();
    });

    document.addEventListener('mousemove', (e) => {
        if (!isDragging) return;

        // Only allow vertical movement in current lane
        clippyY = e.clientY - dragOffsetY;

        // Keep Clippy within vertical bounds
        clippyY = Math.max(50, Math.min(clippyY, window.innerHeight - 150));

        // Keep X in current lane
        clippyX = getLaneX(currentLane);

        clippyContainer.style.left = clippyX + 'px';
        clippyContainer.style.top = clippyY + 'px';
    });

    document.addEventListener('mouseup', () => {
        if (isDragging) {
            isDragging = false;
            clippyContainer.classList.remove('dragging');
        }
    });

    // Click to toggle menu (only in full mode)
    clippySvg.addEventListener('click', (e) => {
        if (!isDragging && assistantMode === 'full') {
            e.stopPropagation();
            clippyMenu.classList.toggle('show');
            clippySpeech.classList.remove('show'); // Hide speech when showing menu
        }
    });

    // Close menu when clicking outside (will be set up after pulse circle is created)
    // See below after pulse assistant initialization

    // Auto-movement animation (vertical only within current lane)
    let autoMoveInterval;
    let isAutoMoving = false;

    function autoMoveClippy() {
        if (isDragging || clippyMenu.classList.contains('show') || assistantMode === 'pulse') return;

        isAutoMoving = true;
        // Only move vertically in current lane
        const targetY = Math.random() * (window.innerHeight - 200) + 50;

        const duration = 2000; // 2 seconds
        const startY = clippyY;
        const startTime = Date.now();

        function moveStep() {
            if (isDragging) {
                isAutoMoving = false;
                return;
            }

            const elapsed = Date.now() - startTime;
            const progress = Math.min(elapsed / duration, 1);

            // Easing function
            const eased = progress < 0.5
                ? 2 * progress * progress
                : 1 - Math.pow(-2 * progress + 2, 2) / 2;

            clippyY = startY + (targetY - startY) * eased;
            clippyX = getLaneX(currentLane); // Stay in lane

            clippyContainer.style.left = clippyX + 'px';
            clippyContainer.style.top = clippyY + 'px';

            if (progress < 1) {
                requestAnimationFrame(moveStep);
            } else {
                isAutoMoving = false;
            }
        }

        moveStep();
    }

    // Schedule auto-movement every 15-25 seconds
    function scheduleAutoMove() {
        const delay = Math.random() * 10000 + 15000; // 15-25 seconds
        autoMoveInterval = setTimeout(() => {
            autoMoveClippy();
            scheduleAutoMove();
        }, delay);
    }

    scheduleAutoMove();

    // Lane changing with fade out/in
    function changeLane(newLane) {
        if (isDragging || clippyMenu.classList.contains('show') || assistantMode === 'pulse') return;

        // Fade out
        clippyContainer.style.opacity = '0';

        setTimeout(() => {
            // Change lane
            currentLane = newLane;
            clippyX = getLaneX(currentLane);

            // Move to random Y in new lane
            clippyY = Math.random() * (window.innerHeight - 200) + 50;

            clippyContainer.style.left = clippyX + 'px';
            clippyContainer.style.top = clippyY + 'px';

            // Fade in
            clippyContainer.style.opacity = '1';
        }, 500); // Wait for fade out
    }

    // Schedule random lane changes every 30-60 seconds
    function scheduleLaneChange() {
        const delay = Math.random() * 30000 + 30000; // 30-60 seconds
        setTimeout(() => {
            const newLane = currentLane === 'left' ? 'right' : 'left';
            changeLane(newLane);
            scheduleLaneChange();
        }, delay);
    }

    scheduleLaneChange();

    // Appear/disappear functionality
    let disappearTimeout;
    let reappearTimeout;

    function disappearClippy() {
        // Fade out
        clippyContainer.style.opacity = '0';
        clippySpeech.classList.remove('show');
        clippyMenu.classList.remove('show');

        setTimeout(() => {
            clippyContainer.classList.add('hidden');
        }, 500);

        // Reappear after 30-60 seconds
        reappearTimeout = setTimeout(() => {
            reappearClippy();
        }, Math.random() * 30000 + 30000);
    }

    function reappearClippy() {
        // Randomly choose lane (maybe switch)
        currentLane = Math.random() > 0.5 ? 'left' : 'right';
        clippyX = getLaneX(currentLane);
        clippyY = Math.random() * (window.innerHeight - 200) + 50;

        clippyContainer.style.left = clippyX + 'px';
        clippyContainer.style.top = clippyY + 'px';

        clippyContainer.classList.remove('hidden');
        // Fade in
        clippyContainer.style.opacity = '1';

        // Show a speech bubble when reappearing
        setTimeout(() => showSpeechBubble(), 500);
    }

    // Occasionally disappear (every 2-3 minutes) - only in full mode
    function scheduleDisappear() {
        disappearTimeout = setTimeout(() => {
            if (!clippyMenu.classList.contains('show') && assistantMode === 'full') {
                disappearClippy();
            }
            scheduleDisappear();
        }, Math.random() * 60000 + 120000); // 2-3 minutes
    }

    scheduleDisappear();

    // Speech bubble functionality (only in full mode)
    function showSpeechBubble(message) {
        if (clippyMenu.classList.contains('show') || assistantMode === 'pulse') return;

        const phrase = message || clippyPhrases[Math.floor(Math.random() * clippyPhrases.length)];
        clippySpeech.textContent = phrase;
        clippySpeech.classList.add('show');

        // Hide after 5 seconds
        setTimeout(() => {
            clippySpeech.classList.remove('show');
        }, 5000);
    }

    // Show speech bubble occasionally (every 30-60 seconds)
    setInterval(() => {
        if (!clippyContainer.classList.contains('hidden') &&
            !clippyMenu.classList.contains('show') &&
            !isDragging) {
            showSpeechBubble();
        }
    }, Math.random() * 30000 + 30000);

    // Show initial speech bubble after 3 seconds
    setTimeout(() => showSpeechBubble(), 3000);

    // Update position on window resize (will be updated after pulse assistant is initialized)
    // See below after assistant mode functions

    // Assistant Mode Switching
    // Create pulsing circle element (the pulse assistant)
    const pulsingCircle = document.createElement('div');
    pulsingCircle.id = 'clippy-pulsing-circle';
    pulsingCircle.className = 'clippy-pulsing-circle';
    clippyContainer.appendChild(pulsingCircle);

    // Function to switch to pulse assistant mode
    function switchToPulseMode() {
        assistantMode = 'pulse';
        localStorage.setItem('assistantMode', 'pulse');

        // Hide the animated Clippy UI
        clippySvg.style.display = 'none';
        clippySpeech.classList.remove('show');
        clippyMenu.classList.remove('show');

        // Add pulse-menu class for proper menu positioning
        clippyMenu.classList.add('pulse-menu');

        // Show pulse assistant
        pulsingCircle.style.display = 'block';

        // Position the pulse assistant in bottom right corner
        // Very tight corner positioning
        const leftOffset = 60;
        const bottomOffset = 60;
        clippyContainer.style.left = (window.innerWidth - leftOffset) + 'px';
        clippyContainer.style.top = (window.innerHeight - bottomOffset) + 'px';
    }

    // Function to switch to full Clippy mode
    function switchToFullMode() {
        assistantMode = 'full';
        localStorage.setItem('assistantMode', 'full');

        // Hide pulse assistant
        pulsingCircle.style.display = 'none';

        // Remove pulse-menu class for default menu positioning
        clippyMenu.classList.remove('pulse-menu');

        // Show the animated Clippy UI
        clippySvg.style.display = 'block';

        // Restore to current lane position
        clippyX = getLaneX(currentLane);
        clippyY = Math.min(clippyY, window.innerHeight - 150);
        clippyContainer.style.left = clippyX + 'px';
        clippyContainer.style.top = clippyY + 'px';
    }

    // Switch assistant mode button (toggles between Clippy and Pulse)
    const clippyDisableBtn = document.getElementById('clippy-disable');

    function updateSwitchButtonIcon() {
        if (assistantMode === 'pulse') {
            // When in pulse mode, show icon to switch back to Clippy
            clippyDisableBtn.innerHTML = '<i class="ti ti-user"></i>';
            clippyDisableBtn.title = 'Switch to Clippy Assistant';
        } else {
            // When in Clippy mode, show icon to switch to pulse
            clippyDisableBtn.innerHTML = '<i class="ti ti-circle-dot"></i>';
            clippyDisableBtn.title = 'Switch to Pulse Assistant';
        }
    }

    if (clippyDisableBtn) {
        clippyDisableBtn.addEventListener('click', () => {
            if (assistantMode === 'pulse') {
                switchToFullMode();
            } else {
                switchToPulseMode();
            }
            updateSwitchButtonIcon();
        });
    }

    // Pulse assistant click behavior - shows its own menu
    pulsingCircle.addEventListener('click', (e) => {
        e.stopPropagation();
        clippyMenu.classList.toggle('show');
    });

    // Close menu when clicking outside (works for both assistants)
    window.addEventListener('click', (event) => {
        if (clippyMenu.classList.contains('show') &&
            !clippyMenu.contains(event.target) &&
            !clippySvg.contains(event.target) &&
            !pulsingCircle.contains(event.target)) {
            clippyMenu.classList.remove('show');
        }
    });

    // Apply initial assistant mode
    if (assistantMode === 'pulse') {
        switchToPulseMode();
    } else {
        pulsingCircle.style.display = 'none';
    }

    // Update button icon to match initial mode
    updateSwitchButtonIcon();

    // Update position on window resize based on assistant mode
    window.addEventListener('resize', () => {
        if (assistantMode === 'pulse') {
            // Reposition pulse assistant to corner
            const leftOffset = 70;
            const bottomOffset = 60;
            clippyContainer.style.left = (window.innerWidth - leftOffset) + 'px';
            clippyContainer.style.top = (window.innerHeight - bottomOffset) + 'px';
        } else {
            // Update Clippy to current lane position
            clippyX = getLaneX(currentLane);
            clippyY = Math.min(clippyY, window.innerHeight - 150);
            clippyContainer.style.left = clippyX + 'px';
            clippyContainer.style.top = clippyY + 'px';
        }
    });

    // --- Mobile Card Centering Effect ---
    // Only activate on mobile devices (touch-enabled)
    const isTouchDevice = 'ontouchstart' in window || navigator.maxTouchPoints > 0;

    if (isTouchDevice) {
        const cards = document.querySelectorAll('.card');
        let currentSelectedCard = null;

        // Make all cards focusable
        cards.forEach(card => {
            card.setAttribute('tabindex', '-1');
        });

        function findCenteredCard() {
            const viewportCenter = window.innerHeight / 2;
            let closestCard = null;
            let closestDistance = Infinity;

            cards.forEach(card => {
                const rect = card.getBoundingClientRect();
                const cardCenter = rect.top + (rect.height / 2);
                const distance = Math.abs(cardCenter - viewportCenter);

                if (distance < closestDistance) {
                    closestDistance = distance;
                    closestCard = card;
                }
            });

            return closestCard;
        }

        function updateCenteredCard() {
            const centeredCard = findCenteredCard();

            // Only update if changed
            if (centeredCard !== currentSelectedCard) {
                // Remove centered class and selection from all cards
                cards.forEach(card => {
                    card.classList.remove('centered');
                    card.setAttribute('tabindex', '-1');
                    card.blur();
                });

                // Add centered class and select the new card
                if (centeredCard) {
                    centeredCard.classList.add('centered');
                    centeredCard.setAttribute('tabindex', '0');
                    centeredCard.focus({ preventScroll: true });
                    currentSelectedCard = centeredCard;
                }
            }
        }

        // Throttle function to limit how often updateCenteredCard runs
        let scrollTimeout;
        function handleScroll() {
            if (scrollTimeout) {
                clearTimeout(scrollTimeout);
            }

            scrollTimeout = setTimeout(() => {
                updateCenteredCard();
            }, 50); // Update every 50ms during scroll
        }

        // Listen to scroll events
        window.addEventListener('scroll', handleScroll);

        // Initial check on page load
        updateCenteredCard();

        // Re-check when window is resized
        window.addEventListener('resize', updateCenteredCard);
    }
});