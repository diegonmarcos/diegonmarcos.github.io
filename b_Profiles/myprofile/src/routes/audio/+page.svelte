<script lang="ts">
  import { navigation } from '$lib/stores/navigation';
  import { onMount } from 'svelte';

  onMount(() => {
    navigation.setPage('audio');
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

  // Audio visualizer shader - waveforms and frequency bars
  const fragmentShaderSource = `
    #ifdef GL_ES
    precision highp float;
    #endif

    uniform float u_time;
    uniform vec2 u_resolution;

    float hash(float n) { return fract(sin(n) * 43758.5453); }

    float wave(float x, float freq, float amp, float phase) {
      return sin(x * freq + phase) * amp;
    }

    void main() {
      vec2 uv = gl_FragCoord.xy / u_resolution;
      vec2 p = uv * 2.0 - 1.0;
      p.x *= u_resolution.x / u_resolution.y;

      vec3 col = vec3(0.01, 0.02, 0.03);
      float t = u_time * 0.5;

      // Multiple waveforms
      for (float i = 0.0; i < 5.0; i++) {
        float freq = 3.0 + i * 1.5;
        float amp = 0.15 - i * 0.02;
        float phase = t * (1.0 + i * 0.3) + i * 1.57;
        float offset = (i - 2.0) * 0.25;

        float y = wave(p.x, freq, amp, phase) + offset;
        float dist = abs(p.y - y);
        float glow = 0.008 / dist;

        vec3 waveColor = vec3(0.0, 0.95, 1.0) * (1.0 - i * 0.15);
        col += waveColor * glow * 0.5;
      }

      // Frequency bars at bottom
      float barWidth = 0.08;
      float barSpacing = 0.12;
      for (float i = -5.0; i <= 5.0; i++) {
        float x = i * barSpacing;
        float barHeight = 0.3 + 0.4 * sin(t * 2.0 + i * 0.8) * sin(t * 1.3 + i * 0.5);
        barHeight = max(0.05, barHeight);

        if (abs(p.x - x) < barWidth * 0.5 && p.y > -0.9 && p.y < -0.9 + barHeight) {
          float intensity = 1.0 - (p.y + 0.9) / barHeight;
          col += vec3(0.0, 0.8, 1.0) * intensity * 0.4;
        }
      }

      // Circular pulse rings
      float r = length(p);
      for (float i = 0.0; i < 3.0; i++) {
        float ringR = mod(t * 0.3 + i * 0.4, 2.0);
        float ring = smoothstep(0.02, 0.0, abs(r - ringR)) * (1.0 - ringR * 0.5);
        col += vec3(0.0, 0.6, 0.8) * ring * 0.3;
      }

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

<div class="audio-page">
  <canvas bind:this={canvas} class="shader-bg"></canvas>
  <div class="content-overlay">
    <h1 class="page-title mono">AUDITORY_STREAM</h1>
    <p class="page-subtitle">Audio visualization and music data</p>
  </div>
</div>

<style lang="scss">
  .audio-page {
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
    color: #00f3ff;
    text-shadow: 0 0 30px rgba(0, 243, 255, 0.5);
    letter-spacing: 0.2em;
    margin-bottom: 1rem;
  }

  .page-subtitle {
    color: rgba(0, 243, 255, 0.6);
    font-size: 1rem;
    letter-spacing: 0.1em;
  }
</style>
