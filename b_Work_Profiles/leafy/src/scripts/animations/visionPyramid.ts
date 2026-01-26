// Vision Pyramid - Interactive 3D pyramid for about section

export class VisionPyramid {
    private pyramid: HTMLElement | null = null;
    private container: HTMLElement | null = null;
    private currentFace: number = 0;
    private rotationY: number = -30;
    private rotationX: number = -15;
    private rotationZ: number = 0;
    private isDragging: boolean = false;
    private startX: number = 0;
    private startY: number = 0;
    private lastX: number = 0;
    private lastY: number = 0;
    private velocity: { x: number; y: number } = { x: 0, y: 0 };
    private animationId: number | null = null;
    private autoRotateId: number | null = null;

    // Face rotations (Y angle for each face)
    private faceRotations: number[] = [0, -90, -180, -270];

    constructor() {
        this.pyramid = document.getElementById('vision-pyramid');
        this.container = document.querySelector('.pyramid-container');

        if (!this.pyramid || !this.container) return;

        this.init();
    }

    private init(): void {
        this.bindEvents();
        this.initNavButtons();
        this.setActiveFace(0);
        this.startAutoRotate();
    }

    private bindEvents(): void {
        if (!this.pyramid) return;

        // Mouse events
        this.pyramid.addEventListener('mousedown', this.onDragStart.bind(this));
        document.addEventListener('mousemove', this.onDragMove.bind(this));
        document.addEventListener('mouseup', this.onDragEnd.bind(this));

        // Touch events
        this.pyramid.addEventListener('touchstart', this.onTouchStart.bind(this), { passive: false });
        document.addEventListener('touchmove', this.onTouchMove.bind(this), { passive: false });
        document.addEventListener('touchend', this.onTouchEnd.bind(this));

        // Prevent context menu
        this.pyramid.addEventListener('contextmenu', (e) => e.preventDefault());
    }

    private initNavButtons(): void {
        const buttons = document.querySelectorAll('.pyramid-nav-btn');
        buttons.forEach((btn) => {
            btn.addEventListener('click', () => {
                const face = parseInt(btn.getAttribute('data-face') || '0');
                this.rotateTo(face);
                this.stopAutoRotate();
            });
        });
    }

    private onDragStart(e: MouseEvent): void {
        this.isDragging = true;
        this.startX = e.clientX;
        this.startY = e.clientY;
        this.lastX = e.clientX;
        this.lastY = e.clientY;
        this.pyramid?.classList.add('dragging');
        this.stopAutoRotate();

        if (this.animationId) {
            cancelAnimationFrame(this.animationId);
            this.animationId = null;
        }
    }

    private onDragMove(e: MouseEvent): void {
        if (!this.isDragging) return;

        const deltaX = e.clientX - this.lastX;
        const deltaY = e.clientY - this.lastY;

        this.velocity.x = deltaX;
        this.velocity.y = deltaY;

        this.rotationY += deltaX * 0.5;
        this.rotationX -= deltaY * 0.3;
        this.rotationX = Math.max(-60, Math.min(30, this.rotationX));

        this.updateTransform();

        this.lastX = e.clientX;
        this.lastY = e.clientY;
    }

    private onDragEnd(): void {
        if (!this.isDragging) return;
        this.isDragging = false;
        this.pyramid?.classList.remove('dragging');

        this.applyMomentum();
    }

    private onTouchStart(e: TouchEvent): void {
        if (e.touches.length !== 1) return;
        e.preventDefault();

        const touch = e.touches[0];
        this.isDragging = true;
        this.startX = touch.clientX;
        this.startY = touch.clientY;
        this.lastX = touch.clientX;
        this.lastY = touch.clientY;
        this.pyramid?.classList.add('dragging');
        this.stopAutoRotate();

        if (this.animationId) {
            cancelAnimationFrame(this.animationId);
            this.animationId = null;
        }
    }

    private onTouchMove(e: TouchEvent): void {
        if (!this.isDragging || e.touches.length !== 1) return;
        e.preventDefault();

        const touch = e.touches[0];
        const deltaX = touch.clientX - this.lastX;
        const deltaY = touch.clientY - this.lastY;

        this.velocity.x = deltaX;
        this.velocity.y = deltaY;

        this.rotationY += deltaX * 0.5;
        this.rotationX -= deltaY * 0.3;
        this.rotationX = Math.max(-60, Math.min(30, this.rotationX));

        this.updateTransform();

        this.lastX = touch.clientX;
        this.lastY = touch.clientY;
    }

    private onTouchEnd(): void {
        if (!this.isDragging) return;
        this.isDragging = false;
        this.pyramid?.classList.remove('dragging');

        this.applyMomentum();
    }

    private applyMomentum(): void {
        const friction = 0.95;
        const minVelocity = 0.1;

        const animate = () => {
            this.velocity.x *= friction;
            this.velocity.y *= friction;

            if (Math.abs(this.velocity.x) > minVelocity || Math.abs(this.velocity.y) > minVelocity) {
                this.rotationY += this.velocity.x * 0.5;
                this.rotationX -= this.velocity.y * 0.3;
                this.rotationX = Math.max(-60, Math.min(30, this.rotationX));

                this.updateTransform();
                this.animationId = requestAnimationFrame(animate);
            } else {
                this.snapToNearestFace();
            }
        };

        this.animationId = requestAnimationFrame(animate);
    }

    private snapToNearestFace(): void {
        let normalizedY = ((this.rotationY % 360) + 360) % 360;

        let nearestFace = 0;
        let minDiff = Infinity;

        for (let i = 0; i < 4; i++) {
            const faceAngle = ((-this.faceRotations[i] % 360) + 360) % 360;
            let diff = Math.abs(normalizedY - faceAngle);
            if (diff > 180) diff = 360 - diff;

            if (diff < minDiff) {
                minDiff = diff;
                nearestFace = i;
            }
        }

        this.rotateTo(nearestFace);
    }

    private rotateTo(face: number): void {
        this.currentFace = face;

        const targetY = this.faceRotations[face];

        let currentNormalized = this.rotationY % 360;
        let diff = targetY - currentNormalized;

        if (diff > 180) diff -= 360;
        if (diff < -180) diff += 360;

        this.rotationY = this.rotationY + diff;
        this.rotationX = -15;

        this.pyramid?.classList.remove('dragging');
        this.updateTransform();
        this.setActiveFace(face);
    }

    private updateTransform(): void {
        if (!this.pyramid) return;

        this.pyramid.style.transform = `rotateX(${this.rotationX}deg) rotateY(${this.rotationY}deg) rotateZ(${this.rotationZ}deg)`;
    }

    private setActiveFace(face: number): void {
        const faces = document.querySelectorAll('.pyramid-face');
        faces.forEach((f, i) => {
            if (i < 4) {
                f.classList.toggle('active', i === face);
            }
        });

        const buttons = document.querySelectorAll('.pyramid-nav-btn');
        buttons.forEach((btn, i) => {
            btn.classList.toggle('active', i === face);
        });
    }

    private startAutoRotate(): void {
        let lastTime = performance.now();

        // Continuous rotation speeds (degrees per second)
        const speedX = 8;   // Slow tilt
        const speedY = 25;  // Main horizontal spin
        const speedZ = 5;   // Slight wobble

        const rotate = (time: number) => {
            if (this.isDragging) return;

            const delta = (time - lastTime) / 1000; // Convert to seconds
            lastTime = time;

            // Continuous rotation on all 3 axes
            this.rotationY += speedY * delta;

            // Oscillating X and Z for organic motion
            const t = time * 0.001;
            this.rotationX = -15 + Math.sin(t * 0.5) * 20;
            this.rotationZ = Math.sin(t * 0.3) * 10;

            this.updateTransform();

            this.autoRotateId = requestAnimationFrame(rotate);
        };

        // Start auto-rotate immediately
        this.autoRotateId = requestAnimationFrame(rotate);
    }

    private stopAutoRotate(): void {
        if (this.autoRotateId) {
            cancelAnimationFrame(this.autoRotateId);
            this.autoRotateId = null;
        }
    }

    public destroy(): void {
        this.stopAutoRotate();
        if (this.animationId) {
            cancelAnimationFrame(this.animationId);
        }
    }
}
