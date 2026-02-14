<script lang="ts">
  import { navigation } from '$lib/stores/navigation';
  import { onMount } from 'svelte';

  onMount(() => {
    navigation.setPage('memory');
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

  // Memory/photos shader - polaroid frames, floating photos, camera effects
  const fragmentShaderSource = `
    #ifdef GL_ES
    precision highp float;
    #endif

    uniform float u_time;
    uniform vec2 u_resolution;

    float hash(vec2 p) {
      return fract(sin(dot(p, vec2(127.1, 311.7))) * 43758.5453);
    }

    // Rounded rectangle SDF
    float sdRoundBox(vec2 p, vec2 b, float r) {
      vec2 q = abs(p) - b + r;
      return min(max(q.x, q.y), 0.0) + length(max(q, 0.0)) - r;
    }

    // Polaroid frame
    float polaroid(vec2 p, vec2 center, float size, float rotation) {
      vec2 pp = p - center;
      float c = cos(rotation), s = sin(rotation);
      pp = mat2(c, -s, s, c) * pp;

      // Outer frame
      float outer = sdRoundBox(pp, vec2(size, size * 1.2), 0.02);
      // Inner photo area
      float inner = sdRoundBox(pp - vec2(0.0, size * 0.1), vec2(size * 0.85, size * 0.75), 0.01);

      return max(outer, -inner);
    }

    void main() {
      vec2 uv = gl_FragCoord.xy / u_resolution;
      vec2 p = uv * 2.0 - 1.0;
      p.x *= u_resolution.x / u_resolution.y;

      float t = u_time;
      vec3 col = vec3(0.02, 0.01, 0.03);

      // Floating polaroids
      for (float i = 0.0; i < 6.0; i++) {
        float seed = i * 1.618;
        vec2 center = vec2(
          sin(t * 0.3 + seed) * 0.8,
          cos(t * 0.25 + seed * 1.3) * 0.6
        );
        float rotation = sin(t * 0.2 + seed) * 0.3;
        float size = 0.15 + hash(vec2(i, 0.0)) * 0.1;
        float depth = 0.5 + i * 0.1;

        float frame = polaroid(p, center, size, rotation);

        if (frame < 0.0) {
          // Frame color (white border)
          col = mix(col, vec3(0.9, 0.88, 0.85), 0.9 / depth);

          // Photo area - colorful abstract
          vec2 pp = p - center;
          float c = cos(rotation), s = sin(rotation);
          pp = mat2(c, -s, s, c) * pp;
          pp = pp - vec2(0.0, size * 0.1);

          if (abs(pp.x) < size * 0.8 && abs(pp.y) < size * 0.7) {
            // Abstract photo content
            vec3 photoCol = vec3(
              0.5 + 0.5 * sin(pp.x * 10.0 + i),
              0.3 + 0.3 * sin(pp.y * 8.0 + i * 2.0),
              0.6 + 0.4 * cos((pp.x + pp.y) * 6.0 + i * 3.0)
            );
            col = mix(col, photoCol * 0.7, 0.95);
          }
        }

        // Soft glow around frames
        col += vec3(0.74, 0.08, 1.0) * 0.003 / (abs(frame) + 0.01) / depth;
      }

      // Camera aperture in corner
      vec2 ap = p - vec2(0.7, -0.5);
      float aperture = length(ap) - 0.15;
      // Aperture blades
      float blades = 1.0;
      for (float i = 0.0; i < 6.0; i++) {
        float angle = i * 1.047 + t * 0.5;
        vec2 blade = vec2(cos(angle), sin(angle));
        blades = min(blades, dot(ap, blade) + 0.08);
      }
      aperture = max(aperture, blades);

      if (aperture < 0.0) {
        col = vec3(0.1, 0.05, 0.15);
      }
      col += vec3(0.74, 0.08, 1.0) * 0.01 / (abs(aperture) + 0.01);

      // Camera shutter flash
      float flash = exp(-mod(t, 4.0) * 3.0);
      col += vec3(1.0) * flash * 0.3;

      // Grid of memory cells
      vec2 grid = fract(p * 8.0) - 0.5;
      float cell = max(abs(grid.x), abs(grid.y)) - 0.45;
      col += vec3(0.5, 0.2, 0.8) * smoothstep(0.02, 0.0, abs(cell)) * 0.1;

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

<div class="memory-page">
  <canvas bind:this={canvas} class="shader-bg"></canvas>
  <div class="content-overlay">
    <h1 class="page-title mono">MEMORY_BANK</h1>
    <p class="page-subtitle">Photo gallery and visual memories</p>
  </div>
</div>

<style lang="scss">
  .memory-page {
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
    color: #bc13fe;
    text-shadow: 0 0 30px rgba(188, 19, 254, 0.5);
    letter-spacing: 0.2em;
    margin-bottom: 1rem;
  }

  .page-subtitle {
    color: rgba(188, 19, 254, 0.6);
    font-size: 1rem;
    letter-spacing: 0.1em;
  }
</style>
