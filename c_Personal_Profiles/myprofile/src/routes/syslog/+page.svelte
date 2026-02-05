<script lang="ts">
  import TerminalAI from '$lib/components/TerminalAI.svelte';
  import { navigation } from '$lib/stores/navigation';
  import { onMount } from 'svelte';

  onMount(() => {
    navigation.setPage('syslog');
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

  const fragmentShaderSource = `
    #ifdef GL_ES
    precision highp float;
    #endif

    uniform float u_time;
    uniform vec2 u_resolution;

    #define MAX_STEPS 48
    #define MAX_DIST 80.0
    #define SURF_DIST 0.01

    mat3 rotateX(float a) {
      float c = cos(a), s = sin(a);
      return mat3(1,0,0, 0,c,-s, 0,s,c);
    }

    float hash(vec3 p) {
      p = fract(p * vec3(443.897, 441.423, 437.195));
      p += dot(p, p.yxz + 19.19);
      return fract((p.x + p.y) * p.z);
    }

    float sdSphere(vec3 p, float r) { return length(p) - r; }
    float sdTorus(vec3 p, vec2 t) { return length(vec2(length(p.xz) - t.x, p.y)) - t.y; }

    vec3 getPlanetPos(int idx, float time) {
      float angle, r;
      if (idx == 0) { r = 4.0; angle = time * 1.2; }
      else if (idx == 1) { r = 6.0; angle = time * 0.9; }
      else if (idx == 2) { r = 8.0; angle = time * 0.6; }
      else if (idx == 3) { r = 10.5; angle = time * 0.45; }
      else if (idx == 4) { r = 15.0; angle = time * 0.24; }
      else { r = 20.0; angle = time * 0.15; }
      return vec3(cos(angle) * r, 0.0, sin(angle) * r);
    }

    vec4 sceneSDF(vec3 p, float time) {
      float sun = sdSphere(p, 2.0);
      vec4 result = vec4(0.95, 0.9, 0.8, sun);
      vec3 pp; float d;

      pp = getPlanetPos(0, time); d = sdSphere(p - pp, 0.25);
      if (d < result.w) result = vec4(0.7, 0.65, 0.6, d);
      pp = getPlanetPos(1, time); d = sdSphere(p - pp, 0.4);
      if (d < result.w) result = vec4(0.95, 0.8, 0.5, d);
      pp = getPlanetPos(2, time); d = sdSphere(p - pp, 0.45);
      if (d < result.w) result = vec4(0.3, 0.5, 0.9, d);
      pp = getPlanetPos(3, time); d = sdSphere(p - pp, 0.35);
      if (d < result.w) result = vec4(0.9, 0.4, 0.2, d);
      pp = getPlanetPos(4, time); d = sdSphere(p - pp, 1.4);
      if (d < result.w) result = vec4(0.85, 0.7, 0.5, d);
      pp = getPlanetPos(5, time); d = sdSphere(p - pp, 1.1);
      if (d < result.w) result = vec4(0.95, 0.85, 0.6, d);

      vec3 rp = rotateX(0.4) * (p - pp);
      float rings = sdTorus(rp, vec2(1.9, 0.04));
      if (rings < result.w) result = vec4(0.8, 0.7, 0.5, rings);

      return result;
    }

    vec4 rayMarch(vec3 ro, vec3 rd, float time) {
      float t = 0.0;
      for (int i = 0; i < MAX_STEPS; i++) {
        vec3 p = ro + rd * t;
        vec4 d = sceneSDF(p, time);
        if (d.w < SURF_DIST) return vec4(d.rgb, t);
        if (t > MAX_DIST) break;
        t += d.w;
      }
      return vec4(0.0, 0.0, 0.0, MAX_DIST + 1.0);
    }

    vec3 getNormal(vec3 p, float time) {
      vec2 e = vec2(0.02, 0.0);
      float d = sceneSDF(p, time).w;
      return normalize(vec3(
        sceneSDF(p + e.xyy, time).w - d,
        sceneSDF(p + e.yxy, time).w - d,
        sceneSDF(p + e.yyx, time).w - d
      ));
    }

    vec3 stars(vec3 rd) {
      vec3 p = rd * 100.0;
      vec3 id = floor(p);
      float h = hash(id);
      if (h > 0.96) return vec3(smoothstep(0.08, 0.0, length(fract(p) - 0.5)) * (h - 0.96) * 25.0);
      return vec3(0.0);
    }

    vec3 drawOrbits(vec3 ro, vec3 rd) {
      if (abs(rd.y) < 0.001) return vec3(0.0);
      float t = -ro.y / rd.y;
      if (t < 0.0 || t > 60.0) return vec3(0.0);
      float r = length((ro + rd * t).xz);
      float fade = exp(-t * 0.025);
      float line = smoothstep(0.2, 0.0, abs(r - 4.0)) + smoothstep(0.2, 0.0, abs(r - 6.0)) +
                   smoothstep(0.2, 0.0, abs(r - 8.0)) + smoothstep(0.2, 0.0, abs(r - 10.5)) +
                   smoothstep(0.2, 0.0, abs(r - 15.0)) + smoothstep(0.2, 0.0, abs(r - 20.0));
      return vec3(0.0, 0.3, 0.15) * line * 0.25 * fade;
    }

    vec3 sunGlow(vec3 rd, vec3 sunDir) {
      float d = dot(rd, sunDir);
      return vec3(1.0, 0.95, 0.9) * pow(max(d, 0.0), 128.0) * 0.8 +
             vec3(1.0, 0.7, 0.4) * pow(max(d, 0.0), 16.0) * 0.15;
    }

    void main() {
      vec2 uv = (gl_FragCoord.xy - 0.5 * u_resolution) / u_resolution.y;
      float time = u_time;

      float camDist = 38.0;
      float camAngle = time * 0.08;
      float camPitch = 0.45 + sin(time * 0.05) * 0.15;

      vec3 ro = vec3(sin(camAngle) * cos(camPitch) * camDist, sin(camPitch) * camDist + 8.0, cos(camAngle) * cos(camPitch) * camDist);
      vec3 forward = normalize(-ro);
      vec3 right = normalize(cross(vec3(0, 1, 0), forward));
      vec3 up = cross(forward, right);
      vec3 rd = normalize(forward + uv.x * right + uv.y * up);

      vec3 col = vec3(0.008, 0.01, 0.018) + stars(rd) + drawOrbits(ro, rd) + sunGlow(rd, forward);

      vec4 hit = rayMarch(ro, rd, time);
      if (hit.w < MAX_DIST) {
        vec3 p = ro + rd * hit.w;
        vec3 n = getNormal(p, time);
        vec3 lightDir = normalize(-p);
        float diff = max(dot(n, lightDir), 0.0);

        if (length(p) < 2.5) {
          col = vec3(1.0, 0.97, 0.94) * 0.85;
        } else {
          vec3 viewDir = normalize(ro - p);
          float rim = 1.0 - max(dot(n, viewDir), 0.0);
          col = hit.rgb * (diff * 0.7 + 0.25) + hit.rgb * pow(rim, 1.8) * 0.6;
        }
      }

      vec2 vUv = gl_FragCoord.xy / u_resolution - 0.5;
      col *= 1.0 - dot(vUv, vUv) * 0.4;
      gl_FragColor = vec4(pow(col, vec3(0.9)), 1.0);
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
    gl = canvas.getContext('webgl', { antialias: false, alpha: false, powerPreference: 'high-performance' });
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
      const dpr = Math.min(window.devicePixelRatio, 1.25);
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

<div class="syslog-page">
  <canvas bind:this={canvas} class="shader-bg"></canvas>
  <div class="terminal-overlay">
    <TerminalAI />
  </div>
</div>

<style lang="scss">
  .syslog-page {
    position: relative;
    width: 100%;
    min-height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 2rem;
  }

  .shader-bg {
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    z-index: -1;
    opacity: 0.4;
  }

  .terminal-overlay {
    width: 100%;
    max-width: 900px;
    z-index: 10;
  }
</style>
