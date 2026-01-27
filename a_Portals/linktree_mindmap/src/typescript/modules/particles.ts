// ==========================================================================
// Particles Module - WebGL GPU-Accelerated Particle System
// ==========================================================================

import { config, colors } from '../config';
import { random } from '../utils/math';

// -----------------------------------------------------------------------------
// WebGL Particle System
// -----------------------------------------------------------------------------

let canvas: HTMLCanvasElement | null = null;
let gl: WebGL2RenderingContext | null = null;
let program: WebGLProgram | null = null;
let particleBuffer: WebGLBuffer | null = null;
let particles: Float32Array;
let particleCount: number;

// Uniforms
let uTime: WebGLUniformLocation | null = null;
let uResolution: WebGLUniformLocation | null = null;

// Vertex shader - handles position and size
const vertexShaderSource = `#version 300 es
precision highp float;

// Per-particle attributes: x, y, vx, vy, radius, opacity, twinklePhase, twinkleSpeed
layout(location = 0) in vec2 aPosition;
layout(location = 1) in vec2 aVelocity;
layout(location = 2) in float aRadius;
layout(location = 3) in float aOpacity;
layout(location = 4) in float aTwinklePhase;
layout(location = 5) in float aTwinkleSpeed;

uniform float uTime;
uniform vec2 uResolution;

out float vOpacity;
out float vRadius;

void main() {
  // Calculate twinkle
  float twinkle = 0.5 + 0.5 * sin(aTwinklePhase + uTime * aTwinkleSpeed * 0.001);
  vOpacity = aOpacity * twinkle;
  vRadius = aRadius;

  // Convert to clip space (-1 to 1)
  vec2 pos = (aPosition / uResolution) * 2.0 - 1.0;
  pos.y = -pos.y; // Flip Y

  gl_Position = vec4(pos, 0.0, 1.0);
  gl_PointSize = aRadius * 4.0; // Larger for glow effect
}
`;

// Fragment shader - draws glowing particles
const fragmentShaderSource = `#version 300 es
precision highp float;

in float vOpacity;
in float vRadius;

out vec4 fragColor;

void main() {
  // Distance from center of point
  vec2 coord = gl_PointCoord - vec2(0.5);
  float dist = length(coord) * 2.0;

  // Core particle
  float core = 1.0 - smoothstep(0.0, 0.3, dist);

  // Glow effect
  float glow = 1.0 - smoothstep(0.0, 1.0, dist);
  glow = pow(glow, 2.0);

  // Combine
  float alpha = (core * 0.8 + glow * 0.4) * vOpacity;

  // White color with alpha
  fragColor = vec4(1.0, 1.0, 1.0, alpha);
}
`;

// Background shader - radial gradient
const bgVertexShader = `#version 300 es
precision highp float;
layout(location = 0) in vec2 aPosition;
out vec2 vUv;
void main() {
  vUv = aPosition * 0.5 + 0.5;
  gl_Position = vec4(aPosition, 0.0, 1.0);
}
`;

const bgFragmentShader = `#version 300 es
precision highp float;
in vec2 vUv;
uniform vec3 uBgColorInner;
uniform vec3 uBgColorOuter;
out vec4 fragColor;
void main() {
  vec2 center = vec2(0.5, 0.5);
  float dist = distance(vUv, center) * 1.4;
  vec3 color = mix(uBgColorInner, uBgColorOuter, dist);
  fragColor = vec4(color, 1.0);
}
`;

let bgProgram: WebGLProgram | null = null;
let bgBuffer: WebGLBuffer | null = null;
let bgUColorInner: WebGLUniformLocation | null = null;
let bgUColorOuter: WebGLUniformLocation | null = null;

function hexToRgb(hex: string): [number, number, number] {
  const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  if (result) {
    return [
      parseInt(result[1], 16) / 255,
      parseInt(result[2], 16) / 255,
      parseInt(result[3], 16) / 255
    ];
  }
  return [0, 0, 0];
}

function createShader(gl: WebGL2RenderingContext, type: number, source: string): WebGLShader | null {
  const shader = gl.createShader(type);
  if (!shader) return null;

  gl.shaderSource(shader, source);
  gl.compileShader(shader);

  if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) {
    console.error('Shader compile error:', gl.getShaderInfoLog(shader));
    gl.deleteShader(shader);
    return null;
  }

  return shader;
}

function createProgram(gl: WebGL2RenderingContext, vsSource: string, fsSource: string): WebGLProgram | null {
  const vs = createShader(gl, gl.VERTEX_SHADER, vsSource);
  const fs = createShader(gl, gl.FRAGMENT_SHADER, fsSource);

  if (!vs || !fs) return null;

  const program = gl.createProgram();
  if (!program) return null;

  gl.attachShader(program, vs);
  gl.attachShader(program, fs);
  gl.linkProgram(program);

  if (!gl.getProgramParameter(program, gl.LINK_STATUS)) {
    console.error('Program link error:', gl.getProgramInfoLog(program));
    gl.deleteProgram(program);
    return null;
  }

  // Clean up shaders
  gl.deleteShader(vs);
  gl.deleteShader(fs);

  return program;
}

export function initParticles(canvasElement: HTMLCanvasElement): void {
  canvas = canvasElement;

  // Try WebGL2, fall back to Canvas 2D if not available
  gl = canvas.getContext('webgl2', {
    alpha: true,
    premultipliedAlpha: false,
    antialias: true
  });

  if (!gl) {
    console.warn('WebGL2 not available, particles disabled');
    return;
  }

  // Create particle program
  program = createProgram(gl, vertexShaderSource, fragmentShaderSource);
  if (!program) {
    console.error('Failed to create particle program');
    return;
  }

  // Create background program
  bgProgram = createProgram(gl, bgVertexShader, bgFragmentShader);
  if (!bgProgram) {
    console.error('Failed to create background program');
    return;
  }

  // Get uniform locations
  uTime = gl.getUniformLocation(program, 'uTime');
  uResolution = gl.getUniformLocation(program, 'uResolution');

  bgUColorInner = gl.getUniformLocation(bgProgram, 'uBgColorInner');
  bgUColorOuter = gl.getUniformLocation(bgProgram, 'uBgColorOuter');

  // Create background quad buffer
  bgBuffer = gl.createBuffer();
  gl.bindBuffer(gl.ARRAY_BUFFER, bgBuffer);
  gl.bufferData(gl.ARRAY_BUFFER, new Float32Array([
    -1, -1, 1, -1, -1, 1,
    -1, 1, 1, -1, 1, 1
  ]), gl.STATIC_DRAW);

  // Initialize particles
  particleCount = config.visual.particleCount;
  particles = new Float32Array(particleCount * 8); // 8 floats per particle

  resizeCanvas();
  createParticles();

  // Create particle buffer
  particleBuffer = gl.createBuffer();
  gl.bindBuffer(gl.ARRAY_BUFFER, particleBuffer);
  gl.bufferData(gl.ARRAY_BUFFER, particles, gl.DYNAMIC_DRAW);

  // Enable blending
  gl.enable(gl.BLEND);
  gl.blendFunc(gl.SRC_ALPHA, gl.ONE_MINUS_SRC_ALPHA);

  window.addEventListener('resize', resizeCanvas);
}

function resizeCanvas(): void {
  if (!canvas || !gl) return;

  const dpr = Math.min(window.devicePixelRatio, 2);
  canvas.width = window.innerWidth * dpr;
  canvas.height = window.innerHeight * dpr;
  canvas.style.width = window.innerWidth + 'px';
  canvas.style.height = window.innerHeight + 'px';

  gl.viewport(0, 0, canvas.width, canvas.height);
}

function createParticles(): void {
  if (!canvas) return;

  const w = canvas.width;
  const h = canvas.height;

  for (let i = 0; i < particleCount; i++) {
    const idx = i * 8;
    particles[idx + 0] = random(0, w);     // x
    particles[idx + 1] = random(0, h);     // y
    particles[idx + 2] = random(-0.2, 0.2); // vx
    particles[idx + 3] = random(-0.2, 0.2); // vy
    particles[idx + 4] = random(0.5, 2.5);  // radius
    particles[idx + 5] = random(0.2, 0.7);  // opacity
    particles[idx + 6] = random(0, Math.PI * 2); // twinklePhase
    particles[idx + 7] = random(0.5, 2.0);  // twinkleSpeed
  }
}

// -----------------------------------------------------------------------------
// Update & Render
// -----------------------------------------------------------------------------

let time = 0;

export function updateParticles(deltaTime: number): void {
  if (!canvas || !gl) return;

  const w = canvas.width;
  const h = canvas.height;
  const dt = deltaTime * 0.05;

  // Update particle positions on CPU (could be moved to compute shader)
  for (let i = 0; i < particleCount; i++) {
    const idx = i * 8;

    // Update position
    particles[idx + 0] += particles[idx + 2] * dt;
    particles[idx + 1] += particles[idx + 3] * dt;

    // Wrap around edges
    if (particles[idx + 0] < 0) particles[idx + 0] = w;
    if (particles[idx + 0] > w) particles[idx + 0] = 0;
    if (particles[idx + 1] < 0) particles[idx + 1] = h;
    if (particles[idx + 1] > h) particles[idx + 1] = 0;
  }

  time += deltaTime;

  // Update buffer
  gl.bindBuffer(gl.ARRAY_BUFFER, particleBuffer);
  gl.bufferSubData(gl.ARRAY_BUFFER, 0, particles);
}

export function renderParticles(): void {
  if (!canvas || !gl || !program || !bgProgram) return;

  // Clear
  gl.clearColor(0, 0, 0, 1);
  gl.clear(gl.COLOR_BUFFER_BIT);

  // Draw background gradient
  gl.useProgram(bgProgram);
  gl.bindBuffer(gl.ARRAY_BUFFER, bgBuffer);
  gl.enableVertexAttribArray(0);
  gl.vertexAttribPointer(0, 2, gl.FLOAT, false, 0, 0);

  const innerColor = hexToRgb(colors.voidBgLight);
  const outerColor = hexToRgb(colors.voidBg);
  gl.uniform3fv(bgUColorInner, innerColor);
  gl.uniform3fv(bgUColorOuter, outerColor);

  gl.drawArrays(gl.TRIANGLES, 0, 6);

  // Draw particles
  gl.useProgram(program);
  gl.bindBuffer(gl.ARRAY_BUFFER, particleBuffer);

  // Set up vertex attributes (8 floats per particle, interleaved)
  const stride = 8 * 4; // 8 floats * 4 bytes
  gl.enableVertexAttribArray(0); // position
  gl.vertexAttribPointer(0, 2, gl.FLOAT, false, stride, 0);
  gl.enableVertexAttribArray(1); // velocity
  gl.vertexAttribPointer(1, 2, gl.FLOAT, false, stride, 8);
  gl.enableVertexAttribArray(2); // radius
  gl.vertexAttribPointer(2, 1, gl.FLOAT, false, stride, 16);
  gl.enableVertexAttribArray(3); // opacity
  gl.vertexAttribPointer(3, 1, gl.FLOAT, false, stride, 20);
  gl.enableVertexAttribArray(4); // twinklePhase
  gl.vertexAttribPointer(4, 1, gl.FLOAT, false, stride, 24);
  gl.enableVertexAttribArray(5); // twinkleSpeed
  gl.vertexAttribPointer(5, 1, gl.FLOAT, false, stride, 28);

  // Set uniforms
  gl.uniform1f(uTime, time);
  gl.uniform2f(uResolution, canvas.width, canvas.height);

  // Draw particles as points
  gl.drawArrays(gl.POINTS, 0, particleCount);
}

// -----------------------------------------------------------------------------
// Cleanup
// -----------------------------------------------------------------------------

export function destroyParticles(): void {
  if (gl) {
    if (program) gl.deleteProgram(program);
    if (bgProgram) gl.deleteProgram(bgProgram);
    if (particleBuffer) gl.deleteBuffer(particleBuffer);
    if (bgBuffer) gl.deleteBuffer(bgBuffer);
  }

  window.removeEventListener('resize', resizeCanvas);

  canvas = null;
  gl = null;
  program = null;
  bgProgram = null;
  particleBuffer = null;
  bgBuffer = null;
}
