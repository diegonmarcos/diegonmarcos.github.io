<script lang="ts">
  import { onMount } from 'svelte';

  let canvas: HTMLCanvasElement;
  let animationId: number;

  interface Star {
    x: number;
    y: number;
    size: number;
    speed: number;
    brightness: number;
    twinkle: number;
  }

  onMount(() => {
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let stars: Star[] = [];
    let mouseX = 0;
    let mouseY = 0;

    function resize() {
      // Use parent container size or fallback to 1200x800 minimum
      const parent = canvas.parentElement;
      const designWidth = 1200;
      canvas.width = Math.max(parent?.clientWidth || window.innerWidth, designWidth);
      canvas.height = Math.max(parent?.clientHeight || window.innerHeight, 800);
      initStars();
    }

    function initStars() {
      stars = [];
      const count = Math.floor((canvas.width * canvas.height) / 3000);
      for (let i = 0; i < count; i++) {
        stars.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          size: Math.random() * 1.5 + 0.5,
          speed: Math.random() * 0.3 + 0.1,
          brightness: Math.random() * 0.5 + 0.5,
          twinkle: Math.random() * Math.PI * 2
        });
      }
    }

    function render() {
      ctx.fillStyle = '#000508';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Parallax offset
      const offsetX = (mouseX - canvas.width / 2) * 0.02;
      const offsetY = (mouseY - canvas.height / 2) * 0.02;

      stars.forEach(star => {
        star.twinkle += 0.02;
        const alpha = star.brightness * (0.6 + 0.4 * Math.sin(star.twinkle));

        const x = star.x + offsetX * star.speed;
        const y = star.y + offsetY * star.speed;

        // Subtle glow
        const gradient = ctx.createRadialGradient(x, y, 0, x, y, star.size * 3);
        gradient.addColorStop(0, `rgba(100, 200, 150, ${alpha * 0.3})`);
        gradient.addColorStop(1, 'transparent');
        ctx.fillStyle = gradient;
        ctx.fillRect(x - star.size * 3, y - star.size * 3, star.size * 6, star.size * 6);

        // Star core
        ctx.beginPath();
        ctx.arc(x, y, star.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(200, 255, 220, ${alpha})`;
        ctx.fill();
      });

      animationId = requestAnimationFrame(render);
    }

    function handleMouseMove(e: MouseEvent) {
      mouseX = e.clientX;
      mouseY = e.clientY;
    }

    resize();
    window.addEventListener('resize', resize);
    window.addEventListener('mousemove', handleMouseMove);
    render();

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener('resize', resize);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  });
</script>

<canvas bind:this={canvas} class="starfield-bg"></canvas>

<style>
  .starfield-bg {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: -1;
    pointer-events: none;
  }
</style>
