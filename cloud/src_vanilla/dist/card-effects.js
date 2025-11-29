export function initCardEffects() {
    const cards = document.querySelectorAll('.card');
    cards.forEach(card => {
        card.addEventListener('mouseenter', () => {
            card.style.zIndex = '10';
        });
        card.addEventListener('mouseleave', () => {
            card.style.zIndex = '1';
            card.style.transform = 'translateY(0) scale(1) rotateX(0) rotateY(0)';
        });
        card.addEventListener('mousemove', (e) => {
            const rect = card.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            const centerX = rect.width / 2;
            const centerY = rect.height / 2;
            const rotateX = (y - centerY) / 10;
            const rotateY = (centerX - x) / 10;
            card.style.transform = `
                translateY(-12px)
                scale(1.02)
                perspective(1000px)
                rotateX(${rotateX}deg)
                rotateY(${rotateY}deg)
            `;
        });
    });
}
export function initStatusPulse() {
    const statusElements = document.querySelectorAll('.card-status');
    statusElements.forEach(status => {
        setInterval(() => {
            if (Math.random() > 0.95) {
                status.style.animation = 'pulse 0.5s ease-in-out';
                setTimeout(() => {
                    status.style.animation = '';
                }, 500);
            }
        }, 2000);
    });
}
//# sourceMappingURL=card-effects.js.map