import{a as P,f as y}from"../chunks/nFcBeTHs.js";import{i as F}from"../chunks/CP4-xudJ.js";import{z as E,A as u,B as L,C as T,a as i,E as v,b as C,F as B,G as I,m as M}from"../chunks/Du0EjBT8.js";import{b as U}from"../chunks/D_d1iZD_.js";import{n as q}from"../chunks/ecDIlGAw.js";var D=y('<div class="memory-page svelte-1czmmpc"><canvas class="shader-bg svelte-1czmmpc"></canvas> <div class="content-overlay svelte-1czmmpc"><h1 class="page-title mono svelte-1czmmpc">MEMORY_BANK</h1> <p class="page-subtitle svelte-1czmmpc">Photo gallery and visual memories</p></div></div>');function Y(h,g){E(g,!1),u(()=>{q.setPage("memory")});let r=M(),e=null,l;const b=`
    attribute vec2 a_position;
    void main() {
      gl_Position = vec4(a_position, 0.0, 1.0);
    }
  `,_=`
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
  `;function p(t,n,a){const o=t.createShader(n);return o?(t.shaderSource(o,a),t.compileShader(o),t.getShaderParameter(o,t.COMPILE_STATUS)?o:(console.error("Shader error:",t.getShaderInfoLog(o)),t.deleteShader(o),null)):null}function x(t,n,a){const o=t.createProgram();return!o||(t.attachShader(o,n),t.attachShader(o,a),t.linkProgram(o),!t.getProgramParameter(o,t.LINK_STATUS))?null:o}u(()=>{if(e=i(r).getContext("webgl",{antialias:!1,alpha:!1}),!e)return;const t=p(e,e.VERTEX_SHADER,b),n=p(e,e.FRAGMENT_SHADER,_);if(!t||!n)return;const a=x(e,t,n);if(!a)return;e.useProgram(a);const o=new Float32Array([-1,-1,1,-1,-1,1,1,1]),S=e.createBuffer();e.bindBuffer(e.ARRAY_BUFFER,S),e.bufferData(e.ARRAY_BUFFER,o,e.STATIC_DRAW);const f=e.getAttribLocation(a,"a_position");e.enableVertexAttribArray(f),e.vertexAttribPointer(f,2,e.FLOAT,!1,0,0);const w=e.getUniformLocation(a,"u_time"),z=e.getUniformLocation(a,"u_resolution"),c=()=>{const d=Math.min(window.devicePixelRatio,1.5);v(r,i(r).width=window.innerWidth*d),v(r,i(r).height=window.innerHeight*d),e.viewport(0,0,i(r).width,i(r).height)};c(),window.addEventListener("resize",c);const R=performance.now(),m=()=>{e&&(e.uniform1f(w,(performance.now()-R)/1e3),e.uniform2f(z,i(r).width,i(r).height),e.drawArrays(e.TRIANGLE_STRIP,0,4),l=requestAnimationFrame(m))};return m(),()=>{cancelAnimationFrame(l),window.removeEventListener("resize",c)}}),F();var s=D(),A=T(s);U(A,t=>C(r,t),()=>i(r)),B(2),I(s),P(h,s),L()}export{Y as component};
