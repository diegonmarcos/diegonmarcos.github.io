const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["../chunks/hRSVIHhc.js","../chunks/CqkleIqs.js","../chunks/B1PBqzko.js","../assets/maplibre-gl.DNVN2dqC.css"])))=>i.map(i=>d[i]);
import{p as Dr,b as cr,i as Ut,_ as yo}from"../chunks/D2s7WlL9.js";import{a as mt,f as yt,c as Bd}from"../chunks/D1x6jXvO.js";import{a as kd,o as zd}from"../chunks/CjghJYyU.js";import{h as Kn,C as So,x as Gd,c as Eo,A as Hd,i as Vd,L as C,F as Wd,a5 as Xd,G as xc,H as bo,e as xa,ap as qd,ax as jd,ae as Mc,a as ps,b as Ml,aF as Yd,s as Kd,aG as Th,_ as $d,aH as Zd,aw as zl,aI as Jd,a1 as yc,aJ as Qd,aK as ef,aA as tf,aL as Ei,V as nf,r as Ah,p as wh,aM as To,a2 as Rh,aN as rf,aO as sf,au as af,m as of,d as lf,ar as cf,aP as Sc,aQ as Ec,aR as uf,aS as hf,aT as df,aU as ff,aV as pf,aW as mf,aX as gf,aY as _f,aZ as vf,aC as xf,g as Mf,J as yf,k as Gl,u as na,t as Gt,l as Hl,n as te,Q as me,o as ee,aD as Je,j as Ka,q as Q,af as xs,aE as Yn,O as Ao,a_ as Sf,a$ as Ef,b0 as bf}from"../chunks/Dl5WCXj8.js";import{d as Ch,a as bt,e as ms,s as Be}from"../chunks/DYH6oCQW.js";function yl(r,e){return e}function Tf(r,e,t){for(var n=[],i=e.length,s,a=e.length,o=0;o<i;o++){let h=e[o];wh(h,()=>{if(s){if(s.pending.delete(h),s.done.add(h),s.pending.size===0){var d=r.outrogroups;Sl(r,zl(s.done)),d.delete(s),d.size===0&&(r.outrogroups=null)}}else a-=1},!1)}if(a===0){var l=n.length===0&&t!==null;if(l){var c=t,u=c.parentNode;af(u),u.append(c),r.items.clear()}Sl(r,e,!l)}else s={pending:new Set(e),done:new Set},(r.outrogroups??(r.outrogroups=new Set)).add(s)}function Sl(r,e,t=!0){var n;if(r.pending.size>0){n=new Set;for(const a of r.pending.values())for(const o of a)n.add(r.items.get(o).e)}for(var i=0;i<e.length;i++){var s=e[i];if(n?.has(s)){s.f|=Ei;const a=document.createDocumentFragment();of(s,a)}else lf(e[i],t)}}var bc;function ur(r,e,t,n,i,s=null){var a=r,o=new Map,l=(e&Th)!==0;if(l){var c=r;a=Kn?So(Gd(c)):c.appendChild(Eo())}Kn&&Hd();var u=null,h=$d(()=>{var v=t();return Zd(v)?v:v==null?[]:zl(v)}),d,p=new Map,g=!0;function _(v){(y.effect.f&nf)===0&&(y.pending.delete(v),y.fallback=u,Af(y,d,a,e,n),u!==null&&(d.length===0?(u.f&Ei)===0?Ah(u):(u.f^=Ei,ia(u,null,a)):wh(u,()=>{u=null})))}function f(v){y.pending.delete(v)}var m=Vd(()=>{d=C(h);var v=d.length;let A=!1;if(Kn){var b=Wd(a)===Xd;b!==(v===0)&&(a=xc(),So(a),bo(!1),A=!0)}for(var w=new Set,S=ps,I=Kd(),D=0;D<v;D+=1){Kn&&xa.nodeType===qd&&xa.data===jd&&(a=xa,A=!0,bo(!1));var x=d[D],E=n(x,D),U=g?null:o.get(E);U?(U.v&&Mc(U.v,x),U.i&&Mc(U.i,D),I&&S.unskip_effect(U.e)):(U=wf(o,g?a:bc??(bc=Eo()),x,E,D,i,e,t),g||(U.e.f|=Ei),o.set(E,U)),w.add(E)}if(v===0&&s&&!u&&(g?u=Ml(()=>s(a)):(u=Ml(()=>s(bc??(bc=Eo()))),u.f|=Ei)),v>w.size&&Yd(),Kn&&v>0&&So(xc()),!g)if(p.set(S,w),I){for(const[Y,L]of o)w.has(Y)||S.skip_effect(L.e);S.oncommit(_),S.ondiscard(f)}else _(S);A&&bo(!0),C(h)}),y={effect:m,items:o,pending:p,outrogroups:null,fallback:u};g=!1,Kn&&(a=xa)}function js(r){for(;r!==null&&(r.f&rf)===0;)r=r.next;return r}function Af(r,e,t,n,i){var s=(n&sf)!==0,a=e.length,o=r.items,l=js(r.effect.first),c,u=null,h,d=[],p=[],g,_,f,m;if(s)for(m=0;m<a;m+=1)g=e[m],_=i(g,m),f=o.get(_).e,(f.f&Ei)===0&&(f.nodes?.a?.measure(),(h??(h=new Set)).add(f));for(m=0;m<a;m+=1){if(g=e[m],_=i(g,m),f=o.get(_).e,r.outrogroups!==null)for(const x of r.outrogroups)x.pending.delete(f),x.done.delete(f);if((f.f&To)!==0&&(Ah(f),s&&(f.nodes?.a?.unfix(),(h??(h=new Set)).delete(f))),(f.f&Ei)!==0)if(f.f^=Ei,f===l)ia(f,null,t);else{var y=u?u.next:l;f===r.effect.last&&(r.effect.last=f.prev),f.prev&&(f.prev.next=f.next),f.next&&(f.next.prev=f.prev),tr(r,u,f),tr(r,f,y),ia(f,y,t),u=f,d=[],p=[],l=js(u.next);continue}if(f!==l){if(c!==void 0&&c.has(f)){if(d.length<p.length){var v=p[0],A;u=v.prev;var b=d[0],w=d[d.length-1];for(A=0;A<d.length;A+=1)ia(d[A],v,t);for(A=0;A<p.length;A+=1)c.delete(p[A]);tr(r,b.prev,w.next),tr(r,u,b),tr(r,w,v),l=v,u=w,m-=1,d=[],p=[]}else c.delete(f),ia(f,l,t),tr(r,f.prev,f.next),tr(r,f,u===null?r.effect.first:u.next),tr(r,u,f),u=f;continue}for(d=[],p=[];l!==null&&l!==f;)(c??(c=new Set)).add(l),p.push(l),l=js(l.next);if(l===null)continue}(f.f&Ei)===0&&d.push(f),u=f,l=js(f.next)}if(r.outrogroups!==null){for(const x of r.outrogroups)x.pending.size===0&&(Sl(r,zl(x.done)),r.outrogroups?.delete(x));r.outrogroups.size===0&&(r.outrogroups=null)}if(l!==null||c!==void 0){var S=[];if(c!==void 0)for(f of c)(f.f&To)===0&&S.push(f);for(;l!==null;)(l.f&To)===0&&l!==r.fallback&&S.push(l),l=js(l.next);var I=S.length;if(I>0){var D=(n&Th)!==0&&a===0?t:null;if(s){for(m=0;m<I;m+=1)S[m].nodes?.a?.measure();for(m=0;m<I;m+=1)S[m].nodes?.a?.fix()}Tf(r,S,D)}}s&&Rh(()=>{if(h!==void 0)for(f of h)f.nodes?.a?.apply()})}function wf(r,e,t,n,i,s,a,o){var l=(a&Qd)!==0?(a&ef)===0?tf(t,!1,!1):yc(t):null,c=(a&Jd)!==0?yc(i):null;return{v:l,i:c,e:Ml(()=>(s(e,l??t,c??i,o),()=>{r.delete(n)}))}}function ia(r,e,t){if(r.nodes)for(var n=r.nodes.start,i=r.nodes.end,s=e&&(e.f&Ei)===0?e.nodes.start:t;n!==null;){var a=cf(n);if(s.before(n),n===i)return;n=a}}function tr(r,e,t){e===null?r.effect.first=t:e.next=t,t===null?r.effect.last=e:t.prev=e}const Tc=[...` 	
\r\f \v\uFEFF`];function Rf(r,e,t){var n=r==null?"":""+r;if(t){for(var i of Object.keys(t))if(t[i])n=n?n+" "+i:i;else if(n.length)for(var s=i.length,a=0;(a=n.indexOf(i,a))>=0;){var o=a+s;(a===0||Tc.includes(n[a-1]))&&(o===n.length||Tc.includes(n[o]))?n=(a===0?"":n.substring(0,a))+n.substring(o+1):a=o}}return n===""?null:n}function Cf(r,e){return r==null?null:String(r)}function qt(r,e,t,n,i,s){var a=r[Sc];if(Kn||a!==t||a===void 0){var o=Rf(t,n,s);(!Kn||o!==r.getAttribute("class"))&&(o==null?r.removeAttribute("class"):r.className=o),r[Sc]=t}else if(s&&i!==s)for(var l in s){var c=!!s[l];(i==null||c!==!!i[l])&&r.classList.toggle(l,c)}return s}function Xi(r,e,t,n){var i=r[Ec];if(Kn||i!==e){var s=Cf(e);(!Kn||s!==r.getAttribute("style"))&&(s==null?r.removeAttribute("style"):r.style.cssText=s),r[Ec]=e}return n}const Lf=Symbol("is custom element"),Pf=Symbol("is html"),If=mf?"link":"LINK";function Df(r){if(Kn){var e=!1,t=()=>{if(!e){if(e=!0,r.hasAttribute("value")){var n=r.value;_n(r,"value",null),r.value=n}if(r.hasAttribute("checked")){var i=r.checked;_n(r,"checked",null),r.checked=i}}};r[gf]=t,Rh(t),_f()}}function _n(r,e,t,n){var i=Nf(r);Kn&&(i[e]=r.getAttribute(e),e==="src"||e==="srcset"||e==="href"&&r.nodeName===If)||i[e]!==(i[e]=t)&&(e==="loading"&&(r[uf]=t),t==null?r.removeAttribute(e):typeof t!="string"&&Uf(r).includes(e)?r[e]=t:r.setAttribute(e,t))}function Nf(r){var e;return r[e=hf]??(r[e]={[Lf]:r.nodeName.includes("-"),[Pf]:r.namespaceURI===df})}var Ac=new Map;function Uf(r){var e=r.getAttribute("is")||r.nodeName,t=Ac.get(e);if(t)return t;Ac.set(e,t=[]);for(var n,i=r,s=Element.prototype;s!==i;){n=pf(i);for(var a in n)n[a].set&&a!=="innerHTML"&&a!=="textContent"&&a!=="innerText"&&t.push(a);i=ff(i)}return t}function Ff(r,e,t=e){var n=new WeakSet;vf(r,"input",async i=>{var s=i?r.defaultValue:r.value;if(s=wo(r)?Ro(s):s,t(s),ps!==null&&n.add(ps),await xf(),s!==(s=e())){var a=r.selectionStart,o=r.selectionEnd,l=r.value.length;if(r.value=s??"",o!==null){var c=r.value.length;a===o&&o===l&&c>l?(r.selectionStart=c,r.selectionEnd=c):(r.selectionStart=a,r.selectionEnd=Math.min(o,c))}}}),(Kn&&r.defaultValue!==r.value||Mf(e)==null&&r.value)&&(t(wo(r)?Ro(r.value):r.value),ps!==null&&n.add(ps)),yf(()=>{var i=e();if(r===document.activeElement){var s=ps;if(n.has(s))return}wo(r)&&i===Ro(r.value)||r.type==="date"&&!i&&!r.value||i!==r.value&&(r.value=i??"")})}function wo(r){var e=r.type;return e==="number"||e==="range"}function Ro(r){return r===""?null:+r}const Vl="162",Of=0,wc=1,Bf=2,Lh=1,kf=2,qi=3,$i=0,Un=1,yi=2,gr=0,Ms=1,Rc=2,Cc=3,Lc=4,zf=5,Fr=100,Gf=101,Hf=102,Pc=103,Ic=104,Vf=200,Wf=201,Xf=202,qf=203,El=204,bl=205,jf=206,Yf=207,Kf=208,$f=209,Zf=210,Jf=211,Qf=212,ep=213,tp=214,np=0,ip=1,rp=2,Ja=3,sp=4,ap=5,op=6,lp=7,Ph=0,cp=1,up=2,_r=0,hp=1,dp=2,fp=3,pp=4,mp=5,gp=6,_p=7,Dc="attached",vp="detached",Ih=300,bs=301,Ts=302,Tl=303,Al=304,so=306,As=1e3,si=1001,Qa=1002,vn=1003,wl=1004,gs=1005,wn=1006,$a=1007,ji=1008,vr=1009,xp=1010,Mp=1011,Wl=1012,Dh=1013,pr=1014,fi=1015,ua=1016,Nh=1017,Uh=1018,kr=1020,yp=1021,ai=1023,Sp=1024,Ep=1025,zr=1026,ws=1027,Fh=1028,Oh=1029,bp=1030,Bh=1031,kh=1033,Co=33776,Lo=33777,Po=33778,Io=33779,Nc=35840,Uc=35841,Fc=35842,Oc=35843,zh=36196,Bc=37492,kc=37496,zc=37808,Gc=37809,Hc=37810,Vc=37811,Wc=37812,Xc=37813,qc=37814,jc=37815,Yc=37816,Kc=37817,$c=37818,Zc=37819,Jc=37820,Qc=37821,Do=36492,eu=36494,tu=36495,Tp=36283,nu=36284,iu=36285,ru=36286,ha=2300,Rs=2301,No=2302,su=2400,au=2401,ou=2402,Ap=2500,wp=0,Gh=1,Rl=2,Rp=3200,Cp=3201,Hh=0,Lp=1,dr="",Dn="srgb",Sn="srgb-linear",Xl="display-p3",ao="display-p3-linear",eo="linear",jt="srgb",to="rec709",no="p3",Zr=7680,lu=519,Pp=512,Ip=513,Dp=514,Vh=515,Np=516,Up=517,Fp=518,Op=519,Cl=35044,cu="300 es",Ll=1035,Yi=2e3,io=2001;class Us{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const n=this._listeners;return n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const i=this._listeners[e];if(i!==void 0){const s=i.indexOf(t);s!==-1&&i.splice(s,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const n=this._listeners[e.type];if(n!==void 0){e.target=this;const i=n.slice(0);for(let s=0,a=i.length;s<a;s++)i[s].call(this,e);e.target=null}}}const bn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let uu=1234567;const sa=Math.PI/180,Cs=180/Math.PI;function gi(){const r=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(bn[r&255]+bn[r>>8&255]+bn[r>>16&255]+bn[r>>24&255]+"-"+bn[e&255]+bn[e>>8&255]+"-"+bn[e>>16&15|64]+bn[e>>24&255]+"-"+bn[t&63|128]+bn[t>>8&255]+"-"+bn[t>>16&255]+bn[t>>24&255]+bn[n&255]+bn[n>>8&255]+bn[n>>16&255]+bn[n>>24&255]).toLowerCase()}function un(r,e,t){return Math.max(e,Math.min(t,r))}function ql(r,e){return(r%e+e)%e}function Bp(r,e,t,n,i){return n+(r-e)*(i-n)/(t-e)}function kp(r,e,t){return r!==e?(t-r)/(e-r):0}function aa(r,e,t){return(1-t)*r+t*e}function zp(r,e,t,n){return aa(r,e,1-Math.exp(-t*n))}function Gp(r,e=1){return e-Math.abs(ql(r,e*2)-e)}function Hp(r,e,t){return r<=e?0:r>=t?1:(r=(r-e)/(t-e),r*r*(3-2*r))}function Vp(r,e,t){return r<=e?0:r>=t?1:(r=(r-e)/(t-e),r*r*r*(r*(r*6-15)+10))}function Wp(r,e){return r+Math.floor(Math.random()*(e-r+1))}function Xp(r,e){return r+Math.random()*(e-r)}function qp(r){return r*(.5-Math.random())}function jp(r){r!==void 0&&(uu=r);let e=uu+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function Yp(r){return r*sa}function Kp(r){return r*Cs}function Pl(r){return(r&r-1)===0&&r!==0}function $p(r){return Math.pow(2,Math.ceil(Math.log(r)/Math.LN2))}function ro(r){return Math.pow(2,Math.floor(Math.log(r)/Math.LN2))}function Zp(r,e,t,n,i){const s=Math.cos,a=Math.sin,o=s(t/2),l=a(t/2),c=s((e+n)/2),u=a((e+n)/2),h=s((e-n)/2),d=a((e-n)/2),p=s((n-e)/2),g=a((n-e)/2);switch(i){case"XYX":r.set(o*u,l*h,l*d,o*c);break;case"YZY":r.set(l*d,o*u,l*h,o*c);break;case"ZXZ":r.set(l*h,l*d,o*u,o*c);break;case"XZX":r.set(o*u,l*g,l*p,o*c);break;case"YXY":r.set(l*p,o*u,l*g,o*c);break;case"ZYZ":r.set(l*g,l*p,o*u,o*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+i)}}function pi(r,e){switch(e.constructor){case Float32Array:return r;case Uint32Array:return r/4294967295;case Uint16Array:return r/65535;case Uint8Array:return r/255;case Int32Array:return Math.max(r/2147483647,-1);case Int16Array:return Math.max(r/32767,-1);case Int8Array:return Math.max(r/127,-1);default:throw new Error("Invalid component type.")}}function Pt(r,e){switch(e.constructor){case Float32Array:return r;case Uint32Array:return Math.round(r*4294967295);case Uint16Array:return Math.round(r*65535);case Uint8Array:return Math.round(r*255);case Int32Array:return Math.round(r*2147483647);case Int16Array:return Math.round(r*32767);case Int8Array:return Math.round(r*127);default:throw new Error("Invalid component type.")}}const Wh={DEG2RAD:sa,RAD2DEG:Cs,generateUUID:gi,clamp:un,euclideanModulo:ql,mapLinear:Bp,inverseLerp:kp,lerp:aa,damp:zp,pingpong:Gp,smoothstep:Hp,smootherstep:Vp,randInt:Wp,randFloat:Xp,randFloatSpread:qp,seededRandom:jp,degToRad:Yp,radToDeg:Kp,isPowerOfTwo:Pl,ceilPowerOfTwo:$p,floorPowerOfTwo:ro,setQuaternionFromProperEuler:Zp,normalize:Pt,denormalize:pi};class Se{constructor(e=0,t=0){Se.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,i=e.elements;return this.x=i[0]*t+i[3]*n+i[6],this.y=i[1]*t+i[4]*n+i[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(un(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),i=Math.sin(t),s=this.x-e.x,a=this.y-e.y;return this.x=s*n-a*i+e.x,this.y=s*i+a*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class pt{constructor(e,t,n,i,s,a,o,l,c){pt.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,i,s,a,o,l,c)}set(e,t,n,i,s,a,o,l,c){const u=this.elements;return u[0]=e,u[1]=i,u[2]=o,u[3]=t,u[4]=s,u[5]=l,u[6]=n,u[7]=a,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,s=this.elements,a=n[0],o=n[3],l=n[6],c=n[1],u=n[4],h=n[7],d=n[2],p=n[5],g=n[8],_=i[0],f=i[3],m=i[6],y=i[1],v=i[4],A=i[7],b=i[2],w=i[5],S=i[8];return s[0]=a*_+o*y+l*b,s[3]=a*f+o*v+l*w,s[6]=a*m+o*A+l*S,s[1]=c*_+u*y+h*b,s[4]=c*f+u*v+h*w,s[7]=c*m+u*A+h*S,s[2]=d*_+p*y+g*b,s[5]=d*f+p*v+g*w,s[8]=d*m+p*A+g*S,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],i=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],u=e[8];return t*a*u-t*o*c-n*s*u+n*o*l+i*s*c-i*a*l}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],u=e[8],h=u*a-o*c,d=o*l-u*s,p=c*s-a*l,g=t*h+n*d+i*p;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const _=1/g;return e[0]=h*_,e[1]=(i*c-u*n)*_,e[2]=(o*n-i*a)*_,e[3]=d*_,e[4]=(u*t-i*l)*_,e[5]=(i*s-o*t)*_,e[6]=p*_,e[7]=(n*l-c*t)*_,e[8]=(a*t-n*s)*_,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,i,s,a,o){const l=Math.cos(s),c=Math.sin(s);return this.set(n*l,n*c,-n*(l*a+c*o)+a+e,-i*c,i*l,-i*(-c*a+l*o)+o+t,0,0,1),this}scale(e,t){return this.premultiply(Uo.makeScale(e,t)),this}rotate(e){return this.premultiply(Uo.makeRotation(-e)),this}translate(e,t){return this.premultiply(Uo.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<9;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Uo=new pt;function Xh(r){for(let e=r.length-1;e>=0;--e)if(r[e]>=65535)return!0;return!1}function da(r){return document.createElementNS("http://www.w3.org/1999/xhtml",r)}function Jp(){const r=da("canvas");return r.style.display="block",r}const hu={};function qh(r){r in hu||(hu[r]=!0,console.warn(r))}const du=new pt().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),fu=new pt().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),Ma={[Sn]:{transfer:eo,primaries:to,toReference:r=>r,fromReference:r=>r},[Dn]:{transfer:jt,primaries:to,toReference:r=>r.convertSRGBToLinear(),fromReference:r=>r.convertLinearToSRGB()},[ao]:{transfer:eo,primaries:no,toReference:r=>r.applyMatrix3(fu),fromReference:r=>r.applyMatrix3(du)},[Xl]:{transfer:jt,primaries:no,toReference:r=>r.convertSRGBToLinear().applyMatrix3(fu),fromReference:r=>r.applyMatrix3(du).convertLinearToSRGB()}},Qp=new Set([Sn,ao]),Lt={enabled:!0,_workingColorSpace:Sn,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(r){if(!Qp.has(r))throw new Error(`Unsupported working color space, "${r}".`);this._workingColorSpace=r},convert:function(r,e,t){if(this.enabled===!1||e===t||!e||!t)return r;const n=Ma[e].toReference,i=Ma[t].fromReference;return i(n(r))},fromWorkingColorSpace:function(r,e){return this.convert(r,this._workingColorSpace,e)},toWorkingColorSpace:function(r,e){return this.convert(r,e,this._workingColorSpace)},getPrimaries:function(r){return Ma[r].primaries},getTransfer:function(r){return r===dr?eo:Ma[r].transfer}};function ys(r){return r<.04045?r*.0773993808:Math.pow(r*.9478672986+.0521327014,2.4)}function Fo(r){return r<.0031308?r*12.92:1.055*Math.pow(r,.41666)-.055}let Jr;class jh{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{Jr===void 0&&(Jr=da("canvas")),Jr.width=e.width,Jr.height=e.height;const n=Jr.getContext("2d");e instanceof ImageData?n.putImageData(e,0,0):n.drawImage(e,0,0,e.width,e.height),t=Jr}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=da("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const i=n.getImageData(0,0,e.width,e.height),s=i.data;for(let a=0;a<s.length;a++)s[a]=ys(s[a]/255)*255;return n.putImageData(i,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(ys(t[n]/255)*255):t[n]=ys(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let em=0;class Yh{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:em++}),this.uuid=gi(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let s;if(Array.isArray(i)){s=[];for(let a=0,o=i.length;a<o;a++)i[a].isDataTexture?s.push(Oo(i[a].image)):s.push(Oo(i[a]))}else s=Oo(i);n.url=s}return t||(e.images[this.uuid]=n),n}}function Oo(r){return typeof HTMLImageElement<"u"&&r instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&r instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&r instanceof ImageBitmap?jh.getDataURL(r):r.data?{data:Array.from(r.data),width:r.width,height:r.height,type:r.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let tm=0;class xn extends Us{constructor(e=xn.DEFAULT_IMAGE,t=xn.DEFAULT_MAPPING,n=si,i=si,s=wn,a=ji,o=ai,l=vr,c=xn.DEFAULT_ANISOTROPY,u=dr){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:tm++}),this.uuid=gi(),this.name="",this.source=new Yh(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=i,this.magFilter=s,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new Se(0,0),this.repeat=new Se(1,1),this.center=new Se(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new pt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Ih)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case As:e.x=e.x-Math.floor(e.x);break;case si:e.x=e.x<0?0:1;break;case Qa:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case As:e.y=e.y-Math.floor(e.y);break;case si:e.y=e.y<0?0:1;break;case Qa:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}}xn.DEFAULT_IMAGE=null;xn.DEFAULT_MAPPING=Ih;xn.DEFAULT_ANISOTROPY=1;class Ht{constructor(e=0,t=0,n=0,i=1){Ht.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=i}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,i){return this.x=e,this.y=t,this.z=n,this.w=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,s=this.w,a=e.elements;return this.x=a[0]*t+a[4]*n+a[8]*i+a[12]*s,this.y=a[1]*t+a[5]*n+a[9]*i+a[13]*s,this.z=a[2]*t+a[6]*n+a[10]*i+a[14]*s,this.w=a[3]*t+a[7]*n+a[11]*i+a[15]*s,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,i,s;const l=e.elements,c=l[0],u=l[4],h=l[8],d=l[1],p=l[5],g=l[9],_=l[2],f=l[6],m=l[10];if(Math.abs(u-d)<.01&&Math.abs(h-_)<.01&&Math.abs(g-f)<.01){if(Math.abs(u+d)<.1&&Math.abs(h+_)<.1&&Math.abs(g+f)<.1&&Math.abs(c+p+m-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const v=(c+1)/2,A=(p+1)/2,b=(m+1)/2,w=(u+d)/4,S=(h+_)/4,I=(g+f)/4;return v>A&&v>b?v<.01?(n=0,i=.707106781,s=.707106781):(n=Math.sqrt(v),i=w/n,s=S/n):A>b?A<.01?(n=.707106781,i=0,s=.707106781):(i=Math.sqrt(A),n=w/i,s=I/i):b<.01?(n=.707106781,i=.707106781,s=0):(s=Math.sqrt(b),n=S/s,i=I/s),this.set(n,i,s,t),this}let y=Math.sqrt((f-g)*(f-g)+(h-_)*(h-_)+(d-u)*(d-u));return Math.abs(y)<.001&&(y=1),this.x=(f-g)/y,this.y=(h-_)/y,this.z=(d-u)/y,this.w=Math.acos((c+p+m-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class nm extends Us{constructor(e=1,t=1,n={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new Ht(0,0,e,t),this.scissorTest=!1,this.viewport=new Ht(0,0,e,t);const i={width:e,height:t,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:wn,depthBuffer:!0,stencilBuffer:!1,depthTexture:null,samples:0,count:1},n);const s=new xn(i,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);s.flipY=!1,s.generateMipmaps=n.generateMipmaps,s.internalFormat=n.internalFormat,this.textures=[];const a=n.count;for(let o=0;o<a;o++)this.textures[o]=s.clone(),this.textures[o].isRenderTargetTexture=!0;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let i=0,s=this.textures.length;i<s;i++)this.textures[i].image.width=e,this.textures[i].image.height=t,this.textures[i].image.depth=n;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let n=0,i=e.textures.length;n<i;n++)this.textures[n]=e.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new Yh(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Gr extends nm{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}}class Kh extends xn{constructor(e=null,t=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=vn,this.minFilter=vn,this.wrapR=si,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class im extends xn{constructor(e=null,t=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=vn,this.minFilter=vn,this.wrapR=si,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class xr{constructor(e=0,t=0,n=0,i=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=i}static slerpFlat(e,t,n,i,s,a,o){let l=n[i+0],c=n[i+1],u=n[i+2],h=n[i+3];const d=s[a+0],p=s[a+1],g=s[a+2],_=s[a+3];if(o===0){e[t+0]=l,e[t+1]=c,e[t+2]=u,e[t+3]=h;return}if(o===1){e[t+0]=d,e[t+1]=p,e[t+2]=g,e[t+3]=_;return}if(h!==_||l!==d||c!==p||u!==g){let f=1-o;const m=l*d+c*p+u*g+h*_,y=m>=0?1:-1,v=1-m*m;if(v>Number.EPSILON){const b=Math.sqrt(v),w=Math.atan2(b,m*y);f=Math.sin(f*w)/b,o=Math.sin(o*w)/b}const A=o*y;if(l=l*f+d*A,c=c*f+p*A,u=u*f+g*A,h=h*f+_*A,f===1-o){const b=1/Math.sqrt(l*l+c*c+u*u+h*h);l*=b,c*=b,u*=b,h*=b}}e[t]=l,e[t+1]=c,e[t+2]=u,e[t+3]=h}static multiplyQuaternionsFlat(e,t,n,i,s,a){const o=n[i],l=n[i+1],c=n[i+2],u=n[i+3],h=s[a],d=s[a+1],p=s[a+2],g=s[a+3];return e[t]=o*g+u*h+l*p-c*d,e[t+1]=l*g+u*d+c*h-o*p,e[t+2]=c*g+u*p+o*d-l*h,e[t+3]=u*g-o*h-l*d-c*p,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,i){return this._x=e,this._y=t,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const n=e._x,i=e._y,s=e._z,a=e._order,o=Math.cos,l=Math.sin,c=o(n/2),u=o(i/2),h=o(s/2),d=l(n/2),p=l(i/2),g=l(s/2);switch(a){case"XYZ":this._x=d*u*h+c*p*g,this._y=c*p*h-d*u*g,this._z=c*u*g+d*p*h,this._w=c*u*h-d*p*g;break;case"YXZ":this._x=d*u*h+c*p*g,this._y=c*p*h-d*u*g,this._z=c*u*g-d*p*h,this._w=c*u*h+d*p*g;break;case"ZXY":this._x=d*u*h-c*p*g,this._y=c*p*h+d*u*g,this._z=c*u*g+d*p*h,this._w=c*u*h-d*p*g;break;case"ZYX":this._x=d*u*h-c*p*g,this._y=c*p*h+d*u*g,this._z=c*u*g-d*p*h,this._w=c*u*h+d*p*g;break;case"YZX":this._x=d*u*h+c*p*g,this._y=c*p*h+d*u*g,this._z=c*u*g-d*p*h,this._w=c*u*h-d*p*g;break;case"XZY":this._x=d*u*h-c*p*g,this._y=c*p*h-d*u*g,this._z=c*u*g+d*p*h,this._w=c*u*h+d*p*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,i=Math.sin(n);return this._x=e.x*i,this._y=e.y*i,this._z=e.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],i=t[4],s=t[8],a=t[1],o=t[5],l=t[9],c=t[2],u=t[6],h=t[10],d=n+o+h;if(d>0){const p=.5/Math.sqrt(d+1);this._w=.25/p,this._x=(u-l)*p,this._y=(s-c)*p,this._z=(a-i)*p}else if(n>o&&n>h){const p=2*Math.sqrt(1+n-o-h);this._w=(u-l)/p,this._x=.25*p,this._y=(i+a)/p,this._z=(s+c)/p}else if(o>h){const p=2*Math.sqrt(1+o-n-h);this._w=(s-c)/p,this._x=(i+a)/p,this._y=.25*p,this._z=(l+u)/p}else{const p=2*Math.sqrt(1+h-n-o);this._w=(a-i)/p,this._x=(s+c)/p,this._y=(l+u)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<Number.EPSILON?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(un(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const i=Math.min(1,t/n);return this.slerp(e,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,i=e._y,s=e._z,a=e._w,o=t._x,l=t._y,c=t._z,u=t._w;return this._x=n*u+a*o+i*c-s*l,this._y=i*u+a*l+s*o-n*c,this._z=s*u+a*c+n*l-i*o,this._w=a*u-n*o-i*l-s*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const n=this._x,i=this._y,s=this._z,a=this._w;let o=a*e._w+n*e._x+i*e._y+s*e._z;if(o<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,o=-o):this.copy(e),o>=1)return this._w=a,this._x=n,this._y=i,this._z=s,this;const l=1-o*o;if(l<=Number.EPSILON){const p=1-t;return this._w=p*a+t*this._w,this._x=p*n+t*this._x,this._y=p*i+t*this._y,this._z=p*s+t*this._z,this.normalize(),this}const c=Math.sqrt(l),u=Math.atan2(c,o),h=Math.sin((1-t)*u)/c,d=Math.sin(t*u)/c;return this._w=a*h+this._w*d,this._x=n*h+this._x*d,this._y=i*h+this._y*d,this._z=s*h+this._z*d,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),i=Math.sqrt(1-n),s=Math.sqrt(n);return this.set(i*Math.sin(e),i*Math.cos(e),s*Math.sin(t),s*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class P{constructor(e=0,t=0,n=0){P.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(pu.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(pu.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,i=this.z,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6]*i,this.y=s[1]*t+s[4]*n+s[7]*i,this.z=s[2]*t+s[5]*n+s[8]*i,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,s=e.elements,a=1/(s[3]*t+s[7]*n+s[11]*i+s[15]);return this.x=(s[0]*t+s[4]*n+s[8]*i+s[12])*a,this.y=(s[1]*t+s[5]*n+s[9]*i+s[13])*a,this.z=(s[2]*t+s[6]*n+s[10]*i+s[14])*a,this}applyQuaternion(e){const t=this.x,n=this.y,i=this.z,s=e.x,a=e.y,o=e.z,l=e.w,c=2*(a*i-o*n),u=2*(o*t-s*i),h=2*(s*n-a*t);return this.x=t+l*c+a*h-o*u,this.y=n+l*u+o*c-s*h,this.z=i+l*h+s*u-a*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,i=this.z,s=e.elements;return this.x=s[0]*t+s[4]*n+s[8]*i,this.y=s[1]*t+s[5]*n+s[9]*i,this.z=s[2]*t+s[6]*n+s[10]*i,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,i=e.y,s=e.z,a=t.x,o=t.y,l=t.z;return this.x=i*l-s*o,this.y=s*a-n*l,this.z=n*o-i*a,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return Bo.copy(this).projectOnVector(e),this.sub(Bo)}reflect(e){return this.sub(Bo.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(un(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,i=this.z-e.z;return t*t+n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const i=Math.sin(t)*e;return this.x=i*Math.sin(n),this.y=Math.cos(t)*e,this.z=i*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),i=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=i,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Bo=new P,pu=new xr;class Ai{constructor(e=new P(1/0,1/0,1/0),t=new P(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(li.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(li.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=li.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const n=e.geometry;if(n!==void 0){const s=n.getAttribute("position");if(t===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let a=0,o=s.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,li):li.fromBufferAttribute(s,a),li.applyMatrix4(e.matrixWorld),this.expandByPoint(li);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),ya.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),ya.copy(n.boundingBox)),ya.applyMatrix4(e.matrixWorld),this.union(ya)}const i=e.children;for(let s=0,a=i.length;s<a;s++)this.expandByObject(i[s],t);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,li),li.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Ys),Sa.subVectors(this.max,Ys),Qr.subVectors(e.a,Ys),es.subVectors(e.b,Ys),ts.subVectors(e.c,Ys),nr.subVectors(es,Qr),ir.subVectors(ts,es),Ar.subVectors(Qr,ts);let t=[0,-nr.z,nr.y,0,-ir.z,ir.y,0,-Ar.z,Ar.y,nr.z,0,-nr.x,ir.z,0,-ir.x,Ar.z,0,-Ar.x,-nr.y,nr.x,0,-ir.y,ir.x,0,-Ar.y,Ar.x,0];return!ko(t,Qr,es,ts,Sa)||(t=[1,0,0,0,1,0,0,0,1],!ko(t,Qr,es,ts,Sa))?!1:(Ea.crossVectors(nr,ir),t=[Ea.x,Ea.y,Ea.z],ko(t,Qr,es,ts,Sa))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,li).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(li).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(ki[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),ki[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),ki[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),ki[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),ki[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),ki[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),ki[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),ki[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(ki),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const ki=[new P,new P,new P,new P,new P,new P,new P,new P],li=new P,ya=new Ai,Qr=new P,es=new P,ts=new P,nr=new P,ir=new P,Ar=new P,Ys=new P,Sa=new P,Ea=new P,wr=new P;function ko(r,e,t,n,i){for(let s=0,a=r.length-3;s<=a;s+=3){wr.fromArray(r,s);const o=i.x*Math.abs(wr.x)+i.y*Math.abs(wr.y)+i.z*Math.abs(wr.z),l=e.dot(wr),c=t.dot(wr),u=n.dot(wr);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>o)return!1}return!0}const rm=new Ai,Ks=new P,zo=new P;class wi{constructor(e=new P,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):rm.setFromPoints(e).getCenter(n);let i=0;for(let s=0,a=e.length;s<a;s++)i=Math.max(i,n.distanceToSquared(e[s]));return this.radius=Math.sqrt(i),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Ks.subVectors(e,this.center);const t=Ks.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),i=(n-this.radius)*.5;this.center.addScaledVector(Ks,i/n),this.radius+=i}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(zo.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Ks.copy(e.center).add(zo)),this.expandByPoint(Ks.copy(e.center).sub(zo))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const zi=new P,Go=new P,ba=new P,rr=new P,Ho=new P,Ta=new P,Vo=new P;class oo{constructor(e=new P,t=new P(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,zi)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=zi.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(zi.copy(this.origin).addScaledVector(this.direction,t),zi.distanceToSquared(e))}distanceSqToSegment(e,t,n,i){Go.copy(e).add(t).multiplyScalar(.5),ba.copy(t).sub(e).normalize(),rr.copy(this.origin).sub(Go);const s=e.distanceTo(t)*.5,a=-this.direction.dot(ba),o=rr.dot(this.direction),l=-rr.dot(ba),c=rr.lengthSq(),u=Math.abs(1-a*a);let h,d,p,g;if(u>0)if(h=a*l-o,d=a*o-l,g=s*u,h>=0)if(d>=-g)if(d<=g){const _=1/u;h*=_,d*=_,p=h*(h+a*d+2*o)+d*(a*h+d+2*l)+c}else d=s,h=Math.max(0,-(a*d+o)),p=-h*h+d*(d+2*l)+c;else d=-s,h=Math.max(0,-(a*d+o)),p=-h*h+d*(d+2*l)+c;else d<=-g?(h=Math.max(0,-(-a*s+o)),d=h>0?-s:Math.min(Math.max(-s,-l),s),p=-h*h+d*(d+2*l)+c):d<=g?(h=0,d=Math.min(Math.max(-s,-l),s),p=d*(d+2*l)+c):(h=Math.max(0,-(a*s+o)),d=h>0?s:Math.min(Math.max(-s,-l),s),p=-h*h+d*(d+2*l)+c);else d=a>0?-s:s,h=Math.max(0,-(a*d+o)),p=-h*h+d*(d+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,h),i&&i.copy(Go).addScaledVector(ba,d),p}intersectSphere(e,t){zi.subVectors(e.center,this.origin);const n=zi.dot(this.direction),i=zi.dot(zi)-n*n,s=e.radius*e.radius;if(i>s)return null;const a=Math.sqrt(s-i),o=n-a,l=n+a;return l<0?null:o<0?this.at(l,t):this.at(o,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,i,s,a,o,l;const c=1/this.direction.x,u=1/this.direction.y,h=1/this.direction.z,d=this.origin;return c>=0?(n=(e.min.x-d.x)*c,i=(e.max.x-d.x)*c):(n=(e.max.x-d.x)*c,i=(e.min.x-d.x)*c),u>=0?(s=(e.min.y-d.y)*u,a=(e.max.y-d.y)*u):(s=(e.max.y-d.y)*u,a=(e.min.y-d.y)*u),n>a||s>i||((s>n||isNaN(n))&&(n=s),(a<i||isNaN(i))&&(i=a),h>=0?(o=(e.min.z-d.z)*h,l=(e.max.z-d.z)*h):(o=(e.max.z-d.z)*h,l=(e.min.z-d.z)*h),n>l||o>i)||((o>n||n!==n)&&(n=o),(l<i||i!==i)&&(i=l),i<0)?null:this.at(n>=0?n:i,t)}intersectsBox(e){return this.intersectBox(e,zi)!==null}intersectTriangle(e,t,n,i,s){Ho.subVectors(t,e),Ta.subVectors(n,e),Vo.crossVectors(Ho,Ta);let a=this.direction.dot(Vo),o;if(a>0){if(i)return null;o=1}else if(a<0)o=-1,a=-a;else return null;rr.subVectors(this.origin,e);const l=o*this.direction.dot(Ta.crossVectors(rr,Ta));if(l<0)return null;const c=o*this.direction.dot(Ho.cross(rr));if(c<0||l+c>a)return null;const u=-o*rr.dot(Vo);return u<0?null:this.at(u/a,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class je{constructor(e,t,n,i,s,a,o,l,c,u,h,d,p,g,_,f){je.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,i,s,a,o,l,c,u,h,d,p,g,_,f)}set(e,t,n,i,s,a,o,l,c,u,h,d,p,g,_,f){const m=this.elements;return m[0]=e,m[4]=t,m[8]=n,m[12]=i,m[1]=s,m[5]=a,m[9]=o,m[13]=l,m[2]=c,m[6]=u,m[10]=h,m[14]=d,m[3]=p,m[7]=g,m[11]=_,m[15]=f,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new je().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,n=e.elements,i=1/ns.setFromMatrixColumn(e,0).length(),s=1/ns.setFromMatrixColumn(e,1).length(),a=1/ns.setFromMatrixColumn(e,2).length();return t[0]=n[0]*i,t[1]=n[1]*i,t[2]=n[2]*i,t[3]=0,t[4]=n[4]*s,t[5]=n[5]*s,t[6]=n[6]*s,t[7]=0,t[8]=n[8]*a,t[9]=n[9]*a,t[10]=n[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,i=e.y,s=e.z,a=Math.cos(n),o=Math.sin(n),l=Math.cos(i),c=Math.sin(i),u=Math.cos(s),h=Math.sin(s);if(e.order==="XYZ"){const d=a*u,p=a*h,g=o*u,_=o*h;t[0]=l*u,t[4]=-l*h,t[8]=c,t[1]=p+g*c,t[5]=d-_*c,t[9]=-o*l,t[2]=_-d*c,t[6]=g+p*c,t[10]=a*l}else if(e.order==="YXZ"){const d=l*u,p=l*h,g=c*u,_=c*h;t[0]=d+_*o,t[4]=g*o-p,t[8]=a*c,t[1]=a*h,t[5]=a*u,t[9]=-o,t[2]=p*o-g,t[6]=_+d*o,t[10]=a*l}else if(e.order==="ZXY"){const d=l*u,p=l*h,g=c*u,_=c*h;t[0]=d-_*o,t[4]=-a*h,t[8]=g+p*o,t[1]=p+g*o,t[5]=a*u,t[9]=_-d*o,t[2]=-a*c,t[6]=o,t[10]=a*l}else if(e.order==="ZYX"){const d=a*u,p=a*h,g=o*u,_=o*h;t[0]=l*u,t[4]=g*c-p,t[8]=d*c+_,t[1]=l*h,t[5]=_*c+d,t[9]=p*c-g,t[2]=-c,t[6]=o*l,t[10]=a*l}else if(e.order==="YZX"){const d=a*l,p=a*c,g=o*l,_=o*c;t[0]=l*u,t[4]=_-d*h,t[8]=g*h+p,t[1]=h,t[5]=a*u,t[9]=-o*u,t[2]=-c*u,t[6]=p*h+g,t[10]=d-_*h}else if(e.order==="XZY"){const d=a*l,p=a*c,g=o*l,_=o*c;t[0]=l*u,t[4]=-h,t[8]=c*u,t[1]=d*h+_,t[5]=a*u,t[9]=p*h-g,t[2]=g*h-p,t[6]=o*u,t[10]=_*h+d}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(sm,e,am)}lookAt(e,t,n){const i=this.elements;return qn.subVectors(e,t),qn.lengthSq()===0&&(qn.z=1),qn.normalize(),sr.crossVectors(n,qn),sr.lengthSq()===0&&(Math.abs(n.z)===1?qn.x+=1e-4:qn.z+=1e-4,qn.normalize(),sr.crossVectors(n,qn)),sr.normalize(),Aa.crossVectors(qn,sr),i[0]=sr.x,i[4]=Aa.x,i[8]=qn.x,i[1]=sr.y,i[5]=Aa.y,i[9]=qn.y,i[2]=sr.z,i[6]=Aa.z,i[10]=qn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,s=this.elements,a=n[0],o=n[4],l=n[8],c=n[12],u=n[1],h=n[5],d=n[9],p=n[13],g=n[2],_=n[6],f=n[10],m=n[14],y=n[3],v=n[7],A=n[11],b=n[15],w=i[0],S=i[4],I=i[8],D=i[12],x=i[1],E=i[5],U=i[9],Y=i[13],L=i[2],O=i[6],k=i[10],q=i[14],$=i[3],K=i[7],se=i[11],oe=i[15];return s[0]=a*w+o*x+l*L+c*$,s[4]=a*S+o*E+l*O+c*K,s[8]=a*I+o*U+l*k+c*se,s[12]=a*D+o*Y+l*q+c*oe,s[1]=u*w+h*x+d*L+p*$,s[5]=u*S+h*E+d*O+p*K,s[9]=u*I+h*U+d*k+p*se,s[13]=u*D+h*Y+d*q+p*oe,s[2]=g*w+_*x+f*L+m*$,s[6]=g*S+_*E+f*O+m*K,s[10]=g*I+_*U+f*k+m*se,s[14]=g*D+_*Y+f*q+m*oe,s[3]=y*w+v*x+A*L+b*$,s[7]=y*S+v*E+A*O+b*K,s[11]=y*I+v*U+A*k+b*se,s[15]=y*D+v*Y+A*q+b*oe,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],i=e[8],s=e[12],a=e[1],o=e[5],l=e[9],c=e[13],u=e[2],h=e[6],d=e[10],p=e[14],g=e[3],_=e[7],f=e[11],m=e[15];return g*(+s*l*h-i*c*h-s*o*d+n*c*d+i*o*p-n*l*p)+_*(+t*l*p-t*c*d+s*a*d-i*a*p+i*c*u-s*l*u)+f*(+t*c*h-t*o*p-s*a*h+n*a*p+s*o*u-n*c*u)+m*(-i*o*u-t*l*h+t*o*d+i*a*h-n*a*d+n*l*u)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const i=this.elements;return e.isVector3?(i[12]=e.x,i[13]=e.y,i[14]=e.z):(i[12]=e,i[13]=t,i[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],u=e[8],h=e[9],d=e[10],p=e[11],g=e[12],_=e[13],f=e[14],m=e[15],y=h*f*c-_*d*c+_*l*p-o*f*p-h*l*m+o*d*m,v=g*d*c-u*f*c-g*l*p+a*f*p+u*l*m-a*d*m,A=u*_*c-g*h*c+g*o*p-a*_*p-u*o*m+a*h*m,b=g*h*l-u*_*l-g*o*d+a*_*d+u*o*f-a*h*f,w=t*y+n*v+i*A+s*b;if(w===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const S=1/w;return e[0]=y*S,e[1]=(_*d*s-h*f*s-_*i*p+n*f*p+h*i*m-n*d*m)*S,e[2]=(o*f*s-_*l*s+_*i*c-n*f*c-o*i*m+n*l*m)*S,e[3]=(h*l*s-o*d*s-h*i*c+n*d*c+o*i*p-n*l*p)*S,e[4]=v*S,e[5]=(u*f*s-g*d*s+g*i*p-t*f*p-u*i*m+t*d*m)*S,e[6]=(g*l*s-a*f*s-g*i*c+t*f*c+a*i*m-t*l*m)*S,e[7]=(a*d*s-u*l*s+u*i*c-t*d*c-a*i*p+t*l*p)*S,e[8]=A*S,e[9]=(g*h*s-u*_*s-g*n*p+t*_*p+u*n*m-t*h*m)*S,e[10]=(a*_*s-g*o*s+g*n*c-t*_*c-a*n*m+t*o*m)*S,e[11]=(u*o*s-a*h*s-u*n*c+t*h*c+a*n*p-t*o*p)*S,e[12]=b*S,e[13]=(u*_*i-g*h*i+g*n*d-t*_*d-u*n*f+t*h*f)*S,e[14]=(g*o*i-a*_*i-g*n*l+t*_*l+a*n*f-t*o*f)*S,e[15]=(a*h*i-u*o*i+u*n*l-t*h*l-a*n*d+t*o*d)*S,this}scale(e){const t=this.elements,n=e.x,i=e.y,s=e.z;return t[0]*=n,t[4]*=i,t[8]*=s,t[1]*=n,t[5]*=i,t[9]*=s,t[2]*=n,t[6]*=i,t[10]*=s,t[3]*=n,t[7]*=i,t[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],i=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,i))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),i=Math.sin(t),s=1-n,a=e.x,o=e.y,l=e.z,c=s*a,u=s*o;return this.set(c*a+n,c*o-i*l,c*l+i*o,0,c*o+i*l,u*o+n,u*l-i*a,0,c*l-i*o,u*l+i*a,s*l*l+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,i,s,a){return this.set(1,n,s,0,e,1,a,0,t,i,1,0,0,0,0,1),this}compose(e,t,n){const i=this.elements,s=t._x,a=t._y,o=t._z,l=t._w,c=s+s,u=a+a,h=o+o,d=s*c,p=s*u,g=s*h,_=a*u,f=a*h,m=o*h,y=l*c,v=l*u,A=l*h,b=n.x,w=n.y,S=n.z;return i[0]=(1-(_+m))*b,i[1]=(p+A)*b,i[2]=(g-v)*b,i[3]=0,i[4]=(p-A)*w,i[5]=(1-(d+m))*w,i[6]=(f+y)*w,i[7]=0,i[8]=(g+v)*S,i[9]=(f-y)*S,i[10]=(1-(d+_))*S,i[11]=0,i[12]=e.x,i[13]=e.y,i[14]=e.z,i[15]=1,this}decompose(e,t,n){const i=this.elements;let s=ns.set(i[0],i[1],i[2]).length();const a=ns.set(i[4],i[5],i[6]).length(),o=ns.set(i[8],i[9],i[10]).length();this.determinant()<0&&(s=-s),e.x=i[12],e.y=i[13],e.z=i[14],ci.copy(this);const c=1/s,u=1/a,h=1/o;return ci.elements[0]*=c,ci.elements[1]*=c,ci.elements[2]*=c,ci.elements[4]*=u,ci.elements[5]*=u,ci.elements[6]*=u,ci.elements[8]*=h,ci.elements[9]*=h,ci.elements[10]*=h,t.setFromRotationMatrix(ci),n.x=s,n.y=a,n.z=o,this}makePerspective(e,t,n,i,s,a,o=Yi){const l=this.elements,c=2*s/(t-e),u=2*s/(n-i),h=(t+e)/(t-e),d=(n+i)/(n-i);let p,g;if(o===Yi)p=-(a+s)/(a-s),g=-2*a*s/(a-s);else if(o===io)p=-a/(a-s),g=-a*s/(a-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return l[0]=c,l[4]=0,l[8]=h,l[12]=0,l[1]=0,l[5]=u,l[9]=d,l[13]=0,l[2]=0,l[6]=0,l[10]=p,l[14]=g,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,n,i,s,a,o=Yi){const l=this.elements,c=1/(t-e),u=1/(n-i),h=1/(a-s),d=(t+e)*c,p=(n+i)*u;let g,_;if(o===Yi)g=(a+s)*h,_=-2*h;else if(o===io)g=s*h,_=-1*h;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-d,l[1]=0,l[5]=2*u,l[9]=0,l[13]=-p,l[2]=0,l[6]=0,l[10]=_,l[14]=-g,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<16;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}}const ns=new P,ci=new je,sm=new P(0,0,0),am=new P(1,1,1),sr=new P,Aa=new P,qn=new P,mu=new je,gu=new xr;class Ti{constructor(e=0,t=0,n=0,i=Ti.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=i}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,i=this._order){return this._x=e,this._y=t,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const i=e.elements,s=i[0],a=i[4],o=i[8],l=i[1],c=i[5],u=i[9],h=i[2],d=i[6],p=i[10];switch(t){case"XYZ":this._y=Math.asin(un(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-u,p),this._z=Math.atan2(-a,s)):(this._x=Math.atan2(d,c),this._z=0);break;case"YXZ":this._x=Math.asin(-un(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(o,p),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-h,s),this._z=0);break;case"ZXY":this._x=Math.asin(un(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-h,p),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-un(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(d,p),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(un(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-h,s)):(this._x=0,this._y=Math.atan2(o,p));break;case"XZY":this._z=Math.asin(-un(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(o,s)):(this._x=Math.atan2(-u,p),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return mu.makeRotationFromQuaternion(e),this.setFromRotationMatrix(mu,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return gu.setFromEuler(this),this.setFromQuaternion(gu,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Ti.DEFAULT_ORDER="XYZ";class $h{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let om=0;const _u=new P,is=new xr,Gi=new je,wa=new P,$s=new P,lm=new P,cm=new xr,vu=new P(1,0,0),xu=new P(0,1,0),Mu=new P(0,0,1),um={type:"added"},hm={type:"removed"},Wo={type:"childadded",child:null},Xo={type:"childremoved",child:null};class en extends Us{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:om++}),this.uuid=gi(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=en.DEFAULT_UP.clone();const e=new P,t=new Ti,n=new xr,i=new P(1,1,1);function s(){n.setFromEuler(t,!1)}function a(){t.setFromQuaternion(n,void 0,!1)}t._onChange(s),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new je},normalMatrix:{value:new pt}}),this.matrix=new je,this.matrixWorld=new je,this.matrixAutoUpdate=en.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=en.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new $h,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return is.setFromAxisAngle(e,t),this.quaternion.multiply(is),this}rotateOnWorldAxis(e,t){return is.setFromAxisAngle(e,t),this.quaternion.premultiply(is),this}rotateX(e){return this.rotateOnAxis(vu,e)}rotateY(e){return this.rotateOnAxis(xu,e)}rotateZ(e){return this.rotateOnAxis(Mu,e)}translateOnAxis(e,t){return _u.copy(e).applyQuaternion(this.quaternion),this.position.add(_u.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(vu,e)}translateY(e){return this.translateOnAxis(xu,e)}translateZ(e){return this.translateOnAxis(Mu,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Gi.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?wa.copy(e):wa.set(e,t,n);const i=this.parent;this.updateWorldMatrix(!0,!1),$s.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Gi.lookAt($s,wa,this.up):Gi.lookAt(wa,$s,this.up),this.quaternion.setFromRotationMatrix(Gi),i&&(Gi.extractRotation(i.matrixWorld),is.setFromRotationMatrix(Gi),this.quaternion.premultiply(is.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.parent!==null&&e.parent.remove(e),e.parent=this,this.children.push(e),e.dispatchEvent(um),Wo.child=e,this.dispatchEvent(Wo),Wo.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(hm),Xo.child=e,this.dispatchEvent(Xo),Xo.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Gi.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Gi.multiply(e.parent.matrixWorld)),e.applyMatrix4(Gi),this.add(e),e.updateWorldMatrix(!1,!0),this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,i=this.children.length;n<i;n++){const a=this.children[n].getObjectByProperty(e,t);if(a!==void 0)return a}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);const i=this.children;for(let s=0,a=i.length;s<a;s++)i[s].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose($s,e,lm),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose($s,cm,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,i=t.length;n<i;n++){const s=t[n];(s.matrixWorldAutoUpdate===!0||e===!0)&&s.updateMatrixWorld(e)}}updateWorldMatrix(e,t){const n=this.parent;if(e===!0&&n!==null&&n.matrixWorldAutoUpdate===!0&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),t===!0){const i=this.children;for(let s=0,a=i.length;s<a;s++){const o=i[s];o.matrixWorldAutoUpdate===!0&&o.updateWorldMatrix(!1,!0)}}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const i={};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.castShadow===!0&&(i.castShadow=!0),this.receiveShadow===!0&&(i.receiveShadow=!0),this.visible===!1&&(i.visible=!1),this.frustumCulled===!1&&(i.frustumCulled=!1),this.renderOrder!==0&&(i.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(i.matrixAutoUpdate=!1),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(i.type="BatchedMesh",i.perObjectFrustumCulled=this.perObjectFrustumCulled,i.sortObjects=this.sortObjects,i.drawRanges=this._drawRanges,i.reservedRanges=this._reservedRanges,i.visibility=this._visibility,i.active=this._active,i.bounds=this._bounds.map(o=>({boxInitialized:o.boxInitialized,boxMin:o.box.min.toArray(),boxMax:o.box.max.toArray(),sphereInitialized:o.sphereInitialized,sphereRadius:o.sphere.radius,sphereCenter:o.sphere.center.toArray()})),i.maxGeometryCount=this._maxGeometryCount,i.maxVertexCount=this._maxVertexCount,i.maxIndexCount=this._maxIndexCount,i.geometryInitialized=this._geometryInitialized,i.geometryCount=this._geometryCount,i.matricesTexture=this._matricesTexture.toJSON(e),this.boundingSphere!==null&&(i.boundingSphere={center:i.boundingSphere.center.toArray(),radius:i.boundingSphere.radius}),this.boundingBox!==null&&(i.boundingBox={min:i.boundingBox.min.toArray(),max:i.boundingBox.max.toArray()}));function s(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=s(e.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const l=o.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){const h=l[c];s(e.shapes,h)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(s(e.materials,this.material[l]));i.material=o}else i.material=s(e.materials,this.material);if(this.children.length>0){i.children=[];for(let o=0;o<this.children.length;o++)i.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){i.animations=[];for(let o=0;o<this.animations.length;o++){const l=this.animations[o];i.animations.push(s(e.animations,l))}}if(t){const o=a(e.geometries),l=a(e.materials),c=a(e.textures),u=a(e.images),h=a(e.shapes),d=a(e.skeletons),p=a(e.animations),g=a(e.nodes);o.length>0&&(n.geometries=o),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),u.length>0&&(n.images=u),h.length>0&&(n.shapes=h),d.length>0&&(n.skeletons=d),p.length>0&&(n.animations=p),g.length>0&&(n.nodes=g)}return n.object=i,n;function a(o){const l=[];for(const c in o){const u=o[c];delete u.metadata,l.push(u)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const i=e.children[n];this.add(i.clone())}return this}}en.DEFAULT_UP=new P(0,1,0);en.DEFAULT_MATRIX_AUTO_UPDATE=!0;en.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const ui=new P,Hi=new P,qo=new P,Vi=new P,rs=new P,ss=new P,yu=new P,jo=new P,Yo=new P,Ko=new P;class Si{constructor(e=new P,t=new P,n=new P){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,i){i.subVectors(n,t),ui.subVectors(e,t),i.cross(ui);const s=i.lengthSq();return s>0?i.multiplyScalar(1/Math.sqrt(s)):i.set(0,0,0)}static getBarycoord(e,t,n,i,s){ui.subVectors(i,t),Hi.subVectors(n,t),qo.subVectors(e,t);const a=ui.dot(ui),o=ui.dot(Hi),l=ui.dot(qo),c=Hi.dot(Hi),u=Hi.dot(qo),h=a*c-o*o;if(h===0)return s.set(0,0,0),null;const d=1/h,p=(c*l-o*u)*d,g=(a*u-o*l)*d;return s.set(1-p-g,g,p)}static containsPoint(e,t,n,i){return this.getBarycoord(e,t,n,i,Vi)===null?!1:Vi.x>=0&&Vi.y>=0&&Vi.x+Vi.y<=1}static getInterpolation(e,t,n,i,s,a,o,l){return this.getBarycoord(e,t,n,i,Vi)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,Vi.x),l.addScaledVector(a,Vi.y),l.addScaledVector(o,Vi.z),l)}static isFrontFacing(e,t,n,i){return ui.subVectors(n,t),Hi.subVectors(e,t),ui.cross(Hi).dot(i)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,i){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[i]),this}setFromAttributeAndIndices(e,t,n,i){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,i),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return ui.subVectors(this.c,this.b),Hi.subVectors(this.a,this.b),ui.cross(Hi).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Si.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return Si.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,i,s){return Si.getInterpolation(e,this.a,this.b,this.c,t,n,i,s)}containsPoint(e){return Si.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Si.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,i=this.b,s=this.c;let a,o;rs.subVectors(i,n),ss.subVectors(s,n),jo.subVectors(e,n);const l=rs.dot(jo),c=ss.dot(jo);if(l<=0&&c<=0)return t.copy(n);Yo.subVectors(e,i);const u=rs.dot(Yo),h=ss.dot(Yo);if(u>=0&&h<=u)return t.copy(i);const d=l*h-u*c;if(d<=0&&l>=0&&u<=0)return a=l/(l-u),t.copy(n).addScaledVector(rs,a);Ko.subVectors(e,s);const p=rs.dot(Ko),g=ss.dot(Ko);if(g>=0&&p<=g)return t.copy(s);const _=p*c-l*g;if(_<=0&&c>=0&&g<=0)return o=c/(c-g),t.copy(n).addScaledVector(ss,o);const f=u*g-p*h;if(f<=0&&h-u>=0&&p-g>=0)return yu.subVectors(s,i),o=(h-u)/(h-u+(p-g)),t.copy(i).addScaledVector(yu,o);const m=1/(f+_+d);return a=_*m,o=d*m,t.copy(n).addScaledVector(rs,a).addScaledVector(ss,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const Zh={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},ar={h:0,s:0,l:0},Ra={h:0,s:0,l:0};function $o(r,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?r+(e-r)*6*t:t<1/2?e:t<2/3?r+(e-r)*6*(2/3-t):r}class Qe{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){const i=e;i&&i.isColor?this.copy(i):typeof i=="number"?this.setHex(i):typeof i=="string"&&this.setStyle(i)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Dn){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Lt.toWorkingColorSpace(this,t),this}setRGB(e,t,n,i=Lt.workingColorSpace){return this.r=e,this.g=t,this.b=n,Lt.toWorkingColorSpace(this,i),this}setHSL(e,t,n,i=Lt.workingColorSpace){if(e=ql(e,1),t=un(t,0,1),n=un(n,0,1),t===0)this.r=this.g=this.b=n;else{const s=n<=.5?n*(1+t):n+t-n*t,a=2*n-s;this.r=$o(a,s,e+1/3),this.g=$o(a,s,e),this.b=$o(a,s,e-1/3)}return Lt.toWorkingColorSpace(this,i),this}setStyle(e,t=Dn){function n(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const a=i[1],o=i[2];switch(a){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,t);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,t);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=i[1],a=s.length;if(a===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(s,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Dn){const n=Zh[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=ys(e.r),this.g=ys(e.g),this.b=ys(e.b),this}copyLinearToSRGB(e){return this.r=Fo(e.r),this.g=Fo(e.g),this.b=Fo(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Dn){return Lt.fromWorkingColorSpace(Tn.copy(this),e),Math.round(un(Tn.r*255,0,255))*65536+Math.round(un(Tn.g*255,0,255))*256+Math.round(un(Tn.b*255,0,255))}getHexString(e=Dn){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Lt.workingColorSpace){Lt.fromWorkingColorSpace(Tn.copy(this),t);const n=Tn.r,i=Tn.g,s=Tn.b,a=Math.max(n,i,s),o=Math.min(n,i,s);let l,c;const u=(o+a)/2;if(o===a)l=0,c=0;else{const h=a-o;switch(c=u<=.5?h/(a+o):h/(2-a-o),a){case n:l=(i-s)/h+(i<s?6:0);break;case i:l=(s-n)/h+2;break;case s:l=(n-i)/h+4;break}l/=6}return e.h=l,e.s=c,e.l=u,e}getRGB(e,t=Lt.workingColorSpace){return Lt.fromWorkingColorSpace(Tn.copy(this),t),e.r=Tn.r,e.g=Tn.g,e.b=Tn.b,e}getStyle(e=Dn){Lt.fromWorkingColorSpace(Tn.copy(this),e);const t=Tn.r,n=Tn.g,i=Tn.b;return e!==Dn?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(i*255)})`}offsetHSL(e,t,n){return this.getHSL(ar),this.setHSL(ar.h+e,ar.s+t,ar.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(ar),e.getHSL(Ra);const n=aa(ar.h,Ra.h,t),i=aa(ar.s,Ra.s,t),s=aa(ar.l,Ra.l,t);return this.setHSL(n,i,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,n=this.g,i=this.b,s=e.elements;return this.r=s[0]*t+s[3]*n+s[6]*i,this.g=s[1]*t+s[4]*n+s[7]*i,this.b=s[2]*t+s[5]*n+s[8]*i,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Tn=new Qe;Qe.NAMES=Zh;let dm=0;class bi extends Us{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:dm++}),this.uuid=gi(),this.name="",this.type="Material",this.blending=Ms,this.side=$i,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=El,this.blendDst=bl,this.blendEquation=Fr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Qe(0,0,0),this.blendAlpha=0,this.depthFunc=Ja,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=lu,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Zr,this.stencilZFail=Zr,this.stencilZPass=Zr,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const i=this[t];if(i===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}i&&i.isColor?i.set(n):i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Ms&&(n.blending=this.blending),this.side!==$i&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==El&&(n.blendSrc=this.blendSrc),this.blendDst!==bl&&(n.blendDst=this.blendDst),this.blendEquation!==Fr&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==Ja&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==lu&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Zr&&(n.stencilFail=this.stencilFail),this.stencilZFail!==Zr&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==Zr&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function i(s){const a=[];for(const o in s){const l=s[o];delete l.metadata,a.push(l)}return a}if(t){const s=i(e.textures),a=i(e.images);s.length>0&&(n.textures=s),a.length>0&&(n.images=a)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const i=t.length;n=new Array(i);for(let s=0;s!==i;++s)n[s]=t[s].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class Br extends bi{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Qe(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ti,this.combine=Ph,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const on=new P,Ca=new Se;class hn{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=Cl,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=fi,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return qh("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let i=0,s=this.itemSize;i<s;i++)this.array[e+i]=t.array[n+i];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)Ca.fromBufferAttribute(this,t),Ca.applyMatrix3(e),this.setXY(t,Ca.x,Ca.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)on.fromBufferAttribute(this,t),on.applyMatrix3(e),this.setXYZ(t,on.x,on.y,on.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)on.fromBufferAttribute(this,t),on.applyMatrix4(e),this.setXYZ(t,on.x,on.y,on.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)on.fromBufferAttribute(this,t),on.applyNormalMatrix(e),this.setXYZ(t,on.x,on.y,on.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)on.fromBufferAttribute(this,t),on.transformDirection(e),this.setXYZ(t,on.x,on.y,on.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=pi(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=Pt(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=pi(t,this.array)),t}setX(e,t){return this.normalized&&(t=Pt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=pi(t,this.array)),t}setY(e,t){return this.normalized&&(t=Pt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=pi(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Pt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=pi(t,this.array)),t}setW(e,t){return this.normalized&&(t=Pt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=Pt(t,this.array),n=Pt(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,i){return e*=this.itemSize,this.normalized&&(t=Pt(t,this.array),n=Pt(n,this.array),i=Pt(i,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this}setXYZW(e,t,n,i,s){return e*=this.itemSize,this.normalized&&(t=Pt(t,this.array),n=Pt(n,this.array),i=Pt(i,this.array),s=Pt(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Cl&&(e.usage=this.usage),e}}class Jh extends hn{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class Qh extends hn{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class Mn extends hn{constructor(e,t,n){super(new Float32Array(e),t,n)}}let fm=0;const ni=new je,Zo=new en,as=new P,jn=new Ai,Zs=new Ai,gn=new P;class Fn extends Us{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:fm++}),this.uuid=gi(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Xh(e)?Qh:Jh)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const s=new pt().getNormalMatrix(e);n.applyNormalMatrix(s),n.needsUpdate=!0}const i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(e),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return ni.makeRotationFromQuaternion(e),this.applyMatrix4(ni),this}rotateX(e){return ni.makeRotationX(e),this.applyMatrix4(ni),this}rotateY(e){return ni.makeRotationY(e),this.applyMatrix4(ni),this}rotateZ(e){return ni.makeRotationZ(e),this.applyMatrix4(ni),this}translate(e,t,n){return ni.makeTranslation(e,t,n),this.applyMatrix4(ni),this}scale(e,t,n){return ni.makeScale(e,t,n),this.applyMatrix4(ni),this}lookAt(e){return Zo.lookAt(e),Zo.updateMatrix(),this.applyMatrix4(Zo.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(as).negate(),this.translate(as.x,as.y,as.z),this}setFromPoints(e){const t=[];for(let n=0,i=e.length;n<i;n++){const s=e[n];t.push(s.x,s.y,s.z||0)}return this.setAttribute("position",new Mn(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Ai);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new P(-1/0,-1/0,-1/0),new P(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,i=t.length;n<i;n++){const s=t[n];jn.setFromBufferAttribute(s),this.morphTargetsRelative?(gn.addVectors(this.boundingBox.min,jn.min),this.boundingBox.expandByPoint(gn),gn.addVectors(this.boundingBox.max,jn.max),this.boundingBox.expandByPoint(gn)):(this.boundingBox.expandByPoint(jn.min),this.boundingBox.expandByPoint(jn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new wi);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new P,1/0);return}if(e){const n=this.boundingSphere.center;if(jn.setFromBufferAttribute(e),t)for(let s=0,a=t.length;s<a;s++){const o=t[s];Zs.setFromBufferAttribute(o),this.morphTargetsRelative?(gn.addVectors(jn.min,Zs.min),jn.expandByPoint(gn),gn.addVectors(jn.max,Zs.max),jn.expandByPoint(gn)):(jn.expandByPoint(Zs.min),jn.expandByPoint(Zs.max))}jn.getCenter(n);let i=0;for(let s=0,a=e.count;s<a;s++)gn.fromBufferAttribute(e,s),i=Math.max(i,n.distanceToSquared(gn));if(t)for(let s=0,a=t.length;s<a;s++){const o=t[s],l=this.morphTargetsRelative;for(let c=0,u=o.count;c<u;c++)gn.fromBufferAttribute(o,c),l&&(as.fromBufferAttribute(e,c),gn.add(as)),i=Math.max(i,n.distanceToSquared(gn))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=t.position,i=t.normal,s=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new hn(new Float32Array(4*n.count),4));const a=this.getAttribute("tangent"),o=[],l=[];for(let I=0;I<n.count;I++)o[I]=new P,l[I]=new P;const c=new P,u=new P,h=new P,d=new Se,p=new Se,g=new Se,_=new P,f=new P;function m(I,D,x){c.fromBufferAttribute(n,I),u.fromBufferAttribute(n,D),h.fromBufferAttribute(n,x),d.fromBufferAttribute(s,I),p.fromBufferAttribute(s,D),g.fromBufferAttribute(s,x),u.sub(c),h.sub(c),p.sub(d),g.sub(d);const E=1/(p.x*g.y-g.x*p.y);isFinite(E)&&(_.copy(u).multiplyScalar(g.y).addScaledVector(h,-p.y).multiplyScalar(E),f.copy(h).multiplyScalar(p.x).addScaledVector(u,-g.x).multiplyScalar(E),o[I].add(_),o[D].add(_),o[x].add(_),l[I].add(f),l[D].add(f),l[x].add(f))}let y=this.groups;y.length===0&&(y=[{start:0,count:e.count}]);for(let I=0,D=y.length;I<D;++I){const x=y[I],E=x.start,U=x.count;for(let Y=E,L=E+U;Y<L;Y+=3)m(e.getX(Y+0),e.getX(Y+1),e.getX(Y+2))}const v=new P,A=new P,b=new P,w=new P;function S(I){b.fromBufferAttribute(i,I),w.copy(b);const D=o[I];v.copy(D),v.sub(b.multiplyScalar(b.dot(D))).normalize(),A.crossVectors(w,D);const E=A.dot(l[I])<0?-1:1;a.setXYZW(I,v.x,v.y,v.z,E)}for(let I=0,D=y.length;I<D;++I){const x=y[I],E=x.start,U=x.count;for(let Y=E,L=E+U;Y<L;Y+=3)S(e.getX(Y+0)),S(e.getX(Y+1)),S(e.getX(Y+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new hn(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let d=0,p=n.count;d<p;d++)n.setXYZ(d,0,0,0);const i=new P,s=new P,a=new P,o=new P,l=new P,c=new P,u=new P,h=new P;if(e)for(let d=0,p=e.count;d<p;d+=3){const g=e.getX(d+0),_=e.getX(d+1),f=e.getX(d+2);i.fromBufferAttribute(t,g),s.fromBufferAttribute(t,_),a.fromBufferAttribute(t,f),u.subVectors(a,s),h.subVectors(i,s),u.cross(h),o.fromBufferAttribute(n,g),l.fromBufferAttribute(n,_),c.fromBufferAttribute(n,f),o.add(u),l.add(u),c.add(u),n.setXYZ(g,o.x,o.y,o.z),n.setXYZ(_,l.x,l.y,l.z),n.setXYZ(f,c.x,c.y,c.z)}else for(let d=0,p=t.count;d<p;d+=3)i.fromBufferAttribute(t,d+0),s.fromBufferAttribute(t,d+1),a.fromBufferAttribute(t,d+2),u.subVectors(a,s),h.subVectors(i,s),u.cross(h),n.setXYZ(d+0,u.x,u.y,u.z),n.setXYZ(d+1,u.x,u.y,u.z),n.setXYZ(d+2,u.x,u.y,u.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)gn.fromBufferAttribute(e,t),gn.normalize(),e.setXYZ(t,gn.x,gn.y,gn.z)}toNonIndexed(){function e(o,l){const c=o.array,u=o.itemSize,h=o.normalized,d=new c.constructor(l.length*u);let p=0,g=0;for(let _=0,f=l.length;_<f;_++){o.isInterleavedBufferAttribute?p=l[_]*o.data.stride+o.offset:p=l[_]*u;for(let m=0;m<u;m++)d[g++]=c[p++]}return new hn(d,u,h)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new Fn,n=this.index.array,i=this.attributes;for(const o in i){const l=i[o],c=e(l,n);t.setAttribute(o,c)}const s=this.morphAttributes;for(const o in s){const l=[],c=s[o];for(let u=0,h=c.length;u<h;u++){const d=c[u],p=e(d,n);l.push(p)}t.morphAttributes[o]=l}t.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,l=a.length;o<l;o++){const c=a[o];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const l in n){const c=n[l];e.data.attributes[l]=c.toJSON(e.data)}const i={};let s=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],u=[];for(let h=0,d=c.length;h<d;h++){const p=c[h];u.push(p.toJSON(e.data))}u.length>0&&(i[l]=u,s=!0)}s&&(e.data.morphAttributes=i,e.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(e.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone(t));const i=e.attributes;for(const c in i){const u=i[c];this.setAttribute(c,u.clone(t))}const s=e.morphAttributes;for(const c in s){const u=[],h=s[c];for(let d=0,p=h.length;d<p;d++)u.push(h[d].clone(t));this.morphAttributes[c]=u}this.morphTargetsRelative=e.morphTargetsRelative;const a=e.groups;for(let c=0,u=a.length;c<u;c++){const h=a[c];this.addGroup(h.start,h.count,h.materialIndex)}const o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Su=new je,Rr=new oo,La=new wi,Eu=new P,os=new P,ls=new P,cs=new P,Jo=new P,Pa=new P,Ia=new Se,Da=new Se,Na=new Se,bu=new P,Tu=new P,Au=new P,Ua=new P,Fa=new P;class Qt extends en{constructor(e=new Fn,t=new Br){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=i.length;s<a;s++){const o=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}getVertexPosition(e,t){const n=this.geometry,i=n.attributes.position,s=n.morphAttributes.position,a=n.morphTargetsRelative;t.fromBufferAttribute(i,e);const o=this.morphTargetInfluences;if(s&&o){Pa.set(0,0,0);for(let l=0,c=s.length;l<c;l++){const u=o[l],h=s[l];u!==0&&(Jo.fromBufferAttribute(h,e),a?Pa.addScaledVector(Jo,u):Pa.addScaledVector(Jo.sub(t),u))}t.add(Pa)}return t}raycast(e,t){const n=this.geometry,i=this.material,s=this.matrixWorld;i!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),La.copy(n.boundingSphere),La.applyMatrix4(s),Rr.copy(e.ray).recast(e.near),!(La.containsPoint(Rr.origin)===!1&&(Rr.intersectSphere(La,Eu)===null||Rr.origin.distanceToSquared(Eu)>(e.far-e.near)**2))&&(Su.copy(s).invert(),Rr.copy(e.ray).applyMatrix4(Su),!(n.boundingBox!==null&&Rr.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,Rr)))}_computeIntersections(e,t,n){let i;const s=this.geometry,a=this.material,o=s.index,l=s.attributes.position,c=s.attributes.uv,u=s.attributes.uv1,h=s.attributes.normal,d=s.groups,p=s.drawRange;if(o!==null)if(Array.isArray(a))for(let g=0,_=d.length;g<_;g++){const f=d[g],m=a[f.materialIndex],y=Math.max(f.start,p.start),v=Math.min(o.count,Math.min(f.start+f.count,p.start+p.count));for(let A=y,b=v;A<b;A+=3){const w=o.getX(A),S=o.getX(A+1),I=o.getX(A+2);i=Oa(this,m,e,n,c,u,h,w,S,I),i&&(i.faceIndex=Math.floor(A/3),i.face.materialIndex=f.materialIndex,t.push(i))}}else{const g=Math.max(0,p.start),_=Math.min(o.count,p.start+p.count);for(let f=g,m=_;f<m;f+=3){const y=o.getX(f),v=o.getX(f+1),A=o.getX(f+2);i=Oa(this,a,e,n,c,u,h,y,v,A),i&&(i.faceIndex=Math.floor(f/3),t.push(i))}}else if(l!==void 0)if(Array.isArray(a))for(let g=0,_=d.length;g<_;g++){const f=d[g],m=a[f.materialIndex],y=Math.max(f.start,p.start),v=Math.min(l.count,Math.min(f.start+f.count,p.start+p.count));for(let A=y,b=v;A<b;A+=3){const w=A,S=A+1,I=A+2;i=Oa(this,m,e,n,c,u,h,w,S,I),i&&(i.faceIndex=Math.floor(A/3),i.face.materialIndex=f.materialIndex,t.push(i))}}else{const g=Math.max(0,p.start),_=Math.min(l.count,p.start+p.count);for(let f=g,m=_;f<m;f+=3){const y=f,v=f+1,A=f+2;i=Oa(this,a,e,n,c,u,h,y,v,A),i&&(i.faceIndex=Math.floor(f/3),t.push(i))}}}}function pm(r,e,t,n,i,s,a,o){let l;if(e.side===Un?l=n.intersectTriangle(a,s,i,!0,o):l=n.intersectTriangle(i,s,a,e.side===$i,o),l===null)return null;Fa.copy(o),Fa.applyMatrix4(r.matrixWorld);const c=t.ray.origin.distanceTo(Fa);return c<t.near||c>t.far?null:{distance:c,point:Fa.clone(),object:r}}function Oa(r,e,t,n,i,s,a,o,l,c){r.getVertexPosition(o,os),r.getVertexPosition(l,ls),r.getVertexPosition(c,cs);const u=pm(r,e,t,n,os,ls,cs,Ua);if(u){i&&(Ia.fromBufferAttribute(i,o),Da.fromBufferAttribute(i,l),Na.fromBufferAttribute(i,c),u.uv=Si.getInterpolation(Ua,os,ls,cs,Ia,Da,Na,new Se)),s&&(Ia.fromBufferAttribute(s,o),Da.fromBufferAttribute(s,l),Na.fromBufferAttribute(s,c),u.uv1=Si.getInterpolation(Ua,os,ls,cs,Ia,Da,Na,new Se)),a&&(bu.fromBufferAttribute(a,o),Tu.fromBufferAttribute(a,l),Au.fromBufferAttribute(a,c),u.normal=Si.getInterpolation(Ua,os,ls,cs,bu,Tu,Au,new P),u.normal.dot(n.direction)>0&&u.normal.multiplyScalar(-1));const h={a:o,b:l,c,normal:new P,materialIndex:0};Si.getNormal(os,ls,cs,h.normal),u.face=h}return u}class hi extends Fn{constructor(e=1,t=1,n=1,i=1,s=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:i,heightSegments:s,depthSegments:a};const o=this;i=Math.floor(i),s=Math.floor(s),a=Math.floor(a);const l=[],c=[],u=[],h=[];let d=0,p=0;g("z","y","x",-1,-1,n,t,e,a,s,0),g("z","y","x",1,-1,n,t,-e,a,s,1),g("x","z","y",1,1,e,n,t,i,a,2),g("x","z","y",1,-1,e,n,-t,i,a,3),g("x","y","z",1,-1,e,t,n,i,s,4),g("x","y","z",-1,-1,e,t,-n,i,s,5),this.setIndex(l),this.setAttribute("position",new Mn(c,3)),this.setAttribute("normal",new Mn(u,3)),this.setAttribute("uv",new Mn(h,2));function g(_,f,m,y,v,A,b,w,S,I,D){const x=A/S,E=b/I,U=A/2,Y=b/2,L=w/2,O=S+1,k=I+1;let q=0,$=0;const K=new P;for(let se=0;se<k;se++){const oe=se*E-Y;for(let _e=0;_e<O;_e++){const He=_e*x-U;K[_]=He*y,K[f]=oe*v,K[m]=L,c.push(K.x,K.y,K.z),K[_]=0,K[f]=0,K[m]=w>0?1:-1,u.push(K.x,K.y,K.z),h.push(_e/S),h.push(1-se/I),q+=1}}for(let se=0;se<I;se++)for(let oe=0;oe<S;oe++){const _e=d+oe+O*se,He=d+oe+O*(se+1),V=d+(oe+1)+O*(se+1),ie=d+(oe+1)+O*se;l.push(_e,He,ie),l.push(He,V,ie),$+=6}o.addGroup(p,$,D),p+=$,d+=q}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new hi(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Ls(r){const e={};for(const t in r){e[t]={};for(const n in r[t]){const i=r[t][n];i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)?i.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=i.clone():Array.isArray(i)?e[t][n]=i.slice():e[t][n]=i}}return e}function In(r){const e={};for(let t=0;t<r.length;t++){const n=Ls(r[t]);for(const i in n)e[i]=n[i]}return e}function mm(r){const e=[];for(let t=0;t<r.length;t++)e.push(r[t].clone());return e}function ed(r){return r.getRenderTarget()===null?r.outputColorSpace:Lt.workingColorSpace}const gm={clone:Ls,merge:In};var _m=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,vm=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Zi extends bi{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=_m,this.fragmentShader=vm,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1,clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Ls(e.uniforms),this.uniformsGroups=mm(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const i in this.uniforms){const a=this.uniforms[i].value;a&&a.isTexture?t.uniforms[i]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[i]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[i]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[i]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[i]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[i]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[i]={type:"m4",value:a.toArray()}:t.uniforms[i]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const n={};for(const i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}}class jl extends en{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new je,this.projectionMatrix=new je,this.projectionMatrixInverse=new je,this.coordinateSystem=Yi}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const or=new P,wu=new Se,Ru=new Se;class Nn extends jl{constructor(e=50,t=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=Cs*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(sa*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Cs*2*Math.atan(Math.tan(sa*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){or.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(or.x,or.y).multiplyScalar(-e/or.z),or.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(or.x,or.y).multiplyScalar(-e/or.z)}getViewSize(e,t){return this.getViewBounds(e,wu,Ru),t.subVectors(Ru,wu)}setViewOffset(e,t,n,i,s,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(sa*.5*this.fov)/this.zoom,n=2*t,i=this.aspect*n,s=-.5*i;const a=this.view;if(this.view!==null&&this.view.enabled){const l=a.fullWidth,c=a.fullHeight;s+=a.offsetX*i/l,t-=a.offsetY*n/c,i*=a.width/l,n*=a.height/c}const o=this.filmOffset;o!==0&&(s+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+i,t,t-n,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const us=-90,hs=1;class xm extends en{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const i=new Nn(us,hs,e,t);i.layers=this.layers,this.add(i);const s=new Nn(us,hs,e,t);s.layers=this.layers,this.add(s);const a=new Nn(us,hs,e,t);a.layers=this.layers,this.add(a);const o=new Nn(us,hs,e,t);o.layers=this.layers,this.add(o);const l=new Nn(us,hs,e,t);l.layers=this.layers,this.add(l);const c=new Nn(us,hs,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[n,i,s,a,o,l]=t;for(const c of t)this.remove(c);if(e===Yi)n.up.set(0,1,0),n.lookAt(1,0,0),i.up.set(0,1,0),i.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===io)n.up.set(0,-1,0),n.lookAt(-1,0,0),i.up.set(0,-1,0),i.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:i}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,a,o,l,c,u]=this.children,h=e.getRenderTarget(),d=e.getActiveCubeFace(),p=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;const _=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0,i),e.render(t,s),e.setRenderTarget(n,1,i),e.render(t,a),e.setRenderTarget(n,2,i),e.render(t,o),e.setRenderTarget(n,3,i),e.render(t,l),e.setRenderTarget(n,4,i),e.render(t,c),n.texture.generateMipmaps=_,e.setRenderTarget(n,5,i),e.render(t,u),e.setRenderTarget(h,d,p),e.xr.enabled=g,n.texture.needsPMREMUpdate=!0}}class td extends xn{constructor(e,t,n,i,s,a,o,l,c,u){e=e!==void 0?e:[],t=t!==void 0?t:bs,super(e,t,n,i,s,a,o,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class Mm extends Gr{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},i=[n,n,n,n,n,n];this.texture=new td(i,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:wn}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},i=new hi(5,5,5),s=new Zi({name:"CubemapFromEquirect",uniforms:Ls(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Un,blending:gr});s.uniforms.tEquirect.value=t;const a=new Qt(i,s),o=t.minFilter;return t.minFilter===ji&&(t.minFilter=wn),new xm(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t,n,i){const s=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,n,i);e.setRenderTarget(s)}}const Qo=new P,ym=new P,Sm=new pt;class Nr{constructor(e=new P(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,i){return this.normal.set(e,t,n),this.constant=i,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const i=Qo.subVectors(n,t).cross(ym.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(i,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const n=e.delta(Qo),i=this.normal.dot(n);if(i===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/i;return s<0||s>1?null:t.copy(e.start).addScaledVector(n,s)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||Sm.getNormalMatrix(e),i=this.coplanarPoint(Qo).applyMatrix4(e),s=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Cr=new wi,Ba=new P;class Yl{constructor(e=new Nr,t=new Nr,n=new Nr,i=new Nr,s=new Nr,a=new Nr){this.planes=[e,t,n,i,s,a]}set(e,t,n,i,s,a){const o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(n),o[3].copy(i),o[4].copy(s),o[5].copy(a),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=Yi){const n=this.planes,i=e.elements,s=i[0],a=i[1],o=i[2],l=i[3],c=i[4],u=i[5],h=i[6],d=i[7],p=i[8],g=i[9],_=i[10],f=i[11],m=i[12],y=i[13],v=i[14],A=i[15];if(n[0].setComponents(l-s,d-c,f-p,A-m).normalize(),n[1].setComponents(l+s,d+c,f+p,A+m).normalize(),n[2].setComponents(l+a,d+u,f+g,A+y).normalize(),n[3].setComponents(l-a,d-u,f-g,A-y).normalize(),n[4].setComponents(l-o,d-h,f-_,A-v).normalize(),t===Yi)n[5].setComponents(l+o,d+h,f+_,A+v).normalize();else if(t===io)n[5].setComponents(o,h,_,v).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Cr.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Cr.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Cr)}intersectsSprite(e){return Cr.center.set(0,0,0),Cr.radius=.7071067811865476,Cr.applyMatrix4(e.matrixWorld),this.intersectsSphere(Cr)}intersectsSphere(e){const t=this.planes,n=e.center,i=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(n)<i)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const i=t[n];if(Ba.x=i.normal.x>0?e.max.x:e.min.x,Ba.y=i.normal.y>0?e.max.y:e.min.y,Ba.z=i.normal.z>0?e.max.z:e.min.z,i.distanceToPoint(Ba)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function nd(){let r=null,e=!1,t=null,n=null;function i(s,a){t(s,a),n=r.requestAnimationFrame(i)}return{start:function(){e!==!0&&t!==null&&(n=r.requestAnimationFrame(i),e=!0)},stop:function(){r.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){r=s}}}function Em(r,e){const t=e.isWebGL2,n=new WeakMap;function i(c,u){const h=c.array,d=c.usage,p=h.byteLength,g=r.createBuffer();r.bindBuffer(u,g),r.bufferData(u,h,d),c.onUploadCallback();let _;if(h instanceof Float32Array)_=r.FLOAT;else if(h instanceof Uint16Array)if(c.isFloat16BufferAttribute)if(t)_=r.HALF_FLOAT;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else _=r.UNSIGNED_SHORT;else if(h instanceof Int16Array)_=r.SHORT;else if(h instanceof Uint32Array)_=r.UNSIGNED_INT;else if(h instanceof Int32Array)_=r.INT;else if(h instanceof Int8Array)_=r.BYTE;else if(h instanceof Uint8Array)_=r.UNSIGNED_BYTE;else if(h instanceof Uint8ClampedArray)_=r.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+h);return{buffer:g,type:_,bytesPerElement:h.BYTES_PER_ELEMENT,version:c.version,size:p}}function s(c,u,h){const d=u.array,p=u._updateRange,g=u.updateRanges;if(r.bindBuffer(h,c),p.count===-1&&g.length===0&&r.bufferSubData(h,0,d),g.length!==0){for(let _=0,f=g.length;_<f;_++){const m=g[_];t?r.bufferSubData(h,m.start*d.BYTES_PER_ELEMENT,d,m.start,m.count):r.bufferSubData(h,m.start*d.BYTES_PER_ELEMENT,d.subarray(m.start,m.start+m.count))}u.clearUpdateRanges()}p.count!==-1&&(t?r.bufferSubData(h,p.offset*d.BYTES_PER_ELEMENT,d,p.offset,p.count):r.bufferSubData(h,p.offset*d.BYTES_PER_ELEMENT,d.subarray(p.offset,p.offset+p.count)),p.count=-1),u.onUploadCallback()}function a(c){return c.isInterleavedBufferAttribute&&(c=c.data),n.get(c)}function o(c){c.isInterleavedBufferAttribute&&(c=c.data);const u=n.get(c);u&&(r.deleteBuffer(u.buffer),n.delete(c))}function l(c,u){if(c.isGLBufferAttribute){const d=n.get(c);(!d||d.version<c.version)&&n.set(c,{buffer:c.buffer,type:c.type,bytesPerElement:c.elementSize,version:c.version});return}c.isInterleavedBufferAttribute&&(c=c.data);const h=n.get(c);if(h===void 0)n.set(c,i(c,u));else if(h.version<c.version){if(h.size!==c.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");s(h.buffer,c,u),h.version=c.version}}return{get:a,remove:o,update:l}}class lo extends Fn{constructor(e=1,t=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:i};const s=e/2,a=t/2,o=Math.floor(n),l=Math.floor(i),c=o+1,u=l+1,h=e/o,d=t/l,p=[],g=[],_=[],f=[];for(let m=0;m<u;m++){const y=m*d-a;for(let v=0;v<c;v++){const A=v*h-s;g.push(A,-y,0),_.push(0,0,1),f.push(v/o),f.push(1-m/l)}}for(let m=0;m<l;m++)for(let y=0;y<o;y++){const v=y+c*m,A=y+c*(m+1),b=y+1+c*(m+1),w=y+1+c*m;p.push(v,A,w),p.push(A,b,w)}this.setIndex(p),this.setAttribute("position",new Mn(g,3)),this.setAttribute("normal",new Mn(_,3)),this.setAttribute("uv",new Mn(f,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new lo(e.width,e.height,e.widthSegments,e.heightSegments)}}var bm=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Tm=`#ifdef USE_ALPHAHASH
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
#endif`,Am=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,wm=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Rm=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Cm=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Lm=`#ifdef USE_AOMAP
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
#endif`,Pm=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Im=`#ifdef USE_BATCHING
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
#endif`,Dm=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( batchId );
#endif`,Nm=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Um=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Fm=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Om=`#ifdef USE_IRIDESCENCE
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
#endif`,Bm=`#ifdef USE_BUMPMAP
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
#endif`,km=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,zm=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Gm=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Hm=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Vm=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Wm=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Xm=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,qm=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,jm=`#define PI 3.141592653589793
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
} // validated`,Ym=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,Km=`vec3 transformedNormal = objectNormal;
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
#endif`,$m=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Zm=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Jm=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Qm=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,eg="gl_FragColor = linearToOutputTexel( gl_FragColor );",tg=`
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
}`,ng=`#ifdef USE_ENVMAP
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
#endif`,ig=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,rg=`#ifdef USE_ENVMAP
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
#endif`,sg=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,ag=`#ifdef USE_ENVMAP
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
#endif`,og=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,lg=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,cg=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,ug=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,hg=`#ifdef USE_GRADIENTMAP
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
}`,dg=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,fg=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,pg=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,mg=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,gg=`uniform bool receiveShadow;
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
#endif`,_g=`#ifdef USE_ENVMAP
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
#endif`,vg=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,xg=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Mg=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,yg=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Sg=`PhysicalMaterial material;
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
#endif`,Eg=`struct PhysicalMaterial {
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
}`,bg=`
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
#endif`,Tg=`#if defined( RE_IndirectDiffuse )
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
#endif`,Ag=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,wg=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Rg=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Cg=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,Lg=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,Pg=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Ig=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Dg=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Ng=`#if defined( USE_POINTS_UV )
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
#endif`,Ug=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Fg=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Og=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[MORPHTARGETS_COUNT];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Bg=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,kg=`#ifdef USE_MORPHNORMALS
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
#endif`,zg=`#ifdef USE_MORPHTARGETS
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
#endif`,Gg=`#ifdef USE_MORPHTARGETS
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
#endif`,Hg=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,Vg=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,Wg=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Xg=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,qg=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,jg=`#ifdef USE_NORMALMAP
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
#endif`,Yg=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Kg=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,$g=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Zg=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Jg=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Qg=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,e_=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,t_=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,n_=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,i_=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,r_=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,s_=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,a_=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,o_=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,l_=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,c_=`float getShadowMask() {
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
}`,u_=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,h_=`#ifdef USE_SKINNING
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
#endif`,d_=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,f_=`#ifdef USE_SKINNING
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
#endif`,p_=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,m_=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,g_=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,__=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,v_=`#ifdef USE_TRANSMISSION
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
#endif`,x_=`#ifdef USE_TRANSMISSION
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
#endif`,M_=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,y_=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,S_=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,E_=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const b_=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,T_=`uniform sampler2D t2D;
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
}`,A_=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,w_=`#ifdef ENVMAP_TYPE_CUBE
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
}`,R_=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,C_=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,L_=`#include <common>
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
}`,P_=`#if DEPTH_PACKING == 3200
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
}`,I_=`#define DISTANCE
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
}`,D_=`#define DISTANCE
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
}`,N_=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,U_=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,F_=`uniform float scale;
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
}`,O_=`uniform vec3 diffuse;
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
}`,B_=`#include <common>
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
}`,k_=`uniform vec3 diffuse;
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
}`,z_=`#define LAMBERT
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
}`,G_=`#define LAMBERT
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
}`,H_=`#define MATCAP
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
}`,V_=`#define MATCAP
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
}`,W_=`#define NORMAL
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
}`,X_=`#define NORMAL
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
}`,q_=`#define PHONG
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
}`,j_=`#define PHONG
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
}`,Y_=`#define STANDARD
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
}`,K_=`#define STANDARD
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
}`,$_=`#define TOON
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
}`,Z_=`#define TOON
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
}`,J_=`uniform float size;
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
}`,Q_=`uniform vec3 diffuse;
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
}`,ev=`#include <common>
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
}`,tv=`uniform vec3 color;
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
}`,nv=`uniform float rotation;
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
}`,iv=`uniform vec3 diffuse;
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
}`,dt={alphahash_fragment:bm,alphahash_pars_fragment:Tm,alphamap_fragment:Am,alphamap_pars_fragment:wm,alphatest_fragment:Rm,alphatest_pars_fragment:Cm,aomap_fragment:Lm,aomap_pars_fragment:Pm,batching_pars_vertex:Im,batching_vertex:Dm,begin_vertex:Nm,beginnormal_vertex:Um,bsdfs:Fm,iridescence_fragment:Om,bumpmap_pars_fragment:Bm,clipping_planes_fragment:km,clipping_planes_pars_fragment:zm,clipping_planes_pars_vertex:Gm,clipping_planes_vertex:Hm,color_fragment:Vm,color_pars_fragment:Wm,color_pars_vertex:Xm,color_vertex:qm,common:jm,cube_uv_reflection_fragment:Ym,defaultnormal_vertex:Km,displacementmap_pars_vertex:$m,displacementmap_vertex:Zm,emissivemap_fragment:Jm,emissivemap_pars_fragment:Qm,colorspace_fragment:eg,colorspace_pars_fragment:tg,envmap_fragment:ng,envmap_common_pars_fragment:ig,envmap_pars_fragment:rg,envmap_pars_vertex:sg,envmap_physical_pars_fragment:_g,envmap_vertex:ag,fog_vertex:og,fog_pars_vertex:lg,fog_fragment:cg,fog_pars_fragment:ug,gradientmap_pars_fragment:hg,lightmap_fragment:dg,lightmap_pars_fragment:fg,lights_lambert_fragment:pg,lights_lambert_pars_fragment:mg,lights_pars_begin:gg,lights_toon_fragment:vg,lights_toon_pars_fragment:xg,lights_phong_fragment:Mg,lights_phong_pars_fragment:yg,lights_physical_fragment:Sg,lights_physical_pars_fragment:Eg,lights_fragment_begin:bg,lights_fragment_maps:Tg,lights_fragment_end:Ag,logdepthbuf_fragment:wg,logdepthbuf_pars_fragment:Rg,logdepthbuf_pars_vertex:Cg,logdepthbuf_vertex:Lg,map_fragment:Pg,map_pars_fragment:Ig,map_particle_fragment:Dg,map_particle_pars_fragment:Ng,metalnessmap_fragment:Ug,metalnessmap_pars_fragment:Fg,morphinstance_vertex:Og,morphcolor_vertex:Bg,morphnormal_vertex:kg,morphtarget_pars_vertex:zg,morphtarget_vertex:Gg,normal_fragment_begin:Hg,normal_fragment_maps:Vg,normal_pars_fragment:Wg,normal_pars_vertex:Xg,normal_vertex:qg,normalmap_pars_fragment:jg,clearcoat_normal_fragment_begin:Yg,clearcoat_normal_fragment_maps:Kg,clearcoat_pars_fragment:$g,iridescence_pars_fragment:Zg,opaque_fragment:Jg,packing:Qg,premultiplied_alpha_fragment:e_,project_vertex:t_,dithering_fragment:n_,dithering_pars_fragment:i_,roughnessmap_fragment:r_,roughnessmap_pars_fragment:s_,shadowmap_pars_fragment:a_,shadowmap_pars_vertex:o_,shadowmap_vertex:l_,shadowmask_pars_fragment:c_,skinbase_vertex:u_,skinning_pars_vertex:h_,skinning_vertex:d_,skinnormal_vertex:f_,specularmap_fragment:p_,specularmap_pars_fragment:m_,tonemapping_fragment:g_,tonemapping_pars_fragment:__,transmission_fragment:v_,transmission_pars_fragment:x_,uv_pars_fragment:M_,uv_pars_vertex:y_,uv_vertex:S_,worldpos_vertex:E_,background_vert:b_,background_frag:T_,backgroundCube_vert:A_,backgroundCube_frag:w_,cube_vert:R_,cube_frag:C_,depth_vert:L_,depth_frag:P_,distanceRGBA_vert:I_,distanceRGBA_frag:D_,equirect_vert:N_,equirect_frag:U_,linedashed_vert:F_,linedashed_frag:O_,meshbasic_vert:B_,meshbasic_frag:k_,meshlambert_vert:z_,meshlambert_frag:G_,meshmatcap_vert:H_,meshmatcap_frag:V_,meshnormal_vert:W_,meshnormal_frag:X_,meshphong_vert:q_,meshphong_frag:j_,meshphysical_vert:Y_,meshphysical_frag:K_,meshtoon_vert:$_,meshtoon_frag:Z_,points_vert:J_,points_frag:Q_,shadow_vert:ev,shadow_frag:tv,sprite_vert:nv,sprite_frag:iv},fe={common:{diffuse:{value:new Qe(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new pt},alphaMap:{value:null},alphaMapTransform:{value:new pt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new pt}},envmap:{envMap:{value:null},envMapRotation:{value:new pt},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new pt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new pt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new pt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new pt},normalScale:{value:new Se(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new pt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new pt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new pt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new pt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Qe(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Qe(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new pt},alphaTest:{value:0},uvTransform:{value:new pt}},sprite:{diffuse:{value:new Qe(16777215)},opacity:{value:1},center:{value:new Se(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new pt},alphaMap:{value:null},alphaMapTransform:{value:new pt},alphaTest:{value:0}}},Mi={basic:{uniforms:In([fe.common,fe.specularmap,fe.envmap,fe.aomap,fe.lightmap,fe.fog]),vertexShader:dt.meshbasic_vert,fragmentShader:dt.meshbasic_frag},lambert:{uniforms:In([fe.common,fe.specularmap,fe.envmap,fe.aomap,fe.lightmap,fe.emissivemap,fe.bumpmap,fe.normalmap,fe.displacementmap,fe.fog,fe.lights,{emissive:{value:new Qe(0)}}]),vertexShader:dt.meshlambert_vert,fragmentShader:dt.meshlambert_frag},phong:{uniforms:In([fe.common,fe.specularmap,fe.envmap,fe.aomap,fe.lightmap,fe.emissivemap,fe.bumpmap,fe.normalmap,fe.displacementmap,fe.fog,fe.lights,{emissive:{value:new Qe(0)},specular:{value:new Qe(1118481)},shininess:{value:30}}]),vertexShader:dt.meshphong_vert,fragmentShader:dt.meshphong_frag},standard:{uniforms:In([fe.common,fe.envmap,fe.aomap,fe.lightmap,fe.emissivemap,fe.bumpmap,fe.normalmap,fe.displacementmap,fe.roughnessmap,fe.metalnessmap,fe.fog,fe.lights,{emissive:{value:new Qe(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:dt.meshphysical_vert,fragmentShader:dt.meshphysical_frag},toon:{uniforms:In([fe.common,fe.aomap,fe.lightmap,fe.emissivemap,fe.bumpmap,fe.normalmap,fe.displacementmap,fe.gradientmap,fe.fog,fe.lights,{emissive:{value:new Qe(0)}}]),vertexShader:dt.meshtoon_vert,fragmentShader:dt.meshtoon_frag},matcap:{uniforms:In([fe.common,fe.bumpmap,fe.normalmap,fe.displacementmap,fe.fog,{matcap:{value:null}}]),vertexShader:dt.meshmatcap_vert,fragmentShader:dt.meshmatcap_frag},points:{uniforms:In([fe.points,fe.fog]),vertexShader:dt.points_vert,fragmentShader:dt.points_frag},dashed:{uniforms:In([fe.common,fe.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:dt.linedashed_vert,fragmentShader:dt.linedashed_frag},depth:{uniforms:In([fe.common,fe.displacementmap]),vertexShader:dt.depth_vert,fragmentShader:dt.depth_frag},normal:{uniforms:In([fe.common,fe.bumpmap,fe.normalmap,fe.displacementmap,{opacity:{value:1}}]),vertexShader:dt.meshnormal_vert,fragmentShader:dt.meshnormal_frag},sprite:{uniforms:In([fe.sprite,fe.fog]),vertexShader:dt.sprite_vert,fragmentShader:dt.sprite_frag},background:{uniforms:{uvTransform:{value:new pt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:dt.background_vert,fragmentShader:dt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new pt}},vertexShader:dt.backgroundCube_vert,fragmentShader:dt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:dt.cube_vert,fragmentShader:dt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:dt.equirect_vert,fragmentShader:dt.equirect_frag},distanceRGBA:{uniforms:In([fe.common,fe.displacementmap,{referencePosition:{value:new P},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:dt.distanceRGBA_vert,fragmentShader:dt.distanceRGBA_frag},shadow:{uniforms:In([fe.lights,fe.fog,{color:{value:new Qe(0)},opacity:{value:1}}]),vertexShader:dt.shadow_vert,fragmentShader:dt.shadow_frag}};Mi.physical={uniforms:In([Mi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new pt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new pt},clearcoatNormalScale:{value:new Se(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new pt},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new pt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new pt},sheen:{value:0},sheenColor:{value:new Qe(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new pt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new pt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new pt},transmissionSamplerSize:{value:new Se},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new pt},attenuationDistance:{value:0},attenuationColor:{value:new Qe(0)},specularColor:{value:new Qe(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new pt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new pt},anisotropyVector:{value:new Se},anisotropyMap:{value:null},anisotropyMapTransform:{value:new pt}}]),vertexShader:dt.meshphysical_vert,fragmentShader:dt.meshphysical_frag};const ka={r:0,b:0,g:0},Lr=new Ti,rv=new je;function sv(r,e,t,n,i,s,a){const o=new Qe(0);let l=s===!0?0:1,c,u,h=null,d=0,p=null;function g(f,m){let y=!1,v=m.isScene===!0?m.background:null;v&&v.isTexture&&(v=(m.backgroundBlurriness>0?t:e).get(v)),v===null?_(o,l):v&&v.isColor&&(_(v,1),y=!0);const A=r.xr.getEnvironmentBlendMode();A==="additive"?n.buffers.color.setClear(0,0,0,1,a):A==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,a),(r.autoClear||y)&&r.clear(r.autoClearColor,r.autoClearDepth,r.autoClearStencil),v&&(v.isCubeTexture||v.mapping===so)?(u===void 0&&(u=new Qt(new hi(1,1,1),new Zi({name:"BackgroundCubeMaterial",uniforms:Ls(Mi.backgroundCube.uniforms),vertexShader:Mi.backgroundCube.vertexShader,fragmentShader:Mi.backgroundCube.fragmentShader,side:Un,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(b,w,S){this.matrixWorld.copyPosition(S.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(u)),Lr.copy(m.backgroundRotation),Lr.x*=-1,Lr.y*=-1,Lr.z*=-1,v.isCubeTexture&&v.isRenderTargetTexture===!1&&(Lr.y*=-1,Lr.z*=-1),u.material.uniforms.envMap.value=v,u.material.uniforms.flipEnvMap.value=v.isCubeTexture&&v.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=m.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=m.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(rv.makeRotationFromEuler(Lr)),u.material.toneMapped=Lt.getTransfer(v.colorSpace)!==jt,(h!==v||d!==v.version||p!==r.toneMapping)&&(u.material.needsUpdate=!0,h=v,d=v.version,p=r.toneMapping),u.layers.enableAll(),f.unshift(u,u.geometry,u.material,0,0,null)):v&&v.isTexture&&(c===void 0&&(c=new Qt(new lo(2,2),new Zi({name:"BackgroundMaterial",uniforms:Ls(Mi.background.uniforms),vertexShader:Mi.background.vertexShader,fragmentShader:Mi.background.fragmentShader,side:$i,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(c)),c.material.uniforms.t2D.value=v,c.material.uniforms.backgroundIntensity.value=m.backgroundIntensity,c.material.toneMapped=Lt.getTransfer(v.colorSpace)!==jt,v.matrixAutoUpdate===!0&&v.updateMatrix(),c.material.uniforms.uvTransform.value.copy(v.matrix),(h!==v||d!==v.version||p!==r.toneMapping)&&(c.material.needsUpdate=!0,h=v,d=v.version,p=r.toneMapping),c.layers.enableAll(),f.unshift(c,c.geometry,c.material,0,0,null))}function _(f,m){f.getRGB(ka,ed(r)),n.buffers.color.setClear(ka.r,ka.g,ka.b,m,a)}return{getClearColor:function(){return o},setClearColor:function(f,m=1){o.set(f),l=m,_(o,l)},getClearAlpha:function(){return l},setClearAlpha:function(f){l=f,_(o,l)},render:g}}function av(r,e,t,n){const i=r.getParameter(r.MAX_VERTEX_ATTRIBS),s=n.isWebGL2?null:e.get("OES_vertex_array_object"),a=n.isWebGL2||s!==null,o={},l=f(null);let c=l,u=!1;function h(L,O,k,q,$){let K=!1;if(a){const se=_(q,k,O);c!==se&&(c=se,p(c.object)),K=m(L,q,k,$),K&&y(L,q,k,$)}else{const se=O.wireframe===!0;(c.geometry!==q.id||c.program!==k.id||c.wireframe!==se)&&(c.geometry=q.id,c.program=k.id,c.wireframe=se,K=!0)}$!==null&&t.update($,r.ELEMENT_ARRAY_BUFFER),(K||u)&&(u=!1,I(L,O,k,q),$!==null&&r.bindBuffer(r.ELEMENT_ARRAY_BUFFER,t.get($).buffer))}function d(){return n.isWebGL2?r.createVertexArray():s.createVertexArrayOES()}function p(L){return n.isWebGL2?r.bindVertexArray(L):s.bindVertexArrayOES(L)}function g(L){return n.isWebGL2?r.deleteVertexArray(L):s.deleteVertexArrayOES(L)}function _(L,O,k){const q=k.wireframe===!0;let $=o[L.id];$===void 0&&($={},o[L.id]=$);let K=$[O.id];K===void 0&&(K={},$[O.id]=K);let se=K[q];return se===void 0&&(se=f(d()),K[q]=se),se}function f(L){const O=[],k=[],q=[];for(let $=0;$<i;$++)O[$]=0,k[$]=0,q[$]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:O,enabledAttributes:k,attributeDivisors:q,object:L,attributes:{},index:null}}function m(L,O,k,q){const $=c.attributes,K=O.attributes;let se=0;const oe=k.getAttributes();for(const _e in oe)if(oe[_e].location>=0){const V=$[_e];let ie=K[_e];if(ie===void 0&&(_e==="instanceMatrix"&&L.instanceMatrix&&(ie=L.instanceMatrix),_e==="instanceColor"&&L.instanceColor&&(ie=L.instanceColor)),V===void 0||V.attribute!==ie||ie&&V.data!==ie.data)return!0;se++}return c.attributesNum!==se||c.index!==q}function y(L,O,k,q){const $={},K=O.attributes;let se=0;const oe=k.getAttributes();for(const _e in oe)if(oe[_e].location>=0){let V=K[_e];V===void 0&&(_e==="instanceMatrix"&&L.instanceMatrix&&(V=L.instanceMatrix),_e==="instanceColor"&&L.instanceColor&&(V=L.instanceColor));const ie={};ie.attribute=V,V&&V.data&&(ie.data=V.data),$[_e]=ie,se++}c.attributes=$,c.attributesNum=se,c.index=q}function v(){const L=c.newAttributes;for(let O=0,k=L.length;O<k;O++)L[O]=0}function A(L){b(L,0)}function b(L,O){const k=c.newAttributes,q=c.enabledAttributes,$=c.attributeDivisors;k[L]=1,q[L]===0&&(r.enableVertexAttribArray(L),q[L]=1),$[L]!==O&&((n.isWebGL2?r:e.get("ANGLE_instanced_arrays"))[n.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](L,O),$[L]=O)}function w(){const L=c.newAttributes,O=c.enabledAttributes;for(let k=0,q=O.length;k<q;k++)O[k]!==L[k]&&(r.disableVertexAttribArray(k),O[k]=0)}function S(L,O,k,q,$,K,se){se===!0?r.vertexAttribIPointer(L,O,k,$,K):r.vertexAttribPointer(L,O,k,q,$,K)}function I(L,O,k,q){if(n.isWebGL2===!1&&(L.isInstancedMesh||q.isInstancedBufferGeometry)&&e.get("ANGLE_instanced_arrays")===null)return;v();const $=q.attributes,K=k.getAttributes(),se=O.defaultAttributeValues;for(const oe in K){const _e=K[oe];if(_e.location>=0){let He=$[oe];if(He===void 0&&(oe==="instanceMatrix"&&L.instanceMatrix&&(He=L.instanceMatrix),oe==="instanceColor"&&L.instanceColor&&(He=L.instanceColor)),He!==void 0){const V=He.normalized,ie=He.itemSize,Me=t.get(He);if(Me===void 0)continue;const We=Me.buffer,Te=Me.type,Ee=Me.bytesPerElement,Mt=n.isWebGL2===!0&&(Te===r.INT||Te===r.UNSIGNED_INT||He.gpuType===Dh);if(He.isInterleavedBufferAttribute){const Ye=He.data,F=Ye.stride,Ft=He.offset;if(Ye.isInstancedInterleavedBuffer){for(let Pe=0;Pe<_e.locationSize;Pe++)b(_e.location+Pe,Ye.meshPerAttribute);L.isInstancedMesh!==!0&&q._maxInstanceCount===void 0&&(q._maxInstanceCount=Ye.meshPerAttribute*Ye.count)}else for(let Pe=0;Pe<_e.locationSize;Pe++)A(_e.location+Pe);r.bindBuffer(r.ARRAY_BUFFER,We);for(let Pe=0;Pe<_e.locationSize;Pe++)S(_e.location+Pe,ie/_e.locationSize,Te,V,F*Ee,(Ft+ie/_e.locationSize*Pe)*Ee,Mt)}else{if(He.isInstancedBufferAttribute){for(let Ye=0;Ye<_e.locationSize;Ye++)b(_e.location+Ye,He.meshPerAttribute);L.isInstancedMesh!==!0&&q._maxInstanceCount===void 0&&(q._maxInstanceCount=He.meshPerAttribute*He.count)}else for(let Ye=0;Ye<_e.locationSize;Ye++)A(_e.location+Ye);r.bindBuffer(r.ARRAY_BUFFER,We);for(let Ye=0;Ye<_e.locationSize;Ye++)S(_e.location+Ye,ie/_e.locationSize,Te,V,ie*Ee,ie/_e.locationSize*Ye*Ee,Mt)}}else if(se!==void 0){const V=se[oe];if(V!==void 0)switch(V.length){case 2:r.vertexAttrib2fv(_e.location,V);break;case 3:r.vertexAttrib3fv(_e.location,V);break;case 4:r.vertexAttrib4fv(_e.location,V);break;default:r.vertexAttrib1fv(_e.location,V)}}}}w()}function D(){U();for(const L in o){const O=o[L];for(const k in O){const q=O[k];for(const $ in q)g(q[$].object),delete q[$];delete O[k]}delete o[L]}}function x(L){if(o[L.id]===void 0)return;const O=o[L.id];for(const k in O){const q=O[k];for(const $ in q)g(q[$].object),delete q[$];delete O[k]}delete o[L.id]}function E(L){for(const O in o){const k=o[O];if(k[L.id]===void 0)continue;const q=k[L.id];for(const $ in q)g(q[$].object),delete q[$];delete k[L.id]}}function U(){Y(),u=!0,c!==l&&(c=l,p(c.object))}function Y(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:h,reset:U,resetDefaultState:Y,dispose:D,releaseStatesOfGeometry:x,releaseStatesOfProgram:E,initAttributes:v,enableAttribute:A,disableUnusedAttributes:w}}function ov(r,e,t,n){const i=n.isWebGL2;let s;function a(u){s=u}function o(u,h){r.drawArrays(s,u,h),t.update(h,s,1)}function l(u,h,d){if(d===0)return;let p,g;if(i)p=r,g="drawArraysInstanced";else if(p=e.get("ANGLE_instanced_arrays"),g="drawArraysInstancedANGLE",p===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}p[g](s,u,h,d),t.update(h,s,d)}function c(u,h,d){if(d===0)return;const p=e.get("WEBGL_multi_draw");if(p===null)for(let g=0;g<d;g++)this.render(u[g],h[g]);else{p.multiDrawArraysWEBGL(s,u,0,h,0,d);let g=0;for(let _=0;_<d;_++)g+=h[_];t.update(g,s,1)}}this.setMode=a,this.render=o,this.renderInstances=l,this.renderMultiDraw=c}function lv(r,e,t){let n;function i(){if(n!==void 0)return n;if(e.has("EXT_texture_filter_anisotropic")===!0){const S=e.get("EXT_texture_filter_anisotropic");n=r.getParameter(S.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else n=0;return n}function s(S){if(S==="highp"){if(r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.HIGH_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.HIGH_FLOAT).precision>0)return"highp";S="mediump"}return S==="mediump"&&r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.MEDIUM_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}const a=typeof WebGL2RenderingContext<"u"&&r.constructor.name==="WebGL2RenderingContext";let o=t.precision!==void 0?t.precision:"highp";const l=s(o);l!==o&&(console.warn("THREE.WebGLRenderer:",o,"not supported, using",l,"instead."),o=l);const c=a||e.has("WEBGL_draw_buffers"),u=t.logarithmicDepthBuffer===!0,h=r.getParameter(r.MAX_TEXTURE_IMAGE_UNITS),d=r.getParameter(r.MAX_VERTEX_TEXTURE_IMAGE_UNITS),p=r.getParameter(r.MAX_TEXTURE_SIZE),g=r.getParameter(r.MAX_CUBE_MAP_TEXTURE_SIZE),_=r.getParameter(r.MAX_VERTEX_ATTRIBS),f=r.getParameter(r.MAX_VERTEX_UNIFORM_VECTORS),m=r.getParameter(r.MAX_VARYING_VECTORS),y=r.getParameter(r.MAX_FRAGMENT_UNIFORM_VECTORS),v=d>0,A=a||e.has("OES_texture_float"),b=v&&A,w=a?r.getParameter(r.MAX_SAMPLES):0;return{isWebGL2:a,drawBuffers:c,getMaxAnisotropy:i,getMaxPrecision:s,precision:o,logarithmicDepthBuffer:u,maxTextures:h,maxVertexTextures:d,maxTextureSize:p,maxCubemapSize:g,maxAttributes:_,maxVertexUniforms:f,maxVaryings:m,maxFragmentUniforms:y,vertexTextures:v,floatFragmentTextures:A,floatVertexTextures:b,maxSamples:w}}function cv(r){const e=this;let t=null,n=0,i=!1,s=!1;const a=new Nr,o=new pt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(h,d){const p=h.length!==0||d||n!==0||i;return i=d,n=h.length,p},this.beginShadows=function(){s=!0,u(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(h,d){t=u(h,d,0)},this.setState=function(h,d,p){const g=h.clippingPlanes,_=h.clipIntersection,f=h.clipShadows,m=r.get(h);if(!i||g===null||g.length===0||s&&!f)s?u(null):c();else{const y=s?0:n,v=y*4;let A=m.clippingState||null;l.value=A,A=u(g,d,v,p);for(let b=0;b!==v;++b)A[b]=t[b];m.clippingState=A,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=y}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function u(h,d,p,g){const _=h!==null?h.length:0;let f=null;if(_!==0){if(f=l.value,g!==!0||f===null){const m=p+_*4,y=d.matrixWorldInverse;o.getNormalMatrix(y),(f===null||f.length<m)&&(f=new Float32Array(m));for(let v=0,A=p;v!==_;++v,A+=4)a.copy(h[v]).applyMatrix4(y,o),a.normal.toArray(f,A),f[A+3]=a.constant}l.value=f,l.needsUpdate=!0}return e.numPlanes=_,e.numIntersection=0,f}}function uv(r){let e=new WeakMap;function t(a,o){return o===Tl?a.mapping=bs:o===Al&&(a.mapping=Ts),a}function n(a){if(a&&a.isTexture){const o=a.mapping;if(o===Tl||o===Al)if(e.has(a)){const l=e.get(a).texture;return t(l,a.mapping)}else{const l=a.image;if(l&&l.height>0){const c=new Mm(l.height);return c.fromEquirectangularTexture(r,a),e.set(a,c),a.addEventListener("dispose",i),t(c.texture,a.mapping)}else return null}}return a}function i(a){const o=a.target;o.removeEventListener("dispose",i);const l=e.get(o);l!==void 0&&(e.delete(o),l.dispose())}function s(){e=new WeakMap}return{get:n,dispose:s}}class Kl extends jl{constructor(e=-1,t=1,n=1,i=-1,s=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=i,this.near=s,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,i,s,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2;let s=n-e,a=n+e,o=i+t,l=i-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,a=s+c*this.view.width,o-=u*this.view.offsetY,l=o-u*this.view.height}this.projectionMatrix.makeOrthographic(s,a,o,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const _s=4,Cu=[.125,.215,.35,.446,.526,.582],Or=20,el=new Kl,Lu=new Qe;let tl=null,nl=0,il=0;const Ur=(1+Math.sqrt(5))/2,ds=1/Ur,Pu=[new P(1,1,1),new P(-1,1,1),new P(1,1,-1),new P(-1,1,-1),new P(0,Ur,ds),new P(0,Ur,-ds),new P(ds,0,Ur),new P(-ds,0,Ur),new P(Ur,ds,0),new P(-Ur,ds,0)];class Iu{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,i=100){tl=this._renderer.getRenderTarget(),nl=this._renderer.getActiveCubeFace(),il=this._renderer.getActiveMipmapLevel(),this._setSize(256);const s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(e,n,i,s),t>0&&this._blur(s,0,0,t),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Uu(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Nu(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(tl,nl,il),e.scissorTest=!1,za(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===bs||e.mapping===Ts?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),tl=this._renderer.getRenderTarget(),nl=this._renderer.getActiveCubeFace(),il=this._renderer.getActiveMipmapLevel();const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:wn,minFilter:wn,generateMipmaps:!1,type:ua,format:ai,colorSpace:Sn,depthBuffer:!1},i=Du(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Du(e,t,n);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=hv(s)),this._blurMaterial=dv(s,e,t)}return i}_compileMaterial(e){const t=new Qt(this._lodPlanes[0],e);this._renderer.compile(t,el)}_sceneToCubeUV(e,t,n,i){const o=new Nn(90,1,t,n),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],u=this._renderer,h=u.autoClear,d=u.toneMapping;u.getClearColor(Lu),u.toneMapping=_r,u.autoClear=!1;const p=new Br({name:"PMREM.Background",side:Un,depthWrite:!1,depthTest:!1}),g=new Qt(new hi,p);let _=!1;const f=e.background;f?f.isColor&&(p.color.copy(f),e.background=null,_=!0):(p.color.copy(Lu),_=!0);for(let m=0;m<6;m++){const y=m%3;y===0?(o.up.set(0,l[m],0),o.lookAt(c[m],0,0)):y===1?(o.up.set(0,0,l[m]),o.lookAt(0,c[m],0)):(o.up.set(0,l[m],0),o.lookAt(0,0,c[m]));const v=this._cubeSize;za(i,y*v,m>2?v:0,v,v),u.setRenderTarget(i),_&&u.render(g,o),u.render(e,o)}g.geometry.dispose(),g.material.dispose(),u.toneMapping=d,u.autoClear=h,e.background=f}_textureToCubeUV(e,t){const n=this._renderer,i=e.mapping===bs||e.mapping===Ts;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=Uu()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Nu());const s=i?this._cubemapMaterial:this._equirectMaterial,a=new Qt(this._lodPlanes[0],s),o=s.uniforms;o.envMap.value=e;const l=this._cubeSize;za(t,0,0,3*l,2*l),n.setRenderTarget(t),n.render(a,el)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;for(let i=1;i<this._lodPlanes.length;i++){const s=Math.sqrt(this._sigmas[i]*this._sigmas[i]-this._sigmas[i-1]*this._sigmas[i-1]),a=Pu[(i-1)%Pu.length];this._blur(e,i-1,i,s,a)}t.autoClear=n}_blur(e,t,n,i,s){const a=this._pingPongRenderTarget;this._halfBlur(e,a,t,n,i,"latitudinal",s),this._halfBlur(a,e,n,n,i,"longitudinal",s)}_halfBlur(e,t,n,i,s,a,o){const l=this._renderer,c=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,h=new Qt(this._lodPlanes[i],c),d=c.uniforms,p=this._sizeLods[n]-1,g=isFinite(s)?Math.PI/(2*p):2*Math.PI/(2*Or-1),_=s/g,f=isFinite(s)?1+Math.floor(u*_):Or;f>Or&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${f} samples when the maximum is set to ${Or}`);const m=[];let y=0;for(let S=0;S<Or;++S){const I=S/_,D=Math.exp(-I*I/2);m.push(D),S===0?y+=D:S<f&&(y+=2*D)}for(let S=0;S<m.length;S++)m[S]=m[S]/y;d.envMap.value=e.texture,d.samples.value=f,d.weights.value=m,d.latitudinal.value=a==="latitudinal",o&&(d.poleAxis.value=o);const{_lodMax:v}=this;d.dTheta.value=g,d.mipInt.value=v-n;const A=this._sizeLods[i],b=3*A*(i>v-_s?i-v+_s:0),w=4*(this._cubeSize-A);za(t,b,w,3*A,2*A),l.setRenderTarget(t),l.render(h,el)}}function hv(r){const e=[],t=[],n=[];let i=r;const s=r-_s+1+Cu.length;for(let a=0;a<s;a++){const o=Math.pow(2,i);t.push(o);let l=1/o;a>r-_s?l=Cu[a-r+_s-1]:a===0&&(l=0),n.push(l);const c=1/(o-2),u=-c,h=1+c,d=[u,u,h,u,h,h,u,u,h,h,u,h],p=6,g=6,_=3,f=2,m=1,y=new Float32Array(_*g*p),v=new Float32Array(f*g*p),A=new Float32Array(m*g*p);for(let w=0;w<p;w++){const S=w%3*2/3-1,I=w>2?0:-1,D=[S,I,0,S+2/3,I,0,S+2/3,I+1,0,S,I,0,S+2/3,I+1,0,S,I+1,0];y.set(D,_*g*w),v.set(d,f*g*w);const x=[w,w,w,w,w,w];A.set(x,m*g*w)}const b=new Fn;b.setAttribute("position",new hn(y,_)),b.setAttribute("uv",new hn(v,f)),b.setAttribute("faceIndex",new hn(A,m)),e.push(b),i>_s&&i--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function Du(r,e,t){const n=new Gr(r,e,t);return n.texture.mapping=so,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function za(r,e,t,n,i){r.viewport.set(e,t,n,i),r.scissor.set(e,t,n,i)}function dv(r,e,t){const n=new Float32Array(Or),i=new P(0,1,0);return new Zi({name:"SphericalGaussianBlur",defines:{n:Or,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${r}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:i}},vertexShader:$l(),fragmentShader:`

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
		`,blending:gr,depthTest:!1,depthWrite:!1})}function Nu(){return new Zi({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:$l(),fragmentShader:`

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
		`,blending:gr,depthTest:!1,depthWrite:!1})}function Uu(){return new Zi({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:$l(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:gr,depthTest:!1,depthWrite:!1})}function $l(){return`

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
	`}function fv(r){let e=new WeakMap,t=null;function n(o){if(o&&o.isTexture){const l=o.mapping,c=l===Tl||l===Al,u=l===bs||l===Ts;if(c||u)if(o.isRenderTargetTexture&&o.needsPMREMUpdate===!0){o.needsPMREMUpdate=!1;let h=e.get(o);return t===null&&(t=new Iu(r)),h=c?t.fromEquirectangular(o,h):t.fromCubemap(o,h),e.set(o,h),h.texture}else{if(e.has(o))return e.get(o).texture;{const h=o.image;if(c&&h&&h.height>0||u&&h&&i(h)){t===null&&(t=new Iu(r));const d=c?t.fromEquirectangular(o):t.fromCubemap(o);return e.set(o,d),o.addEventListener("dispose",s),d.texture}else return null}}}return o}function i(o){let l=0;const c=6;for(let u=0;u<c;u++)o[u]!==void 0&&l++;return l===c}function s(o){const l=o.target;l.removeEventListener("dispose",s);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function a(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:a}}function pv(r){const e={};function t(n){if(e[n]!==void 0)return e[n];let i;switch(n){case"WEBGL_depth_texture":i=r.getExtension("WEBGL_depth_texture")||r.getExtension("MOZ_WEBGL_depth_texture")||r.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":i=r.getExtension("EXT_texture_filter_anisotropic")||r.getExtension("MOZ_EXT_texture_filter_anisotropic")||r.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":i=r.getExtension("WEBGL_compressed_texture_s3tc")||r.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||r.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":i=r.getExtension("WEBGL_compressed_texture_pvrtc")||r.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:i=r.getExtension(n)}return e[n]=i,i}return{has:function(n){return t(n)!==null},init:function(n){n.isWebGL2?(t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance")):(t("WEBGL_depth_texture"),t("OES_texture_float"),t("OES_texture_half_float"),t("OES_texture_half_float_linear"),t("OES_standard_derivatives"),t("OES_element_index_uint"),t("OES_vertex_array_object"),t("ANGLE_instanced_arrays")),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture")},get:function(n){const i=t(n);return i===null&&console.warn("THREE.WebGLRenderer: "+n+" extension not supported."),i}}}function mv(r,e,t,n){const i={},s=new WeakMap;function a(h){const d=h.target;d.index!==null&&e.remove(d.index);for(const g in d.attributes)e.remove(d.attributes[g]);for(const g in d.morphAttributes){const _=d.morphAttributes[g];for(let f=0,m=_.length;f<m;f++)e.remove(_[f])}d.removeEventListener("dispose",a),delete i[d.id];const p=s.get(d);p&&(e.remove(p),s.delete(d)),n.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,t.memory.geometries--}function o(h,d){return i[d.id]===!0||(d.addEventListener("dispose",a),i[d.id]=!0,t.memory.geometries++),d}function l(h){const d=h.attributes;for(const g in d)e.update(d[g],r.ARRAY_BUFFER);const p=h.morphAttributes;for(const g in p){const _=p[g];for(let f=0,m=_.length;f<m;f++)e.update(_[f],r.ARRAY_BUFFER)}}function c(h){const d=[],p=h.index,g=h.attributes.position;let _=0;if(p!==null){const y=p.array;_=p.version;for(let v=0,A=y.length;v<A;v+=3){const b=y[v+0],w=y[v+1],S=y[v+2];d.push(b,w,w,S,S,b)}}else if(g!==void 0){const y=g.array;_=g.version;for(let v=0,A=y.length/3-1;v<A;v+=3){const b=v+0,w=v+1,S=v+2;d.push(b,w,w,S,S,b)}}else return;const f=new(Xh(d)?Qh:Jh)(d,1);f.version=_;const m=s.get(h);m&&e.remove(m),s.set(h,f)}function u(h){const d=s.get(h);if(d){const p=h.index;p!==null&&d.version<p.version&&c(h)}else c(h);return s.get(h)}return{get:o,update:l,getWireframeAttribute:u}}function gv(r,e,t,n){const i=n.isWebGL2;let s;function a(p){s=p}let o,l;function c(p){o=p.type,l=p.bytesPerElement}function u(p,g){r.drawElements(s,g,o,p*l),t.update(g,s,1)}function h(p,g,_){if(_===0)return;let f,m;if(i)f=r,m="drawElementsInstanced";else if(f=e.get("ANGLE_instanced_arrays"),m="drawElementsInstancedANGLE",f===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}f[m](s,g,o,p*l,_),t.update(g,s,_)}function d(p,g,_){if(_===0)return;const f=e.get("WEBGL_multi_draw");if(f===null)for(let m=0;m<_;m++)this.render(p[m]/l,g[m]);else{f.multiDrawElementsWEBGL(s,g,0,o,p,0,_);let m=0;for(let y=0;y<_;y++)m+=g[y];t.update(m,s,1)}}this.setMode=a,this.setIndex=c,this.render=u,this.renderInstances=h,this.renderMultiDraw=d}function _v(r){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(s,a,o){switch(t.calls++,a){case r.TRIANGLES:t.triangles+=o*(s/3);break;case r.LINES:t.lines+=o*(s/2);break;case r.LINE_STRIP:t.lines+=o*(s-1);break;case r.LINE_LOOP:t.lines+=o*s;break;case r.POINTS:t.points+=o*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function i(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:i,update:n}}function vv(r,e){return r[0]-e[0]}function xv(r,e){return Math.abs(e[1])-Math.abs(r[1])}function Mv(r,e,t){const n={},i=new Float32Array(8),s=new WeakMap,a=new Ht,o=[];for(let c=0;c<8;c++)o[c]=[c,0];function l(c,u,h){const d=c.morphTargetInfluences;if(e.isWebGL2===!0){const p=u.morphAttributes.position||u.morphAttributes.normal||u.morphAttributes.color,g=p!==void 0?p.length:0;let _=s.get(u);if(_===void 0||_.count!==g){let U=function(){x.dispose(),s.delete(u),u.removeEventListener("dispose",U)};_!==void 0&&_.texture.dispose();const f=u.morphAttributes.position!==void 0,m=u.morphAttributes.normal!==void 0,y=u.morphAttributes.color!==void 0,v=u.morphAttributes.position||[],A=u.morphAttributes.normal||[],b=u.morphAttributes.color||[];let w=0;f===!0&&(w=1),m===!0&&(w=2),y===!0&&(w=3);let S=u.attributes.position.count*w,I=1;S>e.maxTextureSize&&(I=Math.ceil(S/e.maxTextureSize),S=e.maxTextureSize);const D=new Float32Array(S*I*4*g),x=new Kh(D,S,I,g);x.type=fi,x.needsUpdate=!0;const E=w*4;for(let Y=0;Y<g;Y++){const L=v[Y],O=A[Y],k=b[Y],q=S*I*4*Y;for(let $=0;$<L.count;$++){const K=$*E;f===!0&&(a.fromBufferAttribute(L,$),D[q+K+0]=a.x,D[q+K+1]=a.y,D[q+K+2]=a.z,D[q+K+3]=0),m===!0&&(a.fromBufferAttribute(O,$),D[q+K+4]=a.x,D[q+K+5]=a.y,D[q+K+6]=a.z,D[q+K+7]=0),y===!0&&(a.fromBufferAttribute(k,$),D[q+K+8]=a.x,D[q+K+9]=a.y,D[q+K+10]=a.z,D[q+K+11]=k.itemSize===4?a.w:1)}}_={count:g,texture:x,size:new Se(S,I)},s.set(u,_),u.addEventListener("dispose",U)}if(c.isInstancedMesh===!0&&c.morphTexture!==null)h.getUniforms().setValue(r,"morphTexture",c.morphTexture,t);else{let f=0;for(let y=0;y<d.length;y++)f+=d[y];const m=u.morphTargetsRelative?1:1-f;h.getUniforms().setValue(r,"morphTargetBaseInfluence",m),h.getUniforms().setValue(r,"morphTargetInfluences",d)}h.getUniforms().setValue(r,"morphTargetsTexture",_.texture,t),h.getUniforms().setValue(r,"morphTargetsTextureSize",_.size)}else{const p=d===void 0?0:d.length;let g=n[u.id];if(g===void 0||g.length!==p){g=[];for(let v=0;v<p;v++)g[v]=[v,0];n[u.id]=g}for(let v=0;v<p;v++){const A=g[v];A[0]=v,A[1]=d[v]}g.sort(xv);for(let v=0;v<8;v++)v<p&&g[v][1]?(o[v][0]=g[v][0],o[v][1]=g[v][1]):(o[v][0]=Number.MAX_SAFE_INTEGER,o[v][1]=0);o.sort(vv);const _=u.morphAttributes.position,f=u.morphAttributes.normal;let m=0;for(let v=0;v<8;v++){const A=o[v],b=A[0],w=A[1];b!==Number.MAX_SAFE_INTEGER&&w?(_&&u.getAttribute("morphTarget"+v)!==_[b]&&u.setAttribute("morphTarget"+v,_[b]),f&&u.getAttribute("morphNormal"+v)!==f[b]&&u.setAttribute("morphNormal"+v,f[b]),i[v]=w,m+=w):(_&&u.hasAttribute("morphTarget"+v)===!0&&u.deleteAttribute("morphTarget"+v),f&&u.hasAttribute("morphNormal"+v)===!0&&u.deleteAttribute("morphNormal"+v),i[v]=0)}const y=u.morphTargetsRelative?1:1-m;h.getUniforms().setValue(r,"morphTargetBaseInfluence",y),h.getUniforms().setValue(r,"morphTargetInfluences",i)}}return{update:l}}function yv(r,e,t,n){let i=new WeakMap;function s(l){const c=n.render.frame,u=l.geometry,h=e.get(l,u);if(i.get(h)!==c&&(e.update(h),i.set(h,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",o)===!1&&l.addEventListener("dispose",o),i.get(l)!==c&&(t.update(l.instanceMatrix,r.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,r.ARRAY_BUFFER),i.set(l,c))),l.isSkinnedMesh){const d=l.skeleton;i.get(d)!==c&&(d.update(),i.set(d,c))}return h}function a(){i=new WeakMap}function o(l){const c=l.target;c.removeEventListener("dispose",o),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:s,dispose:a}}class id extends xn{constructor(e,t,n,i,s,a,o,l,c,u){if(u=u!==void 0?u:zr,u!==zr&&u!==ws)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&u===zr&&(n=pr),n===void 0&&u===ws&&(n=kr),super(null,i,s,a,o,l,u,n,c),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=o!==void 0?o:vn,this.minFilter=l!==void 0?l:vn,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}const rd=new xn,sd=new id(1,1);sd.compareFunction=Vh;const ad=new Kh,od=new im,ld=new td,Fu=[],Ou=[],Bu=new Float32Array(16),ku=new Float32Array(9),zu=new Float32Array(4);function Fs(r,e,t){const n=r[0];if(n<=0||n>0)return r;const i=e*t;let s=Fu[i];if(s===void 0&&(s=new Float32Array(i),Fu[i]=s),e!==0){n.toArray(s,0);for(let a=1,o=0;a!==e;++a)o+=t,r[a].toArray(s,o)}return s}function dn(r,e){if(r.length!==e.length)return!1;for(let t=0,n=r.length;t<n;t++)if(r[t]!==e[t])return!1;return!0}function fn(r,e){for(let t=0,n=e.length;t<n;t++)r[t]=e[t]}function co(r,e){let t=Ou[e];t===void 0&&(t=new Int32Array(e),Ou[e]=t);for(let n=0;n!==e;++n)t[n]=r.allocateTextureUnit();return t}function Sv(r,e){const t=this.cache;t[0]!==e&&(r.uniform1f(this.addr,e),t[0]=e)}function Ev(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(dn(t,e))return;r.uniform2fv(this.addr,e),fn(t,e)}}function bv(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(r.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(dn(t,e))return;r.uniform3fv(this.addr,e),fn(t,e)}}function Tv(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(dn(t,e))return;r.uniform4fv(this.addr,e),fn(t,e)}}function Av(r,e){const t=this.cache,n=e.elements;if(n===void 0){if(dn(t,e))return;r.uniformMatrix2fv(this.addr,!1,e),fn(t,e)}else{if(dn(t,n))return;zu.set(n),r.uniformMatrix2fv(this.addr,!1,zu),fn(t,n)}}function wv(r,e){const t=this.cache,n=e.elements;if(n===void 0){if(dn(t,e))return;r.uniformMatrix3fv(this.addr,!1,e),fn(t,e)}else{if(dn(t,n))return;ku.set(n),r.uniformMatrix3fv(this.addr,!1,ku),fn(t,n)}}function Rv(r,e){const t=this.cache,n=e.elements;if(n===void 0){if(dn(t,e))return;r.uniformMatrix4fv(this.addr,!1,e),fn(t,e)}else{if(dn(t,n))return;Bu.set(n),r.uniformMatrix4fv(this.addr,!1,Bu),fn(t,n)}}function Cv(r,e){const t=this.cache;t[0]!==e&&(r.uniform1i(this.addr,e),t[0]=e)}function Lv(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(dn(t,e))return;r.uniform2iv(this.addr,e),fn(t,e)}}function Pv(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(dn(t,e))return;r.uniform3iv(this.addr,e),fn(t,e)}}function Iv(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(dn(t,e))return;r.uniform4iv(this.addr,e),fn(t,e)}}function Dv(r,e){const t=this.cache;t[0]!==e&&(r.uniform1ui(this.addr,e),t[0]=e)}function Nv(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(dn(t,e))return;r.uniform2uiv(this.addr,e),fn(t,e)}}function Uv(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(dn(t,e))return;r.uniform3uiv(this.addr,e),fn(t,e)}}function Fv(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(dn(t,e))return;r.uniform4uiv(this.addr,e),fn(t,e)}}function Ov(r,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i);const s=this.type===r.SAMPLER_2D_SHADOW?sd:rd;t.setTexture2D(e||s,i)}function Bv(r,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),t.setTexture3D(e||od,i)}function kv(r,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),t.setTextureCube(e||ld,i)}function zv(r,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),t.setTexture2DArray(e||ad,i)}function Gv(r){switch(r){case 5126:return Sv;case 35664:return Ev;case 35665:return bv;case 35666:return Tv;case 35674:return Av;case 35675:return wv;case 35676:return Rv;case 5124:case 35670:return Cv;case 35667:case 35671:return Lv;case 35668:case 35672:return Pv;case 35669:case 35673:return Iv;case 5125:return Dv;case 36294:return Nv;case 36295:return Uv;case 36296:return Fv;case 35678:case 36198:case 36298:case 36306:case 35682:return Ov;case 35679:case 36299:case 36307:return Bv;case 35680:case 36300:case 36308:case 36293:return kv;case 36289:case 36303:case 36311:case 36292:return zv}}function Hv(r,e){r.uniform1fv(this.addr,e)}function Vv(r,e){const t=Fs(e,this.size,2);r.uniform2fv(this.addr,t)}function Wv(r,e){const t=Fs(e,this.size,3);r.uniform3fv(this.addr,t)}function Xv(r,e){const t=Fs(e,this.size,4);r.uniform4fv(this.addr,t)}function qv(r,e){const t=Fs(e,this.size,4);r.uniformMatrix2fv(this.addr,!1,t)}function jv(r,e){const t=Fs(e,this.size,9);r.uniformMatrix3fv(this.addr,!1,t)}function Yv(r,e){const t=Fs(e,this.size,16);r.uniformMatrix4fv(this.addr,!1,t)}function Kv(r,e){r.uniform1iv(this.addr,e)}function $v(r,e){r.uniform2iv(this.addr,e)}function Zv(r,e){r.uniform3iv(this.addr,e)}function Jv(r,e){r.uniform4iv(this.addr,e)}function Qv(r,e){r.uniform1uiv(this.addr,e)}function e0(r,e){r.uniform2uiv(this.addr,e)}function t0(r,e){r.uniform3uiv(this.addr,e)}function n0(r,e){r.uniform4uiv(this.addr,e)}function i0(r,e,t){const n=this.cache,i=e.length,s=co(t,i);dn(n,s)||(r.uniform1iv(this.addr,s),fn(n,s));for(let a=0;a!==i;++a)t.setTexture2D(e[a]||rd,s[a])}function r0(r,e,t){const n=this.cache,i=e.length,s=co(t,i);dn(n,s)||(r.uniform1iv(this.addr,s),fn(n,s));for(let a=0;a!==i;++a)t.setTexture3D(e[a]||od,s[a])}function s0(r,e,t){const n=this.cache,i=e.length,s=co(t,i);dn(n,s)||(r.uniform1iv(this.addr,s),fn(n,s));for(let a=0;a!==i;++a)t.setTextureCube(e[a]||ld,s[a])}function a0(r,e,t){const n=this.cache,i=e.length,s=co(t,i);dn(n,s)||(r.uniform1iv(this.addr,s),fn(n,s));for(let a=0;a!==i;++a)t.setTexture2DArray(e[a]||ad,s[a])}function o0(r){switch(r){case 5126:return Hv;case 35664:return Vv;case 35665:return Wv;case 35666:return Xv;case 35674:return qv;case 35675:return jv;case 35676:return Yv;case 5124:case 35670:return Kv;case 35667:case 35671:return $v;case 35668:case 35672:return Zv;case 35669:case 35673:return Jv;case 5125:return Qv;case 36294:return e0;case 36295:return t0;case 36296:return n0;case 35678:case 36198:case 36298:case 36306:case 35682:return i0;case 35679:case 36299:case 36307:return r0;case 35680:case 36300:case 36308:case 36293:return s0;case 36289:case 36303:case 36311:case 36292:return a0}}class l0{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=Gv(t.type)}}class c0{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=o0(t.type)}}class u0{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const i=this.seq;for(let s=0,a=i.length;s!==a;++s){const o=i[s];o.setValue(e,t[o.id],n)}}}const rl=/(\w+)(\])?(\[|\.)?/g;function Gu(r,e){r.seq.push(e),r.map[e.id]=e}function h0(r,e,t){const n=r.name,i=n.length;for(rl.lastIndex=0;;){const s=rl.exec(n),a=rl.lastIndex;let o=s[1];const l=s[2]==="]",c=s[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===i){Gu(t,c===void 0?new l0(o,r,e):new c0(o,r,e));break}else{let h=t.map[o];h===void 0&&(h=new u0(o),Gu(t,h)),t=h}}}class Za{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let i=0;i<n;++i){const s=e.getActiveUniform(t,i),a=e.getUniformLocation(t,s.name);h0(s,a,this)}}setValue(e,t,n,i){const s=this.map[t];s!==void 0&&s.setValue(e,n,i)}setOptional(e,t,n){const i=t[n];i!==void 0&&this.setValue(e,n,i)}static upload(e,t,n,i){for(let s=0,a=t.length;s!==a;++s){const o=t[s],l=n[o.id];l.needsUpdate!==!1&&o.setValue(e,l.value,i)}}static seqWithValue(e,t){const n=[];for(let i=0,s=e.length;i!==s;++i){const a=e[i];a.id in t&&n.push(a)}return n}}function Hu(r,e,t){const n=r.createShader(e);return r.shaderSource(n,t),r.compileShader(n),n}const d0=37297;let f0=0;function p0(r,e){const t=r.split(`
`),n=[],i=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let a=i;a<s;a++){const o=a+1;n.push(`${o===e?">":" "} ${o}: ${t[a]}`)}return n.join(`
`)}function m0(r){const e=Lt.getPrimaries(Lt.workingColorSpace),t=Lt.getPrimaries(r);let n;switch(e===t?n="":e===no&&t===to?n="LinearDisplayP3ToLinearSRGB":e===to&&t===no&&(n="LinearSRGBToLinearDisplayP3"),r){case Sn:case ao:return[n,"LinearTransferOETF"];case Dn:case Xl:return[n,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",r),[n,"LinearTransferOETF"]}}function Vu(r,e,t){const n=r.getShaderParameter(e,r.COMPILE_STATUS),i=r.getShaderInfoLog(e).trim();if(n&&i==="")return"";const s=/ERROR: 0:(\d+)/.exec(i);if(s){const a=parseInt(s[1]);return t.toUpperCase()+`

`+i+`

`+p0(r.getShaderSource(e),a)}else return i}function g0(r,e){const t=m0(e);return`vec4 ${r}( vec4 value ) { return ${t[0]}( ${t[1]}( value ) ); }`}function _0(r,e){let t;switch(e){case hp:t="Linear";break;case dp:t="Reinhard";break;case fp:t="OptimizedCineon";break;case pp:t="ACESFilmic";break;case gp:t="AgX";break;case _p:t="Neutral";break;case mp:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+r+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}function v0(r){return[r.extensionDerivatives||r.envMapCubeUVHeight||r.bumpMap||r.normalMapTangentSpace||r.clearcoatNormalMap||r.flatShading||r.alphaToCoverage||r.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(r.extensionFragDepth||r.logarithmicDepthBuffer)&&r.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",r.extensionDrawBuffers&&r.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(r.extensionShaderTextureLOD||r.envMap||r.transmission)&&r.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(vs).join(`
`)}function x0(r){return[r.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",r.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(vs).join(`
`)}function M0(r){const e=[];for(const t in r){const n=r[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function y0(r,e){const t={},n=r.getProgramParameter(e,r.ACTIVE_ATTRIBUTES);for(let i=0;i<n;i++){const s=r.getActiveAttrib(e,i),a=s.name;let o=1;s.type===r.FLOAT_MAT2&&(o=2),s.type===r.FLOAT_MAT3&&(o=3),s.type===r.FLOAT_MAT4&&(o=4),t[a]={type:s.type,location:r.getAttribLocation(e,a),locationSize:o}}return t}function vs(r){return r!==""}function Wu(r,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return r.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Xu(r,e){return r.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const S0=/^[ \t]*#include +<([\w\d./]+)>/gm;function Il(r){return r.replace(S0,b0)}const E0=new Map([["encodings_fragment","colorspace_fragment"],["encodings_pars_fragment","colorspace_pars_fragment"],["output_fragment","opaque_fragment"]]);function b0(r,e){let t=dt[e];if(t===void 0){const n=E0.get(e);if(n!==void 0)t=dt[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return Il(t)}const T0=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function qu(r){return r.replace(T0,A0)}function A0(r,e,t,n){let i="";for(let s=parseInt(e);s<parseInt(t);s++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return i}function ju(r){let e=`precision ${r.precision} float;
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
#define LOW_PRECISION`),e}function w0(r){let e="SHADOWMAP_TYPE_BASIC";return r.shadowMapType===Lh?e="SHADOWMAP_TYPE_PCF":r.shadowMapType===kf?e="SHADOWMAP_TYPE_PCF_SOFT":r.shadowMapType===qi&&(e="SHADOWMAP_TYPE_VSM"),e}function R0(r){let e="ENVMAP_TYPE_CUBE";if(r.envMap)switch(r.envMapMode){case bs:case Ts:e="ENVMAP_TYPE_CUBE";break;case so:e="ENVMAP_TYPE_CUBE_UV";break}return e}function C0(r){let e="ENVMAP_MODE_REFLECTION";return r.envMap&&r.envMapMode===Ts&&(e="ENVMAP_MODE_REFRACTION"),e}function L0(r){let e="ENVMAP_BLENDING_NONE";if(r.envMap)switch(r.combine){case Ph:e="ENVMAP_BLENDING_MULTIPLY";break;case cp:e="ENVMAP_BLENDING_MIX";break;case up:e="ENVMAP_BLENDING_ADD";break}return e}function P0(r){const e=r.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:n,maxMip:t}}function I0(r,e,t,n){const i=r.getContext(),s=t.defines;let a=t.vertexShader,o=t.fragmentShader;const l=w0(t),c=R0(t),u=C0(t),h=L0(t),d=P0(t),p=t.isWebGL2?"":v0(t),g=x0(t),_=M0(s),f=i.createProgram();let m,y,v=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_].filter(vs).join(`
`),m.length>0&&(m+=`
`),y=[p,"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_].filter(vs).join(`
`),y.length>0&&(y+=`
`)):(m=[ju(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors&&t.isWebGL2?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(vs).join(`
`),y=[p,ju(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+u:"",t.envMap?"#define "+h:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==_r?"#define TONE_MAPPING":"",t.toneMapping!==_r?dt.tonemapping_pars_fragment:"",t.toneMapping!==_r?_0("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",dt.colorspace_pars_fragment,g0("linearToOutputTexel",t.outputColorSpace),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(vs).join(`
`)),a=Il(a),a=Wu(a,t),a=Xu(a,t),o=Il(o),o=Wu(o,t),o=Xu(o,t),a=qu(a),o=qu(o),t.isWebGL2&&t.isRawShaderMaterial!==!0&&(v=`#version 300 es
`,m=[g,"precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,y=["precision mediump sampler2DArray;","#define varying in",t.glslVersion===cu?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===cu?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+y);const A=v+m+a,b=v+y+o,w=Hu(i,i.VERTEX_SHADER,A),S=Hu(i,i.FRAGMENT_SHADER,b);i.attachShader(f,w),i.attachShader(f,S),t.index0AttributeName!==void 0?i.bindAttribLocation(f,0,t.index0AttributeName):t.morphTargets===!0&&i.bindAttribLocation(f,0,"position"),i.linkProgram(f);function I(U){if(r.debug.checkShaderErrors){const Y=i.getProgramInfoLog(f).trim(),L=i.getShaderInfoLog(w).trim(),O=i.getShaderInfoLog(S).trim();let k=!0,q=!0;if(i.getProgramParameter(f,i.LINK_STATUS)===!1)if(k=!1,typeof r.debug.onShaderError=="function")r.debug.onShaderError(i,f,w,S);else{const $=Vu(i,w,"vertex"),K=Vu(i,S,"fragment");console.error("THREE.WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(f,i.VALIDATE_STATUS)+`

Material Name: `+U.name+`
Material Type: `+U.type+`

Program Info Log: `+Y+`
`+$+`
`+K)}else Y!==""?console.warn("THREE.WebGLProgram: Program Info Log:",Y):(L===""||O==="")&&(q=!1);q&&(U.diagnostics={runnable:k,programLog:Y,vertexShader:{log:L,prefix:m},fragmentShader:{log:O,prefix:y}})}i.deleteShader(w),i.deleteShader(S),D=new Za(i,f),x=y0(i,f)}let D;this.getUniforms=function(){return D===void 0&&I(this),D};let x;this.getAttributes=function(){return x===void 0&&I(this),x};let E=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return E===!1&&(E=i.getProgramParameter(f,d0)),E},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(f),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=f0++,this.cacheKey=e,this.usedTimes=1,this.program=f,this.vertexShader=w,this.fragmentShader=S,this}let D0=0;class N0{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,n=e.fragmentShader,i=this._getShaderStage(t),s=this._getShaderStage(n),a=this._getShaderCacheForMaterial(e);return a.has(i)===!1&&(a.add(i),i.usedTimes++),a.has(s)===!1&&(a.add(s),s.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new U0(e),t.set(e,n)),n}}class U0{constructor(e){this.id=D0++,this.code=e,this.usedTimes=0}}function F0(r,e,t,n,i,s,a){const o=new $h,l=new N0,c=new Set,u=[],h=i.isWebGL2,d=i.logarithmicDepthBuffer,p=i.vertexTextures;let g=i.precision;const _={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function f(x){return c.add(x),x===0?"uv":`uv${x}`}function m(x,E,U,Y,L){const O=Y.fog,k=L.geometry,q=x.isMeshStandardMaterial?Y.environment:null,$=(x.isMeshStandardMaterial?t:e).get(x.envMap||q),K=$&&$.mapping===so?$.image.height:null,se=_[x.type];x.precision!==null&&(g=i.getMaxPrecision(x.precision),g!==x.precision&&console.warn("THREE.WebGLProgram.getParameters:",x.precision,"not supported, using",g,"instead."));const oe=k.morphAttributes.position||k.morphAttributes.normal||k.morphAttributes.color,_e=oe!==void 0?oe.length:0;let He=0;k.morphAttributes.position!==void 0&&(He=1),k.morphAttributes.normal!==void 0&&(He=2),k.morphAttributes.color!==void 0&&(He=3);let V,ie,Me,We;if(se){const ke=Mi[se];V=ke.vertexShader,ie=ke.fragmentShader}else V=x.vertexShader,ie=x.fragmentShader,l.update(x),Me=l.getVertexShaderID(x),We=l.getFragmentShaderID(x);const Te=r.getRenderTarget(),Ee=L.isInstancedMesh===!0,Mt=L.isBatchedMesh===!0,Ye=!!x.map,F=!!x.matcap,Ft=!!$,Pe=!!x.aoMap,Ie=!!x.lightMap,Re=!!x.bumpMap,Ze=!!x.normalMap,Ke=!!x.displacementMap,st=!!x.emissiveMap,Ot=!!x.metalnessMap,R=!!x.roughnessMap,M=x.anisotropy>0,j=x.clearcoat>0,Z=x.iridescence>0,re=x.sheen>0,ne=x.transmission>0,nt=M&&!!x.anisotropyMap,Ne=j&&!!x.clearcoatMap,le=j&&!!x.clearcoatNormalMap,ue=j&&!!x.clearcoatRoughnessMap,ze=Z&&!!x.iridescenceMap,ae=Z&&!!x.iridescenceThicknessMap,Dt=re&&!!x.sheenColorMap,Ge=re&&!!x.sheenRoughnessMap,De=!!x.specularMap,be=!!x.specularColorMap,we=!!x.specularIntensityMap,gt=ne&&!!x.transmissionMap,tt=ne&&!!x.thicknessMap,At=!!x.gradientMap,N=!!x.alphaMap,pe=x.alphaTest>0,G=!!x.alphaHash,ce=!!x.extensions;let J=_r;x.toneMapped&&(Te===null||Te.isXRRenderTarget===!0)&&(J=r.toneMapping);const he={isWebGL2:h,shaderID:se,shaderType:x.type,shaderName:x.name,vertexShader:V,fragmentShader:ie,defines:x.defines,customVertexShaderID:Me,customFragmentShaderID:We,isRawShaderMaterial:x.isRawShaderMaterial===!0,glslVersion:x.glslVersion,precision:g,batching:Mt,instancing:Ee,instancingColor:Ee&&L.instanceColor!==null,instancingMorph:Ee&&L.morphTexture!==null,supportsVertexTextures:p,outputColorSpace:Te===null?r.outputColorSpace:Te.isXRRenderTarget===!0?Te.texture.colorSpace:Sn,alphaToCoverage:!!x.alphaToCoverage,map:Ye,matcap:F,envMap:Ft,envMapMode:Ft&&$.mapping,envMapCubeUVHeight:K,aoMap:Pe,lightMap:Ie,bumpMap:Re,normalMap:Ze,displacementMap:p&&Ke,emissiveMap:st,normalMapObjectSpace:Ze&&x.normalMapType===Lp,normalMapTangentSpace:Ze&&x.normalMapType===Hh,metalnessMap:Ot,roughnessMap:R,anisotropy:M,anisotropyMap:nt,clearcoat:j,clearcoatMap:Ne,clearcoatNormalMap:le,clearcoatRoughnessMap:ue,iridescence:Z,iridescenceMap:ze,iridescenceThicknessMap:ae,sheen:re,sheenColorMap:Dt,sheenRoughnessMap:Ge,specularMap:De,specularColorMap:be,specularIntensityMap:we,transmission:ne,transmissionMap:gt,thicknessMap:tt,gradientMap:At,opaque:x.transparent===!1&&x.blending===Ms&&x.alphaToCoverage===!1,alphaMap:N,alphaTest:pe,alphaHash:G,combine:x.combine,mapUv:Ye&&f(x.map.channel),aoMapUv:Pe&&f(x.aoMap.channel),lightMapUv:Ie&&f(x.lightMap.channel),bumpMapUv:Re&&f(x.bumpMap.channel),normalMapUv:Ze&&f(x.normalMap.channel),displacementMapUv:Ke&&f(x.displacementMap.channel),emissiveMapUv:st&&f(x.emissiveMap.channel),metalnessMapUv:Ot&&f(x.metalnessMap.channel),roughnessMapUv:R&&f(x.roughnessMap.channel),anisotropyMapUv:nt&&f(x.anisotropyMap.channel),clearcoatMapUv:Ne&&f(x.clearcoatMap.channel),clearcoatNormalMapUv:le&&f(x.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ue&&f(x.clearcoatRoughnessMap.channel),iridescenceMapUv:ze&&f(x.iridescenceMap.channel),iridescenceThicknessMapUv:ae&&f(x.iridescenceThicknessMap.channel),sheenColorMapUv:Dt&&f(x.sheenColorMap.channel),sheenRoughnessMapUv:Ge&&f(x.sheenRoughnessMap.channel),specularMapUv:De&&f(x.specularMap.channel),specularColorMapUv:be&&f(x.specularColorMap.channel),specularIntensityMapUv:we&&f(x.specularIntensityMap.channel),transmissionMapUv:gt&&f(x.transmissionMap.channel),thicknessMapUv:tt&&f(x.thicknessMap.channel),alphaMapUv:N&&f(x.alphaMap.channel),vertexTangents:!!k.attributes.tangent&&(Ze||M),vertexColors:x.vertexColors,vertexAlphas:x.vertexColors===!0&&!!k.attributes.color&&k.attributes.color.itemSize===4,pointsUvs:L.isPoints===!0&&!!k.attributes.uv&&(Ye||N),fog:!!O,useFog:x.fog===!0,fogExp2:!!O&&O.isFogExp2,flatShading:x.flatShading===!0,sizeAttenuation:x.sizeAttenuation===!0,logarithmicDepthBuffer:d,skinning:L.isSkinnedMesh===!0,morphTargets:k.morphAttributes.position!==void 0,morphNormals:k.morphAttributes.normal!==void 0,morphColors:k.morphAttributes.color!==void 0,morphTargetsCount:_e,morphTextureStride:He,numDirLights:E.directional.length,numPointLights:E.point.length,numSpotLights:E.spot.length,numSpotLightMaps:E.spotLightMap.length,numRectAreaLights:E.rectArea.length,numHemiLights:E.hemi.length,numDirLightShadows:E.directionalShadowMap.length,numPointLightShadows:E.pointShadowMap.length,numSpotLightShadows:E.spotShadowMap.length,numSpotLightShadowsWithMaps:E.numSpotLightShadowsWithMaps,numLightProbes:E.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:x.dithering,shadowMapEnabled:r.shadowMap.enabled&&U.length>0,shadowMapType:r.shadowMap.type,toneMapping:J,useLegacyLights:r._useLegacyLights,decodeVideoTexture:Ye&&x.map.isVideoTexture===!0&&Lt.getTransfer(x.map.colorSpace)===jt,premultipliedAlpha:x.premultipliedAlpha,doubleSided:x.side===yi,flipSided:x.side===Un,useDepthPacking:x.depthPacking>=0,depthPacking:x.depthPacking||0,index0AttributeName:x.index0AttributeName,extensionDerivatives:ce&&x.extensions.derivatives===!0,extensionFragDepth:ce&&x.extensions.fragDepth===!0,extensionDrawBuffers:ce&&x.extensions.drawBuffers===!0,extensionShaderTextureLOD:ce&&x.extensions.shaderTextureLOD===!0,extensionClipCullDistance:ce&&x.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:ce&&x.extensions.multiDraw===!0&&n.has("WEBGL_multi_draw"),rendererExtensionFragDepth:h||n.has("EXT_frag_depth"),rendererExtensionDrawBuffers:h||n.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:h||n.has("EXT_shader_texture_lod"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:x.customProgramCacheKey()};return he.vertexUv1s=c.has(1),he.vertexUv2s=c.has(2),he.vertexUv3s=c.has(3),c.clear(),he}function y(x){const E=[];if(x.shaderID?E.push(x.shaderID):(E.push(x.customVertexShaderID),E.push(x.customFragmentShaderID)),x.defines!==void 0)for(const U in x.defines)E.push(U),E.push(x.defines[U]);return x.isRawShaderMaterial===!1&&(v(E,x),A(E,x),E.push(r.outputColorSpace)),E.push(x.customProgramCacheKey),E.join()}function v(x,E){x.push(E.precision),x.push(E.outputColorSpace),x.push(E.envMapMode),x.push(E.envMapCubeUVHeight),x.push(E.mapUv),x.push(E.alphaMapUv),x.push(E.lightMapUv),x.push(E.aoMapUv),x.push(E.bumpMapUv),x.push(E.normalMapUv),x.push(E.displacementMapUv),x.push(E.emissiveMapUv),x.push(E.metalnessMapUv),x.push(E.roughnessMapUv),x.push(E.anisotropyMapUv),x.push(E.clearcoatMapUv),x.push(E.clearcoatNormalMapUv),x.push(E.clearcoatRoughnessMapUv),x.push(E.iridescenceMapUv),x.push(E.iridescenceThicknessMapUv),x.push(E.sheenColorMapUv),x.push(E.sheenRoughnessMapUv),x.push(E.specularMapUv),x.push(E.specularColorMapUv),x.push(E.specularIntensityMapUv),x.push(E.transmissionMapUv),x.push(E.thicknessMapUv),x.push(E.combine),x.push(E.fogExp2),x.push(E.sizeAttenuation),x.push(E.morphTargetsCount),x.push(E.morphAttributeCount),x.push(E.numDirLights),x.push(E.numPointLights),x.push(E.numSpotLights),x.push(E.numSpotLightMaps),x.push(E.numHemiLights),x.push(E.numRectAreaLights),x.push(E.numDirLightShadows),x.push(E.numPointLightShadows),x.push(E.numSpotLightShadows),x.push(E.numSpotLightShadowsWithMaps),x.push(E.numLightProbes),x.push(E.shadowMapType),x.push(E.toneMapping),x.push(E.numClippingPlanes),x.push(E.numClipIntersection),x.push(E.depthPacking)}function A(x,E){o.disableAll(),E.isWebGL2&&o.enable(0),E.supportsVertexTextures&&o.enable(1),E.instancing&&o.enable(2),E.instancingColor&&o.enable(3),E.instancingMorph&&o.enable(4),E.matcap&&o.enable(5),E.envMap&&o.enable(6),E.normalMapObjectSpace&&o.enable(7),E.normalMapTangentSpace&&o.enable(8),E.clearcoat&&o.enable(9),E.iridescence&&o.enable(10),E.alphaTest&&o.enable(11),E.vertexColors&&o.enable(12),E.vertexAlphas&&o.enable(13),E.vertexUv1s&&o.enable(14),E.vertexUv2s&&o.enable(15),E.vertexUv3s&&o.enable(16),E.vertexTangents&&o.enable(17),E.anisotropy&&o.enable(18),E.alphaHash&&o.enable(19),E.batching&&o.enable(20),x.push(o.mask),o.disableAll(),E.fog&&o.enable(0),E.useFog&&o.enable(1),E.flatShading&&o.enable(2),E.logarithmicDepthBuffer&&o.enable(3),E.skinning&&o.enable(4),E.morphTargets&&o.enable(5),E.morphNormals&&o.enable(6),E.morphColors&&o.enable(7),E.premultipliedAlpha&&o.enable(8),E.shadowMapEnabled&&o.enable(9),E.useLegacyLights&&o.enable(10),E.doubleSided&&o.enable(11),E.flipSided&&o.enable(12),E.useDepthPacking&&o.enable(13),E.dithering&&o.enable(14),E.transmission&&o.enable(15),E.sheen&&o.enable(16),E.opaque&&o.enable(17),E.pointsUvs&&o.enable(18),E.decodeVideoTexture&&o.enable(19),E.alphaToCoverage&&o.enable(20),x.push(o.mask)}function b(x){const E=_[x.type];let U;if(E){const Y=Mi[E];U=gm.clone(Y.uniforms)}else U=x.uniforms;return U}function w(x,E){let U;for(let Y=0,L=u.length;Y<L;Y++){const O=u[Y];if(O.cacheKey===E){U=O,++U.usedTimes;break}}return U===void 0&&(U=new I0(r,E,x,s),u.push(U)),U}function S(x){if(--x.usedTimes===0){const E=u.indexOf(x);u[E]=u[u.length-1],u.pop(),x.destroy()}}function I(x){l.remove(x)}function D(){l.dispose()}return{getParameters:m,getProgramCacheKey:y,getUniforms:b,acquireProgram:w,releaseProgram:S,releaseShaderCache:I,programs:u,dispose:D}}function O0(){let r=new WeakMap;function e(s){let a=r.get(s);return a===void 0&&(a={},r.set(s,a)),a}function t(s){r.delete(s)}function n(s,a,o){r.get(s)[a]=o}function i(){r=new WeakMap}return{get:e,remove:t,update:n,dispose:i}}function B0(r,e){return r.groupOrder!==e.groupOrder?r.groupOrder-e.groupOrder:r.renderOrder!==e.renderOrder?r.renderOrder-e.renderOrder:r.material.id!==e.material.id?r.material.id-e.material.id:r.z!==e.z?r.z-e.z:r.id-e.id}function Yu(r,e){return r.groupOrder!==e.groupOrder?r.groupOrder-e.groupOrder:r.renderOrder!==e.renderOrder?r.renderOrder-e.renderOrder:r.z!==e.z?e.z-r.z:r.id-e.id}function Ku(){const r=[];let e=0;const t=[],n=[],i=[];function s(){e=0,t.length=0,n.length=0,i.length=0}function a(h,d,p,g,_,f){let m=r[e];return m===void 0?(m={id:h.id,object:h,geometry:d,material:p,groupOrder:g,renderOrder:h.renderOrder,z:_,group:f},r[e]=m):(m.id=h.id,m.object=h,m.geometry=d,m.material=p,m.groupOrder=g,m.renderOrder=h.renderOrder,m.z=_,m.group=f),e++,m}function o(h,d,p,g,_,f){const m=a(h,d,p,g,_,f);p.transmission>0?n.push(m):p.transparent===!0?i.push(m):t.push(m)}function l(h,d,p,g,_,f){const m=a(h,d,p,g,_,f);p.transmission>0?n.unshift(m):p.transparent===!0?i.unshift(m):t.unshift(m)}function c(h,d){t.length>1&&t.sort(h||B0),n.length>1&&n.sort(d||Yu),i.length>1&&i.sort(d||Yu)}function u(){for(let h=e,d=r.length;h<d;h++){const p=r[h];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:t,transmissive:n,transparent:i,init:s,push:o,unshift:l,finish:u,sort:c}}function k0(){let r=new WeakMap;function e(n,i){const s=r.get(n);let a;return s===void 0?(a=new Ku,r.set(n,[a])):i>=s.length?(a=new Ku,s.push(a)):a=s[i],a}function t(){r=new WeakMap}return{get:e,dispose:t}}function z0(){const r={};return{get:function(e){if(r[e.id]!==void 0)return r[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new P,color:new Qe};break;case"SpotLight":t={position:new P,direction:new P,color:new Qe,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new P,color:new Qe,distance:0,decay:0};break;case"HemisphereLight":t={direction:new P,skyColor:new Qe,groundColor:new Qe};break;case"RectAreaLight":t={color:new Qe,position:new P,halfWidth:new P,halfHeight:new P};break}return r[e.id]=t,t}}}function G0(){const r={};return{get:function(e){if(r[e.id]!==void 0)return r[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Se};break;case"SpotLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Se};break;case"PointLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Se,shadowCameraNear:1,shadowCameraFar:1e3};break}return r[e.id]=t,t}}}let H0=0;function V0(r,e){return(e.castShadow?2:0)-(r.castShadow?2:0)+(e.map?1:0)-(r.map?1:0)}function W0(r,e){const t=new z0,n=G0(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let u=0;u<9;u++)i.probe.push(new P);const s=new P,a=new je,o=new je;function l(u,h){let d=0,p=0,g=0;for(let U=0;U<9;U++)i.probe[U].set(0,0,0);let _=0,f=0,m=0,y=0,v=0,A=0,b=0,w=0,S=0,I=0,D=0;u.sort(V0);const x=h===!0?Math.PI:1;for(let U=0,Y=u.length;U<Y;U++){const L=u[U],O=L.color,k=L.intensity,q=L.distance,$=L.shadow&&L.shadow.map?L.shadow.map.texture:null;if(L.isAmbientLight)d+=O.r*k*x,p+=O.g*k*x,g+=O.b*k*x;else if(L.isLightProbe){for(let K=0;K<9;K++)i.probe[K].addScaledVector(L.sh.coefficients[K],k);D++}else if(L.isDirectionalLight){const K=t.get(L);if(K.color.copy(L.color).multiplyScalar(L.intensity*x),L.castShadow){const se=L.shadow,oe=n.get(L);oe.shadowBias=se.bias,oe.shadowNormalBias=se.normalBias,oe.shadowRadius=se.radius,oe.shadowMapSize=se.mapSize,i.directionalShadow[_]=oe,i.directionalShadowMap[_]=$,i.directionalShadowMatrix[_]=L.shadow.matrix,A++}i.directional[_]=K,_++}else if(L.isSpotLight){const K=t.get(L);K.position.setFromMatrixPosition(L.matrixWorld),K.color.copy(O).multiplyScalar(k*x),K.distance=q,K.coneCos=Math.cos(L.angle),K.penumbraCos=Math.cos(L.angle*(1-L.penumbra)),K.decay=L.decay,i.spot[m]=K;const se=L.shadow;if(L.map&&(i.spotLightMap[S]=L.map,S++,se.updateMatrices(L),L.castShadow&&I++),i.spotLightMatrix[m]=se.matrix,L.castShadow){const oe=n.get(L);oe.shadowBias=se.bias,oe.shadowNormalBias=se.normalBias,oe.shadowRadius=se.radius,oe.shadowMapSize=se.mapSize,i.spotShadow[m]=oe,i.spotShadowMap[m]=$,w++}m++}else if(L.isRectAreaLight){const K=t.get(L);K.color.copy(O).multiplyScalar(k),K.halfWidth.set(L.width*.5,0,0),K.halfHeight.set(0,L.height*.5,0),i.rectArea[y]=K,y++}else if(L.isPointLight){const K=t.get(L);if(K.color.copy(L.color).multiplyScalar(L.intensity*x),K.distance=L.distance,K.decay=L.decay,L.castShadow){const se=L.shadow,oe=n.get(L);oe.shadowBias=se.bias,oe.shadowNormalBias=se.normalBias,oe.shadowRadius=se.radius,oe.shadowMapSize=se.mapSize,oe.shadowCameraNear=se.camera.near,oe.shadowCameraFar=se.camera.far,i.pointShadow[f]=oe,i.pointShadowMap[f]=$,i.pointShadowMatrix[f]=L.shadow.matrix,b++}i.point[f]=K,f++}else if(L.isHemisphereLight){const K=t.get(L);K.skyColor.copy(L.color).multiplyScalar(k*x),K.groundColor.copy(L.groundColor).multiplyScalar(k*x),i.hemi[v]=K,v++}}y>0&&(e.isWebGL2?r.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=fe.LTC_FLOAT_1,i.rectAreaLTC2=fe.LTC_FLOAT_2):(i.rectAreaLTC1=fe.LTC_HALF_1,i.rectAreaLTC2=fe.LTC_HALF_2):r.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=fe.LTC_FLOAT_1,i.rectAreaLTC2=fe.LTC_FLOAT_2):r.has("OES_texture_half_float_linear")===!0?(i.rectAreaLTC1=fe.LTC_HALF_1,i.rectAreaLTC2=fe.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),i.ambient[0]=d,i.ambient[1]=p,i.ambient[2]=g;const E=i.hash;(E.directionalLength!==_||E.pointLength!==f||E.spotLength!==m||E.rectAreaLength!==y||E.hemiLength!==v||E.numDirectionalShadows!==A||E.numPointShadows!==b||E.numSpotShadows!==w||E.numSpotMaps!==S||E.numLightProbes!==D)&&(i.directional.length=_,i.spot.length=m,i.rectArea.length=y,i.point.length=f,i.hemi.length=v,i.directionalShadow.length=A,i.directionalShadowMap.length=A,i.pointShadow.length=b,i.pointShadowMap.length=b,i.spotShadow.length=w,i.spotShadowMap.length=w,i.directionalShadowMatrix.length=A,i.pointShadowMatrix.length=b,i.spotLightMatrix.length=w+S-I,i.spotLightMap.length=S,i.numSpotLightShadowsWithMaps=I,i.numLightProbes=D,E.directionalLength=_,E.pointLength=f,E.spotLength=m,E.rectAreaLength=y,E.hemiLength=v,E.numDirectionalShadows=A,E.numPointShadows=b,E.numSpotShadows=w,E.numSpotMaps=S,E.numLightProbes=D,i.version=H0++)}function c(u,h){let d=0,p=0,g=0,_=0,f=0;const m=h.matrixWorldInverse;for(let y=0,v=u.length;y<v;y++){const A=u[y];if(A.isDirectionalLight){const b=i.directional[d];b.direction.setFromMatrixPosition(A.matrixWorld),s.setFromMatrixPosition(A.target.matrixWorld),b.direction.sub(s),b.direction.transformDirection(m),d++}else if(A.isSpotLight){const b=i.spot[g];b.position.setFromMatrixPosition(A.matrixWorld),b.position.applyMatrix4(m),b.direction.setFromMatrixPosition(A.matrixWorld),s.setFromMatrixPosition(A.target.matrixWorld),b.direction.sub(s),b.direction.transformDirection(m),g++}else if(A.isRectAreaLight){const b=i.rectArea[_];b.position.setFromMatrixPosition(A.matrixWorld),b.position.applyMatrix4(m),o.identity(),a.copy(A.matrixWorld),a.premultiply(m),o.extractRotation(a),b.halfWidth.set(A.width*.5,0,0),b.halfHeight.set(0,A.height*.5,0),b.halfWidth.applyMatrix4(o),b.halfHeight.applyMatrix4(o),_++}else if(A.isPointLight){const b=i.point[p];b.position.setFromMatrixPosition(A.matrixWorld),b.position.applyMatrix4(m),p++}else if(A.isHemisphereLight){const b=i.hemi[f];b.direction.setFromMatrixPosition(A.matrixWorld),b.direction.transformDirection(m),f++}}}return{setup:l,setupView:c,state:i}}function $u(r,e){const t=new W0(r,e),n=[],i=[];function s(){n.length=0,i.length=0}function a(h){n.push(h)}function o(h){i.push(h)}function l(h){t.setup(n,h)}function c(h){t.setupView(n,h)}return{init:s,state:{lightsArray:n,shadowsArray:i,lights:t},setupLights:l,setupLightsView:c,pushLight:a,pushShadow:o}}function X0(r,e){let t=new WeakMap;function n(s,a=0){const o=t.get(s);let l;return o===void 0?(l=new $u(r,e),t.set(s,[l])):a>=o.length?(l=new $u(r,e),o.push(l)):l=o[a],l}function i(){t=new WeakMap}return{get:n,dispose:i}}class q0 extends bi{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Rp,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class j0 extends bi{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const Y0=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,K0=`uniform sampler2D shadow_pass;
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
}`;function $0(r,e,t){let n=new Yl;const i=new Se,s=new Se,a=new Ht,o=new q0({depthPacking:Cp}),l=new j0,c={},u=t.maxTextureSize,h={[$i]:Un,[Un]:$i,[yi]:yi},d=new Zi({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Se},radius:{value:4}},vertexShader:Y0,fragmentShader:K0}),p=d.clone();p.defines.HORIZONTAL_PASS=1;const g=new Fn;g.setAttribute("position",new hn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const _=new Qt(g,d),f=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Lh;let m=this.type;this.render=function(w,S,I){if(f.enabled===!1||f.autoUpdate===!1&&f.needsUpdate===!1||w.length===0)return;const D=r.getRenderTarget(),x=r.getActiveCubeFace(),E=r.getActiveMipmapLevel(),U=r.state;U.setBlending(gr),U.buffers.color.setClear(1,1,1,1),U.buffers.depth.setTest(!0),U.setScissorTest(!1);const Y=m!==qi&&this.type===qi,L=m===qi&&this.type!==qi;for(let O=0,k=w.length;O<k;O++){const q=w[O],$=q.shadow;if($===void 0){console.warn("THREE.WebGLShadowMap:",q,"has no shadow.");continue}if($.autoUpdate===!1&&$.needsUpdate===!1)continue;i.copy($.mapSize);const K=$.getFrameExtents();if(i.multiply(K),s.copy($.mapSize),(i.x>u||i.y>u)&&(i.x>u&&(s.x=Math.floor(u/K.x),i.x=s.x*K.x,$.mapSize.x=s.x),i.y>u&&(s.y=Math.floor(u/K.y),i.y=s.y*K.y,$.mapSize.y=s.y)),$.map===null||Y===!0||L===!0){const oe=this.type!==qi?{minFilter:vn,magFilter:vn}:{};$.map!==null&&$.map.dispose(),$.map=new Gr(i.x,i.y,oe),$.map.texture.name=q.name+".shadowMap",$.camera.updateProjectionMatrix()}r.setRenderTarget($.map),r.clear();const se=$.getViewportCount();for(let oe=0;oe<se;oe++){const _e=$.getViewport(oe);a.set(s.x*_e.x,s.y*_e.y,s.x*_e.z,s.y*_e.w),U.viewport(a),$.updateMatrices(q,oe),n=$.getFrustum(),A(S,I,$.camera,q,this.type)}$.isPointLightShadow!==!0&&this.type===qi&&y($,I),$.needsUpdate=!1}m=this.type,f.needsUpdate=!1,r.setRenderTarget(D,x,E)};function y(w,S){const I=e.update(_);d.defines.VSM_SAMPLES!==w.blurSamples&&(d.defines.VSM_SAMPLES=w.blurSamples,p.defines.VSM_SAMPLES=w.blurSamples,d.needsUpdate=!0,p.needsUpdate=!0),w.mapPass===null&&(w.mapPass=new Gr(i.x,i.y)),d.uniforms.shadow_pass.value=w.map.texture,d.uniforms.resolution.value=w.mapSize,d.uniforms.radius.value=w.radius,r.setRenderTarget(w.mapPass),r.clear(),r.renderBufferDirect(S,null,I,d,_,null),p.uniforms.shadow_pass.value=w.mapPass.texture,p.uniforms.resolution.value=w.mapSize,p.uniforms.radius.value=w.radius,r.setRenderTarget(w.map),r.clear(),r.renderBufferDirect(S,null,I,p,_,null)}function v(w,S,I,D){let x=null;const E=I.isPointLight===!0?w.customDistanceMaterial:w.customDepthMaterial;if(E!==void 0)x=E;else if(x=I.isPointLight===!0?l:o,r.localClippingEnabled&&S.clipShadows===!0&&Array.isArray(S.clippingPlanes)&&S.clippingPlanes.length!==0||S.displacementMap&&S.displacementScale!==0||S.alphaMap&&S.alphaTest>0||S.map&&S.alphaTest>0){const U=x.uuid,Y=S.uuid;let L=c[U];L===void 0&&(L={},c[U]=L);let O=L[Y];O===void 0&&(O=x.clone(),L[Y]=O,S.addEventListener("dispose",b)),x=O}if(x.visible=S.visible,x.wireframe=S.wireframe,D===qi?x.side=S.shadowSide!==null?S.shadowSide:S.side:x.side=S.shadowSide!==null?S.shadowSide:h[S.side],x.alphaMap=S.alphaMap,x.alphaTest=S.alphaTest,x.map=S.map,x.clipShadows=S.clipShadows,x.clippingPlanes=S.clippingPlanes,x.clipIntersection=S.clipIntersection,x.displacementMap=S.displacementMap,x.displacementScale=S.displacementScale,x.displacementBias=S.displacementBias,x.wireframeLinewidth=S.wireframeLinewidth,x.linewidth=S.linewidth,I.isPointLight===!0&&x.isMeshDistanceMaterial===!0){const U=r.properties.get(x);U.light=I}return x}function A(w,S,I,D,x){if(w.visible===!1)return;if(w.layers.test(S.layers)&&(w.isMesh||w.isLine||w.isPoints)&&(w.castShadow||w.receiveShadow&&x===qi)&&(!w.frustumCulled||n.intersectsObject(w))){w.modelViewMatrix.multiplyMatrices(I.matrixWorldInverse,w.matrixWorld);const Y=e.update(w),L=w.material;if(Array.isArray(L)){const O=Y.groups;for(let k=0,q=O.length;k<q;k++){const $=O[k],K=L[$.materialIndex];if(K&&K.visible){const se=v(w,K,D,x);w.onBeforeShadow(r,w,S,I,Y,se,$),r.renderBufferDirect(I,null,Y,se,w,$),w.onAfterShadow(r,w,S,I,Y,se,$)}}}else if(L.visible){const O=v(w,L,D,x);w.onBeforeShadow(r,w,S,I,Y,O,null),r.renderBufferDirect(I,null,Y,O,w,null),w.onAfterShadow(r,w,S,I,Y,O,null)}}const U=w.children;for(let Y=0,L=U.length;Y<L;Y++)A(U[Y],S,I,D,x)}function b(w){w.target.removeEventListener("dispose",b);for(const I in c){const D=c[I],x=w.target.uuid;x in D&&(D[x].dispose(),delete D[x])}}}function Z0(r,e,t){const n=t.isWebGL2;function i(){let N=!1;const pe=new Ht;let G=null;const ce=new Ht(0,0,0,0);return{setMask:function(J){G!==J&&!N&&(r.colorMask(J,J,J,J),G=J)},setLocked:function(J){N=J},setClear:function(J,he,ke,St,Bt){Bt===!0&&(J*=St,he*=St,ke*=St),pe.set(J,he,ke,St),ce.equals(pe)===!1&&(r.clearColor(J,he,ke,St),ce.copy(pe))},reset:function(){N=!1,G=null,ce.set(-1,0,0,0)}}}function s(){let N=!1,pe=null,G=null,ce=null;return{setTest:function(J){J?Ee(r.DEPTH_TEST):Mt(r.DEPTH_TEST)},setMask:function(J){pe!==J&&!N&&(r.depthMask(J),pe=J)},setFunc:function(J){if(G!==J){switch(J){case np:r.depthFunc(r.NEVER);break;case ip:r.depthFunc(r.ALWAYS);break;case rp:r.depthFunc(r.LESS);break;case Ja:r.depthFunc(r.LEQUAL);break;case sp:r.depthFunc(r.EQUAL);break;case ap:r.depthFunc(r.GEQUAL);break;case op:r.depthFunc(r.GREATER);break;case lp:r.depthFunc(r.NOTEQUAL);break;default:r.depthFunc(r.LEQUAL)}G=J}},setLocked:function(J){N=J},setClear:function(J){ce!==J&&(r.clearDepth(J),ce=J)},reset:function(){N=!1,pe=null,G=null,ce=null}}}function a(){let N=!1,pe=null,G=null,ce=null,J=null,he=null,ke=null,St=null,Bt=null;return{setTest:function(ut){N||(ut?Ee(r.STENCIL_TEST):Mt(r.STENCIL_TEST))},setMask:function(ut){pe!==ut&&!N&&(r.stencilMask(ut),pe=ut)},setFunc:function(ut,Zt,Rn){(G!==ut||ce!==Zt||J!==Rn)&&(r.stencilFunc(ut,Zt,Rn),G=ut,ce=Zt,J=Rn)},setOp:function(ut,Zt,Rn){(he!==ut||ke!==Zt||St!==Rn)&&(r.stencilOp(ut,Zt,Rn),he=ut,ke=Zt,St=Rn)},setLocked:function(ut){N=ut},setClear:function(ut){Bt!==ut&&(r.clearStencil(ut),Bt=ut)},reset:function(){N=!1,pe=null,G=null,ce=null,J=null,he=null,ke=null,St=null,Bt=null}}}const o=new i,l=new s,c=new a,u=new WeakMap,h=new WeakMap;let d={},p={},g=new WeakMap,_=[],f=null,m=!1,y=null,v=null,A=null,b=null,w=null,S=null,I=null,D=new Qe(0,0,0),x=0,E=!1,U=null,Y=null,L=null,O=null,k=null;const q=r.getParameter(r.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let $=!1,K=0;const se=r.getParameter(r.VERSION);se.indexOf("WebGL")!==-1?(K=parseFloat(/^WebGL (\d)/.exec(se)[1]),$=K>=1):se.indexOf("OpenGL ES")!==-1&&(K=parseFloat(/^OpenGL ES (\d)/.exec(se)[1]),$=K>=2);let oe=null,_e={};const He=r.getParameter(r.SCISSOR_BOX),V=r.getParameter(r.VIEWPORT),ie=new Ht().fromArray(He),Me=new Ht().fromArray(V);function We(N,pe,G,ce){const J=new Uint8Array(4),he=r.createTexture();r.bindTexture(N,he),r.texParameteri(N,r.TEXTURE_MIN_FILTER,r.NEAREST),r.texParameteri(N,r.TEXTURE_MAG_FILTER,r.NEAREST);for(let ke=0;ke<G;ke++)n&&(N===r.TEXTURE_3D||N===r.TEXTURE_2D_ARRAY)?r.texImage3D(pe,0,r.RGBA,1,1,ce,0,r.RGBA,r.UNSIGNED_BYTE,J):r.texImage2D(pe+ke,0,r.RGBA,1,1,0,r.RGBA,r.UNSIGNED_BYTE,J);return he}const Te={};Te[r.TEXTURE_2D]=We(r.TEXTURE_2D,r.TEXTURE_2D,1),Te[r.TEXTURE_CUBE_MAP]=We(r.TEXTURE_CUBE_MAP,r.TEXTURE_CUBE_MAP_POSITIVE_X,6),n&&(Te[r.TEXTURE_2D_ARRAY]=We(r.TEXTURE_2D_ARRAY,r.TEXTURE_2D_ARRAY,1,1),Te[r.TEXTURE_3D]=We(r.TEXTURE_3D,r.TEXTURE_3D,1,1)),o.setClear(0,0,0,1),l.setClear(1),c.setClear(0),Ee(r.DEPTH_TEST),l.setFunc(Ja),Ke(!1),st(wc),Ee(r.CULL_FACE),Re(gr);function Ee(N){d[N]!==!0&&(r.enable(N),d[N]=!0)}function Mt(N){d[N]!==!1&&(r.disable(N),d[N]=!1)}function Ye(N,pe){return p[N]!==pe?(r.bindFramebuffer(N,pe),p[N]=pe,n&&(N===r.DRAW_FRAMEBUFFER&&(p[r.FRAMEBUFFER]=pe),N===r.FRAMEBUFFER&&(p[r.DRAW_FRAMEBUFFER]=pe)),!0):!1}function F(N,pe){let G=_,ce=!1;if(N){G=g.get(pe),G===void 0&&(G=[],g.set(pe,G));const J=N.textures;if(G.length!==J.length||G[0]!==r.COLOR_ATTACHMENT0){for(let he=0,ke=J.length;he<ke;he++)G[he]=r.COLOR_ATTACHMENT0+he;G.length=J.length,ce=!0}}else G[0]!==r.BACK&&(G[0]=r.BACK,ce=!0);if(ce)if(t.isWebGL2)r.drawBuffers(G);else if(e.has("WEBGL_draw_buffers")===!0)e.get("WEBGL_draw_buffers").drawBuffersWEBGL(G);else throw new Error("THREE.WebGLState: Usage of gl.drawBuffers() require WebGL2 or WEBGL_draw_buffers extension")}function Ft(N){return f!==N?(r.useProgram(N),f=N,!0):!1}const Pe={[Fr]:r.FUNC_ADD,[Gf]:r.FUNC_SUBTRACT,[Hf]:r.FUNC_REVERSE_SUBTRACT};if(n)Pe[Pc]=r.MIN,Pe[Ic]=r.MAX;else{const N=e.get("EXT_blend_minmax");N!==null&&(Pe[Pc]=N.MIN_EXT,Pe[Ic]=N.MAX_EXT)}const Ie={[Vf]:r.ZERO,[Wf]:r.ONE,[Xf]:r.SRC_COLOR,[El]:r.SRC_ALPHA,[Zf]:r.SRC_ALPHA_SATURATE,[Kf]:r.DST_COLOR,[jf]:r.DST_ALPHA,[qf]:r.ONE_MINUS_SRC_COLOR,[bl]:r.ONE_MINUS_SRC_ALPHA,[$f]:r.ONE_MINUS_DST_COLOR,[Yf]:r.ONE_MINUS_DST_ALPHA,[Jf]:r.CONSTANT_COLOR,[Qf]:r.ONE_MINUS_CONSTANT_COLOR,[ep]:r.CONSTANT_ALPHA,[tp]:r.ONE_MINUS_CONSTANT_ALPHA};function Re(N,pe,G,ce,J,he,ke,St,Bt,ut){if(N===gr){m===!0&&(Mt(r.BLEND),m=!1);return}if(m===!1&&(Ee(r.BLEND),m=!0),N!==zf){if(N!==y||ut!==E){if((v!==Fr||w!==Fr)&&(r.blendEquation(r.FUNC_ADD),v=Fr,w=Fr),ut)switch(N){case Ms:r.blendFuncSeparate(r.ONE,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case Rc:r.blendFunc(r.ONE,r.ONE);break;case Cc:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case Lc:r.blendFuncSeparate(r.ZERO,r.SRC_COLOR,r.ZERO,r.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",N);break}else switch(N){case Ms:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case Rc:r.blendFunc(r.SRC_ALPHA,r.ONE);break;case Cc:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case Lc:r.blendFunc(r.ZERO,r.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",N);break}A=null,b=null,S=null,I=null,D.set(0,0,0),x=0,y=N,E=ut}return}J=J||pe,he=he||G,ke=ke||ce,(pe!==v||J!==w)&&(r.blendEquationSeparate(Pe[pe],Pe[J]),v=pe,w=J),(G!==A||ce!==b||he!==S||ke!==I)&&(r.blendFuncSeparate(Ie[G],Ie[ce],Ie[he],Ie[ke]),A=G,b=ce,S=he,I=ke),(St.equals(D)===!1||Bt!==x)&&(r.blendColor(St.r,St.g,St.b,Bt),D.copy(St),x=Bt),y=N,E=!1}function Ze(N,pe){N.side===yi?Mt(r.CULL_FACE):Ee(r.CULL_FACE);let G=N.side===Un;pe&&(G=!G),Ke(G),N.blending===Ms&&N.transparent===!1?Re(gr):Re(N.blending,N.blendEquation,N.blendSrc,N.blendDst,N.blendEquationAlpha,N.blendSrcAlpha,N.blendDstAlpha,N.blendColor,N.blendAlpha,N.premultipliedAlpha),l.setFunc(N.depthFunc),l.setTest(N.depthTest),l.setMask(N.depthWrite),o.setMask(N.colorWrite);const ce=N.stencilWrite;c.setTest(ce),ce&&(c.setMask(N.stencilWriteMask),c.setFunc(N.stencilFunc,N.stencilRef,N.stencilFuncMask),c.setOp(N.stencilFail,N.stencilZFail,N.stencilZPass)),R(N.polygonOffset,N.polygonOffsetFactor,N.polygonOffsetUnits),N.alphaToCoverage===!0?Ee(r.SAMPLE_ALPHA_TO_COVERAGE):Mt(r.SAMPLE_ALPHA_TO_COVERAGE)}function Ke(N){U!==N&&(N?r.frontFace(r.CW):r.frontFace(r.CCW),U=N)}function st(N){N!==Of?(Ee(r.CULL_FACE),N!==Y&&(N===wc?r.cullFace(r.BACK):N===Bf?r.cullFace(r.FRONT):r.cullFace(r.FRONT_AND_BACK))):Mt(r.CULL_FACE),Y=N}function Ot(N){N!==L&&($&&r.lineWidth(N),L=N)}function R(N,pe,G){N?(Ee(r.POLYGON_OFFSET_FILL),(O!==pe||k!==G)&&(r.polygonOffset(pe,G),O=pe,k=G)):Mt(r.POLYGON_OFFSET_FILL)}function M(N){N?Ee(r.SCISSOR_TEST):Mt(r.SCISSOR_TEST)}function j(N){N===void 0&&(N=r.TEXTURE0+q-1),oe!==N&&(r.activeTexture(N),oe=N)}function Z(N,pe,G){G===void 0&&(oe===null?G=r.TEXTURE0+q-1:G=oe);let ce=_e[G];ce===void 0&&(ce={type:void 0,texture:void 0},_e[G]=ce),(ce.type!==N||ce.texture!==pe)&&(oe!==G&&(r.activeTexture(G),oe=G),r.bindTexture(N,pe||Te[N]),ce.type=N,ce.texture=pe)}function re(){const N=_e[oe];N!==void 0&&N.type!==void 0&&(r.bindTexture(N.type,null),N.type=void 0,N.texture=void 0)}function ne(){try{r.compressedTexImage2D.apply(r,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function nt(){try{r.compressedTexImage3D.apply(r,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function Ne(){try{r.texSubImage2D.apply(r,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function le(){try{r.texSubImage3D.apply(r,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function ue(){try{r.compressedTexSubImage2D.apply(r,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function ze(){try{r.compressedTexSubImage3D.apply(r,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function ae(){try{r.texStorage2D.apply(r,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function Dt(){try{r.texStorage3D.apply(r,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function Ge(){try{r.texImage2D.apply(r,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function De(){try{r.texImage3D.apply(r,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function be(N){ie.equals(N)===!1&&(r.scissor(N.x,N.y,N.z,N.w),ie.copy(N))}function we(N){Me.equals(N)===!1&&(r.viewport(N.x,N.y,N.z,N.w),Me.copy(N))}function gt(N,pe){let G=h.get(pe);G===void 0&&(G=new WeakMap,h.set(pe,G));let ce=G.get(N);ce===void 0&&(ce=r.getUniformBlockIndex(pe,N.name),G.set(N,ce))}function tt(N,pe){const ce=h.get(pe).get(N);u.get(pe)!==ce&&(r.uniformBlockBinding(pe,ce,N.__bindingPointIndex),u.set(pe,ce))}function At(){r.disable(r.BLEND),r.disable(r.CULL_FACE),r.disable(r.DEPTH_TEST),r.disable(r.POLYGON_OFFSET_FILL),r.disable(r.SCISSOR_TEST),r.disable(r.STENCIL_TEST),r.disable(r.SAMPLE_ALPHA_TO_COVERAGE),r.blendEquation(r.FUNC_ADD),r.blendFunc(r.ONE,r.ZERO),r.blendFuncSeparate(r.ONE,r.ZERO,r.ONE,r.ZERO),r.blendColor(0,0,0,0),r.colorMask(!0,!0,!0,!0),r.clearColor(0,0,0,0),r.depthMask(!0),r.depthFunc(r.LESS),r.clearDepth(1),r.stencilMask(4294967295),r.stencilFunc(r.ALWAYS,0,4294967295),r.stencilOp(r.KEEP,r.KEEP,r.KEEP),r.clearStencil(0),r.cullFace(r.BACK),r.frontFace(r.CCW),r.polygonOffset(0,0),r.activeTexture(r.TEXTURE0),r.bindFramebuffer(r.FRAMEBUFFER,null),n===!0&&(r.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),r.bindFramebuffer(r.READ_FRAMEBUFFER,null)),r.useProgram(null),r.lineWidth(1),r.scissor(0,0,r.canvas.width,r.canvas.height),r.viewport(0,0,r.canvas.width,r.canvas.height),d={},oe=null,_e={},p={},g=new WeakMap,_=[],f=null,m=!1,y=null,v=null,A=null,b=null,w=null,S=null,I=null,D=new Qe(0,0,0),x=0,E=!1,U=null,Y=null,L=null,O=null,k=null,ie.set(0,0,r.canvas.width,r.canvas.height),Me.set(0,0,r.canvas.width,r.canvas.height),o.reset(),l.reset(),c.reset()}return{buffers:{color:o,depth:l,stencil:c},enable:Ee,disable:Mt,bindFramebuffer:Ye,drawBuffers:F,useProgram:Ft,setBlending:Re,setMaterial:Ze,setFlipSided:Ke,setCullFace:st,setLineWidth:Ot,setPolygonOffset:R,setScissorTest:M,activeTexture:j,bindTexture:Z,unbindTexture:re,compressedTexImage2D:ne,compressedTexImage3D:nt,texImage2D:Ge,texImage3D:De,updateUBOMapping:gt,uniformBlockBinding:tt,texStorage2D:ae,texStorage3D:Dt,texSubImage2D:Ne,texSubImage3D:le,compressedTexSubImage2D:ue,compressedTexSubImage3D:ze,scissor:be,viewport:we,reset:At}}function J0(r,e,t,n,i,s,a){const o=i.isWebGL2,l=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),u=new Se,h=new WeakMap;let d;const p=new WeakMap;let g=!1;try{g=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function _(R,M){return g?new OffscreenCanvas(R,M):da("canvas")}function f(R,M,j,Z){let re=1;const ne=Ot(R);if((ne.width>Z||ne.height>Z)&&(re=Z/Math.max(ne.width,ne.height)),re<1||M===!0)if(typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&R instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&R instanceof ImageBitmap||typeof VideoFrame<"u"&&R instanceof VideoFrame){const nt=M?ro:Math.floor,Ne=nt(re*ne.width),le=nt(re*ne.height);d===void 0&&(d=_(Ne,le));const ue=j?_(Ne,le):d;return ue.width=Ne,ue.height=le,ue.getContext("2d").drawImage(R,0,0,Ne,le),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+ne.width+"x"+ne.height+") to ("+Ne+"x"+le+")."),ue}else return"data"in R&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+ne.width+"x"+ne.height+")."),R;return R}function m(R){const M=Ot(R);return Pl(M.width)&&Pl(M.height)}function y(R){return o?!1:R.wrapS!==si||R.wrapT!==si||R.minFilter!==vn&&R.minFilter!==wn}function v(R,M){return R.generateMipmaps&&M&&R.minFilter!==vn&&R.minFilter!==wn}function A(R){r.generateMipmap(R)}function b(R,M,j,Z,re=!1){if(o===!1)return M;if(R!==null){if(r[R]!==void 0)return r[R];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+R+"'")}let ne=M;if(M===r.RED&&(j===r.FLOAT&&(ne=r.R32F),j===r.HALF_FLOAT&&(ne=r.R16F),j===r.UNSIGNED_BYTE&&(ne=r.R8)),M===r.RED_INTEGER&&(j===r.UNSIGNED_BYTE&&(ne=r.R8UI),j===r.UNSIGNED_SHORT&&(ne=r.R16UI),j===r.UNSIGNED_INT&&(ne=r.R32UI),j===r.BYTE&&(ne=r.R8I),j===r.SHORT&&(ne=r.R16I),j===r.INT&&(ne=r.R32I)),M===r.RG&&(j===r.FLOAT&&(ne=r.RG32F),j===r.HALF_FLOAT&&(ne=r.RG16F),j===r.UNSIGNED_BYTE&&(ne=r.RG8)),M===r.RG_INTEGER&&(j===r.UNSIGNED_BYTE&&(ne=r.RG8UI),j===r.UNSIGNED_SHORT&&(ne=r.RG16UI),j===r.UNSIGNED_INT&&(ne=r.RG32UI),j===r.BYTE&&(ne=r.RG8I),j===r.SHORT&&(ne=r.RG16I),j===r.INT&&(ne=r.RG32I)),M===r.RGBA){const nt=re?eo:Lt.getTransfer(Z);j===r.FLOAT&&(ne=r.RGBA32F),j===r.HALF_FLOAT&&(ne=r.RGBA16F),j===r.UNSIGNED_BYTE&&(ne=nt===jt?r.SRGB8_ALPHA8:r.RGBA8),j===r.UNSIGNED_SHORT_4_4_4_4&&(ne=r.RGBA4),j===r.UNSIGNED_SHORT_5_5_5_1&&(ne=r.RGB5_A1)}return(ne===r.R16F||ne===r.R32F||ne===r.RG16F||ne===r.RG32F||ne===r.RGBA16F||ne===r.RGBA32F)&&e.get("EXT_color_buffer_float"),ne}function w(R,M,j){return v(R,j)===!0||R.isFramebufferTexture&&R.minFilter!==vn&&R.minFilter!==wn?Math.log2(Math.max(M.width,M.height))+1:R.mipmaps!==void 0&&R.mipmaps.length>0?R.mipmaps.length:R.isCompressedTexture&&Array.isArray(R.image)?M.mipmaps.length:1}function S(R){return R===vn||R===wl||R===gs?r.NEAREST:r.LINEAR}function I(R){const M=R.target;M.removeEventListener("dispose",I),x(M),M.isVideoTexture&&h.delete(M)}function D(R){const M=R.target;M.removeEventListener("dispose",D),U(M)}function x(R){const M=n.get(R);if(M.__webglInit===void 0)return;const j=R.source,Z=p.get(j);if(Z){const re=Z[M.__cacheKey];re.usedTimes--,re.usedTimes===0&&E(R),Object.keys(Z).length===0&&p.delete(j)}n.remove(R)}function E(R){const M=n.get(R);r.deleteTexture(M.__webglTexture);const j=R.source,Z=p.get(j);delete Z[M.__cacheKey],a.memory.textures--}function U(R){const M=n.get(R);if(R.depthTexture&&R.depthTexture.dispose(),R.isWebGLCubeRenderTarget)for(let Z=0;Z<6;Z++){if(Array.isArray(M.__webglFramebuffer[Z]))for(let re=0;re<M.__webglFramebuffer[Z].length;re++)r.deleteFramebuffer(M.__webglFramebuffer[Z][re]);else r.deleteFramebuffer(M.__webglFramebuffer[Z]);M.__webglDepthbuffer&&r.deleteRenderbuffer(M.__webglDepthbuffer[Z])}else{if(Array.isArray(M.__webglFramebuffer))for(let Z=0;Z<M.__webglFramebuffer.length;Z++)r.deleteFramebuffer(M.__webglFramebuffer[Z]);else r.deleteFramebuffer(M.__webglFramebuffer);if(M.__webglDepthbuffer&&r.deleteRenderbuffer(M.__webglDepthbuffer),M.__webglMultisampledFramebuffer&&r.deleteFramebuffer(M.__webglMultisampledFramebuffer),M.__webglColorRenderbuffer)for(let Z=0;Z<M.__webglColorRenderbuffer.length;Z++)M.__webglColorRenderbuffer[Z]&&r.deleteRenderbuffer(M.__webglColorRenderbuffer[Z]);M.__webglDepthRenderbuffer&&r.deleteRenderbuffer(M.__webglDepthRenderbuffer)}const j=R.textures;for(let Z=0,re=j.length;Z<re;Z++){const ne=n.get(j[Z]);ne.__webglTexture&&(r.deleteTexture(ne.__webglTexture),a.memory.textures--),n.remove(j[Z])}n.remove(R)}let Y=0;function L(){Y=0}function O(){const R=Y;return R>=i.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+R+" texture units while this GPU supports only "+i.maxTextures),Y+=1,R}function k(R){const M=[];return M.push(R.wrapS),M.push(R.wrapT),M.push(R.wrapR||0),M.push(R.magFilter),M.push(R.minFilter),M.push(R.anisotropy),M.push(R.internalFormat),M.push(R.format),M.push(R.type),M.push(R.generateMipmaps),M.push(R.premultiplyAlpha),M.push(R.flipY),M.push(R.unpackAlignment),M.push(R.colorSpace),M.join()}function q(R,M){const j=n.get(R);if(R.isVideoTexture&&Ke(R),R.isRenderTargetTexture===!1&&R.version>0&&j.__version!==R.version){const Z=R.image;if(Z===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(Z.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Me(j,R,M);return}}t.bindTexture(r.TEXTURE_2D,j.__webglTexture,r.TEXTURE0+M)}function $(R,M){const j=n.get(R);if(R.version>0&&j.__version!==R.version){Me(j,R,M);return}t.bindTexture(r.TEXTURE_2D_ARRAY,j.__webglTexture,r.TEXTURE0+M)}function K(R,M){const j=n.get(R);if(R.version>0&&j.__version!==R.version){Me(j,R,M);return}t.bindTexture(r.TEXTURE_3D,j.__webglTexture,r.TEXTURE0+M)}function se(R,M){const j=n.get(R);if(R.version>0&&j.__version!==R.version){We(j,R,M);return}t.bindTexture(r.TEXTURE_CUBE_MAP,j.__webglTexture,r.TEXTURE0+M)}const oe={[As]:r.REPEAT,[si]:r.CLAMP_TO_EDGE,[Qa]:r.MIRRORED_REPEAT},_e={[vn]:r.NEAREST,[wl]:r.NEAREST_MIPMAP_NEAREST,[gs]:r.NEAREST_MIPMAP_LINEAR,[wn]:r.LINEAR,[$a]:r.LINEAR_MIPMAP_NEAREST,[ji]:r.LINEAR_MIPMAP_LINEAR},He={[Pp]:r.NEVER,[Op]:r.ALWAYS,[Ip]:r.LESS,[Vh]:r.LEQUAL,[Dp]:r.EQUAL,[Fp]:r.GEQUAL,[Np]:r.GREATER,[Up]:r.NOTEQUAL};function V(R,M,j){if(M.type===fi&&e.has("OES_texture_float_linear")===!1&&(M.magFilter===wn||M.magFilter===$a||M.magFilter===gs||M.magFilter===ji||M.minFilter===wn||M.minFilter===$a||M.minFilter===gs||M.minFilter===ji)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),j?(r.texParameteri(R,r.TEXTURE_WRAP_S,oe[M.wrapS]),r.texParameteri(R,r.TEXTURE_WRAP_T,oe[M.wrapT]),(R===r.TEXTURE_3D||R===r.TEXTURE_2D_ARRAY)&&r.texParameteri(R,r.TEXTURE_WRAP_R,oe[M.wrapR]),r.texParameteri(R,r.TEXTURE_MAG_FILTER,_e[M.magFilter]),r.texParameteri(R,r.TEXTURE_MIN_FILTER,_e[M.minFilter])):(r.texParameteri(R,r.TEXTURE_WRAP_S,r.CLAMP_TO_EDGE),r.texParameteri(R,r.TEXTURE_WRAP_T,r.CLAMP_TO_EDGE),(R===r.TEXTURE_3D||R===r.TEXTURE_2D_ARRAY)&&r.texParameteri(R,r.TEXTURE_WRAP_R,r.CLAMP_TO_EDGE),(M.wrapS!==si||M.wrapT!==si)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),r.texParameteri(R,r.TEXTURE_MAG_FILTER,S(M.magFilter)),r.texParameteri(R,r.TEXTURE_MIN_FILTER,S(M.minFilter)),M.minFilter!==vn&&M.minFilter!==wn&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),M.compareFunction&&(r.texParameteri(R,r.TEXTURE_COMPARE_MODE,r.COMPARE_REF_TO_TEXTURE),r.texParameteri(R,r.TEXTURE_COMPARE_FUNC,He[M.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(M.magFilter===vn||M.minFilter!==gs&&M.minFilter!==ji||M.type===fi&&e.has("OES_texture_float_linear")===!1||o===!1&&M.type===ua&&e.has("OES_texture_half_float_linear")===!1)return;if(M.anisotropy>1||n.get(M).__currentAnisotropy){const Z=e.get("EXT_texture_filter_anisotropic");r.texParameterf(R,Z.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(M.anisotropy,i.getMaxAnisotropy())),n.get(M).__currentAnisotropy=M.anisotropy}}}function ie(R,M){let j=!1;R.__webglInit===void 0&&(R.__webglInit=!0,M.addEventListener("dispose",I));const Z=M.source;let re=p.get(Z);re===void 0&&(re={},p.set(Z,re));const ne=k(M);if(ne!==R.__cacheKey){re[ne]===void 0&&(re[ne]={texture:r.createTexture(),usedTimes:0},a.memory.textures++,j=!0),re[ne].usedTimes++;const nt=re[R.__cacheKey];nt!==void 0&&(re[R.__cacheKey].usedTimes--,nt.usedTimes===0&&E(M)),R.__cacheKey=ne,R.__webglTexture=re[ne].texture}return j}function Me(R,M,j){let Z=r.TEXTURE_2D;(M.isDataArrayTexture||M.isCompressedArrayTexture)&&(Z=r.TEXTURE_2D_ARRAY),M.isData3DTexture&&(Z=r.TEXTURE_3D);const re=ie(R,M),ne=M.source;t.bindTexture(Z,R.__webglTexture,r.TEXTURE0+j);const nt=n.get(ne);if(ne.version!==nt.__version||re===!0){t.activeTexture(r.TEXTURE0+j);const Ne=Lt.getPrimaries(Lt.workingColorSpace),le=M.colorSpace===dr?null:Lt.getPrimaries(M.colorSpace),ue=M.colorSpace===dr||Ne===le?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,M.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,M.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,ue);const ze=y(M)&&m(M.image)===!1;let ae=f(M.image,ze,!1,i.maxTextureSize);ae=st(M,ae);const Dt=m(ae)||o,Ge=s.convert(M.format,M.colorSpace);let De=s.convert(M.type),be=b(M.internalFormat,Ge,De,M.colorSpace,M.isVideoTexture);V(Z,M,Dt);let we;const gt=M.mipmaps,tt=o&&M.isVideoTexture!==!0&&be!==zh,At=nt.__version===void 0||re===!0,N=ne.dataReady,pe=w(M,ae,Dt);if(M.isDepthTexture)be=r.DEPTH_COMPONENT,o?M.type===fi?be=r.DEPTH_COMPONENT32F:M.type===pr?be=r.DEPTH_COMPONENT24:M.type===kr?be=r.DEPTH24_STENCIL8:be=r.DEPTH_COMPONENT16:M.type===fi&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),M.format===zr&&be===r.DEPTH_COMPONENT&&M.type!==Wl&&M.type!==pr&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),M.type=pr,De=s.convert(M.type)),M.format===ws&&be===r.DEPTH_COMPONENT&&(be=r.DEPTH_STENCIL,M.type!==kr&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),M.type=kr,De=s.convert(M.type))),At&&(tt?t.texStorage2D(r.TEXTURE_2D,1,be,ae.width,ae.height):t.texImage2D(r.TEXTURE_2D,0,be,ae.width,ae.height,0,Ge,De,null));else if(M.isDataTexture)if(gt.length>0&&Dt){tt&&At&&t.texStorage2D(r.TEXTURE_2D,pe,be,gt[0].width,gt[0].height);for(let G=0,ce=gt.length;G<ce;G++)we=gt[G],tt?N&&t.texSubImage2D(r.TEXTURE_2D,G,0,0,we.width,we.height,Ge,De,we.data):t.texImage2D(r.TEXTURE_2D,G,be,we.width,we.height,0,Ge,De,we.data);M.generateMipmaps=!1}else tt?(At&&t.texStorage2D(r.TEXTURE_2D,pe,be,ae.width,ae.height),N&&t.texSubImage2D(r.TEXTURE_2D,0,0,0,ae.width,ae.height,Ge,De,ae.data)):t.texImage2D(r.TEXTURE_2D,0,be,ae.width,ae.height,0,Ge,De,ae.data);else if(M.isCompressedTexture)if(M.isCompressedArrayTexture){tt&&At&&t.texStorage3D(r.TEXTURE_2D_ARRAY,pe,be,gt[0].width,gt[0].height,ae.depth);for(let G=0,ce=gt.length;G<ce;G++)we=gt[G],M.format!==ai?Ge!==null?tt?N&&t.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,G,0,0,0,we.width,we.height,ae.depth,Ge,we.data,0,0):t.compressedTexImage3D(r.TEXTURE_2D_ARRAY,G,be,we.width,we.height,ae.depth,0,we.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):tt?N&&t.texSubImage3D(r.TEXTURE_2D_ARRAY,G,0,0,0,we.width,we.height,ae.depth,Ge,De,we.data):t.texImage3D(r.TEXTURE_2D_ARRAY,G,be,we.width,we.height,ae.depth,0,Ge,De,we.data)}else{tt&&At&&t.texStorage2D(r.TEXTURE_2D,pe,be,gt[0].width,gt[0].height);for(let G=0,ce=gt.length;G<ce;G++)we=gt[G],M.format!==ai?Ge!==null?tt?N&&t.compressedTexSubImage2D(r.TEXTURE_2D,G,0,0,we.width,we.height,Ge,we.data):t.compressedTexImage2D(r.TEXTURE_2D,G,be,we.width,we.height,0,we.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):tt?N&&t.texSubImage2D(r.TEXTURE_2D,G,0,0,we.width,we.height,Ge,De,we.data):t.texImage2D(r.TEXTURE_2D,G,be,we.width,we.height,0,Ge,De,we.data)}else if(M.isDataArrayTexture)tt?(At&&t.texStorage3D(r.TEXTURE_2D_ARRAY,pe,be,ae.width,ae.height,ae.depth),N&&t.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,0,ae.width,ae.height,ae.depth,Ge,De,ae.data)):t.texImage3D(r.TEXTURE_2D_ARRAY,0,be,ae.width,ae.height,ae.depth,0,Ge,De,ae.data);else if(M.isData3DTexture)tt?(At&&t.texStorage3D(r.TEXTURE_3D,pe,be,ae.width,ae.height,ae.depth),N&&t.texSubImage3D(r.TEXTURE_3D,0,0,0,0,ae.width,ae.height,ae.depth,Ge,De,ae.data)):t.texImage3D(r.TEXTURE_3D,0,be,ae.width,ae.height,ae.depth,0,Ge,De,ae.data);else if(M.isFramebufferTexture){if(At)if(tt)t.texStorage2D(r.TEXTURE_2D,pe,be,ae.width,ae.height);else{let G=ae.width,ce=ae.height;for(let J=0;J<pe;J++)t.texImage2D(r.TEXTURE_2D,J,be,G,ce,0,Ge,De,null),G>>=1,ce>>=1}}else if(gt.length>0&&Dt){if(tt&&At){const G=Ot(gt[0]);t.texStorage2D(r.TEXTURE_2D,pe,be,G.width,G.height)}for(let G=0,ce=gt.length;G<ce;G++)we=gt[G],tt?N&&t.texSubImage2D(r.TEXTURE_2D,G,0,0,Ge,De,we):t.texImage2D(r.TEXTURE_2D,G,be,Ge,De,we);M.generateMipmaps=!1}else if(tt){if(At){const G=Ot(ae);t.texStorage2D(r.TEXTURE_2D,pe,be,G.width,G.height)}N&&t.texSubImage2D(r.TEXTURE_2D,0,0,0,Ge,De,ae)}else t.texImage2D(r.TEXTURE_2D,0,be,Ge,De,ae);v(M,Dt)&&A(Z),nt.__version=ne.version,M.onUpdate&&M.onUpdate(M)}R.__version=M.version}function We(R,M,j){if(M.image.length!==6)return;const Z=ie(R,M),re=M.source;t.bindTexture(r.TEXTURE_CUBE_MAP,R.__webglTexture,r.TEXTURE0+j);const ne=n.get(re);if(re.version!==ne.__version||Z===!0){t.activeTexture(r.TEXTURE0+j);const nt=Lt.getPrimaries(Lt.workingColorSpace),Ne=M.colorSpace===dr?null:Lt.getPrimaries(M.colorSpace),le=M.colorSpace===dr||nt===Ne?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,M.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,M.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,le);const ue=M.isCompressedTexture||M.image[0].isCompressedTexture,ze=M.image[0]&&M.image[0].isDataTexture,ae=[];for(let G=0;G<6;G++)!ue&&!ze?ae[G]=f(M.image[G],!1,!0,i.maxCubemapSize):ae[G]=ze?M.image[G].image:M.image[G],ae[G]=st(M,ae[G]);const Dt=ae[0],Ge=m(Dt)||o,De=s.convert(M.format,M.colorSpace),be=s.convert(M.type),we=b(M.internalFormat,De,be,M.colorSpace),gt=o&&M.isVideoTexture!==!0,tt=ne.__version===void 0||Z===!0,At=re.dataReady;let N=w(M,Dt,Ge);V(r.TEXTURE_CUBE_MAP,M,Ge);let pe;if(ue){gt&&tt&&t.texStorage2D(r.TEXTURE_CUBE_MAP,N,we,Dt.width,Dt.height);for(let G=0;G<6;G++){pe=ae[G].mipmaps;for(let ce=0;ce<pe.length;ce++){const J=pe[ce];M.format!==ai?De!==null?gt?At&&t.compressedTexSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+G,ce,0,0,J.width,J.height,De,J.data):t.compressedTexImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+G,ce,we,J.width,J.height,0,J.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):gt?At&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+G,ce,0,0,J.width,J.height,De,be,J.data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+G,ce,we,J.width,J.height,0,De,be,J.data)}}}else{if(pe=M.mipmaps,gt&&tt){pe.length>0&&N++;const G=Ot(ae[0]);t.texStorage2D(r.TEXTURE_CUBE_MAP,N,we,G.width,G.height)}for(let G=0;G<6;G++)if(ze){gt?At&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+G,0,0,0,ae[G].width,ae[G].height,De,be,ae[G].data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+G,0,we,ae[G].width,ae[G].height,0,De,be,ae[G].data);for(let ce=0;ce<pe.length;ce++){const he=pe[ce].image[G].image;gt?At&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+G,ce+1,0,0,he.width,he.height,De,be,he.data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+G,ce+1,we,he.width,he.height,0,De,be,he.data)}}else{gt?At&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+G,0,0,0,De,be,ae[G]):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+G,0,we,De,be,ae[G]);for(let ce=0;ce<pe.length;ce++){const J=pe[ce];gt?At&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+G,ce+1,0,0,De,be,J.image[G]):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+G,ce+1,we,De,be,J.image[G])}}}v(M,Ge)&&A(r.TEXTURE_CUBE_MAP),ne.__version=re.version,M.onUpdate&&M.onUpdate(M)}R.__version=M.version}function Te(R,M,j,Z,re,ne){const nt=s.convert(j.format,j.colorSpace),Ne=s.convert(j.type),le=b(j.internalFormat,nt,Ne,j.colorSpace);if(!n.get(M).__hasExternalTextures){const ze=Math.max(1,M.width>>ne),ae=Math.max(1,M.height>>ne);re===r.TEXTURE_3D||re===r.TEXTURE_2D_ARRAY?t.texImage3D(re,ne,le,ze,ae,M.depth,0,nt,Ne,null):t.texImage2D(re,ne,le,ze,ae,0,nt,Ne,null)}t.bindFramebuffer(r.FRAMEBUFFER,R),Ze(M)?l.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,Z,re,n.get(j).__webglTexture,0,Re(M)):(re===r.TEXTURE_2D||re>=r.TEXTURE_CUBE_MAP_POSITIVE_X&&re<=r.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&r.framebufferTexture2D(r.FRAMEBUFFER,Z,re,n.get(j).__webglTexture,ne),t.bindFramebuffer(r.FRAMEBUFFER,null)}function Ee(R,M,j){if(r.bindRenderbuffer(r.RENDERBUFFER,R),M.depthBuffer&&!M.stencilBuffer){let Z=o===!0?r.DEPTH_COMPONENT24:r.DEPTH_COMPONENT16;if(j||Ze(M)){const re=M.depthTexture;re&&re.isDepthTexture&&(re.type===fi?Z=r.DEPTH_COMPONENT32F:re.type===pr&&(Z=r.DEPTH_COMPONENT24));const ne=Re(M);Ze(M)?l.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,ne,Z,M.width,M.height):r.renderbufferStorageMultisample(r.RENDERBUFFER,ne,Z,M.width,M.height)}else r.renderbufferStorage(r.RENDERBUFFER,Z,M.width,M.height);r.framebufferRenderbuffer(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.RENDERBUFFER,R)}else if(M.depthBuffer&&M.stencilBuffer){const Z=Re(M);j&&Ze(M)===!1?r.renderbufferStorageMultisample(r.RENDERBUFFER,Z,r.DEPTH24_STENCIL8,M.width,M.height):Ze(M)?l.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,Z,r.DEPTH24_STENCIL8,M.width,M.height):r.renderbufferStorage(r.RENDERBUFFER,r.DEPTH_STENCIL,M.width,M.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.DEPTH_STENCIL_ATTACHMENT,r.RENDERBUFFER,R)}else{const Z=M.textures;for(let re=0;re<Z.length;re++){const ne=Z[re],nt=s.convert(ne.format,ne.colorSpace),Ne=s.convert(ne.type),le=b(ne.internalFormat,nt,Ne,ne.colorSpace),ue=Re(M);j&&Ze(M)===!1?r.renderbufferStorageMultisample(r.RENDERBUFFER,ue,le,M.width,M.height):Ze(M)?l.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,ue,le,M.width,M.height):r.renderbufferStorage(r.RENDERBUFFER,le,M.width,M.height)}}r.bindRenderbuffer(r.RENDERBUFFER,null)}function Mt(R,M){if(M&&M.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(r.FRAMEBUFFER,R),!(M.depthTexture&&M.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!n.get(M.depthTexture).__webglTexture||M.depthTexture.image.width!==M.width||M.depthTexture.image.height!==M.height)&&(M.depthTexture.image.width=M.width,M.depthTexture.image.height=M.height,M.depthTexture.needsUpdate=!0),q(M.depthTexture,0);const Z=n.get(M.depthTexture).__webglTexture,re=Re(M);if(M.depthTexture.format===zr)Ze(M)?l.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.TEXTURE_2D,Z,0,re):r.framebufferTexture2D(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.TEXTURE_2D,Z,0);else if(M.depthTexture.format===ws)Ze(M)?l.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,r.DEPTH_STENCIL_ATTACHMENT,r.TEXTURE_2D,Z,0,re):r.framebufferTexture2D(r.FRAMEBUFFER,r.DEPTH_STENCIL_ATTACHMENT,r.TEXTURE_2D,Z,0);else throw new Error("Unknown depthTexture format")}function Ye(R){const M=n.get(R),j=R.isWebGLCubeRenderTarget===!0;if(R.depthTexture&&!M.__autoAllocateDepthBuffer){if(j)throw new Error("target.depthTexture not supported in Cube render targets");Mt(M.__webglFramebuffer,R)}else if(j){M.__webglDepthbuffer=[];for(let Z=0;Z<6;Z++)t.bindFramebuffer(r.FRAMEBUFFER,M.__webglFramebuffer[Z]),M.__webglDepthbuffer[Z]=r.createRenderbuffer(),Ee(M.__webglDepthbuffer[Z],R,!1)}else t.bindFramebuffer(r.FRAMEBUFFER,M.__webglFramebuffer),M.__webglDepthbuffer=r.createRenderbuffer(),Ee(M.__webglDepthbuffer,R,!1);t.bindFramebuffer(r.FRAMEBUFFER,null)}function F(R,M,j){const Z=n.get(R);M!==void 0&&Te(Z.__webglFramebuffer,R,R.texture,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,0),j!==void 0&&Ye(R)}function Ft(R){const M=R.texture,j=n.get(R),Z=n.get(M);R.addEventListener("dispose",D);const re=R.textures,ne=R.isWebGLCubeRenderTarget===!0,nt=re.length>1,Ne=m(R)||o;if(nt||(Z.__webglTexture===void 0&&(Z.__webglTexture=r.createTexture()),Z.__version=M.version,a.memory.textures++),ne){j.__webglFramebuffer=[];for(let le=0;le<6;le++)if(o&&M.mipmaps&&M.mipmaps.length>0){j.__webglFramebuffer[le]=[];for(let ue=0;ue<M.mipmaps.length;ue++)j.__webglFramebuffer[le][ue]=r.createFramebuffer()}else j.__webglFramebuffer[le]=r.createFramebuffer()}else{if(o&&M.mipmaps&&M.mipmaps.length>0){j.__webglFramebuffer=[];for(let le=0;le<M.mipmaps.length;le++)j.__webglFramebuffer[le]=r.createFramebuffer()}else j.__webglFramebuffer=r.createFramebuffer();if(nt)if(i.drawBuffers)for(let le=0,ue=re.length;le<ue;le++){const ze=n.get(re[le]);ze.__webglTexture===void 0&&(ze.__webglTexture=r.createTexture(),a.memory.textures++)}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(o&&R.samples>0&&Ze(R)===!1){j.__webglMultisampledFramebuffer=r.createFramebuffer(),j.__webglColorRenderbuffer=[],t.bindFramebuffer(r.FRAMEBUFFER,j.__webglMultisampledFramebuffer);for(let le=0;le<re.length;le++){const ue=re[le];j.__webglColorRenderbuffer[le]=r.createRenderbuffer(),r.bindRenderbuffer(r.RENDERBUFFER,j.__webglColorRenderbuffer[le]);const ze=s.convert(ue.format,ue.colorSpace),ae=s.convert(ue.type),Dt=b(ue.internalFormat,ze,ae,ue.colorSpace,R.isXRRenderTarget===!0),Ge=Re(R);r.renderbufferStorageMultisample(r.RENDERBUFFER,Ge,Dt,R.width,R.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+le,r.RENDERBUFFER,j.__webglColorRenderbuffer[le])}r.bindRenderbuffer(r.RENDERBUFFER,null),R.depthBuffer&&(j.__webglDepthRenderbuffer=r.createRenderbuffer(),Ee(j.__webglDepthRenderbuffer,R,!0)),t.bindFramebuffer(r.FRAMEBUFFER,null)}}if(ne){t.bindTexture(r.TEXTURE_CUBE_MAP,Z.__webglTexture),V(r.TEXTURE_CUBE_MAP,M,Ne);for(let le=0;le<6;le++)if(o&&M.mipmaps&&M.mipmaps.length>0)for(let ue=0;ue<M.mipmaps.length;ue++)Te(j.__webglFramebuffer[le][ue],R,M,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+le,ue);else Te(j.__webglFramebuffer[le],R,M,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+le,0);v(M,Ne)&&A(r.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(nt){for(let le=0,ue=re.length;le<ue;le++){const ze=re[le],ae=n.get(ze);t.bindTexture(r.TEXTURE_2D,ae.__webglTexture),V(r.TEXTURE_2D,ze,Ne),Te(j.__webglFramebuffer,R,ze,r.COLOR_ATTACHMENT0+le,r.TEXTURE_2D,0),v(ze,Ne)&&A(r.TEXTURE_2D)}t.unbindTexture()}else{let le=r.TEXTURE_2D;if((R.isWebGL3DRenderTarget||R.isWebGLArrayRenderTarget)&&(o?le=R.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),t.bindTexture(le,Z.__webglTexture),V(le,M,Ne),o&&M.mipmaps&&M.mipmaps.length>0)for(let ue=0;ue<M.mipmaps.length;ue++)Te(j.__webglFramebuffer[ue],R,M,r.COLOR_ATTACHMENT0,le,ue);else Te(j.__webglFramebuffer,R,M,r.COLOR_ATTACHMENT0,le,0);v(M,Ne)&&A(le),t.unbindTexture()}R.depthBuffer&&Ye(R)}function Pe(R){const M=m(R)||o,j=R.textures;for(let Z=0,re=j.length;Z<re;Z++){const ne=j[Z];if(v(ne,M)){const nt=R.isWebGLCubeRenderTarget?r.TEXTURE_CUBE_MAP:r.TEXTURE_2D,Ne=n.get(ne).__webglTexture;t.bindTexture(nt,Ne),A(nt),t.unbindTexture()}}}function Ie(R){if(o&&R.samples>0&&Ze(R)===!1){const M=R.textures,j=R.width,Z=R.height;let re=r.COLOR_BUFFER_BIT;const ne=[],nt=R.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,Ne=n.get(R),le=M.length>1;if(le)for(let ue=0;ue<M.length;ue++)t.bindFramebuffer(r.FRAMEBUFFER,Ne.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+ue,r.RENDERBUFFER,null),t.bindFramebuffer(r.FRAMEBUFFER,Ne.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+ue,r.TEXTURE_2D,null,0);t.bindFramebuffer(r.READ_FRAMEBUFFER,Ne.__webglMultisampledFramebuffer),t.bindFramebuffer(r.DRAW_FRAMEBUFFER,Ne.__webglFramebuffer);for(let ue=0;ue<M.length;ue++){ne.push(r.COLOR_ATTACHMENT0+ue),R.depthBuffer&&ne.push(nt);const ze=Ne.__ignoreDepthValues!==void 0?Ne.__ignoreDepthValues:!1;if(ze===!1&&(R.depthBuffer&&(re|=r.DEPTH_BUFFER_BIT),R.stencilBuffer&&(re|=r.STENCIL_BUFFER_BIT)),le&&r.framebufferRenderbuffer(r.READ_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.RENDERBUFFER,Ne.__webglColorRenderbuffer[ue]),ze===!0&&(r.invalidateFramebuffer(r.READ_FRAMEBUFFER,[nt]),r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,[nt])),le){const ae=n.get(M[ue]).__webglTexture;r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,ae,0)}r.blitFramebuffer(0,0,j,Z,0,0,j,Z,re,r.NEAREST),c&&r.invalidateFramebuffer(r.READ_FRAMEBUFFER,ne)}if(t.bindFramebuffer(r.READ_FRAMEBUFFER,null),t.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),le)for(let ue=0;ue<M.length;ue++){t.bindFramebuffer(r.FRAMEBUFFER,Ne.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+ue,r.RENDERBUFFER,Ne.__webglColorRenderbuffer[ue]);const ze=n.get(M[ue]).__webglTexture;t.bindFramebuffer(r.FRAMEBUFFER,Ne.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+ue,r.TEXTURE_2D,ze,0)}t.bindFramebuffer(r.DRAW_FRAMEBUFFER,Ne.__webglMultisampledFramebuffer)}}function Re(R){return Math.min(i.maxSamples,R.samples)}function Ze(R){const M=n.get(R);return o&&R.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&M.__useRenderToTexture!==!1}function Ke(R){const M=a.render.frame;h.get(R)!==M&&(h.set(R,M),R.update())}function st(R,M){const j=R.colorSpace,Z=R.format,re=R.type;return R.isCompressedTexture===!0||R.isVideoTexture===!0||R.format===Ll||j!==Sn&&j!==dr&&(Lt.getTransfer(j)===jt?o===!1?e.has("EXT_sRGB")===!0&&Z===ai?(R.format=Ll,R.minFilter=wn,R.generateMipmaps=!1):M=jh.sRGBToLinear(M):(Z!==ai||re!==vr)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",j)),M}function Ot(R){return typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement?(u.width=R.naturalWidth||R.width,u.height=R.naturalHeight||R.height):typeof VideoFrame<"u"&&R instanceof VideoFrame?(u.width=R.displayWidth,u.height=R.displayHeight):(u.width=R.width,u.height=R.height),u}this.allocateTextureUnit=O,this.resetTextureUnits=L,this.setTexture2D=q,this.setTexture2DArray=$,this.setTexture3D=K,this.setTextureCube=se,this.rebindTextures=F,this.setupRenderTarget=Ft,this.updateRenderTargetMipmap=Pe,this.updateMultisampleRenderTarget=Ie,this.setupDepthRenderbuffer=Ye,this.setupFrameBufferTexture=Te,this.useMultisampledRTT=Ze}function Q0(r,e,t){const n=t.isWebGL2;function i(s,a=dr){let o;const l=Lt.getTransfer(a);if(s===vr)return r.UNSIGNED_BYTE;if(s===Nh)return r.UNSIGNED_SHORT_4_4_4_4;if(s===Uh)return r.UNSIGNED_SHORT_5_5_5_1;if(s===xp)return r.BYTE;if(s===Mp)return r.SHORT;if(s===Wl)return r.UNSIGNED_SHORT;if(s===Dh)return r.INT;if(s===pr)return r.UNSIGNED_INT;if(s===fi)return r.FLOAT;if(s===ua)return n?r.HALF_FLOAT:(o=e.get("OES_texture_half_float"),o!==null?o.HALF_FLOAT_OES:null);if(s===yp)return r.ALPHA;if(s===ai)return r.RGBA;if(s===Sp)return r.LUMINANCE;if(s===Ep)return r.LUMINANCE_ALPHA;if(s===zr)return r.DEPTH_COMPONENT;if(s===ws)return r.DEPTH_STENCIL;if(s===Ll)return o=e.get("EXT_sRGB"),o!==null?o.SRGB_ALPHA_EXT:null;if(s===Fh)return r.RED;if(s===Oh)return r.RED_INTEGER;if(s===bp)return r.RG;if(s===Bh)return r.RG_INTEGER;if(s===kh)return r.RGBA_INTEGER;if(s===Co||s===Lo||s===Po||s===Io)if(l===jt)if(o=e.get("WEBGL_compressed_texture_s3tc_srgb"),o!==null){if(s===Co)return o.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(s===Lo)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(s===Po)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(s===Io)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(o=e.get("WEBGL_compressed_texture_s3tc"),o!==null){if(s===Co)return o.COMPRESSED_RGB_S3TC_DXT1_EXT;if(s===Lo)return o.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(s===Po)return o.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(s===Io)return o.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(s===Nc||s===Uc||s===Fc||s===Oc)if(o=e.get("WEBGL_compressed_texture_pvrtc"),o!==null){if(s===Nc)return o.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(s===Uc)return o.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(s===Fc)return o.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(s===Oc)return o.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(s===zh)return o=e.get("WEBGL_compressed_texture_etc1"),o!==null?o.COMPRESSED_RGB_ETC1_WEBGL:null;if(s===Bc||s===kc)if(o=e.get("WEBGL_compressed_texture_etc"),o!==null){if(s===Bc)return l===jt?o.COMPRESSED_SRGB8_ETC2:o.COMPRESSED_RGB8_ETC2;if(s===kc)return l===jt?o.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:o.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(s===zc||s===Gc||s===Hc||s===Vc||s===Wc||s===Xc||s===qc||s===jc||s===Yc||s===Kc||s===$c||s===Zc||s===Jc||s===Qc)if(o=e.get("WEBGL_compressed_texture_astc"),o!==null){if(s===zc)return l===jt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:o.COMPRESSED_RGBA_ASTC_4x4_KHR;if(s===Gc)return l===jt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:o.COMPRESSED_RGBA_ASTC_5x4_KHR;if(s===Hc)return l===jt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:o.COMPRESSED_RGBA_ASTC_5x5_KHR;if(s===Vc)return l===jt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:o.COMPRESSED_RGBA_ASTC_6x5_KHR;if(s===Wc)return l===jt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:o.COMPRESSED_RGBA_ASTC_6x6_KHR;if(s===Xc)return l===jt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:o.COMPRESSED_RGBA_ASTC_8x5_KHR;if(s===qc)return l===jt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:o.COMPRESSED_RGBA_ASTC_8x6_KHR;if(s===jc)return l===jt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:o.COMPRESSED_RGBA_ASTC_8x8_KHR;if(s===Yc)return l===jt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:o.COMPRESSED_RGBA_ASTC_10x5_KHR;if(s===Kc)return l===jt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:o.COMPRESSED_RGBA_ASTC_10x6_KHR;if(s===$c)return l===jt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:o.COMPRESSED_RGBA_ASTC_10x8_KHR;if(s===Zc)return l===jt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:o.COMPRESSED_RGBA_ASTC_10x10_KHR;if(s===Jc)return l===jt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:o.COMPRESSED_RGBA_ASTC_12x10_KHR;if(s===Qc)return l===jt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:o.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(s===Do||s===eu||s===tu)if(o=e.get("EXT_texture_compression_bptc"),o!==null){if(s===Do)return l===jt?o.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:o.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(s===eu)return o.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(s===tu)return o.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(s===Tp||s===nu||s===iu||s===ru)if(o=e.get("EXT_texture_compression_rgtc"),o!==null){if(s===Do)return o.COMPRESSED_RED_RGTC1_EXT;if(s===nu)return o.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(s===iu)return o.COMPRESSED_RED_GREEN_RGTC2_EXT;if(s===ru)return o.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return s===kr?n?r.UNSIGNED_INT_24_8:(o=e.get("WEBGL_depth_texture"),o!==null?o.UNSIGNED_INT_24_8_WEBGL:null):r[s]!==void 0?r[s]:null}return{convert:i}}class ex extends Nn{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class mi extends en{constructor(){super(),this.isGroup=!0,this.type="Group"}}const tx={type:"move"};class sl{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new mi,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new mi,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new P,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new P),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new mi,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new P,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new P),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let i=null,s=null,a=null;const o=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){a=!0;for(const _ of e.hand.values()){const f=t.getJointPose(_,n),m=this._getHandJoint(c,_);f!==null&&(m.matrix.fromArray(f.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,m.jointRadius=f.radius),m.visible=f!==null}const u=c.joints["index-finger-tip"],h=c.joints["thumb-tip"],d=u.position.distanceTo(h.position),p=.02,g=.005;c.inputState.pinching&&d>p+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&d<=p-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,n),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));o!==null&&(i=t.getPose(e.targetRaySpace,n),i===null&&s!==null&&(i=s),i!==null&&(o.matrix.fromArray(i.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,i.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(i.linearVelocity)):o.hasLinearVelocity=!1,i.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(i.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(tx)))}return o!==null&&(o.visible=i!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const n=new mi;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}}const nx=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,ix=`
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

}`;class rx{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t,n){if(this.texture===null){const i=new xn,s=e.properties.get(i);s.__webglTexture=t.texture,(t.depthNear!=n.depthNear||t.depthFar!=n.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=i}}render(e,t){if(this.texture!==null){if(this.mesh===null){const n=t.cameras[0].viewport,i=new Zi({extensions:{fragDepth:!0},vertexShader:nx,fragmentShader:ix,uniforms:{depthColor:{value:this.texture},depthWidth:{value:n.z},depthHeight:{value:n.w}}});this.mesh=new Qt(new lo(20,20),i)}e.render(this.mesh,t)}}reset(){this.texture=null,this.mesh=null}}class sx extends Us{constructor(e,t){super();const n=this;let i=null,s=1,a=null,o="local-floor",l=1,c=null,u=null,h=null,d=null,p=null,g=null;const _=new rx,f=t.getContextAttributes();let m=null,y=null;const v=[],A=[],b=new Se;let w=null;const S=new Nn;S.layers.enable(1),S.viewport=new Ht;const I=new Nn;I.layers.enable(2),I.viewport=new Ht;const D=[S,I],x=new ex;x.layers.enable(1),x.layers.enable(2);let E=null,U=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(V){let ie=v[V];return ie===void 0&&(ie=new sl,v[V]=ie),ie.getTargetRaySpace()},this.getControllerGrip=function(V){let ie=v[V];return ie===void 0&&(ie=new sl,v[V]=ie),ie.getGripSpace()},this.getHand=function(V){let ie=v[V];return ie===void 0&&(ie=new sl,v[V]=ie),ie.getHandSpace()};function Y(V){const ie=A.indexOf(V.inputSource);if(ie===-1)return;const Me=v[ie];Me!==void 0&&(Me.update(V.inputSource,V.frame,c||a),Me.dispatchEvent({type:V.type,data:V.inputSource}))}function L(){i.removeEventListener("select",Y),i.removeEventListener("selectstart",Y),i.removeEventListener("selectend",Y),i.removeEventListener("squeeze",Y),i.removeEventListener("squeezestart",Y),i.removeEventListener("squeezeend",Y),i.removeEventListener("end",L),i.removeEventListener("inputsourceschange",O);for(let V=0;V<v.length;V++){const ie=A[V];ie!==null&&(A[V]=null,v[V].disconnect(ie))}E=null,U=null,_.reset(),e.setRenderTarget(m),p=null,d=null,h=null,i=null,y=null,He.stop(),n.isPresenting=!1,e.setPixelRatio(w),e.setSize(b.width,b.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(V){s=V,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(V){o=V,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(V){c=V},this.getBaseLayer=function(){return d!==null?d:p},this.getBinding=function(){return h},this.getFrame=function(){return g},this.getSession=function(){return i},this.setSession=async function(V){if(i=V,i!==null){if(m=e.getRenderTarget(),i.addEventListener("select",Y),i.addEventListener("selectstart",Y),i.addEventListener("selectend",Y),i.addEventListener("squeeze",Y),i.addEventListener("squeezestart",Y),i.addEventListener("squeezeend",Y),i.addEventListener("end",L),i.addEventListener("inputsourceschange",O),f.xrCompatible!==!0&&await t.makeXRCompatible(),w=e.getPixelRatio(),e.getSize(b),i.renderState.layers===void 0||e.capabilities.isWebGL2===!1){const ie={antialias:i.renderState.layers===void 0?f.antialias:!0,alpha:!0,depth:f.depth,stencil:f.stencil,framebufferScaleFactor:s};p=new XRWebGLLayer(i,t,ie),i.updateRenderState({baseLayer:p}),e.setPixelRatio(1),e.setSize(p.framebufferWidth,p.framebufferHeight,!1),y=new Gr(p.framebufferWidth,p.framebufferHeight,{format:ai,type:vr,colorSpace:e.outputColorSpace,stencilBuffer:f.stencil})}else{let ie=null,Me=null,We=null;f.depth&&(We=f.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,ie=f.stencil?ws:zr,Me=f.stencil?kr:pr);const Te={colorFormat:t.RGBA8,depthFormat:We,scaleFactor:s};h=new XRWebGLBinding(i,t),d=h.createProjectionLayer(Te),i.updateRenderState({layers:[d]}),e.setPixelRatio(1),e.setSize(d.textureWidth,d.textureHeight,!1),y=new Gr(d.textureWidth,d.textureHeight,{format:ai,type:vr,depthTexture:new id(d.textureWidth,d.textureHeight,Me,void 0,void 0,void 0,void 0,void 0,void 0,ie),stencilBuffer:f.stencil,colorSpace:e.outputColorSpace,samples:f.antialias?4:0});const Ee=e.properties.get(y);Ee.__ignoreDepthValues=d.ignoreDepthValues}y.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await i.requestReferenceSpace(o),He.setContext(i),He.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(i!==null)return i.environmentBlendMode};function O(V){for(let ie=0;ie<V.removed.length;ie++){const Me=V.removed[ie],We=A.indexOf(Me);We>=0&&(A[We]=null,v[We].disconnect(Me))}for(let ie=0;ie<V.added.length;ie++){const Me=V.added[ie];let We=A.indexOf(Me);if(We===-1){for(let Ee=0;Ee<v.length;Ee++)if(Ee>=A.length){A.push(Me),We=Ee;break}else if(A[Ee]===null){A[Ee]=Me,We=Ee;break}if(We===-1)break}const Te=v[We];Te&&Te.connect(Me)}}const k=new P,q=new P;function $(V,ie,Me){k.setFromMatrixPosition(ie.matrixWorld),q.setFromMatrixPosition(Me.matrixWorld);const We=k.distanceTo(q),Te=ie.projectionMatrix.elements,Ee=Me.projectionMatrix.elements,Mt=Te[14]/(Te[10]-1),Ye=Te[14]/(Te[10]+1),F=(Te[9]+1)/Te[5],Ft=(Te[9]-1)/Te[5],Pe=(Te[8]-1)/Te[0],Ie=(Ee[8]+1)/Ee[0],Re=Mt*Pe,Ze=Mt*Ie,Ke=We/(-Pe+Ie),st=Ke*-Pe;ie.matrixWorld.decompose(V.position,V.quaternion,V.scale),V.translateX(st),V.translateZ(Ke),V.matrixWorld.compose(V.position,V.quaternion,V.scale),V.matrixWorldInverse.copy(V.matrixWorld).invert();const Ot=Mt+Ke,R=Ye+Ke,M=Re-st,j=Ze+(We-st),Z=F*Ye/R*Ot,re=Ft*Ye/R*Ot;V.projectionMatrix.makePerspective(M,j,Z,re,Ot,R),V.projectionMatrixInverse.copy(V.projectionMatrix).invert()}function K(V,ie){ie===null?V.matrixWorld.copy(V.matrix):V.matrixWorld.multiplyMatrices(ie.matrixWorld,V.matrix),V.matrixWorldInverse.copy(V.matrixWorld).invert()}this.updateCamera=function(V){if(i===null)return;_.texture!==null&&(V.near=_.depthNear,V.far=_.depthFar),x.near=I.near=S.near=V.near,x.far=I.far=S.far=V.far,(E!==x.near||U!==x.far)&&(i.updateRenderState({depthNear:x.near,depthFar:x.far}),E=x.near,U=x.far,S.near=E,S.far=U,I.near=E,I.far=U,S.updateProjectionMatrix(),I.updateProjectionMatrix(),V.updateProjectionMatrix());const ie=V.parent,Me=x.cameras;K(x,ie);for(let We=0;We<Me.length;We++)K(Me[We],ie);Me.length===2?$(x,S,I):x.projectionMatrix.copy(S.projectionMatrix),se(V,x,ie)};function se(V,ie,Me){Me===null?V.matrix.copy(ie.matrixWorld):(V.matrix.copy(Me.matrixWorld),V.matrix.invert(),V.matrix.multiply(ie.matrixWorld)),V.matrix.decompose(V.position,V.quaternion,V.scale),V.updateMatrixWorld(!0),V.projectionMatrix.copy(ie.projectionMatrix),V.projectionMatrixInverse.copy(ie.projectionMatrixInverse),V.isPerspectiveCamera&&(V.fov=Cs*2*Math.atan(1/V.projectionMatrix.elements[5]),V.zoom=1)}this.getCamera=function(){return x},this.getFoveation=function(){if(!(d===null&&p===null))return l},this.setFoveation=function(V){l=V,d!==null&&(d.fixedFoveation=V),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=V)},this.hasDepthSensing=function(){return _.texture!==null};let oe=null;function _e(V,ie){if(u=ie.getViewerPose(c||a),g=ie,u!==null){const Me=u.views;p!==null&&(e.setRenderTargetFramebuffer(y,p.framebuffer),e.setRenderTarget(y));let We=!1;Me.length!==x.cameras.length&&(x.cameras.length=0,We=!0);for(let Ee=0;Ee<Me.length;Ee++){const Mt=Me[Ee];let Ye=null;if(p!==null)Ye=p.getViewport(Mt);else{const Ft=h.getViewSubImage(d,Mt);Ye=Ft.viewport,Ee===0&&(e.setRenderTargetTextures(y,Ft.colorTexture,d.ignoreDepthValues?void 0:Ft.depthStencilTexture),e.setRenderTarget(y))}let F=D[Ee];F===void 0&&(F=new Nn,F.layers.enable(Ee),F.viewport=new Ht,D[Ee]=F),F.matrix.fromArray(Mt.transform.matrix),F.matrix.decompose(F.position,F.quaternion,F.scale),F.projectionMatrix.fromArray(Mt.projectionMatrix),F.projectionMatrixInverse.copy(F.projectionMatrix).invert(),F.viewport.set(Ye.x,Ye.y,Ye.width,Ye.height),Ee===0&&(x.matrix.copy(F.matrix),x.matrix.decompose(x.position,x.quaternion,x.scale)),We===!0&&x.cameras.push(F)}const Te=i.enabledFeatures;if(Te&&Te.includes("depth-sensing")){const Ee=h.getDepthInformation(Me[0]);Ee&&Ee.isValid&&Ee.texture&&_.init(e,Ee,i.renderState)}}for(let Me=0;Me<v.length;Me++){const We=A[Me],Te=v[Me];We!==null&&Te!==void 0&&Te.update(We,ie,c||a)}_.render(e,x),oe&&oe(V,ie),ie.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:ie}),g=null}const He=new nd;He.setAnimationLoop(_e),this.setAnimationLoop=function(V){oe=V},this.dispose=function(){}}}const Pr=new Ti,ax=new je;function ox(r,e){function t(f,m){f.matrixAutoUpdate===!0&&f.updateMatrix(),m.value.copy(f.matrix)}function n(f,m){m.color.getRGB(f.fogColor.value,ed(r)),m.isFog?(f.fogNear.value=m.near,f.fogFar.value=m.far):m.isFogExp2&&(f.fogDensity.value=m.density)}function i(f,m,y,v,A){m.isMeshBasicMaterial||m.isMeshLambertMaterial?s(f,m):m.isMeshToonMaterial?(s(f,m),h(f,m)):m.isMeshPhongMaterial?(s(f,m),u(f,m)):m.isMeshStandardMaterial?(s(f,m),d(f,m),m.isMeshPhysicalMaterial&&p(f,m,A)):m.isMeshMatcapMaterial?(s(f,m),g(f,m)):m.isMeshDepthMaterial?s(f,m):m.isMeshDistanceMaterial?(s(f,m),_(f,m)):m.isMeshNormalMaterial?s(f,m):m.isLineBasicMaterial?(a(f,m),m.isLineDashedMaterial&&o(f,m)):m.isPointsMaterial?l(f,m,y,v):m.isSpriteMaterial?c(f,m):m.isShadowMaterial?(f.color.value.copy(m.color),f.opacity.value=m.opacity):m.isShaderMaterial&&(m.uniformsNeedUpdate=!1)}function s(f,m){f.opacity.value=m.opacity,m.color&&f.diffuse.value.copy(m.color),m.emissive&&f.emissive.value.copy(m.emissive).multiplyScalar(m.emissiveIntensity),m.map&&(f.map.value=m.map,t(m.map,f.mapTransform)),m.alphaMap&&(f.alphaMap.value=m.alphaMap,t(m.alphaMap,f.alphaMapTransform)),m.bumpMap&&(f.bumpMap.value=m.bumpMap,t(m.bumpMap,f.bumpMapTransform),f.bumpScale.value=m.bumpScale,m.side===Un&&(f.bumpScale.value*=-1)),m.normalMap&&(f.normalMap.value=m.normalMap,t(m.normalMap,f.normalMapTransform),f.normalScale.value.copy(m.normalScale),m.side===Un&&f.normalScale.value.negate()),m.displacementMap&&(f.displacementMap.value=m.displacementMap,t(m.displacementMap,f.displacementMapTransform),f.displacementScale.value=m.displacementScale,f.displacementBias.value=m.displacementBias),m.emissiveMap&&(f.emissiveMap.value=m.emissiveMap,t(m.emissiveMap,f.emissiveMapTransform)),m.specularMap&&(f.specularMap.value=m.specularMap,t(m.specularMap,f.specularMapTransform)),m.alphaTest>0&&(f.alphaTest.value=m.alphaTest);const y=e.get(m),v=y.envMap,A=y.envMapRotation;if(v&&(f.envMap.value=v,Pr.copy(A),Pr.x*=-1,Pr.y*=-1,Pr.z*=-1,v.isCubeTexture&&v.isRenderTargetTexture===!1&&(Pr.y*=-1,Pr.z*=-1),f.envMapRotation.value.setFromMatrix4(ax.makeRotationFromEuler(Pr)),f.flipEnvMap.value=v.isCubeTexture&&v.isRenderTargetTexture===!1?-1:1,f.reflectivity.value=m.reflectivity,f.ior.value=m.ior,f.refractionRatio.value=m.refractionRatio),m.lightMap){f.lightMap.value=m.lightMap;const b=r._useLegacyLights===!0?Math.PI:1;f.lightMapIntensity.value=m.lightMapIntensity*b,t(m.lightMap,f.lightMapTransform)}m.aoMap&&(f.aoMap.value=m.aoMap,f.aoMapIntensity.value=m.aoMapIntensity,t(m.aoMap,f.aoMapTransform))}function a(f,m){f.diffuse.value.copy(m.color),f.opacity.value=m.opacity,m.map&&(f.map.value=m.map,t(m.map,f.mapTransform))}function o(f,m){f.dashSize.value=m.dashSize,f.totalSize.value=m.dashSize+m.gapSize,f.scale.value=m.scale}function l(f,m,y,v){f.diffuse.value.copy(m.color),f.opacity.value=m.opacity,f.size.value=m.size*y,f.scale.value=v*.5,m.map&&(f.map.value=m.map,t(m.map,f.uvTransform)),m.alphaMap&&(f.alphaMap.value=m.alphaMap,t(m.alphaMap,f.alphaMapTransform)),m.alphaTest>0&&(f.alphaTest.value=m.alphaTest)}function c(f,m){f.diffuse.value.copy(m.color),f.opacity.value=m.opacity,f.rotation.value=m.rotation,m.map&&(f.map.value=m.map,t(m.map,f.mapTransform)),m.alphaMap&&(f.alphaMap.value=m.alphaMap,t(m.alphaMap,f.alphaMapTransform)),m.alphaTest>0&&(f.alphaTest.value=m.alphaTest)}function u(f,m){f.specular.value.copy(m.specular),f.shininess.value=Math.max(m.shininess,1e-4)}function h(f,m){m.gradientMap&&(f.gradientMap.value=m.gradientMap)}function d(f,m){f.metalness.value=m.metalness,m.metalnessMap&&(f.metalnessMap.value=m.metalnessMap,t(m.metalnessMap,f.metalnessMapTransform)),f.roughness.value=m.roughness,m.roughnessMap&&(f.roughnessMap.value=m.roughnessMap,t(m.roughnessMap,f.roughnessMapTransform)),e.get(m).envMap&&(f.envMapIntensity.value=m.envMapIntensity)}function p(f,m,y){f.ior.value=m.ior,m.sheen>0&&(f.sheenColor.value.copy(m.sheenColor).multiplyScalar(m.sheen),f.sheenRoughness.value=m.sheenRoughness,m.sheenColorMap&&(f.sheenColorMap.value=m.sheenColorMap,t(m.sheenColorMap,f.sheenColorMapTransform)),m.sheenRoughnessMap&&(f.sheenRoughnessMap.value=m.sheenRoughnessMap,t(m.sheenRoughnessMap,f.sheenRoughnessMapTransform))),m.clearcoat>0&&(f.clearcoat.value=m.clearcoat,f.clearcoatRoughness.value=m.clearcoatRoughness,m.clearcoatMap&&(f.clearcoatMap.value=m.clearcoatMap,t(m.clearcoatMap,f.clearcoatMapTransform)),m.clearcoatRoughnessMap&&(f.clearcoatRoughnessMap.value=m.clearcoatRoughnessMap,t(m.clearcoatRoughnessMap,f.clearcoatRoughnessMapTransform)),m.clearcoatNormalMap&&(f.clearcoatNormalMap.value=m.clearcoatNormalMap,t(m.clearcoatNormalMap,f.clearcoatNormalMapTransform),f.clearcoatNormalScale.value.copy(m.clearcoatNormalScale),m.side===Un&&f.clearcoatNormalScale.value.negate())),m.iridescence>0&&(f.iridescence.value=m.iridescence,f.iridescenceIOR.value=m.iridescenceIOR,f.iridescenceThicknessMinimum.value=m.iridescenceThicknessRange[0],f.iridescenceThicknessMaximum.value=m.iridescenceThicknessRange[1],m.iridescenceMap&&(f.iridescenceMap.value=m.iridescenceMap,t(m.iridescenceMap,f.iridescenceMapTransform)),m.iridescenceThicknessMap&&(f.iridescenceThicknessMap.value=m.iridescenceThicknessMap,t(m.iridescenceThicknessMap,f.iridescenceThicknessMapTransform))),m.transmission>0&&(f.transmission.value=m.transmission,f.transmissionSamplerMap.value=y.texture,f.transmissionSamplerSize.value.set(y.width,y.height),m.transmissionMap&&(f.transmissionMap.value=m.transmissionMap,t(m.transmissionMap,f.transmissionMapTransform)),f.thickness.value=m.thickness,m.thicknessMap&&(f.thicknessMap.value=m.thicknessMap,t(m.thicknessMap,f.thicknessMapTransform)),f.attenuationDistance.value=m.attenuationDistance,f.attenuationColor.value.copy(m.attenuationColor)),m.anisotropy>0&&(f.anisotropyVector.value.set(m.anisotropy*Math.cos(m.anisotropyRotation),m.anisotropy*Math.sin(m.anisotropyRotation)),m.anisotropyMap&&(f.anisotropyMap.value=m.anisotropyMap,t(m.anisotropyMap,f.anisotropyMapTransform))),f.specularIntensity.value=m.specularIntensity,f.specularColor.value.copy(m.specularColor),m.specularColorMap&&(f.specularColorMap.value=m.specularColorMap,t(m.specularColorMap,f.specularColorMapTransform)),m.specularIntensityMap&&(f.specularIntensityMap.value=m.specularIntensityMap,t(m.specularIntensityMap,f.specularIntensityMapTransform))}function g(f,m){m.matcap&&(f.matcap.value=m.matcap)}function _(f,m){const y=e.get(m).light;f.referencePosition.value.setFromMatrixPosition(y.matrixWorld),f.nearDistance.value=y.shadow.camera.near,f.farDistance.value=y.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:i}}function lx(r,e,t,n){let i={},s={},a=[];const o=t.isWebGL2?r.getParameter(r.MAX_UNIFORM_BUFFER_BINDINGS):0;function l(y,v){const A=v.program;n.uniformBlockBinding(y,A)}function c(y,v){let A=i[y.id];A===void 0&&(g(y),A=u(y),i[y.id]=A,y.addEventListener("dispose",f));const b=v.program;n.updateUBOMapping(y,b);const w=e.render.frame;s[y.id]!==w&&(d(y),s[y.id]=w)}function u(y){const v=h();y.__bindingPointIndex=v;const A=r.createBuffer(),b=y.__size,w=y.usage;return r.bindBuffer(r.UNIFORM_BUFFER,A),r.bufferData(r.UNIFORM_BUFFER,b,w),r.bindBuffer(r.UNIFORM_BUFFER,null),r.bindBufferBase(r.UNIFORM_BUFFER,v,A),A}function h(){for(let y=0;y<o;y++)if(a.indexOf(y)===-1)return a.push(y),y;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(y){const v=i[y.id],A=y.uniforms,b=y.__cache;r.bindBuffer(r.UNIFORM_BUFFER,v);for(let w=0,S=A.length;w<S;w++){const I=Array.isArray(A[w])?A[w]:[A[w]];for(let D=0,x=I.length;D<x;D++){const E=I[D];if(p(E,w,D,b)===!0){const U=E.__offset,Y=Array.isArray(E.value)?E.value:[E.value];let L=0;for(let O=0;O<Y.length;O++){const k=Y[O],q=_(k);typeof k=="number"||typeof k=="boolean"?(E.__data[0]=k,r.bufferSubData(r.UNIFORM_BUFFER,U+L,E.__data)):k.isMatrix3?(E.__data[0]=k.elements[0],E.__data[1]=k.elements[1],E.__data[2]=k.elements[2],E.__data[3]=0,E.__data[4]=k.elements[3],E.__data[5]=k.elements[4],E.__data[6]=k.elements[5],E.__data[7]=0,E.__data[8]=k.elements[6],E.__data[9]=k.elements[7],E.__data[10]=k.elements[8],E.__data[11]=0):(k.toArray(E.__data,L),L+=q.storage/Float32Array.BYTES_PER_ELEMENT)}r.bufferSubData(r.UNIFORM_BUFFER,U,E.__data)}}}r.bindBuffer(r.UNIFORM_BUFFER,null)}function p(y,v,A,b){const w=y.value,S=v+"_"+A;if(b[S]===void 0)return typeof w=="number"||typeof w=="boolean"?b[S]=w:b[S]=w.clone(),!0;{const I=b[S];if(typeof w=="number"||typeof w=="boolean"){if(I!==w)return b[S]=w,!0}else if(I.equals(w)===!1)return I.copy(w),!0}return!1}function g(y){const v=y.uniforms;let A=0;const b=16;for(let S=0,I=v.length;S<I;S++){const D=Array.isArray(v[S])?v[S]:[v[S]];for(let x=0,E=D.length;x<E;x++){const U=D[x],Y=Array.isArray(U.value)?U.value:[U.value];for(let L=0,O=Y.length;L<O;L++){const k=Y[L],q=_(k),$=A%b;$!==0&&b-$<q.boundary&&(A+=b-$),U.__data=new Float32Array(q.storage/Float32Array.BYTES_PER_ELEMENT),U.__offset=A,A+=q.storage}}}const w=A%b;return w>0&&(A+=b-w),y.__size=A,y.__cache={},this}function _(y){const v={boundary:0,storage:0};return typeof y=="number"||typeof y=="boolean"?(v.boundary=4,v.storage=4):y.isVector2?(v.boundary=8,v.storage=8):y.isVector3||y.isColor?(v.boundary=16,v.storage=12):y.isVector4?(v.boundary=16,v.storage=16):y.isMatrix3?(v.boundary=48,v.storage=48):y.isMatrix4?(v.boundary=64,v.storage=64):y.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",y),v}function f(y){const v=y.target;v.removeEventListener("dispose",f);const A=a.indexOf(v.__bindingPointIndex);a.splice(A,1),r.deleteBuffer(i[v.id]),delete i[v.id],delete s[v.id]}function m(){for(const y in i)r.deleteBuffer(i[y]);a=[],i={},s={}}return{bind:l,update:c,dispose:m}}class Dl{constructor(e={}){const{canvas:t=Jp(),context:n=null,depth:i=!0,stencil:s=!0,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:h=!1}=e;this.isWebGLRenderer=!0;let d;n!==null?d=n.getContextAttributes().alpha:d=a;const p=new Uint32Array(4),g=new Int32Array(4);let _=null,f=null;const m=[],y=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Dn,this._useLegacyLights=!1,this.toneMapping=_r,this.toneMappingExposure=1;const v=this;let A=!1,b=0,w=0,S=null,I=-1,D=null;const x=new Ht,E=new Ht;let U=null;const Y=new Qe(0);let L=0,O=t.width,k=t.height,q=1,$=null,K=null;const se=new Ht(0,0,O,k),oe=new Ht(0,0,O,k);let _e=!1;const He=new Yl;let V=!1,ie=!1,Me=null;const We=new je,Te=new Se,Ee=new P,Mt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function Ye(){return S===null?q:1}let F=n;function Ft(T,B){for(let W=0;W<T.length;W++){const X=T[W],z=t.getContext(X,B);if(z!==null)return z}return null}try{const T={alpha:!0,depth:i,stencil:s,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:h};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${Vl}`),t.addEventListener("webglcontextlost",At,!1),t.addEventListener("webglcontextrestored",N,!1),t.addEventListener("webglcontextcreationerror",pe,!1),F===null){const B=["webgl2","webgl","experimental-webgl"];if(v.isWebGL1Renderer===!0&&B.shift(),F=Ft(B,T),F===null)throw Ft(B)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}typeof WebGLRenderingContext<"u"&&F instanceof WebGLRenderingContext&&console.warn("THREE.WebGLRenderer: WebGL 1 support was deprecated in r153 and will be removed in r163."),F.getShaderPrecisionFormat===void 0&&(F.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(T){throw console.error("THREE.WebGLRenderer: "+T.message),T}let Pe,Ie,Re,Ze,Ke,st,Ot,R,M,j,Z,re,ne,nt,Ne,le,ue,ze,ae,Dt,Ge,De,be,we;function gt(){Pe=new pv(F),Ie=new lv(F,Pe,e),Pe.init(Ie),De=new Q0(F,Pe,Ie),Re=new Z0(F,Pe,Ie),Ze=new _v(F),Ke=new O0,st=new J0(F,Pe,Re,Ke,Ie,De,Ze),Ot=new uv(v),R=new fv(v),M=new Em(F,Ie),be=new av(F,Pe,M,Ie),j=new mv(F,M,Ze,be),Z=new yv(F,j,M,Ze),ae=new Mv(F,Ie,st),le=new cv(Ke),re=new F0(v,Ot,R,Pe,Ie,be,le),ne=new ox(v,Ke),nt=new k0,Ne=new X0(Pe,Ie),ze=new sv(v,Ot,R,Re,Z,d,l),ue=new $0(v,Z,Ie),we=new lx(F,Ze,Ie,Re),Dt=new ov(F,Pe,Ze,Ie),Ge=new gv(F,Pe,Ze,Ie),Ze.programs=re.programs,v.capabilities=Ie,v.extensions=Pe,v.properties=Ke,v.renderLists=nt,v.shadowMap=ue,v.state=Re,v.info=Ze}gt();const tt=new sx(v,F);this.xr=tt,this.getContext=function(){return F},this.getContextAttributes=function(){return F.getContextAttributes()},this.forceContextLoss=function(){const T=Pe.get("WEBGL_lose_context");T&&T.loseContext()},this.forceContextRestore=function(){const T=Pe.get("WEBGL_lose_context");T&&T.restoreContext()},this.getPixelRatio=function(){return q},this.setPixelRatio=function(T){T!==void 0&&(q=T,this.setSize(O,k,!1))},this.getSize=function(T){return T.set(O,k)},this.setSize=function(T,B,W=!0){if(tt.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}O=T,k=B,t.width=Math.floor(T*q),t.height=Math.floor(B*q),W===!0&&(t.style.width=T+"px",t.style.height=B+"px"),this.setViewport(0,0,T,B)},this.getDrawingBufferSize=function(T){return T.set(O*q,k*q).floor()},this.setDrawingBufferSize=function(T,B,W){O=T,k=B,q=W,t.width=Math.floor(T*W),t.height=Math.floor(B*W),this.setViewport(0,0,T,B)},this.getCurrentViewport=function(T){return T.copy(x)},this.getViewport=function(T){return T.copy(se)},this.setViewport=function(T,B,W,X){T.isVector4?se.set(T.x,T.y,T.z,T.w):se.set(T,B,W,X),Re.viewport(x.copy(se).multiplyScalar(q).round())},this.getScissor=function(T){return T.copy(oe)},this.setScissor=function(T,B,W,X){T.isVector4?oe.set(T.x,T.y,T.z,T.w):oe.set(T,B,W,X),Re.scissor(E.copy(oe).multiplyScalar(q).round())},this.getScissorTest=function(){return _e},this.setScissorTest=function(T){Re.setScissorTest(_e=T)},this.setOpaqueSort=function(T){$=T},this.setTransparentSort=function(T){K=T},this.getClearColor=function(T){return T.copy(ze.getClearColor())},this.setClearColor=function(){ze.setClearColor.apply(ze,arguments)},this.getClearAlpha=function(){return ze.getClearAlpha()},this.setClearAlpha=function(){ze.setClearAlpha.apply(ze,arguments)},this.clear=function(T=!0,B=!0,W=!0){let X=0;if(T){let z=!1;if(S!==null){const xe=S.texture.format;z=xe===kh||xe===Bh||xe===Oh}if(z){const xe=S.texture.type,Ce=xe===vr||xe===pr||xe===Wl||xe===kr||xe===Nh||xe===Uh,Xe=ze.getClearColor(),$e=ze.getClearAlpha(),ct=Xe.r,at=Xe.g,lt=Xe.b;Ce?(p[0]=ct,p[1]=at,p[2]=lt,p[3]=$e,F.clearBufferuiv(F.COLOR,0,p)):(g[0]=ct,g[1]=at,g[2]=lt,g[3]=$e,F.clearBufferiv(F.COLOR,0,g))}else X|=F.COLOR_BUFFER_BIT}B&&(X|=F.DEPTH_BUFFER_BIT),W&&(X|=F.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),F.clear(X)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",At,!1),t.removeEventListener("webglcontextrestored",N,!1),t.removeEventListener("webglcontextcreationerror",pe,!1),nt.dispose(),Ne.dispose(),Ke.dispose(),Ot.dispose(),R.dispose(),Z.dispose(),be.dispose(),we.dispose(),re.dispose(),tt.dispose(),tt.removeEventListener("sessionstart",Bt),tt.removeEventListener("sessionend",ut),Me&&(Me.dispose(),Me=null),Zt.stop()};function At(T){T.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),A=!0}function N(){console.log("THREE.WebGLRenderer: Context Restored."),A=!1;const T=Ze.autoReset,B=ue.enabled,W=ue.autoUpdate,X=ue.needsUpdate,z=ue.type;gt(),Ze.autoReset=T,ue.enabled=B,ue.autoUpdate=W,ue.needsUpdate=X,ue.type=z}function pe(T){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",T.statusMessage)}function G(T){const B=T.target;B.removeEventListener("dispose",G),ce(B)}function ce(T){J(T),Ke.remove(T)}function J(T){const B=Ke.get(T).programs;B!==void 0&&(B.forEach(function(W){re.releaseProgram(W)}),T.isShaderMaterial&&re.releaseShaderCache(T))}this.renderBufferDirect=function(T,B,W,X,z,xe){B===null&&(B=Mt);const Ce=z.isMesh&&z.matrixWorld.determinant()<0,Xe=Gs(T,B,W,X,z);Re.setMaterial(X,Ce);let $e=W.index,ct=1;if(X.wireframe===!0){if($e=j.getWireframeAttribute(W),$e===void 0)return;ct=2}const at=W.drawRange,lt=W.attributes.position;let Jt=at.start*ct,yn=(at.start+at.count)*ct;xe!==null&&(Jt=Math.max(Jt,xe.start*ct),yn=Math.min(yn,(xe.start+xe.count)*ct)),$e!==null?(Jt=Math.max(Jt,0),yn=Math.min(yn,$e.count)):lt!=null&&(Jt=Math.max(Jt,0),yn=Math.min(yn,lt.count));const nn=yn-Jt;if(nn<0||nn===1/0)return;be.setup(z,X,Xe,W,$e);let $n,Xt=Dt;if($e!==null&&($n=M.get($e),Xt=Ge,Xt.setIndex($n)),z.isMesh)X.wireframe===!0?(Re.setLineWidth(X.wireframeLinewidth*Ye()),Xt.setMode(F.LINES)):Xt.setMode(F.TRIANGLES);else if(z.isLine){let ot=X.linewidth;ot===void 0&&(ot=1),Re.setLineWidth(ot*Ye()),z.isLineSegments?Xt.setMode(F.LINES):z.isLineLoop?Xt.setMode(F.LINE_LOOP):Xt.setMode(F.LINE_STRIP)}else z.isPoints?Xt.setMode(F.POINTS):z.isSprite&&Xt.setMode(F.TRIANGLES);if(z.isBatchedMesh)Xt.renderMultiDraw(z._multiDrawStarts,z._multiDrawCounts,z._multiDrawCount);else if(z.isInstancedMesh)Xt.renderInstances(Jt,nn,z.count);else if(W.isInstancedBufferGeometry){const ot=W._maxInstanceCount!==void 0?W._maxInstanceCount:1/0,Xr=Math.min(W.instanceCount,ot);Xt.renderInstances(Jt,nn,Xr)}else Xt.render(Jt,nn)};function he(T,B,W){T.transparent===!0&&T.side===yi&&T.forceSinglePass===!1?(T.side=Un,T.needsUpdate=!0,Pi(T,B,W),T.side=$i,T.needsUpdate=!0,Pi(T,B,W),T.side=yi):Pi(T,B,W)}this.compile=function(T,B,W=null){W===null&&(W=T),f=Ne.get(W),f.init(),y.push(f),W.traverseVisible(function(z){z.isLight&&z.layers.test(B.layers)&&(f.pushLight(z),z.castShadow&&f.pushShadow(z))}),T!==W&&T.traverseVisible(function(z){z.isLight&&z.layers.test(B.layers)&&(f.pushLight(z),z.castShadow&&f.pushShadow(z))}),f.setupLights(v._useLegacyLights);const X=new Set;return T.traverse(function(z){const xe=z.material;if(xe)if(Array.isArray(xe))for(let Ce=0;Ce<xe.length;Ce++){const Xe=xe[Ce];he(Xe,W,z),X.add(Xe)}else he(xe,W,z),X.add(xe)}),y.pop(),f=null,X},this.compileAsync=function(T,B,W=null){const X=this.compile(T,B,W);return new Promise(z=>{function xe(){if(X.forEach(function(Ce){Ke.get(Ce).currentProgram.isReady()&&X.delete(Ce)}),X.size===0){z(T);return}setTimeout(xe,10)}Pe.get("KHR_parallel_shader_compile")!==null?xe():setTimeout(xe,10)})};let ke=null;function St(T){ke&&ke(T)}function Bt(){Zt.stop()}function ut(){Zt.start()}const Zt=new nd;Zt.setAnimationLoop(St),typeof self<"u"&&Zt.setContext(self),this.setAnimationLoop=function(T){ke=T,tt.setAnimationLoop(T),T===null?Zt.stop():Zt.start()},tt.addEventListener("sessionstart",Bt),tt.addEventListener("sessionend",ut),this.render=function(T,B){if(B!==void 0&&B.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(A===!0)return;T.matrixWorldAutoUpdate===!0&&T.updateMatrixWorld(),B.parent===null&&B.matrixWorldAutoUpdate===!0&&B.updateMatrixWorld(),tt.enabled===!0&&tt.isPresenting===!0&&(tt.cameraAutoUpdate===!0&&tt.updateCamera(B),B=tt.getCamera()),T.isScene===!0&&T.onBeforeRender(v,T,B,S),f=Ne.get(T,y.length),f.init(),y.push(f),We.multiplyMatrices(B.projectionMatrix,B.matrixWorldInverse),He.setFromProjectionMatrix(We),ie=this.localClippingEnabled,V=le.init(this.clippingPlanes,ie),_=nt.get(T,m.length),_.init(),m.push(_),Rn(T,B,0,v.sortObjects),_.finish(),v.sortObjects===!0&&_.sort($,K),this.info.render.frame++,V===!0&&le.beginShadows();const W=f.state.shadowsArray;if(ue.render(W,T,B),V===!0&&le.endShadows(),this.info.autoReset===!0&&this.info.reset(),(tt.enabled===!1||tt.isPresenting===!1||tt.hasDepthSensing()===!1)&&ze.render(_,T),f.setupLights(v._useLegacyLights),B.isArrayCamera){const X=B.cameras;for(let z=0,xe=X.length;z<xe;z++){const Ce=X[z];Vr(_,T,Ce,Ce.viewport)}}else Vr(_,T,B);S!==null&&(st.updateMultisampleRenderTarget(S),st.updateRenderTargetMipmap(S)),T.isScene===!0&&T.onAfterRender(v,T,B),be.resetDefaultState(),I=-1,D=null,y.pop(),y.length>0?f=y[y.length-1]:f=null,m.pop(),m.length>0?_=m[m.length-1]:_=null};function Rn(T,B,W,X){if(T.visible===!1)return;if(T.layers.test(B.layers)){if(T.isGroup)W=T.renderOrder;else if(T.isLOD)T.autoUpdate===!0&&T.update(B);else if(T.isLight)f.pushLight(T),T.castShadow&&f.pushShadow(T);else if(T.isSprite){if(!T.frustumCulled||He.intersectsSprite(T)){X&&Ee.setFromMatrixPosition(T.matrixWorld).applyMatrix4(We);const Ce=Z.update(T),Xe=T.material;Xe.visible&&_.push(T,Ce,Xe,W,Ee.z,null)}}else if((T.isMesh||T.isLine||T.isPoints)&&(!T.frustumCulled||He.intersectsObject(T))){const Ce=Z.update(T),Xe=T.material;if(X&&(T.boundingSphere!==void 0?(T.boundingSphere===null&&T.computeBoundingSphere(),Ee.copy(T.boundingSphere.center)):(Ce.boundingSphere===null&&Ce.computeBoundingSphere(),Ee.copy(Ce.boundingSphere.center)),Ee.applyMatrix4(T.matrixWorld).applyMatrix4(We)),Array.isArray(Xe)){const $e=Ce.groups;for(let ct=0,at=$e.length;ct<at;ct++){const lt=$e[ct],Jt=Xe[lt.materialIndex];Jt&&Jt.visible&&_.push(T,Ce,Jt,W,Ee.z,lt)}}else Xe.visible&&_.push(T,Ce,Xe,W,Ee.z,null)}}const xe=T.children;for(let Ce=0,Xe=xe.length;Ce<Xe;Ce++)Rn(xe[Ce],B,W,X)}function Vr(T,B,W,X){const z=T.opaque,xe=T.transmissive,Ce=T.transparent;f.setupLightsView(W),V===!0&&le.setGlobalState(v.clippingPlanes,W),xe.length>0&&Wr(z,xe,B,W),X&&Re.viewport(x.copy(X)),z.length>0&&Qi(z,B,W),xe.length>0&&Qi(xe,B,W),Ce.length>0&&Qi(Ce,B,W),Re.buffers.depth.setTest(!0),Re.buffers.depth.setMask(!0),Re.buffers.color.setMask(!0),Re.setPolygonOffset(!1)}function Wr(T,B,W,X){if((W.isScene===!0?W.overrideMaterial:null)!==null)return;const xe=Ie.isWebGL2;Me===null&&(Me=new Gr(1,1,{generateMipmaps:!0,type:Pe.has("EXT_color_buffer_half_float")?ua:vr,minFilter:ji,samples:xe?4:0})),v.getDrawingBufferSize(Te),xe?Me.setSize(Te.x,Te.y):Me.setSize(ro(Te.x),ro(Te.y));const Ce=v.getRenderTarget();v.setRenderTarget(Me),v.getClearColor(Y),L=v.getClearAlpha(),L<1&&v.setClearColor(16777215,.5),v.clear();const Xe=v.toneMapping;v.toneMapping=_r,Qi(T,W,X),st.updateMultisampleRenderTarget(Me),st.updateRenderTargetMipmap(Me);let $e=!1;for(let ct=0,at=B.length;ct<at;ct++){const lt=B[ct],Jt=lt.object,yn=lt.geometry,nn=lt.material,$n=lt.group;if(nn.side===yi&&Jt.layers.test(X.layers)){const Xt=nn.side;nn.side=Un,nn.needsUpdate=!0,Li(Jt,W,X,yn,nn,$n),nn.side=Xt,nn.needsUpdate=!0,$e=!0}}$e===!0&&(st.updateMultisampleRenderTarget(Me),st.updateRenderTargetMipmap(Me)),v.setRenderTarget(Ce),v.setClearColor(Y,L),v.toneMapping=Xe}function Qi(T,B,W){const X=B.isScene===!0?B.overrideMaterial:null;for(let z=0,xe=T.length;z<xe;z++){const Ce=T[z],Xe=Ce.object,$e=Ce.geometry,ct=X===null?Ce.material:X,at=Ce.group;Xe.layers.test(W.layers)&&Li(Xe,B,W,$e,ct,at)}}function Li(T,B,W,X,z,xe){T.onBeforeRender(v,B,W,X,z,xe),T.modelViewMatrix.multiplyMatrices(W.matrixWorldInverse,T.matrixWorld),T.normalMatrix.getNormalMatrix(T.modelViewMatrix),z.onBeforeRender(v,B,W,X,T,xe),z.transparent===!0&&z.side===yi&&z.forceSinglePass===!1?(z.side=Un,z.needsUpdate=!0,v.renderBufferDirect(W,B,X,z,T,xe),z.side=$i,z.needsUpdate=!0,v.renderBufferDirect(W,B,X,z,T,xe),z.side=yi):v.renderBufferDirect(W,B,X,z,T,xe),T.onAfterRender(v,B,W,X,z,xe)}function Pi(T,B,W){B.isScene!==!0&&(B=Mt);const X=Ke.get(T),z=f.state.lights,xe=f.state.shadowsArray,Ce=z.state.version,Xe=re.getParameters(T,z.state,xe,B,W),$e=re.getProgramCacheKey(Xe);let ct=X.programs;X.environment=T.isMeshStandardMaterial?B.environment:null,X.fog=B.fog,X.envMap=(T.isMeshStandardMaterial?R:Ot).get(T.envMap||X.environment),X.envMapRotation=X.environment!==null&&T.envMap===null?B.environmentRotation:T.envMapRotation,ct===void 0&&(T.addEventListener("dispose",G),ct=new Map,X.programs=ct);let at=ct.get($e);if(at!==void 0){if(X.currentProgram===at&&X.lightsStateVersion===Ce)return ma(T,Xe),at}else Xe.uniforms=re.getUniforms(T),T.onBuild(W,Xe,v),T.onBeforeCompile(Xe,v),at=re.acquireProgram(Xe,$e),ct.set($e,at),X.uniforms=Xe.uniforms;const lt=X.uniforms;return(!T.isShaderMaterial&&!T.isRawShaderMaterial||T.clipping===!0)&&(lt.clippingPlanes=le.uniform),ma(T,Xe),X.needsLights=ga(T),X.lightsStateVersion=Ce,X.needsLights&&(lt.ambientLightColor.value=z.state.ambient,lt.lightProbe.value=z.state.probe,lt.directionalLights.value=z.state.directional,lt.directionalLightShadows.value=z.state.directionalShadow,lt.spotLights.value=z.state.spot,lt.spotLightShadows.value=z.state.spotShadow,lt.rectAreaLights.value=z.state.rectArea,lt.ltc_1.value=z.state.rectAreaLTC1,lt.ltc_2.value=z.state.rectAreaLTC2,lt.pointLights.value=z.state.point,lt.pointLightShadows.value=z.state.pointShadow,lt.hemisphereLights.value=z.state.hemi,lt.directionalShadowMap.value=z.state.directionalShadowMap,lt.directionalShadowMatrix.value=z.state.directionalShadowMatrix,lt.spotShadowMap.value=z.state.spotShadowMap,lt.spotLightMatrix.value=z.state.spotLightMatrix,lt.spotLightMap.value=z.state.spotLightMap,lt.pointShadowMap.value=z.state.pointShadowMap,lt.pointShadowMatrix.value=z.state.pointShadowMatrix),X.currentProgram=at,X.uniformsList=null,at}function zs(T){if(T.uniformsList===null){const B=T.currentProgram.getUniforms();T.uniformsList=Za.seqWithValue(B.seq,T.uniforms)}return T.uniformsList}function ma(T,B){const W=Ke.get(T);W.outputColorSpace=B.outputColorSpace,W.batching=B.batching,W.instancing=B.instancing,W.instancingColor=B.instancingColor,W.instancingMorph=B.instancingMorph,W.skinning=B.skinning,W.morphTargets=B.morphTargets,W.morphNormals=B.morphNormals,W.morphColors=B.morphColors,W.morphTargetsCount=B.morphTargetsCount,W.numClippingPlanes=B.numClippingPlanes,W.numIntersection=B.numClipIntersection,W.vertexAlphas=B.vertexAlphas,W.vertexTangents=B.vertexTangents,W.toneMapping=B.toneMapping}function Gs(T,B,W,X,z){B.isScene!==!0&&(B=Mt),st.resetTextureUnits();const xe=B.fog,Ce=X.isMeshStandardMaterial?B.environment:null,Xe=S===null?v.outputColorSpace:S.isXRRenderTarget===!0?S.texture.colorSpace:Sn,$e=(X.isMeshStandardMaterial?R:Ot).get(X.envMap||Ce),ct=X.vertexColors===!0&&!!W.attributes.color&&W.attributes.color.itemSize===4,at=!!W.attributes.tangent&&(!!X.normalMap||X.anisotropy>0),lt=!!W.morphAttributes.position,Jt=!!W.morphAttributes.normal,yn=!!W.morphAttributes.color;let nn=_r;X.toneMapped&&(S===null||S.isXRRenderTarget===!0)&&(nn=v.toneMapping);const $n=W.morphAttributes.position||W.morphAttributes.normal||W.morphAttributes.color,Xt=$n!==void 0?$n.length:0,ot=Ke.get(X),Xr=f.state.lights;if(V===!0&&(ie===!0||T!==D)){const de=T===D&&X.id===I;le.setState(X,T,de)}let kt=!1;X.version===ot.__version?(ot.needsLights&&ot.lightsStateVersion!==Xr.state.version||ot.outputColorSpace!==Xe||z.isBatchedMesh&&ot.batching===!1||!z.isBatchedMesh&&ot.batching===!0||z.isInstancedMesh&&ot.instancing===!1||!z.isInstancedMesh&&ot.instancing===!0||z.isSkinnedMesh&&ot.skinning===!1||!z.isSkinnedMesh&&ot.skinning===!0||z.isInstancedMesh&&ot.instancingColor===!0&&z.instanceColor===null||z.isInstancedMesh&&ot.instancingColor===!1&&z.instanceColor!==null||z.isInstancedMesh&&ot.instancingMorph===!0&&z.morphTexture===null||z.isInstancedMesh&&ot.instancingMorph===!1&&z.morphTexture!==null||ot.envMap!==$e||X.fog===!0&&ot.fog!==xe||ot.numClippingPlanes!==void 0&&(ot.numClippingPlanes!==le.numPlanes||ot.numIntersection!==le.numIntersection)||ot.vertexAlphas!==ct||ot.vertexTangents!==at||ot.morphTargets!==lt||ot.morphNormals!==Jt||ot.morphColors!==yn||ot.toneMapping!==nn||Ie.isWebGL2===!0&&ot.morphTargetsCount!==Xt)&&(kt=!0):(kt=!0,ot.__version=X.version);let Ii=ot.currentProgram;kt===!0&&(Ii=Pi(X,B,z));let Vs=!1,Mr=!1,qr=!1;const pn=Ii.getUniforms(),H=ot.uniforms;if(Re.useProgram(Ii.program)&&(Vs=!0,Mr=!0,qr=!0),X.id!==I&&(I=X.id,Mr=!0),Vs||D!==T){pn.setValue(F,"projectionMatrix",T.projectionMatrix),pn.setValue(F,"viewMatrix",T.matrixWorldInverse);const de=pn.map.cameraPosition;de!==void 0&&de.setValue(F,Ee.setFromMatrixPosition(T.matrixWorld)),Ie.logarithmicDepthBuffer&&pn.setValue(F,"logDepthBufFC",2/(Math.log(T.far+1)/Math.LN2)),(X.isMeshPhongMaterial||X.isMeshToonMaterial||X.isMeshLambertMaterial||X.isMeshBasicMaterial||X.isMeshStandardMaterial||X.isShaderMaterial)&&pn.setValue(F,"isOrthographic",T.isOrthographicCamera===!0),D!==T&&(D=T,Mr=!0,qr=!0)}if(z.isSkinnedMesh){pn.setOptional(F,z,"bindMatrix"),pn.setOptional(F,z,"bindMatrixInverse");const de=z.skeleton;de&&(Ie.floatVertexTextures?(de.boneTexture===null&&de.computeBoneTexture(),pn.setValue(F,"boneTexture",de.boneTexture,st)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}z.isBatchedMesh&&(pn.setOptional(F,z,"batchingTexture"),pn.setValue(F,"batchingTexture",z._matricesTexture,st));const ge=W.morphAttributes;if((ge.position!==void 0||ge.normal!==void 0||ge.color!==void 0&&Ie.isWebGL2===!0)&&ae.update(z,W,Ii),(Mr||ot.receiveShadow!==z.receiveShadow)&&(ot.receiveShadow=z.receiveShadow,pn.setValue(F,"receiveShadow",z.receiveShadow)),X.isMeshGouraudMaterial&&X.envMap!==null&&(H.envMap.value=$e,H.flipEnvMap.value=$e.isCubeTexture&&$e.isRenderTargetTexture===!1?-1:1),Mr&&(pn.setValue(F,"toneMappingExposure",v.toneMappingExposure),ot.needsLights&&Hs(H,qr),xe&&X.fog===!0&&ne.refreshFogUniforms(H,xe),ne.refreshMaterialUniforms(H,X,q,k,Me),Za.upload(F,zs(ot),H,st)),X.isShaderMaterial&&X.uniformsNeedUpdate===!0&&(Za.upload(F,zs(ot),H,st),X.uniformsNeedUpdate=!1),X.isSpriteMaterial&&pn.setValue(F,"center",z.center),pn.setValue(F,"modelViewMatrix",z.modelViewMatrix),pn.setValue(F,"normalMatrix",z.normalMatrix),pn.setValue(F,"modelMatrix",z.matrixWorld),X.isShaderMaterial||X.isRawShaderMaterial){const de=X.uniformsGroups;for(let Le=0,Ue=de.length;Le<Ue;Le++)if(Ie.isWebGL2){const Fe=de[Le];we.update(Fe,Ii),we.bind(Fe,Ii)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return Ii}function Hs(T,B){T.ambientLightColor.needsUpdate=B,T.lightProbe.needsUpdate=B,T.directionalLights.needsUpdate=B,T.directionalLightShadows.needsUpdate=B,T.pointLights.needsUpdate=B,T.pointLightShadows.needsUpdate=B,T.spotLights.needsUpdate=B,T.spotLightShadows.needsUpdate=B,T.rectAreaLights.needsUpdate=B,T.hemisphereLights.needsUpdate=B}function ga(T){return T.isMeshLambertMaterial||T.isMeshToonMaterial||T.isMeshPhongMaterial||T.isMeshStandardMaterial||T.isShadowMaterial||T.isShaderMaterial&&T.lights===!0}this.getActiveCubeFace=function(){return b},this.getActiveMipmapLevel=function(){return w},this.getRenderTarget=function(){return S},this.setRenderTargetTextures=function(T,B,W){Ke.get(T.texture).__webglTexture=B,Ke.get(T.depthTexture).__webglTexture=W;const X=Ke.get(T);X.__hasExternalTextures=!0,X.__autoAllocateDepthBuffer=W===void 0,X.__autoAllocateDepthBuffer||Pe.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),X.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(T,B){const W=Ke.get(T);W.__webglFramebuffer=B,W.__useDefaultFramebuffer=B===void 0},this.setRenderTarget=function(T,B=0,W=0){S=T,b=B,w=W;let X=!0,z=null,xe=!1,Ce=!1;if(T){const $e=Ke.get(T);$e.__useDefaultFramebuffer!==void 0?(Re.bindFramebuffer(F.FRAMEBUFFER,null),X=!1):$e.__webglFramebuffer===void 0?st.setupRenderTarget(T):$e.__hasExternalTextures&&st.rebindTextures(T,Ke.get(T.texture).__webglTexture,Ke.get(T.depthTexture).__webglTexture);const ct=T.texture;(ct.isData3DTexture||ct.isDataArrayTexture||ct.isCompressedArrayTexture)&&(Ce=!0);const at=Ke.get(T).__webglFramebuffer;T.isWebGLCubeRenderTarget?(Array.isArray(at[B])?z=at[B][W]:z=at[B],xe=!0):Ie.isWebGL2&&T.samples>0&&st.useMultisampledRTT(T)===!1?z=Ke.get(T).__webglMultisampledFramebuffer:Array.isArray(at)?z=at[W]:z=at,x.copy(T.viewport),E.copy(T.scissor),U=T.scissorTest}else x.copy(se).multiplyScalar(q).floor(),E.copy(oe).multiplyScalar(q).floor(),U=_e;if(Re.bindFramebuffer(F.FRAMEBUFFER,z)&&Ie.drawBuffers&&X&&Re.drawBuffers(T,z),Re.viewport(x),Re.scissor(E),Re.setScissorTest(U),xe){const $e=Ke.get(T.texture);F.framebufferTexture2D(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_CUBE_MAP_POSITIVE_X+B,$e.__webglTexture,W)}else if(Ce){const $e=Ke.get(T.texture),ct=B||0;F.framebufferTextureLayer(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0,$e.__webglTexture,W||0,ct)}I=-1},this.readRenderTargetPixels=function(T,B,W,X,z,xe,Ce){if(!(T&&T.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Xe=Ke.get(T).__webglFramebuffer;if(T.isWebGLCubeRenderTarget&&Ce!==void 0&&(Xe=Xe[Ce]),Xe){Re.bindFramebuffer(F.FRAMEBUFFER,Xe);try{const $e=T.texture,ct=$e.format,at=$e.type;if(ct!==ai&&De.convert(ct)!==F.getParameter(F.IMPLEMENTATION_COLOR_READ_FORMAT)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const lt=at===ua&&(Pe.has("EXT_color_buffer_half_float")||Ie.isWebGL2&&Pe.has("EXT_color_buffer_float"));if(at!==vr&&De.convert(at)!==F.getParameter(F.IMPLEMENTATION_COLOR_READ_TYPE)&&!(at===fi&&(Ie.isWebGL2||Pe.has("OES_texture_float")||Pe.has("WEBGL_color_buffer_float")))&&!lt){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}B>=0&&B<=T.width-X&&W>=0&&W<=T.height-z&&F.readPixels(B,W,X,z,De.convert(ct),De.convert(at),xe)}finally{const $e=S!==null?Ke.get(S).__webglFramebuffer:null;Re.bindFramebuffer(F.FRAMEBUFFER,$e)}}},this.copyFramebufferToTexture=function(T,B,W=0){const X=Math.pow(2,-W),z=Math.floor(B.image.width*X),xe=Math.floor(B.image.height*X);st.setTexture2D(B,0),F.copyTexSubImage2D(F.TEXTURE_2D,W,0,0,T.x,T.y,z,xe),Re.unbindTexture()},this.copyTextureToTexture=function(T,B,W,X=0){const z=B.image.width,xe=B.image.height,Ce=De.convert(W.format),Xe=De.convert(W.type);st.setTexture2D(W,0),F.pixelStorei(F.UNPACK_FLIP_Y_WEBGL,W.flipY),F.pixelStorei(F.UNPACK_PREMULTIPLY_ALPHA_WEBGL,W.premultiplyAlpha),F.pixelStorei(F.UNPACK_ALIGNMENT,W.unpackAlignment),B.isDataTexture?F.texSubImage2D(F.TEXTURE_2D,X,T.x,T.y,z,xe,Ce,Xe,B.image.data):B.isCompressedTexture?F.compressedTexSubImage2D(F.TEXTURE_2D,X,T.x,T.y,B.mipmaps[0].width,B.mipmaps[0].height,Ce,B.mipmaps[0].data):F.texSubImage2D(F.TEXTURE_2D,X,T.x,T.y,Ce,Xe,B.image),X===0&&W.generateMipmaps&&F.generateMipmap(F.TEXTURE_2D),Re.unbindTexture()},this.copyTextureToTexture3D=function(T,B,W,X,z=0){if(v.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}const xe=Math.round(T.max.x-T.min.x),Ce=Math.round(T.max.y-T.min.y),Xe=T.max.z-T.min.z+1,$e=De.convert(X.format),ct=De.convert(X.type);let at;if(X.isData3DTexture)st.setTexture3D(X,0),at=F.TEXTURE_3D;else if(X.isDataArrayTexture||X.isCompressedArrayTexture)st.setTexture2DArray(X,0),at=F.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}F.pixelStorei(F.UNPACK_FLIP_Y_WEBGL,X.flipY),F.pixelStorei(F.UNPACK_PREMULTIPLY_ALPHA_WEBGL,X.premultiplyAlpha),F.pixelStorei(F.UNPACK_ALIGNMENT,X.unpackAlignment);const lt=F.getParameter(F.UNPACK_ROW_LENGTH),Jt=F.getParameter(F.UNPACK_IMAGE_HEIGHT),yn=F.getParameter(F.UNPACK_SKIP_PIXELS),nn=F.getParameter(F.UNPACK_SKIP_ROWS),$n=F.getParameter(F.UNPACK_SKIP_IMAGES),Xt=W.isCompressedTexture?W.mipmaps[z]:W.image;F.pixelStorei(F.UNPACK_ROW_LENGTH,Xt.width),F.pixelStorei(F.UNPACK_IMAGE_HEIGHT,Xt.height),F.pixelStorei(F.UNPACK_SKIP_PIXELS,T.min.x),F.pixelStorei(F.UNPACK_SKIP_ROWS,T.min.y),F.pixelStorei(F.UNPACK_SKIP_IMAGES,T.min.z),W.isDataTexture||W.isData3DTexture?F.texSubImage3D(at,z,B.x,B.y,B.z,xe,Ce,Xe,$e,ct,Xt.data):X.isCompressedArrayTexture?F.compressedTexSubImage3D(at,z,B.x,B.y,B.z,xe,Ce,Xe,$e,Xt.data):F.texSubImage3D(at,z,B.x,B.y,B.z,xe,Ce,Xe,$e,ct,Xt),F.pixelStorei(F.UNPACK_ROW_LENGTH,lt),F.pixelStorei(F.UNPACK_IMAGE_HEIGHT,Jt),F.pixelStorei(F.UNPACK_SKIP_PIXELS,yn),F.pixelStorei(F.UNPACK_SKIP_ROWS,nn),F.pixelStorei(F.UNPACK_SKIP_IMAGES,$n),z===0&&X.generateMipmaps&&F.generateMipmap(at),Re.unbindTexture()},this.initTexture=function(T){T.isCubeTexture?st.setTextureCube(T,0):T.isData3DTexture?st.setTexture3D(T,0):T.isDataArrayTexture||T.isCompressedArrayTexture?st.setTexture2DArray(T,0):st.setTexture2D(T,0),Re.unbindTexture()},this.resetState=function(){b=0,w=0,S=null,Re.reset(),be.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Yi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=e===Xl?"display-p3":"srgb",t.unpackColorSpace=Lt.workingColorSpace===ao?"display-p3":"srgb"}get useLegacyLights(){return console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights}set useLegacyLights(e){console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights=e}}class cx extends Dl{}cx.prototype.isWebGL1Renderer=!0;class al extends en{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Ti,this.environmentRotation=new Ti,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),t.object.environmentRotation=this.environmentRotation.toArray(),t}}class ux{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=Cl,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.version=0,this.uuid=gi()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return qh("THREE.InterleavedBuffer: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let i=0,s=this.stride;i<s;i++)this.array[e+i]=t.array[n+i];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=gi()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(t,this.stride);return n.setUsage(this.usage),n}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=gi()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const Pn=new P;class Zl{constructor(e,t,n,i=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=n,this.normalized=i}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)Pn.fromBufferAttribute(this,t),Pn.applyMatrix4(e),this.setXYZ(t,Pn.x,Pn.y,Pn.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Pn.fromBufferAttribute(this,t),Pn.applyNormalMatrix(e),this.setXYZ(t,Pn.x,Pn.y,Pn.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Pn.fromBufferAttribute(this,t),Pn.transformDirection(e),this.setXYZ(t,Pn.x,Pn.y,Pn.z);return this}getComponent(e,t){let n=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(n=pi(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=Pt(n,this.array)),this.data.array[e*this.data.stride+this.offset+t]=n,this}setX(e,t){return this.normalized&&(t=Pt(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=Pt(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=Pt(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=Pt(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=pi(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=pi(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=pi(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=pi(t,this.array)),t}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=Pt(t,this.array),n=Pt(n,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,i){return e=e*this.data.stride+this.offset,this.normalized&&(t=Pt(t,this.array),n=Pt(n,this.array),i=Pt(i,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=i,this}setXYZW(e,t,n,i,s){return e=e*this.data.stride+this.offset,this.normalized&&(t=Pt(t,this.array),n=Pt(n,this.array),i=Pt(i,this.array),s=Pt(s,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=i,this.data.array[e+3]=s,this}clone(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const i=n*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)t.push(this.data.array[i+s])}return new hn(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new Zl(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const i=n*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)t.push(this.data.array[i+s])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}const Zu=new P,Ju=new Ht,Qu=new Ht,hx=new P,eh=new je,Ga=new P,ol=new wi,th=new je,ll=new oo;class dx extends Qt{constructor(e,t){super(e,t),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode=Dc,this.bindMatrix=new je,this.bindMatrixInverse=new je,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){const e=this.geometry;this.boundingBox===null&&(this.boundingBox=new Ai),this.boundingBox.makeEmpty();const t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,Ga),this.boundingBox.expandByPoint(Ga)}computeBoundingSphere(){const e=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new wi),this.boundingSphere.makeEmpty();const t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,Ga),this.boundingSphere.expandByPoint(Ga)}copy(e,t){return super.copy(e,t),this.bindMode=e.bindMode,this.bindMatrix.copy(e.bindMatrix),this.bindMatrixInverse.copy(e.bindMatrixInverse),this.skeleton=e.skeleton,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}raycast(e,t){const n=this.material,i=this.matrixWorld;n!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),ol.copy(this.boundingSphere),ol.applyMatrix4(i),e.ray.intersectsSphere(ol)!==!1&&(th.copy(i).invert(),ll.copy(e.ray).applyMatrix4(th),!(this.boundingBox!==null&&ll.intersectsBox(this.boundingBox)===!1)&&this._computeIntersections(e,t,ll)))}getVertexPosition(e,t){return super.getVertexPosition(e,t),this.applyBoneTransform(e,t),t}bind(e,t){this.skeleton=e,t===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),t=this.matrixWorld),this.bindMatrix.copy(t),this.bindMatrixInverse.copy(t).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){const e=new Ht,t=this.geometry.attributes.skinWeight;for(let n=0,i=t.count;n<i;n++){e.fromBufferAttribute(t,n);const s=1/e.manhattanLength();s!==1/0?e.multiplyScalar(s):e.set(1,0,0,0),t.setXYZW(n,e.x,e.y,e.z,e.w)}}updateMatrixWorld(e){super.updateMatrixWorld(e),this.bindMode===Dc?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode===vp?this.bindMatrixInverse.copy(this.bindMatrix).invert():console.warn("THREE.SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(e,t){const n=this.skeleton,i=this.geometry;Ju.fromBufferAttribute(i.attributes.skinIndex,e),Qu.fromBufferAttribute(i.attributes.skinWeight,e),Zu.copy(t).applyMatrix4(this.bindMatrix),t.set(0,0,0);for(let s=0;s<4;s++){const a=Qu.getComponent(s);if(a!==0){const o=Ju.getComponent(s);eh.multiplyMatrices(n.bones[o].matrixWorld,n.boneInverses[o]),t.addScaledVector(hx.copy(Zu).applyMatrix4(eh),a)}}return t.applyMatrix4(this.bindMatrixInverse)}}class cd extends en{constructor(){super(),this.isBone=!0,this.type="Bone"}}class ud extends xn{constructor(e=null,t=1,n=1,i,s,a,o,l,c=vn,u=vn,h,d){super(null,a,o,l,c,u,i,s,h,d),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const nh=new je,fx=new je;class Jl{constructor(e=[],t=[]){this.uuid=gi(),this.bones=e.slice(0),this.boneInverses=t,this.boneMatrices=null,this.boneTexture=null,this.init()}init(){const e=this.bones,t=this.boneInverses;if(this.boneMatrices=new Float32Array(e.length*16),t.length===0)this.calculateInverses();else if(e.length!==t.length){console.warn("THREE.Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let n=0,i=this.bones.length;n<i;n++)this.boneInverses.push(new je)}}calculateInverses(){this.boneInverses.length=0;for(let e=0,t=this.bones.length;e<t;e++){const n=new je;this.bones[e]&&n.copy(this.bones[e].matrixWorld).invert(),this.boneInverses.push(n)}}pose(){for(let e=0,t=this.bones.length;e<t;e++){const n=this.bones[e];n&&n.matrixWorld.copy(this.boneInverses[e]).invert()}for(let e=0,t=this.bones.length;e<t;e++){const n=this.bones[e];n&&(n.parent&&n.parent.isBone?(n.matrix.copy(n.parent.matrixWorld).invert(),n.matrix.multiply(n.matrixWorld)):n.matrix.copy(n.matrixWorld),n.matrix.decompose(n.position,n.quaternion,n.scale))}}update(){const e=this.bones,t=this.boneInverses,n=this.boneMatrices,i=this.boneTexture;for(let s=0,a=e.length;s<a;s++){const o=e[s]?e[s].matrixWorld:fx;nh.multiplyMatrices(o,t[s]),nh.toArray(n,s*16)}i!==null&&(i.needsUpdate=!0)}clone(){return new Jl(this.bones,this.boneInverses)}computeBoneTexture(){let e=Math.sqrt(this.bones.length*4);e=Math.ceil(e/4)*4,e=Math.max(e,4);const t=new Float32Array(e*e*4);t.set(this.boneMatrices);const n=new ud(t,e,e,ai,fi);return n.needsUpdate=!0,this.boneMatrices=t,this.boneTexture=n,this}getBoneByName(e){for(let t=0,n=this.bones.length;t<n;t++){const i=this.bones[t];if(i.name===e)return i}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(e,t){this.uuid=e.uuid;for(let n=0,i=e.bones.length;n<i;n++){const s=e.bones[n];let a=t[s];a===void 0&&(console.warn("THREE.Skeleton: No bone found with UUID:",s),a=new cd),this.bones.push(a),this.boneInverses.push(new je().fromArray(e.boneInverses[n]))}return this.init(),this}toJSON(){const e={metadata:{version:4.6,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};e.uuid=this.uuid;const t=this.bones,n=this.boneInverses;for(let i=0,s=t.length;i<s;i++){const a=t[i];e.bones.push(a.uuid);const o=n[i];e.boneInverses.push(o.toArray())}return e}}class Nl extends hn{constructor(e,t,n,i=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=i}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){const e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}}const fs=new je,ih=new je,Ha=[],rh=new Ai,px=new je,Js=new Qt,Qs=new wi;class hd extends Qt{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new Nl(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let i=0;i<n;i++)this.setMatrixAt(i,px)}computeBoundingBox(){const e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new Ai),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,fs),rh.copy(e.boundingBox).applyMatrix4(fs),this.boundingBox.union(rh)}computeBoundingSphere(){const e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new wi),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,fs),Qs.copy(e.boundingSphere).applyMatrix4(fs),this.boundingSphere.union(Qs)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){const n=t.morphTargetInfluences,i=this.morphTexture.source.data.data,s=n.length+1,a=e*s+1;for(let o=0;o<n.length;o++)n[o]=i[a+o]}raycast(e,t){const n=this.matrixWorld,i=this.count;if(Js.geometry=this.geometry,Js.material=this.material,Js.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Qs.copy(this.boundingSphere),Qs.applyMatrix4(n),e.ray.intersectsSphere(Qs)!==!1))for(let s=0;s<i;s++){this.getMatrixAt(s,fs),ih.multiplyMatrices(n,fs),Js.matrixWorld=ih,Js.raycast(e,Ha);for(let a=0,o=Ha.length;a<o;a++){const l=Ha[a];l.instanceId=s,l.object=this,t.push(l)}Ha.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new Nl(new Float32Array(this.instanceMatrix.count*3),3)),t.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,e*16)}setMorphAt(e,t){const n=t.morphTargetInfluences,i=n.length+1;this.morphTexture===null&&(this.morphTexture=new ud(new Float32Array(i*this.count),i,this.count,Fh,fi));const s=this.morphTexture.source.data.data;let a=0;for(let c=0;c<n.length;c++)a+=n[c];const o=this.geometry.morphTargetsRelative?1:1-a,l=i*e;s[l]=o,s.set(n,l+1)}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"})}}class dd extends bi{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Qe(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const sh=new P,ah=new P,oh=new je,cl=new oo,Va=new wi;class Ql extends en{constructor(e=new Fn,t=new dd){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[0];for(let i=1,s=t.count;i<s;i++)sh.fromBufferAttribute(t,i-1),ah.fromBufferAttribute(t,i),n[i]=n[i-1],n[i]+=sh.distanceTo(ah);e.setAttribute("lineDistance",new Mn(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const n=this.geometry,i=this.matrixWorld,s=e.params.Line.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Va.copy(n.boundingSphere),Va.applyMatrix4(i),Va.radius+=s,e.ray.intersectsSphere(Va)===!1)return;oh.copy(i).invert(),cl.copy(e.ray).applyMatrix4(oh);const o=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=new P,u=new P,h=new P,d=new P,p=this.isLineSegments?2:1,g=n.index,f=n.attributes.position;if(g!==null){const m=Math.max(0,a.start),y=Math.min(g.count,a.start+a.count);for(let v=m,A=y-1;v<A;v+=p){const b=g.getX(v),w=g.getX(v+1);if(c.fromBufferAttribute(f,b),u.fromBufferAttribute(f,w),cl.distanceSqToSegment(c,u,d,h)>l)continue;d.applyMatrix4(this.matrixWorld);const I=e.ray.origin.distanceTo(d);I<e.near||I>e.far||t.push({distance:I,point:h.clone().applyMatrix4(this.matrixWorld),index:v,face:null,faceIndex:null,object:this})}}else{const m=Math.max(0,a.start),y=Math.min(f.count,a.start+a.count);for(let v=m,A=y-1;v<A;v+=p){if(c.fromBufferAttribute(f,v),u.fromBufferAttribute(f,v+1),cl.distanceSqToSegment(c,u,d,h)>l)continue;d.applyMatrix4(this.matrixWorld);const w=e.ray.origin.distanceTo(d);w<e.near||w>e.far||t.push({distance:w,point:h.clone().applyMatrix4(this.matrixWorld),index:v,face:null,faceIndex:null,object:this})}}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=i.length;s<a;s++){const o=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}}const lh=new P,ch=new P;class mx extends Ql{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[];for(let i=0,s=t.count;i<s;i+=2)lh.fromBufferAttribute(t,i),ch.fromBufferAttribute(t,i+1),n[i]=i===0?0:n[i-1],n[i+1]=n[i]+lh.distanceTo(ch);e.setAttribute("lineDistance",new Mn(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class gx extends Ql{constructor(e,t){super(e,t),this.isLineLoop=!0,this.type="LineLoop"}}class ec extends bi{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Qe(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const uh=new je,Ul=new oo,Wa=new wi,Xa=new P;class fd extends en{constructor(e=new Fn,t=new ec){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){const n=this.geometry,i=this.matrixWorld,s=e.params.Points.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Wa.copy(n.boundingSphere),Wa.applyMatrix4(i),Wa.radius+=s,e.ray.intersectsSphere(Wa)===!1)return;uh.copy(i).invert(),Ul.copy(e.ray).applyMatrix4(uh);const o=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=n.index,h=n.attributes.position;if(c!==null){const d=Math.max(0,a.start),p=Math.min(c.count,a.start+a.count);for(let g=d,_=p;g<_;g++){const f=c.getX(g);Xa.fromBufferAttribute(h,f),hh(Xa,f,l,i,e,t,this)}}else{const d=Math.max(0,a.start),p=Math.min(h.count,a.start+a.count);for(let g=d,_=p;g<_;g++)Xa.fromBufferAttribute(h,g),hh(Xa,g,l,i,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=i.length;s<a;s++){const o=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}}function hh(r,e,t,n,i,s,a){const o=Ul.distanceSqToPoint(r);if(o<t){const l=new P;Ul.closestPointToPoint(r,l),l.applyMatrix4(n);const c=i.ray.origin.distanceTo(l);if(c<i.near||c>i.far)return;s.push({distance:c,distanceToRay:Math.sqrt(o),point:l,index:e,face:null,object:a})}}class Ri{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(e,t){const n=this.getUtoTmapping(e);return this.getPoint(n,t)}getPoints(e=5){const t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return t}getSpacedPoints(e=5){const t=[];for(let n=0;n<=e;n++)t.push(this.getPointAt(n/e));return t}getLength(){const e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const t=[];let n,i=this.getPoint(0),s=0;t.push(0);for(let a=1;a<=e;a++)n=this.getPoint(a/e),s+=n.distanceTo(i),t.push(s),i=n;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t){const n=this.getLengths();let i=0;const s=n.length;let a;t?a=t:a=e*n[s-1];let o=0,l=s-1,c;for(;o<=l;)if(i=Math.floor(o+(l-o)/2),c=n[i]-a,c<0)o=i+1;else if(c>0)l=i-1;else{l=i;break}if(i=l,n[i]===a)return i/(s-1);const u=n[i],d=n[i+1]-u,p=(a-u)/d;return(i+p)/(s-1)}getTangent(e,t){let i=e-1e-4,s=e+1e-4;i<0&&(i=0),s>1&&(s=1);const a=this.getPoint(i),o=this.getPoint(s),l=t||(a.isVector2?new Se:new P);return l.copy(o).sub(a).normalize(),l}getTangentAt(e,t){const n=this.getUtoTmapping(e);return this.getTangent(n,t)}computeFrenetFrames(e,t){const n=new P,i=[],s=[],a=[],o=new P,l=new je;for(let p=0;p<=e;p++){const g=p/e;i[p]=this.getTangentAt(g,new P)}s[0]=new P,a[0]=new P;let c=Number.MAX_VALUE;const u=Math.abs(i[0].x),h=Math.abs(i[0].y),d=Math.abs(i[0].z);u<=c&&(c=u,n.set(1,0,0)),h<=c&&(c=h,n.set(0,1,0)),d<=c&&n.set(0,0,1),o.crossVectors(i[0],n).normalize(),s[0].crossVectors(i[0],o),a[0].crossVectors(i[0],s[0]);for(let p=1;p<=e;p++){if(s[p]=s[p-1].clone(),a[p]=a[p-1].clone(),o.crossVectors(i[p-1],i[p]),o.length()>Number.EPSILON){o.normalize();const g=Math.acos(un(i[p-1].dot(i[p]),-1,1));s[p].applyMatrix4(l.makeRotationAxis(o,g))}a[p].crossVectors(i[p],s[p])}if(t===!0){let p=Math.acos(un(s[0].dot(s[e]),-1,1));p/=e,i[0].dot(o.crossVectors(s[0],s[e]))>0&&(p=-p);for(let g=1;g<=e;g++)s[g].applyMatrix4(l.makeRotationAxis(i[g],p*g)),a[g].crossVectors(i[g],s[g])}return{tangents:i,normals:s,binormals:a}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){const e={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}}class tc extends Ri{constructor(e=0,t=0,n=1,i=1,s=0,a=Math.PI*2,o=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=n,this.yRadius=i,this.aStartAngle=s,this.aEndAngle=a,this.aClockwise=o,this.aRotation=l}getPoint(e,t=new Se){const n=t,i=Math.PI*2;let s=this.aEndAngle-this.aStartAngle;const a=Math.abs(s)<Number.EPSILON;for(;s<0;)s+=i;for(;s>i;)s-=i;s<Number.EPSILON&&(a?s=0:s=i),this.aClockwise===!0&&!a&&(s===i?s=-i:s=s-i);const o=this.aStartAngle+e*s;let l=this.aX+this.xRadius*Math.cos(o),c=this.aY+this.yRadius*Math.sin(o);if(this.aRotation!==0){const u=Math.cos(this.aRotation),h=Math.sin(this.aRotation),d=l-this.aX,p=c-this.aY;l=d*u-p*h+this.aX,c=d*h+p*u+this.aY}return n.set(l,c)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){const e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}}class _x extends tc{constructor(e,t,n,i,s,a){super(e,t,n,n,i,s,a),this.isArcCurve=!0,this.type="ArcCurve"}}function nc(){let r=0,e=0,t=0,n=0;function i(s,a,o,l){r=s,e=o,t=-3*s+3*a-2*o-l,n=2*s-2*a+o+l}return{initCatmullRom:function(s,a,o,l,c){i(a,o,c*(o-s),c*(l-a))},initNonuniformCatmullRom:function(s,a,o,l,c,u,h){let d=(a-s)/c-(o-s)/(c+u)+(o-a)/u,p=(o-a)/u-(l-a)/(u+h)+(l-o)/h;d*=u,p*=u,i(a,o,d,p)},calc:function(s){const a=s*s,o=a*s;return r+e*s+t*a+n*o}}}const qa=new P,ul=new nc,hl=new nc,dl=new nc;class vx extends Ri{constructor(e=[],t=!1,n="centripetal",i=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=n,this.tension=i}getPoint(e,t=new P){const n=t,i=this.points,s=i.length,a=(s-(this.closed?0:1))*e;let o=Math.floor(a),l=a-o;this.closed?o+=o>0?0:(Math.floor(Math.abs(o)/s)+1)*s:l===0&&o===s-1&&(o=s-2,l=1);let c,u;this.closed||o>0?c=i[(o-1)%s]:(qa.subVectors(i[0],i[1]).add(i[0]),c=qa);const h=i[o%s],d=i[(o+1)%s];if(this.closed||o+2<s?u=i[(o+2)%s]:(qa.subVectors(i[s-1],i[s-2]).add(i[s-1]),u=qa),this.curveType==="centripetal"||this.curveType==="chordal"){const p=this.curveType==="chordal"?.5:.25;let g=Math.pow(c.distanceToSquared(h),p),_=Math.pow(h.distanceToSquared(d),p),f=Math.pow(d.distanceToSquared(u),p);_<1e-4&&(_=1),g<1e-4&&(g=_),f<1e-4&&(f=_),ul.initNonuniformCatmullRom(c.x,h.x,d.x,u.x,g,_,f),hl.initNonuniformCatmullRom(c.y,h.y,d.y,u.y,g,_,f),dl.initNonuniformCatmullRom(c.z,h.z,d.z,u.z,g,_,f)}else this.curveType==="catmullrom"&&(ul.initCatmullRom(c.x,h.x,d.x,u.x,this.tension),hl.initCatmullRom(c.y,h.y,d.y,u.y,this.tension),dl.initCatmullRom(c.z,h.z,d.z,u.z,this.tension));return n.set(ul.calc(l),hl.calc(l),dl.calc(l)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const i=e.points[t];this.points.push(i.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){const i=this.points[t];e.points.push(i.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const i=e.points[t];this.points.push(new P().fromArray(i))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}}function dh(r,e,t,n,i){const s=(n-e)*.5,a=(i-t)*.5,o=r*r,l=r*o;return(2*t-2*n+s+a)*l+(-3*t+3*n-2*s-a)*o+s*r+t}function xx(r,e){const t=1-r;return t*t*e}function Mx(r,e){return 2*(1-r)*r*e}function yx(r,e){return r*r*e}function oa(r,e,t,n){return xx(r,e)+Mx(r,t)+yx(r,n)}function Sx(r,e){const t=1-r;return t*t*t*e}function Ex(r,e){const t=1-r;return 3*t*t*r*e}function bx(r,e){return 3*(1-r)*r*r*e}function Tx(r,e){return r*r*r*e}function la(r,e,t,n,i){return Sx(r,e)+Ex(r,t)+bx(r,n)+Tx(r,i)}class pd extends Ri{constructor(e=new Se,t=new Se,n=new Se,i=new Se){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=n,this.v3=i}getPoint(e,t=new Se){const n=t,i=this.v0,s=this.v1,a=this.v2,o=this.v3;return n.set(la(e,i.x,s.x,a.x,o.x),la(e,i.y,s.y,a.y,o.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class Ax extends Ri{constructor(e=new P,t=new P,n=new P,i=new P){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=n,this.v3=i}getPoint(e,t=new P){const n=t,i=this.v0,s=this.v1,a=this.v2,o=this.v3;return n.set(la(e,i.x,s.x,a.x,o.x),la(e,i.y,s.y,a.y,o.y),la(e,i.z,s.z,a.z,o.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class md extends Ri{constructor(e=new Se,t=new Se){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new Se){const n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new Se){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class wx extends Ri{constructor(e=new P,t=new P){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new P){const n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new P){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class gd extends Ri{constructor(e=new Se,t=new Se,n=new Se){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new Se){const n=t,i=this.v0,s=this.v1,a=this.v2;return n.set(oa(e,i.x,s.x,a.x),oa(e,i.y,s.y,a.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class Rx extends Ri{constructor(e=new P,t=new P,n=new P){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new P){const n=t,i=this.v0,s=this.v1,a=this.v2;return n.set(oa(e,i.x,s.x,a.x),oa(e,i.y,s.y,a.y),oa(e,i.z,s.z,a.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class _d extends Ri{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new Se){const n=t,i=this.points,s=(i.length-1)*e,a=Math.floor(s),o=s-a,l=i[a===0?a:a-1],c=i[a],u=i[a>i.length-2?i.length-1:a+1],h=i[a>i.length-3?i.length-1:a+2];return n.set(dh(o,l.x,c.x,u.x,h.x),dh(o,l.y,c.y,u.y,h.y)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const i=e.points[t];this.points.push(i.clone())}return this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){const i=this.points[t];e.points.push(i.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const i=e.points[t];this.points.push(new Se().fromArray(i))}return this}}var fh=Object.freeze({__proto__:null,ArcCurve:_x,CatmullRomCurve3:vx,CubicBezierCurve:pd,CubicBezierCurve3:Ax,EllipseCurve:tc,LineCurve:md,LineCurve3:wx,QuadraticBezierCurve:gd,QuadraticBezierCurve3:Rx,SplineCurve:_d});class Cx extends Ri{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(e){this.curves.push(e)}closePath(){const e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(t)){const n=e.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new fh[n](t,e))}return this}getPoint(e,t){const n=e*this.getLength(),i=this.getCurveLengths();let s=0;for(;s<i.length;){if(i[s]>=n){const a=i[s]-n,o=this.curves[s],l=o.getLength(),c=l===0?0:1-a/l;return o.getPointAt(c,t)}s++}return null}getLength(){const e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const e=[];let t=0;for(let n=0,i=this.curves.length;n<i;n++)t+=this.curves[n].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){const t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){const t=[];let n;for(let i=0,s=this.curves;i<s.length;i++){const a=s[i],o=a.isEllipseCurve?e*2:a.isLineCurve||a.isLineCurve3?1:a.isSplineCurve?e*a.points.length:e,l=a.getPoints(o);for(let c=0;c<l.length;c++){const u=l[c];n&&n.equals(u)||(t.push(u),n=u)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){const i=e.curves[t];this.curves.push(i.clone())}return this.autoClose=e.autoClose,this}toJSON(){const e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,n=this.curves.length;t<n;t++){const i=this.curves[t];e.curves.push(i.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){const i=e.curves[t];this.curves.push(new fh[i.type]().fromJSON(i))}return this}}class Lx extends Cx{constructor(e){super(),this.type="Path",this.currentPoint=new Se,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,n=e.length;t<n;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){const n=new md(this.currentPoint.clone(),new Se(e,t));return this.curves.push(n),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,n,i){const s=new gd(this.currentPoint.clone(),new Se(e,t),new Se(n,i));return this.curves.push(s),this.currentPoint.set(n,i),this}bezierCurveTo(e,t,n,i,s,a){const o=new pd(this.currentPoint.clone(),new Se(e,t),new Se(n,i),new Se(s,a));return this.curves.push(o),this.currentPoint.set(s,a),this}splineThru(e){const t=[this.currentPoint.clone()].concat(e),n=new _d(t);return this.curves.push(n),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,n,i,s,a){const o=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(e+o,t+l,n,i,s,a),this}absarc(e,t,n,i,s,a){return this.absellipse(e,t,n,n,i,s,a),this}ellipse(e,t,n,i,s,a,o,l){const c=this.currentPoint.x,u=this.currentPoint.y;return this.absellipse(e+c,t+u,n,i,s,a,o,l),this}absellipse(e,t,n,i,s,a,o,l){const c=new tc(e,t,n,i,s,a,o,l);if(this.curves.length>0){const h=c.getPoint(0);h.equals(this.currentPoint)||this.lineTo(h.x,h.y)}this.curves.push(c);const u=c.getPoint(1);return this.currentPoint.copy(u),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){const e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}}class ic extends Fn{constructor(e=[new Se(0,-.5),new Se(.5,0),new Se(0,.5)],t=12,n=0,i=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:e,segments:t,phiStart:n,phiLength:i},t=Math.floor(t),i=un(i,0,Math.PI*2);const s=[],a=[],o=[],l=[],c=[],u=1/t,h=new P,d=new Se,p=new P,g=new P,_=new P;let f=0,m=0;for(let y=0;y<=e.length-1;y++)switch(y){case 0:f=e[y+1].x-e[y].x,m=e[y+1].y-e[y].y,p.x=m*1,p.y=-f,p.z=m*0,_.copy(p),p.normalize(),l.push(p.x,p.y,p.z);break;case e.length-1:l.push(_.x,_.y,_.z);break;default:f=e[y+1].x-e[y].x,m=e[y+1].y-e[y].y,p.x=m*1,p.y=-f,p.z=m*0,g.copy(p),p.x+=_.x,p.y+=_.y,p.z+=_.z,p.normalize(),l.push(p.x,p.y,p.z),_.copy(g)}for(let y=0;y<=t;y++){const v=n+y*u*i,A=Math.sin(v),b=Math.cos(v);for(let w=0;w<=e.length-1;w++){h.x=e[w].x*A,h.y=e[w].y,h.z=e[w].x*b,a.push(h.x,h.y,h.z),d.x=y/t,d.y=w/(e.length-1),o.push(d.x,d.y);const S=l[3*w+0]*A,I=l[3*w+1],D=l[3*w+0]*b;c.push(S,I,D)}}for(let y=0;y<t;y++)for(let v=0;v<e.length-1;v++){const A=v+y*e.length,b=A,w=A+e.length,S=A+e.length+1,I=A+1;s.push(b,w,I),s.push(S,I,w)}this.setIndex(s),this.setAttribute("position",new Mn(a,3)),this.setAttribute("uv",new Mn(o,2)),this.setAttribute("normal",new Mn(c,3))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ic(e.points,e.segments,e.phiStart,e.phiLength)}}class rc extends ic{constructor(e=1,t=1,n=4,i=8){const s=new Lx;s.absarc(0,-t/2,e,Math.PI*1.5,0),s.absarc(0,t/2,e,0,Math.PI*.5),super(s.getPoints(n),i),this.type="CapsuleGeometry",this.parameters={radius:e,length:t,capSegments:n,radialSegments:i}}static fromJSON(e){return new rc(e.radius,e.length,e.capSegments,e.radialSegments)}}class Ss extends Fn{constructor(e=1,t=1,n=1,i=32,s=1,a=!1,o=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:i,heightSegments:s,openEnded:a,thetaStart:o,thetaLength:l};const c=this;i=Math.floor(i),s=Math.floor(s);const u=[],h=[],d=[],p=[];let g=0;const _=[],f=n/2;let m=0;y(),a===!1&&(e>0&&v(!0),t>0&&v(!1)),this.setIndex(u),this.setAttribute("position",new Mn(h,3)),this.setAttribute("normal",new Mn(d,3)),this.setAttribute("uv",new Mn(p,2));function y(){const A=new P,b=new P;let w=0;const S=(t-e)/n;for(let I=0;I<=s;I++){const D=[],x=I/s,E=x*(t-e)+e;for(let U=0;U<=i;U++){const Y=U/i,L=Y*l+o,O=Math.sin(L),k=Math.cos(L);b.x=E*O,b.y=-x*n+f,b.z=E*k,h.push(b.x,b.y,b.z),A.set(O,S,k).normalize(),d.push(A.x,A.y,A.z),p.push(Y,1-x),D.push(g++)}_.push(D)}for(let I=0;I<i;I++)for(let D=0;D<s;D++){const x=_[D][I],E=_[D+1][I],U=_[D+1][I+1],Y=_[D][I+1];u.push(x,E,Y),u.push(E,U,Y),w+=6}c.addGroup(m,w,0),m+=w}function v(A){const b=g,w=new Se,S=new P;let I=0;const D=A===!0?e:t,x=A===!0?1:-1;for(let U=1;U<=i;U++)h.push(0,f*x,0),d.push(0,x,0),p.push(.5,.5),g++;const E=g;for(let U=0;U<=i;U++){const L=U/i*l+o,O=Math.cos(L),k=Math.sin(L);S.x=D*k,S.y=f*x,S.z=D*O,h.push(S.x,S.y,S.z),d.push(0,x,0),w.x=O*.5+.5,w.y=k*.5*x+.5,p.push(w.x,w.y),g++}for(let U=0;U<i;U++){const Y=b+U,L=E+U;A===!0?u.push(L,L+1,Y):u.push(L+1,L,Y),I+=3}c.addGroup(m,I,A===!0?1:2),m+=I}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ss(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class sc extends Ss{constructor(e=1,t=1,n=32,i=1,s=!1,a=0,o=Math.PI*2){super(0,e,t,n,i,s,a,o),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:n,heightSegments:i,openEnded:s,thetaStart:a,thetaLength:o}}static fromJSON(e){return new sc(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class ac extends Fn{constructor(e=1,t=32,n=16,i=0,s=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:i,phiLength:s,thetaStart:a,thetaLength:o},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));const l=Math.min(a+o,Math.PI);let c=0;const u=[],h=new P,d=new P,p=[],g=[],_=[],f=[];for(let m=0;m<=n;m++){const y=[],v=m/n;let A=0;m===0&&a===0?A=.5/t:m===n&&l===Math.PI&&(A=-.5/t);for(let b=0;b<=t;b++){const w=b/t;h.x=-e*Math.cos(i+w*s)*Math.sin(a+v*o),h.y=e*Math.cos(a+v*o),h.z=e*Math.sin(i+w*s)*Math.sin(a+v*o),g.push(h.x,h.y,h.z),d.copy(h).normalize(),_.push(d.x,d.y,d.z),f.push(w+A,1-v),y.push(c++)}u.push(y)}for(let m=0;m<n;m++)for(let y=0;y<t;y++){const v=u[m][y+1],A=u[m][y],b=u[m+1][y],w=u[m+1][y+1];(m!==0||a>0)&&p.push(v,A,w),(m!==n-1||l<Math.PI)&&p.push(A,b,w)}this.setIndex(p),this.setAttribute("position",new Mn(g,3)),this.setAttribute("normal",new Mn(_,3)),this.setAttribute("uv",new Mn(f,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ac(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class fr extends bi{constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new Qe(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Qe(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Hh,this.normalScale=new Se(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ti,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class Ji extends fr{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new Se(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return un(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new Qe(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new Qe(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new Qe(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}}function ja(r,e,t){return!r||!t&&r.constructor===e?r:typeof e.BYTES_PER_ELEMENT=="number"?new e(r):Array.prototype.slice.call(r)}function Px(r){return ArrayBuffer.isView(r)&&!(r instanceof DataView)}function Ix(r){function e(i,s){return r[i]-r[s]}const t=r.length,n=new Array(t);for(let i=0;i!==t;++i)n[i]=i;return n.sort(e),n}function ph(r,e,t){const n=r.length,i=new r.constructor(n);for(let s=0,a=0;a!==n;++s){const o=t[s]*e;for(let l=0;l!==e;++l)i[a++]=r[o+l]}return i}function vd(r,e,t,n){let i=1,s=r[0];for(;s!==void 0&&s[n]===void 0;)s=r[i++];if(s===void 0)return;let a=s[n];if(a!==void 0)if(Array.isArray(a))do a=s[n],a!==void 0&&(e.push(s.time),t.push.apply(t,a)),s=r[i++];while(s!==void 0);else if(a.toArray!==void 0)do a=s[n],a!==void 0&&(e.push(s.time),a.toArray(t,t.length)),s=r[i++];while(s!==void 0);else do a=s[n],a!==void 0&&(e.push(s.time),t.push(a)),s=r[i++];while(s!==void 0)}class pa{constructor(e,t,n,i){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=i!==void 0?i:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){const t=this.parameterPositions;let n=this._cachedIndex,i=t[n],s=t[n-1];n:{e:{let a;t:{i:if(!(e<i)){for(let o=n+2;;){if(i===void 0){if(e<s)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===o)break;if(s=i,i=t[++n],e<i)break e}a=t.length;break t}if(!(e>=s)){const o=t[1];e<o&&(n=2,s=o);for(let l=n-2;;){if(s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(i=s,s=t[--n-1],e>=s)break e}a=n,n=0;break t}break n}for(;n<a;){const o=n+a>>>1;e<t[o]?a=o:n=o+1}if(i=t[n],s=t[n-1],s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,s,i)}return this.interpolate_(n,s,e,i)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){const t=this.resultBuffer,n=this.sampleValues,i=this.valueSize,s=e*i;for(let a=0;a!==i;++a)t[a]=n[s+a];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}}class Dx extends pa{constructor(e,t,n,i){super(e,t,n,i),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:su,endingEnd:su}}intervalChanged_(e,t,n){const i=this.parameterPositions;let s=e-2,a=e+1,o=i[s],l=i[a];if(o===void 0)switch(this.getSettings_().endingStart){case au:s=e,o=2*t-n;break;case ou:s=i.length-2,o=t+i[s]-i[s+1];break;default:s=e,o=n}if(l===void 0)switch(this.getSettings_().endingEnd){case au:a=e,l=2*n-t;break;case ou:a=1,l=n+i[1]-i[0];break;default:a=e-1,l=t}const c=(n-t)*.5,u=this.valueSize;this._weightPrev=c/(t-o),this._weightNext=c/(l-n),this._offsetPrev=s*u,this._offsetNext=a*u}interpolate_(e,t,n,i){const s=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=e*o,c=l-o,u=this._offsetPrev,h=this._offsetNext,d=this._weightPrev,p=this._weightNext,g=(n-t)/(i-t),_=g*g,f=_*g,m=-d*f+2*d*_-d*g,y=(1+d)*f+(-1.5-2*d)*_+(-.5+d)*g+1,v=(-1-p)*f+(1.5+p)*_+.5*g,A=p*f-p*_;for(let b=0;b!==o;++b)s[b]=m*a[u+b]+y*a[c+b]+v*a[l+b]+A*a[h+b];return s}}class Nx extends pa{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e,t,n,i){const s=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=e*o,c=l-o,u=(n-t)/(i-t),h=1-u;for(let d=0;d!==o;++d)s[d]=a[c+d]*h+a[l+d]*u;return s}}class Ux extends pa{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e){return this.copySampleValue_(e-1)}}class Ci{constructor(e,t,n,i){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=ja(t,this.TimeBufferType),this.values=ja(n,this.ValueBufferType),this.setInterpolation(i||this.DefaultInterpolation)}static toJSON(e){const t=e.constructor;let n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:ja(e.times,Array),values:ja(e.values,Array)};const i=e.getInterpolation();i!==e.DefaultInterpolation&&(n.interpolation=i)}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new Ux(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new Nx(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new Dx(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case ha:t=this.InterpolantFactoryMethodDiscrete;break;case Rs:t=this.InterpolantFactoryMethodLinear;break;case No:t=this.InterpolantFactoryMethodSmooth;break}if(t===void 0){const n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return ha;case this.InterpolantFactoryMethodLinear:return Rs;case this.InterpolantFactoryMethodSmooth:return No}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){const t=this.times;for(let n=0,i=t.length;n!==i;++n)t[n]+=e}return this}scale(e){if(e!==1){const t=this.times;for(let n=0,i=t.length;n!==i;++n)t[n]*=e}return this}trim(e,t){const n=this.times,i=n.length;let s=0,a=i-1;for(;s!==i&&n[s]<e;)++s;for(;a!==-1&&n[a]>t;)--a;if(++a,s!==0||a!==i){s>=a&&(a=Math.max(a,1),s=a-1);const o=this.getValueSize();this.times=n.slice(s,a),this.values=this.values.slice(s*o,a*o)}return this}validate(){let e=!0;const t=this.getValueSize();t-Math.floor(t)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),e=!1);const n=this.times,i=this.values,s=n.length;s===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),e=!1);let a=null;for(let o=0;o!==s;o++){const l=n[o];if(typeof l=="number"&&isNaN(l)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,o,l),e=!1;break}if(a!==null&&a>l){console.error("THREE.KeyframeTrack: Out of order keys.",this,o,l,a),e=!1;break}a=l}if(i!==void 0&&Px(i))for(let o=0,l=i.length;o!==l;++o){const c=i[o];if(isNaN(c)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,o,c),e=!1;break}}return e}optimize(){const e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),i=this.getInterpolation()===No,s=e.length-1;let a=1;for(let o=1;o<s;++o){let l=!1;const c=e[o],u=e[o+1];if(c!==u&&(o!==1||c!==e[0]))if(i)l=!0;else{const h=o*n,d=h-n,p=h+n;for(let g=0;g!==n;++g){const _=t[h+g];if(_!==t[d+g]||_!==t[p+g]){l=!0;break}}}if(l){if(o!==a){e[a]=e[o];const h=o*n,d=a*n;for(let p=0;p!==n;++p)t[d+p]=t[h+p]}++a}}if(s>0){e[a]=e[s];for(let o=s*n,l=a*n,c=0;c!==n;++c)t[l+c]=t[o+c];++a}return a!==e.length?(this.times=e.slice(0,a),this.values=t.slice(0,a*n)):(this.times=e,this.values=t),this}clone(){const e=this.times.slice(),t=this.values.slice(),n=this.constructor,i=new n(this.name,e,t);return i.createInterpolant=this.createInterpolant,i}}Ci.prototype.TimeBufferType=Float32Array;Ci.prototype.ValueBufferType=Float32Array;Ci.prototype.DefaultInterpolation=Rs;class Os extends Ci{}Os.prototype.ValueTypeName="bool";Os.prototype.ValueBufferType=Array;Os.prototype.DefaultInterpolation=ha;Os.prototype.InterpolantFactoryMethodLinear=void 0;Os.prototype.InterpolantFactoryMethodSmooth=void 0;class xd extends Ci{}xd.prototype.ValueTypeName="color";class Ps extends Ci{}Ps.prototype.ValueTypeName="number";class Fx extends pa{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e,t,n,i){const s=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=(n-t)/(i-t);let c=e*o;for(let u=c+o;c!==u;c+=4)xr.slerpFlat(s,0,a,c-o,a,c,l);return s}}class Hr extends Ci{InterpolantFactoryMethodLinear(e){return new Fx(this.times,this.values,this.getValueSize(),e)}}Hr.prototype.ValueTypeName="quaternion";Hr.prototype.DefaultInterpolation=Rs;Hr.prototype.InterpolantFactoryMethodSmooth=void 0;class Bs extends Ci{}Bs.prototype.ValueTypeName="string";Bs.prototype.ValueBufferType=Array;Bs.prototype.DefaultInterpolation=ha;Bs.prototype.InterpolantFactoryMethodLinear=void 0;Bs.prototype.InterpolantFactoryMethodSmooth=void 0;class Is extends Ci{}Is.prototype.ValueTypeName="vector";class Ox{constructor(e,t=-1,n,i=Ap){this.name=e,this.tracks=n,this.duration=t,this.blendMode=i,this.uuid=gi(),this.duration<0&&this.resetDuration()}static parse(e){const t=[],n=e.tracks,i=1/(e.fps||1);for(let a=0,o=n.length;a!==o;++a)t.push(kx(n[a]).scale(i));const s=new this(e.name,e.duration,t,e.blendMode);return s.uuid=e.uuid,s}static toJSON(e){const t=[],n=e.tracks,i={name:e.name,duration:e.duration,tracks:t,uuid:e.uuid,blendMode:e.blendMode};for(let s=0,a=n.length;s!==a;++s)t.push(Ci.toJSON(n[s]));return i}static CreateFromMorphTargetSequence(e,t,n,i){const s=t.length,a=[];for(let o=0;o<s;o++){let l=[],c=[];l.push((o+s-1)%s,o,(o+1)%s),c.push(0,1,0);const u=Ix(l);l=ph(l,1,u),c=ph(c,1,u),!i&&l[0]===0&&(l.push(s),c.push(c[0])),a.push(new Ps(".morphTargetInfluences["+t[o].name+"]",l,c).scale(1/n))}return new this(e,-1,a)}static findByName(e,t){let n=e;if(!Array.isArray(e)){const i=e;n=i.geometry&&i.geometry.animations||i.animations}for(let i=0;i<n.length;i++)if(n[i].name===t)return n[i];return null}static CreateClipsFromMorphTargetSequences(e,t,n){const i={},s=/^([\w-]*?)([\d]+)$/;for(let o=0,l=e.length;o<l;o++){const c=e[o],u=c.name.match(s);if(u&&u.length>1){const h=u[1];let d=i[h];d||(i[h]=d=[]),d.push(c)}}const a=[];for(const o in i)a.push(this.CreateFromMorphTargetSequence(o,i[o],t,n));return a}static parseAnimation(e,t){if(!e)return console.error("THREE.AnimationClip: No animation in JSONLoader data."),null;const n=function(h,d,p,g,_){if(p.length!==0){const f=[],m=[];vd(p,f,m,g),f.length!==0&&_.push(new h(d,f,m))}},i=[],s=e.name||"default",a=e.fps||30,o=e.blendMode;let l=e.length||-1;const c=e.hierarchy||[];for(let h=0;h<c.length;h++){const d=c[h].keys;if(!(!d||d.length===0))if(d[0].morphTargets){const p={};let g;for(g=0;g<d.length;g++)if(d[g].morphTargets)for(let _=0;_<d[g].morphTargets.length;_++)p[d[g].morphTargets[_]]=-1;for(const _ in p){const f=[],m=[];for(let y=0;y!==d[g].morphTargets.length;++y){const v=d[g];f.push(v.time),m.push(v.morphTarget===_?1:0)}i.push(new Ps(".morphTargetInfluence["+_+"]",f,m))}l=p.length*a}else{const p=".bones["+t[h].name+"]";n(Is,p+".position",d,"pos",i),n(Hr,p+".quaternion",d,"rot",i),n(Is,p+".scale",d,"scl",i)}}return i.length===0?null:new this(s,l,i,o)}resetDuration(){const e=this.tracks;let t=0;for(let n=0,i=e.length;n!==i;++n){const s=this.tracks[n];t=Math.max(t,s.times[s.times.length-1])}return this.duration=t,this}trim(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].trim(0,this.duration);return this}validate(){let e=!0;for(let t=0;t<this.tracks.length;t++)e=e&&this.tracks[t].validate();return e}optimize(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].optimize();return this}clone(){const e=[];for(let t=0;t<this.tracks.length;t++)e.push(this.tracks[t].clone());return new this.constructor(this.name,this.duration,e,this.blendMode)}toJSON(){return this.constructor.toJSON(this)}}function Bx(r){switch(r.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return Ps;case"vector":case"vector2":case"vector3":case"vector4":return Is;case"color":return xd;case"quaternion":return Hr;case"bool":case"boolean":return Os;case"string":return Bs}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+r)}function kx(r){if(r.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");const e=Bx(r.type);if(r.times===void 0){const t=[],n=[];vd(r.keys,t,n,"value"),r.times=t,r.values=n}return e.parse!==void 0?e.parse(r):new e(r.name,r.times,r.values,r.interpolation)}const mr={enabled:!1,files:{},add:function(r,e){this.enabled!==!1&&(this.files[r]=e)},get:function(r){if(this.enabled!==!1)return this.files[r]},remove:function(r){delete this.files[r]},clear:function(){this.files={}}};class zx{constructor(e,t,n){const i=this;let s=!1,a=0,o=0,l;const c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this.itemStart=function(u){o++,s===!1&&i.onStart!==void 0&&i.onStart(u,a,o),s=!0},this.itemEnd=function(u){a++,i.onProgress!==void 0&&i.onProgress(u,a,o),a===o&&(s=!1,i.onLoad!==void 0&&i.onLoad())},this.itemError=function(u){i.onError!==void 0&&i.onError(u)},this.resolveURL=function(u){return l?l(u):u},this.setURLModifier=function(u){return l=u,this},this.addHandler=function(u,h){return c.push(u,h),this},this.removeHandler=function(u){const h=c.indexOf(u);return h!==-1&&c.splice(h,2),this},this.getHandler=function(u){for(let h=0,d=c.length;h<d;h+=2){const p=c[h],g=c[h+1];if(p.global&&(p.lastIndex=0),p.test(u))return g}return null}}}const Gx=new zx;class ks{constructor(e){this.manager=e!==void 0?e:Gx,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){const n=this;return new Promise(function(i,s){n.load(e,i,t,s)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}}ks.DEFAULT_MATERIAL_NAME="__DEFAULT";const Wi={};class Hx extends Error{constructor(e,t){super(e),this.response=t}}class Md extends ks{constructor(e){super(e)}load(e,t,n,i){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=mr.get(e);if(s!==void 0)return this.manager.itemStart(e),setTimeout(()=>{t&&t(s),this.manager.itemEnd(e)},0),s;if(Wi[e]!==void 0){Wi[e].push({onLoad:t,onProgress:n,onError:i});return}Wi[e]=[],Wi[e].push({onLoad:t,onProgress:n,onError:i});const a=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin"}),o=this.mimeType,l=this.responseType;fetch(a).then(c=>{if(c.status===200||c.status===0){if(c.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||c.body===void 0||c.body.getReader===void 0)return c;const u=Wi[e],h=c.body.getReader(),d=c.headers.get("Content-Length")||c.headers.get("X-File-Size"),p=d?parseInt(d):0,g=p!==0;let _=0;const f=new ReadableStream({start(m){y();function y(){h.read().then(({done:v,value:A})=>{if(v)m.close();else{_+=A.byteLength;const b=new ProgressEvent("progress",{lengthComputable:g,loaded:_,total:p});for(let w=0,S=u.length;w<S;w++){const I=u[w];I.onProgress&&I.onProgress(b)}m.enqueue(A),y()}})}}});return new Response(f)}else throw new Hx(`fetch for "${c.url}" responded with ${c.status}: ${c.statusText}`,c)}).then(c=>{switch(l){case"arraybuffer":return c.arrayBuffer();case"blob":return c.blob();case"document":return c.text().then(u=>new DOMParser().parseFromString(u,o));case"json":return c.json();default:if(o===void 0)return c.text();{const h=/charset="?([^;"\s]*)"?/i.exec(o),d=h&&h[1]?h[1].toLowerCase():void 0,p=new TextDecoder(d);return c.arrayBuffer().then(g=>p.decode(g))}}}).then(c=>{mr.add(e,c);const u=Wi[e];delete Wi[e];for(let h=0,d=u.length;h<d;h++){const p=u[h];p.onLoad&&p.onLoad(c)}}).catch(c=>{const u=Wi[e];if(u===void 0)throw this.manager.itemError(e),c;delete Wi[e];for(let h=0,d=u.length;h<d;h++){const p=u[h];p.onError&&p.onError(c)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}}class Vx extends ks{constructor(e){super(e)}load(e,t,n,i){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=this,a=mr.get(e);if(a!==void 0)return s.manager.itemStart(e),setTimeout(function(){t&&t(a),s.manager.itemEnd(e)},0),a;const o=da("img");function l(){u(),mr.add(e,this),t&&t(this),s.manager.itemEnd(e)}function c(h){u(),i&&i(h),s.manager.itemError(e),s.manager.itemEnd(e)}function u(){o.removeEventListener("load",l,!1),o.removeEventListener("error",c,!1)}return o.addEventListener("load",l,!1),o.addEventListener("error",c,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(o.crossOrigin=this.crossOrigin),s.manager.itemStart(e),o.src=e,o}}class Wx extends ks{constructor(e){super(e)}load(e,t,n,i){const s=new xn,a=new Vx(this.manager);return a.setCrossOrigin(this.crossOrigin),a.setPath(this.path),a.load(e,function(o){s.image=o,s.needsUpdate=!0,t!==void 0&&t(s)},n,i),s}}class uo extends en{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Qe(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),t}}const fl=new je,mh=new P,gh=new P;class oc{constructor(e){this.camera=e,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Se(512,512),this.map=null,this.mapPass=null,this.matrix=new je,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Yl,this._frameExtents=new Se(1,1),this._viewportCount=1,this._viewports=[new Ht(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,n=this.matrix;mh.setFromMatrixPosition(e.matrixWorld),t.position.copy(mh),gh.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(gh),t.updateMatrixWorld(),fl.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(fl),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(fl)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class Xx extends oc{constructor(){super(new Nn(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1}updateMatrices(e){const t=this.camera,n=Cs*2*e.angle*this.focus,i=this.mapSize.width/this.mapSize.height,s=e.distance||t.far;(n!==t.fov||i!==t.aspect||s!==t.far)&&(t.fov=n,t.aspect=i,t.far=s,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this}}class qx extends uo{constructor(e,t,n=0,i=Math.PI/3,s=0,a=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(en.DEFAULT_UP),this.updateMatrix(),this.target=new en,this.distance=n,this.angle=i,this.penumbra=s,this.decay=a,this.map=null,this.shadow=new Xx}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}const _h=new je,ea=new P,pl=new P;class jx extends oc{constructor(){super(new Nn(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new Se(4,2),this._viewportCount=6,this._viewports=[new Ht(2,1,1,1),new Ht(0,1,1,1),new Ht(3,1,1,1),new Ht(1,1,1,1),new Ht(3,0,1,1),new Ht(1,0,1,1)],this._cubeDirections=[new P(1,0,0),new P(-1,0,0),new P(0,0,1),new P(0,0,-1),new P(0,1,0),new P(0,-1,0)],this._cubeUps=[new P(0,1,0),new P(0,1,0),new P(0,1,0),new P(0,1,0),new P(0,0,1),new P(0,0,-1)]}updateMatrices(e,t=0){const n=this.camera,i=this.matrix,s=e.distance||n.far;s!==n.far&&(n.far=s,n.updateProjectionMatrix()),ea.setFromMatrixPosition(e.matrixWorld),n.position.copy(ea),pl.copy(n.position),pl.add(this._cubeDirections[t]),n.up.copy(this._cubeUps[t]),n.lookAt(pl),n.updateMatrixWorld(),i.makeTranslation(-ea.x,-ea.y,-ea.z),_h.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(_h)}}class Yx extends uo{constructor(e,t,n=0,i=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=i,this.shadow=new jx}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}}class Kx extends oc{constructor(){super(new Kl(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Fl extends uo{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(en.DEFAULT_UP),this.updateMatrix(),this.target=new en,this.shadow=new Kx}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class vh extends uo{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}}class ca{static decodeText(e){if(typeof TextDecoder<"u")return new TextDecoder().decode(e);let t="";for(let n=0,i=e.length;n<i;n++)t+=String.fromCharCode(e[n]);try{return decodeURIComponent(escape(t))}catch{return t}}static extractUrlBase(e){const t=e.lastIndexOf("/");return t===-1?"./":e.slice(0,t+1)}static resolveURL(e,t){return typeof e!="string"||e===""?"":(/^https?:\/\//i.test(t)&&/^\//.test(e)&&(t=t.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(e)||/^data:.*,.*$/i.test(e)||/^blob:.*$/i.test(e)?e:t+e)}}class $x extends ks{constructor(e){super(e),this.isImageBitmapLoader=!0,typeof createImageBitmap>"u"&&console.warn("THREE.ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch>"u"&&console.warn("THREE.ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"}}setOptions(e){return this.options=e,this}load(e,t,n,i){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=this,a=mr.get(e);if(a!==void 0){if(s.manager.itemStart(e),a.then){a.then(c=>{t&&t(c),s.manager.itemEnd(e)}).catch(c=>{i&&i(c)});return}return setTimeout(function(){t&&t(a),s.manager.itemEnd(e)},0),a}const o={};o.credentials=this.crossOrigin==="anonymous"?"same-origin":"include",o.headers=this.requestHeader;const l=fetch(e,o).then(function(c){return c.blob()}).then(function(c){return createImageBitmap(c,Object.assign(s.options,{colorSpaceConversion:"none"}))}).then(function(c){return mr.add(e,c),t&&t(c),s.manager.itemEnd(e),c}).catch(function(c){i&&i(c),mr.remove(e),s.manager.itemError(e),s.manager.itemEnd(e)});mr.add(e,l),s.manager.itemStart(e)}}const lc="\\[\\]\\.:\\/",Zx=new RegExp("["+lc+"]","g"),cc="[^"+lc+"]",Jx="[^"+lc.replace("\\.","")+"]",Qx=/((?:WC+[\/:])*)/.source.replace("WC",cc),eM=/(WCOD+)?/.source.replace("WCOD",Jx),tM=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",cc),nM=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",cc),iM=new RegExp("^"+Qx+eM+tM+nM+"$"),rM=["material","materials","bones","map"];class sM{constructor(e,t,n){const i=n||It.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,i)}getValue(e,t){this.bind();const n=this._targetGroup.nCachedObjects_,i=this._bindings[n];i!==void 0&&i.getValue(e,t)}setValue(e,t){const n=this._bindings;for(let i=this._targetGroup.nCachedObjects_,s=n.length;i!==s;++i)n[i].setValue(e,t)}bind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}}class It{constructor(e,t,n){this.path=t,this.parsedPath=n||It.parseTrackName(t),this.node=It.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new It.Composite(e,t,n):new It(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(Zx,"")}static parseTrackName(e){const t=iM.exec(e);if(t===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);const n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},i=n.nodeName&&n.nodeName.lastIndexOf(".");if(i!==void 0&&i!==-1){const s=n.nodeName.substring(i+1);rM.indexOf(s)!==-1&&(n.nodeName=n.nodeName.substring(0,i),n.objectName=s)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){const n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){const n=function(s){for(let a=0;a<s.length;a++){const o=s[a];if(o.name===t||o.uuid===t)return o;const l=n(o.children);if(l)return l}return null},i=n(e.children);if(i)return i}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){const n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)e[t++]=n[i]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){const n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)n[i]=e[t++]}_setValue_array_setNeedsUpdate(e,t){const n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)n[i]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){const n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)n[i]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node;const t=this.parsedPath,n=t.objectName,i=t.propertyName;let s=t.propertyIndex;if(e||(e=It.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let c=t.objectIndex;switch(n){case"materials":if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let u=0;u<e.length;u++)if(e[u].name===c){c=u;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[n]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[n]}if(c!==void 0){if(e[c]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[c]}}const a=e[i];if(a===void 0){const c=t.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+c+"."+i+" but it wasn't found.",e);return}let o=this.Versioning.None;this.targetObject=e,e.needsUpdate!==void 0?o=this.Versioning.NeedsUpdate:e.matrixWorldNeedsUpdate!==void 0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(s!==void 0){if(i==="morphTargetInfluences"){if(!e.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[s]!==void 0&&(s=e.morphTargetDictionary[s])}l=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=s}else a.fromArray!==void 0&&a.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(l=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=i;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}}It.Composite=sM;It.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};It.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};It.prototype.GetterByBindingType=[It.prototype._getValue_direct,It.prototype._getValue_array,It.prototype._getValue_arrayElement,It.prototype._getValue_toArray];It.prototype.SetterByBindingTypeAndVersioning=[[It.prototype._setValue_direct,It.prototype._setValue_direct_setNeedsUpdate,It.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[It.prototype._setValue_array,It.prototype._setValue_array_setNeedsUpdate,It.prototype._setValue_array_setMatrixWorldNeedsUpdate],[It.prototype._setValue_arrayElement,It.prototype._setValue_arrayElement_setNeedsUpdate,It.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[It.prototype._setValue_fromArray,It.prototype._setValue_fromArray_setNeedsUpdate,It.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Vl}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Vl);function xh(r,e){if(e===wp)return console.warn("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Geometry already defined as triangles."),r;if(e===Rl||e===Gh){let t=r.getIndex();if(t===null){const a=[],o=r.getAttribute("position");if(o!==void 0){for(let l=0;l<o.count;l++)a.push(l);r.setIndex(a),t=r.getIndex()}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."),r}const n=t.count-2,i=[];if(e===Rl)for(let a=1;a<=n;a++)i.push(t.getX(0)),i.push(t.getX(a)),i.push(t.getX(a+1));else for(let a=0;a<n;a++)a%2===0?(i.push(t.getX(a)),i.push(t.getX(a+1)),i.push(t.getX(a+2))):(i.push(t.getX(a+2)),i.push(t.getX(a+1)),i.push(t.getX(a)));i.length/3!==n&&console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unable to generate correct amount of triangles.");const s=r.clone();return s.setIndex(i),s.clearGroups(),s}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unknown draw mode:",e),r}class aM extends ks{constructor(e){super(e),this.dracoLoader=null,this.ktx2Loader=null,this.meshoptDecoder=null,this.pluginCallbacks=[],this.register(function(t){return new hM(t)}),this.register(function(t){return new MM(t)}),this.register(function(t){return new yM(t)}),this.register(function(t){return new SM(t)}),this.register(function(t){return new fM(t)}),this.register(function(t){return new pM(t)}),this.register(function(t){return new mM(t)}),this.register(function(t){return new gM(t)}),this.register(function(t){return new uM(t)}),this.register(function(t){return new _M(t)}),this.register(function(t){return new dM(t)}),this.register(function(t){return new xM(t)}),this.register(function(t){return new vM(t)}),this.register(function(t){return new lM(t)}),this.register(function(t){return new EM(t)}),this.register(function(t){return new bM(t)})}load(e,t,n,i){const s=this;let a;if(this.resourcePath!=="")a=this.resourcePath;else if(this.path!==""){const c=ca.extractUrlBase(e);a=ca.resolveURL(c,this.path)}else a=ca.extractUrlBase(e);this.manager.itemStart(e);const o=function(c){i?i(c):console.error(c),s.manager.itemError(e),s.manager.itemEnd(e)},l=new Md(this.manager);l.setPath(this.path),l.setResponseType("arraybuffer"),l.setRequestHeader(this.requestHeader),l.setWithCredentials(this.withCredentials),l.load(e,function(c){try{s.parse(c,a,function(u){t(u),s.manager.itemEnd(e)},o)}catch(u){o(u)}},n,o)}setDRACOLoader(e){return this.dracoLoader=e,this}setDDSLoader(){throw new Error('THREE.GLTFLoader: "MSFT_texture_dds" no longer supported. Please update to "KHR_texture_basisu".')}setKTX2Loader(e){return this.ktx2Loader=e,this}setMeshoptDecoder(e){return this.meshoptDecoder=e,this}register(e){return this.pluginCallbacks.indexOf(e)===-1&&this.pluginCallbacks.push(e),this}unregister(e){return this.pluginCallbacks.indexOf(e)!==-1&&this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(e),1),this}parse(e,t,n,i){let s;const a={},o={},l=new TextDecoder;if(typeof e=="string")s=JSON.parse(e);else if(e instanceof ArrayBuffer)if(l.decode(new Uint8Array(e,0,4))===yd){try{a[xt.KHR_BINARY_GLTF]=new TM(e)}catch(h){i&&i(h);return}s=JSON.parse(a[xt.KHR_BINARY_GLTF].content)}else s=JSON.parse(l.decode(e));else s=e;if(s.asset===void 0||s.asset.version[0]<2){i&&i(new Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."));return}const c=new BM(s,{path:t||this.resourcePath||"",crossOrigin:this.crossOrigin,requestHeader:this.requestHeader,manager:this.manager,ktx2Loader:this.ktx2Loader,meshoptDecoder:this.meshoptDecoder});c.fileLoader.setRequestHeader(this.requestHeader);for(let u=0;u<this.pluginCallbacks.length;u++){const h=this.pluginCallbacks[u](c);h.name||console.error("THREE.GLTFLoader: Invalid plugin found: missing name"),o[h.name]=h,a[h.name]=!0}if(s.extensionsUsed)for(let u=0;u<s.extensionsUsed.length;++u){const h=s.extensionsUsed[u],d=s.extensionsRequired||[];switch(h){case xt.KHR_MATERIALS_UNLIT:a[h]=new cM;break;case xt.KHR_DRACO_MESH_COMPRESSION:a[h]=new AM(s,this.dracoLoader);break;case xt.KHR_TEXTURE_TRANSFORM:a[h]=new wM;break;case xt.KHR_MESH_QUANTIZATION:a[h]=new RM;break;default:d.indexOf(h)>=0&&o[h]===void 0&&console.warn('THREE.GLTFLoader: Unknown extension "'+h+'".')}}c.setExtensions(a),c.setPlugins(o),c.parse(n,i)}parseAsync(e,t){const n=this;return new Promise(function(i,s){n.parse(e,t,i,s)})}}function oM(){let r={};return{get:function(e){return r[e]},add:function(e,t){r[e]=t},remove:function(e){delete r[e]},removeAll:function(){r={}}}}const xt={KHR_BINARY_GLTF:"KHR_binary_glTF",KHR_DRACO_MESH_COMPRESSION:"KHR_draco_mesh_compression",KHR_LIGHTS_PUNCTUAL:"KHR_lights_punctual",KHR_MATERIALS_CLEARCOAT:"KHR_materials_clearcoat",KHR_MATERIALS_IOR:"KHR_materials_ior",KHR_MATERIALS_SHEEN:"KHR_materials_sheen",KHR_MATERIALS_SPECULAR:"KHR_materials_specular",KHR_MATERIALS_TRANSMISSION:"KHR_materials_transmission",KHR_MATERIALS_IRIDESCENCE:"KHR_materials_iridescence",KHR_MATERIALS_ANISOTROPY:"KHR_materials_anisotropy",KHR_MATERIALS_UNLIT:"KHR_materials_unlit",KHR_MATERIALS_VOLUME:"KHR_materials_volume",KHR_TEXTURE_BASISU:"KHR_texture_basisu",KHR_TEXTURE_TRANSFORM:"KHR_texture_transform",KHR_MESH_QUANTIZATION:"KHR_mesh_quantization",KHR_MATERIALS_EMISSIVE_STRENGTH:"KHR_materials_emissive_strength",EXT_MATERIALS_BUMP:"EXT_materials_bump",EXT_TEXTURE_WEBP:"EXT_texture_webp",EXT_TEXTURE_AVIF:"EXT_texture_avif",EXT_MESHOPT_COMPRESSION:"EXT_meshopt_compression",EXT_MESH_GPU_INSTANCING:"EXT_mesh_gpu_instancing"};class lM{constructor(e){this.parser=e,this.name=xt.KHR_LIGHTS_PUNCTUAL,this.cache={refs:{},uses:{}}}_markDefs(){const e=this.parser,t=this.parser.json.nodes||[];for(let n=0,i=t.length;n<i;n++){const s=t[n];s.extensions&&s.extensions[this.name]&&s.extensions[this.name].light!==void 0&&e._addNodeRef(this.cache,s.extensions[this.name].light)}}_loadLight(e){const t=this.parser,n="light:"+e;let i=t.cache.get(n);if(i)return i;const s=t.json,l=((s.extensions&&s.extensions[this.name]||{}).lights||[])[e];let c;const u=new Qe(16777215);l.color!==void 0&&u.setRGB(l.color[0],l.color[1],l.color[2],Sn);const h=l.range!==void 0?l.range:0;switch(l.type){case"directional":c=new Fl(u),c.target.position.set(0,0,-1),c.add(c.target);break;case"point":c=new Yx(u),c.distance=h;break;case"spot":c=new qx(u),c.distance=h,l.spot=l.spot||{},l.spot.innerConeAngle=l.spot.innerConeAngle!==void 0?l.spot.innerConeAngle:0,l.spot.outerConeAngle=l.spot.outerConeAngle!==void 0?l.spot.outerConeAngle:Math.PI/4,c.angle=l.spot.outerConeAngle,c.penumbra=1-l.spot.innerConeAngle/l.spot.outerConeAngle,c.target.position.set(0,0,-1),c.add(c.target);break;default:throw new Error("THREE.GLTFLoader: Unexpected light type: "+l.type)}return c.position.set(0,0,0),c.decay=2,hr(c,l),l.intensity!==void 0&&(c.intensity=l.intensity),c.name=t.createUniqueName(l.name||"light_"+e),i=Promise.resolve(c),t.cache.add(n,i),i}getDependency(e,t){if(e==="light")return this._loadLight(t)}createNodeAttachment(e){const t=this,n=this.parser,s=n.json.nodes[e],o=(s.extensions&&s.extensions[this.name]||{}).light;return o===void 0?null:this._loadLight(o).then(function(l){return n._getNodeRef(t.cache,o,l)})}}class cM{constructor(){this.name=xt.KHR_MATERIALS_UNLIT}getMaterialType(){return Br}extendParams(e,t,n){const i=[];e.color=new Qe(1,1,1),e.opacity=1;const s=t.pbrMetallicRoughness;if(s){if(Array.isArray(s.baseColorFactor)){const a=s.baseColorFactor;e.color.setRGB(a[0],a[1],a[2],Sn),e.opacity=a[3]}s.baseColorTexture!==void 0&&i.push(n.assignTexture(e,"map",s.baseColorTexture,Dn))}return Promise.all(i)}}class uM{constructor(e){this.parser=e,this.name=xt.KHR_MATERIALS_EMISSIVE_STRENGTH}extendMaterialParams(e,t){const i=this.parser.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=i.extensions[this.name].emissiveStrength;return s!==void 0&&(t.emissiveIntensity=s),Promise.resolve()}}class hM{constructor(e){this.parser=e,this.name=xt.KHR_MATERIALS_CLEARCOAT}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Ji}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=[],a=i.extensions[this.name];if(a.clearcoatFactor!==void 0&&(t.clearcoat=a.clearcoatFactor),a.clearcoatTexture!==void 0&&s.push(n.assignTexture(t,"clearcoatMap",a.clearcoatTexture)),a.clearcoatRoughnessFactor!==void 0&&(t.clearcoatRoughness=a.clearcoatRoughnessFactor),a.clearcoatRoughnessTexture!==void 0&&s.push(n.assignTexture(t,"clearcoatRoughnessMap",a.clearcoatRoughnessTexture)),a.clearcoatNormalTexture!==void 0&&(s.push(n.assignTexture(t,"clearcoatNormalMap",a.clearcoatNormalTexture)),a.clearcoatNormalTexture.scale!==void 0)){const o=a.clearcoatNormalTexture.scale;t.clearcoatNormalScale=new Se(o,o)}return Promise.all(s)}}class dM{constructor(e){this.parser=e,this.name=xt.KHR_MATERIALS_IRIDESCENCE}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Ji}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=[],a=i.extensions[this.name];return a.iridescenceFactor!==void 0&&(t.iridescence=a.iridescenceFactor),a.iridescenceTexture!==void 0&&s.push(n.assignTexture(t,"iridescenceMap",a.iridescenceTexture)),a.iridescenceIor!==void 0&&(t.iridescenceIOR=a.iridescenceIor),t.iridescenceThicknessRange===void 0&&(t.iridescenceThicknessRange=[100,400]),a.iridescenceThicknessMinimum!==void 0&&(t.iridescenceThicknessRange[0]=a.iridescenceThicknessMinimum),a.iridescenceThicknessMaximum!==void 0&&(t.iridescenceThicknessRange[1]=a.iridescenceThicknessMaximum),a.iridescenceThicknessTexture!==void 0&&s.push(n.assignTexture(t,"iridescenceThicknessMap",a.iridescenceThicknessTexture)),Promise.all(s)}}class fM{constructor(e){this.parser=e,this.name=xt.KHR_MATERIALS_SHEEN}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Ji}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=[];t.sheenColor=new Qe(0,0,0),t.sheenRoughness=0,t.sheen=1;const a=i.extensions[this.name];if(a.sheenColorFactor!==void 0){const o=a.sheenColorFactor;t.sheenColor.setRGB(o[0],o[1],o[2],Sn)}return a.sheenRoughnessFactor!==void 0&&(t.sheenRoughness=a.sheenRoughnessFactor),a.sheenColorTexture!==void 0&&s.push(n.assignTexture(t,"sheenColorMap",a.sheenColorTexture,Dn)),a.sheenRoughnessTexture!==void 0&&s.push(n.assignTexture(t,"sheenRoughnessMap",a.sheenRoughnessTexture)),Promise.all(s)}}class pM{constructor(e){this.parser=e,this.name=xt.KHR_MATERIALS_TRANSMISSION}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Ji}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=[],a=i.extensions[this.name];return a.transmissionFactor!==void 0&&(t.transmission=a.transmissionFactor),a.transmissionTexture!==void 0&&s.push(n.assignTexture(t,"transmissionMap",a.transmissionTexture)),Promise.all(s)}}class mM{constructor(e){this.parser=e,this.name=xt.KHR_MATERIALS_VOLUME}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Ji}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=[],a=i.extensions[this.name];t.thickness=a.thicknessFactor!==void 0?a.thicknessFactor:0,a.thicknessTexture!==void 0&&s.push(n.assignTexture(t,"thicknessMap",a.thicknessTexture)),t.attenuationDistance=a.attenuationDistance||1/0;const o=a.attenuationColor||[1,1,1];return t.attenuationColor=new Qe().setRGB(o[0],o[1],o[2],Sn),Promise.all(s)}}class gM{constructor(e){this.parser=e,this.name=xt.KHR_MATERIALS_IOR}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Ji}extendMaterialParams(e,t){const i=this.parser.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=i.extensions[this.name];return t.ior=s.ior!==void 0?s.ior:1.5,Promise.resolve()}}class _M{constructor(e){this.parser=e,this.name=xt.KHR_MATERIALS_SPECULAR}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Ji}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=[],a=i.extensions[this.name];t.specularIntensity=a.specularFactor!==void 0?a.specularFactor:1,a.specularTexture!==void 0&&s.push(n.assignTexture(t,"specularIntensityMap",a.specularTexture));const o=a.specularColorFactor||[1,1,1];return t.specularColor=new Qe().setRGB(o[0],o[1],o[2],Sn),a.specularColorTexture!==void 0&&s.push(n.assignTexture(t,"specularColorMap",a.specularColorTexture,Dn)),Promise.all(s)}}class vM{constructor(e){this.parser=e,this.name=xt.EXT_MATERIALS_BUMP}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Ji}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=[],a=i.extensions[this.name];return t.bumpScale=a.bumpFactor!==void 0?a.bumpFactor:1,a.bumpTexture!==void 0&&s.push(n.assignTexture(t,"bumpMap",a.bumpTexture)),Promise.all(s)}}class xM{constructor(e){this.parser=e,this.name=xt.KHR_MATERIALS_ANISOTROPY}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Ji}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=[],a=i.extensions[this.name];return a.anisotropyStrength!==void 0&&(t.anisotropy=a.anisotropyStrength),a.anisotropyRotation!==void 0&&(t.anisotropyRotation=a.anisotropyRotation),a.anisotropyTexture!==void 0&&s.push(n.assignTexture(t,"anisotropyMap",a.anisotropyTexture)),Promise.all(s)}}class MM{constructor(e){this.parser=e,this.name=xt.KHR_TEXTURE_BASISU}loadTexture(e){const t=this.parser,n=t.json,i=n.textures[e];if(!i.extensions||!i.extensions[this.name])return null;const s=i.extensions[this.name],a=t.options.ktx2Loader;if(!a){if(n.extensionsRequired&&n.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures");return null}return t.loadTextureImage(e,s.source,a)}}class yM{constructor(e){this.parser=e,this.name=xt.EXT_TEXTURE_WEBP,this.isSupported=null}loadTexture(e){const t=this.name,n=this.parser,i=n.json,s=i.textures[e];if(!s.extensions||!s.extensions[t])return null;const a=s.extensions[t],o=i.images[a.source];let l=n.textureLoader;if(o.uri){const c=n.options.manager.getHandler(o.uri);c!==null&&(l=c)}return this.detectSupport().then(function(c){if(c)return n.loadTextureImage(e,a.source,l);if(i.extensionsRequired&&i.extensionsRequired.indexOf(t)>=0)throw new Error("THREE.GLTFLoader: WebP required by asset but unsupported.");return n.loadTexture(e)})}detectSupport(){return this.isSupported||(this.isSupported=new Promise(function(e){const t=new Image;t.src="data:image/webp;base64,UklGRiIAAABXRUJQVlA4IBYAAAAwAQCdASoBAAEADsD+JaQAA3AAAAAA",t.onload=t.onerror=function(){e(t.height===1)}})),this.isSupported}}class SM{constructor(e){this.parser=e,this.name=xt.EXT_TEXTURE_AVIF,this.isSupported=null}loadTexture(e){const t=this.name,n=this.parser,i=n.json,s=i.textures[e];if(!s.extensions||!s.extensions[t])return null;const a=s.extensions[t],o=i.images[a.source];let l=n.textureLoader;if(o.uri){const c=n.options.manager.getHandler(o.uri);c!==null&&(l=c)}return this.detectSupport().then(function(c){if(c)return n.loadTextureImage(e,a.source,l);if(i.extensionsRequired&&i.extensionsRequired.indexOf(t)>=0)throw new Error("THREE.GLTFLoader: AVIF required by asset but unsupported.");return n.loadTexture(e)})}detectSupport(){return this.isSupported||(this.isSupported=new Promise(function(e){const t=new Image;t.src="data:image/avif;base64,AAAAIGZ0eXBhdmlmAAAAAGF2aWZtaWYxbWlhZk1BMUIAAADybWV0YQAAAAAAAAAoaGRscgAAAAAAAAAAcGljdAAAAAAAAAAAAAAAAGxpYmF2aWYAAAAADnBpdG0AAAAAAAEAAAAeaWxvYwAAAABEAAABAAEAAAABAAABGgAAABcAAAAoaWluZgAAAAAAAQAAABppbmZlAgAAAAABAABhdjAxQ29sb3IAAAAAamlwcnAAAABLaXBjbwAAABRpc3BlAAAAAAAAAAEAAAABAAAAEHBpeGkAAAAAAwgICAAAAAxhdjFDgQAMAAAAABNjb2xybmNseAACAAIABoAAAAAXaXBtYQAAAAAAAAABAAEEAQKDBAAAAB9tZGF0EgAKCBgABogQEDQgMgkQAAAAB8dSLfI=",t.onload=t.onerror=function(){e(t.height===1)}})),this.isSupported}}class EM{constructor(e){this.name=xt.EXT_MESHOPT_COMPRESSION,this.parser=e}loadBufferView(e){const t=this.parser.json,n=t.bufferViews[e];if(n.extensions&&n.extensions[this.name]){const i=n.extensions[this.name],s=this.parser.getDependency("buffer",i.buffer),a=this.parser.options.meshoptDecoder;if(!a||!a.supported){if(t.extensionsRequired&&t.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files");return null}return s.then(function(o){const l=i.byteOffset||0,c=i.byteLength||0,u=i.count,h=i.byteStride,d=new Uint8Array(o,l,c);return a.decodeGltfBufferAsync?a.decodeGltfBufferAsync(u,h,d,i.mode,i.filter).then(function(p){return p.buffer}):a.ready.then(function(){const p=new ArrayBuffer(u*h);return a.decodeGltfBuffer(new Uint8Array(p),u,h,d,i.mode,i.filter),p})})}else return null}}class bM{constructor(e){this.name=xt.EXT_MESH_GPU_INSTANCING,this.parser=e}createNodeMesh(e){const t=this.parser.json,n=t.nodes[e];if(!n.extensions||!n.extensions[this.name]||n.mesh===void 0)return null;const i=t.meshes[n.mesh];for(const c of i.primitives)if(c.mode!==ii.TRIANGLES&&c.mode!==ii.TRIANGLE_STRIP&&c.mode!==ii.TRIANGLE_FAN&&c.mode!==void 0)return null;const a=n.extensions[this.name].attributes,o=[],l={};for(const c in a)o.push(this.parser.getDependency("accessor",a[c]).then(u=>(l[c]=u,l[c])));return o.length<1?null:(o.push(this.parser.createNodeMesh(e)),Promise.all(o).then(c=>{const u=c.pop(),h=u.isGroup?u.children:[u],d=c[0].count,p=[];for(const g of h){const _=new je,f=new P,m=new xr,y=new P(1,1,1),v=new hd(g.geometry,g.material,d);for(let A=0;A<d;A++)l.TRANSLATION&&f.fromBufferAttribute(l.TRANSLATION,A),l.ROTATION&&m.fromBufferAttribute(l.ROTATION,A),l.SCALE&&y.fromBufferAttribute(l.SCALE,A),v.setMatrixAt(A,_.compose(f,m,y));for(const A in l)if(A==="_COLOR_0"){const b=l[A];v.instanceColor=new Nl(b.array,b.itemSize,b.normalized)}else A!=="TRANSLATION"&&A!=="ROTATION"&&A!=="SCALE"&&g.geometry.setAttribute(A,l[A]);en.prototype.copy.call(v,g),this.parser.assignFinalMaterial(v),p.push(v)}return u.isGroup?(u.clear(),u.add(...p),u):p[0]}))}}const yd="glTF",ta=12,Mh={JSON:1313821514,BIN:5130562};class TM{constructor(e){this.name=xt.KHR_BINARY_GLTF,this.content=null,this.body=null;const t=new DataView(e,0,ta),n=new TextDecoder;if(this.header={magic:n.decode(new Uint8Array(e.slice(0,4))),version:t.getUint32(4,!0),length:t.getUint32(8,!0)},this.header.magic!==yd)throw new Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");if(this.header.version<2)throw new Error("THREE.GLTFLoader: Legacy binary file detected.");const i=this.header.length-ta,s=new DataView(e,ta);let a=0;for(;a<i;){const o=s.getUint32(a,!0);a+=4;const l=s.getUint32(a,!0);if(a+=4,l===Mh.JSON){const c=new Uint8Array(e,ta+a,o);this.content=n.decode(c)}else if(l===Mh.BIN){const c=ta+a;this.body=e.slice(c,c+o)}a+=o}if(this.content===null)throw new Error("THREE.GLTFLoader: JSON content not found.")}}class AM{constructor(e,t){if(!t)throw new Error("THREE.GLTFLoader: No DRACOLoader instance provided.");this.name=xt.KHR_DRACO_MESH_COMPRESSION,this.json=e,this.dracoLoader=t,this.dracoLoader.preload()}decodePrimitive(e,t){const n=this.json,i=this.dracoLoader,s=e.extensions[this.name].bufferView,a=e.extensions[this.name].attributes,o={},l={},c={};for(const u in a){const h=Ol[u]||u.toLowerCase();o[h]=a[u]}for(const u in e.attributes){const h=Ol[u]||u.toLowerCase();if(a[u]!==void 0){const d=n.accessors[e.attributes[u]],p=Es[d.componentType];c[h]=p.name,l[h]=d.normalized===!0}}return t.getDependency("bufferView",s).then(function(u){return new Promise(function(h,d){i.decodeDracoFile(u,function(p){for(const g in p.attributes){const _=p.attributes[g],f=l[g];f!==void 0&&(_.normalized=f)}h(p)},o,c,Sn,d)})})}}class wM{constructor(){this.name=xt.KHR_TEXTURE_TRANSFORM}extendTexture(e,t){return(t.texCoord===void 0||t.texCoord===e.channel)&&t.offset===void 0&&t.rotation===void 0&&t.scale===void 0||(e=e.clone(),t.texCoord!==void 0&&(e.channel=t.texCoord),t.offset!==void 0&&e.offset.fromArray(t.offset),t.rotation!==void 0&&(e.rotation=t.rotation),t.scale!==void 0&&e.repeat.fromArray(t.scale),e.needsUpdate=!0),e}}class RM{constructor(){this.name=xt.KHR_MESH_QUANTIZATION}}class Sd extends pa{constructor(e,t,n,i){super(e,t,n,i)}copySampleValue_(e){const t=this.resultBuffer,n=this.sampleValues,i=this.valueSize,s=e*i*3+i;for(let a=0;a!==i;a++)t[a]=n[s+a];return t}interpolate_(e,t,n,i){const s=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=o*2,c=o*3,u=i-t,h=(n-t)/u,d=h*h,p=d*h,g=e*c,_=g-c,f=-2*p+3*d,m=p-d,y=1-f,v=m-d+h;for(let A=0;A!==o;A++){const b=a[_+A+o],w=a[_+A+l]*u,S=a[g+A+o],I=a[g+A]*u;s[A]=y*b+v*w+f*S+m*I}return s}}const CM=new xr;class LM extends Sd{interpolate_(e,t,n,i){const s=super.interpolate_(e,t,n,i);return CM.fromArray(s).normalize().toArray(s),s}}const ii={POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,TRIANGLE_STRIP:5,TRIANGLE_FAN:6},Es={5120:Int8Array,5121:Uint8Array,5122:Int16Array,5123:Uint16Array,5125:Uint32Array,5126:Float32Array},yh={9728:vn,9729:wn,9984:wl,9985:$a,9986:gs,9987:ji},Sh={33071:si,33648:Qa,10497:As},ml={SCALAR:1,VEC2:2,VEC3:3,VEC4:4,MAT2:4,MAT3:9,MAT4:16},Ol={POSITION:"position",NORMAL:"normal",TANGENT:"tangent",TEXCOORD_0:"uv",TEXCOORD_1:"uv1",TEXCOORD_2:"uv2",TEXCOORD_3:"uv3",COLOR_0:"color",WEIGHTS_0:"skinWeight",JOINTS_0:"skinIndex"},lr={scale:"scale",translation:"position",rotation:"quaternion",weights:"morphTargetInfluences"},PM={CUBICSPLINE:void 0,LINEAR:Rs,STEP:ha},gl={OPAQUE:"OPAQUE",MASK:"MASK",BLEND:"BLEND"};function IM(r){return r.DefaultMaterial===void 0&&(r.DefaultMaterial=new fr({color:16777215,emissive:0,metalness:1,roughness:1,transparent:!1,depthTest:!0,side:$i})),r.DefaultMaterial}function Ir(r,e,t){for(const n in t.extensions)r[n]===void 0&&(e.userData.gltfExtensions=e.userData.gltfExtensions||{},e.userData.gltfExtensions[n]=t.extensions[n])}function hr(r,e){e.extras!==void 0&&(typeof e.extras=="object"?Object.assign(r.userData,e.extras):console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, "+e.extras))}function DM(r,e,t){let n=!1,i=!1,s=!1;for(let c=0,u=e.length;c<u;c++){const h=e[c];if(h.POSITION!==void 0&&(n=!0),h.NORMAL!==void 0&&(i=!0),h.COLOR_0!==void 0&&(s=!0),n&&i&&s)break}if(!n&&!i&&!s)return Promise.resolve(r);const a=[],o=[],l=[];for(let c=0,u=e.length;c<u;c++){const h=e[c];if(n){const d=h.POSITION!==void 0?t.getDependency("accessor",h.POSITION):r.attributes.position;a.push(d)}if(i){const d=h.NORMAL!==void 0?t.getDependency("accessor",h.NORMAL):r.attributes.normal;o.push(d)}if(s){const d=h.COLOR_0!==void 0?t.getDependency("accessor",h.COLOR_0):r.attributes.color;l.push(d)}}return Promise.all([Promise.all(a),Promise.all(o),Promise.all(l)]).then(function(c){const u=c[0],h=c[1],d=c[2];return n&&(r.morphAttributes.position=u),i&&(r.morphAttributes.normal=h),s&&(r.morphAttributes.color=d),r.morphTargetsRelative=!0,r})}function NM(r,e){if(r.updateMorphTargets(),e.weights!==void 0)for(let t=0,n=e.weights.length;t<n;t++)r.morphTargetInfluences[t]=e.weights[t];if(e.extras&&Array.isArray(e.extras.targetNames)){const t=e.extras.targetNames;if(r.morphTargetInfluences.length===t.length){r.morphTargetDictionary={};for(let n=0,i=t.length;n<i;n++)r.morphTargetDictionary[t[n]]=n}else console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.")}}function UM(r){let e;const t=r.extensions&&r.extensions[xt.KHR_DRACO_MESH_COMPRESSION];if(t?e="draco:"+t.bufferView+":"+t.indices+":"+_l(t.attributes):e=r.indices+":"+_l(r.attributes)+":"+r.mode,r.targets!==void 0)for(let n=0,i=r.targets.length;n<i;n++)e+=":"+_l(r.targets[n]);return e}function _l(r){let e="";const t=Object.keys(r).sort();for(let n=0,i=t.length;n<i;n++)e+=t[n]+":"+r[t[n]]+";";return e}function Bl(r){switch(r){case Int8Array:return 1/127;case Uint8Array:return 1/255;case Int16Array:return 1/32767;case Uint16Array:return 1/65535;default:throw new Error("THREE.GLTFLoader: Unsupported normalized accessor component type.")}}function FM(r){return r.search(/\.jpe?g($|\?)/i)>0||r.search(/^data\:image\/jpeg/)===0?"image/jpeg":r.search(/\.webp($|\?)/i)>0||r.search(/^data\:image\/webp/)===0?"image/webp":"image/png"}const OM=new je;class BM{constructor(e={},t={}){this.json=e,this.extensions={},this.plugins={},this.options=t,this.cache=new oM,this.associations=new Map,this.primitiveCache={},this.nodeCache={},this.meshCache={refs:{},uses:{}},this.cameraCache={refs:{},uses:{}},this.lightCache={refs:{},uses:{}},this.sourceCache={},this.textureCache={},this.nodeNamesUsed={};let n=!1,i=!1,s=-1;typeof navigator<"u"&&(n=/^((?!chrome|android).)*safari/i.test(navigator.userAgent)===!0,i=navigator.userAgent.indexOf("Firefox")>-1,s=i?navigator.userAgent.match(/Firefox\/([0-9]+)\./)[1]:-1),typeof createImageBitmap>"u"||n||i&&s<98?this.textureLoader=new Wx(this.options.manager):this.textureLoader=new $x(this.options.manager),this.textureLoader.setCrossOrigin(this.options.crossOrigin),this.textureLoader.setRequestHeader(this.options.requestHeader),this.fileLoader=new Md(this.options.manager),this.fileLoader.setResponseType("arraybuffer"),this.options.crossOrigin==="use-credentials"&&this.fileLoader.setWithCredentials(!0)}setExtensions(e){this.extensions=e}setPlugins(e){this.plugins=e}parse(e,t){const n=this,i=this.json,s=this.extensions;this.cache.removeAll(),this.nodeCache={},this._invokeAll(function(a){return a._markDefs&&a._markDefs()}),Promise.all(this._invokeAll(function(a){return a.beforeRoot&&a.beforeRoot()})).then(function(){return Promise.all([n.getDependencies("scene"),n.getDependencies("animation"),n.getDependencies("camera")])}).then(function(a){const o={scene:a[0][i.scene||0],scenes:a[0],animations:a[1],cameras:a[2],asset:i.asset,parser:n,userData:{}};return Ir(s,o,i),hr(o,i),Promise.all(n._invokeAll(function(l){return l.afterRoot&&l.afterRoot(o)})).then(function(){e(o)})}).catch(t)}_markDefs(){const e=this.json.nodes||[],t=this.json.skins||[],n=this.json.meshes||[];for(let i=0,s=t.length;i<s;i++){const a=t[i].joints;for(let o=0,l=a.length;o<l;o++)e[a[o]].isBone=!0}for(let i=0,s=e.length;i<s;i++){const a=e[i];a.mesh!==void 0&&(this._addNodeRef(this.meshCache,a.mesh),a.skin!==void 0&&(n[a.mesh].isSkinnedMesh=!0)),a.camera!==void 0&&this._addNodeRef(this.cameraCache,a.camera)}}_addNodeRef(e,t){t!==void 0&&(e.refs[t]===void 0&&(e.refs[t]=e.uses[t]=0),e.refs[t]++)}_getNodeRef(e,t,n){if(e.refs[t]<=1)return n;const i=n.clone(),s=(a,o)=>{const l=this.associations.get(a);l!=null&&this.associations.set(o,l);for(const[c,u]of a.children.entries())s(u,o.children[c])};return s(n,i),i.name+="_instance_"+e.uses[t]++,i}_invokeOne(e){const t=Object.values(this.plugins);t.push(this);for(let n=0;n<t.length;n++){const i=e(t[n]);if(i)return i}return null}_invokeAll(e){const t=Object.values(this.plugins);t.unshift(this);const n=[];for(let i=0;i<t.length;i++){const s=e(t[i]);s&&n.push(s)}return n}getDependency(e,t){const n=e+":"+t;let i=this.cache.get(n);if(!i){switch(e){case"scene":i=this.loadScene(t);break;case"node":i=this._invokeOne(function(s){return s.loadNode&&s.loadNode(t)});break;case"mesh":i=this._invokeOne(function(s){return s.loadMesh&&s.loadMesh(t)});break;case"accessor":i=this.loadAccessor(t);break;case"bufferView":i=this._invokeOne(function(s){return s.loadBufferView&&s.loadBufferView(t)});break;case"buffer":i=this.loadBuffer(t);break;case"material":i=this._invokeOne(function(s){return s.loadMaterial&&s.loadMaterial(t)});break;case"texture":i=this._invokeOne(function(s){return s.loadTexture&&s.loadTexture(t)});break;case"skin":i=this.loadSkin(t);break;case"animation":i=this._invokeOne(function(s){return s.loadAnimation&&s.loadAnimation(t)});break;case"camera":i=this.loadCamera(t);break;default:if(i=this._invokeOne(function(s){return s!=this&&s.getDependency&&s.getDependency(e,t)}),!i)throw new Error("Unknown type: "+e);break}this.cache.add(n,i)}return i}getDependencies(e){let t=this.cache.get(e);if(!t){const n=this,i=this.json[e+(e==="mesh"?"es":"s")]||[];t=Promise.all(i.map(function(s,a){return n.getDependency(e,a)})),this.cache.add(e,t)}return t}loadBuffer(e){const t=this.json.buffers[e],n=this.fileLoader;if(t.type&&t.type!=="arraybuffer")throw new Error("THREE.GLTFLoader: "+t.type+" buffer type is not supported.");if(t.uri===void 0&&e===0)return Promise.resolve(this.extensions[xt.KHR_BINARY_GLTF].body);const i=this.options;return new Promise(function(s,a){n.load(ca.resolveURL(t.uri,i.path),s,void 0,function(){a(new Error('THREE.GLTFLoader: Failed to load buffer "'+t.uri+'".'))})})}loadBufferView(e){const t=this.json.bufferViews[e];return this.getDependency("buffer",t.buffer).then(function(n){const i=t.byteLength||0,s=t.byteOffset||0;return n.slice(s,s+i)})}loadAccessor(e){const t=this,n=this.json,i=this.json.accessors[e];if(i.bufferView===void 0&&i.sparse===void 0){const a=ml[i.type],o=Es[i.componentType],l=i.normalized===!0,c=new o(i.count*a);return Promise.resolve(new hn(c,a,l))}const s=[];return i.bufferView!==void 0?s.push(this.getDependency("bufferView",i.bufferView)):s.push(null),i.sparse!==void 0&&(s.push(this.getDependency("bufferView",i.sparse.indices.bufferView)),s.push(this.getDependency("bufferView",i.sparse.values.bufferView))),Promise.all(s).then(function(a){const o=a[0],l=ml[i.type],c=Es[i.componentType],u=c.BYTES_PER_ELEMENT,h=u*l,d=i.byteOffset||0,p=i.bufferView!==void 0?n.bufferViews[i.bufferView].byteStride:void 0,g=i.normalized===!0;let _,f;if(p&&p!==h){const m=Math.floor(d/p),y="InterleavedBuffer:"+i.bufferView+":"+i.componentType+":"+m+":"+i.count;let v=t.cache.get(y);v||(_=new c(o,m*p,i.count*p/u),v=new ux(_,p/u),t.cache.add(y,v)),f=new Zl(v,l,d%p/u,g)}else o===null?_=new c(i.count*l):_=new c(o,d,i.count*l),f=new hn(_,l,g);if(i.sparse!==void 0){const m=ml.SCALAR,y=Es[i.sparse.indices.componentType],v=i.sparse.indices.byteOffset||0,A=i.sparse.values.byteOffset||0,b=new y(a[1],v,i.sparse.count*m),w=new c(a[2],A,i.sparse.count*l);o!==null&&(f=new hn(f.array.slice(),f.itemSize,f.normalized));for(let S=0,I=b.length;S<I;S++){const D=b[S];if(f.setX(D,w[S*l]),l>=2&&f.setY(D,w[S*l+1]),l>=3&&f.setZ(D,w[S*l+2]),l>=4&&f.setW(D,w[S*l+3]),l>=5)throw new Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.")}}return f})}loadTexture(e){const t=this.json,n=this.options,s=t.textures[e].source,a=t.images[s];let o=this.textureLoader;if(a.uri){const l=n.manager.getHandler(a.uri);l!==null&&(o=l)}return this.loadTextureImage(e,s,o)}loadTextureImage(e,t,n){const i=this,s=this.json,a=s.textures[e],o=s.images[t],l=(o.uri||o.bufferView)+":"+a.sampler;if(this.textureCache[l])return this.textureCache[l];const c=this.loadImageSource(t,n).then(function(u){u.flipY=!1,u.name=a.name||o.name||"",u.name===""&&typeof o.uri=="string"&&o.uri.startsWith("data:image/")===!1&&(u.name=o.uri);const d=(s.samplers||{})[a.sampler]||{};return u.magFilter=yh[d.magFilter]||wn,u.minFilter=yh[d.minFilter]||ji,u.wrapS=Sh[d.wrapS]||As,u.wrapT=Sh[d.wrapT]||As,i.associations.set(u,{textures:e}),u}).catch(function(){return null});return this.textureCache[l]=c,c}loadImageSource(e,t){const n=this,i=this.json,s=this.options;if(this.sourceCache[e]!==void 0)return this.sourceCache[e].then(h=>h.clone());const a=i.images[e],o=self.URL||self.webkitURL;let l=a.uri||"",c=!1;if(a.bufferView!==void 0)l=n.getDependency("bufferView",a.bufferView).then(function(h){c=!0;const d=new Blob([h],{type:a.mimeType});return l=o.createObjectURL(d),l});else if(a.uri===void 0)throw new Error("THREE.GLTFLoader: Image "+e+" is missing URI and bufferView");const u=Promise.resolve(l).then(function(h){return new Promise(function(d,p){let g=d;t.isImageBitmapLoader===!0&&(g=function(_){const f=new xn(_);f.needsUpdate=!0,d(f)}),t.load(ca.resolveURL(h,s.path),g,void 0,p)})}).then(function(h){return c===!0&&o.revokeObjectURL(l),h.userData.mimeType=a.mimeType||FM(a.uri),h}).catch(function(h){throw console.error("THREE.GLTFLoader: Couldn't load texture",l),h});return this.sourceCache[e]=u,u}assignTexture(e,t,n,i){const s=this;return this.getDependency("texture",n.index).then(function(a){if(!a)return null;if(n.texCoord!==void 0&&n.texCoord>0&&(a=a.clone(),a.channel=n.texCoord),s.extensions[xt.KHR_TEXTURE_TRANSFORM]){const o=n.extensions!==void 0?n.extensions[xt.KHR_TEXTURE_TRANSFORM]:void 0;if(o){const l=s.associations.get(a);a=s.extensions[xt.KHR_TEXTURE_TRANSFORM].extendTexture(a,o),s.associations.set(a,l)}}return i!==void 0&&(a.colorSpace=i),e[t]=a,a})}assignFinalMaterial(e){const t=e.geometry;let n=e.material;const i=t.attributes.tangent===void 0,s=t.attributes.color!==void 0,a=t.attributes.normal===void 0;if(e.isPoints){const o="PointsMaterial:"+n.uuid;let l=this.cache.get(o);l||(l=new ec,bi.prototype.copy.call(l,n),l.color.copy(n.color),l.map=n.map,l.sizeAttenuation=!1,this.cache.add(o,l)),n=l}else if(e.isLine){const o="LineBasicMaterial:"+n.uuid;let l=this.cache.get(o);l||(l=new dd,bi.prototype.copy.call(l,n),l.color.copy(n.color),l.map=n.map,this.cache.add(o,l)),n=l}if(i||s||a){let o="ClonedMaterial:"+n.uuid+":";i&&(o+="derivative-tangents:"),s&&(o+="vertex-colors:"),a&&(o+="flat-shading:");let l=this.cache.get(o);l||(l=n.clone(),s&&(l.vertexColors=!0),a&&(l.flatShading=!0),i&&(l.normalScale&&(l.normalScale.y*=-1),l.clearcoatNormalScale&&(l.clearcoatNormalScale.y*=-1)),this.cache.add(o,l),this.associations.set(l,this.associations.get(n))),n=l}e.material=n}getMaterialType(){return fr}loadMaterial(e){const t=this,n=this.json,i=this.extensions,s=n.materials[e];let a;const o={},l=s.extensions||{},c=[];if(l[xt.KHR_MATERIALS_UNLIT]){const h=i[xt.KHR_MATERIALS_UNLIT];a=h.getMaterialType(),c.push(h.extendParams(o,s,t))}else{const h=s.pbrMetallicRoughness||{};if(o.color=new Qe(1,1,1),o.opacity=1,Array.isArray(h.baseColorFactor)){const d=h.baseColorFactor;o.color.setRGB(d[0],d[1],d[2],Sn),o.opacity=d[3]}h.baseColorTexture!==void 0&&c.push(t.assignTexture(o,"map",h.baseColorTexture,Dn)),o.metalness=h.metallicFactor!==void 0?h.metallicFactor:1,o.roughness=h.roughnessFactor!==void 0?h.roughnessFactor:1,h.metallicRoughnessTexture!==void 0&&(c.push(t.assignTexture(o,"metalnessMap",h.metallicRoughnessTexture)),c.push(t.assignTexture(o,"roughnessMap",h.metallicRoughnessTexture))),a=this._invokeOne(function(d){return d.getMaterialType&&d.getMaterialType(e)}),c.push(Promise.all(this._invokeAll(function(d){return d.extendMaterialParams&&d.extendMaterialParams(e,o)})))}s.doubleSided===!0&&(o.side=yi);const u=s.alphaMode||gl.OPAQUE;if(u===gl.BLEND?(o.transparent=!0,o.depthWrite=!1):(o.transparent=!1,u===gl.MASK&&(o.alphaTest=s.alphaCutoff!==void 0?s.alphaCutoff:.5)),s.normalTexture!==void 0&&a!==Br&&(c.push(t.assignTexture(o,"normalMap",s.normalTexture)),o.normalScale=new Se(1,1),s.normalTexture.scale!==void 0)){const h=s.normalTexture.scale;o.normalScale.set(h,h)}if(s.occlusionTexture!==void 0&&a!==Br&&(c.push(t.assignTexture(o,"aoMap",s.occlusionTexture)),s.occlusionTexture.strength!==void 0&&(o.aoMapIntensity=s.occlusionTexture.strength)),s.emissiveFactor!==void 0&&a!==Br){const h=s.emissiveFactor;o.emissive=new Qe().setRGB(h[0],h[1],h[2],Sn)}return s.emissiveTexture!==void 0&&a!==Br&&c.push(t.assignTexture(o,"emissiveMap",s.emissiveTexture,Dn)),Promise.all(c).then(function(){const h=new a(o);return s.name&&(h.name=s.name),hr(h,s),t.associations.set(h,{materials:e}),s.extensions&&Ir(i,h,s),h})}createUniqueName(e){const t=It.sanitizeNodeName(e||"");return t in this.nodeNamesUsed?t+"_"+ ++this.nodeNamesUsed[t]:(this.nodeNamesUsed[t]=0,t)}loadGeometries(e){const t=this,n=this.extensions,i=this.primitiveCache;function s(o){return n[xt.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(o,t).then(function(l){return Eh(l,o,t)})}const a=[];for(let o=0,l=e.length;o<l;o++){const c=e[o],u=UM(c),h=i[u];if(h)a.push(h.promise);else{let d;c.extensions&&c.extensions[xt.KHR_DRACO_MESH_COMPRESSION]?d=s(c):d=Eh(new Fn,c,t),i[u]={primitive:c,promise:d},a.push(d)}}return Promise.all(a)}loadMesh(e){const t=this,n=this.json,i=this.extensions,s=n.meshes[e],a=s.primitives,o=[];for(let l=0,c=a.length;l<c;l++){const u=a[l].material===void 0?IM(this.cache):this.getDependency("material",a[l].material);o.push(u)}return o.push(t.loadGeometries(a)),Promise.all(o).then(function(l){const c=l.slice(0,l.length-1),u=l[l.length-1],h=[];for(let p=0,g=u.length;p<g;p++){const _=u[p],f=a[p];let m;const y=c[p];if(f.mode===ii.TRIANGLES||f.mode===ii.TRIANGLE_STRIP||f.mode===ii.TRIANGLE_FAN||f.mode===void 0)m=s.isSkinnedMesh===!0?new dx(_,y):new Qt(_,y),m.isSkinnedMesh===!0&&m.normalizeSkinWeights(),f.mode===ii.TRIANGLE_STRIP?m.geometry=xh(m.geometry,Gh):f.mode===ii.TRIANGLE_FAN&&(m.geometry=xh(m.geometry,Rl));else if(f.mode===ii.LINES)m=new mx(_,y);else if(f.mode===ii.LINE_STRIP)m=new Ql(_,y);else if(f.mode===ii.LINE_LOOP)m=new gx(_,y);else if(f.mode===ii.POINTS)m=new fd(_,y);else throw new Error("THREE.GLTFLoader: Primitive mode unsupported: "+f.mode);Object.keys(m.geometry.morphAttributes).length>0&&NM(m,s),m.name=t.createUniqueName(s.name||"mesh_"+e),hr(m,s),f.extensions&&Ir(i,m,f),t.assignFinalMaterial(m),h.push(m)}for(let p=0,g=h.length;p<g;p++)t.associations.set(h[p],{meshes:e,primitives:p});if(h.length===1)return s.extensions&&Ir(i,h[0],s),h[0];const d=new mi;s.extensions&&Ir(i,d,s),t.associations.set(d,{meshes:e});for(let p=0,g=h.length;p<g;p++)d.add(h[p]);return d})}loadCamera(e){let t;const n=this.json.cameras[e],i=n[n.type];if(!i){console.warn("THREE.GLTFLoader: Missing camera parameters.");return}return n.type==="perspective"?t=new Nn(Wh.radToDeg(i.yfov),i.aspectRatio||1,i.znear||1,i.zfar||2e6):n.type==="orthographic"&&(t=new Kl(-i.xmag,i.xmag,i.ymag,-i.ymag,i.znear,i.zfar)),n.name&&(t.name=this.createUniqueName(n.name)),hr(t,n),Promise.resolve(t)}loadSkin(e){const t=this.json.skins[e],n=[];for(let i=0,s=t.joints.length;i<s;i++)n.push(this._loadNodeShallow(t.joints[i]));return t.inverseBindMatrices!==void 0?n.push(this.getDependency("accessor",t.inverseBindMatrices)):n.push(null),Promise.all(n).then(function(i){const s=i.pop(),a=i,o=[],l=[];for(let c=0,u=a.length;c<u;c++){const h=a[c];if(h){o.push(h);const d=new je;s!==null&&d.fromArray(s.array,c*16),l.push(d)}else console.warn('THREE.GLTFLoader: Joint "%s" could not be found.',t.joints[c])}return new Jl(o,l)})}loadAnimation(e){const t=this.json,n=this,i=t.animations[e],s=i.name?i.name:"animation_"+e,a=[],o=[],l=[],c=[],u=[];for(let h=0,d=i.channels.length;h<d;h++){const p=i.channels[h],g=i.samplers[p.sampler],_=p.target,f=_.node,m=i.parameters!==void 0?i.parameters[g.input]:g.input,y=i.parameters!==void 0?i.parameters[g.output]:g.output;_.node!==void 0&&(a.push(this.getDependency("node",f)),o.push(this.getDependency("accessor",m)),l.push(this.getDependency("accessor",y)),c.push(g),u.push(_))}return Promise.all([Promise.all(a),Promise.all(o),Promise.all(l),Promise.all(c),Promise.all(u)]).then(function(h){const d=h[0],p=h[1],g=h[2],_=h[3],f=h[4],m=[];for(let y=0,v=d.length;y<v;y++){const A=d[y],b=p[y],w=g[y],S=_[y],I=f[y];if(A===void 0)continue;A.updateMatrix&&A.updateMatrix();const D=n._createAnimationTracks(A,b,w,S,I);if(D)for(let x=0;x<D.length;x++)m.push(D[x])}return new Ox(s,void 0,m)})}createNodeMesh(e){const t=this.json,n=this,i=t.nodes[e];return i.mesh===void 0?null:n.getDependency("mesh",i.mesh).then(function(s){const a=n._getNodeRef(n.meshCache,i.mesh,s);return i.weights!==void 0&&a.traverse(function(o){if(o.isMesh)for(let l=0,c=i.weights.length;l<c;l++)o.morphTargetInfluences[l]=i.weights[l]}),a})}loadNode(e){const t=this.json,n=this,i=t.nodes[e],s=n._loadNodeShallow(e),a=[],o=i.children||[];for(let c=0,u=o.length;c<u;c++)a.push(n.getDependency("node",o[c]));const l=i.skin===void 0?Promise.resolve(null):n.getDependency("skin",i.skin);return Promise.all([s,Promise.all(a),l]).then(function(c){const u=c[0],h=c[1],d=c[2];d!==null&&u.traverse(function(p){p.isSkinnedMesh&&p.bind(d,OM)});for(let p=0,g=h.length;p<g;p++)u.add(h[p]);return u})}_loadNodeShallow(e){const t=this.json,n=this.extensions,i=this;if(this.nodeCache[e]!==void 0)return this.nodeCache[e];const s=t.nodes[e],a=s.name?i.createUniqueName(s.name):"",o=[],l=i._invokeOne(function(c){return c.createNodeMesh&&c.createNodeMesh(e)});return l&&o.push(l),s.camera!==void 0&&o.push(i.getDependency("camera",s.camera).then(function(c){return i._getNodeRef(i.cameraCache,s.camera,c)})),i._invokeAll(function(c){return c.createNodeAttachment&&c.createNodeAttachment(e)}).forEach(function(c){o.push(c)}),this.nodeCache[e]=Promise.all(o).then(function(c){let u;if(s.isBone===!0?u=new cd:c.length>1?u=new mi:c.length===1?u=c[0]:u=new en,u!==c[0])for(let h=0,d=c.length;h<d;h++)u.add(c[h]);if(s.name&&(u.userData.name=s.name,u.name=a),hr(u,s),s.extensions&&Ir(n,u,s),s.matrix!==void 0){const h=new je;h.fromArray(s.matrix),u.applyMatrix4(h)}else s.translation!==void 0&&u.position.fromArray(s.translation),s.rotation!==void 0&&u.quaternion.fromArray(s.rotation),s.scale!==void 0&&u.scale.fromArray(s.scale);return i.associations.has(u)||i.associations.set(u,{}),i.associations.get(u).nodes=e,u}),this.nodeCache[e]}loadScene(e){const t=this.extensions,n=this.json.scenes[e],i=this,s=new mi;n.name&&(s.name=i.createUniqueName(n.name)),hr(s,n),n.extensions&&Ir(t,s,n);const a=n.nodes||[],o=[];for(let l=0,c=a.length;l<c;l++)o.push(i.getDependency("node",a[l]));return Promise.all(o).then(function(l){for(let u=0,h=l.length;u<h;u++)s.add(l[u]);const c=u=>{const h=new Map;for(const[d,p]of i.associations)(d instanceof bi||d instanceof xn)&&h.set(d,p);return u.traverse(d=>{const p=i.associations.get(d);p!=null&&h.set(d,p)}),h};return i.associations=c(s),s})}_createAnimationTracks(e,t,n,i,s){const a=[],o=e.name?e.name:e.uuid,l=[];lr[s.path]===lr.weights?e.traverse(function(d){d.morphTargetInfluences&&l.push(d.name?d.name:d.uuid)}):l.push(o);let c;switch(lr[s.path]){case lr.weights:c=Ps;break;case lr.rotation:c=Hr;break;case lr.position:case lr.scale:c=Is;break;default:n.itemSize===1?c=Ps:c=Is;break}const u=i.interpolation!==void 0?PM[i.interpolation]:Rs,h=this._getArrayFromAccessor(n);for(let d=0,p=l.length;d<p;d++){const g=new c(l[d]+"."+lr[s.path],t.array,h,u);i.interpolation==="CUBICSPLINE"&&this._createCubicSplineTrackInterpolant(g),a.push(g)}return a}_getArrayFromAccessor(e){let t=e.array;if(e.normalized){const n=Bl(t.constructor),i=new Float32Array(t.length);for(let s=0,a=t.length;s<a;s++)i[s]=t[s]*n;t=i}return t}_createCubicSplineTrackInterpolant(e){e.createInterpolant=function(n){const i=this instanceof Hr?LM:Sd;return new i(this.times,this.values,this.getValueSize()/3,n)},e.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline=!0}}function kM(r,e,t){const n=e.attributes,i=new Ai;if(n.POSITION!==void 0){const o=t.json.accessors[n.POSITION],l=o.min,c=o.max;if(l!==void 0&&c!==void 0){if(i.set(new P(l[0],l[1],l[2]),new P(c[0],c[1],c[2])),o.normalized){const u=Bl(Es[o.componentType]);i.min.multiplyScalar(u),i.max.multiplyScalar(u)}}else{console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");return}}else return;const s=e.targets;if(s!==void 0){const o=new P,l=new P;for(let c=0,u=s.length;c<u;c++){const h=s[c];if(h.POSITION!==void 0){const d=t.json.accessors[h.POSITION],p=d.min,g=d.max;if(p!==void 0&&g!==void 0){if(l.setX(Math.max(Math.abs(p[0]),Math.abs(g[0]))),l.setY(Math.max(Math.abs(p[1]),Math.abs(g[1]))),l.setZ(Math.max(Math.abs(p[2]),Math.abs(g[2]))),d.normalized){const _=Bl(Es[d.componentType]);l.multiplyScalar(_)}o.max(l)}else console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.")}}i.expandByVector(o)}r.boundingBox=i;const a=new wi;i.getCenter(a.center),a.radius=i.min.distanceTo(i.max)/2,r.boundingSphere=a}function Eh(r,e,t){const n=e.attributes,i=[];function s(a,o){return t.getDependency("accessor",a).then(function(l){r.setAttribute(o,l)})}for(const a in n){const o=Ol[a]||a.toLowerCase();o in r.attributes||i.push(s(n[a],o))}if(e.indices!==void 0&&!r.index){const a=t.getDependency("accessor",e.indices).then(function(o){r.setIndex(o)});i.push(a)}return Lt.workingColorSpace!==Sn&&"COLOR_0"in n&&console.warn(`THREE.GLTFLoader: Converting vertex colors from "srgb-linear" to "${Lt.workingColorSpace}" not supported.`),hr(r,e),kM(r,e,t),Promise.all(i).then(function(){return e.targets!==void 0?DM(r,e.targets,t):r})}const zM=[2.2945,48.8584],GM=15,HM=70,VM=-20,WM="https://tiles.openfreemap.org/styles/liberty",XM={tiles:["https://s3.amazonaws.com/elevation-tiles-prod/terrarium/{z}/{x}/{y}.png"],encoding:"terrarium",tileSize:256,maxzoom:15,exaggeration:1.4},qM={sun:[0,90]},jM={minZoom:4,opacity:.88,heightField:"render_height",baseField:"render_min_height",lowColor:"#cfc7b8",highColor:"#ff5c5c",highRiseMeters:40},YM={sourceLayer:"landcover",landcoverClasses:["wood","grass"],greenColor:"#2f9e44",greenOpacity:.5,trees:{count:220,radius:220,minScale:.7,maxScale:1.6,canopyColor:"#2f7d32",trunkColor:"#6b4423"}},KM={start:[2.2945,48.8584],steerSign:1,character:{primitive:"capsule",radius:3,height:10,color:"#ff5c5c"},follow:{bearingSign:1},street:{providers:["mask"],mask:{sizePx:64,zoom:19,sampleHz:20},friction:{asphalt:1,off:.4}},cameras:[{id:"fps",label:"First-Person · FPS",icon:"👁️",pitch:90,zoom:21,bearingOffset:0,modelBoost:1,targetLift:"eye"},{id:"ots",label:"Third-Person · Over-the-Shoulder",icon:"🎯",pitch:78,zoom:20,bearingOffset:0,modelBoost:1,targetLift:0},{id:"chase",label:"Third-Person · Chase-Cam",icon:"🎮",pitch:66,zoom:19,bearingOffset:0,modelBoost:1,targetLift:0},{id:"iso",label:"Top-Down · 2.5D",icon:"🔺",pitch:50,zoom:18,bearingOffset:0,modelBoost:2,targetLift:0},{id:"birdseye",label:"Top-Down · Bird's-Eye",icon:"🐦",pitch:25,zoom:16.8,bearingOffset:0,modelBoost:6,targetLift:0},{id:"god",label:"Top-Down · God-View",icon:"🛰️",pitch:0,zoom:15,bearingOffset:0,modelBoost:24,targetLift:0},{id:"side",label:"Side-Scrolling",icon:"🍄",pitch:75,zoom:18.4,bearingOffset:90,modelBoost:1,targetLift:0}],defaultCamera:"chase",camera:{refSize:4.5,minZoom:3,maxZoom:20,speedZoom:.6,fovBase:55,fovMax:72,rollMax:4,springTau:.12},cockpit:{defaultVisible:!0,views:["cockpit","chase","orbit"],viewCycle:["fps","chase","god"]},flightControls:{mode:2,sticky_throttle:["airplane"],expo:.3},game:{maxLandSink:3,maxLandBank:.25,maxLandPitch:.3,maxLandSpeed:4,maxLandSpeedFwd:75,needsGear:!0,crashRespawnDelay:2,minAirborneAGL:3},joystick:{scale:.5,look:{yawRate:120,pitchRate:90,mapMaxPitch:85,skyMaxPitch:175,minPitch:-85,mouseSensitivity:.18},deadzone:.06,mouseLook:!0},defaultDriver:"walk",drivers:[{id:"walk",label:"Walk",icon:"🚶",control:"character",speed:{idle:0,min:0,cruise:8,max:14},turnRate:180,accel:8,size:1.8,turnAtMax:1,model:{glb:"man.glb",scale:1,yaw:0,y:0},altitude:{model:"elevation",default:0,min:0,max:0,climbRate:0,eyeHeight:1.7}},{id:"cycle",label:"Cycle",icon:"🚴",control:"vehicle",vehicle:{wheelbase:1.05,maxSteer:.785,steerRate:4,steerReturn:7,steerSpeedFalloff:.4,power:1.2,brakeDecel:4,drag:.0135,rollResist:.2,reverseMaxSpeed:1.5,grip:6},speed:{idle:0,min:0,cruise:20,max:34},turnRate:120,accel:2.5,size:1.8,turnAtMax:.6,model:{glb:"vehicles/bike.glb",scale:1,yaw:0,y:0},altitude:{model:"elevation",default:0,min:0,max:0,climbRate:0,eyeHeight:1.5}},{id:"car",label:"Car",icon:"🚗",control:"vehicle",vehicle:{wheelbase:2.7,maxSteer:.61,steerRate:3.5,steerReturn:6,steerSpeedFalloff:.25,power:4,brakeDecel:8,drag:.0036,rollResist:.3,reverseMaxSpeed:6,grip:8.5},speed:{idle:0,min:0,cruise:50,max:120},turnRate:90,accel:.8,size:4.5,turnAtMax:.35,model:{glb:"city/car.glb",scale:1,yaw:0,y:0},altitude:{model:"elevation",default:0,min:0,max:0,climbRate:0,eyeHeight:1.6}},{id:"sail",label:"Sail",icon:"⛵",control:"character",speed:{idle:0,min:0,cruise:28,max:45},turnRate:30,accel:.25,size:10,turnAtMax:.5,model:{glb:"vehicles/sailboat.glb",scale:1,yaw:0,y:0},altitude:{model:"elevation",default:0,min:0,max:0,climbRate:0,eyeHeight:2.5}},{id:"drone",label:"Drone",icon:"🛸",control:"flight",speed:{idle:0,min:0,cruise:40,max:90},turnRate:150,accel:1.5,size:2.5,turnAtMax:.8,model:{glb:"vehicles/drone.glb",scale:1,yaw:0,y:0},altitude:{model:"elevation",default:120,min:0,max:800,climbRate:6,eyeHeight:1},cockpitEyeHeight:.2,flight:{model:"drone",maxTilt:.6,tiltRate:4,tiltReturn:6,dragK:.02,maxSpeed:25,yawRate:2.2,maxClimbRate:6,climbAccel:8,altHoldDamp:4,batteryDrain:.0015,batteryLimp:.15,maxG:2.5,gpwsPullup:25,gpwsCaution:80,gpwsSinkRate:4}},{id:"helicopter",label:"Helicopter",icon:"🚁",control:"flight",speed:{idle:0,min:0,cruise:70,max:180},turnRate:90,accel:.7,size:14,turnAtMax:.5,model:{glb:"vehicles/helicopter.glb",scale:1,yaw:0,y:0},altitude:{model:"elevation",default:300,min:0,max:3e3,climbRate:8,eyeHeight:2},cockpitEyeHeight:1.8,flight:{model:"helicopter",hoverCollective:.5,collectivePower:14,vDamp:1.2,maxVspeed:12,translationalGain:.35,translationalSpeed:12,groundEffectGain:.25,rotorDiameter:14,maxPitch:.35,pitchRate:.9,maxBank:.6,rollRate:1.2,dragK:.0025,maxSpeed:50,maxRearSpeed:8,pedalYawRate:.9,rotorRpmNominal:400,vne:90,maxG:3,gpwsPullup:60,gpwsCaution:200,gpwsSinkRate:6}},{id:"airplane",label:"Airplane",icon:"✈️",control:"flight",speed:{idle:220,min:180,cruise:450,max:900},turnRate:25,accel:.15,size:38,turnAtMax:.4,model:{glb:"vehicles/airplane.glb",scale:1,yaw:0,y:0},altitude:{model:"elevation",default:1200,min:150,max:12e3,climbRate:15,eyeHeight:3},cockpitEyeHeight:2.2,flight:{model:"airplane",maxThrust:12,stallSpeed:45,vne:280,maxBank:1.05,rollRate:1.6,rollReturn:.8,pitchRate:.7,maxPitch:.52,dragK:42e-5,inducedK:900,stallSink:.35,rudderYawRate:.12,brakeDecel:3,gearDragK:2e-4,flapDragK:4e-4,flapStallReduction:.25,maxG:4.5,gpwsPullup:150,gpwsCaution:450,gpwsSinkRate:8}},{id:"constellation",label:"Constellation",icon:"🌌",control:"character",speed:{idle:0,min:0,cruise:0,max:0},turnRate:10,accel:2,size:4.5,turnAtMax:1,model:{glb:"vehicles/satellite.glb",scale:1,yaw:0,y:0},altitude:{model:"zoom",default:4e5,min:2e5,max:2e7,climbRate:5e4,eyeHeight:0},orbitZoom:{refAltitude:4e5,refZoom:3.2},globe:!0}],assetsBase:"https://cdn.jsdelivr.net/gh/diegonmarcos/front-assets-cdn@main/b-Projects/galaxy/static/assets/models/",keys:{forward:["w","ArrowUp"],back:["s","ArrowDown"],left:["a","ArrowLeft"],right:["d","ArrowRight"],up:["q"," "],down:["e","c"],cameraNext:["+","="],cameraPrev:["-","_"],driverNext:[".",">"],driverPrev:[",","<"]},altitudeFrame:"agl"},An={center:zM,zoom:GM,pitch:HM,bearing:VM,basemap:WM,terrain:XM,sky:qM,buildings:jM,nature:YM,rider:KM},ft={steer:0,throttle:0,dist:.14,pitch:.5,yaw:0,yawRate:0,pitchRate:0,moveX:0,moveY:0,galaxy:0,climb:0,climbKeys:0,climbPointer:0,climbStick:0,active:!1};function vl(){const r=ft.climbKeys+ft.climbPointer+ft.climbStick;return Math.max(-1,Math.min(1,r))}const fa={move:null,look:null,drive:null};function $M(r){const e=Symbol(r);return fa[r]&&console.warn(`freeInput: channel "${r}" claimed while already owned`),fa[r]=e,e}function ZM(r,e){fa[r]===e&&(fa[r]=null)}function JM(r,e){return fa[r]===e}function QM(r,e,t,n){let i=Math.hypot(e.moveX,e.moveY);if(i<(t.deadzone??0)&&(i=0),i>0){let d=(e.camBearing+Math.atan2(e.moveX,e.moveY)-r.heading)%(2*Math.PI);if(d>Math.PI&&(d-=2*Math.PI),d<-Math.PI&&(d+=2*Math.PI),t.turn!=null){const p=t.speedRef&&t.speedRef>0?Math.min(1,Math.abs(r.speed??0)/t.speedRef):0,g=t.turnAtMax==null?1:t.turnAtMax+(1-t.turnAtMax)*(1-p),_=t.turn*g*n;d=Math.max(-_,Math.min(_,d))}r.heading+=d}const s=Math.sin(r.heading),a=-Math.cos(r.heading);let o;if(i<=0)o=t.idle??t.min;else{const h=Math.min(i,1);o=t.cruise==null?t.min+h*(t.max-t.min):h<=.5?t.min+h/.5*(t.cruise-t.min):t.cruise+(h-.5)/.5*(t.max-t.cruise)}if(t.accel!=null){const h=1-Math.exp(-t.accel*n),d=r.speed??0;r.speed=d+(o-d)*h}else r.speed=o;const l=(r.speed??o)*n,c=t.minAlt??0,u=t.maxAlt??1/0;return r.altitude=Math.min(u,Math.max(c,(r.altitude??0)+(t.lift!=null?(e.climb??0)*t.lift:0)*n)),{heading:r.heading,forwardX:s,forwardZ:a,dForward:l,altitude:r.altitude??0}}function ey(r,e,t,n){const i=t.friction??1,s=Math.min(1,Math.abs(r.speed??0)/t.maxSpeed),a=t.maxSteer*(t.steerSpeedFalloff+(1-t.steerSpeedFalloff)*(1-s)),o=Math.max(-1,Math.min(1,e.steerAxis)),l=r.steer??0;let c;if(o!==0){const S=o*a,I=t.steerRate*n;c=S>l?Math.min(l+I,S):Math.max(l-I,S)}else{const S=t.steerReturn*n;c=l>0?Math.max(0,l-S):Math.min(0,l+S)}r.steer=Math.max(-a,Math.min(a,c));const u=r.speed??0,h=Math.max(0,Math.min(1,e.throttle)),d=Math.max(0,Math.min(1,e.brake)),p=h===0&&d>0&&u<=0;let g=h*t.power*i;if(p)g-=d*t.brakeDecel;else{const S=Math.sign(u);g-=d*t.brakeDecel*S,g-=t.drag*u*Math.abs(u),g-=t.rollResist*S}let _=u+g*n;p||(u>0&&_<0&&(_=0),u<0&&_>0&&(_=0)),_=Math.max(-t.reverseMaxSpeed,Math.min(t.maxSpeed,_)),r.speed=_;let f=r.speed*Math.tan(r.steer)/t.wheelbase;const m=t.grip*i,y=Math.abs(f*r.speed);let v=0;if(y>m&&y>0){const S=m/y;v=1-S,f*=S}r.heading+=f*n;const A=Math.sin(r.heading),b=-Math.cos(r.heading),w=r.speed*n;return{heading:r.heading,forwardX:A,forwardZ:b,dForward:w,speed:r.speed,steer:r.steer,yawRate:f,slip:v}}const Ds=9.80665,_t=(r,e,t)=>Math.min(t,Math.max(e,r)),rt=r=>r!=null&&Number.isFinite(r)?r:0,di=(r,e,t)=>{const n=e-r,i=Math.abs(t);return Math.abs(n)<=i?e:r+Math.sign(n)*i},uc=(r,e,t,n,i)=>r<t&&e<-i?"pullup":r<n?"caution":"none";function Ed(r){return Math.exp(-rt(r)/8500)}function ty(r,e,t,n){const i=rt(n.dt),s=rt(n.groundElev),a=_t(rt(e.pitchAxis),-1,1),o=_t(rt(e.rollAxis),-1,1),l=_t(rt(e.yawAxis),-1,1),c=_t(rt(e.throttle),0,1),u=_t(rt(e.flaps),0,1),h=_t(rt(e.brake),0,1),d=!!e.gearDown,p=rt(r.altASL),g=Ed(p),_=Math.max(0,rt(r.speed)),f=_*Math.sqrt(g),m=t.stallSpeed*(1-u*t.flapStallReduction),y=f<m,v=_t((f-.6*m)/Math.max(1e-6,.4*m),.15,1),A=_t(a*t.maxPitch,-t.maxPitch,t.maxPitch);let b=_t(di(rt(r.pitch),A,t.pitchRate*v*i),-t.maxPitch,t.maxPitch),w;if(Math.abs(o)<.05)w=di(rt(r.bank),0,t.rollReturn*i);else{const q=_t(o*t.maxBank,-t.maxBank,t.maxBank);w=di(rt(r.bank),q,t.rollRate*v*i)}w=_t(w,-t.maxBank,t.maxBank);const S=c*t.maxThrust*g,I=t.dragK*_*_+t.inducedK/(_*_+1)+(d?t.gearDragK:0)+u*t.flapDragK;let D=_+(S-I-Ds*Math.sin(b)-h*t.brakeDecel)*i;D=Math.max(0,D),y&&(b-=t.stallSink*i);const x=(D>1?Ds*Math.tan(w)/D:0)+l*t.rudderYawRate*v,E=rt(r.heading)+x*i,U=D*Math.sin(b)-(y?t.stallSink:0),Y=p+U*i,L=_t(1/Math.max(Math.cos(w),.05),0,t.maxG),O=f>t.vne;r.heading=E,r.bank=w,r.pitch=b,r.speed=D,r.vspeed=U,r.altASL=Y;const k=Math.max(0,Y-s);return{speed:D,ias:f,altAGL:k,altASL:Y,vspeed:U,heading:E,bank:w,pitch:b,gForce:L,throttle:c,stall:y,overspeed:O,gpws:uc(k,U,t.gpwsPullup,t.gpwsCaution,t.gpwsSinkRate),gearDown:d,flaps:u,rotorRpm:null,torque:null,battery:null,altHold:null}}function ny(r,e,t,n){const i=rt(n.dt),s=rt(n.groundElev),a=_t(rt(e.pitchAxis),-1,1),o=_t(rt(e.rollAxis),-1,1),l=_t(rt(e.yawAxis),-1,1),c=_t(rt(e.throttle),0,1),u=_t(rt(e.flaps),0,1),h=!!e.gearDown,d=rt(r.altASL),p=Ed(d),g=Math.max(0,d-s),_=rt(r.speed),f=1+t.translationalGain*Math.min(1,Math.abs(_)/Math.max(1e-6,t.translationalSpeed)),m=1+t.groundEffectGain*Math.max(0,1-g/Math.max(1e-6,t.rotorDiameter)),y=(c-t.hoverCollective)*t.collectivePower*p*f*m;let v=rt(r.vspeed)+y*i;v*=Math.max(0,1-t.vDamp*i),v=_t(v,-t.maxVspeed,t.maxVspeed);const A=d+v*i,b=_t(a*t.maxPitch,-t.maxPitch,t.maxPitch),w=_t(di(rt(r.pitch),b,t.pitchRate*i),-t.maxPitch,t.maxPitch);let S=_+(-Ds*Math.tan(w)-t.dragK*_*Math.abs(_))*i;S=_t(S,-t.maxRearSpeed,t.maxSpeed);const I=_t(o*t.maxBank,-t.maxBank,t.maxBank),D=_t(di(rt(r.bank),I,t.rollRate*i),-t.maxBank,t.maxBank),x=l*t.pedalYawRate+(S>1?Ds*Math.tan(D)/S:0),E=rt(r.heading)+x*i,U=t.rotorRpmNominal*(.85+.15*c),Y=_t(c*.7+Math.min(1,Math.abs(y)/Math.max(1e-6,t.collectivePower))*.3,0,1),L=_t(1/Math.max(Math.cos(D),.05),0,t.maxG),O=Math.abs(S),k=O>t.vne;r.pitch=w,r.bank=D,r.heading=E,r.speed=S,r.vspeed=v,r.altASL=A;const q=Math.max(0,A-s);return{speed:O,ias:O,altAGL:q,altASL:A,vspeed:v,heading:E,bank:D,pitch:w,gForce:L,throttle:c,stall:!1,overspeed:k,gpws:uc(q,v,t.gpwsPullup,t.gpwsCaution,t.gpwsSinkRate),gearDown:h,flaps:u,rotorRpm:U,torque:Y,battery:null,altHold:null}}function iy(r,e,t,n){const i=rt(n.dt),s=rt(n.groundElev),a=_t(rt(e.pitchAxis),-1,1),o=_t(rt(e.rollAxis),-1,1),l=_t(rt(e.yawAxis),-1,1),c=_t(rt(e.climbAxis),-1,1),u=_t(rt(e.flaps),0,1),h=!!e.gearDown,d=_t(rt(r.battery??1),0,1),p=d<t.batteryLimp,g=t.maxSpeed*(p?.4:1),_=t.maxClimbRate*(p?.4:1),f=_t(a*t.maxTilt,-t.maxTilt,t.maxTilt),m=Math.abs(a)<.05?di(rt(r.pitch),0,t.tiltReturn*i):_t(di(rt(r.pitch),f,t.tiltRate*i),-t.maxTilt,t.maxTilt),y=_t(o*t.maxTilt,-t.maxTilt,t.maxTilt),v=Math.abs(o)<.05?di(rt(r.bank),0,t.tiltReturn*i):_t(di(rt(r.bank),y,t.tiltRate*i),-t.maxTilt,t.maxTilt),A=rt(r.heading)+l*t.yawRate*i,b=-Ds*Math.tan(m),w=Ds*Math.tan(v),S=Math.sin(A),I=Math.cos(A),D=Math.cos(A),x=-Math.sin(A);let E=rt(r.velX)+(b*S+w*D)*i,U=rt(r.velZ)+(b*I+w*x)*i;E-=t.dragK*Math.abs(E)*E*i,U-=t.dragK*Math.abs(U)*U*i;const Y=Math.hypot(E,U);if(Y>g&&Y>0){const He=g/Y;E*=He,U*=He}const L=Math.hypot(E,U);let O=rt(r.vspeed),k;Math.abs(c)<.05?(O=di(O,0,t.altHoldDamp*i),k=!0):(O=di(O,c*_,t.climbAccel*i),k=!1);const q=rt(r.altASL)+O*i,$=_t(Math.max(Math.abs(a),Math.abs(o),Math.abs(c)),0,1),K=_t(d-t.batteryDrain*(.3+.7*$)*i,0,1),se=Math.max(Math.abs(m),Math.abs(v)),oe=_t(1/Math.max(Math.cos(se),.05),0,t.maxG);r.pitch=m,r.bank=v,r.heading=A,r.velX=E,r.velZ=U,r.speed=L,r.vspeed=O,r.altASL=q,r.battery=K;const _e=Math.max(0,q-s);return{speed:L,ias:L,altAGL:_e,altASL:q,vspeed:O,heading:A,bank:v,pitch:m,gForce:oe,throttle:$,stall:!1,overspeed:!1,gpws:uc(_e,O,t.gpwsPullup,t.gpwsCaution,t.gpwsSinkRate),gearDown:h,flaps:u,rotorRpm:null,torque:null,battery:K,altHold:k}}const ri=r=>r!=null&&Number.isFinite(r)?r:0;function ry(r,e){const t=ri(r.vspeed),n=ri(r.bank),i=ri(r.pitch),s=ri(r.speed),a=!!r.gearDown,o=e.needsGear?e.maxLandSpeedFwd:e.maxLandSpeed;return Math.abs(t)<=e.maxLandSink&&Math.abs(n)<=e.maxLandBank&&Math.abs(i)<=e.maxLandPitch&&s<=o&&(!e.needsGear||a)?"good":"crash"}function sy(r,e,t,n){const i=ri(n),s=ri(e.altAGL),a=ri(t.minAirborneAGL);switch(r.phase){case"spawn":{s>a&&(r.phase="flying",r.airborneTime=0);break}case"flying":{r.airborneTime=ri(r.airborneTime)+i,s<=.5&&r.airborneTime>2&&(ry(e,t)==="good"?(r.phase="landed",r.landings=ri(r.landings)+1):(r.phase="crashed",r.crashes=ri(r.crashes)+1,r.crashTimer=ri(t.crashRespawnDelay)));break}case"landed":{s>a&&(r.phase="flying",r.airborneTime=0);break}case"crashed":{r.crashTimer=ri(r.crashTimer)-i,r.crashTimer<=0&&(r.phase="spawn",r.airborneTime=0);break}}return r.phase}var ay=yt('<div role="slider" tabindex="0"><div class="knob svelte-1icehqw"></div></div>');function bh(r,e){Gl(e,!0);let t=Dr(e,"side",3,"left"),n=Dr(e,"scale",3,1),i=Dr(e,"invertX",3,!1),s=Dr(e,"invertY",3,!1),a=Dr(e,"channel",3,"move"),o=Dr(e,"deadzone",3,0),l=Je(void 0),c=Je(void 0),u=!1,h=-1,d=0,p=0,g=56,_=Je(0),f=Je(0),m=!1;const y=$M(a());kd(()=>{E(),ZM(a(),y)}),na(()=>{C(c)&&(C(c).style.transform=`translate(${C(_)}px, ${C(f)}px)`)});const v=O=>({x:O.clientX,y:O.clientY});function A(O,k){JM(a(),y)&&(a()==="look"?(ft.yawRate=O,ft.pitchRate=k):a()==="drive"?(ft.moveX=O,ft.moveY=k):(ft.steer=O,ft.throttle=k))}function b(){m||(m=!0,window.addEventListener("pointermove",D),window.addEventListener("pointerup",x),window.addEventListener("pointercancel",x),window.addEventListener("blur",E),window.addEventListener("pagehide",E),document.addEventListener("visibilitychange",S))}function w(){m&&(m=!1,window.removeEventListener("pointermove",D),window.removeEventListener("pointerup",x),window.removeEventListener("pointercancel",x),window.removeEventListener("blur",E),window.removeEventListener("pagehide",E),document.removeEventListener("visibilitychange",S))}function S(){document.hidden&&E()}function I(O){if(!C(l))return;O.preventDefault(),O.stopPropagation();const k=C(l).getBoundingClientRect();d=k.left+k.width/2,p=k.top+k.height/2,g=k.width*.42,u=!0,h=O.pointerId;try{C(l).setPointerCapture(O.pointerId)}catch{}b(),D(O)}function D(O){if(!u||O.pointerId!==h)return;if(O.pointerType==="mouse"&&O.buttons===0){E();return}const k=v(O);let q=k.x-d,$=k.y-p;const K=Math.hypot(q,$);K>g&&(q=q/K*g,$=$/K*g),me(_,q,!0),me(f,$,!0);let se=K/g;se>1&&(se=1);const oe=se<=o()?0:(se-o())/(1-o()),_e=K>0?q/K:0,He=K>0?$/K:0,V=(i()?-1:1)*_e*oe,ie=(s()?-1:1)*-He*oe;A(V,ie)}function x(O){O.pointerId===h&&E()}function E(){u=!1,h=-1,me(_,0),me(f,0),A(0,0),w()}var U=ay();let Y;_n(U,"aria-valuenow",0);var L=te(U);cr(L,O=>me(c,O),()=>C(c)),ee(U),cr(U,O=>me(l,O),()=>C(l)),Gt(()=>{Y=qt(U,1,"joy svelte-1icehqw",null,Y,{right:t()==="right"}),Xi(U,`--joy-scale: ${n()}`),_n(U,"aria-label",a()==="look"?"Look":a()==="drive"?"Drive":"Move")}),bt("pointerdown",U,I),ms("lostpointercapture",U,E),bt("contextmenu",U,O=>{O.preventDefault(),E()}),mt(r,U),Hl()}Ch(["pointerdown","contextmenu"]);var oy=yt('<div class="banner pullup svelte-jk7r88" role="alert">PULL UP</div>'),ly=yt('<div class="banner terrain svelte-jk7r88" role="alert">TERRAIN</div>'),cy=yt('<div class="banner stall svelte-jk7r88" role="alert">STALL</div>'),uy=yt('<div class="banner overspeed svelte-jk7r88" role="alert">OVERSPEED</div>'),hy=yt('<div><span class="svelte-jk7r88"> </span></div>'),dy=yt('<div class="tick svelte-jk7r88"></div>'),fy=yt('<div class="instrument small gmeter svelte-jk7r88"><span class="label svelte-jk7r88">G</span> <span class="value-sm svelte-jk7r88"> </span></div>'),py=yt('<div class="instrument small rotor svelte-jk7r88"><span class="label svelte-jk7r88">RPM</span> <span class="value-sm svelte-jk7r88"> </span></div>'),my=yt('<div class="instrument small torque svelte-jk7r88"><span class="label svelte-jk7r88">TRQ</span> <span class="value-sm svelte-jk7r88"> </span></div>'),gy=yt('<div><span class="label svelte-jk7r88">BATT</span> <span class="value-sm svelte-jk7r88"> </span></div>'),_y=yt("<div>ALT HOLD</div>"),vy=yt('<div class="cockpit svelte-jk7r88" aria-label="Flight instruments"><div class="warnbar svelte-jk7r88" role="presentation"><!> <!> <!></div> <div class="panel bottom svelte-jk7r88"><div class="instrument adi svelte-jk7r88"><div class="adi-face svelte-jk7r88"><div class="adi-ball svelte-jk7r88"><div class="sky svelte-jk7r88"></div> <div class="ground svelte-jk7r88"></div> <div class="horizon-line svelte-jk7r88"></div> <div class="ladder svelte-jk7r88"></div></div> <div class="bank-scale svelte-jk7r88"><!> <div class="bank-pointer svelte-jk7r88"></div></div> <div class="aircraft-symbol svelte-jk7r88"><span class="wing left svelte-jk7r88"></span> <span class="dot svelte-jk7r88"></span> <span class="wing right svelte-jk7r88"></span></div></div></div> <div class="instrument dial ias svelte-jk7r88"><svg viewBox="0 0 100 100" class="svelte-jk7r88"><path class="arc red svelte-jk7r88" d="M 20 80 A 40 40 0 0 1 24.5 42.5"></path><path class="arc green svelte-jk7r88" d="M 24.5 42.5 A 40 40 0 0 1 75.5 42.5"></path><path class="arc red svelte-jk7r88" d="M 75.5 42.5 A 40 40 0 0 1 80 80"></path><line class="needle svelte-jk7r88" x1="50" y1="50" x2="50" y2="16"></line><circle class="hub svelte-jk7r88" cx="50" cy="50" r="4"></circle></svg> <div class="readout svelte-jk7r88"><span class="value svelte-jk7r88"> </span> <span class="unit svelte-jk7r88">IAS</span></div></div> <div class="instrument tape alt svelte-jk7r88"><span class="label svelte-jk7r88">ALT</span> <span class="value svelte-jk7r88"> </span> <span class="unit svelte-jk7r88">AGL</span> <span class="value-sm svelte-jk7r88"> </span></div> <div class="instrument bar vsi svelte-jk7r88"><span class="label svelte-jk7r88">VSI</span> <div class="track svelte-jk7r88"><div class="zero svelte-jk7r88"></div> <div></div></div> <span class="value-sm svelte-jk7r88"> </span></div> <div class="instrument tape hdg svelte-jk7r88"><span class="label svelte-jk7r88">HDG</span> <span class="value svelte-jk7r88"> </span> <div class="rose svelte-jk7r88"><svg viewBox="0 0 100 100" class="svelte-jk7r88"><circle class="ring svelte-jk7r88" cx="50" cy="50" r="42"></circle><text x="50" y="14" class="cp svelte-jk7r88">N</text><text x="86" y="53" class="cp svelte-jk7r88">E</text><text x="50" y="92" class="cp svelte-jk7r88">S</text><text x="14" y="53" class="cp svelte-jk7r88">W</text></svg> <div class="pointer svelte-jk7r88"></div></div></div> <div class="instrument bar throttle svelte-jk7r88"><span class="label svelte-jk7r88"> </span> <div class="track vertical svelte-jk7r88"><div class="fill svelte-jk7r88"></div></div> <span class="value-sm svelte-jk7r88"> </span></div> <!> <!> <!> <!> <!></div></div>');function xy(r,e){Gl(e,!0);let t=Dr(e,"visible",3,!0);const n={airplane:{max:300,vne:260,stallBand:55},helicopter:{max:180,vne:150,stallBand:25},drone:{max:90,vne:75,stallBand:8}},i=20,s=D=>D*180/Math.PI,a=(D,x,E)=>Math.min(E,Math.max(x,D)),o=D=>(D%360+360)%360,l=Yn(()=>n[e.model]),c=Yn(()=>a(e.telemetry.ias/C(l).max,0,1)),u=Yn(()=>C(c)*270-225),h=Yn(()=>a(e.telemetry.vspeed,-i,i)),d=Yn(()=>C(h)/i),p=Yn(()=>o(s(e.telemetry.heading))),g=Yn(()=>s(e.telemetry.bank)),_=Yn(()=>s(e.telemetry.pitch)),f=3.2,m=Yn(()=>a(C(_),-30,30)*f),y=Yn(()=>Math.abs(e.telemetry.gForce-1)>.15),v=Yn(()=>e.telemetry.battery!==null&&e.telemetry.battery<.2),A=[{a:-60,len:10},{a:-30,len:14},{a:-20,len:8},{a:-10,len:8},{a:0,len:16},{a:10,len:8},{a:20,len:8},{a:30,len:14},{a:60,len:10}],b=[-30,-20,-10,10,20,30];var w=Bd(),S=Ka(w);{var I=D=>{var x=vy(),E=te(x),U=te(E);{var Y=J=>{var he=oy();mt(J,he)},L=J=>{var he=ly();mt(J,he)};Ut(U,J=>{e.telemetry.gpws==="pullup"?J(Y):e.telemetry.gpws==="caution"&&J(L,1)})}var O=Q(U,2);{var k=J=>{var he=cy();mt(J,he)};Ut(O,J=>{e.telemetry.stall&&J(k)})}var q=Q(O,2);{var $=J=>{var he=uy();mt(J,he)};Ut(q,J=>{e.telemetry.overspeed&&J($)})}ee(E);var K=Q(E,2),se=te(K),oe=te(se),_e=te(oe),He=Q(te(_e),6);ur(He,21,()=>b,yl,(J,he)=>{var ke=hy();let St;var Bt=te(ke),ut=te(Bt,!0);ee(Bt),ee(ke),Gt(Zt=>{St=qt(ke,1,"rung svelte-jk7r88",null,St,{major:C(he)%20===0}),Xi(ke,`--rung-y: ${-C(he)*f}px`),Be(ut,Zt)},[()=>Math.abs(C(he))]),mt(J,ke)}),ee(He),ee(_e);var V=Q(_e,2),ie=te(V);ur(ie,17,()=>A,yl,(J,he)=>{var ke=dy();Gt(()=>Xi(ke,`--tick-a: ${C(he).a}deg; --tick-len: ${C(he).len}px`)),mt(J,ke)});var Me=Q(ie,2);ee(V),xs(2),ee(oe),ee(se);var We=Q(se,2),Te=te(We),Ee=Q(te(Te),3);xs(),ee(Te);var Mt=Q(Te,2),Ye=te(Mt),F=te(Ye,!0);ee(Ye),xs(2),ee(Mt),ee(We);var Ft=Q(We,2),Pe=Q(te(Ft),2),Ie=te(Pe,!0);ee(Pe);var Re=Q(Pe,4),Ze=te(Re);ee(Re),ee(Ft);var Ke=Q(Ft,2),st=Q(te(Ke),2),Ot=Q(te(st),2);let R;ee(st);var M=Q(st,2),j=te(M,!0);ee(M),ee(Ke);var Z=Q(Ke,2),re=Q(te(Z),2),ne=te(re);ee(re);var nt=Q(re,2);ee(Z);var Ne=Q(Z,2),le=te(Ne),ue=te(le,!0);ee(le);var ze=Q(le,2),ae=te(ze);ee(ze);var Dt=Q(ze,2),Ge=te(Dt);ee(Dt),ee(Ne);var De=Q(Ne,2);{var be=J=>{var he=fy(),ke=Q(te(he),2),St=te(ke,!0);ee(ke),ee(he),Gt((Bt,ut)=>{_n(he,"aria-label",Bt),Be(St,ut)},[()=>`G force ${e.telemetry.gForce.toFixed(2)}`,()=>e.telemetry.gForce.toFixed(2)]),mt(J,he)};Ut(De,J=>{C(y)&&J(be)})}var we=Q(De,2);{var gt=J=>{var he=py(),ke=Q(te(he),2),St=te(ke,!0);ee(ke),ee(he),Gt((Bt,ut)=>{_n(he,"aria-label",Bt),Be(St,ut)},[()=>`Rotor RPM ${e.telemetry.rotorRpm.toFixed(0)}`,()=>e.telemetry.rotorRpm.toFixed(0)]),mt(J,he)};Ut(we,J=>{e.telemetry.rotorRpm!==null&&J(gt)})}var tt=Q(we,2);{var At=J=>{var he=my(),ke=Q(te(he),2),St=te(ke);ee(ke),ee(he),Gt((Bt,ut)=>{_n(he,"aria-label",Bt),Be(St,`${ut??""}%`)},[()=>`Torque ${e.telemetry.torque.toFixed(0)} percent`,()=>e.telemetry.torque.toFixed(0)]),mt(J,he)};Ut(tt,J=>{e.telemetry.torque!==null&&J(At)})}var N=Q(tt,2);{var pe=J=>{var he=gy();let ke;var St=Q(te(he),2),Bt=te(St);ee(St),ee(he),Gt((ut,Zt)=>{ke=qt(he,1,"instrument small battery svelte-jk7r88",null,ke,{low:C(v)}),_n(he,"aria-label",ut),Be(Bt,`${Zt??""}%`)},[()=>`Battery ${(e.telemetry.battery*100).toFixed(0)} percent`,()=>(e.telemetry.battery*100).toFixed(0)]),mt(J,he)};Ut(N,J=>{e.telemetry.battery!==null&&J(pe)})}var G=Q(N,2);{var ce=J=>{var he=_y();let ke;Gt(()=>{ke=qt(he,1,"lamp svelte-jk7r88",null,ke,{on:e.telemetry.altHold}),_n(he,"aria-label",`Altitude hold ${e.telemetry.altHold?"engaged":"off"}`)}),mt(J,he)};Ut(G,J=>{e.telemetry.altHold!==null&&J(ce)})}ee(K),ee(x),Gt((J,he,ke,St,Bt,ut,Zt,Rn,Vr,Wr,Qi,Li,Pi)=>{_n(se,"aria-label",J),Xi(_e,`--bank: ${-C(g)}deg; --shift: ${C(m)}px`),Xi(Me,`--bank: ${C(g)}deg`),_n(We,"aria-label",he),Xi(Ee,`--deg: ${C(u)}deg`),Be(F,ke),_n(Ft,"aria-label",St),Be(Ie,Bt),Be(Ze,`${ut??""} ASL`),_n(Ke,"aria-label",Zt),R=qt(Ot,1,"fill svelte-jk7r88",null,R,{up:C(h)>=0}),Xi(Ot,`--pct: ${C(d)}`),Be(j,Rn),_n(Z,"aria-label",Vr),Be(ne,`${Wr??""}°`),Xi(nt,`--hdg: ${-C(p)}deg`),_n(Ne,"aria-label",Qi),Be(ue,e.model==="helicopter"?"COLL":"THR"),Xi(ae,Li),Be(Ge,`${Pi??""}%`)},[()=>`Attitude: bank ${C(g).toFixed(0)} degrees, pitch ${C(_).toFixed(0)} degrees`,()=>`Indicated airspeed ${e.telemetry.ias.toFixed(0)}`,()=>e.telemetry.ias.toFixed(0),()=>`Altitude ${e.telemetry.altAGL.toFixed(0)} above ground, ${e.telemetry.altASL.toFixed(0)} above sea level`,()=>e.telemetry.altAGL.toFixed(0),()=>e.telemetry.altASL.toFixed(0),()=>`Vertical speed ${e.telemetry.vspeed.toFixed(1)}`,()=>e.telemetry.vspeed.toFixed(1),()=>`Heading ${C(p).toFixed(0)} degrees`,()=>C(p).toFixed(0),()=>`Throttle ${(e.telemetry.throttle*100).toFixed(0)} percent`,()=>`--pct: ${a(e.telemetry.throttle,0,1)}`,()=>(e.telemetry.throttle*100).toFixed(0)]),mt(D,x)};Ut(S,D=>{t()&&D(I)})}mt(r,w),Hl()}const bd={class:null,lanes:null,laneIndex:null,roadHeading:null};function My(r){return{onRoad:!0,edgeDist:1/0,friction:r.friction.asphalt,...bd}}function yy(r,e){return 156543.03392*Math.cos(r*Math.PI/180)/Math.pow(2,e)}function kl(r,e,t,n){const i=(n*e+t)*4;return r[i]>127||r[i+1]>127||r[i+2]>127}function Sy(r,e,t,n,i,s){const a=kl(r,e,n,i),o=Math.ceil(Math.max(e,t)/2);for(let l=1;l<=o;l++){let c=1/0;for(let u=-l;u<=l;u++)for(let h=-l;h<=l;h++){if(Math.max(Math.abs(u),Math.abs(h))!==l)continue;const d=n+u,p=i+h;if(!(d<0||d>=e||p<0||p>=t)&&kl(r,e,d,p)!==a){const g=Math.hypot(u,h);g<c&&(c=g)}}if(c!==1/0)return c*s}return 1/0}const ra=new Map;ra.set("mask",Ty);function Ey(r,e,t){for(const s of e.providers)if(!ra.has(s))throw new Error(`street: unknown provider "${s}" (registered: ${[...ra.keys()].join(", ")})`);const n=e.providers[0],i=ra.get(n);if(!i)throw new Error(`street: unknown provider "${n}" (registered: ${[...ra.keys()].join(", ")})`);return i(r,e,t)}function by(r){const e=[{id:"street-mask-bg",type:"background",paint:{"background-color":"#000000"}}];for(const t of r.layers??[]){if(t.type!=="line"||t["source-layer"]!=="transportation")continue;const n={id:`street-mask-${t.id}`,type:"line",source:t.source,"source-layer":t["source-layer"],paint:{"line-color":"#ffffff","line-width":t.paint?.["line-width"]??1,"line-opacity":1}};t.filter&&(n.filter=t.filter),e.push(n)}return{...r,layers:e}}function Ty(r,e,t){let n=My(e),i=[0,0],s=!1,a=null,o=null,l=null,c=null,u=null;if(typeof window<"u"&&typeof document<"u"){const d=e.mask.sizePx;o=document.createElement("div"),o.style.position="absolute",o.style.width=`${d}px`,o.style.height=`${d}px`,o.style.left="-9999px",o.style.top="0",o.style.visibility="hidden",document.body.appendChild(o),l=document.createElement("canvas"),l.width=d,l.height=d,c=l.getContext("2d",{willReadFrequently:!0}),fetch(t).then(p=>p.json()).then(p=>{if(s)return;const g=by(p);a=new r.Map({container:o,style:g,center:i,zoom:e.mask.zoom,pitch:0,bearing:0,interactive:!1,attributionControl:!1,canvasContextAttributes:{preserveDrawingBuffer:!0}});const _=1e3/e.mask.sampleHz;u=setInterval(()=>{h()},_)}).catch(()=>{})}function h(){if(!(!a||!l||!c))try{const d=a.getCanvas();c.drawImage(d,0,0,l.width,l.height);const p=e.mask.sizePx,g=c.getImageData(0,0,p,p),_=Math.floor(p/2),f=Math.floor(p/2),m=kl(g.data,p,_,f),y=i[1],v=yy(y,e.mask.zoom),A=Sy(g.data,p,p,_,f,v);n={onRoad:m,edgeDist:A,friction:m?e.friction.asphalt:e.friction.off,...bd}}catch{}}return{setPosition(d){if(i=d,a&&!s)try{a.jumpTo({center:d})}catch{}},sample(){return n},destroy(){s||(s=!0,u!==null&&(clearInterval(u),u=null),a&&(a.remove(),a=null),o&&o.parentNode&&o.parentNode.removeChild(o),o=null)}}}const Ns=(r,e=0)=>typeof r=="number"&&Number.isFinite(r)?r:e,Ki=(r,e,t)=>Math.min(t,Math.max(e,r));function Ay(r){const e=Ns(r.vspeed),t=Ns(r.speed),n=Math.abs(e)/6,i=t/25,s=Ki((n+i)/2,0,3),a=90*(1+.35*s),o=Ki(.15+.25*s,0,1);return{freq:a,gain:o}}function wy(r){const e=r.rotorRpm,t=e!=null&&Number.isFinite(e)?e/60*2:13,n=r.torque!=null&&Number.isFinite(r.torque)?r.torque:Ns(r.throttle),i=Ki(.2+.7*Ki(n,0,1),0,1);return{lfoRate:Ki(t,.1,50),thumpDepth:i,engineFreq:55}}function Ry(r){const e=Math.max(0,Ns(r.ias)),t=Ki(Ns(r.throttle),0,1),n=300+e*12,i=70+e*.5,s=Ki(.1+.35*t,0,1);return{filterFreq:n,toneFreq:i,gain:s}}function Cy(r){return r.gpws==="pullup"?"pullup":r.stall?"stall":r.overspeed?"overspeed":null}const xl=.1;function Ly(){let r=null,e=null,t=!1,n=!1,i=!1,s=null,a=null,o=null,l=null,c=null,u=0,h=0,d=0;function p(b){const w=b.sampleRate*2,S=b.createBuffer(1,w,b.sampleRate),I=S.getChannelData(0);let D=0;for(let x=0;x<w;x++){const E=Math.random()*2-1;D=(D+.02*E)/1.02,I[x]=D*3.5}return S}function g(b,w){const S=b.createOscillator();S.type="square",S.frequency.setValueAtTime(400,b.currentTime);const I=b.createGain();I.gain.setValueAtTime(0,b.currentTime),S.connect(I).connect(w),S.start();const D=b.createOscillator();D.type="square",D.frequency.setValueAtTime(700,b.currentTime);const x=b.createGain();x.gain.setValueAtTime(0,b.currentTime),D.connect(x).connect(w),D.start();const E=b.createOscillator();E.type="sine",E.frequency.setValueAtTime(1200,b.currentTime);const U=b.createGain();return U.gain.setValueAtTime(0,b.currentTime),E.connect(U).connect(w),E.start(),{stallOsc:S,stallGain:I,pullupOsc:D,pullupGain:x,overspeedOsc:E,overspeedGain:U}}function _(b,w){const S=b.createBiquadFilter();S.type="lowpass",S.frequency.setValueAtTime(1800,b.currentTime);const I=b.createGain();I.gain.setValueAtTime(.15,b.currentTime),S.connect(I).connect(w);const D=[-8,-2.5,2.5,8],x=D.map(Y=>{const L=b.createOscillator();return L.type="sawtooth",L.frequency.setValueAtTime(90,b.currentTime),L.detune.setValueAtTime(Y,b.currentTime),L.connect(S),L.start(),L}),E=b.createOscillator();E.type="sine",E.frequency.setValueAtTime(2200,b.currentTime);const U=b.createGain();return U.gain.setValueAtTime(.02,b.currentTime),E.connect(U).connect(w),E.start(),{oscs:x,detune:D,filter:S,gain:I,whine:E,whineGain:U}}function f(b,w){const S=b.createGain();S.gain.setValueAtTime(.3,b.currentTime),S.connect(w);const I=b.createBufferSource();I.buffer=p(b),I.loop=!0;const D=b.createBiquadFilter();D.type="lowpass",D.frequency.setValueAtTime(400,b.currentTime);const x=b.createOscillator();x.type="square",x.frequency.setValueAtTime(13,b.currentTime);const E=b.createWaveShaper(),U=new Float32Array(2);U[0]=0,U[1]=1,E.curve=U;const Y=b.createGain();Y.gain.setValueAtTime(.5,b.currentTime),x.connect(E),I.connect(D).connect(Y).connect(S),E.connect(Y.gain),I.start(),x.start();const L=b.createOscillator();L.type="triangle",L.frequency.setValueAtTime(55,b.currentTime);const O=b.createGain();return O.gain.setValueAtTime(.1,b.currentTime),L.connect(O).connect(S),L.start(),{noise:I,noiseFilter:D,thumpGate:Y,lfo:x,lfoShaper:E,engine:L,engineGain:O,master:S}}function m(b,w){const S=b.createGain();S.gain.setValueAtTime(.2,b.currentTime),S.connect(w);const I=b.createBufferSource();I.buffer=p(b),I.loop=!0;const D=b.createBiquadFilter();D.type="lowpass",D.frequency.setValueAtTime(300,b.currentTime);const x=b.createGain();x.gain.setValueAtTime(.3,b.currentTime),I.connect(D).connect(x).connect(S),I.start();const E=b.createOscillator();E.type="sine",E.frequency.setValueAtTime(70,b.currentTime);const U=b.createGain();return U.gain.setValueAtTime(.15,b.currentTime),E.connect(U).connect(S),E.start(),{noise:I,noiseFilter:D,noiseGain:x,tone:E,toneGain:U,master:S}}function y(){const b=w=>{for(const S of w){try{S.stop()}catch{}try{S.disconnect()}catch{}}};try{a&&b([...a.oscs,a.whine]),o&&b([o.noise,o.lfo,o.engine]),l&&b([l.noise,l.tone])}catch{}a=null,o=null,l=null}function v(b){if(!(!r||!e)&&s!==b)try{y(),b==="drone"?a=_(r,e):b==="helicopter"?o=f(r,e):l=m(r,e),s=b}catch{s=null}}function A(b,w,S){if(!r||!c)return;const I=Cy(b);u+=S,h+=S;const D=(E,U)=>{try{E.setTargetAtTime(U,w,xl)}catch{}},x=I==="stall"&&Math.sin(2*Math.PI*3*u)>0;if(D(c.stallGain.gain,x?.2:0),I==="pullup"){const E=Math.sin(2*Math.PI*4*h)>0?900:700;try{c.pullupOsc.frequency.setTargetAtTime(E,w,.02)}catch{}D(c.pullupGain.gain,.25)}else D(c.pullupGain.gain,0);D(c.overspeedGain.gain,I==="overspeed"?.08:0)}return{start(){if(!(n||i))try{if(typeof window>"u")return;const b=window.AudioContext??window.webkitAudioContext;if(!b)return;r=new b,e=r.createGain(),e.gain.setValueAtTime(t?0:.25,r.currentTime),e.connect(r.destination),c=g(r,e),d=r.currentTime,n=!0}catch{r=null,e=null,n=!1}},update(b,w){if(!(!n||i||!r||!e))try{const S=r.currentTime,I=Math.max(0,Math.min(.5,S-d||0));d=S,v(w);const D=(x,E,U=xl)=>{try{x.setTargetAtTime(E,S,U)}catch{}};if(w==="drone"&&a){const{freq:x,gain:E}=Ay(b);for(let U=0;U<a.oscs.length;U++)D(a.oscs[U].frequency,x);D(a.gain.gain,E)}else if(w==="helicopter"&&o){const{lfoRate:x,thumpDepth:E,engineFreq:U}=wy(b);D(o.lfo.frequency,x),D(o.thumpGate.gain,Ki(E,0,1),.03),D(o.engine.frequency,U),D(o.engineGain.gain,.08+.1*Ki(Ns(b.throttle),0,1))}else if(w==="airplane"&&l){const{filterFreq:x,toneFreq:E,gain:U}=Ry(b);D(l.noiseFilter.frequency,x),D(l.tone.frequency,E),D(l.master.gain,U)}A(b,S,I)}catch{}},setMuted(b){if(t=b,!(!n||i||!r||!e))try{e.gain.setTargetAtTime(b?0:.25,r.currentTime,xl)}catch{}},destroy(){if(!i){i=!0;try{if(y(),c){try{c.stallOsc.stop()}catch{}try{c.pullupOsc.stop()}catch{}try{c.overspeedOsc.stop()}catch{}}r&&r.close().catch(()=>{})}catch{}r=null,e=null,c=null,n=!1}}}}var Py=yt('<div class="svelte-1uha8ag"> </div>'),Iy=yt('<div class="debug-overlay svelte-1uha8ag"><div class="svelte-1uha8ag"> </div> <div class="svelte-1uha8ag"> </div> <div class="svelte-1uha8ag"> </div> <div class="svelte-1uha8ag"> </div> <div class="svelte-1uha8ag"> </div> <div class="svelte-1uha8ag"> </div> <div> </div> <!></div>'),Dy=yt('<div class="frame-err-overlay svelte-1uha8ag"><pre class="svelte-1uha8ag"> </pre></div>'),Ny=yt('<button type="button" class="frame-err-badge svelte-1uha8ag"> </button> <!>',1),Uy=yt('<div class="crash-flash svelte-1uha8ag"></div>'),Fy=yt('<div class="landed-toast svelte-1uha8ag">LANDED ✓</div>'),Oy=yt('<div class="throttle-lever svelte-1uha8ag"><input type="range" min="0" max="1" step="0.01" aria-label="Throttle" class="svelte-1uha8ag"/> <span class="svelte-1uha8ag"> </span></div> <button type="button">GEAR</button> <button type="button">FLAPS</button>',1),By=yt('<div class="flight-hud svelte-1uha8ag"><!> <button type="button" class="flight-btn view-cycle svelte-1uha8ag" aria-label="Cycle camera view">⟳</button> <button type="button" class="flight-btn mute-btn svelte-1uha8ag" aria-label="Mute flight audio"> </button></div>'),ky=yt('<a class="menu-item svelte-1uha8ag" rel="external"> </a>'),Ya=yt('<button type="button"><span class="icon svelte-1uha8ag"> </span> </button>'),zy=yt('<button type="button"> </button> <button type="button"> </button> <button type="button">Brake</button>',1),Gy=yt('<p class="svelte-1uha8ag"><strong class="svelte-1uha8ag"> </strong> </p>'),Hy=yt('<div class="menu-about svelte-1uha8ag"><!> <p class="svelte-1uha8ag"><strong class="svelte-1uha8ag">debug</strong>: F8</p></div>'),Vy=yt('<div class="menu-about svelte-1uha8ag"><p class="svelte-1uha8ag">Galaxy Earth — a 3D terrain basemap built with SvelteKit, MapLibre GL JS v5, and Three.js. Drive, fly, or walk across real-world terrain in a GTA-style twin-stick rig with a free-look camera.</p> <p class="svelte-1uha8ag"><a href="https://github.com/diegonmarcos/diegonmarcos.github.io" rel="external" class="svelte-1uha8ag">github.com/diegonmarcos/diegonmarcos.github.io</a></p> <p class="svelte-1uha8ag">Part of the Galaxy constellation of apps (Hub, Earth, Gaia, X1).</p></div>'),Wy=yt('<nav class="menu svelte-1uha8ag" aria-label="Main menu"><section class="menu-section svelte-1uha8ag"><h2 class="svelte-1uha8ag">Galaxies</h2> <!></section> <section class="menu-section svelte-1uha8ag"><h2 class="svelte-1uha8ag">Camera View</h2> <div class="menu-row svelte-1uha8ag"><button type="button" class="menu-btn svelte-1uha8ag">Zoom +</button> <button type="button" class="menu-btn svelte-1uha8ag">Zoom −</button> <button type="button" class="menu-btn svelte-1uha8ag">Reset View</button> <button type="button"> </button></div> <!></section> <section class="menu-section svelte-1uha8ag"><h2 class="svelte-1uha8ag">Drive Mode</h2> <!></section> <section class="menu-section svelte-1uha8ag"><h2 class="svelte-1uha8ag">Configs</h2> <!> <button type="button">Graph Stats</button> <button type="button">Debug Mode</button> <button type="button">Cockpit HUD</button> <button type="button" class="menu-item svelte-1uha8ag"> </button> <button type="button">Keybindings</button> <!> <button type="button">About</button> <!></section></nav>'),Xy=yt('<div class="fab-popup svelte-1uha8ag" role="menu" aria-label="Camera view"></div>'),qy=yt('<div class="fab-popup svelte-1uha8ag" role="menu" aria-label="Driver"></div>'),jy=yt('<button type="button" aria-label="Toggle performance stats"><canvas width="120" height="36" class="svelte-1uha8ag"></canvas> <div class="perf-text svelte-1uha8ag"><span class="svelte-1uha8ag"> </span> <span class="svelte-1uha8ag"> </span></div></button>'),Yy=yt('<div class="perf-stat svelte-1uha8ag"><span class="svelte-1uha8ag">JS heap</span><span class="svelte-1uha8ag"> </span></div>'),Ky=yt('<div class="perf-panel svelte-1uha8ag"><div class="perf-row svelte-1uha8ag"><span class="perf-label svelte-1uha8ag">FPS</span> <canvas width="160" height="40" class="svelte-1uha8ag"></canvas> <span class="perf-num svelte-1uha8ag"> </span></div> <div class="perf-row svelte-1uha8ag"><span class="perf-label svelte-1uha8ag">Frame</span> <canvas width="160" height="40" class="svelte-1uha8ag"></canvas> <span> </span></div> <div class="perf-row svelte-1uha8ag"><span class="perf-label svelte-1uha8ag">Draws</span> <canvas width="160" height="40" class="svelte-1uha8ag"></canvas> <span class="perf-num svelte-1uha8ag"> </span></div> <div class="perf-stat svelte-1uha8ag"><span class="svelte-1uha8ag">Draw calls</span><span class="svelte-1uha8ag"> </span></div> <div class="perf-stat svelte-1uha8ag"><span class="svelte-1uha8ag">Triangles</span><span class="svelte-1uha8ag"> </span></div> <div class="perf-stat svelte-1uha8ag"><span class="svelte-1uha8ag">Geometries</span><span class="svelte-1uha8ag"> </span></div> <div class="perf-stat svelte-1uha8ag"><span class="svelte-1uha8ag">Textures</span><span class="svelte-1uha8ag"> </span></div> <!></div>'),$y=yt('<div class="climb svelte-1uha8ag"><button type="button" class="climb-btn svelte-1uha8ag" aria-label="Climb up">▲</button> <button type="button" class="climb-btn svelte-1uha8ag" aria-label="Climb down">▼</button></div>'),Zy=yt('<div><div class="map svelte-1uha8ag"></div> <canvas class="sky-overlay svelte-1uha8ag"></canvas> <!> <!> <!> <!> <!> <!> <button type="button" aria-label="Menu">☰</button> <!> <div class="fabs svelte-1uha8ag"><div class="fab-anchor svelte-1uha8ag"><!> <button type="button" class="fab svelte-1uha8ag" aria-label="Camera view"> </button></div> <div class="fab-anchor svelte-1uha8ag"><!> <button type="button" class="fab svelte-1uha8ag" aria-label="Driver mode"> </button></div></div> <div class="hud svelte-1uha8ag"><!> <!></div> <div class="velocimeter svelte-1uha8ag"> <span class="redline svelte-1uha8ag"> </span> km/h</div> <div class="altimeter svelte-1uha8ag"> <span class="redline svelte-1uha8ag"> </span> m</div> <!> <!> <!></div>');function rS(r,e){Gl(e,!0);const t=1/3.6;let n;const i=An.rider,s=i.joystick,a=s.look,o=i.camera;function l(H,ge,de){const Le=H.size??o.refSize,Ue=(H.speed.max??0)*t,Fe=Ue>0?Math.min(1,(de??0)/Ue):0,Ve=ge.zoom+Math.log2(o.refSize/Le)-o.speedZoom*Fe;return Math.max(o.minZoom,Math.min(o.maxZoom,Ve))}let c=Je(Ao(i.drivers.find(H=>H.id===i.defaultDriver)??i.drivers[0])),u=Je(Ao(i.cameras.find(H=>H.id===i.defaultCamera)??i.cameras[0])),h=Je(0),d=Je(0),p=Je(void 0),g=Je(void 0),_=Je(0),f=Je(0),m=Je(!1),y=Je(0),v=Je(0),A=Je(0),b=Je(0),w=Je(void 0),S=Je(void 0),I=Je(void 0),D=Je(void 0),x=Je(!1),E=Je(!1),U=Je(!1),Y=Je(!1),L=Je(!1),O=Je(!1),k=Je(!1),q=Je(!0),$=()=>{},K=()=>{},se=()=>{},oe=()=>{};const _e=[{id:"hub",label:"Galaxy Hub",href:"/galaxy/"},{id:"earth",label:"Galaxy Earth",href:"/galaxy-earth/"},{id:"gaia",label:"Galaxy Gaia",href:"/galaxy-gaia/"},{id:"x1",label:"Galaxy X1",href:"/galaxy-x1/"}],He=[];let V=Je("");function ie(H){if(typeof H=="string")return H;if(H instanceof Error)return`${H.name}: ${H.message}
${H.stack??""}`;const ge=new WeakSet;try{return JSON.stringify(H,(de,Le)=>{if(typeof Le=="bigint")return`${Le}n`;if(typeof Le=="object"&&Le!==null){if(ge.has(Le))return"[Circular]";ge.add(Le)}return Le},2)??String(H)}catch{return String(H)}}function Me(H,ge){const de=new Date().toISOString(),Le=ge.map(ie).join(" ");He.push(`[${de}] [${H}] ${Le}`)}async function We(){const H=He.join(`
`),ge=`galaxy-earth-log-${Date.now()}.log`;me(V,"Exporting…");try{await navigator.clipboard.writeText(H)}catch(de){console.error("[rider] clipboard copy failed",de)}try{const de=window.showSaveFilePicker;if(de){const Ue=await(await de({suggestedName:ge})).createWritable();await Ue.write(H),await Ue.close()}else{const Le=URL.createObjectURL(new Blob([H],{type:"text/plain"})),Ue=document.createElement("a");Ue.href=Le,Ue.download=ge,Ue.click(),URL.revokeObjectURL(Le)}}catch(de){console.error("[rider] local log save failed/cancelled",de)}try{const de=await fetch("https://api.diegonmarcos.com/c3-infra-api/public/logs",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({source:"galaxy-earth",log:H})});me(V,de.ok?"Copied + saved + uploaded ✓":`Copied + saved, upload failed (${de.status})`,!0)}catch(de){console.error("[rider] log upload failed",de),me(V,"Copied + saved, upload failed (offline?)")}setTimeout(()=>me(V,""),4e3)}let Te=Je("none"),Ee=Je(0),Mt=Je(0),Ye=Je(0);const F={heading:0};let Ft,Pe=0;const Ie={heading:0,bank:0,pitch:0,speed:0,vspeed:0,altASL:0,velX:0,velZ:0,battery:1};let Re=Je(0),Ze=Je(null),Ke=Je(!1),st=()=>{},Ot=()=>{};const R={phase:"spawn",airborneTime:0,landings:0,crashes:0,crashTimer:0};let M=Je("spawn"),j=Je(0),Z=Je(!1),re=Je(!1),ne=Je(0),nt=Je(""),Ne=Je(!1),le=null,ue=Je(!0),ze=Je(0),ae=Je(!1),Dt=Je(Ao(i.cockpit.defaultVisible));na(()=>{const H=C(c).altitude;F.altitude=Ge(H.default,H.min,H.max),F.speed=(C(c).speed.idle??0)*t,C(c).control==="flight"&&(Ie.heading=F.heading,Ie.bank=0,Ie.pitch=0,Ie.speed=0,Ie.vspeed=0,Ie.velX=0,Ie.velZ=0,Ie.battery=1,me(Re,0),le=H.default,me(Ze,null)),console.log(`[rider] driver -> '${C(c).id}' (default altitude ${F.altitude}m, range [${H.min},${H.max}]m)`)}),na(()=>{console.log(`[rider] camera -> '${C(u).id}' (pitch ${C(u).pitch}, zoom ${l(C(c),C(u))})`)});function Ge(H,ge,de){return Math.min(de,Math.max(ge,H))}const De=.6180339887498949;function be(H,ge){const de=H*De+ge;return de-Math.floor(de)}function we(){const H=new rc(i.character.radius,i.character.height,4,8),ge=new fr({color:i.character.color});return new Qt(H,ge)}function gt(H){const ge=new Qe(i.character.color),de=new fr({color:ge}),Le=new fr({color:ge.clone().multiplyScalar(.6)}),Ue=new fr({color:ge.clone().multiplyScalar(1.3)});if(H==="drone"){const Fe=new mi;Fe.add(new Qt(new hi(.6,.15,.6),de));const Ve=new Ss(.18,.18,.02,12),ht=[[.35,.35],[.35,-.35],[-.35,.35],[-.35,-.35]];for(const[wt,zt]of ht){const Nt=new Qt(Ve,Le);Nt.position.set(wt,.1,zt),Fe.add(Nt)}return Fe}if(H==="helicopter"){const Fe=new mi;Fe.add(new Qt(new hi(.8,.6,1.8),de));const Ve=new Qt(new hi(.2,.2,1.6),de);Ve.position.set(0,.1,-1.5),Fe.add(Ve);const ht=new Qt(new hi(3.2,.06,.15),Le);return ht.position.set(0,.5,0),Fe.add(ht),Fe}if(H==="airplane"){const Fe=new mi,Ve=new Qt(new Ss(.25,.25,2.4,10),de);Ve.rotation.x=Math.PI/2,Fe.add(Ve),Fe.add(new Qt(new hi(3.2,.06,.5),Ue));const ht=new Qt(new hi(.06,.5,.4),Le);return ht.position.set(0,.25,-1.1),Fe.add(ht),Fe}return we()}function tt(H,ge){const Ue=new Ss(.4,.5,3,6).toNonIndexed();Ue.translate(0,3/2,0);const Fe=new sc(2.4,6,7).toNonIndexed();Fe.translate(0,3+6/2,0);const Ve=Ue.attributes.position,ht=Fe.attributes.position,wt=Ue.attributes.normal,zt=Fe.attributes.normal,Nt=new Float32Array(Ve.array.length+ht.array.length);Nt.set(Ve.array,0),Nt.set(ht.array,Ve.array.length);const sn=new Float32Array(wt.array.length+zt.array.length);sn.set(wt.array,0),sn.set(zt.array,wt.array.length);const vt=new Float32Array(Ve.count*3+ht.count*3),ln=new Qe(ge),Cn=new Qe(H);for(let Yt=0;Yt<Ve.count;Yt++)ln.toArray(vt,Yt*3);for(let Yt=0;Yt<ht.count;Yt++)Cn.toArray(vt,(Ve.count+Yt)*3);const Tt=new Fn;return Tt.setAttribute("position",new hn(Nt,3)),Tt.setAttribute("normal",new hn(sn,3)),Tt.setAttribute("color",new hn(vt,3)),Tt}zd(()=>{["log","info","warn","error","debug"].forEach(ye=>{const Ae=console[ye].bind(console);console[ye]=(...ve)=>{Me(ye,ve),Ae(...ve)}}),console.log(`[rider] mount: driver=${C(c).id} camera=${C(u).id} start=${i.start}`);let H,ge,de=!1,Le=0,Ue,Fe=0,Ve=0;const ht=Ly();let wt=!1;const zt=()=>{wt||(wt=!0,ht.start())};window.addEventListener("pointerdown",zt,{once:!0}),window.addEventListener("keydown",zt,{once:!0}),st=()=>{me(Ke,!C(Ke)),ht.setMuted(C(Ke))};let Nt=null,sn=0;const vt=new Set;function ln(){const ye=i.keys;let Ae=0,ve=0,et=0;[...vt].some(Oe=>ye.forward.includes(Oe))&&(ve+=1),[...vt].some(Oe=>ye.back.includes(Oe))&&(ve-=1),[...vt].some(Oe=>ye.left.includes(Oe))&&(Ae-=1),[...vt].some(Oe=>ye.right.includes(Oe))&&(Ae+=1),[...vt].some(Oe=>ye.up.includes(Oe))&&(et+=1),[...vt].some(Oe=>ye.down.includes(Oe))&&(et-=1),ft.moveX=Ae,ft.moveY=ve,ft.climbKeys=et}function Cn(){let ye=0,Ae=0,ve=0,et=0;return vt.has("w")&&(ye+=1),vt.has("s")&&(ye-=1),vt.has("a")&&(Ae-=1),vt.has("d")&&(Ae+=1),vt.has("ArrowLeft")&&(ve-=1),vt.has("ArrowRight")&&(ve+=1),(vt.has("q")||vt.has(" "))&&(et+=1),(vt.has("e")||vt.has("c"))&&(et-=1),{pitch:ye,roll:Ae,yaw:ve,leftY:et}}function Tt(ye,Ae){return ye.includes(Ae)}function Yt(ye,Ae,ve){const et=ye.indexOf(Ae),Oe=ye.length;return ye[(et+ve+Oe)%Oe]}Ot=()=>{const Ae=i.cockpit.viewCycle.map(et=>i.cameras.find(Oe=>Oe.id===et)).filter(Boolean);if(Ae.length===0)return;const ve=Ae.findIndex(et=>et.id===C(u).id);me(u,ve===-1?Ae[0]:Yt(Ae,Ae[ve],1),!0)};function Zn(ye){if(ye.key==="F8"){ye.preventDefault(),me(x,!C(x));return}const Ae=i.keys,ve=ye.key.length===1?ye.key.toLowerCase():ye.key,et=Tt(Ae.forward,ve)||Tt(Ae.back,ve)||Tt(Ae.left,ve)||Tt(Ae.right,ve)||Tt(Ae.up,ve)||Tt(Ae.down,ve),Oe=Tt(Ae.cameraNext,ve)||Tt(Ae.cameraPrev,ve)||Tt(Ae.driverNext,ve)||Tt(Ae.driverPrev,ve);!et&&!Oe||(ye.preventDefault(),et&&(vt.add(ve),ln()),Oe&&!ye.repeat&&(Tt(Ae.cameraNext,ve)?me(u,Yt(i.cameras,C(u),1),!0):Tt(Ae.cameraPrev,ve)?me(u,Yt(i.cameras,C(u),-1),!0):Tt(Ae.driverNext,ve)?me(c,Yt(i.drivers,C(c),1),!0):Tt(Ae.driverPrev,ve)&&me(c,Yt(i.drivers,C(c),-1),!0)))}function Jn(ye){const Ae=ye.key.length===1?ye.key.toLowerCase():ye.key;vt.has(Ae)&&(ye.preventDefault(),vt.delete(Ae),ln())}function On(){vt.clear(),ln()}function Bn(){document.hidden&&(vt.clear(),ln())}window.addEventListener("keydown",Zn),window.addEventListener("keyup",Jn),window.addEventListener("blur",On),document.addEventListener("visibilitychange",Bn),me(x,new URLSearchParams(window.location.search).get("debug")==="1"),C(x)&&(console.info("[rider] debug mode ON — F8 toggles, throttled frame logs every 30 renders"),yo(()=>import("../chunks/hRSVIHhc.js").then(ye=>ye.e),__vite__mapDeps([0,1]),import.meta.url).then(ye=>{(ye.default??ye).init(),console.info("[rider] eruda mobile console attached")}).catch(ye=>console.error("[rider] eruda failed to load",ye)));function Gn(ye){me(Te,ye.message??String(ye),!0),console.error("[rider] window error",ye.error??ye.message)}function oi(ye){me(Te,ye.reason?.message??String(ye.reason),!0),console.error("[rider] unhandled rejection",ye.reason)}window.addEventListener("error",Gn),window.addEventListener("unhandledrejection",oi);let Di=!1;function Hn(ye){Di&&(Fe+=ye.movementX*a.mouseSensitivity*(Math.PI/180),Ve=Ge(Ve+ye.movementY*a.mouseSensitivity,a.minPitch,a.skyMaxPitch))}function Ni(){Di=!!Ue&&document.pointerLockElement===Ue}document.addEventListener("mousemove",Hn),document.addEventListener("pointerlockchange",Ni);function Qn(){ft.climbPointer=0}window.addEventListener("pointerup",Qn),window.addEventListener("pointercancel",Qn);let kn,_i,tn;if(C(p)){kn=new Dl({canvas:C(p),alpha:!0}),kn.setSize(window.innerWidth,window.innerHeight),tn=new Nn(60,window.innerWidth/window.innerHeight,.1,1e3),_i=new al;const ye=new ac(500,32,32),Ae=new Zi({side:Un,uniforms:{topColor:{value:new Qe(131852)},bottomColor:{value:new Qe(1708080)}},vertexShader:`
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
        `}),ve=new Qt(ye,Ae);_i.add(ve);const et=400,Oe=new Float32Array(et*3);for(let Kt=0;Kt<et;Kt++){const Vn=be(Kt,.13)*Math.PI*2,Ui=be(Kt,.77)*Math.PI*.5,mn=480;Oe[Kt*3]=mn*Math.sin(Ui)*Math.cos(Vn),Oe[Kt*3+1]=mn*Math.cos(Ui),Oe[Kt*3+2]=mn*Math.sin(Ui)*Math.sin(Vn)}const Vt=new Fn;Vt.setAttribute("position",new hn(Oe,3));const an=new ec({color:16777215,size:1.5,sizeAttenuation:!1});_i.add(new fd(Vt,an))}function ei(){!kn||!tn||(kn.setSize(window.innerWidth,window.innerHeight),tn.aspect=window.innerWidth/window.innerHeight,tn.updateProjectionMatrix())}window.addEventListener("resize",ei);let ti=!1;return na(()=>{const ye=C(c);H&&(ye.globe?(ti||(H.setProjection({type:"globe"}),H.setZoom(1)),ti=!0):ti&&(H.setProjection({type:"mercator"}),ti=!1))}),(async()=>{const ye=(await yo(async()=>{const{default:Ae}=await import("../chunks/B1PBqzko.js").then(ve=>ve.m);return{default:Ae}},__vite__mapDeps([2,1]),import.meta.url)).default;await yo(()=>Promise.resolve({}),__vite__mapDeps([3]),import.meta.url),!de&&(H=new ye.Map({container:n,style:An.basemap,center:An.center,zoom:An.zoom,pitch:An.pitch,bearing:An.bearing}),H.setCenterClampedToGround(!1),H.setMaxPitch(a.mapMaxPitch),$=()=>H?.zoomIn(),K=()=>H?.zoomOut(),se=()=>H?.resetNorth(),oe=()=>{H&&(me(q,!C(q)),console.log(`[rider] terrain3d -> ${C(q)}`),H.setTerrain(C(q)?{source:"terrain-dem",exaggeration:An.terrain.exaggeration}:null))},Ue=H.getCanvas(),Ue.requestPointerLock&&Ue.addEventListener("click",()=>Ue?.requestPointerLock()),H.on("error",Ae=>{console.error("[map] error event",Ae.error?.message??Ae.error??Ae)}),H.on("sourcedataloading",Ae=>{Ae.sourceId&&console.debug(`[map] source loading: ${Ae.sourceId}`)}),H.on("dataabort",Ae=>{console.warn(`[map] data load aborted for source '${Ae.sourceId}'`)}),H.on("styleimagemissing",Ae=>{!H||H.hasImage(Ae.id)||H.addImage(Ae.id,{width:1,height:1,data:new Uint8Array(4)})}),H.on("load",()=>{if(!H)return;try{Nt=Ey(ye,i.street,An.basemap)}catch(qe){console.warn("[rider] street provider failed to initialize — falling back to normal driving",qe),Nt=null}H.addSource("terrain-dem",{type:"raster-dem",tiles:An.terrain.tiles,tileSize:An.terrain.tileSize,maxzoom:An.terrain.maxzoom,encoding:An.terrain.encoding}),H.setTerrain({source:"terrain-dem",exaggeration:An.terrain.exaggeration}),H.setSky({"sky-color":"#88C6FC","horizon-color":"#ffffff","fog-color":"#ffffff","atmosphere-blend":.8});const Ae=Object.entries(H.getStyle()?.sources??{}).find(([,qe])=>qe.type==="vector")?.[0];if(Ae){const qe=An.nature;H.addLayer({id:"nature-green",type:"fill",source:Ae,"source-layer":qe.sourceLayer,filter:["in",["get","class"],["literal",qe.landcoverClasses]],paint:{"fill-color":qe.greenColor,"fill-opacity":qe.greenOpacity}});const it=An.buildings;H.addLayer({id:"buildings-3d",type:"fill-extrusion",source:Ae,"source-layer":"building",minzoom:it.minZoom,paint:{"fill-extrusion-base":["get",it.baseField],"fill-extrusion-height":["get",it.heightField],"fill-extrusion-opacity":it.opacity,"fill-extrusion-color":["interpolate",["linear"],["get",it.heightField],0,it.lowColor,it.highRiseMeters,it.highColor]}})}let ve=[i.start[0],i.start[1]],et,Oe,Vt,an;const Kt={};function Vn(qe){return Kt[qe.id]||(Kt[qe.id]=gt(qe.id)),Kt[qe.id]}const Ui=new aM,mn={};function er(qe){const it=qe.model?.glb;if(!it||mn[qe.id])return;mn[qe.id]="loading";const Ct=i.assetsBase+it;console.log(`[rider] loading model for '${qe.id}': ${Ct}`),Ui.load(Ct,Et=>{const cn=Et.scene,$t=qe.model.scale??1;cn.scale.setScalar($t),cn.rotation.y=qe.model.yaw??0,cn.position.y=qe.model.y??0,mn[qe.id]=cn;const En=new Ai().setFromObject(cn).getSize(new P);console.log(`[rider] model loaded for '${qe.id}': bbox ${En.x.toFixed(2)}x${En.y.toFixed(2)}x${En.z.toFixed(2)} (scale ${$t})`),C(c).id===qe.id&&Ws()},Et=>{Et.total&&console.debug(`[rider] '${qe.id}' loading ${Math.round(Et.loaded/Et.total*100)}%`)},Et=>{mn[qe.id]="error",console.error(`[rider] FAILED to load model for '${qe.id}' from ${Ct} — falling back to procedural mesh`,Et)})}function Ws(){if(!an)return;an.clear();const qe=mn[C(c).id];C(c).model?.glb&&qe&&qe!=="loading"&&qe!=="error"?an.add(qe):an.add(Vn(C(c)))}let yr,jr,ho=0;const Wn={lngLat:[i.start[0],i.start[1]],heading:0,agl:0,groundElev:0,vis:1};let hc="";const _a=new Array(60).fill(16.7);let fo=0,Xs=60;const Sr=120,dc=new Array(Sr).fill(16.7),fc=new Array(Sr).fill(60),po=new Array(Sr).fill(0);let Er=0;function Td(){const qe=C(g);if(!qe)return;const it=qe.getContext("2d");if(!it)return;const Ct=qe.width,Et=qe.height;it.clearRect(0,0,Ct,Et);const cn=_a.length,$t=40;it.beginPath();for(let Wt=0;Wt<cn;Wt++){const En=_a[(fo+Wt)%cn],Xn=Wt/(cn-1)*Ct,zn=Et-Math.min(En,$t)/$t*Et;Wt===0?it.moveTo(Xn,zn):it.lineTo(Xn,zn)}it.strokeStyle=C(f)>33?"#ff5c5c":C(f)>16?"#ffb84d":"#5ee6a0",it.lineWidth=1.5,it.stroke()}function mo(qe,it,Ct,Et,cn){if(!qe)return;const $t=qe.getContext("2d");if(!$t)return;const Wt=qe.width,En=qe.height;$t.clearRect(0,0,Wt,En);const Xn=it.length;$t.beginPath();for(let zn=0;zn<Xn;zn++){const Ln=it[(Ct+zn)%Xn],Fi=zn/(Xn-1)*Wt,Oi=En-Math.min(Ln,Et)/Et*En;zn===0?$t.moveTo(Fi,Oi):$t.lineTo(Fi,Oi)}$t.strokeStyle=cn,$t.lineWidth=1.5,$t.stroke()}function Ad(){if(!C(m))return;mo(C(S),fc,Er,90,"#5ee6a0"),mo(C(I),dc,Er,40,C(f)>33?"#ff5c5c":C(f)>16?"#ffb84d":"#5ee6a0");const qe=Math.max(20,...po);mo(C(D),po,Er,qe,"#9db4ff")}const wd={id:"rider",type:"custom",renderingMode:"3d",onAdd(qe,it){et=new al,et.add(new vh(16777215,.6));const Ct=new Fl(16777215,.8);Ct.position.set(0,-70,100).normalize(),et.add(Ct),an=new mi,et.add(an);for(const Ln of i.drivers)er(Ln);Ws(),Oe=new jl,Vt=new Dl({canvas:H.getCanvas(),context:it}),Vt.autoClear=!1;const Et=An.nature.trees,cn=Math.min(Et.count,300),$t=tt(Et.canopyColor,Et.trunkColor),Wt=new fr({vertexColors:!0});jr=new hd($t,Wt,cn);const En=[i.start[0],i.start[1]],Xn=new je;for(let Ln=0;Ln<cn;Ln++){const Fi=be(Ln,.1)*Math.PI*2,Oi=Math.sqrt(be(Ln,.7))*Et.radius,Yr=Et.minScale+be(Ln,.4)*(Et.maxScale-Et.minScale),go=Math.cos(Fi)*Oi,_o=Math.sin(Fi)*Oi,vi=ye.MercatorCoordinate.fromLngLat(En,0),br=vi.meterInMercatorCoordinateUnits();vi.x+=go*br,vi.y+=_o*br;const Tr=vi.meterInMercatorCoordinateUnits();Xn.makeTranslation(vi.x,vi.y,vi.z).multiply(new je().makeRotationX(Math.PI/2)).multiply(new je().makeScale(Tr*Yr,Tr*Yr,Tr*Yr)),jr.setMatrixAt(Ln,Xn)}jr.instanceMatrix.needsUpdate=!0,yr=new al,yr.add(new vh(16777215,.7));const zn=new Fl(16777215,.7);zn.position.set(0,-70,100).normalize(),yr.add(zn),yr.add(jr)},render(qe,it){Ef(Ee),me(Mt,performance.now(),!0);try{if(!H)return;const Ct=it?.defaultProjectionData?.mainMatrix;if(!Ct){console.warn("[rider] no projection matrix from maplibre v5 render args");return}const Et=ye.MercatorCoordinate.fromLngLat(Wn.lngLat,Wn.groundElev+Wn.agl),cn=new je().makeTranslation(Et.x,Et.y,Et.z).multiply(new je().makeRotationX(Math.PI/2)).multiply(new je().makeRotationZ(-Wn.heading)).multiply(new je().makeScale(Wn.vis,Wn.vis,Wn.vis));Oe.projectionMatrix=new je().fromArray(Ct).multiply(cn),Vt.resetState(),Vt.render(et,Oe),Oe.projectionMatrix=new je().fromArray(Ct),Vt.render(yr,Oe),C(x)&&C(Ee)%30===0&&console.debug("[rider]",{fps:Math.round(C(_)),renderCalls:C(y),driver:C(c).id,camera:C(u).id,freeInput:{moveX:ft.moveX,moveY:ft.moveY,yawRate:ft.yawRate,pitchRate:ft.pitchRate,climb:vl()},frameState:Wn})}catch(Ct){me(Te,Ct instanceof Error?`${Ct.message}
${Ct.stack??""}`:String(Ct),!0),console.error("[rider] render() threw",Ct)}}};H.addLayer(wd),ge=Sf(()=>{na(()=>{C(c),Ws()})});const pc=qe=>{if(!(de||!H))try{const it=ho?Math.min((qe-ho)/1e3,.1):0;if(ho=qe,me(Ye,qe,!0),it>0){const Rt=it*1e3;me(f,Rt),Xs=Xs+(1e3/Rt-Xs)*.1,me(_,Xs,!0),_a[fo%_a.length]=Rt,fo++,Td(),dc[Er%Sr]=Rt,fc[Er%Sr]=Xs,Er++,Ad(),Vt&&(me(y,Vt.info.render.calls,!0),me(v,Vt.info.render.triangles,!0),me(A,Vt.info.memory.geometries,!0),me(b,Vt.info.memory.textures,!0),po[(Er-1+Sr)%Sr]=C(y));const rn=performance.memory?.usedJSHeapSize;me(w,rn!=null?rn/(1024*1024):void 0,!0)}C(c).control!=="flight"&&(Fe+=ft.yawRate*(a.yawRate*Math.PI/180)*it,Ve=Ge(Ve+ft.pitchRate*a.pitchRate*it,a.minPitch,a.skyMaxPitch));const Ct=C(c).speed,Et=C(c).altitude;let cn=null;if(Nt)try{Nt.setPosition(ve),cn=Nt.sample()}catch(Rt){console.error("[rider] street provider disabled after error",Rt);try{Nt.destroy()}catch{}Nt=null}const $t=H.queryTerrainElevation(ve)??0;let Wt;if(C(c).control==="flight"){const Rt=C(c).flight;le!==null&&(Ie.altASL=$t+le,le=null);const rn=i.flightControls,xi=Cn(),Kr=(qs,va)=>{const $r=Ge(qs,-1,1);return(1-va)*$r+va*$r*$r*$r},Rd=Ge(ft.moveY+xi.leftY,-1,1),Cd=Ge(ft.moveX+xi.yaw,-1,1),Ld=Ge(-ft.pitchRate+xi.pitch,-1,1),Pd=Ge(ft.yawRate+xi.roll,-1,1),Id=Kr(Ld,rn.expo),Dd=Kr(Pd,rn.expo),Nd=Kr(Cd,rn.expo),vo=Kr(Rd,rn.expo);let xo=C(Re);rn.sticky_throttle.includes(Rt.model)?(me(Re,Ge(C(Re)+vo*it*.5,0,1),!0),xo=C(Re)):Rt.model==="helicopter"&&(xo=Ge(.5+vo*.5,0,1));const Ud={pitchAxis:Id,rollAxis:Dd,yawAxis:Nd,throttle:xo,climbAxis:Rt.model==="drone"?vo:0,gearDown:C(ue),flaps:C(ze),brake:C(ae)?1:0},Fd={groundElev:$t,dt:it},Bi=(Rt.model==="airplane"?ty:Rt.model==="helicopter"?ny:iy)(Ie,Ud,Rt,Fd);if(me(Ze,Bi,!0),C(u).id!=="fps"){const qs=Math.max(.001,o.springTau),va=1-Math.exp(-it/qs),$r=Math.atan2(Math.sin(Bi.heading-Fe),Math.cos(Bi.heading-Fe));Fe+=$r*va}const Od={...i.game,needsGear:Rt.model==="airplane"&&i.game.needsGear},Mo=R.phase;if(sy(R,Bi,Od,it),me(M,R.phase,!0),me(j,R.landings,!0),Mo!=="landed"&&R.phase==="landed"&&(me(Z,!0),setTimeout(()=>{me(Z,!1)},2500)),Mo!=="crashed"&&R.phase==="crashed"&&(me(re,!0),setTimeout(()=>{me(re,!1)},400)),Mo==="crashed"&&R.phase==="spawn"){const qs=C(c).altitude;Ie.altASL=$t+qs.default,Ie.speed=(C(c).speed.idle??0)*t,Ie.vspeed=0,Ie.bank=0,Ie.pitch=0}ht.update(Bi,Rt.model),Wt={heading:Bi.heading,forwardX:Math.sin(Bi.heading),forwardZ:-Math.cos(Bi.heading),dForward:Ie.speed*it,altitude:Bi.altAGL}}else if(C(c).control==="vehicle"){const Rt=C(c).vehicle;Wt={...ey(F,{steerAxis:ft.moveX,throttle:Math.max(0,ft.moveY),brake:Math.max(0,-ft.moveY)},{...Rt,maxSpeed:Ct.max*t,friction:cn?.friction??1},it),altitude:F.altitude??0}}else Wt=QM(F,{moveX:ft.moveX,moveY:ft.moveY,camBearing:Fe+C(u).bearingOffset*Math.PI/180,climb:vl()},{min:Ct.min*t,cruise:Ct.cruise*t,idle:Ct.idle*t,max:Ct.max*t,turn:C(c).turnRate*(Math.PI/180),accel:C(c).accel,turnAtMax:C(c).turnAtMax,speedRef:Ct.max*t,lift:Et.climbRate,maxAlt:Et.max,minAlt:Et.min,deadzone:i.joystick.deadzone},it);me(h,(F.speed??0)/t),me(d,Wt.altitude,!0);const En=ye.MercatorCoordinate.fromLngLat(ve,$t+Wt.altitude),Xn=En.meterInMercatorCoordinateUnits();En.x+=Wt.forwardX*Wt.dForward*Xn,En.y+=Wt.forwardZ*Wt.dForward*Xn;const zn=En.toLngLat();ve=[zn.lng,zn.lat],Wn.lngLat=ve,Wn.heading=Wt.heading,Wn.agl=Wt.altitude,Wn.groundElev=$t,Wn.vis=Xn*(C(c).model?.scale??1)*(C(u).modelBoost??1);let Ln,Fi;const Oi=C(c).orbitZoom;if(Et.model==="zoom"&&Oi)Ln=Ge(Oi.refZoom-Math.log2(Math.max(Wt.altitude,1)/Oi.refAltitude),.5,6),Fi=0;else{Ln=l(C(c),C(u),F.speed);const Rt=C(u).targetLift,rn=Rt==="eye"?Et.eyeHeight:typeof Rt=="number"?Rt:0;Fi=$t+Wt.altitude+rn}const Yr=`${C(c).id}:${C(u).id}`;hc!==Yr&&(hc=Yr,console.log(`[rider] camera path -> driver '${C(c).id}' camera '${C(u).id}': zoom ${Ln.toFixed(2)}, model '${Et.model}', size ${C(c).size??o.refSize}`));const go=Ge(C(u).pitch+Ve,0,a.mapMaxPitch),_o=C(c).control==="vehicle",vi=C(c).control==="flight";let br=o.fovBase,Tr=0;if(_o){const Rt=Ct.max*t,rn=Rt>0?Math.min(1,Math.abs(F.speed??0)/Rt):0;br=o.fovBase+(o.fovMax-o.fovBase)*rn;const xi=C(c).vehicle;Tr=-o.rollMax*((F.steer??0)/xi.maxSteer)*rn}else if(vi&&C(Ze)){const Rt=Ct.max*t,rn=Rt>0?Math.min(1,C(Ze).speed/Rt):0;br=o.fovBase+(o.fovMax-o.fovBase)*rn,Tr=-(C(Ze).bank*180)/Math.PI*.5}(Ft===void 0||Math.abs(br-Ft)>.1)&&(Ft=br,H.setVerticalFieldOfView?.(Ft)),Pe=Tr;let mc=Fe*180/Math.PI+C(u).bearingOffset,gc=go,_c=Fi,vc=Pe;if(vi&&C(Ze)&&C(u).id==="fps"){const rn=C(c).cockpitEyeHeight??0;mc=C(Ze).heading*180/Math.PI,gc=Ge(90-C(Ze).pitch*180/Math.PI,0,a.mapMaxPitch),vc=-(C(Ze).bank*180)/Math.PI,_c=$t+Wt.altitude+rn}if(H.jumpTo({center:ve,bearing:mc,pitch:gc,zoom:Ln,elevation:_c,roll:vc}),C(p)&&kn&&_i&&tn){const Rt=Math.min(1,Math.max(0,(Ve-a.mapMaxPitch)/20));if(Rt<=0)C(p).style.display="none";else{C(p).style.display="",C(p).style.opacity=String(Rt);const rn=Fe,xi=Wh.degToRad(Ve-90),Kr=new P(Math.sin(rn)*Math.cos(xi),Math.sin(xi),-Math.cos(rn)*Math.cos(xi));tn.position.set(0,0,0),tn.lookAt(Kr),kn.render(_i,tn)}}H.triggerRepaint()}catch(it){sn++,me(ne,sn,!0),sn===1&&me(nt,it instanceof Error?`${it.message}
${it.stack??""}`:String(it),!0),sn<=5&&console.error("[rider] frame error",it),sn===5&&console.error("[rider] further frame errors suppressed")}finally{Le=requestAnimationFrame(pc)}};Le=requestAnimationFrame(pc)}))})(),()=>{de=!0,Le&&cancelAnimationFrame(Le),window.removeEventListener("keydown",Zn),window.removeEventListener("keyup",Jn),window.removeEventListener("blur",On),document.removeEventListener("visibilitychange",Bn),window.removeEventListener("error",Gn),window.removeEventListener("unhandledrejection",oi),document.removeEventListener("mousemove",Hn),document.removeEventListener("pointerlockchange",Ni),window.removeEventListener("resize",ei),window.removeEventListener("pointerup",Qn),window.removeEventListener("pointercancel",Qn),kn?.dispose(),ge?.(),Nt?.destroy(),ht.destroy(),H?.remove()}});var At=Zy();let N;var pe=te(At);cr(pe,H=>n=H,()=>n);var G=Q(pe,2);cr(G,H=>me(p,H),()=>C(p));var ce=Q(G,2);{var J=H=>{{let ge=Yn(()=>C(Dt)&&C(u).id==="fps");xy(H,{get telemetry(){return C(Ze)},get model(){return C(c).flight.model},get visible(){return C(ge)}})}};Ut(ce,H=>{C(c).control==="flight"&&C(Ze)&&H(J)})}var he=Q(ce,2);{var ke=H=>{var ge=Iy(),de=te(ge),Le=te(de);ee(de);var Ue=Q(de,2),Fe=te(Ue);ee(Ue);var Ve=Q(Ue,2),ht=te(Ve);ee(Ve);var wt=Q(Ve,2),zt=te(wt);ee(wt);var Nt=Q(wt,2),sn=te(Nt);ee(Nt);var vt=Q(Nt,2),ln=te(vt);ee(vt);var Cn=Q(vt,2);let Tt;var Yt=te(Cn);ee(Cn);var Zn=Q(Cn,2);{var Jn=On=>{var Bn=Py(),Gn=te(Bn);ee(Bn),Gt(()=>Be(Gn,`game phase ${C(M)??""} · landings ${C(j)??""}`)),mt(On,Bn)};Ut(Zn,On=>{C(c).control==="flight"&&On(Jn)})}ee(ge),Gt((On,Bn,Gn,oi,Di,Hn,Ni,Qn,kn)=>{Be(Le,`fps ${On??""} · ${C(y)??""} draws`),Be(Fe,`render: ${C(Ee)??""} calls —
        ${C(Ye)-C(Mt)>500?"STALLED":"LIVE"}`),Be(ht,`moveX ${Bn??""} moveY ${Gn??""}`),Be(zt,`yawRate ${oi??""} pitchRate ${Di??""}
        climb ${Hn??""}`),Be(sn,`driver ${C(c).id??""} · camera ${C(u).id??""}`),Be(ln,`heading ${Ni??""}° · alt ${Qn??""}m
        · speed ${kn??""} km/h`),Tt=qt(Cn,1,"svelte-1uha8ag",null,Tt,{err:C(Te)!=="none"}),Be(Yt,`err: ${C(Te)??""}`)},[()=>Math.round(C(_)),()=>ft.moveX.toFixed(2),()=>ft.moveY.toFixed(2),()=>ft.yawRate.toFixed(2),()=>ft.pitchRate.toFixed(2),()=>vl().toFixed(2),()=>(F.heading*(180/Math.PI)).toFixed(1),()=>(F.altitude??0).toFixed(1),()=>C(h).toFixed(2)]),mt(H,ge)};Ut(he,H=>{C(x)&&H(ke)})}var St=Q(he,2);{var Bt=H=>{var ge=Ny(),de=Ka(ge),Le=te(de);ee(de);var Ue=Q(de,2);{var Fe=Ve=>{var ht=Dy(),wt=te(ht),zt=te(wt,!0);ee(wt),ee(ht),Gt(()=>Be(zt,C(nt))),mt(Ve,ht)};Ut(Ue,Ve=>{C(Ne)&&Ve(Fe)})}Gt(()=>Be(Le,`⚠ frame errors: ${C(ne)??""}`)),bt("click",de,()=>me(Ne,!C(Ne))),mt(H,ge)};Ut(St,H=>{C(ne)>0&&H(Bt)})}var ut=Q(St,2);{var Zt=H=>{var ge=Uy();mt(H,ge)};Ut(ut,H=>{C(re)&&H(Zt)})}var Rn=Q(ut,2);{var Vr=H=>{var ge=Fy();mt(H,ge)};Ut(Rn,H=>{C(Z)&&H(Vr)})}var Wr=Q(Rn,2);{var Qi=H=>{var ge=By(),de=te(ge);{var Le=ht=>{var wt=Oy(),zt=Ka(wt),Nt=te(zt);Df(Nt);var sn=Q(Nt,2),vt=te(sn);ee(sn),ee(zt);var ln=Q(zt,2);let Cn;var Tt=Q(ln,2);let Yt;Gt(Zn=>{Be(vt,`THR ${Zn??""}%`),Cn=qt(ln,1,"flight-btn svelte-1uha8ag",null,Cn,{active:C(ue)}),Yt=qt(Tt,1,"flight-btn svelte-1uha8ag",null,Yt,{active:C(ze)>0})},[()=>(C(Re)*100).toFixed(0)]),Ff(Nt,()=>C(Re),Zn=>me(Re,Zn)),bt("click",ln,()=>me(ue,!C(ue))),bt("click",Tt,()=>me(ze,C(ze)>0?0:1,!0)),mt(ht,wt)};Ut(de,ht=>{C(c).flight.model==="airplane"&&ht(Le)})}var Ue=Q(de,2),Fe=Q(Ue,2),Ve=te(Fe,!0);ee(Fe),ee(ge),Gt(()=>Be(Ve,C(Ke)?"🔇":"🔊")),bt("click",Ue,()=>Ot()),bt("click",Fe,()=>st()),mt(H,ge)};Ut(Wr,H=>{C(c).control==="flight"&&H(Qi)})}var Li=Q(Wr,2);let Pi;var zs=Q(Li,2);{var ma=H=>{var ge=Wy(),de=te(ge),Le=Q(te(de),2);ur(Le,17,()=>_e,ve=>ve.id,(ve,et)=>{var Oe=ky(),Vt=te(Oe,!0);ee(Oe),Gt(()=>{_n(Oe,"href",C(et).href),Be(Vt,C(et).label)}),mt(ve,Oe)}),ee(de);var Ue=Q(de,2),Fe=Q(te(Ue),2),Ve=te(Fe),ht=Q(Ve,2),wt=Q(ht,2),zt=Q(wt,2);let Nt;var sn=te(zt);ee(zt),ee(Fe);var vt=Q(Fe,2);ur(vt,17,()=>i.cameras,ve=>ve.id,(ve,et)=>{var Oe=Ya();let Vt;var an=te(Oe),Kt=te(an,!0);ee(an);var Vn=Q(an);ee(Oe),Gt(()=>{Vt=qt(Oe,1,"menu-item svelte-1uha8ag",null,Vt,{active:C(et).id===C(u).id}),Be(Kt,C(et).icon),Be(Vn,` ${C(et).label??""}`)}),bt("click",Oe,()=>me(u,C(et),!0)),mt(ve,Oe)}),ee(Ue);var ln=Q(Ue,2),Cn=Q(te(ln),2);ur(Cn,17,()=>i.drivers,ve=>ve.id,(ve,et)=>{var Oe=Ya();let Vt;var an=te(Oe),Kt=te(an,!0);ee(an);var Vn=Q(an);ee(Oe),Gt(()=>{Vt=qt(Oe,1,"menu-item svelte-1uha8ag",null,Vt,{active:C(et).id===C(c).id}),Be(Kt,C(et).icon),Be(Vn,` ${C(et).label??""}`)}),bt("click",Oe,()=>me(c,C(et),!0)),mt(ve,Oe)}),ee(ln);var Tt=Q(ln,2),Yt=Q(te(Tt),2);{var Zn=ve=>{var et=zy(),Oe=Ka(et);let Vt;var an=te(Oe);ee(Oe);var Kt=Q(Oe,2);let Vn;var Ui=te(Kt);ee(Kt);var mn=Q(Kt,2);let er;Gt(()=>{Vt=qt(Oe,1,"menu-item svelte-1uha8ag",null,Vt,{active:C(ue)}),Be(an,`Gear ${C(ue)?"Down":"Up"}`),Vn=qt(Kt,1,"menu-item svelte-1uha8ag",null,Vn,{active:C(ze)>0}),Be(Ui,`Flaps ${C(ze)>0?"Out":"Up"}`),er=qt(mn,1,"menu-item svelte-1uha8ag",null,er,{active:C(ae)})}),bt("click",Oe,()=>me(ue,!C(ue))),bt("click",Kt,()=>me(ze,C(ze)>0?0:1,!0)),bt("pointerdown",mn,()=>me(ae,!0)),bt("pointerup",mn,()=>me(ae,!1)),ms("pointerleave",mn,()=>me(ae,!1)),mt(ve,et)};Ut(Yt,ve=>{C(c).control==="flight"&&ve(Zn)})}var Jn=Q(Yt,2);let On;var Bn=Q(Jn,2);let Gn;var oi=Q(Bn,2);let Di;var Hn=Q(oi,2),Ni=te(Hn);ee(Hn);var Qn=Q(Hn,2);let kn;var _i=Q(Qn,2);{var tn=ve=>{var et=Hy(),Oe=te(et);ur(Oe,17,()=>Object.entries(i.keys),yl,(Vt,an)=>{var Kt=Yn(()=>bf(C(an),2));let Vn=()=>C(Kt)[0],Ui=()=>C(Kt)[1];var mn=Gy(),er=te(mn),Ws=te(er,!0);ee(er);var yr=Q(er);ee(mn),Gt(jr=>{Be(Ws,Vn()),Be(yr,`: ${jr??""}`)},[()=>Ui().join(" / ")]),mt(Vt,mn)}),xs(2),ee(et),mt(ve,et)};Ut(_i,ve=>{C(L)&&ve(tn)})}var ei=Q(_i,2);let ti;var ye=Q(ei,2);{var Ae=ve=>{var et=Vy();mt(ve,et)};Ut(ye,ve=>{C(Y)&&ve(Ae)})}ee(Tt),ee(ge),Gt(()=>{Nt=qt(zt,1,"menu-btn svelte-1uha8ag",null,Nt,{active:C(q)}),Be(sn,`3D ${C(q)?"On":"Off"}`),On=qt(Jn,1,"menu-item svelte-1uha8ag",null,On,{active:C(U)}),Gn=qt(Bn,1,"menu-item svelte-1uha8ag",null,Gn,{active:C(x)}),Di=qt(oi,1,"menu-item svelte-1uha8ag",null,Di,{active:C(Dt)}),Be(Ni,`Log Export${C(V)?` — ${C(V)}`:""}`),kn=qt(Qn,1,"menu-item svelte-1uha8ag",null,kn,{active:C(L)}),ti=qt(ei,1,"menu-item svelte-1uha8ag",null,ti,{active:C(Y)})}),bt("click",Ve,$),bt("click",ht,K),bt("click",wt,se),bt("click",zt,oe),bt("click",Jn,()=>me(U,!C(U))),bt("click",Bn,()=>{const ve=new URL(window.location.href);C(x)?ve.searchParams.delete("debug"):ve.searchParams.set("debug","1"),window.location.href=ve.toString()}),bt("click",oi,()=>me(Dt,!C(Dt))),bt("click",Hn,We),bt("click",Qn,()=>me(L,!C(L))),bt("click",ei,()=>me(Y,!C(Y))),mt(H,ge)};Ut(zs,H=>{C(E)&&H(ma)})}var Gs=Q(zs,2),Hs=te(Gs),ga=te(Hs);{var T=H=>{var ge=Xy();ur(ge,21,()=>i.cameras,de=>de.id,(de,Le)=>{var Ue=Ya();let Fe;var Ve=te(Ue),ht=te(Ve,!0);ee(Ve);var wt=Q(Ve);ee(Ue),Gt(()=>{Fe=qt(Ue,1,"fab-popup-item svelte-1uha8ag",null,Fe,{active:C(Le).id===C(u).id}),Be(ht,C(Le).icon),Be(wt,` ${C(Le).label??""}`)}),bt("click",Ue,()=>{me(u,C(Le),!0),me(O,!1)}),mt(de,Ue)}),ee(ge),mt(H,ge)};Ut(ga,H=>{C(O)&&H(T)})}var B=Q(ga,2),W=te(B,!0);ee(B),ee(Hs);var X=Q(Hs,2),z=te(X);{var xe=H=>{var ge=qy();ur(ge,21,()=>i.drivers,de=>de.id,(de,Le)=>{var Ue=Ya();let Fe;var Ve=te(Ue),ht=te(Ve,!0);ee(Ve);var wt=Q(Ve);ee(Ue),Gt(()=>{Fe=qt(Ue,1,"fab-popup-item svelte-1uha8ag",null,Fe,{active:C(Le).id===C(c).id}),Be(ht,C(Le).icon),Be(wt,` ${C(Le).label??""}`)}),bt("click",Ue,()=>{me(c,C(Le),!0),me(k,!1)}),mt(de,Ue)}),ee(ge),mt(H,ge)};Ut(z,H=>{C(k)&&H(xe)})}var Ce=Q(z,2),Xe=te(Ce,!0);ee(Ce),ee(X),ee(Gs);var $e=Q(Gs,2),ct=te($e);{var at=H=>{var ge=jy();let de;var Le=te(ge);cr(Le,zt=>me(g,zt),()=>C(g));var Ue=Q(Le,2),Fe=te(Ue),Ve=te(Fe);ee(Fe);var ht=Q(Fe,2),wt=te(ht);ee(ht),ee(Ue),ee(ge),Gt(zt=>{de=qt(ge,1,"perf svelte-1uha8ag",null,de,{warn:C(f)>16,bad:C(f)>33}),_n(ge,"aria-expanded",C(m)),Be(Ve,`${zt??""} fps`),Be(wt,`${C(y)??""} draws`)},[()=>Math.round(C(_))]),bt("click",ge,()=>me(m,!C(m))),mt(H,ge)};Ut(ct,H=>{C(U)&&H(at)})}var lt=Q(ct,2);{var Jt=H=>{var ge=Ky(),de=te(ge),Le=Q(te(de),2);cr(Le,tn=>me(S,tn),()=>C(S));var Ue=Q(Le,2),Fe=te(Ue,!0);ee(Ue),ee(de);var Ve=Q(de,2),ht=Q(te(Ve),2);cr(ht,tn=>me(I,tn),()=>C(I));var wt=Q(ht,2);let zt;var Nt=te(wt);ee(wt),ee(Ve);var sn=Q(Ve,2),vt=Q(te(sn),2);cr(vt,tn=>me(D,tn),()=>C(D));var ln=Q(vt,2),Cn=te(ln,!0);ee(ln),ee(sn);var Tt=Q(sn,2),Yt=Q(te(Tt)),Zn=te(Yt,!0);ee(Yt),ee(Tt);var Jn=Q(Tt,2),On=Q(te(Jn)),Bn=te(On,!0);ee(On),ee(Jn);var Gn=Q(Jn,2),oi=Q(te(Gn)),Di=te(oi,!0);ee(oi),ee(Gn);var Hn=Q(Gn,2),Ni=Q(te(Hn)),Qn=te(Ni,!0);ee(Ni),ee(Hn);var kn=Q(Hn,2);{var _i=tn=>{var ei=Yy(),ti=Q(te(ei)),ye=te(ti);ee(ti),ee(ei),Gt(Ae=>Be(ye,`${Ae??""} MB`),[()=>C(w).toFixed(1)]),mt(tn,ei)};Ut(kn,tn=>{C(w)!=null&&tn(_i)})}ee(ge),Gt((tn,ei,ti)=>{Be(Fe,tn),zt=qt(wt,1,"perf-num svelte-1uha8ag",null,zt,{warn:C(f)>16,bad:C(f)>33}),Be(Nt,`${ei??""} ms`),Be(Cn,C(y)),Be(Zn,C(y)),Be(Bn,ti),Be(Di,C(A)),Be(Qn,C(b))},[()=>Math.round(C(_)),()=>C(f).toFixed(1),()=>C(v).toLocaleString()]),mt(H,ge)};Ut(lt,H=>{C(U)&&C(m)&&H(Jt)})}ee($e);var yn=Q($e,2),nn=te(yn),$n=Q(nn),Xt=te($n);ee($n),xs(),ee(yn);var ot=Q(yn,2),Xr=te(ot),kt=Q(Xr),Ii=te(kt);ee(kt),xs(),ee(ot);var Vs=Q(ot,2);{var Mr=H=>{var ge=$y(),de=te(ge),Le=Q(de,2);ee(ge),bt("pointerdown",de,()=>ft.climbPointer=1),bt("pointerup",de,()=>ft.climbPointer=0),ms("pointerleave",de,()=>ft.climbPointer=0),ms("pointercancel",de,()=>ft.climbPointer=0),bt("pointerdown",Le,()=>ft.climbPointer=-1),bt("pointerup",Le,()=>ft.climbPointer=0),ms("pointerleave",Le,()=>ft.climbPointer=0),ms("pointercancel",Le,()=>ft.climbPointer=0),mt(H,ge)};Ut(Vs,H=>{C(c).altitude.climbRate>0&&H(Mr)})}var qr=Q(Vs,2);bh(qr,{side:"left",channel:"drive",get scale(){return s.scale}});var pn=Q(qr,2);bh(pn,{side:"right",channel:"look",get scale(){return s.scale}}),ee(At),Gt((H,ge)=>{N=qt(At,1,"map-wrap svelte-1uha8ag",null,N,{shake:C(re)}),Pi=qt(Li,1,"hamburger svelte-1uha8ag",null,Pi,{active:C(E)}),_n(Li,"aria-expanded",C(E)),Be(W,C(u).icon),Be(Xe,C(c).icon),Be(nn,`${H??""} `),Be(Xt,`/ ${C(c).speed.max??""}`),Be(Xr,`${ge??""} `),Be(Ii,`/ ${C(c).altitude.max??""}`)},[()=>Math.round(C(h)),()=>Math.round(C(d))]),bt("click",Li,()=>me(E,!C(E))),bt("click",B,()=>{me(O,!C(O)),me(k,!1)}),bt("click",Ce,()=>{me(k,!C(k)),me(O,!1)}),mt(r,At),Hl()}Ch(["click","pointerdown","pointerup"]);export{rS as component};
