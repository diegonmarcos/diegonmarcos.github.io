(function(){"use strict";var Mo=document.createElement("style");Mo.textContent=`.bio-fractal-canvas[data-v-1ee27525]{width:100%;height:100%;display:block}@keyframes pv-shimmer-65cb23ba{0%,to{opacity:.6}50%{opacity:1}}@keyframes pv-glow-pulse-65cb23ba{0%,to{filter:drop-shadow(0 0 3px currentColor)}50%{filter:drop-shadow(0 0 12px currentColor)}}@keyframes pv-dash-flow-65cb23ba{0%{stroke-dashoffset:0}to{stroke-dashoffset:-20}}@keyframes pv-point-pulse-65cb23ba{0%,to{r:6;opacity:1}50%{r:9;opacity:.8}}.pv-shimmer[data-v-65cb23ba]{animation:pv-shimmer-65cb23ba 2s ease-in-out infinite}.pv-glow-pulse[data-v-65cb23ba]{animation:pv-glow-pulse-65cb23ba 1.5s ease-in-out infinite}.pv-dash-flow[data-v-65cb23ba]{animation:pv-dash-flow-65cb23ba 1s linear infinite}.pv-point-pulse[data-v-65cb23ba]{animation:pv-point-pulse-65cb23ba .8s ease-in-out infinite}.pv-container[data-v-65cb23ba]{width:100%;height:100%;display:flex;flex-direction:column;align-items:center;justify-content:center;padding:10px;overflow:hidden;background:transparent}.pv-title[data-v-65cb23ba]{text-align:center;margin-bottom:16px;padding:0 16px;width:100%;max-width:840px}.pv-title h1[data-v-65cb23ba],.pv-title h2[data-v-65cb23ba]{font-size:clamp(1.4rem,4.5vw,2rem);font-weight:700;line-height:1.3;margin:0}.pv-title-gradient-1[data-v-65cb23ba]{background:linear-gradient(to right,#a855f7,#ec4899,#22d3ee);-webkit-background-clip:text;-webkit-text-fill-color:transparent;background-clip:text}.pv-title-gradient-2[data-v-65cb23ba]{background:linear-gradient(to right,#22d3ee,#a855f7,#ec4899);-webkit-background-clip:text;-webkit-text-fill-color:transparent;background-clip:text}.pv-svg-container[data-v-65cb23ba]{position:relative;width:100%;max-width:840px;height:auto;aspect-ratio:840/640;flex-shrink:1}.pv-svg-container svg[data-v-65cb23ba]{width:100%;height:100%}.pv-values[data-v-65cb23ba]{margin-top:16px;width:100%;max-width:580px;text-align:center;padding:0 16px}.pv-values-main[data-v-65cb23ba]{text-align:center;margin-bottom:20px}.pv-values-text[data-v-65cb23ba]{font-size:.9rem;font-family:Times New Roman,serif}.pv-values-f[data-v-65cb23ba]{color:#a855f7;font-style:italic}.pv-values-punctuation[data-v-65cb23ba]{color:#d1d5db}.pv-values-t[data-v-65cb23ba]{color:#a855f7;font-style:italic}.pv-values-real[data-v-65cb23ba]{color:#fb923c}.pv-values-imag[data-v-65cb23ba]{color:#22d3d3}.pv-values-i[data-v-65cb23ba]{color:#22d3d3;font-style:italic}.pv-values-time[data-v-65cb23ba]{text-align:center}.pv-values-time-text[data-v-65cb23ba]{font-size:.85rem;font-family:Times New Roman,serif}.pv-values-time-t[data-v-65cb23ba]{color:#a855f7;font-style:italic}.pv-values-time-punctuation[data-v-65cb23ba]{color:#9ca3af}.pv-values-time-value[data-v-65cb23ba]{color:#d1d5db}.pv-values-time-period[data-v-65cb23ba]{color:#a855f7;font-style:italic}*{box-sizing:border-box;margin:0;padding:0}html,body{width:100%;height:100%;overflow:hidden}body{background-color:#000;font-family:-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,sans-serif;color:#fff}button{border:none;background:none;padding:0;cursor:pointer;font:inherit}select{font-family:-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,sans-serif}canvas{display:block}.o-fullscreen{width:100%;height:100%;position:relative}.o-layer{position:absolute;top:0;left:0;width:100%;height:100%}.o-layer--background{z-index:0}.o-layer--foreground{z-index:1;display:flex;align-items:center;justify-content:center;pointer-events:none}.o-fixed{position:fixed}.c-background-layer{position:absolute;top:0;left:0;width:100%;height:100%;z-index:0;transition-property:opacity,filter;transition-duration:.3s;transition-timing-function:ease}.c-background-layer--hidden{opacity:0!important;pointer-events:none}.c-background-layer canvas{width:100%!important;height:100%!important}.c-foreground-layer{position:absolute;top:0;left:0;width:100%;height:100%;z-index:1;display:flex;align-items:center;justify-content:center;pointer-events:none}.c-controls{position:fixed;top:10px;right:10px;z-index:100;display:flex;flex-direction:column;gap:8px;align-items:flex-end}.c-menu-toggle{background:transparent!important;backdrop-filter:none;-webkit-backdrop-filter:none;transition-property:background,transform;transition-duration:.3s;transition-timing-function:ease;border:none;color:#fff;width:36px;height:36px;border-radius:8px;display:flex;align-items:center;justify-content:center;flex-direction:column;gap:4px;padding:8px}.c-menu-toggle:hover{background:transparent!important}.c-menu-toggle:hover .c-hamburger-line{box-shadow:0 0 8px #fff6}.c-menu-toggle--open{transform:rotate(90deg)}.c-hamburger-line{display:block;width:100%;height:2px;background:#fffc;border-radius:1px;transition-property:background,box-shadow;transition-duration:.3s;transition-timing-function:ease;box-shadow:0 0 4px #fff3}.c-menu-panel{display:flex;flex-direction:column;gap:8px;align-items:flex-end;max-height:0;overflow:hidden;opacity:0;transition-property:max-height,opacity;transition-duration:.3s;transition-timing-function:ease}.c-menu-panel--visible{max-height:200px;opacity:1}.c-controls-row{display:flex;gap:8px;align-items:center}.c-fractal-toggle{background:#ffffff1a;-webkit-backdrop-filter:blur(4px);backdrop-filter:blur(4px);transition-property:background;transition-duration:.3s;transition-timing-function:ease;border:1px solid rgba(255,255,255,.3);color:#fff;padding:8px 12px;border-radius:6px;font-size:12px}.c-fractal-toggle:hover{background:#fff3}.c-fractal-select{background:#ffffff1a;-webkit-backdrop-filter:blur(4px);backdrop-filter:blur(4px);border:1px solid rgba(255,255,255,.3);color:#fff;padding:8px 28px 8px 12px;border-radius:6px;font-size:12px;outline:none;appearance:none;background-image:url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' fill='white' viewBox='0 0 16 16'%3E%3Cpath d='M8 11L3 6h10l-5 5z'/%3E%3C/svg%3E");background-repeat:no-repeat;background-position:right 8px center;transition-property:background-color;transition-duration:.3s;transition-timing-function:ease}.c-fractal-select:hover{background-color:#fff3}.c-fractal-select option{background:#1a1a2e;color:#fff}.c-slider-container{background:#ffffff1a;-webkit-backdrop-filter:blur(4px);backdrop-filter:blur(4px);display:flex;align-items:center;gap:8px;border:1px solid rgba(255,255,255,.3);padding:6px 12px;border-radius:6px}.c-slider-label{color:#fff;font-size:11px;white-space:nowrap}.c-brightness-slider{appearance:none;width:80px;height:4px;border-radius:2px;background:#ffffff4d;outline:none;cursor:pointer}.c-brightness-slider::-webkit-slider-thumb{appearance:none;width:14px;height:14px;border-radius:50%;background:#fff;cursor:pointer;box-shadow:0 1px 3px #0000004d}.c-brightness-slider::-moz-range-thumb{width:14px;height:14px;border-radius:50%;background:#fff;cursor:pointer;border:none}.c-nav-footer{position:fixed;bottom:16px;left:50%;transform:translate(-50%);z-index:100;display:flex;flex-direction:column;gap:12px;align-items:center;pointer-events:auto;padding:8px}.c-nav-toggle{position:relative;width:48px;height:48px;border:none;border-radius:50%;cursor:pointer;transform:translateY(0);transition:transform 3s cubic-bezier(.25,.1,.25,1),box-shadow .3s ease,border-color .3s ease;opacity:1!important;visibility:visible!important;background:transparent!important;backdrop-filter:none;-webkit-backdrop-filter:none;border:2px solid rgba(255,255,255,.8);box-shadow:0 0 20px #ffffff4d}.c-nav-toggle:active{transform:translateY(0) scale(1.05);box-shadow:0 0 8px #ffffff1a}.c-nav-toggle--open{transform:translateY(-30px) scale(1.05)!important;box-shadow:0 0 20px #ffffff40;border-color:#ffffffb3;transition:transform 3s cubic-bezier(.25,.1,.25,1)!important}.c-nav-toggle--open .c-nav-arrow{animation:arrow-bounce-inverted 1.5s ease-in-out infinite}.c-nav-arrow{display:inline-block;font-size:1.8rem;color:#fff;font-weight:700;text-shadow:0 2px 6px rgba(0,0,0,.6);animation:arrow-bounce 1.5s ease-in-out infinite;opacity:1!important}.c-nav-menu{display:flex;flex-wrap:nowrap;gap:8px;max-height:0;overflow:visible;opacity:0;transform:translateY(15px);transition:max-height 1s cubic-bezier(.25,.1,.25,1),opacity .8s cubic-bezier(.25,.1,.25,1),transform 1s cubic-bezier(.25,.1,.25,1);justify-content:center;padding:8px 0}.c-nav-menu--visible{max-height:250px;opacity:1;transform:translateY(0);transition:max-height 3s cubic-bezier(.25,.1,.25,1),opacity 2s cubic-bezier(.25,.1,.25,1) .2s,transform 2.5s cubic-bezier(.25,.1,.25,1)}.c-nav-button{position:relative;padding:10px 16px;font-size:.8rem;font-weight:600;text-decoration:none;color:#fff;border-radius:10px;transition:all .4s cubic-bezier(.4,0,.2,1);overflow:hidden;white-space:nowrap;flex-shrink:0;background:transparent!important;backdrop-filter:none;-webkit-backdrop-filter:none;border:2px solid rgba(255,255,255,.4);box-shadow:0 0 10px #ffffff1f}.c-nav-button:before{content:"";position:absolute;top:0;left:-100%;width:100%;height:100%;background:linear-gradient(90deg,transparent,rgba(255,255,255,.3),transparent);animation:shimmer-slide 3s ease-in-out infinite}.c-nav-button:hover{transform:translateY(-3px) scale(1.05);background:transparent!important;box-shadow:0 0 20px #ffffff40;border-color:#fff9}.c-nav-button:active{transform:translateY(-1px) scale(1.02);background:transparent!important;box-shadow:0 0 12px #ffffff26}.c-nav-button{text-shadow:0 1px 2px rgba(0,0,0,.3)}.c-nav-menu:not(.c-nav-menu--visible) .c-nav-button{opacity:0!important;pointer-events:none}.c-nav-menu--visible .c-nav-button{opacity:1;transform:translateY(0) scale(1);transition:opacity 1s cubic-bezier(.25,.1,.25,1),transform 1s cubic-bezier(.25,.1,.25,1)}.c-nav-menu--visible .c-nav-button:nth-child(1){transition-delay:0s}.c-nav-menu--visible .c-nav-button:nth-child(2){transition-delay:1s}.c-nav-menu--visible .c-nav-button:nth-child(3){transition-delay:2s}@keyframes shimmer-slide{0%{left:-100%}50%,to{left:100%}}@keyframes arrow-bounce{0%,to{transform:translateY(0)}50%{transform:translateY(-6px)}}@keyframes arrow-bounce-inverted{0%,to{transform:rotate(180deg) translateY(0)}50%{transform:rotate(180deg) translateY(6px)}}@media(max-width:768px){.c-nav-toggle{width:30px;height:30px}.c-nav-arrow{font-size:1.15rem}.c-nav-menu{gap:5px}.c-nav-button{padding:6px 10px;font-size:.51rem;border-radius:6px}}@keyframes twinkle{0%,to{opacity:.3}50%{opacity:1}}@keyframes drift{0%{transform:translateY(0) translate(0)}to{transform:translateY(-100vh) translate(20px)}}.c-cube-overlay{position:fixed;inset:0;z-index:9999;background:radial-gradient(ellipse at center,#0d1b2a,#020408);opacity:0;visibility:hidden;transition:opacity .3s ease,visibility .3s ease;display:flex;align-items:center;justify-content:center;overflow:hidden;touch-action:none;-webkit-user-select:none;user-select:none;transform:translateZ(0);-webkit-transform:translateZ(0);will-change:opacity,visibility;isolation:isolate;contain:layout style}.c-cube-overlay:before{content:"";position:absolute;inset:0;pointer-events:none;background-image:radial-gradient(1px 1px at 10% 20%,rgba(255,255,255,.7) 50%,transparent 50%),radial-gradient(1px 1px at 25% 55%,rgba(255,255,255,.5) 50%,transparent 50%),radial-gradient(2px 2px at 40% 30%,rgba(150,180,255,.8) 50%,transparent 50%),radial-gradient(1px 1px at 55% 70%,rgba(255,255,255,.6) 50%,transparent 50%),radial-gradient(1px 1px at 70% 15%,rgba(255,255,255,.7) 50%,transparent 50%),radial-gradient(2px 2px at 85% 45%,rgba(255,200,150,.7) 50%,transparent 50%),radial-gradient(1px 1px at 15% 80%,rgba(255,255,255,.5) 50%,transparent 50%),radial-gradient(1px 1px at 60% 90%,rgba(255,255,255,.6) 50%,transparent 50%),radial-gradient(2px 2px at 90% 75%,rgba(200,150,255,.7) 50%,transparent 50%),radial-gradient(1px 1px at 35% 5%,rgba(255,255,255,.8) 50%,transparent 50%);background-size:250px 250px}.c-cube-overlay--active{opacity:1;visibility:visible}.c-cube-scene{width:min(70vw,70vh);height:min(70vw,70vh);perspective:1400px;perspective-origin:50% 50%;transform-style:preserve-3d;-webkit-transform-style:preserve-3d;transform:translateZ(0);-webkit-transform:translateZ(0);isolation:isolate}.c-cube{width:100%;height:100%;position:relative;transform-style:preserve-3d;-webkit-transform-style:preserve-3d;will-change:transform;-webkit-backface-visibility:hidden;backface-visibility:hidden;cursor:grab}.c-cube:active{cursor:grabbing}.c-cube--animating{pointer-events:none}.c-cube__face{position:absolute;width:min(70vw,70vh);height:min(70vw,70vh);-webkit-backface-visibility:hidden;backface-visibility:hidden;-webkit-transform-style:preserve-3d;transform-style:preserve-3d;contain:layout style paint;border:2px solid rgba(255,255,255,.2);overflow:hidden;background:#0a0a12;cursor:pointer;transition:border-color .2s ease,box-shadow .2s ease;will-change:transform,opacity}.c-cube__face:hover{border-color:#ffffff80;box-shadow:0 0 30px #6496ff4d}.c-cube__face--front{transform:translateZ(calc(min(70vw,70vh)/2))}.c-cube__face--back{transform:rotateY(180deg) translateZ(calc(min(70vw,70vh)/2))}.c-cube__face--right{transform:rotateY(90deg) translateZ(calc(min(70vw,70vh)/2))}.c-cube__face--left{transform:rotateY(-90deg) translateZ(calc(min(70vw,70vh)/2))}.c-cube__face--top{transform:rotateX(90deg) translateZ(calc(min(70vw,70vh)/2))}.c-cube__face--bottom{transform:rotateX(-90deg) translateZ(calc(min(70vw,70vh)/2))}.c-cube__content{width:100%;height:100%;overflow:hidden;pointer-events:none}.c-cube__iframe{width:100%;height:100%;border:none;pointer-events:none;background:#000;contain:strict;isolation:isolate;transform:translateZ(0);-webkit-transform:translateZ(0);will-change:contents}.c-cube__placeholder{width:100%;height:100%;display:flex;flex-direction:column;align-items:center;justify-content:center;background:linear-gradient(135deg,#1a1a2e,#16213e,#0f3460);color:#ffffffe6;text-align:center;padding:2rem;pointer-events:none}.c-cube__placeholder h2{font-size:clamp(1.5rem,4vw,2.5rem);font-weight:600;margin:0 0 .5rem;letter-spacing:.05em;text-shadow:0 2px 10px rgba(0,0,0,.5)}.c-cube__placeholder p{font-size:clamp(.875rem,2vw,1.125rem);opacity:.7;margin:0;letter-spacing:.1em;text-transform:uppercase}.c-cube__placeholder--gradient-1{background:linear-gradient(135deg,#2d1b4e,#1a1a2e,#0d2137)}.c-cube__placeholder--gradient-2{background:linear-gradient(135deg,#0f3460,#1a1a2e,#16213e)}.c-cube__placeholder--gradient-3{background:linear-gradient(135deg,#1e3a5f,#16213e,#1a1a2e)}.c-cube__placeholder--main{background:linear-gradient(135deg,#1a2a4a,#0f1a2e,#0a1020);border:2px dashed rgba(100,150,255,.3)}.c-cube__placeholder--main h2{color:#64b4ffe6}.c-cube__placeholder--main:hover{border-color:#6496ff99;background:linear-gradient(135deg,#1f3055,#142035,#0f1525)}.c-cube-toggle{position:fixed;top:16px;right:16px;z-index:10001;display:flex;align-items:center;justify-content:center;width:52px;height:52px;padding:0;background:#ffffff1a;border:1px solid rgba(255,255,255,.25);border-radius:12px;cursor:pointer;color:#fffc;transition:all .3s ease;-webkit-backdrop-filter:blur(8px);backdrop-filter:blur(8px)}.c-cube-toggle:hover{background:#fff3;border-color:#fff6;color:#fff;transform:scale(1.08)}.c-cube-toggle:active{transform:scale(.95)}.c-cube-toggle svg{position:absolute;transition:opacity .3s ease,transform .3s ease}.c-cube-toggle__cube{width:28px;height:28px;opacity:1;transform:rotate(0)}.c-cube-toggle__close{width:24px;height:24px;opacity:0;transform:rotate(-90deg)}.c-cube-toggle--active{background:#ffffff1f}.c-cube-toggle--active .c-cube-toggle__cube{opacity:0;transform:rotate(90deg)}.c-cube-toggle--active .c-cube-toggle__close{opacity:1;transform:rotate(0)}.c-cube-toggle--active:hover{background:#ff646433;border-color:#ff646480}@media(max-width:768px){.c-cube-toggle{top:12px;right:12px;width:44px;height:44px}.c-cube-toggle__cube{width:24px;height:24px}.c-cube-toggle__close{width:20px;height:20px}}.u-hidden{display:none!important}.u-invisible{visibility:hidden!important}.u-no-pointer{pointer-events:none!important}.u-pointer{pointer-events:auto!important}#app,.app-container{width:100%;height:100%;position:relative}
/*$vite$:1*/`,document.head.appendChild(Mo);var Dn=typeof document<"u"?document.currentScript:null;function $n(e){const t=Object.create(null);for(const n of e.split(","))t[n]=1;return n=>n in t}const ne={},St=[],Ne=()=>{},Ro=()=>!1,an=e=>e.charCodeAt(0)===111&&e.charCodeAt(1)===110&&(e.charCodeAt(2)>122||e.charCodeAt(2)<97),cn=e=>e.startsWith("onUpdate:"),ce=Object.assign,jn=(e,t)=>{const n=e.indexOf(t);n>-1&&e.splice(n,1)},Ti=Object.prototype.hasOwnProperty,X=(e,t)=>Ti.call(e,t),j=Array.isArray,Tt=e=>Nt(e)==="[object Map]",Io=e=>Nt(e)==="[object Set]",Po=e=>Nt(e)==="[object Date]",B=e=>typeof e=="function",se=e=>typeof e=="string",De=e=>typeof e=="symbol",Q=e=>e!==null&&typeof e=="object",Oo=e=>(Q(e)||B(e))&&B(e.then)&&B(e.catch),Lo=Object.prototype.toString,Nt=e=>Lo.call(e),Ci=e=>Nt(e).slice(8,-1),Fo=e=>Nt(e)==="[object Object]",Bn=e=>se(e)&&e!=="NaN"&&e[0]!=="-"&&""+parseInt(e,10)===e,Dt=$n(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),fn=e=>{const t=Object.create(null);return(n=>t[n]||(t[n]=e(n)))},Ai=/-\w/g,Ie=fn(e=>e.replace(Ai,t=>t.slice(1).toUpperCase())),zi=/\B([A-Z])/g,vt=fn(e=>e.replace(zi,"-$1").toLowerCase()),No=fn(e=>e.charAt(0).toUpperCase()+e.slice(1)),Hn=fn(e=>e?`on${No(e)}`:""),$e=(e,t)=>!Object.is(e,t),Un=(e,...t)=>{for(let n=0;n<e.length;n++)e[n](...t)},Do=(e,t,n,o=!1)=>{Object.defineProperty(e,t,{configurable:!0,enumerable:!1,writable:o,value:n})},Ei=e=>{const t=parseFloat(e);return isNaN(t)?e:t};let $o;const un=()=>$o||($o=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function $t(e){if(j(e)){const t={};for(let n=0;n<e.length;n++){const o=e[n],s=se(o)?Pi(o):$t(o);if(s)for(const i in s)t[i]=s[i]}return t}else if(se(e)||Q(e))return e}const Mi=/;(?![^(]*\))/g,Ri=/:([^]+)/,Ii=/\/\*[^]*?\*\//g;function Pi(e){const t={};return e.replace(Ii,"").split(Mi).forEach(n=>{if(n){const o=n.split(Ri);o.length>1&&(t[o[0].trim()]=o[1].trim())}}),t}function Pe(e){let t="";if(se(e))t=e;else if(j(e))for(let n=0;n<e.length;n++){const o=Pe(e[n]);o&&(t+=o+" ")}else if(Q(e))for(const n in e)e[n]&&(t+=n+" ");return t.trim()}const Oi=$n("itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly");function jo(e){return!!e||e===""}function Li(e,t){if(e.length!==t.length)return!1;let n=!0;for(let o=0;n&&o<e.length;o++)n=Vn(e[o],t[o]);return n}function Vn(e,t){if(e===t)return!0;let n=Po(e),o=Po(t);if(n||o)return n&&o?e.getTime()===t.getTime():!1;if(n=De(e),o=De(t),n||o)return e===t;if(n=j(e),o=j(t),n||o)return n&&o?Li(e,t):!1;if(n=Q(e),o=Q(t),n||o){if(!n||!o)return!1;const s=Object.keys(e).length,i=Object.keys(t).length;if(s!==i)return!1;for(const l in e){const r=e.hasOwnProperty(l),a=t.hasOwnProperty(l);if(r&&!a||!r&&a||!Vn(e[l],t[l]))return!1}}return String(e)===String(t)}const Bo=e=>!!(e&&e.__v_isRef===!0),rt=e=>se(e)?e:e==null?"":j(e)||Q(e)&&(e.toString===Lo||!B(e.toString))?Bo(e)?rt(e.value):JSON.stringify(e,Ho,2):String(e),Ho=(e,t)=>Bo(t)?Ho(e,t.value):Tt(t)?{[`Map(${t.size})`]:[...t.entries()].reduce((n,[o,s],i)=>(n[Gn(o,i)+" =>"]=s,n),{})}:Io(t)?{[`Set(${t.size})`]:[...t.values()].map(n=>Gn(n))}:De(t)?Gn(t):Q(t)&&!j(t)&&!Fo(t)?String(t):t,Gn=(e,t="")=>{var n;return De(e)?`Symbol(${(n=e.description)!=null?n:t})`:e};let fe;class Fi{constructor(t=!1){this.detached=t,this._active=!0,this._on=0,this.effects=[],this.cleanups=[],this._isPaused=!1,this._warnOnRun=!0,this.__v_skip=!0,!t&&fe&&(fe.active?(this.parent=fe,this.index=(fe.scopes||(fe.scopes=[])).push(this)-1):(this._active=!1,this._warnOnRun=!1))}get active(){return this._active}pause(){if(this._active){this._isPaused=!0;let t,n;if(this.scopes){const o=this.scopes.slice();for(t=0,n=o.length;t<n;t++)o[t].pause()}for(t=0,n=this.effects.length;t<n;t++)this.effects[t].pause()}}resume(){if(this._active&&this._isPaused){this._isPaused=!1;let t,n;if(this.scopes){const s=this.scopes.slice();for(t=0,n=s.length;t<n;t++)s[t].resume()}const o=this.effects.slice();for(t=0,n=o.length;t<n;t++)o[t].resume()}}run(t){if(this._active){const n=fe;try{return fe=this,t()}finally{fe=n}}}on(){++this._on===1&&(this.prevScope=fe,fe=this)}off(){if(this._on>0&&--this._on===0){if(fe===this)fe=this.prevScope;else{let t=fe;for(;t;){if(t.prevScope===this){t.prevScope=this.prevScope;break}t=t.prevScope}}this.prevScope=void 0}}stop(t){if(this._active){this._active=!1;let n,o;for(n=0,o=this.effects.length;n<o;n++)this.effects[n].stop();for(this.effects.length=0,n=0,o=this.cleanups.length;n<o;n++)this.cleanups[n]();if(this.cleanups.length=0,this.scopes){const s=this.scopes.slice();for(n=0,o=s.length;n<o;n++)s[n].stop(!0);this.scopes.length=0}if(!this.detached&&this.parent&&!t){const s=this.parent.scopes.pop();s&&s!==this&&(this.parent.scopes[this.index]=s,s.index=this.index)}this.parent=void 0}}}function Ni(){return fe}let oe;const Wn=new WeakSet;class Uo{constructor(t){this.fn=t,this.deps=void 0,this.depsTail=void 0,this.flags=5,this.next=void 0,this.cleanup=void 0,this.scheduler=void 0,fe&&(fe.active?fe.effects.push(this):this.flags&=-2)}pause(){this.flags|=64}resume(){this.flags&64&&(this.flags&=-65,Wn.has(this)&&(Wn.delete(this),this.trigger()))}notify(){this.flags&2&&!(this.flags&32)||this.flags&8||Go(this)}run(){if(!(this.flags&1))return this.fn();this.flags|=2,Xo(this),Wo(this);const t=oe,n=Oe;oe=this,Oe=!0;try{return this.fn()}finally{Ko(this),oe=t,Oe=n,this.flags&=-3}}stop(){if(this.flags&1){for(let t=this.deps;t;t=t.nextDep)Xn(t);this.deps=this.depsTail=void 0,Xo(this),this.onStop&&this.onStop(),this.flags&=-2}}trigger(){this.flags&64?Wn.add(this):this.scheduler?this.scheduler():this.runIfDirty()}runIfDirty(){qn(this)&&this.run()}get dirty(){return qn(this)}}let Vo=0,jt,Bt;function Go(e,t=!1){if(e.flags|=8,t){e.next=Bt,Bt=e;return}e.next=jt,jt=e}function Kn(){Vo++}function Yn(){if(--Vo>0)return;if(Bt){let t=Bt;for(Bt=void 0;t;){const n=t.next;t.next=void 0,t.flags&=-9,t=n}}let e;for(;jt;){let t=jt;for(jt=void 0;t;){const n=t.next;if(t.next=void 0,t.flags&=-9,t.flags&1)try{t.trigger()}catch(o){e||(e=o)}t=n}}if(e)throw e}function Wo(e){for(let t=e.deps;t;t=t.nextDep)t.version=-1,t.prevActiveLink=t.dep.activeLink,t.dep.activeLink=t}function Ko(e){let t,n=e.depsTail,o=n;for(;o;){const s=o.prevDep;o.version===-1?(o===n&&(n=s),Xn(o),Di(o)):t=o,o.dep.activeLink=o.prevActiveLink,o.prevActiveLink=void 0,o=s}e.deps=t,e.depsTail=n}function qn(e){for(let t=e.deps;t;t=t.nextDep)if(t.dep.version!==t.version||t.dep.computed&&(Yo(t.dep.computed)||t.dep.version!==t.version))return!0;return!!e._dirty}function Yo(e){if(e.flags&4&&!(e.flags&16)||(e.flags&=-17,e.globalVersion===Ht)||(e.globalVersion=Ht,!e.isSSR&&e.flags&128&&(!e.deps&&!e._dirty||!qn(e))))return;e.flags|=2;const t=e.dep,n=oe,o=Oe;oe=e,Oe=!0;try{Wo(e);const s=e.fn(e._value);(t.version===0||$e(s,e._value))&&(e.flags|=128,e._value=s,t.version++)}catch(s){throw t.version++,s}finally{oe=n,Oe=o,Ko(e),e.flags&=-3}}function Xn(e,t=!1){const{dep:n,prevSub:o,nextSub:s}=e;if(o&&(o.nextSub=s,e.prevSub=void 0),s&&(s.prevSub=o,e.nextSub=void 0),n.subs===e&&(n.subs=o,!o&&n.computed)){n.computed.flags&=-5;for(let i=n.computed.deps;i;i=i.nextDep)Xn(i,!0)}!t&&!--n.sc&&n.map&&n.map.delete(n.key)}function Di(e){const{prevDep:t,nextDep:n}=e;t&&(t.nextDep=n,e.prevDep=void 0),n&&(n.prevDep=t,e.nextDep=void 0)}let Oe=!0;const qo=[];function je(){qo.push(Oe),Oe=!1}function Be(){const e=qo.pop();Oe=e===void 0?!0:e}function Xo(e){const{cleanup:t}=e;if(e.cleanup=void 0,t){const n=oe;oe=void 0;try{t()}finally{oe=n}}}let Ht=0;class $i{constructor(t,n){this.sub=t,this.dep=n,this.version=n.version,this.nextDep=this.prevDep=this.nextSub=this.prevSub=this.prevActiveLink=void 0}}class Zn{constructor(t){this.computed=t,this.version=0,this.activeLink=void 0,this.subs=void 0,this.map=void 0,this.key=void 0,this.sc=0,this.__v_skip=!0}track(t){if(!oe||!Oe||oe===this.computed)return;let n=this.activeLink;if(n===void 0||n.sub!==oe)n=this.activeLink=new $i(oe,this),oe.deps?(n.prevDep=oe.depsTail,oe.depsTail.nextDep=n,oe.depsTail=n):oe.deps=oe.depsTail=n,Zo(n);else if(n.version===-1&&(n.version=this.version,n.nextDep)){const o=n.nextDep;o.prevDep=n.prevDep,n.prevDep&&(n.prevDep.nextDep=o),n.prevDep=oe.depsTail,n.nextDep=void 0,oe.depsTail.nextDep=n,oe.depsTail=n,oe.deps===n&&(oe.deps=o)}return n}trigger(t){this.version++,Ht++,this.notify(t)}notify(t){Kn();try{for(let n=this.subs;n;n=n.prevSub)n.sub.notify()&&n.sub.dep.notify()}finally{Yn()}}}function Zo(e){if(e.dep.sc++,e.sub.flags&4){const t=e.dep.computed;if(t&&!e.dep.subs){t.flags|=20;for(let o=t.deps;o;o=o.nextDep)Zo(o)}const n=e.dep.subs;n!==e&&(e.prevSub=n,n&&(n.nextSub=e)),e.dep.subs=e}}const Jn=new WeakMap,ht=Symbol(""),Qn=Symbol(""),Ut=Symbol("");function ve(e,t,n){if(Oe&&oe){let o=Jn.get(e);o||Jn.set(e,o=new Map);let s=o.get(n);s||(o.set(n,s=new Zn),s.map=o,s.key=n),s.track()}}function Qe(e,t,n,o,s,i){const l=Jn.get(e);if(!l){Ht++;return}const r=a=>{a&&a.trigger()};if(Kn(),t==="clear")l.forEach(r);else{const a=j(e),v=a&&Bn(n);if(a&&n==="length"){const f=Number(o);l.forEach((g,_)=>{(_==="length"||_===Ut||!De(_)&&_>=f)&&r(g)})}else switch((n!==void 0||l.has(void 0))&&r(l.get(n)),v&&r(l.get(Ut)),t){case"add":a?v&&r(l.get("length")):(r(l.get(ht)),Tt(e)&&r(l.get(Qn)));break;case"delete":a||(r(l.get(ht)),Tt(e)&&r(l.get(Qn)));break;case"set":Tt(e)&&r(l.get(ht));break}}Yn()}function Ct(e){const t=Y(e);return t===e?t:(ve(t,"iterate",Ut),Ae(e)?t:t.map(Le))}function dn(e){return ve(e=Y(e),"iterate",Ut),e}function He(e,t){return tt(e)?At(gt(e)?Le(t):t):Le(t)}const ji={__proto__:null,[Symbol.iterator](){return eo(this,Symbol.iterator,e=>He(this,e))},concat(...e){return Ct(this).concat(...e.map(t=>j(t)?Ct(t):t))},entries(){return eo(this,"entries",e=>(e[1]=He(this,e[1]),e))},every(e,t){return et(this,"every",e,t,void 0,arguments)},filter(e,t){return et(this,"filter",e,t,n=>n.map(o=>He(this,o)),arguments)},find(e,t){return et(this,"find",e,t,n=>He(this,n),arguments)},findIndex(e,t){return et(this,"findIndex",e,t,void 0,arguments)},findLast(e,t){return et(this,"findLast",e,t,n=>He(this,n),arguments)},findLastIndex(e,t){return et(this,"findLastIndex",e,t,void 0,arguments)},forEach(e,t){return et(this,"forEach",e,t,void 0,arguments)},includes(...e){return to(this,"includes",e)},indexOf(...e){return to(this,"indexOf",e)},join(e){return Ct(this).join(e)},lastIndexOf(...e){return to(this,"lastIndexOf",e)},map(e,t){return et(this,"map",e,t,void 0,arguments)},pop(){return Vt(this,"pop")},push(...e){return Vt(this,"push",e)},reduce(e,...t){return Jo(this,"reduce",e,t)},reduceRight(e,...t){return Jo(this,"reduceRight",e,t)},shift(){return Vt(this,"shift")},some(e,t){return et(this,"some",e,t,void 0,arguments)},splice(...e){return Vt(this,"splice",e)},toReversed(){return Ct(this).toReversed()},toSorted(e){return Ct(this).toSorted(e)},toSpliced(...e){return Ct(this).toSpliced(...e)},unshift(...e){return Vt(this,"unshift",e)},values(){return eo(this,"values",e=>He(this,e))}};function eo(e,t,n){const o=dn(e),s=o[t]();return o!==e&&!Ae(e)&&(s._next=s.next,s.next=()=>{const i=s._next();return i.done||(i.value=n(i.value)),i}),s}const Bi=Array.prototype;function et(e,t,n,o,s,i){const l=dn(e),r=l!==e&&!Ae(e),a=l[t];if(a!==Bi[t]){const g=a.apply(e,i);return r?Le(g):g}let v=n;l!==e&&(r?v=function(g,_){return n.call(this,He(e,g),_,e)}:n.length>2&&(v=function(g,_){return n.call(this,g,_,e)}));const f=a.call(l,v,o);return r&&s?s(f):f}function Jo(e,t,n,o){const s=dn(e),i=s!==e&&!Ae(e);let l=n,r=!1;s!==e&&(i?(r=o.length===0,l=function(v,f,g){return r&&(r=!1,v=He(e,v)),n.call(this,v,He(e,f),g,e)}):n.length>3&&(l=function(v,f,g){return n.call(this,v,f,g,e)}));const a=s[t](l,...o);return r?He(e,a):a}function to(e,t,n){const o=Y(e);ve(o,"iterate",Ut);const s=o[t](...n);return(s===-1||s===!1)&&io(n[0])?(n[0]=Y(n[0]),o[t](...n)):s}function Vt(e,t,n=[]){je(),Kn();const o=Y(e)[t].apply(e,n);return Yn(),Be(),o}const Hi=$n("__proto__,__v_isRef,__isVue"),Qo=new Set(Object.getOwnPropertyNames(Symbol).filter(e=>e!=="arguments"&&e!=="caller").map(e=>Symbol[e]).filter(De));function Ui(e){De(e)||(e=String(e));const t=Y(this);return ve(t,"has",e),t.hasOwnProperty(e)}class es{constructor(t=!1,n=!1){this._isReadonly=t,this._isShallow=n}get(t,n,o){if(n==="__v_skip")return t.__v_skip;const s=this._isReadonly,i=this._isShallow;if(n==="__v_isReactive")return!s;if(n==="__v_isReadonly")return s;if(n==="__v_isShallow")return i;if(n==="__v_raw")return o===(s?i?ls:is:i?ss:os).get(t)||Object.getPrototypeOf(t)===Object.getPrototypeOf(o)?t:void 0;const l=j(t);if(!s){let a;if(l&&(a=ji[n]))return a;if(n==="hasOwnProperty")return Ui}const r=Reflect.get(t,n,ue(t)?t:o);if((De(n)?Qo.has(n):Hi(n))||(s||ve(t,"get",n),i))return r;if(ue(r)){const a=l&&Bn(n)?r:r.value;return s&&Q(a)?so(a):a}return Q(r)?s?so(r):oo(r):r}}class ts extends es{constructor(t=!1){super(!1,t)}set(t,n,o,s){let i=t[n];const l=j(t)&&Bn(n);if(!this._isShallow){const v=tt(i);if(!Ae(o)&&!tt(o)&&(i=Y(i),o=Y(o)),!l&&ue(i)&&!ue(o))return v||(i.value=o),!0}const r=l?Number(n)<t.length:X(t,n),a=Reflect.set(t,n,o,ue(t)?t:s);return t===Y(s)&&a&&(r?$e(o,i)&&Qe(t,"set",n,o):Qe(t,"add",n,o)),a}deleteProperty(t,n){const o=X(t,n);t[n];const s=Reflect.deleteProperty(t,n);return s&&o&&Qe(t,"delete",n,void 0),s}has(t,n){const o=Reflect.has(t,n);return(!De(n)||!Qo.has(n))&&ve(t,"has",n),o}ownKeys(t){return ve(t,"iterate",j(t)?"length":ht),Reflect.ownKeys(t)}}class ns extends es{constructor(t=!1){super(!0,t)}set(t,n){return!0}deleteProperty(t,n){return!0}}const Vi=new ts,Gi=new ns,Wi=new ts(!0),Ki=new ns(!0),no=e=>e,pn=e=>Reflect.getPrototypeOf(e);function Yi(e,t,n){return function(...o){const s=this.__v_raw,i=Y(s),l=Tt(i),r=e==="entries"||e===Symbol.iterator&&l,a=e==="keys"&&l,v=s[e](...o),f=n?no:t?At:Le;return!t&&ve(i,"iterate",a?Qn:ht),ce(Object.create(v),{next(){const{value:g,done:_}=v.next();return _?{value:g,done:_}:{value:r?[f(g[0]),f(g[1])]:f(g),done:_}}})}}function vn(e){return function(...t){return e==="delete"?!1:e==="clear"?void 0:this}}function qi(e,t){const n={get(s){const i=this.__v_raw,l=Y(i),r=Y(s);e||($e(s,r)&&ve(l,"get",s),ve(l,"get",r));const{has:a}=pn(l),v=t?no:e?At:Le;if(a.call(l,s))return v(i.get(s));if(a.call(l,r))return v(i.get(r));i!==l&&i.get(s)},get size(){const s=this.__v_raw;return!e&&ve(Y(s),"iterate",ht),s.size},has(s){const i=this.__v_raw,l=Y(i),r=Y(s);return e||($e(s,r)&&ve(l,"has",s),ve(l,"has",r)),s===r?i.has(s):i.has(s)||i.has(r)},forEach(s,i){const l=this,r=l.__v_raw,a=Y(r),v=t?no:e?At:Le;return!e&&ve(a,"iterate",ht),r.forEach((f,g)=>s.call(i,v(f),v(g),l))}};return ce(n,e?{add:vn("add"),set:vn("set"),delete:vn("delete"),clear:vn("clear")}:{add(s){const i=Y(this),l=pn(i),r=Y(s),a=!t&&!Ae(s)&&!tt(s)?r:s;return l.has.call(i,a)||$e(s,a)&&l.has.call(i,s)||$e(r,a)&&l.has.call(i,r)||(i.add(a),Qe(i,"add",a,a)),this},set(s,i){!t&&!Ae(i)&&!tt(i)&&(i=Y(i));const l=Y(this),{has:r,get:a}=pn(l);let v=r.call(l,s);v||(s=Y(s),v=r.call(l,s));const f=a.call(l,s);return l.set(s,i),v?$e(i,f)&&Qe(l,"set",s,i):Qe(l,"add",s,i),this},delete(s){const i=Y(this),{has:l,get:r}=pn(i);let a=l.call(i,s);a||(s=Y(s),a=l.call(i,s)),r&&r.call(i,s);const v=i.delete(s);return a&&Qe(i,"delete",s,void 0),v},clear(){const s=Y(this),i=s.size!==0,l=s.clear();return i&&Qe(s,"clear",void 0,void 0),l}}),["keys","values","entries",Symbol.iterator].forEach(s=>{n[s]=Yi(s,e,t)}),n}function hn(e,t){const n=qi(e,t);return(o,s,i)=>s==="__v_isReactive"?!e:s==="__v_isReadonly"?e:s==="__v_raw"?o:Reflect.get(X(n,s)&&s in o?n:o,s,i)}const Xi={get:hn(!1,!1)},Zi={get:hn(!1,!0)},Ji={get:hn(!0,!1)},Qi={get:hn(!0,!0)},os=new WeakMap,ss=new WeakMap,is=new WeakMap,ls=new WeakMap;function el(e){switch(e){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function oo(e){return tt(e)?e:gn(e,!1,Vi,Xi,os)}function tl(e){return gn(e,!1,Wi,Zi,ss)}function so(e){return gn(e,!0,Gi,Ji,is)}function zf(e){return gn(e,!0,Ki,Qi,ls)}function gn(e,t,n,o,s){if(!Q(e)||e.__v_raw&&!(t&&e.__v_isReactive)||e.__v_skip||!Object.isExtensible(e))return e;const i=s.get(e);if(i)return i;const l=el(Ci(e));if(l===0)return e;const r=new Proxy(e,l===2?o:n);return s.set(e,r),r}function gt(e){return tt(e)?gt(e.__v_raw):!!(e&&e.__v_isReactive)}function tt(e){return!!(e&&e.__v_isReadonly)}function Ae(e){return!!(e&&e.__v_isShallow)}function io(e){return e?!!e.__v_raw:!1}function Y(e){const t=e&&e.__v_raw;return t?Y(t):e}function nl(e){return!X(e,"__v_skip")&&Object.isExtensible(e)&&Do(e,"__v_skip",!0),e}const Le=e=>Q(e)?oo(e):e,At=e=>Q(e)?so(e):e;function ue(e){return e?e.__v_isRef===!0:!1}function ee(e){return rs(e,!1)}function ol(e){return rs(e,!0)}function rs(e,t){return ue(e)?e:new sl(e,t)}class sl{constructor(t,n){this.dep=new Zn,this.__v_isRef=!0,this.__v_isShallow=!1,this._rawValue=n?t:Y(t),this._value=n?t:Le(t),this.__v_isShallow=n}get value(){return this.dep.track(),this._value}set value(t){const n=this._rawValue,o=this.__v_isShallow||Ae(t)||tt(t);t=o?t:Y(t),$e(t,n)&&(this._rawValue=t,this._value=o?t:Le(t),this.dep.trigger())}}function as(e){return ue(e)?e.value:e}const il={get:(e,t,n)=>t==="__v_raw"?e:as(Reflect.get(e,t,n)),set:(e,t,n,o)=>{const s=e[t];return ue(s)&&!ue(n)?(s.value=n,!0):Reflect.set(e,t,n,o)}};function cs(e){return gt(e)?e:new Proxy(e,il)}class ll{constructor(t,n,o){this.fn=t,this.setter=n,this._value=void 0,this.dep=new Zn(this),this.__v_isRef=!0,this.deps=void 0,this.depsTail=void 0,this.flags=16,this.globalVersion=Ht-1,this.next=void 0,this.effect=this,this.__v_isReadonly=!n,this.isSSR=o}notify(){if(this.flags|=16,!(this.flags&8)&&oe!==this)return Go(this,!0),!0}get value(){const t=this.dep.track();return Yo(this),t&&(t.version=this.dep.version),this._value}set value(t){this.setter&&this.setter(t)}}function rl(e,t,n=!1){let o,s;return B(e)?o=e:(o=e.get,s=e.set),new ll(o,s,n)}const mn={},bn=new WeakMap;let mt;function al(e,t=!1,n=mt){if(n){let o=bn.get(n);o||bn.set(n,o=[]),o.push(e)}}function cl(e,t,n=ne){const{immediate:o,deep:s,once:i,scheduler:l,augmentJob:r,call:a}=n,v=k=>s?k:Ae(k)||s===!1||s===0?at(k,1):at(k);let f,g,_,S,x=!1,w=!1;if(ue(e)?(g=()=>e.value,x=Ae(e)):gt(e)?(g=()=>v(e),x=!0):j(e)?(w=!0,x=e.some(k=>gt(k)||Ae(k)),g=()=>e.map(k=>{if(ue(k))return k.value;if(gt(k))return v(k);if(B(k))return a?a(k,2):k()})):B(e)?t?g=a?()=>a(e,2):e:g=()=>{if(_){je();try{_()}finally{Be()}}const k=mt;mt=f;try{return a?a(e,3,[S]):e(S)}finally{mt=k}}:g=Ne,t&&s){const k=g,I=s===!0?1/0:s;g=()=>at(k(),I)}const R=Ni(),P=()=>{f.stop(),R&&R.active&&jn(R.effects,f)};if(i&&t){const k=t;t=(...I)=>{const G=k(...I);return P(),G}}let M=w?new Array(e.length).fill(mn):mn;const z=k=>{if(!(!(f.flags&1)||!f.dirty&&!k))if(t){const I=f.run();if(k||s||x||(w?I.some((G,D)=>$e(G,M[D])):$e(I,M))){_&&_();const G=mt;mt=f;try{const D=[I,M===mn?void 0:w&&M[0]===mn?[]:M,S];M=I,a?a(t,3,D):t(...D)}finally{mt=G}}}else f.run()};return r&&r(z),f=new Uo(g),f.scheduler=l?()=>l(z,!1):z,S=k=>al(k,!1,f),_=f.onStop=()=>{const k=bn.get(f);if(k){if(a)a(k,4);else for(const I of k)I();bn.delete(f)}},t?o?z(!0):M=f.run():l?l(z.bind(null,!0),!0):f.run(),P.pause=f.pause.bind(f),P.resume=f.resume.bind(f),P.stop=P,P}function at(e,t=1/0,n){if(t<=0||!Q(e)||e.__v_skip||(n=n||new Map,(n.get(e)||0)>=t))return e;if(n.set(e,t),t--,ue(e))at(e.value,t,n);else if(j(e))for(let o=0;o<e.length;o++)at(e[o],t,n);else if(Io(e)||Tt(e))e.forEach(o=>{at(o,t,n)});else if(Fo(e)){for(const o in e)at(e[o],t,n);for(const o of Object.getOwnPropertySymbols(e))Object.prototype.propertyIsEnumerable.call(e,o)&&at(e[o],t,n)}return e}const Gt=[];let lo=!1;function Ef(e,...t){if(lo)return;lo=!0,je();const n=Gt.length?Gt[Gt.length-1].component:null,o=n&&n.appContext.config.warnHandler,s=fl();if(o)zt(o,n,11,[e+t.map(i=>{var l,r;return(r=(l=i.toString)==null?void 0:l.call(i))!=null?r:JSON.stringify(i)}).join(""),n&&n.proxy,s.map(({vnode:i})=>`at <${ii(n,i.type)}>`).join(`
`),s]);else{const i=[`[Vue warn]: ${e}`,...t];s.length&&i.push(`
`,...ul(s)),console.warn(...i)}Be(),lo=!1}function fl(){let e=Gt[Gt.length-1];if(!e)return[];const t=[];for(;e;){const n=t[0];n&&n.vnode===e?n.recurseCount++:t.push({vnode:e,recurseCount:0});const o=e.component&&e.component.parent;e=o&&o.vnode}return t}function ul(e){const t=[];return e.forEach((n,o)=>{t.push(...o===0?[]:[`
`],...dl(n))}),t}function dl({vnode:e,recurseCount:t}){const n=t>0?`... (${t} recursive calls)`:"",o=e.component?e.component.parent==null:!1,s=` at <${ii(e.component,e.type,o)}`,i=">"+n;return e.props?[s,...pl(e.props),i]:[s+i]}function pl(e){const t=[],n=Object.keys(e);return n.slice(0,3).forEach(o=>{t.push(...fs(o,e[o]))}),n.length>3&&t.push(" ..."),t}function fs(e,t,n){return se(t)?(t=JSON.stringify(t),n?t:[`${e}=${t}`]):typeof t=="number"||typeof t=="boolean"||t==null?n?t:[`${e}=${t}`]:ue(t)?(t=fs(e,Y(t.value),!0),n?t:[`${e}=Ref<`,t,">"]):B(t)?[`${e}=fn${t.name?`<${t.name}>`:""}`]:(t=Y(t),n?t:[`${e}=`,t])}function zt(e,t,n,o){try{return o?e(...o):e()}catch(s){Wt(s,t,n)}}function Fe(e,t,n,o){if(B(e)){const s=zt(e,t,n,o);return s&&Oo(s)&&s.catch(i=>{Wt(i,t,n)}),s}if(j(e)){const s=[];for(let i=0;i<e.length;i++)s.push(Fe(e[i],t,n,o));return s}}function Wt(e,t,n,o=!0){const s=t?t.vnode:null,{errorHandler:i,throwUnhandledErrorInProduction:l}=t&&t.appContext.config||ne;if(t){let r=t.parent;const a=t.proxy,v=`https://vuejs.org/error-reference/#runtime-${n}`;for(;r;){const f=r.ec;if(f){for(let g=0;g<f.length;g++)if(f[g](e,a,v)===!1)return}r=r.parent}if(i){je(),zt(i,null,10,[e,a,v]),Be();return}}vl(e,n,s,o,l)}function vl(e,t,n,o=!0,s=!1){if(s)throw e;console.error(e)}const ge=[];let Ue=-1;const Et=[];let ct=null,Mt=0;const us=Promise.resolve();let xn=null;function hl(e){const t=xn||us;return e?t.then(this?e.bind(this):e):t}function gl(e){let t=Ue+1,n=ge.length;for(;t<n;){const o=t+n>>>1,s=ge[o],i=Kt(s);i<e||i===e&&s.flags&2?t=o+1:n=o}return t}function ro(e){if(!(e.flags&1)){const t=Kt(e),n=ge[ge.length-1];!n||!(e.flags&2)&&t>=Kt(n)?ge.push(e):ge.splice(gl(t),0,e),e.flags|=1,ds()}}function ds(){xn||(xn=us.then(hs))}function ml(e){j(e)?Et.push(...e):ct&&e.id===-1?ct.splice(Mt+1,0,e):e.flags&1||(Et.push(e),e.flags|=1),ds()}function ps(e,t,n=Ue+1){for(;n<ge.length;n++){const o=ge[n];if(o&&o.flags&2){if(e&&o.id!==e.uid)continue;ge.splice(n,1),n--,o.flags&4&&(o.flags&=-2),o(),o.flags&4||(o.flags&=-2)}}}function vs(e){if(Et.length){const t=[...new Set(Et)].sort((n,o)=>Kt(n)-Kt(o));if(Et.length=0,ct){ct.push(...t);return}for(ct=t,Mt=0;Mt<ct.length;Mt++){const n=ct[Mt];n.flags&4&&(n.flags&=-2),n.flags&8||n(),n.flags&=-2}ct=null,Mt=0}}const Kt=e=>e.id==null?e.flags&2?-1:1/0:e.id;function hs(e){try{for(Ue=0;Ue<ge.length;Ue++){const t=ge[Ue];t&&!(t.flags&8)&&(t.flags&4&&(t.flags&=-2),zt(t,t.i,t.i?15:14),t.flags&4||(t.flags&=-2))}}finally{for(;Ue<ge.length;Ue++){const t=ge[Ue];t&&(t.flags&=-2)}Ue=-1,ge.length=0,vs(),xn=null,(ge.length||Et.length)&&hs()}}let Ve=null,gs=null;function yn(e){const t=Ve;return Ve=e,gs=e&&e.type.__scopeId||null,t}function bl(e,t=Ve,n){if(!t||e._n)return e;const o=(...s)=>{o._d&&Zs(-1);const i=yn(t),l=wt.length;let r;try{r=e(...s)}finally{for(let a=wt.length;a>l;a--)Xs();yn(i),o._d&&Zs(1)}return r};return o._n=!0,o._c=!0,o._d=!0,o}function bt(e,t,n,o){const s=e.dirs,i=t&&t.dirs;for(let l=0;l<s.length;l++){const r=s[l];i&&(r.oldValue=i[l].value);let a=r.dir[o];a&&(je(),Fe(a,n,8,[e.el,r,e,t]),Be())}}function xl(e,t){if(he){let n=he.provides;const o=he.parent&&he.parent.provides;o===n&&(n=he.provides=Object.create(o)),n[e]=t}}function _n(e,t,n=!1){const o=wr();if(o||Rt){let s=Rt?Rt._context.provides:o?o.parent==null||o.ce?o.vnode.appContext&&o.vnode.appContext.provides:o.parent.provides:void 0;if(s&&e in s)return s[e];if(arguments.length>1)return n&&B(t)?t.call(o&&o.proxy):t}}const yl=Symbol.for("v-scx"),_l=()=>_n(yl);function wn(e,t,n){return ms(e,t,n)}function ms(e,t,n=ne){const{immediate:o,deep:s,flush:i,once:l}=n,r=ce({},n),a=t&&o||!t&&i!=="post";let v;if(Ot){if(i==="sync"){const S=_l();v=S.__watcherHandles||(S.__watcherHandles=[])}else if(!a){const S=()=>{};return S.stop=Ne,S.resume=Ne,S.pause=Ne,S}}const f=he;r.call=(S,x,w)=>Fe(S,f,x,w);let g=!1;i==="post"?r.scheduler=S=>{be(S,f&&f.suspense)}:i!=="sync"&&(g=!0,r.scheduler=(S,x)=>{x?S():ro(S)}),r.augmentJob=S=>{t&&(S.flags|=4),g&&(S.flags|=2,f&&(S.id=f.uid,S.i=f))};const _=cl(e,t,r);return Ot&&(v?v.push(_):a&&_()),_}function wl(e,t,n){const o=this.proxy,s=se(e)?e.includes(".")?bs(o,e):()=>o[e]:e.bind(o,o);let i;B(t)?i=t:(i=t.handler,n=t);const l=sn(this),r=ms(s,i.bind(o),n);return l(),r}function bs(e,t){const n=t.split(".");return()=>{let o=e;for(let s=0;s<n.length&&o;s++)o=o[n[s]];return o}}const ft=new WeakMap,xs=Symbol("_vte"),kl=e=>e.__isTeleport,xt=e=>e&&(e.disabled||e.disabled===""),Sl=e=>e&&(e.defer||e.defer===""),ys=e=>typeof SVGElement<"u"&&e instanceof SVGElement,_s=e=>typeof MathMLElement=="function"&&e instanceof MathMLElement,ao=(e,t)=>{const n=e&&e.to;return se(n)?t?t(n):null:n},Tl={name:"Teleport",__isTeleport:!0,process(e,t,n,o,s,i,l,r,a,v){const{mc:f,pc:g,pbc:_,o:{insert:S,querySelector:x,createText:w,createComment:R,parentNode:P}}=v,M=xt(t.props);let{dynamicChildren:z}=t;const k=(D,W,F)=>{D.shapeFlag&16&&f(D.children,W,F,s,i,l,r,a)},I=(D=t)=>{const W=xt(D.props),F=D.target=ao(D.props,x),H=co(F,D,w,S);F&&(l!=="svg"&&ys(F)?l="svg":l!=="mathml"&&_s(F)&&(l="mathml"),s&&s.isCE&&(s.ce._teleportTargets||(s.ce._teleportTargets=new Set)).add(F),W||(k(D,F,H),Yt(D,!1)))},G=D=>{const W=()=>{if(ft.get(D)===W){if(ft.delete(D),xt(D.props)){const F=P(D.el)||n;k(D,F,D.anchor),Yt(D,!0)}I(D)}};ft.set(D,W),be(W,i)};if(e==null){const D=t.el=w(""),W=t.anchor=w("");if(S(D,n,o),S(W,n,o),Sl(t.props)||i&&i.pendingBranch){G(t);return}M&&(k(t,n,W),Yt(t,!0)),I()}else{t.el=e.el;const D=t.anchor=e.anchor,W=ft.get(e);if(W){W.flags|=8,ft.delete(e),G(t);return}t.targetStart=e.targetStart;const F=t.target=e.target,H=t.targetAnchor=e.targetAnchor,le=xt(e.props),de=le?n:F,Te=le?D:H;if(l==="svg"||ys(F)?l="svg":(l==="mathml"||_s(F))&&(l="mathml"),z?(_(e.dynamicChildren,z,de,s,i,l,r),ko(e,t,!0)):a||g(e,t,de,Te,s,i,l,r,!1),M)le?t.props&&e.props&&t.props.to!==e.props.to&&(t.props.to=e.props.to):kn(t,n,D,v,1);else if((t.props&&t.props.to)!==(e.props&&e.props.to)){const we=ao(t.props,x);we&&(t.target=we,kn(t,we,null,v,0))}else le&&kn(t,F,H,v,1);Yt(t,M)}},remove(e,t,n,{um:o,o:{remove:s}},i){const{shapeFlag:l,children:r,anchor:a,targetStart:v,targetAnchor:f,target:g,props:_}=e,S=xt(_),x=i||!S,w=ft.get(e);if(w&&(w.flags|=8,ft.delete(e)),g&&(s(v),s(f)),i&&s(a),!w&&(S||g)&&l&16)for(let R=0;R<r.length;R++){const P=r[R];o(P,t,n,x,!!P.dynamicChildren)}},move:kn,hydrate:Cl};function kn(e,t,n,{o:{insert:o},m:s},i=2){i===0&&o(e.targetAnchor,t,n);const{el:l,anchor:r,shapeFlag:a,children:v,props:f}=e,g=i===2;if(g&&o(l,t,n),!ft.has(e)&&(!g||xt(f))&&a&16)for(let _=0;_<v.length;_++)s(v[_],t,n,2);g&&o(r,t,n)}function Cl(e,t,n,o,s,i,{o:{nextSibling:l,parentNode:r,querySelector:a,insert:v,createText:f}},g){function _(R,P){let M=P;for(;M;){if(M&&M.nodeType===8){if(M.data==="teleport start anchor")t.targetStart=M;else if(M.data==="teleport anchor"){t.targetAnchor=M,R._lpa=t.targetAnchor&&l(t.targetAnchor);break}}M=l(M)}}function S(R,P){P.anchor=g(l(R),P,r(R),n,o,s,i)}const x=t.target=ao(t.props,a),w=xt(t.props);if(x){const R=x._lpa||x.firstChild;t.shapeFlag&16&&(w?(S(e,t),_(x,R),t.targetAnchor||co(x,t,f,v,r(e)===x?e:null)):(t.anchor=l(e),_(x,R),t.targetAnchor||co(x,t,f,v),g(R&&l(R),t,x,n,o,s,i))),Yt(t,w)}else w&&t.shapeFlag&16&&(S(e,t),t.targetStart=e,t.targetAnchor=l(e));return t.anchor&&l(t.anchor)}const Al=Tl;function Yt(e,t){const n=e.ctx;if(n&&n.ut){let o,s;for(t?(o=e.el,s=e.anchor):(o=e.targetStart,s=e.targetAnchor);o&&o!==s;)o.nodeType===1&&o.setAttribute("data-v-owner",n.uid),o=o.nextSibling;n.ut()}}function co(e,t,n,o,s=null){const i=t.targetStart=n(""),l=t.targetAnchor=n("");return i[xs]=l,e&&(o(i,e,s),o(l,e,s)),l}const fo=Symbol("_leaveCb");function uo(e,t){e.shapeFlag&6&&e.component?(e.transition=t,uo(e.component.subTree,t)):e.shapeFlag&128?(e.ssContent.transition=t.clone(e.ssContent),e.ssFallback.transition=t.clone(e.ssFallback)):e.transition=t}function qt(e,t){return B(e)?ce({name:e.name},t,{setup:e}):e}function po(e){e.ids=[e.ids[0]+e.ids[2]+++"-",0,0]}function ws(e,t){let n;return!!((n=Object.getOwnPropertyDescriptor(e,t))&&!n.configurable)}const Sn=new WeakMap;function Xt(e,t,n,o,s=!1){if(j(e)){e.forEach((w,R)=>Xt(w,t&&(j(t)?t[R]:t),n,o,s));return}if(Zt(o)&&!s){o.shapeFlag&512&&o.type.__asyncResolved&&o.component.subTree.component&&Xt(e,t,n,o.component.subTree);return}const i=o.shapeFlag&4?Co(o.component):o.el,l=s?null:i,{i:r,r:a}=e,v=t&&t.r,f=r.refs===ne?r.refs={}:r.refs,g=r.setupState,_=Y(g),S=g===ne?Ro:w=>ws(f,w)?!1:X(_,w),x=(w,R)=>!(R&&ws(f,R));if(v!=null&&v!==a){if(ks(t),se(v))f[v]=null,S(v)&&(g[v]=null);else if(ue(v)){const w=t;x(v,w.k)&&(v.value=null),w.k&&(f[w.k]=null)}}if(B(a))zt(a,r,12,[l,f]);else{const w=se(a),R=ue(a);if(w||R){const P=()=>{if(e.f){const M=w?S(a)?g[a]:f[a]:x()||!e.k?a.value:f[e.k];if(s)j(M)&&jn(M,i);else if(j(M))M.includes(i)||M.push(i);else if(w)f[a]=[i],S(a)&&(g[a]=f[a]);else{const z=[i];x(a,e.k)&&(a.value=z),e.k&&(f[e.k]=z)}}else w?(f[a]=l,S(a)&&(g[a]=l)):R&&(x(a,e.k)&&(a.value=l),e.k&&(f[e.k]=l))};if(l){const M=()=>{P(),Sn.delete(e)};M.id=-1,Sn.set(e,M),be(M,n)}else ks(e),P()}}}function ks(e){const t=Sn.get(e);t&&(t.flags|=8,Sn.delete(e))}const Ss=e=>e.nodeType===8;un().requestIdleCallback,un().cancelIdleCallback;function zl(e,t){if(Ss(e)&&e.data==="["){let n=1,o=e.nextSibling;for(;o;){if(o.nodeType===1){if(t(o)===!1)break}else if(Ss(o))if(o.data==="]"){if(--n===0)break}else o.data==="["&&n++;o=o.nextSibling}}else t(e)}const Zt=e=>!!e.type.__asyncLoader;function El(e){B(e)&&(e={loader:e});const{loader:t,loadingComponent:n,errorComponent:o,delay:s=200,hydrate:i,timeout:l,suspensible:r=!0,onError:a}=e;let v=null,f,g=0;const _=()=>(g++,v=null,S()),S=()=>{let x;return v||(x=v=t().catch(w=>{if(w=w instanceof Error?w:new Error(String(w)),a)return new Promise((R,P)=>{a(w,()=>R(_()),()=>P(w),g+1)});throw w}).then(w=>x!==v&&v?v:(w&&(w.__esModule||w[Symbol.toStringTag]==="Module")&&(w=w.default),f=w,w)))};return qt({name:"AsyncComponentWrapper",__asyncLoader:S,__asyncHydrate(x,w,R){const P=x.isConnected;let M=!1;(w.bu||(w.bu=[])).push(()=>M=!0);const z=()=>{M||!x.parentNode||P&&!x.isConnected||R()},k=i?()=>{const I=i(z,G=>zl(x,G));I&&(w.bum||(w.bum=[])).push(I)}:z;f?k():S().then(()=>!w.isUnmounted&&k())},get __asyncResolved(){return f},setup(){const x=he;if(po(x),f)return()=>Tn(f,x);const w=I=>{v=null,Wt(I,x,13,!o)};if(r&&x.suspense||Ot)return S().then(I=>()=>Tn(I,x)).catch(I=>(w(I),()=>o?xe(o,{error:I}):null));const R=ee(!1),P=ee(),M=ee(!!s);let z,k;return yt(()=>{z!=null&&clearTimeout(z),k!=null&&clearTimeout(k)}),s&&(k=setTimeout(()=>{x.isUnmounted||(M.value=!1)},s)),l!=null&&(z=setTimeout(()=>{if(!x.isUnmounted&&!R.value&&!P.value){const I=new Error(`Async component timed out after ${l}ms.`);w(I),P.value=I}},l)),S().then(()=>{x.isUnmounted||(R.value=!0,x.parent&&vo(x.parent.vnode)&&x.parent.update())}).catch(I=>{if(x.isUnmounted){v=null;return}w(I),P.value=I}),()=>{if(R.value&&f)return Tn(f,x);if(P.value&&o)return xe(o,{error:P.value});if(n&&!M.value)return Tn(n,x)}}})}function Tn(e,t){const{ref:n,props:o,children:s,ce:i}=t.vnode,l=xe(e,o,s);return l.ref=n,l.ce=i,delete t.vnode.ce,l}const vo=e=>e.type.__isKeepAlive;function Ml(e,t){Ts(e,"a",t)}function Rl(e,t){Ts(e,"da",t)}function Ts(e,t,n=he){const o=e.__wdc||(e.__wdc=()=>{let s=n;for(;s;){if(s.isDeactivated)return;s=s.parent}return e()});if(Cn(t,o,n),n){let s=n.parent;for(;s&&s.parent;)vo(s.parent.vnode)&&Il(o,t,n,s),s=s.parent}}function Il(e,t,n,o){const s=Cn(t,e,o,!0);yt(()=>{jn(o[t],s)},n)}function Cn(e,t,n=he,o=!1){if(n){const s=n[e]||(n[e]=[]),i=t.__weh||(t.__weh=(...l)=>{je();const r=sn(n),a=Fe(t,n,e,l);return r(),Be(),a});return o?s.unshift(i):s.push(i),i}}const nt=e=>(t,n=he)=>{(!Ot||e==="sp")&&Cn(e,(...o)=>t(...o),n)},Pl=nt("bm"),Jt=nt("m"),Ol=nt("bu"),Ll=nt("u"),Fl=nt("bum"),yt=nt("um"),Nl=nt("sp"),Dl=nt("rtg"),$l=nt("rtc");function jl(e,t=he){Cn("ec",e,t)}const Bl=Symbol.for("v-ndc");function Hl(e,t,n,o){let s;const i=n,l=j(e);if(l||se(e)){const r=l&&gt(e);let a=!1,v=!1;r&&(a=!Ae(e),v=tt(e),e=dn(e)),s=new Array(e.length);for(let f=0,g=e.length;f<g;f++)s[f]=t(a?v?At(Le(e[f])):Le(e[f]):e[f],f,void 0,i)}else if(typeof e=="number"){s=new Array(e);for(let r=0;r<e;r++)s[r]=t(r+1,r,void 0,i)}else if(Q(e))if(e[Symbol.iterator])s=Array.from(e,(r,a)=>t(r,a,void 0,i));else{const r=Object.keys(e);s=new Array(r.length);for(let a=0,v=r.length;a<v;a++){const f=r[a];s[a]=t(e[f],f,a,i)}}else s=[];return s}const ho=e=>e?ni(e)?Co(e):ho(e.parent):null,Qt=ce(Object.create(null),{$:e=>e,$el:e=>e.vnode.el,$data:e=>e.data,$props:e=>e.props,$attrs:e=>e.attrs,$slots:e=>e.slots,$refs:e=>e.refs,$parent:e=>ho(e.parent),$root:e=>ho(e.root),$host:e=>e.ce,$emit:e=>e.emit,$options:e=>Es(e),$forceUpdate:e=>e.f||(e.f=()=>{ro(e.update)}),$nextTick:e=>e.n||(e.n=hl.bind(e.proxy)),$watch:e=>wl.bind(e)}),go=(e,t)=>e!==ne&&!e.__isScriptSetup&&X(e,t),Ul={get({_:e},t){if(t==="__v_skip")return!0;const{ctx:n,setupState:o,data:s,props:i,accessCache:l,type:r,appContext:a}=e;if(t[0]!=="$"){const _=l[t];if(_!==void 0)switch(_){case 1:return o[t];case 2:return s[t];case 4:return n[t];case 3:return i[t]}else{if(go(o,t))return l[t]=1,o[t];if(s!==ne&&X(s,t))return l[t]=2,s[t];if(X(i,t))return l[t]=3,i[t];if(n!==ne&&X(n,t))return l[t]=4,n[t];mo&&(l[t]=0)}}const v=Qt[t];let f,g;if(v)return t==="$attrs"&&ve(e.attrs,"get",""),v(e);if((f=r.__cssModules)&&(f=f[t]))return f;if(n!==ne&&X(n,t))return l[t]=4,n[t];if(g=a.config.globalProperties,X(g,t))return g[t]},set({_:e},t,n){const{data:o,setupState:s,ctx:i}=e;return go(s,t)?(s[t]=n,!0):o!==ne&&X(o,t)?(o[t]=n,!0):X(e.props,t)||t[0]==="$"&&t.slice(1)in e?!1:(i[t]=n,!0)},has({_:{data:e,setupState:t,accessCache:n,ctx:o,appContext:s,props:i,type:l}},r){let a;return!!(n[r]||e!==ne&&r[0]!=="$"&&X(e,r)||go(t,r)||X(i,r)||X(o,r)||X(Qt,r)||X(s.config.globalProperties,r)||(a=l.__cssModules)&&a[r])},defineProperty(e,t,n){return n.get!=null?e._.accessCache[t]=0:X(n,"value")&&this.set(e,t,n.value,null),Reflect.defineProperty(e,t,n)}};function Cs(e){return j(e)?e.reduce((t,n)=>(t[n]=null,t),{}):e}let mo=!0;function Vl(e){const t=Es(e),n=e.proxy,o=e.ctx;mo=!1,t.beforeCreate&&As(t.beforeCreate,e,"bc");const{data:s,computed:i,methods:l,watch:r,provide:a,inject:v,created:f,beforeMount:g,mounted:_,beforeUpdate:S,updated:x,activated:w,deactivated:R,beforeDestroy:P,beforeUnmount:M,destroyed:z,unmounted:k,render:I,renderTracked:G,renderTriggered:D,errorCaptured:W,serverPrefetch:F,expose:H,inheritAttrs:le,components:de,directives:Te,filters:we}=t;if(v&&Gl(v,o,null),l)for(const q in l){const K=l[q];B(K)&&(o[q]=K.bind(n))}if(s){const q=s.call(n,n);Q(q)&&(e.data=oo(q))}if(mo=!0,i)for(const q in i){const K=i[q],Ee=B(K)?K.bind(n,n):B(K.get)?K.get.bind(n,n):Ne,Me=!B(K)&&B(K.set)?K.set.bind(n):Ne,ye=V({get:Ee,set:Me});Object.defineProperty(o,q,{enumerable:!0,configurable:!0,get:()=>ye.value,set:_e=>ye.value=_e})}if(r)for(const q in r)zs(r[q],o,n,q);if(a){const q=B(a)?a.call(n):a;Reflect.ownKeys(q).forEach(K=>{xl(K,q[K])})}f&&As(f,e,"c");function ie(q,K){j(K)?K.forEach(Ee=>q(Ee.bind(n))):K&&q(K.bind(n))}if(ie(Pl,g),ie(Jt,_),ie(Ol,S),ie(Ll,x),ie(Ml,w),ie(Rl,R),ie(jl,W),ie($l,G),ie(Dl,D),ie(Fl,M),ie(yt,k),ie(Nl,F),j(H))if(H.length){const q=e.exposed||(e.exposed={});H.forEach(K=>{Object.defineProperty(q,K,{get:()=>n[K],set:Ee=>n[K]=Ee,enumerable:!0})})}else e.exposed||(e.exposed={});I&&e.render===Ne&&(e.render=I),le!=null&&(e.inheritAttrs=le),de&&(e.components=de),Te&&(e.directives=Te),F&&po(e)}function Gl(e,t,n=Ne){j(e)&&(e=bo(e));for(const o in e){const s=e[o];let i;Q(s)?"default"in s?i=_n(s.from||o,s.default,!0):i=_n(s.from||o):i=_n(s),ue(i)?Object.defineProperty(t,o,{enumerable:!0,configurable:!0,get:()=>i.value,set:l=>i.value=l}):t[o]=i}}function As(e,t,n){Fe(j(e)?e.map(o=>o.bind(t.proxy)):e.bind(t.proxy),t,n)}function zs(e,t,n,o){let s=o.includes(".")?bs(n,o):()=>n[o];if(se(e)){const i=t[e];B(i)&&wn(s,i)}else if(B(e))wn(s,e.bind(n));else if(Q(e))if(j(e))e.forEach(i=>zs(i,t,n,o));else{const i=B(e.handler)?e.handler.bind(n):t[e.handler];B(i)&&wn(s,i,e)}}function Es(e){const t=e.type,{mixins:n,extends:o}=t,{mixins:s,optionsCache:i,config:{optionMergeStrategies:l}}=e.appContext,r=i.get(t);let a;return r?a=r:!s.length&&!n&&!o?a=t:(a={},s.length&&s.forEach(v=>An(a,v,l,!0)),An(a,t,l)),Q(t)&&i.set(t,a),a}function An(e,t,n,o=!1){const{mixins:s,extends:i}=t;i&&An(e,i,n,!0),s&&s.forEach(l=>An(e,l,n,!0));for(const l in t)if(!(o&&l==="expose")){const r=Wl[l]||n&&n[l];e[l]=r?r(e[l],t[l]):t[l]}return e}const Wl={data:Ms,props:Rs,emits:Rs,methods:en,computed:en,beforeCreate:me,created:me,beforeMount:me,mounted:me,beforeUpdate:me,updated:me,beforeDestroy:me,beforeUnmount:me,destroyed:me,unmounted:me,activated:me,deactivated:me,errorCaptured:me,serverPrefetch:me,components:en,directives:en,watch:Yl,provide:Ms,inject:Kl};function Ms(e,t){return t?e?function(){return ce(B(e)?e.call(this,this):e,B(t)?t.call(this,this):t)}:t:e}function Kl(e,t){return en(bo(e),bo(t))}function bo(e){if(j(e)){const t={};for(let n=0;n<e.length;n++)t[e[n]]=e[n];return t}return e}function me(e,t){return e?[...new Set([].concat(e,t))]:t}function en(e,t){return e?ce(Object.create(null),e,t):t}function Rs(e,t){return e?j(e)&&j(t)?[...new Set([...e,...t])]:ce(Object.create(null),Cs(e),Cs(t??{})):t}function Yl(e,t){if(!e)return t;if(!t)return e;const n=ce(Object.create(null),e);for(const o in t)n[o]=me(e[o],t[o]);return n}function Is(){return{app:null,config:{isNativeTag:Ro,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let ql=0;function Xl(e,t){return function(o,s=null){B(o)||(o=ce({},o)),s!=null&&!Q(s)&&(s=null);const i=Is(),l=new WeakSet,r=[];let a=!1;const v=i.app={_uid:ql++,_component:o,_props:s,_container:null,_context:i,_instance:null,version:Rr,get config(){return i.config},set config(f){},use(f,...g){return l.has(f)||(f&&B(f.install)?(l.add(f),f.install(v,...g)):B(f)&&(l.add(f),f(v,...g))),v},mixin(f){return i.mixins.includes(f)||i.mixins.push(f),v},component(f,g){return g?(i.components[f]=g,v):i.components[f]},directive(f,g){return g?(i.directives[f]=g,v):i.directives[f]},mount(f,g,_){if(!a){const S=v._ceVNode||xe(o,s);return S.appContext=i,_===!0?_="svg":_===!1&&(_=void 0),e(S,f,_),a=!0,v._container=f,f.__vue_app__=v,Co(S.component)}},onUnmount(f){r.push(f)},unmount(){a&&(Fe(r,v._instance,16),e(null,v._container),delete v._container.__vue_app__)},provide(f,g){return i.provides[f]=g,v},runWithContext(f){const g=Rt;Rt=v;try{return f()}finally{Rt=g}}};return v}}let Rt=null;const Zl=(e,t)=>t==="modelValue"||t==="model-value"?e.modelModifiers:e[`${t}Modifiers`]||e[`${Ie(t)}Modifiers`]||e[`${vt(t)}Modifiers`];function Jl(e,t,...n){if(e.isUnmounted)return;const o=e.vnode.props||ne;let s=n;const i=t.startsWith("update:"),l=i&&Zl(o,t.slice(7));l&&(l.trim&&(s=n.map(f=>se(f)?f.trim():f)),l.number&&(s=n.map(Ei)));let r,a=o[r=Hn(t)]||o[r=Hn(Ie(t))];!a&&i&&(a=o[r=Hn(vt(t))]),a&&Fe(a,e,6,s);const v=o[r+"Once"];if(v){if(!e.emitted)e.emitted={};else if(e.emitted[r])return;e.emitted[r]=!0,Fe(v,e,6,s)}}const Ql=new WeakMap;function Ps(e,t,n=!1){const o=n?Ql:t.emitsCache,s=o.get(e);if(s!==void 0)return s;const i=e.emits;let l={},r=!1;if(!B(e)){const a=v=>{const f=Ps(v,t,!0);f&&(r=!0,ce(l,f))};!n&&t.mixins.length&&t.mixins.forEach(a),e.extends&&a(e.extends),e.mixins&&e.mixins.forEach(a)}return!i&&!r?(Q(e)&&o.set(e,null),null):(j(i)?i.forEach(a=>l[a]=null):ce(l,i),Q(e)&&o.set(e,l),l)}function zn(e,t){return!e||!an(t)?!1:(t=t.slice(2),t=t==="Once"?t:t.replace(/Once$/,""),X(e,t[0].toLowerCase()+t.slice(1))||X(e,vt(t))||X(e,t))}function Mf(){}function Os(e){const{type:t,vnode:n,proxy:o,withProxy:s,propsOptions:[i],slots:l,attrs:r,emit:a,render:v,renderCache:f,props:g,data:_,setupState:S,ctx:x,inheritAttrs:w}=e,R=yn(e);let P,M;try{if(n.shapeFlag&4){const k=s||o,I=k;P=Ke(v.call(I,k,f,g,S,_,x)),M=r}else{const k=t;P=Ke(k.length>1?k(g,{attrs:r,slots:l,emit:a}):k(g,null)),M=t.props?r:er(r)}}catch(k){wt.length=0,Wt(k,e,1),P=xe(ut)}let z=P;if(M&&w!==!1){const k=Object.keys(M),{shapeFlag:I}=z;k.length&&I&7&&(i&&k.some(cn)&&(M=tr(M,i)),z=It(z,M,!1,!0))}return n.dirs&&(z=It(z,null,!1,!0),z.dirs=z.dirs?z.dirs.concat(n.dirs):n.dirs),n.transition&&uo(z,n.transition),P=z,yn(R),P}const er=e=>{let t;for(const n in e)(n==="class"||n==="style"||an(n))&&((t||(t={}))[n]=e[n]);return t},tr=(e,t)=>{const n={};for(const o in e)(!cn(o)||!(o.slice(9)in t))&&(n[o]=e[o]);return n};function nr(e,t,n){const{props:o,children:s,component:i}=e,{props:l,children:r,patchFlag:a}=t,v=i.emitsOptions;if(t.dirs||t.transition)return!0;if(n&&a>=0){if(a&1024)return!0;if(a&16)return o?Ls(o,l,v):!!l;if(a&8){const f=t.dynamicProps;for(let g=0;g<f.length;g++){const _=f[g];if(Fs(l,o,_)&&!zn(v,_))return!0}}}else return(s||r)&&(!r||!r.$stable)?!0:o===l?!1:o?l?Ls(o,l,v):!0:!!l;return!1}function Ls(e,t,n){const o=Object.keys(t);if(o.length!==Object.keys(e).length)return!0;for(let s=0;s<o.length;s++){const i=o[s];if(Fs(t,e,i)&&!zn(n,i))return!0}return!1}function Fs(e,t,n){const o=e[n],s=t[n];return n==="style"&&Q(o)&&Q(s)?!Vn(o,s):o!==s}function or({vnode:e,parent:t,suspense:n},o){for(;t;){const s=t.subTree;if(s.suspense&&s.suspense.activeBranch===e&&(s.suspense.vnode.el=s.el=o,e=s),s===e)(e=t.vnode).el=o,t=t.parent;else break}n&&n.activeBranch===e&&(n.vnode.el=o)}const Ns={},Ds=()=>Object.create(Ns),$s=e=>Object.getPrototypeOf(e)===Ns;function sr(e,t,n,o=!1){const s={},i=Ds();e.propsDefaults=Object.create(null),js(e,t,s,i);for(const l in e.propsOptions[0])l in s||(s[l]=void 0);n?e.props=o?s:tl(s):e.type.props?e.props=s:e.props=i,e.attrs=i}function ir(e,t,n,o){const{props:s,attrs:i,vnode:{patchFlag:l}}=e,r=Y(s),[a]=e.propsOptions;let v=!1;if((o||l>0)&&!(l&16)){if(l&8){const f=e.vnode.dynamicProps;for(let g=0;g<f.length;g++){let _=f[g];if(zn(e.emitsOptions,_))continue;const S=t[_];if(a)if(X(i,_))S!==i[_]&&(i[_]=S,v=!0);else{const x=Ie(_);s[x]=xo(a,r,x,S,e,!1)}else S!==i[_]&&(i[_]=S,v=!0)}}}else{js(e,t,s,i)&&(v=!0);let f;for(const g in r)(!t||!X(t,g)&&((f=vt(g))===g||!X(t,f)))&&(a?n&&(n[g]!==void 0||n[f]!==void 0)&&(s[g]=xo(a,r,g,void 0,e,!0)):delete s[g]);if(i!==r)for(const g in i)(!t||!X(t,g))&&(delete i[g],v=!0)}v&&Qe(e.attrs,"set","")}function js(e,t,n,o){const[s,i]=e.propsOptions;let l=!1,r;if(t)for(let a in t){if(Dt(a))continue;const v=t[a];let f;s&&X(s,f=Ie(a))?!i||!i.includes(f)?n[f]=v:(r||(r={}))[f]=v:zn(e.emitsOptions,a)||(!(a in o)||v!==o[a])&&(o[a]=v,l=!0)}if(i){const a=Y(n),v=r||ne;for(let f=0;f<i.length;f++){const g=i[f];n[g]=xo(s,a,g,v[g],e,!X(v,g))}}return l}function xo(e,t,n,o,s,i){const l=e[n];if(l!=null){const r=X(l,"default");if(r&&o===void 0){const a=l.default;if(l.type!==Function&&!l.skipFactory&&B(a)){const{propsDefaults:v}=s;if(n in v)o=v[n];else{const f=sn(s);o=v[n]=a.call(null,t),f()}}else o=a;s.ce&&s.ce._setProp(n,o)}l[0]&&(i&&!r?o=!1:l[1]&&(o===""||o===vt(n))&&(o=!0))}return o}const lr=new WeakMap;function Bs(e,t,n=!1){const o=n?lr:t.propsCache,s=o.get(e);if(s)return s;const i=e.props,l={},r=[];let a=!1;if(!B(e)){const f=g=>{a=!0;const[_,S]=Bs(g,t,!0);ce(l,_),S&&r.push(...S)};!n&&t.mixins.length&&t.mixins.forEach(f),e.extends&&f(e.extends),e.mixins&&e.mixins.forEach(f)}if(!i&&!a)return Q(e)&&o.set(e,St),St;if(j(i))for(let f=0;f<i.length;f++){const g=Ie(i[f]);Hs(g)&&(l[g]=ne)}else if(i)for(const f in i){const g=Ie(f);if(Hs(g)){const _=i[f],S=l[g]=j(_)||B(_)?{type:_}:ce({},_),x=S.type;let w=!1,R=!0;if(j(x))for(let P=0;P<x.length;++P){const M=x[P],z=B(M)&&M.name;if(z==="Boolean"){w=!0;break}else z==="String"&&(R=!1)}else w=B(x)&&x.name==="Boolean";S[0]=w,S[1]=R,(w||X(S,"default"))&&r.push(g)}}const v=[l,r];return Q(e)&&o.set(e,v),v}function Hs(e){return e[0]!=="$"&&!Dt(e)}const yo=e=>e==="_"||e==="_ctx"||e==="$stable",_o=e=>j(e)?e.map(Ke):[Ke(e)],rr=(e,t,n)=>{if(t._n)return t;const o=bl((...s)=>_o(t(...s)),n);return o._c=!1,o},Us=(e,t,n)=>{const o=e._ctx;for(const s in e){if(yo(s))continue;const i=e[s];if(B(i))t[s]=rr(s,i,o);else if(i!=null){const l=_o(i);t[s]=()=>l}}},Vs=(e,t)=>{const n=_o(t);e.slots.default=()=>n},Gs=(e,t,n)=>{for(const o in t)(n||!yo(o))&&(e[o]=t[o])},ar=(e,t,n)=>{const o=e.slots=Ds();if(e.vnode.shapeFlag&32){const s=t._;s?(Gs(o,t,n),n&&Do(o,"_",s,!0)):Us(t,o)}else t&&Vs(e,t)},cr=(e,t,n)=>{const{vnode:o,slots:s}=e;let i=!0,l=ne;if(o.shapeFlag&32){const r=t._;r?n&&r===1?i=!1:Gs(s,t,n):(i=!t.$stable,Us(t,s)),l=t}else t&&(Vs(e,t),l={default:1});if(i)for(const r in s)!yo(r)&&l[r]==null&&delete s[r]},be=vr;function fr(e){return ur(e)}function ur(e,t){const n=un();n.__VUE__=!0;const{insert:o,remove:s,patchProp:i,createElement:l,createText:r,createComment:a,setText:v,setElementText:f,parentNode:g,nextSibling:_,setScopeId:S=Ne,insertStaticContent:x}=e,w=(c,d,u,p=null,h=null,m=null,A=void 0,T=null,C=!!d.dynamicChildren)=>{if(c===d)return;c&&!nn(c,d)&&(p=pt(c),_e(c,h,m,!0),c=null),d.patchFlag===-2&&(C=!1,d.dynamicChildren=null);const{type:y,ref:N,shapeFlag:E}=d;switch(y){case En:R(c,d,u,p);break;case ut:P(c,d,u,p);break;case Mn:c==null&&M(d,u,p,A);break;case Ge:de(c,d,u,p,h,m,A,T,C);break;default:E&1?I(c,d,u,p,h,m,A,T,C):E&6?Te(c,d,u,p,h,m,A,T,C):(E&64||E&128)&&y.process(c,d,u,p,h,m,A,T,C,Re)}N!=null&&h?Xt(N,c&&c.ref,m,d||c,!d):N==null&&c&&c.ref!=null&&Xt(c.ref,null,m,c,!0)},R=(c,d,u,p)=>{if(c==null)o(d.el=r(d.children),u,p);else{const h=d.el=c.el;d.children!==c.children&&v(h,d.children)}},P=(c,d,u,p)=>{c==null?o(d.el=a(d.children||""),u,p):d.el=c.el},M=(c,d,u,p)=>{[c.el,c.anchor]=x(c.children,d,u,p,c.el,c.anchor)},z=({el:c,anchor:d},u,p)=>{let h;for(;c&&c!==d;)h=_(c),o(c,u,p),c=h;o(d,u,p)},k=({el:c,anchor:d})=>{let u;for(;c&&c!==d;)u=_(c),s(c),c=u;s(d)},I=(c,d,u,p,h,m,A,T,C)=>{if(d.type==="svg"?A="svg":d.type==="math"&&(A="mathml"),c==null)G(d,u,p,h,m,A,T,C);else{const y=c.el&&c.el._isVueCE?c.el:null;try{y&&y._beginPatch(),F(c,d,h,m,A,T,C)}finally{y&&y._endPatch()}}},G=(c,d,u,p,h,m,A,T)=>{let C,y;const{props:N,shapeFlag:E,transition:L,dirs:$}=c;if(C=c.el=l(c.type,m,N&&N.is,N),E&8?f(C,c.children):E&16&&W(c.children,C,null,p,h,wo(c,m),A,T),$&&bt(c,null,p,"created"),D(C,c,c.scopeId,A,p),N){for(const Z in N)Z!=="value"&&!Dt(Z)&&i(C,Z,null,N[Z],m,p);"value"in N&&i(C,"value",null,N.value,m),(y=N.onVnodeBeforeMount)&&Ye(y,p,c)}$&&bt(c,null,p,"beforeMount");const U=dr(h,L);U&&L.beforeEnter(C),o(C,d,u),((y=N&&N.onVnodeMounted)||U||$)&&be(()=>{y&&Ye(y,p,c),U&&L.enter(C),$&&bt(c,null,p,"mounted")},h)},D=(c,d,u,p,h)=>{if(u&&S(c,u),p)for(let m=0;m<p.length;m++)S(c,p[m]);if(h){let m=h.subTree;if(d===m||qs(m.type)&&(m.ssContent===d||m.ssFallback===d)){const A=h.vnode;D(c,A,A.scopeId,A.slotScopeIds,h.parent)}}},W=(c,d,u,p,h,m,A,T,C=0)=>{for(let y=C;y<c.length;y++){const N=c[y]=T?ot(c[y]):Ke(c[y]);w(null,N,d,u,p,h,m,A,T)}},F=(c,d,u,p,h,m,A)=>{const T=d.el=c.el;let{patchFlag:C,dynamicChildren:y,dirs:N}=d;C|=c.patchFlag&16;const E=c.props||ne,L=d.props||ne;let $;if(u&&_t(u,!1),($=L.onVnodeBeforeUpdate)&&Ye($,u,d,c),N&&bt(d,c,u,"beforeUpdate"),u&&_t(u,!0),y&&(!c.dynamicChildren||c.dynamicChildren.length!==y.length)&&(C=0,A=!1,y=null),(E.innerHTML&&L.innerHTML==null||E.textContent&&L.textContent==null)&&f(T,""),y?H(c.dynamicChildren,y,T,u,p,wo(d,h),m):A||K(c,d,T,null,u,p,wo(d,h),m,!1),C>0){if(C&16)le(T,E,L,u,h);else if(C&2&&E.class!==L.class&&i(T,"class",null,L.class,h),C&4&&i(T,"style",E.style,L.style,h),C&8){const U=d.dynamicProps;for(let Z=0;Z<U.length;Z++){const te=U[Z],ae=E[te],pe=L[te];(pe!==ae||te==="value")&&i(T,te,ae,pe,h,u)}}C&1&&c.children!==d.children&&f(T,d.children)}else!A&&y==null&&le(T,E,L,u,h);(($=L.onVnodeUpdated)||N)&&be(()=>{$&&Ye($,u,d,c),N&&bt(d,c,u,"updated")},p)},H=(c,d,u,p,h,m,A)=>{for(let T=0;T<d.length;T++){const C=c[T],y=d[T],N=C.el&&(C.type===Ge||!nn(C,y)||C.shapeFlag&198)?g(C.el):u;w(C,y,N,null,p,h,m,A,!0)}},le=(c,d,u,p,h)=>{if(d!==u){if(d!==ne)for(const m in d)!Dt(m)&&!(m in u)&&i(c,m,d[m],null,h,p);for(const m in u){if(Dt(m))continue;const A=u[m],T=d[m];A!==T&&m!=="value"&&i(c,m,T,A,h,p)}"value"in u&&i(c,"value",d.value,u.value,h)}},de=(c,d,u,p,h,m,A,T,C)=>{const y=d.el=c?c.el:r(""),N=d.anchor=c?c.anchor:r("");let{patchFlag:E,dynamicChildren:L,slotScopeIds:$}=d;$&&(T=T?T.concat($):$),c==null?(o(y,u,p),o(N,u,p),W(d.children||[],u,N,h,m,A,T,C)):E>0&&E&64&&L&&c.dynamicChildren&&c.dynamicChildren.length===L.length?(H(c.dynamicChildren,L,u,h,m,A,T),(d.key!=null||h&&d===h.subTree)&&ko(c,d,!0)):K(c,d,u,N,h,m,A,T,C)},Te=(c,d,u,p,h,m,A,T,C)=>{d.slotScopeIds=T,c==null?d.shapeFlag&512?h.ctx.activate(d,u,p,A,C):we(d,u,p,h,m,A,C):ze(c,d,C)},we=(c,d,u,p,h,m,A)=>{const T=c.component=_r(c,p,h);if(vo(c)&&(T.ctx.renderer=Re),kr(T,!1,A),T.asyncDep){if(h&&h.registerDep(T,ie,A),!c.el){const C=T.subTree=xe(ut);P(null,C,d,u),c.placeholder=C.el}}else ie(T,c,d,u,h,m,A)},ze=(c,d,u)=>{const p=d.component=c.component;if(nr(c,d,u))if(p.asyncDep&&!p.asyncResolved){q(p,d,u);return}else p.next=d,p.update();else d.el=c.el,p.vnode=d},ie=(c,d,u,p,h,m,A)=>{const T=()=>{if(c.isMounted){let{next:E,bu:L,u:$,parent:U,vnode:Z}=c;{const Ze=Ws(c);if(Ze){E&&(E.el=Z.el,q(c,E,A)),Ze.asyncDep.then(()=>{be(()=>{c.isUnmounted||y()},h)});return}}let te=E,ae;_t(c,!1),E?(E.el=Z.el,q(c,E,A)):E=Z,L&&Un(L),(ae=E.props&&E.props.onVnodeBeforeUpdate)&&Ye(ae,U,E,Z),_t(c,!0);const pe=Os(c),Xe=c.subTree;c.subTree=pe,w(Xe,pe,g(Xe.el),pt(Xe),c,h,m),E.el=pe.el,te===null&&or(c,pe.el),$&&be($,h),(ae=E.props&&E.props.onVnodeUpdated)&&be(()=>Ye(ae,U,E,Z),h)}else{let E;const{el:L,props:$}=d,{bm:U,m:Z,parent:te,root:ae,type:pe}=c,Xe=Zt(d);_t(c,!1),U&&Un(U),!Xe&&(E=$&&$.onVnodeBeforeMount)&&Ye(E,te,d),_t(c,!0);{ae.ce&&ae.ce._hasShadowRoot()&&ae.ce._injectChildStyle(pe,c.parent?c.parent.type:void 0);const Ze=c.subTree=Os(c);w(null,Ze,u,p,c,h,m),d.el=Ze.el}if(Z&&be(Z,h),!Xe&&(E=$&&$.onVnodeMounted)){const Ze=d;be(()=>Ye(E,te,Ze),h)}(d.shapeFlag&256||te&&Zt(te.vnode)&&te.vnode.shapeFlag&256)&&c.a&&be(c.a,h),c.isMounted=!0,d=u=p=null}};c.scope.on();const C=c.effect=new Uo(T);c.scope.off();const y=c.update=C.run.bind(C),N=c.job=C.runIfDirty.bind(C);N.i=c,N.id=c.uid,C.scheduler=()=>ro(N),_t(c,!0),y()},q=(c,d,u)=>{d.component=c;const p=c.vnode.props;c.vnode=d,c.next=null,ir(c,d.props,p,u),cr(c,d.children,u),je(),ps(c),Be()},K=(c,d,u,p,h,m,A,T,C=!1)=>{const y=c&&c.children,N=c?c.shapeFlag:0,E=d.children,{patchFlag:L,shapeFlag:$}=d;if(L>0){if(L&128){Me(y,E,u,p,h,m,A,T,C);return}else if(L&256){Ee(y,E,u,p,h,m,A,T,C);return}}$&8?(N&16&&it(y,h,m),E!==y&&f(u,E)):N&16?$&16?Me(y,E,u,p,h,m,A,T,C):it(y,h,m,!0):(N&8&&f(u,""),$&16&&W(E,u,p,h,m,A,T,C))},Ee=(c,d,u,p,h,m,A,T,C)=>{c=c||St,d=d||St;const y=c.length,N=d.length,E=Math.min(y,N);let L;for(L=0;L<E;L++){const $=d[L]=C?ot(d[L]):Ke(d[L]);w(c[L],$,u,null,h,m,A,T,C)}y>N?it(c,h,m,!0,!1,E):W(d,u,p,h,m,A,T,C,E)},Me=(c,d,u,p,h,m,A,T,C)=>{let y=0;const N=d.length;let E=c.length-1,L=N-1;for(;y<=E&&y<=L;){const $=c[y],U=d[y]=C?ot(d[y]):Ke(d[y]);if(nn($,U))w($,U,u,null,h,m,A,T,C);else break;y++}for(;y<=E&&y<=L;){const $=c[E],U=d[L]=C?ot(d[L]):Ke(d[L]);if(nn($,U))w($,U,u,null,h,m,A,T,C);else break;E--,L--}if(y>E){if(y<=L){const $=L+1,U=$<N?d[$].el:p;for(;y<=L;)w(null,d[y]=C?ot(d[y]):Ke(d[y]),u,U,h,m,A,T,C),y++}}else if(y>L)for(;y<=E;)_e(c[y],h,m,!0),y++;else{const $=y,U=y,Z=new Map;for(y=U;y<=L;y++){const Ce=d[y]=C?ot(d[y]):Ke(d[y]);Ce.key!=null&&Z.set(Ce.key,y)}let te,ae=0;const pe=L-U+1;let Xe=!1,Ze=0;const rn=new Array(pe);for(y=0;y<pe;y++)rn[y]=0;for(y=$;y<=E;y++){const Ce=c[y];if(ae>=pe){_e(Ce,h,m,!0);continue}let Je;if(Ce.key!=null)Je=Z.get(Ce.key);else for(te=U;te<=L;te++)if(rn[te-U]===0&&nn(Ce,d[te])){Je=te;break}Je===void 0?_e(Ce,h,m,!0):(rn[Je-U]=y+1,Je>=Ze?Ze=Je:Xe=!0,w(Ce,d[Je],u,null,h,m,A,T,C),ae++)}const wi=Xe?pr(rn):St;for(te=wi.length-1,y=pe-1;y>=0;y--){const Ce=U+y,Je=d[Ce],ki=d[Ce+1],Si=Ce+1<N?ki.el||Ys(ki):p;rn[y]===0?w(null,Je,u,Si,h,m,A,T,C):Xe&&(te<0||y!==wi[te]?ye(Je,u,Si,2):te--)}}},ye=(c,d,u,p,h=null)=>{const{el:m,type:A,transition:T,children:C,shapeFlag:y}=c;if(y&6){ye(c.component.subTree,d,u,p);return}if(y&128){c.suspense.move(d,u,p);return}if(y&64){A.move(c,d,u,Re);return}if(A===Ge){o(m,d,u);for(let E=0;E<C.length;E++)ye(C[E],d,u,p);o(c.anchor,d,u);return}if(A===Mn){z(c,d,u);return}if(p!==2&&y&1&&T)if(p===0)T.persisted&&!m[fo]?o(m,d,u):(T.beforeEnter(m),o(m,d,u),be(()=>T.enter(m),h));else{const{leave:E,delayLeave:L,afterLeave:$}=T,U=()=>{c.ctx.isUnmounted?s(m):o(m,d,u)},Z=()=>{const te=m._isLeaving||!!m[fo];m._isLeaving&&m[fo](!0),T.persisted&&!te?U():E(m,()=>{U(),$&&$()})};L?L(m,U,Z):Z()}else o(m,d,u)},_e=(c,d,u,p=!1,h=!1)=>{const{type:m,props:A,ref:T,children:C,dynamicChildren:y,shapeFlag:N,patchFlag:E,dirs:L,cacheIndex:$,memo:U}=c;if(E===-2&&(h=!1),T!=null&&(je(),Xt(T,null,u,c,!0),Be()),$!=null&&(d.renderCache[$]=void 0),N&256){d.ctx.deactivate(c);return}const Z=N&1&&L,te=!Zt(c);let ae;if(te&&(ae=A&&A.onVnodeBeforeUnmount)&&Ye(ae,d,c),N&6)re(c.component,u,p);else{if(N&128){c.suspense.unmount(u,p);return}Z&&bt(c,null,d,"beforeUnmount"),N&64?c.type.remove(c,d,u,Re,p):y&&!y.hasOnce&&(m!==Ge||E>0&&E&64)?it(y,d,u,!1,!0):(m===Ge&&E&384||!h&&N&16)&&it(C,d,u),p&&J(c)}const pe=U!=null&&$==null;(te&&(ae=A&&A.onVnodeUnmounted)||Z||pe)&&be(()=>{ae&&Ye(ae,d,c),Z&&bt(c,null,d,"unmounted"),pe&&(c.el=null)},u)},J=c=>{const{type:d,el:u,anchor:p,transition:h}=c;if(d===Ge){O(u,p);return}if(d===Mn){k(c);return}const m=()=>{s(u),h&&!h.persisted&&h.afterLeave&&h.afterLeave()};if(c.shapeFlag&1&&h&&!h.persisted){const{leave:A,delayLeave:T}=h,C=()=>A(u,m);T?T(c.el,m,C):C()}else m()},O=(c,d)=>{let u;for(;c!==d;)u=_(c),s(c),c=u;s(d)},re=(c,d,u)=>{const{bum:p,scope:h,job:m,subTree:A,um:T,m:C,a:y}=c;Ks(C),Ks(y),p&&Un(p),h.stop(),m&&(m.flags|=8,_e(A,c,d,u)),T&&be(T,d),be(()=>{c.isUnmounted=!0},d)},it=(c,d,u,p=!1,h=!1,m=0)=>{for(let A=m;A<c.length;A++)_e(c[A],d,u,p,h)},pt=c=>{if(c.shapeFlag&6)return pt(c.component.subTree);if(c.shapeFlag&128)return c.suspense.next();const d=_(c.anchor||c.el),u=d&&d[xs];return u?_(u):d};let lt=!1;const kt=(c,d,u)=>{let p;c==null?d._vnode&&(_e(d._vnode,null,null,!0),p=d._vnode.component):w(d._vnode||null,c,d,null,null,null,u),d._vnode=c,lt||(lt=!0,ps(p),vs(),lt=!1)},Re={p:w,um:_e,m:ye,r:J,mt:we,mc:W,pc:K,pbc:H,n:pt,o:e};return{render:kt,hydrate:void 0,createApp:Xl(kt)}}function wo({type:e,props:t},n){return n==="svg"&&e==="foreignObject"||n==="mathml"&&e==="annotation-xml"&&t&&t.encoding&&t.encoding.includes("html")?void 0:n}function _t({effect:e,job:t},n){n?(e.flags|=32,t.flags|=4):(e.flags&=-33,t.flags&=-5)}function dr(e,t){return(!e||e&&!e.pendingBranch)&&t&&!t.persisted}function ko(e,t,n=!1){const o=e.children,s=t.children;if(j(o)&&j(s))for(let i=0;i<o.length;i++){const l=o[i];let r=s[i];r.shapeFlag&1&&!r.dynamicChildren&&((r.patchFlag<=0||r.patchFlag===32)&&(r=s[i]=ot(s[i]),r.el=l.el),!n&&r.patchFlag!==-2&&ko(l,r)),r.type===En&&(r.patchFlag===-1&&(r=s[i]=ot(r)),r.el=l.el),r.type===ut&&!r.el&&(r.el=l.el)}}function pr(e){const t=e.slice(),n=[0];let o,s,i,l,r;const a=e.length;for(o=0;o<a;o++){const v=e[o];if(v!==0){if(s=n[n.length-1],e[s]<v){t[o]=s,n.push(o);continue}for(i=0,l=n.length-1;i<l;)r=i+l>>1,e[n[r]]<v?i=r+1:l=r;v<e[n[i]]&&(i>0&&(t[o]=n[i-1]),n[i]=o)}}for(i=n.length,l=n[i-1];i-- >0;)n[i]=l,l=t[l];return n}function Ws(e){const t=e.subTree.component;if(t)return t.asyncDep&&!t.asyncResolved?t:Ws(t)}function Ks(e){if(e)for(let t=0;t<e.length;t++)e[t].flags|=8}function Ys(e){if(e.placeholder)return e.placeholder;const t=e.component;return t?Ys(t.subTree):null}const qs=e=>e.__isSuspense;function vr(e,t){t&&t.pendingBranch?j(e)?t.effects.push(...e):t.effects.push(e):ml(e)}const Ge=Symbol.for("v-fgt"),En=Symbol.for("v-txt"),ut=Symbol.for("v-cmt"),Mn=Symbol.for("v-stc"),wt=[];let ke=null;function Se(e=!1){wt.push(ke=e?null:[])}function Xs(){wt.pop(),ke=wt[wt.length-1]||null}let tn=1;function Zs(e,t=!1){tn+=e,e<0&&ke&&t&&(ke.hasOnce=!0)}function Js(e){return e.dynamicChildren=tn>0?ke||St:null,Xs(),tn>0&&ke&&ke.push(e),e}function We(e,t,n,o,s,i){return Js(b(e,t,n,o,s,i,!0))}function So(e,t,n,o,s){return Js(xe(e,t,n,o,s,!0))}function Qs(e){return e?e.__v_isVNode===!0:!1}function nn(e,t){return e.type===t.type&&e.key===t.key}const ei=({key:e})=>e??null,Rn=({ref:e,ref_key:t,ref_for:n})=>(typeof e=="number"&&(e=""+e),e!=null?se(e)||ue(e)||B(e)?{i:Ve,r:e,k:t,f:!!n}:e:null);function b(e,t=null,n=null,o=0,s=null,i=e===Ge?0:1,l=!1,r=!1){const a={__v_isVNode:!0,__v_skip:!0,type:e,props:t,key:t&&ei(t),ref:t&&Rn(t),scopeId:gs,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetStart:null,targetAnchor:null,staticCount:0,shapeFlag:i,patchFlag:o,dynamicProps:s,dynamicChildren:null,appContext:null,ctx:Ve};return r?(In(a,n),i&128&&e.normalize(a)):n&&(a.shapeFlag|=se(n)?8:16),tn>0&&!l&&ke&&(a.patchFlag>0||i&6)&&a.patchFlag!==32&&ke.push(a),a}const xe=hr;function hr(e,t=null,n=null,o=0,s=null,i=!1){if((!e||e===Bl)&&(e=ut),Qs(e)){const r=It(e,t,!0);return n&&In(r,n),tn>0&&!i&&ke&&(r.shapeFlag&6?ke[ke.indexOf(e)]=r:ke.push(r)),r.patchFlag=-2,r}if(Mr(e)&&(e=e.__vccOpts),t){t=gr(t);let{class:r,style:a}=t;r&&!se(r)&&(t.class=Pe(r)),Q(a)&&(io(a)&&!j(a)&&(a=ce({},a)),t.style=$t(a))}const l=se(e)?1:qs(e)?128:kl(e)?64:Q(e)?4:B(e)?2:0;return b(e,t,n,o,s,l,i,!0)}function gr(e){return e?io(e)||$s(e)?ce({},e):e:null}function It(e,t,n=!1,o=!1){const{props:s,ref:i,patchFlag:l,children:r,transition:a}=e,v=t?br(s||{},t):s,f={__v_isVNode:!0,__v_skip:!0,type:e.type,props:v,key:v&&ei(v),ref:t&&t.ref?n&&i?j(i)?i.concat(Rn(t)):[i,Rn(t)]:Rn(t):i,scopeId:e.scopeId,slotScopeIds:e.slotScopeIds,children:r,target:e.target,targetStart:e.targetStart,targetAnchor:e.targetAnchor,staticCount:e.staticCount,shapeFlag:e.shapeFlag,patchFlag:t&&e.type!==Ge?l===-1?16:l|16:l,dynamicProps:e.dynamicProps,dynamicChildren:e.dynamicChildren,appContext:e.appContext,dirs:e.dirs,transition:a,component:e.component,suspense:e.suspense,ssContent:e.ssContent&&It(e.ssContent),ssFallback:e.ssFallback&&It(e.ssFallback),placeholder:e.placeholder,el:e.el,anchor:e.anchor,ctx:e.ctx,ce:e.ce};return a&&o&&uo(f,a.clone(f)),f}function mr(e=" ",t=0){return xe(En,null,e,t)}function on(e,t){const n=xe(Mn,null,e);return n.staticCount=t,n}function Pt(e="",t=!1){return t?(Se(),So(ut,null,e)):xe(ut,null,e)}function Ke(e){return e==null||typeof e=="boolean"?xe(ut):j(e)?xe(Ge,null,e.slice()):Qs(e)?ot(e):xe(En,null,String(e))}function ot(e){return e.el===null&&e.patchFlag!==-1||e.memo?e:It(e)}function In(e,t){let n=0;const{shapeFlag:o}=e;if(t==null)t=null;else if(j(t))n=16;else if(typeof t=="object")if(o&65){const s=t.default;s&&(s._c&&(s._d=!1),In(e,s()),s._c&&(s._d=!0));return}else{n=32;const s=t._;!s&&!$s(t)?t._ctx=Ve:s===3&&Ve&&(Ve.slots._===1?t._=1:(t._=2,e.patchFlag|=1024))}else if(B(t)){if(o&65){In(e,{default:t});return}t={default:t,_ctx:Ve},n=32}else t=String(t),o&64?(n=16,t=[mr(t)]):n=8;e.children=t,e.shapeFlag|=n}function br(...e){const t={};for(let n=0;n<e.length;n++){const o=e[n];for(const s in o)if(s==="class")t.class!==o.class&&(t.class=Pe([t.class,o.class]));else if(s==="style")t.style=$t([t.style,o.style]);else if(an(s)){const i=t[s],l=o[s];l&&i!==l&&!(j(i)&&i.includes(l))?t[s]=i?[].concat(i,l):l:l==null&&i==null&&!cn(s)&&(t[s]=l)}else s!==""&&(t[s]=o[s])}return t}function Ye(e,t,n,o=null){Fe(e,t,7,[n,o])}const xr=Is();let yr=0;function _r(e,t,n){const o=e.type,s=(t?t.appContext:e.appContext)||xr,i={uid:yr++,vnode:e,type:o,parent:t,appContext:s,root:null,next:null,subTree:null,effect:null,update:null,job:null,scope:new Fi(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:t?t.provides:Object.create(s.provides),ids:t?t.ids:["",0,0],accessCache:null,renderCache:[],components:null,directives:null,propsOptions:Bs(o,s),emitsOptions:Ps(o,s),emit:null,emitted:null,propsDefaults:ne,inheritAttrs:o.inheritAttrs,ctx:ne,data:ne,props:ne,attrs:ne,slots:ne,refs:ne,setupState:ne,setupContext:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return i.ctx={_:i},i.root=t?t.root:i,i.emit=Jl.bind(null,i),e.ce&&e.ce(i),i}let he=null;const wr=()=>he||Ve;let Pn,To;{const e=un(),t=(n,o)=>{let s;return(s=e[n])||(s=e[n]=[]),s.push(o),i=>{s.length>1?s.forEach(l=>l(i)):s[0](i)}};Pn=t("__VUE_INSTANCE_SETTERS__",n=>he=n),To=t("__VUE_SSR_SETTERS__",n=>Ot=n)}const sn=e=>{const t=he;return Pn(e),e.scope.on(),()=>{e.scope.off(),Pn(t)}},ti=()=>{he&&he.scope.off(),Pn(null)};function ni(e){return e.vnode.shapeFlag&4}let Ot=!1;function kr(e,t=!1,n=!1){t&&To(t);const{props:o,children:s}=e.vnode,i=ni(e);sr(e,o,i,t),ar(e,s,n||t);const l=i?Sr(e,t):void 0;return t&&To(!1),l}function Sr(e,t){const n=e.type;e.accessCache=Object.create(null),e.proxy=new Proxy(e.ctx,Ul);const{setup:o}=n;if(o){je();const s=e.setupContext=o.length>1?Cr(e):null,i=sn(e),l=zt(o,e,0,[e.props,s]),r=Oo(l);if(Be(),i(),(r||e.sp)&&!Zt(e)&&po(e),r){if(l.then(ti,ti),t)return l.then(a=>{oi(e,a)}).catch(a=>{Wt(a,e,0)});e.asyncDep=l}else oi(e,l)}else si(e)}function oi(e,t,n){B(t)?e.type.__ssrInlineRender?e.ssrRender=t:e.render=t:Q(t)&&(e.setupState=cs(t)),si(e)}function si(e,t,n){const o=e.type;e.render||(e.render=o.render||Ne);{const s=sn(e);je();try{Vl(e)}finally{Be(),s()}}}const Tr={get(e,t){return ve(e,"get",""),e[t]}};function Cr(e){const t=n=>{e.exposed=n||{}};return{attrs:new Proxy(e.attrs,Tr),slots:e.slots,emit:e.emit,expose:t}}function Co(e){return e.exposed?e.exposeProxy||(e.exposeProxy=new Proxy(cs(nl(e.exposed)),{get(t,n){if(n in t)return t[n];if(n in Qt)return Qt[n](e)},has(t,n){return n in t||n in Qt}})):e.proxy}const Ar=/(?:^|[-_])\w/g,zr=e=>e.replace(Ar,t=>t.toUpperCase()).replace(/[-_]/g,"");function Er(e,t=!0){return B(e)?e.displayName||e.name:e.name||t&&e.__name}function ii(e,t,n=!1){let o=Er(t);if(!o&&t.__file){const s=t.__file.match(/([^/\\]+)\.\w+$/);s&&(o=s[1])}if(!o&&e){const s=i=>{for(const l in i)if(i[l]===t)return l};o=s(e.components)||e.parent&&s(e.parent.type.components)||s(e.appContext.components)}return o?zr(o):n?"App":"Anonymous"}function Mr(e){return B(e)&&"__vccOpts"in e}const V=(e,t)=>rl(e,t,Ot),Rr="3.5.40";let Ao;const li=typeof window<"u"&&window.trustedTypes;if(li)try{Ao=li.createPolicy("vue",{createHTML:e=>e})}catch{}const ri=Ao?e=>Ao.createHTML(e):e=>e,Ir="http://www.w3.org/2000/svg",Pr="http://www.w3.org/1998/Math/MathML",st=typeof document<"u"?document:null,ai=st&&st.createElement("template"),Or={insert:(e,t,n)=>{t.insertBefore(e,n||null)},remove:e=>{const t=e.parentNode;t&&t.removeChild(e)},createElement:(e,t,n,o)=>{const s=t==="svg"?st.createElementNS(Ir,e):t==="mathml"?st.createElementNS(Pr,e):n?st.createElement(e,{is:n}):st.createElement(e);return e==="select"&&o&&o.multiple!=null&&s.setAttribute("multiple",o.multiple),s},createText:e=>st.createTextNode(e),createComment:e=>st.createComment(e),setText:(e,t)=>{e.nodeValue=t},setElementText:(e,t)=>{e.textContent=t},parentNode:e=>e.parentNode,nextSibling:e=>e.nextSibling,querySelector:e=>st.querySelector(e),setScopeId(e,t){e.setAttribute(t,"")},insertStaticContent(e,t,n,o,s,i){const l=n?n.previousSibling:t.lastChild;if(s&&(s===i||s.nextSibling))for(;t.insertBefore(s.cloneNode(!0),n),!(s===i||!(s=s.nextSibling)););else{ai.innerHTML=ri(o==="svg"?`<svg>${e}</svg>`:o==="mathml"?`<math>${e}</math>`:e);const r=ai.content;if(o==="svg"||o==="mathml"){const a=r.firstChild;for(;a.firstChild;)r.appendChild(a.firstChild);r.removeChild(a)}t.insertBefore(r,n)}return[l?l.nextSibling:t.firstChild,n?n.previousSibling:t.lastChild]}},Lr=Symbol("_vtc");function Fr(e,t,n){const o=e[Lr];o&&(t=(t?[t,...o]:[...o]).join(" ")),t==null?e.removeAttribute("class"):n?e.setAttribute("class",t):e.className=t}const ci=Symbol("_vod"),Nr=Symbol("_vsh"),Dr=Symbol(""),$r=/(?:^|;)\s*display\s*:/;function jr(e,t,n){const o=e.style,s=se(n);let i=!1;if(n&&!s){if(t)if(se(t))for(const l of t.split(";")){const r=l.slice(0,l.indexOf(":")).trim();n[r]==null&&ln(o,r,"")}else for(const l in t)n[l]==null&&ln(o,l,"");for(const l in n){l==="display"&&(i=!0);const r=n[l];r!=null?Hr(e,l,!se(t)&&t?t[l]:void 0,r)||ln(o,l,r):ln(o,l,"")}}else if(s){if(t!==n){const l=o[Dr];l&&(n+=";"+l),o.cssText=n,i=$r.test(n)}}else t&&e.removeAttribute("style");ci in e&&(e[ci]=i?o.display:"",e[Nr]&&(o.display="none"))}const fi=/\s*!important$/;function ln(e,t,n){if(j(n))n.forEach(o=>ln(e,t,o));else if(n==null&&(n=""),t.startsWith("--"))e.setProperty(t,n);else{const o=Br(e,t);fi.test(n)?e.setProperty(vt(o),n.replace(fi,""),"important"):e[o]=n}}const ui=["Webkit","Moz","ms"],zo={};function Br(e,t){const n=zo[t];if(n)return n;let o=Ie(t);if(o!=="filter"&&o in e)return zo[t]=o;o=No(o);for(let s=0;s<ui.length;s++){const i=ui[s]+o;if(i in e)return zo[t]=i}return t}function Hr(e,t,n,o){return e.tagName==="TEXTAREA"&&(t==="width"||t==="height")&&se(o)&&n===o}const di="http://www.w3.org/1999/xlink";function pi(e,t,n,o,s,i=Oi(t)){o&&t.startsWith("xlink:")?n==null?e.removeAttributeNS(di,t.slice(6,t.length)):e.setAttributeNS(di,t,n):n==null||i&&!jo(n)?e.removeAttribute(t):e.setAttribute(t,i?"":De(n)?String(n):n)}function vi(e,t,n,o,s){if(t==="innerHTML"||t==="textContent"){n!=null&&(e[t]=t==="innerHTML"?ri(n):n);return}const i=e.tagName;if(t==="value"&&i!=="PROGRESS"&&!i.includes("-")){const r=i==="OPTION"?e.getAttribute("value")||"":e.value,a=n==null?e.type==="checkbox"?"on":"":String(n);(r!==a||!("_value"in e))&&(e.value=a),n==null&&e.removeAttribute(t),e._value=n;return}let l=!1;if(n===""||n==null){const r=typeof e[t];r==="boolean"?n=jo(n):n==null&&r==="string"?(n="",l=!0):r==="number"&&(n=0,l=!0)}try{e[t]=n}catch{}l&&e.removeAttribute(s||t)}function Ur(e,t,n,o){e.addEventListener(t,n,o)}function Vr(e,t,n,o){e.removeEventListener(t,n,o)}const hi=Symbol("_vei");function Gr(e,t,n,o,s=null){const i=e[hi]||(e[hi]={}),l=i[t];if(o&&l)l.value=o;else{const[r,a]=Yr(t);if(o){const v=i[t]=Zr(o,s);Ur(e,r,v,a)}else l&&(Vr(e,r,l,a),i[t]=void 0)}}const Wr=/(Once|Passive|Capture)$/,Kr=/^on:?(?:Once|Passive|Capture)$/;function Yr(e){let t,n;for(;(n=e.match(Wr))&&!Kr.test(e);)t||(t={}),e=e.slice(0,e.length-n[1].length),t[n[1].toLowerCase()]=!0;return[e[2]===":"?e.slice(3):vt(e.slice(2)),t]}let Eo=0;const qr=Promise.resolve(),Xr=()=>Eo||(qr.then(()=>Eo=0),Eo=Date.now());function Zr(e,t){const n=o=>{if(!o._vts)o._vts=Date.now();else if(o._vts<=n.attached)return;const s=n.value;if(j(s)){const i=o.stopImmediatePropagation;o.stopImmediatePropagation=()=>{i.call(o),o._stopped=!0};const l=s.slice(),r=[o];for(let a=0;a<l.length&&!o._stopped;a++){const v=l[a];v&&Fe(v,t,5,r)}}else Fe(s,t,5,[o])};return n.value=e,n.attached=Xr(),n}const gi=e=>e.charCodeAt(0)===111&&e.charCodeAt(1)===110&&e.charCodeAt(2)>96&&e.charCodeAt(2)<123,Jr=(e,t,n,o,s,i)=>{const l=s==="svg";t==="class"?Fr(e,o,l):t==="style"?jr(e,n,o):an(t)?cn(t)||Gr(e,t,n,o,i):(t[0]==="."?(t=t.slice(1),!0):t[0]==="^"?(t=t.slice(1),!1):Qr(e,t,o,l))?(vi(e,t,o),!e.tagName.includes("-")&&(t==="value"||t==="checked"||t==="selected")&&pi(e,t,o,l,i,t!=="value")):e._isVueCE&&(ea(e,t)||e._def.__asyncLoader&&(/[A-Z]/.test(t)||!se(o)))?vi(e,Ie(t),o,i,t):(t==="true-value"?e._trueValue=o:t==="false-value"&&(e._falseValue=o),pi(e,t,o,l))};function Qr(e,t,n,o){if(o)return!!(t==="innerHTML"||t==="textContent"||t in e&&gi(t)&&B(n));if(t==="spellcheck"||t==="draggable"||t==="translate"||t==="autocorrect"||t==="sandbox"&&e.tagName==="IFRAME"||t==="form"||t==="list"&&e.tagName==="INPUT"||t==="type"&&e.tagName==="TEXTAREA")return!1;if(t==="width"||t==="height"){const s=e.tagName;if(s==="IMG"||s==="VIDEO"||s==="CANVAS"||s==="SOURCE")return!1}return gi(t)&&se(n)?!1:t in e}function ea(e,t){const n=e._def.props;if(!n)return!1;const o=Ie(t);return Array.isArray(n)?n.some(s=>Ie(s)===o):Object.keys(n).some(s=>Ie(s)===o)}const ta=["ctrl","shift","alt","meta"],na={stop:e=>e.stopPropagation(),prevent:e=>e.preventDefault(),self:e=>e.target!==e.currentTarget,ctrl:e=>!e.ctrlKey,shift:e=>!e.shiftKey,alt:e=>!e.altKey,meta:e=>!e.metaKey,left:e=>"button"in e&&e.button!==0,middle:e=>"button"in e&&e.button!==1,right:e=>"button"in e&&e.button!==2,exact:(e,t)=>ta.some(n=>e[`${n}Key`]&&!t.includes(n))},mi=(e,t)=>{if(!e)return e;const n=e._withMods||(e._withMods={}),o=t.join(".");return n[o]||(n[o]=((s,...i)=>{for(let l=0;l<t.length;l++){const r=na[t[l]];if(r&&r(s,t))return}return e(s,...i)}))},oa=ce({patchProp:Jr},Or);let bi;function sa(){return bi||(bi=fr(oa))}const ia=((...e)=>{const t=sa().createApp(...e),{mount:n}=t;return t.mount=o=>{const s=ra(o);if(!s)return;const i=t._component;!B(i)&&!i.render&&!i.template&&(i.template=s.innerHTML),s.nodeType===1&&(s.textContent="");const l=n(s,!1,la(s));return s instanceof Element&&(s.removeAttribute("v-cloak"),s.setAttribute("data-v-app","")),l},t});function la(e){if(e instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&e instanceof MathMLElement)return"mathml"}function ra(e){return se(e)?document.querySelector(e):e}const Rf="modulepreload",If=function(e,t){return new URL(e,t).href},Pf={},aa=function(t,n,o){let s=Promise.resolve();function i(l){const r=new Event("vite:preloadError",{cancelable:!0});if(r.payload=l,window.dispatchEvent(r),!r.defaultPrevented)throw l}return s.then(l=>{for(const r of l||[])r.status==="rejected"&&i(r.reason);return t().catch(i)})},ca=`// ===== 0: MANDELBULB =====
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
`,fa=`// ===== 1: MANDELBOX =====
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
`,ua=`// ===== 2: MENGER SPONGE =====
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
`,da=`// ===== 3: SIERPINSKI =====
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
`,pa=`// ===== 4: KALEIDOSCOPE =====
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
`,va=`// ===== 5: ORGANIC HYBRID =====
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
`,ha=`// ===== 6: FRACTAL LAND =====
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
`,ga=`// ===== 7: GALAXY NEBULA =====
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
`,ma=`// ===== 8: INFINITE TUNNEL =====
vec3 infiniteTunnel(vec2 uv, float time) {
  float angle = atan(uv.y, uv.x), radius = length(uv);
  float tunnel = 1.0 / radius + time * 0.5, twist = angle + tunnel * 0.5;
  vec2 tuv = vec2(twist / PI, tunnel);
  vec2 grid = fract(tuv * 8.0) - 0.5;
  float glow = 0.02 / (length(grid) + 0.02);
  return hsv2rgb(vec3(tunnel * 0.1 + angle * 0.1, 0.7, glow)) * smoothstep(0.0, 0.3, radius);
}
`,ba=`// ===== 9: PLASMA FRACTAL =====
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
`,xa=`// ===== 10: CIRCUITS =====
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
`,ya=`// ===== 11: METABALLS =====
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
`,_a=`// ===== 12: VOLUMETRIC LINES =====
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
`,wa=`// ===== 13: DISCO TUNNEL =====
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
`,ka=`// ===== 14: SPEED DRIVE =====
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
`,Sa=`// ===== 15: HOT ROCKS =====
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
`,Ta=`// ===== 16: SERVER ROOM =====
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
`,Ca=`// ===== 17: REMNANT X =====
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
`,Aa=`// ===== 18: KALI SET =====
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
`,za=`// ===== 19: GENERATORS =====
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
`,Ea=`// ===== 20: SIMPLICITY GALAXY =====
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
`,Ma=`// ===== 21: RIBBONS =====
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
`,Ra=`// ===== 22: TWISTED RINGS =====
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
`,Ia=`// ===== 23: WAVES REMIX =====
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
`,Pa=`// ===== 24: DANCING METALIGHTS =====
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
`,Oa=`// ===== 25: IO BLOCKS =====
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
`,La=`// ===== 26: BEATING CIRCLES =====
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
`,Fa=`// ===== 27: CIRCLE WAVE =====
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
`,Na=`// ===== 28: SOUNDFLOWER =====
vec3 soundflower(vec2 uv, float time) {
  float r = length(uv);
  float a = atan(uv.x, uv.y);
  float w = fakeAudio(abs(a) / 6.28);
  float t = 3.0 * sqrt(abs(w - 0.5));
  float f = 0.0;
  if (r < t) f = 1.0 - r / t;
  return pow(vec3(f), vec3(1.5, 1.1, 0.8));
}
`,Da=`// ===== 29: POLAR BEATS =====
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
`,$a=`// ===== 30: UNDULANT SPECTRE =====
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
`,ja=`// ===== 31: REVISION 2015 =====
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
`,Ba=`// ===== 32: GAMEBOY STYLE =====
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
`,Ha=`// ===== 33: ELECTRIC STORM =====
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
`,Ua=`// ===== 34: VORTEX =====
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
`,Va=`// ===== 35: NEON GRID =====
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
`,Ga=`// ===== 36: MATRIX RAIN =====
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
`,Wa=`// ===== 37: FIRE =====
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
`,Ka=`// ===== 38: AURORA =====
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
`,Ya=`// ===== 39: WORMHOLE =====
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
`,qa=`// ===== 40: HEXAGONS =====
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
`,Xa=`// ===== 41: BUBBLES =====
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
`,Za=`// ===== 42: LIGHTNING =====
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
`,Ja=`// ===== 43: KALEIDOSCOPE 2D =====
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
`,Qa=`// ===== 44: STARFIELD =====
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
`,ec=`// ===== 45: LIQUID METAL =====
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
`,tc=`// ===== 46: FRACTAL TREE =====
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
`,nc=`// ===== 47: VORONOI =====
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
`,oc=`// ===== 48: PSYCHEDELIC =====
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
`,sc=`// ===== 49: ENERGY FIELD =====
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
`,ic=`precision highp float;
attribute vec2 aPosition;
varying vec2 vUV;

void main() {
  vUV = aPosition;
  gl_Position = vec4(aPosition, 0.0, 1.0);
}
`,lc=`// ===== PRECISION AND UNIFORMS =====

precision highp float;

uniform float uTime;
uniform vec2 uResolution;
uniform int uMode;

// ===== BASE FUNCTIONS AND UTILITIES =====

#define MAX_STEPS 60
#define MAX_DIST 20.0
#define SURF_DIST 0.002
#define PI 3.14159265

// 2D Rotation matrix
mat2 rot(float a) {
  float s = sin(a), c = cos(a);
  return mat2(c, -s, s, c);
}

// HSV to RGB color conversion
vec3 hsv2rgb(vec3 c) {
  vec4 K = vec4(1.0, 2.0/3.0, 1.0/3.0, 3.0);
  vec3 p = abs(fract(c.xxx + K.xyz) * 6.0 - K.www);
  return c.z * mix(K.xxx, clamp(p - K.xxx, 0.0, 1.0), c.y);
}

// Hash functions for procedural noise
float hash(float n) { return fract(sin(n) * 43758.5453); }
float hash2(vec2 p) { return fract(sin(dot(p, vec2(127.1, 311.7))) * 43758.5453); }
float hash3(vec3 p) { return fract(sin(dot(p, vec3(127.1, 311.7, 74.7))) * 43758.5453); }

// 2D noise function
float noise(vec2 p) {
  vec2 i = floor(p), f = fract(p);
  f = f * f * (3.0 - 2.0 * f);
  return mix(mix(hash2(i), hash2(i + vec2(1,0)), f.x),
             mix(hash2(i + vec2(0,1)), hash2(i + vec2(1,1)), f.x), f.y);
}

// 3D noise function
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
`,rc=`// ===== MAIN SHADER PROGRAM =====
// Note: Uniforms and precision are declared in fragment-base.glsl

varying vec2 vUV;

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
`,ac=qt({__name:"BioFractalViewer",props:{mode:{default:0}},setup(e){const t=e,n=ee(null);let o=null,s=null,i=null,l=Date.now(),r=null;const a=Object.assign({"../../shaders/effects/mode-00-mandelbulb.glsl":ca,"../../shaders/effects/mode-01-mandelbox.glsl":fa,"../../shaders/effects/mode-02-menger-sponge.glsl":ua,"../../shaders/effects/mode-03-sierpinski.glsl":da,"../../shaders/effects/mode-04-kaleidoscope.glsl":pa,"../../shaders/effects/mode-05-organic-hybrid.glsl":va,"../../shaders/effects/mode-06-fractal-land.glsl":ha,"../../shaders/effects/mode-07-galaxy-nebula.glsl":ga,"../../shaders/effects/mode-08-infinite-tunnel.glsl":ma,"../../shaders/effects/mode-09-plasma-fractal.glsl":ba,"../../shaders/effects/mode-10-circuits.glsl":xa,"../../shaders/effects/mode-11-metaballs.glsl":ya,"../../shaders/effects/mode-12-volumetric-lines.glsl":_a,"../../shaders/effects/mode-13-disco-tunnel.glsl":wa,"../../shaders/effects/mode-14-speed-drive.glsl":ka,"../../shaders/effects/mode-15-hot-rocks.glsl":Sa,"../../shaders/effects/mode-16-server-room.glsl":Ta,"../../shaders/effects/mode-17-remnant-x.glsl":Ca,"../../shaders/effects/mode-18-kali-set.glsl":Aa,"../../shaders/effects/mode-19-generators.glsl":za,"../../shaders/effects/mode-20-simplicity-galaxy.glsl":Ea,"../../shaders/effects/mode-21-ribbons.glsl":Ma,"../../shaders/effects/mode-22-twisted-rings.glsl":Ra,"../../shaders/effects/mode-23-waves-remix.glsl":Ia,"../../shaders/effects/mode-24-dancing-metalights.glsl":Pa,"../../shaders/effects/mode-25-io-blocks.glsl":Oa,"../../shaders/effects/mode-26-beating-circles.glsl":La,"../../shaders/effects/mode-27-circle-wave.glsl":Fa,"../../shaders/effects/mode-28-soundflower.glsl":Na,"../../shaders/effects/mode-29-polar-beats.glsl":Da,"../../shaders/effects/mode-30-undulant-spectre.glsl":$a,"../../shaders/effects/mode-31-revision-2015.glsl":ja,"../../shaders/effects/mode-32-gameboy-style.glsl":Ba,"../../shaders/effects/mode-33-electric-storm.glsl":Ha,"../../shaders/effects/mode-34-vortex.glsl":Ua,"../../shaders/effects/mode-35-neon-grid.glsl":Va,"../../shaders/effects/mode-36-matrix-rain.glsl":Ga,"../../shaders/effects/mode-37-fire.glsl":Wa,"../../shaders/effects/mode-38-aurora.glsl":Ka,"../../shaders/effects/mode-39-wormhole.glsl":Ya,"../../shaders/effects/mode-40-hexagons.glsl":qa,"../../shaders/effects/mode-41-bubbles.glsl":Xa,"../../shaders/effects/mode-42-lightning.glsl":Za,"../../shaders/effects/mode-43-kaleidoscope-2d.glsl":Ja,"../../shaders/effects/mode-44-starfield.glsl":Qa,"../../shaders/effects/mode-45-liquid-metal.glsl":ec,"../../shaders/effects/mode-46-fractal-tree.glsl":tc,"../../shaders/effects/mode-47-voronoi.glsl":nc,"../../shaders/effects/mode-48-psychedelic.glsl":oc,"../../shaders/effects/mode-49-energy-field.glsl":sc}),v=Object.keys(a).sort().map(R=>a[R]).join(`

`),f=ic,g=`${lc}
${v}
${rc}`,_=(R,P)=>{if(!o)return null;const M=o.createShader(R);return M?(o.shaderSource(M,P),o.compileShader(M),o.getShaderParameter(M,o.COMPILE_STATUS)?M:(console.error("Shader error:",o.getShaderInfoLog(M)),null)):null},S=()=>{const R=n.value;if(!R||(o=R.getContext("webgl")||R.getContext("experimental-webgl"),!o))return!1;const P=_(o.VERTEX_SHADER,f),M=_(o.FRAGMENT_SHADER,g);if(!P||!M||(s=o.createProgram(),!s))return!1;if(o.attachShader(s,P),o.attachShader(s,M),o.linkProgram(s),!o.getProgramParameter(s,o.LINK_STATUS))return console.error("Link error:",o.getProgramInfoLog(s)),!1;const z=new Float32Array([-1,-1,1,-1,-1,1,-1,1,1,-1,1,1]),k=o.createBuffer();o.bindBuffer(o.ARRAY_BUFFER,k),o.bufferData(o.ARRAY_BUFFER,z,o.STATIC_DRAW);const I=o.getAttribLocation(s,"aPosition");return o.enableVertexAttribArray(I),o.vertexAttribPointer(I,2,o.FLOAT,!1,0,0),r={uTime:o.getUniformLocation(s,"uTime"),uResolution:o.getUniformLocation(s,"uResolution"),uMode:o.getUniformLocation(s,"uMode")},!0},x=()=>{const R=n.value;R&&(R.width=R.clientWidth,R.height=R.clientHeight,o&&o.viewport(0,0,R.width,R.height))},w=()=>{!o||!s||!n.value||!r||(o.useProgram(s),o.uniform1f(r.uTime,(Date.now()-l)/1e3),o.uniform2f(r.uResolution,n.value.width,n.value.height),o.uniform1i(r.uMode,t.mode),o.drawArrays(o.TRIANGLES,0,6),i=requestAnimationFrame(w))};return Jt(()=>{S()&&(x(),window.addEventListener("resize",x),w())}),yt(()=>{i&&cancelAnimationFrame(i),window.removeEventListener("resize",x)}),(R,P)=>(Se(),We("canvas",{ref_key:"canvasRef",ref:n,class:"bio-fractal-canvas"},null,512))}}),xi=(e,t)=>{const n=e.__vccOpts||e;for(const[o,s]of t)n[o]=s;return n},cc=xi(ac,[["__scopeId","data-v-1ee27525"]]),fc={class:"pv-container"},uc={class:"pv-svg-container"},dc={viewBox:"0 0 840 640",preserveAspectRatio:"xMidYMid meet"},pc=["x1","y1","x2","y2"],vc=["x1","y1","x2","y2"],hc=["x1","y1","x2","y2"],gc=["x1","y1","x2","y2"],mc=["d"],bc=["cx","cy"],xc=["transform"],yc=["x1","y1","x2","y2"],_c=["x1","y1","x2","y2"],wc=["x1","y1","x2","y2"],kc=["x1","y1","x2","y2"],Sc=["d"],Tc=["cx","cy"],Cc=["transform"],Ac=["x1","y1","x2","y2"],zc=["x1","y1","x2","y2"],Ec=["x1","y1","x2","y2"],Mc=["x1","y1","x2","y2"],Rc=["x1","y1","x2","y2"],Ic=["x1","y1","x2","y2"],Pc=["points"],Oc=["d"],Lc=["cx","cy"],Fc=["transform"],Nc=["d"],Dc=["x1","y1","x2","y2"],$c=["x1","y1","x2","y2"],jc=["x1","y1","x2","y2"],Bc=["points"],Hc=["x1","y1","x2","y2"],Uc=["points"],Vc=["x1","y1","x2","y2"],Gc=["points"],Wc=["transform"],Kc=["cx","cy"],Yc=["cx","cy"],qc=["cx","cy"],Xc=["x","y"],Zc=["x","y"],Jc=["x","y"],Qc=["x","y"],ef={class:"pv-values"},tf={class:"pv-values-main"},nf={class:"pv-values-text"},of={class:"pv-values-real"},sf={class:"pv-values-imag"},lf={class:"pv-values-time"},rf={class:"pv-values-time-text"},af={class:"pv-values-time-value"},On=1.3,cf=1,Lt=-2.8,Ft=-2.8,qe=-1.2,dt=1.3,Ln=1.3,Fn=1.3,ff=xi(qt({__name:"ComplexWaveVisualization",setup(e){const t=ee(1.25),n=ee(!0);let o=null;const s=2*Math.PI*1.6,i=J=>Math.exp(-1*Math.pow(J-On,2)),l=(J,O,re)=>{const kt=-J*81*.7,Re=J*81*.35,Nn=O*61*.9,c=O*61*.25,d=-re*61;return{x:436+kt+Nn,y:355+Re+c+d}},r=V(()=>i(t.value)*Math.cos(s*t.value)),a=V(()=>i(t.value)*Math.sin(s*t.value)),v=V(()=>{const J=[];for(let O=0;O<=2.5;O+=.015){const re=i(O);J.push({t:O,re:re*Math.cos(s*O),im:re*Math.sin(s*O)})}return J}),f=V(()=>v.value.map((J,O)=>{const re=l(J.t,J.re,J.im);return`${O===0?"M":"L"} ${re.x} ${re.y}`}).join(" ")),g=V(()=>v.value.map((J,O)=>{const re=l(qe,J.re,J.im);return`${O===0?"M":"L"} ${re.x} ${re.y}`}).join(" ")),_=V(()=>v.value.map((J,O)=>{const re=l(J.t,Lt,J.im);return`${O===0?"M":"L"} ${re.x} ${re.y}`}).join(" ")),S=V(()=>v.value.map((J,O)=>{const re=l(J.t,J.re,Ft);return`${O===0?"M":"L"} ${re.x} ${re.y}`}).join(" ")),x=V(()=>({tl:l(qe,-dt,dt),tr:l(qe,dt,dt),bl:l(qe,-dt,-dt),br:l(qe,dt,-dt)})),w=V(()=>l(qe,0,1.4)),R=V(()=>l(qe,0,-.3)),P=V(()=>l(qe,-.3,0)),M=V(()=>l(qe,1,0)),z=V(()=>({tl:l(0,Lt,Ln),tr:l(2.5,Lt,Ln),bl:l(0,Lt,-Ln),br:l(2.5,Lt,-Ln)})),k=V(()=>({bl:l(0,-Fn,Ft),br:l(0,Fn,Ft),tl:l(2.5,-Fn,Ft),tr:l(2.5,Fn,Ft)})),I=V(()=>l(On,0,0)),G=V(()=>l(On,0,1.6)),D=V(()=>l(On,1.5,0)),W=V(()=>l(0,0,0)),F=V(()=>l(2.7,0,0)),H=V(()=>l(t.value,r.value,a.value)),le=V(()=>l(qe,r.value,a.value)),de=V(()=>l(t.value,Lt,a.value)),Te=V(()=>l(t.value,r.value,Ft)),we=V(()=>Math.atan2(z.value.tl.y-z.value.tr.y,z.value.tl.x-z.value.tr.x)*(180/Math.PI)),ze=V(()=>({x:(z.value.tl.x+z.value.tr.x)/2,y:(z.value.tl.y+z.value.tr.y)/2})),ie=V(()=>Math.atan2(k.value.bl.y-k.value.tl.y,k.value.bl.x-k.value.tl.x)*(180/Math.PI)),q=V(()=>({x:(k.value.br.x+k.value.tr.x)/2,y:(k.value.br.y+k.value.tr.y)/2})),K=V(()=>Math.atan2(x.value.tl.y-x.value.tr.y,x.value.tl.x-x.value.tr.x)*(180/Math.PI)),Ee=V(()=>({x:(x.value.tl.x+x.value.tr.x)/2,y:(x.value.tl.y+x.value.tr.y)/2})),Me=V(()=>({x:(W.value.x+F.value.x)/2,y:(W.value.y+F.value.y)/2}));let ye=0;const _e=()=>{ye++,n.value&&ye%2===0&&(t.value+=.02,t.value>2.5&&(t.value=0)),o=requestAnimationFrame(_e)};return Jt(()=>{o=requestAnimationFrame(_e)}),yt(()=>{o&&cancelAnimationFrame(o)}),(J,O)=>(Se(),We("div",fc,[O[15]||(O[15]=b("div",{class:"pv-title"},[b("h1",{class:"pv-title-gradient-1"}," The Observer Effect explains why the same "),b("h2",{class:"pv-title-gradient-2"}," life feels different to different people ")],-1)),b("div",uc,[(Se(),We("svg",dc,[O[4]||(O[4]=on('<defs data-v-65cb23ba><linearGradient id="pv-helixGradient" x1="0%" y1="0%" x2="100%" y2="0%" data-v-65cb23ba><stop offset="0%" stop-color="#a855f7" data-v-65cb23ba><animate attributeName="stop-color" values="#a855f7;#ec4899;#06b6d4;#a855f7" dur="4s" repeatCount="indefinite" data-v-65cb23ba></animate></stop><stop offset="50%" stop-color="#ec4899" data-v-65cb23ba><animate attributeName="stop-color" values="#ec4899;#06b6d4;#a855f7;#ec4899" dur="4s" repeatCount="indefinite" data-v-65cb23ba></animate></stop><stop offset="100%" stop-color="#06b6d4" data-v-65cb23ba><animate attributeName="stop-color" values="#06b6d4;#a855f7;#ec4899;#06b6d4" dur="4s" repeatCount="indefinite" data-v-65cb23ba></animate></stop></linearGradient><linearGradient id="pv-imGradient" x1="0%" y1="0%" x2="100%" y2="0%" data-v-65cb23ba><stop offset="0%" stop-color="#06b6d4" data-v-65cb23ba></stop><stop offset="100%" stop-color="#22d3d3" data-v-65cb23ba></stop></linearGradient><linearGradient id="pv-reGradient" x1="0%" y1="0%" x2="100%" y2="0%" data-v-65cb23ba><stop offset="0%" stop-color="#f97316" data-v-65cb23ba></stop><stop offset="100%" stop-color="#fb923c" data-v-65cb23ba></stop></linearGradient><linearGradient id="pv-spiralGradient" x1="0%" y1="0%" x2="100%" y2="100%" data-v-65cb23ba><stop offset="0%" stop-color="#a855f7" data-v-65cb23ba></stop><stop offset="100%" stop-color="#6366f1" data-v-65cb23ba></stop></linearGradient><linearGradient id="pv-axisGradient" x1="0%" y1="0%" x2="100%" y2="0%" data-v-65cb23ba><stop offset="0%" stop-color="#64748b" data-v-65cb23ba></stop><stop offset="100%" stop-color="#94a3b8" data-v-65cb23ba></stop></linearGradient><filter id="pv-glow-cyan" x="-50%" y="-50%" width="200%" height="200%" data-v-65cb23ba><feGaussianBlur stdDeviation="3" result="coloredBlur" data-v-65cb23ba></feGaussianBlur><feMerge data-v-65cb23ba><feMergeNode in="coloredBlur" data-v-65cb23ba></feMergeNode><feMergeNode in="SourceGraphic" data-v-65cb23ba></feMergeNode></feMerge></filter><filter id="pv-glow-orange" x="-50%" y="-50%" width="200%" height="200%" data-v-65cb23ba><feGaussianBlur stdDeviation="3" result="coloredBlur" data-v-65cb23ba></feGaussianBlur><feMerge data-v-65cb23ba><feMergeNode in="coloredBlur" data-v-65cb23ba></feMergeNode><feMergeNode in="SourceGraphic" data-v-65cb23ba></feMergeNode></feMerge></filter><filter id="pv-glow-purple" x="-50%" y="-50%" width="200%" height="200%" data-v-65cb23ba><feGaussianBlur stdDeviation="4" result="coloredBlur" data-v-65cb23ba></feGaussianBlur><feMerge data-v-65cb23ba><feMergeNode in="coloredBlur" data-v-65cb23ba></feMergeNode><feMergeNode in="SourceGraphic" data-v-65cb23ba></feMergeNode></feMerge></filter><filter id="pv-glow-strong" x="-100%" y="-100%" width="300%" height="300%" data-v-65cb23ba><feGaussianBlur stdDeviation="6" result="coloredBlur" data-v-65cb23ba></feGaussianBlur><feMerge data-v-65cb23ba><feMergeNode in="coloredBlur" data-v-65cb23ba></feMergeNode><feMergeNode in="coloredBlur" data-v-65cb23ba></feMergeNode><feMergeNode in="SourceGraphic" data-v-65cb23ba></feMergeNode></feMerge></filter></defs>',1)),b("line",{x1:z.value.bl.x,y1:z.value.bl.y,x2:z.value.tl.x,y2:z.value.tl.y,stroke:"#0e7490","stroke-width":"1",class:"pv-shimmer"},null,8,pc),b("line",{x1:z.value.tl.x,y1:z.value.tl.y,x2:z.value.tr.x,y2:z.value.tr.y,stroke:"#0e7490","stroke-width":"1",class:"pv-shimmer"},null,8,vc),b("line",{x1:z.value.bl.x,y1:z.value.bl.y,x2:z.value.br.x,y2:z.value.br.y,stroke:"#0e7490","stroke-width":"1",class:"pv-shimmer"},null,8,hc),b("line",{x1:z.value.tr.x,y1:z.value.tr.y,x2:z.value.br.x,y2:z.value.br.y,stroke:"#0e7490","stroke-width":"1",class:"pv-shimmer"},null,8,gc),b("path",{d:_.value,fill:"none",stroke:"url(#pv-imGradient)","stroke-width":"2"},null,8,mc),b("circle",{cx:de.value.x,cy:de.value.y,r:"4",fill:"#06b6d4",class:"pv-point-pulse"},null,8,bc),b("g",{transform:`translate(${ze.value.x}, ${ze.value.y-25}) rotate(${we.value})`},[...O[0]||(O[0]=[on('<text fill="#22d3d3" font-size="13" font-family="Times New Roman, serif" text-anchor="middle" style="letter-spacing:-0.5px;" data-v-65cb23ba><tspan font-weight="bold" data-v-65cb23ba>Im</tspan><tspan font-style="italic" data-v-65cb23ba> f</tspan><tspan data-v-65cb23ba>=e</tspan><tspan baseline-shift="super" font-size="9" data-v-65cb23ba>−γ(t−t₀)²</tspan><tspan font-style="italic" data-v-65cb23ba>sin(ωt)</tspan></text>',1)])],8,xc),b("line",{x1:k.value.bl.x,y1:k.value.bl.y,x2:k.value.br.x,y2:k.value.br.y,stroke:"#c2410c","stroke-width":"1",class:"pv-shimmer"},null,8,yc),b("line",{x1:k.value.bl.x,y1:k.value.bl.y,x2:k.value.tl.x,y2:k.value.tl.y,stroke:"#c2410c","stroke-width":"1",class:"pv-shimmer"},null,8,_c),b("line",{x1:k.value.br.x,y1:k.value.br.y,x2:k.value.tr.x,y2:k.value.tr.y,stroke:"#c2410c","stroke-width":"1",class:"pv-shimmer"},null,8,wc),b("line",{x1:k.value.tl.x,y1:k.value.tl.y,x2:k.value.tr.x,y2:k.value.tr.y,stroke:"#c2410c","stroke-width":"1",class:"pv-shimmer"},null,8,kc),b("path",{d:S.value,fill:"none",stroke:"url(#pv-reGradient)","stroke-width":"2"},null,8,Sc),b("circle",{cx:Te.value.x,cy:Te.value.y,r:"4",fill:"#f97316",class:"pv-point-pulse"},null,8,Tc),b("g",{transform:`translate(${q.value.x}, ${q.value.y+25}) rotate(${ie.value})`},[...O[1]||(O[1]=[on('<text fill="#fb923c" font-size="13" font-family="Times New Roman, serif" text-anchor="middle" style="letter-spacing:-0.5px;" data-v-65cb23ba><tspan font-weight="bold" data-v-65cb23ba>Re</tspan><tspan font-style="italic" data-v-65cb23ba> f</tspan><tspan data-v-65cb23ba>=e</tspan><tspan baseline-shift="super" font-size="9" data-v-65cb23ba>−γ(t−t₀)²</tspan><tspan font-style="italic" data-v-65cb23ba>cos(ωt)</tspan></text>',1)])],8,Cc),b("line",{x1:x.value.bl.x,y1:x.value.bl.y,x2:x.value.tl.x,y2:x.value.tl.y,stroke:"#7c3aed","stroke-width":"1",class:"pv-shimmer"},null,8,Ac),b("line",{x1:x.value.tl.x,y1:x.value.tl.y,x2:x.value.tr.x,y2:x.value.tr.y,stroke:"#7c3aed","stroke-width":"1",class:"pv-shimmer"},null,8,zc),b("line",{x1:x.value.bl.x,y1:x.value.bl.y,x2:x.value.br.x,y2:x.value.br.y,stroke:"#7c3aed","stroke-width":"1",class:"pv-shimmer"},null,8,Ec),b("line",{x1:x.value.br.x,y1:x.value.br.y,x2:x.value.tr.x,y2:x.value.tr.y,stroke:"#7c3aed","stroke-width":"1",class:"pv-shimmer"},null,8,Mc),b("line",{x1:R.value.x,y1:R.value.y,x2:w.value.x,y2:w.value.y,stroke:"#8b5cf6","stroke-width":"1"},null,8,Rc),b("line",{x1:P.value.x,y1:P.value.y,x2:M.value.x,y2:M.value.y,stroke:"#8b5cf6","stroke-width":"1"},null,8,Ic),b("polygon",{points:`${w.value.x},${w.value.y-6} ${w.value.x-3},${w.value.y+2} ${w.value.x+3},${w.value.y+2}`,fill:"#a855f7"},null,8,Pc),b("path",{d:g.value,fill:"none",stroke:"url(#pv-spiralGradient)","stroke-width":"2"},null,8,Oc),b("circle",{cx:le.value.x,cy:le.value.y,r:"4",fill:"#a855f7",class:"pv-point-pulse"},null,8,Lc),b("g",{transform:`translate(${Ee.value.x}, ${Ee.value.y-20}) rotate(${K.value})`},[...O[2]||(O[2]=[on('<text fill="#c084fc" font-size="10" font-family="Times New Roman, serif" text-anchor="middle" style="letter-spacing:-0.5px;" data-v-65cb23ba><tspan font-style="italic" data-v-65cb23ba>f</tspan><tspan data-v-65cb23ba>=e</tspan><tspan baseline-shift="super" font-size="7" data-v-65cb23ba>−γ(t−t₀)²</tspan><tspan font-style="italic" data-v-65cb23ba>e</tspan><tspan baseline-shift="super" font-size="7" data-v-65cb23ba>iωt</tspan></text>',1)])],8,Fc),b("path",{d:f.value,fill:"none",stroke:"url(#pv-helixGradient)","stroke-width":"4"},null,8,Nc),b("line",{x1:H.value.x,y1:H.value.y,x2:de.value.x,y2:de.value.y,stroke:"#06b6d4","stroke-width":"1","stroke-dasharray":"6,4",class:"pv-dash-flow",opacity:"0.7"},null,8,Dc),b("line",{x1:H.value.x,y1:H.value.y,x2:Te.value.x,y2:Te.value.y,stroke:"#f97316","stroke-width":"1","stroke-dasharray":"6,4",class:"pv-dash-flow",opacity:"0.7"},null,8,$c),b("line",{x1:W.value.x,y1:W.value.y,x2:F.value.x,y2:F.value.y,stroke:"url(#pv-axisGradient)","stroke-width":"2"},null,8,jc),b("polygon",{points:`${F.value.x-6},${F.value.y+6} ${F.value.x+6},${F.value.y-2} ${F.value.x+2},${F.value.y+10}`,fill:"#94a3b8"},null,8,Bc),b("line",{x1:I.value.x,y1:I.value.y+8,x2:G.value.x,y2:G.value.y,stroke:"url(#pv-axisGradient)","stroke-width":"2"},null,8,Hc),b("polygon",{points:`${G.value.x},${G.value.y-8} ${G.value.x-4},${G.value.y+2} ${G.value.x+4},${G.value.y+2}`,fill:"#94a3b8"},null,8,Uc),b("line",{x1:I.value.x-8,y1:I.value.y-5,x2:D.value.x,y2:D.value.y,stroke:"url(#pv-axisGradient)","stroke-width":"2"},null,8,Vc),b("polygon",{points:`${D.value.x+8},${D.value.y+4} ${D.value.x-2},${D.value.y-4} ${D.value.x-4},${D.value.y+6}`,fill:"#94a3b8"},null,8,Gc),b("g",{transform:`translate(${Me.value.x+30}, ${Me.value.y-70}) rotate(${we.value})`},[...O[3]||(O[3]=[b("text",{fill:"#e879f9","font-size":"10","font-family":"Times New Roman, serif","text-anchor":"middle",style:{"letter-spacing":"-0.5px"}},[b("tspan",{"font-style":"italic"},"f(t)"),b("tspan",null,"=Re+"),b("tspan",{"font-style":"italic"},"i"),b("tspan",null,"·Im")],-1)])],8,Wc),b("circle",{cx:H.value.x,cy:H.value.y,r:"10",fill:"url(#pv-helixGradient)",opacity:"0.3",class:"pv-point-pulse"},null,8,Kc),b("circle",{cx:H.value.x,cy:H.value.y,r:"6",fill:"#fff"},null,8,Yc),b("circle",{cx:H.value.x,cy:H.value.y,r:"3",fill:"url(#pv-helixGradient)"},null,8,qc),b("text",{x:G.value.x-30,y:G.value.y+8,fill:"#22d3d3","font-size":"18","font-weight":"bold","font-family":"serif"},"Im",8,Xc),b("text",{x:D.value.x+10,y:D.value.y+6,fill:"#fb923c","font-size":"18","font-weight":"bold","font-family":"serif"},"Re",8,Zc),b("text",{x:F.value.x-3,y:F.value.y+22,fill:"#c084fc","font-size":"18","font-style":"italic","font-family":"serif"},"t",8,Jc),b("text",{x:I.value.x+5,y:I.value.y+20,fill:"#94a3b8","font-size":"13","font-style":"italic","font-family":"serif"},"t₀",8,Qc)]))]),b("div",ef,[b("div",tf,[b("span",nf,[O[5]||(O[5]=b("span",{class:"pv-values-f"},"f",-1)),O[6]||(O[6]=b("span",{class:"pv-values-punctuation"},"(",-1)),O[7]||(O[7]=b("span",{class:"pv-values-t"},"t",-1)),O[8]||(O[8]=b("span",{class:"pv-values-punctuation"},") = ",-1)),b("span",of,rt(r.value>=0?"+":"")+rt(r.value.toFixed(2)),1),O[9]||(O[9]=b("span",{class:"pv-values-punctuation"}," + ",-1)),b("span",sf,rt(a.value.toFixed(2)),1),O[10]||(O[10]=b("span",{class:"pv-values-i"}," i",-1))])]),b("div",lf,[b("span",rf,[O[11]||(O[11]=b("span",{class:"pv-values-time-t"},"t",-1)),O[12]||(O[12]=b("span",{class:"pv-values-time-punctuation"}," = ",-1)),b("span",af,rt((t.value/cf).toFixed(2)),1),O[13]||(O[13]=b("span",{class:"pv-values-time-punctuation"},null,-1)),O[14]||(O[14]=b("span",{class:"pv-values-time-period"},"T",-1))])])])]))}}),[["__scopeId","data-v-65cb23ba"]]),uf={class:"app-container"},df={class:"c-controls"},pf={class:"c-controls-row"},vf=["value"],hf=["value"],gf={key:0,class:"c-slider-container"},mf=["value"],bf={class:"c-slider-label"},xf={class:"c-foreground-layer"},yf=["title"];ia(qt({__name:"App",setup(e){const t=El(()=>aa(()=>Promise.resolve().then(()=>Cf),void 0,Dn&&Dn.tagName.toUpperCase()==="SCRIPT"&&Dn.src||new URL("assets/index-CD61Dmaq.js",document.baseURI).href)),n=ee(!0),o=ee(!0),s=F=>{F.target instanceof HTMLInputElement||F.target instanceof HTMLTextAreaElement||F.key.toLowerCase()==="q"&&!F.ctrlKey&&!F.metaKey&&!F.altKey&&(F.preventDefault(),o.value=!o.value)},i=()=>{console.log("[App] closeCube called — hiding cube view"),o.value=!1};let l=null;const r=F=>{console.log("[App] CubeView wants to navigate to:",F),l=F},a=()=>{o.value?l?(console.log("[App] Toggle close — navigating to:",l),window.location.href=l):o.value=!1:o.value=!0,l=null};Jt(()=>{window.addEventListener("keydown",s)}),yt(()=>{window.removeEventListener("keydown",s)});const v=ee(23),f=ee(50),g=ee(!1),_=ee(!1);let S=null;const x=ee(!1);x.value="ontouchstart"in window||navigator.maxTouchPoints>0;const R=()=>{x.value||(S&&(clearTimeout(S),S=null),_.value=!0)},P=()=>{x.value||(S=window.setTimeout(()=>{_.value=!1,S=null},1e3))},M=()=>{S&&(clearTimeout(S),S=null),_.value=!_.value},z=[{value:0,label:"Mandelbulb"},{value:1,label:"Mandelbox"},{value:2,label:"Menger Sponge"},{value:3,label:"Sierpinski"},{value:4,label:"Kaleidoscope 3D"},{value:5,label:"Organic Hybrid"},{value:6,label:"Fractal Land"},{value:7,label:"+ Galaxy Nebula"},{value:8,label:"+ Infinite Tunnel"},{value:9,label:"+ Plasma Fractal"},{value:10,label:"+ Circuits"},{value:11,label:"+ Metaballs"},{value:12,label:"+ Volumetric Lines"},{value:13,label:"+ Disco Tunnel"},{value:14,label:"+ Speed Drive"},{value:15,label:"+ Hot Rocks"},{value:16,label:"+ Server Room"},{value:17,label:"+ Remnant X"},{value:18,label:"+ Kali Set"},{value:19,label:"+ Generators"},{value:20,label:"+ Simplicity Galaxy"},{value:21,label:"+ Ribbons"},{value:22,label:"+ Twisted Rings"},{value:23,label:"+ Waves Remix"},{value:24,label:"+ Dancing Metalights"},{value:25,label:"+ IO Blocks"},{value:26,label:"+ Beating Circles"},{value:27,label:"+ Circle Wave"},{value:28,label:"+ Soundflower"},{value:29,label:"+ Polar Beats"},{value:30,label:"+ Undulant Spectre"},{value:31,label:"+ Revision 2015"},{value:32,label:"+ Gameboy Style"},{value:33,label:"+ Electric Storm"},{value:34,label:"+ Vortex"},{value:35,label:"+ Neon Grid"},{value:36,label:"+ Matrix Rain"},{value:37,label:"+ Fire"},{value:38,label:"+ Aurora"},{value:39,label:"+ Wormhole"},{value:40,label:"+ Hexagons"},{value:41,label:"+ Bubbles"},{value:42,label:"+ Lightning"},{value:43,label:"+ Kaleidoscope 2D"},{value:44,label:"+ Starfield"},{value:45,label:"+ Liquid Metal"},{value:46,label:"+ Fractal Tree"},{value:47,label:"+ Voronoi"},{value:48,label:"+ Psychedelic"},{value:49,label:"+ Energy Field"}],k=V(()=>({opacity:f.value/100,filter:`brightness(${.3+f.value/100*.7})`})),I=()=>{n.value=!n.value},G=()=>{g.value=!g.value},D=F=>{const H=F.target;v.value=parseInt(H.value)},W=F=>{const H=F.target;f.value=parseInt(H.value)};return(F,H)=>(Se(),We("div",uf,[b("div",df,[b("button",{class:Pe(["c-menu-toggle",{"c-menu-toggle--open":g.value}]),onClick:G},[...H[0]||(H[0]=[b("span",{class:"c-hamburger-line"},null,-1),b("span",{class:"c-hamburger-line"},null,-1),b("span",{class:"c-hamburger-line"},null,-1)])],2),b("div",{class:Pe(["c-menu-panel",{"c-menu-panel--visible":g.value}])},[b("div",pf,[b("select",{class:"c-fractal-select",onChange:D,value:v.value},[(Se(),We(Ge,null,Hl(z,le=>b("option",{key:le.value,value:le.value},rt(le.label),9,hf)),64))],40,vf),b("button",{class:"c-fractal-toggle",onClick:I},rt(n.value?"ON":"OFF"),1)]),n.value?(Se(),We("div",gf,[H[1]||(H[1]=b("span",{class:"c-slider-label"},"Intensity",-1)),b("input",{type:"range",class:"c-brightness-slider",min:"10",max:"100",value:f.value,onInput:W},null,40,mf),b("span",bf,rt(f.value)+"%",1)])):Pt("",!0)],2)]),b("div",{class:Pe(["c-background-layer",{"c-background-layer--hidden":!n.value}]),style:$t(k.value)},[n.value?(Se(),So(cc,{key:0,mode:v.value},null,8,["mode"])):Pt("",!0)],6),b("div",xf,[xe(ff)]),b("div",{class:"c-nav-footer",onMouseenter:R,onMouseleave:P},[b("button",{class:Pe(["c-nav-toggle",{"c-nav-toggle--open":_.value}]),onClick:M},[...H[2]||(H[2]=[b("span",{class:"c-nav-arrow"},"↑",-1)])],2),b("div",{class:Pe(["c-nav-menu",{"c-nav-menu--visible":_.value}])},[...H[3]||(H[3]=[b("a",{href:"https://diegonmarcos.github.io/myprofile/",class:"c-nav-button",target:"_blank",rel:"noopener noreferrer"}," Profile ",-1),b("a",{href:"https://diegonmarcos.github.io/linktree/",class:"c-nav-button",target:"_blank",rel:"noopener noreferrer"}," Linktree ",-1),b("a",{href:"https://diegonmarcos.github.io/landpage/",class:"c-nav-button",target:"_blank",rel:"noopener noreferrer"}," Landpage ",-1)])],2)],32),b("button",{class:Pe(["c-cube-toggle",{"c-cube-toggle--active":o.value}]),onClick:a,title:o.value?"Close cube view":"Open cube view"},[...H[4]||(H[4]=[on('<svg class="c-cube-toggle__cube" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.5" stroke-linejoin="round"><path d="M12 2L20 7L12 12L4 7Z" fill="rgba(255,255,255,0.15)"></path><path d="M20 7V17L12 22V12Z" fill="rgba(255,255,255,0.08)"></path><path d="M4 7V17L12 22V12Z" fill="rgba(255,255,255,0.03)"></path></svg><svg class="c-cube-toggle__close" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M18 6L6 18M6 6l12 12"></path></svg>',2)])],10,yf),xe(as(t),{active:o.value,onClose:i,onNavigate:r},null,8,["active"])]))}})).mount("#app");const _f={class:"c-cube-scene"},wf=["src"],kf=["src"],Sf=["src"],Tf=["src"],yi=-30,_i=-45,Cf=Object.freeze(Object.defineProperty({__proto__:null,default:qt({__name:"CubeView",props:{active:{type:Boolean,default:!1}},emits:["close","navigate"],setup(e,{emit:t}){const n=e,o=t,s=ee(n.active),i=ee(yi),l=ee(_i),r=ee(1),a=ee(!1),v=ee({x:0,y:0}),f=ee(0),g=ee(!0),_=ee(!1),S=ee(!1),x=ee(0),w=ee(window.innerWidth),R=ee(window.innerHeight),P=()=>{w.value=window.innerWidth,R.value=window.innerHeight},M=V(()=>Math.min(w.value*.7,R.value*.7)/2),z=ee(0),k=ee(0);let I=null;const G=["Front","Right","Back","Left","Top","Bottom"],D=["prism_glass.html","cube_fractal_neon.html","perspectives.html","milky_way_map.html",null,null],W={front:"prism_glass.html",right:"cube_fractal_neon.html",back:"perspectives.html",left:"milky_way_map.html"};let F=0,H={x:0,y:0},le=!1;const de=u=>{try{const p=D[u];console.log("[CubeView] Navigate face:",G[u],"| URL:",p||"close"),p?window.location.href=p:o("close")}catch(p){console.error("[CubeView] Error navigating:",p)}},Te=()=>{try{console.log("[CubeView] Exit clicked — closing cube view"),o("close")}catch(u){console.error("[CubeView] Error in handleExitClick:",u)}},we=(u,p)=>{const h=Date.now()-F;return Math.sqrt(Math.pow(u-H.x,2)+Math.pow(p-H.y,2))<=20&&h<=500},ze=(u,p)=>{try{if(_.value||!we(p.clientX,p.clientY))return;console.log("[CubeView] Face clicked (mouse):",G[u]),de(u)}catch(h){console.error("[CubeView] Error in handleFaceClick:",h)}},ie=(u,p)=>{try{if(_.value||S.value)return;const h=p.changedTouches[0];if(!we(h.clientX,h.clientY))return;console.log("[CubeView] Face tapped (touch):",G[u]),le=!0,de(u)}catch(h){console.error("[CubeView] Error in handleFaceTap:",h)}},q=ol(new Set([0,1,2,3])),K=u=>q.value.has(u),Ee=()=>{const u={0:[1,3,4,5],1:[0,2,4,5],2:[1,3,4,5],3:[0,2,4,5],4:[0,1,2,3],5:[0,1,2,3]},p=new Set(q.value);p.add(f.value),u[f.value]?.forEach(h=>p.add(h)),p.size!==q.value.size&&(q.value=p)},Me=[{x:0,y:0},{x:0,y:-90},{x:0,y:180},{x:0,y:90},{x:90,y:0},{x:-90,y:0}],ye=[{x:-30,y:-45},{x:-30,y:-135},{x:-30,y:135},{x:-30,y:45},{x:-60,y:-45},{x:60,y:-45}];wn(()=>n.active,u=>{console.log("[CubeView] Active prop changed to:",u),s.value=u,u?(document.body.style.overflow="hidden",i.value=yi,l.value=_i,r.value=1,g.value=!0,f.value=0):document.body.style.overflow=""});const _e=V(()=>({transform:`translate3d(0, 0, ${-M.value}px) scale3d(${r.value}, ${r.value}, ${r.value}) rotateX(${i.value}deg) rotateY(${l.value}deg)`})),J=(u,p,h=400)=>new Promise(m=>{_.value=!0;const A=i.value,T=l.value,C=performance.now();let y=p-T;y>180&&(y-=360),y<-180&&(y+=360);const N=T+y,E=L=>{const $=L-C,U=Math.min($/h,1),Z=1-Math.pow(1-U,3);i.value=A+(u-A)*Z,l.value=T+(N-T)*Z,U<1?requestAnimationFrame(E):(i.value=u,l.value=p,_.value=!1,m())};requestAnimationFrame(E)}),O=async u=>{_.value||(f.value=u,g.value?(await J(Me[u].x,Me[u].y),g.value=!1):(await J(ye[u].x,ye[u].y),g.value=!0))},re=async()=>{_.value||(g.value?(await J(Me[f.value].x,Me[f.value].y),g.value=!1):(await J(ye[f.value].x,ye[f.value].y),g.value=!0))},it=u=>{if(u.length<2)return 0;const p=u[0].clientX-u[1].clientX,h=u[0].clientY-u[1].clientY;return Math.sqrt(p*p+h*h)},pt=u=>{if(_.value)return;F=Date.now();const p="touches"in u?u.touches[0]:u;if(H={x:p.clientX,y:p.clientY},le=!1,I&&(cancelAnimationFrame(I),I=null),z.value=0,k.value=0,"touches"in u&&u.touches.length===2){S.value=!0,x.value=it(u.touches);return}a.value=!0,v.value={x:p.clientX,y:p.clientY}},lt=u=>{if(!s.value||_.value)return;if("touches"in u&&u.touches.length===2){u.preventDefault();const A=it(u.touches);if(x.value>0){const T=A/x.value;r.value=Math.max(.3,Math.min(2,r.value*T))}x.value=A;return}if(!a.value)return;const p="touches"in u?u.touches[0]:u,h=p.clientX-v.value.x,m=p.clientY-v.value.y;k.value=h*.4,z.value=-m*.4,l.value+=k.value,i.value+=z.value,v.value={x:p.clientX,y:p.clientY},c()},kt=()=>{if(Math.abs(z.value)<.1&&Math.abs(k.value)<.1){I=null;return}z.value*=.95,k.value*=.95,l.value+=k.value,i.value+=z.value,c(),I=requestAnimationFrame(kt)},Re=u=>{try{if(!le&&!_.value&&!S.value){const p="changedTouches"in u?u.changedTouches[0]:u;if(we(p.clientX,p.clientY)){const h=document.querySelector(".c-cube-scene");if(h){const m=h.getBoundingClientRect();p.clientX>=m.left&&p.clientX<=m.right&&p.clientY>=m.top&&p.clientY<=m.bottom&&(console.log("[CubeView] stopDrag fallback tap — navigating to currentFace:",G[f.value]),de(f.value))}}}a.value&&(Math.abs(z.value)>.5||Math.abs(k.value)>.5)&&(I=requestAnimationFrame(kt))}catch(p){console.error("[CubeView] Error in stopDrag:",p)}a.value=!1,S.value=!1,x.value=0,le=!1},Nn=u=>{if(!s.value)return;u.preventDefault();const p=u.deltaY>0?.95:1.05;r.value=Math.max(.3,Math.min(2,r.value*p))},c=()=>{let u=(l.value%360+360)%360;const p=f.value;if(Math.abs(i.value)>60?f.value=i.value>0?4:5:u>=315||u<45?f.value=0:u>=45&&u<135?f.value=3:u>=135&&u<225?f.value=2:f.value=1,f.value!==p){const A=D[f.value];A?o("navigate",A):o("navigate","")}const h=Math.abs(i.value)>15&&Math.abs(i.value)<75,m=u%90>15&&u%90<75;g.value=h||m,Ee()},d=u=>{if(s.value){if(u.stopImmediatePropagation(),u.key==="Escape"){u.preventDefault(),console.log("[CubeView] Escape pressed — closing"),Te();return}if(u.key.toLowerCase()==="q"){u.preventDefault(),console.log("[CubeView] Q pressed — face:",G[f.value]),de(f.value);return}if(u.key===" "){u.preventDefault(),re();return}if(!_.value)switch(u.key){case"ArrowRight":f.value<4&&O((f.value+1)%4);break;case"ArrowLeft":f.value<4&&O((f.value+3)%4);break;case"ArrowUp":O(4);break;case"ArrowDown":O(5);break}}};return Jt(()=>{window.addEventListener("mousemove",lt),window.addEventListener("mouseup",Re),window.addEventListener("touchmove",lt),window.addEventListener("touchend",Re),window.addEventListener("keydown",d,!0),window.addEventListener("resize",P)}),yt(()=>{window.removeEventListener("mousemove",lt),window.removeEventListener("mouseup",Re),window.removeEventListener("touchmove",lt),window.removeEventListener("touchend",Re),window.removeEventListener("keydown",d,!0),window.removeEventListener("resize",P),document.body.style.overflow="",I&&cancelAnimationFrame(I)}),(u,p)=>(Se(),So(Al,{to:"body"},[b("div",{class:Pe(["c-cube-overlay",{"c-cube-overlay--active":s.value}]),onWheel:mi(Nn,["prevent"]),onMousedown:pt,onTouchstart:mi(pt,["prevent"])},[b("div",_f,[b("div",{class:Pe(["c-cube",{"c-cube--animating":_.value}]),style:$t(_e.value)},[b("div",{class:"c-cube__face c-cube__face--front",onClick:p[0]||(p[0]=h=>ze(0,h)),onTouchend:p[1]||(p[1]=h=>ie(0,h))},[s.value&&K(0)?(Se(),We("iframe",{key:0,src:W.front,class:"c-cube__iframe",title:"Prism Glass",loading:"eager",allow:"accelerometer; autoplay"},null,8,wf)):Pt("",!0)],32),b("div",{class:"c-cube__face c-cube__face--right",onClick:p[2]||(p[2]=h=>ze(1,h)),onTouchend:p[3]||(p[3]=h=>ie(1,h))},[s.value&&K(1)?(Se(),We("iframe",{key:0,src:W.right,class:"c-cube__iframe",title:"Neon Cube",loading:"eager",allow:"accelerometer; autoplay"},null,8,kf)):Pt("",!0)],32),b("div",{class:"c-cube__face c-cube__face--back",onClick:p[4]||(p[4]=h=>ze(2,h)),onTouchend:p[5]||(p[5]=h=>ie(2,h))},[s.value&&K(2)?(Se(),We("iframe",{key:0,src:W.back,class:"c-cube__iframe",title:"Perspectives",loading:"eager",allow:"accelerometer; autoplay"},null,8,Sf)):Pt("",!0)],32),b("div",{class:"c-cube__face c-cube__face--left",onClick:p[6]||(p[6]=h=>ze(3,h)),onTouchend:p[7]||(p[7]=h=>ie(3,h))},[s.value&&K(3)?(Se(),We("iframe",{key:0,src:W.left,class:"c-cube__iframe",title:"Milky Way Map",loading:"eager",allow:"accelerometer; autoplay"},null,8,Tf)):Pt("",!0)],32),b("div",{class:"c-cube__face c-cube__face--top",onClick:p[8]||(p[8]=h=>ze(4,h)),onTouchend:p[9]||(p[9]=h=>ie(4,h))},[...p[12]||(p[12]=[b("div",{class:"c-cube__placeholder c-cube__placeholder--gradient-2"},[b("h2",null,"Projects"),b("p",null,"View from above")],-1)])],32),b("div",{class:"c-cube__face c-cube__face--bottom",onClick:p[10]||(p[10]=h=>ze(5,h)),onTouchend:p[11]||(p[11]=h=>ie(5,h))},[...p[13]||(p[13]=[b("div",{class:"c-cube__placeholder c-cube__placeholder--gradient-3"},[b("h2",null,"Contact"),b("p",null,"Get in touch")],-1)])],32)],6)])],34)]))}})},Symbol.toStringTag,{value:"Module"}))})();
