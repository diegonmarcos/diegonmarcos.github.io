const INTERACTIVE_SELECTORS = '.diamond-container, .cube-container, .pyramid-container';
const SWIPE_THRESHOLD = 40;
export class PageSnap {
    constructor() {
        this.pages = [];
        this.isSnapping = false;
        this.scrollTimer = null;
        this.touchActive = false;
        this.touchInsideInteractive = false;
        this.scrollAtTouchStart = 0;
        this.pages = Array.from(document.querySelectorAll('.page'));
        if (this.pages.length === 0)
            return;
        console.log(`[PageSnap] Initialized with ${this.pages.length} pages`);
        this.bindEvents();
    }
    bindEvents() {
        document.addEventListener('touchstart', (e) => {
            this.touchActive = true;
            this.cancelPendingSnap();
            this.scrollAtTouchStart = window.scrollY;
            const target = e.target;
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
        document.addEventListener('scroll', () => {
            if (this.touchActive)
                return;
            this.cancelPendingSnap();
            this.scheduleSnap(400);
        }, { passive: true });
    }
    scheduleSnap(delay) {
        this.cancelPendingSnap();
        const scrollAtSchedule = window.scrollY;
        this.scrollTimer = window.setTimeout(() => {
            this.snapDirectional(scrollAtSchedule);
        }, delay);
    }
    cancelPendingSnap() {
        if (this.scrollTimer !== null) {
            clearTimeout(this.scrollTimer);
            this.scrollTimer = null;
        }
    }
    snapDirectional(scrollWhenScheduled) {
        if (this.isSnapping || this.touchActive)
            return;
        const scrollY = window.scrollY;
        const delta = scrollY - this.scrollAtTouchStart;
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
            if (delta > 0 && currentIdx < this.pages.length - 1) {
                const nextRect = this.pages[currentIdx + 1].getBoundingClientRect();
                if (nextRect.top < window.innerHeight * 0.8) {
                    targetIdx = currentIdx + 1;
                }
            }
            else if (delta < 0 && currentIdx > 0) {
                const prevRect = this.pages[currentIdx - 1].getBoundingClientRect();
                if (prevRect.bottom > window.innerHeight * 0.2) {
                    targetIdx = currentIdx - 1;
                }
            }
        }
        const target = this.pages[targetIdx];
        const rect = target.getBoundingClientRect();
        if (Math.abs(rect.top) < 10)
            return;
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
