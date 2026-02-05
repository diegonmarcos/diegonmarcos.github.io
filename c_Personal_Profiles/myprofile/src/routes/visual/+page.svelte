<script lang="ts">
  import { navigation } from '$lib/stores/navigation';
  import { onMount } from 'svelte';

  onMount(() => {
    navigation.setPage('visual');
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

  // Video/visual feed shader - film grain, scanlines, glitch effects
  const fragmentShaderSource = `
    #ifdef GL_ES
    precision highp float;
    #endif

    uniform float u_time;
    uniform vec2 u_resolution;

    float hash(vec2 p) {
      return fract(sin(dot(p, vec2(127.1, 311.7))) * 43758.5453);
    }

    float noise(vec2 p) {
      vec2 i = floor(p);
      vec2 f = fract(p);
      f = f * f * (3.0 - 2.0 * f);
      return mix(
        mix(hash(i), hash(i + vec2(1.0, 0.0)), f.x),
        mix(hash(i + vec2(0.0, 1.0)), hash(i + vec2(1.0, 1.0)), f.x),
        f.y
      );
    }

    void main() {
      vec2 uv = gl_FragCoord.xy / u_resolution;
      vec2 p = uv * 2.0 - 1.0;
      p.x *= u_resolution.x / u_resolution.y;

      float t = u_time;
      vec3 col = vec3(0.02, 0.01, 0.02);

      // Film frame border
      float border = 0.03;
      float frame = step(border, uv.x) * step(uv.x, 1.0 - border) *
                    step(border, uv.y) * step(uv.y, 1.0 - border);

      // Glitch displacement
      float glitchStrength = step(0.97, hash(vec2(floor(t * 10.0), 0.0))) * 0.1;
      float glitchY = hash(vec2(floor(uv.y * 20.0), floor(t * 15.0)));
      if (glitchY > 0.95) {
        uv.x += glitchStrength * (hash(vec2(t, uv.y)) - 0.5);
      }

      // Color channels with chromatic aberration
      vec2 offset = vec2(0.003 + glitchStrength * 0.02, 0.0);
      float r = noise((uv + offset) * 50.0 + t);
      float g = noise(uv * 50.0 + t + 100.0);
      float b = noise((uv - offset) * 50.0 + t + 200.0);

      // Base color gradient
      vec3 gradient = vec3(
        0.5 + 0.3 * sin(p.x * 2.0 + t),
        0.1,
        0.3 + 0.2 * cos(p.y * 2.0 + t * 0.7)
      );

      col = gradient * 0.3;

      // Play button triangle
      vec2 playCenter = vec2(0.0, 0.0);
      vec2 pp = p - playCenter;
      float playSize = 0.3;
      // Triangle shape
      float tri = max(abs(pp.y) - playSize * 0.6,
                      pp.x * 0.866 + pp.y * 0.5 - playSize * 0.3);
      tri = max(tri, pp.x * 0.866 - pp.y * 0.5 - playSize * 0.3);
      tri = max(tri, -pp.x - playSize * 0.3);

      if (tri < 0.0) {
        col += vec3(1.0, 0.0, 0.33) * 0.6;
      }
      // Play button glow
      col += vec3(1.0, 0.0, 0.33) * 0.02 / (abs(tri) + 0.02);

      // Circular progress ring
      float ringRadius = 0.5;
      float ringWidth = 0.02;
      float angle = atan(p.y, p.x);
      float progress = mod(t * 0.5, 1.0);
      float ringDist = abs(length(p) - ringRadius) - ringWidth;
      if (ringDist < 0.0 && angle < progress * 6.28 - 3.14) {
        col += vec3(1.0, 0.0, 0.33) * 0.4;
      }
      col += vec3(1.0, 0.0, 0.33) * 0.005 / (abs(ringDist) + 0.005);

      // Scanlines
      float scanline = sin(uv.y * u_resolution.y * 0.5) * 0.5 + 0.5;
      col *= 0.9 + scanline * 0.1;

      // Film grain
      float grain = hash(uv * u_resolution + t * 1000.0) * 0.1;
      col += grain - 0.05;

      // Vignette
      col *= 1.0 - dot(uv - 0.5, uv - 0.5) * 1.2;

      // Frame mask
      col *= frame;

      // Film sprocket holes
      float sprocketY = mod(uv.y * 10.0 + t * 2.0, 1.0);
      if (uv.x < 0.03 || uv.x > 0.97) {
        if (sprocketY > 0.3 && sprocketY < 0.7) {
          col = vec3(0.0);
        }
      }

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

<div class="visual-page">
  <canvas bind:this={canvas} class="shader-bg"></canvas>
  <div class="content-overlay">
    <h1 class="page-title mono">VISUAL_FEED</h1>
    <p class="page-subtitle">Video content and visual media</p>
  </div>
</div>

<style lang="scss">
  .visual-page {
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
    color: #ff0055;
    text-shadow: 0 0 30px rgba(255, 0, 85, 0.5);
    letter-spacing: 0.2em;
    margin-bottom: 1rem;
  }

  .page-subtitle {
    color: rgba(255, 0, 85, 0.6);
    font-size: 1rem;
    letter-spacing: 0.1em;
  }
</style>
