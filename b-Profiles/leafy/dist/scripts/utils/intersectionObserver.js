import { TextScramble } from "../animations/textScramble.js";
export class ObserverManager {
    constructor() {
        this.observer = this.createMainObserver();
        this.scrambleObserver = this.createScrambleObserver();
        this.observeElements();
        this.staggerCards();
    }
    createMainObserver() {
        const options = {
            threshold: 0.2,
            rootMargin: '0px 0px -50px 0px'
        };
        return new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const target = entry.target;
                    const delay = target.dataset.delay || '0';
                    setTimeout(() => {
                        target.classList.add('visible');
                    }, parseInt(delay));
                }
            });
        }, options);
    }
    createScrambleObserver() {
        return new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const target = entry.target;
                    if (!target.dataset.scrambled) {
                        target.dataset.scrambled = 'true';
                        const fx = new TextScramble(target);
                        fx.setText(target.innerText);
                    }
                }
            });
        }, { threshold: 0.5 });
    }
    observeElements() {
        document.querySelectorAll('.card, .shader-card, .section-header, .contact-text, .cta-btn').forEach(el => {
            this.observer.observe(el);
        });
        document.querySelectorAll('.section-title').forEach(title => {
            this.scrambleObserver.observe(title);
        });
    }
    staggerCards() {
        document.querySelectorAll('.cards-grid').forEach(grid => {
            const cards = grid.querySelectorAll('.card');
            cards.forEach((card, i) => {
                card.style.transitionDelay = `${i * 0.15}s`;
            });
        });
    }
}
