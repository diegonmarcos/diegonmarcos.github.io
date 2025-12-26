export function initCardEffects(): void {
    const cards = document.querySelectorAll<HTMLElement>('.card');

    cards.forEach(card => {
        // Add invisible <a> overlay for browser status bar
        const url = card.dataset.url;
        if (url && !card.querySelector('.card-link-overlay')) {
            const link = document.createElement('a');
            link.href = url;
            link.target = '_blank';
            link.rel = 'noopener';
            link.className = 'card-link-overlay';
            link.style.cssText = `
                position: absolute;
                inset: 0;
                z-index: 5;
            `;
            link.setAttribute('aria-label', card.querySelector('h3')?.textContent || 'Open link');
            card.style.position = 'relative';
            card.appendChild(link);
        }

        card.addEventListener('mouseenter', () => {
            card.style.zIndex = '10';
        });

        card.addEventListener('mouseleave', () => {
            card.style.zIndex = '1';
            card.style.transform = 'translateY(0) scale(1) rotateX(0) rotateY(0)';
        });

        card.addEventListener('mousemove', (e: MouseEvent) => {
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

export function initStatusPulse(): void {
    const statusElements = document.querySelectorAll<HTMLElement>('.card-status');

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
