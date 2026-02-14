<script lang="ts">
  import { navigation } from '$lib/stores/navigation';
  import { onMount } from 'svelte';

  onMount(() => {
    navigation.setPage('bio');
  });

  let canvas: HTMLCanvasElement;
  let gl: WebGLRenderingContext | null = null;
  let animationId: number;

  const vertexShaderSource = `
    attribute vec2 a_position;
    void main() {
      gl_Position = vec4(a_position, 0.0, 1.0);
    }
  `;

  // Bio/health metrics shader - heartbeat, DNA helix, vital signs
  const fragmentShaderSource = `
    #ifdef GL_ES
    precision highp float;
    #endif

    uniform float u_time;
    uniform vec2 u_resolution;

    #define PI 3.14159265

    float hash(vec2 p) {
      return fract(sin(dot(p, vec2(127.1, 311.7))) * 43758.5453);
    }

    // DNA helix
    float dnaHelix(vec2 p, float t) {
      float y = p.y * 8.0 + t * 2.0;
      float x1 = sin(y) * 0.15;
      float x2 = -sin(y) * 0.15;

      float d1 = length(vec2(p.x - x1, mod(y, 1.0) - 0.5)) - 0.08;
      float d2 = length(vec2(p.x - x2, mod(y, 1.0) - 0.5)) - 0.08;

      // Connecting bars
      float bar = 1.0;
      if (mod(y + 0.25, 1.0) < 0.5) {
        bar = smoothstep(0.02, 0.0, abs(p.y * 8.0 - floor(y + 0.25)));
        bar *= step(min(x1, x2), p.x) * step(p.x, max(x1, x2));
      }

      return min(min(d1, d2), bar > 0.5 ? 0.01 : 1.0);
    }

    // Heartbeat line
    float heartbeat(vec2 p, float t) {
      float x = p.x * 4.0 + t * 3.0;
      float beat = mod(x, 4.0);
      float y = 0.0;

      if (beat < 0.5) y = 0.0;
      else if (beat < 0.7) y = (beat - 0.5) * 2.0;
      else if (beat < 0.9) y = 0.4 - (beat - 0.7) * 4.0;
      else if (beat < 1.1) y = -0.4 + (beat - 0.9) * 5.0;
      else if (beat < 1.3) y = 0.6 - (beat - 1.1) * 3.0;
      else y = 0.0;

      return abs(p.y - y * 0.3);
    }

    void main() {
      vec2 uv = gl_FragCoord.xy / u_resolution;
      vec2 p = uv * 2.0 - 1.0;
      p.x *= u_resolution.x / u_resolution.y;

      vec3 col = vec3(0.02, 0.01, 0.01);
      float t = u_time;

      // DNA helix on left
      vec2 dnaPos = p + vec2(0.6, 0.0);
      float dna = dnaHelix(dnaPos, t);
      col += vec3(1.0, 0.57, 0.0) * 0.02 / (dna + 0.01);

      // Heartbeat line in center
      float hb = heartbeat(p, t);
      col += vec3(1.0, 0.4, 0.0) * 0.005 / (hb + 0.002);

      // Pulsing circle (heart)
      float pulse = 0.2 + 0.05 * sin(t * 8.0) * exp(-mod(t, 0.75) * 4.0);
      float heart = length(p + vec2(-0.5, 0.0)) - pulse;
      col += vec3(1.0, 0.3, 0.0) * 0.01 / (abs(heart) + 0.01);

      // Grid overlay
      vec2 grid = abs(fract(p * 10.0) - 0.5);
      float gridLine = min(grid.x, grid.y);
      col += vec3(1.0, 0.5, 0.0) * smoothstep(0.02, 0.0, gridLine) * 0.05;

      // Scanning line
      float scan = smoothstep(0.02, 0.0, abs(p.y - mod(t * 0.5, 2.0) + 1.0));
      col += vec3(1.0, 0.6, 0.0) * scan * 0.2;

      // Vignette
      col *= 1.0 - dot(uv - 0.5, uv - 0.5) * 0.8;

      gl_FragColor = vec4(col, 1.0);
    }
  `;

  function createShader(gl: WebGLRenderingContext, type: number, source: string): WebGLShader | null {
    const shader = gl.createShader(type);
    if (!shader) return null;
    gl.shaderSource(shader, source);
    gl.compileShader(shader);
    if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) {
      console.error('Shader error:', gl.getShaderInfoLog(shader));
      gl.deleteShader(shader);
      return null;
    }
    return shader;
  }

  function createProgram(gl: WebGLRenderingContext, vs: WebGLShader, fs: WebGLShader): WebGLProgram | null {
    const program = gl.createProgram();
    if (!program) return null;
    gl.attachShader(program, vs);
    gl.attachShader(program, fs);
    gl.linkProgram(program);
    if (!gl.getProgramParameter(program, gl.LINK_STATUS)) return null;
    return program;
  }

  onMount(() => {
    gl = canvas.getContext('webgl', { antialias: false, alpha: false });
    if (!gl) return;

    const vs = createShader(gl, gl.VERTEX_SHADER, vertexShaderSource);
    const fs = createShader(gl, gl.FRAGMENT_SHADER, fragmentShaderSource);
    if (!vs || !fs) return;

    const program = createProgram(gl, vs, fs);
    if (!program) return;

    gl.useProgram(program);

    const positions = new Float32Array([-1, -1, 1, -1, -1, 1, 1, 1]);
    const buffer = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, buffer);
    gl.bufferData(gl.ARRAY_BUFFER, positions, gl.STATIC_DRAW);

    const posLoc = gl.getAttribLocation(program, 'a_position');
    gl.enableVertexAttribArray(posLoc);
    gl.vertexAttribPointer(posLoc, 2, gl.FLOAT, false, 0, 0);

    const timeLoc = gl.getUniformLocation(program, 'u_time');
    const resLoc = gl.getUniformLocation(program, 'u_resolution');

    const resize = () => {
      const dpr = Math.min(window.devicePixelRatio, 1.5);
      canvas.width = window.innerWidth * dpr;
      canvas.height = window.innerHeight * dpr;
      gl!.viewport(0, 0, canvas.width, canvas.height);
    };
    resize();
    window.addEventListener('resize', resize);

    const startTime = performance.now();
    const render = () => {
      if (!gl) return;
      gl.uniform1f(timeLoc, (performance.now() - startTime) / 1000);
      gl.uniform2f(resLoc, canvas.width, canvas.height);
      gl.drawArrays(gl.TRIANGLE_STRIP, 0, 4);
      animationId = requestAnimationFrame(render);
    };
    render();

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener('resize', resize);
    };
  });
</script>

<div class="bio-page">
  <canvas bind:this={canvas} class="shader-bg"></canvas>
  <div class="content-overlay">
    <h1 class="page-title mono">BIO_METRICS</h1>
    <p class="page-subtitle">Health data and biometric information</p>
  </div>
</div>

<style lang="scss">
  .bio-page {
    position: relative;
    width: 100%;
    min-height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .shader-bg {
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    z-index: -1;
  }

  .content-overlay {
    text-align: center;
    z-index: 10;
  }

  .page-title {
    font-size: 2.5rem;
    color: #ff9100;
    text-shadow: 0 0 30px rgba(255, 145, 0, 0.5);
    letter-spacing: 0.2em;
    margin-bottom: 1rem;
  }

  .page-subtitle {
    color: rgba(255, 145, 0, 0.6);
    font-size: 1rem;
    letter-spacing: 0.1em;
  }
</style>
