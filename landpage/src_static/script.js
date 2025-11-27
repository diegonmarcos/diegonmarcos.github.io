"use strict";
document.addEventListener('DOMContentLoaded', () => {
    let animationsEnabled = localStorage.getItem('animations') !== 'disabled';
    let backgroundAnimationsEnabled = localStorage.getItem('backgroundAnimations') !== 'disabled';
    const container = document.querySelector('.container');
    const spaceBackground = document.createElement('div');
    spaceBackground.id = 'space-background';
    document.body.insertBefore(spaceBackground, document.body.firstChild);
    function createStars(count) {
        for (let i = 0; i < count; i++) {
            const star = document.createElement('div');
            star.className = 'star';
            star.style.left = Math.random() * 100 + '%';
            star.style.top = Math.random() * 100 + '%';
            const size = Math.random() * 2 + 1;
            star.style.width = size + 'px';
            star.style.height = size + 'px';
            star.style.opacity = (Math.random() * 0.5 + 0.5).toString();
            star.style.animationDelay = Math.random() * 4 + 's';
            star.style.animationDuration = (Math.random() * 3 + 3) + 's';
            spaceBackground.appendChild(star);
        }
    }
    createStars(100);
    function createConstellation(_name, stars, connections) {
        const constellation = [];
        stars.forEach((starPos) => {
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
        connections.forEach(([startIdx, endIdx]) => {
            const start = constellation[startIdx];
            const end = constellation[endIdx];
            const line = document.createElement('div');
            line.className = 'constellation-line';
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
    const cancerStars = [
        { x: 15, y: 20, size: 3 },
        { x: 12, y: 18, size: 2.5 },
        { x: 18, y: 22, size: 2.5 },
        { x: 16, y: 17, size: 2 },
        { x: 13, y: 15, size: 2 },
        { x: 19, y: 19, size: 2 }
    ];
    const cancerConnections = [
        [0, 1],
        [0, 2],
        [1, 4],
        [4, 3],
        [3, 5],
        [5, 2]
    ];
    const ariesStars = [
        { x: 80, y: 25, size: 3 },
        { x: 83, y: 23, size: 2.5 },
        { x: 85, y: 28, size: 2 },
        { x: 78, y: 22, size: 1.5 }
    ];
    const ariesConnections = [
        [0, 1],
        [1, 2],
        [0, 3]
    ];
    createConstellation('cancer', cancerStars, cancerConnections);
    createConstellation('aries', ariesStars, ariesConnections);
    function createStarExplosion() {
        if (!backgroundAnimationsEnabled)
            return;
        const explosion = document.createElement('div');
        explosion.className = 'star-explosion';
        explosion.style.left = Math.random() * window.innerWidth + 'px';
        explosion.style.top = Math.random() * window.innerHeight + 'px';
        spaceBackground.appendChild(explosion);
        setTimeout(() => explosion.remove(), 1000);
    }
    function createComet(size = 'small') {
        if (!backgroundAnimationsEnabled)
            return;
        const comet = document.createElement('div');
        comet.className = `comet comet-${size}`;
        comet.style.right = '-100px';
        comet.style.top = Math.random() * (window.innerHeight / 2) + 'px';
        spaceBackground.appendChild(comet);
        const duration = size === 'medium' ? 3000 : 2000;
        setTimeout(() => comet.remove(), duration);
    }
    let backgroundAnimationInterval;
    function startBackgroundAnimations() {
        if (!backgroundAnimationsEnabled)
            return;
        backgroundAnimationInterval = window.setInterval(() => {
            const rand = Math.random();
            if (rand < 0.3) {
                createStarExplosion();
            }
            else if (rand < 0.6) {
                createComet('small');
            }
            else if (rand < 0.8) {
                createComet('medium');
            }
        }, 3000);
    }
    function stopBackgroundAnimations() {
        if (backgroundAnimationInterval) {
            clearInterval(backgroundAnimationInterval);
            backgroundAnimationInterval = undefined;
        }
    }
    function calculateAndApplyScale() {
        if (!animationsEnabled && body.classList.contains('fit-to-screen')) {
            const contentHeight = container.scrollHeight;
            const viewportHeight = window.innerHeight;
            const scale = (viewportHeight * 0.95) / contentHeight;
            container.style.transform = `scale(${scale})`;
        }
    }
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
                "Currently honing skills in C/C++ programming, data structures, and UNIX at L'École 42, and Product Management from Stanford.",
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
    const gridContainer = document.getElementById('value-proposition-grid');
    if (gridContainer) {
        valuePropSections.forEach(section => {
            const card = document.createElement('div');
            card.className = 'card animated-section';
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
    function animate(element, targetOpacity, targetTransform, duration) {
        if (targetOpacity > 0) {
            element.style.visibility = 'visible';
        }
        const startOpacity = parseFloat(window.getComputedStyle(element).opacity);
        const matrix = new DOMMatrix(window.getComputedStyle(element).transform);
        const startTransform = matrix.m42;
        let startTime = null;
        function animationStep(timestamp) {
            if (!startTime)
                startTime = timestamp;
            const progress = Math.min((timestamp - startTime) / duration, 1);
            const currentOpacity = startOpacity + (targetOpacity - startOpacity) * progress;
            const currentTransform = startTransform + (targetTransform - startTransform) * progress;
            element.style.opacity = currentOpacity.toString();
            element.style.transform = `translateY(${currentTransform}px)`;
            if (progress < 1) {
                requestAnimationFrame(animationStep);
            }
            else {
                if (targetOpacity === 0) {
                    element.style.visibility = 'hidden';
                }
            }
        }
        requestAnimationFrame(animationStep);
    }
    const animatedSections = document.querySelectorAll('.animated-section');
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (!animationsEnabled) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
                entry.target.style.visibility = 'visible';
                return;
            }
            if (entry.isIntersecting) {
                animate(entry.target, 1, 0, 600);
            }
            else {
                animate(entry.target, 0, 30, 600);
            }
        });
    }, {
        root: null,
        threshold: 0.95
    });
    animatedSections.forEach(section => {
        observer.observe(section);
    });
    const themeToggleButton = document.getElementById('theme-toggle');
    const body = document.body;
    const applyTheme = () => {
        const savedTheme = localStorage.getItem('theme');
        if (savedTheme === 'light') {
            body.classList.add('light-theme');
            themeToggleButton.innerHTML = '<i class="ti ti-moon"></i>';
        }
        else {
            body.classList.remove('light-theme');
            themeToggleButton.innerHTML = '<i class="ti ti-sun"></i>';
        }
    };
    themeToggleButton.addEventListener('click', () => {
        body.classList.toggle('light-theme');
        if (body.classList.contains('light-theme')) {
            localStorage.setItem('theme', 'light');
            themeToggleButton.innerHTML = '<i class="ti ti-moon"></i>';
        }
        else {
            localStorage.setItem('theme', 'dark');
            themeToggleButton.innerHTML = '<i class="ti ti-sun"></i>';
        }
    });
    applyTheme();
    const backgroundToggleButton = document.getElementById('background-toggle');
    const applyBackgroundState = () => {
        if (backgroundAnimationsEnabled) {
            backgroundToggleButton.innerHTML = '<i class="ti ti-player-pause-filled"></i>';
            backgroundToggleButton.classList.add('active');
            startBackgroundAnimations();
        }
        else {
            backgroundToggleButton.innerHTML = '<i class="ti ti-player-play-filled"></i>';
            backgroundToggleButton.classList.remove('active');
            stopBackgroundAnimations();
        }
    };
    backgroundToggleButton.addEventListener('click', () => {
        backgroundAnimationsEnabled = !backgroundAnimationsEnabled;
        localStorage.setItem('backgroundAnimations', backgroundAnimationsEnabled ? 'enabled' : 'disabled');
        applyBackgroundState();
    });
    applyBackgroundState();
    const animationToggleButton = document.getElementById('animation-toggle');
    const applyAnimationState = () => {
        if (animationsEnabled) {
            animationToggleButton.innerHTML = '<i class="ti ti-presentation"></i>';
            animationToggleButton.classList.remove('active');
            body.classList.remove('fit-to-screen');
            container.style.transform = '';
            animatedSections.forEach(section => {
                section.style.opacity = '0';
                section.style.transform = 'translateY(30px)';
                section.style.visibility = 'hidden';
            });
            observer.disconnect();
            animatedSections.forEach(section => observer.observe(section));
        }
        else {
            animationToggleButton.innerHTML = '<i class="ti ti-layout-grid"></i>';
            animationToggleButton.classList.add('active');
            body.classList.add('fit-to-screen');
            animatedSections.forEach(section => {
                section.style.opacity = '1';
                section.style.transform = 'translateY(0)';
                section.style.visibility = 'visible';
            });
            setTimeout(calculateAndApplyScale, 50);
        }
    };
    animationToggleButton.addEventListener('click', () => {
        animationsEnabled = !animationsEnabled;
        localStorage.setItem('animations', animationsEnabled ? 'enabled' : 'disabled');
        applyAnimationState();
    });
    applyAnimationState();
    window.addEventListener('resize', () => {
        calculateAndApplyScale();
    });
    const clippyContainer = document.getElementById('clippy-container');
    const clippySvg = document.getElementById('clippy-svg');
    const clippySpeech = document.querySelector('.clippy-speech');
    const clippyMenu = document.getElementById('clippy-menu');
    const clippyDisabled = localStorage.getItem('clippyDisabled') === 'true';
    if (clippyDisabled) {
        clippyContainer.style.display = 'none';
        return;
    }
    const isMobile = window.innerWidth <= 768;
    let assistantMode = localStorage.getItem('assistantMode') || (isMobile ? 'pulse' : 'full');
    const clippyPhrases = [
        "Pretty sure there's a cat walking on the keyboard somewhere..",
        "What's computer's favorite snack? Microchips.",
        "Why do Java developers wear glasses? Because they don't C#.",
        "Why don't programmers like nature? It has too many bugs.",
        "Just waiting for that one semicolon to show up and fix everything.",
        "Why was the JavaScript developer sad? Because he didn't Node how to Express himself."
    ];
    const LANE_LEFT = 50;
    const LANE_RIGHT_OFFSET = 150;
    let currentLane = 'right';
    function getLaneX(lane) {
        if (lane === 'left') {
            return LANE_LEFT;
        }
        else {
            return window.innerWidth - LANE_RIGHT_OFFSET;
        }
    }
    let clippyX = getLaneX('right');
    let clippyY = window.innerHeight - 150;
    clippyContainer.style.left = clippyX + 'px';
    clippyContainer.style.top = clippyY + 'px';
    let isDragging = false;
    let dragOffsetY = 0;
    clippyContainer.addEventListener('mousedown', (e) => {
        if (e.target.closest('#clippy-menu') ||
            e.target.closest('.clippy-speech') ||
            assistantMode === 'pulse') {
            return;
        }
        isDragging = true;
        clippyContainer.classList.add('dragging');
        dragOffsetY = e.clientY - clippyContainer.offsetTop;
        e.preventDefault();
    });
    document.addEventListener('mousemove', (e) => {
        if (!isDragging)
            return;
        clippyY = e.clientY - dragOffsetY;
        clippyY = Math.max(50, Math.min(clippyY, window.innerHeight - 150));
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
    clippySvg?.addEventListener('click', (e) => {
        if (!isDragging && assistantMode === 'full') {
            e.stopPropagation();
            clippyMenu.classList.toggle('show');
            clippySpeech.classList.remove('show');
        }
    });
    let _autoMoveInterval;
    let _isAutoMoving = false;
    function autoMoveClippy() {
        if (isDragging || clippyMenu.classList.contains('show') || assistantMode === 'pulse')
            return;
        _isAutoMoving = true;
        const targetY = Math.random() * (window.innerHeight - 200) + 50;
        const duration = 2000;
        const startY = clippyY;
        const startTime = Date.now();
        function moveStep() {
            if (isDragging) {
                _isAutoMoving = false;
                return;
            }
            const elapsed = Date.now() - startTime;
            const progress = Math.min(elapsed / duration, 1);
            const eased = progress < 0.5
                ? 2 * progress * progress
                : 1 - Math.pow(-2 * progress + 2, 2) / 2;
            clippyY = startY + (targetY - startY) * eased;
            clippyX = getLaneX(currentLane);
            clippyContainer.style.left = clippyX + 'px';
            clippyContainer.style.top = clippyY + 'px';
            if (progress < 1) {
                requestAnimationFrame(moveStep);
            }
            else {
                _isAutoMoving = false;
            }
        }
        moveStep();
    }
    function scheduleAutoMove() {
        const delay = Math.random() * 10000 + 15000;
        _autoMoveInterval = window.setTimeout(() => {
            autoMoveClippy();
            scheduleAutoMove();
        }, delay);
    }
    scheduleAutoMove();
    function changeLane(newLane) {
        if (isDragging || clippyMenu.classList.contains('show') || assistantMode === 'pulse')
            return;
        clippyContainer.style.opacity = '0';
        setTimeout(() => {
            currentLane = newLane;
            clippyX = getLaneX(currentLane);
            clippyY = Math.random() * (window.innerHeight - 200) + 50;
            clippyContainer.style.left = clippyX + 'px';
            clippyContainer.style.top = clippyY + 'px';
            clippyContainer.style.opacity = '1';
        }, 500);
    }
    function scheduleLaneChange() {
        const delay = Math.random() * 30000 + 30000;
        setTimeout(() => {
            const newLane = currentLane === 'left' ? 'right' : 'left';
            changeLane(newLane);
            scheduleLaneChange();
        }, delay);
    }
    scheduleLaneChange();
    let _disappearTimeout;
    let _reappearTimeout;
    function disappearClippy() {
        clippyContainer.style.opacity = '0';
        clippySpeech.classList.remove('show');
        clippyMenu.classList.remove('show');
        setTimeout(() => {
            clippyContainer.classList.add('hidden');
        }, 500);
        _reappearTimeout = window.setTimeout(() => {
            reappearClippy();
        }, Math.random() * 30000 + 30000);
    }
    function reappearClippy() {
        currentLane = Math.random() > 0.5 ? 'left' : 'right';
        clippyX = getLaneX(currentLane);
        clippyY = Math.random() * (window.innerHeight - 200) + 50;
        clippyContainer.style.left = clippyX + 'px';
        clippyContainer.style.top = clippyY + 'px';
        clippyContainer.classList.remove('hidden');
        clippyContainer.style.opacity = '1';
        setTimeout(() => showSpeechBubble(), 500);
    }
    function scheduleDisappear() {
        _disappearTimeout = window.setTimeout(() => {
            if (!clippyMenu.classList.contains('show') && assistantMode === 'full') {
                disappearClippy();
            }
            scheduleDisappear();
        }, Math.random() * 60000 + 120000);
    }
    scheduleDisappear();
    function showSpeechBubble(message) {
        if (clippyMenu.classList.contains('show') || assistantMode === 'pulse')
            return;
        const phrase = message || clippyPhrases[Math.floor(Math.random() * clippyPhrases.length)];
        clippySpeech.textContent = phrase;
        clippySpeech.classList.add('show');
        setTimeout(() => {
            clippySpeech.classList.remove('show');
        }, 5000);
    }
    setInterval(() => {
        if (!clippyContainer.classList.contains('hidden') &&
            !clippyMenu.classList.contains('show') &&
            !isDragging) {
            showSpeechBubble();
        }
    }, Math.random() * 30000 + 30000);
    setTimeout(() => showSpeechBubble(), 3000);
    const pulsingCircle = document.createElement('div');
    pulsingCircle.id = 'clippy-pulsing-circle';
    pulsingCircle.className = 'clippy-pulsing-circle';
    clippyContainer.appendChild(pulsingCircle);
    function switchToPulseMode() {
        assistantMode = 'pulse';
        localStorage.setItem('assistantMode', 'pulse');
        if (clippySvg)
            clippySvg.style.display = 'none';
        clippySpeech.classList.remove('show');
        clippyMenu.classList.remove('show');
        clippyMenu.classList.add('pulse-menu');
        pulsingCircle.style.display = 'block';
        const leftOffset = 60;
        const bottomOffset = 60;
        clippyContainer.style.left = (window.innerWidth - leftOffset) + 'px';
        clippyContainer.style.top = (window.innerHeight - bottomOffset) + 'px';
    }
    function switchToFullMode() {
        assistantMode = 'full';
        localStorage.setItem('assistantMode', 'full');
        pulsingCircle.style.display = 'none';
        clippyMenu.classList.remove('pulse-menu');
        if (clippySvg)
            clippySvg.style.display = 'block';
        clippyX = getLaneX(currentLane);
        clippyY = Math.min(clippyY, window.innerHeight - 150);
        clippyContainer.style.left = clippyX + 'px';
        clippyContainer.style.top = clippyY + 'px';
    }
    const clippyDisableBtn = document.getElementById('clippy-disable');
    function updateSwitchButtonIcon() {
        if (assistantMode === 'pulse') {
            clippyDisableBtn.innerHTML = '<i class="ti ti-user"></i>';
            clippyDisableBtn.title = 'Switch to Clippy Assistant';
        }
        else {
            clippyDisableBtn.innerHTML = '<i class="ti ti-circle-dot"></i>';
            clippyDisableBtn.title = 'Switch to Pulse Assistant';
        }
    }
    if (clippyDisableBtn) {
        clippyDisableBtn.addEventListener('click', () => {
            if (assistantMode === 'pulse') {
                switchToFullMode();
            }
            else {
                switchToPulseMode();
            }
            updateSwitchButtonIcon();
        });
    }
    pulsingCircle.addEventListener('click', (e) => {
        e.stopPropagation();
        clippyMenu.classList.toggle('show');
    });
    window.addEventListener('click', (event) => {
        if (clippyMenu.classList.contains('show') &&
            !clippyMenu.contains(event.target) &&
            !(clippySvg?.contains(event.target)) &&
            !pulsingCircle.contains(event.target)) {
            clippyMenu.classList.remove('show');
        }
    });
    if (assistantMode === 'pulse') {
        switchToPulseMode();
    }
    else {
        pulsingCircle.style.display = 'none';
    }
    updateSwitchButtonIcon();
    window.addEventListener('resize', () => {
        if (assistantMode === 'pulse') {
            const leftOffset = 70;
            const bottomOffset = 60;
            clippyContainer.style.left = (window.innerWidth - leftOffset) + 'px';
            clippyContainer.style.top = (window.innerHeight - bottomOffset) + 'px';
        }
        else {
            clippyX = getLaneX(currentLane);
            clippyY = Math.min(clippyY, window.innerHeight - 150);
            clippyContainer.style.left = clippyX + 'px';
            clippyContainer.style.top = clippyY + 'px';
        }
    });
});
//# sourceMappingURL=typescript/logs/script.js.map