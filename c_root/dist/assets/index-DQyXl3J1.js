(function(){"use strict";var ps=document.createElement("style");ps.textContent=`.bio-fractal-canvas[data-v-c9463404]{width:100%;height:100%;display:block}@keyframes pv-shimmer-295f2c94{0%,to{opacity:.6}50%{opacity:1}}@keyframes pv-glow-pulse-295f2c94{0%,to{filter:drop-shadow(0 0 3px currentColor)}50%{filter:drop-shadow(0 0 12px currentColor)}}@keyframes pv-dash-flow-295f2c94{0%{stroke-dashoffset:0}to{stroke-dashoffset:-20}}@keyframes pv-point-pulse-295f2c94{0%,to{r:6;opacity:1}50%{r:9;opacity:.8}}.pv-shimmer[data-v-295f2c94]{animation:pv-shimmer-295f2c94 2s ease-in-out infinite}.pv-glow-pulse[data-v-295f2c94]{animation:pv-glow-pulse-295f2c94 1.5s ease-in-out infinite}.pv-dash-flow[data-v-295f2c94]{animation:pv-dash-flow-295f2c94 1s linear infinite}.pv-point-pulse[data-v-295f2c94]{animation:pv-point-pulse-295f2c94 .8s ease-in-out infinite}.pv-container[data-v-295f2c94]{width:100%;height:100%;display:flex;flex-direction:column;align-items:center;justify-content:center;padding:10px;overflow:hidden;background:transparent}.pv-title[data-v-295f2c94]{text-align:center;margin-bottom:8px;padding:0 10px;width:100%;max-width:520px}.pv-title h1[data-v-295f2c94],.pv-title h2[data-v-295f2c94]{font-size:clamp(.85rem,3vw,1.1rem);font-weight:700;line-height:1.3;margin:0;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.pv-title-gradient-1[data-v-295f2c94]{background:linear-gradient(to right,#a855f7,#ec4899,#22d3ee);-webkit-background-clip:text;-webkit-text-fill-color:transparent;background-clip:text}.pv-title-gradient-2[data-v-295f2c94]{background:linear-gradient(to right,#22d3ee,#a855f7,#ec4899);-webkit-background-clip:text;-webkit-text-fill-color:transparent;background-clip:text}.pv-svg-container[data-v-295f2c94]{position:relative;width:100%;max-width:520px;height:auto;aspect-ratio:520/480;flex-shrink:1}.pv-svg-container svg[data-v-295f2c94]{width:100%;height:100%}.pv-values[data-v-295f2c94]{margin-top:8px;width:100%;max-width:360px;text-align:center;padding:0 10px}.pv-values-main[data-v-295f2c94]{text-align:center;margin-bottom:12px}.pv-values-text[data-v-295f2c94]{font-size:1.25rem;font-family:Times New Roman,serif}.pv-values-f[data-v-295f2c94]{color:#a855f7;font-style:italic}.pv-values-punctuation[data-v-295f2c94]{color:#d1d5db}.pv-values-t[data-v-295f2c94]{color:#a855f7;font-style:italic}.pv-values-real[data-v-295f2c94]{color:#fb923c}.pv-values-imag[data-v-295f2c94]{color:#22d3d3}.pv-values-i[data-v-295f2c94]{color:#22d3d3;font-style:italic}.pv-values-time[data-v-295f2c94]{text-align:center}.pv-values-time-text[data-v-295f2c94]{font-size:1.125rem;font-family:Times New Roman,serif}.pv-values-time-t[data-v-295f2c94]{color:#a855f7;font-style:italic}.pv-values-time-punctuation[data-v-295f2c94]{color:#9ca3af}.pv-values-time-value[data-v-295f2c94]{color:#d1d5db}.pv-values-time-period[data-v-295f2c94]{color:#a855f7;font-style:italic}*{box-sizing:border-box;margin:0;padding:0}html,body{width:100%;height:100%;overflow:hidden}body{background-color:#000;font-family:-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,sans-serif;color:#fff}button{border:none;background:none;padding:0;cursor:pointer;font:inherit}select{font-family:-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,sans-serif}canvas{display:block}.o-fullscreen{width:100%;height:100%;position:relative}.o-layer{position:absolute;top:0;left:0;width:100%;height:100%}.o-layer--background{z-index:0}.o-layer--foreground{z-index:1;display:flex;align-items:center;justify-content:center;pointer-events:none}.o-fixed{position:fixed}.c-background-layer{position:absolute;top:0;left:0;width:100%;height:100%;z-index:0;transition-property:opacity,filter;transition-duration:.3s;transition-timing-function:ease}.c-background-layer--hidden{opacity:0!important;pointer-events:none}.c-background-layer canvas{width:100%!important;height:100%!important}.c-foreground-layer{position:absolute;top:0;left:0;width:100%;height:100%;z-index:1;display:flex;align-items:center;justify-content:center;pointer-events:none}.c-controls{position:fixed;top:10px;right:10px;z-index:100;display:flex;flex-direction:column;gap:8px;align-items:flex-end}.c-menu-toggle{background:#ffffff26;-webkit-backdrop-filter:blur(4px);backdrop-filter:blur(4px);transition-property:background,transform;transition-duration:.3s;transition-timing-function:ease;border:1px solid rgba(255,255,255,.3);color:#fff;width:36px;height:36px;border-radius:8px;font-size:18px;display:flex;align-items:center;justify-content:center}.c-menu-toggle:hover{background:#ffffff40}.c-menu-toggle--open{transform:rotate(90deg)}.c-menu-panel{display:flex;flex-direction:column;gap:8px;align-items:flex-end;max-height:0;overflow:hidden;opacity:0;transition-property:max-height,opacity;transition-duration:.3s;transition-timing-function:ease}.c-menu-panel--visible{max-height:200px;opacity:1}.c-controls-row{display:flex;gap:8px;align-items:center}.c-fractal-toggle{background:#ffffff1a;-webkit-backdrop-filter:blur(4px);backdrop-filter:blur(4px);transition-property:background;transition-duration:.3s;transition-timing-function:ease;border:1px solid rgba(255,255,255,.3);color:#fff;padding:8px 12px;border-radius:6px;font-size:12px}.c-fractal-toggle:hover{background:#fff3}.c-fractal-select{background:#ffffff1a;-webkit-backdrop-filter:blur(4px);backdrop-filter:blur(4px);border:1px solid rgba(255,255,255,.3);color:#fff;padding:8px 28px 8px 12px;border-radius:6px;font-size:12px;outline:none;-webkit-appearance:none;-moz-appearance:none;appearance:none;background-image:url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' fill='white' viewBox='0 0 16 16'%3E%3Cpath d='M8 11L3 6h10l-5 5z'/%3E%3C/svg%3E");background-repeat:no-repeat;background-position:right 8px center;transition-property:background-color;transition-duration:.3s;transition-timing-function:ease}.c-fractal-select:hover{background-color:#fff3}.c-fractal-select option{background:#1a1a2e;color:#fff}.c-slider-container{background:#ffffff1a;-webkit-backdrop-filter:blur(4px);backdrop-filter:blur(4px);display:flex;align-items:center;gap:8px;border:1px solid rgba(255,255,255,.3);padding:6px 12px;border-radius:6px}.c-slider-label{color:#fff;font-size:11px;white-space:nowrap}.c-brightness-slider{-webkit-appearance:none;-moz-appearance:none;appearance:none;width:80px;height:4px;border-radius:2px;background:#ffffff4d;outline:none;cursor:pointer}.c-brightness-slider::-webkit-slider-thumb{-webkit-appearance:none;-moz-appearance:none;appearance:none;width:14px;height:14px;border-radius:50%;background:#fff;cursor:pointer;box-shadow:0 1px 3px #0000004d}.c-brightness-slider::-moz-range-thumb{width:14px;height:14px;border-radius:50%;background:#fff;cursor:pointer;border:none}.u-hidden{display:none!important}.u-invisible{visibility:hidden!important}.u-no-pointer{pointer-events:none!important}.u-pointer{pointer-events:auto!important}#app,.app-container{width:100%;height:100%;position:relative}
/*$vite$:1*/`,document.head.appendChild(ps);/**
* @vue/shared v3.5.27
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function Tn(e){const t=Object.create(null);for(const n of e.split(","))t[n]=1;return n=>n in t}const U={},dt=[],ze=()=>{},vs=()=>!1,Kt=e=>e.charCodeAt(0)===111&&e.charCodeAt(1)===110&&(e.charCodeAt(2)>122||e.charCodeAt(2)<97),En=e=>e.startsWith("onUpdate:"),se=Object.assign,Cn=(e,t)=>{const n=e.indexOf(t);n>-1&&e.splice(n,1)},no=Object.prototype.hasOwnProperty,B=(e,t)=>no.call(e,t),F=Array.isArray,pt=e=>qt(e)==="[object Map]",hs=e=>qt(e)==="[object Set]",N=e=>typeof e=="function",Q=e=>typeof e=="string",We=e=>typeof e=="symbol",Y=e=>e!==null&&typeof e=="object",ms=e=>(Y(e)||N(e))&&N(e.then)&&N(e.catch),gs=Object.prototype.toString,qt=e=>gs.call(e),so=e=>qt(e).slice(8,-1),xs=e=>qt(e)==="[object Object]",Rn=e=>Q(e)&&e!=="NaN"&&e[0]!=="-"&&""+parseInt(e,10)===e,Et=Tn(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),Yt=e=>{const t=Object.create(null);return n=>t[n]||(t[n]=e(n))},io=/-\w/g,Ve=Yt(e=>e.replace(io,t=>t.slice(1).toUpperCase())),oo=/\B([A-Z])/g,it=Yt(e=>e.replace(oo,"-$1").toLowerCase()),bs=Yt(e=>e.charAt(0).toUpperCase()+e.slice(1)),In=Yt(e=>e?`on${bs(e)}`:""),Ke=(e,t)=>!Object.is(e,t),Mn=(e,...t)=>{for(let n=0;n<e.length;n++)e[n](...t)},_s=(e,t,n,s=!1)=>{Object.defineProperty(e,t,{configurable:!0,enumerable:!1,writable:s,value:n})},lo=e=>{const t=parseFloat(e);return isNaN(t)?e:t};let ys;const Xt=()=>ys||(ys=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function Jt(e){if(F(e)){const t={};for(let n=0;n<e.length;n++){const s=e[n],i=Q(s)?fo(s):Jt(s);if(i)for(const o in i)t[o]=i[o]}return t}else if(Q(e)||Y(e))return e}const ro=/;(?![^(]*\))/g,ao=/:([^]+)/,co=/\/\*[^]*?\*\//g;function fo(e){const t={};return e.replace(co,"").split(ro).forEach(n=>{if(n){const s=n.split(ao);s.length>1&&(t[s[0].trim()]=s[1].trim())}}),t}function vt(e){let t="";if(Q(e))t=e;else if(F(e))for(let n=0;n<e.length;n++){const s=vt(e[n]);s&&(t+=s+" ")}else if(Y(e))for(const n in e)e[n]&&(t+=n+" ");return t.trim()}const uo=Tn("itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly");function ws(e){return!!e||e===""}const Ss=e=>!!(e&&e.__v_isRef===!0),qe=e=>Q(e)?e:e==null?"":F(e)||Y(e)&&(e.toString===gs||!N(e.toString))?Ss(e)?qe(e.value):JSON.stringify(e,zs,2):String(e),zs=(e,t)=>Ss(t)?zs(e,t.value):pt(t)?{[`Map(${t.size})`]:[...t.entries()].reduce((n,[s,i],o)=>(n[kn(s,o)+" =>"]=i,n),{})}:hs(t)?{[`Set(${t.size})`]:[...t.values()].map(n=>kn(n))}:We(t)?kn(t):Y(t)&&!F(t)&&!xs(t)?String(t):t,kn=(e,t="")=>{var n;return We(e)?`Symbol(${(n=e.description)!=null?n:t})`:e};/**
* @vue/reactivity v3.5.27
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let ue;class po{constructor(t=!1){this.detached=t,this._active=!0,this._on=0,this.effects=[],this.cleanups=[],this._isPaused=!1,this.parent=ue,!t&&ue&&(this.index=(ue.scopes||(ue.scopes=[])).push(this)-1)}get active(){return this._active}pause(){if(this._active){this._isPaused=!0;let t,n;if(this.scopes)for(t=0,n=this.scopes.length;t<n;t++)this.scopes[t].pause();for(t=0,n=this.effects.length;t<n;t++)this.effects[t].pause()}}resume(){if(this._active&&this._isPaused){this._isPaused=!1;let t,n;if(this.scopes)for(t=0,n=this.scopes.length;t<n;t++)this.scopes[t].resume();for(t=0,n=this.effects.length;t<n;t++)this.effects[t].resume()}}run(t){if(this._active){const n=ue;try{return ue=this,t()}finally{ue=n}}}on(){++this._on===1&&(this.prevScope=ue,ue=this)}off(){this._on>0&&--this._on===0&&(ue=this.prevScope,this.prevScope=void 0)}stop(t){if(this._active){this._active=!1;let n,s;for(n=0,s=this.effects.length;n<s;n++)this.effects[n].stop();for(this.effects.length=0,n=0,s=this.cleanups.length;n<s;n++)this.cleanups[n]();if(this.cleanups.length=0,this.scopes){for(n=0,s=this.scopes.length;n<s;n++)this.scopes[n].stop(!0);this.scopes.length=0}if(!this.detached&&this.parent&&!t){const i=this.parent.scopes.pop();i&&i!==this&&(this.parent.scopes[this.index]=i,i.index=this.index)}this.parent=void 0}}}function vo(){return ue}let W;const On=new WeakSet;class As{constructor(t){this.fn=t,this.deps=void 0,this.depsTail=void 0,this.flags=5,this.next=void 0,this.cleanup=void 0,this.scheduler=void 0,ue&&ue.active&&ue.effects.push(this)}pause(){this.flags|=64}resume(){this.flags&64&&(this.flags&=-65,On.has(this)&&(On.delete(this),this.trigger()))}notify(){this.flags&2&&!(this.flags&32)||this.flags&8||Es(this)}run(){if(!(this.flags&1))return this.fn();this.flags|=2,ks(this),Cs(this);const t=W,n=_e;W=this,_e=!0;try{return this.fn()}finally{Rs(this),W=t,_e=n,this.flags&=-3}}stop(){if(this.flags&1){for(let t=this.deps;t;t=t.nextDep)Ln(t);this.deps=this.depsTail=void 0,ks(this),this.onStop&&this.onStop(),this.flags&=-2}}trigger(){this.flags&64?On.add(this):this.scheduler?this.scheduler():this.runIfDirty()}runIfDirty(){Fn(this)&&this.run()}get dirty(){return Fn(this)}}let Ts=0,Ct,Rt;function Es(e,t=!1){if(e.flags|=8,t){e.next=Rt,Rt=e;return}e.next=Ct,Ct=e}function Pn(){Ts++}function Nn(){if(--Ts>0)return;if(Rt){let t=Rt;for(Rt=void 0;t;){const n=t.next;t.next=void 0,t.flags&=-9,t=n}}let e;for(;Ct;){let t=Ct;for(Ct=void 0;t;){const n=t.next;if(t.next=void 0,t.flags&=-9,t.flags&1)try{t.trigger()}catch(s){e||(e=s)}t=n}}if(e)throw e}function Cs(e){for(let t=e.deps;t;t=t.nextDep)t.version=-1,t.prevActiveLink=t.dep.activeLink,t.dep.activeLink=t}function Rs(e){let t,n=e.depsTail,s=n;for(;s;){const i=s.prevDep;s.version===-1?(s===n&&(n=i),Ln(s),ho(s)):t=s,s.dep.activeLink=s.prevActiveLink,s.prevActiveLink=void 0,s=i}e.deps=t,e.depsTail=n}function Fn(e){for(let t=e.deps;t;t=t.nextDep)if(t.dep.version!==t.version||t.dep.computed&&(Is(t.dep.computed)||t.dep.version!==t.version))return!0;return!!e._dirty}function Is(e){if(e.flags&4&&!(e.flags&16)||(e.flags&=-17,e.globalVersion===It)||(e.globalVersion=It,!e.isSSR&&e.flags&128&&(!e.deps&&!e._dirty||!Fn(e))))return;e.flags|=2;const t=e.dep,n=W,s=_e;W=e,_e=!0;try{Cs(e);const i=e.fn(e._value);(t.version===0||Ke(i,e._value))&&(e.flags|=128,e._value=i,t.version++)}catch(i){throw t.version++,i}finally{W=n,_e=s,Rs(e),e.flags&=-3}}function Ln(e,t=!1){const{dep:n,prevSub:s,nextSub:i}=e;if(s&&(s.nextSub=i,e.prevSub=void 0),i&&(i.prevSub=s,e.nextSub=void 0),n.subs===e&&(n.subs=s,!s&&n.computed)){n.computed.flags&=-5;for(let o=n.computed.deps;o;o=o.nextDep)Ln(o,!0)}!t&&!--n.sc&&n.map&&n.map.delete(n.key)}function ho(e){const{prevDep:t,nextDep:n}=e;t&&(t.nextDep=n,e.prevDep=void 0),n&&(n.prevDep=t,e.nextDep=void 0)}let _e=!0;const Ms=[];function Ae(){Ms.push(_e),_e=!1}function Te(){const e=Ms.pop();_e=e===void 0?!0:e}function ks(e){const{cleanup:t}=e;if(e.cleanup=void 0,t){const n=W;W=void 0;try{t()}finally{W=n}}}let It=0;class mo{constructor(t,n){this.sub=t,this.dep=n,this.version=n.version,this.nextDep=this.prevDep=this.nextSub=this.prevSub=this.prevActiveLink=void 0}}class Dn{constructor(t){this.computed=t,this.version=0,this.activeLink=void 0,this.subs=void 0,this.map=void 0,this.key=void 0,this.sc=0,this.__v_skip=!0}track(t){if(!W||!_e||W===this.computed)return;let n=this.activeLink;if(n===void 0||n.sub!==W)n=this.activeLink=new mo(W,this),W.deps?(n.prevDep=W.depsTail,W.depsTail.nextDep=n,W.depsTail=n):W.deps=W.depsTail=n,Os(n);else if(n.version===-1&&(n.version=this.version,n.nextDep)){const s=n.nextDep;s.prevDep=n.prevDep,n.prevDep&&(n.prevDep.nextDep=s),n.prevDep=W.depsTail,n.nextDep=void 0,W.depsTail.nextDep=n,W.depsTail=n,W.deps===n&&(W.deps=s)}return n}trigger(t){this.version++,It++,this.notify(t)}notify(t){Pn();try{for(let n=this.subs;n;n=n.prevSub)n.sub.notify()&&n.sub.dep.notify()}finally{Nn()}}}function Os(e){if(e.dep.sc++,e.sub.flags&4){const t=e.dep.computed;if(t&&!e.dep.subs){t.flags|=20;for(let s=t.deps;s;s=s.nextDep)Os(s)}const n=e.dep.subs;n!==e&&(e.prevSub=n,n&&(n.nextSub=e)),e.dep.subs=e}}const $n=new WeakMap,ot=Symbol(""),Bn=Symbol(""),Mt=Symbol("");function re(e,t,n){if(_e&&W){let s=$n.get(e);s||$n.set(e,s=new Map);let i=s.get(n);i||(s.set(n,i=new Dn),i.map=s,i.key=n),i.track()}}function De(e,t,n,s,i,o){const l=$n.get(e);if(!l){It++;return}const r=c=>{c&&c.trigger()};if(Pn(),t==="clear")l.forEach(r);else{const c=F(e),d=c&&Rn(n);if(c&&n==="length"){const u=Number(s);l.forEach((v,z)=>{(z==="length"||z===Mt||!We(z)&&z>=u)&&r(v)})}else switch((n!==void 0||l.has(void 0))&&r(l.get(n)),d&&r(l.get(Mt)),t){case"add":c?d&&r(l.get("length")):(r(l.get(ot)),pt(e)&&r(l.get(Bn)));break;case"delete":c||(r(l.get(ot)),pt(e)&&r(l.get(Bn)));break;case"set":pt(e)&&r(l.get(ot));break}}Nn()}function ht(e){const t=D(e);return t===e?t:(re(t,"iterate",Mt),be(e)?t:t.map(ye))}function Qt(e){return re(e=D(e),"iterate",Mt),e}function Ye(e,t){return Be(e)?mt(lt(e)?ye(t):t):ye(t)}const go={__proto__:null,[Symbol.iterator](){return jn(this,Symbol.iterator,e=>Ye(this,e))},concat(...e){return ht(this).concat(...e.map(t=>F(t)?ht(t):t))},entries(){return jn(this,"entries",e=>(e[1]=Ye(this,e[1]),e))},every(e,t){return $e(this,"every",e,t,void 0,arguments)},filter(e,t){return $e(this,"filter",e,t,n=>n.map(s=>Ye(this,s)),arguments)},find(e,t){return $e(this,"find",e,t,n=>Ye(this,n),arguments)},findIndex(e,t){return $e(this,"findIndex",e,t,void 0,arguments)},findLast(e,t){return $e(this,"findLast",e,t,n=>Ye(this,n),arguments)},findLastIndex(e,t){return $e(this,"findLastIndex",e,t,void 0,arguments)},forEach(e,t){return $e(this,"forEach",e,t,void 0,arguments)},includes(...e){return Hn(this,"includes",e)},indexOf(...e){return Hn(this,"indexOf",e)},join(e){return ht(this).join(e)},lastIndexOf(...e){return Hn(this,"lastIndexOf",e)},map(e,t){return $e(this,"map",e,t,void 0,arguments)},pop(){return kt(this,"pop")},push(...e){return kt(this,"push",e)},reduce(e,...t){return Ps(this,"reduce",e,t)},reduceRight(e,...t){return Ps(this,"reduceRight",e,t)},shift(){return kt(this,"shift")},some(e,t){return $e(this,"some",e,t,void 0,arguments)},splice(...e){return kt(this,"splice",e)},toReversed(){return ht(this).toReversed()},toSorted(e){return ht(this).toSorted(e)},toSpliced(...e){return ht(this).toSpliced(...e)},unshift(...e){return kt(this,"unshift",e)},values(){return jn(this,"values",e=>Ye(this,e))}};function jn(e,t,n){const s=Qt(e),i=s[t]();return s!==e&&!be(e)&&(i._next=i.next,i.next=()=>{const o=i._next();return o.done||(o.value=n(o.value)),o}),i}const xo=Array.prototype;function $e(e,t,n,s,i,o){const l=Qt(e),r=l!==e&&!be(e),c=l[t];if(c!==xo[t]){const v=c.apply(e,o);return r?ye(v):v}let d=n;l!==e&&(r?d=function(v,z){return n.call(this,Ye(e,v),z,e)}:n.length>2&&(d=function(v,z){return n.call(this,v,z,e)}));const u=c.call(l,d,s);return r&&i?i(u):u}function Ps(e,t,n,s){const i=Qt(e);let o=n;return i!==e&&(be(e)?n.length>3&&(o=function(l,r,c){return n.call(this,l,r,c,e)}):o=function(l,r,c){return n.call(this,l,Ye(e,r),c,e)}),i[t](o,...s)}function Hn(e,t,n){const s=D(e);re(s,"iterate",Mt);const i=s[t](...n);return(i===-1||i===!1)&&Vn(n[0])?(n[0]=D(n[0]),s[t](...n)):i}function kt(e,t,n=[]){Ae(),Pn();const s=D(e)[t].apply(e,n);return Nn(),Te(),s}const bo=Tn("__proto__,__v_isRef,__isVue"),Ns=new Set(Object.getOwnPropertyNames(Symbol).filter(e=>e!=="arguments"&&e!=="caller").map(e=>Symbol[e]).filter(We));function _o(e){We(e)||(e=String(e));const t=D(this);return re(t,"has",e),t.hasOwnProperty(e)}class Fs{constructor(t=!1,n=!1){this._isReadonly=t,this._isShallow=n}get(t,n,s){if(n==="__v_skip")return t.__v_skip;const i=this._isReadonly,o=this._isShallow;if(n==="__v_isReactive")return!i;if(n==="__v_isReadonly")return i;if(n==="__v_isShallow")return o;if(n==="__v_raw")return s===(i?o?Hs:js:o?Bs:$s).get(t)||Object.getPrototypeOf(t)===Object.getPrototypeOf(s)?t:void 0;const l=F(t);if(!i){let c;if(l&&(c=go[n]))return c;if(n==="hasOwnProperty")return _o}const r=Reflect.get(t,n,ie(t)?t:s);if((We(n)?Ns.has(n):bo(n))||(i||re(t,"get",n),o))return r;if(ie(r)){const c=l&&Rn(n)?r:r.value;return i&&Y(c)?Wn(c):c}return Y(r)?i?Wn(r):Un(r):r}}class Ls extends Fs{constructor(t=!1){super(!1,t)}set(t,n,s,i){let o=t[n];const l=F(t)&&Rn(n);if(!this._isShallow){const d=Be(o);if(!be(s)&&!Be(s)&&(o=D(o),s=D(s)),!l&&ie(o)&&!ie(s))return d||(o.value=s),!0}const r=l?Number(n)<t.length:B(t,n),c=Reflect.set(t,n,s,ie(t)?t:i);return t===D(i)&&(r?Ke(s,o)&&De(t,"set",n,s):De(t,"add",n,s)),c}deleteProperty(t,n){const s=B(t,n);t[n];const i=Reflect.deleteProperty(t,n);return i&&s&&De(t,"delete",n,void 0),i}has(t,n){const s=Reflect.has(t,n);return(!We(n)||!Ns.has(n))&&re(t,"has",n),s}ownKeys(t){return re(t,"iterate",F(t)?"length":ot),Reflect.ownKeys(t)}}class Ds extends Fs{constructor(t=!1){super(!0,t)}set(t,n){return!0}deleteProperty(t,n){return!0}}const yo=new Ls,wo=new Ds,So=new Ls(!0),zo=new Ds(!0),Gn=e=>e,Zt=e=>Reflect.getPrototypeOf(e);function Ao(e,t,n){return function(...s){const i=this.__v_raw,o=D(i),l=pt(o),r=e==="entries"||e===Symbol.iterator&&l,c=e==="keys"&&l,d=i[e](...s),u=n?Gn:t?mt:ye;return!t&&re(o,"iterate",c?Bn:ot),se(Object.create(d),{next(){const{value:v,done:z}=d.next();return z?{value:v,done:z}:{value:r?[u(v[0]),u(v[1])]:u(v),done:z}}})}}function en(e){return function(...t){return e==="delete"?!1:e==="clear"?void 0:this}}function To(e,t){const n={get(i){const o=this.__v_raw,l=D(o),r=D(i);e||(Ke(i,r)&&re(l,"get",i),re(l,"get",r));const{has:c}=Zt(l),d=t?Gn:e?mt:ye;if(c.call(l,i))return d(o.get(i));if(c.call(l,r))return d(o.get(r));o!==l&&o.get(i)},get size(){const i=this.__v_raw;return!e&&re(D(i),"iterate",ot),i.size},has(i){const o=this.__v_raw,l=D(o),r=D(i);return e||(Ke(i,r)&&re(l,"has",i),re(l,"has",r)),i===r?o.has(i):o.has(i)||o.has(r)},forEach(i,o){const l=this,r=l.__v_raw,c=D(r),d=t?Gn:e?mt:ye;return!e&&re(c,"iterate",ot),r.forEach((u,v)=>i.call(o,d(u),d(v),l))}};return se(n,e?{add:en("add"),set:en("set"),delete:en("delete"),clear:en("clear")}:{add(i){!t&&!be(i)&&!Be(i)&&(i=D(i));const o=D(this);return Zt(o).has.call(o,i)||(o.add(i),De(o,"add",i,i)),this},set(i,o){!t&&!be(o)&&!Be(o)&&(o=D(o));const l=D(this),{has:r,get:c}=Zt(l);let d=r.call(l,i);d||(i=D(i),d=r.call(l,i));const u=c.call(l,i);return l.set(i,o),d?Ke(o,u)&&De(l,"set",i,o):De(l,"add",i,o),this},delete(i){const o=D(this),{has:l,get:r}=Zt(o);let c=l.call(o,i);c||(i=D(i),c=l.call(o,i)),r&&r.call(o,i);const d=o.delete(i);return c&&De(o,"delete",i,void 0),d},clear(){const i=D(this),o=i.size!==0,l=i.clear();return o&&De(i,"clear",void 0,void 0),l}}),["keys","values","entries",Symbol.iterator].forEach(i=>{n[i]=Ao(i,e,t)}),n}function tn(e,t){const n=To(e,t);return(s,i,o)=>i==="__v_isReactive"?!e:i==="__v_isReadonly"?e:i==="__v_raw"?s:Reflect.get(B(n,i)&&i in s?n:s,i,o)}const Eo={get:tn(!1,!1)},Co={get:tn(!1,!0)},Ro={get:tn(!0,!1)},Io={get:tn(!0,!0)},$s=new WeakMap,Bs=new WeakMap,js=new WeakMap,Hs=new WeakMap;function Mo(e){switch(e){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function ko(e){return e.__v_skip||!Object.isExtensible(e)?0:Mo(so(e))}function Un(e){return Be(e)?e:nn(e,!1,yo,Eo,$s)}function Oo(e){return nn(e,!1,So,Co,Bs)}function Wn(e){return nn(e,!0,wo,Ro,js)}function Uc(e){return nn(e,!0,zo,Io,Hs)}function nn(e,t,n,s,i){if(!Y(e)||e.__v_raw&&!(t&&e.__v_isReactive))return e;const o=ko(e);if(o===0)return e;const l=i.get(e);if(l)return l;const r=new Proxy(e,o===2?s:n);return i.set(e,r),r}function lt(e){return Be(e)?lt(e.__v_raw):!!(e&&e.__v_isReactive)}function Be(e){return!!(e&&e.__v_isReadonly)}function be(e){return!!(e&&e.__v_isShallow)}function Vn(e){return e?!!e.__v_raw:!1}function D(e){const t=e&&e.__v_raw;return t?D(t):e}function Po(e){return!B(e,"__v_skip")&&Object.isExtensible(e)&&_s(e,"__v_skip",!0),e}const ye=e=>Y(e)?Un(e):e,mt=e=>Y(e)?Wn(e):e;function ie(e){return e?e.__v_isRef===!0:!1}function Xe(e){return No(e,!1)}function No(e,t){return ie(e)?e:new Fo(e,t)}class Fo{constructor(t,n){this.dep=new Dn,this.__v_isRef=!0,this.__v_isShallow=!1,this._rawValue=n?t:D(t),this._value=n?t:ye(t),this.__v_isShallow=n}get value(){return this.dep.track(),this._value}set value(t){const n=this._rawValue,s=this.__v_isShallow||be(t)||Be(t);t=s?t:D(t),Ke(t,n)&&(this._rawValue=t,this._value=s?t:ye(t),this.dep.trigger())}}function Lo(e){return ie(e)?e.value:e}const Do={get:(e,t,n)=>t==="__v_raw"?e:Lo(Reflect.get(e,t,n)),set:(e,t,n,s)=>{const i=e[t];return ie(i)&&!ie(n)?(i.value=n,!0):Reflect.set(e,t,n,s)}};function Gs(e){return lt(e)?e:new Proxy(e,Do)}class $o{constructor(t,n,s){this.fn=t,this.setter=n,this._value=void 0,this.dep=new Dn(this),this.__v_isRef=!0,this.deps=void 0,this.depsTail=void 0,this.flags=16,this.globalVersion=It-1,this.next=void 0,this.effect=this,this.__v_isReadonly=!n,this.isSSR=s}notify(){if(this.flags|=16,!(this.flags&8)&&W!==this)return Es(this,!0),!0}get value(){const t=this.dep.track();return Is(this),t&&(t.version=this.dep.version),this._value}set value(t){this.setter&&this.setter(t)}}function Bo(e,t,n=!1){let s,i;return N(e)?s=e:(s=e.get,i=e.set),new $o(s,i,n)}const sn={},on=new WeakMap;let rt;function jo(e,t=!1,n=rt){if(n){let s=on.get(n);s||on.set(n,s=[]),s.push(e)}}function Ho(e,t,n=U){const{immediate:s,deep:i,once:o,scheduler:l,augmentJob:r,call:c}=n,d=w=>i?w:be(w)||i===!1||i===0?Je(w,1):Je(w);let u,v,z,T,E=!1,C=!1;if(ie(e)?(v=()=>e.value,E=be(e)):lt(e)?(v=()=>d(e),E=!0):F(e)?(C=!0,E=e.some(w=>lt(w)||be(w)),v=()=>e.map(w=>{if(ie(w))return w.value;if(lt(w))return d(w);if(N(w))return c?c(w,2):w()})):N(e)?t?v=c?()=>c(e,2):e:v=()=>{if(z){Ae();try{z()}finally{Te()}}const w=rt;rt=u;try{return c?c(e,3,[T]):e(T)}finally{rt=w}}:v=ze,t&&i){const w=v,V=i===!0?1/0:i;v=()=>Je(w(),V)}const X=vo(),P=()=>{u.stop(),X&&X.active&&Cn(X.effects,u)};if(o&&t){const w=t;t=(...V)=>{w(...V),P()}}let j=C?new Array(e.length).fill(sn):sn;const k=w=>{if(!(!(u.flags&1)||!u.dirty&&!w))if(t){const V=u.run();if(i||E||(C?V.some((ee,Z)=>Ke(ee,j[Z])):Ke(V,j))){z&&z();const ee=rt;rt=u;try{const Z=[V,j===sn?void 0:C&&j[0]===sn?[]:j,T];j=V,c?c(t,3,Z):t(...Z)}finally{rt=ee}}}else u.run()};return r&&r(k),u=new As(v),u.scheduler=l?()=>l(k,!1):k,T=w=>jo(w,!1,u),z=u.onStop=()=>{const w=on.get(u);if(w){if(c)c(w,4);else for(const V of w)V();on.delete(u)}},t?s?k(!0):j=u.run():l?l(k.bind(null,!0),!0):u.run(),P.pause=u.pause.bind(u),P.resume=u.resume.bind(u),P.stop=P,P}function Je(e,t=1/0,n){if(t<=0||!Y(e)||e.__v_skip||(n=n||new Map,(n.get(e)||0)>=t))return e;if(n.set(e,t),t--,ie(e))Je(e.value,t,n);else if(F(e))for(let s=0;s<e.length;s++)Je(e[s],t,n);else if(hs(e)||pt(e))e.forEach(s=>{Je(s,t,n)});else if(xs(e)){for(const s in e)Je(e[s],t,n);for(const s of Object.getOwnPropertySymbols(e))Object.prototype.propertyIsEnumerable.call(e,s)&&Je(e[s],t,n)}return e}/**
* @vue/runtime-core v3.5.27
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/const Ot=[];let Kn=!1;function Wc(e,...t){if(Kn)return;Kn=!0,Ae();const n=Ot.length?Ot[Ot.length-1].component:null,s=n&&n.appContext.config.warnHandler,i=Go();if(s)gt(s,n,11,[e+t.map(o=>{var l,r;return(r=(l=o.toString)==null?void 0:l.call(o))!=null?r:JSON.stringify(o)}).join(""),n&&n.proxy,i.map(({vnode:o})=>`at <${Li(n,o.type)}>`).join(`
`),i]);else{const o=[`[Vue warn]: ${e}`,...t];i.length&&o.push(`
`,...Uo(i)),console.warn(...o)}Te(),Kn=!1}function Go(){let e=Ot[Ot.length-1];if(!e)return[];const t=[];for(;e;){const n=t[0];n&&n.vnode===e?n.recurseCount++:t.push({vnode:e,recurseCount:0});const s=e.component&&e.component.parent;e=s&&s.vnode}return t}function Uo(e){const t=[];return e.forEach((n,s)=>{t.push(...s===0?[]:[`
`],...Wo(n))}),t}function Wo({vnode:e,recurseCount:t}){const n=t>0?`... (${t} recursive calls)`:"",s=e.component?e.component.parent==null:!1,i=` at <${Li(e.component,e.type,s)}`,o=">"+n;return e.props?[i,...Vo(e.props),o]:[i+o]}function Vo(e){const t=[],n=Object.keys(e);return n.slice(0,3).forEach(s=>{t.push(...Us(s,e[s]))}),n.length>3&&t.push(" ..."),t}function Us(e,t,n){return Q(t)?(t=JSON.stringify(t),n?t:[`${e}=${t}`]):typeof t=="number"||typeof t=="boolean"||t==null?n?t:[`${e}=${t}`]:ie(t)?(t=Us(e,D(t.value),!0),n?t:[`${e}=Ref<`,t,">"]):N(t)?[`${e}=fn${t.name?`<${t.name}>`:""}`]:(t=D(t),n?t:[`${e}=`,t])}function gt(e,t,n,s){try{return s?e(...s):e()}catch(i){ln(i,t,n)}}function Ee(e,t,n,s){if(N(e)){const i=gt(e,t,n,s);return i&&ms(i)&&i.catch(o=>{ln(o,t,n)}),i}if(F(e)){const i=[];for(let o=0;o<e.length;o++)i.push(Ee(e[o],t,n,s));return i}}function ln(e,t,n,s=!0){const i=t?t.vnode:null,{errorHandler:o,throwUnhandledErrorInProduction:l}=t&&t.appContext.config||U;if(t){let r=t.parent;const c=t.proxy,d=`https://vuejs.org/error-reference/#runtime-${n}`;for(;r;){const u=r.ec;if(u){for(let v=0;v<u.length;v++)if(u[v](e,c,d)===!1)return}r=r.parent}if(o){Ae(),gt(o,null,10,[e,c,d]),Te();return}}Ko(e,n,i,s,l)}function Ko(e,t,n,s=!0,i=!1){if(i)throw e;console.error(e)}const ae=[];let Ce=-1;const xt=[];let Qe=null,bt=0;const Ws=Promise.resolve();let rn=null;function qo(e){const t=rn||Ws;return e?t.then(this?e.bind(this):e):t}function Yo(e){let t=Ce+1,n=ae.length;for(;t<n;){const s=t+n>>>1,i=ae[s],o=Pt(i);o<e||o===e&&i.flags&2?t=s+1:n=s}return t}function qn(e){if(!(e.flags&1)){const t=Pt(e),n=ae[ae.length-1];!n||!(e.flags&2)&&t>=Pt(n)?ae.push(e):ae.splice(Yo(t),0,e),e.flags|=1,Vs()}}function Vs(){rn||(rn=Ws.then(Ys))}function Xo(e){F(e)?xt.push(...e):Qe&&e.id===-1?Qe.splice(bt+1,0,e):e.flags&1||(xt.push(e),e.flags|=1),Vs()}function Ks(e,t,n=Ce+1){for(;n<ae.length;n++){const s=ae[n];if(s&&s.flags&2){if(e&&s.id!==e.uid)continue;ae.splice(n,1),n--,s.flags&4&&(s.flags&=-2),s(),s.flags&4||(s.flags&=-2)}}}function qs(e){if(xt.length){const t=[...new Set(xt)].sort((n,s)=>Pt(n)-Pt(s));if(xt.length=0,Qe){Qe.push(...t);return}for(Qe=t,bt=0;bt<Qe.length;bt++){const n=Qe[bt];n.flags&4&&(n.flags&=-2),n.flags&8||n(),n.flags&=-2}Qe=null,bt=0}}const Pt=e=>e.id==null?e.flags&2?-1:1/0:e.id;function Ys(e){try{for(Ce=0;Ce<ae.length;Ce++){const t=ae[Ce];t&&!(t.flags&8)&&(t.flags&4&&(t.flags&=-2),gt(t,t.i,t.i?15:14),t.flags&4||(t.flags&=-2))}}finally{for(;Ce<ae.length;Ce++){const t=ae[Ce];t&&(t.flags&=-2)}Ce=-1,ae.length=0,qs(),rn=null,(ae.length||xt.length)&&Ys()}}let Re=null,Xs=null;function an(e){const t=Re;return Re=e,Xs=e&&e.type.__scopeId||null,t}function Jo(e,t=Re,n){if(!t||e._n)return e;const s=(...i)=>{s._d&&Ei(-1);const o=an(t);let l;try{l=e(...i)}finally{an(o),s._d&&Ei(1)}return l};return s._n=!0,s._c=!0,s._d=!0,s}function at(e,t,n,s){const i=e.dirs,o=t&&t.dirs;for(let l=0;l<i.length;l++){const r=i[l];o&&(r.oldValue=o[l].value);let c=r.dir[s];c&&(Ae(),Ee(c,n,8,[e.el,r,e,t]),Te())}}function Qo(e,t){if(fe){let n=fe.provides;const s=fe.parent&&fe.parent.provides;s===n&&(n=fe.provides=Object.create(s)),n[e]=t}}function cn(e,t,n=!1){const s=Ql();if(s||_t){let i=_t?_t._context.provides:s?s.parent==null||s.ce?s.vnode.appContext&&s.vnode.appContext.provides:s.parent.provides:void 0;if(i&&e in i)return i[e];if(arguments.length>1)return n&&N(t)?t.call(s&&s.proxy):t}}const Zo=Symbol.for("v-scx"),el=()=>cn(Zo);function Yn(e,t,n){return Js(e,t,n)}function Js(e,t,n=U){const{immediate:s,deep:i,flush:o,once:l}=n,r=se({},n),c=t&&s||!t&&o!=="post";let d;if(Gt){if(o==="sync"){const T=el();d=T.__watcherHandles||(T.__watcherHandles=[])}else if(!c){const T=()=>{};return T.stop=ze,T.resume=ze,T.pause=ze,T}}const u=fe;r.call=(T,E,C)=>Ee(T,u,E,C);let v=!1;o==="post"?r.scheduler=T=>{ve(T,u&&u.suspense)}:o!=="sync"&&(v=!0,r.scheduler=(T,E)=>{E?T():qn(T)}),r.augmentJob=T=>{t&&(T.flags|=4),v&&(T.flags|=2,u&&(T.id=u.uid,T.i=u))};const z=Ho(e,t,r);return Gt&&(d?d.push(z):c&&z()),z}function tl(e,t,n){const s=this.proxy,i=Q(e)?e.includes(".")?Qs(s,e):()=>s[e]:e.bind(s,s);let o;N(t)?o=t:(o=t.handler,n=t);const l=Ht(this),r=Js(i,o.bind(s),n);return l(),r}function Qs(e,t){const n=t.split(".");return()=>{let s=e;for(let i=0;i<n.length&&s;i++)s=s[n[i]];return s}}const nl=Symbol("_vte"),sl=e=>e.__isTeleport,il=Symbol("_leaveCb");function Xn(e,t){e.shapeFlag&6&&e.component?(e.transition=t,Xn(e.component.subTree,t)):e.shapeFlag&128?(e.ssContent.transition=t.clone(e.ssContent),e.ssFallback.transition=t.clone(e.ssFallback)):e.transition=t}function Jn(e,t){return N(e)?se({name:e.name},t,{setup:e}):e}function Zs(e){e.ids=[e.ids[0]+e.ids[2]+++"-",0,0]}const fn=new WeakMap;function Nt(e,t,n,s,i=!1){if(F(e)){e.forEach((E,C)=>Nt(E,t&&(F(t)?t[C]:t),n,s,i));return}if(Ft(s)&&!i){s.shapeFlag&512&&s.type.__asyncResolved&&s.component.subTree.component&&Nt(e,t,n,s.component.subTree);return}const o=s.shapeFlag&4?cs(s.component):s.el,l=i?null:o,{i:r,r:c}=e,d=t&&t.r,u=r.refs===U?r.refs={}:r.refs,v=r.setupState,z=D(v),T=v===U?vs:E=>B(z,E);if(d!=null&&d!==c){if(ei(t),Q(d))u[d]=null,T(d)&&(v[d]=null);else if(ie(d)){d.value=null;const E=t;E.k&&(u[E.k]=null)}}if(N(c))gt(c,r,12,[l,u]);else{const E=Q(c),C=ie(c);if(E||C){const X=()=>{if(e.f){const P=E?T(c)?v[c]:u[c]:c.value;if(i)F(P)&&Cn(P,o);else if(F(P))P.includes(o)||P.push(o);else if(E)u[c]=[o],T(c)&&(v[c]=u[c]);else{const j=[o];c.value=j,e.k&&(u[e.k]=j)}}else E?(u[c]=l,T(c)&&(v[c]=l)):C&&(c.value=l,e.k&&(u[e.k]=l))};if(l){const P=()=>{X(),fn.delete(e)};P.id=-1,fn.set(e,P),ve(P,n)}else ei(e),X()}}}function ei(e){const t=fn.get(e);t&&(t.flags|=8,fn.delete(e))}Xt().requestIdleCallback,Xt().cancelIdleCallback;const Ft=e=>!!e.type.__asyncLoader,ti=e=>e.type.__isKeepAlive;function ol(e,t){ni(e,"a",t)}function ll(e,t){ni(e,"da",t)}function ni(e,t,n=fe){const s=e.__wdc||(e.__wdc=()=>{let i=n;for(;i;){if(i.isDeactivated)return;i=i.parent}return e()});if(un(t,s,n),n){let i=n.parent;for(;i&&i.parent;)ti(i.parent.vnode)&&rl(s,t,n,i),i=i.parent}}function rl(e,t,n,s){const i=un(t,e,s,!0);dn(()=>{Cn(s[t],i)},n)}function un(e,t,n=fe,s=!1){if(n){const i=n[e]||(n[e]=[]),o=t.__weh||(t.__weh=(...l)=>{Ae();const r=Ht(n),c=Ee(t,n,e,l);return r(),Te(),c});return s?i.unshift(o):i.push(o),o}}const je=e=>(t,n=fe)=>{(!Gt||e==="sp")&&un(e,(...s)=>t(...s),n)},al=je("bm"),Qn=je("m"),cl=je("bu"),fl=je("u"),ul=je("bum"),dn=je("um"),dl=je("sp"),pl=je("rtg"),vl=je("rtc");function hl(e,t=fe){un("ec",e,t)}const ml=Symbol.for("v-ndc");function gl(e,t,n,s){let i;const o=n,l=F(e);if(l||Q(e)){const r=l&&lt(e);let c=!1,d=!1;r&&(c=!be(e),d=Be(e),e=Qt(e)),i=new Array(e.length);for(let u=0,v=e.length;u<v;u++)i[u]=t(c?d?mt(ye(e[u])):ye(e[u]):e[u],u,void 0,o)}else if(typeof e=="number"){i=new Array(e);for(let r=0;r<e;r++)i[r]=t(r+1,r,void 0,o)}else if(Y(e))if(e[Symbol.iterator])i=Array.from(e,(r,c)=>t(r,c,void 0,o));else{const r=Object.keys(e);i=new Array(r.length);for(let c=0,d=r.length;c<d;c++){const u=r[c];i[c]=t(e[u],u,c,o)}}else i=[];return i}const Zn=e=>e?Pi(e)?cs(e):Zn(e.parent):null,Lt=se(Object.create(null),{$:e=>e,$el:e=>e.vnode.el,$data:e=>e.data,$props:e=>e.props,$attrs:e=>e.attrs,$slots:e=>e.slots,$refs:e=>e.refs,$parent:e=>Zn(e.parent),$root:e=>Zn(e.root),$host:e=>e.ce,$emit:e=>e.emit,$options:e=>li(e),$forceUpdate:e=>e.f||(e.f=()=>{qn(e.update)}),$nextTick:e=>e.n||(e.n=qo.bind(e.proxy)),$watch:e=>tl.bind(e)}),es=(e,t)=>e!==U&&!e.__isScriptSetup&&B(e,t),xl={get({_:e},t){if(t==="__v_skip")return!0;const{ctx:n,setupState:s,data:i,props:o,accessCache:l,type:r,appContext:c}=e;if(t[0]!=="$"){const z=l[t];if(z!==void 0)switch(z){case 1:return s[t];case 2:return i[t];case 4:return n[t];case 3:return o[t]}else{if(es(s,t))return l[t]=1,s[t];if(i!==U&&B(i,t))return l[t]=2,i[t];if(B(o,t))return l[t]=3,o[t];if(n!==U&&B(n,t))return l[t]=4,n[t];ts&&(l[t]=0)}}const d=Lt[t];let u,v;if(d)return t==="$attrs"&&re(e.attrs,"get",""),d(e);if((u=r.__cssModules)&&(u=u[t]))return u;if(n!==U&&B(n,t))return l[t]=4,n[t];if(v=c.config.globalProperties,B(v,t))return v[t]},set({_:e},t,n){const{data:s,setupState:i,ctx:o}=e;return es(i,t)?(i[t]=n,!0):s!==U&&B(s,t)?(s[t]=n,!0):B(e.props,t)||t[0]==="$"&&t.slice(1)in e?!1:(o[t]=n,!0)},has({_:{data:e,setupState:t,accessCache:n,ctx:s,appContext:i,props:o,type:l}},r){let c;return!!(n[r]||e!==U&&r[0]!=="$"&&B(e,r)||es(t,r)||B(o,r)||B(s,r)||B(Lt,r)||B(i.config.globalProperties,r)||(c=l.__cssModules)&&c[r])},defineProperty(e,t,n){return n.get!=null?e._.accessCache[t]=0:B(n,"value")&&this.set(e,t,n.value,null),Reflect.defineProperty(e,t,n)}};function si(e){return F(e)?e.reduce((t,n)=>(t[n]=null,t),{}):e}let ts=!0;function bl(e){const t=li(e),n=e.proxy,s=e.ctx;ts=!1,t.beforeCreate&&ii(t.beforeCreate,e,"bc");const{data:i,computed:o,methods:l,watch:r,provide:c,inject:d,created:u,beforeMount:v,mounted:z,beforeUpdate:T,updated:E,activated:C,deactivated:X,beforeDestroy:P,beforeUnmount:j,destroyed:k,unmounted:w,render:V,renderTracked:ee,renderTriggered:Z,errorCaptured:me,serverPrefetch:oe,expose:te,inheritAttrs:st,components:Ge,directives:Ue,filters:At}=t;if(d&&_l(d,s,null),l)for(const K in l){const G=l[K];N(G)&&(s[K]=G.bind(n))}if(i){const K=i.call(n,n);Y(K)&&(e.data=Un(K))}if(ts=!0,o)for(const K in o){const G=o[K],Oe=N(G)?G.bind(n,n):N(G.get)?G.get.bind(n,n):ze,ft=!N(G)&&N(G.set)?G.set.bind(n):ze,Pe=$({get:Oe,set:ft});Object.defineProperty(s,K,{enumerable:!0,configurable:!0,get:()=>Pe.value,set:ge=>Pe.value=ge})}if(r)for(const K in r)oi(r[K],s,n,K);if(c){const K=N(c)?c.call(n):c;Reflect.ownKeys(K).forEach(G=>{Qo(G,K[G])})}u&&ii(u,e,"c");function le(K,G){F(G)?G.forEach(Oe=>K(Oe.bind(n))):G&&K(G.bind(n))}if(le(al,v),le(Qn,z),le(cl,T),le(fl,E),le(ol,C),le(ll,X),le(hl,me),le(vl,ee),le(pl,Z),le(ul,j),le(dn,w),le(dl,oe),F(te))if(te.length){const K=e.exposed||(e.exposed={});te.forEach(G=>{Object.defineProperty(K,G,{get:()=>n[G],set:Oe=>n[G]=Oe,enumerable:!0})})}else e.exposed||(e.exposed={});V&&e.render===ze&&(e.render=V),st!=null&&(e.inheritAttrs=st),Ge&&(e.components=Ge),Ue&&(e.directives=Ue),oe&&Zs(e)}function _l(e,t,n=ze){F(e)&&(e=ns(e));for(const s in e){const i=e[s];let o;Y(i)?"default"in i?o=cn(i.from||s,i.default,!0):o=cn(i.from||s):o=cn(i),ie(o)?Object.defineProperty(t,s,{enumerable:!0,configurable:!0,get:()=>o.value,set:l=>o.value=l}):t[s]=o}}function ii(e,t,n){Ee(F(e)?e.map(s=>s.bind(t.proxy)):e.bind(t.proxy),t,n)}function oi(e,t,n,s){let i=s.includes(".")?Qs(n,s):()=>n[s];if(Q(e)){const o=t[e];N(o)&&Yn(i,o)}else if(N(e))Yn(i,e.bind(n));else if(Y(e))if(F(e))e.forEach(o=>oi(o,t,n,s));else{const o=N(e.handler)?e.handler.bind(n):t[e.handler];N(o)&&Yn(i,o,e)}}function li(e){const t=e.type,{mixins:n,extends:s}=t,{mixins:i,optionsCache:o,config:{optionMergeStrategies:l}}=e.appContext,r=o.get(t);let c;return r?c=r:!i.length&&!n&&!s?c=t:(c={},i.length&&i.forEach(d=>pn(c,d,l,!0)),pn(c,t,l)),Y(t)&&o.set(t,c),c}function pn(e,t,n,s=!1){const{mixins:i,extends:o}=t;o&&pn(e,o,n,!0),i&&i.forEach(l=>pn(e,l,n,!0));for(const l in t)if(!(s&&l==="expose")){const r=yl[l]||n&&n[l];e[l]=r?r(e[l],t[l]):t[l]}return e}const yl={data:ri,props:ai,emits:ai,methods:Dt,computed:Dt,beforeCreate:ce,created:ce,beforeMount:ce,mounted:ce,beforeUpdate:ce,updated:ce,beforeDestroy:ce,beforeUnmount:ce,destroyed:ce,unmounted:ce,activated:ce,deactivated:ce,errorCaptured:ce,serverPrefetch:ce,components:Dt,directives:Dt,watch:Sl,provide:ri,inject:wl};function ri(e,t){return t?e?function(){return se(N(e)?e.call(this,this):e,N(t)?t.call(this,this):t)}:t:e}function wl(e,t){return Dt(ns(e),ns(t))}function ns(e){if(F(e)){const t={};for(let n=0;n<e.length;n++)t[e[n]]=e[n];return t}return e}function ce(e,t){return e?[...new Set([].concat(e,t))]:t}function Dt(e,t){return e?se(Object.create(null),e,t):t}function ai(e,t){return e?F(e)&&F(t)?[...new Set([...e,...t])]:se(Object.create(null),si(e),si(t??{})):t}function Sl(e,t){if(!e)return t;if(!t)return e;const n=se(Object.create(null),e);for(const s in t)n[s]=ce(e[s],t[s]);return n}function ci(){return{app:null,config:{isNativeTag:vs,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let zl=0;function Al(e,t){return function(s,i=null){N(s)||(s=se({},s)),i!=null&&!Y(i)&&(i=null);const o=ci(),l=new WeakSet,r=[];let c=!1;const d=o.app={_uid:zl++,_component:s,_props:i,_container:null,_context:o,_instance:null,version:rr,get config(){return o.config},set config(u){},use(u,...v){return l.has(u)||(u&&N(u.install)?(l.add(u),u.install(d,...v)):N(u)&&(l.add(u),u(d,...v))),d},mixin(u){return o.mixins.includes(u)||o.mixins.push(u),d},component(u,v){return v?(o.components[u]=v,d):o.components[u]},directive(u,v){return v?(o.directives[u]=v,d):o.directives[u]},mount(u,v,z){if(!c){const T=d._ceVNode||Se(s,i);return T.appContext=o,z===!0?z="svg":z===!1&&(z=void 0),e(T,u,z),c=!0,d._container=u,u.__vue_app__=d,cs(T.component)}},onUnmount(u){r.push(u)},unmount(){c&&(Ee(r,d._instance,16),e(null,d._container),delete d._container.__vue_app__)},provide(u,v){return o.provides[u]=v,d},runWithContext(u){const v=_t;_t=d;try{return u()}finally{_t=v}}};return d}}let _t=null;const Tl=(e,t)=>t==="modelValue"||t==="model-value"?e.modelModifiers:e[`${t}Modifiers`]||e[`${Ve(t)}Modifiers`]||e[`${it(t)}Modifiers`];function El(e,t,...n){if(e.isUnmounted)return;const s=e.vnode.props||U;let i=n;const o=t.startsWith("update:"),l=o&&Tl(s,t.slice(7));l&&(l.trim&&(i=n.map(u=>Q(u)?u.trim():u)),l.number&&(i=n.map(lo)));let r,c=s[r=In(t)]||s[r=In(Ve(t))];!c&&o&&(c=s[r=In(it(t))]),c&&Ee(c,e,6,i);const d=s[r+"Once"];if(d){if(!e.emitted)e.emitted={};else if(e.emitted[r])return;e.emitted[r]=!0,Ee(d,e,6,i)}}const Cl=new WeakMap;function fi(e,t,n=!1){const s=n?Cl:t.emitsCache,i=s.get(e);if(i!==void 0)return i;const o=e.emits;let l={},r=!1;if(!N(e)){const c=d=>{const u=fi(d,t,!0);u&&(r=!0,se(l,u))};!n&&t.mixins.length&&t.mixins.forEach(c),e.extends&&c(e.extends),e.mixins&&e.mixins.forEach(c)}return!o&&!r?(Y(e)&&s.set(e,null),null):(F(o)?o.forEach(c=>l[c]=null):se(l,o),Y(e)&&s.set(e,l),l)}function vn(e,t){return!e||!Kt(t)?!1:(t=t.slice(2).replace(/Once$/,""),B(e,t[0].toLowerCase()+t.slice(1))||B(e,it(t))||B(e,t))}function Vc(){}function ui(e){const{type:t,vnode:n,proxy:s,withProxy:i,propsOptions:[o],slots:l,attrs:r,emit:c,render:d,renderCache:u,props:v,data:z,setupState:T,ctx:E,inheritAttrs:C}=e,X=an(e);let P,j;try{if(n.shapeFlag&4){const w=i||s,V=w;P=Ie(d.call(V,w,u,v,T,z,E)),j=r}else{const w=t;P=Ie(w.length>1?w(v,{attrs:r,slots:l,emit:c}):w(v,null)),j=t.props?r:Rl(r)}}catch(w){$t.length=0,ln(w,e,1),P=Se(Ze)}let k=P;if(j&&C!==!1){const w=Object.keys(j),{shapeFlag:V}=k;w.length&&V&7&&(o&&w.some(En)&&(j=Il(j,o)),k=wt(k,j,!1,!0))}return n.dirs&&(k=wt(k,null,!1,!0),k.dirs=k.dirs?k.dirs.concat(n.dirs):n.dirs),n.transition&&Xn(k,n.transition),P=k,an(X),P}const Rl=e=>{let t;for(const n in e)(n==="class"||n==="style"||Kt(n))&&((t||(t={}))[n]=e[n]);return t},Il=(e,t)=>{const n={};for(const s in e)(!En(s)||!(s.slice(9)in t))&&(n[s]=e[s]);return n};function Ml(e,t,n){const{props:s,children:i,component:o}=e,{props:l,children:r,patchFlag:c}=t,d=o.emitsOptions;if(t.dirs||t.transition)return!0;if(n&&c>=0){if(c&1024)return!0;if(c&16)return s?di(s,l,d):!!l;if(c&8){const u=t.dynamicProps;for(let v=0;v<u.length;v++){const z=u[v];if(l[z]!==s[z]&&!vn(d,z))return!0}}}else return(i||r)&&(!r||!r.$stable)?!0:s===l?!1:s?l?di(s,l,d):!0:!!l;return!1}function di(e,t,n){const s=Object.keys(t);if(s.length!==Object.keys(e).length)return!0;for(let i=0;i<s.length;i++){const o=s[i];if(t[o]!==e[o]&&!vn(n,o))return!0}return!1}function kl({vnode:e,parent:t},n){for(;t;){const s=t.subTree;if(s.suspense&&s.suspense.activeBranch===e&&(s.el=e.el),s===e)(e=t.vnode).el=n,t=t.parent;else break}}const pi={},vi=()=>Object.create(pi),hi=e=>Object.getPrototypeOf(e)===pi;function Ol(e,t,n,s=!1){const i={},o=vi();e.propsDefaults=Object.create(null),mi(e,t,i,o);for(const l in e.propsOptions[0])l in i||(i[l]=void 0);n?e.props=s?i:Oo(i):e.type.props?e.props=i:e.props=o,e.attrs=o}function Pl(e,t,n,s){const{props:i,attrs:o,vnode:{patchFlag:l}}=e,r=D(i),[c]=e.propsOptions;let d=!1;if((s||l>0)&&!(l&16)){if(l&8){const u=e.vnode.dynamicProps;for(let v=0;v<u.length;v++){let z=u[v];if(vn(e.emitsOptions,z))continue;const T=t[z];if(c)if(B(o,z))T!==o[z]&&(o[z]=T,d=!0);else{const E=Ve(z);i[E]=ss(c,r,E,T,e,!1)}else T!==o[z]&&(o[z]=T,d=!0)}}}else{mi(e,t,i,o)&&(d=!0);let u;for(const v in r)(!t||!B(t,v)&&((u=it(v))===v||!B(t,u)))&&(c?n&&(n[v]!==void 0||n[u]!==void 0)&&(i[v]=ss(c,r,v,void 0,e,!0)):delete i[v]);if(o!==r)for(const v in o)(!t||!B(t,v))&&(delete o[v],d=!0)}d&&De(e.attrs,"set","")}function mi(e,t,n,s){const[i,o]=e.propsOptions;let l=!1,r;if(t)for(let c in t){if(Et(c))continue;const d=t[c];let u;i&&B(i,u=Ve(c))?!o||!o.includes(u)?n[u]=d:(r||(r={}))[u]=d:vn(e.emitsOptions,c)||(!(c in s)||d!==s[c])&&(s[c]=d,l=!0)}if(o){const c=D(n),d=r||U;for(let u=0;u<o.length;u++){const v=o[u];n[v]=ss(i,c,v,d[v],e,!B(d,v))}}return l}function ss(e,t,n,s,i,o){const l=e[n];if(l!=null){const r=B(l,"default");if(r&&s===void 0){const c=l.default;if(l.type!==Function&&!l.skipFactory&&N(c)){const{propsDefaults:d}=i;if(n in d)s=d[n];else{const u=Ht(i);s=d[n]=c.call(null,t),u()}}else s=c;i.ce&&i.ce._setProp(n,s)}l[0]&&(o&&!r?s=!1:l[1]&&(s===""||s===it(n))&&(s=!0))}return s}const Nl=new WeakMap;function gi(e,t,n=!1){const s=n?Nl:t.propsCache,i=s.get(e);if(i)return i;const o=e.props,l={},r=[];let c=!1;if(!N(e)){const u=v=>{c=!0;const[z,T]=gi(v,t,!0);se(l,z),T&&r.push(...T)};!n&&t.mixins.length&&t.mixins.forEach(u),e.extends&&u(e.extends),e.mixins&&e.mixins.forEach(u)}if(!o&&!c)return Y(e)&&s.set(e,dt),dt;if(F(o))for(let u=0;u<o.length;u++){const v=Ve(o[u]);xi(v)&&(l[v]=U)}else if(o)for(const u in o){const v=Ve(u);if(xi(v)){const z=o[u],T=l[v]=F(z)||N(z)?{type:z}:se({},z),E=T.type;let C=!1,X=!0;if(F(E))for(let P=0;P<E.length;++P){const j=E[P],k=N(j)&&j.name;if(k==="Boolean"){C=!0;break}else k==="String"&&(X=!1)}else C=N(E)&&E.name==="Boolean";T[0]=C,T[1]=X,(C||B(T,"default"))&&r.push(v)}}const d=[l,r];return Y(e)&&s.set(e,d),d}function xi(e){return e[0]!=="$"&&!Et(e)}const is=e=>e==="_"||e==="_ctx"||e==="$stable",os=e=>F(e)?e.map(Ie):[Ie(e)],Fl=(e,t,n)=>{if(t._n)return t;const s=Jo((...i)=>os(t(...i)),n);return s._c=!1,s},bi=(e,t,n)=>{const s=e._ctx;for(const i in e){if(is(i))continue;const o=e[i];if(N(o))t[i]=Fl(i,o,s);else if(o!=null){const l=os(o);t[i]=()=>l}}},_i=(e,t)=>{const n=os(t);e.slots.default=()=>n},yi=(e,t,n)=>{for(const s in t)(n||!is(s))&&(e[s]=t[s])},Ll=(e,t,n)=>{const s=e.slots=vi();if(e.vnode.shapeFlag&32){const i=t._;i?(yi(s,t,n),n&&_s(s,"_",i,!0)):bi(t,s)}else t&&_i(e,t)},Dl=(e,t,n)=>{const{vnode:s,slots:i}=e;let o=!0,l=U;if(s.shapeFlag&32){const r=t._;r?n&&r===1?o=!1:yi(i,t,n):(o=!t.$stable,bi(t,i)),l=t}else t&&(_i(e,t),l={default:1});if(o)for(const r in i)!is(r)&&l[r]==null&&delete i[r]},ve=Gl;function $l(e){return Bl(e)}function Bl(e,t){const n=Xt();n.__VUE__=!0;const{insert:s,remove:i,patchProp:o,createElement:l,createText:r,createComment:c,setText:d,setElementText:u,parentNode:v,nextSibling:z,setScopeId:T=ze,insertStaticContent:E}=e,C=(a,f,p,x=null,h=null,m=null,S=void 0,y=null,_=!!f.dynamicChildren)=>{if(a===f)return;a&&!jt(a,f)&&(x=Wt(a),ge(a,h,m,!0),a=null),f.patchFlag===-2&&(_=!1,f.dynamicChildren=null);const{type:g,ref:M,shapeFlag:A}=f;switch(g){case hn:X(a,f,p,x);break;case Ze:P(a,f,p,x);break;case mn:a==null&&j(f,p,x,S);break;case we:Ge(a,f,p,x,h,m,S,y,_);break;default:A&1?V(a,f,p,x,h,m,S,y,_):A&6?Ue(a,f,p,x,h,m,S,y,_):(A&64||A&128)&&g.process(a,f,p,x,h,m,S,y,_,ut)}M!=null&&h?Nt(M,a&&a.ref,m,f||a,!f):M==null&&a&&a.ref!=null&&Nt(a.ref,null,m,a,!0)},X=(a,f,p,x)=>{if(a==null)s(f.el=r(f.children),p,x);else{const h=f.el=a.el;f.children!==a.children&&d(h,f.children)}},P=(a,f,p,x)=>{a==null?s(f.el=c(f.children||""),p,x):f.el=a.el},j=(a,f,p,x)=>{[a.el,a.anchor]=E(a.children,f,p,x,a.el,a.anchor)},k=({el:a,anchor:f},p,x)=>{let h;for(;a&&a!==f;)h=z(a),s(a,p,x),a=h;s(f,p,x)},w=({el:a,anchor:f})=>{let p;for(;a&&a!==f;)p=z(a),i(a),a=p;i(f)},V=(a,f,p,x,h,m,S,y,_)=>{if(f.type==="svg"?S="svg":f.type==="math"&&(S="mathml"),a==null)ee(f,p,x,h,m,S,y,_);else{const g=a.el&&a.el._isVueCE?a.el:null;try{g&&g._beginPatch(),oe(a,f,h,m,S,y,_)}finally{g&&g._endPatch()}}},ee=(a,f,p,x,h,m,S,y)=>{let _,g;const{props:M,shapeFlag:A,transition:R,dirs:O}=a;if(_=a.el=l(a.type,m,M&&M.is,M),A&8?u(_,a.children):A&16&&me(a.children,_,null,x,h,ls(a,m),S,y),O&&at(a,null,x,"created"),Z(_,a,a.scopeId,S,x),M){for(const q in M)q!=="value"&&!Et(q)&&o(_,q,null,M[q],m,x);"value"in M&&o(_,"value",null,M.value,m),(g=M.onVnodeBeforeMount)&&Me(g,x,a)}O&&at(a,null,x,"beforeMount");const L=jl(h,R);L&&R.beforeEnter(_),s(_,f,p),((g=M&&M.onVnodeMounted)||L||O)&&ve(()=>{g&&Me(g,x,a),L&&R.enter(_),O&&at(a,null,x,"mounted")},h)},Z=(a,f,p,x,h)=>{if(p&&T(a,p),x)for(let m=0;m<x.length;m++)T(a,x[m]);if(h){let m=h.subTree;if(f===m||Ti(m.type)&&(m.ssContent===f||m.ssFallback===f)){const S=h.vnode;Z(a,S,S.scopeId,S.slotScopeIds,h.parent)}}},me=(a,f,p,x,h,m,S,y,_=0)=>{for(let g=_;g<a.length;g++){const M=a[g]=y?tt(a[g]):Ie(a[g]);C(null,M,f,p,x,h,m,S,y)}},oe=(a,f,p,x,h,m,S)=>{const y=f.el=a.el;let{patchFlag:_,dynamicChildren:g,dirs:M}=f;_|=a.patchFlag&16;const A=a.props||U,R=f.props||U;let O;if(p&&ct(p,!1),(O=R.onVnodeBeforeUpdate)&&Me(O,p,f,a),M&&at(f,a,p,"beforeUpdate"),p&&ct(p,!0),(A.innerHTML&&R.innerHTML==null||A.textContent&&R.textContent==null)&&u(y,""),g?te(a.dynamicChildren,g,y,p,x,ls(f,h),m):S||G(a,f,y,null,p,x,ls(f,h),m,!1),_>0){if(_&16)st(y,A,R,p,h);else if(_&2&&A.class!==R.class&&o(y,"class",null,R.class,h),_&4&&o(y,"style",A.style,R.style,h),_&8){const L=f.dynamicProps;for(let q=0;q<L.length;q++){const H=L[q],de=A[H],pe=R[H];(pe!==de||H==="value")&&o(y,H,de,pe,h,p)}}_&1&&a.children!==f.children&&u(y,f.children)}else!S&&g==null&&st(y,A,R,p,h);((O=R.onVnodeUpdated)||M)&&ve(()=>{O&&Me(O,p,f,a),M&&at(f,a,p,"updated")},x)},te=(a,f,p,x,h,m,S)=>{for(let y=0;y<f.length;y++){const _=a[y],g=f[y],M=_.el&&(_.type===we||!jt(_,g)||_.shapeFlag&198)?v(_.el):p;C(_,g,M,null,x,h,m,S,!0)}},st=(a,f,p,x,h)=>{if(f!==p){if(f!==U)for(const m in f)!Et(m)&&!(m in p)&&o(a,m,f[m],null,h,x);for(const m in p){if(Et(m))continue;const S=p[m],y=f[m];S!==y&&m!=="value"&&o(a,m,y,S,h,x)}"value"in p&&o(a,"value",f.value,p.value,h)}},Ge=(a,f,p,x,h,m,S,y,_)=>{const g=f.el=a?a.el:r(""),M=f.anchor=a?a.anchor:r("");let{patchFlag:A,dynamicChildren:R,slotScopeIds:O}=f;O&&(y=y?y.concat(O):O),a==null?(s(g,p,x),s(M,p,x),me(f.children||[],p,M,h,m,S,y,_)):A>0&&A&64&&R&&a.dynamicChildren&&a.dynamicChildren.length===R.length?(te(a.dynamicChildren,R,p,h,m,S,y),(f.key!=null||h&&f===h.subTree)&&wi(a,f,!0)):G(a,f,p,M,h,m,S,y,_)},Ue=(a,f,p,x,h,m,S,y,_)=>{f.slotScopeIds=y,a==null?f.shapeFlag&512?h.ctx.activate(f,p,x,S,_):At(f,p,x,h,m,S,_):Ut(a,f,_)},At=(a,f,p,x,h,m,S)=>{const y=a.component=Jl(a,x,h);if(ti(a)&&(y.ctx.renderer=ut),Zl(y,!1,S),y.asyncDep){if(h&&h.registerDep(y,le,S),!a.el){const _=y.subTree=Se(Ze);P(null,_,f,p),a.placeholder=_.el}}else le(y,a,f,p,h,m,S)},Ut=(a,f,p)=>{const x=f.component=a.component;if(Ml(a,f,p))if(x.asyncDep&&!x.asyncResolved){K(x,f,p);return}else x.next=f,x.update();else f.el=a.el,x.vnode=f},le=(a,f,p,x,h,m,S)=>{const y=()=>{if(a.isMounted){let{next:A,bu:R,u:O,parent:L,vnode:q}=a;{const Fe=Si(a);if(Fe){A&&(A.el=q.el,K(a,A,S)),Fe.asyncDep.then(()=>{a.isUnmounted||y()});return}}let H=A,de;ct(a,!1),A?(A.el=q.el,K(a,A,S)):A=q,R&&Mn(R),(de=A.props&&A.props.onVnodeBeforeUpdate)&&Me(de,L,A,q),ct(a,!0);const pe=ui(a),Ne=a.subTree;a.subTree=pe,C(Ne,pe,v(Ne.el),Wt(Ne),a,h,m),A.el=pe.el,H===null&&kl(a,pe.el),O&&ve(O,h),(de=A.props&&A.props.onVnodeUpdated)&&ve(()=>Me(de,L,A,q),h)}else{let A;const{el:R,props:O}=f,{bm:L,m:q,parent:H,root:de,type:pe}=a,Ne=Ft(f);ct(a,!1),L&&Mn(L),!Ne&&(A=O&&O.onVnodeBeforeMount)&&Me(A,H,f),ct(a,!0);{de.ce&&de.ce._def.shadowRoot!==!1&&de.ce._injectChildStyle(pe);const Fe=a.subTree=ui(a);C(null,Fe,p,x,a,h,m),f.el=Fe.el}if(q&&ve(q,h),!Ne&&(A=O&&O.onVnodeMounted)){const Fe=f;ve(()=>Me(A,H,Fe),h)}(f.shapeFlag&256||H&&Ft(H.vnode)&&H.vnode.shapeFlag&256)&&a.a&&ve(a.a,h),a.isMounted=!0,f=p=x=null}};a.scope.on();const _=a.effect=new As(y);a.scope.off();const g=a.update=_.run.bind(_),M=a.job=_.runIfDirty.bind(_);M.i=a,M.id=a.uid,_.scheduler=()=>qn(M),ct(a,!0),g()},K=(a,f,p)=>{f.component=a;const x=a.vnode.props;a.vnode=f,a.next=null,Pl(a,f.props,x,p),Dl(a,f.children,p),Ae(),Ks(a),Te()},G=(a,f,p,x,h,m,S,y,_=!1)=>{const g=a&&a.children,M=a?a.shapeFlag:0,A=f.children,{patchFlag:R,shapeFlag:O}=f;if(R>0){if(R&128){ft(g,A,p,x,h,m,S,y,_);return}else if(R&256){Oe(g,A,p,x,h,m,S,y,_);return}}O&8?(M&16&&Tt(g,h,m),A!==g&&u(p,A)):M&16?O&16?ft(g,A,p,x,h,m,S,y,_):Tt(g,h,m,!0):(M&8&&u(p,""),O&16&&me(A,p,x,h,m,S,y,_))},Oe=(a,f,p,x,h,m,S,y,_)=>{a=a||dt,f=f||dt;const g=a.length,M=f.length,A=Math.min(g,M);let R;for(R=0;R<A;R++){const O=f[R]=_?tt(f[R]):Ie(f[R]);C(a[R],O,p,null,h,m,S,y,_)}g>M?Tt(a,h,m,!0,!1,A):me(f,p,x,h,m,S,y,_,A)},ft=(a,f,p,x,h,m,S,y,_)=>{let g=0;const M=f.length;let A=a.length-1,R=M-1;for(;g<=A&&g<=R;){const O=a[g],L=f[g]=_?tt(f[g]):Ie(f[g]);if(jt(O,L))C(O,L,p,null,h,m,S,y,_);else break;g++}for(;g<=A&&g<=R;){const O=a[A],L=f[R]=_?tt(f[R]):Ie(f[R]);if(jt(O,L))C(O,L,p,null,h,m,S,y,_);else break;A--,R--}if(g>A){if(g<=R){const O=R+1,L=O<M?f[O].el:x;for(;g<=R;)C(null,f[g]=_?tt(f[g]):Ie(f[g]),p,L,h,m,S,y,_),g++}}else if(g>R)for(;g<=A;)ge(a[g],h,m,!0),g++;else{const O=g,L=g,q=new Map;for(g=L;g<=R;g++){const xe=f[g]=_?tt(f[g]):Ie(f[g]);xe.key!=null&&q.set(xe.key,g)}let H,de=0;const pe=R-L+1;let Ne=!1,Fe=0;const Vt=new Array(pe);for(g=0;g<pe;g++)Vt[g]=0;for(g=O;g<=A;g++){const xe=a[g];if(de>=pe){ge(xe,h,m,!0);continue}let Le;if(xe.key!=null)Le=q.get(xe.key);else for(H=L;H<=R;H++)if(Vt[H-L]===0&&jt(xe,f[H])){Le=H;break}Le===void 0?ge(xe,h,m,!0):(Vt[Le-L]=g+1,Le>=Fe?Fe=Le:Ne=!0,C(xe,f[Le],p,null,h,m,S,y,_),de++)}const Zi=Ne?Hl(Vt):dt;for(H=Zi.length-1,g=pe-1;g>=0;g--){const xe=L+g,Le=f[xe],eo=f[xe+1],to=xe+1<M?eo.el||Ai(eo):x;Vt[g]===0?C(null,Le,p,to,h,m,S,y,_):Ne&&(H<0||g!==Zi[H]?Pe(Le,p,to,2):H--)}}},Pe=(a,f,p,x,h=null)=>{const{el:m,type:S,transition:y,children:_,shapeFlag:g}=a;if(g&6){Pe(a.component.subTree,f,p,x);return}if(g&128){a.suspense.move(f,p,x);return}if(g&64){S.move(a,f,p,ut);return}if(S===we){s(m,f,p);for(let A=0;A<_.length;A++)Pe(_[A],f,p,x);s(a.anchor,f,p);return}if(S===mn){k(a,f,p);return}if(x!==2&&g&1&&y)if(x===0)y.beforeEnter(m),s(m,f,p),ve(()=>y.enter(m),h);else{const{leave:A,delayLeave:R,afterLeave:O}=y,L=()=>{a.ctx.isUnmounted?i(m):s(m,f,p)},q=()=>{m._isLeaving&&m[il](!0),A(m,()=>{L(),O&&O()})};R?R(m,L,q):q()}else s(m,f,p)},ge=(a,f,p,x=!1,h=!1)=>{const{type:m,props:S,ref:y,children:_,dynamicChildren:g,shapeFlag:M,patchFlag:A,dirs:R,cacheIndex:O}=a;if(A===-2&&(h=!1),y!=null&&(Ae(),Nt(y,null,p,a,!0),Te()),O!=null&&(f.renderCache[O]=void 0),M&256){f.ctx.deactivate(a);return}const L=M&1&&R,q=!Ft(a);let H;if(q&&(H=S&&S.onVnodeBeforeUnmount)&&Me(H,f,a),M&6)ne(a.component,p,x);else{if(M&128){a.suspense.unmount(p,x);return}L&&at(a,null,f,"beforeUnmount"),M&64?a.type.remove(a,f,p,ut,x):g&&!g.hasOnce&&(m!==we||A>0&&A&64)?Tt(g,f,p,!1,!0):(m===we&&A&384||!h&&M&16)&&Tt(_,f,p),x&&J(a)}(q&&(H=S&&S.onVnodeUnmounted)||L)&&ve(()=>{H&&Me(H,f,a),L&&at(a,null,f,"unmounted")},p)},J=a=>{const{type:f,el:p,anchor:x,transition:h}=a;if(f===we){I(p,x);return}if(f===mn){w(a);return}const m=()=>{i(p),h&&!h.persisted&&h.afterLeave&&h.afterLeave()};if(a.shapeFlag&1&&h&&!h.persisted){const{leave:S,delayLeave:y}=h,_=()=>S(p,m);y?y(a.el,m,_):_()}else m()},I=(a,f)=>{let p;for(;a!==f;)p=z(a),i(a),a=p;i(f)},ne=(a,f,p)=>{const{bum:x,scope:h,job:m,subTree:S,um:y,m:_,a:g}=a;zi(_),zi(g),x&&Mn(x),h.stop(),m&&(m.flags|=8,ge(S,a,f,p)),y&&ve(y,f),ve(()=>{a.isUnmounted=!0},f)},Tt=(a,f,p,x=!1,h=!1,m=0)=>{for(let S=m;S<a.length;S++)ge(a[S],f,p,x,h)},Wt=a=>{if(a.shapeFlag&6)return Wt(a.component.subTree);if(a.shapeFlag&128)return a.suspense.next();const f=z(a.anchor||a.el),p=f&&f[nl];return p?z(p):f};let zn=!1;const An=(a,f,p)=>{let x;a==null?f._vnode&&(ge(f._vnode,null,null,!0),x=f._vnode.component):C(f._vnode||null,a,f,null,null,null,p),f._vnode=a,zn||(zn=!0,Ks(x),qs(),zn=!1)},ut={p:C,um:ge,m:Pe,r:J,mt:At,mc:me,pc:G,pbc:te,n:Wt,o:e};return{render:An,hydrate:void 0,createApp:Al(An)}}function ls({type:e,props:t},n){return n==="svg"&&e==="foreignObject"||n==="mathml"&&e==="annotation-xml"&&t&&t.encoding&&t.encoding.includes("html")?void 0:n}function ct({effect:e,job:t},n){n?(e.flags|=32,t.flags|=4):(e.flags&=-33,t.flags&=-5)}function jl(e,t){return(!e||e&&!e.pendingBranch)&&t&&!t.persisted}function wi(e,t,n=!1){const s=e.children,i=t.children;if(F(s)&&F(i))for(let o=0;o<s.length;o++){const l=s[o];let r=i[o];r.shapeFlag&1&&!r.dynamicChildren&&((r.patchFlag<=0||r.patchFlag===32)&&(r=i[o]=tt(i[o]),r.el=l.el),!n&&r.patchFlag!==-2&&wi(l,r)),r.type===hn&&(r.patchFlag!==-1?r.el=l.el:r.__elIndex=o+(e.type===we?1:0)),r.type===Ze&&!r.el&&(r.el=l.el)}}function Hl(e){const t=e.slice(),n=[0];let s,i,o,l,r;const c=e.length;for(s=0;s<c;s++){const d=e[s];if(d!==0){if(i=n[n.length-1],e[i]<d){t[s]=i,n.push(s);continue}for(o=0,l=n.length-1;o<l;)r=o+l>>1,e[n[r]]<d?o=r+1:l=r;d<e[n[o]]&&(o>0&&(t[s]=n[o-1]),n[o]=s)}}for(o=n.length,l=n[o-1];o-- >0;)n[o]=l,l=t[l];return n}function Si(e){const t=e.subTree.component;if(t)return t.asyncDep&&!t.asyncResolved?t:Si(t)}function zi(e){if(e)for(let t=0;t<e.length;t++)e[t].flags|=8}function Ai(e){if(e.placeholder)return e.placeholder;const t=e.component;return t?Ai(t.subTree):null}const Ti=e=>e.__isSuspense;function Gl(e,t){t&&t.pendingBranch?F(e)?t.effects.push(...e):t.effects.push(e):Xo(e)}const we=Symbol.for("v-fgt"),hn=Symbol.for("v-txt"),Ze=Symbol.for("v-cmt"),mn=Symbol.for("v-stc"),$t=[];let he=null;function et(e=!1){$t.push(he=e?null:[])}function Ul(){$t.pop(),he=$t[$t.length-1]||null}let Bt=1;function Ei(e,t=!1){Bt+=e,e<0&&he&&t&&(he.hasOnce=!0)}function Ci(e){return e.dynamicChildren=Bt>0?he||dt:null,Ul(),Bt>0&&he&&he.push(e),e}function yt(e,t,n,s,i,o){return Ci(b(e,t,n,s,i,o,!0))}function Ri(e,t,n,s,i){return Ci(Se(e,t,n,s,i,!0))}function Ii(e){return e?e.__v_isVNode===!0:!1}function jt(e,t){return e.type===t.type&&e.key===t.key}const Mi=({key:e})=>e??null,gn=({ref:e,ref_key:t,ref_for:n})=>(typeof e=="number"&&(e=""+e),e!=null?Q(e)||ie(e)||N(e)?{i:Re,r:e,k:t,f:!!n}:e:null);function b(e,t=null,n=null,s=0,i=null,o=e===we?0:1,l=!1,r=!1){const c={__v_isVNode:!0,__v_skip:!0,type:e,props:t,key:t&&Mi(t),ref:t&&gn(t),scopeId:Xs,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetStart:null,targetAnchor:null,staticCount:0,shapeFlag:o,patchFlag:s,dynamicProps:i,dynamicChildren:null,appContext:null,ctx:Re};return r?(rs(c,n),o&128&&e.normalize(c)):n&&(c.shapeFlag|=Q(n)?8:16),Bt>0&&!l&&he&&(c.patchFlag>0||o&6)&&c.patchFlag!==32&&he.push(c),c}const Se=Wl;function Wl(e,t=null,n=null,s=0,i=null,o=!1){if((!e||e===ml)&&(e=Ze),Ii(e)){const r=wt(e,t,!0);return n&&rs(r,n),Bt>0&&!o&&he&&(r.shapeFlag&6?he[he.indexOf(e)]=r:he.push(r)),r.patchFlag=-2,r}if(lr(e)&&(e=e.__vccOpts),t){t=Vl(t);let{class:r,style:c}=t;r&&!Q(r)&&(t.class=vt(r)),Y(c)&&(Vn(c)&&!F(c)&&(c=se({},c)),t.style=Jt(c))}const l=Q(e)?1:Ti(e)?128:sl(e)?64:Y(e)?4:N(e)?2:0;return b(e,t,n,s,i,l,o,!0)}function Vl(e){return e?Vn(e)||hi(e)?se({},e):e:null}function wt(e,t,n=!1,s=!1){const{props:i,ref:o,patchFlag:l,children:r,transition:c}=e,d=t?ql(i||{},t):i,u={__v_isVNode:!0,__v_skip:!0,type:e.type,props:d,key:d&&Mi(d),ref:t&&t.ref?n&&o?F(o)?o.concat(gn(t)):[o,gn(t)]:gn(t):o,scopeId:e.scopeId,slotScopeIds:e.slotScopeIds,children:r,target:e.target,targetStart:e.targetStart,targetAnchor:e.targetAnchor,staticCount:e.staticCount,shapeFlag:e.shapeFlag,patchFlag:t&&e.type!==we?l===-1?16:l|16:l,dynamicProps:e.dynamicProps,dynamicChildren:e.dynamicChildren,appContext:e.appContext,dirs:e.dirs,transition:c,component:e.component,suspense:e.suspense,ssContent:e.ssContent&&wt(e.ssContent),ssFallback:e.ssFallback&&wt(e.ssFallback),placeholder:e.placeholder,el:e.el,anchor:e.anchor,ctx:e.ctx,ce:e.ce};return c&&s&&Xn(u,c.clone(u)),u}function Kl(e=" ",t=0){return Se(hn,null,e,t)}function xn(e,t){const n=Se(mn,null,e);return n.staticCount=t,n}function ki(e="",t=!1){return t?(et(),Ri(Ze,null,e)):Se(Ze,null,e)}function Ie(e){return e==null||typeof e=="boolean"?Se(Ze):F(e)?Se(we,null,e.slice()):Ii(e)?tt(e):Se(hn,null,String(e))}function tt(e){return e.el===null&&e.patchFlag!==-1||e.memo?e:wt(e)}function rs(e,t){let n=0;const{shapeFlag:s}=e;if(t==null)t=null;else if(F(t))n=16;else if(typeof t=="object")if(s&65){const i=t.default;i&&(i._c&&(i._d=!1),rs(e,i()),i._c&&(i._d=!0));return}else{n=32;const i=t._;!i&&!hi(t)?t._ctx=Re:i===3&&Re&&(Re.slots._===1?t._=1:(t._=2,e.patchFlag|=1024))}else N(t)?(t={default:t,_ctx:Re},n=32):(t=String(t),s&64?(n=16,t=[Kl(t)]):n=8);e.children=t,e.shapeFlag|=n}function ql(...e){const t={};for(let n=0;n<e.length;n++){const s=e[n];for(const i in s)if(i==="class")t.class!==s.class&&(t.class=vt([t.class,s.class]));else if(i==="style")t.style=Jt([t.style,s.style]);else if(Kt(i)){const o=t[i],l=s[i];l&&o!==l&&!(F(o)&&o.includes(l))&&(t[i]=o?[].concat(o,l):l)}else i!==""&&(t[i]=s[i])}return t}function Me(e,t,n,s=null){Ee(e,t,7,[n,s])}const Yl=ci();let Xl=0;function Jl(e,t,n){const s=e.type,i=(t?t.appContext:e.appContext)||Yl,o={uid:Xl++,vnode:e,type:s,parent:t,appContext:i,root:null,next:null,subTree:null,effect:null,update:null,job:null,scope:new po(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:t?t.provides:Object.create(i.provides),ids:t?t.ids:["",0,0],accessCache:null,renderCache:[],components:null,directives:null,propsOptions:gi(s,i),emitsOptions:fi(s,i),emit:null,emitted:null,propsDefaults:U,inheritAttrs:s.inheritAttrs,ctx:U,data:U,props:U,attrs:U,slots:U,refs:U,setupState:U,setupContext:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return o.ctx={_:o},o.root=t?t.root:o,o.emit=El.bind(null,o),e.ce&&e.ce(o),o}let fe=null;const Ql=()=>fe||Re;let bn,as;{const e=Xt(),t=(n,s)=>{let i;return(i=e[n])||(i=e[n]=[]),i.push(s),o=>{i.length>1?i.forEach(l=>l(o)):i[0](o)}};bn=t("__VUE_INSTANCE_SETTERS__",n=>fe=n),as=t("__VUE_SSR_SETTERS__",n=>Gt=n)}const Ht=e=>{const t=fe;return bn(e),e.scope.on(),()=>{e.scope.off(),bn(t)}},Oi=()=>{fe&&fe.scope.off(),bn(null)};function Pi(e){return e.vnode.shapeFlag&4}let Gt=!1;function Zl(e,t=!1,n=!1){t&&as(t);const{props:s,children:i}=e.vnode,o=Pi(e);Ol(e,s,o,t),Ll(e,i,n||t);const l=o?er(e,t):void 0;return t&&as(!1),l}function er(e,t){const n=e.type;e.accessCache=Object.create(null),e.proxy=new Proxy(e.ctx,xl);const{setup:s}=n;if(s){Ae();const i=e.setupContext=s.length>1?nr(e):null,o=Ht(e),l=gt(s,e,0,[e.props,i]),r=ms(l);if(Te(),o(),(r||e.sp)&&!Ft(e)&&Zs(e),r){if(l.then(Oi,Oi),t)return l.then(c=>{Ni(e,c)}).catch(c=>{ln(c,e,0)});e.asyncDep=l}else Ni(e,l)}else Fi(e)}function Ni(e,t,n){N(t)?e.type.__ssrInlineRender?e.ssrRender=t:e.render=t:Y(t)&&(e.setupState=Gs(t)),Fi(e)}function Fi(e,t,n){const s=e.type;e.render||(e.render=s.render||ze);{const i=Ht(e);Ae();try{bl(e)}finally{Te(),i()}}}const tr={get(e,t){return re(e,"get",""),e[t]}};function nr(e){const t=n=>{e.exposed=n||{}};return{attrs:new Proxy(e.attrs,tr),slots:e.slots,emit:e.emit,expose:t}}function cs(e){return e.exposed?e.exposeProxy||(e.exposeProxy=new Proxy(Gs(Po(e.exposed)),{get(t,n){if(n in t)return t[n];if(n in Lt)return Lt[n](e)},has(t,n){return n in t||n in Lt}})):e.proxy}const sr=/(?:^|[-_])\w/g,ir=e=>e.replace(sr,t=>t.toUpperCase()).replace(/[-_]/g,"");function or(e,t=!0){return N(e)?e.displayName||e.name:e.name||t&&e.__name}function Li(e,t,n=!1){let s=or(t);if(!s&&t.__file){const i=t.__file.match(/([^/\\]+)\.\w+$/);i&&(s=i[1])}if(!s&&e){const i=o=>{for(const l in o)if(o[l]===t)return l};s=i(e.components)||e.parent&&i(e.parent.type.components)||i(e.appContext.components)}return s?ir(s):n?"App":"Anonymous"}function lr(e){return N(e)&&"__vccOpts"in e}const $=(e,t)=>Bo(e,t,Gt),rr="3.5.27";/**
* @vue/runtime-dom v3.5.27
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let fs;const Di=typeof window<"u"&&window.trustedTypes;if(Di)try{fs=Di.createPolicy("vue",{createHTML:e=>e})}catch{}const $i=fs?e=>fs.createHTML(e):e=>e,ar="http://www.w3.org/2000/svg",cr="http://www.w3.org/1998/Math/MathML",He=typeof document<"u"?document:null,Bi=He&&He.createElement("template"),fr={insert:(e,t,n)=>{t.insertBefore(e,n||null)},remove:e=>{const t=e.parentNode;t&&t.removeChild(e)},createElement:(e,t,n,s)=>{const i=t==="svg"?He.createElementNS(ar,e):t==="mathml"?He.createElementNS(cr,e):n?He.createElement(e,{is:n}):He.createElement(e);return e==="select"&&s&&s.multiple!=null&&i.setAttribute("multiple",s.multiple),i},createText:e=>He.createTextNode(e),createComment:e=>He.createComment(e),setText:(e,t)=>{e.nodeValue=t},setElementText:(e,t)=>{e.textContent=t},parentNode:e=>e.parentNode,nextSibling:e=>e.nextSibling,querySelector:e=>He.querySelector(e),setScopeId(e,t){e.setAttribute(t,"")},insertStaticContent(e,t,n,s,i,o){const l=n?n.previousSibling:t.lastChild;if(i&&(i===o||i.nextSibling))for(;t.insertBefore(i.cloneNode(!0),n),!(i===o||!(i=i.nextSibling)););else{Bi.innerHTML=$i(s==="svg"?`<svg>${e}</svg>`:s==="mathml"?`<math>${e}</math>`:e);const r=Bi.content;if(s==="svg"||s==="mathml"){const c=r.firstChild;for(;c.firstChild;)r.appendChild(c.firstChild);r.removeChild(c)}t.insertBefore(r,n)}return[l?l.nextSibling:t.firstChild,n?n.previousSibling:t.lastChild]}},ur=Symbol("_vtc");function dr(e,t,n){const s=e[ur];s&&(t=(t?[t,...s]:[...s]).join(" ")),t==null?e.removeAttribute("class"):n?e.setAttribute("class",t):e.className=t}const ji=Symbol("_vod"),pr=Symbol("_vsh"),vr=Symbol(""),hr=/(?:^|;)\s*display\s*:/;function mr(e,t,n){const s=e.style,i=Q(n);let o=!1;if(n&&!i){if(t)if(Q(t))for(const l of t.split(";")){const r=l.slice(0,l.indexOf(":")).trim();n[r]==null&&_n(s,r,"")}else for(const l in t)n[l]==null&&_n(s,l,"");for(const l in n)l==="display"&&(o=!0),_n(s,l,n[l])}else if(i){if(t!==n){const l=s[vr];l&&(n+=";"+l),s.cssText=n,o=hr.test(n)}}else t&&e.removeAttribute("style");ji in e&&(e[ji]=o?s.display:"",e[pr]&&(s.display="none"))}const Hi=/\s*!important$/;function _n(e,t,n){if(F(n))n.forEach(s=>_n(e,t,s));else if(n==null&&(n=""),t.startsWith("--"))e.setProperty(t,n);else{const s=gr(e,t);Hi.test(n)?e.setProperty(it(s),n.replace(Hi,""),"important"):e[s]=n}}const Gi=["Webkit","Moz","ms"],us={};function gr(e,t){const n=us[t];if(n)return n;let s=Ve(t);if(s!=="filter"&&s in e)return us[t]=s;s=bs(s);for(let i=0;i<Gi.length;i++){const o=Gi[i]+s;if(o in e)return us[t]=o}return t}const Ui="http://www.w3.org/1999/xlink";function Wi(e,t,n,s,i,o=uo(t)){s&&t.startsWith("xlink:")?n==null?e.removeAttributeNS(Ui,t.slice(6,t.length)):e.setAttributeNS(Ui,t,n):n==null||o&&!ws(n)?e.removeAttribute(t):e.setAttribute(t,o?"":We(n)?String(n):n)}function Vi(e,t,n,s,i){if(t==="innerHTML"||t==="textContent"){n!=null&&(e[t]=t==="innerHTML"?$i(n):n);return}const o=e.tagName;if(t==="value"&&o!=="PROGRESS"&&!o.includes("-")){const r=o==="OPTION"?e.getAttribute("value")||"":e.value,c=n==null?e.type==="checkbox"?"on":"":String(n);(r!==c||!("_value"in e))&&(e.value=c),n==null&&e.removeAttribute(t),e._value=n;return}let l=!1;if(n===""||n==null){const r=typeof e[t];r==="boolean"?n=ws(n):n==null&&r==="string"?(n="",l=!0):r==="number"&&(n=0,l=!0)}try{e[t]=n}catch{}l&&e.removeAttribute(i||t)}function xr(e,t,n,s){e.addEventListener(t,n,s)}function br(e,t,n,s){e.removeEventListener(t,n,s)}const Ki=Symbol("_vei");function _r(e,t,n,s,i=null){const o=e[Ki]||(e[Ki]={}),l=o[t];if(s&&l)l.value=s;else{const[r,c]=yr(t);if(s){const d=o[t]=zr(s,i);xr(e,r,d,c)}else l&&(br(e,r,l,c),o[t]=void 0)}}const qi=/(?:Once|Passive|Capture)$/;function yr(e){let t;if(qi.test(e)){t={};let s;for(;s=e.match(qi);)e=e.slice(0,e.length-s[0].length),t[s[0].toLowerCase()]=!0}return[e[2]===":"?e.slice(3):it(e.slice(2)),t]}let ds=0;const wr=Promise.resolve(),Sr=()=>ds||(wr.then(()=>ds=0),ds=Date.now());function zr(e,t){const n=s=>{if(!s._vts)s._vts=Date.now();else if(s._vts<=n.attached)return;Ee(Ar(s,n.value),t,5,[s])};return n.value=e,n.attached=Sr(),n}function Ar(e,t){if(F(t)){const n=e.stopImmediatePropagation;return e.stopImmediatePropagation=()=>{n.call(e),e._stopped=!0},t.map(s=>i=>!i._stopped&&s&&s(i))}else return t}const Yi=e=>e.charCodeAt(0)===111&&e.charCodeAt(1)===110&&e.charCodeAt(2)>96&&e.charCodeAt(2)<123,Tr=(e,t,n,s,i,o)=>{const l=i==="svg";t==="class"?dr(e,s,l):t==="style"?mr(e,n,s):Kt(t)?En(t)||_r(e,t,n,s,o):(t[0]==="."?(t=t.slice(1),!0):t[0]==="^"?(t=t.slice(1),!1):Er(e,t,s,l))?(Vi(e,t,s),!e.tagName.includes("-")&&(t==="value"||t==="checked"||t==="selected")&&Wi(e,t,s,l,o,t!=="value")):e._isVueCE&&(/[A-Z]/.test(t)||!Q(s))?Vi(e,Ve(t),s,o,t):(t==="true-value"?e._trueValue=s:t==="false-value"&&(e._falseValue=s),Wi(e,t,s,l))};function Er(e,t,n,s){if(s)return!!(t==="innerHTML"||t==="textContent"||t in e&&Yi(t)&&N(n));if(t==="spellcheck"||t==="draggable"||t==="translate"||t==="autocorrect"||t==="sandbox"&&e.tagName==="IFRAME"||t==="form"||t==="list"&&e.tagName==="INPUT"||t==="type"&&e.tagName==="TEXTAREA")return!1;if(t==="width"||t==="height"){const i=e.tagName;if(i==="IMG"||i==="VIDEO"||i==="CANVAS"||i==="SOURCE")return!1}return Yi(t)&&Q(n)?!1:t in e}const Cr=se({patchProp:Tr},fr);let Xi;function Rr(){return Xi||(Xi=$l(Cr))}const Ir=(...e)=>{const t=Rr().createApp(...e),{mount:n}=t;return t.mount=s=>{const i=kr(s);if(!i)return;const o=t._component;!N(o)&&!o.render&&!o.template&&(o.template=i.innerHTML),i.nodeType===1&&(i.textContent="");const l=n(i,!1,Mr(i));return i instanceof Element&&(i.removeAttribute("v-cloak"),i.setAttribute("data-v-app","")),l},t};function Mr(e){if(e instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&e instanceof MathMLElement)return"mathml"}function kr(e){return Q(e)?document.querySelector(e):e}const Or=`// ===== 0: MANDELBULB =====
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
`,ia=`// ===== 25: IO BLOCKS =====
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
`,oa=`// ===== 26: BEATING CIRCLES =====
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
`,xa=`// ===== 39: WORMHOLE =====
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
`,ba=`// ===== 40: HEXAGONS =====
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
`,_a=`// ===== 41: BUBBLES =====
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
`,ya=`// ===== 42: LIGHTNING =====
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
`,Ea=`// ===== 48: PSYCHEDELIC =====
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
`,Ca=`// ===== 49: ENERGY FIELD =====
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
`,Ia=`// ===== PRECISION AND UNIFORMS =====

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
`,Ma=`// ===== MAIN SHADER PROGRAM =====
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
`,ka=Jn({__name:"BioFractalViewer",props:{mode:{default:0}},setup(e){const t=e,n=Xe(null);let s=null,i=null,o=null,l=Date.now();const r=Object.assign({"../../shaders/effects/mode-00-mandelbulb.glsl":Or,"../../shaders/effects/mode-01-mandelbox.glsl":Pr,"../../shaders/effects/mode-02-menger-sponge.glsl":Nr,"../../shaders/effects/mode-03-sierpinski.glsl":Fr,"../../shaders/effects/mode-04-kaleidoscope.glsl":Lr,"../../shaders/effects/mode-05-organic-hybrid.glsl":Dr,"../../shaders/effects/mode-06-fractal-land.glsl":$r,"../../shaders/effects/mode-07-galaxy-nebula.glsl":Br,"../../shaders/effects/mode-08-infinite-tunnel.glsl":jr,"../../shaders/effects/mode-09-plasma-fractal.glsl":Hr,"../../shaders/effects/mode-10-circuits.glsl":Gr,"../../shaders/effects/mode-11-metaballs.glsl":Ur,"../../shaders/effects/mode-12-volumetric-lines.glsl":Wr,"../../shaders/effects/mode-13-disco-tunnel.glsl":Vr,"../../shaders/effects/mode-14-speed-drive.glsl":Kr,"../../shaders/effects/mode-15-hot-rocks.glsl":qr,"../../shaders/effects/mode-16-server-room.glsl":Yr,"../../shaders/effects/mode-17-remnant-x.glsl":Xr,"../../shaders/effects/mode-18-kali-set.glsl":Jr,"../../shaders/effects/mode-19-generators.glsl":Qr,"../../shaders/effects/mode-20-simplicity-galaxy.glsl":Zr,"../../shaders/effects/mode-21-ribbons.glsl":ea,"../../shaders/effects/mode-22-twisted-rings.glsl":ta,"../../shaders/effects/mode-23-waves-remix.glsl":na,"../../shaders/effects/mode-24-dancing-metalights.glsl":sa,"../../shaders/effects/mode-25-io-blocks.glsl":ia,"../../shaders/effects/mode-26-beating-circles.glsl":oa,"../../shaders/effects/mode-27-circle-wave.glsl":la,"../../shaders/effects/mode-28-soundflower.glsl":ra,"../../shaders/effects/mode-29-polar-beats.glsl":aa,"../../shaders/effects/mode-30-undulant-spectre.glsl":ca,"../../shaders/effects/mode-31-revision-2015.glsl":fa,"../../shaders/effects/mode-32-gameboy-style.glsl":ua,"../../shaders/effects/mode-33-electric-storm.glsl":da,"../../shaders/effects/mode-34-vortex.glsl":pa,"../../shaders/effects/mode-35-neon-grid.glsl":va,"../../shaders/effects/mode-36-matrix-rain.glsl":ha,"../../shaders/effects/mode-37-fire.glsl":ma,"../../shaders/effects/mode-38-aurora.glsl":ga,"../../shaders/effects/mode-39-wormhole.glsl":xa,"../../shaders/effects/mode-40-hexagons.glsl":ba,"../../shaders/effects/mode-41-bubbles.glsl":_a,"../../shaders/effects/mode-42-lightning.glsl":ya,"../../shaders/effects/mode-43-kaleidoscope-2d.glsl":wa,"../../shaders/effects/mode-44-starfield.glsl":Sa,"../../shaders/effects/mode-45-liquid-metal.glsl":za,"../../shaders/effects/mode-46-fractal-tree.glsl":Aa,"../../shaders/effects/mode-47-voronoi.glsl":Ta,"../../shaders/effects/mode-48-psychedelic.glsl":Ea,"../../shaders/effects/mode-49-energy-field.glsl":Ca}),c=Object.keys(r).sort().map(C=>r[C]).join(`

`),d=Ra,u=`${Ia}
${c}
${Ma}`,v=(C,X)=>{if(!s)return null;const P=s.createShader(C);return P?(s.shaderSource(P,X),s.compileShader(P),s.getShaderParameter(P,s.COMPILE_STATUS)?P:(console.error("Shader error:",s.getShaderInfoLog(P)),null)):null},z=()=>{const C=n.value;if(!C||(s=C.getContext("webgl")||C.getContext("experimental-webgl"),!s))return!1;const X=v(s.VERTEX_SHADER,d),P=v(s.FRAGMENT_SHADER,u);if(!X||!P||(i=s.createProgram(),!i))return!1;if(s.attachShader(i,X),s.attachShader(i,P),s.linkProgram(i),!s.getProgramParameter(i,s.LINK_STATUS))return console.error("Link error:",s.getProgramInfoLog(i)),!1;const j=new Float32Array([-1,-1,1,-1,-1,1,-1,1,1,-1,1,1]),k=s.createBuffer();s.bindBuffer(s.ARRAY_BUFFER,k),s.bufferData(s.ARRAY_BUFFER,j,s.STATIC_DRAW);const w=s.getAttribLocation(i,"aPosition");return s.enableVertexAttribArray(w),s.vertexAttribPointer(w,2,s.FLOAT,!1,0,0),!0},T=()=>{const C=n.value;C&&(C.width=C.clientWidth,C.height=C.clientHeight,s&&s.viewport(0,0,C.width,C.height))},E=()=>{!s||!i||!n.value||(s.useProgram(i),s.uniform1f(s.getUniformLocation(i,"uTime"),(Date.now()-l)/1e3),s.uniform2f(s.getUniformLocation(i,"uResolution"),n.value.width,n.value.height),s.uniform1i(s.getUniformLocation(i,"uMode"),t.mode),s.drawArrays(s.TRIANGLES,0,6),o=requestAnimationFrame(E))};return Qn(()=>{z()&&(T(),window.addEventListener("resize",T),E())}),dn(()=>{o&&cancelAnimationFrame(o),window.removeEventListener("resize",T)}),(C,X)=>(et(),yt("canvas",{ref_key:"canvasRef",ref:n,class:"bio-fractal-canvas"},null,512))}}),Ji=(e,t)=>{const n=e.__vccOpts||e;for(const[s,i]of t)n[s]=i;return n},Oa=Ji(ka,[["__scopeId","data-v-c9463404"]]),Pa={class:"pv-container"},Na={class:"pv-svg-container"},Fa={viewBox:"0 0 520 480",preserveAspectRatio:"xMidYMid meet"},La=["x1","y1","x2","y2"],Da=["x1","y1","x2","y2"],$a=["x1","y1","x2","y2"],Ba=["x1","y1","x2","y2"],ja=["d"],Ha=["cx","cy"],Ga=["transform"],Ua=["x1","y1","x2","y2"],Wa=["x1","y1","x2","y2"],Va=["x1","y1","x2","y2"],Ka=["x1","y1","x2","y2"],qa=["d"],Ya=["cx","cy"],Xa=["transform"],Ja=["x1","y1","x2","y2"],Qa=["x1","y1","x2","y2"],Za=["x1","y1","x2","y2"],ec=["x1","y1","x2","y2"],tc=["x1","y1","x2","y2"],nc=["x1","y1","x2","y2"],sc=["points"],ic=["d"],oc=["cx","cy"],lc=["transform"],rc=["d"],ac=["x1","y1","x2","y2"],cc=["x1","y1","x2","y2"],fc=["x1","y1","x2","y2"],uc=["points"],dc=["x1","y1","x2","y2"],pc=["points"],vc=["x1","y1","x2","y2"],hc=["points"],mc=["transform"],gc=["cx","cy"],xc=["cx","cy"],bc=["cx","cy"],_c=["x","y"],yc=["x","y"],wc=["x","y"],Sc=["x","y"],zc={class:"pv-values"},Ac={class:"pv-values-main"},Tc={class:"pv-values-text"},Ec={class:"pv-values-real"},Cc={class:"pv-values-imag"},Rc={class:"pv-values-time"},Ic={class:"pv-values-time-text"},Mc={class:"pv-values-time-value"},yn=1.3,kc=1,St=-2.8,zt=-2.8,ke=-1.2,nt=1.3,wn=1.3,Sn=1.3,Oc=Ji(Jn({__name:"ComplexWaveVisualization",setup(e){const t=Xe(1.25),n=Xe(!0);let s=null;const i=2*Math.PI*1.6,o=J=>Math.exp(-1*Math.pow(J-yn,2)),l=(J,I,ne)=>{const An=-J*50*.7,ut=J*50*.35,Qi=I*38*.9,a=I*38*.25,f=-ne*38;return{x:270+An+Qi,y:220+ut+a+f}},r=$(()=>o(t.value)*Math.cos(i*t.value)),c=$(()=>o(t.value)*Math.sin(i*t.value)),d=$(()=>{const J=[];for(let I=0;I<=2.5;I+=.015){const ne=o(I);J.push({t:I,re:ne*Math.cos(i*I),im:ne*Math.sin(i*I)})}return J}),u=$(()=>d.value.map((J,I)=>{const ne=l(J.t,J.re,J.im);return`${I===0?"M":"L"} ${ne.x} ${ne.y}`}).join(" ")),v=$(()=>d.value.map((J,I)=>{const ne=l(ke,J.re,J.im);return`${I===0?"M":"L"} ${ne.x} ${ne.y}`}).join(" ")),z=$(()=>d.value.map((J,I)=>{const ne=l(J.t,St,J.im);return`${I===0?"M":"L"} ${ne.x} ${ne.y}`}).join(" ")),T=$(()=>d.value.map((J,I)=>{const ne=l(J.t,J.re,zt);return`${I===0?"M":"L"} ${ne.x} ${ne.y}`}).join(" ")),E=$(()=>({tl:l(ke,-nt,nt),tr:l(ke,nt,nt),bl:l(ke,-nt,-nt),br:l(ke,nt,-nt)})),C=$(()=>l(ke,0,1.4)),X=$(()=>l(ke,0,-.3)),P=$(()=>l(ke,-.3,0)),j=$(()=>l(ke,1,0)),k=$(()=>({tl:l(0,St,wn),tr:l(2.5,St,wn),bl:l(0,St,-wn),br:l(2.5,St,-wn)})),w=$(()=>({bl:l(0,-Sn,zt),br:l(0,Sn,zt),tl:l(2.5,-Sn,zt),tr:l(2.5,Sn,zt)})),V=$(()=>l(yn,0,0)),ee=$(()=>l(yn,0,1.6)),Z=$(()=>l(yn,1.5,0)),me=$(()=>l(0,0,0)),oe=$(()=>l(2.7,0,0)),te=$(()=>l(t.value,r.value,c.value)),st=$(()=>l(ke,r.value,c.value)),Ge=$(()=>l(t.value,St,c.value)),Ue=$(()=>l(t.value,r.value,zt)),At=$(()=>Math.atan2(k.value.tl.y-k.value.tr.y,k.value.tl.x-k.value.tr.x)*(180/Math.PI)),Ut=$(()=>({x:(k.value.tl.x+k.value.tr.x)/2,y:(k.value.tl.y+k.value.tr.y)/2})),le=$(()=>Math.atan2(w.value.bl.y-w.value.tl.y,w.value.bl.x-w.value.tl.x)*(180/Math.PI)),K=$(()=>({x:(w.value.br.x+w.value.tr.x)/2,y:(w.value.br.y+w.value.tr.y)/2})),G=$(()=>Math.atan2(E.value.tl.y-E.value.tr.y,E.value.tl.x-E.value.tr.x)*(180/Math.PI)),Oe=$(()=>({x:(E.value.tl.x+E.value.tr.x)/2,y:(E.value.tl.y+E.value.tr.y)/2})),ft=$(()=>({x:(me.value.x+oe.value.x)/2,y:(me.value.y+oe.value.y)/2}));let Pe=0;const ge=()=>{Pe++,n.value&&Pe%2===0&&(t.value+=.02,t.value>2.5&&(t.value=0)),s=requestAnimationFrame(ge)};return Qn(()=>{s=requestAnimationFrame(ge)}),dn(()=>{s&&cancelAnimationFrame(s)}),(J,I)=>(et(),yt("div",Pa,[I[15]||(I[15]=b("div",{class:"pv-title"},[b("h1",{class:"pv-title-gradient-1"}," The Observer Effect explains why the same "),b("h2",{class:"pv-title-gradient-2"}," life feels different to different people ")],-1)),b("div",Na,[(et(),yt("svg",Fa,[I[4]||(I[4]=xn('<defs data-v-295f2c94><linearGradient id="pv-helixGradient" x1="0%" y1="0%" x2="100%" y2="0%" data-v-295f2c94><stop offset="0%" stop-color="#a855f7" data-v-295f2c94><animate attributeName="stop-color" values="#a855f7;#ec4899;#06b6d4;#a855f7" dur="4s" repeatCount="indefinite" data-v-295f2c94></animate></stop><stop offset="50%" stop-color="#ec4899" data-v-295f2c94><animate attributeName="stop-color" values="#ec4899;#06b6d4;#a855f7;#ec4899" dur="4s" repeatCount="indefinite" data-v-295f2c94></animate></stop><stop offset="100%" stop-color="#06b6d4" data-v-295f2c94><animate attributeName="stop-color" values="#06b6d4;#a855f7;#ec4899;#06b6d4" dur="4s" repeatCount="indefinite" data-v-295f2c94></animate></stop></linearGradient><linearGradient id="pv-imGradient" x1="0%" y1="0%" x2="100%" y2="0%" data-v-295f2c94><stop offset="0%" stop-color="#06b6d4" data-v-295f2c94></stop><stop offset="100%" stop-color="#22d3d3" data-v-295f2c94></stop></linearGradient><linearGradient id="pv-reGradient" x1="0%" y1="0%" x2="100%" y2="0%" data-v-295f2c94><stop offset="0%" stop-color="#f97316" data-v-295f2c94></stop><stop offset="100%" stop-color="#fb923c" data-v-295f2c94></stop></linearGradient><linearGradient id="pv-spiralGradient" x1="0%" y1="0%" x2="100%" y2="100%" data-v-295f2c94><stop offset="0%" stop-color="#a855f7" data-v-295f2c94></stop><stop offset="100%" stop-color="#6366f1" data-v-295f2c94></stop></linearGradient><linearGradient id="pv-axisGradient" x1="0%" y1="0%" x2="100%" y2="0%" data-v-295f2c94><stop offset="0%" stop-color="#64748b" data-v-295f2c94></stop><stop offset="100%" stop-color="#94a3b8" data-v-295f2c94></stop></linearGradient><filter id="pv-glow-cyan" x="-50%" y="-50%" width="200%" height="200%" data-v-295f2c94><feGaussianBlur stdDeviation="3" result="coloredBlur" data-v-295f2c94></feGaussianBlur><feMerge data-v-295f2c94><feMergeNode in="coloredBlur" data-v-295f2c94></feMergeNode><feMergeNode in="SourceGraphic" data-v-295f2c94></feMergeNode></feMerge></filter><filter id="pv-glow-orange" x="-50%" y="-50%" width="200%" height="200%" data-v-295f2c94><feGaussianBlur stdDeviation="3" result="coloredBlur" data-v-295f2c94></feGaussianBlur><feMerge data-v-295f2c94><feMergeNode in="coloredBlur" data-v-295f2c94></feMergeNode><feMergeNode in="SourceGraphic" data-v-295f2c94></feMergeNode></feMerge></filter><filter id="pv-glow-purple" x="-50%" y="-50%" width="200%" height="200%" data-v-295f2c94><feGaussianBlur stdDeviation="4" result="coloredBlur" data-v-295f2c94></feGaussianBlur><feMerge data-v-295f2c94><feMergeNode in="coloredBlur" data-v-295f2c94></feMergeNode><feMergeNode in="SourceGraphic" data-v-295f2c94></feMergeNode></feMerge></filter><filter id="pv-glow-strong" x="-100%" y="-100%" width="300%" height="300%" data-v-295f2c94><feGaussianBlur stdDeviation="6" result="coloredBlur" data-v-295f2c94></feGaussianBlur><feMerge data-v-295f2c94><feMergeNode in="coloredBlur" data-v-295f2c94></feMergeNode><feMergeNode in="coloredBlur" data-v-295f2c94></feMergeNode><feMergeNode in="SourceGraphic" data-v-295f2c94></feMergeNode></feMerge></filter></defs>',1)),b("line",{x1:k.value.bl.x,y1:k.value.bl.y,x2:k.value.tl.x,y2:k.value.tl.y,stroke:"#0e7490","stroke-width":"1",class:"pv-shimmer"},null,8,La),b("line",{x1:k.value.tl.x,y1:k.value.tl.y,x2:k.value.tr.x,y2:k.value.tr.y,stroke:"#0e7490","stroke-width":"1",class:"pv-shimmer"},null,8,Da),b("line",{x1:k.value.bl.x,y1:k.value.bl.y,x2:k.value.br.x,y2:k.value.br.y,stroke:"#0e7490","stroke-width":"1",class:"pv-shimmer"},null,8,$a),b("line",{x1:k.value.tr.x,y1:k.value.tr.y,x2:k.value.br.x,y2:k.value.br.y,stroke:"#0e7490","stroke-width":"1",class:"pv-shimmer"},null,8,Ba),b("path",{d:z.value,fill:"none",stroke:"url(#pv-imGradient)","stroke-width":"2"},null,8,ja),b("circle",{cx:Ge.value.x,cy:Ge.value.y,r:"4",fill:"#06b6d4",class:"pv-point-pulse"},null,8,Ha),b("g",{transform:`translate(${Ut.value.x}, ${Ut.value.y-25}) rotate(${At.value})`},[...I[0]||(I[0]=[xn('<text fill="#22d3d3" font-size="11" font-family="Times New Roman, serif" text-anchor="middle" style="letter-spacing:-0.5px;" data-v-295f2c94><tspan font-weight="bold" data-v-295f2c94>Im</tspan><tspan font-style="italic" data-v-295f2c94> f</tspan><tspan data-v-295f2c94>=e</tspan><tspan baseline-shift="super" font-size="7" data-v-295f2c94>−γ(t−t₀)²</tspan><tspan font-style="italic" data-v-295f2c94>sin(ωt)</tspan></text>',1)])],8,Ga),b("line",{x1:w.value.bl.x,y1:w.value.bl.y,x2:w.value.br.x,y2:w.value.br.y,stroke:"#c2410c","stroke-width":"1",class:"pv-shimmer"},null,8,Ua),b("line",{x1:w.value.bl.x,y1:w.value.bl.y,x2:w.value.tl.x,y2:w.value.tl.y,stroke:"#c2410c","stroke-width":"1",class:"pv-shimmer"},null,8,Wa),b("line",{x1:w.value.br.x,y1:w.value.br.y,x2:w.value.tr.x,y2:w.value.tr.y,stroke:"#c2410c","stroke-width":"1",class:"pv-shimmer"},null,8,Va),b("line",{x1:w.value.tl.x,y1:w.value.tl.y,x2:w.value.tr.x,y2:w.value.tr.y,stroke:"#c2410c","stroke-width":"1",class:"pv-shimmer"},null,8,Ka),b("path",{d:T.value,fill:"none",stroke:"url(#pv-reGradient)","stroke-width":"2"},null,8,qa),b("circle",{cx:Ue.value.x,cy:Ue.value.y,r:"4",fill:"#f97316",class:"pv-point-pulse"},null,8,Ya),b("g",{transform:`translate(${K.value.x}, ${K.value.y+25}) rotate(${le.value})`},[...I[1]||(I[1]=[xn('<text fill="#fb923c" font-size="11" font-family="Times New Roman, serif" text-anchor="middle" style="letter-spacing:-0.5px;" data-v-295f2c94><tspan font-weight="bold" data-v-295f2c94>Re</tspan><tspan font-style="italic" data-v-295f2c94> f</tspan><tspan data-v-295f2c94>=e</tspan><tspan baseline-shift="super" font-size="7" data-v-295f2c94>−γ(t−t₀)²</tspan><tspan font-style="italic" data-v-295f2c94>cos(ωt)</tspan></text>',1)])],8,Xa),b("line",{x1:E.value.bl.x,y1:E.value.bl.y,x2:E.value.tl.x,y2:E.value.tl.y,stroke:"#7c3aed","stroke-width":"1",class:"pv-shimmer"},null,8,Ja),b("line",{x1:E.value.tl.x,y1:E.value.tl.y,x2:E.value.tr.x,y2:E.value.tr.y,stroke:"#7c3aed","stroke-width":"1",class:"pv-shimmer"},null,8,Qa),b("line",{x1:E.value.bl.x,y1:E.value.bl.y,x2:E.value.br.x,y2:E.value.br.y,stroke:"#7c3aed","stroke-width":"1",class:"pv-shimmer"},null,8,Za),b("line",{x1:E.value.br.x,y1:E.value.br.y,x2:E.value.tr.x,y2:E.value.tr.y,stroke:"#7c3aed","stroke-width":"1",class:"pv-shimmer"},null,8,ec),b("line",{x1:X.value.x,y1:X.value.y,x2:C.value.x,y2:C.value.y,stroke:"#8b5cf6","stroke-width":"1"},null,8,tc),b("line",{x1:P.value.x,y1:P.value.y,x2:j.value.x,y2:j.value.y,stroke:"#8b5cf6","stroke-width":"1"},null,8,nc),b("polygon",{points:`${C.value.x},${C.value.y-6} ${C.value.x-3},${C.value.y+2} ${C.value.x+3},${C.value.y+2}`,fill:"#a855f7"},null,8,sc),b("path",{d:v.value,fill:"none",stroke:"url(#pv-spiralGradient)","stroke-width":"2"},null,8,ic),b("circle",{cx:st.value.x,cy:st.value.y,r:"4",fill:"#a855f7",class:"pv-point-pulse"},null,8,oc),b("g",{transform:`translate(${Oe.value.x}, ${Oe.value.y-20}) rotate(${G.value})`},[...I[2]||(I[2]=[xn('<text fill="#c084fc" font-size="10" font-family="Times New Roman, serif" text-anchor="middle" style="letter-spacing:-0.5px;" data-v-295f2c94><tspan font-style="italic" data-v-295f2c94>f</tspan><tspan data-v-295f2c94>=e</tspan><tspan baseline-shift="super" font-size="7" data-v-295f2c94>−γ(t−t₀)²</tspan><tspan font-style="italic" data-v-295f2c94>e</tspan><tspan baseline-shift="super" font-size="7" data-v-295f2c94>iωt</tspan></text>',1)])],8,lc),b("path",{d:u.value,fill:"none",stroke:"url(#pv-helixGradient)","stroke-width":"4"},null,8,rc),b("line",{x1:te.value.x,y1:te.value.y,x2:Ge.value.x,y2:Ge.value.y,stroke:"#06b6d4","stroke-width":"1","stroke-dasharray":"6,4",class:"pv-dash-flow",opacity:"0.7"},null,8,ac),b("line",{x1:te.value.x,y1:te.value.y,x2:Ue.value.x,y2:Ue.value.y,stroke:"#f97316","stroke-width":"1","stroke-dasharray":"6,4",class:"pv-dash-flow",opacity:"0.7"},null,8,cc),b("line",{x1:me.value.x,y1:me.value.y,x2:oe.value.x,y2:oe.value.y,stroke:"url(#pv-axisGradient)","stroke-width":"2"},null,8,fc),b("polygon",{points:`${oe.value.x-6},${oe.value.y+6} ${oe.value.x+6},${oe.value.y-2} ${oe.value.x+2},${oe.value.y+10}`,fill:"#94a3b8"},null,8,uc),b("line",{x1:V.value.x,y1:V.value.y+8,x2:ee.value.x,y2:ee.value.y,stroke:"url(#pv-axisGradient)","stroke-width":"2"},null,8,dc),b("polygon",{points:`${ee.value.x},${ee.value.y-8} ${ee.value.x-4},${ee.value.y+2} ${ee.value.x+4},${ee.value.y+2}`,fill:"#94a3b8"},null,8,pc),b("line",{x1:V.value.x-8,y1:V.value.y-5,x2:Z.value.x,y2:Z.value.y,stroke:"url(#pv-axisGradient)","stroke-width":"2"},null,8,vc),b("polygon",{points:`${Z.value.x+8},${Z.value.y+4} ${Z.value.x-2},${Z.value.y-4} ${Z.value.x-4},${Z.value.y+6}`,fill:"#94a3b8"},null,8,hc),b("g",{transform:`translate(${ft.value.x+30}, ${ft.value.y-70}) rotate(${At.value})`},[...I[3]||(I[3]=[b("text",{fill:"#e879f9","font-size":"10","font-family":"Times New Roman, serif","text-anchor":"middle",style:{"letter-spacing":"-0.5px"}},[b("tspan",{"font-style":"italic"},"f(t)"),b("tspan",null,"=Re+"),b("tspan",{"font-style":"italic"},"i"),b("tspan",null,"·Im")],-1)])],8,mc),b("circle",{cx:te.value.x,cy:te.value.y,r:"10",fill:"url(#pv-helixGradient)",opacity:"0.3",class:"pv-point-pulse"},null,8,gc),b("circle",{cx:te.value.x,cy:te.value.y,r:"6",fill:"#fff"},null,8,xc),b("circle",{cx:te.value.x,cy:te.value.y,r:"3",fill:"url(#pv-helixGradient)"},null,8,bc),b("text",{x:ee.value.x-30,y:ee.value.y+8,fill:"#22d3d3","font-size":"18","font-weight":"bold","font-family":"serif"},"Im",8,_c),b("text",{x:Z.value.x+10,y:Z.value.y+6,fill:"#fb923c","font-size":"18","font-weight":"bold","font-family":"serif"},"Re",8,yc),b("text",{x:oe.value.x-3,y:oe.value.y+22,fill:"#c084fc","font-size":"18","font-style":"italic","font-family":"serif"},"t",8,wc),b("text",{x:V.value.x+5,y:V.value.y+20,fill:"#94a3b8","font-size":"13","font-style":"italic","font-family":"serif"},"t₀",8,Sc)]))]),b("div",zc,[b("div",Ac,[b("span",Tc,[I[5]||(I[5]=b("span",{class:"pv-values-f"},"f",-1)),I[6]||(I[6]=b("span",{class:"pv-values-punctuation"},"(",-1)),I[7]||(I[7]=b("span",{class:"pv-values-t"},"t",-1)),I[8]||(I[8]=b("span",{class:"pv-values-punctuation"},") = ",-1)),b("span",Ec,qe(r.value>=0?"+":"")+qe(r.value.toFixed(2)),1),I[9]||(I[9]=b("span",{class:"pv-values-punctuation"}," + ",-1)),b("span",Cc,qe(c.value.toFixed(2)),1),I[10]||(I[10]=b("span",{class:"pv-values-i"}," i",-1))])]),b("div",Rc,[b("span",Ic,[I[11]||(I[11]=b("span",{class:"pv-values-time-t"},"t",-1)),I[12]||(I[12]=b("span",{class:"pv-values-time-punctuation"}," = ",-1)),b("span",Mc,qe((t.value/kc).toFixed(2)),1),I[13]||(I[13]=b("span",{class:"pv-values-time-punctuation"},null,-1)),I[14]||(I[14]=b("span",{class:"pv-values-time-period"},"T",-1))])])])]))}}),[["__scopeId","data-v-295f2c94"]]),Pc={class:"app-container"},Nc={class:"c-controls"},Fc={class:"c-controls-row"},Lc=["value"],Dc=["value"],$c={key:0,class:"c-slider-container"},Bc=["value"],jc={class:"c-slider-label"},Hc={class:"c-foreground-layer"};Ir(Jn({__name:"App",setup(e){const t=Xe(!0),n=Xe(23),s=Xe(0),i=Xe(50),o=Xe(!1),l=[{value:0,label:"Mandelbulb"},{value:1,label:"Mandelbox"},{value:2,label:"Menger Sponge"},{value:3,label:"Sierpinski"},{value:4,label:"Kaleidoscope 3D"},{value:5,label:"Organic Hybrid"},{value:6,label:"Fractal Land"},{value:7,label:"+ Galaxy Nebula"},{value:8,label:"+ Infinite Tunnel"},{value:9,label:"+ Plasma Fractal"},{value:10,label:"+ Circuits"},{value:11,label:"+ Metaballs"},{value:12,label:"+ Volumetric Lines"},{value:13,label:"+ Disco Tunnel"},{value:14,label:"+ Speed Drive"},{value:15,label:"+ Hot Rocks"},{value:16,label:"+ Server Room"},{value:17,label:"+ Remnant X"},{value:18,label:"+ Kali Set"},{value:19,label:"+ Generators"},{value:20,label:"+ Simplicity Galaxy"},{value:21,label:"+ Ribbons"},{value:22,label:"+ Twisted Rings"},{value:23,label:"+ Waves Remix"},{value:24,label:"+ Dancing Metalights"},{value:25,label:"+ IO Blocks"},{value:26,label:"+ Beating Circles"},{value:27,label:"+ Circle Wave"},{value:28,label:"+ Soundflower"},{value:29,label:"+ Polar Beats"},{value:30,label:"+ Undulant Spectre"},{value:31,label:"+ Revision 2015"},{value:32,label:"+ Gameboy Style"},{value:33,label:"+ Electric Storm"},{value:34,label:"+ Vortex"},{value:35,label:"+ Neon Grid"},{value:36,label:"+ Matrix Rain"},{value:37,label:"+ Fire"},{value:38,label:"+ Aurora"},{value:39,label:"+ Wormhole"},{value:40,label:"+ Hexagons"},{value:41,label:"+ Bubbles"},{value:42,label:"+ Lightning"},{value:43,label:"+ Kaleidoscope 2D"},{value:44,label:"+ Starfield"},{value:45,label:"+ Liquid Metal"},{value:46,label:"+ Fractal Tree"},{value:47,label:"+ Voronoi"},{value:48,label:"+ Psychedelic"},{value:49,label:"+ Energy Field"}],r=$(()=>({opacity:i.value/100,filter:`brightness(${.3+i.value/100*.7})`})),c=()=>{t.value=!t.value},d=()=>{o.value=!o.value},u=z=>{const T=z.target;n.value=parseInt(T.value),s.value++},v=z=>{const T=z.target;i.value=parseInt(T.value)};return(z,T)=>(et(),yt("div",Pc,[b("div",Nc,[b("button",{class:vt(["c-menu-toggle",{"c-menu-toggle--open":o.value}]),onClick:d}," ☰ ",2),b("div",{class:vt(["c-menu-panel",{"c-menu-panel--visible":o.value}])},[b("div",Fc,[b("select",{class:"c-fractal-select",onChange:u,value:n.value},[(et(),yt(we,null,gl(l,E=>b("option",{key:E.value,value:E.value},qe(E.label),9,Dc)),64))],40,Lc),b("button",{class:"c-fractal-toggle",onClick:c},qe(t.value?"ON":"OFF"),1)]),t.value?(et(),yt("div",$c,[T[0]||(T[0]=b("span",{class:"c-slider-label"},"Intensity",-1)),b("input",{type:"range",class:"c-brightness-slider",min:"10",max:"100",value:i.value,onInput:v},null,40,Bc),b("span",jc,qe(i.value)+"%",1)])):ki("",!0)],2)]),b("div",{class:vt(["c-background-layer",{"c-background-layer--hidden":!t.value}]),style:Jt(r.value)},[t.value?(et(),Ri(Oa,{key:s.value,mode:n.value},null,8,["mode"])):ki("",!0)],6),b("div",Hc,[Se(Oc)])]))}})).mount("#app")})();
