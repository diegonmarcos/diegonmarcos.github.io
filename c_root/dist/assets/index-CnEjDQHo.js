(function(){"use strict";var To=document.createElement("style");To.textContent=`.bio-fractal-canvas[data-v-1ee27525]{width:100%;height:100%;display:block}@keyframes pv-shimmer-65cb23ba{0%,to{opacity:.6}50%{opacity:1}}@keyframes pv-glow-pulse-65cb23ba{0%,to{filter:drop-shadow(0 0 3px currentColor)}50%{filter:drop-shadow(0 0 12px currentColor)}}@keyframes pv-dash-flow-65cb23ba{0%{stroke-dashoffset:0}to{stroke-dashoffset:-20}}@keyframes pv-point-pulse-65cb23ba{0%,to{r:6;opacity:1}50%{r:9;opacity:.8}}.pv-shimmer[data-v-65cb23ba]{animation:pv-shimmer-65cb23ba 2s ease-in-out infinite}.pv-glow-pulse[data-v-65cb23ba]{animation:pv-glow-pulse-65cb23ba 1.5s ease-in-out infinite}.pv-dash-flow[data-v-65cb23ba]{animation:pv-dash-flow-65cb23ba 1s linear infinite}.pv-point-pulse[data-v-65cb23ba]{animation:pv-point-pulse-65cb23ba .8s ease-in-out infinite}.pv-container[data-v-65cb23ba]{width:100%;height:100%;display:flex;flex-direction:column;align-items:center;justify-content:center;padding:10px;overflow:hidden;background:transparent}.pv-title[data-v-65cb23ba]{text-align:center;margin-bottom:16px;padding:0 16px;width:100%;max-width:840px}.pv-title h1[data-v-65cb23ba],.pv-title h2[data-v-65cb23ba]{font-size:clamp(1.4rem,4.5vw,2rem);font-weight:700;line-height:1.3;margin:0}.pv-title-gradient-1[data-v-65cb23ba]{background:linear-gradient(to right,#a855f7,#ec4899,#22d3ee);-webkit-background-clip:text;-webkit-text-fill-color:transparent;background-clip:text}.pv-title-gradient-2[data-v-65cb23ba]{background:linear-gradient(to right,#22d3ee,#a855f7,#ec4899);-webkit-background-clip:text;-webkit-text-fill-color:transparent;background-clip:text}.pv-svg-container[data-v-65cb23ba]{position:relative;width:100%;max-width:840px;height:auto;aspect-ratio:840/640;flex-shrink:1}.pv-svg-container svg[data-v-65cb23ba]{width:100%;height:100%}.pv-values[data-v-65cb23ba]{margin-top:16px;width:100%;max-width:580px;text-align:center;padding:0 16px}.pv-values-main[data-v-65cb23ba]{text-align:center;margin-bottom:20px}.pv-values-text[data-v-65cb23ba]{font-size:.9rem;font-family:Times New Roman,serif}.pv-values-f[data-v-65cb23ba]{color:#a855f7;font-style:italic}.pv-values-punctuation[data-v-65cb23ba]{color:#d1d5db}.pv-values-t[data-v-65cb23ba]{color:#a855f7;font-style:italic}.pv-values-real[data-v-65cb23ba]{color:#fb923c}.pv-values-imag[data-v-65cb23ba]{color:#22d3d3}.pv-values-i[data-v-65cb23ba]{color:#22d3d3;font-style:italic}.pv-values-time[data-v-65cb23ba]{text-align:center}.pv-values-time-text[data-v-65cb23ba]{font-size:.85rem;font-family:Times New Roman,serif}.pv-values-time-t[data-v-65cb23ba]{color:#a855f7;font-style:italic}.pv-values-time-punctuation[data-v-65cb23ba]{color:#9ca3af}.pv-values-time-value[data-v-65cb23ba]{color:#d1d5db}.pv-values-time-period[data-v-65cb23ba]{color:#a855f7;font-style:italic}*{box-sizing:border-box;margin:0;padding:0}html,body{width:100%;height:100%;overflow:hidden}body{background-color:#000;font-family:-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,sans-serif;color:#fff}button{border:none;background:none;padding:0;cursor:pointer;font:inherit}select{font-family:-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,sans-serif}canvas{display:block}.o-fullscreen{width:100%;height:100%;position:relative}.o-layer{position:absolute;top:0;left:0;width:100%;height:100%}.o-layer--background{z-index:0}.o-layer--foreground{z-index:1;display:flex;align-items:center;justify-content:center;pointer-events:none}.o-fixed{position:fixed}.c-background-layer{position:absolute;top:0;left:0;width:100%;height:100%;z-index:0;transition-property:opacity,filter;transition-duration:.3s;transition-timing-function:ease}.c-background-layer--hidden{opacity:0!important;pointer-events:none}.c-background-layer canvas{width:100%!important;height:100%!important}.c-foreground-layer{position:absolute;top:0;left:0;width:100%;height:100%;z-index:1;display:flex;align-items:center;justify-content:center;pointer-events:none}.c-controls{position:fixed;top:10px;right:10px;z-index:100;display:flex;flex-direction:column;gap:8px;align-items:flex-end}.c-menu-toggle{background:transparent!important;backdrop-filter:none;-webkit-backdrop-filter:none;transition-property:background,transform;transition-duration:.3s;transition-timing-function:ease;border:none;color:#fff;width:36px;height:36px;border-radius:8px;display:flex;align-items:center;justify-content:center;flex-direction:column;gap:4px;padding:8px}.c-menu-toggle:hover{background:transparent!important}.c-menu-toggle:hover .c-hamburger-line{box-shadow:0 0 8px #fff6}.c-menu-toggle--open{transform:rotate(90deg)}.c-hamburger-line{display:block;width:100%;height:2px;background:#fffc;border-radius:1px;transition-property:background,box-shadow;transition-duration:.3s;transition-timing-function:ease;box-shadow:0 0 4px #fff3}.c-menu-panel{display:flex;flex-direction:column;gap:8px;align-items:flex-end;max-height:0;overflow:hidden;opacity:0;transition-property:max-height,opacity;transition-duration:.3s;transition-timing-function:ease}.c-menu-panel--visible{max-height:200px;opacity:1}.c-controls-row{display:flex;gap:8px;align-items:center}.c-fractal-toggle{background:#ffffff1a;-webkit-backdrop-filter:blur(4px);backdrop-filter:blur(4px);transition-property:background;transition-duration:.3s;transition-timing-function:ease;border:1px solid rgba(255,255,255,.3);color:#fff;padding:8px 12px;border-radius:6px;font-size:12px}.c-fractal-toggle:hover{background:#fff3}.c-fractal-select{background:#ffffff1a;-webkit-backdrop-filter:blur(4px);backdrop-filter:blur(4px);border:1px solid rgba(255,255,255,.3);color:#fff;padding:8px 28px 8px 12px;border-radius:6px;font-size:12px;outline:none;-webkit-appearance:none;-moz-appearance:none;appearance:none;background-image:url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' fill='white' viewBox='0 0 16 16'%3E%3Cpath d='M8 11L3 6h10l-5 5z'/%3E%3C/svg%3E");background-repeat:no-repeat;background-position:right 8px center;transition-property:background-color;transition-duration:.3s;transition-timing-function:ease}.c-fractal-select:hover{background-color:#fff3}.c-fractal-select option{background:#1a1a2e;color:#fff}.c-slider-container{background:#ffffff1a;-webkit-backdrop-filter:blur(4px);backdrop-filter:blur(4px);display:flex;align-items:center;gap:8px;border:1px solid rgba(255,255,255,.3);padding:6px 12px;border-radius:6px}.c-slider-label{color:#fff;font-size:11px;white-space:nowrap}.c-brightness-slider{-webkit-appearance:none;-moz-appearance:none;appearance:none;width:80px;height:4px;border-radius:2px;background:#ffffff4d;outline:none;cursor:pointer}.c-brightness-slider::-webkit-slider-thumb{-webkit-appearance:none;-moz-appearance:none;appearance:none;width:14px;height:14px;border-radius:50%;background:#fff;cursor:pointer;box-shadow:0 1px 3px #0000004d}.c-brightness-slider::-moz-range-thumb{width:14px;height:14px;border-radius:50%;background:#fff;cursor:pointer;border:none}.c-nav-footer{position:fixed;bottom:16px;left:50%;transform:translate(-50%);z-index:100;display:flex;flex-direction:column;gap:12px;align-items:center;pointer-events:auto;padding:8px}.c-nav-toggle{position:relative;width:48px;height:48px;border:none;border-radius:50%;cursor:pointer;transform:translateY(0);transition:transform 3s cubic-bezier(.25,.1,.25,1),box-shadow .3s ease,border-color .3s ease;opacity:1!important;visibility:visible!important;background:transparent!important;backdrop-filter:none;-webkit-backdrop-filter:none;border:2px solid rgba(255,255,255,.8);box-shadow:0 0 20px #ffffff4d}.c-nav-toggle:active{transform:translateY(0) scale(1.05);box-shadow:0 0 8px #ffffff1a}.c-nav-toggle--open{transform:translateY(-30px) scale(1.05)!important;box-shadow:0 0 20px #ffffff40;border-color:#ffffffb3;transition:transform 3s cubic-bezier(.25,.1,.25,1)!important}.c-nav-toggle--open .c-nav-arrow{animation:arrow-bounce-inverted 1.5s ease-in-out infinite}.c-nav-arrow{display:inline-block;font-size:1.8rem;color:#fff;font-weight:700;text-shadow:0 2px 6px rgba(0,0,0,.6);animation:arrow-bounce 1.5s ease-in-out infinite;opacity:1!important}.c-nav-menu{display:flex;flex-wrap:nowrap;gap:8px;max-height:0;overflow:visible;opacity:0;transform:translateY(15px);transition:max-height 1s cubic-bezier(.25,.1,.25,1),opacity .8s cubic-bezier(.25,.1,.25,1),transform 1s cubic-bezier(.25,.1,.25,1);justify-content:center;padding:8px 0}.c-nav-menu--visible{max-height:250px;opacity:1;transform:translateY(0);transition:max-height 3s cubic-bezier(.25,.1,.25,1),opacity 2s cubic-bezier(.25,.1,.25,1) .2s,transform 2.5s cubic-bezier(.25,.1,.25,1)}.c-nav-button{position:relative;padding:10px 16px;font-size:.8rem;font-weight:600;text-decoration:none;color:#fff;border-radius:10px;transition:all .4s cubic-bezier(.4,0,.2,1);overflow:hidden;white-space:nowrap;flex-shrink:0;background:transparent!important;backdrop-filter:none;-webkit-backdrop-filter:none;border:2px solid rgba(255,255,255,.4);box-shadow:0 0 10px #ffffff1f}.c-nav-button:before{content:"";position:absolute;top:0;left:-100%;width:100%;height:100%;background:linear-gradient(90deg,transparent,rgba(255,255,255,.3),transparent);animation:shimmer-slide 3s ease-in-out infinite}.c-nav-button:hover{transform:translateY(-3px) scale(1.05);background:transparent!important;box-shadow:0 0 20px #ffffff40;border-color:#fff9}.c-nav-button:active{transform:translateY(-1px) scale(1.02);background:transparent!important;box-shadow:0 0 12px #ffffff26}.c-nav-button{text-shadow:0 1px 2px rgba(0,0,0,.3)}.c-nav-menu:not(.c-nav-menu--visible) .c-nav-button{opacity:0!important;pointer-events:none}.c-nav-menu--visible .c-nav-button{opacity:1;transform:translateY(0) scale(1);transition:opacity 1s cubic-bezier(.25,.1,.25,1),transform 1s cubic-bezier(.25,.1,.25,1)}.c-nav-menu--visible .c-nav-button:nth-child(1){transition-delay:0s}.c-nav-menu--visible .c-nav-button:nth-child(2){transition-delay:1s}.c-nav-menu--visible .c-nav-button:nth-child(3){transition-delay:2s}@keyframes shimmer-slide{0%{left:-100%}50%,to{left:100%}}@keyframes arrow-bounce{0%,to{transform:translateY(0)}50%{transform:translateY(-6px)}}@keyframes arrow-bounce-inverted{0%,to{transform:rotate(180deg) translateY(0)}50%{transform:rotate(180deg) translateY(6px)}}@media (max-width: 768px){.c-nav-toggle{width:30px;height:30px}.c-nav-arrow{font-size:1.15rem}.c-nav-menu{gap:5px}.c-nav-button{padding:6px 10px;font-size:.51rem;border-radius:6px}}@keyframes twinkle{0%,to{opacity:.3}50%{opacity:1}}@keyframes drift{0%{transform:translateY(0) translate(0)}to{transform:translateY(-100vh) translate(20px)}}.c-cube-overlay{position:fixed;top:0;right:0;bottom:0;left:0;z-index:9999;background:radial-gradient(ellipse at center,#0d1b2a,#020408);opacity:0;visibility:hidden;transition:opacity .3s ease,visibility .3s ease;display:flex;align-items:center;justify-content:center;overflow:hidden;touch-action:none;-webkit-user-select:none;user-select:none;transform:translateZ(0);-webkit-transform:translateZ(0);will-change:opacity,visibility;isolation:isolate;contain:layout style}.c-cube-overlay:before{content:"";position:absolute;top:0;right:0;bottom:0;left:0;pointer-events:none;background-image:radial-gradient(1px 1px at 10% 20%,rgba(255,255,255,.7) 50%,transparent 50%),radial-gradient(1px 1px at 25% 55%,rgba(255,255,255,.5) 50%,transparent 50%),radial-gradient(2px 2px at 40% 30%,rgba(150,180,255,.8) 50%,transparent 50%),radial-gradient(1px 1px at 55% 70%,rgba(255,255,255,.6) 50%,transparent 50%),radial-gradient(1px 1px at 70% 15%,rgba(255,255,255,.7) 50%,transparent 50%),radial-gradient(2px 2px at 85% 45%,rgba(255,200,150,.7) 50%,transparent 50%),radial-gradient(1px 1px at 15% 80%,rgba(255,255,255,.5) 50%,transparent 50%),radial-gradient(1px 1px at 60% 90%,rgba(255,255,255,.6) 50%,transparent 50%),radial-gradient(2px 2px at 90% 75%,rgba(200,150,255,.7) 50%,transparent 50%),radial-gradient(1px 1px at 35% 5%,rgba(255,255,255,.8) 50%,transparent 50%);background-size:250px 250px}.c-cube-overlay--active{opacity:1;visibility:visible}.c-cube-scene{width:min(70vw,70vh);height:min(70vw,70vh);perspective:1400px;perspective-origin:50% 50%;transform-style:preserve-3d;-webkit-transform-style:preserve-3d;transform:translateZ(0);-webkit-transform:translateZ(0);isolation:isolate}.c-cube{width:100%;height:100%;position:relative;transform-style:preserve-3d;-webkit-transform-style:preserve-3d;will-change:transform;-webkit-backface-visibility:hidden;backface-visibility:hidden;cursor:grab}.c-cube:active{cursor:grabbing}.c-cube--animating{pointer-events:none}.c-cube__face{position:absolute;width:min(70vw,70vh);height:min(70vw,70vh);-webkit-backface-visibility:hidden;backface-visibility:hidden;-webkit-transform-style:preserve-3d;transform-style:preserve-3d;contain:strict;content-visibility:auto;border:2px solid rgba(255,255,255,.2);overflow:hidden;background:#0a0a12;cursor:pointer;transition:border-color .2s ease,box-shadow .2s ease;will-change:transform,opacity}.c-cube__face:hover{border-color:#ffffff80;box-shadow:0 0 30px #6496ff4d}.c-cube__face--front{transform:translateZ(calc(min(70vw,70vh)/2))}.c-cube__face--back{transform:rotateY(180deg) translateZ(calc(min(70vw,70vh)/2))}.c-cube__face--right{transform:rotateY(90deg) translateZ(calc(min(70vw,70vh)/2))}.c-cube__face--left{transform:rotateY(-90deg) translateZ(calc(min(70vw,70vh)/2))}.c-cube__face--top{transform:rotateX(90deg) translateZ(calc(min(70vw,70vh)/2))}.c-cube__face--bottom{transform:rotateX(-90deg) translateZ(calc(min(70vw,70vh)/2))}.c-cube__content{width:100%;height:100%;overflow:hidden;pointer-events:none}.c-cube__iframe{width:100%;height:100%;border:none;pointer-events:none;background:#000;contain:strict;isolation:isolate;transform:translateZ(0);-webkit-transform:translateZ(0);will-change:contents}.c-cube__placeholder{width:100%;height:100%;display:flex;flex-direction:column;align-items:center;justify-content:center;background:linear-gradient(135deg,#1a1a2e,#16213e,#0f3460);color:#ffffffe6;text-align:center;padding:2rem}.c-cube__placeholder h2{font-size:clamp(1.5rem,4vw,2.5rem);font-weight:600;margin:0 0 .5rem;letter-spacing:.05em;text-shadow:0 2px 10px rgba(0,0,0,.5)}.c-cube__placeholder p{font-size:clamp(.875rem,2vw,1.125rem);opacity:.7;margin:0;letter-spacing:.1em;text-transform:uppercase}.c-cube__placeholder--gradient-1{background:linear-gradient(135deg,#2d1b4e,#1a1a2e,#0d2137)}.c-cube__placeholder--gradient-2{background:linear-gradient(135deg,#0f3460,#1a1a2e,#16213e)}.c-cube__placeholder--gradient-3{background:linear-gradient(135deg,#1e3a5f,#16213e,#1a1a2e)}.c-cube__placeholder--main{background:linear-gradient(135deg,#1a2a4a,#0f1a2e,#0a1020);border:2px dashed rgba(100,150,255,.3)}.c-cube__placeholder--main h2{color:#64b4ffe6}.c-cube__placeholder--main:hover{border-color:#6496ff99;background:linear-gradient(135deg,#1f3055,#142035,#0f1525)}.c-cube-exit{position:fixed;top:2rem;right:2rem;z-index:10000;display:flex;align-items:center;justify-content:center;width:48px;height:48px;padding:0;background:#ffffff1a;border:1px solid rgba(255,255,255,.25);border-radius:50%;cursor:pointer;color:#fffc;transition:all .3s ease;-webkit-backdrop-filter:blur(8px);backdrop-filter:blur(8px)}.c-cube-exit:hover{background:#ff646433;border-color:#ff646480;color:#fff;transform:scale(1.1)}.c-cube-exit:active{transform:scale(.95)}.c-cube-exit svg{transition:transform .2s ease}.c-cube-exit:hover svg{transform:rotate(90deg)}.c-cube-view-mode{position:fixed;top:50%;left:2rem;transform:translateY(-50%);padding:.75rem 1rem;background:#ffffff1a;-webkit-backdrop-filter:blur(10px);backdrop-filter:blur(10px);border-radius:8px;font-size:.75rem;color:#ffffffe6;letter-spacing:.1em;text-transform:uppercase;border:1px solid rgba(255,255,255,.15);writing-mode:vertical-rl;text-orientation:mixed}.c-cube-hint{position:fixed;bottom:2rem;left:50%;transform:translate(-50%);display:flex;align-items:center;gap:.75rem;padding:.75rem 1.5rem;background:#ffffff1a;-webkit-backdrop-filter:blur(10px);backdrop-filter:blur(10px);border-radius:2rem;font-size:.8rem;color:#fffc;letter-spacing:.05em;border:1px solid rgba(255,255,255,.15)}.c-cube-hint kbd{display:inline-flex;align-items:center;justify-content:center;min-width:1.5rem;height:1.5rem;padding:0 .4rem;background:#ffffff26;border-radius:4px;font-family:inherit;font-size:.75rem;font-weight:600;border:1px solid rgba(255,255,255,.2)}.c-cube-hint__separator{opacity:.4}.c-cube-indicator{position:fixed;top:2rem;left:50%;transform:translate(-50%);display:flex;gap:.5rem}.c-cube-indicator__dot{padding:.5rem 1rem;background:#ffffff1a;border:1px solid rgba(255,255,255,.2);border-radius:2rem;font-size:.7rem;text-transform:uppercase;letter-spacing:.1em;color:#fff9;cursor:pointer;transition:all .2s ease}.c-cube-indicator__dot:hover{background:#ffffff26;color:#ffffffe6}.c-cube-indicator__dot--active{background:#fff3;color:#fff;border-color:#fff6}.c-cube-trigger{position:fixed;bottom:20px;right:20px;z-index:100;display:flex;align-items:center;gap:8px;padding:10px 14px;background:#ffffff1a;border:1px solid rgba(255,255,255,.25);border-radius:12px;cursor:pointer;color:#fffc;transition:all .3s ease;-webkit-backdrop-filter:blur(8px);backdrop-filter:blur(8px)}.c-cube-trigger:hover{background:#ffffff26;border-color:#fff6;color:#fff;transform:scale(1.05)}.c-cube-trigger:active{transform:scale(.95)}.c-cube-trigger svg{transition:transform .3s ease}.c-cube-trigger:hover svg{transform:rotateY(15deg) rotateX(-10deg)}.c-cube-trigger__key{display:inline-flex;align-items:center;justify-content:center;min-width:20px;height:20px;padding:0 6px;background:#ffffff26;border:1px solid rgba(255,255,255,.3);border-radius:4px;font-size:11px;font-weight:600;font-family:inherit}.c-cube-app-preview{width:100%;height:100%;display:flex;align-items:center;justify-content:center;background:linear-gradient(135deg,#1a1a2e,#0a0a15);position:relative}.c-cube-app-preview__label{padding:1rem 2rem;background:#ffffff1a;border:1px solid rgba(255,255,255,.2);border-radius:8px;font-size:1rem;color:#ffffffe6;letter-spacing:.1em;text-transform:uppercase}@media (max-width: 768px){.c-cube-exit{top:1rem;right:1rem;width:40px;height:40px}.c-cube-exit svg{width:20px;height:20px}.c-cube-trigger{bottom:12px;right:12px;padding:8px 10px;gap:6px;border-radius:10px}.c-cube-trigger svg{width:16px;height:16px}.c-cube-trigger__key{min-width:18px;height:18px;font-size:10px}.c-cube-view-mode{left:.5rem;padding:.5rem .75rem;font-size:.6rem}.c-cube-hint{flex-wrap:wrap;justify-content:center;bottom:1rem;padding:.5rem 1rem;font-size:.7rem}.c-cube-indicator{top:1rem;flex-wrap:wrap;justify-content:center;max-width:90%}.c-cube-indicator__dot{padding:.4rem .75rem;font-size:.6rem}}.u-hidden{display:none!important}.u-invisible{visibility:hidden!important}.u-no-pointer{pointer-events:none!important}.u-pointer{pointer-events:auto!important}#app,.app-container{width:100%;height:100%;position:relative}
/*$vite$:1*/`,document.head.appendChild(To);var Ln=typeof document<"u"?document.currentScript:null;/**
* @vue/shared v3.5.27
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function Fn(e){const t=Object.create(null);for(const n of e.split(","))t[n]=1;return n=>n in t}const te={},_t=[],je=()=>{},Ao=()=>!1,nn=e=>e.charCodeAt(0)===111&&e.charCodeAt(1)===110&&(e.charCodeAt(2)>122||e.charCodeAt(2)<97),Dn=e=>e.startsWith("onUpdate:"),ce=Object.assign,Nn=(e,t)=>{const n=e.indexOf(t);n>-1&&e.splice(n,1)},ki=Object.prototype.hasOwnProperty,Z=(e,t)=>ki.call(e,t),H=Array.isArray,wt=e=>on(e)==="[object Map]",Co=e=>on(e)==="[object Set]",j=e=>typeof e=="function",le=e=>typeof e=="string",rt=e=>typeof e=="symbol",re=e=>e!==null&&typeof e=="object",Eo=e=>(re(e)||j(e))&&j(e.then)&&j(e.catch),Mo=Object.prototype.toString,on=e=>Mo.call(e),Si=e=>on(e).slice(8,-1),Ro=e=>on(e)==="[object Object]",$n=e=>le(e)&&e!=="NaN"&&e[0]!=="-"&&""+parseInt(e,10)===e,Ot=Fn(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),sn=e=>{const t=Object.create(null);return n=>t[n]||(t[n]=e(n))},zi=/-\w/g,lt=sn(e=>e.replace(zi,t=>t.slice(1).toUpperCase())),Ti=/\B([A-Z])/g,ht=sn(e=>e.replace(Ti,"-$1").toLowerCase()),Io=sn(e=>e.charAt(0).toUpperCase()+e.slice(1)),jn=sn(e=>e?`on${Io(e)}`:""),at=(e,t)=>!Object.is(e,t),Bn=(e,...t)=>{for(let n=0;n<e.length;n++)e[n](...t)},Po=(e,t,n,o=!1)=>{Object.defineProperty(e,t,{configurable:!0,enumerable:!1,writable:o,value:n})},Ai=e=>{const t=parseFloat(e);return isNaN(t)?e:t};let Oo;const rn=()=>Oo||(Oo=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function Lt(e){if(H(e)){const t={};for(let n=0;n<e.length;n++){const o=e[n],s=le(o)?Ri(o):Lt(o);if(s)for(const i in s)t[i]=s[i]}return t}else if(le(e)||re(e))return e}const Ci=/;(?![^(]*\))/g,Ei=/:([^]+)/,Mi=/\/\*[^]*?\*\//g;function Ri(e){const t={};return e.replace(Mi,"").split(Ci).forEach(n=>{if(n){const o=n.split(Ei);o.length>1&&(t[o[0].trim()]=o[1].trim())}}),t}function Oe(e){let t="";if(le(e))t=e;else if(H(e))for(let n=0;n<e.length;n++){const o=Oe(e[n]);o&&(t+=o+" ")}else if(re(e))for(const n in e)e[n]&&(t+=n+" ");return t.trim()}const Ii=Fn("itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly");function Lo(e){return!!e||e===""}const Fo=e=>!!(e&&e.__v_isRef===!0),Be=e=>le(e)?e:e==null?"":H(e)||re(e)&&(e.toString===Mo||!j(e.toString))?Fo(e)?Be(e.value):JSON.stringify(e,Do,2):String(e),Do=(e,t)=>Fo(t)?Do(e,t.value):wt(t)?{[`Map(${t.size})`]:[...t.entries()].reduce((n,[o,s],i)=>(n[Hn(o,i)+" =>"]=s,n),{})}:Co(t)?{[`Set(${t.size})`]:[...t.values()].map(n=>Hn(n))}:rt(t)?Hn(t):re(t)&&!H(t)&&!Ro(t)?String(t):t,Hn=(e,t="")=>{var n;return rt(e)?`Symbol(${(n=e.description)!=null?n:t})`:e};/**
* @vue/reactivity v3.5.27
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let we;class Pi{constructor(t=!1){this.detached=t,this._active=!0,this._on=0,this.effects=[],this.cleanups=[],this._isPaused=!1,this.parent=we,!t&&we&&(this.index=(we.scopes||(we.scopes=[])).push(this)-1)}get active(){return this._active}pause(){if(this._active){this._isPaused=!0;let t,n;if(this.scopes)for(t=0,n=this.scopes.length;t<n;t++)this.scopes[t].pause();for(t=0,n=this.effects.length;t<n;t++)this.effects[t].pause()}}resume(){if(this._active&&this._isPaused){this._isPaused=!1;let t,n;if(this.scopes)for(t=0,n=this.scopes.length;t<n;t++)this.scopes[t].resume();for(t=0,n=this.effects.length;t<n;t++)this.effects[t].resume()}}run(t){if(this._active){const n=we;try{return we=this,t()}finally{we=n}}}on(){++this._on===1&&(this.prevScope=we,we=this)}off(){this._on>0&&--this._on===0&&(we=this.prevScope,this.prevScope=void 0)}stop(t){if(this._active){this._active=!1;let n,o;for(n=0,o=this.effects.length;n<o;n++)this.effects[n].stop();for(this.effects.length=0,n=0,o=this.cleanups.length;n<o;n++)this.cleanups[n]();if(this.cleanups.length=0,this.scopes){for(n=0,o=this.scopes.length;n<o;n++)this.scopes[n].stop(!0);this.scopes.length=0}if(!this.detached&&this.parent&&!t){const s=this.parent.scopes.pop();s&&s!==this&&(this.parent.scopes[this.index]=s,s.index=this.index)}this.parent=void 0}}}function Oi(){return we}let ne;const Un=new WeakSet;class No{constructor(t){this.fn=t,this.deps=void 0,this.depsTail=void 0,this.flags=5,this.next=void 0,this.cleanup=void 0,this.scheduler=void 0,we&&we.active&&we.effects.push(this)}pause(){this.flags|=64}resume(){this.flags&64&&(this.flags&=-65,Un.has(this)&&(Un.delete(this),this.trigger()))}notify(){this.flags&2&&!(this.flags&32)||this.flags&8||jo(this)}run(){if(!(this.flags&1))return this.fn();this.flags|=2,Vo(this),Bo(this);const t=ne,n=Le;ne=this,Le=!0;try{return this.fn()}finally{Ho(this),ne=t,Le=n,this.flags&=-3}}stop(){if(this.flags&1){for(let t=this.deps;t;t=t.nextDep)Kn(t);this.deps=this.depsTail=void 0,Vo(this),this.onStop&&this.onStop(),this.flags&=-2}}trigger(){this.flags&64?Un.add(this):this.scheduler?this.scheduler():this.runIfDirty()}runIfDirty(){Wn(this)&&this.run()}get dirty(){return Wn(this)}}let $o=0,Ft,Dt;function jo(e,t=!1){if(e.flags|=8,t){e.next=Dt,Dt=e;return}e.next=Ft,Ft=e}function Gn(){$o++}function Vn(){if(--$o>0)return;if(Dt){let t=Dt;for(Dt=void 0;t;){const n=t.next;t.next=void 0,t.flags&=-9,t=n}}let e;for(;Ft;){let t=Ft;for(Ft=void 0;t;){const n=t.next;if(t.next=void 0,t.flags&=-9,t.flags&1)try{t.trigger()}catch(o){e||(e=o)}t=n}}if(e)throw e}function Bo(e){for(let t=e.deps;t;t=t.nextDep)t.version=-1,t.prevActiveLink=t.dep.activeLink,t.dep.activeLink=t}function Ho(e){let t,n=e.depsTail,o=n;for(;o;){const s=o.prevDep;o.version===-1?(o===n&&(n=s),Kn(o),Li(o)):t=o,o.dep.activeLink=o.prevActiveLink,o.prevActiveLink=void 0,o=s}e.deps=t,e.depsTail=n}function Wn(e){for(let t=e.deps;t;t=t.nextDep)if(t.dep.version!==t.version||t.dep.computed&&(Uo(t.dep.computed)||t.dep.version!==t.version))return!0;return!!e._dirty}function Uo(e){if(e.flags&4&&!(e.flags&16)||(e.flags&=-17,e.globalVersion===Nt)||(e.globalVersion=Nt,!e.isSSR&&e.flags&128&&(!e.deps&&!e._dirty||!Wn(e))))return;e.flags|=2;const t=e.dep,n=ne,o=Le;ne=e,Le=!0;try{Bo(e);const s=e.fn(e._value);(t.version===0||at(s,e._value))&&(e.flags|=128,e._value=s,t.version++)}catch(s){throw t.version++,s}finally{ne=n,Le=o,Ho(e),e.flags&=-3}}function Kn(e,t=!1){const{dep:n,prevSub:o,nextSub:s}=e;if(o&&(o.nextSub=s,e.prevSub=void 0),s&&(s.prevSub=o,e.nextSub=void 0),n.subs===e&&(n.subs=o,!o&&n.computed)){n.computed.flags&=-5;for(let i=n.computed.deps;i;i=i.nextDep)Kn(i,!0)}!t&&!--n.sc&&n.map&&n.map.delete(n.key)}function Li(e){const{prevDep:t,nextDep:n}=e;t&&(t.nextDep=n,e.prevDep=void 0),n&&(n.prevDep=t,e.nextDep=void 0)}let Le=!0;const Go=[];function He(){Go.push(Le),Le=!1}function Ue(){const e=Go.pop();Le=e===void 0?!0:e}function Vo(e){const{cleanup:t}=e;if(e.cleanup=void 0,t){const n=ne;ne=void 0;try{t()}finally{ne=n}}}let Nt=0;class Fi{constructor(t,n){this.sub=t,this.dep=n,this.version=n.version,this.nextDep=this.prevDep=this.nextSub=this.prevSub=this.prevActiveLink=void 0}}class Yn{constructor(t){this.computed=t,this.version=0,this.activeLink=void 0,this.subs=void 0,this.map=void 0,this.key=void 0,this.sc=0,this.__v_skip=!0}track(t){if(!ne||!Le||ne===this.computed)return;let n=this.activeLink;if(n===void 0||n.sub!==ne)n=this.activeLink=new Fi(ne,this),ne.deps?(n.prevDep=ne.depsTail,ne.depsTail.nextDep=n,ne.depsTail=n):ne.deps=ne.depsTail=n,Wo(n);else if(n.version===-1&&(n.version=this.version,n.nextDep)){const o=n.nextDep;o.prevDep=n.prevDep,n.prevDep&&(n.prevDep.nextDep=o),n.prevDep=ne.depsTail,n.nextDep=void 0,ne.depsTail.nextDep=n,ne.depsTail=n,ne.deps===n&&(ne.deps=o)}return n}trigger(t){this.version++,Nt++,this.notify(t)}notify(t){Gn();try{for(let n=this.subs;n;n=n.prevSub)n.sub.notify()&&n.sub.dep.notify()}finally{Vn()}}}function Wo(e){if(e.dep.sc++,e.sub.flags&4){const t=e.dep.computed;if(t&&!e.dep.subs){t.flags|=20;for(let o=t.deps;o;o=o.nextDep)Wo(o)}const n=e.dep.subs;n!==e&&(e.prevSub=n,n&&(n.nextSub=e)),e.dep.subs=e}}const qn=new WeakMap,mt=Symbol(""),Xn=Symbol(""),$t=Symbol("");function de(e,t,n){if(Le&&ne){let o=qn.get(e);o||qn.set(e,o=new Map);let s=o.get(n);s||(o.set(n,s=new Yn),s.map=o,s.key=n),s.track()}}function et(e,t,n,o,s,i){const r=qn.get(e);if(!r){Nt++;return}const l=c=>{c&&c.trigger()};if(Gn(),t==="clear")r.forEach(l);else{const c=H(e),d=c&&$n(n);if(c&&n==="length"){const f=Number(o);r.forEach((p,w)=>{(w==="length"||w===$t||!rt(w)&&w>=f)&&l(p)})}else switch((n!==void 0||r.has(void 0))&&l(r.get(n)),d&&l(r.get($t)),t){case"add":c?d&&l(r.get("length")):(l(r.get(mt)),wt(e)&&l(r.get(Xn)));break;case"delete":c||(l(r.get(mt)),wt(e)&&l(r.get(Xn)));break;case"set":wt(e)&&l(r.get(mt));break}}Vn()}function kt(e){const t=Y(e);return t===e?t:(de(t,"iterate",$t),Ie(e)?t:t.map(Fe))}function ln(e){return de(e=Y(e),"iterate",$t),e}function ct(e,t){return nt(e)?St(gt(e)?Fe(t):t):Fe(t)}const Di={__proto__:null,[Symbol.iterator](){return Zn(this,Symbol.iterator,e=>ct(this,e))},concat(...e){return kt(this).concat(...e.map(t=>H(t)?kt(t):t))},entries(){return Zn(this,"entries",e=>(e[1]=ct(this,e[1]),e))},every(e,t){return tt(this,"every",e,t,void 0,arguments)},filter(e,t){return tt(this,"filter",e,t,n=>n.map(o=>ct(this,o)),arguments)},find(e,t){return tt(this,"find",e,t,n=>ct(this,n),arguments)},findIndex(e,t){return tt(this,"findIndex",e,t,void 0,arguments)},findLast(e,t){return tt(this,"findLast",e,t,n=>ct(this,n),arguments)},findLastIndex(e,t){return tt(this,"findLastIndex",e,t,void 0,arguments)},forEach(e,t){return tt(this,"forEach",e,t,void 0,arguments)},includes(...e){return Jn(this,"includes",e)},indexOf(...e){return Jn(this,"indexOf",e)},join(e){return kt(this).join(e)},lastIndexOf(...e){return Jn(this,"lastIndexOf",e)},map(e,t){return tt(this,"map",e,t,void 0,arguments)},pop(){return jt(this,"pop")},push(...e){return jt(this,"push",e)},reduce(e,...t){return Ko(this,"reduce",e,t)},reduceRight(e,...t){return Ko(this,"reduceRight",e,t)},shift(){return jt(this,"shift")},some(e,t){return tt(this,"some",e,t,void 0,arguments)},splice(...e){return jt(this,"splice",e)},toReversed(){return kt(this).toReversed()},toSorted(e){return kt(this).toSorted(e)},toSpliced(...e){return kt(this).toSpliced(...e)},unshift(...e){return jt(this,"unshift",e)},values(){return Zn(this,"values",e=>ct(this,e))}};function Zn(e,t,n){const o=ln(e),s=o[t]();return o!==e&&!Ie(e)&&(s._next=s.next,s.next=()=>{const i=s._next();return i.done||(i.value=n(i.value)),i}),s}const Ni=Array.prototype;function tt(e,t,n,o,s,i){const r=ln(e),l=r!==e&&!Ie(e),c=r[t];if(c!==Ni[t]){const p=c.apply(e,i);return l?Fe(p):p}let d=n;r!==e&&(l?d=function(p,w){return n.call(this,ct(e,p),w,e)}:n.length>2&&(d=function(p,w){return n.call(this,p,w,e)}));const f=c.call(r,d,o);return l&&s?s(f):f}function Ko(e,t,n,o){const s=ln(e);let i=n;return s!==e&&(Ie(e)?n.length>3&&(i=function(r,l,c){return n.call(this,r,l,c,e)}):i=function(r,l,c){return n.call(this,r,ct(e,l),c,e)}),s[t](i,...o)}function Jn(e,t,n){const o=Y(e);de(o,"iterate",$t);const s=o[t](...n);return(s===-1||s===!1)&&no(n[0])?(n[0]=Y(n[0]),o[t](...n)):s}function jt(e,t,n=[]){He(),Gn();const o=Y(e)[t].apply(e,n);return Vn(),Ue(),o}const $i=Fn("__proto__,__v_isRef,__isVue"),Yo=new Set(Object.getOwnPropertyNames(Symbol).filter(e=>e!=="arguments"&&e!=="caller").map(e=>Symbol[e]).filter(rt));function ji(e){rt(e)||(e=String(e));const t=Y(this);return de(t,"has",e),t.hasOwnProperty(e)}class qo{constructor(t=!1,n=!1){this._isReadonly=t,this._isShallow=n}get(t,n,o){if(n==="__v_skip")return t.__v_skip;const s=this._isReadonly,i=this._isShallow;if(n==="__v_isReactive")return!s;if(n==="__v_isReadonly")return s;if(n==="__v_isShallow")return i;if(n==="__v_raw")return o===(s?i?ts:es:i?Qo:Jo).get(t)||Object.getPrototypeOf(t)===Object.getPrototypeOf(o)?t:void 0;const r=H(t);if(!s){let c;if(r&&(c=Di[n]))return c;if(n==="hasOwnProperty")return ji}const l=Reflect.get(t,n,fe(t)?t:o);if((rt(n)?Yo.has(n):$i(n))||(s||de(t,"get",n),i))return l;if(fe(l)){const c=r&&$n(n)?l:l.value;return s&&re(c)?to(c):c}return re(l)?s?to(l):eo(l):l}}class Xo extends qo{constructor(t=!1){super(!1,t)}set(t,n,o,s){let i=t[n];const r=H(t)&&$n(n);if(!this._isShallow){const d=nt(i);if(!Ie(o)&&!nt(o)&&(i=Y(i),o=Y(o)),!r&&fe(i)&&!fe(o))return d||(i.value=o),!0}const l=r?Number(n)<t.length:Z(t,n),c=Reflect.set(t,n,o,fe(t)?t:s);return t===Y(s)&&(l?at(o,i)&&et(t,"set",n,o):et(t,"add",n,o)),c}deleteProperty(t,n){const o=Z(t,n);t[n];const s=Reflect.deleteProperty(t,n);return s&&o&&et(t,"delete",n,void 0),s}has(t,n){const o=Reflect.has(t,n);return(!rt(n)||!Yo.has(n))&&de(t,"has",n),o}ownKeys(t){return de(t,"iterate",H(t)?"length":mt),Reflect.ownKeys(t)}}class Zo extends qo{constructor(t=!1){super(!0,t)}set(t,n){return!0}deleteProperty(t,n){return!0}}const Bi=new Xo,Hi=new Zo,Ui=new Xo(!0),Gi=new Zo(!0),Qn=e=>e,an=e=>Reflect.getPrototypeOf(e);function Vi(e,t,n){return function(...o){const s=this.__v_raw,i=Y(s),r=wt(i),l=e==="entries"||e===Symbol.iterator&&r,c=e==="keys"&&r,d=s[e](...o),f=n?Qn:t?St:Fe;return!t&&de(i,"iterate",c?Xn:mt),ce(Object.create(d),{next(){const{value:p,done:w}=d.next();return w?{value:p,done:w}:{value:l?[f(p[0]),f(p[1])]:f(p),done:w}}})}}function cn(e){return function(...t){return e==="delete"?!1:e==="clear"?void 0:this}}function Wi(e,t){const n={get(s){const i=this.__v_raw,r=Y(i),l=Y(s);e||(at(s,l)&&de(r,"get",s),de(r,"get",l));const{has:c}=an(r),d=t?Qn:e?St:Fe;if(c.call(r,s))return d(i.get(s));if(c.call(r,l))return d(i.get(l));i!==r&&i.get(s)},get size(){const s=this.__v_raw;return!e&&de(Y(s),"iterate",mt),s.size},has(s){const i=this.__v_raw,r=Y(i),l=Y(s);return e||(at(s,l)&&de(r,"has",s),de(r,"has",l)),s===l?i.has(s):i.has(s)||i.has(l)},forEach(s,i){const r=this,l=r.__v_raw,c=Y(l),d=t?Qn:e?St:Fe;return!e&&de(c,"iterate",mt),l.forEach((f,p)=>s.call(i,d(f),d(p),r))}};return ce(n,e?{add:cn("add"),set:cn("set"),delete:cn("delete"),clear:cn("clear")}:{add(s){!t&&!Ie(s)&&!nt(s)&&(s=Y(s));const i=Y(this);return an(i).has.call(i,s)||(i.add(s),et(i,"add",s,s)),this},set(s,i){!t&&!Ie(i)&&!nt(i)&&(i=Y(i));const r=Y(this),{has:l,get:c}=an(r);let d=l.call(r,s);d||(s=Y(s),d=l.call(r,s));const f=c.call(r,s);return r.set(s,i),d?at(i,f)&&et(r,"set",s,i):et(r,"add",s,i),this},delete(s){const i=Y(this),{has:r,get:l}=an(i);let c=r.call(i,s);c||(s=Y(s),c=r.call(i,s)),l&&l.call(i,s);const d=i.delete(s);return c&&et(i,"delete",s,void 0),d},clear(){const s=Y(this),i=s.size!==0,r=s.clear();return i&&et(s,"clear",void 0,void 0),r}}),["keys","values","entries",Symbol.iterator].forEach(s=>{n[s]=Vi(s,e,t)}),n}function fn(e,t){const n=Wi(e,t);return(o,s,i)=>s==="__v_isReactive"?!e:s==="__v_isReadonly"?e:s==="__v_raw"?o:Reflect.get(Z(n,s)&&s in o?n:o,s,i)}const Ki={get:fn(!1,!1)},Yi={get:fn(!1,!0)},qi={get:fn(!0,!1)},Xi={get:fn(!0,!0)},Jo=new WeakMap,Qo=new WeakMap,es=new WeakMap,ts=new WeakMap;function Zi(e){switch(e){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function Ji(e){return e.__v_skip||!Object.isExtensible(e)?0:Zi(Si(e))}function eo(e){return nt(e)?e:un(e,!1,Bi,Ki,Jo)}function Qi(e){return un(e,!1,Ui,Yi,Qo)}function to(e){return un(e,!0,Hi,qi,es)}function kf(e){return un(e,!0,Gi,Xi,ts)}function un(e,t,n,o,s){if(!re(e)||e.__v_raw&&!(t&&e.__v_isReactive))return e;const i=Ji(e);if(i===0)return e;const r=s.get(e);if(r)return r;const l=new Proxy(e,i===2?o:n);return s.set(e,l),l}function gt(e){return nt(e)?gt(e.__v_raw):!!(e&&e.__v_isReactive)}function nt(e){return!!(e&&e.__v_isReadonly)}function Ie(e){return!!(e&&e.__v_isShallow)}function no(e){return e?!!e.__v_raw:!1}function Y(e){const t=e&&e.__v_raw;return t?Y(t):e}function er(e){return!Z(e,"__v_skip")&&Object.isExtensible(e)&&Po(e,"__v_skip",!0),e}const Fe=e=>re(e)?eo(e):e,St=e=>re(e)?to(e):e;function fe(e){return e?e.__v_isRef===!0:!1}function oe(e){return ns(e,!1)}function tr(e){return ns(e,!0)}function ns(e,t){return fe(e)?e:new nr(e,t)}class nr{constructor(t,n){this.dep=new Yn,this.__v_isRef=!0,this.__v_isShallow=!1,this._rawValue=n?t:Y(t),this._value=n?t:Fe(t),this.__v_isShallow=n}get value(){return this.dep.track(),this._value}set value(t){const n=this._rawValue,o=this.__v_isShallow||Ie(t)||nt(t);t=o?t:Y(t),at(t,n)&&(this._rawValue=t,this._value=o?t:Fe(t),this.dep.trigger())}}function os(e){return fe(e)?e.value:e}const or={get:(e,t,n)=>t==="__v_raw"?e:os(Reflect.get(e,t,n)),set:(e,t,n,o)=>{const s=e[t];return fe(s)&&!fe(n)?(s.value=n,!0):Reflect.set(e,t,n,o)}};function ss(e){return gt(e)?e:new Proxy(e,or)}class sr{constructor(t,n,o){this.fn=t,this.setter=n,this._value=void 0,this.dep=new Yn(this),this.__v_isRef=!0,this.deps=void 0,this.depsTail=void 0,this.flags=16,this.globalVersion=Nt-1,this.next=void 0,this.effect=this,this.__v_isReadonly=!n,this.isSSR=o}notify(){if(this.flags|=16,!(this.flags&8)&&ne!==this)return jo(this,!0),!0}get value(){const t=this.dep.track();return Uo(this),t&&(t.version=this.dep.version),this._value}set value(t){this.setter&&this.setter(t)}}function ir(e,t,n=!1){let o,s;return j(e)?o=e:(o=e.get,s=e.set),new sr(o,s,n)}const dn={},pn=new WeakMap;let bt;function rr(e,t=!1,n=bt){if(n){let o=pn.get(n);o||pn.set(n,o=[]),o.push(e)}}function lr(e,t,n=te){const{immediate:o,deep:s,once:i,scheduler:r,augmentJob:l,call:c}=n,d=k=>s?k:Ie(k)||s===!1||s===0?ft(k,1):ft(k);let f,p,w,S,m=!1,x=!1;if(fe(e)?(p=()=>e.value,m=Ie(e)):gt(e)?(p=()=>d(e),m=!0):H(e)?(x=!0,m=e.some(k=>gt(k)||Ie(k)),p=()=>e.map(k=>{if(fe(k))return k.value;if(gt(k))return d(k);if(j(k))return c?c(k,2):k()})):j(e)?t?p=c?()=>c(e,2):e:p=()=>{if(w){He();try{w()}finally{Ue()}}const k=bt;bt=f;try{return c?c(e,3,[S]):e(S)}finally{bt=k}}:p=je,t&&s){const k=p,U=s===!0?1/0:s;p=()=>ft(k(),U)}const M=Oi(),R=()=>{f.stop(),M&&M.active&&Nn(M.effects,f)};if(i&&t){const k=t;t=(...U)=>{k(...U),R()}}let L=x?new Array(e.length).fill(dn):dn;const E=k=>{if(!(!(f.flags&1)||!f.dirty&&!k))if(t){const U=f.run();if(s||m||(x?U.some((B,D)=>at(B,L[D])):at(U,L))){w&&w();const B=bt;bt=f;try{const D=[U,L===dn?void 0:x&&L[0]===dn?[]:L,S];L=U,c?c(t,3,D):t(...D)}finally{bt=B}}}else f.run()};return l&&l(E),f=new No(p),f.scheduler=r?()=>r(E,!1):E,S=k=>rr(k,!1,f),w=f.onStop=()=>{const k=pn.get(f);if(k){if(c)c(k,4);else for(const U of k)U();pn.delete(f)}},t?o?E(!0):L=f.run():r?r(E.bind(null,!0),!0):f.run(),R.pause=f.pause.bind(f),R.resume=f.resume.bind(f),R.stop=R,R}function ft(e,t=1/0,n){if(t<=0||!re(e)||e.__v_skip||(n=n||new Map,(n.get(e)||0)>=t))return e;if(n.set(e,t),t--,fe(e))ft(e.value,t,n);else if(H(e))for(let o=0;o<e.length;o++)ft(e[o],t,n);else if(Co(e)||wt(e))e.forEach(o=>{ft(o,t,n)});else if(Ro(e)){for(const o in e)ft(e[o],t,n);for(const o of Object.getOwnPropertySymbols(e))Object.prototype.propertyIsEnumerable.call(e,o)&&ft(e[o],t,n)}return e}/**
* @vue/runtime-core v3.5.27
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/const Bt=[];let oo=!1;function Sf(e,...t){if(oo)return;oo=!0,He();const n=Bt.length?Bt[Bt.length-1].component:null,o=n&&n.appContext.config.warnHandler,s=ar();if(o)zt(o,n,11,[e+t.map(i=>{var r,l;return(l=(r=i.toString)==null?void 0:r.call(i))!=null?l:JSON.stringify(i)}).join(""),n&&n.proxy,s.map(({vnode:i})=>`at <${ni(n,i.type)}>`).join(`
`),s]);else{const i=[`[Vue warn]: ${e}`,...t];s.length&&i.push(`
`,...cr(s)),console.warn(...i)}Ue(),oo=!1}function ar(){let e=Bt[Bt.length-1];if(!e)return[];const t=[];for(;e;){const n=t[0];n&&n.vnode===e?n.recurseCount++:t.push({vnode:e,recurseCount:0});const o=e.component&&e.component.parent;e=o&&o.vnode}return t}function cr(e){const t=[];return e.forEach((n,o)=>{t.push(...o===0?[]:[`
`],...fr(n))}),t}function fr({vnode:e,recurseCount:t}){const n=t>0?`... (${t} recursive calls)`:"",o=e.component?e.component.parent==null:!1,s=` at <${ni(e.component,e.type,o)}`,i=">"+n;return e.props?[s,...ur(e.props),i]:[s+i]}function ur(e){const t=[],n=Object.keys(e);return n.slice(0,3).forEach(o=>{t.push(...is(o,e[o]))}),n.length>3&&t.push(" ..."),t}function is(e,t,n){return le(t)?(t=JSON.stringify(t),n?t:[`${e}=${t}`]):typeof t=="number"||typeof t=="boolean"||t==null?n?t:[`${e}=${t}`]:fe(t)?(t=is(e,Y(t.value),!0),n?t:[`${e}=Ref<`,t,">"]):j(t)?[`${e}=fn${t.name?`<${t.name}>`:""}`]:(t=Y(t),n?t:[`${e}=`,t])}function zt(e,t,n,o){try{return o?e(...o):e()}catch(s){Ht(s,t,n)}}function Ge(e,t,n,o){if(j(e)){const s=zt(e,t,n,o);return s&&Eo(s)&&s.catch(i=>{Ht(i,t,n)}),s}if(H(e)){const s=[];for(let i=0;i<e.length;i++)s.push(Ge(e[i],t,n,o));return s}}function Ht(e,t,n,o=!0){const s=t?t.vnode:null,{errorHandler:i,throwUnhandledErrorInProduction:r}=t&&t.appContext.config||te;if(t){let l=t.parent;const c=t.proxy,d=`https://vuejs.org/error-reference/#runtime-${n}`;for(;l;){const f=l.ec;if(f){for(let p=0;p<f.length;p++)if(f[p](e,c,d)===!1)return}l=l.parent}if(i){He(),zt(i,null,10,[e,c,d]),Ue();return}}dr(e,n,s,o,r)}function dr(e,t,n,o=!0,s=!1){if(s)throw e;console.error(e)}const he=[];let Ve=-1;const Tt=[];let ut=null,At=0;const rs=Promise.resolve();let vn=null;function pr(e){const t=vn||rs;return e?t.then(this?e.bind(this):e):t}function vr(e){let t=Ve+1,n=he.length;for(;t<n;){const o=t+n>>>1,s=he[o],i=Ut(s);i<e||i===e&&s.flags&2?t=o+1:n=o}return t}function so(e){if(!(e.flags&1)){const t=Ut(e),n=he[he.length-1];!n||!(e.flags&2)&&t>=Ut(n)?he.push(e):he.splice(vr(t),0,e),e.flags|=1,ls()}}function ls(){vn||(vn=rs.then(fs))}function hr(e){H(e)?Tt.push(...e):ut&&e.id===-1?ut.splice(At+1,0,e):e.flags&1||(Tt.push(e),e.flags|=1),ls()}function as(e,t,n=Ve+1){for(;n<he.length;n++){const o=he[n];if(o&&o.flags&2){if(e&&o.id!==e.uid)continue;he.splice(n,1),n--,o.flags&4&&(o.flags&=-2),o(),o.flags&4||(o.flags&=-2)}}}function cs(e){if(Tt.length){const t=[...new Set(Tt)].sort((n,o)=>Ut(n)-Ut(o));if(Tt.length=0,ut){ut.push(...t);return}for(ut=t,At=0;At<ut.length;At++){const n=ut[At];n.flags&4&&(n.flags&=-2),n.flags&8||n(),n.flags&=-2}ut=null,At=0}}const Ut=e=>e.id==null?e.flags&2?-1:1/0:e.id;function fs(e){try{for(Ve=0;Ve<he.length;Ve++){const t=he[Ve];t&&!(t.flags&8)&&(t.flags&4&&(t.flags&=-2),zt(t,t.i,t.i?15:14),t.flags&4||(t.flags&=-2))}}finally{for(;Ve<he.length;Ve++){const t=he[Ve];t&&(t.flags&=-2)}Ve=-1,he.length=0,cs(),vn=null,(he.length||Tt.length)&&fs()}}let We=null,us=null;function hn(e){const t=We;return We=e,us=e&&e.type.__scopeId||null,t}function mr(e,t=We,n){if(!t||e._n)return e;const o=(...s)=>{o._d&&Ks(-1);const i=hn(t);let r;try{r=e(...s)}finally{hn(i),o._d&&Ks(1)}return r};return o._n=!0,o._c=!0,o._d=!0,o}function xt(e,t,n,o){const s=e.dirs,i=t&&t.dirs;for(let r=0;r<s.length;r++){const l=s[r];i&&(l.oldValue=i[r].value);let c=l.dir[o];c&&(He(),Ge(c,n,8,[e.el,l,e,t]),Ue())}}function gr(e,t){if(pe){let n=pe.provides;const o=pe.parent&&pe.parent.provides;o===n&&(n=pe.provides=Object.create(o)),n[e]=t}}function mn(e,t,n=!1){const o=bl();if(o||Et){let s=Et?Et._context.provides:o?o.parent==null||o.ce?o.vnode.appContext&&o.vnode.appContext.provides:o.parent.provides:void 0;if(s&&e in s)return s[e];if(arguments.length>1)return n&&j(t)?t.call(o&&o.proxy):t}}const br=Symbol.for("v-scx"),xr=()=>mn(br);function gn(e,t,n){return ds(e,t,n)}function ds(e,t,n=te){const{immediate:o,deep:s,flush:i,once:r}=n,l=ce({},n),c=t&&o||!t&&i!=="post";let d;if(Rt){if(i==="sync"){const S=xr();d=S.__watcherHandles||(S.__watcherHandles=[])}else if(!c){const S=()=>{};return S.stop=je,S.resume=je,S.pause=je,S}}const f=pe;l.call=(S,m,x)=>Ge(S,f,m,x);let p=!1;i==="post"?l.scheduler=S=>{ge(S,f&&f.suspense)}:i!=="sync"&&(p=!0,l.scheduler=(S,m)=>{m?S():so(S)}),l.augmentJob=S=>{t&&(S.flags|=4),p&&(S.flags|=2,f&&(S.id=f.uid,S.i=f))};const w=lr(e,t,l);return Rt&&(d?d.push(w):c&&w()),w}function yr(e,t,n){const o=this.proxy,s=le(e)?e.includes(".")?ps(o,e):()=>o[e]:e.bind(o,o);let i;j(t)?i=t:(i=t.handler,n=t);const r=en(this),l=ds(s,i.bind(o),n);return r(),l}function ps(e,t){const n=t.split(".");return()=>{let o=e;for(let s=0;s<n.length&&o;s++)o=o[n[s]];return o}}const vs=Symbol("_vte"),_r=e=>e.__isTeleport,Gt=e=>e&&(e.disabled||e.disabled===""),hs=e=>e&&(e.defer||e.defer===""),ms=e=>typeof SVGElement<"u"&&e instanceof SVGElement,gs=e=>typeof MathMLElement=="function"&&e instanceof MathMLElement,io=(e,t)=>{const n=e&&e.to;return le(n)?t?t(n):null:n},bs={name:"Teleport",__isTeleport:!0,process(e,t,n,o,s,i,r,l,c,d){const{mc:f,pc:p,pbc:w,o:{insert:S,querySelector:m,createText:x,createComment:M}}=d,R=Gt(t.props);let{shapeFlag:L,children:E,dynamicChildren:k}=t;if(e==null){const U=t.el=x(""),B=t.anchor=x("");S(U,n,o),S(B,n,o);const D=(K,se)=>{L&16&&f(E,K,se,s,i,r,l,c)},q=()=>{const K=t.target=io(t.props,m),se=xs(K,t,x,S);K&&(r!=="svg"&&ms(K)?r="svg":r!=="mathml"&&gs(K)&&(r="mathml"),s&&s.isCE&&(s.ce._teleportTargets||(s.ce._teleportTargets=new Set)).add(K),R||(D(K,se),xn(t,!1)))};R&&(D(n,B),xn(t,!0)),hs(t.props)?(t.el.__isMounted=!1,ge(()=>{q(),delete t.el.__isMounted},i)):q()}else{if(hs(t.props)&&e.el.__isMounted===!1){ge(()=>{bs.process(e,t,n,o,s,i,r,l,c,d)},i);return}t.el=e.el,t.targetStart=e.targetStart;const U=t.anchor=e.anchor,B=t.target=e.target,D=t.targetAnchor=e.targetAnchor,q=Gt(e.props),K=q?n:B,se=q?U:D;if(r==="svg"||ms(B)?r="svg":(r==="mathml"||gs(B))&&(r="mathml"),k?(w(e.dynamicChildren,k,K,s,i,r,l),bo(e,t,!0)):c||p(e,t,K,se,s,i,r,l,!1),R)q?t.props&&e.props&&t.props.to!==e.props.to&&(t.props.to=e.props.to):bn(t,n,U,d,1);else if((t.props&&t.props.to)!==(e.props&&e.props.to)){const ve=t.target=io(t.props,m);ve&&bn(t,ve,null,d,0)}else q&&bn(t,B,D,d,1);xn(t,R)}},remove(e,t,n,{um:o,o:{remove:s}},i){const{shapeFlag:r,children:l,anchor:c,targetStart:d,targetAnchor:f,target:p,props:w}=e;if(p&&(s(d),s(f)),i&&s(c),r&16){const S=i||!Gt(w);for(let m=0;m<l.length;m++){const x=l[m];o(x,t,n,S,!!x.dynamicChildren)}}},move:bn,hydrate:wr};function bn(e,t,n,{o:{insert:o},m:s},i=2){i===0&&o(e.targetAnchor,t,n);const{el:r,anchor:l,shapeFlag:c,children:d,props:f}=e,p=i===2;if(p&&o(r,t,n),(!p||Gt(f))&&c&16)for(let w=0;w<d.length;w++)s(d[w],t,n,2);p&&o(l,t,n)}function wr(e,t,n,o,s,i,{o:{nextSibling:r,parentNode:l,querySelector:c,insert:d,createText:f}},p){function w(x,M,R,L){M.anchor=p(r(x),M,l(x),n,o,s,i),M.targetStart=R,M.targetAnchor=L}const S=t.target=io(t.props,c),m=Gt(t.props);if(S){const x=S._lpa||S.firstChild;if(t.shapeFlag&16)if(m)w(e,t,x,x&&r(x));else{t.anchor=r(e);let M=x;for(;M;){if(M&&M.nodeType===8){if(M.data==="teleport start anchor")t.targetStart=M;else if(M.data==="teleport anchor"){t.targetAnchor=M,S._lpa=t.targetAnchor&&r(t.targetAnchor);break}}M=r(M)}t.targetAnchor||xs(S,t,f,d),p(x&&r(x),t,S,n,o,s,i)}xn(t,m)}else m&&t.shapeFlag&16&&w(e,t,e,r(e));return t.anchor&&r(t.anchor)}const kr=bs;function xn(e,t){const n=e.ctx;if(n&&n.ut){let o,s;for(t?(o=e.el,s=e.anchor):(o=e.targetStart,s=e.targetAnchor);o&&o!==s;)o.nodeType===1&&o.setAttribute("data-v-owner",n.uid),o=o.nextSibling;n.ut()}}function xs(e,t,n,o){const s=t.targetStart=n(""),i=t.targetAnchor=n("");return s[vs]=i,e&&(o(s,e),o(i,e)),i}const Sr=Symbol("_leaveCb");function ro(e,t){e.shapeFlag&6&&e.component?(e.transition=t,ro(e.component.subTree,t)):e.shapeFlag&128?(e.ssContent.transition=t.clone(e.ssContent),e.ssFallback.transition=t.clone(e.ssFallback)):e.transition=t}function Vt(e,t){return j(e)?ce({name:e.name},t,{setup:e}):e}function lo(e){e.ids=[e.ids[0]+e.ids[2]+++"-",0,0]}const yn=new WeakMap;function Wt(e,t,n,o,s=!1){if(H(e)){e.forEach((m,x)=>Wt(m,t&&(H(t)?t[x]:t),n,o,s));return}if(Kt(o)&&!s){o.shapeFlag&512&&o.type.__asyncResolved&&o.component.subTree.component&&Wt(e,t,n,o.component.subTree);return}const i=o.shapeFlag&4?wo(o.component):o.el,r=s?null:i,{i:l,r:c}=e,d=t&&t.r,f=l.refs===te?l.refs={}:l.refs,p=l.setupState,w=Y(p),S=p===te?Ao:m=>Z(w,m);if(d!=null&&d!==c){if(ys(t),le(d))f[d]=null,S(d)&&(p[d]=null);else if(fe(d)){d.value=null;const m=t;m.k&&(f[m.k]=null)}}if(j(c))zt(c,l,12,[r,f]);else{const m=le(c),x=fe(c);if(m||x){const M=()=>{if(e.f){const R=m?S(c)?p[c]:f[c]:c.value;if(s)H(R)&&Nn(R,i);else if(H(R))R.includes(i)||R.push(i);else if(m)f[c]=[i],S(c)&&(p[c]=f[c]);else{const L=[i];c.value=L,e.k&&(f[e.k]=L)}}else m?(f[c]=r,S(c)&&(p[c]=r)):x&&(c.value=r,e.k&&(f[e.k]=r))};if(r){const R=()=>{M(),yn.delete(e)};R.id=-1,yn.set(e,R),ge(R,n)}else ys(e),M()}}}function ys(e){const t=yn.get(e);t&&(t.flags|=8,yn.delete(e))}const _s=e=>e.nodeType===8;rn().requestIdleCallback,rn().cancelIdleCallback;function zr(e,t){if(_s(e)&&e.data==="["){let n=1,o=e.nextSibling;for(;o;){if(o.nodeType===1){if(t(o)===!1)break}else if(_s(o))if(o.data==="]"){if(--n===0)break}else o.data==="["&&n++;o=o.nextSibling}}else t(e)}const Kt=e=>!!e.type.__asyncLoader;function Tr(e){j(e)&&(e={loader:e});const{loader:t,loadingComponent:n,errorComponent:o,delay:s=200,hydrate:i,timeout:r,suspensible:l=!0,onError:c}=e;let d=null,f,p=0;const w=()=>(p++,d=null,S()),S=()=>{let m;return d||(m=d=t().catch(x=>{if(x=x instanceof Error?x:new Error(String(x)),c)return new Promise((M,R)=>{c(x,()=>M(w()),()=>R(x),p+1)});throw x}).then(x=>m!==d&&d?d:(x&&(x.__esModule||x[Symbol.toStringTag]==="Module")&&(x=x.default),f=x,x)))};return Vt({name:"AsyncComponentWrapper",__asyncLoader:S,__asyncHydrate(m,x,M){let R=!1;(x.bu||(x.bu=[])).push(()=>R=!0);const L=()=>{R||M()},E=i?()=>{const k=i(L,U=>zr(m,U));k&&(x.bum||(x.bum=[])).push(k)}:L;f?E():S().then(()=>!x.isUnmounted&&E())},get __asyncResolved(){return f},setup(){const m=pe;if(lo(m),f)return()=>_n(f,m);const x=E=>{d=null,Ht(E,m,13,!o)};if(l&&m.suspense||Rt)return S().then(E=>()=>_n(E,m)).catch(E=>(x(E),()=>o?be(o,{error:E}):null));const M=oe(!1),R=oe(),L=oe(!!s);return s&&setTimeout(()=>{L.value=!1},s),r!=null&&setTimeout(()=>{if(!M.value&&!R.value){const E=new Error(`Async component timed out after ${r}ms.`);x(E),R.value=E}},r),S().then(()=>{M.value=!0,m.parent&&ao(m.parent.vnode)&&m.parent.update()}).catch(E=>{x(E),R.value=E}),()=>{if(M.value&&f)return _n(f,m);if(R.value&&o)return be(o,{error:R.value});if(n&&!L.value)return _n(n,m)}}})}function _n(e,t){const{ref:n,props:o,children:s,ce:i}=t.vnode,r=be(e,o,s);return r.ref=n,r.ce=i,delete t.vnode.ce,r}const ao=e=>e.type.__isKeepAlive;function Ar(e,t){ws(e,"a",t)}function Cr(e,t){ws(e,"da",t)}function ws(e,t,n=pe){const o=e.__wdc||(e.__wdc=()=>{let s=n;for(;s;){if(s.isDeactivated)return;s=s.parent}return e()});if(wn(t,o,n),n){let s=n.parent;for(;s&&s.parent;)ao(s.parent.vnode)&&Er(o,t,n,s),s=s.parent}}function Er(e,t,n,o){const s=wn(t,e,o,!0);Ct(()=>{Nn(o[t],s)},n)}function wn(e,t,n=pe,o=!1){if(n){const s=n[e]||(n[e]=[]),i=t.__weh||(t.__weh=(...r)=>{He();const l=en(n),c=Ge(t,n,e,r);return l(),Ue(),c});return o?s.unshift(i):s.push(i),i}}const ot=e=>(t,n=pe)=>{(!Rt||e==="sp")&&wn(e,(...o)=>t(...o),n)},Mr=ot("bm"),Yt=ot("m"),Rr=ot("bu"),Ir=ot("u"),Pr=ot("bum"),Ct=ot("um"),Or=ot("sp"),Lr=ot("rtg"),Fr=ot("rtc");function Dr(e,t=pe){wn("ec",e,t)}const Nr=Symbol.for("v-ndc");function ks(e,t,n,o){let s;const i=n,r=H(e);if(r||le(e)){const l=r&&gt(e);let c=!1,d=!1;l&&(c=!Ie(e),d=nt(e),e=ln(e)),s=new Array(e.length);for(let f=0,p=e.length;f<p;f++)s[f]=t(c?d?St(Fe(e[f])):Fe(e[f]):e[f],f,void 0,i)}else if(typeof e=="number"){s=new Array(e);for(let l=0;l<e;l++)s[l]=t(l+1,l,void 0,i)}else if(re(e))if(e[Symbol.iterator])s=Array.from(e,(l,c)=>t(l,c,void 0,i));else{const l=Object.keys(e);s=new Array(l.length);for(let c=0,d=l.length;c<d;c++){const f=l[c];s[c]=t(e[f],f,c,i)}}else s=[];return s}const co=e=>e?Qs(e)?wo(e):co(e.parent):null,qt=ce(Object.create(null),{$:e=>e,$el:e=>e.vnode.el,$data:e=>e.data,$props:e=>e.props,$attrs:e=>e.attrs,$slots:e=>e.slots,$refs:e=>e.refs,$parent:e=>co(e.parent),$root:e=>co(e.root),$host:e=>e.ce,$emit:e=>e.emit,$options:e=>As(e),$forceUpdate:e=>e.f||(e.f=()=>{so(e.update)}),$nextTick:e=>e.n||(e.n=pr.bind(e.proxy)),$watch:e=>yr.bind(e)}),fo=(e,t)=>e!==te&&!e.__isScriptSetup&&Z(e,t),$r={get({_:e},t){if(t==="__v_skip")return!0;const{ctx:n,setupState:o,data:s,props:i,accessCache:r,type:l,appContext:c}=e;if(t[0]!=="$"){const w=r[t];if(w!==void 0)switch(w){case 1:return o[t];case 2:return s[t];case 4:return n[t];case 3:return i[t]}else{if(fo(o,t))return r[t]=1,o[t];if(s!==te&&Z(s,t))return r[t]=2,s[t];if(Z(i,t))return r[t]=3,i[t];if(n!==te&&Z(n,t))return r[t]=4,n[t];uo&&(r[t]=0)}}const d=qt[t];let f,p;if(d)return t==="$attrs"&&de(e.attrs,"get",""),d(e);if((f=l.__cssModules)&&(f=f[t]))return f;if(n!==te&&Z(n,t))return r[t]=4,n[t];if(p=c.config.globalProperties,Z(p,t))return p[t]},set({_:e},t,n){const{data:o,setupState:s,ctx:i}=e;return fo(s,t)?(s[t]=n,!0):o!==te&&Z(o,t)?(o[t]=n,!0):Z(e.props,t)||t[0]==="$"&&t.slice(1)in e?!1:(i[t]=n,!0)},has({_:{data:e,setupState:t,accessCache:n,ctx:o,appContext:s,props:i,type:r}},l){let c;return!!(n[l]||e!==te&&l[0]!=="$"&&Z(e,l)||fo(t,l)||Z(i,l)||Z(o,l)||Z(qt,l)||Z(s.config.globalProperties,l)||(c=r.__cssModules)&&c[l])},defineProperty(e,t,n){return n.get!=null?e._.accessCache[t]=0:Z(n,"value")&&this.set(e,t,n.value,null),Reflect.defineProperty(e,t,n)}};function Ss(e){return H(e)?e.reduce((t,n)=>(t[n]=null,t),{}):e}let uo=!0;function jr(e){const t=As(e),n=e.proxy,o=e.ctx;uo=!1,t.beforeCreate&&zs(t.beforeCreate,e,"bc");const{data:s,computed:i,methods:r,watch:l,provide:c,inject:d,created:f,beforeMount:p,mounted:w,beforeUpdate:S,updated:m,activated:x,deactivated:M,beforeDestroy:R,beforeUnmount:L,destroyed:E,unmounted:k,render:U,renderTracked:B,renderTriggered:D,errorCaptured:q,serverPrefetch:K,expose:se,inheritAttrs:ve,components:Se,directives:De,filters:Ne}=t;if(d&&Br(d,o,null),r)for(const J in r){const X=r[J];j(X)&&(o[J]=X.bind(n))}if(s){const J=s.call(n,n);re(J)&&(e.data=eo(J))}if(uo=!0,i)for(const J in i){const X=i[J],xe=j(X)?X.bind(n,n):j(X.get)?X.get.bind(n,n):je,Xe=!j(X)&&j(X.set)?X.set.bind(n):je,ye=W({get:xe,set:Xe});Object.defineProperty(o,J,{enumerable:!0,configurable:!0,get:()=>ye.value,set:_e=>ye.value=_e})}if(l)for(const J in l)Ts(l[J],o,n,J);if(c){const J=j(c)?c.call(n):c;Reflect.ownKeys(J).forEach(X=>{gr(X,J[X])})}f&&zs(f,e,"c");function ae(J,X){H(X)?X.forEach(xe=>J(xe.bind(n))):X&&J(X.bind(n))}if(ae(Mr,p),ae(Yt,w),ae(Rr,S),ae(Ir,m),ae(Ar,x),ae(Cr,M),ae(Dr,q),ae(Fr,B),ae(Lr,D),ae(Pr,L),ae(Ct,k),ae(Or,K),H(se))if(se.length){const J=e.exposed||(e.exposed={});se.forEach(X=>{Object.defineProperty(J,X,{get:()=>n[X],set:xe=>n[X]=xe,enumerable:!0})})}else e.exposed||(e.exposed={});U&&e.render===je&&(e.render=U),ve!=null&&(e.inheritAttrs=ve),Se&&(e.components=Se),De&&(e.directives=De),K&&lo(e)}function Br(e,t,n=je){H(e)&&(e=po(e));for(const o in e){const s=e[o];let i;re(s)?"default"in s?i=mn(s.from||o,s.default,!0):i=mn(s.from||o):i=mn(s),fe(i)?Object.defineProperty(t,o,{enumerable:!0,configurable:!0,get:()=>i.value,set:r=>i.value=r}):t[o]=i}}function zs(e,t,n){Ge(H(e)?e.map(o=>o.bind(t.proxy)):e.bind(t.proxy),t,n)}function Ts(e,t,n,o){let s=o.includes(".")?ps(n,o):()=>n[o];if(le(e)){const i=t[e];j(i)&&gn(s,i)}else if(j(e))gn(s,e.bind(n));else if(re(e))if(H(e))e.forEach(i=>Ts(i,t,n,o));else{const i=j(e.handler)?e.handler.bind(n):t[e.handler];j(i)&&gn(s,i,e)}}function As(e){const t=e.type,{mixins:n,extends:o}=t,{mixins:s,optionsCache:i,config:{optionMergeStrategies:r}}=e.appContext,l=i.get(t);let c;return l?c=l:!s.length&&!n&&!o?c=t:(c={},s.length&&s.forEach(d=>kn(c,d,r,!0)),kn(c,t,r)),re(t)&&i.set(t,c),c}function kn(e,t,n,o=!1){const{mixins:s,extends:i}=t;i&&kn(e,i,n,!0),s&&s.forEach(r=>kn(e,r,n,!0));for(const r in t)if(!(o&&r==="expose")){const l=Hr[r]||n&&n[r];e[r]=l?l(e[r],t[r]):t[r]}return e}const Hr={data:Cs,props:Es,emits:Es,methods:Xt,computed:Xt,beforeCreate:me,created:me,beforeMount:me,mounted:me,beforeUpdate:me,updated:me,beforeDestroy:me,beforeUnmount:me,destroyed:me,unmounted:me,activated:me,deactivated:me,errorCaptured:me,serverPrefetch:me,components:Xt,directives:Xt,watch:Gr,provide:Cs,inject:Ur};function Cs(e,t){return t?e?function(){return ce(j(e)?e.call(this,this):e,j(t)?t.call(this,this):t)}:t:e}function Ur(e,t){return Xt(po(e),po(t))}function po(e){if(H(e)){const t={};for(let n=0;n<e.length;n++)t[e[n]]=e[n];return t}return e}function me(e,t){return e?[...new Set([].concat(e,t))]:t}function Xt(e,t){return e?ce(Object.create(null),e,t):t}function Es(e,t){return e?H(e)&&H(t)?[...new Set([...e,...t])]:ce(Object.create(null),Ss(e),Ss(t??{})):t}function Gr(e,t){if(!e)return t;if(!t)return e;const n=ce(Object.create(null),e);for(const o in t)n[o]=me(e[o],t[o]);return n}function Ms(){return{app:null,config:{isNativeTag:Ao,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let Vr=0;function Wr(e,t){return function(o,s=null){j(o)||(o=ce({},o)),s!=null&&!re(s)&&(s=null);const i=Ms(),r=new WeakSet,l=[];let c=!1;const d=i.app={_uid:Vr++,_component:o,_props:s,_container:null,_context:i,_instance:null,version:Al,get config(){return i.config},set config(f){},use(f,...p){return r.has(f)||(f&&j(f.install)?(r.add(f),f.install(d,...p)):j(f)&&(r.add(f),f(d,...p))),d},mixin(f){return i.mixins.includes(f)||i.mixins.push(f),d},component(f,p){return p?(i.components[f]=p,d):i.components[f]},directive(f,p){return p?(i.directives[f]=p,d):i.directives[f]},mount(f,p,w){if(!c){const S=d._ceVNode||be(o,s);return S.appContext=i,w===!0?w="svg":w===!1&&(w=void 0),e(S,f,w),c=!0,d._container=f,f.__vue_app__=d,wo(S.component)}},onUnmount(f){l.push(f)},unmount(){c&&(Ge(l,d._instance,16),e(null,d._container),delete d._container.__vue_app__)},provide(f,p){return i.provides[f]=p,d},runWithContext(f){const p=Et;Et=d;try{return f()}finally{Et=p}}};return d}}let Et=null;const Kr=(e,t)=>t==="modelValue"||t==="model-value"?e.modelModifiers:e[`${t}Modifiers`]||e[`${lt(t)}Modifiers`]||e[`${ht(t)}Modifiers`];function Yr(e,t,...n){if(e.isUnmounted)return;const o=e.vnode.props||te;let s=n;const i=t.startsWith("update:"),r=i&&Kr(o,t.slice(7));r&&(r.trim&&(s=n.map(f=>le(f)?f.trim():f)),r.number&&(s=n.map(Ai)));let l,c=o[l=jn(t)]||o[l=jn(lt(t))];!c&&i&&(c=o[l=jn(ht(t))]),c&&Ge(c,e,6,s);const d=o[l+"Once"];if(d){if(!e.emitted)e.emitted={};else if(e.emitted[l])return;e.emitted[l]=!0,Ge(d,e,6,s)}}const qr=new WeakMap;function Rs(e,t,n=!1){const o=n?qr:t.emitsCache,s=o.get(e);if(s!==void 0)return s;const i=e.emits;let r={},l=!1;if(!j(e)){const c=d=>{const f=Rs(d,t,!0);f&&(l=!0,ce(r,f))};!n&&t.mixins.length&&t.mixins.forEach(c),e.extends&&c(e.extends),e.mixins&&e.mixins.forEach(c)}return!i&&!l?(re(e)&&o.set(e,null),null):(H(i)?i.forEach(c=>r[c]=null):ce(r,i),re(e)&&o.set(e,r),r)}function Sn(e,t){return!e||!nn(t)?!1:(t=t.slice(2).replace(/Once$/,""),Z(e,t[0].toLowerCase()+t.slice(1))||Z(e,ht(t))||Z(e,t))}function zf(){}function Is(e){const{type:t,vnode:n,proxy:o,withProxy:s,propsOptions:[i],slots:r,attrs:l,emit:c,render:d,renderCache:f,props:p,data:w,setupState:S,ctx:m,inheritAttrs:x}=e,M=hn(e);let R,L;try{if(n.shapeFlag&4){const k=s||o,U=k;R=Ke(d.call(U,k,f,p,S,w,m)),L=l}else{const k=t;R=Ke(k.length>1?k(p,{attrs:l,slots:r,emit:c}):k(p,null)),L=t.props?l:Xr(l)}}catch(k){Zt.length=0,Ht(k,e,1),R=be(dt)}let E=R;if(L&&x!==!1){const k=Object.keys(L),{shapeFlag:U}=E;k.length&&U&7&&(i&&k.some(Dn)&&(L=Zr(L,i)),E=Mt(E,L,!1,!0))}return n.dirs&&(E=Mt(E,null,!1,!0),E.dirs=E.dirs?E.dirs.concat(n.dirs):n.dirs),n.transition&&ro(E,n.transition),R=E,hn(M),R}const Xr=e=>{let t;for(const n in e)(n==="class"||n==="style"||nn(n))&&((t||(t={}))[n]=e[n]);return t},Zr=(e,t)=>{const n={};for(const o in e)(!Dn(o)||!(o.slice(9)in t))&&(n[o]=e[o]);return n};function Jr(e,t,n){const{props:o,children:s,component:i}=e,{props:r,children:l,patchFlag:c}=t,d=i.emitsOptions;if(t.dirs||t.transition)return!0;if(n&&c>=0){if(c&1024)return!0;if(c&16)return o?Ps(o,r,d):!!r;if(c&8){const f=t.dynamicProps;for(let p=0;p<f.length;p++){const w=f[p];if(r[w]!==o[w]&&!Sn(d,w))return!0}}}else return(s||l)&&(!l||!l.$stable)?!0:o===r?!1:o?r?Ps(o,r,d):!0:!!r;return!1}function Ps(e,t,n){const o=Object.keys(t);if(o.length!==Object.keys(e).length)return!0;for(let s=0;s<o.length;s++){const i=o[s];if(t[i]!==e[i]&&!Sn(n,i))return!0}return!1}function Qr({vnode:e,parent:t},n){for(;t;){const o=t.subTree;if(o.suspense&&o.suspense.activeBranch===e&&(o.el=e.el),o===e)(e=t.vnode).el=n,t=t.parent;else break}}const Os={},Ls=()=>Object.create(Os),Fs=e=>Object.getPrototypeOf(e)===Os;function el(e,t,n,o=!1){const s={},i=Ls();e.propsDefaults=Object.create(null),Ds(e,t,s,i);for(const r in e.propsOptions[0])r in s||(s[r]=void 0);n?e.props=o?s:Qi(s):e.type.props?e.props=s:e.props=i,e.attrs=i}function tl(e,t,n,o){const{props:s,attrs:i,vnode:{patchFlag:r}}=e,l=Y(s),[c]=e.propsOptions;let d=!1;if((o||r>0)&&!(r&16)){if(r&8){const f=e.vnode.dynamicProps;for(let p=0;p<f.length;p++){let w=f[p];if(Sn(e.emitsOptions,w))continue;const S=t[w];if(c)if(Z(i,w))S!==i[w]&&(i[w]=S,d=!0);else{const m=lt(w);s[m]=vo(c,l,m,S,e,!1)}else S!==i[w]&&(i[w]=S,d=!0)}}}else{Ds(e,t,s,i)&&(d=!0);let f;for(const p in l)(!t||!Z(t,p)&&((f=ht(p))===p||!Z(t,f)))&&(c?n&&(n[p]!==void 0||n[f]!==void 0)&&(s[p]=vo(c,l,p,void 0,e,!0)):delete s[p]);if(i!==l)for(const p in i)(!t||!Z(t,p))&&(delete i[p],d=!0)}d&&et(e.attrs,"set","")}function Ds(e,t,n,o){const[s,i]=e.propsOptions;let r=!1,l;if(t)for(let c in t){if(Ot(c))continue;const d=t[c];let f;s&&Z(s,f=lt(c))?!i||!i.includes(f)?n[f]=d:(l||(l={}))[f]=d:Sn(e.emitsOptions,c)||(!(c in o)||d!==o[c])&&(o[c]=d,r=!0)}if(i){const c=Y(n),d=l||te;for(let f=0;f<i.length;f++){const p=i[f];n[p]=vo(s,c,p,d[p],e,!Z(d,p))}}return r}function vo(e,t,n,o,s,i){const r=e[n];if(r!=null){const l=Z(r,"default");if(l&&o===void 0){const c=r.default;if(r.type!==Function&&!r.skipFactory&&j(c)){const{propsDefaults:d}=s;if(n in d)o=d[n];else{const f=en(s);o=d[n]=c.call(null,t),f()}}else o=c;s.ce&&s.ce._setProp(n,o)}r[0]&&(i&&!l?o=!1:r[1]&&(o===""||o===ht(n))&&(o=!0))}return o}const nl=new WeakMap;function Ns(e,t,n=!1){const o=n?nl:t.propsCache,s=o.get(e);if(s)return s;const i=e.props,r={},l=[];let c=!1;if(!j(e)){const f=p=>{c=!0;const[w,S]=Ns(p,t,!0);ce(r,w),S&&l.push(...S)};!n&&t.mixins.length&&t.mixins.forEach(f),e.extends&&f(e.extends),e.mixins&&e.mixins.forEach(f)}if(!i&&!c)return re(e)&&o.set(e,_t),_t;if(H(i))for(let f=0;f<i.length;f++){const p=lt(i[f]);$s(p)&&(r[p]=te)}else if(i)for(const f in i){const p=lt(f);if($s(p)){const w=i[f],S=r[p]=H(w)||j(w)?{type:w}:ce({},w),m=S.type;let x=!1,M=!0;if(H(m))for(let R=0;R<m.length;++R){const L=m[R],E=j(L)&&L.name;if(E==="Boolean"){x=!0;break}else E==="String"&&(M=!1)}else x=j(m)&&m.name==="Boolean";S[0]=x,S[1]=M,(x||Z(S,"default"))&&l.push(p)}}const d=[r,l];return re(e)&&o.set(e,d),d}function $s(e){return e[0]!=="$"&&!Ot(e)}const ho=e=>e==="_"||e==="_ctx"||e==="$stable",mo=e=>H(e)?e.map(Ke):[Ke(e)],ol=(e,t,n)=>{if(t._n)return t;const o=mr((...s)=>mo(t(...s)),n);return o._c=!1,o},js=(e,t,n)=>{const o=e._ctx;for(const s in e){if(ho(s))continue;const i=e[s];if(j(i))t[s]=ol(s,i,o);else if(i!=null){const r=mo(i);t[s]=()=>r}}},Bs=(e,t)=>{const n=mo(t);e.slots.default=()=>n},Hs=(e,t,n)=>{for(const o in t)(n||!ho(o))&&(e[o]=t[o])},sl=(e,t,n)=>{const o=e.slots=Ls();if(e.vnode.shapeFlag&32){const s=t._;s?(Hs(o,t,n),n&&Po(o,"_",s,!0)):js(t,o)}else t&&Bs(e,t)},il=(e,t,n)=>{const{vnode:o,slots:s}=e;let i=!0,r=te;if(o.shapeFlag&32){const l=t._;l?n&&l===1?i=!1:Hs(s,t,n):(i=!t.$stable,js(t,s)),r=t}else t&&(Bs(e,t),r={default:1});if(i)for(const l in s)!ho(l)&&r[l]==null&&delete s[l]},ge=fl;function rl(e){return ll(e)}function ll(e,t){const n=rn();n.__VUE__=!0;const{insert:o,remove:s,patchProp:i,createElement:r,createText:l,createComment:c,setText:d,setElementText:f,parentNode:p,nextSibling:w,setScopeId:S=je,insertStaticContent:m}=e,x=(a,u,v,y=null,g=null,b=null,C=void 0,T=null,z=!!u.dynamicChildren)=>{if(a===u)return;a&&!Qt(a,u)&&(y=G(a),_e(a,g,b,!0),a=null),u.patchFlag===-2&&(z=!1,u.dynamicChildren=null);const{type:_,ref:N,shapeFlag:I}=u;switch(_){case zn:M(a,u,v,y);break;case dt:R(a,u,v,y);break;case Tn:a==null&&L(u,v,y,C);break;case Pe:Se(a,u,v,y,g,b,C,T,z);break;default:I&1?U(a,u,v,y,g,b,C,T,z):I&6?De(a,u,v,y,g,b,C,T,z):(I&64||I&128)&&_.process(a,u,v,y,g,b,C,T,z,Ae)}N!=null&&g?Wt(N,a&&a.ref,b,u||a,!u):N==null&&a&&a.ref!=null&&Wt(a.ref,null,b,a,!0)},M=(a,u,v,y)=>{if(a==null)o(u.el=l(u.children),v,y);else{const g=u.el=a.el;u.children!==a.children&&d(g,u.children)}},R=(a,u,v,y)=>{a==null?o(u.el=c(u.children||""),v,y):u.el=a.el},L=(a,u,v,y)=>{[a.el,a.anchor]=m(a.children,u,v,y,a.el,a.anchor)},E=({el:a,anchor:u},v,y)=>{let g;for(;a&&a!==u;)g=w(a),o(a,v,y),a=g;o(u,v,y)},k=({el:a,anchor:u})=>{let v;for(;a&&a!==u;)v=w(a),s(a),a=v;s(u)},U=(a,u,v,y,g,b,C,T,z)=>{if(u.type==="svg"?C="svg":u.type==="math"&&(C="mathml"),a==null)B(u,v,y,g,b,C,T,z);else{const _=a.el&&a.el._isVueCE?a.el:null;try{_&&_._beginPatch(),K(a,u,g,b,C,T,z)}finally{_&&_._endPatch()}}},B=(a,u,v,y,g,b,C,T)=>{let z,_;const{props:N,shapeFlag:I,transition:F,dirs:$}=a;if(z=a.el=r(a.type,b,N&&N.is,N),I&8?f(z,a.children):I&16&&q(a.children,z,null,y,g,go(a,b),C,T),$&&xt(a,null,y,"created"),D(z,a,a.scopeId,C,y),N){for(const ie in N)ie!=="value"&&!Ot(ie)&&i(z,ie,null,N[ie],b,y);"value"in N&&i(z,"value",null,N.value,b),(_=N.onVnodeBeforeMount)&&Ye(_,y,a)}$&&xt(a,null,y,"beforeMount");const V=al(g,F);V&&F.beforeEnter(z),o(z,u,v),((_=N&&N.onVnodeMounted)||V||$)&&ge(()=>{_&&Ye(_,y,a),V&&F.enter(z),$&&xt(a,null,y,"mounted")},g)},D=(a,u,v,y,g)=>{if(v&&S(a,v),y)for(let b=0;b<y.length;b++)S(a,y[b]);if(g){let b=g.subTree;if(u===b||Ws(b.type)&&(b.ssContent===u||b.ssFallback===u)){const C=g.vnode;D(a,C,C.scopeId,C.slotScopeIds,g.parent)}}},q=(a,u,v,y,g,b,C,T,z=0)=>{for(let _=z;_<a.length;_++){const N=a[_]=T?pt(a[_]):Ke(a[_]);x(null,N,u,v,y,g,b,C,T)}},K=(a,u,v,y,g,b,C)=>{const T=u.el=a.el;let{patchFlag:z,dynamicChildren:_,dirs:N}=u;z|=a.patchFlag&16;const I=a.props||te,F=u.props||te;let $;if(v&&yt(v,!1),($=F.onVnodeBeforeUpdate)&&Ye($,v,u,a),N&&xt(u,a,v,"beforeUpdate"),v&&yt(v,!0),(I.innerHTML&&F.innerHTML==null||I.textContent&&F.textContent==null)&&f(T,""),_?se(a.dynamicChildren,_,T,v,y,go(u,g),b):C||X(a,u,T,null,v,y,go(u,g),b,!1),z>0){if(z&16)ve(T,I,F,v,g);else if(z&2&&I.class!==F.class&&i(T,"class",null,F.class,g),z&4&&i(T,"style",I.style,F.style,g),z&8){const V=u.dynamicProps;for(let ie=0;ie<V.length;ie++){const Q=V[ie],Ce=I[Q],Ee=F[Q];(Ee!==Ce||Q==="value")&&i(T,Q,Ce,Ee,g,v)}}z&1&&a.children!==u.children&&f(T,u.children)}else!C&&_==null&&ve(T,I,F,v,g);(($=F.onVnodeUpdated)||N)&&ge(()=>{$&&Ye($,v,u,a),N&&xt(u,a,v,"updated")},y)},se=(a,u,v,y,g,b,C)=>{for(let T=0;T<u.length;T++){const z=a[T],_=u[T],N=z.el&&(z.type===Pe||!Qt(z,_)||z.shapeFlag&198)?p(z.el):v;x(z,_,N,null,y,g,b,C,!0)}},ve=(a,u,v,y,g)=>{if(u!==v){if(u!==te)for(const b in u)!Ot(b)&&!(b in v)&&i(a,b,u[b],null,g,y);for(const b in v){if(Ot(b))continue;const C=v[b],T=u[b];C!==T&&b!=="value"&&i(a,b,T,C,g,y)}"value"in v&&i(a,"value",u.value,v.value,g)}},Se=(a,u,v,y,g,b,C,T,z)=>{const _=u.el=a?a.el:l(""),N=u.anchor=a?a.anchor:l("");let{patchFlag:I,dynamicChildren:F,slotScopeIds:$}=u;$&&(T=T?T.concat($):$),a==null?(o(_,v,y),o(N,v,y),q(u.children||[],v,N,g,b,C,T,z)):I>0&&I&64&&F&&a.dynamicChildren&&a.dynamicChildren.length===F.length?(se(a.dynamicChildren,F,v,g,b,C,T),(u.key!=null||g&&u===g.subTree)&&bo(a,u,!0)):X(a,u,v,N,g,b,C,T,z)},De=(a,u,v,y,g,b,C,T,z)=>{u.slotScopeIds=T,a==null?u.shapeFlag&512?g.ctx.activate(u,v,y,C,z):Ne(u,v,y,g,b,C,z):$e(a,u,z)},Ne=(a,u,v,y,g,b,C)=>{const T=a.component=gl(a,y,g);if(ao(a)&&(T.ctx.renderer=Ae),xl(T,!1,C),T.asyncDep){if(g&&g.registerDep(T,ae,C),!a.el){const z=T.subTree=be(dt);R(null,z,u,v),a.placeholder=z.el}}else ae(T,a,u,v,g,b,C)},$e=(a,u,v)=>{const y=u.component=a.component;if(Jr(a,u,v))if(y.asyncDep&&!y.asyncResolved){J(y,u,v);return}else y.next=u,y.update();else u.el=a.el,y.vnode=u},ae=(a,u,v,y,g,b,C)=>{const T=()=>{if(a.isMounted){let{next:I,bu:F,u:$,parent:V,vnode:ie}=a;{const Je=Us(a);if(Je){I&&(I.el=ie.el,J(a,I,C)),Je.asyncDep.then(()=>{a.isUnmounted||T()});return}}let Q=I,Ce;yt(a,!1),I?(I.el=ie.el,J(a,I,C)):I=ie,F&&Bn(F),(Ce=I.props&&I.props.onVnodeBeforeUpdate)&&Ye(Ce,V,I,ie),yt(a,!0);const Ee=Is(a),Ze=a.subTree;a.subTree=Ee,x(Ze,Ee,p(Ze.el),G(Ze),a,g,b),I.el=Ee.el,Q===null&&Qr(a,Ee.el),$&&ge($,g),(Ce=I.props&&I.props.onVnodeUpdated)&&ge(()=>Ye(Ce,V,I,ie),g)}else{let I;const{el:F,props:$}=u,{bm:V,m:ie,parent:Q,root:Ce,type:Ee}=a,Ze=Kt(u);yt(a,!1),V&&Bn(V),!Ze&&(I=$&&$.onVnodeBeforeMount)&&Ye(I,Q,u),yt(a,!0);{Ce.ce&&Ce.ce._def.shadowRoot!==!1&&Ce.ce._injectChildStyle(Ee);const Je=a.subTree=Is(a);x(null,Je,v,y,a,g,b),u.el=Je.el}if(ie&&ge(ie,g),!Ze&&(I=$&&$.onVnodeMounted)){const Je=u;ge(()=>Ye(I,Q,Je),g)}(u.shapeFlag&256||Q&&Kt(Q.vnode)&&Q.vnode.shapeFlag&256)&&a.a&&ge(a.a,g),a.isMounted=!0,u=v=y=null}};a.scope.on();const z=a.effect=new No(T);a.scope.off();const _=a.update=z.run.bind(z),N=a.job=z.runIfDirty.bind(z);N.i=a,N.id=a.uid,z.scheduler=()=>so(N),yt(a,!0),_()},J=(a,u,v)=>{u.component=a;const y=a.vnode.props;a.vnode=u,a.next=null,tl(a,u.props,y,v),il(a,u.children,v),He(),as(a),Ue()},X=(a,u,v,y,g,b,C,T,z=!1)=>{const _=a&&a.children,N=a?a.shapeFlag:0,I=u.children,{patchFlag:F,shapeFlag:$}=u;if(F>0){if(F&128){Xe(_,I,v,y,g,b,C,T,z);return}else if(F&256){xe(_,I,v,y,g,b,C,T,z);return}}$&8?(N&16&&P(_,g,b),I!==_&&f(v,I)):N&16?$&16?Xe(_,I,v,y,g,b,C,T,z):P(_,g,b,!0):(N&8&&f(v,""),$&16&&q(I,v,y,g,b,C,T,z))},xe=(a,u,v,y,g,b,C,T,z)=>{a=a||_t,u=u||_t;const _=a.length,N=u.length,I=Math.min(_,N);let F;for(F=0;F<I;F++){const $=u[F]=z?pt(u[F]):Ke(u[F]);x(a[F],$,v,null,g,b,C,T,z)}_>N?P(a,g,b,!0,!1,I):q(u,v,y,g,b,C,T,z,I)},Xe=(a,u,v,y,g,b,C,T,z)=>{let _=0;const N=u.length;let I=a.length-1,F=N-1;for(;_<=I&&_<=F;){const $=a[_],V=u[_]=z?pt(u[_]):Ke(u[_]);if(Qt($,V))x($,V,v,null,g,b,C,T,z);else break;_++}for(;_<=I&&_<=F;){const $=a[I],V=u[F]=z?pt(u[F]):Ke(u[F]);if(Qt($,V))x($,V,v,null,g,b,C,T,z);else break;I--,F--}if(_>I){if(_<=F){const $=F+1,V=$<N?u[$].el:y;for(;_<=F;)x(null,u[_]=z?pt(u[_]):Ke(u[_]),v,V,g,b,C,T,z),_++}}else if(_>F)for(;_<=I;)_e(a[_],g,b,!0),_++;else{const $=_,V=_,ie=new Map;for(_=V;_<=F;_++){const Re=u[_]=z?pt(u[_]):Ke(u[_]);Re.key!=null&&ie.set(Re.key,_)}let Q,Ce=0;const Ee=F-V+1;let Ze=!1,Je=0;const tn=new Array(Ee);for(_=0;_<Ee;_++)tn[_]=0;for(_=$;_<=I;_++){const Re=a[_];if(Ce>=Ee){_e(Re,g,b,!0);continue}let Qe;if(Re.key!=null)Qe=ie.get(Re.key);else for(Q=V;Q<=F;Q++)if(tn[Q-V]===0&&Qt(Re,u[Q])){Qe=Q;break}Qe===void 0?_e(Re,g,b,!0):(tn[Qe-V]=_+1,Qe>=Je?Je=Qe:Ze=!0,x(Re,u[Qe],v,null,g,b,C,T,z),Ce++)}const yi=Ze?cl(tn):_t;for(Q=yi.length-1,_=Ee-1;_>=0;_--){const Re=V+_,Qe=u[Re],_i=u[Re+1],wi=Re+1<N?_i.el||Vs(_i):y;tn[_]===0?x(null,Qe,v,wi,g,b,C,T,z):Ze&&(Q<0||_!==yi[Q]?ye(Qe,v,wi,2):Q--)}}},ye=(a,u,v,y,g=null)=>{const{el:b,type:C,transition:T,children:z,shapeFlag:_}=a;if(_&6){ye(a.component.subTree,u,v,y);return}if(_&128){a.suspense.move(u,v,y);return}if(_&64){C.move(a,u,v,Ae);return}if(C===Pe){o(b,u,v);for(let I=0;I<z.length;I++)ye(z[I],u,v,y);o(a.anchor,u,v);return}if(C===Tn){E(a,u,v);return}if(y!==2&&_&1&&T)if(y===0)T.beforeEnter(b),o(b,u,v),ge(()=>T.enter(b),g);else{const{leave:I,delayLeave:F,afterLeave:$}=T,V=()=>{a.ctx.isUnmounted?s(b):o(b,u,v)},ie=()=>{b._isLeaving&&b[Sr](!0),I(b,()=>{V(),$&&$()})};F?F(b,V,ie):ie()}else o(b,u,v)},_e=(a,u,v,y=!1,g=!1)=>{const{type:b,props:C,ref:T,children:z,dynamicChildren:_,shapeFlag:N,patchFlag:I,dirs:F,cacheIndex:$}=a;if(I===-2&&(g=!1),T!=null&&(He(),Wt(T,null,v,a,!0),Ue()),$!=null&&(u.renderCache[$]=void 0),N&256){u.ctx.deactivate(a);return}const V=N&1&&F,ie=!Kt(a);let Q;if(ie&&(Q=C&&C.onVnodeBeforeUnmount)&&Ye(Q,u,a),N&6)A(a.component,v,y);else{if(N&128){a.suspense.unmount(v,y);return}V&&xt(a,null,u,"beforeUnmount"),N&64?a.type.remove(a,u,v,Ae,y):_&&!_.hasOnce&&(b!==Pe||I>0&&I&64)?P(_,u,v,!1,!0):(b===Pe&&I&384||!g&&N&16)&&P(z,u,v),y&&ee(a)}(ie&&(Q=C&&C.onVnodeUnmounted)||V)&&ge(()=>{Q&&Ye(Q,u,a),V&&xt(a,null,u,"unmounted")},v)},ee=a=>{const{type:u,el:v,anchor:y,transition:g}=a;if(u===Pe){O(v,y);return}if(u===Tn){k(a);return}const b=()=>{s(v),g&&!g.persisted&&g.afterLeave&&g.afterLeave()};if(a.shapeFlag&1&&g&&!g.persisted){const{leave:C,delayLeave:T}=g,z=()=>C(v,b);T?T(a.el,b,z):z()}else b()},O=(a,u)=>{let v;for(;a!==u;)v=w(a),s(a),a=v;s(u)},A=(a,u,v)=>{const{bum:y,scope:g,job:b,subTree:C,um:T,m:z,a:_}=a;Gs(z),Gs(_),y&&Bn(y),g.stop(),b&&(b.flags|=8,_e(C,a,u,v)),T&&ge(T,u),ge(()=>{a.isUnmounted=!0},u)},P=(a,u,v,y=!1,g=!1,b=0)=>{for(let C=b;C<a.length;C++)_e(a[C],u,v,y,g)},G=a=>{if(a.shapeFlag&6)return G(a.component.subTree);if(a.shapeFlag&128)return a.suspense.next();const u=w(a.anchor||a.el),v=u&&u[vs];return v?w(v):u};let ze=!1;const Te=(a,u,v)=>{let y;a==null?u._vnode&&(_e(u._vnode,null,null,!0),y=u._vnode.component):x(u._vnode||null,a,u,null,null,null,v),u._vnode=a,ze||(ze=!0,as(y),cs(),ze=!1)},Ae={p:x,um:_e,m:ye,r:ee,mt:Ne,mc:q,pc:X,pbc:se,n:G,o:e};return{render:Te,hydrate:void 0,createApp:Wr(Te)}}function go({type:e,props:t},n){return n==="svg"&&e==="foreignObject"||n==="mathml"&&e==="annotation-xml"&&t&&t.encoding&&t.encoding.includes("html")?void 0:n}function yt({effect:e,job:t},n){n?(e.flags|=32,t.flags|=4):(e.flags&=-33,t.flags&=-5)}function al(e,t){return(!e||e&&!e.pendingBranch)&&t&&!t.persisted}function bo(e,t,n=!1){const o=e.children,s=t.children;if(H(o)&&H(s))for(let i=0;i<o.length;i++){const r=o[i];let l=s[i];l.shapeFlag&1&&!l.dynamicChildren&&((l.patchFlag<=0||l.patchFlag===32)&&(l=s[i]=pt(s[i]),l.el=r.el),!n&&l.patchFlag!==-2&&bo(r,l)),l.type===zn&&(l.patchFlag!==-1?l.el=r.el:l.__elIndex=i+(e.type===Pe?1:0)),l.type===dt&&!l.el&&(l.el=r.el)}}function cl(e){const t=e.slice(),n=[0];let o,s,i,r,l;const c=e.length;for(o=0;o<c;o++){const d=e[o];if(d!==0){if(s=n[n.length-1],e[s]<d){t[o]=s,n.push(o);continue}for(i=0,r=n.length-1;i<r;)l=i+r>>1,e[n[l]]<d?i=l+1:r=l;d<e[n[i]]&&(i>0&&(t[o]=n[i-1]),n[i]=o)}}for(i=n.length,r=n[i-1];i-- >0;)n[i]=r,r=t[r];return n}function Us(e){const t=e.subTree.component;if(t)return t.asyncDep&&!t.asyncResolved?t:Us(t)}function Gs(e){if(e)for(let t=0;t<e.length;t++)e[t].flags|=8}function Vs(e){if(e.placeholder)return e.placeholder;const t=e.component;return t?Vs(t.subTree):null}const Ws=e=>e.__isSuspense;function fl(e,t){t&&t.pendingBranch?H(e)?t.effects.push(...e):t.effects.push(e):hr(e)}const Pe=Symbol.for("v-fgt"),zn=Symbol.for("v-txt"),dt=Symbol.for("v-cmt"),Tn=Symbol.for("v-stc"),Zt=[];let Me=null;function ue(e=!1){Zt.push(Me=e?null:[])}function ul(){Zt.pop(),Me=Zt[Zt.length-1]||null}let Jt=1;function Ks(e,t=!1){Jt+=e,e<0&&Me&&t&&(Me.hasOnce=!0)}function Ys(e){return e.dynamicChildren=Jt>0?Me||_t:null,ul(),Jt>0&&Me&&Me.push(e),e}function ke(e,t,n,o,s,i){return Ys(h(e,t,n,o,s,i,!0))}function xo(e,t,n,o,s){return Ys(be(e,t,n,o,s,!0))}function qs(e){return e?e.__v_isVNode===!0:!1}function Qt(e,t){return e.type===t.type&&e.key===t.key}const Xs=({key:e})=>e??null,An=({ref:e,ref_key:t,ref_for:n})=>(typeof e=="number"&&(e=""+e),e!=null?le(e)||fe(e)||j(e)?{i:We,r:e,k:t,f:!!n}:e:null);function h(e,t=null,n=null,o=0,s=null,i=e===Pe?0:1,r=!1,l=!1){const c={__v_isVNode:!0,__v_skip:!0,type:e,props:t,key:t&&Xs(t),ref:t&&An(t),scopeId:us,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetStart:null,targetAnchor:null,staticCount:0,shapeFlag:i,patchFlag:o,dynamicProps:s,dynamicChildren:null,appContext:null,ctx:We};return l?(yo(c,n),i&128&&e.normalize(c)):n&&(c.shapeFlag|=le(n)?8:16),Jt>0&&!r&&Me&&(c.patchFlag>0||i&6)&&c.patchFlag!==32&&Me.push(c),c}const be=dl;function dl(e,t=null,n=null,o=0,s=null,i=!1){if((!e||e===Nr)&&(e=dt),qs(e)){const l=Mt(e,t,!0);return n&&yo(l,n),Jt>0&&!i&&Me&&(l.shapeFlag&6?Me[Me.indexOf(e)]=l:Me.push(l)),l.patchFlag=-2,l}if(Tl(e)&&(e=e.__vccOpts),t){t=pl(t);let{class:l,style:c}=t;l&&!le(l)&&(t.class=Oe(l)),re(c)&&(no(c)&&!H(c)&&(c=ce({},c)),t.style=Lt(c))}const r=le(e)?1:Ws(e)?128:_r(e)?64:re(e)?4:j(e)?2:0;return h(e,t,n,o,s,r,i,!0)}function pl(e){return e?no(e)||Fs(e)?ce({},e):e:null}function Mt(e,t,n=!1,o=!1){const{props:s,ref:i,patchFlag:r,children:l,transition:c}=e,d=t?vl(s||{},t):s,f={__v_isVNode:!0,__v_skip:!0,type:e.type,props:d,key:d&&Xs(d),ref:t&&t.ref?n&&i?H(i)?i.concat(An(t)):[i,An(t)]:An(t):i,scopeId:e.scopeId,slotScopeIds:e.slotScopeIds,children:l,target:e.target,targetStart:e.targetStart,targetAnchor:e.targetAnchor,staticCount:e.staticCount,shapeFlag:e.shapeFlag,patchFlag:t&&e.type!==Pe?r===-1?16:r|16:r,dynamicProps:e.dynamicProps,dynamicChildren:e.dynamicChildren,appContext:e.appContext,dirs:e.dirs,transition:c,component:e.component,suspense:e.suspense,ssContent:e.ssContent&&Mt(e.ssContent),ssFallback:e.ssFallback&&Mt(e.ssFallback),placeholder:e.placeholder,el:e.el,anchor:e.anchor,ctx:e.ctx,ce:e.ce};return c&&o&&ro(f,c.clone(f)),f}function Zs(e=" ",t=0){return be(zn,null,e,t)}function Cn(e,t){const n=be(Tn,null,e);return n.staticCount=t,n}function st(e="",t=!1){return t?(ue(),xo(dt,null,e)):be(dt,null,e)}function Ke(e){return e==null||typeof e=="boolean"?be(dt):H(e)?be(Pe,null,e.slice()):qs(e)?pt(e):be(zn,null,String(e))}function pt(e){return e.el===null&&e.patchFlag!==-1||e.memo?e:Mt(e)}function yo(e,t){let n=0;const{shapeFlag:o}=e;if(t==null)t=null;else if(H(t))n=16;else if(typeof t=="object")if(o&65){const s=t.default;s&&(s._c&&(s._d=!1),yo(e,s()),s._c&&(s._d=!0));return}else{n=32;const s=t._;!s&&!Fs(t)?t._ctx=We:s===3&&We&&(We.slots._===1?t._=1:(t._=2,e.patchFlag|=1024))}else j(t)?(t={default:t,_ctx:We},n=32):(t=String(t),o&64?(n=16,t=[Zs(t)]):n=8);e.children=t,e.shapeFlag|=n}function vl(...e){const t={};for(let n=0;n<e.length;n++){const o=e[n];for(const s in o)if(s==="class")t.class!==o.class&&(t.class=Oe([t.class,o.class]));else if(s==="style")t.style=Lt([t.style,o.style]);else if(nn(s)){const i=t[s],r=o[s];r&&i!==r&&!(H(i)&&i.includes(r))&&(t[s]=i?[].concat(i,r):r)}else s!==""&&(t[s]=o[s])}return t}function Ye(e,t,n,o=null){Ge(e,t,7,[n,o])}const hl=Ms();let ml=0;function gl(e,t,n){const o=e.type,s=(t?t.appContext:e.appContext)||hl,i={uid:ml++,vnode:e,type:o,parent:t,appContext:s,root:null,next:null,subTree:null,effect:null,update:null,job:null,scope:new Pi(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:t?t.provides:Object.create(s.provides),ids:t?t.ids:["",0,0],accessCache:null,renderCache:[],components:null,directives:null,propsOptions:Ns(o,s),emitsOptions:Rs(o,s),emit:null,emitted:null,propsDefaults:te,inheritAttrs:o.inheritAttrs,ctx:te,data:te,props:te,attrs:te,slots:te,refs:te,setupState:te,setupContext:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return i.ctx={_:i},i.root=t?t.root:i,i.emit=Yr.bind(null,i),e.ce&&e.ce(i),i}let pe=null;const bl=()=>pe||We;let En,_o;{const e=rn(),t=(n,o)=>{let s;return(s=e[n])||(s=e[n]=[]),s.push(o),i=>{s.length>1?s.forEach(r=>r(i)):s[0](i)}};En=t("__VUE_INSTANCE_SETTERS__",n=>pe=n),_o=t("__VUE_SSR_SETTERS__",n=>Rt=n)}const en=e=>{const t=pe;return En(e),e.scope.on(),()=>{e.scope.off(),En(t)}},Js=()=>{pe&&pe.scope.off(),En(null)};function Qs(e){return e.vnode.shapeFlag&4}let Rt=!1;function xl(e,t=!1,n=!1){t&&_o(t);const{props:o,children:s}=e.vnode,i=Qs(e);el(e,o,i,t),sl(e,s,n||t);const r=i?yl(e,t):void 0;return t&&_o(!1),r}function yl(e,t){const n=e.type;e.accessCache=Object.create(null),e.proxy=new Proxy(e.ctx,$r);const{setup:o}=n;if(o){He();const s=e.setupContext=o.length>1?wl(e):null,i=en(e),r=zt(o,e,0,[e.props,s]),l=Eo(r);if(Ue(),i(),(l||e.sp)&&!Kt(e)&&lo(e),l){if(r.then(Js,Js),t)return r.then(c=>{ei(e,c)}).catch(c=>{Ht(c,e,0)});e.asyncDep=r}else ei(e,r)}else ti(e)}function ei(e,t,n){j(t)?e.type.__ssrInlineRender?e.ssrRender=t:e.render=t:re(t)&&(e.setupState=ss(t)),ti(e)}function ti(e,t,n){const o=e.type;e.render||(e.render=o.render||je);{const s=en(e);He();try{jr(e)}finally{Ue(),s()}}}const _l={get(e,t){return de(e,"get",""),e[t]}};function wl(e){const t=n=>{e.exposed=n||{}};return{attrs:new Proxy(e.attrs,_l),slots:e.slots,emit:e.emit,expose:t}}function wo(e){return e.exposed?e.exposeProxy||(e.exposeProxy=new Proxy(ss(er(e.exposed)),{get(t,n){if(n in t)return t[n];if(n in qt)return qt[n](e)},has(t,n){return n in t||n in qt}})):e.proxy}const kl=/(?:^|[-_])\w/g,Sl=e=>e.replace(kl,t=>t.toUpperCase()).replace(/[-_]/g,"");function zl(e,t=!0){return j(e)?e.displayName||e.name:e.name||t&&e.__name}function ni(e,t,n=!1){let o=zl(t);if(!o&&t.__file){const s=t.__file.match(/([^/\\]+)\.\w+$/);s&&(o=s[1])}if(!o&&e){const s=i=>{for(const r in i)if(i[r]===t)return r};o=s(e.components)||e.parent&&s(e.parent.type.components)||s(e.appContext.components)}return o?Sl(o):n?"App":"Anonymous"}function Tl(e){return j(e)&&"__vccOpts"in e}const W=(e,t)=>ir(e,t,Rt),Al="3.5.27";/**
* @vue/runtime-dom v3.5.27
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let ko;const oi=typeof window<"u"&&window.trustedTypes;if(oi)try{ko=oi.createPolicy("vue",{createHTML:e=>e})}catch{}const si=ko?e=>ko.createHTML(e):e=>e,Cl="http://www.w3.org/2000/svg",El="http://www.w3.org/1998/Math/MathML",it=typeof document<"u"?document:null,ii=it&&it.createElement("template"),Ml={insert:(e,t,n)=>{t.insertBefore(e,n||null)},remove:e=>{const t=e.parentNode;t&&t.removeChild(e)},createElement:(e,t,n,o)=>{const s=t==="svg"?it.createElementNS(Cl,e):t==="mathml"?it.createElementNS(El,e):n?it.createElement(e,{is:n}):it.createElement(e);return e==="select"&&o&&o.multiple!=null&&s.setAttribute("multiple",o.multiple),s},createText:e=>it.createTextNode(e),createComment:e=>it.createComment(e),setText:(e,t)=>{e.nodeValue=t},setElementText:(e,t)=>{e.textContent=t},parentNode:e=>e.parentNode,nextSibling:e=>e.nextSibling,querySelector:e=>it.querySelector(e),setScopeId(e,t){e.setAttribute(t,"")},insertStaticContent(e,t,n,o,s,i){const r=n?n.previousSibling:t.lastChild;if(s&&(s===i||s.nextSibling))for(;t.insertBefore(s.cloneNode(!0),n),!(s===i||!(s=s.nextSibling)););else{ii.innerHTML=si(o==="svg"?`<svg>${e}</svg>`:o==="mathml"?`<math>${e}</math>`:e);const l=ii.content;if(o==="svg"||o==="mathml"){const c=l.firstChild;for(;c.firstChild;)l.appendChild(c.firstChild);l.removeChild(c)}t.insertBefore(l,n)}return[r?r.nextSibling:t.firstChild,n?n.previousSibling:t.lastChild]}},Rl=Symbol("_vtc");function Il(e,t,n){const o=e[Rl];o&&(t=(t?[t,...o]:[...o]).join(" ")),t==null?e.removeAttribute("class"):n?e.setAttribute("class",t):e.className=t}const ri=Symbol("_vod"),Pl=Symbol("_vsh"),Ol=Symbol(""),Ll=/(?:^|;)\s*display\s*:/;function Fl(e,t,n){const o=e.style,s=le(n);let i=!1;if(n&&!s){if(t)if(le(t))for(const r of t.split(";")){const l=r.slice(0,r.indexOf(":")).trim();n[l]==null&&Mn(o,l,"")}else for(const r in t)n[r]==null&&Mn(o,r,"");for(const r in n)r==="display"&&(i=!0),Mn(o,r,n[r])}else if(s){if(t!==n){const r=o[Ol];r&&(n+=";"+r),o.cssText=n,i=Ll.test(n)}}else t&&e.removeAttribute("style");ri in e&&(e[ri]=i?o.display:"",e[Pl]&&(o.display="none"))}const li=/\s*!important$/;function Mn(e,t,n){if(H(n))n.forEach(o=>Mn(e,t,o));else if(n==null&&(n=""),t.startsWith("--"))e.setProperty(t,n);else{const o=Dl(e,t);li.test(n)?e.setProperty(ht(o),n.replace(li,""),"important"):e[o]=n}}const ai=["Webkit","Moz","ms"],So={};function Dl(e,t){const n=So[t];if(n)return n;let o=lt(t);if(o!=="filter"&&o in e)return So[t]=o;o=Io(o);for(let s=0;s<ai.length;s++){const i=ai[s]+o;if(i in e)return So[t]=i}return t}const ci="http://www.w3.org/1999/xlink";function fi(e,t,n,o,s,i=Ii(t)){o&&t.startsWith("xlink:")?n==null?e.removeAttributeNS(ci,t.slice(6,t.length)):e.setAttributeNS(ci,t,n):n==null||i&&!Lo(n)?e.removeAttribute(t):e.setAttribute(t,i?"":rt(n)?String(n):n)}function ui(e,t,n,o,s){if(t==="innerHTML"||t==="textContent"){n!=null&&(e[t]=t==="innerHTML"?si(n):n);return}const i=e.tagName;if(t==="value"&&i!=="PROGRESS"&&!i.includes("-")){const l=i==="OPTION"?e.getAttribute("value")||"":e.value,c=n==null?e.type==="checkbox"?"on":"":String(n);(l!==c||!("_value"in e))&&(e.value=c),n==null&&e.removeAttribute(t),e._value=n;return}let r=!1;if(n===""||n==null){const l=typeof e[t];l==="boolean"?n=Lo(n):n==null&&l==="string"?(n="",r=!0):l==="number"&&(n=0,r=!0)}try{e[t]=n}catch{}r&&e.removeAttribute(s||t)}function Nl(e,t,n,o){e.addEventListener(t,n,o)}function $l(e,t,n,o){e.removeEventListener(t,n,o)}const di=Symbol("_vei");function jl(e,t,n,o,s=null){const i=e[di]||(e[di]={}),r=i[t];if(o&&r)r.value=o;else{const[l,c]=Bl(t);if(o){const d=i[t]=Gl(o,s);Nl(e,l,d,c)}else r&&($l(e,l,r,c),i[t]=void 0)}}const pi=/(?:Once|Passive|Capture)$/;function Bl(e){let t;if(pi.test(e)){t={};let o;for(;o=e.match(pi);)e=e.slice(0,e.length-o[0].length),t[o[0].toLowerCase()]=!0}return[e[2]===":"?e.slice(3):ht(e.slice(2)),t]}let zo=0;const Hl=Promise.resolve(),Ul=()=>zo||(Hl.then(()=>zo=0),zo=Date.now());function Gl(e,t){const n=o=>{if(!o._vts)o._vts=Date.now();else if(o._vts<=n.attached)return;Ge(Vl(o,n.value),t,5,[o])};return n.value=e,n.attached=Ul(),n}function Vl(e,t){if(H(t)){const n=e.stopImmediatePropagation;return e.stopImmediatePropagation=()=>{n.call(e),e._stopped=!0},t.map(o=>s=>!s._stopped&&o&&o(s))}else return t}const vi=e=>e.charCodeAt(0)===111&&e.charCodeAt(1)===110&&e.charCodeAt(2)>96&&e.charCodeAt(2)<123,Wl=(e,t,n,o,s,i)=>{const r=s==="svg";t==="class"?Il(e,o,r):t==="style"?Fl(e,n,o):nn(t)?Dn(t)||jl(e,t,n,o,i):(t[0]==="."?(t=t.slice(1),!0):t[0]==="^"?(t=t.slice(1),!1):Kl(e,t,o,r))?(ui(e,t,o),!e.tagName.includes("-")&&(t==="value"||t==="checked"||t==="selected")&&fi(e,t,o,r,i,t!=="value")):e._isVueCE&&(/[A-Z]/.test(t)||!le(o))?ui(e,lt(t),o,i,t):(t==="true-value"?e._trueValue=o:t==="false-value"&&(e._falseValue=o),fi(e,t,o,r))};function Kl(e,t,n,o){if(o)return!!(t==="innerHTML"||t==="textContent"||t in e&&vi(t)&&j(n));if(t==="spellcheck"||t==="draggable"||t==="translate"||t==="autocorrect"||t==="sandbox"&&e.tagName==="IFRAME"||t==="form"||t==="list"&&e.tagName==="INPUT"||t==="type"&&e.tagName==="TEXTAREA")return!1;if(t==="width"||t==="height"){const s=e.tagName;if(s==="IMG"||s==="VIDEO"||s==="CANVAS"||s==="SOURCE")return!1}return vi(t)&&le(n)?!1:t in e}const Yl=["ctrl","shift","alt","meta"],ql={stop:e=>e.stopPropagation(),prevent:e=>e.preventDefault(),self:e=>e.target!==e.currentTarget,ctrl:e=>!e.ctrlKey,shift:e=>!e.shiftKey,alt:e=>!e.altKey,meta:e=>!e.metaKey,left:e=>"button"in e&&e.button!==0,middle:e=>"button"in e&&e.button!==1,right:e=>"button"in e&&e.button!==2,exact:(e,t)=>Yl.some(n=>e[`${n}Key`]&&!t.includes(n))},hi=(e,t)=>{const n=e._withMods||(e._withMods={}),o=t.join(".");return n[o]||(n[o]=(s,...i)=>{for(let r=0;r<t.length;r++){const l=ql[t[r]];if(l&&l(s,t))return}return e(s,...i)})},Xl=ce({patchProp:Wl},Ml);let mi;function Zl(){return mi||(mi=rl(Xl))}const Jl=(...e)=>{const t=Zl().createApp(...e),{mount:n}=t;return t.mount=o=>{const s=ea(o);if(!s)return;const i=t._component;!j(i)&&!i.render&&!i.template&&(i.template=s.innerHTML),s.nodeType===1&&(s.textContent="");const r=n(s,!1,Ql(s));return s instanceof Element&&(s.removeAttribute("v-cloak"),s.setAttribute("data-v-app","")),r},t};function Ql(e){if(e instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&e instanceof MathMLElement)return"mathml"}function ea(e){return le(e)?document.querySelector(e):e}const Tf="modulepreload",Af=function(e,t){return new URL(e,t).href},Cf={},ta=function(t,n,o){let s=Promise.resolve();function i(r){const l=new Event("vite:preloadError",{cancelable:!0});if(l.payload=r,window.dispatchEvent(l),!l.defaultPrevented)throw r}return s.then(r=>{for(const l of r||[])l.status==="rejected"&&i(l.reason);return t().catch(i)})},na=`// ===== 0: MANDELBULB =====
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
`,oa=`// ===== 1: MANDELBOX =====
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
`,sa=`// ===== 2: MENGER SPONGE =====
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
`,ia=`// ===== 3: SIERPINSKI =====
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
`,ra=`// ===== 4: KALEIDOSCOPE =====
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
`,la=`// ===== 5: ORGANIC HYBRID =====
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
`,aa=`// ===== 6: FRACTAL LAND =====
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
`,ca=`// ===== 7: GALAXY NEBULA =====
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
`,fa=`// ===== 8: INFINITE TUNNEL =====
vec3 infiniteTunnel(vec2 uv, float time) {
  float angle = atan(uv.y, uv.x), radius = length(uv);
  float tunnel = 1.0 / radius + time * 0.5, twist = angle + tunnel * 0.5;
  vec2 tuv = vec2(twist / PI, tunnel);
  vec2 grid = fract(tuv * 8.0) - 0.5;
  float glow = 0.02 / (length(grid) + 0.02);
  return hsv2rgb(vec3(tunnel * 0.1 + angle * 0.1, 0.7, glow)) * smoothstep(0.0, 0.3, radius);
}
`,ua=`// ===== 9: PLASMA FRACTAL =====
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
`,da=`// ===== 10: CIRCUITS =====
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
`,pa=`// ===== 11: METABALLS =====
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
`,va=`// ===== 12: VOLUMETRIC LINES =====
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
`,ha=`// ===== 13: DISCO TUNNEL =====
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
`,ma=`// ===== 14: SPEED DRIVE =====
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
`,ga=`// ===== 15: HOT ROCKS =====
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
`,ba=`// ===== 16: SERVER ROOM =====
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
`,xa=`// ===== 17: REMNANT X =====
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
`,ya=`// ===== 18: KALI SET =====
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
`,_a=`// ===== 19: GENERATORS =====
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
`,wa=`// ===== 20: SIMPLICITY GALAXY =====
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
`,ka=`// ===== 21: RIBBONS =====
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
`,Sa=`// ===== 22: TWISTED RINGS =====
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
`,za=`// ===== 23: WAVES REMIX =====
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
`,Ta=`// ===== 24: DANCING METALIGHTS =====
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
`,Aa=`// ===== 25: IO BLOCKS =====
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
`,Ca=`// ===== 26: BEATING CIRCLES =====
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
`,Ea=`// ===== 27: CIRCLE WAVE =====
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
`,Ma=`// ===== 28: SOUNDFLOWER =====
vec3 soundflower(vec2 uv, float time) {
  float r = length(uv);
  float a = atan(uv.x, uv.y);
  float w = fakeAudio(abs(a) / 6.28);
  float t = 3.0 * sqrt(abs(w - 0.5));
  float f = 0.0;
  if (r < t) f = 1.0 - r / t;
  return pow(vec3(f), vec3(1.5, 1.1, 0.8));
}
`,Ra=`// ===== 29: POLAR BEATS =====
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
`,Ia=`// ===== 30: UNDULANT SPECTRE =====
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
`,Pa=`// ===== 31: REVISION 2015 =====
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
`,Oa=`// ===== 32: GAMEBOY STYLE =====
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
`,La=`// ===== 33: ELECTRIC STORM =====
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
`,Fa=`// ===== 34: VORTEX =====
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
`,Da=`// ===== 35: NEON GRID =====
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
`,Na=`// ===== 36: MATRIX RAIN =====
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
`,$a=`// ===== 37: FIRE =====
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
`,ja=`// ===== 38: AURORA =====
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
`,Ba=`// ===== 39: WORMHOLE =====
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
`,Ha=`// ===== 40: HEXAGONS =====
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
`,Ua=`// ===== 41: BUBBLES =====
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
`,Ga=`// ===== 42: LIGHTNING =====
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
`,Va=`// ===== 43: KALEIDOSCOPE 2D =====
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
`,Wa=`// ===== 44: STARFIELD =====
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
`,Ka=`// ===== 45: LIQUID METAL =====
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
`,Ya=`// ===== 46: FRACTAL TREE =====
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
`,qa=`// ===== 47: VORONOI =====
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
`,Xa=`// ===== 48: PSYCHEDELIC =====
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
`,Za=`// ===== 49: ENERGY FIELD =====
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
`,Ja=`precision highp float;
attribute vec2 aPosition;
varying vec2 vUV;

void main() {
  vUV = aPosition;
  gl_Position = vec4(aPosition, 0.0, 1.0);
}
`,Qa=`// ===== PRECISION AND UNIFORMS =====

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
`,ec=`// ===== MAIN SHADER PROGRAM =====
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
`,tc=Vt({__name:"BioFractalViewer",props:{mode:{default:0}},setup(e){const t=e,n=oe(null);let o=null,s=null,i=null,r=Date.now(),l=null;const c=Object.assign({"../../shaders/effects/mode-00-mandelbulb.glsl":na,"../../shaders/effects/mode-01-mandelbox.glsl":oa,"../../shaders/effects/mode-02-menger-sponge.glsl":sa,"../../shaders/effects/mode-03-sierpinski.glsl":ia,"../../shaders/effects/mode-04-kaleidoscope.glsl":ra,"../../shaders/effects/mode-05-organic-hybrid.glsl":la,"../../shaders/effects/mode-06-fractal-land.glsl":aa,"../../shaders/effects/mode-07-galaxy-nebula.glsl":ca,"../../shaders/effects/mode-08-infinite-tunnel.glsl":fa,"../../shaders/effects/mode-09-plasma-fractal.glsl":ua,"../../shaders/effects/mode-10-circuits.glsl":da,"../../shaders/effects/mode-11-metaballs.glsl":pa,"../../shaders/effects/mode-12-volumetric-lines.glsl":va,"../../shaders/effects/mode-13-disco-tunnel.glsl":ha,"../../shaders/effects/mode-14-speed-drive.glsl":ma,"../../shaders/effects/mode-15-hot-rocks.glsl":ga,"../../shaders/effects/mode-16-server-room.glsl":ba,"../../shaders/effects/mode-17-remnant-x.glsl":xa,"../../shaders/effects/mode-18-kali-set.glsl":ya,"../../shaders/effects/mode-19-generators.glsl":_a,"../../shaders/effects/mode-20-simplicity-galaxy.glsl":wa,"../../shaders/effects/mode-21-ribbons.glsl":ka,"../../shaders/effects/mode-22-twisted-rings.glsl":Sa,"../../shaders/effects/mode-23-waves-remix.glsl":za,"../../shaders/effects/mode-24-dancing-metalights.glsl":Ta,"../../shaders/effects/mode-25-io-blocks.glsl":Aa,"../../shaders/effects/mode-26-beating-circles.glsl":Ca,"../../shaders/effects/mode-27-circle-wave.glsl":Ea,"../../shaders/effects/mode-28-soundflower.glsl":Ma,"../../shaders/effects/mode-29-polar-beats.glsl":Ra,"../../shaders/effects/mode-30-undulant-spectre.glsl":Ia,"../../shaders/effects/mode-31-revision-2015.glsl":Pa,"../../shaders/effects/mode-32-gameboy-style.glsl":Oa,"../../shaders/effects/mode-33-electric-storm.glsl":La,"../../shaders/effects/mode-34-vortex.glsl":Fa,"../../shaders/effects/mode-35-neon-grid.glsl":Da,"../../shaders/effects/mode-36-matrix-rain.glsl":Na,"../../shaders/effects/mode-37-fire.glsl":$a,"../../shaders/effects/mode-38-aurora.glsl":ja,"../../shaders/effects/mode-39-wormhole.glsl":Ba,"../../shaders/effects/mode-40-hexagons.glsl":Ha,"../../shaders/effects/mode-41-bubbles.glsl":Ua,"../../shaders/effects/mode-42-lightning.glsl":Ga,"../../shaders/effects/mode-43-kaleidoscope-2d.glsl":Va,"../../shaders/effects/mode-44-starfield.glsl":Wa,"../../shaders/effects/mode-45-liquid-metal.glsl":Ka,"../../shaders/effects/mode-46-fractal-tree.glsl":Ya,"../../shaders/effects/mode-47-voronoi.glsl":qa,"../../shaders/effects/mode-48-psychedelic.glsl":Xa,"../../shaders/effects/mode-49-energy-field.glsl":Za}),d=Object.keys(c).sort().map(M=>c[M]).join(`

`),f=Ja,p=`${Qa}
${d}
${ec}`,w=(M,R)=>{if(!o)return null;const L=o.createShader(M);return L?(o.shaderSource(L,R),o.compileShader(L),o.getShaderParameter(L,o.COMPILE_STATUS)?L:(console.error("Shader error:",o.getShaderInfoLog(L)),null)):null},S=()=>{const M=n.value;if(!M||(o=M.getContext("webgl")||M.getContext("experimental-webgl"),!o))return!1;const R=w(o.VERTEX_SHADER,f),L=w(o.FRAGMENT_SHADER,p);if(!R||!L||(s=o.createProgram(),!s))return!1;if(o.attachShader(s,R),o.attachShader(s,L),o.linkProgram(s),!o.getProgramParameter(s,o.LINK_STATUS))return console.error("Link error:",o.getProgramInfoLog(s)),!1;const E=new Float32Array([-1,-1,1,-1,-1,1,-1,1,1,-1,1,1]),k=o.createBuffer();o.bindBuffer(o.ARRAY_BUFFER,k),o.bufferData(o.ARRAY_BUFFER,E,o.STATIC_DRAW);const U=o.getAttribLocation(s,"aPosition");return o.enableVertexAttribArray(U),o.vertexAttribPointer(U,2,o.FLOAT,!1,0,0),l={uTime:o.getUniformLocation(s,"uTime"),uResolution:o.getUniformLocation(s,"uResolution"),uMode:o.getUniformLocation(s,"uMode")},!0},m=()=>{const M=n.value;M&&(M.width=M.clientWidth,M.height=M.clientHeight,o&&o.viewport(0,0,M.width,M.height))},x=()=>{!o||!s||!n.value||!l||(o.useProgram(s),o.uniform1f(l.uTime,(Date.now()-r)/1e3),o.uniform2f(l.uResolution,n.value.width,n.value.height),o.uniform1i(l.uMode,t.mode),o.drawArrays(o.TRIANGLES,0,6),i=requestAnimationFrame(x))};return Yt(()=>{S()&&(m(),window.addEventListener("resize",m),x())}),Ct(()=>{i&&cancelAnimationFrame(i),window.removeEventListener("resize",m)}),(M,R)=>(ue(),ke("canvas",{ref_key:"canvasRef",ref:n,class:"bio-fractal-canvas"},null,512))}}),gi=(e,t)=>{const n=e.__vccOpts||e;for(const[o,s]of t)n[o]=s;return n},nc=gi(tc,[["__scopeId","data-v-1ee27525"]]),oc={class:"pv-container"},sc={class:"pv-svg-container"},ic={viewBox:"0 0 840 640",preserveAspectRatio:"xMidYMid meet"},rc=["x1","y1","x2","y2"],lc=["x1","y1","x2","y2"],ac=["x1","y1","x2","y2"],cc=["x1","y1","x2","y2"],fc=["d"],uc=["cx","cy"],dc=["transform"],pc=["x1","y1","x2","y2"],vc=["x1","y1","x2","y2"],hc=["x1","y1","x2","y2"],mc=["x1","y1","x2","y2"],gc=["d"],bc=["cx","cy"],xc=["transform"],yc=["x1","y1","x2","y2"],_c=["x1","y1","x2","y2"],wc=["x1","y1","x2","y2"],kc=["x1","y1","x2","y2"],Sc=["x1","y1","x2","y2"],zc=["x1","y1","x2","y2"],Tc=["points"],Ac=["d"],Cc=["cx","cy"],Ec=["transform"],Mc=["d"],Rc=["x1","y1","x2","y2"],Ic=["x1","y1","x2","y2"],Pc=["x1","y1","x2","y2"],Oc=["points"],Lc=["x1","y1","x2","y2"],Fc=["points"],Dc=["x1","y1","x2","y2"],Nc=["points"],$c=["transform"],jc=["cx","cy"],Bc=["cx","cy"],Hc=["cx","cy"],Uc=["x","y"],Gc=["x","y"],Vc=["x","y"],Wc=["x","y"],Kc={class:"pv-values"},Yc={class:"pv-values-main"},qc={class:"pv-values-text"},Xc={class:"pv-values-real"},Zc={class:"pv-values-imag"},Jc={class:"pv-values-time"},Qc={class:"pv-values-time-text"},ef={class:"pv-values-time-value"},Rn=1.3,tf=1,It=-2.8,Pt=-2.8,qe=-1.2,vt=1.3,In=1.3,Pn=1.3,nf=gi(Vt({__name:"ComplexWaveVisualization",setup(e){const t=oe(1.25),n=oe(!0);let o=null;const s=2*Math.PI*1.6,i=ee=>Math.exp(-1*Math.pow(ee-Rn,2)),r=(ee,O,A)=>{const Te=-ee*81*.7,Ae=ee*81*.35,On=O*61*.9,a=O*61*.25,u=-A*61;return{x:436+Te+On,y:355+Ae+a+u}},l=W(()=>i(t.value)*Math.cos(s*t.value)),c=W(()=>i(t.value)*Math.sin(s*t.value)),d=W(()=>{const ee=[];for(let O=0;O<=2.5;O+=.015){const A=i(O);ee.push({t:O,re:A*Math.cos(s*O),im:A*Math.sin(s*O)})}return ee}),f=W(()=>d.value.map((ee,O)=>{const A=r(ee.t,ee.re,ee.im);return`${O===0?"M":"L"} ${A.x} ${A.y}`}).join(" ")),p=W(()=>d.value.map((ee,O)=>{const A=r(qe,ee.re,ee.im);return`${O===0?"M":"L"} ${A.x} ${A.y}`}).join(" ")),w=W(()=>d.value.map((ee,O)=>{const A=r(ee.t,It,ee.im);return`${O===0?"M":"L"} ${A.x} ${A.y}`}).join(" ")),S=W(()=>d.value.map((ee,O)=>{const A=r(ee.t,ee.re,Pt);return`${O===0?"M":"L"} ${A.x} ${A.y}`}).join(" ")),m=W(()=>({tl:r(qe,-vt,vt),tr:r(qe,vt,vt),bl:r(qe,-vt,-vt),br:r(qe,vt,-vt)})),x=W(()=>r(qe,0,1.4)),M=W(()=>r(qe,0,-.3)),R=W(()=>r(qe,-.3,0)),L=W(()=>r(qe,1,0)),E=W(()=>({tl:r(0,It,In),tr:r(2.5,It,In),bl:r(0,It,-In),br:r(2.5,It,-In)})),k=W(()=>({bl:r(0,-Pn,Pt),br:r(0,Pn,Pt),tl:r(2.5,-Pn,Pt),tr:r(2.5,Pn,Pt)})),U=W(()=>r(Rn,0,0)),B=W(()=>r(Rn,0,1.6)),D=W(()=>r(Rn,1.5,0)),q=W(()=>r(0,0,0)),K=W(()=>r(2.7,0,0)),se=W(()=>r(t.value,l.value,c.value)),ve=W(()=>r(qe,l.value,c.value)),Se=W(()=>r(t.value,It,c.value)),De=W(()=>r(t.value,l.value,Pt)),Ne=W(()=>Math.atan2(E.value.tl.y-E.value.tr.y,E.value.tl.x-E.value.tr.x)*(180/Math.PI)),$e=W(()=>({x:(E.value.tl.x+E.value.tr.x)/2,y:(E.value.tl.y+E.value.tr.y)/2})),ae=W(()=>Math.atan2(k.value.bl.y-k.value.tl.y,k.value.bl.x-k.value.tl.x)*(180/Math.PI)),J=W(()=>({x:(k.value.br.x+k.value.tr.x)/2,y:(k.value.br.y+k.value.tr.y)/2})),X=W(()=>Math.atan2(m.value.tl.y-m.value.tr.y,m.value.tl.x-m.value.tr.x)*(180/Math.PI)),xe=W(()=>({x:(m.value.tl.x+m.value.tr.x)/2,y:(m.value.tl.y+m.value.tr.y)/2})),Xe=W(()=>({x:(q.value.x+K.value.x)/2,y:(q.value.y+K.value.y)/2}));let ye=0;const _e=()=>{ye++,n.value&&ye%2===0&&(t.value+=.02,t.value>2.5&&(t.value=0)),o=requestAnimationFrame(_e)};return Yt(()=>{o=requestAnimationFrame(_e)}),Ct(()=>{o&&cancelAnimationFrame(o)}),(ee,O)=>(ue(),ke("div",oc,[O[15]||(O[15]=h("div",{class:"pv-title"},[h("h1",{class:"pv-title-gradient-1"}," The Observer Effect explains why the same "),h("h2",{class:"pv-title-gradient-2"}," life feels different to different people ")],-1)),h("div",sc,[(ue(),ke("svg",ic,[O[4]||(O[4]=Cn('<defs data-v-65cb23ba><linearGradient id="pv-helixGradient" x1="0%" y1="0%" x2="100%" y2="0%" data-v-65cb23ba><stop offset="0%" stop-color="#a855f7" data-v-65cb23ba><animate attributeName="stop-color" values="#a855f7;#ec4899;#06b6d4;#a855f7" dur="4s" repeatCount="indefinite" data-v-65cb23ba></animate></stop><stop offset="50%" stop-color="#ec4899" data-v-65cb23ba><animate attributeName="stop-color" values="#ec4899;#06b6d4;#a855f7;#ec4899" dur="4s" repeatCount="indefinite" data-v-65cb23ba></animate></stop><stop offset="100%" stop-color="#06b6d4" data-v-65cb23ba><animate attributeName="stop-color" values="#06b6d4;#a855f7;#ec4899;#06b6d4" dur="4s" repeatCount="indefinite" data-v-65cb23ba></animate></stop></linearGradient><linearGradient id="pv-imGradient" x1="0%" y1="0%" x2="100%" y2="0%" data-v-65cb23ba><stop offset="0%" stop-color="#06b6d4" data-v-65cb23ba></stop><stop offset="100%" stop-color="#22d3d3" data-v-65cb23ba></stop></linearGradient><linearGradient id="pv-reGradient" x1="0%" y1="0%" x2="100%" y2="0%" data-v-65cb23ba><stop offset="0%" stop-color="#f97316" data-v-65cb23ba></stop><stop offset="100%" stop-color="#fb923c" data-v-65cb23ba></stop></linearGradient><linearGradient id="pv-spiralGradient" x1="0%" y1="0%" x2="100%" y2="100%" data-v-65cb23ba><stop offset="0%" stop-color="#a855f7" data-v-65cb23ba></stop><stop offset="100%" stop-color="#6366f1" data-v-65cb23ba></stop></linearGradient><linearGradient id="pv-axisGradient" x1="0%" y1="0%" x2="100%" y2="0%" data-v-65cb23ba><stop offset="0%" stop-color="#64748b" data-v-65cb23ba></stop><stop offset="100%" stop-color="#94a3b8" data-v-65cb23ba></stop></linearGradient><filter id="pv-glow-cyan" x="-50%" y="-50%" width="200%" height="200%" data-v-65cb23ba><feGaussianBlur stdDeviation="3" result="coloredBlur" data-v-65cb23ba></feGaussianBlur><feMerge data-v-65cb23ba><feMergeNode in="coloredBlur" data-v-65cb23ba></feMergeNode><feMergeNode in="SourceGraphic" data-v-65cb23ba></feMergeNode></feMerge></filter><filter id="pv-glow-orange" x="-50%" y="-50%" width="200%" height="200%" data-v-65cb23ba><feGaussianBlur stdDeviation="3" result="coloredBlur" data-v-65cb23ba></feGaussianBlur><feMerge data-v-65cb23ba><feMergeNode in="coloredBlur" data-v-65cb23ba></feMergeNode><feMergeNode in="SourceGraphic" data-v-65cb23ba></feMergeNode></feMerge></filter><filter id="pv-glow-purple" x="-50%" y="-50%" width="200%" height="200%" data-v-65cb23ba><feGaussianBlur stdDeviation="4" result="coloredBlur" data-v-65cb23ba></feGaussianBlur><feMerge data-v-65cb23ba><feMergeNode in="coloredBlur" data-v-65cb23ba></feMergeNode><feMergeNode in="SourceGraphic" data-v-65cb23ba></feMergeNode></feMerge></filter><filter id="pv-glow-strong" x="-100%" y="-100%" width="300%" height="300%" data-v-65cb23ba><feGaussianBlur stdDeviation="6" result="coloredBlur" data-v-65cb23ba></feGaussianBlur><feMerge data-v-65cb23ba><feMergeNode in="coloredBlur" data-v-65cb23ba></feMergeNode><feMergeNode in="coloredBlur" data-v-65cb23ba></feMergeNode><feMergeNode in="SourceGraphic" data-v-65cb23ba></feMergeNode></feMerge></filter></defs>',1)),h("line",{x1:E.value.bl.x,y1:E.value.bl.y,x2:E.value.tl.x,y2:E.value.tl.y,stroke:"#0e7490","stroke-width":"1",class:"pv-shimmer"},null,8,rc),h("line",{x1:E.value.tl.x,y1:E.value.tl.y,x2:E.value.tr.x,y2:E.value.tr.y,stroke:"#0e7490","stroke-width":"1",class:"pv-shimmer"},null,8,lc),h("line",{x1:E.value.bl.x,y1:E.value.bl.y,x2:E.value.br.x,y2:E.value.br.y,stroke:"#0e7490","stroke-width":"1",class:"pv-shimmer"},null,8,ac),h("line",{x1:E.value.tr.x,y1:E.value.tr.y,x2:E.value.br.x,y2:E.value.br.y,stroke:"#0e7490","stroke-width":"1",class:"pv-shimmer"},null,8,cc),h("path",{d:w.value,fill:"none",stroke:"url(#pv-imGradient)","stroke-width":"2"},null,8,fc),h("circle",{cx:Se.value.x,cy:Se.value.y,r:"4",fill:"#06b6d4",class:"pv-point-pulse"},null,8,uc),h("g",{transform:`translate(${$e.value.x}, ${$e.value.y-25}) rotate(${Ne.value})`},[...O[0]||(O[0]=[Cn('<text fill="#22d3d3" font-size="13" font-family="Times New Roman, serif" text-anchor="middle" style="letter-spacing:-0.5px;" data-v-65cb23ba><tspan font-weight="bold" data-v-65cb23ba>Im</tspan><tspan font-style="italic" data-v-65cb23ba> f</tspan><tspan data-v-65cb23ba>=e</tspan><tspan baseline-shift="super" font-size="9" data-v-65cb23ba>−γ(t−t₀)²</tspan><tspan font-style="italic" data-v-65cb23ba>sin(ωt)</tspan></text>',1)])],8,dc),h("line",{x1:k.value.bl.x,y1:k.value.bl.y,x2:k.value.br.x,y2:k.value.br.y,stroke:"#c2410c","stroke-width":"1",class:"pv-shimmer"},null,8,pc),h("line",{x1:k.value.bl.x,y1:k.value.bl.y,x2:k.value.tl.x,y2:k.value.tl.y,stroke:"#c2410c","stroke-width":"1",class:"pv-shimmer"},null,8,vc),h("line",{x1:k.value.br.x,y1:k.value.br.y,x2:k.value.tr.x,y2:k.value.tr.y,stroke:"#c2410c","stroke-width":"1",class:"pv-shimmer"},null,8,hc),h("line",{x1:k.value.tl.x,y1:k.value.tl.y,x2:k.value.tr.x,y2:k.value.tr.y,stroke:"#c2410c","stroke-width":"1",class:"pv-shimmer"},null,8,mc),h("path",{d:S.value,fill:"none",stroke:"url(#pv-reGradient)","stroke-width":"2"},null,8,gc),h("circle",{cx:De.value.x,cy:De.value.y,r:"4",fill:"#f97316",class:"pv-point-pulse"},null,8,bc),h("g",{transform:`translate(${J.value.x}, ${J.value.y+25}) rotate(${ae.value})`},[...O[1]||(O[1]=[Cn('<text fill="#fb923c" font-size="13" font-family="Times New Roman, serif" text-anchor="middle" style="letter-spacing:-0.5px;" data-v-65cb23ba><tspan font-weight="bold" data-v-65cb23ba>Re</tspan><tspan font-style="italic" data-v-65cb23ba> f</tspan><tspan data-v-65cb23ba>=e</tspan><tspan baseline-shift="super" font-size="9" data-v-65cb23ba>−γ(t−t₀)²</tspan><tspan font-style="italic" data-v-65cb23ba>cos(ωt)</tspan></text>',1)])],8,xc),h("line",{x1:m.value.bl.x,y1:m.value.bl.y,x2:m.value.tl.x,y2:m.value.tl.y,stroke:"#7c3aed","stroke-width":"1",class:"pv-shimmer"},null,8,yc),h("line",{x1:m.value.tl.x,y1:m.value.tl.y,x2:m.value.tr.x,y2:m.value.tr.y,stroke:"#7c3aed","stroke-width":"1",class:"pv-shimmer"},null,8,_c),h("line",{x1:m.value.bl.x,y1:m.value.bl.y,x2:m.value.br.x,y2:m.value.br.y,stroke:"#7c3aed","stroke-width":"1",class:"pv-shimmer"},null,8,wc),h("line",{x1:m.value.br.x,y1:m.value.br.y,x2:m.value.tr.x,y2:m.value.tr.y,stroke:"#7c3aed","stroke-width":"1",class:"pv-shimmer"},null,8,kc),h("line",{x1:M.value.x,y1:M.value.y,x2:x.value.x,y2:x.value.y,stroke:"#8b5cf6","stroke-width":"1"},null,8,Sc),h("line",{x1:R.value.x,y1:R.value.y,x2:L.value.x,y2:L.value.y,stroke:"#8b5cf6","stroke-width":"1"},null,8,zc),h("polygon",{points:`${x.value.x},${x.value.y-6} ${x.value.x-3},${x.value.y+2} ${x.value.x+3},${x.value.y+2}`,fill:"#a855f7"},null,8,Tc),h("path",{d:p.value,fill:"none",stroke:"url(#pv-spiralGradient)","stroke-width":"2"},null,8,Ac),h("circle",{cx:ve.value.x,cy:ve.value.y,r:"4",fill:"#a855f7",class:"pv-point-pulse"},null,8,Cc),h("g",{transform:`translate(${xe.value.x}, ${xe.value.y-20}) rotate(${X.value})`},[...O[2]||(O[2]=[Cn('<text fill="#c084fc" font-size="10" font-family="Times New Roman, serif" text-anchor="middle" style="letter-spacing:-0.5px;" data-v-65cb23ba><tspan font-style="italic" data-v-65cb23ba>f</tspan><tspan data-v-65cb23ba>=e</tspan><tspan baseline-shift="super" font-size="7" data-v-65cb23ba>−γ(t−t₀)²</tspan><tspan font-style="italic" data-v-65cb23ba>e</tspan><tspan baseline-shift="super" font-size="7" data-v-65cb23ba>iωt</tspan></text>',1)])],8,Ec),h("path",{d:f.value,fill:"none",stroke:"url(#pv-helixGradient)","stroke-width":"4"},null,8,Mc),h("line",{x1:se.value.x,y1:se.value.y,x2:Se.value.x,y2:Se.value.y,stroke:"#06b6d4","stroke-width":"1","stroke-dasharray":"6,4",class:"pv-dash-flow",opacity:"0.7"},null,8,Rc),h("line",{x1:se.value.x,y1:se.value.y,x2:De.value.x,y2:De.value.y,stroke:"#f97316","stroke-width":"1","stroke-dasharray":"6,4",class:"pv-dash-flow",opacity:"0.7"},null,8,Ic),h("line",{x1:q.value.x,y1:q.value.y,x2:K.value.x,y2:K.value.y,stroke:"url(#pv-axisGradient)","stroke-width":"2"},null,8,Pc),h("polygon",{points:`${K.value.x-6},${K.value.y+6} ${K.value.x+6},${K.value.y-2} ${K.value.x+2},${K.value.y+10}`,fill:"#94a3b8"},null,8,Oc),h("line",{x1:U.value.x,y1:U.value.y+8,x2:B.value.x,y2:B.value.y,stroke:"url(#pv-axisGradient)","stroke-width":"2"},null,8,Lc),h("polygon",{points:`${B.value.x},${B.value.y-8} ${B.value.x-4},${B.value.y+2} ${B.value.x+4},${B.value.y+2}`,fill:"#94a3b8"},null,8,Fc),h("line",{x1:U.value.x-8,y1:U.value.y-5,x2:D.value.x,y2:D.value.y,stroke:"url(#pv-axisGradient)","stroke-width":"2"},null,8,Dc),h("polygon",{points:`${D.value.x+8},${D.value.y+4} ${D.value.x-2},${D.value.y-4} ${D.value.x-4},${D.value.y+6}`,fill:"#94a3b8"},null,8,Nc),h("g",{transform:`translate(${Xe.value.x+30}, ${Xe.value.y-70}) rotate(${Ne.value})`},[...O[3]||(O[3]=[h("text",{fill:"#e879f9","font-size":"10","font-family":"Times New Roman, serif","text-anchor":"middle",style:{"letter-spacing":"-0.5px"}},[h("tspan",{"font-style":"italic"},"f(t)"),h("tspan",null,"=Re+"),h("tspan",{"font-style":"italic"},"i"),h("tspan",null,"·Im")],-1)])],8,$c),h("circle",{cx:se.value.x,cy:se.value.y,r:"10",fill:"url(#pv-helixGradient)",opacity:"0.3",class:"pv-point-pulse"},null,8,jc),h("circle",{cx:se.value.x,cy:se.value.y,r:"6",fill:"#fff"},null,8,Bc),h("circle",{cx:se.value.x,cy:se.value.y,r:"3",fill:"url(#pv-helixGradient)"},null,8,Hc),h("text",{x:B.value.x-30,y:B.value.y+8,fill:"#22d3d3","font-size":"18","font-weight":"bold","font-family":"serif"},"Im",8,Uc),h("text",{x:D.value.x+10,y:D.value.y+6,fill:"#fb923c","font-size":"18","font-weight":"bold","font-family":"serif"},"Re",8,Gc),h("text",{x:K.value.x-3,y:K.value.y+22,fill:"#c084fc","font-size":"18","font-style":"italic","font-family":"serif"},"t",8,Vc),h("text",{x:U.value.x+5,y:U.value.y+20,fill:"#94a3b8","font-size":"13","font-style":"italic","font-family":"serif"},"t₀",8,Wc)]))]),h("div",Kc,[h("div",Yc,[h("span",qc,[O[5]||(O[5]=h("span",{class:"pv-values-f"},"f",-1)),O[6]||(O[6]=h("span",{class:"pv-values-punctuation"},"(",-1)),O[7]||(O[7]=h("span",{class:"pv-values-t"},"t",-1)),O[8]||(O[8]=h("span",{class:"pv-values-punctuation"},") = ",-1)),h("span",Xc,Be(l.value>=0?"+":"")+Be(l.value.toFixed(2)),1),O[9]||(O[9]=h("span",{class:"pv-values-punctuation"}," + ",-1)),h("span",Zc,Be(c.value.toFixed(2)),1),O[10]||(O[10]=h("span",{class:"pv-values-i"}," i",-1))])]),h("div",Jc,[h("span",Qc,[O[11]||(O[11]=h("span",{class:"pv-values-time-t"},"t",-1)),O[12]||(O[12]=h("span",{class:"pv-values-time-punctuation"}," = ",-1)),h("span",ef,Be((t.value/tf).toFixed(2)),1),O[13]||(O[13]=h("span",{class:"pv-values-time-punctuation"},null,-1)),O[14]||(O[14]=h("span",{class:"pv-values-time-period"},"T",-1))])])])]))}}),[["__scopeId","data-v-65cb23ba"]]),of={class:"app-container"},sf={class:"c-controls"},rf={class:"c-controls-row"},lf=["value"],af=["value"],cf={key:0,class:"c-slider-container"},ff=["value"],uf={class:"c-slider-label"},df={class:"c-foreground-layer"};Jl(Vt({__name:"App",setup(e){const t=Tr(()=>ta(()=>Promise.resolve().then(()=>_f),void 0,Ln&&Ln.tagName.toUpperCase()==="SCRIPT"&&Ln.src||new URL("assets/index-CnEjDQHo.js",document.baseURI).href)),n=oe(!0),o=oe(!0),s=B=>{B.target instanceof HTMLInputElement||B.target instanceof HTMLTextAreaElement||B.key.toLowerCase()==="q"&&!B.ctrlKey&&!B.metaKey&&!B.altKey&&(B.preventDefault(),o.value=!o.value)},i=()=>{o.value=!1};Yt(()=>{window.addEventListener("keydown",s)}),Ct(()=>{window.removeEventListener("keydown",s)});const r=oe(23),l=oe(50),c=oe(!1),d=oe(!1);let f=null;const p=oe(!1);(()=>{p.value="ontouchstart"in window||navigator.maxTouchPoints>0})();const S=()=>{p.value||(f&&(clearTimeout(f),f=null),d.value=!0)},m=()=>{p.value||(f=window.setTimeout(()=>{d.value=!1,f=null},1e3))},x=()=>{f&&(clearTimeout(f),f=null),d.value=!d.value},M=[{value:0,label:"Mandelbulb"},{value:1,label:"Mandelbox"},{value:2,label:"Menger Sponge"},{value:3,label:"Sierpinski"},{value:4,label:"Kaleidoscope 3D"},{value:5,label:"Organic Hybrid"},{value:6,label:"Fractal Land"},{value:7,label:"+ Galaxy Nebula"},{value:8,label:"+ Infinite Tunnel"},{value:9,label:"+ Plasma Fractal"},{value:10,label:"+ Circuits"},{value:11,label:"+ Metaballs"},{value:12,label:"+ Volumetric Lines"},{value:13,label:"+ Disco Tunnel"},{value:14,label:"+ Speed Drive"},{value:15,label:"+ Hot Rocks"},{value:16,label:"+ Server Room"},{value:17,label:"+ Remnant X"},{value:18,label:"+ Kali Set"},{value:19,label:"+ Generators"},{value:20,label:"+ Simplicity Galaxy"},{value:21,label:"+ Ribbons"},{value:22,label:"+ Twisted Rings"},{value:23,label:"+ Waves Remix"},{value:24,label:"+ Dancing Metalights"},{value:25,label:"+ IO Blocks"},{value:26,label:"+ Beating Circles"},{value:27,label:"+ Circle Wave"},{value:28,label:"+ Soundflower"},{value:29,label:"+ Polar Beats"},{value:30,label:"+ Undulant Spectre"},{value:31,label:"+ Revision 2015"},{value:32,label:"+ Gameboy Style"},{value:33,label:"+ Electric Storm"},{value:34,label:"+ Vortex"},{value:35,label:"+ Neon Grid"},{value:36,label:"+ Matrix Rain"},{value:37,label:"+ Fire"},{value:38,label:"+ Aurora"},{value:39,label:"+ Wormhole"},{value:40,label:"+ Hexagons"},{value:41,label:"+ Bubbles"},{value:42,label:"+ Lightning"},{value:43,label:"+ Kaleidoscope 2D"},{value:44,label:"+ Starfield"},{value:45,label:"+ Liquid Metal"},{value:46,label:"+ Fractal Tree"},{value:47,label:"+ Voronoi"},{value:48,label:"+ Psychedelic"},{value:49,label:"+ Energy Field"}],R=W(()=>({opacity:l.value/100,filter:`brightness(${.3+l.value/100*.7})`})),L=()=>{n.value=!n.value},E=()=>{c.value=!c.value},k=B=>{const D=B.target;r.value=parseInt(D.value)},U=B=>{const D=B.target;l.value=parseInt(D.value)};return(B,D)=>(ue(),ke("div",of,[h("div",sf,[h("button",{class:Oe(["c-menu-toggle",{"c-menu-toggle--open":c.value}]),onClick:E},[...D[1]||(D[1]=[h("span",{class:"c-hamburger-line"},null,-1),h("span",{class:"c-hamburger-line"},null,-1),h("span",{class:"c-hamburger-line"},null,-1)])],2),h("div",{class:Oe(["c-menu-panel",{"c-menu-panel--visible":c.value}])},[h("div",rf,[h("select",{class:"c-fractal-select",onChange:k,value:r.value},[(ue(),ke(Pe,null,ks(M,q=>h("option",{key:q.value,value:q.value},Be(q.label),9,af)),64))],40,lf),h("button",{class:"c-fractal-toggle",onClick:L},Be(n.value?"ON":"OFF"),1)]),n.value?(ue(),ke("div",cf,[D[2]||(D[2]=h("span",{class:"c-slider-label"},"Intensity",-1)),h("input",{type:"range",class:"c-brightness-slider",min:"10",max:"100",value:l.value,onInput:U},null,40,ff),h("span",uf,Be(l.value)+"%",1)])):st("",!0)],2)]),h("div",{class:Oe(["c-background-layer",{"c-background-layer--hidden":!n.value}]),style:Lt(R.value)},[n.value?(ue(),xo(nc,{key:0,mode:r.value},null,8,["mode"])):st("",!0)],6),h("div",df,[be(nf)]),h("div",{class:"c-nav-footer",onMouseenter:S,onMouseleave:m},[h("button",{class:Oe(["c-nav-toggle",{"c-nav-toggle--open":d.value}]),onClick:x},[...D[3]||(D[3]=[h("span",{class:"c-nav-arrow"},"↑",-1)])],2),h("div",{class:Oe(["c-nav-menu",{"c-nav-menu--visible":d.value}])},[...D[4]||(D[4]=[h("a",{href:"https://diegonmarcos.github.io/myprofile/",class:"c-nav-button",target:"_blank",rel:"noopener noreferrer"}," Profile ",-1),h("a",{href:"https://diegonmarcos.github.io/linktree/",class:"c-nav-button",target:"_blank",rel:"noopener noreferrer"}," Linktree ",-1),h("a",{href:"https://diegonmarcos.github.io/landpage/",class:"c-nav-button",target:"_blank",rel:"noopener noreferrer"}," Landpage ",-1)])],2)],32),h("button",{class:"c-cube-trigger",onClick:D[0]||(D[0]=q=>o.value=!0),title:"Cube View (Q)"},[...D[5]||(D[5]=[h("svg",{viewBox:"0 0 24 24",width:"20",height:"20",fill:"none",stroke:"currentColor","stroke-width":"2"},[h("path",{d:"M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"})],-1),h("span",{class:"c-cube-trigger__key"},"Q",-1)])]),be(os(t),{active:o.value,onClose:i},null,8,["active"])]))}})).mount("#app");const pf={class:"c-cube-scene"},vf=["src"],hf=["src"],mf=["src"],gf={key:1,class:"c-cube-view-mode"},bf={key:2,class:"c-cube-hint"},xf={key:3,class:"c-cube-indicator"},yf=["onClick"],bi=-30,xi=-45,_f=Object.freeze(Object.defineProperty({__proto__:null,default:Vt({__name:"CubeView",props:{active:{type:Boolean,default:!1}},emits:["close"],setup(e,{emit:t}){const n=e,o=t,s=oe(n.active),i=oe(bi),r=oe(xi),l=oe(1),c=oe(!1),d=oe({x:0,y:0}),f=oe(0),p=oe(!0),w=oe(!1),S=oe(!1),m=oe(0),x=oe(0),M=oe(0);let R=null;const L=["Front","Right","Back","Left","Top","Bottom"],E=["observer_effect.html","cube_fractal_neon.html","perspectives.html",null,null,null],k={front:"observer_effect.html",right:"cube_fractal_neon.html",back:"perspectives.html"};let U=0,B={x:0,y:0};const D=(A,P)=>{if(w.value)return;const G=Date.now()-U;if(Math.sqrt(Math.pow(P.clientX-B.x,2)+Math.pow(P.clientY-B.y,2))>10||G>200)return;const Te=E[A];Te&&(window.location.href=Te)},q=tr(new Set([0,1,2])),K=A=>q.value.has(A),se=()=>{var G;const A={0:[1,3,4,5],1:[0,2,4,5],2:[1,3,4,5],3:[0,2,4,5],4:[0,1,2,3],5:[0,1,2,3]},P=new Set(q.value);P.add(f.value),(G=A[f.value])==null||G.forEach(ze=>P.add(ze)),P.size!==q.value.size&&(q.value=P)},ve=[{x:0,y:0},{x:0,y:-90},{x:0,y:180},{x:0,y:90},{x:90,y:0},{x:-90,y:0}],Se=[{x:-30,y:-45},{x:-30,y:-135},{x:-30,y:135},{x:-30,y:45},{x:-60,y:-45},{x:60,y:-45}];gn(()=>n.active,A=>{s.value=A,A?(document.body.style.overflow="hidden",i.value=bi,r.value=xi,l.value=1,p.value=!0,f.value=0):document.body.style.overflow=""});const De=W(()=>({transform:`translate3d(0, 0, -300px) scale3d(${l.value}, ${l.value}, ${l.value}) rotateX(${i.value}deg) rotateY(${r.value}deg)`})),Ne=(A,P,G=400)=>new Promise(ze=>{w.value=!0;const Te=i.value,Ae=r.value,On=performance.now();let a=P-Ae;a>180&&(a-=360),a<-180&&(a+=360);const u=Ae+a,v=y=>{const g=y-On,b=Math.min(g/G,1),C=1-Math.pow(1-b,3);i.value=Te+(A-Te)*C,r.value=Ae+(u-Ae)*C,b<1?requestAnimationFrame(v):(i.value=A,r.value=P,w.value=!1,ze())};requestAnimationFrame(v)}),$e=async A=>{w.value||(f.value=A,p.value?(await Ne(ve[A].x,ve[A].y),p.value=!1):(await Ne(Se[A].x,Se[A].y),p.value=!0))},ae=async()=>{w.value||(p.value?(await Ne(ve[f.value].x,ve[f.value].y),p.value=!1):(await Ne(Se[f.value].x,Se[f.value].y),p.value=!0))},J=A=>{if(A.length<2)return 0;const P=A[0].clientX-A[1].clientX,G=A[0].clientY-A[1].clientY;return Math.sqrt(P*P+G*G)},X=A=>{if(w.value)return;U=Date.now();const P="touches"in A?A.touches[0]:A;if(B={x:P.clientX,y:P.clientY},R&&(cancelAnimationFrame(R),R=null),x.value=0,M.value=0,"touches"in A&&A.touches.length===2){S.value=!0,m.value=J(A.touches);return}c.value=!0,d.value={x:P.clientX,y:P.clientY}},xe=A=>{if(!s.value||w.value)return;if("touches"in A&&A.touches.length===2){A.preventDefault();const Te=J(A.touches);if(m.value>0){const Ae=Te/m.value;l.value=Math.max(.3,Math.min(2,l.value*Ae))}m.value=Te;return}if(!c.value)return;const P="touches"in A?A.touches[0]:A,G=P.clientX-d.value.x,ze=P.clientY-d.value.y;M.value=G*.4,x.value=-ze*.4,r.value+=M.value,i.value+=x.value,d.value={x:P.clientX,y:P.clientY},ee()},Xe=()=>{if(Math.abs(x.value)<.1&&Math.abs(M.value)<.1){R=null;return}x.value*=.95,M.value*=.95,r.value+=M.value,i.value+=x.value,ee(),R=requestAnimationFrame(Xe)},ye=()=>{c.value&&(Math.abs(x.value)>.5||Math.abs(M.value)>.5)&&(R=requestAnimationFrame(Xe)),c.value=!1,S.value=!1,m.value=0},_e=A=>{if(!s.value)return;A.preventDefault();const P=A.deltaY>0?.95:1.05;l.value=Math.max(.3,Math.min(2,l.value*P))},ee=()=>{let A=(r.value%360+360)%360;Math.abs(i.value)>60?f.value=i.value>0?4:5:A>=315||A<45?f.value=0:A>=45&&A<135?f.value=3:A>=135&&A<225?f.value=2:f.value=1;const P=Math.abs(i.value)>15&&Math.abs(i.value)<75,G=A%90>15&&A%90<75;p.value=P||G,se()},O=A=>{if(s.value){if(A.key.toLowerCase()==="q"||A.key==="Escape"){A.preventDefault(),o("close");return}if(A.key===" "){A.preventDefault(),ae();return}if(!w.value)switch(A.key){case"ArrowRight":f.value<4&&$e((f.value+1)%4);break;case"ArrowLeft":f.value<4&&$e((f.value+3)%4);break;case"ArrowUp":$e(4);break;case"ArrowDown":$e(5);break}}};return Yt(()=>{window.addEventListener("mousemove",xe),window.addEventListener("mouseup",ye),window.addEventListener("touchmove",xe),window.addEventListener("touchend",ye),window.addEventListener("keydown",O)}),Ct(()=>{window.removeEventListener("mousemove",xe),window.removeEventListener("mouseup",ye),window.removeEventListener("touchmove",xe),window.removeEventListener("touchend",ye),window.removeEventListener("keydown",O),document.body.style.overflow="",R&&cancelAnimationFrame(R)}),(A,P)=>(ue(),xo(kr,{to:"body"},[h("div",{class:Oe(["c-cube-overlay",{"c-cube-overlay--active":s.value}]),onWheel:hi(_e,["prevent"]),onMousedown:X,onTouchstart:hi(X,["prevent"])},[h("div",pf,[h("div",{class:Oe(["c-cube",{"c-cube--animating":w.value}]),style:Lt(De.value)},[h("div",{class:"c-cube__face c-cube__face--front",onClick:P[0]||(P[0]=G=>D(0,G))},[s.value&&K(0)?(ue(),ke("iframe",{key:0,src:k.front,class:"c-cube__iframe",title:"Observer Effect",loading:"eager",allow:"accelerometer; autoplay"},null,8,vf)):st("",!0)]),h("div",{class:"c-cube__face c-cube__face--right",onClick:P[1]||(P[1]=G=>D(1,G))},[s.value&&K(1)?(ue(),ke("iframe",{key:0,src:k.right,class:"c-cube__iframe",title:"Neon Cube",loading:"eager",allow:"accelerometer; autoplay"},null,8,hf)):st("",!0)]),h("div",{class:"c-cube__face c-cube__face--back",onClick:P[2]||(P[2]=G=>D(2,G))},[s.value&&K(2)?(ue(),ke("iframe",{key:0,src:k.back,class:"c-cube__iframe",title:"Perspectives",loading:"eager",allow:"accelerometer; autoplay"},null,8,mf)):st("",!0)]),h("div",{class:"c-cube__face c-cube__face--left",onClick:P[3]||(P[3]=G=>D(3,G))},[...P[7]||(P[7]=[h("div",{class:"c-cube__placeholder c-cube__placeholder--gradient-1"},[h("h2",null,"Coming Soon"),h("p",null,"Future content")],-1)])]),h("div",{class:"c-cube__face c-cube__face--top",onClick:P[4]||(P[4]=G=>D(4,G))},[...P[8]||(P[8]=[h("div",{class:"c-cube__placeholder c-cube__placeholder--gradient-2"},[h("h2",null,"Projects"),h("p",null,"View from above")],-1)])]),h("div",{class:"c-cube__face c-cube__face--bottom",onClick:P[5]||(P[5]=G=>D(5,G))},[...P[9]||(P[9]=[h("div",{class:"c-cube__placeholder c-cube__placeholder--gradient-3"},[h("h2",null,"Contact"),h("p",null,"Get in touch")],-1)])])],6)]),s.value?(ue(),ke("button",{key:0,class:"c-cube-exit",onClick:P[6]||(P[6]=G=>o("close")),title:"Exit to 2D View (Q)"},[...P[10]||(P[10]=[h("svg",{viewBox:"0 0 24 24",width:"24",height:"24",fill:"none",stroke:"currentColor","stroke-width":"2"},[h("path",{d:"M18 6L6 18M6 6l12 12"})],-1)])])):st("",!0),s.value?(ue(),ke("div",gf,Be(p.value?"Isometric View":`${L[f.value]} Face`),1)):st("",!0),s.value?(ue(),ke("div",bf,[...P[11]||(P[11]=[h("span",null,"Drag to rotate",-1),h("span",{class:"c-cube-hint__separator"},"|",-1),h("span",null,"Click face to open",-1),h("span",{class:"c-cube-hint__separator"},"|",-1),h("span",null,[h("kbd",null,"Q"),Zs(" exit to 2D")],-1)])])):st("",!0),s.value?(ue(),ke("div",xf,[(ue(),ke(Pe,null,ks(L,(G,ze)=>h("div",{key:G,class:Oe(["c-cube-indicator__dot",{"c-cube-indicator__dot--active":f.value===ze}]),onClick:Te=>$e(ze)},Be(G),11,yf)),64))])):st("",!0)],34)]))}})},Symbol.toStringTag,{value:"Module"}))})();
