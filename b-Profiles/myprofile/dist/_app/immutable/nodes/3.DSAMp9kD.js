import{a as E,f as L}from"../chunks/CSeKS16j.js";import{i as T}from"../chunks/BomfAg22.js";import{z as F,A as p,B as P,C as q,a as i,E as h,b as z,F as C,G as H,m as I}from"../chunks/DeXqAH--.js";import{b as U}from"../chunks/CCRZcMTb.js";import{n as k}from"../chunks/BUxq1CGj.js";var M=L('<div class="audio-page svelte-8dkqzx"><canvas class="shader-bg svelte-8dkqzx"></canvas> <div class="content-overlay svelte-8dkqzx"><h1 class="page-title mono svelte-8dkqzx">AUDITORY_STREAM</h1> <p class="page-subtitle svelte-8dkqzx">Audio visualization and music data</p></div></div>');function O(v,g){F(g,!1),p(()=>{k.setPage("audio")});let r=I(),e=null,l;const b=`
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
  `;function c(t,n,o){const a=t.createShader(n);return a?(t.shaderSource(a,o),t.compileShader(a),t.getShaderParameter(a,t.COMPILE_STATUS)?a:(console.error("Shader error:",t.getShaderInfoLog(a)),t.deleteShader(a),null)):null}function w(t,n,o){const a=t.createProgram();return!a||(t.attachShader(a,n),t.attachShader(a,o),t.linkProgram(a),!t.getProgramParameter(a,t.LINK_STATUS))?null:a}p(()=>{if(e=i(r).getContext("webgl",{antialias:!1,alpha:!1}),!e)return;const t=c(e,e.VERTEX_SHADER,b),n=c(e,e.FRAGMENT_SHADER,_);if(!t||!n)return;const o=w(e,t,n);if(!o)return;e.useProgram(o);const a=new Float32Array([-1,-1,1,-1,-1,1,1,1]),A=e.createBuffer();e.bindBuffer(e.ARRAY_BUFFER,A),e.bufferData(e.ARRAY_BUFFER,a,e.STATIC_DRAW);const u=e.getAttribLocation(o,"a_position");e.enableVertexAttribArray(u),e.vertexAttribPointer(u,2,e.FLOAT,!1,0,0);const x=e.getUniformLocation(o,"u_time"),R=e.getUniformLocation(o,"u_resolution"),f=()=>{const m=Math.min(window.devicePixelRatio,1.5);h(r,i(r).width=window.innerWidth*m),h(r,i(r).height=window.innerHeight*m),e.viewport(0,0,i(r).width,i(r).height)};f(),window.addEventListener("resize",f);const y=performance.now(),d=()=>{e&&(e.uniform1f(x,(performance.now()-y)/1e3),e.uniform2f(R,i(r).width,i(r).height),e.drawArrays(e.TRIANGLE_STRIP,0,4),l=requestAnimationFrame(d))};return d(),()=>{cancelAnimationFrame(l),window.removeEventListener("resize",f)}}),T();var s=M(),S=q(s);U(S,t=>z(r,t),()=>i(r)),C(2),H(s),E(v,s),P()}export{O as component};
