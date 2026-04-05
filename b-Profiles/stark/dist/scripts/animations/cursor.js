export class CursorAnimation {
    constructor() {
        this.cursorX = 0;
        this.cursorY = 0;
        this.targetX = 0;
        this.targetY = 0;
        this.animationId = null;
        this.cursor = document.querySelector('.cursor');
        if (!this.cursor)
            return;
        this.animate = this.animate.bind(this);
        this.onMouseMove = this.onMouseMove.bind(this);
        document.addEventListener('mousemove', this.onMouseMove);
        this.animate();
        this.initHoverEffects();
    }
    onMouseMove(e) {
        this.targetX = e.clientX;
        this.targetY = e.clientY;
    }
    animate() {
        this.cursorX += (this.targetX - this.cursorX) * 0.15;
        this.cursorY += (this.targetY - this.cursorY) * 0.15;
        if (this.cursor) {
            this.cursor.style.left = this.cursorX + 'px';
            this.cursor.style.top = this.cursorY + 'px';
        }
        this.animationId = requestAnimationFrame(this.animate);
    }
    initHoverEffects() {
        if (!this.cursor)
            return;
        const hoverElements = document.querySelectorAll('a, .card, .shader-card, .cta-btn');
        hoverElements.forEach(el => {
            el.addEventListener('mouseenter', () => this.cursor?.classList.add('hover'));
            el.addEventListener('mouseleave', () => this.cursor?.classList.remove('hover'));
        });
    }
    destroy() {
        if (this.animationId) {
            cancelAnimationFrame(this.animationId);
        }
        document.removeEventListener('mousemove', this.onMouseMove);
    }
}
