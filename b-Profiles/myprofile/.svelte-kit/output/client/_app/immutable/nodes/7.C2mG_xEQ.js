import{a as O,f as M}from"../chunks/nFcBeTHs.js";import{i as ee}from"../chunks/CP4-xudJ.js";import{ac as te,ad as re,u as ae,r as oe,O as ie,H as P,ae as se,z as V,aa as b,f as ne,A as G,a8 as H,a,B as J,a9 as D,b as y,C as S,F as le,G as _,E as X,m as ce}from"../chunks/Du0EjBT8.js";import{b as q}from"../chunks/D_d1iZD_.js";import{d as de,s as ue}from"../chunks/poDlVxfP.js";import{i as me}from"../chunks/D3pXm4t4.js";import{e as fe,i as ve,r as he,a as pe}from"../chunks/D_llxttu.js";import{n as ye}from"../chunks/ecDIlGAw.js";function ge(t,f,i=f){var e=new WeakSet;te(t,"input",async c=>{var d=c?t.defaultValue:t.value;if(d=W(t)?Y(d):d,i(d),P!==null&&e.add(P),await re(),d!==(d=f())){var h=t.selectionStart,u=t.selectionEnd,g=t.value.length;if(t.value=d??"",u!==null){var p=t.value.length;h===u&&u===g&&p>g?(t.selectionStart=p,t.selectionEnd=p):(t.selectionStart=h,t.selectionEnd=Math.min(u,p))}}}),(ie&&t.defaultValue!==t.value||ae(f)==null&&t.value)&&(i(W(t)?Y(t.value):t.value),P!==null&&e.add(P)),oe(()=>{var c=f();if(t===document.activeElement){var d=se??P;if(e.has(d))return}W(t)&&c===Y(t.value)||t.type==="date"&&!c&&!t.value||c!==t.value&&(t.value=c??"")})}function W(t){var f=t.type;return f==="number"||f==="range"}function Y(t){return t===""?null:+t}var we=M('<div class="terminal-loading"><span class="blink">Scanning your digital footprint...</span></div>'),be=M("<div> </div>"),Se=M('<div class="terminal-ai-container"><div class="terminal-header"><div class="terminal-dots"><span class="dot red"></span> <span class="dot yellow"></span> <span class="dot green"></span></div> <span class="terminal-title">AI_TERMINAL // VISITOR ANALYSIS</span></div> <div class="terminal-body"><!> <!> <div class="terminal-input-line"><span class="prompt">visitor@dnm:~$</span> <input type="text" class="terminal-input" placeholder="Type something..."/> <span class="cursor blink"></span></div></div></div>');function _e(t,f){V(f,!0);let i=b(ne([])),e=b(""),c=b(!1),d=b(!0),h=b(null),u=b(null);const g=["Why do programmers prefer dark mode? Because light attracts bugs!","A SQL query walks into a bar, walks up to two tables and asks... 'Can I join you?'","Why do Java developers wear glasses? Because they don't C#!","There are only 10 types of people in the world: those who understand binary and those who don't.","Why was the JavaScript developer sad? Because he didn't Node how to Express himself!","A programmer's wife tells him: 'Go to the store and buy a loaf of bread. If they have eggs, buy a dozen.' He comes back with 12 loaves of bread.","Why do programmers hate nature? It has too many bugs!","!false - It's funny because it's true!","How many programmers does it take to change a light bulb? None, that's a hardware problem!","Why did the developer go broke? Because he used up all his cache!","What's a programmer's favorite hangout place? Foo Bar!","Why do programmers always mix up Halloween and Christmas? Because Oct 31 == Dec 25!","Algorithm: A word used by programmers when they don't want to explain what they did.","There's no place like 127.0.0.1","I would tell you a UDP joke, but you might not get it.","A TCP packet walks into a bar and says 'I'd like a beer.' The bartender replies 'You want a beer?' The TCP packet says 'Yes, I want a beer.'","Why do Python programmers have low self-esteem? They're constantly comparing their self to others.","The best thing about a Boolean is that even if you're wrong, you're only off by a bit.","Debugging: Being the detective in a crime movie where you are also the murderer.","It works on my machine! Then we'll ship your machine."];function p(){const r=navigator.userAgent;return r.includes("Chrome")?"Chrome":r.includes("Firefox")?"Firefox":r.includes("Safari")?"Safari":r.includes("Edge")?"Edge":"Unknown"}function E(){const r=navigator.platform;return r.includes("Win")?"Windows":r.includes("Mac")?"macOS":r.includes("Linux")?"Linux":"Unknown"}async function F(){try{let r=parseInt(localStorage.getItem("visitCount")||"0")+1;localStorage.setItem("visitCount",r.toString()),y(u,{city:"Unknown",country:"Unknown",browser:p(),os:E(),screenSize:`${window.screen.width}x${window.screen.height}`,language:navigator.language,visitCount:r,timezone:Intl.DateTimeFormat().resolvedOptions().timeZone},!0),a(u).city="Your City",a(u).country="Your Country"}catch{}y(d,!1)}function U(){if(!a(u))return[];const{city:r,country:n,browser:l,os:k,screenSize:$,language:j,visitCount:z,timezone:N}=a(u),K=["> INITIALIZING AI PERSONALITY MODULE...","> SCANNING VISITOR DATA...","> READING COOKIES & ANALYTICS...","",`Hello there, mysterious visitor from ${r}, ${n}!`,""],Q=[`I see you're using ${l} on ${k}... Bold choice! ${l==="Chrome"?"Did you enjoy feeding all your RAM to Google today?":l==="Firefox"?"Did the fox tell you any secrets?":l==="Safari"?"Did Apple approve this visit?":"Did your browser survive the journey here?"}`,"",`Hmm, your screen is ${$}... ${parseInt($.split("x")[0])>1920?"Fancy display! Are you a designer or just really into spreadsheets?":"Cozy screen! Perfect for coding in a coffee shop, right?"}`,"",`Your timezone says ${N}... ${N.includes("America")?"Ah, coding at weird hours I see!":N.includes("Europe")?"European efficiency! Or European procrastination?":N.includes("Asia")?"The future is NOW where you are!":"Time is just a construct anyway!"}`,"",`This is visit #${z}. ${z===1?"First time here? Don't worry, I only judge a little.":z<5?"Back again? I'm flattered!":"Visit #"+z+"?! Are you stalking me or should I be worried?"}`,"",`Your browser language is '${j}'... ${j.startsWith("en")?"English speaker! Or at least your browser thinks so.":"Ooh, international visitor! Fancy!"}`,""],Z=["> ANALYTICS REPORT:","","Oh, and I'm also tracking your every move with Matomo analytics!","Every click, every scroll, every hover... I see it all.","","Your session has a unique visitor ID stored in cookies.","Don't worry, it's self-hosted - your data stays with me, not Big Tech!","","I can see: page views, time spent, scroll depth, button clicks...","Basically, I know you read this far. Impressive attention span!","","> FUN FACT: This site uses first-party cookies only.","> No third-party trackers stalking you across the web!","",`Your referrer? ${typeof document<"u"&&document.referrer?`You came from: ${document.referrer}`:"Direct visit - you typed the URL yourself or used a bookmark!"}`,"","> This demo shows how much data websites can collect about you.","> All analytics here are privacy-respecting and GDPR compliant.","> Type anything below and I'll respond with programmer humor!",""];return[...K,...Q,...Z]}async function o(r,n){y(c,!0);let l="";for(const k of r)l+=k,a(i)[a(i).length-1]={type:n,text:l},await new Promise($=>setTimeout($,15)),L();y(c,!1)}function m(r,n){y(i,[...a(i),{type:n,text:r}],!0),L()}async function v(r){for(const n of r)n===""?m("","ai"):n.startsWith(">")?(m("","system"),await o(n,"system")):(m("","ai"),await o(n,"ai")),await new Promise(l=>setTimeout(l,100))}async function s(){if(!a(e).trim()||a(c))return;const r=a(e);m(`$ ${r}`,"user"),y(e,""),await new Promise(l=>setTimeout(l,300));const n=g[Math.floor(Math.random()*g.length)];m("","ai"),await o(`> ${n}`,"ai")}function L(){a(h)&&(a(h).scrollTop=a(h).scrollHeight)}function C(r){r.key==="Enter"&&s()}G(async()=>{await F();const r=U();await v(r)});var A=Se(),I=D(S(A),2),w=S(I);{var B=r=>{var n=we();O(r,n)};me(w,r=>{a(d)&&r(B)})}var T=D(w,2);fe(T,17,()=>a(i),ve,(r,n)=>{var l=be(),k=S(l,!0);_(l),H(()=>{pe(l,1,`terminal-line ${a(n).type??""}`),ue(k,a(n).text)}),O(r,l)});var x=D(T,2),R=D(S(x),2);he(R),R.__keyup=C,le(2),_(x),_(I),q(I,r=>y(h,r),()=>a(h)),_(A),H(()=>R.disabled=a(c)),ge(R,()=>a(e),r=>y(e,r)),O(t,A),J()}de(["keyup"]);var Ae=M('<div class="syslog-page svelte-rfjvxy"><canvas class="shader-bg svelte-rfjvxy"></canvas> <div class="terminal-overlay svelte-rfjvxy"><!></div></div>');function Le(t,f){V(f,!1),G(()=>{ye.setPage("syslog")});let i=ce(),e=null,c;const d=`
    attribute vec2 a_position;
    void main() {
      gl_Position = vec4(a_position, 0.0, 1.0);
    }
  `,h=`
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
  `;function u(o,m,v){const s=o.createShader(m);return s?(o.shaderSource(s,v),o.compileShader(s),o.getShaderParameter(s,o.COMPILE_STATUS)?s:(console.error("Shader error:",o.getShaderInfoLog(s)),o.deleteShader(s),null)):null}function g(o,m,v){const s=o.createProgram();return!s||(o.attachShader(s,m),o.attachShader(s,v),o.linkProgram(s),!o.getProgramParameter(s,o.LINK_STATUS))?null:s}G(()=>{if(e=a(i).getContext("webgl",{antialias:!1,alpha:!1,powerPreference:"high-performance"}),!e)return;const o=u(e,e.VERTEX_SHADER,d),m=u(e,e.FRAGMENT_SHADER,h);if(!o||!m)return;const v=g(e,o,m);if(!v)return;e.useProgram(v);const s=new Float32Array([-1,-1,1,-1,-1,1,1,1]),L=e.createBuffer();e.bindBuffer(e.ARRAY_BUFFER,L),e.bufferData(e.ARRAY_BUFFER,s,e.STATIC_DRAW);const C=e.getAttribLocation(v,"a_position");e.enableVertexAttribArray(C),e.vertexAttribPointer(C,2,e.FLOAT,!1,0,0);const A=e.getUniformLocation(v,"u_time"),I=e.getUniformLocation(v,"u_resolution"),w=()=>{const x=Math.min(window.devicePixelRatio,1.25);X(i,a(i).width=window.innerWidth*x),X(i,a(i).height=window.innerHeight*x),e.viewport(0,0,a(i).width,a(i).height)};w(),window.addEventListener("resize",w);const B=performance.now(),T=()=>{e&&(e.uniform1f(A,(performance.now()-B)/1e3),e.uniform2f(I,a(i).width,a(i).height),e.drawArrays(e.TRIANGLE_STRIP,0,4),c=requestAnimationFrame(T))};return T(),()=>{cancelAnimationFrame(c),window.removeEventListener("resize",w)}}),ee();var p=Ae(),E=S(p);q(E,o=>y(i,o),()=>a(i));var F=D(E,2),U=S(F);_e(U,{}),_(F),_(p),O(t,p),J()}export{Le as component};
