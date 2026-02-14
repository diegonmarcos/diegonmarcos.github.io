export class VisionPyramid {
    constructor() {
        this.pyramid = null;
        this.container = null;
        this.currentFace = 0;
        this.rotationY = -30;
        this.rotationX = -15;
        this.rotationZ = 0;
        this.isDragging = false;
        this.startX = 0;
        this.startY = 0;
        this.lastX = 0;
        this.lastY = 0;
        this.velocity = { x: 0, y: 0 };
        this.animationId = null;
        this.autoRotateId = null;
        this.faceRotations = [0, -90, -180, -270];
        this.pyramid = document.getElementById('vision-pyramid');
        this.container = document.querySelector('.pyramid-container');
        if (!this.pyramid || !this.container)
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
        if (!this.pyramid)
            return;
        this.pyramid.addEventListener('mousedown', this.onDragStart.bind(this));
        document.addEventListener('mousemove', this.onDragMove.bind(this));
        document.addEventListener('mouseup', this.onDragEnd.bind(this));
        this.pyramid.addEventListener('touchstart', this.onTouchStart.bind(this), { passive: false });
        document.addEventListener('touchmove', this.onTouchMove.bind(this), { passive: false });
        document.addEventListener('touchend', this.onTouchEnd.bind(this));
        this.pyramid.addEventListener('contextmenu', (e) => e.preventDefault());
    }
    initNavButtons() {
        const buttons = document.querySelectorAll('.pyramid-nav-btn');
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
        this.pyramid?.classList.add('dragging');
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
        this.rotationX = Math.max(-60, Math.min(30, this.rotationX));
        this.updateTransform();
        this.lastX = e.clientX;
        this.lastY = e.clientY;
    }
    onDragEnd() {
        if (!this.isDragging)
            return;
        this.isDragging = false;
        this.pyramid?.classList.remove('dragging');
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
        this.pyramid?.classList.add('dragging');
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
        this.rotationX = Math.max(-60, Math.min(30, this.rotationX));
        this.updateTransform();
        this.lastX = touch.clientX;
        this.lastY = touch.clientY;
    }
    onTouchEnd() {
        if (!this.isDragging)
            return;
        this.isDragging = false;
        this.pyramid?.classList.remove('dragging');
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
                this.rotationX = Math.max(-60, Math.min(30, this.rotationX));
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
        const targetY = this.faceRotations[face];
        let currentNormalized = this.rotationY % 360;
        let diff = targetY - currentNormalized;
        if (diff > 180)
            diff -= 360;
        if (diff < -180)
            diff += 360;
        this.rotationY = this.rotationY + diff;
        this.rotationX = -15;
        this.pyramid?.classList.remove('dragging');
        this.updateTransform();
        this.setActiveFace(face);
    }
    updateTransform() {
        if (!this.pyramid)
            return;
        this.pyramid.style.transform = `rotateX(${this.rotationX}deg) rotateY(${this.rotationY}deg) rotateZ(${this.rotationZ}deg)`;
    }
    setActiveFace(face) {
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
    startAutoRotate() {
        let lastTime = performance.now();
        const speedX = 8;
        const speedY = 25;
        const speedZ = 5;
        const rotate = (time) => {
            if (this.isDragging)
                return;
            const delta = (time - lastTime) / 1000;
            lastTime = time;
            this.rotationY += speedY * delta;
            const t = time * 0.001;
            this.rotationX = -15 + Math.sin(t * 0.5) * 20;
            this.rotationZ = Math.sin(t * 0.3) * 10;
            this.updateTransform();
            this.autoRotateId = requestAnimationFrame(rotate);
        };
        this.autoRotateId = requestAnimationFrame(rotate);
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
