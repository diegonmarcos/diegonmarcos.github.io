// ==========================================================================
// Particles Module - Linktree Mindmap
// ==========================================================================

import type { Particle } from '../types';
import { config, colors } from '../config';
import { random } from '../utils/math';
import { withAlpha } from '../utils/color';

// -----------------------------------------------------------------------------
// Particle System
// -----------------------------------------------------------------------------

let particles: Particle[] = [];
let canvas: HTMLCanvasElement | null = null;
let ctx: CanvasRenderingContext2D | null = null;

export function initParticles(canvasElement: HTMLCanvasElement): void {
  canvas = canvasElement;
  ctx = canvas.getContext('2d');

  if (!ctx) {
    console.error('Failed to get 2D context for particle canvas');
    return;
  }

  resizeCanvas();
  createParticles();

  window.addEventListener('resize', resizeCanvas);
}

function resizeCanvas(): void {
  if (!canvas) return;
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
}

function createParticles(): void {
  particles = [];
  const count = config.visual.particleCount;

  for (let i = 0; i < count; i++) {
    particles.push(createParticle());
  }
}

function createParticle(): Particle {
  const w = canvas?.width || window.innerWidth;
  const h = canvas?.height || window.innerHeight;

  return {
    x: random(0, w),
    y: random(0, h),
    vx: random(-0.2, 0.2),
    vy: random(-0.2, 0.2),
    radius: random(0.5, 2),
    opacity: random(0.2, 0.6),
    twinklePhase: random(0, Math.PI * 2),
    twinkleSpeed: random(0.01, 0.03),
  };
}

// -----------------------------------------------------------------------------
// Update & Render
// -----------------------------------------------------------------------------

export function updateParticles(deltaTime: number): void {
  const w = canvas?.width || window.innerWidth;
  const h = canvas?.height || window.innerHeight;

  particles.forEach((p) => {
    // Update position
    p.x += p.vx * deltaTime * 0.05;
    p.y += p.vy * deltaTime * 0.05;

    // Wrap around edges
    if (p.x < 0) p.x = w;
    if (p.x > w) p.x = 0;
    if (p.y < 0) p.y = h;
    if (p.y > h) p.y = 0;

    // Update twinkle
    p.twinklePhase += p.twinkleSpeed * deltaTime * 0.1;
  });
}

export function renderParticles(): void {
  if (!ctx || !canvas) return;

  // Clear with gradient background
  const gradient = ctx.createRadialGradient(
    canvas.width / 2,
    canvas.height / 2,
    0,
    canvas.width / 2,
    canvas.height / 2,
    Math.max(canvas.width, canvas.height) * 0.7
  );
  gradient.addColorStop(0, colors.voidBgLight);
  gradient.addColorStop(1, colors.voidBg);

  ctx.fillStyle = gradient;
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  // Draw particles
  particles.forEach((p) => {
    const twinkle = 0.5 + 0.5 * Math.sin(p.twinklePhase);
    const alpha = p.opacity * twinkle;

    ctx!.beginPath();
    ctx!.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
    ctx!.fillStyle = withAlpha('#ffffff', alpha);
    ctx!.fill();

    // Add glow for larger particles
    if (p.radius > 1.2) {
      const glowGradient = ctx!.createRadialGradient(p.x, p.y, 0, p.x, p.y, p.radius * 4);
      glowGradient.addColorStop(0, withAlpha('#ffffff', alpha * 0.3));
      glowGradient.addColorStop(1, 'transparent');
      ctx!.fillStyle = glowGradient;
      ctx!.beginPath();
      ctx!.arc(p.x, p.y, p.radius * 4, 0, Math.PI * 2);
      ctx!.fill();
    }
  });
}

// -----------------------------------------------------------------------------
// Cleanup
// -----------------------------------------------------------------------------

export function destroyParticles(): void {
  particles = [];
  window.removeEventListener('resize', resizeCanvas);
}
