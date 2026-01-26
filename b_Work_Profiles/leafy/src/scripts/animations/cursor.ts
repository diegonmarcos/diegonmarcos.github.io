export class CursorAnimation {
    private cursor: HTMLElement | null;
    private cursorX: number = 0;
    private cursorY: number = 0;
    private targetX: number = 0;
    private targetY: number = 0;
    private animationId: number | null = null;

    constructor() {
        this.cursor = document.querySelector('.cursor');
        if (!this.cursor) return;

        this.animate = this.animate.bind(this);
        this.onMouseMove = this.onMouseMove.bind(this);

        document.addEventListener('mousemove', this.onMouseMove);
        this.animate();
        this.initHoverEffects();
    }

    private onMouseMove(e: MouseEvent): void {
        this.targetX = e.clientX;
        this.targetY = e.clientY;
    }

    private animate(): void {
        this.cursorX += (this.targetX - this.cursorX) * 0.15;
        this.cursorY += (this.targetY - this.cursorY) * 0.15;

        if (this.cursor) {
            this.cursor.style.left = this.cursorX + 'px';
            this.cursor.style.top = this.cursorY + 'px';
        }

        this.animationId = requestAnimationFrame(this.animate);
    }

    private initHoverEffects(): void {
        if (!this.cursor) return;

        const hoverElements = document.querySelectorAll('a, .card, .shader-card, .cta-btn');
        hoverElements.forEach(el => {
            el.addEventListener('mouseenter', () => this.cursor?.classList.add('hover'));
            el.addEventListener('mouseleave', () => this.cursor?.classList.remove('hover'));
        });
    }

    public destroy(): void {
        if (this.animationId) {
            cancelAnimationFrame(this.animationId);
        }
        document.removeEventListener('mousemove', this.onMouseMove);
    }
}
