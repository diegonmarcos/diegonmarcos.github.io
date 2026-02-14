(function(){"use strict";var Co=document.createElement("style");Co.textContent=`.bio-fractal-canvas[data-v-1ee27525]{width:100%;height:100%;display:block}@keyframes pv-shimmer-65cb23ba{0%,to{opacity:.6}50%{opacity:1}}@keyframes pv-glow-pulse-65cb23ba{0%,to{filter:drop-shadow(0 0 3px currentColor)}50%{filter:drop-shadow(0 0 12px currentColor)}}@keyframes pv-dash-flow-65cb23ba{0%{stroke-dashoffset:0}to{stroke-dashoffset:-20}}@keyframes pv-point-pulse-65cb23ba{0%,to{r:6;opacity:1}50%{r:9;opacity:.8}}.pv-shimmer[data-v-65cb23ba]{animation:pv-shimmer-65cb23ba 2s ease-in-out infinite}.pv-glow-pulse[data-v-65cb23ba]{animation:pv-glow-pulse-65cb23ba 1.5s ease-in-out infinite}.pv-dash-flow[data-v-65cb23ba]{animation:pv-dash-flow-65cb23ba 1s linear infinite}.pv-point-pulse[data-v-65cb23ba]{animation:pv-point-pulse-65cb23ba .8s ease-in-out infinite}.pv-container[data-v-65cb23ba]{width:100%;height:100%;display:flex;flex-direction:column;align-items:center;justify-content:center;padding:10px;overflow:hidden;background:transparent}.pv-title[data-v-65cb23ba]{text-align:center;margin-bottom:16px;padding:0 16px;width:100%;max-width:840px}.pv-title h1[data-v-65cb23ba],.pv-title h2[data-v-65cb23ba]{font-size:clamp(1.4rem,4.5vw,2rem);font-weight:700;line-height:1.3;margin:0}.pv-title-gradient-1[data-v-65cb23ba]{background:linear-gradient(to right,#a855f7,#ec4899,#22d3ee);-webkit-background-clip:text;-webkit-text-fill-color:transparent;background-clip:text}.pv-title-gradient-2[data-v-65cb23ba]{background:linear-gradient(to right,#22d3ee,#a855f7,#ec4899);-webkit-background-clip:text;-webkit-text-fill-color:transparent;background-clip:text}.pv-svg-container[data-v-65cb23ba]{position:relative;width:100%;max-width:840px;height:auto;aspect-ratio:840/640;flex-shrink:1}.pv-svg-container svg[data-v-65cb23ba]{width:100%;height:100%}.pv-values[data-v-65cb23ba]{margin-top:16px;width:100%;max-width:580px;text-align:center;padding:0 16px}.pv-values-main[data-v-65cb23ba]{text-align:center;margin-bottom:20px}.pv-values-text[data-v-65cb23ba]{font-size:.9rem;font-family:Times New Roman,serif}.pv-values-f[data-v-65cb23ba]{color:#a855f7;font-style:italic}.pv-values-punctuation[data-v-65cb23ba]{color:#d1d5db}.pv-values-t[data-v-65cb23ba]{color:#a855f7;font-style:italic}.pv-values-real[data-v-65cb23ba]{color:#fb923c}.pv-values-imag[data-v-65cb23ba]{color:#22d3d3}.pv-values-i[data-v-65cb23ba]{color:#22d3d3;font-style:italic}.pv-values-time[data-v-65cb23ba]{text-align:center}.pv-values-time-text[data-v-65cb23ba]{font-size:.85rem;font-family:Times New Roman,serif}.pv-values-time-t[data-v-65cb23ba]{color:#a855f7;font-style:italic}.pv-values-time-punctuation[data-v-65cb23ba]{color:#9ca3af}.pv-values-time-value[data-v-65cb23ba]{color:#d1d5db}.pv-values-time-period[data-v-65cb23ba]{color:#a855f7;font-style:italic}*{box-sizing:border-box;margin:0;padding:0}html,body{width:100%;height:100%;overflow:hidden}body{background-color:#000;font-family:-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,sans-serif;color:#fff}button{border:none;background:none;padding:0;cursor:pointer;font:inherit}select{font-family:-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,sans-serif}canvas{display:block}.o-fullscreen{width:100%;height:100%;position:relative}.o-layer{position:absolute;top:0;left:0;width:100%;height:100%}.o-layer--background{z-index:0}.o-layer--foreground{z-index:1;display:flex;align-items:center;justify-content:center;pointer-events:none}.o-fixed{position:fixed}.c-background-layer{position:absolute;top:0;left:0;width:100%;height:100%;z-index:0;transition-property:opacity,filter;transition-duration:.3s;transition-timing-function:ease}.c-background-layer--hidden{opacity:0!important;pointer-events:none}.c-background-layer canvas{width:100%!important;height:100%!important}.c-foreground-layer{position:absolute;top:0;left:0;width:100%;height:100%;z-index:1;display:flex;align-items:center;justify-content:center;pointer-events:none}.c-controls{position:fixed;top:10px;right:10px;z-index:100;display:flex;flex-direction:column;gap:8px;align-items:flex-end}.c-menu-toggle{background:transparent!important;backdrop-filter:none;-webkit-backdrop-filter:none;transition-property:background,transform;transition-duration:.3s;transition-timing-function:ease;border:none;color:#fff;width:36px;height:36px;border-radius:8px;display:flex;align-items:center;justify-content:center;flex-direction:column;gap:4px;padding:8px}.c-menu-toggle:hover{background:transparent!important}.c-menu-toggle:hover .c-hamburger-line{box-shadow:0 0 8px #fff6}.c-menu-toggle--open{transform:rotate(90deg)}.c-hamburger-line{display:block;width:100%;height:2px;background:#fffc;border-radius:1px;transition-property:background,box-shadow;transition-duration:.3s;transition-timing-function:ease;box-shadow:0 0 4px #fff3}.c-menu-panel{display:flex;flex-direction:column;gap:8px;align-items:flex-end;max-height:0;overflow:hidden;opacity:0;transition-property:max-height,opacity;transition-duration:.3s;transition-timing-function:ease}.c-menu-panel--visible{max-height:200px;opacity:1}.c-controls-row{display:flex;gap:8px;align-items:center}.c-fractal-toggle{background:#ffffff1a;-webkit-backdrop-filter:blur(4px);backdrop-filter:blur(4px);transition-property:background;transition-duration:.3s;transition-timing-function:ease;border:1px solid rgba(255,255,255,.3);color:#fff;padding:8px 12px;border-radius:6px;font-size:12px}.c-fractal-toggle:hover{background:#fff3}.c-fractal-select{background:#ffffff1a;-webkit-backdrop-filter:blur(4px);backdrop-filter:blur(4px);border:1px solid rgba(255,255,255,.3);color:#fff;padding:8px 28px 8px 12px;border-radius:6px;font-size:12px;outline:none;appearance:none;background-image:url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' fill='white' viewBox='0 0 16 16'%3E%3Cpath d='M8 11L3 6h10l-5 5z'/%3E%3C/svg%3E");background-repeat:no-repeat;background-position:right 8px center;transition-property:background-color;transition-duration:.3s;transition-timing-function:ease}.c-fractal-select:hover{background-color:#fff3}.c-fractal-select option{background:#1a1a2e;color:#fff}.c-slider-container{background:#ffffff1a;-webkit-backdrop-filter:blur(4px);backdrop-filter:blur(4px);display:flex;align-items:center;gap:8px;border:1px solid rgba(255,255,255,.3);padding:6px 12px;border-radius:6px}.c-slider-label{color:#fff;font-size:11px;white-space:nowrap}.c-brightness-slider{appearance:none;width:80px;height:4px;border-radius:2px;background:#ffffff4d;outline:none;cursor:pointer}.c-brightness-slider::-webkit-slider-thumb{appearance:none;width:14px;height:14px;border-radius:50%;background:#fff;cursor:pointer;box-shadow:0 1px 3px #0000004d}.c-brightness-slider::-moz-range-thumb{width:14px;height:14px;border-radius:50%;background:#fff;cursor:pointer;border:none}.c-nav-footer{position:fixed;bottom:16px;left:50%;transform:translate(-50%);z-index:100;display:flex;flex-direction:column;gap:12px;align-items:center;pointer-events:auto;padding:8px}.c-nav-toggle{position:relative;width:48px;height:48px;border:none;border-radius:50%;cursor:pointer;transform:translateY(0);transition:transform 3s cubic-bezier(.25,.1,.25,1),box-shadow .3s ease,border-color .3s ease;opacity:1!important;visibility:visible!important;background:transparent!important;backdrop-filter:none;-webkit-backdrop-filter:none;border:2px solid rgba(255,255,255,.8);box-shadow:0 0 20px #ffffff4d}.c-nav-toggle:active{transform:translateY(0) scale(1.05);box-shadow:0 0 8px #ffffff1a}.c-nav-toggle--open{transform:translateY(-30px) scale(1.05)!important;box-shadow:0 0 20px #ffffff40;border-color:#ffffffb3;transition:transform 3s cubic-bezier(.25,.1,.25,1)!important}.c-nav-toggle--open .c-nav-arrow{animation:arrow-bounce-inverted 1.5s ease-in-out infinite}.c-nav-arrow{display:inline-block;font-size:1.8rem;color:#fff;font-weight:700;text-shadow:0 2px 6px rgba(0,0,0,.6);animation:arrow-bounce 1.5s ease-in-out infinite;opacity:1!important}.c-nav-menu{display:flex;flex-wrap:nowrap;gap:8px;max-height:0;overflow:visible;opacity:0;transform:translateY(15px);transition:max-height 1s cubic-bezier(.25,.1,.25,1),opacity .8s cubic-bezier(.25,.1,.25,1),transform 1s cubic-bezier(.25,.1,.25,1);justify-content:center;padding:8px 0}.c-nav-menu--visible{max-height:250px;opacity:1;transform:translateY(0);transition:max-height 3s cubic-bezier(.25,.1,.25,1),opacity 2s cubic-bezier(.25,.1,.25,1) .2s,transform 2.5s cubic-bezier(.25,.1,.25,1)}.c-nav-button{position:relative;padding:10px 16px;font-size:.8rem;font-weight:600;text-decoration:none;color:#fff;border-radius:10px;transition:all .4s cubic-bezier(.4,0,.2,1);overflow:hidden;white-space:nowrap;flex-shrink:0;background:transparent!important;backdrop-filter:none;-webkit-backdrop-filter:none;border:2px solid rgba(255,255,255,.4);box-shadow:0 0 10px #ffffff1f}.c-nav-button:before{content:"";position:absolute;top:0;left:-100%;width:100%;height:100%;background:linear-gradient(90deg,transparent,rgba(255,255,255,.3),transparent);animation:shimmer-slide 3s ease-in-out infinite}.c-nav-button:hover{transform:translateY(-3px) scale(1.05);background:transparent!important;box-shadow:0 0 20px #ffffff40;border-color:#fff9}.c-nav-button:active{transform:translateY(-1px) scale(1.02);background:transparent!important;box-shadow:0 0 12px #ffffff26}.c-nav-button{text-shadow:0 1px 2px rgba(0,0,0,.3)}.c-nav-menu:not(.c-nav-menu--visible) .c-nav-button{opacity:0!important;pointer-events:none}.c-nav-menu--visible .c-nav-button{opacity:1;transform:translateY(0) scale(1);transition:opacity 1s cubic-bezier(.25,.1,.25,1),transform 1s cubic-bezier(.25,.1,.25,1)}.c-nav-menu--visible .c-nav-button:nth-child(1){transition-delay:0s}.c-nav-menu--visible .c-nav-button:nth-child(2){transition-delay:1s}.c-nav-menu--visible .c-nav-button:nth-child(3){transition-delay:2s}@keyframes shimmer-slide{0%{left:-100%}50%,to{left:100%}}@keyframes arrow-bounce{0%,to{transform:translateY(0)}50%{transform:translateY(-6px)}}@keyframes arrow-bounce-inverted{0%,to{transform:rotate(180deg) translateY(0)}50%{transform:rotate(180deg) translateY(6px)}}@media(max-width:768px){.c-nav-toggle{width:30px;height:30px}.c-nav-arrow{font-size:1.15rem}.c-nav-menu{gap:5px}.c-nav-button{padding:6px 10px;font-size:.51rem;border-radius:6px}}@keyframes twinkle{0%,to{opacity:.3}50%{opacity:1}}@keyframes drift{0%{transform:translateY(0) translate(0)}to{transform:translateY(-100vh) translate(20px)}}.c-cube-overlay{position:fixed;inset:0;z-index:9999;background:radial-gradient(ellipse at center,#0d1b2a,#020408);opacity:0;visibility:hidden;transition:opacity .3s ease,visibility .3s ease;display:flex;align-items:center;justify-content:center;overflow:hidden;touch-action:none;-webkit-user-select:none;user-select:none;transform:translateZ(0);-webkit-transform:translateZ(0);will-change:opacity,visibility;isolation:isolate;contain:layout style}.c-cube-overlay:before{content:"";position:absolute;inset:0;pointer-events:none;background-image:radial-gradient(1px 1px at 10% 20%,rgba(255,255,255,.7) 50%,transparent 50%),radial-gradient(1px 1px at 25% 55%,rgba(255,255,255,.5) 50%,transparent 50%),radial-gradient(2px 2px at 40% 30%,rgba(150,180,255,.8) 50%,transparent 50%),radial-gradient(1px 1px at 55% 70%,rgba(255,255,255,.6) 50%,transparent 50%),radial-gradient(1px 1px at 70% 15%,rgba(255,255,255,.7) 50%,transparent 50%),radial-gradient(2px 2px at 85% 45%,rgba(255,200,150,.7) 50%,transparent 50%),radial-gradient(1px 1px at 15% 80%,rgba(255,255,255,.5) 50%,transparent 50%),radial-gradient(1px 1px at 60% 90%,rgba(255,255,255,.6) 50%,transparent 50%),radial-gradient(2px 2px at 90% 75%,rgba(200,150,255,.7) 50%,transparent 50%),radial-gradient(1px 1px at 35% 5%,rgba(255,255,255,.8) 50%,transparent 50%);background-size:250px 250px}.c-cube-overlay--active{opacity:1;visibility:visible}.c-cube-scene{width:min(70vw,70vh);height:min(70vw,70vh);perspective:1400px;perspective-origin:50% 50%;transform-style:preserve-3d;-webkit-transform-style:preserve-3d;transform:translateZ(0);-webkit-transform:translateZ(0);isolation:isolate}.c-cube{width:100%;height:100%;position:relative;transform-style:preserve-3d;-webkit-transform-style:preserve-3d;will-change:transform;-webkit-backface-visibility:hidden;backface-visibility:hidden;cursor:grab}.c-cube:active{cursor:grabbing}.c-cube--animating{pointer-events:none}.c-cube__face{position:absolute;width:min(70vw,70vh);height:min(70vw,70vh);-webkit-backface-visibility:hidden;backface-visibility:hidden;-webkit-transform-style:preserve-3d;transform-style:preserve-3d;contain:layout style paint;border:2px solid rgba(255,255,255,.2);overflow:hidden;background:#0a0a12;cursor:pointer;transition:border-color .2s ease,box-shadow .2s ease;will-change:transform,opacity}.c-cube__face:hover{border-color:#ffffff80;box-shadow:0 0 30px #6496ff4d}.c-cube__face--front{transform:translateZ(calc(min(70vw,70vh)/2))}.c-cube__face--back{transform:rotateY(180deg) translateZ(calc(min(70vw,70vh)/2))}.c-cube__face--right{transform:rotateY(90deg) translateZ(calc(min(70vw,70vh)/2))}.c-cube__face--left{transform:rotateY(-90deg) translateZ(calc(min(70vw,70vh)/2))}.c-cube__face--top{transform:rotateX(90deg) translateZ(calc(min(70vw,70vh)/2))}.c-cube__face--bottom{transform:rotateX(-90deg) translateZ(calc(min(70vw,70vh)/2))}.c-cube__content{width:100%;height:100%;overflow:hidden;pointer-events:none}.c-cube__iframe{width:100%;height:100%;border:none;pointer-events:none;background:#000;contain:strict;isolation:isolate;transform:translateZ(0);-webkit-transform:translateZ(0);will-change:contents}.c-cube__placeholder{width:100%;height:100%;display:flex;flex-direction:column;align-items:center;justify-content:center;background:linear-gradient(135deg,#1a1a2e,#16213e,#0f3460);color:#ffffffe6;text-align:center;padding:2rem;pointer-events:none}.c-cube__placeholder h2{font-size:clamp(1.5rem,4vw,2.5rem);font-weight:600;margin:0 0 .5rem;letter-spacing:.05em;text-shadow:0 2px 10px rgba(0,0,0,.5)}.c-cube__placeholder p{font-size:clamp(.875rem,2vw,1.125rem);opacity:.7;margin:0;letter-spacing:.1em;text-transform:uppercase}.c-cube__placeholder--gradient-1{background:linear-gradient(135deg,#2d1b4e,#1a1a2e,#0d2137)}.c-cube__placeholder--gradient-2{background:linear-gradient(135deg,#0f3460,#1a1a2e,#16213e)}.c-cube__placeholder--gradient-3{background:linear-gradient(135deg,#1e3a5f,#16213e,#1a1a2e)}.c-cube__placeholder--main{background:linear-gradient(135deg,#1a2a4a,#0f1a2e,#0a1020);border:2px dashed rgba(100,150,255,.3)}.c-cube__placeholder--main h2{color:#64b4ffe6}.c-cube__placeholder--main:hover{border-color:#6496ff99;background:linear-gradient(135deg,#1f3055,#142035,#0f1525)}.c-cube-toggle{position:fixed;top:16px;right:16px;z-index:10001;display:flex;align-items:center;justify-content:center;width:52px;height:52px;padding:0;background:#ffffff1a;border:1px solid rgba(255,255,255,.25);border-radius:12px;cursor:pointer;color:#fffc;transition:all .3s ease;-webkit-backdrop-filter:blur(8px);backdrop-filter:blur(8px)}.c-cube-toggle:hover{background:#fff3;border-color:#fff6;color:#fff;transform:scale(1.08)}.c-cube-toggle:active{transform:scale(.95)}.c-cube-toggle svg{position:absolute;transition:opacity .3s ease,transform .3s ease}.c-cube-toggle__cube{width:28px;height:28px;opacity:1;transform:rotate(0)}.c-cube-toggle__close{width:24px;height:24px;opacity:0;transform:rotate(-90deg)}.c-cube-toggle--active{background:#ffffff1f}.c-cube-toggle--active .c-cube-toggle__cube{opacity:0;transform:rotate(90deg)}.c-cube-toggle--active .c-cube-toggle__close{opacity:1;transform:rotate(0)}.c-cube-toggle--active:hover{background:#ff646433;border-color:#ff646480}@media(max-width:768px){.c-cube-toggle{top:12px;right:12px;width:44px;height:44px}.c-cube-toggle__cube{width:24px;height:24px}.c-cube-toggle__close{width:20px;height:20px}}.u-hidden{display:none!important}.u-invisible{visibility:hidden!important}.u-no-pointer{pointer-events:none!important}.u-pointer{pointer-events:auto!important}#app,.app-container{width:100%;height:100%;position:relative}
/*$vite$:1*/`,document.head.appendChild(Co);var Ln=typeof document<"u"?document.currentScript:null;function Fn(e){const t=Object.create(null);for(const n of e.split(","))t[n]=1;return n=>n in t}const te={},yt=[],Le=()=>{},zo=()=>!1,on=e=>e.charCodeAt(0)===111&&e.charCodeAt(1)===110&&(e.charCodeAt(2)>122||e.charCodeAt(2)<97),Nn=e=>e.startsWith("onUpdate:"),ae=Object.assign,Dn=(e,t)=>{const n=e.indexOf(t);n>-1&&e.splice(n,1)},_i=Object.prototype.hasOwnProperty,q=(e,t)=>_i.call(e,t),B=Array.isArray,_t=e=>sn(e)==="[object Map]",Ao=e=>sn(e)==="[object Set]",$=e=>typeof e=="function",ie=e=>typeof e=="string",nt=e=>typeof e=="symbol",oe=e=>e!==null&&typeof e=="object",Eo=e=>(oe(e)||$(e))&&$(e.then)&&$(e.catch),Mo=Object.prototype.toString,sn=e=>Mo.call(e),wi=e=>sn(e).slice(8,-1),Ro=e=>sn(e)==="[object Object]",$n=e=>ie(e)&&e!=="NaN"&&e[0]!=="-"&&""+parseInt(e,10)===e,Pt=Fn(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),ln=e=>{const t=Object.create(null);return(n=>t[n]||(t[n]=e(n)))},ki=/-\w/g,ot=ln(e=>e.replace(ki,t=>t.slice(1).toUpperCase())),Si=/\B([A-Z])/g,pt=ln(e=>e.replace(Si,"-$1").toLowerCase()),Io=ln(e=>e.charAt(0).toUpperCase()+e.slice(1)),jn=ln(e=>e?`on${Io(e)}`:""),st=(e,t)=>!Object.is(e,t),Bn=(e,...t)=>{for(let n=0;n<e.length;n++)e[n](...t)},Po=(e,t,n,o=!1)=>{Object.defineProperty(e,t,{configurable:!0,enumerable:!1,writable:o,value:n})},Ti=e=>{const t=parseFloat(e);return isNaN(t)?e:t};let Oo;const rn=()=>Oo||(Oo=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function Ot(e){if(B(e)){const t={};for(let n=0;n<e.length;n++){const o=e[n],s=ie(o)?Ei(o):Ot(o);if(s)for(const i in s)t[i]=s[i]}return t}else if(ie(e)||oe(e))return e}const Ci=/;(?![^(]*\))/g,zi=/:([^]+)/,Ai=/\/\*[^]*?\*\//g;function Ei(e){const t={};return e.replace(Ai,"").split(Ci).forEach(n=>{if(n){const o=n.split(zi);o.length>1&&(t[o[0].trim()]=o[1].trim())}}),t}function Me(e){let t="";if(ie(e))t=e;else if(B(e))for(let n=0;n<e.length;n++){const o=Me(e[n]);o&&(t+=o+" ")}else if(oe(e))for(const n in e)e[n]&&(t+=n+" ");return t.trim()}const Mi=Fn("itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly");function Lo(e){return!!e||e===""}const Fo=e=>!!(e&&e.__v_isRef===!0),it=e=>ie(e)?e:e==null?"":B(e)||oe(e)&&(e.toString===Mo||!$(e.toString))?Fo(e)?it(e.value):JSON.stringify(e,No,2):String(e),No=(e,t)=>Fo(t)?No(e,t.value):_t(t)?{[`Map(${t.size})`]:[...t.entries()].reduce((n,[o,s],i)=>(n[Hn(o,i)+" =>"]=s,n),{})}:Ao(t)?{[`Set(${t.size})`]:[...t.values()].map(n=>Hn(n))}:nt(t)?Hn(t):oe(t)&&!B(t)&&!Ro(t)?String(t):t,Hn=(e,t="")=>{var n;return nt(e)?`Symbol(${(n=e.description)!=null?n:t})`:e};let be;class Ri{constructor(t=!1){this.detached=t,this._active=!0,this._on=0,this.effects=[],this.cleanups=[],this._isPaused=!1,this.parent=be,!t&&be&&(this.index=(be.scopes||(be.scopes=[])).push(this)-1)}get active(){return this._active}pause(){if(this._active){this._isPaused=!0;let t,n;if(this.scopes)for(t=0,n=this.scopes.length;t<n;t++)this.scopes[t].pause();for(t=0,n=this.effects.length;t<n;t++)this.effects[t].pause()}}resume(){if(this._active&&this._isPaused){this._isPaused=!1;let t,n;if(this.scopes)for(t=0,n=this.scopes.length;t<n;t++)this.scopes[t].resume();for(t=0,n=this.effects.length;t<n;t++)this.effects[t].resume()}}run(t){if(this._active){const n=be;try{return be=this,t()}finally{be=n}}}on(){++this._on===1&&(this.prevScope=be,be=this)}off(){this._on>0&&--this._on===0&&(be=this.prevScope,this.prevScope=void 0)}stop(t){if(this._active){this._active=!1;let n,o;for(n=0,o=this.effects.length;n<o;n++)this.effects[n].stop();for(this.effects.length=0,n=0,o=this.cleanups.length;n<o;n++)this.cleanups[n]();if(this.cleanups.length=0,this.scopes){for(n=0,o=this.scopes.length;n<o;n++)this.scopes[n].stop(!0);this.scopes.length=0}if(!this.detached&&this.parent&&!t){const s=this.parent.scopes.pop();s&&s!==this&&(this.parent.scopes[this.index]=s,s.index=this.index)}this.parent=void 0}}}function Ii(){return be}let ne;const Un=new WeakSet;class Do{constructor(t){this.fn=t,this.deps=void 0,this.depsTail=void 0,this.flags=5,this.next=void 0,this.cleanup=void 0,this.scheduler=void 0,be&&be.active&&be.effects.push(this)}pause(){this.flags|=64}resume(){this.flags&64&&(this.flags&=-65,Un.has(this)&&(Un.delete(this),this.trigger()))}notify(){this.flags&2&&!(this.flags&32)||this.flags&8||jo(this)}run(){if(!(this.flags&1))return this.fn();this.flags|=2,Go(this),Bo(this);const t=ne,n=Re;ne=this,Re=!0;try{return this.fn()}finally{Ho(this),ne=t,Re=n,this.flags&=-3}}stop(){if(this.flags&1){for(let t=this.deps;t;t=t.nextDep)Kn(t);this.deps=this.depsTail=void 0,Go(this),this.onStop&&this.onStop(),this.flags&=-2}}trigger(){this.flags&64?Un.add(this):this.scheduler?this.scheduler():this.runIfDirty()}runIfDirty(){Wn(this)&&this.run()}get dirty(){return Wn(this)}}let $o=0,Lt,Ft;function jo(e,t=!1){if(e.flags|=8,t){e.next=Ft,Ft=e;return}e.next=Lt,Lt=e}function Vn(){$o++}function Gn(){if(--$o>0)return;if(Ft){let t=Ft;for(Ft=void 0;t;){const n=t.next;t.next=void 0,t.flags&=-9,t=n}}let e;for(;Lt;){let t=Lt;for(Lt=void 0;t;){const n=t.next;if(t.next=void 0,t.flags&=-9,t.flags&1)try{t.trigger()}catch(o){e||(e=o)}t=n}}if(e)throw e}function Bo(e){for(let t=e.deps;t;t=t.nextDep)t.version=-1,t.prevActiveLink=t.dep.activeLink,t.dep.activeLink=t}function Ho(e){let t,n=e.depsTail,o=n;for(;o;){const s=o.prevDep;o.version===-1?(o===n&&(n=s),Kn(o),Pi(o)):t=o,o.dep.activeLink=o.prevActiveLink,o.prevActiveLink=void 0,o=s}e.deps=t,e.depsTail=n}function Wn(e){for(let t=e.deps;t;t=t.nextDep)if(t.dep.version!==t.version||t.dep.computed&&(Uo(t.dep.computed)||t.dep.version!==t.version))return!0;return!!e._dirty}function Uo(e){if(e.flags&4&&!(e.flags&16)||(e.flags&=-17,e.globalVersion===Nt)||(e.globalVersion=Nt,!e.isSSR&&e.flags&128&&(!e.deps&&!e._dirty||!Wn(e))))return;e.flags|=2;const t=e.dep,n=ne,o=Re;ne=e,Re=!0;try{Bo(e);const s=e.fn(e._value);(t.version===0||st(s,e._value))&&(e.flags|=128,e._value=s,t.version++)}catch(s){throw t.version++,s}finally{ne=n,Re=o,Ho(e),e.flags&=-3}}function Kn(e,t=!1){const{dep:n,prevSub:o,nextSub:s}=e;if(o&&(o.nextSub=s,e.prevSub=void 0),s&&(s.prevSub=o,e.nextSub=void 0),n.subs===e&&(n.subs=o,!o&&n.computed)){n.computed.flags&=-5;for(let i=n.computed.deps;i;i=i.nextDep)Kn(i,!0)}!t&&!--n.sc&&n.map&&n.map.delete(n.key)}function Pi(e){const{prevDep:t,nextDep:n}=e;t&&(t.nextDep=n,e.prevDep=void 0),n&&(n.prevDep=t,e.nextDep=void 0)}let Re=!0;const Vo=[];function Fe(){Vo.push(Re),Re=!1}function Ne(){const e=Vo.pop();Re=e===void 0?!0:e}function Go(e){const{cleanup:t}=e;if(e.cleanup=void 0,t){const n=ne;ne=void 0;try{t()}finally{ne=n}}}let Nt=0;class Oi{constructor(t,n){this.sub=t,this.dep=n,this.version=n.version,this.nextDep=this.prevDep=this.nextSub=this.prevSub=this.prevActiveLink=void 0}}class Yn{constructor(t){this.computed=t,this.version=0,this.activeLink=void 0,this.subs=void 0,this.map=void 0,this.key=void 0,this.sc=0,this.__v_skip=!0}track(t){if(!ne||!Re||ne===this.computed)return;let n=this.activeLink;if(n===void 0||n.sub!==ne)n=this.activeLink=new Oi(ne,this),ne.deps?(n.prevDep=ne.depsTail,ne.depsTail.nextDep=n,ne.depsTail=n):ne.deps=ne.depsTail=n,Wo(n);else if(n.version===-1&&(n.version=this.version,n.nextDep)){const o=n.nextDep;o.prevDep=n.prevDep,n.prevDep&&(n.prevDep.nextDep=o),n.prevDep=ne.depsTail,n.nextDep=void 0,ne.depsTail.nextDep=n,ne.depsTail=n,ne.deps===n&&(ne.deps=o)}return n}trigger(t){this.version++,Nt++,this.notify(t)}notify(t){Vn();try{for(let n=this.subs;n;n=n.prevSub)n.sub.notify()&&n.sub.dep.notify()}finally{Gn()}}}function Wo(e){if(e.dep.sc++,e.sub.flags&4){const t=e.dep.computed;if(t&&!e.dep.subs){t.flags|=20;for(let o=t.deps;o;o=o.nextDep)Wo(o)}const n=e.dep.subs;n!==e&&(e.prevSub=n,n&&(n.nextSub=e)),e.dep.subs=e}}const qn=new WeakMap,vt=Symbol(""),Xn=Symbol(""),Dt=Symbol("");function fe(e,t,n){if(Re&&ne){let o=qn.get(e);o||qn.set(e,o=new Map);let s=o.get(n);s||(o.set(n,s=new Yn),s.map=o,s.key=n),s.track()}}function Ye(e,t,n,o,s,i){const l=qn.get(e);if(!l){Nt++;return}const r=c=>{c&&c.trigger()};if(Vn(),t==="clear")l.forEach(r);else{const c=B(e),v=c&&$n(n);if(c&&n==="length"){const f=Number(o);l.forEach((g,x)=>{(x==="length"||x===Dt||!nt(x)&&x>=f)&&r(g)})}else switch((n!==void 0||l.has(void 0))&&r(l.get(n)),v&&r(l.get(Dt)),t){case"add":c?v&&r(l.get("length")):(r(l.get(vt)),_t(e)&&r(l.get(Xn)));break;case"delete":c||(r(l.get(vt)),_t(e)&&r(l.get(Xn)));break;case"set":_t(e)&&r(l.get(vt));break}}Gn()}function wt(e){const t=G(e);return t===e?t:(fe(t,"iterate",Dt),Se(e)?t:t.map(Ie))}function an(e){return fe(e=G(e),"iterate",Dt),e}function lt(e,t){return Xe(e)?kt(ht(e)?Ie(t):t):Ie(t)}const Li={__proto__:null,[Symbol.iterator](){return Zn(this,Symbol.iterator,e=>lt(this,e))},concat(...e){return wt(this).concat(...e.map(t=>B(t)?wt(t):t))},entries(){return Zn(this,"entries",e=>(e[1]=lt(this,e[1]),e))},every(e,t){return qe(this,"every",e,t,void 0,arguments)},filter(e,t){return qe(this,"filter",e,t,n=>n.map(o=>lt(this,o)),arguments)},find(e,t){return qe(this,"find",e,t,n=>lt(this,n),arguments)},findIndex(e,t){return qe(this,"findIndex",e,t,void 0,arguments)},findLast(e,t){return qe(this,"findLast",e,t,n=>lt(this,n),arguments)},findLastIndex(e,t){return qe(this,"findLastIndex",e,t,void 0,arguments)},forEach(e,t){return qe(this,"forEach",e,t,void 0,arguments)},includes(...e){return Jn(this,"includes",e)},indexOf(...e){return Jn(this,"indexOf",e)},join(e){return wt(this).join(e)},lastIndexOf(...e){return Jn(this,"lastIndexOf",e)},map(e,t){return qe(this,"map",e,t,void 0,arguments)},pop(){return $t(this,"pop")},push(...e){return $t(this,"push",e)},reduce(e,...t){return Ko(this,"reduce",e,t)},reduceRight(e,...t){return Ko(this,"reduceRight",e,t)},shift(){return $t(this,"shift")},some(e,t){return qe(this,"some",e,t,void 0,arguments)},splice(...e){return $t(this,"splice",e)},toReversed(){return wt(this).toReversed()},toSorted(e){return wt(this).toSorted(e)},toSpliced(...e){return wt(this).toSpliced(...e)},unshift(...e){return $t(this,"unshift",e)},values(){return Zn(this,"values",e=>lt(this,e))}};function Zn(e,t,n){const o=an(e),s=o[t]();return o!==e&&!Se(e)&&(s._next=s.next,s.next=()=>{const i=s._next();return i.done||(i.value=n(i.value)),i}),s}const Fi=Array.prototype;function qe(e,t,n,o,s,i){const l=an(e),r=l!==e&&!Se(e),c=l[t];if(c!==Fi[t]){const g=c.apply(e,i);return r?Ie(g):g}let v=n;l!==e&&(r?v=function(g,x){return n.call(this,lt(e,g),x,e)}:n.length>2&&(v=function(g,x){return n.call(this,g,x,e)}));const f=c.call(l,v,o);return r&&s?s(f):f}function Ko(e,t,n,o){const s=an(e);let i=n;return s!==e&&(Se(e)?n.length>3&&(i=function(l,r,c){return n.call(this,l,r,c,e)}):i=function(l,r,c){return n.call(this,l,lt(e,r),c,e)}),s[t](i,...o)}function Jn(e,t,n){const o=G(e);fe(o,"iterate",Dt);const s=o[t](...n);return(s===-1||s===!1)&&no(n[0])?(n[0]=G(n[0]),o[t](...n)):s}function $t(e,t,n=[]){Fe(),Vn();const o=G(e)[t].apply(e,n);return Gn(),Ne(),o}const Ni=Fn("__proto__,__v_isRef,__isVue"),Yo=new Set(Object.getOwnPropertyNames(Symbol).filter(e=>e!=="arguments"&&e!=="caller").map(e=>Symbol[e]).filter(nt));function Di(e){nt(e)||(e=String(e));const t=G(this);return fe(t,"has",e),t.hasOwnProperty(e)}class qo{constructor(t=!1,n=!1){this._isReadonly=t,this._isShallow=n}get(t,n,o){if(n==="__v_skip")return t.__v_skip;const s=this._isReadonly,i=this._isShallow;if(n==="__v_isReactive")return!s;if(n==="__v_isReadonly")return s;if(n==="__v_isShallow")return i;if(n==="__v_raw")return o===(s?i?ts:es:i?Qo:Jo).get(t)||Object.getPrototypeOf(t)===Object.getPrototypeOf(o)?t:void 0;const l=B(t);if(!s){let c;if(l&&(c=Li[n]))return c;if(n==="hasOwnProperty")return Di}const r=Reflect.get(t,n,ce(t)?t:o);if((nt(n)?Yo.has(n):Ni(n))||(s||fe(t,"get",n),i))return r;if(ce(r)){const c=l&&$n(n)?r:r.value;return s&&oe(c)?to(c):c}return oe(r)?s?to(r):eo(r):r}}class Xo extends qo{constructor(t=!1){super(!1,t)}set(t,n,o,s){let i=t[n];const l=B(t)&&$n(n);if(!this._isShallow){const v=Xe(i);if(!Se(o)&&!Xe(o)&&(i=G(i),o=G(o)),!l&&ce(i)&&!ce(o))return v||(i.value=o),!0}const r=l?Number(n)<t.length:q(t,n),c=Reflect.set(t,n,o,ce(t)?t:s);return t===G(s)&&(r?st(o,i)&&Ye(t,"set",n,o):Ye(t,"add",n,o)),c}deleteProperty(t,n){const o=q(t,n);t[n];const s=Reflect.deleteProperty(t,n);return s&&o&&Ye(t,"delete",n,void 0),s}has(t,n){const o=Reflect.has(t,n);return(!nt(n)||!Yo.has(n))&&fe(t,"has",n),o}ownKeys(t){return fe(t,"iterate",B(t)?"length":vt),Reflect.ownKeys(t)}}class Zo extends qo{constructor(t=!1){super(!0,t)}set(t,n){return!0}deleteProperty(t,n){return!0}}const $i=new Xo,ji=new Zo,Bi=new Xo(!0),Hi=new Zo(!0),Qn=e=>e,cn=e=>Reflect.getPrototypeOf(e);function Ui(e,t,n){return function(...o){const s=this.__v_raw,i=G(s),l=_t(i),r=e==="entries"||e===Symbol.iterator&&l,c=e==="keys"&&l,v=s[e](...o),f=n?Qn:t?kt:Ie;return!t&&fe(i,"iterate",c?Xn:vt),ae(Object.create(v),{next(){const{value:g,done:x}=v.next();return x?{value:g,done:x}:{value:r?[f(g[0]),f(g[1])]:f(g),done:x}}})}}function fn(e){return function(...t){return e==="delete"?!1:e==="clear"?void 0:this}}function Vi(e,t){const n={get(s){const i=this.__v_raw,l=G(i),r=G(s);e||(st(s,r)&&fe(l,"get",s),fe(l,"get",r));const{has:c}=cn(l),v=t?Qn:e?kt:Ie;if(c.call(l,s))return v(i.get(s));if(c.call(l,r))return v(i.get(r));i!==l&&i.get(s)},get size(){const s=this.__v_raw;return!e&&fe(G(s),"iterate",vt),s.size},has(s){const i=this.__v_raw,l=G(i),r=G(s);return e||(st(s,r)&&fe(l,"has",s),fe(l,"has",r)),s===r?i.has(s):i.has(s)||i.has(r)},forEach(s,i){const l=this,r=l.__v_raw,c=G(r),v=t?Qn:e?kt:Ie;return!e&&fe(c,"iterate",vt),r.forEach((f,g)=>s.call(i,v(f),v(g),l))}};return ae(n,e?{add:fn("add"),set:fn("set"),delete:fn("delete"),clear:fn("clear")}:{add(s){!t&&!Se(s)&&!Xe(s)&&(s=G(s));const i=G(this);return cn(i).has.call(i,s)||(i.add(s),Ye(i,"add",s,s)),this},set(s,i){!t&&!Se(i)&&!Xe(i)&&(i=G(i));const l=G(this),{has:r,get:c}=cn(l);let v=r.call(l,s);v||(s=G(s),v=r.call(l,s));const f=c.call(l,s);return l.set(s,i),v?st(i,f)&&Ye(l,"set",s,i):Ye(l,"add",s,i),this},delete(s){const i=G(this),{has:l,get:r}=cn(i);let c=l.call(i,s);c||(s=G(s),c=l.call(i,s)),r&&r.call(i,s);const v=i.delete(s);return c&&Ye(i,"delete",s,void 0),v},clear(){const s=G(this),i=s.size!==0,l=s.clear();return i&&Ye(s,"clear",void 0,void 0),l}}),["keys","values","entries",Symbol.iterator].forEach(s=>{n[s]=Ui(s,e,t)}),n}function un(e,t){const n=Vi(e,t);return(o,s,i)=>s==="__v_isReactive"?!e:s==="__v_isReadonly"?e:s==="__v_raw"?o:Reflect.get(q(n,s)&&s in o?n:o,s,i)}const Gi={get:un(!1,!1)},Wi={get:un(!1,!0)},Ki={get:un(!0,!1)},Yi={get:un(!0,!0)},Jo=new WeakMap,Qo=new WeakMap,es=new WeakMap,ts=new WeakMap;function qi(e){switch(e){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function Xi(e){return e.__v_skip||!Object.isExtensible(e)?0:qi(wi(e))}function eo(e){return Xe(e)?e:dn(e,!1,$i,Gi,Jo)}function Zi(e){return dn(e,!1,Bi,Wi,Qo)}function to(e){return dn(e,!0,ji,Ki,es)}function yf(e){return dn(e,!0,Hi,Yi,ts)}function dn(e,t,n,o,s){if(!oe(e)||e.__v_raw&&!(t&&e.__v_isReactive))return e;const i=Xi(e);if(i===0)return e;const l=s.get(e);if(l)return l;const r=new Proxy(e,i===2?o:n);return s.set(e,r),r}function ht(e){return Xe(e)?ht(e.__v_raw):!!(e&&e.__v_isReactive)}function Xe(e){return!!(e&&e.__v_isReadonly)}function Se(e){return!!(e&&e.__v_isShallow)}function no(e){return e?!!e.__v_raw:!1}function G(e){const t=e&&e.__v_raw;return t?G(t):e}function Ji(e){return!q(e,"__v_skip")&&Object.isExtensible(e)&&Po(e,"__v_skip",!0),e}const Ie=e=>oe(e)?eo(e):e,kt=e=>oe(e)?to(e):e;function ce(e){return e?e.__v_isRef===!0:!1}function Q(e){return ns(e,!1)}function Qi(e){return ns(e,!0)}function ns(e,t){return ce(e)?e:new el(e,t)}class el{constructor(t,n){this.dep=new Yn,this.__v_isRef=!0,this.__v_isShallow=!1,this._rawValue=n?t:G(t),this._value=n?t:Ie(t),this.__v_isShallow=n}get value(){return this.dep.track(),this._value}set value(t){const n=this._rawValue,o=this.__v_isShallow||Se(t)||Xe(t);t=o?t:G(t),st(t,n)&&(this._rawValue=t,this._value=o?t:Ie(t),this.dep.trigger())}}function os(e){return ce(e)?e.value:e}const tl={get:(e,t,n)=>t==="__v_raw"?e:os(Reflect.get(e,t,n)),set:(e,t,n,o)=>{const s=e[t];return ce(s)&&!ce(n)?(s.value=n,!0):Reflect.set(e,t,n,o)}};function ss(e){return ht(e)?e:new Proxy(e,tl)}class nl{constructor(t,n,o){this.fn=t,this.setter=n,this._value=void 0,this.dep=new Yn(this),this.__v_isRef=!0,this.deps=void 0,this.depsTail=void 0,this.flags=16,this.globalVersion=Nt-1,this.next=void 0,this.effect=this,this.__v_isReadonly=!n,this.isSSR=o}notify(){if(this.flags|=16,!(this.flags&8)&&ne!==this)return jo(this,!0),!0}get value(){const t=this.dep.track();return Uo(this),t&&(t.version=this.dep.version),this._value}set value(t){this.setter&&this.setter(t)}}function ol(e,t,n=!1){let o,s;return $(e)?o=e:(o=e.get,s=e.set),new nl(o,s,n)}const pn={},vn=new WeakMap;let gt;function sl(e,t=!1,n=gt){if(n){let o=vn.get(n);o||vn.set(n,o=[]),o.push(e)}}function il(e,t,n=te){const{immediate:o,deep:s,once:i,scheduler:l,augmentJob:r,call:c}=n,v=S=>s?S:Se(S)||s===!1||s===0?rt(S,1):rt(S);let f,g,x,k,y=!1,w=!1;if(ce(e)?(g=()=>e.value,y=Se(e)):ht(e)?(g=()=>v(e),y=!0):B(e)?(w=!0,y=e.some(S=>ht(S)||Se(S)),g=()=>e.map(S=>{if(ce(S))return S.value;if(ht(S))return v(S);if($(S))return c?c(S,2):S()})):$(e)?t?g=c?()=>c(e,2):e:g=()=>{if(x){Fe();try{x()}finally{Ne()}}const S=gt;gt=f;try{return c?c(e,3,[k]):e(k)}finally{gt=S}}:g=Le,t&&s){const S=g,N=s===!0?1/0:s;g=()=>rt(S(),N)}const M=Ii(),R=()=>{f.stop(),M&&M.active&&Dn(M.effects,f)};if(i&&t){const S=t;t=(...N)=>{S(...N),R()}}let O=w?new Array(e.length).fill(pn):pn;const A=S=>{if(!(!(f.flags&1)||!f.dirty&&!S))if(t){const N=f.run();if(s||y||(w?N.some((U,W)=>st(U,O[W])):st(N,O))){x&&x();const U=gt;gt=f;try{const W=[N,O===pn?void 0:w&&O[0]===pn?[]:O,k];O=N,c?c(t,3,W):t(...W)}finally{gt=U}}}else f.run()};return r&&r(A),f=new Do(g),f.scheduler=l?()=>l(A,!1):A,k=S=>sl(S,!1,f),x=f.onStop=()=>{const S=vn.get(f);if(S){if(c)c(S,4);else for(const N of S)N();vn.delete(f)}},t?o?A(!0):O=f.run():l?l(A.bind(null,!0),!0):f.run(),R.pause=f.pause.bind(f),R.resume=f.resume.bind(f),R.stop=R,R}function rt(e,t=1/0,n){if(t<=0||!oe(e)||e.__v_skip||(n=n||new Map,(n.get(e)||0)>=t))return e;if(n.set(e,t),t--,ce(e))rt(e.value,t,n);else if(B(e))for(let o=0;o<e.length;o++)rt(e[o],t,n);else if(Ao(e)||_t(e))e.forEach(o=>{rt(o,t,n)});else if(Ro(e)){for(const o in e)rt(e[o],t,n);for(const o of Object.getOwnPropertySymbols(e))Object.prototype.propertyIsEnumerable.call(e,o)&&rt(e[o],t,n)}return e}const jt=[];let oo=!1;function _f(e,...t){if(oo)return;oo=!0,Fe();const n=jt.length?jt[jt.length-1].component:null,o=n&&n.appContext.config.warnHandler,s=ll();if(o)St(o,n,11,[e+t.map(i=>{var l,r;return(r=(l=i.toString)==null?void 0:l.call(i))!=null?r:JSON.stringify(i)}).join(""),n&&n.proxy,s.map(({vnode:i})=>`at <${ei(n,i.type)}>`).join(`
`),s]);else{const i=[`[Vue warn]: ${e}`,...t];s.length&&i.push(`
`,...rl(s)),console.warn(...i)}Ne(),oo=!1}function ll(){let e=jt[jt.length-1];if(!e)return[];const t=[];for(;e;){const n=t[0];n&&n.vnode===e?n.recurseCount++:t.push({vnode:e,recurseCount:0});const o=e.component&&e.component.parent;e=o&&o.vnode}return t}function rl(e){const t=[];return e.forEach((n,o)=>{t.push(...o===0?[]:[`
`],...al(n))}),t}function al({vnode:e,recurseCount:t}){const n=t>0?`... (${t} recursive calls)`:"",o=e.component?e.component.parent==null:!1,s=` at <${ei(e.component,e.type,o)}`,i=">"+n;return e.props?[s,...cl(e.props),i]:[s+i]}function cl(e){const t=[],n=Object.keys(e);return n.slice(0,3).forEach(o=>{t.push(...is(o,e[o]))}),n.length>3&&t.push(" ..."),t}function is(e,t,n){return ie(t)?(t=JSON.stringify(t),n?t:[`${e}=${t}`]):typeof t=="number"||typeof t=="boolean"||t==null?n?t:[`${e}=${t}`]:ce(t)?(t=is(e,G(t.value),!0),n?t:[`${e}=Ref<`,t,">"]):$(t)?[`${e}=fn${t.name?`<${t.name}>`:""}`]:(t=G(t),n?t:[`${e}=`,t])}function St(e,t,n,o){try{return o?e(...o):e()}catch(s){Bt(s,t,n)}}function De(e,t,n,o){if($(e)){const s=St(e,t,n,o);return s&&Eo(s)&&s.catch(i=>{Bt(i,t,n)}),s}if(B(e)){const s=[];for(let i=0;i<e.length;i++)s.push(De(e[i],t,n,o));return s}}function Bt(e,t,n,o=!0){const s=t?t.vnode:null,{errorHandler:i,throwUnhandledErrorInProduction:l}=t&&t.appContext.config||te;if(t){let r=t.parent;const c=t.proxy,v=`https://vuejs.org/error-reference/#runtime-${n}`;for(;r;){const f=r.ec;if(f){for(let g=0;g<f.length;g++)if(f[g](e,c,v)===!1)return}r=r.parent}if(i){Fe(),St(i,null,10,[e,c,v]),Ne();return}}fl(e,n,s,o,l)}function fl(e,t,n,o=!0,s=!1){if(s)throw e;console.error(e)}const de=[];let $e=-1;const Tt=[];let at=null,Ct=0;const ls=Promise.resolve();let hn=null;function ul(e){const t=hn||ls;return e?t.then(this?e.bind(this):e):t}function dl(e){let t=$e+1,n=de.length;for(;t<n;){const o=t+n>>>1,s=de[o],i=Ht(s);i<e||i===e&&s.flags&2?t=o+1:n=o}return t}function so(e){if(!(e.flags&1)){const t=Ht(e),n=de[de.length-1];!n||!(e.flags&2)&&t>=Ht(n)?de.push(e):de.splice(dl(t),0,e),e.flags|=1,rs()}}function rs(){hn||(hn=ls.then(fs))}function pl(e){B(e)?Tt.push(...e):at&&e.id===-1?at.splice(Ct+1,0,e):e.flags&1||(Tt.push(e),e.flags|=1),rs()}function as(e,t,n=$e+1){for(;n<de.length;n++){const o=de[n];if(o&&o.flags&2){if(e&&o.id!==e.uid)continue;de.splice(n,1),n--,o.flags&4&&(o.flags&=-2),o(),o.flags&4||(o.flags&=-2)}}}function cs(e){if(Tt.length){const t=[...new Set(Tt)].sort((n,o)=>Ht(n)-Ht(o));if(Tt.length=0,at){at.push(...t);return}for(at=t,Ct=0;Ct<at.length;Ct++){const n=at[Ct];n.flags&4&&(n.flags&=-2),n.flags&8||n(),n.flags&=-2}at=null,Ct=0}}const Ht=e=>e.id==null?e.flags&2?-1:1/0:e.id;function fs(e){try{for($e=0;$e<de.length;$e++){const t=de[$e];t&&!(t.flags&8)&&(t.flags&4&&(t.flags&=-2),St(t,t.i,t.i?15:14),t.flags&4||(t.flags&=-2))}}finally{for(;$e<de.length;$e++){const t=de[$e];t&&(t.flags&=-2)}$e=-1,de.length=0,cs(),hn=null,(de.length||Tt.length)&&fs()}}let je=null,us=null;function gn(e){const t=je;return je=e,us=e&&e.type.__scopeId||null,t}function vl(e,t=je,n){if(!t||e._n)return e;const o=(...s)=>{o._d&&Ws(-1);const i=gn(t);let l;try{l=e(...s)}finally{gn(i),o._d&&Ws(1)}return l};return o._n=!0,o._c=!0,o._d=!0,o}function mt(e,t,n,o){const s=e.dirs,i=t&&t.dirs;for(let l=0;l<s.length;l++){const r=s[l];i&&(r.oldValue=i[l].value);let c=r.dir[o];c&&(Fe(),De(c,n,8,[e.el,r,e,t]),Ne())}}function hl(e,t){if(ue){let n=ue.provides;const o=ue.parent&&ue.parent.provides;o===n&&(n=ue.provides=Object.create(o)),n[e]=t}}function mn(e,t,n=!1){const o=br();if(o||At){let s=At?At._context.provides:o?o.parent==null||o.ce?o.vnode.appContext&&o.vnode.appContext.provides:o.parent.provides:void 0;if(s&&e in s)return s[e];if(arguments.length>1)return n&&$(t)?t.call(o&&o.proxy):t}}const gl=Symbol.for("v-scx"),ml=()=>mn(gl);function bn(e,t,n){return ds(e,t,n)}function ds(e,t,n=te){const{immediate:o,deep:s,flush:i,once:l}=n,r=ae({},n),c=t&&o||!t&&i!=="post";let v;if(Mt){if(i==="sync"){const k=ml();v=k.__watcherHandles||(k.__watcherHandles=[])}else if(!c){const k=()=>{};return k.stop=Le,k.resume=Le,k.pause=Le,k}}const f=ue;r.call=(k,y,w)=>De(k,f,y,w);let g=!1;i==="post"?r.scheduler=k=>{ve(k,f&&f.suspense)}:i!=="sync"&&(g=!0,r.scheduler=(k,y)=>{y?k():so(k)}),r.augmentJob=k=>{t&&(k.flags|=4),g&&(k.flags|=2,f&&(k.id=f.uid,k.i=f))};const x=il(e,t,r);return Mt&&(v?v.push(x):c&&x()),x}function bl(e,t,n){const o=this.proxy,s=ie(e)?e.includes(".")?ps(o,e):()=>o[e]:e.bind(o,o);let i;$(t)?i=t:(i=t.handler,n=t);const l=tn(this),r=ds(s,i.bind(o),n);return l(),r}function ps(e,t){const n=t.split(".");return()=>{let o=e;for(let s=0;s<n.length&&o;s++)o=o[n[s]];return o}}const vs=Symbol("_vte"),xl=e=>e.__isTeleport,Ut=e=>e&&(e.disabled||e.disabled===""),hs=e=>e&&(e.defer||e.defer===""),gs=e=>typeof SVGElement<"u"&&e instanceof SVGElement,ms=e=>typeof MathMLElement=="function"&&e instanceof MathMLElement,io=(e,t)=>{const n=e&&e.to;return ie(n)?t?t(n):null:n},bs={name:"Teleport",__isTeleport:!0,process(e,t,n,o,s,i,l,r,c,v){const{mc:f,pc:g,pbc:x,o:{insert:k,querySelector:y,createText:w,createComment:M}}=v,R=Ut(t.props);let{shapeFlag:O,children:A,dynamicChildren:S}=t;if(e==null){const N=t.el=w(""),U=t.anchor=w("");k(N,n,o),k(U,n,o);const W=(F,j)=>{O&16&&f(A,F,j,s,i,l,r,c)},ee=()=>{const F=t.target=io(t.props,y),j=xs(F,t,w,k);F&&(l!=="svg"&&gs(F)?l="svg":l!=="mathml"&&ms(F)&&(l="mathml"),s&&s.isCE&&(s.ce._teleportTargets||(s.ce._teleportTargets=new Set)).add(F),R||(W(F,j),yn(t,!1)))};R&&(W(n,U),yn(t,!0)),hs(t.props)?(t.el.__isMounted=!1,ve(()=>{ee(),delete t.el.__isMounted},i)):ee()}else{if(hs(t.props)&&e.el.__isMounted===!1){ve(()=>{bs.process(e,t,n,o,s,i,l,r,c,v)},i);return}t.el=e.el,t.targetStart=e.targetStart;const N=t.anchor=e.anchor,U=t.target=e.target,W=t.targetAnchor=e.targetAnchor,ee=Ut(e.props),F=ee?n:U,j=ee?N:W;if(l==="svg"||gs(U)?l="svg":(l==="mathml"||ms(U))&&(l="mathml"),S?(x(e.dynamicChildren,S,F,s,i,l,r),bo(e,t,!0)):c||g(e,t,F,j,s,i,l,r,!1),R)ee?t.props&&e.props&&t.props.to!==e.props.to&&(t.props.to=e.props.to):xn(t,n,N,v,1);else if((t.props&&t.props.to)!==(e.props&&e.props.to)){const le=t.target=io(t.props,y);le&&xn(t,le,null,v,0)}else ee&&xn(t,U,W,v,1);yn(t,R)}},remove(e,t,n,{um:o,o:{remove:s}},i){const{shapeFlag:l,children:r,anchor:c,targetStart:v,targetAnchor:f,target:g,props:x}=e;if(g&&(s(v),s(f)),i&&s(c),l&16){const k=i||!Ut(x);for(let y=0;y<r.length;y++){const w=r[y];o(w,t,n,k,!!w.dynamicChildren)}}},move:xn,hydrate:yl};function xn(e,t,n,{o:{insert:o},m:s},i=2){i===0&&o(e.targetAnchor,t,n);const{el:l,anchor:r,shapeFlag:c,children:v,props:f}=e,g=i===2;if(g&&o(l,t,n),(!g||Ut(f))&&c&16)for(let x=0;x<v.length;x++)s(v[x],t,n,2);g&&o(r,t,n)}function yl(e,t,n,o,s,i,{o:{nextSibling:l,parentNode:r,querySelector:c,insert:v,createText:f}},g){function x(w,M,R,O){M.anchor=g(l(w),M,r(w),n,o,s,i),M.targetStart=R,M.targetAnchor=O}const k=t.target=io(t.props,c),y=Ut(t.props);if(k){const w=k._lpa||k.firstChild;if(t.shapeFlag&16)if(y)x(e,t,w,w&&l(w));else{t.anchor=l(e);let M=w;for(;M;){if(M&&M.nodeType===8){if(M.data==="teleport start anchor")t.targetStart=M;else if(M.data==="teleport anchor"){t.targetAnchor=M,k._lpa=t.targetAnchor&&l(t.targetAnchor);break}}M=l(M)}t.targetAnchor||xs(k,t,f,v),g(w&&l(w),t,k,n,o,s,i)}yn(t,y)}else y&&t.shapeFlag&16&&x(e,t,e,l(e));return t.anchor&&l(t.anchor)}const _l=bs;function yn(e,t){const n=e.ctx;if(n&&n.ut){let o,s;for(t?(o=e.el,s=e.anchor):(o=e.targetStart,s=e.targetAnchor);o&&o!==s;)o.nodeType===1&&o.setAttribute("data-v-owner",n.uid),o=o.nextSibling;n.ut()}}function xs(e,t,n,o){const s=t.targetStart=n(""),i=t.targetAnchor=n("");return s[vs]=i,e&&(o(s,e),o(i,e)),i}const wl=Symbol("_leaveCb");function lo(e,t){e.shapeFlag&6&&e.component?(e.transition=t,lo(e.component.subTree,t)):e.shapeFlag&128?(e.ssContent.transition=t.clone(e.ssContent),e.ssFallback.transition=t.clone(e.ssFallback)):e.transition=t}function Vt(e,t){return $(e)?ae({name:e.name},t,{setup:e}):e}function ro(e){e.ids=[e.ids[0]+e.ids[2]+++"-",0,0]}const _n=new WeakMap;function Gt(e,t,n,o,s=!1){if(B(e)){e.forEach((y,w)=>Gt(y,t&&(B(t)?t[w]:t),n,o,s));return}if(Wt(o)&&!s){o.shapeFlag&512&&o.type.__asyncResolved&&o.component.subTree.component&&Gt(e,t,n,o.component.subTree);return}const i=o.shapeFlag&4?wo(o.component):o.el,l=s?null:i,{i:r,r:c}=e,v=t&&t.r,f=r.refs===te?r.refs={}:r.refs,g=r.setupState,x=G(g),k=g===te?zo:y=>q(x,y);if(v!=null&&v!==c){if(ys(t),ie(v))f[v]=null,k(v)&&(g[v]=null);else if(ce(v)){v.value=null;const y=t;y.k&&(f[y.k]=null)}}if($(c))St(c,r,12,[l,f]);else{const y=ie(c),w=ce(c);if(y||w){const M=()=>{if(e.f){const R=y?k(c)?g[c]:f[c]:c.value;if(s)B(R)&&Dn(R,i);else if(B(R))R.includes(i)||R.push(i);else if(y)f[c]=[i],k(c)&&(g[c]=f[c]);else{const O=[i];c.value=O,e.k&&(f[e.k]=O)}}else y?(f[c]=l,k(c)&&(g[c]=l)):w&&(c.value=l,e.k&&(f[e.k]=l))};if(l){const R=()=>{M(),_n.delete(e)};R.id=-1,_n.set(e,R),ve(R,n)}else ys(e),M()}}}function ys(e){const t=_n.get(e);t&&(t.flags|=8,_n.delete(e))}const _s=e=>e.nodeType===8;rn().requestIdleCallback,rn().cancelIdleCallback;function kl(e,t){if(_s(e)&&e.data==="["){let n=1,o=e.nextSibling;for(;o;){if(o.nodeType===1){if(t(o)===!1)break}else if(_s(o))if(o.data==="]"){if(--n===0)break}else o.data==="["&&n++;o=o.nextSibling}}else t(e)}const Wt=e=>!!e.type.__asyncLoader;function Sl(e){$(e)&&(e={loader:e});const{loader:t,loadingComponent:n,errorComponent:o,delay:s=200,hydrate:i,timeout:l,suspensible:r=!0,onError:c}=e;let v=null,f,g=0;const x=()=>(g++,v=null,k()),k=()=>{let y;return v||(y=v=t().catch(w=>{if(w=w instanceof Error?w:new Error(String(w)),c)return new Promise((M,R)=>{c(w,()=>M(x()),()=>R(w),g+1)});throw w}).then(w=>y!==v&&v?v:(w&&(w.__esModule||w[Symbol.toStringTag]==="Module")&&(w=w.default),f=w,w)))};return Vt({name:"AsyncComponentWrapper",__asyncLoader:k,__asyncHydrate(y,w,M){let R=!1;(w.bu||(w.bu=[])).push(()=>R=!0);const O=()=>{R||M()},A=i?()=>{const S=i(O,N=>kl(y,N));S&&(w.bum||(w.bum=[])).push(S)}:O;f?A():k().then(()=>!w.isUnmounted&&A())},get __asyncResolved(){return f},setup(){const y=ue;if(ro(y),f)return()=>wn(f,y);const w=A=>{v=null,Bt(A,y,13,!o)};if(r&&y.suspense||Mt)return k().then(A=>()=>wn(A,y)).catch(A=>(w(A),()=>o?he(o,{error:A}):null));const M=Q(!1),R=Q(),O=Q(!!s);return s&&setTimeout(()=>{O.value=!1},s),l!=null&&setTimeout(()=>{if(!M.value&&!R.value){const A=new Error(`Async component timed out after ${l}ms.`);w(A),R.value=A}},l),k().then(()=>{M.value=!0,y.parent&&ao(y.parent.vnode)&&y.parent.update()}).catch(A=>{w(A),R.value=A}),()=>{if(M.value&&f)return wn(f,y);if(R.value&&o)return he(o,{error:R.value});if(n&&!O.value)return wn(n,y)}}})}function wn(e,t){const{ref:n,props:o,children:s,ce:i}=t.vnode,l=he(e,o,s);return l.ref=n,l.ce=i,delete t.vnode.ce,l}const ao=e=>e.type.__isKeepAlive;function Tl(e,t){ws(e,"a",t)}function Cl(e,t){ws(e,"da",t)}function ws(e,t,n=ue){const o=e.__wdc||(e.__wdc=()=>{let s=n;for(;s;){if(s.isDeactivated)return;s=s.parent}return e()});if(kn(t,o,n),n){let s=n.parent;for(;s&&s.parent;)ao(s.parent.vnode)&&zl(o,t,n,s),s=s.parent}}function zl(e,t,n,o){const s=kn(t,e,o,!0);zt(()=>{Dn(o[t],s)},n)}function kn(e,t,n=ue,o=!1){if(n){const s=n[e]||(n[e]=[]),i=t.__weh||(t.__weh=(...l)=>{Fe();const r=tn(n),c=De(t,n,e,l);return r(),Ne(),c});return o?s.unshift(i):s.push(i),i}}const Ze=e=>(t,n=ue)=>{(!Mt||e==="sp")&&kn(e,(...o)=>t(...o),n)},Al=Ze("bm"),Kt=Ze("m"),El=Ze("bu"),Ml=Ze("u"),Rl=Ze("bum"),zt=Ze("um"),Il=Ze("sp"),Pl=Ze("rtg"),Ol=Ze("rtc");function Ll(e,t=ue){kn("ec",e,t)}const Fl=Symbol.for("v-ndc");function Nl(e,t,n,o){let s;const i=n,l=B(e);if(l||ie(e)){const r=l&&ht(e);let c=!1,v=!1;r&&(c=!Se(e),v=Xe(e),e=an(e)),s=new Array(e.length);for(let f=0,g=e.length;f<g;f++)s[f]=t(c?v?kt(Ie(e[f])):Ie(e[f]):e[f],f,void 0,i)}else if(typeof e=="number"){s=new Array(e);for(let r=0;r<e;r++)s[r]=t(r+1,r,void 0,i)}else if(oe(e))if(e[Symbol.iterator])s=Array.from(e,(r,c)=>t(r,c,void 0,i));else{const r=Object.keys(e);s=new Array(r.length);for(let c=0,v=r.length;c<v;c++){const f=r[c];s[c]=t(e[f],f,c,i)}}else s=[];return s}const co=e=>e?Zs(e)?wo(e):co(e.parent):null,Yt=ae(Object.create(null),{$:e=>e,$el:e=>e.vnode.el,$data:e=>e.data,$props:e=>e.props,$attrs:e=>e.attrs,$slots:e=>e.slots,$refs:e=>e.refs,$parent:e=>co(e.parent),$root:e=>co(e.root),$host:e=>e.ce,$emit:e=>e.emit,$options:e=>Cs(e),$forceUpdate:e=>e.f||(e.f=()=>{so(e.update)}),$nextTick:e=>e.n||(e.n=ul.bind(e.proxy)),$watch:e=>bl.bind(e)}),fo=(e,t)=>e!==te&&!e.__isScriptSetup&&q(e,t),Dl={get({_:e},t){if(t==="__v_skip")return!0;const{ctx:n,setupState:o,data:s,props:i,accessCache:l,type:r,appContext:c}=e;if(t[0]!=="$"){const x=l[t];if(x!==void 0)switch(x){case 1:return o[t];case 2:return s[t];case 4:return n[t];case 3:return i[t]}else{if(fo(o,t))return l[t]=1,o[t];if(s!==te&&q(s,t))return l[t]=2,s[t];if(q(i,t))return l[t]=3,i[t];if(n!==te&&q(n,t))return l[t]=4,n[t];uo&&(l[t]=0)}}const v=Yt[t];let f,g;if(v)return t==="$attrs"&&fe(e.attrs,"get",""),v(e);if((f=r.__cssModules)&&(f=f[t]))return f;if(n!==te&&q(n,t))return l[t]=4,n[t];if(g=c.config.globalProperties,q(g,t))return g[t]},set({_:e},t,n){const{data:o,setupState:s,ctx:i}=e;return fo(s,t)?(s[t]=n,!0):o!==te&&q(o,t)?(o[t]=n,!0):q(e.props,t)||t[0]==="$"&&t.slice(1)in e?!1:(i[t]=n,!0)},has({_:{data:e,setupState:t,accessCache:n,ctx:o,appContext:s,props:i,type:l}},r){let c;return!!(n[r]||e!==te&&r[0]!=="$"&&q(e,r)||fo(t,r)||q(i,r)||q(o,r)||q(Yt,r)||q(s.config.globalProperties,r)||(c=l.__cssModules)&&c[r])},defineProperty(e,t,n){return n.get!=null?e._.accessCache[t]=0:q(n,"value")&&this.set(e,t,n.value,null),Reflect.defineProperty(e,t,n)}};function ks(e){return B(e)?e.reduce((t,n)=>(t[n]=null,t),{}):e}let uo=!0;function $l(e){const t=Cs(e),n=e.proxy,o=e.ctx;uo=!1,t.beforeCreate&&Ss(t.beforeCreate,e,"bc");const{data:s,computed:i,methods:l,watch:r,provide:c,inject:v,created:f,beforeMount:g,mounted:x,beforeUpdate:k,updated:y,activated:w,deactivated:M,beforeDestroy:R,beforeUnmount:O,destroyed:A,unmounted:S,render:N,renderTracked:U,renderTriggered:W,errorCaptured:ee,serverPrefetch:F,expose:j,inheritAttrs:le,components:xe,directives:Oe,filters:Ve}=t;if(v&&jl(v,o,null),l)for(const Y in l){const K=l[Y];$(K)&&(o[Y]=K.bind(n))}if(s){const Y=s.call(n,n);oe(Y)&&(e.data=eo(Y))}if(uo=!0,i)for(const Y in i){const K=i[Y],ze=$(K)?K.bind(n,n):$(K.get)?K.get.bind(n,n):Le,Ae=!$(K)&&$(K.set)?K.set.bind(n):Le,ge=V({get:ze,set:Ae});Object.defineProperty(o,Y,{enumerable:!0,configurable:!0,get:()=>ge.value,set:me=>ge.value=me})}if(r)for(const Y in r)Ts(r[Y],o,n,Y);if(c){const Y=$(c)?c.call(n):c;Reflect.ownKeys(Y).forEach(K=>{hl(K,Y[K])})}f&&Ss(f,e,"c");function se(Y,K){B(K)?K.forEach(ze=>Y(ze.bind(n))):K&&Y(K.bind(n))}if(se(Al,g),se(Kt,x),se(El,k),se(Ml,y),se(Tl,w),se(Cl,M),se(Ll,ee),se(Ol,U),se(Pl,W),se(Rl,O),se(zt,S),se(Il,F),B(j))if(j.length){const Y=e.exposed||(e.exposed={});j.forEach(K=>{Object.defineProperty(Y,K,{get:()=>n[K],set:ze=>n[K]=ze,enumerable:!0})})}else e.exposed||(e.exposed={});N&&e.render===Le&&(e.render=N),le!=null&&(e.inheritAttrs=le),xe&&(e.components=xe),Oe&&(e.directives=Oe),F&&ro(e)}function jl(e,t,n=Le){B(e)&&(e=po(e));for(const o in e){const s=e[o];let i;oe(s)?"default"in s?i=mn(s.from||o,s.default,!0):i=mn(s.from||o):i=mn(s),ce(i)?Object.defineProperty(t,o,{enumerable:!0,configurable:!0,get:()=>i.value,set:l=>i.value=l}):t[o]=i}}function Ss(e,t,n){De(B(e)?e.map(o=>o.bind(t.proxy)):e.bind(t.proxy),t,n)}function Ts(e,t,n,o){let s=o.includes(".")?ps(n,o):()=>n[o];if(ie(e)){const i=t[e];$(i)&&bn(s,i)}else if($(e))bn(s,e.bind(n));else if(oe(e))if(B(e))e.forEach(i=>Ts(i,t,n,o));else{const i=$(e.handler)?e.handler.bind(n):t[e.handler];$(i)&&bn(s,i,e)}}function Cs(e){const t=e.type,{mixins:n,extends:o}=t,{mixins:s,optionsCache:i,config:{optionMergeStrategies:l}}=e.appContext,r=i.get(t);let c;return r?c=r:!s.length&&!n&&!o?c=t:(c={},s.length&&s.forEach(v=>Sn(c,v,l,!0)),Sn(c,t,l)),oe(t)&&i.set(t,c),c}function Sn(e,t,n,o=!1){const{mixins:s,extends:i}=t;i&&Sn(e,i,n,!0),s&&s.forEach(l=>Sn(e,l,n,!0));for(const l in t)if(!(o&&l==="expose")){const r=Bl[l]||n&&n[l];e[l]=r?r(e[l],t[l]):t[l]}return e}const Bl={data:zs,props:As,emits:As,methods:qt,computed:qt,beforeCreate:pe,created:pe,beforeMount:pe,mounted:pe,beforeUpdate:pe,updated:pe,beforeDestroy:pe,beforeUnmount:pe,destroyed:pe,unmounted:pe,activated:pe,deactivated:pe,errorCaptured:pe,serverPrefetch:pe,components:qt,directives:qt,watch:Ul,provide:zs,inject:Hl};function zs(e,t){return t?e?function(){return ae($(e)?e.call(this,this):e,$(t)?t.call(this,this):t)}:t:e}function Hl(e,t){return qt(po(e),po(t))}function po(e){if(B(e)){const t={};for(let n=0;n<e.length;n++)t[e[n]]=e[n];return t}return e}function pe(e,t){return e?[...new Set([].concat(e,t))]:t}function qt(e,t){return e?ae(Object.create(null),e,t):t}function As(e,t){return e?B(e)&&B(t)?[...new Set([...e,...t])]:ae(Object.create(null),ks(e),ks(t??{})):t}function Ul(e,t){if(!e)return t;if(!t)return e;const n=ae(Object.create(null),e);for(const o in t)n[o]=pe(e[o],t[o]);return n}function Es(){return{app:null,config:{isNativeTag:zo,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let Vl=0;function Gl(e,t){return function(o,s=null){$(o)||(o=ae({},o)),s!=null&&!oe(s)&&(s=null);const i=Es(),l=new WeakSet,r=[];let c=!1;const v=i.app={_uid:Vl++,_component:o,_props:s,_container:null,_context:i,_instance:null,version:zr,get config(){return i.config},set config(f){},use(f,...g){return l.has(f)||(f&&$(f.install)?(l.add(f),f.install(v,...g)):$(f)&&(l.add(f),f(v,...g))),v},mixin(f){return i.mixins.includes(f)||i.mixins.push(f),v},component(f,g){return g?(i.components[f]=g,v):i.components[f]},directive(f,g){return g?(i.directives[f]=g,v):i.directives[f]},mount(f,g,x){if(!c){const k=v._ceVNode||he(o,s);return k.appContext=i,x===!0?x="svg":x===!1&&(x=void 0),e(k,f,x),c=!0,v._container=f,f.__vue_app__=v,wo(k.component)}},onUnmount(f){r.push(f)},unmount(){c&&(De(r,v._instance,16),e(null,v._container),delete v._container.__vue_app__)},provide(f,g){return i.provides[f]=g,v},runWithContext(f){const g=At;At=v;try{return f()}finally{At=g}}};return v}}let At=null;const Wl=(e,t)=>t==="modelValue"||t==="model-value"?e.modelModifiers:e[`${t}Modifiers`]||e[`${ot(t)}Modifiers`]||e[`${pt(t)}Modifiers`];function Kl(e,t,...n){if(e.isUnmounted)return;const o=e.vnode.props||te;let s=n;const i=t.startsWith("update:"),l=i&&Wl(o,t.slice(7));l&&(l.trim&&(s=n.map(f=>ie(f)?f.trim():f)),l.number&&(s=n.map(Ti)));let r,c=o[r=jn(t)]||o[r=jn(ot(t))];!c&&i&&(c=o[r=jn(pt(t))]),c&&De(c,e,6,s);const v=o[r+"Once"];if(v){if(!e.emitted)e.emitted={};else if(e.emitted[r])return;e.emitted[r]=!0,De(v,e,6,s)}}const Yl=new WeakMap;function Ms(e,t,n=!1){const o=n?Yl:t.emitsCache,s=o.get(e);if(s!==void 0)return s;const i=e.emits;let l={},r=!1;if(!$(e)){const c=v=>{const f=Ms(v,t,!0);f&&(r=!0,ae(l,f))};!n&&t.mixins.length&&t.mixins.forEach(c),e.extends&&c(e.extends),e.mixins&&e.mixins.forEach(c)}return!i&&!r?(oe(e)&&o.set(e,null),null):(B(i)?i.forEach(c=>l[c]=null):ae(l,i),oe(e)&&o.set(e,l),l)}function Tn(e,t){return!e||!on(t)?!1:(t=t.slice(2).replace(/Once$/,""),q(e,t[0].toLowerCase()+t.slice(1))||q(e,pt(t))||q(e,t))}function wf(){}function Rs(e){const{type:t,vnode:n,proxy:o,withProxy:s,propsOptions:[i],slots:l,attrs:r,emit:c,render:v,renderCache:f,props:g,data:x,setupState:k,ctx:y,inheritAttrs:w}=e,M=gn(e);let R,O;try{if(n.shapeFlag&4){const S=s||o,N=S;R=Be(v.call(N,S,f,g,k,x,y)),O=r}else{const S=t;R=Be(S.length>1?S(g,{attrs:r,slots:l,emit:c}):S(g,null)),O=t.props?r:ql(r)}}catch(S){Xt.length=0,Bt(S,e,1),R=he(ct)}let A=R;if(O&&w!==!1){const S=Object.keys(O),{shapeFlag:N}=A;S.length&&N&7&&(i&&S.some(Nn)&&(O=Xl(O,i)),A=Et(A,O,!1,!0))}return n.dirs&&(A=Et(A,null,!1,!0),A.dirs=A.dirs?A.dirs.concat(n.dirs):n.dirs),n.transition&&lo(A,n.transition),R=A,gn(M),R}const ql=e=>{let t;for(const n in e)(n==="class"||n==="style"||on(n))&&((t||(t={}))[n]=e[n]);return t},Xl=(e,t)=>{const n={};for(const o in e)(!Nn(o)||!(o.slice(9)in t))&&(n[o]=e[o]);return n};function Zl(e,t,n){const{props:o,children:s,component:i}=e,{props:l,children:r,patchFlag:c}=t,v=i.emitsOptions;if(t.dirs||t.transition)return!0;if(n&&c>=0){if(c&1024)return!0;if(c&16)return o?Is(o,l,v):!!l;if(c&8){const f=t.dynamicProps;for(let g=0;g<f.length;g++){const x=f[g];if(l[x]!==o[x]&&!Tn(v,x))return!0}}}else return(s||r)&&(!r||!r.$stable)?!0:o===l?!1:o?l?Is(o,l,v):!0:!!l;return!1}function Is(e,t,n){const o=Object.keys(t);if(o.length!==Object.keys(e).length)return!0;for(let s=0;s<o.length;s++){const i=o[s];if(t[i]!==e[i]&&!Tn(n,i))return!0}return!1}function Jl({vnode:e,parent:t},n){for(;t;){const o=t.subTree;if(o.suspense&&o.suspense.activeBranch===e&&(o.el=e.el),o===e)(e=t.vnode).el=n,t=t.parent;else break}}const Ps={},Os=()=>Object.create(Ps),Ls=e=>Object.getPrototypeOf(e)===Ps;function Ql(e,t,n,o=!1){const s={},i=Os();e.propsDefaults=Object.create(null),Fs(e,t,s,i);for(const l in e.propsOptions[0])l in s||(s[l]=void 0);n?e.props=o?s:Zi(s):e.type.props?e.props=s:e.props=i,e.attrs=i}function er(e,t,n,o){const{props:s,attrs:i,vnode:{patchFlag:l}}=e,r=G(s),[c]=e.propsOptions;let v=!1;if((o||l>0)&&!(l&16)){if(l&8){const f=e.vnode.dynamicProps;for(let g=0;g<f.length;g++){let x=f[g];if(Tn(e.emitsOptions,x))continue;const k=t[x];if(c)if(q(i,x))k!==i[x]&&(i[x]=k,v=!0);else{const y=ot(x);s[y]=vo(c,r,y,k,e,!1)}else k!==i[x]&&(i[x]=k,v=!0)}}}else{Fs(e,t,s,i)&&(v=!0);let f;for(const g in r)(!t||!q(t,g)&&((f=pt(g))===g||!q(t,f)))&&(c?n&&(n[g]!==void 0||n[f]!==void 0)&&(s[g]=vo(c,r,g,void 0,e,!0)):delete s[g]);if(i!==r)for(const g in i)(!t||!q(t,g))&&(delete i[g],v=!0)}v&&Ye(e.attrs,"set","")}function Fs(e,t,n,o){const[s,i]=e.propsOptions;let l=!1,r;if(t)for(let c in t){if(Pt(c))continue;const v=t[c];let f;s&&q(s,f=ot(c))?!i||!i.includes(f)?n[f]=v:(r||(r={}))[f]=v:Tn(e.emitsOptions,c)||(!(c in o)||v!==o[c])&&(o[c]=v,l=!0)}if(i){const c=G(n),v=r||te;for(let f=0;f<i.length;f++){const g=i[f];n[g]=vo(s,c,g,v[g],e,!q(v,g))}}return l}function vo(e,t,n,o,s,i){const l=e[n];if(l!=null){const r=q(l,"default");if(r&&o===void 0){const c=l.default;if(l.type!==Function&&!l.skipFactory&&$(c)){const{propsDefaults:v}=s;if(n in v)o=v[n];else{const f=tn(s);o=v[n]=c.call(null,t),f()}}else o=c;s.ce&&s.ce._setProp(n,o)}l[0]&&(i&&!r?o=!1:l[1]&&(o===""||o===pt(n))&&(o=!0))}return o}const tr=new WeakMap;function Ns(e,t,n=!1){const o=n?tr:t.propsCache,s=o.get(e);if(s)return s;const i=e.props,l={},r=[];let c=!1;if(!$(e)){const f=g=>{c=!0;const[x,k]=Ns(g,t,!0);ae(l,x),k&&r.push(...k)};!n&&t.mixins.length&&t.mixins.forEach(f),e.extends&&f(e.extends),e.mixins&&e.mixins.forEach(f)}if(!i&&!c)return oe(e)&&o.set(e,yt),yt;if(B(i))for(let f=0;f<i.length;f++){const g=ot(i[f]);Ds(g)&&(l[g]=te)}else if(i)for(const f in i){const g=ot(f);if(Ds(g)){const x=i[f],k=l[g]=B(x)||$(x)?{type:x}:ae({},x),y=k.type;let w=!1,M=!0;if(B(y))for(let R=0;R<y.length;++R){const O=y[R],A=$(O)&&O.name;if(A==="Boolean"){w=!0;break}else A==="String"&&(M=!1)}else w=$(y)&&y.name==="Boolean";k[0]=w,k[1]=M,(w||q(k,"default"))&&r.push(g)}}const v=[l,r];return oe(e)&&o.set(e,v),v}function Ds(e){return e[0]!=="$"&&!Pt(e)}const ho=e=>e==="_"||e==="_ctx"||e==="$stable",go=e=>B(e)?e.map(Be):[Be(e)],nr=(e,t,n)=>{if(t._n)return t;const o=vl((...s)=>go(t(...s)),n);return o._c=!1,o},$s=(e,t,n)=>{const o=e._ctx;for(const s in e){if(ho(s))continue;const i=e[s];if($(i))t[s]=nr(s,i,o);else if(i!=null){const l=go(i);t[s]=()=>l}}},js=(e,t)=>{const n=go(t);e.slots.default=()=>n},Bs=(e,t,n)=>{for(const o in t)(n||!ho(o))&&(e[o]=t[o])},or=(e,t,n)=>{const o=e.slots=Os();if(e.vnode.shapeFlag&32){const s=t._;s?(Bs(o,t,n),n&&Po(o,"_",s,!0)):$s(t,o)}else t&&js(e,t)},sr=(e,t,n)=>{const{vnode:o,slots:s}=e;let i=!0,l=te;if(o.shapeFlag&32){const r=t._;r?n&&r===1?i=!1:Bs(s,t,n):(i=!t.$stable,$s(t,s)),l=t}else t&&(js(e,t),l={default:1});if(i)for(const r in s)!ho(r)&&l[r]==null&&delete s[r]},ve=cr;function ir(e){return lr(e)}function lr(e,t){const n=rn();n.__VUE__=!0;const{insert:o,remove:s,patchProp:i,createElement:l,createText:r,createComment:c,setText:v,setElementText:f,parentNode:g,nextSibling:x,setScopeId:k=Le,insertStaticContent:y}=e,w=(a,d,u,p=null,h=null,b=null,z=void 0,T=null,C=!!d.dynamicChildren)=>{if(a===d)return;a&&!Jt(a,d)&&(p=dt(a),me(a,h,b,!0),a=null),d.patchFlag===-2&&(C=!1,d.dynamicChildren=null);const{type:_,ref:L,shapeFlag:E}=d;switch(_){case Cn:M(a,d,u,p);break;case ct:R(a,d,u,p);break;case zn:a==null&&O(d,u,p,z);break;case Pe:xe(a,d,u,p,h,b,z,T,C);break;default:E&1?N(a,d,u,p,h,b,z,T,C):E&6?Oe(a,d,u,p,h,b,z,T,C):(E&64||E&128)&&_.process(a,d,u,p,h,b,z,T,C,Ee)}L!=null&&h?Gt(L,a&&a.ref,b,d||a,!d):L==null&&a&&a.ref!=null&&Gt(a.ref,null,b,a,!0)},M=(a,d,u,p)=>{if(a==null)o(d.el=r(d.children),u,p);else{const h=d.el=a.el;d.children!==a.children&&v(h,d.children)}},R=(a,d,u,p)=>{a==null?o(d.el=c(d.children||""),u,p):d.el=a.el},O=(a,d,u,p)=>{[a.el,a.anchor]=y(a.children,d,u,p,a.el,a.anchor)},A=({el:a,anchor:d},u,p)=>{let h;for(;a&&a!==d;)h=x(a),o(a,u,p),a=h;o(d,u,p)},S=({el:a,anchor:d})=>{let u;for(;a&&a!==d;)u=x(a),s(a),a=u;s(d)},N=(a,d,u,p,h,b,z,T,C)=>{if(d.type==="svg"?z="svg":d.type==="math"&&(z="mathml"),a==null)U(d,u,p,h,b,z,T,C);else{const _=a.el&&a.el._isVueCE?a.el:null;try{_&&_._beginPatch(),F(a,d,h,b,z,T,C)}finally{_&&_._endPatch()}}},U=(a,d,u,p,h,b,z,T)=>{let C,_;const{props:L,shapeFlag:E,transition:P,dirs:D}=a;if(C=a.el=l(a.type,b,L&&L.is,L),E&8?f(C,a.children):E&16&&ee(a.children,C,null,p,h,mo(a,b),z,T),D&&mt(a,null,p,"created"),W(C,a,a.scopeId,z,p),L){for(const Z in L)Z!=="value"&&!Pt(Z)&&i(C,Z,null,L[Z],b,p);"value"in L&&i(C,"value",null,L.value,b),(_=L.onVnodeBeforeMount)&&He(_,p,a)}D&&mt(a,null,p,"beforeMount");const H=rr(h,P);H&&P.beforeEnter(C),o(C,d,u),((_=L&&L.onVnodeMounted)||H||D)&&ve(()=>{_&&He(_,p,a),H&&P.enter(C),D&&mt(a,null,p,"mounted")},h)},W=(a,d,u,p,h)=>{if(u&&k(a,u),p)for(let b=0;b<p.length;b++)k(a,p[b]);if(h){let b=h.subTree;if(d===b||Gs(b.type)&&(b.ssContent===d||b.ssFallback===d)){const z=h.vnode;W(a,z,z.scopeId,z.slotScopeIds,h.parent)}}},ee=(a,d,u,p,h,b,z,T,C=0)=>{for(let _=C;_<a.length;_++){const L=a[_]=T?ft(a[_]):Be(a[_]);w(null,L,d,u,p,h,b,z,T)}},F=(a,d,u,p,h,b,z)=>{const T=d.el=a.el;let{patchFlag:C,dynamicChildren:_,dirs:L}=d;C|=a.patchFlag&16;const E=a.props||te,P=d.props||te;let D;if(u&&bt(u,!1),(D=P.onVnodeBeforeUpdate)&&He(D,u,d,a),L&&mt(d,a,u,"beforeUpdate"),u&&bt(u,!0),(E.innerHTML&&P.innerHTML==null||E.textContent&&P.textContent==null)&&f(T,""),_?j(a.dynamicChildren,_,T,u,p,mo(d,h),b):z||K(a,d,T,null,u,p,mo(d,h),b,!1),C>0){if(C&16)le(T,E,P,u,h);else if(C&2&&E.class!==P.class&&i(T,"class",null,P.class,h),C&4&&i(T,"style",E.style,P.style,h),C&8){const H=d.dynamicProps;for(let Z=0;Z<H.length;Z++){const J=H[Z],ye=E[J],_e=P[J];(_e!==ye||J==="value")&&i(T,J,ye,_e,h,u)}}C&1&&a.children!==d.children&&f(T,d.children)}else!z&&_==null&&le(T,E,P,u,h);((D=P.onVnodeUpdated)||L)&&ve(()=>{D&&He(D,u,d,a),L&&mt(d,a,u,"updated")},p)},j=(a,d,u,p,h,b,z)=>{for(let T=0;T<d.length;T++){const C=a[T],_=d[T],L=C.el&&(C.type===Pe||!Jt(C,_)||C.shapeFlag&198)?g(C.el):u;w(C,_,L,null,p,h,b,z,!0)}},le=(a,d,u,p,h)=>{if(d!==u){if(d!==te)for(const b in d)!Pt(b)&&!(b in u)&&i(a,b,d[b],null,h,p);for(const b in u){if(Pt(b))continue;const z=u[b],T=d[b];z!==T&&b!=="value"&&i(a,b,T,z,h,p)}"value"in u&&i(a,"value",d.value,u.value,h)}},xe=(a,d,u,p,h,b,z,T,C)=>{const _=d.el=a?a.el:r(""),L=d.anchor=a?a.anchor:r("");let{patchFlag:E,dynamicChildren:P,slotScopeIds:D}=d;D&&(T=T?T.concat(D):D),a==null?(o(_,u,p),o(L,u,p),ee(d.children||[],u,L,h,b,z,T,C)):E>0&&E&64&&P&&a.dynamicChildren&&a.dynamicChildren.length===P.length?(j(a.dynamicChildren,P,u,h,b,z,T),(d.key!=null||h&&d===h.subTree)&&bo(a,d,!0)):K(a,d,u,L,h,b,z,T,C)},Oe=(a,d,u,p,h,b,z,T,C)=>{d.slotScopeIds=T,a==null?d.shapeFlag&512?h.ctx.activate(d,u,p,z,C):Ve(d,u,p,h,b,z,C):Ce(a,d,C)},Ve=(a,d,u,p,h,b,z)=>{const T=a.component=mr(a,p,h);if(ao(a)&&(T.ctx.renderer=Ee),xr(T,!1,z),T.asyncDep){if(h&&h.registerDep(T,se,z),!a.el){const C=T.subTree=he(ct);R(null,C,d,u),a.placeholder=C.el}}else se(T,a,d,u,h,b,z)},Ce=(a,d,u)=>{const p=d.component=a.component;if(Zl(a,d,u))if(p.asyncDep&&!p.asyncResolved){Y(p,d,u);return}else p.next=d,p.update();else d.el=a.el,p.vnode=d},se=(a,d,u,p,h,b,z)=>{const T=()=>{if(a.isMounted){let{next:E,bu:P,u:D,parent:H,vnode:Z}=a;{const We=Hs(a);if(We){E&&(E.el=Z.el,Y(a,E,z)),We.asyncDep.then(()=>{a.isUnmounted||T()});return}}let J=E,ye;bt(a,!1),E?(E.el=Z.el,Y(a,E,z)):E=Z,P&&Bn(P),(ye=E.props&&E.props.onVnodeBeforeUpdate)&&He(ye,H,E,Z),bt(a,!0);const _e=Rs(a),Ge=a.subTree;a.subTree=_e,w(Ge,_e,g(Ge.el),dt(Ge),a,h,b),E.el=_e.el,J===null&&Jl(a,_e.el),D&&ve(D,h),(ye=E.props&&E.props.onVnodeUpdated)&&ve(()=>He(ye,H,E,Z),h)}else{let E;const{el:P,props:D}=d,{bm:H,m:Z,parent:J,root:ye,type:_e}=a,Ge=Wt(d);bt(a,!1),H&&Bn(H),!Ge&&(E=D&&D.onVnodeBeforeMount)&&He(E,J,d),bt(a,!0);{ye.ce&&ye.ce._def.shadowRoot!==!1&&ye.ce._injectChildStyle(_e);const We=a.subTree=Rs(a);w(null,We,u,p,a,h,b),d.el=We.el}if(Z&&ve(Z,h),!Ge&&(E=D&&D.onVnodeMounted)){const We=d;ve(()=>He(E,J,We),h)}(d.shapeFlag&256||J&&Wt(J.vnode)&&J.vnode.shapeFlag&256)&&a.a&&ve(a.a,h),a.isMounted=!0,d=u=p=null}};a.scope.on();const C=a.effect=new Do(T);a.scope.off();const _=a.update=C.run.bind(C),L=a.job=C.runIfDirty.bind(C);L.i=a,L.id=a.uid,C.scheduler=()=>so(L),bt(a,!0),_()},Y=(a,d,u)=>{d.component=a;const p=a.vnode.props;a.vnode=d,a.next=null,er(a,d.props,p,u),sr(a,d.children,u),Fe(),as(a),Ne()},K=(a,d,u,p,h,b,z,T,C=!1)=>{const _=a&&a.children,L=a?a.shapeFlag:0,E=d.children,{patchFlag:P,shapeFlag:D}=d;if(P>0){if(P&128){Ae(_,E,u,p,h,b,z,T,C);return}else if(P&256){ze(_,E,u,p,h,b,z,T,C);return}}D&8?(L&16&&et(_,h,b),E!==_&&f(u,E)):L&16?D&16?Ae(_,E,u,p,h,b,z,T,C):et(_,h,b,!0):(L&8&&f(u,""),D&16&&ee(E,u,p,h,b,z,T,C))},ze=(a,d,u,p,h,b,z,T,C)=>{a=a||yt,d=d||yt;const _=a.length,L=d.length,E=Math.min(_,L);let P;for(P=0;P<E;P++){const D=d[P]=C?ft(d[P]):Be(d[P]);w(a[P],D,u,null,h,b,z,T,C)}_>L?et(a,h,b,!0,!1,E):ee(d,u,p,h,b,z,T,C,E)},Ae=(a,d,u,p,h,b,z,T,C)=>{let _=0;const L=d.length;let E=a.length-1,P=L-1;for(;_<=E&&_<=P;){const D=a[_],H=d[_]=C?ft(d[_]):Be(d[_]);if(Jt(D,H))w(D,H,u,null,h,b,z,T,C);else break;_++}for(;_<=E&&_<=P;){const D=a[E],H=d[P]=C?ft(d[P]):Be(d[P]);if(Jt(D,H))w(D,H,u,null,h,b,z,T,C);else break;E--,P--}if(_>E){if(_<=P){const D=P+1,H=D<L?d[D].el:p;for(;_<=P;)w(null,d[_]=C?ft(d[_]):Be(d[_]),u,H,h,b,z,T,C),_++}}else if(_>P)for(;_<=E;)me(a[_],h,b,!0),_++;else{const D=_,H=_,Z=new Map;for(_=H;_<=P;_++){const ke=d[_]=C?ft(d[_]):Be(d[_]);ke.key!=null&&Z.set(ke.key,_)}let J,ye=0;const _e=P-H+1;let Ge=!1,We=0;const nn=new Array(_e);for(_=0;_<_e;_++)nn[_]=0;for(_=D;_<=E;_++){const ke=a[_];if(ye>=_e){me(ke,h,b,!0);continue}let Ke;if(ke.key!=null)Ke=Z.get(ke.key);else for(J=H;J<=P;J++)if(nn[J-H]===0&&Jt(ke,d[J])){Ke=J;break}Ke===void 0?me(ke,h,b,!0):(nn[Ke-H]=_+1,Ke>=We?We=Ke:Ge=!0,w(ke,d[Ke],u,null,h,b,z,T,C),ye++)}const bi=Ge?ar(nn):yt;for(J=bi.length-1,_=_e-1;_>=0;_--){const ke=H+_,Ke=d[ke],xi=d[ke+1],yi=ke+1<L?xi.el||Vs(xi):p;nn[_]===0?w(null,Ke,u,yi,h,b,z,T,C):Ge&&(J<0||_!==bi[J]?ge(Ke,u,yi,2):J--)}}},ge=(a,d,u,p,h=null)=>{const{el:b,type:z,transition:T,children:C,shapeFlag:_}=a;if(_&6){ge(a.component.subTree,d,u,p);return}if(_&128){a.suspense.move(d,u,p);return}if(_&64){z.move(a,d,u,Ee);return}if(z===Pe){o(b,d,u);for(let E=0;E<C.length;E++)ge(C[E],d,u,p);o(a.anchor,d,u);return}if(z===zn){A(a,d,u);return}if(p!==2&&_&1&&T)if(p===0)T.beforeEnter(b),o(b,d,u),ve(()=>T.enter(b),h);else{const{leave:E,delayLeave:P,afterLeave:D}=T,H=()=>{a.ctx.isUnmounted?s(b):o(b,d,u)},Z=()=>{b._isLeaving&&b[wl](!0),E(b,()=>{H(),D&&D()})};P?P(b,H,Z):Z()}else o(b,d,u)},me=(a,d,u,p=!1,h=!1)=>{const{type:b,props:z,ref:T,children:C,dynamicChildren:_,shapeFlag:L,patchFlag:E,dirs:P,cacheIndex:D}=a;if(E===-2&&(h=!1),T!=null&&(Fe(),Gt(T,null,u,a,!0),Ne()),D!=null&&(d.renderCache[D]=void 0),L&256){d.ctx.deactivate(a);return}const H=L&1&&P,Z=!Wt(a);let J;if(Z&&(J=z&&z.onVnodeBeforeUnmount)&&He(J,d,a),L&6)re(a.component,u,p);else{if(L&128){a.suspense.unmount(u,p);return}H&&mt(a,null,d,"beforeUnmount"),L&64?a.type.remove(a,d,u,Ee,p):_&&!_.hasOnce&&(b!==Pe||E>0&&E&64)?et(_,d,u,!1,!0):(b===Pe&&E&384||!h&&L&16)&&et(C,d,u),p&&X(a)}(Z&&(J=z&&z.onVnodeUnmounted)||H)&&ve(()=>{J&&He(J,d,a),H&&mt(a,null,d,"unmounted")},u)},X=a=>{const{type:d,el:u,anchor:p,transition:h}=a;if(d===Pe){I(u,p);return}if(d===zn){S(a);return}const b=()=>{s(u),h&&!h.persisted&&h.afterLeave&&h.afterLeave()};if(a.shapeFlag&1&&h&&!h.persisted){const{leave:z,delayLeave:T}=h,C=()=>z(u,b);T?T(a.el,b,C):C()}else b()},I=(a,d)=>{let u;for(;a!==d;)u=x(a),s(a),a=u;s(d)},re=(a,d,u)=>{const{bum:p,scope:h,job:b,subTree:z,um:T,m:C,a:_}=a;Us(C),Us(_),p&&Bn(p),h.stop(),b&&(b.flags|=8,me(z,a,d,u)),T&&ve(T,d),ve(()=>{a.isUnmounted=!0},d)},et=(a,d,u,p=!1,h=!1,b=0)=>{for(let z=b;z<a.length;z++)me(a[z],d,u,p,h)},dt=a=>{if(a.shapeFlag&6)return dt(a.component.subTree);if(a.shapeFlag&128)return a.suspense.next();const d=x(a.anchor||a.el),u=d&&d[vs];return u?x(u):d};let tt=!1;const xt=(a,d,u)=>{let p;a==null?d._vnode&&(me(d._vnode,null,null,!0),p=d._vnode.component):w(d._vnode||null,a,d,null,null,null,u),d._vnode=a,tt||(tt=!0,as(p),cs(),tt=!1)},Ee={p:w,um:me,m:ge,r:X,mt:Ve,mc:ee,pc:K,pbc:j,n:dt,o:e};return{render:xt,hydrate:void 0,createApp:Gl(xt)}}function mo({type:e,props:t},n){return n==="svg"&&e==="foreignObject"||n==="mathml"&&e==="annotation-xml"&&t&&t.encoding&&t.encoding.includes("html")?void 0:n}function bt({effect:e,job:t},n){n?(e.flags|=32,t.flags|=4):(e.flags&=-33,t.flags&=-5)}function rr(e,t){return(!e||e&&!e.pendingBranch)&&t&&!t.persisted}function bo(e,t,n=!1){const o=e.children,s=t.children;if(B(o)&&B(s))for(let i=0;i<o.length;i++){const l=o[i];let r=s[i];r.shapeFlag&1&&!r.dynamicChildren&&((r.patchFlag<=0||r.patchFlag===32)&&(r=s[i]=ft(s[i]),r.el=l.el),!n&&r.patchFlag!==-2&&bo(l,r)),r.type===Cn&&(r.patchFlag!==-1?r.el=l.el:r.__elIndex=i+(e.type===Pe?1:0)),r.type===ct&&!r.el&&(r.el=l.el)}}function ar(e){const t=e.slice(),n=[0];let o,s,i,l,r;const c=e.length;for(o=0;o<c;o++){const v=e[o];if(v!==0){if(s=n[n.length-1],e[s]<v){t[o]=s,n.push(o);continue}for(i=0,l=n.length-1;i<l;)r=i+l>>1,e[n[r]]<v?i=r+1:l=r;v<e[n[i]]&&(i>0&&(t[o]=n[i-1]),n[i]=o)}}for(i=n.length,l=n[i-1];i-- >0;)n[i]=l,l=t[l];return n}function Hs(e){const t=e.subTree.component;if(t)return t.asyncDep&&!t.asyncResolved?t:Hs(t)}function Us(e){if(e)for(let t=0;t<e.length;t++)e[t].flags|=8}function Vs(e){if(e.placeholder)return e.placeholder;const t=e.component;return t?Vs(t.subTree):null}const Gs=e=>e.__isSuspense;function cr(e,t){t&&t.pendingBranch?B(e)?t.effects.push(...e):t.effects.push(e):pl(e)}const Pe=Symbol.for("v-fgt"),Cn=Symbol.for("v-txt"),ct=Symbol.for("v-cmt"),zn=Symbol.for("v-stc"),Xt=[];let we=null;function Te(e=!1){Xt.push(we=e?null:[])}function fr(){Xt.pop(),we=Xt[Xt.length-1]||null}let Zt=1;function Ws(e,t=!1){Zt+=e,e<0&&we&&t&&(we.hasOnce=!0)}function Ks(e){return e.dynamicChildren=Zt>0?we||yt:null,fr(),Zt>0&&we&&we.push(e),e}function Je(e,t,n,o,s,i){return Ks(m(e,t,n,o,s,i,!0))}function xo(e,t,n,o,s){return Ks(he(e,t,n,o,s,!0))}function Ys(e){return e?e.__v_isVNode===!0:!1}function Jt(e,t){return e.type===t.type&&e.key===t.key}const qs=({key:e})=>e??null,An=({ref:e,ref_key:t,ref_for:n})=>(typeof e=="number"&&(e=""+e),e!=null?ie(e)||ce(e)||$(e)?{i:je,r:e,k:t,f:!!n}:e:null);function m(e,t=null,n=null,o=0,s=null,i=e===Pe?0:1,l=!1,r=!1){const c={__v_isVNode:!0,__v_skip:!0,type:e,props:t,key:t&&qs(t),ref:t&&An(t),scopeId:us,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetStart:null,targetAnchor:null,staticCount:0,shapeFlag:i,patchFlag:o,dynamicProps:s,dynamicChildren:null,appContext:null,ctx:je};return r?(yo(c,n),i&128&&e.normalize(c)):n&&(c.shapeFlag|=ie(n)?8:16),Zt>0&&!l&&we&&(c.patchFlag>0||i&6)&&c.patchFlag!==32&&we.push(c),c}const he=ur;function ur(e,t=null,n=null,o=0,s=null,i=!1){if((!e||e===Fl)&&(e=ct),Ys(e)){const r=Et(e,t,!0);return n&&yo(r,n),Zt>0&&!i&&we&&(r.shapeFlag&6?we[we.indexOf(e)]=r:we.push(r)),r.patchFlag=-2,r}if(Cr(e)&&(e=e.__vccOpts),t){t=dr(t);let{class:r,style:c}=t;r&&!ie(r)&&(t.class=Me(r)),oe(c)&&(no(c)&&!B(c)&&(c=ae({},c)),t.style=Ot(c))}const l=ie(e)?1:Gs(e)?128:xl(e)?64:oe(e)?4:$(e)?2:0;return m(e,t,n,o,s,l,i,!0)}function dr(e){return e?no(e)||Ls(e)?ae({},e):e:null}function Et(e,t,n=!1,o=!1){const{props:s,ref:i,patchFlag:l,children:r,transition:c}=e,v=t?vr(s||{},t):s,f={__v_isVNode:!0,__v_skip:!0,type:e.type,props:v,key:v&&qs(v),ref:t&&t.ref?n&&i?B(i)?i.concat(An(t)):[i,An(t)]:An(t):i,scopeId:e.scopeId,slotScopeIds:e.slotScopeIds,children:r,target:e.target,targetStart:e.targetStart,targetAnchor:e.targetAnchor,staticCount:e.staticCount,shapeFlag:e.shapeFlag,patchFlag:t&&e.type!==Pe?l===-1?16:l|16:l,dynamicProps:e.dynamicProps,dynamicChildren:e.dynamicChildren,appContext:e.appContext,dirs:e.dirs,transition:c,component:e.component,suspense:e.suspense,ssContent:e.ssContent&&Et(e.ssContent),ssFallback:e.ssFallback&&Et(e.ssFallback),placeholder:e.placeholder,el:e.el,anchor:e.anchor,ctx:e.ctx,ce:e.ce};return c&&o&&lo(f,c.clone(f)),f}function pr(e=" ",t=0){return he(Cn,null,e,t)}function Qt(e,t){const n=he(zn,null,e);return n.staticCount=t,n}function en(e="",t=!1){return t?(Te(),xo(ct,null,e)):he(ct,null,e)}function Be(e){return e==null||typeof e=="boolean"?he(ct):B(e)?he(Pe,null,e.slice()):Ys(e)?ft(e):he(Cn,null,String(e))}function ft(e){return e.el===null&&e.patchFlag!==-1||e.memo?e:Et(e)}function yo(e,t){let n=0;const{shapeFlag:o}=e;if(t==null)t=null;else if(B(t))n=16;else if(typeof t=="object")if(o&65){const s=t.default;s&&(s._c&&(s._d=!1),yo(e,s()),s._c&&(s._d=!0));return}else{n=32;const s=t._;!s&&!Ls(t)?t._ctx=je:s===3&&je&&(je.slots._===1?t._=1:(t._=2,e.patchFlag|=1024))}else $(t)?(t={default:t,_ctx:je},n=32):(t=String(t),o&64?(n=16,t=[pr(t)]):n=8);e.children=t,e.shapeFlag|=n}function vr(...e){const t={};for(let n=0;n<e.length;n++){const o=e[n];for(const s in o)if(s==="class")t.class!==o.class&&(t.class=Me([t.class,o.class]));else if(s==="style")t.style=Ot([t.style,o.style]);else if(on(s)){const i=t[s],l=o[s];l&&i!==l&&!(B(i)&&i.includes(l))&&(t[s]=i?[].concat(i,l):l)}else s!==""&&(t[s]=o[s])}return t}function He(e,t,n,o=null){De(e,t,7,[n,o])}const hr=Es();let gr=0;function mr(e,t,n){const o=e.type,s=(t?t.appContext:e.appContext)||hr,i={uid:gr++,vnode:e,type:o,parent:t,appContext:s,root:null,next:null,subTree:null,effect:null,update:null,job:null,scope:new Ri(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:t?t.provides:Object.create(s.provides),ids:t?t.ids:["",0,0],accessCache:null,renderCache:[],components:null,directives:null,propsOptions:Ns(o,s),emitsOptions:Ms(o,s),emit:null,emitted:null,propsDefaults:te,inheritAttrs:o.inheritAttrs,ctx:te,data:te,props:te,attrs:te,slots:te,refs:te,setupState:te,setupContext:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return i.ctx={_:i},i.root=t?t.root:i,i.emit=Kl.bind(null,i),e.ce&&e.ce(i),i}let ue=null;const br=()=>ue||je;let En,_o;{const e=rn(),t=(n,o)=>{let s;return(s=e[n])||(s=e[n]=[]),s.push(o),i=>{s.length>1?s.forEach(l=>l(i)):s[0](i)}};En=t("__VUE_INSTANCE_SETTERS__",n=>ue=n),_o=t("__VUE_SSR_SETTERS__",n=>Mt=n)}const tn=e=>{const t=ue;return En(e),e.scope.on(),()=>{e.scope.off(),En(t)}},Xs=()=>{ue&&ue.scope.off(),En(null)};function Zs(e){return e.vnode.shapeFlag&4}let Mt=!1;function xr(e,t=!1,n=!1){t&&_o(t);const{props:o,children:s}=e.vnode,i=Zs(e);Ql(e,o,i,t),or(e,s,n||t);const l=i?yr(e,t):void 0;return t&&_o(!1),l}function yr(e,t){const n=e.type;e.accessCache=Object.create(null),e.proxy=new Proxy(e.ctx,Dl);const{setup:o}=n;if(o){Fe();const s=e.setupContext=o.length>1?wr(e):null,i=tn(e),l=St(o,e,0,[e.props,s]),r=Eo(l);if(Ne(),i(),(r||e.sp)&&!Wt(e)&&ro(e),r){if(l.then(Xs,Xs),t)return l.then(c=>{Js(e,c)}).catch(c=>{Bt(c,e,0)});e.asyncDep=l}else Js(e,l)}else Qs(e)}function Js(e,t,n){$(t)?e.type.__ssrInlineRender?e.ssrRender=t:e.render=t:oe(t)&&(e.setupState=ss(t)),Qs(e)}function Qs(e,t,n){const o=e.type;e.render||(e.render=o.render||Le);{const s=tn(e);Fe();try{$l(e)}finally{Ne(),s()}}}const _r={get(e,t){return fe(e,"get",""),e[t]}};function wr(e){const t=n=>{e.exposed=n||{}};return{attrs:new Proxy(e.attrs,_r),slots:e.slots,emit:e.emit,expose:t}}function wo(e){return e.exposed?e.exposeProxy||(e.exposeProxy=new Proxy(ss(Ji(e.exposed)),{get(t,n){if(n in t)return t[n];if(n in Yt)return Yt[n](e)},has(t,n){return n in t||n in Yt}})):e.proxy}const kr=/(?:^|[-_])\w/g,Sr=e=>e.replace(kr,t=>t.toUpperCase()).replace(/[-_]/g,"");function Tr(e,t=!0){return $(e)?e.displayName||e.name:e.name||t&&e.__name}function ei(e,t,n=!1){let o=Tr(t);if(!o&&t.__file){const s=t.__file.match(/([^/\\]+)\.\w+$/);s&&(o=s[1])}if(!o&&e){const s=i=>{for(const l in i)if(i[l]===t)return l};o=s(e.components)||e.parent&&s(e.parent.type.components)||s(e.appContext.components)}return o?Sr(o):n?"App":"Anonymous"}function Cr(e){return $(e)&&"__vccOpts"in e}const V=(e,t)=>ol(e,t,Mt),zr="3.5.27";let ko;const ti=typeof window<"u"&&window.trustedTypes;if(ti)try{ko=ti.createPolicy("vue",{createHTML:e=>e})}catch{}const ni=ko?e=>ko.createHTML(e):e=>e,Ar="http://www.w3.org/2000/svg",Er="http://www.w3.org/1998/Math/MathML",Qe=typeof document<"u"?document:null,oi=Qe&&Qe.createElement("template"),Mr={insert:(e,t,n)=>{t.insertBefore(e,n||null)},remove:e=>{const t=e.parentNode;t&&t.removeChild(e)},createElement:(e,t,n,o)=>{const s=t==="svg"?Qe.createElementNS(Ar,e):t==="mathml"?Qe.createElementNS(Er,e):n?Qe.createElement(e,{is:n}):Qe.createElement(e);return e==="select"&&o&&o.multiple!=null&&s.setAttribute("multiple",o.multiple),s},createText:e=>Qe.createTextNode(e),createComment:e=>Qe.createComment(e),setText:(e,t)=>{e.nodeValue=t},setElementText:(e,t)=>{e.textContent=t},parentNode:e=>e.parentNode,nextSibling:e=>e.nextSibling,querySelector:e=>Qe.querySelector(e),setScopeId(e,t){e.setAttribute(t,"")},insertStaticContent(e,t,n,o,s,i){const l=n?n.previousSibling:t.lastChild;if(s&&(s===i||s.nextSibling))for(;t.insertBefore(s.cloneNode(!0),n),!(s===i||!(s=s.nextSibling)););else{oi.innerHTML=ni(o==="svg"?`<svg>${e}</svg>`:o==="mathml"?`<math>${e}</math>`:e);const r=oi.content;if(o==="svg"||o==="mathml"){const c=r.firstChild;for(;c.firstChild;)r.appendChild(c.firstChild);r.removeChild(c)}t.insertBefore(r,n)}return[l?l.nextSibling:t.firstChild,n?n.previousSibling:t.lastChild]}},Rr=Symbol("_vtc");function Ir(e,t,n){const o=e[Rr];o&&(t=(t?[t,...o]:[...o]).join(" ")),t==null?e.removeAttribute("class"):n?e.setAttribute("class",t):e.className=t}const si=Symbol("_vod"),Pr=Symbol("_vsh"),Or=Symbol(""),Lr=/(?:^|;)\s*display\s*:/;function Fr(e,t,n){const o=e.style,s=ie(n);let i=!1;if(n&&!s){if(t)if(ie(t))for(const l of t.split(";")){const r=l.slice(0,l.indexOf(":")).trim();n[r]==null&&Mn(o,r,"")}else for(const l in t)n[l]==null&&Mn(o,l,"");for(const l in n)l==="display"&&(i=!0),Mn(o,l,n[l])}else if(s){if(t!==n){const l=o[Or];l&&(n+=";"+l),o.cssText=n,i=Lr.test(n)}}else t&&e.removeAttribute("style");si in e&&(e[si]=i?o.display:"",e[Pr]&&(o.display="none"))}const ii=/\s*!important$/;function Mn(e,t,n){if(B(n))n.forEach(o=>Mn(e,t,o));else if(n==null&&(n=""),t.startsWith("--"))e.setProperty(t,n);else{const o=Nr(e,t);ii.test(n)?e.setProperty(pt(o),n.replace(ii,""),"important"):e[o]=n}}const li=["Webkit","Moz","ms"],So={};function Nr(e,t){const n=So[t];if(n)return n;let o=ot(t);if(o!=="filter"&&o in e)return So[t]=o;o=Io(o);for(let s=0;s<li.length;s++){const i=li[s]+o;if(i in e)return So[t]=i}return t}const ri="http://www.w3.org/1999/xlink";function ai(e,t,n,o,s,i=Mi(t)){o&&t.startsWith("xlink:")?n==null?e.removeAttributeNS(ri,t.slice(6,t.length)):e.setAttributeNS(ri,t,n):n==null||i&&!Lo(n)?e.removeAttribute(t):e.setAttribute(t,i?"":nt(n)?String(n):n)}function ci(e,t,n,o,s){if(t==="innerHTML"||t==="textContent"){n!=null&&(e[t]=t==="innerHTML"?ni(n):n);return}const i=e.tagName;if(t==="value"&&i!=="PROGRESS"&&!i.includes("-")){const r=i==="OPTION"?e.getAttribute("value")||"":e.value,c=n==null?e.type==="checkbox"?"on":"":String(n);(r!==c||!("_value"in e))&&(e.value=c),n==null&&e.removeAttribute(t),e._value=n;return}let l=!1;if(n===""||n==null){const r=typeof e[t];r==="boolean"?n=Lo(n):n==null&&r==="string"?(n="",l=!0):r==="number"&&(n=0,l=!0)}try{e[t]=n}catch{}l&&e.removeAttribute(s||t)}function Dr(e,t,n,o){e.addEventListener(t,n,o)}function $r(e,t,n,o){e.removeEventListener(t,n,o)}const fi=Symbol("_vei");function jr(e,t,n,o,s=null){const i=e[fi]||(e[fi]={}),l=i[t];if(o&&l)l.value=o;else{const[r,c]=Br(t);if(o){const v=i[t]=Vr(o,s);Dr(e,r,v,c)}else l&&($r(e,r,l,c),i[t]=void 0)}}const ui=/(?:Once|Passive|Capture)$/;function Br(e){let t;if(ui.test(e)){t={};let o;for(;o=e.match(ui);)e=e.slice(0,e.length-o[0].length),t[o[0].toLowerCase()]=!0}return[e[2]===":"?e.slice(3):pt(e.slice(2)),t]}let To=0;const Hr=Promise.resolve(),Ur=()=>To||(Hr.then(()=>To=0),To=Date.now());function Vr(e,t){const n=o=>{if(!o._vts)o._vts=Date.now();else if(o._vts<=n.attached)return;De(Gr(o,n.value),t,5,[o])};return n.value=e,n.attached=Ur(),n}function Gr(e,t){if(B(t)){const n=e.stopImmediatePropagation;return e.stopImmediatePropagation=()=>{n.call(e),e._stopped=!0},t.map(o=>s=>!s._stopped&&o&&o(s))}else return t}const di=e=>e.charCodeAt(0)===111&&e.charCodeAt(1)===110&&e.charCodeAt(2)>96&&e.charCodeAt(2)<123,Wr=(e,t,n,o,s,i)=>{const l=s==="svg";t==="class"?Ir(e,o,l):t==="style"?Fr(e,n,o):on(t)?Nn(t)||jr(e,t,n,o,i):(t[0]==="."?(t=t.slice(1),!0):t[0]==="^"?(t=t.slice(1),!1):Kr(e,t,o,l))?(ci(e,t,o),!e.tagName.includes("-")&&(t==="value"||t==="checked"||t==="selected")&&ai(e,t,o,l,i,t!=="value")):e._isVueCE&&(/[A-Z]/.test(t)||!ie(o))?ci(e,ot(t),o,i,t):(t==="true-value"?e._trueValue=o:t==="false-value"&&(e._falseValue=o),ai(e,t,o,l))};function Kr(e,t,n,o){if(o)return!!(t==="innerHTML"||t==="textContent"||t in e&&di(t)&&$(n));if(t==="spellcheck"||t==="draggable"||t==="translate"||t==="autocorrect"||t==="sandbox"&&e.tagName==="IFRAME"||t==="form"||t==="list"&&e.tagName==="INPUT"||t==="type"&&e.tagName==="TEXTAREA")return!1;if(t==="width"||t==="height"){const s=e.tagName;if(s==="IMG"||s==="VIDEO"||s==="CANVAS"||s==="SOURCE")return!1}return di(t)&&ie(n)?!1:t in e}const Yr=["ctrl","shift","alt","meta"],qr={stop:e=>e.stopPropagation(),prevent:e=>e.preventDefault(),self:e=>e.target!==e.currentTarget,ctrl:e=>!e.ctrlKey,shift:e=>!e.shiftKey,alt:e=>!e.altKey,meta:e=>!e.metaKey,left:e=>"button"in e&&e.button!==0,middle:e=>"button"in e&&e.button!==1,right:e=>"button"in e&&e.button!==2,exact:(e,t)=>Yr.some(n=>e[`${n}Key`]&&!t.includes(n))},pi=(e,t)=>{const n=e._withMods||(e._withMods={}),o=t.join(".");return n[o]||(n[o]=((s,...i)=>{for(let l=0;l<t.length;l++){const r=qr[t[l]];if(r&&r(s,t))return}return e(s,...i)}))},Xr=ae({patchProp:Wr},Mr);let vi;function Zr(){return vi||(vi=ir(Xr))}const Jr=((...e)=>{const t=Zr().createApp(...e),{mount:n}=t;return t.mount=o=>{const s=ea(o);if(!s)return;const i=t._component;!$(i)&&!i.render&&!i.template&&(i.template=s.innerHTML),s.nodeType===1&&(s.textContent="");const l=n(s,!1,Qr(s));return s instanceof Element&&(s.removeAttribute("v-cloak"),s.setAttribute("data-v-app","")),l},t});function Qr(e){if(e instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&e instanceof MathMLElement)return"mathml"}function ea(e){return ie(e)?document.querySelector(e):e}const kf="modulepreload",Sf=function(e,t){return new URL(e,t).href},Tf={},ta=function(t,n,o){let s=Promise.resolve();function i(l){const r=new Event("vite:preloadError",{cancelable:!0});if(r.payload=l,window.dispatchEvent(r),!r.defaultPrevented)throw l}return s.then(l=>{for(const r of l||[])r.status==="rejected"&&i(r.reason);return t().catch(i)})},na=`// ===== 0: MANDELBULB =====
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
`,la=`// ===== 4: KALEIDOSCOPE =====
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
`,ra=`// ===== 5: ORGANIC HYBRID =====
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
`,ga=`// ===== 14: SPEED DRIVE =====
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
`,ma=`// ===== 15: HOT ROCKS =====
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
`,Ta=`// ===== 23: WAVES REMIX =====
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
`,Ca=`// ===== 24: DANCING METALIGHTS =====
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
`,za=`// ===== 25: IO BLOCKS =====
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
`,Aa=`// ===== 26: BEATING CIRCLES =====
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
`,Va=`// ===== 42: LIGHTNING =====
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
`,Ga=`// ===== 43: KALEIDOSCOPE 2D =====
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
`,tc=Vt({__name:"BioFractalViewer",props:{mode:{default:0}},setup(e){const t=e,n=Q(null);let o=null,s=null,i=null,l=Date.now(),r=null;const c=Object.assign({"../../shaders/effects/mode-00-mandelbulb.glsl":na,"../../shaders/effects/mode-01-mandelbox.glsl":oa,"../../shaders/effects/mode-02-menger-sponge.glsl":sa,"../../shaders/effects/mode-03-sierpinski.glsl":ia,"../../shaders/effects/mode-04-kaleidoscope.glsl":la,"../../shaders/effects/mode-05-organic-hybrid.glsl":ra,"../../shaders/effects/mode-06-fractal-land.glsl":aa,"../../shaders/effects/mode-07-galaxy-nebula.glsl":ca,"../../shaders/effects/mode-08-infinite-tunnel.glsl":fa,"../../shaders/effects/mode-09-plasma-fractal.glsl":ua,"../../shaders/effects/mode-10-circuits.glsl":da,"../../shaders/effects/mode-11-metaballs.glsl":pa,"../../shaders/effects/mode-12-volumetric-lines.glsl":va,"../../shaders/effects/mode-13-disco-tunnel.glsl":ha,"../../shaders/effects/mode-14-speed-drive.glsl":ga,"../../shaders/effects/mode-15-hot-rocks.glsl":ma,"../../shaders/effects/mode-16-server-room.glsl":ba,"../../shaders/effects/mode-17-remnant-x.glsl":xa,"../../shaders/effects/mode-18-kali-set.glsl":ya,"../../shaders/effects/mode-19-generators.glsl":_a,"../../shaders/effects/mode-20-simplicity-galaxy.glsl":wa,"../../shaders/effects/mode-21-ribbons.glsl":ka,"../../shaders/effects/mode-22-twisted-rings.glsl":Sa,"../../shaders/effects/mode-23-waves-remix.glsl":Ta,"../../shaders/effects/mode-24-dancing-metalights.glsl":Ca,"../../shaders/effects/mode-25-io-blocks.glsl":za,"../../shaders/effects/mode-26-beating-circles.glsl":Aa,"../../shaders/effects/mode-27-circle-wave.glsl":Ea,"../../shaders/effects/mode-28-soundflower.glsl":Ma,"../../shaders/effects/mode-29-polar-beats.glsl":Ra,"../../shaders/effects/mode-30-undulant-spectre.glsl":Ia,"../../shaders/effects/mode-31-revision-2015.glsl":Pa,"../../shaders/effects/mode-32-gameboy-style.glsl":Oa,"../../shaders/effects/mode-33-electric-storm.glsl":La,"../../shaders/effects/mode-34-vortex.glsl":Fa,"../../shaders/effects/mode-35-neon-grid.glsl":Na,"../../shaders/effects/mode-36-matrix-rain.glsl":Da,"../../shaders/effects/mode-37-fire.glsl":$a,"../../shaders/effects/mode-38-aurora.glsl":ja,"../../shaders/effects/mode-39-wormhole.glsl":Ba,"../../shaders/effects/mode-40-hexagons.glsl":Ha,"../../shaders/effects/mode-41-bubbles.glsl":Ua,"../../shaders/effects/mode-42-lightning.glsl":Va,"../../shaders/effects/mode-43-kaleidoscope-2d.glsl":Ga,"../../shaders/effects/mode-44-starfield.glsl":Wa,"../../shaders/effects/mode-45-liquid-metal.glsl":Ka,"../../shaders/effects/mode-46-fractal-tree.glsl":Ya,"../../shaders/effects/mode-47-voronoi.glsl":qa,"../../shaders/effects/mode-48-psychedelic.glsl":Xa,"../../shaders/effects/mode-49-energy-field.glsl":Za}),v=Object.keys(c).sort().map(M=>c[M]).join(`

`),f=Ja,g=`${Qa}
${v}
${ec}`,x=(M,R)=>{if(!o)return null;const O=o.createShader(M);return O?(o.shaderSource(O,R),o.compileShader(O),o.getShaderParameter(O,o.COMPILE_STATUS)?O:(console.error("Shader error:",o.getShaderInfoLog(O)),null)):null},k=()=>{const M=n.value;if(!M||(o=M.getContext("webgl")||M.getContext("experimental-webgl"),!o))return!1;const R=x(o.VERTEX_SHADER,f),O=x(o.FRAGMENT_SHADER,g);if(!R||!O||(s=o.createProgram(),!s))return!1;if(o.attachShader(s,R),o.attachShader(s,O),o.linkProgram(s),!o.getProgramParameter(s,o.LINK_STATUS))return console.error("Link error:",o.getProgramInfoLog(s)),!1;const A=new Float32Array([-1,-1,1,-1,-1,1,-1,1,1,-1,1,1]),S=o.createBuffer();o.bindBuffer(o.ARRAY_BUFFER,S),o.bufferData(o.ARRAY_BUFFER,A,o.STATIC_DRAW);const N=o.getAttribLocation(s,"aPosition");return o.enableVertexAttribArray(N),o.vertexAttribPointer(N,2,o.FLOAT,!1,0,0),r={uTime:o.getUniformLocation(s,"uTime"),uResolution:o.getUniformLocation(s,"uResolution"),uMode:o.getUniformLocation(s,"uMode")},!0},y=()=>{const M=n.value;M&&(M.width=M.clientWidth,M.height=M.clientHeight,o&&o.viewport(0,0,M.width,M.height))},w=()=>{!o||!s||!n.value||!r||(o.useProgram(s),o.uniform1f(r.uTime,(Date.now()-l)/1e3),o.uniform2f(r.uResolution,n.value.width,n.value.height),o.uniform1i(r.uMode,t.mode),o.drawArrays(o.TRIANGLES,0,6),i=requestAnimationFrame(w))};return Kt(()=>{k()&&(y(),window.addEventListener("resize",y),w())}),zt(()=>{i&&cancelAnimationFrame(i),window.removeEventListener("resize",y)}),(M,R)=>(Te(),Je("canvas",{ref_key:"canvasRef",ref:n,class:"bio-fractal-canvas"},null,512))}}),hi=(e,t)=>{const n=e.__vccOpts||e;for(const[o,s]of t)n[o]=s;return n},nc=hi(tc,[["__scopeId","data-v-1ee27525"]]),oc={class:"pv-container"},sc={class:"pv-svg-container"},ic={viewBox:"0 0 840 640",preserveAspectRatio:"xMidYMid meet"},lc=["x1","y1","x2","y2"],rc=["x1","y1","x2","y2"],ac=["x1","y1","x2","y2"],cc=["x1","y1","x2","y2"],fc=["d"],uc=["cx","cy"],dc=["transform"],pc=["x1","y1","x2","y2"],vc=["x1","y1","x2","y2"],hc=["x1","y1","x2","y2"],gc=["x1","y1","x2","y2"],mc=["d"],bc=["cx","cy"],xc=["transform"],yc=["x1","y1","x2","y2"],_c=["x1","y1","x2","y2"],wc=["x1","y1","x2","y2"],kc=["x1","y1","x2","y2"],Sc=["x1","y1","x2","y2"],Tc=["x1","y1","x2","y2"],Cc=["points"],zc=["d"],Ac=["cx","cy"],Ec=["transform"],Mc=["d"],Rc=["x1","y1","x2","y2"],Ic=["x1","y1","x2","y2"],Pc=["x1","y1","x2","y2"],Oc=["points"],Lc=["x1","y1","x2","y2"],Fc=["points"],Nc=["x1","y1","x2","y2"],Dc=["points"],$c=["transform"],jc=["cx","cy"],Bc=["cx","cy"],Hc=["cx","cy"],Uc=["x","y"],Vc=["x","y"],Gc=["x","y"],Wc=["x","y"],Kc={class:"pv-values"},Yc={class:"pv-values-main"},qc={class:"pv-values-text"},Xc={class:"pv-values-real"},Zc={class:"pv-values-imag"},Jc={class:"pv-values-time"},Qc={class:"pv-values-time-text"},ef={class:"pv-values-time-value"},Rn=1.3,tf=1,Rt=-2.8,It=-2.8,Ue=-1.2,ut=1.3,In=1.3,Pn=1.3,nf=hi(Vt({__name:"ComplexWaveVisualization",setup(e){const t=Q(1.25),n=Q(!0);let o=null;const s=2*Math.PI*1.6,i=X=>Math.exp(-1*Math.pow(X-Rn,2)),l=(X,I,re)=>{const xt=-X*81*.7,Ee=X*81*.35,On=I*61*.9,a=I*61*.25,d=-re*61;return{x:436+xt+On,y:355+Ee+a+d}},r=V(()=>i(t.value)*Math.cos(s*t.value)),c=V(()=>i(t.value)*Math.sin(s*t.value)),v=V(()=>{const X=[];for(let I=0;I<=2.5;I+=.015){const re=i(I);X.push({t:I,re:re*Math.cos(s*I),im:re*Math.sin(s*I)})}return X}),f=V(()=>v.value.map((X,I)=>{const re=l(X.t,X.re,X.im);return`${I===0?"M":"L"} ${re.x} ${re.y}`}).join(" ")),g=V(()=>v.value.map((X,I)=>{const re=l(Ue,X.re,X.im);return`${I===0?"M":"L"} ${re.x} ${re.y}`}).join(" ")),x=V(()=>v.value.map((X,I)=>{const re=l(X.t,Rt,X.im);return`${I===0?"M":"L"} ${re.x} ${re.y}`}).join(" ")),k=V(()=>v.value.map((X,I)=>{const re=l(X.t,X.re,It);return`${I===0?"M":"L"} ${re.x} ${re.y}`}).join(" ")),y=V(()=>({tl:l(Ue,-ut,ut),tr:l(Ue,ut,ut),bl:l(Ue,-ut,-ut),br:l(Ue,ut,-ut)})),w=V(()=>l(Ue,0,1.4)),M=V(()=>l(Ue,0,-.3)),R=V(()=>l(Ue,-.3,0)),O=V(()=>l(Ue,1,0)),A=V(()=>({tl:l(0,Rt,In),tr:l(2.5,Rt,In),bl:l(0,Rt,-In),br:l(2.5,Rt,-In)})),S=V(()=>({bl:l(0,-Pn,It),br:l(0,Pn,It),tl:l(2.5,-Pn,It),tr:l(2.5,Pn,It)})),N=V(()=>l(Rn,0,0)),U=V(()=>l(Rn,0,1.6)),W=V(()=>l(Rn,1.5,0)),ee=V(()=>l(0,0,0)),F=V(()=>l(2.7,0,0)),j=V(()=>l(t.value,r.value,c.value)),le=V(()=>l(Ue,r.value,c.value)),xe=V(()=>l(t.value,Rt,c.value)),Oe=V(()=>l(t.value,r.value,It)),Ve=V(()=>Math.atan2(A.value.tl.y-A.value.tr.y,A.value.tl.x-A.value.tr.x)*(180/Math.PI)),Ce=V(()=>({x:(A.value.tl.x+A.value.tr.x)/2,y:(A.value.tl.y+A.value.tr.y)/2})),se=V(()=>Math.atan2(S.value.bl.y-S.value.tl.y,S.value.bl.x-S.value.tl.x)*(180/Math.PI)),Y=V(()=>({x:(S.value.br.x+S.value.tr.x)/2,y:(S.value.br.y+S.value.tr.y)/2})),K=V(()=>Math.atan2(y.value.tl.y-y.value.tr.y,y.value.tl.x-y.value.tr.x)*(180/Math.PI)),ze=V(()=>({x:(y.value.tl.x+y.value.tr.x)/2,y:(y.value.tl.y+y.value.tr.y)/2})),Ae=V(()=>({x:(ee.value.x+F.value.x)/2,y:(ee.value.y+F.value.y)/2}));let ge=0;const me=()=>{ge++,n.value&&ge%2===0&&(t.value+=.02,t.value>2.5&&(t.value=0)),o=requestAnimationFrame(me)};return Kt(()=>{o=requestAnimationFrame(me)}),zt(()=>{o&&cancelAnimationFrame(o)}),(X,I)=>(Te(),Je("div",oc,[I[15]||(I[15]=m("div",{class:"pv-title"},[m("h1",{class:"pv-title-gradient-1"}," The Observer Effect explains why the same "),m("h2",{class:"pv-title-gradient-2"}," life feels different to different people ")],-1)),m("div",sc,[(Te(),Je("svg",ic,[I[4]||(I[4]=Qt('<defs data-v-65cb23ba><linearGradient id="pv-helixGradient" x1="0%" y1="0%" x2="100%" y2="0%" data-v-65cb23ba><stop offset="0%" stop-color="#a855f7" data-v-65cb23ba><animate attributeName="stop-color" values="#a855f7;#ec4899;#06b6d4;#a855f7" dur="4s" repeatCount="indefinite" data-v-65cb23ba></animate></stop><stop offset="50%" stop-color="#ec4899" data-v-65cb23ba><animate attributeName="stop-color" values="#ec4899;#06b6d4;#a855f7;#ec4899" dur="4s" repeatCount="indefinite" data-v-65cb23ba></animate></stop><stop offset="100%" stop-color="#06b6d4" data-v-65cb23ba><animate attributeName="stop-color" values="#06b6d4;#a855f7;#ec4899;#06b6d4" dur="4s" repeatCount="indefinite" data-v-65cb23ba></animate></stop></linearGradient><linearGradient id="pv-imGradient" x1="0%" y1="0%" x2="100%" y2="0%" data-v-65cb23ba><stop offset="0%" stop-color="#06b6d4" data-v-65cb23ba></stop><stop offset="100%" stop-color="#22d3d3" data-v-65cb23ba></stop></linearGradient><linearGradient id="pv-reGradient" x1="0%" y1="0%" x2="100%" y2="0%" data-v-65cb23ba><stop offset="0%" stop-color="#f97316" data-v-65cb23ba></stop><stop offset="100%" stop-color="#fb923c" data-v-65cb23ba></stop></linearGradient><linearGradient id="pv-spiralGradient" x1="0%" y1="0%" x2="100%" y2="100%" data-v-65cb23ba><stop offset="0%" stop-color="#a855f7" data-v-65cb23ba></stop><stop offset="100%" stop-color="#6366f1" data-v-65cb23ba></stop></linearGradient><linearGradient id="pv-axisGradient" x1="0%" y1="0%" x2="100%" y2="0%" data-v-65cb23ba><stop offset="0%" stop-color="#64748b" data-v-65cb23ba></stop><stop offset="100%" stop-color="#94a3b8" data-v-65cb23ba></stop></linearGradient><filter id="pv-glow-cyan" x="-50%" y="-50%" width="200%" height="200%" data-v-65cb23ba><feGaussianBlur stdDeviation="3" result="coloredBlur" data-v-65cb23ba></feGaussianBlur><feMerge data-v-65cb23ba><feMergeNode in="coloredBlur" data-v-65cb23ba></feMergeNode><feMergeNode in="SourceGraphic" data-v-65cb23ba></feMergeNode></feMerge></filter><filter id="pv-glow-orange" x="-50%" y="-50%" width="200%" height="200%" data-v-65cb23ba><feGaussianBlur stdDeviation="3" result="coloredBlur" data-v-65cb23ba></feGaussianBlur><feMerge data-v-65cb23ba><feMergeNode in="coloredBlur" data-v-65cb23ba></feMergeNode><feMergeNode in="SourceGraphic" data-v-65cb23ba></feMergeNode></feMerge></filter><filter id="pv-glow-purple" x="-50%" y="-50%" width="200%" height="200%" data-v-65cb23ba><feGaussianBlur stdDeviation="4" result="coloredBlur" data-v-65cb23ba></feGaussianBlur><feMerge data-v-65cb23ba><feMergeNode in="coloredBlur" data-v-65cb23ba></feMergeNode><feMergeNode in="SourceGraphic" data-v-65cb23ba></feMergeNode></feMerge></filter><filter id="pv-glow-strong" x="-100%" y="-100%" width="300%" height="300%" data-v-65cb23ba><feGaussianBlur stdDeviation="6" result="coloredBlur" data-v-65cb23ba></feGaussianBlur><feMerge data-v-65cb23ba><feMergeNode in="coloredBlur" data-v-65cb23ba></feMergeNode><feMergeNode in="coloredBlur" data-v-65cb23ba></feMergeNode><feMergeNode in="SourceGraphic" data-v-65cb23ba></feMergeNode></feMerge></filter></defs>',1)),m("line",{x1:A.value.bl.x,y1:A.value.bl.y,x2:A.value.tl.x,y2:A.value.tl.y,stroke:"#0e7490","stroke-width":"1",class:"pv-shimmer"},null,8,lc),m("line",{x1:A.value.tl.x,y1:A.value.tl.y,x2:A.value.tr.x,y2:A.value.tr.y,stroke:"#0e7490","stroke-width":"1",class:"pv-shimmer"},null,8,rc),m("line",{x1:A.value.bl.x,y1:A.value.bl.y,x2:A.value.br.x,y2:A.value.br.y,stroke:"#0e7490","stroke-width":"1",class:"pv-shimmer"},null,8,ac),m("line",{x1:A.value.tr.x,y1:A.value.tr.y,x2:A.value.br.x,y2:A.value.br.y,stroke:"#0e7490","stroke-width":"1",class:"pv-shimmer"},null,8,cc),m("path",{d:x.value,fill:"none",stroke:"url(#pv-imGradient)","stroke-width":"2"},null,8,fc),m("circle",{cx:xe.value.x,cy:xe.value.y,r:"4",fill:"#06b6d4",class:"pv-point-pulse"},null,8,uc),m("g",{transform:`translate(${Ce.value.x}, ${Ce.value.y-25}) rotate(${Ve.value})`},[...I[0]||(I[0]=[Qt('<text fill="#22d3d3" font-size="13" font-family="Times New Roman, serif" text-anchor="middle" style="letter-spacing:-0.5px;" data-v-65cb23ba><tspan font-weight="bold" data-v-65cb23ba>Im</tspan><tspan font-style="italic" data-v-65cb23ba> f</tspan><tspan data-v-65cb23ba>=e</tspan><tspan baseline-shift="super" font-size="9" data-v-65cb23ba>−γ(t−t₀)²</tspan><tspan font-style="italic" data-v-65cb23ba>sin(ωt)</tspan></text>',1)])],8,dc),m("line",{x1:S.value.bl.x,y1:S.value.bl.y,x2:S.value.br.x,y2:S.value.br.y,stroke:"#c2410c","stroke-width":"1",class:"pv-shimmer"},null,8,pc),m("line",{x1:S.value.bl.x,y1:S.value.bl.y,x2:S.value.tl.x,y2:S.value.tl.y,stroke:"#c2410c","stroke-width":"1",class:"pv-shimmer"},null,8,vc),m("line",{x1:S.value.br.x,y1:S.value.br.y,x2:S.value.tr.x,y2:S.value.tr.y,stroke:"#c2410c","stroke-width":"1",class:"pv-shimmer"},null,8,hc),m("line",{x1:S.value.tl.x,y1:S.value.tl.y,x2:S.value.tr.x,y2:S.value.tr.y,stroke:"#c2410c","stroke-width":"1",class:"pv-shimmer"},null,8,gc),m("path",{d:k.value,fill:"none",stroke:"url(#pv-reGradient)","stroke-width":"2"},null,8,mc),m("circle",{cx:Oe.value.x,cy:Oe.value.y,r:"4",fill:"#f97316",class:"pv-point-pulse"},null,8,bc),m("g",{transform:`translate(${Y.value.x}, ${Y.value.y+25}) rotate(${se.value})`},[...I[1]||(I[1]=[Qt('<text fill="#fb923c" font-size="13" font-family="Times New Roman, serif" text-anchor="middle" style="letter-spacing:-0.5px;" data-v-65cb23ba><tspan font-weight="bold" data-v-65cb23ba>Re</tspan><tspan font-style="italic" data-v-65cb23ba> f</tspan><tspan data-v-65cb23ba>=e</tspan><tspan baseline-shift="super" font-size="9" data-v-65cb23ba>−γ(t−t₀)²</tspan><tspan font-style="italic" data-v-65cb23ba>cos(ωt)</tspan></text>',1)])],8,xc),m("line",{x1:y.value.bl.x,y1:y.value.bl.y,x2:y.value.tl.x,y2:y.value.tl.y,stroke:"#7c3aed","stroke-width":"1",class:"pv-shimmer"},null,8,yc),m("line",{x1:y.value.tl.x,y1:y.value.tl.y,x2:y.value.tr.x,y2:y.value.tr.y,stroke:"#7c3aed","stroke-width":"1",class:"pv-shimmer"},null,8,_c),m("line",{x1:y.value.bl.x,y1:y.value.bl.y,x2:y.value.br.x,y2:y.value.br.y,stroke:"#7c3aed","stroke-width":"1",class:"pv-shimmer"},null,8,wc),m("line",{x1:y.value.br.x,y1:y.value.br.y,x2:y.value.tr.x,y2:y.value.tr.y,stroke:"#7c3aed","stroke-width":"1",class:"pv-shimmer"},null,8,kc),m("line",{x1:M.value.x,y1:M.value.y,x2:w.value.x,y2:w.value.y,stroke:"#8b5cf6","stroke-width":"1"},null,8,Sc),m("line",{x1:R.value.x,y1:R.value.y,x2:O.value.x,y2:O.value.y,stroke:"#8b5cf6","stroke-width":"1"},null,8,Tc),m("polygon",{points:`${w.value.x},${w.value.y-6} ${w.value.x-3},${w.value.y+2} ${w.value.x+3},${w.value.y+2}`,fill:"#a855f7"},null,8,Cc),m("path",{d:g.value,fill:"none",stroke:"url(#pv-spiralGradient)","stroke-width":"2"},null,8,zc),m("circle",{cx:le.value.x,cy:le.value.y,r:"4",fill:"#a855f7",class:"pv-point-pulse"},null,8,Ac),m("g",{transform:`translate(${ze.value.x}, ${ze.value.y-20}) rotate(${K.value})`},[...I[2]||(I[2]=[Qt('<text fill="#c084fc" font-size="10" font-family="Times New Roman, serif" text-anchor="middle" style="letter-spacing:-0.5px;" data-v-65cb23ba><tspan font-style="italic" data-v-65cb23ba>f</tspan><tspan data-v-65cb23ba>=e</tspan><tspan baseline-shift="super" font-size="7" data-v-65cb23ba>−γ(t−t₀)²</tspan><tspan font-style="italic" data-v-65cb23ba>e</tspan><tspan baseline-shift="super" font-size="7" data-v-65cb23ba>iωt</tspan></text>',1)])],8,Ec),m("path",{d:f.value,fill:"none",stroke:"url(#pv-helixGradient)","stroke-width":"4"},null,8,Mc),m("line",{x1:j.value.x,y1:j.value.y,x2:xe.value.x,y2:xe.value.y,stroke:"#06b6d4","stroke-width":"1","stroke-dasharray":"6,4",class:"pv-dash-flow",opacity:"0.7"},null,8,Rc),m("line",{x1:j.value.x,y1:j.value.y,x2:Oe.value.x,y2:Oe.value.y,stroke:"#f97316","stroke-width":"1","stroke-dasharray":"6,4",class:"pv-dash-flow",opacity:"0.7"},null,8,Ic),m("line",{x1:ee.value.x,y1:ee.value.y,x2:F.value.x,y2:F.value.y,stroke:"url(#pv-axisGradient)","stroke-width":"2"},null,8,Pc),m("polygon",{points:`${F.value.x-6},${F.value.y+6} ${F.value.x+6},${F.value.y-2} ${F.value.x+2},${F.value.y+10}`,fill:"#94a3b8"},null,8,Oc),m("line",{x1:N.value.x,y1:N.value.y+8,x2:U.value.x,y2:U.value.y,stroke:"url(#pv-axisGradient)","stroke-width":"2"},null,8,Lc),m("polygon",{points:`${U.value.x},${U.value.y-8} ${U.value.x-4},${U.value.y+2} ${U.value.x+4},${U.value.y+2}`,fill:"#94a3b8"},null,8,Fc),m("line",{x1:N.value.x-8,y1:N.value.y-5,x2:W.value.x,y2:W.value.y,stroke:"url(#pv-axisGradient)","stroke-width":"2"},null,8,Nc),m("polygon",{points:`${W.value.x+8},${W.value.y+4} ${W.value.x-2},${W.value.y-4} ${W.value.x-4},${W.value.y+6}`,fill:"#94a3b8"},null,8,Dc),m("g",{transform:`translate(${Ae.value.x+30}, ${Ae.value.y-70}) rotate(${Ve.value})`},[...I[3]||(I[3]=[m("text",{fill:"#e879f9","font-size":"10","font-family":"Times New Roman, serif","text-anchor":"middle",style:{"letter-spacing":"-0.5px"}},[m("tspan",{"font-style":"italic"},"f(t)"),m("tspan",null,"=Re+"),m("tspan",{"font-style":"italic"},"i"),m("tspan",null,"·Im")],-1)])],8,$c),m("circle",{cx:j.value.x,cy:j.value.y,r:"10",fill:"url(#pv-helixGradient)",opacity:"0.3",class:"pv-point-pulse"},null,8,jc),m("circle",{cx:j.value.x,cy:j.value.y,r:"6",fill:"#fff"},null,8,Bc),m("circle",{cx:j.value.x,cy:j.value.y,r:"3",fill:"url(#pv-helixGradient)"},null,8,Hc),m("text",{x:U.value.x-30,y:U.value.y+8,fill:"#22d3d3","font-size":"18","font-weight":"bold","font-family":"serif"},"Im",8,Uc),m("text",{x:W.value.x+10,y:W.value.y+6,fill:"#fb923c","font-size":"18","font-weight":"bold","font-family":"serif"},"Re",8,Vc),m("text",{x:F.value.x-3,y:F.value.y+22,fill:"#c084fc","font-size":"18","font-style":"italic","font-family":"serif"},"t",8,Gc),m("text",{x:N.value.x+5,y:N.value.y+20,fill:"#94a3b8","font-size":"13","font-style":"italic","font-family":"serif"},"t₀",8,Wc)]))]),m("div",Kc,[m("div",Yc,[m("span",qc,[I[5]||(I[5]=m("span",{class:"pv-values-f"},"f",-1)),I[6]||(I[6]=m("span",{class:"pv-values-punctuation"},"(",-1)),I[7]||(I[7]=m("span",{class:"pv-values-t"},"t",-1)),I[8]||(I[8]=m("span",{class:"pv-values-punctuation"},") = ",-1)),m("span",Xc,it(r.value>=0?"+":"")+it(r.value.toFixed(2)),1),I[9]||(I[9]=m("span",{class:"pv-values-punctuation"}," + ",-1)),m("span",Zc,it(c.value.toFixed(2)),1),I[10]||(I[10]=m("span",{class:"pv-values-i"}," i",-1))])]),m("div",Jc,[m("span",Qc,[I[11]||(I[11]=m("span",{class:"pv-values-time-t"},"t",-1)),I[12]||(I[12]=m("span",{class:"pv-values-time-punctuation"}," = ",-1)),m("span",ef,it((t.value/tf).toFixed(2)),1),I[13]||(I[13]=m("span",{class:"pv-values-time-punctuation"},null,-1)),I[14]||(I[14]=m("span",{class:"pv-values-time-period"},"T",-1))])])])]))}}),[["__scopeId","data-v-65cb23ba"]]),of={class:"app-container"},sf={class:"c-controls"},lf={class:"c-controls-row"},rf=["value"],af=["value"],cf={key:0,class:"c-slider-container"},ff=["value"],uf={class:"c-slider-label"},df={class:"c-foreground-layer"},pf=["title"];Jr(Vt({__name:"App",setup(e){const t=Sl(()=>ta(()=>Promise.resolve().then(()=>bf),void 0,Ln&&Ln.tagName.toUpperCase()==="SCRIPT"&&Ln.src||new URL("assets/index-BunVQIX1.js",document.baseURI).href)),n=Q(!0),o=Q(!0),s=F=>{F.target instanceof HTMLInputElement||F.target instanceof HTMLTextAreaElement||F.key.toLowerCase()==="q"&&!F.ctrlKey&&!F.metaKey&&!F.altKey&&(F.preventDefault(),o.value=!o.value)},i=()=>{console.log("[App] closeCube called — hiding cube view"),o.value=!1};let l=null;const r=F=>{console.log("[App] CubeView wants to navigate to:",F),l=F},c=()=>{o.value?l?(console.log("[App] Toggle close — navigating to:",l),window.location.href=l):o.value=!1:o.value=!0,l=null};Kt(()=>{window.addEventListener("keydown",s)}),zt(()=>{window.removeEventListener("keydown",s)});const v=Q(23),f=Q(50),g=Q(!1),x=Q(!1);let k=null;const y=Q(!1);y.value="ontouchstart"in window||navigator.maxTouchPoints>0;const M=()=>{y.value||(k&&(clearTimeout(k),k=null),x.value=!0)},R=()=>{y.value||(k=window.setTimeout(()=>{x.value=!1,k=null},1e3))},O=()=>{k&&(clearTimeout(k),k=null),x.value=!x.value},A=[{value:0,label:"Mandelbulb"},{value:1,label:"Mandelbox"},{value:2,label:"Menger Sponge"},{value:3,label:"Sierpinski"},{value:4,label:"Kaleidoscope 3D"},{value:5,label:"Organic Hybrid"},{value:6,label:"Fractal Land"},{value:7,label:"+ Galaxy Nebula"},{value:8,label:"+ Infinite Tunnel"},{value:9,label:"+ Plasma Fractal"},{value:10,label:"+ Circuits"},{value:11,label:"+ Metaballs"},{value:12,label:"+ Volumetric Lines"},{value:13,label:"+ Disco Tunnel"},{value:14,label:"+ Speed Drive"},{value:15,label:"+ Hot Rocks"},{value:16,label:"+ Server Room"},{value:17,label:"+ Remnant X"},{value:18,label:"+ Kali Set"},{value:19,label:"+ Generators"},{value:20,label:"+ Simplicity Galaxy"},{value:21,label:"+ Ribbons"},{value:22,label:"+ Twisted Rings"},{value:23,label:"+ Waves Remix"},{value:24,label:"+ Dancing Metalights"},{value:25,label:"+ IO Blocks"},{value:26,label:"+ Beating Circles"},{value:27,label:"+ Circle Wave"},{value:28,label:"+ Soundflower"},{value:29,label:"+ Polar Beats"},{value:30,label:"+ Undulant Spectre"},{value:31,label:"+ Revision 2015"},{value:32,label:"+ Gameboy Style"},{value:33,label:"+ Electric Storm"},{value:34,label:"+ Vortex"},{value:35,label:"+ Neon Grid"},{value:36,label:"+ Matrix Rain"},{value:37,label:"+ Fire"},{value:38,label:"+ Aurora"},{value:39,label:"+ Wormhole"},{value:40,label:"+ Hexagons"},{value:41,label:"+ Bubbles"},{value:42,label:"+ Lightning"},{value:43,label:"+ Kaleidoscope 2D"},{value:44,label:"+ Starfield"},{value:45,label:"+ Liquid Metal"},{value:46,label:"+ Fractal Tree"},{value:47,label:"+ Voronoi"},{value:48,label:"+ Psychedelic"},{value:49,label:"+ Energy Field"}],S=V(()=>({opacity:f.value/100,filter:`brightness(${.3+f.value/100*.7})`})),N=()=>{n.value=!n.value},U=()=>{g.value=!g.value},W=F=>{const j=F.target;v.value=parseInt(j.value)},ee=F=>{const j=F.target;f.value=parseInt(j.value)};return(F,j)=>(Te(),Je("div",of,[m("div",sf,[m("button",{class:Me(["c-menu-toggle",{"c-menu-toggle--open":g.value}]),onClick:U},[...j[0]||(j[0]=[m("span",{class:"c-hamburger-line"},null,-1),m("span",{class:"c-hamburger-line"},null,-1),m("span",{class:"c-hamburger-line"},null,-1)])],2),m("div",{class:Me(["c-menu-panel",{"c-menu-panel--visible":g.value}])},[m("div",lf,[m("select",{class:"c-fractal-select",onChange:W,value:v.value},[(Te(),Je(Pe,null,Nl(A,le=>m("option",{key:le.value,value:le.value},it(le.label),9,af)),64))],40,rf),m("button",{class:"c-fractal-toggle",onClick:N},it(n.value?"ON":"OFF"),1)]),n.value?(Te(),Je("div",cf,[j[1]||(j[1]=m("span",{class:"c-slider-label"},"Intensity",-1)),m("input",{type:"range",class:"c-brightness-slider",min:"10",max:"100",value:f.value,onInput:ee},null,40,ff),m("span",uf,it(f.value)+"%",1)])):en("",!0)],2)]),m("div",{class:Me(["c-background-layer",{"c-background-layer--hidden":!n.value}]),style:Ot(S.value)},[n.value?(Te(),xo(nc,{key:0,mode:v.value},null,8,["mode"])):en("",!0)],6),m("div",df,[he(nf)]),m("div",{class:"c-nav-footer",onMouseenter:M,onMouseleave:R},[m("button",{class:Me(["c-nav-toggle",{"c-nav-toggle--open":x.value}]),onClick:O},[...j[2]||(j[2]=[m("span",{class:"c-nav-arrow"},"↑",-1)])],2),m("div",{class:Me(["c-nav-menu",{"c-nav-menu--visible":x.value}])},[...j[3]||(j[3]=[m("a",{href:"https://diegonmarcos.github.io/myprofile/",class:"c-nav-button",target:"_blank",rel:"noopener noreferrer"}," Profile ",-1),m("a",{href:"https://diegonmarcos.github.io/linktree/",class:"c-nav-button",target:"_blank",rel:"noopener noreferrer"}," Linktree ",-1),m("a",{href:"https://diegonmarcos.github.io/landpage/",class:"c-nav-button",target:"_blank",rel:"noopener noreferrer"}," Landpage ",-1)])],2)],32),m("button",{class:Me(["c-cube-toggle",{"c-cube-toggle--active":o.value}]),onClick:c,title:o.value?"Close cube view":"Open cube view"},[...j[4]||(j[4]=[Qt('<svg class="c-cube-toggle__cube" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.5" stroke-linejoin="round"><path d="M12 2L20 7L12 12L4 7Z" fill="rgba(255,255,255,0.15)"></path><path d="M20 7V17L12 22V12Z" fill="rgba(255,255,255,0.08)"></path><path d="M4 7V17L12 22V12Z" fill="rgba(255,255,255,0.03)"></path></svg><svg class="c-cube-toggle__close" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M18 6L6 18M6 6l12 12"></path></svg>',2)])],10,pf),he(os(t),{active:o.value,onClose:i,onNavigate:r},null,8,["active"])]))}})).mount("#app");const vf={class:"c-cube-scene"},hf=["src"],gf=["src"],mf=["src"],gi=-30,mi=-45,bf=Object.freeze(Object.defineProperty({__proto__:null,default:Vt({__name:"CubeView",props:{active:{type:Boolean,default:!1}},emits:["close","navigate"],setup(e,{emit:t}){const n=e,o=t,s=Q(n.active),i=Q(gi),l=Q(mi),r=Q(1),c=Q(!1),v=Q({x:0,y:0}),f=Q(0),g=Q(!0),x=Q(!1),k=Q(!1),y=Q(0),w=Q(window.innerWidth),M=Q(window.innerHeight),R=()=>{w.value=window.innerWidth,M.value=window.innerHeight},O=V(()=>Math.min(w.value*.7,M.value*.7)/2),A=Q(0),S=Q(0);let N=null;const U=["Front","Right","Back","Left","Top","Bottom"],W=["prism_glass.html","cube_fractal_neon.html","perspectives.html",null,null,null],ee={front:"prism_glass.html",right:"cube_fractal_neon.html",back:"perspectives.html"};let F=0,j={x:0,y:0},le=!1;const xe=u=>{try{const p=W[u];console.log("[CubeView] Navigate face:",U[u],"| URL:",p||"close"),p?window.location.href=p:o("close")}catch(p){console.error("[CubeView] Error navigating:",p)}},Oe=()=>{try{console.log("[CubeView] Exit clicked — closing cube view"),o("close")}catch(u){console.error("[CubeView] Error in handleExitClick:",u)}},Ve=(u,p)=>{const h=Date.now()-F;return Math.sqrt(Math.pow(u-j.x,2)+Math.pow(p-j.y,2))<=20&&h<=500},Ce=(u,p)=>{try{if(x.value||!Ve(p.clientX,p.clientY))return;console.log("[CubeView] Face clicked (mouse):",U[u]),xe(u)}catch(h){console.error("[CubeView] Error in handleFaceClick:",h)}},se=(u,p)=>{try{if(x.value||k.value)return;const h=p.changedTouches[0];if(!Ve(h.clientX,h.clientY))return;console.log("[CubeView] Face tapped (touch):",U[u]),le=!0,xe(u)}catch(h){console.error("[CubeView] Error in handleFaceTap:",h)}},Y=Qi(new Set([0,1,2])),K=u=>Y.value.has(u),ze=()=>{const u={0:[1,3,4,5],1:[0,2,4,5],2:[1,3,4,5],3:[0,2,4,5],4:[0,1,2,3],5:[0,1,2,3]},p=new Set(Y.value);p.add(f.value),u[f.value]?.forEach(h=>p.add(h)),p.size!==Y.value.size&&(Y.value=p)},Ae=[{x:0,y:0},{x:0,y:-90},{x:0,y:180},{x:0,y:90},{x:90,y:0},{x:-90,y:0}],ge=[{x:-30,y:-45},{x:-30,y:-135},{x:-30,y:135},{x:-30,y:45},{x:-60,y:-45},{x:60,y:-45}];bn(()=>n.active,u=>{console.log("[CubeView] Active prop changed to:",u),s.value=u,u?(document.body.style.overflow="hidden",i.value=gi,l.value=mi,r.value=1,g.value=!0,f.value=0):document.body.style.overflow=""});const me=V(()=>({transform:`translate3d(0, 0, ${-O.value}px) scale3d(${r.value}, ${r.value}, ${r.value}) rotateX(${i.value}deg) rotateY(${l.value}deg)`})),X=(u,p,h=400)=>new Promise(b=>{x.value=!0;const z=i.value,T=l.value,C=performance.now();let _=p-T;_>180&&(_-=360),_<-180&&(_+=360);const L=T+_,E=P=>{const D=P-C,H=Math.min(D/h,1),Z=1-Math.pow(1-H,3);i.value=z+(u-z)*Z,l.value=T+(L-T)*Z,H<1?requestAnimationFrame(E):(i.value=u,l.value=p,x.value=!1,b())};requestAnimationFrame(E)}),I=async u=>{x.value||(f.value=u,g.value?(await X(Ae[u].x,Ae[u].y),g.value=!1):(await X(ge[u].x,ge[u].y),g.value=!0))},re=async()=>{x.value||(g.value?(await X(Ae[f.value].x,Ae[f.value].y),g.value=!1):(await X(ge[f.value].x,ge[f.value].y),g.value=!0))},et=u=>{if(u.length<2)return 0;const p=u[0].clientX-u[1].clientX,h=u[0].clientY-u[1].clientY;return Math.sqrt(p*p+h*h)},dt=u=>{if(x.value)return;F=Date.now();const p="touches"in u?u.touches[0]:u;if(j={x:p.clientX,y:p.clientY},le=!1,N&&(cancelAnimationFrame(N),N=null),A.value=0,S.value=0,"touches"in u&&u.touches.length===2){k.value=!0,y.value=et(u.touches);return}c.value=!0,v.value={x:p.clientX,y:p.clientY}},tt=u=>{if(!s.value||x.value)return;if("touches"in u&&u.touches.length===2){u.preventDefault();const z=et(u.touches);if(y.value>0){const T=z/y.value;r.value=Math.max(.3,Math.min(2,r.value*T))}y.value=z;return}if(!c.value)return;const p="touches"in u?u.touches[0]:u,h=p.clientX-v.value.x,b=p.clientY-v.value.y;S.value=h*.4,A.value=-b*.4,l.value+=S.value,i.value+=A.value,v.value={x:p.clientX,y:p.clientY},a()},xt=()=>{if(Math.abs(A.value)<.1&&Math.abs(S.value)<.1){N=null;return}A.value*=.95,S.value*=.95,l.value+=S.value,i.value+=A.value,a(),N=requestAnimationFrame(xt)},Ee=u=>{try{if(!le&&!x.value&&!k.value){const p="changedTouches"in u?u.changedTouches[0]:u;if(Ve(p.clientX,p.clientY)){const h=document.querySelector(".c-cube-scene");if(h){const b=h.getBoundingClientRect();p.clientX>=b.left&&p.clientX<=b.right&&p.clientY>=b.top&&p.clientY<=b.bottom&&(console.log("[CubeView] stopDrag fallback tap — navigating to currentFace:",U[f.value]),xe(f.value))}}}c.value&&(Math.abs(A.value)>.5||Math.abs(S.value)>.5)&&(N=requestAnimationFrame(xt))}catch(p){console.error("[CubeView] Error in stopDrag:",p)}c.value=!1,k.value=!1,y.value=0,le=!1},On=u=>{if(!s.value)return;u.preventDefault();const p=u.deltaY>0?.95:1.05;r.value=Math.max(.3,Math.min(2,r.value*p))},a=()=>{let u=(l.value%360+360)%360;const p=f.value;if(Math.abs(i.value)>60?f.value=i.value>0?4:5:u>=315||u<45?f.value=0:u>=45&&u<135?f.value=3:u>=135&&u<225?f.value=2:f.value=1,f.value!==p){const z=W[f.value];z?o("navigate",z):o("navigate","")}const h=Math.abs(i.value)>15&&Math.abs(i.value)<75,b=u%90>15&&u%90<75;g.value=h||b,ze()},d=u=>{if(s.value){if(u.stopImmediatePropagation(),u.key==="Escape"){u.preventDefault(),console.log("[CubeView] Escape pressed — closing"),Oe();return}if(u.key.toLowerCase()==="q"){u.preventDefault(),console.log("[CubeView] Q pressed — face:",U[f.value]),xe(f.value);return}if(u.key===" "){u.preventDefault(),re();return}if(!x.value)switch(u.key){case"ArrowRight":f.value<4&&I((f.value+1)%4);break;case"ArrowLeft":f.value<4&&I((f.value+3)%4);break;case"ArrowUp":I(4);break;case"ArrowDown":I(5);break}}};return Kt(()=>{window.addEventListener("mousemove",tt),window.addEventListener("mouseup",Ee),window.addEventListener("touchmove",tt),window.addEventListener("touchend",Ee),window.addEventListener("keydown",d,!0),window.addEventListener("resize",R)}),zt(()=>{window.removeEventListener("mousemove",tt),window.removeEventListener("mouseup",Ee),window.removeEventListener("touchmove",tt),window.removeEventListener("touchend",Ee),window.removeEventListener("keydown",d,!0),window.removeEventListener("resize",R),document.body.style.overflow="",N&&cancelAnimationFrame(N)}),(u,p)=>(Te(),xo(_l,{to:"body"},[m("div",{class:Me(["c-cube-overlay",{"c-cube-overlay--active":s.value}]),onWheel:pi(On,["prevent"]),onMousedown:dt,onTouchstart:pi(dt,["prevent"])},[m("div",vf,[m("div",{class:Me(["c-cube",{"c-cube--animating":x.value}]),style:Ot(me.value)},[m("div",{class:"c-cube__face c-cube__face--front",onClick:p[0]||(p[0]=h=>Ce(0,h)),onTouchend:p[1]||(p[1]=h=>se(0,h))},[s.value&&K(0)?(Te(),Je("iframe",{key:0,src:ee.front,class:"c-cube__iframe",title:"Prism Glass",loading:"eager",allow:"accelerometer; autoplay"},null,8,hf)):en("",!0)],32),m("div",{class:"c-cube__face c-cube__face--right",onClick:p[2]||(p[2]=h=>Ce(1,h)),onTouchend:p[3]||(p[3]=h=>se(1,h))},[s.value&&K(1)?(Te(),Je("iframe",{key:0,src:ee.right,class:"c-cube__iframe",title:"Neon Cube",loading:"eager",allow:"accelerometer; autoplay"},null,8,gf)):en("",!0)],32),m("div",{class:"c-cube__face c-cube__face--back",onClick:p[4]||(p[4]=h=>Ce(2,h)),onTouchend:p[5]||(p[5]=h=>se(2,h))},[s.value&&K(2)?(Te(),Je("iframe",{key:0,src:ee.back,class:"c-cube__iframe",title:"Perspectives",loading:"eager",allow:"accelerometer; autoplay"},null,8,mf)):en("",!0)],32),m("div",{class:"c-cube__face c-cube__face--left",onClick:p[6]||(p[6]=h=>Ce(3,h)),onTouchend:p[7]||(p[7]=h=>se(3,h))},[...p[12]||(p[12]=[m("div",{class:"c-cube__placeholder c-cube__placeholder--gradient-1"},[m("h2",null,"Coming Soon"),m("p",null,"Future content")],-1)])],32),m("div",{class:"c-cube__face c-cube__face--top",onClick:p[8]||(p[8]=h=>Ce(4,h)),onTouchend:p[9]||(p[9]=h=>se(4,h))},[...p[13]||(p[13]=[m("div",{class:"c-cube__placeholder c-cube__placeholder--gradient-2"},[m("h2",null,"Projects"),m("p",null,"View from above")],-1)])],32),m("div",{class:"c-cube__face c-cube__face--bottom",onClick:p[10]||(p[10]=h=>Ce(5,h)),onTouchend:p[11]||(p[11]=h=>se(5,h))},[...p[14]||(p[14]=[m("div",{class:"c-cube__placeholder c-cube__placeholder--gradient-3"},[m("h2",null,"Contact"),m("p",null,"Get in touch")],-1)])],32)],6)])],34)]))}})},Symbol.toStringTag,{value:"Module"}))})();
