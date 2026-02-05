import{a as R,f as E}from"../chunks/CSeKS16j.js";import{i as L}from"../chunks/BomfAg22.js";import{z as P,A as h,B as T,C as q,a as i,E as m,b as C,F as z,G as D,m as I}from"../chunks/DeXqAH--.js";import{b as U}from"../chunks/CCRZcMTb.js";import{n as Y}from"../chunks/BUxq1CGj.js";var k=E('<div class="visual-page svelte-qq4fop"><canvas class="shader-bg svelte-qq4fop"></canvas> <div class="content-overlay svelte-qq4fop"><h1 class="page-title mono svelte-qq4fop">VISUAL_FEED</h1> <p class="page-subtitle svelte-qq4fop">Video content and visual media</p></div></div>');function H(d,g){P(g,!1),h(()=>{Y.setPage("visual")});let o=I(),e=null,l;const S=`
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
  `;function f(t,n,a){const r=t.createShader(n);return r?(t.shaderSource(r,a),t.compileShader(r),t.getShaderParameter(r,t.COMPILE_STATUS)?r:(console.error("Shader error:",t.getShaderInfoLog(r)),t.deleteShader(r),null)):null}function b(t,n,a){const r=t.createProgram();return!r||(t.attachShader(r,n),t.attachShader(r,a),t.linkProgram(r),!t.getProgramParameter(r,t.LINK_STATUS))?null:r}h(()=>{if(e=i(o).getContext("webgl",{antialias:!1,alpha:!1}),!e)return;const t=f(e,e.VERTEX_SHADER,S),n=f(e,e.FRAGMENT_SHADER,_);if(!t||!n)return;const a=b(e,t,n);if(!a)return;e.useProgram(a);const r=new Float32Array([-1,-1,1,-1,-1,1,1,1]),y=e.createBuffer();e.bindBuffer(e.ARRAY_BUFFER,y),e.bufferData(e.ARRAY_BUFFER,r,e.STATIC_DRAW);const p=e.getAttribLocation(a,"a_position");e.enableVertexAttribArray(p),e.vertexAttribPointer(p,2,e.FLOAT,!1,0,0);const A=e.getUniformLocation(a,"u_time"),w=e.getUniformLocation(a,"u_resolution"),c=()=>{const v=Math.min(window.devicePixelRatio,1.5);m(o,i(o).width=window.innerWidth*v),m(o,i(o).height=window.innerHeight*v),e.viewport(0,0,i(o).width,i(o).height)};c(),window.addEventListener("resize",c);const F=performance.now(),u=()=>{e&&(e.uniform1f(A,(performance.now()-F)/1e3),e.uniform2f(w,i(o).width,i(o).height),e.drawArrays(e.TRIANGLE_STRIP,0,4),l=requestAnimationFrame(u))};return u(),()=>{cancelAnimationFrame(l),window.removeEventListener("resize",c)}}),L();var s=k(),x=q(s);U(x,t=>C(o,t),()=>i(o)),z(2),D(s),R(d,s),T()}export{H as component};
