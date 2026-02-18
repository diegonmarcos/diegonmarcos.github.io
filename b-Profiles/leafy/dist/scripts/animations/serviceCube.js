export class ServiceCube {
    constructor() {
        this.cube = null;
        this.container = null;
        this.currentFace = 0;
        this.rotationY = -25;
        this.rotationX = -10;
        this.isDragging = false;
        this.startX = 0;
        this.startY = 0;
        this.lastX = 0;
        this.lastY = 0;
        this.velocity = { x: 0, y: 0 };
        this.animationId = null;
        this.autoRotateId = null;
        this.faceRotations = [0, -90, -180, -270];
        this.cube = document.getElementById('services-cube');
        this.container = document.querySelector('.cube-container');
        if (!this.cube || !this.container)
            return;
        this.init();
    }
    init() {
        this.bindEvents();
        this.initNavButtons();
        this.setActiveFace(0);
        this.startAutoRotate();
    }
    bindEvents() {
        if (!this.cube)
            return;
        this.cube.addEventListener('mousedown', this.onDragStart.bind(this));
        document.addEventListener('mousemove', this.onDragMove.bind(this));
        document.addEventListener('mouseup', this.onDragEnd.bind(this));
        this.cube.addEventListener('touchstart', this.onTouchStart.bind(this), { passive: false });
        document.addEventListener('touchmove', this.onTouchMove.bind(this), { passive: false });
        document.addEventListener('touchend', this.onTouchEnd.bind(this));
        this.cube.addEventListener('contextmenu', (e) => e.preventDefault());
    }
    initNavButtons() {
        const buttons = document.querySelectorAll('.cube-nav-btn');
        buttons.forEach((btn) => {
            btn.addEventListener('click', () => {
                const face = parseInt(btn.getAttribute('data-face') || '0');
                this.rotateTo(face);
                this.stopAutoRotate();
            });
        });
    }
    onDragStart(e) {
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
    onDragMove(e) {
        if (!this.isDragging)
            return;
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
    onDragEnd() {
        if (!this.isDragging)
            return;
        this.isDragging = false;
        this.cube?.classList.remove('dragging');
        this.applyMomentum();
    }
    onTouchStart(e) {
        if (e.touches.length !== 1)
            return;
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
    onTouchMove(e) {
        if (!this.isDragging || e.touches.length !== 1)
            return;
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
    onTouchEnd() {
        if (!this.isDragging)
            return;
        this.isDragging = false;
        this.cube?.classList.remove('dragging');
        this.applyMomentum();
    }
    applyMomentum() {
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
            }
            else {
                this.snapToNearestFace();
            }
        };
        this.animationId = requestAnimationFrame(animate);
    }
    snapToNearestFace() {
        let normalizedY = ((this.rotationY % 360) + 360) % 360;
        let nearestFace = 0;
        let minDiff = Infinity;
        for (let i = 0; i < 4; i++) {
            const faceAngle = ((-this.faceRotations[i] % 360) + 360) % 360;
            let diff = Math.abs(normalizedY - faceAngle);
            if (diff > 180)
                diff = 360 - diff;
            if (diff < minDiff) {
                minDiff = diff;
                nearestFace = i;
            }
        }
        this.rotateTo(nearestFace);
    }
    rotateTo(face) {
        this.currentFace = face;
        if (face === 4) {
            this.rotationX = -90;
            this.rotationY = 0;
        }
        else if (face === 5) {
            this.rotationX = 90;
            this.rotationY = 0;
        }
        else {
            const targetY = this.faceRotations[face];
            let currentNormalized = this.rotationY % 360;
            let diff = targetY - currentNormalized;
            if (diff > 180)
                diff -= 360;
            if (diff < -180)
                diff += 360;
            this.rotationY = this.rotationY + diff;
            this.rotationX = -10;
        }
        this.cube?.classList.remove('dragging');
        this.updateTransform();
        this.setActiveFace(face);
    }
    updateTransform() {
        if (!this.cube)
            return;
        const translateZ = window.innerWidth <= 768 ? -125 : -150;
        this.cube.style.transform = `translateZ(${translateZ}px) rotateX(${this.rotationX}deg) rotateY(${this.rotationY}deg)`;
    }
    setActiveFace(face) {
        const faces = document.querySelectorAll('.cube-face');
        faces.forEach((f, i) => {
            if (i < 6) {
                f.classList.toggle('active', i === face);
            }
        });
        const buttons = document.querySelectorAll('.cube-nav-btn');
        buttons.forEach((btn, i) => {
            btn.classList.toggle('active', i === face);
        });
    }
    startAutoRotate() {
        let lastTime = performance.now();
        let targetRotY = this.rotationY;
        let targetRotX = this.rotationX;
        let changeTime = 0;
        const changeInterval = 3000;
        const rotate = (time) => {
            if (this.isDragging)
                return;
            const delta = time - lastTime;
            lastTime = time;
            if (time - changeTime > changeInterval) {
                changeTime = time;
                targetRotY = this.rotationY + (Math.random() - 0.5) * 180;
                targetRotX = -10 + (Math.random() - 0.5) * 30;
                targetRotX = Math.max(-40, Math.min(20, targetRotX));
            }
            const ease = 0.02;
            this.rotationY += (targetRotY - this.rotationY) * ease;
            this.rotationX += (targetRotX - this.rotationX) * ease;
            this.updateTransform();
            this.autoRotateId = requestAnimationFrame(rotate);
        };
        setTimeout(() => {
            if (!this.isDragging) {
                this.autoRotateId = requestAnimationFrame(rotate);
            }
        }, 3000);
    }
    stopAutoRotate() {
        if (this.autoRotateId) {
            cancelAnimationFrame(this.autoRotateId);
            this.autoRotateId = null;
        }
    }
    destroy() {
        this.stopAutoRotate();
        if (this.animationId) {
            cancelAnimationFrame(this.animationId);
        }
    }
}
