// 3D Fractal & Effect Collection - 50 Visual Effects
// Based on Shadertoy techniques from various authors
import { ref, onMounted, onUnmounted, h } from 'vue';

export default {
  name: 'BioFractalViewer',
  props: {
    mode: { type: Number, default: 0 }
  },
  setup(props) {
    const canvasRef = ref(null);
    let gl = null;
    let program = null;
    let animationId = null;
    let startTime = Date.now();

    const vertexShader = `
      precision highp float;
      attribute vec2 aPosition;
      varying vec2 vUV;
      void main() {
        vUV = aPosition;
        gl_Position = vec4(aPosition, 0.0, 1.0);
      }
    `;

    const fragmentShader = `
      precision highp float;
      varying vec2 vUV;
      uniform float uTime;
      uniform vec2 uResolution;
      uniform int uMode;

      #define MAX_STEPS 60
      #define MAX_DIST 20.0
      #define SURF_DIST 0.002
      #define PI 3.14159265

      mat2 rot(float a) {
        float s = sin(a), c = cos(a);
        return mat2(c, -s, s, c);
      }

      vec3 hsv2rgb(vec3 c) {
        vec4 K = vec4(1.0, 2.0/3.0, 1.0/3.0, 3.0);
        vec3 p = abs(fract(c.xxx + K.xyz) * 6.0 - K.www);
        return c.z * mix(K.xxx, clamp(p - K.xxx, 0.0, 1.0), c.y);
      }

      float hash(float n) { return fract(sin(n) * 43758.5453); }
      float hash2(vec2 p) { return fract(sin(dot(p, vec2(127.1, 311.7))) * 43758.5453); }
      float hash3(vec3 p) { return fract(sin(dot(p, vec3(127.1, 311.7, 74.7))) * 43758.5453); }

      float noise(vec2 p) {
        vec2 i = floor(p), f = fract(p);
        f = f * f * (3.0 - 2.0 * f);
        return mix(mix(hash2(i), hash2(i + vec2(1,0)), f.x),
                   mix(hash2(i + vec2(0,1)), hash2(i + vec2(1,1)), f.x), f.y);
      }

      float noise3(vec3 p) {
        vec3 i = floor(p), f = fract(p);
        f = f * f * (3.0 - 2.0 * f);
        return mix(mix(mix(hash3(i), hash3(i+vec3(1,0,0)), f.x),
                       mix(hash3(i+vec3(0,1,0)), hash3(i+vec3(1,1,0)), f.x), f.y),
                   mix(mix(hash3(i+vec3(0,0,1)), hash3(i+vec3(1,0,1)), f.x),
                       mix(hash3(i+vec3(0,1,1)), hash3(i+vec3(1,1,1)), f.x), f.y), f.z);
      }

      // Fake audio - smooth pulsing based on time
      float fakeAudio(float freq) {
        return 0.5 + 0.5 * sin(uTime * (1.0 + freq * 2.0) + freq * 10.0);
      }

      // ===== 0: MANDELBULB =====
      vec2 mandelbulb(vec3 p, float power) {
        vec3 z = p; float dr = 1.0, r = 0.0;
        for (int i = 0; i < 8; i++) {
          r = length(z); if (r > 2.0) break;
          float theta = acos(z.z / r), phi = atan(z.y, z.x);
          dr = pow(r, power - 1.0) * power * dr + 1.0;
          float zr = pow(r, power);
          z = zr * vec3(sin(theta*power)*cos(phi*power), sin(theta*power)*sin(phi*power), cos(theta*power)) + p;
        }
        return vec2(0.5 * log(r) * r / dr, r);
      }

      // ===== 1: MANDELBOX =====
      vec2 mandelbox(vec3 p) {
        vec3 z = p; float dr = 1.0, r = 0.0, scale = 2.5;
        for (int i = 0; i < 12; i++) {
          z = clamp(z, -1.0, 1.0) * 2.0 - z;
          r = dot(z, z);
          if (r < 0.25) { z *= 4.0; dr *= 4.0; }
          else if (r < 1.0) { z /= r; dr /= r; }
          z = z * scale + p; dr = dr * abs(scale) + 1.0;
        }
        return vec2(length(z) / abs(dr), r);
      }

      // ===== 2: MENGER SPONGE =====
      vec2 mengerSponge(vec3 p) {
        float d = max(max(abs(p.x), abs(p.y)), abs(p.z)) - 1.0;
        float s = 1.0, trap = 1e10;
        for (int i = 0; i < 5; i++) {
          vec3 a = mod(p * s, 2.0) - 1.0; s *= 3.0;
          vec3 r = abs(1.0 - 3.0 * abs(a)); trap = min(trap, length(a));
          float c = (min(max(r.x,r.y), min(max(r.y,r.z), max(r.z,r.x))) - 1.0) / s;
          d = max(d, c);
        }
        return vec2(d, trap);
      }

      // ===== 3: SIERPINSKI =====
      vec2 sierpinski(vec3 z) {
        float scale = 2.0, trap = 1e10;
        for (int i = 0; i < 12; i++) {
          if (z.x + z.y < 0.0) z.xy = -z.yx;
          if (z.x + z.z < 0.0) z.xz = -z.zx;
          if (z.y + z.z < 0.0) z.yz = -z.zy;
          trap = min(trap, length(z));
          z = z * scale - vec3(1.0) * (scale - 1.0);
        }
        return vec2((length(z) - 1.5) * pow(scale, -12.0), trap);
      }

      // ===== 4: KALEIDOSCOPE =====
      vec2 kaleidoscope(vec3 p, float time) {
        float trap = 1e10;
        for (int i = 0; i < 8; i++) {
          p = abs(p);
          if (p.x < p.y) p.xy = p.yx;
          if (p.x < p.z) p.xz = p.zx;
          if (p.y < p.z) p.yz = p.zy;
          p.xy *= rot(0.2 + time * 0.05);
          trap = min(trap, length(p));
          p = p * 2.0 - vec3(2.0);
          p.z -= 0.5 * sin(time * 0.3);
        }
        return vec2(length(p) * pow(2.0, -8.0), trap);
      }

      // ===== 5: ORGANIC HYBRID =====
      vec2 organicHybrid(vec3 p, float time) {
        vec3 z = p; float dr = 1.0, trap = 1e10, scale = 2.0 + sin(time * 0.15) * 0.4;
        for (int i = 0; i < 8; i++) {
          z.x = abs(z.x + 1.0) - abs(z.x - 1.0) - z.x;
          z.y = abs(z.y + 1.0) - abs(z.y - 1.0) - z.y;
          float r2 = dot(z, z); trap = min(trap, sqrt(r2));
          if (r2 < 0.25) { z *= 4.0; dr *= 4.0; }
          else if (r2 < 1.0) { z /= r2; dr /= r2; }
          z = z * scale + p; dr = dr * abs(scale) + 1.0;
          z.xy *= rot(0.2);
        }
        return vec2((length(z) - 2.0) / abs(dr), trap);
      }

      // ===== 6: FRACTAL LAND =====
      vec2 fractalLand(vec3 p, float time) {
        vec3 z = p, offset = vec3(1.0) + vec3(sin(time*0.2), cos(time*0.15), sin(time*0.1)) * 0.2;
        float dr = 1.0, trap = 1e10, scale = 1.8;
        for (int i = 0; i < 10; i++) {
          z = abs(z);
          if (z.x < z.y) z.xy = z.yx;
          if (z.x < z.z) z.xz = z.zx;
          if (z.y < z.z) z.yz = z.zy;
          z = z * scale - offset * (scale - 1.0);
          if (z.z < -0.5 * offset.z * (scale - 1.0)) z.z += offset.z * (scale - 1.0);
          trap = min(trap, length(z)); dr = dr * abs(scale) + 1.0;
        }
        return vec2((length(z) - 1.0) / abs(dr), trap);
      }

      // ===== 7: GALAXY NEBULA =====
      vec3 galaxyNebula(vec2 uv, float time) {
        vec3 col = vec3(0.0); float t = time * 0.1;
        for (float i = 1.0; i < 8.0; i++) {
          vec2 p = uv * (1.0 + i * 0.5) + vec2(cos(t + i), sin(t * 0.7 + i)) * 0.5;
          float n = 0.0, amp = 1.0;
          for (float j = 0.0; j < 5.0; j++) { n += noise(p * pow(2.0, j) + t) * amp; amp *= 0.5; }
          col += hsv2rgb(vec3(i * 0.1 + t * 0.05, 0.8, pow(n * 0.5, 2.0) / i));
        }
        col += vec3(pow(hash2(uv * 500.0), 20.0));
        return col;
      }

      // ===== 8: INFINITE TUNNEL =====
      vec3 infiniteTunnel(vec2 uv, float time) {
        float angle = atan(uv.y, uv.x), radius = length(uv);
        float tunnel = 1.0 / radius + time * 0.5, twist = angle + tunnel * 0.5;
        vec2 tuv = vec2(twist / PI, tunnel);
        vec2 grid = fract(tuv * 8.0) - 0.5;
        float glow = 0.02 / (length(grid) + 0.02);
        return hsv2rgb(vec3(tunnel * 0.1 + angle * 0.1, 0.7, glow)) * smoothstep(0.0, 0.3, radius);
      }

      // ===== 9: PLASMA FRACTAL =====
      vec3 plasmaFractal(vec2 uv, float time) {
        vec2 p = uv * 3.0;
        float v = sin(p.x + time) + sin((p.y + time) * 0.5) + sin((p.x + p.y + time) * 0.5);
        vec2 c = p + vec2(sin(time * 0.3), cos(time * 0.5));
        v += sin(sqrt(dot(c, c)) * 2.0 + time); v *= 0.5;
        vec3 col = vec3(sin(v * PI), sin(v * PI + 2.0), sin(v * PI + 4.0)) * 0.5 + 0.5;
        vec2 z = uv * 2.0; float detail = 0.0;
        for (int i = 0; i < 6; i++) { z = abs(z) / dot(z, z) - vec2(0.5 + sin(time * 0.2) * 0.2); detail += exp(-length(z)); }
        return col + vec3(0.1, 0.2, 0.3) * detail * 0.3;
      }

      // ===== 10: CIRCUITS =====
      vec3 circuits(vec2 uv, float time) {
        vec2 p = uv * 4.0;
        float sph = 1.0 - dot(uv, uv);
        if (sph > 0.0) p /= sqrt(sph) * 0.8;
        p *= rot(time * 0.1);
        vec2 z = p; float trap = 0.0;
        for (int i = 0; i < 12; i++) {
          z = abs(z) / clamp(dot(z, z), 0.1, 0.5) - vec2(1.5 + sin(time * 0.2) * 0.2);
          trap += exp(-length(z) * 0.5);
        }
        vec3 col = hsv2rgb(vec3(trap * 0.1 + time * 0.02, 0.7, trap * 0.15));
        col += vec3(0.1, 0.2, 0.4) * (1.0 - length(z) * 0.1);
        return col;
      }

      // ===== 11: METABALLS =====
      vec3 metaballs(vec2 uv, float time) {
        float d = 0.0;
        for (float i = 0.0; i < 6.0; i++) {
          vec2 pos = vec2(sin(time * 0.5 + i * 2.0), cos(time * 0.7 + i * 1.5)) * 0.4;
          float r = 0.15 + sin(time + i) * 0.05;
          d += r / length(uv - pos);
        }
        d = smoothstep(1.5, 2.5, d);
        return hsv2rgb(vec3(time * 0.05 + d * 0.3, 0.8, d));
      }

      // ===== 12: VOLUMETRIC LINES =====
      vec3 volumetricLines(vec2 uv, float time) {
        vec3 col = vec3(0.0);
        for (float i = 0.0; i < 8.0; i++) {
          float t = time * 0.3 + i * 0.5;
          vec2 p = vec2(sin(t * 1.3 + i), cos(t * 0.9 + i * 0.7)) * 0.5;
          float d = length(uv - p);
          float glow = 0.01 / (d * d + 0.01);
          col += hsv2rgb(vec3(i * 0.1 + time * 0.05, 0.7, glow * 0.3));
        }
        return col;
      }

      // ===== 13: DISCO TUNNEL =====
      vec3 discoTunnel(vec2 uv, float time) {
        float a = atan(uv.y, uv.x), r = length(uv);
        float tunnel = 1.0 / (r + 0.1) + time;
        vec2 tuv = vec2(a / PI * 4.0, tunnel * 2.0);
        vec2 id = floor(tuv);
        vec2 gv = fract(tuv) - 0.5;
        float d = length(gv);
        float light = smoothstep(0.4, 0.0, d) * (sin(id.x * 3.0 + id.y * 5.0 + time * 5.0) * 0.5 + 0.5);
        vec3 col = hsv2rgb(vec3(id.x * 0.1 + id.y * 0.05 + time * 0.1, 0.8, light));
        col *= smoothstep(0.0, 0.2, r);
        return col;
      }

      // ===== 14: SPEED DRIVE =====
      vec3 speedDrive(vec2 uv, float time) {
        vec3 col = vec3(0.0);
        float t = time * 2.0;
        for (float i = 0.0; i < 20.0; i++) {
          float z = fract(i * 0.17 + t * 0.1);
          float scale = mix(5.0, 0.5, z);
          float fade = smoothstep(0.0, 0.3, z) * smoothstep(1.0, 0.8, z);
          vec2 pos = (vec2(hash(i), hash(i + 1.0)) - 0.5) * 2.0;
          float d = length(uv * scale - pos);
          col += vec3(0.5, 0.7, 1.0) * fade * 0.03 / (d + 0.01);
        }
        return col + vec3(0.02, 0.01, 0.03);
      }

      // ===== 15: HOT ROCKS =====
      vec2 hotRocks(vec3 p, float time) {
        vec3 z = p; float trap = 1e10, scale = 1.5;
        z.y += sin(z.x * 2.0 + time) * 0.1;
        for (int i = 0; i < 8; i++) {
          z = abs(z);
          z.xy *= rot(0.3); z.yz *= rot(0.2);
          z = z * scale - vec3(1.5, 1.0, 1.0);
          trap = min(trap, length(z));
        }
        return vec2(length(z) * pow(scale, -8.0) - 0.01, trap);
      }

      // ===== 16: SERVER ROOM =====
      vec2 serverRoom(vec3 p, float time) {
        vec3 z = p;
        float d = 1e10, trap = 1e10;
        z.z += time * 0.5;
        vec3 id = floor(z);
        vec3 gv = fract(z) - 0.5;
        float box = max(max(abs(gv.x), abs(gv.y)), abs(gv.z)) - 0.3;
        float h = hash3(id);
        if (h > 0.3) box = 1e10;
        d = min(d, box);
        trap = min(trap, h);
        return vec2(d, trap);
      }

      // ===== 17: REMNANT X =====
      vec2 remnantX(vec3 p, float time) {
        vec3 z = p; float trap = 1e10;
        z.xy *= rot(time * 0.1);
        for (int i = 0; i < 6; i++) {
          z = abs(z) - vec3(0.5, 0.8, 0.5);
          z.xy *= rot(0.5); z.yz *= rot(0.3);
          z *= 1.2;
          trap = min(trap, dot(z, z));
        }
        return vec2(length(z) * pow(1.2, -6.0) - 0.1, sqrt(trap));
      }

      // ===== 18: KALI SET =====
      vec2 kaliSet(vec3 p, float time) {
        vec3 z = p; float trap = 1e10;
        float scale = 1.8 + sin(time * 0.2) * 0.2;
        for (int i = 0; i < 12; i++) {
          z = abs(z);
          float r = dot(z, z);
          z /= clamp(r, 0.4, 1.0);
          z = z * scale - vec3(2.0, 0.5, 0.5);
          trap = min(trap, r);
        }
        return vec2(length(z) * pow(scale, -12.0), sqrt(trap));
      }

      // ===== 19: GENERATORS =====
      vec2 generators(vec3 p, float time) {
        vec3 z = p; float trap = 1e10;
        z.xy *= rot(time * 0.1);
        for (int i = 0; i < 8; i++) {
          z = abs(z);
          if (z.x - z.y < 0.0) z.xy = z.yx;
          if (z.x - z.z < 0.0) z.xz = z.zx;
          z = z * 2.0 - vec3(1.0, 1.0, 1.0);
          z.z -= 0.5 * sin(time * 0.3 + float(i));
          trap = min(trap, length(z.xy));
        }
        return vec2(length(z) * pow(2.0, -8.0), trap);
      }

      // ===== 20: SIMPLICITY GALAXY =====
      vec3 simplicityGalaxy(vec2 uv, float time) {
        vec3 p = vec3(uv / 4.0, 0.0) + vec3(1.0, -1.3, 0.0);
        p += 0.2 * vec3(sin(time / 16.0), sin(time / 12.0), sin(time / 128.0));
        float accum = 0.0, prev = 0.0, tw = 0.0;
        for (int i = 0; i < 20; i++) {
          float mag = dot(p, p);
          p = abs(p) / mag + vec3(-0.5, -0.4, -1.5);
          float w = exp(-float(i) / 7.0);
          accum += w * exp(-7.0 * pow(abs(mag - prev), 2.2));
          tw += w; prev = mag;
        }
        float t1 = max(0.0, 5.0 * accum / tw - 0.7);
        vec3 p2 = vec3(uv / 4.5, 1.5) + vec3(2.0, -1.3, -1.0);
        p2 += 0.25 * vec3(sin(time / 16.0), sin(time / 12.0), sin(time / 128.0));
        accum = 0.0; prev = 0.0; tw = 0.0;
        for (int i = 0; i < 14; i++) {
          float mag = dot(p2, p2);
          p2 = abs(p2) / mag + vec3(-0.5, -0.4, -1.5);
          float w = exp(-float(i) / 7.0);
          accum += w * exp(-7.0 * pow(abs(mag - prev), 2.2));
          tw += w; prev = mag;
        }
        float t2 = max(0.0, 5.0 * accum / tw - 0.7);
        float v = (1.0 - exp((abs(uv.x) - 1.0) * 6.0)) * (1.0 - exp((abs(uv.y) - 1.0) * 6.0));
        vec3 c1 = mix(0.4, 1.0, v) * vec3(1.5 * t1 * t1 * t1, 1.2 * t1 * t1, t1);
        vec3 c2 = mix(0.4, 1.0, v) * vec3(1.3 * t2 * t2 * t2, 1.8 * t2 * t2, t2);
        vec3 rnd = fract(cos(uv.x * 8.3e-3 + uv.y) * vec3(1.3e5, 4.7e5, 2.9e5));
        return c1 + c2 + vec3(pow(rnd.y, 40.0));
      }

      // ===== 21: RIBBONS =====
      vec3 ribbons(vec2 uv, float time) {
        vec3 col = vec3(0.02);
        float t = time * 0.5;
        for (float i = 0.0; i < 4.0; i++) {
          float ribbon = abs(uv.y - sin(uv.x * 3.0 + t + i * 1.5) * 0.3 - cos(uv.x * 2.0 + t * 0.7 + i) * 0.2);
          float glow = 0.02 / (ribbon + 0.02);
          vec3 rcol = hsv2rgb(vec3(i * 0.25 + time * 0.05, 0.8, 1.0));
          col += rcol * glow * 0.5;
        }
        return col;
      }

      // ===== 22: TWISTED RINGS =====
      vec3 twistedRings(vec2 uv, float time) {
        float pulse = 0.5 + 0.5 * sin(time * 2.0);
        float r = pow(pulse * 2.0 - 0.5, 2.0) * cos(6.0 * atan(uv.y, uv.x) + time * 5.0) + 2.0 + pow(pulse, 2.0);
        r *= pulse / 12.0 + 0.04;
        float bg = smoothstep(r, r + pulse * 0.02 + 0.01, length(uv));
        vec3 col = vec3(bg);
        col *= smoothstep(0.0, r + pulse * 0.2, length(uv));
        vec3 col2 = 1.0 - col;
        col2 *= vec3(0.0, 0.9, 0.9) * length(uv) * 0.5 + 0.85;
        return col + col2;
      }

      // ===== 23: WAVES REMIX =====
      vec3 wavesRemix(vec2 uv, float time) {
        vec3 col = vec3(0.0);
        float lineIntensity, glowWidth;
        vec2 p = uv;
        for (float i = 0.0; i < 5.0; i++) {
          p.y += 0.2 * sin(p.x * 2.0 + i / 7.0 - time * 0.6);
          float wave = fakeAudio(i * 0.1) - 0.5;
          float Y = p.y + wave * 0.3;
          lineIntensity = 0.4 + pow(abs(mod(uv.x + i / 1.3 + time, 2.0) - 1.0), 2.0) * 1.6;
          glowWidth = abs(lineIntensity / (150.0 * Y));
          col += vec3(glowWidth * (2.0 + sin(time * 0.13)),
                      glowWidth * (2.0 - sin(time * 0.23)),
                      glowWidth * (2.0 - cos(time * 0.19)));
        }
        return col;
      }

      // ===== 24: DANCING METALIGHTS =====
      vec3 dancingMetalights(vec2 uv, float time) {
        float beat = pow(sin(time * 3.78 + 1.9) * 0.5 + 0.5, 15.0) * 0.05;
        vec2 p = uv * 2.0;
        vec2 o = vec2(p.x * p.x, p.y * p.y);
        vec3 col = vec3(pow(2.0 * abs(o.x + o.y) + abs(o.x - o.y), 5.0));
        col = max(col, vec3(1.0));
        float t2 = time * 2.0, t3 = time * 3.0;
        vec2 mbr = vec2(0.1 * sin(time * 4.0) + 0.4 * cos(t3), 0.4 * sin(t2) + 0.2 * cos(t3));
        vec2 mbg = vec2(0.15 * sin(t3) + 0.3 * cos(t2), -0.1 * sin(time * 4.0) + 0.3 * cos(t3));
        vec2 mbb = vec2(0.1 * sin(t3) + 0.5 * cos(t3), -0.1 * sin(time * 4.0) + 0.5 * cos(t2));
        col.r *= length(mbr - p);
        col.g *= length(mbg - p);
        col.b *= length(mbb - p);
        float mb = (0.04 + beat) / (pow(mbr.x - p.x, 2.0) + pow(mbr.y - p.y, 2.0));
        mb += (0.04 + beat) / (pow(mbg.x - p.x, 2.0) + pow(mbg.y - p.y, 2.0));
        mb += (0.04 + beat) / (pow(mbb.x - p.x, 2.0) + pow(mbb.y - p.y, 2.0));
        col *= pow(mb, 1.75);
        return col;
      }

      // ===== 25: IO BLOCKS =====
      vec3 ioBlocks(vec2 uv, float time) {
        float pulse = fakeAudio(0.15) * 0.5 + fakeAudio(0.3) * 0.5;
        float aspect = uResolution.x / uResolution.y;
        vec3 baseColor = uv.x > 0.0 ? vec3(0.0, 0.3, 0.6) : vec3(0.6, 0.0, 0.3);
        vec3 col = pulse * baseColor * 0.5 * (0.9 - cos(uv.x * 8.0));
        uv.x *= aspect;
        for (int i = 0; i < 30; i++) {
          float z = 1.0 - 0.7 * hash(float(i) * 1.4333);
          float tickTime = time * z * 0.7 + float(i) * 1.23753;
          float tick = floor(tickTime);
          vec2 pos = vec2(0.6 * aspect * (hash(tick) - 0.5), sign(uv.x) * 1.6 * (0.5 - fract(tickTime)));
          pos.x += 0.24 * sign(pos.x);
          vec2 size = 1.8 * z * vec2(0.04, 0.04 + 0.1 * hash(tick + 0.2));
          float b = length(max(abs(uv - pos) - size, vec2(0.0))) - 0.01;
          float dust = z * smoothstep(0.22, 0.0, b) * pulse * 0.5;
          float block = 0.2 * z * smoothstep(0.002, 0.0, b);
          col += dust * baseColor + block * z;
        }
        return col - hash2(uv) * 0.04;
      }

      // ===== 26: BEATING CIRCLES =====
      vec3 beatingCircles(vec2 uv, float time) {
        float beat = pow(sin(time * 3.78 + 1.9) * 0.5 + 0.5, 15.0) * 0.1;
        float scale = uResolution.y / 50.0;
        float ring = 20.0;
        float radius = uResolution.x * 1.0;
        float gap = scale * 0.5;
        vec2 pos = uv * uResolution.xy * 0.5;
        float d = length(pos);
        d += beat * 2.0 * sin(pos.y * 0.25 / scale + time) * sin(pos.x * 0.25 / scale + time * 0.5) * scale * 5.0;
        float v = mod(d + radius / (ring * 2.0), radius / ring);
        v = abs(v - radius / (ring * 2.0));
        v = clamp(v - gap, 0.0, 1.0);
        d /= radius;
        vec3 m = fract((d - 1.0) * vec3(ring * -0.5, -ring, ring * 0.25) * 0.5);
        return m * v;
      }

      // ===== 27: CIRCLE WAVE =====
      vec3 circleWave(vec2 uv, float time) {
        vec2 polar = vec2(abs(atan(uv.x, uv.y) / (0.5 * PI * 2.0)), length(uv));
        polar.x *= 0.5;
        vec3 wave = vec3(0.0);
        for (int i = 0; i < 30; i++) {
          float sound = fakeAudio(polar.x);
          float a = 0.9 * float(i) * PI * 2.0 / 30.0 - 0.6;
          vec3 phase = smoothstep(-1.0, 0.5, vec3(cos(a), cos(a - PI * 2.0 / 3.0), cos(a - PI * 4.0 / 3.0)));
          wave += phase * smoothstep(4.0 / 640.0, 0.0, abs(polar.y - sound * 0.3));
          polar.x += 0.002;
        }
        wave *= 0.1;
        vec3 col = vec3(fakeAudio(0.0), fakeAudio(0.25), fakeAudio(0.5)) * 0.5;
        col *= smoothstep(1.2, 0.0, polar.y);
        return wave + col;
      }

      // ===== 28: SOUNDFLOWER =====
      vec3 soundflower(vec2 uv, float time) {
        float r = length(uv);
        float a = atan(uv.x, uv.y);
        float w = fakeAudio(abs(a) / 6.28);
        float t = 3.0 * sqrt(abs(w - 0.5));
        float f = 0.0;
        if (r < t) f = 1.0 - r / t;
        return pow(vec3(f), vec3(1.5, 1.1, 0.8));
      }

      // ===== 29: POLAR BEATS =====
      vec3 polarBeats(vec2 uv, float time) {
        float fft = fakeAudio(0.0);
        float fft2 = fakeAudio(0.5);
        float fft3 = fakeAudio(0.25);
        float t = atan(uv.y, uv.x);
        float r = pow(fft * 2.0 - 0.5, 2.0) * cos(6.0 * t + (fft2 * 1.5 + time) * 5.0) + 2.0 + pow(fft, 2.0);
        r *= fft / 12.0 + 0.04;
        vec2 p = uv;
        p.x += sin(uv.y * 50.0) / 100.0;
        p.y += cos(uv.x * 50.0) / 100.0;
        float bg = smoothstep(r, r + fft * 0.02 + 0.01, length(p));
        vec3 col = vec3(bg) * smoothstep(0.0, r + fft * 0.2, length(uv));
        vec3 col2 = (1.0 - col) * vec3(0.0, 0.9, 0.9) * (length(uv) * 0.5 + 0.85);
        col -= 0.5 * smoothstep(0.0, 2.0, length(uv / (fft + 0.5)));
        col += sin(50.0 * uv.y - time * 3.0) * (fft * 0.5 + 0.5) * 0.05;
        return col + col2;
      }

      // ===== 30: UNDULANT SPECTRE =====
      vec3 undulantSpectre(vec2 uv, float time) {
        vec3 col1 = vec3(0.0, 0.0, 0.3);
        vec3 col2 = vec3(0.5, 0.0, 0.0);
        vec3 bgCol = mix(col1, col2, uv.x * 0.5 + 0.5);
        bgCol += noise(uv * 4.0 + time * 0.1) * 0.2;
        float waveWidth;
        vec2 p = uv;
        p.y += 0.1;
        p.x *= 2.0;
        vec3 waveCol = vec3(0.0);
        for (float i = 0.0; i < 10.0; i++) {
          float prev = fakeAudio((i - 1.0) / 10.0);
          float curr = fakeAudio(i / 10.0);
          float next = fakeAudio((i + 1.0) / 10.0);
          float a = max(0.0, curr * 2.0 - prev - next);
          p.y += cos(mod(p.x * 2.0 * i / 10.0 * 10.0 + time * i, 2.0 * PI)) * a * a;
          p.x += 0.1;
          waveWidth = abs(1.0 / (200.0 * p.y));
          waveCol += vec3(waveWidth * 1.9, waveWidth, waveWidth * 1.5) * 0.5;
        }
        return bgCol + waveCol;
      }

      // ===== 31: REVISION 2015 =====
      vec3 revision2015(vec2 uv, float time) {
        float a = time * 0.3, cs = cos(a), ss = sin(a);
        mat3 r1 = mat3(cs, 0.0, ss, 0.0, 1.0, 0.0, -ss, 0.0, cs);
        a = time * 0.4; cs = cos(a); ss = sin(a);
        mat3 r2 = mat3(cs, ss, 0.0, -ss, cs, 0.0, 0.0, 0.0, 1.0);
        vec3 p = vec3(0.0, 0.0, -4.0 + sin(time * 0.8) * 0.5);
        vec3 dir = normalize(vec3(uv * (sin(time * 2.1) * 0.3 + 0.5), 1.0 + fakeAudio(uv.y * 0.5) - length(uv)));
        p = r1 * r2 * p;
        dir = r1 * r2 * dir;
        float d = 1e10;
        for (int i = 0; i < 40; i++) {
          vec3 q = p;
          q = abs(r1 * r2 * q) - 0.5 - sin(time) * 0.005;
          q = abs(r1 * r2 * q) - 0.25 - sin(time) * 0.005;
          q = abs(r1 * r2 * q) - 0.125 - sin(time) * 0.005;
          d = mix(length(q) - 0.02, max(q.x, max(q.y, q.z)) - 0.02, sin(time) * 0.5 + 0.5);
          p += d * dir;
        }
        vec3 col = vec3(0.5 + d * 0.5);
        col -= length(uv);
        col += mix(vec3(0.1, 0.4, 0.9), vec3(0.9, 0.7, 0.2), uv.y + 0.5);
        return col * (0.7 + fakeAudio(0.1) * 0.4);
      }

      // ===== 32: GAMEBOY STYLE =====
      vec3 gameboyStyle(vec2 uv, float time) {
        vec2 res = vec2(60.0, 60.0 * uResolution.y / uResolution.x);
        vec3 col = vec3(131.0, 145.0, 0.0) / 255.0;
        vec2 p = uv * 0.5 + 0.5;
        if (p.x > 0.03 && p.x < 0.97) {
          p.x = clamp((p.x - 0.03) / 0.94, 0.0, 1.0);
          vec2 iuv = floor(p * res) / res;
          float f = 1.0 - abs(-1.0 + 2.0 * fract(p.x * res.x));
          float g = 1.0 - abs(-1.0 + 2.0 * fract(p.y * res.y));
          float fft = pow(fakeAudio(iuv.x), 2.0) * 0.8;
          if (iuv.y < fft) {
            if (f > 0.1 && g > 0.1) col = vec3(40.0, 44.0, 4.0) / 255.0;
            if (f > 0.5 && g > 0.5) col = vec3(74.0, 82.0, 4.0) / 255.0;
          }
          float wave = fakeAudio(iuv.x * 0.5);
          if (abs(iuv.y - wave) <= 1.0 / res.y) col = vec3(185.0, 200.0, 90.0) / 255.0;
        } else {
          float g = 1.0 - abs(-1.0 + 2.0 * fract(p.y * res.y * 1.5));
          float f = 1.0 - abs(-1.0 + 2.0 * fract(p.x * res.x + 0.5 * floor(p.y * res.y * 1.5)));
          if (g < 0.15 || f < 0.15) col = vec3(40.0, 44.0, 4.0) / 255.0;
        }
        return col;
      }

      // ===== 33: ELECTRIC STORM =====
      vec3 electricStorm(vec2 uv, float time) {
        vec3 col = vec3(0.0);
        for (float i = 0.0; i < 8.0; i++) {
          float t = time + i * 0.5;
          vec2 p = uv;
          p.y += sin(p.x * 10.0 + t * 3.0 + i) * 0.1 * fakeAudio(i * 0.1);
          p.x += cos(p.y * 8.0 + t * 2.0 + i) * 0.1;
          float d = abs(p.y - sin(p.x * 5.0 + t + i * 2.0) * 0.3);
          float glow = 0.01 / (d + 0.01);
          col += hsv2rgb(vec3(i * 0.1 + time * 0.05, 0.8, glow * 0.3));
        }
        return col;
      }

      // ===== 34: VORTEX =====
      vec3 vortex(vec2 uv, float time) {
        float a = atan(uv.y, uv.x);
        float r = length(uv);
        float spiral = a + r * 5.0 - time * 2.0;
        float v = sin(spiral * 5.0) * 0.5 + 0.5;
        v *= smoothstep(1.0, 0.0, r);
        vec3 col = hsv2rgb(vec3(spiral * 0.1 + time * 0.1, 0.8, v));
        col += vec3(0.1, 0.05, 0.15) * (1.0 - r);
        return col;
      }

      // ===== 35: NEON GRID =====
      vec3 neonGrid(vec2 uv, float time) {
        vec2 p = uv * 5.0;
        p.y -= time;
        vec2 id = floor(p);
        vec2 gv = fract(p) - 0.5;
        float d = min(abs(gv.x), abs(gv.y));
        float glow = 0.02 / (d + 0.02);
        float pulse = fakeAudio(abs(id.x) * 0.1) * fakeAudio(abs(id.y) * 0.1);
        vec3 col = hsv2rgb(vec3(id.x * 0.1 + id.y * 0.05 + time * 0.1, 0.8, glow * pulse));
        col *= 1.0 - length(uv) * 0.3;
        return col;
      }

      // ===== 36: MATRIX RAIN =====
      vec3 matrixRain(vec2 uv, float time) {
        vec3 col = vec3(0.0);
        float columns = 30.0;
        vec2 p = uv;
        p.x = floor(p.x * columns) / columns;
        float speed = hash(p.x * 100.0) * 0.5 + 0.5;
        float offset = hash(p.x * 200.0);
        float y = fract(p.y * 0.5 - time * speed + offset);
        float brightness = smoothstep(0.0, 0.3, y) * smoothstep(1.0, 0.5, y);
        float charFlicker = step(0.5, hash(floor(time * 10.0 + p.x * 50.0 + p.y * 100.0)));
        col = vec3(0.0, brightness * (0.5 + charFlicker * 0.5), 0.0);
        col *= 1.0 - length(uv) * 0.3;
        return col;
      }

      // ===== 37: FIRE =====
      vec3 fire(vec2 uv, float time) {
        vec2 p = uv;
        p.y += 0.5;
        float n = 0.0;
        for (float i = 1.0; i < 6.0; i++) {
          float t = time * (1.0 + i * 0.2);
          n += noise(p * i * 3.0 + vec2(0.0, -t * 2.0)) / i;
        }
        n = pow(n * (1.0 - p.y), 2.0);
        vec3 col = vec3(n * 2.0, n * n * 1.5, n * n * n);
        col *= smoothstep(-0.5, 0.5, -uv.y);
        return col;
      }

      // ===== 38: AURORA =====
      vec3 aurora(vec2 uv, float time) {
        vec3 col = vec3(0.0);
        for (float i = 0.0; i < 5.0; i++) {
          float t = time * 0.5 + i * 0.3;
          float y = uv.y + sin(uv.x * 3.0 + t) * 0.2 + sin(uv.x * 7.0 + t * 1.3) * 0.1;
          y += i * 0.15 - 0.3;
          float band = smoothstep(0.1, 0.0, abs(y)) * (0.5 + 0.5 * sin(uv.x * 20.0 + t * 5.0));
          vec3 auroraCol = hsv2rgb(vec3(0.3 + i * 0.1 + sin(t) * 0.1, 0.8, band));
          col += auroraCol;
        }
        col *= 1.0 + uv.y * 0.5;
        return col;
      }

      // ===== 39: WORMHOLE =====
      vec3 wormhole(vec2 uv, float time) {
        float a = atan(uv.y, uv.x);
        float r = length(uv);
        float warp = 1.0 / (r + 0.1) + time;
        float twist = a * 3.0 + warp * 2.0;
        float v = sin(twist) * 0.5 + 0.5;
        v *= sin(warp * 10.0) * 0.5 + 0.5;
        vec3 col = hsv2rgb(vec3(warp * 0.1 + a * 0.1, 0.7, v));
        col *= smoothstep(0.0, 0.2, r);
        col += vec3(0.1, 0.05, 0.2) * (1.0 - r);
        return col;
      }

      // ===== 40: HEXAGONS =====
      vec3 hexagons(vec2 uv, float time) {
        vec2 p = uv * 5.0;
        vec2 r = vec2(1.0, 1.73);
        vec2 h = r * 0.5;
        vec2 a = mod(p, r) - h;
        vec2 b = mod(p - h, r) - h;
        vec2 gv = length(a) < length(b) ? a : b;
        float d = max(abs(gv.x), dot(abs(gv), vec2(0.5, 0.866)));
        d = 0.5 - d;
        float glow = smoothstep(0.0, 0.1, d);
        float edge = smoothstep(0.05, 0.0, abs(d - 0.02));
        vec2 id = floor(p / r);
        float pulse = fakeAudio(hash2(id) * 0.5) * glow;
        vec3 col = hsv2rgb(vec3(hash2(id) + time * 0.1, 0.7, pulse));
        col += vec3(0.5, 0.7, 1.0) * edge * 0.5;
        return col;
      }

      // ===== 41: BUBBLES =====
      vec3 bubbles(vec2 uv, float time) {
        vec3 col = vec3(0.02, 0.05, 0.1);
        for (float i = 0.0; i < 15.0; i++) {
          vec2 pos = vec2(sin(i * 1.3 + time * 0.3) * 0.6, fract(i * 0.17 - time * 0.2) * 2.0 - 1.0);
          float size = 0.05 + sin(i) * 0.03;
          float d = length(uv - pos) - size;
          float glow = 0.01 / (d * d + 0.01);
          float highlight = smoothstep(size * 0.5, 0.0, length(uv - pos - vec2(size * 0.3)));
          col += vec3(0.2, 0.5, 0.8) * glow * 0.1;
          col += vec3(1.0) * highlight * 0.5;
        }
        return col;
      }

      // ===== 42: LIGHTNING =====
      vec3 lightning(vec2 uv, float time) {
        vec3 col = vec3(0.01, 0.0, 0.02);
        for (float i = 0.0; i < 5.0; i++) {
          float t = time + i * 0.7;
          vec2 p = uv;
          float x = 0.0;
          for (float j = 1.0; j < 8.0; j++) {
            x += sin(p.y * j * 3.0 + t * (j + 1.0) + i) / j;
          }
          x *= 0.3;
          float d = abs(p.x - x);
          float bolt = 0.003 / (d + 0.003);
          float flash = pow(sin(t * 10.0) * 0.5 + 0.5, 10.0);
          col += vec3(0.5, 0.6, 1.0) * bolt * (0.3 + flash * 0.7);
        }
        return col;
      }

      // ===== 43: KALEIDOSCOPE 2D =====
      vec3 kaleidoscope2D(vec2 uv, float time) {
        float a = atan(uv.y, uv.x);
        float r = length(uv);
        float segments = 8.0;
        a = mod(a, PI * 2.0 / segments);
        a = abs(a - PI / segments);
        vec2 p = vec2(cos(a), sin(a)) * r;
        p *= rot(time * 0.2);
        float pattern = sin(p.x * 10.0 + time) * sin(p.y * 10.0 + time);
        pattern += sin(length(p) * 15.0 - time * 2.0);
        vec3 col = hsv2rgb(vec3(pattern * 0.2 + time * 0.1, 0.8, 0.5 + pattern * 0.5));
        col *= 1.0 - r * 0.5;
        return col;
      }

      // ===== 44: STARFIELD =====
      vec3 starfield(vec2 uv, float time) {
        vec3 col = vec3(0.0);
        for (float i = 0.0; i < 4.0; i++) {
          vec2 p = uv * (1.0 + i * 0.5);
          p += vec2(time * 0.1 * (i + 1.0), 0.0);
          vec2 id = floor(p * 20.0);
          vec2 gv = fract(p * 20.0) - 0.5;
          float h = hash2(id + i * 100.0);
          if (h > 0.9) {
            float star = 0.02 / (length(gv) + 0.02);
            star *= sin(time * 5.0 + h * 100.0) * 0.3 + 0.7;
            col += vec3(star) * (1.0 - i * 0.2);
          }
        }
        col += vec3(0.0, 0.0, 0.02);
        return col;
      }

      // ===== 45: LIQUID METAL =====
      vec3 liquidMetal(vec2 uv, float time) {
        vec2 p = uv * 3.0;
        float n = 0.0;
        for (float i = 1.0; i < 6.0; i++) {
          p += vec2(sin(p.y * i + time), cos(p.x * i + time)) * 0.3 / i;
          n += sin(p.x + p.y) / i;
        }
        n = n * 0.5 + 0.5;
        vec3 col = vec3(0.8, 0.8, 0.9) * n;
        col += vec3(0.2, 0.3, 0.4) * (1.0 - n);
        col *= 0.5 + 0.5 * sin(n * 10.0 + time);
        return col;
      }

      // ===== 46: FRACTAL TREE =====
      vec3 fractalTree(vec2 uv, float time) {
        vec3 col = vec3(0.05, 0.02, 0.0);
        vec2 p = uv;
        p.y += 0.5;
        float angle = 0.0;
        float len = 0.3;
        vec2 pos = vec2(0.0, -0.5);
        for (int i = 0; i < 10; i++) {
          float d = abs(p.x - pos.x);
          if (p.y > pos.y && p.y < pos.y + len) {
            float trunk = 0.01 / (d + 0.01);
            col += vec3(0.3, 0.2, 0.1) * trunk * 0.5;
          }
          pos.y += len;
          angle += sin(time + float(i)) * 0.5;
          len *= 0.7;
        }
        return col;
      }

      // ===== 47: VORONOI =====
      vec3 voronoi(vec2 uv, float time) {
        vec2 p = uv * 4.0;
        vec2 n = floor(p);
        vec2 f = fract(p);
        float md = 8.0;
        vec2 mr;
        for (int j = -1; j <= 1; j++) {
          for (int i = -1; i <= 1; i++) {
            vec2 g = vec2(float(i), float(j));
            vec2 o = vec2(hash2(n + g), hash2(n + g + 100.0));
            o = 0.5 + 0.5 * sin(time + o * 6.28);
            vec2 r = g + o - f;
            float d = dot(r, r);
            if (d < md) { md = d; mr = r; }
          }
        }
        vec3 col = hsv2rgb(vec3(hash2(n + floor(mr + 0.5)) + time * 0.1, 0.7, 0.9 - md * 0.5));
        col *= 0.5 + 0.5 * smoothstep(0.0, 0.05, md);
        return col;
      }

      // ===== 48: PSYCHEDELIC =====
      vec3 psychedelic(vec2 uv, float time) {
        vec2 p = uv;
        float t = time * 0.5;
        for (int i = 0; i < 5; i++) {
          p = abs(p) / dot(p, p) - vec2(1.0 + sin(t + float(i)) * 0.2);
          p *= rot(t * 0.1);
        }
        float v = length(p);
        vec3 col = hsv2rgb(vec3(v * 0.2 + t * 0.1, 0.9, 1.0 / (1.0 + v * 0.5)));
        return col;
      }

      // ===== 49: ENERGY FIELD =====
      vec3 energyField(vec2 uv, float time) {
        vec3 col = vec3(0.0);
        for (float i = 0.0; i < 6.0; i++) {
          vec2 p = uv;
          float t = time + i * 0.5;
          p *= rot(t * 0.1 * (mod(i, 2.0) * 2.0 - 1.0));
          float r = length(p);
          float a = atan(p.y, p.x);
          float wave = sin(r * 10.0 - t * 2.0 + a * 3.0 + i);
          float glow = 0.02 / (abs(wave) * r + 0.02);
          col += hsv2rgb(vec3(i * 0.15 + t * 0.05, 0.8, glow * 0.3));
        }
        return col;
      }

      // ===== SCENE MAPPING =====
      vec2 map3D(vec3 p, float time, int mode) {
        float loopTime = 5.0, phase = fract(time / loopTime);
        float zoomScale = exp2(phase * 1.5);
        vec3 zp = p * zoomScale;
        zp.xy *= rot(time * 0.1); zp.xz *= rot(time * 0.06);
        zp += vec3(0.5, 0.3, 0.0) * phase;
        vec2 d;
        if (mode == 0) { d = mandelbulb(zp, 8.0 + sin(time * 0.2)); }
        else if (mode == 1) { d = mandelbox(zp); }
        else if (mode == 2) { d = mengerSponge(zp); }
        else if (mode == 3) { d = sierpinski(zp); }
        else if (mode == 4) { d = kaleidoscope(zp, time); }
        else if (mode == 5) { d = organicHybrid(zp, time); }
        else if (mode == 6) { d = fractalLand(zp, time); }
        else if (mode == 15) { d = hotRocks(zp, time); }
        else if (mode == 16) { d = serverRoom(zp, time); }
        else if (mode == 17) { d = remnantX(zp, time); }
        else if (mode == 18) { d = kaliSet(zp, time); }
        else { d = generators(zp, time); }
        d.x /= zoomScale;
        return d;
      }

      float raymarch(vec3 ro, vec3 rd, float time, int mode, out float trap) {
        float d = 0.0; trap = 1.0;
        for (int i = 0; i < MAX_STEPS; i++) {
          vec2 h = map3D(ro + rd * d, time, mode);
          trap = min(trap, h.y);
          if (h.x < SURF_DIST) return d;
          if (d > MAX_DIST) break;
          d += h.x * 0.7;
        }
        return d;
      }

      vec3 getNormal(vec3 p, float time, int mode) {
        vec2 e = vec2(0.002, 0.0);
        float d = map3D(p, time, mode).x;
        return normalize(vec3(d - map3D(p - e.xyy, time, mode).x,
                              d - map3D(p - e.yxy, time, mode).x,
                              d - map3D(p - e.yyx, time, mode).x));
      }

      void main() {
        vec2 uv = vUV;
        uv.x *= uResolution.x / uResolution.y;
        float time = uTime * 0.5;
        int mode = uMode;

        vec3 col;

        // 2D effects (7-14, 20-49)
        if (mode == 7) { col = galaxyNebula(uv, time); }
        else if (mode == 8) { col = infiniteTunnel(uv, time); }
        else if (mode == 9) { col = plasmaFractal(uv, time); }
        else if (mode == 10) { col = circuits(uv, time); }
        else if (mode == 11) { col = metaballs(uv, time); }
        else if (mode == 12) { col = volumetricLines(uv, time); }
        else if (mode == 13) { col = discoTunnel(uv, time); }
        else if (mode == 14) { col = speedDrive(uv, time); }
        else if (mode == 20) { col = simplicityGalaxy(uv, time); }
        else if (mode == 21) { col = ribbons(uv, time); }
        else if (mode == 22) { col = twistedRings(uv, time); }
        else if (mode == 23) { col = wavesRemix(uv, time); }
        else if (mode == 24) { col = dancingMetalights(uv, time); }
        else if (mode == 25) { col = ioBlocks(uv, time); }
        else if (mode == 26) { col = beatingCircles(uv, time); }
        else if (mode == 27) { col = circleWave(uv, time); }
        else if (mode == 28) { col = soundflower(uv, time); }
        else if (mode == 29) { col = polarBeats(uv, time); }
        else if (mode == 30) { col = undulantSpectre(uv, time); }
        else if (mode == 31) { col = revision2015(uv, time); }
        else if (mode == 32) { col = gameboyStyle(uv, time); }
        else if (mode == 33) { col = electricStorm(uv, time); }
        else if (mode == 34) { col = vortex(uv, time); }
        else if (mode == 35) { col = neonGrid(uv, time); }
        else if (mode == 36) { col = matrixRain(uv, time); }
        else if (mode == 37) { col = fire(uv, time); }
        else if (mode == 38) { col = aurora(uv, time); }
        else if (mode == 39) { col = wormhole(uv, time); }
        else if (mode == 40) { col = hexagons(uv, time); }
        else if (mode == 41) { col = bubbles(uv, time); }
        else if (mode == 42) { col = lightning(uv, time); }
        else if (mode == 43) { col = kaleidoscope2D(uv, time); }
        else if (mode == 44) { col = starfield(uv, time); }
        else if (mode == 45) { col = liquidMetal(uv, time); }
        else if (mode == 46) { col = fractalTree(uv, time); }
        else if (mode == 47) { col = voronoi(uv, time); }
        else if (mode == 48) { col = psychedelic(uv, time); }
        else if (mode == 49) { col = energyField(uv, time); }
        else {
          // 3D raymarched (0-6, 15-19)
          vec3 ro = vec3(0.0, 0.0, -3.5), rd = normalize(vec3(uv, 2.0));
          ro.xy += vec2(sin(time * 0.3), cos(time * 0.2)) * 0.1;
          rd.xy *= rot(sin(time * 0.1) * 0.05);

          float trap;
          float d = raymarch(ro, rd, time, mode, trap);
          col = vec3(0.02, 0.01, 0.03);

          if (d < MAX_DIST) {
            vec3 p = ro + rd * d, n = getNormal(p, time, mode);
            vec3 l1 = normalize(vec3(1.0, 1.0, -0.5));
            float diff = max(dot(n, l1), 0.0);
            float spec = pow(max(dot(reflect(rd, n), l1), 0.0), 32.0);
            float fres = pow(1.0 - abs(dot(rd, n)), 3.0);
            float hue = trap * 0.5 + time * 0.05;
            vec3 baseCol = hsv2rgb(vec3(hue, 0.7, 0.9));
            col = baseCol * (diff * 0.7 + 0.2) + hsv2rgb(vec3(hue + 0.3, 0.6, 1.0)) * fres * 0.5 + vec3(1.0) * spec * 0.3;
            col = mix(col, vec3(0.02, 0.01, 0.04), 1.0 - exp(-d * 0.15));
            col *= 0.5 + 0.5 * trap;
          }
          col += vec3(0.1, 0.05, 0.15) * exp(-d * 0.3);
        }

        col *= 1.0 - dot(vUV, vUV) * 0.2;
        col = pow(col / (1.0 + col), vec3(0.9));
        gl_FragColor = vec4(col, 1.0);
      }
    `;

    const createShader = (type, source) => {
      const shader = gl.createShader(type);
      gl.shaderSource(shader, source);
      gl.compileShader(shader);
      if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) {
        console.error('Shader error:', gl.getShaderInfoLog(shader));
        return null;
      }
      return shader;
    };

    const initWebGL = () => {
      const canvas = canvasRef.value;
      if (!canvas) return false;
      gl = canvas.getContext('webgl') || canvas.getContext('experimental-webgl');
      if (!gl) return false;
      const vs = createShader(gl.VERTEX_SHADER, vertexShader);
      const fs = createShader(gl.FRAGMENT_SHADER, fragmentShader);
      if (!vs || !fs) return false;
      program = gl.createProgram();
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
      return true;
    };

    const resize = () => {
      const canvas = canvasRef.value;
      if (!canvas) return;
      canvas.width = canvas.clientWidth;
      canvas.height = canvas.clientHeight;
      if (gl) gl.viewport(0, 0, canvas.width, canvas.height);
    };

    const render = () => {
      if (!gl || !program) return;
      gl.useProgram(program);
      gl.uniform1f(gl.getUniformLocation(program, 'uTime'), (Date.now() - startTime) / 1000);
      gl.uniform2f(gl.getUniformLocation(program, 'uResolution'), canvasRef.value.width, canvasRef.value.height);
      gl.uniform1i(gl.getUniformLocation(program, 'uMode'), props.mode);
      gl.drawArrays(gl.TRIANGLES, 0, 6);
      animationId = requestAnimationFrame(render);
    };

    onMounted(() => {
      if (initWebGL()) { resize(); window.addEventListener('resize', resize); render(); }
    });

    onUnmounted(() => {
      if (animationId) cancelAnimationFrame(animationId);
      window.removeEventListener('resize', resize);
    });

    return () => h('canvas', { ref: canvasRef, style: { width: '100%', height: '100%', display: 'block' } });
  }
};
