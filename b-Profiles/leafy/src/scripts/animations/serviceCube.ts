// Service Cube - Interactive 3D cube for services section

export class ServiceCube {
    private cube: HTMLElement | null = null;
    private container: HTMLElement | null = null;
    private currentFace: number = 0;
    private rotationY: number = -25;
    private rotationX: number = -10;
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
        this.cube = document.getElementById('services-cube');
        this.container = document.querySelector('.cube-container');

        if (!this.cube || !this.container) return;

        this.init();
    }

    private init(): void {
        this.bindEvents();
        this.initNavButtons();
        this.setActiveFace(0);
        this.startAutoRotate();
    }

    private bindEvents(): void {
        if (!this.cube) return;

        // Mouse events
        this.cube.addEventListener('mousedown', this.onDragStart.bind(this));
        document.addEventListener('mousemove', this.onDragMove.bind(this));
        document.addEventListener('mouseup', this.onDragEnd.bind(this));

        // Touch events
        this.cube.addEventListener('touchstart', this.onTouchStart.bind(this), { passive: false });
        document.addEventListener('touchmove', this.onTouchMove.bind(this), { passive: false });
        document.addEventListener('touchend', this.onTouchEnd.bind(this));

        // Prevent context menu on cube
        this.cube.addEventListener('contextmenu', (e) => e.preventDefault());
    }

    private initNavButtons(): void {
        const buttons = document.querySelectorAll('.cube-nav-btn');
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
        this.cube?.classList.add('dragging');
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
        this.rotationX = Math.max(-60, Math.min(60, this.rotationX));

        this.updateTransform();

        this.lastX = e.clientX;
        this.lastY = e.clientY;
    }

    private onDragEnd(): void {
        if (!this.isDragging) return;
        this.isDragging = false;
        this.cube?.classList.remove('dragging');

        // Apply momentum
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
        this.cube?.classList.add('dragging');
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
        this.rotationX = Math.max(-60, Math.min(60, this.rotationX));

        this.updateTransform();

        this.lastX = touch.clientX;
        this.lastY = touch.clientY;
    }

    private onTouchEnd(): void {
        if (!this.isDragging) return;
        this.isDragging = false;
        this.cube?.classList.remove('dragging');

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
                this.rotationX = Math.max(-60, Math.min(60, this.rotationX));

                this.updateTransform();
                this.animationId = requestAnimationFrame(animate);
            } else {
                // Snap to nearest face
                this.snapToNearestFace();
            }
        };

        this.animationId = requestAnimationFrame(animate);
    }

    private snapToNearestFace(): void {
        // Normalize rotation to 0-360
        let normalizedY = ((this.rotationY % 360) + 360) % 360;

        // Find nearest face
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

        // Calculate target rotation
        const targetY = this.faceRotations[face];

        // Find shortest rotation path
        let currentNormalized = this.rotationY % 360;
        let diff = targetY - currentNormalized;

        if (diff > 180) diff -= 360;
        if (diff < -180) diff += 360;

        this.rotationY = this.rotationY + diff;
        this.rotationX = -10; // Reset X rotation

        this.cube?.classList.remove('dragging');
        this.updateTransform();
        this.setActiveFace(face);
    }

    private updateTransform(): void {
        if (!this.cube) return;

        const translateZ = window.innerWidth <= 768 ? -125 : -150;
        this.cube.style.transform = `translateZ(${translateZ}px) rotateX(${this.rotationX}deg) rotateY(${this.rotationY}deg)`;
    }

    private setActiveFace(face: number): void {
        // Update face classes
        const faces = document.querySelectorAll('.cube-face');
        faces.forEach((f, i) => {
            if (i < 4) {
                f.classList.toggle('active', i === face);
            }
        });

        // Update nav buttons
        const buttons = document.querySelectorAll('.cube-nav-btn');
        buttons.forEach((btn, i) => {
            btn.classList.toggle('active', i === face);
        });
    }

    private startAutoRotate(): void {
        let lastTime = performance.now();
        let targetRotY = this.rotationY;
        let targetRotX = this.rotationX;
        let changeTime = 0;
        const changeInterval = 3000; // Change direction every 3 seconds

        const rotate = (time: number) => {
            if (this.isDragging) return;

            const delta = time - lastTime;
            lastTime = time;

            // Change target rotation randomly
            if (time - changeTime > changeInterval) {
                changeTime = time;
                // Random rotation targets
                targetRotY = this.rotationY + (Math.random() - 0.5) * 180;
                targetRotX = -10 + (Math.random() - 0.5) * 30;
                targetRotX = Math.max(-40, Math.min(20, targetRotX));
            }

            // Smooth interpolation towards target
            const ease = 0.02;
            this.rotationY += (targetRotY - this.rotationY) * ease;
            this.rotationX += (targetRotX - this.rotationX) * ease;

            this.updateTransform();

            this.autoRotateId = requestAnimationFrame(rotate);
        };

        // Start auto-rotate after 3 seconds
        setTimeout(() => {
            if (!this.isDragging) {
                this.autoRotateId = requestAnimationFrame(rotate);
            }
        }, 3000);
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
