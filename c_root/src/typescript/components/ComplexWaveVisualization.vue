<template>
  <div class="pv-container">
    <!-- Title -->
    <div class="pv-title">
      <h1 class="pv-title-gradient-1">
        The Observer Effect explains why the same
      </h1>
      <h2 class="pv-title-gradient-2">
        life feels different to different people
      </h2>
    </div>

    <!-- Main visualization -->
    <div class="pv-svg-container">
      <svg viewBox="0 0 840 640" preserveAspectRatio="xMidYMid meet">
        <defs>
          <!-- Gradients -->
          <linearGradient id="pv-helixGradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stop-color="#a855f7">
              <animate attributeName="stop-color" values="#a855f7;#ec4899;#06b6d4;#a855f7" dur="4s" repeatCount="indefinite" />
            </stop>
            <stop offset="50%" stop-color="#ec4899">
              <animate attributeName="stop-color" values="#ec4899;#06b6d4;#a855f7;#ec4899" dur="4s" repeatCount="indefinite" />
            </stop>
            <stop offset="100%" stop-color="#06b6d4">
              <animate attributeName="stop-color" values="#06b6d4;#a855f7;#ec4899;#06b6d4" dur="4s" repeatCount="indefinite" />
            </stop>
          </linearGradient>

          <linearGradient id="pv-imGradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stop-color="#06b6d4" />
            <stop offset="100%" stop-color="#22d3d3" />
          </linearGradient>

          <linearGradient id="pv-reGradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stop-color="#f97316" />
            <stop offset="100%" stop-color="#fb923c" />
          </linearGradient>

          <linearGradient id="pv-spiralGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stop-color="#a855f7" />
            <stop offset="100%" stop-color="#6366f1" />
          </linearGradient>

          <linearGradient id="pv-axisGradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stop-color="#64748b" />
            <stop offset="100%" stop-color="#94a3b8" />
          </linearGradient>

          <!-- Glow filters -->
          <filter id="pv-glow-cyan" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
            <feMerge><feMergeNode in="coloredBlur"/><feMergeNode in="SourceGraphic"/></feMerge>
          </filter>

          <filter id="pv-glow-orange" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
            <feMerge><feMergeNode in="coloredBlur"/><feMergeNode in="SourceGraphic"/></feMerge>
          </filter>

          <filter id="pv-glow-purple" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur stdDeviation="4" result="coloredBlur"/>
            <feMerge><feMergeNode in="coloredBlur"/><feMergeNode in="SourceGraphic"/></feMerge>
          </filter>

          <filter id="pv-glow-strong" x="-100%" y="-100%" width="300%" height="300%">
            <feGaussianBlur stdDeviation="6" result="coloredBlur"/>
            <feMerge><feMergeNode in="coloredBlur"/><feMergeNode in="coloredBlur"/><feMergeNode in="SourceGraphic"/></feMerge>
          </filter>
        </defs>

        <!-- BACK WALL (Im-t plane) - CYAN -->
        <line :x1="bwCorners.bl.x" :y1="bwCorners.bl.y" :x2="bwCorners.tl.x" :y2="bwCorners.tl.y" stroke="#0e7490" stroke-width="1" class="pv-shimmer" />
        <line :x1="bwCorners.tl.x" :y1="bwCorners.tl.y" :x2="bwCorners.tr.x" :y2="bwCorners.tr.y" stroke="#0e7490" stroke-width="1" class="pv-shimmer" />
        <line :x1="bwCorners.bl.x" :y1="bwCorners.bl.y" :x2="bwCorners.br.x" :y2="bwCorners.br.y" stroke="#0e7490" stroke-width="1" class="pv-shimmer" />
        <line :x1="bwCorners.tr.x" :y1="bwCorners.tr.y" :x2="bwCorners.br.x" :y2="bwCorners.br.y" stroke="#0e7490" stroke-width="1" class="pv-shimmer" />
        <path :d="backWallPath" fill="none" stroke="url(#pv-imGradient)" stroke-width="2"  />
        <circle :cx="currentBack.x" :cy="currentBack.y" r="4" fill="#06b6d4"  class="pv-point-pulse" />

        <!-- Im formula -->
        <g :transform="`translate(${bwCenter.x}, ${bwCenter.y - 25}) rotate(${bwAngle})`">
          <text fill="#22d3d3" font-size="11" font-family="Times New Roman, serif" text-anchor="middle" style="letter-spacing: -0.5px" >
            <tspan font-weight="bold">Im</tspan><tspan font-style="italic"> f</tspan><tspan>=e</tspan><tspan baseline-shift="super" font-size="7">−γ(t−t₀)²</tspan><tspan font-style="italic">sin(ωt)</tspan>
          </text>
        </g>

        <!-- FLOOR (Re-t plane) - ORANGE -->
        <line :x1="flCorners.bl.x" :y1="flCorners.bl.y" :x2="flCorners.br.x" :y2="flCorners.br.y" stroke="#c2410c" stroke-width="1" class="pv-shimmer" />
        <line :x1="flCorners.bl.x" :y1="flCorners.bl.y" :x2="flCorners.tl.x" :y2="flCorners.tl.y" stroke="#c2410c" stroke-width="1" class="pv-shimmer" />
        <line :x1="flCorners.br.x" :y1="flCorners.br.y" :x2="flCorners.tr.x" :y2="flCorners.tr.y" stroke="#c2410c" stroke-width="1" class="pv-shimmer" />
        <line :x1="flCorners.tl.x" :y1="flCorners.tl.y" :x2="flCorners.tr.x" :y2="flCorners.tr.y" stroke="#c2410c" stroke-width="1" class="pv-shimmer" />
        <path :d="floorWavePath" fill="none" stroke="url(#pv-reGradient)" stroke-width="2"  />
        <circle :cx="currentFloor.x" :cy="currentFloor.y" r="4" fill="#f97316"  class="pv-point-pulse" />

        <!-- Re formula -->
        <g :transform="`translate(${flCenter.x}, ${flCenter.y + 25}) rotate(${flAngle})`">
          <text fill="#fb923c" font-size="11" font-family="Times New Roman, serif" text-anchor="middle" style="letter-spacing: -0.5px" >
            <tspan font-weight="bold">Re</tspan><tspan font-style="italic"> f</tspan><tspan>=e</tspan><tspan baseline-shift="super" font-size="7">−γ(t−t₀)²</tspan><tspan font-style="italic">cos(ωt)</tspan>
          </text>
        </g>

        <!-- LEFT PLANE (Im-Re circular spiral) - PURPLE -->
        <line :x1="lpCorners.bl.x" :y1="lpCorners.bl.y" :x2="lpCorners.tl.x" :y2="lpCorners.tl.y" stroke="#7c3aed" stroke-width="1" class="pv-shimmer" />
        <line :x1="lpCorners.tl.x" :y1="lpCorners.tl.y" :x2="lpCorners.tr.x" :y2="lpCorners.tr.y" stroke="#7c3aed" stroke-width="1" class="pv-shimmer" />
        <line :x1="lpCorners.bl.x" :y1="lpCorners.bl.y" :x2="lpCorners.br.x" :y2="lpCorners.br.y" stroke="#7c3aed" stroke-width="1" class="pv-shimmer" />
        <line :x1="lpCorners.br.x" :y1="lpCorners.br.y" :x2="lpCorners.tr.x" :y2="lpCorners.tr.y" stroke="#7c3aed" stroke-width="1" class="pv-shimmer" />
        <line :x1="lpAxisImBot.x" :y1="lpAxisImBot.y" :x2="lpAxisImTop.x" :y2="lpAxisImTop.y" stroke="#8b5cf6" stroke-width="1" />
        <line :x1="lpAxisReLeft.x" :y1="lpAxisReLeft.y" :x2="lpAxisReRight.x" :y2="lpAxisReRight.y" stroke="#8b5cf6" stroke-width="1" />
        <polygon :points="`${lpAxisImTop.x},${lpAxisImTop.y - 6} ${lpAxisImTop.x - 3},${lpAxisImTop.y + 2} ${lpAxisImTop.x + 3},${lpAxisImTop.y + 2}`" fill="#a855f7" />
        <path :d="leftSpiralPath" fill="none" stroke="url(#pv-spiralGradient)" stroke-width="2"  />
        <circle :cx="currentLeft.x" :cy="currentLeft.y" r="4" fill="#a855f7"  class="pv-point-pulse" />

        <!-- Left plane formula -->
        <g :transform="`translate(${lpCenter.x}, ${lpCenter.y - 20}) rotate(${lpAngle})`">
          <text fill="#c084fc" font-size="10" font-family="Times New Roman, serif" text-anchor="middle" style="letter-spacing: -0.5px" >
            <tspan font-style="italic">f</tspan><tspan>=e</tspan><tspan baseline-shift="super" font-size="7">−γ(t−t₀)²</tspan><tspan font-style="italic">e</tspan><tspan baseline-shift="super" font-size="7">iωt</tspan>
          </text>
        </g>

        <!-- MAIN 3D HELIX - RAINBOW -->
        <path :d="helix3DPath" fill="none" stroke="url(#pv-helixGradient)" stroke-width="4"  />

        <!-- PROJECTION LINES -->
        <line :x1="currentHelix.x" :y1="currentHelix.y" :x2="currentBack.x" :y2="currentBack.y" stroke="#06b6d4" stroke-width="1" stroke-dasharray="6,4" class="pv-dash-flow" opacity="0.7" />
        <line :x1="currentHelix.x" :y1="currentHelix.y" :x2="currentFloor.x" :y2="currentFloor.y" stroke="#f97316" stroke-width="1" stroke-dasharray="6,4" class="pv-dash-flow" opacity="0.7" />

        <!-- MAIN AXES -->
        <line :x1="axisTStart.x" :y1="axisTStart.y" :x2="axisTEnd.x" :y2="axisTEnd.y" stroke="url(#pv-axisGradient)" stroke-width="2" />
        <polygon :points="`${axisTEnd.x - 6},${axisTEnd.y + 6} ${axisTEnd.x + 6},${axisTEnd.y - 2} ${axisTEnd.x + 2},${axisTEnd.y + 10}`" fill="#94a3b8" />

        <line :x1="axisOrigin.x" :y1="axisOrigin.y + 8" :x2="axisImTop.x" :y2="axisImTop.y" stroke="url(#pv-axisGradient)" stroke-width="2" />
        <polygon :points="`${axisImTop.x},${axisImTop.y - 8} ${axisImTop.x - 4},${axisImTop.y + 2} ${axisImTop.x + 4},${axisImTop.y + 2}`" fill="#94a3b8" />

        <line :x1="axisOrigin.x - 8" :y1="axisOrigin.y - 5" :x2="axisReEnd.x" :y2="axisReEnd.y" stroke="url(#pv-axisGradient)" stroke-width="2" />
        <polygon :points="`${axisReEnd.x + 8},${axisReEnd.y + 4} ${axisReEnd.x - 2},${axisReEnd.y - 4} ${axisReEnd.x - 4},${axisReEnd.y + 6}`" fill="#94a3b8" />

        <!-- Main helix formula -->
        <g :transform="`translate(${helixCenter.x + 30}, ${helixCenter.y - 70}) rotate(${bwAngle})`">
          <text fill="#e879f9" font-size="10" font-family="Times New Roman, serif" text-anchor="middle" style="letter-spacing: -0.5px" >
            <tspan font-style="italic">f(t)</tspan><tspan>=Re+</tspan><tspan font-style="italic">i</tspan><tspan>·Im</tspan>
          </text>
        </g>

        <!-- CURRENT POINT ON HELIX -->
        <circle :cx="currentHelix.x" :cy="currentHelix.y" r="10" fill="url(#pv-helixGradient)" opacity="0.3" class="pv-point-pulse" />
        <circle :cx="currentHelix.x" :cy="currentHelix.y" r="6" fill="#fff"  />
        <circle :cx="currentHelix.x" :cy="currentHelix.y" r="3" fill="url(#pv-helixGradient)" />

        <!-- LABELS -->
        <text :x="axisImTop.x - 30" :y="axisImTop.y + 8" fill="#22d3d3" font-size="18" font-weight="bold" font-family="serif" >Im</text>
        <text :x="axisReEnd.x + 10" :y="axisReEnd.y + 6" fill="#fb923c" font-size="18" font-weight="bold" font-family="serif" >Re</text>
        <text :x="axisTEnd.x - 3" :y="axisTEnd.y + 22" fill="#c084fc" font-size="18" font-style="italic" font-family="serif" >t</text>
        <text :x="axisOrigin.x + 5" :y="axisOrigin.y + 20" fill="#94a3b8" font-size="13" font-style="italic" font-family="serif">t₀</text>
      </svg>
    </div>

    <!-- Bottom section - f(t) value -->
    <div class="pv-values">
      <div class="pv-values-main">
        <span class="pv-values-text">
          <span class="pv-values-f">f</span>
          <span class="pv-values-punctuation">(</span>
          <span class="pv-values-t">t</span>
          <span class="pv-values-punctuation">) = </span>
          <span class="pv-values-real">{{ realPart >= 0 ? '+' : '' }}{{ realPart.toFixed(2) }}</span>
          <span class="pv-values-punctuation"> + </span>
          <span class="pv-values-imag">{{ imagPart.toFixed(2) }}</span>
          <span class="pv-values-i"> i</span>
        </span>
      </div>

      <div class="pv-values-time">
        <span class="pv-values-time-text">
          <span class="pv-values-time-t">t</span>
          <span class="pv-values-time-punctuation"> = </span>
          <span class="pv-values-time-value">{{ (time / T).toFixed(2) }}</span>
          <span class="pv-values-time-punctuation"> </span>
          <span class="pv-values-time-period">T</span>
        </span>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, onMounted, onUnmounted } from 'vue';

// Types
interface Point2D {
  x: number;
  y: number;
}

interface Corners {
  tl: Point2D;
  tr: Point2D;
  bl: Point2D;
  br: Point2D;
}

interface WavePoint {
  t: number;
  re: number;
  im: number;
}

// State
const time = ref<number>(1.25);
const isPlaying = ref<boolean>(true);
let animationId: number | null = null;

// Constants
const omega: number = 2 * Math.PI * 1.6;
const gamma: number = 1.0;
const t0: number = 1.3;
const T: number = 1;

// Offsets
const backWallRe: number = -2.8;
const floorIm: number = -2.8;
const leftPlaneT: number = -1.2;
const leftPlaneSize: number = 1.3;
const bwHeight: number = 1.3;
const floorWidth: number = 1.3;

// Helper functions
const envelope = (t: number): number => Math.exp(-gamma * Math.pow(t - t0, 2));

const project3D = (t: number, re: number, im: number): Point2D => {
  const scale = 61;
  const centerX = 436;
  const centerY = 355;
  const tx = -t * 81 * 0.7;
  const ty = t * 81 * 0.35;
  const rx = re * scale * 0.9;
  const ry = re * scale * 0.25;
  const iy = -im * scale;
  return {
    x: centerX + tx + rx,
    y: centerY + ty + ry + iy
  };
};

// Computed values
const realPart = computed<number>(() => envelope(time.value) * Math.cos(omega * time.value));
const imagPart = computed<number>(() => envelope(time.value) * Math.sin(omega * time.value));

const points = computed<WavePoint[]>(() => {
  const pts: WavePoint[] = [];
  for (let t = 0; t <= 2.5; t += 0.015) {
    const env = envelope(t);
    pts.push({ t, re: env * Math.cos(omega * t), im: env * Math.sin(omega * t) });
  }
  return pts;
});

// Paths
const helix3DPath = computed<string>(() => points.value.map((p, i) => {
  const proj = project3D(p.t, p.re, p.im);
  return `${i === 0 ? 'M' : 'L'} ${proj.x} ${proj.y}`;
}).join(' '));

const leftSpiralPath = computed<string>(() => points.value.map((p, i) => {
  const proj = project3D(leftPlaneT, p.re, p.im);
  return `${i === 0 ? 'M' : 'L'} ${proj.x} ${proj.y}`;
}).join(' '));

const backWallPath = computed<string>(() => points.value.map((p, i) => {
  const proj = project3D(p.t, backWallRe, p.im);
  return `${i === 0 ? 'M' : 'L'} ${proj.x} ${proj.y}`;
}).join(' '));

const floorWavePath = computed<string>(() => points.value.map((p, i) => {
  const proj = project3D(p.t, p.re, floorIm);
  return `${i === 0 ? 'M' : 'L'} ${proj.x} ${proj.y}`;
}).join(' '));

// Corners
const lpCorners = computed<Corners>(() => ({
  tl: project3D(leftPlaneT, -leftPlaneSize, leftPlaneSize),
  tr: project3D(leftPlaneT, leftPlaneSize, leftPlaneSize),
  bl: project3D(leftPlaneT, -leftPlaneSize, -leftPlaneSize),
  br: project3D(leftPlaneT, leftPlaneSize, -leftPlaneSize),
}));

const lpAxisImTop = computed<Point2D>(() => project3D(leftPlaneT, 0, 1.4));
const lpAxisImBot = computed<Point2D>(() => project3D(leftPlaneT, 0, -0.3));
const lpAxisReLeft = computed<Point2D>(() => project3D(leftPlaneT, -0.3, 0));
const lpAxisReRight = computed<Point2D>(() => project3D(leftPlaneT, 1.0, 0));

const bwCorners = computed<Corners>(() => ({
  tl: project3D(0, backWallRe, bwHeight),
  tr: project3D(2.5, backWallRe, bwHeight),
  bl: project3D(0, backWallRe, -bwHeight),
  br: project3D(2.5, backWallRe, -bwHeight),
}));

const flCorners = computed<Corners>(() => ({
  bl: project3D(0, -floorWidth, floorIm),
  br: project3D(0, floorWidth, floorIm),
  tl: project3D(2.5, -floorWidth, floorIm),
  tr: project3D(2.5, floorWidth, floorIm),
}));

// Axes
const axisOrigin = computed<Point2D>(() => project3D(t0, 0, 0));
const axisImTop = computed<Point2D>(() => project3D(t0, 0, 1.6));
const axisReEnd = computed<Point2D>(() => project3D(t0, 1.5, 0));
const axisTStart = computed<Point2D>(() => project3D(0, 0, 0));
const axisTEnd = computed<Point2D>(() => project3D(2.7, 0, 0));

// Current points
const currentHelix = computed<Point2D>(() => project3D(time.value, realPart.value, imagPart.value));
const currentLeft = computed<Point2D>(() => project3D(leftPlaneT, realPart.value, imagPart.value));
const currentBack = computed<Point2D>(() => project3D(time.value, backWallRe, imagPart.value));
const currentFloor = computed<Point2D>(() => project3D(time.value, realPart.value, floorIm));

// Angles and centers
const bwAngle = computed<number>(() => Math.atan2(
  bwCorners.value.tl.y - bwCorners.value.tr.y,
  bwCorners.value.tl.x - bwCorners.value.tr.x
) * (180 / Math.PI));

const bwCenter = computed<Point2D>(() => ({
  x: (bwCorners.value.tl.x + bwCorners.value.tr.x) / 2,
  y: (bwCorners.value.tl.y + bwCorners.value.tr.y) / 2
}));

const flAngle = computed<number>(() => Math.atan2(
  flCorners.value.bl.y - flCorners.value.tl.y,
  flCorners.value.bl.x - flCorners.value.tl.x
) * (180 / Math.PI));

const flCenter = computed<Point2D>(() => ({
  x: (flCorners.value.br.x + flCorners.value.tr.x) / 2,
  y: (flCorners.value.br.y + flCorners.value.tr.y) / 2
}));

const lpAngle = computed<number>(() => Math.atan2(
  lpCorners.value.tl.y - lpCorners.value.tr.y,
  lpCorners.value.tl.x - lpCorners.value.tr.x
) * (180 / Math.PI));

const lpCenter = computed<Point2D>(() => ({
  x: (lpCorners.value.tl.x + lpCorners.value.tr.x) / 2,
  y: (lpCorners.value.tl.y + lpCorners.value.tr.y) / 2
}));

const helixCenter = computed<Point2D>(() => ({
  x: (axisTStart.value.x + axisTEnd.value.x) / 2,
  y: (axisTStart.value.y + axisTEnd.value.y) / 2
}));

// Animation - throttled for performance
let frameCount = 0;
const animate = (): void => {
  frameCount++;
  // Only update every 2nd frame (30fps instead of 60fps)
  if (isPlaying.value && frameCount % 2 === 0) {
    time.value += 0.02;
    if (time.value > 2.5) time.value = 0;
  }
  animationId = requestAnimationFrame(animate);
};

onMounted(() => {
  animationId = requestAnimationFrame(animate);
});

onUnmounted(() => {
  if (animationId) cancelAnimationFrame(animationId);
});
</script>

<style scoped lang="scss">
@keyframes pv-shimmer {
  0%, 100% { opacity: 0.6; }
  50% { opacity: 1; }
}

@keyframes pv-glow-pulse {
  0%, 100% { filter: drop-shadow(0 0 3px currentColor); }
  50% { filter: drop-shadow(0 0 12px currentColor); }
}

@keyframes pv-dash-flow {
  0% { stroke-dashoffset: 0; }
  100% { stroke-dashoffset: -20; }
}

@keyframes pv-point-pulse {
  0%, 100% { r: 6; opacity: 1; }
  50% { r: 9; opacity: 0.8; }
}

.pv-shimmer {
  animation: pv-shimmer 2s ease-in-out infinite;
}

.pv-glow-pulse {
  animation: pv-glow-pulse 1.5s ease-in-out infinite;
}

.pv-dash-flow {
  animation: pv-dash-flow 1s linear infinite;
}

.pv-point-pulse {
  animation: pv-point-pulse 0.8s ease-in-out infinite;
}

.pv-container {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 10px;
  overflow: hidden;
  background: transparent;
}

.pv-title {
  text-align: center;
  margin-bottom: 16px;
  padding: 0 16px;
  width: 100%;
  max-width: 840px;

  h1, h2 {
    font-size: clamp(1.4rem, 4.5vw, 1.8rem);
    font-weight: bold;
    line-height: 1.3;
    margin: 0;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
}

.pv-title-gradient-1 {
  background: linear-gradient(to right, #a855f7, #ec4899, #22d3ee);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.pv-title-gradient-2 {
  background: linear-gradient(to right, #22d3ee, #a855f7, #ec4899);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.pv-svg-container {
  position: relative;
  width: 100%;
  max-width: 840px;
  height: auto;
  aspect-ratio: 840 / 640;
  flex-shrink: 1;

  svg {
    width: 100%;
    height: 100%;
  }
}

.pv-values {
  margin-top: 16px;
  width: 100%;
  max-width: 580px;
  text-align: center;
  padding: 0 16px;
}

.pv-values-main {
  text-align: center;
  margin-bottom: 20px;
}

.pv-values-text {
  font-size: 2rem;
  font-family: 'Times New Roman', serif;
}

.pv-values-f {
  color: #a855f7;
  font-style: italic;
}

.pv-values-punctuation {
  color: #d1d5db;
}

.pv-values-t {
  color: #a855f7;
  font-style: italic;
}

.pv-values-real {
  color: #fb923c;
}

.pv-values-imag {
  color: #22d3d3;
}

.pv-values-i {
  color: #22d3d3;
  font-style: italic;
}

.pv-values-time {
  text-align: center;
}

.pv-values-time-text {
  font-size: 1.8rem;
  font-family: 'Times New Roman', serif;
}

.pv-values-time-t {
  color: #a855f7;
  font-style: italic;
}

.pv-values-time-punctuation {
  color: #9ca3af;
}

.pv-values-time-value {
  color: #d1d5db;
}

.pv-values-time-period {
  color: #a855f7;
  font-style: italic;
}
</style>
