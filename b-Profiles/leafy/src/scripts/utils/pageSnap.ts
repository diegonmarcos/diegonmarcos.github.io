// PageSnap - Direction-aware page snapping
// Small swipe down → next page. Small swipe up → previous page.
// Ignores touches inside interactive 3D containers.

const INTERACTIVE_SELECTORS = '.diamond-container, .cube-container, .pyramid-container';
const SWIPE_THRESHOLD = 40; // px — minimum drag to trigger directional snap

export class PageSnap {
    private pages: HTMLElement[] = [];
    private isSnapping: boolean = false;
    private scrollTimer: number | null = null;
    private touchActive: boolean = false;
    private touchInsideInteractive: boolean = false;
    private scrollAtTouchStart: number = 0;

    constructor() {
        this.pages = Array.from(document.querySelectorAll('.page'));
        if (this.pages.length === 0) return;

        console.log(`[PageSnap] Initialized with ${this.pages.length} pages`);
        this.bindEvents();
    }

    private bindEvents(): void {
        document.addEventListener('touchstart', (e) => {
            this.touchActive = true;
            this.cancelPendingSnap();
            this.scrollAtTouchStart = window.scrollY;

            const target = e.target as HTMLElement;
            this.touchInsideInteractive = !!target.closest(INTERACTIVE_SELECTORS);
        }, { passive: true });

        document.addEventListener('touchend', () => {
            this.touchActive = false;

            if (this.touchInsideInteractive) {
                this.touchInsideInteractive = false;
                return;
            }

            this.scheduleSnap(250);
        }, { passive: true });

        // Desktop wheel scroll
        document.addEventListener('scroll', () => {
            if (this.touchActive) return;
            this.cancelPendingSnap();
            this.scheduleSnap(400);
        }, { passive: true });
    }

    private scheduleSnap(delay: number): void {
        this.cancelPendingSnap();
        const scrollAtSchedule = window.scrollY;
        this.scrollTimer = window.setTimeout(() => {
            this.snapDirectional(scrollAtSchedule);
        }, delay);
    }

    private cancelPendingSnap(): void {
        if (this.scrollTimer !== null) {
            clearTimeout(this.scrollTimer);
            this.scrollTimer = null;
        }
    }

    private snapDirectional(scrollWhenScheduled: number): void {
        if (this.isSnapping || this.touchActive) return;

        const scrollY = window.scrollY;
        const delta = scrollY - this.scrollAtTouchStart;

        // Find current page index (page whose top is closest to viewport top)
        let currentIdx = 0;
        let minTopDist = Infinity;
        for (let i = 0; i < this.pages.length; i++) {
            const top = Math.abs(this.pages[i].getBoundingClientRect().top);
            if (top < minTopDist) {
                minTopDist = top;
                currentIdx = i;
            }
        }

        let targetIdx = currentIdx;

        if (Math.abs(delta) > SWIPE_THRESHOLD) {
            // Directional: swipe down → next, swipe up → previous
            if (delta > 0 && currentIdx < this.pages.length - 1) {
                // Scrolled down — check if next page is partially visible
                const nextRect = this.pages[currentIdx + 1].getBoundingClientRect();
                if (nextRect.top < window.innerHeight * 0.8) {
                    targetIdx = currentIdx + 1;
                }
            } else if (delta < 0 && currentIdx > 0) {
                // Scrolled up — check if previous page is partially visible
                const prevRect = this.pages[currentIdx - 1].getBoundingClientRect();
                if (prevRect.bottom > window.innerHeight * 0.2) {
                    targetIdx = currentIdx - 1;
                }
            }
        }

        const target = this.pages[targetIdx];
        const rect = target.getBoundingClientRect();

        // Skip if already aligned (within 10px)
        if (Math.abs(rect.top) < 10) return;

        this.isSnapping = true;
        window.scrollTo({
            top: scrollY + rect.top,
            behavior: 'smooth'
        });

        setTimeout(() => {
            this.isSnapping = false;
        }, 600);
    }
}
