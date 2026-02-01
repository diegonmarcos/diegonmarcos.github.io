(function(){"use strict";var zs=document.createElement("style");zs.textContent=`.bio-fractal-canvas[data-v-1ee27525]{width:100%;height:100%;display:block}@keyframes pv-shimmer-65cb23ba{0%,to{opacity:.6}50%{opacity:1}}@keyframes pv-glow-pulse-65cb23ba{0%,to{filter:drop-shadow(0 0 3px currentColor)}50%{filter:drop-shadow(0 0 12px currentColor)}}@keyframes pv-dash-flow-65cb23ba{0%{stroke-dashoffset:0}to{stroke-dashoffset:-20}}@keyframes pv-point-pulse-65cb23ba{0%,to{r:6;opacity:1}50%{r:9;opacity:.8}}.pv-shimmer[data-v-65cb23ba]{animation:pv-shimmer-65cb23ba 2s ease-in-out infinite}.pv-glow-pulse[data-v-65cb23ba]{animation:pv-glow-pulse-65cb23ba 1.5s ease-in-out infinite}.pv-dash-flow[data-v-65cb23ba]{animation:pv-dash-flow-65cb23ba 1s linear infinite}.pv-point-pulse[data-v-65cb23ba]{animation:pv-point-pulse-65cb23ba .8s ease-in-out infinite}.pv-container[data-v-65cb23ba]{width:100%;height:100%;display:flex;flex-direction:column;align-items:center;justify-content:center;padding:10px;overflow:hidden;background:transparent}.pv-title[data-v-65cb23ba]{text-align:center;margin-bottom:16px;padding:0 16px;width:100%;max-width:840px}.pv-title h1[data-v-65cb23ba],.pv-title h2[data-v-65cb23ba]{font-size:clamp(1.4rem,4.5vw,2rem);font-weight:700;line-height:1.3;margin:0}.pv-title-gradient-1[data-v-65cb23ba]{background:linear-gradient(to right,#a855f7,#ec4899,#22d3ee);-webkit-background-clip:text;-webkit-text-fill-color:transparent;background-clip:text}.pv-title-gradient-2[data-v-65cb23ba]{background:linear-gradient(to right,#22d3ee,#a855f7,#ec4899);-webkit-background-clip:text;-webkit-text-fill-color:transparent;background-clip:text}.pv-svg-container[data-v-65cb23ba]{position:relative;width:100%;max-width:840px;height:auto;aspect-ratio:840/640;flex-shrink:1}.pv-svg-container svg[data-v-65cb23ba]{width:100%;height:100%}.pv-values[data-v-65cb23ba]{margin-top:16px;width:100%;max-width:580px;text-align:center;padding:0 16px}.pv-values-main[data-v-65cb23ba]{text-align:center;margin-bottom:20px}.pv-values-text[data-v-65cb23ba]{font-size:.9rem;font-family:Times New Roman,serif}.pv-values-f[data-v-65cb23ba]{color:#a855f7;font-style:italic}.pv-values-punctuation[data-v-65cb23ba]{color:#d1d5db}.pv-values-t[data-v-65cb23ba]{color:#a855f7;font-style:italic}.pv-values-real[data-v-65cb23ba]{color:#fb923c}.pv-values-imag[data-v-65cb23ba]{color:#22d3d3}.pv-values-i[data-v-65cb23ba]{color:#22d3d3;font-style:italic}.pv-values-time[data-v-65cb23ba]{text-align:center}.pv-values-time-text[data-v-65cb23ba]{font-size:.85rem;font-family:Times New Roman,serif}.pv-values-time-t[data-v-65cb23ba]{color:#a855f7;font-style:italic}.pv-values-time-punctuation[data-v-65cb23ba]{color:#9ca3af}.pv-values-time-value[data-v-65cb23ba]{color:#d1d5db}.pv-values-time-period[data-v-65cb23ba]{color:#a855f7;font-style:italic}*{box-sizing:border-box;margin:0;padding:0}html,body{width:100%;height:100%;overflow:hidden}body{background-color:#000;font-family:-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,sans-serif;color:#fff}button{border:none;background:none;padding:0;cursor:pointer;font:inherit}select{font-family:-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,sans-serif}canvas{display:block}.o-fullscreen{width:100%;height:100%;position:relative}.o-layer{position:absolute;top:0;left:0;width:100%;height:100%}.o-layer--background{z-index:0}.o-layer--foreground{z-index:1;display:flex;align-items:center;justify-content:center;pointer-events:none}.o-fixed{position:fixed}.c-background-layer{position:absolute;top:0;left:0;width:100%;height:100%;z-index:0;transition-property:opacity,filter;transition-duration:.3s;transition-timing-function:ease}.c-background-layer--hidden{opacity:0!important;pointer-events:none}.c-background-layer canvas{width:100%!important;height:100%!important}.c-foreground-layer{position:absolute;top:0;left:0;width:100%;height:100%;z-index:1;display:flex;align-items:center;justify-content:center;pointer-events:none}.c-controls{position:fixed;top:10px;right:10px;z-index:100;display:flex;flex-direction:column;gap:8px;align-items:flex-end}.c-menu-toggle{background:transparent!important;backdrop-filter:none;-webkit-backdrop-filter:none;transition-property:background,transform;transition-duration:.3s;transition-timing-function:ease;border:none;color:#fff;width:36px;height:36px;border-radius:8px;display:flex;align-items:center;justify-content:center;flex-direction:column;gap:4px;padding:8px}.c-menu-toggle:hover{background:transparent!important}.c-menu-toggle:hover .c-hamburger-line{box-shadow:0 0 8px #fff6}.c-menu-toggle--open{transform:rotate(90deg)}.c-hamburger-line{display:block;width:100%;height:2px;background:#fffc;border-radius:1px;transition-property:background,box-shadow;transition-duration:.3s;transition-timing-function:ease;box-shadow:0 0 4px #fff3}.c-menu-panel{display:flex;flex-direction:column;gap:8px;align-items:flex-end;max-height:0;overflow:hidden;opacity:0;transition-property:max-height,opacity;transition-duration:.3s;transition-timing-function:ease}.c-menu-panel--visible{max-height:200px;opacity:1}.c-controls-row{display:flex;gap:8px;align-items:center}.c-fractal-toggle{background:#ffffff1a;-webkit-backdrop-filter:blur(4px);backdrop-filter:blur(4px);transition-property:background;transition-duration:.3s;transition-timing-function:ease;border:1px solid rgba(255,255,255,.3);color:#fff;padding:8px 12px;border-radius:6px;font-size:12px}.c-fractal-toggle:hover{background:#fff3}.c-fractal-select{background:#ffffff1a;-webkit-backdrop-filter:blur(4px);backdrop-filter:blur(4px);border:1px solid rgba(255,255,255,.3);color:#fff;padding:8px 28px 8px 12px;border-radius:6px;font-size:12px;outline:none;-webkit-appearance:none;-moz-appearance:none;appearance:none;background-image:url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' fill='white' viewBox='0 0 16 16'%3E%3Cpath d='M8 11L3 6h10l-5 5z'/%3E%3C/svg%3E");background-repeat:no-repeat;background-position:right 8px center;transition-property:background-color;transition-duration:.3s;transition-timing-function:ease}.c-fractal-select:hover{background-color:#fff3}.c-fractal-select option{background:#1a1a2e;color:#fff}.c-slider-container{background:#ffffff1a;-webkit-backdrop-filter:blur(4px);backdrop-filter:blur(4px);display:flex;align-items:center;gap:8px;border:1px solid rgba(255,255,255,.3);padding:6px 12px;border-radius:6px}.c-slider-label{color:#fff;font-size:11px;white-space:nowrap}.c-brightness-slider{-webkit-appearance:none;-moz-appearance:none;appearance:none;width:80px;height:4px;border-radius:2px;background:#ffffff4d;outline:none;cursor:pointer}.c-brightness-slider::-webkit-slider-thumb{-webkit-appearance:none;-moz-appearance:none;appearance:none;width:14px;height:14px;border-radius:50%;background:#fff;cursor:pointer;box-shadow:0 1px 3px #0000004d}.c-brightness-slider::-moz-range-thumb{width:14px;height:14px;border-radius:50%;background:#fff;cursor:pointer;border:none}.c-nav-footer{position:fixed;bottom:16px;left:50%;transform:translate(-50%);z-index:100;display:flex;flex-direction:column;gap:12px;align-items:center;pointer-events:auto;padding:8px}.c-nav-toggle{position:relative;width:48px;height:48px;border:none;border-radius:50%;cursor:pointer;transform:translateY(0);transition:transform 3s cubic-bezier(.25,.1,.25,1),box-shadow .3s ease,border-color .3s ease;opacity:1!important;visibility:visible!important;background:transparent!important;backdrop-filter:none;-webkit-backdrop-filter:none;border:2px solid rgba(255,255,255,.8);box-shadow:0 0 20px #ffffff4d}.c-nav-toggle:active{transform:translateY(0) scale(1.05);box-shadow:0 0 8px #ffffff1a}.c-nav-toggle--open{transform:translateY(-30px) scale(1.05)!important;box-shadow:0 0 20px #ffffff40;border-color:#ffffffb3;transition:transform 3s cubic-bezier(.25,.1,.25,1)!important}.c-nav-toggle--open .c-nav-arrow{animation:arrow-bounce-inverted 1.5s ease-in-out infinite}.c-nav-arrow{display:inline-block;font-size:1.8rem;color:#fff;font-weight:700;text-shadow:0 2px 6px rgba(0,0,0,.6);animation:arrow-bounce 1.5s ease-in-out infinite;opacity:1!important}.c-nav-menu{display:flex;flex-wrap:nowrap;gap:8px;max-height:0;overflow:visible;opacity:0;transform:translateY(15px);transition:max-height 1s cubic-bezier(.25,.1,.25,1),opacity .8s cubic-bezier(.25,.1,.25,1),transform 1s cubic-bezier(.25,.1,.25,1);justify-content:center;padding:8px 0}.c-nav-menu--visible{max-height:250px;opacity:1;transform:translateY(0);transition:max-height 3s cubic-bezier(.25,.1,.25,1),opacity 2s cubic-bezier(.25,.1,.25,1) .2s,transform 2.5s cubic-bezier(.25,.1,.25,1)}.c-nav-button{position:relative;padding:10px 16px;font-size:.8rem;font-weight:600;text-decoration:none;color:#fff;border-radius:10px;transition:all .4s cubic-bezier(.4,0,.2,1);overflow:hidden;white-space:nowrap;flex-shrink:0;background:transparent!important;backdrop-filter:none;-webkit-backdrop-filter:none;border:2px solid rgba(255,255,255,.4);box-shadow:0 0 10px #ffffff1f}.c-nav-button:before{content:"";position:absolute;top:0;left:-100%;width:100%;height:100%;background:linear-gradient(90deg,transparent,rgba(255,255,255,.3),transparent);animation:shimmer-slide 3s ease-in-out infinite}.c-nav-button:hover{transform:translateY(-3px) scale(1.05);background:transparent!important;box-shadow:0 0 20px #ffffff40;border-color:#fff9}.c-nav-button:active{transform:translateY(-1px) scale(1.02);background:transparent!important;box-shadow:0 0 12px #ffffff26}.c-nav-button{text-shadow:0 1px 2px rgba(0,0,0,.3)}.c-nav-menu:not(.c-nav-menu--visible) .c-nav-button{opacity:0!important;pointer-events:none}.c-nav-menu--visible .c-nav-button{opacity:1;transform:translateY(0) scale(1);transition:opacity 1s cubic-bezier(.25,.1,.25,1),transform 1s cubic-bezier(.25,.1,.25,1)}.c-nav-menu--visible .c-nav-button:nth-child(1){transition-delay:0s}.c-nav-menu--visible .c-nav-button:nth-child(2){transition-delay:1s}.c-nav-menu--visible .c-nav-button:nth-child(3){transition-delay:2s}@keyframes shimmer-slide{0%{left:-100%}50%,to{left:100%}}@keyframes arrow-bounce{0%,to{transform:translateY(0)}50%{transform:translateY(-6px)}}@keyframes arrow-bounce-inverted{0%,to{transform:rotate(180deg) translateY(0)}50%{transform:rotate(180deg) translateY(6px)}}@media (max-width: 768px){.c-nav-toggle{width:30px;height:30px}.c-nav-arrow{font-size:1.15rem}.c-nav-menu{gap:5px}.c-nav-button{padding:6px 10px;font-size:.51rem;border-radius:6px}}@keyframes twinkle{0%,to{opacity:.3}50%{opacity:1}}@keyframes drift{0%{transform:translateY(0) translate(0)}to{transform:translateY(-100vh) translate(20px)}}.c-cube-overlay{position:fixed;top:0;right:0;bottom:0;left:0;z-index:9999;background:radial-gradient(ellipse at center,#0d1b2a,#020408);opacity:0;visibility:hidden;transition:opacity .3s ease,visibility .3s ease;display:flex;align-items:center;justify-content:center;overflow:hidden;touch-action:none;-webkit-user-select:none;user-select:none}.c-cube-overlay:before{content:"";position:absolute;top:0;right:0;bottom:0;left:0;pointer-events:none;background-image:radial-gradient(1px 1px at 10% 20%,rgba(255,255,255,.7) 50%,transparent 50%),radial-gradient(1px 1px at 25% 55%,rgba(255,255,255,.5) 50%,transparent 50%),radial-gradient(2px 2px at 40% 30%,rgba(150,180,255,.8) 50%,transparent 50%),radial-gradient(1px 1px at 55% 70%,rgba(255,255,255,.6) 50%,transparent 50%),radial-gradient(1px 1px at 70% 15%,rgba(255,255,255,.7) 50%,transparent 50%),radial-gradient(2px 2px at 85% 45%,rgba(255,200,150,.7) 50%,transparent 50%),radial-gradient(1px 1px at 15% 80%,rgba(255,255,255,.5) 50%,transparent 50%),radial-gradient(1px 1px at 60% 90%,rgba(255,255,255,.6) 50%,transparent 50%),radial-gradient(2px 2px at 90% 75%,rgba(200,150,255,.7) 50%,transparent 50%),radial-gradient(1px 1px at 35% 5%,rgba(255,255,255,.8) 50%,transparent 50%);background-size:250px 250px}.c-cube-overlay--active{opacity:1;visibility:visible}.c-cube-scene{width:min(70vw,70vh);height:min(70vw,70vh);perspective:1400px;perspective-origin:50% 50%;transform-style:preserve-3d}.c-cube{width:100%;height:100%;position:relative;transform-style:preserve-3d;will-change:transform;cursor:grab}.c-cube:active{cursor:grabbing}.c-cube--animating{pointer-events:none}.c-cube__face{position:absolute;width:min(70vw,70vh);height:min(70vw,70vh);backface-visibility:hidden;border:2px solid rgba(255,255,255,.2);overflow:hidden;background:#0a0a12;contain:layout style paint;will-change:transform}.c-cube__face--front{transform:translateZ(calc(min(70vw,70vh)/2))}.c-cube__face--back{transform:rotateY(180deg) translateZ(calc(min(70vw,70vh)/2))}.c-cube__face--right{transform:rotateY(90deg) translateZ(calc(min(70vw,70vh)/2))}.c-cube__face--left{transform:rotateY(-90deg) translateZ(calc(min(70vw,70vh)/2))}.c-cube__face--top{transform:rotateX(90deg) translateZ(calc(min(70vw,70vh)/2))}.c-cube__face--bottom{transform:rotateX(-90deg) translateZ(calc(min(70vw,70vh)/2))}.c-cube__content{width:100%;height:100%;overflow:hidden;pointer-events:none}.c-cube__iframe{width:100%;height:100%;border:none;pointer-events:none;background:#000;contain:strict}.c-cube__placeholder{width:100%;height:100%;display:flex;flex-direction:column;align-items:center;justify-content:center;background:linear-gradient(135deg,#1a1a2e,#16213e,#0f3460);color:#ffffffe6;text-align:center;padding:2rem}.c-cube__placeholder h2{font-size:clamp(1.5rem,4vw,2.5rem);font-weight:600;margin:0 0 .5rem;letter-spacing:.05em;text-shadow:0 2px 10px rgba(0,0,0,.5)}.c-cube__placeholder p{font-size:clamp(.875rem,2vw,1.125rem);opacity:.7;margin:0;letter-spacing:.1em;text-transform:uppercase}.c-cube__placeholder--gradient-1{background:linear-gradient(135deg,#2d1b4e,#1a1a2e,#0d2137)}.c-cube__placeholder--gradient-2{background:linear-gradient(135deg,#0f3460,#1a1a2e,#16213e)}.c-cube__placeholder--gradient-3{background:linear-gradient(135deg,#1e3a5f,#16213e,#1a1a2e)}.c-cube-view-mode{position:fixed;top:50%;left:2rem;transform:translateY(-50%);padding:.75rem 1rem;background:#ffffff1a;-webkit-backdrop-filter:blur(10px);backdrop-filter:blur(10px);border-radius:8px;font-size:.75rem;color:#ffffffe6;letter-spacing:.1em;text-transform:uppercase;border:1px solid rgba(255,255,255,.15);writing-mode:vertical-rl;text-orientation:mixed}.c-cube-hint{position:fixed;bottom:2rem;left:50%;transform:translate(-50%);display:flex;align-items:center;gap:.75rem;padding:.75rem 1.5rem;background:#ffffff1a;-webkit-backdrop-filter:blur(10px);backdrop-filter:blur(10px);border-radius:2rem;font-size:.8rem;color:#fffc;letter-spacing:.05em;border:1px solid rgba(255,255,255,.15)}.c-cube-hint kbd{display:inline-flex;align-items:center;justify-content:center;min-width:1.5rem;height:1.5rem;padding:0 .4rem;background:#ffffff26;border-radius:4px;font-family:inherit;font-size:.75rem;font-weight:600;border:1px solid rgba(255,255,255,.2)}.c-cube-hint__separator{opacity:.4}.c-cube-indicator{position:fixed;top:2rem;left:50%;transform:translate(-50%);display:flex;gap:.5rem}.c-cube-indicator__dot{padding:.5rem 1rem;background:#ffffff1a;border:1px solid rgba(255,255,255,.2);border-radius:2rem;font-size:.7rem;text-transform:uppercase;letter-spacing:.1em;color:#fff9;cursor:pointer;transition:all .2s ease}.c-cube-indicator__dot:hover{background:#ffffff26;color:#ffffffe6}.c-cube-indicator__dot--active{background:#fff3;color:#fff;border-color:#fff6}.c-cube-trigger{position:fixed;bottom:20px;right:20px;z-index:100;display:flex;align-items:center;gap:8px;padding:10px 14px;background:#ffffff1a;border:1px solid rgba(255,255,255,.25);border-radius:12px;cursor:pointer;color:#fffc;transition:all .3s ease;-webkit-backdrop-filter:blur(8px);backdrop-filter:blur(8px)}.c-cube-trigger:hover{background:#ffffff26;border-color:#fff6;color:#fff;transform:scale(1.05)}.c-cube-trigger:active{transform:scale(.95)}.c-cube-trigger svg{transition:transform .3s ease}.c-cube-trigger:hover svg{transform:rotateY(15deg) rotateX(-10deg)}.c-cube-trigger__key{display:inline-flex;align-items:center;justify-content:center;min-width:20px;height:20px;padding:0 6px;background:#ffffff26;border:1px solid rgba(255,255,255,.3);border-radius:4px;font-size:11px;font-weight:600;font-family:inherit}.c-cube-app-preview{width:100%;height:100%;display:flex;align-items:center;justify-content:center;background:linear-gradient(135deg,#1a1a2e,#0a0a15);position:relative}.c-cube-app-preview__label{padding:1rem 2rem;background:#ffffff1a;border:1px solid rgba(255,255,255,.2);border-radius:8px;font-size:1rem;color:#ffffffe6;letter-spacing:.1em;text-transform:uppercase}@media (max-width: 768px){.c-cube-trigger{bottom:12px;right:12px;padding:8px 10px;gap:6px;border-radius:10px}.c-cube-trigger svg{width:16px;height:16px}.c-cube-trigger__key{min-width:18px;height:18px;font-size:10px}.c-cube-view-mode{left:.5rem;padding:.5rem .75rem;font-size:.6rem}.c-cube-hint{flex-wrap:wrap;justify-content:center;bottom:1rem;padding:.5rem 1rem;font-size:.7rem}.c-cube-indicator{top:1rem;flex-wrap:wrap;justify-content:center;max-width:90%}.c-cube-indicator__dot{padding:.4rem .75rem;font-size:.6rem}}.u-hidden{display:none!important}.u-invisible{visibility:hidden!important}.u-no-pointer{pointer-events:none!important}.u-pointer{pointer-events:auto!important}#app,.app-container{width:100%;height:100%;position:relative}
/*$vite$:1*/`,document.head.appendChild(zs);var Ln=typeof document<"u"?document.currentScript:null;/**
* @vue/shared v3.5.27
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function Fn(e){const t=Object.create(null);for(const n of e.split(","))t[n]=1;return n=>n in t}const te={},yt=[],Oe=()=>{},Ts=()=>!1,nn=e=>e.charCodeAt(0)===111&&e.charCodeAt(1)===110&&(e.charCodeAt(2)>122||e.charCodeAt(2)<97),Nn=e=>e.startsWith("onUpdate:"),ce=Object.assign,Dn=(e,t)=>{const n=e.indexOf(t);n>-1&&e.splice(n,1)},ki=Object.prototype.hasOwnProperty,J=(e,t)=>ki.call(e,t),B=Array.isArray,_t=e=>sn(e)==="[object Map]",As=e=>sn(e)==="[object Set]",j=e=>typeof e=="function",le=e=>typeof e=="string",st=e=>typeof e=="symbol",re=e=>e!==null&&typeof e=="object",Es=e=>(re(e)||j(e))&&j(e.then)&&j(e.catch),Cs=Object.prototype.toString,sn=e=>Cs.call(e),Si=e=>sn(e).slice(8,-1),Ms=e=>sn(e)==="[object Object]",$n=e=>le(e)&&e!=="NaN"&&e[0]!=="-"&&""+parseInt(e,10)===e,Ot=Fn(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),on=e=>{const t=Object.create(null);return n=>t[n]||(t[n]=e(n))},zi=/-\w/g,ot=on(e=>e.replace(zi,t=>t.slice(1).toUpperCase())),Ti=/\B([A-Z])/g,pt=on(e=>e.replace(Ti,"-$1").toLowerCase()),Rs=on(e=>e.charAt(0).toUpperCase()+e.slice(1)),jn=on(e=>e?`on${Rs(e)}`:""),it=(e,t)=>!Object.is(e,t),Bn=(e,...t)=>{for(let n=0;n<e.length;n++)e[n](...t)},Is=(e,t,n,s=!1)=>{Object.defineProperty(e,t,{configurable:!0,enumerable:!1,writable:s,value:n})},Ai=e=>{const t=parseFloat(e);return isNaN(t)?e:t};let Ps;const rn=()=>Ps||(Ps=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function Lt(e){if(B(e)){const t={};for(let n=0;n<e.length;n++){const s=e[n],o=le(s)?Ri(s):Lt(s);if(o)for(const i in o)t[i]=o[i]}return t}else if(le(e)||re(e))return e}const Ei=/;(?![^(]*\))/g,Ci=/:([^]+)/,Mi=/\/\*[^]*?\*\//g;function Ri(e){const t={};return e.replace(Mi,"").split(Ei).forEach(n=>{if(n){const s=n.split(Ci);s.length>1&&(t[s[0].trim()]=s[1].trim())}}),t}function Me(e){let t="";if(le(e))t=e;else if(B(e))for(let n=0;n<e.length;n++){const s=Me(e[n]);s&&(t+=s+" ")}else if(re(e))for(const n in e)e[n]&&(t+=n+" ");return t.trim()}const Ii=Fn("itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly");function Os(e){return!!e||e===""}const Ls=e=>!!(e&&e.__v_isRef===!0),Le=e=>le(e)?e:e==null?"":B(e)||re(e)&&(e.toString===Cs||!j(e.toString))?Ls(e)?Le(e.value):JSON.stringify(e,Fs,2):String(e),Fs=(e,t)=>Ls(t)?Fs(e,t.value):_t(t)?{[`Map(${t.size})`]:[...t.entries()].reduce((n,[s,o],i)=>(n[Hn(s,i)+" =>"]=o,n),{})}:As(t)?{[`Set(${t.size})`]:[...t.values()].map(n=>Hn(n))}:st(t)?Hn(t):re(t)&&!B(t)&&!Ms(t)?String(t):t,Hn=(e,t="")=>{var n;return st(e)?`Symbol(${(n=e.description)!=null?n:t})`:e};/**
* @vue/reactivity v3.5.27
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let xe;class Pi{constructor(t=!1){this.detached=t,this._active=!0,this._on=0,this.effects=[],this.cleanups=[],this._isPaused=!1,this.parent=xe,!t&&xe&&(this.index=(xe.scopes||(xe.scopes=[])).push(this)-1)}get active(){return this._active}pause(){if(this._active){this._isPaused=!0;let t,n;if(this.scopes)for(t=0,n=this.scopes.length;t<n;t++)this.scopes[t].pause();for(t=0,n=this.effects.length;t<n;t++)this.effects[t].pause()}}resume(){if(this._active&&this._isPaused){this._isPaused=!1;let t,n;if(this.scopes)for(t=0,n=this.scopes.length;t<n;t++)this.scopes[t].resume();for(t=0,n=this.effects.length;t<n;t++)this.effects[t].resume()}}run(t){if(this._active){const n=xe;try{return xe=this,t()}finally{xe=n}}}on(){++this._on===1&&(this.prevScope=xe,xe=this)}off(){this._on>0&&--this._on===0&&(xe=this.prevScope,this.prevScope=void 0)}stop(t){if(this._active){this._active=!1;let n,s;for(n=0,s=this.effects.length;n<s;n++)this.effects[n].stop();for(this.effects.length=0,n=0,s=this.cleanups.length;n<s;n++)this.cleanups[n]();if(this.cleanups.length=0,this.scopes){for(n=0,s=this.scopes.length;n<s;n++)this.scopes[n].stop(!0);this.scopes.length=0}if(!this.detached&&this.parent&&!t){const o=this.parent.scopes.pop();o&&o!==this&&(this.parent.scopes[this.index]=o,o.index=this.index)}this.parent=void 0}}}function Oi(){return xe}let ne;const Un=new WeakSet;class Ns{constructor(t){this.fn=t,this.deps=void 0,this.depsTail=void 0,this.flags=5,this.next=void 0,this.cleanup=void 0,this.scheduler=void 0,xe&&xe.active&&xe.effects.push(this)}pause(){this.flags|=64}resume(){this.flags&64&&(this.flags&=-65,Un.has(this)&&(Un.delete(this),this.trigger()))}notify(){this.flags&2&&!(this.flags&32)||this.flags&8||$s(this)}run(){if(!(this.flags&1))return this.fn();this.flags|=2,Gs(this),js(this);const t=ne,n=Re;ne=this,Re=!0;try{return this.fn()}finally{Bs(this),ne=t,Re=n,this.flags&=-3}}stop(){if(this.flags&1){for(let t=this.deps;t;t=t.nextDep)Kn(t);this.deps=this.depsTail=void 0,Gs(this),this.onStop&&this.onStop(),this.flags&=-2}}trigger(){this.flags&64?Un.add(this):this.scheduler?this.scheduler():this.runIfDirty()}runIfDirty(){Wn(this)&&this.run()}get dirty(){return Wn(this)}}let Ds=0,Ft,Nt;function $s(e,t=!1){if(e.flags|=8,t){e.next=Nt,Nt=e;return}e.next=Ft,Ft=e}function Gn(){Ds++}function Vn(){if(--Ds>0)return;if(Nt){let t=Nt;for(Nt=void 0;t;){const n=t.next;t.next=void 0,t.flags&=-9,t=n}}let e;for(;Ft;){let t=Ft;for(Ft=void 0;t;){const n=t.next;if(t.next=void 0,t.flags&=-9,t.flags&1)try{t.trigger()}catch(s){e||(e=s)}t=n}}if(e)throw e}function js(e){for(let t=e.deps;t;t=t.nextDep)t.version=-1,t.prevActiveLink=t.dep.activeLink,t.dep.activeLink=t}function Bs(e){let t,n=e.depsTail,s=n;for(;s;){const o=s.prevDep;s.version===-1?(s===n&&(n=o),Kn(s),Li(s)):t=s,s.dep.activeLink=s.prevActiveLink,s.prevActiveLink=void 0,s=o}e.deps=t,e.depsTail=n}function Wn(e){for(let t=e.deps;t;t=t.nextDep)if(t.dep.version!==t.version||t.dep.computed&&(Hs(t.dep.computed)||t.dep.version!==t.version))return!0;return!!e._dirty}function Hs(e){if(e.flags&4&&!(e.flags&16)||(e.flags&=-17,e.globalVersion===Dt)||(e.globalVersion=Dt,!e.isSSR&&e.flags&128&&(!e.deps&&!e._dirty||!Wn(e))))return;e.flags|=2;const t=e.dep,n=ne,s=Re;ne=e,Re=!0;try{js(e);const o=e.fn(e._value);(t.version===0||it(o,e._value))&&(e.flags|=128,e._value=o,t.version++)}catch(o){throw t.version++,o}finally{ne=n,Re=s,Bs(e),e.flags&=-3}}function Kn(e,t=!1){const{dep:n,prevSub:s,nextSub:o}=e;if(s&&(s.nextSub=o,e.prevSub=void 0),o&&(o.prevSub=s,e.nextSub=void 0),n.subs===e&&(n.subs=s,!s&&n.computed)){n.computed.flags&=-5;for(let i=n.computed.deps;i;i=i.nextDep)Kn(i,!0)}!t&&!--n.sc&&n.map&&n.map.delete(n.key)}function Li(e){const{prevDep:t,nextDep:n}=e;t&&(t.nextDep=n,e.prevDep=void 0),n&&(n.prevDep=t,e.nextDep=void 0)}let Re=!0;const Us=[];function Fe(){Us.push(Re),Re=!1}function Ne(){const e=Us.pop();Re=e===void 0?!0:e}function Gs(e){const{cleanup:t}=e;if(e.cleanup=void 0,t){const n=ne;ne=void 0;try{t()}finally{ne=n}}}let Dt=0;class Fi{constructor(t,n){this.sub=t,this.dep=n,this.version=n.version,this.nextDep=this.prevDep=this.nextSub=this.prevSub=this.prevActiveLink=void 0}}class Yn{constructor(t){this.computed=t,this.version=0,this.activeLink=void 0,this.subs=void 0,this.map=void 0,this.key=void 0,this.sc=0,this.__v_skip=!0}track(t){if(!ne||!Re||ne===this.computed)return;let n=this.activeLink;if(n===void 0||n.sub!==ne)n=this.activeLink=new Fi(ne,this),ne.deps?(n.prevDep=ne.depsTail,ne.depsTail.nextDep=n,ne.depsTail=n):ne.deps=ne.depsTail=n,Vs(n);else if(n.version===-1&&(n.version=this.version,n.nextDep)){const s=n.nextDep;s.prevDep=n.prevDep,n.prevDep&&(n.prevDep.nextDep=s),n.prevDep=ne.depsTail,n.nextDep=void 0,ne.depsTail.nextDep=n,ne.depsTail=n,ne.deps===n&&(ne.deps=s)}return n}trigger(t){this.version++,Dt++,this.notify(t)}notify(t){Gn();try{for(let n=this.subs;n;n=n.prevSub)n.sub.notify()&&n.sub.dep.notify()}finally{Vn()}}}function Vs(e){if(e.dep.sc++,e.sub.flags&4){const t=e.dep.computed;if(t&&!e.dep.subs){t.flags|=20;for(let s=t.deps;s;s=s.nextDep)Vs(s)}const n=e.dep.subs;n!==e&&(e.prevSub=n,n&&(n.nextSub=e)),e.dep.subs=e}}const qn=new WeakMap,vt=Symbol(""),Xn=Symbol(""),$t=Symbol("");function de(e,t,n){if(Re&&ne){let s=qn.get(e);s||qn.set(e,s=new Map);let o=s.get(n);o||(s.set(n,o=new Yn),o.map=s,o.key=n),o.track()}}function Je(e,t,n,s,o,i){const r=qn.get(e);if(!r){Dt++;return}const l=c=>{c&&c.trigger()};if(Gn(),t==="clear")r.forEach(l);else{const c=B(e),d=c&&$n(n);if(c&&n==="length"){const f=Number(s);r.forEach((p,w)=>{(w==="length"||w===$t||!st(w)&&w>=f)&&l(p)})}else switch((n!==void 0||r.has(void 0))&&l(r.get(n)),d&&l(r.get($t)),t){case"add":c?d&&l(r.get("length")):(l(r.get(vt)),_t(e)&&l(r.get(Xn)));break;case"delete":c||(l(r.get(vt)),_t(e)&&l(r.get(Xn)));break;case"set":_t(e)&&l(r.get(vt));break}}Vn()}function wt(e){const t=K(e);return t===e?t:(de(t,"iterate",$t),Ae(e)?t:t.map(Ie))}function ln(e){return de(e=K(e),"iterate",$t),e}function rt(e,t){return Qe(e)?kt(ht(e)?Ie(t):t):Ie(t)}const Ni={__proto__:null,[Symbol.iterator](){return Jn(this,Symbol.iterator,e=>rt(this,e))},concat(...e){return wt(this).concat(...e.map(t=>B(t)?wt(t):t))},entries(){return Jn(this,"entries",e=>(e[1]=rt(this,e[1]),e))},every(e,t){return Ze(this,"every",e,t,void 0,arguments)},filter(e,t){return Ze(this,"filter",e,t,n=>n.map(s=>rt(this,s)),arguments)},find(e,t){return Ze(this,"find",e,t,n=>rt(this,n),arguments)},findIndex(e,t){return Ze(this,"findIndex",e,t,void 0,arguments)},findLast(e,t){return Ze(this,"findLast",e,t,n=>rt(this,n),arguments)},findLastIndex(e,t){return Ze(this,"findLastIndex",e,t,void 0,arguments)},forEach(e,t){return Ze(this,"forEach",e,t,void 0,arguments)},includes(...e){return Zn(this,"includes",e)},indexOf(...e){return Zn(this,"indexOf",e)},join(e){return wt(this).join(e)},lastIndexOf(...e){return Zn(this,"lastIndexOf",e)},map(e,t){return Ze(this,"map",e,t,void 0,arguments)},pop(){return jt(this,"pop")},push(...e){return jt(this,"push",e)},reduce(e,...t){return Ws(this,"reduce",e,t)},reduceRight(e,...t){return Ws(this,"reduceRight",e,t)},shift(){return jt(this,"shift")},some(e,t){return Ze(this,"some",e,t,void 0,arguments)},splice(...e){return jt(this,"splice",e)},toReversed(){return wt(this).toReversed()},toSorted(e){return wt(this).toSorted(e)},toSpliced(...e){return wt(this).toSpliced(...e)},unshift(...e){return jt(this,"unshift",e)},values(){return Jn(this,"values",e=>rt(this,e))}};function Jn(e,t,n){const s=ln(e),o=s[t]();return s!==e&&!Ae(e)&&(o._next=o.next,o.next=()=>{const i=o._next();return i.done||(i.value=n(i.value)),i}),o}const Di=Array.prototype;function Ze(e,t,n,s,o,i){const r=ln(e),l=r!==e&&!Ae(e),c=r[t];if(c!==Di[t]){const p=c.apply(e,i);return l?Ie(p):p}let d=n;r!==e&&(l?d=function(p,w){return n.call(this,rt(e,p),w,e)}:n.length>2&&(d=function(p,w){return n.call(this,p,w,e)}));const f=c.call(r,d,s);return l&&o?o(f):f}function Ws(e,t,n,s){const o=ln(e);let i=n;return o!==e&&(Ae(e)?n.length>3&&(i=function(r,l,c){return n.call(this,r,l,c,e)}):i=function(r,l,c){return n.call(this,r,rt(e,l),c,e)}),o[t](i,...s)}function Zn(e,t,n){const s=K(e);de(s,"iterate",$t);const o=s[t](...n);return(o===-1||o===!1)&&ns(n[0])?(n[0]=K(n[0]),s[t](...n)):o}function jt(e,t,n=[]){Fe(),Gn();const s=K(e)[t].apply(e,n);return Vn(),Ne(),s}const $i=Fn("__proto__,__v_isRef,__isVue"),Ks=new Set(Object.getOwnPropertyNames(Symbol).filter(e=>e!=="arguments"&&e!=="caller").map(e=>Symbol[e]).filter(st));function ji(e){st(e)||(e=String(e));const t=K(this);return de(t,"has",e),t.hasOwnProperty(e)}class Ys{constructor(t=!1,n=!1){this._isReadonly=t,this._isShallow=n}get(t,n,s){if(n==="__v_skip")return t.__v_skip;const o=this._isReadonly,i=this._isShallow;if(n==="__v_isReactive")return!o;if(n==="__v_isReadonly")return o;if(n==="__v_isShallow")return i;if(n==="__v_raw")return s===(o?i?eo:Qs:i?Zs:Js).get(t)||Object.getPrototypeOf(t)===Object.getPrototypeOf(s)?t:void 0;const r=B(t);if(!o){let c;if(r&&(c=Ni[n]))return c;if(n==="hasOwnProperty")return ji}const l=Reflect.get(t,n,fe(t)?t:s);if((st(n)?Ks.has(n):$i(n))||(o||de(t,"get",n),i))return l;if(fe(l)){const c=r&&$n(n)?l:l.value;return o&&re(c)?ts(c):c}return re(l)?o?ts(l):es(l):l}}class qs extends Ys{constructor(t=!1){super(!1,t)}set(t,n,s,o){let i=t[n];const r=B(t)&&$n(n);if(!this._isShallow){const d=Qe(i);if(!Ae(s)&&!Qe(s)&&(i=K(i),s=K(s)),!r&&fe(i)&&!fe(s))return d||(i.value=s),!0}const l=r?Number(n)<t.length:J(t,n),c=Reflect.set(t,n,s,fe(t)?t:o);return t===K(o)&&(l?it(s,i)&&Je(t,"set",n,s):Je(t,"add",n,s)),c}deleteProperty(t,n){const s=J(t,n);t[n];const o=Reflect.deleteProperty(t,n);return o&&s&&Je(t,"delete",n,void 0),o}has(t,n){const s=Reflect.has(t,n);return(!st(n)||!Ks.has(n))&&de(t,"has",n),s}ownKeys(t){return de(t,"iterate",B(t)?"length":vt),Reflect.ownKeys(t)}}class Xs extends Ys{constructor(t=!1){super(!0,t)}set(t,n){return!0}deleteProperty(t,n){return!0}}const Bi=new qs,Hi=new Xs,Ui=new qs(!0),Gi=new Xs(!0),Qn=e=>e,an=e=>Reflect.getPrototypeOf(e);function Vi(e,t,n){return function(...s){const o=this.__v_raw,i=K(o),r=_t(i),l=e==="entries"||e===Symbol.iterator&&r,c=e==="keys"&&r,d=o[e](...s),f=n?Qn:t?kt:Ie;return!t&&de(i,"iterate",c?Xn:vt),ce(Object.create(d),{next(){const{value:p,done:w}=d.next();return w?{value:p,done:w}:{value:l?[f(p[0]),f(p[1])]:f(p),done:w}}})}}function cn(e){return function(...t){return e==="delete"?!1:e==="clear"?void 0:this}}function Wi(e,t){const n={get(o){const i=this.__v_raw,r=K(i),l=K(o);e||(it(o,l)&&de(r,"get",o),de(r,"get",l));const{has:c}=an(r),d=t?Qn:e?kt:Ie;if(c.call(r,o))return d(i.get(o));if(c.call(r,l))return d(i.get(l));i!==r&&i.get(o)},get size(){const o=this.__v_raw;return!e&&de(K(o),"iterate",vt),o.size},has(o){const i=this.__v_raw,r=K(i),l=K(o);return e||(it(o,l)&&de(r,"has",o),de(r,"has",l)),o===l?i.has(o):i.has(o)||i.has(l)},forEach(o,i){const r=this,l=r.__v_raw,c=K(l),d=t?Qn:e?kt:Ie;return!e&&de(c,"iterate",vt),l.forEach((f,p)=>o.call(i,d(f),d(p),r))}};return ce(n,e?{add:cn("add"),set:cn("set"),delete:cn("delete"),clear:cn("clear")}:{add(o){!t&&!Ae(o)&&!Qe(o)&&(o=K(o));const i=K(this);return an(i).has.call(i,o)||(i.add(o),Je(i,"add",o,o)),this},set(o,i){!t&&!Ae(i)&&!Qe(i)&&(i=K(i));const r=K(this),{has:l,get:c}=an(r);let d=l.call(r,o);d||(o=K(o),d=l.call(r,o));const f=c.call(r,o);return r.set(o,i),d?it(i,f)&&Je(r,"set",o,i):Je(r,"add",o,i),this},delete(o){const i=K(this),{has:r,get:l}=an(i);let c=r.call(i,o);c||(o=K(o),c=r.call(i,o)),l&&l.call(i,o);const d=i.delete(o);return c&&Je(i,"delete",o,void 0),d},clear(){const o=K(this),i=o.size!==0,r=o.clear();return i&&Je(o,"clear",void 0,void 0),r}}),["keys","values","entries",Symbol.iterator].forEach(o=>{n[o]=Vi(o,e,t)}),n}function fn(e,t){const n=Wi(e,t);return(s,o,i)=>o==="__v_isReactive"?!e:o==="__v_isReadonly"?e:o==="__v_raw"?s:Reflect.get(J(n,o)&&o in s?n:s,o,i)}const Ki={get:fn(!1,!1)},Yi={get:fn(!1,!0)},qi={get:fn(!0,!1)},Xi={get:fn(!0,!0)},Js=new WeakMap,Zs=new WeakMap,Qs=new WeakMap,eo=new WeakMap;function Ji(e){switch(e){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function Zi(e){return e.__v_skip||!Object.isExtensible(e)?0:Ji(Si(e))}function es(e){return Qe(e)?e:un(e,!1,Bi,Ki,Js)}function Qi(e){return un(e,!1,Ui,Yi,Zs)}function ts(e){return un(e,!0,Hi,qi,Qs)}function Tf(e){return un(e,!0,Gi,Xi,eo)}function un(e,t,n,s,o){if(!re(e)||e.__v_raw&&!(t&&e.__v_isReactive))return e;const i=Zi(e);if(i===0)return e;const r=o.get(e);if(r)return r;const l=new Proxy(e,i===2?s:n);return o.set(e,l),l}function ht(e){return Qe(e)?ht(e.__v_raw):!!(e&&e.__v_isReactive)}function Qe(e){return!!(e&&e.__v_isReadonly)}function Ae(e){return!!(e&&e.__v_isShallow)}function ns(e){return e?!!e.__v_raw:!1}function K(e){const t=e&&e.__v_raw;return t?K(t):e}function er(e){return!J(e,"__v_skip")&&Object.isExtensible(e)&&Is(e,"__v_skip",!0),e}const Ie=e=>re(e)?es(e):e,kt=e=>re(e)?ts(e):e;function fe(e){return e?e.__v_isRef===!0:!1}function se(e){return to(e,!1)}function tr(e){return to(e,!0)}function to(e,t){return fe(e)?e:new nr(e,t)}class nr{constructor(t,n){this.dep=new Yn,this.__v_isRef=!0,this.__v_isShallow=!1,this._rawValue=n?t:K(t),this._value=n?t:Ie(t),this.__v_isShallow=n}get value(){return this.dep.track(),this._value}set value(t){const n=this._rawValue,s=this.__v_isShallow||Ae(t)||Qe(t);t=s?t:K(t),it(t,n)&&(this._rawValue=t,this._value=s?t:Ie(t),this.dep.trigger())}}function no(e){return fe(e)?e.value:e}const sr={get:(e,t,n)=>t==="__v_raw"?e:no(Reflect.get(e,t,n)),set:(e,t,n,s)=>{const o=e[t];return fe(o)&&!fe(n)?(o.value=n,!0):Reflect.set(e,t,n,s)}};function so(e){return ht(e)?e:new Proxy(e,sr)}class or{constructor(t,n,s){this.fn=t,this.setter=n,this._value=void 0,this.dep=new Yn(this),this.__v_isRef=!0,this.deps=void 0,this.depsTail=void 0,this.flags=16,this.globalVersion=Dt-1,this.next=void 0,this.effect=this,this.__v_isReadonly=!n,this.isSSR=s}notify(){if(this.flags|=16,!(this.flags&8)&&ne!==this)return $s(this,!0),!0}get value(){const t=this.dep.track();return Hs(this),t&&(t.version=this.dep.version),this._value}set value(t){this.setter&&this.setter(t)}}function ir(e,t,n=!1){let s,o;return j(e)?s=e:(s=e.get,o=e.set),new or(s,o,n)}const dn={},pn=new WeakMap;let mt;function rr(e,t=!1,n=mt){if(n){let s=pn.get(n);s||pn.set(n,s=[]),s.push(e)}}function lr(e,t,n=te){const{immediate:s,deep:o,once:i,scheduler:r,augmentJob:l,call:c}=n,d=k=>o?k:Ae(k)||o===!1||o===0?lt(k,1):lt(k);let f,p,w,S,m=!1,g=!1;if(fe(e)?(p=()=>e.value,m=Ae(e)):ht(e)?(p=()=>d(e),m=!0):B(e)?(g=!0,m=e.some(k=>ht(k)||Ae(k)),p=()=>e.map(k=>{if(fe(k))return k.value;if(ht(k))return d(k);if(j(k))return c?c(k,2):k()})):j(e)?t?p=c?()=>c(e,2):e:p=()=>{if(w){Fe();try{w()}finally{Ne()}}const k=mt;mt=f;try{return c?c(e,3,[S]):e(S)}finally{mt=k}}:p=Oe,t&&o){const k=p,H=o===!0?1/0:o;p=()=>lt(k(),H)}const C=Oi(),M=()=>{f.stop(),C&&C.active&&Dn(C.effects,f)};if(i&&t){const k=t;t=(...H)=>{k(...H),M()}}let O=g?new Array(e.length).fill(dn):dn;const A=k=>{if(!(!(f.flags&1)||!f.dirty&&!k))if(t){const H=f.run();if(o||m||(g?H.some((U,N)=>it(U,O[N])):it(H,O))){w&&w();const U=mt;mt=f;try{const N=[H,O===dn?void 0:g&&O[0]===dn?[]:O,S];O=H,c?c(t,3,N):t(...N)}finally{mt=U}}}else f.run()};return l&&l(A),f=new Ns(p),f.scheduler=r?()=>r(A,!1):A,S=k=>rr(k,!1,f),w=f.onStop=()=>{const k=pn.get(f);if(k){if(c)c(k,4);else for(const H of k)H();pn.delete(f)}},t?s?A(!0):O=f.run():r?r(A.bind(null,!0),!0):f.run(),M.pause=f.pause.bind(f),M.resume=f.resume.bind(f),M.stop=M,M}function lt(e,t=1/0,n){if(t<=0||!re(e)||e.__v_skip||(n=n||new Map,(n.get(e)||0)>=t))return e;if(n.set(e,t),t--,fe(e))lt(e.value,t,n);else if(B(e))for(let s=0;s<e.length;s++)lt(e[s],t,n);else if(As(e)||_t(e))e.forEach(s=>{lt(s,t,n)});else if(Ms(e)){for(const s in e)lt(e[s],t,n);for(const s of Object.getOwnPropertySymbols(e))Object.prototype.propertyIsEnumerable.call(e,s)&&lt(e[s],t,n)}return e}/**
* @vue/runtime-core v3.5.27
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/const Bt=[];let ss=!1;function Af(e,...t){if(ss)return;ss=!0,Fe();const n=Bt.length?Bt[Bt.length-1].component:null,s=n&&n.appContext.config.warnHandler,o=ar();if(s)St(s,n,11,[e+t.map(i=>{var r,l;return(l=(r=i.toString)==null?void 0:r.call(i))!=null?l:JSON.stringify(i)}).join(""),n&&n.proxy,o.map(({vnode:i})=>`at <${ni(n,i.type)}>`).join(`
`),o]);else{const i=[`[Vue warn]: ${e}`,...t];o.length&&i.push(`
`,...cr(o)),console.warn(...i)}Ne(),ss=!1}function ar(){let e=Bt[Bt.length-1];if(!e)return[];const t=[];for(;e;){const n=t[0];n&&n.vnode===e?n.recurseCount++:t.push({vnode:e,recurseCount:0});const s=e.component&&e.component.parent;e=s&&s.vnode}return t}function cr(e){const t=[];return e.forEach((n,s)=>{t.push(...s===0?[]:[`
`],...fr(n))}),t}function fr({vnode:e,recurseCount:t}){const n=t>0?`... (${t} recursive calls)`:"",s=e.component?e.component.parent==null:!1,o=` at <${ni(e.component,e.type,s)}`,i=">"+n;return e.props?[o,...ur(e.props),i]:[o+i]}function ur(e){const t=[],n=Object.keys(e);return n.slice(0,3).forEach(s=>{t.push(...oo(s,e[s]))}),n.length>3&&t.push(" ..."),t}function oo(e,t,n){return le(t)?(t=JSON.stringify(t),n?t:[`${e}=${t}`]):typeof t=="number"||typeof t=="boolean"||t==null?n?t:[`${e}=${t}`]:fe(t)?(t=oo(e,K(t.value),!0),n?t:[`${e}=Ref<`,t,">"]):j(t)?[`${e}=fn${t.name?`<${t.name}>`:""}`]:(t=K(t),n?t:[`${e}=`,t])}function St(e,t,n,s){try{return s?e(...s):e()}catch(o){Ht(o,t,n)}}function De(e,t,n,s){if(j(e)){const o=St(e,t,n,s);return o&&Es(o)&&o.catch(i=>{Ht(i,t,n)}),o}if(B(e)){const o=[];for(let i=0;i<e.length;i++)o.push(De(e[i],t,n,s));return o}}function Ht(e,t,n,s=!0){const o=t?t.vnode:null,{errorHandler:i,throwUnhandledErrorInProduction:r}=t&&t.appContext.config||te;if(t){let l=t.parent;const c=t.proxy,d=`https://vuejs.org/error-reference/#runtime-${n}`;for(;l;){const f=l.ec;if(f){for(let p=0;p<f.length;p++)if(f[p](e,c,d)===!1)return}l=l.parent}if(i){Fe(),St(i,null,10,[e,c,d]),Ne();return}}dr(e,n,o,s,r)}function dr(e,t,n,s=!0,o=!1){if(o)throw e;console.error(e)}const he=[];let $e=-1;const zt=[];let at=null,Tt=0;const io=Promise.resolve();let vn=null;function pr(e){const t=vn||io;return e?t.then(this?e.bind(this):e):t}function vr(e){let t=$e+1,n=he.length;for(;t<n;){const s=t+n>>>1,o=he[s],i=Ut(o);i<e||i===e&&o.flags&2?t=s+1:n=s}return t}function os(e){if(!(e.flags&1)){const t=Ut(e),n=he[he.length-1];!n||!(e.flags&2)&&t>=Ut(n)?he.push(e):he.splice(vr(t),0,e),e.flags|=1,ro()}}function ro(){vn||(vn=io.then(co))}function hr(e){B(e)?zt.push(...e):at&&e.id===-1?at.splice(Tt+1,0,e):e.flags&1||(zt.push(e),e.flags|=1),ro()}function lo(e,t,n=$e+1){for(;n<he.length;n++){const s=he[n];if(s&&s.flags&2){if(e&&s.id!==e.uid)continue;he.splice(n,1),n--,s.flags&4&&(s.flags&=-2),s(),s.flags&4||(s.flags&=-2)}}}function ao(e){if(zt.length){const t=[...new Set(zt)].sort((n,s)=>Ut(n)-Ut(s));if(zt.length=0,at){at.push(...t);return}for(at=t,Tt=0;Tt<at.length;Tt++){const n=at[Tt];n.flags&4&&(n.flags&=-2),n.flags&8||n(),n.flags&=-2}at=null,Tt=0}}const Ut=e=>e.id==null?e.flags&2?-1:1/0:e.id;function co(e){try{for($e=0;$e<he.length;$e++){const t=he[$e];t&&!(t.flags&8)&&(t.flags&4&&(t.flags&=-2),St(t,t.i,t.i?15:14),t.flags&4||(t.flags&=-2))}}finally{for(;$e<he.length;$e++){const t=he[$e];t&&(t.flags&=-2)}$e=-1,he.length=0,ao(),vn=null,(he.length||zt.length)&&co()}}let je=null,fo=null;function hn(e){const t=je;return je=e,fo=e&&e.type.__scopeId||null,t}function mr(e,t=je,n){if(!t||e._n)return e;const s=(...o)=>{s._d&&Ko(-1);const i=hn(t);let r;try{r=e(...o)}finally{hn(i),s._d&&Ko(1)}return r};return s._n=!0,s._c=!0,s._d=!0,s}function gt(e,t,n,s){const o=e.dirs,i=t&&t.dirs;for(let r=0;r<o.length;r++){const l=o[r];i&&(l.oldValue=i[r].value);let c=l.dir[s];c&&(Fe(),De(c,n,8,[e.el,l,e,t]),Ne())}}function gr(e,t){if(ve){let n=ve.provides;const s=ve.parent&&ve.parent.provides;s===n&&(n=ve.provides=Object.create(s)),n[e]=t}}function mn(e,t,n=!1){const s=bl();if(s||Et){let o=Et?Et._context.provides:s?s.parent==null||s.ce?s.vnode.appContext&&s.vnode.appContext.provides:s.parent.provides:void 0;if(o&&e in o)return o[e];if(arguments.length>1)return n&&j(t)?t.call(s&&s.proxy):t}}const br=Symbol.for("v-scx"),xr=()=>mn(br);function gn(e,t,n){return uo(e,t,n)}function uo(e,t,n=te){const{immediate:s,deep:o,flush:i,once:r}=n,l=ce({},n),c=t&&s||!t&&i!=="post";let d;if(Mt){if(i==="sync"){const S=xr();d=S.__watcherHandles||(S.__watcherHandles=[])}else if(!c){const S=()=>{};return S.stop=Oe,S.resume=Oe,S.pause=Oe,S}}const f=ve;l.call=(S,m,g)=>De(S,f,m,g);let p=!1;i==="post"?l.scheduler=S=>{ge(S,f&&f.suspense)}:i!=="sync"&&(p=!0,l.scheduler=(S,m)=>{m?S():os(S)}),l.augmentJob=S=>{t&&(S.flags|=4),p&&(S.flags|=2,f&&(S.id=f.uid,S.i=f))};const w=lr(e,t,l);return Mt&&(d?d.push(w):c&&w()),w}function yr(e,t,n){const s=this.proxy,o=le(e)?e.includes(".")?po(s,e):()=>s[e]:e.bind(s,s);let i;j(t)?i=t:(i=t.handler,n=t);const r=en(this),l=uo(o,i.bind(s),n);return r(),l}function po(e,t){const n=t.split(".");return()=>{let s=e;for(let o=0;o<n.length&&s;o++)s=s[n[o]];return s}}const vo=Symbol("_vte"),_r=e=>e.__isTeleport,Gt=e=>e&&(e.disabled||e.disabled===""),ho=e=>e&&(e.defer||e.defer===""),mo=e=>typeof SVGElement<"u"&&e instanceof SVGElement,go=e=>typeof MathMLElement=="function"&&e instanceof MathMLElement,is=(e,t)=>{const n=e&&e.to;return le(n)?t?t(n):null:n},bo={name:"Teleport",__isTeleport:!0,process(e,t,n,s,o,i,r,l,c,d){const{mc:f,pc:p,pbc:w,o:{insert:S,querySelector:m,createText:g,createComment:C}}=d,M=Gt(t.props);let{shapeFlag:O,children:A,dynamicChildren:k}=t;if(e==null){const H=t.el=g(""),U=t.anchor=g("");S(H,n,s),S(U,n,s);const N=(q,Q)=>{O&16&&f(A,q,Q,o,i,r,l,c)},Y=()=>{const q=t.target=is(t.props,m),Q=xo(q,t,g,S);q&&(r!=="svg"&&mo(q)?r="svg":r!=="mathml"&&go(q)&&(r="mathml"),o&&o.isCE&&(o.ce._teleportTargets||(o.ce._teleportTargets=new Set)).add(q),M||(N(q,Q),xn(t,!1)))};M&&(N(n,U),xn(t,!0)),ho(t.props)?(t.el.__isMounted=!1,ge(()=>{Y(),delete t.el.__isMounted},i)):Y()}else{if(ho(t.props)&&e.el.__isMounted===!1){ge(()=>{bo.process(e,t,n,s,o,i,r,l,c,d)},i);return}t.el=e.el,t.targetStart=e.targetStart;const H=t.anchor=e.anchor,U=t.target=e.target,N=t.targetAnchor=e.targetAnchor,Y=Gt(e.props),q=Y?n:U,Q=Y?H:N;if(r==="svg"||mo(U)?r="svg":(r==="mathml"||go(U))&&(r="mathml"),k?(w(e.dynamicChildren,k,q,o,i,r,l),gs(e,t,!0)):c||p(e,t,q,Q,o,i,r,l,!1),M)Y?t.props&&e.props&&t.props.to!==e.props.to&&(t.props.to=e.props.to):bn(t,n,H,d,1);else if((t.props&&t.props.to)!==(e.props&&e.props.to)){const ue=t.target=is(t.props,m);ue&&bn(t,ue,null,d,0)}else Y&&bn(t,U,N,d,1);xn(t,M)}},remove(e,t,n,{um:s,o:{remove:o}},i){const{shapeFlag:r,children:l,anchor:c,targetStart:d,targetAnchor:f,target:p,props:w}=e;if(p&&(o(d),o(f)),i&&o(c),r&16){const S=i||!Gt(w);for(let m=0;m<l.length;m++){const g=l[m];s(g,t,n,S,!!g.dynamicChildren)}}},move:bn,hydrate:wr};function bn(e,t,n,{o:{insert:s},m:o},i=2){i===0&&s(e.targetAnchor,t,n);const{el:r,anchor:l,shapeFlag:c,children:d,props:f}=e,p=i===2;if(p&&s(r,t,n),(!p||Gt(f))&&c&16)for(let w=0;w<d.length;w++)o(d[w],t,n,2);p&&s(l,t,n)}function wr(e,t,n,s,o,i,{o:{nextSibling:r,parentNode:l,querySelector:c,insert:d,createText:f}},p){function w(g,C,M,O){C.anchor=p(r(g),C,l(g),n,s,o,i),C.targetStart=M,C.targetAnchor=O}const S=t.target=is(t.props,c),m=Gt(t.props);if(S){const g=S._lpa||S.firstChild;if(t.shapeFlag&16)if(m)w(e,t,g,g&&r(g));else{t.anchor=r(e);let C=g;for(;C;){if(C&&C.nodeType===8){if(C.data==="teleport start anchor")t.targetStart=C;else if(C.data==="teleport anchor"){t.targetAnchor=C,S._lpa=t.targetAnchor&&r(t.targetAnchor);break}}C=r(C)}t.targetAnchor||xo(S,t,f,d),p(g&&r(g),t,S,n,s,o,i)}xn(t,m)}else m&&t.shapeFlag&16&&w(e,t,e,r(e));return t.anchor&&r(t.anchor)}const kr=bo;function xn(e,t){const n=e.ctx;if(n&&n.ut){let s,o;for(t?(s=e.el,o=e.anchor):(s=e.targetStart,o=e.targetAnchor);s&&s!==o;)s.nodeType===1&&s.setAttribute("data-v-owner",n.uid),s=s.nextSibling;n.ut()}}function xo(e,t,n,s){const o=t.targetStart=n(""),i=t.targetAnchor=n("");return o[vo]=i,e&&(s(o,e),s(i,e)),i}const Sr=Symbol("_leaveCb");function rs(e,t){e.shapeFlag&6&&e.component?(e.transition=t,rs(e.component.subTree,t)):e.shapeFlag&128?(e.ssContent.transition=t.clone(e.ssContent),e.ssFallback.transition=t.clone(e.ssFallback)):e.transition=t}function Vt(e,t){return j(e)?ce({name:e.name},t,{setup:e}):e}function ls(e){e.ids=[e.ids[0]+e.ids[2]+++"-",0,0]}const yn=new WeakMap;function Wt(e,t,n,s,o=!1){if(B(e)){e.forEach((m,g)=>Wt(m,t&&(B(t)?t[g]:t),n,s,o));return}if(Kt(s)&&!o){s.shapeFlag&512&&s.type.__asyncResolved&&s.component.subTree.component&&Wt(e,t,n,s.component.subTree);return}const i=s.shapeFlag&4?_s(s.component):s.el,r=o?null:i,{i:l,r:c}=e,d=t&&t.r,f=l.refs===te?l.refs={}:l.refs,p=l.setupState,w=K(p),S=p===te?Ts:m=>J(w,m);if(d!=null&&d!==c){if(yo(t),le(d))f[d]=null,S(d)&&(p[d]=null);else if(fe(d)){d.value=null;const m=t;m.k&&(f[m.k]=null)}}if(j(c))St(c,l,12,[r,f]);else{const m=le(c),g=fe(c);if(m||g){const C=()=>{if(e.f){const M=m?S(c)?p[c]:f[c]:c.value;if(o)B(M)&&Dn(M,i);else if(B(M))M.includes(i)||M.push(i);else if(m)f[c]=[i],S(c)&&(p[c]=f[c]);else{const O=[i];c.value=O,e.k&&(f[e.k]=O)}}else m?(f[c]=r,S(c)&&(p[c]=r)):g&&(c.value=r,e.k&&(f[e.k]=r))};if(r){const M=()=>{C(),yn.delete(e)};M.id=-1,yn.set(e,M),ge(M,n)}else yo(e),C()}}}function yo(e){const t=yn.get(e);t&&(t.flags|=8,yn.delete(e))}const _o=e=>e.nodeType===8;rn().requestIdleCallback,rn().cancelIdleCallback;function zr(e,t){if(_o(e)&&e.data==="["){let n=1,s=e.nextSibling;for(;s;){if(s.nodeType===1){if(t(s)===!1)break}else if(_o(s))if(s.data==="]"){if(--n===0)break}else s.data==="["&&n++;s=s.nextSibling}}else t(e)}const Kt=e=>!!e.type.__asyncLoader;function Tr(e){j(e)&&(e={loader:e});const{loader:t,loadingComponent:n,errorComponent:s,delay:o=200,hydrate:i,timeout:r,suspensible:l=!0,onError:c}=e;let d=null,f,p=0;const w=()=>(p++,d=null,S()),S=()=>{let m;return d||(m=d=t().catch(g=>{if(g=g instanceof Error?g:new Error(String(g)),c)return new Promise((C,M)=>{c(g,()=>C(w()),()=>M(g),p+1)});throw g}).then(g=>m!==d&&d?d:(g&&(g.__esModule||g[Symbol.toStringTag]==="Module")&&(g=g.default),f=g,g)))};return Vt({name:"AsyncComponentWrapper",__asyncLoader:S,__asyncHydrate(m,g,C){let M=!1;(g.bu||(g.bu=[])).push(()=>M=!0);const O=()=>{M||C()},A=i?()=>{const k=i(O,H=>zr(m,H));k&&(g.bum||(g.bum=[])).push(k)}:O;f?A():S().then(()=>!g.isUnmounted&&A())},get __asyncResolved(){return f},setup(){const m=ve;if(ls(m),f)return()=>_n(f,m);const g=A=>{d=null,Ht(A,m,13,!s)};if(l&&m.suspense||Mt)return S().then(A=>()=>_n(A,m)).catch(A=>(g(A),()=>s?be(s,{error:A}):null));const C=se(!1),M=se(),O=se(!!o);return o&&setTimeout(()=>{O.value=!1},o),r!=null&&setTimeout(()=>{if(!C.value&&!M.value){const A=new Error(`Async component timed out after ${r}ms.`);g(A),M.value=A}},r),S().then(()=>{C.value=!0,m.parent&&as(m.parent.vnode)&&m.parent.update()}).catch(A=>{g(A),M.value=A}),()=>{if(C.value&&f)return _n(f,m);if(M.value&&s)return be(s,{error:M.value});if(n&&!O.value)return _n(n,m)}}})}function _n(e,t){const{ref:n,props:s,children:o,ce:i}=t.vnode,r=be(e,s,o);return r.ref=n,r.ce=i,delete t.vnode.ce,r}const as=e=>e.type.__isKeepAlive;function Ar(e,t){wo(e,"a",t)}function Er(e,t){wo(e,"da",t)}function wo(e,t,n=ve){const s=e.__wdc||(e.__wdc=()=>{let o=n;for(;o;){if(o.isDeactivated)return;o=o.parent}return e()});if(wn(t,s,n),n){let o=n.parent;for(;o&&o.parent;)as(o.parent.vnode)&&Cr(s,t,n,o),o=o.parent}}function Cr(e,t,n,s){const o=wn(t,e,s,!0);At(()=>{Dn(s[t],o)},n)}function wn(e,t,n=ve,s=!1){if(n){const o=n[e]||(n[e]=[]),i=t.__weh||(t.__weh=(...r)=>{Fe();const l=en(n),c=De(t,n,e,r);return l(),Ne(),c});return s?o.unshift(i):o.push(i),i}}const et=e=>(t,n=ve)=>{(!Mt||e==="sp")&&wn(e,(...s)=>t(...s),n)},Mr=et("bm"),Yt=et("m"),Rr=et("bu"),Ir=et("u"),Pr=et("bum"),At=et("um"),Or=et("sp"),Lr=et("rtg"),Fr=et("rtc");function Nr(e,t=ve){wn("ec",e,t)}const Dr=Symbol.for("v-ndc");function ko(e,t,n,s){let o;const i=n,r=B(e);if(r||le(e)){const l=r&&ht(e);let c=!1,d=!1;l&&(c=!Ae(e),d=Qe(e),e=ln(e)),o=new Array(e.length);for(let f=0,p=e.length;f<p;f++)o[f]=t(c?d?kt(Ie(e[f])):Ie(e[f]):e[f],f,void 0,i)}else if(typeof e=="number"){o=new Array(e);for(let l=0;l<e;l++)o[l]=t(l+1,l,void 0,i)}else if(re(e))if(e[Symbol.iterator])o=Array.from(e,(l,c)=>t(l,c,void 0,i));else{const l=Object.keys(e);o=new Array(l.length);for(let c=0,d=l.length;c<d;c++){const f=l[c];o[c]=t(e[f],f,c,i)}}else o=[];return o}const cs=e=>e?Qo(e)?_s(e):cs(e.parent):null,qt=ce(Object.create(null),{$:e=>e,$el:e=>e.vnode.el,$data:e=>e.data,$props:e=>e.props,$attrs:e=>e.attrs,$slots:e=>e.slots,$refs:e=>e.refs,$parent:e=>cs(e.parent),$root:e=>cs(e.root),$host:e=>e.ce,$emit:e=>e.emit,$options:e=>Ao(e),$forceUpdate:e=>e.f||(e.f=()=>{os(e.update)}),$nextTick:e=>e.n||(e.n=pr.bind(e.proxy)),$watch:e=>yr.bind(e)}),fs=(e,t)=>e!==te&&!e.__isScriptSetup&&J(e,t),$r={get({_:e},t){if(t==="__v_skip")return!0;const{ctx:n,setupState:s,data:o,props:i,accessCache:r,type:l,appContext:c}=e;if(t[0]!=="$"){const w=r[t];if(w!==void 0)switch(w){case 1:return s[t];case 2:return o[t];case 4:return n[t];case 3:return i[t]}else{if(fs(s,t))return r[t]=1,s[t];if(o!==te&&J(o,t))return r[t]=2,o[t];if(J(i,t))return r[t]=3,i[t];if(n!==te&&J(n,t))return r[t]=4,n[t];us&&(r[t]=0)}}const d=qt[t];let f,p;if(d)return t==="$attrs"&&de(e.attrs,"get",""),d(e);if((f=l.__cssModules)&&(f=f[t]))return f;if(n!==te&&J(n,t))return r[t]=4,n[t];if(p=c.config.globalProperties,J(p,t))return p[t]},set({_:e},t,n){const{data:s,setupState:o,ctx:i}=e;return fs(o,t)?(o[t]=n,!0):s!==te&&J(s,t)?(s[t]=n,!0):J(e.props,t)||t[0]==="$"&&t.slice(1)in e?!1:(i[t]=n,!0)},has({_:{data:e,setupState:t,accessCache:n,ctx:s,appContext:o,props:i,type:r}},l){let c;return!!(n[l]||e!==te&&l[0]!=="$"&&J(e,l)||fs(t,l)||J(i,l)||J(s,l)||J(qt,l)||J(o.config.globalProperties,l)||(c=r.__cssModules)&&c[l])},defineProperty(e,t,n){return n.get!=null?e._.accessCache[t]=0:J(n,"value")&&this.set(e,t,n.value,null),Reflect.defineProperty(e,t,n)}};function So(e){return B(e)?e.reduce((t,n)=>(t[n]=null,t),{}):e}let us=!0;function jr(e){const t=Ao(e),n=e.proxy,s=e.ctx;us=!1,t.beforeCreate&&zo(t.beforeCreate,e,"bc");const{data:o,computed:i,methods:r,watch:l,provide:c,inject:d,created:f,beforeMount:p,mounted:w,beforeUpdate:S,updated:m,activated:g,deactivated:C,beforeDestroy:M,beforeUnmount:O,destroyed:A,unmounted:k,render:H,renderTracked:U,renderTriggered:N,errorCaptured:Y,serverPrefetch:q,expose:Q,inheritAttrs:ue,components:Pe,directives:Ce,filters:nt}=t;if(d&&Br(d,s,null),r)for(const X in r){const Z=r[X];j(Z)&&(s[X]=Z.bind(n))}if(o){const X=o.call(n,n);re(X)&&(e.data=es(X))}if(us=!0,i)for(const X in i){const Z=i[X],Se=j(Z)?Z.bind(n,n):j(Z.get)?Z.get.bind(n,n):Oe,Ve=!j(Z)&&j(Z.set)?Z.set.bind(n):Oe,I=W({get:Se,set:Ve});Object.defineProperty(s,X,{enumerable:!0,configurable:!0,get:()=>I.value,set:D=>I.value=D})}if(l)for(const X in l)To(l[X],s,n,X);if(c){const X=j(c)?c.call(n):c;Reflect.ownKeys(X).forEach(Z=>{gr(Z,X[Z])})}f&&zo(f,e,"c");function ae(X,Z){B(Z)?Z.forEach(Se=>X(Se.bind(n))):Z&&X(Z.bind(n))}if(ae(Mr,p),ae(Yt,w),ae(Rr,S),ae(Ir,m),ae(Ar,g),ae(Er,C),ae(Nr,Y),ae(Fr,U),ae(Lr,N),ae(Pr,O),ae(At,k),ae(Or,q),B(Q))if(Q.length){const X=e.exposed||(e.exposed={});Q.forEach(Z=>{Object.defineProperty(X,Z,{get:()=>n[Z],set:Se=>n[Z]=Se,enumerable:!0})})}else e.exposed||(e.exposed={});H&&e.render===Oe&&(e.render=H),ue!=null&&(e.inheritAttrs=ue),Pe&&(e.components=Pe),Ce&&(e.directives=Ce),q&&ls(e)}function Br(e,t,n=Oe){B(e)&&(e=ds(e));for(const s in e){const o=e[s];let i;re(o)?"default"in o?i=mn(o.from||s,o.default,!0):i=mn(o.from||s):i=mn(o),fe(i)?Object.defineProperty(t,s,{enumerable:!0,configurable:!0,get:()=>i.value,set:r=>i.value=r}):t[s]=i}}function zo(e,t,n){De(B(e)?e.map(s=>s.bind(t.proxy)):e.bind(t.proxy),t,n)}function To(e,t,n,s){let o=s.includes(".")?po(n,s):()=>n[s];if(le(e)){const i=t[e];j(i)&&gn(o,i)}else if(j(e))gn(o,e.bind(n));else if(re(e))if(B(e))e.forEach(i=>To(i,t,n,s));else{const i=j(e.handler)?e.handler.bind(n):t[e.handler];j(i)&&gn(o,i,e)}}function Ao(e){const t=e.type,{mixins:n,extends:s}=t,{mixins:o,optionsCache:i,config:{optionMergeStrategies:r}}=e.appContext,l=i.get(t);let c;return l?c=l:!o.length&&!n&&!s?c=t:(c={},o.length&&o.forEach(d=>kn(c,d,r,!0)),kn(c,t,r)),re(t)&&i.set(t,c),c}function kn(e,t,n,s=!1){const{mixins:o,extends:i}=t;i&&kn(e,i,n,!0),o&&o.forEach(r=>kn(e,r,n,!0));for(const r in t)if(!(s&&r==="expose")){const l=Hr[r]||n&&n[r];e[r]=l?l(e[r],t[r]):t[r]}return e}const Hr={data:Eo,props:Co,emits:Co,methods:Xt,computed:Xt,beforeCreate:me,created:me,beforeMount:me,mounted:me,beforeUpdate:me,updated:me,beforeDestroy:me,beforeUnmount:me,destroyed:me,unmounted:me,activated:me,deactivated:me,errorCaptured:me,serverPrefetch:me,components:Xt,directives:Xt,watch:Gr,provide:Eo,inject:Ur};function Eo(e,t){return t?e?function(){return ce(j(e)?e.call(this,this):e,j(t)?t.call(this,this):t)}:t:e}function Ur(e,t){return Xt(ds(e),ds(t))}function ds(e){if(B(e)){const t={};for(let n=0;n<e.length;n++)t[e[n]]=e[n];return t}return e}function me(e,t){return e?[...new Set([].concat(e,t))]:t}function Xt(e,t){return e?ce(Object.create(null),e,t):t}function Co(e,t){return e?B(e)&&B(t)?[...new Set([...e,...t])]:ce(Object.create(null),So(e),So(t??{})):t}function Gr(e,t){if(!e)return t;if(!t)return e;const n=ce(Object.create(null),e);for(const s in t)n[s]=me(e[s],t[s]);return n}function Mo(){return{app:null,config:{isNativeTag:Ts,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let Vr=0;function Wr(e,t){return function(s,o=null){j(s)||(s=ce({},s)),o!=null&&!re(o)&&(o=null);const i=Mo(),r=new WeakSet,l=[];let c=!1;const d=i.app={_uid:Vr++,_component:s,_props:o,_container:null,_context:i,_instance:null,version:Al,get config(){return i.config},set config(f){},use(f,...p){return r.has(f)||(f&&j(f.install)?(r.add(f),f.install(d,...p)):j(f)&&(r.add(f),f(d,...p))),d},mixin(f){return i.mixins.includes(f)||i.mixins.push(f),d},component(f,p){return p?(i.components[f]=p,d):i.components[f]},directive(f,p){return p?(i.directives[f]=p,d):i.directives[f]},mount(f,p,w){if(!c){const S=d._ceVNode||be(s,o);return S.appContext=i,w===!0?w="svg":w===!1&&(w=void 0),e(S,f,w),c=!0,d._container=f,f.__vue_app__=d,_s(S.component)}},onUnmount(f){l.push(f)},unmount(){c&&(De(l,d._instance,16),e(null,d._container),delete d._container.__vue_app__)},provide(f,p){return i.provides[f]=p,d},runWithContext(f){const p=Et;Et=d;try{return f()}finally{Et=p}}};return d}}let Et=null;const Kr=(e,t)=>t==="modelValue"||t==="model-value"?e.modelModifiers:e[`${t}Modifiers`]||e[`${ot(t)}Modifiers`]||e[`${pt(t)}Modifiers`];function Yr(e,t,...n){if(e.isUnmounted)return;const s=e.vnode.props||te;let o=n;const i=t.startsWith("update:"),r=i&&Kr(s,t.slice(7));r&&(r.trim&&(o=n.map(f=>le(f)?f.trim():f)),r.number&&(o=n.map(Ai)));let l,c=s[l=jn(t)]||s[l=jn(ot(t))];!c&&i&&(c=s[l=jn(pt(t))]),c&&De(c,e,6,o);const d=s[l+"Once"];if(d){if(!e.emitted)e.emitted={};else if(e.emitted[l])return;e.emitted[l]=!0,De(d,e,6,o)}}const qr=new WeakMap;function Ro(e,t,n=!1){const s=n?qr:t.emitsCache,o=s.get(e);if(o!==void 0)return o;const i=e.emits;let r={},l=!1;if(!j(e)){const c=d=>{const f=Ro(d,t,!0);f&&(l=!0,ce(r,f))};!n&&t.mixins.length&&t.mixins.forEach(c),e.extends&&c(e.extends),e.mixins&&e.mixins.forEach(c)}return!i&&!l?(re(e)&&s.set(e,null),null):(B(i)?i.forEach(c=>r[c]=null):ce(r,i),re(e)&&s.set(e,r),r)}function Sn(e,t){return!e||!nn(t)?!1:(t=t.slice(2).replace(/Once$/,""),J(e,t[0].toLowerCase()+t.slice(1))||J(e,pt(t))||J(e,t))}function Ef(){}function Io(e){const{type:t,vnode:n,proxy:s,withProxy:o,propsOptions:[i],slots:r,attrs:l,emit:c,render:d,renderCache:f,props:p,data:w,setupState:S,ctx:m,inheritAttrs:g}=e,C=hn(e);let M,O;try{if(n.shapeFlag&4){const k=o||s,H=k;M=Be(d.call(H,k,f,p,S,w,m)),O=l}else{const k=t;M=Be(k.length>1?k(p,{attrs:l,slots:r,emit:c}):k(p,null)),O=t.props?l:Xr(l)}}catch(k){Jt.length=0,Ht(k,e,1),M=be(ct)}let A=M;if(O&&g!==!1){const k=Object.keys(O),{shapeFlag:H}=A;k.length&&H&7&&(i&&k.some(Nn)&&(O=Jr(O,i)),A=Ct(A,O,!1,!0))}return n.dirs&&(A=Ct(A,null,!1,!0),A.dirs=A.dirs?A.dirs.concat(n.dirs):n.dirs),n.transition&&rs(A,n.transition),M=A,hn(C),M}const Xr=e=>{let t;for(const n in e)(n==="class"||n==="style"||nn(n))&&((t||(t={}))[n]=e[n]);return t},Jr=(e,t)=>{const n={};for(const s in e)(!Nn(s)||!(s.slice(9)in t))&&(n[s]=e[s]);return n};function Zr(e,t,n){const{props:s,children:o,component:i}=e,{props:r,children:l,patchFlag:c}=t,d=i.emitsOptions;if(t.dirs||t.transition)return!0;if(n&&c>=0){if(c&1024)return!0;if(c&16)return s?Po(s,r,d):!!r;if(c&8){const f=t.dynamicProps;for(let p=0;p<f.length;p++){const w=f[p];if(r[w]!==s[w]&&!Sn(d,w))return!0}}}else return(o||l)&&(!l||!l.$stable)?!0:s===r?!1:s?r?Po(s,r,d):!0:!!r;return!1}function Po(e,t,n){const s=Object.keys(t);if(s.length!==Object.keys(e).length)return!0;for(let o=0;o<s.length;o++){const i=s[o];if(t[i]!==e[i]&&!Sn(n,i))return!0}return!1}function Qr({vnode:e,parent:t},n){for(;t;){const s=t.subTree;if(s.suspense&&s.suspense.activeBranch===e&&(s.el=e.el),s===e)(e=t.vnode).el=n,t=t.parent;else break}}const Oo={},Lo=()=>Object.create(Oo),Fo=e=>Object.getPrototypeOf(e)===Oo;function el(e,t,n,s=!1){const o={},i=Lo();e.propsDefaults=Object.create(null),No(e,t,o,i);for(const r in e.propsOptions[0])r in o||(o[r]=void 0);n?e.props=s?o:Qi(o):e.type.props?e.props=o:e.props=i,e.attrs=i}function tl(e,t,n,s){const{props:o,attrs:i,vnode:{patchFlag:r}}=e,l=K(o),[c]=e.propsOptions;let d=!1;if((s||r>0)&&!(r&16)){if(r&8){const f=e.vnode.dynamicProps;for(let p=0;p<f.length;p++){let w=f[p];if(Sn(e.emitsOptions,w))continue;const S=t[w];if(c)if(J(i,w))S!==i[w]&&(i[w]=S,d=!0);else{const m=ot(w);o[m]=ps(c,l,m,S,e,!1)}else S!==i[w]&&(i[w]=S,d=!0)}}}else{No(e,t,o,i)&&(d=!0);let f;for(const p in l)(!t||!J(t,p)&&((f=pt(p))===p||!J(t,f)))&&(c?n&&(n[p]!==void 0||n[f]!==void 0)&&(o[p]=ps(c,l,p,void 0,e,!0)):delete o[p]);if(i!==l)for(const p in i)(!t||!J(t,p))&&(delete i[p],d=!0)}d&&Je(e.attrs,"set","")}function No(e,t,n,s){const[o,i]=e.propsOptions;let r=!1,l;if(t)for(let c in t){if(Ot(c))continue;const d=t[c];let f;o&&J(o,f=ot(c))?!i||!i.includes(f)?n[f]=d:(l||(l={}))[f]=d:Sn(e.emitsOptions,c)||(!(c in s)||d!==s[c])&&(s[c]=d,r=!0)}if(i){const c=K(n),d=l||te;for(let f=0;f<i.length;f++){const p=i[f];n[p]=ps(o,c,p,d[p],e,!J(d,p))}}return r}function ps(e,t,n,s,o,i){const r=e[n];if(r!=null){const l=J(r,"default");if(l&&s===void 0){const c=r.default;if(r.type!==Function&&!r.skipFactory&&j(c)){const{propsDefaults:d}=o;if(n in d)s=d[n];else{const f=en(o);s=d[n]=c.call(null,t),f()}}else s=c;o.ce&&o.ce._setProp(n,s)}r[0]&&(i&&!l?s=!1:r[1]&&(s===""||s===pt(n))&&(s=!0))}return s}const nl=new WeakMap;function Do(e,t,n=!1){const s=n?nl:t.propsCache,o=s.get(e);if(o)return o;const i=e.props,r={},l=[];let c=!1;if(!j(e)){const f=p=>{c=!0;const[w,S]=Do(p,t,!0);ce(r,w),S&&l.push(...S)};!n&&t.mixins.length&&t.mixins.forEach(f),e.extends&&f(e.extends),e.mixins&&e.mixins.forEach(f)}if(!i&&!c)return re(e)&&s.set(e,yt),yt;if(B(i))for(let f=0;f<i.length;f++){const p=ot(i[f]);$o(p)&&(r[p]=te)}else if(i)for(const f in i){const p=ot(f);if($o(p)){const w=i[f],S=r[p]=B(w)||j(w)?{type:w}:ce({},w),m=S.type;let g=!1,C=!0;if(B(m))for(let M=0;M<m.length;++M){const O=m[M],A=j(O)&&O.name;if(A==="Boolean"){g=!0;break}else A==="String"&&(C=!1)}else g=j(m)&&m.name==="Boolean";S[0]=g,S[1]=C,(g||J(S,"default"))&&l.push(p)}}const d=[r,l];return re(e)&&s.set(e,d),d}function $o(e){return e[0]!=="$"&&!Ot(e)}const vs=e=>e==="_"||e==="_ctx"||e==="$stable",hs=e=>B(e)?e.map(Be):[Be(e)],sl=(e,t,n)=>{if(t._n)return t;const s=mr((...o)=>hs(t(...o)),n);return s._c=!1,s},jo=(e,t,n)=>{const s=e._ctx;for(const o in e){if(vs(o))continue;const i=e[o];if(j(i))t[o]=sl(o,i,s);else if(i!=null){const r=hs(i);t[o]=()=>r}}},Bo=(e,t)=>{const n=hs(t);e.slots.default=()=>n},Ho=(e,t,n)=>{for(const s in t)(n||!vs(s))&&(e[s]=t[s])},ol=(e,t,n)=>{const s=e.slots=Lo();if(e.vnode.shapeFlag&32){const o=t._;o?(Ho(s,t,n),n&&Is(s,"_",o,!0)):jo(t,s)}else t&&Bo(e,t)},il=(e,t,n)=>{const{vnode:s,slots:o}=e;let i=!0,r=te;if(s.shapeFlag&32){const l=t._;l?n&&l===1?i=!1:Ho(o,t,n):(i=!t.$stable,jo(t,o)),r=t}else t&&(Bo(e,t),r={default:1});if(i)for(const l in o)!vs(l)&&r[l]==null&&delete o[l]},ge=fl;function rl(e){return ll(e)}function ll(e,t){const n=rn();n.__VUE__=!0;const{insert:s,remove:o,patchProp:i,createElement:r,createText:l,createComment:c,setText:d,setElementText:f,parentNode:p,nextSibling:w,setScopeId:S=Oe,insertStaticContent:m}=e,g=(a,u,v,_=null,b=null,x=null,E=void 0,T=null,z=!!u.dynamicChildren)=>{if(a===u)return;a&&!Qt(a,u)&&(_=xt(a),D(a,b,x,!0),a=null),u.patchFlag===-2&&(z=!1,u.dynamicChildren=null);const{type:y,ref:F,shapeFlag:R}=u;switch(y){case zn:C(a,u,v,_);break;case ct:M(a,u,v,_);break;case Tn:a==null&&O(u,v,_,E);break;case Ee:Pe(a,u,v,_,b,x,E,T,z);break;default:R&1?H(a,u,v,_,b,x,E,T,z):R&6?Ce(a,u,v,_,b,x,E,T,z):(R&64||R&128)&&y.process(a,u,v,_,b,x,E,T,z,Ke)}F!=null&&b?Wt(F,a&&a.ref,x,u||a,!u):F==null&&a&&a.ref!=null&&Wt(a.ref,null,x,a,!0)},C=(a,u,v,_)=>{if(a==null)s(u.el=l(u.children),v,_);else{const b=u.el=a.el;u.children!==a.children&&d(b,u.children)}},M=(a,u,v,_)=>{a==null?s(u.el=c(u.children||""),v,_):u.el=a.el},O=(a,u,v,_)=>{[a.el,a.anchor]=m(a.children,u,v,_,a.el,a.anchor)},A=({el:a,anchor:u},v,_)=>{let b;for(;a&&a!==u;)b=w(a),s(a,v,_),a=b;s(u,v,_)},k=({el:a,anchor:u})=>{let v;for(;a&&a!==u;)v=w(a),o(a),a=v;o(u)},H=(a,u,v,_,b,x,E,T,z)=>{if(u.type==="svg"?E="svg":u.type==="math"&&(E="mathml"),a==null)U(u,v,_,b,x,E,T,z);else{const y=a.el&&a.el._isVueCE?a.el:null;try{y&&y._beginPatch(),q(a,u,b,x,E,T,z)}finally{y&&y._endPatch()}}},U=(a,u,v,_,b,x,E,T)=>{let z,y;const{props:F,shapeFlag:R,transition:L,dirs:$}=a;if(z=a.el=r(a.type,x,F&&F.is,F),R&8?f(z,a.children):R&16&&Y(a.children,z,null,_,b,ms(a,x),E,T),$&&gt(a,null,_,"created"),N(z,a,a.scopeId,E,_),F){for(const oe in F)oe!=="value"&&!Ot(oe)&&i(z,oe,null,F[oe],x,_);"value"in F&&i(z,"value",null,F.value,x),(y=F.onVnodeBeforeMount)&&He(y,_,a)}$&&gt(a,null,_,"beforeMount");const V=al(b,L);V&&L.beforeEnter(z),s(z,u,v),((y=F&&F.onVnodeMounted)||V||$)&&ge(()=>{y&&He(y,_,a),V&&L.enter(z),$&&gt(a,null,_,"mounted")},b)},N=(a,u,v,_,b)=>{if(v&&S(a,v),_)for(let x=0;x<_.length;x++)S(a,_[x]);if(b){let x=b.subTree;if(u===x||Wo(x.type)&&(x.ssContent===u||x.ssFallback===u)){const E=b.vnode;N(a,E,E.scopeId,E.slotScopeIds,b.parent)}}},Y=(a,u,v,_,b,x,E,T,z=0)=>{for(let y=z;y<a.length;y++){const F=a[y]=T?ut(a[y]):Be(a[y]);g(null,F,u,v,_,b,x,E,T)}},q=(a,u,v,_,b,x,E)=>{const T=u.el=a.el;let{patchFlag:z,dynamicChildren:y,dirs:F}=u;z|=a.patchFlag&16;const R=a.props||te,L=u.props||te;let $;if(v&&bt(v,!1),($=L.onVnodeBeforeUpdate)&&He($,v,u,a),F&&gt(u,a,v,"beforeUpdate"),v&&bt(v,!0),(R.innerHTML&&L.innerHTML==null||R.textContent&&L.textContent==null)&&f(T,""),y?Q(a.dynamicChildren,y,T,v,_,ms(u,b),x):E||Z(a,u,T,null,v,_,ms(u,b),x,!1),z>0){if(z&16)ue(T,R,L,v,b);else if(z&2&&R.class!==L.class&&i(T,"class",null,L.class,b),z&4&&i(T,"style",R.style,L.style,b),z&8){const V=u.dynamicProps;for(let oe=0;oe<V.length;oe++){const ee=V[oe],ye=R[ee],_e=L[ee];(_e!==ye||ee==="value")&&i(T,ee,ye,_e,b,v)}}z&1&&a.children!==u.children&&f(T,u.children)}else!E&&y==null&&ue(T,R,L,v,b);(($=L.onVnodeUpdated)||F)&&ge(()=>{$&&He($,v,u,a),F&&gt(u,a,v,"updated")},_)},Q=(a,u,v,_,b,x,E)=>{for(let T=0;T<u.length;T++){const z=a[T],y=u[T],F=z.el&&(z.type===Ee||!Qt(z,y)||z.shapeFlag&198)?p(z.el):v;g(z,y,F,null,_,b,x,E,!0)}},ue=(a,u,v,_,b)=>{if(u!==v){if(u!==te)for(const x in u)!Ot(x)&&!(x in v)&&i(a,x,u[x],null,b,_);for(const x in v){if(Ot(x))continue;const E=v[x],T=u[x];E!==T&&x!=="value"&&i(a,x,T,E,b,_)}"value"in v&&i(a,"value",u.value,v.value,b)}},Pe=(a,u,v,_,b,x,E,T,z)=>{const y=u.el=a?a.el:l(""),F=u.anchor=a?a.anchor:l("");let{patchFlag:R,dynamicChildren:L,slotScopeIds:$}=u;$&&(T=T?T.concat($):$),a==null?(s(y,v,_),s(F,v,_),Y(u.children||[],v,F,b,x,E,T,z)):R>0&&R&64&&L&&a.dynamicChildren&&a.dynamicChildren.length===L.length?(Q(a.dynamicChildren,L,v,b,x,E,T),(u.key!=null||b&&u===b.subTree)&&gs(a,u,!0)):Z(a,u,v,F,b,x,E,T,z)},Ce=(a,u,v,_,b,x,E,T,z)=>{u.slotScopeIds=T,a==null?u.shapeFlag&512?b.ctx.activate(u,v,_,E,z):nt(u,v,_,b,x,E,z):Ge(a,u,z)},nt=(a,u,v,_,b,x,E)=>{const T=a.component=gl(a,_,b);if(as(a)&&(T.ctx.renderer=Ke),xl(T,!1,E),T.asyncDep){if(b&&b.registerDep(T,ae,E),!a.el){const z=T.subTree=be(ct);M(null,z,u,v),a.placeholder=z.el}}else ae(T,a,u,v,b,x,E)},Ge=(a,u,v)=>{const _=u.component=a.component;if(Zr(a,u,v))if(_.asyncDep&&!_.asyncResolved){X(_,u,v);return}else _.next=u,_.update();else u.el=a.el,_.vnode=u},ae=(a,u,v,_,b,x,E)=>{const T=()=>{if(a.isMounted){let{next:R,bu:L,u:$,parent:V,vnode:oe}=a;{const qe=Uo(a);if(qe){R&&(R.el=oe.el,X(a,R,E)),qe.asyncDep.then(()=>{a.isUnmounted||T()});return}}let ee=R,ye;bt(a,!1),R?(R.el=oe.el,X(a,R,E)):R=oe,L&&Bn(L),(ye=R.props&&R.props.onVnodeBeforeUpdate)&&He(ye,V,R,oe),bt(a,!0);const _e=Io(a),Ye=a.subTree;a.subTree=_e,g(Ye,_e,p(Ye.el),xt(Ye),a,b,x),R.el=_e.el,ee===null&&Qr(a,_e.el),$&&ge($,b),(ye=R.props&&R.props.onVnodeUpdated)&&ge(()=>He(ye,V,R,oe),b)}else{let R;const{el:L,props:$}=u,{bm:V,m:oe,parent:ee,root:ye,type:_e}=a,Ye=Kt(u);bt(a,!1),V&&Bn(V),!Ye&&(R=$&&$.onVnodeBeforeMount)&&He(R,ee,u),bt(a,!0);{ye.ce&&ye.ce._def.shadowRoot!==!1&&ye.ce._injectChildStyle(_e);const qe=a.subTree=Io(a);g(null,qe,v,_,a,b,x),u.el=qe.el}if(oe&&ge(oe,b),!Ye&&(R=$&&$.onVnodeMounted)){const qe=u;ge(()=>He(R,ee,qe),b)}(u.shapeFlag&256||ee&&Kt(ee.vnode)&&ee.vnode.shapeFlag&256)&&a.a&&ge(a.a,b),a.isMounted=!0,u=v=_=null}};a.scope.on();const z=a.effect=new Ns(T);a.scope.off();const y=a.update=z.run.bind(z),F=a.job=z.runIfDirty.bind(z);F.i=a,F.id=a.uid,z.scheduler=()=>os(F),bt(a,!0),y()},X=(a,u,v)=>{u.component=a;const _=a.vnode.props;a.vnode=u,a.next=null,tl(a,u.props,_,v),il(a,u.children,v),Fe(),lo(a),Ne()},Z=(a,u,v,_,b,x,E,T,z=!1)=>{const y=a&&a.children,F=a?a.shapeFlag:0,R=u.children,{patchFlag:L,shapeFlag:$}=u;if(L>0){if(L&128){Ve(y,R,v,_,b,x,E,T,z);return}else if(L&256){Se(y,R,v,_,b,x,E,T,z);return}}$&8?(F&16&&ze(y,b,x),R!==y&&f(v,R)):F&16?$&16?Ve(y,R,v,_,b,x,E,T,z):ze(y,b,x,!0):(F&8&&f(v,""),$&16&&Y(R,v,_,b,x,E,T,z))},Se=(a,u,v,_,b,x,E,T,z)=>{a=a||yt,u=u||yt;const y=a.length,F=u.length,R=Math.min(y,F);let L;for(L=0;L<R;L++){const $=u[L]=z?ut(u[L]):Be(u[L]);g(a[L],$,v,null,b,x,E,T,z)}y>F?ze(a,b,x,!0,!1,R):Y(u,v,_,b,x,E,T,z,R)},Ve=(a,u,v,_,b,x,E,T,z)=>{let y=0;const F=u.length;let R=a.length-1,L=F-1;for(;y<=R&&y<=L;){const $=a[y],V=u[y]=z?ut(u[y]):Be(u[y]);if(Qt($,V))g($,V,v,null,b,x,E,T,z);else break;y++}for(;y<=R&&y<=L;){const $=a[R],V=u[L]=z?ut(u[L]):Be(u[L]);if(Qt($,V))g($,V,v,null,b,x,E,T,z);else break;R--,L--}if(y>R){if(y<=L){const $=L+1,V=$<F?u[$].el:_;for(;y<=L;)g(null,u[y]=z?ut(u[y]):Be(u[y]),v,V,b,x,E,T,z),y++}}else if(y>L)for(;y<=R;)D(a[y],b,x,!0),y++;else{const $=y,V=y,oe=new Map;for(y=V;y<=L;y++){const Te=u[y]=z?ut(u[y]):Be(u[y]);Te.key!=null&&oe.set(Te.key,y)}let ee,ye=0;const _e=L-V+1;let Ye=!1,qe=0;const tn=new Array(_e);for(y=0;y<_e;y++)tn[y]=0;for(y=$;y<=R;y++){const Te=a[y];if(ye>=_e){D(Te,b,x,!0);continue}let Xe;if(Te.key!=null)Xe=oe.get(Te.key);else for(ee=V;ee<=L;ee++)if(tn[ee-V]===0&&Qt(Te,u[ee])){Xe=ee;break}Xe===void 0?D(Te,b,x,!0):(tn[Xe-V]=y+1,Xe>=qe?qe=Xe:Ye=!0,g(Te,u[Xe],v,null,b,x,E,T,z),ye++)}const yi=Ye?cl(tn):yt;for(ee=yi.length-1,y=_e-1;y>=0;y--){const Te=V+y,Xe=u[Te],_i=u[Te+1],wi=Te+1<F?_i.el||Vo(_i):_;tn[y]===0?g(null,Xe,v,wi,b,x,E,T,z):Ye&&(ee<0||y!==yi[ee]?I(Xe,v,wi,2):ee--)}}},I=(a,u,v,_,b=null)=>{const{el:x,type:E,transition:T,children:z,shapeFlag:y}=a;if(y&6){I(a.component.subTree,u,v,_);return}if(y&128){a.suspense.move(u,v,_);return}if(y&64){E.move(a,u,v,Ke);return}if(E===Ee){s(x,u,v);for(let R=0;R<z.length;R++)I(z[R],u,v,_);s(a.anchor,u,v);return}if(E===Tn){A(a,u,v);return}if(_!==2&&y&1&&T)if(_===0)T.beforeEnter(x),s(x,u,v),ge(()=>T.enter(x),b);else{const{leave:R,delayLeave:L,afterLeave:$}=T,V=()=>{a.ctx.isUnmounted?o(x):s(x,u,v)},oe=()=>{x._isLeaving&&x[Sr](!0),R(x,()=>{V(),$&&$()})};L?L(x,V,oe):oe()}else s(x,u,v)},D=(a,u,v,_=!1,b=!1)=>{const{type:x,props:E,ref:T,children:z,dynamicChildren:y,shapeFlag:F,patchFlag:R,dirs:L,cacheIndex:$}=a;if(R===-2&&(b=!1),T!=null&&(Fe(),Wt(T,null,v,a,!0),Ne()),$!=null&&(u.renderCache[$]=void 0),F&256){u.ctx.deactivate(a);return}const V=F&1&&L,oe=!Kt(a);let ee;if(oe&&(ee=E&&E.onVnodeBeforeUnmount)&&He(ee,u,a),F&6)ie(a.component,v,_);else{if(F&128){a.suspense.unmount(v,_);return}V&&gt(a,null,u,"beforeUnmount"),F&64?a.type.remove(a,u,v,Ke,_):y&&!y.hasOnce&&(x!==Ee||R>0&&R&64)?ze(y,u,v,!1,!0):(x===Ee&&R&384||!b&&F&16)&&ze(z,u,v),_&&G(a)}(oe&&(ee=E&&E.onVnodeUnmounted)||V)&&ge(()=>{ee&&He(ee,u,a),V&&gt(a,null,u,"unmounted")},v)},G=a=>{const{type:u,el:v,anchor:_,transition:b}=a;if(u===Ee){P(v,_);return}if(u===Tn){k(a);return}const x=()=>{o(v),b&&!b.persisted&&b.afterLeave&&b.afterLeave()};if(a.shapeFlag&1&&b&&!b.persisted){const{leave:E,delayLeave:T}=b,z=()=>E(v,x);T?T(a.el,x,z):z()}else x()},P=(a,u)=>{let v;for(;a!==u;)v=w(a),o(a),a=v;o(u)},ie=(a,u,v)=>{const{bum:_,scope:b,job:x,subTree:E,um:T,m:z,a:y}=a;Go(z),Go(y),_&&Bn(_),b.stop(),x&&(x.flags|=8,D(E,a,u,v)),T&&ge(T,u),ge(()=>{a.isUnmounted=!0},u)},ze=(a,u,v,_=!1,b=!1,x=0)=>{for(let E=x;E<a.length;E++)D(a[E],u,v,_,b)},xt=a=>{if(a.shapeFlag&6)return xt(a.component.subTree);if(a.shapeFlag&128)return a.suspense.next();const u=w(a.anchor||a.el),v=u&&u[vo];return v?w(v):u};let We=!1;const Pt=(a,u,v)=>{let _;a==null?u._vnode&&(D(u._vnode,null,null,!0),_=u._vnode.component):g(u._vnode||null,a,u,null,null,null,v),u._vnode=a,We||(We=!0,lo(_),ao(),We=!1)},Ke={p:g,um:D,m:I,r:G,mt:nt,mc:Y,pc:Z,pbc:Q,n:xt,o:e};return{render:Pt,hydrate:void 0,createApp:Wr(Pt)}}function ms({type:e,props:t},n){return n==="svg"&&e==="foreignObject"||n==="mathml"&&e==="annotation-xml"&&t&&t.encoding&&t.encoding.includes("html")?void 0:n}function bt({effect:e,job:t},n){n?(e.flags|=32,t.flags|=4):(e.flags&=-33,t.flags&=-5)}function al(e,t){return(!e||e&&!e.pendingBranch)&&t&&!t.persisted}function gs(e,t,n=!1){const s=e.children,o=t.children;if(B(s)&&B(o))for(let i=0;i<s.length;i++){const r=s[i];let l=o[i];l.shapeFlag&1&&!l.dynamicChildren&&((l.patchFlag<=0||l.patchFlag===32)&&(l=o[i]=ut(o[i]),l.el=r.el),!n&&l.patchFlag!==-2&&gs(r,l)),l.type===zn&&(l.patchFlag!==-1?l.el=r.el:l.__elIndex=i+(e.type===Ee?1:0)),l.type===ct&&!l.el&&(l.el=r.el)}}function cl(e){const t=e.slice(),n=[0];let s,o,i,r,l;const c=e.length;for(s=0;s<c;s++){const d=e[s];if(d!==0){if(o=n[n.length-1],e[o]<d){t[s]=o,n.push(s);continue}for(i=0,r=n.length-1;i<r;)l=i+r>>1,e[n[l]]<d?i=l+1:r=l;d<e[n[i]]&&(i>0&&(t[s]=n[i-1]),n[i]=s)}}for(i=n.length,r=n[i-1];i-- >0;)n[i]=r,r=t[r];return n}function Uo(e){const t=e.subTree.component;if(t)return t.asyncDep&&!t.asyncResolved?t:Uo(t)}function Go(e){if(e)for(let t=0;t<e.length;t++)e[t].flags|=8}function Vo(e){if(e.placeholder)return e.placeholder;const t=e.component;return t?Vo(t.subTree):null}const Wo=e=>e.__isSuspense;function fl(e,t){t&&t.pendingBranch?B(e)?t.effects.push(...e):t.effects.push(e):hr(e)}const Ee=Symbol.for("v-fgt"),zn=Symbol.for("v-txt"),ct=Symbol.for("v-cmt"),Tn=Symbol.for("v-stc"),Jt=[];let we=null;function pe(e=!1){Jt.push(we=e?null:[])}function ul(){Jt.pop(),we=Jt[Jt.length-1]||null}let Zt=1;function Ko(e,t=!1){Zt+=e,e<0&&we&&t&&(we.hasOnce=!0)}function Yo(e){return e.dynamicChildren=Zt>0?we||yt:null,ul(),Zt>0&&we&&we.push(e),e}function ke(e,t,n,s,o,i){return Yo(h(e,t,n,s,o,i,!0))}function bs(e,t,n,s,o){return Yo(be(e,t,n,s,o,!0))}function qo(e){return e?e.__v_isVNode===!0:!1}function Qt(e,t){return e.type===t.type&&e.key===t.key}const Xo=({key:e})=>e??null,An=({ref:e,ref_key:t,ref_for:n})=>(typeof e=="number"&&(e=""+e),e!=null?le(e)||fe(e)||j(e)?{i:je,r:e,k:t,f:!!n}:e:null);function h(e,t=null,n=null,s=0,o=null,i=e===Ee?0:1,r=!1,l=!1){const c={__v_isVNode:!0,__v_skip:!0,type:e,props:t,key:t&&Xo(t),ref:t&&An(t),scopeId:fo,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetStart:null,targetAnchor:null,staticCount:0,shapeFlag:i,patchFlag:s,dynamicProps:o,dynamicChildren:null,appContext:null,ctx:je};return l?(xs(c,n),i&128&&e.normalize(c)):n&&(c.shapeFlag|=le(n)?8:16),Zt>0&&!r&&we&&(c.patchFlag>0||i&6)&&c.patchFlag!==32&&we.push(c),c}const be=dl;function dl(e,t=null,n=null,s=0,o=null,i=!1){if((!e||e===Dr)&&(e=ct),qo(e)){const l=Ct(e,t,!0);return n&&xs(l,n),Zt>0&&!i&&we&&(l.shapeFlag&6?we[we.indexOf(e)]=l:we.push(l)),l.patchFlag=-2,l}if(Tl(e)&&(e=e.__vccOpts),t){t=pl(t);let{class:l,style:c}=t;l&&!le(l)&&(t.class=Me(l)),re(c)&&(ns(c)&&!B(c)&&(c=ce({},c)),t.style=Lt(c))}const r=le(e)?1:Wo(e)?128:_r(e)?64:re(e)?4:j(e)?2:0;return h(e,t,n,s,o,r,i,!0)}function pl(e){return e?ns(e)||Fo(e)?ce({},e):e:null}function Ct(e,t,n=!1,s=!1){const{props:o,ref:i,patchFlag:r,children:l,transition:c}=e,d=t?vl(o||{},t):o,f={__v_isVNode:!0,__v_skip:!0,type:e.type,props:d,key:d&&Xo(d),ref:t&&t.ref?n&&i?B(i)?i.concat(An(t)):[i,An(t)]:An(t):i,scopeId:e.scopeId,slotScopeIds:e.slotScopeIds,children:l,target:e.target,targetStart:e.targetStart,targetAnchor:e.targetAnchor,staticCount:e.staticCount,shapeFlag:e.shapeFlag,patchFlag:t&&e.type!==Ee?r===-1?16:r|16:r,dynamicProps:e.dynamicProps,dynamicChildren:e.dynamicChildren,appContext:e.appContext,dirs:e.dirs,transition:c,component:e.component,suspense:e.suspense,ssContent:e.ssContent&&Ct(e.ssContent),ssFallback:e.ssFallback&&Ct(e.ssFallback),placeholder:e.placeholder,el:e.el,anchor:e.anchor,ctx:e.ctx,ce:e.ce};return c&&s&&rs(f,c.clone(f)),f}function Jo(e=" ",t=0){return be(zn,null,e,t)}function En(e,t){const n=be(Tn,null,e);return n.staticCount=t,n}function ft(e="",t=!1){return t?(pe(),bs(ct,null,e)):be(ct,null,e)}function Be(e){return e==null||typeof e=="boolean"?be(ct):B(e)?be(Ee,null,e.slice()):qo(e)?ut(e):be(zn,null,String(e))}function ut(e){return e.el===null&&e.patchFlag!==-1||e.memo?e:Ct(e)}function xs(e,t){let n=0;const{shapeFlag:s}=e;if(t==null)t=null;else if(B(t))n=16;else if(typeof t=="object")if(s&65){const o=t.default;o&&(o._c&&(o._d=!1),xs(e,o()),o._c&&(o._d=!0));return}else{n=32;const o=t._;!o&&!Fo(t)?t._ctx=je:o===3&&je&&(je.slots._===1?t._=1:(t._=2,e.patchFlag|=1024))}else j(t)?(t={default:t,_ctx:je},n=32):(t=String(t),s&64?(n=16,t=[Jo(t)]):n=8);e.children=t,e.shapeFlag|=n}function vl(...e){const t={};for(let n=0;n<e.length;n++){const s=e[n];for(const o in s)if(o==="class")t.class!==s.class&&(t.class=Me([t.class,s.class]));else if(o==="style")t.style=Lt([t.style,s.style]);else if(nn(o)){const i=t[o],r=s[o];r&&i!==r&&!(B(i)&&i.includes(r))&&(t[o]=i?[].concat(i,r):r)}else o!==""&&(t[o]=s[o])}return t}function He(e,t,n,s=null){De(e,t,7,[n,s])}const hl=Mo();let ml=0;function gl(e,t,n){const s=e.type,o=(t?t.appContext:e.appContext)||hl,i={uid:ml++,vnode:e,type:s,parent:t,appContext:o,root:null,next:null,subTree:null,effect:null,update:null,job:null,scope:new Pi(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:t?t.provides:Object.create(o.provides),ids:t?t.ids:["",0,0],accessCache:null,renderCache:[],components:null,directives:null,propsOptions:Do(s,o),emitsOptions:Ro(s,o),emit:null,emitted:null,propsDefaults:te,inheritAttrs:s.inheritAttrs,ctx:te,data:te,props:te,attrs:te,slots:te,refs:te,setupState:te,setupContext:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return i.ctx={_:i},i.root=t?t.root:i,i.emit=Yr.bind(null,i),e.ce&&e.ce(i),i}let ve=null;const bl=()=>ve||je;let Cn,ys;{const e=rn(),t=(n,s)=>{let o;return(o=e[n])||(o=e[n]=[]),o.push(s),i=>{o.length>1?o.forEach(r=>r(i)):o[0](i)}};Cn=t("__VUE_INSTANCE_SETTERS__",n=>ve=n),ys=t("__VUE_SSR_SETTERS__",n=>Mt=n)}const en=e=>{const t=ve;return Cn(e),e.scope.on(),()=>{e.scope.off(),Cn(t)}},Zo=()=>{ve&&ve.scope.off(),Cn(null)};function Qo(e){return e.vnode.shapeFlag&4}let Mt=!1;function xl(e,t=!1,n=!1){t&&ys(t);const{props:s,children:o}=e.vnode,i=Qo(e);el(e,s,i,t),ol(e,o,n||t);const r=i?yl(e,t):void 0;return t&&ys(!1),r}function yl(e,t){const n=e.type;e.accessCache=Object.create(null),e.proxy=new Proxy(e.ctx,$r);const{setup:s}=n;if(s){Fe();const o=e.setupContext=s.length>1?wl(e):null,i=en(e),r=St(s,e,0,[e.props,o]),l=Es(r);if(Ne(),i(),(l||e.sp)&&!Kt(e)&&ls(e),l){if(r.then(Zo,Zo),t)return r.then(c=>{ei(e,c)}).catch(c=>{Ht(c,e,0)});e.asyncDep=r}else ei(e,r)}else ti(e)}function ei(e,t,n){j(t)?e.type.__ssrInlineRender?e.ssrRender=t:e.render=t:re(t)&&(e.setupState=so(t)),ti(e)}function ti(e,t,n){const s=e.type;e.render||(e.render=s.render||Oe);{const o=en(e);Fe();try{jr(e)}finally{Ne(),o()}}}const _l={get(e,t){return de(e,"get",""),e[t]}};function wl(e){const t=n=>{e.exposed=n||{}};return{attrs:new Proxy(e.attrs,_l),slots:e.slots,emit:e.emit,expose:t}}function _s(e){return e.exposed?e.exposeProxy||(e.exposeProxy=new Proxy(so(er(e.exposed)),{get(t,n){if(n in t)return t[n];if(n in qt)return qt[n](e)},has(t,n){return n in t||n in qt}})):e.proxy}const kl=/(?:^|[-_])\w/g,Sl=e=>e.replace(kl,t=>t.toUpperCase()).replace(/[-_]/g,"");function zl(e,t=!0){return j(e)?e.displayName||e.name:e.name||t&&e.__name}function ni(e,t,n=!1){let s=zl(t);if(!s&&t.__file){const o=t.__file.match(/([^/\\]+)\.\w+$/);o&&(s=o[1])}if(!s&&e){const o=i=>{for(const r in i)if(i[r]===t)return r};s=o(e.components)||e.parent&&o(e.parent.type.components)||o(e.appContext.components)}return s?Sl(s):n?"App":"Anonymous"}function Tl(e){return j(e)&&"__vccOpts"in e}const W=(e,t)=>ir(e,t,Mt),Al="3.5.27";/**
* @vue/runtime-dom v3.5.27
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let ws;const si=typeof window<"u"&&window.trustedTypes;if(si)try{ws=si.createPolicy("vue",{createHTML:e=>e})}catch{}const oi=ws?e=>ws.createHTML(e):e=>e,El="http://www.w3.org/2000/svg",Cl="http://www.w3.org/1998/Math/MathML",tt=typeof document<"u"?document:null,ii=tt&&tt.createElement("template"),Ml={insert:(e,t,n)=>{t.insertBefore(e,n||null)},remove:e=>{const t=e.parentNode;t&&t.removeChild(e)},createElement:(e,t,n,s)=>{const o=t==="svg"?tt.createElementNS(El,e):t==="mathml"?tt.createElementNS(Cl,e):n?tt.createElement(e,{is:n}):tt.createElement(e);return e==="select"&&s&&s.multiple!=null&&o.setAttribute("multiple",s.multiple),o},createText:e=>tt.createTextNode(e),createComment:e=>tt.createComment(e),setText:(e,t)=>{e.nodeValue=t},setElementText:(e,t)=>{e.textContent=t},parentNode:e=>e.parentNode,nextSibling:e=>e.nextSibling,querySelector:e=>tt.querySelector(e),setScopeId(e,t){e.setAttribute(t,"")},insertStaticContent(e,t,n,s,o,i){const r=n?n.previousSibling:t.lastChild;if(o&&(o===i||o.nextSibling))for(;t.insertBefore(o.cloneNode(!0),n),!(o===i||!(o=o.nextSibling)););else{ii.innerHTML=oi(s==="svg"?`<svg>${e}</svg>`:s==="mathml"?`<math>${e}</math>`:e);const l=ii.content;if(s==="svg"||s==="mathml"){const c=l.firstChild;for(;c.firstChild;)l.appendChild(c.firstChild);l.removeChild(c)}t.insertBefore(l,n)}return[r?r.nextSibling:t.firstChild,n?n.previousSibling:t.lastChild]}},Rl=Symbol("_vtc");function Il(e,t,n){const s=e[Rl];s&&(t=(t?[t,...s]:[...s]).join(" ")),t==null?e.removeAttribute("class"):n?e.setAttribute("class",t):e.className=t}const ri=Symbol("_vod"),Pl=Symbol("_vsh"),Ol=Symbol(""),Ll=/(?:^|;)\s*display\s*:/;function Fl(e,t,n){const s=e.style,o=le(n);let i=!1;if(n&&!o){if(t)if(le(t))for(const r of t.split(";")){const l=r.slice(0,r.indexOf(":")).trim();n[l]==null&&Mn(s,l,"")}else for(const r in t)n[r]==null&&Mn(s,r,"");for(const r in n)r==="display"&&(i=!0),Mn(s,r,n[r])}else if(o){if(t!==n){const r=s[Ol];r&&(n+=";"+r),s.cssText=n,i=Ll.test(n)}}else t&&e.removeAttribute("style");ri in e&&(e[ri]=i?s.display:"",e[Pl]&&(s.display="none"))}const li=/\s*!important$/;function Mn(e,t,n){if(B(n))n.forEach(s=>Mn(e,t,s));else if(n==null&&(n=""),t.startsWith("--"))e.setProperty(t,n);else{const s=Nl(e,t);li.test(n)?e.setProperty(pt(s),n.replace(li,""),"important"):e[s]=n}}const ai=["Webkit","Moz","ms"],ks={};function Nl(e,t){const n=ks[t];if(n)return n;let s=ot(t);if(s!=="filter"&&s in e)return ks[t]=s;s=Rs(s);for(let o=0;o<ai.length;o++){const i=ai[o]+s;if(i in e)return ks[t]=i}return t}const ci="http://www.w3.org/1999/xlink";function fi(e,t,n,s,o,i=Ii(t)){s&&t.startsWith("xlink:")?n==null?e.removeAttributeNS(ci,t.slice(6,t.length)):e.setAttributeNS(ci,t,n):n==null||i&&!Os(n)?e.removeAttribute(t):e.setAttribute(t,i?"":st(n)?String(n):n)}function ui(e,t,n,s,o){if(t==="innerHTML"||t==="textContent"){n!=null&&(e[t]=t==="innerHTML"?oi(n):n);return}const i=e.tagName;if(t==="value"&&i!=="PROGRESS"&&!i.includes("-")){const l=i==="OPTION"?e.getAttribute("value")||"":e.value,c=n==null?e.type==="checkbox"?"on":"":String(n);(l!==c||!("_value"in e))&&(e.value=c),n==null&&e.removeAttribute(t),e._value=n;return}let r=!1;if(n===""||n==null){const l=typeof e[t];l==="boolean"?n=Os(n):n==null&&l==="string"?(n="",r=!0):l==="number"&&(n=0,r=!0)}try{e[t]=n}catch{}r&&e.removeAttribute(o||t)}function Dl(e,t,n,s){e.addEventListener(t,n,s)}function $l(e,t,n,s){e.removeEventListener(t,n,s)}const di=Symbol("_vei");function jl(e,t,n,s,o=null){const i=e[di]||(e[di]={}),r=i[t];if(s&&r)r.value=s;else{const[l,c]=Bl(t);if(s){const d=i[t]=Gl(s,o);Dl(e,l,d,c)}else r&&($l(e,l,r,c),i[t]=void 0)}}const pi=/(?:Once|Passive|Capture)$/;function Bl(e){let t;if(pi.test(e)){t={};let s;for(;s=e.match(pi);)e=e.slice(0,e.length-s[0].length),t[s[0].toLowerCase()]=!0}return[e[2]===":"?e.slice(3):pt(e.slice(2)),t]}let Ss=0;const Hl=Promise.resolve(),Ul=()=>Ss||(Hl.then(()=>Ss=0),Ss=Date.now());function Gl(e,t){const n=s=>{if(!s._vts)s._vts=Date.now();else if(s._vts<=n.attached)return;De(Vl(s,n.value),t,5,[s])};return n.value=e,n.attached=Ul(),n}function Vl(e,t){if(B(t)){const n=e.stopImmediatePropagation;return e.stopImmediatePropagation=()=>{n.call(e),e._stopped=!0},t.map(s=>o=>!o._stopped&&s&&s(o))}else return t}const vi=e=>e.charCodeAt(0)===111&&e.charCodeAt(1)===110&&e.charCodeAt(2)>96&&e.charCodeAt(2)<123,Wl=(e,t,n,s,o,i)=>{const r=o==="svg";t==="class"?Il(e,s,r):t==="style"?Fl(e,n,s):nn(t)?Nn(t)||jl(e,t,n,s,i):(t[0]==="."?(t=t.slice(1),!0):t[0]==="^"?(t=t.slice(1),!1):Kl(e,t,s,r))?(ui(e,t,s),!e.tagName.includes("-")&&(t==="value"||t==="checked"||t==="selected")&&fi(e,t,s,r,i,t!=="value")):e._isVueCE&&(/[A-Z]/.test(t)||!le(s))?ui(e,ot(t),s,i,t):(t==="true-value"?e._trueValue=s:t==="false-value"&&(e._falseValue=s),fi(e,t,s,r))};function Kl(e,t,n,s){if(s)return!!(t==="innerHTML"||t==="textContent"||t in e&&vi(t)&&j(n));if(t==="spellcheck"||t==="draggable"||t==="translate"||t==="autocorrect"||t==="sandbox"&&e.tagName==="IFRAME"||t==="form"||t==="list"&&e.tagName==="INPUT"||t==="type"&&e.tagName==="TEXTAREA")return!1;if(t==="width"||t==="height"){const o=e.tagName;if(o==="IMG"||o==="VIDEO"||o==="CANVAS"||o==="SOURCE")return!1}return vi(t)&&le(n)?!1:t in e}const Yl=["ctrl","shift","alt","meta"],ql={stop:e=>e.stopPropagation(),prevent:e=>e.preventDefault(),self:e=>e.target!==e.currentTarget,ctrl:e=>!e.ctrlKey,shift:e=>!e.shiftKey,alt:e=>!e.altKey,meta:e=>!e.metaKey,left:e=>"button"in e&&e.button!==0,middle:e=>"button"in e&&e.button!==1,right:e=>"button"in e&&e.button!==2,exact:(e,t)=>Yl.some(n=>e[`${n}Key`]&&!t.includes(n))},hi=(e,t)=>{const n=e._withMods||(e._withMods={}),s=t.join(".");return n[s]||(n[s]=(o,...i)=>{for(let r=0;r<t.length;r++){const l=ql[t[r]];if(l&&l(o,t))return}return e(o,...i)})},Xl=ce({patchProp:Wl},Ml);let mi;function Jl(){return mi||(mi=rl(Xl))}const Zl=(...e)=>{const t=Jl().createApp(...e),{mount:n}=t;return t.mount=s=>{const o=ea(s);if(!o)return;const i=t._component;!j(i)&&!i.render&&!i.template&&(i.template=o.innerHTML),o.nodeType===1&&(o.textContent="");const r=n(o,!1,Ql(o));return o instanceof Element&&(o.removeAttribute("v-cloak"),o.setAttribute("data-v-app","")),r},t};function Ql(e){if(e instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&e instanceof MathMLElement)return"mathml"}function ea(e){return le(e)?document.querySelector(e):e}const Cf="modulepreload",Mf=function(e,t){return new URL(e,t).href},Rf={},ta=function(t,n,s){let o=Promise.resolve();function i(r){const l=new Event("vite:preloadError",{cancelable:!0});if(l.payload=r,window.dispatchEvent(l),!l.defaultPrevented)throw r}return o.then(r=>{for(const l of r||[])l.status==="rejected"&&i(l.reason);return t().catch(i)})},na=`// ===== 0: MANDELBULB =====
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
`,sa=`// ===== 1: MANDELBOX =====
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
`,oa=`// ===== 2: MENGER SPONGE =====
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
`,Ea=`// ===== 26: BEATING CIRCLES =====
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
`,Ca=`// ===== 27: CIRCLE WAVE =====
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
`,Na=`// ===== 35: NEON GRID =====
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
`,Da=`// ===== 36: MATRIX RAIN =====
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
`,Ja=`// ===== 49: ENERGY FIELD =====
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
`,Za=`precision highp float;
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
`,tc=Vt({__name:"BioFractalViewer",props:{mode:{default:0}},setup(e){const t=e,n=se(null);let s=null,o=null,i=null,r=Date.now(),l=null;const c=Object.assign({"../../shaders/effects/mode-00-mandelbulb.glsl":na,"../../shaders/effects/mode-01-mandelbox.glsl":sa,"../../shaders/effects/mode-02-menger-sponge.glsl":oa,"../../shaders/effects/mode-03-sierpinski.glsl":ia,"../../shaders/effects/mode-04-kaleidoscope.glsl":ra,"../../shaders/effects/mode-05-organic-hybrid.glsl":la,"../../shaders/effects/mode-06-fractal-land.glsl":aa,"../../shaders/effects/mode-07-galaxy-nebula.glsl":ca,"../../shaders/effects/mode-08-infinite-tunnel.glsl":fa,"../../shaders/effects/mode-09-plasma-fractal.glsl":ua,"../../shaders/effects/mode-10-circuits.glsl":da,"../../shaders/effects/mode-11-metaballs.glsl":pa,"../../shaders/effects/mode-12-volumetric-lines.glsl":va,"../../shaders/effects/mode-13-disco-tunnel.glsl":ha,"../../shaders/effects/mode-14-speed-drive.glsl":ma,"../../shaders/effects/mode-15-hot-rocks.glsl":ga,"../../shaders/effects/mode-16-server-room.glsl":ba,"../../shaders/effects/mode-17-remnant-x.glsl":xa,"../../shaders/effects/mode-18-kali-set.glsl":ya,"../../shaders/effects/mode-19-generators.glsl":_a,"../../shaders/effects/mode-20-simplicity-galaxy.glsl":wa,"../../shaders/effects/mode-21-ribbons.glsl":ka,"../../shaders/effects/mode-22-twisted-rings.glsl":Sa,"../../shaders/effects/mode-23-waves-remix.glsl":za,"../../shaders/effects/mode-24-dancing-metalights.glsl":Ta,"../../shaders/effects/mode-25-io-blocks.glsl":Aa,"../../shaders/effects/mode-26-beating-circles.glsl":Ea,"../../shaders/effects/mode-27-circle-wave.glsl":Ca,"../../shaders/effects/mode-28-soundflower.glsl":Ma,"../../shaders/effects/mode-29-polar-beats.glsl":Ra,"../../shaders/effects/mode-30-undulant-spectre.glsl":Ia,"../../shaders/effects/mode-31-revision-2015.glsl":Pa,"../../shaders/effects/mode-32-gameboy-style.glsl":Oa,"../../shaders/effects/mode-33-electric-storm.glsl":La,"../../shaders/effects/mode-34-vortex.glsl":Fa,"../../shaders/effects/mode-35-neon-grid.glsl":Na,"../../shaders/effects/mode-36-matrix-rain.glsl":Da,"../../shaders/effects/mode-37-fire.glsl":$a,"../../shaders/effects/mode-38-aurora.glsl":ja,"../../shaders/effects/mode-39-wormhole.glsl":Ba,"../../shaders/effects/mode-40-hexagons.glsl":Ha,"../../shaders/effects/mode-41-bubbles.glsl":Ua,"../../shaders/effects/mode-42-lightning.glsl":Ga,"../../shaders/effects/mode-43-kaleidoscope-2d.glsl":Va,"../../shaders/effects/mode-44-starfield.glsl":Wa,"../../shaders/effects/mode-45-liquid-metal.glsl":Ka,"../../shaders/effects/mode-46-fractal-tree.glsl":Ya,"../../shaders/effects/mode-47-voronoi.glsl":qa,"../../shaders/effects/mode-48-psychedelic.glsl":Xa,"../../shaders/effects/mode-49-energy-field.glsl":Ja}),d=Object.keys(c).sort().map(C=>c[C]).join(`

`),f=Za,p=`${Qa}
${d}
${ec}`,w=(C,M)=>{if(!s)return null;const O=s.createShader(C);return O?(s.shaderSource(O,M),s.compileShader(O),s.getShaderParameter(O,s.COMPILE_STATUS)?O:(console.error("Shader error:",s.getShaderInfoLog(O)),null)):null},S=()=>{const C=n.value;if(!C||(s=C.getContext("webgl")||C.getContext("experimental-webgl"),!s))return!1;const M=w(s.VERTEX_SHADER,f),O=w(s.FRAGMENT_SHADER,p);if(!M||!O||(o=s.createProgram(),!o))return!1;if(s.attachShader(o,M),s.attachShader(o,O),s.linkProgram(o),!s.getProgramParameter(o,s.LINK_STATUS))return console.error("Link error:",s.getProgramInfoLog(o)),!1;const A=new Float32Array([-1,-1,1,-1,-1,1,-1,1,1,-1,1,1]),k=s.createBuffer();s.bindBuffer(s.ARRAY_BUFFER,k),s.bufferData(s.ARRAY_BUFFER,A,s.STATIC_DRAW);const H=s.getAttribLocation(o,"aPosition");return s.enableVertexAttribArray(H),s.vertexAttribPointer(H,2,s.FLOAT,!1,0,0),l={uTime:s.getUniformLocation(o,"uTime"),uResolution:s.getUniformLocation(o,"uResolution"),uMode:s.getUniformLocation(o,"uMode")},!0},m=()=>{const C=n.value;C&&(C.width=C.clientWidth,C.height=C.clientHeight,s&&s.viewport(0,0,C.width,C.height))},g=()=>{!s||!o||!n.value||!l||(s.useProgram(o),s.uniform1f(l.uTime,(Date.now()-r)/1e3),s.uniform2f(l.uResolution,n.value.width,n.value.height),s.uniform1i(l.uMode,t.mode),s.drawArrays(s.TRIANGLES,0,6),i=requestAnimationFrame(g))};return Yt(()=>{S()&&(m(),window.addEventListener("resize",m),g())}),At(()=>{i&&cancelAnimationFrame(i),window.removeEventListener("resize",m)}),(C,M)=>(pe(),ke("canvas",{ref_key:"canvasRef",ref:n,class:"bio-fractal-canvas"},null,512))}}),gi=(e,t)=>{const n=e.__vccOpts||e;for(const[s,o]of t)n[s]=o;return n},nc=gi(tc,[["__scopeId","data-v-1ee27525"]]),sc={class:"pv-container"},oc={class:"pv-svg-container"},ic={viewBox:"0 0 840 640",preserveAspectRatio:"xMidYMid meet"},rc=["x1","y1","x2","y2"],lc=["x1","y1","x2","y2"],ac=["x1","y1","x2","y2"],cc=["x1","y1","x2","y2"],fc=["d"],uc=["cx","cy"],dc=["transform"],pc=["x1","y1","x2","y2"],vc=["x1","y1","x2","y2"],hc=["x1","y1","x2","y2"],mc=["x1","y1","x2","y2"],gc=["d"],bc=["cx","cy"],xc=["transform"],yc=["x1","y1","x2","y2"],_c=["x1","y1","x2","y2"],wc=["x1","y1","x2","y2"],kc=["x1","y1","x2","y2"],Sc=["x1","y1","x2","y2"],zc=["x1","y1","x2","y2"],Tc=["points"],Ac=["d"],Ec=["cx","cy"],Cc=["transform"],Mc=["d"],Rc=["x1","y1","x2","y2"],Ic=["x1","y1","x2","y2"],Pc=["x1","y1","x2","y2"],Oc=["points"],Lc=["x1","y1","x2","y2"],Fc=["points"],Nc=["x1","y1","x2","y2"],Dc=["points"],$c=["transform"],jc=["cx","cy"],Bc=["cx","cy"],Hc=["cx","cy"],Uc=["x","y"],Gc=["x","y"],Vc=["x","y"],Wc=["x","y"],Kc={class:"pv-values"},Yc={class:"pv-values-main"},qc={class:"pv-values-text"},Xc={class:"pv-values-real"},Jc={class:"pv-values-imag"},Zc={class:"pv-values-time"},Qc={class:"pv-values-time-text"},ef={class:"pv-values-time-value"},Rn=1.3,tf=1,Rt=-2.8,It=-2.8,Ue=-1.2,dt=1.3,In=1.3,Pn=1.3,nf=gi(Vt({__name:"ComplexWaveVisualization",setup(e){const t=se(1.25),n=se(!0);let s=null;const o=2*Math.PI*1.6,i=G=>Math.exp(-1*Math.pow(G-Rn,2)),r=(G,P,ie)=>{const Pt=-G*81*.7,Ke=G*81*.35,On=P*61*.9,a=P*61*.25,u=-ie*61;return{x:436+Pt+On,y:355+Ke+a+u}},l=W(()=>i(t.value)*Math.cos(o*t.value)),c=W(()=>i(t.value)*Math.sin(o*t.value)),d=W(()=>{const G=[];for(let P=0;P<=2.5;P+=.015){const ie=i(P);G.push({t:P,re:ie*Math.cos(o*P),im:ie*Math.sin(o*P)})}return G}),f=W(()=>d.value.map((G,P)=>{const ie=r(G.t,G.re,G.im);return`${P===0?"M":"L"} ${ie.x} ${ie.y}`}).join(" ")),p=W(()=>d.value.map((G,P)=>{const ie=r(Ue,G.re,G.im);return`${P===0?"M":"L"} ${ie.x} ${ie.y}`}).join(" ")),w=W(()=>d.value.map((G,P)=>{const ie=r(G.t,Rt,G.im);return`${P===0?"M":"L"} ${ie.x} ${ie.y}`}).join(" ")),S=W(()=>d.value.map((G,P)=>{const ie=r(G.t,G.re,It);return`${P===0?"M":"L"} ${ie.x} ${ie.y}`}).join(" ")),m=W(()=>({tl:r(Ue,-dt,dt),tr:r(Ue,dt,dt),bl:r(Ue,-dt,-dt),br:r(Ue,dt,-dt)})),g=W(()=>r(Ue,0,1.4)),C=W(()=>r(Ue,0,-.3)),M=W(()=>r(Ue,-.3,0)),O=W(()=>r(Ue,1,0)),A=W(()=>({tl:r(0,Rt,In),tr:r(2.5,Rt,In),bl:r(0,Rt,-In),br:r(2.5,Rt,-In)})),k=W(()=>({bl:r(0,-Pn,It),br:r(0,Pn,It),tl:r(2.5,-Pn,It),tr:r(2.5,Pn,It)})),H=W(()=>r(Rn,0,0)),U=W(()=>r(Rn,0,1.6)),N=W(()=>r(Rn,1.5,0)),Y=W(()=>r(0,0,0)),q=W(()=>r(2.7,0,0)),Q=W(()=>r(t.value,l.value,c.value)),ue=W(()=>r(Ue,l.value,c.value)),Pe=W(()=>r(t.value,Rt,c.value)),Ce=W(()=>r(t.value,l.value,It)),nt=W(()=>Math.atan2(A.value.tl.y-A.value.tr.y,A.value.tl.x-A.value.tr.x)*(180/Math.PI)),Ge=W(()=>({x:(A.value.tl.x+A.value.tr.x)/2,y:(A.value.tl.y+A.value.tr.y)/2})),ae=W(()=>Math.atan2(k.value.bl.y-k.value.tl.y,k.value.bl.x-k.value.tl.x)*(180/Math.PI)),X=W(()=>({x:(k.value.br.x+k.value.tr.x)/2,y:(k.value.br.y+k.value.tr.y)/2})),Z=W(()=>Math.atan2(m.value.tl.y-m.value.tr.y,m.value.tl.x-m.value.tr.x)*(180/Math.PI)),Se=W(()=>({x:(m.value.tl.x+m.value.tr.x)/2,y:(m.value.tl.y+m.value.tr.y)/2})),Ve=W(()=>({x:(Y.value.x+q.value.x)/2,y:(Y.value.y+q.value.y)/2}));let I=0;const D=()=>{I++,n.value&&I%2===0&&(t.value+=.02,t.value>2.5&&(t.value=0)),s=requestAnimationFrame(D)};return Yt(()=>{s=requestAnimationFrame(D)}),At(()=>{s&&cancelAnimationFrame(s)}),(G,P)=>(pe(),ke("div",sc,[P[15]||(P[15]=h("div",{class:"pv-title"},[h("h1",{class:"pv-title-gradient-1"}," The Observer Effect explains why the same "),h("h2",{class:"pv-title-gradient-2"}," life feels different to different people ")],-1)),h("div",oc,[(pe(),ke("svg",ic,[P[4]||(P[4]=En('<defs data-v-65cb23ba><linearGradient id="pv-helixGradient" x1="0%" y1="0%" x2="100%" y2="0%" data-v-65cb23ba><stop offset="0%" stop-color="#a855f7" data-v-65cb23ba><animate attributeName="stop-color" values="#a855f7;#ec4899;#06b6d4;#a855f7" dur="4s" repeatCount="indefinite" data-v-65cb23ba></animate></stop><stop offset="50%" stop-color="#ec4899" data-v-65cb23ba><animate attributeName="stop-color" values="#ec4899;#06b6d4;#a855f7;#ec4899" dur="4s" repeatCount="indefinite" data-v-65cb23ba></animate></stop><stop offset="100%" stop-color="#06b6d4" data-v-65cb23ba><animate attributeName="stop-color" values="#06b6d4;#a855f7;#ec4899;#06b6d4" dur="4s" repeatCount="indefinite" data-v-65cb23ba></animate></stop></linearGradient><linearGradient id="pv-imGradient" x1="0%" y1="0%" x2="100%" y2="0%" data-v-65cb23ba><stop offset="0%" stop-color="#06b6d4" data-v-65cb23ba></stop><stop offset="100%" stop-color="#22d3d3" data-v-65cb23ba></stop></linearGradient><linearGradient id="pv-reGradient" x1="0%" y1="0%" x2="100%" y2="0%" data-v-65cb23ba><stop offset="0%" stop-color="#f97316" data-v-65cb23ba></stop><stop offset="100%" stop-color="#fb923c" data-v-65cb23ba></stop></linearGradient><linearGradient id="pv-spiralGradient" x1="0%" y1="0%" x2="100%" y2="100%" data-v-65cb23ba><stop offset="0%" stop-color="#a855f7" data-v-65cb23ba></stop><stop offset="100%" stop-color="#6366f1" data-v-65cb23ba></stop></linearGradient><linearGradient id="pv-axisGradient" x1="0%" y1="0%" x2="100%" y2="0%" data-v-65cb23ba><stop offset="0%" stop-color="#64748b" data-v-65cb23ba></stop><stop offset="100%" stop-color="#94a3b8" data-v-65cb23ba></stop></linearGradient><filter id="pv-glow-cyan" x="-50%" y="-50%" width="200%" height="200%" data-v-65cb23ba><feGaussianBlur stdDeviation="3" result="coloredBlur" data-v-65cb23ba></feGaussianBlur><feMerge data-v-65cb23ba><feMergeNode in="coloredBlur" data-v-65cb23ba></feMergeNode><feMergeNode in="SourceGraphic" data-v-65cb23ba></feMergeNode></feMerge></filter><filter id="pv-glow-orange" x="-50%" y="-50%" width="200%" height="200%" data-v-65cb23ba><feGaussianBlur stdDeviation="3" result="coloredBlur" data-v-65cb23ba></feGaussianBlur><feMerge data-v-65cb23ba><feMergeNode in="coloredBlur" data-v-65cb23ba></feMergeNode><feMergeNode in="SourceGraphic" data-v-65cb23ba></feMergeNode></feMerge></filter><filter id="pv-glow-purple" x="-50%" y="-50%" width="200%" height="200%" data-v-65cb23ba><feGaussianBlur stdDeviation="4" result="coloredBlur" data-v-65cb23ba></feGaussianBlur><feMerge data-v-65cb23ba><feMergeNode in="coloredBlur" data-v-65cb23ba></feMergeNode><feMergeNode in="SourceGraphic" data-v-65cb23ba></feMergeNode></feMerge></filter><filter id="pv-glow-strong" x="-100%" y="-100%" width="300%" height="300%" data-v-65cb23ba><feGaussianBlur stdDeviation="6" result="coloredBlur" data-v-65cb23ba></feGaussianBlur><feMerge data-v-65cb23ba><feMergeNode in="coloredBlur" data-v-65cb23ba></feMergeNode><feMergeNode in="coloredBlur" data-v-65cb23ba></feMergeNode><feMergeNode in="SourceGraphic" data-v-65cb23ba></feMergeNode></feMerge></filter></defs>',1)),h("line",{x1:A.value.bl.x,y1:A.value.bl.y,x2:A.value.tl.x,y2:A.value.tl.y,stroke:"#0e7490","stroke-width":"1",class:"pv-shimmer"},null,8,rc),h("line",{x1:A.value.tl.x,y1:A.value.tl.y,x2:A.value.tr.x,y2:A.value.tr.y,stroke:"#0e7490","stroke-width":"1",class:"pv-shimmer"},null,8,lc),h("line",{x1:A.value.bl.x,y1:A.value.bl.y,x2:A.value.br.x,y2:A.value.br.y,stroke:"#0e7490","stroke-width":"1",class:"pv-shimmer"},null,8,ac),h("line",{x1:A.value.tr.x,y1:A.value.tr.y,x2:A.value.br.x,y2:A.value.br.y,stroke:"#0e7490","stroke-width":"1",class:"pv-shimmer"},null,8,cc),h("path",{d:w.value,fill:"none",stroke:"url(#pv-imGradient)","stroke-width":"2"},null,8,fc),h("circle",{cx:Pe.value.x,cy:Pe.value.y,r:"4",fill:"#06b6d4",class:"pv-point-pulse"},null,8,uc),h("g",{transform:`translate(${Ge.value.x}, ${Ge.value.y-25}) rotate(${nt.value})`},[...P[0]||(P[0]=[En('<text fill="#22d3d3" font-size="13" font-family="Times New Roman, serif" text-anchor="middle" style="letter-spacing:-0.5px;" data-v-65cb23ba><tspan font-weight="bold" data-v-65cb23ba>Im</tspan><tspan font-style="italic" data-v-65cb23ba> f</tspan><tspan data-v-65cb23ba>=e</tspan><tspan baseline-shift="super" font-size="9" data-v-65cb23ba>−γ(t−t₀)²</tspan><tspan font-style="italic" data-v-65cb23ba>sin(ωt)</tspan></text>',1)])],8,dc),h("line",{x1:k.value.bl.x,y1:k.value.bl.y,x2:k.value.br.x,y2:k.value.br.y,stroke:"#c2410c","stroke-width":"1",class:"pv-shimmer"},null,8,pc),h("line",{x1:k.value.bl.x,y1:k.value.bl.y,x2:k.value.tl.x,y2:k.value.tl.y,stroke:"#c2410c","stroke-width":"1",class:"pv-shimmer"},null,8,vc),h("line",{x1:k.value.br.x,y1:k.value.br.y,x2:k.value.tr.x,y2:k.value.tr.y,stroke:"#c2410c","stroke-width":"1",class:"pv-shimmer"},null,8,hc),h("line",{x1:k.value.tl.x,y1:k.value.tl.y,x2:k.value.tr.x,y2:k.value.tr.y,stroke:"#c2410c","stroke-width":"1",class:"pv-shimmer"},null,8,mc),h("path",{d:S.value,fill:"none",stroke:"url(#pv-reGradient)","stroke-width":"2"},null,8,gc),h("circle",{cx:Ce.value.x,cy:Ce.value.y,r:"4",fill:"#f97316",class:"pv-point-pulse"},null,8,bc),h("g",{transform:`translate(${X.value.x}, ${X.value.y+25}) rotate(${ae.value})`},[...P[1]||(P[1]=[En('<text fill="#fb923c" font-size="13" font-family="Times New Roman, serif" text-anchor="middle" style="letter-spacing:-0.5px;" data-v-65cb23ba><tspan font-weight="bold" data-v-65cb23ba>Re</tspan><tspan font-style="italic" data-v-65cb23ba> f</tspan><tspan data-v-65cb23ba>=e</tspan><tspan baseline-shift="super" font-size="9" data-v-65cb23ba>−γ(t−t₀)²</tspan><tspan font-style="italic" data-v-65cb23ba>cos(ωt)</tspan></text>',1)])],8,xc),h("line",{x1:m.value.bl.x,y1:m.value.bl.y,x2:m.value.tl.x,y2:m.value.tl.y,stroke:"#7c3aed","stroke-width":"1",class:"pv-shimmer"},null,8,yc),h("line",{x1:m.value.tl.x,y1:m.value.tl.y,x2:m.value.tr.x,y2:m.value.tr.y,stroke:"#7c3aed","stroke-width":"1",class:"pv-shimmer"},null,8,_c),h("line",{x1:m.value.bl.x,y1:m.value.bl.y,x2:m.value.br.x,y2:m.value.br.y,stroke:"#7c3aed","stroke-width":"1",class:"pv-shimmer"},null,8,wc),h("line",{x1:m.value.br.x,y1:m.value.br.y,x2:m.value.tr.x,y2:m.value.tr.y,stroke:"#7c3aed","stroke-width":"1",class:"pv-shimmer"},null,8,kc),h("line",{x1:C.value.x,y1:C.value.y,x2:g.value.x,y2:g.value.y,stroke:"#8b5cf6","stroke-width":"1"},null,8,Sc),h("line",{x1:M.value.x,y1:M.value.y,x2:O.value.x,y2:O.value.y,stroke:"#8b5cf6","stroke-width":"1"},null,8,zc),h("polygon",{points:`${g.value.x},${g.value.y-6} ${g.value.x-3},${g.value.y+2} ${g.value.x+3},${g.value.y+2}`,fill:"#a855f7"},null,8,Tc),h("path",{d:p.value,fill:"none",stroke:"url(#pv-spiralGradient)","stroke-width":"2"},null,8,Ac),h("circle",{cx:ue.value.x,cy:ue.value.y,r:"4",fill:"#a855f7",class:"pv-point-pulse"},null,8,Ec),h("g",{transform:`translate(${Se.value.x}, ${Se.value.y-20}) rotate(${Z.value})`},[...P[2]||(P[2]=[En('<text fill="#c084fc" font-size="10" font-family="Times New Roman, serif" text-anchor="middle" style="letter-spacing:-0.5px;" data-v-65cb23ba><tspan font-style="italic" data-v-65cb23ba>f</tspan><tspan data-v-65cb23ba>=e</tspan><tspan baseline-shift="super" font-size="7" data-v-65cb23ba>−γ(t−t₀)²</tspan><tspan font-style="italic" data-v-65cb23ba>e</tspan><tspan baseline-shift="super" font-size="7" data-v-65cb23ba>iωt</tspan></text>',1)])],8,Cc),h("path",{d:f.value,fill:"none",stroke:"url(#pv-helixGradient)","stroke-width":"4"},null,8,Mc),h("line",{x1:Q.value.x,y1:Q.value.y,x2:Pe.value.x,y2:Pe.value.y,stroke:"#06b6d4","stroke-width":"1","stroke-dasharray":"6,4",class:"pv-dash-flow",opacity:"0.7"},null,8,Rc),h("line",{x1:Q.value.x,y1:Q.value.y,x2:Ce.value.x,y2:Ce.value.y,stroke:"#f97316","stroke-width":"1","stroke-dasharray":"6,4",class:"pv-dash-flow",opacity:"0.7"},null,8,Ic),h("line",{x1:Y.value.x,y1:Y.value.y,x2:q.value.x,y2:q.value.y,stroke:"url(#pv-axisGradient)","stroke-width":"2"},null,8,Pc),h("polygon",{points:`${q.value.x-6},${q.value.y+6} ${q.value.x+6},${q.value.y-2} ${q.value.x+2},${q.value.y+10}`,fill:"#94a3b8"},null,8,Oc),h("line",{x1:H.value.x,y1:H.value.y+8,x2:U.value.x,y2:U.value.y,stroke:"url(#pv-axisGradient)","stroke-width":"2"},null,8,Lc),h("polygon",{points:`${U.value.x},${U.value.y-8} ${U.value.x-4},${U.value.y+2} ${U.value.x+4},${U.value.y+2}`,fill:"#94a3b8"},null,8,Fc),h("line",{x1:H.value.x-8,y1:H.value.y-5,x2:N.value.x,y2:N.value.y,stroke:"url(#pv-axisGradient)","stroke-width":"2"},null,8,Nc),h("polygon",{points:`${N.value.x+8},${N.value.y+4} ${N.value.x-2},${N.value.y-4} ${N.value.x-4},${N.value.y+6}`,fill:"#94a3b8"},null,8,Dc),h("g",{transform:`translate(${Ve.value.x+30}, ${Ve.value.y-70}) rotate(${nt.value})`},[...P[3]||(P[3]=[h("text",{fill:"#e879f9","font-size":"10","font-family":"Times New Roman, serif","text-anchor":"middle",style:{"letter-spacing":"-0.5px"}},[h("tspan",{"font-style":"italic"},"f(t)"),h("tspan",null,"=Re+"),h("tspan",{"font-style":"italic"},"i"),h("tspan",null,"·Im")],-1)])],8,$c),h("circle",{cx:Q.value.x,cy:Q.value.y,r:"10",fill:"url(#pv-helixGradient)",opacity:"0.3",class:"pv-point-pulse"},null,8,jc),h("circle",{cx:Q.value.x,cy:Q.value.y,r:"6",fill:"#fff"},null,8,Bc),h("circle",{cx:Q.value.x,cy:Q.value.y,r:"3",fill:"url(#pv-helixGradient)"},null,8,Hc),h("text",{x:U.value.x-30,y:U.value.y+8,fill:"#22d3d3","font-size":"18","font-weight":"bold","font-family":"serif"},"Im",8,Uc),h("text",{x:N.value.x+10,y:N.value.y+6,fill:"#fb923c","font-size":"18","font-weight":"bold","font-family":"serif"},"Re",8,Gc),h("text",{x:q.value.x-3,y:q.value.y+22,fill:"#c084fc","font-size":"18","font-style":"italic","font-family":"serif"},"t",8,Vc),h("text",{x:H.value.x+5,y:H.value.y+20,fill:"#94a3b8","font-size":"13","font-style":"italic","font-family":"serif"},"t₀",8,Wc)]))]),h("div",Kc,[h("div",Yc,[h("span",qc,[P[5]||(P[5]=h("span",{class:"pv-values-f"},"f",-1)),P[6]||(P[6]=h("span",{class:"pv-values-punctuation"},"(",-1)),P[7]||(P[7]=h("span",{class:"pv-values-t"},"t",-1)),P[8]||(P[8]=h("span",{class:"pv-values-punctuation"},") = ",-1)),h("span",Xc,Le(l.value>=0?"+":"")+Le(l.value.toFixed(2)),1),P[9]||(P[9]=h("span",{class:"pv-values-punctuation"}," + ",-1)),h("span",Jc,Le(c.value.toFixed(2)),1),P[10]||(P[10]=h("span",{class:"pv-values-i"}," i",-1))])]),h("div",Zc,[h("span",Qc,[P[11]||(P[11]=h("span",{class:"pv-values-time-t"},"t",-1)),P[12]||(P[12]=h("span",{class:"pv-values-time-punctuation"}," = ",-1)),h("span",ef,Le((t.value/tf).toFixed(2)),1),P[13]||(P[13]=h("span",{class:"pv-values-time-punctuation"},null,-1)),P[14]||(P[14]=h("span",{class:"pv-values-time-period"},"T",-1))])])])]))}}),[["__scopeId","data-v-65cb23ba"]]),sf={class:"app-container"},of={class:"c-controls"},rf={class:"c-controls-row"},lf=["value"],af=["value"],cf={key:0,class:"c-slider-container"},ff=["value"],uf={class:"c-slider-label"},df={class:"c-foreground-layer"};Zl(Vt({__name:"App",setup(e){const t=Tr(()=>ta(()=>Promise.resolve().then(()=>Sf),void 0,Ln&&Ln.tagName.toUpperCase()==="SCRIPT"&&Ln.src||new URL("assets/index-CrDz5UUP.js",document.baseURI).href)),n=se(!0),s=se(!1),o=U=>{U.target instanceof HTMLInputElement||U.target instanceof HTMLTextAreaElement||U.key.toLowerCase()==="q"&&!U.ctrlKey&&!U.metaKey&&!U.altKey&&(U.preventDefault(),s.value=!s.value)},i=()=>{s.value=!1};Yt(()=>{window.addEventListener("keydown",o)}),At(()=>{window.removeEventListener("keydown",o)});const r=se(23),l=se(50),c=se(!1),d=se(!1);let f=null;const p=se(!1);(()=>{p.value="ontouchstart"in window||navigator.maxTouchPoints>0})();const S=()=>{p.value||(f&&(clearTimeout(f),f=null),d.value=!0)},m=()=>{p.value||(f=window.setTimeout(()=>{d.value=!1,f=null},1e3))},g=()=>{f&&(clearTimeout(f),f=null),d.value=!d.value},C=[{value:0,label:"Mandelbulb"},{value:1,label:"Mandelbox"},{value:2,label:"Menger Sponge"},{value:3,label:"Sierpinski"},{value:4,label:"Kaleidoscope 3D"},{value:5,label:"Organic Hybrid"},{value:6,label:"Fractal Land"},{value:7,label:"+ Galaxy Nebula"},{value:8,label:"+ Infinite Tunnel"},{value:9,label:"+ Plasma Fractal"},{value:10,label:"+ Circuits"},{value:11,label:"+ Metaballs"},{value:12,label:"+ Volumetric Lines"},{value:13,label:"+ Disco Tunnel"},{value:14,label:"+ Speed Drive"},{value:15,label:"+ Hot Rocks"},{value:16,label:"+ Server Room"},{value:17,label:"+ Remnant X"},{value:18,label:"+ Kali Set"},{value:19,label:"+ Generators"},{value:20,label:"+ Simplicity Galaxy"},{value:21,label:"+ Ribbons"},{value:22,label:"+ Twisted Rings"},{value:23,label:"+ Waves Remix"},{value:24,label:"+ Dancing Metalights"},{value:25,label:"+ IO Blocks"},{value:26,label:"+ Beating Circles"},{value:27,label:"+ Circle Wave"},{value:28,label:"+ Soundflower"},{value:29,label:"+ Polar Beats"},{value:30,label:"+ Undulant Spectre"},{value:31,label:"+ Revision 2015"},{value:32,label:"+ Gameboy Style"},{value:33,label:"+ Electric Storm"},{value:34,label:"+ Vortex"},{value:35,label:"+ Neon Grid"},{value:36,label:"+ Matrix Rain"},{value:37,label:"+ Fire"},{value:38,label:"+ Aurora"},{value:39,label:"+ Wormhole"},{value:40,label:"+ Hexagons"},{value:41,label:"+ Bubbles"},{value:42,label:"+ Lightning"},{value:43,label:"+ Kaleidoscope 2D"},{value:44,label:"+ Starfield"},{value:45,label:"+ Liquid Metal"},{value:46,label:"+ Fractal Tree"},{value:47,label:"+ Voronoi"},{value:48,label:"+ Psychedelic"},{value:49,label:"+ Energy Field"}],M=W(()=>({opacity:l.value/100,filter:`brightness(${.3+l.value/100*.7})`})),O=()=>{n.value=!n.value},A=()=>{c.value=!c.value},k=U=>{const N=U.target;r.value=parseInt(N.value)},H=U=>{const N=U.target;l.value=parseInt(N.value)};return(U,N)=>(pe(),ke("div",sf,[h("div",of,[h("button",{class:Me(["c-menu-toggle",{"c-menu-toggle--open":c.value}]),onClick:A},[...N[1]||(N[1]=[h("span",{class:"c-hamburger-line"},null,-1),h("span",{class:"c-hamburger-line"},null,-1),h("span",{class:"c-hamburger-line"},null,-1)])],2),h("div",{class:Me(["c-menu-panel",{"c-menu-panel--visible":c.value}])},[h("div",rf,[h("select",{class:"c-fractal-select",onChange:k,value:r.value},[(pe(),ke(Ee,null,ko(C,Y=>h("option",{key:Y.value,value:Y.value},Le(Y.label),9,af)),64))],40,lf),h("button",{class:"c-fractal-toggle",onClick:O},Le(n.value?"ON":"OFF"),1)]),n.value?(pe(),ke("div",cf,[N[2]||(N[2]=h("span",{class:"c-slider-label"},"Intensity",-1)),h("input",{type:"range",class:"c-brightness-slider",min:"10",max:"100",value:l.value,onInput:H},null,40,ff),h("span",uf,Le(l.value)+"%",1)])):ft("",!0)],2)]),h("div",{class:Me(["c-background-layer",{"c-background-layer--hidden":!n.value}]),style:Lt(M.value)},[n.value?(pe(),bs(nc,{key:0,mode:r.value},null,8,["mode"])):ft("",!0)],6),h("div",df,[be(nf)]),h("div",{class:"c-nav-footer",onMouseenter:S,onMouseleave:m},[h("button",{class:Me(["c-nav-toggle",{"c-nav-toggle--open":d.value}]),onClick:g},[...N[3]||(N[3]=[h("span",{class:"c-nav-arrow"},"↑",-1)])],2),h("div",{class:Me(["c-nav-menu",{"c-nav-menu--visible":d.value}])},[...N[4]||(N[4]=[h("a",{href:"https://diegonmarcos.github.io/myprofile/",class:"c-nav-button",target:"_blank",rel:"noopener noreferrer"}," Profile ",-1),h("a",{href:"https://diegonmarcos.github.io/linktree/",class:"c-nav-button",target:"_blank",rel:"noopener noreferrer"}," Linktree ",-1),h("a",{href:"https://diegonmarcos.github.io/landpage/",class:"c-nav-button",target:"_blank",rel:"noopener noreferrer"}," Landpage ",-1)])],2)],32),h("button",{class:"c-cube-trigger",onClick:N[0]||(N[0]=Y=>s.value=!0),title:"Cube View (Q)"},[...N[5]||(N[5]=[h("svg",{viewBox:"0 0 24 24",width:"20",height:"20",fill:"none",stroke:"currentColor","stroke-width":"2"},[h("path",{d:"M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"})],-1),h("span",{class:"c-cube-trigger__key"},"Q",-1)])]),be(no(t),{active:s.value,onClose:i},null,8,["active"])]))}})).mount("#app");const pf={class:"c-cube-scene"},vf={class:"c-cube__face c-cube__face--front"},hf={key:0,src:"index.html",class:"c-cube__iframe",title:"Current View"},mf={class:"c-cube__face c-cube__face--right"},gf=["src"],bf={class:"c-cube__face c-cube__face--back"},xf=["src"],yf={key:0,class:"c-cube-view-mode"},_f={key:1,class:"c-cube-hint"},wf={key:2,class:"c-cube-indicator"},kf=["onClick"],bi=-30,xi=-45,Sf=Object.freeze(Object.defineProperty({__proto__:null,default:Vt({__name:"CubeView",props:{active:{type:Boolean,default:!1}},emits:["close"],setup(e,{emit:t}){const n=e,s=t,o=se(n.active),i=se(bi),r=se(xi),l=se(1),c=se(!1),d=se({x:0,y:0}),f=se(0),p=se(!0),w=se(!1),S=se(!1),m=se(0),g=se(0),C=se(0);let M=null;const O=["Front","Right","Back","Left","Top","Bottom"],A={right:"cube_fractal_neon.html",back:"perspectives.html"},k=tr(new Set([0])),H=I=>k.value.has(I),U=()=>{var G;const I={0:[1,3,4,5],1:[0,2,4,5],2:[1,3,4,5],3:[0,2,4,5],4:[0,1,2,3],5:[0,1,2,3]},D=new Set(k.value);D.add(f.value),(G=I[f.value])==null||G.forEach(P=>D.add(P)),D.size!==k.value.size&&(k.value=D)},N=[{x:0,y:0},{x:0,y:-90},{x:0,y:180},{x:0,y:90},{x:90,y:0},{x:-90,y:0}],Y=[{x:-30,y:-45},{x:-30,y:-135},{x:-30,y:135},{x:-30,y:45},{x:-60,y:-45},{x:60,y:-45}];gn(()=>n.active,I=>{o.value=I,I?(document.body.style.overflow="hidden",i.value=bi,r.value=xi,l.value=1,p.value=!0,f.value=0):document.body.style.overflow=""});const q=W(()=>({transform:`
    translateZ(-300px)
    scale(${l.value})
    rotateX(${i.value}deg)
    rotateY(${r.value}deg)
  `})),Q=(I,D,G=400)=>new Promise(P=>{w.value=!0;const ie=i.value,ze=r.value,xt=performance.now();let We=D-ze;We>180&&(We-=360),We<-180&&(We+=360);const Pt=ze+We,Ke=On=>{const a=On-xt,u=Math.min(a/G,1),v=1-Math.pow(1-u,3);i.value=ie+(I-ie)*v,r.value=ze+(Pt-ze)*v,u<1?requestAnimationFrame(Ke):(i.value=I,r.value=D,w.value=!1,P())};requestAnimationFrame(Ke)}),ue=async I=>{w.value||(f.value=I,p.value?(await Q(N[I].x,N[I].y),p.value=!1):(await Q(Y[I].x,Y[I].y),p.value=!0))},Pe=async()=>{w.value||(p.value?(await Q(N[f.value].x,N[f.value].y),p.value=!1):(await Q(Y[f.value].x,Y[f.value].y),p.value=!0))},Ce=I=>{if(I.length<2)return 0;const D=I[0].clientX-I[1].clientX,G=I[0].clientY-I[1].clientY;return Math.sqrt(D*D+G*G)},nt=I=>{if(w.value)return;if(M&&(cancelAnimationFrame(M),M=null),g.value=0,C.value=0,"touches"in I&&I.touches.length===2){S.value=!0,m.value=Ce(I.touches);return}c.value=!0;const D="touches"in I?I.touches[0]:I;d.value={x:D.clientX,y:D.clientY}},Ge=I=>{if(!o.value||w.value)return;if("touches"in I&&I.touches.length===2){I.preventDefault();const ie=Ce(I.touches);if(m.value>0){const ze=ie/m.value;l.value=Math.max(.3,Math.min(2,l.value*ze))}m.value=ie;return}if(!c.value)return;const D="touches"in I?I.touches[0]:I,G=D.clientX-d.value.x,P=D.clientY-d.value.y;C.value=G*.4,g.value=-P*.4,r.value+=C.value,i.value+=g.value,d.value={x:D.clientX,y:D.clientY},Se()},ae=()=>{if(Math.abs(g.value)<.1&&Math.abs(C.value)<.1){M=null;return}g.value*=.95,C.value*=.95,r.value+=C.value,i.value+=g.value,Se(),M=requestAnimationFrame(ae)},X=()=>{c.value&&(Math.abs(g.value)>.5||Math.abs(C.value)>.5)&&(M=requestAnimationFrame(ae)),c.value=!1,S.value=!1,m.value=0},Z=I=>{if(!o.value)return;I.preventDefault();const D=I.deltaY>0?.95:1.05;l.value=Math.max(.3,Math.min(2,l.value*D))},Se=()=>{let I=(r.value%360+360)%360;Math.abs(i.value)>60?f.value=i.value>0?4:5:I>=315||I<45?f.value=0:I>=45&&I<135?f.value=3:I>=135&&I<225?f.value=2:f.value=1;const D=Math.abs(i.value)>15&&Math.abs(i.value)<75,G=I%90>15&&I%90<75;p.value=D||G,U()},Ve=I=>{if(o.value){if(I.key.toLowerCase()==="q"||I.key==="Escape"){I.preventDefault(),s("close");return}if(I.key===" "){I.preventDefault(),Pe();return}if(!w.value)switch(I.key){case"ArrowRight":f.value<4&&ue((f.value+1)%4);break;case"ArrowLeft":f.value<4&&ue((f.value+3)%4);break;case"ArrowUp":ue(4);break;case"ArrowDown":ue(5);break}}};return Yt(()=>{window.addEventListener("mousemove",Ge),window.addEventListener("mouseup",X),window.addEventListener("touchmove",Ge),window.addEventListener("touchend",X),window.addEventListener("keydown",Ve)}),At(()=>{window.removeEventListener("mousemove",Ge),window.removeEventListener("mouseup",X),window.removeEventListener("touchmove",Ge),window.removeEventListener("touchend",X),window.removeEventListener("keydown",Ve),document.body.style.overflow="",M&&cancelAnimationFrame(M)}),(I,D)=>(pe(),bs(kr,{to:"body"},[h("div",{class:Me(["c-cube-overlay",{"c-cube-overlay--active":o.value}]),onWheel:hi(Z,["prevent"]),onMousedown:nt,onTouchstart:hi(nt,["prevent"])},[h("div",pf,[h("div",{class:Me(["c-cube",{"c-cube--animating":w.value}]),style:Lt(q.value)},[h("div",vf,[o.value&&H(0)?(pe(),ke("iframe",hf)):ft("",!0)]),h("div",mf,[o.value&&H(1)?(pe(),ke("iframe",{key:0,src:A.right,class:"c-cube__iframe",title:"Neon Cube"},null,8,gf)):ft("",!0)]),h("div",bf,[o.value&&H(2)?(pe(),ke("iframe",{key:0,src:A.back,class:"c-cube__iframe",title:"Perspectives"},null,8,xf)):ft("",!0)]),D[0]||(D[0]=h("div",{class:"c-cube__face c-cube__face--left"},[h("div",{class:"c-cube__placeholder c-cube__placeholder--gradient-1"},[h("h2",null,"Coming Soon"),h("p",null,"Future content")])],-1)),D[1]||(D[1]=h("div",{class:"c-cube__face c-cube__face--top"},[h("div",{class:"c-cube__placeholder c-cube__placeholder--gradient-2"},[h("h2",null,"Projects"),h("p",null,"View from above")])],-1)),D[2]||(D[2]=h("div",{class:"c-cube__face c-cube__face--bottom"},[h("div",{class:"c-cube__placeholder c-cube__placeholder--gradient-3"},[h("h2",null,"Contact"),h("p",null,"Get in touch")])],-1))],6)]),o.value?(pe(),ke("div",yf,Le(p.value?"Isometric View":`${O[f.value]} Face`),1)):ft("",!0),o.value?(pe(),ke("div",_f,[...D[3]||(D[3]=[h("span",null,"Drag to rotate",-1),h("span",{class:"c-cube-hint__separator"},"|",-1),h("span",null,"Pinch/Scroll to zoom",-1),h("span",{class:"c-cube-hint__separator"},"|",-1),h("span",null,[h("kbd",null,"Q"),Jo(" close")],-1)])])):ft("",!0),o.value?(pe(),ke("div",wf,[(pe(),ke(Ee,null,ko(O,(G,P)=>h("div",{key:G,class:Me(["c-cube-indicator__dot",{"c-cube-indicator__dot--active":f.value===P}]),onClick:ie=>ue(P)},Le(G),11,kf)),64))])):ft("",!0)],34)]))}})},Symbol.toStringTag,{value:"Module"}))})();
