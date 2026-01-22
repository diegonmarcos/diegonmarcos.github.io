(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const l of document.querySelectorAll('link[rel="modulepreload"]'))s(l);new MutationObserver(l=>{for(const o of l)if(o.type==="childList")for(const i of o.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&s(i)}).observe(document,{childList:!0,subtree:!0});function n(l){const o={};return l.integrity&&(o.integrity=l.integrity),l.referrerPolicy&&(o.referrerPolicy=l.referrerPolicy),l.crossOrigin==="use-credentials"?o.credentials="include":l.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function s(l){if(l.ep)return;l.ep=!0;const o=n(l);fetch(l.href,o)}})();/**
* @vue/shared v3.5.27
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function Wn(e){const t=Object.create(null);for(const n of e.split(","))t[n]=1;return n=>n in t}const q={},_t=[],Ne=()=>{},Us=()=>!1,dn=e=>e.charCodeAt(0)===111&&e.charCodeAt(1)===110&&(e.charCodeAt(2)>122||e.charCodeAt(2)<97),Vn=e=>e.startsWith("onUpdate:"),oe=Object.assign,Kn=(e,t)=>{const n=e.indexOf(t);n>-1&&e.splice(n,1)},Yl=Object.prototype.hasOwnProperty,j=(e,t)=>Yl.call(e,t),F=Array.isArray,xt=e=>vn(e)==="[object Map]",Ws=e=>vn(e)==="[object Set]",L=e=>typeof e=="function",Z=e=>typeof e=="string",st=e=>typeof e=="symbol",J=e=>e!==null&&typeof e=="object",Vs=e=>(J(e)||L(e))&&L(e.then)&&L(e.catch),Ks=Object.prototype.toString,vn=e=>Ks.call(e),Xl=e=>vn(e).slice(8,-1),qs=e=>vn(e)==="[object Object]",qn=e=>Z(e)&&e!=="NaN"&&e[0]!=="-"&&""+parseInt(e,10)===e,Ot=Wn(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),pn=e=>{const t=Object.create(null);return n=>t[n]||(t[n]=e(n))},Jl=/-\w/g,tt=pn(e=>e.replace(Jl,t=>t.slice(1).toUpperCase())),Ql=/\B([A-Z])/g,ut=pn(e=>e.replace(Ql,"-$1").toLowerCase()),Ys=pn(e=>e.charAt(0).toUpperCase()+e.slice(1)),Sn=pn(e=>e?`on${Ys(e)}`:""),et=(e,t)=>!Object.is(e,t),zn=(e,...t)=>{for(let n=0;n<e.length;n++)e[n](...t)},Xs=(e,t,n,s=!1)=>{Object.defineProperty(e,t,{configurable:!0,enumerable:!1,writable:s,value:n})},Zl=e=>{const t=parseFloat(e);return isNaN(t)?e:t};let hs;const hn=()=>hs||(hs=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function mn(e){if(F(e)){const t={};for(let n=0;n<e.length;n++){const s=e[n],l=Z(s)?so(s):mn(s);if(l)for(const o in l)t[o]=l[o]}return t}else if(Z(e)||J(e))return e}const eo=/;(?![^(]*\))/g,to=/:([^]+)/,no=/\/\*[^]*?\*\//g;function so(e){const t={};return e.replace(no,"").split(eo).forEach(n=>{if(n){const s=n.split(to);s.length>1&&(t[s[0].trim()]=s[1].trim())}}),t}function bt(e){let t="";if(Z(e))t=e;else if(F(e))for(let n=0;n<e.length;n++){const s=bt(e[n]);s&&(t+=s+" ")}else if(J(e))for(const n in e)e[n]&&(t+=n+" ");return t.trim()}const lo="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",oo=Wn(lo);function Js(e){return!!e||e===""}const Qs=e=>!!(e&&e.__v_isRef===!0),Qe=e=>Z(e)?e:e==null?"":F(e)||J(e)&&(e.toString===Ks||!L(e.toString))?Qs(e)?Qe(e.value):JSON.stringify(e,Zs,2):String(e),Zs=(e,t)=>Qs(t)?Zs(e,t.value):xt(t)?{[`Map(${t.size})`]:[...t.entries()].reduce((n,[s,l],o)=>(n[An(s,o)+" =>"]=l,n),{})}:Ws(t)?{[`Set(${t.size})`]:[...t.values()].map(n=>An(n))}:st(t)?An(t):J(t)&&!F(t)&&!qs(t)?String(t):t,An=(e,t="")=>{var n;return st(e)?`Symbol(${(n=e.description)!=null?n:t})`:e};/**
* @vue/reactivity v3.5.27
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let ve;class io{constructor(t=!1){this.detached=t,this._active=!0,this._on=0,this.effects=[],this.cleanups=[],this._isPaused=!1,this.parent=ve,!t&&ve&&(this.index=(ve.scopes||(ve.scopes=[])).push(this)-1)}get active(){return this._active}pause(){if(this._active){this._isPaused=!0;let t,n;if(this.scopes)for(t=0,n=this.scopes.length;t<n;t++)this.scopes[t].pause();for(t=0,n=this.effects.length;t<n;t++)this.effects[t].pause()}}resume(){if(this._active&&this._isPaused){this._isPaused=!1;let t,n;if(this.scopes)for(t=0,n=this.scopes.length;t<n;t++)this.scopes[t].resume();for(t=0,n=this.effects.length;t<n;t++)this.effects[t].resume()}}run(t){if(this._active){const n=ve;try{return ve=this,t()}finally{ve=n}}}on(){++this._on===1&&(this.prevScope=ve,ve=this)}off(){this._on>0&&--this._on===0&&(ve=this.prevScope,this.prevScope=void 0)}stop(t){if(this._active){this._active=!1;let n,s;for(n=0,s=this.effects.length;n<s;n++)this.effects[n].stop();for(this.effects.length=0,n=0,s=this.cleanups.length;n<s;n++)this.cleanups[n]();if(this.cleanups.length=0,this.scopes){for(n=0,s=this.scopes.length;n<s;n++)this.scopes[n].stop(!0);this.scopes.length=0}if(!this.detached&&this.parent&&!t){const l=this.parent.scopes.pop();l&&l!==this&&(this.parent.scopes[this.index]=l,l.index=this.index)}this.parent=void 0}}}function ro(){return ve}let K;const Tn=new WeakSet;class el{constructor(t){this.fn=t,this.deps=void 0,this.depsTail=void 0,this.flags=5,this.next=void 0,this.cleanup=void 0,this.scheduler=void 0,ve&&ve.active&&ve.effects.push(this)}pause(){this.flags|=64}resume(){this.flags&64&&(this.flags&=-65,Tn.has(this)&&(Tn.delete(this),this.trigger()))}notify(){this.flags&2&&!(this.flags&32)||this.flags&8||nl(this)}run(){if(!(this.flags&1))return this.fn();this.flags|=2,ms(this),sl(this);const t=K,n=ye;K=this,ye=!0;try{return this.fn()}finally{ll(this),K=t,ye=n,this.flags&=-3}}stop(){if(this.flags&1){for(let t=this.deps;t;t=t.nextDep)Jn(t);this.deps=this.depsTail=void 0,ms(this),this.onStop&&this.onStop(),this.flags&=-2}}trigger(){this.flags&64?Tn.add(this):this.scheduler?this.scheduler():this.runIfDirty()}runIfDirty(){Nn(this)&&this.run()}get dirty(){return Nn(this)}}let tl=0,Pt,Nt;function nl(e,t=!1){if(e.flags|=8,t){e.next=Nt,Nt=e;return}e.next=Pt,Pt=e}function Yn(){tl++}function Xn(){if(--tl>0)return;if(Nt){let t=Nt;for(Nt=void 0;t;){const n=t.next;t.next=void 0,t.flags&=-9,t=n}}let e;for(;Pt;){let t=Pt;for(Pt=void 0;t;){const n=t.next;if(t.next=void 0,t.flags&=-9,t.flags&1)try{t.trigger()}catch(s){e||(e=s)}t=n}}if(e)throw e}function sl(e){for(let t=e.deps;t;t=t.nextDep)t.version=-1,t.prevActiveLink=t.dep.activeLink,t.dep.activeLink=t}function ll(e){let t,n=e.depsTail,s=n;for(;s;){const l=s.prevDep;s.version===-1?(s===n&&(n=l),Jn(s),co(s)):t=s,s.dep.activeLink=s.prevActiveLink,s.prevActiveLink=void 0,s=l}e.deps=t,e.depsTail=n}function Nn(e){for(let t=e.deps;t;t=t.nextDep)if(t.dep.version!==t.version||t.dep.computed&&(ol(t.dep.computed)||t.dep.version!==t.version))return!0;return!!e._dirty}function ol(e){if(e.flags&4&&!(e.flags&16)||(e.flags&=-17,e.globalVersion===kt)||(e.globalVersion=kt,!e.isSSR&&e.flags&128&&(!e.deps&&!e._dirty||!Nn(e))))return;e.flags|=2;const t=e.dep,n=K,s=ye;K=e,ye=!0;try{sl(e);const l=e.fn(e._value);(t.version===0||et(l,e._value))&&(e.flags|=128,e._value=l,t.version++)}catch(l){throw t.version++,l}finally{K=n,ye=s,ll(e),e.flags&=-3}}function Jn(e,t=!1){const{dep:n,prevSub:s,nextSub:l}=e;if(s&&(s.nextSub=l,e.prevSub=void 0),l&&(l.prevSub=s,e.nextSub=void 0),n.subs===e&&(n.subs=s,!s&&n.computed)){n.computed.flags&=-5;for(let o=n.computed.deps;o;o=o.nextDep)Jn(o,!0)}!t&&!--n.sc&&n.map&&n.map.delete(n.key)}function co(e){const{prevDep:t,nextDep:n}=e;t&&(t.nextDep=n,e.prevDep=void 0),n&&(n.prevDep=t,e.nextDep=void 0)}let ye=!0;const il=[];function je(){il.push(ye),ye=!1}function He(){const e=il.pop();ye=e===void 0?!0:e}function ms(e){const{cleanup:t}=e;if(e.cleanup=void 0,t){const n=K;K=void 0;try{t()}finally{K=n}}}let kt=0;class ao{constructor(t,n){this.sub=t,this.dep=n,this.version=n.version,this.nextDep=this.prevDep=this.nextSub=this.prevSub=this.prevActiveLink=void 0}}class Qn{constructor(t){this.computed=t,this.version=0,this.activeLink=void 0,this.subs=void 0,this.map=void 0,this.key=void 0,this.sc=0,this.__v_skip=!0}track(t){if(!K||!ye||K===this.computed)return;let n=this.activeLink;if(n===void 0||n.sub!==K)n=this.activeLink=new ao(K,this),K.deps?(n.prevDep=K.depsTail,K.depsTail.nextDep=n,K.depsTail=n):K.deps=K.depsTail=n,rl(n);else if(n.version===-1&&(n.version=this.version,n.nextDep)){const s=n.nextDep;s.prevDep=n.prevDep,n.prevDep&&(n.prevDep.nextDep=s),n.prevDep=K.depsTail,n.nextDep=void 0,K.depsTail.nextDep=n,K.depsTail=n,K.deps===n&&(K.deps=s)}return n}trigger(t){this.version++,kt++,this.notify(t)}notify(t){Yn();try{for(let n=this.subs;n;n=n.prevSub)n.sub.notify()&&n.sub.dep.notify()}finally{Xn()}}}function rl(e){if(e.dep.sc++,e.sub.flags&4){const t=e.dep.computed;if(t&&!e.dep.subs){t.flags|=20;for(let s=t.deps;s;s=s.nextDep)rl(s)}const n=e.dep.subs;n!==e&&(e.prevSub=n,n&&(n.nextSub=e)),e.dep.subs=e}}const Fn=new WeakMap,at=Symbol(""),Ln=Symbol(""),Bt=Symbol("");function ie(e,t,n){if(ye&&K){let s=Fn.get(e);s||Fn.set(e,s=new Map);let l=s.get(n);l||(s.set(n,l=new Qn),l.map=s,l.key=n),l.track()}}function Be(e,t,n,s,l,o){const i=Fn.get(e);if(!i){kt++;return}const r=a=>{a&&a.trigger()};if(Yn(),t==="clear")i.forEach(r);else{const a=F(e),d=a&&qn(n);if(a&&n==="length"){const u=Number(s);i.forEach((p,z)=>{(z==="length"||z===Bt||!st(z)&&z>=u)&&r(p)})}else switch((n!==void 0||i.has(void 0))&&r(i.get(n)),d&&r(i.get(Bt)),t){case"add":a?d&&r(i.get("length")):(r(i.get(at)),xt(e)&&r(i.get(Ln)));break;case"delete":a||(r(i.get(at)),xt(e)&&r(i.get(Ln)));break;case"set":xt(e)&&r(i.get(at));break}}Xn()}function pt(e){const t=B(e);return t===e?t:(ie(t,"iterate",Bt),xe(e)?t:t.map(Se))}function gn(e){return ie(e=B(e),"iterate",Bt),e}function Ke(e,t){return Ge(e)?zt(ft(e)?Se(t):t):Se(t)}const fo={__proto__:null,[Symbol.iterator](){return En(this,Symbol.iterator,e=>Ke(this,e))},concat(...e){return pt(this).concat(...e.map(t=>F(t)?pt(t):t))},entries(){return En(this,"entries",e=>(e[1]=Ke(this,e[1]),e))},every(e,t){return $e(this,"every",e,t,void 0,arguments)},filter(e,t){return $e(this,"filter",e,t,n=>n.map(s=>Ke(this,s)),arguments)},find(e,t){return $e(this,"find",e,t,n=>Ke(this,n),arguments)},findIndex(e,t){return $e(this,"findIndex",e,t,void 0,arguments)},findLast(e,t){return $e(this,"findLast",e,t,n=>Ke(this,n),arguments)},findLastIndex(e,t){return $e(this,"findLastIndex",e,t,void 0,arguments)},forEach(e,t){return $e(this,"forEach",e,t,void 0,arguments)},includes(...e){return Cn(this,"includes",e)},indexOf(...e){return Cn(this,"indexOf",e)},join(e){return pt(this).join(e)},lastIndexOf(...e){return Cn(this,"lastIndexOf",e)},map(e,t){return $e(this,"map",e,t,void 0,arguments)},pop(){return Rt(this,"pop")},push(...e){return Rt(this,"push",e)},reduce(e,...t){return gs(this,"reduce",e,t)},reduceRight(e,...t){return gs(this,"reduceRight",e,t)},shift(){return Rt(this,"shift")},some(e,t){return $e(this,"some",e,t,void 0,arguments)},splice(...e){return Rt(this,"splice",e)},toReversed(){return pt(this).toReversed()},toSorted(e){return pt(this).toSorted(e)},toSpliced(...e){return pt(this).toSpliced(...e)},unshift(...e){return Rt(this,"unshift",e)},values(){return En(this,"values",e=>Ke(this,e))}};function En(e,t,n){const s=gn(e),l=s[t]();return s!==e&&!xe(e)&&(l._next=l.next,l.next=()=>{const o=l._next();return o.done||(o.value=n(o.value)),o}),l}const uo=Array.prototype;function $e(e,t,n,s,l,o){const i=gn(e),r=i!==e&&!xe(e),a=i[t];if(a!==uo[t]){const p=a.apply(e,o);return r?Se(p):p}let d=n;i!==e&&(r?d=function(p,z){return n.call(this,Ke(e,p),z,e)}:n.length>2&&(d=function(p,z){return n.call(this,p,z,e)}));const u=a.call(i,d,s);return r&&l?l(u):u}function gs(e,t,n,s){const l=gn(e);let o=n;return l!==e&&(xe(e)?n.length>3&&(o=function(i,r,a){return n.call(this,i,r,a,e)}):o=function(i,r,a){return n.call(this,i,Ke(e,r),a,e)}),l[t](o,...s)}function Cn(e,t,n){const s=B(e);ie(s,"iterate",Bt);const l=s[t](...n);return(l===-1||l===!1)&&ns(n[0])?(n[0]=B(n[0]),s[t](...n)):l}function Rt(e,t,n=[]){je(),Yn();const s=B(e)[t].apply(e,n);return Xn(),He(),s}const vo=Wn("__proto__,__v_isRef,__isVue"),cl=new Set(Object.getOwnPropertyNames(Symbol).filter(e=>e!=="arguments"&&e!=="caller").map(e=>Symbol[e]).filter(st));function po(e){st(e)||(e=String(e));const t=B(this);return ie(t,"has",e),t.hasOwnProperty(e)}class al{constructor(t=!1,n=!1){this._isReadonly=t,this._isShallow=n}get(t,n,s){if(n==="__v_skip")return t.__v_skip;const l=this._isReadonly,o=this._isShallow;if(n==="__v_isReactive")return!l;if(n==="__v_isReadonly")return l;if(n==="__v_isShallow")return o;if(n==="__v_raw")return s===(l?o?zo:vl:o?dl:ul).get(t)||Object.getPrototypeOf(t)===Object.getPrototypeOf(s)?t:void 0;const i=F(t);if(!l){let a;if(i&&(a=fo[n]))return a;if(n==="hasOwnProperty")return po}const r=Reflect.get(t,n,re(t)?t:s);if((st(n)?cl.has(n):vo(n))||(l||ie(t,"get",n),o))return r;if(re(r)){const a=i&&qn(n)?r:r.value;return l&&J(a)?$n(a):a}return J(r)?l?$n(r):es(r):r}}class fl extends al{constructor(t=!1){super(!1,t)}set(t,n,s,l){let o=t[n];const i=F(t)&&qn(n);if(!this._isShallow){const d=Ge(o);if(!xe(s)&&!Ge(s)&&(o=B(o),s=B(s)),!i&&re(o)&&!re(s))return d||(o.value=s),!0}const r=i?Number(n)<t.length:j(t,n),a=Reflect.set(t,n,s,re(t)?t:l);return t===B(l)&&(r?et(s,o)&&Be(t,"set",n,s):Be(t,"add",n,s)),a}deleteProperty(t,n){const s=j(t,n);t[n];const l=Reflect.deleteProperty(t,n);return l&&s&&Be(t,"delete",n,void 0),l}has(t,n){const s=Reflect.has(t,n);return(!st(n)||!cl.has(n))&&ie(t,"has",n),s}ownKeys(t){return ie(t,"iterate",F(t)?"length":at),Reflect.ownKeys(t)}}class ho extends al{constructor(t=!1){super(!0,t)}set(t,n){return!0}deleteProperty(t,n){return!0}}const mo=new fl,go=new ho,_o=new fl(!0);const Dn=e=>e,qt=e=>Reflect.getPrototypeOf(e);function xo(e,t,n){return function(...s){const l=this.__v_raw,o=B(l),i=xt(o),r=e==="entries"||e===Symbol.iterator&&i,a=e==="keys"&&i,d=l[e](...s),u=n?Dn:t?zt:Se;return!t&&ie(o,"iterate",a?Ln:at),oe(Object.create(d),{next(){const{value:p,done:z}=d.next();return z?{value:p,done:z}:{value:r?[u(p[0]),u(p[1])]:u(p),done:z}}})}}function Yt(e){return function(...t){return e==="delete"?!1:e==="clear"?void 0:this}}function bo(e,t){const n={get(l){const o=this.__v_raw,i=B(o),r=B(l);e||(et(l,r)&&ie(i,"get",l),ie(i,"get",r));const{has:a}=qt(i),d=t?Dn:e?zt:Se;if(a.call(i,l))return d(o.get(l));if(a.call(i,r))return d(o.get(r));o!==i&&o.get(l)},get size(){const l=this.__v_raw;return!e&&ie(B(l),"iterate",at),l.size},has(l){const o=this.__v_raw,i=B(o),r=B(l);return e||(et(l,r)&&ie(i,"has",l),ie(i,"has",r)),l===r?o.has(l):o.has(l)||o.has(r)},forEach(l,o){const i=this,r=i.__v_raw,a=B(r),d=t?Dn:e?zt:Se;return!e&&ie(a,"iterate",at),r.forEach((u,p)=>l.call(o,d(u),d(p),i))}};return oe(n,e?{add:Yt("add"),set:Yt("set"),delete:Yt("delete"),clear:Yt("clear")}:{add(l){!t&&!xe(l)&&!Ge(l)&&(l=B(l));const o=B(this);return qt(o).has.call(o,l)||(o.add(l),Be(o,"add",l,l)),this},set(l,o){!t&&!xe(o)&&!Ge(o)&&(o=B(o));const i=B(this),{has:r,get:a}=qt(i);let d=r.call(i,l);d||(l=B(l),d=r.call(i,l));const u=a.call(i,l);return i.set(l,o),d?et(o,u)&&Be(i,"set",l,o):Be(i,"add",l,o),this},delete(l){const o=B(this),{has:i,get:r}=qt(o);let a=i.call(o,l);a||(l=B(l),a=i.call(o,l)),r&&r.call(o,l);const d=o.delete(l);return a&&Be(o,"delete",l,void 0),d},clear(){const l=B(this),o=l.size!==0,i=l.clear();return o&&Be(l,"clear",void 0,void 0),i}}),["keys","values","entries",Symbol.iterator].forEach(l=>{n[l]=xo(l,e,t)}),n}function Zn(e,t){const n=bo(e,t);return(s,l,o)=>l==="__v_isReactive"?!e:l==="__v_isReadonly"?e:l==="__v_raw"?s:Reflect.get(j(n,l)&&l in s?n:s,l,o)}const yo={get:Zn(!1,!1)},wo={get:Zn(!1,!0)},So={get:Zn(!0,!1)};const ul=new WeakMap,dl=new WeakMap,vl=new WeakMap,zo=new WeakMap;function Ao(e){switch(e){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function To(e){return e.__v_skip||!Object.isExtensible(e)?0:Ao(Xl(e))}function es(e){return Ge(e)?e:ts(e,!1,mo,yo,ul)}function Eo(e){return ts(e,!1,_o,wo,dl)}function $n(e){return ts(e,!0,go,So,vl)}function ts(e,t,n,s,l){if(!J(e)||e.__v_raw&&!(t&&e.__v_isReactive))return e;const o=To(e);if(o===0)return e;const i=l.get(e);if(i)return i;const r=new Proxy(e,o===2?s:n);return l.set(e,r),r}function ft(e){return Ge(e)?ft(e.__v_raw):!!(e&&e.__v_isReactive)}function Ge(e){return!!(e&&e.__v_isReadonly)}function xe(e){return!!(e&&e.__v_isShallow)}function ns(e){return e?!!e.__v_raw:!1}function B(e){const t=e&&e.__v_raw;return t?B(t):e}function Co(e){return!j(e,"__v_skip")&&Object.isExtensible(e)&&Xs(e,"__v_skip",!0),e}const Se=e=>J(e)?es(e):e,zt=e=>J(e)?$n(e):e;function re(e){return e?e.__v_isRef===!0:!1}function Xe(e){return Ro(e,!1)}function Ro(e,t){return re(e)?e:new Io(e,t)}class Io{constructor(t,n){this.dep=new Qn,this.__v_isRef=!0,this.__v_isShallow=!1,this._rawValue=n?t:B(t),this._value=n?t:Se(t),this.__v_isShallow=n}get value(){return this.dep.track(),this._value}set value(t){const n=this._rawValue,s=this.__v_isShallow||xe(t)||Ge(t);t=s?t:B(t),et(t,n)&&(this._rawValue=t,this._value=s?t:Se(t),this.dep.trigger())}}function Mo(e){return re(e)?e.value:e}const Oo={get:(e,t,n)=>t==="__v_raw"?e:Mo(Reflect.get(e,t,n)),set:(e,t,n,s)=>{const l=e[t];return re(l)&&!re(n)?(l.value=n,!0):Reflect.set(e,t,n,s)}};function pl(e){return ft(e)?e:new Proxy(e,Oo)}class Po{constructor(t,n,s){this.fn=t,this.setter=n,this._value=void 0,this.dep=new Qn(this),this.__v_isRef=!0,this.deps=void 0,this.depsTail=void 0,this.flags=16,this.globalVersion=kt-1,this.next=void 0,this.effect=this,this.__v_isReadonly=!n,this.isSSR=s}notify(){if(this.flags|=16,!(this.flags&8)&&K!==this)return nl(this,!0),!0}get value(){const t=this.dep.track();return ol(this),t&&(t.version=this.dep.version),this._value}set value(t){this.setter&&this.setter(t)}}function No(e,t,n=!1){let s,l;return L(e)?s=e:(s=e.get,l=e.set),new Po(s,l,n)}const Xt={},on=new WeakMap;let ct;function Fo(e,t=!1,n=ct){if(n){let s=on.get(n);s||on.set(n,s=[]),s.push(e)}}function Lo(e,t,n=q){const{immediate:s,deep:l,once:o,scheduler:i,augmentJob:r,call:a}=n,d=w=>l?w:xe(w)||l===!1||l===0?Je(w,1):Je(w);let u,p,z,T,E=!1,C=!1;if(re(e)?(p=()=>e.value,E=xe(e)):ft(e)?(p=()=>d(e),E=!0):F(e)?(C=!0,E=e.some(w=>ft(w)||xe(w)),p=()=>e.map(w=>{if(re(w))return w.value;if(ft(w))return d(w);if(L(w))return a?a(w,2):w()})):L(e)?t?p=a?()=>a(e,2):e:p=()=>{if(z){je();try{z()}finally{He()}}const w=ct;ct=u;try{return a?a(e,3,[T]):e(T)}finally{ct=w}}:p=Ne,t&&l){const w=p,U=l===!0?1/0:l;p=()=>Je(w(),U)}const Y=ro(),N=()=>{u.stop(),Y&&Y.active&&Kn(Y.effects,u)};if(o&&t){const w=t;t=(...U)=>{w(...U),N()}}let k=C?new Array(e.length).fill(Xt):Xt;const O=w=>{if(!(!(u.flags&1)||!u.dirty&&!w))if(t){const U=u.run();if(l||E||(C?U.some((ee,Q)=>et(ee,k[Q])):et(U,k))){z&&z();const ee=ct;ct=u;try{const Q=[U,k===Xt?void 0:C&&k[0]===Xt?[]:k,T];k=U,a?a(t,3,Q):t(...Q)}finally{ct=ee}}}else u.run()};return r&&r(O),u=new el(p),u.scheduler=i?()=>i(O,!1):O,T=w=>Fo(w,!1,u),z=u.onStop=()=>{const w=on.get(u);if(w){if(a)a(w,4);else for(const U of w)U();on.delete(u)}},t?s?O(!0):k=u.run():i?i(O.bind(null,!0),!0):u.run(),N.pause=u.pause.bind(u),N.resume=u.resume.bind(u),N.stop=N,N}function Je(e,t=1/0,n){if(t<=0||!J(e)||e.__v_skip||(n=n||new Map,(n.get(e)||0)>=t))return e;if(n.set(e,t),t--,re(e))Je(e.value,t,n);else if(F(e))for(let s=0;s<e.length;s++)Je(e[s],t,n);else if(Ws(e)||xt(e))e.forEach(s=>{Je(s,t,n)});else if(qs(e)){for(const s in e)Je(e[s],t,n);for(const s of Object.getOwnPropertySymbols(e))Object.prototype.propertyIsEnumerable.call(e,s)&&Je(e[s],t,n)}return e}/**
* @vue/runtime-core v3.5.27
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function Ut(e,t,n,s){try{return s?e(...s):e()}catch(l){_n(l,t,n)}}function Fe(e,t,n,s){if(L(e)){const l=Ut(e,t,n,s);return l&&Vs(l)&&l.catch(o=>{_n(o,t,n)}),l}if(F(e)){const l=[];for(let o=0;o<e.length;o++)l.push(Fe(e[o],t,n,s));return l}}function _n(e,t,n,s=!0){const l=t?t.vnode:null,{errorHandler:o,throwUnhandledErrorInProduction:i}=t&&t.appContext.config||q;if(t){let r=t.parent;const a=t.proxy,d=`https://vuejs.org/error-reference/#runtime-${n}`;for(;r;){const u=r.ec;if(u){for(let p=0;p<u.length;p++)if(u[p](e,a,d)===!1)return}r=r.parent}if(o){je(),Ut(o,null,10,[e,a,d]),He();return}}Do(e,n,l,s,i)}function Do(e,t,n,s=!0,l=!1){if(l)throw e;console.error(e)}const ae=[];let Me=-1;const yt=[];let qe=null,gt=0;const hl=Promise.resolve();let rn=null;function $o(e){const t=rn||hl;return e?t.then(this?e.bind(this):e):t}function ko(e){let t=Me+1,n=ae.length;for(;t<n;){const s=t+n>>>1,l=ae[s],o=jt(l);o<e||o===e&&l.flags&2?t=s+1:n=s}return t}function ss(e){if(!(e.flags&1)){const t=jt(e),n=ae[ae.length-1];!n||!(e.flags&2)&&t>=jt(n)?ae.push(e):ae.splice(ko(t),0,e),e.flags|=1,ml()}}function ml(){rn||(rn=hl.then(_l))}function Bo(e){F(e)?yt.push(...e):qe&&e.id===-1?qe.splice(gt+1,0,e):e.flags&1||(yt.push(e),e.flags|=1),ml()}function _s(e,t,n=Me+1){for(;n<ae.length;n++){const s=ae[n];if(s&&s.flags&2){if(e&&s.id!==e.uid)continue;ae.splice(n,1),n--,s.flags&4&&(s.flags&=-2),s(),s.flags&4||(s.flags&=-2)}}}function gl(e){if(yt.length){const t=[...new Set(yt)].sort((n,s)=>jt(n)-jt(s));if(yt.length=0,qe){qe.push(...t);return}for(qe=t,gt=0;gt<qe.length;gt++){const n=qe[gt];n.flags&4&&(n.flags&=-2),n.flags&8||n(),n.flags&=-2}qe=null,gt=0}}const jt=e=>e.id==null?e.flags&2?-1:1/0:e.id;function _l(e){try{for(Me=0;Me<ae.length;Me++){const t=ae[Me];t&&!(t.flags&8)&&(t.flags&4&&(t.flags&=-2),Ut(t,t.i,t.i?15:14),t.flags&4||(t.flags&=-2))}}finally{for(;Me<ae.length;Me++){const t=ae[Me];t&&(t.flags&=-2)}Me=-1,ae.length=0,gl(),rn=null,(ae.length||yt.length)&&_l()}}let Pe=null,xl=null;function cn(e){const t=Pe;return Pe=e,xl=e&&e.type.__scopeId||null,t}function jo(e,t=Pe,n){if(!t||e._n)return e;const s=(...l)=>{s._d&&Cs(-1);const o=cn(t);let i;try{i=e(...l)}finally{cn(o),s._d&&Cs(1)}return i};return s._n=!0,s._c=!0,s._d=!0,s}function it(e,t,n,s){const l=e.dirs,o=t&&t.dirs;for(let i=0;i<l.length;i++){const r=l[i];o&&(r.oldValue=o[i].value);let a=r.dir[s];a&&(je(),Fe(a,n,8,[e.el,r,e,t]),He())}}function Ho(e,t){if(fe){let n=fe.provides;const s=fe.parent&&fe.parent.provides;s===n&&(n=fe.provides=Object.create(s)),n[e]=t}}function tn(e,t,n=!1){const s=Hi();if(s||wt){let l=wt?wt._context.provides:s?s.parent==null||s.ce?s.vnode.appContext&&s.vnode.appContext.provides:s.parent.provides:void 0;if(l&&e in l)return l[e];if(arguments.length>1)return n&&L(t)?t.call(s&&s.proxy):t}}const Go=Symbol.for("v-scx"),Uo=()=>tn(Go);function Rn(e,t,n){return bl(e,t,n)}function bl(e,t,n=q){const{immediate:s,deep:l,flush:o,once:i}=n,r=oe({},n),a=t&&s||!t&&o!=="post";let d;if(Gt){if(o==="sync"){const T=Uo();d=T.__watcherHandles||(T.__watcherHandles=[])}else if(!a){const T=()=>{};return T.stop=Ne,T.resume=Ne,T.pause=Ne,T}}const u=fe;r.call=(T,E,C)=>Fe(T,u,E,C);let p=!1;o==="post"?r.scheduler=T=>{ge(T,u&&u.suspense)}:o!=="sync"&&(p=!0,r.scheduler=(T,E)=>{E?T():ss(T)}),r.augmentJob=T=>{t&&(T.flags|=4),p&&(T.flags|=2,u&&(T.id=u.uid,T.i=u))};const z=Lo(e,t,r);return Gt&&(d?d.push(z):a&&z()),z}function Wo(e,t,n){const s=this.proxy,l=Z(e)?e.includes(".")?yl(s,e):()=>s[e]:e.bind(s,s);let o;L(t)?o=t:(o=t.handler,n=t);const i=Wt(this),r=bl(l,o.bind(s),n);return i(),r}function yl(e,t){const n=t.split(".");return()=>{let s=e;for(let l=0;l<n.length&&s;l++)s=s[n[l]];return s}}const Vo=Symbol("_vte"),Ko=e=>e.__isTeleport,qo=Symbol("_leaveCb");function ls(e,t){e.shapeFlag&6&&e.component?(e.transition=t,ls(e.component.subTree,t)):e.shapeFlag&128?(e.ssContent.transition=t.clone(e.ssContent),e.ssFallback.transition=t.clone(e.ssFallback)):e.transition=t}function os(e,t){return L(e)?oe({name:e.name},t,{setup:e}):e}function wl(e){e.ids=[e.ids[0]+e.ids[2]+++"-",0,0]}const an=new WeakMap;function Ft(e,t,n,s,l=!1){if(F(e)){e.forEach((E,C)=>Ft(E,t&&(F(t)?t[C]:t),n,s,l));return}if(Lt(s)&&!l){s.shapeFlag&512&&s.type.__asyncResolved&&s.component.subTree.component&&Ft(e,t,n,s.component.subTree);return}const o=s.shapeFlag&4?fs(s.component):s.el,i=l?null:o,{i:r,r:a}=e,d=t&&t.r,u=r.refs===q?r.refs={}:r.refs,p=r.setupState,z=B(p),T=p===q?Us:E=>j(z,E);if(d!=null&&d!==a){if(xs(t),Z(d))u[d]=null,T(d)&&(p[d]=null);else if(re(d)){d.value=null;const E=t;E.k&&(u[E.k]=null)}}if(L(a))Ut(a,r,12,[i,u]);else{const E=Z(a),C=re(a);if(E||C){const Y=()=>{if(e.f){const N=E?T(a)?p[a]:u[a]:a.value;if(l)F(N)&&Kn(N,o);else if(F(N))N.includes(o)||N.push(o);else if(E)u[a]=[o],T(a)&&(p[a]=u[a]);else{const k=[o];a.value=k,e.k&&(u[e.k]=k)}}else E?(u[a]=i,T(a)&&(p[a]=i)):C&&(a.value=i,e.k&&(u[e.k]=i))};if(i){const N=()=>{Y(),an.delete(e)};N.id=-1,an.set(e,N),ge(N,n)}else xs(e),Y()}}}function xs(e){const t=an.get(e);t&&(t.flags|=8,an.delete(e))}hn().requestIdleCallback;hn().cancelIdleCallback;const Lt=e=>!!e.type.__asyncLoader,Sl=e=>e.type.__isKeepAlive;function Yo(e,t){zl(e,"a",t)}function Xo(e,t){zl(e,"da",t)}function zl(e,t,n=fe){const s=e.__wdc||(e.__wdc=()=>{let l=n;for(;l;){if(l.isDeactivated)return;l=l.parent}return e()});if(xn(t,s,n),n){let l=n.parent;for(;l&&l.parent;)Sl(l.parent.vnode)&&Jo(s,t,n,l),l=l.parent}}function Jo(e,t,n,s){const l=xn(t,e,s,!0);bn(()=>{Kn(s[t],l)},n)}function xn(e,t,n=fe,s=!1){if(n){const l=n[e]||(n[e]=[]),o=t.__weh||(t.__weh=(...i)=>{je();const r=Wt(n),a=Fe(t,n,e,i);return r(),He(),a});return s?l.unshift(o):l.push(o),o}}const Ue=e=>(t,n=fe)=>{(!Gt||e==="sp")&&xn(e,(...s)=>t(...s),n)},Qo=Ue("bm"),is=Ue("m"),Zo=Ue("bu"),ei=Ue("u"),ti=Ue("bum"),bn=Ue("um"),ni=Ue("sp"),si=Ue("rtg"),li=Ue("rtc");function oi(e,t=fe){xn("ec",e,t)}const ii=Symbol.for("v-ndc");function ri(e,t,n,s){let l;const o=n,i=F(e);if(i||Z(e)){const r=i&&ft(e);let a=!1,d=!1;r&&(a=!xe(e),d=Ge(e),e=gn(e)),l=new Array(e.length);for(let u=0,p=e.length;u<p;u++)l[u]=t(a?d?zt(Se(e[u])):Se(e[u]):e[u],u,void 0,o)}else if(typeof e=="number"){l=new Array(e);for(let r=0;r<e;r++)l[r]=t(r+1,r,void 0,o)}else if(J(e))if(e[Symbol.iterator])l=Array.from(e,(r,a)=>t(r,a,void 0,o));else{const r=Object.keys(e);l=new Array(r.length);for(let a=0,d=r.length;a<d;a++){const u=r[a];l[a]=t(e[u],u,a,o)}}else l=[];return l}const kn=e=>e?Wl(e)?fs(e):kn(e.parent):null,Dt=oe(Object.create(null),{$:e=>e,$el:e=>e.vnode.el,$data:e=>e.data,$props:e=>e.props,$attrs:e=>e.attrs,$slots:e=>e.slots,$refs:e=>e.refs,$parent:e=>kn(e.parent),$root:e=>kn(e.root),$host:e=>e.ce,$emit:e=>e.emit,$options:e=>Tl(e),$forceUpdate:e=>e.f||(e.f=()=>{ss(e.update)}),$nextTick:e=>e.n||(e.n=$o.bind(e.proxy)),$watch:e=>Wo.bind(e)}),In=(e,t)=>e!==q&&!e.__isScriptSetup&&j(e,t),ci={get({_:e},t){if(t==="__v_skip")return!0;const{ctx:n,setupState:s,data:l,props:o,accessCache:i,type:r,appContext:a}=e;if(t[0]!=="$"){const z=i[t];if(z!==void 0)switch(z){case 1:return s[t];case 2:return l[t];case 4:return n[t];case 3:return o[t]}else{if(In(s,t))return i[t]=1,s[t];if(l!==q&&j(l,t))return i[t]=2,l[t];if(j(o,t))return i[t]=3,o[t];if(n!==q&&j(n,t))return i[t]=4,n[t];Bn&&(i[t]=0)}}const d=Dt[t];let u,p;if(d)return t==="$attrs"&&ie(e.attrs,"get",""),d(e);if((u=r.__cssModules)&&(u=u[t]))return u;if(n!==q&&j(n,t))return i[t]=4,n[t];if(p=a.config.globalProperties,j(p,t))return p[t]},set({_:e},t,n){const{data:s,setupState:l,ctx:o}=e;return In(l,t)?(l[t]=n,!0):s!==q&&j(s,t)?(s[t]=n,!0):j(e.props,t)||t[0]==="$"&&t.slice(1)in e?!1:(o[t]=n,!0)},has({_:{data:e,setupState:t,accessCache:n,ctx:s,appContext:l,props:o,type:i}},r){let a;return!!(n[r]||e!==q&&r[0]!=="$"&&j(e,r)||In(t,r)||j(o,r)||j(s,r)||j(Dt,r)||j(l.config.globalProperties,r)||(a=i.__cssModules)&&a[r])},defineProperty(e,t,n){return n.get!=null?e._.accessCache[t]=0:j(n,"value")&&this.set(e,t,n.value,null),Reflect.defineProperty(e,t,n)}};function bs(e){return F(e)?e.reduce((t,n)=>(t[n]=null,t),{}):e}let Bn=!0;function ai(e){const t=Tl(e),n=e.proxy,s=e.ctx;Bn=!1,t.beforeCreate&&ys(t.beforeCreate,e,"bc");const{data:l,computed:o,methods:i,watch:r,provide:a,inject:d,created:u,beforeMount:p,mounted:z,beforeUpdate:T,updated:E,activated:C,deactivated:Y,beforeDestroy:N,beforeUnmount:k,destroyed:O,unmounted:w,render:U,renderTracked:ee,renderTriggered:Q,errorCaptured:pe,serverPrefetch:se,expose:te,inheritAttrs:We,components:Le,directives:De,filters:dt}=t;if(d&&fi(d,s,null),i)for(const W in i){const G=i[W];L(G)&&(s[W]=G.bind(n))}if(l){const W=l.call(n,n);J(W)&&(e.data=es(W))}if(Bn=!0,o)for(const W in o){const G=o[W],ze=L(G)?G.bind(n,n):L(G.get)?G.get.bind(n,n):Ne,lt=!L(G)&&L(G.set)?G.set.bind(n):Ne,Ae=$({get:ze,set:lt});Object.defineProperty(s,W,{enumerable:!0,configurable:!0,get:()=>Ae.value,set:he=>Ae.value=he})}if(r)for(const W in r)Al(r[W],s,n,W);if(a){const W=L(a)?a.call(n):a;Reflect.ownKeys(W).forEach(G=>{Ho(G,W[G])})}u&&ys(u,e,"c");function le(W,G){F(G)?G.forEach(ze=>W(ze.bind(n))):G&&W(G.bind(n))}if(le(Qo,p),le(is,z),le(Zo,T),le(ei,E),le(Yo,C),le(Xo,Y),le(oi,pe),le(li,ee),le(si,Q),le(ti,k),le(bn,w),le(ni,se),F(te))if(te.length){const W=e.exposed||(e.exposed={});te.forEach(G=>{Object.defineProperty(W,G,{get:()=>n[G],set:ze=>n[G]=ze,enumerable:!0})})}else e.exposed||(e.exposed={});U&&e.render===Ne&&(e.render=U),We!=null&&(e.inheritAttrs=We),Le&&(e.components=Le),De&&(e.directives=De),se&&wl(e)}function fi(e,t,n=Ne){F(e)&&(e=jn(e));for(const s in e){const l=e[s];let o;J(l)?"default"in l?o=tn(l.from||s,l.default,!0):o=tn(l.from||s):o=tn(l),re(o)?Object.defineProperty(t,s,{enumerable:!0,configurable:!0,get:()=>o.value,set:i=>o.value=i}):t[s]=o}}function ys(e,t,n){Fe(F(e)?e.map(s=>s.bind(t.proxy)):e.bind(t.proxy),t,n)}function Al(e,t,n,s){let l=s.includes(".")?yl(n,s):()=>n[s];if(Z(e)){const o=t[e];L(o)&&Rn(l,o)}else if(L(e))Rn(l,e.bind(n));else if(J(e))if(F(e))e.forEach(o=>Al(o,t,n,s));else{const o=L(e.handler)?e.handler.bind(n):t[e.handler];L(o)&&Rn(l,o,e)}}function Tl(e){const t=e.type,{mixins:n,extends:s}=t,{mixins:l,optionsCache:o,config:{optionMergeStrategies:i}}=e.appContext,r=o.get(t);let a;return r?a=r:!l.length&&!n&&!s?a=t:(a={},l.length&&l.forEach(d=>fn(a,d,i,!0)),fn(a,t,i)),J(t)&&o.set(t,a),a}function fn(e,t,n,s=!1){const{mixins:l,extends:o}=t;o&&fn(e,o,n,!0),l&&l.forEach(i=>fn(e,i,n,!0));for(const i in t)if(!(s&&i==="expose")){const r=ui[i]||n&&n[i];e[i]=r?r(e[i],t[i]):t[i]}return e}const ui={data:ws,props:Ss,emits:Ss,methods:Mt,computed:Mt,beforeCreate:ce,created:ce,beforeMount:ce,mounted:ce,beforeUpdate:ce,updated:ce,beforeDestroy:ce,beforeUnmount:ce,destroyed:ce,unmounted:ce,activated:ce,deactivated:ce,errorCaptured:ce,serverPrefetch:ce,components:Mt,directives:Mt,watch:vi,provide:ws,inject:di};function ws(e,t){return t?e?function(){return oe(L(e)?e.call(this,this):e,L(t)?t.call(this,this):t)}:t:e}function di(e,t){return Mt(jn(e),jn(t))}function jn(e){if(F(e)){const t={};for(let n=0;n<e.length;n++)t[e[n]]=e[n];return t}return e}function ce(e,t){return e?[...new Set([].concat(e,t))]:t}function Mt(e,t){return e?oe(Object.create(null),e,t):t}function Ss(e,t){return e?F(e)&&F(t)?[...new Set([...e,...t])]:oe(Object.create(null),bs(e),bs(t??{})):t}function vi(e,t){if(!e)return t;if(!t)return e;const n=oe(Object.create(null),e);for(const s in t)n[s]=ce(e[s],t[s]);return n}function El(){return{app:null,config:{isNativeTag:Us,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let pi=0;function hi(e,t){return function(s,l=null){L(s)||(s=oe({},s)),l!=null&&!J(l)&&(l=null);const o=El(),i=new WeakSet,r=[];let a=!1;const d=o.app={_uid:pi++,_component:s,_props:l,_container:null,_context:o,_instance:null,version:qi,get config(){return o.config},set config(u){},use(u,...p){return i.has(u)||(u&&L(u.install)?(i.add(u),u.install(d,...p)):L(u)&&(i.add(u),u(d,...p))),d},mixin(u){return o.mixins.includes(u)||o.mixins.push(u),d},component(u,p){return p?(o.components[u]=p,d):o.components[u]},directive(u,p){return p?(o.directives[u]=p,d):o.directives[u]},mount(u,p,z){if(!a){const T=d._ceVNode||we(s,l);return T.appContext=o,z===!0?z="svg":z===!1&&(z=void 0),e(T,u,z),a=!0,d._container=u,u.__vue_app__=d,fs(T.component)}},onUnmount(u){r.push(u)},unmount(){a&&(Fe(r,d._instance,16),e(null,d._container),delete d._container.__vue_app__)},provide(u,p){return o.provides[u]=p,d},runWithContext(u){const p=wt;wt=d;try{return u()}finally{wt=p}}};return d}}let wt=null;const mi=(e,t)=>t==="modelValue"||t==="model-value"?e.modelModifiers:e[`${t}Modifiers`]||e[`${tt(t)}Modifiers`]||e[`${ut(t)}Modifiers`];function gi(e,t,...n){if(e.isUnmounted)return;const s=e.vnode.props||q;let l=n;const o=t.startsWith("update:"),i=o&&mi(s,t.slice(7));i&&(i.trim&&(l=n.map(u=>Z(u)?u.trim():u)),i.number&&(l=n.map(Zl)));let r,a=s[r=Sn(t)]||s[r=Sn(tt(t))];!a&&o&&(a=s[r=Sn(ut(t))]),a&&Fe(a,e,6,l);const d=s[r+"Once"];if(d){if(!e.emitted)e.emitted={};else if(e.emitted[r])return;e.emitted[r]=!0,Fe(d,e,6,l)}}const _i=new WeakMap;function Cl(e,t,n=!1){const s=n?_i:t.emitsCache,l=s.get(e);if(l!==void 0)return l;const o=e.emits;let i={},r=!1;if(!L(e)){const a=d=>{const u=Cl(d,t,!0);u&&(r=!0,oe(i,u))};!n&&t.mixins.length&&t.mixins.forEach(a),e.extends&&a(e.extends),e.mixins&&e.mixins.forEach(a)}return!o&&!r?(J(e)&&s.set(e,null),null):(F(o)?o.forEach(a=>i[a]=null):oe(i,o),J(e)&&s.set(e,i),i)}function yn(e,t){return!e||!dn(t)?!1:(t=t.slice(2).replace(/Once$/,""),j(e,t[0].toLowerCase()+t.slice(1))||j(e,ut(t))||j(e,t))}function zs(e){const{type:t,vnode:n,proxy:s,withProxy:l,propsOptions:[o],slots:i,attrs:r,emit:a,render:d,renderCache:u,props:p,data:z,setupState:T,ctx:E,inheritAttrs:C}=e,Y=cn(e);let N,k;try{if(n.shapeFlag&4){const w=l||s,U=w;N=Oe(d.call(U,w,u,p,T,z,E)),k=r}else{const w=t;N=Oe(w.length>1?w(p,{attrs:r,slots:i,emit:a}):w(p,null)),k=t.props?r:xi(r)}}catch(w){$t.length=0,_n(w,e,1),N=we(nt)}let O=N;if(k&&C!==!1){const w=Object.keys(k),{shapeFlag:U}=O;w.length&&U&7&&(o&&w.some(Vn)&&(k=bi(k,o)),O=At(O,k,!1,!0))}return n.dirs&&(O=At(O,null,!1,!0),O.dirs=O.dirs?O.dirs.concat(n.dirs):n.dirs),n.transition&&ls(O,n.transition),N=O,cn(Y),N}const xi=e=>{let t;for(const n in e)(n==="class"||n==="style"||dn(n))&&((t||(t={}))[n]=e[n]);return t},bi=(e,t)=>{const n={};for(const s in e)(!Vn(s)||!(s.slice(9)in t))&&(n[s]=e[s]);return n};function yi(e,t,n){const{props:s,children:l,component:o}=e,{props:i,children:r,patchFlag:a}=t,d=o.emitsOptions;if(t.dirs||t.transition)return!0;if(n&&a>=0){if(a&1024)return!0;if(a&16)return s?As(s,i,d):!!i;if(a&8){const u=t.dynamicProps;for(let p=0;p<u.length;p++){const z=u[p];if(i[z]!==s[z]&&!yn(d,z))return!0}}}else return(l||r)&&(!r||!r.$stable)?!0:s===i?!1:s?i?As(s,i,d):!0:!!i;return!1}function As(e,t,n){const s=Object.keys(t);if(s.length!==Object.keys(e).length)return!0;for(let l=0;l<s.length;l++){const o=s[l];if(t[o]!==e[o]&&!yn(n,o))return!0}return!1}function wi({vnode:e,parent:t},n){for(;t;){const s=t.subTree;if(s.suspense&&s.suspense.activeBranch===e&&(s.el=e.el),s===e)(e=t.vnode).el=n,t=t.parent;else break}}const Rl={},Il=()=>Object.create(Rl),Ml=e=>Object.getPrototypeOf(e)===Rl;function Si(e,t,n,s=!1){const l={},o=Il();e.propsDefaults=Object.create(null),Ol(e,t,l,o);for(const i in e.propsOptions[0])i in l||(l[i]=void 0);n?e.props=s?l:Eo(l):e.type.props?e.props=l:e.props=o,e.attrs=o}function zi(e,t,n,s){const{props:l,attrs:o,vnode:{patchFlag:i}}=e,r=B(l),[a]=e.propsOptions;let d=!1;if((s||i>0)&&!(i&16)){if(i&8){const u=e.vnode.dynamicProps;for(let p=0;p<u.length;p++){let z=u[p];if(yn(e.emitsOptions,z))continue;const T=t[z];if(a)if(j(o,z))T!==o[z]&&(o[z]=T,d=!0);else{const E=tt(z);l[E]=Hn(a,r,E,T,e,!1)}else T!==o[z]&&(o[z]=T,d=!0)}}}else{Ol(e,t,l,o)&&(d=!0);let u;for(const p in r)(!t||!j(t,p)&&((u=ut(p))===p||!j(t,u)))&&(a?n&&(n[p]!==void 0||n[u]!==void 0)&&(l[p]=Hn(a,r,p,void 0,e,!0)):delete l[p]);if(o!==r)for(const p in o)(!t||!j(t,p))&&(delete o[p],d=!0)}d&&Be(e.attrs,"set","")}function Ol(e,t,n,s){const[l,o]=e.propsOptions;let i=!1,r;if(t)for(let a in t){if(Ot(a))continue;const d=t[a];let u;l&&j(l,u=tt(a))?!o||!o.includes(u)?n[u]=d:(r||(r={}))[u]=d:yn(e.emitsOptions,a)||(!(a in s)||d!==s[a])&&(s[a]=d,i=!0)}if(o){const a=B(n),d=r||q;for(let u=0;u<o.length;u++){const p=o[u];n[p]=Hn(l,a,p,d[p],e,!j(d,p))}}return i}function Hn(e,t,n,s,l,o){const i=e[n];if(i!=null){const r=j(i,"default");if(r&&s===void 0){const a=i.default;if(i.type!==Function&&!i.skipFactory&&L(a)){const{propsDefaults:d}=l;if(n in d)s=d[n];else{const u=Wt(l);s=d[n]=a.call(null,t),u()}}else s=a;l.ce&&l.ce._setProp(n,s)}i[0]&&(o&&!r?s=!1:i[1]&&(s===""||s===ut(n))&&(s=!0))}return s}const Ai=new WeakMap;function Pl(e,t,n=!1){const s=n?Ai:t.propsCache,l=s.get(e);if(l)return l;const o=e.props,i={},r=[];let a=!1;if(!L(e)){const u=p=>{a=!0;const[z,T]=Pl(p,t,!0);oe(i,z),T&&r.push(...T)};!n&&t.mixins.length&&t.mixins.forEach(u),e.extends&&u(e.extends),e.mixins&&e.mixins.forEach(u)}if(!o&&!a)return J(e)&&s.set(e,_t),_t;if(F(o))for(let u=0;u<o.length;u++){const p=tt(o[u]);Ts(p)&&(i[p]=q)}else if(o)for(const u in o){const p=tt(u);if(Ts(p)){const z=o[u],T=i[p]=F(z)||L(z)?{type:z}:oe({},z),E=T.type;let C=!1,Y=!0;if(F(E))for(let N=0;N<E.length;++N){const k=E[N],O=L(k)&&k.name;if(O==="Boolean"){C=!0;break}else O==="String"&&(Y=!1)}else C=L(E)&&E.name==="Boolean";T[0]=C,T[1]=Y,(C||j(T,"default"))&&r.push(p)}}const d=[i,r];return J(e)&&s.set(e,d),d}function Ts(e){return e[0]!=="$"&&!Ot(e)}const rs=e=>e==="_"||e==="_ctx"||e==="$stable",cs=e=>F(e)?e.map(Oe):[Oe(e)],Ti=(e,t,n)=>{if(t._n)return t;const s=jo((...l)=>cs(t(...l)),n);return s._c=!1,s},Nl=(e,t,n)=>{const s=e._ctx;for(const l in e){if(rs(l))continue;const o=e[l];if(L(o))t[l]=Ti(l,o,s);else if(o!=null){const i=cs(o);t[l]=()=>i}}},Fl=(e,t)=>{const n=cs(t);e.slots.default=()=>n},Ll=(e,t,n)=>{for(const s in t)(n||!rs(s))&&(e[s]=t[s])},Ei=(e,t,n)=>{const s=e.slots=Il();if(e.vnode.shapeFlag&32){const l=t._;l?(Ll(s,t,n),n&&Xs(s,"_",l,!0)):Nl(t,s)}else t&&Fl(e,t)},Ci=(e,t,n)=>{const{vnode:s,slots:l}=e;let o=!0,i=q;if(s.shapeFlag&32){const r=t._;r?n&&r===1?o=!1:Ll(l,t,n):(o=!t.$stable,Nl(t,l)),i=t}else t&&(Fl(e,t),i={default:1});if(o)for(const r in l)!rs(r)&&i[r]==null&&delete l[r]},ge=Pi;function Ri(e){return Ii(e)}function Ii(e,t){const n=hn();n.__VUE__=!0;const{insert:s,remove:l,patchProp:o,createElement:i,createText:r,createComment:a,setText:d,setElementText:u,parentNode:p,nextSibling:z,setScopeId:T=Ne,insertStaticContent:E}=e,C=(c,f,v,_=null,h=null,m=null,S=void 0,y=null,b=!!f.dynamicChildren)=>{if(c===f)return;c&&!It(c,f)&&(_=Et(c),he(c,h,m,!0),c=null),f.patchFlag===-2&&(b=!1,f.dynamicChildren=null);const{type:g,ref:M,shapeFlag:A}=f;switch(g){case wn:Y(c,f,v,_);break;case nt:N(c,f,v,_);break;case nn:c==null&&k(f,v,_,S);break;case be:Le(c,f,v,_,h,m,S,y,b);break;default:A&1?U(c,f,v,_,h,m,S,y,b):A&6?De(c,f,v,_,h,m,S,y,b):(A&64||A&128)&&g.process(c,f,v,_,h,m,S,y,b,ot)}M!=null&&h?Ft(M,c&&c.ref,m,f||c,!f):M==null&&c&&c.ref!=null&&Ft(c.ref,null,m,c,!0)},Y=(c,f,v,_)=>{if(c==null)s(f.el=r(f.children),v,_);else{const h=f.el=c.el;f.children!==c.children&&d(h,f.children)}},N=(c,f,v,_)=>{c==null?s(f.el=a(f.children||""),v,_):f.el=c.el},k=(c,f,v,_)=>{[c.el,c.anchor]=E(c.children,f,v,_,c.el,c.anchor)},O=({el:c,anchor:f},v,_)=>{let h;for(;c&&c!==f;)h=z(c),s(c,v,_),c=h;s(f,v,_)},w=({el:c,anchor:f})=>{let v;for(;c&&c!==f;)v=z(c),l(c),c=v;l(f)},U=(c,f,v,_,h,m,S,y,b)=>{if(f.type==="svg"?S="svg":f.type==="math"&&(S="mathml"),c==null)ee(f,v,_,h,m,S,y,b);else{const g=c.el&&c.el._isVueCE?c.el:null;try{g&&g._beginPatch(),se(c,f,h,m,S,y,b)}finally{g&&g._endPatch()}}},ee=(c,f,v,_,h,m,S,y)=>{let b,g;const{props:M,shapeFlag:A,transition:R,dirs:P}=c;if(b=c.el=i(c.type,m,M&&M.is,M),A&8?u(b,c.children):A&16&&pe(c.children,b,null,_,h,Mn(c,m),S,y),P&&it(c,null,_,"created"),Q(b,c,c.scopeId,S,_),M){for(const V in M)V!=="value"&&!Ot(V)&&o(b,V,null,M[V],m,_);"value"in M&&o(b,"value",null,M.value,m),(g=M.onVnodeBeforeMount)&&Re(g,_,c)}P&&it(c,null,_,"beforeMount");const D=Mi(h,R);D&&R.beforeEnter(b),s(b,f,v),((g=M&&M.onVnodeMounted)||D||P)&&ge(()=>{g&&Re(g,_,c),D&&R.enter(b),P&&it(c,null,_,"mounted")},h)},Q=(c,f,v,_,h)=>{if(v&&T(c,v),_)for(let m=0;m<_.length;m++)T(c,_[m]);if(h){let m=h.subTree;if(f===m||Bl(m.type)&&(m.ssContent===f||m.ssFallback===f)){const S=h.vnode;Q(c,S,S.scopeId,S.slotScopeIds,h.parent)}}},pe=(c,f,v,_,h,m,S,y,b=0)=>{for(let g=b;g<c.length;g++){const M=c[g]=y?Ye(c[g]):Oe(c[g]);C(null,M,f,v,_,h,m,S,y)}},se=(c,f,v,_,h,m,S)=>{const y=f.el=c.el;let{patchFlag:b,dynamicChildren:g,dirs:M}=f;b|=c.patchFlag&16;const A=c.props||q,R=f.props||q;let P;if(v&&rt(v,!1),(P=R.onVnodeBeforeUpdate)&&Re(P,v,f,c),M&&it(f,c,v,"beforeUpdate"),v&&rt(v,!0),(A.innerHTML&&R.innerHTML==null||A.textContent&&R.textContent==null)&&u(y,""),g?te(c.dynamicChildren,g,y,v,_,Mn(f,h),m):S||G(c,f,y,null,v,_,Mn(f,h),m,!1),b>0){if(b&16)We(y,A,R,v,h);else if(b&2&&A.class!==R.class&&o(y,"class",null,R.class,h),b&4&&o(y,"style",A.style,R.style,h),b&8){const D=f.dynamicProps;for(let V=0;V<D.length;V++){const H=D[V],ue=A[H],de=R[H];(de!==ue||H==="value")&&o(y,H,ue,de,h,v)}}b&1&&c.children!==f.children&&u(y,f.children)}else!S&&g==null&&We(y,A,R,v,h);((P=R.onVnodeUpdated)||M)&&ge(()=>{P&&Re(P,v,f,c),M&&it(f,c,v,"updated")},_)},te=(c,f,v,_,h,m,S)=>{for(let y=0;y<f.length;y++){const b=c[y],g=f[y],M=b.el&&(b.type===be||!It(b,g)||b.shapeFlag&198)?p(b.el):v;C(b,g,M,null,_,h,m,S,!0)}},We=(c,f,v,_,h)=>{if(f!==v){if(f!==q)for(const m in f)!Ot(m)&&!(m in v)&&o(c,m,f[m],null,h,_);for(const m in v){if(Ot(m))continue;const S=v[m],y=f[m];S!==y&&m!=="value"&&o(c,m,y,S,h,_)}"value"in v&&o(c,"value",f.value,v.value,h)}},Le=(c,f,v,_,h,m,S,y,b)=>{const g=f.el=c?c.el:r(""),M=f.anchor=c?c.anchor:r("");let{patchFlag:A,dynamicChildren:R,slotScopeIds:P}=f;P&&(y=y?y.concat(P):P),c==null?(s(g,v,_),s(M,v,_),pe(f.children||[],v,M,h,m,S,y,b)):A>0&&A&64&&R&&c.dynamicChildren&&c.dynamicChildren.length===R.length?(te(c.dynamicChildren,R,v,h,m,S,y),(f.key!=null||h&&f===h.subTree)&&Dl(c,f,!0)):G(c,f,v,M,h,m,S,y,b)},De=(c,f,v,_,h,m,S,y,b)=>{f.slotScopeIds=y,c==null?f.shapeFlag&512?h.ctx.activate(f,v,_,S,b):dt(f,v,_,h,m,S,b):Tt(c,f,b)},dt=(c,f,v,_,h,m,S)=>{const y=c.component=ji(c,_,h);if(Sl(c)&&(y.ctx.renderer=ot),Gi(y,!1,S),y.asyncDep){if(h&&h.registerDep(y,le,S),!c.el){const b=y.subTree=we(nt);N(null,b,f,v),c.placeholder=b.el}}else le(y,c,f,v,h,m,S)},Tt=(c,f,v)=>{const _=f.component=c.component;if(yi(c,f,v))if(_.asyncDep&&!_.asyncResolved){W(_,f,v);return}else _.next=f,_.update();else f.el=c.el,_.vnode=f},le=(c,f,v,_,h,m,S)=>{const y=()=>{if(c.isMounted){let{next:A,bu:R,u:P,parent:D,vnode:V}=c;{const Ee=$l(c);if(Ee){A&&(A.el=V.el,W(c,A,S)),Ee.asyncDep.then(()=>{c.isUnmounted||y()});return}}let H=A,ue;rt(c,!1),A?(A.el=V.el,W(c,A,S)):A=V,R&&zn(R),(ue=A.props&&A.props.onVnodeBeforeUpdate)&&Re(ue,D,A,V),rt(c,!0);const de=zs(c),Te=c.subTree;c.subTree=de,C(Te,de,p(Te.el),Et(Te),c,h,m),A.el=de.el,H===null&&wi(c,de.el),P&&ge(P,h),(ue=A.props&&A.props.onVnodeUpdated)&&ge(()=>Re(ue,D,A,V),h)}else{let A;const{el:R,props:P}=f,{bm:D,m:V,parent:H,root:ue,type:de}=c,Te=Lt(f);rt(c,!1),D&&zn(D),!Te&&(A=P&&P.onVnodeBeforeMount)&&Re(A,H,f),rt(c,!0);{ue.ce&&ue.ce._def.shadowRoot!==!1&&ue.ce._injectChildStyle(de);const Ee=c.subTree=zs(c);C(null,Ee,v,_,c,h,m),f.el=Ee.el}if(V&&ge(V,h),!Te&&(A=P&&P.onVnodeMounted)){const Ee=f;ge(()=>Re(A,H,Ee),h)}(f.shapeFlag&256||H&&Lt(H.vnode)&&H.vnode.shapeFlag&256)&&c.a&&ge(c.a,h),c.isMounted=!0,f=v=_=null}};c.scope.on();const b=c.effect=new el(y);c.scope.off();const g=c.update=b.run.bind(b),M=c.job=b.runIfDirty.bind(b);M.i=c,M.id=c.uid,b.scheduler=()=>ss(M),rt(c,!0),g()},W=(c,f,v)=>{f.component=c;const _=c.vnode.props;c.vnode=f,c.next=null,zi(c,f.props,_,v),Ci(c,f.children,v),je(),_s(c),He()},G=(c,f,v,_,h,m,S,y,b=!1)=>{const g=c&&c.children,M=c?c.shapeFlag:0,A=f.children,{patchFlag:R,shapeFlag:P}=f;if(R>0){if(R&128){lt(g,A,v,_,h,m,S,y,b);return}else if(R&256){ze(g,A,v,_,h,m,S,y,b);return}}P&8?(M&16&&vt(g,h,m),A!==g&&u(v,A)):M&16?P&16?lt(g,A,v,_,h,m,S,y,b):vt(g,h,m,!0):(M&8&&u(v,""),P&16&&pe(A,v,_,h,m,S,y,b))},ze=(c,f,v,_,h,m,S,y,b)=>{c=c||_t,f=f||_t;const g=c.length,M=f.length,A=Math.min(g,M);let R;for(R=0;R<A;R++){const P=f[R]=b?Ye(f[R]):Oe(f[R]);C(c[R],P,v,null,h,m,S,y,b)}g>M?vt(c,h,m,!0,!1,A):pe(f,v,_,h,m,S,y,b,A)},lt=(c,f,v,_,h,m,S,y,b)=>{let g=0;const M=f.length;let A=c.length-1,R=M-1;for(;g<=A&&g<=R;){const P=c[g],D=f[g]=b?Ye(f[g]):Oe(f[g]);if(It(P,D))C(P,D,v,null,h,m,S,y,b);else break;g++}for(;g<=A&&g<=R;){const P=c[A],D=f[R]=b?Ye(f[R]):Oe(f[R]);if(It(P,D))C(P,D,v,null,h,m,S,y,b);else break;A--,R--}if(g>A){if(g<=R){const P=R+1,D=P<M?f[P].el:_;for(;g<=R;)C(null,f[g]=b?Ye(f[g]):Oe(f[g]),v,D,h,m,S,y,b),g++}}else if(g>R)for(;g<=A;)he(c[g],h,m,!0),g++;else{const P=g,D=g,V=new Map;for(g=D;g<=R;g++){const me=f[g]=b?Ye(f[g]):Oe(f[g]);me.key!=null&&V.set(me.key,g)}let H,ue=0;const de=R-D+1;let Te=!1,Ee=0;const Ct=new Array(de);for(g=0;g<de;g++)Ct[g]=0;for(g=P;g<=A;g++){const me=c[g];if(ue>=de){he(me,h,m,!0);continue}let Ce;if(me.key!=null)Ce=V.get(me.key);else for(H=D;H<=R;H++)if(Ct[H-D]===0&&It(me,f[H])){Ce=H;break}Ce===void 0?he(me,h,m,!0):(Ct[Ce-D]=g+1,Ce>=Ee?Ee=Ce:Te=!0,C(me,f[Ce],v,null,h,m,S,y,b),ue++)}const ds=Te?Oi(Ct):_t;for(H=ds.length-1,g=de-1;g>=0;g--){const me=D+g,Ce=f[me],vs=f[me+1],ps=me+1<M?vs.el||kl(vs):_;Ct[g]===0?C(null,Ce,v,ps,h,m,S,y,b):Te&&(H<0||g!==ds[H]?Ae(Ce,v,ps,2):H--)}}},Ae=(c,f,v,_,h=null)=>{const{el:m,type:S,transition:y,children:b,shapeFlag:g}=c;if(g&6){Ae(c.component.subTree,f,v,_);return}if(g&128){c.suspense.move(f,v,_);return}if(g&64){S.move(c,f,v,ot);return}if(S===be){s(m,f,v);for(let A=0;A<b.length;A++)Ae(b[A],f,v,_);s(c.anchor,f,v);return}if(S===nn){O(c,f,v);return}if(_!==2&&g&1&&y)if(_===0)y.beforeEnter(m),s(m,f,v),ge(()=>y.enter(m),h);else{const{leave:A,delayLeave:R,afterLeave:P}=y,D=()=>{c.ctx.isUnmounted?l(m):s(m,f,v)},V=()=>{m._isLeaving&&m[qo](!0),A(m,()=>{D(),P&&P()})};R?R(m,D,V):V()}else s(m,f,v)},he=(c,f,v,_=!1,h=!1)=>{const{type:m,props:S,ref:y,children:b,dynamicChildren:g,shapeFlag:M,patchFlag:A,dirs:R,cacheIndex:P}=c;if(A===-2&&(h=!1),y!=null&&(je(),Ft(y,null,v,c,!0),He()),P!=null&&(f.renderCache[P]=void 0),M&256){f.ctx.deactivate(c);return}const D=M&1&&R,V=!Lt(c);let H;if(V&&(H=S&&S.onVnodeBeforeUnmount)&&Re(H,f,c),M&6)ne(c.component,v,_);else{if(M&128){c.suspense.unmount(v,_);return}D&&it(c,null,f,"beforeUnmount"),M&64?c.type.remove(c,f,v,ot,_):g&&!g.hasOnce&&(m!==be||A>0&&A&64)?vt(g,f,v,!1,!0):(m===be&&A&384||!h&&M&16)&&vt(b,f,v),_&&X(c)}(V&&(H=S&&S.onVnodeUnmounted)||D)&&ge(()=>{H&&Re(H,f,c),D&&it(c,null,f,"unmounted")},v)},X=c=>{const{type:f,el:v,anchor:_,transition:h}=c;if(f===be){I(v,_);return}if(f===nn){w(c);return}const m=()=>{l(v),h&&!h.persisted&&h.afterLeave&&h.afterLeave()};if(c.shapeFlag&1&&h&&!h.persisted){const{leave:S,delayLeave:y}=h,b=()=>S(v,m);y?y(c.el,m,b):b()}else m()},I=(c,f)=>{let v;for(;c!==f;)v=z(c),l(c),c=v;l(f)},ne=(c,f,v)=>{const{bum:_,scope:h,job:m,subTree:S,um:y,m:b,a:g}=c;Es(b),Es(g),_&&zn(_),h.stop(),m&&(m.flags|=8,he(S,c,f,v)),y&&ge(y,f),ge(()=>{c.isUnmounted=!0},f)},vt=(c,f,v,_=!1,h=!1,m=0)=>{for(let S=m;S<c.length;S++)he(c[S],f,v,_,h)},Et=c=>{if(c.shapeFlag&6)return Et(c.component.subTree);if(c.shapeFlag&128)return c.suspense.next();const f=z(c.anchor||c.el),v=f&&f[Vo];return v?z(v):f};let Vt=!1;const Kt=(c,f,v)=>{let _;c==null?f._vnode&&(he(f._vnode,null,null,!0),_=f._vnode.component):C(f._vnode||null,c,f,null,null,null,v),f._vnode=c,Vt||(Vt=!0,_s(_),gl(),Vt=!1)},ot={p:C,um:he,m:Ae,r:X,mt:dt,mc:pe,pc:G,pbc:te,n:Et,o:e};return{render:Kt,hydrate:void 0,createApp:hi(Kt)}}function Mn({type:e,props:t},n){return n==="svg"&&e==="foreignObject"||n==="mathml"&&e==="annotation-xml"&&t&&t.encoding&&t.encoding.includes("html")?void 0:n}function rt({effect:e,job:t},n){n?(e.flags|=32,t.flags|=4):(e.flags&=-33,t.flags&=-5)}function Mi(e,t){return(!e||e&&!e.pendingBranch)&&t&&!t.persisted}function Dl(e,t,n=!1){const s=e.children,l=t.children;if(F(s)&&F(l))for(let o=0;o<s.length;o++){const i=s[o];let r=l[o];r.shapeFlag&1&&!r.dynamicChildren&&((r.patchFlag<=0||r.patchFlag===32)&&(r=l[o]=Ye(l[o]),r.el=i.el),!n&&r.patchFlag!==-2&&Dl(i,r)),r.type===wn&&(r.patchFlag!==-1?r.el=i.el:r.__elIndex=o+(e.type===be?1:0)),r.type===nt&&!r.el&&(r.el=i.el)}}function Oi(e){const t=e.slice(),n=[0];let s,l,o,i,r;const a=e.length;for(s=0;s<a;s++){const d=e[s];if(d!==0){if(l=n[n.length-1],e[l]<d){t[s]=l,n.push(s);continue}for(o=0,i=n.length-1;o<i;)r=o+i>>1,e[n[r]]<d?o=r+1:i=r;d<e[n[o]]&&(o>0&&(t[s]=n[o-1]),n[o]=s)}}for(o=n.length,i=n[o-1];o-- >0;)n[o]=i,i=t[i];return n}function $l(e){const t=e.subTree.component;if(t)return t.asyncDep&&!t.asyncResolved?t:$l(t)}function Es(e){if(e)for(let t=0;t<e.length;t++)e[t].flags|=8}function kl(e){if(e.placeholder)return e.placeholder;const t=e.component;return t?kl(t.subTree):null}const Bl=e=>e.__isSuspense;function Pi(e,t){t&&t.pendingBranch?F(e)?t.effects.push(...e):t.effects.push(e):Bo(e)}const be=Symbol.for("v-fgt"),wn=Symbol.for("v-txt"),nt=Symbol.for("v-cmt"),nn=Symbol.for("v-stc"),$t=[];let _e=null;function Ze(e=!1){$t.push(_e=e?null:[])}function Ni(){$t.pop(),_e=$t[$t.length-1]||null}let Ht=1;function Cs(e,t=!1){Ht+=e,e<0&&_e&&t&&(_e.hasOnce=!0)}function jl(e){return e.dynamicChildren=Ht>0?_e||_t:null,Ni(),Ht>0&&_e&&_e.push(e),e}function St(e,t,n,s,l,o){return jl(x(e,t,n,s,l,o,!0))}function Hl(e,t,n,s,l){return jl(we(e,t,n,s,l,!0))}function Gl(e){return e?e.__v_isVNode===!0:!1}function It(e,t){return e.type===t.type&&e.key===t.key}const Ul=({key:e})=>e??null,sn=({ref:e,ref_key:t,ref_for:n})=>(typeof e=="number"&&(e=""+e),e!=null?Z(e)||re(e)||L(e)?{i:Pe,r:e,k:t,f:!!n}:e:null);function x(e,t=null,n=null,s=0,l=null,o=e===be?0:1,i=!1,r=!1){const a={__v_isVNode:!0,__v_skip:!0,type:e,props:t,key:t&&Ul(t),ref:t&&sn(t),scopeId:xl,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetStart:null,targetAnchor:null,staticCount:0,shapeFlag:o,patchFlag:s,dynamicProps:l,dynamicChildren:null,appContext:null,ctx:Pe};return r?(as(a,n),o&128&&e.normalize(a)):n&&(a.shapeFlag|=Z(n)?8:16),Ht>0&&!i&&_e&&(a.patchFlag>0||o&6)&&a.patchFlag!==32&&_e.push(a),a}const we=Fi;function Fi(e,t=null,n=null,s=0,l=null,o=!1){if((!e||e===ii)&&(e=nt),Gl(e)){const r=At(e,t,!0);return n&&as(r,n),Ht>0&&!o&&_e&&(r.shapeFlag&6?_e[_e.indexOf(e)]=r:_e.push(r)),r.patchFlag=-2,r}if(Ki(e)&&(e=e.__vccOpts),t){t=Li(t);let{class:r,style:a}=t;r&&!Z(r)&&(t.class=bt(r)),J(a)&&(ns(a)&&!F(a)&&(a=oe({},a)),t.style=mn(a))}const i=Z(e)?1:Bl(e)?128:Ko(e)?64:J(e)?4:L(e)?2:0;return x(e,t,n,s,l,i,o,!0)}function Li(e){return e?ns(e)||Ml(e)?oe({},e):e:null}function At(e,t,n=!1,s=!1){const{props:l,ref:o,patchFlag:i,children:r,transition:a}=e,d=t?$i(l||{},t):l,u={__v_isVNode:!0,__v_skip:!0,type:e.type,props:d,key:d&&Ul(d),ref:t&&t.ref?n&&o?F(o)?o.concat(sn(t)):[o,sn(t)]:sn(t):o,scopeId:e.scopeId,slotScopeIds:e.slotScopeIds,children:r,target:e.target,targetStart:e.targetStart,targetAnchor:e.targetAnchor,staticCount:e.staticCount,shapeFlag:e.shapeFlag,patchFlag:t&&e.type!==be?i===-1?16:i|16:i,dynamicProps:e.dynamicProps,dynamicChildren:e.dynamicChildren,appContext:e.appContext,dirs:e.dirs,transition:a,component:e.component,suspense:e.suspense,ssContent:e.ssContent&&At(e.ssContent),ssFallback:e.ssFallback&&At(e.ssFallback),placeholder:e.placeholder,el:e.el,anchor:e.anchor,ctx:e.ctx,ce:e.ce};return a&&s&&ls(u,a.clone(u)),u}function Di(e=" ",t=0){return we(wn,null,e,t)}function Jt(e,t){const n=we(nn,null,e);return n.staticCount=t,n}function Rs(e="",t=!1){return t?(Ze(),Hl(nt,null,e)):we(nt,null,e)}function Oe(e){return e==null||typeof e=="boolean"?we(nt):F(e)?we(be,null,e.slice()):Gl(e)?Ye(e):we(wn,null,String(e))}function Ye(e){return e.el===null&&e.patchFlag!==-1||e.memo?e:At(e)}function as(e,t){let n=0;const{shapeFlag:s}=e;if(t==null)t=null;else if(F(t))n=16;else if(typeof t=="object")if(s&65){const l=t.default;l&&(l._c&&(l._d=!1),as(e,l()),l._c&&(l._d=!0));return}else{n=32;const l=t._;!l&&!Ml(t)?t._ctx=Pe:l===3&&Pe&&(Pe.slots._===1?t._=1:(t._=2,e.patchFlag|=1024))}else L(t)?(t={default:t,_ctx:Pe},n=32):(t=String(t),s&64?(n=16,t=[Di(t)]):n=8);e.children=t,e.shapeFlag|=n}function $i(...e){const t={};for(let n=0;n<e.length;n++){const s=e[n];for(const l in s)if(l==="class")t.class!==s.class&&(t.class=bt([t.class,s.class]));else if(l==="style")t.style=mn([t.style,s.style]);else if(dn(l)){const o=t[l],i=s[l];i&&o!==i&&!(F(o)&&o.includes(i))&&(t[l]=o?[].concat(o,i):i)}else l!==""&&(t[l]=s[l])}return t}function Re(e,t,n,s=null){Fe(e,t,7,[n,s])}const ki=El();let Bi=0;function ji(e,t,n){const s=e.type,l=(t?t.appContext:e.appContext)||ki,o={uid:Bi++,vnode:e,type:s,parent:t,appContext:l,root:null,next:null,subTree:null,effect:null,update:null,job:null,scope:new io(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:t?t.provides:Object.create(l.provides),ids:t?t.ids:["",0,0],accessCache:null,renderCache:[],components:null,directives:null,propsOptions:Pl(s,l),emitsOptions:Cl(s,l),emit:null,emitted:null,propsDefaults:q,inheritAttrs:s.inheritAttrs,ctx:q,data:q,props:q,attrs:q,slots:q,refs:q,setupState:q,setupContext:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return o.ctx={_:o},o.root=t?t.root:o,o.emit=gi.bind(null,o),e.ce&&e.ce(o),o}let fe=null;const Hi=()=>fe||Pe;let un,Gn;{const e=hn(),t=(n,s)=>{let l;return(l=e[n])||(l=e[n]=[]),l.push(s),o=>{l.length>1?l.forEach(i=>i(o)):l[0](o)}};un=t("__VUE_INSTANCE_SETTERS__",n=>fe=n),Gn=t("__VUE_SSR_SETTERS__",n=>Gt=n)}const Wt=e=>{const t=fe;return un(e),e.scope.on(),()=>{e.scope.off(),un(t)}},Is=()=>{fe&&fe.scope.off(),un(null)};function Wl(e){return e.vnode.shapeFlag&4}let Gt=!1;function Gi(e,t=!1,n=!1){t&&Gn(t);const{props:s,children:l}=e.vnode,o=Wl(e);Si(e,s,o,t),Ei(e,l,n||t);const i=o?Ui(e,t):void 0;return t&&Gn(!1),i}function Ui(e,t){const n=e.type;e.accessCache=Object.create(null),e.proxy=new Proxy(e.ctx,ci);const{setup:s}=n;if(s){je();const l=e.setupContext=s.length>1?Vi(e):null,o=Wt(e),i=Ut(s,e,0,[e.props,l]),r=Vs(i);if(He(),o(),(r||e.sp)&&!Lt(e)&&wl(e),r){if(i.then(Is,Is),t)return i.then(a=>{Ms(e,a)}).catch(a=>{_n(a,e,0)});e.asyncDep=i}else Ms(e,i)}else Vl(e)}function Ms(e,t,n){L(t)?e.type.__ssrInlineRender?e.ssrRender=t:e.render=t:J(t)&&(e.setupState=pl(t)),Vl(e)}function Vl(e,t,n){const s=e.type;e.render||(e.render=s.render||Ne);{const l=Wt(e);je();try{ai(e)}finally{He(),l()}}}const Wi={get(e,t){return ie(e,"get",""),e[t]}};function Vi(e){const t=n=>{e.exposed=n||{}};return{attrs:new Proxy(e.attrs,Wi),slots:e.slots,emit:e.emit,expose:t}}function fs(e){return e.exposed?e.exposeProxy||(e.exposeProxy=new Proxy(pl(Co(e.exposed)),{get(t,n){if(n in t)return t[n];if(n in Dt)return Dt[n](e)},has(t,n){return n in t||n in Dt}})):e.proxy}function Ki(e){return L(e)&&"__vccOpts"in e}const $=(e,t)=>No(e,t,Gt),qi="3.5.27";/**
* @vue/runtime-dom v3.5.27
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let Un;const Os=typeof window<"u"&&window.trustedTypes;if(Os)try{Un=Os.createPolicy("vue",{createHTML:e=>e})}catch{}const Kl=Un?e=>Un.createHTML(e):e=>e,Yi="http://www.w3.org/2000/svg",Xi="http://www.w3.org/1998/Math/MathML",ke=typeof document<"u"?document:null,Ps=ke&&ke.createElement("template"),Ji={insert:(e,t,n)=>{t.insertBefore(e,n||null)},remove:e=>{const t=e.parentNode;t&&t.removeChild(e)},createElement:(e,t,n,s)=>{const l=t==="svg"?ke.createElementNS(Yi,e):t==="mathml"?ke.createElementNS(Xi,e):n?ke.createElement(e,{is:n}):ke.createElement(e);return e==="select"&&s&&s.multiple!=null&&l.setAttribute("multiple",s.multiple),l},createText:e=>ke.createTextNode(e),createComment:e=>ke.createComment(e),setText:(e,t)=>{e.nodeValue=t},setElementText:(e,t)=>{e.textContent=t},parentNode:e=>e.parentNode,nextSibling:e=>e.nextSibling,querySelector:e=>ke.querySelector(e),setScopeId(e,t){e.setAttribute(t,"")},insertStaticContent(e,t,n,s,l,o){const i=n?n.previousSibling:t.lastChild;if(l&&(l===o||l.nextSibling))for(;t.insertBefore(l.cloneNode(!0),n),!(l===o||!(l=l.nextSibling)););else{Ps.innerHTML=Kl(s==="svg"?`<svg>${e}</svg>`:s==="mathml"?`<math>${e}</math>`:e);const r=Ps.content;if(s==="svg"||s==="mathml"){const a=r.firstChild;for(;a.firstChild;)r.appendChild(a.firstChild);r.removeChild(a)}t.insertBefore(r,n)}return[i?i.nextSibling:t.firstChild,n?n.previousSibling:t.lastChild]}},Qi=Symbol("_vtc");function Zi(e,t,n){const s=e[Qi];s&&(t=(t?[t,...s]:[...s]).join(" ")),t==null?e.removeAttribute("class"):n?e.setAttribute("class",t):e.className=t}const Ns=Symbol("_vod"),er=Symbol("_vsh"),tr=Symbol(""),nr=/(?:^|;)\s*display\s*:/;function sr(e,t,n){const s=e.style,l=Z(n);let o=!1;if(n&&!l){if(t)if(Z(t))for(const i of t.split(";")){const r=i.slice(0,i.indexOf(":")).trim();n[r]==null&&ln(s,r,"")}else for(const i in t)n[i]==null&&ln(s,i,"");for(const i in n)i==="display"&&(o=!0),ln(s,i,n[i])}else if(l){if(t!==n){const i=s[tr];i&&(n+=";"+i),s.cssText=n,o=nr.test(n)}}else t&&e.removeAttribute("style");Ns in e&&(e[Ns]=o?s.display:"",e[er]&&(s.display="none"))}const Fs=/\s*!important$/;function ln(e,t,n){if(F(n))n.forEach(s=>ln(e,t,s));else if(n==null&&(n=""),t.startsWith("--"))e.setProperty(t,n);else{const s=lr(e,t);Fs.test(n)?e.setProperty(ut(s),n.replace(Fs,""),"important"):e[s]=n}}const Ls=["Webkit","Moz","ms"],On={};function lr(e,t){const n=On[t];if(n)return n;let s=tt(t);if(s!=="filter"&&s in e)return On[t]=s;s=Ys(s);for(let l=0;l<Ls.length;l++){const o=Ls[l]+s;if(o in e)return On[t]=o}return t}const Ds="http://www.w3.org/1999/xlink";function $s(e,t,n,s,l,o=oo(t)){s&&t.startsWith("xlink:")?n==null?e.removeAttributeNS(Ds,t.slice(6,t.length)):e.setAttributeNS(Ds,t,n):n==null||o&&!Js(n)?e.removeAttribute(t):e.setAttribute(t,o?"":st(n)?String(n):n)}function ks(e,t,n,s,l){if(t==="innerHTML"||t==="textContent"){n!=null&&(e[t]=t==="innerHTML"?Kl(n):n);return}const o=e.tagName;if(t==="value"&&o!=="PROGRESS"&&!o.includes("-")){const r=o==="OPTION"?e.getAttribute("value")||"":e.value,a=n==null?e.type==="checkbox"?"on":"":String(n);(r!==a||!("_value"in e))&&(e.value=a),n==null&&e.removeAttribute(t),e._value=n;return}let i=!1;if(n===""||n==null){const r=typeof e[t];r==="boolean"?n=Js(n):n==null&&r==="string"?(n="",i=!0):r==="number"&&(n=0,i=!0)}try{e[t]=n}catch{}i&&e.removeAttribute(l||t)}function or(e,t,n,s){e.addEventListener(t,n,s)}function ir(e,t,n,s){e.removeEventListener(t,n,s)}const Bs=Symbol("_vei");function rr(e,t,n,s,l=null){const o=e[Bs]||(e[Bs]={}),i=o[t];if(s&&i)i.value=s;else{const[r,a]=cr(t);if(s){const d=o[t]=ur(s,l);or(e,r,d,a)}else i&&(ir(e,r,i,a),o[t]=void 0)}}const js=/(?:Once|Passive|Capture)$/;function cr(e){let t;if(js.test(e)){t={};let s;for(;s=e.match(js);)e=e.slice(0,e.length-s[0].length),t[s[0].toLowerCase()]=!0}return[e[2]===":"?e.slice(3):ut(e.slice(2)),t]}let Pn=0;const ar=Promise.resolve(),fr=()=>Pn||(ar.then(()=>Pn=0),Pn=Date.now());function ur(e,t){const n=s=>{if(!s._vts)s._vts=Date.now();else if(s._vts<=n.attached)return;Fe(dr(s,n.value),t,5,[s])};return n.value=e,n.attached=fr(),n}function dr(e,t){if(F(t)){const n=e.stopImmediatePropagation;return e.stopImmediatePropagation=()=>{n.call(e),e._stopped=!0},t.map(s=>l=>!l._stopped&&s&&s(l))}else return t}const Hs=e=>e.charCodeAt(0)===111&&e.charCodeAt(1)===110&&e.charCodeAt(2)>96&&e.charCodeAt(2)<123,vr=(e,t,n,s,l,o)=>{const i=l==="svg";t==="class"?Zi(e,s,i):t==="style"?sr(e,n,s):dn(t)?Vn(t)||rr(e,t,n,s,o):(t[0]==="."?(t=t.slice(1),!0):t[0]==="^"?(t=t.slice(1),!1):pr(e,t,s,i))?(ks(e,t,s),!e.tagName.includes("-")&&(t==="value"||t==="checked"||t==="selected")&&$s(e,t,s,i,o,t!=="value")):e._isVueCE&&(/[A-Z]/.test(t)||!Z(s))?ks(e,tt(t),s,o,t):(t==="true-value"?e._trueValue=s:t==="false-value"&&(e._falseValue=s),$s(e,t,s,i))};function pr(e,t,n,s){if(s)return!!(t==="innerHTML"||t==="textContent"||t in e&&Hs(t)&&L(n));if(t==="spellcheck"||t==="draggable"||t==="translate"||t==="autocorrect"||t==="sandbox"&&e.tagName==="IFRAME"||t==="form"||t==="list"&&e.tagName==="INPUT"||t==="type"&&e.tagName==="TEXTAREA")return!1;if(t==="width"||t==="height"){const l=e.tagName;if(l==="IMG"||l==="VIDEO"||l==="CANVAS"||l==="SOURCE")return!1}return Hs(t)&&Z(n)?!1:t in e}const hr=oe({patchProp:vr},Ji);let Gs;function mr(){return Gs||(Gs=Ri(hr))}const gr=(...e)=>{const t=mr().createApp(...e),{mount:n}=t;return t.mount=s=>{const l=xr(s);if(!l)return;const o=t._component;!L(o)&&!o.render&&!o.template&&(o.template=l.innerHTML),l.nodeType===1&&(l.textContent="");const i=n(l,!1,_r(l));return l instanceof Element&&(l.removeAttribute("v-cloak"),l.setAttribute("data-v-app","")),i},t};function _r(e){if(e instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&e instanceof MathMLElement)return"mathml"}function xr(e){return Z(e)?document.querySelector(e):e}const br=`// ===== 0: MANDELBULB =====
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
`,yr=`// ===== 1: MANDELBOX =====
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
`,wr=`// ===== 2: MENGER SPONGE =====
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
`,Sr=`// ===== 3: SIERPINSKI =====
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
`,zr=`// ===== 4: KALEIDOSCOPE =====
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
`,Ar=`// ===== 5: ORGANIC HYBRID =====
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
`,Tr=`// ===== 6: FRACTAL LAND =====
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
`,Er=`// ===== 7: GALAXY NEBULA =====
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
`,Cr=`// ===== 8: INFINITE TUNNEL =====
vec3 infiniteTunnel(vec2 uv, float time) {
  float angle = atan(uv.y, uv.x), radius = length(uv);
  float tunnel = 1.0 / radius + time * 0.5, twist = angle + tunnel * 0.5;
  vec2 tuv = vec2(twist / PI, tunnel);
  vec2 grid = fract(tuv * 8.0) - 0.5;
  float glow = 0.02 / (length(grid) + 0.02);
  return hsv2rgb(vec3(tunnel * 0.1 + angle * 0.1, 0.7, glow)) * smoothstep(0.0, 0.3, radius);
}
`,Rr=`// ===== 9: PLASMA FRACTAL =====
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
`,Ir=`// ===== 10: CIRCUITS =====
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
`,Mr=`// ===== 11: METABALLS =====
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
`,Or=`// ===== 12: VOLUMETRIC LINES =====
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
`,Pr=`// ===== 13: DISCO TUNNEL =====
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
`,Nr=`// ===== 14: SPEED DRIVE =====
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
`,Fr=`// ===== 15: HOT ROCKS =====
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
`,Lr=`// ===== 16: SERVER ROOM =====
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
`,Dr=`// ===== 17: REMNANT X =====
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
`,$r=`// ===== 18: KALI SET =====
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
`,kr=`// ===== 19: GENERATORS =====
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
`,Br=`// ===== 20: SIMPLICITY GALAXY =====
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
`,jr=`// ===== 21: RIBBONS =====
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
`,Hr=`// ===== 22: TWISTED RINGS =====
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
`,Gr=`// ===== 23: WAVES REMIX =====
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
`,Ur=`// ===== 24: DANCING METALIGHTS =====
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
`,Wr=`// ===== 25: IO BLOCKS =====
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
`,Vr=`// ===== 26: BEATING CIRCLES =====
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
`,Kr=`// ===== 27: CIRCLE WAVE =====
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
`,qr=`// ===== 28: SOUNDFLOWER =====
vec3 soundflower(vec2 uv, float time) {
  float r = length(uv);
  float a = atan(uv.x, uv.y);
  float w = fakeAudio(abs(a) / 6.28);
  float t = 3.0 * sqrt(abs(w - 0.5));
  float f = 0.0;
  if (r < t) f = 1.0 - r / t;
  return pow(vec3(f), vec3(1.5, 1.1, 0.8));
}
`,Yr=`// ===== 29: POLAR BEATS =====
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
`,Xr=`// ===== 30: UNDULANT SPECTRE =====
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
`,Jr=`// ===== 31: REVISION 2015 =====
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
`,Qr=`// ===== 32: GAMEBOY STYLE =====
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
`,Zr=`// ===== 33: ELECTRIC STORM =====
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
`,ec=`// ===== 34: VORTEX =====
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
`,tc=`// ===== 35: NEON GRID =====
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
`,nc=`// ===== 36: MATRIX RAIN =====
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
`,sc=`// ===== 37: FIRE =====
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
`,lc=`// ===== 38: AURORA =====
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
`,oc=`// ===== 39: WORMHOLE =====
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
`,ic=`// ===== 40: HEXAGONS =====
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
`,rc=`// ===== 41: BUBBLES =====
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
`,cc=`// ===== 42: LIGHTNING =====
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
`,ac=`// ===== 43: KALEIDOSCOPE 2D =====
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
`,fc=`// ===== 44: STARFIELD =====
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
`,uc=`// ===== 45: LIQUID METAL =====
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
`,dc=`// ===== 46: FRACTAL TREE =====
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
`,vc=`// ===== 47: VORONOI =====
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
`,pc=`// ===== 48: PSYCHEDELIC =====
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
`,hc=`// ===== 49: ENERGY FIELD =====
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
`,mc=`precision highp float;
attribute vec2 aPosition;
varying vec2 vUV;

void main() {
  vUV = aPosition;
  gl_Position = vec4(aPosition, 0.0, 1.0);
}
`,gc=`// ===== PRECISION AND UNIFORMS =====

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
`,_c=`precision highp float;
varying vec2 vUV;
uniform float uTime;
uniform vec2 uResolution;
uniform int uMode;

// Import base functions
// Note: In actual WebGL, these would need to be concatenated at build time
// The component will handle combining these files

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
`,xc=os({__name:"BioFractalViewer",props:{mode:{default:0}},setup(e){const t=e,n=Xe(null);let s=null,l=null,o=null,i=Date.now();const r=Object.assign({"../../shaders/effects/mode-00-mandelbulb.glsl":br,"../../shaders/effects/mode-01-mandelbox.glsl":yr,"../../shaders/effects/mode-02-menger-sponge.glsl":wr,"../../shaders/effects/mode-03-sierpinski.glsl":Sr,"../../shaders/effects/mode-04-kaleidoscope.glsl":zr,"../../shaders/effects/mode-05-organic-hybrid.glsl":Ar,"../../shaders/effects/mode-06-fractal-land.glsl":Tr,"../../shaders/effects/mode-07-galaxy-nebula.glsl":Er,"../../shaders/effects/mode-08-infinite-tunnel.glsl":Cr,"../../shaders/effects/mode-09-plasma-fractal.glsl":Rr,"../../shaders/effects/mode-10-circuits.glsl":Ir,"../../shaders/effects/mode-11-metaballs.glsl":Mr,"../../shaders/effects/mode-12-volumetric-lines.glsl":Or,"../../shaders/effects/mode-13-disco-tunnel.glsl":Pr,"../../shaders/effects/mode-14-speed-drive.glsl":Nr,"../../shaders/effects/mode-15-hot-rocks.glsl":Fr,"../../shaders/effects/mode-16-server-room.glsl":Lr,"../../shaders/effects/mode-17-remnant-x.glsl":Dr,"../../shaders/effects/mode-18-kali-set.glsl":$r,"../../shaders/effects/mode-19-generators.glsl":kr,"../../shaders/effects/mode-20-simplicity-galaxy.glsl":Br,"../../shaders/effects/mode-21-ribbons.glsl":jr,"../../shaders/effects/mode-22-twisted-rings.glsl":Hr,"../../shaders/effects/mode-23-waves-remix.glsl":Gr,"../../shaders/effects/mode-24-dancing-metalights.glsl":Ur,"../../shaders/effects/mode-25-io-blocks.glsl":Wr,"../../shaders/effects/mode-26-beating-circles.glsl":Vr,"../../shaders/effects/mode-27-circle-wave.glsl":Kr,"../../shaders/effects/mode-28-soundflower.glsl":qr,"../../shaders/effects/mode-29-polar-beats.glsl":Yr,"../../shaders/effects/mode-30-undulant-spectre.glsl":Xr,"../../shaders/effects/mode-31-revision-2015.glsl":Jr,"../../shaders/effects/mode-32-gameboy-style.glsl":Qr,"../../shaders/effects/mode-33-electric-storm.glsl":Zr,"../../shaders/effects/mode-34-vortex.glsl":ec,"../../shaders/effects/mode-35-neon-grid.glsl":tc,"../../shaders/effects/mode-36-matrix-rain.glsl":nc,"../../shaders/effects/mode-37-fire.glsl":sc,"../../shaders/effects/mode-38-aurora.glsl":lc,"../../shaders/effects/mode-39-wormhole.glsl":oc,"../../shaders/effects/mode-40-hexagons.glsl":ic,"../../shaders/effects/mode-41-bubbles.glsl":rc,"../../shaders/effects/mode-42-lightning.glsl":cc,"../../shaders/effects/mode-43-kaleidoscope-2d.glsl":ac,"../../shaders/effects/mode-44-starfield.glsl":fc,"../../shaders/effects/mode-45-liquid-metal.glsl":uc,"../../shaders/effects/mode-46-fractal-tree.glsl":dc,"../../shaders/effects/mode-47-voronoi.glsl":vc,"../../shaders/effects/mode-48-psychedelic.glsl":pc,"../../shaders/effects/mode-49-energy-field.glsl":hc}),a=Object.keys(r).sort().map(C=>r[C]).join(`

`),d=mc,u=`${gc}
${a}
${_c}`,p=(C,Y)=>{if(!s)return null;const N=s.createShader(C);return N?(s.shaderSource(N,Y),s.compileShader(N),s.getShaderParameter(N,s.COMPILE_STATUS)?N:(console.error("Shader error:",s.getShaderInfoLog(N)),null)):null},z=()=>{const C=n.value;if(!C||(s=C.getContext("webgl")||C.getContext("experimental-webgl"),!s))return!1;const Y=p(s.VERTEX_SHADER,d),N=p(s.FRAGMENT_SHADER,u);if(!Y||!N||(l=s.createProgram(),!l))return!1;if(s.attachShader(l,Y),s.attachShader(l,N),s.linkProgram(l),!s.getProgramParameter(l,s.LINK_STATUS))return console.error("Link error:",s.getProgramInfoLog(l)),!1;const k=new Float32Array([-1,-1,1,-1,-1,1,-1,1,1,-1,1,1]),O=s.createBuffer();s.bindBuffer(s.ARRAY_BUFFER,O),s.bufferData(s.ARRAY_BUFFER,k,s.STATIC_DRAW);const w=s.getAttribLocation(l,"aPosition");return s.enableVertexAttribArray(w),s.vertexAttribPointer(w,2,s.FLOAT,!1,0,0),!0},T=()=>{const C=n.value;C&&(C.width=C.clientWidth,C.height=C.clientHeight,s&&s.viewport(0,0,C.width,C.height))},E=()=>{!s||!l||!n.value||(s.useProgram(l),s.uniform1f(s.getUniformLocation(l,"uTime"),(Date.now()-i)/1e3),s.uniform2f(s.getUniformLocation(l,"uResolution"),n.value.width,n.value.height),s.uniform1i(s.getUniformLocation(l,"uMode"),t.mode),s.drawArrays(s.TRIANGLES,0,6),o=requestAnimationFrame(E))};return is(()=>{z()&&(T(),window.addEventListener("resize",T),E())}),bn(()=>{o&&cancelAnimationFrame(o),window.removeEventListener("resize",T)}),(C,Y)=>(Ze(),St("canvas",{ref_key:"canvasRef",ref:n,class:"bio-fractal-canvas"},null,512))}}),ql=(e,t)=>{const n=e.__vccOpts||e;for(const[s,l]of t)n[s]=l;return n},bc=ql(xc,[["__scopeId","data-v-c9463404"]]),yc={class:"pv-container"},wc={class:"pv-svg-container"},Sc={viewBox:"0 0 520 480",preserveAspectRatio:"xMidYMid meet"},zc=["x1","y1","x2","y2"],Ac=["x1","y1","x2","y2"],Tc=["x1","y1","x2","y2"],Ec=["x1","y1","x2","y2"],Cc=["d"],Rc=["cx","cy"],Ic=["transform"],Mc=["x1","y1","x2","y2"],Oc=["x1","y1","x2","y2"],Pc=["x1","y1","x2","y2"],Nc=["x1","y1","x2","y2"],Fc=["d"],Lc=["cx","cy"],Dc=["transform"],$c=["x1","y1","x2","y2"],kc=["x1","y1","x2","y2"],Bc=["x1","y1","x2","y2"],jc=["x1","y1","x2","y2"],Hc=["x1","y1","x2","y2"],Gc=["x1","y1","x2","y2"],Uc=["points"],Wc=["d"],Vc=["cx","cy"],Kc=["transform"],qc=["d"],Yc=["x1","y1","x2","y2"],Xc=["x1","y1","x2","y2"],Jc=["x1","y1","x2","y2"],Qc=["points"],Zc=["x1","y1","x2","y2"],ea=["points"],ta=["x1","y1","x2","y2"],na=["points"],sa=["transform"],la=["cx","cy"],oa=["cx","cy"],ia=["cx","cy"],ra=["x","y"],ca=["x","y"],aa=["x","y"],fa=["x","y"],ua={class:"pv-values"},da={class:"pv-values-main"},va={class:"pv-values-text"},pa={class:"pv-values-real"},ha={class:"pv-values-imag"},ma={class:"pv-values-time"},ga={class:"pv-values-time-text"},_a={class:"pv-values-time-value"},Qt=1.3,xa=1,ht=-2.8,mt=-2.8,Ie=-1.2,Ve=1.3,Zt=1.3,en=1.3,ba=os({__name:"ComplexWaveVisualization",setup(e){const t=Xe(1.25),n=Xe(!0);let s=null;const l=2*Math.PI*1.6,o=X=>Math.exp(-1*Math.pow(X-Qt,2)),i=(X,I,ne)=>{const Kt=-X*50*.7,ot=X*50*.35,us=I*38*.9,c=I*38*.25,f=-ne*38;return{x:270+Kt+us,y:220+ot+c+f}},r=$(()=>o(t.value)*Math.cos(l*t.value)),a=$(()=>o(t.value)*Math.sin(l*t.value)),d=$(()=>{const X=[];for(let I=0;I<=2.5;I+=.015){const ne=o(I);X.push({t:I,re:ne*Math.cos(l*I),im:ne*Math.sin(l*I)})}return X}),u=$(()=>d.value.map((X,I)=>{const ne=i(X.t,X.re,X.im);return`${I===0?"M":"L"} ${ne.x} ${ne.y}`}).join(" ")),p=$(()=>d.value.map((X,I)=>{const ne=i(Ie,X.re,X.im);return`${I===0?"M":"L"} ${ne.x} ${ne.y}`}).join(" ")),z=$(()=>d.value.map((X,I)=>{const ne=i(X.t,ht,X.im);return`${I===0?"M":"L"} ${ne.x} ${ne.y}`}).join(" ")),T=$(()=>d.value.map((X,I)=>{const ne=i(X.t,X.re,mt);return`${I===0?"M":"L"} ${ne.x} ${ne.y}`}).join(" ")),E=$(()=>({tl:i(Ie,-Ve,Ve),tr:i(Ie,Ve,Ve),bl:i(Ie,-Ve,-Ve),br:i(Ie,Ve,-Ve)})),C=$(()=>i(Ie,0,1.4)),Y=$(()=>i(Ie,0,-.3)),N=$(()=>i(Ie,-.3,0)),k=$(()=>i(Ie,1,0)),O=$(()=>({tl:i(0,ht,Zt),tr:i(2.5,ht,Zt),bl:i(0,ht,-Zt),br:i(2.5,ht,-Zt)})),w=$(()=>({bl:i(0,-en,mt),br:i(0,en,mt),tl:i(2.5,-en,mt),tr:i(2.5,en,mt)})),U=$(()=>i(Qt,0,0)),ee=$(()=>i(Qt,0,1.6)),Q=$(()=>i(Qt,1.5,0)),pe=$(()=>i(0,0,0)),se=$(()=>i(2.7,0,0)),te=$(()=>i(t.value,r.value,a.value)),We=$(()=>i(Ie,r.value,a.value)),Le=$(()=>i(t.value,ht,a.value)),De=$(()=>i(t.value,r.value,mt)),dt=$(()=>Math.atan2(O.value.tl.y-O.value.tr.y,O.value.tl.x-O.value.tr.x)*(180/Math.PI)),Tt=$(()=>({x:(O.value.tl.x+O.value.tr.x)/2,y:(O.value.tl.y+O.value.tr.y)/2})),le=$(()=>Math.atan2(w.value.bl.y-w.value.tl.y,w.value.bl.x-w.value.tl.x)*(180/Math.PI)),W=$(()=>({x:(w.value.br.x+w.value.tr.x)/2,y:(w.value.br.y+w.value.tr.y)/2})),G=$(()=>Math.atan2(E.value.tl.y-E.value.tr.y,E.value.tl.x-E.value.tr.x)*(180/Math.PI)),ze=$(()=>({x:(E.value.tl.x+E.value.tr.x)/2,y:(E.value.tl.y+E.value.tr.y)/2})),lt=$(()=>({x:(pe.value.x+se.value.x)/2,y:(pe.value.y+se.value.y)/2}));let Ae=0;const he=()=>{Ae++,n.value&&Ae%2===0&&(t.value+=.02,t.value>2.5&&(t.value=0)),s=requestAnimationFrame(he)};return is(()=>{s=requestAnimationFrame(he)}),bn(()=>{s&&cancelAnimationFrame(s)}),(X,I)=>(Ze(),St("div",yc,[I[15]||(I[15]=x("div",{class:"pv-title"},[x("h1",{class:"pv-title-gradient-1"}," The Observer Effect explains why the same "),x("h2",{class:"pv-title-gradient-2"}," life feels different to different people ")],-1)),x("div",wc,[(Ze(),St("svg",Sc,[I[4]||(I[4]=Jt('<defs data-v-295f2c94><linearGradient id="pv-helixGradient" x1="0%" y1="0%" x2="100%" y2="0%" data-v-295f2c94><stop offset="0%" stop-color="#a855f7" data-v-295f2c94><animate attributeName="stop-color" values="#a855f7;#ec4899;#06b6d4;#a855f7" dur="4s" repeatCount="indefinite" data-v-295f2c94></animate></stop><stop offset="50%" stop-color="#ec4899" data-v-295f2c94><animate attributeName="stop-color" values="#ec4899;#06b6d4;#a855f7;#ec4899" dur="4s" repeatCount="indefinite" data-v-295f2c94></animate></stop><stop offset="100%" stop-color="#06b6d4" data-v-295f2c94><animate attributeName="stop-color" values="#06b6d4;#a855f7;#ec4899;#06b6d4" dur="4s" repeatCount="indefinite" data-v-295f2c94></animate></stop></linearGradient><linearGradient id="pv-imGradient" x1="0%" y1="0%" x2="100%" y2="0%" data-v-295f2c94><stop offset="0%" stop-color="#06b6d4" data-v-295f2c94></stop><stop offset="100%" stop-color="#22d3d3" data-v-295f2c94></stop></linearGradient><linearGradient id="pv-reGradient" x1="0%" y1="0%" x2="100%" y2="0%" data-v-295f2c94><stop offset="0%" stop-color="#f97316" data-v-295f2c94></stop><stop offset="100%" stop-color="#fb923c" data-v-295f2c94></stop></linearGradient><linearGradient id="pv-spiralGradient" x1="0%" y1="0%" x2="100%" y2="100%" data-v-295f2c94><stop offset="0%" stop-color="#a855f7" data-v-295f2c94></stop><stop offset="100%" stop-color="#6366f1" data-v-295f2c94></stop></linearGradient><linearGradient id="pv-axisGradient" x1="0%" y1="0%" x2="100%" y2="0%" data-v-295f2c94><stop offset="0%" stop-color="#64748b" data-v-295f2c94></stop><stop offset="100%" stop-color="#94a3b8" data-v-295f2c94></stop></linearGradient><filter id="pv-glow-cyan" x="-50%" y="-50%" width="200%" height="200%" data-v-295f2c94><feGaussianBlur stdDeviation="3" result="coloredBlur" data-v-295f2c94></feGaussianBlur><feMerge data-v-295f2c94><feMergeNode in="coloredBlur" data-v-295f2c94></feMergeNode><feMergeNode in="SourceGraphic" data-v-295f2c94></feMergeNode></feMerge></filter><filter id="pv-glow-orange" x="-50%" y="-50%" width="200%" height="200%" data-v-295f2c94><feGaussianBlur stdDeviation="3" result="coloredBlur" data-v-295f2c94></feGaussianBlur><feMerge data-v-295f2c94><feMergeNode in="coloredBlur" data-v-295f2c94></feMergeNode><feMergeNode in="SourceGraphic" data-v-295f2c94></feMergeNode></feMerge></filter><filter id="pv-glow-purple" x="-50%" y="-50%" width="200%" height="200%" data-v-295f2c94><feGaussianBlur stdDeviation="4" result="coloredBlur" data-v-295f2c94></feGaussianBlur><feMerge data-v-295f2c94><feMergeNode in="coloredBlur" data-v-295f2c94></feMergeNode><feMergeNode in="SourceGraphic" data-v-295f2c94></feMergeNode></feMerge></filter><filter id="pv-glow-strong" x="-100%" y="-100%" width="300%" height="300%" data-v-295f2c94><feGaussianBlur stdDeviation="6" result="coloredBlur" data-v-295f2c94></feGaussianBlur><feMerge data-v-295f2c94><feMergeNode in="coloredBlur" data-v-295f2c94></feMergeNode><feMergeNode in="coloredBlur" data-v-295f2c94></feMergeNode><feMergeNode in="SourceGraphic" data-v-295f2c94></feMergeNode></feMerge></filter></defs>',1)),x("line",{x1:O.value.bl.x,y1:O.value.bl.y,x2:O.value.tl.x,y2:O.value.tl.y,stroke:"#0e7490","stroke-width":"1",class:"pv-shimmer"},null,8,zc),x("line",{x1:O.value.tl.x,y1:O.value.tl.y,x2:O.value.tr.x,y2:O.value.tr.y,stroke:"#0e7490","stroke-width":"1",class:"pv-shimmer"},null,8,Ac),x("line",{x1:O.value.bl.x,y1:O.value.bl.y,x2:O.value.br.x,y2:O.value.br.y,stroke:"#0e7490","stroke-width":"1",class:"pv-shimmer"},null,8,Tc),x("line",{x1:O.value.tr.x,y1:O.value.tr.y,x2:O.value.br.x,y2:O.value.br.y,stroke:"#0e7490","stroke-width":"1",class:"pv-shimmer"},null,8,Ec),x("path",{d:z.value,fill:"none",stroke:"url(#pv-imGradient)","stroke-width":"2"},null,8,Cc),x("circle",{cx:Le.value.x,cy:Le.value.y,r:"4",fill:"#06b6d4",class:"pv-point-pulse"},null,8,Rc),x("g",{transform:`translate(${Tt.value.x}, ${Tt.value.y-25}) rotate(${dt.value})`},[...I[0]||(I[0]=[Jt('<text fill="#22d3d3" font-size="11" font-family="Times New Roman, serif" text-anchor="middle" style="letter-spacing:-0.5px;" data-v-295f2c94><tspan font-weight="bold" data-v-295f2c94>Im</tspan><tspan font-style="italic" data-v-295f2c94> f</tspan><tspan data-v-295f2c94>=e</tspan><tspan baseline-shift="super" font-size="7" data-v-295f2c94>−γ(t−t₀)²</tspan><tspan font-style="italic" data-v-295f2c94>sin(ωt)</tspan></text>',1)])],8,Ic),x("line",{x1:w.value.bl.x,y1:w.value.bl.y,x2:w.value.br.x,y2:w.value.br.y,stroke:"#c2410c","stroke-width":"1",class:"pv-shimmer"},null,8,Mc),x("line",{x1:w.value.bl.x,y1:w.value.bl.y,x2:w.value.tl.x,y2:w.value.tl.y,stroke:"#c2410c","stroke-width":"1",class:"pv-shimmer"},null,8,Oc),x("line",{x1:w.value.br.x,y1:w.value.br.y,x2:w.value.tr.x,y2:w.value.tr.y,stroke:"#c2410c","stroke-width":"1",class:"pv-shimmer"},null,8,Pc),x("line",{x1:w.value.tl.x,y1:w.value.tl.y,x2:w.value.tr.x,y2:w.value.tr.y,stroke:"#c2410c","stroke-width":"1",class:"pv-shimmer"},null,8,Nc),x("path",{d:T.value,fill:"none",stroke:"url(#pv-reGradient)","stroke-width":"2"},null,8,Fc),x("circle",{cx:De.value.x,cy:De.value.y,r:"4",fill:"#f97316",class:"pv-point-pulse"},null,8,Lc),x("g",{transform:`translate(${W.value.x}, ${W.value.y+25}) rotate(${le.value})`},[...I[1]||(I[1]=[Jt('<text fill="#fb923c" font-size="11" font-family="Times New Roman, serif" text-anchor="middle" style="letter-spacing:-0.5px;" data-v-295f2c94><tspan font-weight="bold" data-v-295f2c94>Re</tspan><tspan font-style="italic" data-v-295f2c94> f</tspan><tspan data-v-295f2c94>=e</tspan><tspan baseline-shift="super" font-size="7" data-v-295f2c94>−γ(t−t₀)²</tspan><tspan font-style="italic" data-v-295f2c94>cos(ωt)</tspan></text>',1)])],8,Dc),x("line",{x1:E.value.bl.x,y1:E.value.bl.y,x2:E.value.tl.x,y2:E.value.tl.y,stroke:"#7c3aed","stroke-width":"1",class:"pv-shimmer"},null,8,$c),x("line",{x1:E.value.tl.x,y1:E.value.tl.y,x2:E.value.tr.x,y2:E.value.tr.y,stroke:"#7c3aed","stroke-width":"1",class:"pv-shimmer"},null,8,kc),x("line",{x1:E.value.bl.x,y1:E.value.bl.y,x2:E.value.br.x,y2:E.value.br.y,stroke:"#7c3aed","stroke-width":"1",class:"pv-shimmer"},null,8,Bc),x("line",{x1:E.value.br.x,y1:E.value.br.y,x2:E.value.tr.x,y2:E.value.tr.y,stroke:"#7c3aed","stroke-width":"1",class:"pv-shimmer"},null,8,jc),x("line",{x1:Y.value.x,y1:Y.value.y,x2:C.value.x,y2:C.value.y,stroke:"#8b5cf6","stroke-width":"1"},null,8,Hc),x("line",{x1:N.value.x,y1:N.value.y,x2:k.value.x,y2:k.value.y,stroke:"#8b5cf6","stroke-width":"1"},null,8,Gc),x("polygon",{points:`${C.value.x},${C.value.y-6} ${C.value.x-3},${C.value.y+2} ${C.value.x+3},${C.value.y+2}`,fill:"#a855f7"},null,8,Uc),x("path",{d:p.value,fill:"none",stroke:"url(#pv-spiralGradient)","stroke-width":"2"},null,8,Wc),x("circle",{cx:We.value.x,cy:We.value.y,r:"4",fill:"#a855f7",class:"pv-point-pulse"},null,8,Vc),x("g",{transform:`translate(${ze.value.x}, ${ze.value.y-20}) rotate(${G.value})`},[...I[2]||(I[2]=[Jt('<text fill="#c084fc" font-size="10" font-family="Times New Roman, serif" text-anchor="middle" style="letter-spacing:-0.5px;" data-v-295f2c94><tspan font-style="italic" data-v-295f2c94>f</tspan><tspan data-v-295f2c94>=e</tspan><tspan baseline-shift="super" font-size="7" data-v-295f2c94>−γ(t−t₀)²</tspan><tspan font-style="italic" data-v-295f2c94>e</tspan><tspan baseline-shift="super" font-size="7" data-v-295f2c94>iωt</tspan></text>',1)])],8,Kc),x("path",{d:u.value,fill:"none",stroke:"url(#pv-helixGradient)","stroke-width":"4"},null,8,qc),x("line",{x1:te.value.x,y1:te.value.y,x2:Le.value.x,y2:Le.value.y,stroke:"#06b6d4","stroke-width":"1","stroke-dasharray":"6,4",class:"pv-dash-flow",opacity:"0.7"},null,8,Yc),x("line",{x1:te.value.x,y1:te.value.y,x2:De.value.x,y2:De.value.y,stroke:"#f97316","stroke-width":"1","stroke-dasharray":"6,4",class:"pv-dash-flow",opacity:"0.7"},null,8,Xc),x("line",{x1:pe.value.x,y1:pe.value.y,x2:se.value.x,y2:se.value.y,stroke:"url(#pv-axisGradient)","stroke-width":"2"},null,8,Jc),x("polygon",{points:`${se.value.x-6},${se.value.y+6} ${se.value.x+6},${se.value.y-2} ${se.value.x+2},${se.value.y+10}`,fill:"#94a3b8"},null,8,Qc),x("line",{x1:U.value.x,y1:U.value.y+8,x2:ee.value.x,y2:ee.value.y,stroke:"url(#pv-axisGradient)","stroke-width":"2"},null,8,Zc),x("polygon",{points:`${ee.value.x},${ee.value.y-8} ${ee.value.x-4},${ee.value.y+2} ${ee.value.x+4},${ee.value.y+2}`,fill:"#94a3b8"},null,8,ea),x("line",{x1:U.value.x-8,y1:U.value.y-5,x2:Q.value.x,y2:Q.value.y,stroke:"url(#pv-axisGradient)","stroke-width":"2"},null,8,ta),x("polygon",{points:`${Q.value.x+8},${Q.value.y+4} ${Q.value.x-2},${Q.value.y-4} ${Q.value.x-4},${Q.value.y+6}`,fill:"#94a3b8"},null,8,na),x("g",{transform:`translate(${lt.value.x+30}, ${lt.value.y-70}) rotate(${dt.value})`},[...I[3]||(I[3]=[x("text",{fill:"#e879f9","font-size":"10","font-family":"Times New Roman, serif","text-anchor":"middle",style:{"letter-spacing":"-0.5px"}},[x("tspan",{"font-style":"italic"},"f(t)"),x("tspan",null,"=Re+"),x("tspan",{"font-style":"italic"},"i"),x("tspan",null,"·Im")],-1)])],8,sa),x("circle",{cx:te.value.x,cy:te.value.y,r:"10",fill:"url(#pv-helixGradient)",opacity:"0.3",class:"pv-point-pulse"},null,8,la),x("circle",{cx:te.value.x,cy:te.value.y,r:"6",fill:"#fff"},null,8,oa),x("circle",{cx:te.value.x,cy:te.value.y,r:"3",fill:"url(#pv-helixGradient)"},null,8,ia),x("text",{x:ee.value.x-30,y:ee.value.y+8,fill:"#22d3d3","font-size":"18","font-weight":"bold","font-family":"serif"},"Im",8,ra),x("text",{x:Q.value.x+10,y:Q.value.y+6,fill:"#fb923c","font-size":"18","font-weight":"bold","font-family":"serif"},"Re",8,ca),x("text",{x:se.value.x-3,y:se.value.y+22,fill:"#c084fc","font-size":"18","font-style":"italic","font-family":"serif"},"t",8,aa),x("text",{x:U.value.x+5,y:U.value.y+20,fill:"#94a3b8","font-size":"13","font-style":"italic","font-family":"serif"},"t₀",8,fa)]))]),x("div",ua,[x("div",da,[x("span",va,[I[5]||(I[5]=x("span",{class:"pv-values-f"},"f",-1)),I[6]||(I[6]=x("span",{class:"pv-values-punctuation"},"(",-1)),I[7]||(I[7]=x("span",{class:"pv-values-t"},"t",-1)),I[8]||(I[8]=x("span",{class:"pv-values-punctuation"},") = ",-1)),x("span",pa,Qe(r.value>=0?"+":"")+Qe(r.value.toFixed(2)),1),I[9]||(I[9]=x("span",{class:"pv-values-punctuation"}," + ",-1)),x("span",ha,Qe(a.value.toFixed(2)),1),I[10]||(I[10]=x("span",{class:"pv-values-i"}," i",-1))])]),x("div",ma,[x("span",ga,[I[11]||(I[11]=x("span",{class:"pv-values-time-t"},"t",-1)),I[12]||(I[12]=x("span",{class:"pv-values-time-punctuation"}," = ",-1)),x("span",_a,Qe((t.value/xa).toFixed(2)),1),I[13]||(I[13]=x("span",{class:"pv-values-time-punctuation"},null,-1)),I[14]||(I[14]=x("span",{class:"pv-values-time-period"},"T",-1))])])])]))}}),ya=ql(ba,[["__scopeId","data-v-295f2c94"]]),wa={class:"app-container"},Sa={class:"c-controls"},za={class:"c-controls-row"},Aa=["value"],Ta=["value"],Ea={key:0,class:"c-slider-container"},Ca=["value"],Ra={class:"c-slider-label"},Ia={class:"c-foreground-layer"},Ma=os({__name:"App",setup(e){const t=Xe(!0),n=Xe(23),s=Xe(0),l=Xe(50),o=Xe(!1),i=[{value:0,label:"Mandelbulb"},{value:1,label:"Mandelbox"},{value:2,label:"Menger Sponge"},{value:3,label:"Sierpinski"},{value:4,label:"Kaleidoscope 3D"},{value:5,label:"Organic Hybrid"},{value:6,label:"Fractal Land"},{value:7,label:"+ Galaxy Nebula"},{value:8,label:"+ Infinite Tunnel"},{value:9,label:"+ Plasma Fractal"},{value:10,label:"+ Circuits"},{value:11,label:"+ Metaballs"},{value:12,label:"+ Volumetric Lines"},{value:13,label:"+ Disco Tunnel"},{value:14,label:"+ Speed Drive"},{value:15,label:"+ Hot Rocks"},{value:16,label:"+ Server Room"},{value:17,label:"+ Remnant X"},{value:18,label:"+ Kali Set"},{value:19,label:"+ Generators"},{value:20,label:"+ Simplicity Galaxy"},{value:21,label:"+ Ribbons"},{value:22,label:"+ Twisted Rings"},{value:23,label:"+ Waves Remix"},{value:24,label:"+ Dancing Metalights"},{value:25,label:"+ IO Blocks"},{value:26,label:"+ Beating Circles"},{value:27,label:"+ Circle Wave"},{value:28,label:"+ Soundflower"},{value:29,label:"+ Polar Beats"},{value:30,label:"+ Undulant Spectre"},{value:31,label:"+ Revision 2015"},{value:32,label:"+ Gameboy Style"},{value:33,label:"+ Electric Storm"},{value:34,label:"+ Vortex"},{value:35,label:"+ Neon Grid"},{value:36,label:"+ Matrix Rain"},{value:37,label:"+ Fire"},{value:38,label:"+ Aurora"},{value:39,label:"+ Wormhole"},{value:40,label:"+ Hexagons"},{value:41,label:"+ Bubbles"},{value:42,label:"+ Lightning"},{value:43,label:"+ Kaleidoscope 2D"},{value:44,label:"+ Starfield"},{value:45,label:"+ Liquid Metal"},{value:46,label:"+ Fractal Tree"},{value:47,label:"+ Voronoi"},{value:48,label:"+ Psychedelic"},{value:49,label:"+ Energy Field"}],r=$(()=>({opacity:l.value/100,filter:`brightness(${.3+l.value/100*.7})`})),a=()=>{t.value=!t.value},d=()=>{o.value=!o.value},u=z=>{const T=z.target;n.value=parseInt(T.value),s.value++},p=z=>{const T=z.target;l.value=parseInt(T.value)};return(z,T)=>(Ze(),St("div",wa,[x("div",Sa,[x("button",{class:bt(["c-menu-toggle",{"c-menu-toggle--open":o.value}]),onClick:d}," ☰ ",2),x("div",{class:bt(["c-menu-panel",{"c-menu-panel--visible":o.value}])},[x("div",za,[x("select",{class:"c-fractal-select",onChange:u,value:n.value},[(Ze(),St(be,null,ri(i,E=>x("option",{key:E.value,value:E.value},Qe(E.label),9,Ta)),64))],40,Aa),x("button",{class:"c-fractal-toggle",onClick:a},Qe(t.value?"ON":"OFF"),1)]),t.value?(Ze(),St("div",Ea,[T[0]||(T[0]=x("span",{class:"c-slider-label"},"Intensity",-1)),x("input",{type:"range",class:"c-brightness-slider",min:"10",max:"100",value:l.value,onInput:p},null,40,Ca),x("span",Ra,Qe(l.value)+"%",1)])):Rs("",!0)],2)]),x("div",{class:bt(["c-background-layer",{"c-background-layer--hidden":!t.value}]),style:mn(r.value)},[t.value?(Ze(),Hl(bc,{key:s.value,mode:n.value},null,8,["mode"])):Rs("",!0)],6),x("div",Ia,[we(ya)])]))}});gr(Ma).mount("#app");
