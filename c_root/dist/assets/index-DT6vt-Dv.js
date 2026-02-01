(function(){"use strict";var wo=document.createElement("style");wo.textContent=`.bio-fractal-canvas[data-v-c9463404]{width:100%;height:100%;display:block}@keyframes pv-shimmer-65cb23ba{0%,to{opacity:.6}50%{opacity:1}}@keyframes pv-glow-pulse-65cb23ba{0%,to{filter:drop-shadow(0 0 3px currentColor)}50%{filter:drop-shadow(0 0 12px currentColor)}}@keyframes pv-dash-flow-65cb23ba{0%{stroke-dashoffset:0}to{stroke-dashoffset:-20}}@keyframes pv-point-pulse-65cb23ba{0%,to{r:6;opacity:1}50%{r:9;opacity:.8}}.pv-shimmer[data-v-65cb23ba]{animation:pv-shimmer-65cb23ba 2s ease-in-out infinite}.pv-glow-pulse[data-v-65cb23ba]{animation:pv-glow-pulse-65cb23ba 1.5s ease-in-out infinite}.pv-dash-flow[data-v-65cb23ba]{animation:pv-dash-flow-65cb23ba 1s linear infinite}.pv-point-pulse[data-v-65cb23ba]{animation:pv-point-pulse-65cb23ba .8s ease-in-out infinite}.pv-container[data-v-65cb23ba]{width:100%;height:100%;display:flex;flex-direction:column;align-items:center;justify-content:center;padding:10px;overflow:hidden;background:transparent}.pv-title[data-v-65cb23ba]{text-align:center;margin-bottom:16px;padding:0 16px;width:100%;max-width:840px}.pv-title h1[data-v-65cb23ba],.pv-title h2[data-v-65cb23ba]{font-size:clamp(1.4rem,4.5vw,2rem);font-weight:700;line-height:1.3;margin:0}.pv-title-gradient-1[data-v-65cb23ba]{background:linear-gradient(to right,#a855f7,#ec4899,#22d3ee);-webkit-background-clip:text;-webkit-text-fill-color:transparent;background-clip:text}.pv-title-gradient-2[data-v-65cb23ba]{background:linear-gradient(to right,#22d3ee,#a855f7,#ec4899);-webkit-background-clip:text;-webkit-text-fill-color:transparent;background-clip:text}.pv-svg-container[data-v-65cb23ba]{position:relative;width:100%;max-width:840px;height:auto;aspect-ratio:840/640;flex-shrink:1}.pv-svg-container svg[data-v-65cb23ba]{width:100%;height:100%}.pv-values[data-v-65cb23ba]{margin-top:16px;width:100%;max-width:580px;text-align:center;padding:0 16px}.pv-values-main[data-v-65cb23ba]{text-align:center;margin-bottom:20px}.pv-values-text[data-v-65cb23ba]{font-size:.9rem;font-family:Times New Roman,serif}.pv-values-f[data-v-65cb23ba]{color:#a855f7;font-style:italic}.pv-values-punctuation[data-v-65cb23ba]{color:#d1d5db}.pv-values-t[data-v-65cb23ba]{color:#a855f7;font-style:italic}.pv-values-real[data-v-65cb23ba]{color:#fb923c}.pv-values-imag[data-v-65cb23ba]{color:#22d3d3}.pv-values-i[data-v-65cb23ba]{color:#22d3d3;font-style:italic}.pv-values-time[data-v-65cb23ba]{text-align:center}.pv-values-time-text[data-v-65cb23ba]{font-size:.85rem;font-family:Times New Roman,serif}.pv-values-time-t[data-v-65cb23ba]{color:#a855f7;font-style:italic}.pv-values-time-punctuation[data-v-65cb23ba]{color:#9ca3af}.pv-values-time-value[data-v-65cb23ba]{color:#d1d5db}.pv-values-time-period[data-v-65cb23ba]{color:#a855f7;font-style:italic}*{box-sizing:border-box;margin:0;padding:0}html,body{width:100%;height:100%;overflow:hidden}body{background-color:#000;font-family:-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,sans-serif;color:#fff}button{border:none;background:none;padding:0;cursor:pointer;font:inherit}select{font-family:-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,sans-serif}canvas{display:block}.o-fullscreen{width:100%;height:100%;position:relative}.o-layer{position:absolute;top:0;left:0;width:100%;height:100%}.o-layer--background{z-index:0}.o-layer--foreground{z-index:1;display:flex;align-items:center;justify-content:center;pointer-events:none}.o-fixed{position:fixed}.c-background-layer{position:absolute;top:0;left:0;width:100%;height:100%;z-index:0;transition-property:opacity,filter;transition-duration:.3s;transition-timing-function:ease}.c-background-layer--hidden{opacity:0!important;pointer-events:none}.c-background-layer canvas{width:100%!important;height:100%!important}.c-foreground-layer{position:absolute;top:0;left:0;width:100%;height:100%;z-index:1;display:flex;align-items:center;justify-content:center;pointer-events:none}.c-controls{position:fixed;top:10px;right:10px;z-index:100;display:flex;flex-direction:column;gap:8px;align-items:flex-end}.c-menu-toggle{background:transparent!important;backdrop-filter:none;-webkit-backdrop-filter:none;transition-property:background,transform;transition-duration:.3s;transition-timing-function:ease;border:none;color:#fff;width:36px;height:36px;border-radius:8px;display:flex;align-items:center;justify-content:center;flex-direction:column;gap:4px;padding:8px}.c-menu-toggle:hover{background:transparent!important}.c-menu-toggle:hover .c-hamburger-line{box-shadow:0 0 8px #fff6}.c-menu-toggle--open{transform:rotate(90deg)}.c-hamburger-line{display:block;width:100%;height:2px;background:#fffc;border-radius:1px;transition-property:background,box-shadow;transition-duration:.3s;transition-timing-function:ease;box-shadow:0 0 4px #fff3}.c-menu-panel{display:flex;flex-direction:column;gap:8px;align-items:flex-end;max-height:0;overflow:hidden;opacity:0;transition-property:max-height,opacity;transition-duration:.3s;transition-timing-function:ease}.c-menu-panel--visible{max-height:200px;opacity:1}.c-controls-row{display:flex;gap:8px;align-items:center}.c-fractal-toggle{background:#ffffff1a;-webkit-backdrop-filter:blur(4px);backdrop-filter:blur(4px);transition-property:background;transition-duration:.3s;transition-timing-function:ease;border:1px solid rgba(255,255,255,.3);color:#fff;padding:8px 12px;border-radius:6px;font-size:12px}.c-fractal-toggle:hover{background:#fff3}.c-fractal-select{background:#ffffff1a;-webkit-backdrop-filter:blur(4px);backdrop-filter:blur(4px);border:1px solid rgba(255,255,255,.3);color:#fff;padding:8px 28px 8px 12px;border-radius:6px;font-size:12px;outline:none;-webkit-appearance:none;-moz-appearance:none;appearance:none;background-image:url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' fill='white' viewBox='0 0 16 16'%3E%3Cpath d='M8 11L3 6h10l-5 5z'/%3E%3C/svg%3E");background-repeat:no-repeat;background-position:right 8px center;transition-property:background-color;transition-duration:.3s;transition-timing-function:ease}.c-fractal-select:hover{background-color:#fff3}.c-fractal-select option{background:#1a1a2e;color:#fff}.c-slider-container{background:#ffffff1a;-webkit-backdrop-filter:blur(4px);backdrop-filter:blur(4px);display:flex;align-items:center;gap:8px;border:1px solid rgba(255,255,255,.3);padding:6px 12px;border-radius:6px}.c-slider-label{color:#fff;font-size:11px;white-space:nowrap}.c-brightness-slider{-webkit-appearance:none;-moz-appearance:none;appearance:none;width:80px;height:4px;border-radius:2px;background:#ffffff4d;outline:none;cursor:pointer}.c-brightness-slider::-webkit-slider-thumb{-webkit-appearance:none;-moz-appearance:none;appearance:none;width:14px;height:14px;border-radius:50%;background:#fff;cursor:pointer;box-shadow:0 1px 3px #0000004d}.c-brightness-slider::-moz-range-thumb{width:14px;height:14px;border-radius:50%;background:#fff;cursor:pointer;border:none}.c-nav-footer{position:fixed;bottom:16px;left:50%;transform:translate(-50%);z-index:100;display:flex;flex-direction:column;gap:12px;align-items:center;pointer-events:auto;padding:8px}.c-nav-toggle{position:relative;width:48px;height:48px;border:none;border-radius:50%;cursor:pointer;transform:translateY(0);transition:transform 3s cubic-bezier(.25,.1,.25,1),box-shadow .3s ease,border-color .3s ease;opacity:1!important;visibility:visible!important;background:transparent!important;backdrop-filter:none;-webkit-backdrop-filter:none;border:2px solid rgba(255,255,255,.8);box-shadow:0 0 20px #ffffff4d}.c-nav-toggle:active{transform:translateY(0) scale(1.05);box-shadow:0 0 8px #ffffff1a}.c-nav-toggle--open{transform:translateY(-30px) scale(1.05)!important;box-shadow:0 0 20px #ffffff40;border-color:#ffffffb3;transition:transform 3s cubic-bezier(.25,.1,.25,1)!important}.c-nav-toggle--open .c-nav-arrow{animation:arrow-bounce-inverted 1.5s ease-in-out infinite}.c-nav-arrow{display:inline-block;font-size:1.8rem;color:#fff;font-weight:700;text-shadow:0 2px 6px rgba(0,0,0,.6);animation:arrow-bounce 1.5s ease-in-out infinite;opacity:1!important}.c-nav-menu{display:flex;flex-wrap:nowrap;gap:8px;max-height:0;overflow:visible;opacity:0;transform:translateY(15px);transition:max-height 1s cubic-bezier(.25,.1,.25,1),opacity .8s cubic-bezier(.25,.1,.25,1),transform 1s cubic-bezier(.25,.1,.25,1);justify-content:center;padding:8px 0}.c-nav-menu--visible{max-height:250px;opacity:1;transform:translateY(0);transition:max-height 3s cubic-bezier(.25,.1,.25,1),opacity 2s cubic-bezier(.25,.1,.25,1) .2s,transform 2.5s cubic-bezier(.25,.1,.25,1)}.c-nav-button{position:relative;padding:10px 16px;font-size:.8rem;font-weight:600;text-decoration:none;color:#fff;border-radius:10px;transition:all .4s cubic-bezier(.4,0,.2,1);overflow:hidden;white-space:nowrap;flex-shrink:0;background:transparent!important;backdrop-filter:none;-webkit-backdrop-filter:none;border:2px solid rgba(255,255,255,.4);box-shadow:0 0 10px #ffffff1f}.c-nav-button:before{content:"";position:absolute;top:0;left:-100%;width:100%;height:100%;background:linear-gradient(90deg,transparent,rgba(255,255,255,.3),transparent);animation:shimmer-slide 3s ease-in-out infinite}.c-nav-button:hover{transform:translateY(-3px) scale(1.05);background:transparent!important;box-shadow:0 0 20px #ffffff40;border-color:#fff9}.c-nav-button:active{transform:translateY(-1px) scale(1.02);background:transparent!important;box-shadow:0 0 12px #ffffff26}.c-nav-button{text-shadow:0 1px 2px rgba(0,0,0,.3)}.c-nav-menu:not(.c-nav-menu--visible) .c-nav-button{opacity:0!important;pointer-events:none}.c-nav-menu--visible .c-nav-button{opacity:1;transform:translateY(0) scale(1);transition:opacity 1s cubic-bezier(.25,.1,.25,1),transform 1s cubic-bezier(.25,.1,.25,1)}.c-nav-menu--visible .c-nav-button:nth-child(1){transition-delay:0s}.c-nav-menu--visible .c-nav-button:nth-child(2){transition-delay:1s}.c-nav-menu--visible .c-nav-button:nth-child(3){transition-delay:2s}@keyframes shimmer-slide{0%{left:-100%}50%,to{left:100%}}@keyframes arrow-bounce{0%,to{transform:translateY(0)}50%{transform:translateY(-6px)}}@keyframes arrow-bounce-inverted{0%,to{transform:rotate(180deg) translateY(0)}50%{transform:rotate(180deg) translateY(6px)}}@media (max-width: 768px){.c-nav-toggle{width:30px;height:30px}.c-nav-arrow{font-size:1.15rem}.c-nav-menu{gap:5px}.c-nav-button{padding:6px 10px;font-size:.51rem;border-radius:6px}}@keyframes twinkle{0%,to{opacity:.3}50%{opacity:1}}@keyframes drift{0%{transform:translateY(0) translate(0)}to{transform:translateY(-100vh) translate(20px)}}.c-cube-overlay{position:fixed;top:0;right:0;bottom:0;left:0;z-index:9999;background:radial-gradient(ellipse at center,#0d1b2a,#020408);opacity:0;visibility:hidden;transition:opacity .3s ease,visibility .3s ease;display:flex;align-items:center;justify-content:center;overflow:hidden;touch-action:none;-webkit-user-select:none;user-select:none}.c-cube-overlay:before{content:"";position:absolute;top:0;right:0;bottom:0;left:0;pointer-events:none;background-image:radial-gradient(1px 1px at 10% 20%,rgba(255,255,255,.7) 50%,transparent 50%),radial-gradient(1px 1px at 25% 55%,rgba(255,255,255,.5) 50%,transparent 50%),radial-gradient(2px 2px at 40% 30%,rgba(150,180,255,.8) 50%,transparent 50%),radial-gradient(1px 1px at 55% 70%,rgba(255,255,255,.6) 50%,transparent 50%),radial-gradient(1px 1px at 70% 15%,rgba(255,255,255,.7) 50%,transparent 50%),radial-gradient(2px 2px at 85% 45%,rgba(255,200,150,.7) 50%,transparent 50%),radial-gradient(1px 1px at 15% 80%,rgba(255,255,255,.5) 50%,transparent 50%),radial-gradient(1px 1px at 60% 90%,rgba(255,255,255,.6) 50%,transparent 50%),radial-gradient(2px 2px at 90% 75%,rgba(200,150,255,.7) 50%,transparent 50%),radial-gradient(1px 1px at 35% 5%,rgba(255,255,255,.8) 50%,transparent 50%);background-size:250px 250px}.c-cube-overlay--active{opacity:1;visibility:visible}.c-cube-scene{width:min(70vw,70vh);height:min(70vw,70vh);perspective:1400px;perspective-origin:50% 50%;transform-style:preserve-3d}.c-cube{width:100%;height:100%;position:relative;transform-style:preserve-3d;will-change:transform;cursor:grab}.c-cube:active{cursor:grabbing}.c-cube--animating{pointer-events:none}.c-cube__face{position:absolute;width:min(70vw,70vh);height:min(70vw,70vh);backface-visibility:hidden;border:2px solid rgba(255,255,255,.2);overflow:hidden;background:#0a0a12;contain:layout style paint;will-change:transform}.c-cube__face--front{transform:translateZ(calc(min(70vw,70vh)/2))}.c-cube__face--back{transform:rotateY(180deg) translateZ(calc(min(70vw,70vh)/2))}.c-cube__face--right{transform:rotateY(90deg) translateZ(calc(min(70vw,70vh)/2))}.c-cube__face--left{transform:rotateY(-90deg) translateZ(calc(min(70vw,70vh)/2))}.c-cube__face--top{transform:rotateX(90deg) translateZ(calc(min(70vw,70vh)/2))}.c-cube__face--bottom{transform:rotateX(-90deg) translateZ(calc(min(70vw,70vh)/2))}.c-cube__content{width:100%;height:100%;overflow:hidden;pointer-events:none}.c-cube__iframe{width:100%;height:100%;border:none;pointer-events:none;background:#000;contain:strict}.c-cube__placeholder{width:100%;height:100%;display:flex;flex-direction:column;align-items:center;justify-content:center;background:linear-gradient(135deg,#1a1a2e,#16213e,#0f3460);color:#ffffffe6;text-align:center;padding:2rem}.c-cube__placeholder h2{font-size:clamp(1.5rem,4vw,2.5rem);font-weight:600;margin:0 0 .5rem;letter-spacing:.05em;text-shadow:0 2px 10px rgba(0,0,0,.5)}.c-cube__placeholder p{font-size:clamp(.875rem,2vw,1.125rem);opacity:.7;margin:0;letter-spacing:.1em;text-transform:uppercase}.c-cube__placeholder--gradient-1{background:linear-gradient(135deg,#2d1b4e,#1a1a2e,#0d2137)}.c-cube__placeholder--gradient-2{background:linear-gradient(135deg,#0f3460,#1a1a2e,#16213e)}.c-cube__placeholder--gradient-3{background:linear-gradient(135deg,#1e3a5f,#16213e,#1a1a2e)}.c-cube-view-mode{position:fixed;top:50%;left:2rem;transform:translateY(-50%);padding:.75rem 1rem;background:#ffffff1a;-webkit-backdrop-filter:blur(10px);backdrop-filter:blur(10px);border-radius:8px;font-size:.75rem;color:#ffffffe6;letter-spacing:.1em;text-transform:uppercase;border:1px solid rgba(255,255,255,.15);writing-mode:vertical-rl;text-orientation:mixed}.c-cube-hint{position:fixed;bottom:2rem;left:50%;transform:translate(-50%);display:flex;align-items:center;gap:.75rem;padding:.75rem 1.5rem;background:#ffffff1a;-webkit-backdrop-filter:blur(10px);backdrop-filter:blur(10px);border-radius:2rem;font-size:.8rem;color:#fffc;letter-spacing:.05em;border:1px solid rgba(255,255,255,.15)}.c-cube-hint kbd{display:inline-flex;align-items:center;justify-content:center;min-width:1.5rem;height:1.5rem;padding:0 .4rem;background:#ffffff26;border-radius:4px;font-family:inherit;font-size:.75rem;font-weight:600;border:1px solid rgba(255,255,255,.2)}.c-cube-hint__separator{opacity:.4}.c-cube-indicator{position:fixed;top:2rem;left:50%;transform:translate(-50%);display:flex;gap:.5rem}.c-cube-indicator__dot{padding:.5rem 1rem;background:#ffffff1a;border:1px solid rgba(255,255,255,.2);border-radius:2rem;font-size:.7rem;text-transform:uppercase;letter-spacing:.1em;color:#fff9;cursor:pointer;transition:all .2s ease}.c-cube-indicator__dot:hover{background:#ffffff26;color:#ffffffe6}.c-cube-indicator__dot--active{background:#fff3;color:#fff;border-color:#fff6}.c-cube-trigger{position:fixed;bottom:20px;right:20px;z-index:100;display:flex;align-items:center;gap:8px;padding:10px 14px;background:#ffffff1a;border:1px solid rgba(255,255,255,.25);border-radius:12px;cursor:pointer;color:#fffc;transition:all .3s ease;-webkit-backdrop-filter:blur(8px);backdrop-filter:blur(8px)}.c-cube-trigger:hover{background:#ffffff26;border-color:#fff6;color:#fff;transform:scale(1.05)}.c-cube-trigger:active{transform:scale(.95)}.c-cube-trigger svg{transition:transform .3s ease}.c-cube-trigger:hover svg{transform:rotateY(15deg) rotateX(-10deg)}.c-cube-trigger__key{display:inline-flex;align-items:center;justify-content:center;min-width:20px;height:20px;padding:0 6px;background:#ffffff26;border:1px solid rgba(255,255,255,.3);border-radius:4px;font-size:11px;font-weight:600;font-family:inherit}.c-cube-app-preview{width:100%;height:100%;display:flex;align-items:center;justify-content:center;background:linear-gradient(135deg,#1a1a2e,#0a0a15);position:relative}.c-cube-app-preview__label{padding:1rem 2rem;background:#ffffff1a;border:1px solid rgba(255,255,255,.2);border-radius:8px;font-size:1rem;color:#ffffffe6;letter-spacing:.1em;text-transform:uppercase}@media (max-width: 768px){.c-cube-trigger{bottom:12px;right:12px;padding:8px 10px;gap:6px;border-radius:10px}.c-cube-trigger svg{width:16px;height:16px}.c-cube-trigger__key{min-width:18px;height:18px;font-size:10px}.c-cube-view-mode{left:.5rem;padding:.5rem .75rem;font-size:.6rem}.c-cube-hint{flex-wrap:wrap;justify-content:center;bottom:1rem;padding:.5rem 1rem;font-size:.7rem}.c-cube-indicator{top:1rem;flex-wrap:wrap;justify-content:center;max-width:90%}.c-cube-indicator__dot{padding:.4rem .75rem;font-size:.6rem}}.u-hidden{display:none!important}.u-invisible{visibility:hidden!important}.u-no-pointer{pointer-events:none!important}.u-pointer{pointer-events:auto!important}#app,.app-container{width:100%;height:100%;position:relative}
/*$vite$:1*/`,document.head.appendChild(wo);/**
* @vue/shared v3.5.27
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function Pn(e){const t=Object.create(null);for(const n of e.split(","))t[n]=1;return n=>n in t}const te={},_t=[],Pe=()=>{},zo=()=>!1,en=e=>e.charCodeAt(0)===111&&e.charCodeAt(1)===110&&(e.charCodeAt(2)>122||e.charCodeAt(2)<97),Fn=e=>e.startsWith("onUpdate:"),ce=Object.assign,Ln=(e,t)=>{const n=e.indexOf(t);n>-1&&e.splice(n,1)},bi=Object.prototype.hasOwnProperty,J=(e,t)=>bi.call(e,t),j=Array.isArray,yt=e=>tn(e)==="[object Map]",ko=e=>tn(e)==="[object Set]",N=e=>typeof e=="function",le=e=>typeof e=="string",ot=e=>typeof e=="symbol",re=e=>e!==null&&typeof e=="object",So=e=>(re(e)||N(e))&&N(e.then)&&N(e.catch),Ao=Object.prototype.toString,tn=e=>Ao.call(e),xi=e=>tn(e).slice(8,-1),To=e=>tn(e)==="[object Object]",Dn=e=>le(e)&&e!=="NaN"&&e[0]!=="-"&&""+parseInt(e,10)===e,Ot=Pn(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),nn=e=>{const t=Object.create(null);return n=>t[n]||(t[n]=e(n))},_i=/-\w/g,st=nn(e=>e.replace(_i,t=>t.slice(1).toUpperCase())),yi=/\B([A-Z])/g,pt=nn(e=>e.replace(yi,"-$1").toLowerCase()),Eo=nn(e=>e.charAt(0).toUpperCase()+e.slice(1)),Nn=nn(e=>e?`on${Eo(e)}`:""),it=(e,t)=>!Object.is(e,t),$n=(e,...t)=>{for(let n=0;n<e.length;n++)e[n](...t)},Mo=(e,t,n,o=!1)=>{Object.defineProperty(e,t,{configurable:!0,enumerable:!1,writable:o,value:n})},wi=e=>{const t=parseFloat(e);return isNaN(t)?e:t};let Co;const on=()=>Co||(Co=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function Pt(e){if(j(e)){const t={};for(let n=0;n<e.length;n++){const o=e[n],s=le(o)?Ai(o):Pt(o);if(s)for(const i in s)t[i]=s[i]}return t}else if(le(e)||re(e))return e}const zi=/;(?![^(]*\))/g,ki=/:([^]+)/,Si=/\/\*[^]*?\*\//g;function Ai(e){const t={};return e.replace(Si,"").split(zi).forEach(n=>{if(n){const o=n.split(ki);o.length>1&&(t[o[0].trim()]=o[1].trim())}}),t}function Ce(e){let t="";if(le(e))t=e;else if(j(e))for(let n=0;n<e.length;n++){const o=Ce(e[n]);o&&(t+=o+" ")}else if(re(e))for(const n in e)e[n]&&(t+=n+" ");return t.trim()}const Ti=Pn("itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly");function Ro(e){return!!e||e===""}const Io=e=>!!(e&&e.__v_isRef===!0),Fe=e=>le(e)?e:e==null?"":j(e)||re(e)&&(e.toString===Ao||!N(e.toString))?Io(e)?Fe(e.value):JSON.stringify(e,Oo,2):String(e),Oo=(e,t)=>Io(t)?Oo(e,t.value):yt(t)?{[`Map(${t.size})`]:[...t.entries()].reduce((n,[o,s],i)=>(n[jn(o,i)+" =>"]=s,n),{})}:ko(t)?{[`Set(${t.size})`]:[...t.values()].map(n=>jn(n))}:ot(t)?jn(t):re(t)&&!j(t)&&!To(t)?String(t):t,jn=(e,t="")=>{var n;return ot(e)?`Symbol(${(n=e.description)!=null?n:t})`:e};/**
* @vue/reactivity v3.5.27
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let be;class Ei{constructor(t=!1){this.detached=t,this._active=!0,this._on=0,this.effects=[],this.cleanups=[],this._isPaused=!1,this.parent=be,!t&&be&&(this.index=(be.scopes||(be.scopes=[])).push(this)-1)}get active(){return this._active}pause(){if(this._active){this._isPaused=!0;let t,n;if(this.scopes)for(t=0,n=this.scopes.length;t<n;t++)this.scopes[t].pause();for(t=0,n=this.effects.length;t<n;t++)this.effects[t].pause()}}resume(){if(this._active&&this._isPaused){this._isPaused=!1;let t,n;if(this.scopes)for(t=0,n=this.scopes.length;t<n;t++)this.scopes[t].resume();for(t=0,n=this.effects.length;t<n;t++)this.effects[t].resume()}}run(t){if(this._active){const n=be;try{return be=this,t()}finally{be=n}}}on(){++this._on===1&&(this.prevScope=be,be=this)}off(){this._on>0&&--this._on===0&&(be=this.prevScope,this.prevScope=void 0)}stop(t){if(this._active){this._active=!1;let n,o;for(n=0,o=this.effects.length;n<o;n++)this.effects[n].stop();for(this.effects.length=0,n=0,o=this.cleanups.length;n<o;n++)this.cleanups[n]();if(this.cleanups.length=0,this.scopes){for(n=0,o=this.scopes.length;n<o;n++)this.scopes[n].stop(!0);this.scopes.length=0}if(!this.detached&&this.parent&&!t){const s=this.parent.scopes.pop();s&&s!==this&&(this.parent.scopes[this.index]=s,s.index=this.index)}this.parent=void 0}}}function Mi(){return be}let ne;const Bn=new WeakSet;class Po{constructor(t){this.fn=t,this.deps=void 0,this.depsTail=void 0,this.flags=5,this.next=void 0,this.cleanup=void 0,this.scheduler=void 0,be&&be.active&&be.effects.push(this)}pause(){this.flags|=64}resume(){this.flags&64&&(this.flags&=-65,Bn.has(this)&&(Bn.delete(this),this.trigger()))}notify(){this.flags&2&&!(this.flags&32)||this.flags&8||Lo(this)}run(){if(!(this.flags&1))return this.fn();this.flags|=2,Bo(this),Do(this);const t=ne,n=Re;ne=this,Re=!0;try{return this.fn()}finally{No(this),ne=t,Re=n,this.flags&=-3}}stop(){if(this.flags&1){for(let t=this.deps;t;t=t.nextDep)Vn(t);this.deps=this.depsTail=void 0,Bo(this),this.onStop&&this.onStop(),this.flags&=-2}}trigger(){this.flags&64?Bn.add(this):this.scheduler?this.scheduler():this.runIfDirty()}runIfDirty(){Un(this)&&this.run()}get dirty(){return Un(this)}}let Fo=0,Ft,Lt;function Lo(e,t=!1){if(e.flags|=8,t){e.next=Lt,Lt=e;return}e.next=Ft,Ft=e}function Hn(){Fo++}function Gn(){if(--Fo>0)return;if(Lt){let t=Lt;for(Lt=void 0;t;){const n=t.next;t.next=void 0,t.flags&=-9,t=n}}let e;for(;Ft;){let t=Ft;for(Ft=void 0;t;){const n=t.next;if(t.next=void 0,t.flags&=-9,t.flags&1)try{t.trigger()}catch(o){e||(e=o)}t=n}}if(e)throw e}function Do(e){for(let t=e.deps;t;t=t.nextDep)t.version=-1,t.prevActiveLink=t.dep.activeLink,t.dep.activeLink=t}function No(e){let t,n=e.depsTail,o=n;for(;o;){const s=o.prevDep;o.version===-1?(o===n&&(n=s),Vn(o),Ci(o)):t=o,o.dep.activeLink=o.prevActiveLink,o.prevActiveLink=void 0,o=s}e.deps=t,e.depsTail=n}function Un(e){for(let t=e.deps;t;t=t.nextDep)if(t.dep.version!==t.version||t.dep.computed&&($o(t.dep.computed)||t.dep.version!==t.version))return!0;return!!e._dirty}function $o(e){if(e.flags&4&&!(e.flags&16)||(e.flags&=-17,e.globalVersion===Dt)||(e.globalVersion=Dt,!e.isSSR&&e.flags&128&&(!e.deps&&!e._dirty||!Un(e))))return;e.flags|=2;const t=e.dep,n=ne,o=Re;ne=e,Re=!0;try{Do(e);const s=e.fn(e._value);(t.version===0||it(s,e._value))&&(e.flags|=128,e._value=s,t.version++)}catch(s){throw t.version++,s}finally{ne=n,Re=o,No(e),e.flags&=-3}}function Vn(e,t=!1){const{dep:n,prevSub:o,nextSub:s}=e;if(o&&(o.nextSub=s,e.prevSub=void 0),s&&(s.prevSub=o,e.nextSub=void 0),n.subs===e&&(n.subs=o,!o&&n.computed)){n.computed.flags&=-5;for(let i=n.computed.deps;i;i=i.nextDep)Vn(i,!0)}!t&&!--n.sc&&n.map&&n.map.delete(n.key)}function Ci(e){const{prevDep:t,nextDep:n}=e;t&&(t.nextDep=n,e.prevDep=void 0),n&&(n.prevDep=t,e.nextDep=void 0)}let Re=!0;const jo=[];function Le(){jo.push(Re),Re=!1}function De(){const e=jo.pop();Re=e===void 0?!0:e}function Bo(e){const{cleanup:t}=e;if(e.cleanup=void 0,t){const n=ne;ne=void 0;try{t()}finally{ne=n}}}let Dt=0;class Ri{constructor(t,n){this.sub=t,this.dep=n,this.version=n.version,this.nextDep=this.prevDep=this.nextSub=this.prevSub=this.prevActiveLink=void 0}}class Wn{constructor(t){this.computed=t,this.version=0,this.activeLink=void 0,this.subs=void 0,this.map=void 0,this.key=void 0,this.sc=0,this.__v_skip=!0}track(t){if(!ne||!Re||ne===this.computed)return;let n=this.activeLink;if(n===void 0||n.sub!==ne)n=this.activeLink=new Ri(ne,this),ne.deps?(n.prevDep=ne.depsTail,ne.depsTail.nextDep=n,ne.depsTail=n):ne.deps=ne.depsTail=n,Ho(n);else if(n.version===-1&&(n.version=this.version,n.nextDep)){const o=n.nextDep;o.prevDep=n.prevDep,n.prevDep&&(n.prevDep.nextDep=o),n.prevDep=ne.depsTail,n.nextDep=void 0,ne.depsTail.nextDep=n,ne.depsTail=n,ne.deps===n&&(ne.deps=o)}return n}trigger(t){this.version++,Dt++,this.notify(t)}notify(t){Hn();try{for(let n=this.subs;n;n=n.prevSub)n.sub.notify()&&n.sub.dep.notify()}finally{Gn()}}}function Ho(e){if(e.dep.sc++,e.sub.flags&4){const t=e.dep.computed;if(t&&!e.dep.subs){t.flags|=20;for(let o=t.deps;o;o=o.nextDep)Ho(o)}const n=e.dep.subs;n!==e&&(e.prevSub=n,n&&(n.nextSub=e)),e.dep.subs=e}}const Kn=new WeakMap,vt=Symbol(""),Yn=Symbol(""),Nt=Symbol("");function de(e,t,n){if(Re&&ne){let o=Kn.get(e);o||Kn.set(e,o=new Map);let s=o.get(n);s||(o.set(n,s=new Wn),s.map=o,s.key=n),s.track()}}function Je(e,t,n,o,s,i){const r=Kn.get(e);if(!r){Dt++;return}const l=c=>{c&&c.trigger()};if(Hn(),t==="clear")r.forEach(l);else{const c=j(e),d=c&&Dn(n);if(c&&n==="length"){const f=Number(o);r.forEach((p,_)=>{(_==="length"||_===Nt||!ot(_)&&_>=f)&&l(p)})}else switch((n!==void 0||r.has(void 0))&&l(r.get(n)),d&&l(r.get(Nt)),t){case"add":c?d&&l(r.get("length")):(l(r.get(vt)),yt(e)&&l(r.get(Yn)));break;case"delete":c||(l(r.get(vt)),yt(e)&&l(r.get(Yn)));break;case"set":yt(e)&&l(r.get(vt));break}}Gn()}function wt(e){const t=K(e);return t===e?t:(de(t,"iterate",Nt),Ae(e)?t:t.map(Ie))}function sn(e){return de(e=K(e),"iterate",Nt),e}function rt(e,t){return Qe(e)?zt(ht(e)?Ie(t):t):Ie(t)}const Ii={__proto__:null,[Symbol.iterator](){return qn(this,Symbol.iterator,e=>rt(this,e))},concat(...e){return wt(this).concat(...e.map(t=>j(t)?wt(t):t))},entries(){return qn(this,"entries",e=>(e[1]=rt(this,e[1]),e))},every(e,t){return Ze(this,"every",e,t,void 0,arguments)},filter(e,t){return Ze(this,"filter",e,t,n=>n.map(o=>rt(this,o)),arguments)},find(e,t){return Ze(this,"find",e,t,n=>rt(this,n),arguments)},findIndex(e,t){return Ze(this,"findIndex",e,t,void 0,arguments)},findLast(e,t){return Ze(this,"findLast",e,t,n=>rt(this,n),arguments)},findLastIndex(e,t){return Ze(this,"findLastIndex",e,t,void 0,arguments)},forEach(e,t){return Ze(this,"forEach",e,t,void 0,arguments)},includes(...e){return Xn(this,"includes",e)},indexOf(...e){return Xn(this,"indexOf",e)},join(e){return wt(this).join(e)},lastIndexOf(...e){return Xn(this,"lastIndexOf",e)},map(e,t){return Ze(this,"map",e,t,void 0,arguments)},pop(){return $t(this,"pop")},push(...e){return $t(this,"push",e)},reduce(e,...t){return Go(this,"reduce",e,t)},reduceRight(e,...t){return Go(this,"reduceRight",e,t)},shift(){return $t(this,"shift")},some(e,t){return Ze(this,"some",e,t,void 0,arguments)},splice(...e){return $t(this,"splice",e)},toReversed(){return wt(this).toReversed()},toSorted(e){return wt(this).toSorted(e)},toSpliced(...e){return wt(this).toSpliced(...e)},unshift(...e){return $t(this,"unshift",e)},values(){return qn(this,"values",e=>rt(this,e))}};function qn(e,t,n){const o=sn(e),s=o[t]();return o!==e&&!Ae(e)&&(s._next=s.next,s.next=()=>{const i=s._next();return i.done||(i.value=n(i.value)),i}),s}const Oi=Array.prototype;function Ze(e,t,n,o,s,i){const r=sn(e),l=r!==e&&!Ae(e),c=r[t];if(c!==Oi[t]){const p=c.apply(e,i);return l?Ie(p):p}let d=n;r!==e&&(l?d=function(p,_){return n.call(this,rt(e,p),_,e)}:n.length>2&&(d=function(p,_){return n.call(this,p,_,e)}));const f=c.call(r,d,o);return l&&s?s(f):f}function Go(e,t,n,o){const s=sn(e);let i=n;return s!==e&&(Ae(e)?n.length>3&&(i=function(r,l,c){return n.call(this,r,l,c,e)}):i=function(r,l,c){return n.call(this,r,rt(e,l),c,e)}),s[t](i,...o)}function Xn(e,t,n){const o=K(e);de(o,"iterate",Nt);const s=o[t](...n);return(s===-1||s===!1)&&eo(n[0])?(n[0]=K(n[0]),o[t](...n)):s}function $t(e,t,n=[]){Le(),Hn();const o=K(e)[t].apply(e,n);return Gn(),De(),o}const Pi=Pn("__proto__,__v_isRef,__isVue"),Uo=new Set(Object.getOwnPropertyNames(Symbol).filter(e=>e!=="arguments"&&e!=="caller").map(e=>Symbol[e]).filter(ot));function Fi(e){ot(e)||(e=String(e));const t=K(this);return de(t,"has",e),t.hasOwnProperty(e)}class Vo{constructor(t=!1,n=!1){this._isReadonly=t,this._isShallow=n}get(t,n,o){if(n==="__v_skip")return t.__v_skip;const s=this._isReadonly,i=this._isShallow;if(n==="__v_isReactive")return!s;if(n==="__v_isReadonly")return s;if(n==="__v_isShallow")return i;if(n==="__v_raw")return o===(s?i?Jo:Xo:i?qo:Yo).get(t)||Object.getPrototypeOf(t)===Object.getPrototypeOf(o)?t:void 0;const r=j(t);if(!s){let c;if(r&&(c=Ii[n]))return c;if(n==="hasOwnProperty")return Fi}const l=Reflect.get(t,n,fe(t)?t:o);if((ot(n)?Uo.has(n):Pi(n))||(s||de(t,"get",n),i))return l;if(fe(l)){const c=r&&Dn(n)?l:l.value;return s&&re(c)?Qn(c):c}return re(l)?s?Qn(l):Zn(l):l}}class Wo extends Vo{constructor(t=!1){super(!1,t)}set(t,n,o,s){let i=t[n];const r=j(t)&&Dn(n);if(!this._isShallow){const d=Qe(i);if(!Ae(o)&&!Qe(o)&&(i=K(i),o=K(o)),!r&&fe(i)&&!fe(o))return d||(i.value=o),!0}const l=r?Number(n)<t.length:J(t,n),c=Reflect.set(t,n,o,fe(t)?t:s);return t===K(s)&&(l?it(o,i)&&Je(t,"set",n,o):Je(t,"add",n,o)),c}deleteProperty(t,n){const o=J(t,n);t[n];const s=Reflect.deleteProperty(t,n);return s&&o&&Je(t,"delete",n,void 0),s}has(t,n){const o=Reflect.has(t,n);return(!ot(n)||!Uo.has(n))&&de(t,"has",n),o}ownKeys(t){return de(t,"iterate",j(t)?"length":vt),Reflect.ownKeys(t)}}class Ko extends Vo{constructor(t=!1){super(!0,t)}set(t,n){return!0}deleteProperty(t,n){return!0}}const Li=new Wo,Di=new Ko,Ni=new Wo(!0),$i=new Ko(!0),Jn=e=>e,rn=e=>Reflect.getPrototypeOf(e);function ji(e,t,n){return function(...o){const s=this.__v_raw,i=K(s),r=yt(i),l=e==="entries"||e===Symbol.iterator&&r,c=e==="keys"&&r,d=s[e](...o),f=n?Jn:t?zt:Ie;return!t&&de(i,"iterate",c?Yn:vt),ce(Object.create(d),{next(){const{value:p,done:_}=d.next();return _?{value:p,done:_}:{value:l?[f(p[0]),f(p[1])]:f(p),done:_}}})}}function ln(e){return function(...t){return e==="delete"?!1:e==="clear"?void 0:this}}function Bi(e,t){const n={get(s){const i=this.__v_raw,r=K(i),l=K(s);e||(it(s,l)&&de(r,"get",s),de(r,"get",l));const{has:c}=rn(r),d=t?Jn:e?zt:Ie;if(c.call(r,s))return d(i.get(s));if(c.call(r,l))return d(i.get(l));i!==r&&i.get(s)},get size(){const s=this.__v_raw;return!e&&de(K(s),"iterate",vt),s.size},has(s){const i=this.__v_raw,r=K(i),l=K(s);return e||(it(s,l)&&de(r,"has",s),de(r,"has",l)),s===l?i.has(s):i.has(s)||i.has(l)},forEach(s,i){const r=this,l=r.__v_raw,c=K(l),d=t?Jn:e?zt:Ie;return!e&&de(c,"iterate",vt),l.forEach((f,p)=>s.call(i,d(f),d(p),r))}};return ce(n,e?{add:ln("add"),set:ln("set"),delete:ln("delete"),clear:ln("clear")}:{add(s){!t&&!Ae(s)&&!Qe(s)&&(s=K(s));const i=K(this);return rn(i).has.call(i,s)||(i.add(s),Je(i,"add",s,s)),this},set(s,i){!t&&!Ae(i)&&!Qe(i)&&(i=K(i));const r=K(this),{has:l,get:c}=rn(r);let d=l.call(r,s);d||(s=K(s),d=l.call(r,s));const f=c.call(r,s);return r.set(s,i),d?it(i,f)&&Je(r,"set",s,i):Je(r,"add",s,i),this},delete(s){const i=K(this),{has:r,get:l}=rn(i);let c=r.call(i,s);c||(s=K(s),c=r.call(i,s)),l&&l.call(i,s);const d=i.delete(s);return c&&Je(i,"delete",s,void 0),d},clear(){const s=K(this),i=s.size!==0,r=s.clear();return i&&Je(s,"clear",void 0,void 0),r}}),["keys","values","entries",Symbol.iterator].forEach(s=>{n[s]=ji(s,e,t)}),n}function an(e,t){const n=Bi(e,t);return(o,s,i)=>s==="__v_isReactive"?!e:s==="__v_isReadonly"?e:s==="__v_raw"?o:Reflect.get(J(n,s)&&s in o?n:o,s,i)}const Hi={get:an(!1,!1)},Gi={get:an(!1,!0)},Ui={get:an(!0,!1)},Vi={get:an(!0,!0)},Yo=new WeakMap,qo=new WeakMap,Xo=new WeakMap,Jo=new WeakMap;function Wi(e){switch(e){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function Ki(e){return e.__v_skip||!Object.isExtensible(e)?0:Wi(xi(e))}function Zn(e){return Qe(e)?e:cn(e,!1,Li,Hi,Yo)}function Yi(e){return cn(e,!1,Ni,Gi,qo)}function Qn(e){return cn(e,!0,Di,Ui,Xo)}function xf(e){return cn(e,!0,$i,Vi,Jo)}function cn(e,t,n,o,s){if(!re(e)||e.__v_raw&&!(t&&e.__v_isReactive))return e;const i=Ki(e);if(i===0)return e;const r=s.get(e);if(r)return r;const l=new Proxy(e,i===2?o:n);return s.set(e,l),l}function ht(e){return Qe(e)?ht(e.__v_raw):!!(e&&e.__v_isReactive)}function Qe(e){return!!(e&&e.__v_isReadonly)}function Ae(e){return!!(e&&e.__v_isShallow)}function eo(e){return e?!!e.__v_raw:!1}function K(e){const t=e&&e.__v_raw;return t?K(t):e}function qi(e){return!J(e,"__v_skip")&&Object.isExtensible(e)&&Mo(e,"__v_skip",!0),e}const Ie=e=>re(e)?Zn(e):e,zt=e=>re(e)?Qn(e):e;function fe(e){return e?e.__v_isRef===!0:!1}function se(e){return Xi(e,!1)}function Xi(e,t){return fe(e)?e:new Ji(e,t)}class Ji{constructor(t,n){this.dep=new Wn,this.__v_isRef=!0,this.__v_isShallow=!1,this._rawValue=n?t:K(t),this._value=n?t:Ie(t),this.__v_isShallow=n}get value(){return this.dep.track(),this._value}set value(t){const n=this._rawValue,o=this.__v_isShallow||Ae(t)||Qe(t);t=o?t:K(t),it(t,n)&&(this._rawValue=t,this._value=o?t:Ie(t),this.dep.trigger())}}function Zi(e){return fe(e)?e.value:e}const Qi={get:(e,t,n)=>t==="__v_raw"?e:Zi(Reflect.get(e,t,n)),set:(e,t,n,o)=>{const s=e[t];return fe(s)&&!fe(n)?(s.value=n,!0):Reflect.set(e,t,n,o)}};function Zo(e){return ht(e)?e:new Proxy(e,Qi)}class er{constructor(t,n,o){this.fn=t,this.setter=n,this._value=void 0,this.dep=new Wn(this),this.__v_isRef=!0,this.deps=void 0,this.depsTail=void 0,this.flags=16,this.globalVersion=Dt-1,this.next=void 0,this.effect=this,this.__v_isReadonly=!n,this.isSSR=o}notify(){if(this.flags|=16,!(this.flags&8)&&ne!==this)return Lo(this,!0),!0}get value(){const t=this.dep.track();return $o(this),t&&(t.version=this.dep.version),this._value}set value(t){this.setter&&this.setter(t)}}function tr(e,t,n=!1){let o,s;return N(e)?o=e:(o=e.get,s=e.set),new er(o,s,n)}const fn={},un=new WeakMap;let mt;function nr(e,t=!1,n=mt){if(n){let o=un.get(n);o||un.set(n,o=[]),o.push(e)}}function or(e,t,n=te){const{immediate:o,deep:s,once:i,scheduler:r,augmentJob:l,call:c}=n,d=z=>s?z:Ae(z)||s===!1||s===0?lt(z,1):lt(z);let f,p,_,S,w=!1,y=!1;if(fe(e)?(p=()=>e.value,w=Ae(e)):ht(e)?(p=()=>d(e),w=!0):j(e)?(y=!0,w=e.some(z=>ht(z)||Ae(z)),p=()=>e.map(z=>{if(fe(z))return z.value;if(ht(z))return d(z);if(N(z))return c?c(z,2):z()})):N(e)?t?p=c?()=>c(e,2):e:p=()=>{if(_){Le();try{_()}finally{De()}}const z=mt;mt=f;try{return c?c(e,3,[S]):e(S)}finally{mt=z}}:p=Pe,t&&s){const z=p,U=s===!0?1/0:s;p=()=>lt(z(),U)}const P=Mi(),C=()=>{f.stop(),P&&P.active&&Ln(P.effects,f)};if(i&&t){const z=t;t=(...U)=>{z(...U),C()}}let H=y?new Array(e.length).fill(fn):fn;const I=z=>{if(!(!(f.flags&1)||!f.dirty&&!z))if(t){const U=f.run();if(s||w||(y?U.some((B,L)=>it(B,H[L])):it(U,H))){_&&_();const B=mt;mt=f;try{const L=[U,H===fn?void 0:y&&H[0]===fn?[]:H,S];H=U,c?c(t,3,L):t(...L)}finally{mt=B}}}else f.run()};return l&&l(I),f=new Po(p),f.scheduler=r?()=>r(I,!1):I,S=z=>nr(z,!1,f),_=f.onStop=()=>{const z=un.get(f);if(z){if(c)c(z,4);else for(const U of z)U();un.delete(f)}},t?o?I(!0):H=f.run():r?r(I.bind(null,!0),!0):f.run(),C.pause=f.pause.bind(f),C.resume=f.resume.bind(f),C.stop=C,C}function lt(e,t=1/0,n){if(t<=0||!re(e)||e.__v_skip||(n=n||new Map,(n.get(e)||0)>=t))return e;if(n.set(e,t),t--,fe(e))lt(e.value,t,n);else if(j(e))for(let o=0;o<e.length;o++)lt(e[o],t,n);else if(ko(e)||yt(e))e.forEach(o=>{lt(o,t,n)});else if(To(e)){for(const o in e)lt(e[o],t,n);for(const o of Object.getOwnPropertySymbols(e))Object.prototype.propertyIsEnumerable.call(e,o)&&lt(e[o],t,n)}return e}/**
* @vue/runtime-core v3.5.27
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/const jt=[];let to=!1;function _f(e,...t){if(to)return;to=!0,Le();const n=jt.length?jt[jt.length-1].component:null,o=n&&n.appContext.config.warnHandler,s=sr();if(o)kt(o,n,11,[e+t.map(i=>{var r,l;return(l=(r=i.toString)==null?void 0:r.call(i))!=null?l:JSON.stringify(i)}).join(""),n&&n.proxy,s.map(({vnode:i})=>`at <${Js(n,i.type)}>`).join(`
`),s]);else{const i=[`[Vue warn]: ${e}`,...t];s.length&&i.push(`
`,...ir(s)),console.warn(...i)}De(),to=!1}function sr(){let e=jt[jt.length-1];if(!e)return[];const t=[];for(;e;){const n=t[0];n&&n.vnode===e?n.recurseCount++:t.push({vnode:e,recurseCount:0});const o=e.component&&e.component.parent;e=o&&o.vnode}return t}function ir(e){const t=[];return e.forEach((n,o)=>{t.push(...o===0?[]:[`
`],...rr(n))}),t}function rr({vnode:e,recurseCount:t}){const n=t>0?`... (${t} recursive calls)`:"",o=e.component?e.component.parent==null:!1,s=` at <${Js(e.component,e.type,o)}`,i=">"+n;return e.props?[s,...lr(e.props),i]:[s+i]}function lr(e){const t=[],n=Object.keys(e);return n.slice(0,3).forEach(o=>{t.push(...Qo(o,e[o]))}),n.length>3&&t.push(" ..."),t}function Qo(e,t,n){return le(t)?(t=JSON.stringify(t),n?t:[`${e}=${t}`]):typeof t=="number"||typeof t=="boolean"||t==null?n?t:[`${e}=${t}`]:fe(t)?(t=Qo(e,K(t.value),!0),n?t:[`${e}=Ref<`,t,">"]):N(t)?[`${e}=fn${t.name?`<${t.name}>`:""}`]:(t=K(t),n?t:[`${e}=`,t])}function kt(e,t,n,o){try{return o?e(...o):e()}catch(s){dn(s,t,n)}}function Ne(e,t,n,o){if(N(e)){const s=kt(e,t,n,o);return s&&So(s)&&s.catch(i=>{dn(i,t,n)}),s}if(j(e)){const s=[];for(let i=0;i<e.length;i++)s.push(Ne(e[i],t,n,o));return s}}function dn(e,t,n,o=!0){const s=t?t.vnode:null,{errorHandler:i,throwUnhandledErrorInProduction:r}=t&&t.appContext.config||te;if(t){let l=t.parent;const c=t.proxy,d=`https://vuejs.org/error-reference/#runtime-${n}`;for(;l;){const f=l.ec;if(f){for(let p=0;p<f.length;p++)if(f[p](e,c,d)===!1)return}l=l.parent}if(i){Le(),kt(i,null,10,[e,c,d]),De();return}}ar(e,n,s,o,r)}function ar(e,t,n,o=!0,s=!1){if(s)throw e;console.error(e)}const ve=[];let $e=-1;const St=[];let at=null,At=0;const es=Promise.resolve();let pn=null;function cr(e){const t=pn||es;return e?t.then(this?e.bind(this):e):t}function fr(e){let t=$e+1,n=ve.length;for(;t<n;){const o=t+n>>>1,s=ve[o],i=Bt(s);i<e||i===e&&s.flags&2?t=o+1:n=o}return t}function no(e){if(!(e.flags&1)){const t=Bt(e),n=ve[ve.length-1];!n||!(e.flags&2)&&t>=Bt(n)?ve.push(e):ve.splice(fr(t),0,e),e.flags|=1,ts()}}function ts(){pn||(pn=es.then(ss))}function ur(e){j(e)?St.push(...e):at&&e.id===-1?at.splice(At+1,0,e):e.flags&1||(St.push(e),e.flags|=1),ts()}function ns(e,t,n=$e+1){for(;n<ve.length;n++){const o=ve[n];if(o&&o.flags&2){if(e&&o.id!==e.uid)continue;ve.splice(n,1),n--,o.flags&4&&(o.flags&=-2),o(),o.flags&4||(o.flags&=-2)}}}function os(e){if(St.length){const t=[...new Set(St)].sort((n,o)=>Bt(n)-Bt(o));if(St.length=0,at){at.push(...t);return}for(at=t,At=0;At<at.length;At++){const n=at[At];n.flags&4&&(n.flags&=-2),n.flags&8||n(),n.flags&=-2}at=null,At=0}}const Bt=e=>e.id==null?e.flags&2?-1:1/0:e.id;function ss(e){try{for($e=0;$e<ve.length;$e++){const t=ve[$e];t&&!(t.flags&8)&&(t.flags&4&&(t.flags&=-2),kt(t,t.i,t.i?15:14),t.flags&4||(t.flags&=-2))}}finally{for(;$e<ve.length;$e++){const t=ve[$e];t&&(t.flags&=-2)}$e=-1,ve.length=0,os(),pn=null,(ve.length||St.length)&&ss()}}let je=null,is=null;function vn(e){const t=je;return je=e,is=e&&e.type.__scopeId||null,t}function dr(e,t=je,n){if(!t||e._n)return e;const o=(...s)=>{o._d&&Hs(-1);const i=vn(t);let r;try{r=e(...s)}finally{vn(i),o._d&&Hs(1)}return r};return o._n=!0,o._c=!0,o._d=!0,o}function gt(e,t,n,o){const s=e.dirs,i=t&&t.dirs;for(let r=0;r<s.length;r++){const l=s[r];i&&(l.oldValue=i[r].value);let c=l.dir[o];c&&(Le(),Ne(c,n,8,[e.el,l,e,t]),De())}}function pr(e,t){if(ge){let n=ge.provides;const o=ge.parent&&ge.parent.provides;o===n&&(n=ge.provides=Object.create(o)),n[e]=t}}function hn(e,t,n=!1){const o=dl();if(o||Et){let s=Et?Et._context.provides:o?o.parent==null||o.ce?o.vnode.appContext&&o.vnode.appContext.provides:o.parent.provides:void 0;if(s&&e in s)return s[e];if(arguments.length>1)return n&&N(t)?t.call(o&&o.proxy):t}}const vr=Symbol.for("v-scx"),hr=()=>hn(vr);function mn(e,t,n){return rs(e,t,n)}function rs(e,t,n=te){const{immediate:o,deep:s,flush:i,once:r}=n,l=ce({},n),c=t&&o||!t&&i!=="post";let d;if(Zt){if(i==="sync"){const S=hr();d=S.__watcherHandles||(S.__watcherHandles=[])}else if(!c){const S=()=>{};return S.stop=Pe,S.resume=Pe,S.pause=Pe,S}}const f=ge;l.call=(S,w,y)=>Ne(S,f,w,y);let p=!1;i==="post"?l.scheduler=S=>{me(S,f&&f.suspense)}:i!=="sync"&&(p=!0,l.scheduler=(S,w)=>{w?S():no(S)}),l.augmentJob=S=>{t&&(S.flags|=4),p&&(S.flags|=2,f&&(S.id=f.uid,S.i=f))};const _=or(e,t,l);return Zt&&(d?d.push(_):c&&_()),_}function mr(e,t,n){const o=this.proxy,s=le(e)?e.includes(".")?ls(o,e):()=>o[e]:e.bind(o,o);let i;N(t)?i=t:(i=t.handler,n=t);const r=Jt(this),l=rs(s,i.bind(o),n);return r(),l}function ls(e,t){const n=t.split(".");return()=>{let o=e;for(let s=0;s<n.length&&o;s++)o=o[n[s]];return o}}const as=Symbol("_vte"),gr=e=>e.__isTeleport,Ht=e=>e&&(e.disabled||e.disabled===""),cs=e=>e&&(e.defer||e.defer===""),fs=e=>typeof SVGElement<"u"&&e instanceof SVGElement,us=e=>typeof MathMLElement=="function"&&e instanceof MathMLElement,oo=(e,t)=>{const n=e&&e.to;return le(n)?t?t(n):null:n},ds={name:"Teleport",__isTeleport:!0,process(e,t,n,o,s,i,r,l,c,d){const{mc:f,pc:p,pbc:_,o:{insert:S,querySelector:w,createText:y,createComment:P}}=d,C=Ht(t.props);let{shapeFlag:H,children:I,dynamicChildren:z}=t;if(e==null){const U=t.el=y(""),B=t.anchor=y("");S(U,n,o),S(B,n,o);const L=(q,Q)=>{H&16&&f(I,q,Q,s,i,r,l,c)},Y=()=>{const q=t.target=oo(t.props,w),Q=ps(q,t,y,S);q&&(r!=="svg"&&fs(q)?r="svg":r!=="mathml"&&us(q)&&(r="mathml"),s&&s.isCE&&(s.ce._teleportTargets||(s.ce._teleportTargets=new Set)).add(q),C||(L(q,Q),bn(t,!1)))};C&&(L(n,B),bn(t,!0)),cs(t.props)?(t.el.__isMounted=!1,me(()=>{Y(),delete t.el.__isMounted},i)):Y()}else{if(cs(t.props)&&e.el.__isMounted===!1){me(()=>{ds.process(e,t,n,o,s,i,r,l,c,d)},i);return}t.el=e.el,t.targetStart=e.targetStart;const U=t.anchor=e.anchor,B=t.target=e.target,L=t.targetAnchor=e.targetAnchor,Y=Ht(e.props),q=Y?n:B,Q=Y?U:L;if(r==="svg"||fs(B)?r="svg":(r==="mathml"||us(B))&&(r="mathml"),z?(_(e.dynamicChildren,z,q,s,i,r,l),vo(e,t,!0)):c||p(e,t,q,Q,s,i,r,l,!1),C)Y?t.props&&e.props&&t.props.to!==e.props.to&&(t.props.to=e.props.to):gn(t,n,U,d,1);else if((t.props&&t.props.to)!==(e.props&&e.props.to)){const ue=t.target=oo(t.props,w);ue&&gn(t,ue,null,d,0)}else Y&&gn(t,B,L,d,1);bn(t,C)}},remove(e,t,n,{um:o,o:{remove:s}},i){const{shapeFlag:r,children:l,anchor:c,targetStart:d,targetAnchor:f,target:p,props:_}=e;if(p&&(s(d),s(f)),i&&s(c),r&16){const S=i||!Ht(_);for(let w=0;w<l.length;w++){const y=l[w];o(y,t,n,S,!!y.dynamicChildren)}}},move:gn,hydrate:br};function gn(e,t,n,{o:{insert:o},m:s},i=2){i===0&&o(e.targetAnchor,t,n);const{el:r,anchor:l,shapeFlag:c,children:d,props:f}=e,p=i===2;if(p&&o(r,t,n),(!p||Ht(f))&&c&16)for(let _=0;_<d.length;_++)s(d[_],t,n,2);p&&o(l,t,n)}function br(e,t,n,o,s,i,{o:{nextSibling:r,parentNode:l,querySelector:c,insert:d,createText:f}},p){function _(y,P,C,H){P.anchor=p(r(y),P,l(y),n,o,s,i),P.targetStart=C,P.targetAnchor=H}const S=t.target=oo(t.props,c),w=Ht(t.props);if(S){const y=S._lpa||S.firstChild;if(t.shapeFlag&16)if(w)_(e,t,y,y&&r(y));else{t.anchor=r(e);let P=y;for(;P;){if(P&&P.nodeType===8){if(P.data==="teleport start anchor")t.targetStart=P;else if(P.data==="teleport anchor"){t.targetAnchor=P,S._lpa=t.targetAnchor&&r(t.targetAnchor);break}}P=r(P)}t.targetAnchor||ps(S,t,f,d),p(y&&r(y),t,S,n,o,s,i)}bn(t,w)}else w&&t.shapeFlag&16&&_(e,t,e,r(e));return t.anchor&&r(t.anchor)}const xr=ds;function bn(e,t){const n=e.ctx;if(n&&n.ut){let o,s;for(t?(o=e.el,s=e.anchor):(o=e.targetStart,s=e.targetAnchor);o&&o!==s;)o.nodeType===1&&o.setAttribute("data-v-owner",n.uid),o=o.nextSibling;n.ut()}}function ps(e,t,n,o){const s=t.targetStart=n(""),i=t.targetAnchor=n("");return s[as]=i,e&&(o(s,e),o(i,e)),i}const _r=Symbol("_leaveCb");function so(e,t){e.shapeFlag&6&&e.component?(e.transition=t,so(e.component.subTree,t)):e.shapeFlag&128?(e.ssContent.transition=t.clone(e.ssContent),e.ssFallback.transition=t.clone(e.ssFallback)):e.transition=t}function xn(e,t){return N(e)?ce({name:e.name},t,{setup:e}):e}function vs(e){e.ids=[e.ids[0]+e.ids[2]+++"-",0,0]}const _n=new WeakMap;function Gt(e,t,n,o,s=!1){if(j(e)){e.forEach((w,y)=>Gt(w,t&&(j(t)?t[y]:t),n,o,s));return}if(Ut(o)&&!s){o.shapeFlag&512&&o.type.__asyncResolved&&o.component.subTree.component&&Gt(e,t,n,o.component.subTree);return}const i=o.shapeFlag&4?bo(o.component):o.el,r=s?null:i,{i:l,r:c}=e,d=t&&t.r,f=l.refs===te?l.refs={}:l.refs,p=l.setupState,_=K(p),S=p===te?zo:w=>J(_,w);if(d!=null&&d!==c){if(hs(t),le(d))f[d]=null,S(d)&&(p[d]=null);else if(fe(d)){d.value=null;const w=t;w.k&&(f[w.k]=null)}}if(N(c))kt(c,l,12,[r,f]);else{const w=le(c),y=fe(c);if(w||y){const P=()=>{if(e.f){const C=w?S(c)?p[c]:f[c]:c.value;if(s)j(C)&&Ln(C,i);else if(j(C))C.includes(i)||C.push(i);else if(w)f[c]=[i],S(c)&&(p[c]=f[c]);else{const H=[i];c.value=H,e.k&&(f[e.k]=H)}}else w?(f[c]=r,S(c)&&(p[c]=r)):y&&(c.value=r,e.k&&(f[e.k]=r))};if(r){const C=()=>{P(),_n.delete(e)};C.id=-1,_n.set(e,C),me(C,n)}else hs(e),P()}}}function hs(e){const t=_n.get(e);t&&(t.flags|=8,_n.delete(e))}on().requestIdleCallback,on().cancelIdleCallback;const Ut=e=>!!e.type.__asyncLoader,ms=e=>e.type.__isKeepAlive;function yr(e,t){gs(e,"a",t)}function wr(e,t){gs(e,"da",t)}function gs(e,t,n=ge){const o=e.__wdc||(e.__wdc=()=>{let s=n;for(;s;){if(s.isDeactivated)return;s=s.parent}return e()});if(yn(t,o,n),n){let s=n.parent;for(;s&&s.parent;)ms(s.parent.vnode)&&zr(o,t,n,s),s=s.parent}}function zr(e,t,n,o){const s=yn(t,e,o,!0);Tt(()=>{Ln(o[t],s)},n)}function yn(e,t,n=ge,o=!1){if(n){const s=n[e]||(n[e]=[]),i=t.__weh||(t.__weh=(...r)=>{Le();const l=Jt(n),c=Ne(t,n,e,r);return l(),De(),c});return o?s.unshift(i):s.push(i),i}}const et=e=>(t,n=ge)=>{(!Zt||e==="sp")&&yn(e,(...o)=>t(...o),n)},kr=et("bm"),Vt=et("m"),Sr=et("bu"),Ar=et("u"),Tr=et("bum"),Tt=et("um"),Er=et("sp"),Mr=et("rtg"),Cr=et("rtc");function Rr(e,t=ge){yn("ec",e,t)}const Ir=Symbol.for("v-ndc");function bs(e,t,n,o){let s;const i=n,r=j(e);if(r||le(e)){const l=r&&ht(e);let c=!1,d=!1;l&&(c=!Ae(e),d=Qe(e),e=sn(e)),s=new Array(e.length);for(let f=0,p=e.length;f<p;f++)s[f]=t(c?d?zt(Ie(e[f])):Ie(e[f]):e[f],f,void 0,i)}else if(typeof e=="number"){s=new Array(e);for(let l=0;l<e;l++)s[l]=t(l+1,l,void 0,i)}else if(re(e))if(e[Symbol.iterator])s=Array.from(e,(l,c)=>t(l,c,void 0,i));else{const l=Object.keys(e);s=new Array(l.length);for(let c=0,d=l.length;c<d;c++){const f=l[c];s[c]=t(e[f],f,c,i)}}else s=[];return s}const io=e=>e?Ys(e)?bo(e):io(e.parent):null,Wt=ce(Object.create(null),{$:e=>e,$el:e=>e.vnode.el,$data:e=>e.data,$props:e=>e.props,$attrs:e=>e.attrs,$slots:e=>e.slots,$refs:e=>e.refs,$parent:e=>io(e.parent),$root:e=>io(e.root),$host:e=>e.ce,$emit:e=>e.emit,$options:e=>ws(e),$forceUpdate:e=>e.f||(e.f=()=>{no(e.update)}),$nextTick:e=>e.n||(e.n=cr.bind(e.proxy)),$watch:e=>mr.bind(e)}),ro=(e,t)=>e!==te&&!e.__isScriptSetup&&J(e,t),Or={get({_:e},t){if(t==="__v_skip")return!0;const{ctx:n,setupState:o,data:s,props:i,accessCache:r,type:l,appContext:c}=e;if(t[0]!=="$"){const _=r[t];if(_!==void 0)switch(_){case 1:return o[t];case 2:return s[t];case 4:return n[t];case 3:return i[t]}else{if(ro(o,t))return r[t]=1,o[t];if(s!==te&&J(s,t))return r[t]=2,s[t];if(J(i,t))return r[t]=3,i[t];if(n!==te&&J(n,t))return r[t]=4,n[t];lo&&(r[t]=0)}}const d=Wt[t];let f,p;if(d)return t==="$attrs"&&de(e.attrs,"get",""),d(e);if((f=l.__cssModules)&&(f=f[t]))return f;if(n!==te&&J(n,t))return r[t]=4,n[t];if(p=c.config.globalProperties,J(p,t))return p[t]},set({_:e},t,n){const{data:o,setupState:s,ctx:i}=e;return ro(s,t)?(s[t]=n,!0):o!==te&&J(o,t)?(o[t]=n,!0):J(e.props,t)||t[0]==="$"&&t.slice(1)in e?!1:(i[t]=n,!0)},has({_:{data:e,setupState:t,accessCache:n,ctx:o,appContext:s,props:i,type:r}},l){let c;return!!(n[l]||e!==te&&l[0]!=="$"&&J(e,l)||ro(t,l)||J(i,l)||J(o,l)||J(Wt,l)||J(s.config.globalProperties,l)||(c=r.__cssModules)&&c[l])},defineProperty(e,t,n){return n.get!=null?e._.accessCache[t]=0:J(n,"value")&&this.set(e,t,n.value,null),Reflect.defineProperty(e,t,n)}};function xs(e){return j(e)?e.reduce((t,n)=>(t[n]=null,t),{}):e}let lo=!0;function Pr(e){const t=ws(e),n=e.proxy,o=e.ctx;lo=!1,t.beforeCreate&&_s(t.beforeCreate,e,"bc");const{data:s,computed:i,methods:r,watch:l,provide:c,inject:d,created:f,beforeMount:p,mounted:_,beforeUpdate:S,updated:w,activated:y,deactivated:P,beforeDestroy:C,beforeUnmount:H,destroyed:I,unmounted:z,render:U,renderTracked:B,renderTriggered:L,errorCaptured:Y,serverPrefetch:q,expose:Q,inheritAttrs:ue,components:Oe,directives:Me,filters:nt}=t;if(d&&Fr(d,o,null),r)for(const X in r){const Z=r[X];N(Z)&&(o[X]=Z.bind(n))}if(s){const X=s.call(n,n);re(X)&&(e.data=Zn(X))}if(lo=!0,i)for(const X in i){const Z=i[X],ze=N(Z)?Z.bind(n,n):N(Z.get)?Z.get.bind(n,n):Pe,Ve=!N(Z)&&N(Z.set)?Z.set.bind(n):Pe,M=W({get:ze,set:Ve});Object.defineProperty(o,X,{enumerable:!0,configurable:!0,get:()=>M.value,set:$=>M.value=$})}if(l)for(const X in l)ys(l[X],o,n,X);if(c){const X=N(c)?c.call(n):c;Reflect.ownKeys(X).forEach(Z=>{pr(Z,X[Z])})}f&&_s(f,e,"c");function ae(X,Z){j(Z)?Z.forEach(ze=>X(ze.bind(n))):Z&&X(Z.bind(n))}if(ae(kr,p),ae(Vt,_),ae(Sr,S),ae(Ar,w),ae(yr,y),ae(wr,P),ae(Rr,Y),ae(Cr,B),ae(Mr,L),ae(Tr,H),ae(Tt,z),ae(Er,q),j(Q))if(Q.length){const X=e.exposed||(e.exposed={});Q.forEach(Z=>{Object.defineProperty(X,Z,{get:()=>n[Z],set:ze=>n[Z]=ze,enumerable:!0})})}else e.exposed||(e.exposed={});U&&e.render===Pe&&(e.render=U),ue!=null&&(e.inheritAttrs=ue),Oe&&(e.components=Oe),Me&&(e.directives=Me),q&&vs(e)}function Fr(e,t,n=Pe){j(e)&&(e=ao(e));for(const o in e){const s=e[o];let i;re(s)?"default"in s?i=hn(s.from||o,s.default,!0):i=hn(s.from||o):i=hn(s),fe(i)?Object.defineProperty(t,o,{enumerable:!0,configurable:!0,get:()=>i.value,set:r=>i.value=r}):t[o]=i}}function _s(e,t,n){Ne(j(e)?e.map(o=>o.bind(t.proxy)):e.bind(t.proxy),t,n)}function ys(e,t,n,o){let s=o.includes(".")?ls(n,o):()=>n[o];if(le(e)){const i=t[e];N(i)&&mn(s,i)}else if(N(e))mn(s,e.bind(n));else if(re(e))if(j(e))e.forEach(i=>ys(i,t,n,o));else{const i=N(e.handler)?e.handler.bind(n):t[e.handler];N(i)&&mn(s,i,e)}}function ws(e){const t=e.type,{mixins:n,extends:o}=t,{mixins:s,optionsCache:i,config:{optionMergeStrategies:r}}=e.appContext,l=i.get(t);let c;return l?c=l:!s.length&&!n&&!o?c=t:(c={},s.length&&s.forEach(d=>wn(c,d,r,!0)),wn(c,t,r)),re(t)&&i.set(t,c),c}function wn(e,t,n,o=!1){const{mixins:s,extends:i}=t;i&&wn(e,i,n,!0),s&&s.forEach(r=>wn(e,r,n,!0));for(const r in t)if(!(o&&r==="expose")){const l=Lr[r]||n&&n[r];e[r]=l?l(e[r],t[r]):t[r]}return e}const Lr={data:zs,props:ks,emits:ks,methods:Kt,computed:Kt,beforeCreate:he,created:he,beforeMount:he,mounted:he,beforeUpdate:he,updated:he,beforeDestroy:he,beforeUnmount:he,destroyed:he,unmounted:he,activated:he,deactivated:he,errorCaptured:he,serverPrefetch:he,components:Kt,directives:Kt,watch:Nr,provide:zs,inject:Dr};function zs(e,t){return t?e?function(){return ce(N(e)?e.call(this,this):e,N(t)?t.call(this,this):t)}:t:e}function Dr(e,t){return Kt(ao(e),ao(t))}function ao(e){if(j(e)){const t={};for(let n=0;n<e.length;n++)t[e[n]]=e[n];return t}return e}function he(e,t){return e?[...new Set([].concat(e,t))]:t}function Kt(e,t){return e?ce(Object.create(null),e,t):t}function ks(e,t){return e?j(e)&&j(t)?[...new Set([...e,...t])]:ce(Object.create(null),xs(e),xs(t??{})):t}function Nr(e,t){if(!e)return t;if(!t)return e;const n=ce(Object.create(null),e);for(const o in t)n[o]=he(e[o],t[o]);return n}function Ss(){return{app:null,config:{isNativeTag:zo,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let $r=0;function jr(e,t){return function(o,s=null){N(o)||(o=ce({},o)),s!=null&&!re(s)&&(s=null);const i=Ss(),r=new WeakSet,l=[];let c=!1;const d=i.app={_uid:$r++,_component:o,_props:s,_container:null,_context:i,_instance:null,version:yl,get config(){return i.config},set config(f){},use(f,...p){return r.has(f)||(f&&N(f.install)?(r.add(f),f.install(d,...p)):N(f)&&(r.add(f),f(d,...p))),d},mixin(f){return i.mixins.includes(f)||i.mixins.push(f),d},component(f,p){return p?(i.components[f]=p,d):i.components[f]},directive(f,p){return p?(i.directives[f]=p,d):i.directives[f]},mount(f,p,_){if(!c){const S=d._ceVNode||Ee(o,s);return S.appContext=i,_===!0?_="svg":_===!1&&(_=void 0),e(S,f,_),c=!0,d._container=f,f.__vue_app__=d,bo(S.component)}},onUnmount(f){l.push(f)},unmount(){c&&(Ne(l,d._instance,16),e(null,d._container),delete d._container.__vue_app__)},provide(f,p){return i.provides[f]=p,d},runWithContext(f){const p=Et;Et=d;try{return f()}finally{Et=p}}};return d}}let Et=null;const Br=(e,t)=>t==="modelValue"||t==="model-value"?e.modelModifiers:e[`${t}Modifiers`]||e[`${st(t)}Modifiers`]||e[`${pt(t)}Modifiers`];function Hr(e,t,...n){if(e.isUnmounted)return;const o=e.vnode.props||te;let s=n;const i=t.startsWith("update:"),r=i&&Br(o,t.slice(7));r&&(r.trim&&(s=n.map(f=>le(f)?f.trim():f)),r.number&&(s=n.map(wi)));let l,c=o[l=Nn(t)]||o[l=Nn(st(t))];!c&&i&&(c=o[l=Nn(pt(t))]),c&&Ne(c,e,6,s);const d=o[l+"Once"];if(d){if(!e.emitted)e.emitted={};else if(e.emitted[l])return;e.emitted[l]=!0,Ne(d,e,6,s)}}const Gr=new WeakMap;function As(e,t,n=!1){const o=n?Gr:t.emitsCache,s=o.get(e);if(s!==void 0)return s;const i=e.emits;let r={},l=!1;if(!N(e)){const c=d=>{const f=As(d,t,!0);f&&(l=!0,ce(r,f))};!n&&t.mixins.length&&t.mixins.forEach(c),e.extends&&c(e.extends),e.mixins&&e.mixins.forEach(c)}return!i&&!l?(re(e)&&o.set(e,null),null):(j(i)?i.forEach(c=>r[c]=null):ce(r,i),re(e)&&o.set(e,r),r)}function zn(e,t){return!e||!en(t)?!1:(t=t.slice(2).replace(/Once$/,""),J(e,t[0].toLowerCase()+t.slice(1))||J(e,pt(t))||J(e,t))}function yf(){}function Ts(e){const{type:t,vnode:n,proxy:o,withProxy:s,propsOptions:[i],slots:r,attrs:l,emit:c,render:d,renderCache:f,props:p,data:_,setupState:S,ctx:w,inheritAttrs:y}=e,P=vn(e);let C,H;try{if(n.shapeFlag&4){const z=s||o,U=z;C=Be(d.call(U,z,f,p,S,_,w)),H=l}else{const z=t;C=Be(z.length>1?z(p,{attrs:l,slots:r,emit:c}):z(p,null)),H=t.props?l:Ur(l)}}catch(z){Yt.length=0,dn(z,e,1),C=Ee(ct)}let I=C;if(H&&y!==!1){const z=Object.keys(H),{shapeFlag:U}=I;z.length&&U&7&&(i&&z.some(Fn)&&(H=Vr(H,i)),I=Mt(I,H,!1,!0))}return n.dirs&&(I=Mt(I,null,!1,!0),I.dirs=I.dirs?I.dirs.concat(n.dirs):n.dirs),n.transition&&so(I,n.transition),C=I,vn(P),C}const Ur=e=>{let t;for(const n in e)(n==="class"||n==="style"||en(n))&&((t||(t={}))[n]=e[n]);return t},Vr=(e,t)=>{const n={};for(const o in e)(!Fn(o)||!(o.slice(9)in t))&&(n[o]=e[o]);return n};function Wr(e,t,n){const{props:o,children:s,component:i}=e,{props:r,children:l,patchFlag:c}=t,d=i.emitsOptions;if(t.dirs||t.transition)return!0;if(n&&c>=0){if(c&1024)return!0;if(c&16)return o?Es(o,r,d):!!r;if(c&8){const f=t.dynamicProps;for(let p=0;p<f.length;p++){const _=f[p];if(r[_]!==o[_]&&!zn(d,_))return!0}}}else return(s||l)&&(!l||!l.$stable)?!0:o===r?!1:o?r?Es(o,r,d):!0:!!r;return!1}function Es(e,t,n){const o=Object.keys(t);if(o.length!==Object.keys(e).length)return!0;for(let s=0;s<o.length;s++){const i=o[s];if(t[i]!==e[i]&&!zn(n,i))return!0}return!1}function Kr({vnode:e,parent:t},n){for(;t;){const o=t.subTree;if(o.suspense&&o.suspense.activeBranch===e&&(o.el=e.el),o===e)(e=t.vnode).el=n,t=t.parent;else break}}const Ms={},Cs=()=>Object.create(Ms),Rs=e=>Object.getPrototypeOf(e)===Ms;function Yr(e,t,n,o=!1){const s={},i=Cs();e.propsDefaults=Object.create(null),Is(e,t,s,i);for(const r in e.propsOptions[0])r in s||(s[r]=void 0);n?e.props=o?s:Yi(s):e.type.props?e.props=s:e.props=i,e.attrs=i}function qr(e,t,n,o){const{props:s,attrs:i,vnode:{patchFlag:r}}=e,l=K(s),[c]=e.propsOptions;let d=!1;if((o||r>0)&&!(r&16)){if(r&8){const f=e.vnode.dynamicProps;for(let p=0;p<f.length;p++){let _=f[p];if(zn(e.emitsOptions,_))continue;const S=t[_];if(c)if(J(i,_))S!==i[_]&&(i[_]=S,d=!0);else{const w=st(_);s[w]=co(c,l,w,S,e,!1)}else S!==i[_]&&(i[_]=S,d=!0)}}}else{Is(e,t,s,i)&&(d=!0);let f;for(const p in l)(!t||!J(t,p)&&((f=pt(p))===p||!J(t,f)))&&(c?n&&(n[p]!==void 0||n[f]!==void 0)&&(s[p]=co(c,l,p,void 0,e,!0)):delete s[p]);if(i!==l)for(const p in i)(!t||!J(t,p))&&(delete i[p],d=!0)}d&&Je(e.attrs,"set","")}function Is(e,t,n,o){const[s,i]=e.propsOptions;let r=!1,l;if(t)for(let c in t){if(Ot(c))continue;const d=t[c];let f;s&&J(s,f=st(c))?!i||!i.includes(f)?n[f]=d:(l||(l={}))[f]=d:zn(e.emitsOptions,c)||(!(c in o)||d!==o[c])&&(o[c]=d,r=!0)}if(i){const c=K(n),d=l||te;for(let f=0;f<i.length;f++){const p=i[f];n[p]=co(s,c,p,d[p],e,!J(d,p))}}return r}function co(e,t,n,o,s,i){const r=e[n];if(r!=null){const l=J(r,"default");if(l&&o===void 0){const c=r.default;if(r.type!==Function&&!r.skipFactory&&N(c)){const{propsDefaults:d}=s;if(n in d)o=d[n];else{const f=Jt(s);o=d[n]=c.call(null,t),f()}}else o=c;s.ce&&s.ce._setProp(n,o)}r[0]&&(i&&!l?o=!1:r[1]&&(o===""||o===pt(n))&&(o=!0))}return o}const Xr=new WeakMap;function Os(e,t,n=!1){const o=n?Xr:t.propsCache,s=o.get(e);if(s)return s;const i=e.props,r={},l=[];let c=!1;if(!N(e)){const f=p=>{c=!0;const[_,S]=Os(p,t,!0);ce(r,_),S&&l.push(...S)};!n&&t.mixins.length&&t.mixins.forEach(f),e.extends&&f(e.extends),e.mixins&&e.mixins.forEach(f)}if(!i&&!c)return re(e)&&o.set(e,_t),_t;if(j(i))for(let f=0;f<i.length;f++){const p=st(i[f]);Ps(p)&&(r[p]=te)}else if(i)for(const f in i){const p=st(f);if(Ps(p)){const _=i[f],S=r[p]=j(_)||N(_)?{type:_}:ce({},_),w=S.type;let y=!1,P=!0;if(j(w))for(let C=0;C<w.length;++C){const H=w[C],I=N(H)&&H.name;if(I==="Boolean"){y=!0;break}else I==="String"&&(P=!1)}else y=N(w)&&w.name==="Boolean";S[0]=y,S[1]=P,(y||J(S,"default"))&&l.push(p)}}const d=[r,l];return re(e)&&o.set(e,d),d}function Ps(e){return e[0]!=="$"&&!Ot(e)}const fo=e=>e==="_"||e==="_ctx"||e==="$stable",uo=e=>j(e)?e.map(Be):[Be(e)],Jr=(e,t,n)=>{if(t._n)return t;const o=dr((...s)=>uo(t(...s)),n);return o._c=!1,o},Fs=(e,t,n)=>{const o=e._ctx;for(const s in e){if(fo(s))continue;const i=e[s];if(N(i))t[s]=Jr(s,i,o);else if(i!=null){const r=uo(i);t[s]=()=>r}}},Ls=(e,t)=>{const n=uo(t);e.slots.default=()=>n},Ds=(e,t,n)=>{for(const o in t)(n||!fo(o))&&(e[o]=t[o])},Zr=(e,t,n)=>{const o=e.slots=Cs();if(e.vnode.shapeFlag&32){const s=t._;s?(Ds(o,t,n),n&&Mo(o,"_",s,!0)):Fs(t,o)}else t&&Ls(e,t)},Qr=(e,t,n)=>{const{vnode:o,slots:s}=e;let i=!0,r=te;if(o.shapeFlag&32){const l=t._;l?n&&l===1?i=!1:Ds(s,t,n):(i=!t.$stable,Fs(t,s)),r=t}else t&&(Ls(e,t),r={default:1});if(i)for(const l in s)!fo(l)&&r[l]==null&&delete s[l]},me=sl;function el(e){return tl(e)}function tl(e,t){const n=on();n.__VUE__=!0;const{insert:o,remove:s,patchProp:i,createElement:r,createText:l,createComment:c,setText:d,setElementText:f,parentNode:p,nextSibling:_,setScopeId:S=Pe,insertStaticContent:w}=e,y=(a,u,v,x=null,m=null,g=null,T=void 0,A=null,k=!!u.dynamicChildren)=>{if(a===u)return;a&&!Xt(a,u)&&(x=xt(a),$(a,m,g,!0),a=null),u.patchFlag===-2&&(k=!1,u.dynamicChildren=null);const{type:b,ref:F,shapeFlag:E}=u;switch(b){case kn:P(a,u,v,x);break;case ct:C(a,u,v,x);break;case Sn:a==null&&H(u,v,x,T);break;case Te:Oe(a,u,v,x,m,g,T,A,k);break;default:E&1?U(a,u,v,x,m,g,T,A,k):E&6?Me(a,u,v,x,m,g,T,A,k):(E&64||E&128)&&b.process(a,u,v,x,m,g,T,A,k,Ke)}F!=null&&m?Gt(F,a&&a.ref,g,u||a,!u):F==null&&a&&a.ref!=null&&Gt(a.ref,null,g,a,!0)},P=(a,u,v,x)=>{if(a==null)o(u.el=l(u.children),v,x);else{const m=u.el=a.el;u.children!==a.children&&d(m,u.children)}},C=(a,u,v,x)=>{a==null?o(u.el=c(u.children||""),v,x):u.el=a.el},H=(a,u,v,x)=>{[a.el,a.anchor]=w(a.children,u,v,x,a.el,a.anchor)},I=({el:a,anchor:u},v,x)=>{let m;for(;a&&a!==u;)m=_(a),o(a,v,x),a=m;o(u,v,x)},z=({el:a,anchor:u})=>{let v;for(;a&&a!==u;)v=_(a),s(a),a=v;s(u)},U=(a,u,v,x,m,g,T,A,k)=>{if(u.type==="svg"?T="svg":u.type==="math"&&(T="mathml"),a==null)B(u,v,x,m,g,T,A,k);else{const b=a.el&&a.el._isVueCE?a.el:null;try{b&&b._beginPatch(),q(a,u,m,g,T,A,k)}finally{b&&b._endPatch()}}},B=(a,u,v,x,m,g,T,A)=>{let k,b;const{props:F,shapeFlag:E,transition:O,dirs:D}=a;if(k=a.el=r(a.type,g,F&&F.is,F),E&8?f(k,a.children):E&16&&Y(a.children,k,null,x,m,po(a,g),T,A),D&&gt(a,null,x,"created"),L(k,a,a.scopeId,T,x),F){for(const oe in F)oe!=="value"&&!Ot(oe)&&i(k,oe,null,F[oe],g,x);"value"in F&&i(k,"value",null,F.value,g),(b=F.onVnodeBeforeMount)&&He(b,x,a)}D&&gt(a,null,x,"beforeMount");const V=nl(m,O);V&&O.beforeEnter(k),o(k,u,v),((b=F&&F.onVnodeMounted)||V||D)&&me(()=>{b&&He(b,x,a),V&&O.enter(k),D&&gt(a,null,x,"mounted")},m)},L=(a,u,v,x,m)=>{if(v&&S(a,v),x)for(let g=0;g<x.length;g++)S(a,x[g]);if(m){let g=m.subTree;if(u===g||Bs(g.type)&&(g.ssContent===u||g.ssFallback===u)){const T=m.vnode;L(a,T,T.scopeId,T.slotScopeIds,m.parent)}}},Y=(a,u,v,x,m,g,T,A,k=0)=>{for(let b=k;b<a.length;b++){const F=a[b]=A?ut(a[b]):Be(a[b]);y(null,F,u,v,x,m,g,T,A)}},q=(a,u,v,x,m,g,T)=>{const A=u.el=a.el;let{patchFlag:k,dynamicChildren:b,dirs:F}=u;k|=a.patchFlag&16;const E=a.props||te,O=u.props||te;let D;if(v&&bt(v,!1),(D=O.onVnodeBeforeUpdate)&&He(D,v,u,a),F&&gt(u,a,v,"beforeUpdate"),v&&bt(v,!0),(E.innerHTML&&O.innerHTML==null||E.textContent&&O.textContent==null)&&f(A,""),b?Q(a.dynamicChildren,b,A,v,x,po(u,m),g):T||Z(a,u,A,null,v,x,po(u,m),g,!1),k>0){if(k&16)ue(A,E,O,v,m);else if(k&2&&E.class!==O.class&&i(A,"class",null,O.class,m),k&4&&i(A,"style",E.style,O.style,m),k&8){const V=u.dynamicProps;for(let oe=0;oe<V.length;oe++){const ee=V[oe],xe=E[ee],_e=O[ee];(_e!==xe||ee==="value")&&i(A,ee,xe,_e,m,v)}}k&1&&a.children!==u.children&&f(A,u.children)}else!T&&b==null&&ue(A,E,O,v,m);((D=O.onVnodeUpdated)||F)&&me(()=>{D&&He(D,v,u,a),F&&gt(u,a,v,"updated")},x)},Q=(a,u,v,x,m,g,T)=>{for(let A=0;A<u.length;A++){const k=a[A],b=u[A],F=k.el&&(k.type===Te||!Xt(k,b)||k.shapeFlag&198)?p(k.el):v;y(k,b,F,null,x,m,g,T,!0)}},ue=(a,u,v,x,m)=>{if(u!==v){if(u!==te)for(const g in u)!Ot(g)&&!(g in v)&&i(a,g,u[g],null,m,x);for(const g in v){if(Ot(g))continue;const T=v[g],A=u[g];T!==A&&g!=="value"&&i(a,g,A,T,m,x)}"value"in v&&i(a,"value",u.value,v.value,m)}},Oe=(a,u,v,x,m,g,T,A,k)=>{const b=u.el=a?a.el:l(""),F=u.anchor=a?a.anchor:l("");let{patchFlag:E,dynamicChildren:O,slotScopeIds:D}=u;D&&(A=A?A.concat(D):D),a==null?(o(b,v,x),o(F,v,x),Y(u.children||[],v,F,m,g,T,A,k)):E>0&&E&64&&O&&a.dynamicChildren&&a.dynamicChildren.length===O.length?(Q(a.dynamicChildren,O,v,m,g,T,A),(u.key!=null||m&&u===m.subTree)&&vo(a,u,!0)):Z(a,u,v,F,m,g,T,A,k)},Me=(a,u,v,x,m,g,T,A,k)=>{u.slotScopeIds=A,a==null?u.shapeFlag&512?m.ctx.activate(u,v,x,T,k):nt(u,v,x,m,g,T,k):Ue(a,u,k)},nt=(a,u,v,x,m,g,T)=>{const A=a.component=ul(a,x,m);if(ms(a)&&(A.ctx.renderer=Ke),pl(A,!1,T),A.asyncDep){if(m&&m.registerDep(A,ae,T),!a.el){const k=A.subTree=Ee(ct);C(null,k,u,v),a.placeholder=k.el}}else ae(A,a,u,v,m,g,T)},Ue=(a,u,v)=>{const x=u.component=a.component;if(Wr(a,u,v))if(x.asyncDep&&!x.asyncResolved){X(x,u,v);return}else x.next=u,x.update();else u.el=a.el,x.vnode=u},ae=(a,u,v,x,m,g,T)=>{const A=()=>{if(a.isMounted){let{next:E,bu:O,u:D,parent:V,vnode:oe}=a;{const qe=Ns(a);if(qe){E&&(E.el=oe.el,X(a,E,T)),qe.asyncDep.then(()=>{a.isUnmounted||A()});return}}let ee=E,xe;bt(a,!1),E?(E.el=oe.el,X(a,E,T)):E=oe,O&&$n(O),(xe=E.props&&E.props.onVnodeBeforeUpdate)&&He(xe,V,E,oe),bt(a,!0);const _e=Ts(a),Ye=a.subTree;a.subTree=_e,y(Ye,_e,p(Ye.el),xt(Ye),a,m,g),E.el=_e.el,ee===null&&Kr(a,_e.el),D&&me(D,m),(xe=E.props&&E.props.onVnodeUpdated)&&me(()=>He(xe,V,E,oe),m)}else{let E;const{el:O,props:D}=u,{bm:V,m:oe,parent:ee,root:xe,type:_e}=a,Ye=Ut(u);bt(a,!1),V&&$n(V),!Ye&&(E=D&&D.onVnodeBeforeMount)&&He(E,ee,u),bt(a,!0);{xe.ce&&xe.ce._def.shadowRoot!==!1&&xe.ce._injectChildStyle(_e);const qe=a.subTree=Ts(a);y(null,qe,v,x,a,m,g),u.el=qe.el}if(oe&&me(oe,m),!Ye&&(E=D&&D.onVnodeMounted)){const qe=u;me(()=>He(E,ee,qe),m)}(u.shapeFlag&256||ee&&Ut(ee.vnode)&&ee.vnode.shapeFlag&256)&&a.a&&me(a.a,m),a.isMounted=!0,u=v=x=null}};a.scope.on();const k=a.effect=new Po(A);a.scope.off();const b=a.update=k.run.bind(k),F=a.job=k.runIfDirty.bind(k);F.i=a,F.id=a.uid,k.scheduler=()=>no(F),bt(a,!0),b()},X=(a,u,v)=>{u.component=a;const x=a.vnode.props;a.vnode=u,a.next=null,qr(a,u.props,x,v),Qr(a,u.children,v),Le(),ns(a),De()},Z=(a,u,v,x,m,g,T,A,k=!1)=>{const b=a&&a.children,F=a?a.shapeFlag:0,E=u.children,{patchFlag:O,shapeFlag:D}=u;if(O>0){if(O&128){Ve(b,E,v,x,m,g,T,A,k);return}else if(O&256){ze(b,E,v,x,m,g,T,A,k);return}}D&8?(F&16&&ke(b,m,g),E!==b&&f(v,E)):F&16?D&16?Ve(b,E,v,x,m,g,T,A,k):ke(b,m,g,!0):(F&8&&f(v,""),D&16&&Y(E,v,x,m,g,T,A,k))},ze=(a,u,v,x,m,g,T,A,k)=>{a=a||_t,u=u||_t;const b=a.length,F=u.length,E=Math.min(b,F);let O;for(O=0;O<E;O++){const D=u[O]=k?ut(u[O]):Be(u[O]);y(a[O],D,v,null,m,g,T,A,k)}b>F?ke(a,m,g,!0,!1,E):Y(u,v,x,m,g,T,A,k,E)},Ve=(a,u,v,x,m,g,T,A,k)=>{let b=0;const F=u.length;let E=a.length-1,O=F-1;for(;b<=E&&b<=O;){const D=a[b],V=u[b]=k?ut(u[b]):Be(u[b]);if(Xt(D,V))y(D,V,v,null,m,g,T,A,k);else break;b++}for(;b<=E&&b<=O;){const D=a[E],V=u[O]=k?ut(u[O]):Be(u[O]);if(Xt(D,V))y(D,V,v,null,m,g,T,A,k);else break;E--,O--}if(b>E){if(b<=O){const D=O+1,V=D<F?u[D].el:x;for(;b<=O;)y(null,u[b]=k?ut(u[b]):Be(u[b]),v,V,m,g,T,A,k),b++}}else if(b>O)for(;b<=E;)$(a[b],m,g,!0),b++;else{const D=b,V=b,oe=new Map;for(b=V;b<=O;b++){const Se=u[b]=k?ut(u[b]):Be(u[b]);Se.key!=null&&oe.set(Se.key,b)}let ee,xe=0;const _e=O-V+1;let Ye=!1,qe=0;const Qt=new Array(_e);for(b=0;b<_e;b++)Qt[b]=0;for(b=D;b<=E;b++){const Se=a[b];if(xe>=_e){$(Se,m,g,!0);continue}let Xe;if(Se.key!=null)Xe=oe.get(Se.key);else for(ee=V;ee<=O;ee++)if(Qt[ee-V]===0&&Xt(Se,u[ee])){Xe=ee;break}Xe===void 0?$(Se,m,g,!0):(Qt[Xe-V]=b+1,Xe>=qe?qe=Xe:Ye=!0,y(Se,u[Xe],v,null,m,g,T,A,k),xe++)}const hi=Ye?ol(Qt):_t;for(ee=hi.length-1,b=_e-1;b>=0;b--){const Se=V+b,Xe=u[Se],mi=u[Se+1],gi=Se+1<F?mi.el||js(mi):x;Qt[b]===0?y(null,Xe,v,gi,m,g,T,A,k):Ye&&(ee<0||b!==hi[ee]?M(Xe,v,gi,2):ee--)}}},M=(a,u,v,x,m=null)=>{const{el:g,type:T,transition:A,children:k,shapeFlag:b}=a;if(b&6){M(a.component.subTree,u,v,x);return}if(b&128){a.suspense.move(u,v,x);return}if(b&64){T.move(a,u,v,Ke);return}if(T===Te){o(g,u,v);for(let E=0;E<k.length;E++)M(k[E],u,v,x);o(a.anchor,u,v);return}if(T===Sn){I(a,u,v);return}if(x!==2&&b&1&&A)if(x===0)A.beforeEnter(g),o(g,u,v),me(()=>A.enter(g),m);else{const{leave:E,delayLeave:O,afterLeave:D}=A,V=()=>{a.ctx.isUnmounted?s(g):o(g,u,v)},oe=()=>{g._isLeaving&&g[_r](!0),E(g,()=>{V(),D&&D()})};O?O(g,V,oe):oe()}else o(g,u,v)},$=(a,u,v,x=!1,m=!1)=>{const{type:g,props:T,ref:A,children:k,dynamicChildren:b,shapeFlag:F,patchFlag:E,dirs:O,cacheIndex:D}=a;if(E===-2&&(m=!1),A!=null&&(Le(),Gt(A,null,v,a,!0),De()),D!=null&&(u.renderCache[D]=void 0),F&256){u.ctx.deactivate(a);return}const V=F&1&&O,oe=!Ut(a);let ee;if(oe&&(ee=T&&T.onVnodeBeforeUnmount)&&He(ee,u,a),F&6)ie(a.component,v,x);else{if(F&128){a.suspense.unmount(v,x);return}V&&gt(a,null,u,"beforeUnmount"),F&64?a.type.remove(a,u,v,Ke,x):b&&!b.hasOnce&&(g!==Te||E>0&&E&64)?ke(b,u,v,!1,!0):(g===Te&&E&384||!m&&F&16)&&ke(k,u,v),x&&G(a)}(oe&&(ee=T&&T.onVnodeUnmounted)||V)&&me(()=>{ee&&He(ee,u,a),V&&gt(a,null,u,"unmounted")},v)},G=a=>{const{type:u,el:v,anchor:x,transition:m}=a;if(u===Te){R(v,x);return}if(u===Sn){z(a);return}const g=()=>{s(v),m&&!m.persisted&&m.afterLeave&&m.afterLeave()};if(a.shapeFlag&1&&m&&!m.persisted){const{leave:T,delayLeave:A}=m,k=()=>T(v,g);A?A(a.el,g,k):k()}else g()},R=(a,u)=>{let v;for(;a!==u;)v=_(a),s(a),a=v;s(u)},ie=(a,u,v)=>{const{bum:x,scope:m,job:g,subTree:T,um:A,m:k,a:b}=a;$s(k),$s(b),x&&$n(x),m.stop(),g&&(g.flags|=8,$(T,a,u,v)),A&&me(A,u),me(()=>{a.isUnmounted=!0},u)},ke=(a,u,v,x=!1,m=!1,g=0)=>{for(let T=g;T<a.length;T++)$(a[T],u,v,x,m)},xt=a=>{if(a.shapeFlag&6)return xt(a.component.subTree);if(a.shapeFlag&128)return a.suspense.next();const u=_(a.anchor||a.el),v=u&&u[as];return v?_(v):u};let We=!1;const It=(a,u,v)=>{let x;a==null?u._vnode&&($(u._vnode,null,null,!0),x=u._vnode.component):y(u._vnode||null,a,u,null,null,null,v),u._vnode=a,We||(We=!0,ns(x),os(),We=!1)},Ke={p:y,um:$,m:M,r:G,mt:nt,mc:Y,pc:Z,pbc:Q,n:xt,o:e};return{render:It,hydrate:void 0,createApp:jr(It)}}function po({type:e,props:t},n){return n==="svg"&&e==="foreignObject"||n==="mathml"&&e==="annotation-xml"&&t&&t.encoding&&t.encoding.includes("html")?void 0:n}function bt({effect:e,job:t},n){n?(e.flags|=32,t.flags|=4):(e.flags&=-33,t.flags&=-5)}function nl(e,t){return(!e||e&&!e.pendingBranch)&&t&&!t.persisted}function vo(e,t,n=!1){const o=e.children,s=t.children;if(j(o)&&j(s))for(let i=0;i<o.length;i++){const r=o[i];let l=s[i];l.shapeFlag&1&&!l.dynamicChildren&&((l.patchFlag<=0||l.patchFlag===32)&&(l=s[i]=ut(s[i]),l.el=r.el),!n&&l.patchFlag!==-2&&vo(r,l)),l.type===kn&&(l.patchFlag!==-1?l.el=r.el:l.__elIndex=i+(e.type===Te?1:0)),l.type===ct&&!l.el&&(l.el=r.el)}}function ol(e){const t=e.slice(),n=[0];let o,s,i,r,l;const c=e.length;for(o=0;o<c;o++){const d=e[o];if(d!==0){if(s=n[n.length-1],e[s]<d){t[o]=s,n.push(o);continue}for(i=0,r=n.length-1;i<r;)l=i+r>>1,e[n[l]]<d?i=l+1:r=l;d<e[n[i]]&&(i>0&&(t[o]=n[i-1]),n[i]=o)}}for(i=n.length,r=n[i-1];i-- >0;)n[i]=r,r=t[r];return n}function Ns(e){const t=e.subTree.component;if(t)return t.asyncDep&&!t.asyncResolved?t:Ns(t)}function $s(e){if(e)for(let t=0;t<e.length;t++)e[t].flags|=8}function js(e){if(e.placeholder)return e.placeholder;const t=e.component;return t?js(t.subTree):null}const Bs=e=>e.__isSuspense;function sl(e,t){t&&t.pendingBranch?j(e)?t.effects.push(...e):t.effects.push(e):ur(e)}const Te=Symbol.for("v-fgt"),kn=Symbol.for("v-txt"),ct=Symbol.for("v-cmt"),Sn=Symbol.for("v-stc"),Yt=[];let ye=null;function pe(e=!1){Yt.push(ye=e?null:[])}function il(){Yt.pop(),ye=Yt[Yt.length-1]||null}let qt=1;function Hs(e,t=!1){qt+=e,e<0&&ye&&t&&(ye.hasOnce=!0)}function Gs(e){return e.dynamicChildren=qt>0?ye||_t:null,il(),qt>0&&ye&&ye.push(e),e}function we(e,t,n,o,s,i){return Gs(h(e,t,n,o,s,i,!0))}function ho(e,t,n,o,s){return Gs(Ee(e,t,n,o,s,!0))}function Us(e){return e?e.__v_isVNode===!0:!1}function Xt(e,t){return e.type===t.type&&e.key===t.key}const Vs=({key:e})=>e??null,An=({ref:e,ref_key:t,ref_for:n})=>(typeof e=="number"&&(e=""+e),e!=null?le(e)||fe(e)||N(e)?{i:je,r:e,k:t,f:!!n}:e:null);function h(e,t=null,n=null,o=0,s=null,i=e===Te?0:1,r=!1,l=!1){const c={__v_isVNode:!0,__v_skip:!0,type:e,props:t,key:t&&Vs(t),ref:t&&An(t),scopeId:is,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetStart:null,targetAnchor:null,staticCount:0,shapeFlag:i,patchFlag:o,dynamicProps:s,dynamicChildren:null,appContext:null,ctx:je};return l?(mo(c,n),i&128&&e.normalize(c)):n&&(c.shapeFlag|=le(n)?8:16),qt>0&&!r&&ye&&(c.patchFlag>0||i&6)&&c.patchFlag!==32&&ye.push(c),c}const Ee=rl;function rl(e,t=null,n=null,o=0,s=null,i=!1){if((!e||e===Ir)&&(e=ct),Us(e)){const l=Mt(e,t,!0);return n&&mo(l,n),qt>0&&!i&&ye&&(l.shapeFlag&6?ye[ye.indexOf(e)]=l:ye.push(l)),l.patchFlag=-2,l}if(_l(e)&&(e=e.__vccOpts),t){t=ll(t);let{class:l,style:c}=t;l&&!le(l)&&(t.class=Ce(l)),re(c)&&(eo(c)&&!j(c)&&(c=ce({},c)),t.style=Pt(c))}const r=le(e)?1:Bs(e)?128:gr(e)?64:re(e)?4:N(e)?2:0;return h(e,t,n,o,s,r,i,!0)}function ll(e){return e?eo(e)||Rs(e)?ce({},e):e:null}function Mt(e,t,n=!1,o=!1){const{props:s,ref:i,patchFlag:r,children:l,transition:c}=e,d=t?al(s||{},t):s,f={__v_isVNode:!0,__v_skip:!0,type:e.type,props:d,key:d&&Vs(d),ref:t&&t.ref?n&&i?j(i)?i.concat(An(t)):[i,An(t)]:An(t):i,scopeId:e.scopeId,slotScopeIds:e.slotScopeIds,children:l,target:e.target,targetStart:e.targetStart,targetAnchor:e.targetAnchor,staticCount:e.staticCount,shapeFlag:e.shapeFlag,patchFlag:t&&e.type!==Te?r===-1?16:r|16:r,dynamicProps:e.dynamicProps,dynamicChildren:e.dynamicChildren,appContext:e.appContext,dirs:e.dirs,transition:c,component:e.component,suspense:e.suspense,ssContent:e.ssContent&&Mt(e.ssContent),ssFallback:e.ssFallback&&Mt(e.ssFallback),placeholder:e.placeholder,el:e.el,anchor:e.anchor,ctx:e.ctx,ce:e.ce};return c&&o&&so(f,c.clone(f)),f}function Ws(e=" ",t=0){return Ee(kn,null,e,t)}function Tn(e,t){const n=Ee(Sn,null,e);return n.staticCount=t,n}function ft(e="",t=!1){return t?(pe(),ho(ct,null,e)):Ee(ct,null,e)}function Be(e){return e==null||typeof e=="boolean"?Ee(ct):j(e)?Ee(Te,null,e.slice()):Us(e)?ut(e):Ee(kn,null,String(e))}function ut(e){return e.el===null&&e.patchFlag!==-1||e.memo?e:Mt(e)}function mo(e,t){let n=0;const{shapeFlag:o}=e;if(t==null)t=null;else if(j(t))n=16;else if(typeof t=="object")if(o&65){const s=t.default;s&&(s._c&&(s._d=!1),mo(e,s()),s._c&&(s._d=!0));return}else{n=32;const s=t._;!s&&!Rs(t)?t._ctx=je:s===3&&je&&(je.slots._===1?t._=1:(t._=2,e.patchFlag|=1024))}else N(t)?(t={default:t,_ctx:je},n=32):(t=String(t),o&64?(n=16,t=[Ws(t)]):n=8);e.children=t,e.shapeFlag|=n}function al(...e){const t={};for(let n=0;n<e.length;n++){const o=e[n];for(const s in o)if(s==="class")t.class!==o.class&&(t.class=Ce([t.class,o.class]));else if(s==="style")t.style=Pt([t.style,o.style]);else if(en(s)){const i=t[s],r=o[s];r&&i!==r&&!(j(i)&&i.includes(r))&&(t[s]=i?[].concat(i,r):r)}else s!==""&&(t[s]=o[s])}return t}function He(e,t,n,o=null){Ne(e,t,7,[n,o])}const cl=Ss();let fl=0;function ul(e,t,n){const o=e.type,s=(t?t.appContext:e.appContext)||cl,i={uid:fl++,vnode:e,type:o,parent:t,appContext:s,root:null,next:null,subTree:null,effect:null,update:null,job:null,scope:new Ei(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:t?t.provides:Object.create(s.provides),ids:t?t.ids:["",0,0],accessCache:null,renderCache:[],components:null,directives:null,propsOptions:Os(o,s),emitsOptions:As(o,s),emit:null,emitted:null,propsDefaults:te,inheritAttrs:o.inheritAttrs,ctx:te,data:te,props:te,attrs:te,slots:te,refs:te,setupState:te,setupContext:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return i.ctx={_:i},i.root=t?t.root:i,i.emit=Hr.bind(null,i),e.ce&&e.ce(i),i}let ge=null;const dl=()=>ge||je;let En,go;{const e=on(),t=(n,o)=>{let s;return(s=e[n])||(s=e[n]=[]),s.push(o),i=>{s.length>1?s.forEach(r=>r(i)):s[0](i)}};En=t("__VUE_INSTANCE_SETTERS__",n=>ge=n),go=t("__VUE_SSR_SETTERS__",n=>Zt=n)}const Jt=e=>{const t=ge;return En(e),e.scope.on(),()=>{e.scope.off(),En(t)}},Ks=()=>{ge&&ge.scope.off(),En(null)};function Ys(e){return e.vnode.shapeFlag&4}let Zt=!1;function pl(e,t=!1,n=!1){t&&go(t);const{props:o,children:s}=e.vnode,i=Ys(e);Yr(e,o,i,t),Zr(e,s,n||t);const r=i?vl(e,t):void 0;return t&&go(!1),r}function vl(e,t){const n=e.type;e.accessCache=Object.create(null),e.proxy=new Proxy(e.ctx,Or);const{setup:o}=n;if(o){Le();const s=e.setupContext=o.length>1?ml(e):null,i=Jt(e),r=kt(o,e,0,[e.props,s]),l=So(r);if(De(),i(),(l||e.sp)&&!Ut(e)&&vs(e),l){if(r.then(Ks,Ks),t)return r.then(c=>{qs(e,c)}).catch(c=>{dn(c,e,0)});e.asyncDep=r}else qs(e,r)}else Xs(e)}function qs(e,t,n){N(t)?e.type.__ssrInlineRender?e.ssrRender=t:e.render=t:re(t)&&(e.setupState=Zo(t)),Xs(e)}function Xs(e,t,n){const o=e.type;e.render||(e.render=o.render||Pe);{const s=Jt(e);Le();try{Pr(e)}finally{De(),s()}}}const hl={get(e,t){return de(e,"get",""),e[t]}};function ml(e){const t=n=>{e.exposed=n||{}};return{attrs:new Proxy(e.attrs,hl),slots:e.slots,emit:e.emit,expose:t}}function bo(e){return e.exposed?e.exposeProxy||(e.exposeProxy=new Proxy(Zo(qi(e.exposed)),{get(t,n){if(n in t)return t[n];if(n in Wt)return Wt[n](e)},has(t,n){return n in t||n in Wt}})):e.proxy}const gl=/(?:^|[-_])\w/g,bl=e=>e.replace(gl,t=>t.toUpperCase()).replace(/[-_]/g,"");function xl(e,t=!0){return N(e)?e.displayName||e.name:e.name||t&&e.__name}function Js(e,t,n=!1){let o=xl(t);if(!o&&t.__file){const s=t.__file.match(/([^/\\]+)\.\w+$/);s&&(o=s[1])}if(!o&&e){const s=i=>{for(const r in i)if(i[r]===t)return r};o=s(e.components)||e.parent&&s(e.parent.type.components)||s(e.appContext.components)}return o?bl(o):n?"App":"Anonymous"}function _l(e){return N(e)&&"__vccOpts"in e}const W=(e,t)=>tr(e,t,Zt),yl="3.5.27";/**
* @vue/runtime-dom v3.5.27
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let xo;const Zs=typeof window<"u"&&window.trustedTypes;if(Zs)try{xo=Zs.createPolicy("vue",{createHTML:e=>e})}catch{}const Qs=xo?e=>xo.createHTML(e):e=>e,wl="http://www.w3.org/2000/svg",zl="http://www.w3.org/1998/Math/MathML",tt=typeof document<"u"?document:null,ei=tt&&tt.createElement("template"),kl={insert:(e,t,n)=>{t.insertBefore(e,n||null)},remove:e=>{const t=e.parentNode;t&&t.removeChild(e)},createElement:(e,t,n,o)=>{const s=t==="svg"?tt.createElementNS(wl,e):t==="mathml"?tt.createElementNS(zl,e):n?tt.createElement(e,{is:n}):tt.createElement(e);return e==="select"&&o&&o.multiple!=null&&s.setAttribute("multiple",o.multiple),s},createText:e=>tt.createTextNode(e),createComment:e=>tt.createComment(e),setText:(e,t)=>{e.nodeValue=t},setElementText:(e,t)=>{e.textContent=t},parentNode:e=>e.parentNode,nextSibling:e=>e.nextSibling,querySelector:e=>tt.querySelector(e),setScopeId(e,t){e.setAttribute(t,"")},insertStaticContent(e,t,n,o,s,i){const r=n?n.previousSibling:t.lastChild;if(s&&(s===i||s.nextSibling))for(;t.insertBefore(s.cloneNode(!0),n),!(s===i||!(s=s.nextSibling)););else{ei.innerHTML=Qs(o==="svg"?`<svg>${e}</svg>`:o==="mathml"?`<math>${e}</math>`:e);const l=ei.content;if(o==="svg"||o==="mathml"){const c=l.firstChild;for(;c.firstChild;)l.appendChild(c.firstChild);l.removeChild(c)}t.insertBefore(l,n)}return[r?r.nextSibling:t.firstChild,n?n.previousSibling:t.lastChild]}},Sl=Symbol("_vtc");function Al(e,t,n){const o=e[Sl];o&&(t=(t?[t,...o]:[...o]).join(" ")),t==null?e.removeAttribute("class"):n?e.setAttribute("class",t):e.className=t}const ti=Symbol("_vod"),Tl=Symbol("_vsh"),El=Symbol(""),Ml=/(?:^|;)\s*display\s*:/;function Cl(e,t,n){const o=e.style,s=le(n);let i=!1;if(n&&!s){if(t)if(le(t))for(const r of t.split(";")){const l=r.slice(0,r.indexOf(":")).trim();n[l]==null&&Mn(o,l,"")}else for(const r in t)n[r]==null&&Mn(o,r,"");for(const r in n)r==="display"&&(i=!0),Mn(o,r,n[r])}else if(s){if(t!==n){const r=o[El];r&&(n+=";"+r),o.cssText=n,i=Ml.test(n)}}else t&&e.removeAttribute("style");ti in e&&(e[ti]=i?o.display:"",e[Tl]&&(o.display="none"))}const ni=/\s*!important$/;function Mn(e,t,n){if(j(n))n.forEach(o=>Mn(e,t,o));else if(n==null&&(n=""),t.startsWith("--"))e.setProperty(t,n);else{const o=Rl(e,t);ni.test(n)?e.setProperty(pt(o),n.replace(ni,""),"important"):e[o]=n}}const oi=["Webkit","Moz","ms"],_o={};function Rl(e,t){const n=_o[t];if(n)return n;let o=st(t);if(o!=="filter"&&o in e)return _o[t]=o;o=Eo(o);for(let s=0;s<oi.length;s++){const i=oi[s]+o;if(i in e)return _o[t]=i}return t}const si="http://www.w3.org/1999/xlink";function ii(e,t,n,o,s,i=Ti(t)){o&&t.startsWith("xlink:")?n==null?e.removeAttributeNS(si,t.slice(6,t.length)):e.setAttributeNS(si,t,n):n==null||i&&!Ro(n)?e.removeAttribute(t):e.setAttribute(t,i?"":ot(n)?String(n):n)}function ri(e,t,n,o,s){if(t==="innerHTML"||t==="textContent"){n!=null&&(e[t]=t==="innerHTML"?Qs(n):n);return}const i=e.tagName;if(t==="value"&&i!=="PROGRESS"&&!i.includes("-")){const l=i==="OPTION"?e.getAttribute("value")||"":e.value,c=n==null?e.type==="checkbox"?"on":"":String(n);(l!==c||!("_value"in e))&&(e.value=c),n==null&&e.removeAttribute(t),e._value=n;return}let r=!1;if(n===""||n==null){const l=typeof e[t];l==="boolean"?n=Ro(n):n==null&&l==="string"?(n="",r=!0):l==="number"&&(n=0,r=!0)}try{e[t]=n}catch{}r&&e.removeAttribute(s||t)}function Il(e,t,n,o){e.addEventListener(t,n,o)}function Ol(e,t,n,o){e.removeEventListener(t,n,o)}const li=Symbol("_vei");function Pl(e,t,n,o,s=null){const i=e[li]||(e[li]={}),r=i[t];if(o&&r)r.value=o;else{const[l,c]=Fl(t);if(o){const d=i[t]=Nl(o,s);Il(e,l,d,c)}else r&&(Ol(e,l,r,c),i[t]=void 0)}}const ai=/(?:Once|Passive|Capture)$/;function Fl(e){let t;if(ai.test(e)){t={};let o;for(;o=e.match(ai);)e=e.slice(0,e.length-o[0].length),t[o[0].toLowerCase()]=!0}return[e[2]===":"?e.slice(3):pt(e.slice(2)),t]}let yo=0;const Ll=Promise.resolve(),Dl=()=>yo||(Ll.then(()=>yo=0),yo=Date.now());function Nl(e,t){const n=o=>{if(!o._vts)o._vts=Date.now();else if(o._vts<=n.attached)return;Ne($l(o,n.value),t,5,[o])};return n.value=e,n.attached=Dl(),n}function $l(e,t){if(j(t)){const n=e.stopImmediatePropagation;return e.stopImmediatePropagation=()=>{n.call(e),e._stopped=!0},t.map(o=>s=>!s._stopped&&o&&o(s))}else return t}const ci=e=>e.charCodeAt(0)===111&&e.charCodeAt(1)===110&&e.charCodeAt(2)>96&&e.charCodeAt(2)<123,jl=(e,t,n,o,s,i)=>{const r=s==="svg";t==="class"?Al(e,o,r):t==="style"?Cl(e,n,o):en(t)?Fn(t)||Pl(e,t,n,o,i):(t[0]==="."?(t=t.slice(1),!0):t[0]==="^"?(t=t.slice(1),!1):Bl(e,t,o,r))?(ri(e,t,o),!e.tagName.includes("-")&&(t==="value"||t==="checked"||t==="selected")&&ii(e,t,o,r,i,t!=="value")):e._isVueCE&&(/[A-Z]/.test(t)||!le(o))?ri(e,st(t),o,i,t):(t==="true-value"?e._trueValue=o:t==="false-value"&&(e._falseValue=o),ii(e,t,o,r))};function Bl(e,t,n,o){if(o)return!!(t==="innerHTML"||t==="textContent"||t in e&&ci(t)&&N(n));if(t==="spellcheck"||t==="draggable"||t==="translate"||t==="autocorrect"||t==="sandbox"&&e.tagName==="IFRAME"||t==="form"||t==="list"&&e.tagName==="INPUT"||t==="type"&&e.tagName==="TEXTAREA")return!1;if(t==="width"||t==="height"){const s=e.tagName;if(s==="IMG"||s==="VIDEO"||s==="CANVAS"||s==="SOURCE")return!1}return ci(t)&&le(n)?!1:t in e}const Hl=["ctrl","shift","alt","meta"],Gl={stop:e=>e.stopPropagation(),prevent:e=>e.preventDefault(),self:e=>e.target!==e.currentTarget,ctrl:e=>!e.ctrlKey,shift:e=>!e.shiftKey,alt:e=>!e.altKey,meta:e=>!e.metaKey,left:e=>"button"in e&&e.button!==0,middle:e=>"button"in e&&e.button!==1,right:e=>"button"in e&&e.button!==2,exact:(e,t)=>Hl.some(n=>e[`${n}Key`]&&!t.includes(n))},fi=(e,t)=>{const n=e._withMods||(e._withMods={}),o=t.join(".");return n[o]||(n[o]=(s,...i)=>{for(let r=0;r<t.length;r++){const l=Gl[t[r]];if(l&&l(s,t))return}return e(s,...i)})},Ul=ce({patchProp:jl},kl);let ui;function Vl(){return ui||(ui=el(Ul))}const Wl=(...e)=>{const t=Vl().createApp(...e),{mount:n}=t;return t.mount=o=>{const s=Yl(o);if(!s)return;const i=t._component;!N(i)&&!i.render&&!i.template&&(i.template=s.innerHTML),s.nodeType===1&&(s.textContent="");const r=n(s,!1,Kl(s));return s instanceof Element&&(s.removeAttribute("v-cloak"),s.setAttribute("data-v-app","")),r},t};function Kl(e){if(e instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&e instanceof MathMLElement)return"mathml"}function Yl(e){return le(e)?document.querySelector(e):e}const ql=`// ===== 0: MANDELBULB =====
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
`,Xl=`// ===== 1: MANDELBOX =====
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
`,Jl=`// ===== 2: MENGER SPONGE =====
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
`,Zl=`// ===== 3: SIERPINSKI =====
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
`,Ql=`// ===== 4: KALEIDOSCOPE =====
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
`,ea=`// ===== 5: ORGANIC HYBRID =====
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
`,ta=`// ===== 6: FRACTAL LAND =====
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
`,na=`// ===== 7: GALAXY NEBULA =====
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
`,oa=`// ===== 8: INFINITE TUNNEL =====
vec3 infiniteTunnel(vec2 uv, float time) {
  float angle = atan(uv.y, uv.x), radius = length(uv);
  float tunnel = 1.0 / radius + time * 0.5, twist = angle + tunnel * 0.5;
  vec2 tuv = vec2(twist / PI, tunnel);
  vec2 grid = fract(tuv * 8.0) - 0.5;
  float glow = 0.02 / (length(grid) + 0.02);
  return hsv2rgb(vec3(tunnel * 0.1 + angle * 0.1, 0.7, glow)) * smoothstep(0.0, 0.3, radius);
}
`,sa=`// ===== 9: PLASMA FRACTAL =====
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
`,ia=`// ===== 10: CIRCUITS =====
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
`,ra=`// ===== 11: METABALLS =====
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
`,la=`// ===== 12: VOLUMETRIC LINES =====
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
`,aa=`// ===== 13: DISCO TUNNEL =====
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
`,ca=`// ===== 14: SPEED DRIVE =====
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
`,fa=`// ===== 15: HOT ROCKS =====
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
`,ua=`// ===== 16: SERVER ROOM =====
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
`,da=`// ===== 17: REMNANT X =====
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
`,pa=`// ===== 18: KALI SET =====
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
`,va=`// ===== 19: GENERATORS =====
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
`,ha=`// ===== 20: SIMPLICITY GALAXY =====
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
`,ma=`// ===== 21: RIBBONS =====
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
`,ga=`// ===== 22: TWISTED RINGS =====
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
`,ba=`// ===== 23: WAVES REMIX =====
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
`,xa=`// ===== 24: DANCING METALIGHTS =====
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
`,_a=`// ===== 25: IO BLOCKS =====
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
`,ya=`// ===== 26: BEATING CIRCLES =====
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
`,wa=`// ===== 27: CIRCLE WAVE =====
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
`,za=`// ===== 28: SOUNDFLOWER =====
vec3 soundflower(vec2 uv, float time) {
  float r = length(uv);
  float a = atan(uv.x, uv.y);
  float w = fakeAudio(abs(a) / 6.28);
  float t = 3.0 * sqrt(abs(w - 0.5));
  float f = 0.0;
  if (r < t) f = 1.0 - r / t;
  return pow(vec3(f), vec3(1.5, 1.1, 0.8));
}
`,ka=`// ===== 29: POLAR BEATS =====
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
`,Sa=`// ===== 30: UNDULANT SPECTRE =====
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
`,Aa=`// ===== 31: REVISION 2015 =====
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
`,Ta=`// ===== 32: GAMEBOY STYLE =====
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
`,Ea=`// ===== 33: ELECTRIC STORM =====
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
`,Ma=`// ===== 34: VORTEX =====
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
`,Ca=`// ===== 35: NEON GRID =====
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
`,Ra=`// ===== 36: MATRIX RAIN =====
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
`,Ia=`// ===== 37: FIRE =====
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
`,Oa=`// ===== 38: AURORA =====
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
`,Pa=`// ===== 39: WORMHOLE =====
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
`,Fa=`// ===== 40: HEXAGONS =====
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
`,La=`// ===== 41: BUBBLES =====
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
`,Da=`// ===== 42: LIGHTNING =====
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
`,Na=`// ===== 43: KALEIDOSCOPE 2D =====
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
`,$a=`// ===== 44: STARFIELD =====
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
`,ja=`// ===== 45: LIQUID METAL =====
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
`,Ba=`// ===== 46: FRACTAL TREE =====
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
`,Ha=`// ===== 47: VORONOI =====
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
`,Ga=`// ===== 48: PSYCHEDELIC =====
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
`,Ua=`// ===== 49: ENERGY FIELD =====
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
`,Va=`precision highp float;
attribute vec2 aPosition;
varying vec2 vUV;

void main() {
  vUV = aPosition;
  gl_Position = vec4(aPosition, 0.0, 1.0);
}
`,Wa=`// ===== PRECISION AND UNIFORMS =====

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
`,Ka=`// ===== MAIN SHADER PROGRAM =====
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
`,Ya=xn({__name:"BioFractalViewer",props:{mode:{default:0}},setup(e){const t=e,n=se(null);let o=null,s=null,i=null,r=Date.now();const l=Object.assign({"../../shaders/effects/mode-00-mandelbulb.glsl":ql,"../../shaders/effects/mode-01-mandelbox.glsl":Xl,"../../shaders/effects/mode-02-menger-sponge.glsl":Jl,"../../shaders/effects/mode-03-sierpinski.glsl":Zl,"../../shaders/effects/mode-04-kaleidoscope.glsl":Ql,"../../shaders/effects/mode-05-organic-hybrid.glsl":ea,"../../shaders/effects/mode-06-fractal-land.glsl":ta,"../../shaders/effects/mode-07-galaxy-nebula.glsl":na,"../../shaders/effects/mode-08-infinite-tunnel.glsl":oa,"../../shaders/effects/mode-09-plasma-fractal.glsl":sa,"../../shaders/effects/mode-10-circuits.glsl":ia,"../../shaders/effects/mode-11-metaballs.glsl":ra,"../../shaders/effects/mode-12-volumetric-lines.glsl":la,"../../shaders/effects/mode-13-disco-tunnel.glsl":aa,"../../shaders/effects/mode-14-speed-drive.glsl":ca,"../../shaders/effects/mode-15-hot-rocks.glsl":fa,"../../shaders/effects/mode-16-server-room.glsl":ua,"../../shaders/effects/mode-17-remnant-x.glsl":da,"../../shaders/effects/mode-18-kali-set.glsl":pa,"../../shaders/effects/mode-19-generators.glsl":va,"../../shaders/effects/mode-20-simplicity-galaxy.glsl":ha,"../../shaders/effects/mode-21-ribbons.glsl":ma,"../../shaders/effects/mode-22-twisted-rings.glsl":ga,"../../shaders/effects/mode-23-waves-remix.glsl":ba,"../../shaders/effects/mode-24-dancing-metalights.glsl":xa,"../../shaders/effects/mode-25-io-blocks.glsl":_a,"../../shaders/effects/mode-26-beating-circles.glsl":ya,"../../shaders/effects/mode-27-circle-wave.glsl":wa,"../../shaders/effects/mode-28-soundflower.glsl":za,"../../shaders/effects/mode-29-polar-beats.glsl":ka,"../../shaders/effects/mode-30-undulant-spectre.glsl":Sa,"../../shaders/effects/mode-31-revision-2015.glsl":Aa,"../../shaders/effects/mode-32-gameboy-style.glsl":Ta,"../../shaders/effects/mode-33-electric-storm.glsl":Ea,"../../shaders/effects/mode-34-vortex.glsl":Ma,"../../shaders/effects/mode-35-neon-grid.glsl":Ca,"../../shaders/effects/mode-36-matrix-rain.glsl":Ra,"../../shaders/effects/mode-37-fire.glsl":Ia,"../../shaders/effects/mode-38-aurora.glsl":Oa,"../../shaders/effects/mode-39-wormhole.glsl":Pa,"../../shaders/effects/mode-40-hexagons.glsl":Fa,"../../shaders/effects/mode-41-bubbles.glsl":La,"../../shaders/effects/mode-42-lightning.glsl":Da,"../../shaders/effects/mode-43-kaleidoscope-2d.glsl":Na,"../../shaders/effects/mode-44-starfield.glsl":$a,"../../shaders/effects/mode-45-liquid-metal.glsl":ja,"../../shaders/effects/mode-46-fractal-tree.glsl":Ba,"../../shaders/effects/mode-47-voronoi.glsl":Ha,"../../shaders/effects/mode-48-psychedelic.glsl":Ga,"../../shaders/effects/mode-49-energy-field.glsl":Ua}),c=Object.keys(l).sort().map(y=>l[y]).join(`

`),d=Va,f=`${Wa}
${c}
${Ka}`,p=(y,P)=>{if(!o)return null;const C=o.createShader(y);return C?(o.shaderSource(C,P),o.compileShader(C),o.getShaderParameter(C,o.COMPILE_STATUS)?C:(console.error("Shader error:",o.getShaderInfoLog(C)),null)):null},_=()=>{const y=n.value;if(!y||(o=y.getContext("webgl")||y.getContext("experimental-webgl"),!o))return!1;const P=p(o.VERTEX_SHADER,d),C=p(o.FRAGMENT_SHADER,f);if(!P||!C||(s=o.createProgram(),!s))return!1;if(o.attachShader(s,P),o.attachShader(s,C),o.linkProgram(s),!o.getProgramParameter(s,o.LINK_STATUS))return console.error("Link error:",o.getProgramInfoLog(s)),!1;const H=new Float32Array([-1,-1,1,-1,-1,1,-1,1,1,-1,1,1]),I=o.createBuffer();o.bindBuffer(o.ARRAY_BUFFER,I),o.bufferData(o.ARRAY_BUFFER,H,o.STATIC_DRAW);const z=o.getAttribLocation(s,"aPosition");return o.enableVertexAttribArray(z),o.vertexAttribPointer(z,2,o.FLOAT,!1,0,0),!0},S=()=>{const y=n.value;y&&(y.width=y.clientWidth,y.height=y.clientHeight,o&&o.viewport(0,0,y.width,y.height))},w=()=>{!o||!s||!n.value||(o.useProgram(s),o.uniform1f(o.getUniformLocation(s,"uTime"),(Date.now()-r)/1e3),o.uniform2f(o.getUniformLocation(s,"uResolution"),n.value.width,n.value.height),o.uniform1i(o.getUniformLocation(s,"uMode"),t.mode),o.drawArrays(o.TRIANGLES,0,6),i=requestAnimationFrame(w))};return Vt(()=>{_()&&(S(),window.addEventListener("resize",S),w())}),Tt(()=>{i&&cancelAnimationFrame(i),window.removeEventListener("resize",S)}),(y,P)=>(pe(),we("canvas",{ref_key:"canvasRef",ref:n,class:"bio-fractal-canvas"},null,512))}}),di=(e,t)=>{const n=e.__vccOpts||e;for(const[o,s]of t)n[o]=s;return n},qa=di(Ya,[["__scopeId","data-v-c9463404"]]),Xa={class:"pv-container"},Ja={class:"pv-svg-container"},Za={viewBox:"0 0 840 640",preserveAspectRatio:"xMidYMid meet"},Qa=["x1","y1","x2","y2"],ec=["x1","y1","x2","y2"],tc=["x1","y1","x2","y2"],nc=["x1","y1","x2","y2"],oc=["d"],sc=["cx","cy"],ic=["transform"],rc=["x1","y1","x2","y2"],lc=["x1","y1","x2","y2"],ac=["x1","y1","x2","y2"],cc=["x1","y1","x2","y2"],fc=["d"],uc=["cx","cy"],dc=["transform"],pc=["x1","y1","x2","y2"],vc=["x1","y1","x2","y2"],hc=["x1","y1","x2","y2"],mc=["x1","y1","x2","y2"],gc=["x1","y1","x2","y2"],bc=["x1","y1","x2","y2"],xc=["points"],_c=["d"],yc=["cx","cy"],wc=["transform"],zc=["d"],kc=["x1","y1","x2","y2"],Sc=["x1","y1","x2","y2"],Ac=["x1","y1","x2","y2"],Tc=["points"],Ec=["x1","y1","x2","y2"],Mc=["points"],Cc=["x1","y1","x2","y2"],Rc=["points"],Ic=["transform"],Oc=["cx","cy"],Pc=["cx","cy"],Fc=["cx","cy"],Lc=["x","y"],Dc=["x","y"],Nc=["x","y"],$c=["x","y"],jc={class:"pv-values"},Bc={class:"pv-values-main"},Hc={class:"pv-values-text"},Gc={class:"pv-values-real"},Uc={class:"pv-values-imag"},Vc={class:"pv-values-time"},Wc={class:"pv-values-time-text"},Kc={class:"pv-values-time-value"},Cn=1.3,Yc=1,Ct=-2.8,Rt=-2.8,Ge=-1.2,dt=1.3,Rn=1.3,In=1.3,qc=di(xn({__name:"ComplexWaveVisualization",setup(e){const t=se(1.25),n=se(!0);let o=null;const s=2*Math.PI*1.6,i=G=>Math.exp(-1*Math.pow(G-Cn,2)),r=(G,R,ie)=>{const It=-G*81*.7,Ke=G*81*.35,On=R*61*.9,a=R*61*.25,u=-ie*61;return{x:436+It+On,y:355+Ke+a+u}},l=W(()=>i(t.value)*Math.cos(s*t.value)),c=W(()=>i(t.value)*Math.sin(s*t.value)),d=W(()=>{const G=[];for(let R=0;R<=2.5;R+=.015){const ie=i(R);G.push({t:R,re:ie*Math.cos(s*R),im:ie*Math.sin(s*R)})}return G}),f=W(()=>d.value.map((G,R)=>{const ie=r(G.t,G.re,G.im);return`${R===0?"M":"L"} ${ie.x} ${ie.y}`}).join(" ")),p=W(()=>d.value.map((G,R)=>{const ie=r(Ge,G.re,G.im);return`${R===0?"M":"L"} ${ie.x} ${ie.y}`}).join(" ")),_=W(()=>d.value.map((G,R)=>{const ie=r(G.t,Ct,G.im);return`${R===0?"M":"L"} ${ie.x} ${ie.y}`}).join(" ")),S=W(()=>d.value.map((G,R)=>{const ie=r(G.t,G.re,Rt);return`${R===0?"M":"L"} ${ie.x} ${ie.y}`}).join(" ")),w=W(()=>({tl:r(Ge,-dt,dt),tr:r(Ge,dt,dt),bl:r(Ge,-dt,-dt),br:r(Ge,dt,-dt)})),y=W(()=>r(Ge,0,1.4)),P=W(()=>r(Ge,0,-.3)),C=W(()=>r(Ge,-.3,0)),H=W(()=>r(Ge,1,0)),I=W(()=>({tl:r(0,Ct,Rn),tr:r(2.5,Ct,Rn),bl:r(0,Ct,-Rn),br:r(2.5,Ct,-Rn)})),z=W(()=>({bl:r(0,-In,Rt),br:r(0,In,Rt),tl:r(2.5,-In,Rt),tr:r(2.5,In,Rt)})),U=W(()=>r(Cn,0,0)),B=W(()=>r(Cn,0,1.6)),L=W(()=>r(Cn,1.5,0)),Y=W(()=>r(0,0,0)),q=W(()=>r(2.7,0,0)),Q=W(()=>r(t.value,l.value,c.value)),ue=W(()=>r(Ge,l.value,c.value)),Oe=W(()=>r(t.value,Ct,c.value)),Me=W(()=>r(t.value,l.value,Rt)),nt=W(()=>Math.atan2(I.value.tl.y-I.value.tr.y,I.value.tl.x-I.value.tr.x)*(180/Math.PI)),Ue=W(()=>({x:(I.value.tl.x+I.value.tr.x)/2,y:(I.value.tl.y+I.value.tr.y)/2})),ae=W(()=>Math.atan2(z.value.bl.y-z.value.tl.y,z.value.bl.x-z.value.tl.x)*(180/Math.PI)),X=W(()=>({x:(z.value.br.x+z.value.tr.x)/2,y:(z.value.br.y+z.value.tr.y)/2})),Z=W(()=>Math.atan2(w.value.tl.y-w.value.tr.y,w.value.tl.x-w.value.tr.x)*(180/Math.PI)),ze=W(()=>({x:(w.value.tl.x+w.value.tr.x)/2,y:(w.value.tl.y+w.value.tr.y)/2})),Ve=W(()=>({x:(Y.value.x+q.value.x)/2,y:(Y.value.y+q.value.y)/2}));let M=0;const $=()=>{M++,n.value&&M%2===0&&(t.value+=.02,t.value>2.5&&(t.value=0)),o=requestAnimationFrame($)};return Vt(()=>{o=requestAnimationFrame($)}),Tt(()=>{o&&cancelAnimationFrame(o)}),(G,R)=>(pe(),we("div",Xa,[R[15]||(R[15]=h("div",{class:"pv-title"},[h("h1",{class:"pv-title-gradient-1"}," The Observer Effect explains why the same "),h("h2",{class:"pv-title-gradient-2"}," life feels different to different people ")],-1)),h("div",Ja,[(pe(),we("svg",Za,[R[4]||(R[4]=Tn('<defs data-v-65cb23ba><linearGradient id="pv-helixGradient" x1="0%" y1="0%" x2="100%" y2="0%" data-v-65cb23ba><stop offset="0%" stop-color="#a855f7" data-v-65cb23ba><animate attributeName="stop-color" values="#a855f7;#ec4899;#06b6d4;#a855f7" dur="4s" repeatCount="indefinite" data-v-65cb23ba></animate></stop><stop offset="50%" stop-color="#ec4899" data-v-65cb23ba><animate attributeName="stop-color" values="#ec4899;#06b6d4;#a855f7;#ec4899" dur="4s" repeatCount="indefinite" data-v-65cb23ba></animate></stop><stop offset="100%" stop-color="#06b6d4" data-v-65cb23ba><animate attributeName="stop-color" values="#06b6d4;#a855f7;#ec4899;#06b6d4" dur="4s" repeatCount="indefinite" data-v-65cb23ba></animate></stop></linearGradient><linearGradient id="pv-imGradient" x1="0%" y1="0%" x2="100%" y2="0%" data-v-65cb23ba><stop offset="0%" stop-color="#06b6d4" data-v-65cb23ba></stop><stop offset="100%" stop-color="#22d3d3" data-v-65cb23ba></stop></linearGradient><linearGradient id="pv-reGradient" x1="0%" y1="0%" x2="100%" y2="0%" data-v-65cb23ba><stop offset="0%" stop-color="#f97316" data-v-65cb23ba></stop><stop offset="100%" stop-color="#fb923c" data-v-65cb23ba></stop></linearGradient><linearGradient id="pv-spiralGradient" x1="0%" y1="0%" x2="100%" y2="100%" data-v-65cb23ba><stop offset="0%" stop-color="#a855f7" data-v-65cb23ba></stop><stop offset="100%" stop-color="#6366f1" data-v-65cb23ba></stop></linearGradient><linearGradient id="pv-axisGradient" x1="0%" y1="0%" x2="100%" y2="0%" data-v-65cb23ba><stop offset="0%" stop-color="#64748b" data-v-65cb23ba></stop><stop offset="100%" stop-color="#94a3b8" data-v-65cb23ba></stop></linearGradient><filter id="pv-glow-cyan" x="-50%" y="-50%" width="200%" height="200%" data-v-65cb23ba><feGaussianBlur stdDeviation="3" result="coloredBlur" data-v-65cb23ba></feGaussianBlur><feMerge data-v-65cb23ba><feMergeNode in="coloredBlur" data-v-65cb23ba></feMergeNode><feMergeNode in="SourceGraphic" data-v-65cb23ba></feMergeNode></feMerge></filter><filter id="pv-glow-orange" x="-50%" y="-50%" width="200%" height="200%" data-v-65cb23ba><feGaussianBlur stdDeviation="3" result="coloredBlur" data-v-65cb23ba></feGaussianBlur><feMerge data-v-65cb23ba><feMergeNode in="coloredBlur" data-v-65cb23ba></feMergeNode><feMergeNode in="SourceGraphic" data-v-65cb23ba></feMergeNode></feMerge></filter><filter id="pv-glow-purple" x="-50%" y="-50%" width="200%" height="200%" data-v-65cb23ba><feGaussianBlur stdDeviation="4" result="coloredBlur" data-v-65cb23ba></feGaussianBlur><feMerge data-v-65cb23ba><feMergeNode in="coloredBlur" data-v-65cb23ba></feMergeNode><feMergeNode in="SourceGraphic" data-v-65cb23ba></feMergeNode></feMerge></filter><filter id="pv-glow-strong" x="-100%" y="-100%" width="300%" height="300%" data-v-65cb23ba><feGaussianBlur stdDeviation="6" result="coloredBlur" data-v-65cb23ba></feGaussianBlur><feMerge data-v-65cb23ba><feMergeNode in="coloredBlur" data-v-65cb23ba></feMergeNode><feMergeNode in="coloredBlur" data-v-65cb23ba></feMergeNode><feMergeNode in="SourceGraphic" data-v-65cb23ba></feMergeNode></feMerge></filter></defs>',1)),h("line",{x1:I.value.bl.x,y1:I.value.bl.y,x2:I.value.tl.x,y2:I.value.tl.y,stroke:"#0e7490","stroke-width":"1",class:"pv-shimmer"},null,8,Qa),h("line",{x1:I.value.tl.x,y1:I.value.tl.y,x2:I.value.tr.x,y2:I.value.tr.y,stroke:"#0e7490","stroke-width":"1",class:"pv-shimmer"},null,8,ec),h("line",{x1:I.value.bl.x,y1:I.value.bl.y,x2:I.value.br.x,y2:I.value.br.y,stroke:"#0e7490","stroke-width":"1",class:"pv-shimmer"},null,8,tc),h("line",{x1:I.value.tr.x,y1:I.value.tr.y,x2:I.value.br.x,y2:I.value.br.y,stroke:"#0e7490","stroke-width":"1",class:"pv-shimmer"},null,8,nc),h("path",{d:_.value,fill:"none",stroke:"url(#pv-imGradient)","stroke-width":"2"},null,8,oc),h("circle",{cx:Oe.value.x,cy:Oe.value.y,r:"4",fill:"#06b6d4",class:"pv-point-pulse"},null,8,sc),h("g",{transform:`translate(${Ue.value.x}, ${Ue.value.y-25}) rotate(${nt.value})`},[...R[0]||(R[0]=[Tn('<text fill="#22d3d3" font-size="13" font-family="Times New Roman, serif" text-anchor="middle" style="letter-spacing:-0.5px;" data-v-65cb23ba><tspan font-weight="bold" data-v-65cb23ba>Im</tspan><tspan font-style="italic" data-v-65cb23ba> f</tspan><tspan data-v-65cb23ba>=e</tspan><tspan baseline-shift="super" font-size="9" data-v-65cb23ba>−γ(t−t₀)²</tspan><tspan font-style="italic" data-v-65cb23ba>sin(ωt)</tspan></text>',1)])],8,ic),h("line",{x1:z.value.bl.x,y1:z.value.bl.y,x2:z.value.br.x,y2:z.value.br.y,stroke:"#c2410c","stroke-width":"1",class:"pv-shimmer"},null,8,rc),h("line",{x1:z.value.bl.x,y1:z.value.bl.y,x2:z.value.tl.x,y2:z.value.tl.y,stroke:"#c2410c","stroke-width":"1",class:"pv-shimmer"},null,8,lc),h("line",{x1:z.value.br.x,y1:z.value.br.y,x2:z.value.tr.x,y2:z.value.tr.y,stroke:"#c2410c","stroke-width":"1",class:"pv-shimmer"},null,8,ac),h("line",{x1:z.value.tl.x,y1:z.value.tl.y,x2:z.value.tr.x,y2:z.value.tr.y,stroke:"#c2410c","stroke-width":"1",class:"pv-shimmer"},null,8,cc),h("path",{d:S.value,fill:"none",stroke:"url(#pv-reGradient)","stroke-width":"2"},null,8,fc),h("circle",{cx:Me.value.x,cy:Me.value.y,r:"4",fill:"#f97316",class:"pv-point-pulse"},null,8,uc),h("g",{transform:`translate(${X.value.x}, ${X.value.y+25}) rotate(${ae.value})`},[...R[1]||(R[1]=[Tn('<text fill="#fb923c" font-size="13" font-family="Times New Roman, serif" text-anchor="middle" style="letter-spacing:-0.5px;" data-v-65cb23ba><tspan font-weight="bold" data-v-65cb23ba>Re</tspan><tspan font-style="italic" data-v-65cb23ba> f</tspan><tspan data-v-65cb23ba>=e</tspan><tspan baseline-shift="super" font-size="9" data-v-65cb23ba>−γ(t−t₀)²</tspan><tspan font-style="italic" data-v-65cb23ba>cos(ωt)</tspan></text>',1)])],8,dc),h("line",{x1:w.value.bl.x,y1:w.value.bl.y,x2:w.value.tl.x,y2:w.value.tl.y,stroke:"#7c3aed","stroke-width":"1",class:"pv-shimmer"},null,8,pc),h("line",{x1:w.value.tl.x,y1:w.value.tl.y,x2:w.value.tr.x,y2:w.value.tr.y,stroke:"#7c3aed","stroke-width":"1",class:"pv-shimmer"},null,8,vc),h("line",{x1:w.value.bl.x,y1:w.value.bl.y,x2:w.value.br.x,y2:w.value.br.y,stroke:"#7c3aed","stroke-width":"1",class:"pv-shimmer"},null,8,hc),h("line",{x1:w.value.br.x,y1:w.value.br.y,x2:w.value.tr.x,y2:w.value.tr.y,stroke:"#7c3aed","stroke-width":"1",class:"pv-shimmer"},null,8,mc),h("line",{x1:P.value.x,y1:P.value.y,x2:y.value.x,y2:y.value.y,stroke:"#8b5cf6","stroke-width":"1"},null,8,gc),h("line",{x1:C.value.x,y1:C.value.y,x2:H.value.x,y2:H.value.y,stroke:"#8b5cf6","stroke-width":"1"},null,8,bc),h("polygon",{points:`${y.value.x},${y.value.y-6} ${y.value.x-3},${y.value.y+2} ${y.value.x+3},${y.value.y+2}`,fill:"#a855f7"},null,8,xc),h("path",{d:p.value,fill:"none",stroke:"url(#pv-spiralGradient)","stroke-width":"2"},null,8,_c),h("circle",{cx:ue.value.x,cy:ue.value.y,r:"4",fill:"#a855f7",class:"pv-point-pulse"},null,8,yc),h("g",{transform:`translate(${ze.value.x}, ${ze.value.y-20}) rotate(${Z.value})`},[...R[2]||(R[2]=[Tn('<text fill="#c084fc" font-size="10" font-family="Times New Roman, serif" text-anchor="middle" style="letter-spacing:-0.5px;" data-v-65cb23ba><tspan font-style="italic" data-v-65cb23ba>f</tspan><tspan data-v-65cb23ba>=e</tspan><tspan baseline-shift="super" font-size="7" data-v-65cb23ba>−γ(t−t₀)²</tspan><tspan font-style="italic" data-v-65cb23ba>e</tspan><tspan baseline-shift="super" font-size="7" data-v-65cb23ba>iωt</tspan></text>',1)])],8,wc),h("path",{d:f.value,fill:"none",stroke:"url(#pv-helixGradient)","stroke-width":"4"},null,8,zc),h("line",{x1:Q.value.x,y1:Q.value.y,x2:Oe.value.x,y2:Oe.value.y,stroke:"#06b6d4","stroke-width":"1","stroke-dasharray":"6,4",class:"pv-dash-flow",opacity:"0.7"},null,8,kc),h("line",{x1:Q.value.x,y1:Q.value.y,x2:Me.value.x,y2:Me.value.y,stroke:"#f97316","stroke-width":"1","stroke-dasharray":"6,4",class:"pv-dash-flow",opacity:"0.7"},null,8,Sc),h("line",{x1:Y.value.x,y1:Y.value.y,x2:q.value.x,y2:q.value.y,stroke:"url(#pv-axisGradient)","stroke-width":"2"},null,8,Ac),h("polygon",{points:`${q.value.x-6},${q.value.y+6} ${q.value.x+6},${q.value.y-2} ${q.value.x+2},${q.value.y+10}`,fill:"#94a3b8"},null,8,Tc),h("line",{x1:U.value.x,y1:U.value.y+8,x2:B.value.x,y2:B.value.y,stroke:"url(#pv-axisGradient)","stroke-width":"2"},null,8,Ec),h("polygon",{points:`${B.value.x},${B.value.y-8} ${B.value.x-4},${B.value.y+2} ${B.value.x+4},${B.value.y+2}`,fill:"#94a3b8"},null,8,Mc),h("line",{x1:U.value.x-8,y1:U.value.y-5,x2:L.value.x,y2:L.value.y,stroke:"url(#pv-axisGradient)","stroke-width":"2"},null,8,Cc),h("polygon",{points:`${L.value.x+8},${L.value.y+4} ${L.value.x-2},${L.value.y-4} ${L.value.x-4},${L.value.y+6}`,fill:"#94a3b8"},null,8,Rc),h("g",{transform:`translate(${Ve.value.x+30}, ${Ve.value.y-70}) rotate(${nt.value})`},[...R[3]||(R[3]=[h("text",{fill:"#e879f9","font-size":"10","font-family":"Times New Roman, serif","text-anchor":"middle",style:{"letter-spacing":"-0.5px"}},[h("tspan",{"font-style":"italic"},"f(t)"),h("tspan",null,"=Re+"),h("tspan",{"font-style":"italic"},"i"),h("tspan",null,"·Im")],-1)])],8,Ic),h("circle",{cx:Q.value.x,cy:Q.value.y,r:"10",fill:"url(#pv-helixGradient)",opacity:"0.3",class:"pv-point-pulse"},null,8,Oc),h("circle",{cx:Q.value.x,cy:Q.value.y,r:"6",fill:"#fff"},null,8,Pc),h("circle",{cx:Q.value.x,cy:Q.value.y,r:"3",fill:"url(#pv-helixGradient)"},null,8,Fc),h("text",{x:B.value.x-30,y:B.value.y+8,fill:"#22d3d3","font-size":"18","font-weight":"bold","font-family":"serif"},"Im",8,Lc),h("text",{x:L.value.x+10,y:L.value.y+6,fill:"#fb923c","font-size":"18","font-weight":"bold","font-family":"serif"},"Re",8,Dc),h("text",{x:q.value.x-3,y:q.value.y+22,fill:"#c084fc","font-size":"18","font-style":"italic","font-family":"serif"},"t",8,Nc),h("text",{x:U.value.x+5,y:U.value.y+20,fill:"#94a3b8","font-size":"13","font-style":"italic","font-family":"serif"},"t₀",8,$c)]))]),h("div",jc,[h("div",Bc,[h("span",Hc,[R[5]||(R[5]=h("span",{class:"pv-values-f"},"f",-1)),R[6]||(R[6]=h("span",{class:"pv-values-punctuation"},"(",-1)),R[7]||(R[7]=h("span",{class:"pv-values-t"},"t",-1)),R[8]||(R[8]=h("span",{class:"pv-values-punctuation"},") = ",-1)),h("span",Gc,Fe(l.value>=0?"+":"")+Fe(l.value.toFixed(2)),1),R[9]||(R[9]=h("span",{class:"pv-values-punctuation"}," + ",-1)),h("span",Uc,Fe(c.value.toFixed(2)),1),R[10]||(R[10]=h("span",{class:"pv-values-i"}," i",-1))])]),h("div",Vc,[h("span",Wc,[R[11]||(R[11]=h("span",{class:"pv-values-time-t"},"t",-1)),R[12]||(R[12]=h("span",{class:"pv-values-time-punctuation"}," = ",-1)),h("span",Kc,Fe((t.value/Yc).toFixed(2)),1),R[13]||(R[13]=h("span",{class:"pv-values-time-punctuation"},null,-1)),R[14]||(R[14]=h("span",{class:"pv-values-time-period"},"T",-1))])])])]))}}),[["__scopeId","data-v-65cb23ba"]]),Xc={class:"c-cube-scene"},Jc={class:"c-cube__face c-cube__face--front"},Zc={key:0,src:"index.html",class:"c-cube__iframe",title:"Current View"},Qc={class:"c-cube__face c-cube__face--right"},ef=["src"],tf={class:"c-cube__face c-cube__face--back"},nf=["src"],of={key:0,class:"c-cube-view-mode"},sf={key:1,class:"c-cube-hint"},rf={key:2,class:"c-cube-indicator"},lf=["onClick"],pi=-30,vi=-45,af=xn({__name:"CubeView",props:{active:{type:Boolean,default:!1}},emits:["close"],setup(e,{emit:t}){const n=e,o=t,s=se(n.active),i=se(pi),r=se(vi),l=se(1),c=se(!1),d=se({x:0,y:0}),f=se(0),p=se(!0),_=se(!1),S=se(!1),w=se(0),y=se(0),P=se(0);let C=null;const H=["Front","Right","Back","Left","Top","Bottom"],I={right:"cube_fractal_neon.html",back:"perspectives.html"},z=se(new Set([0])),U=M=>z.value.has(M),B=()=>{var $;const M={0:[1,3,4,5],1:[0,2,4,5],2:[1,3,4,5],3:[0,2,4,5],4:[0,1,2,3],5:[0,1,2,3]};z.value.add(f.value),($=M[f.value])==null||$.forEach(G=>z.value.add(G))},L=[{x:0,y:0},{x:0,y:-90},{x:0,y:180},{x:0,y:90},{x:90,y:0},{x:-90,y:0}],Y=[{x:-30,y:-45},{x:-30,y:-135},{x:-30,y:135},{x:-30,y:45},{x:-60,y:-45},{x:60,y:-45}];mn(()=>n.active,M=>{s.value=M,M?(document.body.style.overflow="hidden",i.value=pi,r.value=vi,l.value=1,p.value=!0,f.value=0):document.body.style.overflow=""});const q=W(()=>({transform:`
    translateZ(-300px)
    scale(${l.value})
    rotateX(${i.value}deg)
    rotateY(${r.value}deg)
  `})),Q=(M,$,G=400)=>new Promise(R=>{_.value=!0;const ie=i.value,ke=r.value,xt=performance.now();let We=$-ke;We>180&&(We-=360),We<-180&&(We+=360);const It=ke+We,Ke=On=>{const a=On-xt,u=Math.min(a/G,1),v=1-Math.pow(1-u,3);i.value=ie+(M-ie)*v,r.value=ke+(It-ke)*v,u<1?requestAnimationFrame(Ke):(i.value=M,r.value=$,_.value=!1,R())};requestAnimationFrame(Ke)}),ue=async M=>{_.value||(f.value=M,p.value?(await Q(L[M].x,L[M].y),p.value=!1):(await Q(Y[M].x,Y[M].y),p.value=!0))},Oe=async()=>{_.value||(p.value?(await Q(L[f.value].x,L[f.value].y),p.value=!1):(await Q(Y[f.value].x,Y[f.value].y),p.value=!0))},Me=M=>{if(M.length<2)return 0;const $=M[0].clientX-M[1].clientX,G=M[0].clientY-M[1].clientY;return Math.sqrt($*$+G*G)},nt=M=>{if(_.value)return;if(C&&(cancelAnimationFrame(C),C=null),y.value=0,P.value=0,"touches"in M&&M.touches.length===2){S.value=!0,w.value=Me(M.touches);return}c.value=!0;const $="touches"in M?M.touches[0]:M;d.value={x:$.clientX,y:$.clientY}},Ue=M=>{if(!s.value||_.value)return;if("touches"in M&&M.touches.length===2){M.preventDefault();const ie=Me(M.touches);if(w.value>0){const ke=ie/w.value;l.value=Math.max(.3,Math.min(2,l.value*ke))}w.value=ie;return}if(!c.value)return;const $="touches"in M?M.touches[0]:M,G=$.clientX-d.value.x,R=$.clientY-d.value.y;P.value=G*.4,y.value=-R*.4,r.value+=P.value,i.value+=y.value,d.value={x:$.clientX,y:$.clientY},ze()},ae=()=>{if(Math.abs(y.value)<.1&&Math.abs(P.value)<.1){C=null;return}y.value*=.95,P.value*=.95,r.value+=P.value,i.value+=y.value,ze(),C=requestAnimationFrame(ae)},X=()=>{c.value&&(Math.abs(y.value)>.5||Math.abs(P.value)>.5)&&(C=requestAnimationFrame(ae)),c.value=!1,S.value=!1,w.value=0},Z=M=>{if(!s.value)return;M.preventDefault();const $=M.deltaY>0?.95:1.05;l.value=Math.max(.3,Math.min(2,l.value*$))},ze=()=>{let M=(r.value%360+360)%360;Math.abs(i.value)>60?f.value=i.value>0?4:5:M>=315||M<45?f.value=0:M>=45&&M<135?f.value=3:M>=135&&M<225?f.value=2:f.value=1;const $=Math.abs(i.value)>15&&Math.abs(i.value)<75,G=M%90>15&&M%90<75;p.value=$||G,B()},Ve=M=>{if(s.value){if(M.key.toLowerCase()==="q"||M.key==="Escape"){M.preventDefault(),o("close");return}if(M.key===" "){M.preventDefault(),Oe();return}if(!_.value)switch(M.key){case"ArrowRight":f.value<4&&ue((f.value+1)%4);break;case"ArrowLeft":f.value<4&&ue((f.value+3)%4);break;case"ArrowUp":ue(4);break;case"ArrowDown":ue(5);break}}};return Vt(()=>{window.addEventListener("mousemove",Ue),window.addEventListener("mouseup",X),window.addEventListener("touchmove",Ue),window.addEventListener("touchend",X),window.addEventListener("keydown",Ve)}),Tt(()=>{window.removeEventListener("mousemove",Ue),window.removeEventListener("mouseup",X),window.removeEventListener("touchmove",Ue),window.removeEventListener("touchend",X),window.removeEventListener("keydown",Ve),document.body.style.overflow="",C&&cancelAnimationFrame(C)}),(M,$)=>(pe(),ho(xr,{to:"body"},[h("div",{class:Ce(["c-cube-overlay",{"c-cube-overlay--active":s.value}]),onWheel:fi(Z,["prevent"]),onMousedown:nt,onTouchstart:fi(nt,["prevent"])},[h("div",Xc,[h("div",{class:Ce(["c-cube",{"c-cube--animating":_.value}]),style:Pt(q.value)},[h("div",Jc,[s.value&&U(0)?(pe(),we("iframe",Zc)):ft("",!0)]),h("div",Qc,[s.value&&U(1)?(pe(),we("iframe",{key:0,src:I.right,class:"c-cube__iframe",title:"Neon Cube"},null,8,ef)):ft("",!0)]),h("div",tf,[s.value&&U(2)?(pe(),we("iframe",{key:0,src:I.back,class:"c-cube__iframe",title:"Perspectives"},null,8,nf)):ft("",!0)]),$[0]||($[0]=h("div",{class:"c-cube__face c-cube__face--left"},[h("div",{class:"c-cube__placeholder c-cube__placeholder--gradient-1"},[h("h2",null,"Coming Soon"),h("p",null,"Future content")])],-1)),$[1]||($[1]=h("div",{class:"c-cube__face c-cube__face--top"},[h("div",{class:"c-cube__placeholder c-cube__placeholder--gradient-2"},[h("h2",null,"Projects"),h("p",null,"View from above")])],-1)),$[2]||($[2]=h("div",{class:"c-cube__face c-cube__face--bottom"},[h("div",{class:"c-cube__placeholder c-cube__placeholder--gradient-3"},[h("h2",null,"Contact"),h("p",null,"Get in touch")])],-1))],6)]),s.value?(pe(),we("div",of,Fe(p.value?"Isometric View":`${H[f.value]} Face`),1)):ft("",!0),s.value?(pe(),we("div",sf,[...$[3]||($[3]=[h("span",null,"Drag to rotate",-1),h("span",{class:"c-cube-hint__separator"},"|",-1),h("span",null,"Pinch/Scroll to zoom",-1),h("span",{class:"c-cube-hint__separator"},"|",-1),h("span",null,[h("kbd",null,"Q"),Ws(" close")],-1)])])):ft("",!0),s.value?(pe(),we("div",rf,[(pe(),we(Te,null,bs(H,(G,R)=>h("div",{key:G,class:Ce(["c-cube-indicator__dot",{"c-cube-indicator__dot--active":f.value===R}]),onClick:ie=>ue(R)},Fe(G),11,lf)),64))])):ft("",!0)],34)]))}}),cf={class:"app-container"},ff={class:"c-controls"},uf={class:"c-controls-row"},df=["value"],pf=["value"],vf={key:0,class:"c-slider-container"},hf=["value"],mf={class:"c-slider-label"},gf={class:"c-foreground-layer"};Wl(xn({__name:"App",setup(e){const t=se(!0),n=se(!1),o=B=>{B.target instanceof HTMLInputElement||B.target instanceof HTMLTextAreaElement||B.key.toLowerCase()==="q"&&!B.ctrlKey&&!B.metaKey&&!B.altKey&&(B.preventDefault(),n.value=!n.value)},s=()=>{n.value=!1};Vt(()=>{window.addEventListener("keydown",o)}),Tt(()=>{window.removeEventListener("keydown",o)});const i=se(23),r=se(0),l=se(50),c=se(!1),d=se(!1);let f=null;const p=se(!1);(()=>{p.value="ontouchstart"in window||navigator.maxTouchPoints>0})();const S=()=>{p.value||(f&&(clearTimeout(f),f=null),d.value=!0)},w=()=>{p.value||(f=window.setTimeout(()=>{d.value=!1,f=null},1e3))},y=()=>{f&&(clearTimeout(f),f=null),d.value=!d.value},P=[{value:0,label:"Mandelbulb"},{value:1,label:"Mandelbox"},{value:2,label:"Menger Sponge"},{value:3,label:"Sierpinski"},{value:4,label:"Kaleidoscope 3D"},{value:5,label:"Organic Hybrid"},{value:6,label:"Fractal Land"},{value:7,label:"+ Galaxy Nebula"},{value:8,label:"+ Infinite Tunnel"},{value:9,label:"+ Plasma Fractal"},{value:10,label:"+ Circuits"},{value:11,label:"+ Metaballs"},{value:12,label:"+ Volumetric Lines"},{value:13,label:"+ Disco Tunnel"},{value:14,label:"+ Speed Drive"},{value:15,label:"+ Hot Rocks"},{value:16,label:"+ Server Room"},{value:17,label:"+ Remnant X"},{value:18,label:"+ Kali Set"},{value:19,label:"+ Generators"},{value:20,label:"+ Simplicity Galaxy"},{value:21,label:"+ Ribbons"},{value:22,label:"+ Twisted Rings"},{value:23,label:"+ Waves Remix"},{value:24,label:"+ Dancing Metalights"},{value:25,label:"+ IO Blocks"},{value:26,label:"+ Beating Circles"},{value:27,label:"+ Circle Wave"},{value:28,label:"+ Soundflower"},{value:29,label:"+ Polar Beats"},{value:30,label:"+ Undulant Spectre"},{value:31,label:"+ Revision 2015"},{value:32,label:"+ Gameboy Style"},{value:33,label:"+ Electric Storm"},{value:34,label:"+ Vortex"},{value:35,label:"+ Neon Grid"},{value:36,label:"+ Matrix Rain"},{value:37,label:"+ Fire"},{value:38,label:"+ Aurora"},{value:39,label:"+ Wormhole"},{value:40,label:"+ Hexagons"},{value:41,label:"+ Bubbles"},{value:42,label:"+ Lightning"},{value:43,label:"+ Kaleidoscope 2D"},{value:44,label:"+ Starfield"},{value:45,label:"+ Liquid Metal"},{value:46,label:"+ Fractal Tree"},{value:47,label:"+ Voronoi"},{value:48,label:"+ Psychedelic"},{value:49,label:"+ Energy Field"}],C=W(()=>({opacity:l.value/100,filter:`brightness(${.3+l.value/100*.7})`})),H=()=>{t.value=!t.value},I=()=>{c.value=!c.value},z=B=>{const L=B.target;i.value=parseInt(L.value),r.value++},U=B=>{const L=B.target;l.value=parseInt(L.value)};return(B,L)=>(pe(),we("div",cf,[h("div",ff,[h("button",{class:Ce(["c-menu-toggle",{"c-menu-toggle--open":c.value}]),onClick:I},[...L[1]||(L[1]=[h("span",{class:"c-hamburger-line"},null,-1),h("span",{class:"c-hamburger-line"},null,-1),h("span",{class:"c-hamburger-line"},null,-1)])],2),h("div",{class:Ce(["c-menu-panel",{"c-menu-panel--visible":c.value}])},[h("div",uf,[h("select",{class:"c-fractal-select",onChange:z,value:i.value},[(pe(),we(Te,null,bs(P,Y=>h("option",{key:Y.value,value:Y.value},Fe(Y.label),9,pf)),64))],40,df),h("button",{class:"c-fractal-toggle",onClick:H},Fe(t.value?"ON":"OFF"),1)]),t.value?(pe(),we("div",vf,[L[2]||(L[2]=h("span",{class:"c-slider-label"},"Intensity",-1)),h("input",{type:"range",class:"c-brightness-slider",min:"10",max:"100",value:l.value,onInput:U},null,40,hf),h("span",mf,Fe(l.value)+"%",1)])):ft("",!0)],2)]),h("div",{class:Ce(["c-background-layer",{"c-background-layer--hidden":!t.value}]),style:Pt(C.value)},[t.value?(pe(),ho(qa,{key:r.value,mode:i.value},null,8,["mode"])):ft("",!0)],6),h("div",gf,[Ee(qc)]),h("div",{class:"c-nav-footer",onMouseenter:S,onMouseleave:w},[h("button",{class:Ce(["c-nav-toggle",{"c-nav-toggle--open":d.value}]),onClick:y},[...L[3]||(L[3]=[h("span",{class:"c-nav-arrow"},"↑",-1)])],2),h("div",{class:Ce(["c-nav-menu",{"c-nav-menu--visible":d.value}])},[...L[4]||(L[4]=[h("a",{href:"https://diegonmarcos.github.io/myprofile/",class:"c-nav-button",target:"_blank",rel:"noopener noreferrer"}," Profile ",-1),h("a",{href:"https://diegonmarcos.github.io/linktree/",class:"c-nav-button",target:"_blank",rel:"noopener noreferrer"}," Linktree ",-1),h("a",{href:"https://diegonmarcos.github.io/landpage/",class:"c-nav-button",target:"_blank",rel:"noopener noreferrer"}," Landpage ",-1)])],2)],32),h("button",{class:"c-cube-trigger",onClick:L[0]||(L[0]=Y=>n.value=!0),title:"Cube View (Q)"},[...L[5]||(L[5]=[h("svg",{viewBox:"0 0 24 24",width:"20",height:"20",fill:"none",stroke:"currentColor","stroke-width":"2"},[h("path",{d:"M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"})],-1),h("span",{class:"c-cube-trigger__key"},"Q",-1)])]),Ee(af,{active:n.value,onClose:s},null,8,["active"])]))}})).mount("#app")})();
