(function(){"use strict";var ps=document.createElement("style");ps.textContent=`.bio-fractal-canvas[data-v-c9463404]{width:100%;height:100%;display:block}@keyframes pv-shimmer-ce349056{0%,to{opacity:.6}50%{opacity:1}}@keyframes pv-glow-pulse-ce349056{0%,to{filter:drop-shadow(0 0 3px currentColor)}50%{filter:drop-shadow(0 0 12px currentColor)}}@keyframes pv-dash-flow-ce349056{0%{stroke-dashoffset:0}to{stroke-dashoffset:-20}}@keyframes pv-point-pulse-ce349056{0%,to{r:6;opacity:1}50%{r:9;opacity:.8}}.pv-shimmer[data-v-ce349056]{animation:pv-shimmer-ce349056 2s ease-in-out infinite}.pv-glow-pulse[data-v-ce349056]{animation:pv-glow-pulse-ce349056 1.5s ease-in-out infinite}.pv-dash-flow[data-v-ce349056]{animation:pv-dash-flow-ce349056 1s linear infinite}.pv-point-pulse[data-v-ce349056]{animation:pv-point-pulse-ce349056 .8s ease-in-out infinite}.pv-container[data-v-ce349056]{width:100%;height:100%;display:flex;flex-direction:column;align-items:center;justify-content:center;padding:10px;overflow:hidden;background:transparent}.pv-title[data-v-ce349056]{text-align:center;margin-bottom:16px;padding:0 16px;width:100%;max-width:840px}.pv-title h1[data-v-ce349056],.pv-title h2[data-v-ce349056]{font-size:clamp(1.4rem,4.5vw,2rem);font-weight:700;line-height:1.3;margin:0;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.pv-title-gradient-1[data-v-ce349056]{background:linear-gradient(to right,#a855f7,#ec4899,#22d3ee);-webkit-background-clip:text;-webkit-text-fill-color:transparent;background-clip:text}.pv-title-gradient-2[data-v-ce349056]{background:linear-gradient(to right,#22d3ee,#a855f7,#ec4899);-webkit-background-clip:text;-webkit-text-fill-color:transparent;background-clip:text}.pv-svg-container[data-v-ce349056]{position:relative;width:100%;max-width:840px;height:auto;aspect-ratio:840/640;flex-shrink:1}.pv-svg-container svg[data-v-ce349056]{width:100%;height:100%}.pv-values[data-v-ce349056]{margin-top:16px;width:100%;max-width:580px;text-align:center;padding:0 16px}.pv-values-main[data-v-ce349056]{text-align:center;margin-bottom:20px}.pv-values-text[data-v-ce349056]{font-size:2rem;font-family:Times New Roman,serif}.pv-values-f[data-v-ce349056]{color:#a855f7;font-style:italic}.pv-values-punctuation[data-v-ce349056]{color:#d1d5db}.pv-values-t[data-v-ce349056]{color:#a855f7;font-style:italic}.pv-values-real[data-v-ce349056]{color:#fb923c}.pv-values-imag[data-v-ce349056]{color:#22d3d3}.pv-values-i[data-v-ce349056]{color:#22d3d3;font-style:italic}.pv-values-time[data-v-ce349056]{text-align:center}.pv-values-time-text[data-v-ce349056]{font-size:1.8rem;font-family:Times New Roman,serif}.pv-values-time-t[data-v-ce349056]{color:#a855f7;font-style:italic}.pv-values-time-punctuation[data-v-ce349056]{color:#9ca3af}.pv-values-time-value[data-v-ce349056]{color:#d1d5db}.pv-values-time-period[data-v-ce349056]{color:#a855f7;font-style:italic}*{box-sizing:border-box;margin:0;padding:0}html,body{width:100%;height:100%;overflow:hidden}body{background-color:#000;font-family:-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,sans-serif;color:#fff}button{border:none;background:none;padding:0;cursor:pointer;font:inherit}select{font-family:-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,sans-serif}canvas{display:block}.o-fullscreen{width:100%;height:100%;position:relative}.o-layer{position:absolute;top:0;left:0;width:100%;height:100%}.o-layer--background{z-index:0}.o-layer--foreground{z-index:1;display:flex;align-items:center;justify-content:center;pointer-events:none}.o-fixed{position:fixed}.c-background-layer{position:absolute;top:0;left:0;width:100%;height:100%;z-index:0;transition-property:opacity,filter;transition-duration:.3s;transition-timing-function:ease}.c-background-layer--hidden{opacity:0!important;pointer-events:none}.c-background-layer canvas{width:100%!important;height:100%!important}.c-foreground-layer{position:absolute;top:0;left:0;width:100%;height:100%;z-index:1;display:flex;align-items:center;justify-content:center;pointer-events:none}.c-controls{position:fixed;top:10px;right:10px;z-index:100;display:flex;flex-direction:column;gap:8px;align-items:flex-end}.c-menu-toggle{background:transparent!important;backdrop-filter:none;-webkit-backdrop-filter:none;transition-property:background,transform;transition-duration:.3s;transition-timing-function:ease;border:2px solid rgba(255,255,255,.5);color:#fff;width:36px;height:36px;border-radius:8px;font-size:18px;display:flex;align-items:center;justify-content:center;box-shadow:0 0 12px #ffffff26}.c-menu-toggle:hover{background:transparent!important;border-color:#ffffffb3;box-shadow:0 0 20px #ffffff40}.c-menu-toggle--open{transform:rotate(90deg)}.c-menu-panel{display:flex;flex-direction:column;gap:8px;align-items:flex-end;max-height:0;overflow:hidden;opacity:0;transition-property:max-height,opacity;transition-duration:.3s;transition-timing-function:ease}.c-menu-panel--visible{max-height:200px;opacity:1}.c-controls-row{display:flex;gap:8px;align-items:center}.c-fractal-toggle{background:#ffffff1a;-webkit-backdrop-filter:blur(4px);backdrop-filter:blur(4px);transition-property:background;transition-duration:.3s;transition-timing-function:ease;border:1px solid rgba(255,255,255,.3);color:#fff;padding:8px 12px;border-radius:6px;font-size:12px}.c-fractal-toggle:hover{background:#fff3}.c-fractal-select{background:#ffffff1a;-webkit-backdrop-filter:blur(4px);backdrop-filter:blur(4px);border:1px solid rgba(255,255,255,.3);color:#fff;padding:8px 28px 8px 12px;border-radius:6px;font-size:12px;outline:none;-webkit-appearance:none;-moz-appearance:none;appearance:none;background-image:url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' fill='white' viewBox='0 0 16 16'%3E%3Cpath d='M8 11L3 6h10l-5 5z'/%3E%3C/svg%3E");background-repeat:no-repeat;background-position:right 8px center;transition-property:background-color;transition-duration:.3s;transition-timing-function:ease}.c-fractal-select:hover{background-color:#fff3}.c-fractal-select option{background:#1a1a2e;color:#fff}.c-slider-container{background:#ffffff1a;-webkit-backdrop-filter:blur(4px);backdrop-filter:blur(4px);display:flex;align-items:center;gap:8px;border:1px solid rgba(255,255,255,.3);padding:6px 12px;border-radius:6px}.c-slider-label{color:#fff;font-size:11px;white-space:nowrap}.c-brightness-slider{-webkit-appearance:none;-moz-appearance:none;appearance:none;width:80px;height:4px;border-radius:2px;background:#ffffff4d;outline:none;cursor:pointer}.c-brightness-slider::-webkit-slider-thumb{-webkit-appearance:none;-moz-appearance:none;appearance:none;width:14px;height:14px;border-radius:50%;background:#fff;cursor:pointer;box-shadow:0 1px 3px #0000004d}.c-brightness-slider::-moz-range-thumb{width:14px;height:14px;border-radius:50%;background:#fff;cursor:pointer;border:none}.c-nav-footer{position:fixed;bottom:16px;left:50%;transform:translate(-50%);z-index:100;display:flex;flex-direction:column;gap:12px;align-items:center;pointer-events:auto;padding:8px}.c-nav-toggle{position:relative;width:48px;height:48px;border:none;border-radius:50%;cursor:pointer;transform:translateY(0);transition:transform 3s cubic-bezier(.25,.1,.25,1),box-shadow .3s ease,border-color .3s ease;opacity:1!important;visibility:visible!important;background:transparent!important;backdrop-filter:none;-webkit-backdrop-filter:none;border:2px solid rgba(255,255,255,.8);box-shadow:0 0 20px #ffffff4d}.c-nav-toggle:active{transform:translateY(0) scale(1.05);box-shadow:0 0 8px #ffffff1a}.c-nav-toggle--open{transform:translateY(-30px) scale(1.05)!important;box-shadow:0 0 20px #ffffff40;border-color:#ffffffb3;transition:transform 3s cubic-bezier(.25,.1,.25,1)!important}.c-nav-toggle--open .c-nav-arrow{animation:arrow-bounce-inverted 1.5s ease-in-out infinite}.c-nav-arrow{display:inline-block;font-size:1.8rem;color:#fff;font-weight:700;text-shadow:0 2px 6px rgba(0,0,0,.6);animation:arrow-bounce 1.5s ease-in-out infinite;opacity:1!important}.c-nav-menu{display:flex;flex-wrap:wrap;gap:16px;max-height:0;overflow:visible;opacity:0;transform:translateY(15px);transition:max-height 1s cubic-bezier(.25,.1,.25,1),opacity .8s cubic-bezier(.25,.1,.25,1),transform 1s cubic-bezier(.25,.1,.25,1);justify-content:center;max-width:600px;padding:8px 0}.c-nav-menu--visible{max-height:250px;opacity:1;transform:translateY(0);transition:max-height 3s cubic-bezier(.25,.1,.25,1),opacity 2s cubic-bezier(.25,.1,.25,1) .2s,transform 2.5s cubic-bezier(.25,.1,.25,1)}.c-nav-button{position:relative;padding:12px 28px;font-size:.9rem;font-weight:600;text-decoration:none;color:#fff;border-radius:12px;transition:all .4s cubic-bezier(.4,0,.2,1);overflow:hidden;white-space:nowrap;flex-shrink:0;background:transparent!important;backdrop-filter:none;-webkit-backdrop-filter:none;border:2px solid rgba(255,255,255,.4);box-shadow:0 0 10px #ffffff1f}.c-nav-button:before{content:"";position:absolute;top:0;left:-100%;width:100%;height:100%;background:linear-gradient(90deg,transparent,rgba(255,255,255,.3),transparent);animation:shimmer-slide 3s ease-in-out infinite}.c-nav-button:hover{transform:translateY(-3px) scale(1.05);background:transparent!important;box-shadow:0 0 20px #ffffff40;border-color:#fff9}.c-nav-button:active{transform:translateY(-1px) scale(1.02);background:transparent!important;box-shadow:0 0 12px #ffffff26}.c-nav-button{text-shadow:0 1px 2px rgba(0,0,0,.3)}.c-nav-menu:not(.c-nav-menu--visible) .c-nav-button{opacity:0!important;pointer-events:none}.c-nav-menu--visible .c-nav-button{opacity:1;transform:translateY(0) scale(1);transition:opacity 1s cubic-bezier(.25,.1,.25,1),transform 1s cubic-bezier(.25,.1,.25,1)}.c-nav-menu--visible .c-nav-button:nth-child(1){transition-delay:0s}.c-nav-menu--visible .c-nav-button:nth-child(2){transition-delay:1s}.c-nav-menu--visible .c-nav-button:nth-child(3){transition-delay:2s}@keyframes shimmer-slide{0%{left:-100%}50%,to{left:100%}}@keyframes arrow-bounce{0%,to{transform:translateY(0)}50%{transform:translateY(-6px)}}@keyframes arrow-bounce-inverted{0%,to{transform:rotate(180deg) translateY(0)}50%{transform:rotate(180deg) translateY(6px)}}.u-hidden{display:none!important}.u-invisible{visibility:hidden!important}.u-no-pointer{pointer-events:none!important}.u-pointer{pointer-events:auto!important}#app,.app-container{width:100%;height:100%;position:relative}
/*$vite$:1*/`,document.head.appendChild(ps);/**
* @vue/shared v3.5.27
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function Tn(e){const t=Object.create(null);for(const n of e.split(","))t[n]=1;return n=>n in t}const U={},pt=[],ze=()=>{},vs=()=>!1,Kt=e=>e.charCodeAt(0)===111&&e.charCodeAt(1)===110&&(e.charCodeAt(2)>122||e.charCodeAt(2)<97),Cn=e=>e.startsWith("onUpdate:"),se=Object.assign,En=(e,t)=>{const n=e.indexOf(t);n>-1&&e.splice(n,1)},si=Object.prototype.hasOwnProperty,j=(e,t)=>si.call(e,t),F=Array.isArray,vt=e=>qt(e)==="[object Map]",hs=e=>qt(e)==="[object Set]",N=e=>typeof e=="function",Q=e=>typeof e=="string",Ve=e=>typeof e=="symbol",X=e=>e!==null&&typeof e=="object",ms=e=>(X(e)||N(e))&&N(e.then)&&N(e.catch),gs=Object.prototype.toString,qt=e=>gs.call(e),oi=e=>qt(e).slice(8,-1),bs=e=>qt(e)==="[object Object]",Rn=e=>Q(e)&&e!=="NaN"&&e[0]!=="-"&&""+parseInt(e,10)===e,Ct=Tn(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),Yt=e=>{const t=Object.create(null);return n=>t[n]||(t[n]=e(n))},ii=/-\w/g,Ke=Yt(e=>e.replace(ii,t=>t.slice(1).toUpperCase())),li=/\B([A-Z])/g,it=Yt(e=>e.replace(li,"-$1").toLowerCase()),xs=Yt(e=>e.charAt(0).toUpperCase()+e.slice(1)),kn=Yt(e=>e?`on${xs(e)}`:""),qe=(e,t)=>!Object.is(e,t),In=(e,...t)=>{for(let n=0;n<e.length;n++)e[n](...t)},ys=(e,t,n,s=!1)=>{Object.defineProperty(e,t,{configurable:!0,enumerable:!1,writable:s,value:n})},ri=e=>{const t=parseFloat(e);return isNaN(t)?e:t};let _s;const Xt=()=>_s||(_s=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function Jt(e){if(F(e)){const t={};for(let n=0;n<e.length;n++){const s=e[n],o=Q(s)?ui(s):Jt(s);if(o)for(const i in o)t[i]=o[i]}return t}else if(Q(e)||X(e))return e}const ai=/;(?![^(]*\))/g,ci=/:([^]+)/,fi=/\/\*[^]*?\*\//g;function ui(e){const t={};return e.replace(fi,"").split(ai).forEach(n=>{if(n){const s=n.split(ci);s.length>1&&(t[s[0].trim()]=s[1].trim())}}),t}function Ye(e){let t="";if(Q(e))t=e;else if(F(e))for(let n=0;n<e.length;n++){const s=Ye(e[n]);s&&(t+=s+" ")}else if(X(e))for(const n in e)e[n]&&(t+=n+" ");return t.trim()}const di=Tn("itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly");function ws(e){return!!e||e===""}const Ss=e=>!!(e&&e.__v_isRef===!0),Xe=e=>Q(e)?e:e==null?"":F(e)||X(e)&&(e.toString===gs||!N(e.toString))?Ss(e)?Xe(e.value):JSON.stringify(e,zs,2):String(e),zs=(e,t)=>Ss(t)?zs(e,t.value):vt(t)?{[`Map(${t.size})`]:[...t.entries()].reduce((n,[s,o],i)=>(n[Mn(s,i)+" =>"]=o,n),{})}:hs(t)?{[`Set(${t.size})`]:[...t.values()].map(n=>Mn(n))}:Ve(t)?Mn(t):X(t)&&!F(t)&&!bs(t)?String(t):t,Mn=(e,t="")=>{var n;return Ve(e)?`Symbol(${(n=e.description)!=null?n:t})`:e};/**
* @vue/reactivity v3.5.27
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let ue;class pi{constructor(t=!1){this.detached=t,this._active=!0,this._on=0,this.effects=[],this.cleanups=[],this._isPaused=!1,this.parent=ue,!t&&ue&&(this.index=(ue.scopes||(ue.scopes=[])).push(this)-1)}get active(){return this._active}pause(){if(this._active){this._isPaused=!0;let t,n;if(this.scopes)for(t=0,n=this.scopes.length;t<n;t++)this.scopes[t].pause();for(t=0,n=this.effects.length;t<n;t++)this.effects[t].pause()}}resume(){if(this._active&&this._isPaused){this._isPaused=!1;let t,n;if(this.scopes)for(t=0,n=this.scopes.length;t<n;t++)this.scopes[t].resume();for(t=0,n=this.effects.length;t<n;t++)this.effects[t].resume()}}run(t){if(this._active){const n=ue;try{return ue=this,t()}finally{ue=n}}}on(){++this._on===1&&(this.prevScope=ue,ue=this)}off(){this._on>0&&--this._on===0&&(ue=this.prevScope,this.prevScope=void 0)}stop(t){if(this._active){this._active=!1;let n,s;for(n=0,s=this.effects.length;n<s;n++)this.effects[n].stop();for(this.effects.length=0,n=0,s=this.cleanups.length;n<s;n++)this.cleanups[n]();if(this.cleanups.length=0,this.scopes){for(n=0,s=this.scopes.length;n<s;n++)this.scopes[n].stop(!0);this.scopes.length=0}if(!this.detached&&this.parent&&!t){const o=this.parent.scopes.pop();o&&o!==this&&(this.parent.scopes[this.index]=o,o.index=this.index)}this.parent=void 0}}}function vi(){return ue}let W;const On=new WeakSet;class As{constructor(t){this.fn=t,this.deps=void 0,this.depsTail=void 0,this.flags=5,this.next=void 0,this.cleanup=void 0,this.scheduler=void 0,ue&&ue.active&&ue.effects.push(this)}pause(){this.flags|=64}resume(){this.flags&64&&(this.flags&=-65,On.has(this)&&(On.delete(this),this.trigger()))}notify(){this.flags&2&&!(this.flags&32)||this.flags&8||Cs(this)}run(){if(!(this.flags&1))return this.fn();this.flags|=2,Ms(this),Es(this);const t=W,n=ye;W=this,ye=!0;try{return this.fn()}finally{Rs(this),W=t,ye=n,this.flags&=-3}}stop(){if(this.flags&1){for(let t=this.deps;t;t=t.nextDep)Ln(t);this.deps=this.depsTail=void 0,Ms(this),this.onStop&&this.onStop(),this.flags&=-2}}trigger(){this.flags&64?On.add(this):this.scheduler?this.scheduler():this.runIfDirty()}runIfDirty(){Fn(this)&&this.run()}get dirty(){return Fn(this)}}let Ts=0,Et,Rt;function Cs(e,t=!1){if(e.flags|=8,t){e.next=Rt,Rt=e;return}e.next=Et,Et=e}function Pn(){Ts++}function Nn(){if(--Ts>0)return;if(Rt){let t=Rt;for(Rt=void 0;t;){const n=t.next;t.next=void 0,t.flags&=-9,t=n}}let e;for(;Et;){let t=Et;for(Et=void 0;t;){const n=t.next;if(t.next=void 0,t.flags&=-9,t.flags&1)try{t.trigger()}catch(s){e||(e=s)}t=n}}if(e)throw e}function Es(e){for(let t=e.deps;t;t=t.nextDep)t.version=-1,t.prevActiveLink=t.dep.activeLink,t.dep.activeLink=t}function Rs(e){let t,n=e.depsTail,s=n;for(;s;){const o=s.prevDep;s.version===-1?(s===n&&(n=o),Ln(s),hi(s)):t=s,s.dep.activeLink=s.prevActiveLink,s.prevActiveLink=void 0,s=o}e.deps=t,e.depsTail=n}function Fn(e){for(let t=e.deps;t;t=t.nextDep)if(t.dep.version!==t.version||t.dep.computed&&(ks(t.dep.computed)||t.dep.version!==t.version))return!0;return!!e._dirty}function ks(e){if(e.flags&4&&!(e.flags&16)||(e.flags&=-17,e.globalVersion===kt)||(e.globalVersion=kt,!e.isSSR&&e.flags&128&&(!e.deps&&!e._dirty||!Fn(e))))return;e.flags|=2;const t=e.dep,n=W,s=ye;W=e,ye=!0;try{Es(e);const o=e.fn(e._value);(t.version===0||qe(o,e._value))&&(e.flags|=128,e._value=o,t.version++)}catch(o){throw t.version++,o}finally{W=n,ye=s,Rs(e),e.flags&=-3}}function Ln(e,t=!1){const{dep:n,prevSub:s,nextSub:o}=e;if(s&&(s.nextSub=o,e.prevSub=void 0),o&&(o.prevSub=s,e.nextSub=void 0),n.subs===e&&(n.subs=s,!s&&n.computed)){n.computed.flags&=-5;for(let i=n.computed.deps;i;i=i.nextDep)Ln(i,!0)}!t&&!--n.sc&&n.map&&n.map.delete(n.key)}function hi(e){const{prevDep:t,nextDep:n}=e;t&&(t.nextDep=n,e.prevDep=void 0),n&&(n.prevDep=t,e.nextDep=void 0)}let ye=!0;const Is=[];function Ae(){Is.push(ye),ye=!1}function Te(){const e=Is.pop();ye=e===void 0?!0:e}function Ms(e){const{cleanup:t}=e;if(e.cleanup=void 0,t){const n=W;W=void 0;try{t()}finally{W=n}}}let kt=0;class mi{constructor(t,n){this.sub=t,this.dep=n,this.version=n.version,this.nextDep=this.prevDep=this.nextSub=this.prevSub=this.prevActiveLink=void 0}}class Dn{constructor(t){this.computed=t,this.version=0,this.activeLink=void 0,this.subs=void 0,this.map=void 0,this.key=void 0,this.sc=0,this.__v_skip=!0}track(t){if(!W||!ye||W===this.computed)return;let n=this.activeLink;if(n===void 0||n.sub!==W)n=this.activeLink=new mi(W,this),W.deps?(n.prevDep=W.depsTail,W.depsTail.nextDep=n,W.depsTail=n):W.deps=W.depsTail=n,Os(n);else if(n.version===-1&&(n.version=this.version,n.nextDep)){const s=n.nextDep;s.prevDep=n.prevDep,n.prevDep&&(n.prevDep.nextDep=s),n.prevDep=W.depsTail,n.nextDep=void 0,W.depsTail.nextDep=n,W.depsTail=n,W.deps===n&&(W.deps=s)}return n}trigger(t){this.version++,kt++,this.notify(t)}notify(t){Pn();try{for(let n=this.subs;n;n=n.prevSub)n.sub.notify()&&n.sub.dep.notify()}finally{Nn()}}}function Os(e){if(e.dep.sc++,e.sub.flags&4){const t=e.dep.computed;if(t&&!e.dep.subs){t.flags|=20;for(let s=t.deps;s;s=s.nextDep)Os(s)}const n=e.dep.subs;n!==e&&(e.prevSub=n,n&&(n.nextSub=e)),e.dep.subs=e}}const $n=new WeakMap,lt=Symbol(""),Bn=Symbol(""),It=Symbol("");function re(e,t,n){if(ye&&W){let s=$n.get(e);s||$n.set(e,s=new Map);let o=s.get(n);o||(s.set(n,o=new Dn),o.map=s,o.key=n),o.track()}}function De(e,t,n,s,o,i){const l=$n.get(e);if(!l){kt++;return}const r=c=>{c&&c.trigger()};if(Pn(),t==="clear")l.forEach(r);else{const c=F(e),d=c&&Rn(n);if(c&&n==="length"){const u=Number(s);l.forEach((v,z)=>{(z==="length"||z===It||!Ve(z)&&z>=u)&&r(v)})}else switch((n!==void 0||l.has(void 0))&&r(l.get(n)),d&&r(l.get(It)),t){case"add":c?d&&r(l.get("length")):(r(l.get(lt)),vt(e)&&r(l.get(Bn)));break;case"delete":c||(r(l.get(lt)),vt(e)&&r(l.get(Bn)));break;case"set":vt(e)&&r(l.get(lt));break}}Nn()}function ht(e){const t=$(e);return t===e?t:(re(t,"iterate",It),xe(e)?t:t.map(_e))}function Qt(e){return re(e=$(e),"iterate",It),e}function Je(e,t){return Be(e)?mt(rt(e)?_e(t):t):_e(t)}const gi={__proto__:null,[Symbol.iterator](){return jn(this,Symbol.iterator,e=>Je(this,e))},concat(...e){return ht(this).concat(...e.map(t=>F(t)?ht(t):t))},entries(){return jn(this,"entries",e=>(e[1]=Je(this,e[1]),e))},every(e,t){return $e(this,"every",e,t,void 0,arguments)},filter(e,t){return $e(this,"filter",e,t,n=>n.map(s=>Je(this,s)),arguments)},find(e,t){return $e(this,"find",e,t,n=>Je(this,n),arguments)},findIndex(e,t){return $e(this,"findIndex",e,t,void 0,arguments)},findLast(e,t){return $e(this,"findLast",e,t,n=>Je(this,n),arguments)},findLastIndex(e,t){return $e(this,"findLastIndex",e,t,void 0,arguments)},forEach(e,t){return $e(this,"forEach",e,t,void 0,arguments)},includes(...e){return Hn(this,"includes",e)},indexOf(...e){return Hn(this,"indexOf",e)},join(e){return ht(this).join(e)},lastIndexOf(...e){return Hn(this,"lastIndexOf",e)},map(e,t){return $e(this,"map",e,t,void 0,arguments)},pop(){return Mt(this,"pop")},push(...e){return Mt(this,"push",e)},reduce(e,...t){return Ps(this,"reduce",e,t)},reduceRight(e,...t){return Ps(this,"reduceRight",e,t)},shift(){return Mt(this,"shift")},some(e,t){return $e(this,"some",e,t,void 0,arguments)},splice(...e){return Mt(this,"splice",e)},toReversed(){return ht(this).toReversed()},toSorted(e){return ht(this).toSorted(e)},toSpliced(...e){return ht(this).toSpliced(...e)},unshift(...e){return Mt(this,"unshift",e)},values(){return jn(this,"values",e=>Je(this,e))}};function jn(e,t,n){const s=Qt(e),o=s[t]();return s!==e&&!xe(e)&&(o._next=o.next,o.next=()=>{const i=o._next();return i.done||(i.value=n(i.value)),i}),o}const bi=Array.prototype;function $e(e,t,n,s,o,i){const l=Qt(e),r=l!==e&&!xe(e),c=l[t];if(c!==bi[t]){const v=c.apply(e,i);return r?_e(v):v}let d=n;l!==e&&(r?d=function(v,z){return n.call(this,Je(e,v),z,e)}:n.length>2&&(d=function(v,z){return n.call(this,v,z,e)}));const u=c.call(l,d,s);return r&&o?o(u):u}function Ps(e,t,n,s){const o=Qt(e);let i=n;return o!==e&&(xe(e)?n.length>3&&(i=function(l,r,c){return n.call(this,l,r,c,e)}):i=function(l,r,c){return n.call(this,l,Je(e,r),c,e)}),o[t](i,...s)}function Hn(e,t,n){const s=$(e);re(s,"iterate",It);const o=s[t](...n);return(o===-1||o===!1)&&Vn(n[0])?(n[0]=$(n[0]),s[t](...n)):o}function Mt(e,t,n=[]){Ae(),Pn();const s=$(e)[t].apply(e,n);return Nn(),Te(),s}const xi=Tn("__proto__,__v_isRef,__isVue"),Ns=new Set(Object.getOwnPropertyNames(Symbol).filter(e=>e!=="arguments"&&e!=="caller").map(e=>Symbol[e]).filter(Ve));function yi(e){Ve(e)||(e=String(e));const t=$(this);return re(t,"has",e),t.hasOwnProperty(e)}class Fs{constructor(t=!1,n=!1){this._isReadonly=t,this._isShallow=n}get(t,n,s){if(n==="__v_skip")return t.__v_skip;const o=this._isReadonly,i=this._isShallow;if(n==="__v_isReactive")return!o;if(n==="__v_isReadonly")return o;if(n==="__v_isShallow")return i;if(n==="__v_raw")return s===(o?i?Hs:js:i?Bs:$s).get(t)||Object.getPrototypeOf(t)===Object.getPrototypeOf(s)?t:void 0;const l=F(t);if(!o){let c;if(l&&(c=gi[n]))return c;if(n==="hasOwnProperty")return yi}const r=Reflect.get(t,n,oe(t)?t:s);if((Ve(n)?Ns.has(n):xi(n))||(o||re(t,"get",n),i))return r;if(oe(r)){const c=l&&Rn(n)?r:r.value;return o&&X(c)?Wn(c):c}return X(r)?o?Wn(r):Un(r):r}}class Ls extends Fs{constructor(t=!1){super(!1,t)}set(t,n,s,o){let i=t[n];const l=F(t)&&Rn(n);if(!this._isShallow){const d=Be(i);if(!xe(s)&&!Be(s)&&(i=$(i),s=$(s)),!l&&oe(i)&&!oe(s))return d||(i.value=s),!0}const r=l?Number(n)<t.length:j(t,n),c=Reflect.set(t,n,s,oe(t)?t:o);return t===$(o)&&(r?qe(s,i)&&De(t,"set",n,s):De(t,"add",n,s)),c}deleteProperty(t,n){const s=j(t,n);t[n];const o=Reflect.deleteProperty(t,n);return o&&s&&De(t,"delete",n,void 0),o}has(t,n){const s=Reflect.has(t,n);return(!Ve(n)||!Ns.has(n))&&re(t,"has",n),s}ownKeys(t){return re(t,"iterate",F(t)?"length":lt),Reflect.ownKeys(t)}}class Ds extends Fs{constructor(t=!1){super(!0,t)}set(t,n){return!0}deleteProperty(t,n){return!0}}const _i=new Ls,wi=new Ds,Si=new Ls(!0),zi=new Ds(!0),Gn=e=>e,Zt=e=>Reflect.getPrototypeOf(e);function Ai(e,t,n){return function(...s){const o=this.__v_raw,i=$(o),l=vt(i),r=e==="entries"||e===Symbol.iterator&&l,c=e==="keys"&&l,d=o[e](...s),u=n?Gn:t?mt:_e;return!t&&re(i,"iterate",c?Bn:lt),se(Object.create(d),{next(){const{value:v,done:z}=d.next();return z?{value:v,done:z}:{value:r?[u(v[0]),u(v[1])]:u(v),done:z}}})}}function en(e){return function(...t){return e==="delete"?!1:e==="clear"?void 0:this}}function Ti(e,t){const n={get(o){const i=this.__v_raw,l=$(i),r=$(o);e||(qe(o,r)&&re(l,"get",o),re(l,"get",r));const{has:c}=Zt(l),d=t?Gn:e?mt:_e;if(c.call(l,o))return d(i.get(o));if(c.call(l,r))return d(i.get(r));i!==l&&i.get(o)},get size(){const o=this.__v_raw;return!e&&re($(o),"iterate",lt),o.size},has(o){const i=this.__v_raw,l=$(i),r=$(o);return e||(qe(o,r)&&re(l,"has",o),re(l,"has",r)),o===r?i.has(o):i.has(o)||i.has(r)},forEach(o,i){const l=this,r=l.__v_raw,c=$(r),d=t?Gn:e?mt:_e;return!e&&re(c,"iterate",lt),r.forEach((u,v)=>o.call(i,d(u),d(v),l))}};return se(n,e?{add:en("add"),set:en("set"),delete:en("delete"),clear:en("clear")}:{add(o){!t&&!xe(o)&&!Be(o)&&(o=$(o));const i=$(this);return Zt(i).has.call(i,o)||(i.add(o),De(i,"add",o,o)),this},set(o,i){!t&&!xe(i)&&!Be(i)&&(i=$(i));const l=$(this),{has:r,get:c}=Zt(l);let d=r.call(l,o);d||(o=$(o),d=r.call(l,o));const u=c.call(l,o);return l.set(o,i),d?qe(i,u)&&De(l,"set",o,i):De(l,"add",o,i),this},delete(o){const i=$(this),{has:l,get:r}=Zt(i);let c=l.call(i,o);c||(o=$(o),c=l.call(i,o)),r&&r.call(i,o);const d=i.delete(o);return c&&De(i,"delete",o,void 0),d},clear(){const o=$(this),i=o.size!==0,l=o.clear();return i&&De(o,"clear",void 0,void 0),l}}),["keys","values","entries",Symbol.iterator].forEach(o=>{n[o]=Ai(o,e,t)}),n}function tn(e,t){const n=Ti(e,t);return(s,o,i)=>o==="__v_isReactive"?!e:o==="__v_isReadonly"?e:o==="__v_raw"?s:Reflect.get(j(n,o)&&o in s?n:s,o,i)}const Ci={get:tn(!1,!1)},Ei={get:tn(!1,!0)},Ri={get:tn(!0,!1)},ki={get:tn(!0,!0)},$s=new WeakMap,Bs=new WeakMap,js=new WeakMap,Hs=new WeakMap;function Ii(e){switch(e){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function Mi(e){return e.__v_skip||!Object.isExtensible(e)?0:Ii(oi(e))}function Un(e){return Be(e)?e:nn(e,!1,_i,Ci,$s)}function Oi(e){return nn(e,!1,Si,Ei,Bs)}function Wn(e){return nn(e,!0,wi,Ri,js)}function Uc(e){return nn(e,!0,zi,ki,Hs)}function nn(e,t,n,s,o){if(!X(e)||e.__v_raw&&!(t&&e.__v_isReactive))return e;const i=Mi(e);if(i===0)return e;const l=o.get(e);if(l)return l;const r=new Proxy(e,i===2?s:n);return o.set(e,r),r}function rt(e){return Be(e)?rt(e.__v_raw):!!(e&&e.__v_isReactive)}function Be(e){return!!(e&&e.__v_isReadonly)}function xe(e){return!!(e&&e.__v_isShallow)}function Vn(e){return e?!!e.__v_raw:!1}function $(e){const t=e&&e.__v_raw;return t?$(t):e}function Pi(e){return!j(e,"__v_skip")&&Object.isExtensible(e)&&ys(e,"__v_skip",!0),e}const _e=e=>X(e)?Un(e):e,mt=e=>X(e)?Wn(e):e;function oe(e){return e?e.__v_isRef===!0:!1}function je(e){return Ni(e,!1)}function Ni(e,t){return oe(e)?e:new Fi(e,t)}class Fi{constructor(t,n){this.dep=new Dn,this.__v_isRef=!0,this.__v_isShallow=!1,this._rawValue=n?t:$(t),this._value=n?t:_e(t),this.__v_isShallow=n}get value(){return this.dep.track(),this._value}set value(t){const n=this._rawValue,s=this.__v_isShallow||xe(t)||Be(t);t=s?t:$(t),qe(t,n)&&(this._rawValue=t,this._value=s?t:_e(t),this.dep.trigger())}}function Li(e){return oe(e)?e.value:e}const Di={get:(e,t,n)=>t==="__v_raw"?e:Li(Reflect.get(e,t,n)),set:(e,t,n,s)=>{const o=e[t];return oe(o)&&!oe(n)?(o.value=n,!0):Reflect.set(e,t,n,s)}};function Gs(e){return rt(e)?e:new Proxy(e,Di)}class $i{constructor(t,n,s){this.fn=t,this.setter=n,this._value=void 0,this.dep=new Dn(this),this.__v_isRef=!0,this.deps=void 0,this.depsTail=void 0,this.flags=16,this.globalVersion=kt-1,this.next=void 0,this.effect=this,this.__v_isReadonly=!n,this.isSSR=s}notify(){if(this.flags|=16,!(this.flags&8)&&W!==this)return Cs(this,!0),!0}get value(){const t=this.dep.track();return ks(this),t&&(t.version=this.dep.version),this._value}set value(t){this.setter&&this.setter(t)}}function Bi(e,t,n=!1){let s,o;return N(e)?s=e:(s=e.get,o=e.set),new $i(s,o,n)}const sn={},on=new WeakMap;let at;function ji(e,t=!1,n=at){if(n){let s=on.get(n);s||on.set(n,s=[]),s.push(e)}}function Hi(e,t,n=U){const{immediate:s,deep:o,once:i,scheduler:l,augmentJob:r,call:c}=n,d=w=>o?w:xe(w)||o===!1||o===0?Qe(w,1):Qe(w);let u,v,z,C,T=!1,E=!1;if(oe(e)?(v=()=>e.value,T=xe(e)):rt(e)?(v=()=>d(e),T=!0):F(e)?(E=!0,T=e.some(w=>rt(w)||xe(w)),v=()=>e.map(w=>{if(oe(w))return w.value;if(rt(w))return d(w);if(N(w))return c?c(w,2):w()})):N(e)?t?v=c?()=>c(e,2):e:v=()=>{if(z){Ae();try{z()}finally{Te()}}const w=at;at=u;try{return c?c(e,3,[C]):e(C)}finally{at=w}}:v=ze,t&&o){const w=v,K=o===!0?1/0:o;v=()=>Qe(w(),K)}const V=vi(),O=()=>{u.stop(),V&&V.active&&En(V.effects,u)};if(i&&t){const w=t;t=(...K)=>{w(...K),O()}}let L=E?new Array(e.length).fill(sn):sn;const R=w=>{if(!(!(u.flags&1)||!u.dirty&&!w))if(t){const K=u.run();if(o||T||(E?K.some((ee,Z)=>qe(ee,L[Z])):qe(K,L))){z&&z();const ee=at;at=u;try{const Z=[K,L===sn?void 0:E&&L[0]===sn?[]:L,C];L=K,c?c(t,3,Z):t(...Z)}finally{at=ee}}}else u.run()};return r&&r(R),u=new As(v),u.scheduler=l?()=>l(R,!1):R,C=w=>ji(w,!1,u),z=u.onStop=()=>{const w=on.get(u);if(w){if(c)c(w,4);else for(const K of w)K();on.delete(u)}},t?s?R(!0):L=u.run():l?l(R.bind(null,!0),!0):u.run(),O.pause=u.pause.bind(u),O.resume=u.resume.bind(u),O.stop=O,O}function Qe(e,t=1/0,n){if(t<=0||!X(e)||e.__v_skip||(n=n||new Map,(n.get(e)||0)>=t))return e;if(n.set(e,t),t--,oe(e))Qe(e.value,t,n);else if(F(e))for(let s=0;s<e.length;s++)Qe(e[s],t,n);else if(hs(e)||vt(e))e.forEach(s=>{Qe(s,t,n)});else if(bs(e)){for(const s in e)Qe(e[s],t,n);for(const s of Object.getOwnPropertySymbols(e))Object.prototype.propertyIsEnumerable.call(e,s)&&Qe(e[s],t,n)}return e}/**
* @vue/runtime-core v3.5.27
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/const Ot=[];let Kn=!1;function Wc(e,...t){if(Kn)return;Kn=!0,Ae();const n=Ot.length?Ot[Ot.length-1].component:null,s=n&&n.appContext.config.warnHandler,o=Gi();if(s)gt(s,n,11,[e+t.map(i=>{var l,r;return(r=(l=i.toString)==null?void 0:l.call(i))!=null?r:JSON.stringify(i)}).join(""),n&&n.proxy,o.map(({vnode:i})=>`at <${Do(n,i.type)}>`).join(`
`),o]);else{const i=[`[Vue warn]: ${e}`,...t];o.length&&i.push(`
`,...Ui(o)),console.warn(...i)}Te(),Kn=!1}function Gi(){let e=Ot[Ot.length-1];if(!e)return[];const t=[];for(;e;){const n=t[0];n&&n.vnode===e?n.recurseCount++:t.push({vnode:e,recurseCount:0});const s=e.component&&e.component.parent;e=s&&s.vnode}return t}function Ui(e){const t=[];return e.forEach((n,s)=>{t.push(...s===0?[]:[`
`],...Wi(n))}),t}function Wi({vnode:e,recurseCount:t}){const n=t>0?`... (${t} recursive calls)`:"",s=e.component?e.component.parent==null:!1,o=` at <${Do(e.component,e.type,s)}`,i=">"+n;return e.props?[o,...Vi(e.props),i]:[o+i]}function Vi(e){const t=[],n=Object.keys(e);return n.slice(0,3).forEach(s=>{t.push(...Us(s,e[s]))}),n.length>3&&t.push(" ..."),t}function Us(e,t,n){return Q(t)?(t=JSON.stringify(t),n?t:[`${e}=${t}`]):typeof t=="number"||typeof t=="boolean"||t==null?n?t:[`${e}=${t}`]:oe(t)?(t=Us(e,$(t.value),!0),n?t:[`${e}=Ref<`,t,">"]):N(t)?[`${e}=fn${t.name?`<${t.name}>`:""}`]:(t=$(t),n?t:[`${e}=`,t])}function gt(e,t,n,s){try{return s?e(...s):e()}catch(o){ln(o,t,n)}}function Ce(e,t,n,s){if(N(e)){const o=gt(e,t,n,s);return o&&ms(o)&&o.catch(i=>{ln(i,t,n)}),o}if(F(e)){const o=[];for(let i=0;i<e.length;i++)o.push(Ce(e[i],t,n,s));return o}}function ln(e,t,n,s=!0){const o=t?t.vnode:null,{errorHandler:i,throwUnhandledErrorInProduction:l}=t&&t.appContext.config||U;if(t){let r=t.parent;const c=t.proxy,d=`https://vuejs.org/error-reference/#runtime-${n}`;for(;r;){const u=r.ec;if(u){for(let v=0;v<u.length;v++)if(u[v](e,c,d)===!1)return}r=r.parent}if(i){Ae(),gt(i,null,10,[e,c,d]),Te();return}}Ki(e,n,o,s,l)}function Ki(e,t,n,s=!0,o=!1){if(o)throw e;console.error(e)}const ae=[];let Ee=-1;const bt=[];let Ze=null,xt=0;const Ws=Promise.resolve();let rn=null;function qi(e){const t=rn||Ws;return e?t.then(this?e.bind(this):e):t}function Yi(e){let t=Ee+1,n=ae.length;for(;t<n;){const s=t+n>>>1,o=ae[s],i=Pt(o);i<e||i===e&&o.flags&2?t=s+1:n=s}return t}function qn(e){if(!(e.flags&1)){const t=Pt(e),n=ae[ae.length-1];!n||!(e.flags&2)&&t>=Pt(n)?ae.push(e):ae.splice(Yi(t),0,e),e.flags|=1,Vs()}}function Vs(){rn||(rn=Ws.then(Ys))}function Xi(e){F(e)?bt.push(...e):Ze&&e.id===-1?Ze.splice(xt+1,0,e):e.flags&1||(bt.push(e),e.flags|=1),Vs()}function Ks(e,t,n=Ee+1){for(;n<ae.length;n++){const s=ae[n];if(s&&s.flags&2){if(e&&s.id!==e.uid)continue;ae.splice(n,1),n--,s.flags&4&&(s.flags&=-2),s(),s.flags&4||(s.flags&=-2)}}}function qs(e){if(bt.length){const t=[...new Set(bt)].sort((n,s)=>Pt(n)-Pt(s));if(bt.length=0,Ze){Ze.push(...t);return}for(Ze=t,xt=0;xt<Ze.length;xt++){const n=Ze[xt];n.flags&4&&(n.flags&=-2),n.flags&8||n(),n.flags&=-2}Ze=null,xt=0}}const Pt=e=>e.id==null?e.flags&2?-1:1/0:e.id;function Ys(e){try{for(Ee=0;Ee<ae.length;Ee++){const t=ae[Ee];t&&!(t.flags&8)&&(t.flags&4&&(t.flags&=-2),gt(t,t.i,t.i?15:14),t.flags&4||(t.flags&=-2))}}finally{for(;Ee<ae.length;Ee++){const t=ae[Ee];t&&(t.flags&=-2)}Ee=-1,ae.length=0,qs(),rn=null,(ae.length||bt.length)&&Ys()}}let Re=null,Xs=null;function an(e){const t=Re;return Re=e,Xs=e&&e.type.__scopeId||null,t}function Ji(e,t=Re,n){if(!t||e._n)return e;const s=(...o)=>{s._d&&Eo(-1);const i=an(t);let l;try{l=e(...o)}finally{an(i),s._d&&Eo(1)}return l};return s._n=!0,s._c=!0,s._d=!0,s}function ct(e,t,n,s){const o=e.dirs,i=t&&t.dirs;for(let l=0;l<o.length;l++){const r=o[l];i&&(r.oldValue=i[l].value);let c=r.dir[s];c&&(Ae(),Ce(c,n,8,[e.el,r,e,t]),Te())}}function Qi(e,t){if(fe){let n=fe.provides;const s=fe.parent&&fe.parent.provides;s===n&&(n=fe.provides=Object.create(s)),n[e]=t}}function cn(e,t,n=!1){const s=Ql();if(s||yt){let o=yt?yt._context.provides:s?s.parent==null||s.ce?s.vnode.appContext&&s.vnode.appContext.provides:s.parent.provides:void 0;if(o&&e in o)return o[e];if(arguments.length>1)return n&&N(t)?t.call(s&&s.proxy):t}}const Zi=Symbol.for("v-scx"),el=()=>cn(Zi);function Yn(e,t,n){return Js(e,t,n)}function Js(e,t,n=U){const{immediate:s,deep:o,flush:i,once:l}=n,r=se({},n),c=t&&s||!t&&i!=="post";let d;if(Gt){if(i==="sync"){const C=el();d=C.__watcherHandles||(C.__watcherHandles=[])}else if(!c){const C=()=>{};return C.stop=ze,C.resume=ze,C.pause=ze,C}}const u=fe;r.call=(C,T,E)=>Ce(C,u,T,E);let v=!1;i==="post"?r.scheduler=C=>{ve(C,u&&u.suspense)}:i!=="sync"&&(v=!0,r.scheduler=(C,T)=>{T?C():qn(C)}),r.augmentJob=C=>{t&&(C.flags|=4),v&&(C.flags|=2,u&&(C.id=u.uid,C.i=u))};const z=Hi(e,t,r);return Gt&&(d?d.push(z):c&&z()),z}function tl(e,t,n){const s=this.proxy,o=Q(e)?e.includes(".")?Qs(s,e):()=>s[e]:e.bind(s,s);let i;N(t)?i=t:(i=t.handler,n=t);const l=Ht(this),r=Js(o,i.bind(s),n);return l(),r}function Qs(e,t){const n=t.split(".");return()=>{let s=e;for(let o=0;o<n.length&&s;o++)s=s[n[o]];return s}}const nl=Symbol("_vte"),sl=e=>e.__isTeleport,ol=Symbol("_leaveCb");function Xn(e,t){e.shapeFlag&6&&e.component?(e.transition=t,Xn(e.component.subTree,t)):e.shapeFlag&128?(e.ssContent.transition=t.clone(e.ssContent),e.ssFallback.transition=t.clone(e.ssFallback)):e.transition=t}function Jn(e,t){return N(e)?se({name:e.name},t,{setup:e}):e}function Zs(e){e.ids=[e.ids[0]+e.ids[2]+++"-",0,0]}const fn=new WeakMap;function Nt(e,t,n,s,o=!1){if(F(e)){e.forEach((T,E)=>Nt(T,t&&(F(t)?t[E]:t),n,s,o));return}if(Ft(s)&&!o){s.shapeFlag&512&&s.type.__asyncResolved&&s.component.subTree.component&&Nt(e,t,n,s.component.subTree);return}const i=s.shapeFlag&4?cs(s.component):s.el,l=o?null:i,{i:r,r:c}=e,d=t&&t.r,u=r.refs===U?r.refs={}:r.refs,v=r.setupState,z=$(v),C=v===U?vs:T=>j(z,T);if(d!=null&&d!==c){if(eo(t),Q(d))u[d]=null,C(d)&&(v[d]=null);else if(oe(d)){d.value=null;const T=t;T.k&&(u[T.k]=null)}}if(N(c))gt(c,r,12,[l,u]);else{const T=Q(c),E=oe(c);if(T||E){const V=()=>{if(e.f){const O=T?C(c)?v[c]:u[c]:c.value;if(o)F(O)&&En(O,i);else if(F(O))O.includes(i)||O.push(i);else if(T)u[c]=[i],C(c)&&(v[c]=u[c]);else{const L=[i];c.value=L,e.k&&(u[e.k]=L)}}else T?(u[c]=l,C(c)&&(v[c]=l)):E&&(c.value=l,e.k&&(u[e.k]=l))};if(l){const O=()=>{V(),fn.delete(e)};O.id=-1,fn.set(e,O),ve(O,n)}else eo(e),V()}}}function eo(e){const t=fn.get(e);t&&(t.flags|=8,fn.delete(e))}Xt().requestIdleCallback,Xt().cancelIdleCallback;const Ft=e=>!!e.type.__asyncLoader,to=e=>e.type.__isKeepAlive;function il(e,t){no(e,"a",t)}function ll(e,t){no(e,"da",t)}function no(e,t,n=fe){const s=e.__wdc||(e.__wdc=()=>{let o=n;for(;o;){if(o.isDeactivated)return;o=o.parent}return e()});if(un(t,s,n),n){let o=n.parent;for(;o&&o.parent;)to(o.parent.vnode)&&rl(s,t,n,o),o=o.parent}}function rl(e,t,n,s){const o=un(t,e,s,!0);dn(()=>{En(s[t],o)},n)}function un(e,t,n=fe,s=!1){if(n){const o=n[e]||(n[e]=[]),i=t.__weh||(t.__weh=(...l)=>{Ae();const r=Ht(n),c=Ce(t,n,e,l);return r(),Te(),c});return s?o.unshift(i):o.push(i),i}}const He=e=>(t,n=fe)=>{(!Gt||e==="sp")&&un(e,(...s)=>t(...s),n)},al=He("bm"),Qn=He("m"),cl=He("bu"),fl=He("u"),ul=He("bum"),dn=He("um"),dl=He("sp"),pl=He("rtg"),vl=He("rtc");function hl(e,t=fe){un("ec",e,t)}const ml=Symbol.for("v-ndc");function gl(e,t,n,s){let o;const i=n,l=F(e);if(l||Q(e)){const r=l&&rt(e);let c=!1,d=!1;r&&(c=!xe(e),d=Be(e),e=Qt(e)),o=new Array(e.length);for(let u=0,v=e.length;u<v;u++)o[u]=t(c?d?mt(_e(e[u])):_e(e[u]):e[u],u,void 0,i)}else if(typeof e=="number"){o=new Array(e);for(let r=0;r<e;r++)o[r]=t(r+1,r,void 0,i)}else if(X(e))if(e[Symbol.iterator])o=Array.from(e,(r,c)=>t(r,c,void 0,i));else{const r=Object.keys(e);o=new Array(r.length);for(let c=0,d=r.length;c<d;c++){const u=r[c];o[c]=t(e[u],u,c,i)}}else o=[];return o}const Zn=e=>e?No(e)?cs(e):Zn(e.parent):null,Lt=se(Object.create(null),{$:e=>e,$el:e=>e.vnode.el,$data:e=>e.data,$props:e=>e.props,$attrs:e=>e.attrs,$slots:e=>e.slots,$refs:e=>e.refs,$parent:e=>Zn(e.parent),$root:e=>Zn(e.root),$host:e=>e.ce,$emit:e=>e.emit,$options:e=>lo(e),$forceUpdate:e=>e.f||(e.f=()=>{qn(e.update)}),$nextTick:e=>e.n||(e.n=qi.bind(e.proxy)),$watch:e=>tl.bind(e)}),es=(e,t)=>e!==U&&!e.__isScriptSetup&&j(e,t),bl={get({_:e},t){if(t==="__v_skip")return!0;const{ctx:n,setupState:s,data:o,props:i,accessCache:l,type:r,appContext:c}=e;if(t[0]!=="$"){const z=l[t];if(z!==void 0)switch(z){case 1:return s[t];case 2:return o[t];case 4:return n[t];case 3:return i[t]}else{if(es(s,t))return l[t]=1,s[t];if(o!==U&&j(o,t))return l[t]=2,o[t];if(j(i,t))return l[t]=3,i[t];if(n!==U&&j(n,t))return l[t]=4,n[t];ts&&(l[t]=0)}}const d=Lt[t];let u,v;if(d)return t==="$attrs"&&re(e.attrs,"get",""),d(e);if((u=r.__cssModules)&&(u=u[t]))return u;if(n!==U&&j(n,t))return l[t]=4,n[t];if(v=c.config.globalProperties,j(v,t))return v[t]},set({_:e},t,n){const{data:s,setupState:o,ctx:i}=e;return es(o,t)?(o[t]=n,!0):s!==U&&j(s,t)?(s[t]=n,!0):j(e.props,t)||t[0]==="$"&&t.slice(1)in e?!1:(i[t]=n,!0)},has({_:{data:e,setupState:t,accessCache:n,ctx:s,appContext:o,props:i,type:l}},r){let c;return!!(n[r]||e!==U&&r[0]!=="$"&&j(e,r)||es(t,r)||j(i,r)||j(s,r)||j(Lt,r)||j(o.config.globalProperties,r)||(c=l.__cssModules)&&c[r])},defineProperty(e,t,n){return n.get!=null?e._.accessCache[t]=0:j(n,"value")&&this.set(e,t,n.value,null),Reflect.defineProperty(e,t,n)}};function so(e){return F(e)?e.reduce((t,n)=>(t[n]=null,t),{}):e}let ts=!0;function xl(e){const t=lo(e),n=e.proxy,s=e.ctx;ts=!1,t.beforeCreate&&oo(t.beforeCreate,e,"bc");const{data:o,computed:i,methods:l,watch:r,provide:c,inject:d,created:u,beforeMount:v,mounted:z,beforeUpdate:C,updated:T,activated:E,deactivated:V,beforeDestroy:O,beforeUnmount:L,destroyed:R,unmounted:w,render:K,renderTracked:ee,renderTriggered:Z,errorCaptured:me,serverPrefetch:ie,expose:te,inheritAttrs:ot,components:Ue,directives:We,filters:At}=t;if(d&&yl(d,s,null),l)for(const q in l){const G=l[q];N(G)&&(s[q]=G.bind(n))}if(o){const q=o.call(n,n);X(q)&&(e.data=Un(q))}if(ts=!0,i)for(const q in i){const G=i[q],Oe=N(G)?G.bind(n,n):N(G.get)?G.get.bind(n,n):ze,ut=!N(G)&&N(G.set)?G.set.bind(n):ze,Pe=B({get:Oe,set:ut});Object.defineProperty(s,q,{enumerable:!0,configurable:!0,get:()=>Pe.value,set:ge=>Pe.value=ge})}if(r)for(const q in r)io(r[q],s,n,q);if(c){const q=N(c)?c.call(n):c;Reflect.ownKeys(q).forEach(G=>{Qi(G,q[G])})}u&&oo(u,e,"c");function le(q,G){F(G)?G.forEach(Oe=>q(Oe.bind(n))):G&&q(G.bind(n))}if(le(al,v),le(Qn,z),le(cl,C),le(fl,T),le(il,E),le(ll,V),le(hl,me),le(vl,ee),le(pl,Z),le(ul,L),le(dn,w),le(dl,ie),F(te))if(te.length){const q=e.exposed||(e.exposed={});te.forEach(G=>{Object.defineProperty(q,G,{get:()=>n[G],set:Oe=>n[G]=Oe,enumerable:!0})})}else e.exposed||(e.exposed={});K&&e.render===ze&&(e.render=K),ot!=null&&(e.inheritAttrs=ot),Ue&&(e.components=Ue),We&&(e.directives=We),ie&&Zs(e)}function yl(e,t,n=ze){F(e)&&(e=ns(e));for(const s in e){const o=e[s];let i;X(o)?"default"in o?i=cn(o.from||s,o.default,!0):i=cn(o.from||s):i=cn(o),oe(i)?Object.defineProperty(t,s,{enumerable:!0,configurable:!0,get:()=>i.value,set:l=>i.value=l}):t[s]=i}}function oo(e,t,n){Ce(F(e)?e.map(s=>s.bind(t.proxy)):e.bind(t.proxy),t,n)}function io(e,t,n,s){let o=s.includes(".")?Qs(n,s):()=>n[s];if(Q(e)){const i=t[e];N(i)&&Yn(o,i)}else if(N(e))Yn(o,e.bind(n));else if(X(e))if(F(e))e.forEach(i=>io(i,t,n,s));else{const i=N(e.handler)?e.handler.bind(n):t[e.handler];N(i)&&Yn(o,i,e)}}function lo(e){const t=e.type,{mixins:n,extends:s}=t,{mixins:o,optionsCache:i,config:{optionMergeStrategies:l}}=e.appContext,r=i.get(t);let c;return r?c=r:!o.length&&!n&&!s?c=t:(c={},o.length&&o.forEach(d=>pn(c,d,l,!0)),pn(c,t,l)),X(t)&&i.set(t,c),c}function pn(e,t,n,s=!1){const{mixins:o,extends:i}=t;i&&pn(e,i,n,!0),o&&o.forEach(l=>pn(e,l,n,!0));for(const l in t)if(!(s&&l==="expose")){const r=_l[l]||n&&n[l];e[l]=r?r(e[l],t[l]):t[l]}return e}const _l={data:ro,props:ao,emits:ao,methods:Dt,computed:Dt,beforeCreate:ce,created:ce,beforeMount:ce,mounted:ce,beforeUpdate:ce,updated:ce,beforeDestroy:ce,beforeUnmount:ce,destroyed:ce,unmounted:ce,activated:ce,deactivated:ce,errorCaptured:ce,serverPrefetch:ce,components:Dt,directives:Dt,watch:Sl,provide:ro,inject:wl};function ro(e,t){return t?e?function(){return se(N(e)?e.call(this,this):e,N(t)?t.call(this,this):t)}:t:e}function wl(e,t){return Dt(ns(e),ns(t))}function ns(e){if(F(e)){const t={};for(let n=0;n<e.length;n++)t[e[n]]=e[n];return t}return e}function ce(e,t){return e?[...new Set([].concat(e,t))]:t}function Dt(e,t){return e?se(Object.create(null),e,t):t}function ao(e,t){return e?F(e)&&F(t)?[...new Set([...e,...t])]:se(Object.create(null),so(e),so(t??{})):t}function Sl(e,t){if(!e)return t;if(!t)return e;const n=se(Object.create(null),e);for(const s in t)n[s]=ce(e[s],t[s]);return n}function co(){return{app:null,config:{isNativeTag:vs,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let zl=0;function Al(e,t){return function(s,o=null){N(s)||(s=se({},s)),o!=null&&!X(o)&&(o=null);const i=co(),l=new WeakSet,r=[];let c=!1;const d=i.app={_uid:zl++,_component:s,_props:o,_container:null,_context:i,_instance:null,version:rr,get config(){return i.config},set config(u){},use(u,...v){return l.has(u)||(u&&N(u.install)?(l.add(u),u.install(d,...v)):N(u)&&(l.add(u),u(d,...v))),d},mixin(u){return i.mixins.includes(u)||i.mixins.push(u),d},component(u,v){return v?(i.components[u]=v,d):i.components[u]},directive(u,v){return v?(i.directives[u]=v,d):i.directives[u]},mount(u,v,z){if(!c){const C=d._ceVNode||Se(s,o);return C.appContext=i,z===!0?z="svg":z===!1&&(z=void 0),e(C,u,z),c=!0,d._container=u,u.__vue_app__=d,cs(C.component)}},onUnmount(u){r.push(u)},unmount(){c&&(Ce(r,d._instance,16),e(null,d._container),delete d._container.__vue_app__)},provide(u,v){return i.provides[u]=v,d},runWithContext(u){const v=yt;yt=d;try{return u()}finally{yt=v}}};return d}}let yt=null;const Tl=(e,t)=>t==="modelValue"||t==="model-value"?e.modelModifiers:e[`${t}Modifiers`]||e[`${Ke(t)}Modifiers`]||e[`${it(t)}Modifiers`];function Cl(e,t,...n){if(e.isUnmounted)return;const s=e.vnode.props||U;let o=n;const i=t.startsWith("update:"),l=i&&Tl(s,t.slice(7));l&&(l.trim&&(o=n.map(u=>Q(u)?u.trim():u)),l.number&&(o=n.map(ri)));let r,c=s[r=kn(t)]||s[r=kn(Ke(t))];!c&&i&&(c=s[r=kn(it(t))]),c&&Ce(c,e,6,o);const d=s[r+"Once"];if(d){if(!e.emitted)e.emitted={};else if(e.emitted[r])return;e.emitted[r]=!0,Ce(d,e,6,o)}}const El=new WeakMap;function fo(e,t,n=!1){const s=n?El:t.emitsCache,o=s.get(e);if(o!==void 0)return o;const i=e.emits;let l={},r=!1;if(!N(e)){const c=d=>{const u=fo(d,t,!0);u&&(r=!0,se(l,u))};!n&&t.mixins.length&&t.mixins.forEach(c),e.extends&&c(e.extends),e.mixins&&e.mixins.forEach(c)}return!i&&!r?(X(e)&&s.set(e,null),null):(F(i)?i.forEach(c=>l[c]=null):se(l,i),X(e)&&s.set(e,l),l)}function vn(e,t){return!e||!Kt(t)?!1:(t=t.slice(2).replace(/Once$/,""),j(e,t[0].toLowerCase()+t.slice(1))||j(e,it(t))||j(e,t))}function Vc(){}function uo(e){const{type:t,vnode:n,proxy:s,withProxy:o,propsOptions:[i],slots:l,attrs:r,emit:c,render:d,renderCache:u,props:v,data:z,setupState:C,ctx:T,inheritAttrs:E}=e,V=an(e);let O,L;try{if(n.shapeFlag&4){const w=o||s,K=w;O=ke(d.call(K,w,u,v,C,z,T)),L=r}else{const w=t;O=ke(w.length>1?w(v,{attrs:r,slots:l,emit:c}):w(v,null)),L=t.props?r:Rl(r)}}catch(w){$t.length=0,ln(w,e,1),O=Se(et)}let R=O;if(L&&E!==!1){const w=Object.keys(L),{shapeFlag:K}=R;w.length&&K&7&&(i&&w.some(Cn)&&(L=kl(L,i)),R=wt(R,L,!1,!0))}return n.dirs&&(R=wt(R,null,!1,!0),R.dirs=R.dirs?R.dirs.concat(n.dirs):n.dirs),n.transition&&Xn(R,n.transition),O=R,an(V),O}const Rl=e=>{let t;for(const n in e)(n==="class"||n==="style"||Kt(n))&&((t||(t={}))[n]=e[n]);return t},kl=(e,t)=>{const n={};for(const s in e)(!Cn(s)||!(s.slice(9)in t))&&(n[s]=e[s]);return n};function Il(e,t,n){const{props:s,children:o,component:i}=e,{props:l,children:r,patchFlag:c}=t,d=i.emitsOptions;if(t.dirs||t.transition)return!0;if(n&&c>=0){if(c&1024)return!0;if(c&16)return s?po(s,l,d):!!l;if(c&8){const u=t.dynamicProps;for(let v=0;v<u.length;v++){const z=u[v];if(l[z]!==s[z]&&!vn(d,z))return!0}}}else return(o||r)&&(!r||!r.$stable)?!0:s===l?!1:s?l?po(s,l,d):!0:!!l;return!1}function po(e,t,n){const s=Object.keys(t);if(s.length!==Object.keys(e).length)return!0;for(let o=0;o<s.length;o++){const i=s[o];if(t[i]!==e[i]&&!vn(n,i))return!0}return!1}function Ml({vnode:e,parent:t},n){for(;t;){const s=t.subTree;if(s.suspense&&s.suspense.activeBranch===e&&(s.el=e.el),s===e)(e=t.vnode).el=n,t=t.parent;else break}}const vo={},ho=()=>Object.create(vo),mo=e=>Object.getPrototypeOf(e)===vo;function Ol(e,t,n,s=!1){const o={},i=ho();e.propsDefaults=Object.create(null),go(e,t,o,i);for(const l in e.propsOptions[0])l in o||(o[l]=void 0);n?e.props=s?o:Oi(o):e.type.props?e.props=o:e.props=i,e.attrs=i}function Pl(e,t,n,s){const{props:o,attrs:i,vnode:{patchFlag:l}}=e,r=$(o),[c]=e.propsOptions;let d=!1;if((s||l>0)&&!(l&16)){if(l&8){const u=e.vnode.dynamicProps;for(let v=0;v<u.length;v++){let z=u[v];if(vn(e.emitsOptions,z))continue;const C=t[z];if(c)if(j(i,z))C!==i[z]&&(i[z]=C,d=!0);else{const T=Ke(z);o[T]=ss(c,r,T,C,e,!1)}else C!==i[z]&&(i[z]=C,d=!0)}}}else{go(e,t,o,i)&&(d=!0);let u;for(const v in r)(!t||!j(t,v)&&((u=it(v))===v||!j(t,u)))&&(c?n&&(n[v]!==void 0||n[u]!==void 0)&&(o[v]=ss(c,r,v,void 0,e,!0)):delete o[v]);if(i!==r)for(const v in i)(!t||!j(t,v))&&(delete i[v],d=!0)}d&&De(e.attrs,"set","")}function go(e,t,n,s){const[o,i]=e.propsOptions;let l=!1,r;if(t)for(let c in t){if(Ct(c))continue;const d=t[c];let u;o&&j(o,u=Ke(c))?!i||!i.includes(u)?n[u]=d:(r||(r={}))[u]=d:vn(e.emitsOptions,c)||(!(c in s)||d!==s[c])&&(s[c]=d,l=!0)}if(i){const c=$(n),d=r||U;for(let u=0;u<i.length;u++){const v=i[u];n[v]=ss(o,c,v,d[v],e,!j(d,v))}}return l}function ss(e,t,n,s,o,i){const l=e[n];if(l!=null){const r=j(l,"default");if(r&&s===void 0){const c=l.default;if(l.type!==Function&&!l.skipFactory&&N(c)){const{propsDefaults:d}=o;if(n in d)s=d[n];else{const u=Ht(o);s=d[n]=c.call(null,t),u()}}else s=c;o.ce&&o.ce._setProp(n,s)}l[0]&&(i&&!r?s=!1:l[1]&&(s===""||s===it(n))&&(s=!0))}return s}const Nl=new WeakMap;function bo(e,t,n=!1){const s=n?Nl:t.propsCache,o=s.get(e);if(o)return o;const i=e.props,l={},r=[];let c=!1;if(!N(e)){const u=v=>{c=!0;const[z,C]=bo(v,t,!0);se(l,z),C&&r.push(...C)};!n&&t.mixins.length&&t.mixins.forEach(u),e.extends&&u(e.extends),e.mixins&&e.mixins.forEach(u)}if(!i&&!c)return X(e)&&s.set(e,pt),pt;if(F(i))for(let u=0;u<i.length;u++){const v=Ke(i[u]);xo(v)&&(l[v]=U)}else if(i)for(const u in i){const v=Ke(u);if(xo(v)){const z=i[u],C=l[v]=F(z)||N(z)?{type:z}:se({},z),T=C.type;let E=!1,V=!0;if(F(T))for(let O=0;O<T.length;++O){const L=T[O],R=N(L)&&L.name;if(R==="Boolean"){E=!0;break}else R==="String"&&(V=!1)}else E=N(T)&&T.name==="Boolean";C[0]=E,C[1]=V,(E||j(C,"default"))&&r.push(v)}}const d=[l,r];return X(e)&&s.set(e,d),d}function xo(e){return e[0]!=="$"&&!Ct(e)}const os=e=>e==="_"||e==="_ctx"||e==="$stable",is=e=>F(e)?e.map(ke):[ke(e)],Fl=(e,t,n)=>{if(t._n)return t;const s=Ji((...o)=>is(t(...o)),n);return s._c=!1,s},yo=(e,t,n)=>{const s=e._ctx;for(const o in e){if(os(o))continue;const i=e[o];if(N(i))t[o]=Fl(o,i,s);else if(i!=null){const l=is(i);t[o]=()=>l}}},_o=(e,t)=>{const n=is(t);e.slots.default=()=>n},wo=(e,t,n)=>{for(const s in t)(n||!os(s))&&(e[s]=t[s])},Ll=(e,t,n)=>{const s=e.slots=ho();if(e.vnode.shapeFlag&32){const o=t._;o?(wo(s,t,n),n&&ys(s,"_",o,!0)):yo(t,s)}else t&&_o(e,t)},Dl=(e,t,n)=>{const{vnode:s,slots:o}=e;let i=!0,l=U;if(s.shapeFlag&32){const r=t._;r?n&&r===1?i=!1:wo(o,t,n):(i=!t.$stable,yo(t,o)),l=t}else t&&(_o(e,t),l={default:1});if(i)for(const r in o)!os(r)&&l[r]==null&&delete o[r]},ve=Gl;function $l(e){return Bl(e)}function Bl(e,t){const n=Xt();n.__VUE__=!0;const{insert:s,remove:o,patchProp:i,createElement:l,createText:r,createComment:c,setText:d,setElementText:u,parentNode:v,nextSibling:z,setScopeId:C=ze,insertStaticContent:T}=e,E=(a,f,p,b=null,h=null,m=null,S=void 0,_=null,y=!!f.dynamicChildren)=>{if(a===f)return;a&&!jt(a,f)&&(b=Wt(a),ge(a,h,m,!0),a=null),f.patchFlag===-2&&(y=!1,f.dynamicChildren=null);const{type:g,ref:M,shapeFlag:A}=f;switch(g){case hn:V(a,f,p,b);break;case et:O(a,f,p,b);break;case mn:a==null&&L(f,p,b,S);break;case we:Ue(a,f,p,b,h,m,S,_,y);break;default:A&1?K(a,f,p,b,h,m,S,_,y):A&6?We(a,f,p,b,h,m,S,_,y):(A&64||A&128)&&g.process(a,f,p,b,h,m,S,_,y,dt)}M!=null&&h?Nt(M,a&&a.ref,m,f||a,!f):M==null&&a&&a.ref!=null&&Nt(a.ref,null,m,a,!0)},V=(a,f,p,b)=>{if(a==null)s(f.el=r(f.children),p,b);else{const h=f.el=a.el;f.children!==a.children&&d(h,f.children)}},O=(a,f,p,b)=>{a==null?s(f.el=c(f.children||""),p,b):f.el=a.el},L=(a,f,p,b)=>{[a.el,a.anchor]=T(a.children,f,p,b,a.el,a.anchor)},R=({el:a,anchor:f},p,b)=>{let h;for(;a&&a!==f;)h=z(a),s(a,p,b),a=h;s(f,p,b)},w=({el:a,anchor:f})=>{let p;for(;a&&a!==f;)p=z(a),o(a),a=p;o(f)},K=(a,f,p,b,h,m,S,_,y)=>{if(f.type==="svg"?S="svg":f.type==="math"&&(S="mathml"),a==null)ee(f,p,b,h,m,S,_,y);else{const g=a.el&&a.el._isVueCE?a.el:null;try{g&&g._beginPatch(),ie(a,f,h,m,S,_,y)}finally{g&&g._endPatch()}}},ee=(a,f,p,b,h,m,S,_)=>{let y,g;const{props:M,shapeFlag:A,transition:k,dirs:P}=a;if(y=a.el=l(a.type,m,M&&M.is,M),A&8?u(y,a.children):A&16&&me(a.children,y,null,b,h,ls(a,m),S,_),P&&ct(a,null,b,"created"),Z(y,a,a.scopeId,S,b),M){for(const Y in M)Y!=="value"&&!Ct(Y)&&i(y,Y,null,M[Y],m,b);"value"in M&&i(y,"value",null,M.value,m),(g=M.onVnodeBeforeMount)&&Ie(g,b,a)}P&&ct(a,null,b,"beforeMount");const D=jl(h,k);D&&k.beforeEnter(y),s(y,f,p),((g=M&&M.onVnodeMounted)||D||P)&&ve(()=>{g&&Ie(g,b,a),D&&k.enter(y),P&&ct(a,null,b,"mounted")},h)},Z=(a,f,p,b,h)=>{if(p&&C(a,p),b)for(let m=0;m<b.length;m++)C(a,b[m]);if(h){let m=h.subTree;if(f===m||Co(m.type)&&(m.ssContent===f||m.ssFallback===f)){const S=h.vnode;Z(a,S,S.scopeId,S.slotScopeIds,h.parent)}}},me=(a,f,p,b,h,m,S,_,y=0)=>{for(let g=y;g<a.length;g++){const M=a[g]=_?nt(a[g]):ke(a[g]);E(null,M,f,p,b,h,m,S,_)}},ie=(a,f,p,b,h,m,S)=>{const _=f.el=a.el;let{patchFlag:y,dynamicChildren:g,dirs:M}=f;y|=a.patchFlag&16;const A=a.props||U,k=f.props||U;let P;if(p&&ft(p,!1),(P=k.onVnodeBeforeUpdate)&&Ie(P,p,f,a),M&&ct(f,a,p,"beforeUpdate"),p&&ft(p,!0),(A.innerHTML&&k.innerHTML==null||A.textContent&&k.textContent==null)&&u(_,""),g?te(a.dynamicChildren,g,_,p,b,ls(f,h),m):S||G(a,f,_,null,p,b,ls(f,h),m,!1),y>0){if(y&16)ot(_,A,k,p,h);else if(y&2&&A.class!==k.class&&i(_,"class",null,k.class,h),y&4&&i(_,"style",A.style,k.style,h),y&8){const D=f.dynamicProps;for(let Y=0;Y<D.length;Y++){const H=D[Y],de=A[H],pe=k[H];(pe!==de||H==="value")&&i(_,H,de,pe,h,p)}}y&1&&a.children!==f.children&&u(_,f.children)}else!S&&g==null&&ot(_,A,k,p,h);((P=k.onVnodeUpdated)||M)&&ve(()=>{P&&Ie(P,p,f,a),M&&ct(f,a,p,"updated")},b)},te=(a,f,p,b,h,m,S)=>{for(let _=0;_<f.length;_++){const y=a[_],g=f[_],M=y.el&&(y.type===we||!jt(y,g)||y.shapeFlag&198)?v(y.el):p;E(y,g,M,null,b,h,m,S,!0)}},ot=(a,f,p,b,h)=>{if(f!==p){if(f!==U)for(const m in f)!Ct(m)&&!(m in p)&&i(a,m,f[m],null,h,b);for(const m in p){if(Ct(m))continue;const S=p[m],_=f[m];S!==_&&m!=="value"&&i(a,m,_,S,h,b)}"value"in p&&i(a,"value",f.value,p.value,h)}},Ue=(a,f,p,b,h,m,S,_,y)=>{const g=f.el=a?a.el:r(""),M=f.anchor=a?a.anchor:r("");let{patchFlag:A,dynamicChildren:k,slotScopeIds:P}=f;P&&(_=_?_.concat(P):P),a==null?(s(g,p,b),s(M,p,b),me(f.children||[],p,M,h,m,S,_,y)):A>0&&A&64&&k&&a.dynamicChildren&&a.dynamicChildren.length===k.length?(te(a.dynamicChildren,k,p,h,m,S,_),(f.key!=null||h&&f===h.subTree)&&So(a,f,!0)):G(a,f,p,M,h,m,S,_,y)},We=(a,f,p,b,h,m,S,_,y)=>{f.slotScopeIds=_,a==null?f.shapeFlag&512?h.ctx.activate(f,p,b,S,y):At(f,p,b,h,m,S,y):Ut(a,f,y)},At=(a,f,p,b,h,m,S)=>{const _=a.component=Jl(a,b,h);if(to(a)&&(_.ctx.renderer=dt),Zl(_,!1,S),_.asyncDep){if(h&&h.registerDep(_,le,S),!a.el){const y=_.subTree=Se(et);O(null,y,f,p),a.placeholder=y.el}}else le(_,a,f,p,h,m,S)},Ut=(a,f,p)=>{const b=f.component=a.component;if(Il(a,f,p))if(b.asyncDep&&!b.asyncResolved){q(b,f,p);return}else b.next=f,b.update();else f.el=a.el,b.vnode=f},le=(a,f,p,b,h,m,S)=>{const _=()=>{if(a.isMounted){let{next:A,bu:k,u:P,parent:D,vnode:Y}=a;{const Fe=zo(a);if(Fe){A&&(A.el=Y.el,q(a,A,S)),Fe.asyncDep.then(()=>{a.isUnmounted||_()});return}}let H=A,de;ft(a,!1),A?(A.el=Y.el,q(a,A,S)):A=Y,k&&In(k),(de=A.props&&A.props.onVnodeBeforeUpdate)&&Ie(de,D,A,Y),ft(a,!0);const pe=uo(a),Ne=a.subTree;a.subTree=pe,E(Ne,pe,v(Ne.el),Wt(Ne),a,h,m),A.el=pe.el,H===null&&Ml(a,pe.el),P&&ve(P,h),(de=A.props&&A.props.onVnodeUpdated)&&ve(()=>Ie(de,D,A,Y),h)}else{let A;const{el:k,props:P}=f,{bm:D,m:Y,parent:H,root:de,type:pe}=a,Ne=Ft(f);ft(a,!1),D&&In(D),!Ne&&(A=P&&P.onVnodeBeforeMount)&&Ie(A,H,f),ft(a,!0);{de.ce&&de.ce._def.shadowRoot!==!1&&de.ce._injectChildStyle(pe);const Fe=a.subTree=uo(a);E(null,Fe,p,b,a,h,m),f.el=Fe.el}if(Y&&ve(Y,h),!Ne&&(A=P&&P.onVnodeMounted)){const Fe=f;ve(()=>Ie(A,H,Fe),h)}(f.shapeFlag&256||H&&Ft(H.vnode)&&H.vnode.shapeFlag&256)&&a.a&&ve(a.a,h),a.isMounted=!0,f=p=b=null}};a.scope.on();const y=a.effect=new As(_);a.scope.off();const g=a.update=y.run.bind(y),M=a.job=y.runIfDirty.bind(y);M.i=a,M.id=a.uid,y.scheduler=()=>qn(M),ft(a,!0),g()},q=(a,f,p)=>{f.component=a;const b=a.vnode.props;a.vnode=f,a.next=null,Pl(a,f.props,b,p),Dl(a,f.children,p),Ae(),Ks(a),Te()},G=(a,f,p,b,h,m,S,_,y=!1)=>{const g=a&&a.children,M=a?a.shapeFlag:0,A=f.children,{patchFlag:k,shapeFlag:P}=f;if(k>0){if(k&128){ut(g,A,p,b,h,m,S,_,y);return}else if(k&256){Oe(g,A,p,b,h,m,S,_,y);return}}P&8?(M&16&&Tt(g,h,m),A!==g&&u(p,A)):M&16?P&16?ut(g,A,p,b,h,m,S,_,y):Tt(g,h,m,!0):(M&8&&u(p,""),P&16&&me(A,p,b,h,m,S,_,y))},Oe=(a,f,p,b,h,m,S,_,y)=>{a=a||pt,f=f||pt;const g=a.length,M=f.length,A=Math.min(g,M);let k;for(k=0;k<A;k++){const P=f[k]=y?nt(f[k]):ke(f[k]);E(a[k],P,p,null,h,m,S,_,y)}g>M?Tt(a,h,m,!0,!1,A):me(f,p,b,h,m,S,_,y,A)},ut=(a,f,p,b,h,m,S,_,y)=>{let g=0;const M=f.length;let A=a.length-1,k=M-1;for(;g<=A&&g<=k;){const P=a[g],D=f[g]=y?nt(f[g]):ke(f[g]);if(jt(P,D))E(P,D,p,null,h,m,S,_,y);else break;g++}for(;g<=A&&g<=k;){const P=a[A],D=f[k]=y?nt(f[k]):ke(f[k]);if(jt(P,D))E(P,D,p,null,h,m,S,_,y);else break;A--,k--}if(g>A){if(g<=k){const P=k+1,D=P<M?f[P].el:b;for(;g<=k;)E(null,f[g]=y?nt(f[g]):ke(f[g]),p,D,h,m,S,_,y),g++}}else if(g>k)for(;g<=A;)ge(a[g],h,m,!0),g++;else{const P=g,D=g,Y=new Map;for(g=D;g<=k;g++){const be=f[g]=y?nt(f[g]):ke(f[g]);be.key!=null&&Y.set(be.key,g)}let H,de=0;const pe=k-D+1;let Ne=!1,Fe=0;const Vt=new Array(pe);for(g=0;g<pe;g++)Vt[g]=0;for(g=P;g<=A;g++){const be=a[g];if(de>=pe){ge(be,h,m,!0);continue}let Le;if(be.key!=null)Le=Y.get(be.key);else for(H=D;H<=k;H++)if(Vt[H-D]===0&&jt(be,f[H])){Le=H;break}Le===void 0?ge(be,h,m,!0):(Vt[Le-D]=g+1,Le>=Fe?Fe=Le:Ne=!0,E(be,f[Le],p,null,h,m,S,_,y),de++)}const ei=Ne?Hl(Vt):pt;for(H=ei.length-1,g=pe-1;g>=0;g--){const be=D+g,Le=f[be],ti=f[be+1],ni=be+1<M?ti.el||To(ti):b;Vt[g]===0?E(null,Le,p,ni,h,m,S,_,y):Ne&&(H<0||g!==ei[H]?Pe(Le,p,ni,2):H--)}}},Pe=(a,f,p,b,h=null)=>{const{el:m,type:S,transition:_,children:y,shapeFlag:g}=a;if(g&6){Pe(a.component.subTree,f,p,b);return}if(g&128){a.suspense.move(f,p,b);return}if(g&64){S.move(a,f,p,dt);return}if(S===we){s(m,f,p);for(let A=0;A<y.length;A++)Pe(y[A],f,p,b);s(a.anchor,f,p);return}if(S===mn){R(a,f,p);return}if(b!==2&&g&1&&_)if(b===0)_.beforeEnter(m),s(m,f,p),ve(()=>_.enter(m),h);else{const{leave:A,delayLeave:k,afterLeave:P}=_,D=()=>{a.ctx.isUnmounted?o(m):s(m,f,p)},Y=()=>{m._isLeaving&&m[ol](!0),A(m,()=>{D(),P&&P()})};k?k(m,D,Y):Y()}else s(m,f,p)},ge=(a,f,p,b=!1,h=!1)=>{const{type:m,props:S,ref:_,children:y,dynamicChildren:g,shapeFlag:M,patchFlag:A,dirs:k,cacheIndex:P}=a;if(A===-2&&(h=!1),_!=null&&(Ae(),Nt(_,null,p,a,!0),Te()),P!=null&&(f.renderCache[P]=void 0),M&256){f.ctx.deactivate(a);return}const D=M&1&&k,Y=!Ft(a);let H;if(Y&&(H=S&&S.onVnodeBeforeUnmount)&&Ie(H,f,a),M&6)ne(a.component,p,b);else{if(M&128){a.suspense.unmount(p,b);return}D&&ct(a,null,f,"beforeUnmount"),M&64?a.type.remove(a,f,p,dt,b):g&&!g.hasOnce&&(m!==we||A>0&&A&64)?Tt(g,f,p,!1,!0):(m===we&&A&384||!h&&M&16)&&Tt(y,f,p),b&&J(a)}(Y&&(H=S&&S.onVnodeUnmounted)||D)&&ve(()=>{H&&Ie(H,f,a),D&&ct(a,null,f,"unmounted")},p)},J=a=>{const{type:f,el:p,anchor:b,transition:h}=a;if(f===we){I(p,b);return}if(f===mn){w(a);return}const m=()=>{o(p),h&&!h.persisted&&h.afterLeave&&h.afterLeave()};if(a.shapeFlag&1&&h&&!h.persisted){const{leave:S,delayLeave:_}=h,y=()=>S(p,m);_?_(a.el,m,y):y()}else m()},I=(a,f)=>{let p;for(;a!==f;)p=z(a),o(a),a=p;o(f)},ne=(a,f,p)=>{const{bum:b,scope:h,job:m,subTree:S,um:_,m:y,a:g}=a;Ao(y),Ao(g),b&&In(b),h.stop(),m&&(m.flags|=8,ge(S,a,f,p)),_&&ve(_,f),ve(()=>{a.isUnmounted=!0},f)},Tt=(a,f,p,b=!1,h=!1,m=0)=>{for(let S=m;S<a.length;S++)ge(a[S],f,p,b,h)},Wt=a=>{if(a.shapeFlag&6)return Wt(a.component.subTree);if(a.shapeFlag&128)return a.suspense.next();const f=z(a.anchor||a.el),p=f&&f[nl];return p?z(p):f};let zn=!1;const An=(a,f,p)=>{let b;a==null?f._vnode&&(ge(f._vnode,null,null,!0),b=f._vnode.component):E(f._vnode||null,a,f,null,null,null,p),f._vnode=a,zn||(zn=!0,Ks(b),qs(),zn=!1)},dt={p:E,um:ge,m:Pe,r:J,mt:At,mc:me,pc:G,pbc:te,n:Wt,o:e};return{render:An,hydrate:void 0,createApp:Al(An)}}function ls({type:e,props:t},n){return n==="svg"&&e==="foreignObject"||n==="mathml"&&e==="annotation-xml"&&t&&t.encoding&&t.encoding.includes("html")?void 0:n}function ft({effect:e,job:t},n){n?(e.flags|=32,t.flags|=4):(e.flags&=-33,t.flags&=-5)}function jl(e,t){return(!e||e&&!e.pendingBranch)&&t&&!t.persisted}function So(e,t,n=!1){const s=e.children,o=t.children;if(F(s)&&F(o))for(let i=0;i<s.length;i++){const l=s[i];let r=o[i];r.shapeFlag&1&&!r.dynamicChildren&&((r.patchFlag<=0||r.patchFlag===32)&&(r=o[i]=nt(o[i]),r.el=l.el),!n&&r.patchFlag!==-2&&So(l,r)),r.type===hn&&(r.patchFlag!==-1?r.el=l.el:r.__elIndex=i+(e.type===we?1:0)),r.type===et&&!r.el&&(r.el=l.el)}}function Hl(e){const t=e.slice(),n=[0];let s,o,i,l,r;const c=e.length;for(s=0;s<c;s++){const d=e[s];if(d!==0){if(o=n[n.length-1],e[o]<d){t[s]=o,n.push(s);continue}for(i=0,l=n.length-1;i<l;)r=i+l>>1,e[n[r]]<d?i=r+1:l=r;d<e[n[i]]&&(i>0&&(t[s]=n[i-1]),n[i]=s)}}for(i=n.length,l=n[i-1];i-- >0;)n[i]=l,l=t[l];return n}function zo(e){const t=e.subTree.component;if(t)return t.asyncDep&&!t.asyncResolved?t:zo(t)}function Ao(e){if(e)for(let t=0;t<e.length;t++)e[t].flags|=8}function To(e){if(e.placeholder)return e.placeholder;const t=e.component;return t?To(t.subTree):null}const Co=e=>e.__isSuspense;function Gl(e,t){t&&t.pendingBranch?F(e)?t.effects.push(...e):t.effects.push(e):Xi(e)}const we=Symbol.for("v-fgt"),hn=Symbol.for("v-txt"),et=Symbol.for("v-cmt"),mn=Symbol.for("v-stc"),$t=[];let he=null;function tt(e=!1){$t.push(he=e?null:[])}function Ul(){$t.pop(),he=$t[$t.length-1]||null}let Bt=1;function Eo(e,t=!1){Bt+=e,e<0&&he&&t&&(he.hasOnce=!0)}function Ro(e){return e.dynamicChildren=Bt>0?he||pt:null,Ul(),Bt>0&&he&&he.push(e),e}function _t(e,t,n,s,o,i){return Ro(x(e,t,n,s,o,i,!0))}function ko(e,t,n,s,o){return Ro(Se(e,t,n,s,o,!0))}function Io(e){return e?e.__v_isVNode===!0:!1}function jt(e,t){return e.type===t.type&&e.key===t.key}const Mo=({key:e})=>e??null,gn=({ref:e,ref_key:t,ref_for:n})=>(typeof e=="number"&&(e=""+e),e!=null?Q(e)||oe(e)||N(e)?{i:Re,r:e,k:t,f:!!n}:e:null);function x(e,t=null,n=null,s=0,o=null,i=e===we?0:1,l=!1,r=!1){const c={__v_isVNode:!0,__v_skip:!0,type:e,props:t,key:t&&Mo(t),ref:t&&gn(t),scopeId:Xs,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetStart:null,targetAnchor:null,staticCount:0,shapeFlag:i,patchFlag:s,dynamicProps:o,dynamicChildren:null,appContext:null,ctx:Re};return r?(rs(c,n),i&128&&e.normalize(c)):n&&(c.shapeFlag|=Q(n)?8:16),Bt>0&&!l&&he&&(c.patchFlag>0||i&6)&&c.patchFlag!==32&&he.push(c),c}const Se=Wl;function Wl(e,t=null,n=null,s=0,o=null,i=!1){if((!e||e===ml)&&(e=et),Io(e)){const r=wt(e,t,!0);return n&&rs(r,n),Bt>0&&!i&&he&&(r.shapeFlag&6?he[he.indexOf(e)]=r:he.push(r)),r.patchFlag=-2,r}if(lr(e)&&(e=e.__vccOpts),t){t=Vl(t);let{class:r,style:c}=t;r&&!Q(r)&&(t.class=Ye(r)),X(c)&&(Vn(c)&&!F(c)&&(c=se({},c)),t.style=Jt(c))}const l=Q(e)?1:Co(e)?128:sl(e)?64:X(e)?4:N(e)?2:0;return x(e,t,n,s,o,l,i,!0)}function Vl(e){return e?Vn(e)||mo(e)?se({},e):e:null}function wt(e,t,n=!1,s=!1){const{props:o,ref:i,patchFlag:l,children:r,transition:c}=e,d=t?ql(o||{},t):o,u={__v_isVNode:!0,__v_skip:!0,type:e.type,props:d,key:d&&Mo(d),ref:t&&t.ref?n&&i?F(i)?i.concat(gn(t)):[i,gn(t)]:gn(t):i,scopeId:e.scopeId,slotScopeIds:e.slotScopeIds,children:r,target:e.target,targetStart:e.targetStart,targetAnchor:e.targetAnchor,staticCount:e.staticCount,shapeFlag:e.shapeFlag,patchFlag:t&&e.type!==we?l===-1?16:l|16:l,dynamicProps:e.dynamicProps,dynamicChildren:e.dynamicChildren,appContext:e.appContext,dirs:e.dirs,transition:c,component:e.component,suspense:e.suspense,ssContent:e.ssContent&&wt(e.ssContent),ssFallback:e.ssFallback&&wt(e.ssFallback),placeholder:e.placeholder,el:e.el,anchor:e.anchor,ctx:e.ctx,ce:e.ce};return c&&s&&Xn(u,c.clone(u)),u}function Kl(e=" ",t=0){return Se(hn,null,e,t)}function bn(e,t){const n=Se(mn,null,e);return n.staticCount=t,n}function Oo(e="",t=!1){return t?(tt(),ko(et,null,e)):Se(et,null,e)}function ke(e){return e==null||typeof e=="boolean"?Se(et):F(e)?Se(we,null,e.slice()):Io(e)?nt(e):Se(hn,null,String(e))}function nt(e){return e.el===null&&e.patchFlag!==-1||e.memo?e:wt(e)}function rs(e,t){let n=0;const{shapeFlag:s}=e;if(t==null)t=null;else if(F(t))n=16;else if(typeof t=="object")if(s&65){const o=t.default;o&&(o._c&&(o._d=!1),rs(e,o()),o._c&&(o._d=!0));return}else{n=32;const o=t._;!o&&!mo(t)?t._ctx=Re:o===3&&Re&&(Re.slots._===1?t._=1:(t._=2,e.patchFlag|=1024))}else N(t)?(t={default:t,_ctx:Re},n=32):(t=String(t),s&64?(n=16,t=[Kl(t)]):n=8);e.children=t,e.shapeFlag|=n}function ql(...e){const t={};for(let n=0;n<e.length;n++){const s=e[n];for(const o in s)if(o==="class")t.class!==s.class&&(t.class=Ye([t.class,s.class]));else if(o==="style")t.style=Jt([t.style,s.style]);else if(Kt(o)){const i=t[o],l=s[o];l&&i!==l&&!(F(i)&&i.includes(l))&&(t[o]=i?[].concat(i,l):l)}else o!==""&&(t[o]=s[o])}return t}function Ie(e,t,n,s=null){Ce(e,t,7,[n,s])}const Yl=co();let Xl=0;function Jl(e,t,n){const s=e.type,o=(t?t.appContext:e.appContext)||Yl,i={uid:Xl++,vnode:e,type:s,parent:t,appContext:o,root:null,next:null,subTree:null,effect:null,update:null,job:null,scope:new pi(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:t?t.provides:Object.create(o.provides),ids:t?t.ids:["",0,0],accessCache:null,renderCache:[],components:null,directives:null,propsOptions:bo(s,o),emitsOptions:fo(s,o),emit:null,emitted:null,propsDefaults:U,inheritAttrs:s.inheritAttrs,ctx:U,data:U,props:U,attrs:U,slots:U,refs:U,setupState:U,setupContext:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return i.ctx={_:i},i.root=t?t.root:i,i.emit=Cl.bind(null,i),e.ce&&e.ce(i),i}let fe=null;const Ql=()=>fe||Re;let xn,as;{const e=Xt(),t=(n,s)=>{let o;return(o=e[n])||(o=e[n]=[]),o.push(s),i=>{o.length>1?o.forEach(l=>l(i)):o[0](i)}};xn=t("__VUE_INSTANCE_SETTERS__",n=>fe=n),as=t("__VUE_SSR_SETTERS__",n=>Gt=n)}const Ht=e=>{const t=fe;return xn(e),e.scope.on(),()=>{e.scope.off(),xn(t)}},Po=()=>{fe&&fe.scope.off(),xn(null)};function No(e){return e.vnode.shapeFlag&4}let Gt=!1;function Zl(e,t=!1,n=!1){t&&as(t);const{props:s,children:o}=e.vnode,i=No(e);Ol(e,s,i,t),Ll(e,o,n||t);const l=i?er(e,t):void 0;return t&&as(!1),l}function er(e,t){const n=e.type;e.accessCache=Object.create(null),e.proxy=new Proxy(e.ctx,bl);const{setup:s}=n;if(s){Ae();const o=e.setupContext=s.length>1?nr(e):null,i=Ht(e),l=gt(s,e,0,[e.props,o]),r=ms(l);if(Te(),i(),(r||e.sp)&&!Ft(e)&&Zs(e),r){if(l.then(Po,Po),t)return l.then(c=>{Fo(e,c)}).catch(c=>{ln(c,e,0)});e.asyncDep=l}else Fo(e,l)}else Lo(e)}function Fo(e,t,n){N(t)?e.type.__ssrInlineRender?e.ssrRender=t:e.render=t:X(t)&&(e.setupState=Gs(t)),Lo(e)}function Lo(e,t,n){const s=e.type;e.render||(e.render=s.render||ze);{const o=Ht(e);Ae();try{xl(e)}finally{Te(),o()}}}const tr={get(e,t){return re(e,"get",""),e[t]}};function nr(e){const t=n=>{e.exposed=n||{}};return{attrs:new Proxy(e.attrs,tr),slots:e.slots,emit:e.emit,expose:t}}function cs(e){return e.exposed?e.exposeProxy||(e.exposeProxy=new Proxy(Gs(Pi(e.exposed)),{get(t,n){if(n in t)return t[n];if(n in Lt)return Lt[n](e)},has(t,n){return n in t||n in Lt}})):e.proxy}const sr=/(?:^|[-_])\w/g,or=e=>e.replace(sr,t=>t.toUpperCase()).replace(/[-_]/g,"");function ir(e,t=!0){return N(e)?e.displayName||e.name:e.name||t&&e.__name}function Do(e,t,n=!1){let s=ir(t);if(!s&&t.__file){const o=t.__file.match(/([^/\\]+)\.\w+$/);o&&(s=o[1])}if(!s&&e){const o=i=>{for(const l in i)if(i[l]===t)return l};s=o(e.components)||e.parent&&o(e.parent.type.components)||o(e.appContext.components)}return s?or(s):n?"App":"Anonymous"}function lr(e){return N(e)&&"__vccOpts"in e}const B=(e,t)=>Bi(e,t,Gt),rr="3.5.27";/**
* @vue/runtime-dom v3.5.27
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let fs;const $o=typeof window<"u"&&window.trustedTypes;if($o)try{fs=$o.createPolicy("vue",{createHTML:e=>e})}catch{}const Bo=fs?e=>fs.createHTML(e):e=>e,ar="http://www.w3.org/2000/svg",cr="http://www.w3.org/1998/Math/MathML",Ge=typeof document<"u"?document:null,jo=Ge&&Ge.createElement("template"),fr={insert:(e,t,n)=>{t.insertBefore(e,n||null)},remove:e=>{const t=e.parentNode;t&&t.removeChild(e)},createElement:(e,t,n,s)=>{const o=t==="svg"?Ge.createElementNS(ar,e):t==="mathml"?Ge.createElementNS(cr,e):n?Ge.createElement(e,{is:n}):Ge.createElement(e);return e==="select"&&s&&s.multiple!=null&&o.setAttribute("multiple",s.multiple),o},createText:e=>Ge.createTextNode(e),createComment:e=>Ge.createComment(e),setText:(e,t)=>{e.nodeValue=t},setElementText:(e,t)=>{e.textContent=t},parentNode:e=>e.parentNode,nextSibling:e=>e.nextSibling,querySelector:e=>Ge.querySelector(e),setScopeId(e,t){e.setAttribute(t,"")},insertStaticContent(e,t,n,s,o,i){const l=n?n.previousSibling:t.lastChild;if(o&&(o===i||o.nextSibling))for(;t.insertBefore(o.cloneNode(!0),n),!(o===i||!(o=o.nextSibling)););else{jo.innerHTML=Bo(s==="svg"?`<svg>${e}</svg>`:s==="mathml"?`<math>${e}</math>`:e);const r=jo.content;if(s==="svg"||s==="mathml"){const c=r.firstChild;for(;c.firstChild;)r.appendChild(c.firstChild);r.removeChild(c)}t.insertBefore(r,n)}return[l?l.nextSibling:t.firstChild,n?n.previousSibling:t.lastChild]}},ur=Symbol("_vtc");function dr(e,t,n){const s=e[ur];s&&(t=(t?[t,...s]:[...s]).join(" ")),t==null?e.removeAttribute("class"):n?e.setAttribute("class",t):e.className=t}const Ho=Symbol("_vod"),pr=Symbol("_vsh"),vr=Symbol(""),hr=/(?:^|;)\s*display\s*:/;function mr(e,t,n){const s=e.style,o=Q(n);let i=!1;if(n&&!o){if(t)if(Q(t))for(const l of t.split(";")){const r=l.slice(0,l.indexOf(":")).trim();n[r]==null&&yn(s,r,"")}else for(const l in t)n[l]==null&&yn(s,l,"");for(const l in n)l==="display"&&(i=!0),yn(s,l,n[l])}else if(o){if(t!==n){const l=s[vr];l&&(n+=";"+l),s.cssText=n,i=hr.test(n)}}else t&&e.removeAttribute("style");Ho in e&&(e[Ho]=i?s.display:"",e[pr]&&(s.display="none"))}const Go=/\s*!important$/;function yn(e,t,n){if(F(n))n.forEach(s=>yn(e,t,s));else if(n==null&&(n=""),t.startsWith("--"))e.setProperty(t,n);else{const s=gr(e,t);Go.test(n)?e.setProperty(it(s),n.replace(Go,""),"important"):e[s]=n}}const Uo=["Webkit","Moz","ms"],us={};function gr(e,t){const n=us[t];if(n)return n;let s=Ke(t);if(s!=="filter"&&s in e)return us[t]=s;s=xs(s);for(let o=0;o<Uo.length;o++){const i=Uo[o]+s;if(i in e)return us[t]=i}return t}const Wo="http://www.w3.org/1999/xlink";function Vo(e,t,n,s,o,i=di(t)){s&&t.startsWith("xlink:")?n==null?e.removeAttributeNS(Wo,t.slice(6,t.length)):e.setAttributeNS(Wo,t,n):n==null||i&&!ws(n)?e.removeAttribute(t):e.setAttribute(t,i?"":Ve(n)?String(n):n)}function Ko(e,t,n,s,o){if(t==="innerHTML"||t==="textContent"){n!=null&&(e[t]=t==="innerHTML"?Bo(n):n);return}const i=e.tagName;if(t==="value"&&i!=="PROGRESS"&&!i.includes("-")){const r=i==="OPTION"?e.getAttribute("value")||"":e.value,c=n==null?e.type==="checkbox"?"on":"":String(n);(r!==c||!("_value"in e))&&(e.value=c),n==null&&e.removeAttribute(t),e._value=n;return}let l=!1;if(n===""||n==null){const r=typeof e[t];r==="boolean"?n=ws(n):n==null&&r==="string"?(n="",l=!0):r==="number"&&(n=0,l=!0)}try{e[t]=n}catch{}l&&e.removeAttribute(o||t)}function br(e,t,n,s){e.addEventListener(t,n,s)}function xr(e,t,n,s){e.removeEventListener(t,n,s)}const qo=Symbol("_vei");function yr(e,t,n,s,o=null){const i=e[qo]||(e[qo]={}),l=i[t];if(s&&l)l.value=s;else{const[r,c]=_r(t);if(s){const d=i[t]=zr(s,o);br(e,r,d,c)}else l&&(xr(e,r,l,c),i[t]=void 0)}}const Yo=/(?:Once|Passive|Capture)$/;function _r(e){let t;if(Yo.test(e)){t={};let s;for(;s=e.match(Yo);)e=e.slice(0,e.length-s[0].length),t[s[0].toLowerCase()]=!0}return[e[2]===":"?e.slice(3):it(e.slice(2)),t]}let ds=0;const wr=Promise.resolve(),Sr=()=>ds||(wr.then(()=>ds=0),ds=Date.now());function zr(e,t){const n=s=>{if(!s._vts)s._vts=Date.now();else if(s._vts<=n.attached)return;Ce(Ar(s,n.value),t,5,[s])};return n.value=e,n.attached=Sr(),n}function Ar(e,t){if(F(t)){const n=e.stopImmediatePropagation;return e.stopImmediatePropagation=()=>{n.call(e),e._stopped=!0},t.map(s=>o=>!o._stopped&&s&&s(o))}else return t}const Xo=e=>e.charCodeAt(0)===111&&e.charCodeAt(1)===110&&e.charCodeAt(2)>96&&e.charCodeAt(2)<123,Tr=(e,t,n,s,o,i)=>{const l=o==="svg";t==="class"?dr(e,s,l):t==="style"?mr(e,n,s):Kt(t)?Cn(t)||yr(e,t,n,s,i):(t[0]==="."?(t=t.slice(1),!0):t[0]==="^"?(t=t.slice(1),!1):Cr(e,t,s,l))?(Ko(e,t,s),!e.tagName.includes("-")&&(t==="value"||t==="checked"||t==="selected")&&Vo(e,t,s,l,i,t!=="value")):e._isVueCE&&(/[A-Z]/.test(t)||!Q(s))?Ko(e,Ke(t),s,i,t):(t==="true-value"?e._trueValue=s:t==="false-value"&&(e._falseValue=s),Vo(e,t,s,l))};function Cr(e,t,n,s){if(s)return!!(t==="innerHTML"||t==="textContent"||t in e&&Xo(t)&&N(n));if(t==="spellcheck"||t==="draggable"||t==="translate"||t==="autocorrect"||t==="sandbox"&&e.tagName==="IFRAME"||t==="form"||t==="list"&&e.tagName==="INPUT"||t==="type"&&e.tagName==="TEXTAREA")return!1;if(t==="width"||t==="height"){const o=e.tagName;if(o==="IMG"||o==="VIDEO"||o==="CANVAS"||o==="SOURCE")return!1}return Xo(t)&&Q(n)?!1:t in e}const Er=se({patchProp:Tr},fr);let Jo;function Rr(){return Jo||(Jo=$l(Er))}const kr=(...e)=>{const t=Rr().createApp(...e),{mount:n}=t;return t.mount=s=>{const o=Mr(s);if(!o)return;const i=t._component;!N(i)&&!i.render&&!i.template&&(i.template=o.innerHTML),o.nodeType===1&&(o.textContent="");const l=n(o,!1,Ir(o));return o instanceof Element&&(o.removeAttribute("v-cloak"),o.setAttribute("data-v-app","")),l},t};function Ir(e){if(e instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&e instanceof MathMLElement)return"mathml"}function Mr(e){return Q(e)?document.querySelector(e):e}const Or=`// ===== 0: MANDELBULB =====
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
`,Pr=`// ===== 1: MANDELBOX =====
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
`,Nr=`// ===== 2: MENGER SPONGE =====
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
`,Fr=`// ===== 3: SIERPINSKI =====
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
`,Lr=`// ===== 4: KALEIDOSCOPE =====
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
`,Dr=`// ===== 5: ORGANIC HYBRID =====
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
`,$r=`// ===== 6: FRACTAL LAND =====
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
`,Br=`// ===== 7: GALAXY NEBULA =====
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
`,jr=`// ===== 8: INFINITE TUNNEL =====
vec3 infiniteTunnel(vec2 uv, float time) {
  float angle = atan(uv.y, uv.x), radius = length(uv);
  float tunnel = 1.0 / radius + time * 0.5, twist = angle + tunnel * 0.5;
  vec2 tuv = vec2(twist / PI, tunnel);
  vec2 grid = fract(tuv * 8.0) - 0.5;
  float glow = 0.02 / (length(grid) + 0.02);
  return hsv2rgb(vec3(tunnel * 0.1 + angle * 0.1, 0.7, glow)) * smoothstep(0.0, 0.3, radius);
}
`,Hr=`// ===== 9: PLASMA FRACTAL =====
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
`,Gr=`// ===== 10: CIRCUITS =====
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
`,Ur=`// ===== 11: METABALLS =====
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
`,Wr=`// ===== 12: VOLUMETRIC LINES =====
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
`,Vr=`// ===== 13: DISCO TUNNEL =====
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
`,Kr=`// ===== 14: SPEED DRIVE =====
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
`,qr=`// ===== 15: HOT ROCKS =====
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
`,Yr=`// ===== 16: SERVER ROOM =====
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
`,Xr=`// ===== 17: REMNANT X =====
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
`,Jr=`// ===== 18: KALI SET =====
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
`,Qr=`// ===== 19: GENERATORS =====
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
`,Zr=`// ===== 20: SIMPLICITY GALAXY =====
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
`,ea=`// ===== 21: RIBBONS =====
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
`,ta=`// ===== 22: TWISTED RINGS =====
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
`,na=`// ===== 23: WAVES REMIX =====
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
`,sa=`// ===== 24: DANCING METALIGHTS =====
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
`,oa=`// ===== 25: IO BLOCKS =====
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
`,ia=`// ===== 26: BEATING CIRCLES =====
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
`,la=`// ===== 27: CIRCLE WAVE =====
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
`,ra=`// ===== 28: SOUNDFLOWER =====
vec3 soundflower(vec2 uv, float time) {
  float r = length(uv);
  float a = atan(uv.x, uv.y);
  float w = fakeAudio(abs(a) / 6.28);
  float t = 3.0 * sqrt(abs(w - 0.5));
  float f = 0.0;
  if (r < t) f = 1.0 - r / t;
  return pow(vec3(f), vec3(1.5, 1.1, 0.8));
}
`,aa=`// ===== 29: POLAR BEATS =====
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
`,ca=`// ===== 30: UNDULANT SPECTRE =====
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
`,fa=`// ===== 31: REVISION 2015 =====
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
`,ua=`// ===== 32: GAMEBOY STYLE =====
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
`,da=`// ===== 33: ELECTRIC STORM =====
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
`,pa=`// ===== 34: VORTEX =====
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
`,va=`// ===== 35: NEON GRID =====
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
`,ha=`// ===== 36: MATRIX RAIN =====
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
`,ma=`// ===== 37: FIRE =====
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
`,ga=`// ===== 38: AURORA =====
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
`,ba=`// ===== 39: WORMHOLE =====
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
`,xa=`// ===== 40: HEXAGONS =====
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
`,ya=`// ===== 41: BUBBLES =====
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
`,_a=`// ===== 42: LIGHTNING =====
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
`,wa=`// ===== 43: KALEIDOSCOPE 2D =====
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
`,Sa=`// ===== 44: STARFIELD =====
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
`,za=`// ===== 45: LIQUID METAL =====
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
`,Aa=`// ===== 46: FRACTAL TREE =====
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
`,Ta=`// ===== 47: VORONOI =====
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
`,Ca=`// ===== 48: PSYCHEDELIC =====
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
`,Ea=`// ===== 49: ENERGY FIELD =====
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
`,Ra=`precision highp float;
attribute vec2 aPosition;
varying vec2 vUV;

void main() {
  vUV = aPosition;
  gl_Position = vec4(aPosition, 0.0, 1.0);
}
`,ka=`// ===== PRECISION AND UNIFORMS =====

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
`,Ia=`// ===== MAIN SHADER PROGRAM =====
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
`,Ma=Jn({__name:"BioFractalViewer",props:{mode:{default:0}},setup(e){const t=e,n=je(null);let s=null,o=null,i=null,l=Date.now();const r=Object.assign({"../../shaders/effects/mode-00-mandelbulb.glsl":Or,"../../shaders/effects/mode-01-mandelbox.glsl":Pr,"../../shaders/effects/mode-02-menger-sponge.glsl":Nr,"../../shaders/effects/mode-03-sierpinski.glsl":Fr,"../../shaders/effects/mode-04-kaleidoscope.glsl":Lr,"../../shaders/effects/mode-05-organic-hybrid.glsl":Dr,"../../shaders/effects/mode-06-fractal-land.glsl":$r,"../../shaders/effects/mode-07-galaxy-nebula.glsl":Br,"../../shaders/effects/mode-08-infinite-tunnel.glsl":jr,"../../shaders/effects/mode-09-plasma-fractal.glsl":Hr,"../../shaders/effects/mode-10-circuits.glsl":Gr,"../../shaders/effects/mode-11-metaballs.glsl":Ur,"../../shaders/effects/mode-12-volumetric-lines.glsl":Wr,"../../shaders/effects/mode-13-disco-tunnel.glsl":Vr,"../../shaders/effects/mode-14-speed-drive.glsl":Kr,"../../shaders/effects/mode-15-hot-rocks.glsl":qr,"../../shaders/effects/mode-16-server-room.glsl":Yr,"../../shaders/effects/mode-17-remnant-x.glsl":Xr,"../../shaders/effects/mode-18-kali-set.glsl":Jr,"../../shaders/effects/mode-19-generators.glsl":Qr,"../../shaders/effects/mode-20-simplicity-galaxy.glsl":Zr,"../../shaders/effects/mode-21-ribbons.glsl":ea,"../../shaders/effects/mode-22-twisted-rings.glsl":ta,"../../shaders/effects/mode-23-waves-remix.glsl":na,"../../shaders/effects/mode-24-dancing-metalights.glsl":sa,"../../shaders/effects/mode-25-io-blocks.glsl":oa,"../../shaders/effects/mode-26-beating-circles.glsl":ia,"../../shaders/effects/mode-27-circle-wave.glsl":la,"../../shaders/effects/mode-28-soundflower.glsl":ra,"../../shaders/effects/mode-29-polar-beats.glsl":aa,"../../shaders/effects/mode-30-undulant-spectre.glsl":ca,"../../shaders/effects/mode-31-revision-2015.glsl":fa,"../../shaders/effects/mode-32-gameboy-style.glsl":ua,"../../shaders/effects/mode-33-electric-storm.glsl":da,"../../shaders/effects/mode-34-vortex.glsl":pa,"../../shaders/effects/mode-35-neon-grid.glsl":va,"../../shaders/effects/mode-36-matrix-rain.glsl":ha,"../../shaders/effects/mode-37-fire.glsl":ma,"../../shaders/effects/mode-38-aurora.glsl":ga,"../../shaders/effects/mode-39-wormhole.glsl":ba,"../../shaders/effects/mode-40-hexagons.glsl":xa,"../../shaders/effects/mode-41-bubbles.glsl":ya,"../../shaders/effects/mode-42-lightning.glsl":_a,"../../shaders/effects/mode-43-kaleidoscope-2d.glsl":wa,"../../shaders/effects/mode-44-starfield.glsl":Sa,"../../shaders/effects/mode-45-liquid-metal.glsl":za,"../../shaders/effects/mode-46-fractal-tree.glsl":Aa,"../../shaders/effects/mode-47-voronoi.glsl":Ta,"../../shaders/effects/mode-48-psychedelic.glsl":Ca,"../../shaders/effects/mode-49-energy-field.glsl":Ea}),c=Object.keys(r).sort().map(E=>r[E]).join(`

`),d=Ra,u=`${ka}
${c}
${Ia}`,v=(E,V)=>{if(!s)return null;const O=s.createShader(E);return O?(s.shaderSource(O,V),s.compileShader(O),s.getShaderParameter(O,s.COMPILE_STATUS)?O:(console.error("Shader error:",s.getShaderInfoLog(O)),null)):null},z=()=>{const E=n.value;if(!E||(s=E.getContext("webgl")||E.getContext("experimental-webgl"),!s))return!1;const V=v(s.VERTEX_SHADER,d),O=v(s.FRAGMENT_SHADER,u);if(!V||!O||(o=s.createProgram(),!o))return!1;if(s.attachShader(o,V),s.attachShader(o,O),s.linkProgram(o),!s.getProgramParameter(o,s.LINK_STATUS))return console.error("Link error:",s.getProgramInfoLog(o)),!1;const L=new Float32Array([-1,-1,1,-1,-1,1,-1,1,1,-1,1,1]),R=s.createBuffer();s.bindBuffer(s.ARRAY_BUFFER,R),s.bufferData(s.ARRAY_BUFFER,L,s.STATIC_DRAW);const w=s.getAttribLocation(o,"aPosition");return s.enableVertexAttribArray(w),s.vertexAttribPointer(w,2,s.FLOAT,!1,0,0),!0},C=()=>{const E=n.value;E&&(E.width=E.clientWidth,E.height=E.clientHeight,s&&s.viewport(0,0,E.width,E.height))},T=()=>{!s||!o||!n.value||(s.useProgram(o),s.uniform1f(s.getUniformLocation(o,"uTime"),(Date.now()-l)/1e3),s.uniform2f(s.getUniformLocation(o,"uResolution"),n.value.width,n.value.height),s.uniform1i(s.getUniformLocation(o,"uMode"),t.mode),s.drawArrays(s.TRIANGLES,0,6),i=requestAnimationFrame(T))};return Qn(()=>{z()&&(C(),window.addEventListener("resize",C),T())}),dn(()=>{i&&cancelAnimationFrame(i),window.removeEventListener("resize",C)}),(E,V)=>(tt(),_t("canvas",{ref_key:"canvasRef",ref:n,class:"bio-fractal-canvas"},null,512))}}),Qo=(e,t)=>{const n=e.__vccOpts||e;for(const[s,o]of t)n[s]=o;return n},Oa=Qo(Ma,[["__scopeId","data-v-c9463404"]]),Pa={class:"pv-container"},Na={class:"pv-svg-container"},Fa={viewBox:"0 0 840 640",preserveAspectRatio:"xMidYMid meet"},La=["x1","y1","x2","y2"],Da=["x1","y1","x2","y2"],$a=["x1","y1","x2","y2"],Ba=["x1","y1","x2","y2"],ja=["d"],Ha=["cx","cy"],Ga=["transform"],Ua=["x1","y1","x2","y2"],Wa=["x1","y1","x2","y2"],Va=["x1","y1","x2","y2"],Ka=["x1","y1","x2","y2"],qa=["d"],Ya=["cx","cy"],Xa=["transform"],Ja=["x1","y1","x2","y2"],Qa=["x1","y1","x2","y2"],Za=["x1","y1","x2","y2"],ec=["x1","y1","x2","y2"],tc=["x1","y1","x2","y2"],nc=["x1","y1","x2","y2"],sc=["points"],oc=["d"],ic=["cx","cy"],lc=["transform"],rc=["d"],ac=["x1","y1","x2","y2"],cc=["x1","y1","x2","y2"],fc=["x1","y1","x2","y2"],uc=["points"],dc=["x1","y1","x2","y2"],pc=["points"],vc=["x1","y1","x2","y2"],hc=["points"],mc=["transform"],gc=["cx","cy"],bc=["cx","cy"],xc=["cx","cy"],yc=["x","y"],_c=["x","y"],wc=["x","y"],Sc=["x","y"],zc={class:"pv-values"},Ac={class:"pv-values-main"},Tc={class:"pv-values-text"},Cc={class:"pv-values-real"},Ec={class:"pv-values-imag"},Rc={class:"pv-values-time"},kc={class:"pv-values-time-text"},Ic={class:"pv-values-time-value"},_n=1.3,Mc=1,St=-2.8,zt=-2.8,Me=-1.2,st=1.3,wn=1.3,Sn=1.3,Oc=Qo(Jn({__name:"ComplexWaveVisualization",setup(e){const t=je(1.25),n=je(!0);let s=null;const o=2*Math.PI*1.6,i=J=>Math.exp(-1*Math.pow(J-_n,2)),l=(J,I,ne)=>{const An=-J*81*.7,dt=J*81*.35,Zo=I*61*.9,a=I*61*.25,f=-ne*61;return{x:436+An+Zo,y:355+dt+a+f}},r=B(()=>i(t.value)*Math.cos(o*t.value)),c=B(()=>i(t.value)*Math.sin(o*t.value)),d=B(()=>{const J=[];for(let I=0;I<=2.5;I+=.015){const ne=i(I);J.push({t:I,re:ne*Math.cos(o*I),im:ne*Math.sin(o*I)})}return J}),u=B(()=>d.value.map((J,I)=>{const ne=l(J.t,J.re,J.im);return`${I===0?"M":"L"} ${ne.x} ${ne.y}`}).join(" ")),v=B(()=>d.value.map((J,I)=>{const ne=l(Me,J.re,J.im);return`${I===0?"M":"L"} ${ne.x} ${ne.y}`}).join(" ")),z=B(()=>d.value.map((J,I)=>{const ne=l(J.t,St,J.im);return`${I===0?"M":"L"} ${ne.x} ${ne.y}`}).join(" ")),C=B(()=>d.value.map((J,I)=>{const ne=l(J.t,J.re,zt);return`${I===0?"M":"L"} ${ne.x} ${ne.y}`}).join(" ")),T=B(()=>({tl:l(Me,-st,st),tr:l(Me,st,st),bl:l(Me,-st,-st),br:l(Me,st,-st)})),E=B(()=>l(Me,0,1.4)),V=B(()=>l(Me,0,-.3)),O=B(()=>l(Me,-.3,0)),L=B(()=>l(Me,1,0)),R=B(()=>({tl:l(0,St,wn),tr:l(2.5,St,wn),bl:l(0,St,-wn),br:l(2.5,St,-wn)})),w=B(()=>({bl:l(0,-Sn,zt),br:l(0,Sn,zt),tl:l(2.5,-Sn,zt),tr:l(2.5,Sn,zt)})),K=B(()=>l(_n,0,0)),ee=B(()=>l(_n,0,1.6)),Z=B(()=>l(_n,1.5,0)),me=B(()=>l(0,0,0)),ie=B(()=>l(2.7,0,0)),te=B(()=>l(t.value,r.value,c.value)),ot=B(()=>l(Me,r.value,c.value)),Ue=B(()=>l(t.value,St,c.value)),We=B(()=>l(t.value,r.value,zt)),At=B(()=>Math.atan2(R.value.tl.y-R.value.tr.y,R.value.tl.x-R.value.tr.x)*(180/Math.PI)),Ut=B(()=>({x:(R.value.tl.x+R.value.tr.x)/2,y:(R.value.tl.y+R.value.tr.y)/2})),le=B(()=>Math.atan2(w.value.bl.y-w.value.tl.y,w.value.bl.x-w.value.tl.x)*(180/Math.PI)),q=B(()=>({x:(w.value.br.x+w.value.tr.x)/2,y:(w.value.br.y+w.value.tr.y)/2})),G=B(()=>Math.atan2(T.value.tl.y-T.value.tr.y,T.value.tl.x-T.value.tr.x)*(180/Math.PI)),Oe=B(()=>({x:(T.value.tl.x+T.value.tr.x)/2,y:(T.value.tl.y+T.value.tr.y)/2})),ut=B(()=>({x:(me.value.x+ie.value.x)/2,y:(me.value.y+ie.value.y)/2}));let Pe=0;const ge=()=>{Pe++,n.value&&Pe%2===0&&(t.value+=.02,t.value>2.5&&(t.value=0)),s=requestAnimationFrame(ge)};return Qn(()=>{s=requestAnimationFrame(ge)}),dn(()=>{s&&cancelAnimationFrame(s)}),(J,I)=>(tt(),_t("div",Pa,[I[15]||(I[15]=x("div",{class:"pv-title"},[x("h1",{class:"pv-title-gradient-1"}," The Observer Effect explains why the same "),x("h2",{class:"pv-title-gradient-2"}," life feels different to different people ")],-1)),x("div",Na,[(tt(),_t("svg",Fa,[I[4]||(I[4]=bn('<defs data-v-ce349056><linearGradient id="pv-helixGradient" x1="0%" y1="0%" x2="100%" y2="0%" data-v-ce349056><stop offset="0%" stop-color="#a855f7" data-v-ce349056><animate attributeName="stop-color" values="#a855f7;#ec4899;#06b6d4;#a855f7" dur="4s" repeatCount="indefinite" data-v-ce349056></animate></stop><stop offset="50%" stop-color="#ec4899" data-v-ce349056><animate attributeName="stop-color" values="#ec4899;#06b6d4;#a855f7;#ec4899" dur="4s" repeatCount="indefinite" data-v-ce349056></animate></stop><stop offset="100%" stop-color="#06b6d4" data-v-ce349056><animate attributeName="stop-color" values="#06b6d4;#a855f7;#ec4899;#06b6d4" dur="4s" repeatCount="indefinite" data-v-ce349056></animate></stop></linearGradient><linearGradient id="pv-imGradient" x1="0%" y1="0%" x2="100%" y2="0%" data-v-ce349056><stop offset="0%" stop-color="#06b6d4" data-v-ce349056></stop><stop offset="100%" stop-color="#22d3d3" data-v-ce349056></stop></linearGradient><linearGradient id="pv-reGradient" x1="0%" y1="0%" x2="100%" y2="0%" data-v-ce349056><stop offset="0%" stop-color="#f97316" data-v-ce349056></stop><stop offset="100%" stop-color="#fb923c" data-v-ce349056></stop></linearGradient><linearGradient id="pv-spiralGradient" x1="0%" y1="0%" x2="100%" y2="100%" data-v-ce349056><stop offset="0%" stop-color="#a855f7" data-v-ce349056></stop><stop offset="100%" stop-color="#6366f1" data-v-ce349056></stop></linearGradient><linearGradient id="pv-axisGradient" x1="0%" y1="0%" x2="100%" y2="0%" data-v-ce349056><stop offset="0%" stop-color="#64748b" data-v-ce349056></stop><stop offset="100%" stop-color="#94a3b8" data-v-ce349056></stop></linearGradient><filter id="pv-glow-cyan" x="-50%" y="-50%" width="200%" height="200%" data-v-ce349056><feGaussianBlur stdDeviation="3" result="coloredBlur" data-v-ce349056></feGaussianBlur><feMerge data-v-ce349056><feMergeNode in="coloredBlur" data-v-ce349056></feMergeNode><feMergeNode in="SourceGraphic" data-v-ce349056></feMergeNode></feMerge></filter><filter id="pv-glow-orange" x="-50%" y="-50%" width="200%" height="200%" data-v-ce349056><feGaussianBlur stdDeviation="3" result="coloredBlur" data-v-ce349056></feGaussianBlur><feMerge data-v-ce349056><feMergeNode in="coloredBlur" data-v-ce349056></feMergeNode><feMergeNode in="SourceGraphic" data-v-ce349056></feMergeNode></feMerge></filter><filter id="pv-glow-purple" x="-50%" y="-50%" width="200%" height="200%" data-v-ce349056><feGaussianBlur stdDeviation="4" result="coloredBlur" data-v-ce349056></feGaussianBlur><feMerge data-v-ce349056><feMergeNode in="coloredBlur" data-v-ce349056></feMergeNode><feMergeNode in="SourceGraphic" data-v-ce349056></feMergeNode></feMerge></filter><filter id="pv-glow-strong" x="-100%" y="-100%" width="300%" height="300%" data-v-ce349056><feGaussianBlur stdDeviation="6" result="coloredBlur" data-v-ce349056></feGaussianBlur><feMerge data-v-ce349056><feMergeNode in="coloredBlur" data-v-ce349056></feMergeNode><feMergeNode in="coloredBlur" data-v-ce349056></feMergeNode><feMergeNode in="SourceGraphic" data-v-ce349056></feMergeNode></feMerge></filter></defs>',1)),x("line",{x1:R.value.bl.x,y1:R.value.bl.y,x2:R.value.tl.x,y2:R.value.tl.y,stroke:"#0e7490","stroke-width":"1",class:"pv-shimmer"},null,8,La),x("line",{x1:R.value.tl.x,y1:R.value.tl.y,x2:R.value.tr.x,y2:R.value.tr.y,stroke:"#0e7490","stroke-width":"1",class:"pv-shimmer"},null,8,Da),x("line",{x1:R.value.bl.x,y1:R.value.bl.y,x2:R.value.br.x,y2:R.value.br.y,stroke:"#0e7490","stroke-width":"1",class:"pv-shimmer"},null,8,$a),x("line",{x1:R.value.tr.x,y1:R.value.tr.y,x2:R.value.br.x,y2:R.value.br.y,stroke:"#0e7490","stroke-width":"1",class:"pv-shimmer"},null,8,Ba),x("path",{d:z.value,fill:"none",stroke:"url(#pv-imGradient)","stroke-width":"2"},null,8,ja),x("circle",{cx:Ue.value.x,cy:Ue.value.y,r:"4",fill:"#06b6d4",class:"pv-point-pulse"},null,8,Ha),x("g",{transform:`translate(${Ut.value.x}, ${Ut.value.y-25}) rotate(${At.value})`},[...I[0]||(I[0]=[bn('<text fill="#22d3d3" font-size="11" font-family="Times New Roman, serif" text-anchor="middle" style="letter-spacing:-0.5px;" data-v-ce349056><tspan font-weight="bold" data-v-ce349056>Im</tspan><tspan font-style="italic" data-v-ce349056> f</tspan><tspan data-v-ce349056>=e</tspan><tspan baseline-shift="super" font-size="7" data-v-ce349056>−γ(t−t₀)²</tspan><tspan font-style="italic" data-v-ce349056>sin(ωt)</tspan></text>',1)])],8,Ga),x("line",{x1:w.value.bl.x,y1:w.value.bl.y,x2:w.value.br.x,y2:w.value.br.y,stroke:"#c2410c","stroke-width":"1",class:"pv-shimmer"},null,8,Ua),x("line",{x1:w.value.bl.x,y1:w.value.bl.y,x2:w.value.tl.x,y2:w.value.tl.y,stroke:"#c2410c","stroke-width":"1",class:"pv-shimmer"},null,8,Wa),x("line",{x1:w.value.br.x,y1:w.value.br.y,x2:w.value.tr.x,y2:w.value.tr.y,stroke:"#c2410c","stroke-width":"1",class:"pv-shimmer"},null,8,Va),x("line",{x1:w.value.tl.x,y1:w.value.tl.y,x2:w.value.tr.x,y2:w.value.tr.y,stroke:"#c2410c","stroke-width":"1",class:"pv-shimmer"},null,8,Ka),x("path",{d:C.value,fill:"none",stroke:"url(#pv-reGradient)","stroke-width":"2"},null,8,qa),x("circle",{cx:We.value.x,cy:We.value.y,r:"4",fill:"#f97316",class:"pv-point-pulse"},null,8,Ya),x("g",{transform:`translate(${q.value.x}, ${q.value.y+25}) rotate(${le.value})`},[...I[1]||(I[1]=[bn('<text fill="#fb923c" font-size="11" font-family="Times New Roman, serif" text-anchor="middle" style="letter-spacing:-0.5px;" data-v-ce349056><tspan font-weight="bold" data-v-ce349056>Re</tspan><tspan font-style="italic" data-v-ce349056> f</tspan><tspan data-v-ce349056>=e</tspan><tspan baseline-shift="super" font-size="7" data-v-ce349056>−γ(t−t₀)²</tspan><tspan font-style="italic" data-v-ce349056>cos(ωt)</tspan></text>',1)])],8,Xa),x("line",{x1:T.value.bl.x,y1:T.value.bl.y,x2:T.value.tl.x,y2:T.value.tl.y,stroke:"#7c3aed","stroke-width":"1",class:"pv-shimmer"},null,8,Ja),x("line",{x1:T.value.tl.x,y1:T.value.tl.y,x2:T.value.tr.x,y2:T.value.tr.y,stroke:"#7c3aed","stroke-width":"1",class:"pv-shimmer"},null,8,Qa),x("line",{x1:T.value.bl.x,y1:T.value.bl.y,x2:T.value.br.x,y2:T.value.br.y,stroke:"#7c3aed","stroke-width":"1",class:"pv-shimmer"},null,8,Za),x("line",{x1:T.value.br.x,y1:T.value.br.y,x2:T.value.tr.x,y2:T.value.tr.y,stroke:"#7c3aed","stroke-width":"1",class:"pv-shimmer"},null,8,ec),x("line",{x1:V.value.x,y1:V.value.y,x2:E.value.x,y2:E.value.y,stroke:"#8b5cf6","stroke-width":"1"},null,8,tc),x("line",{x1:O.value.x,y1:O.value.y,x2:L.value.x,y2:L.value.y,stroke:"#8b5cf6","stroke-width":"1"},null,8,nc),x("polygon",{points:`${E.value.x},${E.value.y-6} ${E.value.x-3},${E.value.y+2} ${E.value.x+3},${E.value.y+2}`,fill:"#a855f7"},null,8,sc),x("path",{d:v.value,fill:"none",stroke:"url(#pv-spiralGradient)","stroke-width":"2"},null,8,oc),x("circle",{cx:ot.value.x,cy:ot.value.y,r:"4",fill:"#a855f7",class:"pv-point-pulse"},null,8,ic),x("g",{transform:`translate(${Oe.value.x}, ${Oe.value.y-20}) rotate(${G.value})`},[...I[2]||(I[2]=[bn('<text fill="#c084fc" font-size="10" font-family="Times New Roman, serif" text-anchor="middle" style="letter-spacing:-0.5px;" data-v-ce349056><tspan font-style="italic" data-v-ce349056>f</tspan><tspan data-v-ce349056>=e</tspan><tspan baseline-shift="super" font-size="7" data-v-ce349056>−γ(t−t₀)²</tspan><tspan font-style="italic" data-v-ce349056>e</tspan><tspan baseline-shift="super" font-size="7" data-v-ce349056>iωt</tspan></text>',1)])],8,lc),x("path",{d:u.value,fill:"none",stroke:"url(#pv-helixGradient)","stroke-width":"4"},null,8,rc),x("line",{x1:te.value.x,y1:te.value.y,x2:Ue.value.x,y2:Ue.value.y,stroke:"#06b6d4","stroke-width":"1","stroke-dasharray":"6,4",class:"pv-dash-flow",opacity:"0.7"},null,8,ac),x("line",{x1:te.value.x,y1:te.value.y,x2:We.value.x,y2:We.value.y,stroke:"#f97316","stroke-width":"1","stroke-dasharray":"6,4",class:"pv-dash-flow",opacity:"0.7"},null,8,cc),x("line",{x1:me.value.x,y1:me.value.y,x2:ie.value.x,y2:ie.value.y,stroke:"url(#pv-axisGradient)","stroke-width":"2"},null,8,fc),x("polygon",{points:`${ie.value.x-6},${ie.value.y+6} ${ie.value.x+6},${ie.value.y-2} ${ie.value.x+2},${ie.value.y+10}`,fill:"#94a3b8"},null,8,uc),x("line",{x1:K.value.x,y1:K.value.y+8,x2:ee.value.x,y2:ee.value.y,stroke:"url(#pv-axisGradient)","stroke-width":"2"},null,8,dc),x("polygon",{points:`${ee.value.x},${ee.value.y-8} ${ee.value.x-4},${ee.value.y+2} ${ee.value.x+4},${ee.value.y+2}`,fill:"#94a3b8"},null,8,pc),x("line",{x1:K.value.x-8,y1:K.value.y-5,x2:Z.value.x,y2:Z.value.y,stroke:"url(#pv-axisGradient)","stroke-width":"2"},null,8,vc),x("polygon",{points:`${Z.value.x+8},${Z.value.y+4} ${Z.value.x-2},${Z.value.y-4} ${Z.value.x-4},${Z.value.y+6}`,fill:"#94a3b8"},null,8,hc),x("g",{transform:`translate(${ut.value.x+30}, ${ut.value.y-70}) rotate(${At.value})`},[...I[3]||(I[3]=[x("text",{fill:"#e879f9","font-size":"10","font-family":"Times New Roman, serif","text-anchor":"middle",style:{"letter-spacing":"-0.5px"}},[x("tspan",{"font-style":"italic"},"f(t)"),x("tspan",null,"=Re+"),x("tspan",{"font-style":"italic"},"i"),x("tspan",null,"·Im")],-1)])],8,mc),x("circle",{cx:te.value.x,cy:te.value.y,r:"10",fill:"url(#pv-helixGradient)",opacity:"0.3",class:"pv-point-pulse"},null,8,gc),x("circle",{cx:te.value.x,cy:te.value.y,r:"6",fill:"#fff"},null,8,bc),x("circle",{cx:te.value.x,cy:te.value.y,r:"3",fill:"url(#pv-helixGradient)"},null,8,xc),x("text",{x:ee.value.x-30,y:ee.value.y+8,fill:"#22d3d3","font-size":"18","font-weight":"bold","font-family":"serif"},"Im",8,yc),x("text",{x:Z.value.x+10,y:Z.value.y+6,fill:"#fb923c","font-size":"18","font-weight":"bold","font-family":"serif"},"Re",8,_c),x("text",{x:ie.value.x-3,y:ie.value.y+22,fill:"#c084fc","font-size":"18","font-style":"italic","font-family":"serif"},"t",8,wc),x("text",{x:K.value.x+5,y:K.value.y+20,fill:"#94a3b8","font-size":"13","font-style":"italic","font-family":"serif"},"t₀",8,Sc)]))]),x("div",zc,[x("div",Ac,[x("span",Tc,[I[5]||(I[5]=x("span",{class:"pv-values-f"},"f",-1)),I[6]||(I[6]=x("span",{class:"pv-values-punctuation"},"(",-1)),I[7]||(I[7]=x("span",{class:"pv-values-t"},"t",-1)),I[8]||(I[8]=x("span",{class:"pv-values-punctuation"},") = ",-1)),x("span",Cc,Xe(r.value>=0?"+":"")+Xe(r.value.toFixed(2)),1),I[9]||(I[9]=x("span",{class:"pv-values-punctuation"}," + ",-1)),x("span",Ec,Xe(c.value.toFixed(2)),1),I[10]||(I[10]=x("span",{class:"pv-values-i"}," i",-1))])]),x("div",Rc,[x("span",kc,[I[11]||(I[11]=x("span",{class:"pv-values-time-t"},"t",-1)),I[12]||(I[12]=x("span",{class:"pv-values-time-punctuation"}," = ",-1)),x("span",Ic,Xe((t.value/Mc).toFixed(2)),1),I[13]||(I[13]=x("span",{class:"pv-values-time-punctuation"},null,-1)),I[14]||(I[14]=x("span",{class:"pv-values-time-period"},"T",-1))])])])]))}}),[["__scopeId","data-v-ce349056"]]),Pc={class:"app-container"},Nc={class:"c-controls"},Fc={class:"c-controls-row"},Lc=["value"],Dc=["value"],$c={key:0,class:"c-slider-container"},Bc=["value"],jc={class:"c-slider-label"},Hc={class:"c-foreground-layer"};kr(Jn({__name:"App",setup(e){const t=je(!0),n=je(23),s=je(0),o=je(50),i=je(!1),l=je(!1);let r=null;const c=()=>{r&&(clearTimeout(r),r=null),l.value=!0},d=()=>{r=window.setTimeout(()=>{l.value=!1,r=null},1e3)},u=()=>{r&&(clearTimeout(r),r=null),l.value=!1},v=[{value:0,label:"Mandelbulb"},{value:1,label:"Mandelbox"},{value:2,label:"Menger Sponge"},{value:3,label:"Sierpinski"},{value:4,label:"Kaleidoscope 3D"},{value:5,label:"Organic Hybrid"},{value:6,label:"Fractal Land"},{value:7,label:"+ Galaxy Nebula"},{value:8,label:"+ Infinite Tunnel"},{value:9,label:"+ Plasma Fractal"},{value:10,label:"+ Circuits"},{value:11,label:"+ Metaballs"},{value:12,label:"+ Volumetric Lines"},{value:13,label:"+ Disco Tunnel"},{value:14,label:"+ Speed Drive"},{value:15,label:"+ Hot Rocks"},{value:16,label:"+ Server Room"},{value:17,label:"+ Remnant X"},{value:18,label:"+ Kali Set"},{value:19,label:"+ Generators"},{value:20,label:"+ Simplicity Galaxy"},{value:21,label:"+ Ribbons"},{value:22,label:"+ Twisted Rings"},{value:23,label:"+ Waves Remix"},{value:24,label:"+ Dancing Metalights"},{value:25,label:"+ IO Blocks"},{value:26,label:"+ Beating Circles"},{value:27,label:"+ Circle Wave"},{value:28,label:"+ Soundflower"},{value:29,label:"+ Polar Beats"},{value:30,label:"+ Undulant Spectre"},{value:31,label:"+ Revision 2015"},{value:32,label:"+ Gameboy Style"},{value:33,label:"+ Electric Storm"},{value:34,label:"+ Vortex"},{value:35,label:"+ Neon Grid"},{value:36,label:"+ Matrix Rain"},{value:37,label:"+ Fire"},{value:38,label:"+ Aurora"},{value:39,label:"+ Wormhole"},{value:40,label:"+ Hexagons"},{value:41,label:"+ Bubbles"},{value:42,label:"+ Lightning"},{value:43,label:"+ Kaleidoscope 2D"},{value:44,label:"+ Starfield"},{value:45,label:"+ Liquid Metal"},{value:46,label:"+ Fractal Tree"},{value:47,label:"+ Voronoi"},{value:48,label:"+ Psychedelic"},{value:49,label:"+ Energy Field"}],z=B(()=>({opacity:o.value/100,filter:`brightness(${.3+o.value/100*.7})`})),C=()=>{t.value=!t.value},T=()=>{i.value=!i.value},E=O=>{const L=O.target;n.value=parseInt(L.value),s.value++},V=O=>{const L=O.target;o.value=parseInt(L.value)};return(O,L)=>(tt(),_t("div",Pc,[x("div",Nc,[x("button",{class:Ye(["c-menu-toggle",{"c-menu-toggle--open":i.value}]),onClick:T}," ☰ ",2),x("div",{class:Ye(["c-menu-panel",{"c-menu-panel--visible":i.value}])},[x("div",Fc,[x("select",{class:"c-fractal-select",onChange:E,value:n.value},[(tt(),_t(we,null,gl(v,R=>x("option",{key:R.value,value:R.value},Xe(R.label),9,Dc)),64))],40,Lc),x("button",{class:"c-fractal-toggle",onClick:C},Xe(t.value?"ON":"OFF"),1)]),t.value?(tt(),_t("div",$c,[L[0]||(L[0]=x("span",{class:"c-slider-label"},"Intensity",-1)),x("input",{type:"range",class:"c-brightness-slider",min:"10",max:"100",value:o.value,onInput:V},null,40,Bc),x("span",jc,Xe(o.value)+"%",1)])):Oo("",!0)],2)]),x("div",{class:Ye(["c-background-layer",{"c-background-layer--hidden":!t.value}]),style:Jt(z.value)},[t.value?(tt(),ko(Oa,{key:s.value,mode:n.value},null,8,["mode"])):Oo("",!0)],6),x("div",Hc,[Se(Oc)]),x("div",{class:"c-nav-footer",onMouseenter:c,onMouseleave:d},[x("button",{class:Ye(["c-nav-toggle",{"c-nav-toggle--open":l.value}]),onClick:u},[...L[1]||(L[1]=[x("span",{class:"c-nav-arrow"},"↑",-1)])],2),x("div",{class:Ye(["c-nav-menu",{"c-nav-menu--visible":l.value}])},[...L[2]||(L[2]=[x("a",{href:"https://diegonmarcos.github.io/myprofile/",class:"c-nav-button",target:"_blank",rel:"noopener noreferrer"}," Profile ",-1),x("a",{href:"https://diegonmarcos.github.io/linktree/",class:"c-nav-button",target:"_blank",rel:"noopener noreferrer"}," Linktree ",-1),x("a",{href:"https://diegonmarcos.github.io/landpage/",class:"c-nav-button",target:"_blank",rel:"noopener noreferrer"}," Landpage ",-1)])],2)],32)]))}})).mount("#app")})();
