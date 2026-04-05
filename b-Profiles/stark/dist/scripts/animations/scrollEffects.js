export class ScrollEffects {
    constructor() {
        this.lastScroll = 0;
        this.initNavScroll();
        this.initParallax();
        this.initSmoothScroll();
    }
    initNavScroll() {
        window.addEventListener('scroll', () => {
            const nav = document.querySelector('.nav');
            const currentScroll = window.pageYOffset;
            if (currentScroll > 100) {
                nav?.classList.add('scrolled');
            }
            else {
                nav?.classList.remove('scrolled');
            }
            this.lastScroll = currentScroll;
        });
    }
    initParallax() {
        const heroLogo = document.querySelector('.hero-logo');
        const heroTitle = document.querySelector('.hero-title');
        window.addEventListener('scroll', () => {
            const scrollY = window.pageYOffset;
            const heroHeight = window.innerHeight;
            if (scrollY < heroHeight && heroLogo && heroTitle) {
                const progress = scrollY / heroHeight;
                heroLogo.style.transform = `translateY(${scrollY * 0.3}px) scale(${1 - progress * 0.2})`;
                heroLogo.style.opacity = String(1 - progress);
                heroTitle.style.transform = `translateY(${scrollY * 0.2}px)`;
                heroTitle.style.opacity = String(1 - progress);
            }
        });
    }
    initSmoothScroll() {
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', (e) => {
                e.preventDefault();
                const href = anchor.getAttribute('href');
                if (!href)
                    return;
                const target = document.querySelector(href);
                if (target) {
                    target.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            });
        });
    }
}
