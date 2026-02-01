<template>
  <canvas ref="canvasRef" class="bio-fractal-canvas"></canvas>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue';

// Props
interface Props {
  mode?: number;
}

const props = withDefaults(defineProps<Props>(), {
  mode: 0
});

// Refs
const canvasRef = ref<HTMLCanvasElement | null>(null);
let gl: WebGLRenderingContext | null = null;
let program: WebGLProgram | null = null;
let animationId: number | null = null;
let startTime = Date.now();

// Cache uniform locations for performance
let uniformLocations: {
  uTime: WebGLUniformLocation | null;
  uResolution: WebGLUniformLocation | null;
  uMode: WebGLUniformLocation | null;
} | null = null;

// Import shader files
import vertexShaderSource from '../../shaders/vertex.glsl?raw';
import fragmentBaseSource from '../../shaders/fragment-base.glsl?raw';
import fragmentMainSource from '../../shaders/fragment-main.glsl?raw';

// Import all shader effect files from the effects/ folder using glob import
const effectModules = import.meta.glob('../../shaders/effects/*.glsl', {
  eager: true,
  query: '?raw',
  import: 'default'
}) as Record<string, string>;

// Sort by filename to ensure correct order (mode-00, mode-01, etc.)
const fragmentFractalsSource = Object.keys(effectModules)
  .sort()
  .map(key => effectModules[key])
  .join('\n\n');

// Combine fragment shaders
const vertexShader = vertexShaderSource;
const fragmentShader = `${fragmentBaseSource}\n${fragmentFractalsSource}\n${fragmentMainSource}`;

// WebGL setup functions
const createShader = (type: number, source: string): WebGLShader | null => {
  if (!gl) return null;
  const shader = gl.createShader(type);
  if (!shader) return null;
  gl.shaderSource(shader, source);
  gl.compileShader(shader);
  if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) {
    console.error('Shader error:', gl.getShaderInfoLog(shader));
    return null;
  }
  return shader;
};

const initWebGL = (): boolean => {
  const canvas = canvasRef.value;
  if (!canvas) return false;

  gl = canvas.getContext('webgl') || canvas.getContext('experimental-webgl');
  if (!gl) return false;

  const vs = createShader(gl.VERTEX_SHADER, vertexShader);
  const fs = createShader(gl.FRAGMENT_SHADER, fragmentShader);
  if (!vs || !fs) return false;

  program = gl.createProgram();
  if (!program) return false;

  gl.attachShader(program, vs);
  gl.attachShader(program, fs);
  gl.linkProgram(program);

  if (!gl.getProgramParameter(program, gl.LINK_STATUS)) {
    console.error('Link error:', gl.getProgramInfoLog(program));
    return false;
  }

  const vertices = new Float32Array([-1,-1, 1,-1, -1,1, -1,1, 1,-1, 1,1]);
  const buffer = gl.createBuffer();
  gl.bindBuffer(gl.ARRAY_BUFFER, buffer);
  gl.bufferData(gl.ARRAY_BUFFER, vertices, gl.STATIC_DRAW);

  const aPosition = gl.getAttribLocation(program, 'aPosition');
  gl.enableVertexAttribArray(aPosition);
  gl.vertexAttribPointer(aPosition, 2, gl.FLOAT, false, 0, 0);

  // Cache uniform locations
  uniformLocations = {
    uTime: gl.getUniformLocation(program, 'uTime'),
    uResolution: gl.getUniformLocation(program, 'uResolution'),
    uMode: gl.getUniformLocation(program, 'uMode')
  };

  return true;
};

const resize = (): void => {
  const canvas = canvasRef.value;
  if (!canvas) return;
  canvas.width = canvas.clientWidth;
  canvas.height = canvas.clientHeight;
  if (gl) gl.viewport(0, 0, canvas.width, canvas.height);
};

const render = (): void => {
  if (!gl || !program || !canvasRef.value || !uniformLocations) return;

  gl.useProgram(program);
  gl.uniform1f(uniformLocations.uTime, (Date.now() - startTime) / 1000);
  gl.uniform2f(uniformLocations.uResolution, canvasRef.value.width, canvasRef.value.height);
  gl.uniform1i(uniformLocations.uMode, props.mode);
  gl.drawArrays(gl.TRIANGLES, 0, 6);

  animationId = requestAnimationFrame(render);
};

// Lifecycle
onMounted(() => {
  if (initWebGL()) {
    resize();
    window.addEventListener('resize', resize);
    render();
  }
});

onUnmounted(() => {
  if (animationId) cancelAnimationFrame(animationId);
  window.removeEventListener('resize', resize);
});
</script>

<style scoped lang="scss">
.bio-fractal-canvas {
  width: 100%;
  height: 100%;
  display: block;
}
</style>
