(function(){"use strict";var yi=document.createElement("style");yi.textContent=`.bio-fractal-canvas[data-v-c9463404]{width:100%;height:100%;display:block}@keyframes pv-shimmer-65cb23ba{0%,to{opacity:.6}50%{opacity:1}}@keyframes pv-glow-pulse-65cb23ba{0%,to{filter:drop-shadow(0 0 3px currentColor)}50%{filter:drop-shadow(0 0 12px currentColor)}}@keyframes pv-dash-flow-65cb23ba{0%{stroke-dashoffset:0}to{stroke-dashoffset:-20}}@keyframes pv-point-pulse-65cb23ba{0%,to{r:6;opacity:1}50%{r:9;opacity:.8}}.pv-shimmer[data-v-65cb23ba]{animation:pv-shimmer-65cb23ba 2s ease-in-out infinite}.pv-glow-pulse[data-v-65cb23ba]{animation:pv-glow-pulse-65cb23ba 1.5s ease-in-out infinite}.pv-dash-flow[data-v-65cb23ba]{animation:pv-dash-flow-65cb23ba 1s linear infinite}.pv-point-pulse[data-v-65cb23ba]{animation:pv-point-pulse-65cb23ba .8s ease-in-out infinite}.pv-container[data-v-65cb23ba]{width:100%;height:100%;display:flex;flex-direction:column;align-items:center;justify-content:center;padding:10px;overflow:hidden;background:transparent}.pv-title[data-v-65cb23ba]{text-align:center;margin-bottom:16px;padding:0 16px;width:100%;max-width:840px}.pv-title h1[data-v-65cb23ba],.pv-title h2[data-v-65cb23ba]{font-size:clamp(1.4rem,4.5vw,2rem);font-weight:700;line-height:1.3;margin:0}.pv-title-gradient-1[data-v-65cb23ba]{background:linear-gradient(to right,#a855f7,#ec4899,#22d3ee);-webkit-background-clip:text;-webkit-text-fill-color:transparent;background-clip:text}.pv-title-gradient-2[data-v-65cb23ba]{background:linear-gradient(to right,#22d3ee,#a855f7,#ec4899);-webkit-background-clip:text;-webkit-text-fill-color:transparent;background-clip:text}.pv-svg-container[data-v-65cb23ba]{position:relative;width:100%;max-width:840px;height:auto;aspect-ratio:840/640;flex-shrink:1}.pv-svg-container svg[data-v-65cb23ba]{width:100%;height:100%}.pv-values[data-v-65cb23ba]{margin-top:16px;width:100%;max-width:580px;text-align:center;padding:0 16px}.pv-values-main[data-v-65cb23ba]{text-align:center;margin-bottom:20px}.pv-values-text[data-v-65cb23ba]{font-size:.9rem;font-family:Times New Roman,serif}.pv-values-f[data-v-65cb23ba]{color:#a855f7;font-style:italic}.pv-values-punctuation[data-v-65cb23ba]{color:#d1d5db}.pv-values-t[data-v-65cb23ba]{color:#a855f7;font-style:italic}.pv-values-real[data-v-65cb23ba]{color:#fb923c}.pv-values-imag[data-v-65cb23ba]{color:#22d3d3}.pv-values-i[data-v-65cb23ba]{color:#22d3d3;font-style:italic}.pv-values-time[data-v-65cb23ba]{text-align:center}.pv-values-time-text[data-v-65cb23ba]{font-size:.85rem;font-family:Times New Roman,serif}.pv-values-time-t[data-v-65cb23ba]{color:#a855f7;font-style:italic}.pv-values-time-punctuation[data-v-65cb23ba]{color:#9ca3af}.pv-values-time-value[data-v-65cb23ba]{color:#d1d5db}.pv-values-time-period[data-v-65cb23ba]{color:#a855f7;font-style:italic}*{box-sizing:border-box;margin:0;padding:0}html,body{width:100%;height:100%;overflow:hidden}body{background-color:#000;font-family:-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,sans-serif;color:#fff}button{border:none;background:none;padding:0;cursor:pointer;font:inherit}select{font-family:-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,sans-serif}canvas{display:block}.o-fullscreen{width:100%;height:100%;position:relative}.o-layer{position:absolute;top:0;left:0;width:100%;height:100%}.o-layer--background{z-index:0}.o-layer--foreground{z-index:1;display:flex;align-items:center;justify-content:center;pointer-events:none}.o-fixed{position:fixed}.c-background-layer{position:absolute;top:0;left:0;width:100%;height:100%;z-index:0;transition-property:opacity,filter;transition-duration:.3s;transition-timing-function:ease}.c-background-layer--hidden{opacity:0!important;pointer-events:none}.c-background-layer canvas{width:100%!important;height:100%!important}.c-foreground-layer{position:absolute;top:0;left:0;width:100%;height:100%;z-index:1;display:flex;align-items:center;justify-content:center;pointer-events:none}.c-controls{position:fixed;top:10px;right:10px;z-index:100;display:flex;flex-direction:column;gap:8px;align-items:flex-end}.c-menu-toggle{background:transparent!important;backdrop-filter:none;-webkit-backdrop-filter:none;transition-property:background,transform;transition-duration:.3s;transition-timing-function:ease;border:none;color:#fff;width:36px;height:36px;border-radius:8px;display:flex;align-items:center;justify-content:center;flex-direction:column;gap:4px;padding:8px}.c-menu-toggle:hover{background:transparent!important}.c-menu-toggle:hover .c-hamburger-line{box-shadow:0 0 8px #fff6}.c-menu-toggle--open{transform:rotate(90deg)}.c-hamburger-line{display:block;width:100%;height:2px;background:#fffc;border-radius:1px;transition-property:background,box-shadow;transition-duration:.3s;transition-timing-function:ease;box-shadow:0 0 4px #fff3}.c-menu-panel{display:flex;flex-direction:column;gap:8px;align-items:flex-end;max-height:0;overflow:hidden;opacity:0;transition-property:max-height,opacity;transition-duration:.3s;transition-timing-function:ease}.c-menu-panel--visible{max-height:200px;opacity:1}.c-controls-row{display:flex;gap:8px;align-items:center}.c-fractal-toggle{background:#ffffff1a;-webkit-backdrop-filter:blur(4px);backdrop-filter:blur(4px);transition-property:background;transition-duration:.3s;transition-timing-function:ease;border:1px solid rgba(255,255,255,.3);color:#fff;padding:8px 12px;border-radius:6px;font-size:12px}.c-fractal-toggle:hover{background:#fff3}.c-fractal-select{background:#ffffff1a;-webkit-backdrop-filter:blur(4px);backdrop-filter:blur(4px);border:1px solid rgba(255,255,255,.3);color:#fff;padding:8px 28px 8px 12px;border-radius:6px;font-size:12px;outline:none;-webkit-appearance:none;-moz-appearance:none;appearance:none;background-image:url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' fill='white' viewBox='0 0 16 16'%3E%3Cpath d='M8 11L3 6h10l-5 5z'/%3E%3C/svg%3E");background-repeat:no-repeat;background-position:right 8px center;transition-property:background-color;transition-duration:.3s;transition-timing-function:ease}.c-fractal-select:hover{background-color:#fff3}.c-fractal-select option{background:#1a1a2e;color:#fff}.c-slider-container{background:#ffffff1a;-webkit-backdrop-filter:blur(4px);backdrop-filter:blur(4px);display:flex;align-items:center;gap:8px;border:1px solid rgba(255,255,255,.3);padding:6px 12px;border-radius:6px}.c-slider-label{color:#fff;font-size:11px;white-space:nowrap}.c-brightness-slider{-webkit-appearance:none;-moz-appearance:none;appearance:none;width:80px;height:4px;border-radius:2px;background:#ffffff4d;outline:none;cursor:pointer}.c-brightness-slider::-webkit-slider-thumb{-webkit-appearance:none;-moz-appearance:none;appearance:none;width:14px;height:14px;border-radius:50%;background:#fff;cursor:pointer;box-shadow:0 1px 3px #0000004d}.c-brightness-slider::-moz-range-thumb{width:14px;height:14px;border-radius:50%;background:#fff;cursor:pointer;border:none}.c-nav-footer{position:fixed;bottom:16px;left:50%;transform:translate(-50%);z-index:100;display:flex;flex-direction:column;gap:12px;align-items:center;pointer-events:auto;padding:8px}.c-nav-toggle{position:relative;width:48px;height:48px;border:none;border-radius:50%;cursor:pointer;transform:translateY(0);transition:transform 3s cubic-bezier(.25,.1,.25,1),box-shadow .3s ease,border-color .3s ease;opacity:1!important;visibility:visible!important;background:transparent!important;backdrop-filter:none;-webkit-backdrop-filter:none;border:2px solid rgba(255,255,255,.8);box-shadow:0 0 20px #ffffff4d}.c-nav-toggle:active{transform:translateY(0) scale(1.05);box-shadow:0 0 8px #ffffff1a}.c-nav-toggle--open{transform:translateY(-30px) scale(1.05)!important;box-shadow:0 0 20px #ffffff40;border-color:#ffffffb3;transition:transform 3s cubic-bezier(.25,.1,.25,1)!important}.c-nav-toggle--open .c-nav-arrow{animation:arrow-bounce-inverted 1.5s ease-in-out infinite}.c-nav-arrow{display:inline-block;font-size:1.8rem;color:#fff;font-weight:700;text-shadow:0 2px 6px rgba(0,0,0,.6);animation:arrow-bounce 1.5s ease-in-out infinite;opacity:1!important}.c-nav-menu{display:flex;flex-wrap:nowrap;gap:8px;max-height:0;overflow:visible;opacity:0;transform:translateY(15px);transition:max-height 1s cubic-bezier(.25,.1,.25,1),opacity .8s cubic-bezier(.25,.1,.25,1),transform 1s cubic-bezier(.25,.1,.25,1);justify-content:center;padding:8px 0}.c-nav-menu--visible{max-height:250px;opacity:1;transform:translateY(0);transition:max-height 3s cubic-bezier(.25,.1,.25,1),opacity 2s cubic-bezier(.25,.1,.25,1) .2s,transform 2.5s cubic-bezier(.25,.1,.25,1)}.c-nav-button{position:relative;padding:10px 16px;font-size:.8rem;font-weight:600;text-decoration:none;color:#fff;border-radius:10px;transition:all .4s cubic-bezier(.4,0,.2,1);overflow:hidden;white-space:nowrap;flex-shrink:0;background:transparent!important;backdrop-filter:none;-webkit-backdrop-filter:none;border:2px solid rgba(255,255,255,.4);box-shadow:0 0 10px #ffffff1f}.c-nav-button:before{content:"";position:absolute;top:0;left:-100%;width:100%;height:100%;background:linear-gradient(90deg,transparent,rgba(255,255,255,.3),transparent);animation:shimmer-slide 3s ease-in-out infinite}.c-nav-button:hover{transform:translateY(-3px) scale(1.05);background:transparent!important;box-shadow:0 0 20px #ffffff40;border-color:#fff9}.c-nav-button:active{transform:translateY(-1px) scale(1.02);background:transparent!important;box-shadow:0 0 12px #ffffff26}.c-nav-button{text-shadow:0 1px 2px rgba(0,0,0,.3)}.c-nav-menu:not(.c-nav-menu--visible) .c-nav-button{opacity:0!important;pointer-events:none}.c-nav-menu--visible .c-nav-button{opacity:1;transform:translateY(0) scale(1);transition:opacity 1s cubic-bezier(.25,.1,.25,1),transform 1s cubic-bezier(.25,.1,.25,1)}.c-nav-menu--visible .c-nav-button:nth-child(1){transition-delay:0s}.c-nav-menu--visible .c-nav-button:nth-child(2){transition-delay:1s}.c-nav-menu--visible .c-nav-button:nth-child(3){transition-delay:2s}@keyframes shimmer-slide{0%{left:-100%}50%,to{left:100%}}@keyframes arrow-bounce{0%,to{transform:translateY(0)}50%{transform:translateY(-6px)}}@keyframes arrow-bounce-inverted{0%,to{transform:rotate(180deg) translateY(0)}50%{transform:rotate(180deg) translateY(6px)}}@media (max-width: 768px){.c-nav-toggle{width:30px;height:30px}.c-nav-arrow{font-size:1.15rem}.c-nav-menu{gap:5px}.c-nav-button{padding:6px 10px;font-size:.51rem;border-radius:6px}}@keyframes twinkle{0%,to{opacity:.3}50%{opacity:1}}@keyframes drift{0%{transform:translateY(0) translate(0)}to{transform:translateY(-100vh) translate(20px)}}.c-cube-overlay{position:fixed;top:0;right:0;bottom:0;left:0;z-index:9999;background:radial-gradient(ellipse at center,#0d1b2a,#020408);opacity:0;visibility:hidden;transition:opacity .4s ease,visibility .4s ease;display:flex;align-items:center;justify-content:center;overflow:hidden}.c-cube-overlay:before,.c-cube-overlay:after{content:"";position:absolute;top:0;right:0;bottom:0;left:0;pointer-events:none}.c-cube-overlay:before{background-image:radial-gradient(1px 1px at 10% 20%,rgba(255,255,255,.8) 50%,transparent 50%),radial-gradient(1px 1px at 20% 50%,rgba(255,255,255,.6) 50%,transparent 50%),radial-gradient(1px 1px at 30% 30%,rgba(255,255,255,.7) 50%,transparent 50%),radial-gradient(1px 1px at 40% 70%,rgba(255,255,255,.5) 50%,transparent 50%),radial-gradient(1px 1px at 50% 10%,rgba(255,255,255,.9) 50%,transparent 50%),radial-gradient(1px 1px at 60% 80%,rgba(255,255,255,.6) 50%,transparent 50%),radial-gradient(1px 1px at 70% 40%,rgba(255,255,255,.8) 50%,transparent 50%),radial-gradient(1px 1px at 80% 60%,rgba(255,255,255,.5) 50%,transparent 50%),radial-gradient(1px 1px at 90% 25%,rgba(255,255,255,.7) 50%,transparent 50%),radial-gradient(1px 1px at 15% 85%,rgba(255,255,255,.6) 50%,transparent 50%),radial-gradient(1px 1px at 25% 15%,rgba(255,255,255,.8) 50%,transparent 50%),radial-gradient(1px 1px at 35% 95%,rgba(255,255,255,.5) 50%,transparent 50%),radial-gradient(1px 1px at 45% 45%,rgba(255,255,255,.9) 50%,transparent 50%),radial-gradient(1px 1px at 55% 5%,rgba(255,255,255,.6) 50%,transparent 50%),radial-gradient(1px 1px at 65% 65%,rgba(255,255,255,.7) 50%,transparent 50%),radial-gradient(1px 1px at 75% 35%,rgba(255,255,255,.8) 50%,transparent 50%),radial-gradient(1px 1px at 85% 75%,rgba(255,255,255,.5) 50%,transparent 50%),radial-gradient(1px 1px at 95% 55%,rgba(255,255,255,.9) 50%,transparent 50%),radial-gradient(1px 1px at 5% 45%,rgba(255,255,255,.6) 50%,transparent 50%),radial-gradient(1px 1px at 12% 72%,rgba(255,255,255,.7) 50%,transparent 50%);background-size:200px 200px;animation:twinkle 4s ease-in-out infinite}.c-cube-overlay:after{background-image:radial-gradient(2px 2px at 15% 25%,rgba(100,149,237,.9) 50%,transparent 50%),radial-gradient(2px 2px at 35% 65%,rgb(255,255,255) 50%,transparent 50%),radial-gradient(3px 3px at 55% 15%,rgba(255,200,150,.8) 50%,transparent 50%),radial-gradient(2px 2px at 75% 55%,rgba(200,150,255,.9) 50%,transparent 50%),radial-gradient(2px 2px at 85% 85%,rgba(150,200,255,.8) 50%,transparent 50%),radial-gradient(3px 3px at 25% 45%,rgb(255,255,200) 50%,transparent 50%),radial-gradient(2px 2px at 45% 75%,rgba(200,255,255,.9) 50%,transparent 50%),radial-gradient(2px 2px at 65% 35%,rgba(255,150,150,.8) 50%,transparent 50%),radial-gradient(3px 3px at 95% 5%,rgba(150,255,200,.9) 50%,transparent 50%),radial-gradient(2px 2px at 5% 95%,rgba(200,200,255,.8) 50%,transparent 50%);background-size:300px 300px;animation:twinkle 6s ease-in-out infinite reverse}.c-cube-overlay--active{opacity:1;visibility:visible}.c-cube-scene{width:min(70vw,70vh);height:min(70vw,70vh);perspective:1200px;perspective-origin:50% 50%}.c-cube{width:100%;height:100%;position:relative;transform-style:preserve-3d;cursor:grab}.c-cube:active{cursor:grabbing}.c-cube--animating{pointer-events:none}.c-cube__face{position:absolute;width:min(70vw,70vh);height:min(70vw,70vh);backface-visibility:hidden;border:2px solid rgba(255,255,255,.2);box-shadow:inset 0 0 60px #0000004d,0 0 20px #00000080;overflow:hidden;background:#0a0a12}.c-cube__face--front{transform:translateZ(calc(min(70vw,70vh)/2))}.c-cube__face--back{transform:rotateY(180deg) translateZ(calc(min(70vw,70vh)/2))}.c-cube__face--right{transform:rotateY(90deg) translateZ(calc(min(70vw,70vh)/2))}.c-cube__face--left{transform:rotateY(-90deg) translateZ(calc(min(70vw,70vh)/2))}.c-cube__face--top{transform:rotateX(90deg) translateZ(calc(min(70vw,70vh)/2))}.c-cube__face--bottom{transform:rotateX(-90deg) translateZ(calc(min(70vw,70vh)/2))}.c-cube__content{width:100%;height:100%;overflow:hidden;pointer-events:none}.c-cube__iframe{width:100%;height:100%;border:none;pointer-events:none;background:#000}.c-cube__placeholder{width:100%;height:100%;display:flex;flex-direction:column;align-items:center;justify-content:center;background:linear-gradient(135deg,#1a1a2e,#16213e,#0f3460);color:#ffffffe6;text-align:center;padding:2rem}.c-cube__placeholder h2{font-size:clamp(1.5rem,4vw,2.5rem);font-weight:600;margin:0 0 .5rem;letter-spacing:.05em;text-shadow:0 2px 10px rgba(0,0,0,.5)}.c-cube__placeholder p{font-size:clamp(.875rem,2vw,1.125rem);opacity:.7;margin:0;letter-spacing:.1em;text-transform:uppercase}.c-cube__placeholder--gradient-1{background:linear-gradient(135deg,#2d1b4e,#1a1a2e,#0d2137)}.c-cube__placeholder--gradient-2{background:linear-gradient(135deg,#0f3460,#1a1a2e,#16213e)}.c-cube__placeholder--gradient-3{background:linear-gradient(135deg,#1e3a5f,#16213e,#1a1a2e)}.c-cube-view-mode{position:fixed;top:50%;left:2rem;transform:translateY(-50%);padding:.75rem 1rem;background:#ffffff1a;-webkit-backdrop-filter:blur(10px);backdrop-filter:blur(10px);border-radius:8px;font-size:.75rem;color:#ffffffe6;letter-spacing:.1em;text-transform:uppercase;border:1px solid rgba(255,255,255,.15);writing-mode:vertical-rl;text-orientation:mixed}.c-cube-hint{position:fixed;bottom:2rem;left:50%;transform:translate(-50%);display:flex;align-items:center;gap:.75rem;padding:.75rem 1.5rem;background:#ffffff1a;-webkit-backdrop-filter:blur(10px);backdrop-filter:blur(10px);border-radius:2rem;font-size:.8rem;color:#fffc;letter-spacing:.05em;border:1px solid rgba(255,255,255,.15)}.c-cube-hint kbd{display:inline-flex;align-items:center;justify-content:center;min-width:1.5rem;height:1.5rem;padding:0 .4rem;background:#ffffff26;border-radius:4px;font-family:inherit;font-size:.75rem;font-weight:600;border:1px solid rgba(255,255,255,.2)}.c-cube-hint__separator{opacity:.4}.c-cube-indicator{position:fixed;top:2rem;left:50%;transform:translate(-50%);display:flex;gap:.5rem}.c-cube-indicator__dot{padding:.5rem 1rem;background:#ffffff1a;border:1px solid rgba(255,255,255,.2);border-radius:2rem;font-size:.7rem;text-transform:uppercase;letter-spacing:.1em;color:#fff9;cursor:pointer;transition:all .2s ease}.c-cube-indicator__dot:hover{background:#ffffff26;color:#ffffffe6}.c-cube-indicator__dot--active{background:#fff3;color:#fff;border-color:#fff6}.c-cube-trigger{position:fixed;top:20px;right:20px;z-index:100;width:44px;height:44px;display:flex;align-items:center;justify-content:center;background:#ffffff1a;border:1px solid rgba(255,255,255,.25);border-radius:12px;cursor:pointer;color:#fffc;transition:all .3s ease;-webkit-backdrop-filter:blur(8px);backdrop-filter:blur(8px)}.c-cube-trigger:hover{background:#ffffff26;border-color:#fff6;color:#fff;transform:scale(1.05)}.c-cube-trigger:active{transform:scale(.95)}.c-cube-trigger svg{transition:transform .3s ease}.c-cube-trigger:hover svg{transform:rotateY(15deg) rotateX(-10deg)}.c-cube-app-preview{width:100%;height:100%;display:flex;align-items:center;justify-content:center;background:linear-gradient(135deg,#1a1a2e,#0a0a15);position:relative}.c-cube-app-preview__label{padding:1rem 2rem;background:#ffffff1a;border:1px solid rgba(255,255,255,.2);border-radius:8px;font-size:1rem;color:#ffffffe6;letter-spacing:.1em;text-transform:uppercase}@media (max-width: 768px){.c-cube-trigger{top:12px;right:12px;width:36px;height:36px;border-radius:10px}.c-cube-trigger svg{width:16px;height:16px}.c-cube-view-mode{left:.5rem;padding:.5rem .75rem;font-size:.6rem}.c-cube-hint{flex-wrap:wrap;justify-content:center;bottom:1rem;padding:.5rem 1rem;font-size:.7rem}.c-cube-indicator{top:1rem;flex-wrap:wrap;justify-content:center;max-width:90%}.c-cube-indicator__dot{padding:.4rem .75rem;font-size:.6rem}}.u-hidden{display:none!important}.u-invisible{visibility:hidden!important}.u-no-pointer{pointer-events:none!important}.u-pointer{pointer-events:auto!important}#app,.app-container{width:100%;height:100%;position:relative}
/*$vite$:1*/`,document.head.appendChild(yi);/**
* @vue/shared v3.5.27
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function Pn(e){const t=Object.create(null);for(const n of e.split(","))t[n]=1;return n=>n in t}const te={},mt=[],Pe=()=>{},wi=()=>!1,Zt=e=>e.charCodeAt(0)===111&&e.charCodeAt(1)===110&&(e.charCodeAt(2)>122||e.charCodeAt(2)<97),Fn=e=>e.startsWith("onUpdate:"),fe=Object.assign,Ln=(e,t)=>{const n=e.indexOf(t);n>-1&&e.splice(n,1)},mo=Object.prototype.hasOwnProperty,q=(e,t)=>mo.call(e,t),j=Array.isArray,bt=e=>Qt(e)==="[object Map]",zi=e=>Qt(e)==="[object Set]",D=e=>typeof e=="function",oe=e=>typeof e=="string",et=e=>typeof e=="symbol",se=e=>e!==null&&typeof e=="object",ki=e=>(se(e)||D(e))&&D(e.then)&&D(e.catch),Si=Object.prototype.toString,Qt=e=>Si.call(e),bo=e=>Qt(e).slice(8,-1),Ti=e=>Qt(e)==="[object Object]",Nn=e=>oe(e)&&e!=="NaN"&&e[0]!=="-"&&""+parseInt(e,10)===e,Mt=Pn(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),en=e=>{const t=Object.create(null);return n=>t[n]||(t[n]=e(n))},xo=/-\w/g,tt=en(e=>e.replace(xo,t=>t.slice(1).toUpperCase())),_o=/\B([A-Z])/g,ft=en(e=>e.replace(_o,"-$1").toLowerCase()),Ai=en(e=>e.charAt(0).toUpperCase()+e.slice(1)),Dn=en(e=>e?`on${Ai(e)}`:""),nt=(e,t)=>!Object.is(e,t),$n=(e,...t)=>{for(let n=0;n<e.length;n++)e[n](...t)},Ei=(e,t,n,i=!1)=>{Object.defineProperty(e,t,{configurable:!0,enumerable:!1,writable:i,value:n})},yo=e=>{const t=parseFloat(e);return isNaN(t)?e:t};let Ci;const tn=()=>Ci||(Ci=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function Rt(e){if(j(e)){const t={};for(let n=0;n<e.length;n++){const i=e[n],s=oe(i)?So(i):Rt(i);if(s)for(const o in s)t[o]=s[o]}return t}else if(oe(e)||se(e))return e}const wo=/;(?![^(]*\))/g,zo=/:([^]+)/,ko=/\/\*[^]*?\*\//g;function So(e){const t={};return e.replace(ko,"").split(wo).forEach(n=>{if(n){const i=n.split(zo);i.length>1&&(t[i[0].trim()]=i[1].trim())}}),t}function Re(e){let t="";if(oe(e))t=e;else if(j(e))for(let n=0;n<e.length;n++){const i=Re(e[n]);i&&(t+=i+" ")}else if(se(e))for(const n in e)e[n]&&(t+=n+" ");return t.trim()}const To=Pn("itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly");function Mi(e){return!!e||e===""}const Ri=e=>!!(e&&e.__v_isRef===!0),Fe=e=>oe(e)?e:e==null?"":j(e)||se(e)&&(e.toString===Si||!D(e.toString))?Ri(e)?Fe(e.value):JSON.stringify(e,Ii,2):String(e),Ii=(e,t)=>Ri(t)?Ii(e,t.value):bt(t)?{[`Map(${t.size})`]:[...t.entries()].reduce((n,[i,s],o)=>(n[jn(i,o)+" =>"]=s,n),{})}:zi(t)?{[`Set(${t.size})`]:[...t.values()].map(n=>jn(n))}:et(t)?jn(t):se(t)&&!j(t)&&!Ti(t)?String(t):t,jn=(e,t="")=>{var n;return et(e)?`Symbol(${(n=e.description)!=null?n:t})`:e};/**
* @vue/reactivity v3.5.27
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let xe;class Ao{constructor(t=!1){this.detached=t,this._active=!0,this._on=0,this.effects=[],this.cleanups=[],this._isPaused=!1,this.parent=xe,!t&&xe&&(this.index=(xe.scopes||(xe.scopes=[])).push(this)-1)}get active(){return this._active}pause(){if(this._active){this._isPaused=!0;let t,n;if(this.scopes)for(t=0,n=this.scopes.length;t<n;t++)this.scopes[t].pause();for(t=0,n=this.effects.length;t<n;t++)this.effects[t].pause()}}resume(){if(this._active&&this._isPaused){this._isPaused=!1;let t,n;if(this.scopes)for(t=0,n=this.scopes.length;t<n;t++)this.scopes[t].resume();for(t=0,n=this.effects.length;t<n;t++)this.effects[t].resume()}}run(t){if(this._active){const n=xe;try{return xe=this,t()}finally{xe=n}}}on(){++this._on===1&&(this.prevScope=xe,xe=this)}off(){this._on>0&&--this._on===0&&(xe=this.prevScope,this.prevScope=void 0)}stop(t){if(this._active){this._active=!1;let n,i;for(n=0,i=this.effects.length;n<i;n++)this.effects[n].stop();for(this.effects.length=0,n=0,i=this.cleanups.length;n<i;n++)this.cleanups[n]();if(this.cleanups.length=0,this.scopes){for(n=0,i=this.scopes.length;n<i;n++)this.scopes[n].stop(!0);this.scopes.length=0}if(!this.detached&&this.parent&&!t){const s=this.parent.scopes.pop();s&&s!==this&&(this.parent.scopes[this.index]=s,s.index=this.index)}this.parent=void 0}}}function Eo(){return xe}let ne;const Bn=new WeakSet;class Oi{constructor(t){this.fn=t,this.deps=void 0,this.depsTail=void 0,this.flags=5,this.next=void 0,this.cleanup=void 0,this.scheduler=void 0,xe&&xe.active&&xe.effects.push(this)}pause(){this.flags|=64}resume(){this.flags&64&&(this.flags&=-65,Bn.has(this)&&(Bn.delete(this),this.trigger()))}notify(){this.flags&2&&!(this.flags&32)||this.flags&8||Fi(this)}run(){if(!(this.flags&1))return this.fn();this.flags|=2,ji(this),Li(this);const t=ne,n=Ie;ne=this,Ie=!0;try{return this.fn()}finally{Ni(this),ne=t,Ie=n,this.flags&=-3}}stop(){if(this.flags&1){for(let t=this.deps;t;t=t.nextDep)Vn(t);this.deps=this.depsTail=void 0,ji(this),this.onStop&&this.onStop(),this.flags&=-2}}trigger(){this.flags&64?Bn.add(this):this.scheduler?this.scheduler():this.runIfDirty()}runIfDirty(){Un(this)&&this.run()}get dirty(){return Un(this)}}let Pi=0,It,Ot;function Fi(e,t=!1){if(e.flags|=8,t){e.next=Ot,Ot=e;return}e.next=It,It=e}function Hn(){Pi++}function Gn(){if(--Pi>0)return;if(Ot){let t=Ot;for(Ot=void 0;t;){const n=t.next;t.next=void 0,t.flags&=-9,t=n}}let e;for(;It;){let t=It;for(It=void 0;t;){const n=t.next;if(t.next=void 0,t.flags&=-9,t.flags&1)try{t.trigger()}catch(i){e||(e=i)}t=n}}if(e)throw e}function Li(e){for(let t=e.deps;t;t=t.nextDep)t.version=-1,t.prevActiveLink=t.dep.activeLink,t.dep.activeLink=t}function Ni(e){let t,n=e.depsTail,i=n;for(;i;){const s=i.prevDep;i.version===-1?(i===n&&(n=s),Vn(i),Co(i)):t=i,i.dep.activeLink=i.prevActiveLink,i.prevActiveLink=void 0,i=s}e.deps=t,e.depsTail=n}function Un(e){for(let t=e.deps;t;t=t.nextDep)if(t.dep.version!==t.version||t.dep.computed&&(Di(t.dep.computed)||t.dep.version!==t.version))return!0;return!!e._dirty}function Di(e){if(e.flags&4&&!(e.flags&16)||(e.flags&=-17,e.globalVersion===Pt)||(e.globalVersion=Pt,!e.isSSR&&e.flags&128&&(!e.deps&&!e._dirty||!Un(e))))return;e.flags|=2;const t=e.dep,n=ne,i=Ie;ne=e,Ie=!0;try{Li(e);const s=e.fn(e._value);(t.version===0||nt(s,e._value))&&(e.flags|=128,e._value=s,t.version++)}catch(s){throw t.version++,s}finally{ne=n,Ie=i,Ni(e),e.flags&=-3}}function Vn(e,t=!1){const{dep:n,prevSub:i,nextSub:s}=e;if(i&&(i.nextSub=s,e.prevSub=void 0),s&&(s.prevSub=i,e.nextSub=void 0),n.subs===e&&(n.subs=i,!i&&n.computed)){n.computed.flags&=-5;for(let o=n.computed.deps;o;o=o.nextDep)Vn(o,!0)}!t&&!--n.sc&&n.map&&n.map.delete(n.key)}function Co(e){const{prevDep:t,nextDep:n}=e;t&&(t.nextDep=n,e.prevDep=void 0),n&&(n.prevDep=t,e.nextDep=void 0)}let Ie=!0;const $i=[];function Le(){$i.push(Ie),Ie=!1}function Ne(){const e=$i.pop();Ie=e===void 0?!0:e}function ji(e){const{cleanup:t}=e;if(e.cleanup=void 0,t){const n=ne;ne=void 0;try{t()}finally{ne=n}}}let Pt=0;class Mo{constructor(t,n){this.sub=t,this.dep=n,this.version=n.version,this.nextDep=this.prevDep=this.nextSub=this.prevSub=this.prevActiveLink=void 0}}class Wn{constructor(t){this.computed=t,this.version=0,this.activeLink=void 0,this.subs=void 0,this.map=void 0,this.key=void 0,this.sc=0,this.__v_skip=!0}track(t){if(!ne||!Ie||ne===this.computed)return;let n=this.activeLink;if(n===void 0||n.sub!==ne)n=this.activeLink=new Mo(ne,this),ne.deps?(n.prevDep=ne.depsTail,ne.depsTail.nextDep=n,ne.depsTail=n):ne.deps=ne.depsTail=n,Bi(n);else if(n.version===-1&&(n.version=this.version,n.nextDep)){const i=n.nextDep;i.prevDep=n.prevDep,n.prevDep&&(n.prevDep.nextDep=i),n.prevDep=ne.depsTail,n.nextDep=void 0,ne.depsTail.nextDep=n,ne.depsTail=n,ne.deps===n&&(ne.deps=i)}return n}trigger(t){this.version++,Pt++,this.notify(t)}notify(t){Hn();try{for(let n=this.subs;n;n=n.prevSub)n.sub.notify()&&n.sub.dep.notify()}finally{Gn()}}}function Bi(e){if(e.dep.sc++,e.sub.flags&4){const t=e.dep.computed;if(t&&!e.dep.subs){t.flags|=20;for(let i=t.deps;i;i=i.nextDep)Bi(i)}const n=e.dep.subs;n!==e&&(e.prevSub=n,n&&(n.nextSub=e)),e.dep.subs=e}}const Kn=new WeakMap,ut=Symbol(""),Yn=Symbol(""),Ft=Symbol("");function de(e,t,n){if(Ie&&ne){let i=Kn.get(e);i||Kn.set(e,i=new Map);let s=i.get(n);s||(i.set(n,s=new Wn),s.map=i,s.key=n),s.track()}}function Ye(e,t,n,i,s,o){const r=Kn.get(e);if(!r){Pt++;return}const l=c=>{c&&c.trigger()};if(Hn(),t==="clear")r.forEach(l);else{const c=j(e),d=c&&Nn(n);if(c&&n==="length"){const f=Number(i);r.forEach((p,_)=>{(_==="length"||_===Ft||!et(_)&&_>=f)&&l(p)})}else switch((n!==void 0||r.has(void 0))&&l(r.get(n)),d&&l(r.get(Ft)),t){case"add":c?d&&l(r.get("length")):(l(r.get(ut)),bt(e)&&l(r.get(Yn)));break;case"delete":c||(l(r.get(ut)),bt(e)&&l(r.get(Yn)));break;case"set":bt(e)&&l(r.get(ut));break}}Gn()}function xt(e){const t=W(e);return t===e?t:(de(t,"iterate",Ft),Te(e)?t:t.map(Oe))}function nn(e){return de(e=W(e),"iterate",Ft),e}function it(e,t){return Xe(e)?_t(dt(e)?Oe(t):t):Oe(t)}const Ro={__proto__:null,[Symbol.iterator](){return qn(this,Symbol.iterator,e=>it(this,e))},concat(...e){return xt(this).concat(...e.map(t=>j(t)?xt(t):t))},entries(){return qn(this,"entries",e=>(e[1]=it(this,e[1]),e))},every(e,t){return qe(this,"every",e,t,void 0,arguments)},filter(e,t){return qe(this,"filter",e,t,n=>n.map(i=>it(this,i)),arguments)},find(e,t){return qe(this,"find",e,t,n=>it(this,n),arguments)},findIndex(e,t){return qe(this,"findIndex",e,t,void 0,arguments)},findLast(e,t){return qe(this,"findLast",e,t,n=>it(this,n),arguments)},findLastIndex(e,t){return qe(this,"findLastIndex",e,t,void 0,arguments)},forEach(e,t){return qe(this,"forEach",e,t,void 0,arguments)},includes(...e){return Xn(this,"includes",e)},indexOf(...e){return Xn(this,"indexOf",e)},join(e){return xt(this).join(e)},lastIndexOf(...e){return Xn(this,"lastIndexOf",e)},map(e,t){return qe(this,"map",e,t,void 0,arguments)},pop(){return Lt(this,"pop")},push(...e){return Lt(this,"push",e)},reduce(e,...t){return Hi(this,"reduce",e,t)},reduceRight(e,...t){return Hi(this,"reduceRight",e,t)},shift(){return Lt(this,"shift")},some(e,t){return qe(this,"some",e,t,void 0,arguments)},splice(...e){return Lt(this,"splice",e)},toReversed(){return xt(this).toReversed()},toSorted(e){return xt(this).toSorted(e)},toSpliced(...e){return xt(this).toSpliced(...e)},unshift(...e){return Lt(this,"unshift",e)},values(){return qn(this,"values",e=>it(this,e))}};function qn(e,t,n){const i=nn(e),s=i[t]();return i!==e&&!Te(e)&&(s._next=s.next,s.next=()=>{const o=s._next();return o.done||(o.value=n(o.value)),o}),s}const Io=Array.prototype;function qe(e,t,n,i,s,o){const r=nn(e),l=r!==e&&!Te(e),c=r[t];if(c!==Io[t]){const p=c.apply(e,o);return l?Oe(p):p}let d=n;r!==e&&(l?d=function(p,_){return n.call(this,it(e,p),_,e)}:n.length>2&&(d=function(p,_){return n.call(this,p,_,e)}));const f=c.call(r,d,i);return l&&s?s(f):f}function Hi(e,t,n,i){const s=nn(e);let o=n;return s!==e&&(Te(e)?n.length>3&&(o=function(r,l,c){return n.call(this,r,l,c,e)}):o=function(r,l,c){return n.call(this,r,it(e,l),c,e)}),s[t](o,...i)}function Xn(e,t,n){const i=W(e);de(i,"iterate",Ft);const s=i[t](...n);return(s===-1||s===!1)&&ei(n[0])?(n[0]=W(n[0]),i[t](...n)):s}function Lt(e,t,n=[]){Le(),Hn();const i=W(e)[t].apply(e,n);return Gn(),Ne(),i}const Oo=Pn("__proto__,__v_isRef,__isVue"),Gi=new Set(Object.getOwnPropertyNames(Symbol).filter(e=>e!=="arguments"&&e!=="caller").map(e=>Symbol[e]).filter(et));function Po(e){et(e)||(e=String(e));const t=W(this);return de(t,"has",e),t.hasOwnProperty(e)}class Ui{constructor(t=!1,n=!1){this._isReadonly=t,this._isShallow=n}get(t,n,i){if(n==="__v_skip")return t.__v_skip;const s=this._isReadonly,o=this._isShallow;if(n==="__v_isReactive")return!s;if(n==="__v_isReadonly")return s;if(n==="__v_isShallow")return o;if(n==="__v_raw")return i===(s?o?Xi:qi:o?Yi:Ki).get(t)||Object.getPrototypeOf(t)===Object.getPrototypeOf(i)?t:void 0;const r=j(t);if(!s){let c;if(r&&(c=Ro[n]))return c;if(n==="hasOwnProperty")return Po}const l=Reflect.get(t,n,ue(t)?t:i);if((et(n)?Gi.has(n):Oo(n))||(s||de(t,"get",n),o))return l;if(ue(l)){const c=r&&Nn(n)?l:l.value;return s&&se(c)?Qn(c):c}return se(l)?s?Qn(l):Zn(l):l}}class Vi extends Ui{constructor(t=!1){super(!1,t)}set(t,n,i,s){let o=t[n];const r=j(t)&&Nn(n);if(!this._isShallow){const d=Xe(o);if(!Te(i)&&!Xe(i)&&(o=W(o),i=W(i)),!r&&ue(o)&&!ue(i))return d||(o.value=i),!0}const l=r?Number(n)<t.length:q(t,n),c=Reflect.set(t,n,i,ue(t)?t:s);return t===W(s)&&(l?nt(i,o)&&Ye(t,"set",n,i):Ye(t,"add",n,i)),c}deleteProperty(t,n){const i=q(t,n);t[n];const s=Reflect.deleteProperty(t,n);return s&&i&&Ye(t,"delete",n,void 0),s}has(t,n){const i=Reflect.has(t,n);return(!et(n)||!Gi.has(n))&&de(t,"has",n),i}ownKeys(t){return de(t,"iterate",j(t)?"length":ut),Reflect.ownKeys(t)}}class Wi extends Ui{constructor(t=!1){super(!0,t)}set(t,n){return!0}deleteProperty(t,n){return!0}}const Fo=new Vi,Lo=new Wi,No=new Vi(!0),Do=new Wi(!0),Jn=e=>e,sn=e=>Reflect.getPrototypeOf(e);function $o(e,t,n){return function(...i){const s=this.__v_raw,o=W(s),r=bt(o),l=e==="entries"||e===Symbol.iterator&&r,c=e==="keys"&&r,d=s[e](...i),f=n?Jn:t?_t:Oe;return!t&&de(o,"iterate",c?Yn:ut),fe(Object.create(d),{next(){const{value:p,done:_}=d.next();return _?{value:p,done:_}:{value:l?[f(p[0]),f(p[1])]:f(p),done:_}}})}}function on(e){return function(...t){return e==="delete"?!1:e==="clear"?void 0:this}}function jo(e,t){const n={get(s){const o=this.__v_raw,r=W(o),l=W(s);e||(nt(s,l)&&de(r,"get",s),de(r,"get",l));const{has:c}=sn(r),d=t?Jn:e?_t:Oe;if(c.call(r,s))return d(o.get(s));if(c.call(r,l))return d(o.get(l));o!==r&&o.get(s)},get size(){const s=this.__v_raw;return!e&&de(W(s),"iterate",ut),s.size},has(s){const o=this.__v_raw,r=W(o),l=W(s);return e||(nt(s,l)&&de(r,"has",s),de(r,"has",l)),s===l?o.has(s):o.has(s)||o.has(l)},forEach(s,o){const r=this,l=r.__v_raw,c=W(l),d=t?Jn:e?_t:Oe;return!e&&de(c,"iterate",ut),l.forEach((f,p)=>s.call(o,d(f),d(p),r))}};return fe(n,e?{add:on("add"),set:on("set"),delete:on("delete"),clear:on("clear")}:{add(s){!t&&!Te(s)&&!Xe(s)&&(s=W(s));const o=W(this);return sn(o).has.call(o,s)||(o.add(s),Ye(o,"add",s,s)),this},set(s,o){!t&&!Te(o)&&!Xe(o)&&(o=W(o));const r=W(this),{has:l,get:c}=sn(r);let d=l.call(r,s);d||(s=W(s),d=l.call(r,s));const f=c.call(r,s);return r.set(s,o),d?nt(o,f)&&Ye(r,"set",s,o):Ye(r,"add",s,o),this},delete(s){const o=W(this),{has:r,get:l}=sn(o);let c=r.call(o,s);c||(s=W(s),c=r.call(o,s)),l&&l.call(o,s);const d=o.delete(s);return c&&Ye(o,"delete",s,void 0),d},clear(){const s=W(this),o=s.size!==0,r=s.clear();return o&&Ye(s,"clear",void 0,void 0),r}}),["keys","values","entries",Symbol.iterator].forEach(s=>{n[s]=$o(s,e,t)}),n}function rn(e,t){const n=jo(e,t);return(i,s,o)=>s==="__v_isReactive"?!e:s==="__v_isReadonly"?e:s==="__v_raw"?i:Reflect.get(q(n,s)&&s in i?n:i,s,o)}const Bo={get:rn(!1,!1)},Ho={get:rn(!1,!0)},Go={get:rn(!0,!1)},Uo={get:rn(!0,!0)},Ki=new WeakMap,Yi=new WeakMap,qi=new WeakMap,Xi=new WeakMap;function Vo(e){switch(e){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function Wo(e){return e.__v_skip||!Object.isExtensible(e)?0:Vo(bo(e))}function Zn(e){return Xe(e)?e:ln(e,!1,Fo,Bo,Ki)}function Ko(e){return ln(e,!1,No,Ho,Yi)}function Qn(e){return ln(e,!0,Lo,Go,qi)}function gf(e){return ln(e,!0,Do,Uo,Xi)}function ln(e,t,n,i,s){if(!se(e)||e.__v_raw&&!(t&&e.__v_isReactive))return e;const o=Wo(e);if(o===0)return e;const r=s.get(e);if(r)return r;const l=new Proxy(e,o===2?i:n);return s.set(e,l),l}function dt(e){return Xe(e)?dt(e.__v_raw):!!(e&&e.__v_isReactive)}function Xe(e){return!!(e&&e.__v_isReadonly)}function Te(e){return!!(e&&e.__v_isShallow)}function ei(e){return e?!!e.__v_raw:!1}function W(e){const t=e&&e.__v_raw;return t?W(t):e}function Yo(e){return!q(e,"__v_skip")&&Object.isExtensible(e)&&Ei(e,"__v_skip",!0),e}const Oe=e=>se(e)?Zn(e):e,_t=e=>se(e)?Qn(e):e;function ue(e){return e?e.__v_isRef===!0:!1}function le(e){return qo(e,!1)}function qo(e,t){return ue(e)?e:new Xo(e,t)}class Xo{constructor(t,n){this.dep=new Wn,this.__v_isRef=!0,this.__v_isShallow=!1,this._rawValue=n?t:W(t),this._value=n?t:Oe(t),this.__v_isShallow=n}get value(){return this.dep.track(),this._value}set value(t){const n=this._rawValue,i=this.__v_isShallow||Te(t)||Xe(t);t=i?t:W(t),nt(t,n)&&(this._rawValue=t,this._value=i?t:Oe(t),this.dep.trigger())}}function Jo(e){return ue(e)?e.value:e}const Zo={get:(e,t,n)=>t==="__v_raw"?e:Jo(Reflect.get(e,t,n)),set:(e,t,n,i)=>{const s=e[t];return ue(s)&&!ue(n)?(s.value=n,!0):Reflect.set(e,t,n,i)}};function Ji(e){return dt(e)?e:new Proxy(e,Zo)}class Qo{constructor(t,n,i){this.fn=t,this.setter=n,this._value=void 0,this.dep=new Wn(this),this.__v_isRef=!0,this.deps=void 0,this.depsTail=void 0,this.flags=16,this.globalVersion=Pt-1,this.next=void 0,this.effect=this,this.__v_isReadonly=!n,this.isSSR=i}notify(){if(this.flags|=16,!(this.flags&8)&&ne!==this)return Fi(this,!0),!0}get value(){const t=this.dep.track();return Di(this),t&&(t.version=this.dep.version),this._value}set value(t){this.setter&&this.setter(t)}}function er(e,t,n=!1){let i,s;return D(e)?i=e:(i=e.get,s=e.set),new Qo(i,s,n)}const an={},cn=new WeakMap;let pt;function tr(e,t=!1,n=pt){if(n){let i=cn.get(n);i||cn.set(n,i=[]),i.push(e)}}function nr(e,t,n=te){const{immediate:i,deep:s,once:o,scheduler:r,augmentJob:l,call:c}=n,d=z=>s?z:Te(z)||s===!1||s===0?st(z,1):st(z);let f,p,_,S,k=!1,y=!1;if(ue(e)?(p=()=>e.value,k=Te(e)):dt(e)?(p=()=>d(e),k=!0):j(e)?(y=!0,k=e.some(z=>dt(z)||Te(z)),p=()=>e.map(z=>{if(ue(z))return z.value;if(dt(z))return d(z);if(D(z))return c?c(z,2):z()})):D(e)?t?p=c?()=>c(e,2):e:p=()=>{if(_){Le();try{_()}finally{Ne()}}const z=pt;pt=f;try{return c?c(e,3,[S]):e(S)}finally{pt=z}}:p=Pe,t&&s){const z=p,H=s===!0?1/0:s;p=()=>st(z(),H)}const L=Eo(),M=()=>{f.stop(),L&&L.active&&Ln(L.effects,f)};if(o&&t){const z=t;t=(...H)=>{z(...H),M()}}let B=y?new Array(e.length).fill(an):an;const C=z=>{if(!(!(f.flags&1)||!f.dirty&&!z))if(t){const H=f.run();if(s||k||(y?H.some(($,F)=>nt($,B[F])):nt(H,B))){_&&_();const $=pt;pt=f;try{const F=[H,B===an?void 0:y&&B[0]===an?[]:B,S];B=H,c?c(t,3,F):t(...F)}finally{pt=$}}}else f.run()};return l&&l(C),f=new Oi(p),f.scheduler=r?()=>r(C,!1):C,S=z=>tr(z,!1,f),_=f.onStop=()=>{const z=cn.get(f);if(z){if(c)c(z,4);else for(const H of z)H();cn.delete(f)}},t?i?C(!0):B=f.run():r?r(C.bind(null,!0),!0):f.run(),M.pause=f.pause.bind(f),M.resume=f.resume.bind(f),M.stop=M,M}function st(e,t=1/0,n){if(t<=0||!se(e)||e.__v_skip||(n=n||new Map,(n.get(e)||0)>=t))return e;if(n.set(e,t),t--,ue(e))st(e.value,t,n);else if(j(e))for(let i=0;i<e.length;i++)st(e[i],t,n);else if(zi(e)||bt(e))e.forEach(i=>{st(i,t,n)});else if(Ti(e)){for(const i in e)st(e[i],t,n);for(const i of Object.getOwnPropertySymbols(e))Object.prototype.propertyIsEnumerable.call(e,i)&&st(e[i],t,n)}return e}/**
* @vue/runtime-core v3.5.27
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/const Nt=[];let ti=!1;function mf(e,...t){if(ti)return;ti=!0,Le();const n=Nt.length?Nt[Nt.length-1].component:null,i=n&&n.appContext.config.warnHandler,s=ir();if(i)yt(i,n,11,[e+t.map(o=>{var r,l;return(l=(r=o.toString)==null?void 0:r.call(o))!=null?l:JSON.stringify(o)}).join(""),n&&n.proxy,s.map(({vnode:o})=>`at <${qs(n,o.type)}>`).join(`
`),s]);else{const o=[`[Vue warn]: ${e}`,...t];s.length&&o.push(`
`,...sr(s)),console.warn(...o)}Ne(),ti=!1}function ir(){let e=Nt[Nt.length-1];if(!e)return[];const t=[];for(;e;){const n=t[0];n&&n.vnode===e?n.recurseCount++:t.push({vnode:e,recurseCount:0});const i=e.component&&e.component.parent;e=i&&i.vnode}return t}function sr(e){const t=[];return e.forEach((n,i)=>{t.push(...i===0?[]:[`
`],...or(n))}),t}function or({vnode:e,recurseCount:t}){const n=t>0?`... (${t} recursive calls)`:"",i=e.component?e.component.parent==null:!1,s=` at <${qs(e.component,e.type,i)}`,o=">"+n;return e.props?[s,...rr(e.props),o]:[s+o]}function rr(e){const t=[],n=Object.keys(e);return n.slice(0,3).forEach(i=>{t.push(...Zi(i,e[i]))}),n.length>3&&t.push(" ..."),t}function Zi(e,t,n){return oe(t)?(t=JSON.stringify(t),n?t:[`${e}=${t}`]):typeof t=="number"||typeof t=="boolean"||t==null?n?t:[`${e}=${t}`]:ue(t)?(t=Zi(e,W(t.value),!0),n?t:[`${e}=Ref<`,t,">"]):D(t)?[`${e}=fn${t.name?`<${t.name}>`:""}`]:(t=W(t),n?t:[`${e}=`,t])}function yt(e,t,n,i){try{return i?e(...i):e()}catch(s){fn(s,t,n)}}function De(e,t,n,i){if(D(e)){const s=yt(e,t,n,i);return s&&ki(s)&&s.catch(o=>{fn(o,t,n)}),s}if(j(e)){const s=[];for(let o=0;o<e.length;o++)s.push(De(e[o],t,n,i));return s}}function fn(e,t,n,i=!0){const s=t?t.vnode:null,{errorHandler:o,throwUnhandledErrorInProduction:r}=t&&t.appContext.config||te;if(t){let l=t.parent;const c=t.proxy,d=`https://vuejs.org/error-reference/#runtime-${n}`;for(;l;){const f=l.ec;if(f){for(let p=0;p<f.length;p++)if(f[p](e,c,d)===!1)return}l=l.parent}if(o){Le(),yt(o,null,10,[e,c,d]),Ne();return}}lr(e,n,s,i,r)}function lr(e,t,n,i=!0,s=!1){if(s)throw e;console.error(e)}const ve=[];let $e=-1;const wt=[];let ot=null,zt=0;const Qi=Promise.resolve();let un=null;function ar(e){const t=un||Qi;return e?t.then(this?e.bind(this):e):t}function cr(e){let t=$e+1,n=ve.length;for(;t<n;){const i=t+n>>>1,s=ve[i],o=Dt(s);o<e||o===e&&s.flags&2?t=i+1:n=i}return t}function ni(e){if(!(e.flags&1)){const t=Dt(e),n=ve[ve.length-1];!n||!(e.flags&2)&&t>=Dt(n)?ve.push(e):ve.splice(cr(t),0,e),e.flags|=1,es()}}function es(){un||(un=Qi.then(is))}function fr(e){j(e)?wt.push(...e):ot&&e.id===-1?ot.splice(zt+1,0,e):e.flags&1||(wt.push(e),e.flags|=1),es()}function ts(e,t,n=$e+1){for(;n<ve.length;n++){const i=ve[n];if(i&&i.flags&2){if(e&&i.id!==e.uid)continue;ve.splice(n,1),n--,i.flags&4&&(i.flags&=-2),i(),i.flags&4||(i.flags&=-2)}}}function ns(e){if(wt.length){const t=[...new Set(wt)].sort((n,i)=>Dt(n)-Dt(i));if(wt.length=0,ot){ot.push(...t);return}for(ot=t,zt=0;zt<ot.length;zt++){const n=ot[zt];n.flags&4&&(n.flags&=-2),n.flags&8||n(),n.flags&=-2}ot=null,zt=0}}const Dt=e=>e.id==null?e.flags&2?-1:1/0:e.id;function is(e){try{for($e=0;$e<ve.length;$e++){const t=ve[$e];t&&!(t.flags&8)&&(t.flags&4&&(t.flags&=-2),yt(t,t.i,t.i?15:14),t.flags&4||(t.flags&=-2))}}finally{for(;$e<ve.length;$e++){const t=ve[$e];t&&(t.flags&=-2)}$e=-1,ve.length=0,ns(),un=null,(ve.length||wt.length)&&is()}}let je=null,ss=null;function dn(e){const t=je;return je=e,ss=e&&e.type.__scopeId||null,t}function ur(e,t=je,n){if(!t||e._n)return e;const i=(...s)=>{i._d&&Bs(-1);const o=dn(t);let r;try{r=e(...s)}finally{dn(o),i._d&&Bs(1)}return r};return i._n=!0,i._c=!0,i._d=!0,i}function vt(e,t,n,i){const s=e.dirs,o=t&&t.dirs;for(let r=0;r<s.length;r++){const l=s[r];o&&(l.oldValue=o[r].value);let c=l.dir[i];c&&(Le(),De(c,n,8,[e.el,l,e,t]),Ne())}}function dr(e,t){if(me){let n=me.provides;const i=me.parent&&me.parent.provides;i===n&&(n=me.provides=Object.create(i)),n[e]=t}}function pn(e,t,n=!1){const i=ul();if(i||St){let s=St?St._context.provides:i?i.parent==null||i.ce?i.vnode.appContext&&i.vnode.appContext.provides:i.parent.provides:void 0;if(s&&e in s)return s[e];if(arguments.length>1)return n&&D(t)?t.call(i&&i.proxy):t}}const pr=Symbol.for("v-scx"),vr=()=>pn(pr);function vn(e,t,n){return os(e,t,n)}function os(e,t,n=te){const{immediate:i,deep:s,flush:o,once:r}=n,l=fe({},n),c=t&&i||!t&&o!=="post";let d;if(qt){if(o==="sync"){const S=vr();d=S.__watcherHandles||(S.__watcherHandles=[])}else if(!c){const S=()=>{};return S.stop=Pe,S.resume=Pe,S.pause=Pe,S}}const f=me;l.call=(S,k,y)=>De(S,f,k,y);let p=!1;o==="post"?l.scheduler=S=>{ge(S,f&&f.suspense)}:o!=="sync"&&(p=!0,l.scheduler=(S,k)=>{k?S():ni(S)}),l.augmentJob=S=>{t&&(S.flags|=4),p&&(S.flags|=2,f&&(S.id=f.uid,S.i=f))};const _=nr(e,t,l);return qt&&(d?d.push(_):c&&_()),_}function hr(e,t,n){const i=this.proxy,s=oe(e)?e.includes(".")?rs(i,e):()=>i[e]:e.bind(i,i);let o;D(t)?o=t:(o=t.handler,n=t);const r=Yt(this),l=os(s,o.bind(i),n);return r(),l}function rs(e,t){const n=t.split(".");return()=>{let i=e;for(let s=0;s<n.length&&i;s++)i=i[n[s]];return i}}const ls=Symbol("_vte"),gr=e=>e.__isTeleport,$t=e=>e&&(e.disabled||e.disabled===""),as=e=>e&&(e.defer||e.defer===""),cs=e=>typeof SVGElement<"u"&&e instanceof SVGElement,fs=e=>typeof MathMLElement=="function"&&e instanceof MathMLElement,ii=(e,t)=>{const n=e&&e.to;return oe(n)?t?t(n):null:n},us={name:"Teleport",__isTeleport:!0,process(e,t,n,i,s,o,r,l,c,d){const{mc:f,pc:p,pbc:_,o:{insert:S,querySelector:k,createText:y,createComment:L}}=d,M=$t(t.props);let{shapeFlag:B,children:C,dynamicChildren:z}=t;if(e==null){const H=t.el=y(""),$=t.anchor=y("");S(H,n,i),S($,n,i);const F=(K,Q)=>{B&16&&f(C,K,Q,s,o,r,l,c)},J=()=>{const K=t.target=ii(t.props,k),Q=ds(K,t,y,S);K&&(r!=="svg"&&cs(K)?r="svg":r!=="mathml"&&fs(K)&&(r="mathml"),s&&s.isCE&&(s.ce._teleportTargets||(s.ce._teleportTargets=new Set)).add(K),M||(F(K,Q),gn(t,!1)))};M&&(F(n,$),gn(t,!0)),as(t.props)?(t.el.__isMounted=!1,ge(()=>{J(),delete t.el.__isMounted},o)):J()}else{if(as(t.props)&&e.el.__isMounted===!1){ge(()=>{us.process(e,t,n,i,s,o,r,l,c,d)},o);return}t.el=e.el,t.targetStart=e.targetStart;const H=t.anchor=e.anchor,$=t.target=e.target,F=t.targetAnchor=e.targetAnchor,J=$t(e.props),K=J?n:$,Q=J?H:F;if(r==="svg"||cs($)?r="svg":(r==="mathml"||fs($))&&(r="mathml"),z?(_(e.dynamicChildren,z,K,s,o,r,l),pi(e,t,!0)):c||p(e,t,K,Q,s,o,r,l,!1),M)J?t.props&&e.props&&t.props.to!==e.props.to&&(t.props.to=e.props.to):hn(t,n,H,d,1);else if((t.props&&t.props.to)!==(e.props&&e.props.to)){const O=t.target=ii(t.props,k);O&&hn(t,O,null,d,0)}else J&&hn(t,$,F,d,1);gn(t,M)}},remove(e,t,n,{um:i,o:{remove:s}},o){const{shapeFlag:r,children:l,anchor:c,targetStart:d,targetAnchor:f,target:p,props:_}=e;if(p&&(s(d),s(f)),o&&s(c),r&16){const S=o||!$t(_);for(let k=0;k<l.length;k++){const y=l[k];i(y,t,n,S,!!y.dynamicChildren)}}},move:hn,hydrate:mr};function hn(e,t,n,{o:{insert:i},m:s},o=2){o===0&&i(e.targetAnchor,t,n);const{el:r,anchor:l,shapeFlag:c,children:d,props:f}=e,p=o===2;if(p&&i(r,t,n),(!p||$t(f))&&c&16)for(let _=0;_<d.length;_++)s(d[_],t,n,2);p&&i(l,t,n)}function mr(e,t,n,i,s,o,{o:{nextSibling:r,parentNode:l,querySelector:c,insert:d,createText:f}},p){function _(y,L,M,B){L.anchor=p(r(y),L,l(y),n,i,s,o),L.targetStart=M,L.targetAnchor=B}const S=t.target=ii(t.props,c),k=$t(t.props);if(S){const y=S._lpa||S.firstChild;if(t.shapeFlag&16)if(k)_(e,t,y,y&&r(y));else{t.anchor=r(e);let L=y;for(;L;){if(L&&L.nodeType===8){if(L.data==="teleport start anchor")t.targetStart=L;else if(L.data==="teleport anchor"){t.targetAnchor=L,S._lpa=t.targetAnchor&&r(t.targetAnchor);break}}L=r(L)}t.targetAnchor||ds(S,t,f,d),p(y&&r(y),t,S,n,i,s,o)}gn(t,k)}else k&&t.shapeFlag&16&&_(e,t,e,r(e));return t.anchor&&r(t.anchor)}const br=us;function gn(e,t){const n=e.ctx;if(n&&n.ut){let i,s;for(t?(i=e.el,s=e.anchor):(i=e.targetStart,s=e.targetAnchor);i&&i!==s;)i.nodeType===1&&i.setAttribute("data-v-owner",n.uid),i=i.nextSibling;n.ut()}}function ds(e,t,n,i){const s=t.targetStart=n(""),o=t.targetAnchor=n("");return s[ls]=o,e&&(i(s,e),i(o,e)),o}const xr=Symbol("_leaveCb");function si(e,t){e.shapeFlag&6&&e.component?(e.transition=t,si(e.component.subTree,t)):e.shapeFlag&128?(e.ssContent.transition=t.clone(e.ssContent),e.ssFallback.transition=t.clone(e.ssFallback)):e.transition=t}function mn(e,t){return D(e)?fe({name:e.name},t,{setup:e}):e}function ps(e){e.ids=[e.ids[0]+e.ids[2]+++"-",0,0]}const bn=new WeakMap;function jt(e,t,n,i,s=!1){if(j(e)){e.forEach((k,y)=>jt(k,t&&(j(t)?t[y]:t),n,i,s));return}if(Bt(i)&&!s){i.shapeFlag&512&&i.type.__asyncResolved&&i.component.subTree.component&&jt(e,t,n,i.component.subTree);return}const o=i.shapeFlag&4?mi(i.component):i.el,r=s?null:o,{i:l,r:c}=e,d=t&&t.r,f=l.refs===te?l.refs={}:l.refs,p=l.setupState,_=W(p),S=p===te?wi:k=>q(_,k);if(d!=null&&d!==c){if(vs(t),oe(d))f[d]=null,S(d)&&(p[d]=null);else if(ue(d)){d.value=null;const k=t;k.k&&(f[k.k]=null)}}if(D(c))yt(c,l,12,[r,f]);else{const k=oe(c),y=ue(c);if(k||y){const L=()=>{if(e.f){const M=k?S(c)?p[c]:f[c]:c.value;if(s)j(M)&&Ln(M,o);else if(j(M))M.includes(o)||M.push(o);else if(k)f[c]=[o],S(c)&&(p[c]=f[c]);else{const B=[o];c.value=B,e.k&&(f[e.k]=B)}}else k?(f[c]=r,S(c)&&(p[c]=r)):y&&(c.value=r,e.k&&(f[e.k]=r))};if(r){const M=()=>{L(),bn.delete(e)};M.id=-1,bn.set(e,M),ge(M,n)}else vs(e),L()}}}function vs(e){const t=bn.get(e);t&&(t.flags|=8,bn.delete(e))}tn().requestIdleCallback,tn().cancelIdleCallback;const Bt=e=>!!e.type.__asyncLoader,hs=e=>e.type.__isKeepAlive;function _r(e,t){gs(e,"a",t)}function yr(e,t){gs(e,"da",t)}function gs(e,t,n=me){const i=e.__wdc||(e.__wdc=()=>{let s=n;for(;s;){if(s.isDeactivated)return;s=s.parent}return e()});if(xn(t,i,n),n){let s=n.parent;for(;s&&s.parent;)hs(s.parent.vnode)&&wr(i,t,n,s),s=s.parent}}function wr(e,t,n,i){const s=xn(t,e,i,!0);kt(()=>{Ln(i[t],s)},n)}function xn(e,t,n=me,i=!1){if(n){const s=n[e]||(n[e]=[]),o=t.__weh||(t.__weh=(...r)=>{Le();const l=Yt(n),c=De(t,n,e,r);return l(),Ne(),c});return i?s.unshift(o):s.push(o),o}}const Je=e=>(t,n=me)=>{(!qt||e==="sp")&&xn(e,(...i)=>t(...i),n)},zr=Je("bm"),Ht=Je("m"),kr=Je("bu"),Sr=Je("u"),Tr=Je("bum"),kt=Je("um"),Ar=Je("sp"),Er=Je("rtg"),Cr=Je("rtc");function Mr(e,t=me){xn("ec",e,t)}const Rr=Symbol.for("v-ndc");function ms(e,t,n,i){let s;const o=n,r=j(e);if(r||oe(e)){const l=r&&dt(e);let c=!1,d=!1;l&&(c=!Te(e),d=Xe(e),e=nn(e)),s=new Array(e.length);for(let f=0,p=e.length;f<p;f++)s[f]=t(c?d?_t(Oe(e[f])):Oe(e[f]):e[f],f,void 0,o)}else if(typeof e=="number"){s=new Array(e);for(let l=0;l<e;l++)s[l]=t(l+1,l,void 0,o)}else if(se(e))if(e[Symbol.iterator])s=Array.from(e,(l,c)=>t(l,c,void 0,o));else{const l=Object.keys(e);s=new Array(l.length);for(let c=0,d=l.length;c<d;c++){const f=l[c];s[c]=t(e[f],f,c,o)}}else s=[];return s}const oi=e=>e?Ws(e)?mi(e):oi(e.parent):null,Gt=fe(Object.create(null),{$:e=>e,$el:e=>e.vnode.el,$data:e=>e.data,$props:e=>e.props,$attrs:e=>e.attrs,$slots:e=>e.slots,$refs:e=>e.refs,$parent:e=>oi(e.parent),$root:e=>oi(e.root),$host:e=>e.ce,$emit:e=>e.emit,$options:e=>ys(e),$forceUpdate:e=>e.f||(e.f=()=>{ni(e.update)}),$nextTick:e=>e.n||(e.n=ar.bind(e.proxy)),$watch:e=>hr.bind(e)}),ri=(e,t)=>e!==te&&!e.__isScriptSetup&&q(e,t),Ir={get({_:e},t){if(t==="__v_skip")return!0;const{ctx:n,setupState:i,data:s,props:o,accessCache:r,type:l,appContext:c}=e;if(t[0]!=="$"){const _=r[t];if(_!==void 0)switch(_){case 1:return i[t];case 2:return s[t];case 4:return n[t];case 3:return o[t]}else{if(ri(i,t))return r[t]=1,i[t];if(s!==te&&q(s,t))return r[t]=2,s[t];if(q(o,t))return r[t]=3,o[t];if(n!==te&&q(n,t))return r[t]=4,n[t];li&&(r[t]=0)}}const d=Gt[t];let f,p;if(d)return t==="$attrs"&&de(e.attrs,"get",""),d(e);if((f=l.__cssModules)&&(f=f[t]))return f;if(n!==te&&q(n,t))return r[t]=4,n[t];if(p=c.config.globalProperties,q(p,t))return p[t]},set({_:e},t,n){const{data:i,setupState:s,ctx:o}=e;return ri(s,t)?(s[t]=n,!0):i!==te&&q(i,t)?(i[t]=n,!0):q(e.props,t)||t[0]==="$"&&t.slice(1)in e?!1:(o[t]=n,!0)},has({_:{data:e,setupState:t,accessCache:n,ctx:i,appContext:s,props:o,type:r}},l){let c;return!!(n[l]||e!==te&&l[0]!=="$"&&q(e,l)||ri(t,l)||q(o,l)||q(i,l)||q(Gt,l)||q(s.config.globalProperties,l)||(c=r.__cssModules)&&c[l])},defineProperty(e,t,n){return n.get!=null?e._.accessCache[t]=0:q(n,"value")&&this.set(e,t,n.value,null),Reflect.defineProperty(e,t,n)}};function bs(e){return j(e)?e.reduce((t,n)=>(t[n]=null,t),{}):e}let li=!0;function Or(e){const t=ys(e),n=e.proxy,i=e.ctx;li=!1,t.beforeCreate&&xs(t.beforeCreate,e,"bc");const{data:s,computed:o,methods:r,watch:l,provide:c,inject:d,created:f,beforeMount:p,mounted:_,beforeUpdate:S,updated:k,activated:y,deactivated:L,beforeDestroy:M,beforeUnmount:B,destroyed:C,unmounted:z,render:H,renderTracked:$,renderTriggered:F,errorCaptured:J,serverPrefetch:K,expose:Q,inheritAttrs:O,components:Y,directives:ae,filters:ke}=t;if(d&&Pr(d,i,null),r)for(const Z in r){const G=r[Z];D(G)&&(i[Z]=G.bind(n))}if(s){const Z=s.call(n,n);se(Z)&&(e.data=Zn(Z))}if(li=!0,o)for(const Z in o){const G=o[Z],Ce=D(G)?G.bind(n,n):D(G.get)?G.get.bind(n,n):Pe,Ue=!D(G)&&D(G.set)?G.set.bind(n):Pe,Me=V({get:Ce,set:Ue});Object.defineProperty(i,Z,{enumerable:!0,configurable:!0,get:()=>Me.value,set:be=>Me.value=be})}if(l)for(const Z in l)_s(l[Z],i,n,Z);if(c){const Z=D(c)?c.call(n):c;Reflect.ownKeys(Z).forEach(G=>{dr(G,Z[G])})}f&&xs(f,e,"c");function re(Z,G){j(G)?G.forEach(Ce=>Z(Ce.bind(n))):G&&Z(G.bind(n))}if(re(zr,p),re(Ht,_),re(kr,S),re(Sr,k),re(_r,y),re(yr,L),re(Mr,J),re(Cr,$),re(Er,F),re(Tr,B),re(kt,z),re(Ar,K),j(Q))if(Q.length){const Z=e.exposed||(e.exposed={});Q.forEach(G=>{Object.defineProperty(Z,G,{get:()=>n[G],set:Ce=>n[G]=Ce,enumerable:!0})})}else e.exposed||(e.exposed={});H&&e.render===Pe&&(e.render=H),O!=null&&(e.inheritAttrs=O),Y&&(e.components=Y),ae&&(e.directives=ae),K&&ps(e)}function Pr(e,t,n=Pe){j(e)&&(e=ai(e));for(const i in e){const s=e[i];let o;se(s)?"default"in s?o=pn(s.from||i,s.default,!0):o=pn(s.from||i):o=pn(s),ue(o)?Object.defineProperty(t,i,{enumerable:!0,configurable:!0,get:()=>o.value,set:r=>o.value=r}):t[i]=o}}function xs(e,t,n){De(j(e)?e.map(i=>i.bind(t.proxy)):e.bind(t.proxy),t,n)}function _s(e,t,n,i){let s=i.includes(".")?rs(n,i):()=>n[i];if(oe(e)){const o=t[e];D(o)&&vn(s,o)}else if(D(e))vn(s,e.bind(n));else if(se(e))if(j(e))e.forEach(o=>_s(o,t,n,i));else{const o=D(e.handler)?e.handler.bind(n):t[e.handler];D(o)&&vn(s,o,e)}}function ys(e){const t=e.type,{mixins:n,extends:i}=t,{mixins:s,optionsCache:o,config:{optionMergeStrategies:r}}=e.appContext,l=o.get(t);let c;return l?c=l:!s.length&&!n&&!i?c=t:(c={},s.length&&s.forEach(d=>_n(c,d,r,!0)),_n(c,t,r)),se(t)&&o.set(t,c),c}function _n(e,t,n,i=!1){const{mixins:s,extends:o}=t;o&&_n(e,o,n,!0),s&&s.forEach(r=>_n(e,r,n,!0));for(const r in t)if(!(i&&r==="expose")){const l=Fr[r]||n&&n[r];e[r]=l?l(e[r],t[r]):t[r]}return e}const Fr={data:ws,props:zs,emits:zs,methods:Ut,computed:Ut,beforeCreate:he,created:he,beforeMount:he,mounted:he,beforeUpdate:he,updated:he,beforeDestroy:he,beforeUnmount:he,destroyed:he,unmounted:he,activated:he,deactivated:he,errorCaptured:he,serverPrefetch:he,components:Ut,directives:Ut,watch:Nr,provide:ws,inject:Lr};function ws(e,t){return t?e?function(){return fe(D(e)?e.call(this,this):e,D(t)?t.call(this,this):t)}:t:e}function Lr(e,t){return Ut(ai(e),ai(t))}function ai(e){if(j(e)){const t={};for(let n=0;n<e.length;n++)t[e[n]]=e[n];return t}return e}function he(e,t){return e?[...new Set([].concat(e,t))]:t}function Ut(e,t){return e?fe(Object.create(null),e,t):t}function zs(e,t){return e?j(e)&&j(t)?[...new Set([...e,...t])]:fe(Object.create(null),bs(e),bs(t??{})):t}function Nr(e,t){if(!e)return t;if(!t)return e;const n=fe(Object.create(null),e);for(const i in t)n[i]=he(e[i],t[i]);return n}function ks(){return{app:null,config:{isNativeTag:wi,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let Dr=0;function $r(e,t){return function(i,s=null){D(i)||(i=fe({},i)),s!=null&&!se(s)&&(s=null);const o=ks(),r=new WeakSet,l=[];let c=!1;const d=o.app={_uid:Dr++,_component:i,_props:s,_container:null,_context:o,_instance:null,version:_l,get config(){return o.config},set config(f){},use(f,...p){return r.has(f)||(f&&D(f.install)?(r.add(f),f.install(d,...p)):D(f)&&(r.add(f),f(d,...p))),d},mixin(f){return o.mixins.includes(f)||o.mixins.push(f),d},component(f,p){return p?(o.components[f]=p,d):o.components[f]},directive(f,p){return p?(o.directives[f]=p,d):o.directives[f]},mount(f,p,_){if(!c){const S=d._ceVNode||Ee(i,s);return S.appContext=o,_===!0?_="svg":_===!1&&(_=void 0),e(S,f,_),c=!0,d._container=f,f.__vue_app__=d,mi(S.component)}},onUnmount(f){l.push(f)},unmount(){c&&(De(l,d._instance,16),e(null,d._container),delete d._container.__vue_app__)},provide(f,p){return o.provides[f]=p,d},runWithContext(f){const p=St;St=d;try{return f()}finally{St=p}}};return d}}let St=null;const jr=(e,t)=>t==="modelValue"||t==="model-value"?e.modelModifiers:e[`${t}Modifiers`]||e[`${tt(t)}Modifiers`]||e[`${ft(t)}Modifiers`];function Br(e,t,...n){if(e.isUnmounted)return;const i=e.vnode.props||te;let s=n;const o=t.startsWith("update:"),r=o&&jr(i,t.slice(7));r&&(r.trim&&(s=n.map(f=>oe(f)?f.trim():f)),r.number&&(s=n.map(yo)));let l,c=i[l=Dn(t)]||i[l=Dn(tt(t))];!c&&o&&(c=i[l=Dn(ft(t))]),c&&De(c,e,6,s);const d=i[l+"Once"];if(d){if(!e.emitted)e.emitted={};else if(e.emitted[l])return;e.emitted[l]=!0,De(d,e,6,s)}}const Hr=new WeakMap;function Ss(e,t,n=!1){const i=n?Hr:t.emitsCache,s=i.get(e);if(s!==void 0)return s;const o=e.emits;let r={},l=!1;if(!D(e)){const c=d=>{const f=Ss(d,t,!0);f&&(l=!0,fe(r,f))};!n&&t.mixins.length&&t.mixins.forEach(c),e.extends&&c(e.extends),e.mixins&&e.mixins.forEach(c)}return!o&&!l?(se(e)&&i.set(e,null),null):(j(o)?o.forEach(c=>r[c]=null):fe(r,o),se(e)&&i.set(e,r),r)}function yn(e,t){return!e||!Zt(t)?!1:(t=t.slice(2).replace(/Once$/,""),q(e,t[0].toLowerCase()+t.slice(1))||q(e,ft(t))||q(e,t))}function bf(){}function Ts(e){const{type:t,vnode:n,proxy:i,withProxy:s,propsOptions:[o],slots:r,attrs:l,emit:c,render:d,renderCache:f,props:p,data:_,setupState:S,ctx:k,inheritAttrs:y}=e,L=dn(e);let M,B;try{if(n.shapeFlag&4){const z=s||i,H=z;M=Be(d.call(H,z,f,p,S,_,k)),B=l}else{const z=t;M=Be(z.length>1?z(p,{attrs:l,slots:r,emit:c}):z(p,null)),B=t.props?l:Gr(l)}}catch(z){Vt.length=0,fn(z,e,1),M=Ee(rt)}let C=M;if(B&&y!==!1){const z=Object.keys(B),{shapeFlag:H}=C;z.length&&H&7&&(o&&z.some(Fn)&&(B=Ur(B,o)),C=Tt(C,B,!1,!0))}return n.dirs&&(C=Tt(C,null,!1,!0),C.dirs=C.dirs?C.dirs.concat(n.dirs):n.dirs),n.transition&&si(C,n.transition),M=C,dn(L),M}const Gr=e=>{let t;for(const n in e)(n==="class"||n==="style"||Zt(n))&&((t||(t={}))[n]=e[n]);return t},Ur=(e,t)=>{const n={};for(const i in e)(!Fn(i)||!(i.slice(9)in t))&&(n[i]=e[i]);return n};function Vr(e,t,n){const{props:i,children:s,component:o}=e,{props:r,children:l,patchFlag:c}=t,d=o.emitsOptions;if(t.dirs||t.transition)return!0;if(n&&c>=0){if(c&1024)return!0;if(c&16)return i?As(i,r,d):!!r;if(c&8){const f=t.dynamicProps;for(let p=0;p<f.length;p++){const _=f[p];if(r[_]!==i[_]&&!yn(d,_))return!0}}}else return(s||l)&&(!l||!l.$stable)?!0:i===r?!1:i?r?As(i,r,d):!0:!!r;return!1}function As(e,t,n){const i=Object.keys(t);if(i.length!==Object.keys(e).length)return!0;for(let s=0;s<i.length;s++){const o=i[s];if(t[o]!==e[o]&&!yn(n,o))return!0}return!1}function Wr({vnode:e,parent:t},n){for(;t;){const i=t.subTree;if(i.suspense&&i.suspense.activeBranch===e&&(i.el=e.el),i===e)(e=t.vnode).el=n,t=t.parent;else break}}const Es={},Cs=()=>Object.create(Es),Ms=e=>Object.getPrototypeOf(e)===Es;function Kr(e,t,n,i=!1){const s={},o=Cs();e.propsDefaults=Object.create(null),Rs(e,t,s,o);for(const r in e.propsOptions[0])r in s||(s[r]=void 0);n?e.props=i?s:Ko(s):e.type.props?e.props=s:e.props=o,e.attrs=o}function Yr(e,t,n,i){const{props:s,attrs:o,vnode:{patchFlag:r}}=e,l=W(s),[c]=e.propsOptions;let d=!1;if((i||r>0)&&!(r&16)){if(r&8){const f=e.vnode.dynamicProps;for(let p=0;p<f.length;p++){let _=f[p];if(yn(e.emitsOptions,_))continue;const S=t[_];if(c)if(q(o,_))S!==o[_]&&(o[_]=S,d=!0);else{const k=tt(_);s[k]=ci(c,l,k,S,e,!1)}else S!==o[_]&&(o[_]=S,d=!0)}}}else{Rs(e,t,s,o)&&(d=!0);let f;for(const p in l)(!t||!q(t,p)&&((f=ft(p))===p||!q(t,f)))&&(c?n&&(n[p]!==void 0||n[f]!==void 0)&&(s[p]=ci(c,l,p,void 0,e,!0)):delete s[p]);if(o!==l)for(const p in o)(!t||!q(t,p))&&(delete o[p],d=!0)}d&&Ye(e.attrs,"set","")}function Rs(e,t,n,i){const[s,o]=e.propsOptions;let r=!1,l;if(t)for(let c in t){if(Mt(c))continue;const d=t[c];let f;s&&q(s,f=tt(c))?!o||!o.includes(f)?n[f]=d:(l||(l={}))[f]=d:yn(e.emitsOptions,c)||(!(c in i)||d!==i[c])&&(i[c]=d,r=!0)}if(o){const c=W(n),d=l||te;for(let f=0;f<o.length;f++){const p=o[f];n[p]=ci(s,c,p,d[p],e,!q(d,p))}}return r}function ci(e,t,n,i,s,o){const r=e[n];if(r!=null){const l=q(r,"default");if(l&&i===void 0){const c=r.default;if(r.type!==Function&&!r.skipFactory&&D(c)){const{propsDefaults:d}=s;if(n in d)i=d[n];else{const f=Yt(s);i=d[n]=c.call(null,t),f()}}else i=c;s.ce&&s.ce._setProp(n,i)}r[0]&&(o&&!l?i=!1:r[1]&&(i===""||i===ft(n))&&(i=!0))}return i}const qr=new WeakMap;function Is(e,t,n=!1){const i=n?qr:t.propsCache,s=i.get(e);if(s)return s;const o=e.props,r={},l=[];let c=!1;if(!D(e)){const f=p=>{c=!0;const[_,S]=Is(p,t,!0);fe(r,_),S&&l.push(...S)};!n&&t.mixins.length&&t.mixins.forEach(f),e.extends&&f(e.extends),e.mixins&&e.mixins.forEach(f)}if(!o&&!c)return se(e)&&i.set(e,mt),mt;if(j(o))for(let f=0;f<o.length;f++){const p=tt(o[f]);Os(p)&&(r[p]=te)}else if(o)for(const f in o){const p=tt(f);if(Os(p)){const _=o[f],S=r[p]=j(_)||D(_)?{type:_}:fe({},_),k=S.type;let y=!1,L=!0;if(j(k))for(let M=0;M<k.length;++M){const B=k[M],C=D(B)&&B.name;if(C==="Boolean"){y=!0;break}else C==="String"&&(L=!1)}else y=D(k)&&k.name==="Boolean";S[0]=y,S[1]=L,(y||q(S,"default"))&&l.push(p)}}const d=[r,l];return se(e)&&i.set(e,d),d}function Os(e){return e[0]!=="$"&&!Mt(e)}const fi=e=>e==="_"||e==="_ctx"||e==="$stable",ui=e=>j(e)?e.map(Be):[Be(e)],Xr=(e,t,n)=>{if(t._n)return t;const i=ur((...s)=>ui(t(...s)),n);return i._c=!1,i},Ps=(e,t,n)=>{const i=e._ctx;for(const s in e){if(fi(s))continue;const o=e[s];if(D(o))t[s]=Xr(s,o,i);else if(o!=null){const r=ui(o);t[s]=()=>r}}},Fs=(e,t)=>{const n=ui(t);e.slots.default=()=>n},Ls=(e,t,n)=>{for(const i in t)(n||!fi(i))&&(e[i]=t[i])},Jr=(e,t,n)=>{const i=e.slots=Cs();if(e.vnode.shapeFlag&32){const s=t._;s?(Ls(i,t,n),n&&Ei(i,"_",s,!0)):Ps(t,i)}else t&&Fs(e,t)},Zr=(e,t,n)=>{const{vnode:i,slots:s}=e;let o=!0,r=te;if(i.shapeFlag&32){const l=t._;l?n&&l===1?o=!1:Ls(s,t,n):(o=!t.$stable,Ps(t,s)),r=t}else t&&(Fs(e,t),r={default:1});if(o)for(const l in s)!fi(l)&&r[l]==null&&delete s[l]},ge=il;function Qr(e){return el(e)}function el(e,t){const n=tn();n.__VUE__=!0;const{insert:i,remove:s,patchProp:o,createElement:r,createText:l,createComment:c,setText:d,setElementText:f,parentNode:p,nextSibling:_,setScopeId:S=Pe,insertStaticContent:k}=e,y=(a,u,v,x=null,g=null,m=null,A=void 0,T=null,w=!!u.dynamicChildren)=>{if(a===u)return;a&&!Kt(a,u)&&(x=Xt(a),be(a,g,m,!0),a=null),u.patchFlag===-2&&(w=!1,u.dynamicChildren=null);const{type:b,ref:P,shapeFlag:E}=u;switch(b){case wn:L(a,u,v,x);break;case rt:M(a,u,v,x);break;case zn:a==null&&B(u,v,x,A);break;case Ae:Y(a,u,v,x,g,m,A,T,w);break;default:E&1?H(a,u,v,x,g,m,A,T,w):E&6?ae(a,u,v,x,g,m,A,T,w):(E&64||E&128)&&b.process(a,u,v,x,g,m,A,T,w,gt)}P!=null&&g?jt(P,a&&a.ref,m,u||a,!u):P==null&&a&&a.ref!=null&&jt(a.ref,null,m,a,!0)},L=(a,u,v,x)=>{if(a==null)i(u.el=l(u.children),v,x);else{const g=u.el=a.el;u.children!==a.children&&d(g,u.children)}},M=(a,u,v,x)=>{a==null?i(u.el=c(u.children||""),v,x):u.el=a.el},B=(a,u,v,x)=>{[a.el,a.anchor]=k(a.children,u,v,x,a.el,a.anchor)},C=({el:a,anchor:u},v,x)=>{let g;for(;a&&a!==u;)g=_(a),i(a,v,x),a=g;i(u,v,x)},z=({el:a,anchor:u})=>{let v;for(;a&&a!==u;)v=_(a),s(a),a=v;s(u)},H=(a,u,v,x,g,m,A,T,w)=>{if(u.type==="svg"?A="svg":u.type==="math"&&(A="mathml"),a==null)$(u,v,x,g,m,A,T,w);else{const b=a.el&&a.el._isVueCE?a.el:null;try{b&&b._beginPatch(),K(a,u,g,m,A,T,w)}finally{b&&b._endPatch()}}},$=(a,u,v,x,g,m,A,T)=>{let w,b;const{props:P,shapeFlag:E,transition:I,dirs:N}=a;if(w=a.el=r(a.type,m,P&&P.is,P),E&8?f(w,a.children):E&16&&J(a.children,w,null,x,g,di(a,m),A,T),N&&vt(a,null,x,"created"),F(w,a,a.scopeId,A,x),P){for(const ie in P)ie!=="value"&&!Mt(ie)&&o(w,ie,null,P[ie],m,x);"value"in P&&o(w,"value",null,P.value,m),(b=P.onVnodeBeforeMount)&&He(b,x,a)}N&&vt(a,null,x,"beforeMount");const U=tl(g,I);U&&I.beforeEnter(w),i(w,u,v),((b=P&&P.onVnodeMounted)||U||N)&&ge(()=>{b&&He(b,x,a),U&&I.enter(w),N&&vt(a,null,x,"mounted")},g)},F=(a,u,v,x,g)=>{if(v&&S(a,v),x)for(let m=0;m<x.length;m++)S(a,x[m]);if(g){let m=g.subTree;if(u===m||js(m.type)&&(m.ssContent===u||m.ssFallback===u)){const A=g.vnode;F(a,A,A.scopeId,A.slotScopeIds,g.parent)}}},J=(a,u,v,x,g,m,A,T,w=0)=>{for(let b=w;b<a.length;b++){const P=a[b]=T?at(a[b]):Be(a[b]);y(null,P,u,v,x,g,m,A,T)}},K=(a,u,v,x,g,m,A)=>{const T=u.el=a.el;let{patchFlag:w,dynamicChildren:b,dirs:P}=u;w|=a.patchFlag&16;const E=a.props||te,I=u.props||te;let N;if(v&&ht(v,!1),(N=I.onVnodeBeforeUpdate)&&He(N,v,u,a),P&&vt(u,a,v,"beforeUpdate"),v&&ht(v,!0),(E.innerHTML&&I.innerHTML==null||E.textContent&&I.textContent==null)&&f(T,""),b?Q(a.dynamicChildren,b,T,v,x,di(u,g),m):A||G(a,u,T,null,v,x,di(u,g),m,!1),w>0){if(w&16)O(T,E,I,v,g);else if(w&2&&E.class!==I.class&&o(T,"class",null,I.class,g),w&4&&o(T,"style",E.style,I.style,g),w&8){const U=u.dynamicProps;for(let ie=0;ie<U.length;ie++){const X=U[ie],_e=E[X],ye=I[X];(ye!==_e||X==="value")&&o(T,X,_e,ye,g,v)}}w&1&&a.children!==u.children&&f(T,u.children)}else!A&&b==null&&O(T,E,I,v,g);((N=I.onVnodeUpdated)||P)&&ge(()=>{N&&He(N,v,u,a),P&&vt(u,a,v,"updated")},x)},Q=(a,u,v,x,g,m,A)=>{for(let T=0;T<u.length;T++){const w=a[T],b=u[T],P=w.el&&(w.type===Ae||!Kt(w,b)||w.shapeFlag&198)?p(w.el):v;y(w,b,P,null,x,g,m,A,!0)}},O=(a,u,v,x,g)=>{if(u!==v){if(u!==te)for(const m in u)!Mt(m)&&!(m in v)&&o(a,m,u[m],null,g,x);for(const m in v){if(Mt(m))continue;const A=v[m],T=u[m];A!==T&&m!=="value"&&o(a,m,T,A,g,x)}"value"in v&&o(a,"value",u.value,v.value,g)}},Y=(a,u,v,x,g,m,A,T,w)=>{const b=u.el=a?a.el:l(""),P=u.anchor=a?a.anchor:l("");let{patchFlag:E,dynamicChildren:I,slotScopeIds:N}=u;N&&(T=T?T.concat(N):N),a==null?(i(b,v,x),i(P,v,x),J(u.children||[],v,P,g,m,A,T,w)):E>0&&E&64&&I&&a.dynamicChildren&&a.dynamicChildren.length===I.length?(Q(a.dynamicChildren,I,v,g,m,A,T),(u.key!=null||g&&u===g.subTree)&&pi(a,u,!0)):G(a,u,v,P,g,m,A,T,w)},ae=(a,u,v,x,g,m,A,T,w)=>{u.slotScopeIds=T,a==null?u.shapeFlag&512?g.ctx.activate(u,v,x,A,w):ke(u,v,x,g,m,A,w):Qe(a,u,w)},ke=(a,u,v,x,g,m,A)=>{const T=a.component=fl(a,x,g);if(hs(a)&&(T.ctx.renderer=gt),dl(T,!1,A),T.asyncDep){if(g&&g.registerDep(T,re,A),!a.el){const w=T.subTree=Ee(rt);M(null,w,u,v),a.placeholder=w.el}}else re(T,a,u,v,g,m,A)},Qe=(a,u,v)=>{const x=u.component=a.component;if(Vr(a,u,v))if(x.asyncDep&&!x.asyncResolved){Z(x,u,v);return}else x.next=u,x.update();else u.el=a.el,x.vnode=u},re=(a,u,v,x,g,m,A)=>{const T=()=>{if(a.isMounted){let{next:E,bu:I,u:N,parent:U,vnode:ie}=a;{const We=Ns(a);if(We){E&&(E.el=ie.el,Z(a,E,A)),We.asyncDep.then(()=>{a.isUnmounted||T()});return}}let X=E,_e;ht(a,!1),E?(E.el=ie.el,Z(a,E,A)):E=ie,I&&$n(I),(_e=E.props&&E.props.onVnodeBeforeUpdate)&&He(_e,U,E,ie),ht(a,!0);const ye=Ts(a),Ve=a.subTree;a.subTree=ye,y(Ve,ye,p(Ve.el),Xt(Ve),a,g,m),E.el=ye.el,X===null&&Wr(a,ye.el),N&&ge(N,g),(_e=E.props&&E.props.onVnodeUpdated)&&ge(()=>He(_e,U,E,ie),g)}else{let E;const{el:I,props:N}=u,{bm:U,m:ie,parent:X,root:_e,type:ye}=a,Ve=Bt(u);ht(a,!1),U&&$n(U),!Ve&&(E=N&&N.onVnodeBeforeMount)&&He(E,X,u),ht(a,!0);{_e.ce&&_e.ce._def.shadowRoot!==!1&&_e.ce._injectChildStyle(ye);const We=a.subTree=Ts(a);y(null,We,v,x,a,g,m),u.el=We.el}if(ie&&ge(ie,g),!Ve&&(E=N&&N.onVnodeMounted)){const We=u;ge(()=>He(E,X,We),g)}(u.shapeFlag&256||X&&Bt(X.vnode)&&X.vnode.shapeFlag&256)&&a.a&&ge(a.a,g),a.isMounted=!0,u=v=x=null}};a.scope.on();const w=a.effect=new Oi(T);a.scope.off();const b=a.update=w.run.bind(w),P=a.job=w.runIfDirty.bind(w);P.i=a,P.id=a.uid,w.scheduler=()=>ni(P),ht(a,!0),b()},Z=(a,u,v)=>{u.component=a;const x=a.vnode.props;a.vnode=u,a.next=null,Yr(a,u.props,x,v),Zr(a,u.children,v),Le(),ts(a),Ne()},G=(a,u,v,x,g,m,A,T,w=!1)=>{const b=a&&a.children,P=a?a.shapeFlag:0,E=u.children,{patchFlag:I,shapeFlag:N}=u;if(I>0){if(I&128){Ue(b,E,v,x,g,m,A,T,w);return}else if(I&256){Ce(b,E,v,x,g,m,A,T,w);return}}N&8?(P&16&&Ct(b,g,m),E!==b&&f(v,E)):P&16?N&16?Ue(b,E,v,x,g,m,A,T,w):Ct(b,g,m,!0):(P&8&&f(v,""),N&16&&J(E,v,x,g,m,A,T,w))},Ce=(a,u,v,x,g,m,A,T,w)=>{a=a||mt,u=u||mt;const b=a.length,P=u.length,E=Math.min(b,P);let I;for(I=0;I<E;I++){const N=u[I]=w?at(u[I]):Be(u[I]);y(a[I],N,v,null,g,m,A,T,w)}b>P?Ct(a,g,m,!0,!1,E):J(u,v,x,g,m,A,T,w,E)},Ue=(a,u,v,x,g,m,A,T,w)=>{let b=0;const P=u.length;let E=a.length-1,I=P-1;for(;b<=E&&b<=I;){const N=a[b],U=u[b]=w?at(u[b]):Be(u[b]);if(Kt(N,U))y(N,U,v,null,g,m,A,T,w);else break;b++}for(;b<=E&&b<=I;){const N=a[E],U=u[I]=w?at(u[I]):Be(u[I]);if(Kt(N,U))y(N,U,v,null,g,m,A,T,w);else break;E--,I--}if(b>E){if(b<=I){const N=I+1,U=N<P?u[N].el:x;for(;b<=I;)y(null,u[b]=w?at(u[b]):Be(u[b]),v,U,g,m,A,T,w),b++}}else if(b>I)for(;b<=E;)be(a[b],g,m,!0),b++;else{const N=b,U=b,ie=new Map;for(b=U;b<=I;b++){const Se=u[b]=w?at(u[b]):Be(u[b]);Se.key!=null&&ie.set(Se.key,b)}let X,_e=0;const ye=I-U+1;let Ve=!1,We=0;const Jt=new Array(ye);for(b=0;b<ye;b++)Jt[b]=0;for(b=N;b<=E;b++){const Se=a[b];if(_e>=ye){be(Se,g,m,!0);continue}let Ke;if(Se.key!=null)Ke=ie.get(Se.key);else for(X=U;X<=I;X++)if(Jt[X-U]===0&&Kt(Se,u[X])){Ke=X;break}Ke===void 0?be(Se,g,m,!0):(Jt[Ke-U]=b+1,Ke>=We?We=Ke:Ve=!0,y(Se,u[Ke],v,null,g,m,A,T,w),_e++)}const vo=Ve?nl(Jt):mt;for(X=vo.length-1,b=ye-1;b>=0;b--){const Se=U+b,Ke=u[Se],ho=u[Se+1],go=Se+1<P?ho.el||$s(ho):x;Jt[b]===0?y(null,Ke,v,go,g,m,A,T,w):Ve&&(X<0||b!==vo[X]?Me(Ke,v,go,2):X--)}}},Me=(a,u,v,x,g=null)=>{const{el:m,type:A,transition:T,children:w,shapeFlag:b}=a;if(b&6){Me(a.component.subTree,u,v,x);return}if(b&128){a.suspense.move(u,v,x);return}if(b&64){A.move(a,u,v,gt);return}if(A===Ae){i(m,u,v);for(let E=0;E<w.length;E++)Me(w[E],u,v,x);i(a.anchor,u,v);return}if(A===zn){C(a,u,v);return}if(x!==2&&b&1&&T)if(x===0)T.beforeEnter(m),i(m,u,v),ge(()=>T.enter(m),g);else{const{leave:E,delayLeave:I,afterLeave:N}=T,U=()=>{a.ctx.isUnmounted?s(m):i(m,u,v)},ie=()=>{m._isLeaving&&m[xr](!0),E(m,()=>{U(),N&&N()})};I?I(m,U,ie):ie()}else i(m,u,v)},be=(a,u,v,x=!1,g=!1)=>{const{type:m,props:A,ref:T,children:w,dynamicChildren:b,shapeFlag:P,patchFlag:E,dirs:I,cacheIndex:N}=a;if(E===-2&&(g=!1),T!=null&&(Le(),jt(T,null,v,a,!0),Ne()),N!=null&&(u.renderCache[N]=void 0),P&256){u.ctx.deactivate(a);return}const U=P&1&&I,ie=!Bt(a);let X;if(ie&&(X=A&&A.onVnodeBeforeUnmount)&&He(X,u,a),P&6)ce(a.component,v,x);else{if(P&128){a.suspense.unmount(v,x);return}U&&vt(a,null,u,"beforeUnmount"),P&64?a.type.remove(a,u,v,gt,x):b&&!b.hasOnce&&(m!==Ae||E>0&&E&64)?Ct(b,u,v,!1,!0):(m===Ae&&E&384||!g&&P&16)&&Ct(w,u,v),x&&ee(a)}(ie&&(X=A&&A.onVnodeUnmounted)||U)&&ge(()=>{X&&He(X,u,a),U&&vt(a,null,u,"unmounted")},v)},ee=a=>{const{type:u,el:v,anchor:x,transition:g}=a;if(u===Ae){R(v,x);return}if(u===zn){z(a);return}const m=()=>{s(v),g&&!g.persisted&&g.afterLeave&&g.afterLeave()};if(a.shapeFlag&1&&g&&!g.persisted){const{leave:A,delayLeave:T}=g,w=()=>A(v,m);T?T(a.el,m,w):w()}else m()},R=(a,u)=>{let v;for(;a!==u;)v=_(a),s(a),a=v;s(u)},ce=(a,u,v)=>{const{bum:x,scope:g,job:m,subTree:A,um:T,m:w,a:b}=a;Ds(w),Ds(b),x&&$n(x),g.stop(),m&&(m.flags|=8,be(A,a,u,v)),T&&ge(T,u),ge(()=>{a.isUnmounted=!0},u)},Ct=(a,u,v,x=!1,g=!1,m=0)=>{for(let A=m;A<a.length;A++)be(a[A],u,v,x,g)},Xt=a=>{if(a.shapeFlag&6)return Xt(a.component.subTree);if(a.shapeFlag&128)return a.suspense.next();const u=_(a.anchor||a.el),v=u&&u[ls];return v?_(v):u};let In=!1;const On=(a,u,v)=>{let x;a==null?u._vnode&&(be(u._vnode,null,null,!0),x=u._vnode.component):y(u._vnode||null,a,u,null,null,null,v),u._vnode=a,In||(In=!0,ts(x),ns(),In=!1)},gt={p:y,um:be,m:Me,r:ee,mt:ke,mc:J,pc:G,pbc:Q,n:Xt,o:e};return{render:On,hydrate:void 0,createApp:$r(On)}}function di({type:e,props:t},n){return n==="svg"&&e==="foreignObject"||n==="mathml"&&e==="annotation-xml"&&t&&t.encoding&&t.encoding.includes("html")?void 0:n}function ht({effect:e,job:t},n){n?(e.flags|=32,t.flags|=4):(e.flags&=-33,t.flags&=-5)}function tl(e,t){return(!e||e&&!e.pendingBranch)&&t&&!t.persisted}function pi(e,t,n=!1){const i=e.children,s=t.children;if(j(i)&&j(s))for(let o=0;o<i.length;o++){const r=i[o];let l=s[o];l.shapeFlag&1&&!l.dynamicChildren&&((l.patchFlag<=0||l.patchFlag===32)&&(l=s[o]=at(s[o]),l.el=r.el),!n&&l.patchFlag!==-2&&pi(r,l)),l.type===wn&&(l.patchFlag!==-1?l.el=r.el:l.__elIndex=o+(e.type===Ae?1:0)),l.type===rt&&!l.el&&(l.el=r.el)}}function nl(e){const t=e.slice(),n=[0];let i,s,o,r,l;const c=e.length;for(i=0;i<c;i++){const d=e[i];if(d!==0){if(s=n[n.length-1],e[s]<d){t[i]=s,n.push(i);continue}for(o=0,r=n.length-1;o<r;)l=o+r>>1,e[n[l]]<d?o=l+1:r=l;d<e[n[o]]&&(o>0&&(t[i]=n[o-1]),n[o]=i)}}for(o=n.length,r=n[o-1];o-- >0;)n[o]=r,r=t[r];return n}function Ns(e){const t=e.subTree.component;if(t)return t.asyncDep&&!t.asyncResolved?t:Ns(t)}function Ds(e){if(e)for(let t=0;t<e.length;t++)e[t].flags|=8}function $s(e){if(e.placeholder)return e.placeholder;const t=e.component;return t?$s(t.subTree):null}const js=e=>e.__isSuspense;function il(e,t){t&&t.pendingBranch?j(e)?t.effects.push(...e):t.effects.push(e):fr(e)}const Ae=Symbol.for("v-fgt"),wn=Symbol.for("v-txt"),rt=Symbol.for("v-cmt"),zn=Symbol.for("v-stc"),Vt=[];let we=null;function pe(e=!1){Vt.push(we=e?null:[])}function sl(){Vt.pop(),we=Vt[Vt.length-1]||null}let Wt=1;function Bs(e,t=!1){Wt+=e,e<0&&we&&t&&(we.hasOnce=!0)}function Hs(e){return e.dynamicChildren=Wt>0?we||mt:null,sl(),Wt>0&&we&&we.push(e),e}function ze(e,t,n,i,s,o){return Hs(h(e,t,n,i,s,o,!0))}function vi(e,t,n,i,s){return Hs(Ee(e,t,n,i,s,!0))}function Gs(e){return e?e.__v_isVNode===!0:!1}function Kt(e,t){return e.type===t.type&&e.key===t.key}const Us=({key:e})=>e??null,kn=({ref:e,ref_key:t,ref_for:n})=>(typeof e=="number"&&(e=""+e),e!=null?oe(e)||ue(e)||D(e)?{i:je,r:e,k:t,f:!!n}:e:null);function h(e,t=null,n=null,i=0,s=null,o=e===Ae?0:1,r=!1,l=!1){const c={__v_isVNode:!0,__v_skip:!0,type:e,props:t,key:t&&Us(t),ref:t&&kn(t),scopeId:ss,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetStart:null,targetAnchor:null,staticCount:0,shapeFlag:o,patchFlag:i,dynamicProps:s,dynamicChildren:null,appContext:null,ctx:je};return l?(hi(c,n),o&128&&e.normalize(c)):n&&(c.shapeFlag|=oe(n)?8:16),Wt>0&&!r&&we&&(c.patchFlag>0||o&6)&&c.patchFlag!==32&&we.push(c),c}const Ee=ol;function ol(e,t=null,n=null,i=0,s=null,o=!1){if((!e||e===Rr)&&(e=rt),Gs(e)){const l=Tt(e,t,!0);return n&&hi(l,n),Wt>0&&!o&&we&&(l.shapeFlag&6?we[we.indexOf(e)]=l:we.push(l)),l.patchFlag=-2,l}if(xl(e)&&(e=e.__vccOpts),t){t=rl(t);let{class:l,style:c}=t;l&&!oe(l)&&(t.class=Re(l)),se(c)&&(ei(c)&&!j(c)&&(c=fe({},c)),t.style=Rt(c))}const r=oe(e)?1:js(e)?128:gr(e)?64:se(e)?4:D(e)?2:0;return h(e,t,n,i,s,r,o,!0)}function rl(e){return e?ei(e)||Ms(e)?fe({},e):e:null}function Tt(e,t,n=!1,i=!1){const{props:s,ref:o,patchFlag:r,children:l,transition:c}=e,d=t?ll(s||{},t):s,f={__v_isVNode:!0,__v_skip:!0,type:e.type,props:d,key:d&&Us(d),ref:t&&t.ref?n&&o?j(o)?o.concat(kn(t)):[o,kn(t)]:kn(t):o,scopeId:e.scopeId,slotScopeIds:e.slotScopeIds,children:l,target:e.target,targetStart:e.targetStart,targetAnchor:e.targetAnchor,staticCount:e.staticCount,shapeFlag:e.shapeFlag,patchFlag:t&&e.type!==Ae?r===-1?16:r|16:r,dynamicProps:e.dynamicProps,dynamicChildren:e.dynamicChildren,appContext:e.appContext,dirs:e.dirs,transition:c,component:e.component,suspense:e.suspense,ssContent:e.ssContent&&Tt(e.ssContent),ssFallback:e.ssFallback&&Tt(e.ssFallback),placeholder:e.placeholder,el:e.el,anchor:e.anchor,ctx:e.ctx,ce:e.ce};return c&&i&&si(f,c.clone(f)),f}function Sn(e=" ",t=0){return Ee(wn,null,e,t)}function Tn(e,t){const n=Ee(zn,null,e);return n.staticCount=t,n}function lt(e="",t=!1){return t?(pe(),vi(rt,null,e)):Ee(rt,null,e)}function Be(e){return e==null||typeof e=="boolean"?Ee(rt):j(e)?Ee(Ae,null,e.slice()):Gs(e)?at(e):Ee(wn,null,String(e))}function at(e){return e.el===null&&e.patchFlag!==-1||e.memo?e:Tt(e)}function hi(e,t){let n=0;const{shapeFlag:i}=e;if(t==null)t=null;else if(j(t))n=16;else if(typeof t=="object")if(i&65){const s=t.default;s&&(s._c&&(s._d=!1),hi(e,s()),s._c&&(s._d=!0));return}else{n=32;const s=t._;!s&&!Ms(t)?t._ctx=je:s===3&&je&&(je.slots._===1?t._=1:(t._=2,e.patchFlag|=1024))}else D(t)?(t={default:t,_ctx:je},n=32):(t=String(t),i&64?(n=16,t=[Sn(t)]):n=8);e.children=t,e.shapeFlag|=n}function ll(...e){const t={};for(let n=0;n<e.length;n++){const i=e[n];for(const s in i)if(s==="class")t.class!==i.class&&(t.class=Re([t.class,i.class]));else if(s==="style")t.style=Rt([t.style,i.style]);else if(Zt(s)){const o=t[s],r=i[s];r&&o!==r&&!(j(o)&&o.includes(r))&&(t[s]=o?[].concat(o,r):r)}else s!==""&&(t[s]=i[s])}return t}function He(e,t,n,i=null){De(e,t,7,[n,i])}const al=ks();let cl=0;function fl(e,t,n){const i=e.type,s=(t?t.appContext:e.appContext)||al,o={uid:cl++,vnode:e,type:i,parent:t,appContext:s,root:null,next:null,subTree:null,effect:null,update:null,job:null,scope:new Ao(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:t?t.provides:Object.create(s.provides),ids:t?t.ids:["",0,0],accessCache:null,renderCache:[],components:null,directives:null,propsOptions:Is(i,s),emitsOptions:Ss(i,s),emit:null,emitted:null,propsDefaults:te,inheritAttrs:i.inheritAttrs,ctx:te,data:te,props:te,attrs:te,slots:te,refs:te,setupState:te,setupContext:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return o.ctx={_:o},o.root=t?t.root:o,o.emit=Br.bind(null,o),e.ce&&e.ce(o),o}let me=null;const ul=()=>me||je;let An,gi;{const e=tn(),t=(n,i)=>{let s;return(s=e[n])||(s=e[n]=[]),s.push(i),o=>{s.length>1?s.forEach(r=>r(o)):s[0](o)}};An=t("__VUE_INSTANCE_SETTERS__",n=>me=n),gi=t("__VUE_SSR_SETTERS__",n=>qt=n)}const Yt=e=>{const t=me;return An(e),e.scope.on(),()=>{e.scope.off(),An(t)}},Vs=()=>{me&&me.scope.off(),An(null)};function Ws(e){return e.vnode.shapeFlag&4}let qt=!1;function dl(e,t=!1,n=!1){t&&gi(t);const{props:i,children:s}=e.vnode,o=Ws(e);Kr(e,i,o,t),Jr(e,s,n||t);const r=o?pl(e,t):void 0;return t&&gi(!1),r}function pl(e,t){const n=e.type;e.accessCache=Object.create(null),e.proxy=new Proxy(e.ctx,Ir);const{setup:i}=n;if(i){Le();const s=e.setupContext=i.length>1?hl(e):null,o=Yt(e),r=yt(i,e,0,[e.props,s]),l=ki(r);if(Ne(),o(),(l||e.sp)&&!Bt(e)&&ps(e),l){if(r.then(Vs,Vs),t)return r.then(c=>{Ks(e,c)}).catch(c=>{fn(c,e,0)});e.asyncDep=r}else Ks(e,r)}else Ys(e)}function Ks(e,t,n){D(t)?e.type.__ssrInlineRender?e.ssrRender=t:e.render=t:se(t)&&(e.setupState=Ji(t)),Ys(e)}function Ys(e,t,n){const i=e.type;e.render||(e.render=i.render||Pe);{const s=Yt(e);Le();try{Or(e)}finally{Ne(),s()}}}const vl={get(e,t){return de(e,"get",""),e[t]}};function hl(e){const t=n=>{e.exposed=n||{}};return{attrs:new Proxy(e.attrs,vl),slots:e.slots,emit:e.emit,expose:t}}function mi(e){return e.exposed?e.exposeProxy||(e.exposeProxy=new Proxy(Ji(Yo(e.exposed)),{get(t,n){if(n in t)return t[n];if(n in Gt)return Gt[n](e)},has(t,n){return n in t||n in Gt}})):e.proxy}const gl=/(?:^|[-_])\w/g,ml=e=>e.replace(gl,t=>t.toUpperCase()).replace(/[-_]/g,"");function bl(e,t=!0){return D(e)?e.displayName||e.name:e.name||t&&e.__name}function qs(e,t,n=!1){let i=bl(t);if(!i&&t.__file){const s=t.__file.match(/([^/\\]+)\.\w+$/);s&&(i=s[1])}if(!i&&e){const s=o=>{for(const r in o)if(o[r]===t)return r};i=s(e.components)||e.parent&&s(e.parent.type.components)||s(e.appContext.components)}return i?ml(i):n?"App":"Anonymous"}function xl(e){return D(e)&&"__vccOpts"in e}const V=(e,t)=>er(e,t,qt),_l="3.5.27";/**
* @vue/runtime-dom v3.5.27
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let bi;const Xs=typeof window<"u"&&window.trustedTypes;if(Xs)try{bi=Xs.createPolicy("vue",{createHTML:e=>e})}catch{}const Js=bi?e=>bi.createHTML(e):e=>e,yl="http://www.w3.org/2000/svg",wl="http://www.w3.org/1998/Math/MathML",Ze=typeof document<"u"?document:null,Zs=Ze&&Ze.createElement("template"),zl={insert:(e,t,n)=>{t.insertBefore(e,n||null)},remove:e=>{const t=e.parentNode;t&&t.removeChild(e)},createElement:(e,t,n,i)=>{const s=t==="svg"?Ze.createElementNS(yl,e):t==="mathml"?Ze.createElementNS(wl,e):n?Ze.createElement(e,{is:n}):Ze.createElement(e);return e==="select"&&i&&i.multiple!=null&&s.setAttribute("multiple",i.multiple),s},createText:e=>Ze.createTextNode(e),createComment:e=>Ze.createComment(e),setText:(e,t)=>{e.nodeValue=t},setElementText:(e,t)=>{e.textContent=t},parentNode:e=>e.parentNode,nextSibling:e=>e.nextSibling,querySelector:e=>Ze.querySelector(e),setScopeId(e,t){e.setAttribute(t,"")},insertStaticContent(e,t,n,i,s,o){const r=n?n.previousSibling:t.lastChild;if(s&&(s===o||s.nextSibling))for(;t.insertBefore(s.cloneNode(!0),n),!(s===o||!(s=s.nextSibling)););else{Zs.innerHTML=Js(i==="svg"?`<svg>${e}</svg>`:i==="mathml"?`<math>${e}</math>`:e);const l=Zs.content;if(i==="svg"||i==="mathml"){const c=l.firstChild;for(;c.firstChild;)l.appendChild(c.firstChild);l.removeChild(c)}t.insertBefore(l,n)}return[r?r.nextSibling:t.firstChild,n?n.previousSibling:t.lastChild]}},kl=Symbol("_vtc");function Sl(e,t,n){const i=e[kl];i&&(t=(t?[t,...i]:[...i]).join(" ")),t==null?e.removeAttribute("class"):n?e.setAttribute("class",t):e.className=t}const Qs=Symbol("_vod"),Tl=Symbol("_vsh"),Al=Symbol(""),El=/(?:^|;)\s*display\s*:/;function Cl(e,t,n){const i=e.style,s=oe(n);let o=!1;if(n&&!s){if(t)if(oe(t))for(const r of t.split(";")){const l=r.slice(0,r.indexOf(":")).trim();n[l]==null&&En(i,l,"")}else for(const r in t)n[r]==null&&En(i,r,"");for(const r in n)r==="display"&&(o=!0),En(i,r,n[r])}else if(s){if(t!==n){const r=i[Al];r&&(n+=";"+r),i.cssText=n,o=El.test(n)}}else t&&e.removeAttribute("style");Qs in e&&(e[Qs]=o?i.display:"",e[Tl]&&(i.display="none"))}const eo=/\s*!important$/;function En(e,t,n){if(j(n))n.forEach(i=>En(e,t,i));else if(n==null&&(n=""),t.startsWith("--"))e.setProperty(t,n);else{const i=Ml(e,t);eo.test(n)?e.setProperty(ft(i),n.replace(eo,""),"important"):e[i]=n}}const to=["Webkit","Moz","ms"],xi={};function Ml(e,t){const n=xi[t];if(n)return n;let i=tt(t);if(i!=="filter"&&i in e)return xi[t]=i;i=Ai(i);for(let s=0;s<to.length;s++){const o=to[s]+i;if(o in e)return xi[t]=o}return t}const no="http://www.w3.org/1999/xlink";function io(e,t,n,i,s,o=To(t)){i&&t.startsWith("xlink:")?n==null?e.removeAttributeNS(no,t.slice(6,t.length)):e.setAttributeNS(no,t,n):n==null||o&&!Mi(n)?e.removeAttribute(t):e.setAttribute(t,o?"":et(n)?String(n):n)}function so(e,t,n,i,s){if(t==="innerHTML"||t==="textContent"){n!=null&&(e[t]=t==="innerHTML"?Js(n):n);return}const o=e.tagName;if(t==="value"&&o!=="PROGRESS"&&!o.includes("-")){const l=o==="OPTION"?e.getAttribute("value")||"":e.value,c=n==null?e.type==="checkbox"?"on":"":String(n);(l!==c||!("_value"in e))&&(e.value=c),n==null&&e.removeAttribute(t),e._value=n;return}let r=!1;if(n===""||n==null){const l=typeof e[t];l==="boolean"?n=Mi(n):n==null&&l==="string"?(n="",r=!0):l==="number"&&(n=0,r=!0)}try{e[t]=n}catch{}r&&e.removeAttribute(s||t)}function Rl(e,t,n,i){e.addEventListener(t,n,i)}function Il(e,t,n,i){e.removeEventListener(t,n,i)}const oo=Symbol("_vei");function Ol(e,t,n,i,s=null){const o=e[oo]||(e[oo]={}),r=o[t];if(i&&r)r.value=i;else{const[l,c]=Pl(t);if(i){const d=o[t]=Nl(i,s);Rl(e,l,d,c)}else r&&(Il(e,l,r,c),o[t]=void 0)}}const ro=/(?:Once|Passive|Capture)$/;function Pl(e){let t;if(ro.test(e)){t={};let i;for(;i=e.match(ro);)e=e.slice(0,e.length-i[0].length),t[i[0].toLowerCase()]=!0}return[e[2]===":"?e.slice(3):ft(e.slice(2)),t]}let _i=0;const Fl=Promise.resolve(),Ll=()=>_i||(Fl.then(()=>_i=0),_i=Date.now());function Nl(e,t){const n=i=>{if(!i._vts)i._vts=Date.now();else if(i._vts<=n.attached)return;De(Dl(i,n.value),t,5,[i])};return n.value=e,n.attached=Ll(),n}function Dl(e,t){if(j(t)){const n=e.stopImmediatePropagation;return e.stopImmediatePropagation=()=>{n.call(e),e._stopped=!0},t.map(i=>s=>!s._stopped&&i&&i(s))}else return t}const lo=e=>e.charCodeAt(0)===111&&e.charCodeAt(1)===110&&e.charCodeAt(2)>96&&e.charCodeAt(2)<123,$l=(e,t,n,i,s,o)=>{const r=s==="svg";t==="class"?Sl(e,i,r):t==="style"?Cl(e,n,i):Zt(t)?Fn(t)||Ol(e,t,n,i,o):(t[0]==="."?(t=t.slice(1),!0):t[0]==="^"?(t=t.slice(1),!1):jl(e,t,i,r))?(so(e,t,i),!e.tagName.includes("-")&&(t==="value"||t==="checked"||t==="selected")&&io(e,t,i,r,o,t!=="value")):e._isVueCE&&(/[A-Z]/.test(t)||!oe(i))?so(e,tt(t),i,o,t):(t==="true-value"?e._trueValue=i:t==="false-value"&&(e._falseValue=i),io(e,t,i,r))};function jl(e,t,n,i){if(i)return!!(t==="innerHTML"||t==="textContent"||t in e&&lo(t)&&D(n));if(t==="spellcheck"||t==="draggable"||t==="translate"||t==="autocorrect"||t==="sandbox"&&e.tagName==="IFRAME"||t==="form"||t==="list"&&e.tagName==="INPUT"||t==="type"&&e.tagName==="TEXTAREA")return!1;if(t==="width"||t==="height"){const s=e.tagName;if(s==="IMG"||s==="VIDEO"||s==="CANVAS"||s==="SOURCE")return!1}return lo(t)&&oe(n)?!1:t in e}const Bl=fe({patchProp:$l},zl);let ao;function Hl(){return ao||(ao=Qr(Bl))}const Gl=(...e)=>{const t=Hl().createApp(...e),{mount:n}=t;return t.mount=i=>{const s=Vl(i);if(!s)return;const o=t._component;!D(o)&&!o.render&&!o.template&&(o.template=s.innerHTML),s.nodeType===1&&(s.textContent="");const r=n(s,!1,Ul(s));return s instanceof Element&&(s.removeAttribute("v-cloak"),s.setAttribute("data-v-app","")),r},t};function Ul(e){if(e instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&e instanceof MathMLElement)return"mathml"}function Vl(e){return oe(e)?document.querySelector(e):e}const Wl=`// ===== 0: MANDELBULB =====
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
`,Kl=`// ===== 1: MANDELBOX =====
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
`,Yl=`// ===== 2: MENGER SPONGE =====
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
`,ql=`// ===== 3: SIERPINSKI =====
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
`,Xl=`// ===== 4: KALEIDOSCOPE =====
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
`,Jl=`// ===== 5: ORGANIC HYBRID =====
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
`,Zl=`// ===== 6: FRACTAL LAND =====
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
`,Ql=`// ===== 7: GALAXY NEBULA =====
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
`,ea=`// ===== 8: INFINITE TUNNEL =====
vec3 infiniteTunnel(vec2 uv, float time) {
  float angle = atan(uv.y, uv.x), radius = length(uv);
  float tunnel = 1.0 / radius + time * 0.5, twist = angle + tunnel * 0.5;
  vec2 tuv = vec2(twist / PI, tunnel);
  vec2 grid = fract(tuv * 8.0) - 0.5;
  float glow = 0.02 / (length(grid) + 0.02);
  return hsv2rgb(vec3(tunnel * 0.1 + angle * 0.1, 0.7, glow)) * smoothstep(0.0, 0.3, radius);
}
`,ta=`// ===== 9: PLASMA FRACTAL =====
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
`,na=`// ===== 10: CIRCUITS =====
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
`,ia=`// ===== 11: METABALLS =====
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
`,sa=`// ===== 12: VOLUMETRIC LINES =====
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
`,oa=`// ===== 13: DISCO TUNNEL =====
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
`,ra=`// ===== 14: SPEED DRIVE =====
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
`,la=`// ===== 15: HOT ROCKS =====
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
`,aa=`// ===== 16: SERVER ROOM =====
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
`,ca=`// ===== 17: REMNANT X =====
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
`,fa=`// ===== 18: KALI SET =====
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
`,ua=`// ===== 19: GENERATORS =====
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
`,da=`// ===== 20: SIMPLICITY GALAXY =====
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
`,pa=`// ===== 21: RIBBONS =====
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
`,va=`// ===== 22: TWISTED RINGS =====
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
`,ha=`// ===== 23: WAVES REMIX =====
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
`,ga=`// ===== 24: DANCING METALIGHTS =====
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
`,ma=`// ===== 25: IO BLOCKS =====
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
`,ba=`// ===== 26: BEATING CIRCLES =====
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
`,xa=`// ===== 27: CIRCLE WAVE =====
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
`,_a=`// ===== 28: SOUNDFLOWER =====
vec3 soundflower(vec2 uv, float time) {
  float r = length(uv);
  float a = atan(uv.x, uv.y);
  float w = fakeAudio(abs(a) / 6.28);
  float t = 3.0 * sqrt(abs(w - 0.5));
  float f = 0.0;
  if (r < t) f = 1.0 - r / t;
  return pow(vec3(f), vec3(1.5, 1.1, 0.8));
}
`,ya=`// ===== 29: POLAR BEATS =====
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
`,wa=`// ===== 30: UNDULANT SPECTRE =====
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
`,za=`// ===== 31: REVISION 2015 =====
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
`,ka=`// ===== 32: GAMEBOY STYLE =====
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
`,Sa=`// ===== 33: ELECTRIC STORM =====
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
`,Ta=`// ===== 34: VORTEX =====
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
`,Aa=`// ===== 35: NEON GRID =====
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
`,Ea=`// ===== 36: MATRIX RAIN =====
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
`,Ca=`// ===== 37: FIRE =====
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
`,Ma=`// ===== 38: AURORA =====
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
`,Ra=`// ===== 39: WORMHOLE =====
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
`,Ia=`// ===== 40: HEXAGONS =====
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
`,Oa=`// ===== 41: BUBBLES =====
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
`,Pa=`// ===== 42: LIGHTNING =====
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
`,Fa=`// ===== 43: KALEIDOSCOPE 2D =====
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
`,La=`// ===== 44: STARFIELD =====
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
`,Na=`// ===== 45: LIQUID METAL =====
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
`,Da=`// ===== 46: FRACTAL TREE =====
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
`,$a=`// ===== 47: VORONOI =====
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
`,ja=`// ===== 48: PSYCHEDELIC =====
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
`,Ba=`// ===== 49: ENERGY FIELD =====
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
`,Ha=`precision highp float;
attribute vec2 aPosition;
varying vec2 vUV;

void main() {
  vUV = aPosition;
  gl_Position = vec4(aPosition, 0.0, 1.0);
}
`,Ga=`// ===== PRECISION AND UNIFORMS =====

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
`,Ua=`// ===== MAIN SHADER PROGRAM =====
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
`,Va=mn({__name:"BioFractalViewer",props:{mode:{default:0}},setup(e){const t=e,n=le(null);let i=null,s=null,o=null,r=Date.now();const l=Object.assign({"../../shaders/effects/mode-00-mandelbulb.glsl":Wl,"../../shaders/effects/mode-01-mandelbox.glsl":Kl,"../../shaders/effects/mode-02-menger-sponge.glsl":Yl,"../../shaders/effects/mode-03-sierpinski.glsl":ql,"../../shaders/effects/mode-04-kaleidoscope.glsl":Xl,"../../shaders/effects/mode-05-organic-hybrid.glsl":Jl,"../../shaders/effects/mode-06-fractal-land.glsl":Zl,"../../shaders/effects/mode-07-galaxy-nebula.glsl":Ql,"../../shaders/effects/mode-08-infinite-tunnel.glsl":ea,"../../shaders/effects/mode-09-plasma-fractal.glsl":ta,"../../shaders/effects/mode-10-circuits.glsl":na,"../../shaders/effects/mode-11-metaballs.glsl":ia,"../../shaders/effects/mode-12-volumetric-lines.glsl":sa,"../../shaders/effects/mode-13-disco-tunnel.glsl":oa,"../../shaders/effects/mode-14-speed-drive.glsl":ra,"../../shaders/effects/mode-15-hot-rocks.glsl":la,"../../shaders/effects/mode-16-server-room.glsl":aa,"../../shaders/effects/mode-17-remnant-x.glsl":ca,"../../shaders/effects/mode-18-kali-set.glsl":fa,"../../shaders/effects/mode-19-generators.glsl":ua,"../../shaders/effects/mode-20-simplicity-galaxy.glsl":da,"../../shaders/effects/mode-21-ribbons.glsl":pa,"../../shaders/effects/mode-22-twisted-rings.glsl":va,"../../shaders/effects/mode-23-waves-remix.glsl":ha,"../../shaders/effects/mode-24-dancing-metalights.glsl":ga,"../../shaders/effects/mode-25-io-blocks.glsl":ma,"../../shaders/effects/mode-26-beating-circles.glsl":ba,"../../shaders/effects/mode-27-circle-wave.glsl":xa,"../../shaders/effects/mode-28-soundflower.glsl":_a,"../../shaders/effects/mode-29-polar-beats.glsl":ya,"../../shaders/effects/mode-30-undulant-spectre.glsl":wa,"../../shaders/effects/mode-31-revision-2015.glsl":za,"../../shaders/effects/mode-32-gameboy-style.glsl":ka,"../../shaders/effects/mode-33-electric-storm.glsl":Sa,"../../shaders/effects/mode-34-vortex.glsl":Ta,"../../shaders/effects/mode-35-neon-grid.glsl":Aa,"../../shaders/effects/mode-36-matrix-rain.glsl":Ea,"../../shaders/effects/mode-37-fire.glsl":Ca,"../../shaders/effects/mode-38-aurora.glsl":Ma,"../../shaders/effects/mode-39-wormhole.glsl":Ra,"../../shaders/effects/mode-40-hexagons.glsl":Ia,"../../shaders/effects/mode-41-bubbles.glsl":Oa,"../../shaders/effects/mode-42-lightning.glsl":Pa,"../../shaders/effects/mode-43-kaleidoscope-2d.glsl":Fa,"../../shaders/effects/mode-44-starfield.glsl":La,"../../shaders/effects/mode-45-liquid-metal.glsl":Na,"../../shaders/effects/mode-46-fractal-tree.glsl":Da,"../../shaders/effects/mode-47-voronoi.glsl":$a,"../../shaders/effects/mode-48-psychedelic.glsl":ja,"../../shaders/effects/mode-49-energy-field.glsl":Ba}),c=Object.keys(l).sort().map(y=>l[y]).join(`

`),d=Ha,f=`${Ga}
${c}
${Ua}`,p=(y,L)=>{if(!i)return null;const M=i.createShader(y);return M?(i.shaderSource(M,L),i.compileShader(M),i.getShaderParameter(M,i.COMPILE_STATUS)?M:(console.error("Shader error:",i.getShaderInfoLog(M)),null)):null},_=()=>{const y=n.value;if(!y||(i=y.getContext("webgl")||y.getContext("experimental-webgl"),!i))return!1;const L=p(i.VERTEX_SHADER,d),M=p(i.FRAGMENT_SHADER,f);if(!L||!M||(s=i.createProgram(),!s))return!1;if(i.attachShader(s,L),i.attachShader(s,M),i.linkProgram(s),!i.getProgramParameter(s,i.LINK_STATUS))return console.error("Link error:",i.getProgramInfoLog(s)),!1;const B=new Float32Array([-1,-1,1,-1,-1,1,-1,1,1,-1,1,1]),C=i.createBuffer();i.bindBuffer(i.ARRAY_BUFFER,C),i.bufferData(i.ARRAY_BUFFER,B,i.STATIC_DRAW);const z=i.getAttribLocation(s,"aPosition");return i.enableVertexAttribArray(z),i.vertexAttribPointer(z,2,i.FLOAT,!1,0,0),!0},S=()=>{const y=n.value;y&&(y.width=y.clientWidth,y.height=y.clientHeight,i&&i.viewport(0,0,y.width,y.height))},k=()=>{!i||!s||!n.value||(i.useProgram(s),i.uniform1f(i.getUniformLocation(s,"uTime"),(Date.now()-r)/1e3),i.uniform2f(i.getUniformLocation(s,"uResolution"),n.value.width,n.value.height),i.uniform1i(i.getUniformLocation(s,"uMode"),t.mode),i.drawArrays(i.TRIANGLES,0,6),o=requestAnimationFrame(k))};return Ht(()=>{_()&&(S(),window.addEventListener("resize",S),k())}),kt(()=>{o&&cancelAnimationFrame(o),window.removeEventListener("resize",S)}),(y,L)=>(pe(),ze("canvas",{ref_key:"canvasRef",ref:n,class:"bio-fractal-canvas"},null,512))}}),co=(e,t)=>{const n=e.__vccOpts||e;for(const[i,s]of t)n[i]=s;return n},Wa=co(Va,[["__scopeId","data-v-c9463404"]]),Ka={class:"pv-container"},Ya={class:"pv-svg-container"},qa={viewBox:"0 0 840 640",preserveAspectRatio:"xMidYMid meet"},Xa=["x1","y1","x2","y2"],Ja=["x1","y1","x2","y2"],Za=["x1","y1","x2","y2"],Qa=["x1","y1","x2","y2"],ec=["d"],tc=["cx","cy"],nc=["transform"],ic=["x1","y1","x2","y2"],sc=["x1","y1","x2","y2"],oc=["x1","y1","x2","y2"],rc=["x1","y1","x2","y2"],lc=["d"],ac=["cx","cy"],cc=["transform"],fc=["x1","y1","x2","y2"],uc=["x1","y1","x2","y2"],dc=["x1","y1","x2","y2"],pc=["x1","y1","x2","y2"],vc=["x1","y1","x2","y2"],hc=["x1","y1","x2","y2"],gc=["points"],mc=["d"],bc=["cx","cy"],xc=["transform"],_c=["d"],yc=["x1","y1","x2","y2"],wc=["x1","y1","x2","y2"],zc=["x1","y1","x2","y2"],kc=["points"],Sc=["x1","y1","x2","y2"],Tc=["points"],Ac=["x1","y1","x2","y2"],Ec=["points"],Cc=["transform"],Mc=["cx","cy"],Rc=["cx","cy"],Ic=["cx","cy"],Oc=["x","y"],Pc=["x","y"],Fc=["x","y"],Lc=["x","y"],Nc={class:"pv-values"},Dc={class:"pv-values-main"},$c={class:"pv-values-text"},jc={class:"pv-values-real"},Bc={class:"pv-values-imag"},Hc={class:"pv-values-time"},Gc={class:"pv-values-time-text"},Uc={class:"pv-values-time-value"},Cn=1.3,Vc=1,At=-2.8,Et=-2.8,Ge=-1.2,ct=1.3,Mn=1.3,Rn=1.3,Wc=co(mn({__name:"ComplexWaveVisualization",setup(e){const t=le(1.25),n=le(!0);let i=null;const s=2*Math.PI*1.6,o=ee=>Math.exp(-1*Math.pow(ee-Cn,2)),r=(ee,R,ce)=>{const On=-ee*81*.7,gt=ee*81*.35,po=R*61*.9,a=R*61*.25,u=-ce*61;return{x:436+On+po,y:355+gt+a+u}},l=V(()=>o(t.value)*Math.cos(s*t.value)),c=V(()=>o(t.value)*Math.sin(s*t.value)),d=V(()=>{const ee=[];for(let R=0;R<=2.5;R+=.015){const ce=o(R);ee.push({t:R,re:ce*Math.cos(s*R),im:ce*Math.sin(s*R)})}return ee}),f=V(()=>d.value.map((ee,R)=>{const ce=r(ee.t,ee.re,ee.im);return`${R===0?"M":"L"} ${ce.x} ${ce.y}`}).join(" ")),p=V(()=>d.value.map((ee,R)=>{const ce=r(Ge,ee.re,ee.im);return`${R===0?"M":"L"} ${ce.x} ${ce.y}`}).join(" ")),_=V(()=>d.value.map((ee,R)=>{const ce=r(ee.t,At,ee.im);return`${R===0?"M":"L"} ${ce.x} ${ce.y}`}).join(" ")),S=V(()=>d.value.map((ee,R)=>{const ce=r(ee.t,ee.re,Et);return`${R===0?"M":"L"} ${ce.x} ${ce.y}`}).join(" ")),k=V(()=>({tl:r(Ge,-ct,ct),tr:r(Ge,ct,ct),bl:r(Ge,-ct,-ct),br:r(Ge,ct,-ct)})),y=V(()=>r(Ge,0,1.4)),L=V(()=>r(Ge,0,-.3)),M=V(()=>r(Ge,-.3,0)),B=V(()=>r(Ge,1,0)),C=V(()=>({tl:r(0,At,Mn),tr:r(2.5,At,Mn),bl:r(0,At,-Mn),br:r(2.5,At,-Mn)})),z=V(()=>({bl:r(0,-Rn,Et),br:r(0,Rn,Et),tl:r(2.5,-Rn,Et),tr:r(2.5,Rn,Et)})),H=V(()=>r(Cn,0,0)),$=V(()=>r(Cn,0,1.6)),F=V(()=>r(Cn,1.5,0)),J=V(()=>r(0,0,0)),K=V(()=>r(2.7,0,0)),Q=V(()=>r(t.value,l.value,c.value)),O=V(()=>r(Ge,l.value,c.value)),Y=V(()=>r(t.value,At,c.value)),ae=V(()=>r(t.value,l.value,Et)),ke=V(()=>Math.atan2(C.value.tl.y-C.value.tr.y,C.value.tl.x-C.value.tr.x)*(180/Math.PI)),Qe=V(()=>({x:(C.value.tl.x+C.value.tr.x)/2,y:(C.value.tl.y+C.value.tr.y)/2})),re=V(()=>Math.atan2(z.value.bl.y-z.value.tl.y,z.value.bl.x-z.value.tl.x)*(180/Math.PI)),Z=V(()=>({x:(z.value.br.x+z.value.tr.x)/2,y:(z.value.br.y+z.value.tr.y)/2})),G=V(()=>Math.atan2(k.value.tl.y-k.value.tr.y,k.value.tl.x-k.value.tr.x)*(180/Math.PI)),Ce=V(()=>({x:(k.value.tl.x+k.value.tr.x)/2,y:(k.value.tl.y+k.value.tr.y)/2})),Ue=V(()=>({x:(J.value.x+K.value.x)/2,y:(J.value.y+K.value.y)/2}));let Me=0;const be=()=>{Me++,n.value&&Me%2===0&&(t.value+=.02,t.value>2.5&&(t.value=0)),i=requestAnimationFrame(be)};return Ht(()=>{i=requestAnimationFrame(be)}),kt(()=>{i&&cancelAnimationFrame(i)}),(ee,R)=>(pe(),ze("div",Ka,[R[15]||(R[15]=h("div",{class:"pv-title"},[h("h1",{class:"pv-title-gradient-1"}," The Observer Effect explains why the same "),h("h2",{class:"pv-title-gradient-2"}," life feels different to different people ")],-1)),h("div",Ya,[(pe(),ze("svg",qa,[R[4]||(R[4]=Tn('<defs data-v-65cb23ba><linearGradient id="pv-helixGradient" x1="0%" y1="0%" x2="100%" y2="0%" data-v-65cb23ba><stop offset="0%" stop-color="#a855f7" data-v-65cb23ba><animate attributeName="stop-color" values="#a855f7;#ec4899;#06b6d4;#a855f7" dur="4s" repeatCount="indefinite" data-v-65cb23ba></animate></stop><stop offset="50%" stop-color="#ec4899" data-v-65cb23ba><animate attributeName="stop-color" values="#ec4899;#06b6d4;#a855f7;#ec4899" dur="4s" repeatCount="indefinite" data-v-65cb23ba></animate></stop><stop offset="100%" stop-color="#06b6d4" data-v-65cb23ba><animate attributeName="stop-color" values="#06b6d4;#a855f7;#ec4899;#06b6d4" dur="4s" repeatCount="indefinite" data-v-65cb23ba></animate></stop></linearGradient><linearGradient id="pv-imGradient" x1="0%" y1="0%" x2="100%" y2="0%" data-v-65cb23ba><stop offset="0%" stop-color="#06b6d4" data-v-65cb23ba></stop><stop offset="100%" stop-color="#22d3d3" data-v-65cb23ba></stop></linearGradient><linearGradient id="pv-reGradient" x1="0%" y1="0%" x2="100%" y2="0%" data-v-65cb23ba><stop offset="0%" stop-color="#f97316" data-v-65cb23ba></stop><stop offset="100%" stop-color="#fb923c" data-v-65cb23ba></stop></linearGradient><linearGradient id="pv-spiralGradient" x1="0%" y1="0%" x2="100%" y2="100%" data-v-65cb23ba><stop offset="0%" stop-color="#a855f7" data-v-65cb23ba></stop><stop offset="100%" stop-color="#6366f1" data-v-65cb23ba></stop></linearGradient><linearGradient id="pv-axisGradient" x1="0%" y1="0%" x2="100%" y2="0%" data-v-65cb23ba><stop offset="0%" stop-color="#64748b" data-v-65cb23ba></stop><stop offset="100%" stop-color="#94a3b8" data-v-65cb23ba></stop></linearGradient><filter id="pv-glow-cyan" x="-50%" y="-50%" width="200%" height="200%" data-v-65cb23ba><feGaussianBlur stdDeviation="3" result="coloredBlur" data-v-65cb23ba></feGaussianBlur><feMerge data-v-65cb23ba><feMergeNode in="coloredBlur" data-v-65cb23ba></feMergeNode><feMergeNode in="SourceGraphic" data-v-65cb23ba></feMergeNode></feMerge></filter><filter id="pv-glow-orange" x="-50%" y="-50%" width="200%" height="200%" data-v-65cb23ba><feGaussianBlur stdDeviation="3" result="coloredBlur" data-v-65cb23ba></feGaussianBlur><feMerge data-v-65cb23ba><feMergeNode in="coloredBlur" data-v-65cb23ba></feMergeNode><feMergeNode in="SourceGraphic" data-v-65cb23ba></feMergeNode></feMerge></filter><filter id="pv-glow-purple" x="-50%" y="-50%" width="200%" height="200%" data-v-65cb23ba><feGaussianBlur stdDeviation="4" result="coloredBlur" data-v-65cb23ba></feGaussianBlur><feMerge data-v-65cb23ba><feMergeNode in="coloredBlur" data-v-65cb23ba></feMergeNode><feMergeNode in="SourceGraphic" data-v-65cb23ba></feMergeNode></feMerge></filter><filter id="pv-glow-strong" x="-100%" y="-100%" width="300%" height="300%" data-v-65cb23ba><feGaussianBlur stdDeviation="6" result="coloredBlur" data-v-65cb23ba></feGaussianBlur><feMerge data-v-65cb23ba><feMergeNode in="coloredBlur" data-v-65cb23ba></feMergeNode><feMergeNode in="coloredBlur" data-v-65cb23ba></feMergeNode><feMergeNode in="SourceGraphic" data-v-65cb23ba></feMergeNode></feMerge></filter></defs>',1)),h("line",{x1:C.value.bl.x,y1:C.value.bl.y,x2:C.value.tl.x,y2:C.value.tl.y,stroke:"#0e7490","stroke-width":"1",class:"pv-shimmer"},null,8,Xa),h("line",{x1:C.value.tl.x,y1:C.value.tl.y,x2:C.value.tr.x,y2:C.value.tr.y,stroke:"#0e7490","stroke-width":"1",class:"pv-shimmer"},null,8,Ja),h("line",{x1:C.value.bl.x,y1:C.value.bl.y,x2:C.value.br.x,y2:C.value.br.y,stroke:"#0e7490","stroke-width":"1",class:"pv-shimmer"},null,8,Za),h("line",{x1:C.value.tr.x,y1:C.value.tr.y,x2:C.value.br.x,y2:C.value.br.y,stroke:"#0e7490","stroke-width":"1",class:"pv-shimmer"},null,8,Qa),h("path",{d:_.value,fill:"none",stroke:"url(#pv-imGradient)","stroke-width":"2"},null,8,ec),h("circle",{cx:Y.value.x,cy:Y.value.y,r:"4",fill:"#06b6d4",class:"pv-point-pulse"},null,8,tc),h("g",{transform:`translate(${Qe.value.x}, ${Qe.value.y-25}) rotate(${ke.value})`},[...R[0]||(R[0]=[Tn('<text fill="#22d3d3" font-size="13" font-family="Times New Roman, serif" text-anchor="middle" style="letter-spacing:-0.5px;" data-v-65cb23ba><tspan font-weight="bold" data-v-65cb23ba>Im</tspan><tspan font-style="italic" data-v-65cb23ba> f</tspan><tspan data-v-65cb23ba>=e</tspan><tspan baseline-shift="super" font-size="9" data-v-65cb23ba>−γ(t−t₀)²</tspan><tspan font-style="italic" data-v-65cb23ba>sin(ωt)</tspan></text>',1)])],8,nc),h("line",{x1:z.value.bl.x,y1:z.value.bl.y,x2:z.value.br.x,y2:z.value.br.y,stroke:"#c2410c","stroke-width":"1",class:"pv-shimmer"},null,8,ic),h("line",{x1:z.value.bl.x,y1:z.value.bl.y,x2:z.value.tl.x,y2:z.value.tl.y,stroke:"#c2410c","stroke-width":"1",class:"pv-shimmer"},null,8,sc),h("line",{x1:z.value.br.x,y1:z.value.br.y,x2:z.value.tr.x,y2:z.value.tr.y,stroke:"#c2410c","stroke-width":"1",class:"pv-shimmer"},null,8,oc),h("line",{x1:z.value.tl.x,y1:z.value.tl.y,x2:z.value.tr.x,y2:z.value.tr.y,stroke:"#c2410c","stroke-width":"1",class:"pv-shimmer"},null,8,rc),h("path",{d:S.value,fill:"none",stroke:"url(#pv-reGradient)","stroke-width":"2"},null,8,lc),h("circle",{cx:ae.value.x,cy:ae.value.y,r:"4",fill:"#f97316",class:"pv-point-pulse"},null,8,ac),h("g",{transform:`translate(${Z.value.x}, ${Z.value.y+25}) rotate(${re.value})`},[...R[1]||(R[1]=[Tn('<text fill="#fb923c" font-size="13" font-family="Times New Roman, serif" text-anchor="middle" style="letter-spacing:-0.5px;" data-v-65cb23ba><tspan font-weight="bold" data-v-65cb23ba>Re</tspan><tspan font-style="italic" data-v-65cb23ba> f</tspan><tspan data-v-65cb23ba>=e</tspan><tspan baseline-shift="super" font-size="9" data-v-65cb23ba>−γ(t−t₀)²</tspan><tspan font-style="italic" data-v-65cb23ba>cos(ωt)</tspan></text>',1)])],8,cc),h("line",{x1:k.value.bl.x,y1:k.value.bl.y,x2:k.value.tl.x,y2:k.value.tl.y,stroke:"#7c3aed","stroke-width":"1",class:"pv-shimmer"},null,8,fc),h("line",{x1:k.value.tl.x,y1:k.value.tl.y,x2:k.value.tr.x,y2:k.value.tr.y,stroke:"#7c3aed","stroke-width":"1",class:"pv-shimmer"},null,8,uc),h("line",{x1:k.value.bl.x,y1:k.value.bl.y,x2:k.value.br.x,y2:k.value.br.y,stroke:"#7c3aed","stroke-width":"1",class:"pv-shimmer"},null,8,dc),h("line",{x1:k.value.br.x,y1:k.value.br.y,x2:k.value.tr.x,y2:k.value.tr.y,stroke:"#7c3aed","stroke-width":"1",class:"pv-shimmer"},null,8,pc),h("line",{x1:L.value.x,y1:L.value.y,x2:y.value.x,y2:y.value.y,stroke:"#8b5cf6","stroke-width":"1"},null,8,vc),h("line",{x1:M.value.x,y1:M.value.y,x2:B.value.x,y2:B.value.y,stroke:"#8b5cf6","stroke-width":"1"},null,8,hc),h("polygon",{points:`${y.value.x},${y.value.y-6} ${y.value.x-3},${y.value.y+2} ${y.value.x+3},${y.value.y+2}`,fill:"#a855f7"},null,8,gc),h("path",{d:p.value,fill:"none",stroke:"url(#pv-spiralGradient)","stroke-width":"2"},null,8,mc),h("circle",{cx:O.value.x,cy:O.value.y,r:"4",fill:"#a855f7",class:"pv-point-pulse"},null,8,bc),h("g",{transform:`translate(${Ce.value.x}, ${Ce.value.y-20}) rotate(${G.value})`},[...R[2]||(R[2]=[Tn('<text fill="#c084fc" font-size="10" font-family="Times New Roman, serif" text-anchor="middle" style="letter-spacing:-0.5px;" data-v-65cb23ba><tspan font-style="italic" data-v-65cb23ba>f</tspan><tspan data-v-65cb23ba>=e</tspan><tspan baseline-shift="super" font-size="7" data-v-65cb23ba>−γ(t−t₀)²</tspan><tspan font-style="italic" data-v-65cb23ba>e</tspan><tspan baseline-shift="super" font-size="7" data-v-65cb23ba>iωt</tspan></text>',1)])],8,xc),h("path",{d:f.value,fill:"none",stroke:"url(#pv-helixGradient)","stroke-width":"4"},null,8,_c),h("line",{x1:Q.value.x,y1:Q.value.y,x2:Y.value.x,y2:Y.value.y,stroke:"#06b6d4","stroke-width":"1","stroke-dasharray":"6,4",class:"pv-dash-flow",opacity:"0.7"},null,8,yc),h("line",{x1:Q.value.x,y1:Q.value.y,x2:ae.value.x,y2:ae.value.y,stroke:"#f97316","stroke-width":"1","stroke-dasharray":"6,4",class:"pv-dash-flow",opacity:"0.7"},null,8,wc),h("line",{x1:J.value.x,y1:J.value.y,x2:K.value.x,y2:K.value.y,stroke:"url(#pv-axisGradient)","stroke-width":"2"},null,8,zc),h("polygon",{points:`${K.value.x-6},${K.value.y+6} ${K.value.x+6},${K.value.y-2} ${K.value.x+2},${K.value.y+10}`,fill:"#94a3b8"},null,8,kc),h("line",{x1:H.value.x,y1:H.value.y+8,x2:$.value.x,y2:$.value.y,stroke:"url(#pv-axisGradient)","stroke-width":"2"},null,8,Sc),h("polygon",{points:`${$.value.x},${$.value.y-8} ${$.value.x-4},${$.value.y+2} ${$.value.x+4},${$.value.y+2}`,fill:"#94a3b8"},null,8,Tc),h("line",{x1:H.value.x-8,y1:H.value.y-5,x2:F.value.x,y2:F.value.y,stroke:"url(#pv-axisGradient)","stroke-width":"2"},null,8,Ac),h("polygon",{points:`${F.value.x+8},${F.value.y+4} ${F.value.x-2},${F.value.y-4} ${F.value.x-4},${F.value.y+6}`,fill:"#94a3b8"},null,8,Ec),h("g",{transform:`translate(${Ue.value.x+30}, ${Ue.value.y-70}) rotate(${ke.value})`},[...R[3]||(R[3]=[h("text",{fill:"#e879f9","font-size":"10","font-family":"Times New Roman, serif","text-anchor":"middle",style:{"letter-spacing":"-0.5px"}},[h("tspan",{"font-style":"italic"},"f(t)"),h("tspan",null,"=Re+"),h("tspan",{"font-style":"italic"},"i"),h("tspan",null,"·Im")],-1)])],8,Cc),h("circle",{cx:Q.value.x,cy:Q.value.y,r:"10",fill:"url(#pv-helixGradient)",opacity:"0.3",class:"pv-point-pulse"},null,8,Mc),h("circle",{cx:Q.value.x,cy:Q.value.y,r:"6",fill:"#fff"},null,8,Rc),h("circle",{cx:Q.value.x,cy:Q.value.y,r:"3",fill:"url(#pv-helixGradient)"},null,8,Ic),h("text",{x:$.value.x-30,y:$.value.y+8,fill:"#22d3d3","font-size":"18","font-weight":"bold","font-family":"serif"},"Im",8,Oc),h("text",{x:F.value.x+10,y:F.value.y+6,fill:"#fb923c","font-size":"18","font-weight":"bold","font-family":"serif"},"Re",8,Pc),h("text",{x:K.value.x-3,y:K.value.y+22,fill:"#c084fc","font-size":"18","font-style":"italic","font-family":"serif"},"t",8,Fc),h("text",{x:H.value.x+5,y:H.value.y+20,fill:"#94a3b8","font-size":"13","font-style":"italic","font-family":"serif"},"t₀",8,Lc)]))]),h("div",Nc,[h("div",Dc,[h("span",$c,[R[5]||(R[5]=h("span",{class:"pv-values-f"},"f",-1)),R[6]||(R[6]=h("span",{class:"pv-values-punctuation"},"(",-1)),R[7]||(R[7]=h("span",{class:"pv-values-t"},"t",-1)),R[8]||(R[8]=h("span",{class:"pv-values-punctuation"},") = ",-1)),h("span",jc,Fe(l.value>=0?"+":"")+Fe(l.value.toFixed(2)),1),R[9]||(R[9]=h("span",{class:"pv-values-punctuation"}," + ",-1)),h("span",Bc,Fe(c.value.toFixed(2)),1),R[10]||(R[10]=h("span",{class:"pv-values-i"}," i",-1))])]),h("div",Hc,[h("span",Gc,[R[11]||(R[11]=h("span",{class:"pv-values-time-t"},"t",-1)),R[12]||(R[12]=h("span",{class:"pv-values-time-punctuation"}," = ",-1)),h("span",Uc,Fe((t.value/Vc).toFixed(2)),1),R[13]||(R[13]=h("span",{class:"pv-values-time-punctuation"},null,-1)),R[14]||(R[14]=h("span",{class:"pv-values-time-period"},"T",-1))])])])]))}}),[["__scopeId","data-v-65cb23ba"]]),Kc={class:"c-cube-scene"},Yc={class:"c-cube__face c-cube__face--front"},qc={key:0,src:"index.html",class:"c-cube__iframe",title:"Current View"},Xc={class:"c-cube__face c-cube__face--right"},Jc=["src"],Zc={class:"c-cube__face c-cube__face--back"},Qc=["src"],ef={key:0,class:"c-cube-view-mode"},tf={key:1,class:"c-cube-hint"},nf={key:2,class:"c-cube-indicator"},sf=["onClick"],fo=-30,uo=-45,of=mn({__name:"CubeView",props:{active:{type:Boolean,default:!1}},emits:["close"],setup(e,{emit:t}){const n=e,i=t,s=le(n.active),o=le(fo),r=le(uo),l=le(1600),c=le(!1),d=le({x:0,y:0}),f=le(0),p=le(!0),_=le(!1),S=["Front","Right","Back","Left","Top","Bottom"],k={right:"cube_fractal_neon.html",back:"perspectives.html"},y=[{x:0,y:0},{x:0,y:-90},{x:0,y:180},{x:0,y:90},{x:90,y:0},{x:-90,y:0}],L=[{x:-30,y:-45},{x:-30,y:-135},{x:-30,y:135},{x:-30,y:45},{x:-60,y:-45},{x:60,y:-45}];vn(()=>n.active,O=>{s.value=O,O?(document.body.style.overflow="hidden",o.value=fo,r.value=uo,p.value=!0,f.value=0):document.body.style.overflow=""});const M=V(()=>({transform:`
    perspective(${l.value}px)
    translateZ(-300px)
    rotateX(${o.value}deg)
    rotateY(${r.value}deg)
  `})),B=(O,Y,ae=400)=>new Promise(ke=>{_.value=!0;const Qe=o.value,re=r.value,Z=performance.now();let G=Y-re;G>180&&(G-=360),G<-180&&(G+=360);const Ce=re+G,Ue=Me=>{const be=Me-Z,ee=Math.min(be/ae,1),R=1-Math.pow(1-ee,3);o.value=Qe+(O-Qe)*R,r.value=re+(Ce-re)*R,ee<1?requestAnimationFrame(Ue):(o.value=O,r.value=Y,_.value=!1,ke())};requestAnimationFrame(Ue)}),C=async O=>{_.value||(f.value=O,p.value?(await B(y[O].x,y[O].y),p.value=!1):(await B(L[O].x,L[O].y),p.value=!0))},z=async()=>{_.value||(p.value?(await B(y[f.value].x,y[f.value].y),p.value=!1):(await B(L[f.value].x,L[f.value].y),p.value=!0))},H=O=>{if(_.value)return;c.value=!0;const Y="touches"in O?O.touches[0]:O;d.value={x:Y.clientX,y:Y.clientY}},$=O=>{if(!c.value||!s.value||_.value)return;const Y="touches"in O?O.touches[0]:O,ae=Y.clientX-d.value.x,ke=Y.clientY-d.value.y;r.value+=ae*.5,o.value-=ke*.5,o.value=Math.max(-90,Math.min(90,o.value)),d.value={x:Y.clientX,y:Y.clientY},K()},F=()=>{c.value=!1},J=O=>{s.value&&(O.preventDefault(),l.value=Math.max(600,Math.min(2e3,l.value+O.deltaY)))},K=()=>{let O=(r.value%360+360)%360;Math.abs(o.value)>60?f.value=o.value>0?4:5:O>=315||O<45?f.value=0:O>=45&&O<135?f.value=3:O>=135&&O<225?f.value=2:f.value=1;const Y=Math.abs(o.value)>15&&Math.abs(o.value)<75,ae=O%90>15&&O%90<75;p.value=Y||ae},Q=O=>{if(s.value){if(O.key==="`"||O.key==="Escape"){O.preventDefault(),i("close");return}if(O.key===" "){O.preventDefault(),z();return}if(!_.value)switch(O.key){case"ArrowRight":f.value<4&&C((f.value+1)%4);break;case"ArrowLeft":f.value<4&&C((f.value+3)%4);break;case"ArrowUp":C(4);break;case"ArrowDown":C(5);break}}};return Ht(()=>{window.addEventListener("mousemove",$),window.addEventListener("mouseup",F),window.addEventListener("touchmove",$),window.addEventListener("touchend",F),window.addEventListener("keydown",Q)}),kt(()=>{window.removeEventListener("mousemove",$),window.removeEventListener("mouseup",F),window.removeEventListener("touchmove",$),window.removeEventListener("touchend",F),window.removeEventListener("keydown",Q),document.body.style.overflow=""}),(O,Y)=>(pe(),vi(br,{to:"body"},[h("div",{class:Re(["c-cube-overlay",{"c-cube-overlay--active":s.value}]),onWheel:J},[h("div",Kc,[h("div",{class:Re(["c-cube",{"c-cube--animating":_.value}]),style:Rt(M.value),onMousedown:H,onTouchstartPassive:H},[h("div",Yc,[s.value?(pe(),ze("iframe",qc)):lt("",!0)]),h("div",Xc,[s.value?(pe(),ze("iframe",{key:0,src:k.right,class:"c-cube__iframe",title:"Neon Cube"},null,8,Jc)):lt("",!0)]),h("div",Zc,[s.value?(pe(),ze("iframe",{key:0,src:k.back,class:"c-cube__iframe",title:"Perspectives"},null,8,Qc)):lt("",!0)]),Y[0]||(Y[0]=h("div",{class:"c-cube__face c-cube__face--left"},[h("div",{class:"c-cube__placeholder c-cube__placeholder--gradient-1"},[h("h2",null,"Coming Soon"),h("p",null,"Future content")])],-1)),Y[1]||(Y[1]=h("div",{class:"c-cube__face c-cube__face--top"},[h("div",{class:"c-cube__placeholder c-cube__placeholder--gradient-2"},[h("h2",null,"Projects"),h("p",null,"View from above")])],-1)),Y[2]||(Y[2]=h("div",{class:"c-cube__face c-cube__face--bottom"},[h("div",{class:"c-cube__placeholder c-cube__placeholder--gradient-3"},[h("h2",null,"Contact"),h("p",null,"Get in touch")])],-1))],38)]),s.value?(pe(),ze("div",ef,Fe(p.value?"Isometric View":`${S[f.value]} Face`),1)):lt("",!0),s.value?(pe(),ze("div",tf,[...Y[3]||(Y[3]=[h("span",null,"Drag to rotate",-1),h("span",{class:"c-cube-hint__separator"},"|",-1),h("span",null,"Scroll to zoom",-1),h("span",{class:"c-cube-hint__separator"},"|",-1),h("span",null,[h("kbd",null,"Space"),Sn(" toggle view")],-1),h("span",{class:"c-cube-hint__separator"},"|",-1),h("span",null,[h("kbd",null,"`"),Sn(" or "),h("kbd",null,"Esc"),Sn(" close")],-1)])])):lt("",!0),s.value?(pe(),ze("div",nf,[(pe(),ze(Ae,null,ms(S,(ae,ke)=>h("div",{key:ae,class:Re(["c-cube-indicator__dot",{"c-cube-indicator__dot--active":f.value===ke}]),onClick:Qe=>C(ke)},Fe(ae),11,sf)),64))])):lt("",!0)],34)]))}}),rf={class:"app-container"},lf={class:"c-controls"},af={class:"c-controls-row"},cf=["value"],ff=["value"],uf={key:0,class:"c-slider-container"},df=["value"],pf={class:"c-slider-label"},vf={class:"c-foreground-layer"};Gl(mn({__name:"App",setup(e){const t=le(!0),n=le(!1),i=$=>{$.key==="`"&&!$.ctrlKey&&!$.metaKey&&!$.altKey&&($.preventDefault(),n.value=!n.value)},s=()=>{n.value=!1};Ht(()=>{window.addEventListener("keydown",i)}),kt(()=>{window.removeEventListener("keydown",i)});const o=le(23),r=le(0),l=le(50),c=le(!1),d=le(!1);let f=null;const p=le(!1);(()=>{p.value="ontouchstart"in window||navigator.maxTouchPoints>0})();const S=()=>{p.value||(f&&(clearTimeout(f),f=null),d.value=!0)},k=()=>{p.value||(f=window.setTimeout(()=>{d.value=!1,f=null},1e3))},y=()=>{f&&(clearTimeout(f),f=null),d.value=!d.value},L=[{value:0,label:"Mandelbulb"},{value:1,label:"Mandelbox"},{value:2,label:"Menger Sponge"},{value:3,label:"Sierpinski"},{value:4,label:"Kaleidoscope 3D"},{value:5,label:"Organic Hybrid"},{value:6,label:"Fractal Land"},{value:7,label:"+ Galaxy Nebula"},{value:8,label:"+ Infinite Tunnel"},{value:9,label:"+ Plasma Fractal"},{value:10,label:"+ Circuits"},{value:11,label:"+ Metaballs"},{value:12,label:"+ Volumetric Lines"},{value:13,label:"+ Disco Tunnel"},{value:14,label:"+ Speed Drive"},{value:15,label:"+ Hot Rocks"},{value:16,label:"+ Server Room"},{value:17,label:"+ Remnant X"},{value:18,label:"+ Kali Set"},{value:19,label:"+ Generators"},{value:20,label:"+ Simplicity Galaxy"},{value:21,label:"+ Ribbons"},{value:22,label:"+ Twisted Rings"},{value:23,label:"+ Waves Remix"},{value:24,label:"+ Dancing Metalights"},{value:25,label:"+ IO Blocks"},{value:26,label:"+ Beating Circles"},{value:27,label:"+ Circle Wave"},{value:28,label:"+ Soundflower"},{value:29,label:"+ Polar Beats"},{value:30,label:"+ Undulant Spectre"},{value:31,label:"+ Revision 2015"},{value:32,label:"+ Gameboy Style"},{value:33,label:"+ Electric Storm"},{value:34,label:"+ Vortex"},{value:35,label:"+ Neon Grid"},{value:36,label:"+ Matrix Rain"},{value:37,label:"+ Fire"},{value:38,label:"+ Aurora"},{value:39,label:"+ Wormhole"},{value:40,label:"+ Hexagons"},{value:41,label:"+ Bubbles"},{value:42,label:"+ Lightning"},{value:43,label:"+ Kaleidoscope 2D"},{value:44,label:"+ Starfield"},{value:45,label:"+ Liquid Metal"},{value:46,label:"+ Fractal Tree"},{value:47,label:"+ Voronoi"},{value:48,label:"+ Psychedelic"},{value:49,label:"+ Energy Field"}],M=V(()=>({opacity:l.value/100,filter:`brightness(${.3+l.value/100*.7})`})),B=()=>{t.value=!t.value},C=()=>{c.value=!c.value},z=$=>{const F=$.target;o.value=parseInt(F.value),r.value++},H=$=>{const F=$.target;l.value=parseInt(F.value)};return($,F)=>(pe(),ze("div",rf,[h("div",lf,[h("button",{class:Re(["c-menu-toggle",{"c-menu-toggle--open":c.value}]),onClick:C},[...F[1]||(F[1]=[h("span",{class:"c-hamburger-line"},null,-1),h("span",{class:"c-hamburger-line"},null,-1),h("span",{class:"c-hamburger-line"},null,-1)])],2),h("div",{class:Re(["c-menu-panel",{"c-menu-panel--visible":c.value}])},[h("div",af,[h("select",{class:"c-fractal-select",onChange:z,value:o.value},[(pe(),ze(Ae,null,ms(L,J=>h("option",{key:J.value,value:J.value},Fe(J.label),9,ff)),64))],40,cf),h("button",{class:"c-fractal-toggle",onClick:B},Fe(t.value?"ON":"OFF"),1)]),t.value?(pe(),ze("div",uf,[F[2]||(F[2]=h("span",{class:"c-slider-label"},"Intensity",-1)),h("input",{type:"range",class:"c-brightness-slider",min:"10",max:"100",value:l.value,onInput:H},null,40,df),h("span",pf,Fe(l.value)+"%",1)])):lt("",!0)],2)]),h("div",{class:Re(["c-background-layer",{"c-background-layer--hidden":!t.value}]),style:Rt(M.value)},[t.value?(pe(),vi(Wa,{key:r.value,mode:o.value},null,8,["mode"])):lt("",!0)],6),h("div",vf,[Ee(Wc)]),h("div",{class:"c-nav-footer",onMouseenter:S,onMouseleave:k},[h("button",{class:Re(["c-nav-toggle",{"c-nav-toggle--open":d.value}]),onClick:y},[...F[3]||(F[3]=[h("span",{class:"c-nav-arrow"},"↑",-1)])],2),h("div",{class:Re(["c-nav-menu",{"c-nav-menu--visible":d.value}])},[...F[4]||(F[4]=[h("a",{href:"https://diegonmarcos.github.io/myprofile/",class:"c-nav-button",target:"_blank",rel:"noopener noreferrer"}," Profile ",-1),h("a",{href:"https://diegonmarcos.github.io/linktree/",class:"c-nav-button",target:"_blank",rel:"noopener noreferrer"}," Linktree ",-1),h("a",{href:"https://diegonmarcos.github.io/landpage/",class:"c-nav-button",target:"_blank",rel:"noopener noreferrer"}," Landpage ",-1)])],2)],32),h("button",{class:"c-cube-trigger",onClick:F[0]||(F[0]=J=>n.value=!0),title:"Cube View (`)"},[...F[5]||(F[5]=[h("svg",{viewBox:"0 0 24 24",width:"20",height:"20",fill:"none",stroke:"currentColor","stroke-width":"2"},[h("path",{d:"M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"})],-1)])]),Ee(of,{active:n.value,onClose:s},null,8,["active"])]))}})).mount("#app")})();
