import{a as L,f as R}from"../chunks/CSeKS16j.js";import{i as E}from"../chunks/BomfAg22.js";import{z as T,A as v,B as F,C as I,a as n,E as p,b as C,F as H,G as B,m as D}from"../chunks/DeXqAH--.js";import{b as U}from"../chunks/CCRZcMTb.js";import{n as G}from"../chunks/CSUVrCSR.js";var M=R('<div class="bio-page svelte-1r4v5"><canvas class="shader-bg svelte-1r4v5"></canvas> <div class="content-overlay svelte-1r4v5"><h1 class="page-title mono svelte-1r4v5">BIO_METRICS</h1> <p class="page-subtitle svelte-1r4v5">Health data and biometric information</p></div></div>');function Y(h,b){T(b,!1),v(()=>{G.setPage("bio")});let r=D(),e=null,l;const g=`
    attribute vec2 a_position;
    void main() {
      gl_Position = vec4(a_position, 0.0, 1.0);
    }
  `,x=`
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
  `;function f(t,i,o){const a=t.createShader(i);return a?(t.shaderSource(a,o),t.compileShader(a),t.getShaderParameter(a,t.COMPILE_STATUS)?a:(console.error("Shader error:",t.getShaderInfoLog(a)),t.deleteShader(a),null)):null}function _(t,i,o){const a=t.createProgram();return!a||(t.attachShader(a,i),t.attachShader(a,o),t.linkProgram(a),!t.getProgramParameter(a,t.LINK_STATUS))?null:a}v(()=>{if(e=n(r).getContext("webgl",{antialias:!1,alpha:!1}),!e)return;const t=f(e,e.VERTEX_SHADER,g),i=f(e,e.FRAGMENT_SHADER,x);if(!t||!i)return;const o=_(e,t,i);if(!o)return;e.useProgram(o);const a=new Float32Array([-1,-1,1,-1,-1,1,1,1]),S=e.createBuffer();e.bindBuffer(e.ARRAY_BUFFER,S),e.bufferData(e.ARRAY_BUFFER,a,e.STATIC_DRAW);const d=e.getAttribLocation(o,"a_position");e.enableVertexAttribArray(d),e.vertexAttribPointer(d,2,e.FLOAT,!1,0,0);const A=e.getUniformLocation(o,"u_time"),w=e.getUniformLocation(o,"u_resolution"),c=()=>{const u=Math.min(window.devicePixelRatio,1.5);p(r,n(r).width=window.innerWidth*u),p(r,n(r).height=window.innerHeight*u),e.viewport(0,0,n(r).width,n(r).height)};c(),window.addEventListener("resize",c);const P=performance.now(),m=()=>{e&&(e.uniform1f(A,(performance.now()-P)/1e3),e.uniform2f(w,n(r).width,n(r).height),e.drawArrays(e.TRIANGLE_STRIP,0,4),l=requestAnimationFrame(m))};return m(),()=>{cancelAnimationFrame(l),window.removeEventListener("resize",c)}}),E();var s=M(),y=I(s);U(y,t=>C(r,t),()=>n(r)),H(2),B(s),L(h,s),F()}export{Y as component};
