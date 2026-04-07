<script lang="ts">
	import { onMount } from 'svelte';

	let canvas: HTMLCanvasElement;
	let ctx: CanvasRenderingContext2D | null;
	let particles: Particle[] = [];
	let animationId: number;

	class Particle {
		x: number;
		y: number;
		size: number;
		speedX: number;
		speedY: number;
		color: string;
		opacity: number;
		fadeSpeed: number;

		constructor(canvasWidth: number, canvasHeight: number) {
			this.x = Math.random() * canvasWidth;
			this.y = Math.random() * canvasHeight;
			this.size = Math.random() * 3 + 1;
			this.speedX = (Math.random() - 0.5) * 0.5;
			this.speedY = (Math.random() - 0.5) * 0.5;

			const colors = ['#a855f7', '#ec4899', '#22d3ee', '#facc15'];
			this.color = colors[Math.floor(Math.random() * colors.length)];
			this.opacity = Math.random() * 0.5 + 0.3;
			this.fadeSpeed = Math.random() * 0.005 + 0.002;
		}

		update() {
			this.x += this.speedX;
			this.y += this.speedY;

			// Fade in and out
			this.opacity += this.fadeSpeed;
			if (this.opacity >= 0.8 || this.opacity <= 0.2) {
				this.fadeSpeed = -this.fadeSpeed;
			}

			// Wrap around screen
			if (this.x > canvas.width) this.x = 0;
			if (this.x < 0) this.x = canvas.width;
			if (this.y > canvas.height) this.y = 0;
			if (this.y < 0) this.y = canvas.height;
		}

		draw() {
			if (!ctx) return;
			ctx.fillStyle = this.color;
			ctx.globalAlpha = this.opacity;

			// Draw pixel-perfect squares
			ctx.fillRect(
				Math.floor(this.x),
				Math.floor(this.y),
				Math.floor(this.size),
				Math.floor(this.size)
			);
			ctx.globalAlpha = 1;
		}
	}

	function initParticles() {
		particles = [];
		const particleCount = Math.min(Math.floor((canvas.width * canvas.height) / 10000), 100);

		for (let i = 0; i < particleCount; i++) {
			particles.push(new Particle(canvas.width, canvas.height));
		}
	}

	function animate() {
		if (!ctx) return;

		ctx.clearRect(0, 0, canvas.width, canvas.height);

		particles.forEach((particle) => {
			particle.update();
			particle.draw();
		});

		animationId = requestAnimationFrame(animate);
	}

	function resize() {
		canvas.width = window.innerWidth;
		canvas.height = window.innerHeight;
		initParticles();
	}

	onMount(() => {
		ctx = canvas.getContext('2d');
		if (!ctx) return;

		ctx.imageSmoothingEnabled = false;
		resize();

		window.addEventListener('resize', resize);
		animate();

		return () => {
			window.removeEventListener('resize', resize);
			cancelAnimationFrame(animationId);
		};
	});
</script>

<canvas bind:this={canvas} class="pixel-particles"></canvas>

<style lang="scss">
	.pixel-particles {
		position: fixed;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		pointer-events: none;
		z-index: 1;
		image-rendering: pixelated;
		image-rendering: -moz-crisp-edges;
		image-rendering: crisp-edges;
	}
</style>
