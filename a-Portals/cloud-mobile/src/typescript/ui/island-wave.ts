// src/typescript/island-wave.ts — canvas port of the real app's
// IslandWaveView (ui/IslandWaveView.kt): 4 layered sine-composite waveform
// channels drawn into the dynamic-island pill. Every constant below
// (colors, frequencies, harmonics, phase speeds, amplitudes, amplitude-
// modulation params, baseline fractions, cycle duration) is copied
// directly from that source, not approximated.

interface Wave {
  color: string;
  baseFreq: number;
  h2: number;
  h3: number;
  phaseSpeed: number;
  baseAmp: number;
  ampModFreq: number;
  ampModPhase: number;
  baselineYFrac: number;
}

// Order matters — index 0 paints first (back), index 3 paints last
// (front), matching the real onDraw() loop.
const WAVES: Wave[] = [
  { color: 'rgba(182,158,249,0.6)', baseFreq: 1.6, h2: 2.7, h3: 3.5, phaseSpeed: 1.1, baseAmp: 0.85, ampModFreq: 0.45, ampModPhase: 0.0, baselineYFrac: 0.88 },
  { color: 'rgba(202,189,251,0.702)', baseFreq: 1.9, h2: 2.4, h3: 4.1, phaseSpeed: 1.5, baseAmp: 0.70, ampModFreq: 0.60, ampModPhase: 1.3, baselineYFrac: 0.82 },
  { color: 'rgba(221,214,243,0.8)', baseFreq: 2.3, h2: 3.1, h3: 4.7, phaseSpeed: 0.9, baseAmp: 0.55, ampModFreq: 0.32, ampModPhase: 2.5, baselineYFrac: 0.76 },
  { color: 'rgba(237,233,254,0.902)', baseFreq: 2.8, h2: 3.6, h3: 5.2, phaseSpeed: 1.8, baseAmp: 0.40, ampModFreq: 0.78, ampModPhase: 0.7, baselineYFrac: 0.70 },
];

const TWO_PI = Math.PI * 2;
// Real ValueAnimator: 0 -> 1000 over 358_800ms, linear, repeat infinite.
// sin() is periodic, so there's no need to wrap `time` back to 0 — it can
// just grow unbounded at the same rate.
const TIME_MS_PER_UNIT = 358.8;

export function initIslandWave(): void {
  const el = document.getElementById('island-wave');
  if (!(el instanceof HTMLCanvasElement)) return;
  // Non-nullable alias so the nested resize()/draw()/tick() closures below
  // see HTMLCanvasElement directly — narrowing from the guard above doesn't
  // cross into nested function declarations (same pattern as stars.ts's
  // menuEl / fan-menu.ts's fanMenuEl hoists).
  const canvas: HTMLCanvasElement = el;
  const ctx2d = canvas.getContext('2d');
  if (!ctx2d) return;
  const ctx: CanvasRenderingContext2D = ctx2d;

  let width = 0;
  let height = 0;

  function resize(): void {
    const rect = canvas.getBoundingClientRect();
    const dpr = window.devicePixelRatio || 1;
    width = rect.width;
    height = rect.height;
    canvas.width = Math.max(1, Math.round(width * dpr));
    canvas.height = Math.max(1, Math.round(height * dpr));
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
  }
  resize();
  window.addEventListener('resize', resize);

  function draw(time: number): void {
    if (width === 0 || height === 0) return;
    ctx.clearRect(0, 0, width, height);

    const step = Math.max(1, width / 90);

    for (const wave of WAVES) {
      const baseline = height * wave.baselineYFrac;
      const modAngle = time * wave.ampModFreq + wave.ampModPhase;
      const ampMod = 0.35 + 0.65 * (0.5 + 0.5 * Math.sin(modAngle));
      const amp = wave.baseAmp * ampMod * (height * 0.45);

      ctx.fillStyle = wave.color;
      ctx.beginPath();

      let x = 0;
      let first = true;
      while (x <= width) {
        const t = x / width;
        const a1 = t * wave.baseFreq * TWO_PI + time * wave.phaseSpeed;
        const a2 = t * wave.baseFreq * wave.h2 * TWO_PI + time * wave.phaseSpeed * 1.3;
        const a3 = t * wave.baseFreq * wave.h3 * TWO_PI + time * wave.phaseSpeed * 0.8;
        const composite = Math.sin(a1) * 0.55 + Math.sin(a2) * 0.30 + Math.sin(a3) * 0.15;
        const y = baseline + composite * amp;
        if (first) {
          ctx.moveTo(x, y);
          first = false;
        } else {
          ctx.lineTo(x, y);
        }
        x += step;
      }
      ctx.lineTo(width, height);
      ctx.lineTo(0, height);
      ctx.closePath();
      ctx.fill();
    }
  }

  let rafId = 0;
  function tick(nowMs: number): void {
    draw(nowMs / TIME_MS_PER_UNIT);
    rafId = window.requestAnimationFrame(tick);
  }
  rafId = window.requestAnimationFrame(tick);

  // Respect the OS-level reduced-motion preference — freeze on a single
  // static frame instead of animating forever, same intent as the real
  // app's Configs -> Launcher -> "Island animation" off switch.
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    window.cancelAnimationFrame(rafId);
    draw(0);
  }
}
