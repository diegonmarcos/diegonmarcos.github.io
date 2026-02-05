import{a as P,f as k}from"../chunks/CSeKS16j.js";import{i as R}from"../chunks/BomfAg22.js";import{z,A as v,B as E,C as I,a as n,E as h,b as T,F,G,m as M}from"../chunks/DeXqAH--.js";import{b as C}from"../chunks/CCRZcMTb.js";import{n as U}from"../chunks/CSUVrCSR.js";var B=k('<div class="geo-page svelte-19ioyby"><canvas class="shader-bg svelte-19ioyby"></canvas> <div class="content-overlay svelte-19ioyby"><h1 class="page-title mono svelte-19ioyby">GEO_TAG</h1> <p class="page-subtitle svelte-19ioyby">Location data and geographic information</p></div></div>');function q(u,g){z(g,!1),v(()=>{U.setPage("geo")});let o=M(),e=null,c;const A=`
    attribute vec2 a_position;
    void main() {
      gl_Position = vec4(a_position, 0.0, 1.0);
    }
  `,b=`
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
  `;function f(t,i,a){const r=t.createShader(i);return r?(t.shaderSource(r,a),t.compileShader(r),t.getShaderParameter(r,t.COMPILE_STATUS)?r:(console.error("Shader error:",t.getShaderInfoLog(r)),t.deleteShader(r),null)):null}function _(t,i,a){const r=t.createProgram();return!r||(t.attachShader(r,i),t.attachShader(r,a),t.linkProgram(r),!t.getProgramParameter(r,t.LINK_STATUS))?null:r}v(()=>{if(e=n(o).getContext("webgl",{antialias:!1,alpha:!1}),!e)return;const t=f(e,e.VERTEX_SHADER,A),i=f(e,e.FRAGMENT_SHADER,b);if(!t||!i)return;const a=_(e,t,i);if(!a)return;e.useProgram(a);const r=new Float32Array([-1,-1,1,-1,-1,1,1,1]),w=e.createBuffer();e.bindBuffer(e.ARRAY_BUFFER,w),e.bufferData(e.ARRAY_BUFFER,r,e.STATIC_DRAW);const d=e.getAttribLocation(a,"a_position");e.enableVertexAttribArray(d),e.vertexAttribPointer(d,2,e.FLOAT,!1,0,0);const L=e.getUniformLocation(a,"u_time"),y=e.getUniformLocation(a,"u_resolution"),l=()=>{const p=Math.min(window.devicePixelRatio,1.5);h(o,n(o).width=window.innerWidth*p),h(o,n(o).height=window.innerHeight*p),e.viewport(0,0,n(o).width,n(o).height)};l(),window.addEventListener("resize",l);const x=performance.now(),m=()=>{e&&(e.uniform1f(L,(performance.now()-x)/1e3),e.uniform2f(y,n(o).width,n(o).height),e.drawArrays(e.TRIANGLE_STRIP,0,4),c=requestAnimationFrame(m))};return m(),()=>{cancelAnimationFrame(c),window.removeEventListener("resize",l)}}),R();var s=B(),S=I(s);C(S,t=>T(o,t),()=>n(o)),F(2),G(s),P(u,s),E()}export{q as component};
