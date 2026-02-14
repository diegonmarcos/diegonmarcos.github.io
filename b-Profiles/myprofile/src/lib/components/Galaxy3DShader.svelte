<script lang="ts">
  import { onMount } from 'svelte';

  let canvas: HTMLCanvasElement;
  let gl: WebGLRenderingContext | null = null;
  let animationId: number;
  let startTime: number;

  // Vertex shader - simple full-screen quad
  const vertexShaderSource = `
    attribute vec2 a_position;
    varying vec2 v_uv;
    void main() {
      v_uv = a_position * 0.5 + 0.5;
      gl_Position = vec4(a_position, 0.0, 1.0);
    }
  `;

  // Fragment shader - 3D Galaxy with Aurora, Stars, Nebulas
  const fragmentShaderSource = `
    precision highp float;

    varying vec2 v_uv;
    uniform float u_time;
    uniform vec2 u_resolution;
    uniform vec2 u_mouse;

    #define PI 3.14159265359
    #define TAU 6.28318530718

    // Noise functions
    float hash(vec2 p) {
      return fract(sin(dot(p, vec2(127.1, 311.7))) * 43758.5453123);
    }

    float hash3(vec3 p) {
      return fract(sin(dot(p, vec3(127.1, 311.7, 74.7))) * 43758.5453123);
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

    float fbm(vec2 p) {
      float value = 0.0;
      float amplitude = 0.5;
      for (int i = 0; i < 6; i++) {
        value += amplitude * noise(p);
        p *= 2.0;
        amplitude *= 0.5;
      }
      return value;
    }

    // 3D noise for volumetric effects
    float noise3D(vec3 p) {
      vec3 i = floor(p);
      vec3 f = fract(p);
      f = f * f * (3.0 - 2.0 * f);

      float n = mix(
        mix(
          mix(hash3(i), hash3(i + vec3(1,0,0)), f.x),
          mix(hash3(i + vec3(0,1,0)), hash3(i + vec3(1,1,0)), f.x),
          f.y
        ),
        mix(
          mix(hash3(i + vec3(0,0,1)), hash3(i + vec3(1,0,1)), f.x),
          mix(hash3(i + vec3(0,1,1)), hash3(i + vec3(1,1,1)), f.x),
          f.y
        ),
        f.z
      );
      return n;
    }

    // Stars field
    float stars(vec2 uv, float density, float brightness) {
      vec2 gv = fract(uv * density) - 0.5;
      vec2 id = floor(uv * density);
      float d = length(gv - (hash(id) - 0.5) * 0.8);
      float star = smoothstep(0.1, 0.0, d);
      star *= hash(id + 100.0) * brightness;
      // Twinkle
      star *= 0.5 + 0.5 * sin(u_time * (1.0 + hash(id) * 3.0) + hash(id) * TAU);
      return star;
    }

    // Spiral galaxy
    vec3 galaxy(vec2 uv, float time) {
      vec2 center = vec2(0.5, 0.5);
      vec2 p = uv - center;

      float angle = atan(p.y, p.x);
      float radius = length(p);

      // Spiral arms
      float arms = 3.0;
      float spiral = sin(angle * arms - radius * 15.0 + time * 0.3);
      spiral = smoothstep(0.0, 1.0, spiral);

      // Galaxy density falloff
      float density = exp(-radius * 4.0);

      // Core glow
      float core = exp(-radius * 20.0);

      // Combine
      float galaxyShape = spiral * density * 0.5 + core;

      // Colors
      vec3 coreColor = vec3(1.0, 0.9, 0.7);
      vec3 armColor = vec3(0.3, 0.5, 1.0);
      vec3 dustColor = vec3(0.8, 0.4, 0.6);

      vec3 col = mix(armColor, coreColor, core);
      col = mix(col, dustColor, spiral * 0.3);

      return col * galaxyShape;
    }

    // Aurora borealis
    vec3 aurora(vec2 uv, float time) {
      float y = uv.y;

      // Aurora appears in upper portion
      if (y < 0.4) return vec3(0.0);

      float auroraY = (y - 0.4) / 0.6;

      // Flowing curtains
      float curtain1 = sin(uv.x * 8.0 + time * 0.5 + sin(uv.x * 3.0 + time * 0.3) * 2.0);
      float curtain2 = sin(uv.x * 12.0 - time * 0.4 + cos(uv.x * 5.0 + time * 0.2) * 1.5);
      float curtain3 = sin(uv.x * 6.0 + time * 0.6 + sin(uv.x * 4.0 - time * 0.4) * 2.5);

      float curtains = (curtain1 + curtain2 + curtain3) / 3.0;
      curtains = curtains * 0.5 + 0.5;

      // Vertical fade and shimmer
      float verticalFade = exp(-pow(auroraY - 0.3, 2.0) * 8.0);
      float shimmer = noise(vec2(uv.x * 20.0, time * 2.0)) * 0.3 + 0.7;

      float intensity = curtains * verticalFade * shimmer;

      // Aurora colors - greens, teals, purples, pinks
      vec3 green = vec3(0.2, 1.0, 0.4);
      vec3 teal = vec3(0.1, 0.8, 0.7);
      vec3 purple = vec3(0.6, 0.2, 0.8);
      vec3 pink = vec3(0.9, 0.3, 0.5);

      float colorMix = sin(uv.x * 4.0 + time * 0.2) * 0.5 + 0.5;
      float colorMix2 = sin(uv.x * 7.0 - time * 0.15) * 0.5 + 0.5;

      vec3 col1 = mix(green, teal, colorMix);
      vec3 col2 = mix(purple, pink, colorMix2);
      vec3 auroraColor = mix(col1, col2, auroraY);

      return auroraColor * intensity * 0.6;
    }

    // Nebula clouds
    vec3 nebula(vec2 uv, float time) {
      vec2 p = uv * 3.0;

      float n1 = fbm(p + time * 0.05);
      float n2 = fbm(p * 1.5 - time * 0.03 + 100.0);
      float n3 = fbm(p * 0.8 + time * 0.04 + 200.0);

      vec3 col1 = vec3(0.5, 0.1, 0.3) * n1;
      vec3 col2 = vec3(0.1, 0.2, 0.5) * n2;
      vec3 col3 = vec3(0.2, 0.4, 0.3) * n3;

      return (col1 + col2 + col3) * 0.3;
    }

    // Matrix rain effect
    float matrixRain(vec2 uv, float time) {
      float columns = 60.0;
      vec2 gv = vec2(floor(uv.x * columns) / columns, uv.y);
      float columnId = floor(uv.x * columns);

      float speed = 0.5 + hash(vec2(columnId, 0.0)) * 1.0;
      float offset = hash(vec2(columnId, 1.0));

      float y = fract(uv.y + time * speed + offset);
      float fade = smoothstep(0.0, 0.3, y) * smoothstep(1.0, 0.5, y);

      // Only show some columns
      float show = step(0.7, hash(vec2(columnId, 2.0)));

      return fade * show * 0.15;
    }

    void main() {
      vec2 uv = v_uv;
      vec2 aspect = vec2(u_resolution.x / u_resolution.y, 1.0);
      vec2 uvAspect = (uv - 0.5) * aspect + 0.5;

      float time = u_time;

      // Deep space background
      vec3 col = vec3(0.01, 0.02, 0.05);

      // Add distant stars (multiple layers for depth)
      float starField = 0.0;
      starField += stars(uvAspect, 50.0, 1.0);
      starField += stars(uvAspect + 0.1, 80.0, 0.7);
      starField += stars(uvAspect + 0.2, 120.0, 0.5);
      starField += stars(uvAspect + 0.3, 200.0, 0.3);
      col += vec3(starField);

      // Add nebula
      col += nebula(uvAspect, time);

      // Add galaxy (offset and scaled)
      vec2 galaxyUV = (uvAspect - vec2(0.7, 0.3)) * 2.0 + 0.5;
      col += galaxy(galaxyUV, time) * 0.4;

      // Add aurora borealis
      col += aurora(uv, time);

      // Add matrix rain overlay
      float rain = matrixRain(uv, time);
      col += vec3(0.0, rain, rain * 0.5);

      // Vignette
      float vignette = 1.0 - length((uv - 0.5) * 1.2);
      vignette = smoothstep(0.0, 0.7, vignette);
      col *= vignette;

      // Subtle scanlines
      float scanline = sin(uv.y * u_resolution.y * 0.5) * 0.02 + 0.98;
      col *= scanline;

      // Color grading - slight green tint
      col.g *= 1.1;

      gl_FragColor = vec4(col, 1.0);
    }
  `;

  function createShader(gl: WebGLRenderingContext, type: number, source: string): WebGLShader | null {
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

  function createProgram(gl: WebGLRenderingContext, vertexShader: WebGLShader, fragmentShader: WebGLShader): WebGLProgram | null {
    const program = gl.createProgram();
    if (!program) return null;
    gl.attachShader(program, vertexShader);
    gl.attachShader(program, fragmentShader);
    gl.linkProgram(program);
    if (!gl.getProgramParameter(program, gl.LINK_STATUS)) {
      console.error('Program link error:', gl.getProgramInfoLog(program));
      gl.deleteProgram(program);
      return null;
    }
    return program;
  }

  onMount(() => {
    gl = canvas.getContext('webgl', { antialias: true, alpha: false });
    if (!gl) {
      console.error('WebGL not supported');
      return;
    }

    const vertexShader = createShader(gl, gl.VERTEX_SHADER, vertexShaderSource);
    const fragmentShader = createShader(gl, gl.FRAGMENT_SHADER, fragmentShaderSource);
    if (!vertexShader || !fragmentShader) return;

    const program = createProgram(gl, vertexShader, fragmentShader);
    if (!program) return;

    gl.useProgram(program);

    // Create full-screen quad
    const positions = new Float32Array([
      -1, -1,
       1, -1,
      -1,  1,
       1,  1
    ]);

    const positionBuffer = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, positionBuffer);
    gl.bufferData(gl.ARRAY_BUFFER, positions, gl.STATIC_DRAW);

    const positionLocation = gl.getAttribLocation(program, 'a_position');
    gl.enableVertexAttribArray(positionLocation);
    gl.vertexAttribPointer(positionLocation, 2, gl.FLOAT, false, 0, 0);

    // Get uniform locations
    const timeLocation = gl.getUniformLocation(program, 'u_time');
    const resolutionLocation = gl.getUniformLocation(program, 'u_resolution');
    const mouseLocation = gl.getUniformLocation(program, 'u_mouse');

    // Mouse tracking
    let mouseX = 0.5;
    let mouseY = 0.5;
    window.addEventListener('mousemove', (e) => {
      mouseX = e.clientX / window.innerWidth;
      mouseY = 1.0 - e.clientY / window.innerHeight;
    });

    // Resize handler
    function resize() {
      const dpr = Math.min(window.devicePixelRatio, 2);
      canvas.width = window.innerWidth * dpr;
      canvas.height = window.innerHeight * dpr;
      canvas.style.width = window.innerWidth + 'px';
      canvas.style.height = window.innerHeight + 'px';
      gl!.viewport(0, 0, canvas.width, canvas.height);
    }
    resize();
    window.addEventListener('resize', resize);

    startTime = performance.now();

    function render() {
      if (!gl) return;

      const time = (performance.now() - startTime) / 1000;

      gl.uniform1f(timeLocation, time);
      gl.uniform2f(resolutionLocation, canvas.width, canvas.height);
      gl.uniform2f(mouseLocation, mouseX, mouseY);

      gl.drawArrays(gl.TRIANGLE_STRIP, 0, 4);

      animationId = requestAnimationFrame(render);
    }
    render();

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener('resize', resize);
    };
  });
</script>

<canvas bind:this={canvas} class="galaxy-shader"></canvas>

<style>
  .galaxy-shader {
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    z-index: -1;
    pointer-events: none;
  }
</style>
