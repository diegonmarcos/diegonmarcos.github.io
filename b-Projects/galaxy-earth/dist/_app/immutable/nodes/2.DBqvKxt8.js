const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["../chunks/hRSVIHhc.js","../chunks/CqkleIqs.js","../chunks/B1PBqzko.js","../assets/maplibre-gl.DNVN2dqC.css"])))=>i.map(i=>d[i]);
import{p as dr,b as Vi,i as Kt,_ as za}from"../chunks/mj7_z0mf.js";import{a as xt,f as Lt,c as Wh}from"../chunks/CefnHMGF.js";import{a as Xh,o as qh}from"../chunks/BMoj62pF.js";import{h as Kn,C as Ha,x as jh,c as Ga,A as Yh,i as Kh,L as R,F as $h,a5 as Zh,G as Ul,H as Va,e as Vs,ap as Jh,ax as Qh,ae as Fl,a as ed,b as Fo,aF as td,s as nd,aG as Hu,_ as id,aH as rd,aw as nl,aI as sd,a1 as Ol,aJ as ad,aK as od,aA as ld,aL as oi,V as cd,r as Gu,p as Vu,aM as Wa,a2 as ud,aN as hd,aO as dd,au as fd,m as pd,d as md,ar as gd,aP as Bl,aQ as kl,aR as _d,aS as vd,aT as xd,aU as Md,aV as yd,aW as Sd,k as il,u as As,t as qt,l as rl,n as oe,Q as Ce,o as ne,aD as lt,j as Wu,q as te,af as qr,aE as zn,O as Xa,aX as Ed,aY as bd,aZ as Td}from"../chunks/Dwvjxfyb.js";import{d as Xu,a as Ct,e as Gr,s as Ge}from"../chunks/BSWBM-II.js";function Oo(r,e){return e}function Ad(r,e,t){for(var n=[],i=e.length,s,a=e.length,o=0;o<i;o++){let h=e[o];Vu(h,()=>{if(s){if(s.pending.delete(h),s.done.add(h),s.pending.size===0){var d=r.outrogroups;Bo(r,nl(s.done)),d.delete(s),d.size===0&&(r.outrogroups=null)}}else a-=1},!1)}if(a===0){var l=n.length===0&&t!==null;if(l){var c=t,u=c.parentNode;fd(u),u.append(c),r.items.clear()}Bo(r,e,!l)}else s={pending:new Set(e),done:new Set},(r.outrogroups??(r.outrogroups=new Set)).add(s)}function Bo(r,e,t=!0){var n;if(r.pending.size>0){n=new Set;for(const a of r.pending.values())for(const o of a)n.add(r.items.get(o).e)}for(var i=0;i<e.length;i++){var s=e[i];if(n?.has(s)){s.f|=oi;const a=document.createDocumentFragment();pd(s,a)}else md(e[i],t)}}var zl;function Wi(r,e,t,n,i,s=null){var a=r,o=new Map,l=(e&Hu)!==0;if(l){var c=r;a=Kn?Ha(jh(c)):c.appendChild(Ga())}Kn&&Yh();var u=null,h=id(()=>{var v=t();return rd(v)?v:v==null?[]:nl(v)}),d,p=new Map,g=!0;function _(v){(y.effect.f&cd)===0&&(y.pending.delete(v),y.fallback=u,wd(y,d,a,e,n),u!==null&&(d.length===0?(u.f&oi)===0?Gu(u):(u.f^=oi,ws(u,null,a)):Vu(u,()=>{u=null})))}function f(v){y.pending.delete(v)}var m=Kh(()=>{d=R(h);var v=d.length;let E=!1;if(Kn){var C=$h(a)===Zh;C!==(v===0)&&(a=Ul(),Ha(a),Va(!1),E=!0)}for(var A=new Set,b=ed,N=nd(),B=0;B<v;B+=1){Kn&&Vs.nodeType===Jh&&Vs.data===Qh&&(a=Vs,E=!0,Va(!1));var x=d[B],T=n(x,B),z=g?null:o.get(T);z?(z.v&&Fl(z.v,x),z.i&&Fl(z.i,B),N&&b.unskip_effect(z.e)):(z=Rd(o,g?a:zl??(zl=Ga()),x,T,B,i,e,t),g||(z.e.f|=oi),o.set(T,z)),A.add(T)}if(v===0&&s&&!u&&(g?u=Fo(()=>s(a)):(u=Fo(()=>s(zl??(zl=Ga()))),u.f|=oi)),v>A.size&&td(),Kn&&v>0&&Ha(Ul()),!g)if(p.set(b,A),N){for(const[$,P]of o)A.has($)||b.skip_effect(P.e);b.oncommit(_),b.ondiscard(f)}else _(b);E&&Va(!0),R(h)}),y={effect:m,items:o,pending:p,outrogroups:null,fallback:u};g=!1,Kn&&(a=Vs)}function _s(r){for(;r!==null&&(r.f&hd)===0;)r=r.next;return r}function wd(r,e,t,n,i){var s=(n&dd)!==0,a=e.length,o=r.items,l=_s(r.effect.first),c,u=null,h,d=[],p=[],g,_,f,m;if(s)for(m=0;m<a;m+=1)g=e[m],_=i(g,m),f=o.get(_).e,(f.f&oi)===0&&(f.nodes?.a?.measure(),(h??(h=new Set)).add(f));for(m=0;m<a;m+=1){if(g=e[m],_=i(g,m),f=o.get(_).e,r.outrogroups!==null)for(const x of r.outrogroups)x.pending.delete(f),x.done.delete(f);if((f.f&Wa)!==0&&(Gu(f),s&&(f.nodes?.a?.unfix(),(h??(h=new Set)).delete(f))),(f.f&oi)!==0)if(f.f^=oi,f===l)ws(f,null,t);else{var y=u?u.next:l;f===r.effect.last&&(r.effect.last=f.prev),f.prev&&(f.prev.next=f.next),f.next&&(f.next.prev=f.prev),Ui(r,u,f),Ui(r,f,y),ws(f,y,t),u=f,d=[],p=[],l=_s(u.next);continue}if(f!==l){if(c!==void 0&&c.has(f)){if(d.length<p.length){var v=p[0],E;u=v.prev;var C=d[0],A=d[d.length-1];for(E=0;E<d.length;E+=1)ws(d[E],v,t);for(E=0;E<p.length;E+=1)c.delete(p[E]);Ui(r,C.prev,A.next),Ui(r,u,C),Ui(r,A,v),l=v,u=A,m-=1,d=[],p=[]}else c.delete(f),ws(f,l,t),Ui(r,f.prev,f.next),Ui(r,f,u===null?r.effect.first:u.next),Ui(r,u,f),u=f;continue}for(d=[],p=[];l!==null&&l!==f;)(c??(c=new Set)).add(l),p.push(l),l=_s(l.next);if(l===null)continue}(f.f&oi)===0&&d.push(f),u=f,l=_s(f.next)}if(r.outrogroups!==null){for(const x of r.outrogroups)x.pending.size===0&&(Bo(r,nl(x.done)),r.outrogroups?.delete(x));r.outrogroups.size===0&&(r.outrogroups=null)}if(l!==null||c!==void 0){var b=[];if(c!==void 0)for(f of c)(f.f&Wa)===0&&b.push(f);for(;l!==null;)(l.f&Wa)===0&&l!==r.fallback&&b.push(l),l=_s(l.next);var N=b.length;if(N>0){var B=(n&Hu)!==0&&a===0?t:null;if(s){for(m=0;m<N;m+=1)b[m].nodes?.a?.measure();for(m=0;m<N;m+=1)b[m].nodes?.a?.fix()}Ad(r,b,B)}}s&&ud(()=>{if(h!==void 0)for(f of h)f.nodes?.a?.apply()})}function Rd(r,e,t,n,i,s,a,o){var l=(a&ad)!==0?(a&od)===0?ld(t,!1,!1):Ol(t):null,c=(a&sd)!==0?Ol(i):null;return{v:l,i:c,e:Fo(()=>(s(e,l??t,c??i,o),()=>{r.delete(n)}))}}function ws(r,e,t){if(r.nodes)for(var n=r.nodes.start,i=r.nodes.end,s=e&&(e.f&oi)===0?e.nodes.start:t;n!==null;){var a=gd(n);if(s.before(n),n===i)return;n=a}}function Ui(r,e,t){e===null?r.effect.first=t:e.next=t,t===null?r.effect.last=e:t.prev=e}const Hl=[...` 	
\r\f \v\uFEFF`];function Cd(r,e,t){var n=r==null?"":""+r;if(t){for(var i of Object.keys(t))if(t[i])n=n?n+" "+i:i;else if(n.length)for(var s=i.length,a=0;(a=n.indexOf(i,a))>=0;){var o=a+s;(a===0||Hl.includes(n[a-1]))&&(o===n.length||Hl.includes(n[o]))?n=(a===0?"":n.substring(0,a))+n.substring(o+1):a=o}}return n===""?null:n}function Ld(r,e){return r==null?null:String(r)}function Xt(r,e,t,n,i,s){var a=r[Bl];if(Kn||a!==t||a===void 0){var o=Cd(t,n,s);(!Kn||o!==r.getAttribute("class"))&&(o==null?r.removeAttribute("class"):r.className=o),r[Bl]=t}else if(s&&i!==s)for(var l in s){var c=!!s[l];(i==null||c!==!!i[l])&&r.classList.toggle(l,c)}return s}function Ti(r,e,t,n){var i=r[kl];if(Kn||i!==e){var s=Ld(e);(!Kn||s!==r.getAttribute("style"))&&(s==null?r.removeAttribute("style"):r.style.cssText=s),r[kl]=e}return n}const Pd=Symbol("is custom element"),Id=Symbol("is html"),Dd=Sd?"link":"LINK";function yn(r,e,t,n){var i=Nd(r);Kn&&(i[e]=r.getAttribute(e),e==="src"||e==="srcset"||e==="href"&&r.nodeName===Dd)||i[e]!==(i[e]=t)&&(e==="loading"&&(r[_d]=t),t==null?r.removeAttribute(e):typeof t!="string"&&Ud(r).includes(e)?r[e]=t:r.setAttribute(e,t))}function Nd(r){var e;return r[e=vd]??(r[e]={[Pd]:r.nodeName.includes("-"),[Id]:r.namespaceURI===xd})}var Gl=new Map;function Ud(r){var e=r.getAttribute("is")||r.nodeName,t=Gl.get(e);if(t)return t;Gl.set(e,t=[]);for(var n,i=r,s=Element.prototype;s!==i;){n=yd(i);for(var a in n)n[a].set&&a!=="innerHTML"&&a!=="textContent"&&a!=="innerText"&&t.push(a);i=Md(i)}return t}const sl="162",Fd=0,Vl=1,Od=2,qu=1,Bd=2,Ai=3,Ci=0,Pn=1,si=2,$i=0,jr=1,Wl=2,Xl=3,ql=4,kd=5,mr=100,zd=101,Hd=102,jl=103,Yl=104,Gd=200,Vd=201,Wd=202,Xd=203,ko=204,zo=205,qd=206,jd=207,Yd=208,Kd=209,$d=210,Zd=211,Jd=212,Qd=213,ef=214,tf=0,nf=1,rf=2,Sa=3,sf=4,af=5,of=6,lf=7,ju=0,cf=1,uf=2,Zi=0,hf=1,df=2,ff=3,pf=4,mf=5,gf=6,_f=7,Kl="attached",vf="detached",Yu=300,Zr=301,Jr=302,Ho=303,Go=304,Ca=306,Qr=1e3,Wn=1001,Ea=1002,cn=1003,Vo=1004,Vr=1005,Sn=1006,Ma=1007,wi=1008,Ji=1009,xf=1010,Mf=1011,al=1012,Ku=1013,Yi=1014,Jn=1015,Ns=1016,$u=1017,Zu=1018,vr=1020,yf=1021,Xn=1023,Sf=1024,Ef=1025,xr=1026,es=1027,Ju=1028,Qu=1029,bf=1030,eh=1031,th=1033,qa=33776,ja=33777,Ya=33778,Ka=33779,$l=35840,Zl=35841,Jl=35842,Ql=35843,nh=36196,ec=37492,tc=37496,nc=37808,ic=37809,rc=37810,sc=37811,ac=37812,oc=37813,lc=37814,cc=37815,uc=37816,hc=37817,dc=37818,fc=37819,pc=37820,mc=37821,$a=36492,gc=36494,_c=36495,Tf=36283,vc=36284,xc=36285,Mc=36286,Us=2300,ts=2301,Za=2302,yc=2400,Sc=2401,Ec=2402,Af=2500,wf=0,ih=1,Wo=2,Rf=3200,Cf=3201,rh=0,Lf=1,qi="",Cn="srgb",mn="srgb-linear",ol="display-p3",La="display-p3-linear",ba="linear",Ht="srgb",Ta="rec709",Aa="p3",Tr=7680,bc=519,Pf=512,If=513,Df=514,sh=515,Nf=516,Uf=517,Ff=518,Of=519,Xo=35044,Tc="300 es",qo=1035,Ri=2e3,wa=2001;class os{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const n=this._listeners;return n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const i=this._listeners[e];if(i!==void 0){const s=i.indexOf(t);s!==-1&&i.splice(s,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const n=this._listeners[e.type];if(n!==void 0){e.target=this;const i=n.slice(0);for(let s=0,a=i.length;s<a;s++)i[s].call(this,e);e.target=null}}}const vn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let Ac=1234567;const Cs=Math.PI/180,ns=180/Math.PI;function ti(){const r=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(vn[r&255]+vn[r>>8&255]+vn[r>>16&255]+vn[r>>24&255]+"-"+vn[e&255]+vn[e>>8&255]+"-"+vn[e>>16&15|64]+vn[e>>24&255]+"-"+vn[t&63|128]+vn[t>>8&255]+"-"+vn[t>>16&255]+vn[t>>24&255]+vn[n&255]+vn[n>>8&255]+vn[n>>16&255]+vn[n>>24&255]).toLowerCase()}function Jt(r,e,t){return Math.max(e,Math.min(t,r))}function ll(r,e){return(r%e+e)%e}function Bf(r,e,t,n,i){return n+(r-e)*(i-n)/(t-e)}function kf(r,e,t){return r!==e?(t-r)/(e-r):0}function Ls(r,e,t){return(1-t)*r+t*e}function zf(r,e,t,n){return Ls(r,e,1-Math.exp(-t*n))}function Hf(r,e=1){return e-Math.abs(ll(r,e*2)-e)}function Gf(r,e,t){return r<=e?0:r>=t?1:(r=(r-e)/(t-e),r*r*(3-2*r))}function Vf(r,e,t){return r<=e?0:r>=t?1:(r=(r-e)/(t-e),r*r*r*(r*(r*6-15)+10))}function Wf(r,e){return r+Math.floor(Math.random()*(e-r+1))}function Xf(r,e){return r+Math.random()*(e-r)}function qf(r){return r*(.5-Math.random())}function jf(r){r!==void 0&&(Ac=r);let e=Ac+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function Yf(r){return r*Cs}function Kf(r){return r*ns}function jo(r){return(r&r-1)===0&&r!==0}function $f(r){return Math.pow(2,Math.ceil(Math.log(r)/Math.LN2))}function Ra(r){return Math.pow(2,Math.floor(Math.log(r)/Math.LN2))}function Zf(r,e,t,n,i){const s=Math.cos,a=Math.sin,o=s(t/2),l=a(t/2),c=s((e+n)/2),u=a((e+n)/2),h=s((e-n)/2),d=a((e-n)/2),p=s((n-e)/2),g=a((n-e)/2);switch(i){case"XYX":r.set(o*u,l*h,l*d,o*c);break;case"YZY":r.set(l*d,o*u,l*h,o*c);break;case"ZXZ":r.set(l*h,l*d,o*u,o*c);break;case"XZX":r.set(o*u,l*g,l*p,o*c);break;case"YXY":r.set(l*p,o*u,l*g,o*c);break;case"ZYZ":r.set(l*g,l*p,o*u,o*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+i)}}function Qn(r,e){switch(e.constructor){case Float32Array:return r;case Uint32Array:return r/4294967295;case Uint16Array:return r/65535;case Uint8Array:return r/255;case Int32Array:return Math.max(r/2147483647,-1);case Int16Array:return Math.max(r/32767,-1);case Int8Array:return Math.max(r/127,-1);default:throw new Error("Invalid component type.")}}function wt(r,e){switch(e.constructor){case Float32Array:return r;case Uint32Array:return Math.round(r*4294967295);case Uint16Array:return Math.round(r*65535);case Uint8Array:return Math.round(r*255);case Int32Array:return Math.round(r*2147483647);case Int16Array:return Math.round(r*32767);case Int8Array:return Math.round(r*127);default:throw new Error("Invalid component type.")}}const ah={DEG2RAD:Cs,RAD2DEG:ns,generateUUID:ti,clamp:Jt,euclideanModulo:ll,mapLinear:Bf,inverseLerp:kf,lerp:Ls,damp:zf,pingpong:Hf,smoothstep:Gf,smootherstep:Vf,randInt:Wf,randFloat:Xf,randFloatSpread:qf,seededRandom:jf,degToRad:Yf,radToDeg:Kf,isPowerOfTwo:jo,ceilPowerOfTwo:$f,floorPowerOfTwo:Ra,setQuaternionFromProperEuler:Zf,normalize:wt,denormalize:Qn};class Se{constructor(e=0,t=0){Se.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,i=e.elements;return this.x=i[0]*t+i[3]*n+i[6],this.y=i[1]*t+i[4]*n+i[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(Jt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),i=Math.sin(t),s=this.x-e.x,a=this.y-e.y;return this.x=s*n-a*i+e.x,this.y=s*i+a*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class st{constructor(e,t,n,i,s,a,o,l,c){st.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,i,s,a,o,l,c)}set(e,t,n,i,s,a,o,l,c){const u=this.elements;return u[0]=e,u[1]=i,u[2]=o,u[3]=t,u[4]=s,u[5]=l,u[6]=n,u[7]=a,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,s=this.elements,a=n[0],o=n[3],l=n[6],c=n[1],u=n[4],h=n[7],d=n[2],p=n[5],g=n[8],_=i[0],f=i[3],m=i[6],y=i[1],v=i[4],E=i[7],C=i[2],A=i[5],b=i[8];return s[0]=a*_+o*y+l*C,s[3]=a*f+o*v+l*A,s[6]=a*m+o*E+l*b,s[1]=c*_+u*y+h*C,s[4]=c*f+u*v+h*A,s[7]=c*m+u*E+h*b,s[2]=d*_+p*y+g*C,s[5]=d*f+p*v+g*A,s[8]=d*m+p*E+g*b,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],i=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],u=e[8];return t*a*u-t*o*c-n*s*u+n*o*l+i*s*c-i*a*l}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],u=e[8],h=u*a-o*c,d=o*l-u*s,p=c*s-a*l,g=t*h+n*d+i*p;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const _=1/g;return e[0]=h*_,e[1]=(i*c-u*n)*_,e[2]=(o*n-i*a)*_,e[3]=d*_,e[4]=(u*t-i*l)*_,e[5]=(i*s-o*t)*_,e[6]=p*_,e[7]=(n*l-c*t)*_,e[8]=(a*t-n*s)*_,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,i,s,a,o){const l=Math.cos(s),c=Math.sin(s);return this.set(n*l,n*c,-n*(l*a+c*o)+a+e,-i*c,i*l,-i*(-c*a+l*o)+o+t,0,0,1),this}scale(e,t){return this.premultiply(Ja.makeScale(e,t)),this}rotate(e){return this.premultiply(Ja.makeRotation(-e)),this}translate(e,t){return this.premultiply(Ja.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<9;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Ja=new st;function oh(r){for(let e=r.length-1;e>=0;--e)if(r[e]>=65535)return!0;return!1}function Fs(r){return document.createElementNS("http://www.w3.org/1999/xhtml",r)}function Jf(){const r=Fs("canvas");return r.style.display="block",r}const wc={};function lh(r){r in wc||(wc[r]=!0,console.warn(r))}const Rc=new st().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),Cc=new st().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),Ws={[mn]:{transfer:ba,primaries:Ta,toReference:r=>r,fromReference:r=>r},[Cn]:{transfer:Ht,primaries:Ta,toReference:r=>r.convertSRGBToLinear(),fromReference:r=>r.convertLinearToSRGB()},[La]:{transfer:ba,primaries:Aa,toReference:r=>r.applyMatrix3(Cc),fromReference:r=>r.applyMatrix3(Rc)},[ol]:{transfer:Ht,primaries:Aa,toReference:r=>r.convertSRGBToLinear().applyMatrix3(Cc),fromReference:r=>r.applyMatrix3(Rc).convertLinearToSRGB()}},Qf=new Set([mn,La]),bt={enabled:!0,_workingColorSpace:mn,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(r){if(!Qf.has(r))throw new Error(`Unsupported working color space, "${r}".`);this._workingColorSpace=r},convert:function(r,e,t){if(this.enabled===!1||e===t||!e||!t)return r;const n=Ws[e].toReference,i=Ws[t].fromReference;return i(n(r))},fromWorkingColorSpace:function(r,e){return this.convert(r,this._workingColorSpace,e)},toWorkingColorSpace:function(r,e){return this.convert(r,e,this._workingColorSpace)},getPrimaries:function(r){return Ws[r].primaries},getTransfer:function(r){return r===qi?ba:Ws[r].transfer}};function Yr(r){return r<.04045?r*.0773993808:Math.pow(r*.9478672986+.0521327014,2.4)}function Qa(r){return r<.0031308?r*12.92:1.055*Math.pow(r,.41666)-.055}let Ar;class ch{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{Ar===void 0&&(Ar=Fs("canvas")),Ar.width=e.width,Ar.height=e.height;const n=Ar.getContext("2d");e instanceof ImageData?n.putImageData(e,0,0):n.drawImage(e,0,0,e.width,e.height),t=Ar}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=Fs("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const i=n.getImageData(0,0,e.width,e.height),s=i.data;for(let a=0;a<s.length;a++)s[a]=Yr(s[a]/255)*255;return n.putImageData(i,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(Yr(t[n]/255)*255):t[n]=Yr(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let ep=0;class uh{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:ep++}),this.uuid=ti(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let s;if(Array.isArray(i)){s=[];for(let a=0,o=i.length;a<o;a++)i[a].isDataTexture?s.push(eo(i[a].image)):s.push(eo(i[a]))}else s=eo(i);n.url=s}return t||(e.images[this.uuid]=n),n}}function eo(r){return typeof HTMLImageElement<"u"&&r instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&r instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&r instanceof ImageBitmap?ch.getDataURL(r):r.data?{data:Array.from(r.data),width:r.width,height:r.height,type:r.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let tp=0;class un extends os{constructor(e=un.DEFAULT_IMAGE,t=un.DEFAULT_MAPPING,n=Wn,i=Wn,s=Sn,a=wi,o=Xn,l=Ji,c=un.DEFAULT_ANISOTROPY,u=qi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:tp++}),this.uuid=ti(),this.name="",this.source=new uh(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=i,this.magFilter=s,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new Se(0,0),this.repeat=new Se(1,1),this.center=new Se(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new st,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Yu)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Qr:e.x=e.x-Math.floor(e.x);break;case Wn:e.x=e.x<0?0:1;break;case Ea:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Qr:e.y=e.y-Math.floor(e.y);break;case Wn:e.y=e.y<0?0:1;break;case Ea:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}}un.DEFAULT_IMAGE=null;un.DEFAULT_MAPPING=Yu;un.DEFAULT_ANISOTROPY=1;class Nt{constructor(e=0,t=0,n=0,i=1){Nt.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=i}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,i){return this.x=e,this.y=t,this.z=n,this.w=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,s=this.w,a=e.elements;return this.x=a[0]*t+a[4]*n+a[8]*i+a[12]*s,this.y=a[1]*t+a[5]*n+a[9]*i+a[13]*s,this.z=a[2]*t+a[6]*n+a[10]*i+a[14]*s,this.w=a[3]*t+a[7]*n+a[11]*i+a[15]*s,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,i,s;const l=e.elements,c=l[0],u=l[4],h=l[8],d=l[1],p=l[5],g=l[9],_=l[2],f=l[6],m=l[10];if(Math.abs(u-d)<.01&&Math.abs(h-_)<.01&&Math.abs(g-f)<.01){if(Math.abs(u+d)<.1&&Math.abs(h+_)<.1&&Math.abs(g+f)<.1&&Math.abs(c+p+m-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const v=(c+1)/2,E=(p+1)/2,C=(m+1)/2,A=(u+d)/4,b=(h+_)/4,N=(g+f)/4;return v>E&&v>C?v<.01?(n=0,i=.707106781,s=.707106781):(n=Math.sqrt(v),i=A/n,s=b/n):E>C?E<.01?(n=.707106781,i=0,s=.707106781):(i=Math.sqrt(E),n=A/i,s=N/i):C<.01?(n=.707106781,i=.707106781,s=0):(s=Math.sqrt(C),n=b/s,i=N/s),this.set(n,i,s,t),this}let y=Math.sqrt((f-g)*(f-g)+(h-_)*(h-_)+(d-u)*(d-u));return Math.abs(y)<.001&&(y=1),this.x=(f-g)/y,this.y=(h-_)/y,this.z=(d-u)/y,this.w=Math.acos((c+p+m-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class np extends os{constructor(e=1,t=1,n={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new Nt(0,0,e,t),this.scissorTest=!1,this.viewport=new Nt(0,0,e,t);const i={width:e,height:t,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Sn,depthBuffer:!0,stencilBuffer:!1,depthTexture:null,samples:0,count:1},n);const s=new un(i,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);s.flipY=!1,s.generateMipmaps=n.generateMipmaps,s.internalFormat=n.internalFormat,this.textures=[];const a=n.count;for(let o=0;o<a;o++)this.textures[o]=s.clone(),this.textures[o].isRenderTargetTexture=!0;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let i=0,s=this.textures.length;i<s;i++)this.textures[i].image.width=e,this.textures[i].image.height=t,this.textures[i].image.depth=n;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let n=0,i=e.textures.length;n<i;n++)this.textures[n]=e.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new uh(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Mr extends np{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}}class hh extends un{constructor(e=null,t=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=cn,this.minFilter=cn,this.wrapR=Wn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class ip extends un{constructor(e=null,t=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=cn,this.minFilter=cn,this.wrapR=Wn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Qi{constructor(e=0,t=0,n=0,i=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=i}static slerpFlat(e,t,n,i,s,a,o){let l=n[i+0],c=n[i+1],u=n[i+2],h=n[i+3];const d=s[a+0],p=s[a+1],g=s[a+2],_=s[a+3];if(o===0){e[t+0]=l,e[t+1]=c,e[t+2]=u,e[t+3]=h;return}if(o===1){e[t+0]=d,e[t+1]=p,e[t+2]=g,e[t+3]=_;return}if(h!==_||l!==d||c!==p||u!==g){let f=1-o;const m=l*d+c*p+u*g+h*_,y=m>=0?1:-1,v=1-m*m;if(v>Number.EPSILON){const C=Math.sqrt(v),A=Math.atan2(C,m*y);f=Math.sin(f*A)/C,o=Math.sin(o*A)/C}const E=o*y;if(l=l*f+d*E,c=c*f+p*E,u=u*f+g*E,h=h*f+_*E,f===1-o){const C=1/Math.sqrt(l*l+c*c+u*u+h*h);l*=C,c*=C,u*=C,h*=C}}e[t]=l,e[t+1]=c,e[t+2]=u,e[t+3]=h}static multiplyQuaternionsFlat(e,t,n,i,s,a){const o=n[i],l=n[i+1],c=n[i+2],u=n[i+3],h=s[a],d=s[a+1],p=s[a+2],g=s[a+3];return e[t]=o*g+u*h+l*p-c*d,e[t+1]=l*g+u*d+c*h-o*p,e[t+2]=c*g+u*p+o*d-l*h,e[t+3]=u*g-o*h-l*d-c*p,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,i){return this._x=e,this._y=t,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const n=e._x,i=e._y,s=e._z,a=e._order,o=Math.cos,l=Math.sin,c=o(n/2),u=o(i/2),h=o(s/2),d=l(n/2),p=l(i/2),g=l(s/2);switch(a){case"XYZ":this._x=d*u*h+c*p*g,this._y=c*p*h-d*u*g,this._z=c*u*g+d*p*h,this._w=c*u*h-d*p*g;break;case"YXZ":this._x=d*u*h+c*p*g,this._y=c*p*h-d*u*g,this._z=c*u*g-d*p*h,this._w=c*u*h+d*p*g;break;case"ZXY":this._x=d*u*h-c*p*g,this._y=c*p*h+d*u*g,this._z=c*u*g+d*p*h,this._w=c*u*h-d*p*g;break;case"ZYX":this._x=d*u*h-c*p*g,this._y=c*p*h+d*u*g,this._z=c*u*g-d*p*h,this._w=c*u*h+d*p*g;break;case"YZX":this._x=d*u*h+c*p*g,this._y=c*p*h+d*u*g,this._z=c*u*g-d*p*h,this._w=c*u*h-d*p*g;break;case"XZY":this._x=d*u*h-c*p*g,this._y=c*p*h-d*u*g,this._z=c*u*g+d*p*h,this._w=c*u*h+d*p*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,i=Math.sin(n);return this._x=e.x*i,this._y=e.y*i,this._z=e.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],i=t[4],s=t[8],a=t[1],o=t[5],l=t[9],c=t[2],u=t[6],h=t[10],d=n+o+h;if(d>0){const p=.5/Math.sqrt(d+1);this._w=.25/p,this._x=(u-l)*p,this._y=(s-c)*p,this._z=(a-i)*p}else if(n>o&&n>h){const p=2*Math.sqrt(1+n-o-h);this._w=(u-l)/p,this._x=.25*p,this._y=(i+a)/p,this._z=(s+c)/p}else if(o>h){const p=2*Math.sqrt(1+o-n-h);this._w=(s-c)/p,this._x=(i+a)/p,this._y=.25*p,this._z=(l+u)/p}else{const p=2*Math.sqrt(1+h-n-o);this._w=(a-i)/p,this._x=(s+c)/p,this._y=(l+u)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<Number.EPSILON?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Jt(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const i=Math.min(1,t/n);return this.slerp(e,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,i=e._y,s=e._z,a=e._w,o=t._x,l=t._y,c=t._z,u=t._w;return this._x=n*u+a*o+i*c-s*l,this._y=i*u+a*l+s*o-n*c,this._z=s*u+a*c+n*l-i*o,this._w=a*u-n*o-i*l-s*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const n=this._x,i=this._y,s=this._z,a=this._w;let o=a*e._w+n*e._x+i*e._y+s*e._z;if(o<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,o=-o):this.copy(e),o>=1)return this._w=a,this._x=n,this._y=i,this._z=s,this;const l=1-o*o;if(l<=Number.EPSILON){const p=1-t;return this._w=p*a+t*this._w,this._x=p*n+t*this._x,this._y=p*i+t*this._y,this._z=p*s+t*this._z,this.normalize(),this}const c=Math.sqrt(l),u=Math.atan2(c,o),h=Math.sin((1-t)*u)/c,d=Math.sin(t*u)/c;return this._w=a*h+this._w*d,this._x=n*h+this._x*d,this._y=i*h+this._y*d,this._z=s*h+this._z*d,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),i=Math.sqrt(1-n),s=Math.sqrt(n);return this.set(i*Math.sin(e),i*Math.cos(e),s*Math.sin(t),s*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class L{constructor(e=0,t=0,n=0){L.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Lc.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Lc.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,i=this.z,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6]*i,this.y=s[1]*t+s[4]*n+s[7]*i,this.z=s[2]*t+s[5]*n+s[8]*i,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,s=e.elements,a=1/(s[3]*t+s[7]*n+s[11]*i+s[15]);return this.x=(s[0]*t+s[4]*n+s[8]*i+s[12])*a,this.y=(s[1]*t+s[5]*n+s[9]*i+s[13])*a,this.z=(s[2]*t+s[6]*n+s[10]*i+s[14])*a,this}applyQuaternion(e){const t=this.x,n=this.y,i=this.z,s=e.x,a=e.y,o=e.z,l=e.w,c=2*(a*i-o*n),u=2*(o*t-s*i),h=2*(s*n-a*t);return this.x=t+l*c+a*h-o*u,this.y=n+l*u+o*c-s*h,this.z=i+l*h+s*u-a*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,i=this.z,s=e.elements;return this.x=s[0]*t+s[4]*n+s[8]*i,this.y=s[1]*t+s[5]*n+s[9]*i,this.z=s[2]*t+s[6]*n+s[10]*i,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,i=e.y,s=e.z,a=t.x,o=t.y,l=t.z;return this.x=i*l-s*o,this.y=s*a-n*l,this.z=n*o-i*a,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return to.copy(this).projectOnVector(e),this.sub(to)}reflect(e){return this.sub(to.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(Jt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,i=this.z-e.z;return t*t+n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const i=Math.sin(t)*e;return this.x=i*Math.sin(n),this.y=Math.cos(t)*e,this.z=i*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),i=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=i,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const to=new L,Lc=new Qi;class ui{constructor(e=new L(1/0,1/0,1/0),t=new L(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(qn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(qn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=qn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const n=e.geometry;if(n!==void 0){const s=n.getAttribute("position");if(t===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let a=0,o=s.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,qn):qn.fromBufferAttribute(s,a),qn.applyMatrix4(e.matrixWorld),this.expandByPoint(qn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Xs.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Xs.copy(n.boundingBox)),Xs.applyMatrix4(e.matrixWorld),this.union(Xs)}const i=e.children;for(let s=0,a=i.length;s<a;s++)this.expandByObject(i[s],t);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,qn),qn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(vs),qs.subVectors(this.max,vs),wr.subVectors(e.a,vs),Rr.subVectors(e.b,vs),Cr.subVectors(e.c,vs),Fi.subVectors(Rr,wr),Oi.subVectors(Cr,Rr),sr.subVectors(wr,Cr);let t=[0,-Fi.z,Fi.y,0,-Oi.z,Oi.y,0,-sr.z,sr.y,Fi.z,0,-Fi.x,Oi.z,0,-Oi.x,sr.z,0,-sr.x,-Fi.y,Fi.x,0,-Oi.y,Oi.x,0,-sr.y,sr.x,0];return!no(t,wr,Rr,Cr,qs)||(t=[1,0,0,0,1,0,0,0,1],!no(t,wr,Rr,Cr,qs))?!1:(js.crossVectors(Fi,Oi),t=[js.x,js.y,js.z],no(t,wr,Rr,Cr,qs))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,qn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(qn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(xi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),xi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),xi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),xi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),xi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),xi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),xi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),xi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(xi),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const xi=[new L,new L,new L,new L,new L,new L,new L,new L],qn=new L,Xs=new ui,wr=new L,Rr=new L,Cr=new L,Fi=new L,Oi=new L,sr=new L,vs=new L,qs=new L,js=new L,ar=new L;function no(r,e,t,n,i){for(let s=0,a=r.length-3;s<=a;s+=3){ar.fromArray(r,s);const o=i.x*Math.abs(ar.x)+i.y*Math.abs(ar.y)+i.z*Math.abs(ar.z),l=e.dot(ar),c=t.dot(ar),u=n.dot(ar);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>o)return!1}return!0}const rp=new ui,xs=new L,io=new L;class hi{constructor(e=new L,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):rp.setFromPoints(e).getCenter(n);let i=0;for(let s=0,a=e.length;s<a;s++)i=Math.max(i,n.distanceToSquared(e[s]));return this.radius=Math.sqrt(i),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;xs.subVectors(e,this.center);const t=xs.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),i=(n-this.radius)*.5;this.center.addScaledVector(xs,i/n),this.radius+=i}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(io.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(xs.copy(e.center).add(io)),this.expandByPoint(xs.copy(e.center).sub(io))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Mi=new L,ro=new L,Ys=new L,Bi=new L,so=new L,Ks=new L,ao=new L;class Pa{constructor(e=new L,t=new L(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Mi)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=Mi.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Mi.copy(this.origin).addScaledVector(this.direction,t),Mi.distanceToSquared(e))}distanceSqToSegment(e,t,n,i){ro.copy(e).add(t).multiplyScalar(.5),Ys.copy(t).sub(e).normalize(),Bi.copy(this.origin).sub(ro);const s=e.distanceTo(t)*.5,a=-this.direction.dot(Ys),o=Bi.dot(this.direction),l=-Bi.dot(Ys),c=Bi.lengthSq(),u=Math.abs(1-a*a);let h,d,p,g;if(u>0)if(h=a*l-o,d=a*o-l,g=s*u,h>=0)if(d>=-g)if(d<=g){const _=1/u;h*=_,d*=_,p=h*(h+a*d+2*o)+d*(a*h+d+2*l)+c}else d=s,h=Math.max(0,-(a*d+o)),p=-h*h+d*(d+2*l)+c;else d=-s,h=Math.max(0,-(a*d+o)),p=-h*h+d*(d+2*l)+c;else d<=-g?(h=Math.max(0,-(-a*s+o)),d=h>0?-s:Math.min(Math.max(-s,-l),s),p=-h*h+d*(d+2*l)+c):d<=g?(h=0,d=Math.min(Math.max(-s,-l),s),p=d*(d+2*l)+c):(h=Math.max(0,-(a*s+o)),d=h>0?s:Math.min(Math.max(-s,-l),s),p=-h*h+d*(d+2*l)+c);else d=a>0?-s:s,h=Math.max(0,-(a*d+o)),p=-h*h+d*(d+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,h),i&&i.copy(ro).addScaledVector(Ys,d),p}intersectSphere(e,t){Mi.subVectors(e.center,this.origin);const n=Mi.dot(this.direction),i=Mi.dot(Mi)-n*n,s=e.radius*e.radius;if(i>s)return null;const a=Math.sqrt(s-i),o=n-a,l=n+a;return l<0?null:o<0?this.at(l,t):this.at(o,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,i,s,a,o,l;const c=1/this.direction.x,u=1/this.direction.y,h=1/this.direction.z,d=this.origin;return c>=0?(n=(e.min.x-d.x)*c,i=(e.max.x-d.x)*c):(n=(e.max.x-d.x)*c,i=(e.min.x-d.x)*c),u>=0?(s=(e.min.y-d.y)*u,a=(e.max.y-d.y)*u):(s=(e.max.y-d.y)*u,a=(e.min.y-d.y)*u),n>a||s>i||((s>n||isNaN(n))&&(n=s),(a<i||isNaN(i))&&(i=a),h>=0?(o=(e.min.z-d.z)*h,l=(e.max.z-d.z)*h):(o=(e.max.z-d.z)*h,l=(e.min.z-d.z)*h),n>l||o>i)||((o>n||n!==n)&&(n=o),(l<i||i!==i)&&(i=l),i<0)?null:this.at(n>=0?n:i,t)}intersectsBox(e){return this.intersectBox(e,Mi)!==null}intersectTriangle(e,t,n,i,s){so.subVectors(t,e),Ks.subVectors(n,e),ao.crossVectors(so,Ks);let a=this.direction.dot(ao),o;if(a>0){if(i)return null;o=1}else if(a<0)o=-1,a=-a;else return null;Bi.subVectors(this.origin,e);const l=o*this.direction.dot(Ks.crossVectors(Bi,Ks));if(l<0)return null;const c=o*this.direction.dot(so.cross(Bi));if(c<0||l+c>a)return null;const u=-o*Bi.dot(ao);return u<0?null:this.at(u/a,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Ve{constructor(e,t,n,i,s,a,o,l,c,u,h,d,p,g,_,f){Ve.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,i,s,a,o,l,c,u,h,d,p,g,_,f)}set(e,t,n,i,s,a,o,l,c,u,h,d,p,g,_,f){const m=this.elements;return m[0]=e,m[4]=t,m[8]=n,m[12]=i,m[1]=s,m[5]=a,m[9]=o,m[13]=l,m[2]=c,m[6]=u,m[10]=h,m[14]=d,m[3]=p,m[7]=g,m[11]=_,m[15]=f,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Ve().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,n=e.elements,i=1/Lr.setFromMatrixColumn(e,0).length(),s=1/Lr.setFromMatrixColumn(e,1).length(),a=1/Lr.setFromMatrixColumn(e,2).length();return t[0]=n[0]*i,t[1]=n[1]*i,t[2]=n[2]*i,t[3]=0,t[4]=n[4]*s,t[5]=n[5]*s,t[6]=n[6]*s,t[7]=0,t[8]=n[8]*a,t[9]=n[9]*a,t[10]=n[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,i=e.y,s=e.z,a=Math.cos(n),o=Math.sin(n),l=Math.cos(i),c=Math.sin(i),u=Math.cos(s),h=Math.sin(s);if(e.order==="XYZ"){const d=a*u,p=a*h,g=o*u,_=o*h;t[0]=l*u,t[4]=-l*h,t[8]=c,t[1]=p+g*c,t[5]=d-_*c,t[9]=-o*l,t[2]=_-d*c,t[6]=g+p*c,t[10]=a*l}else if(e.order==="YXZ"){const d=l*u,p=l*h,g=c*u,_=c*h;t[0]=d+_*o,t[4]=g*o-p,t[8]=a*c,t[1]=a*h,t[5]=a*u,t[9]=-o,t[2]=p*o-g,t[6]=_+d*o,t[10]=a*l}else if(e.order==="ZXY"){const d=l*u,p=l*h,g=c*u,_=c*h;t[0]=d-_*o,t[4]=-a*h,t[8]=g+p*o,t[1]=p+g*o,t[5]=a*u,t[9]=_-d*o,t[2]=-a*c,t[6]=o,t[10]=a*l}else if(e.order==="ZYX"){const d=a*u,p=a*h,g=o*u,_=o*h;t[0]=l*u,t[4]=g*c-p,t[8]=d*c+_,t[1]=l*h,t[5]=_*c+d,t[9]=p*c-g,t[2]=-c,t[6]=o*l,t[10]=a*l}else if(e.order==="YZX"){const d=a*l,p=a*c,g=o*l,_=o*c;t[0]=l*u,t[4]=_-d*h,t[8]=g*h+p,t[1]=h,t[5]=a*u,t[9]=-o*u,t[2]=-c*u,t[6]=p*h+g,t[10]=d-_*h}else if(e.order==="XZY"){const d=a*l,p=a*c,g=o*l,_=o*c;t[0]=l*u,t[4]=-h,t[8]=c*u,t[1]=d*h+_,t[5]=a*u,t[9]=p*h-g,t[2]=g*h-p,t[6]=o*u,t[10]=_*h+d}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(sp,e,ap)}lookAt(e,t,n){const i=this.elements;return Bn.subVectors(e,t),Bn.lengthSq()===0&&(Bn.z=1),Bn.normalize(),ki.crossVectors(n,Bn),ki.lengthSq()===0&&(Math.abs(n.z)===1?Bn.x+=1e-4:Bn.z+=1e-4,Bn.normalize(),ki.crossVectors(n,Bn)),ki.normalize(),$s.crossVectors(Bn,ki),i[0]=ki.x,i[4]=$s.x,i[8]=Bn.x,i[1]=ki.y,i[5]=$s.y,i[9]=Bn.y,i[2]=ki.z,i[6]=$s.z,i[10]=Bn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,s=this.elements,a=n[0],o=n[4],l=n[8],c=n[12],u=n[1],h=n[5],d=n[9],p=n[13],g=n[2],_=n[6],f=n[10],m=n[14],y=n[3],v=n[7],E=n[11],C=n[15],A=i[0],b=i[4],N=i[8],B=i[12],x=i[1],T=i[5],z=i[9],$=i[13],P=i[2],O=i[6],k=i[10],j=i[14],K=i[3],Y=i[7],ae=i[11],ce=i[15];return s[0]=a*A+o*x+l*P+c*K,s[4]=a*b+o*T+l*O+c*Y,s[8]=a*N+o*z+l*k+c*ae,s[12]=a*B+o*$+l*j+c*ce,s[1]=u*A+h*x+d*P+p*K,s[5]=u*b+h*T+d*O+p*Y,s[9]=u*N+h*z+d*k+p*ae,s[13]=u*B+h*$+d*j+p*ce,s[2]=g*A+_*x+f*P+m*K,s[6]=g*b+_*T+f*O+m*Y,s[10]=g*N+_*z+f*k+m*ae,s[14]=g*B+_*$+f*j+m*ce,s[3]=y*A+v*x+E*P+C*K,s[7]=y*b+v*T+E*O+C*Y,s[11]=y*N+v*z+E*k+C*ae,s[15]=y*B+v*$+E*j+C*ce,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],i=e[8],s=e[12],a=e[1],o=e[5],l=e[9],c=e[13],u=e[2],h=e[6],d=e[10],p=e[14],g=e[3],_=e[7],f=e[11],m=e[15];return g*(+s*l*h-i*c*h-s*o*d+n*c*d+i*o*p-n*l*p)+_*(+t*l*p-t*c*d+s*a*d-i*a*p+i*c*u-s*l*u)+f*(+t*c*h-t*o*p-s*a*h+n*a*p+s*o*u-n*c*u)+m*(-i*o*u-t*l*h+t*o*d+i*a*h-n*a*d+n*l*u)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const i=this.elements;return e.isVector3?(i[12]=e.x,i[13]=e.y,i[14]=e.z):(i[12]=e,i[13]=t,i[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],u=e[8],h=e[9],d=e[10],p=e[11],g=e[12],_=e[13],f=e[14],m=e[15],y=h*f*c-_*d*c+_*l*p-o*f*p-h*l*m+o*d*m,v=g*d*c-u*f*c-g*l*p+a*f*p+u*l*m-a*d*m,E=u*_*c-g*h*c+g*o*p-a*_*p-u*o*m+a*h*m,C=g*h*l-u*_*l-g*o*d+a*_*d+u*o*f-a*h*f,A=t*y+n*v+i*E+s*C;if(A===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const b=1/A;return e[0]=y*b,e[1]=(_*d*s-h*f*s-_*i*p+n*f*p+h*i*m-n*d*m)*b,e[2]=(o*f*s-_*l*s+_*i*c-n*f*c-o*i*m+n*l*m)*b,e[3]=(h*l*s-o*d*s-h*i*c+n*d*c+o*i*p-n*l*p)*b,e[4]=v*b,e[5]=(u*f*s-g*d*s+g*i*p-t*f*p-u*i*m+t*d*m)*b,e[6]=(g*l*s-a*f*s-g*i*c+t*f*c+a*i*m-t*l*m)*b,e[7]=(a*d*s-u*l*s+u*i*c-t*d*c-a*i*p+t*l*p)*b,e[8]=E*b,e[9]=(g*h*s-u*_*s-g*n*p+t*_*p+u*n*m-t*h*m)*b,e[10]=(a*_*s-g*o*s+g*n*c-t*_*c-a*n*m+t*o*m)*b,e[11]=(u*o*s-a*h*s-u*n*c+t*h*c+a*n*p-t*o*p)*b,e[12]=C*b,e[13]=(u*_*i-g*h*i+g*n*d-t*_*d-u*n*f+t*h*f)*b,e[14]=(g*o*i-a*_*i-g*n*l+t*_*l+a*n*f-t*o*f)*b,e[15]=(a*h*i-u*o*i+u*n*l-t*h*l-a*n*d+t*o*d)*b,this}scale(e){const t=this.elements,n=e.x,i=e.y,s=e.z;return t[0]*=n,t[4]*=i,t[8]*=s,t[1]*=n,t[5]*=i,t[9]*=s,t[2]*=n,t[6]*=i,t[10]*=s,t[3]*=n,t[7]*=i,t[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],i=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,i))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),i=Math.sin(t),s=1-n,a=e.x,o=e.y,l=e.z,c=s*a,u=s*o;return this.set(c*a+n,c*o-i*l,c*l+i*o,0,c*o+i*l,u*o+n,u*l-i*a,0,c*l-i*o,u*l+i*a,s*l*l+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,i,s,a){return this.set(1,n,s,0,e,1,a,0,t,i,1,0,0,0,0,1),this}compose(e,t,n){const i=this.elements,s=t._x,a=t._y,o=t._z,l=t._w,c=s+s,u=a+a,h=o+o,d=s*c,p=s*u,g=s*h,_=a*u,f=a*h,m=o*h,y=l*c,v=l*u,E=l*h,C=n.x,A=n.y,b=n.z;return i[0]=(1-(_+m))*C,i[1]=(p+E)*C,i[2]=(g-v)*C,i[3]=0,i[4]=(p-E)*A,i[5]=(1-(d+m))*A,i[6]=(f+y)*A,i[7]=0,i[8]=(g+v)*b,i[9]=(f-y)*b,i[10]=(1-(d+_))*b,i[11]=0,i[12]=e.x,i[13]=e.y,i[14]=e.z,i[15]=1,this}decompose(e,t,n){const i=this.elements;let s=Lr.set(i[0],i[1],i[2]).length();const a=Lr.set(i[4],i[5],i[6]).length(),o=Lr.set(i[8],i[9],i[10]).length();this.determinant()<0&&(s=-s),e.x=i[12],e.y=i[13],e.z=i[14],jn.copy(this);const c=1/s,u=1/a,h=1/o;return jn.elements[0]*=c,jn.elements[1]*=c,jn.elements[2]*=c,jn.elements[4]*=u,jn.elements[5]*=u,jn.elements[6]*=u,jn.elements[8]*=h,jn.elements[9]*=h,jn.elements[10]*=h,t.setFromRotationMatrix(jn),n.x=s,n.y=a,n.z=o,this}makePerspective(e,t,n,i,s,a,o=Ri){const l=this.elements,c=2*s/(t-e),u=2*s/(n-i),h=(t+e)/(t-e),d=(n+i)/(n-i);let p,g;if(o===Ri)p=-(a+s)/(a-s),g=-2*a*s/(a-s);else if(o===wa)p=-a/(a-s),g=-a*s/(a-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return l[0]=c,l[4]=0,l[8]=h,l[12]=0,l[1]=0,l[5]=u,l[9]=d,l[13]=0,l[2]=0,l[6]=0,l[10]=p,l[14]=g,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,n,i,s,a,o=Ri){const l=this.elements,c=1/(t-e),u=1/(n-i),h=1/(a-s),d=(t+e)*c,p=(n+i)*u;let g,_;if(o===Ri)g=(a+s)*h,_=-2*h;else if(o===wa)g=s*h,_=-1*h;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-d,l[1]=0,l[5]=2*u,l[9]=0,l[13]=-p,l[2]=0,l[6]=0,l[10]=_,l[14]=-g,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<16;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}}const Lr=new L,jn=new Ve,sp=new L(0,0,0),ap=new L(1,1,1),ki=new L,$s=new L,Bn=new L,Pc=new Ve,Ic=new Qi;class ci{constructor(e=0,t=0,n=0,i=ci.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=i}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,i=this._order){return this._x=e,this._y=t,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const i=e.elements,s=i[0],a=i[4],o=i[8],l=i[1],c=i[5],u=i[9],h=i[2],d=i[6],p=i[10];switch(t){case"XYZ":this._y=Math.asin(Jt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-u,p),this._z=Math.atan2(-a,s)):(this._x=Math.atan2(d,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Jt(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(o,p),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-h,s),this._z=0);break;case"ZXY":this._x=Math.asin(Jt(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-h,p),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-Jt(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(d,p),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(Jt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-h,s)):(this._x=0,this._y=Math.atan2(o,p));break;case"XZY":this._z=Math.asin(-Jt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(o,s)):(this._x=Math.atan2(-u,p),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return Pc.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Pc,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Ic.setFromEuler(this),this.setFromQuaternion(Ic,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}ci.DEFAULT_ORDER="XYZ";class dh{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let op=0;const Dc=new L,Pr=new Qi,yi=new Ve,Zs=new L,Ms=new L,lp=new L,cp=new Qi,Nc=new L(1,0,0),Uc=new L(0,1,0),Fc=new L(0,0,1),up={type:"added"},hp={type:"removed"},oo={type:"childadded",child:null},lo={type:"childremoved",child:null};class Wt extends os{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:op++}),this.uuid=ti(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Wt.DEFAULT_UP.clone();const e=new L,t=new ci,n=new Qi,i=new L(1,1,1);function s(){n.setFromEuler(t,!1)}function a(){t.setFromQuaternion(n,void 0,!1)}t._onChange(s),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new Ve},normalMatrix:{value:new st}}),this.matrix=new Ve,this.matrixWorld=new Ve,this.matrixAutoUpdate=Wt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Wt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new dh,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Pr.setFromAxisAngle(e,t),this.quaternion.multiply(Pr),this}rotateOnWorldAxis(e,t){return Pr.setFromAxisAngle(e,t),this.quaternion.premultiply(Pr),this}rotateX(e){return this.rotateOnAxis(Nc,e)}rotateY(e){return this.rotateOnAxis(Uc,e)}rotateZ(e){return this.rotateOnAxis(Fc,e)}translateOnAxis(e,t){return Dc.copy(e).applyQuaternion(this.quaternion),this.position.add(Dc.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Nc,e)}translateY(e){return this.translateOnAxis(Uc,e)}translateZ(e){return this.translateOnAxis(Fc,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(yi.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?Zs.copy(e):Zs.set(e,t,n);const i=this.parent;this.updateWorldMatrix(!0,!1),Ms.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?yi.lookAt(Ms,Zs,this.up):yi.lookAt(Zs,Ms,this.up),this.quaternion.setFromRotationMatrix(yi),i&&(yi.extractRotation(i.matrixWorld),Pr.setFromRotationMatrix(yi),this.quaternion.premultiply(Pr.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.parent!==null&&e.parent.remove(e),e.parent=this,this.children.push(e),e.dispatchEvent(up),oo.child=e,this.dispatchEvent(oo),oo.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(hp),lo.child=e,this.dispatchEvent(lo),lo.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),yi.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),yi.multiply(e.parent.matrixWorld)),e.applyMatrix4(yi),this.add(e),e.updateWorldMatrix(!1,!0),this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,i=this.children.length;n<i;n++){const a=this.children[n].getObjectByProperty(e,t);if(a!==void 0)return a}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);const i=this.children;for(let s=0,a=i.length;s<a;s++)i[s].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ms,e,lp),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ms,cp,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,i=t.length;n<i;n++){const s=t[n];(s.matrixWorldAutoUpdate===!0||e===!0)&&s.updateMatrixWorld(e)}}updateWorldMatrix(e,t){const n=this.parent;if(e===!0&&n!==null&&n.matrixWorldAutoUpdate===!0&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),t===!0){const i=this.children;for(let s=0,a=i.length;s<a;s++){const o=i[s];o.matrixWorldAutoUpdate===!0&&o.updateWorldMatrix(!1,!0)}}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const i={};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.castShadow===!0&&(i.castShadow=!0),this.receiveShadow===!0&&(i.receiveShadow=!0),this.visible===!1&&(i.visible=!1),this.frustumCulled===!1&&(i.frustumCulled=!1),this.renderOrder!==0&&(i.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(i.matrixAutoUpdate=!1),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(i.type="BatchedMesh",i.perObjectFrustumCulled=this.perObjectFrustumCulled,i.sortObjects=this.sortObjects,i.drawRanges=this._drawRanges,i.reservedRanges=this._reservedRanges,i.visibility=this._visibility,i.active=this._active,i.bounds=this._bounds.map(o=>({boxInitialized:o.boxInitialized,boxMin:o.box.min.toArray(),boxMax:o.box.max.toArray(),sphereInitialized:o.sphereInitialized,sphereRadius:o.sphere.radius,sphereCenter:o.sphere.center.toArray()})),i.maxGeometryCount=this._maxGeometryCount,i.maxVertexCount=this._maxVertexCount,i.maxIndexCount=this._maxIndexCount,i.geometryInitialized=this._geometryInitialized,i.geometryCount=this._geometryCount,i.matricesTexture=this._matricesTexture.toJSON(e),this.boundingSphere!==null&&(i.boundingSphere={center:i.boundingSphere.center.toArray(),radius:i.boundingSphere.radius}),this.boundingBox!==null&&(i.boundingBox={min:i.boundingBox.min.toArray(),max:i.boundingBox.max.toArray()}));function s(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=s(e.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const l=o.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){const h=l[c];s(e.shapes,h)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(s(e.materials,this.material[l]));i.material=o}else i.material=s(e.materials,this.material);if(this.children.length>0){i.children=[];for(let o=0;o<this.children.length;o++)i.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){i.animations=[];for(let o=0;o<this.animations.length;o++){const l=this.animations[o];i.animations.push(s(e.animations,l))}}if(t){const o=a(e.geometries),l=a(e.materials),c=a(e.textures),u=a(e.images),h=a(e.shapes),d=a(e.skeletons),p=a(e.animations),g=a(e.nodes);o.length>0&&(n.geometries=o),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),u.length>0&&(n.images=u),h.length>0&&(n.shapes=h),d.length>0&&(n.skeletons=d),p.length>0&&(n.animations=p),g.length>0&&(n.nodes=g)}return n.object=i,n;function a(o){const l=[];for(const c in o){const u=o[c];delete u.metadata,l.push(u)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const i=e.children[n];this.add(i.clone())}return this}}Wt.DEFAULT_UP=new L(0,1,0);Wt.DEFAULT_MATRIX_AUTO_UPDATE=!0;Wt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Yn=new L,Si=new L,co=new L,Ei=new L,Ir=new L,Dr=new L,Oc=new L,uo=new L,ho=new L,fo=new L;class ai{constructor(e=new L,t=new L,n=new L){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,i){i.subVectors(n,t),Yn.subVectors(e,t),i.cross(Yn);const s=i.lengthSq();return s>0?i.multiplyScalar(1/Math.sqrt(s)):i.set(0,0,0)}static getBarycoord(e,t,n,i,s){Yn.subVectors(i,t),Si.subVectors(n,t),co.subVectors(e,t);const a=Yn.dot(Yn),o=Yn.dot(Si),l=Yn.dot(co),c=Si.dot(Si),u=Si.dot(co),h=a*c-o*o;if(h===0)return s.set(0,0,0),null;const d=1/h,p=(c*l-o*u)*d,g=(a*u-o*l)*d;return s.set(1-p-g,g,p)}static containsPoint(e,t,n,i){return this.getBarycoord(e,t,n,i,Ei)===null?!1:Ei.x>=0&&Ei.y>=0&&Ei.x+Ei.y<=1}static getInterpolation(e,t,n,i,s,a,o,l){return this.getBarycoord(e,t,n,i,Ei)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,Ei.x),l.addScaledVector(a,Ei.y),l.addScaledVector(o,Ei.z),l)}static isFrontFacing(e,t,n,i){return Yn.subVectors(n,t),Si.subVectors(e,t),Yn.cross(Si).dot(i)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,i){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[i]),this}setFromAttributeAndIndices(e,t,n,i){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,i),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Yn.subVectors(this.c,this.b),Si.subVectors(this.a,this.b),Yn.cross(Si).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return ai.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return ai.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,i,s){return ai.getInterpolation(e,this.a,this.b,this.c,t,n,i,s)}containsPoint(e){return ai.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return ai.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,i=this.b,s=this.c;let a,o;Ir.subVectors(i,n),Dr.subVectors(s,n),uo.subVectors(e,n);const l=Ir.dot(uo),c=Dr.dot(uo);if(l<=0&&c<=0)return t.copy(n);ho.subVectors(e,i);const u=Ir.dot(ho),h=Dr.dot(ho);if(u>=0&&h<=u)return t.copy(i);const d=l*h-u*c;if(d<=0&&l>=0&&u<=0)return a=l/(l-u),t.copy(n).addScaledVector(Ir,a);fo.subVectors(e,s);const p=Ir.dot(fo),g=Dr.dot(fo);if(g>=0&&p<=g)return t.copy(s);const _=p*c-l*g;if(_<=0&&c>=0&&g<=0)return o=c/(c-g),t.copy(n).addScaledVector(Dr,o);const f=u*g-p*h;if(f<=0&&h-u>=0&&p-g>=0)return Oc.subVectors(s,i),o=(h-u)/(h-u+(p-g)),t.copy(i).addScaledVector(Oc,o);const m=1/(f+_+d);return a=_*m,o=d*m,t.copy(n).addScaledVector(Ir,a).addScaledVector(Dr,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const fh={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},zi={h:0,s:0,l:0},Js={h:0,s:0,l:0};function po(r,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?r+(e-r)*6*t:t<1/2?e:t<2/3?r+(e-r)*6*(2/3-t):r}class Ye{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){const i=e;i&&i.isColor?this.copy(i):typeof i=="number"?this.setHex(i):typeof i=="string"&&this.setStyle(i)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Cn){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,bt.toWorkingColorSpace(this,t),this}setRGB(e,t,n,i=bt.workingColorSpace){return this.r=e,this.g=t,this.b=n,bt.toWorkingColorSpace(this,i),this}setHSL(e,t,n,i=bt.workingColorSpace){if(e=ll(e,1),t=Jt(t,0,1),n=Jt(n,0,1),t===0)this.r=this.g=this.b=n;else{const s=n<=.5?n*(1+t):n+t-n*t,a=2*n-s;this.r=po(a,s,e+1/3),this.g=po(a,s,e),this.b=po(a,s,e-1/3)}return bt.toWorkingColorSpace(this,i),this}setStyle(e,t=Cn){function n(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const a=i[1],o=i[2];switch(a){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,t);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,t);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=i[1],a=s.length;if(a===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(s,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Cn){const n=fh[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Yr(e.r),this.g=Yr(e.g),this.b=Yr(e.b),this}copyLinearToSRGB(e){return this.r=Qa(e.r),this.g=Qa(e.g),this.b=Qa(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Cn){return bt.fromWorkingColorSpace(xn.copy(this),e),Math.round(Jt(xn.r*255,0,255))*65536+Math.round(Jt(xn.g*255,0,255))*256+Math.round(Jt(xn.b*255,0,255))}getHexString(e=Cn){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=bt.workingColorSpace){bt.fromWorkingColorSpace(xn.copy(this),t);const n=xn.r,i=xn.g,s=xn.b,a=Math.max(n,i,s),o=Math.min(n,i,s);let l,c;const u=(o+a)/2;if(o===a)l=0,c=0;else{const h=a-o;switch(c=u<=.5?h/(a+o):h/(2-a-o),a){case n:l=(i-s)/h+(i<s?6:0);break;case i:l=(s-n)/h+2;break;case s:l=(n-i)/h+4;break}l/=6}return e.h=l,e.s=c,e.l=u,e}getRGB(e,t=bt.workingColorSpace){return bt.fromWorkingColorSpace(xn.copy(this),t),e.r=xn.r,e.g=xn.g,e.b=xn.b,e}getStyle(e=Cn){bt.fromWorkingColorSpace(xn.copy(this),e);const t=xn.r,n=xn.g,i=xn.b;return e!==Cn?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(i*255)})`}offsetHSL(e,t,n){return this.getHSL(zi),this.setHSL(zi.h+e,zi.s+t,zi.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(zi),e.getHSL(Js);const n=Ls(zi.h,Js.h,t),i=Ls(zi.s,Js.s,t),s=Ls(zi.l,Js.l,t);return this.setHSL(n,i,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,n=this.g,i=this.b,s=e.elements;return this.r=s[0]*t+s[3]*n+s[6]*i,this.g=s[1]*t+s[4]*n+s[7]*i,this.b=s[2]*t+s[5]*n+s[8]*i,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const xn=new Ye;Ye.NAMES=fh;let dp=0;class li extends os{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:dp++}),this.uuid=ti(),this.name="",this.type="Material",this.blending=jr,this.side=Ci,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=ko,this.blendDst=zo,this.blendEquation=mr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Ye(0,0,0),this.blendAlpha=0,this.depthFunc=Sa,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=bc,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Tr,this.stencilZFail=Tr,this.stencilZPass=Tr,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const i=this[t];if(i===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}i&&i.isColor?i.set(n):i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==jr&&(n.blending=this.blending),this.side!==Ci&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==ko&&(n.blendSrc=this.blendSrc),this.blendDst!==zo&&(n.blendDst=this.blendDst),this.blendEquation!==mr&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==Sa&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==bc&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Tr&&(n.stencilFail=this.stencilFail),this.stencilZFail!==Tr&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==Tr&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function i(s){const a=[];for(const o in s){const l=s[o];delete l.metadata,a.push(l)}return a}if(t){const s=i(e.textures),a=i(e.images);s.length>0&&(n.textures=s),a.length>0&&(n.images=a)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const i=t.length;n=new Array(i);for(let s=0;s!==i;++s)n[s]=t[s].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class _r extends li{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Ye(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ci,this.combine=ju,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const $t=new L,Qs=new Se;class Qt{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=Xo,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=Jn,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return lh("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let i=0,s=this.itemSize;i<s;i++)this.array[e+i]=t.array[n+i];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)Qs.fromBufferAttribute(this,t),Qs.applyMatrix3(e),this.setXY(t,Qs.x,Qs.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)$t.fromBufferAttribute(this,t),$t.applyMatrix3(e),this.setXYZ(t,$t.x,$t.y,$t.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)$t.fromBufferAttribute(this,t),$t.applyMatrix4(e),this.setXYZ(t,$t.x,$t.y,$t.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)$t.fromBufferAttribute(this,t),$t.applyNormalMatrix(e),this.setXYZ(t,$t.x,$t.y,$t.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)$t.fromBufferAttribute(this,t),$t.transformDirection(e),this.setXYZ(t,$t.x,$t.y,$t.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=Qn(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=wt(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Qn(t,this.array)),t}setX(e,t){return this.normalized&&(t=wt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Qn(t,this.array)),t}setY(e,t){return this.normalized&&(t=wt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Qn(t,this.array)),t}setZ(e,t){return this.normalized&&(t=wt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Qn(t,this.array)),t}setW(e,t){return this.normalized&&(t=wt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=wt(t,this.array),n=wt(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,i){return e*=this.itemSize,this.normalized&&(t=wt(t,this.array),n=wt(n,this.array),i=wt(i,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this}setXYZW(e,t,n,i,s){return e*=this.itemSize,this.normalized&&(t=wt(t,this.array),n=wt(n,this.array),i=wt(i,this.array),s=wt(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Xo&&(e.usage=this.usage),e}}class ph extends Qt{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class mh extends Qt{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class hn extends Qt{constructor(e,t,n){super(new Float32Array(e),t,n)}}let fp=0;const Gn=new Ve,mo=new Wt,Nr=new L,kn=new ui,ys=new ui,ln=new L;class In extends os{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:fp++}),this.uuid=ti(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(oh(e)?mh:ph)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const s=new st().getNormalMatrix(e);n.applyNormalMatrix(s),n.needsUpdate=!0}const i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(e),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Gn.makeRotationFromQuaternion(e),this.applyMatrix4(Gn),this}rotateX(e){return Gn.makeRotationX(e),this.applyMatrix4(Gn),this}rotateY(e){return Gn.makeRotationY(e),this.applyMatrix4(Gn),this}rotateZ(e){return Gn.makeRotationZ(e),this.applyMatrix4(Gn),this}translate(e,t,n){return Gn.makeTranslation(e,t,n),this.applyMatrix4(Gn),this}scale(e,t,n){return Gn.makeScale(e,t,n),this.applyMatrix4(Gn),this}lookAt(e){return mo.lookAt(e),mo.updateMatrix(),this.applyMatrix4(mo.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Nr).negate(),this.translate(Nr.x,Nr.y,Nr.z),this}setFromPoints(e){const t=[];for(let n=0,i=e.length;n<i;n++){const s=e[n];t.push(s.x,s.y,s.z||0)}return this.setAttribute("position",new hn(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new ui);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new L(-1/0,-1/0,-1/0),new L(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,i=t.length;n<i;n++){const s=t[n];kn.setFromBufferAttribute(s),this.morphTargetsRelative?(ln.addVectors(this.boundingBox.min,kn.min),this.boundingBox.expandByPoint(ln),ln.addVectors(this.boundingBox.max,kn.max),this.boundingBox.expandByPoint(ln)):(this.boundingBox.expandByPoint(kn.min),this.boundingBox.expandByPoint(kn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new hi);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new L,1/0);return}if(e){const n=this.boundingSphere.center;if(kn.setFromBufferAttribute(e),t)for(let s=0,a=t.length;s<a;s++){const o=t[s];ys.setFromBufferAttribute(o),this.morphTargetsRelative?(ln.addVectors(kn.min,ys.min),kn.expandByPoint(ln),ln.addVectors(kn.max,ys.max),kn.expandByPoint(ln)):(kn.expandByPoint(ys.min),kn.expandByPoint(ys.max))}kn.getCenter(n);let i=0;for(let s=0,a=e.count;s<a;s++)ln.fromBufferAttribute(e,s),i=Math.max(i,n.distanceToSquared(ln));if(t)for(let s=0,a=t.length;s<a;s++){const o=t[s],l=this.morphTargetsRelative;for(let c=0,u=o.count;c<u;c++)ln.fromBufferAttribute(o,c),l&&(Nr.fromBufferAttribute(e,c),ln.add(Nr)),i=Math.max(i,n.distanceToSquared(ln))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=t.position,i=t.normal,s=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Qt(new Float32Array(4*n.count),4));const a=this.getAttribute("tangent"),o=[],l=[];for(let N=0;N<n.count;N++)o[N]=new L,l[N]=new L;const c=new L,u=new L,h=new L,d=new Se,p=new Se,g=new Se,_=new L,f=new L;function m(N,B,x){c.fromBufferAttribute(n,N),u.fromBufferAttribute(n,B),h.fromBufferAttribute(n,x),d.fromBufferAttribute(s,N),p.fromBufferAttribute(s,B),g.fromBufferAttribute(s,x),u.sub(c),h.sub(c),p.sub(d),g.sub(d);const T=1/(p.x*g.y-g.x*p.y);isFinite(T)&&(_.copy(u).multiplyScalar(g.y).addScaledVector(h,-p.y).multiplyScalar(T),f.copy(h).multiplyScalar(p.x).addScaledVector(u,-g.x).multiplyScalar(T),o[N].add(_),o[B].add(_),o[x].add(_),l[N].add(f),l[B].add(f),l[x].add(f))}let y=this.groups;y.length===0&&(y=[{start:0,count:e.count}]);for(let N=0,B=y.length;N<B;++N){const x=y[N],T=x.start,z=x.count;for(let $=T,P=T+z;$<P;$+=3)m(e.getX($+0),e.getX($+1),e.getX($+2))}const v=new L,E=new L,C=new L,A=new L;function b(N){C.fromBufferAttribute(i,N),A.copy(C);const B=o[N];v.copy(B),v.sub(C.multiplyScalar(C.dot(B))).normalize(),E.crossVectors(A,B);const T=E.dot(l[N])<0?-1:1;a.setXYZW(N,v.x,v.y,v.z,T)}for(let N=0,B=y.length;N<B;++N){const x=y[N],T=x.start,z=x.count;for(let $=T,P=T+z;$<P;$+=3)b(e.getX($+0)),b(e.getX($+1)),b(e.getX($+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new Qt(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let d=0,p=n.count;d<p;d++)n.setXYZ(d,0,0,0);const i=new L,s=new L,a=new L,o=new L,l=new L,c=new L,u=new L,h=new L;if(e)for(let d=0,p=e.count;d<p;d+=3){const g=e.getX(d+0),_=e.getX(d+1),f=e.getX(d+2);i.fromBufferAttribute(t,g),s.fromBufferAttribute(t,_),a.fromBufferAttribute(t,f),u.subVectors(a,s),h.subVectors(i,s),u.cross(h),o.fromBufferAttribute(n,g),l.fromBufferAttribute(n,_),c.fromBufferAttribute(n,f),o.add(u),l.add(u),c.add(u),n.setXYZ(g,o.x,o.y,o.z),n.setXYZ(_,l.x,l.y,l.z),n.setXYZ(f,c.x,c.y,c.z)}else for(let d=0,p=t.count;d<p;d+=3)i.fromBufferAttribute(t,d+0),s.fromBufferAttribute(t,d+1),a.fromBufferAttribute(t,d+2),u.subVectors(a,s),h.subVectors(i,s),u.cross(h),n.setXYZ(d+0,u.x,u.y,u.z),n.setXYZ(d+1,u.x,u.y,u.z),n.setXYZ(d+2,u.x,u.y,u.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)ln.fromBufferAttribute(e,t),ln.normalize(),e.setXYZ(t,ln.x,ln.y,ln.z)}toNonIndexed(){function e(o,l){const c=o.array,u=o.itemSize,h=o.normalized,d=new c.constructor(l.length*u);let p=0,g=0;for(let _=0,f=l.length;_<f;_++){o.isInterleavedBufferAttribute?p=l[_]*o.data.stride+o.offset:p=l[_]*u;for(let m=0;m<u;m++)d[g++]=c[p++]}return new Qt(d,u,h)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new In,n=this.index.array,i=this.attributes;for(const o in i){const l=i[o],c=e(l,n);t.setAttribute(o,c)}const s=this.morphAttributes;for(const o in s){const l=[],c=s[o];for(let u=0,h=c.length;u<h;u++){const d=c[u],p=e(d,n);l.push(p)}t.morphAttributes[o]=l}t.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,l=a.length;o<l;o++){const c=a[o];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const l in n){const c=n[l];e.data.attributes[l]=c.toJSON(e.data)}const i={};let s=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],u=[];for(let h=0,d=c.length;h<d;h++){const p=c[h];u.push(p.toJSON(e.data))}u.length>0&&(i[l]=u,s=!0)}s&&(e.data.morphAttributes=i,e.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(e.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone(t));const i=e.attributes;for(const c in i){const u=i[c];this.setAttribute(c,u.clone(t))}const s=e.morphAttributes;for(const c in s){const u=[],h=s[c];for(let d=0,p=h.length;d<p;d++)u.push(h[d].clone(t));this.morphAttributes[c]=u}this.morphTargetsRelative=e.morphTargetsRelative;const a=e.groups;for(let c=0,u=a.length;c<u;c++){const h=a[c];this.addGroup(h.start,h.count,h.materialIndex)}const o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Bc=new Ve,or=new Pa,ea=new hi,kc=new L,Ur=new L,Fr=new L,Or=new L,go=new L,ta=new L,na=new Se,ia=new Se,ra=new Se,zc=new L,Hc=new L,Gc=new L,sa=new L,aa=new L;class Vt extends Wt{constructor(e=new In,t=new _r){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=i.length;s<a;s++){const o=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}getVertexPosition(e,t){const n=this.geometry,i=n.attributes.position,s=n.morphAttributes.position,a=n.morphTargetsRelative;t.fromBufferAttribute(i,e);const o=this.morphTargetInfluences;if(s&&o){ta.set(0,0,0);for(let l=0,c=s.length;l<c;l++){const u=o[l],h=s[l];u!==0&&(go.fromBufferAttribute(h,e),a?ta.addScaledVector(go,u):ta.addScaledVector(go.sub(t),u))}t.add(ta)}return t}raycast(e,t){const n=this.geometry,i=this.material,s=this.matrixWorld;i!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),ea.copy(n.boundingSphere),ea.applyMatrix4(s),or.copy(e.ray).recast(e.near),!(ea.containsPoint(or.origin)===!1&&(or.intersectSphere(ea,kc)===null||or.origin.distanceToSquared(kc)>(e.far-e.near)**2))&&(Bc.copy(s).invert(),or.copy(e.ray).applyMatrix4(Bc),!(n.boundingBox!==null&&or.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,or)))}_computeIntersections(e,t,n){let i;const s=this.geometry,a=this.material,o=s.index,l=s.attributes.position,c=s.attributes.uv,u=s.attributes.uv1,h=s.attributes.normal,d=s.groups,p=s.drawRange;if(o!==null)if(Array.isArray(a))for(let g=0,_=d.length;g<_;g++){const f=d[g],m=a[f.materialIndex],y=Math.max(f.start,p.start),v=Math.min(o.count,Math.min(f.start+f.count,p.start+p.count));for(let E=y,C=v;E<C;E+=3){const A=o.getX(E),b=o.getX(E+1),N=o.getX(E+2);i=oa(this,m,e,n,c,u,h,A,b,N),i&&(i.faceIndex=Math.floor(E/3),i.face.materialIndex=f.materialIndex,t.push(i))}}else{const g=Math.max(0,p.start),_=Math.min(o.count,p.start+p.count);for(let f=g,m=_;f<m;f+=3){const y=o.getX(f),v=o.getX(f+1),E=o.getX(f+2);i=oa(this,a,e,n,c,u,h,y,v,E),i&&(i.faceIndex=Math.floor(f/3),t.push(i))}}else if(l!==void 0)if(Array.isArray(a))for(let g=0,_=d.length;g<_;g++){const f=d[g],m=a[f.materialIndex],y=Math.max(f.start,p.start),v=Math.min(l.count,Math.min(f.start+f.count,p.start+p.count));for(let E=y,C=v;E<C;E+=3){const A=E,b=E+1,N=E+2;i=oa(this,m,e,n,c,u,h,A,b,N),i&&(i.faceIndex=Math.floor(E/3),i.face.materialIndex=f.materialIndex,t.push(i))}}else{const g=Math.max(0,p.start),_=Math.min(l.count,p.start+p.count);for(let f=g,m=_;f<m;f+=3){const y=f,v=f+1,E=f+2;i=oa(this,a,e,n,c,u,h,y,v,E),i&&(i.faceIndex=Math.floor(f/3),t.push(i))}}}}function pp(r,e,t,n,i,s,a,o){let l;if(e.side===Pn?l=n.intersectTriangle(a,s,i,!0,o):l=n.intersectTriangle(i,s,a,e.side===Ci,o),l===null)return null;aa.copy(o),aa.applyMatrix4(r.matrixWorld);const c=t.ray.origin.distanceTo(aa);return c<t.near||c>t.far?null:{distance:c,point:aa.clone(),object:r}}function oa(r,e,t,n,i,s,a,o,l,c){r.getVertexPosition(o,Ur),r.getVertexPosition(l,Fr),r.getVertexPosition(c,Or);const u=pp(r,e,t,n,Ur,Fr,Or,sa);if(u){i&&(na.fromBufferAttribute(i,o),ia.fromBufferAttribute(i,l),ra.fromBufferAttribute(i,c),u.uv=ai.getInterpolation(sa,Ur,Fr,Or,na,ia,ra,new Se)),s&&(na.fromBufferAttribute(s,o),ia.fromBufferAttribute(s,l),ra.fromBufferAttribute(s,c),u.uv1=ai.getInterpolation(sa,Ur,Fr,Or,na,ia,ra,new Se)),a&&(zc.fromBufferAttribute(a,o),Hc.fromBufferAttribute(a,l),Gc.fromBufferAttribute(a,c),u.normal=ai.getInterpolation(sa,Ur,Fr,Or,zc,Hc,Gc,new L),u.normal.dot(n.direction)>0&&u.normal.multiplyScalar(-1));const h={a:o,b:l,c,normal:new L,materialIndex:0};ai.getNormal(Ur,Fr,Or,h.normal),u.face=h}return u}class $n extends In{constructor(e=1,t=1,n=1,i=1,s=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:i,heightSegments:s,depthSegments:a};const o=this;i=Math.floor(i),s=Math.floor(s),a=Math.floor(a);const l=[],c=[],u=[],h=[];let d=0,p=0;g("z","y","x",-1,-1,n,t,e,a,s,0),g("z","y","x",1,-1,n,t,-e,a,s,1),g("x","z","y",1,1,e,n,t,i,a,2),g("x","z","y",1,-1,e,n,-t,i,a,3),g("x","y","z",1,-1,e,t,n,i,s,4),g("x","y","z",-1,-1,e,t,-n,i,s,5),this.setIndex(l),this.setAttribute("position",new hn(c,3)),this.setAttribute("normal",new hn(u,3)),this.setAttribute("uv",new hn(h,2));function g(_,f,m,y,v,E,C,A,b,N,B){const x=E/b,T=C/N,z=E/2,$=C/2,P=A/2,O=b+1,k=N+1;let j=0,K=0;const Y=new L;for(let ae=0;ae<k;ae++){const ce=ae*T-$;for(let Me=0;Me<O;Me++){const Be=Me*x-z;Y[_]=Be*y,Y[f]=ce*v,Y[m]=P,c.push(Y.x,Y.y,Y.z),Y[_]=0,Y[f]=0,Y[m]=A>0?1:-1,u.push(Y.x,Y.y,Y.z),h.push(Me/b),h.push(1-ae/N),j+=1}}for(let ae=0;ae<N;ae++)for(let ce=0;ce<b;ce++){const Me=d+ce+O*ae,Be=d+ce+O*(ae+1),V=d+(ce+1)+O*(ae+1),se=d+(ce+1)+O*ae;l.push(Me,Be,se),l.push(Be,V,se),K+=6}o.addGroup(p,K,B),p+=K,d+=j}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new $n(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function is(r){const e={};for(const t in r){e[t]={};for(const n in r[t]){const i=r[t][n];i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)?i.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=i.clone():Array.isArray(i)?e[t][n]=i.slice():e[t][n]=i}}return e}function Rn(r){const e={};for(let t=0;t<r.length;t++){const n=is(r[t]);for(const i in n)e[i]=n[i]}return e}function mp(r){const e=[];for(let t=0;t<r.length;t++)e.push(r[t].clone());return e}function gh(r){return r.getRenderTarget()===null?r.outputColorSpace:bt.workingColorSpace}const gp={clone:is,merge:Rn};var _p=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,vp=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Li extends li{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=_p,this.fragmentShader=vp,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1,clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=is(e.uniforms),this.uniformsGroups=mp(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const i in this.uniforms){const a=this.uniforms[i].value;a&&a.isTexture?t.uniforms[i]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[i]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[i]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[i]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[i]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[i]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[i]={type:"m4",value:a.toArray()}:t.uniforms[i]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const n={};for(const i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}}class cl extends Wt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Ve,this.projectionMatrix=new Ve,this.projectionMatrixInverse=new Ve,this.coordinateSystem=Ri}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Hi=new L,Vc=new Se,Wc=new Se;class Ln extends cl{constructor(e=50,t=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=ns*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Cs*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return ns*2*Math.atan(Math.tan(Cs*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){Hi.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Hi.x,Hi.y).multiplyScalar(-e/Hi.z),Hi.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Hi.x,Hi.y).multiplyScalar(-e/Hi.z)}getViewSize(e,t){return this.getViewBounds(e,Vc,Wc),t.subVectors(Wc,Vc)}setViewOffset(e,t,n,i,s,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(Cs*.5*this.fov)/this.zoom,n=2*t,i=this.aspect*n,s=-.5*i;const a=this.view;if(this.view!==null&&this.view.enabled){const l=a.fullWidth,c=a.fullHeight;s+=a.offsetX*i/l,t-=a.offsetY*n/c,i*=a.width/l,n*=a.height/c}const o=this.filmOffset;o!==0&&(s+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+i,t,t-n,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const Br=-90,kr=1;class xp extends Wt{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const i=new Ln(Br,kr,e,t);i.layers=this.layers,this.add(i);const s=new Ln(Br,kr,e,t);s.layers=this.layers,this.add(s);const a=new Ln(Br,kr,e,t);a.layers=this.layers,this.add(a);const o=new Ln(Br,kr,e,t);o.layers=this.layers,this.add(o);const l=new Ln(Br,kr,e,t);l.layers=this.layers,this.add(l);const c=new Ln(Br,kr,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[n,i,s,a,o,l]=t;for(const c of t)this.remove(c);if(e===Ri)n.up.set(0,1,0),n.lookAt(1,0,0),i.up.set(0,1,0),i.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===wa)n.up.set(0,-1,0),n.lookAt(-1,0,0),i.up.set(0,-1,0),i.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:i}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,a,o,l,c,u]=this.children,h=e.getRenderTarget(),d=e.getActiveCubeFace(),p=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;const _=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0,i),e.render(t,s),e.setRenderTarget(n,1,i),e.render(t,a),e.setRenderTarget(n,2,i),e.render(t,o),e.setRenderTarget(n,3,i),e.render(t,l),e.setRenderTarget(n,4,i),e.render(t,c),n.texture.generateMipmaps=_,e.setRenderTarget(n,5,i),e.render(t,u),e.setRenderTarget(h,d,p),e.xr.enabled=g,n.texture.needsPMREMUpdate=!0}}class _h extends un{constructor(e,t,n,i,s,a,o,l,c,u){e=e!==void 0?e:[],t=t!==void 0?t:Zr,super(e,t,n,i,s,a,o,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class Mp extends Mr{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},i=[n,n,n,n,n,n];this.texture=new _h(i,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:Sn}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},i=new $n(5,5,5),s=new Li({name:"CubemapFromEquirect",uniforms:is(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Pn,blending:$i});s.uniforms.tEquirect.value=t;const a=new Vt(i,s),o=t.minFilter;return t.minFilter===wi&&(t.minFilter=Sn),new xp(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t,n,i){const s=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,n,i);e.setRenderTarget(s)}}const _o=new L,yp=new L,Sp=new st;class fr{constructor(e=new L(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,i){return this.normal.set(e,t,n),this.constant=i,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const i=_o.subVectors(n,t).cross(yp.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(i,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const n=e.delta(_o),i=this.normal.dot(n);if(i===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/i;return s<0||s>1?null:t.copy(e.start).addScaledVector(n,s)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||Sp.getNormalMatrix(e),i=this.coplanarPoint(_o).applyMatrix4(e),s=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const lr=new hi,la=new L;class ul{constructor(e=new fr,t=new fr,n=new fr,i=new fr,s=new fr,a=new fr){this.planes=[e,t,n,i,s,a]}set(e,t,n,i,s,a){const o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(n),o[3].copy(i),o[4].copy(s),o[5].copy(a),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=Ri){const n=this.planes,i=e.elements,s=i[0],a=i[1],o=i[2],l=i[3],c=i[4],u=i[5],h=i[6],d=i[7],p=i[8],g=i[9],_=i[10],f=i[11],m=i[12],y=i[13],v=i[14],E=i[15];if(n[0].setComponents(l-s,d-c,f-p,E-m).normalize(),n[1].setComponents(l+s,d+c,f+p,E+m).normalize(),n[2].setComponents(l+a,d+u,f+g,E+y).normalize(),n[3].setComponents(l-a,d-u,f-g,E-y).normalize(),n[4].setComponents(l-o,d-h,f-_,E-v).normalize(),t===Ri)n[5].setComponents(l+o,d+h,f+_,E+v).normalize();else if(t===wa)n[5].setComponents(o,h,_,v).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),lr.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),lr.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(lr)}intersectsSprite(e){return lr.center.set(0,0,0),lr.radius=.7071067811865476,lr.applyMatrix4(e.matrixWorld),this.intersectsSphere(lr)}intersectsSphere(e){const t=this.planes,n=e.center,i=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(n)<i)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const i=t[n];if(la.x=i.normal.x>0?e.max.x:e.min.x,la.y=i.normal.y>0?e.max.y:e.min.y,la.z=i.normal.z>0?e.max.z:e.min.z,i.distanceToPoint(la)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function vh(){let r=null,e=!1,t=null,n=null;function i(s,a){t(s,a),n=r.requestAnimationFrame(i)}return{start:function(){e!==!0&&t!==null&&(n=r.requestAnimationFrame(i),e=!0)},stop:function(){r.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){r=s}}}function Ep(r,e){const t=e.isWebGL2,n=new WeakMap;function i(c,u){const h=c.array,d=c.usage,p=h.byteLength,g=r.createBuffer();r.bindBuffer(u,g),r.bufferData(u,h,d),c.onUploadCallback();let _;if(h instanceof Float32Array)_=r.FLOAT;else if(h instanceof Uint16Array)if(c.isFloat16BufferAttribute)if(t)_=r.HALF_FLOAT;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else _=r.UNSIGNED_SHORT;else if(h instanceof Int16Array)_=r.SHORT;else if(h instanceof Uint32Array)_=r.UNSIGNED_INT;else if(h instanceof Int32Array)_=r.INT;else if(h instanceof Int8Array)_=r.BYTE;else if(h instanceof Uint8Array)_=r.UNSIGNED_BYTE;else if(h instanceof Uint8ClampedArray)_=r.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+h);return{buffer:g,type:_,bytesPerElement:h.BYTES_PER_ELEMENT,version:c.version,size:p}}function s(c,u,h){const d=u.array,p=u._updateRange,g=u.updateRanges;if(r.bindBuffer(h,c),p.count===-1&&g.length===0&&r.bufferSubData(h,0,d),g.length!==0){for(let _=0,f=g.length;_<f;_++){const m=g[_];t?r.bufferSubData(h,m.start*d.BYTES_PER_ELEMENT,d,m.start,m.count):r.bufferSubData(h,m.start*d.BYTES_PER_ELEMENT,d.subarray(m.start,m.start+m.count))}u.clearUpdateRanges()}p.count!==-1&&(t?r.bufferSubData(h,p.offset*d.BYTES_PER_ELEMENT,d,p.offset,p.count):r.bufferSubData(h,p.offset*d.BYTES_PER_ELEMENT,d.subarray(p.offset,p.offset+p.count)),p.count=-1),u.onUploadCallback()}function a(c){return c.isInterleavedBufferAttribute&&(c=c.data),n.get(c)}function o(c){c.isInterleavedBufferAttribute&&(c=c.data);const u=n.get(c);u&&(r.deleteBuffer(u.buffer),n.delete(c))}function l(c,u){if(c.isGLBufferAttribute){const d=n.get(c);(!d||d.version<c.version)&&n.set(c,{buffer:c.buffer,type:c.type,bytesPerElement:c.elementSize,version:c.version});return}c.isInterleavedBufferAttribute&&(c=c.data);const h=n.get(c);if(h===void 0)n.set(c,i(c,u));else if(h.version<c.version){if(h.size!==c.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");s(h.buffer,c,u),h.version=c.version}}return{get:a,remove:o,update:l}}class Ia extends In{constructor(e=1,t=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:i};const s=e/2,a=t/2,o=Math.floor(n),l=Math.floor(i),c=o+1,u=l+1,h=e/o,d=t/l,p=[],g=[],_=[],f=[];for(let m=0;m<u;m++){const y=m*d-a;for(let v=0;v<c;v++){const E=v*h-s;g.push(E,-y,0),_.push(0,0,1),f.push(v/o),f.push(1-m/l)}}for(let m=0;m<l;m++)for(let y=0;y<o;y++){const v=y+c*m,E=y+c*(m+1),C=y+1+c*(m+1),A=y+1+c*m;p.push(v,E,A),p.push(E,C,A)}this.setIndex(p),this.setAttribute("position",new hn(g,3)),this.setAttribute("normal",new hn(_,3)),this.setAttribute("uv",new hn(f,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ia(e.width,e.height,e.widthSegments,e.heightSegments)}}var bp=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Tp=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,Ap=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,wp=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Rp=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Cp=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Lp=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,Pp=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Ip=`#ifdef USE_BATCHING
	attribute float batchId;
	uniform highp sampler2D batchingTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,Dp=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( batchId );
#endif`,Np=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Up=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Fp=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,Op=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,Bp=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,kp=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,zp=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Hp=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Gp=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Vp=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Wp=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Xp=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,qp=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,jp=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
float luminance( const in vec3 rgb ) {
	const vec3 weights = vec3( 0.2126729, 0.7151522, 0.0721750 );
	return dot( weights, rgb );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,Yp=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,Kp=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,$p=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Zp=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Jp=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Qp=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,em="gl_FragColor = linearToOutputTexel( gl_FragColor );",tm=`
const mat3 LINEAR_SRGB_TO_LINEAR_DISPLAY_P3 = mat3(
	vec3( 0.8224621, 0.177538, 0.0 ),
	vec3( 0.0331941, 0.9668058, 0.0 ),
	vec3( 0.0170827, 0.0723974, 0.9105199 )
);
const mat3 LINEAR_DISPLAY_P3_TO_LINEAR_SRGB = mat3(
	vec3( 1.2249401, - 0.2249404, 0.0 ),
	vec3( - 0.0420569, 1.0420571, 0.0 ),
	vec3( - 0.0196376, - 0.0786361, 1.0982735 )
);
vec4 LinearSRGBToLinearDisplayP3( in vec4 value ) {
	return vec4( value.rgb * LINEAR_SRGB_TO_LINEAR_DISPLAY_P3, value.a );
}
vec4 LinearDisplayP3ToLinearSRGB( in vec4 value ) {
	return vec4( value.rgb * LINEAR_DISPLAY_P3_TO_LINEAR_SRGB, value.a );
}
vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}
vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return sRGBTransferOETF( value );
}`,nm=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,im=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,rm=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,sm=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,am=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,om=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,lm=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,cm=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,um=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,hm=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,dm=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,fm=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,pm=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,mm=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,gm=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	#if defined ( LEGACY_LIGHTS )
		if ( cutoffDistance > 0.0 && decayExponent > 0.0 ) {
			return pow( saturate( - lightDistance / cutoffDistance + 1.0 ), decayExponent );
		}
		return 1.0;
	#else
		float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
		if ( cutoffDistance > 0.0 ) {
			distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
		}
		return distanceFalloff;
	#endif
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,_m=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,vm=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,xm=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Mm=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,ym=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Sm=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,Em=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,bm=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,Tm=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,Am=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,wm=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Rm=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Cm=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,Lm=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,Pm=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Im=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Dm=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,Nm=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Um=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Fm=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Om=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[MORPHTARGETS_COUNT];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Bm=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,km=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		objectNormal += morphNormal0 * morphTargetInfluences[ 0 ];
		objectNormal += morphNormal1 * morphTargetInfluences[ 1 ];
		objectNormal += morphNormal2 * morphTargetInfluences[ 2 ];
		objectNormal += morphNormal3 * morphTargetInfluences[ 3 ];
	#endif
#endif`,zm=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
	#endif
	#ifdef MORPHTARGETS_TEXTURE
		#ifndef USE_INSTANCING_MORPH
			uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
		#endif
		uniform sampler2DArray morphTargetsTexture;
		uniform ivec2 morphTargetsTextureSize;
		vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
			int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
			int y = texelIndex / morphTargetsTextureSize.x;
			int x = texelIndex - y * morphTargetsTextureSize.x;
			ivec3 morphUV = ivec3( x, y, morphTargetIndex );
			return texelFetch( morphTargetsTexture, morphUV, 0 );
		}
	#else
		#ifndef USE_MORPHNORMALS
			uniform float morphTargetInfluences[ 8 ];
		#else
			uniform float morphTargetInfluences[ 4 ];
		#endif
	#endif
#endif`,Hm=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		transformed += morphTarget0 * morphTargetInfluences[ 0 ];
		transformed += morphTarget1 * morphTargetInfluences[ 1 ];
		transformed += morphTarget2 * morphTargetInfluences[ 2 ];
		transformed += morphTarget3 * morphTargetInfluences[ 3 ];
		#ifndef USE_MORPHNORMALS
			transformed += morphTarget4 * morphTargetInfluences[ 4 ];
			transformed += morphTarget5 * morphTargetInfluences[ 5 ];
			transformed += morphTarget6 * morphTargetInfluences[ 6 ];
			transformed += morphTarget7 * morphTargetInfluences[ 7 ];
		#endif
	#endif
#endif`,Gm=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,Vm=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,Wm=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Xm=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,qm=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,jm=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,Ym=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Km=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,$m=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Zm=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Jm=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Qm=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;
const vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256., 256. );
const vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );
const float ShiftRight8 = 1. / 256.;
vec4 packDepthToRGBA( const in float v ) {
	vec4 r = vec4( fract( v * PackFactors ), v );
	r.yzw -= r.xyz * ShiftRight8;	return r * PackUpscale;
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors );
}
vec2 packDepthToRG( in highp float v ) {
	return packDepthToRGBA( v ).yx;
}
float unpackRGToDepth( const in highp vec2 v ) {
	return unpackRGBAToDepth( vec4( v.xy, 0.0, 0.0 ) );
}
vec4 pack2HalfToRGBA( vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,eg=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,tg=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,ng=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,ig=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,rg=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,sg=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,ag=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return shadow;
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
		vec3 lightToPosition = shadowCoord.xyz;
		float dp = ( length( lightToPosition ) - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );		dp += shadowBias;
		vec3 bd3D = normalize( lightToPosition );
		#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
			vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
			return (
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
			) * ( 1.0 / 9.0 );
		#else
			return texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
		#endif
	}
#endif`,og=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,lg=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,cg=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,ug=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,hg=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,dg=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,fg=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,pg=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,mg=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,gg=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,_g=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 OptimizedCineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	float startCompression = 0.8 - 0.04;
	float desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min(color.r, min(color.g, color.b));
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max(color.r, max(color.g, color.b));
	if (peak < startCompression) return color;
	float d = 1. - startCompression;
	float newPeak = 1. - d * d / (peak + d - startCompression);
	color *= newPeak / peak;
	float g = 1. - 1. / (desaturation * (peak - newPeak) + 1.);
	return mix(color, vec3(1, 1, 1), g);
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,vg=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,xg=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
		vec3 refractedRayExit = position + transmissionRay;
		vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
		vec2 refractionCoords = ndcPos.xy / ndcPos.w;
		refractionCoords += 1.0;
		refractionCoords /= 2.0;
		vec4 transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
		vec3 transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,Mg=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,yg=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Sg=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,Eg=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const bg=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Tg=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Ag=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,wg=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Rg=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Cg=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Lg=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,Pg=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#endif
}`,Ig=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,Dg=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,Ng=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Ug=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Fg=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Og=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Bg=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,kg=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,zg=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Hg=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Gg=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,Vg=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Wg=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,Xg=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,qg=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,jg=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Yg=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,Kg=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,$g=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Zg=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Jg=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,Qg=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,e_=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,t_=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,n_=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec2 scale;
	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,i_=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,rt={alphahash_fragment:bp,alphahash_pars_fragment:Tp,alphamap_fragment:Ap,alphamap_pars_fragment:wp,alphatest_fragment:Rp,alphatest_pars_fragment:Cp,aomap_fragment:Lp,aomap_pars_fragment:Pp,batching_pars_vertex:Ip,batching_vertex:Dp,begin_vertex:Np,beginnormal_vertex:Up,bsdfs:Fp,iridescence_fragment:Op,bumpmap_pars_fragment:Bp,clipping_planes_fragment:kp,clipping_planes_pars_fragment:zp,clipping_planes_pars_vertex:Hp,clipping_planes_vertex:Gp,color_fragment:Vp,color_pars_fragment:Wp,color_pars_vertex:Xp,color_vertex:qp,common:jp,cube_uv_reflection_fragment:Yp,defaultnormal_vertex:Kp,displacementmap_pars_vertex:$p,displacementmap_vertex:Zp,emissivemap_fragment:Jp,emissivemap_pars_fragment:Qp,colorspace_fragment:em,colorspace_pars_fragment:tm,envmap_fragment:nm,envmap_common_pars_fragment:im,envmap_pars_fragment:rm,envmap_pars_vertex:sm,envmap_physical_pars_fragment:_m,envmap_vertex:am,fog_vertex:om,fog_pars_vertex:lm,fog_fragment:cm,fog_pars_fragment:um,gradientmap_pars_fragment:hm,lightmap_fragment:dm,lightmap_pars_fragment:fm,lights_lambert_fragment:pm,lights_lambert_pars_fragment:mm,lights_pars_begin:gm,lights_toon_fragment:vm,lights_toon_pars_fragment:xm,lights_phong_fragment:Mm,lights_phong_pars_fragment:ym,lights_physical_fragment:Sm,lights_physical_pars_fragment:Em,lights_fragment_begin:bm,lights_fragment_maps:Tm,lights_fragment_end:Am,logdepthbuf_fragment:wm,logdepthbuf_pars_fragment:Rm,logdepthbuf_pars_vertex:Cm,logdepthbuf_vertex:Lm,map_fragment:Pm,map_pars_fragment:Im,map_particle_fragment:Dm,map_particle_pars_fragment:Nm,metalnessmap_fragment:Um,metalnessmap_pars_fragment:Fm,morphinstance_vertex:Om,morphcolor_vertex:Bm,morphnormal_vertex:km,morphtarget_pars_vertex:zm,morphtarget_vertex:Hm,normal_fragment_begin:Gm,normal_fragment_maps:Vm,normal_pars_fragment:Wm,normal_pars_vertex:Xm,normal_vertex:qm,normalmap_pars_fragment:jm,clearcoat_normal_fragment_begin:Ym,clearcoat_normal_fragment_maps:Km,clearcoat_pars_fragment:$m,iridescence_pars_fragment:Zm,opaque_fragment:Jm,packing:Qm,premultiplied_alpha_fragment:eg,project_vertex:tg,dithering_fragment:ng,dithering_pars_fragment:ig,roughnessmap_fragment:rg,roughnessmap_pars_fragment:sg,shadowmap_pars_fragment:ag,shadowmap_pars_vertex:og,shadowmap_vertex:lg,shadowmask_pars_fragment:cg,skinbase_vertex:ug,skinning_pars_vertex:hg,skinning_vertex:dg,skinnormal_vertex:fg,specularmap_fragment:pg,specularmap_pars_fragment:mg,tonemapping_fragment:gg,tonemapping_pars_fragment:_g,transmission_fragment:vg,transmission_pars_fragment:xg,uv_pars_fragment:Mg,uv_pars_vertex:yg,uv_vertex:Sg,worldpos_vertex:Eg,background_vert:bg,background_frag:Tg,backgroundCube_vert:Ag,backgroundCube_frag:wg,cube_vert:Rg,cube_frag:Cg,depth_vert:Lg,depth_frag:Pg,distanceRGBA_vert:Ig,distanceRGBA_frag:Dg,equirect_vert:Ng,equirect_frag:Ug,linedashed_vert:Fg,linedashed_frag:Og,meshbasic_vert:Bg,meshbasic_frag:kg,meshlambert_vert:zg,meshlambert_frag:Hg,meshmatcap_vert:Gg,meshmatcap_frag:Vg,meshnormal_vert:Wg,meshnormal_frag:Xg,meshphong_vert:qg,meshphong_frag:jg,meshphysical_vert:Yg,meshphysical_frag:Kg,meshtoon_vert:$g,meshtoon_frag:Zg,points_vert:Jg,points_frag:Qg,shadow_vert:e_,shadow_frag:t_,sprite_vert:n_,sprite_frag:i_},_e={common:{diffuse:{value:new Ye(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new st},alphaMap:{value:null},alphaMapTransform:{value:new st},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new st}},envmap:{envMap:{value:null},envMapRotation:{value:new st},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new st}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new st}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new st},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new st},normalScale:{value:new Se(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new st},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new st}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new st}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new st}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ye(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Ye(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new st},alphaTest:{value:0},uvTransform:{value:new st}},sprite:{diffuse:{value:new Ye(16777215)},opacity:{value:1},center:{value:new Se(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new st},alphaMap:{value:null},alphaMapTransform:{value:new st},alphaTest:{value:0}}},ri={basic:{uniforms:Rn([_e.common,_e.specularmap,_e.envmap,_e.aomap,_e.lightmap,_e.fog]),vertexShader:rt.meshbasic_vert,fragmentShader:rt.meshbasic_frag},lambert:{uniforms:Rn([_e.common,_e.specularmap,_e.envmap,_e.aomap,_e.lightmap,_e.emissivemap,_e.bumpmap,_e.normalmap,_e.displacementmap,_e.fog,_e.lights,{emissive:{value:new Ye(0)}}]),vertexShader:rt.meshlambert_vert,fragmentShader:rt.meshlambert_frag},phong:{uniforms:Rn([_e.common,_e.specularmap,_e.envmap,_e.aomap,_e.lightmap,_e.emissivemap,_e.bumpmap,_e.normalmap,_e.displacementmap,_e.fog,_e.lights,{emissive:{value:new Ye(0)},specular:{value:new Ye(1118481)},shininess:{value:30}}]),vertexShader:rt.meshphong_vert,fragmentShader:rt.meshphong_frag},standard:{uniforms:Rn([_e.common,_e.envmap,_e.aomap,_e.lightmap,_e.emissivemap,_e.bumpmap,_e.normalmap,_e.displacementmap,_e.roughnessmap,_e.metalnessmap,_e.fog,_e.lights,{emissive:{value:new Ye(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:rt.meshphysical_vert,fragmentShader:rt.meshphysical_frag},toon:{uniforms:Rn([_e.common,_e.aomap,_e.lightmap,_e.emissivemap,_e.bumpmap,_e.normalmap,_e.displacementmap,_e.gradientmap,_e.fog,_e.lights,{emissive:{value:new Ye(0)}}]),vertexShader:rt.meshtoon_vert,fragmentShader:rt.meshtoon_frag},matcap:{uniforms:Rn([_e.common,_e.bumpmap,_e.normalmap,_e.displacementmap,_e.fog,{matcap:{value:null}}]),vertexShader:rt.meshmatcap_vert,fragmentShader:rt.meshmatcap_frag},points:{uniforms:Rn([_e.points,_e.fog]),vertexShader:rt.points_vert,fragmentShader:rt.points_frag},dashed:{uniforms:Rn([_e.common,_e.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:rt.linedashed_vert,fragmentShader:rt.linedashed_frag},depth:{uniforms:Rn([_e.common,_e.displacementmap]),vertexShader:rt.depth_vert,fragmentShader:rt.depth_frag},normal:{uniforms:Rn([_e.common,_e.bumpmap,_e.normalmap,_e.displacementmap,{opacity:{value:1}}]),vertexShader:rt.meshnormal_vert,fragmentShader:rt.meshnormal_frag},sprite:{uniforms:Rn([_e.sprite,_e.fog]),vertexShader:rt.sprite_vert,fragmentShader:rt.sprite_frag},background:{uniforms:{uvTransform:{value:new st},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:rt.background_vert,fragmentShader:rt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new st}},vertexShader:rt.backgroundCube_vert,fragmentShader:rt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:rt.cube_vert,fragmentShader:rt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:rt.equirect_vert,fragmentShader:rt.equirect_frag},distanceRGBA:{uniforms:Rn([_e.common,_e.displacementmap,{referencePosition:{value:new L},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:rt.distanceRGBA_vert,fragmentShader:rt.distanceRGBA_frag},shadow:{uniforms:Rn([_e.lights,_e.fog,{color:{value:new Ye(0)},opacity:{value:1}}]),vertexShader:rt.shadow_vert,fragmentShader:rt.shadow_frag}};ri.physical={uniforms:Rn([ri.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new st},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new st},clearcoatNormalScale:{value:new Se(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new st},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new st},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new st},sheen:{value:0},sheenColor:{value:new Ye(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new st},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new st},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new st},transmissionSamplerSize:{value:new Se},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new st},attenuationDistance:{value:0},attenuationColor:{value:new Ye(0)},specularColor:{value:new Ye(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new st},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new st},anisotropyVector:{value:new Se},anisotropyMap:{value:null},anisotropyMapTransform:{value:new st}}]),vertexShader:rt.meshphysical_vert,fragmentShader:rt.meshphysical_frag};const ca={r:0,b:0,g:0},cr=new ci,r_=new Ve;function s_(r,e,t,n,i,s,a){const o=new Ye(0);let l=s===!0?0:1,c,u,h=null,d=0,p=null;function g(f,m){let y=!1,v=m.isScene===!0?m.background:null;v&&v.isTexture&&(v=(m.backgroundBlurriness>0?t:e).get(v)),v===null?_(o,l):v&&v.isColor&&(_(v,1),y=!0);const E=r.xr.getEnvironmentBlendMode();E==="additive"?n.buffers.color.setClear(0,0,0,1,a):E==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,a),(r.autoClear||y)&&r.clear(r.autoClearColor,r.autoClearDepth,r.autoClearStencil),v&&(v.isCubeTexture||v.mapping===Ca)?(u===void 0&&(u=new Vt(new $n(1,1,1),new Li({name:"BackgroundCubeMaterial",uniforms:is(ri.backgroundCube.uniforms),vertexShader:ri.backgroundCube.vertexShader,fragmentShader:ri.backgroundCube.fragmentShader,side:Pn,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(C,A,b){this.matrixWorld.copyPosition(b.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(u)),cr.copy(m.backgroundRotation),cr.x*=-1,cr.y*=-1,cr.z*=-1,v.isCubeTexture&&v.isRenderTargetTexture===!1&&(cr.y*=-1,cr.z*=-1),u.material.uniforms.envMap.value=v,u.material.uniforms.flipEnvMap.value=v.isCubeTexture&&v.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=m.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=m.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(r_.makeRotationFromEuler(cr)),u.material.toneMapped=bt.getTransfer(v.colorSpace)!==Ht,(h!==v||d!==v.version||p!==r.toneMapping)&&(u.material.needsUpdate=!0,h=v,d=v.version,p=r.toneMapping),u.layers.enableAll(),f.unshift(u,u.geometry,u.material,0,0,null)):v&&v.isTexture&&(c===void 0&&(c=new Vt(new Ia(2,2),new Li({name:"BackgroundMaterial",uniforms:is(ri.background.uniforms),vertexShader:ri.background.vertexShader,fragmentShader:ri.background.fragmentShader,side:Ci,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(c)),c.material.uniforms.t2D.value=v,c.material.uniforms.backgroundIntensity.value=m.backgroundIntensity,c.material.toneMapped=bt.getTransfer(v.colorSpace)!==Ht,v.matrixAutoUpdate===!0&&v.updateMatrix(),c.material.uniforms.uvTransform.value.copy(v.matrix),(h!==v||d!==v.version||p!==r.toneMapping)&&(c.material.needsUpdate=!0,h=v,d=v.version,p=r.toneMapping),c.layers.enableAll(),f.unshift(c,c.geometry,c.material,0,0,null))}function _(f,m){f.getRGB(ca,gh(r)),n.buffers.color.setClear(ca.r,ca.g,ca.b,m,a)}return{getClearColor:function(){return o},setClearColor:function(f,m=1){o.set(f),l=m,_(o,l)},getClearAlpha:function(){return l},setClearAlpha:function(f){l=f,_(o,l)},render:g}}function a_(r,e,t,n){const i=r.getParameter(r.MAX_VERTEX_ATTRIBS),s=n.isWebGL2?null:e.get("OES_vertex_array_object"),a=n.isWebGL2||s!==null,o={},l=f(null);let c=l,u=!1;function h(P,O,k,j,K){let Y=!1;if(a){const ae=_(j,k,O);c!==ae&&(c=ae,p(c.object)),Y=m(P,j,k,K),Y&&y(P,j,k,K)}else{const ae=O.wireframe===!0;(c.geometry!==j.id||c.program!==k.id||c.wireframe!==ae)&&(c.geometry=j.id,c.program=k.id,c.wireframe=ae,Y=!0)}K!==null&&t.update(K,r.ELEMENT_ARRAY_BUFFER),(Y||u)&&(u=!1,N(P,O,k,j),K!==null&&r.bindBuffer(r.ELEMENT_ARRAY_BUFFER,t.get(K).buffer))}function d(){return n.isWebGL2?r.createVertexArray():s.createVertexArrayOES()}function p(P){return n.isWebGL2?r.bindVertexArray(P):s.bindVertexArrayOES(P)}function g(P){return n.isWebGL2?r.deleteVertexArray(P):s.deleteVertexArrayOES(P)}function _(P,O,k){const j=k.wireframe===!0;let K=o[P.id];K===void 0&&(K={},o[P.id]=K);let Y=K[O.id];Y===void 0&&(Y={},K[O.id]=Y);let ae=Y[j];return ae===void 0&&(ae=f(d()),Y[j]=ae),ae}function f(P){const O=[],k=[],j=[];for(let K=0;K<i;K++)O[K]=0,k[K]=0,j[K]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:O,enabledAttributes:k,attributeDivisors:j,object:P,attributes:{},index:null}}function m(P,O,k,j){const K=c.attributes,Y=O.attributes;let ae=0;const ce=k.getAttributes();for(const Me in ce)if(ce[Me].location>=0){const V=K[Me];let se=Y[Me];if(se===void 0&&(Me==="instanceMatrix"&&P.instanceMatrix&&(se=P.instanceMatrix),Me==="instanceColor"&&P.instanceColor&&(se=P.instanceColor)),V===void 0||V.attribute!==se||se&&V.data!==se.data)return!0;ae++}return c.attributesNum!==ae||c.index!==j}function y(P,O,k,j){const K={},Y=O.attributes;let ae=0;const ce=k.getAttributes();for(const Me in ce)if(ce[Me].location>=0){let V=Y[Me];V===void 0&&(Me==="instanceMatrix"&&P.instanceMatrix&&(V=P.instanceMatrix),Me==="instanceColor"&&P.instanceColor&&(V=P.instanceColor));const se={};se.attribute=V,V&&V.data&&(se.data=V.data),K[Me]=se,ae++}c.attributes=K,c.attributesNum=ae,c.index=j}function v(){const P=c.newAttributes;for(let O=0,k=P.length;O<k;O++)P[O]=0}function E(P){C(P,0)}function C(P,O){const k=c.newAttributes,j=c.enabledAttributes,K=c.attributeDivisors;k[P]=1,j[P]===0&&(r.enableVertexAttribArray(P),j[P]=1),K[P]!==O&&((n.isWebGL2?r:e.get("ANGLE_instanced_arrays"))[n.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](P,O),K[P]=O)}function A(){const P=c.newAttributes,O=c.enabledAttributes;for(let k=0,j=O.length;k<j;k++)O[k]!==P[k]&&(r.disableVertexAttribArray(k),O[k]=0)}function b(P,O,k,j,K,Y,ae){ae===!0?r.vertexAttribIPointer(P,O,k,K,Y):r.vertexAttribPointer(P,O,k,j,K,Y)}function N(P,O,k,j){if(n.isWebGL2===!1&&(P.isInstancedMesh||j.isInstancedBufferGeometry)&&e.get("ANGLE_instanced_arrays")===null)return;v();const K=j.attributes,Y=k.getAttributes(),ae=O.defaultAttributeValues;for(const ce in Y){const Me=Y[ce];if(Me.location>=0){let Be=K[ce];if(Be===void 0&&(ce==="instanceMatrix"&&P.instanceMatrix&&(Be=P.instanceMatrix),ce==="instanceColor"&&P.instanceColor&&(Be=P.instanceColor)),Be!==void 0){const V=Be.normalized,se=Be.itemSize,ye=t.get(Be);if(ye===void 0)continue;const ke=ye.buffer,Ae=ye.type,Ee=ye.bytesPerElement,pt=n.isWebGL2===!0&&(Ae===r.INT||Ae===r.UNSIGNED_INT||Be.gpuType===Ku);if(Be.isInterleavedBufferAttribute){const We=Be.data,U=We.stride,Pt=Be.offset;if(We.isInstancedInterleavedBuffer){for(let Ie=0;Ie<Me.locationSize;Ie++)C(Me.location+Ie,We.meshPerAttribute);P.isInstancedMesh!==!0&&j._maxInstanceCount===void 0&&(j._maxInstanceCount=We.meshPerAttribute*We.count)}else for(let Ie=0;Ie<Me.locationSize;Ie++)E(Me.location+Ie);r.bindBuffer(r.ARRAY_BUFFER,ke);for(let Ie=0;Ie<Me.locationSize;Ie++)b(Me.location+Ie,se/Me.locationSize,Ae,V,U*Ee,(Pt+se/Me.locationSize*Ie)*Ee,pt)}else{if(Be.isInstancedBufferAttribute){for(let We=0;We<Me.locationSize;We++)C(Me.location+We,Be.meshPerAttribute);P.isInstancedMesh!==!0&&j._maxInstanceCount===void 0&&(j._maxInstanceCount=Be.meshPerAttribute*Be.count)}else for(let We=0;We<Me.locationSize;We++)E(Me.location+We);r.bindBuffer(r.ARRAY_BUFFER,ke);for(let We=0;We<Me.locationSize;We++)b(Me.location+We,se/Me.locationSize,Ae,V,se*Ee,se/Me.locationSize*We*Ee,pt)}}else if(ae!==void 0){const V=ae[ce];if(V!==void 0)switch(V.length){case 2:r.vertexAttrib2fv(Me.location,V);break;case 3:r.vertexAttrib3fv(Me.location,V);break;case 4:r.vertexAttrib4fv(Me.location,V);break;default:r.vertexAttrib1fv(Me.location,V)}}}}A()}function B(){z();for(const P in o){const O=o[P];for(const k in O){const j=O[k];for(const K in j)g(j[K].object),delete j[K];delete O[k]}delete o[P]}}function x(P){if(o[P.id]===void 0)return;const O=o[P.id];for(const k in O){const j=O[k];for(const K in j)g(j[K].object),delete j[K];delete O[k]}delete o[P.id]}function T(P){for(const O in o){const k=o[O];if(k[P.id]===void 0)continue;const j=k[P.id];for(const K in j)g(j[K].object),delete j[K];delete k[P.id]}}function z(){$(),u=!0,c!==l&&(c=l,p(c.object))}function $(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:h,reset:z,resetDefaultState:$,dispose:B,releaseStatesOfGeometry:x,releaseStatesOfProgram:T,initAttributes:v,enableAttribute:E,disableUnusedAttributes:A}}function o_(r,e,t,n){const i=n.isWebGL2;let s;function a(u){s=u}function o(u,h){r.drawArrays(s,u,h),t.update(h,s,1)}function l(u,h,d){if(d===0)return;let p,g;if(i)p=r,g="drawArraysInstanced";else if(p=e.get("ANGLE_instanced_arrays"),g="drawArraysInstancedANGLE",p===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}p[g](s,u,h,d),t.update(h,s,d)}function c(u,h,d){if(d===0)return;const p=e.get("WEBGL_multi_draw");if(p===null)for(let g=0;g<d;g++)this.render(u[g],h[g]);else{p.multiDrawArraysWEBGL(s,u,0,h,0,d);let g=0;for(let _=0;_<d;_++)g+=h[_];t.update(g,s,1)}}this.setMode=a,this.render=o,this.renderInstances=l,this.renderMultiDraw=c}function l_(r,e,t){let n;function i(){if(n!==void 0)return n;if(e.has("EXT_texture_filter_anisotropic")===!0){const b=e.get("EXT_texture_filter_anisotropic");n=r.getParameter(b.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else n=0;return n}function s(b){if(b==="highp"){if(r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.HIGH_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.HIGH_FLOAT).precision>0)return"highp";b="mediump"}return b==="mediump"&&r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.MEDIUM_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}const a=typeof WebGL2RenderingContext<"u"&&r.constructor.name==="WebGL2RenderingContext";let o=t.precision!==void 0?t.precision:"highp";const l=s(o);l!==o&&(console.warn("THREE.WebGLRenderer:",o,"not supported, using",l,"instead."),o=l);const c=a||e.has("WEBGL_draw_buffers"),u=t.logarithmicDepthBuffer===!0,h=r.getParameter(r.MAX_TEXTURE_IMAGE_UNITS),d=r.getParameter(r.MAX_VERTEX_TEXTURE_IMAGE_UNITS),p=r.getParameter(r.MAX_TEXTURE_SIZE),g=r.getParameter(r.MAX_CUBE_MAP_TEXTURE_SIZE),_=r.getParameter(r.MAX_VERTEX_ATTRIBS),f=r.getParameter(r.MAX_VERTEX_UNIFORM_VECTORS),m=r.getParameter(r.MAX_VARYING_VECTORS),y=r.getParameter(r.MAX_FRAGMENT_UNIFORM_VECTORS),v=d>0,E=a||e.has("OES_texture_float"),C=v&&E,A=a?r.getParameter(r.MAX_SAMPLES):0;return{isWebGL2:a,drawBuffers:c,getMaxAnisotropy:i,getMaxPrecision:s,precision:o,logarithmicDepthBuffer:u,maxTextures:h,maxVertexTextures:d,maxTextureSize:p,maxCubemapSize:g,maxAttributes:_,maxVertexUniforms:f,maxVaryings:m,maxFragmentUniforms:y,vertexTextures:v,floatFragmentTextures:E,floatVertexTextures:C,maxSamples:A}}function c_(r){const e=this;let t=null,n=0,i=!1,s=!1;const a=new fr,o=new st,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(h,d){const p=h.length!==0||d||n!==0||i;return i=d,n=h.length,p},this.beginShadows=function(){s=!0,u(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(h,d){t=u(h,d,0)},this.setState=function(h,d,p){const g=h.clippingPlanes,_=h.clipIntersection,f=h.clipShadows,m=r.get(h);if(!i||g===null||g.length===0||s&&!f)s?u(null):c();else{const y=s?0:n,v=y*4;let E=m.clippingState||null;l.value=E,E=u(g,d,v,p);for(let C=0;C!==v;++C)E[C]=t[C];m.clippingState=E,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=y}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function u(h,d,p,g){const _=h!==null?h.length:0;let f=null;if(_!==0){if(f=l.value,g!==!0||f===null){const m=p+_*4,y=d.matrixWorldInverse;o.getNormalMatrix(y),(f===null||f.length<m)&&(f=new Float32Array(m));for(let v=0,E=p;v!==_;++v,E+=4)a.copy(h[v]).applyMatrix4(y,o),a.normal.toArray(f,E),f[E+3]=a.constant}l.value=f,l.needsUpdate=!0}return e.numPlanes=_,e.numIntersection=0,f}}function u_(r){let e=new WeakMap;function t(a,o){return o===Ho?a.mapping=Zr:o===Go&&(a.mapping=Jr),a}function n(a){if(a&&a.isTexture){const o=a.mapping;if(o===Ho||o===Go)if(e.has(a)){const l=e.get(a).texture;return t(l,a.mapping)}else{const l=a.image;if(l&&l.height>0){const c=new Mp(l.height);return c.fromEquirectangularTexture(r,a),e.set(a,c),a.addEventListener("dispose",i),t(c.texture,a.mapping)}else return null}}return a}function i(a){const o=a.target;o.removeEventListener("dispose",i);const l=e.get(o);l!==void 0&&(e.delete(o),l.dispose())}function s(){e=new WeakMap}return{get:n,dispose:s}}class hl extends cl{constructor(e=-1,t=1,n=1,i=-1,s=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=i,this.near=s,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,i,s,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2;let s=n-e,a=n+e,o=i+t,l=i-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,a=s+c*this.view.width,o-=u*this.view.offsetY,l=o-u*this.view.height}this.projectionMatrix.makeOrthographic(s,a,o,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const Wr=4,Xc=[.125,.215,.35,.446,.526,.582],gr=20,vo=new hl,qc=new Ye;let xo=null,Mo=0,yo=0;const pr=(1+Math.sqrt(5))/2,zr=1/pr,jc=[new L(1,1,1),new L(-1,1,1),new L(1,1,-1),new L(-1,1,-1),new L(0,pr,zr),new L(0,pr,-zr),new L(zr,0,pr),new L(-zr,0,pr),new L(pr,zr,0),new L(-pr,zr,0)];class Yc{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,i=100){xo=this._renderer.getRenderTarget(),Mo=this._renderer.getActiveCubeFace(),yo=this._renderer.getActiveMipmapLevel(),this._setSize(256);const s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(e,n,i,s),t>0&&this._blur(s,0,0,t),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Zc(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=$c(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(xo,Mo,yo),e.scissorTest=!1,ua(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Zr||e.mapping===Jr?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),xo=this._renderer.getRenderTarget(),Mo=this._renderer.getActiveCubeFace(),yo=this._renderer.getActiveMipmapLevel();const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:Sn,minFilter:Sn,generateMipmaps:!1,type:Ns,format:Xn,colorSpace:mn,depthBuffer:!1},i=Kc(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Kc(e,t,n);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=h_(s)),this._blurMaterial=d_(s,e,t)}return i}_compileMaterial(e){const t=new Vt(this._lodPlanes[0],e);this._renderer.compile(t,vo)}_sceneToCubeUV(e,t,n,i){const o=new Ln(90,1,t,n),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],u=this._renderer,h=u.autoClear,d=u.toneMapping;u.getClearColor(qc),u.toneMapping=Zi,u.autoClear=!1;const p=new _r({name:"PMREM.Background",side:Pn,depthWrite:!1,depthTest:!1}),g=new Vt(new $n,p);let _=!1;const f=e.background;f?f.isColor&&(p.color.copy(f),e.background=null,_=!0):(p.color.copy(qc),_=!0);for(let m=0;m<6;m++){const y=m%3;y===0?(o.up.set(0,l[m],0),o.lookAt(c[m],0,0)):y===1?(o.up.set(0,0,l[m]),o.lookAt(0,c[m],0)):(o.up.set(0,l[m],0),o.lookAt(0,0,c[m]));const v=this._cubeSize;ua(i,y*v,m>2?v:0,v,v),u.setRenderTarget(i),_&&u.render(g,o),u.render(e,o)}g.geometry.dispose(),g.material.dispose(),u.toneMapping=d,u.autoClear=h,e.background=f}_textureToCubeUV(e,t){const n=this._renderer,i=e.mapping===Zr||e.mapping===Jr;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=Zc()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=$c());const s=i?this._cubemapMaterial:this._equirectMaterial,a=new Vt(this._lodPlanes[0],s),o=s.uniforms;o.envMap.value=e;const l=this._cubeSize;ua(t,0,0,3*l,2*l),n.setRenderTarget(t),n.render(a,vo)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;for(let i=1;i<this._lodPlanes.length;i++){const s=Math.sqrt(this._sigmas[i]*this._sigmas[i]-this._sigmas[i-1]*this._sigmas[i-1]),a=jc[(i-1)%jc.length];this._blur(e,i-1,i,s,a)}t.autoClear=n}_blur(e,t,n,i,s){const a=this._pingPongRenderTarget;this._halfBlur(e,a,t,n,i,"latitudinal",s),this._halfBlur(a,e,n,n,i,"longitudinal",s)}_halfBlur(e,t,n,i,s,a,o){const l=this._renderer,c=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,h=new Vt(this._lodPlanes[i],c),d=c.uniforms,p=this._sizeLods[n]-1,g=isFinite(s)?Math.PI/(2*p):2*Math.PI/(2*gr-1),_=s/g,f=isFinite(s)?1+Math.floor(u*_):gr;f>gr&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${f} samples when the maximum is set to ${gr}`);const m=[];let y=0;for(let b=0;b<gr;++b){const N=b/_,B=Math.exp(-N*N/2);m.push(B),b===0?y+=B:b<f&&(y+=2*B)}for(let b=0;b<m.length;b++)m[b]=m[b]/y;d.envMap.value=e.texture,d.samples.value=f,d.weights.value=m,d.latitudinal.value=a==="latitudinal",o&&(d.poleAxis.value=o);const{_lodMax:v}=this;d.dTheta.value=g,d.mipInt.value=v-n;const E=this._sizeLods[i],C=3*E*(i>v-Wr?i-v+Wr:0),A=4*(this._cubeSize-E);ua(t,C,A,3*E,2*E),l.setRenderTarget(t),l.render(h,vo)}}function h_(r){const e=[],t=[],n=[];let i=r;const s=r-Wr+1+Xc.length;for(let a=0;a<s;a++){const o=Math.pow(2,i);t.push(o);let l=1/o;a>r-Wr?l=Xc[a-r+Wr-1]:a===0&&(l=0),n.push(l);const c=1/(o-2),u=-c,h=1+c,d=[u,u,h,u,h,h,u,u,h,h,u,h],p=6,g=6,_=3,f=2,m=1,y=new Float32Array(_*g*p),v=new Float32Array(f*g*p),E=new Float32Array(m*g*p);for(let A=0;A<p;A++){const b=A%3*2/3-1,N=A>2?0:-1,B=[b,N,0,b+2/3,N,0,b+2/3,N+1,0,b,N,0,b+2/3,N+1,0,b,N+1,0];y.set(B,_*g*A),v.set(d,f*g*A);const x=[A,A,A,A,A,A];E.set(x,m*g*A)}const C=new In;C.setAttribute("position",new Qt(y,_)),C.setAttribute("uv",new Qt(v,f)),C.setAttribute("faceIndex",new Qt(E,m)),e.push(C),i>Wr&&i--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function Kc(r,e,t){const n=new Mr(r,e,t);return n.texture.mapping=Ca,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function ua(r,e,t,n,i){r.viewport.set(e,t,n,i),r.scissor.set(e,t,n,i)}function d_(r,e,t){const n=new Float32Array(gr),i=new L(0,1,0);return new Li({name:"SphericalGaussianBlur",defines:{n:gr,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${r}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:i}},vertexShader:dl(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:$i,depthTest:!1,depthWrite:!1})}function $c(){return new Li({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:dl(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:$i,depthTest:!1,depthWrite:!1})}function Zc(){return new Li({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:dl(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:$i,depthTest:!1,depthWrite:!1})}function dl(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function f_(r){let e=new WeakMap,t=null;function n(o){if(o&&o.isTexture){const l=o.mapping,c=l===Ho||l===Go,u=l===Zr||l===Jr;if(c||u)if(o.isRenderTargetTexture&&o.needsPMREMUpdate===!0){o.needsPMREMUpdate=!1;let h=e.get(o);return t===null&&(t=new Yc(r)),h=c?t.fromEquirectangular(o,h):t.fromCubemap(o,h),e.set(o,h),h.texture}else{if(e.has(o))return e.get(o).texture;{const h=o.image;if(c&&h&&h.height>0||u&&h&&i(h)){t===null&&(t=new Yc(r));const d=c?t.fromEquirectangular(o):t.fromCubemap(o);return e.set(o,d),o.addEventListener("dispose",s),d.texture}else return null}}}return o}function i(o){let l=0;const c=6;for(let u=0;u<c;u++)o[u]!==void 0&&l++;return l===c}function s(o){const l=o.target;l.removeEventListener("dispose",s);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function a(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:a}}function p_(r){const e={};function t(n){if(e[n]!==void 0)return e[n];let i;switch(n){case"WEBGL_depth_texture":i=r.getExtension("WEBGL_depth_texture")||r.getExtension("MOZ_WEBGL_depth_texture")||r.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":i=r.getExtension("EXT_texture_filter_anisotropic")||r.getExtension("MOZ_EXT_texture_filter_anisotropic")||r.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":i=r.getExtension("WEBGL_compressed_texture_s3tc")||r.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||r.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":i=r.getExtension("WEBGL_compressed_texture_pvrtc")||r.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:i=r.getExtension(n)}return e[n]=i,i}return{has:function(n){return t(n)!==null},init:function(n){n.isWebGL2?(t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance")):(t("WEBGL_depth_texture"),t("OES_texture_float"),t("OES_texture_half_float"),t("OES_texture_half_float_linear"),t("OES_standard_derivatives"),t("OES_element_index_uint"),t("OES_vertex_array_object"),t("ANGLE_instanced_arrays")),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture")},get:function(n){const i=t(n);return i===null&&console.warn("THREE.WebGLRenderer: "+n+" extension not supported."),i}}}function m_(r,e,t,n){const i={},s=new WeakMap;function a(h){const d=h.target;d.index!==null&&e.remove(d.index);for(const g in d.attributes)e.remove(d.attributes[g]);for(const g in d.morphAttributes){const _=d.morphAttributes[g];for(let f=0,m=_.length;f<m;f++)e.remove(_[f])}d.removeEventListener("dispose",a),delete i[d.id];const p=s.get(d);p&&(e.remove(p),s.delete(d)),n.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,t.memory.geometries--}function o(h,d){return i[d.id]===!0||(d.addEventListener("dispose",a),i[d.id]=!0,t.memory.geometries++),d}function l(h){const d=h.attributes;for(const g in d)e.update(d[g],r.ARRAY_BUFFER);const p=h.morphAttributes;for(const g in p){const _=p[g];for(let f=0,m=_.length;f<m;f++)e.update(_[f],r.ARRAY_BUFFER)}}function c(h){const d=[],p=h.index,g=h.attributes.position;let _=0;if(p!==null){const y=p.array;_=p.version;for(let v=0,E=y.length;v<E;v+=3){const C=y[v+0],A=y[v+1],b=y[v+2];d.push(C,A,A,b,b,C)}}else if(g!==void 0){const y=g.array;_=g.version;for(let v=0,E=y.length/3-1;v<E;v+=3){const C=v+0,A=v+1,b=v+2;d.push(C,A,A,b,b,C)}}else return;const f=new(oh(d)?mh:ph)(d,1);f.version=_;const m=s.get(h);m&&e.remove(m),s.set(h,f)}function u(h){const d=s.get(h);if(d){const p=h.index;p!==null&&d.version<p.version&&c(h)}else c(h);return s.get(h)}return{get:o,update:l,getWireframeAttribute:u}}function g_(r,e,t,n){const i=n.isWebGL2;let s;function a(p){s=p}let o,l;function c(p){o=p.type,l=p.bytesPerElement}function u(p,g){r.drawElements(s,g,o,p*l),t.update(g,s,1)}function h(p,g,_){if(_===0)return;let f,m;if(i)f=r,m="drawElementsInstanced";else if(f=e.get("ANGLE_instanced_arrays"),m="drawElementsInstancedANGLE",f===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}f[m](s,g,o,p*l,_),t.update(g,s,_)}function d(p,g,_){if(_===0)return;const f=e.get("WEBGL_multi_draw");if(f===null)for(let m=0;m<_;m++)this.render(p[m]/l,g[m]);else{f.multiDrawElementsWEBGL(s,g,0,o,p,0,_);let m=0;for(let y=0;y<_;y++)m+=g[y];t.update(m,s,1)}}this.setMode=a,this.setIndex=c,this.render=u,this.renderInstances=h,this.renderMultiDraw=d}function __(r){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(s,a,o){switch(t.calls++,a){case r.TRIANGLES:t.triangles+=o*(s/3);break;case r.LINES:t.lines+=o*(s/2);break;case r.LINE_STRIP:t.lines+=o*(s-1);break;case r.LINE_LOOP:t.lines+=o*s;break;case r.POINTS:t.points+=o*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function i(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:i,update:n}}function v_(r,e){return r[0]-e[0]}function x_(r,e){return Math.abs(e[1])-Math.abs(r[1])}function M_(r,e,t){const n={},i=new Float32Array(8),s=new WeakMap,a=new Nt,o=[];for(let c=0;c<8;c++)o[c]=[c,0];function l(c,u,h){const d=c.morphTargetInfluences;if(e.isWebGL2===!0){const p=u.morphAttributes.position||u.morphAttributes.normal||u.morphAttributes.color,g=p!==void 0?p.length:0;let _=s.get(u);if(_===void 0||_.count!==g){let z=function(){x.dispose(),s.delete(u),u.removeEventListener("dispose",z)};_!==void 0&&_.texture.dispose();const f=u.morphAttributes.position!==void 0,m=u.morphAttributes.normal!==void 0,y=u.morphAttributes.color!==void 0,v=u.morphAttributes.position||[],E=u.morphAttributes.normal||[],C=u.morphAttributes.color||[];let A=0;f===!0&&(A=1),m===!0&&(A=2),y===!0&&(A=3);let b=u.attributes.position.count*A,N=1;b>e.maxTextureSize&&(N=Math.ceil(b/e.maxTextureSize),b=e.maxTextureSize);const B=new Float32Array(b*N*4*g),x=new hh(B,b,N,g);x.type=Jn,x.needsUpdate=!0;const T=A*4;for(let $=0;$<g;$++){const P=v[$],O=E[$],k=C[$],j=b*N*4*$;for(let K=0;K<P.count;K++){const Y=K*T;f===!0&&(a.fromBufferAttribute(P,K),B[j+Y+0]=a.x,B[j+Y+1]=a.y,B[j+Y+2]=a.z,B[j+Y+3]=0),m===!0&&(a.fromBufferAttribute(O,K),B[j+Y+4]=a.x,B[j+Y+5]=a.y,B[j+Y+6]=a.z,B[j+Y+7]=0),y===!0&&(a.fromBufferAttribute(k,K),B[j+Y+8]=a.x,B[j+Y+9]=a.y,B[j+Y+10]=a.z,B[j+Y+11]=k.itemSize===4?a.w:1)}}_={count:g,texture:x,size:new Se(b,N)},s.set(u,_),u.addEventListener("dispose",z)}if(c.isInstancedMesh===!0&&c.morphTexture!==null)h.getUniforms().setValue(r,"morphTexture",c.morphTexture,t);else{let f=0;for(let y=0;y<d.length;y++)f+=d[y];const m=u.morphTargetsRelative?1:1-f;h.getUniforms().setValue(r,"morphTargetBaseInfluence",m),h.getUniforms().setValue(r,"morphTargetInfluences",d)}h.getUniforms().setValue(r,"morphTargetsTexture",_.texture,t),h.getUniforms().setValue(r,"morphTargetsTextureSize",_.size)}else{const p=d===void 0?0:d.length;let g=n[u.id];if(g===void 0||g.length!==p){g=[];for(let v=0;v<p;v++)g[v]=[v,0];n[u.id]=g}for(let v=0;v<p;v++){const E=g[v];E[0]=v,E[1]=d[v]}g.sort(x_);for(let v=0;v<8;v++)v<p&&g[v][1]?(o[v][0]=g[v][0],o[v][1]=g[v][1]):(o[v][0]=Number.MAX_SAFE_INTEGER,o[v][1]=0);o.sort(v_);const _=u.morphAttributes.position,f=u.morphAttributes.normal;let m=0;for(let v=0;v<8;v++){const E=o[v],C=E[0],A=E[1];C!==Number.MAX_SAFE_INTEGER&&A?(_&&u.getAttribute("morphTarget"+v)!==_[C]&&u.setAttribute("morphTarget"+v,_[C]),f&&u.getAttribute("morphNormal"+v)!==f[C]&&u.setAttribute("morphNormal"+v,f[C]),i[v]=A,m+=A):(_&&u.hasAttribute("morphTarget"+v)===!0&&u.deleteAttribute("morphTarget"+v),f&&u.hasAttribute("morphNormal"+v)===!0&&u.deleteAttribute("morphNormal"+v),i[v]=0)}const y=u.morphTargetsRelative?1:1-m;h.getUniforms().setValue(r,"morphTargetBaseInfluence",y),h.getUniforms().setValue(r,"morphTargetInfluences",i)}}return{update:l}}function y_(r,e,t,n){let i=new WeakMap;function s(l){const c=n.render.frame,u=l.geometry,h=e.get(l,u);if(i.get(h)!==c&&(e.update(h),i.set(h,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",o)===!1&&l.addEventListener("dispose",o),i.get(l)!==c&&(t.update(l.instanceMatrix,r.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,r.ARRAY_BUFFER),i.set(l,c))),l.isSkinnedMesh){const d=l.skeleton;i.get(d)!==c&&(d.update(),i.set(d,c))}return h}function a(){i=new WeakMap}function o(l){const c=l.target;c.removeEventListener("dispose",o),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:s,dispose:a}}class xh extends un{constructor(e,t,n,i,s,a,o,l,c,u){if(u=u!==void 0?u:xr,u!==xr&&u!==es)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&u===xr&&(n=Yi),n===void 0&&u===es&&(n=vr),super(null,i,s,a,o,l,u,n,c),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=o!==void 0?o:cn,this.minFilter=l!==void 0?l:cn,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}const Mh=new un,yh=new xh(1,1);yh.compareFunction=sh;const Sh=new hh,Eh=new ip,bh=new _h,Jc=[],Qc=[],eu=new Float32Array(16),tu=new Float32Array(9),nu=new Float32Array(4);function ls(r,e,t){const n=r[0];if(n<=0||n>0)return r;const i=e*t;let s=Jc[i];if(s===void 0&&(s=new Float32Array(i),Jc[i]=s),e!==0){n.toArray(s,0);for(let a=1,o=0;a!==e;++a)o+=t,r[a].toArray(s,o)}return s}function en(r,e){if(r.length!==e.length)return!1;for(let t=0,n=r.length;t<n;t++)if(r[t]!==e[t])return!1;return!0}function tn(r,e){for(let t=0,n=e.length;t<n;t++)r[t]=e[t]}function Da(r,e){let t=Qc[e];t===void 0&&(t=new Int32Array(e),Qc[e]=t);for(let n=0;n!==e;++n)t[n]=r.allocateTextureUnit();return t}function S_(r,e){const t=this.cache;t[0]!==e&&(r.uniform1f(this.addr,e),t[0]=e)}function E_(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(en(t,e))return;r.uniform2fv(this.addr,e),tn(t,e)}}function b_(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(r.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(en(t,e))return;r.uniform3fv(this.addr,e),tn(t,e)}}function T_(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(en(t,e))return;r.uniform4fv(this.addr,e),tn(t,e)}}function A_(r,e){const t=this.cache,n=e.elements;if(n===void 0){if(en(t,e))return;r.uniformMatrix2fv(this.addr,!1,e),tn(t,e)}else{if(en(t,n))return;nu.set(n),r.uniformMatrix2fv(this.addr,!1,nu),tn(t,n)}}function w_(r,e){const t=this.cache,n=e.elements;if(n===void 0){if(en(t,e))return;r.uniformMatrix3fv(this.addr,!1,e),tn(t,e)}else{if(en(t,n))return;tu.set(n),r.uniformMatrix3fv(this.addr,!1,tu),tn(t,n)}}function R_(r,e){const t=this.cache,n=e.elements;if(n===void 0){if(en(t,e))return;r.uniformMatrix4fv(this.addr,!1,e),tn(t,e)}else{if(en(t,n))return;eu.set(n),r.uniformMatrix4fv(this.addr,!1,eu),tn(t,n)}}function C_(r,e){const t=this.cache;t[0]!==e&&(r.uniform1i(this.addr,e),t[0]=e)}function L_(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(en(t,e))return;r.uniform2iv(this.addr,e),tn(t,e)}}function P_(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(en(t,e))return;r.uniform3iv(this.addr,e),tn(t,e)}}function I_(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(en(t,e))return;r.uniform4iv(this.addr,e),tn(t,e)}}function D_(r,e){const t=this.cache;t[0]!==e&&(r.uniform1ui(this.addr,e),t[0]=e)}function N_(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(en(t,e))return;r.uniform2uiv(this.addr,e),tn(t,e)}}function U_(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(en(t,e))return;r.uniform3uiv(this.addr,e),tn(t,e)}}function F_(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(en(t,e))return;r.uniform4uiv(this.addr,e),tn(t,e)}}function O_(r,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i);const s=this.type===r.SAMPLER_2D_SHADOW?yh:Mh;t.setTexture2D(e||s,i)}function B_(r,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),t.setTexture3D(e||Eh,i)}function k_(r,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),t.setTextureCube(e||bh,i)}function z_(r,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),t.setTexture2DArray(e||Sh,i)}function H_(r){switch(r){case 5126:return S_;case 35664:return E_;case 35665:return b_;case 35666:return T_;case 35674:return A_;case 35675:return w_;case 35676:return R_;case 5124:case 35670:return C_;case 35667:case 35671:return L_;case 35668:case 35672:return P_;case 35669:case 35673:return I_;case 5125:return D_;case 36294:return N_;case 36295:return U_;case 36296:return F_;case 35678:case 36198:case 36298:case 36306:case 35682:return O_;case 35679:case 36299:case 36307:return B_;case 35680:case 36300:case 36308:case 36293:return k_;case 36289:case 36303:case 36311:case 36292:return z_}}function G_(r,e){r.uniform1fv(this.addr,e)}function V_(r,e){const t=ls(e,this.size,2);r.uniform2fv(this.addr,t)}function W_(r,e){const t=ls(e,this.size,3);r.uniform3fv(this.addr,t)}function X_(r,e){const t=ls(e,this.size,4);r.uniform4fv(this.addr,t)}function q_(r,e){const t=ls(e,this.size,4);r.uniformMatrix2fv(this.addr,!1,t)}function j_(r,e){const t=ls(e,this.size,9);r.uniformMatrix3fv(this.addr,!1,t)}function Y_(r,e){const t=ls(e,this.size,16);r.uniformMatrix4fv(this.addr,!1,t)}function K_(r,e){r.uniform1iv(this.addr,e)}function $_(r,e){r.uniform2iv(this.addr,e)}function Z_(r,e){r.uniform3iv(this.addr,e)}function J_(r,e){r.uniform4iv(this.addr,e)}function Q_(r,e){r.uniform1uiv(this.addr,e)}function ev(r,e){r.uniform2uiv(this.addr,e)}function tv(r,e){r.uniform3uiv(this.addr,e)}function nv(r,e){r.uniform4uiv(this.addr,e)}function iv(r,e,t){const n=this.cache,i=e.length,s=Da(t,i);en(n,s)||(r.uniform1iv(this.addr,s),tn(n,s));for(let a=0;a!==i;++a)t.setTexture2D(e[a]||Mh,s[a])}function rv(r,e,t){const n=this.cache,i=e.length,s=Da(t,i);en(n,s)||(r.uniform1iv(this.addr,s),tn(n,s));for(let a=0;a!==i;++a)t.setTexture3D(e[a]||Eh,s[a])}function sv(r,e,t){const n=this.cache,i=e.length,s=Da(t,i);en(n,s)||(r.uniform1iv(this.addr,s),tn(n,s));for(let a=0;a!==i;++a)t.setTextureCube(e[a]||bh,s[a])}function av(r,e,t){const n=this.cache,i=e.length,s=Da(t,i);en(n,s)||(r.uniform1iv(this.addr,s),tn(n,s));for(let a=0;a!==i;++a)t.setTexture2DArray(e[a]||Sh,s[a])}function ov(r){switch(r){case 5126:return G_;case 35664:return V_;case 35665:return W_;case 35666:return X_;case 35674:return q_;case 35675:return j_;case 35676:return Y_;case 5124:case 35670:return K_;case 35667:case 35671:return $_;case 35668:case 35672:return Z_;case 35669:case 35673:return J_;case 5125:return Q_;case 36294:return ev;case 36295:return tv;case 36296:return nv;case 35678:case 36198:case 36298:case 36306:case 35682:return iv;case 35679:case 36299:case 36307:return rv;case 35680:case 36300:case 36308:case 36293:return sv;case 36289:case 36303:case 36311:case 36292:return av}}class lv{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=H_(t.type)}}class cv{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=ov(t.type)}}class uv{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const i=this.seq;for(let s=0,a=i.length;s!==a;++s){const o=i[s];o.setValue(e,t[o.id],n)}}}const So=/(\w+)(\])?(\[|\.)?/g;function iu(r,e){r.seq.push(e),r.map[e.id]=e}function hv(r,e,t){const n=r.name,i=n.length;for(So.lastIndex=0;;){const s=So.exec(n),a=So.lastIndex;let o=s[1];const l=s[2]==="]",c=s[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===i){iu(t,c===void 0?new lv(o,r,e):new cv(o,r,e));break}else{let h=t.map[o];h===void 0&&(h=new uv(o),iu(t,h)),t=h}}}class ya{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let i=0;i<n;++i){const s=e.getActiveUniform(t,i),a=e.getUniformLocation(t,s.name);hv(s,a,this)}}setValue(e,t,n,i){const s=this.map[t];s!==void 0&&s.setValue(e,n,i)}setOptional(e,t,n){const i=t[n];i!==void 0&&this.setValue(e,n,i)}static upload(e,t,n,i){for(let s=0,a=t.length;s!==a;++s){const o=t[s],l=n[o.id];l.needsUpdate!==!1&&o.setValue(e,l.value,i)}}static seqWithValue(e,t){const n=[];for(let i=0,s=e.length;i!==s;++i){const a=e[i];a.id in t&&n.push(a)}return n}}function ru(r,e,t){const n=r.createShader(e);return r.shaderSource(n,t),r.compileShader(n),n}const dv=37297;let fv=0;function pv(r,e){const t=r.split(`
`),n=[],i=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let a=i;a<s;a++){const o=a+1;n.push(`${o===e?">":" "} ${o}: ${t[a]}`)}return n.join(`
`)}function mv(r){const e=bt.getPrimaries(bt.workingColorSpace),t=bt.getPrimaries(r);let n;switch(e===t?n="":e===Aa&&t===Ta?n="LinearDisplayP3ToLinearSRGB":e===Ta&&t===Aa&&(n="LinearSRGBToLinearDisplayP3"),r){case mn:case La:return[n,"LinearTransferOETF"];case Cn:case ol:return[n,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",r),[n,"LinearTransferOETF"]}}function su(r,e,t){const n=r.getShaderParameter(e,r.COMPILE_STATUS),i=r.getShaderInfoLog(e).trim();if(n&&i==="")return"";const s=/ERROR: 0:(\d+)/.exec(i);if(s){const a=parseInt(s[1]);return t.toUpperCase()+`

`+i+`

`+pv(r.getShaderSource(e),a)}else return i}function gv(r,e){const t=mv(e);return`vec4 ${r}( vec4 value ) { return ${t[0]}( ${t[1]}( value ) ); }`}function _v(r,e){let t;switch(e){case hf:t="Linear";break;case df:t="Reinhard";break;case ff:t="OptimizedCineon";break;case pf:t="ACESFilmic";break;case gf:t="AgX";break;case _f:t="Neutral";break;case mf:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+r+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}function vv(r){return[r.extensionDerivatives||r.envMapCubeUVHeight||r.bumpMap||r.normalMapTangentSpace||r.clearcoatNormalMap||r.flatShading||r.alphaToCoverage||r.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(r.extensionFragDepth||r.logarithmicDepthBuffer)&&r.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",r.extensionDrawBuffers&&r.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(r.extensionShaderTextureLOD||r.envMap||r.transmission)&&r.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(Xr).join(`
`)}function xv(r){return[r.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",r.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Xr).join(`
`)}function Mv(r){const e=[];for(const t in r){const n=r[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function yv(r,e){const t={},n=r.getProgramParameter(e,r.ACTIVE_ATTRIBUTES);for(let i=0;i<n;i++){const s=r.getActiveAttrib(e,i),a=s.name;let o=1;s.type===r.FLOAT_MAT2&&(o=2),s.type===r.FLOAT_MAT3&&(o=3),s.type===r.FLOAT_MAT4&&(o=4),t[a]={type:s.type,location:r.getAttribLocation(e,a),locationSize:o}}return t}function Xr(r){return r!==""}function au(r,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return r.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function ou(r,e){return r.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const Sv=/^[ \t]*#include +<([\w\d./]+)>/gm;function Yo(r){return r.replace(Sv,bv)}const Ev=new Map([["encodings_fragment","colorspace_fragment"],["encodings_pars_fragment","colorspace_pars_fragment"],["output_fragment","opaque_fragment"]]);function bv(r,e){let t=rt[e];if(t===void 0){const n=Ev.get(e);if(n!==void 0)t=rt[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return Yo(t)}const Tv=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function lu(r){return r.replace(Tv,Av)}function Av(r,e,t,n){let i="";for(let s=parseInt(e);s<parseInt(t);s++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return i}function cu(r){let e=`precision ${r.precision} float;
	precision ${r.precision} int;
	precision ${r.precision} sampler2D;
	precision ${r.precision} samplerCube;
	`;return r.isWebGL2&&(e+=`precision ${r.precision} sampler3D;
		precision ${r.precision} sampler2DArray;
		precision ${r.precision} sampler2DShadow;
		precision ${r.precision} samplerCubeShadow;
		precision ${r.precision} sampler2DArrayShadow;
		precision ${r.precision} isampler2D;
		precision ${r.precision} isampler3D;
		precision ${r.precision} isamplerCube;
		precision ${r.precision} isampler2DArray;
		precision ${r.precision} usampler2D;
		precision ${r.precision} usampler3D;
		precision ${r.precision} usamplerCube;
		precision ${r.precision} usampler2DArray;
		`),r.precision==="highp"?e+=`
#define HIGH_PRECISION`:r.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:r.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function wv(r){let e="SHADOWMAP_TYPE_BASIC";return r.shadowMapType===qu?e="SHADOWMAP_TYPE_PCF":r.shadowMapType===Bd?e="SHADOWMAP_TYPE_PCF_SOFT":r.shadowMapType===Ai&&(e="SHADOWMAP_TYPE_VSM"),e}function Rv(r){let e="ENVMAP_TYPE_CUBE";if(r.envMap)switch(r.envMapMode){case Zr:case Jr:e="ENVMAP_TYPE_CUBE";break;case Ca:e="ENVMAP_TYPE_CUBE_UV";break}return e}function Cv(r){let e="ENVMAP_MODE_REFLECTION";return r.envMap&&r.envMapMode===Jr&&(e="ENVMAP_MODE_REFRACTION"),e}function Lv(r){let e="ENVMAP_BLENDING_NONE";if(r.envMap)switch(r.combine){case ju:e="ENVMAP_BLENDING_MULTIPLY";break;case cf:e="ENVMAP_BLENDING_MIX";break;case uf:e="ENVMAP_BLENDING_ADD";break}return e}function Pv(r){const e=r.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:n,maxMip:t}}function Iv(r,e,t,n){const i=r.getContext(),s=t.defines;let a=t.vertexShader,o=t.fragmentShader;const l=wv(t),c=Rv(t),u=Cv(t),h=Lv(t),d=Pv(t),p=t.isWebGL2?"":vv(t),g=xv(t),_=Mv(s),f=i.createProgram();let m,y,v=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_].filter(Xr).join(`
`),m.length>0&&(m+=`
`),y=[p,"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_].filter(Xr).join(`
`),y.length>0&&(y+=`
`)):(m=[cu(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors&&t.isWebGL2?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Xr).join(`
`),y=[p,cu(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+u:"",t.envMap?"#define "+h:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Zi?"#define TONE_MAPPING":"",t.toneMapping!==Zi?rt.tonemapping_pars_fragment:"",t.toneMapping!==Zi?_v("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",rt.colorspace_pars_fragment,gv("linearToOutputTexel",t.outputColorSpace),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Xr).join(`
`)),a=Yo(a),a=au(a,t),a=ou(a,t),o=Yo(o),o=au(o,t),o=ou(o,t),a=lu(a),o=lu(o),t.isWebGL2&&t.isRawShaderMaterial!==!0&&(v=`#version 300 es
`,m=[g,"precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,y=["precision mediump sampler2DArray;","#define varying in",t.glslVersion===Tc?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Tc?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+y);const E=v+m+a,C=v+y+o,A=ru(i,i.VERTEX_SHADER,E),b=ru(i,i.FRAGMENT_SHADER,C);i.attachShader(f,A),i.attachShader(f,b),t.index0AttributeName!==void 0?i.bindAttribLocation(f,0,t.index0AttributeName):t.morphTargets===!0&&i.bindAttribLocation(f,0,"position"),i.linkProgram(f);function N(z){if(r.debug.checkShaderErrors){const $=i.getProgramInfoLog(f).trim(),P=i.getShaderInfoLog(A).trim(),O=i.getShaderInfoLog(b).trim();let k=!0,j=!0;if(i.getProgramParameter(f,i.LINK_STATUS)===!1)if(k=!1,typeof r.debug.onShaderError=="function")r.debug.onShaderError(i,f,A,b);else{const K=su(i,A,"vertex"),Y=su(i,b,"fragment");console.error("THREE.WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(f,i.VALIDATE_STATUS)+`

Material Name: `+z.name+`
Material Type: `+z.type+`

Program Info Log: `+$+`
`+K+`
`+Y)}else $!==""?console.warn("THREE.WebGLProgram: Program Info Log:",$):(P===""||O==="")&&(j=!1);j&&(z.diagnostics={runnable:k,programLog:$,vertexShader:{log:P,prefix:m},fragmentShader:{log:O,prefix:y}})}i.deleteShader(A),i.deleteShader(b),B=new ya(i,f),x=yv(i,f)}let B;this.getUniforms=function(){return B===void 0&&N(this),B};let x;this.getAttributes=function(){return x===void 0&&N(this),x};let T=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return T===!1&&(T=i.getProgramParameter(f,dv)),T},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(f),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=fv++,this.cacheKey=e,this.usedTimes=1,this.program=f,this.vertexShader=A,this.fragmentShader=b,this}let Dv=0;class Nv{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,n=e.fragmentShader,i=this._getShaderStage(t),s=this._getShaderStage(n),a=this._getShaderCacheForMaterial(e);return a.has(i)===!1&&(a.add(i),i.usedTimes++),a.has(s)===!1&&(a.add(s),s.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new Uv(e),t.set(e,n)),n}}class Uv{constructor(e){this.id=Dv++,this.code=e,this.usedTimes=0}}function Fv(r,e,t,n,i,s,a){const o=new dh,l=new Nv,c=new Set,u=[],h=i.isWebGL2,d=i.logarithmicDepthBuffer,p=i.vertexTextures;let g=i.precision;const _={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function f(x){return c.add(x),x===0?"uv":`uv${x}`}function m(x,T,z,$,P){const O=$.fog,k=P.geometry,j=x.isMeshStandardMaterial?$.environment:null,K=(x.isMeshStandardMaterial?t:e).get(x.envMap||j),Y=K&&K.mapping===Ca?K.image.height:null,ae=_[x.type];x.precision!==null&&(g=i.getMaxPrecision(x.precision),g!==x.precision&&console.warn("THREE.WebGLProgram.getParameters:",x.precision,"not supported, using",g,"instead."));const ce=k.morphAttributes.position||k.morphAttributes.normal||k.morphAttributes.color,Me=ce!==void 0?ce.length:0;let Be=0;k.morphAttributes.position!==void 0&&(Be=1),k.morphAttributes.normal!==void 0&&(Be=2),k.morphAttributes.color!==void 0&&(Be=3);let V,se,ye,ke;if(ae){const Ue=ri[ae];V=Ue.vertexShader,se=Ue.fragmentShader}else V=x.vertexShader,se=x.fragmentShader,l.update(x),ye=l.getVertexShaderID(x),ke=l.getFragmentShaderID(x);const Ae=r.getRenderTarget(),Ee=P.isInstancedMesh===!0,pt=P.isBatchedMesh===!0,We=!!x.map,U=!!x.matcap,Pt=!!K,Ie=!!x.aoMap,Oe=!!x.lightMap,Ne=!!x.bumpMap,je=!!x.normalMap,Xe=!!x.displacementMap,Ke=!!x.emissiveMap,Mt=!!x.metalnessMap,w=!!x.roughnessMap,M=x.anisotropy>0,X=x.clearcoat>0,Z=x.iridescence>0,ie=x.sheen>0,re=x.transmission>0,et=M&&!!x.anisotropyMap,Fe=X&&!!x.clearcoatMap,pe=X&&!!x.clearcoatNormalMap,xe=X&&!!x.clearcoatRoughnessMap,$e=Z&&!!x.iridescenceMap,ue=Z&&!!x.iridescenceThicknessMap,Ot=ie&&!!x.sheenColorMap,tt=ie&&!!x.sheenRoughnessMap,De=!!x.specularMap,be=!!x.specularColorMap,Re=!!x.specularIntensityMap,at=re&&!!x.transmissionMap,Ze=re&&!!x.thicknessMap,yt=!!x.gradientMap,I=!!x.alphaMap,ve=x.alphaTest>0,G=!!x.alphaHash,de=!!x.extensions;let Q=Zi;x.toneMapped&&(Ae===null||Ae.isXRRenderTarget===!0)&&(Q=r.toneMapping);const ge={isWebGL2:h,shaderID:ae,shaderType:x.type,shaderName:x.name,vertexShader:V,fragmentShader:se,defines:x.defines,customVertexShaderID:ye,customFragmentShaderID:ke,isRawShaderMaterial:x.isRawShaderMaterial===!0,glslVersion:x.glslVersion,precision:g,batching:pt,instancing:Ee,instancingColor:Ee&&P.instanceColor!==null,instancingMorph:Ee&&P.morphTexture!==null,supportsVertexTextures:p,outputColorSpace:Ae===null?r.outputColorSpace:Ae.isXRRenderTarget===!0?Ae.texture.colorSpace:mn,alphaToCoverage:!!x.alphaToCoverage,map:We,matcap:U,envMap:Pt,envMapMode:Pt&&K.mapping,envMapCubeUVHeight:Y,aoMap:Ie,lightMap:Oe,bumpMap:Ne,normalMap:je,displacementMap:p&&Xe,emissiveMap:Ke,normalMapObjectSpace:je&&x.normalMapType===Lf,normalMapTangentSpace:je&&x.normalMapType===rh,metalnessMap:Mt,roughnessMap:w,anisotropy:M,anisotropyMap:et,clearcoat:X,clearcoatMap:Fe,clearcoatNormalMap:pe,clearcoatRoughnessMap:xe,iridescence:Z,iridescenceMap:$e,iridescenceThicknessMap:ue,sheen:ie,sheenColorMap:Ot,sheenRoughnessMap:tt,specularMap:De,specularColorMap:be,specularIntensityMap:Re,transmission:re,transmissionMap:at,thicknessMap:Ze,gradientMap:yt,opaque:x.transparent===!1&&x.blending===jr&&x.alphaToCoverage===!1,alphaMap:I,alphaTest:ve,alphaHash:G,combine:x.combine,mapUv:We&&f(x.map.channel),aoMapUv:Ie&&f(x.aoMap.channel),lightMapUv:Oe&&f(x.lightMap.channel),bumpMapUv:Ne&&f(x.bumpMap.channel),normalMapUv:je&&f(x.normalMap.channel),displacementMapUv:Xe&&f(x.displacementMap.channel),emissiveMapUv:Ke&&f(x.emissiveMap.channel),metalnessMapUv:Mt&&f(x.metalnessMap.channel),roughnessMapUv:w&&f(x.roughnessMap.channel),anisotropyMapUv:et&&f(x.anisotropyMap.channel),clearcoatMapUv:Fe&&f(x.clearcoatMap.channel),clearcoatNormalMapUv:pe&&f(x.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:xe&&f(x.clearcoatRoughnessMap.channel),iridescenceMapUv:$e&&f(x.iridescenceMap.channel),iridescenceThicknessMapUv:ue&&f(x.iridescenceThicknessMap.channel),sheenColorMapUv:Ot&&f(x.sheenColorMap.channel),sheenRoughnessMapUv:tt&&f(x.sheenRoughnessMap.channel),specularMapUv:De&&f(x.specularMap.channel),specularColorMapUv:be&&f(x.specularColorMap.channel),specularIntensityMapUv:Re&&f(x.specularIntensityMap.channel),transmissionMapUv:at&&f(x.transmissionMap.channel),thicknessMapUv:Ze&&f(x.thicknessMap.channel),alphaMapUv:I&&f(x.alphaMap.channel),vertexTangents:!!k.attributes.tangent&&(je||M),vertexColors:x.vertexColors,vertexAlphas:x.vertexColors===!0&&!!k.attributes.color&&k.attributes.color.itemSize===4,pointsUvs:P.isPoints===!0&&!!k.attributes.uv&&(We||I),fog:!!O,useFog:x.fog===!0,fogExp2:!!O&&O.isFogExp2,flatShading:x.flatShading===!0,sizeAttenuation:x.sizeAttenuation===!0,logarithmicDepthBuffer:d,skinning:P.isSkinnedMesh===!0,morphTargets:k.morphAttributes.position!==void 0,morphNormals:k.morphAttributes.normal!==void 0,morphColors:k.morphAttributes.color!==void 0,morphTargetsCount:Me,morphTextureStride:Be,numDirLights:T.directional.length,numPointLights:T.point.length,numSpotLights:T.spot.length,numSpotLightMaps:T.spotLightMap.length,numRectAreaLights:T.rectArea.length,numHemiLights:T.hemi.length,numDirLightShadows:T.directionalShadowMap.length,numPointLightShadows:T.pointShadowMap.length,numSpotLightShadows:T.spotShadowMap.length,numSpotLightShadowsWithMaps:T.numSpotLightShadowsWithMaps,numLightProbes:T.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:x.dithering,shadowMapEnabled:r.shadowMap.enabled&&z.length>0,shadowMapType:r.shadowMap.type,toneMapping:Q,useLegacyLights:r._useLegacyLights,decodeVideoTexture:We&&x.map.isVideoTexture===!0&&bt.getTransfer(x.map.colorSpace)===Ht,premultipliedAlpha:x.premultipliedAlpha,doubleSided:x.side===si,flipSided:x.side===Pn,useDepthPacking:x.depthPacking>=0,depthPacking:x.depthPacking||0,index0AttributeName:x.index0AttributeName,extensionDerivatives:de&&x.extensions.derivatives===!0,extensionFragDepth:de&&x.extensions.fragDepth===!0,extensionDrawBuffers:de&&x.extensions.drawBuffers===!0,extensionShaderTextureLOD:de&&x.extensions.shaderTextureLOD===!0,extensionClipCullDistance:de&&x.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:de&&x.extensions.multiDraw===!0&&n.has("WEBGL_multi_draw"),rendererExtensionFragDepth:h||n.has("EXT_frag_depth"),rendererExtensionDrawBuffers:h||n.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:h||n.has("EXT_shader_texture_lod"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:x.customProgramCacheKey()};return ge.vertexUv1s=c.has(1),ge.vertexUv2s=c.has(2),ge.vertexUv3s=c.has(3),c.clear(),ge}function y(x){const T=[];if(x.shaderID?T.push(x.shaderID):(T.push(x.customVertexShaderID),T.push(x.customFragmentShaderID)),x.defines!==void 0)for(const z in x.defines)T.push(z),T.push(x.defines[z]);return x.isRawShaderMaterial===!1&&(v(T,x),E(T,x),T.push(r.outputColorSpace)),T.push(x.customProgramCacheKey),T.join()}function v(x,T){x.push(T.precision),x.push(T.outputColorSpace),x.push(T.envMapMode),x.push(T.envMapCubeUVHeight),x.push(T.mapUv),x.push(T.alphaMapUv),x.push(T.lightMapUv),x.push(T.aoMapUv),x.push(T.bumpMapUv),x.push(T.normalMapUv),x.push(T.displacementMapUv),x.push(T.emissiveMapUv),x.push(T.metalnessMapUv),x.push(T.roughnessMapUv),x.push(T.anisotropyMapUv),x.push(T.clearcoatMapUv),x.push(T.clearcoatNormalMapUv),x.push(T.clearcoatRoughnessMapUv),x.push(T.iridescenceMapUv),x.push(T.iridescenceThicknessMapUv),x.push(T.sheenColorMapUv),x.push(T.sheenRoughnessMapUv),x.push(T.specularMapUv),x.push(T.specularColorMapUv),x.push(T.specularIntensityMapUv),x.push(T.transmissionMapUv),x.push(T.thicknessMapUv),x.push(T.combine),x.push(T.fogExp2),x.push(T.sizeAttenuation),x.push(T.morphTargetsCount),x.push(T.morphAttributeCount),x.push(T.numDirLights),x.push(T.numPointLights),x.push(T.numSpotLights),x.push(T.numSpotLightMaps),x.push(T.numHemiLights),x.push(T.numRectAreaLights),x.push(T.numDirLightShadows),x.push(T.numPointLightShadows),x.push(T.numSpotLightShadows),x.push(T.numSpotLightShadowsWithMaps),x.push(T.numLightProbes),x.push(T.shadowMapType),x.push(T.toneMapping),x.push(T.numClippingPlanes),x.push(T.numClipIntersection),x.push(T.depthPacking)}function E(x,T){o.disableAll(),T.isWebGL2&&o.enable(0),T.supportsVertexTextures&&o.enable(1),T.instancing&&o.enable(2),T.instancingColor&&o.enable(3),T.instancingMorph&&o.enable(4),T.matcap&&o.enable(5),T.envMap&&o.enable(6),T.normalMapObjectSpace&&o.enable(7),T.normalMapTangentSpace&&o.enable(8),T.clearcoat&&o.enable(9),T.iridescence&&o.enable(10),T.alphaTest&&o.enable(11),T.vertexColors&&o.enable(12),T.vertexAlphas&&o.enable(13),T.vertexUv1s&&o.enable(14),T.vertexUv2s&&o.enable(15),T.vertexUv3s&&o.enable(16),T.vertexTangents&&o.enable(17),T.anisotropy&&o.enable(18),T.alphaHash&&o.enable(19),T.batching&&o.enable(20),x.push(o.mask),o.disableAll(),T.fog&&o.enable(0),T.useFog&&o.enable(1),T.flatShading&&o.enable(2),T.logarithmicDepthBuffer&&o.enable(3),T.skinning&&o.enable(4),T.morphTargets&&o.enable(5),T.morphNormals&&o.enable(6),T.morphColors&&o.enable(7),T.premultipliedAlpha&&o.enable(8),T.shadowMapEnabled&&o.enable(9),T.useLegacyLights&&o.enable(10),T.doubleSided&&o.enable(11),T.flipSided&&o.enable(12),T.useDepthPacking&&o.enable(13),T.dithering&&o.enable(14),T.transmission&&o.enable(15),T.sheen&&o.enable(16),T.opaque&&o.enable(17),T.pointsUvs&&o.enable(18),T.decodeVideoTexture&&o.enable(19),T.alphaToCoverage&&o.enable(20),x.push(o.mask)}function C(x){const T=_[x.type];let z;if(T){const $=ri[T];z=gp.clone($.uniforms)}else z=x.uniforms;return z}function A(x,T){let z;for(let $=0,P=u.length;$<P;$++){const O=u[$];if(O.cacheKey===T){z=O,++z.usedTimes;break}}return z===void 0&&(z=new Iv(r,T,x,s),u.push(z)),z}function b(x){if(--x.usedTimes===0){const T=u.indexOf(x);u[T]=u[u.length-1],u.pop(),x.destroy()}}function N(x){l.remove(x)}function B(){l.dispose()}return{getParameters:m,getProgramCacheKey:y,getUniforms:C,acquireProgram:A,releaseProgram:b,releaseShaderCache:N,programs:u,dispose:B}}function Ov(){let r=new WeakMap;function e(s){let a=r.get(s);return a===void 0&&(a={},r.set(s,a)),a}function t(s){r.delete(s)}function n(s,a,o){r.get(s)[a]=o}function i(){r=new WeakMap}return{get:e,remove:t,update:n,dispose:i}}function Bv(r,e){return r.groupOrder!==e.groupOrder?r.groupOrder-e.groupOrder:r.renderOrder!==e.renderOrder?r.renderOrder-e.renderOrder:r.material.id!==e.material.id?r.material.id-e.material.id:r.z!==e.z?r.z-e.z:r.id-e.id}function uu(r,e){return r.groupOrder!==e.groupOrder?r.groupOrder-e.groupOrder:r.renderOrder!==e.renderOrder?r.renderOrder-e.renderOrder:r.z!==e.z?e.z-r.z:r.id-e.id}function hu(){const r=[];let e=0;const t=[],n=[],i=[];function s(){e=0,t.length=0,n.length=0,i.length=0}function a(h,d,p,g,_,f){let m=r[e];return m===void 0?(m={id:h.id,object:h,geometry:d,material:p,groupOrder:g,renderOrder:h.renderOrder,z:_,group:f},r[e]=m):(m.id=h.id,m.object=h,m.geometry=d,m.material=p,m.groupOrder=g,m.renderOrder=h.renderOrder,m.z=_,m.group=f),e++,m}function o(h,d,p,g,_,f){const m=a(h,d,p,g,_,f);p.transmission>0?n.push(m):p.transparent===!0?i.push(m):t.push(m)}function l(h,d,p,g,_,f){const m=a(h,d,p,g,_,f);p.transmission>0?n.unshift(m):p.transparent===!0?i.unshift(m):t.unshift(m)}function c(h,d){t.length>1&&t.sort(h||Bv),n.length>1&&n.sort(d||uu),i.length>1&&i.sort(d||uu)}function u(){for(let h=e,d=r.length;h<d;h++){const p=r[h];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:t,transmissive:n,transparent:i,init:s,push:o,unshift:l,finish:u,sort:c}}function kv(){let r=new WeakMap;function e(n,i){const s=r.get(n);let a;return s===void 0?(a=new hu,r.set(n,[a])):i>=s.length?(a=new hu,s.push(a)):a=s[i],a}function t(){r=new WeakMap}return{get:e,dispose:t}}function zv(){const r={};return{get:function(e){if(r[e.id]!==void 0)return r[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new L,color:new Ye};break;case"SpotLight":t={position:new L,direction:new L,color:new Ye,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new L,color:new Ye,distance:0,decay:0};break;case"HemisphereLight":t={direction:new L,skyColor:new Ye,groundColor:new Ye};break;case"RectAreaLight":t={color:new Ye,position:new L,halfWidth:new L,halfHeight:new L};break}return r[e.id]=t,t}}}function Hv(){const r={};return{get:function(e){if(r[e.id]!==void 0)return r[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Se};break;case"SpotLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Se};break;case"PointLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Se,shadowCameraNear:1,shadowCameraFar:1e3};break}return r[e.id]=t,t}}}let Gv=0;function Vv(r,e){return(e.castShadow?2:0)-(r.castShadow?2:0)+(e.map?1:0)-(r.map?1:0)}function Wv(r,e){const t=new zv,n=Hv(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let u=0;u<9;u++)i.probe.push(new L);const s=new L,a=new Ve,o=new Ve;function l(u,h){let d=0,p=0,g=0;for(let z=0;z<9;z++)i.probe[z].set(0,0,0);let _=0,f=0,m=0,y=0,v=0,E=0,C=0,A=0,b=0,N=0,B=0;u.sort(Vv);const x=h===!0?Math.PI:1;for(let z=0,$=u.length;z<$;z++){const P=u[z],O=P.color,k=P.intensity,j=P.distance,K=P.shadow&&P.shadow.map?P.shadow.map.texture:null;if(P.isAmbientLight)d+=O.r*k*x,p+=O.g*k*x,g+=O.b*k*x;else if(P.isLightProbe){for(let Y=0;Y<9;Y++)i.probe[Y].addScaledVector(P.sh.coefficients[Y],k);B++}else if(P.isDirectionalLight){const Y=t.get(P);if(Y.color.copy(P.color).multiplyScalar(P.intensity*x),P.castShadow){const ae=P.shadow,ce=n.get(P);ce.shadowBias=ae.bias,ce.shadowNormalBias=ae.normalBias,ce.shadowRadius=ae.radius,ce.shadowMapSize=ae.mapSize,i.directionalShadow[_]=ce,i.directionalShadowMap[_]=K,i.directionalShadowMatrix[_]=P.shadow.matrix,E++}i.directional[_]=Y,_++}else if(P.isSpotLight){const Y=t.get(P);Y.position.setFromMatrixPosition(P.matrixWorld),Y.color.copy(O).multiplyScalar(k*x),Y.distance=j,Y.coneCos=Math.cos(P.angle),Y.penumbraCos=Math.cos(P.angle*(1-P.penumbra)),Y.decay=P.decay,i.spot[m]=Y;const ae=P.shadow;if(P.map&&(i.spotLightMap[b]=P.map,b++,ae.updateMatrices(P),P.castShadow&&N++),i.spotLightMatrix[m]=ae.matrix,P.castShadow){const ce=n.get(P);ce.shadowBias=ae.bias,ce.shadowNormalBias=ae.normalBias,ce.shadowRadius=ae.radius,ce.shadowMapSize=ae.mapSize,i.spotShadow[m]=ce,i.spotShadowMap[m]=K,A++}m++}else if(P.isRectAreaLight){const Y=t.get(P);Y.color.copy(O).multiplyScalar(k),Y.halfWidth.set(P.width*.5,0,0),Y.halfHeight.set(0,P.height*.5,0),i.rectArea[y]=Y,y++}else if(P.isPointLight){const Y=t.get(P);if(Y.color.copy(P.color).multiplyScalar(P.intensity*x),Y.distance=P.distance,Y.decay=P.decay,P.castShadow){const ae=P.shadow,ce=n.get(P);ce.shadowBias=ae.bias,ce.shadowNormalBias=ae.normalBias,ce.shadowRadius=ae.radius,ce.shadowMapSize=ae.mapSize,ce.shadowCameraNear=ae.camera.near,ce.shadowCameraFar=ae.camera.far,i.pointShadow[f]=ce,i.pointShadowMap[f]=K,i.pointShadowMatrix[f]=P.shadow.matrix,C++}i.point[f]=Y,f++}else if(P.isHemisphereLight){const Y=t.get(P);Y.skyColor.copy(P.color).multiplyScalar(k*x),Y.groundColor.copy(P.groundColor).multiplyScalar(k*x),i.hemi[v]=Y,v++}}y>0&&(e.isWebGL2?r.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=_e.LTC_FLOAT_1,i.rectAreaLTC2=_e.LTC_FLOAT_2):(i.rectAreaLTC1=_e.LTC_HALF_1,i.rectAreaLTC2=_e.LTC_HALF_2):r.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=_e.LTC_FLOAT_1,i.rectAreaLTC2=_e.LTC_FLOAT_2):r.has("OES_texture_half_float_linear")===!0?(i.rectAreaLTC1=_e.LTC_HALF_1,i.rectAreaLTC2=_e.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),i.ambient[0]=d,i.ambient[1]=p,i.ambient[2]=g;const T=i.hash;(T.directionalLength!==_||T.pointLength!==f||T.spotLength!==m||T.rectAreaLength!==y||T.hemiLength!==v||T.numDirectionalShadows!==E||T.numPointShadows!==C||T.numSpotShadows!==A||T.numSpotMaps!==b||T.numLightProbes!==B)&&(i.directional.length=_,i.spot.length=m,i.rectArea.length=y,i.point.length=f,i.hemi.length=v,i.directionalShadow.length=E,i.directionalShadowMap.length=E,i.pointShadow.length=C,i.pointShadowMap.length=C,i.spotShadow.length=A,i.spotShadowMap.length=A,i.directionalShadowMatrix.length=E,i.pointShadowMatrix.length=C,i.spotLightMatrix.length=A+b-N,i.spotLightMap.length=b,i.numSpotLightShadowsWithMaps=N,i.numLightProbes=B,T.directionalLength=_,T.pointLength=f,T.spotLength=m,T.rectAreaLength=y,T.hemiLength=v,T.numDirectionalShadows=E,T.numPointShadows=C,T.numSpotShadows=A,T.numSpotMaps=b,T.numLightProbes=B,i.version=Gv++)}function c(u,h){let d=0,p=0,g=0,_=0,f=0;const m=h.matrixWorldInverse;for(let y=0,v=u.length;y<v;y++){const E=u[y];if(E.isDirectionalLight){const C=i.directional[d];C.direction.setFromMatrixPosition(E.matrixWorld),s.setFromMatrixPosition(E.target.matrixWorld),C.direction.sub(s),C.direction.transformDirection(m),d++}else if(E.isSpotLight){const C=i.spot[g];C.position.setFromMatrixPosition(E.matrixWorld),C.position.applyMatrix4(m),C.direction.setFromMatrixPosition(E.matrixWorld),s.setFromMatrixPosition(E.target.matrixWorld),C.direction.sub(s),C.direction.transformDirection(m),g++}else if(E.isRectAreaLight){const C=i.rectArea[_];C.position.setFromMatrixPosition(E.matrixWorld),C.position.applyMatrix4(m),o.identity(),a.copy(E.matrixWorld),a.premultiply(m),o.extractRotation(a),C.halfWidth.set(E.width*.5,0,0),C.halfHeight.set(0,E.height*.5,0),C.halfWidth.applyMatrix4(o),C.halfHeight.applyMatrix4(o),_++}else if(E.isPointLight){const C=i.point[p];C.position.setFromMatrixPosition(E.matrixWorld),C.position.applyMatrix4(m),p++}else if(E.isHemisphereLight){const C=i.hemi[f];C.direction.setFromMatrixPosition(E.matrixWorld),C.direction.transformDirection(m),f++}}}return{setup:l,setupView:c,state:i}}function du(r,e){const t=new Wv(r,e),n=[],i=[];function s(){n.length=0,i.length=0}function a(h){n.push(h)}function o(h){i.push(h)}function l(h){t.setup(n,h)}function c(h){t.setupView(n,h)}return{init:s,state:{lightsArray:n,shadowsArray:i,lights:t},setupLights:l,setupLightsView:c,pushLight:a,pushShadow:o}}function Xv(r,e){let t=new WeakMap;function n(s,a=0){const o=t.get(s);let l;return o===void 0?(l=new du(r,e),t.set(s,[l])):a>=o.length?(l=new du(r,e),o.push(l)):l=o[a],l}function i(){t=new WeakMap}return{get:n,dispose:i}}class qv extends li{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Rf,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class jv extends li{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const Yv=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Kv=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function $v(r,e,t){let n=new ul;const i=new Se,s=new Se,a=new Nt,o=new qv({depthPacking:Cf}),l=new jv,c={},u=t.maxTextureSize,h={[Ci]:Pn,[Pn]:Ci,[si]:si},d=new Li({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Se},radius:{value:4}},vertexShader:Yv,fragmentShader:Kv}),p=d.clone();p.defines.HORIZONTAL_PASS=1;const g=new In;g.setAttribute("position",new Qt(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const _=new Vt(g,d),f=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=qu;let m=this.type;this.render=function(A,b,N){if(f.enabled===!1||f.autoUpdate===!1&&f.needsUpdate===!1||A.length===0)return;const B=r.getRenderTarget(),x=r.getActiveCubeFace(),T=r.getActiveMipmapLevel(),z=r.state;z.setBlending($i),z.buffers.color.setClear(1,1,1,1),z.buffers.depth.setTest(!0),z.setScissorTest(!1);const $=m!==Ai&&this.type===Ai,P=m===Ai&&this.type!==Ai;for(let O=0,k=A.length;O<k;O++){const j=A[O],K=j.shadow;if(K===void 0){console.warn("THREE.WebGLShadowMap:",j,"has no shadow.");continue}if(K.autoUpdate===!1&&K.needsUpdate===!1)continue;i.copy(K.mapSize);const Y=K.getFrameExtents();if(i.multiply(Y),s.copy(K.mapSize),(i.x>u||i.y>u)&&(i.x>u&&(s.x=Math.floor(u/Y.x),i.x=s.x*Y.x,K.mapSize.x=s.x),i.y>u&&(s.y=Math.floor(u/Y.y),i.y=s.y*Y.y,K.mapSize.y=s.y)),K.map===null||$===!0||P===!0){const ce=this.type!==Ai?{minFilter:cn,magFilter:cn}:{};K.map!==null&&K.map.dispose(),K.map=new Mr(i.x,i.y,ce),K.map.texture.name=j.name+".shadowMap",K.camera.updateProjectionMatrix()}r.setRenderTarget(K.map),r.clear();const ae=K.getViewportCount();for(let ce=0;ce<ae;ce++){const Me=K.getViewport(ce);a.set(s.x*Me.x,s.y*Me.y,s.x*Me.z,s.y*Me.w),z.viewport(a),K.updateMatrices(j,ce),n=K.getFrustum(),E(b,N,K.camera,j,this.type)}K.isPointLightShadow!==!0&&this.type===Ai&&y(K,N),K.needsUpdate=!1}m=this.type,f.needsUpdate=!1,r.setRenderTarget(B,x,T)};function y(A,b){const N=e.update(_);d.defines.VSM_SAMPLES!==A.blurSamples&&(d.defines.VSM_SAMPLES=A.blurSamples,p.defines.VSM_SAMPLES=A.blurSamples,d.needsUpdate=!0,p.needsUpdate=!0),A.mapPass===null&&(A.mapPass=new Mr(i.x,i.y)),d.uniforms.shadow_pass.value=A.map.texture,d.uniforms.resolution.value=A.mapSize,d.uniforms.radius.value=A.radius,r.setRenderTarget(A.mapPass),r.clear(),r.renderBufferDirect(b,null,N,d,_,null),p.uniforms.shadow_pass.value=A.mapPass.texture,p.uniforms.resolution.value=A.mapSize,p.uniforms.radius.value=A.radius,r.setRenderTarget(A.map),r.clear(),r.renderBufferDirect(b,null,N,p,_,null)}function v(A,b,N,B){let x=null;const T=N.isPointLight===!0?A.customDistanceMaterial:A.customDepthMaterial;if(T!==void 0)x=T;else if(x=N.isPointLight===!0?l:o,r.localClippingEnabled&&b.clipShadows===!0&&Array.isArray(b.clippingPlanes)&&b.clippingPlanes.length!==0||b.displacementMap&&b.displacementScale!==0||b.alphaMap&&b.alphaTest>0||b.map&&b.alphaTest>0){const z=x.uuid,$=b.uuid;let P=c[z];P===void 0&&(P={},c[z]=P);let O=P[$];O===void 0&&(O=x.clone(),P[$]=O,b.addEventListener("dispose",C)),x=O}if(x.visible=b.visible,x.wireframe=b.wireframe,B===Ai?x.side=b.shadowSide!==null?b.shadowSide:b.side:x.side=b.shadowSide!==null?b.shadowSide:h[b.side],x.alphaMap=b.alphaMap,x.alphaTest=b.alphaTest,x.map=b.map,x.clipShadows=b.clipShadows,x.clippingPlanes=b.clippingPlanes,x.clipIntersection=b.clipIntersection,x.displacementMap=b.displacementMap,x.displacementScale=b.displacementScale,x.displacementBias=b.displacementBias,x.wireframeLinewidth=b.wireframeLinewidth,x.linewidth=b.linewidth,N.isPointLight===!0&&x.isMeshDistanceMaterial===!0){const z=r.properties.get(x);z.light=N}return x}function E(A,b,N,B,x){if(A.visible===!1)return;if(A.layers.test(b.layers)&&(A.isMesh||A.isLine||A.isPoints)&&(A.castShadow||A.receiveShadow&&x===Ai)&&(!A.frustumCulled||n.intersectsObject(A))){A.modelViewMatrix.multiplyMatrices(N.matrixWorldInverse,A.matrixWorld);const $=e.update(A),P=A.material;if(Array.isArray(P)){const O=$.groups;for(let k=0,j=O.length;k<j;k++){const K=O[k],Y=P[K.materialIndex];if(Y&&Y.visible){const ae=v(A,Y,B,x);A.onBeforeShadow(r,A,b,N,$,ae,K),r.renderBufferDirect(N,null,$,ae,A,K),A.onAfterShadow(r,A,b,N,$,ae,K)}}}else if(P.visible){const O=v(A,P,B,x);A.onBeforeShadow(r,A,b,N,$,O,null),r.renderBufferDirect(N,null,$,O,A,null),A.onAfterShadow(r,A,b,N,$,O,null)}}const z=A.children;for(let $=0,P=z.length;$<P;$++)E(z[$],b,N,B,x)}function C(A){A.target.removeEventListener("dispose",C);for(const N in c){const B=c[N],x=A.target.uuid;x in B&&(B[x].dispose(),delete B[x])}}}function Zv(r,e,t){const n=t.isWebGL2;function i(){let I=!1;const ve=new Nt;let G=null;const de=new Nt(0,0,0,0);return{setMask:function(Q){G!==Q&&!I&&(r.colorMask(Q,Q,Q,Q),G=Q)},setLocked:function(Q){I=Q},setClear:function(Q,ge,Ue,mt,Tt){Tt===!0&&(Q*=mt,ge*=mt,Ue*=mt),ve.set(Q,ge,Ue,mt),de.equals(ve)===!1&&(r.clearColor(Q,ge,Ue,mt),de.copy(ve))},reset:function(){I=!1,G=null,de.set(-1,0,0,0)}}}function s(){let I=!1,ve=null,G=null,de=null;return{setTest:function(Q){Q?Ee(r.DEPTH_TEST):pt(r.DEPTH_TEST)},setMask:function(Q){ve!==Q&&!I&&(r.depthMask(Q),ve=Q)},setFunc:function(Q){if(G!==Q){switch(Q){case tf:r.depthFunc(r.NEVER);break;case nf:r.depthFunc(r.ALWAYS);break;case rf:r.depthFunc(r.LESS);break;case Sa:r.depthFunc(r.LEQUAL);break;case sf:r.depthFunc(r.EQUAL);break;case af:r.depthFunc(r.GEQUAL);break;case of:r.depthFunc(r.GREATER);break;case lf:r.depthFunc(r.NOTEQUAL);break;default:r.depthFunc(r.LEQUAL)}G=Q}},setLocked:function(Q){I=Q},setClear:function(Q){de!==Q&&(r.clearDepth(Q),de=Q)},reset:function(){I=!1,ve=null,G=null,de=null}}}function a(){let I=!1,ve=null,G=null,de=null,Q=null,ge=null,Ue=null,mt=null,Tt=null;return{setTest:function(nt){I||(nt?Ee(r.STENCIL_TEST):pt(r.STENCIL_TEST))},setMask:function(nt){ve!==nt&&!I&&(r.stencilMask(nt),ve=nt)},setFunc:function(nt,Bt,En){(G!==nt||de!==Bt||Q!==En)&&(r.stencilFunc(nt,Bt,En),G=nt,de=Bt,Q=En)},setOp:function(nt,Bt,En){(ge!==nt||Ue!==Bt||mt!==En)&&(r.stencilOp(nt,Bt,En),ge=nt,Ue=Bt,mt=En)},setLocked:function(nt){I=nt},setClear:function(nt){Tt!==nt&&(r.clearStencil(nt),Tt=nt)},reset:function(){I=!1,ve=null,G=null,de=null,Q=null,ge=null,Ue=null,mt=null,Tt=null}}}const o=new i,l=new s,c=new a,u=new WeakMap,h=new WeakMap;let d={},p={},g=new WeakMap,_=[],f=null,m=!1,y=null,v=null,E=null,C=null,A=null,b=null,N=null,B=new Ye(0,0,0),x=0,T=!1,z=null,$=null,P=null,O=null,k=null;const j=r.getParameter(r.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let K=!1,Y=0;const ae=r.getParameter(r.VERSION);ae.indexOf("WebGL")!==-1?(Y=parseFloat(/^WebGL (\d)/.exec(ae)[1]),K=Y>=1):ae.indexOf("OpenGL ES")!==-1&&(Y=parseFloat(/^OpenGL ES (\d)/.exec(ae)[1]),K=Y>=2);let ce=null,Me={};const Be=r.getParameter(r.SCISSOR_BOX),V=r.getParameter(r.VIEWPORT),se=new Nt().fromArray(Be),ye=new Nt().fromArray(V);function ke(I,ve,G,de){const Q=new Uint8Array(4),ge=r.createTexture();r.bindTexture(I,ge),r.texParameteri(I,r.TEXTURE_MIN_FILTER,r.NEAREST),r.texParameteri(I,r.TEXTURE_MAG_FILTER,r.NEAREST);for(let Ue=0;Ue<G;Ue++)n&&(I===r.TEXTURE_3D||I===r.TEXTURE_2D_ARRAY)?r.texImage3D(ve,0,r.RGBA,1,1,de,0,r.RGBA,r.UNSIGNED_BYTE,Q):r.texImage2D(ve+Ue,0,r.RGBA,1,1,0,r.RGBA,r.UNSIGNED_BYTE,Q);return ge}const Ae={};Ae[r.TEXTURE_2D]=ke(r.TEXTURE_2D,r.TEXTURE_2D,1),Ae[r.TEXTURE_CUBE_MAP]=ke(r.TEXTURE_CUBE_MAP,r.TEXTURE_CUBE_MAP_POSITIVE_X,6),n&&(Ae[r.TEXTURE_2D_ARRAY]=ke(r.TEXTURE_2D_ARRAY,r.TEXTURE_2D_ARRAY,1,1),Ae[r.TEXTURE_3D]=ke(r.TEXTURE_3D,r.TEXTURE_3D,1,1)),o.setClear(0,0,0,1),l.setClear(1),c.setClear(0),Ee(r.DEPTH_TEST),l.setFunc(Sa),Xe(!1),Ke(Vl),Ee(r.CULL_FACE),Ne($i);function Ee(I){d[I]!==!0&&(r.enable(I),d[I]=!0)}function pt(I){d[I]!==!1&&(r.disable(I),d[I]=!1)}function We(I,ve){return p[I]!==ve?(r.bindFramebuffer(I,ve),p[I]=ve,n&&(I===r.DRAW_FRAMEBUFFER&&(p[r.FRAMEBUFFER]=ve),I===r.FRAMEBUFFER&&(p[r.DRAW_FRAMEBUFFER]=ve)),!0):!1}function U(I,ve){let G=_,de=!1;if(I){G=g.get(ve),G===void 0&&(G=[],g.set(ve,G));const Q=I.textures;if(G.length!==Q.length||G[0]!==r.COLOR_ATTACHMENT0){for(let ge=0,Ue=Q.length;ge<Ue;ge++)G[ge]=r.COLOR_ATTACHMENT0+ge;G.length=Q.length,de=!0}}else G[0]!==r.BACK&&(G[0]=r.BACK,de=!0);if(de)if(t.isWebGL2)r.drawBuffers(G);else if(e.has("WEBGL_draw_buffers")===!0)e.get("WEBGL_draw_buffers").drawBuffersWEBGL(G);else throw new Error("THREE.WebGLState: Usage of gl.drawBuffers() require WebGL2 or WEBGL_draw_buffers extension")}function Pt(I){return f!==I?(r.useProgram(I),f=I,!0):!1}const Ie={[mr]:r.FUNC_ADD,[zd]:r.FUNC_SUBTRACT,[Hd]:r.FUNC_REVERSE_SUBTRACT};if(n)Ie[jl]=r.MIN,Ie[Yl]=r.MAX;else{const I=e.get("EXT_blend_minmax");I!==null&&(Ie[jl]=I.MIN_EXT,Ie[Yl]=I.MAX_EXT)}const Oe={[Gd]:r.ZERO,[Vd]:r.ONE,[Wd]:r.SRC_COLOR,[ko]:r.SRC_ALPHA,[$d]:r.SRC_ALPHA_SATURATE,[Yd]:r.DST_COLOR,[qd]:r.DST_ALPHA,[Xd]:r.ONE_MINUS_SRC_COLOR,[zo]:r.ONE_MINUS_SRC_ALPHA,[Kd]:r.ONE_MINUS_DST_COLOR,[jd]:r.ONE_MINUS_DST_ALPHA,[Zd]:r.CONSTANT_COLOR,[Jd]:r.ONE_MINUS_CONSTANT_COLOR,[Qd]:r.CONSTANT_ALPHA,[ef]:r.ONE_MINUS_CONSTANT_ALPHA};function Ne(I,ve,G,de,Q,ge,Ue,mt,Tt,nt){if(I===$i){m===!0&&(pt(r.BLEND),m=!1);return}if(m===!1&&(Ee(r.BLEND),m=!0),I!==kd){if(I!==y||nt!==T){if((v!==mr||A!==mr)&&(r.blendEquation(r.FUNC_ADD),v=mr,A=mr),nt)switch(I){case jr:r.blendFuncSeparate(r.ONE,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case Wl:r.blendFunc(r.ONE,r.ONE);break;case Xl:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case ql:r.blendFuncSeparate(r.ZERO,r.SRC_COLOR,r.ZERO,r.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",I);break}else switch(I){case jr:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case Wl:r.blendFunc(r.SRC_ALPHA,r.ONE);break;case Xl:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case ql:r.blendFunc(r.ZERO,r.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",I);break}E=null,C=null,b=null,N=null,B.set(0,0,0),x=0,y=I,T=nt}return}Q=Q||ve,ge=ge||G,Ue=Ue||de,(ve!==v||Q!==A)&&(r.blendEquationSeparate(Ie[ve],Ie[Q]),v=ve,A=Q),(G!==E||de!==C||ge!==b||Ue!==N)&&(r.blendFuncSeparate(Oe[G],Oe[de],Oe[ge],Oe[Ue]),E=G,C=de,b=ge,N=Ue),(mt.equals(B)===!1||Tt!==x)&&(r.blendColor(mt.r,mt.g,mt.b,Tt),B.copy(mt),x=Tt),y=I,T=!1}function je(I,ve){I.side===si?pt(r.CULL_FACE):Ee(r.CULL_FACE);let G=I.side===Pn;ve&&(G=!G),Xe(G),I.blending===jr&&I.transparent===!1?Ne($i):Ne(I.blending,I.blendEquation,I.blendSrc,I.blendDst,I.blendEquationAlpha,I.blendSrcAlpha,I.blendDstAlpha,I.blendColor,I.blendAlpha,I.premultipliedAlpha),l.setFunc(I.depthFunc),l.setTest(I.depthTest),l.setMask(I.depthWrite),o.setMask(I.colorWrite);const de=I.stencilWrite;c.setTest(de),de&&(c.setMask(I.stencilWriteMask),c.setFunc(I.stencilFunc,I.stencilRef,I.stencilFuncMask),c.setOp(I.stencilFail,I.stencilZFail,I.stencilZPass)),w(I.polygonOffset,I.polygonOffsetFactor,I.polygonOffsetUnits),I.alphaToCoverage===!0?Ee(r.SAMPLE_ALPHA_TO_COVERAGE):pt(r.SAMPLE_ALPHA_TO_COVERAGE)}function Xe(I){z!==I&&(I?r.frontFace(r.CW):r.frontFace(r.CCW),z=I)}function Ke(I){I!==Fd?(Ee(r.CULL_FACE),I!==$&&(I===Vl?r.cullFace(r.BACK):I===Od?r.cullFace(r.FRONT):r.cullFace(r.FRONT_AND_BACK))):pt(r.CULL_FACE),$=I}function Mt(I){I!==P&&(K&&r.lineWidth(I),P=I)}function w(I,ve,G){I?(Ee(r.POLYGON_OFFSET_FILL),(O!==ve||k!==G)&&(r.polygonOffset(ve,G),O=ve,k=G)):pt(r.POLYGON_OFFSET_FILL)}function M(I){I?Ee(r.SCISSOR_TEST):pt(r.SCISSOR_TEST)}function X(I){I===void 0&&(I=r.TEXTURE0+j-1),ce!==I&&(r.activeTexture(I),ce=I)}function Z(I,ve,G){G===void 0&&(ce===null?G=r.TEXTURE0+j-1:G=ce);let de=Me[G];de===void 0&&(de={type:void 0,texture:void 0},Me[G]=de),(de.type!==I||de.texture!==ve)&&(ce!==G&&(r.activeTexture(G),ce=G),r.bindTexture(I,ve||Ae[I]),de.type=I,de.texture=ve)}function ie(){const I=Me[ce];I!==void 0&&I.type!==void 0&&(r.bindTexture(I.type,null),I.type=void 0,I.texture=void 0)}function re(){try{r.compressedTexImage2D.apply(r,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function et(){try{r.compressedTexImage3D.apply(r,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function Fe(){try{r.texSubImage2D.apply(r,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function pe(){try{r.texSubImage3D.apply(r,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function xe(){try{r.compressedTexSubImage2D.apply(r,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function $e(){try{r.compressedTexSubImage3D.apply(r,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function ue(){try{r.texStorage2D.apply(r,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function Ot(){try{r.texStorage3D.apply(r,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function tt(){try{r.texImage2D.apply(r,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function De(){try{r.texImage3D.apply(r,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function be(I){se.equals(I)===!1&&(r.scissor(I.x,I.y,I.z,I.w),se.copy(I))}function Re(I){ye.equals(I)===!1&&(r.viewport(I.x,I.y,I.z,I.w),ye.copy(I))}function at(I,ve){let G=h.get(ve);G===void 0&&(G=new WeakMap,h.set(ve,G));let de=G.get(I);de===void 0&&(de=r.getUniformBlockIndex(ve,I.name),G.set(I,de))}function Ze(I,ve){const de=h.get(ve).get(I);u.get(ve)!==de&&(r.uniformBlockBinding(ve,de,I.__bindingPointIndex),u.set(ve,de))}function yt(){r.disable(r.BLEND),r.disable(r.CULL_FACE),r.disable(r.DEPTH_TEST),r.disable(r.POLYGON_OFFSET_FILL),r.disable(r.SCISSOR_TEST),r.disable(r.STENCIL_TEST),r.disable(r.SAMPLE_ALPHA_TO_COVERAGE),r.blendEquation(r.FUNC_ADD),r.blendFunc(r.ONE,r.ZERO),r.blendFuncSeparate(r.ONE,r.ZERO,r.ONE,r.ZERO),r.blendColor(0,0,0,0),r.colorMask(!0,!0,!0,!0),r.clearColor(0,0,0,0),r.depthMask(!0),r.depthFunc(r.LESS),r.clearDepth(1),r.stencilMask(4294967295),r.stencilFunc(r.ALWAYS,0,4294967295),r.stencilOp(r.KEEP,r.KEEP,r.KEEP),r.clearStencil(0),r.cullFace(r.BACK),r.frontFace(r.CCW),r.polygonOffset(0,0),r.activeTexture(r.TEXTURE0),r.bindFramebuffer(r.FRAMEBUFFER,null),n===!0&&(r.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),r.bindFramebuffer(r.READ_FRAMEBUFFER,null)),r.useProgram(null),r.lineWidth(1),r.scissor(0,0,r.canvas.width,r.canvas.height),r.viewport(0,0,r.canvas.width,r.canvas.height),d={},ce=null,Me={},p={},g=new WeakMap,_=[],f=null,m=!1,y=null,v=null,E=null,C=null,A=null,b=null,N=null,B=new Ye(0,0,0),x=0,T=!1,z=null,$=null,P=null,O=null,k=null,se.set(0,0,r.canvas.width,r.canvas.height),ye.set(0,0,r.canvas.width,r.canvas.height),o.reset(),l.reset(),c.reset()}return{buffers:{color:o,depth:l,stencil:c},enable:Ee,disable:pt,bindFramebuffer:We,drawBuffers:U,useProgram:Pt,setBlending:Ne,setMaterial:je,setFlipSided:Xe,setCullFace:Ke,setLineWidth:Mt,setPolygonOffset:w,setScissorTest:M,activeTexture:X,bindTexture:Z,unbindTexture:ie,compressedTexImage2D:re,compressedTexImage3D:et,texImage2D:tt,texImage3D:De,updateUBOMapping:at,uniformBlockBinding:Ze,texStorage2D:ue,texStorage3D:Ot,texSubImage2D:Fe,texSubImage3D:pe,compressedTexSubImage2D:xe,compressedTexSubImage3D:$e,scissor:be,viewport:Re,reset:yt}}function Jv(r,e,t,n,i,s,a){const o=i.isWebGL2,l=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),u=new Se,h=new WeakMap;let d;const p=new WeakMap;let g=!1;try{g=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function _(w,M){return g?new OffscreenCanvas(w,M):Fs("canvas")}function f(w,M,X,Z){let ie=1;const re=Mt(w);if((re.width>Z||re.height>Z)&&(ie=Z/Math.max(re.width,re.height)),ie<1||M===!0)if(typeof HTMLImageElement<"u"&&w instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&w instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&w instanceof ImageBitmap||typeof VideoFrame<"u"&&w instanceof VideoFrame){const et=M?Ra:Math.floor,Fe=et(ie*re.width),pe=et(ie*re.height);d===void 0&&(d=_(Fe,pe));const xe=X?_(Fe,pe):d;return xe.width=Fe,xe.height=pe,xe.getContext("2d").drawImage(w,0,0,Fe,pe),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+re.width+"x"+re.height+") to ("+Fe+"x"+pe+")."),xe}else return"data"in w&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+re.width+"x"+re.height+")."),w;return w}function m(w){const M=Mt(w);return jo(M.width)&&jo(M.height)}function y(w){return o?!1:w.wrapS!==Wn||w.wrapT!==Wn||w.minFilter!==cn&&w.minFilter!==Sn}function v(w,M){return w.generateMipmaps&&M&&w.minFilter!==cn&&w.minFilter!==Sn}function E(w){r.generateMipmap(w)}function C(w,M,X,Z,ie=!1){if(o===!1)return M;if(w!==null){if(r[w]!==void 0)return r[w];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+w+"'")}let re=M;if(M===r.RED&&(X===r.FLOAT&&(re=r.R32F),X===r.HALF_FLOAT&&(re=r.R16F),X===r.UNSIGNED_BYTE&&(re=r.R8)),M===r.RED_INTEGER&&(X===r.UNSIGNED_BYTE&&(re=r.R8UI),X===r.UNSIGNED_SHORT&&(re=r.R16UI),X===r.UNSIGNED_INT&&(re=r.R32UI),X===r.BYTE&&(re=r.R8I),X===r.SHORT&&(re=r.R16I),X===r.INT&&(re=r.R32I)),M===r.RG&&(X===r.FLOAT&&(re=r.RG32F),X===r.HALF_FLOAT&&(re=r.RG16F),X===r.UNSIGNED_BYTE&&(re=r.RG8)),M===r.RG_INTEGER&&(X===r.UNSIGNED_BYTE&&(re=r.RG8UI),X===r.UNSIGNED_SHORT&&(re=r.RG16UI),X===r.UNSIGNED_INT&&(re=r.RG32UI),X===r.BYTE&&(re=r.RG8I),X===r.SHORT&&(re=r.RG16I),X===r.INT&&(re=r.RG32I)),M===r.RGBA){const et=ie?ba:bt.getTransfer(Z);X===r.FLOAT&&(re=r.RGBA32F),X===r.HALF_FLOAT&&(re=r.RGBA16F),X===r.UNSIGNED_BYTE&&(re=et===Ht?r.SRGB8_ALPHA8:r.RGBA8),X===r.UNSIGNED_SHORT_4_4_4_4&&(re=r.RGBA4),X===r.UNSIGNED_SHORT_5_5_5_1&&(re=r.RGB5_A1)}return(re===r.R16F||re===r.R32F||re===r.RG16F||re===r.RG32F||re===r.RGBA16F||re===r.RGBA32F)&&e.get("EXT_color_buffer_float"),re}function A(w,M,X){return v(w,X)===!0||w.isFramebufferTexture&&w.minFilter!==cn&&w.minFilter!==Sn?Math.log2(Math.max(M.width,M.height))+1:w.mipmaps!==void 0&&w.mipmaps.length>0?w.mipmaps.length:w.isCompressedTexture&&Array.isArray(w.image)?M.mipmaps.length:1}function b(w){return w===cn||w===Vo||w===Vr?r.NEAREST:r.LINEAR}function N(w){const M=w.target;M.removeEventListener("dispose",N),x(M),M.isVideoTexture&&h.delete(M)}function B(w){const M=w.target;M.removeEventListener("dispose",B),z(M)}function x(w){const M=n.get(w);if(M.__webglInit===void 0)return;const X=w.source,Z=p.get(X);if(Z){const ie=Z[M.__cacheKey];ie.usedTimes--,ie.usedTimes===0&&T(w),Object.keys(Z).length===0&&p.delete(X)}n.remove(w)}function T(w){const M=n.get(w);r.deleteTexture(M.__webglTexture);const X=w.source,Z=p.get(X);delete Z[M.__cacheKey],a.memory.textures--}function z(w){const M=n.get(w);if(w.depthTexture&&w.depthTexture.dispose(),w.isWebGLCubeRenderTarget)for(let Z=0;Z<6;Z++){if(Array.isArray(M.__webglFramebuffer[Z]))for(let ie=0;ie<M.__webglFramebuffer[Z].length;ie++)r.deleteFramebuffer(M.__webglFramebuffer[Z][ie]);else r.deleteFramebuffer(M.__webglFramebuffer[Z]);M.__webglDepthbuffer&&r.deleteRenderbuffer(M.__webglDepthbuffer[Z])}else{if(Array.isArray(M.__webglFramebuffer))for(let Z=0;Z<M.__webglFramebuffer.length;Z++)r.deleteFramebuffer(M.__webglFramebuffer[Z]);else r.deleteFramebuffer(M.__webglFramebuffer);if(M.__webglDepthbuffer&&r.deleteRenderbuffer(M.__webglDepthbuffer),M.__webglMultisampledFramebuffer&&r.deleteFramebuffer(M.__webglMultisampledFramebuffer),M.__webglColorRenderbuffer)for(let Z=0;Z<M.__webglColorRenderbuffer.length;Z++)M.__webglColorRenderbuffer[Z]&&r.deleteRenderbuffer(M.__webglColorRenderbuffer[Z]);M.__webglDepthRenderbuffer&&r.deleteRenderbuffer(M.__webglDepthRenderbuffer)}const X=w.textures;for(let Z=0,ie=X.length;Z<ie;Z++){const re=n.get(X[Z]);re.__webglTexture&&(r.deleteTexture(re.__webglTexture),a.memory.textures--),n.remove(X[Z])}n.remove(w)}let $=0;function P(){$=0}function O(){const w=$;return w>=i.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+w+" texture units while this GPU supports only "+i.maxTextures),$+=1,w}function k(w){const M=[];return M.push(w.wrapS),M.push(w.wrapT),M.push(w.wrapR||0),M.push(w.magFilter),M.push(w.minFilter),M.push(w.anisotropy),M.push(w.internalFormat),M.push(w.format),M.push(w.type),M.push(w.generateMipmaps),M.push(w.premultiplyAlpha),M.push(w.flipY),M.push(w.unpackAlignment),M.push(w.colorSpace),M.join()}function j(w,M){const X=n.get(w);if(w.isVideoTexture&&Xe(w),w.isRenderTargetTexture===!1&&w.version>0&&X.__version!==w.version){const Z=w.image;if(Z===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(Z.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{ye(X,w,M);return}}t.bindTexture(r.TEXTURE_2D,X.__webglTexture,r.TEXTURE0+M)}function K(w,M){const X=n.get(w);if(w.version>0&&X.__version!==w.version){ye(X,w,M);return}t.bindTexture(r.TEXTURE_2D_ARRAY,X.__webglTexture,r.TEXTURE0+M)}function Y(w,M){const X=n.get(w);if(w.version>0&&X.__version!==w.version){ye(X,w,M);return}t.bindTexture(r.TEXTURE_3D,X.__webglTexture,r.TEXTURE0+M)}function ae(w,M){const X=n.get(w);if(w.version>0&&X.__version!==w.version){ke(X,w,M);return}t.bindTexture(r.TEXTURE_CUBE_MAP,X.__webglTexture,r.TEXTURE0+M)}const ce={[Qr]:r.REPEAT,[Wn]:r.CLAMP_TO_EDGE,[Ea]:r.MIRRORED_REPEAT},Me={[cn]:r.NEAREST,[Vo]:r.NEAREST_MIPMAP_NEAREST,[Vr]:r.NEAREST_MIPMAP_LINEAR,[Sn]:r.LINEAR,[Ma]:r.LINEAR_MIPMAP_NEAREST,[wi]:r.LINEAR_MIPMAP_LINEAR},Be={[Pf]:r.NEVER,[Of]:r.ALWAYS,[If]:r.LESS,[sh]:r.LEQUAL,[Df]:r.EQUAL,[Ff]:r.GEQUAL,[Nf]:r.GREATER,[Uf]:r.NOTEQUAL};function V(w,M,X){if(M.type===Jn&&e.has("OES_texture_float_linear")===!1&&(M.magFilter===Sn||M.magFilter===Ma||M.magFilter===Vr||M.magFilter===wi||M.minFilter===Sn||M.minFilter===Ma||M.minFilter===Vr||M.minFilter===wi)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),X?(r.texParameteri(w,r.TEXTURE_WRAP_S,ce[M.wrapS]),r.texParameteri(w,r.TEXTURE_WRAP_T,ce[M.wrapT]),(w===r.TEXTURE_3D||w===r.TEXTURE_2D_ARRAY)&&r.texParameteri(w,r.TEXTURE_WRAP_R,ce[M.wrapR]),r.texParameteri(w,r.TEXTURE_MAG_FILTER,Me[M.magFilter]),r.texParameteri(w,r.TEXTURE_MIN_FILTER,Me[M.minFilter])):(r.texParameteri(w,r.TEXTURE_WRAP_S,r.CLAMP_TO_EDGE),r.texParameteri(w,r.TEXTURE_WRAP_T,r.CLAMP_TO_EDGE),(w===r.TEXTURE_3D||w===r.TEXTURE_2D_ARRAY)&&r.texParameteri(w,r.TEXTURE_WRAP_R,r.CLAMP_TO_EDGE),(M.wrapS!==Wn||M.wrapT!==Wn)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),r.texParameteri(w,r.TEXTURE_MAG_FILTER,b(M.magFilter)),r.texParameteri(w,r.TEXTURE_MIN_FILTER,b(M.minFilter)),M.minFilter!==cn&&M.minFilter!==Sn&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),M.compareFunction&&(r.texParameteri(w,r.TEXTURE_COMPARE_MODE,r.COMPARE_REF_TO_TEXTURE),r.texParameteri(w,r.TEXTURE_COMPARE_FUNC,Be[M.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(M.magFilter===cn||M.minFilter!==Vr&&M.minFilter!==wi||M.type===Jn&&e.has("OES_texture_float_linear")===!1||o===!1&&M.type===Ns&&e.has("OES_texture_half_float_linear")===!1)return;if(M.anisotropy>1||n.get(M).__currentAnisotropy){const Z=e.get("EXT_texture_filter_anisotropic");r.texParameterf(w,Z.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(M.anisotropy,i.getMaxAnisotropy())),n.get(M).__currentAnisotropy=M.anisotropy}}}function se(w,M){let X=!1;w.__webglInit===void 0&&(w.__webglInit=!0,M.addEventListener("dispose",N));const Z=M.source;let ie=p.get(Z);ie===void 0&&(ie={},p.set(Z,ie));const re=k(M);if(re!==w.__cacheKey){ie[re]===void 0&&(ie[re]={texture:r.createTexture(),usedTimes:0},a.memory.textures++,X=!0),ie[re].usedTimes++;const et=ie[w.__cacheKey];et!==void 0&&(ie[w.__cacheKey].usedTimes--,et.usedTimes===0&&T(M)),w.__cacheKey=re,w.__webglTexture=ie[re].texture}return X}function ye(w,M,X){let Z=r.TEXTURE_2D;(M.isDataArrayTexture||M.isCompressedArrayTexture)&&(Z=r.TEXTURE_2D_ARRAY),M.isData3DTexture&&(Z=r.TEXTURE_3D);const ie=se(w,M),re=M.source;t.bindTexture(Z,w.__webglTexture,r.TEXTURE0+X);const et=n.get(re);if(re.version!==et.__version||ie===!0){t.activeTexture(r.TEXTURE0+X);const Fe=bt.getPrimaries(bt.workingColorSpace),pe=M.colorSpace===qi?null:bt.getPrimaries(M.colorSpace),xe=M.colorSpace===qi||Fe===pe?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,M.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,M.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,xe);const $e=y(M)&&m(M.image)===!1;let ue=f(M.image,$e,!1,i.maxTextureSize);ue=Ke(M,ue);const Ot=m(ue)||o,tt=s.convert(M.format,M.colorSpace);let De=s.convert(M.type),be=C(M.internalFormat,tt,De,M.colorSpace,M.isVideoTexture);V(Z,M,Ot);let Re;const at=M.mipmaps,Ze=o&&M.isVideoTexture!==!0&&be!==nh,yt=et.__version===void 0||ie===!0,I=re.dataReady,ve=A(M,ue,Ot);if(M.isDepthTexture)be=r.DEPTH_COMPONENT,o?M.type===Jn?be=r.DEPTH_COMPONENT32F:M.type===Yi?be=r.DEPTH_COMPONENT24:M.type===vr?be=r.DEPTH24_STENCIL8:be=r.DEPTH_COMPONENT16:M.type===Jn&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),M.format===xr&&be===r.DEPTH_COMPONENT&&M.type!==al&&M.type!==Yi&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),M.type=Yi,De=s.convert(M.type)),M.format===es&&be===r.DEPTH_COMPONENT&&(be=r.DEPTH_STENCIL,M.type!==vr&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),M.type=vr,De=s.convert(M.type))),yt&&(Ze?t.texStorage2D(r.TEXTURE_2D,1,be,ue.width,ue.height):t.texImage2D(r.TEXTURE_2D,0,be,ue.width,ue.height,0,tt,De,null));else if(M.isDataTexture)if(at.length>0&&Ot){Ze&&yt&&t.texStorage2D(r.TEXTURE_2D,ve,be,at[0].width,at[0].height);for(let G=0,de=at.length;G<de;G++)Re=at[G],Ze?I&&t.texSubImage2D(r.TEXTURE_2D,G,0,0,Re.width,Re.height,tt,De,Re.data):t.texImage2D(r.TEXTURE_2D,G,be,Re.width,Re.height,0,tt,De,Re.data);M.generateMipmaps=!1}else Ze?(yt&&t.texStorage2D(r.TEXTURE_2D,ve,be,ue.width,ue.height),I&&t.texSubImage2D(r.TEXTURE_2D,0,0,0,ue.width,ue.height,tt,De,ue.data)):t.texImage2D(r.TEXTURE_2D,0,be,ue.width,ue.height,0,tt,De,ue.data);else if(M.isCompressedTexture)if(M.isCompressedArrayTexture){Ze&&yt&&t.texStorage3D(r.TEXTURE_2D_ARRAY,ve,be,at[0].width,at[0].height,ue.depth);for(let G=0,de=at.length;G<de;G++)Re=at[G],M.format!==Xn?tt!==null?Ze?I&&t.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,G,0,0,0,Re.width,Re.height,ue.depth,tt,Re.data,0,0):t.compressedTexImage3D(r.TEXTURE_2D_ARRAY,G,be,Re.width,Re.height,ue.depth,0,Re.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ze?I&&t.texSubImage3D(r.TEXTURE_2D_ARRAY,G,0,0,0,Re.width,Re.height,ue.depth,tt,De,Re.data):t.texImage3D(r.TEXTURE_2D_ARRAY,G,be,Re.width,Re.height,ue.depth,0,tt,De,Re.data)}else{Ze&&yt&&t.texStorage2D(r.TEXTURE_2D,ve,be,at[0].width,at[0].height);for(let G=0,de=at.length;G<de;G++)Re=at[G],M.format!==Xn?tt!==null?Ze?I&&t.compressedTexSubImage2D(r.TEXTURE_2D,G,0,0,Re.width,Re.height,tt,Re.data):t.compressedTexImage2D(r.TEXTURE_2D,G,be,Re.width,Re.height,0,Re.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ze?I&&t.texSubImage2D(r.TEXTURE_2D,G,0,0,Re.width,Re.height,tt,De,Re.data):t.texImage2D(r.TEXTURE_2D,G,be,Re.width,Re.height,0,tt,De,Re.data)}else if(M.isDataArrayTexture)Ze?(yt&&t.texStorage3D(r.TEXTURE_2D_ARRAY,ve,be,ue.width,ue.height,ue.depth),I&&t.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,0,ue.width,ue.height,ue.depth,tt,De,ue.data)):t.texImage3D(r.TEXTURE_2D_ARRAY,0,be,ue.width,ue.height,ue.depth,0,tt,De,ue.data);else if(M.isData3DTexture)Ze?(yt&&t.texStorage3D(r.TEXTURE_3D,ve,be,ue.width,ue.height,ue.depth),I&&t.texSubImage3D(r.TEXTURE_3D,0,0,0,0,ue.width,ue.height,ue.depth,tt,De,ue.data)):t.texImage3D(r.TEXTURE_3D,0,be,ue.width,ue.height,ue.depth,0,tt,De,ue.data);else if(M.isFramebufferTexture){if(yt)if(Ze)t.texStorage2D(r.TEXTURE_2D,ve,be,ue.width,ue.height);else{let G=ue.width,de=ue.height;for(let Q=0;Q<ve;Q++)t.texImage2D(r.TEXTURE_2D,Q,be,G,de,0,tt,De,null),G>>=1,de>>=1}}else if(at.length>0&&Ot){if(Ze&&yt){const G=Mt(at[0]);t.texStorage2D(r.TEXTURE_2D,ve,be,G.width,G.height)}for(let G=0,de=at.length;G<de;G++)Re=at[G],Ze?I&&t.texSubImage2D(r.TEXTURE_2D,G,0,0,tt,De,Re):t.texImage2D(r.TEXTURE_2D,G,be,tt,De,Re);M.generateMipmaps=!1}else if(Ze){if(yt){const G=Mt(ue);t.texStorage2D(r.TEXTURE_2D,ve,be,G.width,G.height)}I&&t.texSubImage2D(r.TEXTURE_2D,0,0,0,tt,De,ue)}else t.texImage2D(r.TEXTURE_2D,0,be,tt,De,ue);v(M,Ot)&&E(Z),et.__version=re.version,M.onUpdate&&M.onUpdate(M)}w.__version=M.version}function ke(w,M,X){if(M.image.length!==6)return;const Z=se(w,M),ie=M.source;t.bindTexture(r.TEXTURE_CUBE_MAP,w.__webglTexture,r.TEXTURE0+X);const re=n.get(ie);if(ie.version!==re.__version||Z===!0){t.activeTexture(r.TEXTURE0+X);const et=bt.getPrimaries(bt.workingColorSpace),Fe=M.colorSpace===qi?null:bt.getPrimaries(M.colorSpace),pe=M.colorSpace===qi||et===Fe?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,M.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,M.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,pe);const xe=M.isCompressedTexture||M.image[0].isCompressedTexture,$e=M.image[0]&&M.image[0].isDataTexture,ue=[];for(let G=0;G<6;G++)!xe&&!$e?ue[G]=f(M.image[G],!1,!0,i.maxCubemapSize):ue[G]=$e?M.image[G].image:M.image[G],ue[G]=Ke(M,ue[G]);const Ot=ue[0],tt=m(Ot)||o,De=s.convert(M.format,M.colorSpace),be=s.convert(M.type),Re=C(M.internalFormat,De,be,M.colorSpace),at=o&&M.isVideoTexture!==!0,Ze=re.__version===void 0||Z===!0,yt=ie.dataReady;let I=A(M,Ot,tt);V(r.TEXTURE_CUBE_MAP,M,tt);let ve;if(xe){at&&Ze&&t.texStorage2D(r.TEXTURE_CUBE_MAP,I,Re,Ot.width,Ot.height);for(let G=0;G<6;G++){ve=ue[G].mipmaps;for(let de=0;de<ve.length;de++){const Q=ve[de];M.format!==Xn?De!==null?at?yt&&t.compressedTexSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+G,de,0,0,Q.width,Q.height,De,Q.data):t.compressedTexImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+G,de,Re,Q.width,Q.height,0,Q.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):at?yt&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+G,de,0,0,Q.width,Q.height,De,be,Q.data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+G,de,Re,Q.width,Q.height,0,De,be,Q.data)}}}else{if(ve=M.mipmaps,at&&Ze){ve.length>0&&I++;const G=Mt(ue[0]);t.texStorage2D(r.TEXTURE_CUBE_MAP,I,Re,G.width,G.height)}for(let G=0;G<6;G++)if($e){at?yt&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+G,0,0,0,ue[G].width,ue[G].height,De,be,ue[G].data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+G,0,Re,ue[G].width,ue[G].height,0,De,be,ue[G].data);for(let de=0;de<ve.length;de++){const ge=ve[de].image[G].image;at?yt&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+G,de+1,0,0,ge.width,ge.height,De,be,ge.data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+G,de+1,Re,ge.width,ge.height,0,De,be,ge.data)}}else{at?yt&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+G,0,0,0,De,be,ue[G]):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+G,0,Re,De,be,ue[G]);for(let de=0;de<ve.length;de++){const Q=ve[de];at?yt&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+G,de+1,0,0,De,be,Q.image[G]):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+G,de+1,Re,De,be,Q.image[G])}}}v(M,tt)&&E(r.TEXTURE_CUBE_MAP),re.__version=ie.version,M.onUpdate&&M.onUpdate(M)}w.__version=M.version}function Ae(w,M,X,Z,ie,re){const et=s.convert(X.format,X.colorSpace),Fe=s.convert(X.type),pe=C(X.internalFormat,et,Fe,X.colorSpace);if(!n.get(M).__hasExternalTextures){const $e=Math.max(1,M.width>>re),ue=Math.max(1,M.height>>re);ie===r.TEXTURE_3D||ie===r.TEXTURE_2D_ARRAY?t.texImage3D(ie,re,pe,$e,ue,M.depth,0,et,Fe,null):t.texImage2D(ie,re,pe,$e,ue,0,et,Fe,null)}t.bindFramebuffer(r.FRAMEBUFFER,w),je(M)?l.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,Z,ie,n.get(X).__webglTexture,0,Ne(M)):(ie===r.TEXTURE_2D||ie>=r.TEXTURE_CUBE_MAP_POSITIVE_X&&ie<=r.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&r.framebufferTexture2D(r.FRAMEBUFFER,Z,ie,n.get(X).__webglTexture,re),t.bindFramebuffer(r.FRAMEBUFFER,null)}function Ee(w,M,X){if(r.bindRenderbuffer(r.RENDERBUFFER,w),M.depthBuffer&&!M.stencilBuffer){let Z=o===!0?r.DEPTH_COMPONENT24:r.DEPTH_COMPONENT16;if(X||je(M)){const ie=M.depthTexture;ie&&ie.isDepthTexture&&(ie.type===Jn?Z=r.DEPTH_COMPONENT32F:ie.type===Yi&&(Z=r.DEPTH_COMPONENT24));const re=Ne(M);je(M)?l.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,re,Z,M.width,M.height):r.renderbufferStorageMultisample(r.RENDERBUFFER,re,Z,M.width,M.height)}else r.renderbufferStorage(r.RENDERBUFFER,Z,M.width,M.height);r.framebufferRenderbuffer(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.RENDERBUFFER,w)}else if(M.depthBuffer&&M.stencilBuffer){const Z=Ne(M);X&&je(M)===!1?r.renderbufferStorageMultisample(r.RENDERBUFFER,Z,r.DEPTH24_STENCIL8,M.width,M.height):je(M)?l.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,Z,r.DEPTH24_STENCIL8,M.width,M.height):r.renderbufferStorage(r.RENDERBUFFER,r.DEPTH_STENCIL,M.width,M.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.DEPTH_STENCIL_ATTACHMENT,r.RENDERBUFFER,w)}else{const Z=M.textures;for(let ie=0;ie<Z.length;ie++){const re=Z[ie],et=s.convert(re.format,re.colorSpace),Fe=s.convert(re.type),pe=C(re.internalFormat,et,Fe,re.colorSpace),xe=Ne(M);X&&je(M)===!1?r.renderbufferStorageMultisample(r.RENDERBUFFER,xe,pe,M.width,M.height):je(M)?l.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,xe,pe,M.width,M.height):r.renderbufferStorage(r.RENDERBUFFER,pe,M.width,M.height)}}r.bindRenderbuffer(r.RENDERBUFFER,null)}function pt(w,M){if(M&&M.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(r.FRAMEBUFFER,w),!(M.depthTexture&&M.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!n.get(M.depthTexture).__webglTexture||M.depthTexture.image.width!==M.width||M.depthTexture.image.height!==M.height)&&(M.depthTexture.image.width=M.width,M.depthTexture.image.height=M.height,M.depthTexture.needsUpdate=!0),j(M.depthTexture,0);const Z=n.get(M.depthTexture).__webglTexture,ie=Ne(M);if(M.depthTexture.format===xr)je(M)?l.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.TEXTURE_2D,Z,0,ie):r.framebufferTexture2D(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.TEXTURE_2D,Z,0);else if(M.depthTexture.format===es)je(M)?l.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,r.DEPTH_STENCIL_ATTACHMENT,r.TEXTURE_2D,Z,0,ie):r.framebufferTexture2D(r.FRAMEBUFFER,r.DEPTH_STENCIL_ATTACHMENT,r.TEXTURE_2D,Z,0);else throw new Error("Unknown depthTexture format")}function We(w){const M=n.get(w),X=w.isWebGLCubeRenderTarget===!0;if(w.depthTexture&&!M.__autoAllocateDepthBuffer){if(X)throw new Error("target.depthTexture not supported in Cube render targets");pt(M.__webglFramebuffer,w)}else if(X){M.__webglDepthbuffer=[];for(let Z=0;Z<6;Z++)t.bindFramebuffer(r.FRAMEBUFFER,M.__webglFramebuffer[Z]),M.__webglDepthbuffer[Z]=r.createRenderbuffer(),Ee(M.__webglDepthbuffer[Z],w,!1)}else t.bindFramebuffer(r.FRAMEBUFFER,M.__webglFramebuffer),M.__webglDepthbuffer=r.createRenderbuffer(),Ee(M.__webglDepthbuffer,w,!1);t.bindFramebuffer(r.FRAMEBUFFER,null)}function U(w,M,X){const Z=n.get(w);M!==void 0&&Ae(Z.__webglFramebuffer,w,w.texture,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,0),X!==void 0&&We(w)}function Pt(w){const M=w.texture,X=n.get(w),Z=n.get(M);w.addEventListener("dispose",B);const ie=w.textures,re=w.isWebGLCubeRenderTarget===!0,et=ie.length>1,Fe=m(w)||o;if(et||(Z.__webglTexture===void 0&&(Z.__webglTexture=r.createTexture()),Z.__version=M.version,a.memory.textures++),re){X.__webglFramebuffer=[];for(let pe=0;pe<6;pe++)if(o&&M.mipmaps&&M.mipmaps.length>0){X.__webglFramebuffer[pe]=[];for(let xe=0;xe<M.mipmaps.length;xe++)X.__webglFramebuffer[pe][xe]=r.createFramebuffer()}else X.__webglFramebuffer[pe]=r.createFramebuffer()}else{if(o&&M.mipmaps&&M.mipmaps.length>0){X.__webglFramebuffer=[];for(let pe=0;pe<M.mipmaps.length;pe++)X.__webglFramebuffer[pe]=r.createFramebuffer()}else X.__webglFramebuffer=r.createFramebuffer();if(et)if(i.drawBuffers)for(let pe=0,xe=ie.length;pe<xe;pe++){const $e=n.get(ie[pe]);$e.__webglTexture===void 0&&($e.__webglTexture=r.createTexture(),a.memory.textures++)}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(o&&w.samples>0&&je(w)===!1){X.__webglMultisampledFramebuffer=r.createFramebuffer(),X.__webglColorRenderbuffer=[],t.bindFramebuffer(r.FRAMEBUFFER,X.__webglMultisampledFramebuffer);for(let pe=0;pe<ie.length;pe++){const xe=ie[pe];X.__webglColorRenderbuffer[pe]=r.createRenderbuffer(),r.bindRenderbuffer(r.RENDERBUFFER,X.__webglColorRenderbuffer[pe]);const $e=s.convert(xe.format,xe.colorSpace),ue=s.convert(xe.type),Ot=C(xe.internalFormat,$e,ue,xe.colorSpace,w.isXRRenderTarget===!0),tt=Ne(w);r.renderbufferStorageMultisample(r.RENDERBUFFER,tt,Ot,w.width,w.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+pe,r.RENDERBUFFER,X.__webglColorRenderbuffer[pe])}r.bindRenderbuffer(r.RENDERBUFFER,null),w.depthBuffer&&(X.__webglDepthRenderbuffer=r.createRenderbuffer(),Ee(X.__webglDepthRenderbuffer,w,!0)),t.bindFramebuffer(r.FRAMEBUFFER,null)}}if(re){t.bindTexture(r.TEXTURE_CUBE_MAP,Z.__webglTexture),V(r.TEXTURE_CUBE_MAP,M,Fe);for(let pe=0;pe<6;pe++)if(o&&M.mipmaps&&M.mipmaps.length>0)for(let xe=0;xe<M.mipmaps.length;xe++)Ae(X.__webglFramebuffer[pe][xe],w,M,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+pe,xe);else Ae(X.__webglFramebuffer[pe],w,M,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+pe,0);v(M,Fe)&&E(r.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(et){for(let pe=0,xe=ie.length;pe<xe;pe++){const $e=ie[pe],ue=n.get($e);t.bindTexture(r.TEXTURE_2D,ue.__webglTexture),V(r.TEXTURE_2D,$e,Fe),Ae(X.__webglFramebuffer,w,$e,r.COLOR_ATTACHMENT0+pe,r.TEXTURE_2D,0),v($e,Fe)&&E(r.TEXTURE_2D)}t.unbindTexture()}else{let pe=r.TEXTURE_2D;if((w.isWebGL3DRenderTarget||w.isWebGLArrayRenderTarget)&&(o?pe=w.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),t.bindTexture(pe,Z.__webglTexture),V(pe,M,Fe),o&&M.mipmaps&&M.mipmaps.length>0)for(let xe=0;xe<M.mipmaps.length;xe++)Ae(X.__webglFramebuffer[xe],w,M,r.COLOR_ATTACHMENT0,pe,xe);else Ae(X.__webglFramebuffer,w,M,r.COLOR_ATTACHMENT0,pe,0);v(M,Fe)&&E(pe),t.unbindTexture()}w.depthBuffer&&We(w)}function Ie(w){const M=m(w)||o,X=w.textures;for(let Z=0,ie=X.length;Z<ie;Z++){const re=X[Z];if(v(re,M)){const et=w.isWebGLCubeRenderTarget?r.TEXTURE_CUBE_MAP:r.TEXTURE_2D,Fe=n.get(re).__webglTexture;t.bindTexture(et,Fe),E(et),t.unbindTexture()}}}function Oe(w){if(o&&w.samples>0&&je(w)===!1){const M=w.textures,X=w.width,Z=w.height;let ie=r.COLOR_BUFFER_BIT;const re=[],et=w.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,Fe=n.get(w),pe=M.length>1;if(pe)for(let xe=0;xe<M.length;xe++)t.bindFramebuffer(r.FRAMEBUFFER,Fe.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+xe,r.RENDERBUFFER,null),t.bindFramebuffer(r.FRAMEBUFFER,Fe.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+xe,r.TEXTURE_2D,null,0);t.bindFramebuffer(r.READ_FRAMEBUFFER,Fe.__webglMultisampledFramebuffer),t.bindFramebuffer(r.DRAW_FRAMEBUFFER,Fe.__webglFramebuffer);for(let xe=0;xe<M.length;xe++){re.push(r.COLOR_ATTACHMENT0+xe),w.depthBuffer&&re.push(et);const $e=Fe.__ignoreDepthValues!==void 0?Fe.__ignoreDepthValues:!1;if($e===!1&&(w.depthBuffer&&(ie|=r.DEPTH_BUFFER_BIT),w.stencilBuffer&&(ie|=r.STENCIL_BUFFER_BIT)),pe&&r.framebufferRenderbuffer(r.READ_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.RENDERBUFFER,Fe.__webglColorRenderbuffer[xe]),$e===!0&&(r.invalidateFramebuffer(r.READ_FRAMEBUFFER,[et]),r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,[et])),pe){const ue=n.get(M[xe]).__webglTexture;r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,ue,0)}r.blitFramebuffer(0,0,X,Z,0,0,X,Z,ie,r.NEAREST),c&&r.invalidateFramebuffer(r.READ_FRAMEBUFFER,re)}if(t.bindFramebuffer(r.READ_FRAMEBUFFER,null),t.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),pe)for(let xe=0;xe<M.length;xe++){t.bindFramebuffer(r.FRAMEBUFFER,Fe.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+xe,r.RENDERBUFFER,Fe.__webglColorRenderbuffer[xe]);const $e=n.get(M[xe]).__webglTexture;t.bindFramebuffer(r.FRAMEBUFFER,Fe.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+xe,r.TEXTURE_2D,$e,0)}t.bindFramebuffer(r.DRAW_FRAMEBUFFER,Fe.__webglMultisampledFramebuffer)}}function Ne(w){return Math.min(i.maxSamples,w.samples)}function je(w){const M=n.get(w);return o&&w.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&M.__useRenderToTexture!==!1}function Xe(w){const M=a.render.frame;h.get(w)!==M&&(h.set(w,M),w.update())}function Ke(w,M){const X=w.colorSpace,Z=w.format,ie=w.type;return w.isCompressedTexture===!0||w.isVideoTexture===!0||w.format===qo||X!==mn&&X!==qi&&(bt.getTransfer(X)===Ht?o===!1?e.has("EXT_sRGB")===!0&&Z===Xn?(w.format=qo,w.minFilter=Sn,w.generateMipmaps=!1):M=ch.sRGBToLinear(M):(Z!==Xn||ie!==Ji)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",X)),M}function Mt(w){return typeof HTMLImageElement<"u"&&w instanceof HTMLImageElement?(u.width=w.naturalWidth||w.width,u.height=w.naturalHeight||w.height):typeof VideoFrame<"u"&&w instanceof VideoFrame?(u.width=w.displayWidth,u.height=w.displayHeight):(u.width=w.width,u.height=w.height),u}this.allocateTextureUnit=O,this.resetTextureUnits=P,this.setTexture2D=j,this.setTexture2DArray=K,this.setTexture3D=Y,this.setTextureCube=ae,this.rebindTextures=U,this.setupRenderTarget=Pt,this.updateRenderTargetMipmap=Ie,this.updateMultisampleRenderTarget=Oe,this.setupDepthRenderbuffer=We,this.setupFrameBufferTexture=Ae,this.useMultisampledRTT=je}function Qv(r,e,t){const n=t.isWebGL2;function i(s,a=qi){let o;const l=bt.getTransfer(a);if(s===Ji)return r.UNSIGNED_BYTE;if(s===$u)return r.UNSIGNED_SHORT_4_4_4_4;if(s===Zu)return r.UNSIGNED_SHORT_5_5_5_1;if(s===xf)return r.BYTE;if(s===Mf)return r.SHORT;if(s===al)return r.UNSIGNED_SHORT;if(s===Ku)return r.INT;if(s===Yi)return r.UNSIGNED_INT;if(s===Jn)return r.FLOAT;if(s===Ns)return n?r.HALF_FLOAT:(o=e.get("OES_texture_half_float"),o!==null?o.HALF_FLOAT_OES:null);if(s===yf)return r.ALPHA;if(s===Xn)return r.RGBA;if(s===Sf)return r.LUMINANCE;if(s===Ef)return r.LUMINANCE_ALPHA;if(s===xr)return r.DEPTH_COMPONENT;if(s===es)return r.DEPTH_STENCIL;if(s===qo)return o=e.get("EXT_sRGB"),o!==null?o.SRGB_ALPHA_EXT:null;if(s===Ju)return r.RED;if(s===Qu)return r.RED_INTEGER;if(s===bf)return r.RG;if(s===eh)return r.RG_INTEGER;if(s===th)return r.RGBA_INTEGER;if(s===qa||s===ja||s===Ya||s===Ka)if(l===Ht)if(o=e.get("WEBGL_compressed_texture_s3tc_srgb"),o!==null){if(s===qa)return o.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(s===ja)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(s===Ya)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(s===Ka)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(o=e.get("WEBGL_compressed_texture_s3tc"),o!==null){if(s===qa)return o.COMPRESSED_RGB_S3TC_DXT1_EXT;if(s===ja)return o.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(s===Ya)return o.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(s===Ka)return o.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(s===$l||s===Zl||s===Jl||s===Ql)if(o=e.get("WEBGL_compressed_texture_pvrtc"),o!==null){if(s===$l)return o.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(s===Zl)return o.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(s===Jl)return o.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(s===Ql)return o.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(s===nh)return o=e.get("WEBGL_compressed_texture_etc1"),o!==null?o.COMPRESSED_RGB_ETC1_WEBGL:null;if(s===ec||s===tc)if(o=e.get("WEBGL_compressed_texture_etc"),o!==null){if(s===ec)return l===Ht?o.COMPRESSED_SRGB8_ETC2:o.COMPRESSED_RGB8_ETC2;if(s===tc)return l===Ht?o.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:o.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(s===nc||s===ic||s===rc||s===sc||s===ac||s===oc||s===lc||s===cc||s===uc||s===hc||s===dc||s===fc||s===pc||s===mc)if(o=e.get("WEBGL_compressed_texture_astc"),o!==null){if(s===nc)return l===Ht?o.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:o.COMPRESSED_RGBA_ASTC_4x4_KHR;if(s===ic)return l===Ht?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:o.COMPRESSED_RGBA_ASTC_5x4_KHR;if(s===rc)return l===Ht?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:o.COMPRESSED_RGBA_ASTC_5x5_KHR;if(s===sc)return l===Ht?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:o.COMPRESSED_RGBA_ASTC_6x5_KHR;if(s===ac)return l===Ht?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:o.COMPRESSED_RGBA_ASTC_6x6_KHR;if(s===oc)return l===Ht?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:o.COMPRESSED_RGBA_ASTC_8x5_KHR;if(s===lc)return l===Ht?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:o.COMPRESSED_RGBA_ASTC_8x6_KHR;if(s===cc)return l===Ht?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:o.COMPRESSED_RGBA_ASTC_8x8_KHR;if(s===uc)return l===Ht?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:o.COMPRESSED_RGBA_ASTC_10x5_KHR;if(s===hc)return l===Ht?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:o.COMPRESSED_RGBA_ASTC_10x6_KHR;if(s===dc)return l===Ht?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:o.COMPRESSED_RGBA_ASTC_10x8_KHR;if(s===fc)return l===Ht?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:o.COMPRESSED_RGBA_ASTC_10x10_KHR;if(s===pc)return l===Ht?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:o.COMPRESSED_RGBA_ASTC_12x10_KHR;if(s===mc)return l===Ht?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:o.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(s===$a||s===gc||s===_c)if(o=e.get("EXT_texture_compression_bptc"),o!==null){if(s===$a)return l===Ht?o.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:o.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(s===gc)return o.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(s===_c)return o.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(s===Tf||s===vc||s===xc||s===Mc)if(o=e.get("EXT_texture_compression_rgtc"),o!==null){if(s===$a)return o.COMPRESSED_RED_RGTC1_EXT;if(s===vc)return o.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(s===xc)return o.COMPRESSED_RED_GREEN_RGTC2_EXT;if(s===Mc)return o.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return s===vr?n?r.UNSIGNED_INT_24_8:(o=e.get("WEBGL_depth_texture"),o!==null?o.UNSIGNED_INT_24_8_WEBGL:null):r[s]!==void 0?r[s]:null}return{convert:i}}class e0 extends Ln{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class ei extends Wt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const t0={type:"move"};class Eo{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new ei,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new ei,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new L,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new L),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new ei,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new L,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new L),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let i=null,s=null,a=null;const o=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){a=!0;for(const _ of e.hand.values()){const f=t.getJointPose(_,n),m=this._getHandJoint(c,_);f!==null&&(m.matrix.fromArray(f.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,m.jointRadius=f.radius),m.visible=f!==null}const u=c.joints["index-finger-tip"],h=c.joints["thumb-tip"],d=u.position.distanceTo(h.position),p=.02,g=.005;c.inputState.pinching&&d>p+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&d<=p-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,n),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));o!==null&&(i=t.getPose(e.targetRaySpace,n),i===null&&s!==null&&(i=s),i!==null&&(o.matrix.fromArray(i.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,i.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(i.linearVelocity)):o.hasLinearVelocity=!1,i.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(i.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(t0)))}return o!==null&&(o.visible=i!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const n=new ei;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}}const n0=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,i0=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepthEXT = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepthEXT = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class r0{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t,n){if(this.texture===null){const i=new un,s=e.properties.get(i);s.__webglTexture=t.texture,(t.depthNear!=n.depthNear||t.depthFar!=n.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=i}}render(e,t){if(this.texture!==null){if(this.mesh===null){const n=t.cameras[0].viewport,i=new Li({extensions:{fragDepth:!0},vertexShader:n0,fragmentShader:i0,uniforms:{depthColor:{value:this.texture},depthWidth:{value:n.z},depthHeight:{value:n.w}}});this.mesh=new Vt(new Ia(20,20),i)}e.render(this.mesh,t)}}reset(){this.texture=null,this.mesh=null}}class s0 extends os{constructor(e,t){super();const n=this;let i=null,s=1,a=null,o="local-floor",l=1,c=null,u=null,h=null,d=null,p=null,g=null;const _=new r0,f=t.getContextAttributes();let m=null,y=null;const v=[],E=[],C=new Se;let A=null;const b=new Ln;b.layers.enable(1),b.viewport=new Nt;const N=new Ln;N.layers.enable(2),N.viewport=new Nt;const B=[b,N],x=new e0;x.layers.enable(1),x.layers.enable(2);let T=null,z=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(V){let se=v[V];return se===void 0&&(se=new Eo,v[V]=se),se.getTargetRaySpace()},this.getControllerGrip=function(V){let se=v[V];return se===void 0&&(se=new Eo,v[V]=se),se.getGripSpace()},this.getHand=function(V){let se=v[V];return se===void 0&&(se=new Eo,v[V]=se),se.getHandSpace()};function $(V){const se=E.indexOf(V.inputSource);if(se===-1)return;const ye=v[se];ye!==void 0&&(ye.update(V.inputSource,V.frame,c||a),ye.dispatchEvent({type:V.type,data:V.inputSource}))}function P(){i.removeEventListener("select",$),i.removeEventListener("selectstart",$),i.removeEventListener("selectend",$),i.removeEventListener("squeeze",$),i.removeEventListener("squeezestart",$),i.removeEventListener("squeezeend",$),i.removeEventListener("end",P),i.removeEventListener("inputsourceschange",O);for(let V=0;V<v.length;V++){const se=E[V];se!==null&&(E[V]=null,v[V].disconnect(se))}T=null,z=null,_.reset(),e.setRenderTarget(m),p=null,d=null,h=null,i=null,y=null,Be.stop(),n.isPresenting=!1,e.setPixelRatio(A),e.setSize(C.width,C.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(V){s=V,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(V){o=V,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(V){c=V},this.getBaseLayer=function(){return d!==null?d:p},this.getBinding=function(){return h},this.getFrame=function(){return g},this.getSession=function(){return i},this.setSession=async function(V){if(i=V,i!==null){if(m=e.getRenderTarget(),i.addEventListener("select",$),i.addEventListener("selectstart",$),i.addEventListener("selectend",$),i.addEventListener("squeeze",$),i.addEventListener("squeezestart",$),i.addEventListener("squeezeend",$),i.addEventListener("end",P),i.addEventListener("inputsourceschange",O),f.xrCompatible!==!0&&await t.makeXRCompatible(),A=e.getPixelRatio(),e.getSize(C),i.renderState.layers===void 0||e.capabilities.isWebGL2===!1){const se={antialias:i.renderState.layers===void 0?f.antialias:!0,alpha:!0,depth:f.depth,stencil:f.stencil,framebufferScaleFactor:s};p=new XRWebGLLayer(i,t,se),i.updateRenderState({baseLayer:p}),e.setPixelRatio(1),e.setSize(p.framebufferWidth,p.framebufferHeight,!1),y=new Mr(p.framebufferWidth,p.framebufferHeight,{format:Xn,type:Ji,colorSpace:e.outputColorSpace,stencilBuffer:f.stencil})}else{let se=null,ye=null,ke=null;f.depth&&(ke=f.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,se=f.stencil?es:xr,ye=f.stencil?vr:Yi);const Ae={colorFormat:t.RGBA8,depthFormat:ke,scaleFactor:s};h=new XRWebGLBinding(i,t),d=h.createProjectionLayer(Ae),i.updateRenderState({layers:[d]}),e.setPixelRatio(1),e.setSize(d.textureWidth,d.textureHeight,!1),y=new Mr(d.textureWidth,d.textureHeight,{format:Xn,type:Ji,depthTexture:new xh(d.textureWidth,d.textureHeight,ye,void 0,void 0,void 0,void 0,void 0,void 0,se),stencilBuffer:f.stencil,colorSpace:e.outputColorSpace,samples:f.antialias?4:0});const Ee=e.properties.get(y);Ee.__ignoreDepthValues=d.ignoreDepthValues}y.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await i.requestReferenceSpace(o),Be.setContext(i),Be.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(i!==null)return i.environmentBlendMode};function O(V){for(let se=0;se<V.removed.length;se++){const ye=V.removed[se],ke=E.indexOf(ye);ke>=0&&(E[ke]=null,v[ke].disconnect(ye))}for(let se=0;se<V.added.length;se++){const ye=V.added[se];let ke=E.indexOf(ye);if(ke===-1){for(let Ee=0;Ee<v.length;Ee++)if(Ee>=E.length){E.push(ye),ke=Ee;break}else if(E[Ee]===null){E[Ee]=ye,ke=Ee;break}if(ke===-1)break}const Ae=v[ke];Ae&&Ae.connect(ye)}}const k=new L,j=new L;function K(V,se,ye){k.setFromMatrixPosition(se.matrixWorld),j.setFromMatrixPosition(ye.matrixWorld);const ke=k.distanceTo(j),Ae=se.projectionMatrix.elements,Ee=ye.projectionMatrix.elements,pt=Ae[14]/(Ae[10]-1),We=Ae[14]/(Ae[10]+1),U=(Ae[9]+1)/Ae[5],Pt=(Ae[9]-1)/Ae[5],Ie=(Ae[8]-1)/Ae[0],Oe=(Ee[8]+1)/Ee[0],Ne=pt*Ie,je=pt*Oe,Xe=ke/(-Ie+Oe),Ke=Xe*-Ie;se.matrixWorld.decompose(V.position,V.quaternion,V.scale),V.translateX(Ke),V.translateZ(Xe),V.matrixWorld.compose(V.position,V.quaternion,V.scale),V.matrixWorldInverse.copy(V.matrixWorld).invert();const Mt=pt+Xe,w=We+Xe,M=Ne-Ke,X=je+(ke-Ke),Z=U*We/w*Mt,ie=Pt*We/w*Mt;V.projectionMatrix.makePerspective(M,X,Z,ie,Mt,w),V.projectionMatrixInverse.copy(V.projectionMatrix).invert()}function Y(V,se){se===null?V.matrixWorld.copy(V.matrix):V.matrixWorld.multiplyMatrices(se.matrixWorld,V.matrix),V.matrixWorldInverse.copy(V.matrixWorld).invert()}this.updateCamera=function(V){if(i===null)return;_.texture!==null&&(V.near=_.depthNear,V.far=_.depthFar),x.near=N.near=b.near=V.near,x.far=N.far=b.far=V.far,(T!==x.near||z!==x.far)&&(i.updateRenderState({depthNear:x.near,depthFar:x.far}),T=x.near,z=x.far,b.near=T,b.far=z,N.near=T,N.far=z,b.updateProjectionMatrix(),N.updateProjectionMatrix(),V.updateProjectionMatrix());const se=V.parent,ye=x.cameras;Y(x,se);for(let ke=0;ke<ye.length;ke++)Y(ye[ke],se);ye.length===2?K(x,b,N):x.projectionMatrix.copy(b.projectionMatrix),ae(V,x,se)};function ae(V,se,ye){ye===null?V.matrix.copy(se.matrixWorld):(V.matrix.copy(ye.matrixWorld),V.matrix.invert(),V.matrix.multiply(se.matrixWorld)),V.matrix.decompose(V.position,V.quaternion,V.scale),V.updateMatrixWorld(!0),V.projectionMatrix.copy(se.projectionMatrix),V.projectionMatrixInverse.copy(se.projectionMatrixInverse),V.isPerspectiveCamera&&(V.fov=ns*2*Math.atan(1/V.projectionMatrix.elements[5]),V.zoom=1)}this.getCamera=function(){return x},this.getFoveation=function(){if(!(d===null&&p===null))return l},this.setFoveation=function(V){l=V,d!==null&&(d.fixedFoveation=V),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=V)},this.hasDepthSensing=function(){return _.texture!==null};let ce=null;function Me(V,se){if(u=se.getViewerPose(c||a),g=se,u!==null){const ye=u.views;p!==null&&(e.setRenderTargetFramebuffer(y,p.framebuffer),e.setRenderTarget(y));let ke=!1;ye.length!==x.cameras.length&&(x.cameras.length=0,ke=!0);for(let Ee=0;Ee<ye.length;Ee++){const pt=ye[Ee];let We=null;if(p!==null)We=p.getViewport(pt);else{const Pt=h.getViewSubImage(d,pt);We=Pt.viewport,Ee===0&&(e.setRenderTargetTextures(y,Pt.colorTexture,d.ignoreDepthValues?void 0:Pt.depthStencilTexture),e.setRenderTarget(y))}let U=B[Ee];U===void 0&&(U=new Ln,U.layers.enable(Ee),U.viewport=new Nt,B[Ee]=U),U.matrix.fromArray(pt.transform.matrix),U.matrix.decompose(U.position,U.quaternion,U.scale),U.projectionMatrix.fromArray(pt.projectionMatrix),U.projectionMatrixInverse.copy(U.projectionMatrix).invert(),U.viewport.set(We.x,We.y,We.width,We.height),Ee===0&&(x.matrix.copy(U.matrix),x.matrix.decompose(x.position,x.quaternion,x.scale)),ke===!0&&x.cameras.push(U)}const Ae=i.enabledFeatures;if(Ae&&Ae.includes("depth-sensing")){const Ee=h.getDepthInformation(ye[0]);Ee&&Ee.isValid&&Ee.texture&&_.init(e,Ee,i.renderState)}}for(let ye=0;ye<v.length;ye++){const ke=E[ye],Ae=v[ye];ke!==null&&Ae!==void 0&&Ae.update(ke,se,c||a)}_.render(e,x),ce&&ce(V,se),se.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:se}),g=null}const Be=new vh;Be.setAnimationLoop(Me),this.setAnimationLoop=function(V){ce=V},this.dispose=function(){}}}const ur=new ci,a0=new Ve;function o0(r,e){function t(f,m){f.matrixAutoUpdate===!0&&f.updateMatrix(),m.value.copy(f.matrix)}function n(f,m){m.color.getRGB(f.fogColor.value,gh(r)),m.isFog?(f.fogNear.value=m.near,f.fogFar.value=m.far):m.isFogExp2&&(f.fogDensity.value=m.density)}function i(f,m,y,v,E){m.isMeshBasicMaterial||m.isMeshLambertMaterial?s(f,m):m.isMeshToonMaterial?(s(f,m),h(f,m)):m.isMeshPhongMaterial?(s(f,m),u(f,m)):m.isMeshStandardMaterial?(s(f,m),d(f,m),m.isMeshPhysicalMaterial&&p(f,m,E)):m.isMeshMatcapMaterial?(s(f,m),g(f,m)):m.isMeshDepthMaterial?s(f,m):m.isMeshDistanceMaterial?(s(f,m),_(f,m)):m.isMeshNormalMaterial?s(f,m):m.isLineBasicMaterial?(a(f,m),m.isLineDashedMaterial&&o(f,m)):m.isPointsMaterial?l(f,m,y,v):m.isSpriteMaterial?c(f,m):m.isShadowMaterial?(f.color.value.copy(m.color),f.opacity.value=m.opacity):m.isShaderMaterial&&(m.uniformsNeedUpdate=!1)}function s(f,m){f.opacity.value=m.opacity,m.color&&f.diffuse.value.copy(m.color),m.emissive&&f.emissive.value.copy(m.emissive).multiplyScalar(m.emissiveIntensity),m.map&&(f.map.value=m.map,t(m.map,f.mapTransform)),m.alphaMap&&(f.alphaMap.value=m.alphaMap,t(m.alphaMap,f.alphaMapTransform)),m.bumpMap&&(f.bumpMap.value=m.bumpMap,t(m.bumpMap,f.bumpMapTransform),f.bumpScale.value=m.bumpScale,m.side===Pn&&(f.bumpScale.value*=-1)),m.normalMap&&(f.normalMap.value=m.normalMap,t(m.normalMap,f.normalMapTransform),f.normalScale.value.copy(m.normalScale),m.side===Pn&&f.normalScale.value.negate()),m.displacementMap&&(f.displacementMap.value=m.displacementMap,t(m.displacementMap,f.displacementMapTransform),f.displacementScale.value=m.displacementScale,f.displacementBias.value=m.displacementBias),m.emissiveMap&&(f.emissiveMap.value=m.emissiveMap,t(m.emissiveMap,f.emissiveMapTransform)),m.specularMap&&(f.specularMap.value=m.specularMap,t(m.specularMap,f.specularMapTransform)),m.alphaTest>0&&(f.alphaTest.value=m.alphaTest);const y=e.get(m),v=y.envMap,E=y.envMapRotation;if(v&&(f.envMap.value=v,ur.copy(E),ur.x*=-1,ur.y*=-1,ur.z*=-1,v.isCubeTexture&&v.isRenderTargetTexture===!1&&(ur.y*=-1,ur.z*=-1),f.envMapRotation.value.setFromMatrix4(a0.makeRotationFromEuler(ur)),f.flipEnvMap.value=v.isCubeTexture&&v.isRenderTargetTexture===!1?-1:1,f.reflectivity.value=m.reflectivity,f.ior.value=m.ior,f.refractionRatio.value=m.refractionRatio),m.lightMap){f.lightMap.value=m.lightMap;const C=r._useLegacyLights===!0?Math.PI:1;f.lightMapIntensity.value=m.lightMapIntensity*C,t(m.lightMap,f.lightMapTransform)}m.aoMap&&(f.aoMap.value=m.aoMap,f.aoMapIntensity.value=m.aoMapIntensity,t(m.aoMap,f.aoMapTransform))}function a(f,m){f.diffuse.value.copy(m.color),f.opacity.value=m.opacity,m.map&&(f.map.value=m.map,t(m.map,f.mapTransform))}function o(f,m){f.dashSize.value=m.dashSize,f.totalSize.value=m.dashSize+m.gapSize,f.scale.value=m.scale}function l(f,m,y,v){f.diffuse.value.copy(m.color),f.opacity.value=m.opacity,f.size.value=m.size*y,f.scale.value=v*.5,m.map&&(f.map.value=m.map,t(m.map,f.uvTransform)),m.alphaMap&&(f.alphaMap.value=m.alphaMap,t(m.alphaMap,f.alphaMapTransform)),m.alphaTest>0&&(f.alphaTest.value=m.alphaTest)}function c(f,m){f.diffuse.value.copy(m.color),f.opacity.value=m.opacity,f.rotation.value=m.rotation,m.map&&(f.map.value=m.map,t(m.map,f.mapTransform)),m.alphaMap&&(f.alphaMap.value=m.alphaMap,t(m.alphaMap,f.alphaMapTransform)),m.alphaTest>0&&(f.alphaTest.value=m.alphaTest)}function u(f,m){f.specular.value.copy(m.specular),f.shininess.value=Math.max(m.shininess,1e-4)}function h(f,m){m.gradientMap&&(f.gradientMap.value=m.gradientMap)}function d(f,m){f.metalness.value=m.metalness,m.metalnessMap&&(f.metalnessMap.value=m.metalnessMap,t(m.metalnessMap,f.metalnessMapTransform)),f.roughness.value=m.roughness,m.roughnessMap&&(f.roughnessMap.value=m.roughnessMap,t(m.roughnessMap,f.roughnessMapTransform)),e.get(m).envMap&&(f.envMapIntensity.value=m.envMapIntensity)}function p(f,m,y){f.ior.value=m.ior,m.sheen>0&&(f.sheenColor.value.copy(m.sheenColor).multiplyScalar(m.sheen),f.sheenRoughness.value=m.sheenRoughness,m.sheenColorMap&&(f.sheenColorMap.value=m.sheenColorMap,t(m.sheenColorMap,f.sheenColorMapTransform)),m.sheenRoughnessMap&&(f.sheenRoughnessMap.value=m.sheenRoughnessMap,t(m.sheenRoughnessMap,f.sheenRoughnessMapTransform))),m.clearcoat>0&&(f.clearcoat.value=m.clearcoat,f.clearcoatRoughness.value=m.clearcoatRoughness,m.clearcoatMap&&(f.clearcoatMap.value=m.clearcoatMap,t(m.clearcoatMap,f.clearcoatMapTransform)),m.clearcoatRoughnessMap&&(f.clearcoatRoughnessMap.value=m.clearcoatRoughnessMap,t(m.clearcoatRoughnessMap,f.clearcoatRoughnessMapTransform)),m.clearcoatNormalMap&&(f.clearcoatNormalMap.value=m.clearcoatNormalMap,t(m.clearcoatNormalMap,f.clearcoatNormalMapTransform),f.clearcoatNormalScale.value.copy(m.clearcoatNormalScale),m.side===Pn&&f.clearcoatNormalScale.value.negate())),m.iridescence>0&&(f.iridescence.value=m.iridescence,f.iridescenceIOR.value=m.iridescenceIOR,f.iridescenceThicknessMinimum.value=m.iridescenceThicknessRange[0],f.iridescenceThicknessMaximum.value=m.iridescenceThicknessRange[1],m.iridescenceMap&&(f.iridescenceMap.value=m.iridescenceMap,t(m.iridescenceMap,f.iridescenceMapTransform)),m.iridescenceThicknessMap&&(f.iridescenceThicknessMap.value=m.iridescenceThicknessMap,t(m.iridescenceThicknessMap,f.iridescenceThicknessMapTransform))),m.transmission>0&&(f.transmission.value=m.transmission,f.transmissionSamplerMap.value=y.texture,f.transmissionSamplerSize.value.set(y.width,y.height),m.transmissionMap&&(f.transmissionMap.value=m.transmissionMap,t(m.transmissionMap,f.transmissionMapTransform)),f.thickness.value=m.thickness,m.thicknessMap&&(f.thicknessMap.value=m.thicknessMap,t(m.thicknessMap,f.thicknessMapTransform)),f.attenuationDistance.value=m.attenuationDistance,f.attenuationColor.value.copy(m.attenuationColor)),m.anisotropy>0&&(f.anisotropyVector.value.set(m.anisotropy*Math.cos(m.anisotropyRotation),m.anisotropy*Math.sin(m.anisotropyRotation)),m.anisotropyMap&&(f.anisotropyMap.value=m.anisotropyMap,t(m.anisotropyMap,f.anisotropyMapTransform))),f.specularIntensity.value=m.specularIntensity,f.specularColor.value.copy(m.specularColor),m.specularColorMap&&(f.specularColorMap.value=m.specularColorMap,t(m.specularColorMap,f.specularColorMapTransform)),m.specularIntensityMap&&(f.specularIntensityMap.value=m.specularIntensityMap,t(m.specularIntensityMap,f.specularIntensityMapTransform))}function g(f,m){m.matcap&&(f.matcap.value=m.matcap)}function _(f,m){const y=e.get(m).light;f.referencePosition.value.setFromMatrixPosition(y.matrixWorld),f.nearDistance.value=y.shadow.camera.near,f.farDistance.value=y.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:i}}function l0(r,e,t,n){let i={},s={},a=[];const o=t.isWebGL2?r.getParameter(r.MAX_UNIFORM_BUFFER_BINDINGS):0;function l(y,v){const E=v.program;n.uniformBlockBinding(y,E)}function c(y,v){let E=i[y.id];E===void 0&&(g(y),E=u(y),i[y.id]=E,y.addEventListener("dispose",f));const C=v.program;n.updateUBOMapping(y,C);const A=e.render.frame;s[y.id]!==A&&(d(y),s[y.id]=A)}function u(y){const v=h();y.__bindingPointIndex=v;const E=r.createBuffer(),C=y.__size,A=y.usage;return r.bindBuffer(r.UNIFORM_BUFFER,E),r.bufferData(r.UNIFORM_BUFFER,C,A),r.bindBuffer(r.UNIFORM_BUFFER,null),r.bindBufferBase(r.UNIFORM_BUFFER,v,E),E}function h(){for(let y=0;y<o;y++)if(a.indexOf(y)===-1)return a.push(y),y;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(y){const v=i[y.id],E=y.uniforms,C=y.__cache;r.bindBuffer(r.UNIFORM_BUFFER,v);for(let A=0,b=E.length;A<b;A++){const N=Array.isArray(E[A])?E[A]:[E[A]];for(let B=0,x=N.length;B<x;B++){const T=N[B];if(p(T,A,B,C)===!0){const z=T.__offset,$=Array.isArray(T.value)?T.value:[T.value];let P=0;for(let O=0;O<$.length;O++){const k=$[O],j=_(k);typeof k=="number"||typeof k=="boolean"?(T.__data[0]=k,r.bufferSubData(r.UNIFORM_BUFFER,z+P,T.__data)):k.isMatrix3?(T.__data[0]=k.elements[0],T.__data[1]=k.elements[1],T.__data[2]=k.elements[2],T.__data[3]=0,T.__data[4]=k.elements[3],T.__data[5]=k.elements[4],T.__data[6]=k.elements[5],T.__data[7]=0,T.__data[8]=k.elements[6],T.__data[9]=k.elements[7],T.__data[10]=k.elements[8],T.__data[11]=0):(k.toArray(T.__data,P),P+=j.storage/Float32Array.BYTES_PER_ELEMENT)}r.bufferSubData(r.UNIFORM_BUFFER,z,T.__data)}}}r.bindBuffer(r.UNIFORM_BUFFER,null)}function p(y,v,E,C){const A=y.value,b=v+"_"+E;if(C[b]===void 0)return typeof A=="number"||typeof A=="boolean"?C[b]=A:C[b]=A.clone(),!0;{const N=C[b];if(typeof A=="number"||typeof A=="boolean"){if(N!==A)return C[b]=A,!0}else if(N.equals(A)===!1)return N.copy(A),!0}return!1}function g(y){const v=y.uniforms;let E=0;const C=16;for(let b=0,N=v.length;b<N;b++){const B=Array.isArray(v[b])?v[b]:[v[b]];for(let x=0,T=B.length;x<T;x++){const z=B[x],$=Array.isArray(z.value)?z.value:[z.value];for(let P=0,O=$.length;P<O;P++){const k=$[P],j=_(k),K=E%C;K!==0&&C-K<j.boundary&&(E+=C-K),z.__data=new Float32Array(j.storage/Float32Array.BYTES_PER_ELEMENT),z.__offset=E,E+=j.storage}}}const A=E%C;return A>0&&(E+=C-A),y.__size=E,y.__cache={},this}function _(y){const v={boundary:0,storage:0};return typeof y=="number"||typeof y=="boolean"?(v.boundary=4,v.storage=4):y.isVector2?(v.boundary=8,v.storage=8):y.isVector3||y.isColor?(v.boundary=16,v.storage=12):y.isVector4?(v.boundary=16,v.storage=16):y.isMatrix3?(v.boundary=48,v.storage=48):y.isMatrix4?(v.boundary=64,v.storage=64):y.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",y),v}function f(y){const v=y.target;v.removeEventListener("dispose",f);const E=a.indexOf(v.__bindingPointIndex);a.splice(E,1),r.deleteBuffer(i[v.id]),delete i[v.id],delete s[v.id]}function m(){for(const y in i)r.deleteBuffer(i[y]);a=[],i={},s={}}return{bind:l,update:c,dispose:m}}class Ko{constructor(e={}){const{canvas:t=Jf(),context:n=null,depth:i=!0,stencil:s=!0,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:h=!1}=e;this.isWebGLRenderer=!0;let d;n!==null?d=n.getContextAttributes().alpha:d=a;const p=new Uint32Array(4),g=new Int32Array(4);let _=null,f=null;const m=[],y=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Cn,this._useLegacyLights=!1,this.toneMapping=Zi,this.toneMappingExposure=1;const v=this;let E=!1,C=0,A=0,b=null,N=-1,B=null;const x=new Nt,T=new Nt;let z=null;const $=new Ye(0);let P=0,O=t.width,k=t.height,j=1,K=null,Y=null;const ae=new Nt(0,0,O,k),ce=new Nt(0,0,O,k);let Me=!1;const Be=new ul;let V=!1,se=!1,ye=null;const ke=new Ve,Ae=new Se,Ee=new L,pt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function We(){return b===null?j:1}let U=n;function Pt(S,F){for(let W=0;W<S.length;W++){const q=S[W],H=t.getContext(q,F);if(H!==null)return H}return null}try{const S={alpha:!0,depth:i,stencil:s,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:h};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${sl}`),t.addEventListener("webglcontextlost",yt,!1),t.addEventListener("webglcontextrestored",I,!1),t.addEventListener("webglcontextcreationerror",ve,!1),U===null){const F=["webgl2","webgl","experimental-webgl"];if(v.isWebGL1Renderer===!0&&F.shift(),U=Pt(F,S),U===null)throw Pt(F)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}typeof WebGLRenderingContext<"u"&&U instanceof WebGLRenderingContext&&console.warn("THREE.WebGLRenderer: WebGL 1 support was deprecated in r153 and will be removed in r163."),U.getShaderPrecisionFormat===void 0&&(U.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(S){throw console.error("THREE.WebGLRenderer: "+S.message),S}let Ie,Oe,Ne,je,Xe,Ke,Mt,w,M,X,Z,ie,re,et,Fe,pe,xe,$e,ue,Ot,tt,De,be,Re;function at(){Ie=new p_(U),Oe=new l_(U,Ie,e),Ie.init(Oe),De=new Qv(U,Ie,Oe),Ne=new Zv(U,Ie,Oe),je=new __(U),Xe=new Ov,Ke=new Jv(U,Ie,Ne,Xe,Oe,De,je),Mt=new u_(v),w=new f_(v),M=new Ep(U,Oe),be=new a_(U,Ie,M,Oe),X=new m_(U,M,je,be),Z=new y_(U,X,M,je),ue=new M_(U,Oe,Ke),pe=new c_(Xe),ie=new Fv(v,Mt,w,Ie,Oe,be,pe),re=new o0(v,Xe),et=new kv,Fe=new Xv(Ie,Oe),$e=new s_(v,Mt,w,Ne,Z,d,l),xe=new $v(v,Z,Oe),Re=new l0(U,je,Oe,Ne),Ot=new o_(U,Ie,je,Oe),tt=new g_(U,Ie,je,Oe),je.programs=ie.programs,v.capabilities=Oe,v.extensions=Ie,v.properties=Xe,v.renderLists=et,v.shadowMap=xe,v.state=Ne,v.info=je}at();const Ze=new s0(v,U);this.xr=Ze,this.getContext=function(){return U},this.getContextAttributes=function(){return U.getContextAttributes()},this.forceContextLoss=function(){const S=Ie.get("WEBGL_lose_context");S&&S.loseContext()},this.forceContextRestore=function(){const S=Ie.get("WEBGL_lose_context");S&&S.restoreContext()},this.getPixelRatio=function(){return j},this.setPixelRatio=function(S){S!==void 0&&(j=S,this.setSize(O,k,!1))},this.getSize=function(S){return S.set(O,k)},this.setSize=function(S,F,W=!0){if(Ze.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}O=S,k=F,t.width=Math.floor(S*j),t.height=Math.floor(F*j),W===!0&&(t.style.width=S+"px",t.style.height=F+"px"),this.setViewport(0,0,S,F)},this.getDrawingBufferSize=function(S){return S.set(O*j,k*j).floor()},this.setDrawingBufferSize=function(S,F,W){O=S,k=F,j=W,t.width=Math.floor(S*W),t.height=Math.floor(F*W),this.setViewport(0,0,S,F)},this.getCurrentViewport=function(S){return S.copy(x)},this.getViewport=function(S){return S.copy(ae)},this.setViewport=function(S,F,W,q){S.isVector4?ae.set(S.x,S.y,S.z,S.w):ae.set(S,F,W,q),Ne.viewport(x.copy(ae).multiplyScalar(j).round())},this.getScissor=function(S){return S.copy(ce)},this.setScissor=function(S,F,W,q){S.isVector4?ce.set(S.x,S.y,S.z,S.w):ce.set(S,F,W,q),Ne.scissor(T.copy(ce).multiplyScalar(j).round())},this.getScissorTest=function(){return Me},this.setScissorTest=function(S){Ne.setScissorTest(Me=S)},this.setOpaqueSort=function(S){K=S},this.setTransparentSort=function(S){Y=S},this.getClearColor=function(S){return S.copy($e.getClearColor())},this.setClearColor=function(){$e.setClearColor.apply($e,arguments)},this.getClearAlpha=function(){return $e.getClearAlpha()},this.setClearAlpha=function(){$e.setClearAlpha.apply($e,arguments)},this.clear=function(S=!0,F=!0,W=!0){let q=0;if(S){let H=!1;if(b!==null){const D=b.texture.format;H=D===th||D===eh||D===Qu}if(H){const D=b.texture.type,J=D===Ji||D===Yi||D===al||D===vr||D===$u||D===Zu,ee=$e.getClearColor(),le=$e.getClearAlpha(),he=ee.r,me=ee.g,fe=ee.b;J?(p[0]=he,p[1]=me,p[2]=fe,p[3]=le,U.clearBufferuiv(U.COLOR,0,p)):(g[0]=he,g[1]=me,g[2]=fe,g[3]=le,U.clearBufferiv(U.COLOR,0,g))}else q|=U.COLOR_BUFFER_BIT}F&&(q|=U.DEPTH_BUFFER_BIT),W&&(q|=U.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),U.clear(q)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",yt,!1),t.removeEventListener("webglcontextrestored",I,!1),t.removeEventListener("webglcontextcreationerror",ve,!1),et.dispose(),Fe.dispose(),Xe.dispose(),Mt.dispose(),w.dispose(),Z.dispose(),be.dispose(),Re.dispose(),ie.dispose(),Ze.dispose(),Ze.removeEventListener("sessionstart",Tt),Ze.removeEventListener("sessionend",nt),ye&&(ye.dispose(),ye=null),Bt.stop()};function yt(S){S.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),E=!0}function I(){console.log("THREE.WebGLRenderer: Context Restored."),E=!1;const S=je.autoReset,F=xe.enabled,W=xe.autoUpdate,q=xe.needsUpdate,H=xe.type;at(),je.autoReset=S,xe.enabled=F,xe.autoUpdate=W,xe.needsUpdate=q,xe.type=H}function ve(S){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",S.statusMessage)}function G(S){const F=S.target;F.removeEventListener("dispose",G),de(F)}function de(S){Q(S),Xe.remove(S)}function Q(S){const F=Xe.get(S).programs;F!==void 0&&(F.forEach(function(W){ie.releaseProgram(W)}),S.isShaderMaterial&&ie.releaseShaderCache(S))}this.renderBufferDirect=function(S,F,W,q,H,D){F===null&&(F=pt);const J=H.isMesh&&H.matrixWorld.determinant()<0,ee=ps(S,F,W,q,H);Ne.setMaterial(q,J);let le=W.index,he=1;if(q.wireframe===!0){if(le=X.getWireframeAttribute(W),le===void 0)return;he=2}const me=W.drawRange,fe=W.attributes.position;let Le=me.start*he,it=(me.start+me.count)*he;D!==null&&(Le=Math.max(Le,D.start*he),it=Math.min(it,(D.start+D.count)*he)),le!==null?(Le=Math.max(Le,0),it=Math.min(it,le.count)):fe!=null&&(Le=Math.max(Le,0),it=Math.min(it,fe.count));const qe=it-Le;if(qe<0||qe===1/0)return;be.setup(H,q,ee,W,le);let St,ze=Ot;if(le!==null&&(St=M.get(le),ze=tt,ze.setIndex(St)),H.isMesh)q.wireframe===!0?(Ne.setLineWidth(q.wireframeLinewidth*We()),ze.setMode(U.LINES)):ze.setMode(U.TRIANGLES);else if(H.isLine){let Pe=q.linewidth;Pe===void 0&&(Pe=1),Ne.setLineWidth(Pe*We()),H.isLineSegments?ze.setMode(U.LINES):H.isLineLoop?ze.setMode(U.LINE_LOOP):ze.setMode(U.LINE_STRIP)}else H.isPoints?ze.setMode(U.POINTS):H.isSprite&&ze.setMode(U.TRIANGLES);if(H.isBatchedMesh)ze.renderMultiDraw(H._multiDrawStarts,H._multiDrawCounts,H._multiDrawCount);else if(H.isInstancedMesh)ze.renderInstances(Le,qe,H.count);else if(W.isInstancedBufferGeometry){const Pe=W._maxInstanceCount!==void 0?W._maxInstanceCount:1/0,dn=Math.min(W.instanceCount,Pe);ze.renderInstances(Le,qe,dn)}else ze.render(Le,qe)};function ge(S,F,W){S.transparent===!0&&S.side===si&&S.forceSinglePass===!1?(S.side=Pn,S.needsUpdate=!0,pi(S,F,W),S.side=Ci,S.needsUpdate=!0,pi(S,F,W),S.side=si):pi(S,F,W)}this.compile=function(S,F,W=null){W===null&&(W=S),f=Fe.get(W),f.init(),y.push(f),W.traverseVisible(function(H){H.isLight&&H.layers.test(F.layers)&&(f.pushLight(H),H.castShadow&&f.pushShadow(H))}),S!==W&&S.traverseVisible(function(H){H.isLight&&H.layers.test(F.layers)&&(f.pushLight(H),H.castShadow&&f.pushShadow(H))}),f.setupLights(v._useLegacyLights);const q=new Set;return S.traverse(function(H){const D=H.material;if(D)if(Array.isArray(D))for(let J=0;J<D.length;J++){const ee=D[J];ge(ee,W,H),q.add(ee)}else ge(D,W,H),q.add(D)}),y.pop(),f=null,q},this.compileAsync=function(S,F,W=null){const q=this.compile(S,F,W);return new Promise(H=>{function D(){if(q.forEach(function(J){Xe.get(J).currentProgram.isReady()&&q.delete(J)}),q.size===0){H(S);return}setTimeout(D,10)}Ie.get("KHR_parallel_shader_compile")!==null?D():setTimeout(D,10)})};let Ue=null;function mt(S){Ue&&Ue(S)}function Tt(){Bt.stop()}function nt(){Bt.start()}const Bt=new vh;Bt.setAnimationLoop(mt),typeof self<"u"&&Bt.setContext(self),this.setAnimationLoop=function(S){Ue=S,Ze.setAnimationLoop(S),S===null?Bt.stop():Bt.start()},Ze.addEventListener("sessionstart",Tt),Ze.addEventListener("sessionend",nt),this.render=function(S,F){if(F!==void 0&&F.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(E===!0)return;S.matrixWorldAutoUpdate===!0&&S.updateMatrixWorld(),F.parent===null&&F.matrixWorldAutoUpdate===!0&&F.updateMatrixWorld(),Ze.enabled===!0&&Ze.isPresenting===!0&&(Ze.cameraAutoUpdate===!0&&Ze.updateCamera(F),F=Ze.getCamera()),S.isScene===!0&&S.onBeforeRender(v,S,F,b),f=Fe.get(S,y.length),f.init(),y.push(f),ke.multiplyMatrices(F.projectionMatrix,F.matrixWorldInverse),Be.setFromProjectionMatrix(ke),se=this.localClippingEnabled,V=pe.init(this.clippingPlanes,se),_=et.get(S,m.length),_.init(),m.push(_),En(S,F,0,v.sortObjects),_.finish(),v.sortObjects===!0&&_.sort(K,Y),this.info.render.frame++,V===!0&&pe.beginShadows();const W=f.state.shadowsArray;if(xe.render(W,S,F),V===!0&&pe.endShadows(),this.info.autoReset===!0&&this.info.reset(),(Ze.enabled===!1||Ze.isPresenting===!1||Ze.hasDepthSensing()===!1)&&$e.render(_,S),f.setupLights(v._useLegacyLights),F.isArrayCamera){const q=F.cameras;for(let H=0,D=q.length;H<D;H++){const J=q[H];Sr(_,S,J,J.viewport)}}else Sr(_,S,F);b!==null&&(Ke.updateMultisampleRenderTarget(b),Ke.updateRenderTargetMipmap(b)),S.isScene===!0&&S.onAfterRender(v,S,F),be.resetDefaultState(),N=-1,B=null,y.pop(),y.length>0?f=y[y.length-1]:f=null,m.pop(),m.length>0?_=m[m.length-1]:_=null};function En(S,F,W,q){if(S.visible===!1)return;if(S.layers.test(F.layers)){if(S.isGroup)W=S.renderOrder;else if(S.isLOD)S.autoUpdate===!0&&S.update(F);else if(S.isLight)f.pushLight(S),S.castShadow&&f.pushShadow(S);else if(S.isSprite){if(!S.frustumCulled||Be.intersectsSprite(S)){q&&Ee.setFromMatrixPosition(S.matrixWorld).applyMatrix4(ke);const J=Z.update(S),ee=S.material;ee.visible&&_.push(S,J,ee,W,Ee.z,null)}}else if((S.isMesh||S.isLine||S.isPoints)&&(!S.frustumCulled||Be.intersectsObject(S))){const J=Z.update(S),ee=S.material;if(q&&(S.boundingSphere!==void 0?(S.boundingSphere===null&&S.computeBoundingSphere(),Ee.copy(S.boundingSphere.center)):(J.boundingSphere===null&&J.computeBoundingSphere(),Ee.copy(J.boundingSphere.center)),Ee.applyMatrix4(S.matrixWorld).applyMatrix4(ke)),Array.isArray(ee)){const le=J.groups;for(let he=0,me=le.length;he<me;he++){const fe=le[he],Le=ee[fe.materialIndex];Le&&Le.visible&&_.push(S,J,Le,W,Ee.z,fe)}}else ee.visible&&_.push(S,J,ee,W,Ee.z,null)}}const D=S.children;for(let J=0,ee=D.length;J<ee;J++)En(D[J],F,W,q)}function Sr(S,F,W,q){const H=S.opaque,D=S.transmissive,J=S.transparent;f.setupLightsView(W),V===!0&&pe.setGlobalState(v.clippingPlanes,W),D.length>0&&ds(H,D,F,W),q&&Ne.viewport(x.copy(q)),H.length>0&&Ii(H,F,W),D.length>0&&Ii(D,F,W),J.length>0&&Ii(J,F,W),Ne.buffers.depth.setTest(!0),Ne.buffers.depth.setMask(!0),Ne.buffers.color.setMask(!0),Ne.setPolygonOffset(!1)}function ds(S,F,W,q){if((W.isScene===!0?W.overrideMaterial:null)!==null)return;const D=Oe.isWebGL2;ye===null&&(ye=new Mr(1,1,{generateMipmaps:!0,type:Ie.has("EXT_color_buffer_half_float")?Ns:Ji,minFilter:wi,samples:D?4:0})),v.getDrawingBufferSize(Ae),D?ye.setSize(Ae.x,Ae.y):ye.setSize(Ra(Ae.x),Ra(Ae.y));const J=v.getRenderTarget();v.setRenderTarget(ye),v.getClearColor($),P=v.getClearAlpha(),P<1&&v.setClearColor(16777215,.5),v.clear();const ee=v.toneMapping;v.toneMapping=Zi,Ii(S,W,q),Ke.updateMultisampleRenderTarget(ye),Ke.updateRenderTargetMipmap(ye);let le=!1;for(let he=0,me=F.length;he<me;he++){const fe=F[he],Le=fe.object,it=fe.geometry,qe=fe.material,St=fe.group;if(qe.side===si&&Le.layers.test(q.layers)){const ze=qe.side;qe.side=Pn,qe.needsUpdate=!0,Di(Le,W,q,it,qe,St),qe.side=ze,qe.needsUpdate=!0,le=!0}}le===!0&&(Ke.updateMultisampleRenderTarget(ye),Ke.updateRenderTargetMipmap(ye)),v.setRenderTarget(J),v.setClearColor($,P),v.toneMapping=ee}function Ii(S,F,W){const q=F.isScene===!0?F.overrideMaterial:null;for(let H=0,D=S.length;H<D;H++){const J=S[H],ee=J.object,le=J.geometry,he=q===null?J.material:q,me=J.group;ee.layers.test(W.layers)&&Di(ee,F,W,le,he,me)}}function Di(S,F,W,q,H,D){S.onBeforeRender(v,F,W,q,H,D),S.modelViewMatrix.multiplyMatrices(W.matrixWorldInverse,S.matrixWorld),S.normalMatrix.getNormalMatrix(S.modelViewMatrix),H.onBeforeRender(v,F,W,q,S,D),H.transparent===!0&&H.side===si&&H.forceSinglePass===!1?(H.side=Pn,H.needsUpdate=!0,v.renderBufferDirect(W,F,q,H,S,D),H.side=Ci,H.needsUpdate=!0,v.renderBufferDirect(W,F,q,H,S,D),H.side=si):v.renderBufferDirect(W,F,q,H,S,D),S.onAfterRender(v,F,W,q,H,D)}function pi(S,F,W){F.isScene!==!0&&(F=pt);const q=Xe.get(S),H=f.state.lights,D=f.state.shadowsArray,J=H.state.version,ee=ie.getParameters(S,H.state,D,F,W),le=ie.getProgramCacheKey(ee);let he=q.programs;q.environment=S.isMeshStandardMaterial?F.environment:null,q.fog=F.fog,q.envMap=(S.isMeshStandardMaterial?w:Mt).get(S.envMap||q.environment),q.envMapRotation=q.environment!==null&&S.envMap===null?F.environmentRotation:S.envMapRotation,he===void 0&&(S.addEventListener("dispose",G),he=new Map,q.programs=he);let me=he.get(le);if(me!==void 0){if(q.currentProgram===me&&q.lightsStateVersion===J)return ks(S,ee),me}else ee.uniforms=ie.getUniforms(S),S.onBuild(W,ee,v),S.onBeforeCompile(ee,v),me=ie.acquireProgram(ee,le),he.set(le,me),q.uniforms=ee.uniforms;const fe=q.uniforms;return(!S.isShaderMaterial&&!S.isRawShaderMaterial||S.clipping===!0)&&(fe.clippingPlanes=pe.uniform),ks(S,ee),q.needsLights=Hs(S),q.lightsStateVersion=J,q.needsLights&&(fe.ambientLightColor.value=H.state.ambient,fe.lightProbe.value=H.state.probe,fe.directionalLights.value=H.state.directional,fe.directionalLightShadows.value=H.state.directionalShadow,fe.spotLights.value=H.state.spot,fe.spotLightShadows.value=H.state.spotShadow,fe.rectAreaLights.value=H.state.rectArea,fe.ltc_1.value=H.state.rectAreaLTC1,fe.ltc_2.value=H.state.rectAreaLTC2,fe.pointLights.value=H.state.point,fe.pointLightShadows.value=H.state.pointShadow,fe.hemisphereLights.value=H.state.hemi,fe.directionalShadowMap.value=H.state.directionalShadowMap,fe.directionalShadowMatrix.value=H.state.directionalShadowMatrix,fe.spotShadowMap.value=H.state.spotShadowMap,fe.spotLightMatrix.value=H.state.spotLightMatrix,fe.spotLightMap.value=H.state.spotLightMap,fe.pointShadowMap.value=H.state.pointShadowMap,fe.pointShadowMatrix.value=H.state.pointShadowMatrix),q.currentProgram=me,q.uniformsList=null,me}function fs(S){if(S.uniformsList===null){const F=S.currentProgram.getUniforms();S.uniformsList=ya.seqWithValue(F.seq,S.uniforms)}return S.uniformsList}function ks(S,F){const W=Xe.get(S);W.outputColorSpace=F.outputColorSpace,W.batching=F.batching,W.instancing=F.instancing,W.instancingColor=F.instancingColor,W.instancingMorph=F.instancingMorph,W.skinning=F.skinning,W.morphTargets=F.morphTargets,W.morphNormals=F.morphNormals,W.morphColors=F.morphColors,W.morphTargetsCount=F.morphTargetsCount,W.numClippingPlanes=F.numClippingPlanes,W.numIntersection=F.numClipIntersection,W.vertexAlphas=F.vertexAlphas,W.vertexTangents=F.vertexTangents,W.toneMapping=F.toneMapping}function ps(S,F,W,q,H){F.isScene!==!0&&(F=pt),Ke.resetTextureUnits();const D=F.fog,J=q.isMeshStandardMaterial?F.environment:null,ee=b===null?v.outputColorSpace:b.isXRRenderTarget===!0?b.texture.colorSpace:mn,le=(q.isMeshStandardMaterial?w:Mt).get(q.envMap||J),he=q.vertexColors===!0&&!!W.attributes.color&&W.attributes.color.itemSize===4,me=!!W.attributes.tangent&&(!!q.normalMap||q.anisotropy>0),fe=!!W.morphAttributes.position,Le=!!W.morphAttributes.normal,it=!!W.morphAttributes.color;let qe=Zi;q.toneMapped&&(b===null||b.isXRRenderTarget===!0)&&(qe=v.toneMapping);const St=W.morphAttributes.position||W.morphAttributes.normal||W.morphAttributes.color,ze=St!==void 0?St.length:0,Pe=Xe.get(q),dn=f.state.lights;if(V===!0&&(se===!0||S!==B)){const Ut=S===B&&q.id===N;pe.setState(q,S,Ut)}let ht=!1;q.version===Pe.__version?(Pe.needsLights&&Pe.lightsStateVersion!==dn.state.version||Pe.outputColorSpace!==ee||H.isBatchedMesh&&Pe.batching===!1||!H.isBatchedMesh&&Pe.batching===!0||H.isInstancedMesh&&Pe.instancing===!1||!H.isInstancedMesh&&Pe.instancing===!0||H.isSkinnedMesh&&Pe.skinning===!1||!H.isSkinnedMesh&&Pe.skinning===!0||H.isInstancedMesh&&Pe.instancingColor===!0&&H.instanceColor===null||H.isInstancedMesh&&Pe.instancingColor===!1&&H.instanceColor!==null||H.isInstancedMesh&&Pe.instancingMorph===!0&&H.morphTexture===null||H.isInstancedMesh&&Pe.instancingMorph===!1&&H.morphTexture!==null||Pe.envMap!==le||q.fog===!0&&Pe.fog!==D||Pe.numClippingPlanes!==void 0&&(Pe.numClippingPlanes!==pe.numPlanes||Pe.numIntersection!==pe.numIntersection)||Pe.vertexAlphas!==he||Pe.vertexTangents!==me||Pe.morphTargets!==fe||Pe.morphNormals!==Le||Pe.morphColors!==it||Pe.toneMapping!==qe||Oe.isWebGL2===!0&&Pe.morphTargetsCount!==ze)&&(ht=!0):(ht=!0,Pe.__version=q.version);let kt=Pe.currentProgram;ht===!0&&(kt=pi(q,F,H));let jt=!1,Dn=!1,gn=!1;const It=kt.getUniforms(),nn=Pe.uniforms;if(Ne.useProgram(kt.program)&&(jt=!0,Dn=!0,gn=!0),q.id!==N&&(N=q.id,Dn=!0),jt||B!==S){It.setValue(U,"projectionMatrix",S.projectionMatrix),It.setValue(U,"viewMatrix",S.matrixWorldInverse);const Ut=It.map.cameraPosition;Ut!==void 0&&Ut.setValue(U,Ee.setFromMatrixPosition(S.matrixWorld)),Oe.logarithmicDepthBuffer&&It.setValue(U,"logDepthBufFC",2/(Math.log(S.far+1)/Math.LN2)),(q.isMeshPhongMaterial||q.isMeshToonMaterial||q.isMeshLambertMaterial||q.isMeshBasicMaterial||q.isMeshStandardMaterial||q.isShaderMaterial)&&It.setValue(U,"isOrthographic",S.isOrthographicCamera===!0),B!==S&&(B=S,Dn=!0,gn=!0)}if(H.isSkinnedMesh){It.setOptional(U,H,"bindMatrix"),It.setOptional(U,H,"bindMatrixInverse");const Ut=H.skeleton;Ut&&(Oe.floatVertexTextures?(Ut.boneTexture===null&&Ut.computeBoneTexture(),It.setValue(U,"boneTexture",Ut.boneTexture,Ke)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}H.isBatchedMesh&&(It.setOptional(U,H,"batchingTexture"),It.setValue(U,"batchingTexture",H._matricesTexture,Ke));const bn=W.morphAttributes;if((bn.position!==void 0||bn.normal!==void 0||bn.color!==void 0&&Oe.isWebGL2===!0)&&ue.update(H,W,kt),(Dn||Pe.receiveShadow!==H.receiveShadow)&&(Pe.receiveShadow=H.receiveShadow,It.setValue(U,"receiveShadow",H.receiveShadow)),q.isMeshGouraudMaterial&&q.envMap!==null&&(nn.envMap.value=le,nn.flipEnvMap.value=le.isCubeTexture&&le.isRenderTargetTexture===!1?-1:1),Dn&&(It.setValue(U,"toneMappingExposure",v.toneMappingExposure),Pe.needsLights&&zs(nn,gn),D&&q.fog===!0&&re.refreshFogUniforms(nn,D),re.refreshMaterialUniforms(nn,q,j,k,ye),ya.upload(U,fs(Pe),nn,Ke)),q.isShaderMaterial&&q.uniformsNeedUpdate===!0&&(ya.upload(U,fs(Pe),nn,Ke),q.uniformsNeedUpdate=!1),q.isSpriteMaterial&&It.setValue(U,"center",H.center),It.setValue(U,"modelViewMatrix",H.modelViewMatrix),It.setValue(U,"normalMatrix",H.normalMatrix),It.setValue(U,"modelMatrix",H.matrixWorld),q.isShaderMaterial||q.isRawShaderMaterial){const Ut=q.uniformsGroups;for(let rn=0,sn=Ut.length;rn<sn;rn++)if(Oe.isWebGL2){const an=Ut[rn];Re.update(an,kt),Re.bind(an,kt)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return kt}function zs(S,F){S.ambientLightColor.needsUpdate=F,S.lightProbe.needsUpdate=F,S.directionalLights.needsUpdate=F,S.directionalLightShadows.needsUpdate=F,S.pointLights.needsUpdate=F,S.pointLightShadows.needsUpdate=F,S.spotLights.needsUpdate=F,S.spotLightShadows.needsUpdate=F,S.rectAreaLights.needsUpdate=F,S.hemisphereLights.needsUpdate=F}function Hs(S){return S.isMeshLambertMaterial||S.isMeshToonMaterial||S.isMeshPhongMaterial||S.isMeshStandardMaterial||S.isShadowMaterial||S.isShaderMaterial&&S.lights===!0}this.getActiveCubeFace=function(){return C},this.getActiveMipmapLevel=function(){return A},this.getRenderTarget=function(){return b},this.setRenderTargetTextures=function(S,F,W){Xe.get(S.texture).__webglTexture=F,Xe.get(S.depthTexture).__webglTexture=W;const q=Xe.get(S);q.__hasExternalTextures=!0,q.__autoAllocateDepthBuffer=W===void 0,q.__autoAllocateDepthBuffer||Ie.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),q.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(S,F){const W=Xe.get(S);W.__webglFramebuffer=F,W.__useDefaultFramebuffer=F===void 0},this.setRenderTarget=function(S,F=0,W=0){b=S,C=F,A=W;let q=!0,H=null,D=!1,J=!1;if(S){const le=Xe.get(S);le.__useDefaultFramebuffer!==void 0?(Ne.bindFramebuffer(U.FRAMEBUFFER,null),q=!1):le.__webglFramebuffer===void 0?Ke.setupRenderTarget(S):le.__hasExternalTextures&&Ke.rebindTextures(S,Xe.get(S.texture).__webglTexture,Xe.get(S.depthTexture).__webglTexture);const he=S.texture;(he.isData3DTexture||he.isDataArrayTexture||he.isCompressedArrayTexture)&&(J=!0);const me=Xe.get(S).__webglFramebuffer;S.isWebGLCubeRenderTarget?(Array.isArray(me[F])?H=me[F][W]:H=me[F],D=!0):Oe.isWebGL2&&S.samples>0&&Ke.useMultisampledRTT(S)===!1?H=Xe.get(S).__webglMultisampledFramebuffer:Array.isArray(me)?H=me[W]:H=me,x.copy(S.viewport),T.copy(S.scissor),z=S.scissorTest}else x.copy(ae).multiplyScalar(j).floor(),T.copy(ce).multiplyScalar(j).floor(),z=Me;if(Ne.bindFramebuffer(U.FRAMEBUFFER,H)&&Oe.drawBuffers&&q&&Ne.drawBuffers(S,H),Ne.viewport(x),Ne.scissor(T),Ne.setScissorTest(z),D){const le=Xe.get(S.texture);U.framebufferTexture2D(U.FRAMEBUFFER,U.COLOR_ATTACHMENT0,U.TEXTURE_CUBE_MAP_POSITIVE_X+F,le.__webglTexture,W)}else if(J){const le=Xe.get(S.texture),he=F||0;U.framebufferTextureLayer(U.FRAMEBUFFER,U.COLOR_ATTACHMENT0,le.__webglTexture,W||0,he)}N=-1},this.readRenderTargetPixels=function(S,F,W,q,H,D,J){if(!(S&&S.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let ee=Xe.get(S).__webglFramebuffer;if(S.isWebGLCubeRenderTarget&&J!==void 0&&(ee=ee[J]),ee){Ne.bindFramebuffer(U.FRAMEBUFFER,ee);try{const le=S.texture,he=le.format,me=le.type;if(he!==Xn&&De.convert(he)!==U.getParameter(U.IMPLEMENTATION_COLOR_READ_FORMAT)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const fe=me===Ns&&(Ie.has("EXT_color_buffer_half_float")||Oe.isWebGL2&&Ie.has("EXT_color_buffer_float"));if(me!==Ji&&De.convert(me)!==U.getParameter(U.IMPLEMENTATION_COLOR_READ_TYPE)&&!(me===Jn&&(Oe.isWebGL2||Ie.has("OES_texture_float")||Ie.has("WEBGL_color_buffer_float")))&&!fe){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}F>=0&&F<=S.width-q&&W>=0&&W<=S.height-H&&U.readPixels(F,W,q,H,De.convert(he),De.convert(me),D)}finally{const le=b!==null?Xe.get(b).__webglFramebuffer:null;Ne.bindFramebuffer(U.FRAMEBUFFER,le)}}},this.copyFramebufferToTexture=function(S,F,W=0){const q=Math.pow(2,-W),H=Math.floor(F.image.width*q),D=Math.floor(F.image.height*q);Ke.setTexture2D(F,0),U.copyTexSubImage2D(U.TEXTURE_2D,W,0,0,S.x,S.y,H,D),Ne.unbindTexture()},this.copyTextureToTexture=function(S,F,W,q=0){const H=F.image.width,D=F.image.height,J=De.convert(W.format),ee=De.convert(W.type);Ke.setTexture2D(W,0),U.pixelStorei(U.UNPACK_FLIP_Y_WEBGL,W.flipY),U.pixelStorei(U.UNPACK_PREMULTIPLY_ALPHA_WEBGL,W.premultiplyAlpha),U.pixelStorei(U.UNPACK_ALIGNMENT,W.unpackAlignment),F.isDataTexture?U.texSubImage2D(U.TEXTURE_2D,q,S.x,S.y,H,D,J,ee,F.image.data):F.isCompressedTexture?U.compressedTexSubImage2D(U.TEXTURE_2D,q,S.x,S.y,F.mipmaps[0].width,F.mipmaps[0].height,J,F.mipmaps[0].data):U.texSubImage2D(U.TEXTURE_2D,q,S.x,S.y,J,ee,F.image),q===0&&W.generateMipmaps&&U.generateMipmap(U.TEXTURE_2D),Ne.unbindTexture()},this.copyTextureToTexture3D=function(S,F,W,q,H=0){if(v.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}const D=Math.round(S.max.x-S.min.x),J=Math.round(S.max.y-S.min.y),ee=S.max.z-S.min.z+1,le=De.convert(q.format),he=De.convert(q.type);let me;if(q.isData3DTexture)Ke.setTexture3D(q,0),me=U.TEXTURE_3D;else if(q.isDataArrayTexture||q.isCompressedArrayTexture)Ke.setTexture2DArray(q,0),me=U.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}U.pixelStorei(U.UNPACK_FLIP_Y_WEBGL,q.flipY),U.pixelStorei(U.UNPACK_PREMULTIPLY_ALPHA_WEBGL,q.premultiplyAlpha),U.pixelStorei(U.UNPACK_ALIGNMENT,q.unpackAlignment);const fe=U.getParameter(U.UNPACK_ROW_LENGTH),Le=U.getParameter(U.UNPACK_IMAGE_HEIGHT),it=U.getParameter(U.UNPACK_SKIP_PIXELS),qe=U.getParameter(U.UNPACK_SKIP_ROWS),St=U.getParameter(U.UNPACK_SKIP_IMAGES),ze=W.isCompressedTexture?W.mipmaps[H]:W.image;U.pixelStorei(U.UNPACK_ROW_LENGTH,ze.width),U.pixelStorei(U.UNPACK_IMAGE_HEIGHT,ze.height),U.pixelStorei(U.UNPACK_SKIP_PIXELS,S.min.x),U.pixelStorei(U.UNPACK_SKIP_ROWS,S.min.y),U.pixelStorei(U.UNPACK_SKIP_IMAGES,S.min.z),W.isDataTexture||W.isData3DTexture?U.texSubImage3D(me,H,F.x,F.y,F.z,D,J,ee,le,he,ze.data):q.isCompressedArrayTexture?U.compressedTexSubImage3D(me,H,F.x,F.y,F.z,D,J,ee,le,ze.data):U.texSubImage3D(me,H,F.x,F.y,F.z,D,J,ee,le,he,ze),U.pixelStorei(U.UNPACK_ROW_LENGTH,fe),U.pixelStorei(U.UNPACK_IMAGE_HEIGHT,Le),U.pixelStorei(U.UNPACK_SKIP_PIXELS,it),U.pixelStorei(U.UNPACK_SKIP_ROWS,qe),U.pixelStorei(U.UNPACK_SKIP_IMAGES,St),H===0&&q.generateMipmaps&&U.generateMipmap(me),Ne.unbindTexture()},this.initTexture=function(S){S.isCubeTexture?Ke.setTextureCube(S,0):S.isData3DTexture?Ke.setTexture3D(S,0):S.isDataArrayTexture||S.isCompressedArrayTexture?Ke.setTexture2DArray(S,0):Ke.setTexture2D(S,0),Ne.unbindTexture()},this.resetState=function(){C=0,A=0,b=null,Ne.reset(),be.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Ri}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=e===ol?"display-p3":"srgb",t.unpackColorSpace=bt.workingColorSpace===La?"display-p3":"srgb"}get useLegacyLights(){return console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights}set useLegacyLights(e){console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights=e}}class c0 extends Ko{}c0.prototype.isWebGL1Renderer=!0;class bo extends Wt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new ci,this.environmentRotation=new ci,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),t.object.environmentRotation=this.environmentRotation.toArray(),t}}class u0{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=Xo,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.version=0,this.uuid=ti()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return lh("THREE.InterleavedBuffer: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let i=0,s=this.stride;i<s;i++)this.array[e+i]=t.array[n+i];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=ti()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(t,this.stride);return n.setUsage(this.usage),n}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=ti()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const wn=new L;class fl{constructor(e,t,n,i=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=n,this.normalized=i}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)wn.fromBufferAttribute(this,t),wn.applyMatrix4(e),this.setXYZ(t,wn.x,wn.y,wn.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)wn.fromBufferAttribute(this,t),wn.applyNormalMatrix(e),this.setXYZ(t,wn.x,wn.y,wn.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)wn.fromBufferAttribute(this,t),wn.transformDirection(e),this.setXYZ(t,wn.x,wn.y,wn.z);return this}getComponent(e,t){let n=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(n=Qn(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=wt(n,this.array)),this.data.array[e*this.data.stride+this.offset+t]=n,this}setX(e,t){return this.normalized&&(t=wt(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=wt(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=wt(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=wt(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=Qn(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=Qn(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=Qn(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=Qn(t,this.array)),t}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=wt(t,this.array),n=wt(n,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,i){return e=e*this.data.stride+this.offset,this.normalized&&(t=wt(t,this.array),n=wt(n,this.array),i=wt(i,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=i,this}setXYZW(e,t,n,i,s){return e=e*this.data.stride+this.offset,this.normalized&&(t=wt(t,this.array),n=wt(n,this.array),i=wt(i,this.array),s=wt(s,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=i,this.data.array[e+3]=s,this}clone(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const i=n*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)t.push(this.data.array[i+s])}return new Qt(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new fl(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const i=n*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)t.push(this.data.array[i+s])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}const fu=new L,pu=new Nt,mu=new Nt,h0=new L,gu=new Ve,ha=new L,To=new hi,_u=new Ve,Ao=new Pa;class d0 extends Vt{constructor(e,t){super(e,t),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode=Kl,this.bindMatrix=new Ve,this.bindMatrixInverse=new Ve,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){const e=this.geometry;this.boundingBox===null&&(this.boundingBox=new ui),this.boundingBox.makeEmpty();const t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,ha),this.boundingBox.expandByPoint(ha)}computeBoundingSphere(){const e=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new hi),this.boundingSphere.makeEmpty();const t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,ha),this.boundingSphere.expandByPoint(ha)}copy(e,t){return super.copy(e,t),this.bindMode=e.bindMode,this.bindMatrix.copy(e.bindMatrix),this.bindMatrixInverse.copy(e.bindMatrixInverse),this.skeleton=e.skeleton,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}raycast(e,t){const n=this.material,i=this.matrixWorld;n!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),To.copy(this.boundingSphere),To.applyMatrix4(i),e.ray.intersectsSphere(To)!==!1&&(_u.copy(i).invert(),Ao.copy(e.ray).applyMatrix4(_u),!(this.boundingBox!==null&&Ao.intersectsBox(this.boundingBox)===!1)&&this._computeIntersections(e,t,Ao)))}getVertexPosition(e,t){return super.getVertexPosition(e,t),this.applyBoneTransform(e,t),t}bind(e,t){this.skeleton=e,t===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),t=this.matrixWorld),this.bindMatrix.copy(t),this.bindMatrixInverse.copy(t).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){const e=new Nt,t=this.geometry.attributes.skinWeight;for(let n=0,i=t.count;n<i;n++){e.fromBufferAttribute(t,n);const s=1/e.manhattanLength();s!==1/0?e.multiplyScalar(s):e.set(1,0,0,0),t.setXYZW(n,e.x,e.y,e.z,e.w)}}updateMatrixWorld(e){super.updateMatrixWorld(e),this.bindMode===Kl?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode===vf?this.bindMatrixInverse.copy(this.bindMatrix).invert():console.warn("THREE.SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(e,t){const n=this.skeleton,i=this.geometry;pu.fromBufferAttribute(i.attributes.skinIndex,e),mu.fromBufferAttribute(i.attributes.skinWeight,e),fu.copy(t).applyMatrix4(this.bindMatrix),t.set(0,0,0);for(let s=0;s<4;s++){const a=mu.getComponent(s);if(a!==0){const o=pu.getComponent(s);gu.multiplyMatrices(n.bones[o].matrixWorld,n.boneInverses[o]),t.addScaledVector(h0.copy(fu).applyMatrix4(gu),a)}}return t.applyMatrix4(this.bindMatrixInverse)}}class Th extends Wt{constructor(){super(),this.isBone=!0,this.type="Bone"}}class Ah extends un{constructor(e=null,t=1,n=1,i,s,a,o,l,c=cn,u=cn,h,d){super(null,a,o,l,c,u,i,s,h,d),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const vu=new Ve,f0=new Ve;class pl{constructor(e=[],t=[]){this.uuid=ti(),this.bones=e.slice(0),this.boneInverses=t,this.boneMatrices=null,this.boneTexture=null,this.init()}init(){const e=this.bones,t=this.boneInverses;if(this.boneMatrices=new Float32Array(e.length*16),t.length===0)this.calculateInverses();else if(e.length!==t.length){console.warn("THREE.Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let n=0,i=this.bones.length;n<i;n++)this.boneInverses.push(new Ve)}}calculateInverses(){this.boneInverses.length=0;for(let e=0,t=this.bones.length;e<t;e++){const n=new Ve;this.bones[e]&&n.copy(this.bones[e].matrixWorld).invert(),this.boneInverses.push(n)}}pose(){for(let e=0,t=this.bones.length;e<t;e++){const n=this.bones[e];n&&n.matrixWorld.copy(this.boneInverses[e]).invert()}for(let e=0,t=this.bones.length;e<t;e++){const n=this.bones[e];n&&(n.parent&&n.parent.isBone?(n.matrix.copy(n.parent.matrixWorld).invert(),n.matrix.multiply(n.matrixWorld)):n.matrix.copy(n.matrixWorld),n.matrix.decompose(n.position,n.quaternion,n.scale))}}update(){const e=this.bones,t=this.boneInverses,n=this.boneMatrices,i=this.boneTexture;for(let s=0,a=e.length;s<a;s++){const o=e[s]?e[s].matrixWorld:f0;vu.multiplyMatrices(o,t[s]),vu.toArray(n,s*16)}i!==null&&(i.needsUpdate=!0)}clone(){return new pl(this.bones,this.boneInverses)}computeBoneTexture(){let e=Math.sqrt(this.bones.length*4);e=Math.ceil(e/4)*4,e=Math.max(e,4);const t=new Float32Array(e*e*4);t.set(this.boneMatrices);const n=new Ah(t,e,e,Xn,Jn);return n.needsUpdate=!0,this.boneMatrices=t,this.boneTexture=n,this}getBoneByName(e){for(let t=0,n=this.bones.length;t<n;t++){const i=this.bones[t];if(i.name===e)return i}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(e,t){this.uuid=e.uuid;for(let n=0,i=e.bones.length;n<i;n++){const s=e.bones[n];let a=t[s];a===void 0&&(console.warn("THREE.Skeleton: No bone found with UUID:",s),a=new Th),this.bones.push(a),this.boneInverses.push(new Ve().fromArray(e.boneInverses[n]))}return this.init(),this}toJSON(){const e={metadata:{version:4.6,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};e.uuid=this.uuid;const t=this.bones,n=this.boneInverses;for(let i=0,s=t.length;i<s;i++){const a=t[i];e.bones.push(a.uuid);const o=n[i];e.boneInverses.push(o.toArray())}return e}}class $o extends Qt{constructor(e,t,n,i=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=i}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){const e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}}const Hr=new Ve,xu=new Ve,da=[],Mu=new ui,p0=new Ve,Ss=new Vt,Es=new hi;class wh extends Vt{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new $o(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let i=0;i<n;i++)this.setMatrixAt(i,p0)}computeBoundingBox(){const e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new ui),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,Hr),Mu.copy(e.boundingBox).applyMatrix4(Hr),this.boundingBox.union(Mu)}computeBoundingSphere(){const e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new hi),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,Hr),Es.copy(e.boundingSphere).applyMatrix4(Hr),this.boundingSphere.union(Es)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){const n=t.morphTargetInfluences,i=this.morphTexture.source.data.data,s=n.length+1,a=e*s+1;for(let o=0;o<n.length;o++)n[o]=i[a+o]}raycast(e,t){const n=this.matrixWorld,i=this.count;if(Ss.geometry=this.geometry,Ss.material=this.material,Ss.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Es.copy(this.boundingSphere),Es.applyMatrix4(n),e.ray.intersectsSphere(Es)!==!1))for(let s=0;s<i;s++){this.getMatrixAt(s,Hr),xu.multiplyMatrices(n,Hr),Ss.matrixWorld=xu,Ss.raycast(e,da);for(let a=0,o=da.length;a<o;a++){const l=da[a];l.instanceId=s,l.object=this,t.push(l)}da.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new $o(new Float32Array(this.instanceMatrix.count*3),3)),t.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,e*16)}setMorphAt(e,t){const n=t.morphTargetInfluences,i=n.length+1;this.morphTexture===null&&(this.morphTexture=new Ah(new Float32Array(i*this.count),i,this.count,Ju,Jn));const s=this.morphTexture.source.data.data;let a=0;for(let c=0;c<n.length;c++)a+=n[c];const o=this.geometry.morphTargetsRelative?1:1-a,l=i*e;s[l]=o,s.set(n,l+1)}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"})}}class Rh extends li{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Ye(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const yu=new L,Su=new L,Eu=new Ve,wo=new Pa,fa=new hi;class ml extends Wt{constructor(e=new In,t=new Rh){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[0];for(let i=1,s=t.count;i<s;i++)yu.fromBufferAttribute(t,i-1),Su.fromBufferAttribute(t,i),n[i]=n[i-1],n[i]+=yu.distanceTo(Su);e.setAttribute("lineDistance",new hn(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const n=this.geometry,i=this.matrixWorld,s=e.params.Line.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),fa.copy(n.boundingSphere),fa.applyMatrix4(i),fa.radius+=s,e.ray.intersectsSphere(fa)===!1)return;Eu.copy(i).invert(),wo.copy(e.ray).applyMatrix4(Eu);const o=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=new L,u=new L,h=new L,d=new L,p=this.isLineSegments?2:1,g=n.index,f=n.attributes.position;if(g!==null){const m=Math.max(0,a.start),y=Math.min(g.count,a.start+a.count);for(let v=m,E=y-1;v<E;v+=p){const C=g.getX(v),A=g.getX(v+1);if(c.fromBufferAttribute(f,C),u.fromBufferAttribute(f,A),wo.distanceSqToSegment(c,u,d,h)>l)continue;d.applyMatrix4(this.matrixWorld);const N=e.ray.origin.distanceTo(d);N<e.near||N>e.far||t.push({distance:N,point:h.clone().applyMatrix4(this.matrixWorld),index:v,face:null,faceIndex:null,object:this})}}else{const m=Math.max(0,a.start),y=Math.min(f.count,a.start+a.count);for(let v=m,E=y-1;v<E;v+=p){if(c.fromBufferAttribute(f,v),u.fromBufferAttribute(f,v+1),wo.distanceSqToSegment(c,u,d,h)>l)continue;d.applyMatrix4(this.matrixWorld);const A=e.ray.origin.distanceTo(d);A<e.near||A>e.far||t.push({distance:A,point:h.clone().applyMatrix4(this.matrixWorld),index:v,face:null,faceIndex:null,object:this})}}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=i.length;s<a;s++){const o=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}}const bu=new L,Tu=new L;class m0 extends ml{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[];for(let i=0,s=t.count;i<s;i+=2)bu.fromBufferAttribute(t,i),Tu.fromBufferAttribute(t,i+1),n[i]=i===0?0:n[i-1],n[i+1]=n[i]+bu.distanceTo(Tu);e.setAttribute("lineDistance",new hn(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class g0 extends ml{constructor(e,t){super(e,t),this.isLineLoop=!0,this.type="LineLoop"}}class gl extends li{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Ye(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const Au=new Ve,Zo=new Pa,pa=new hi,ma=new L;class Ch extends Wt{constructor(e=new In,t=new gl){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){const n=this.geometry,i=this.matrixWorld,s=e.params.Points.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),pa.copy(n.boundingSphere),pa.applyMatrix4(i),pa.radius+=s,e.ray.intersectsSphere(pa)===!1)return;Au.copy(i).invert(),Zo.copy(e.ray).applyMatrix4(Au);const o=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=n.index,h=n.attributes.position;if(c!==null){const d=Math.max(0,a.start),p=Math.min(c.count,a.start+a.count);for(let g=d,_=p;g<_;g++){const f=c.getX(g);ma.fromBufferAttribute(h,f),wu(ma,f,l,i,e,t,this)}}else{const d=Math.max(0,a.start),p=Math.min(h.count,a.start+a.count);for(let g=d,_=p;g<_;g++)ma.fromBufferAttribute(h,g),wu(ma,g,l,i,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=i.length;s<a;s++){const o=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}}function wu(r,e,t,n,i,s,a){const o=Zo.distanceSqToPoint(r);if(o<t){const l=new L;Zo.closestPointToPoint(r,l),l.applyMatrix4(n);const c=i.ray.origin.distanceTo(l);if(c<i.near||c>i.far)return;s.push({distance:c,distanceToRay:Math.sqrt(o),point:l,index:e,face:null,object:a})}}class di{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(e,t){const n=this.getUtoTmapping(e);return this.getPoint(n,t)}getPoints(e=5){const t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return t}getSpacedPoints(e=5){const t=[];for(let n=0;n<=e;n++)t.push(this.getPointAt(n/e));return t}getLength(){const e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const t=[];let n,i=this.getPoint(0),s=0;t.push(0);for(let a=1;a<=e;a++)n=this.getPoint(a/e),s+=n.distanceTo(i),t.push(s),i=n;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t){const n=this.getLengths();let i=0;const s=n.length;let a;t?a=t:a=e*n[s-1];let o=0,l=s-1,c;for(;o<=l;)if(i=Math.floor(o+(l-o)/2),c=n[i]-a,c<0)o=i+1;else if(c>0)l=i-1;else{l=i;break}if(i=l,n[i]===a)return i/(s-1);const u=n[i],d=n[i+1]-u,p=(a-u)/d;return(i+p)/(s-1)}getTangent(e,t){let i=e-1e-4,s=e+1e-4;i<0&&(i=0),s>1&&(s=1);const a=this.getPoint(i),o=this.getPoint(s),l=t||(a.isVector2?new Se:new L);return l.copy(o).sub(a).normalize(),l}getTangentAt(e,t){const n=this.getUtoTmapping(e);return this.getTangent(n,t)}computeFrenetFrames(e,t){const n=new L,i=[],s=[],a=[],o=new L,l=new Ve;for(let p=0;p<=e;p++){const g=p/e;i[p]=this.getTangentAt(g,new L)}s[0]=new L,a[0]=new L;let c=Number.MAX_VALUE;const u=Math.abs(i[0].x),h=Math.abs(i[0].y),d=Math.abs(i[0].z);u<=c&&(c=u,n.set(1,0,0)),h<=c&&(c=h,n.set(0,1,0)),d<=c&&n.set(0,0,1),o.crossVectors(i[0],n).normalize(),s[0].crossVectors(i[0],o),a[0].crossVectors(i[0],s[0]);for(let p=1;p<=e;p++){if(s[p]=s[p-1].clone(),a[p]=a[p-1].clone(),o.crossVectors(i[p-1],i[p]),o.length()>Number.EPSILON){o.normalize();const g=Math.acos(Jt(i[p-1].dot(i[p]),-1,1));s[p].applyMatrix4(l.makeRotationAxis(o,g))}a[p].crossVectors(i[p],s[p])}if(t===!0){let p=Math.acos(Jt(s[0].dot(s[e]),-1,1));p/=e,i[0].dot(o.crossVectors(s[0],s[e]))>0&&(p=-p);for(let g=1;g<=e;g++)s[g].applyMatrix4(l.makeRotationAxis(i[g],p*g)),a[g].crossVectors(i[g],s[g])}return{tangents:i,normals:s,binormals:a}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){const e={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}}class _l extends di{constructor(e=0,t=0,n=1,i=1,s=0,a=Math.PI*2,o=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=n,this.yRadius=i,this.aStartAngle=s,this.aEndAngle=a,this.aClockwise=o,this.aRotation=l}getPoint(e,t=new Se){const n=t,i=Math.PI*2;let s=this.aEndAngle-this.aStartAngle;const a=Math.abs(s)<Number.EPSILON;for(;s<0;)s+=i;for(;s>i;)s-=i;s<Number.EPSILON&&(a?s=0:s=i),this.aClockwise===!0&&!a&&(s===i?s=-i:s=s-i);const o=this.aStartAngle+e*s;let l=this.aX+this.xRadius*Math.cos(o),c=this.aY+this.yRadius*Math.sin(o);if(this.aRotation!==0){const u=Math.cos(this.aRotation),h=Math.sin(this.aRotation),d=l-this.aX,p=c-this.aY;l=d*u-p*h+this.aX,c=d*h+p*u+this.aY}return n.set(l,c)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){const e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}}class _0 extends _l{constructor(e,t,n,i,s,a){super(e,t,n,n,i,s,a),this.isArcCurve=!0,this.type="ArcCurve"}}function vl(){let r=0,e=0,t=0,n=0;function i(s,a,o,l){r=s,e=o,t=-3*s+3*a-2*o-l,n=2*s-2*a+o+l}return{initCatmullRom:function(s,a,o,l,c){i(a,o,c*(o-s),c*(l-a))},initNonuniformCatmullRom:function(s,a,o,l,c,u,h){let d=(a-s)/c-(o-s)/(c+u)+(o-a)/u,p=(o-a)/u-(l-a)/(u+h)+(l-o)/h;d*=u,p*=u,i(a,o,d,p)},calc:function(s){const a=s*s,o=a*s;return r+e*s+t*a+n*o}}}const ga=new L,Ro=new vl,Co=new vl,Lo=new vl;class v0 extends di{constructor(e=[],t=!1,n="centripetal",i=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=n,this.tension=i}getPoint(e,t=new L){const n=t,i=this.points,s=i.length,a=(s-(this.closed?0:1))*e;let o=Math.floor(a),l=a-o;this.closed?o+=o>0?0:(Math.floor(Math.abs(o)/s)+1)*s:l===0&&o===s-1&&(o=s-2,l=1);let c,u;this.closed||o>0?c=i[(o-1)%s]:(ga.subVectors(i[0],i[1]).add(i[0]),c=ga);const h=i[o%s],d=i[(o+1)%s];if(this.closed||o+2<s?u=i[(o+2)%s]:(ga.subVectors(i[s-1],i[s-2]).add(i[s-1]),u=ga),this.curveType==="centripetal"||this.curveType==="chordal"){const p=this.curveType==="chordal"?.5:.25;let g=Math.pow(c.distanceToSquared(h),p),_=Math.pow(h.distanceToSquared(d),p),f=Math.pow(d.distanceToSquared(u),p);_<1e-4&&(_=1),g<1e-4&&(g=_),f<1e-4&&(f=_),Ro.initNonuniformCatmullRom(c.x,h.x,d.x,u.x,g,_,f),Co.initNonuniformCatmullRom(c.y,h.y,d.y,u.y,g,_,f),Lo.initNonuniformCatmullRom(c.z,h.z,d.z,u.z,g,_,f)}else this.curveType==="catmullrom"&&(Ro.initCatmullRom(c.x,h.x,d.x,u.x,this.tension),Co.initCatmullRom(c.y,h.y,d.y,u.y,this.tension),Lo.initCatmullRom(c.z,h.z,d.z,u.z,this.tension));return n.set(Ro.calc(l),Co.calc(l),Lo.calc(l)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const i=e.points[t];this.points.push(i.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){const i=this.points[t];e.points.push(i.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const i=e.points[t];this.points.push(new L().fromArray(i))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}}function Ru(r,e,t,n,i){const s=(n-e)*.5,a=(i-t)*.5,o=r*r,l=r*o;return(2*t-2*n+s+a)*l+(-3*t+3*n-2*s-a)*o+s*r+t}function x0(r,e){const t=1-r;return t*t*e}function M0(r,e){return 2*(1-r)*r*e}function y0(r,e){return r*r*e}function Ps(r,e,t,n){return x0(r,e)+M0(r,t)+y0(r,n)}function S0(r,e){const t=1-r;return t*t*t*e}function E0(r,e){const t=1-r;return 3*t*t*r*e}function b0(r,e){return 3*(1-r)*r*r*e}function T0(r,e){return r*r*r*e}function Is(r,e,t,n,i){return S0(r,e)+E0(r,t)+b0(r,n)+T0(r,i)}class Lh extends di{constructor(e=new Se,t=new Se,n=new Se,i=new Se){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=n,this.v3=i}getPoint(e,t=new Se){const n=t,i=this.v0,s=this.v1,a=this.v2,o=this.v3;return n.set(Is(e,i.x,s.x,a.x,o.x),Is(e,i.y,s.y,a.y,o.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class A0 extends di{constructor(e=new L,t=new L,n=new L,i=new L){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=n,this.v3=i}getPoint(e,t=new L){const n=t,i=this.v0,s=this.v1,a=this.v2,o=this.v3;return n.set(Is(e,i.x,s.x,a.x,o.x),Is(e,i.y,s.y,a.y,o.y),Is(e,i.z,s.z,a.z,o.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class Ph extends di{constructor(e=new Se,t=new Se){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new Se){const n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new Se){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class w0 extends di{constructor(e=new L,t=new L){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new L){const n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new L){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class Ih extends di{constructor(e=new Se,t=new Se,n=new Se){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new Se){const n=t,i=this.v0,s=this.v1,a=this.v2;return n.set(Ps(e,i.x,s.x,a.x),Ps(e,i.y,s.y,a.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class R0 extends di{constructor(e=new L,t=new L,n=new L){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new L){const n=t,i=this.v0,s=this.v1,a=this.v2;return n.set(Ps(e,i.x,s.x,a.x),Ps(e,i.y,s.y,a.y),Ps(e,i.z,s.z,a.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class Dh extends di{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new Se){const n=t,i=this.points,s=(i.length-1)*e,a=Math.floor(s),o=s-a,l=i[a===0?a:a-1],c=i[a],u=i[a>i.length-2?i.length-1:a+1],h=i[a>i.length-3?i.length-1:a+2];return n.set(Ru(o,l.x,c.x,u.x,h.x),Ru(o,l.y,c.y,u.y,h.y)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const i=e.points[t];this.points.push(i.clone())}return this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){const i=this.points[t];e.points.push(i.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const i=e.points[t];this.points.push(new Se().fromArray(i))}return this}}var Cu=Object.freeze({__proto__:null,ArcCurve:_0,CatmullRomCurve3:v0,CubicBezierCurve:Lh,CubicBezierCurve3:A0,EllipseCurve:_l,LineCurve:Ph,LineCurve3:w0,QuadraticBezierCurve:Ih,QuadraticBezierCurve3:R0,SplineCurve:Dh});class C0 extends di{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(e){this.curves.push(e)}closePath(){const e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(t)){const n=e.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new Cu[n](t,e))}return this}getPoint(e,t){const n=e*this.getLength(),i=this.getCurveLengths();let s=0;for(;s<i.length;){if(i[s]>=n){const a=i[s]-n,o=this.curves[s],l=o.getLength(),c=l===0?0:1-a/l;return o.getPointAt(c,t)}s++}return null}getLength(){const e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const e=[];let t=0;for(let n=0,i=this.curves.length;n<i;n++)t+=this.curves[n].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){const t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){const t=[];let n;for(let i=0,s=this.curves;i<s.length;i++){const a=s[i],o=a.isEllipseCurve?e*2:a.isLineCurve||a.isLineCurve3?1:a.isSplineCurve?e*a.points.length:e,l=a.getPoints(o);for(let c=0;c<l.length;c++){const u=l[c];n&&n.equals(u)||(t.push(u),n=u)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){const i=e.curves[t];this.curves.push(i.clone())}return this.autoClose=e.autoClose,this}toJSON(){const e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,n=this.curves.length;t<n;t++){const i=this.curves[t];e.curves.push(i.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){const i=e.curves[t];this.curves.push(new Cu[i.type]().fromJSON(i))}return this}}class L0 extends C0{constructor(e){super(),this.type="Path",this.currentPoint=new Se,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,n=e.length;t<n;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){const n=new Ph(this.currentPoint.clone(),new Se(e,t));return this.curves.push(n),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,n,i){const s=new Ih(this.currentPoint.clone(),new Se(e,t),new Se(n,i));return this.curves.push(s),this.currentPoint.set(n,i),this}bezierCurveTo(e,t,n,i,s,a){const o=new Lh(this.currentPoint.clone(),new Se(e,t),new Se(n,i),new Se(s,a));return this.curves.push(o),this.currentPoint.set(s,a),this}splineThru(e){const t=[this.currentPoint.clone()].concat(e),n=new Dh(t);return this.curves.push(n),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,n,i,s,a){const o=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(e+o,t+l,n,i,s,a),this}absarc(e,t,n,i,s,a){return this.absellipse(e,t,n,n,i,s,a),this}ellipse(e,t,n,i,s,a,o,l){const c=this.currentPoint.x,u=this.currentPoint.y;return this.absellipse(e+c,t+u,n,i,s,a,o,l),this}absellipse(e,t,n,i,s,a,o,l){const c=new _l(e,t,n,i,s,a,o,l);if(this.curves.length>0){const h=c.getPoint(0);h.equals(this.currentPoint)||this.lineTo(h.x,h.y)}this.curves.push(c);const u=c.getPoint(1);return this.currentPoint.copy(u),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){const e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}}class xl extends In{constructor(e=[new Se(0,-.5),new Se(.5,0),new Se(0,.5)],t=12,n=0,i=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:e,segments:t,phiStart:n,phiLength:i},t=Math.floor(t),i=Jt(i,0,Math.PI*2);const s=[],a=[],o=[],l=[],c=[],u=1/t,h=new L,d=new Se,p=new L,g=new L,_=new L;let f=0,m=0;for(let y=0;y<=e.length-1;y++)switch(y){case 0:f=e[y+1].x-e[y].x,m=e[y+1].y-e[y].y,p.x=m*1,p.y=-f,p.z=m*0,_.copy(p),p.normalize(),l.push(p.x,p.y,p.z);break;case e.length-1:l.push(_.x,_.y,_.z);break;default:f=e[y+1].x-e[y].x,m=e[y+1].y-e[y].y,p.x=m*1,p.y=-f,p.z=m*0,g.copy(p),p.x+=_.x,p.y+=_.y,p.z+=_.z,p.normalize(),l.push(p.x,p.y,p.z),_.copy(g)}for(let y=0;y<=t;y++){const v=n+y*u*i,E=Math.sin(v),C=Math.cos(v);for(let A=0;A<=e.length-1;A++){h.x=e[A].x*E,h.y=e[A].y,h.z=e[A].x*C,a.push(h.x,h.y,h.z),d.x=y/t,d.y=A/(e.length-1),o.push(d.x,d.y);const b=l[3*A+0]*E,N=l[3*A+1],B=l[3*A+0]*C;c.push(b,N,B)}}for(let y=0;y<t;y++)for(let v=0;v<e.length-1;v++){const E=v+y*e.length,C=E,A=E+e.length,b=E+e.length+1,N=E+1;s.push(C,A,N),s.push(b,N,A)}this.setIndex(s),this.setAttribute("position",new hn(a,3)),this.setAttribute("uv",new hn(o,2)),this.setAttribute("normal",new hn(c,3))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new xl(e.points,e.segments,e.phiStart,e.phiLength)}}class Ml extends xl{constructor(e=1,t=1,n=4,i=8){const s=new L0;s.absarc(0,-t/2,e,Math.PI*1.5,0),s.absarc(0,t/2,e,0,Math.PI*.5),super(s.getPoints(n),i),this.type="CapsuleGeometry",this.parameters={radius:e,length:t,capSegments:n,radialSegments:i}}static fromJSON(e){return new Ml(e.radius,e.length,e.capSegments,e.radialSegments)}}class Kr extends In{constructor(e=1,t=1,n=1,i=32,s=1,a=!1,o=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:i,heightSegments:s,openEnded:a,thetaStart:o,thetaLength:l};const c=this;i=Math.floor(i),s=Math.floor(s);const u=[],h=[],d=[],p=[];let g=0;const _=[],f=n/2;let m=0;y(),a===!1&&(e>0&&v(!0),t>0&&v(!1)),this.setIndex(u),this.setAttribute("position",new hn(h,3)),this.setAttribute("normal",new hn(d,3)),this.setAttribute("uv",new hn(p,2));function y(){const E=new L,C=new L;let A=0;const b=(t-e)/n;for(let N=0;N<=s;N++){const B=[],x=N/s,T=x*(t-e)+e;for(let z=0;z<=i;z++){const $=z/i,P=$*l+o,O=Math.sin(P),k=Math.cos(P);C.x=T*O,C.y=-x*n+f,C.z=T*k,h.push(C.x,C.y,C.z),E.set(O,b,k).normalize(),d.push(E.x,E.y,E.z),p.push($,1-x),B.push(g++)}_.push(B)}for(let N=0;N<i;N++)for(let B=0;B<s;B++){const x=_[B][N],T=_[B+1][N],z=_[B+1][N+1],$=_[B][N+1];u.push(x,T,$),u.push(T,z,$),A+=6}c.addGroup(m,A,0),m+=A}function v(E){const C=g,A=new Se,b=new L;let N=0;const B=E===!0?e:t,x=E===!0?1:-1;for(let z=1;z<=i;z++)h.push(0,f*x,0),d.push(0,x,0),p.push(.5,.5),g++;const T=g;for(let z=0;z<=i;z++){const P=z/i*l+o,O=Math.cos(P),k=Math.sin(P);b.x=B*k,b.y=f*x,b.z=B*O,h.push(b.x,b.y,b.z),d.push(0,x,0),A.x=O*.5+.5,A.y=k*.5*x+.5,p.push(A.x,A.y),g++}for(let z=0;z<i;z++){const $=C+z,P=T+z;E===!0?u.push(P,P+1,$):u.push(P+1,P,$),N+=3}c.addGroup(m,N,E===!0?1:2),m+=N}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Kr(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class yl extends Kr{constructor(e=1,t=1,n=32,i=1,s=!1,a=0,o=Math.PI*2){super(0,e,t,n,i,s,a,o),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:n,heightSegments:i,openEnded:s,thetaStart:a,thetaLength:o}}static fromJSON(e){return new yl(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class Sl extends In{constructor(e=1,t=32,n=16,i=0,s=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:i,phiLength:s,thetaStart:a,thetaLength:o},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));const l=Math.min(a+o,Math.PI);let c=0;const u=[],h=new L,d=new L,p=[],g=[],_=[],f=[];for(let m=0;m<=n;m++){const y=[],v=m/n;let E=0;m===0&&a===0?E=.5/t:m===n&&l===Math.PI&&(E=-.5/t);for(let C=0;C<=t;C++){const A=C/t;h.x=-e*Math.cos(i+A*s)*Math.sin(a+v*o),h.y=e*Math.cos(a+v*o),h.z=e*Math.sin(i+A*s)*Math.sin(a+v*o),g.push(h.x,h.y,h.z),d.copy(h).normalize(),_.push(d.x,d.y,d.z),f.push(A+E,1-v),y.push(c++)}u.push(y)}for(let m=0;m<n;m++)for(let y=0;y<t;y++){const v=u[m][y+1],E=u[m][y],C=u[m+1][y],A=u[m+1][y+1];(m!==0||a>0)&&p.push(v,E,A),(m!==n-1||l<Math.PI)&&p.push(E,C,A)}this.setIndex(p),this.setAttribute("position",new hn(g,3)),this.setAttribute("normal",new hn(_,3)),this.setAttribute("uv",new hn(f,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Sl(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class ji extends li{constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new Ye(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ye(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=rh,this.normalScale=new Se(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ci,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class Pi extends ji{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new Se(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return Jt(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new Ye(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new Ye(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new Ye(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}}function _a(r,e,t){return!r||!t&&r.constructor===e?r:typeof e.BYTES_PER_ELEMENT=="number"?new e(r):Array.prototype.slice.call(r)}function P0(r){return ArrayBuffer.isView(r)&&!(r instanceof DataView)}function I0(r){function e(i,s){return r[i]-r[s]}const t=r.length,n=new Array(t);for(let i=0;i!==t;++i)n[i]=i;return n.sort(e),n}function Lu(r,e,t){const n=r.length,i=new r.constructor(n);for(let s=0,a=0;a!==n;++s){const o=t[s]*e;for(let l=0;l!==e;++l)i[a++]=r[o+l]}return i}function Nh(r,e,t,n){let i=1,s=r[0];for(;s!==void 0&&s[n]===void 0;)s=r[i++];if(s===void 0)return;let a=s[n];if(a!==void 0)if(Array.isArray(a))do a=s[n],a!==void 0&&(e.push(s.time),t.push.apply(t,a)),s=r[i++];while(s!==void 0);else if(a.toArray!==void 0)do a=s[n],a!==void 0&&(e.push(s.time),a.toArray(t,t.length)),s=r[i++];while(s!==void 0);else do a=s[n],a!==void 0&&(e.push(s.time),t.push(a)),s=r[i++];while(s!==void 0)}class Bs{constructor(e,t,n,i){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=i!==void 0?i:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){const t=this.parameterPositions;let n=this._cachedIndex,i=t[n],s=t[n-1];n:{e:{let a;t:{i:if(!(e<i)){for(let o=n+2;;){if(i===void 0){if(e<s)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===o)break;if(s=i,i=t[++n],e<i)break e}a=t.length;break t}if(!(e>=s)){const o=t[1];e<o&&(n=2,s=o);for(let l=n-2;;){if(s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(i=s,s=t[--n-1],e>=s)break e}a=n,n=0;break t}break n}for(;n<a;){const o=n+a>>>1;e<t[o]?a=o:n=o+1}if(i=t[n],s=t[n-1],s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,s,i)}return this.interpolate_(n,s,e,i)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){const t=this.resultBuffer,n=this.sampleValues,i=this.valueSize,s=e*i;for(let a=0;a!==i;++a)t[a]=n[s+a];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}}class D0 extends Bs{constructor(e,t,n,i){super(e,t,n,i),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:yc,endingEnd:yc}}intervalChanged_(e,t,n){const i=this.parameterPositions;let s=e-2,a=e+1,o=i[s],l=i[a];if(o===void 0)switch(this.getSettings_().endingStart){case Sc:s=e,o=2*t-n;break;case Ec:s=i.length-2,o=t+i[s]-i[s+1];break;default:s=e,o=n}if(l===void 0)switch(this.getSettings_().endingEnd){case Sc:a=e,l=2*n-t;break;case Ec:a=1,l=n+i[1]-i[0];break;default:a=e-1,l=t}const c=(n-t)*.5,u=this.valueSize;this._weightPrev=c/(t-o),this._weightNext=c/(l-n),this._offsetPrev=s*u,this._offsetNext=a*u}interpolate_(e,t,n,i){const s=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=e*o,c=l-o,u=this._offsetPrev,h=this._offsetNext,d=this._weightPrev,p=this._weightNext,g=(n-t)/(i-t),_=g*g,f=_*g,m=-d*f+2*d*_-d*g,y=(1+d)*f+(-1.5-2*d)*_+(-.5+d)*g+1,v=(-1-p)*f+(1.5+p)*_+.5*g,E=p*f-p*_;for(let C=0;C!==o;++C)s[C]=m*a[u+C]+y*a[c+C]+v*a[l+C]+E*a[h+C];return s}}class N0 extends Bs{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e,t,n,i){const s=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=e*o,c=l-o,u=(n-t)/(i-t),h=1-u;for(let d=0;d!==o;++d)s[d]=a[c+d]*h+a[l+d]*u;return s}}class U0 extends Bs{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e){return this.copySampleValue_(e-1)}}class fi{constructor(e,t,n,i){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=_a(t,this.TimeBufferType),this.values=_a(n,this.ValueBufferType),this.setInterpolation(i||this.DefaultInterpolation)}static toJSON(e){const t=e.constructor;let n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:_a(e.times,Array),values:_a(e.values,Array)};const i=e.getInterpolation();i!==e.DefaultInterpolation&&(n.interpolation=i)}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new U0(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new N0(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new D0(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case Us:t=this.InterpolantFactoryMethodDiscrete;break;case ts:t=this.InterpolantFactoryMethodLinear;break;case Za:t=this.InterpolantFactoryMethodSmooth;break}if(t===void 0){const n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Us;case this.InterpolantFactoryMethodLinear:return ts;case this.InterpolantFactoryMethodSmooth:return Za}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){const t=this.times;for(let n=0,i=t.length;n!==i;++n)t[n]+=e}return this}scale(e){if(e!==1){const t=this.times;for(let n=0,i=t.length;n!==i;++n)t[n]*=e}return this}trim(e,t){const n=this.times,i=n.length;let s=0,a=i-1;for(;s!==i&&n[s]<e;)++s;for(;a!==-1&&n[a]>t;)--a;if(++a,s!==0||a!==i){s>=a&&(a=Math.max(a,1),s=a-1);const o=this.getValueSize();this.times=n.slice(s,a),this.values=this.values.slice(s*o,a*o)}return this}validate(){let e=!0;const t=this.getValueSize();t-Math.floor(t)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),e=!1);const n=this.times,i=this.values,s=n.length;s===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),e=!1);let a=null;for(let o=0;o!==s;o++){const l=n[o];if(typeof l=="number"&&isNaN(l)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,o,l),e=!1;break}if(a!==null&&a>l){console.error("THREE.KeyframeTrack: Out of order keys.",this,o,l,a),e=!1;break}a=l}if(i!==void 0&&P0(i))for(let o=0,l=i.length;o!==l;++o){const c=i[o];if(isNaN(c)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,o,c),e=!1;break}}return e}optimize(){const e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),i=this.getInterpolation()===Za,s=e.length-1;let a=1;for(let o=1;o<s;++o){let l=!1;const c=e[o],u=e[o+1];if(c!==u&&(o!==1||c!==e[0]))if(i)l=!0;else{const h=o*n,d=h-n,p=h+n;for(let g=0;g!==n;++g){const _=t[h+g];if(_!==t[d+g]||_!==t[p+g]){l=!0;break}}}if(l){if(o!==a){e[a]=e[o];const h=o*n,d=a*n;for(let p=0;p!==n;++p)t[d+p]=t[h+p]}++a}}if(s>0){e[a]=e[s];for(let o=s*n,l=a*n,c=0;c!==n;++c)t[l+c]=t[o+c];++a}return a!==e.length?(this.times=e.slice(0,a),this.values=t.slice(0,a*n)):(this.times=e,this.values=t),this}clone(){const e=this.times.slice(),t=this.values.slice(),n=this.constructor,i=new n(this.name,e,t);return i.createInterpolant=this.createInterpolant,i}}fi.prototype.TimeBufferType=Float32Array;fi.prototype.ValueBufferType=Float32Array;fi.prototype.DefaultInterpolation=ts;class cs extends fi{}cs.prototype.ValueTypeName="bool";cs.prototype.ValueBufferType=Array;cs.prototype.DefaultInterpolation=Us;cs.prototype.InterpolantFactoryMethodLinear=void 0;cs.prototype.InterpolantFactoryMethodSmooth=void 0;class Uh extends fi{}Uh.prototype.ValueTypeName="color";class rs extends fi{}rs.prototype.ValueTypeName="number";class F0 extends Bs{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e,t,n,i){const s=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=(n-t)/(i-t);let c=e*o;for(let u=c+o;c!==u;c+=4)Qi.slerpFlat(s,0,a,c-o,a,c,l);return s}}class yr extends fi{InterpolantFactoryMethodLinear(e){return new F0(this.times,this.values,this.getValueSize(),e)}}yr.prototype.ValueTypeName="quaternion";yr.prototype.DefaultInterpolation=ts;yr.prototype.InterpolantFactoryMethodSmooth=void 0;class us extends fi{}us.prototype.ValueTypeName="string";us.prototype.ValueBufferType=Array;us.prototype.DefaultInterpolation=Us;us.prototype.InterpolantFactoryMethodLinear=void 0;us.prototype.InterpolantFactoryMethodSmooth=void 0;class ss extends fi{}ss.prototype.ValueTypeName="vector";class O0{constructor(e,t=-1,n,i=Af){this.name=e,this.tracks=n,this.duration=t,this.blendMode=i,this.uuid=ti(),this.duration<0&&this.resetDuration()}static parse(e){const t=[],n=e.tracks,i=1/(e.fps||1);for(let a=0,o=n.length;a!==o;++a)t.push(k0(n[a]).scale(i));const s=new this(e.name,e.duration,t,e.blendMode);return s.uuid=e.uuid,s}static toJSON(e){const t=[],n=e.tracks,i={name:e.name,duration:e.duration,tracks:t,uuid:e.uuid,blendMode:e.blendMode};for(let s=0,a=n.length;s!==a;++s)t.push(fi.toJSON(n[s]));return i}static CreateFromMorphTargetSequence(e,t,n,i){const s=t.length,a=[];for(let o=0;o<s;o++){let l=[],c=[];l.push((o+s-1)%s,o,(o+1)%s),c.push(0,1,0);const u=I0(l);l=Lu(l,1,u),c=Lu(c,1,u),!i&&l[0]===0&&(l.push(s),c.push(c[0])),a.push(new rs(".morphTargetInfluences["+t[o].name+"]",l,c).scale(1/n))}return new this(e,-1,a)}static findByName(e,t){let n=e;if(!Array.isArray(e)){const i=e;n=i.geometry&&i.geometry.animations||i.animations}for(let i=0;i<n.length;i++)if(n[i].name===t)return n[i];return null}static CreateClipsFromMorphTargetSequences(e,t,n){const i={},s=/^([\w-]*?)([\d]+)$/;for(let o=0,l=e.length;o<l;o++){const c=e[o],u=c.name.match(s);if(u&&u.length>1){const h=u[1];let d=i[h];d||(i[h]=d=[]),d.push(c)}}const a=[];for(const o in i)a.push(this.CreateFromMorphTargetSequence(o,i[o],t,n));return a}static parseAnimation(e,t){if(!e)return console.error("THREE.AnimationClip: No animation in JSONLoader data."),null;const n=function(h,d,p,g,_){if(p.length!==0){const f=[],m=[];Nh(p,f,m,g),f.length!==0&&_.push(new h(d,f,m))}},i=[],s=e.name||"default",a=e.fps||30,o=e.blendMode;let l=e.length||-1;const c=e.hierarchy||[];for(let h=0;h<c.length;h++){const d=c[h].keys;if(!(!d||d.length===0))if(d[0].morphTargets){const p={};let g;for(g=0;g<d.length;g++)if(d[g].morphTargets)for(let _=0;_<d[g].morphTargets.length;_++)p[d[g].morphTargets[_]]=-1;for(const _ in p){const f=[],m=[];for(let y=0;y!==d[g].morphTargets.length;++y){const v=d[g];f.push(v.time),m.push(v.morphTarget===_?1:0)}i.push(new rs(".morphTargetInfluence["+_+"]",f,m))}l=p.length*a}else{const p=".bones["+t[h].name+"]";n(ss,p+".position",d,"pos",i),n(yr,p+".quaternion",d,"rot",i),n(ss,p+".scale",d,"scl",i)}}return i.length===0?null:new this(s,l,i,o)}resetDuration(){const e=this.tracks;let t=0;for(let n=0,i=e.length;n!==i;++n){const s=this.tracks[n];t=Math.max(t,s.times[s.times.length-1])}return this.duration=t,this}trim(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].trim(0,this.duration);return this}validate(){let e=!0;for(let t=0;t<this.tracks.length;t++)e=e&&this.tracks[t].validate();return e}optimize(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].optimize();return this}clone(){const e=[];for(let t=0;t<this.tracks.length;t++)e.push(this.tracks[t].clone());return new this.constructor(this.name,this.duration,e,this.blendMode)}toJSON(){return this.constructor.toJSON(this)}}function B0(r){switch(r.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return rs;case"vector":case"vector2":case"vector3":case"vector4":return ss;case"color":return Uh;case"quaternion":return yr;case"bool":case"boolean":return cs;case"string":return us}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+r)}function k0(r){if(r.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");const e=B0(r.type);if(r.times===void 0){const t=[],n=[];Nh(r.keys,t,n,"value"),r.times=t,r.values=n}return e.parse!==void 0?e.parse(r):new e(r.name,r.times,r.values,r.interpolation)}const Ki={enabled:!1,files:{},add:function(r,e){this.enabled!==!1&&(this.files[r]=e)},get:function(r){if(this.enabled!==!1)return this.files[r]},remove:function(r){delete this.files[r]},clear:function(){this.files={}}};class z0{constructor(e,t,n){const i=this;let s=!1,a=0,o=0,l;const c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this.itemStart=function(u){o++,s===!1&&i.onStart!==void 0&&i.onStart(u,a,o),s=!0},this.itemEnd=function(u){a++,i.onProgress!==void 0&&i.onProgress(u,a,o),a===o&&(s=!1,i.onLoad!==void 0&&i.onLoad())},this.itemError=function(u){i.onError!==void 0&&i.onError(u)},this.resolveURL=function(u){return l?l(u):u},this.setURLModifier=function(u){return l=u,this},this.addHandler=function(u,h){return c.push(u,h),this},this.removeHandler=function(u){const h=c.indexOf(u);return h!==-1&&c.splice(h,2),this},this.getHandler=function(u){for(let h=0,d=c.length;h<d;h+=2){const p=c[h],g=c[h+1];if(p.global&&(p.lastIndex=0),p.test(u))return g}return null}}}const H0=new z0;class hs{constructor(e){this.manager=e!==void 0?e:H0,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){const n=this;return new Promise(function(i,s){n.load(e,i,t,s)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}}hs.DEFAULT_MATERIAL_NAME="__DEFAULT";const bi={};class G0 extends Error{constructor(e,t){super(e),this.response=t}}class Fh extends hs{constructor(e){super(e)}load(e,t,n,i){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=Ki.get(e);if(s!==void 0)return this.manager.itemStart(e),setTimeout(()=>{t&&t(s),this.manager.itemEnd(e)},0),s;if(bi[e]!==void 0){bi[e].push({onLoad:t,onProgress:n,onError:i});return}bi[e]=[],bi[e].push({onLoad:t,onProgress:n,onError:i});const a=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin"}),o=this.mimeType,l=this.responseType;fetch(a).then(c=>{if(c.status===200||c.status===0){if(c.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||c.body===void 0||c.body.getReader===void 0)return c;const u=bi[e],h=c.body.getReader(),d=c.headers.get("Content-Length")||c.headers.get("X-File-Size"),p=d?parseInt(d):0,g=p!==0;let _=0;const f=new ReadableStream({start(m){y();function y(){h.read().then(({done:v,value:E})=>{if(v)m.close();else{_+=E.byteLength;const C=new ProgressEvent("progress",{lengthComputable:g,loaded:_,total:p});for(let A=0,b=u.length;A<b;A++){const N=u[A];N.onProgress&&N.onProgress(C)}m.enqueue(E),y()}})}}});return new Response(f)}else throw new G0(`fetch for "${c.url}" responded with ${c.status}: ${c.statusText}`,c)}).then(c=>{switch(l){case"arraybuffer":return c.arrayBuffer();case"blob":return c.blob();case"document":return c.text().then(u=>new DOMParser().parseFromString(u,o));case"json":return c.json();default:if(o===void 0)return c.text();{const h=/charset="?([^;"\s]*)"?/i.exec(o),d=h&&h[1]?h[1].toLowerCase():void 0,p=new TextDecoder(d);return c.arrayBuffer().then(g=>p.decode(g))}}}).then(c=>{Ki.add(e,c);const u=bi[e];delete bi[e];for(let h=0,d=u.length;h<d;h++){const p=u[h];p.onLoad&&p.onLoad(c)}}).catch(c=>{const u=bi[e];if(u===void 0)throw this.manager.itemError(e),c;delete bi[e];for(let h=0,d=u.length;h<d;h++){const p=u[h];p.onError&&p.onError(c)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}}class V0 extends hs{constructor(e){super(e)}load(e,t,n,i){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=this,a=Ki.get(e);if(a!==void 0)return s.manager.itemStart(e),setTimeout(function(){t&&t(a),s.manager.itemEnd(e)},0),a;const o=Fs("img");function l(){u(),Ki.add(e,this),t&&t(this),s.manager.itemEnd(e)}function c(h){u(),i&&i(h),s.manager.itemError(e),s.manager.itemEnd(e)}function u(){o.removeEventListener("load",l,!1),o.removeEventListener("error",c,!1)}return o.addEventListener("load",l,!1),o.addEventListener("error",c,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(o.crossOrigin=this.crossOrigin),s.manager.itemStart(e),o.src=e,o}}class W0 extends hs{constructor(e){super(e)}load(e,t,n,i){const s=new un,a=new V0(this.manager);return a.setCrossOrigin(this.crossOrigin),a.setPath(this.path),a.load(e,function(o){s.image=o,s.needsUpdate=!0,t!==void 0&&t(s)},n,i),s}}class Na extends Wt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Ye(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),t}}const Po=new Ve,Pu=new L,Iu=new L;class El{constructor(e){this.camera=e,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Se(512,512),this.map=null,this.mapPass=null,this.matrix=new Ve,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new ul,this._frameExtents=new Se(1,1),this._viewportCount=1,this._viewports=[new Nt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,n=this.matrix;Pu.setFromMatrixPosition(e.matrixWorld),t.position.copy(Pu),Iu.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Iu),t.updateMatrixWorld(),Po.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Po),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(Po)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class X0 extends El{constructor(){super(new Ln(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1}updateMatrices(e){const t=this.camera,n=ns*2*e.angle*this.focus,i=this.mapSize.width/this.mapSize.height,s=e.distance||t.far;(n!==t.fov||i!==t.aspect||s!==t.far)&&(t.fov=n,t.aspect=i,t.far=s,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this}}class q0 extends Na{constructor(e,t,n=0,i=Math.PI/3,s=0,a=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(Wt.DEFAULT_UP),this.updateMatrix(),this.target=new Wt,this.distance=n,this.angle=i,this.penumbra=s,this.decay=a,this.map=null,this.shadow=new X0}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}const Du=new Ve,bs=new L,Io=new L;class j0 extends El{constructor(){super(new Ln(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new Se(4,2),this._viewportCount=6,this._viewports=[new Nt(2,1,1,1),new Nt(0,1,1,1),new Nt(3,1,1,1),new Nt(1,1,1,1),new Nt(3,0,1,1),new Nt(1,0,1,1)],this._cubeDirections=[new L(1,0,0),new L(-1,0,0),new L(0,0,1),new L(0,0,-1),new L(0,1,0),new L(0,-1,0)],this._cubeUps=[new L(0,1,0),new L(0,1,0),new L(0,1,0),new L(0,1,0),new L(0,0,1),new L(0,0,-1)]}updateMatrices(e,t=0){const n=this.camera,i=this.matrix,s=e.distance||n.far;s!==n.far&&(n.far=s,n.updateProjectionMatrix()),bs.setFromMatrixPosition(e.matrixWorld),n.position.copy(bs),Io.copy(n.position),Io.add(this._cubeDirections[t]),n.up.copy(this._cubeUps[t]),n.lookAt(Io),n.updateMatrixWorld(),i.makeTranslation(-bs.x,-bs.y,-bs.z),Du.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Du)}}class Y0 extends Na{constructor(e,t,n=0,i=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=i,this.shadow=new j0}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}}class K0 extends El{constructor(){super(new hl(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Jo extends Na{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Wt.DEFAULT_UP),this.updateMatrix(),this.target=new Wt,this.shadow=new K0}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class Nu extends Na{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}}class Ds{static decodeText(e){if(typeof TextDecoder<"u")return new TextDecoder().decode(e);let t="";for(let n=0,i=e.length;n<i;n++)t+=String.fromCharCode(e[n]);try{return decodeURIComponent(escape(t))}catch{return t}}static extractUrlBase(e){const t=e.lastIndexOf("/");return t===-1?"./":e.slice(0,t+1)}static resolveURL(e,t){return typeof e!="string"||e===""?"":(/^https?:\/\//i.test(t)&&/^\//.test(e)&&(t=t.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(e)||/^data:.*,.*$/i.test(e)||/^blob:.*$/i.test(e)?e:t+e)}}class $0 extends hs{constructor(e){super(e),this.isImageBitmapLoader=!0,typeof createImageBitmap>"u"&&console.warn("THREE.ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch>"u"&&console.warn("THREE.ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"}}setOptions(e){return this.options=e,this}load(e,t,n,i){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=this,a=Ki.get(e);if(a!==void 0){if(s.manager.itemStart(e),a.then){a.then(c=>{t&&t(c),s.manager.itemEnd(e)}).catch(c=>{i&&i(c)});return}return setTimeout(function(){t&&t(a),s.manager.itemEnd(e)},0),a}const o={};o.credentials=this.crossOrigin==="anonymous"?"same-origin":"include",o.headers=this.requestHeader;const l=fetch(e,o).then(function(c){return c.blob()}).then(function(c){return createImageBitmap(c,Object.assign(s.options,{colorSpaceConversion:"none"}))}).then(function(c){return Ki.add(e,c),t&&t(c),s.manager.itemEnd(e),c}).catch(function(c){i&&i(c),Ki.remove(e),s.manager.itemError(e),s.manager.itemEnd(e)});Ki.add(e,l),s.manager.itemStart(e)}}const bl="\\[\\]\\.:\\/",Z0=new RegExp("["+bl+"]","g"),Tl="[^"+bl+"]",J0="[^"+bl.replace("\\.","")+"]",Q0=/((?:WC+[\/:])*)/.source.replace("WC",Tl),ex=/(WCOD+)?/.source.replace("WCOD",J0),tx=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Tl),nx=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Tl),ix=new RegExp("^"+Q0+ex+tx+nx+"$"),rx=["material","materials","bones","map"];class sx{constructor(e,t,n){const i=n||Rt.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,i)}getValue(e,t){this.bind();const n=this._targetGroup.nCachedObjects_,i=this._bindings[n];i!==void 0&&i.getValue(e,t)}setValue(e,t){const n=this._bindings;for(let i=this._targetGroup.nCachedObjects_,s=n.length;i!==s;++i)n[i].setValue(e,t)}bind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}}class Rt{constructor(e,t,n){this.path=t,this.parsedPath=n||Rt.parseTrackName(t),this.node=Rt.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new Rt.Composite(e,t,n):new Rt(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(Z0,"")}static parseTrackName(e){const t=ix.exec(e);if(t===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);const n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},i=n.nodeName&&n.nodeName.lastIndexOf(".");if(i!==void 0&&i!==-1){const s=n.nodeName.substring(i+1);rx.indexOf(s)!==-1&&(n.nodeName=n.nodeName.substring(0,i),n.objectName=s)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){const n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){const n=function(s){for(let a=0;a<s.length;a++){const o=s[a];if(o.name===t||o.uuid===t)return o;const l=n(o.children);if(l)return l}return null},i=n(e.children);if(i)return i}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){const n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)e[t++]=n[i]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){const n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)n[i]=e[t++]}_setValue_array_setNeedsUpdate(e,t){const n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)n[i]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){const n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)n[i]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node;const t=this.parsedPath,n=t.objectName,i=t.propertyName;let s=t.propertyIndex;if(e||(e=Rt.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let c=t.objectIndex;switch(n){case"materials":if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let u=0;u<e.length;u++)if(e[u].name===c){c=u;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[n]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[n]}if(c!==void 0){if(e[c]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[c]}}const a=e[i];if(a===void 0){const c=t.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+c+"."+i+" but it wasn't found.",e);return}let o=this.Versioning.None;this.targetObject=e,e.needsUpdate!==void 0?o=this.Versioning.NeedsUpdate:e.matrixWorldNeedsUpdate!==void 0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(s!==void 0){if(i==="morphTargetInfluences"){if(!e.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[s]!==void 0&&(s=e.morphTargetDictionary[s])}l=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=s}else a.fromArray!==void 0&&a.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(l=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=i;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}}Rt.Composite=sx;Rt.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};Rt.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};Rt.prototype.GetterByBindingType=[Rt.prototype._getValue_direct,Rt.prototype._getValue_array,Rt.prototype._getValue_arrayElement,Rt.prototype._getValue_toArray];Rt.prototype.SetterByBindingTypeAndVersioning=[[Rt.prototype._setValue_direct,Rt.prototype._setValue_direct_setNeedsUpdate,Rt.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Rt.prototype._setValue_array,Rt.prototype._setValue_array_setNeedsUpdate,Rt.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Rt.prototype._setValue_arrayElement,Rt.prototype._setValue_arrayElement_setNeedsUpdate,Rt.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Rt.prototype._setValue_fromArray,Rt.prototype._setValue_fromArray_setNeedsUpdate,Rt.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:sl}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=sl);function Uu(r,e){if(e===wf)return console.warn("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Geometry already defined as triangles."),r;if(e===Wo||e===ih){let t=r.getIndex();if(t===null){const a=[],o=r.getAttribute("position");if(o!==void 0){for(let l=0;l<o.count;l++)a.push(l);r.setIndex(a),t=r.getIndex()}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."),r}const n=t.count-2,i=[];if(e===Wo)for(let a=1;a<=n;a++)i.push(t.getX(0)),i.push(t.getX(a)),i.push(t.getX(a+1));else for(let a=0;a<n;a++)a%2===0?(i.push(t.getX(a)),i.push(t.getX(a+1)),i.push(t.getX(a+2))):(i.push(t.getX(a+2)),i.push(t.getX(a+1)),i.push(t.getX(a)));i.length/3!==n&&console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unable to generate correct amount of triangles.");const s=r.clone();return s.setIndex(i),s.clearGroups(),s}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unknown draw mode:",e),r}class ax extends hs{constructor(e){super(e),this.dracoLoader=null,this.ktx2Loader=null,this.meshoptDecoder=null,this.pluginCallbacks=[],this.register(function(t){return new hx(t)}),this.register(function(t){return new Mx(t)}),this.register(function(t){return new yx(t)}),this.register(function(t){return new Sx(t)}),this.register(function(t){return new fx(t)}),this.register(function(t){return new px(t)}),this.register(function(t){return new mx(t)}),this.register(function(t){return new gx(t)}),this.register(function(t){return new ux(t)}),this.register(function(t){return new _x(t)}),this.register(function(t){return new dx(t)}),this.register(function(t){return new xx(t)}),this.register(function(t){return new vx(t)}),this.register(function(t){return new lx(t)}),this.register(function(t){return new Ex(t)}),this.register(function(t){return new bx(t)})}load(e,t,n,i){const s=this;let a;if(this.resourcePath!=="")a=this.resourcePath;else if(this.path!==""){const c=Ds.extractUrlBase(e);a=Ds.resolveURL(c,this.path)}else a=Ds.extractUrlBase(e);this.manager.itemStart(e);const o=function(c){i?i(c):console.error(c),s.manager.itemError(e),s.manager.itemEnd(e)},l=new Fh(this.manager);l.setPath(this.path),l.setResponseType("arraybuffer"),l.setRequestHeader(this.requestHeader),l.setWithCredentials(this.withCredentials),l.load(e,function(c){try{s.parse(c,a,function(u){t(u),s.manager.itemEnd(e)},o)}catch(u){o(u)}},n,o)}setDRACOLoader(e){return this.dracoLoader=e,this}setDDSLoader(){throw new Error('THREE.GLTFLoader: "MSFT_texture_dds" no longer supported. Please update to "KHR_texture_basisu".')}setKTX2Loader(e){return this.ktx2Loader=e,this}setMeshoptDecoder(e){return this.meshoptDecoder=e,this}register(e){return this.pluginCallbacks.indexOf(e)===-1&&this.pluginCallbacks.push(e),this}unregister(e){return this.pluginCallbacks.indexOf(e)!==-1&&this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(e),1),this}parse(e,t,n,i){let s;const a={},o={},l=new TextDecoder;if(typeof e=="string")s=JSON.parse(e);else if(e instanceof ArrayBuffer)if(l.decode(new Uint8Array(e,0,4))===Oh){try{a[ft.KHR_BINARY_GLTF]=new Tx(e)}catch(h){i&&i(h);return}s=JSON.parse(a[ft.KHR_BINARY_GLTF].content)}else s=JSON.parse(l.decode(e));else s=e;if(s.asset===void 0||s.asset.version[0]<2){i&&i(new Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."));return}const c=new Bx(s,{path:t||this.resourcePath||"",crossOrigin:this.crossOrigin,requestHeader:this.requestHeader,manager:this.manager,ktx2Loader:this.ktx2Loader,meshoptDecoder:this.meshoptDecoder});c.fileLoader.setRequestHeader(this.requestHeader);for(let u=0;u<this.pluginCallbacks.length;u++){const h=this.pluginCallbacks[u](c);h.name||console.error("THREE.GLTFLoader: Invalid plugin found: missing name"),o[h.name]=h,a[h.name]=!0}if(s.extensionsUsed)for(let u=0;u<s.extensionsUsed.length;++u){const h=s.extensionsUsed[u],d=s.extensionsRequired||[];switch(h){case ft.KHR_MATERIALS_UNLIT:a[h]=new cx;break;case ft.KHR_DRACO_MESH_COMPRESSION:a[h]=new Ax(s,this.dracoLoader);break;case ft.KHR_TEXTURE_TRANSFORM:a[h]=new wx;break;case ft.KHR_MESH_QUANTIZATION:a[h]=new Rx;break;default:d.indexOf(h)>=0&&o[h]===void 0&&console.warn('THREE.GLTFLoader: Unknown extension "'+h+'".')}}c.setExtensions(a),c.setPlugins(o),c.parse(n,i)}parseAsync(e,t){const n=this;return new Promise(function(i,s){n.parse(e,t,i,s)})}}function ox(){let r={};return{get:function(e){return r[e]},add:function(e,t){r[e]=t},remove:function(e){delete r[e]},removeAll:function(){r={}}}}const ft={KHR_BINARY_GLTF:"KHR_binary_glTF",KHR_DRACO_MESH_COMPRESSION:"KHR_draco_mesh_compression",KHR_LIGHTS_PUNCTUAL:"KHR_lights_punctual",KHR_MATERIALS_CLEARCOAT:"KHR_materials_clearcoat",KHR_MATERIALS_IOR:"KHR_materials_ior",KHR_MATERIALS_SHEEN:"KHR_materials_sheen",KHR_MATERIALS_SPECULAR:"KHR_materials_specular",KHR_MATERIALS_TRANSMISSION:"KHR_materials_transmission",KHR_MATERIALS_IRIDESCENCE:"KHR_materials_iridescence",KHR_MATERIALS_ANISOTROPY:"KHR_materials_anisotropy",KHR_MATERIALS_UNLIT:"KHR_materials_unlit",KHR_MATERIALS_VOLUME:"KHR_materials_volume",KHR_TEXTURE_BASISU:"KHR_texture_basisu",KHR_TEXTURE_TRANSFORM:"KHR_texture_transform",KHR_MESH_QUANTIZATION:"KHR_mesh_quantization",KHR_MATERIALS_EMISSIVE_STRENGTH:"KHR_materials_emissive_strength",EXT_MATERIALS_BUMP:"EXT_materials_bump",EXT_TEXTURE_WEBP:"EXT_texture_webp",EXT_TEXTURE_AVIF:"EXT_texture_avif",EXT_MESHOPT_COMPRESSION:"EXT_meshopt_compression",EXT_MESH_GPU_INSTANCING:"EXT_mesh_gpu_instancing"};class lx{constructor(e){this.parser=e,this.name=ft.KHR_LIGHTS_PUNCTUAL,this.cache={refs:{},uses:{}}}_markDefs(){const e=this.parser,t=this.parser.json.nodes||[];for(let n=0,i=t.length;n<i;n++){const s=t[n];s.extensions&&s.extensions[this.name]&&s.extensions[this.name].light!==void 0&&e._addNodeRef(this.cache,s.extensions[this.name].light)}}_loadLight(e){const t=this.parser,n="light:"+e;let i=t.cache.get(n);if(i)return i;const s=t.json,l=((s.extensions&&s.extensions[this.name]||{}).lights||[])[e];let c;const u=new Ye(16777215);l.color!==void 0&&u.setRGB(l.color[0],l.color[1],l.color[2],mn);const h=l.range!==void 0?l.range:0;switch(l.type){case"directional":c=new Jo(u),c.target.position.set(0,0,-1),c.add(c.target);break;case"point":c=new Y0(u),c.distance=h;break;case"spot":c=new q0(u),c.distance=h,l.spot=l.spot||{},l.spot.innerConeAngle=l.spot.innerConeAngle!==void 0?l.spot.innerConeAngle:0,l.spot.outerConeAngle=l.spot.outerConeAngle!==void 0?l.spot.outerConeAngle:Math.PI/4,c.angle=l.spot.outerConeAngle,c.penumbra=1-l.spot.innerConeAngle/l.spot.outerConeAngle,c.target.position.set(0,0,-1),c.add(c.target);break;default:throw new Error("THREE.GLTFLoader: Unexpected light type: "+l.type)}return c.position.set(0,0,0),c.decay=2,Xi(c,l),l.intensity!==void 0&&(c.intensity=l.intensity),c.name=t.createUniqueName(l.name||"light_"+e),i=Promise.resolve(c),t.cache.add(n,i),i}getDependency(e,t){if(e==="light")return this._loadLight(t)}createNodeAttachment(e){const t=this,n=this.parser,s=n.json.nodes[e],o=(s.extensions&&s.extensions[this.name]||{}).light;return o===void 0?null:this._loadLight(o).then(function(l){return n._getNodeRef(t.cache,o,l)})}}class cx{constructor(){this.name=ft.KHR_MATERIALS_UNLIT}getMaterialType(){return _r}extendParams(e,t,n){const i=[];e.color=new Ye(1,1,1),e.opacity=1;const s=t.pbrMetallicRoughness;if(s){if(Array.isArray(s.baseColorFactor)){const a=s.baseColorFactor;e.color.setRGB(a[0],a[1],a[2],mn),e.opacity=a[3]}s.baseColorTexture!==void 0&&i.push(n.assignTexture(e,"map",s.baseColorTexture,Cn))}return Promise.all(i)}}class ux{constructor(e){this.parser=e,this.name=ft.KHR_MATERIALS_EMISSIVE_STRENGTH}extendMaterialParams(e,t){const i=this.parser.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=i.extensions[this.name].emissiveStrength;return s!==void 0&&(t.emissiveIntensity=s),Promise.resolve()}}class hx{constructor(e){this.parser=e,this.name=ft.KHR_MATERIALS_CLEARCOAT}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Pi}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=[],a=i.extensions[this.name];if(a.clearcoatFactor!==void 0&&(t.clearcoat=a.clearcoatFactor),a.clearcoatTexture!==void 0&&s.push(n.assignTexture(t,"clearcoatMap",a.clearcoatTexture)),a.clearcoatRoughnessFactor!==void 0&&(t.clearcoatRoughness=a.clearcoatRoughnessFactor),a.clearcoatRoughnessTexture!==void 0&&s.push(n.assignTexture(t,"clearcoatRoughnessMap",a.clearcoatRoughnessTexture)),a.clearcoatNormalTexture!==void 0&&(s.push(n.assignTexture(t,"clearcoatNormalMap",a.clearcoatNormalTexture)),a.clearcoatNormalTexture.scale!==void 0)){const o=a.clearcoatNormalTexture.scale;t.clearcoatNormalScale=new Se(o,o)}return Promise.all(s)}}class dx{constructor(e){this.parser=e,this.name=ft.KHR_MATERIALS_IRIDESCENCE}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Pi}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=[],a=i.extensions[this.name];return a.iridescenceFactor!==void 0&&(t.iridescence=a.iridescenceFactor),a.iridescenceTexture!==void 0&&s.push(n.assignTexture(t,"iridescenceMap",a.iridescenceTexture)),a.iridescenceIor!==void 0&&(t.iridescenceIOR=a.iridescenceIor),t.iridescenceThicknessRange===void 0&&(t.iridescenceThicknessRange=[100,400]),a.iridescenceThicknessMinimum!==void 0&&(t.iridescenceThicknessRange[0]=a.iridescenceThicknessMinimum),a.iridescenceThicknessMaximum!==void 0&&(t.iridescenceThicknessRange[1]=a.iridescenceThicknessMaximum),a.iridescenceThicknessTexture!==void 0&&s.push(n.assignTexture(t,"iridescenceThicknessMap",a.iridescenceThicknessTexture)),Promise.all(s)}}class fx{constructor(e){this.parser=e,this.name=ft.KHR_MATERIALS_SHEEN}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Pi}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=[];t.sheenColor=new Ye(0,0,0),t.sheenRoughness=0,t.sheen=1;const a=i.extensions[this.name];if(a.sheenColorFactor!==void 0){const o=a.sheenColorFactor;t.sheenColor.setRGB(o[0],o[1],o[2],mn)}return a.sheenRoughnessFactor!==void 0&&(t.sheenRoughness=a.sheenRoughnessFactor),a.sheenColorTexture!==void 0&&s.push(n.assignTexture(t,"sheenColorMap",a.sheenColorTexture,Cn)),a.sheenRoughnessTexture!==void 0&&s.push(n.assignTexture(t,"sheenRoughnessMap",a.sheenRoughnessTexture)),Promise.all(s)}}class px{constructor(e){this.parser=e,this.name=ft.KHR_MATERIALS_TRANSMISSION}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Pi}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=[],a=i.extensions[this.name];return a.transmissionFactor!==void 0&&(t.transmission=a.transmissionFactor),a.transmissionTexture!==void 0&&s.push(n.assignTexture(t,"transmissionMap",a.transmissionTexture)),Promise.all(s)}}class mx{constructor(e){this.parser=e,this.name=ft.KHR_MATERIALS_VOLUME}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Pi}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=[],a=i.extensions[this.name];t.thickness=a.thicknessFactor!==void 0?a.thicknessFactor:0,a.thicknessTexture!==void 0&&s.push(n.assignTexture(t,"thicknessMap",a.thicknessTexture)),t.attenuationDistance=a.attenuationDistance||1/0;const o=a.attenuationColor||[1,1,1];return t.attenuationColor=new Ye().setRGB(o[0],o[1],o[2],mn),Promise.all(s)}}class gx{constructor(e){this.parser=e,this.name=ft.KHR_MATERIALS_IOR}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Pi}extendMaterialParams(e,t){const i=this.parser.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=i.extensions[this.name];return t.ior=s.ior!==void 0?s.ior:1.5,Promise.resolve()}}class _x{constructor(e){this.parser=e,this.name=ft.KHR_MATERIALS_SPECULAR}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Pi}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=[],a=i.extensions[this.name];t.specularIntensity=a.specularFactor!==void 0?a.specularFactor:1,a.specularTexture!==void 0&&s.push(n.assignTexture(t,"specularIntensityMap",a.specularTexture));const o=a.specularColorFactor||[1,1,1];return t.specularColor=new Ye().setRGB(o[0],o[1],o[2],mn),a.specularColorTexture!==void 0&&s.push(n.assignTexture(t,"specularColorMap",a.specularColorTexture,Cn)),Promise.all(s)}}class vx{constructor(e){this.parser=e,this.name=ft.EXT_MATERIALS_BUMP}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Pi}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=[],a=i.extensions[this.name];return t.bumpScale=a.bumpFactor!==void 0?a.bumpFactor:1,a.bumpTexture!==void 0&&s.push(n.assignTexture(t,"bumpMap",a.bumpTexture)),Promise.all(s)}}class xx{constructor(e){this.parser=e,this.name=ft.KHR_MATERIALS_ANISOTROPY}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Pi}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=[],a=i.extensions[this.name];return a.anisotropyStrength!==void 0&&(t.anisotropy=a.anisotropyStrength),a.anisotropyRotation!==void 0&&(t.anisotropyRotation=a.anisotropyRotation),a.anisotropyTexture!==void 0&&s.push(n.assignTexture(t,"anisotropyMap",a.anisotropyTexture)),Promise.all(s)}}class Mx{constructor(e){this.parser=e,this.name=ft.KHR_TEXTURE_BASISU}loadTexture(e){const t=this.parser,n=t.json,i=n.textures[e];if(!i.extensions||!i.extensions[this.name])return null;const s=i.extensions[this.name],a=t.options.ktx2Loader;if(!a){if(n.extensionsRequired&&n.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures");return null}return t.loadTextureImage(e,s.source,a)}}class yx{constructor(e){this.parser=e,this.name=ft.EXT_TEXTURE_WEBP,this.isSupported=null}loadTexture(e){const t=this.name,n=this.parser,i=n.json,s=i.textures[e];if(!s.extensions||!s.extensions[t])return null;const a=s.extensions[t],o=i.images[a.source];let l=n.textureLoader;if(o.uri){const c=n.options.manager.getHandler(o.uri);c!==null&&(l=c)}return this.detectSupport().then(function(c){if(c)return n.loadTextureImage(e,a.source,l);if(i.extensionsRequired&&i.extensionsRequired.indexOf(t)>=0)throw new Error("THREE.GLTFLoader: WebP required by asset but unsupported.");return n.loadTexture(e)})}detectSupport(){return this.isSupported||(this.isSupported=new Promise(function(e){const t=new Image;t.src="data:image/webp;base64,UklGRiIAAABXRUJQVlA4IBYAAAAwAQCdASoBAAEADsD+JaQAA3AAAAAA",t.onload=t.onerror=function(){e(t.height===1)}})),this.isSupported}}class Sx{constructor(e){this.parser=e,this.name=ft.EXT_TEXTURE_AVIF,this.isSupported=null}loadTexture(e){const t=this.name,n=this.parser,i=n.json,s=i.textures[e];if(!s.extensions||!s.extensions[t])return null;const a=s.extensions[t],o=i.images[a.source];let l=n.textureLoader;if(o.uri){const c=n.options.manager.getHandler(o.uri);c!==null&&(l=c)}return this.detectSupport().then(function(c){if(c)return n.loadTextureImage(e,a.source,l);if(i.extensionsRequired&&i.extensionsRequired.indexOf(t)>=0)throw new Error("THREE.GLTFLoader: AVIF required by asset but unsupported.");return n.loadTexture(e)})}detectSupport(){return this.isSupported||(this.isSupported=new Promise(function(e){const t=new Image;t.src="data:image/avif;base64,AAAAIGZ0eXBhdmlmAAAAAGF2aWZtaWYxbWlhZk1BMUIAAADybWV0YQAAAAAAAAAoaGRscgAAAAAAAAAAcGljdAAAAAAAAAAAAAAAAGxpYmF2aWYAAAAADnBpdG0AAAAAAAEAAAAeaWxvYwAAAABEAAABAAEAAAABAAABGgAAABcAAAAoaWluZgAAAAAAAQAAABppbmZlAgAAAAABAABhdjAxQ29sb3IAAAAAamlwcnAAAABLaXBjbwAAABRpc3BlAAAAAAAAAAEAAAABAAAAEHBpeGkAAAAAAwgICAAAAAxhdjFDgQAMAAAAABNjb2xybmNseAACAAIABoAAAAAXaXBtYQAAAAAAAAABAAEEAQKDBAAAAB9tZGF0EgAKCBgABogQEDQgMgkQAAAAB8dSLfI=",t.onload=t.onerror=function(){e(t.height===1)}})),this.isSupported}}class Ex{constructor(e){this.name=ft.EXT_MESHOPT_COMPRESSION,this.parser=e}loadBufferView(e){const t=this.parser.json,n=t.bufferViews[e];if(n.extensions&&n.extensions[this.name]){const i=n.extensions[this.name],s=this.parser.getDependency("buffer",i.buffer),a=this.parser.options.meshoptDecoder;if(!a||!a.supported){if(t.extensionsRequired&&t.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files");return null}return s.then(function(o){const l=i.byteOffset||0,c=i.byteLength||0,u=i.count,h=i.byteStride,d=new Uint8Array(o,l,c);return a.decodeGltfBufferAsync?a.decodeGltfBufferAsync(u,h,d,i.mode,i.filter).then(function(p){return p.buffer}):a.ready.then(function(){const p=new ArrayBuffer(u*h);return a.decodeGltfBuffer(new Uint8Array(p),u,h,d,i.mode,i.filter),p})})}else return null}}class bx{constructor(e){this.name=ft.EXT_MESH_GPU_INSTANCING,this.parser=e}createNodeMesh(e){const t=this.parser.json,n=t.nodes[e];if(!n.extensions||!n.extensions[this.name]||n.mesh===void 0)return null;const i=t.meshes[n.mesh];for(const c of i.primitives)if(c.mode!==Vn.TRIANGLES&&c.mode!==Vn.TRIANGLE_STRIP&&c.mode!==Vn.TRIANGLE_FAN&&c.mode!==void 0)return null;const a=n.extensions[this.name].attributes,o=[],l={};for(const c in a)o.push(this.parser.getDependency("accessor",a[c]).then(u=>(l[c]=u,l[c])));return o.length<1?null:(o.push(this.parser.createNodeMesh(e)),Promise.all(o).then(c=>{const u=c.pop(),h=u.isGroup?u.children:[u],d=c[0].count,p=[];for(const g of h){const _=new Ve,f=new L,m=new Qi,y=new L(1,1,1),v=new wh(g.geometry,g.material,d);for(let E=0;E<d;E++)l.TRANSLATION&&f.fromBufferAttribute(l.TRANSLATION,E),l.ROTATION&&m.fromBufferAttribute(l.ROTATION,E),l.SCALE&&y.fromBufferAttribute(l.SCALE,E),v.setMatrixAt(E,_.compose(f,m,y));for(const E in l)if(E==="_COLOR_0"){const C=l[E];v.instanceColor=new $o(C.array,C.itemSize,C.normalized)}else E!=="TRANSLATION"&&E!=="ROTATION"&&E!=="SCALE"&&g.geometry.setAttribute(E,l[E]);Wt.prototype.copy.call(v,g),this.parser.assignFinalMaterial(v),p.push(v)}return u.isGroup?(u.clear(),u.add(...p),u):p[0]}))}}const Oh="glTF",Ts=12,Fu={JSON:1313821514,BIN:5130562};class Tx{constructor(e){this.name=ft.KHR_BINARY_GLTF,this.content=null,this.body=null;const t=new DataView(e,0,Ts),n=new TextDecoder;if(this.header={magic:n.decode(new Uint8Array(e.slice(0,4))),version:t.getUint32(4,!0),length:t.getUint32(8,!0)},this.header.magic!==Oh)throw new Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");if(this.header.version<2)throw new Error("THREE.GLTFLoader: Legacy binary file detected.");const i=this.header.length-Ts,s=new DataView(e,Ts);let a=0;for(;a<i;){const o=s.getUint32(a,!0);a+=4;const l=s.getUint32(a,!0);if(a+=4,l===Fu.JSON){const c=new Uint8Array(e,Ts+a,o);this.content=n.decode(c)}else if(l===Fu.BIN){const c=Ts+a;this.body=e.slice(c,c+o)}a+=o}if(this.content===null)throw new Error("THREE.GLTFLoader: JSON content not found.")}}class Ax{constructor(e,t){if(!t)throw new Error("THREE.GLTFLoader: No DRACOLoader instance provided.");this.name=ft.KHR_DRACO_MESH_COMPRESSION,this.json=e,this.dracoLoader=t,this.dracoLoader.preload()}decodePrimitive(e,t){const n=this.json,i=this.dracoLoader,s=e.extensions[this.name].bufferView,a=e.extensions[this.name].attributes,o={},l={},c={};for(const u in a){const h=Qo[u]||u.toLowerCase();o[h]=a[u]}for(const u in e.attributes){const h=Qo[u]||u.toLowerCase();if(a[u]!==void 0){const d=n.accessors[e.attributes[u]],p=$r[d.componentType];c[h]=p.name,l[h]=d.normalized===!0}}return t.getDependency("bufferView",s).then(function(u){return new Promise(function(h,d){i.decodeDracoFile(u,function(p){for(const g in p.attributes){const _=p.attributes[g],f=l[g];f!==void 0&&(_.normalized=f)}h(p)},o,c,mn,d)})})}}class wx{constructor(){this.name=ft.KHR_TEXTURE_TRANSFORM}extendTexture(e,t){return(t.texCoord===void 0||t.texCoord===e.channel)&&t.offset===void 0&&t.rotation===void 0&&t.scale===void 0||(e=e.clone(),t.texCoord!==void 0&&(e.channel=t.texCoord),t.offset!==void 0&&e.offset.fromArray(t.offset),t.rotation!==void 0&&(e.rotation=t.rotation),t.scale!==void 0&&e.repeat.fromArray(t.scale),e.needsUpdate=!0),e}}class Rx{constructor(){this.name=ft.KHR_MESH_QUANTIZATION}}class Bh extends Bs{constructor(e,t,n,i){super(e,t,n,i)}copySampleValue_(e){const t=this.resultBuffer,n=this.sampleValues,i=this.valueSize,s=e*i*3+i;for(let a=0;a!==i;a++)t[a]=n[s+a];return t}interpolate_(e,t,n,i){const s=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=o*2,c=o*3,u=i-t,h=(n-t)/u,d=h*h,p=d*h,g=e*c,_=g-c,f=-2*p+3*d,m=p-d,y=1-f,v=m-d+h;for(let E=0;E!==o;E++){const C=a[_+E+o],A=a[_+E+l]*u,b=a[g+E+o],N=a[g+E]*u;s[E]=y*C+v*A+f*b+m*N}return s}}const Cx=new Qi;class Lx extends Bh{interpolate_(e,t,n,i){const s=super.interpolate_(e,t,n,i);return Cx.fromArray(s).normalize().toArray(s),s}}const Vn={POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,TRIANGLE_STRIP:5,TRIANGLE_FAN:6},$r={5120:Int8Array,5121:Uint8Array,5122:Int16Array,5123:Uint16Array,5125:Uint32Array,5126:Float32Array},Ou={9728:cn,9729:Sn,9984:Vo,9985:Ma,9986:Vr,9987:wi},Bu={33071:Wn,33648:Ea,10497:Qr},Do={SCALAR:1,VEC2:2,VEC3:3,VEC4:4,MAT2:4,MAT3:9,MAT4:16},Qo={POSITION:"position",NORMAL:"normal",TANGENT:"tangent",TEXCOORD_0:"uv",TEXCOORD_1:"uv1",TEXCOORD_2:"uv2",TEXCOORD_3:"uv3",COLOR_0:"color",WEIGHTS_0:"skinWeight",JOINTS_0:"skinIndex"},Gi={scale:"scale",translation:"position",rotation:"quaternion",weights:"morphTargetInfluences"},Px={CUBICSPLINE:void 0,LINEAR:ts,STEP:Us},No={OPAQUE:"OPAQUE",MASK:"MASK",BLEND:"BLEND"};function Ix(r){return r.DefaultMaterial===void 0&&(r.DefaultMaterial=new ji({color:16777215,emissive:0,metalness:1,roughness:1,transparent:!1,depthTest:!0,side:Ci})),r.DefaultMaterial}function hr(r,e,t){for(const n in t.extensions)r[n]===void 0&&(e.userData.gltfExtensions=e.userData.gltfExtensions||{},e.userData.gltfExtensions[n]=t.extensions[n])}function Xi(r,e){e.extras!==void 0&&(typeof e.extras=="object"?Object.assign(r.userData,e.extras):console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, "+e.extras))}function Dx(r,e,t){let n=!1,i=!1,s=!1;for(let c=0,u=e.length;c<u;c++){const h=e[c];if(h.POSITION!==void 0&&(n=!0),h.NORMAL!==void 0&&(i=!0),h.COLOR_0!==void 0&&(s=!0),n&&i&&s)break}if(!n&&!i&&!s)return Promise.resolve(r);const a=[],o=[],l=[];for(let c=0,u=e.length;c<u;c++){const h=e[c];if(n){const d=h.POSITION!==void 0?t.getDependency("accessor",h.POSITION):r.attributes.position;a.push(d)}if(i){const d=h.NORMAL!==void 0?t.getDependency("accessor",h.NORMAL):r.attributes.normal;o.push(d)}if(s){const d=h.COLOR_0!==void 0?t.getDependency("accessor",h.COLOR_0):r.attributes.color;l.push(d)}}return Promise.all([Promise.all(a),Promise.all(o),Promise.all(l)]).then(function(c){const u=c[0],h=c[1],d=c[2];return n&&(r.morphAttributes.position=u),i&&(r.morphAttributes.normal=h),s&&(r.morphAttributes.color=d),r.morphTargetsRelative=!0,r})}function Nx(r,e){if(r.updateMorphTargets(),e.weights!==void 0)for(let t=0,n=e.weights.length;t<n;t++)r.morphTargetInfluences[t]=e.weights[t];if(e.extras&&Array.isArray(e.extras.targetNames)){const t=e.extras.targetNames;if(r.morphTargetInfluences.length===t.length){r.morphTargetDictionary={};for(let n=0,i=t.length;n<i;n++)r.morphTargetDictionary[t[n]]=n}else console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.")}}function Ux(r){let e;const t=r.extensions&&r.extensions[ft.KHR_DRACO_MESH_COMPRESSION];if(t?e="draco:"+t.bufferView+":"+t.indices+":"+Uo(t.attributes):e=r.indices+":"+Uo(r.attributes)+":"+r.mode,r.targets!==void 0)for(let n=0,i=r.targets.length;n<i;n++)e+=":"+Uo(r.targets[n]);return e}function Uo(r){let e="";const t=Object.keys(r).sort();for(let n=0,i=t.length;n<i;n++)e+=t[n]+":"+r[t[n]]+";";return e}function el(r){switch(r){case Int8Array:return 1/127;case Uint8Array:return 1/255;case Int16Array:return 1/32767;case Uint16Array:return 1/65535;default:throw new Error("THREE.GLTFLoader: Unsupported normalized accessor component type.")}}function Fx(r){return r.search(/\.jpe?g($|\?)/i)>0||r.search(/^data\:image\/jpeg/)===0?"image/jpeg":r.search(/\.webp($|\?)/i)>0||r.search(/^data\:image\/webp/)===0?"image/webp":"image/png"}const Ox=new Ve;class Bx{constructor(e={},t={}){this.json=e,this.extensions={},this.plugins={},this.options=t,this.cache=new ox,this.associations=new Map,this.primitiveCache={},this.nodeCache={},this.meshCache={refs:{},uses:{}},this.cameraCache={refs:{},uses:{}},this.lightCache={refs:{},uses:{}},this.sourceCache={},this.textureCache={},this.nodeNamesUsed={};let n=!1,i=!1,s=-1;typeof navigator<"u"&&(n=/^((?!chrome|android).)*safari/i.test(navigator.userAgent)===!0,i=navigator.userAgent.indexOf("Firefox")>-1,s=i?navigator.userAgent.match(/Firefox\/([0-9]+)\./)[1]:-1),typeof createImageBitmap>"u"||n||i&&s<98?this.textureLoader=new W0(this.options.manager):this.textureLoader=new $0(this.options.manager),this.textureLoader.setCrossOrigin(this.options.crossOrigin),this.textureLoader.setRequestHeader(this.options.requestHeader),this.fileLoader=new Fh(this.options.manager),this.fileLoader.setResponseType("arraybuffer"),this.options.crossOrigin==="use-credentials"&&this.fileLoader.setWithCredentials(!0)}setExtensions(e){this.extensions=e}setPlugins(e){this.plugins=e}parse(e,t){const n=this,i=this.json,s=this.extensions;this.cache.removeAll(),this.nodeCache={},this._invokeAll(function(a){return a._markDefs&&a._markDefs()}),Promise.all(this._invokeAll(function(a){return a.beforeRoot&&a.beforeRoot()})).then(function(){return Promise.all([n.getDependencies("scene"),n.getDependencies("animation"),n.getDependencies("camera")])}).then(function(a){const o={scene:a[0][i.scene||0],scenes:a[0],animations:a[1],cameras:a[2],asset:i.asset,parser:n,userData:{}};return hr(s,o,i),Xi(o,i),Promise.all(n._invokeAll(function(l){return l.afterRoot&&l.afterRoot(o)})).then(function(){e(o)})}).catch(t)}_markDefs(){const e=this.json.nodes||[],t=this.json.skins||[],n=this.json.meshes||[];for(let i=0,s=t.length;i<s;i++){const a=t[i].joints;for(let o=0,l=a.length;o<l;o++)e[a[o]].isBone=!0}for(let i=0,s=e.length;i<s;i++){const a=e[i];a.mesh!==void 0&&(this._addNodeRef(this.meshCache,a.mesh),a.skin!==void 0&&(n[a.mesh].isSkinnedMesh=!0)),a.camera!==void 0&&this._addNodeRef(this.cameraCache,a.camera)}}_addNodeRef(e,t){t!==void 0&&(e.refs[t]===void 0&&(e.refs[t]=e.uses[t]=0),e.refs[t]++)}_getNodeRef(e,t,n){if(e.refs[t]<=1)return n;const i=n.clone(),s=(a,o)=>{const l=this.associations.get(a);l!=null&&this.associations.set(o,l);for(const[c,u]of a.children.entries())s(u,o.children[c])};return s(n,i),i.name+="_instance_"+e.uses[t]++,i}_invokeOne(e){const t=Object.values(this.plugins);t.push(this);for(let n=0;n<t.length;n++){const i=e(t[n]);if(i)return i}return null}_invokeAll(e){const t=Object.values(this.plugins);t.unshift(this);const n=[];for(let i=0;i<t.length;i++){const s=e(t[i]);s&&n.push(s)}return n}getDependency(e,t){const n=e+":"+t;let i=this.cache.get(n);if(!i){switch(e){case"scene":i=this.loadScene(t);break;case"node":i=this._invokeOne(function(s){return s.loadNode&&s.loadNode(t)});break;case"mesh":i=this._invokeOne(function(s){return s.loadMesh&&s.loadMesh(t)});break;case"accessor":i=this.loadAccessor(t);break;case"bufferView":i=this._invokeOne(function(s){return s.loadBufferView&&s.loadBufferView(t)});break;case"buffer":i=this.loadBuffer(t);break;case"material":i=this._invokeOne(function(s){return s.loadMaterial&&s.loadMaterial(t)});break;case"texture":i=this._invokeOne(function(s){return s.loadTexture&&s.loadTexture(t)});break;case"skin":i=this.loadSkin(t);break;case"animation":i=this._invokeOne(function(s){return s.loadAnimation&&s.loadAnimation(t)});break;case"camera":i=this.loadCamera(t);break;default:if(i=this._invokeOne(function(s){return s!=this&&s.getDependency&&s.getDependency(e,t)}),!i)throw new Error("Unknown type: "+e);break}this.cache.add(n,i)}return i}getDependencies(e){let t=this.cache.get(e);if(!t){const n=this,i=this.json[e+(e==="mesh"?"es":"s")]||[];t=Promise.all(i.map(function(s,a){return n.getDependency(e,a)})),this.cache.add(e,t)}return t}loadBuffer(e){const t=this.json.buffers[e],n=this.fileLoader;if(t.type&&t.type!=="arraybuffer")throw new Error("THREE.GLTFLoader: "+t.type+" buffer type is not supported.");if(t.uri===void 0&&e===0)return Promise.resolve(this.extensions[ft.KHR_BINARY_GLTF].body);const i=this.options;return new Promise(function(s,a){n.load(Ds.resolveURL(t.uri,i.path),s,void 0,function(){a(new Error('THREE.GLTFLoader: Failed to load buffer "'+t.uri+'".'))})})}loadBufferView(e){const t=this.json.bufferViews[e];return this.getDependency("buffer",t.buffer).then(function(n){const i=t.byteLength||0,s=t.byteOffset||0;return n.slice(s,s+i)})}loadAccessor(e){const t=this,n=this.json,i=this.json.accessors[e];if(i.bufferView===void 0&&i.sparse===void 0){const a=Do[i.type],o=$r[i.componentType],l=i.normalized===!0,c=new o(i.count*a);return Promise.resolve(new Qt(c,a,l))}const s=[];return i.bufferView!==void 0?s.push(this.getDependency("bufferView",i.bufferView)):s.push(null),i.sparse!==void 0&&(s.push(this.getDependency("bufferView",i.sparse.indices.bufferView)),s.push(this.getDependency("bufferView",i.sparse.values.bufferView))),Promise.all(s).then(function(a){const o=a[0],l=Do[i.type],c=$r[i.componentType],u=c.BYTES_PER_ELEMENT,h=u*l,d=i.byteOffset||0,p=i.bufferView!==void 0?n.bufferViews[i.bufferView].byteStride:void 0,g=i.normalized===!0;let _,f;if(p&&p!==h){const m=Math.floor(d/p),y="InterleavedBuffer:"+i.bufferView+":"+i.componentType+":"+m+":"+i.count;let v=t.cache.get(y);v||(_=new c(o,m*p,i.count*p/u),v=new u0(_,p/u),t.cache.add(y,v)),f=new fl(v,l,d%p/u,g)}else o===null?_=new c(i.count*l):_=new c(o,d,i.count*l),f=new Qt(_,l,g);if(i.sparse!==void 0){const m=Do.SCALAR,y=$r[i.sparse.indices.componentType],v=i.sparse.indices.byteOffset||0,E=i.sparse.values.byteOffset||0,C=new y(a[1],v,i.sparse.count*m),A=new c(a[2],E,i.sparse.count*l);o!==null&&(f=new Qt(f.array.slice(),f.itemSize,f.normalized));for(let b=0,N=C.length;b<N;b++){const B=C[b];if(f.setX(B,A[b*l]),l>=2&&f.setY(B,A[b*l+1]),l>=3&&f.setZ(B,A[b*l+2]),l>=4&&f.setW(B,A[b*l+3]),l>=5)throw new Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.")}}return f})}loadTexture(e){const t=this.json,n=this.options,s=t.textures[e].source,a=t.images[s];let o=this.textureLoader;if(a.uri){const l=n.manager.getHandler(a.uri);l!==null&&(o=l)}return this.loadTextureImage(e,s,o)}loadTextureImage(e,t,n){const i=this,s=this.json,a=s.textures[e],o=s.images[t],l=(o.uri||o.bufferView)+":"+a.sampler;if(this.textureCache[l])return this.textureCache[l];const c=this.loadImageSource(t,n).then(function(u){u.flipY=!1,u.name=a.name||o.name||"",u.name===""&&typeof o.uri=="string"&&o.uri.startsWith("data:image/")===!1&&(u.name=o.uri);const d=(s.samplers||{})[a.sampler]||{};return u.magFilter=Ou[d.magFilter]||Sn,u.minFilter=Ou[d.minFilter]||wi,u.wrapS=Bu[d.wrapS]||Qr,u.wrapT=Bu[d.wrapT]||Qr,i.associations.set(u,{textures:e}),u}).catch(function(){return null});return this.textureCache[l]=c,c}loadImageSource(e,t){const n=this,i=this.json,s=this.options;if(this.sourceCache[e]!==void 0)return this.sourceCache[e].then(h=>h.clone());const a=i.images[e],o=self.URL||self.webkitURL;let l=a.uri||"",c=!1;if(a.bufferView!==void 0)l=n.getDependency("bufferView",a.bufferView).then(function(h){c=!0;const d=new Blob([h],{type:a.mimeType});return l=o.createObjectURL(d),l});else if(a.uri===void 0)throw new Error("THREE.GLTFLoader: Image "+e+" is missing URI and bufferView");const u=Promise.resolve(l).then(function(h){return new Promise(function(d,p){let g=d;t.isImageBitmapLoader===!0&&(g=function(_){const f=new un(_);f.needsUpdate=!0,d(f)}),t.load(Ds.resolveURL(h,s.path),g,void 0,p)})}).then(function(h){return c===!0&&o.revokeObjectURL(l),h.userData.mimeType=a.mimeType||Fx(a.uri),h}).catch(function(h){throw console.error("THREE.GLTFLoader: Couldn't load texture",l),h});return this.sourceCache[e]=u,u}assignTexture(e,t,n,i){const s=this;return this.getDependency("texture",n.index).then(function(a){if(!a)return null;if(n.texCoord!==void 0&&n.texCoord>0&&(a=a.clone(),a.channel=n.texCoord),s.extensions[ft.KHR_TEXTURE_TRANSFORM]){const o=n.extensions!==void 0?n.extensions[ft.KHR_TEXTURE_TRANSFORM]:void 0;if(o){const l=s.associations.get(a);a=s.extensions[ft.KHR_TEXTURE_TRANSFORM].extendTexture(a,o),s.associations.set(a,l)}}return i!==void 0&&(a.colorSpace=i),e[t]=a,a})}assignFinalMaterial(e){const t=e.geometry;let n=e.material;const i=t.attributes.tangent===void 0,s=t.attributes.color!==void 0,a=t.attributes.normal===void 0;if(e.isPoints){const o="PointsMaterial:"+n.uuid;let l=this.cache.get(o);l||(l=new gl,li.prototype.copy.call(l,n),l.color.copy(n.color),l.map=n.map,l.sizeAttenuation=!1,this.cache.add(o,l)),n=l}else if(e.isLine){const o="LineBasicMaterial:"+n.uuid;let l=this.cache.get(o);l||(l=new Rh,li.prototype.copy.call(l,n),l.color.copy(n.color),l.map=n.map,this.cache.add(o,l)),n=l}if(i||s||a){let o="ClonedMaterial:"+n.uuid+":";i&&(o+="derivative-tangents:"),s&&(o+="vertex-colors:"),a&&(o+="flat-shading:");let l=this.cache.get(o);l||(l=n.clone(),s&&(l.vertexColors=!0),a&&(l.flatShading=!0),i&&(l.normalScale&&(l.normalScale.y*=-1),l.clearcoatNormalScale&&(l.clearcoatNormalScale.y*=-1)),this.cache.add(o,l),this.associations.set(l,this.associations.get(n))),n=l}e.material=n}getMaterialType(){return ji}loadMaterial(e){const t=this,n=this.json,i=this.extensions,s=n.materials[e];let a;const o={},l=s.extensions||{},c=[];if(l[ft.KHR_MATERIALS_UNLIT]){const h=i[ft.KHR_MATERIALS_UNLIT];a=h.getMaterialType(),c.push(h.extendParams(o,s,t))}else{const h=s.pbrMetallicRoughness||{};if(o.color=new Ye(1,1,1),o.opacity=1,Array.isArray(h.baseColorFactor)){const d=h.baseColorFactor;o.color.setRGB(d[0],d[1],d[2],mn),o.opacity=d[3]}h.baseColorTexture!==void 0&&c.push(t.assignTexture(o,"map",h.baseColorTexture,Cn)),o.metalness=h.metallicFactor!==void 0?h.metallicFactor:1,o.roughness=h.roughnessFactor!==void 0?h.roughnessFactor:1,h.metallicRoughnessTexture!==void 0&&(c.push(t.assignTexture(o,"metalnessMap",h.metallicRoughnessTexture)),c.push(t.assignTexture(o,"roughnessMap",h.metallicRoughnessTexture))),a=this._invokeOne(function(d){return d.getMaterialType&&d.getMaterialType(e)}),c.push(Promise.all(this._invokeAll(function(d){return d.extendMaterialParams&&d.extendMaterialParams(e,o)})))}s.doubleSided===!0&&(o.side=si);const u=s.alphaMode||No.OPAQUE;if(u===No.BLEND?(o.transparent=!0,o.depthWrite=!1):(o.transparent=!1,u===No.MASK&&(o.alphaTest=s.alphaCutoff!==void 0?s.alphaCutoff:.5)),s.normalTexture!==void 0&&a!==_r&&(c.push(t.assignTexture(o,"normalMap",s.normalTexture)),o.normalScale=new Se(1,1),s.normalTexture.scale!==void 0)){const h=s.normalTexture.scale;o.normalScale.set(h,h)}if(s.occlusionTexture!==void 0&&a!==_r&&(c.push(t.assignTexture(o,"aoMap",s.occlusionTexture)),s.occlusionTexture.strength!==void 0&&(o.aoMapIntensity=s.occlusionTexture.strength)),s.emissiveFactor!==void 0&&a!==_r){const h=s.emissiveFactor;o.emissive=new Ye().setRGB(h[0],h[1],h[2],mn)}return s.emissiveTexture!==void 0&&a!==_r&&c.push(t.assignTexture(o,"emissiveMap",s.emissiveTexture,Cn)),Promise.all(c).then(function(){const h=new a(o);return s.name&&(h.name=s.name),Xi(h,s),t.associations.set(h,{materials:e}),s.extensions&&hr(i,h,s),h})}createUniqueName(e){const t=Rt.sanitizeNodeName(e||"");return t in this.nodeNamesUsed?t+"_"+ ++this.nodeNamesUsed[t]:(this.nodeNamesUsed[t]=0,t)}loadGeometries(e){const t=this,n=this.extensions,i=this.primitiveCache;function s(o){return n[ft.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(o,t).then(function(l){return ku(l,o,t)})}const a=[];for(let o=0,l=e.length;o<l;o++){const c=e[o],u=Ux(c),h=i[u];if(h)a.push(h.promise);else{let d;c.extensions&&c.extensions[ft.KHR_DRACO_MESH_COMPRESSION]?d=s(c):d=ku(new In,c,t),i[u]={primitive:c,promise:d},a.push(d)}}return Promise.all(a)}loadMesh(e){const t=this,n=this.json,i=this.extensions,s=n.meshes[e],a=s.primitives,o=[];for(let l=0,c=a.length;l<c;l++){const u=a[l].material===void 0?Ix(this.cache):this.getDependency("material",a[l].material);o.push(u)}return o.push(t.loadGeometries(a)),Promise.all(o).then(function(l){const c=l.slice(0,l.length-1),u=l[l.length-1],h=[];for(let p=0,g=u.length;p<g;p++){const _=u[p],f=a[p];let m;const y=c[p];if(f.mode===Vn.TRIANGLES||f.mode===Vn.TRIANGLE_STRIP||f.mode===Vn.TRIANGLE_FAN||f.mode===void 0)m=s.isSkinnedMesh===!0?new d0(_,y):new Vt(_,y),m.isSkinnedMesh===!0&&m.normalizeSkinWeights(),f.mode===Vn.TRIANGLE_STRIP?m.geometry=Uu(m.geometry,ih):f.mode===Vn.TRIANGLE_FAN&&(m.geometry=Uu(m.geometry,Wo));else if(f.mode===Vn.LINES)m=new m0(_,y);else if(f.mode===Vn.LINE_STRIP)m=new ml(_,y);else if(f.mode===Vn.LINE_LOOP)m=new g0(_,y);else if(f.mode===Vn.POINTS)m=new Ch(_,y);else throw new Error("THREE.GLTFLoader: Primitive mode unsupported: "+f.mode);Object.keys(m.geometry.morphAttributes).length>0&&Nx(m,s),m.name=t.createUniqueName(s.name||"mesh_"+e),Xi(m,s),f.extensions&&hr(i,m,f),t.assignFinalMaterial(m),h.push(m)}for(let p=0,g=h.length;p<g;p++)t.associations.set(h[p],{meshes:e,primitives:p});if(h.length===1)return s.extensions&&hr(i,h[0],s),h[0];const d=new ei;s.extensions&&hr(i,d,s),t.associations.set(d,{meshes:e});for(let p=0,g=h.length;p<g;p++)d.add(h[p]);return d})}loadCamera(e){let t;const n=this.json.cameras[e],i=n[n.type];if(!i){console.warn("THREE.GLTFLoader: Missing camera parameters.");return}return n.type==="perspective"?t=new Ln(ah.radToDeg(i.yfov),i.aspectRatio||1,i.znear||1,i.zfar||2e6):n.type==="orthographic"&&(t=new hl(-i.xmag,i.xmag,i.ymag,-i.ymag,i.znear,i.zfar)),n.name&&(t.name=this.createUniqueName(n.name)),Xi(t,n),Promise.resolve(t)}loadSkin(e){const t=this.json.skins[e],n=[];for(let i=0,s=t.joints.length;i<s;i++)n.push(this._loadNodeShallow(t.joints[i]));return t.inverseBindMatrices!==void 0?n.push(this.getDependency("accessor",t.inverseBindMatrices)):n.push(null),Promise.all(n).then(function(i){const s=i.pop(),a=i,o=[],l=[];for(let c=0,u=a.length;c<u;c++){const h=a[c];if(h){o.push(h);const d=new Ve;s!==null&&d.fromArray(s.array,c*16),l.push(d)}else console.warn('THREE.GLTFLoader: Joint "%s" could not be found.',t.joints[c])}return new pl(o,l)})}loadAnimation(e){const t=this.json,n=this,i=t.animations[e],s=i.name?i.name:"animation_"+e,a=[],o=[],l=[],c=[],u=[];for(let h=0,d=i.channels.length;h<d;h++){const p=i.channels[h],g=i.samplers[p.sampler],_=p.target,f=_.node,m=i.parameters!==void 0?i.parameters[g.input]:g.input,y=i.parameters!==void 0?i.parameters[g.output]:g.output;_.node!==void 0&&(a.push(this.getDependency("node",f)),o.push(this.getDependency("accessor",m)),l.push(this.getDependency("accessor",y)),c.push(g),u.push(_))}return Promise.all([Promise.all(a),Promise.all(o),Promise.all(l),Promise.all(c),Promise.all(u)]).then(function(h){const d=h[0],p=h[1],g=h[2],_=h[3],f=h[4],m=[];for(let y=0,v=d.length;y<v;y++){const E=d[y],C=p[y],A=g[y],b=_[y],N=f[y];if(E===void 0)continue;E.updateMatrix&&E.updateMatrix();const B=n._createAnimationTracks(E,C,A,b,N);if(B)for(let x=0;x<B.length;x++)m.push(B[x])}return new O0(s,void 0,m)})}createNodeMesh(e){const t=this.json,n=this,i=t.nodes[e];return i.mesh===void 0?null:n.getDependency("mesh",i.mesh).then(function(s){const a=n._getNodeRef(n.meshCache,i.mesh,s);return i.weights!==void 0&&a.traverse(function(o){if(o.isMesh)for(let l=0,c=i.weights.length;l<c;l++)o.morphTargetInfluences[l]=i.weights[l]}),a})}loadNode(e){const t=this.json,n=this,i=t.nodes[e],s=n._loadNodeShallow(e),a=[],o=i.children||[];for(let c=0,u=o.length;c<u;c++)a.push(n.getDependency("node",o[c]));const l=i.skin===void 0?Promise.resolve(null):n.getDependency("skin",i.skin);return Promise.all([s,Promise.all(a),l]).then(function(c){const u=c[0],h=c[1],d=c[2];d!==null&&u.traverse(function(p){p.isSkinnedMesh&&p.bind(d,Ox)});for(let p=0,g=h.length;p<g;p++)u.add(h[p]);return u})}_loadNodeShallow(e){const t=this.json,n=this.extensions,i=this;if(this.nodeCache[e]!==void 0)return this.nodeCache[e];const s=t.nodes[e],a=s.name?i.createUniqueName(s.name):"",o=[],l=i._invokeOne(function(c){return c.createNodeMesh&&c.createNodeMesh(e)});return l&&o.push(l),s.camera!==void 0&&o.push(i.getDependency("camera",s.camera).then(function(c){return i._getNodeRef(i.cameraCache,s.camera,c)})),i._invokeAll(function(c){return c.createNodeAttachment&&c.createNodeAttachment(e)}).forEach(function(c){o.push(c)}),this.nodeCache[e]=Promise.all(o).then(function(c){let u;if(s.isBone===!0?u=new Th:c.length>1?u=new ei:c.length===1?u=c[0]:u=new Wt,u!==c[0])for(let h=0,d=c.length;h<d;h++)u.add(c[h]);if(s.name&&(u.userData.name=s.name,u.name=a),Xi(u,s),s.extensions&&hr(n,u,s),s.matrix!==void 0){const h=new Ve;h.fromArray(s.matrix),u.applyMatrix4(h)}else s.translation!==void 0&&u.position.fromArray(s.translation),s.rotation!==void 0&&u.quaternion.fromArray(s.rotation),s.scale!==void 0&&u.scale.fromArray(s.scale);return i.associations.has(u)||i.associations.set(u,{}),i.associations.get(u).nodes=e,u}),this.nodeCache[e]}loadScene(e){const t=this.extensions,n=this.json.scenes[e],i=this,s=new ei;n.name&&(s.name=i.createUniqueName(n.name)),Xi(s,n),n.extensions&&hr(t,s,n);const a=n.nodes||[],o=[];for(let l=0,c=a.length;l<c;l++)o.push(i.getDependency("node",a[l]));return Promise.all(o).then(function(l){for(let u=0,h=l.length;u<h;u++)s.add(l[u]);const c=u=>{const h=new Map;for(const[d,p]of i.associations)(d instanceof li||d instanceof un)&&h.set(d,p);return u.traverse(d=>{const p=i.associations.get(d);p!=null&&h.set(d,p)}),h};return i.associations=c(s),s})}_createAnimationTracks(e,t,n,i,s){const a=[],o=e.name?e.name:e.uuid,l=[];Gi[s.path]===Gi.weights?e.traverse(function(d){d.morphTargetInfluences&&l.push(d.name?d.name:d.uuid)}):l.push(o);let c;switch(Gi[s.path]){case Gi.weights:c=rs;break;case Gi.rotation:c=yr;break;case Gi.position:case Gi.scale:c=ss;break;default:n.itemSize===1?c=rs:c=ss;break}const u=i.interpolation!==void 0?Px[i.interpolation]:ts,h=this._getArrayFromAccessor(n);for(let d=0,p=l.length;d<p;d++){const g=new c(l[d]+"."+Gi[s.path],t.array,h,u);i.interpolation==="CUBICSPLINE"&&this._createCubicSplineTrackInterpolant(g),a.push(g)}return a}_getArrayFromAccessor(e){let t=e.array;if(e.normalized){const n=el(t.constructor),i=new Float32Array(t.length);for(let s=0,a=t.length;s<a;s++)i[s]=t[s]*n;t=i}return t}_createCubicSplineTrackInterpolant(e){e.createInterpolant=function(n){const i=this instanceof yr?Lx:Bh;return new i(this.times,this.values,this.getValueSize()/3,n)},e.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline=!0}}function kx(r,e,t){const n=e.attributes,i=new ui;if(n.POSITION!==void 0){const o=t.json.accessors[n.POSITION],l=o.min,c=o.max;if(l!==void 0&&c!==void 0){if(i.set(new L(l[0],l[1],l[2]),new L(c[0],c[1],c[2])),o.normalized){const u=el($r[o.componentType]);i.min.multiplyScalar(u),i.max.multiplyScalar(u)}}else{console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");return}}else return;const s=e.targets;if(s!==void 0){const o=new L,l=new L;for(let c=0,u=s.length;c<u;c++){const h=s[c];if(h.POSITION!==void 0){const d=t.json.accessors[h.POSITION],p=d.min,g=d.max;if(p!==void 0&&g!==void 0){if(l.setX(Math.max(Math.abs(p[0]),Math.abs(g[0]))),l.setY(Math.max(Math.abs(p[1]),Math.abs(g[1]))),l.setZ(Math.max(Math.abs(p[2]),Math.abs(g[2]))),d.normalized){const _=el($r[d.componentType]);l.multiplyScalar(_)}o.max(l)}else console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.")}}i.expandByVector(o)}r.boundingBox=i;const a=new hi;i.getCenter(a.center),a.radius=i.min.distanceTo(i.max)/2,r.boundingSphere=a}function ku(r,e,t){const n=e.attributes,i=[];function s(a,o){return t.getDependency("accessor",a).then(function(l){r.setAttribute(o,l)})}for(const a in n){const o=Qo[a]||a.toLowerCase();o in r.attributes||i.push(s(n[a],o))}if(e.indices!==void 0&&!r.index){const a=t.getDependency("accessor",e.indices).then(function(o){r.setIndex(o)});i.push(a)}return bt.workingColorSpace!==mn&&"COLOR_0"in n&&console.warn(`THREE.GLTFLoader: Converting vertex colors from "srgb-linear" to "${bt.workingColorSpace}" not supported.`),Xi(r,e),kx(r,e,t),Promise.all(i).then(function(){return e.targets!==void 0?Dx(r,e.targets,t):r})}const zx=[2.2945,48.8584],Hx=15,Gx=70,Vx=-20,Wx="https://tiles.openfreemap.org/styles/liberty",Xx={tiles:["https://s3.amazonaws.com/elevation-tiles-prod/terrarium/{z}/{x}/{y}.png"],encoding:"terrarium",tileSize:256,maxzoom:15,exaggeration:1.4},qx={sun:[0,90]},jx={minZoom:4,opacity:.88,heightField:"render_height",baseField:"render_min_height",lowColor:"#cfc7b8",highColor:"#ff5c5c",highRiseMeters:40},Yx={sourceLayer:"landcover",landcoverClasses:["wood","grass"],greenColor:"#2f9e44",greenOpacity:.5,trees:{count:220,radius:220,minScale:.7,maxScale:1.6,canopyColor:"#2f7d32",trunkColor:"#6b4423"}},Kx={start:[2.2945,48.8584],steerSign:1,character:{primitive:"capsule",radius:3,height:10,color:"#ff5c5c"},follow:{bearingSign:1},street:{providers:["mask"],mask:{sizePx:64,zoom:19,sampleHz:20},friction:{asphalt:1,off:.4}},cameras:[{id:"fps",label:"First-Person · FPS",icon:"👁️",pitch:90,zoom:21,bearingOffset:0,modelBoost:1,targetLift:"eye"},{id:"ots",label:"Third-Person · Over-the-Shoulder",icon:"🎯",pitch:78,zoom:20,bearingOffset:0,modelBoost:1,targetLift:0},{id:"chase",label:"Third-Person · Chase-Cam",icon:"🎮",pitch:66,zoom:19,bearingOffset:0,modelBoost:1,targetLift:0},{id:"iso",label:"Top-Down · 2.5D",icon:"🔺",pitch:50,zoom:18,bearingOffset:0,modelBoost:2,targetLift:0},{id:"birdseye",label:"Top-Down · Bird's-Eye",icon:"🐦",pitch:25,zoom:16.8,bearingOffset:0,modelBoost:6,targetLift:0},{id:"god",label:"Top-Down · God-View",icon:"🛰️",pitch:0,zoom:15,bearingOffset:0,modelBoost:24,targetLift:0},{id:"side",label:"Side-Scrolling",icon:"🍄",pitch:75,zoom:18.4,bearingOffset:90,modelBoost:1,targetLift:0}],defaultCamera:"chase",camera:{refSize:4.5,minZoom:3,maxZoom:20,speedZoom:.6,fovBase:55,fovMax:72,rollMax:4,springTau:.12},cockpit:{defaultVisible:!0,views:["cockpit","chase","orbit"]},joystick:{scale:.5,look:{yawRate:120,pitchRate:90,mapMaxPitch:85,skyMaxPitch:175,minPitch:-85,mouseSensitivity:.18},deadzone:.06,mouseLook:!0},defaultDriver:"walk",drivers:[{id:"walk",label:"Walk",icon:"🚶",control:"character",speed:{idle:0,min:0,cruise:8,max:14},turnRate:180,accel:8,size:1.8,turnAtMax:1,model:{glb:"man.glb",scale:1,yaw:0,y:0},altitude:{model:"elevation",default:0,min:0,max:0,climbRate:0,eyeHeight:1.7}},{id:"cycle",label:"Cycle",icon:"🚴",control:"vehicle",vehicle:{wheelbase:1.05,maxSteer:.785,steerRate:4,steerReturn:7,steerSpeedFalloff:.4,power:1.2,brakeDecel:4,drag:.0135,rollResist:.2,reverseMaxSpeed:1.5,grip:6},speed:{idle:0,min:0,cruise:20,max:34},turnRate:120,accel:2.5,size:1.8,turnAtMax:.6,model:{glb:"vehicles/bike.glb",scale:1,yaw:0,y:0},altitude:{model:"elevation",default:0,min:0,max:0,climbRate:0,eyeHeight:1.5}},{id:"car",label:"Car",icon:"🚗",control:"vehicle",vehicle:{wheelbase:2.7,maxSteer:.61,steerRate:3.5,steerReturn:6,steerSpeedFalloff:.25,power:4,brakeDecel:8,drag:.0036,rollResist:.3,reverseMaxSpeed:6,grip:8.5},speed:{idle:0,min:0,cruise:50,max:120},turnRate:90,accel:.8,size:4.5,turnAtMax:.35,model:{glb:"city/car.glb",scale:1,yaw:0,y:0},altitude:{model:"elevation",default:0,min:0,max:0,climbRate:0,eyeHeight:1.6}},{id:"sail",label:"Sail",icon:"⛵",control:"character",speed:{idle:0,min:0,cruise:28,max:45},turnRate:30,accel:.25,size:10,turnAtMax:.5,model:{glb:"vehicles/sailboat.glb",scale:1,yaw:0,y:0},altitude:{model:"elevation",default:0,min:0,max:0,climbRate:0,eyeHeight:2.5}},{id:"drone",label:"Drone",icon:"🛸",control:"flight",speed:{idle:0,min:0,cruise:40,max:90},turnRate:150,accel:1.5,size:2.5,turnAtMax:.8,model:{glb:"vehicles/drone.glb",scale:1,yaw:0,y:0},altitude:{model:"elevation",default:120,min:0,max:800,climbRate:6,eyeHeight:1},cockpitEyeHeight:.2,flight:{model:"drone",maxTilt:.6,tiltRate:4,tiltReturn:6,dragK:.02,maxSpeed:25,yawRate:2.2,maxClimbRate:6,climbAccel:8,altHoldDamp:4,batteryDrain:.0015,batteryLimp:.15,maxG:2.5,gpwsPullup:25,gpwsCaution:80,gpwsSinkRate:4}},{id:"helicopter",label:"Helicopter",icon:"🚁",control:"flight",speed:{idle:0,min:0,cruise:70,max:180},turnRate:90,accel:.7,size:14,turnAtMax:.5,model:{glb:"vehicles/helicopter.glb",scale:1,yaw:0,y:0},altitude:{model:"elevation",default:300,min:0,max:3e3,climbRate:8,eyeHeight:2},cockpitEyeHeight:1.8,flight:{model:"helicopter",hoverCollective:.5,collectivePower:14,vDamp:1.2,maxVspeed:12,translationalGain:.35,translationalSpeed:12,groundEffectGain:.25,rotorDiameter:14,maxPitch:.35,pitchRate:.9,maxBank:.6,rollRate:1.2,dragK:.0025,maxSpeed:50,maxRearSpeed:8,pedalYawRate:.9,rotorRpmNominal:400,vne:90,maxG:3,gpwsPullup:60,gpwsCaution:200,gpwsSinkRate:6}},{id:"airplane",label:"Airplane",icon:"✈️",control:"flight",speed:{idle:220,min:180,cruise:450,max:900},turnRate:25,accel:.15,size:38,turnAtMax:.4,model:{glb:"vehicles/airplane.glb",scale:1,yaw:0,y:0},altitude:{model:"elevation",default:1200,min:150,max:12e3,climbRate:15,eyeHeight:3},cockpitEyeHeight:2.2,flight:{model:"airplane",maxThrust:12,stallSpeed:45,vne:280,maxBank:1.05,rollRate:1.6,rollReturn:.8,pitchRate:.7,maxPitch:.52,dragK:42e-5,inducedK:900,stallSink:.35,rudderYawRate:.12,brakeDecel:3,gearDragK:2e-4,flapDragK:4e-4,flapStallReduction:.25,maxG:4.5,gpwsPullup:150,gpwsCaution:450,gpwsSinkRate:8}},{id:"constellation",label:"Constellation",icon:"🌌",control:"character",speed:{idle:0,min:0,cruise:0,max:0},turnRate:10,accel:2,size:4.5,turnAtMax:1,model:{glb:"vehicles/satellite.glb",scale:1,yaw:0,y:0},altitude:{model:"zoom",default:4e5,min:2e5,max:2e7,climbRate:5e4,eyeHeight:0},orbitZoom:{refAltitude:4e5,refZoom:3.2},globe:!0}],assetsBase:"https://cdn.jsdelivr.net/gh/diegonmarcos/front-assets-cdn@main/b-Projects/galaxy/static/assets/models/",keys:{forward:["w","ArrowUp"],back:["s","ArrowDown"],left:["a","ArrowLeft"],right:["d","ArrowRight"],up:["q"," "],down:["e","c"],cameraNext:["+","="],cameraPrev:["-","_"],driverNext:[".",">"],driverPrev:[",","<"]},altitudeFrame:"agl"},Mn={center:zx,zoom:Hx,pitch:Gx,bearing:Vx,basemap:Wx,terrain:Xx,sky:qx,buildings:jx,nature:Yx,rider:Kx},ct={steer:0,throttle:0,dist:.14,pitch:.5,yaw:0,yawRate:0,pitchRate:0,moveX:0,moveY:0,galaxy:0,climb:0,climbKeys:0,climbPointer:0,climbStick:0,active:!1};function va(){const r=ct.climbKeys+ct.climbPointer+ct.climbStick;return Math.max(-1,Math.min(1,r))}const Os={move:null,look:null,drive:null};function $x(r){const e=Symbol(r);return Os[r]&&console.warn(`freeInput: channel "${r}" claimed while already owned`),Os[r]=e,e}function Zx(r,e){Os[r]===e&&(Os[r]=null)}function Jx(r,e){return Os[r]===e}function Qx(r,e,t,n){let i=Math.hypot(e.moveX,e.moveY);if(i<(t.deadzone??0)&&(i=0),i>0){let d=(e.camBearing+Math.atan2(e.moveX,e.moveY)-r.heading)%(2*Math.PI);if(d>Math.PI&&(d-=2*Math.PI),d<-Math.PI&&(d+=2*Math.PI),t.turn!=null){const p=t.speedRef&&t.speedRef>0?Math.min(1,Math.abs(r.speed??0)/t.speedRef):0,g=t.turnAtMax==null?1:t.turnAtMax+(1-t.turnAtMax)*(1-p),_=t.turn*g*n;d=Math.max(-_,Math.min(_,d))}r.heading+=d}const s=Math.sin(r.heading),a=-Math.cos(r.heading);let o;if(i<=0)o=t.idle??t.min;else{const h=Math.min(i,1);o=t.cruise==null?t.min+h*(t.max-t.min):h<=.5?t.min+h/.5*(t.cruise-t.min):t.cruise+(h-.5)/.5*(t.max-t.cruise)}if(t.accel!=null){const h=1-Math.exp(-t.accel*n),d=r.speed??0;r.speed=d+(o-d)*h}else r.speed=o;const l=(r.speed??o)*n,c=t.minAlt??0,u=t.maxAlt??1/0;return r.altitude=Math.min(u,Math.max(c,(r.altitude??0)+(t.lift!=null?(e.climb??0)*t.lift:0)*n)),{heading:r.heading,forwardX:s,forwardZ:a,dForward:l,altitude:r.altitude??0}}function eM(r,e,t,n){const i=t.friction??1,s=Math.min(1,Math.abs(r.speed??0)/t.maxSpeed),a=t.maxSteer*(t.steerSpeedFalloff+(1-t.steerSpeedFalloff)*(1-s)),o=Math.max(-1,Math.min(1,e.steerAxis)),l=r.steer??0;let c;if(o!==0){const b=o*a,N=t.steerRate*n;c=b>l?Math.min(l+N,b):Math.max(l-N,b)}else{const b=t.steerReturn*n;c=l>0?Math.max(0,l-b):Math.min(0,l+b)}r.steer=Math.max(-a,Math.min(a,c));const u=r.speed??0,h=Math.max(0,Math.min(1,e.throttle)),d=Math.max(0,Math.min(1,e.brake)),p=h===0&&d>0&&u<=0;let g=h*t.power*i;if(p)g-=d*t.brakeDecel;else{const b=Math.sign(u);g-=d*t.brakeDecel*b,g-=t.drag*u*Math.abs(u),g-=t.rollResist*b}let _=u+g*n;p||(u>0&&_<0&&(_=0),u<0&&_>0&&(_=0)),_=Math.max(-t.reverseMaxSpeed,Math.min(t.maxSpeed,_)),r.speed=_;let f=r.speed*Math.tan(r.steer)/t.wheelbase;const m=t.grip*i,y=Math.abs(f*r.speed);let v=0;if(y>m&&y>0){const b=m/y;v=1-b,f*=b}r.heading+=f*n;const E=Math.sin(r.heading),C=-Math.cos(r.heading),A=r.speed*n;return{heading:r.heading,forwardX:E,forwardZ:C,dForward:A,speed:r.speed,steer:r.steer,yawRate:f,slip:v}}const as=9.80665,ut=(r,e,t)=>Math.min(t,Math.max(e,r)),Qe=r=>r!=null&&Number.isFinite(r)?r:0,Zn=(r,e,t)=>{const n=e-r,i=Math.abs(t);return Math.abs(n)<=i?e:r+Math.sign(n)*i},Al=(r,e,t,n,i)=>r<t&&e<-i?"pullup":r<n?"caution":"none";function kh(r){return Math.exp(-Qe(r)/8500)}function tM(r,e,t,n){const i=Qe(n.dt),s=Qe(n.groundElev),a=ut(Qe(e.pitchAxis),-1,1),o=ut(Qe(e.rollAxis),-1,1),l=ut(Qe(e.yawAxis),-1,1),c=ut(Qe(e.throttle),0,1),u=ut(Qe(e.flaps),0,1),h=ut(Qe(e.brake),0,1),d=!!e.gearDown,p=Qe(r.altASL),g=kh(p),_=Math.max(0,Qe(r.speed)),f=_*Math.sqrt(g),m=t.stallSpeed*(1-u*t.flapStallReduction),y=f<m,v=ut((f-.6*m)/Math.max(1e-6,.4*m),.15,1),E=ut(a*t.maxPitch,-t.maxPitch,t.maxPitch);let C=ut(Zn(Qe(r.pitch),E,t.pitchRate*v*i),-t.maxPitch,t.maxPitch),A;if(Math.abs(o)<.05)A=Zn(Qe(r.bank),0,t.rollReturn*i);else{const j=ut(o*t.maxBank,-t.maxBank,t.maxBank);A=Zn(Qe(r.bank),j,t.rollRate*v*i)}A=ut(A,-t.maxBank,t.maxBank);const b=c*t.maxThrust*g,N=t.dragK*_*_+t.inducedK/(_*_+1)+(d?t.gearDragK:0)+u*t.flapDragK;let B=_+(b-N-as*Math.sin(C)-h*t.brakeDecel)*i;B=Math.max(0,B),y&&(C-=t.stallSink*i);const x=(B>1?as*Math.tan(A)/B:0)+l*t.rudderYawRate*v,T=Qe(r.heading)+x*i,z=B*Math.sin(C)-(y?t.stallSink:0),$=p+z*i,P=ut(1/Math.max(Math.cos(A),.05),0,t.maxG),O=f>t.vne;r.heading=T,r.bank=A,r.pitch=C,r.speed=B,r.vspeed=z,r.altASL=$;const k=Math.max(0,$-s);return{speed:B,ias:f,altAGL:k,altASL:$,vspeed:z,heading:T,bank:A,pitch:C,gForce:P,throttle:c,stall:y,overspeed:O,gpws:Al(k,z,t.gpwsPullup,t.gpwsCaution,t.gpwsSinkRate),gearDown:d,flaps:u,rotorRpm:null,torque:null,battery:null,altHold:null}}function nM(r,e,t,n){const i=Qe(n.dt),s=Qe(n.groundElev),a=ut(Qe(e.pitchAxis),-1,1),o=ut(Qe(e.rollAxis),-1,1),l=ut(Qe(e.yawAxis),-1,1),c=ut(Qe(e.throttle),0,1),u=ut(Qe(e.flaps),0,1),h=!!e.gearDown,d=Qe(r.altASL),p=kh(d),g=Math.max(0,d-s),_=Qe(r.speed),f=1+t.translationalGain*Math.min(1,Math.abs(_)/Math.max(1e-6,t.translationalSpeed)),m=1+t.groundEffectGain*Math.max(0,1-g/Math.max(1e-6,t.rotorDiameter)),y=(c-t.hoverCollective)*t.collectivePower*p*f*m;let v=Qe(r.vspeed)+y*i;v*=Math.max(0,1-t.vDamp*i),v=ut(v,-t.maxVspeed,t.maxVspeed);const E=d+v*i,C=ut(a*t.maxPitch,-t.maxPitch,t.maxPitch),A=ut(Zn(Qe(r.pitch),C,t.pitchRate*i),-t.maxPitch,t.maxPitch);let b=_+(-as*Math.tan(A)-t.dragK*_*Math.abs(_))*i;b=ut(b,-t.maxRearSpeed,t.maxSpeed);const N=ut(o*t.maxBank,-t.maxBank,t.maxBank),B=ut(Zn(Qe(r.bank),N,t.rollRate*i),-t.maxBank,t.maxBank),x=l*t.pedalYawRate+(b>1?as*Math.tan(B)/b:0),T=Qe(r.heading)+x*i,z=t.rotorRpmNominal*(.85+.15*c),$=ut(c*.7+Math.min(1,Math.abs(y)/Math.max(1e-6,t.collectivePower))*.3,0,1),P=ut(1/Math.max(Math.cos(B),.05),0,t.maxG),O=Math.abs(b),k=O>t.vne;r.pitch=A,r.bank=B,r.heading=T,r.speed=b,r.vspeed=v,r.altASL=E;const j=Math.max(0,E-s);return{speed:O,ias:O,altAGL:j,altASL:E,vspeed:v,heading:T,bank:B,pitch:A,gForce:P,throttle:c,stall:!1,overspeed:k,gpws:Al(j,v,t.gpwsPullup,t.gpwsCaution,t.gpwsSinkRate),gearDown:h,flaps:u,rotorRpm:z,torque:$,battery:null,altHold:null}}function iM(r,e,t,n){const i=Qe(n.dt),s=Qe(n.groundElev),a=ut(Qe(e.pitchAxis),-1,1),o=ut(Qe(e.rollAxis),-1,1),l=ut(Qe(e.yawAxis),-1,1),c=ut(Qe(e.climbAxis),-1,1),u=ut(Qe(e.flaps),0,1),h=!!e.gearDown,d=ut(Qe(r.battery??1),0,1),p=d<t.batteryLimp,g=t.maxSpeed*(p?.4:1),_=t.maxClimbRate*(p?.4:1),f=ut(a*t.maxTilt,-t.maxTilt,t.maxTilt),m=Math.abs(a)<.05?Zn(Qe(r.pitch),0,t.tiltReturn*i):ut(Zn(Qe(r.pitch),f,t.tiltRate*i),-t.maxTilt,t.maxTilt),y=ut(o*t.maxTilt,-t.maxTilt,t.maxTilt),v=Math.abs(o)<.05?Zn(Qe(r.bank),0,t.tiltReturn*i):ut(Zn(Qe(r.bank),y,t.tiltRate*i),-t.maxTilt,t.maxTilt),E=Qe(r.heading)+l*t.yawRate*i,C=-as*Math.tan(m),A=as*Math.tan(v),b=Math.sin(E),N=Math.cos(E),B=Math.cos(E),x=-Math.sin(E);let T=Qe(r.velX)+(C*b+A*B)*i,z=Qe(r.velZ)+(C*N+A*x)*i;T-=t.dragK*Math.abs(T)*T*i,z-=t.dragK*Math.abs(z)*z*i;const $=Math.hypot(T,z);if($>g&&$>0){const Be=g/$;T*=Be,z*=Be}const P=Math.hypot(T,z);let O=Qe(r.vspeed),k;Math.abs(c)<.05?(O=Zn(O,0,t.altHoldDamp*i),k=!0):(O=Zn(O,c*_,t.climbAccel*i),k=!1);const j=Qe(r.altASL)+O*i,K=ut(Math.max(Math.abs(a),Math.abs(o),Math.abs(c)),0,1),Y=ut(d-t.batteryDrain*(.3+.7*K)*i,0,1),ae=Math.max(Math.abs(m),Math.abs(v)),ce=ut(1/Math.max(Math.cos(ae),.05),0,t.maxG);r.pitch=m,r.bank=v,r.heading=E,r.velX=T,r.velZ=z,r.speed=P,r.vspeed=O,r.altASL=j,r.battery=Y;const Me=Math.max(0,j-s);return{speed:P,ias:P,altAGL:Me,altASL:j,vspeed:O,heading:E,bank:v,pitch:m,gForce:ce,throttle:K,stall:!1,overspeed:!1,gpws:Al(Me,O,t.gpwsPullup,t.gpwsCaution,t.gpwsSinkRate),gearDown:h,flaps:u,rotorRpm:null,torque:null,battery:Y,altHold:k}}var rM=Lt('<div role="slider" tabindex="0"><div class="knob svelte-1icehqw"></div></div>');function zu(r,e){il(e,!0);let t=dr(e,"side",3,"left"),n=dr(e,"scale",3,1),i=dr(e,"invertX",3,!1),s=dr(e,"invertY",3,!1),a=dr(e,"channel",3,"move"),o=dr(e,"deadzone",3,0),l=lt(void 0),c=lt(void 0),u=!1,h=-1,d=0,p=0,g=56,_=lt(0),f=lt(0),m=!1;const y=$x(a());Xh(()=>{T(),Zx(a(),y)}),As(()=>{R(c)&&(R(c).style.transform=`translate(${R(_)}px, ${R(f)}px)`)});const v=O=>({x:O.clientX,y:O.clientY});function E(O,k){Jx(a(),y)&&(a()==="look"?(ct.yawRate=O,ct.pitchRate=k):a()==="drive"?(ct.moveX=O,ct.moveY=k):(ct.steer=O,ct.throttle=k))}function C(){m||(m=!0,window.addEventListener("pointermove",B),window.addEventListener("pointerup",x),window.addEventListener("pointercancel",x),window.addEventListener("blur",T),window.addEventListener("pagehide",T),document.addEventListener("visibilitychange",b))}function A(){m&&(m=!1,window.removeEventListener("pointermove",B),window.removeEventListener("pointerup",x),window.removeEventListener("pointercancel",x),window.removeEventListener("blur",T),window.removeEventListener("pagehide",T),document.removeEventListener("visibilitychange",b))}function b(){document.hidden&&T()}function N(O){if(!R(l))return;O.preventDefault(),O.stopPropagation();const k=R(l).getBoundingClientRect();d=k.left+k.width/2,p=k.top+k.height/2,g=k.width*.42,u=!0,h=O.pointerId;try{R(l).setPointerCapture(O.pointerId)}catch{}C(),B(O)}function B(O){if(!u||O.pointerId!==h)return;if(O.pointerType==="mouse"&&O.buttons===0){T();return}const k=v(O);let j=k.x-d,K=k.y-p;const Y=Math.hypot(j,K);Y>g&&(j=j/Y*g,K=K/Y*g),Ce(_,j,!0),Ce(f,K,!0);let ae=Y/g;ae>1&&(ae=1);const ce=ae<=o()?0:(ae-o())/(1-o()),Me=Y>0?j/Y:0,Be=Y>0?K/Y:0,V=(i()?-1:1)*Me*ce,se=(s()?-1:1)*-Be*ce;E(V,se)}function x(O){O.pointerId===h&&T()}function T(){u=!1,h=-1,Ce(_,0),Ce(f,0),E(0,0),A()}var z=rM();let $;yn(z,"aria-valuenow",0);var P=oe(z);Vi(P,O=>Ce(c,O),()=>R(c)),ne(z),Vi(z,O=>Ce(l,O),()=>R(l)),qt(()=>{$=Xt(z,1,"joy svelte-1icehqw",null,$,{right:t()==="right"}),Ti(z,`--joy-scale: ${n()}`),yn(z,"aria-label",a()==="look"?"Look":a()==="drive"?"Drive":"Move")}),Ct("pointerdown",z,N),Gr("lostpointercapture",z,T),Ct("contextmenu",z,O=>{O.preventDefault(),T()}),xt(r,z),rl()}Xu(["pointerdown","contextmenu"]);var sM=Lt('<div class="banner pullup svelte-jk7r88" role="alert">PULL UP</div>'),aM=Lt('<div class="banner terrain svelte-jk7r88" role="alert">TERRAIN</div>'),oM=Lt('<div class="banner stall svelte-jk7r88" role="alert">STALL</div>'),lM=Lt('<div class="banner overspeed svelte-jk7r88" role="alert">OVERSPEED</div>'),cM=Lt('<div><span class="svelte-jk7r88"> </span></div>'),uM=Lt('<div class="tick svelte-jk7r88"></div>'),hM=Lt('<div class="instrument small gmeter svelte-jk7r88"><span class="label svelte-jk7r88">G</span> <span class="value-sm svelte-jk7r88"> </span></div>'),dM=Lt('<div class="instrument small rotor svelte-jk7r88"><span class="label svelte-jk7r88">RPM</span> <span class="value-sm svelte-jk7r88"> </span></div>'),fM=Lt('<div class="instrument small torque svelte-jk7r88"><span class="label svelte-jk7r88">TRQ</span> <span class="value-sm svelte-jk7r88"> </span></div>'),pM=Lt('<div><span class="label svelte-jk7r88">BATT</span> <span class="value-sm svelte-jk7r88"> </span></div>'),mM=Lt("<div>ALT HOLD</div>"),gM=Lt('<div class="cockpit svelte-jk7r88" aria-label="Flight instruments"><div class="warnbar svelte-jk7r88" role="presentation"><!> <!> <!></div> <div class="panel bottom svelte-jk7r88"><div class="instrument adi svelte-jk7r88"><div class="adi-face svelte-jk7r88"><div class="adi-ball svelte-jk7r88"><div class="sky svelte-jk7r88"></div> <div class="ground svelte-jk7r88"></div> <div class="horizon-line svelte-jk7r88"></div> <div class="ladder svelte-jk7r88"></div></div> <div class="bank-scale svelte-jk7r88"><!> <div class="bank-pointer svelte-jk7r88"></div></div> <div class="aircraft-symbol svelte-jk7r88"><span class="wing left svelte-jk7r88"></span> <span class="dot svelte-jk7r88"></span> <span class="wing right svelte-jk7r88"></span></div></div></div> <div class="instrument dial ias svelte-jk7r88"><svg viewBox="0 0 100 100" class="svelte-jk7r88"><path class="arc red svelte-jk7r88" d="M 20 80 A 40 40 0 0 1 24.5 42.5"></path><path class="arc green svelte-jk7r88" d="M 24.5 42.5 A 40 40 0 0 1 75.5 42.5"></path><path class="arc red svelte-jk7r88" d="M 75.5 42.5 A 40 40 0 0 1 80 80"></path><line class="needle svelte-jk7r88" x1="50" y1="50" x2="50" y2="16"></line><circle class="hub svelte-jk7r88" cx="50" cy="50" r="4"></circle></svg> <div class="readout svelte-jk7r88"><span class="value svelte-jk7r88"> </span> <span class="unit svelte-jk7r88">IAS</span></div></div> <div class="instrument tape alt svelte-jk7r88"><span class="label svelte-jk7r88">ALT</span> <span class="value svelte-jk7r88"> </span> <span class="unit svelte-jk7r88">AGL</span> <span class="value-sm svelte-jk7r88"> </span></div> <div class="instrument bar vsi svelte-jk7r88"><span class="label svelte-jk7r88">VSI</span> <div class="track svelte-jk7r88"><div class="zero svelte-jk7r88"></div> <div></div></div> <span class="value-sm svelte-jk7r88"> </span></div> <div class="instrument tape hdg svelte-jk7r88"><span class="label svelte-jk7r88">HDG</span> <span class="value svelte-jk7r88"> </span> <div class="rose svelte-jk7r88"><svg viewBox="0 0 100 100" class="svelte-jk7r88"><circle class="ring svelte-jk7r88" cx="50" cy="50" r="42"></circle><text x="50" y="14" class="cp svelte-jk7r88">N</text><text x="86" y="53" class="cp svelte-jk7r88">E</text><text x="50" y="92" class="cp svelte-jk7r88">S</text><text x="14" y="53" class="cp svelte-jk7r88">W</text></svg> <div class="pointer svelte-jk7r88"></div></div></div> <div class="instrument bar throttle svelte-jk7r88"><span class="label svelte-jk7r88"> </span> <div class="track vertical svelte-jk7r88"><div class="fill svelte-jk7r88"></div></div> <span class="value-sm svelte-jk7r88"> </span></div> <!> <!> <!> <!> <!></div></div>');function _M(r,e){il(e,!0);let t=dr(e,"visible",3,!0);const n={airplane:{max:300,vne:260,stallBand:55},helicopter:{max:180,vne:150,stallBand:25},drone:{max:90,vne:75,stallBand:8}},i=20,s=B=>B*180/Math.PI,a=(B,x,T)=>Math.min(T,Math.max(x,B)),o=B=>(B%360+360)%360,l=zn(()=>n[e.model]),c=zn(()=>a(e.telemetry.ias/R(l).max,0,1)),u=zn(()=>R(c)*270-225),h=zn(()=>a(e.telemetry.vspeed,-i,i)),d=zn(()=>R(h)/i),p=zn(()=>o(s(e.telemetry.heading))),g=zn(()=>s(e.telemetry.bank)),_=zn(()=>s(e.telemetry.pitch)),f=3.2,m=zn(()=>a(R(_),-30,30)*f),y=zn(()=>Math.abs(e.telemetry.gForce-1)>.15),v=zn(()=>e.telemetry.battery!==null&&e.telemetry.battery<.2),E=[{a:-60,len:10},{a:-30,len:14},{a:-20,len:8},{a:-10,len:8},{a:0,len:16},{a:10,len:8},{a:20,len:8},{a:30,len:14},{a:60,len:10}],C=[-30,-20,-10,10,20,30];var A=Wh(),b=Wu(A);{var N=B=>{var x=gM(),T=oe(x),z=oe(T);{var $=Q=>{var ge=sM();xt(Q,ge)},P=Q=>{var ge=aM();xt(Q,ge)};Kt(z,Q=>{e.telemetry.gpws==="pullup"?Q($):e.telemetry.gpws==="caution"&&Q(P,1)})}var O=te(z,2);{var k=Q=>{var ge=oM();xt(Q,ge)};Kt(O,Q=>{e.telemetry.stall&&Q(k)})}var j=te(O,2);{var K=Q=>{var ge=lM();xt(Q,ge)};Kt(j,Q=>{e.telemetry.overspeed&&Q(K)})}ne(T);var Y=te(T,2),ae=oe(Y),ce=oe(ae),Me=oe(ce),Be=te(oe(Me),6);Wi(Be,21,()=>C,Oo,(Q,ge)=>{var Ue=cM();let mt;var Tt=oe(Ue),nt=oe(Tt,!0);ne(Tt),ne(Ue),qt(Bt=>{mt=Xt(Ue,1,"rung svelte-jk7r88",null,mt,{major:R(ge)%20===0}),Ti(Ue,`--rung-y: ${-R(ge)*f}px`),Ge(nt,Bt)},[()=>Math.abs(R(ge))]),xt(Q,Ue)}),ne(Be),ne(Me);var V=te(Me,2),se=oe(V);Wi(se,17,()=>E,Oo,(Q,ge)=>{var Ue=uM();qt(()=>Ti(Ue,`--tick-a: ${R(ge).a}deg; --tick-len: ${R(ge).len}px`)),xt(Q,Ue)});var ye=te(se,2);ne(V),qr(2),ne(ce),ne(ae);var ke=te(ae,2),Ae=oe(ke),Ee=te(oe(Ae),3);qr(),ne(Ae);var pt=te(Ae,2),We=oe(pt),U=oe(We,!0);ne(We),qr(2),ne(pt),ne(ke);var Pt=te(ke,2),Ie=te(oe(Pt),2),Oe=oe(Ie,!0);ne(Ie);var Ne=te(Ie,4),je=oe(Ne);ne(Ne),ne(Pt);var Xe=te(Pt,2),Ke=te(oe(Xe),2),Mt=te(oe(Ke),2);let w;ne(Ke);var M=te(Ke,2),X=oe(M,!0);ne(M),ne(Xe);var Z=te(Xe,2),ie=te(oe(Z),2),re=oe(ie);ne(ie);var et=te(ie,2);ne(Z);var Fe=te(Z,2),pe=oe(Fe),xe=oe(pe,!0);ne(pe);var $e=te(pe,2),ue=oe($e);ne($e);var Ot=te($e,2),tt=oe(Ot);ne(Ot),ne(Fe);var De=te(Fe,2);{var be=Q=>{var ge=hM(),Ue=te(oe(ge),2),mt=oe(Ue,!0);ne(Ue),ne(ge),qt((Tt,nt)=>{yn(ge,"aria-label",Tt),Ge(mt,nt)},[()=>`G force ${e.telemetry.gForce.toFixed(2)}`,()=>e.telemetry.gForce.toFixed(2)]),xt(Q,ge)};Kt(De,Q=>{R(y)&&Q(be)})}var Re=te(De,2);{var at=Q=>{var ge=dM(),Ue=te(oe(ge),2),mt=oe(Ue,!0);ne(Ue),ne(ge),qt((Tt,nt)=>{yn(ge,"aria-label",Tt),Ge(mt,nt)},[()=>`Rotor RPM ${e.telemetry.rotorRpm.toFixed(0)}`,()=>e.telemetry.rotorRpm.toFixed(0)]),xt(Q,ge)};Kt(Re,Q=>{e.telemetry.rotorRpm!==null&&Q(at)})}var Ze=te(Re,2);{var yt=Q=>{var ge=fM(),Ue=te(oe(ge),2),mt=oe(Ue);ne(Ue),ne(ge),qt((Tt,nt)=>{yn(ge,"aria-label",Tt),Ge(mt,`${nt??""}%`)},[()=>`Torque ${e.telemetry.torque.toFixed(0)} percent`,()=>e.telemetry.torque.toFixed(0)]),xt(Q,ge)};Kt(Ze,Q=>{e.telemetry.torque!==null&&Q(yt)})}var I=te(Ze,2);{var ve=Q=>{var ge=pM();let Ue;var mt=te(oe(ge),2),Tt=oe(mt);ne(mt),ne(ge),qt((nt,Bt)=>{Ue=Xt(ge,1,"instrument small battery svelte-jk7r88",null,Ue,{low:R(v)}),yn(ge,"aria-label",nt),Ge(Tt,`${Bt??""}%`)},[()=>`Battery ${(e.telemetry.battery*100).toFixed(0)} percent`,()=>(e.telemetry.battery*100).toFixed(0)]),xt(Q,ge)};Kt(I,Q=>{e.telemetry.battery!==null&&Q(ve)})}var G=te(I,2);{var de=Q=>{var ge=mM();let Ue;qt(()=>{Ue=Xt(ge,1,"lamp svelte-jk7r88",null,Ue,{on:e.telemetry.altHold}),yn(ge,"aria-label",`Altitude hold ${e.telemetry.altHold?"engaged":"off"}`)}),xt(Q,ge)};Kt(G,Q=>{e.telemetry.altHold!==null&&Q(de)})}ne(Y),ne(x),qt((Q,ge,Ue,mt,Tt,nt,Bt,En,Sr,ds,Ii,Di,pi)=>{yn(ae,"aria-label",Q),Ti(Me,`--bank: ${-R(g)}deg; --shift: ${R(m)}px`),Ti(ye,`--bank: ${R(g)}deg`),yn(ke,"aria-label",ge),Ti(Ee,`--deg: ${R(u)}deg`),Ge(U,Ue),yn(Pt,"aria-label",mt),Ge(Oe,Tt),Ge(je,`${nt??""} ASL`),yn(Xe,"aria-label",Bt),w=Xt(Mt,1,"fill svelte-jk7r88",null,w,{up:R(h)>=0}),Ti(Mt,`--pct: ${R(d)}`),Ge(X,En),yn(Z,"aria-label",Sr),Ge(re,`${ds??""}°`),Ti(et,`--hdg: ${-R(p)}deg`),yn(Fe,"aria-label",Ii),Ge(xe,e.model==="helicopter"?"COLL":"THR"),Ti(ue,Di),Ge(tt,`${pi??""}%`)},[()=>`Attitude: bank ${R(g).toFixed(0)} degrees, pitch ${R(_).toFixed(0)} degrees`,()=>`Indicated airspeed ${e.telemetry.ias.toFixed(0)}`,()=>e.telemetry.ias.toFixed(0),()=>`Altitude ${e.telemetry.altAGL.toFixed(0)} above ground, ${e.telemetry.altASL.toFixed(0)} above sea level`,()=>e.telemetry.altAGL.toFixed(0),()=>e.telemetry.altASL.toFixed(0),()=>`Vertical speed ${e.telemetry.vspeed.toFixed(1)}`,()=>e.telemetry.vspeed.toFixed(1),()=>`Heading ${R(p).toFixed(0)} degrees`,()=>R(p).toFixed(0),()=>`Throttle ${(e.telemetry.throttle*100).toFixed(0)} percent`,()=>`--pct: ${a(e.telemetry.throttle,0,1)}`,()=>(e.telemetry.throttle*100).toFixed(0)]),xt(B,x)};Kt(b,B=>{t()&&B(N)})}xt(r,A),rl()}const zh={class:null,lanes:null,laneIndex:null,roadHeading:null};function vM(r){return{onRoad:!0,edgeDist:1/0,friction:r.friction.asphalt,...zh}}function xM(r,e){return 156543.03392*Math.cos(r*Math.PI/180)/Math.pow(2,e)}function tl(r,e,t,n){const i=(n*e+t)*4;return r[i]>127||r[i+1]>127||r[i+2]>127}function MM(r,e,t,n,i,s){const a=tl(r,e,n,i),o=Math.ceil(Math.max(e,t)/2);for(let l=1;l<=o;l++){let c=1/0;for(let u=-l;u<=l;u++)for(let h=-l;h<=l;h++){if(Math.max(Math.abs(u),Math.abs(h))!==l)continue;const d=n+u,p=i+h;if(!(d<0||d>=e||p<0||p>=t)&&tl(r,e,d,p)!==a){const g=Math.hypot(u,h);g<c&&(c=g)}}if(c!==1/0)return c*s}return 1/0}const Rs=new Map;Rs.set("mask",EM);function yM(r,e,t){for(const s of e.providers)if(!Rs.has(s))throw new Error(`street: unknown provider "${s}" (registered: ${[...Rs.keys()].join(", ")})`);const n=e.providers[0],i=Rs.get(n);if(!i)throw new Error(`street: unknown provider "${n}" (registered: ${[...Rs.keys()].join(", ")})`);return i(r,e,t)}function SM(r){const e=[{id:"street-mask-bg",type:"background",paint:{"background-color":"#000000"}}];for(const t of r.layers??[]){if(t.type!=="line"||t["source-layer"]!=="transportation")continue;const n={id:`street-mask-${t.id}`,type:"line",source:t.source,"source-layer":t["source-layer"],paint:{"line-color":"#ffffff","line-width":t.paint?.["line-width"]??1,"line-opacity":1}};t.filter&&(n.filter=t.filter),e.push(n)}return{...r,layers:e}}function EM(r,e,t){let n=vM(e),i=[0,0],s=!1,a=null,o=null,l=null,c=null,u=null;if(typeof window<"u"&&typeof document<"u"){const d=e.mask.sizePx;o=document.createElement("div"),o.style.position="absolute",o.style.width=`${d}px`,o.style.height=`${d}px`,o.style.left="-9999px",o.style.top="0",o.style.visibility="hidden",document.body.appendChild(o),l=document.createElement("canvas"),l.width=d,l.height=d,c=l.getContext("2d",{willReadFrequently:!0}),fetch(t).then(p=>p.json()).then(p=>{if(s)return;const g=SM(p);a=new r.Map({container:o,style:g,center:i,zoom:e.mask.zoom,pitch:0,bearing:0,interactive:!1,attributionControl:!1,canvasContextAttributes:{preserveDrawingBuffer:!0}});const _=1e3/e.mask.sampleHz;u=setInterval(()=>{h()},_)}).catch(()=>{})}function h(){if(!(!a||!l||!c))try{const d=a.getCanvas();c.drawImage(d,0,0,l.width,l.height);const p=e.mask.sizePx,g=c.getImageData(0,0,p,p),_=Math.floor(p/2),f=Math.floor(p/2),m=tl(g.data,p,_,f),y=i[1],v=xM(y,e.mask.zoom),E=MM(g.data,p,p,_,f,v);n={onRoad:m,edgeDist:E,friction:m?e.friction.asphalt:e.friction.off,...zh}}catch{}}return{setPosition(d){if(i=d,a&&!s)try{a.jumpTo({center:d})}catch{}},sample(){return n},destroy(){s||(s=!0,u!==null&&(clearInterval(u),u=null),a&&(a.remove(),a=null),o&&o.parentNode&&o.parentNode.removeChild(o),o=null)}}}var bM=Lt('<div class="debug-overlay svelte-1uha8ag"><div> </div> <div> </div> <div> </div> <div> </div> <div> </div> <div> </div> <div> </div></div>'),TM=Lt('<a class="menu-item svelte-1uha8ag" rel="external"> </a>'),xa=Lt('<button type="button"><span class="icon svelte-1uha8ag"> </span> </button>'),AM=Lt('<button type="button"> </button> <button type="button"> </button> <button type="button">Brake</button>',1),wM=Lt("<p><strong> </strong> </p>"),RM=Lt('<div class="menu-about svelte-1uha8ag"><!> <p><strong>debug</strong>: F8</p></div>'),CM=Lt('<div class="menu-about svelte-1uha8ag"><p>Galaxy Earth — a 3D terrain basemap built with SvelteKit, MapLibre GL JS v5, and Three.js. Drive, fly, or walk across real-world terrain in a GTA-style twin-stick rig with a free-look camera.</p> <p><a href="https://github.com/diegonmarcos/diegonmarcos.github.io" rel="external" class="svelte-1uha8ag">github.com/diegonmarcos/diegonmarcos.github.io</a></p> <p>Part of the Galaxy constellation of apps (Hub, Earth, Gaia, X1).</p></div>'),LM=Lt('<nav class="menu svelte-1uha8ag" aria-label="Main menu"><section class="menu-section svelte-1uha8ag"><h2 class="svelte-1uha8ag">Galaxies</h2> <!></section> <section class="menu-section svelte-1uha8ag"><h2 class="svelte-1uha8ag">Camera View</h2> <div class="menu-row svelte-1uha8ag"><button type="button" class="menu-btn svelte-1uha8ag">Zoom +</button> <button type="button" class="menu-btn svelte-1uha8ag">Zoom −</button> <button type="button" class="menu-btn svelte-1uha8ag">Reset View</button> <button type="button"> </button></div> <!></section> <section class="menu-section svelte-1uha8ag"><h2 class="svelte-1uha8ag">Drive Mode</h2> <!></section> <section class="menu-section svelte-1uha8ag"><h2 class="svelte-1uha8ag">Configs</h2> <!> <button type="button">Graph Stats</button> <button type="button">Debug Mode</button> <button type="button">Cockpit HUD</button> <button type="button" class="menu-item svelte-1uha8ag"> </button> <button type="button">Keybindings</button> <!> <button type="button">About</button> <!></section></nav>'),PM=Lt('<div class="fab-popup svelte-1uha8ag" role="menu" aria-label="Camera view"></div>'),IM=Lt('<div class="fab-popup svelte-1uha8ag" role="menu" aria-label="Driver"></div>'),DM=Lt('<button type="button" aria-label="Toggle performance stats"><canvas width="120" height="36" class="svelte-1uha8ag"></canvas> <div class="perf-text svelte-1uha8ag"><span> </span> <span> </span></div></button>'),NM=Lt('<div class="perf-stat svelte-1uha8ag"><span>JS heap</span><span> </span></div>'),UM=Lt('<div class="perf-panel svelte-1uha8ag"><div class="perf-row svelte-1uha8ag"><span class="perf-label svelte-1uha8ag">FPS</span> <canvas width="160" height="40" class="svelte-1uha8ag"></canvas> <span class="perf-num svelte-1uha8ag"> </span></div> <div class="perf-row svelte-1uha8ag"><span class="perf-label svelte-1uha8ag">Frame</span> <canvas width="160" height="40" class="svelte-1uha8ag"></canvas> <span> </span></div> <div class="perf-row svelte-1uha8ag"><span class="perf-label svelte-1uha8ag">Draws</span> <canvas width="160" height="40" class="svelte-1uha8ag"></canvas> <span class="perf-num svelte-1uha8ag"> </span></div> <div class="perf-stat svelte-1uha8ag"><span>Draw calls</span><span> </span></div> <div class="perf-stat svelte-1uha8ag"><span>Triangles</span><span> </span></div> <div class="perf-stat svelte-1uha8ag"><span>Geometries</span><span> </span></div> <div class="perf-stat svelte-1uha8ag"><span>Textures</span><span> </span></div> <!></div>'),FM=Lt('<div class="climb svelte-1uha8ag"><button type="button" class="climb-btn svelte-1uha8ag" aria-label="Climb up">▲</button> <button type="button" class="climb-btn svelte-1uha8ag" aria-label="Climb down">▼</button></div>'),OM=Lt('<div class="map-wrap svelte-1uha8ag"><div class="map svelte-1uha8ag"></div> <canvas class="sky-overlay svelte-1uha8ag"></canvas> <!> <!> <button type="button" aria-label="Menu">☰</button> <!> <div class="fabs svelte-1uha8ag"><div class="fab-anchor svelte-1uha8ag"><!> <button type="button" class="fab svelte-1uha8ag" aria-label="Camera view"> </button></div> <div class="fab-anchor svelte-1uha8ag"><!> <button type="button" class="fab svelte-1uha8ag" aria-label="Driver mode"> </button></div></div> <div class="hud svelte-1uha8ag"><!> <!></div> <div class="velocimeter svelte-1uha8ag"> <span class="redline svelte-1uha8ag"> </span> km/h</div> <div class="altimeter svelte-1uha8ag"> <span class="redline svelte-1uha8ag"> </span> m</div> <!> <!> <!></div>');function WM(r,e){il(e,!0);const t=1/3.6;let n;const i=Mn.rider,s=i.joystick,a=s.look,o=i.camera;function l(D,J,ee){const le=D.size??o.refSize,he=(D.speed.max??0)*t,me=he>0?Math.min(1,(ee??0)/he):0,fe=J.zoom+Math.log2(o.refSize/le)-o.speedZoom*me;return Math.max(o.minZoom,Math.min(o.maxZoom,fe))}let c=lt(Xa(i.drivers.find(D=>D.id===i.defaultDriver)??i.drivers[0])),u=lt(Xa(i.cameras.find(D=>D.id===i.defaultCamera)??i.cameras[0])),h=lt(0),d=lt(0),p=lt(void 0),g=lt(void 0),_=lt(0),f=lt(0),m=lt(!1),y=lt(0),v=lt(0),E=lt(0),C=lt(0),A=lt(void 0),b=lt(void 0),N=lt(void 0),B=lt(void 0),x=lt(!1),T=lt(!1),z=lt(!1),$=lt(!1),P=lt(!1),O=lt(!1),k=lt(!1),j=lt(!0),K=()=>{},Y=()=>{},ae=()=>{},ce=()=>{};const Me=[{id:"hub",label:"Galaxy Hub",href:"/galaxy/"},{id:"earth",label:"Galaxy Earth",href:"/galaxy-earth/"},{id:"gaia",label:"Galaxy Gaia",href:"/galaxy-gaia/"},{id:"x1",label:"Galaxy X1",href:"/galaxy-x1/"}],Be=[];let V=lt("");function se(D){if(typeof D=="string")return D;if(D instanceof Error)return`${D.name}: ${D.message}
${D.stack??""}`;const J=new WeakSet;try{return JSON.stringify(D,(ee,le)=>{if(typeof le=="bigint")return`${le}n`;if(typeof le=="object"&&le!==null){if(J.has(le))return"[Circular]";J.add(le)}return le},2)??String(D)}catch{return String(D)}}function ye(D,J){const ee=new Date().toISOString(),le=J.map(se).join(" ");Be.push(`[${ee}] [${D}] ${le}`)}async function ke(){const D=Be.join(`
`),J=`galaxy-earth-log-${Date.now()}.log`;Ce(V,"Exporting…");try{await navigator.clipboard.writeText(D)}catch(ee){console.error("[rider] clipboard copy failed",ee)}try{const ee=window.showSaveFilePicker;if(ee){const he=await(await ee({suggestedName:J})).createWritable();await he.write(D),await he.close()}else{const le=URL.createObjectURL(new Blob([D],{type:"text/plain"})),he=document.createElement("a");he.href=le,he.download=J,he.click(),URL.revokeObjectURL(le)}}catch(ee){console.error("[rider] local log save failed/cancelled",ee)}try{const ee=await fetch("https://api.diegonmarcos.com/c3-infra-api/public/logs",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({source:"galaxy-earth",log:D})});Ce(V,ee.ok?"Copied + saved + uploaded ✓":`Copied + saved, upload failed (${ee.status})`,!0)}catch(ee){console.error("[rider] log upload failed",ee),Ce(V,"Copied + saved, upload failed (offline?)")}setTimeout(()=>Ce(V,""),4e3)}let Ae=lt("none"),Ee=lt(0),pt=lt(0),We=lt(0);const U={heading:0};let Pt,Ie=0;const Oe={heading:0,bank:0,pitch:0,speed:0,vspeed:0,altASL:0,velX:0,velZ:0,battery:1};let Ne=0,je=lt(null),Xe=null,Ke=lt(!0),Mt=lt(0),w=lt(!1),M=lt(Xa(i.cockpit.defaultVisible));As(()=>{const D=R(c).altitude;U.altitude=X(D.default,D.min,D.max),U.speed=(R(c).speed.idle??0)*t,R(c).control==="flight"&&(Oe.heading=U.heading,Oe.bank=0,Oe.pitch=0,Oe.speed=0,Oe.vspeed=0,Oe.velX=0,Oe.velZ=0,Oe.battery=1,Ne=0,Xe=D.default,Ce(je,null)),console.log(`[rider] driver -> '${R(c).id}' (default altitude ${U.altitude}m, range [${D.min},${D.max}]m)`)}),As(()=>{console.log(`[rider] camera -> '${R(u).id}' (pitch ${R(u).pitch}, zoom ${l(R(c),R(u))})`)});function X(D,J,ee){return Math.min(ee,Math.max(J,D))}const Z=.6180339887498949;function ie(D,J){const ee=D*Z+J;return ee-Math.floor(ee)}function re(){const D=new Ml(i.character.radius,i.character.height,4,8),J=new ji({color:i.character.color});return new Vt(D,J)}function et(D){const J=new Ye(i.character.color),ee=new ji({color:J}),le=new ji({color:J.clone().multiplyScalar(.6)}),he=new ji({color:J.clone().multiplyScalar(1.3)});if(D==="drone"){const me=new ei;me.add(new Vt(new $n(.6,.15,.6),ee));const fe=new Kr(.18,.18,.02,12),Le=[[.35,.35],[.35,-.35],[-.35,.35],[-.35,-.35]];for(const[it,qe]of Le){const St=new Vt(fe,le);St.position.set(it,.1,qe),me.add(St)}return me}if(D==="helicopter"){const me=new ei;me.add(new Vt(new $n(.8,.6,1.8),ee));const fe=new Vt(new $n(.2,.2,1.6),ee);fe.position.set(0,.1,-1.5),me.add(fe);const Le=new Vt(new $n(3.2,.06,.15),le);return Le.position.set(0,.5,0),me.add(Le),me}if(D==="airplane"){const me=new ei,fe=new Vt(new Kr(.25,.25,2.4,10),ee);fe.rotation.x=Math.PI/2,me.add(fe),me.add(new Vt(new $n(3.2,.06,.5),he));const Le=new Vt(new $n(.06,.5,.4),le);return Le.position.set(0,.25,-1.1),me.add(Le),me}return re()}function Fe(D,J){const he=new Kr(.4,.5,3,6).toNonIndexed();he.translate(0,3/2,0);const me=new yl(2.4,6,7).toNonIndexed();me.translate(0,3+6/2,0);const fe=he.attributes.position,Le=me.attributes.position,it=he.attributes.normal,qe=me.attributes.normal,St=new Float32Array(fe.array.length+Le.array.length);St.set(fe.array,0),St.set(Le.array,fe.array.length);const ze=new Float32Array(it.array.length+qe.array.length);ze.set(it.array,0),ze.set(qe.array,it.array.length);const Pe=new Float32Array(fe.count*3+Le.count*3),dn=new Ye(J),ht=new Ye(D);for(let jt=0;jt<fe.count;jt++)dn.toArray(Pe,jt*3);for(let jt=0;jt<Le.count;jt++)ht.toArray(Pe,(fe.count+jt)*3);const kt=new In;return kt.setAttribute("position",new Qt(St,3)),kt.setAttribute("normal",new Qt(ze,3)),kt.setAttribute("color",new Qt(Pe,3)),kt}qh(()=>{["log","info","warn","error","debug"].forEach(Te=>{const we=console[Te].bind(console);console[Te]=(...Je)=>{ye(Te,Je),we(...Je)}}),console.log(`[rider] mount: driver=${R(c).id} camera=${R(u).id} start=${i.start}`);let D,J,ee=!1,le=0,he,me=0,fe=0,Le=null,it=0;const qe=new Set;function St(){const Te=i.keys;let we=0,Je=0,zt=0;[...qe].some(vt=>Te.forward.includes(vt))&&(Je+=1),[...qe].some(vt=>Te.back.includes(vt))&&(Je-=1),[...qe].some(vt=>Te.left.includes(vt))&&(we-=1),[...qe].some(vt=>Te.right.includes(vt))&&(we+=1),[...qe].some(vt=>Te.up.includes(vt))&&(zt+=1),[...qe].some(vt=>Te.down.includes(vt))&&(zt-=1),ct.moveX=we,ct.moveY=Je,ct.climbKeys=zt}function ze(Te,we){return Te.includes(we)}function Pe(Te,we,Je){const zt=Te.indexOf(we),vt=Te.length;return Te[(zt+Je+vt)%vt]}function dn(Te){if(Te.key==="F8"){Te.preventDefault(),Ce(x,!R(x));return}const we=i.keys,Je=Te.key.length===1?Te.key.toLowerCase():Te.key,zt=ze(we.forward,Je)||ze(we.back,Je)||ze(we.left,Je)||ze(we.right,Je)||ze(we.up,Je)||ze(we.down,Je),vt=ze(we.cameraNext,Je)||ze(we.cameraPrev,Je)||ze(we.driverNext,Je)||ze(we.driverPrev,Je);!zt&&!vt||(Te.preventDefault(),zt&&(qe.add(Je),St()),vt&&!Te.repeat&&(ze(we.cameraNext,Je)?Ce(u,Pe(i.cameras,R(u),1),!0):ze(we.cameraPrev,Je)?Ce(u,Pe(i.cameras,R(u),-1),!0):ze(we.driverNext,Je)?Ce(c,Pe(i.drivers,R(c),1),!0):ze(we.driverPrev,Je)&&Ce(c,Pe(i.drivers,R(c),-1),!0)))}function ht(Te){const we=Te.key.length===1?Te.key.toLowerCase():Te.key;qe.has(we)&&(Te.preventDefault(),qe.delete(we),St())}function kt(){qe.clear(),St()}function jt(){document.hidden&&(qe.clear(),St())}window.addEventListener("keydown",dn),window.addEventListener("keyup",ht),window.addEventListener("blur",kt),document.addEventListener("visibilitychange",jt),Ce(x,new URLSearchParams(window.location.search).get("debug")==="1"),R(x)&&(console.info("[rider] debug mode ON — F8 toggles, throttled frame logs every 30 renders"),za(()=>import("../chunks/hRSVIHhc.js").then(Te=>Te.e),__vite__mapDeps([0,1]),import.meta.url).then(Te=>{(Te.default??Te).init(),console.info("[rider] eruda mobile console attached")}).catch(Te=>console.error("[rider] eruda failed to load",Te)));function Dn(Te){Ce(Ae,Te.message??String(Te),!0),console.error("[rider] window error",Te.error??Te.message)}function gn(Te){Ce(Ae,Te.reason?.message??String(Te.reason),!0),console.error("[rider] unhandled rejection",Te.reason)}window.addEventListener("error",Dn),window.addEventListener("unhandledrejection",gn);let It=!1;function nn(Te){It&&(me+=Te.movementX*a.mouseSensitivity*(Math.PI/180),fe=X(fe+Te.movementY*a.mouseSensitivity,a.minPitch,a.skyMaxPitch))}function bn(){It=!!he&&document.pointerLockElement===he}document.addEventListener("mousemove",nn),document.addEventListener("pointerlockchange",bn);function Ut(){ct.climbPointer=0}window.addEventListener("pointerup",Ut),window.addEventListener("pointercancel",Ut);let rn,sn,an;if(R(p)){rn=new Ko({canvas:R(p),alpha:!0}),rn.setSize(window.innerWidth,window.innerHeight),an=new Ln(60,window.innerWidth/window.innerHeight,.1,1e3),sn=new bo;const Te=new Sl(500,32,32),we=new Li({side:Pn,uniforms:{topColor:{value:new Ye(131852)},bottomColor:{value:new Ye(1708080)}},vertexShader:`
          varying vec3 vWorldPos;
          void main() {
            vec4 worldPos = modelMatrix * vec4(position, 1.0);
            vWorldPos = worldPos.xyz;
            gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
          }
        `,fragmentShader:`
          varying vec3 vWorldPos;
          uniform vec3 topColor;
          uniform vec3 bottomColor;
          void main() {
            float h = clamp(normalize(vWorldPos).y * 0.5 + 0.5, 0.0, 1.0);
            gl_FragColor = vec4(mix(bottomColor, topColor, h), 1.0);
          }
        `}),Je=new Vt(Te,we);sn.add(Je);const zt=400,vt=new Float32Array(zt*3);for(let gt=0;gt<zt;gt++){const At=ie(gt,.13)*Math.PI*2,on=ie(gt,.77)*Math.PI*.5,Yt=480;vt[gt*3]=Yt*Math.sin(on)*Math.cos(At),vt[gt*3+1]=Yt*Math.cos(on),vt[gt*3+2]=Yt*Math.sin(on)*Math.sin(At)}const fn=new In;fn.setAttribute("position",new Qt(vt,3));const dt=new gl({color:16777215,size:1.5,sizeAttenuation:!1});sn.add(new Ch(fn,dt))}function Ni(){!rn||!an||(rn.setSize(window.innerWidth,window.innerHeight),an.aspect=window.innerWidth/window.innerHeight,an.updateProjectionMatrix())}window.addEventListener("resize",Ni);let mi=!1;return As(()=>{const Te=R(c);D&&(Te.globe?(mi||(D.setProjection({type:"globe"}),D.setZoom(1)),mi=!0):mi&&(D.setProjection({type:"mercator"}),mi=!1))}),(async()=>{const Te=(await za(async()=>{const{default:we}=await import("../chunks/B1PBqzko.js").then(Je=>Je.m);return{default:we}},__vite__mapDeps([2,1]),import.meta.url)).default;await za(()=>Promise.resolve({}),__vite__mapDeps([3]),import.meta.url),!ee&&(D=new Te.Map({container:n,style:Mn.basemap,center:Mn.center,zoom:Mn.zoom,pitch:Mn.pitch,bearing:Mn.bearing}),D.setCenterClampedToGround(!1),D.setMaxPitch(a.mapMaxPitch),K=()=>D?.zoomIn(),Y=()=>D?.zoomOut(),ae=()=>D?.resetNorth(),ce=()=>{D&&(Ce(j,!R(j)),console.log(`[rider] terrain3d -> ${R(j)}`),D.setTerrain(R(j)?{source:"terrain-dem",exaggeration:Mn.terrain.exaggeration}:null))},he=D.getCanvas(),he.requestPointerLock&&he.addEventListener("click",()=>he?.requestPointerLock()),D.on("error",we=>{console.error("[map] error event",we.error?.message??we.error??we)}),D.on("sourcedataloading",we=>{we.sourceId&&console.debug(`[map] source loading: ${we.sourceId}`)}),D.on("dataabort",we=>{console.warn(`[map] data load aborted for source '${we.sourceId}'`)}),D.on("styleimagemissing",we=>{!D||D.hasImage(we.id)||D.addImage(we.id,{width:1,height:1,data:new Uint8Array(4)})}),D.on("load",()=>{if(!D)return;try{Le=yM(Te,i.street,Mn.basemap)}catch(He){console.warn("[rider] street provider failed to initialize — falling back to normal driving",He),Le=null}D.addSource("terrain-dem",{type:"raster-dem",tiles:Mn.terrain.tiles,tileSize:Mn.terrain.tileSize,maxzoom:Mn.terrain.maxzoom,encoding:Mn.terrain.encoding}),D.setTerrain({source:"terrain-dem",exaggeration:Mn.terrain.exaggeration}),D.setSky({"sky-color":"#88C6FC","horizon-color":"#ffffff","fog-color":"#ffffff","atmosphere-blend":.8});const we=Object.entries(D.getStyle()?.sources??{}).find(([,He])=>He.type==="vector")?.[0];if(we){const He=Mn.nature;D.addLayer({id:"nature-green",type:"fill",source:we,"source-layer":He.sourceLayer,filter:["in",["get","class"],["literal",He.landcoverClasses]],paint:{"fill-color":He.greenColor,"fill-opacity":He.greenOpacity}});const ot=Mn.buildings;D.addLayer({id:"buildings-3d",type:"fill-extrusion",source:we,"source-layer":"building",minzoom:ot.minZoom,paint:{"fill-extrusion-base":["get",ot.baseField],"fill-extrusion-height":["get",ot.heightField],"fill-extrusion-opacity":ot.opacity,"fill-extrusion-color":["interpolate",["linear"],["get",ot.heightField],0,ot.lowColor,ot.highRiseMeters,ot.highColor]}})}let Je=[i.start[0],i.start[1]],zt,vt,fn,dt;const gt={};function At(He){return gt[He.id]||(gt[He.id]=et(He.id)),gt[He.id]}const on=new ax,Yt={};function Nn(He){const ot=He.model?.glb;if(!ot||Yt[He.id])return;Yt[He.id]="loading";const Et=i.assetsBase+ot;console.log(`[rider] loading model for '${He.id}': ${Et}`),on.load(Et,_t=>{const Zt=_t.scene,Gt=He.model.scale??1;Zt.scale.setScalar(Gt),Zt.rotation.y=He.model.yaw??0,Zt.position.y=He.model.y??0,Yt[He.id]=Zt;const _n=new ui().setFromObject(Zt).getSize(new L);console.log(`[rider] model loaded for '${He.id}': bbox ${_n.x.toFixed(2)}x${_n.y.toFixed(2)}x${_n.z.toFixed(2)} (scale ${Gt})`),R(c).id===He.id&&Hn()},_t=>{_t.total&&console.debug(`[rider] '${He.id}' loading ${Math.round(_t.loaded/_t.total*100)}%`)},_t=>{Yt[He.id]="error",console.error(`[rider] FAILED to load model for '${He.id}' from ${Et} — falling back to procedural mesh`,_t)})}function Hn(){if(!dt)return;dt.clear();const He=Yt[R(c).id];R(c).model?.glb&&He&&He!=="loading"&&He!=="error"?dt.add(He):dt.add(At(R(c)))}let gi,Fn,ni=0;const Tn={lngLat:[i.start[0],i.start[1]],heading:0,agl:0,groundElev:0,vis:1};let Gs="";const Er=new Array(60).fill(16.7);let Ua=0,ms=60;const er=120,wl=new Array(er).fill(16.7),Rl=new Array(er).fill(60),Fa=new Array(er).fill(0);let tr=0;function Hh(){const He=R(g);if(!He)return;const ot=He.getContext("2d");if(!ot)return;const Et=He.width,_t=He.height;ot.clearRect(0,0,Et,_t);const Zt=Er.length,Gt=40;ot.beginPath();for(let Ft=0;Ft<Zt;Ft++){const _n=Er[(Ua+Ft)%Zt],On=Ft/(Zt-1)*Et,Un=_t-Math.min(_n,Gt)/Gt*_t;Ft===0?ot.moveTo(On,Un):ot.lineTo(On,Un)}ot.strokeStyle=R(f)>33?"#ff5c5c":R(f)>16?"#ffb84d":"#5ee6a0",ot.lineWidth=1.5,ot.stroke()}function Oa(He,ot,Et,_t,Zt){if(!He)return;const Gt=He.getContext("2d");if(!Gt)return;const Ft=He.width,_n=He.height;Gt.clearRect(0,0,Ft,_n);const On=ot.length;Gt.beginPath();for(let Un=0;Un<On;Un++){const An=ot[(Et+Un)%On],_i=Un/(On-1)*Ft,vi=_n-Math.min(An,_t)/_t*_n;Un===0?Gt.moveTo(_i,vi):Gt.lineTo(_i,vi)}Gt.strokeStyle=Zt,Gt.lineWidth=1.5,Gt.stroke()}function Gh(){if(!R(m))return;Oa(R(b),Rl,tr,90,"#5ee6a0"),Oa(R(N),wl,tr,40,R(f)>33?"#ff5c5c":R(f)>16?"#ffb84d":"#5ee6a0");const He=Math.max(20,...Fa);Oa(R(B),Fa,tr,He,"#9db4ff")}const Vh={id:"rider",type:"custom",renderingMode:"3d",onAdd(He,ot){zt=new bo,zt.add(new Nu(16777215,.6));const Et=new Jo(16777215,.8);Et.position.set(0,-70,100).normalize(),zt.add(Et),dt=new ei,zt.add(dt);for(const An of i.drivers)Nn(An);Hn(),vt=new cl,fn=new Ko({canvas:D.getCanvas(),context:ot}),fn.autoClear=!1;const _t=Mn.nature.trees,Zt=Math.min(_t.count,300),Gt=Fe(_t.canopyColor,_t.trunkColor),Ft=new ji({vertexColors:!0});Fn=new wh(Gt,Ft,Zt);const _n=[i.start[0],i.start[1]],On=new Ve;for(let An=0;An<Zt;An++){const _i=ie(An,.1)*Math.PI*2,vi=Math.sqrt(ie(An,.7))*_t.radius,br=_t.minScale+ie(An,.4)*(_t.maxScale-_t.minScale),Ba=Math.cos(_i)*vi,ka=Math.sin(_i)*vi,ii=Te.MercatorCoordinate.fromLngLat(_n,0),nr=ii.meterInMercatorCoordinateUnits();ii.x+=Ba*nr,ii.y+=ka*nr;const ir=ii.meterInMercatorCoordinateUnits();On.makeTranslation(ii.x,ii.y,ii.z).multiply(new Ve().makeRotationX(Math.PI/2)).multiply(new Ve().makeScale(ir*br,ir*br,ir*br)),Fn.setMatrixAt(An,On)}Fn.instanceMatrix.needsUpdate=!0,gi=new bo,gi.add(new Nu(16777215,.7));const Un=new Jo(16777215,.7);Un.position.set(0,-70,100).normalize(),gi.add(Un),gi.add(Fn)},render(He,ot){bd(Ee),Ce(pt,performance.now(),!0);try{if(!D)return;const Et=ot?.defaultProjectionData?.mainMatrix;if(!Et){console.warn("[rider] no projection matrix from maplibre v5 render args");return}const _t=Te.MercatorCoordinate.fromLngLat(Tn.lngLat,Tn.groundElev+Tn.agl),Zt=new Ve().makeTranslation(_t.x,_t.y,_t.z).multiply(new Ve().makeRotationX(Math.PI/2)).multiply(new Ve().makeRotationZ(-Tn.heading)).multiply(new Ve().makeScale(Tn.vis,Tn.vis,Tn.vis));vt.projectionMatrix=new Ve().fromArray(Et).multiply(Zt),fn.resetState(),fn.render(zt,vt),vt.projectionMatrix=new Ve().fromArray(Et),fn.render(gi,vt),R(x)&&R(Ee)%30===0&&console.debug("[rider]",{fps:Math.round(R(_)),renderCalls:R(y),driver:R(c).id,camera:R(u).id,freeInput:{moveX:ct.moveX,moveY:ct.moveY,yawRate:ct.yawRate,pitchRate:ct.pitchRate,climb:va()},frameState:Tn})}catch(Et){Ce(Ae,Et instanceof Error?`${Et.message}
${Et.stack??""}`:String(Et),!0),console.error("[rider] render() threw",Et)}}};D.addLayer(Vh),J=Ed(()=>{As(()=>{R(c),Hn()})});const Cl=He=>{if(!(ee||!D))try{const ot=ni?Math.min((He-ni)/1e3,.1):0;if(ni=He,Ce(We,He,!0),ot>0){const Dt=ot*1e3;Ce(f,Dt),ms=ms+(1e3/Dt-ms)*.1,Ce(_,ms,!0),Er[Ua%Er.length]=Dt,Ua++,Hh(),wl[tr%er]=Dt,Rl[tr%er]=ms,tr++,Gh(),fn&&(Ce(y,fn.info.render.calls,!0),Ce(v,fn.info.render.triangles,!0),Ce(E,fn.info.memory.geometries,!0),Ce(C,fn.info.memory.textures,!0),Fa[(tr-1+er)%er]=R(y));const pn=performance.memory?.usedJSHeapSize;Ce(A,pn!=null?pn/(1024*1024):void 0,!0)}me+=ct.yawRate*(a.yawRate*Math.PI/180)*ot,fe=X(fe+ct.pitchRate*a.pitchRate*ot,a.minPitch,a.skyMaxPitch);const Et=R(c).speed,_t=R(c).altitude;let Zt=null;if(Le)try{Le.setPosition(Je),Zt=Le.sample()}catch(Dt){console.error("[rider] street provider disabled after error",Dt);try{Le.destroy()}catch{}Le=null}const Gt=D.queryTerrainElevation(Je)??0;let Ft;if(R(c).control==="flight"){const Dt=R(c).flight;Dt.model!=="drone"&&(Ne=X(Ne+va()*.5*ot,0,1)),Xe!==null&&(Oe.altASL=Gt+Xe,Xe=null);const pn={pitchAxis:X(ct.pitchRate,-1,1),rollAxis:X(ct.moveX,-1,1),yawAxis:0,throttle:Ne,climbAxis:X(ct.moveY,-1,1),gearDown:R(Ke),flaps:R(Mt),brake:R(w)?1:0},rr={groundElev:Gt,dt:ot},gs=(Dt.model==="airplane"?tM:Dt.model==="helicopter"?nM:iM)(Oe,pn,Dt,rr);Ce(je,gs,!0),Ft={heading:gs.heading,forwardX:Math.sin(gs.heading),forwardZ:-Math.cos(gs.heading),dForward:Oe.speed*ot,altitude:gs.altAGL}}else if(R(c).control==="vehicle"){const Dt=R(c).vehicle;Ft={...eM(U,{steerAxis:ct.moveX,throttle:Math.max(0,ct.moveY),brake:Math.max(0,-ct.moveY)},{...Dt,maxSpeed:Et.max*t,friction:Zt?.friction??1},ot),altitude:U.altitude??0}}else Ft=Qx(U,{moveX:ct.moveX,moveY:ct.moveY,camBearing:me+R(u).bearingOffset*Math.PI/180,climb:va()},{min:Et.min*t,cruise:Et.cruise*t,idle:Et.idle*t,max:Et.max*t,turn:R(c).turnRate*(Math.PI/180),accel:R(c).accel,turnAtMax:R(c).turnAtMax,speedRef:Et.max*t,lift:_t.climbRate,maxAlt:_t.max,minAlt:_t.min,deadzone:i.joystick.deadzone},ot);Ce(h,(U.speed??0)/t),Ce(d,Ft.altitude,!0);const _n=Te.MercatorCoordinate.fromLngLat(Je,Gt+Ft.altitude),On=_n.meterInMercatorCoordinateUnits();_n.x+=Ft.forwardX*Ft.dForward*On,_n.y+=Ft.forwardZ*Ft.dForward*On;const Un=_n.toLngLat();Je=[Un.lng,Un.lat],Tn.lngLat=Je,Tn.heading=Ft.heading,Tn.agl=Ft.altitude,Tn.groundElev=Gt,Tn.vis=On*(R(c).model?.scale??1)*(R(u).modelBoost??1);let An,_i;const vi=R(c).orbitZoom;if(_t.model==="zoom"&&vi)An=X(vi.refZoom-Math.log2(Math.max(Ft.altitude,1)/vi.refAltitude),.5,6),_i=0;else{An=l(R(c),R(u),U.speed);const Dt=R(u).targetLift,pn=Dt==="eye"?_t.eyeHeight:typeof Dt=="number"?Dt:0;_i=Gt+Ft.altitude+pn}const br=`${R(c).id}:${R(u).id}`;Gs!==br&&(Gs=br,console.log(`[rider] camera path -> driver '${R(c).id}' camera '${R(u).id}': zoom ${An.toFixed(2)}, model '${_t.model}', size ${R(c).size??o.refSize}`));const Ba=X(R(u).pitch+fe,0,a.mapMaxPitch),ka=R(c).control==="vehicle",ii=R(c).control==="flight";let nr=o.fovBase,ir=0;if(ka){const Dt=Et.max*t,pn=Dt>0?Math.min(1,Math.abs(U.speed??0)/Dt):0;nr=o.fovBase+(o.fovMax-o.fovBase)*pn;const rr=R(c).vehicle;ir=-o.rollMax*((U.steer??0)/rr.maxSteer)*pn}else if(ii&&R(je)){const Dt=Et.max*t,pn=Dt>0?Math.min(1,R(je).speed/Dt):0;nr=o.fovBase+(o.fovMax-o.fovBase)*pn,ir=-(R(je).bank*180)/Math.PI*.5}(Pt===void 0||Math.abs(nr-Pt)>.1)&&(Pt=nr,D.setVerticalFieldOfView?.(Pt)),Ie=ir;let Ll=me*180/Math.PI+R(u).bearingOffset,Pl=Ba,Il=_i,Dl=Ie;if(ii&&R(je)&&R(u).id==="fps"){const pn=R(c).cockpitEyeHeight??0;Ll=R(je).heading*180/Math.PI,Pl=X(90-R(je).pitch*180/Math.PI,0,a.mapMaxPitch),Dl=-(R(je).bank*180)/Math.PI,Il=Gt+Ft.altitude+pn}if(D.jumpTo({center:Je,bearing:Ll,pitch:Pl,zoom:An,elevation:Il,roll:Dl}),R(p)&&rn&&sn&&an){const Dt=Math.min(1,Math.max(0,(fe-a.mapMaxPitch)/20));if(Dt<=0)R(p).style.display="none";else{R(p).style.display="",R(p).style.opacity=String(Dt);const pn=me,rr=ah.degToRad(fe-90),Nl=new L(Math.sin(pn)*Math.cos(rr),Math.sin(rr),-Math.cos(pn)*Math.cos(rr));an.position.set(0,0,0),an.lookAt(Nl),rn.render(sn,an)}}D.triggerRepaint()}catch(ot){it++,it<=5&&console.error("[rider] frame error",ot),it===5&&console.error("[rider] further frame errors suppressed")}finally{le=requestAnimationFrame(Cl)}};le=requestAnimationFrame(Cl)}))})(),()=>{ee=!0,le&&cancelAnimationFrame(le),window.removeEventListener("keydown",dn),window.removeEventListener("keyup",ht),window.removeEventListener("blur",kt),document.removeEventListener("visibilitychange",jt),window.removeEventListener("error",Dn),window.removeEventListener("unhandledrejection",gn),document.removeEventListener("mousemove",nn),document.removeEventListener("pointerlockchange",bn),window.removeEventListener("resize",Ni),window.removeEventListener("pointerup",Ut),window.removeEventListener("pointercancel",Ut),rn?.dispose(),J?.(),Le?.destroy(),D?.remove()}});var pe=OM(),xe=oe(pe);Vi(xe,D=>n=D,()=>n);var $e=te(xe,2);Vi($e,D=>Ce(p,D),()=>R(p));var ue=te($e,2);{var Ot=D=>{{let J=zn(()=>R(M)&&R(u).id==="fps");_M(D,{get telemetry(){return R(je)},get model(){return R(c).flight.model},get visible(){return R(J)}})}};Kt(ue,D=>{R(c).control==="flight"&&R(je)&&D(Ot)})}var tt=te(ue,2);{var De=D=>{var J=bM(),ee=oe(J),le=oe(ee);ne(ee);var he=te(ee,2),me=oe(he);ne(he);var fe=te(he,2),Le=oe(fe);ne(fe);var it=te(fe,2),qe=oe(it);ne(it);var St=te(it,2),ze=oe(St);ne(St);var Pe=te(St,2),dn=oe(Pe);ne(Pe);var ht=te(Pe,2);let kt;var jt=oe(ht);ne(ht),ne(J),qt((Dn,gn,It,nn,bn,Ut,rn,sn,an)=>{Ge(le,`fps ${Dn??""} · ${R(y)??""} draws`),Ge(me,`render: ${R(Ee)??""} calls —
        ${R(We)-R(pt)>500?"STALLED":"LIVE"}`),Ge(Le,`moveX ${gn??""} moveY ${It??""}`),Ge(qe,`yawRate ${nn??""} pitchRate ${bn??""}
        climb ${Ut??""}`),Ge(ze,`driver ${R(c).id??""} · camera ${R(u).id??""}`),Ge(dn,`heading ${rn??""}° · alt ${sn??""}m
        · speed ${an??""} km/h`),kt=Xt(ht,1,"svelte-1uha8ag",null,kt,{err:R(Ae)!=="none"}),Ge(jt,`err: ${R(Ae)??""}`)},[()=>Math.round(R(_)),()=>ct.moveX.toFixed(2),()=>ct.moveY.toFixed(2),()=>ct.yawRate.toFixed(2),()=>ct.pitchRate.toFixed(2),()=>va().toFixed(2),()=>(U.heading*(180/Math.PI)).toFixed(1),()=>(U.altitude??0).toFixed(1),()=>R(h).toFixed(2)]),xt(D,J)};Kt(tt,D=>{R(x)&&D(De)})}var be=te(tt,2);let Re;var at=te(be,2);{var Ze=D=>{var J=LM(),ee=oe(J),le=te(oe(ee),2);Wi(le,17,()=>Me,dt=>dt.id,(dt,gt)=>{var At=TM(),on=oe(At,!0);ne(At),qt(()=>{yn(At,"href",R(gt).href),Ge(on,R(gt).label)}),xt(dt,At)}),ne(ee);var he=te(ee,2),me=te(oe(he),2),fe=oe(me),Le=te(fe,2),it=te(Le,2),qe=te(it,2);let St;var ze=oe(qe);ne(qe),ne(me);var Pe=te(me,2);Wi(Pe,17,()=>i.cameras,dt=>dt.id,(dt,gt)=>{var At=xa();let on;var Yt=oe(At),Nn=oe(Yt,!0);ne(Yt);var Hn=te(Yt);ne(At),qt(()=>{on=Xt(At,1,"menu-item svelte-1uha8ag",null,on,{active:R(gt).id===R(u).id}),Ge(Nn,R(gt).icon),Ge(Hn,` ${R(gt).label??""}`)}),Ct("click",At,()=>Ce(u,R(gt),!0)),xt(dt,At)}),ne(he);var dn=te(he,2),ht=te(oe(dn),2);Wi(ht,17,()=>i.drivers,dt=>dt.id,(dt,gt)=>{var At=xa();let on;var Yt=oe(At),Nn=oe(Yt,!0);ne(Yt);var Hn=te(Yt);ne(At),qt(()=>{on=Xt(At,1,"menu-item svelte-1uha8ag",null,on,{active:R(gt).id===R(c).id}),Ge(Nn,R(gt).icon),Ge(Hn,` ${R(gt).label??""}`)}),Ct("click",At,()=>Ce(c,R(gt),!0)),xt(dt,At)}),ne(dn);var kt=te(dn,2),jt=te(oe(kt),2);{var Dn=dt=>{var gt=AM(),At=Wu(gt);let on;var Yt=oe(At);ne(At);var Nn=te(At,2);let Hn;var gi=oe(Nn);ne(Nn);var Fn=te(Nn,2);let ni;qt(()=>{on=Xt(At,1,"menu-item svelte-1uha8ag",null,on,{active:R(Ke)}),Ge(Yt,`Gear ${R(Ke)?"Down":"Up"}`),Hn=Xt(Nn,1,"menu-item svelte-1uha8ag",null,Hn,{active:R(Mt)>0}),Ge(gi,`Flaps ${R(Mt)>0?"Out":"Up"}`),ni=Xt(Fn,1,"menu-item svelte-1uha8ag",null,ni,{active:R(w)})}),Ct("click",At,()=>Ce(Ke,!R(Ke))),Ct("click",Nn,()=>Ce(Mt,R(Mt)>0?0:1,!0)),Ct("pointerdown",Fn,()=>Ce(w,!0)),Ct("pointerup",Fn,()=>Ce(w,!1)),Gr("pointerleave",Fn,()=>Ce(w,!1)),xt(dt,gt)};Kt(jt,dt=>{R(c).control==="flight"&&dt(Dn)})}var gn=te(jt,2);let It;var nn=te(gn,2);let bn;var Ut=te(nn,2);let rn;var sn=te(Ut,2),an=oe(sn);ne(sn);var Ni=te(sn,2);let mi;var Te=te(Ni,2);{var we=dt=>{var gt=RM(),At=oe(gt);Wi(At,17,()=>Object.entries(i.keys),Oo,(on,Yt)=>{var Nn=zn(()=>Td(R(Yt),2));let Hn=()=>R(Nn)[0],gi=()=>R(Nn)[1];var Fn=wM(),ni=oe(Fn),Tn=oe(ni,!0);ne(ni);var Gs=te(ni);ne(Fn),qt(Er=>{Ge(Tn,Hn()),Ge(Gs,`: ${Er??""}`)},[()=>gi().join(" / ")]),xt(on,Fn)}),qr(2),ne(gt),xt(dt,gt)};Kt(Te,dt=>{R(P)&&dt(we)})}var Je=te(Te,2);let zt;var vt=te(Je,2);{var fn=dt=>{var gt=CM();xt(dt,gt)};Kt(vt,dt=>{R($)&&dt(fn)})}ne(kt),ne(J),qt(()=>{St=Xt(qe,1,"menu-btn svelte-1uha8ag",null,St,{active:R(j)}),Ge(ze,`3D ${R(j)?"On":"Off"}`),It=Xt(gn,1,"menu-item svelte-1uha8ag",null,It,{active:R(z)}),bn=Xt(nn,1,"menu-item svelte-1uha8ag",null,bn,{active:R(x)}),rn=Xt(Ut,1,"menu-item svelte-1uha8ag",null,rn,{active:R(M)}),Ge(an,`Log Export${R(V)?` — ${R(V)}`:""}`),mi=Xt(Ni,1,"menu-item svelte-1uha8ag",null,mi,{active:R(P)}),zt=Xt(Je,1,"menu-item svelte-1uha8ag",null,zt,{active:R($)})}),Ct("click",fe,K),Ct("click",Le,Y),Ct("click",it,ae),Ct("click",qe,ce),Ct("click",gn,()=>Ce(z,!R(z))),Ct("click",nn,()=>{const dt=new URL(window.location.href);R(x)?dt.searchParams.delete("debug"):dt.searchParams.set("debug","1"),window.location.href=dt.toString()}),Ct("click",Ut,()=>Ce(M,!R(M))),Ct("click",sn,ke),Ct("click",Ni,()=>Ce(P,!R(P))),Ct("click",Je,()=>Ce($,!R($))),xt(D,J)};Kt(at,D=>{R(T)&&D(Ze)})}var yt=te(at,2),I=oe(yt),ve=oe(I);{var G=D=>{var J=PM();Wi(J,21,()=>i.cameras,ee=>ee.id,(ee,le)=>{var he=xa();let me;var fe=oe(he),Le=oe(fe,!0);ne(fe);var it=te(fe);ne(he),qt(()=>{me=Xt(he,1,"fab-popup-item svelte-1uha8ag",null,me,{active:R(le).id===R(u).id}),Ge(Le,R(le).icon),Ge(it,` ${R(le).label??""}`)}),Ct("click",he,()=>{Ce(u,R(le),!0),Ce(O,!1)}),xt(ee,he)}),ne(J),xt(D,J)};Kt(ve,D=>{R(O)&&D(G)})}var de=te(ve,2),Q=oe(de,!0);ne(de),ne(I);var ge=te(I,2),Ue=oe(ge);{var mt=D=>{var J=IM();Wi(J,21,()=>i.drivers,ee=>ee.id,(ee,le)=>{var he=xa();let me;var fe=oe(he),Le=oe(fe,!0);ne(fe);var it=te(fe);ne(he),qt(()=>{me=Xt(he,1,"fab-popup-item svelte-1uha8ag",null,me,{active:R(le).id===R(c).id}),Ge(Le,R(le).icon),Ge(it,` ${R(le).label??""}`)}),Ct("click",he,()=>{Ce(c,R(le),!0),Ce(k,!1)}),xt(ee,he)}),ne(J),xt(D,J)};Kt(Ue,D=>{R(k)&&D(mt)})}var Tt=te(Ue,2),nt=oe(Tt,!0);ne(Tt),ne(ge),ne(yt);var Bt=te(yt,2),En=oe(Bt);{var Sr=D=>{var J=DM();let ee;var le=oe(J);Vi(le,qe=>Ce(g,qe),()=>R(g));var he=te(le,2),me=oe(he),fe=oe(me);ne(me);var Le=te(me,2),it=oe(Le);ne(Le),ne(he),ne(J),qt(qe=>{ee=Xt(J,1,"perf svelte-1uha8ag",null,ee,{warn:R(f)>16,bad:R(f)>33}),yn(J,"aria-expanded",R(m)),Ge(fe,`${qe??""} fps`),Ge(it,`${R(y)??""} draws`)},[()=>Math.round(R(_))]),Ct("click",J,()=>Ce(m,!R(m))),xt(D,J)};Kt(En,D=>{R(z)&&D(Sr)})}var ds=te(En,2);{var Ii=D=>{var J=UM(),ee=oe(J),le=te(oe(ee),2);Vi(le,we=>Ce(b,we),()=>R(b));var he=te(le,2),me=oe(he,!0);ne(he),ne(ee);var fe=te(ee,2),Le=te(oe(fe),2);Vi(Le,we=>Ce(N,we),()=>R(N));var it=te(Le,2);let qe;var St=oe(it);ne(it),ne(fe);var ze=te(fe,2),Pe=te(oe(ze),2);Vi(Pe,we=>Ce(B,we),()=>R(B));var dn=te(Pe,2),ht=oe(dn,!0);ne(dn),ne(ze);var kt=te(ze,2),jt=te(oe(kt)),Dn=oe(jt,!0);ne(jt),ne(kt);var gn=te(kt,2),It=te(oe(gn)),nn=oe(It,!0);ne(It),ne(gn);var bn=te(gn,2),Ut=te(oe(bn)),rn=oe(Ut,!0);ne(Ut),ne(bn);var sn=te(bn,2),an=te(oe(sn)),Ni=oe(an,!0);ne(an),ne(sn);var mi=te(sn,2);{var Te=we=>{var Je=NM(),zt=te(oe(Je)),vt=oe(zt);ne(zt),ne(Je),qt(fn=>Ge(vt,`${fn??""} MB`),[()=>R(A).toFixed(1)]),xt(we,Je)};Kt(mi,we=>{R(A)!=null&&we(Te)})}ne(J),qt((we,Je,zt)=>{Ge(me,we),qe=Xt(it,1,"perf-num svelte-1uha8ag",null,qe,{warn:R(f)>16,bad:R(f)>33}),Ge(St,`${Je??""} ms`),Ge(ht,R(y)),Ge(Dn,R(y)),Ge(nn,zt),Ge(rn,R(E)),Ge(Ni,R(C))},[()=>Math.round(R(_)),()=>R(f).toFixed(1),()=>R(v).toLocaleString()]),xt(D,J)};Kt(ds,D=>{R(z)&&R(m)&&D(Ii)})}ne(Bt);var Di=te(Bt,2),pi=oe(Di),fs=te(pi),ks=oe(fs);ne(fs),qr(),ne(Di);var ps=te(Di,2),zs=oe(ps),Hs=te(zs),S=oe(Hs);ne(Hs),qr(),ne(ps);var F=te(ps,2);{var W=D=>{var J=FM(),ee=oe(J),le=te(ee,2);ne(J),Ct("pointerdown",ee,()=>ct.climbPointer=1),Ct("pointerup",ee,()=>ct.climbPointer=0),Gr("pointerleave",ee,()=>ct.climbPointer=0),Gr("pointercancel",ee,()=>ct.climbPointer=0),Ct("pointerdown",le,()=>ct.climbPointer=-1),Ct("pointerup",le,()=>ct.climbPointer=0),Gr("pointerleave",le,()=>ct.climbPointer=0),Gr("pointercancel",le,()=>ct.climbPointer=0),xt(D,J)};Kt(F,D=>{R(c).altitude.climbRate>0&&D(W)})}var q=te(F,2);zu(q,{side:"left",channel:"drive",get scale(){return s.scale}});var H=te(q,2);zu(H,{side:"right",channel:"look",get scale(){return s.scale}}),ne(pe),qt((D,J)=>{Re=Xt(be,1,"hamburger svelte-1uha8ag",null,Re,{active:R(T)}),yn(be,"aria-expanded",R(T)),Ge(Q,R(u).icon),Ge(nt,R(c).icon),Ge(pi,`${D??""} `),Ge(ks,`/ ${R(c).speed.max??""}`),Ge(zs,`${J??""} `),Ge(S,`/ ${R(c).altitude.max??""}`)},[()=>Math.round(R(h)),()=>Math.round(R(d))]),Ct("click",be,()=>Ce(T,!R(T))),Ct("click",de,()=>{Ce(O,!R(O)),Ce(k,!1)}),Ct("click",Tt,()=>{Ce(k,!R(k)),Ce(O,!1)}),xt(r,pe),rl()}Xu(["click","pointerdown","pointerup"]);export{WM as component};
