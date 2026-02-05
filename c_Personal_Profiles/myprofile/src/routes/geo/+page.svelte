<script lang="ts">
  import { navigation } from '$lib/stores/navigation';
  import { onMount } from 'svelte';

  onMount(() => {
    navigation.setPage('geo');
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

  // Globe/map shader - wireframe globe, grid, location markers
  const fragmentShaderSource = `
    #ifdef GL_ES
    precision highp float;
    #endif

    uniform float u_time;
    uniform vec2 u_resolution;

    #define PI 3.14159265

    // Sphere intersection
    vec2 sphereIntersect(vec3 ro, vec3 rd, float r) {
      float b = dot(ro, rd);
      float c = dot(ro, ro) - r * r;
      float h = b * b - c;
      if (h < 0.0) return vec2(-1.0);
      h = sqrt(h);
      return vec2(-b - h, -b + h);
    }

    // Grid pattern on sphere
    float sphereGrid(vec3 p, float t) {
      // Convert to spherical coordinates
      float lon = atan(p.z, p.x) + t * 0.2;
      float lat = asin(p.y);

      // Grid lines
      float lonLine = abs(fract(lon * 6.0 / PI) - 0.5);
      float latLine = abs(fract(lat * 6.0 / PI + 0.5) - 0.5);

      return min(lonLine, latLine);
    }

    void main() {
      vec2 uv = gl_FragCoord.xy / u_resolution;
      vec2 p = (uv * 2.0 - 1.0) * vec2(u_resolution.x / u_resolution.y, 1.0);

      vec3 col = vec3(0.01, 0.02, 0.02);
      float t = u_time;

      // Camera
      vec3 ro = vec3(0.0, 0.0, 3.0);
      vec3 rd = normalize(vec3(p, -1.5));

      // Rotate ray for globe rotation
      float angle = t * 0.3;
      mat2 rot = mat2(cos(angle), -sin(angle), sin(angle), cos(angle));
      rd.xz = rot * rd.xz;

      // Globe
      vec2 tSphere = sphereIntersect(ro, rd, 1.0);

      if (tSphere.x > 0.0) {
        vec3 pos = ro + rd * tSphere.x;

        // Grid on globe
        float grid = sphereGrid(pos, 0.0);
        col += vec3(0.0, 1.0, 0.62) * smoothstep(0.05, 0.0, grid) * 0.8;

        // Atmosphere glow at edges
        float fresnel = pow(1.0 - abs(dot(normalize(pos), -rd)), 2.0);
        col += vec3(0.0, 0.8, 0.5) * fresnel * 0.5;

        // Continents (simplified noise pattern)
        float lon = atan(pos.z, pos.x);
        float lat = asin(pos.y);
        float land = sin(lon * 3.0) * sin(lat * 4.0) + sin(lon * 7.0 + 1.0) * sin(lat * 5.0 + 2.0);
        if (land > 0.3) {
          col += vec3(0.0, 0.4, 0.25) * 0.3;
        }
      }

      // Atmosphere halo
      vec2 tAtmo = sphereIntersect(ro, rd, 1.15);
      if (tAtmo.x > 0.0 && tSphere.x < 0.0) {
        float atmo = 1.0 - (tAtmo.y - tAtmo.x) * 0.8;
        col += vec3(0.0, 0.6, 0.4) * atmo * 0.3;
      }

      // Location markers (pulsing dots)
      for (float i = 0.0; i < 5.0; i++) {
        float markerAngle = i * 1.25 + t * 0.1;
        float markerLat = sin(i * 2.1) * 0.6;
        vec3 markerPos = vec3(
          cos(markerAngle) * cos(markerLat),
          sin(markerLat),
          sin(markerAngle) * cos(markerLat)
        );

        // Project to screen
        vec3 rotatedMarker = markerPos;
        rotatedMarker.xz = rot * rotatedMarker.xz;

        if (rotatedMarker.z < 0.0) { // Only show front-facing markers
          vec2 screenPos = rotatedMarker.xy / (3.0 - rotatedMarker.z);
          float dist = length(p - screenPos);
          float pulse = 0.5 + 0.5 * sin(t * 3.0 + i);
          col += vec3(0.0, 1.0, 0.62) * (0.01 / (dist + 0.01)) * pulse;
        }
      }

      // Radar sweep
      float radarAngle = atan(p.y, p.x);
      float sweep = mod(radarAngle - t * 2.0, PI * 2.0);
      if (sweep < 0.3 && length(p) < 1.2) {
        col += vec3(0.0, 0.5, 0.3) * (0.3 - sweep) * 0.5;
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

<div class="geo-page">
  <canvas bind:this={canvas} class="shader-bg"></canvas>
  <div class="content-overlay">
    <h1 class="page-title mono">GEO_TAG</h1>
    <p class="page-subtitle">Location data and geographic information</p>
  </div>
</div>

<style lang="scss">
  .geo-page {
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
    color: #00ff9d;
    text-shadow: 0 0 30px rgba(0, 255, 157, 0.5);
    letter-spacing: 0.2em;
    margin-bottom: 1rem;
  }

  .page-subtitle {
    color: rgba(0, 255, 157, 0.6);
    font-size: 1rem;
    letter-spacing: 0.1em;
  }
</style>
