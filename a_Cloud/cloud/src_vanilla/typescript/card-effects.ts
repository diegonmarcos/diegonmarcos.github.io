export function initCardEffects(): void {
    const cards = document.querySelectorAll<HTMLElement>('.card');

    cards.forEach(card => {
        card.addEventListener('mouseenter', () => {
            card.style.zIndex = '10';
            // Show URL in browser status bar by creating/updating a hidden link
            const url = card.dataset.url;
            if (url) {
                updateStatusBarUrl(url);
            }
        });

        card.addEventListener('mouseleave', () => {
            card.style.zIndex = '1';
            card.style.transform = 'translateY(0) scale(1) rotateX(0) rotateY(0)';
            // Clear status bar URL
            clearStatusBarUrl();
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

// URL status console at bottom of page (browser-like status bar)
let urlStatusBar: HTMLElement | null = null;

function getOrCreateStatusBar(): HTMLElement {
    if (!urlStatusBar) {
        urlStatusBar = document.createElement('div');
        urlStatusBar.id = 'url-status-bar';
        urlStatusBar.style.cssText = `
            position: fixed;
            bottom: 0;
            left: 0;
            max-width: 60%;
            padding: 4px 12px;
            background: var(--bg-secondary, rgba(30, 30, 40, 0.95));
            border: 1px solid var(--border-color, rgba(255,255,255,0.1));
            border-bottom: none;
            border-left: none;
            border-top-right-radius: 6px;
            font-family: var(--font-mono, monospace);
            font-size: 11px;
            color: var(--text-secondary, rgba(255,255,255,0.7));
            z-index: 9999;
            opacity: 0;
            transform: translateY(100%);
            transition: opacity 0.15s ease, transform 0.15s ease;
            pointer-events: none;
            white-space: nowrap;
            overflow: hidden;
            text-overflow: ellipsis;
        `;
        document.body.appendChild(urlStatusBar);
    }
    return urlStatusBar;
}

function updateStatusBarUrl(url: string): void {
    const bar = getOrCreateStatusBar();
    // Convert relative URLs to absolute for display
    const absoluteUrl = new URL(url, window.location.href).href;
    bar.textContent = absoluteUrl;
    bar.style.opacity = '1';
    bar.style.transform = 'translateY(0)';
}

function clearStatusBarUrl(): void {
    if (urlStatusBar) {
        urlStatusBar.style.opacity = '0';
        urlStatusBar.style.transform = 'translateY(100%)';
    }
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
