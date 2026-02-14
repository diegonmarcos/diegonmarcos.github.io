export class CardEffects {
    constructor() {
        this.initMouseTracking();
        this.init3DTilt();
        this.initMagneticButtons();
    }
    initMouseTracking() {
        document.querySelectorAll('.card').forEach(card => {
            card.addEventListener('mousemove', (e) => {
                const mouseEvent = e;
                const rect = card.getBoundingClientRect();
                const x = ((mouseEvent.clientX - rect.left) / rect.width) * 100;
                const y = ((mouseEvent.clientY - rect.top) / rect.height) * 100;
                card.style.setProperty('--mouse-x', x + '%');
                card.style.setProperty('--mouse-y', y + '%');
            });
        });
    }
    init3DTilt() {
        document.querySelectorAll('.card').forEach(card => {
            card.addEventListener('mousemove', (e) => {
                const mouseEvent = e;
                const rect = card.getBoundingClientRect();
                const x = mouseEvent.clientX - rect.left;
                const y = mouseEvent.clientY - rect.top;
                const centerX = rect.width / 2;
                const centerY = rect.height / 2;
                const rotateX = (y - centerY) / 20;
                const rotateY = (centerX - x) / 20;
                card.style.transform =
                    `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-10px) scale(1.02)`;
            });
            card.addEventListener('mouseleave', () => {
                card.style.transform =
                    'perspective(1000px) rotateX(0) rotateY(0) translateY(0) scale(1)';
            });
        });
    }
    initMagneticButtons() {
        document.querySelectorAll('.cta-btn').forEach(btn => {
            btn.addEventListener('mousemove', (e) => {
                const mouseEvent = e;
                const rect = btn.getBoundingClientRect();
                const x = mouseEvent.clientX - rect.left - rect.width / 2;
                const y = mouseEvent.clientY - rect.top - rect.height / 2;
                btn.style.transform = `translate(${x * 0.3}px, ${y * 0.3}px)`;
            });
            btn.addEventListener('mouseleave', () => {
                btn.style.transform = 'translate(0, 0)';
            });
        });
    }
}
