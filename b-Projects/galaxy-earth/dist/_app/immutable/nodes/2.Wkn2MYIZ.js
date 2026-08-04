const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["../chunks/CTQ6XGXZ.js","../chunks/CqkleIqs.js","../chunks/5L1ekbnn.js","../assets/maplibre-gl.kWVbv8B-.css"])))=>i.map(i=>d[i]);
import{p as Or,b as Si,i as Lt,_ as Co}from"../chunks/CGO9D-Q1.js";import{a as ht,f as gt,c as Uc}from"../chunks/Dy0kLqL2.js";import{a as Kd,o as $d}from"../chunks/CgkrWa4o.js";import{h as Jn,x as Lo,n as Zd,a as Po,v as Jd,i as Qd,C as R,N as ef,O as tf,P as Fc,Q as Io,e as wa,aa as nf,aE as rf,am as Oc,c as _s,b as Rl,aL as sf,s as af,aM as Gh,a5 as of,aN as lf,aC as Yl,aO as cf,a8 as Bc,aP as uf,aQ as hf,aH as df,aR as ji,r as Hh,p as Vh,aS as Do,U as Wh,aT as ff,aU as pf,aB as mf,d as gf,ay as _f,aV as vf,aW as xf,aX as yf,aY as Mf,aZ as Sf,a_ as Ef,aI as bf,g as Tf,S as Af,a$ as wf,H as jl,u as ia,I as Bt,J as Kl,_ as ge,aJ as Ye,K as te,L as ee,j as aa,M as Q,an as Ss,aK as Zn,Z as No,b0 as Rf,b1 as Cf,b2 as Lf}from"../chunks/C1tdXsKQ.js";import{d as Xh,e as vs,s as Ue}from"../chunks/BL-iWYY_.js";function ro(r,e){return e}function Pf(r,e,t){for(var n=[],i=e.length,s,a=e.length,o=0;o<i;o++){let h=e[o];Vh(h,()=>{if(s){if(s.pending.delete(h),s.done.add(h),s.pending.size===0){var d=r.outrogroups;Cl(Yl(s.done)),d.delete(s),d.size===0&&(r.outrogroups=null)}}else a-=1},!1)}if(a===0){var l=n.length===0&&t!==null;if(l){var c=t,u=c.parentNode;mf(u),u.append(c),r.items.clear()}Cl(e,!l)}else s={pending:new Set(e),done:new Set},(r.outrogroups??(r.outrogroups=new Set)).add(s)}function Cl(r,e=!0){for(var t=0;t<r.length;t++)gf(r[t],e)}var kc;function Yi(r,e,t,n,i,s=null){var a=r,o=new Map,l=(e&Gh)!==0;if(l){var c=r;a=Jn?Lo(Zd(c)):c.appendChild(Po())}Jn&&Jd();var u=null,h=of(()=>{var p=t();return lf(p)?p:p==null?[]:Yl(p)}),d,m=!0;function g(){f.fallback=u,If(f,d,a,e,n),u!==null&&(d.length===0?(u.f&ji)===0?Hh(u):(u.f^=ji,ra(u,null,a)):Vh(u,()=>{u=null}))}var _=Qd(()=>{d=R(h);var p=d.length;let M=!1;if(Jn){var v=ef(a)===tf;v!==(p===0)&&(a=Fc(),Lo(a),Io(!1),M=!0)}for(var T=new Set,E=_s,w=af(),S=0;S<p;S+=1){Jn&&wa.nodeType===nf&&wa.data===rf&&(a=wa,M=!0,Io(!1));var P=d[S],D=n(P,S),x=m?null:o.get(D);x?(x.v&&Oc(x.v,P),x.i&&Oc(x.i,S),w&&E.unskip_effect(x.e)):(x=Df(o,m?a:kc??(kc=Po()),P,D,S,i,e,t),m||(x.e.f|=ji),o.set(D,x)),T.add(D)}if(p===0&&s&&!u&&(m?u=Rl(()=>s(a)):(u=Rl(()=>s(kc??(kc=Po()))),u.f|=ji)),p>T.size&&sf(),Jn&&p>0&&Lo(Fc()),!m)if(w){for(const[b,U]of o)T.has(b)||E.skip_effect(U.e);E.oncommit(g),E.ondiscard(()=>{})}else g();M&&Io(!0),R(h)}),f={effect:_,items:o,outrogroups:null,fallback:u};m=!1,Jn&&(a=wa)}function js(r){for(;r!==null&&(r.f&ff)===0;)r=r.next;return r}function If(r,e,t,n,i){var s=(n&pf)!==0,a=e.length,o=r.items,l=js(r.effect.first),c,u=null,h,d=[],m=[],g,_,f,p;if(s)for(p=0;p<a;p+=1)g=e[p],_=i(g,p),f=o.get(_).e,(f.f&ji)===0&&(f.nodes?.a?.measure(),(h??(h=new Set)).add(f));for(p=0;p<a;p+=1){if(g=e[p],_=i(g,p),f=o.get(_).e,r.outrogroups!==null)for(const x of r.outrogroups)x.pending.delete(f),x.done.delete(f);if((f.f&ji)!==0)if(f.f^=ji,f===l)ra(f,null,t);else{var M=u?u.next:l;f===r.effect.last&&(r.effect.last=f.prev),f.prev&&(f.prev.next=f.next),f.next&&(f.next.prev=f.prev),ir(r,u,f),ir(r,f,M),ra(f,M,t),u=f,d=[],m=[],l=js(u.next);continue}if((f.f&Do)!==0&&(Hh(f),s&&(f.nodes?.a?.unfix(),(h??(h=new Set)).delete(f))),f!==l){if(c!==void 0&&c.has(f)){if(d.length<m.length){var v=m[0],T;u=v.prev;var E=d[0],w=d[d.length-1];for(T=0;T<d.length;T+=1)ra(d[T],v,t);for(T=0;T<m.length;T+=1)c.delete(m[T]);ir(r,E.prev,w.next),ir(r,u,E),ir(r,w,v),l=v,u=w,p-=1,d=[],m=[]}else c.delete(f),ra(f,l,t),ir(r,f.prev,f.next),ir(r,f,u===null?r.effect.first:u.next),ir(r,u,f),u=f;continue}for(d=[],m=[];l!==null&&l!==f;)(c??(c=new Set)).add(l),m.push(l),l=js(l.next);if(l===null)continue}(f.f&ji)===0&&d.push(f),u=f,l=js(f.next)}if(r.outrogroups!==null){for(const x of r.outrogroups)x.pending.size===0&&(Cl(Yl(x.done)),r.outrogroups?.delete(x));r.outrogroups.size===0&&(r.outrogroups=null)}if(l!==null||c!==void 0){var S=[];if(c!==void 0)for(f of c)(f.f&Do)===0&&S.push(f);for(;l!==null;)(l.f&Do)===0&&l!==r.fallback&&S.push(l),l=js(l.next);var P=S.length;if(P>0){var D=(n&Gh)!==0&&a===0?t:null;if(s){for(p=0;p<P;p+=1)S[p].nodes?.a?.measure();for(p=0;p<P;p+=1)S[p].nodes?.a?.fix()}Pf(r,S,D)}}s&&Wh(()=>{if(h!==void 0)for(f of h)f.nodes?.a?.apply()})}function Df(r,e,t,n,i,s,a,o){var l=(a&uf)!==0?(a&hf)===0?df(t,!1,!1):Bc(t):null,c=(a&cf)!==0?Bc(i):null;return{v:l,i:c,e:Rl(()=>(s(e,l??t,c??i,o),()=>{r.delete(n)}))}}function ra(r,e,t){if(r.nodes)for(var n=r.nodes.start,i=r.nodes.end,s=e&&(e.f&ji)===0?e.nodes.start:t;n!==null;){var a=_f(n);if(s.before(n),n===i)return;n=a}}function ir(r,e,t){e===null?r.effect.first=t:e.next=t,t===null?r.effect.last=e:t.prev=e}const zc=[...` 	
\r\f \v\uFEFF`];function Nf(r,e,t){var n=r==null?"":""+r;if(t){for(var i in t)if(t[i])n=n?n+" "+i:i;else if(n.length)for(var s=i.length,a=0;(a=n.indexOf(i,a))>=0;){var o=a+s;(a===0||zc.includes(n[a-1]))&&(o===n.length||zc.includes(n[o]))?n=(a===0?"":n.substring(0,a))+n.substring(o+1):a=o}}return n===""?null:n}function Uf(r,e){return r==null?null:String(r)}function qt(r,e,t,n,i,s){var a=r.__className;if(Jn||a!==t||a===void 0){var o=Nf(t,n,s);(!Jn||o!==r.getAttribute("class"))&&(o==null?r.removeAttribute("class"):r.className=o),r.__className=t}else if(s&&i!==s)for(var l in s){var c=!!s[l];(i==null||c!==!!i[l])&&r.classList.toggle(l,c)}return s}function Xi(r,e,t,n){var i=r.__style;if(Jn||i!==e){var s=Uf(e);(!Jn||s!==r.getAttribute("style"))&&(s==null?r.removeAttribute("style"):r.style.cssText=s),r.__style=e}return n}const Ff=Symbol("is custom element"),Of=Symbol("is html");function Bf(r){if(Jn){var e=!1,t=()=>{if(!e){if(e=!0,r.hasAttribute("value")){var n=r.value;vn(r,"value",null),r.value=n}if(r.hasAttribute("checked")){var i=r.checked;vn(r,"checked",null),r.checked=i}}};r.__on_r=t,Wh(t),Sf()}}function vn(r,e,t,n){var i=kf(r);Jn&&(i[e]=r.getAttribute(e),e==="src"||e==="srcset"||e==="href"&&r.nodeName==="LINK")||i[e]!==(i[e]=t)&&(e==="loading"&&(r[vf]=t),t==null?r.removeAttribute(e):typeof t!="string"&&zf(r).includes(e)?r[e]=t:r.setAttribute(e,t))}function kf(r){return r.__attributes??(r.__attributes={[Ff]:r.nodeName.includes("-"),[Of]:r.namespaceURI===xf})}var Gc=new Map;function zf(r){var e=r.getAttribute("is")||r.nodeName,t=Gc.get(e);if(t)return t;Gc.set(e,t=[]);for(var n,i=r,s=Element.prototype;s!==i;){n=Mf(i);for(var a in n)n[a].set&&t.push(a);i=yf(i)}return t}function Gf(r,e,t=e){var n=new WeakSet;Ef(r,"input",async i=>{var s=i?r.defaultValue:r.value;if(s=Uo(r)?Fo(s):s,t(s),_s!==null&&n.add(_s),await bf(),s!==(s=e())){var a=r.selectionStart,o=r.selectionEnd,l=r.value.length;if(r.value=s??"",o!==null){var c=r.value.length;a===o&&o===l&&c>l?(r.selectionStart=c,r.selectionEnd=c):(r.selectionStart=a,r.selectionEnd=Math.min(o,c))}}}),(Jn&&r.defaultValue!==r.value||Tf(e)==null&&r.value)&&(t(Uo(r)?Fo(r.value):r.value),_s!==null&&n.add(_s)),Af(()=>{var i=e();if(r===document.activeElement){var s=wf??_s;if(n.has(s))return}Uo(r)&&i===Fo(r.value)||r.type==="date"&&!i&&!r.value||i!==r.value&&(r.value=i??"")})}function Uo(r){var e=r.type;return e==="number"||e==="range"}function Fo(r){return r===""?null:+r}const $l="162",Hf=0,Hc=1,Vf=2,qh=1,Wf=2,qi=3,Ji=0,Bn=1,bi=2,gr=0,Es=1,Vc=2,Wc=3,Xc=4,Xf=5,zr=100,qf=101,Yf=102,qc=103,Yc=104,jf=200,Kf=201,$f=202,Zf=203,Ll=204,Pl=205,Jf=206,Qf=207,ep=208,tp=209,np=210,ip=211,rp=212,sp=213,ap=214,op=0,lp=1,cp=2,so=3,up=4,hp=5,dp=6,fp=7,Yh=0,pp=1,mp=2,_r=0,gp=1,_p=2,vp=3,xp=4,yp=5,Mp=6,Sp=7,jc="attached",Ep="detached",jh=300,ws=301,Rs=302,Il=303,Dl=304,fo=306,Cs=1e3,ii=1001,ao=1002,xn=1003,Nl=1004,xs=1005,Pn=1006,no=1007,Ki=1008,vr=1009,bp=1010,Tp=1011,Zl=1012,Kh=1013,pr=1014,pi=1015,da=1016,$h=1017,Zh=1018,Vr=1020,Ap=1021,ri=1023,wp=1024,Rp=1025,Wr=1026,Ls=1027,Jh=1028,Qh=1029,Cp=1030,ed=1031,td=1033,Oo=33776,Bo=33777,ko=33778,zo=33779,Kc=35840,$c=35841,Zc=35842,Jc=35843,nd=36196,Qc=37492,eu=37496,tu=37808,nu=37809,iu=37810,ru=37811,su=37812,au=37813,ou=37814,lu=37815,cu=37816,uu=37817,hu=37818,du=37819,fu=37820,pu=37821,Go=36492,mu=36494,gu=36495,Lp=36283,_u=36284,vu=36285,xu=36286,fa=2300,Ps=2301,Ho=2302,yu=2400,Mu=2401,Su=2402,Pp=2500,Ip=0,id=1,Ul=2,Dp=3200,Np=3201,rd=0,Up=1,dr="",Fn="srgb",Tn="srgb-linear",Jl="display-p3",po="display-p3-linear",oo="linear",Yt="srgb",lo="rec709",co="p3",es=7680,Eu=519,Fp=512,Op=513,Bp=514,sd=515,kp=516,zp=517,Gp=518,Hp=519,Fl=35044,bu="300 es",Ol=1035,$i=2e3,uo=2001;class Bs{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const n=this._listeners;return n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const i=this._listeners[e];if(i!==void 0){const s=i.indexOf(t);s!==-1&&i.splice(s,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const n=this._listeners[e.type];if(n!==void 0){e.target=this;const i=n.slice(0);for(let s=0,a=i.length;s<a;s++)i[s].call(this,e);e.target=null}}}const Cn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let Tu=1234567;const oa=Math.PI/180,Is=180/Math.PI;function _i(){const r=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Cn[r&255]+Cn[r>>8&255]+Cn[r>>16&255]+Cn[r>>24&255]+"-"+Cn[e&255]+Cn[e>>8&255]+"-"+Cn[e>>16&15|64]+Cn[e>>24&255]+"-"+Cn[t&63|128]+Cn[t>>8&255]+"-"+Cn[t>>16&255]+Cn[t>>24&255]+Cn[n&255]+Cn[n>>8&255]+Cn[n>>16&255]+Cn[n>>24&255]).toLowerCase()}function hn(r,e,t){return Math.max(e,Math.min(t,r))}function Ql(r,e){return(r%e+e)%e}function Vp(r,e,t,n,i){return n+(r-e)*(i-n)/(t-e)}function Wp(r,e,t){return r!==e?(t-r)/(e-r):0}function la(r,e,t){return(1-t)*r+t*e}function Xp(r,e,t,n){return la(r,e,1-Math.exp(-t*n))}function qp(r,e=1){return e-Math.abs(Ql(r,e*2)-e)}function Yp(r,e,t){return r<=e?0:r>=t?1:(r=(r-e)/(t-e),r*r*(3-2*r))}function jp(r,e,t){return r<=e?0:r>=t?1:(r=(r-e)/(t-e),r*r*r*(r*(r*6-15)+10))}function Kp(r,e){return r+Math.floor(Math.random()*(e-r+1))}function $p(r,e){return r+Math.random()*(e-r)}function Zp(r){return r*(.5-Math.random())}function Jp(r){r!==void 0&&(Tu=r);let e=Tu+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function Qp(r){return r*oa}function em(r){return r*Is}function Bl(r){return(r&r-1)===0&&r!==0}function tm(r){return Math.pow(2,Math.ceil(Math.log(r)/Math.LN2))}function ho(r){return Math.pow(2,Math.floor(Math.log(r)/Math.LN2))}function nm(r,e,t,n,i){const s=Math.cos,a=Math.sin,o=s(t/2),l=a(t/2),c=s((e+n)/2),u=a((e+n)/2),h=s((e-n)/2),d=a((e-n)/2),m=s((n-e)/2),g=a((n-e)/2);switch(i){case"XYX":r.set(o*u,l*h,l*d,o*c);break;case"YZY":r.set(l*d,o*u,l*h,o*c);break;case"ZXZ":r.set(l*h,l*d,o*u,o*c);break;case"XZX":r.set(o*u,l*g,l*m,o*c);break;case"YXY":r.set(l*m,o*u,l*g,o*c);break;case"ZYZ":r.set(l*g,l*m,o*u,o*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+i)}}function mi(r,e){switch(e.constructor){case Float32Array:return r;case Uint32Array:return r/4294967295;case Uint16Array:return r/65535;case Uint8Array:return r/255;case Int32Array:return Math.max(r/2147483647,-1);case Int16Array:return Math.max(r/32767,-1);case Int8Array:return Math.max(r/127,-1);default:throw new Error("Invalid component type.")}}function Dt(r,e){switch(e.constructor){case Float32Array:return r;case Uint32Array:return Math.round(r*4294967295);case Uint16Array:return Math.round(r*65535);case Uint8Array:return Math.round(r*255);case Int32Array:return Math.round(r*2147483647);case Int16Array:return Math.round(r*32767);case Int8Array:return Math.round(r*127);default:throw new Error("Invalid component type.")}}const ad={DEG2RAD:oa,RAD2DEG:Is,generateUUID:_i,clamp:hn,euclideanModulo:Ql,mapLinear:Vp,inverseLerp:Wp,lerp:la,damp:Xp,pingpong:qp,smoothstep:Yp,smootherstep:jp,randInt:Kp,randFloat:$p,randFloatSpread:Zp,seededRandom:Jp,degToRad:Qp,radToDeg:em,isPowerOfTwo:Bl,ceilPowerOfTwo:tm,floorPowerOfTwo:ho,setQuaternionFromProperEuler:nm,normalize:Dt,denormalize:mi};class be{constructor(e=0,t=0){be.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,i=e.elements;return this.x=i[0]*t+i[3]*n+i[6],this.y=i[1]*t+i[4]*n+i[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(hn(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),i=Math.sin(t),s=this.x-e.x,a=this.y-e.y;return this.x=s*n-a*i+e.x,this.y=s*i+a*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class mt{constructor(e,t,n,i,s,a,o,l,c){mt.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,i,s,a,o,l,c)}set(e,t,n,i,s,a,o,l,c){const u=this.elements;return u[0]=e,u[1]=i,u[2]=o,u[3]=t,u[4]=s,u[5]=l,u[6]=n,u[7]=a,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,s=this.elements,a=n[0],o=n[3],l=n[6],c=n[1],u=n[4],h=n[7],d=n[2],m=n[5],g=n[8],_=i[0],f=i[3],p=i[6],M=i[1],v=i[4],T=i[7],E=i[2],w=i[5],S=i[8];return s[0]=a*_+o*M+l*E,s[3]=a*f+o*v+l*w,s[6]=a*p+o*T+l*S,s[1]=c*_+u*M+h*E,s[4]=c*f+u*v+h*w,s[7]=c*p+u*T+h*S,s[2]=d*_+m*M+g*E,s[5]=d*f+m*v+g*w,s[8]=d*p+m*T+g*S,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],i=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],u=e[8];return t*a*u-t*o*c-n*s*u+n*o*l+i*s*c-i*a*l}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],u=e[8],h=u*a-o*c,d=o*l-u*s,m=c*s-a*l,g=t*h+n*d+i*m;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const _=1/g;return e[0]=h*_,e[1]=(i*c-u*n)*_,e[2]=(o*n-i*a)*_,e[3]=d*_,e[4]=(u*t-i*l)*_,e[5]=(i*s-o*t)*_,e[6]=m*_,e[7]=(n*l-c*t)*_,e[8]=(a*t-n*s)*_,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,i,s,a,o){const l=Math.cos(s),c=Math.sin(s);return this.set(n*l,n*c,-n*(l*a+c*o)+a+e,-i*c,i*l,-i*(-c*a+l*o)+o+t,0,0,1),this}scale(e,t){return this.premultiply(Vo.makeScale(e,t)),this}rotate(e){return this.premultiply(Vo.makeRotation(-e)),this}translate(e,t){return this.premultiply(Vo.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<9;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Vo=new mt;function od(r){for(let e=r.length-1;e>=0;--e)if(r[e]>=65535)return!0;return!1}function pa(r){return document.createElementNS("http://www.w3.org/1999/xhtml",r)}function im(){const r=pa("canvas");return r.style.display="block",r}const Au={};function ld(r){r in Au||(Au[r]=!0,console.warn(r))}const wu=new mt().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),Ru=new mt().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),Ra={[Tn]:{transfer:oo,primaries:lo,toReference:r=>r,fromReference:r=>r},[Fn]:{transfer:Yt,primaries:lo,toReference:r=>r.convertSRGBToLinear(),fromReference:r=>r.convertLinearToSRGB()},[po]:{transfer:oo,primaries:co,toReference:r=>r.applyMatrix3(Ru),fromReference:r=>r.applyMatrix3(wu)},[Jl]:{transfer:Yt,primaries:co,toReference:r=>r.convertSRGBToLinear().applyMatrix3(Ru),fromReference:r=>r.applyMatrix3(wu).convertLinearToSRGB()}},rm=new Set([Tn,po]),Pt={enabled:!0,_workingColorSpace:Tn,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(r){if(!rm.has(r))throw new Error(`Unsupported working color space, "${r}".`);this._workingColorSpace=r},convert:function(r,e,t){if(this.enabled===!1||e===t||!e||!t)return r;const n=Ra[e].toReference,i=Ra[t].fromReference;return i(n(r))},fromWorkingColorSpace:function(r,e){return this.convert(r,this._workingColorSpace,e)},toWorkingColorSpace:function(r,e){return this.convert(r,e,this._workingColorSpace)},getPrimaries:function(r){return Ra[r].primaries},getTransfer:function(r){return r===dr?oo:Ra[r].transfer}};function bs(r){return r<.04045?r*.0773993808:Math.pow(r*.9478672986+.0521327014,2.4)}function Wo(r){return r<.0031308?r*12.92:1.055*Math.pow(r,.41666)-.055}let ts;class cd{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{ts===void 0&&(ts=pa("canvas")),ts.width=e.width,ts.height=e.height;const n=ts.getContext("2d");e instanceof ImageData?n.putImageData(e,0,0):n.drawImage(e,0,0,e.width,e.height),t=ts}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=pa("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const i=n.getImageData(0,0,e.width,e.height),s=i.data;for(let a=0;a<s.length;a++)s[a]=bs(s[a]/255)*255;return n.putImageData(i,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(bs(t[n]/255)*255):t[n]=bs(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let sm=0;class ud{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:sm++}),this.uuid=_i(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let s;if(Array.isArray(i)){s=[];for(let a=0,o=i.length;a<o;a++)i[a].isDataTexture?s.push(Xo(i[a].image)):s.push(Xo(i[a]))}else s=Xo(i);n.url=s}return t||(e.images[this.uuid]=n),n}}function Xo(r){return typeof HTMLImageElement<"u"&&r instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&r instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&r instanceof ImageBitmap?cd.getDataURL(r):r.data?{data:Array.from(r.data),width:r.width,height:r.height,type:r.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let am=0;class yn extends Bs{constructor(e=yn.DEFAULT_IMAGE,t=yn.DEFAULT_MAPPING,n=ii,i=ii,s=Pn,a=Ki,o=ri,l=vr,c=yn.DEFAULT_ANISOTROPY,u=dr){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:am++}),this.uuid=_i(),this.name="",this.source=new ud(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=i,this.magFilter=s,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new be(0,0),this.repeat=new be(1,1),this.center=new be(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new mt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==jh)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Cs:e.x=e.x-Math.floor(e.x);break;case ii:e.x=e.x<0?0:1;break;case ao:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Cs:e.y=e.y-Math.floor(e.y);break;case ii:e.y=e.y<0?0:1;break;case ao:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}}yn.DEFAULT_IMAGE=null;yn.DEFAULT_MAPPING=jh;yn.DEFAULT_ANISOTROPY=1;class Vt{constructor(e=0,t=0,n=0,i=1){Vt.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=i}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,i){return this.x=e,this.y=t,this.z=n,this.w=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,s=this.w,a=e.elements;return this.x=a[0]*t+a[4]*n+a[8]*i+a[12]*s,this.y=a[1]*t+a[5]*n+a[9]*i+a[13]*s,this.z=a[2]*t+a[6]*n+a[10]*i+a[14]*s,this.w=a[3]*t+a[7]*n+a[11]*i+a[15]*s,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,i,s;const l=e.elements,c=l[0],u=l[4],h=l[8],d=l[1],m=l[5],g=l[9],_=l[2],f=l[6],p=l[10];if(Math.abs(u-d)<.01&&Math.abs(h-_)<.01&&Math.abs(g-f)<.01){if(Math.abs(u+d)<.1&&Math.abs(h+_)<.1&&Math.abs(g+f)<.1&&Math.abs(c+m+p-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const v=(c+1)/2,T=(m+1)/2,E=(p+1)/2,w=(u+d)/4,S=(h+_)/4,P=(g+f)/4;return v>T&&v>E?v<.01?(n=0,i=.707106781,s=.707106781):(n=Math.sqrt(v),i=w/n,s=S/n):T>E?T<.01?(n=.707106781,i=0,s=.707106781):(i=Math.sqrt(T),n=w/i,s=P/i):E<.01?(n=.707106781,i=.707106781,s=0):(s=Math.sqrt(E),n=S/s,i=P/s),this.set(n,i,s,t),this}let M=Math.sqrt((f-g)*(f-g)+(h-_)*(h-_)+(d-u)*(d-u));return Math.abs(M)<.001&&(M=1),this.x=(f-g)/M,this.y=(h-_)/M,this.z=(d-u)/M,this.w=Math.acos((c+m+p-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class om extends Bs{constructor(e=1,t=1,n={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new Vt(0,0,e,t),this.scissorTest=!1,this.viewport=new Vt(0,0,e,t);const i={width:e,height:t,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Pn,depthBuffer:!0,stencilBuffer:!1,depthTexture:null,samples:0,count:1},n);const s=new yn(i,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);s.flipY=!1,s.generateMipmaps=n.generateMipmaps,s.internalFormat=n.internalFormat,this.textures=[];const a=n.count;for(let o=0;o<a;o++)this.textures[o]=s.clone(),this.textures[o].isRenderTargetTexture=!0;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let i=0,s=this.textures.length;i<s;i++)this.textures[i].image.width=e,this.textures[i].image.height=t,this.textures[i].image.depth=n;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let n=0,i=e.textures.length;n<i;n++)this.textures[n]=e.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new ud(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Xr extends om{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}}class hd extends yn{constructor(e=null,t=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=xn,this.minFilter=xn,this.wrapR=ii,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class lm extends yn{constructor(e=null,t=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=xn,this.minFilter=xn,this.wrapR=ii,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class xr{constructor(e=0,t=0,n=0,i=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=i}static slerpFlat(e,t,n,i,s,a,o){let l=n[i+0],c=n[i+1],u=n[i+2],h=n[i+3];const d=s[a+0],m=s[a+1],g=s[a+2],_=s[a+3];if(o===0){e[t+0]=l,e[t+1]=c,e[t+2]=u,e[t+3]=h;return}if(o===1){e[t+0]=d,e[t+1]=m,e[t+2]=g,e[t+3]=_;return}if(h!==_||l!==d||c!==m||u!==g){let f=1-o;const p=l*d+c*m+u*g+h*_,M=p>=0?1:-1,v=1-p*p;if(v>Number.EPSILON){const E=Math.sqrt(v),w=Math.atan2(E,p*M);f=Math.sin(f*w)/E,o=Math.sin(o*w)/E}const T=o*M;if(l=l*f+d*T,c=c*f+m*T,u=u*f+g*T,h=h*f+_*T,f===1-o){const E=1/Math.sqrt(l*l+c*c+u*u+h*h);l*=E,c*=E,u*=E,h*=E}}e[t]=l,e[t+1]=c,e[t+2]=u,e[t+3]=h}static multiplyQuaternionsFlat(e,t,n,i,s,a){const o=n[i],l=n[i+1],c=n[i+2],u=n[i+3],h=s[a],d=s[a+1],m=s[a+2],g=s[a+3];return e[t]=o*g+u*h+l*m-c*d,e[t+1]=l*g+u*d+c*h-o*m,e[t+2]=c*g+u*m+o*d-l*h,e[t+3]=u*g-o*h-l*d-c*m,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,i){return this._x=e,this._y=t,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const n=e._x,i=e._y,s=e._z,a=e._order,o=Math.cos,l=Math.sin,c=o(n/2),u=o(i/2),h=o(s/2),d=l(n/2),m=l(i/2),g=l(s/2);switch(a){case"XYZ":this._x=d*u*h+c*m*g,this._y=c*m*h-d*u*g,this._z=c*u*g+d*m*h,this._w=c*u*h-d*m*g;break;case"YXZ":this._x=d*u*h+c*m*g,this._y=c*m*h-d*u*g,this._z=c*u*g-d*m*h,this._w=c*u*h+d*m*g;break;case"ZXY":this._x=d*u*h-c*m*g,this._y=c*m*h+d*u*g,this._z=c*u*g+d*m*h,this._w=c*u*h-d*m*g;break;case"ZYX":this._x=d*u*h-c*m*g,this._y=c*m*h+d*u*g,this._z=c*u*g-d*m*h,this._w=c*u*h+d*m*g;break;case"YZX":this._x=d*u*h+c*m*g,this._y=c*m*h+d*u*g,this._z=c*u*g-d*m*h,this._w=c*u*h-d*m*g;break;case"XZY":this._x=d*u*h-c*m*g,this._y=c*m*h-d*u*g,this._z=c*u*g+d*m*h,this._w=c*u*h+d*m*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,i=Math.sin(n);return this._x=e.x*i,this._y=e.y*i,this._z=e.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],i=t[4],s=t[8],a=t[1],o=t[5],l=t[9],c=t[2],u=t[6],h=t[10],d=n+o+h;if(d>0){const m=.5/Math.sqrt(d+1);this._w=.25/m,this._x=(u-l)*m,this._y=(s-c)*m,this._z=(a-i)*m}else if(n>o&&n>h){const m=2*Math.sqrt(1+n-o-h);this._w=(u-l)/m,this._x=.25*m,this._y=(i+a)/m,this._z=(s+c)/m}else if(o>h){const m=2*Math.sqrt(1+o-n-h);this._w=(s-c)/m,this._x=(i+a)/m,this._y=.25*m,this._z=(l+u)/m}else{const m=2*Math.sqrt(1+h-n-o);this._w=(a-i)/m,this._x=(s+c)/m,this._y=(l+u)/m,this._z=.25*m}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<Number.EPSILON?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(hn(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const i=Math.min(1,t/n);return this.slerp(e,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,i=e._y,s=e._z,a=e._w,o=t._x,l=t._y,c=t._z,u=t._w;return this._x=n*u+a*o+i*c-s*l,this._y=i*u+a*l+s*o-n*c,this._z=s*u+a*c+n*l-i*o,this._w=a*u-n*o-i*l-s*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const n=this._x,i=this._y,s=this._z,a=this._w;let o=a*e._w+n*e._x+i*e._y+s*e._z;if(o<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,o=-o):this.copy(e),o>=1)return this._w=a,this._x=n,this._y=i,this._z=s,this;const l=1-o*o;if(l<=Number.EPSILON){const m=1-t;return this._w=m*a+t*this._w,this._x=m*n+t*this._x,this._y=m*i+t*this._y,this._z=m*s+t*this._z,this.normalize(),this}const c=Math.sqrt(l),u=Math.atan2(c,o),h=Math.sin((1-t)*u)/c,d=Math.sin(t*u)/c;return this._w=a*h+this._w*d,this._x=n*h+this._x*d,this._y=i*h+this._y*d,this._z=s*h+this._z*d,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),i=Math.sqrt(1-n),s=Math.sqrt(n);return this.set(i*Math.sin(e),i*Math.cos(e),s*Math.sin(t),s*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class I{constructor(e=0,t=0,n=0){I.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Cu.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Cu.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,i=this.z,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6]*i,this.y=s[1]*t+s[4]*n+s[7]*i,this.z=s[2]*t+s[5]*n+s[8]*i,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,s=e.elements,a=1/(s[3]*t+s[7]*n+s[11]*i+s[15]);return this.x=(s[0]*t+s[4]*n+s[8]*i+s[12])*a,this.y=(s[1]*t+s[5]*n+s[9]*i+s[13])*a,this.z=(s[2]*t+s[6]*n+s[10]*i+s[14])*a,this}applyQuaternion(e){const t=this.x,n=this.y,i=this.z,s=e.x,a=e.y,o=e.z,l=e.w,c=2*(a*i-o*n),u=2*(o*t-s*i),h=2*(s*n-a*t);return this.x=t+l*c+a*h-o*u,this.y=n+l*u+o*c-s*h,this.z=i+l*h+s*u-a*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,i=this.z,s=e.elements;return this.x=s[0]*t+s[4]*n+s[8]*i,this.y=s[1]*t+s[5]*n+s[9]*i,this.z=s[2]*t+s[6]*n+s[10]*i,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,i=e.y,s=e.z,a=t.x,o=t.y,l=t.z;return this.x=i*l-s*o,this.y=s*a-n*l,this.z=n*o-i*a,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return qo.copy(this).projectOnVector(e),this.sub(qo)}reflect(e){return this.sub(qo.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(hn(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,i=this.z-e.z;return t*t+n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const i=Math.sin(t)*e;return this.x=i*Math.sin(n),this.y=Math.cos(t)*e,this.z=i*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),i=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=i,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const qo=new I,Cu=new xr;class Ci{constructor(e=new I(1/0,1/0,1/0),t=new I(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(ci.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(ci.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=ci.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const n=e.geometry;if(n!==void 0){const s=n.getAttribute("position");if(t===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let a=0,o=s.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,ci):ci.fromBufferAttribute(s,a),ci.applyMatrix4(e.matrixWorld),this.expandByPoint(ci);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Ca.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Ca.copy(n.boundingBox)),Ca.applyMatrix4(e.matrixWorld),this.union(Ca)}const i=e.children;for(let s=0,a=i.length;s<a;s++)this.expandByObject(i[s],t);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,ci),ci.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Ks),La.subVectors(this.max,Ks),ns.subVectors(e.a,Ks),is.subVectors(e.b,Ks),rs.subVectors(e.c,Ks),rr.subVectors(is,ns),sr.subVectors(rs,is),Lr.subVectors(ns,rs);let t=[0,-rr.z,rr.y,0,-sr.z,sr.y,0,-Lr.z,Lr.y,rr.z,0,-rr.x,sr.z,0,-sr.x,Lr.z,0,-Lr.x,-rr.y,rr.x,0,-sr.y,sr.x,0,-Lr.y,Lr.x,0];return!Yo(t,ns,is,rs,La)||(t=[1,0,0,0,1,0,0,0,1],!Yo(t,ns,is,rs,La))?!1:(Pa.crossVectors(rr,sr),t=[Pa.x,Pa.y,Pa.z],Yo(t,ns,is,rs,La))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,ci).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(ci).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(ki[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),ki[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),ki[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),ki[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),ki[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),ki[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),ki[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),ki[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(ki),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const ki=[new I,new I,new I,new I,new I,new I,new I,new I],ci=new I,Ca=new Ci,ns=new I,is=new I,rs=new I,rr=new I,sr=new I,Lr=new I,Ks=new I,La=new I,Pa=new I,Pr=new I;function Yo(r,e,t,n,i){for(let s=0,a=r.length-3;s<=a;s+=3){Pr.fromArray(r,s);const o=i.x*Math.abs(Pr.x)+i.y*Math.abs(Pr.y)+i.z*Math.abs(Pr.z),l=e.dot(Pr),c=t.dot(Pr),u=n.dot(Pr);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>o)return!1}return!0}const cm=new Ci,$s=new I,jo=new I;class Li{constructor(e=new I,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):cm.setFromPoints(e).getCenter(n);let i=0;for(let s=0,a=e.length;s<a;s++)i=Math.max(i,n.distanceToSquared(e[s]));return this.radius=Math.sqrt(i),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;$s.subVectors(e,this.center);const t=$s.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),i=(n-this.radius)*.5;this.center.addScaledVector($s,i/n),this.radius+=i}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(jo.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint($s.copy(e.center).add(jo)),this.expandByPoint($s.copy(e.center).sub(jo))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const zi=new I,Ko=new I,Ia=new I,ar=new I,$o=new I,Da=new I,Zo=new I;class mo{constructor(e=new I,t=new I(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,zi)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=zi.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(zi.copy(this.origin).addScaledVector(this.direction,t),zi.distanceToSquared(e))}distanceSqToSegment(e,t,n,i){Ko.copy(e).add(t).multiplyScalar(.5),Ia.copy(t).sub(e).normalize(),ar.copy(this.origin).sub(Ko);const s=e.distanceTo(t)*.5,a=-this.direction.dot(Ia),o=ar.dot(this.direction),l=-ar.dot(Ia),c=ar.lengthSq(),u=Math.abs(1-a*a);let h,d,m,g;if(u>0)if(h=a*l-o,d=a*o-l,g=s*u,h>=0)if(d>=-g)if(d<=g){const _=1/u;h*=_,d*=_,m=h*(h+a*d+2*o)+d*(a*h+d+2*l)+c}else d=s,h=Math.max(0,-(a*d+o)),m=-h*h+d*(d+2*l)+c;else d=-s,h=Math.max(0,-(a*d+o)),m=-h*h+d*(d+2*l)+c;else d<=-g?(h=Math.max(0,-(-a*s+o)),d=h>0?-s:Math.min(Math.max(-s,-l),s),m=-h*h+d*(d+2*l)+c):d<=g?(h=0,d=Math.min(Math.max(-s,-l),s),m=d*(d+2*l)+c):(h=Math.max(0,-(a*s+o)),d=h>0?s:Math.min(Math.max(-s,-l),s),m=-h*h+d*(d+2*l)+c);else d=a>0?-s:s,h=Math.max(0,-(a*d+o)),m=-h*h+d*(d+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,h),i&&i.copy(Ko).addScaledVector(Ia,d),m}intersectSphere(e,t){zi.subVectors(e.center,this.origin);const n=zi.dot(this.direction),i=zi.dot(zi)-n*n,s=e.radius*e.radius;if(i>s)return null;const a=Math.sqrt(s-i),o=n-a,l=n+a;return l<0?null:o<0?this.at(l,t):this.at(o,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,i,s,a,o,l;const c=1/this.direction.x,u=1/this.direction.y,h=1/this.direction.z,d=this.origin;return c>=0?(n=(e.min.x-d.x)*c,i=(e.max.x-d.x)*c):(n=(e.max.x-d.x)*c,i=(e.min.x-d.x)*c),u>=0?(s=(e.min.y-d.y)*u,a=(e.max.y-d.y)*u):(s=(e.max.y-d.y)*u,a=(e.min.y-d.y)*u),n>a||s>i||((s>n||isNaN(n))&&(n=s),(a<i||isNaN(i))&&(i=a),h>=0?(o=(e.min.z-d.z)*h,l=(e.max.z-d.z)*h):(o=(e.max.z-d.z)*h,l=(e.min.z-d.z)*h),n>l||o>i)||((o>n||n!==n)&&(n=o),(l<i||i!==i)&&(i=l),i<0)?null:this.at(n>=0?n:i,t)}intersectsBox(e){return this.intersectBox(e,zi)!==null}intersectTriangle(e,t,n,i,s){$o.subVectors(t,e),Da.subVectors(n,e),Zo.crossVectors($o,Da);let a=this.direction.dot(Zo),o;if(a>0){if(i)return null;o=1}else if(a<0)o=-1,a=-a;else return null;ar.subVectors(this.origin,e);const l=o*this.direction.dot(Da.crossVectors(ar,Da));if(l<0)return null;const c=o*this.direction.dot($o.cross(ar));if(c<0||l+c>a)return null;const u=-o*ar.dot(Zo);return u<0?null:this.at(u/a,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Xe{constructor(e,t,n,i,s,a,o,l,c,u,h,d,m,g,_,f){Xe.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,i,s,a,o,l,c,u,h,d,m,g,_,f)}set(e,t,n,i,s,a,o,l,c,u,h,d,m,g,_,f){const p=this.elements;return p[0]=e,p[4]=t,p[8]=n,p[12]=i,p[1]=s,p[5]=a,p[9]=o,p[13]=l,p[2]=c,p[6]=u,p[10]=h,p[14]=d,p[3]=m,p[7]=g,p[11]=_,p[15]=f,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Xe().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,n=e.elements,i=1/ss.setFromMatrixColumn(e,0).length(),s=1/ss.setFromMatrixColumn(e,1).length(),a=1/ss.setFromMatrixColumn(e,2).length();return t[0]=n[0]*i,t[1]=n[1]*i,t[2]=n[2]*i,t[3]=0,t[4]=n[4]*s,t[5]=n[5]*s,t[6]=n[6]*s,t[7]=0,t[8]=n[8]*a,t[9]=n[9]*a,t[10]=n[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,i=e.y,s=e.z,a=Math.cos(n),o=Math.sin(n),l=Math.cos(i),c=Math.sin(i),u=Math.cos(s),h=Math.sin(s);if(e.order==="XYZ"){const d=a*u,m=a*h,g=o*u,_=o*h;t[0]=l*u,t[4]=-l*h,t[8]=c,t[1]=m+g*c,t[5]=d-_*c,t[9]=-o*l,t[2]=_-d*c,t[6]=g+m*c,t[10]=a*l}else if(e.order==="YXZ"){const d=l*u,m=l*h,g=c*u,_=c*h;t[0]=d+_*o,t[4]=g*o-m,t[8]=a*c,t[1]=a*h,t[5]=a*u,t[9]=-o,t[2]=m*o-g,t[6]=_+d*o,t[10]=a*l}else if(e.order==="ZXY"){const d=l*u,m=l*h,g=c*u,_=c*h;t[0]=d-_*o,t[4]=-a*h,t[8]=g+m*o,t[1]=m+g*o,t[5]=a*u,t[9]=_-d*o,t[2]=-a*c,t[6]=o,t[10]=a*l}else if(e.order==="ZYX"){const d=a*u,m=a*h,g=o*u,_=o*h;t[0]=l*u,t[4]=g*c-m,t[8]=d*c+_,t[1]=l*h,t[5]=_*c+d,t[9]=m*c-g,t[2]=-c,t[6]=o*l,t[10]=a*l}else if(e.order==="YZX"){const d=a*l,m=a*c,g=o*l,_=o*c;t[0]=l*u,t[4]=_-d*h,t[8]=g*h+m,t[1]=h,t[5]=a*u,t[9]=-o*u,t[2]=-c*u,t[6]=m*h+g,t[10]=d-_*h}else if(e.order==="XZY"){const d=a*l,m=a*c,g=o*l,_=o*c;t[0]=l*u,t[4]=-h,t[8]=c*u,t[1]=d*h+_,t[5]=a*u,t[9]=m*h-g,t[2]=g*h-m,t[6]=o*u,t[10]=_*h+d}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(um,e,hm)}lookAt(e,t,n){const i=this.elements;return Kn.subVectors(e,t),Kn.lengthSq()===0&&(Kn.z=1),Kn.normalize(),or.crossVectors(n,Kn),or.lengthSq()===0&&(Math.abs(n.z)===1?Kn.x+=1e-4:Kn.z+=1e-4,Kn.normalize(),or.crossVectors(n,Kn)),or.normalize(),Na.crossVectors(Kn,or),i[0]=or.x,i[4]=Na.x,i[8]=Kn.x,i[1]=or.y,i[5]=Na.y,i[9]=Kn.y,i[2]=or.z,i[6]=Na.z,i[10]=Kn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,s=this.elements,a=n[0],o=n[4],l=n[8],c=n[12],u=n[1],h=n[5],d=n[9],m=n[13],g=n[2],_=n[6],f=n[10],p=n[14],M=n[3],v=n[7],T=n[11],E=n[15],w=i[0],S=i[4],P=i[8],D=i[12],x=i[1],b=i[5],U=i[9],j=i[13],L=i[2],F=i[6],k=i[10],K=i[14],$=i[3],Y=i[7],re=i[11],le=i[15];return s[0]=a*w+o*x+l*L+c*$,s[4]=a*S+o*b+l*F+c*Y,s[8]=a*P+o*U+l*k+c*re,s[12]=a*D+o*j+l*K+c*le,s[1]=u*w+h*x+d*L+m*$,s[5]=u*S+h*b+d*F+m*Y,s[9]=u*P+h*U+d*k+m*re,s[13]=u*D+h*j+d*K+m*le,s[2]=g*w+_*x+f*L+p*$,s[6]=g*S+_*b+f*F+p*Y,s[10]=g*P+_*U+f*k+p*re,s[14]=g*D+_*j+f*K+p*le,s[3]=M*w+v*x+T*L+E*$,s[7]=M*S+v*b+T*F+E*Y,s[11]=M*P+v*U+T*k+E*re,s[15]=M*D+v*j+T*K+E*le,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],i=e[8],s=e[12],a=e[1],o=e[5],l=e[9],c=e[13],u=e[2],h=e[6],d=e[10],m=e[14],g=e[3],_=e[7],f=e[11],p=e[15];return g*(+s*l*h-i*c*h-s*o*d+n*c*d+i*o*m-n*l*m)+_*(+t*l*m-t*c*d+s*a*d-i*a*m+i*c*u-s*l*u)+f*(+t*c*h-t*o*m-s*a*h+n*a*m+s*o*u-n*c*u)+p*(-i*o*u-t*l*h+t*o*d+i*a*h-n*a*d+n*l*u)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const i=this.elements;return e.isVector3?(i[12]=e.x,i[13]=e.y,i[14]=e.z):(i[12]=e,i[13]=t,i[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],u=e[8],h=e[9],d=e[10],m=e[11],g=e[12],_=e[13],f=e[14],p=e[15],M=h*f*c-_*d*c+_*l*m-o*f*m-h*l*p+o*d*p,v=g*d*c-u*f*c-g*l*m+a*f*m+u*l*p-a*d*p,T=u*_*c-g*h*c+g*o*m-a*_*m-u*o*p+a*h*p,E=g*h*l-u*_*l-g*o*d+a*_*d+u*o*f-a*h*f,w=t*M+n*v+i*T+s*E;if(w===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const S=1/w;return e[0]=M*S,e[1]=(_*d*s-h*f*s-_*i*m+n*f*m+h*i*p-n*d*p)*S,e[2]=(o*f*s-_*l*s+_*i*c-n*f*c-o*i*p+n*l*p)*S,e[3]=(h*l*s-o*d*s-h*i*c+n*d*c+o*i*m-n*l*m)*S,e[4]=v*S,e[5]=(u*f*s-g*d*s+g*i*m-t*f*m-u*i*p+t*d*p)*S,e[6]=(g*l*s-a*f*s-g*i*c+t*f*c+a*i*p-t*l*p)*S,e[7]=(a*d*s-u*l*s+u*i*c-t*d*c-a*i*m+t*l*m)*S,e[8]=T*S,e[9]=(g*h*s-u*_*s-g*n*m+t*_*m+u*n*p-t*h*p)*S,e[10]=(a*_*s-g*o*s+g*n*c-t*_*c-a*n*p+t*o*p)*S,e[11]=(u*o*s-a*h*s-u*n*c+t*h*c+a*n*m-t*o*m)*S,e[12]=E*S,e[13]=(u*_*i-g*h*i+g*n*d-t*_*d-u*n*f+t*h*f)*S,e[14]=(g*o*i-a*_*i-g*n*l+t*_*l+a*n*f-t*o*f)*S,e[15]=(a*h*i-u*o*i+u*n*l-t*h*l-a*n*d+t*o*d)*S,this}scale(e){const t=this.elements,n=e.x,i=e.y,s=e.z;return t[0]*=n,t[4]*=i,t[8]*=s,t[1]*=n,t[5]*=i,t[9]*=s,t[2]*=n,t[6]*=i,t[10]*=s,t[3]*=n,t[7]*=i,t[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],i=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,i))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),i=Math.sin(t),s=1-n,a=e.x,o=e.y,l=e.z,c=s*a,u=s*o;return this.set(c*a+n,c*o-i*l,c*l+i*o,0,c*o+i*l,u*o+n,u*l-i*a,0,c*l-i*o,u*l+i*a,s*l*l+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,i,s,a){return this.set(1,n,s,0,e,1,a,0,t,i,1,0,0,0,0,1),this}compose(e,t,n){const i=this.elements,s=t._x,a=t._y,o=t._z,l=t._w,c=s+s,u=a+a,h=o+o,d=s*c,m=s*u,g=s*h,_=a*u,f=a*h,p=o*h,M=l*c,v=l*u,T=l*h,E=n.x,w=n.y,S=n.z;return i[0]=(1-(_+p))*E,i[1]=(m+T)*E,i[2]=(g-v)*E,i[3]=0,i[4]=(m-T)*w,i[5]=(1-(d+p))*w,i[6]=(f+M)*w,i[7]=0,i[8]=(g+v)*S,i[9]=(f-M)*S,i[10]=(1-(d+_))*S,i[11]=0,i[12]=e.x,i[13]=e.y,i[14]=e.z,i[15]=1,this}decompose(e,t,n){const i=this.elements;let s=ss.set(i[0],i[1],i[2]).length();const a=ss.set(i[4],i[5],i[6]).length(),o=ss.set(i[8],i[9],i[10]).length();this.determinant()<0&&(s=-s),e.x=i[12],e.y=i[13],e.z=i[14],ui.copy(this);const c=1/s,u=1/a,h=1/o;return ui.elements[0]*=c,ui.elements[1]*=c,ui.elements[2]*=c,ui.elements[4]*=u,ui.elements[5]*=u,ui.elements[6]*=u,ui.elements[8]*=h,ui.elements[9]*=h,ui.elements[10]*=h,t.setFromRotationMatrix(ui),n.x=s,n.y=a,n.z=o,this}makePerspective(e,t,n,i,s,a,o=$i){const l=this.elements,c=2*s/(t-e),u=2*s/(n-i),h=(t+e)/(t-e),d=(n+i)/(n-i);let m,g;if(o===$i)m=-(a+s)/(a-s),g=-2*a*s/(a-s);else if(o===uo)m=-a/(a-s),g=-a*s/(a-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return l[0]=c,l[4]=0,l[8]=h,l[12]=0,l[1]=0,l[5]=u,l[9]=d,l[13]=0,l[2]=0,l[6]=0,l[10]=m,l[14]=g,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,n,i,s,a,o=$i){const l=this.elements,c=1/(t-e),u=1/(n-i),h=1/(a-s),d=(t+e)*c,m=(n+i)*u;let g,_;if(o===$i)g=(a+s)*h,_=-2*h;else if(o===uo)g=s*h,_=-1*h;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-d,l[1]=0,l[5]=2*u,l[9]=0,l[13]=-m,l[2]=0,l[6]=0,l[10]=_,l[14]=-g,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<16;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}}const ss=new I,ui=new Xe,um=new I(0,0,0),hm=new I(1,1,1),or=new I,Na=new I,Kn=new I,Lu=new Xe,Pu=new xr;class Ri{constructor(e=0,t=0,n=0,i=Ri.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=i}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,i=this._order){return this._x=e,this._y=t,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const i=e.elements,s=i[0],a=i[4],o=i[8],l=i[1],c=i[5],u=i[9],h=i[2],d=i[6],m=i[10];switch(t){case"XYZ":this._y=Math.asin(hn(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-u,m),this._z=Math.atan2(-a,s)):(this._x=Math.atan2(d,c),this._z=0);break;case"YXZ":this._x=Math.asin(-hn(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(o,m),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-h,s),this._z=0);break;case"ZXY":this._x=Math.asin(hn(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-h,m),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-hn(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(d,m),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(hn(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-h,s)):(this._x=0,this._y=Math.atan2(o,m));break;case"XZY":this._z=Math.asin(-hn(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(o,s)):(this._x=Math.atan2(-u,m),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return Lu.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Lu,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Pu.setFromEuler(this),this.setFromQuaternion(Pu,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Ri.DEFAULT_ORDER="XYZ";class dd{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let dm=0;const Iu=new I,as=new xr,Gi=new Xe,Ua=new I,Zs=new I,fm=new I,pm=new xr,Du=new I(1,0,0),Nu=new I(0,1,0),Uu=new I(0,0,1),mm={type:"added"},gm={type:"removed"},Jo={type:"childadded",child:null},Qo={type:"childremoved",child:null};class tn extends Bs{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:dm++}),this.uuid=_i(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=tn.DEFAULT_UP.clone();const e=new I,t=new Ri,n=new xr,i=new I(1,1,1);function s(){n.setFromEuler(t,!1)}function a(){t.setFromQuaternion(n,void 0,!1)}t._onChange(s),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new Xe},normalMatrix:{value:new mt}}),this.matrix=new Xe,this.matrixWorld=new Xe,this.matrixAutoUpdate=tn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=tn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new dd,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return as.setFromAxisAngle(e,t),this.quaternion.multiply(as),this}rotateOnWorldAxis(e,t){return as.setFromAxisAngle(e,t),this.quaternion.premultiply(as),this}rotateX(e){return this.rotateOnAxis(Du,e)}rotateY(e){return this.rotateOnAxis(Nu,e)}rotateZ(e){return this.rotateOnAxis(Uu,e)}translateOnAxis(e,t){return Iu.copy(e).applyQuaternion(this.quaternion),this.position.add(Iu.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Du,e)}translateY(e){return this.translateOnAxis(Nu,e)}translateZ(e){return this.translateOnAxis(Uu,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Gi.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?Ua.copy(e):Ua.set(e,t,n);const i=this.parent;this.updateWorldMatrix(!0,!1),Zs.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Gi.lookAt(Zs,Ua,this.up):Gi.lookAt(Ua,Zs,this.up),this.quaternion.setFromRotationMatrix(Gi),i&&(Gi.extractRotation(i.matrixWorld),as.setFromRotationMatrix(Gi),this.quaternion.premultiply(as.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.parent!==null&&e.parent.remove(e),e.parent=this,this.children.push(e),e.dispatchEvent(mm),Jo.child=e,this.dispatchEvent(Jo),Jo.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(gm),Qo.child=e,this.dispatchEvent(Qo),Qo.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Gi.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Gi.multiply(e.parent.matrixWorld)),e.applyMatrix4(Gi),this.add(e),e.updateWorldMatrix(!1,!0),this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,i=this.children.length;n<i;n++){const a=this.children[n].getObjectByProperty(e,t);if(a!==void 0)return a}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);const i=this.children;for(let s=0,a=i.length;s<a;s++)i[s].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Zs,e,fm),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Zs,pm,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,i=t.length;n<i;n++){const s=t[n];(s.matrixWorldAutoUpdate===!0||e===!0)&&s.updateMatrixWorld(e)}}updateWorldMatrix(e,t){const n=this.parent;if(e===!0&&n!==null&&n.matrixWorldAutoUpdate===!0&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),t===!0){const i=this.children;for(let s=0,a=i.length;s<a;s++){const o=i[s];o.matrixWorldAutoUpdate===!0&&o.updateWorldMatrix(!1,!0)}}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const i={};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.castShadow===!0&&(i.castShadow=!0),this.receiveShadow===!0&&(i.receiveShadow=!0),this.visible===!1&&(i.visible=!1),this.frustumCulled===!1&&(i.frustumCulled=!1),this.renderOrder!==0&&(i.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(i.matrixAutoUpdate=!1),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(i.type="BatchedMesh",i.perObjectFrustumCulled=this.perObjectFrustumCulled,i.sortObjects=this.sortObjects,i.drawRanges=this._drawRanges,i.reservedRanges=this._reservedRanges,i.visibility=this._visibility,i.active=this._active,i.bounds=this._bounds.map(o=>({boxInitialized:o.boxInitialized,boxMin:o.box.min.toArray(),boxMax:o.box.max.toArray(),sphereInitialized:o.sphereInitialized,sphereRadius:o.sphere.radius,sphereCenter:o.sphere.center.toArray()})),i.maxGeometryCount=this._maxGeometryCount,i.maxVertexCount=this._maxVertexCount,i.maxIndexCount=this._maxIndexCount,i.geometryInitialized=this._geometryInitialized,i.geometryCount=this._geometryCount,i.matricesTexture=this._matricesTexture.toJSON(e),this.boundingSphere!==null&&(i.boundingSphere={center:i.boundingSphere.center.toArray(),radius:i.boundingSphere.radius}),this.boundingBox!==null&&(i.boundingBox={min:i.boundingBox.min.toArray(),max:i.boundingBox.max.toArray()}));function s(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=s(e.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const l=o.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){const h=l[c];s(e.shapes,h)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(s(e.materials,this.material[l]));i.material=o}else i.material=s(e.materials,this.material);if(this.children.length>0){i.children=[];for(let o=0;o<this.children.length;o++)i.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){i.animations=[];for(let o=0;o<this.animations.length;o++){const l=this.animations[o];i.animations.push(s(e.animations,l))}}if(t){const o=a(e.geometries),l=a(e.materials),c=a(e.textures),u=a(e.images),h=a(e.shapes),d=a(e.skeletons),m=a(e.animations),g=a(e.nodes);o.length>0&&(n.geometries=o),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),u.length>0&&(n.images=u),h.length>0&&(n.shapes=h),d.length>0&&(n.skeletons=d),m.length>0&&(n.animations=m),g.length>0&&(n.nodes=g)}return n.object=i,n;function a(o){const l=[];for(const c in o){const u=o[c];delete u.metadata,l.push(u)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const i=e.children[n];this.add(i.clone())}return this}}tn.DEFAULT_UP=new I(0,1,0);tn.DEFAULT_MATRIX_AUTO_UPDATE=!0;tn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const hi=new I,Hi=new I,el=new I,Vi=new I,os=new I,ls=new I,Fu=new I,tl=new I,nl=new I,il=new I;class Ti{constructor(e=new I,t=new I,n=new I){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,i){i.subVectors(n,t),hi.subVectors(e,t),i.cross(hi);const s=i.lengthSq();return s>0?i.multiplyScalar(1/Math.sqrt(s)):i.set(0,0,0)}static getBarycoord(e,t,n,i,s){hi.subVectors(i,t),Hi.subVectors(n,t),el.subVectors(e,t);const a=hi.dot(hi),o=hi.dot(Hi),l=hi.dot(el),c=Hi.dot(Hi),u=Hi.dot(el),h=a*c-o*o;if(h===0)return s.set(0,0,0),null;const d=1/h,m=(c*l-o*u)*d,g=(a*u-o*l)*d;return s.set(1-m-g,g,m)}static containsPoint(e,t,n,i){return this.getBarycoord(e,t,n,i,Vi)===null?!1:Vi.x>=0&&Vi.y>=0&&Vi.x+Vi.y<=1}static getInterpolation(e,t,n,i,s,a,o,l){return this.getBarycoord(e,t,n,i,Vi)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,Vi.x),l.addScaledVector(a,Vi.y),l.addScaledVector(o,Vi.z),l)}static isFrontFacing(e,t,n,i){return hi.subVectors(n,t),Hi.subVectors(e,t),hi.cross(Hi).dot(i)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,i){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[i]),this}setFromAttributeAndIndices(e,t,n,i){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,i),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return hi.subVectors(this.c,this.b),Hi.subVectors(this.a,this.b),hi.cross(Hi).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Ti.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return Ti.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,i,s){return Ti.getInterpolation(e,this.a,this.b,this.c,t,n,i,s)}containsPoint(e){return Ti.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Ti.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,i=this.b,s=this.c;let a,o;os.subVectors(i,n),ls.subVectors(s,n),tl.subVectors(e,n);const l=os.dot(tl),c=ls.dot(tl);if(l<=0&&c<=0)return t.copy(n);nl.subVectors(e,i);const u=os.dot(nl),h=ls.dot(nl);if(u>=0&&h<=u)return t.copy(i);const d=l*h-u*c;if(d<=0&&l>=0&&u<=0)return a=l/(l-u),t.copy(n).addScaledVector(os,a);il.subVectors(e,s);const m=os.dot(il),g=ls.dot(il);if(g>=0&&m<=g)return t.copy(s);const _=m*c-l*g;if(_<=0&&c>=0&&g<=0)return o=c/(c-g),t.copy(n).addScaledVector(ls,o);const f=u*g-m*h;if(f<=0&&h-u>=0&&m-g>=0)return Fu.subVectors(s,i),o=(h-u)/(h-u+(m-g)),t.copy(i).addScaledVector(Fu,o);const p=1/(f+_+d);return a=_*p,o=d*p,t.copy(n).addScaledVector(os,a).addScaledVector(ls,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const fd={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},lr={h:0,s:0,l:0},Fa={h:0,s:0,l:0};function rl(r,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?r+(e-r)*6*t:t<1/2?e:t<2/3?r+(e-r)*6*(2/3-t):r}class $e{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){const i=e;i&&i.isColor?this.copy(i):typeof i=="number"?this.setHex(i):typeof i=="string"&&this.setStyle(i)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Fn){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Pt.toWorkingColorSpace(this,t),this}setRGB(e,t,n,i=Pt.workingColorSpace){return this.r=e,this.g=t,this.b=n,Pt.toWorkingColorSpace(this,i),this}setHSL(e,t,n,i=Pt.workingColorSpace){if(e=Ql(e,1),t=hn(t,0,1),n=hn(n,0,1),t===0)this.r=this.g=this.b=n;else{const s=n<=.5?n*(1+t):n+t-n*t,a=2*n-s;this.r=rl(a,s,e+1/3),this.g=rl(a,s,e),this.b=rl(a,s,e-1/3)}return Pt.toWorkingColorSpace(this,i),this}setStyle(e,t=Fn){function n(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const a=i[1],o=i[2];switch(a){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,t);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,t);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=i[1],a=s.length;if(a===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(s,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Fn){const n=fd[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=bs(e.r),this.g=bs(e.g),this.b=bs(e.b),this}copyLinearToSRGB(e){return this.r=Wo(e.r),this.g=Wo(e.g),this.b=Wo(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Fn){return Pt.fromWorkingColorSpace(Ln.copy(this),e),Math.round(hn(Ln.r*255,0,255))*65536+Math.round(hn(Ln.g*255,0,255))*256+Math.round(hn(Ln.b*255,0,255))}getHexString(e=Fn){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Pt.workingColorSpace){Pt.fromWorkingColorSpace(Ln.copy(this),t);const n=Ln.r,i=Ln.g,s=Ln.b,a=Math.max(n,i,s),o=Math.min(n,i,s);let l,c;const u=(o+a)/2;if(o===a)l=0,c=0;else{const h=a-o;switch(c=u<=.5?h/(a+o):h/(2-a-o),a){case n:l=(i-s)/h+(i<s?6:0);break;case i:l=(s-n)/h+2;break;case s:l=(n-i)/h+4;break}l/=6}return e.h=l,e.s=c,e.l=u,e}getRGB(e,t=Pt.workingColorSpace){return Pt.fromWorkingColorSpace(Ln.copy(this),t),e.r=Ln.r,e.g=Ln.g,e.b=Ln.b,e}getStyle(e=Fn){Pt.fromWorkingColorSpace(Ln.copy(this),e);const t=Ln.r,n=Ln.g,i=Ln.b;return e!==Fn?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(i*255)})`}offsetHSL(e,t,n){return this.getHSL(lr),this.setHSL(lr.h+e,lr.s+t,lr.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(lr),e.getHSL(Fa);const n=la(lr.h,Fa.h,t),i=la(lr.s,Fa.s,t),s=la(lr.l,Fa.l,t);return this.setHSL(n,i,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,n=this.g,i=this.b,s=e.elements;return this.r=s[0]*t+s[3]*n+s[6]*i,this.g=s[1]*t+s[4]*n+s[7]*i,this.b=s[2]*t+s[5]*n+s[8]*i,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Ln=new $e;$e.NAMES=fd;let _m=0;class wi extends Bs{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:_m++}),this.uuid=_i(),this.name="",this.type="Material",this.blending=Es,this.side=Ji,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Ll,this.blendDst=Pl,this.blendEquation=zr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new $e(0,0,0),this.blendAlpha=0,this.depthFunc=so,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Eu,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=es,this.stencilZFail=es,this.stencilZPass=es,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const i=this[t];if(i===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}i&&i.isColor?i.set(n):i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Es&&(n.blending=this.blending),this.side!==Ji&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==Ll&&(n.blendSrc=this.blendSrc),this.blendDst!==Pl&&(n.blendDst=this.blendDst),this.blendEquation!==zr&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==so&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Eu&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==es&&(n.stencilFail=this.stencilFail),this.stencilZFail!==es&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==es&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function i(s){const a=[];for(const o in s){const l=s[o];delete l.metadata,a.push(l)}return a}if(t){const s=i(e.textures),a=i(e.images);s.length>0&&(n.textures=s),a.length>0&&(n.images=a)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const i=t.length;n=new Array(i);for(let s=0;s!==i;++s)n[s]=t[s].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class Hr extends wi{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new $e(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ri,this.combine=Yh,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const ln=new I,Oa=new be;class dn{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=Fl,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=pi,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return ld("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let i=0,s=this.itemSize;i<s;i++)this.array[e+i]=t.array[n+i];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)Oa.fromBufferAttribute(this,t),Oa.applyMatrix3(e),this.setXY(t,Oa.x,Oa.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)ln.fromBufferAttribute(this,t),ln.applyMatrix3(e),this.setXYZ(t,ln.x,ln.y,ln.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)ln.fromBufferAttribute(this,t),ln.applyMatrix4(e),this.setXYZ(t,ln.x,ln.y,ln.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)ln.fromBufferAttribute(this,t),ln.applyNormalMatrix(e),this.setXYZ(t,ln.x,ln.y,ln.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)ln.fromBufferAttribute(this,t),ln.transformDirection(e),this.setXYZ(t,ln.x,ln.y,ln.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=mi(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=Dt(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=mi(t,this.array)),t}setX(e,t){return this.normalized&&(t=Dt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=mi(t,this.array)),t}setY(e,t){return this.normalized&&(t=Dt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=mi(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Dt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=mi(t,this.array)),t}setW(e,t){return this.normalized&&(t=Dt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=Dt(t,this.array),n=Dt(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,i){return e*=this.itemSize,this.normalized&&(t=Dt(t,this.array),n=Dt(n,this.array),i=Dt(i,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this}setXYZW(e,t,n,i,s){return e*=this.itemSize,this.normalized&&(t=Dt(t,this.array),n=Dt(n,this.array),i=Dt(i,this.array),s=Dt(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Fl&&(e.usage=this.usage),e}}class pd extends dn{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class md extends dn{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class Mn extends dn{constructor(e,t,n){super(new Float32Array(e),t,n)}}let vm=0;const ei=new Xe,sl=new tn,cs=new I,$n=new Ci,Js=new Ci,gn=new I;class kn extends Bs{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:vm++}),this.uuid=_i(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(od(e)?md:pd)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const s=new mt().getNormalMatrix(e);n.applyNormalMatrix(s),n.needsUpdate=!0}const i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(e),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return ei.makeRotationFromQuaternion(e),this.applyMatrix4(ei),this}rotateX(e){return ei.makeRotationX(e),this.applyMatrix4(ei),this}rotateY(e){return ei.makeRotationY(e),this.applyMatrix4(ei),this}rotateZ(e){return ei.makeRotationZ(e),this.applyMatrix4(ei),this}translate(e,t,n){return ei.makeTranslation(e,t,n),this.applyMatrix4(ei),this}scale(e,t,n){return ei.makeScale(e,t,n),this.applyMatrix4(ei),this}lookAt(e){return sl.lookAt(e),sl.updateMatrix(),this.applyMatrix4(sl.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(cs).negate(),this.translate(cs.x,cs.y,cs.z),this}setFromPoints(e){const t=[];for(let n=0,i=e.length;n<i;n++){const s=e[n];t.push(s.x,s.y,s.z||0)}return this.setAttribute("position",new Mn(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Ci);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new I(-1/0,-1/0,-1/0),new I(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,i=t.length;n<i;n++){const s=t[n];$n.setFromBufferAttribute(s),this.morphTargetsRelative?(gn.addVectors(this.boundingBox.min,$n.min),this.boundingBox.expandByPoint(gn),gn.addVectors(this.boundingBox.max,$n.max),this.boundingBox.expandByPoint(gn)):(this.boundingBox.expandByPoint($n.min),this.boundingBox.expandByPoint($n.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Li);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new I,1/0);return}if(e){const n=this.boundingSphere.center;if($n.setFromBufferAttribute(e),t)for(let s=0,a=t.length;s<a;s++){const o=t[s];Js.setFromBufferAttribute(o),this.morphTargetsRelative?(gn.addVectors($n.min,Js.min),$n.expandByPoint(gn),gn.addVectors($n.max,Js.max),$n.expandByPoint(gn)):($n.expandByPoint(Js.min),$n.expandByPoint(Js.max))}$n.getCenter(n);let i=0;for(let s=0,a=e.count;s<a;s++)gn.fromBufferAttribute(e,s),i=Math.max(i,n.distanceToSquared(gn));if(t)for(let s=0,a=t.length;s<a;s++){const o=t[s],l=this.morphTargetsRelative;for(let c=0,u=o.count;c<u;c++)gn.fromBufferAttribute(o,c),l&&(cs.fromBufferAttribute(e,c),gn.add(cs)),i=Math.max(i,n.distanceToSquared(gn))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=t.position,i=t.normal,s=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new dn(new Float32Array(4*n.count),4));const a=this.getAttribute("tangent"),o=[],l=[];for(let P=0;P<n.count;P++)o[P]=new I,l[P]=new I;const c=new I,u=new I,h=new I,d=new be,m=new be,g=new be,_=new I,f=new I;function p(P,D,x){c.fromBufferAttribute(n,P),u.fromBufferAttribute(n,D),h.fromBufferAttribute(n,x),d.fromBufferAttribute(s,P),m.fromBufferAttribute(s,D),g.fromBufferAttribute(s,x),u.sub(c),h.sub(c),m.sub(d),g.sub(d);const b=1/(m.x*g.y-g.x*m.y);isFinite(b)&&(_.copy(u).multiplyScalar(g.y).addScaledVector(h,-m.y).multiplyScalar(b),f.copy(h).multiplyScalar(m.x).addScaledVector(u,-g.x).multiplyScalar(b),o[P].add(_),o[D].add(_),o[x].add(_),l[P].add(f),l[D].add(f),l[x].add(f))}let M=this.groups;M.length===0&&(M=[{start:0,count:e.count}]);for(let P=0,D=M.length;P<D;++P){const x=M[P],b=x.start,U=x.count;for(let j=b,L=b+U;j<L;j+=3)p(e.getX(j+0),e.getX(j+1),e.getX(j+2))}const v=new I,T=new I,E=new I,w=new I;function S(P){E.fromBufferAttribute(i,P),w.copy(E);const D=o[P];v.copy(D),v.sub(E.multiplyScalar(E.dot(D))).normalize(),T.crossVectors(w,D);const b=T.dot(l[P])<0?-1:1;a.setXYZW(P,v.x,v.y,v.z,b)}for(let P=0,D=M.length;P<D;++P){const x=M[P],b=x.start,U=x.count;for(let j=b,L=b+U;j<L;j+=3)S(e.getX(j+0)),S(e.getX(j+1)),S(e.getX(j+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new dn(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let d=0,m=n.count;d<m;d++)n.setXYZ(d,0,0,0);const i=new I,s=new I,a=new I,o=new I,l=new I,c=new I,u=new I,h=new I;if(e)for(let d=0,m=e.count;d<m;d+=3){const g=e.getX(d+0),_=e.getX(d+1),f=e.getX(d+2);i.fromBufferAttribute(t,g),s.fromBufferAttribute(t,_),a.fromBufferAttribute(t,f),u.subVectors(a,s),h.subVectors(i,s),u.cross(h),o.fromBufferAttribute(n,g),l.fromBufferAttribute(n,_),c.fromBufferAttribute(n,f),o.add(u),l.add(u),c.add(u),n.setXYZ(g,o.x,o.y,o.z),n.setXYZ(_,l.x,l.y,l.z),n.setXYZ(f,c.x,c.y,c.z)}else for(let d=0,m=t.count;d<m;d+=3)i.fromBufferAttribute(t,d+0),s.fromBufferAttribute(t,d+1),a.fromBufferAttribute(t,d+2),u.subVectors(a,s),h.subVectors(i,s),u.cross(h),n.setXYZ(d+0,u.x,u.y,u.z),n.setXYZ(d+1,u.x,u.y,u.z),n.setXYZ(d+2,u.x,u.y,u.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)gn.fromBufferAttribute(e,t),gn.normalize(),e.setXYZ(t,gn.x,gn.y,gn.z)}toNonIndexed(){function e(o,l){const c=o.array,u=o.itemSize,h=o.normalized,d=new c.constructor(l.length*u);let m=0,g=0;for(let _=0,f=l.length;_<f;_++){o.isInterleavedBufferAttribute?m=l[_]*o.data.stride+o.offset:m=l[_]*u;for(let p=0;p<u;p++)d[g++]=c[m++]}return new dn(d,u,h)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new kn,n=this.index.array,i=this.attributes;for(const o in i){const l=i[o],c=e(l,n);t.setAttribute(o,c)}const s=this.morphAttributes;for(const o in s){const l=[],c=s[o];for(let u=0,h=c.length;u<h;u++){const d=c[u],m=e(d,n);l.push(m)}t.morphAttributes[o]=l}t.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,l=a.length;o<l;o++){const c=a[o];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const l in n){const c=n[l];e.data.attributes[l]=c.toJSON(e.data)}const i={};let s=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],u=[];for(let h=0,d=c.length;h<d;h++){const m=c[h];u.push(m.toJSON(e.data))}u.length>0&&(i[l]=u,s=!0)}s&&(e.data.morphAttributes=i,e.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(e.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone(t));const i=e.attributes;for(const c in i){const u=i[c];this.setAttribute(c,u.clone(t))}const s=e.morphAttributes;for(const c in s){const u=[],h=s[c];for(let d=0,m=h.length;d<m;d++)u.push(h[d].clone(t));this.morphAttributes[c]=u}this.morphTargetsRelative=e.morphTargetsRelative;const a=e.groups;for(let c=0,u=a.length;c<u;c++){const h=a[c];this.addGroup(h.start,h.count,h.materialIndex)}const o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Ou=new Xe,Ir=new mo,Ba=new Li,Bu=new I,us=new I,hs=new I,ds=new I,al=new I,ka=new I,za=new be,Ga=new be,Ha=new be,ku=new I,zu=new I,Gu=new I,Va=new I,Wa=new I;class en extends tn{constructor(e=new kn,t=new Hr){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=i.length;s<a;s++){const o=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}getVertexPosition(e,t){const n=this.geometry,i=n.attributes.position,s=n.morphAttributes.position,a=n.morphTargetsRelative;t.fromBufferAttribute(i,e);const o=this.morphTargetInfluences;if(s&&o){ka.set(0,0,0);for(let l=0,c=s.length;l<c;l++){const u=o[l],h=s[l];u!==0&&(al.fromBufferAttribute(h,e),a?ka.addScaledVector(al,u):ka.addScaledVector(al.sub(t),u))}t.add(ka)}return t}raycast(e,t){const n=this.geometry,i=this.material,s=this.matrixWorld;i!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Ba.copy(n.boundingSphere),Ba.applyMatrix4(s),Ir.copy(e.ray).recast(e.near),!(Ba.containsPoint(Ir.origin)===!1&&(Ir.intersectSphere(Ba,Bu)===null||Ir.origin.distanceToSquared(Bu)>(e.far-e.near)**2))&&(Ou.copy(s).invert(),Ir.copy(e.ray).applyMatrix4(Ou),!(n.boundingBox!==null&&Ir.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,Ir)))}_computeIntersections(e,t,n){let i;const s=this.geometry,a=this.material,o=s.index,l=s.attributes.position,c=s.attributes.uv,u=s.attributes.uv1,h=s.attributes.normal,d=s.groups,m=s.drawRange;if(o!==null)if(Array.isArray(a))for(let g=0,_=d.length;g<_;g++){const f=d[g],p=a[f.materialIndex],M=Math.max(f.start,m.start),v=Math.min(o.count,Math.min(f.start+f.count,m.start+m.count));for(let T=M,E=v;T<E;T+=3){const w=o.getX(T),S=o.getX(T+1),P=o.getX(T+2);i=Xa(this,p,e,n,c,u,h,w,S,P),i&&(i.faceIndex=Math.floor(T/3),i.face.materialIndex=f.materialIndex,t.push(i))}}else{const g=Math.max(0,m.start),_=Math.min(o.count,m.start+m.count);for(let f=g,p=_;f<p;f+=3){const M=o.getX(f),v=o.getX(f+1),T=o.getX(f+2);i=Xa(this,a,e,n,c,u,h,M,v,T),i&&(i.faceIndex=Math.floor(f/3),t.push(i))}}else if(l!==void 0)if(Array.isArray(a))for(let g=0,_=d.length;g<_;g++){const f=d[g],p=a[f.materialIndex],M=Math.max(f.start,m.start),v=Math.min(l.count,Math.min(f.start+f.count,m.start+m.count));for(let T=M,E=v;T<E;T+=3){const w=T,S=T+1,P=T+2;i=Xa(this,p,e,n,c,u,h,w,S,P),i&&(i.faceIndex=Math.floor(T/3),i.face.materialIndex=f.materialIndex,t.push(i))}}else{const g=Math.max(0,m.start),_=Math.min(l.count,m.start+m.count);for(let f=g,p=_;f<p;f+=3){const M=f,v=f+1,T=f+2;i=Xa(this,a,e,n,c,u,h,M,v,T),i&&(i.faceIndex=Math.floor(f/3),t.push(i))}}}}function xm(r,e,t,n,i,s,a,o){let l;if(e.side===Bn?l=n.intersectTriangle(a,s,i,!0,o):l=n.intersectTriangle(i,s,a,e.side===Ji,o),l===null)return null;Wa.copy(o),Wa.applyMatrix4(r.matrixWorld);const c=t.ray.origin.distanceTo(Wa);return c<t.near||c>t.far?null:{distance:c,point:Wa.clone(),object:r}}function Xa(r,e,t,n,i,s,a,o,l,c){r.getVertexPosition(o,us),r.getVertexPosition(l,hs),r.getVertexPosition(c,ds);const u=xm(r,e,t,n,us,hs,ds,Va);if(u){i&&(za.fromBufferAttribute(i,o),Ga.fromBufferAttribute(i,l),Ha.fromBufferAttribute(i,c),u.uv=Ti.getInterpolation(Va,us,hs,ds,za,Ga,Ha,new be)),s&&(za.fromBufferAttribute(s,o),Ga.fromBufferAttribute(s,l),Ha.fromBufferAttribute(s,c),u.uv1=Ti.getInterpolation(Va,us,hs,ds,za,Ga,Ha,new be)),a&&(ku.fromBufferAttribute(a,o),zu.fromBufferAttribute(a,l),Gu.fromBufferAttribute(a,c),u.normal=Ti.getInterpolation(Va,us,hs,ds,ku,zu,Gu,new I),u.normal.dot(n.direction)>0&&u.normal.multiplyScalar(-1));const h={a:o,b:l,c,normal:new I,materialIndex:0};Ti.getNormal(us,hs,ds,h.normal),u.face=h}return u}class di extends kn{constructor(e=1,t=1,n=1,i=1,s=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:i,heightSegments:s,depthSegments:a};const o=this;i=Math.floor(i),s=Math.floor(s),a=Math.floor(a);const l=[],c=[],u=[],h=[];let d=0,m=0;g("z","y","x",-1,-1,n,t,e,a,s,0),g("z","y","x",1,-1,n,t,-e,a,s,1),g("x","z","y",1,1,e,n,t,i,a,2),g("x","z","y",1,-1,e,n,-t,i,a,3),g("x","y","z",1,-1,e,t,n,i,s,4),g("x","y","z",-1,-1,e,t,-n,i,s,5),this.setIndex(l),this.setAttribute("position",new Mn(c,3)),this.setAttribute("normal",new Mn(u,3)),this.setAttribute("uv",new Mn(h,2));function g(_,f,p,M,v,T,E,w,S,P,D){const x=T/S,b=E/P,U=T/2,j=E/2,L=w/2,F=S+1,k=P+1;let K=0,$=0;const Y=new I;for(let re=0;re<k;re++){const le=re*b-j;for(let ve=0;ve<F;ve++){const He=ve*x-U;Y[_]=He*M,Y[f]=le*v,Y[p]=L,c.push(Y.x,Y.y,Y.z),Y[_]=0,Y[f]=0,Y[p]=w>0?1:-1,u.push(Y.x,Y.y,Y.z),h.push(ve/S),h.push(1-re/P),K+=1}}for(let re=0;re<P;re++)for(let le=0;le<S;le++){const ve=d+le+F*re,He=d+le+F*(re+1),X=d+(le+1)+F*(re+1),se=d+(le+1)+F*re;l.push(ve,He,se),l.push(He,X,se),$+=6}o.addGroup(m,$,D),m+=$,d+=K}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new di(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Ds(r){const e={};for(const t in r){e[t]={};for(const n in r[t]){const i=r[t][n];i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)?i.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=i.clone():Array.isArray(i)?e[t][n]=i.slice():e[t][n]=i}}return e}function Un(r){const e={};for(let t=0;t<r.length;t++){const n=Ds(r[t]);for(const i in n)e[i]=n[i]}return e}function ym(r){const e=[];for(let t=0;t<r.length;t++)e.push(r[t].clone());return e}function gd(r){return r.getRenderTarget()===null?r.outputColorSpace:Pt.workingColorSpace}const Mm={clone:Ds,merge:Un};var Sm=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Em=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Qi extends wi{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Sm,this.fragmentShader=Em,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1,clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Ds(e.uniforms),this.uniformsGroups=ym(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const i in this.uniforms){const a=this.uniforms[i].value;a&&a.isTexture?t.uniforms[i]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[i]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[i]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[i]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[i]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[i]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[i]={type:"m4",value:a.toArray()}:t.uniforms[i]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const n={};for(const i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}}class ec extends tn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Xe,this.projectionMatrix=new Xe,this.projectionMatrixInverse=new Xe,this.coordinateSystem=$i}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const cr=new I,Hu=new be,Vu=new be;class On extends ec{constructor(e=50,t=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=Is*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(oa*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Is*2*Math.atan(Math.tan(oa*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){cr.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(cr.x,cr.y).multiplyScalar(-e/cr.z),cr.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(cr.x,cr.y).multiplyScalar(-e/cr.z)}getViewSize(e,t){return this.getViewBounds(e,Hu,Vu),t.subVectors(Vu,Hu)}setViewOffset(e,t,n,i,s,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(oa*.5*this.fov)/this.zoom,n=2*t,i=this.aspect*n,s=-.5*i;const a=this.view;if(this.view!==null&&this.view.enabled){const l=a.fullWidth,c=a.fullHeight;s+=a.offsetX*i/l,t-=a.offsetY*n/c,i*=a.width/l,n*=a.height/c}const o=this.filmOffset;o!==0&&(s+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+i,t,t-n,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const fs=-90,ps=1;class bm extends tn{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const i=new On(fs,ps,e,t);i.layers=this.layers,this.add(i);const s=new On(fs,ps,e,t);s.layers=this.layers,this.add(s);const a=new On(fs,ps,e,t);a.layers=this.layers,this.add(a);const o=new On(fs,ps,e,t);o.layers=this.layers,this.add(o);const l=new On(fs,ps,e,t);l.layers=this.layers,this.add(l);const c=new On(fs,ps,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[n,i,s,a,o,l]=t;for(const c of t)this.remove(c);if(e===$i)n.up.set(0,1,0),n.lookAt(1,0,0),i.up.set(0,1,0),i.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===uo)n.up.set(0,-1,0),n.lookAt(-1,0,0),i.up.set(0,-1,0),i.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:i}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,a,o,l,c,u]=this.children,h=e.getRenderTarget(),d=e.getActiveCubeFace(),m=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;const _=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0,i),e.render(t,s),e.setRenderTarget(n,1,i),e.render(t,a),e.setRenderTarget(n,2,i),e.render(t,o),e.setRenderTarget(n,3,i),e.render(t,l),e.setRenderTarget(n,4,i),e.render(t,c),n.texture.generateMipmaps=_,e.setRenderTarget(n,5,i),e.render(t,u),e.setRenderTarget(h,d,m),e.xr.enabled=g,n.texture.needsPMREMUpdate=!0}}class _d extends yn{constructor(e,t,n,i,s,a,o,l,c,u){e=e!==void 0?e:[],t=t!==void 0?t:ws,super(e,t,n,i,s,a,o,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class Tm extends Xr{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},i=[n,n,n,n,n,n];this.texture=new _d(i,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:Pn}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},i=new di(5,5,5),s=new Qi({name:"CubemapFromEquirect",uniforms:Ds(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Bn,blending:gr});s.uniforms.tEquirect.value=t;const a=new en(i,s),o=t.minFilter;return t.minFilter===Ki&&(t.minFilter=Pn),new bm(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t,n,i){const s=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,n,i);e.setRenderTarget(s)}}const ol=new I,Am=new I,wm=new mt;class Br{constructor(e=new I(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,i){return this.normal.set(e,t,n),this.constant=i,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const i=ol.subVectors(n,t).cross(Am.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(i,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const n=e.delta(ol),i=this.normal.dot(n);if(i===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/i;return s<0||s>1?null:t.copy(e.start).addScaledVector(n,s)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||wm.getNormalMatrix(e),i=this.coplanarPoint(ol).applyMatrix4(e),s=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Dr=new Li,qa=new I;class tc{constructor(e=new Br,t=new Br,n=new Br,i=new Br,s=new Br,a=new Br){this.planes=[e,t,n,i,s,a]}set(e,t,n,i,s,a){const o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(n),o[3].copy(i),o[4].copy(s),o[5].copy(a),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=$i){const n=this.planes,i=e.elements,s=i[0],a=i[1],o=i[2],l=i[3],c=i[4],u=i[5],h=i[6],d=i[7],m=i[8],g=i[9],_=i[10],f=i[11],p=i[12],M=i[13],v=i[14],T=i[15];if(n[0].setComponents(l-s,d-c,f-m,T-p).normalize(),n[1].setComponents(l+s,d+c,f+m,T+p).normalize(),n[2].setComponents(l+a,d+u,f+g,T+M).normalize(),n[3].setComponents(l-a,d-u,f-g,T-M).normalize(),n[4].setComponents(l-o,d-h,f-_,T-v).normalize(),t===$i)n[5].setComponents(l+o,d+h,f+_,T+v).normalize();else if(t===uo)n[5].setComponents(o,h,_,v).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Dr.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Dr.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Dr)}intersectsSprite(e){return Dr.center.set(0,0,0),Dr.radius=.7071067811865476,Dr.applyMatrix4(e.matrixWorld),this.intersectsSphere(Dr)}intersectsSphere(e){const t=this.planes,n=e.center,i=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(n)<i)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const i=t[n];if(qa.x=i.normal.x>0?e.max.x:e.min.x,qa.y=i.normal.y>0?e.max.y:e.min.y,qa.z=i.normal.z>0?e.max.z:e.min.z,i.distanceToPoint(qa)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function vd(){let r=null,e=!1,t=null,n=null;function i(s,a){t(s,a),n=r.requestAnimationFrame(i)}return{start:function(){e!==!0&&t!==null&&(n=r.requestAnimationFrame(i),e=!0)},stop:function(){r.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){r=s}}}function Rm(r,e){const t=e.isWebGL2,n=new WeakMap;function i(c,u){const h=c.array,d=c.usage,m=h.byteLength,g=r.createBuffer();r.bindBuffer(u,g),r.bufferData(u,h,d),c.onUploadCallback();let _;if(h instanceof Float32Array)_=r.FLOAT;else if(h instanceof Uint16Array)if(c.isFloat16BufferAttribute)if(t)_=r.HALF_FLOAT;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else _=r.UNSIGNED_SHORT;else if(h instanceof Int16Array)_=r.SHORT;else if(h instanceof Uint32Array)_=r.UNSIGNED_INT;else if(h instanceof Int32Array)_=r.INT;else if(h instanceof Int8Array)_=r.BYTE;else if(h instanceof Uint8Array)_=r.UNSIGNED_BYTE;else if(h instanceof Uint8ClampedArray)_=r.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+h);return{buffer:g,type:_,bytesPerElement:h.BYTES_PER_ELEMENT,version:c.version,size:m}}function s(c,u,h){const d=u.array,m=u._updateRange,g=u.updateRanges;if(r.bindBuffer(h,c),m.count===-1&&g.length===0&&r.bufferSubData(h,0,d),g.length!==0){for(let _=0,f=g.length;_<f;_++){const p=g[_];t?r.bufferSubData(h,p.start*d.BYTES_PER_ELEMENT,d,p.start,p.count):r.bufferSubData(h,p.start*d.BYTES_PER_ELEMENT,d.subarray(p.start,p.start+p.count))}u.clearUpdateRanges()}m.count!==-1&&(t?r.bufferSubData(h,m.offset*d.BYTES_PER_ELEMENT,d,m.offset,m.count):r.bufferSubData(h,m.offset*d.BYTES_PER_ELEMENT,d.subarray(m.offset,m.offset+m.count)),m.count=-1),u.onUploadCallback()}function a(c){return c.isInterleavedBufferAttribute&&(c=c.data),n.get(c)}function o(c){c.isInterleavedBufferAttribute&&(c=c.data);const u=n.get(c);u&&(r.deleteBuffer(u.buffer),n.delete(c))}function l(c,u){if(c.isGLBufferAttribute){const d=n.get(c);(!d||d.version<c.version)&&n.set(c,{buffer:c.buffer,type:c.type,bytesPerElement:c.elementSize,version:c.version});return}c.isInterleavedBufferAttribute&&(c=c.data);const h=n.get(c);if(h===void 0)n.set(c,i(c,u));else if(h.version<c.version){if(h.size!==c.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");s(h.buffer,c,u),h.version=c.version}}return{get:a,remove:o,update:l}}class go extends kn{constructor(e=1,t=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:i};const s=e/2,a=t/2,o=Math.floor(n),l=Math.floor(i),c=o+1,u=l+1,h=e/o,d=t/l,m=[],g=[],_=[],f=[];for(let p=0;p<u;p++){const M=p*d-a;for(let v=0;v<c;v++){const T=v*h-s;g.push(T,-M,0),_.push(0,0,1),f.push(v/o),f.push(1-p/l)}}for(let p=0;p<l;p++)for(let M=0;M<o;M++){const v=M+c*p,T=M+c*(p+1),E=M+1+c*(p+1),w=M+1+c*p;m.push(v,T,w),m.push(T,E,w)}this.setIndex(m),this.setAttribute("position",new Mn(g,3)),this.setAttribute("normal",new Mn(_,3)),this.setAttribute("uv",new Mn(f,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new go(e.width,e.height,e.widthSegments,e.heightSegments)}}var Cm=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Lm=`#ifdef USE_ALPHAHASH
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
#endif`,Pm=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Im=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Dm=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Nm=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Um=`#ifdef USE_AOMAP
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
#endif`,Fm=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Om=`#ifdef USE_BATCHING
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
#endif`,Bm=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( batchId );
#endif`,km=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,zm=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Gm=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Hm=`#ifdef USE_IRIDESCENCE
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
#endif`,Vm=`#ifdef USE_BUMPMAP
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
#endif`,Wm=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Xm=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,qm=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Ym=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,jm=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Km=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,$m=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,Zm=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,Jm=`#define PI 3.141592653589793
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
} // validated`,Qm=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,eg=`vec3 transformedNormal = objectNormal;
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
#endif`,tg=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,ng=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,ig=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,rg=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,sg="gl_FragColor = linearToOutputTexel( gl_FragColor );",ag=`
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
}`,og=`#ifdef USE_ENVMAP
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
#endif`,lg=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,cg=`#ifdef USE_ENVMAP
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
#endif`,ug=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,hg=`#ifdef USE_ENVMAP
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
#endif`,dg=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,fg=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,pg=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,mg=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,gg=`#ifdef USE_GRADIENTMAP
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
}`,_g=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,vg=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,xg=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,yg=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Mg=`uniform bool receiveShadow;
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
#endif`,Sg=`#ifdef USE_ENVMAP
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
#endif`,Eg=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,bg=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Tg=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Ag=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,wg=`PhysicalMaterial material;
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
#endif`,Rg=`struct PhysicalMaterial {
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
}`,Cg=`
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
#endif`,Lg=`#if defined( RE_IndirectDiffuse )
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
#endif`,Pg=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Ig=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Dg=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Ng=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,Ug=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,Fg=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Og=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Bg=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,kg=`#if defined( USE_POINTS_UV )
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
#endif`,zg=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Gg=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Hg=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[MORPHTARGETS_COUNT];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Vg=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Wg=`#ifdef USE_MORPHNORMALS
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
#endif`,Xg=`#ifdef USE_MORPHTARGETS
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
#endif`,qg=`#ifdef USE_MORPHTARGETS
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
#endif`,Yg=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,jg=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,Kg=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,$g=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Zg=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Jg=`#ifdef USE_NORMALMAP
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
#endif`,Qg=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,e_=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,t_=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,n_=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,i_=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,r_=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,s_=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,a_=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,o_=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,l_=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,c_=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,u_=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,h_=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,d_=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,f_=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,p_=`float getShadowMask() {
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
}`,m_=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,g_=`#ifdef USE_SKINNING
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
#endif`,__=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,v_=`#ifdef USE_SKINNING
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
#endif`,x_=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,y_=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,M_=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,S_=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,E_=`#ifdef USE_TRANSMISSION
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
#endif`,b_=`#ifdef USE_TRANSMISSION
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
#endif`,T_=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,A_=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,w_=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,R_=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const C_=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,L_=`uniform sampler2D t2D;
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
}`,P_=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,I_=`#ifdef ENVMAP_TYPE_CUBE
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
}`,D_=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,N_=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,U_=`#include <common>
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
}`,F_=`#if DEPTH_PACKING == 3200
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
}`,O_=`#define DISTANCE
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
}`,B_=`#define DISTANCE
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
}`,k_=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,z_=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,G_=`uniform float scale;
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
}`,H_=`uniform vec3 diffuse;
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
}`,V_=`#include <common>
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
}`,W_=`uniform vec3 diffuse;
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
}`,X_=`#define LAMBERT
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
}`,q_=`#define LAMBERT
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
}`,Y_=`#define MATCAP
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
}`,j_=`#define MATCAP
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
}`,K_=`#define NORMAL
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
}`,$_=`#define NORMAL
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
}`,Z_=`#define PHONG
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
}`,J_=`#define PHONG
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
}`,Q_=`#define STANDARD
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
}`,ev=`#define STANDARD
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
}`,tv=`#define TOON
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
}`,nv=`#define TOON
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
}`,iv=`uniform float size;
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
}`,rv=`uniform vec3 diffuse;
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
}`,sv=`#include <common>
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
}`,av=`uniform vec3 color;
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
}`,ov=`uniform float rotation;
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
}`,lv=`uniform vec3 diffuse;
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
}`,pt={alphahash_fragment:Cm,alphahash_pars_fragment:Lm,alphamap_fragment:Pm,alphamap_pars_fragment:Im,alphatest_fragment:Dm,alphatest_pars_fragment:Nm,aomap_fragment:Um,aomap_pars_fragment:Fm,batching_pars_vertex:Om,batching_vertex:Bm,begin_vertex:km,beginnormal_vertex:zm,bsdfs:Gm,iridescence_fragment:Hm,bumpmap_pars_fragment:Vm,clipping_planes_fragment:Wm,clipping_planes_pars_fragment:Xm,clipping_planes_pars_vertex:qm,clipping_planes_vertex:Ym,color_fragment:jm,color_pars_fragment:Km,color_pars_vertex:$m,color_vertex:Zm,common:Jm,cube_uv_reflection_fragment:Qm,defaultnormal_vertex:eg,displacementmap_pars_vertex:tg,displacementmap_vertex:ng,emissivemap_fragment:ig,emissivemap_pars_fragment:rg,colorspace_fragment:sg,colorspace_pars_fragment:ag,envmap_fragment:og,envmap_common_pars_fragment:lg,envmap_pars_fragment:cg,envmap_pars_vertex:ug,envmap_physical_pars_fragment:Sg,envmap_vertex:hg,fog_vertex:dg,fog_pars_vertex:fg,fog_fragment:pg,fog_pars_fragment:mg,gradientmap_pars_fragment:gg,lightmap_fragment:_g,lightmap_pars_fragment:vg,lights_lambert_fragment:xg,lights_lambert_pars_fragment:yg,lights_pars_begin:Mg,lights_toon_fragment:Eg,lights_toon_pars_fragment:bg,lights_phong_fragment:Tg,lights_phong_pars_fragment:Ag,lights_physical_fragment:wg,lights_physical_pars_fragment:Rg,lights_fragment_begin:Cg,lights_fragment_maps:Lg,lights_fragment_end:Pg,logdepthbuf_fragment:Ig,logdepthbuf_pars_fragment:Dg,logdepthbuf_pars_vertex:Ng,logdepthbuf_vertex:Ug,map_fragment:Fg,map_pars_fragment:Og,map_particle_fragment:Bg,map_particle_pars_fragment:kg,metalnessmap_fragment:zg,metalnessmap_pars_fragment:Gg,morphinstance_vertex:Hg,morphcolor_vertex:Vg,morphnormal_vertex:Wg,morphtarget_pars_vertex:Xg,morphtarget_vertex:qg,normal_fragment_begin:Yg,normal_fragment_maps:jg,normal_pars_fragment:Kg,normal_pars_vertex:$g,normal_vertex:Zg,normalmap_pars_fragment:Jg,clearcoat_normal_fragment_begin:Qg,clearcoat_normal_fragment_maps:e_,clearcoat_pars_fragment:t_,iridescence_pars_fragment:n_,opaque_fragment:i_,packing:r_,premultiplied_alpha_fragment:s_,project_vertex:a_,dithering_fragment:o_,dithering_pars_fragment:l_,roughnessmap_fragment:c_,roughnessmap_pars_fragment:u_,shadowmap_pars_fragment:h_,shadowmap_pars_vertex:d_,shadowmap_vertex:f_,shadowmask_pars_fragment:p_,skinbase_vertex:m_,skinning_pars_vertex:g_,skinning_vertex:__,skinnormal_vertex:v_,specularmap_fragment:x_,specularmap_pars_fragment:y_,tonemapping_fragment:M_,tonemapping_pars_fragment:S_,transmission_fragment:E_,transmission_pars_fragment:b_,uv_pars_fragment:T_,uv_pars_vertex:A_,uv_vertex:w_,worldpos_vertex:R_,background_vert:C_,background_frag:L_,backgroundCube_vert:P_,backgroundCube_frag:I_,cube_vert:D_,cube_frag:N_,depth_vert:U_,depth_frag:F_,distanceRGBA_vert:O_,distanceRGBA_frag:B_,equirect_vert:k_,equirect_frag:z_,linedashed_vert:G_,linedashed_frag:H_,meshbasic_vert:V_,meshbasic_frag:W_,meshlambert_vert:X_,meshlambert_frag:q_,meshmatcap_vert:Y_,meshmatcap_frag:j_,meshnormal_vert:K_,meshnormal_frag:$_,meshphong_vert:Z_,meshphong_frag:J_,meshphysical_vert:Q_,meshphysical_frag:ev,meshtoon_vert:tv,meshtoon_frag:nv,points_vert:iv,points_frag:rv,shadow_vert:sv,shadow_frag:av,sprite_vert:ov,sprite_frag:lv},pe={common:{diffuse:{value:new $e(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new mt},alphaMap:{value:null},alphaMapTransform:{value:new mt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new mt}},envmap:{envMap:{value:null},envMapRotation:{value:new mt},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new mt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new mt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new mt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new mt},normalScale:{value:new be(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new mt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new mt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new mt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new mt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new $e(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new $e(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new mt},alphaTest:{value:0},uvTransform:{value:new mt}},sprite:{diffuse:{value:new $e(16777215)},opacity:{value:1},center:{value:new be(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new mt},alphaMap:{value:null},alphaMapTransform:{value:new mt},alphaTest:{value:0}}},Ei={basic:{uniforms:Un([pe.common,pe.specularmap,pe.envmap,pe.aomap,pe.lightmap,pe.fog]),vertexShader:pt.meshbasic_vert,fragmentShader:pt.meshbasic_frag},lambert:{uniforms:Un([pe.common,pe.specularmap,pe.envmap,pe.aomap,pe.lightmap,pe.emissivemap,pe.bumpmap,pe.normalmap,pe.displacementmap,pe.fog,pe.lights,{emissive:{value:new $e(0)}}]),vertexShader:pt.meshlambert_vert,fragmentShader:pt.meshlambert_frag},phong:{uniforms:Un([pe.common,pe.specularmap,pe.envmap,pe.aomap,pe.lightmap,pe.emissivemap,pe.bumpmap,pe.normalmap,pe.displacementmap,pe.fog,pe.lights,{emissive:{value:new $e(0)},specular:{value:new $e(1118481)},shininess:{value:30}}]),vertexShader:pt.meshphong_vert,fragmentShader:pt.meshphong_frag},standard:{uniforms:Un([pe.common,pe.envmap,pe.aomap,pe.lightmap,pe.emissivemap,pe.bumpmap,pe.normalmap,pe.displacementmap,pe.roughnessmap,pe.metalnessmap,pe.fog,pe.lights,{emissive:{value:new $e(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:pt.meshphysical_vert,fragmentShader:pt.meshphysical_frag},toon:{uniforms:Un([pe.common,pe.aomap,pe.lightmap,pe.emissivemap,pe.bumpmap,pe.normalmap,pe.displacementmap,pe.gradientmap,pe.fog,pe.lights,{emissive:{value:new $e(0)}}]),vertexShader:pt.meshtoon_vert,fragmentShader:pt.meshtoon_frag},matcap:{uniforms:Un([pe.common,pe.bumpmap,pe.normalmap,pe.displacementmap,pe.fog,{matcap:{value:null}}]),vertexShader:pt.meshmatcap_vert,fragmentShader:pt.meshmatcap_frag},points:{uniforms:Un([pe.points,pe.fog]),vertexShader:pt.points_vert,fragmentShader:pt.points_frag},dashed:{uniforms:Un([pe.common,pe.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:pt.linedashed_vert,fragmentShader:pt.linedashed_frag},depth:{uniforms:Un([pe.common,pe.displacementmap]),vertexShader:pt.depth_vert,fragmentShader:pt.depth_frag},normal:{uniforms:Un([pe.common,pe.bumpmap,pe.normalmap,pe.displacementmap,{opacity:{value:1}}]),vertexShader:pt.meshnormal_vert,fragmentShader:pt.meshnormal_frag},sprite:{uniforms:Un([pe.sprite,pe.fog]),vertexShader:pt.sprite_vert,fragmentShader:pt.sprite_frag},background:{uniforms:{uvTransform:{value:new mt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:pt.background_vert,fragmentShader:pt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new mt}},vertexShader:pt.backgroundCube_vert,fragmentShader:pt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:pt.cube_vert,fragmentShader:pt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:pt.equirect_vert,fragmentShader:pt.equirect_frag},distanceRGBA:{uniforms:Un([pe.common,pe.displacementmap,{referencePosition:{value:new I},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:pt.distanceRGBA_vert,fragmentShader:pt.distanceRGBA_frag},shadow:{uniforms:Un([pe.lights,pe.fog,{color:{value:new $e(0)},opacity:{value:1}}]),vertexShader:pt.shadow_vert,fragmentShader:pt.shadow_frag}};Ei.physical={uniforms:Un([Ei.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new mt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new mt},clearcoatNormalScale:{value:new be(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new mt},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new mt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new mt},sheen:{value:0},sheenColor:{value:new $e(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new mt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new mt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new mt},transmissionSamplerSize:{value:new be},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new mt},attenuationDistance:{value:0},attenuationColor:{value:new $e(0)},specularColor:{value:new $e(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new mt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new mt},anisotropyVector:{value:new be},anisotropyMap:{value:null},anisotropyMapTransform:{value:new mt}}]),vertexShader:pt.meshphysical_vert,fragmentShader:pt.meshphysical_frag};const Ya={r:0,b:0,g:0},Nr=new Ri,cv=new Xe;function uv(r,e,t,n,i,s,a){const o=new $e(0);let l=s===!0?0:1,c,u,h=null,d=0,m=null;function g(f,p){let M=!1,v=p.isScene===!0?p.background:null;v&&v.isTexture&&(v=(p.backgroundBlurriness>0?t:e).get(v)),v===null?_(o,l):v&&v.isColor&&(_(v,1),M=!0);const T=r.xr.getEnvironmentBlendMode();T==="additive"?n.buffers.color.setClear(0,0,0,1,a):T==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,a),(r.autoClear||M)&&r.clear(r.autoClearColor,r.autoClearDepth,r.autoClearStencil),v&&(v.isCubeTexture||v.mapping===fo)?(u===void 0&&(u=new en(new di(1,1,1),new Qi({name:"BackgroundCubeMaterial",uniforms:Ds(Ei.backgroundCube.uniforms),vertexShader:Ei.backgroundCube.vertexShader,fragmentShader:Ei.backgroundCube.fragmentShader,side:Bn,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(E,w,S){this.matrixWorld.copyPosition(S.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(u)),Nr.copy(p.backgroundRotation),Nr.x*=-1,Nr.y*=-1,Nr.z*=-1,v.isCubeTexture&&v.isRenderTargetTexture===!1&&(Nr.y*=-1,Nr.z*=-1),u.material.uniforms.envMap.value=v,u.material.uniforms.flipEnvMap.value=v.isCubeTexture&&v.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=p.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=p.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(cv.makeRotationFromEuler(Nr)),u.material.toneMapped=Pt.getTransfer(v.colorSpace)!==Yt,(h!==v||d!==v.version||m!==r.toneMapping)&&(u.material.needsUpdate=!0,h=v,d=v.version,m=r.toneMapping),u.layers.enableAll(),f.unshift(u,u.geometry,u.material,0,0,null)):v&&v.isTexture&&(c===void 0&&(c=new en(new go(2,2),new Qi({name:"BackgroundMaterial",uniforms:Ds(Ei.background.uniforms),vertexShader:Ei.background.vertexShader,fragmentShader:Ei.background.fragmentShader,side:Ji,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(c)),c.material.uniforms.t2D.value=v,c.material.uniforms.backgroundIntensity.value=p.backgroundIntensity,c.material.toneMapped=Pt.getTransfer(v.colorSpace)!==Yt,v.matrixAutoUpdate===!0&&v.updateMatrix(),c.material.uniforms.uvTransform.value.copy(v.matrix),(h!==v||d!==v.version||m!==r.toneMapping)&&(c.material.needsUpdate=!0,h=v,d=v.version,m=r.toneMapping),c.layers.enableAll(),f.unshift(c,c.geometry,c.material,0,0,null))}function _(f,p){f.getRGB(Ya,gd(r)),n.buffers.color.setClear(Ya.r,Ya.g,Ya.b,p,a)}return{getClearColor:function(){return o},setClearColor:function(f,p=1){o.set(f),l=p,_(o,l)},getClearAlpha:function(){return l},setClearAlpha:function(f){l=f,_(o,l)},render:g}}function hv(r,e,t,n){const i=r.getParameter(r.MAX_VERTEX_ATTRIBS),s=n.isWebGL2?null:e.get("OES_vertex_array_object"),a=n.isWebGL2||s!==null,o={},l=f(null);let c=l,u=!1;function h(L,F,k,K,$){let Y=!1;if(a){const re=_(K,k,F);c!==re&&(c=re,m(c.object)),Y=p(L,K,k,$),Y&&M(L,K,k,$)}else{const re=F.wireframe===!0;(c.geometry!==K.id||c.program!==k.id||c.wireframe!==re)&&(c.geometry=K.id,c.program=k.id,c.wireframe=re,Y=!0)}$!==null&&t.update($,r.ELEMENT_ARRAY_BUFFER),(Y||u)&&(u=!1,P(L,F,k,K),$!==null&&r.bindBuffer(r.ELEMENT_ARRAY_BUFFER,t.get($).buffer))}function d(){return n.isWebGL2?r.createVertexArray():s.createVertexArrayOES()}function m(L){return n.isWebGL2?r.bindVertexArray(L):s.bindVertexArrayOES(L)}function g(L){return n.isWebGL2?r.deleteVertexArray(L):s.deleteVertexArrayOES(L)}function _(L,F,k){const K=k.wireframe===!0;let $=o[L.id];$===void 0&&($={},o[L.id]=$);let Y=$[F.id];Y===void 0&&(Y={},$[F.id]=Y);let re=Y[K];return re===void 0&&(re=f(d()),Y[K]=re),re}function f(L){const F=[],k=[],K=[];for(let $=0;$<i;$++)F[$]=0,k[$]=0,K[$]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:F,enabledAttributes:k,attributeDivisors:K,object:L,attributes:{},index:null}}function p(L,F,k,K){const $=c.attributes,Y=F.attributes;let re=0;const le=k.getAttributes();for(const ve in le)if(le[ve].location>=0){const X=$[ve];let se=Y[ve];if(se===void 0&&(ve==="instanceMatrix"&&L.instanceMatrix&&(se=L.instanceMatrix),ve==="instanceColor"&&L.instanceColor&&(se=L.instanceColor)),X===void 0||X.attribute!==se||se&&X.data!==se.data)return!0;re++}return c.attributesNum!==re||c.index!==K}function M(L,F,k,K){const $={},Y=F.attributes;let re=0;const le=k.getAttributes();for(const ve in le)if(le[ve].location>=0){let X=Y[ve];X===void 0&&(ve==="instanceMatrix"&&L.instanceMatrix&&(X=L.instanceMatrix),ve==="instanceColor"&&L.instanceColor&&(X=L.instanceColor));const se={};se.attribute=X,X&&X.data&&(se.data=X.data),$[ve]=se,re++}c.attributes=$,c.attributesNum=re,c.index=K}function v(){const L=c.newAttributes;for(let F=0,k=L.length;F<k;F++)L[F]=0}function T(L){E(L,0)}function E(L,F){const k=c.newAttributes,K=c.enabledAttributes,$=c.attributeDivisors;k[L]=1,K[L]===0&&(r.enableVertexAttribArray(L),K[L]=1),$[L]!==F&&((n.isWebGL2?r:e.get("ANGLE_instanced_arrays"))[n.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](L,F),$[L]=F)}function w(){const L=c.newAttributes,F=c.enabledAttributes;for(let k=0,K=F.length;k<K;k++)F[k]!==L[k]&&(r.disableVertexAttribArray(k),F[k]=0)}function S(L,F,k,K,$,Y,re){re===!0?r.vertexAttribIPointer(L,F,k,$,Y):r.vertexAttribPointer(L,F,k,K,$,Y)}function P(L,F,k,K){if(n.isWebGL2===!1&&(L.isInstancedMesh||K.isInstancedBufferGeometry)&&e.get("ANGLE_instanced_arrays")===null)return;v();const $=K.attributes,Y=k.getAttributes(),re=F.defaultAttributeValues;for(const le in Y){const ve=Y[le];if(ve.location>=0){let He=$[le];if(He===void 0&&(le==="instanceMatrix"&&L.instanceMatrix&&(He=L.instanceMatrix),le==="instanceColor"&&L.instanceColor&&(He=L.instanceColor)),He!==void 0){const X=He.normalized,se=He.itemSize,Se=t.get(He);if(Se===void 0)continue;const Ve=Se.buffer,Re=Se.type,Te=Se.bytesPerElement,Et=n.isWebGL2===!0&&(Re===r.INT||Re===r.UNSIGNED_INT||He.gpuType===Kh);if(He.isInterleavedBufferAttribute){const je=He.data,B=je.stride,kt=He.offset;if(je.isInstancedInterleavedBuffer){for(let Ie=0;Ie<ve.locationSize;Ie++)E(ve.location+Ie,je.meshPerAttribute);L.isInstancedMesh!==!0&&K._maxInstanceCount===void 0&&(K._maxInstanceCount=je.meshPerAttribute*je.count)}else for(let Ie=0;Ie<ve.locationSize;Ie++)T(ve.location+Ie);r.bindBuffer(r.ARRAY_BUFFER,Ve);for(let Ie=0;Ie<ve.locationSize;Ie++)S(ve.location+Ie,se/ve.locationSize,Re,X,B*Te,(kt+se/ve.locationSize*Ie)*Te,Et)}else{if(He.isInstancedBufferAttribute){for(let je=0;je<ve.locationSize;je++)E(ve.location+je,He.meshPerAttribute);L.isInstancedMesh!==!0&&K._maxInstanceCount===void 0&&(K._maxInstanceCount=He.meshPerAttribute*He.count)}else for(let je=0;je<ve.locationSize;je++)T(ve.location+je);r.bindBuffer(r.ARRAY_BUFFER,Ve);for(let je=0;je<ve.locationSize;je++)S(ve.location+je,se/ve.locationSize,Re,X,se*Te,se/ve.locationSize*je*Te,Et)}}else if(re!==void 0){const X=re[le];if(X!==void 0)switch(X.length){case 2:r.vertexAttrib2fv(ve.location,X);break;case 3:r.vertexAttrib3fv(ve.location,X);break;case 4:r.vertexAttrib4fv(ve.location,X);break;default:r.vertexAttrib1fv(ve.location,X)}}}}w()}function D(){U();for(const L in o){const F=o[L];for(const k in F){const K=F[k];for(const $ in K)g(K[$].object),delete K[$];delete F[k]}delete o[L]}}function x(L){if(o[L.id]===void 0)return;const F=o[L.id];for(const k in F){const K=F[k];for(const $ in K)g(K[$].object),delete K[$];delete F[k]}delete o[L.id]}function b(L){for(const F in o){const k=o[F];if(k[L.id]===void 0)continue;const K=k[L.id];for(const $ in K)g(K[$].object),delete K[$];delete k[L.id]}}function U(){j(),u=!0,c!==l&&(c=l,m(c.object))}function j(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:h,reset:U,resetDefaultState:j,dispose:D,releaseStatesOfGeometry:x,releaseStatesOfProgram:b,initAttributes:v,enableAttribute:T,disableUnusedAttributes:w}}function dv(r,e,t,n){const i=n.isWebGL2;let s;function a(u){s=u}function o(u,h){r.drawArrays(s,u,h),t.update(h,s,1)}function l(u,h,d){if(d===0)return;let m,g;if(i)m=r,g="drawArraysInstanced";else if(m=e.get("ANGLE_instanced_arrays"),g="drawArraysInstancedANGLE",m===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}m[g](s,u,h,d),t.update(h,s,d)}function c(u,h,d){if(d===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let g=0;g<d;g++)this.render(u[g],h[g]);else{m.multiDrawArraysWEBGL(s,u,0,h,0,d);let g=0;for(let _=0;_<d;_++)g+=h[_];t.update(g,s,1)}}this.setMode=a,this.render=o,this.renderInstances=l,this.renderMultiDraw=c}function fv(r,e,t){let n;function i(){if(n!==void 0)return n;if(e.has("EXT_texture_filter_anisotropic")===!0){const S=e.get("EXT_texture_filter_anisotropic");n=r.getParameter(S.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else n=0;return n}function s(S){if(S==="highp"){if(r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.HIGH_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.HIGH_FLOAT).precision>0)return"highp";S="mediump"}return S==="mediump"&&r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.MEDIUM_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}const a=typeof WebGL2RenderingContext<"u"&&r.constructor.name==="WebGL2RenderingContext";let o=t.precision!==void 0?t.precision:"highp";const l=s(o);l!==o&&(console.warn("THREE.WebGLRenderer:",o,"not supported, using",l,"instead."),o=l);const c=a||e.has("WEBGL_draw_buffers"),u=t.logarithmicDepthBuffer===!0,h=r.getParameter(r.MAX_TEXTURE_IMAGE_UNITS),d=r.getParameter(r.MAX_VERTEX_TEXTURE_IMAGE_UNITS),m=r.getParameter(r.MAX_TEXTURE_SIZE),g=r.getParameter(r.MAX_CUBE_MAP_TEXTURE_SIZE),_=r.getParameter(r.MAX_VERTEX_ATTRIBS),f=r.getParameter(r.MAX_VERTEX_UNIFORM_VECTORS),p=r.getParameter(r.MAX_VARYING_VECTORS),M=r.getParameter(r.MAX_FRAGMENT_UNIFORM_VECTORS),v=d>0,T=a||e.has("OES_texture_float"),E=v&&T,w=a?r.getParameter(r.MAX_SAMPLES):0;return{isWebGL2:a,drawBuffers:c,getMaxAnisotropy:i,getMaxPrecision:s,precision:o,logarithmicDepthBuffer:u,maxTextures:h,maxVertexTextures:d,maxTextureSize:m,maxCubemapSize:g,maxAttributes:_,maxVertexUniforms:f,maxVaryings:p,maxFragmentUniforms:M,vertexTextures:v,floatFragmentTextures:T,floatVertexTextures:E,maxSamples:w}}function pv(r){const e=this;let t=null,n=0,i=!1,s=!1;const a=new Br,o=new mt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(h,d){const m=h.length!==0||d||n!==0||i;return i=d,n=h.length,m},this.beginShadows=function(){s=!0,u(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(h,d){t=u(h,d,0)},this.setState=function(h,d,m){const g=h.clippingPlanes,_=h.clipIntersection,f=h.clipShadows,p=r.get(h);if(!i||g===null||g.length===0||s&&!f)s?u(null):c();else{const M=s?0:n,v=M*4;let T=p.clippingState||null;l.value=T,T=u(g,d,v,m);for(let E=0;E!==v;++E)T[E]=t[E];p.clippingState=T,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=M}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function u(h,d,m,g){const _=h!==null?h.length:0;let f=null;if(_!==0){if(f=l.value,g!==!0||f===null){const p=m+_*4,M=d.matrixWorldInverse;o.getNormalMatrix(M),(f===null||f.length<p)&&(f=new Float32Array(p));for(let v=0,T=m;v!==_;++v,T+=4)a.copy(h[v]).applyMatrix4(M,o),a.normal.toArray(f,T),f[T+3]=a.constant}l.value=f,l.needsUpdate=!0}return e.numPlanes=_,e.numIntersection=0,f}}function mv(r){let e=new WeakMap;function t(a,o){return o===Il?a.mapping=ws:o===Dl&&(a.mapping=Rs),a}function n(a){if(a&&a.isTexture){const o=a.mapping;if(o===Il||o===Dl)if(e.has(a)){const l=e.get(a).texture;return t(l,a.mapping)}else{const l=a.image;if(l&&l.height>0){const c=new Tm(l.height);return c.fromEquirectangularTexture(r,a),e.set(a,c),a.addEventListener("dispose",i),t(c.texture,a.mapping)}else return null}}return a}function i(a){const o=a.target;o.removeEventListener("dispose",i);const l=e.get(o);l!==void 0&&(e.delete(o),l.dispose())}function s(){e=new WeakMap}return{get:n,dispose:s}}class nc extends ec{constructor(e=-1,t=1,n=1,i=-1,s=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=i,this.near=s,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,i,s,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2;let s=n-e,a=n+e,o=i+t,l=i-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,a=s+c*this.view.width,o-=u*this.view.offsetY,l=o-u*this.view.height}this.projectionMatrix.makeOrthographic(s,a,o,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const ys=4,Wu=[.125,.215,.35,.446,.526,.582],Gr=20,ll=new nc,Xu=new $e;let cl=null,ul=0,hl=0;const kr=(1+Math.sqrt(5))/2,ms=1/kr,qu=[new I(1,1,1),new I(-1,1,1),new I(1,1,-1),new I(-1,1,-1),new I(0,kr,ms),new I(0,kr,-ms),new I(ms,0,kr),new I(-ms,0,kr),new I(kr,ms,0),new I(-kr,ms,0)];class Yu{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,i=100){cl=this._renderer.getRenderTarget(),ul=this._renderer.getActiveCubeFace(),hl=this._renderer.getActiveMipmapLevel(),this._setSize(256);const s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(e,n,i,s),t>0&&this._blur(s,0,0,t),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=$u(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Ku(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(cl,ul,hl),e.scissorTest=!1,ja(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===ws||e.mapping===Rs?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),cl=this._renderer.getRenderTarget(),ul=this._renderer.getActiveCubeFace(),hl=this._renderer.getActiveMipmapLevel();const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:Pn,minFilter:Pn,generateMipmaps:!1,type:da,format:ri,colorSpace:Tn,depthBuffer:!1},i=ju(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=ju(e,t,n);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=gv(s)),this._blurMaterial=_v(s,e,t)}return i}_compileMaterial(e){const t=new en(this._lodPlanes[0],e);this._renderer.compile(t,ll)}_sceneToCubeUV(e,t,n,i){const o=new On(90,1,t,n),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],u=this._renderer,h=u.autoClear,d=u.toneMapping;u.getClearColor(Xu),u.toneMapping=_r,u.autoClear=!1;const m=new Hr({name:"PMREM.Background",side:Bn,depthWrite:!1,depthTest:!1}),g=new en(new di,m);let _=!1;const f=e.background;f?f.isColor&&(m.color.copy(f),e.background=null,_=!0):(m.color.copy(Xu),_=!0);for(let p=0;p<6;p++){const M=p%3;M===0?(o.up.set(0,l[p],0),o.lookAt(c[p],0,0)):M===1?(o.up.set(0,0,l[p]),o.lookAt(0,c[p],0)):(o.up.set(0,l[p],0),o.lookAt(0,0,c[p]));const v=this._cubeSize;ja(i,M*v,p>2?v:0,v,v),u.setRenderTarget(i),_&&u.render(g,o),u.render(e,o)}g.geometry.dispose(),g.material.dispose(),u.toneMapping=d,u.autoClear=h,e.background=f}_textureToCubeUV(e,t){const n=this._renderer,i=e.mapping===ws||e.mapping===Rs;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=$u()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Ku());const s=i?this._cubemapMaterial:this._equirectMaterial,a=new en(this._lodPlanes[0],s),o=s.uniforms;o.envMap.value=e;const l=this._cubeSize;ja(t,0,0,3*l,2*l),n.setRenderTarget(t),n.render(a,ll)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;for(let i=1;i<this._lodPlanes.length;i++){const s=Math.sqrt(this._sigmas[i]*this._sigmas[i]-this._sigmas[i-1]*this._sigmas[i-1]),a=qu[(i-1)%qu.length];this._blur(e,i-1,i,s,a)}t.autoClear=n}_blur(e,t,n,i,s){const a=this._pingPongRenderTarget;this._halfBlur(e,a,t,n,i,"latitudinal",s),this._halfBlur(a,e,n,n,i,"longitudinal",s)}_halfBlur(e,t,n,i,s,a,o){const l=this._renderer,c=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,h=new en(this._lodPlanes[i],c),d=c.uniforms,m=this._sizeLods[n]-1,g=isFinite(s)?Math.PI/(2*m):2*Math.PI/(2*Gr-1),_=s/g,f=isFinite(s)?1+Math.floor(u*_):Gr;f>Gr&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${f} samples when the maximum is set to ${Gr}`);const p=[];let M=0;for(let S=0;S<Gr;++S){const P=S/_,D=Math.exp(-P*P/2);p.push(D),S===0?M+=D:S<f&&(M+=2*D)}for(let S=0;S<p.length;S++)p[S]=p[S]/M;d.envMap.value=e.texture,d.samples.value=f,d.weights.value=p,d.latitudinal.value=a==="latitudinal",o&&(d.poleAxis.value=o);const{_lodMax:v}=this;d.dTheta.value=g,d.mipInt.value=v-n;const T=this._sizeLods[i],E=3*T*(i>v-ys?i-v+ys:0),w=4*(this._cubeSize-T);ja(t,E,w,3*T,2*T),l.setRenderTarget(t),l.render(h,ll)}}function gv(r){const e=[],t=[],n=[];let i=r;const s=r-ys+1+Wu.length;for(let a=0;a<s;a++){const o=Math.pow(2,i);t.push(o);let l=1/o;a>r-ys?l=Wu[a-r+ys-1]:a===0&&(l=0),n.push(l);const c=1/(o-2),u=-c,h=1+c,d=[u,u,h,u,h,h,u,u,h,h,u,h],m=6,g=6,_=3,f=2,p=1,M=new Float32Array(_*g*m),v=new Float32Array(f*g*m),T=new Float32Array(p*g*m);for(let w=0;w<m;w++){const S=w%3*2/3-1,P=w>2?0:-1,D=[S,P,0,S+2/3,P,0,S+2/3,P+1,0,S,P,0,S+2/3,P+1,0,S,P+1,0];M.set(D,_*g*w),v.set(d,f*g*w);const x=[w,w,w,w,w,w];T.set(x,p*g*w)}const E=new kn;E.setAttribute("position",new dn(M,_)),E.setAttribute("uv",new dn(v,f)),E.setAttribute("faceIndex",new dn(T,p)),e.push(E),i>ys&&i--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function ju(r,e,t){const n=new Xr(r,e,t);return n.texture.mapping=fo,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function ja(r,e,t,n,i){r.viewport.set(e,t,n,i),r.scissor.set(e,t,n,i)}function _v(r,e,t){const n=new Float32Array(Gr),i=new I(0,1,0);return new Qi({name:"SphericalGaussianBlur",defines:{n:Gr,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${r}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:i}},vertexShader:ic(),fragmentShader:`

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
		`,blending:gr,depthTest:!1,depthWrite:!1})}function Ku(){return new Qi({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:ic(),fragmentShader:`

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
		`,blending:gr,depthTest:!1,depthWrite:!1})}function $u(){return new Qi({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:ic(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:gr,depthTest:!1,depthWrite:!1})}function ic(){return`

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
	`}function vv(r){let e=new WeakMap,t=null;function n(o){if(o&&o.isTexture){const l=o.mapping,c=l===Il||l===Dl,u=l===ws||l===Rs;if(c||u)if(o.isRenderTargetTexture&&o.needsPMREMUpdate===!0){o.needsPMREMUpdate=!1;let h=e.get(o);return t===null&&(t=new Yu(r)),h=c?t.fromEquirectangular(o,h):t.fromCubemap(o,h),e.set(o,h),h.texture}else{if(e.has(o))return e.get(o).texture;{const h=o.image;if(c&&h&&h.height>0||u&&h&&i(h)){t===null&&(t=new Yu(r));const d=c?t.fromEquirectangular(o):t.fromCubemap(o);return e.set(o,d),o.addEventListener("dispose",s),d.texture}else return null}}}return o}function i(o){let l=0;const c=6;for(let u=0;u<c;u++)o[u]!==void 0&&l++;return l===c}function s(o){const l=o.target;l.removeEventListener("dispose",s);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function a(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:a}}function xv(r){const e={};function t(n){if(e[n]!==void 0)return e[n];let i;switch(n){case"WEBGL_depth_texture":i=r.getExtension("WEBGL_depth_texture")||r.getExtension("MOZ_WEBGL_depth_texture")||r.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":i=r.getExtension("EXT_texture_filter_anisotropic")||r.getExtension("MOZ_EXT_texture_filter_anisotropic")||r.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":i=r.getExtension("WEBGL_compressed_texture_s3tc")||r.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||r.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":i=r.getExtension("WEBGL_compressed_texture_pvrtc")||r.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:i=r.getExtension(n)}return e[n]=i,i}return{has:function(n){return t(n)!==null},init:function(n){n.isWebGL2?(t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance")):(t("WEBGL_depth_texture"),t("OES_texture_float"),t("OES_texture_half_float"),t("OES_texture_half_float_linear"),t("OES_standard_derivatives"),t("OES_element_index_uint"),t("OES_vertex_array_object"),t("ANGLE_instanced_arrays")),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture")},get:function(n){const i=t(n);return i===null&&console.warn("THREE.WebGLRenderer: "+n+" extension not supported."),i}}}function yv(r,e,t,n){const i={},s=new WeakMap;function a(h){const d=h.target;d.index!==null&&e.remove(d.index);for(const g in d.attributes)e.remove(d.attributes[g]);for(const g in d.morphAttributes){const _=d.morphAttributes[g];for(let f=0,p=_.length;f<p;f++)e.remove(_[f])}d.removeEventListener("dispose",a),delete i[d.id];const m=s.get(d);m&&(e.remove(m),s.delete(d)),n.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,t.memory.geometries--}function o(h,d){return i[d.id]===!0||(d.addEventListener("dispose",a),i[d.id]=!0,t.memory.geometries++),d}function l(h){const d=h.attributes;for(const g in d)e.update(d[g],r.ARRAY_BUFFER);const m=h.morphAttributes;for(const g in m){const _=m[g];for(let f=0,p=_.length;f<p;f++)e.update(_[f],r.ARRAY_BUFFER)}}function c(h){const d=[],m=h.index,g=h.attributes.position;let _=0;if(m!==null){const M=m.array;_=m.version;for(let v=0,T=M.length;v<T;v+=3){const E=M[v+0],w=M[v+1],S=M[v+2];d.push(E,w,w,S,S,E)}}else if(g!==void 0){const M=g.array;_=g.version;for(let v=0,T=M.length/3-1;v<T;v+=3){const E=v+0,w=v+1,S=v+2;d.push(E,w,w,S,S,E)}}else return;const f=new(od(d)?md:pd)(d,1);f.version=_;const p=s.get(h);p&&e.remove(p),s.set(h,f)}function u(h){const d=s.get(h);if(d){const m=h.index;m!==null&&d.version<m.version&&c(h)}else c(h);return s.get(h)}return{get:o,update:l,getWireframeAttribute:u}}function Mv(r,e,t,n){const i=n.isWebGL2;let s;function a(m){s=m}let o,l;function c(m){o=m.type,l=m.bytesPerElement}function u(m,g){r.drawElements(s,g,o,m*l),t.update(g,s,1)}function h(m,g,_){if(_===0)return;let f,p;if(i)f=r,p="drawElementsInstanced";else if(f=e.get("ANGLE_instanced_arrays"),p="drawElementsInstancedANGLE",f===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}f[p](s,g,o,m*l,_),t.update(g,s,_)}function d(m,g,_){if(_===0)return;const f=e.get("WEBGL_multi_draw");if(f===null)for(let p=0;p<_;p++)this.render(m[p]/l,g[p]);else{f.multiDrawElementsWEBGL(s,g,0,o,m,0,_);let p=0;for(let M=0;M<_;M++)p+=g[M];t.update(p,s,1)}}this.setMode=a,this.setIndex=c,this.render=u,this.renderInstances=h,this.renderMultiDraw=d}function Sv(r){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(s,a,o){switch(t.calls++,a){case r.TRIANGLES:t.triangles+=o*(s/3);break;case r.LINES:t.lines+=o*(s/2);break;case r.LINE_STRIP:t.lines+=o*(s-1);break;case r.LINE_LOOP:t.lines+=o*s;break;case r.POINTS:t.points+=o*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function i(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:i,update:n}}function Ev(r,e){return r[0]-e[0]}function bv(r,e){return Math.abs(e[1])-Math.abs(r[1])}function Tv(r,e,t){const n={},i=new Float32Array(8),s=new WeakMap,a=new Vt,o=[];for(let c=0;c<8;c++)o[c]=[c,0];function l(c,u,h){const d=c.morphTargetInfluences;if(e.isWebGL2===!0){const m=u.morphAttributes.position||u.morphAttributes.normal||u.morphAttributes.color,g=m!==void 0?m.length:0;let _=s.get(u);if(_===void 0||_.count!==g){let U=function(){x.dispose(),s.delete(u),u.removeEventListener("dispose",U)};_!==void 0&&_.texture.dispose();const f=u.morphAttributes.position!==void 0,p=u.morphAttributes.normal!==void 0,M=u.morphAttributes.color!==void 0,v=u.morphAttributes.position||[],T=u.morphAttributes.normal||[],E=u.morphAttributes.color||[];let w=0;f===!0&&(w=1),p===!0&&(w=2),M===!0&&(w=3);let S=u.attributes.position.count*w,P=1;S>e.maxTextureSize&&(P=Math.ceil(S/e.maxTextureSize),S=e.maxTextureSize);const D=new Float32Array(S*P*4*g),x=new hd(D,S,P,g);x.type=pi,x.needsUpdate=!0;const b=w*4;for(let j=0;j<g;j++){const L=v[j],F=T[j],k=E[j],K=S*P*4*j;for(let $=0;$<L.count;$++){const Y=$*b;f===!0&&(a.fromBufferAttribute(L,$),D[K+Y+0]=a.x,D[K+Y+1]=a.y,D[K+Y+2]=a.z,D[K+Y+3]=0),p===!0&&(a.fromBufferAttribute(F,$),D[K+Y+4]=a.x,D[K+Y+5]=a.y,D[K+Y+6]=a.z,D[K+Y+7]=0),M===!0&&(a.fromBufferAttribute(k,$),D[K+Y+8]=a.x,D[K+Y+9]=a.y,D[K+Y+10]=a.z,D[K+Y+11]=k.itemSize===4?a.w:1)}}_={count:g,texture:x,size:new be(S,P)},s.set(u,_),u.addEventListener("dispose",U)}if(c.isInstancedMesh===!0&&c.morphTexture!==null)h.getUniforms().setValue(r,"morphTexture",c.morphTexture,t);else{let f=0;for(let M=0;M<d.length;M++)f+=d[M];const p=u.morphTargetsRelative?1:1-f;h.getUniforms().setValue(r,"morphTargetBaseInfluence",p),h.getUniforms().setValue(r,"morphTargetInfluences",d)}h.getUniforms().setValue(r,"morphTargetsTexture",_.texture,t),h.getUniforms().setValue(r,"morphTargetsTextureSize",_.size)}else{const m=d===void 0?0:d.length;let g=n[u.id];if(g===void 0||g.length!==m){g=[];for(let v=0;v<m;v++)g[v]=[v,0];n[u.id]=g}for(let v=0;v<m;v++){const T=g[v];T[0]=v,T[1]=d[v]}g.sort(bv);for(let v=0;v<8;v++)v<m&&g[v][1]?(o[v][0]=g[v][0],o[v][1]=g[v][1]):(o[v][0]=Number.MAX_SAFE_INTEGER,o[v][1]=0);o.sort(Ev);const _=u.morphAttributes.position,f=u.morphAttributes.normal;let p=0;for(let v=0;v<8;v++){const T=o[v],E=T[0],w=T[1];E!==Number.MAX_SAFE_INTEGER&&w?(_&&u.getAttribute("morphTarget"+v)!==_[E]&&u.setAttribute("morphTarget"+v,_[E]),f&&u.getAttribute("morphNormal"+v)!==f[E]&&u.setAttribute("morphNormal"+v,f[E]),i[v]=w,p+=w):(_&&u.hasAttribute("morphTarget"+v)===!0&&u.deleteAttribute("morphTarget"+v),f&&u.hasAttribute("morphNormal"+v)===!0&&u.deleteAttribute("morphNormal"+v),i[v]=0)}const M=u.morphTargetsRelative?1:1-p;h.getUniforms().setValue(r,"morphTargetBaseInfluence",M),h.getUniforms().setValue(r,"morphTargetInfluences",i)}}return{update:l}}function Av(r,e,t,n){let i=new WeakMap;function s(l){const c=n.render.frame,u=l.geometry,h=e.get(l,u);if(i.get(h)!==c&&(e.update(h),i.set(h,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",o)===!1&&l.addEventListener("dispose",o),i.get(l)!==c&&(t.update(l.instanceMatrix,r.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,r.ARRAY_BUFFER),i.set(l,c))),l.isSkinnedMesh){const d=l.skeleton;i.get(d)!==c&&(d.update(),i.set(d,c))}return h}function a(){i=new WeakMap}function o(l){const c=l.target;c.removeEventListener("dispose",o),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:s,dispose:a}}class xd extends yn{constructor(e,t,n,i,s,a,o,l,c,u){if(u=u!==void 0?u:Wr,u!==Wr&&u!==Ls)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&u===Wr&&(n=pr),n===void 0&&u===Ls&&(n=Vr),super(null,i,s,a,o,l,u,n,c),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=o!==void 0?o:xn,this.minFilter=l!==void 0?l:xn,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}const yd=new yn,Md=new xd(1,1);Md.compareFunction=sd;const Sd=new hd,Ed=new lm,bd=new _d,Zu=[],Ju=[],Qu=new Float32Array(16),eh=new Float32Array(9),th=new Float32Array(4);function ks(r,e,t){const n=r[0];if(n<=0||n>0)return r;const i=e*t;let s=Zu[i];if(s===void 0&&(s=new Float32Array(i),Zu[i]=s),e!==0){n.toArray(s,0);for(let a=1,o=0;a!==e;++a)o+=t,r[a].toArray(s,o)}return s}function fn(r,e){if(r.length!==e.length)return!1;for(let t=0,n=r.length;t<n;t++)if(r[t]!==e[t])return!1;return!0}function pn(r,e){for(let t=0,n=e.length;t<n;t++)r[t]=e[t]}function _o(r,e){let t=Ju[e];t===void 0&&(t=new Int32Array(e),Ju[e]=t);for(let n=0;n!==e;++n)t[n]=r.allocateTextureUnit();return t}function wv(r,e){const t=this.cache;t[0]!==e&&(r.uniform1f(this.addr,e),t[0]=e)}function Rv(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(fn(t,e))return;r.uniform2fv(this.addr,e),pn(t,e)}}function Cv(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(r.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(fn(t,e))return;r.uniform3fv(this.addr,e),pn(t,e)}}function Lv(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(fn(t,e))return;r.uniform4fv(this.addr,e),pn(t,e)}}function Pv(r,e){const t=this.cache,n=e.elements;if(n===void 0){if(fn(t,e))return;r.uniformMatrix2fv(this.addr,!1,e),pn(t,e)}else{if(fn(t,n))return;th.set(n),r.uniformMatrix2fv(this.addr,!1,th),pn(t,n)}}function Iv(r,e){const t=this.cache,n=e.elements;if(n===void 0){if(fn(t,e))return;r.uniformMatrix3fv(this.addr,!1,e),pn(t,e)}else{if(fn(t,n))return;eh.set(n),r.uniformMatrix3fv(this.addr,!1,eh),pn(t,n)}}function Dv(r,e){const t=this.cache,n=e.elements;if(n===void 0){if(fn(t,e))return;r.uniformMatrix4fv(this.addr,!1,e),pn(t,e)}else{if(fn(t,n))return;Qu.set(n),r.uniformMatrix4fv(this.addr,!1,Qu),pn(t,n)}}function Nv(r,e){const t=this.cache;t[0]!==e&&(r.uniform1i(this.addr,e),t[0]=e)}function Uv(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(fn(t,e))return;r.uniform2iv(this.addr,e),pn(t,e)}}function Fv(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(fn(t,e))return;r.uniform3iv(this.addr,e),pn(t,e)}}function Ov(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(fn(t,e))return;r.uniform4iv(this.addr,e),pn(t,e)}}function Bv(r,e){const t=this.cache;t[0]!==e&&(r.uniform1ui(this.addr,e),t[0]=e)}function kv(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(fn(t,e))return;r.uniform2uiv(this.addr,e),pn(t,e)}}function zv(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(fn(t,e))return;r.uniform3uiv(this.addr,e),pn(t,e)}}function Gv(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(fn(t,e))return;r.uniform4uiv(this.addr,e),pn(t,e)}}function Hv(r,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i);const s=this.type===r.SAMPLER_2D_SHADOW?Md:yd;t.setTexture2D(e||s,i)}function Vv(r,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),t.setTexture3D(e||Ed,i)}function Wv(r,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),t.setTextureCube(e||bd,i)}function Xv(r,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),t.setTexture2DArray(e||Sd,i)}function qv(r){switch(r){case 5126:return wv;case 35664:return Rv;case 35665:return Cv;case 35666:return Lv;case 35674:return Pv;case 35675:return Iv;case 35676:return Dv;case 5124:case 35670:return Nv;case 35667:case 35671:return Uv;case 35668:case 35672:return Fv;case 35669:case 35673:return Ov;case 5125:return Bv;case 36294:return kv;case 36295:return zv;case 36296:return Gv;case 35678:case 36198:case 36298:case 36306:case 35682:return Hv;case 35679:case 36299:case 36307:return Vv;case 35680:case 36300:case 36308:case 36293:return Wv;case 36289:case 36303:case 36311:case 36292:return Xv}}function Yv(r,e){r.uniform1fv(this.addr,e)}function jv(r,e){const t=ks(e,this.size,2);r.uniform2fv(this.addr,t)}function Kv(r,e){const t=ks(e,this.size,3);r.uniform3fv(this.addr,t)}function $v(r,e){const t=ks(e,this.size,4);r.uniform4fv(this.addr,t)}function Zv(r,e){const t=ks(e,this.size,4);r.uniformMatrix2fv(this.addr,!1,t)}function Jv(r,e){const t=ks(e,this.size,9);r.uniformMatrix3fv(this.addr,!1,t)}function Qv(r,e){const t=ks(e,this.size,16);r.uniformMatrix4fv(this.addr,!1,t)}function e0(r,e){r.uniform1iv(this.addr,e)}function t0(r,e){r.uniform2iv(this.addr,e)}function n0(r,e){r.uniform3iv(this.addr,e)}function i0(r,e){r.uniform4iv(this.addr,e)}function r0(r,e){r.uniform1uiv(this.addr,e)}function s0(r,e){r.uniform2uiv(this.addr,e)}function a0(r,e){r.uniform3uiv(this.addr,e)}function o0(r,e){r.uniform4uiv(this.addr,e)}function l0(r,e,t){const n=this.cache,i=e.length,s=_o(t,i);fn(n,s)||(r.uniform1iv(this.addr,s),pn(n,s));for(let a=0;a!==i;++a)t.setTexture2D(e[a]||yd,s[a])}function c0(r,e,t){const n=this.cache,i=e.length,s=_o(t,i);fn(n,s)||(r.uniform1iv(this.addr,s),pn(n,s));for(let a=0;a!==i;++a)t.setTexture3D(e[a]||Ed,s[a])}function u0(r,e,t){const n=this.cache,i=e.length,s=_o(t,i);fn(n,s)||(r.uniform1iv(this.addr,s),pn(n,s));for(let a=0;a!==i;++a)t.setTextureCube(e[a]||bd,s[a])}function h0(r,e,t){const n=this.cache,i=e.length,s=_o(t,i);fn(n,s)||(r.uniform1iv(this.addr,s),pn(n,s));for(let a=0;a!==i;++a)t.setTexture2DArray(e[a]||Sd,s[a])}function d0(r){switch(r){case 5126:return Yv;case 35664:return jv;case 35665:return Kv;case 35666:return $v;case 35674:return Zv;case 35675:return Jv;case 35676:return Qv;case 5124:case 35670:return e0;case 35667:case 35671:return t0;case 35668:case 35672:return n0;case 35669:case 35673:return i0;case 5125:return r0;case 36294:return s0;case 36295:return a0;case 36296:return o0;case 35678:case 36198:case 36298:case 36306:case 35682:return l0;case 35679:case 36299:case 36307:return c0;case 35680:case 36300:case 36308:case 36293:return u0;case 36289:case 36303:case 36311:case 36292:return h0}}class f0{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=qv(t.type)}}class p0{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=d0(t.type)}}class m0{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const i=this.seq;for(let s=0,a=i.length;s!==a;++s){const o=i[s];o.setValue(e,t[o.id],n)}}}const dl=/(\w+)(\])?(\[|\.)?/g;function nh(r,e){r.seq.push(e),r.map[e.id]=e}function g0(r,e,t){const n=r.name,i=n.length;for(dl.lastIndex=0;;){const s=dl.exec(n),a=dl.lastIndex;let o=s[1];const l=s[2]==="]",c=s[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===i){nh(t,c===void 0?new f0(o,r,e):new p0(o,r,e));break}else{let h=t.map[o];h===void 0&&(h=new m0(o),nh(t,h)),t=h}}}class io{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let i=0;i<n;++i){const s=e.getActiveUniform(t,i),a=e.getUniformLocation(t,s.name);g0(s,a,this)}}setValue(e,t,n,i){const s=this.map[t];s!==void 0&&s.setValue(e,n,i)}setOptional(e,t,n){const i=t[n];i!==void 0&&this.setValue(e,n,i)}static upload(e,t,n,i){for(let s=0,a=t.length;s!==a;++s){const o=t[s],l=n[o.id];l.needsUpdate!==!1&&o.setValue(e,l.value,i)}}static seqWithValue(e,t){const n=[];for(let i=0,s=e.length;i!==s;++i){const a=e[i];a.id in t&&n.push(a)}return n}}function ih(r,e,t){const n=r.createShader(e);return r.shaderSource(n,t),r.compileShader(n),n}const _0=37297;let v0=0;function x0(r,e){const t=r.split(`
`),n=[],i=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let a=i;a<s;a++){const o=a+1;n.push(`${o===e?">":" "} ${o}: ${t[a]}`)}return n.join(`
`)}function y0(r){const e=Pt.getPrimaries(Pt.workingColorSpace),t=Pt.getPrimaries(r);let n;switch(e===t?n="":e===co&&t===lo?n="LinearDisplayP3ToLinearSRGB":e===lo&&t===co&&(n="LinearSRGBToLinearDisplayP3"),r){case Tn:case po:return[n,"LinearTransferOETF"];case Fn:case Jl:return[n,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",r),[n,"LinearTransferOETF"]}}function rh(r,e,t){const n=r.getShaderParameter(e,r.COMPILE_STATUS),i=r.getShaderInfoLog(e).trim();if(n&&i==="")return"";const s=/ERROR: 0:(\d+)/.exec(i);if(s){const a=parseInt(s[1]);return t.toUpperCase()+`

`+i+`

`+x0(r.getShaderSource(e),a)}else return i}function M0(r,e){const t=y0(e);return`vec4 ${r}( vec4 value ) { return ${t[0]}( ${t[1]}( value ) ); }`}function S0(r,e){let t;switch(e){case gp:t="Linear";break;case _p:t="Reinhard";break;case vp:t="OptimizedCineon";break;case xp:t="ACESFilmic";break;case Mp:t="AgX";break;case Sp:t="Neutral";break;case yp:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+r+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}function E0(r){return[r.extensionDerivatives||r.envMapCubeUVHeight||r.bumpMap||r.normalMapTangentSpace||r.clearcoatNormalMap||r.flatShading||r.alphaToCoverage||r.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(r.extensionFragDepth||r.logarithmicDepthBuffer)&&r.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",r.extensionDrawBuffers&&r.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(r.extensionShaderTextureLOD||r.envMap||r.transmission)&&r.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(Ms).join(`
`)}function b0(r){return[r.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",r.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Ms).join(`
`)}function T0(r){const e=[];for(const t in r){const n=r[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function A0(r,e){const t={},n=r.getProgramParameter(e,r.ACTIVE_ATTRIBUTES);for(let i=0;i<n;i++){const s=r.getActiveAttrib(e,i),a=s.name;let o=1;s.type===r.FLOAT_MAT2&&(o=2),s.type===r.FLOAT_MAT3&&(o=3),s.type===r.FLOAT_MAT4&&(o=4),t[a]={type:s.type,location:r.getAttribLocation(e,a),locationSize:o}}return t}function Ms(r){return r!==""}function sh(r,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return r.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function ah(r,e){return r.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const w0=/^[ \t]*#include +<([\w\d./]+)>/gm;function kl(r){return r.replace(w0,C0)}const R0=new Map([["encodings_fragment","colorspace_fragment"],["encodings_pars_fragment","colorspace_pars_fragment"],["output_fragment","opaque_fragment"]]);function C0(r,e){let t=pt[e];if(t===void 0){const n=R0.get(e);if(n!==void 0)t=pt[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return kl(t)}const L0=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function oh(r){return r.replace(L0,P0)}function P0(r,e,t,n){let i="";for(let s=parseInt(e);s<parseInt(t);s++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return i}function lh(r){let e=`precision ${r.precision} float;
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
#define LOW_PRECISION`),e}function I0(r){let e="SHADOWMAP_TYPE_BASIC";return r.shadowMapType===qh?e="SHADOWMAP_TYPE_PCF":r.shadowMapType===Wf?e="SHADOWMAP_TYPE_PCF_SOFT":r.shadowMapType===qi&&(e="SHADOWMAP_TYPE_VSM"),e}function D0(r){let e="ENVMAP_TYPE_CUBE";if(r.envMap)switch(r.envMapMode){case ws:case Rs:e="ENVMAP_TYPE_CUBE";break;case fo:e="ENVMAP_TYPE_CUBE_UV";break}return e}function N0(r){let e="ENVMAP_MODE_REFLECTION";return r.envMap&&r.envMapMode===Rs&&(e="ENVMAP_MODE_REFRACTION"),e}function U0(r){let e="ENVMAP_BLENDING_NONE";if(r.envMap)switch(r.combine){case Yh:e="ENVMAP_BLENDING_MULTIPLY";break;case pp:e="ENVMAP_BLENDING_MIX";break;case mp:e="ENVMAP_BLENDING_ADD";break}return e}function F0(r){const e=r.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:n,maxMip:t}}function O0(r,e,t,n){const i=r.getContext(),s=t.defines;let a=t.vertexShader,o=t.fragmentShader;const l=I0(t),c=D0(t),u=N0(t),h=U0(t),d=F0(t),m=t.isWebGL2?"":E0(t),g=b0(t),_=T0(s),f=i.createProgram();let p,M,v=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_].filter(Ms).join(`
`),p.length>0&&(p+=`
`),M=[m,"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_].filter(Ms).join(`
`),M.length>0&&(M+=`
`)):(p=[lh(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors&&t.isWebGL2?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Ms).join(`
`),M=[m,lh(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+u:"",t.envMap?"#define "+h:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==_r?"#define TONE_MAPPING":"",t.toneMapping!==_r?pt.tonemapping_pars_fragment:"",t.toneMapping!==_r?S0("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",pt.colorspace_pars_fragment,M0("linearToOutputTexel",t.outputColorSpace),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Ms).join(`
`)),a=kl(a),a=sh(a,t),a=ah(a,t),o=kl(o),o=sh(o,t),o=ah(o,t),a=oh(a),o=oh(o),t.isWebGL2&&t.isRawShaderMaterial!==!0&&(v=`#version 300 es
`,p=[g,"precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+p,M=["precision mediump sampler2DArray;","#define varying in",t.glslVersion===bu?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===bu?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+M);const T=v+p+a,E=v+M+o,w=ih(i,i.VERTEX_SHADER,T),S=ih(i,i.FRAGMENT_SHADER,E);i.attachShader(f,w),i.attachShader(f,S),t.index0AttributeName!==void 0?i.bindAttribLocation(f,0,t.index0AttributeName):t.morphTargets===!0&&i.bindAttribLocation(f,0,"position"),i.linkProgram(f);function P(U){if(r.debug.checkShaderErrors){const j=i.getProgramInfoLog(f).trim(),L=i.getShaderInfoLog(w).trim(),F=i.getShaderInfoLog(S).trim();let k=!0,K=!0;if(i.getProgramParameter(f,i.LINK_STATUS)===!1)if(k=!1,typeof r.debug.onShaderError=="function")r.debug.onShaderError(i,f,w,S);else{const $=rh(i,w,"vertex"),Y=rh(i,S,"fragment");console.error("THREE.WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(f,i.VALIDATE_STATUS)+`

Material Name: `+U.name+`
Material Type: `+U.type+`

Program Info Log: `+j+`
`+$+`
`+Y)}else j!==""?console.warn("THREE.WebGLProgram: Program Info Log:",j):(L===""||F==="")&&(K=!1);K&&(U.diagnostics={runnable:k,programLog:j,vertexShader:{log:L,prefix:p},fragmentShader:{log:F,prefix:M}})}i.deleteShader(w),i.deleteShader(S),D=new io(i,f),x=A0(i,f)}let D;this.getUniforms=function(){return D===void 0&&P(this),D};let x;this.getAttributes=function(){return x===void 0&&P(this),x};let b=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return b===!1&&(b=i.getProgramParameter(f,_0)),b},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(f),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=v0++,this.cacheKey=e,this.usedTimes=1,this.program=f,this.vertexShader=w,this.fragmentShader=S,this}let B0=0;class k0{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,n=e.fragmentShader,i=this._getShaderStage(t),s=this._getShaderStage(n),a=this._getShaderCacheForMaterial(e);return a.has(i)===!1&&(a.add(i),i.usedTimes++),a.has(s)===!1&&(a.add(s),s.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new z0(e),t.set(e,n)),n}}class z0{constructor(e){this.id=B0++,this.code=e,this.usedTimes=0}}function G0(r,e,t,n,i,s,a){const o=new dd,l=new k0,c=new Set,u=[],h=i.isWebGL2,d=i.logarithmicDepthBuffer,m=i.vertexTextures;let g=i.precision;const _={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function f(x){return c.add(x),x===0?"uv":`uv${x}`}function p(x,b,U,j,L){const F=j.fog,k=L.geometry,K=x.isMeshStandardMaterial?j.environment:null,$=(x.isMeshStandardMaterial?t:e).get(x.envMap||K),Y=$&&$.mapping===fo?$.image.height:null,re=_[x.type];x.precision!==null&&(g=i.getMaxPrecision(x.precision),g!==x.precision&&console.warn("THREE.WebGLProgram.getParameters:",x.precision,"not supported, using",g,"instead."));const le=k.morphAttributes.position||k.morphAttributes.normal||k.morphAttributes.color,ve=le!==void 0?le.length:0;let He=0;k.morphAttributes.position!==void 0&&(He=1),k.morphAttributes.normal!==void 0&&(He=2),k.morphAttributes.color!==void 0&&(He=3);let X,se,Se,Ve;if(re){const De=Ei[re];X=De.vertexShader,se=De.fragmentShader}else X=x.vertexShader,se=x.fragmentShader,l.update(x),Se=l.getVertexShaderID(x),Ve=l.getFragmentShaderID(x);const Re=r.getRenderTarget(),Te=L.isInstancedMesh===!0,Et=L.isBatchedMesh===!0,je=!!x.map,B=!!x.matcap,kt=!!$,Ie=!!x.aoMap,ot=!!x.lightMap,Ae=!!x.bumpMap,dt=!!x.normalMap,Ze=!!x.displacementMap,Le=!!x.emissiveMap,bt=!!x.metalnessMap,C=!!x.roughnessMap,y=x.anisotropy>0,q=x.clearcoat>0,Z=x.iridescence>0,ae=x.sheen>0,ie=x.transmission>0,et=y&&!!x.anisotropyMap,Oe=q&&!!x.clearcoatMap,ue=q&&!!x.clearcoatNormalMap,fe=q&&!!x.clearcoatRoughnessMap,Ke=Z&&!!x.iridescenceMap,ce=Z&&!!x.iridescenceThicknessMap,zt=ae&&!!x.sheenColorMap,st=ae&&!!x.sheenRoughnessMap,Ce=!!x.specularMap,Ee=!!x.specularColorMap,we=!!x.specularIntensityMap,ft=ie&&!!x.transmissionMap,Pe=ie&&!!x.thicknessMap,Ut=!!x.gradientMap,N=!!x.alphaMap,_e=x.alphaTest>0,G=!!x.alphaHash,he=!!x.extensions;let J=_r;x.toneMapped&&(Re===null||Re.isXRRenderTarget===!0)&&(J=r.toneMapping);const de={isWebGL2:h,shaderID:re,shaderType:x.type,shaderName:x.name,vertexShader:X,fragmentShader:se,defines:x.defines,customVertexShaderID:Se,customFragmentShaderID:Ve,isRawShaderMaterial:x.isRawShaderMaterial===!0,glslVersion:x.glslVersion,precision:g,batching:Et,instancing:Te,instancingColor:Te&&L.instanceColor!==null,instancingMorph:Te&&L.morphTexture!==null,supportsVertexTextures:m,outputColorSpace:Re===null?r.outputColorSpace:Re.isXRRenderTarget===!0?Re.texture.colorSpace:Tn,alphaToCoverage:!!x.alphaToCoverage,map:je,matcap:B,envMap:kt,envMapMode:kt&&$.mapping,envMapCubeUVHeight:Y,aoMap:Ie,lightMap:ot,bumpMap:Ae,normalMap:dt,displacementMap:m&&Ze,emissiveMap:Le,normalMapObjectSpace:dt&&x.normalMapType===Up,normalMapTangentSpace:dt&&x.normalMapType===rd,metalnessMap:bt,roughnessMap:C,anisotropy:y,anisotropyMap:et,clearcoat:q,clearcoatMap:Oe,clearcoatNormalMap:ue,clearcoatRoughnessMap:fe,iridescence:Z,iridescenceMap:Ke,iridescenceThicknessMap:ce,sheen:ae,sheenColorMap:zt,sheenRoughnessMap:st,specularMap:Ce,specularColorMap:Ee,specularIntensityMap:we,transmission:ie,transmissionMap:ft,thicknessMap:Pe,gradientMap:Ut,opaque:x.transparent===!1&&x.blending===Es&&x.alphaToCoverage===!1,alphaMap:N,alphaTest:_e,alphaHash:G,combine:x.combine,mapUv:je&&f(x.map.channel),aoMapUv:Ie&&f(x.aoMap.channel),lightMapUv:ot&&f(x.lightMap.channel),bumpMapUv:Ae&&f(x.bumpMap.channel),normalMapUv:dt&&f(x.normalMap.channel),displacementMapUv:Ze&&f(x.displacementMap.channel),emissiveMapUv:Le&&f(x.emissiveMap.channel),metalnessMapUv:bt&&f(x.metalnessMap.channel),roughnessMapUv:C&&f(x.roughnessMap.channel),anisotropyMapUv:et&&f(x.anisotropyMap.channel),clearcoatMapUv:Oe&&f(x.clearcoatMap.channel),clearcoatNormalMapUv:ue&&f(x.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:fe&&f(x.clearcoatRoughnessMap.channel),iridescenceMapUv:Ke&&f(x.iridescenceMap.channel),iridescenceThicknessMapUv:ce&&f(x.iridescenceThicknessMap.channel),sheenColorMapUv:zt&&f(x.sheenColorMap.channel),sheenRoughnessMapUv:st&&f(x.sheenRoughnessMap.channel),specularMapUv:Ce&&f(x.specularMap.channel),specularColorMapUv:Ee&&f(x.specularColorMap.channel),specularIntensityMapUv:we&&f(x.specularIntensityMap.channel),transmissionMapUv:ft&&f(x.transmissionMap.channel),thicknessMapUv:Pe&&f(x.thicknessMap.channel),alphaMapUv:N&&f(x.alphaMap.channel),vertexTangents:!!k.attributes.tangent&&(dt||y),vertexColors:x.vertexColors,vertexAlphas:x.vertexColors===!0&&!!k.attributes.color&&k.attributes.color.itemSize===4,pointsUvs:L.isPoints===!0&&!!k.attributes.uv&&(je||N),fog:!!F,useFog:x.fog===!0,fogExp2:!!F&&F.isFogExp2,flatShading:x.flatShading===!0,sizeAttenuation:x.sizeAttenuation===!0,logarithmicDepthBuffer:d,skinning:L.isSkinnedMesh===!0,morphTargets:k.morphAttributes.position!==void 0,morphNormals:k.morphAttributes.normal!==void 0,morphColors:k.morphAttributes.color!==void 0,morphTargetsCount:ve,morphTextureStride:He,numDirLights:b.directional.length,numPointLights:b.point.length,numSpotLights:b.spot.length,numSpotLightMaps:b.spotLightMap.length,numRectAreaLights:b.rectArea.length,numHemiLights:b.hemi.length,numDirLightShadows:b.directionalShadowMap.length,numPointLightShadows:b.pointShadowMap.length,numSpotLightShadows:b.spotShadowMap.length,numSpotLightShadowsWithMaps:b.numSpotLightShadowsWithMaps,numLightProbes:b.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:x.dithering,shadowMapEnabled:r.shadowMap.enabled&&U.length>0,shadowMapType:r.shadowMap.type,toneMapping:J,useLegacyLights:r._useLegacyLights,decodeVideoTexture:je&&x.map.isVideoTexture===!0&&Pt.getTransfer(x.map.colorSpace)===Yt,premultipliedAlpha:x.premultipliedAlpha,doubleSided:x.side===bi,flipSided:x.side===Bn,useDepthPacking:x.depthPacking>=0,depthPacking:x.depthPacking||0,index0AttributeName:x.index0AttributeName,extensionDerivatives:he&&x.extensions.derivatives===!0,extensionFragDepth:he&&x.extensions.fragDepth===!0,extensionDrawBuffers:he&&x.extensions.drawBuffers===!0,extensionShaderTextureLOD:he&&x.extensions.shaderTextureLOD===!0,extensionClipCullDistance:he&&x.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:he&&x.extensions.multiDraw===!0&&n.has("WEBGL_multi_draw"),rendererExtensionFragDepth:h||n.has("EXT_frag_depth"),rendererExtensionDrawBuffers:h||n.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:h||n.has("EXT_shader_texture_lod"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:x.customProgramCacheKey()};return de.vertexUv1s=c.has(1),de.vertexUv2s=c.has(2),de.vertexUv3s=c.has(3),c.clear(),de}function M(x){const b=[];if(x.shaderID?b.push(x.shaderID):(b.push(x.customVertexShaderID),b.push(x.customFragmentShaderID)),x.defines!==void 0)for(const U in x.defines)b.push(U),b.push(x.defines[U]);return x.isRawShaderMaterial===!1&&(v(b,x),T(b,x),b.push(r.outputColorSpace)),b.push(x.customProgramCacheKey),b.join()}function v(x,b){x.push(b.precision),x.push(b.outputColorSpace),x.push(b.envMapMode),x.push(b.envMapCubeUVHeight),x.push(b.mapUv),x.push(b.alphaMapUv),x.push(b.lightMapUv),x.push(b.aoMapUv),x.push(b.bumpMapUv),x.push(b.normalMapUv),x.push(b.displacementMapUv),x.push(b.emissiveMapUv),x.push(b.metalnessMapUv),x.push(b.roughnessMapUv),x.push(b.anisotropyMapUv),x.push(b.clearcoatMapUv),x.push(b.clearcoatNormalMapUv),x.push(b.clearcoatRoughnessMapUv),x.push(b.iridescenceMapUv),x.push(b.iridescenceThicknessMapUv),x.push(b.sheenColorMapUv),x.push(b.sheenRoughnessMapUv),x.push(b.specularMapUv),x.push(b.specularColorMapUv),x.push(b.specularIntensityMapUv),x.push(b.transmissionMapUv),x.push(b.thicknessMapUv),x.push(b.combine),x.push(b.fogExp2),x.push(b.sizeAttenuation),x.push(b.morphTargetsCount),x.push(b.morphAttributeCount),x.push(b.numDirLights),x.push(b.numPointLights),x.push(b.numSpotLights),x.push(b.numSpotLightMaps),x.push(b.numHemiLights),x.push(b.numRectAreaLights),x.push(b.numDirLightShadows),x.push(b.numPointLightShadows),x.push(b.numSpotLightShadows),x.push(b.numSpotLightShadowsWithMaps),x.push(b.numLightProbes),x.push(b.shadowMapType),x.push(b.toneMapping),x.push(b.numClippingPlanes),x.push(b.numClipIntersection),x.push(b.depthPacking)}function T(x,b){o.disableAll(),b.isWebGL2&&o.enable(0),b.supportsVertexTextures&&o.enable(1),b.instancing&&o.enable(2),b.instancingColor&&o.enable(3),b.instancingMorph&&o.enable(4),b.matcap&&o.enable(5),b.envMap&&o.enable(6),b.normalMapObjectSpace&&o.enable(7),b.normalMapTangentSpace&&o.enable(8),b.clearcoat&&o.enable(9),b.iridescence&&o.enable(10),b.alphaTest&&o.enable(11),b.vertexColors&&o.enable(12),b.vertexAlphas&&o.enable(13),b.vertexUv1s&&o.enable(14),b.vertexUv2s&&o.enable(15),b.vertexUv3s&&o.enable(16),b.vertexTangents&&o.enable(17),b.anisotropy&&o.enable(18),b.alphaHash&&o.enable(19),b.batching&&o.enable(20),x.push(o.mask),o.disableAll(),b.fog&&o.enable(0),b.useFog&&o.enable(1),b.flatShading&&o.enable(2),b.logarithmicDepthBuffer&&o.enable(3),b.skinning&&o.enable(4),b.morphTargets&&o.enable(5),b.morphNormals&&o.enable(6),b.morphColors&&o.enable(7),b.premultipliedAlpha&&o.enable(8),b.shadowMapEnabled&&o.enable(9),b.useLegacyLights&&o.enable(10),b.doubleSided&&o.enable(11),b.flipSided&&o.enable(12),b.useDepthPacking&&o.enable(13),b.dithering&&o.enable(14),b.transmission&&o.enable(15),b.sheen&&o.enable(16),b.opaque&&o.enable(17),b.pointsUvs&&o.enable(18),b.decodeVideoTexture&&o.enable(19),b.alphaToCoverage&&o.enable(20),x.push(o.mask)}function E(x){const b=_[x.type];let U;if(b){const j=Ei[b];U=Mm.clone(j.uniforms)}else U=x.uniforms;return U}function w(x,b){let U;for(let j=0,L=u.length;j<L;j++){const F=u[j];if(F.cacheKey===b){U=F,++U.usedTimes;break}}return U===void 0&&(U=new O0(r,b,x,s),u.push(U)),U}function S(x){if(--x.usedTimes===0){const b=u.indexOf(x);u[b]=u[u.length-1],u.pop(),x.destroy()}}function P(x){l.remove(x)}function D(){l.dispose()}return{getParameters:p,getProgramCacheKey:M,getUniforms:E,acquireProgram:w,releaseProgram:S,releaseShaderCache:P,programs:u,dispose:D}}function H0(){let r=new WeakMap;function e(s){let a=r.get(s);return a===void 0&&(a={},r.set(s,a)),a}function t(s){r.delete(s)}function n(s,a,o){r.get(s)[a]=o}function i(){r=new WeakMap}return{get:e,remove:t,update:n,dispose:i}}function V0(r,e){return r.groupOrder!==e.groupOrder?r.groupOrder-e.groupOrder:r.renderOrder!==e.renderOrder?r.renderOrder-e.renderOrder:r.material.id!==e.material.id?r.material.id-e.material.id:r.z!==e.z?r.z-e.z:r.id-e.id}function ch(r,e){return r.groupOrder!==e.groupOrder?r.groupOrder-e.groupOrder:r.renderOrder!==e.renderOrder?r.renderOrder-e.renderOrder:r.z!==e.z?e.z-r.z:r.id-e.id}function uh(){const r=[];let e=0;const t=[],n=[],i=[];function s(){e=0,t.length=0,n.length=0,i.length=0}function a(h,d,m,g,_,f){let p=r[e];return p===void 0?(p={id:h.id,object:h,geometry:d,material:m,groupOrder:g,renderOrder:h.renderOrder,z:_,group:f},r[e]=p):(p.id=h.id,p.object=h,p.geometry=d,p.material=m,p.groupOrder=g,p.renderOrder=h.renderOrder,p.z=_,p.group=f),e++,p}function o(h,d,m,g,_,f){const p=a(h,d,m,g,_,f);m.transmission>0?n.push(p):m.transparent===!0?i.push(p):t.push(p)}function l(h,d,m,g,_,f){const p=a(h,d,m,g,_,f);m.transmission>0?n.unshift(p):m.transparent===!0?i.unshift(p):t.unshift(p)}function c(h,d){t.length>1&&t.sort(h||V0),n.length>1&&n.sort(d||ch),i.length>1&&i.sort(d||ch)}function u(){for(let h=e,d=r.length;h<d;h++){const m=r[h];if(m.id===null)break;m.id=null,m.object=null,m.geometry=null,m.material=null,m.group=null}}return{opaque:t,transmissive:n,transparent:i,init:s,push:o,unshift:l,finish:u,sort:c}}function W0(){let r=new WeakMap;function e(n,i){const s=r.get(n);let a;return s===void 0?(a=new uh,r.set(n,[a])):i>=s.length?(a=new uh,s.push(a)):a=s[i],a}function t(){r=new WeakMap}return{get:e,dispose:t}}function X0(){const r={};return{get:function(e){if(r[e.id]!==void 0)return r[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new I,color:new $e};break;case"SpotLight":t={position:new I,direction:new I,color:new $e,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new I,color:new $e,distance:0,decay:0};break;case"HemisphereLight":t={direction:new I,skyColor:new $e,groundColor:new $e};break;case"RectAreaLight":t={color:new $e,position:new I,halfWidth:new I,halfHeight:new I};break}return r[e.id]=t,t}}}function q0(){const r={};return{get:function(e){if(r[e.id]!==void 0)return r[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new be};break;case"SpotLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new be};break;case"PointLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new be,shadowCameraNear:1,shadowCameraFar:1e3};break}return r[e.id]=t,t}}}let Y0=0;function j0(r,e){return(e.castShadow?2:0)-(r.castShadow?2:0)+(e.map?1:0)-(r.map?1:0)}function K0(r,e){const t=new X0,n=q0(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let u=0;u<9;u++)i.probe.push(new I);const s=new I,a=new Xe,o=new Xe;function l(u,h){let d=0,m=0,g=0;for(let U=0;U<9;U++)i.probe[U].set(0,0,0);let _=0,f=0,p=0,M=0,v=0,T=0,E=0,w=0,S=0,P=0,D=0;u.sort(j0);const x=h===!0?Math.PI:1;for(let U=0,j=u.length;U<j;U++){const L=u[U],F=L.color,k=L.intensity,K=L.distance,$=L.shadow&&L.shadow.map?L.shadow.map.texture:null;if(L.isAmbientLight)d+=F.r*k*x,m+=F.g*k*x,g+=F.b*k*x;else if(L.isLightProbe){for(let Y=0;Y<9;Y++)i.probe[Y].addScaledVector(L.sh.coefficients[Y],k);D++}else if(L.isDirectionalLight){const Y=t.get(L);if(Y.color.copy(L.color).multiplyScalar(L.intensity*x),L.castShadow){const re=L.shadow,le=n.get(L);le.shadowBias=re.bias,le.shadowNormalBias=re.normalBias,le.shadowRadius=re.radius,le.shadowMapSize=re.mapSize,i.directionalShadow[_]=le,i.directionalShadowMap[_]=$,i.directionalShadowMatrix[_]=L.shadow.matrix,T++}i.directional[_]=Y,_++}else if(L.isSpotLight){const Y=t.get(L);Y.position.setFromMatrixPosition(L.matrixWorld),Y.color.copy(F).multiplyScalar(k*x),Y.distance=K,Y.coneCos=Math.cos(L.angle),Y.penumbraCos=Math.cos(L.angle*(1-L.penumbra)),Y.decay=L.decay,i.spot[p]=Y;const re=L.shadow;if(L.map&&(i.spotLightMap[S]=L.map,S++,re.updateMatrices(L),L.castShadow&&P++),i.spotLightMatrix[p]=re.matrix,L.castShadow){const le=n.get(L);le.shadowBias=re.bias,le.shadowNormalBias=re.normalBias,le.shadowRadius=re.radius,le.shadowMapSize=re.mapSize,i.spotShadow[p]=le,i.spotShadowMap[p]=$,w++}p++}else if(L.isRectAreaLight){const Y=t.get(L);Y.color.copy(F).multiplyScalar(k),Y.halfWidth.set(L.width*.5,0,0),Y.halfHeight.set(0,L.height*.5,0),i.rectArea[M]=Y,M++}else if(L.isPointLight){const Y=t.get(L);if(Y.color.copy(L.color).multiplyScalar(L.intensity*x),Y.distance=L.distance,Y.decay=L.decay,L.castShadow){const re=L.shadow,le=n.get(L);le.shadowBias=re.bias,le.shadowNormalBias=re.normalBias,le.shadowRadius=re.radius,le.shadowMapSize=re.mapSize,le.shadowCameraNear=re.camera.near,le.shadowCameraFar=re.camera.far,i.pointShadow[f]=le,i.pointShadowMap[f]=$,i.pointShadowMatrix[f]=L.shadow.matrix,E++}i.point[f]=Y,f++}else if(L.isHemisphereLight){const Y=t.get(L);Y.skyColor.copy(L.color).multiplyScalar(k*x),Y.groundColor.copy(L.groundColor).multiplyScalar(k*x),i.hemi[v]=Y,v++}}M>0&&(e.isWebGL2?r.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=pe.LTC_FLOAT_1,i.rectAreaLTC2=pe.LTC_FLOAT_2):(i.rectAreaLTC1=pe.LTC_HALF_1,i.rectAreaLTC2=pe.LTC_HALF_2):r.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=pe.LTC_FLOAT_1,i.rectAreaLTC2=pe.LTC_FLOAT_2):r.has("OES_texture_half_float_linear")===!0?(i.rectAreaLTC1=pe.LTC_HALF_1,i.rectAreaLTC2=pe.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),i.ambient[0]=d,i.ambient[1]=m,i.ambient[2]=g;const b=i.hash;(b.directionalLength!==_||b.pointLength!==f||b.spotLength!==p||b.rectAreaLength!==M||b.hemiLength!==v||b.numDirectionalShadows!==T||b.numPointShadows!==E||b.numSpotShadows!==w||b.numSpotMaps!==S||b.numLightProbes!==D)&&(i.directional.length=_,i.spot.length=p,i.rectArea.length=M,i.point.length=f,i.hemi.length=v,i.directionalShadow.length=T,i.directionalShadowMap.length=T,i.pointShadow.length=E,i.pointShadowMap.length=E,i.spotShadow.length=w,i.spotShadowMap.length=w,i.directionalShadowMatrix.length=T,i.pointShadowMatrix.length=E,i.spotLightMatrix.length=w+S-P,i.spotLightMap.length=S,i.numSpotLightShadowsWithMaps=P,i.numLightProbes=D,b.directionalLength=_,b.pointLength=f,b.spotLength=p,b.rectAreaLength=M,b.hemiLength=v,b.numDirectionalShadows=T,b.numPointShadows=E,b.numSpotShadows=w,b.numSpotMaps=S,b.numLightProbes=D,i.version=Y0++)}function c(u,h){let d=0,m=0,g=0,_=0,f=0;const p=h.matrixWorldInverse;for(let M=0,v=u.length;M<v;M++){const T=u[M];if(T.isDirectionalLight){const E=i.directional[d];E.direction.setFromMatrixPosition(T.matrixWorld),s.setFromMatrixPosition(T.target.matrixWorld),E.direction.sub(s),E.direction.transformDirection(p),d++}else if(T.isSpotLight){const E=i.spot[g];E.position.setFromMatrixPosition(T.matrixWorld),E.position.applyMatrix4(p),E.direction.setFromMatrixPosition(T.matrixWorld),s.setFromMatrixPosition(T.target.matrixWorld),E.direction.sub(s),E.direction.transformDirection(p),g++}else if(T.isRectAreaLight){const E=i.rectArea[_];E.position.setFromMatrixPosition(T.matrixWorld),E.position.applyMatrix4(p),o.identity(),a.copy(T.matrixWorld),a.premultiply(p),o.extractRotation(a),E.halfWidth.set(T.width*.5,0,0),E.halfHeight.set(0,T.height*.5,0),E.halfWidth.applyMatrix4(o),E.halfHeight.applyMatrix4(o),_++}else if(T.isPointLight){const E=i.point[m];E.position.setFromMatrixPosition(T.matrixWorld),E.position.applyMatrix4(p),m++}else if(T.isHemisphereLight){const E=i.hemi[f];E.direction.setFromMatrixPosition(T.matrixWorld),E.direction.transformDirection(p),f++}}}return{setup:l,setupView:c,state:i}}function hh(r,e){const t=new K0(r,e),n=[],i=[];function s(){n.length=0,i.length=0}function a(h){n.push(h)}function o(h){i.push(h)}function l(h){t.setup(n,h)}function c(h){t.setupView(n,h)}return{init:s,state:{lightsArray:n,shadowsArray:i,lights:t},setupLights:l,setupLightsView:c,pushLight:a,pushShadow:o}}function $0(r,e){let t=new WeakMap;function n(s,a=0){const o=t.get(s);let l;return o===void 0?(l=new hh(r,e),t.set(s,[l])):a>=o.length?(l=new hh(r,e),o.push(l)):l=o[a],l}function i(){t=new WeakMap}return{get:n,dispose:i}}class Z0 extends wi{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Dp,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class J0 extends wi{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const Q0=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,ex=`uniform sampler2D shadow_pass;
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
}`;function tx(r,e,t){let n=new tc;const i=new be,s=new be,a=new Vt,o=new Z0({depthPacking:Np}),l=new J0,c={},u=t.maxTextureSize,h={[Ji]:Bn,[Bn]:Ji,[bi]:bi},d=new Qi({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new be},radius:{value:4}},vertexShader:Q0,fragmentShader:ex}),m=d.clone();m.defines.HORIZONTAL_PASS=1;const g=new kn;g.setAttribute("position",new dn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const _=new en(g,d),f=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=qh;let p=this.type;this.render=function(w,S,P){if(f.enabled===!1||f.autoUpdate===!1&&f.needsUpdate===!1||w.length===0)return;const D=r.getRenderTarget(),x=r.getActiveCubeFace(),b=r.getActiveMipmapLevel(),U=r.state;U.setBlending(gr),U.buffers.color.setClear(1,1,1,1),U.buffers.depth.setTest(!0),U.setScissorTest(!1);const j=p!==qi&&this.type===qi,L=p===qi&&this.type!==qi;for(let F=0,k=w.length;F<k;F++){const K=w[F],$=K.shadow;if($===void 0){console.warn("THREE.WebGLShadowMap:",K,"has no shadow.");continue}if($.autoUpdate===!1&&$.needsUpdate===!1)continue;i.copy($.mapSize);const Y=$.getFrameExtents();if(i.multiply(Y),s.copy($.mapSize),(i.x>u||i.y>u)&&(i.x>u&&(s.x=Math.floor(u/Y.x),i.x=s.x*Y.x,$.mapSize.x=s.x),i.y>u&&(s.y=Math.floor(u/Y.y),i.y=s.y*Y.y,$.mapSize.y=s.y)),$.map===null||j===!0||L===!0){const le=this.type!==qi?{minFilter:xn,magFilter:xn}:{};$.map!==null&&$.map.dispose(),$.map=new Xr(i.x,i.y,le),$.map.texture.name=K.name+".shadowMap",$.camera.updateProjectionMatrix()}r.setRenderTarget($.map),r.clear();const re=$.getViewportCount();for(let le=0;le<re;le++){const ve=$.getViewport(le);a.set(s.x*ve.x,s.y*ve.y,s.x*ve.z,s.y*ve.w),U.viewport(a),$.updateMatrices(K,le),n=$.getFrustum(),T(S,P,$.camera,K,this.type)}$.isPointLightShadow!==!0&&this.type===qi&&M($,P),$.needsUpdate=!1}p=this.type,f.needsUpdate=!1,r.setRenderTarget(D,x,b)};function M(w,S){const P=e.update(_);d.defines.VSM_SAMPLES!==w.blurSamples&&(d.defines.VSM_SAMPLES=w.blurSamples,m.defines.VSM_SAMPLES=w.blurSamples,d.needsUpdate=!0,m.needsUpdate=!0),w.mapPass===null&&(w.mapPass=new Xr(i.x,i.y)),d.uniforms.shadow_pass.value=w.map.texture,d.uniforms.resolution.value=w.mapSize,d.uniforms.radius.value=w.radius,r.setRenderTarget(w.mapPass),r.clear(),r.renderBufferDirect(S,null,P,d,_,null),m.uniforms.shadow_pass.value=w.mapPass.texture,m.uniforms.resolution.value=w.mapSize,m.uniforms.radius.value=w.radius,r.setRenderTarget(w.map),r.clear(),r.renderBufferDirect(S,null,P,m,_,null)}function v(w,S,P,D){let x=null;const b=P.isPointLight===!0?w.customDistanceMaterial:w.customDepthMaterial;if(b!==void 0)x=b;else if(x=P.isPointLight===!0?l:o,r.localClippingEnabled&&S.clipShadows===!0&&Array.isArray(S.clippingPlanes)&&S.clippingPlanes.length!==0||S.displacementMap&&S.displacementScale!==0||S.alphaMap&&S.alphaTest>0||S.map&&S.alphaTest>0){const U=x.uuid,j=S.uuid;let L=c[U];L===void 0&&(L={},c[U]=L);let F=L[j];F===void 0&&(F=x.clone(),L[j]=F,S.addEventListener("dispose",E)),x=F}if(x.visible=S.visible,x.wireframe=S.wireframe,D===qi?x.side=S.shadowSide!==null?S.shadowSide:S.side:x.side=S.shadowSide!==null?S.shadowSide:h[S.side],x.alphaMap=S.alphaMap,x.alphaTest=S.alphaTest,x.map=S.map,x.clipShadows=S.clipShadows,x.clippingPlanes=S.clippingPlanes,x.clipIntersection=S.clipIntersection,x.displacementMap=S.displacementMap,x.displacementScale=S.displacementScale,x.displacementBias=S.displacementBias,x.wireframeLinewidth=S.wireframeLinewidth,x.linewidth=S.linewidth,P.isPointLight===!0&&x.isMeshDistanceMaterial===!0){const U=r.properties.get(x);U.light=P}return x}function T(w,S,P,D,x){if(w.visible===!1)return;if(w.layers.test(S.layers)&&(w.isMesh||w.isLine||w.isPoints)&&(w.castShadow||w.receiveShadow&&x===qi)&&(!w.frustumCulled||n.intersectsObject(w))){w.modelViewMatrix.multiplyMatrices(P.matrixWorldInverse,w.matrixWorld);const j=e.update(w),L=w.material;if(Array.isArray(L)){const F=j.groups;for(let k=0,K=F.length;k<K;k++){const $=F[k],Y=L[$.materialIndex];if(Y&&Y.visible){const re=v(w,Y,D,x);w.onBeforeShadow(r,w,S,P,j,re,$),r.renderBufferDirect(P,null,j,re,w,$),w.onAfterShadow(r,w,S,P,j,re,$)}}}else if(L.visible){const F=v(w,L,D,x);w.onBeforeShadow(r,w,S,P,j,F,null),r.renderBufferDirect(P,null,j,F,w,null),w.onAfterShadow(r,w,S,P,j,F,null)}}const U=w.children;for(let j=0,L=U.length;j<L;j++)T(U[j],S,P,D,x)}function E(w){w.target.removeEventListener("dispose",E);for(const P in c){const D=c[P],x=w.target.uuid;x in D&&(D[x].dispose(),delete D[x])}}}function nx(r,e,t){const n=t.isWebGL2;function i(){let N=!1;const _e=new Vt;let G=null;const he=new Vt(0,0,0,0);return{setMask:function(J){G!==J&&!N&&(r.colorMask(J,J,J,J),G=J)},setLocked:function(J){N=J},setClear:function(J,de,De,yt,wt){wt===!0&&(J*=yt,de*=yt,De*=yt),_e.set(J,de,De,yt),he.equals(_e)===!1&&(r.clearColor(J,de,De,yt),he.copy(_e))},reset:function(){N=!1,G=null,he.set(-1,0,0,0)}}}function s(){let N=!1,_e=null,G=null,he=null;return{setTest:function(J){J?Te(r.DEPTH_TEST):Et(r.DEPTH_TEST)},setMask:function(J){_e!==J&&!N&&(r.depthMask(J),_e=J)},setFunc:function(J){if(G!==J){switch(J){case op:r.depthFunc(r.NEVER);break;case lp:r.depthFunc(r.ALWAYS);break;case cp:r.depthFunc(r.LESS);break;case so:r.depthFunc(r.LEQUAL);break;case up:r.depthFunc(r.EQUAL);break;case hp:r.depthFunc(r.GEQUAL);break;case dp:r.depthFunc(r.GREATER);break;case fp:r.depthFunc(r.NOTEQUAL);break;default:r.depthFunc(r.LEQUAL)}G=J}},setLocked:function(J){N=J},setClear:function(J){he!==J&&(r.clearDepth(J),he=J)},reset:function(){N=!1,_e=null,G=null,he=null}}}function a(){let N=!1,_e=null,G=null,he=null,J=null,de=null,De=null,yt=null,wt=null;return{setTest:function(lt){N||(lt?Te(r.STENCIL_TEST):Et(r.STENCIL_TEST))},setMask:function(lt){_e!==lt&&!N&&(r.stencilMask(lt),_e=lt)},setFunc:function(lt,Wt,In){(G!==lt||he!==Wt||J!==In)&&(r.stencilFunc(lt,Wt,In),G=lt,he=Wt,J=In)},setOp:function(lt,Wt,In){(de!==lt||De!==Wt||yt!==In)&&(r.stencilOp(lt,Wt,In),de=lt,De=Wt,yt=In)},setLocked:function(lt){N=lt},setClear:function(lt){wt!==lt&&(r.clearStencil(lt),wt=lt)},reset:function(){N=!1,_e=null,G=null,he=null,J=null,de=null,De=null,yt=null,wt=null}}}const o=new i,l=new s,c=new a,u=new WeakMap,h=new WeakMap;let d={},m={},g=new WeakMap,_=[],f=null,p=!1,M=null,v=null,T=null,E=null,w=null,S=null,P=null,D=new $e(0,0,0),x=0,b=!1,U=null,j=null,L=null,F=null,k=null;const K=r.getParameter(r.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let $=!1,Y=0;const re=r.getParameter(r.VERSION);re.indexOf("WebGL")!==-1?(Y=parseFloat(/^WebGL (\d)/.exec(re)[1]),$=Y>=1):re.indexOf("OpenGL ES")!==-1&&(Y=parseFloat(/^OpenGL ES (\d)/.exec(re)[1]),$=Y>=2);let le=null,ve={};const He=r.getParameter(r.SCISSOR_BOX),X=r.getParameter(r.VIEWPORT),se=new Vt().fromArray(He),Se=new Vt().fromArray(X);function Ve(N,_e,G,he){const J=new Uint8Array(4),de=r.createTexture();r.bindTexture(N,de),r.texParameteri(N,r.TEXTURE_MIN_FILTER,r.NEAREST),r.texParameteri(N,r.TEXTURE_MAG_FILTER,r.NEAREST);for(let De=0;De<G;De++)n&&(N===r.TEXTURE_3D||N===r.TEXTURE_2D_ARRAY)?r.texImage3D(_e,0,r.RGBA,1,1,he,0,r.RGBA,r.UNSIGNED_BYTE,J):r.texImage2D(_e+De,0,r.RGBA,1,1,0,r.RGBA,r.UNSIGNED_BYTE,J);return de}const Re={};Re[r.TEXTURE_2D]=Ve(r.TEXTURE_2D,r.TEXTURE_2D,1),Re[r.TEXTURE_CUBE_MAP]=Ve(r.TEXTURE_CUBE_MAP,r.TEXTURE_CUBE_MAP_POSITIVE_X,6),n&&(Re[r.TEXTURE_2D_ARRAY]=Ve(r.TEXTURE_2D_ARRAY,r.TEXTURE_2D_ARRAY,1,1),Re[r.TEXTURE_3D]=Ve(r.TEXTURE_3D,r.TEXTURE_3D,1,1)),o.setClear(0,0,0,1),l.setClear(1),c.setClear(0),Te(r.DEPTH_TEST),l.setFunc(so),Ze(!1),Le(Hc),Te(r.CULL_FACE),Ae(gr);function Te(N){d[N]!==!0&&(r.enable(N),d[N]=!0)}function Et(N){d[N]!==!1&&(r.disable(N),d[N]=!1)}function je(N,_e){return m[N]!==_e?(r.bindFramebuffer(N,_e),m[N]=_e,n&&(N===r.DRAW_FRAMEBUFFER&&(m[r.FRAMEBUFFER]=_e),N===r.FRAMEBUFFER&&(m[r.DRAW_FRAMEBUFFER]=_e)),!0):!1}function B(N,_e){let G=_,he=!1;if(N){G=g.get(_e),G===void 0&&(G=[],g.set(_e,G));const J=N.textures;if(G.length!==J.length||G[0]!==r.COLOR_ATTACHMENT0){for(let de=0,De=J.length;de<De;de++)G[de]=r.COLOR_ATTACHMENT0+de;G.length=J.length,he=!0}}else G[0]!==r.BACK&&(G[0]=r.BACK,he=!0);if(he)if(t.isWebGL2)r.drawBuffers(G);else if(e.has("WEBGL_draw_buffers")===!0)e.get("WEBGL_draw_buffers").drawBuffersWEBGL(G);else throw new Error("THREE.WebGLState: Usage of gl.drawBuffers() require WebGL2 or WEBGL_draw_buffers extension")}function kt(N){return f!==N?(r.useProgram(N),f=N,!0):!1}const Ie={[zr]:r.FUNC_ADD,[qf]:r.FUNC_SUBTRACT,[Yf]:r.FUNC_REVERSE_SUBTRACT};if(n)Ie[qc]=r.MIN,Ie[Yc]=r.MAX;else{const N=e.get("EXT_blend_minmax");N!==null&&(Ie[qc]=N.MIN_EXT,Ie[Yc]=N.MAX_EXT)}const ot={[jf]:r.ZERO,[Kf]:r.ONE,[$f]:r.SRC_COLOR,[Ll]:r.SRC_ALPHA,[np]:r.SRC_ALPHA_SATURATE,[ep]:r.DST_COLOR,[Jf]:r.DST_ALPHA,[Zf]:r.ONE_MINUS_SRC_COLOR,[Pl]:r.ONE_MINUS_SRC_ALPHA,[tp]:r.ONE_MINUS_DST_COLOR,[Qf]:r.ONE_MINUS_DST_ALPHA,[ip]:r.CONSTANT_COLOR,[rp]:r.ONE_MINUS_CONSTANT_COLOR,[sp]:r.CONSTANT_ALPHA,[ap]:r.ONE_MINUS_CONSTANT_ALPHA};function Ae(N,_e,G,he,J,de,De,yt,wt,lt){if(N===gr){p===!0&&(Et(r.BLEND),p=!1);return}if(p===!1&&(Te(r.BLEND),p=!0),N!==Xf){if(N!==M||lt!==b){if((v!==zr||w!==zr)&&(r.blendEquation(r.FUNC_ADD),v=zr,w=zr),lt)switch(N){case Es:r.blendFuncSeparate(r.ONE,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case Vc:r.blendFunc(r.ONE,r.ONE);break;case Wc:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case Xc:r.blendFuncSeparate(r.ZERO,r.SRC_COLOR,r.ZERO,r.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",N);break}else switch(N){case Es:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case Vc:r.blendFunc(r.SRC_ALPHA,r.ONE);break;case Wc:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case Xc:r.blendFunc(r.ZERO,r.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",N);break}T=null,E=null,S=null,P=null,D.set(0,0,0),x=0,M=N,b=lt}return}J=J||_e,de=de||G,De=De||he,(_e!==v||J!==w)&&(r.blendEquationSeparate(Ie[_e],Ie[J]),v=_e,w=J),(G!==T||he!==E||de!==S||De!==P)&&(r.blendFuncSeparate(ot[G],ot[he],ot[de],ot[De]),T=G,E=he,S=de,P=De),(yt.equals(D)===!1||wt!==x)&&(r.blendColor(yt.r,yt.g,yt.b,wt),D.copy(yt),x=wt),M=N,b=!1}function dt(N,_e){N.side===bi?Et(r.CULL_FACE):Te(r.CULL_FACE);let G=N.side===Bn;_e&&(G=!G),Ze(G),N.blending===Es&&N.transparent===!1?Ae(gr):Ae(N.blending,N.blendEquation,N.blendSrc,N.blendDst,N.blendEquationAlpha,N.blendSrcAlpha,N.blendDstAlpha,N.blendColor,N.blendAlpha,N.premultipliedAlpha),l.setFunc(N.depthFunc),l.setTest(N.depthTest),l.setMask(N.depthWrite),o.setMask(N.colorWrite);const he=N.stencilWrite;c.setTest(he),he&&(c.setMask(N.stencilWriteMask),c.setFunc(N.stencilFunc,N.stencilRef,N.stencilFuncMask),c.setOp(N.stencilFail,N.stencilZFail,N.stencilZPass)),C(N.polygonOffset,N.polygonOffsetFactor,N.polygonOffsetUnits),N.alphaToCoverage===!0?Te(r.SAMPLE_ALPHA_TO_COVERAGE):Et(r.SAMPLE_ALPHA_TO_COVERAGE)}function Ze(N){U!==N&&(N?r.frontFace(r.CW):r.frontFace(r.CCW),U=N)}function Le(N){N!==Hf?(Te(r.CULL_FACE),N!==j&&(N===Hc?r.cullFace(r.BACK):N===Vf?r.cullFace(r.FRONT):r.cullFace(r.FRONT_AND_BACK))):Et(r.CULL_FACE),j=N}function bt(N){N!==L&&($&&r.lineWidth(N),L=N)}function C(N,_e,G){N?(Te(r.POLYGON_OFFSET_FILL),(F!==_e||k!==G)&&(r.polygonOffset(_e,G),F=_e,k=G)):Et(r.POLYGON_OFFSET_FILL)}function y(N){N?Te(r.SCISSOR_TEST):Et(r.SCISSOR_TEST)}function q(N){N===void 0&&(N=r.TEXTURE0+K-1),le!==N&&(r.activeTexture(N),le=N)}function Z(N,_e,G){G===void 0&&(le===null?G=r.TEXTURE0+K-1:G=le);let he=ve[G];he===void 0&&(he={type:void 0,texture:void 0},ve[G]=he),(he.type!==N||he.texture!==_e)&&(le!==G&&(r.activeTexture(G),le=G),r.bindTexture(N,_e||Re[N]),he.type=N,he.texture=_e)}function ae(){const N=ve[le];N!==void 0&&N.type!==void 0&&(r.bindTexture(N.type,null),N.type=void 0,N.texture=void 0)}function ie(){try{r.compressedTexImage2D.apply(r,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function et(){try{r.compressedTexImage3D.apply(r,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function Oe(){try{r.texSubImage2D.apply(r,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function ue(){try{r.texSubImage3D.apply(r,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function fe(){try{r.compressedTexSubImage2D.apply(r,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function Ke(){try{r.compressedTexSubImage3D.apply(r,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function ce(){try{r.texStorage2D.apply(r,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function zt(){try{r.texStorage3D.apply(r,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function st(){try{r.texImage2D.apply(r,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function Ce(){try{r.texImage3D.apply(r,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function Ee(N){se.equals(N)===!1&&(r.scissor(N.x,N.y,N.z,N.w),se.copy(N))}function we(N){Se.equals(N)===!1&&(r.viewport(N.x,N.y,N.z,N.w),Se.copy(N))}function ft(N,_e){let G=h.get(_e);G===void 0&&(G=new WeakMap,h.set(_e,G));let he=G.get(N);he===void 0&&(he=r.getUniformBlockIndex(_e,N.name),G.set(N,he))}function Pe(N,_e){const he=h.get(_e).get(N);u.get(_e)!==he&&(r.uniformBlockBinding(_e,he,N.__bindingPointIndex),u.set(_e,he))}function Ut(){r.disable(r.BLEND),r.disable(r.CULL_FACE),r.disable(r.DEPTH_TEST),r.disable(r.POLYGON_OFFSET_FILL),r.disable(r.SCISSOR_TEST),r.disable(r.STENCIL_TEST),r.disable(r.SAMPLE_ALPHA_TO_COVERAGE),r.blendEquation(r.FUNC_ADD),r.blendFunc(r.ONE,r.ZERO),r.blendFuncSeparate(r.ONE,r.ZERO,r.ONE,r.ZERO),r.blendColor(0,0,0,0),r.colorMask(!0,!0,!0,!0),r.clearColor(0,0,0,0),r.depthMask(!0),r.depthFunc(r.LESS),r.clearDepth(1),r.stencilMask(4294967295),r.stencilFunc(r.ALWAYS,0,4294967295),r.stencilOp(r.KEEP,r.KEEP,r.KEEP),r.clearStencil(0),r.cullFace(r.BACK),r.frontFace(r.CCW),r.polygonOffset(0,0),r.activeTexture(r.TEXTURE0),r.bindFramebuffer(r.FRAMEBUFFER,null),n===!0&&(r.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),r.bindFramebuffer(r.READ_FRAMEBUFFER,null)),r.useProgram(null),r.lineWidth(1),r.scissor(0,0,r.canvas.width,r.canvas.height),r.viewport(0,0,r.canvas.width,r.canvas.height),d={},le=null,ve={},m={},g=new WeakMap,_=[],f=null,p=!1,M=null,v=null,T=null,E=null,w=null,S=null,P=null,D=new $e(0,0,0),x=0,b=!1,U=null,j=null,L=null,F=null,k=null,se.set(0,0,r.canvas.width,r.canvas.height),Se.set(0,0,r.canvas.width,r.canvas.height),o.reset(),l.reset(),c.reset()}return{buffers:{color:o,depth:l,stencil:c},enable:Te,disable:Et,bindFramebuffer:je,drawBuffers:B,useProgram:kt,setBlending:Ae,setMaterial:dt,setFlipSided:Ze,setCullFace:Le,setLineWidth:bt,setPolygonOffset:C,setScissorTest:y,activeTexture:q,bindTexture:Z,unbindTexture:ae,compressedTexImage2D:ie,compressedTexImage3D:et,texImage2D:st,texImage3D:Ce,updateUBOMapping:ft,uniformBlockBinding:Pe,texStorage2D:ce,texStorage3D:zt,texSubImage2D:Oe,texSubImage3D:ue,compressedTexSubImage2D:fe,compressedTexSubImage3D:Ke,scissor:Ee,viewport:we,reset:Ut}}function ix(r,e,t,n,i,s,a){const o=i.isWebGL2,l=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),u=new be,h=new WeakMap;let d;const m=new WeakMap;let g=!1;try{g=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function _(C,y){return g?new OffscreenCanvas(C,y):pa("canvas")}function f(C,y,q,Z){let ae=1;const ie=bt(C);if((ie.width>Z||ie.height>Z)&&(ae=Z/Math.max(ie.width,ie.height)),ae<1||y===!0)if(typeof HTMLImageElement<"u"&&C instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&C instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&C instanceof ImageBitmap||typeof VideoFrame<"u"&&C instanceof VideoFrame){const et=y?ho:Math.floor,Oe=et(ae*ie.width),ue=et(ae*ie.height);d===void 0&&(d=_(Oe,ue));const fe=q?_(Oe,ue):d;return fe.width=Oe,fe.height=ue,fe.getContext("2d").drawImage(C,0,0,Oe,ue),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+ie.width+"x"+ie.height+") to ("+Oe+"x"+ue+")."),fe}else return"data"in C&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+ie.width+"x"+ie.height+")."),C;return C}function p(C){const y=bt(C);return Bl(y.width)&&Bl(y.height)}function M(C){return o?!1:C.wrapS!==ii||C.wrapT!==ii||C.minFilter!==xn&&C.minFilter!==Pn}function v(C,y){return C.generateMipmaps&&y&&C.minFilter!==xn&&C.minFilter!==Pn}function T(C){r.generateMipmap(C)}function E(C,y,q,Z,ae=!1){if(o===!1)return y;if(C!==null){if(r[C]!==void 0)return r[C];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+C+"'")}let ie=y;if(y===r.RED&&(q===r.FLOAT&&(ie=r.R32F),q===r.HALF_FLOAT&&(ie=r.R16F),q===r.UNSIGNED_BYTE&&(ie=r.R8)),y===r.RED_INTEGER&&(q===r.UNSIGNED_BYTE&&(ie=r.R8UI),q===r.UNSIGNED_SHORT&&(ie=r.R16UI),q===r.UNSIGNED_INT&&(ie=r.R32UI),q===r.BYTE&&(ie=r.R8I),q===r.SHORT&&(ie=r.R16I),q===r.INT&&(ie=r.R32I)),y===r.RG&&(q===r.FLOAT&&(ie=r.RG32F),q===r.HALF_FLOAT&&(ie=r.RG16F),q===r.UNSIGNED_BYTE&&(ie=r.RG8)),y===r.RG_INTEGER&&(q===r.UNSIGNED_BYTE&&(ie=r.RG8UI),q===r.UNSIGNED_SHORT&&(ie=r.RG16UI),q===r.UNSIGNED_INT&&(ie=r.RG32UI),q===r.BYTE&&(ie=r.RG8I),q===r.SHORT&&(ie=r.RG16I),q===r.INT&&(ie=r.RG32I)),y===r.RGBA){const et=ae?oo:Pt.getTransfer(Z);q===r.FLOAT&&(ie=r.RGBA32F),q===r.HALF_FLOAT&&(ie=r.RGBA16F),q===r.UNSIGNED_BYTE&&(ie=et===Yt?r.SRGB8_ALPHA8:r.RGBA8),q===r.UNSIGNED_SHORT_4_4_4_4&&(ie=r.RGBA4),q===r.UNSIGNED_SHORT_5_5_5_1&&(ie=r.RGB5_A1)}return(ie===r.R16F||ie===r.R32F||ie===r.RG16F||ie===r.RG32F||ie===r.RGBA16F||ie===r.RGBA32F)&&e.get("EXT_color_buffer_float"),ie}function w(C,y,q){return v(C,q)===!0||C.isFramebufferTexture&&C.minFilter!==xn&&C.minFilter!==Pn?Math.log2(Math.max(y.width,y.height))+1:C.mipmaps!==void 0&&C.mipmaps.length>0?C.mipmaps.length:C.isCompressedTexture&&Array.isArray(C.image)?y.mipmaps.length:1}function S(C){return C===xn||C===Nl||C===xs?r.NEAREST:r.LINEAR}function P(C){const y=C.target;y.removeEventListener("dispose",P),x(y),y.isVideoTexture&&h.delete(y)}function D(C){const y=C.target;y.removeEventListener("dispose",D),U(y)}function x(C){const y=n.get(C);if(y.__webglInit===void 0)return;const q=C.source,Z=m.get(q);if(Z){const ae=Z[y.__cacheKey];ae.usedTimes--,ae.usedTimes===0&&b(C),Object.keys(Z).length===0&&m.delete(q)}n.remove(C)}function b(C){const y=n.get(C);r.deleteTexture(y.__webglTexture);const q=C.source,Z=m.get(q);delete Z[y.__cacheKey],a.memory.textures--}function U(C){const y=n.get(C);if(C.depthTexture&&C.depthTexture.dispose(),C.isWebGLCubeRenderTarget)for(let Z=0;Z<6;Z++){if(Array.isArray(y.__webglFramebuffer[Z]))for(let ae=0;ae<y.__webglFramebuffer[Z].length;ae++)r.deleteFramebuffer(y.__webglFramebuffer[Z][ae]);else r.deleteFramebuffer(y.__webglFramebuffer[Z]);y.__webglDepthbuffer&&r.deleteRenderbuffer(y.__webglDepthbuffer[Z])}else{if(Array.isArray(y.__webglFramebuffer))for(let Z=0;Z<y.__webglFramebuffer.length;Z++)r.deleteFramebuffer(y.__webglFramebuffer[Z]);else r.deleteFramebuffer(y.__webglFramebuffer);if(y.__webglDepthbuffer&&r.deleteRenderbuffer(y.__webglDepthbuffer),y.__webglMultisampledFramebuffer&&r.deleteFramebuffer(y.__webglMultisampledFramebuffer),y.__webglColorRenderbuffer)for(let Z=0;Z<y.__webglColorRenderbuffer.length;Z++)y.__webglColorRenderbuffer[Z]&&r.deleteRenderbuffer(y.__webglColorRenderbuffer[Z]);y.__webglDepthRenderbuffer&&r.deleteRenderbuffer(y.__webglDepthRenderbuffer)}const q=C.textures;for(let Z=0,ae=q.length;Z<ae;Z++){const ie=n.get(q[Z]);ie.__webglTexture&&(r.deleteTexture(ie.__webglTexture),a.memory.textures--),n.remove(q[Z])}n.remove(C)}let j=0;function L(){j=0}function F(){const C=j;return C>=i.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+C+" texture units while this GPU supports only "+i.maxTextures),j+=1,C}function k(C){const y=[];return y.push(C.wrapS),y.push(C.wrapT),y.push(C.wrapR||0),y.push(C.magFilter),y.push(C.minFilter),y.push(C.anisotropy),y.push(C.internalFormat),y.push(C.format),y.push(C.type),y.push(C.generateMipmaps),y.push(C.premultiplyAlpha),y.push(C.flipY),y.push(C.unpackAlignment),y.push(C.colorSpace),y.join()}function K(C,y){const q=n.get(C);if(C.isVideoTexture&&Ze(C),C.isRenderTargetTexture===!1&&C.version>0&&q.__version!==C.version){const Z=C.image;if(Z===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(Z.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Se(q,C,y);return}}t.bindTexture(r.TEXTURE_2D,q.__webglTexture,r.TEXTURE0+y)}function $(C,y){const q=n.get(C);if(C.version>0&&q.__version!==C.version){Se(q,C,y);return}t.bindTexture(r.TEXTURE_2D_ARRAY,q.__webglTexture,r.TEXTURE0+y)}function Y(C,y){const q=n.get(C);if(C.version>0&&q.__version!==C.version){Se(q,C,y);return}t.bindTexture(r.TEXTURE_3D,q.__webglTexture,r.TEXTURE0+y)}function re(C,y){const q=n.get(C);if(C.version>0&&q.__version!==C.version){Ve(q,C,y);return}t.bindTexture(r.TEXTURE_CUBE_MAP,q.__webglTexture,r.TEXTURE0+y)}const le={[Cs]:r.REPEAT,[ii]:r.CLAMP_TO_EDGE,[ao]:r.MIRRORED_REPEAT},ve={[xn]:r.NEAREST,[Nl]:r.NEAREST_MIPMAP_NEAREST,[xs]:r.NEAREST_MIPMAP_LINEAR,[Pn]:r.LINEAR,[no]:r.LINEAR_MIPMAP_NEAREST,[Ki]:r.LINEAR_MIPMAP_LINEAR},He={[Fp]:r.NEVER,[Hp]:r.ALWAYS,[Op]:r.LESS,[sd]:r.LEQUAL,[Bp]:r.EQUAL,[Gp]:r.GEQUAL,[kp]:r.GREATER,[zp]:r.NOTEQUAL};function X(C,y,q){if(y.type===pi&&e.has("OES_texture_float_linear")===!1&&(y.magFilter===Pn||y.magFilter===no||y.magFilter===xs||y.magFilter===Ki||y.minFilter===Pn||y.minFilter===no||y.minFilter===xs||y.minFilter===Ki)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),q?(r.texParameteri(C,r.TEXTURE_WRAP_S,le[y.wrapS]),r.texParameteri(C,r.TEXTURE_WRAP_T,le[y.wrapT]),(C===r.TEXTURE_3D||C===r.TEXTURE_2D_ARRAY)&&r.texParameteri(C,r.TEXTURE_WRAP_R,le[y.wrapR]),r.texParameteri(C,r.TEXTURE_MAG_FILTER,ve[y.magFilter]),r.texParameteri(C,r.TEXTURE_MIN_FILTER,ve[y.minFilter])):(r.texParameteri(C,r.TEXTURE_WRAP_S,r.CLAMP_TO_EDGE),r.texParameteri(C,r.TEXTURE_WRAP_T,r.CLAMP_TO_EDGE),(C===r.TEXTURE_3D||C===r.TEXTURE_2D_ARRAY)&&r.texParameteri(C,r.TEXTURE_WRAP_R,r.CLAMP_TO_EDGE),(y.wrapS!==ii||y.wrapT!==ii)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),r.texParameteri(C,r.TEXTURE_MAG_FILTER,S(y.magFilter)),r.texParameteri(C,r.TEXTURE_MIN_FILTER,S(y.minFilter)),y.minFilter!==xn&&y.minFilter!==Pn&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),y.compareFunction&&(r.texParameteri(C,r.TEXTURE_COMPARE_MODE,r.COMPARE_REF_TO_TEXTURE),r.texParameteri(C,r.TEXTURE_COMPARE_FUNC,He[y.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(y.magFilter===xn||y.minFilter!==xs&&y.minFilter!==Ki||y.type===pi&&e.has("OES_texture_float_linear")===!1||o===!1&&y.type===da&&e.has("OES_texture_half_float_linear")===!1)return;if(y.anisotropy>1||n.get(y).__currentAnisotropy){const Z=e.get("EXT_texture_filter_anisotropic");r.texParameterf(C,Z.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(y.anisotropy,i.getMaxAnisotropy())),n.get(y).__currentAnisotropy=y.anisotropy}}}function se(C,y){let q=!1;C.__webglInit===void 0&&(C.__webglInit=!0,y.addEventListener("dispose",P));const Z=y.source;let ae=m.get(Z);ae===void 0&&(ae={},m.set(Z,ae));const ie=k(y);if(ie!==C.__cacheKey){ae[ie]===void 0&&(ae[ie]={texture:r.createTexture(),usedTimes:0},a.memory.textures++,q=!0),ae[ie].usedTimes++;const et=ae[C.__cacheKey];et!==void 0&&(ae[C.__cacheKey].usedTimes--,et.usedTimes===0&&b(y)),C.__cacheKey=ie,C.__webglTexture=ae[ie].texture}return q}function Se(C,y,q){let Z=r.TEXTURE_2D;(y.isDataArrayTexture||y.isCompressedArrayTexture)&&(Z=r.TEXTURE_2D_ARRAY),y.isData3DTexture&&(Z=r.TEXTURE_3D);const ae=se(C,y),ie=y.source;t.bindTexture(Z,C.__webglTexture,r.TEXTURE0+q);const et=n.get(ie);if(ie.version!==et.__version||ae===!0){t.activeTexture(r.TEXTURE0+q);const Oe=Pt.getPrimaries(Pt.workingColorSpace),ue=y.colorSpace===dr?null:Pt.getPrimaries(y.colorSpace),fe=y.colorSpace===dr||Oe===ue?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,y.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,y.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,y.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,fe);const Ke=M(y)&&p(y.image)===!1;let ce=f(y.image,Ke,!1,i.maxTextureSize);ce=Le(y,ce);const zt=p(ce)||o,st=s.convert(y.format,y.colorSpace);let Ce=s.convert(y.type),Ee=E(y.internalFormat,st,Ce,y.colorSpace,y.isVideoTexture);X(Z,y,zt);let we;const ft=y.mipmaps,Pe=o&&y.isVideoTexture!==!0&&Ee!==nd,Ut=et.__version===void 0||ae===!0,N=ie.dataReady,_e=w(y,ce,zt);if(y.isDepthTexture)Ee=r.DEPTH_COMPONENT,o?y.type===pi?Ee=r.DEPTH_COMPONENT32F:y.type===pr?Ee=r.DEPTH_COMPONENT24:y.type===Vr?Ee=r.DEPTH24_STENCIL8:Ee=r.DEPTH_COMPONENT16:y.type===pi&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),y.format===Wr&&Ee===r.DEPTH_COMPONENT&&y.type!==Zl&&y.type!==pr&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),y.type=pr,Ce=s.convert(y.type)),y.format===Ls&&Ee===r.DEPTH_COMPONENT&&(Ee=r.DEPTH_STENCIL,y.type!==Vr&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),y.type=Vr,Ce=s.convert(y.type))),Ut&&(Pe?t.texStorage2D(r.TEXTURE_2D,1,Ee,ce.width,ce.height):t.texImage2D(r.TEXTURE_2D,0,Ee,ce.width,ce.height,0,st,Ce,null));else if(y.isDataTexture)if(ft.length>0&&zt){Pe&&Ut&&t.texStorage2D(r.TEXTURE_2D,_e,Ee,ft[0].width,ft[0].height);for(let G=0,he=ft.length;G<he;G++)we=ft[G],Pe?N&&t.texSubImage2D(r.TEXTURE_2D,G,0,0,we.width,we.height,st,Ce,we.data):t.texImage2D(r.TEXTURE_2D,G,Ee,we.width,we.height,0,st,Ce,we.data);y.generateMipmaps=!1}else Pe?(Ut&&t.texStorage2D(r.TEXTURE_2D,_e,Ee,ce.width,ce.height),N&&t.texSubImage2D(r.TEXTURE_2D,0,0,0,ce.width,ce.height,st,Ce,ce.data)):t.texImage2D(r.TEXTURE_2D,0,Ee,ce.width,ce.height,0,st,Ce,ce.data);else if(y.isCompressedTexture)if(y.isCompressedArrayTexture){Pe&&Ut&&t.texStorage3D(r.TEXTURE_2D_ARRAY,_e,Ee,ft[0].width,ft[0].height,ce.depth);for(let G=0,he=ft.length;G<he;G++)we=ft[G],y.format!==ri?st!==null?Pe?N&&t.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,G,0,0,0,we.width,we.height,ce.depth,st,we.data,0,0):t.compressedTexImage3D(r.TEXTURE_2D_ARRAY,G,Ee,we.width,we.height,ce.depth,0,we.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Pe?N&&t.texSubImage3D(r.TEXTURE_2D_ARRAY,G,0,0,0,we.width,we.height,ce.depth,st,Ce,we.data):t.texImage3D(r.TEXTURE_2D_ARRAY,G,Ee,we.width,we.height,ce.depth,0,st,Ce,we.data)}else{Pe&&Ut&&t.texStorage2D(r.TEXTURE_2D,_e,Ee,ft[0].width,ft[0].height);for(let G=0,he=ft.length;G<he;G++)we=ft[G],y.format!==ri?st!==null?Pe?N&&t.compressedTexSubImage2D(r.TEXTURE_2D,G,0,0,we.width,we.height,st,we.data):t.compressedTexImage2D(r.TEXTURE_2D,G,Ee,we.width,we.height,0,we.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Pe?N&&t.texSubImage2D(r.TEXTURE_2D,G,0,0,we.width,we.height,st,Ce,we.data):t.texImage2D(r.TEXTURE_2D,G,Ee,we.width,we.height,0,st,Ce,we.data)}else if(y.isDataArrayTexture)Pe?(Ut&&t.texStorage3D(r.TEXTURE_2D_ARRAY,_e,Ee,ce.width,ce.height,ce.depth),N&&t.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,0,ce.width,ce.height,ce.depth,st,Ce,ce.data)):t.texImage3D(r.TEXTURE_2D_ARRAY,0,Ee,ce.width,ce.height,ce.depth,0,st,Ce,ce.data);else if(y.isData3DTexture)Pe?(Ut&&t.texStorage3D(r.TEXTURE_3D,_e,Ee,ce.width,ce.height,ce.depth),N&&t.texSubImage3D(r.TEXTURE_3D,0,0,0,0,ce.width,ce.height,ce.depth,st,Ce,ce.data)):t.texImage3D(r.TEXTURE_3D,0,Ee,ce.width,ce.height,ce.depth,0,st,Ce,ce.data);else if(y.isFramebufferTexture){if(Ut)if(Pe)t.texStorage2D(r.TEXTURE_2D,_e,Ee,ce.width,ce.height);else{let G=ce.width,he=ce.height;for(let J=0;J<_e;J++)t.texImage2D(r.TEXTURE_2D,J,Ee,G,he,0,st,Ce,null),G>>=1,he>>=1}}else if(ft.length>0&&zt){if(Pe&&Ut){const G=bt(ft[0]);t.texStorage2D(r.TEXTURE_2D,_e,Ee,G.width,G.height)}for(let G=0,he=ft.length;G<he;G++)we=ft[G],Pe?N&&t.texSubImage2D(r.TEXTURE_2D,G,0,0,st,Ce,we):t.texImage2D(r.TEXTURE_2D,G,Ee,st,Ce,we);y.generateMipmaps=!1}else if(Pe){if(Ut){const G=bt(ce);t.texStorage2D(r.TEXTURE_2D,_e,Ee,G.width,G.height)}N&&t.texSubImage2D(r.TEXTURE_2D,0,0,0,st,Ce,ce)}else t.texImage2D(r.TEXTURE_2D,0,Ee,st,Ce,ce);v(y,zt)&&T(Z),et.__version=ie.version,y.onUpdate&&y.onUpdate(y)}C.__version=y.version}function Ve(C,y,q){if(y.image.length!==6)return;const Z=se(C,y),ae=y.source;t.bindTexture(r.TEXTURE_CUBE_MAP,C.__webglTexture,r.TEXTURE0+q);const ie=n.get(ae);if(ae.version!==ie.__version||Z===!0){t.activeTexture(r.TEXTURE0+q);const et=Pt.getPrimaries(Pt.workingColorSpace),Oe=y.colorSpace===dr?null:Pt.getPrimaries(y.colorSpace),ue=y.colorSpace===dr||et===Oe?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,y.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,y.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,y.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,ue);const fe=y.isCompressedTexture||y.image[0].isCompressedTexture,Ke=y.image[0]&&y.image[0].isDataTexture,ce=[];for(let G=0;G<6;G++)!fe&&!Ke?ce[G]=f(y.image[G],!1,!0,i.maxCubemapSize):ce[G]=Ke?y.image[G].image:y.image[G],ce[G]=Le(y,ce[G]);const zt=ce[0],st=p(zt)||o,Ce=s.convert(y.format,y.colorSpace),Ee=s.convert(y.type),we=E(y.internalFormat,Ce,Ee,y.colorSpace),ft=o&&y.isVideoTexture!==!0,Pe=ie.__version===void 0||Z===!0,Ut=ae.dataReady;let N=w(y,zt,st);X(r.TEXTURE_CUBE_MAP,y,st);let _e;if(fe){ft&&Pe&&t.texStorage2D(r.TEXTURE_CUBE_MAP,N,we,zt.width,zt.height);for(let G=0;G<6;G++){_e=ce[G].mipmaps;for(let he=0;he<_e.length;he++){const J=_e[he];y.format!==ri?Ce!==null?ft?Ut&&t.compressedTexSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+G,he,0,0,J.width,J.height,Ce,J.data):t.compressedTexImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+G,he,we,J.width,J.height,0,J.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):ft?Ut&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+G,he,0,0,J.width,J.height,Ce,Ee,J.data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+G,he,we,J.width,J.height,0,Ce,Ee,J.data)}}}else{if(_e=y.mipmaps,ft&&Pe){_e.length>0&&N++;const G=bt(ce[0]);t.texStorage2D(r.TEXTURE_CUBE_MAP,N,we,G.width,G.height)}for(let G=0;G<6;G++)if(Ke){ft?Ut&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+G,0,0,0,ce[G].width,ce[G].height,Ce,Ee,ce[G].data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+G,0,we,ce[G].width,ce[G].height,0,Ce,Ee,ce[G].data);for(let he=0;he<_e.length;he++){const de=_e[he].image[G].image;ft?Ut&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+G,he+1,0,0,de.width,de.height,Ce,Ee,de.data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+G,he+1,we,de.width,de.height,0,Ce,Ee,de.data)}}else{ft?Ut&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+G,0,0,0,Ce,Ee,ce[G]):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+G,0,we,Ce,Ee,ce[G]);for(let he=0;he<_e.length;he++){const J=_e[he];ft?Ut&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+G,he+1,0,0,Ce,Ee,J.image[G]):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+G,he+1,we,Ce,Ee,J.image[G])}}}v(y,st)&&T(r.TEXTURE_CUBE_MAP),ie.__version=ae.version,y.onUpdate&&y.onUpdate(y)}C.__version=y.version}function Re(C,y,q,Z,ae,ie){const et=s.convert(q.format,q.colorSpace),Oe=s.convert(q.type),ue=E(q.internalFormat,et,Oe,q.colorSpace);if(!n.get(y).__hasExternalTextures){const Ke=Math.max(1,y.width>>ie),ce=Math.max(1,y.height>>ie);ae===r.TEXTURE_3D||ae===r.TEXTURE_2D_ARRAY?t.texImage3D(ae,ie,ue,Ke,ce,y.depth,0,et,Oe,null):t.texImage2D(ae,ie,ue,Ke,ce,0,et,Oe,null)}t.bindFramebuffer(r.FRAMEBUFFER,C),dt(y)?l.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,Z,ae,n.get(q).__webglTexture,0,Ae(y)):(ae===r.TEXTURE_2D||ae>=r.TEXTURE_CUBE_MAP_POSITIVE_X&&ae<=r.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&r.framebufferTexture2D(r.FRAMEBUFFER,Z,ae,n.get(q).__webglTexture,ie),t.bindFramebuffer(r.FRAMEBUFFER,null)}function Te(C,y,q){if(r.bindRenderbuffer(r.RENDERBUFFER,C),y.depthBuffer&&!y.stencilBuffer){let Z=o===!0?r.DEPTH_COMPONENT24:r.DEPTH_COMPONENT16;if(q||dt(y)){const ae=y.depthTexture;ae&&ae.isDepthTexture&&(ae.type===pi?Z=r.DEPTH_COMPONENT32F:ae.type===pr&&(Z=r.DEPTH_COMPONENT24));const ie=Ae(y);dt(y)?l.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,ie,Z,y.width,y.height):r.renderbufferStorageMultisample(r.RENDERBUFFER,ie,Z,y.width,y.height)}else r.renderbufferStorage(r.RENDERBUFFER,Z,y.width,y.height);r.framebufferRenderbuffer(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.RENDERBUFFER,C)}else if(y.depthBuffer&&y.stencilBuffer){const Z=Ae(y);q&&dt(y)===!1?r.renderbufferStorageMultisample(r.RENDERBUFFER,Z,r.DEPTH24_STENCIL8,y.width,y.height):dt(y)?l.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,Z,r.DEPTH24_STENCIL8,y.width,y.height):r.renderbufferStorage(r.RENDERBUFFER,r.DEPTH_STENCIL,y.width,y.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.DEPTH_STENCIL_ATTACHMENT,r.RENDERBUFFER,C)}else{const Z=y.textures;for(let ae=0;ae<Z.length;ae++){const ie=Z[ae],et=s.convert(ie.format,ie.colorSpace),Oe=s.convert(ie.type),ue=E(ie.internalFormat,et,Oe,ie.colorSpace),fe=Ae(y);q&&dt(y)===!1?r.renderbufferStorageMultisample(r.RENDERBUFFER,fe,ue,y.width,y.height):dt(y)?l.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,fe,ue,y.width,y.height):r.renderbufferStorage(r.RENDERBUFFER,ue,y.width,y.height)}}r.bindRenderbuffer(r.RENDERBUFFER,null)}function Et(C,y){if(y&&y.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(r.FRAMEBUFFER,C),!(y.depthTexture&&y.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!n.get(y.depthTexture).__webglTexture||y.depthTexture.image.width!==y.width||y.depthTexture.image.height!==y.height)&&(y.depthTexture.image.width=y.width,y.depthTexture.image.height=y.height,y.depthTexture.needsUpdate=!0),K(y.depthTexture,0);const Z=n.get(y.depthTexture).__webglTexture,ae=Ae(y);if(y.depthTexture.format===Wr)dt(y)?l.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.TEXTURE_2D,Z,0,ae):r.framebufferTexture2D(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.TEXTURE_2D,Z,0);else if(y.depthTexture.format===Ls)dt(y)?l.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,r.DEPTH_STENCIL_ATTACHMENT,r.TEXTURE_2D,Z,0,ae):r.framebufferTexture2D(r.FRAMEBUFFER,r.DEPTH_STENCIL_ATTACHMENT,r.TEXTURE_2D,Z,0);else throw new Error("Unknown depthTexture format")}function je(C){const y=n.get(C),q=C.isWebGLCubeRenderTarget===!0;if(C.depthTexture&&!y.__autoAllocateDepthBuffer){if(q)throw new Error("target.depthTexture not supported in Cube render targets");Et(y.__webglFramebuffer,C)}else if(q){y.__webglDepthbuffer=[];for(let Z=0;Z<6;Z++)t.bindFramebuffer(r.FRAMEBUFFER,y.__webglFramebuffer[Z]),y.__webglDepthbuffer[Z]=r.createRenderbuffer(),Te(y.__webglDepthbuffer[Z],C,!1)}else t.bindFramebuffer(r.FRAMEBUFFER,y.__webglFramebuffer),y.__webglDepthbuffer=r.createRenderbuffer(),Te(y.__webglDepthbuffer,C,!1);t.bindFramebuffer(r.FRAMEBUFFER,null)}function B(C,y,q){const Z=n.get(C);y!==void 0&&Re(Z.__webglFramebuffer,C,C.texture,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,0),q!==void 0&&je(C)}function kt(C){const y=C.texture,q=n.get(C),Z=n.get(y);C.addEventListener("dispose",D);const ae=C.textures,ie=C.isWebGLCubeRenderTarget===!0,et=ae.length>1,Oe=p(C)||o;if(et||(Z.__webglTexture===void 0&&(Z.__webglTexture=r.createTexture()),Z.__version=y.version,a.memory.textures++),ie){q.__webglFramebuffer=[];for(let ue=0;ue<6;ue++)if(o&&y.mipmaps&&y.mipmaps.length>0){q.__webglFramebuffer[ue]=[];for(let fe=0;fe<y.mipmaps.length;fe++)q.__webglFramebuffer[ue][fe]=r.createFramebuffer()}else q.__webglFramebuffer[ue]=r.createFramebuffer()}else{if(o&&y.mipmaps&&y.mipmaps.length>0){q.__webglFramebuffer=[];for(let ue=0;ue<y.mipmaps.length;ue++)q.__webglFramebuffer[ue]=r.createFramebuffer()}else q.__webglFramebuffer=r.createFramebuffer();if(et)if(i.drawBuffers)for(let ue=0,fe=ae.length;ue<fe;ue++){const Ke=n.get(ae[ue]);Ke.__webglTexture===void 0&&(Ke.__webglTexture=r.createTexture(),a.memory.textures++)}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(o&&C.samples>0&&dt(C)===!1){q.__webglMultisampledFramebuffer=r.createFramebuffer(),q.__webglColorRenderbuffer=[],t.bindFramebuffer(r.FRAMEBUFFER,q.__webglMultisampledFramebuffer);for(let ue=0;ue<ae.length;ue++){const fe=ae[ue];q.__webglColorRenderbuffer[ue]=r.createRenderbuffer(),r.bindRenderbuffer(r.RENDERBUFFER,q.__webglColorRenderbuffer[ue]);const Ke=s.convert(fe.format,fe.colorSpace),ce=s.convert(fe.type),zt=E(fe.internalFormat,Ke,ce,fe.colorSpace,C.isXRRenderTarget===!0),st=Ae(C);r.renderbufferStorageMultisample(r.RENDERBUFFER,st,zt,C.width,C.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+ue,r.RENDERBUFFER,q.__webglColorRenderbuffer[ue])}r.bindRenderbuffer(r.RENDERBUFFER,null),C.depthBuffer&&(q.__webglDepthRenderbuffer=r.createRenderbuffer(),Te(q.__webglDepthRenderbuffer,C,!0)),t.bindFramebuffer(r.FRAMEBUFFER,null)}}if(ie){t.bindTexture(r.TEXTURE_CUBE_MAP,Z.__webglTexture),X(r.TEXTURE_CUBE_MAP,y,Oe);for(let ue=0;ue<6;ue++)if(o&&y.mipmaps&&y.mipmaps.length>0)for(let fe=0;fe<y.mipmaps.length;fe++)Re(q.__webglFramebuffer[ue][fe],C,y,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+ue,fe);else Re(q.__webglFramebuffer[ue],C,y,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+ue,0);v(y,Oe)&&T(r.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(et){for(let ue=0,fe=ae.length;ue<fe;ue++){const Ke=ae[ue],ce=n.get(Ke);t.bindTexture(r.TEXTURE_2D,ce.__webglTexture),X(r.TEXTURE_2D,Ke,Oe),Re(q.__webglFramebuffer,C,Ke,r.COLOR_ATTACHMENT0+ue,r.TEXTURE_2D,0),v(Ke,Oe)&&T(r.TEXTURE_2D)}t.unbindTexture()}else{let ue=r.TEXTURE_2D;if((C.isWebGL3DRenderTarget||C.isWebGLArrayRenderTarget)&&(o?ue=C.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),t.bindTexture(ue,Z.__webglTexture),X(ue,y,Oe),o&&y.mipmaps&&y.mipmaps.length>0)for(let fe=0;fe<y.mipmaps.length;fe++)Re(q.__webglFramebuffer[fe],C,y,r.COLOR_ATTACHMENT0,ue,fe);else Re(q.__webglFramebuffer,C,y,r.COLOR_ATTACHMENT0,ue,0);v(y,Oe)&&T(ue),t.unbindTexture()}C.depthBuffer&&je(C)}function Ie(C){const y=p(C)||o,q=C.textures;for(let Z=0,ae=q.length;Z<ae;Z++){const ie=q[Z];if(v(ie,y)){const et=C.isWebGLCubeRenderTarget?r.TEXTURE_CUBE_MAP:r.TEXTURE_2D,Oe=n.get(ie).__webglTexture;t.bindTexture(et,Oe),T(et),t.unbindTexture()}}}function ot(C){if(o&&C.samples>0&&dt(C)===!1){const y=C.textures,q=C.width,Z=C.height;let ae=r.COLOR_BUFFER_BIT;const ie=[],et=C.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,Oe=n.get(C),ue=y.length>1;if(ue)for(let fe=0;fe<y.length;fe++)t.bindFramebuffer(r.FRAMEBUFFER,Oe.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+fe,r.RENDERBUFFER,null),t.bindFramebuffer(r.FRAMEBUFFER,Oe.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+fe,r.TEXTURE_2D,null,0);t.bindFramebuffer(r.READ_FRAMEBUFFER,Oe.__webglMultisampledFramebuffer),t.bindFramebuffer(r.DRAW_FRAMEBUFFER,Oe.__webglFramebuffer);for(let fe=0;fe<y.length;fe++){ie.push(r.COLOR_ATTACHMENT0+fe),C.depthBuffer&&ie.push(et);const Ke=Oe.__ignoreDepthValues!==void 0?Oe.__ignoreDepthValues:!1;if(Ke===!1&&(C.depthBuffer&&(ae|=r.DEPTH_BUFFER_BIT),C.stencilBuffer&&(ae|=r.STENCIL_BUFFER_BIT)),ue&&r.framebufferRenderbuffer(r.READ_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.RENDERBUFFER,Oe.__webglColorRenderbuffer[fe]),Ke===!0&&(r.invalidateFramebuffer(r.READ_FRAMEBUFFER,[et]),r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,[et])),ue){const ce=n.get(y[fe]).__webglTexture;r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,ce,0)}r.blitFramebuffer(0,0,q,Z,0,0,q,Z,ae,r.NEAREST),c&&r.invalidateFramebuffer(r.READ_FRAMEBUFFER,ie)}if(t.bindFramebuffer(r.READ_FRAMEBUFFER,null),t.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),ue)for(let fe=0;fe<y.length;fe++){t.bindFramebuffer(r.FRAMEBUFFER,Oe.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+fe,r.RENDERBUFFER,Oe.__webglColorRenderbuffer[fe]);const Ke=n.get(y[fe]).__webglTexture;t.bindFramebuffer(r.FRAMEBUFFER,Oe.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+fe,r.TEXTURE_2D,Ke,0)}t.bindFramebuffer(r.DRAW_FRAMEBUFFER,Oe.__webglMultisampledFramebuffer)}}function Ae(C){return Math.min(i.maxSamples,C.samples)}function dt(C){const y=n.get(C);return o&&C.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&y.__useRenderToTexture!==!1}function Ze(C){const y=a.render.frame;h.get(C)!==y&&(h.set(C,y),C.update())}function Le(C,y){const q=C.colorSpace,Z=C.format,ae=C.type;return C.isCompressedTexture===!0||C.isVideoTexture===!0||C.format===Ol||q!==Tn&&q!==dr&&(Pt.getTransfer(q)===Yt?o===!1?e.has("EXT_sRGB")===!0&&Z===ri?(C.format=Ol,C.minFilter=Pn,C.generateMipmaps=!1):y=cd.sRGBToLinear(y):(Z!==ri||ae!==vr)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",q)),y}function bt(C){return typeof HTMLImageElement<"u"&&C instanceof HTMLImageElement?(u.width=C.naturalWidth||C.width,u.height=C.naturalHeight||C.height):typeof VideoFrame<"u"&&C instanceof VideoFrame?(u.width=C.displayWidth,u.height=C.displayHeight):(u.width=C.width,u.height=C.height),u}this.allocateTextureUnit=F,this.resetTextureUnits=L,this.setTexture2D=K,this.setTexture2DArray=$,this.setTexture3D=Y,this.setTextureCube=re,this.rebindTextures=B,this.setupRenderTarget=kt,this.updateRenderTargetMipmap=Ie,this.updateMultisampleRenderTarget=ot,this.setupDepthRenderbuffer=je,this.setupFrameBufferTexture=Re,this.useMultisampledRTT=dt}function rx(r,e,t){const n=t.isWebGL2;function i(s,a=dr){let o;const l=Pt.getTransfer(a);if(s===vr)return r.UNSIGNED_BYTE;if(s===$h)return r.UNSIGNED_SHORT_4_4_4_4;if(s===Zh)return r.UNSIGNED_SHORT_5_5_5_1;if(s===bp)return r.BYTE;if(s===Tp)return r.SHORT;if(s===Zl)return r.UNSIGNED_SHORT;if(s===Kh)return r.INT;if(s===pr)return r.UNSIGNED_INT;if(s===pi)return r.FLOAT;if(s===da)return n?r.HALF_FLOAT:(o=e.get("OES_texture_half_float"),o!==null?o.HALF_FLOAT_OES:null);if(s===Ap)return r.ALPHA;if(s===ri)return r.RGBA;if(s===wp)return r.LUMINANCE;if(s===Rp)return r.LUMINANCE_ALPHA;if(s===Wr)return r.DEPTH_COMPONENT;if(s===Ls)return r.DEPTH_STENCIL;if(s===Ol)return o=e.get("EXT_sRGB"),o!==null?o.SRGB_ALPHA_EXT:null;if(s===Jh)return r.RED;if(s===Qh)return r.RED_INTEGER;if(s===Cp)return r.RG;if(s===ed)return r.RG_INTEGER;if(s===td)return r.RGBA_INTEGER;if(s===Oo||s===Bo||s===ko||s===zo)if(l===Yt)if(o=e.get("WEBGL_compressed_texture_s3tc_srgb"),o!==null){if(s===Oo)return o.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(s===Bo)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(s===ko)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(s===zo)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(o=e.get("WEBGL_compressed_texture_s3tc"),o!==null){if(s===Oo)return o.COMPRESSED_RGB_S3TC_DXT1_EXT;if(s===Bo)return o.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(s===ko)return o.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(s===zo)return o.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(s===Kc||s===$c||s===Zc||s===Jc)if(o=e.get("WEBGL_compressed_texture_pvrtc"),o!==null){if(s===Kc)return o.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(s===$c)return o.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(s===Zc)return o.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(s===Jc)return o.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(s===nd)return o=e.get("WEBGL_compressed_texture_etc1"),o!==null?o.COMPRESSED_RGB_ETC1_WEBGL:null;if(s===Qc||s===eu)if(o=e.get("WEBGL_compressed_texture_etc"),o!==null){if(s===Qc)return l===Yt?o.COMPRESSED_SRGB8_ETC2:o.COMPRESSED_RGB8_ETC2;if(s===eu)return l===Yt?o.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:o.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(s===tu||s===nu||s===iu||s===ru||s===su||s===au||s===ou||s===lu||s===cu||s===uu||s===hu||s===du||s===fu||s===pu)if(o=e.get("WEBGL_compressed_texture_astc"),o!==null){if(s===tu)return l===Yt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:o.COMPRESSED_RGBA_ASTC_4x4_KHR;if(s===nu)return l===Yt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:o.COMPRESSED_RGBA_ASTC_5x4_KHR;if(s===iu)return l===Yt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:o.COMPRESSED_RGBA_ASTC_5x5_KHR;if(s===ru)return l===Yt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:o.COMPRESSED_RGBA_ASTC_6x5_KHR;if(s===su)return l===Yt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:o.COMPRESSED_RGBA_ASTC_6x6_KHR;if(s===au)return l===Yt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:o.COMPRESSED_RGBA_ASTC_8x5_KHR;if(s===ou)return l===Yt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:o.COMPRESSED_RGBA_ASTC_8x6_KHR;if(s===lu)return l===Yt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:o.COMPRESSED_RGBA_ASTC_8x8_KHR;if(s===cu)return l===Yt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:o.COMPRESSED_RGBA_ASTC_10x5_KHR;if(s===uu)return l===Yt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:o.COMPRESSED_RGBA_ASTC_10x6_KHR;if(s===hu)return l===Yt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:o.COMPRESSED_RGBA_ASTC_10x8_KHR;if(s===du)return l===Yt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:o.COMPRESSED_RGBA_ASTC_10x10_KHR;if(s===fu)return l===Yt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:o.COMPRESSED_RGBA_ASTC_12x10_KHR;if(s===pu)return l===Yt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:o.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(s===Go||s===mu||s===gu)if(o=e.get("EXT_texture_compression_bptc"),o!==null){if(s===Go)return l===Yt?o.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:o.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(s===mu)return o.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(s===gu)return o.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(s===Lp||s===_u||s===vu||s===xu)if(o=e.get("EXT_texture_compression_rgtc"),o!==null){if(s===Go)return o.COMPRESSED_RED_RGTC1_EXT;if(s===_u)return o.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(s===vu)return o.COMPRESSED_RED_GREEN_RGTC2_EXT;if(s===xu)return o.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return s===Vr?n?r.UNSIGNED_INT_24_8:(o=e.get("WEBGL_depth_texture"),o!==null?o.UNSIGNED_INT_24_8_WEBGL:null):r[s]!==void 0?r[s]:null}return{convert:i}}class sx extends On{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class gi extends tn{constructor(){super(),this.isGroup=!0,this.type="Group"}}const ax={type:"move"};class fl{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new gi,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new gi,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new I,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new I),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new gi,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new I,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new I),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let i=null,s=null,a=null;const o=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){a=!0;for(const _ of e.hand.values()){const f=t.getJointPose(_,n),p=this._getHandJoint(c,_);f!==null&&(p.matrix.fromArray(f.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=f.radius),p.visible=f!==null}const u=c.joints["index-finger-tip"],h=c.joints["thumb-tip"],d=u.position.distanceTo(h.position),m=.02,g=.005;c.inputState.pinching&&d>m+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&d<=m-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,n),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));o!==null&&(i=t.getPose(e.targetRaySpace,n),i===null&&s!==null&&(i=s),i!==null&&(o.matrix.fromArray(i.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,i.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(i.linearVelocity)):o.hasLinearVelocity=!1,i.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(i.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(ax)))}return o!==null&&(o.visible=i!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const n=new gi;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}}const ox=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,lx=`
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

}`;class cx{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t,n){if(this.texture===null){const i=new yn,s=e.properties.get(i);s.__webglTexture=t.texture,(t.depthNear!=n.depthNear||t.depthFar!=n.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=i}}render(e,t){if(this.texture!==null){if(this.mesh===null){const n=t.cameras[0].viewport,i=new Qi({extensions:{fragDepth:!0},vertexShader:ox,fragmentShader:lx,uniforms:{depthColor:{value:this.texture},depthWidth:{value:n.z},depthHeight:{value:n.w}}});this.mesh=new en(new go(20,20),i)}e.render(this.mesh,t)}}reset(){this.texture=null,this.mesh=null}}class ux extends Bs{constructor(e,t){super();const n=this;let i=null,s=1,a=null,o="local-floor",l=1,c=null,u=null,h=null,d=null,m=null,g=null;const _=new cx,f=t.getContextAttributes();let p=null,M=null;const v=[],T=[],E=new be;let w=null;const S=new On;S.layers.enable(1),S.viewport=new Vt;const P=new On;P.layers.enable(2),P.viewport=new Vt;const D=[S,P],x=new sx;x.layers.enable(1),x.layers.enable(2);let b=null,U=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(X){let se=v[X];return se===void 0&&(se=new fl,v[X]=se),se.getTargetRaySpace()},this.getControllerGrip=function(X){let se=v[X];return se===void 0&&(se=new fl,v[X]=se),se.getGripSpace()},this.getHand=function(X){let se=v[X];return se===void 0&&(se=new fl,v[X]=se),se.getHandSpace()};function j(X){const se=T.indexOf(X.inputSource);if(se===-1)return;const Se=v[se];Se!==void 0&&(Se.update(X.inputSource,X.frame,c||a),Se.dispatchEvent({type:X.type,data:X.inputSource}))}function L(){i.removeEventListener("select",j),i.removeEventListener("selectstart",j),i.removeEventListener("selectend",j),i.removeEventListener("squeeze",j),i.removeEventListener("squeezestart",j),i.removeEventListener("squeezeend",j),i.removeEventListener("end",L),i.removeEventListener("inputsourceschange",F);for(let X=0;X<v.length;X++){const se=T[X];se!==null&&(T[X]=null,v[X].disconnect(se))}b=null,U=null,_.reset(),e.setRenderTarget(p),m=null,d=null,h=null,i=null,M=null,He.stop(),n.isPresenting=!1,e.setPixelRatio(w),e.setSize(E.width,E.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(X){s=X,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(X){o=X,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(X){c=X},this.getBaseLayer=function(){return d!==null?d:m},this.getBinding=function(){return h},this.getFrame=function(){return g},this.getSession=function(){return i},this.setSession=async function(X){if(i=X,i!==null){if(p=e.getRenderTarget(),i.addEventListener("select",j),i.addEventListener("selectstart",j),i.addEventListener("selectend",j),i.addEventListener("squeeze",j),i.addEventListener("squeezestart",j),i.addEventListener("squeezeend",j),i.addEventListener("end",L),i.addEventListener("inputsourceschange",F),f.xrCompatible!==!0&&await t.makeXRCompatible(),w=e.getPixelRatio(),e.getSize(E),i.renderState.layers===void 0||e.capabilities.isWebGL2===!1){const se={antialias:i.renderState.layers===void 0?f.antialias:!0,alpha:!0,depth:f.depth,stencil:f.stencil,framebufferScaleFactor:s};m=new XRWebGLLayer(i,t,se),i.updateRenderState({baseLayer:m}),e.setPixelRatio(1),e.setSize(m.framebufferWidth,m.framebufferHeight,!1),M=new Xr(m.framebufferWidth,m.framebufferHeight,{format:ri,type:vr,colorSpace:e.outputColorSpace,stencilBuffer:f.stencil})}else{let se=null,Se=null,Ve=null;f.depth&&(Ve=f.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,se=f.stencil?Ls:Wr,Se=f.stencil?Vr:pr);const Re={colorFormat:t.RGBA8,depthFormat:Ve,scaleFactor:s};h=new XRWebGLBinding(i,t),d=h.createProjectionLayer(Re),i.updateRenderState({layers:[d]}),e.setPixelRatio(1),e.setSize(d.textureWidth,d.textureHeight,!1),M=new Xr(d.textureWidth,d.textureHeight,{format:ri,type:vr,depthTexture:new xd(d.textureWidth,d.textureHeight,Se,void 0,void 0,void 0,void 0,void 0,void 0,se),stencilBuffer:f.stencil,colorSpace:e.outputColorSpace,samples:f.antialias?4:0});const Te=e.properties.get(M);Te.__ignoreDepthValues=d.ignoreDepthValues}M.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await i.requestReferenceSpace(o),He.setContext(i),He.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(i!==null)return i.environmentBlendMode};function F(X){for(let se=0;se<X.removed.length;se++){const Se=X.removed[se],Ve=T.indexOf(Se);Ve>=0&&(T[Ve]=null,v[Ve].disconnect(Se))}for(let se=0;se<X.added.length;se++){const Se=X.added[se];let Ve=T.indexOf(Se);if(Ve===-1){for(let Te=0;Te<v.length;Te++)if(Te>=T.length){T.push(Se),Ve=Te;break}else if(T[Te]===null){T[Te]=Se,Ve=Te;break}if(Ve===-1)break}const Re=v[Ve];Re&&Re.connect(Se)}}const k=new I,K=new I;function $(X,se,Se){k.setFromMatrixPosition(se.matrixWorld),K.setFromMatrixPosition(Se.matrixWorld);const Ve=k.distanceTo(K),Re=se.projectionMatrix.elements,Te=Se.projectionMatrix.elements,Et=Re[14]/(Re[10]-1),je=Re[14]/(Re[10]+1),B=(Re[9]+1)/Re[5],kt=(Re[9]-1)/Re[5],Ie=(Re[8]-1)/Re[0],ot=(Te[8]+1)/Te[0],Ae=Et*Ie,dt=Et*ot,Ze=Ve/(-Ie+ot),Le=Ze*-Ie;se.matrixWorld.decompose(X.position,X.quaternion,X.scale),X.translateX(Le),X.translateZ(Ze),X.matrixWorld.compose(X.position,X.quaternion,X.scale),X.matrixWorldInverse.copy(X.matrixWorld).invert();const bt=Et+Ze,C=je+Ze,y=Ae-Le,q=dt+(Ve-Le),Z=B*je/C*bt,ae=kt*je/C*bt;X.projectionMatrix.makePerspective(y,q,Z,ae,bt,C),X.projectionMatrixInverse.copy(X.projectionMatrix).invert()}function Y(X,se){se===null?X.matrixWorld.copy(X.matrix):X.matrixWorld.multiplyMatrices(se.matrixWorld,X.matrix),X.matrixWorldInverse.copy(X.matrixWorld).invert()}this.updateCamera=function(X){if(i===null)return;_.texture!==null&&(X.near=_.depthNear,X.far=_.depthFar),x.near=P.near=S.near=X.near,x.far=P.far=S.far=X.far,(b!==x.near||U!==x.far)&&(i.updateRenderState({depthNear:x.near,depthFar:x.far}),b=x.near,U=x.far,S.near=b,S.far=U,P.near=b,P.far=U,S.updateProjectionMatrix(),P.updateProjectionMatrix(),X.updateProjectionMatrix());const se=X.parent,Se=x.cameras;Y(x,se);for(let Ve=0;Ve<Se.length;Ve++)Y(Se[Ve],se);Se.length===2?$(x,S,P):x.projectionMatrix.copy(S.projectionMatrix),re(X,x,se)};function re(X,se,Se){Se===null?X.matrix.copy(se.matrixWorld):(X.matrix.copy(Se.matrixWorld),X.matrix.invert(),X.matrix.multiply(se.matrixWorld)),X.matrix.decompose(X.position,X.quaternion,X.scale),X.updateMatrixWorld(!0),X.projectionMatrix.copy(se.projectionMatrix),X.projectionMatrixInverse.copy(se.projectionMatrixInverse),X.isPerspectiveCamera&&(X.fov=Is*2*Math.atan(1/X.projectionMatrix.elements[5]),X.zoom=1)}this.getCamera=function(){return x},this.getFoveation=function(){if(!(d===null&&m===null))return l},this.setFoveation=function(X){l=X,d!==null&&(d.fixedFoveation=X),m!==null&&m.fixedFoveation!==void 0&&(m.fixedFoveation=X)},this.hasDepthSensing=function(){return _.texture!==null};let le=null;function ve(X,se){if(u=se.getViewerPose(c||a),g=se,u!==null){const Se=u.views;m!==null&&(e.setRenderTargetFramebuffer(M,m.framebuffer),e.setRenderTarget(M));let Ve=!1;Se.length!==x.cameras.length&&(x.cameras.length=0,Ve=!0);for(let Te=0;Te<Se.length;Te++){const Et=Se[Te];let je=null;if(m!==null)je=m.getViewport(Et);else{const kt=h.getViewSubImage(d,Et);je=kt.viewport,Te===0&&(e.setRenderTargetTextures(M,kt.colorTexture,d.ignoreDepthValues?void 0:kt.depthStencilTexture),e.setRenderTarget(M))}let B=D[Te];B===void 0&&(B=new On,B.layers.enable(Te),B.viewport=new Vt,D[Te]=B),B.matrix.fromArray(Et.transform.matrix),B.matrix.decompose(B.position,B.quaternion,B.scale),B.projectionMatrix.fromArray(Et.projectionMatrix),B.projectionMatrixInverse.copy(B.projectionMatrix).invert(),B.viewport.set(je.x,je.y,je.width,je.height),Te===0&&(x.matrix.copy(B.matrix),x.matrix.decompose(x.position,x.quaternion,x.scale)),Ve===!0&&x.cameras.push(B)}const Re=i.enabledFeatures;if(Re&&Re.includes("depth-sensing")){const Te=h.getDepthInformation(Se[0]);Te&&Te.isValid&&Te.texture&&_.init(e,Te,i.renderState)}}for(let Se=0;Se<v.length;Se++){const Ve=T[Se],Re=v[Se];Ve!==null&&Re!==void 0&&Re.update(Ve,se,c||a)}_.render(e,x),le&&le(X,se),se.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:se}),g=null}const He=new vd;He.setAnimationLoop(ve),this.setAnimationLoop=function(X){le=X},this.dispose=function(){}}}const Ur=new Ri,hx=new Xe;function dx(r,e){function t(f,p){f.matrixAutoUpdate===!0&&f.updateMatrix(),p.value.copy(f.matrix)}function n(f,p){p.color.getRGB(f.fogColor.value,gd(r)),p.isFog?(f.fogNear.value=p.near,f.fogFar.value=p.far):p.isFogExp2&&(f.fogDensity.value=p.density)}function i(f,p,M,v,T){p.isMeshBasicMaterial||p.isMeshLambertMaterial?s(f,p):p.isMeshToonMaterial?(s(f,p),h(f,p)):p.isMeshPhongMaterial?(s(f,p),u(f,p)):p.isMeshStandardMaterial?(s(f,p),d(f,p),p.isMeshPhysicalMaterial&&m(f,p,T)):p.isMeshMatcapMaterial?(s(f,p),g(f,p)):p.isMeshDepthMaterial?s(f,p):p.isMeshDistanceMaterial?(s(f,p),_(f,p)):p.isMeshNormalMaterial?s(f,p):p.isLineBasicMaterial?(a(f,p),p.isLineDashedMaterial&&o(f,p)):p.isPointsMaterial?l(f,p,M,v):p.isSpriteMaterial?c(f,p):p.isShadowMaterial?(f.color.value.copy(p.color),f.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function s(f,p){f.opacity.value=p.opacity,p.color&&f.diffuse.value.copy(p.color),p.emissive&&f.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(f.map.value=p.map,t(p.map,f.mapTransform)),p.alphaMap&&(f.alphaMap.value=p.alphaMap,t(p.alphaMap,f.alphaMapTransform)),p.bumpMap&&(f.bumpMap.value=p.bumpMap,t(p.bumpMap,f.bumpMapTransform),f.bumpScale.value=p.bumpScale,p.side===Bn&&(f.bumpScale.value*=-1)),p.normalMap&&(f.normalMap.value=p.normalMap,t(p.normalMap,f.normalMapTransform),f.normalScale.value.copy(p.normalScale),p.side===Bn&&f.normalScale.value.negate()),p.displacementMap&&(f.displacementMap.value=p.displacementMap,t(p.displacementMap,f.displacementMapTransform),f.displacementScale.value=p.displacementScale,f.displacementBias.value=p.displacementBias),p.emissiveMap&&(f.emissiveMap.value=p.emissiveMap,t(p.emissiveMap,f.emissiveMapTransform)),p.specularMap&&(f.specularMap.value=p.specularMap,t(p.specularMap,f.specularMapTransform)),p.alphaTest>0&&(f.alphaTest.value=p.alphaTest);const M=e.get(p),v=M.envMap,T=M.envMapRotation;if(v&&(f.envMap.value=v,Ur.copy(T),Ur.x*=-1,Ur.y*=-1,Ur.z*=-1,v.isCubeTexture&&v.isRenderTargetTexture===!1&&(Ur.y*=-1,Ur.z*=-1),f.envMapRotation.value.setFromMatrix4(hx.makeRotationFromEuler(Ur)),f.flipEnvMap.value=v.isCubeTexture&&v.isRenderTargetTexture===!1?-1:1,f.reflectivity.value=p.reflectivity,f.ior.value=p.ior,f.refractionRatio.value=p.refractionRatio),p.lightMap){f.lightMap.value=p.lightMap;const E=r._useLegacyLights===!0?Math.PI:1;f.lightMapIntensity.value=p.lightMapIntensity*E,t(p.lightMap,f.lightMapTransform)}p.aoMap&&(f.aoMap.value=p.aoMap,f.aoMapIntensity.value=p.aoMapIntensity,t(p.aoMap,f.aoMapTransform))}function a(f,p){f.diffuse.value.copy(p.color),f.opacity.value=p.opacity,p.map&&(f.map.value=p.map,t(p.map,f.mapTransform))}function o(f,p){f.dashSize.value=p.dashSize,f.totalSize.value=p.dashSize+p.gapSize,f.scale.value=p.scale}function l(f,p,M,v){f.diffuse.value.copy(p.color),f.opacity.value=p.opacity,f.size.value=p.size*M,f.scale.value=v*.5,p.map&&(f.map.value=p.map,t(p.map,f.uvTransform)),p.alphaMap&&(f.alphaMap.value=p.alphaMap,t(p.alphaMap,f.alphaMapTransform)),p.alphaTest>0&&(f.alphaTest.value=p.alphaTest)}function c(f,p){f.diffuse.value.copy(p.color),f.opacity.value=p.opacity,f.rotation.value=p.rotation,p.map&&(f.map.value=p.map,t(p.map,f.mapTransform)),p.alphaMap&&(f.alphaMap.value=p.alphaMap,t(p.alphaMap,f.alphaMapTransform)),p.alphaTest>0&&(f.alphaTest.value=p.alphaTest)}function u(f,p){f.specular.value.copy(p.specular),f.shininess.value=Math.max(p.shininess,1e-4)}function h(f,p){p.gradientMap&&(f.gradientMap.value=p.gradientMap)}function d(f,p){f.metalness.value=p.metalness,p.metalnessMap&&(f.metalnessMap.value=p.metalnessMap,t(p.metalnessMap,f.metalnessMapTransform)),f.roughness.value=p.roughness,p.roughnessMap&&(f.roughnessMap.value=p.roughnessMap,t(p.roughnessMap,f.roughnessMapTransform)),e.get(p).envMap&&(f.envMapIntensity.value=p.envMapIntensity)}function m(f,p,M){f.ior.value=p.ior,p.sheen>0&&(f.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),f.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(f.sheenColorMap.value=p.sheenColorMap,t(p.sheenColorMap,f.sheenColorMapTransform)),p.sheenRoughnessMap&&(f.sheenRoughnessMap.value=p.sheenRoughnessMap,t(p.sheenRoughnessMap,f.sheenRoughnessMapTransform))),p.clearcoat>0&&(f.clearcoat.value=p.clearcoat,f.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(f.clearcoatMap.value=p.clearcoatMap,t(p.clearcoatMap,f.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(f.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,t(p.clearcoatRoughnessMap,f.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(f.clearcoatNormalMap.value=p.clearcoatNormalMap,t(p.clearcoatNormalMap,f.clearcoatNormalMapTransform),f.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===Bn&&f.clearcoatNormalScale.value.negate())),p.iridescence>0&&(f.iridescence.value=p.iridescence,f.iridescenceIOR.value=p.iridescenceIOR,f.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],f.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(f.iridescenceMap.value=p.iridescenceMap,t(p.iridescenceMap,f.iridescenceMapTransform)),p.iridescenceThicknessMap&&(f.iridescenceThicknessMap.value=p.iridescenceThicknessMap,t(p.iridescenceThicknessMap,f.iridescenceThicknessMapTransform))),p.transmission>0&&(f.transmission.value=p.transmission,f.transmissionSamplerMap.value=M.texture,f.transmissionSamplerSize.value.set(M.width,M.height),p.transmissionMap&&(f.transmissionMap.value=p.transmissionMap,t(p.transmissionMap,f.transmissionMapTransform)),f.thickness.value=p.thickness,p.thicknessMap&&(f.thicknessMap.value=p.thicknessMap,t(p.thicknessMap,f.thicknessMapTransform)),f.attenuationDistance.value=p.attenuationDistance,f.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(f.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(f.anisotropyMap.value=p.anisotropyMap,t(p.anisotropyMap,f.anisotropyMapTransform))),f.specularIntensity.value=p.specularIntensity,f.specularColor.value.copy(p.specularColor),p.specularColorMap&&(f.specularColorMap.value=p.specularColorMap,t(p.specularColorMap,f.specularColorMapTransform)),p.specularIntensityMap&&(f.specularIntensityMap.value=p.specularIntensityMap,t(p.specularIntensityMap,f.specularIntensityMapTransform))}function g(f,p){p.matcap&&(f.matcap.value=p.matcap)}function _(f,p){const M=e.get(p).light;f.referencePosition.value.setFromMatrixPosition(M.matrixWorld),f.nearDistance.value=M.shadow.camera.near,f.farDistance.value=M.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:i}}function fx(r,e,t,n){let i={},s={},a=[];const o=t.isWebGL2?r.getParameter(r.MAX_UNIFORM_BUFFER_BINDINGS):0;function l(M,v){const T=v.program;n.uniformBlockBinding(M,T)}function c(M,v){let T=i[M.id];T===void 0&&(g(M),T=u(M),i[M.id]=T,M.addEventListener("dispose",f));const E=v.program;n.updateUBOMapping(M,E);const w=e.render.frame;s[M.id]!==w&&(d(M),s[M.id]=w)}function u(M){const v=h();M.__bindingPointIndex=v;const T=r.createBuffer(),E=M.__size,w=M.usage;return r.bindBuffer(r.UNIFORM_BUFFER,T),r.bufferData(r.UNIFORM_BUFFER,E,w),r.bindBuffer(r.UNIFORM_BUFFER,null),r.bindBufferBase(r.UNIFORM_BUFFER,v,T),T}function h(){for(let M=0;M<o;M++)if(a.indexOf(M)===-1)return a.push(M),M;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(M){const v=i[M.id],T=M.uniforms,E=M.__cache;r.bindBuffer(r.UNIFORM_BUFFER,v);for(let w=0,S=T.length;w<S;w++){const P=Array.isArray(T[w])?T[w]:[T[w]];for(let D=0,x=P.length;D<x;D++){const b=P[D];if(m(b,w,D,E)===!0){const U=b.__offset,j=Array.isArray(b.value)?b.value:[b.value];let L=0;for(let F=0;F<j.length;F++){const k=j[F],K=_(k);typeof k=="number"||typeof k=="boolean"?(b.__data[0]=k,r.bufferSubData(r.UNIFORM_BUFFER,U+L,b.__data)):k.isMatrix3?(b.__data[0]=k.elements[0],b.__data[1]=k.elements[1],b.__data[2]=k.elements[2],b.__data[3]=0,b.__data[4]=k.elements[3],b.__data[5]=k.elements[4],b.__data[6]=k.elements[5],b.__data[7]=0,b.__data[8]=k.elements[6],b.__data[9]=k.elements[7],b.__data[10]=k.elements[8],b.__data[11]=0):(k.toArray(b.__data,L),L+=K.storage/Float32Array.BYTES_PER_ELEMENT)}r.bufferSubData(r.UNIFORM_BUFFER,U,b.__data)}}}r.bindBuffer(r.UNIFORM_BUFFER,null)}function m(M,v,T,E){const w=M.value,S=v+"_"+T;if(E[S]===void 0)return typeof w=="number"||typeof w=="boolean"?E[S]=w:E[S]=w.clone(),!0;{const P=E[S];if(typeof w=="number"||typeof w=="boolean"){if(P!==w)return E[S]=w,!0}else if(P.equals(w)===!1)return P.copy(w),!0}return!1}function g(M){const v=M.uniforms;let T=0;const E=16;for(let S=0,P=v.length;S<P;S++){const D=Array.isArray(v[S])?v[S]:[v[S]];for(let x=0,b=D.length;x<b;x++){const U=D[x],j=Array.isArray(U.value)?U.value:[U.value];for(let L=0,F=j.length;L<F;L++){const k=j[L],K=_(k),$=T%E;$!==0&&E-$<K.boundary&&(T+=E-$),U.__data=new Float32Array(K.storage/Float32Array.BYTES_PER_ELEMENT),U.__offset=T,T+=K.storage}}}const w=T%E;return w>0&&(T+=E-w),M.__size=T,M.__cache={},this}function _(M){const v={boundary:0,storage:0};return typeof M=="number"||typeof M=="boolean"?(v.boundary=4,v.storage=4):M.isVector2?(v.boundary=8,v.storage=8):M.isVector3||M.isColor?(v.boundary=16,v.storage=12):M.isVector4?(v.boundary=16,v.storage=16):M.isMatrix3?(v.boundary=48,v.storage=48):M.isMatrix4?(v.boundary=64,v.storage=64):M.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",M),v}function f(M){const v=M.target;v.removeEventListener("dispose",f);const T=a.indexOf(v.__bindingPointIndex);a.splice(T,1),r.deleteBuffer(i[v.id]),delete i[v.id],delete s[v.id]}function p(){for(const M in i)r.deleteBuffer(i[M]);a=[],i={},s={}}return{bind:l,update:c,dispose:p}}class zl{constructor(e={}){const{canvas:t=im(),context:n=null,depth:i=!0,stencil:s=!0,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:h=!1}=e;this.isWebGLRenderer=!0;let d;n!==null?d=n.getContextAttributes().alpha:d=a;const m=new Uint32Array(4),g=new Int32Array(4);let _=null,f=null;const p=[],M=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Fn,this._useLegacyLights=!1,this.toneMapping=_r,this.toneMappingExposure=1;const v=this;let T=!1,E=0,w=0,S=null,P=-1,D=null;const x=new Vt,b=new Vt;let U=null;const j=new $e(0);let L=0,F=t.width,k=t.height,K=1,$=null,Y=null;const re=new Vt(0,0,F,k),le=new Vt(0,0,F,k);let ve=!1;const He=new tc;let X=!1,se=!1,Se=null;const Ve=new Xe,Re=new be,Te=new I,Et={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function je(){return S===null?K:1}let B=n;function kt(A,O){for(let V=0;V<A.length;V++){const W=A[V],z=t.getContext(W,O);if(z!==null)return z}return null}try{const A={alpha:!0,depth:i,stencil:s,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:h};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${$l}`),t.addEventListener("webglcontextlost",Ut,!1),t.addEventListener("webglcontextrestored",N,!1),t.addEventListener("webglcontextcreationerror",_e,!1),B===null){const O=["webgl2","webgl","experimental-webgl"];if(v.isWebGL1Renderer===!0&&O.shift(),B=kt(O,A),B===null)throw kt(O)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}typeof WebGLRenderingContext<"u"&&B instanceof WebGLRenderingContext&&console.warn("THREE.WebGLRenderer: WebGL 1 support was deprecated in r153 and will be removed in r163."),B.getShaderPrecisionFormat===void 0&&(B.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(A){throw console.error("THREE.WebGLRenderer: "+A.message),A}let Ie,ot,Ae,dt,Ze,Le,bt,C,y,q,Z,ae,ie,et,Oe,ue,fe,Ke,ce,zt,st,Ce,Ee,we;function ft(){Ie=new xv(B),ot=new fv(B,Ie,e),Ie.init(ot),Ce=new rx(B,Ie,ot),Ae=new nx(B,Ie,ot),dt=new Sv(B),Ze=new H0,Le=new ix(B,Ie,Ae,Ze,ot,Ce,dt),bt=new mv(v),C=new vv(v),y=new Rm(B,ot),Ee=new hv(B,Ie,y,ot),q=new yv(B,y,dt,Ee),Z=new Av(B,q,y,dt),ce=new Tv(B,ot,Le),ue=new pv(Ze),ae=new G0(v,bt,C,Ie,ot,Ee,ue),ie=new dx(v,Ze),et=new W0,Oe=new $0(Ie,ot),Ke=new uv(v,bt,C,Ae,Z,d,l),fe=new tx(v,Z,ot),we=new fx(B,dt,ot,Ae),zt=new dv(B,Ie,dt,ot),st=new Mv(B,Ie,dt,ot),dt.programs=ae.programs,v.capabilities=ot,v.extensions=Ie,v.properties=Ze,v.renderLists=et,v.shadowMap=fe,v.state=Ae,v.info=dt}ft();const Pe=new ux(v,B);this.xr=Pe,this.getContext=function(){return B},this.getContextAttributes=function(){return B.getContextAttributes()},this.forceContextLoss=function(){const A=Ie.get("WEBGL_lose_context");A&&A.loseContext()},this.forceContextRestore=function(){const A=Ie.get("WEBGL_lose_context");A&&A.restoreContext()},this.getPixelRatio=function(){return K},this.setPixelRatio=function(A){A!==void 0&&(K=A,this.setSize(F,k,!1))},this.getSize=function(A){return A.set(F,k)},this.setSize=function(A,O,V=!0){if(Pe.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}F=A,k=O,t.width=Math.floor(A*K),t.height=Math.floor(O*K),V===!0&&(t.style.width=A+"px",t.style.height=O+"px"),this.setViewport(0,0,A,O)},this.getDrawingBufferSize=function(A){return A.set(F*K,k*K).floor()},this.setDrawingBufferSize=function(A,O,V){F=A,k=O,K=V,t.width=Math.floor(A*V),t.height=Math.floor(O*V),this.setViewport(0,0,A,O)},this.getCurrentViewport=function(A){return A.copy(x)},this.getViewport=function(A){return A.copy(re)},this.setViewport=function(A,O,V,W){A.isVector4?re.set(A.x,A.y,A.z,A.w):re.set(A,O,V,W),Ae.viewport(x.copy(re).multiplyScalar(K).round())},this.getScissor=function(A){return A.copy(le)},this.setScissor=function(A,O,V,W){A.isVector4?le.set(A.x,A.y,A.z,A.w):le.set(A,O,V,W),Ae.scissor(b.copy(le).multiplyScalar(K).round())},this.getScissorTest=function(){return ve},this.setScissorTest=function(A){Ae.setScissorTest(ve=A)},this.setOpaqueSort=function(A){$=A},this.setTransparentSort=function(A){Y=A},this.getClearColor=function(A){return A.copy(Ke.getClearColor())},this.setClearColor=function(){Ke.setClearColor.apply(Ke,arguments)},this.getClearAlpha=function(){return Ke.getClearAlpha()},this.setClearAlpha=function(){Ke.setClearAlpha.apply(Ke,arguments)},this.clear=function(A=!0,O=!0,V=!0){let W=0;if(A){let z=!1;if(S!==null){const Me=S.texture.format;z=Me===td||Me===ed||Me===Qh}if(z){const Me=S.texture.type,Ne=Me===vr||Me===pr||Me===Zl||Me===Vr||Me===$h||Me===Zh,ke=Ke.getClearColor(),qe=Ke.getClearAlpha(),ct=ke.r,at=ke.g,tt=ke.b;Ne?(m[0]=ct,m[1]=at,m[2]=tt,m[3]=qe,B.clearBufferuiv(B.COLOR,0,m)):(g[0]=ct,g[1]=at,g[2]=tt,g[3]=qe,B.clearBufferiv(B.COLOR,0,g))}else W|=B.COLOR_BUFFER_BIT}O&&(W|=B.DEPTH_BUFFER_BIT),V&&(W|=B.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),B.clear(W)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",Ut,!1),t.removeEventListener("webglcontextrestored",N,!1),t.removeEventListener("webglcontextcreationerror",_e,!1),et.dispose(),Oe.dispose(),Ze.dispose(),bt.dispose(),C.dispose(),Z.dispose(),Ee.dispose(),we.dispose(),ae.dispose(),Pe.dispose(),Pe.removeEventListener("sessionstart",wt),Pe.removeEventListener("sessionend",lt),Se&&(Se.dispose(),Se=null),Wt.stop()};function Ut(A){A.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),T=!0}function N(){console.log("THREE.WebGLRenderer: Context Restored."),T=!1;const A=dt.autoReset,O=fe.enabled,V=fe.autoUpdate,W=fe.needsUpdate,z=fe.type;ft(),dt.autoReset=A,fe.enabled=O,fe.autoUpdate=V,fe.needsUpdate=W,fe.type=z}function _e(A){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",A.statusMessage)}function G(A){const O=A.target;O.removeEventListener("dispose",G),he(O)}function he(A){J(A),Ze.remove(A)}function J(A){const O=Ze.get(A).programs;O!==void 0&&(O.forEach(function(V){ae.releaseProgram(V)}),A.isShaderMaterial&&ae.releaseShaderCache(A))}this.renderBufferDirect=function(A,O,V,W,z,Me){O===null&&(O=Et);const Ne=z.isMesh&&z.matrixWorld.determinant()<0,ke=_a(A,O,V,W,z);Ae.setMaterial(W,Ne);let qe=V.index,ct=1;if(W.wireframe===!0){if(qe=q.getWireframeAttribute(V),qe===void 0)return;ct=2}const at=V.drawRange,tt=V.attributes.position;let Zt=at.start*ct,An=(at.start+at.count)*ct;Me!==null&&(Zt=Math.max(Zt,Me.start*ct),An=Math.min(An,(Me.start+Me.count)*ct)),qe!==null?(Zt=Math.max(Zt,0),An=Math.min(An,qe.count)):tt!=null&&(Zt=Math.max(Zt,0),An=Math.min(An,tt.count));const an=An-Zt;if(an<0||an===1/0)return;Ee.setup(z,W,ke,V,qe);let si,Gt=zt;if(qe!==null&&(si=y.get(qe),Gt=st,Gt.setIndex(si)),z.isMesh)W.wireframe===!0?(Ae.setLineWidth(W.wireframeLinewidth*je()),Gt.setMode(B.LINES)):Gt.setMode(B.TRIANGLES);else if(z.isLine){let ut=W.linewidth;ut===void 0&&(ut=1),Ae.setLineWidth(ut*je()),z.isLineSegments?Gt.setMode(B.LINES):z.isLineLoop?Gt.setMode(B.LINE_LOOP):Gt.setMode(B.LINE_STRIP)}else z.isPoints?Gt.setMode(B.POINTS):z.isSprite&&Gt.setMode(B.TRIANGLES);if(z.isBatchedMesh)Gt.renderMultiDraw(z._multiDrawStarts,z._multiDrawCounts,z._multiDrawCount);else if(z.isInstancedMesh)Gt.renderInstances(Zt,an,z.count);else if(V.isInstancedBufferGeometry){const ut=V._maxInstanceCount!==void 0?V._maxInstanceCount:1/0,Mr=Math.min(V.instanceCount,ut);Gt.renderInstances(Zt,an,Mr)}else Gt.render(Zt,an)};function de(A,O,V){A.transparent===!0&&A.side===bi&&A.forceSinglePass===!1?(A.side=Bn,A.needsUpdate=!0,nr(A,O,V),A.side=Ji,A.needsUpdate=!0,nr(A,O,V),A.side=bi):nr(A,O,V)}this.compile=function(A,O,V=null){V===null&&(V=A),f=Oe.get(V),f.init(),M.push(f),V.traverseVisible(function(z){z.isLight&&z.layers.test(O.layers)&&(f.pushLight(z),z.castShadow&&f.pushShadow(z))}),A!==V&&A.traverseVisible(function(z){z.isLight&&z.layers.test(O.layers)&&(f.pushLight(z),z.castShadow&&f.pushShadow(z))}),f.setupLights(v._useLegacyLights);const W=new Set;return A.traverse(function(z){const Me=z.material;if(Me)if(Array.isArray(Me))for(let Ne=0;Ne<Me.length;Ne++){const ke=Me[Ne];de(ke,V,z),W.add(ke)}else de(Me,V,z),W.add(Me)}),M.pop(),f=null,W},this.compileAsync=function(A,O,V=null){const W=this.compile(A,O,V);return new Promise(z=>{function Me(){if(W.forEach(function(Ne){Ze.get(Ne).currentProgram.isReady()&&W.delete(Ne)}),W.size===0){z(A);return}setTimeout(Me,10)}Ie.get("KHR_parallel_shader_compile")!==null?Me():setTimeout(Me,10)})};let De=null;function yt(A){De&&De(A)}function wt(){Wt.stop()}function lt(){Wt.start()}const Wt=new vd;Wt.setAnimationLoop(yt),typeof self<"u"&&Wt.setContext(self),this.setAnimationLoop=function(A){De=A,Pe.setAnimationLoop(A),A===null?Wt.stop():Wt.start()},Pe.addEventListener("sessionstart",wt),Pe.addEventListener("sessionend",lt),this.render=function(A,O){if(O!==void 0&&O.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(T===!0)return;A.matrixWorldAutoUpdate===!0&&A.updateMatrixWorld(),O.parent===null&&O.matrixWorldAutoUpdate===!0&&O.updateMatrixWorld(),Pe.enabled===!0&&Pe.isPresenting===!0&&(Pe.cameraAutoUpdate===!0&&Pe.updateCamera(O),O=Pe.getCamera()),A.isScene===!0&&A.onBeforeRender(v,A,O,S),f=Oe.get(A,M.length),f.init(),M.push(f),Ve.multiplyMatrices(O.projectionMatrix,O.matrixWorldInverse),He.setFromProjectionMatrix(Ve),se=this.localClippingEnabled,X=ue.init(this.clippingPlanes,se),_=et.get(A,p.length),_.init(),p.push(_),In(A,O,0,v.sortObjects),_.finish(),v.sortObjects===!0&&_.sort($,Y),this.info.render.frame++,X===!0&&ue.beginShadows();const V=f.state.shadowsArray;if(fe.render(V,A,O),X===!0&&ue.endShadows(),this.info.autoReset===!0&&this.info.reset(),(Pe.enabled===!1||Pe.isPresenting===!1||Pe.hasDepthSensing()===!1)&&Ke.render(_,A),f.setupLights(v._useLegacyLights),O.isArrayCamera){const W=O.cameras;for(let z=0,Me=W.length;z<Me;z++){const Ne=W[z];Yr(_,A,Ne,Ne.viewport)}}else Yr(_,A,O);S!==null&&(Le.updateMultisampleRenderTarget(S),Le.updateRenderTargetMipmap(S)),A.isScene===!0&&A.onAfterRender(v,A,O),Ee.resetDefaultState(),P=-1,D=null,M.pop(),M.length>0?f=M[M.length-1]:f=null,p.pop(),p.length>0?_=p[p.length-1]:_=null};function In(A,O,V,W){if(A.visible===!1)return;if(A.layers.test(O.layers)){if(A.isGroup)V=A.renderOrder;else if(A.isLOD)A.autoUpdate===!0&&A.update(O);else if(A.isLight)f.pushLight(A),A.castShadow&&f.pushShadow(A);else if(A.isSprite){if(!A.frustumCulled||He.intersectsSprite(A)){W&&Te.setFromMatrixPosition(A.matrixWorld).applyMatrix4(Ve);const Ne=Z.update(A),ke=A.material;ke.visible&&_.push(A,Ne,ke,V,Te.z,null)}}else if((A.isMesh||A.isLine||A.isPoints)&&(!A.frustumCulled||He.intersectsObject(A))){const Ne=Z.update(A),ke=A.material;if(W&&(A.boundingSphere!==void 0?(A.boundingSphere===null&&A.computeBoundingSphere(),Te.copy(A.boundingSphere.center)):(Ne.boundingSphere===null&&Ne.computeBoundingSphere(),Te.copy(Ne.boundingSphere.center)),Te.applyMatrix4(A.matrixWorld).applyMatrix4(Ve)),Array.isArray(ke)){const qe=Ne.groups;for(let ct=0,at=qe.length;ct<at;ct++){const tt=qe[ct],Zt=ke[tt.materialIndex];Zt&&Zt.visible&&_.push(A,Ne,Zt,V,Te.z,tt)}}else ke.visible&&_.push(A,Ne,ke,V,Te.z,null)}}const Me=A.children;for(let Ne=0,ke=Me.length;Ne<ke;Ne++)In(Me[Ne],O,V,W)}function Yr(A,O,V,W){const z=A.opaque,Me=A.transmissive,Ne=A.transparent;f.setupLightsView(V),X===!0&&ue.setGlobalState(v.clippingPlanes,V),Me.length>0&&jr(z,Me,O,V),W&&Ae.viewport(x.copy(W)),z.length>0&&tr(z,O,V),Me.length>0&&tr(Me,O,V),Ne.length>0&&tr(Ne,O,V),Ae.buffers.depth.setTest(!0),Ae.buffers.depth.setMask(!0),Ae.buffers.color.setMask(!0),Ae.setPolygonOffset(!1)}function jr(A,O,V,W){if((V.isScene===!0?V.overrideMaterial:null)!==null)return;const Me=ot.isWebGL2;Se===null&&(Se=new Xr(1,1,{generateMipmaps:!0,type:Ie.has("EXT_color_buffer_half_float")?da:vr,minFilter:Ki,samples:Me?4:0})),v.getDrawingBufferSize(Re),Me?Se.setSize(Re.x,Re.y):Se.setSize(ho(Re.x),ho(Re.y));const Ne=v.getRenderTarget();v.setRenderTarget(Se),v.getClearColor(j),L=v.getClearAlpha(),L<1&&v.setClearColor(16777215,.5),v.clear();const ke=v.toneMapping;v.toneMapping=_r,tr(A,V,W),Le.updateMultisampleRenderTarget(Se),Le.updateRenderTargetMipmap(Se);let qe=!1;for(let ct=0,at=O.length;ct<at;ct++){const tt=O[ct],Zt=tt.object,An=tt.geometry,an=tt.material,si=tt.group;if(an.side===bi&&Zt.layers.test(W.layers)){const Gt=an.side;an.side=Bn,an.needsUpdate=!0,yr(Zt,V,W,An,an,si),an.side=Gt,an.needsUpdate=!0,qe=!0}}qe===!0&&(Le.updateMultisampleRenderTarget(Se),Le.updateRenderTargetMipmap(Se)),v.setRenderTarget(Ne),v.setClearColor(j,L),v.toneMapping=ke}function tr(A,O,V){const W=O.isScene===!0?O.overrideMaterial:null;for(let z=0,Me=A.length;z<Me;z++){const Ne=A[z],ke=Ne.object,qe=Ne.geometry,ct=W===null?Ne.material:W,at=Ne.group;ke.layers.test(V.layers)&&yr(ke,O,V,qe,ct,at)}}function yr(A,O,V,W,z,Me){A.onBeforeRender(v,O,V,W,z,Me),A.modelViewMatrix.multiplyMatrices(V.matrixWorldInverse,A.matrixWorld),A.normalMatrix.getNormalMatrix(A.modelViewMatrix),z.onBeforeRender(v,O,V,W,A,Me),z.transparent===!0&&z.side===bi&&z.forceSinglePass===!1?(z.side=Bn,z.needsUpdate=!0,v.renderBufferDirect(V,O,W,z,A,Me),z.side=Ji,z.needsUpdate=!0,v.renderBufferDirect(V,O,W,z,A,Me),z.side=bi):v.renderBufferDirect(V,O,W,z,A,Me),A.onAfterRender(v,O,V,W,z,Me)}function nr(A,O,V){O.isScene!==!0&&(O=Et);const W=Ze.get(A),z=f.state.lights,Me=f.state.shadowsArray,Ne=z.state.version,ke=ae.getParameters(A,z.state,Me,O,V),qe=ae.getProgramCacheKey(ke);let ct=W.programs;W.environment=A.isMeshStandardMaterial?O.environment:null,W.fog=O.fog,W.envMap=(A.isMeshStandardMaterial?C:bt).get(A.envMap||W.environment),W.envMapRotation=W.environment!==null&&A.envMap===null?O.environmentRotation:A.envMapRotation,ct===void 0&&(A.addEventListener("dispose",G),ct=new Map,W.programs=ct);let at=ct.get(qe);if(at!==void 0){if(W.currentProgram===at&&W.lightsStateVersion===Ne)return ga(A,ke),at}else ke.uniforms=ae.getUniforms(A),A.onBuild(V,ke,v),A.onBeforeCompile(ke,v),at=ae.acquireProgram(ke,qe),ct.set(qe,at),W.uniforms=ke.uniforms;const tt=W.uniforms;return(!A.isShaderMaterial&&!A.isRawShaderMaterial||A.clipping===!0)&&(tt.clippingPlanes=ue.uniform),ga(A,ke),W.needsLights=va(A),W.lightsStateVersion=Ne,W.needsLights&&(tt.ambientLightColor.value=z.state.ambient,tt.lightProbe.value=z.state.probe,tt.directionalLights.value=z.state.directional,tt.directionalLightShadows.value=z.state.directionalShadow,tt.spotLights.value=z.state.spot,tt.spotLightShadows.value=z.state.spotShadow,tt.rectAreaLights.value=z.state.rectArea,tt.ltc_1.value=z.state.rectAreaLTC1,tt.ltc_2.value=z.state.rectAreaLTC2,tt.pointLights.value=z.state.point,tt.pointLightShadows.value=z.state.pointShadow,tt.hemisphereLights.value=z.state.hemi,tt.directionalShadowMap.value=z.state.directionalShadowMap,tt.directionalShadowMatrix.value=z.state.directionalShadowMatrix,tt.spotShadowMap.value=z.state.spotShadowMap,tt.spotLightMatrix.value=z.state.spotLightMatrix,tt.spotLightMap.value=z.state.spotLightMap,tt.pointShadowMap.value=z.state.pointShadowMap,tt.pointShadowMatrix.value=z.state.pointShadowMatrix),W.currentProgram=at,W.uniformsList=null,at}function Vs(A){if(A.uniformsList===null){const O=A.currentProgram.getUniforms();A.uniformsList=io.seqWithValue(O.seq,A.uniforms)}return A.uniformsList}function ga(A,O){const V=Ze.get(A);V.outputColorSpace=O.outputColorSpace,V.batching=O.batching,V.instancing=O.instancing,V.instancingColor=O.instancingColor,V.instancingMorph=O.instancingMorph,V.skinning=O.skinning,V.morphTargets=O.morphTargets,V.morphNormals=O.morphNormals,V.morphColors=O.morphColors,V.morphTargetsCount=O.morphTargetsCount,V.numClippingPlanes=O.numClippingPlanes,V.numIntersection=O.numClipIntersection,V.vertexAlphas=O.vertexAlphas,V.vertexTangents=O.vertexTangents,V.toneMapping=O.toneMapping}function _a(A,O,V,W,z){O.isScene!==!0&&(O=Et),Le.resetTextureUnits();const Me=O.fog,Ne=W.isMeshStandardMaterial?O.environment:null,ke=S===null?v.outputColorSpace:S.isXRRenderTarget===!0?S.texture.colorSpace:Tn,qe=(W.isMeshStandardMaterial?C:bt).get(W.envMap||Ne),ct=W.vertexColors===!0&&!!V.attributes.color&&V.attributes.color.itemSize===4,at=!!V.attributes.tangent&&(!!W.normalMap||W.anisotropy>0),tt=!!V.morphAttributes.position,Zt=!!V.morphAttributes.normal,An=!!V.morphAttributes.color;let an=_r;W.toneMapped&&(S===null||S.isXRRenderTarget===!0)&&(an=v.toneMapping);const si=V.morphAttributes.position||V.morphAttributes.normal||V.morphAttributes.color,Gt=si!==void 0?si.length:0,ut=Ze.get(W),Mr=f.state.lights;if(X===!0&&(se===!0||A!==D)){const wn=A===D&&W.id===P;ue.setState(W,A,wn)}let Ht=!1;W.version===ut.__version?(ut.needsLights&&ut.lightsStateVersion!==Mr.state.version||ut.outputColorSpace!==ke||z.isBatchedMesh&&ut.batching===!1||!z.isBatchedMesh&&ut.batching===!0||z.isInstancedMesh&&ut.instancing===!1||!z.isInstancedMesh&&ut.instancing===!0||z.isSkinnedMesh&&ut.skinning===!1||!z.isSkinnedMesh&&ut.skinning===!0||z.isInstancedMesh&&ut.instancingColor===!0&&z.instanceColor===null||z.isInstancedMesh&&ut.instancingColor===!1&&z.instanceColor!==null||z.isInstancedMesh&&ut.instancingMorph===!0&&z.morphTexture===null||z.isInstancedMesh&&ut.instancingMorph===!1&&z.morphTexture!==null||ut.envMap!==qe||W.fog===!0&&ut.fog!==Me||ut.numClippingPlanes!==void 0&&(ut.numClippingPlanes!==ue.numPlanes||ut.numIntersection!==ue.numIntersection)||ut.vertexAlphas!==ct||ut.vertexTangents!==at||ut.morphTargets!==tt||ut.morphNormals!==Zt||ut.morphColors!==An||ut.toneMapping!==an||ot.isWebGL2===!0&&ut.morphTargetsCount!==Gt)&&(Ht=!0):(Ht=!0,ut.__version=W.version);let Di=ut.currentProgram;Ht===!0&&(Di=nr(W,O,z));let xa=!1,Sr=!1,Er=!1;const cn=Di.getUniforms(),vi=ut.uniforms;if(Ae.useProgram(Di.program)&&(xa=!0,Sr=!0,Er=!0),W.id!==P&&(P=W.id,Sr=!0),xa||D!==A){cn.setValue(B,"projectionMatrix",A.projectionMatrix),cn.setValue(B,"viewMatrix",A.matrixWorldInverse);const wn=cn.map.cameraPosition;wn!==void 0&&wn.setValue(B,Te.setFromMatrixPosition(A.matrixWorld)),ot.logarithmicDepthBuffer&&cn.setValue(B,"logDepthBufFC",2/(Math.log(A.far+1)/Math.LN2)),(W.isMeshPhongMaterial||W.isMeshToonMaterial||W.isMeshLambertMaterial||W.isMeshBasicMaterial||W.isMeshStandardMaterial||W.isShaderMaterial)&&cn.setValue(B,"isOrthographic",A.isOrthographicCamera===!0),D!==A&&(D=A,Sr=!0,Er=!0)}if(z.isSkinnedMesh){cn.setOptional(B,z,"bindMatrix"),cn.setOptional(B,z,"bindMatrixInverse");const wn=z.skeleton;wn&&(ot.floatVertexTextures?(wn.boneTexture===null&&wn.computeBoneTexture(),cn.setValue(B,"boneTexture",wn.boneTexture,Le)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}z.isBatchedMesh&&(cn.setOptional(B,z,"batchingTexture"),cn.setValue(B,"batchingTexture",z._matricesTexture,Le));const Ws=V.morphAttributes;if((Ws.position!==void 0||Ws.normal!==void 0||Ws.color!==void 0&&ot.isWebGL2===!0)&&ce.update(z,V,Di),(Sr||ut.receiveShadow!==z.receiveShadow)&&(ut.receiveShadow=z.receiveShadow,cn.setValue(B,"receiveShadow",z.receiveShadow)),W.isMeshGouraudMaterial&&W.envMap!==null&&(vi.envMap.value=qe,vi.flipEnvMap.value=qe.isCubeTexture&&qe.isRenderTargetTexture===!1?-1:1),Sr&&(cn.setValue(B,"toneMappingExposure",v.toneMappingExposure),ut.needsLights&&xo(vi,Er),Me&&W.fog===!0&&ie.refreshFogUniforms(vi,Me),ie.refreshMaterialUniforms(vi,W,K,k,Se),io.upload(B,Vs(ut),vi,Le)),W.isShaderMaterial&&W.uniformsNeedUpdate===!0&&(io.upload(B,Vs(ut),vi,Le),W.uniformsNeedUpdate=!1),W.isSpriteMaterial&&cn.setValue(B,"center",z.center),cn.setValue(B,"modelViewMatrix",z.modelViewMatrix),cn.setValue(B,"normalMatrix",z.normalMatrix),cn.setValue(B,"modelMatrix",z.matrixWorld),W.isShaderMaterial||W.isRawShaderMaterial){const wn=W.uniformsGroups;for(let Kr=0,ya=wn.length;Kr<ya;Kr++)if(ot.isWebGL2){const Ma=wn[Kr];we.update(Ma,Di),we.bind(Ma,Di)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return Di}function xo(A,O){A.ambientLightColor.needsUpdate=O,A.lightProbe.needsUpdate=O,A.directionalLights.needsUpdate=O,A.directionalLightShadows.needsUpdate=O,A.pointLights.needsUpdate=O,A.pointLightShadows.needsUpdate=O,A.spotLights.needsUpdate=O,A.spotLightShadows.needsUpdate=O,A.rectAreaLights.needsUpdate=O,A.hemisphereLights.needsUpdate=O}function va(A){return A.isMeshLambertMaterial||A.isMeshToonMaterial||A.isMeshPhongMaterial||A.isMeshStandardMaterial||A.isShadowMaterial||A.isShaderMaterial&&A.lights===!0}this.getActiveCubeFace=function(){return E},this.getActiveMipmapLevel=function(){return w},this.getRenderTarget=function(){return S},this.setRenderTargetTextures=function(A,O,V){Ze.get(A.texture).__webglTexture=O,Ze.get(A.depthTexture).__webglTexture=V;const W=Ze.get(A);W.__hasExternalTextures=!0,W.__autoAllocateDepthBuffer=V===void 0,W.__autoAllocateDepthBuffer||Ie.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),W.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(A,O){const V=Ze.get(A);V.__webglFramebuffer=O,V.__useDefaultFramebuffer=O===void 0},this.setRenderTarget=function(A,O=0,V=0){S=A,E=O,w=V;let W=!0,z=null,Me=!1,Ne=!1;if(A){const qe=Ze.get(A);qe.__useDefaultFramebuffer!==void 0?(Ae.bindFramebuffer(B.FRAMEBUFFER,null),W=!1):qe.__webglFramebuffer===void 0?Le.setupRenderTarget(A):qe.__hasExternalTextures&&Le.rebindTextures(A,Ze.get(A.texture).__webglTexture,Ze.get(A.depthTexture).__webglTexture);const ct=A.texture;(ct.isData3DTexture||ct.isDataArrayTexture||ct.isCompressedArrayTexture)&&(Ne=!0);const at=Ze.get(A).__webglFramebuffer;A.isWebGLCubeRenderTarget?(Array.isArray(at[O])?z=at[O][V]:z=at[O],Me=!0):ot.isWebGL2&&A.samples>0&&Le.useMultisampledRTT(A)===!1?z=Ze.get(A).__webglMultisampledFramebuffer:Array.isArray(at)?z=at[V]:z=at,x.copy(A.viewport),b.copy(A.scissor),U=A.scissorTest}else x.copy(re).multiplyScalar(K).floor(),b.copy(le).multiplyScalar(K).floor(),U=ve;if(Ae.bindFramebuffer(B.FRAMEBUFFER,z)&&ot.drawBuffers&&W&&Ae.drawBuffers(A,z),Ae.viewport(x),Ae.scissor(b),Ae.setScissorTest(U),Me){const qe=Ze.get(A.texture);B.framebufferTexture2D(B.FRAMEBUFFER,B.COLOR_ATTACHMENT0,B.TEXTURE_CUBE_MAP_POSITIVE_X+O,qe.__webglTexture,V)}else if(Ne){const qe=Ze.get(A.texture),ct=O||0;B.framebufferTextureLayer(B.FRAMEBUFFER,B.COLOR_ATTACHMENT0,qe.__webglTexture,V||0,ct)}P=-1},this.readRenderTargetPixels=function(A,O,V,W,z,Me,Ne){if(!(A&&A.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let ke=Ze.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&Ne!==void 0&&(ke=ke[Ne]),ke){Ae.bindFramebuffer(B.FRAMEBUFFER,ke);try{const qe=A.texture,ct=qe.format,at=qe.type;if(ct!==ri&&Ce.convert(ct)!==B.getParameter(B.IMPLEMENTATION_COLOR_READ_FORMAT)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const tt=at===da&&(Ie.has("EXT_color_buffer_half_float")||ot.isWebGL2&&Ie.has("EXT_color_buffer_float"));if(at!==vr&&Ce.convert(at)!==B.getParameter(B.IMPLEMENTATION_COLOR_READ_TYPE)&&!(at===pi&&(ot.isWebGL2||Ie.has("OES_texture_float")||Ie.has("WEBGL_color_buffer_float")))&&!tt){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}O>=0&&O<=A.width-W&&V>=0&&V<=A.height-z&&B.readPixels(O,V,W,z,Ce.convert(ct),Ce.convert(at),Me)}finally{const qe=S!==null?Ze.get(S).__webglFramebuffer:null;Ae.bindFramebuffer(B.FRAMEBUFFER,qe)}}},this.copyFramebufferToTexture=function(A,O,V=0){const W=Math.pow(2,-V),z=Math.floor(O.image.width*W),Me=Math.floor(O.image.height*W);Le.setTexture2D(O,0),B.copyTexSubImage2D(B.TEXTURE_2D,V,0,0,A.x,A.y,z,Me),Ae.unbindTexture()},this.copyTextureToTexture=function(A,O,V,W=0){const z=O.image.width,Me=O.image.height,Ne=Ce.convert(V.format),ke=Ce.convert(V.type);Le.setTexture2D(V,0),B.pixelStorei(B.UNPACK_FLIP_Y_WEBGL,V.flipY),B.pixelStorei(B.UNPACK_PREMULTIPLY_ALPHA_WEBGL,V.premultiplyAlpha),B.pixelStorei(B.UNPACK_ALIGNMENT,V.unpackAlignment),O.isDataTexture?B.texSubImage2D(B.TEXTURE_2D,W,A.x,A.y,z,Me,Ne,ke,O.image.data):O.isCompressedTexture?B.compressedTexSubImage2D(B.TEXTURE_2D,W,A.x,A.y,O.mipmaps[0].width,O.mipmaps[0].height,Ne,O.mipmaps[0].data):B.texSubImage2D(B.TEXTURE_2D,W,A.x,A.y,Ne,ke,O.image),W===0&&V.generateMipmaps&&B.generateMipmap(B.TEXTURE_2D),Ae.unbindTexture()},this.copyTextureToTexture3D=function(A,O,V,W,z=0){if(v.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}const Me=Math.round(A.max.x-A.min.x),Ne=Math.round(A.max.y-A.min.y),ke=A.max.z-A.min.z+1,qe=Ce.convert(W.format),ct=Ce.convert(W.type);let at;if(W.isData3DTexture)Le.setTexture3D(W,0),at=B.TEXTURE_3D;else if(W.isDataArrayTexture||W.isCompressedArrayTexture)Le.setTexture2DArray(W,0),at=B.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}B.pixelStorei(B.UNPACK_FLIP_Y_WEBGL,W.flipY),B.pixelStorei(B.UNPACK_PREMULTIPLY_ALPHA_WEBGL,W.premultiplyAlpha),B.pixelStorei(B.UNPACK_ALIGNMENT,W.unpackAlignment);const tt=B.getParameter(B.UNPACK_ROW_LENGTH),Zt=B.getParameter(B.UNPACK_IMAGE_HEIGHT),An=B.getParameter(B.UNPACK_SKIP_PIXELS),an=B.getParameter(B.UNPACK_SKIP_ROWS),si=B.getParameter(B.UNPACK_SKIP_IMAGES),Gt=V.isCompressedTexture?V.mipmaps[z]:V.image;B.pixelStorei(B.UNPACK_ROW_LENGTH,Gt.width),B.pixelStorei(B.UNPACK_IMAGE_HEIGHT,Gt.height),B.pixelStorei(B.UNPACK_SKIP_PIXELS,A.min.x),B.pixelStorei(B.UNPACK_SKIP_ROWS,A.min.y),B.pixelStorei(B.UNPACK_SKIP_IMAGES,A.min.z),V.isDataTexture||V.isData3DTexture?B.texSubImage3D(at,z,O.x,O.y,O.z,Me,Ne,ke,qe,ct,Gt.data):W.isCompressedArrayTexture?B.compressedTexSubImage3D(at,z,O.x,O.y,O.z,Me,Ne,ke,qe,Gt.data):B.texSubImage3D(at,z,O.x,O.y,O.z,Me,Ne,ke,qe,ct,Gt),B.pixelStorei(B.UNPACK_ROW_LENGTH,tt),B.pixelStorei(B.UNPACK_IMAGE_HEIGHT,Zt),B.pixelStorei(B.UNPACK_SKIP_PIXELS,An),B.pixelStorei(B.UNPACK_SKIP_ROWS,an),B.pixelStorei(B.UNPACK_SKIP_IMAGES,si),z===0&&W.generateMipmaps&&B.generateMipmap(at),Ae.unbindTexture()},this.initTexture=function(A){A.isCubeTexture?Le.setTextureCube(A,0):A.isData3DTexture?Le.setTexture3D(A,0):A.isDataArrayTexture||A.isCompressedArrayTexture?Le.setTexture2DArray(A,0):Le.setTexture2D(A,0),Ae.unbindTexture()},this.resetState=function(){E=0,w=0,S=null,Ae.reset(),Ee.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return $i}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=e===Jl?"display-p3":"srgb",t.unpackColorSpace=Pt.workingColorSpace===po?"display-p3":"srgb"}get useLegacyLights(){return console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights}set useLegacyLights(e){console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights=e}}class px extends zl{}px.prototype.isWebGL1Renderer=!0;class pl extends tn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Ri,this.environmentRotation=new Ri,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),t.object.environmentRotation=this.environmentRotation.toArray(),t}}class mx{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=Fl,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.version=0,this.uuid=_i()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return ld("THREE.InterleavedBuffer: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let i=0,s=this.stride;i<s;i++)this.array[e+i]=t.array[n+i];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=_i()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(t,this.stride);return n.setUsage(this.usage),n}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=_i()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const Nn=new I;class rc{constructor(e,t,n,i=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=n,this.normalized=i}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)Nn.fromBufferAttribute(this,t),Nn.applyMatrix4(e),this.setXYZ(t,Nn.x,Nn.y,Nn.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Nn.fromBufferAttribute(this,t),Nn.applyNormalMatrix(e),this.setXYZ(t,Nn.x,Nn.y,Nn.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Nn.fromBufferAttribute(this,t),Nn.transformDirection(e),this.setXYZ(t,Nn.x,Nn.y,Nn.z);return this}getComponent(e,t){let n=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(n=mi(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=Dt(n,this.array)),this.data.array[e*this.data.stride+this.offset+t]=n,this}setX(e,t){return this.normalized&&(t=Dt(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=Dt(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=Dt(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=Dt(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=mi(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=mi(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=mi(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=mi(t,this.array)),t}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=Dt(t,this.array),n=Dt(n,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,i){return e=e*this.data.stride+this.offset,this.normalized&&(t=Dt(t,this.array),n=Dt(n,this.array),i=Dt(i,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=i,this}setXYZW(e,t,n,i,s){return e=e*this.data.stride+this.offset,this.normalized&&(t=Dt(t,this.array),n=Dt(n,this.array),i=Dt(i,this.array),s=Dt(s,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=i,this.data.array[e+3]=s,this}clone(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const i=n*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)t.push(this.data.array[i+s])}return new dn(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new rc(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const i=n*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)t.push(this.data.array[i+s])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}const dh=new I,fh=new Vt,ph=new Vt,gx=new I,mh=new Xe,Ka=new I,ml=new Li,gh=new Xe,gl=new mo;class _x extends en{constructor(e,t){super(e,t),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode=jc,this.bindMatrix=new Xe,this.bindMatrixInverse=new Xe,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){const e=this.geometry;this.boundingBox===null&&(this.boundingBox=new Ci),this.boundingBox.makeEmpty();const t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,Ka),this.boundingBox.expandByPoint(Ka)}computeBoundingSphere(){const e=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new Li),this.boundingSphere.makeEmpty();const t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,Ka),this.boundingSphere.expandByPoint(Ka)}copy(e,t){return super.copy(e,t),this.bindMode=e.bindMode,this.bindMatrix.copy(e.bindMatrix),this.bindMatrixInverse.copy(e.bindMatrixInverse),this.skeleton=e.skeleton,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}raycast(e,t){const n=this.material,i=this.matrixWorld;n!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),ml.copy(this.boundingSphere),ml.applyMatrix4(i),e.ray.intersectsSphere(ml)!==!1&&(gh.copy(i).invert(),gl.copy(e.ray).applyMatrix4(gh),!(this.boundingBox!==null&&gl.intersectsBox(this.boundingBox)===!1)&&this._computeIntersections(e,t,gl)))}getVertexPosition(e,t){return super.getVertexPosition(e,t),this.applyBoneTransform(e,t),t}bind(e,t){this.skeleton=e,t===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),t=this.matrixWorld),this.bindMatrix.copy(t),this.bindMatrixInverse.copy(t).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){const e=new Vt,t=this.geometry.attributes.skinWeight;for(let n=0,i=t.count;n<i;n++){e.fromBufferAttribute(t,n);const s=1/e.manhattanLength();s!==1/0?e.multiplyScalar(s):e.set(1,0,0,0),t.setXYZW(n,e.x,e.y,e.z,e.w)}}updateMatrixWorld(e){super.updateMatrixWorld(e),this.bindMode===jc?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode===Ep?this.bindMatrixInverse.copy(this.bindMatrix).invert():console.warn("THREE.SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(e,t){const n=this.skeleton,i=this.geometry;fh.fromBufferAttribute(i.attributes.skinIndex,e),ph.fromBufferAttribute(i.attributes.skinWeight,e),dh.copy(t).applyMatrix4(this.bindMatrix),t.set(0,0,0);for(let s=0;s<4;s++){const a=ph.getComponent(s);if(a!==0){const o=fh.getComponent(s);mh.multiplyMatrices(n.bones[o].matrixWorld,n.boneInverses[o]),t.addScaledVector(gx.copy(dh).applyMatrix4(mh),a)}}return t.applyMatrix4(this.bindMatrixInverse)}}class Td extends tn{constructor(){super(),this.isBone=!0,this.type="Bone"}}class Ad extends yn{constructor(e=null,t=1,n=1,i,s,a,o,l,c=xn,u=xn,h,d){super(null,a,o,l,c,u,i,s,h,d),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const _h=new Xe,vx=new Xe;class sc{constructor(e=[],t=[]){this.uuid=_i(),this.bones=e.slice(0),this.boneInverses=t,this.boneMatrices=null,this.boneTexture=null,this.init()}init(){const e=this.bones,t=this.boneInverses;if(this.boneMatrices=new Float32Array(e.length*16),t.length===0)this.calculateInverses();else if(e.length!==t.length){console.warn("THREE.Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let n=0,i=this.bones.length;n<i;n++)this.boneInverses.push(new Xe)}}calculateInverses(){this.boneInverses.length=0;for(let e=0,t=this.bones.length;e<t;e++){const n=new Xe;this.bones[e]&&n.copy(this.bones[e].matrixWorld).invert(),this.boneInverses.push(n)}}pose(){for(let e=0,t=this.bones.length;e<t;e++){const n=this.bones[e];n&&n.matrixWorld.copy(this.boneInverses[e]).invert()}for(let e=0,t=this.bones.length;e<t;e++){const n=this.bones[e];n&&(n.parent&&n.parent.isBone?(n.matrix.copy(n.parent.matrixWorld).invert(),n.matrix.multiply(n.matrixWorld)):n.matrix.copy(n.matrixWorld),n.matrix.decompose(n.position,n.quaternion,n.scale))}}update(){const e=this.bones,t=this.boneInverses,n=this.boneMatrices,i=this.boneTexture;for(let s=0,a=e.length;s<a;s++){const o=e[s]?e[s].matrixWorld:vx;_h.multiplyMatrices(o,t[s]),_h.toArray(n,s*16)}i!==null&&(i.needsUpdate=!0)}clone(){return new sc(this.bones,this.boneInverses)}computeBoneTexture(){let e=Math.sqrt(this.bones.length*4);e=Math.ceil(e/4)*4,e=Math.max(e,4);const t=new Float32Array(e*e*4);t.set(this.boneMatrices);const n=new Ad(t,e,e,ri,pi);return n.needsUpdate=!0,this.boneMatrices=t,this.boneTexture=n,this}getBoneByName(e){for(let t=0,n=this.bones.length;t<n;t++){const i=this.bones[t];if(i.name===e)return i}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(e,t){this.uuid=e.uuid;for(let n=0,i=e.bones.length;n<i;n++){const s=e.bones[n];let a=t[s];a===void 0&&(console.warn("THREE.Skeleton: No bone found with UUID:",s),a=new Td),this.bones.push(a),this.boneInverses.push(new Xe().fromArray(e.boneInverses[n]))}return this.init(),this}toJSON(){const e={metadata:{version:4.6,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};e.uuid=this.uuid;const t=this.bones,n=this.boneInverses;for(let i=0,s=t.length;i<s;i++){const a=t[i];e.bones.push(a.uuid);const o=n[i];e.boneInverses.push(o.toArray())}return e}}class Gl extends dn{constructor(e,t,n,i=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=i}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){const e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}}const gs=new Xe,vh=new Xe,$a=[],xh=new Ci,xx=new Xe,Qs=new en,ea=new Li;class wd extends en{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new Gl(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let i=0;i<n;i++)this.setMatrixAt(i,xx)}computeBoundingBox(){const e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new Ci),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,gs),xh.copy(e.boundingBox).applyMatrix4(gs),this.boundingBox.union(xh)}computeBoundingSphere(){const e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new Li),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,gs),ea.copy(e.boundingSphere).applyMatrix4(gs),this.boundingSphere.union(ea)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){const n=t.morphTargetInfluences,i=this.morphTexture.source.data.data,s=n.length+1,a=e*s+1;for(let o=0;o<n.length;o++)n[o]=i[a+o]}raycast(e,t){const n=this.matrixWorld,i=this.count;if(Qs.geometry=this.geometry,Qs.material=this.material,Qs.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),ea.copy(this.boundingSphere),ea.applyMatrix4(n),e.ray.intersectsSphere(ea)!==!1))for(let s=0;s<i;s++){this.getMatrixAt(s,gs),vh.multiplyMatrices(n,gs),Qs.matrixWorld=vh,Qs.raycast(e,$a);for(let a=0,o=$a.length;a<o;a++){const l=$a[a];l.instanceId=s,l.object=this,t.push(l)}$a.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new Gl(new Float32Array(this.instanceMatrix.count*3),3)),t.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,e*16)}setMorphAt(e,t){const n=t.morphTargetInfluences,i=n.length+1;this.morphTexture===null&&(this.morphTexture=new Ad(new Float32Array(i*this.count),i,this.count,Jh,pi));const s=this.morphTexture.source.data.data;let a=0;for(let c=0;c<n.length;c++)a+=n[c];const o=this.geometry.morphTargetsRelative?1:1-a,l=i*e;s[l]=o,s.set(n,l+1)}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"})}}class Rd extends wi{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new $e(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const yh=new I,Mh=new I,Sh=new Xe,_l=new mo,Za=new Li;class ac extends tn{constructor(e=new kn,t=new Rd){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[0];for(let i=1,s=t.count;i<s;i++)yh.fromBufferAttribute(t,i-1),Mh.fromBufferAttribute(t,i),n[i]=n[i-1],n[i]+=yh.distanceTo(Mh);e.setAttribute("lineDistance",new Mn(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const n=this.geometry,i=this.matrixWorld,s=e.params.Line.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Za.copy(n.boundingSphere),Za.applyMatrix4(i),Za.radius+=s,e.ray.intersectsSphere(Za)===!1)return;Sh.copy(i).invert(),_l.copy(e.ray).applyMatrix4(Sh);const o=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=new I,u=new I,h=new I,d=new I,m=this.isLineSegments?2:1,g=n.index,f=n.attributes.position;if(g!==null){const p=Math.max(0,a.start),M=Math.min(g.count,a.start+a.count);for(let v=p,T=M-1;v<T;v+=m){const E=g.getX(v),w=g.getX(v+1);if(c.fromBufferAttribute(f,E),u.fromBufferAttribute(f,w),_l.distanceSqToSegment(c,u,d,h)>l)continue;d.applyMatrix4(this.matrixWorld);const P=e.ray.origin.distanceTo(d);P<e.near||P>e.far||t.push({distance:P,point:h.clone().applyMatrix4(this.matrixWorld),index:v,face:null,faceIndex:null,object:this})}}else{const p=Math.max(0,a.start),M=Math.min(f.count,a.start+a.count);for(let v=p,T=M-1;v<T;v+=m){if(c.fromBufferAttribute(f,v),u.fromBufferAttribute(f,v+1),_l.distanceSqToSegment(c,u,d,h)>l)continue;d.applyMatrix4(this.matrixWorld);const w=e.ray.origin.distanceTo(d);w<e.near||w>e.far||t.push({distance:w,point:h.clone().applyMatrix4(this.matrixWorld),index:v,face:null,faceIndex:null,object:this})}}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=i.length;s<a;s++){const o=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}}const Eh=new I,bh=new I;class yx extends ac{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[];for(let i=0,s=t.count;i<s;i+=2)Eh.fromBufferAttribute(t,i),bh.fromBufferAttribute(t,i+1),n[i]=i===0?0:n[i-1],n[i+1]=n[i]+Eh.distanceTo(bh);e.setAttribute("lineDistance",new Mn(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class Mx extends ac{constructor(e,t){super(e,t),this.isLineLoop=!0,this.type="LineLoop"}}class oc extends wi{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new $e(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const Th=new Xe,Hl=new mo,Ja=new Li,Qa=new I;class Cd extends tn{constructor(e=new kn,t=new oc){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){const n=this.geometry,i=this.matrixWorld,s=e.params.Points.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Ja.copy(n.boundingSphere),Ja.applyMatrix4(i),Ja.radius+=s,e.ray.intersectsSphere(Ja)===!1)return;Th.copy(i).invert(),Hl.copy(e.ray).applyMatrix4(Th);const o=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=n.index,h=n.attributes.position;if(c!==null){const d=Math.max(0,a.start),m=Math.min(c.count,a.start+a.count);for(let g=d,_=m;g<_;g++){const f=c.getX(g);Qa.fromBufferAttribute(h,f),Ah(Qa,f,l,i,e,t,this)}}else{const d=Math.max(0,a.start),m=Math.min(h.count,a.start+a.count);for(let g=d,_=m;g<_;g++)Qa.fromBufferAttribute(h,g),Ah(Qa,g,l,i,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=i.length;s<a;s++){const o=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}}function Ah(r,e,t,n,i,s,a){const o=Hl.distanceSqToPoint(r);if(o<t){const l=new I;Hl.closestPointToPoint(r,l),l.applyMatrix4(n);const c=i.ray.origin.distanceTo(l);if(c<i.near||c>i.far)return;s.push({distance:c,distanceToRay:Math.sqrt(o),point:l,index:e,face:null,object:a})}}class Pi{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(e,t){const n=this.getUtoTmapping(e);return this.getPoint(n,t)}getPoints(e=5){const t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return t}getSpacedPoints(e=5){const t=[];for(let n=0;n<=e;n++)t.push(this.getPointAt(n/e));return t}getLength(){const e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const t=[];let n,i=this.getPoint(0),s=0;t.push(0);for(let a=1;a<=e;a++)n=this.getPoint(a/e),s+=n.distanceTo(i),t.push(s),i=n;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t){const n=this.getLengths();let i=0;const s=n.length;let a;t?a=t:a=e*n[s-1];let o=0,l=s-1,c;for(;o<=l;)if(i=Math.floor(o+(l-o)/2),c=n[i]-a,c<0)o=i+1;else if(c>0)l=i-1;else{l=i;break}if(i=l,n[i]===a)return i/(s-1);const u=n[i],d=n[i+1]-u,m=(a-u)/d;return(i+m)/(s-1)}getTangent(e,t){let i=e-1e-4,s=e+1e-4;i<0&&(i=0),s>1&&(s=1);const a=this.getPoint(i),o=this.getPoint(s),l=t||(a.isVector2?new be:new I);return l.copy(o).sub(a).normalize(),l}getTangentAt(e,t){const n=this.getUtoTmapping(e);return this.getTangent(n,t)}computeFrenetFrames(e,t){const n=new I,i=[],s=[],a=[],o=new I,l=new Xe;for(let m=0;m<=e;m++){const g=m/e;i[m]=this.getTangentAt(g,new I)}s[0]=new I,a[0]=new I;let c=Number.MAX_VALUE;const u=Math.abs(i[0].x),h=Math.abs(i[0].y),d=Math.abs(i[0].z);u<=c&&(c=u,n.set(1,0,0)),h<=c&&(c=h,n.set(0,1,0)),d<=c&&n.set(0,0,1),o.crossVectors(i[0],n).normalize(),s[0].crossVectors(i[0],o),a[0].crossVectors(i[0],s[0]);for(let m=1;m<=e;m++){if(s[m]=s[m-1].clone(),a[m]=a[m-1].clone(),o.crossVectors(i[m-1],i[m]),o.length()>Number.EPSILON){o.normalize();const g=Math.acos(hn(i[m-1].dot(i[m]),-1,1));s[m].applyMatrix4(l.makeRotationAxis(o,g))}a[m].crossVectors(i[m],s[m])}if(t===!0){let m=Math.acos(hn(s[0].dot(s[e]),-1,1));m/=e,i[0].dot(o.crossVectors(s[0],s[e]))>0&&(m=-m);for(let g=1;g<=e;g++)s[g].applyMatrix4(l.makeRotationAxis(i[g],m*g)),a[g].crossVectors(i[g],s[g])}return{tangents:i,normals:s,binormals:a}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){const e={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}}class lc extends Pi{constructor(e=0,t=0,n=1,i=1,s=0,a=Math.PI*2,o=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=n,this.yRadius=i,this.aStartAngle=s,this.aEndAngle=a,this.aClockwise=o,this.aRotation=l}getPoint(e,t=new be){const n=t,i=Math.PI*2;let s=this.aEndAngle-this.aStartAngle;const a=Math.abs(s)<Number.EPSILON;for(;s<0;)s+=i;for(;s>i;)s-=i;s<Number.EPSILON&&(a?s=0:s=i),this.aClockwise===!0&&!a&&(s===i?s=-i:s=s-i);const o=this.aStartAngle+e*s;let l=this.aX+this.xRadius*Math.cos(o),c=this.aY+this.yRadius*Math.sin(o);if(this.aRotation!==0){const u=Math.cos(this.aRotation),h=Math.sin(this.aRotation),d=l-this.aX,m=c-this.aY;l=d*u-m*h+this.aX,c=d*h+m*u+this.aY}return n.set(l,c)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){const e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}}class Sx extends lc{constructor(e,t,n,i,s,a){super(e,t,n,n,i,s,a),this.isArcCurve=!0,this.type="ArcCurve"}}function cc(){let r=0,e=0,t=0,n=0;function i(s,a,o,l){r=s,e=o,t=-3*s+3*a-2*o-l,n=2*s-2*a+o+l}return{initCatmullRom:function(s,a,o,l,c){i(a,o,c*(o-s),c*(l-a))},initNonuniformCatmullRom:function(s,a,o,l,c,u,h){let d=(a-s)/c-(o-s)/(c+u)+(o-a)/u,m=(o-a)/u-(l-a)/(u+h)+(l-o)/h;d*=u,m*=u,i(a,o,d,m)},calc:function(s){const a=s*s,o=a*s;return r+e*s+t*a+n*o}}}const eo=new I,vl=new cc,xl=new cc,yl=new cc;class Ex extends Pi{constructor(e=[],t=!1,n="centripetal",i=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=n,this.tension=i}getPoint(e,t=new I){const n=t,i=this.points,s=i.length,a=(s-(this.closed?0:1))*e;let o=Math.floor(a),l=a-o;this.closed?o+=o>0?0:(Math.floor(Math.abs(o)/s)+1)*s:l===0&&o===s-1&&(o=s-2,l=1);let c,u;this.closed||o>0?c=i[(o-1)%s]:(eo.subVectors(i[0],i[1]).add(i[0]),c=eo);const h=i[o%s],d=i[(o+1)%s];if(this.closed||o+2<s?u=i[(o+2)%s]:(eo.subVectors(i[s-1],i[s-2]).add(i[s-1]),u=eo),this.curveType==="centripetal"||this.curveType==="chordal"){const m=this.curveType==="chordal"?.5:.25;let g=Math.pow(c.distanceToSquared(h),m),_=Math.pow(h.distanceToSquared(d),m),f=Math.pow(d.distanceToSquared(u),m);_<1e-4&&(_=1),g<1e-4&&(g=_),f<1e-4&&(f=_),vl.initNonuniformCatmullRom(c.x,h.x,d.x,u.x,g,_,f),xl.initNonuniformCatmullRom(c.y,h.y,d.y,u.y,g,_,f),yl.initNonuniformCatmullRom(c.z,h.z,d.z,u.z,g,_,f)}else this.curveType==="catmullrom"&&(vl.initCatmullRom(c.x,h.x,d.x,u.x,this.tension),xl.initCatmullRom(c.y,h.y,d.y,u.y,this.tension),yl.initCatmullRom(c.z,h.z,d.z,u.z,this.tension));return n.set(vl.calc(l),xl.calc(l),yl.calc(l)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const i=e.points[t];this.points.push(i.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){const i=this.points[t];e.points.push(i.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const i=e.points[t];this.points.push(new I().fromArray(i))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}}function wh(r,e,t,n,i){const s=(n-e)*.5,a=(i-t)*.5,o=r*r,l=r*o;return(2*t-2*n+s+a)*l+(-3*t+3*n-2*s-a)*o+s*r+t}function bx(r,e){const t=1-r;return t*t*e}function Tx(r,e){return 2*(1-r)*r*e}function Ax(r,e){return r*r*e}function ca(r,e,t,n){return bx(r,e)+Tx(r,t)+Ax(r,n)}function wx(r,e){const t=1-r;return t*t*t*e}function Rx(r,e){const t=1-r;return 3*t*t*r*e}function Cx(r,e){return 3*(1-r)*r*r*e}function Lx(r,e){return r*r*r*e}function ua(r,e,t,n,i){return wx(r,e)+Rx(r,t)+Cx(r,n)+Lx(r,i)}class Ld extends Pi{constructor(e=new be,t=new be,n=new be,i=new be){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=n,this.v3=i}getPoint(e,t=new be){const n=t,i=this.v0,s=this.v1,a=this.v2,o=this.v3;return n.set(ua(e,i.x,s.x,a.x,o.x),ua(e,i.y,s.y,a.y,o.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class Px extends Pi{constructor(e=new I,t=new I,n=new I,i=new I){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=n,this.v3=i}getPoint(e,t=new I){const n=t,i=this.v0,s=this.v1,a=this.v2,o=this.v3;return n.set(ua(e,i.x,s.x,a.x,o.x),ua(e,i.y,s.y,a.y,o.y),ua(e,i.z,s.z,a.z,o.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class Pd extends Pi{constructor(e=new be,t=new be){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new be){const n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new be){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class Ix extends Pi{constructor(e=new I,t=new I){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new I){const n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new I){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class Id extends Pi{constructor(e=new be,t=new be,n=new be){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new be){const n=t,i=this.v0,s=this.v1,a=this.v2;return n.set(ca(e,i.x,s.x,a.x),ca(e,i.y,s.y,a.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class Dx extends Pi{constructor(e=new I,t=new I,n=new I){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new I){const n=t,i=this.v0,s=this.v1,a=this.v2;return n.set(ca(e,i.x,s.x,a.x),ca(e,i.y,s.y,a.y),ca(e,i.z,s.z,a.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class Dd extends Pi{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new be){const n=t,i=this.points,s=(i.length-1)*e,a=Math.floor(s),o=s-a,l=i[a===0?a:a-1],c=i[a],u=i[a>i.length-2?i.length-1:a+1],h=i[a>i.length-3?i.length-1:a+2];return n.set(wh(o,l.x,c.x,u.x,h.x),wh(o,l.y,c.y,u.y,h.y)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const i=e.points[t];this.points.push(i.clone())}return this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){const i=this.points[t];e.points.push(i.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const i=e.points[t];this.points.push(new be().fromArray(i))}return this}}var Rh=Object.freeze({__proto__:null,ArcCurve:Sx,CatmullRomCurve3:Ex,CubicBezierCurve:Ld,CubicBezierCurve3:Px,EllipseCurve:lc,LineCurve:Pd,LineCurve3:Ix,QuadraticBezierCurve:Id,QuadraticBezierCurve3:Dx,SplineCurve:Dd});class Nx extends Pi{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(e){this.curves.push(e)}closePath(){const e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(t)){const n=e.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new Rh[n](t,e))}return this}getPoint(e,t){const n=e*this.getLength(),i=this.getCurveLengths();let s=0;for(;s<i.length;){if(i[s]>=n){const a=i[s]-n,o=this.curves[s],l=o.getLength(),c=l===0?0:1-a/l;return o.getPointAt(c,t)}s++}return null}getLength(){const e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const e=[];let t=0;for(let n=0,i=this.curves.length;n<i;n++)t+=this.curves[n].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){const t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){const t=[];let n;for(let i=0,s=this.curves;i<s.length;i++){const a=s[i],o=a.isEllipseCurve?e*2:a.isLineCurve||a.isLineCurve3?1:a.isSplineCurve?e*a.points.length:e,l=a.getPoints(o);for(let c=0;c<l.length;c++){const u=l[c];n&&n.equals(u)||(t.push(u),n=u)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){const i=e.curves[t];this.curves.push(i.clone())}return this.autoClose=e.autoClose,this}toJSON(){const e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,n=this.curves.length;t<n;t++){const i=this.curves[t];e.curves.push(i.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){const i=e.curves[t];this.curves.push(new Rh[i.type]().fromJSON(i))}return this}}class Ux extends Nx{constructor(e){super(),this.type="Path",this.currentPoint=new be,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,n=e.length;t<n;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){const n=new Pd(this.currentPoint.clone(),new be(e,t));return this.curves.push(n),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,n,i){const s=new Id(this.currentPoint.clone(),new be(e,t),new be(n,i));return this.curves.push(s),this.currentPoint.set(n,i),this}bezierCurveTo(e,t,n,i,s,a){const o=new Ld(this.currentPoint.clone(),new be(e,t),new be(n,i),new be(s,a));return this.curves.push(o),this.currentPoint.set(s,a),this}splineThru(e){const t=[this.currentPoint.clone()].concat(e),n=new Dd(t);return this.curves.push(n),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,n,i,s,a){const o=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(e+o,t+l,n,i,s,a),this}absarc(e,t,n,i,s,a){return this.absellipse(e,t,n,n,i,s,a),this}ellipse(e,t,n,i,s,a,o,l){const c=this.currentPoint.x,u=this.currentPoint.y;return this.absellipse(e+c,t+u,n,i,s,a,o,l),this}absellipse(e,t,n,i,s,a,o,l){const c=new lc(e,t,n,i,s,a,o,l);if(this.curves.length>0){const h=c.getPoint(0);h.equals(this.currentPoint)||this.lineTo(h.x,h.y)}this.curves.push(c);const u=c.getPoint(1);return this.currentPoint.copy(u),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){const e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}}class uc extends kn{constructor(e=[new be(0,-.5),new be(.5,0),new be(0,.5)],t=12,n=0,i=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:e,segments:t,phiStart:n,phiLength:i},t=Math.floor(t),i=hn(i,0,Math.PI*2);const s=[],a=[],o=[],l=[],c=[],u=1/t,h=new I,d=new be,m=new I,g=new I,_=new I;let f=0,p=0;for(let M=0;M<=e.length-1;M++)switch(M){case 0:f=e[M+1].x-e[M].x,p=e[M+1].y-e[M].y,m.x=p*1,m.y=-f,m.z=p*0,_.copy(m),m.normalize(),l.push(m.x,m.y,m.z);break;case e.length-1:l.push(_.x,_.y,_.z);break;default:f=e[M+1].x-e[M].x,p=e[M+1].y-e[M].y,m.x=p*1,m.y=-f,m.z=p*0,g.copy(m),m.x+=_.x,m.y+=_.y,m.z+=_.z,m.normalize(),l.push(m.x,m.y,m.z),_.copy(g)}for(let M=0;M<=t;M++){const v=n+M*u*i,T=Math.sin(v),E=Math.cos(v);for(let w=0;w<=e.length-1;w++){h.x=e[w].x*T,h.y=e[w].y,h.z=e[w].x*E,a.push(h.x,h.y,h.z),d.x=M/t,d.y=w/(e.length-1),o.push(d.x,d.y);const S=l[3*w+0]*T,P=l[3*w+1],D=l[3*w+0]*E;c.push(S,P,D)}}for(let M=0;M<t;M++)for(let v=0;v<e.length-1;v++){const T=v+M*e.length,E=T,w=T+e.length,S=T+e.length+1,P=T+1;s.push(E,w,P),s.push(S,P,w)}this.setIndex(s),this.setAttribute("position",new Mn(a,3)),this.setAttribute("uv",new Mn(o,2)),this.setAttribute("normal",new Mn(c,3))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new uc(e.points,e.segments,e.phiStart,e.phiLength)}}class hc extends uc{constructor(e=1,t=1,n=4,i=8){const s=new Ux;s.absarc(0,-t/2,e,Math.PI*1.5,0),s.absarc(0,t/2,e,0,Math.PI*.5),super(s.getPoints(n),i),this.type="CapsuleGeometry",this.parameters={radius:e,length:t,capSegments:n,radialSegments:i}}static fromJSON(e){return new hc(e.radius,e.length,e.capSegments,e.radialSegments)}}class Ts extends kn{constructor(e=1,t=1,n=1,i=32,s=1,a=!1,o=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:i,heightSegments:s,openEnded:a,thetaStart:o,thetaLength:l};const c=this;i=Math.floor(i),s=Math.floor(s);const u=[],h=[],d=[],m=[];let g=0;const _=[],f=n/2;let p=0;M(),a===!1&&(e>0&&v(!0),t>0&&v(!1)),this.setIndex(u),this.setAttribute("position",new Mn(h,3)),this.setAttribute("normal",new Mn(d,3)),this.setAttribute("uv",new Mn(m,2));function M(){const T=new I,E=new I;let w=0;const S=(t-e)/n;for(let P=0;P<=s;P++){const D=[],x=P/s,b=x*(t-e)+e;for(let U=0;U<=i;U++){const j=U/i,L=j*l+o,F=Math.sin(L),k=Math.cos(L);E.x=b*F,E.y=-x*n+f,E.z=b*k,h.push(E.x,E.y,E.z),T.set(F,S,k).normalize(),d.push(T.x,T.y,T.z),m.push(j,1-x),D.push(g++)}_.push(D)}for(let P=0;P<i;P++)for(let D=0;D<s;D++){const x=_[D][P],b=_[D+1][P],U=_[D+1][P+1],j=_[D][P+1];u.push(x,b,j),u.push(b,U,j),w+=6}c.addGroup(p,w,0),p+=w}function v(T){const E=g,w=new be,S=new I;let P=0;const D=T===!0?e:t,x=T===!0?1:-1;for(let U=1;U<=i;U++)h.push(0,f*x,0),d.push(0,x,0),m.push(.5,.5),g++;const b=g;for(let U=0;U<=i;U++){const L=U/i*l+o,F=Math.cos(L),k=Math.sin(L);S.x=D*k,S.y=f*x,S.z=D*F,h.push(S.x,S.y,S.z),d.push(0,x,0),w.x=F*.5+.5,w.y=k*.5*x+.5,m.push(w.x,w.y),g++}for(let U=0;U<i;U++){const j=E+U,L=b+U;T===!0?u.push(L,L+1,j):u.push(L+1,L,j),P+=3}c.addGroup(p,P,T===!0?1:2),p+=P}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ts(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class dc extends Ts{constructor(e=1,t=1,n=32,i=1,s=!1,a=0,o=Math.PI*2){super(0,e,t,n,i,s,a,o),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:n,heightSegments:i,openEnded:s,thetaStart:a,thetaLength:o}}static fromJSON(e){return new dc(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class fc extends kn{constructor(e=1,t=32,n=16,i=0,s=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:i,phiLength:s,thetaStart:a,thetaLength:o},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));const l=Math.min(a+o,Math.PI);let c=0;const u=[],h=new I,d=new I,m=[],g=[],_=[],f=[];for(let p=0;p<=n;p++){const M=[],v=p/n;let T=0;p===0&&a===0?T=.5/t:p===n&&l===Math.PI&&(T=-.5/t);for(let E=0;E<=t;E++){const w=E/t;h.x=-e*Math.cos(i+w*s)*Math.sin(a+v*o),h.y=e*Math.cos(a+v*o),h.z=e*Math.sin(i+w*s)*Math.sin(a+v*o),g.push(h.x,h.y,h.z),d.copy(h).normalize(),_.push(d.x,d.y,d.z),f.push(w+T,1-v),M.push(c++)}u.push(M)}for(let p=0;p<n;p++)for(let M=0;M<t;M++){const v=u[p][M+1],T=u[p][M],E=u[p+1][M],w=u[p+1][M+1];(p!==0||a>0)&&m.push(v,T,w),(p!==n-1||l<Math.PI)&&m.push(T,E,w)}this.setIndex(m),this.setAttribute("position",new Mn(g,3)),this.setAttribute("normal",new Mn(_,3)),this.setAttribute("uv",new Mn(f,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new fc(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class fr extends wi{constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new $e(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new $e(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=rd,this.normalScale=new be(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ri,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class er extends fr{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new be(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return hn(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new $e(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new $e(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new $e(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}}function to(r,e,t){return!r||!t&&r.constructor===e?r:typeof e.BYTES_PER_ELEMENT=="number"?new e(r):Array.prototype.slice.call(r)}function Fx(r){return ArrayBuffer.isView(r)&&!(r instanceof DataView)}function Ox(r){function e(i,s){return r[i]-r[s]}const t=r.length,n=new Array(t);for(let i=0;i!==t;++i)n[i]=i;return n.sort(e),n}function Ch(r,e,t){const n=r.length,i=new r.constructor(n);for(let s=0,a=0;a!==n;++s){const o=t[s]*e;for(let l=0;l!==e;++l)i[a++]=r[o+l]}return i}function Nd(r,e,t,n){let i=1,s=r[0];for(;s!==void 0&&s[n]===void 0;)s=r[i++];if(s===void 0)return;let a=s[n];if(a!==void 0)if(Array.isArray(a))do a=s[n],a!==void 0&&(e.push(s.time),t.push.apply(t,a)),s=r[i++];while(s!==void 0);else if(a.toArray!==void 0)do a=s[n],a!==void 0&&(e.push(s.time),a.toArray(t,t.length)),s=r[i++];while(s!==void 0);else do a=s[n],a!==void 0&&(e.push(s.time),t.push(a)),s=r[i++];while(s!==void 0)}class ma{constructor(e,t,n,i){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=i!==void 0?i:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){const t=this.parameterPositions;let n=this._cachedIndex,i=t[n],s=t[n-1];n:{e:{let a;t:{i:if(!(e<i)){for(let o=n+2;;){if(i===void 0){if(e<s)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===o)break;if(s=i,i=t[++n],e<i)break e}a=t.length;break t}if(!(e>=s)){const o=t[1];e<o&&(n=2,s=o);for(let l=n-2;;){if(s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(i=s,s=t[--n-1],e>=s)break e}a=n,n=0;break t}break n}for(;n<a;){const o=n+a>>>1;e<t[o]?a=o:n=o+1}if(i=t[n],s=t[n-1],s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,s,i)}return this.interpolate_(n,s,e,i)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){const t=this.resultBuffer,n=this.sampleValues,i=this.valueSize,s=e*i;for(let a=0;a!==i;++a)t[a]=n[s+a];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}}class Bx extends ma{constructor(e,t,n,i){super(e,t,n,i),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:yu,endingEnd:yu}}intervalChanged_(e,t,n){const i=this.parameterPositions;let s=e-2,a=e+1,o=i[s],l=i[a];if(o===void 0)switch(this.getSettings_().endingStart){case Mu:s=e,o=2*t-n;break;case Su:s=i.length-2,o=t+i[s]-i[s+1];break;default:s=e,o=n}if(l===void 0)switch(this.getSettings_().endingEnd){case Mu:a=e,l=2*n-t;break;case Su:a=1,l=n+i[1]-i[0];break;default:a=e-1,l=t}const c=(n-t)*.5,u=this.valueSize;this._weightPrev=c/(t-o),this._weightNext=c/(l-n),this._offsetPrev=s*u,this._offsetNext=a*u}interpolate_(e,t,n,i){const s=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=e*o,c=l-o,u=this._offsetPrev,h=this._offsetNext,d=this._weightPrev,m=this._weightNext,g=(n-t)/(i-t),_=g*g,f=_*g,p=-d*f+2*d*_-d*g,M=(1+d)*f+(-1.5-2*d)*_+(-.5+d)*g+1,v=(-1-m)*f+(1.5+m)*_+.5*g,T=m*f-m*_;for(let E=0;E!==o;++E)s[E]=p*a[u+E]+M*a[c+E]+v*a[l+E]+T*a[h+E];return s}}class kx extends ma{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e,t,n,i){const s=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=e*o,c=l-o,u=(n-t)/(i-t),h=1-u;for(let d=0;d!==o;++d)s[d]=a[c+d]*h+a[l+d]*u;return s}}class zx extends ma{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e){return this.copySampleValue_(e-1)}}class Ii{constructor(e,t,n,i){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=to(t,this.TimeBufferType),this.values=to(n,this.ValueBufferType),this.setInterpolation(i||this.DefaultInterpolation)}static toJSON(e){const t=e.constructor;let n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:to(e.times,Array),values:to(e.values,Array)};const i=e.getInterpolation();i!==e.DefaultInterpolation&&(n.interpolation=i)}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new zx(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new kx(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new Bx(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case fa:t=this.InterpolantFactoryMethodDiscrete;break;case Ps:t=this.InterpolantFactoryMethodLinear;break;case Ho:t=this.InterpolantFactoryMethodSmooth;break}if(t===void 0){const n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return fa;case this.InterpolantFactoryMethodLinear:return Ps;case this.InterpolantFactoryMethodSmooth:return Ho}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){const t=this.times;for(let n=0,i=t.length;n!==i;++n)t[n]+=e}return this}scale(e){if(e!==1){const t=this.times;for(let n=0,i=t.length;n!==i;++n)t[n]*=e}return this}trim(e,t){const n=this.times,i=n.length;let s=0,a=i-1;for(;s!==i&&n[s]<e;)++s;for(;a!==-1&&n[a]>t;)--a;if(++a,s!==0||a!==i){s>=a&&(a=Math.max(a,1),s=a-1);const o=this.getValueSize();this.times=n.slice(s,a),this.values=this.values.slice(s*o,a*o)}return this}validate(){let e=!0;const t=this.getValueSize();t-Math.floor(t)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),e=!1);const n=this.times,i=this.values,s=n.length;s===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),e=!1);let a=null;for(let o=0;o!==s;o++){const l=n[o];if(typeof l=="number"&&isNaN(l)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,o,l),e=!1;break}if(a!==null&&a>l){console.error("THREE.KeyframeTrack: Out of order keys.",this,o,l,a),e=!1;break}a=l}if(i!==void 0&&Fx(i))for(let o=0,l=i.length;o!==l;++o){const c=i[o];if(isNaN(c)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,o,c),e=!1;break}}return e}optimize(){const e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),i=this.getInterpolation()===Ho,s=e.length-1;let a=1;for(let o=1;o<s;++o){let l=!1;const c=e[o],u=e[o+1];if(c!==u&&(o!==1||c!==e[0]))if(i)l=!0;else{const h=o*n,d=h-n,m=h+n;for(let g=0;g!==n;++g){const _=t[h+g];if(_!==t[d+g]||_!==t[m+g]){l=!0;break}}}if(l){if(o!==a){e[a]=e[o];const h=o*n,d=a*n;for(let m=0;m!==n;++m)t[d+m]=t[h+m]}++a}}if(s>0){e[a]=e[s];for(let o=s*n,l=a*n,c=0;c!==n;++c)t[l+c]=t[o+c];++a}return a!==e.length?(this.times=e.slice(0,a),this.values=t.slice(0,a*n)):(this.times=e,this.values=t),this}clone(){const e=this.times.slice(),t=this.values.slice(),n=this.constructor,i=new n(this.name,e,t);return i.createInterpolant=this.createInterpolant,i}}Ii.prototype.TimeBufferType=Float32Array;Ii.prototype.ValueBufferType=Float32Array;Ii.prototype.DefaultInterpolation=Ps;class zs extends Ii{}zs.prototype.ValueTypeName="bool";zs.prototype.ValueBufferType=Array;zs.prototype.DefaultInterpolation=fa;zs.prototype.InterpolantFactoryMethodLinear=void 0;zs.prototype.InterpolantFactoryMethodSmooth=void 0;class Ud extends Ii{}Ud.prototype.ValueTypeName="color";class Ns extends Ii{}Ns.prototype.ValueTypeName="number";class Gx extends ma{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e,t,n,i){const s=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=(n-t)/(i-t);let c=e*o;for(let u=c+o;c!==u;c+=4)xr.slerpFlat(s,0,a,c-o,a,c,l);return s}}class qr extends Ii{InterpolantFactoryMethodLinear(e){return new Gx(this.times,this.values,this.getValueSize(),e)}}qr.prototype.ValueTypeName="quaternion";qr.prototype.DefaultInterpolation=Ps;qr.prototype.InterpolantFactoryMethodSmooth=void 0;class Gs extends Ii{}Gs.prototype.ValueTypeName="string";Gs.prototype.ValueBufferType=Array;Gs.prototype.DefaultInterpolation=fa;Gs.prototype.InterpolantFactoryMethodLinear=void 0;Gs.prototype.InterpolantFactoryMethodSmooth=void 0;class Us extends Ii{}Us.prototype.ValueTypeName="vector";class Hx{constructor(e,t=-1,n,i=Pp){this.name=e,this.tracks=n,this.duration=t,this.blendMode=i,this.uuid=_i(),this.duration<0&&this.resetDuration()}static parse(e){const t=[],n=e.tracks,i=1/(e.fps||1);for(let a=0,o=n.length;a!==o;++a)t.push(Wx(n[a]).scale(i));const s=new this(e.name,e.duration,t,e.blendMode);return s.uuid=e.uuid,s}static toJSON(e){const t=[],n=e.tracks,i={name:e.name,duration:e.duration,tracks:t,uuid:e.uuid,blendMode:e.blendMode};for(let s=0,a=n.length;s!==a;++s)t.push(Ii.toJSON(n[s]));return i}static CreateFromMorphTargetSequence(e,t,n,i){const s=t.length,a=[];for(let o=0;o<s;o++){let l=[],c=[];l.push((o+s-1)%s,o,(o+1)%s),c.push(0,1,0);const u=Ox(l);l=Ch(l,1,u),c=Ch(c,1,u),!i&&l[0]===0&&(l.push(s),c.push(c[0])),a.push(new Ns(".morphTargetInfluences["+t[o].name+"]",l,c).scale(1/n))}return new this(e,-1,a)}static findByName(e,t){let n=e;if(!Array.isArray(e)){const i=e;n=i.geometry&&i.geometry.animations||i.animations}for(let i=0;i<n.length;i++)if(n[i].name===t)return n[i];return null}static CreateClipsFromMorphTargetSequences(e,t,n){const i={},s=/^([\w-]*?)([\d]+)$/;for(let o=0,l=e.length;o<l;o++){const c=e[o],u=c.name.match(s);if(u&&u.length>1){const h=u[1];let d=i[h];d||(i[h]=d=[]),d.push(c)}}const a=[];for(const o in i)a.push(this.CreateFromMorphTargetSequence(o,i[o],t,n));return a}static parseAnimation(e,t){if(!e)return console.error("THREE.AnimationClip: No animation in JSONLoader data."),null;const n=function(h,d,m,g,_){if(m.length!==0){const f=[],p=[];Nd(m,f,p,g),f.length!==0&&_.push(new h(d,f,p))}},i=[],s=e.name||"default",a=e.fps||30,o=e.blendMode;let l=e.length||-1;const c=e.hierarchy||[];for(let h=0;h<c.length;h++){const d=c[h].keys;if(!(!d||d.length===0))if(d[0].morphTargets){const m={};let g;for(g=0;g<d.length;g++)if(d[g].morphTargets)for(let _=0;_<d[g].morphTargets.length;_++)m[d[g].morphTargets[_]]=-1;for(const _ in m){const f=[],p=[];for(let M=0;M!==d[g].morphTargets.length;++M){const v=d[g];f.push(v.time),p.push(v.morphTarget===_?1:0)}i.push(new Ns(".morphTargetInfluence["+_+"]",f,p))}l=m.length*a}else{const m=".bones["+t[h].name+"]";n(Us,m+".position",d,"pos",i),n(qr,m+".quaternion",d,"rot",i),n(Us,m+".scale",d,"scl",i)}}return i.length===0?null:new this(s,l,i,o)}resetDuration(){const e=this.tracks;let t=0;for(let n=0,i=e.length;n!==i;++n){const s=this.tracks[n];t=Math.max(t,s.times[s.times.length-1])}return this.duration=t,this}trim(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].trim(0,this.duration);return this}validate(){let e=!0;for(let t=0;t<this.tracks.length;t++)e=e&&this.tracks[t].validate();return e}optimize(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].optimize();return this}clone(){const e=[];for(let t=0;t<this.tracks.length;t++)e.push(this.tracks[t].clone());return new this.constructor(this.name,this.duration,e,this.blendMode)}toJSON(){return this.constructor.toJSON(this)}}function Vx(r){switch(r.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return Ns;case"vector":case"vector2":case"vector3":case"vector4":return Us;case"color":return Ud;case"quaternion":return qr;case"bool":case"boolean":return zs;case"string":return Gs}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+r)}function Wx(r){if(r.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");const e=Vx(r.type);if(r.times===void 0){const t=[],n=[];Nd(r.keys,t,n,"value"),r.times=t,r.values=n}return e.parse!==void 0?e.parse(r):new e(r.name,r.times,r.values,r.interpolation)}const mr={enabled:!1,files:{},add:function(r,e){this.enabled!==!1&&(this.files[r]=e)},get:function(r){if(this.enabled!==!1)return this.files[r]},remove:function(r){delete this.files[r]},clear:function(){this.files={}}};class Xx{constructor(e,t,n){const i=this;let s=!1,a=0,o=0,l;const c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this.itemStart=function(u){o++,s===!1&&i.onStart!==void 0&&i.onStart(u,a,o),s=!0},this.itemEnd=function(u){a++,i.onProgress!==void 0&&i.onProgress(u,a,o),a===o&&(s=!1,i.onLoad!==void 0&&i.onLoad())},this.itemError=function(u){i.onError!==void 0&&i.onError(u)},this.resolveURL=function(u){return l?l(u):u},this.setURLModifier=function(u){return l=u,this},this.addHandler=function(u,h){return c.push(u,h),this},this.removeHandler=function(u){const h=c.indexOf(u);return h!==-1&&c.splice(h,2),this},this.getHandler=function(u){for(let h=0,d=c.length;h<d;h+=2){const m=c[h],g=c[h+1];if(m.global&&(m.lastIndex=0),m.test(u))return g}return null}}}const qx=new Xx;class Hs{constructor(e){this.manager=e!==void 0?e:qx,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){const n=this;return new Promise(function(i,s){n.load(e,i,t,s)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}}Hs.DEFAULT_MATERIAL_NAME="__DEFAULT";const Wi={};class Yx extends Error{constructor(e,t){super(e),this.response=t}}class Fd extends Hs{constructor(e){super(e)}load(e,t,n,i){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=mr.get(e);if(s!==void 0)return this.manager.itemStart(e),setTimeout(()=>{t&&t(s),this.manager.itemEnd(e)},0),s;if(Wi[e]!==void 0){Wi[e].push({onLoad:t,onProgress:n,onError:i});return}Wi[e]=[],Wi[e].push({onLoad:t,onProgress:n,onError:i});const a=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin"}),o=this.mimeType,l=this.responseType;fetch(a).then(c=>{if(c.status===200||c.status===0){if(c.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||c.body===void 0||c.body.getReader===void 0)return c;const u=Wi[e],h=c.body.getReader(),d=c.headers.get("Content-Length")||c.headers.get("X-File-Size"),m=d?parseInt(d):0,g=m!==0;let _=0;const f=new ReadableStream({start(p){M();function M(){h.read().then(({done:v,value:T})=>{if(v)p.close();else{_+=T.byteLength;const E=new ProgressEvent("progress",{lengthComputable:g,loaded:_,total:m});for(let w=0,S=u.length;w<S;w++){const P=u[w];P.onProgress&&P.onProgress(E)}p.enqueue(T),M()}})}}});return new Response(f)}else throw new Yx(`fetch for "${c.url}" responded with ${c.status}: ${c.statusText}`,c)}).then(c=>{switch(l){case"arraybuffer":return c.arrayBuffer();case"blob":return c.blob();case"document":return c.text().then(u=>new DOMParser().parseFromString(u,o));case"json":return c.json();default:if(o===void 0)return c.text();{const h=/charset="?([^;"\s]*)"?/i.exec(o),d=h&&h[1]?h[1].toLowerCase():void 0,m=new TextDecoder(d);return c.arrayBuffer().then(g=>m.decode(g))}}}).then(c=>{mr.add(e,c);const u=Wi[e];delete Wi[e];for(let h=0,d=u.length;h<d;h++){const m=u[h];m.onLoad&&m.onLoad(c)}}).catch(c=>{const u=Wi[e];if(u===void 0)throw this.manager.itemError(e),c;delete Wi[e];for(let h=0,d=u.length;h<d;h++){const m=u[h];m.onError&&m.onError(c)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}}class jx extends Hs{constructor(e){super(e)}load(e,t,n,i){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=this,a=mr.get(e);if(a!==void 0)return s.manager.itemStart(e),setTimeout(function(){t&&t(a),s.manager.itemEnd(e)},0),a;const o=pa("img");function l(){u(),mr.add(e,this),t&&t(this),s.manager.itemEnd(e)}function c(h){u(),i&&i(h),s.manager.itemError(e),s.manager.itemEnd(e)}function u(){o.removeEventListener("load",l,!1),o.removeEventListener("error",c,!1)}return o.addEventListener("load",l,!1),o.addEventListener("error",c,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(o.crossOrigin=this.crossOrigin),s.manager.itemStart(e),o.src=e,o}}class Kx extends Hs{constructor(e){super(e)}load(e,t,n,i){const s=new yn,a=new jx(this.manager);return a.setCrossOrigin(this.crossOrigin),a.setPath(this.path),a.load(e,function(o){s.image=o,s.needsUpdate=!0,t!==void 0&&t(s)},n,i),s}}class vo extends tn{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new $e(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),t}}const Ml=new Xe,Lh=new I,Ph=new I;class pc{constructor(e){this.camera=e,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new be(512,512),this.map=null,this.mapPass=null,this.matrix=new Xe,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new tc,this._frameExtents=new be(1,1),this._viewportCount=1,this._viewports=[new Vt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,n=this.matrix;Lh.setFromMatrixPosition(e.matrixWorld),t.position.copy(Lh),Ph.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Ph),t.updateMatrixWorld(),Ml.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Ml),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(Ml)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class $x extends pc{constructor(){super(new On(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1}updateMatrices(e){const t=this.camera,n=Is*2*e.angle*this.focus,i=this.mapSize.width/this.mapSize.height,s=e.distance||t.far;(n!==t.fov||i!==t.aspect||s!==t.far)&&(t.fov=n,t.aspect=i,t.far=s,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this}}class Zx extends vo{constructor(e,t,n=0,i=Math.PI/3,s=0,a=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(tn.DEFAULT_UP),this.updateMatrix(),this.target=new tn,this.distance=n,this.angle=i,this.penumbra=s,this.decay=a,this.map=null,this.shadow=new $x}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}const Ih=new Xe,ta=new I,Sl=new I;class Jx extends pc{constructor(){super(new On(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new be(4,2),this._viewportCount=6,this._viewports=[new Vt(2,1,1,1),new Vt(0,1,1,1),new Vt(3,1,1,1),new Vt(1,1,1,1),new Vt(3,0,1,1),new Vt(1,0,1,1)],this._cubeDirections=[new I(1,0,0),new I(-1,0,0),new I(0,0,1),new I(0,0,-1),new I(0,1,0),new I(0,-1,0)],this._cubeUps=[new I(0,1,0),new I(0,1,0),new I(0,1,0),new I(0,1,0),new I(0,0,1),new I(0,0,-1)]}updateMatrices(e,t=0){const n=this.camera,i=this.matrix,s=e.distance||n.far;s!==n.far&&(n.far=s,n.updateProjectionMatrix()),ta.setFromMatrixPosition(e.matrixWorld),n.position.copy(ta),Sl.copy(n.position),Sl.add(this._cubeDirections[t]),n.up.copy(this._cubeUps[t]),n.lookAt(Sl),n.updateMatrixWorld(),i.makeTranslation(-ta.x,-ta.y,-ta.z),Ih.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Ih)}}class Qx extends vo{constructor(e,t,n=0,i=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=i,this.shadow=new Jx}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}}class ey extends pc{constructor(){super(new nc(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Vl extends vo{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(tn.DEFAULT_UP),this.updateMatrix(),this.target=new tn,this.shadow=new ey}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class Dh extends vo{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}}class ha{static decodeText(e){if(typeof TextDecoder<"u")return new TextDecoder().decode(e);let t="";for(let n=0,i=e.length;n<i;n++)t+=String.fromCharCode(e[n]);try{return decodeURIComponent(escape(t))}catch{return t}}static extractUrlBase(e){const t=e.lastIndexOf("/");return t===-1?"./":e.slice(0,t+1)}static resolveURL(e,t){return typeof e!="string"||e===""?"":(/^https?:\/\//i.test(t)&&/^\//.test(e)&&(t=t.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(e)||/^data:.*,.*$/i.test(e)||/^blob:.*$/i.test(e)?e:t+e)}}class ty extends Hs{constructor(e){super(e),this.isImageBitmapLoader=!0,typeof createImageBitmap>"u"&&console.warn("THREE.ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch>"u"&&console.warn("THREE.ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"}}setOptions(e){return this.options=e,this}load(e,t,n,i){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=this,a=mr.get(e);if(a!==void 0){if(s.manager.itemStart(e),a.then){a.then(c=>{t&&t(c),s.manager.itemEnd(e)}).catch(c=>{i&&i(c)});return}return setTimeout(function(){t&&t(a),s.manager.itemEnd(e)},0),a}const o={};o.credentials=this.crossOrigin==="anonymous"?"same-origin":"include",o.headers=this.requestHeader;const l=fetch(e,o).then(function(c){return c.blob()}).then(function(c){return createImageBitmap(c,Object.assign(s.options,{colorSpaceConversion:"none"}))}).then(function(c){return mr.add(e,c),t&&t(c),s.manager.itemEnd(e),c}).catch(function(c){i&&i(c),mr.remove(e),s.manager.itemError(e),s.manager.itemEnd(e)});mr.add(e,l),s.manager.itemStart(e)}}const mc="\\[\\]\\.:\\/",ny=new RegExp("["+mc+"]","g"),gc="[^"+mc+"]",iy="[^"+mc.replace("\\.","")+"]",ry=/((?:WC+[\/:])*)/.source.replace("WC",gc),sy=/(WCOD+)?/.source.replace("WCOD",iy),ay=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",gc),oy=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",gc),ly=new RegExp("^"+ry+sy+ay+oy+"$"),cy=["material","materials","bones","map"];class uy{constructor(e,t,n){const i=n||Nt.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,i)}getValue(e,t){this.bind();const n=this._targetGroup.nCachedObjects_,i=this._bindings[n];i!==void 0&&i.getValue(e,t)}setValue(e,t){const n=this._bindings;for(let i=this._targetGroup.nCachedObjects_,s=n.length;i!==s;++i)n[i].setValue(e,t)}bind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}}class Nt{constructor(e,t,n){this.path=t,this.parsedPath=n||Nt.parseTrackName(t),this.node=Nt.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new Nt.Composite(e,t,n):new Nt(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(ny,"")}static parseTrackName(e){const t=ly.exec(e);if(t===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);const n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},i=n.nodeName&&n.nodeName.lastIndexOf(".");if(i!==void 0&&i!==-1){const s=n.nodeName.substring(i+1);cy.indexOf(s)!==-1&&(n.nodeName=n.nodeName.substring(0,i),n.objectName=s)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){const n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){const n=function(s){for(let a=0;a<s.length;a++){const o=s[a];if(o.name===t||o.uuid===t)return o;const l=n(o.children);if(l)return l}return null},i=n(e.children);if(i)return i}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){const n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)e[t++]=n[i]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){const n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)n[i]=e[t++]}_setValue_array_setNeedsUpdate(e,t){const n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)n[i]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){const n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)n[i]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node;const t=this.parsedPath,n=t.objectName,i=t.propertyName;let s=t.propertyIndex;if(e||(e=Nt.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let c=t.objectIndex;switch(n){case"materials":if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let u=0;u<e.length;u++)if(e[u].name===c){c=u;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[n]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[n]}if(c!==void 0){if(e[c]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[c]}}const a=e[i];if(a===void 0){const c=t.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+c+"."+i+" but it wasn't found.",e);return}let o=this.Versioning.None;this.targetObject=e,e.needsUpdate!==void 0?o=this.Versioning.NeedsUpdate:e.matrixWorldNeedsUpdate!==void 0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(s!==void 0){if(i==="morphTargetInfluences"){if(!e.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[s]!==void 0&&(s=e.morphTargetDictionary[s])}l=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=s}else a.fromArray!==void 0&&a.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(l=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=i;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}}Nt.Composite=uy;Nt.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};Nt.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};Nt.prototype.GetterByBindingType=[Nt.prototype._getValue_direct,Nt.prototype._getValue_array,Nt.prototype._getValue_arrayElement,Nt.prototype._getValue_toArray];Nt.prototype.SetterByBindingTypeAndVersioning=[[Nt.prototype._setValue_direct,Nt.prototype._setValue_direct_setNeedsUpdate,Nt.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Nt.prototype._setValue_array,Nt.prototype._setValue_array_setNeedsUpdate,Nt.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Nt.prototype._setValue_arrayElement,Nt.prototype._setValue_arrayElement_setNeedsUpdate,Nt.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Nt.prototype._setValue_fromArray,Nt.prototype._setValue_fromArray_setNeedsUpdate,Nt.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:$l}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=$l);function Nh(r,e){if(e===Ip)return console.warn("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Geometry already defined as triangles."),r;if(e===Ul||e===id){let t=r.getIndex();if(t===null){const a=[],o=r.getAttribute("position");if(o!==void 0){for(let l=0;l<o.count;l++)a.push(l);r.setIndex(a),t=r.getIndex()}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."),r}const n=t.count-2,i=[];if(e===Ul)for(let a=1;a<=n;a++)i.push(t.getX(0)),i.push(t.getX(a)),i.push(t.getX(a+1));else for(let a=0;a<n;a++)a%2===0?(i.push(t.getX(a)),i.push(t.getX(a+1)),i.push(t.getX(a+2))):(i.push(t.getX(a+2)),i.push(t.getX(a+1)),i.push(t.getX(a)));i.length/3!==n&&console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unable to generate correct amount of triangles.");const s=r.clone();return s.setIndex(i),s.clearGroups(),s}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unknown draw mode:",e),r}class hy extends Hs{constructor(e){super(e),this.dracoLoader=null,this.ktx2Loader=null,this.meshoptDecoder=null,this.pluginCallbacks=[],this.register(function(t){return new gy(t)}),this.register(function(t){return new Ty(t)}),this.register(function(t){return new Ay(t)}),this.register(function(t){return new wy(t)}),this.register(function(t){return new vy(t)}),this.register(function(t){return new xy(t)}),this.register(function(t){return new yy(t)}),this.register(function(t){return new My(t)}),this.register(function(t){return new my(t)}),this.register(function(t){return new Sy(t)}),this.register(function(t){return new _y(t)}),this.register(function(t){return new by(t)}),this.register(function(t){return new Ey(t)}),this.register(function(t){return new fy(t)}),this.register(function(t){return new Ry(t)}),this.register(function(t){return new Cy(t)})}load(e,t,n,i){const s=this;let a;if(this.resourcePath!=="")a=this.resourcePath;else if(this.path!==""){const c=ha.extractUrlBase(e);a=ha.resolveURL(c,this.path)}else a=ha.extractUrlBase(e);this.manager.itemStart(e);const o=function(c){i?i(c):console.error(c),s.manager.itemError(e),s.manager.itemEnd(e)},l=new Fd(this.manager);l.setPath(this.path),l.setResponseType("arraybuffer"),l.setRequestHeader(this.requestHeader),l.setWithCredentials(this.withCredentials),l.load(e,function(c){try{s.parse(c,a,function(u){t(u),s.manager.itemEnd(e)},o)}catch(u){o(u)}},n,o)}setDRACOLoader(e){return this.dracoLoader=e,this}setDDSLoader(){throw new Error('THREE.GLTFLoader: "MSFT_texture_dds" no longer supported. Please update to "KHR_texture_basisu".')}setKTX2Loader(e){return this.ktx2Loader=e,this}setMeshoptDecoder(e){return this.meshoptDecoder=e,this}register(e){return this.pluginCallbacks.indexOf(e)===-1&&this.pluginCallbacks.push(e),this}unregister(e){return this.pluginCallbacks.indexOf(e)!==-1&&this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(e),1),this}parse(e,t,n,i){let s;const a={},o={},l=new TextDecoder;if(typeof e=="string")s=JSON.parse(e);else if(e instanceof ArrayBuffer)if(l.decode(new Uint8Array(e,0,4))===Od){try{a[Mt.KHR_BINARY_GLTF]=new Ly(e)}catch(h){i&&i(h);return}s=JSON.parse(a[Mt.KHR_BINARY_GLTF].content)}else s=JSON.parse(l.decode(e));else s=e;if(s.asset===void 0||s.asset.version[0]<2){i&&i(new Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."));return}const c=new Vy(s,{path:t||this.resourcePath||"",crossOrigin:this.crossOrigin,requestHeader:this.requestHeader,manager:this.manager,ktx2Loader:this.ktx2Loader,meshoptDecoder:this.meshoptDecoder});c.fileLoader.setRequestHeader(this.requestHeader);for(let u=0;u<this.pluginCallbacks.length;u++){const h=this.pluginCallbacks[u](c);h.name||console.error("THREE.GLTFLoader: Invalid plugin found: missing name"),o[h.name]=h,a[h.name]=!0}if(s.extensionsUsed)for(let u=0;u<s.extensionsUsed.length;++u){const h=s.extensionsUsed[u],d=s.extensionsRequired||[];switch(h){case Mt.KHR_MATERIALS_UNLIT:a[h]=new py;break;case Mt.KHR_DRACO_MESH_COMPRESSION:a[h]=new Py(s,this.dracoLoader);break;case Mt.KHR_TEXTURE_TRANSFORM:a[h]=new Iy;break;case Mt.KHR_MESH_QUANTIZATION:a[h]=new Dy;break;default:d.indexOf(h)>=0&&o[h]===void 0&&console.warn('THREE.GLTFLoader: Unknown extension "'+h+'".')}}c.setExtensions(a),c.setPlugins(o),c.parse(n,i)}parseAsync(e,t){const n=this;return new Promise(function(i,s){n.parse(e,t,i,s)})}}function dy(){let r={};return{get:function(e){return r[e]},add:function(e,t){r[e]=t},remove:function(e){delete r[e]},removeAll:function(){r={}}}}const Mt={KHR_BINARY_GLTF:"KHR_binary_glTF",KHR_DRACO_MESH_COMPRESSION:"KHR_draco_mesh_compression",KHR_LIGHTS_PUNCTUAL:"KHR_lights_punctual",KHR_MATERIALS_CLEARCOAT:"KHR_materials_clearcoat",KHR_MATERIALS_IOR:"KHR_materials_ior",KHR_MATERIALS_SHEEN:"KHR_materials_sheen",KHR_MATERIALS_SPECULAR:"KHR_materials_specular",KHR_MATERIALS_TRANSMISSION:"KHR_materials_transmission",KHR_MATERIALS_IRIDESCENCE:"KHR_materials_iridescence",KHR_MATERIALS_ANISOTROPY:"KHR_materials_anisotropy",KHR_MATERIALS_UNLIT:"KHR_materials_unlit",KHR_MATERIALS_VOLUME:"KHR_materials_volume",KHR_TEXTURE_BASISU:"KHR_texture_basisu",KHR_TEXTURE_TRANSFORM:"KHR_texture_transform",KHR_MESH_QUANTIZATION:"KHR_mesh_quantization",KHR_MATERIALS_EMISSIVE_STRENGTH:"KHR_materials_emissive_strength",EXT_MATERIALS_BUMP:"EXT_materials_bump",EXT_TEXTURE_WEBP:"EXT_texture_webp",EXT_TEXTURE_AVIF:"EXT_texture_avif",EXT_MESHOPT_COMPRESSION:"EXT_meshopt_compression",EXT_MESH_GPU_INSTANCING:"EXT_mesh_gpu_instancing"};class fy{constructor(e){this.parser=e,this.name=Mt.KHR_LIGHTS_PUNCTUAL,this.cache={refs:{},uses:{}}}_markDefs(){const e=this.parser,t=this.parser.json.nodes||[];for(let n=0,i=t.length;n<i;n++){const s=t[n];s.extensions&&s.extensions[this.name]&&s.extensions[this.name].light!==void 0&&e._addNodeRef(this.cache,s.extensions[this.name].light)}}_loadLight(e){const t=this.parser,n="light:"+e;let i=t.cache.get(n);if(i)return i;const s=t.json,l=((s.extensions&&s.extensions[this.name]||{}).lights||[])[e];let c;const u=new $e(16777215);l.color!==void 0&&u.setRGB(l.color[0],l.color[1],l.color[2],Tn);const h=l.range!==void 0?l.range:0;switch(l.type){case"directional":c=new Vl(u),c.target.position.set(0,0,-1),c.add(c.target);break;case"point":c=new Qx(u),c.distance=h;break;case"spot":c=new Zx(u),c.distance=h,l.spot=l.spot||{},l.spot.innerConeAngle=l.spot.innerConeAngle!==void 0?l.spot.innerConeAngle:0,l.spot.outerConeAngle=l.spot.outerConeAngle!==void 0?l.spot.outerConeAngle:Math.PI/4,c.angle=l.spot.outerConeAngle,c.penumbra=1-l.spot.innerConeAngle/l.spot.outerConeAngle,c.target.position.set(0,0,-1),c.add(c.target);break;default:throw new Error("THREE.GLTFLoader: Unexpected light type: "+l.type)}return c.position.set(0,0,0),c.decay=2,hr(c,l),l.intensity!==void 0&&(c.intensity=l.intensity),c.name=t.createUniqueName(l.name||"light_"+e),i=Promise.resolve(c),t.cache.add(n,i),i}getDependency(e,t){if(e==="light")return this._loadLight(t)}createNodeAttachment(e){const t=this,n=this.parser,s=n.json.nodes[e],o=(s.extensions&&s.extensions[this.name]||{}).light;return o===void 0?null:this._loadLight(o).then(function(l){return n._getNodeRef(t.cache,o,l)})}}class py{constructor(){this.name=Mt.KHR_MATERIALS_UNLIT}getMaterialType(){return Hr}extendParams(e,t,n){const i=[];e.color=new $e(1,1,1),e.opacity=1;const s=t.pbrMetallicRoughness;if(s){if(Array.isArray(s.baseColorFactor)){const a=s.baseColorFactor;e.color.setRGB(a[0],a[1],a[2],Tn),e.opacity=a[3]}s.baseColorTexture!==void 0&&i.push(n.assignTexture(e,"map",s.baseColorTexture,Fn))}return Promise.all(i)}}class my{constructor(e){this.parser=e,this.name=Mt.KHR_MATERIALS_EMISSIVE_STRENGTH}extendMaterialParams(e,t){const i=this.parser.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=i.extensions[this.name].emissiveStrength;return s!==void 0&&(t.emissiveIntensity=s),Promise.resolve()}}class gy{constructor(e){this.parser=e,this.name=Mt.KHR_MATERIALS_CLEARCOAT}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:er}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=[],a=i.extensions[this.name];if(a.clearcoatFactor!==void 0&&(t.clearcoat=a.clearcoatFactor),a.clearcoatTexture!==void 0&&s.push(n.assignTexture(t,"clearcoatMap",a.clearcoatTexture)),a.clearcoatRoughnessFactor!==void 0&&(t.clearcoatRoughness=a.clearcoatRoughnessFactor),a.clearcoatRoughnessTexture!==void 0&&s.push(n.assignTexture(t,"clearcoatRoughnessMap",a.clearcoatRoughnessTexture)),a.clearcoatNormalTexture!==void 0&&(s.push(n.assignTexture(t,"clearcoatNormalMap",a.clearcoatNormalTexture)),a.clearcoatNormalTexture.scale!==void 0)){const o=a.clearcoatNormalTexture.scale;t.clearcoatNormalScale=new be(o,o)}return Promise.all(s)}}class _y{constructor(e){this.parser=e,this.name=Mt.KHR_MATERIALS_IRIDESCENCE}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:er}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=[],a=i.extensions[this.name];return a.iridescenceFactor!==void 0&&(t.iridescence=a.iridescenceFactor),a.iridescenceTexture!==void 0&&s.push(n.assignTexture(t,"iridescenceMap",a.iridescenceTexture)),a.iridescenceIor!==void 0&&(t.iridescenceIOR=a.iridescenceIor),t.iridescenceThicknessRange===void 0&&(t.iridescenceThicknessRange=[100,400]),a.iridescenceThicknessMinimum!==void 0&&(t.iridescenceThicknessRange[0]=a.iridescenceThicknessMinimum),a.iridescenceThicknessMaximum!==void 0&&(t.iridescenceThicknessRange[1]=a.iridescenceThicknessMaximum),a.iridescenceThicknessTexture!==void 0&&s.push(n.assignTexture(t,"iridescenceThicknessMap",a.iridescenceThicknessTexture)),Promise.all(s)}}class vy{constructor(e){this.parser=e,this.name=Mt.KHR_MATERIALS_SHEEN}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:er}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=[];t.sheenColor=new $e(0,0,0),t.sheenRoughness=0,t.sheen=1;const a=i.extensions[this.name];if(a.sheenColorFactor!==void 0){const o=a.sheenColorFactor;t.sheenColor.setRGB(o[0],o[1],o[2],Tn)}return a.sheenRoughnessFactor!==void 0&&(t.sheenRoughness=a.sheenRoughnessFactor),a.sheenColorTexture!==void 0&&s.push(n.assignTexture(t,"sheenColorMap",a.sheenColorTexture,Fn)),a.sheenRoughnessTexture!==void 0&&s.push(n.assignTexture(t,"sheenRoughnessMap",a.sheenRoughnessTexture)),Promise.all(s)}}class xy{constructor(e){this.parser=e,this.name=Mt.KHR_MATERIALS_TRANSMISSION}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:er}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=[],a=i.extensions[this.name];return a.transmissionFactor!==void 0&&(t.transmission=a.transmissionFactor),a.transmissionTexture!==void 0&&s.push(n.assignTexture(t,"transmissionMap",a.transmissionTexture)),Promise.all(s)}}class yy{constructor(e){this.parser=e,this.name=Mt.KHR_MATERIALS_VOLUME}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:er}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=[],a=i.extensions[this.name];t.thickness=a.thicknessFactor!==void 0?a.thicknessFactor:0,a.thicknessTexture!==void 0&&s.push(n.assignTexture(t,"thicknessMap",a.thicknessTexture)),t.attenuationDistance=a.attenuationDistance||1/0;const o=a.attenuationColor||[1,1,1];return t.attenuationColor=new $e().setRGB(o[0],o[1],o[2],Tn),Promise.all(s)}}class My{constructor(e){this.parser=e,this.name=Mt.KHR_MATERIALS_IOR}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:er}extendMaterialParams(e,t){const i=this.parser.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=i.extensions[this.name];return t.ior=s.ior!==void 0?s.ior:1.5,Promise.resolve()}}class Sy{constructor(e){this.parser=e,this.name=Mt.KHR_MATERIALS_SPECULAR}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:er}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=[],a=i.extensions[this.name];t.specularIntensity=a.specularFactor!==void 0?a.specularFactor:1,a.specularTexture!==void 0&&s.push(n.assignTexture(t,"specularIntensityMap",a.specularTexture));const o=a.specularColorFactor||[1,1,1];return t.specularColor=new $e().setRGB(o[0],o[1],o[2],Tn),a.specularColorTexture!==void 0&&s.push(n.assignTexture(t,"specularColorMap",a.specularColorTexture,Fn)),Promise.all(s)}}class Ey{constructor(e){this.parser=e,this.name=Mt.EXT_MATERIALS_BUMP}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:er}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=[],a=i.extensions[this.name];return t.bumpScale=a.bumpFactor!==void 0?a.bumpFactor:1,a.bumpTexture!==void 0&&s.push(n.assignTexture(t,"bumpMap",a.bumpTexture)),Promise.all(s)}}class by{constructor(e){this.parser=e,this.name=Mt.KHR_MATERIALS_ANISOTROPY}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:er}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=[],a=i.extensions[this.name];return a.anisotropyStrength!==void 0&&(t.anisotropy=a.anisotropyStrength),a.anisotropyRotation!==void 0&&(t.anisotropyRotation=a.anisotropyRotation),a.anisotropyTexture!==void 0&&s.push(n.assignTexture(t,"anisotropyMap",a.anisotropyTexture)),Promise.all(s)}}class Ty{constructor(e){this.parser=e,this.name=Mt.KHR_TEXTURE_BASISU}loadTexture(e){const t=this.parser,n=t.json,i=n.textures[e];if(!i.extensions||!i.extensions[this.name])return null;const s=i.extensions[this.name],a=t.options.ktx2Loader;if(!a){if(n.extensionsRequired&&n.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures");return null}return t.loadTextureImage(e,s.source,a)}}class Ay{constructor(e){this.parser=e,this.name=Mt.EXT_TEXTURE_WEBP,this.isSupported=null}loadTexture(e){const t=this.name,n=this.parser,i=n.json,s=i.textures[e];if(!s.extensions||!s.extensions[t])return null;const a=s.extensions[t],o=i.images[a.source];let l=n.textureLoader;if(o.uri){const c=n.options.manager.getHandler(o.uri);c!==null&&(l=c)}return this.detectSupport().then(function(c){if(c)return n.loadTextureImage(e,a.source,l);if(i.extensionsRequired&&i.extensionsRequired.indexOf(t)>=0)throw new Error("THREE.GLTFLoader: WebP required by asset but unsupported.");return n.loadTexture(e)})}detectSupport(){return this.isSupported||(this.isSupported=new Promise(function(e){const t=new Image;t.src="data:image/webp;base64,UklGRiIAAABXRUJQVlA4IBYAAAAwAQCdASoBAAEADsD+JaQAA3AAAAAA",t.onload=t.onerror=function(){e(t.height===1)}})),this.isSupported}}class wy{constructor(e){this.parser=e,this.name=Mt.EXT_TEXTURE_AVIF,this.isSupported=null}loadTexture(e){const t=this.name,n=this.parser,i=n.json,s=i.textures[e];if(!s.extensions||!s.extensions[t])return null;const a=s.extensions[t],o=i.images[a.source];let l=n.textureLoader;if(o.uri){const c=n.options.manager.getHandler(o.uri);c!==null&&(l=c)}return this.detectSupport().then(function(c){if(c)return n.loadTextureImage(e,a.source,l);if(i.extensionsRequired&&i.extensionsRequired.indexOf(t)>=0)throw new Error("THREE.GLTFLoader: AVIF required by asset but unsupported.");return n.loadTexture(e)})}detectSupport(){return this.isSupported||(this.isSupported=new Promise(function(e){const t=new Image;t.src="data:image/avif;base64,AAAAIGZ0eXBhdmlmAAAAAGF2aWZtaWYxbWlhZk1BMUIAAADybWV0YQAAAAAAAAAoaGRscgAAAAAAAAAAcGljdAAAAAAAAAAAAAAAAGxpYmF2aWYAAAAADnBpdG0AAAAAAAEAAAAeaWxvYwAAAABEAAABAAEAAAABAAABGgAAABcAAAAoaWluZgAAAAAAAQAAABppbmZlAgAAAAABAABhdjAxQ29sb3IAAAAAamlwcnAAAABLaXBjbwAAABRpc3BlAAAAAAAAAAEAAAABAAAAEHBpeGkAAAAAAwgICAAAAAxhdjFDgQAMAAAAABNjb2xybmNseAACAAIABoAAAAAXaXBtYQAAAAAAAAABAAEEAQKDBAAAAB9tZGF0EgAKCBgABogQEDQgMgkQAAAAB8dSLfI=",t.onload=t.onerror=function(){e(t.height===1)}})),this.isSupported}}class Ry{constructor(e){this.name=Mt.EXT_MESHOPT_COMPRESSION,this.parser=e}loadBufferView(e){const t=this.parser.json,n=t.bufferViews[e];if(n.extensions&&n.extensions[this.name]){const i=n.extensions[this.name],s=this.parser.getDependency("buffer",i.buffer),a=this.parser.options.meshoptDecoder;if(!a||!a.supported){if(t.extensionsRequired&&t.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files");return null}return s.then(function(o){const l=i.byteOffset||0,c=i.byteLength||0,u=i.count,h=i.byteStride,d=new Uint8Array(o,l,c);return a.decodeGltfBufferAsync?a.decodeGltfBufferAsync(u,h,d,i.mode,i.filter).then(function(m){return m.buffer}):a.ready.then(function(){const m=new ArrayBuffer(u*h);return a.decodeGltfBuffer(new Uint8Array(m),u,h,d,i.mode,i.filter),m})})}else return null}}class Cy{constructor(e){this.name=Mt.EXT_MESH_GPU_INSTANCING,this.parser=e}createNodeMesh(e){const t=this.parser.json,n=t.nodes[e];if(!n.extensions||!n.extensions[this.name]||n.mesh===void 0)return null;const i=t.meshes[n.mesh];for(const c of i.primitives)if(c.mode!==ti.TRIANGLES&&c.mode!==ti.TRIANGLE_STRIP&&c.mode!==ti.TRIANGLE_FAN&&c.mode!==void 0)return null;const a=n.extensions[this.name].attributes,o=[],l={};for(const c in a)o.push(this.parser.getDependency("accessor",a[c]).then(u=>(l[c]=u,l[c])));return o.length<1?null:(o.push(this.parser.createNodeMesh(e)),Promise.all(o).then(c=>{const u=c.pop(),h=u.isGroup?u.children:[u],d=c[0].count,m=[];for(const g of h){const _=new Xe,f=new I,p=new xr,M=new I(1,1,1),v=new wd(g.geometry,g.material,d);for(let T=0;T<d;T++)l.TRANSLATION&&f.fromBufferAttribute(l.TRANSLATION,T),l.ROTATION&&p.fromBufferAttribute(l.ROTATION,T),l.SCALE&&M.fromBufferAttribute(l.SCALE,T),v.setMatrixAt(T,_.compose(f,p,M));for(const T in l)if(T==="_COLOR_0"){const E=l[T];v.instanceColor=new Gl(E.array,E.itemSize,E.normalized)}else T!=="TRANSLATION"&&T!=="ROTATION"&&T!=="SCALE"&&g.geometry.setAttribute(T,l[T]);tn.prototype.copy.call(v,g),this.parser.assignFinalMaterial(v),m.push(v)}return u.isGroup?(u.clear(),u.add(...m),u):m[0]}))}}const Od="glTF",na=12,Uh={JSON:1313821514,BIN:5130562};class Ly{constructor(e){this.name=Mt.KHR_BINARY_GLTF,this.content=null,this.body=null;const t=new DataView(e,0,na),n=new TextDecoder;if(this.header={magic:n.decode(new Uint8Array(e.slice(0,4))),version:t.getUint32(4,!0),length:t.getUint32(8,!0)},this.header.magic!==Od)throw new Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");if(this.header.version<2)throw new Error("THREE.GLTFLoader: Legacy binary file detected.");const i=this.header.length-na,s=new DataView(e,na);let a=0;for(;a<i;){const o=s.getUint32(a,!0);a+=4;const l=s.getUint32(a,!0);if(a+=4,l===Uh.JSON){const c=new Uint8Array(e,na+a,o);this.content=n.decode(c)}else if(l===Uh.BIN){const c=na+a;this.body=e.slice(c,c+o)}a+=o}if(this.content===null)throw new Error("THREE.GLTFLoader: JSON content not found.")}}class Py{constructor(e,t){if(!t)throw new Error("THREE.GLTFLoader: No DRACOLoader instance provided.");this.name=Mt.KHR_DRACO_MESH_COMPRESSION,this.json=e,this.dracoLoader=t,this.dracoLoader.preload()}decodePrimitive(e,t){const n=this.json,i=this.dracoLoader,s=e.extensions[this.name].bufferView,a=e.extensions[this.name].attributes,o={},l={},c={};for(const u in a){const h=Wl[u]||u.toLowerCase();o[h]=a[u]}for(const u in e.attributes){const h=Wl[u]||u.toLowerCase();if(a[u]!==void 0){const d=n.accessors[e.attributes[u]],m=As[d.componentType];c[h]=m.name,l[h]=d.normalized===!0}}return t.getDependency("bufferView",s).then(function(u){return new Promise(function(h,d){i.decodeDracoFile(u,function(m){for(const g in m.attributes){const _=m.attributes[g],f=l[g];f!==void 0&&(_.normalized=f)}h(m)},o,c,Tn,d)})})}}class Iy{constructor(){this.name=Mt.KHR_TEXTURE_TRANSFORM}extendTexture(e,t){return(t.texCoord===void 0||t.texCoord===e.channel)&&t.offset===void 0&&t.rotation===void 0&&t.scale===void 0||(e=e.clone(),t.texCoord!==void 0&&(e.channel=t.texCoord),t.offset!==void 0&&e.offset.fromArray(t.offset),t.rotation!==void 0&&(e.rotation=t.rotation),t.scale!==void 0&&e.repeat.fromArray(t.scale),e.needsUpdate=!0),e}}class Dy{constructor(){this.name=Mt.KHR_MESH_QUANTIZATION}}class Bd extends ma{constructor(e,t,n,i){super(e,t,n,i)}copySampleValue_(e){const t=this.resultBuffer,n=this.sampleValues,i=this.valueSize,s=e*i*3+i;for(let a=0;a!==i;a++)t[a]=n[s+a];return t}interpolate_(e,t,n,i){const s=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=o*2,c=o*3,u=i-t,h=(n-t)/u,d=h*h,m=d*h,g=e*c,_=g-c,f=-2*m+3*d,p=m-d,M=1-f,v=p-d+h;for(let T=0;T!==o;T++){const E=a[_+T+o],w=a[_+T+l]*u,S=a[g+T+o],P=a[g+T]*u;s[T]=M*E+v*w+f*S+p*P}return s}}const Ny=new xr;class Uy extends Bd{interpolate_(e,t,n,i){const s=super.interpolate_(e,t,n,i);return Ny.fromArray(s).normalize().toArray(s),s}}const ti={POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,TRIANGLE_STRIP:5,TRIANGLE_FAN:6},As={5120:Int8Array,5121:Uint8Array,5122:Int16Array,5123:Uint16Array,5125:Uint32Array,5126:Float32Array},Fh={9728:xn,9729:Pn,9984:Nl,9985:no,9986:xs,9987:Ki},Oh={33071:ii,33648:ao,10497:Cs},El={SCALAR:1,VEC2:2,VEC3:3,VEC4:4,MAT2:4,MAT3:9,MAT4:16},Wl={POSITION:"position",NORMAL:"normal",TANGENT:"tangent",TEXCOORD_0:"uv",TEXCOORD_1:"uv1",TEXCOORD_2:"uv2",TEXCOORD_3:"uv3",COLOR_0:"color",WEIGHTS_0:"skinWeight",JOINTS_0:"skinIndex"},ur={scale:"scale",translation:"position",rotation:"quaternion",weights:"morphTargetInfluences"},Fy={CUBICSPLINE:void 0,LINEAR:Ps,STEP:fa},bl={OPAQUE:"OPAQUE",MASK:"MASK",BLEND:"BLEND"};function Oy(r){return r.DefaultMaterial===void 0&&(r.DefaultMaterial=new fr({color:16777215,emissive:0,metalness:1,roughness:1,transparent:!1,depthTest:!0,side:Ji})),r.DefaultMaterial}function Fr(r,e,t){for(const n in t.extensions)r[n]===void 0&&(e.userData.gltfExtensions=e.userData.gltfExtensions||{},e.userData.gltfExtensions[n]=t.extensions[n])}function hr(r,e){e.extras!==void 0&&(typeof e.extras=="object"?Object.assign(r.userData,e.extras):console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, "+e.extras))}function By(r,e,t){let n=!1,i=!1,s=!1;for(let c=0,u=e.length;c<u;c++){const h=e[c];if(h.POSITION!==void 0&&(n=!0),h.NORMAL!==void 0&&(i=!0),h.COLOR_0!==void 0&&(s=!0),n&&i&&s)break}if(!n&&!i&&!s)return Promise.resolve(r);const a=[],o=[],l=[];for(let c=0,u=e.length;c<u;c++){const h=e[c];if(n){const d=h.POSITION!==void 0?t.getDependency("accessor",h.POSITION):r.attributes.position;a.push(d)}if(i){const d=h.NORMAL!==void 0?t.getDependency("accessor",h.NORMAL):r.attributes.normal;o.push(d)}if(s){const d=h.COLOR_0!==void 0?t.getDependency("accessor",h.COLOR_0):r.attributes.color;l.push(d)}}return Promise.all([Promise.all(a),Promise.all(o),Promise.all(l)]).then(function(c){const u=c[0],h=c[1],d=c[2];return n&&(r.morphAttributes.position=u),i&&(r.morphAttributes.normal=h),s&&(r.morphAttributes.color=d),r.morphTargetsRelative=!0,r})}function ky(r,e){if(r.updateMorphTargets(),e.weights!==void 0)for(let t=0,n=e.weights.length;t<n;t++)r.morphTargetInfluences[t]=e.weights[t];if(e.extras&&Array.isArray(e.extras.targetNames)){const t=e.extras.targetNames;if(r.morphTargetInfluences.length===t.length){r.morphTargetDictionary={};for(let n=0,i=t.length;n<i;n++)r.morphTargetDictionary[t[n]]=n}else console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.")}}function zy(r){let e;const t=r.extensions&&r.extensions[Mt.KHR_DRACO_MESH_COMPRESSION];if(t?e="draco:"+t.bufferView+":"+t.indices+":"+Tl(t.attributes):e=r.indices+":"+Tl(r.attributes)+":"+r.mode,r.targets!==void 0)for(let n=0,i=r.targets.length;n<i;n++)e+=":"+Tl(r.targets[n]);return e}function Tl(r){let e="";const t=Object.keys(r).sort();for(let n=0,i=t.length;n<i;n++)e+=t[n]+":"+r[t[n]]+";";return e}function Xl(r){switch(r){case Int8Array:return 1/127;case Uint8Array:return 1/255;case Int16Array:return 1/32767;case Uint16Array:return 1/65535;default:throw new Error("THREE.GLTFLoader: Unsupported normalized accessor component type.")}}function Gy(r){return r.search(/\.jpe?g($|\?)/i)>0||r.search(/^data\:image\/jpeg/)===0?"image/jpeg":r.search(/\.webp($|\?)/i)>0||r.search(/^data\:image\/webp/)===0?"image/webp":"image/png"}const Hy=new Xe;class Vy{constructor(e={},t={}){this.json=e,this.extensions={},this.plugins={},this.options=t,this.cache=new dy,this.associations=new Map,this.primitiveCache={},this.nodeCache={},this.meshCache={refs:{},uses:{}},this.cameraCache={refs:{},uses:{}},this.lightCache={refs:{},uses:{}},this.sourceCache={},this.textureCache={},this.nodeNamesUsed={};let n=!1,i=!1,s=-1;typeof navigator<"u"&&(n=/^((?!chrome|android).)*safari/i.test(navigator.userAgent)===!0,i=navigator.userAgent.indexOf("Firefox")>-1,s=i?navigator.userAgent.match(/Firefox\/([0-9]+)\./)[1]:-1),typeof createImageBitmap>"u"||n||i&&s<98?this.textureLoader=new Kx(this.options.manager):this.textureLoader=new ty(this.options.manager),this.textureLoader.setCrossOrigin(this.options.crossOrigin),this.textureLoader.setRequestHeader(this.options.requestHeader),this.fileLoader=new Fd(this.options.manager),this.fileLoader.setResponseType("arraybuffer"),this.options.crossOrigin==="use-credentials"&&this.fileLoader.setWithCredentials(!0)}setExtensions(e){this.extensions=e}setPlugins(e){this.plugins=e}parse(e,t){const n=this,i=this.json,s=this.extensions;this.cache.removeAll(),this.nodeCache={},this._invokeAll(function(a){return a._markDefs&&a._markDefs()}),Promise.all(this._invokeAll(function(a){return a.beforeRoot&&a.beforeRoot()})).then(function(){return Promise.all([n.getDependencies("scene"),n.getDependencies("animation"),n.getDependencies("camera")])}).then(function(a){const o={scene:a[0][i.scene||0],scenes:a[0],animations:a[1],cameras:a[2],asset:i.asset,parser:n,userData:{}};return Fr(s,o,i),hr(o,i),Promise.all(n._invokeAll(function(l){return l.afterRoot&&l.afterRoot(o)})).then(function(){e(o)})}).catch(t)}_markDefs(){const e=this.json.nodes||[],t=this.json.skins||[],n=this.json.meshes||[];for(let i=0,s=t.length;i<s;i++){const a=t[i].joints;for(let o=0,l=a.length;o<l;o++)e[a[o]].isBone=!0}for(let i=0,s=e.length;i<s;i++){const a=e[i];a.mesh!==void 0&&(this._addNodeRef(this.meshCache,a.mesh),a.skin!==void 0&&(n[a.mesh].isSkinnedMesh=!0)),a.camera!==void 0&&this._addNodeRef(this.cameraCache,a.camera)}}_addNodeRef(e,t){t!==void 0&&(e.refs[t]===void 0&&(e.refs[t]=e.uses[t]=0),e.refs[t]++)}_getNodeRef(e,t,n){if(e.refs[t]<=1)return n;const i=n.clone(),s=(a,o)=>{const l=this.associations.get(a);l!=null&&this.associations.set(o,l);for(const[c,u]of a.children.entries())s(u,o.children[c])};return s(n,i),i.name+="_instance_"+e.uses[t]++,i}_invokeOne(e){const t=Object.values(this.plugins);t.push(this);for(let n=0;n<t.length;n++){const i=e(t[n]);if(i)return i}return null}_invokeAll(e){const t=Object.values(this.plugins);t.unshift(this);const n=[];for(let i=0;i<t.length;i++){const s=e(t[i]);s&&n.push(s)}return n}getDependency(e,t){const n=e+":"+t;let i=this.cache.get(n);if(!i){switch(e){case"scene":i=this.loadScene(t);break;case"node":i=this._invokeOne(function(s){return s.loadNode&&s.loadNode(t)});break;case"mesh":i=this._invokeOne(function(s){return s.loadMesh&&s.loadMesh(t)});break;case"accessor":i=this.loadAccessor(t);break;case"bufferView":i=this._invokeOne(function(s){return s.loadBufferView&&s.loadBufferView(t)});break;case"buffer":i=this.loadBuffer(t);break;case"material":i=this._invokeOne(function(s){return s.loadMaterial&&s.loadMaterial(t)});break;case"texture":i=this._invokeOne(function(s){return s.loadTexture&&s.loadTexture(t)});break;case"skin":i=this.loadSkin(t);break;case"animation":i=this._invokeOne(function(s){return s.loadAnimation&&s.loadAnimation(t)});break;case"camera":i=this.loadCamera(t);break;default:if(i=this._invokeOne(function(s){return s!=this&&s.getDependency&&s.getDependency(e,t)}),!i)throw new Error("Unknown type: "+e);break}this.cache.add(n,i)}return i}getDependencies(e){let t=this.cache.get(e);if(!t){const n=this,i=this.json[e+(e==="mesh"?"es":"s")]||[];t=Promise.all(i.map(function(s,a){return n.getDependency(e,a)})),this.cache.add(e,t)}return t}loadBuffer(e){const t=this.json.buffers[e],n=this.fileLoader;if(t.type&&t.type!=="arraybuffer")throw new Error("THREE.GLTFLoader: "+t.type+" buffer type is not supported.");if(t.uri===void 0&&e===0)return Promise.resolve(this.extensions[Mt.KHR_BINARY_GLTF].body);const i=this.options;return new Promise(function(s,a){n.load(ha.resolveURL(t.uri,i.path),s,void 0,function(){a(new Error('THREE.GLTFLoader: Failed to load buffer "'+t.uri+'".'))})})}loadBufferView(e){const t=this.json.bufferViews[e];return this.getDependency("buffer",t.buffer).then(function(n){const i=t.byteLength||0,s=t.byteOffset||0;return n.slice(s,s+i)})}loadAccessor(e){const t=this,n=this.json,i=this.json.accessors[e];if(i.bufferView===void 0&&i.sparse===void 0){const a=El[i.type],o=As[i.componentType],l=i.normalized===!0,c=new o(i.count*a);return Promise.resolve(new dn(c,a,l))}const s=[];return i.bufferView!==void 0?s.push(this.getDependency("bufferView",i.bufferView)):s.push(null),i.sparse!==void 0&&(s.push(this.getDependency("bufferView",i.sparse.indices.bufferView)),s.push(this.getDependency("bufferView",i.sparse.values.bufferView))),Promise.all(s).then(function(a){const o=a[0],l=El[i.type],c=As[i.componentType],u=c.BYTES_PER_ELEMENT,h=u*l,d=i.byteOffset||0,m=i.bufferView!==void 0?n.bufferViews[i.bufferView].byteStride:void 0,g=i.normalized===!0;let _,f;if(m&&m!==h){const p=Math.floor(d/m),M="InterleavedBuffer:"+i.bufferView+":"+i.componentType+":"+p+":"+i.count;let v=t.cache.get(M);v||(_=new c(o,p*m,i.count*m/u),v=new mx(_,m/u),t.cache.add(M,v)),f=new rc(v,l,d%m/u,g)}else o===null?_=new c(i.count*l):_=new c(o,d,i.count*l),f=new dn(_,l,g);if(i.sparse!==void 0){const p=El.SCALAR,M=As[i.sparse.indices.componentType],v=i.sparse.indices.byteOffset||0,T=i.sparse.values.byteOffset||0,E=new M(a[1],v,i.sparse.count*p),w=new c(a[2],T,i.sparse.count*l);o!==null&&(f=new dn(f.array.slice(),f.itemSize,f.normalized));for(let S=0,P=E.length;S<P;S++){const D=E[S];if(f.setX(D,w[S*l]),l>=2&&f.setY(D,w[S*l+1]),l>=3&&f.setZ(D,w[S*l+2]),l>=4&&f.setW(D,w[S*l+3]),l>=5)throw new Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.")}}return f})}loadTexture(e){const t=this.json,n=this.options,s=t.textures[e].source,a=t.images[s];let o=this.textureLoader;if(a.uri){const l=n.manager.getHandler(a.uri);l!==null&&(o=l)}return this.loadTextureImage(e,s,o)}loadTextureImage(e,t,n){const i=this,s=this.json,a=s.textures[e],o=s.images[t],l=(o.uri||o.bufferView)+":"+a.sampler;if(this.textureCache[l])return this.textureCache[l];const c=this.loadImageSource(t,n).then(function(u){u.flipY=!1,u.name=a.name||o.name||"",u.name===""&&typeof o.uri=="string"&&o.uri.startsWith("data:image/")===!1&&(u.name=o.uri);const d=(s.samplers||{})[a.sampler]||{};return u.magFilter=Fh[d.magFilter]||Pn,u.minFilter=Fh[d.minFilter]||Ki,u.wrapS=Oh[d.wrapS]||Cs,u.wrapT=Oh[d.wrapT]||Cs,i.associations.set(u,{textures:e}),u}).catch(function(){return null});return this.textureCache[l]=c,c}loadImageSource(e,t){const n=this,i=this.json,s=this.options;if(this.sourceCache[e]!==void 0)return this.sourceCache[e].then(h=>h.clone());const a=i.images[e],o=self.URL||self.webkitURL;let l=a.uri||"",c=!1;if(a.bufferView!==void 0)l=n.getDependency("bufferView",a.bufferView).then(function(h){c=!0;const d=new Blob([h],{type:a.mimeType});return l=o.createObjectURL(d),l});else if(a.uri===void 0)throw new Error("THREE.GLTFLoader: Image "+e+" is missing URI and bufferView");const u=Promise.resolve(l).then(function(h){return new Promise(function(d,m){let g=d;t.isImageBitmapLoader===!0&&(g=function(_){const f=new yn(_);f.needsUpdate=!0,d(f)}),t.load(ha.resolveURL(h,s.path),g,void 0,m)})}).then(function(h){return c===!0&&o.revokeObjectURL(l),h.userData.mimeType=a.mimeType||Gy(a.uri),h}).catch(function(h){throw console.error("THREE.GLTFLoader: Couldn't load texture",l),h});return this.sourceCache[e]=u,u}assignTexture(e,t,n,i){const s=this;return this.getDependency("texture",n.index).then(function(a){if(!a)return null;if(n.texCoord!==void 0&&n.texCoord>0&&(a=a.clone(),a.channel=n.texCoord),s.extensions[Mt.KHR_TEXTURE_TRANSFORM]){const o=n.extensions!==void 0?n.extensions[Mt.KHR_TEXTURE_TRANSFORM]:void 0;if(o){const l=s.associations.get(a);a=s.extensions[Mt.KHR_TEXTURE_TRANSFORM].extendTexture(a,o),s.associations.set(a,l)}}return i!==void 0&&(a.colorSpace=i),e[t]=a,a})}assignFinalMaterial(e){const t=e.geometry;let n=e.material;const i=t.attributes.tangent===void 0,s=t.attributes.color!==void 0,a=t.attributes.normal===void 0;if(e.isPoints){const o="PointsMaterial:"+n.uuid;let l=this.cache.get(o);l||(l=new oc,wi.prototype.copy.call(l,n),l.color.copy(n.color),l.map=n.map,l.sizeAttenuation=!1,this.cache.add(o,l)),n=l}else if(e.isLine){const o="LineBasicMaterial:"+n.uuid;let l=this.cache.get(o);l||(l=new Rd,wi.prototype.copy.call(l,n),l.color.copy(n.color),l.map=n.map,this.cache.add(o,l)),n=l}if(i||s||a){let o="ClonedMaterial:"+n.uuid+":";i&&(o+="derivative-tangents:"),s&&(o+="vertex-colors:"),a&&(o+="flat-shading:");let l=this.cache.get(o);l||(l=n.clone(),s&&(l.vertexColors=!0),a&&(l.flatShading=!0),i&&(l.normalScale&&(l.normalScale.y*=-1),l.clearcoatNormalScale&&(l.clearcoatNormalScale.y*=-1)),this.cache.add(o,l),this.associations.set(l,this.associations.get(n))),n=l}e.material=n}getMaterialType(){return fr}loadMaterial(e){const t=this,n=this.json,i=this.extensions,s=n.materials[e];let a;const o={},l=s.extensions||{},c=[];if(l[Mt.KHR_MATERIALS_UNLIT]){const h=i[Mt.KHR_MATERIALS_UNLIT];a=h.getMaterialType(),c.push(h.extendParams(o,s,t))}else{const h=s.pbrMetallicRoughness||{};if(o.color=new $e(1,1,1),o.opacity=1,Array.isArray(h.baseColorFactor)){const d=h.baseColorFactor;o.color.setRGB(d[0],d[1],d[2],Tn),o.opacity=d[3]}h.baseColorTexture!==void 0&&c.push(t.assignTexture(o,"map",h.baseColorTexture,Fn)),o.metalness=h.metallicFactor!==void 0?h.metallicFactor:1,o.roughness=h.roughnessFactor!==void 0?h.roughnessFactor:1,h.metallicRoughnessTexture!==void 0&&(c.push(t.assignTexture(o,"metalnessMap",h.metallicRoughnessTexture)),c.push(t.assignTexture(o,"roughnessMap",h.metallicRoughnessTexture))),a=this._invokeOne(function(d){return d.getMaterialType&&d.getMaterialType(e)}),c.push(Promise.all(this._invokeAll(function(d){return d.extendMaterialParams&&d.extendMaterialParams(e,o)})))}s.doubleSided===!0&&(o.side=bi);const u=s.alphaMode||bl.OPAQUE;if(u===bl.BLEND?(o.transparent=!0,o.depthWrite=!1):(o.transparent=!1,u===bl.MASK&&(o.alphaTest=s.alphaCutoff!==void 0?s.alphaCutoff:.5)),s.normalTexture!==void 0&&a!==Hr&&(c.push(t.assignTexture(o,"normalMap",s.normalTexture)),o.normalScale=new be(1,1),s.normalTexture.scale!==void 0)){const h=s.normalTexture.scale;o.normalScale.set(h,h)}if(s.occlusionTexture!==void 0&&a!==Hr&&(c.push(t.assignTexture(o,"aoMap",s.occlusionTexture)),s.occlusionTexture.strength!==void 0&&(o.aoMapIntensity=s.occlusionTexture.strength)),s.emissiveFactor!==void 0&&a!==Hr){const h=s.emissiveFactor;o.emissive=new $e().setRGB(h[0],h[1],h[2],Tn)}return s.emissiveTexture!==void 0&&a!==Hr&&c.push(t.assignTexture(o,"emissiveMap",s.emissiveTexture,Fn)),Promise.all(c).then(function(){const h=new a(o);return s.name&&(h.name=s.name),hr(h,s),t.associations.set(h,{materials:e}),s.extensions&&Fr(i,h,s),h})}createUniqueName(e){const t=Nt.sanitizeNodeName(e||"");return t in this.nodeNamesUsed?t+"_"+ ++this.nodeNamesUsed[t]:(this.nodeNamesUsed[t]=0,t)}loadGeometries(e){const t=this,n=this.extensions,i=this.primitiveCache;function s(o){return n[Mt.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(o,t).then(function(l){return Bh(l,o,t)})}const a=[];for(let o=0,l=e.length;o<l;o++){const c=e[o],u=zy(c),h=i[u];if(h)a.push(h.promise);else{let d;c.extensions&&c.extensions[Mt.KHR_DRACO_MESH_COMPRESSION]?d=s(c):d=Bh(new kn,c,t),i[u]={primitive:c,promise:d},a.push(d)}}return Promise.all(a)}loadMesh(e){const t=this,n=this.json,i=this.extensions,s=n.meshes[e],a=s.primitives,o=[];for(let l=0,c=a.length;l<c;l++){const u=a[l].material===void 0?Oy(this.cache):this.getDependency("material",a[l].material);o.push(u)}return o.push(t.loadGeometries(a)),Promise.all(o).then(function(l){const c=l.slice(0,l.length-1),u=l[l.length-1],h=[];for(let m=0,g=u.length;m<g;m++){const _=u[m],f=a[m];let p;const M=c[m];if(f.mode===ti.TRIANGLES||f.mode===ti.TRIANGLE_STRIP||f.mode===ti.TRIANGLE_FAN||f.mode===void 0)p=s.isSkinnedMesh===!0?new _x(_,M):new en(_,M),p.isSkinnedMesh===!0&&p.normalizeSkinWeights(),f.mode===ti.TRIANGLE_STRIP?p.geometry=Nh(p.geometry,id):f.mode===ti.TRIANGLE_FAN&&(p.geometry=Nh(p.geometry,Ul));else if(f.mode===ti.LINES)p=new yx(_,M);else if(f.mode===ti.LINE_STRIP)p=new ac(_,M);else if(f.mode===ti.LINE_LOOP)p=new Mx(_,M);else if(f.mode===ti.POINTS)p=new Cd(_,M);else throw new Error("THREE.GLTFLoader: Primitive mode unsupported: "+f.mode);Object.keys(p.geometry.morphAttributes).length>0&&ky(p,s),p.name=t.createUniqueName(s.name||"mesh_"+e),hr(p,s),f.extensions&&Fr(i,p,f),t.assignFinalMaterial(p),h.push(p)}for(let m=0,g=h.length;m<g;m++)t.associations.set(h[m],{meshes:e,primitives:m});if(h.length===1)return s.extensions&&Fr(i,h[0],s),h[0];const d=new gi;s.extensions&&Fr(i,d,s),t.associations.set(d,{meshes:e});for(let m=0,g=h.length;m<g;m++)d.add(h[m]);return d})}loadCamera(e){let t;const n=this.json.cameras[e],i=n[n.type];if(!i){console.warn("THREE.GLTFLoader: Missing camera parameters.");return}return n.type==="perspective"?t=new On(ad.radToDeg(i.yfov),i.aspectRatio||1,i.znear||1,i.zfar||2e6):n.type==="orthographic"&&(t=new nc(-i.xmag,i.xmag,i.ymag,-i.ymag,i.znear,i.zfar)),n.name&&(t.name=this.createUniqueName(n.name)),hr(t,n),Promise.resolve(t)}loadSkin(e){const t=this.json.skins[e],n=[];for(let i=0,s=t.joints.length;i<s;i++)n.push(this._loadNodeShallow(t.joints[i]));return t.inverseBindMatrices!==void 0?n.push(this.getDependency("accessor",t.inverseBindMatrices)):n.push(null),Promise.all(n).then(function(i){const s=i.pop(),a=i,o=[],l=[];for(let c=0,u=a.length;c<u;c++){const h=a[c];if(h){o.push(h);const d=new Xe;s!==null&&d.fromArray(s.array,c*16),l.push(d)}else console.warn('THREE.GLTFLoader: Joint "%s" could not be found.',t.joints[c])}return new sc(o,l)})}loadAnimation(e){const t=this.json,n=this,i=t.animations[e],s=i.name?i.name:"animation_"+e,a=[],o=[],l=[],c=[],u=[];for(let h=0,d=i.channels.length;h<d;h++){const m=i.channels[h],g=i.samplers[m.sampler],_=m.target,f=_.node,p=i.parameters!==void 0?i.parameters[g.input]:g.input,M=i.parameters!==void 0?i.parameters[g.output]:g.output;_.node!==void 0&&(a.push(this.getDependency("node",f)),o.push(this.getDependency("accessor",p)),l.push(this.getDependency("accessor",M)),c.push(g),u.push(_))}return Promise.all([Promise.all(a),Promise.all(o),Promise.all(l),Promise.all(c),Promise.all(u)]).then(function(h){const d=h[0],m=h[1],g=h[2],_=h[3],f=h[4],p=[];for(let M=0,v=d.length;M<v;M++){const T=d[M],E=m[M],w=g[M],S=_[M],P=f[M];if(T===void 0)continue;T.updateMatrix&&T.updateMatrix();const D=n._createAnimationTracks(T,E,w,S,P);if(D)for(let x=0;x<D.length;x++)p.push(D[x])}return new Hx(s,void 0,p)})}createNodeMesh(e){const t=this.json,n=this,i=t.nodes[e];return i.mesh===void 0?null:n.getDependency("mesh",i.mesh).then(function(s){const a=n._getNodeRef(n.meshCache,i.mesh,s);return i.weights!==void 0&&a.traverse(function(o){if(o.isMesh)for(let l=0,c=i.weights.length;l<c;l++)o.morphTargetInfluences[l]=i.weights[l]}),a})}loadNode(e){const t=this.json,n=this,i=t.nodes[e],s=n._loadNodeShallow(e),a=[],o=i.children||[];for(let c=0,u=o.length;c<u;c++)a.push(n.getDependency("node",o[c]));const l=i.skin===void 0?Promise.resolve(null):n.getDependency("skin",i.skin);return Promise.all([s,Promise.all(a),l]).then(function(c){const u=c[0],h=c[1],d=c[2];d!==null&&u.traverse(function(m){m.isSkinnedMesh&&m.bind(d,Hy)});for(let m=0,g=h.length;m<g;m++)u.add(h[m]);return u})}_loadNodeShallow(e){const t=this.json,n=this.extensions,i=this;if(this.nodeCache[e]!==void 0)return this.nodeCache[e];const s=t.nodes[e],a=s.name?i.createUniqueName(s.name):"",o=[],l=i._invokeOne(function(c){return c.createNodeMesh&&c.createNodeMesh(e)});return l&&o.push(l),s.camera!==void 0&&o.push(i.getDependency("camera",s.camera).then(function(c){return i._getNodeRef(i.cameraCache,s.camera,c)})),i._invokeAll(function(c){return c.createNodeAttachment&&c.createNodeAttachment(e)}).forEach(function(c){o.push(c)}),this.nodeCache[e]=Promise.all(o).then(function(c){let u;if(s.isBone===!0?u=new Td:c.length>1?u=new gi:c.length===1?u=c[0]:u=new tn,u!==c[0])for(let h=0,d=c.length;h<d;h++)u.add(c[h]);if(s.name&&(u.userData.name=s.name,u.name=a),hr(u,s),s.extensions&&Fr(n,u,s),s.matrix!==void 0){const h=new Xe;h.fromArray(s.matrix),u.applyMatrix4(h)}else s.translation!==void 0&&u.position.fromArray(s.translation),s.rotation!==void 0&&u.quaternion.fromArray(s.rotation),s.scale!==void 0&&u.scale.fromArray(s.scale);return i.associations.has(u)||i.associations.set(u,{}),i.associations.get(u).nodes=e,u}),this.nodeCache[e]}loadScene(e){const t=this.extensions,n=this.json.scenes[e],i=this,s=new gi;n.name&&(s.name=i.createUniqueName(n.name)),hr(s,n),n.extensions&&Fr(t,s,n);const a=n.nodes||[],o=[];for(let l=0,c=a.length;l<c;l++)o.push(i.getDependency("node",a[l]));return Promise.all(o).then(function(l){for(let u=0,h=l.length;u<h;u++)s.add(l[u]);const c=u=>{const h=new Map;for(const[d,m]of i.associations)(d instanceof wi||d instanceof yn)&&h.set(d,m);return u.traverse(d=>{const m=i.associations.get(d);m!=null&&h.set(d,m)}),h};return i.associations=c(s),s})}_createAnimationTracks(e,t,n,i,s){const a=[],o=e.name?e.name:e.uuid,l=[];ur[s.path]===ur.weights?e.traverse(function(d){d.morphTargetInfluences&&l.push(d.name?d.name:d.uuid)}):l.push(o);let c;switch(ur[s.path]){case ur.weights:c=Ns;break;case ur.rotation:c=qr;break;case ur.position:case ur.scale:c=Us;break;default:n.itemSize===1?c=Ns:c=Us;break}const u=i.interpolation!==void 0?Fy[i.interpolation]:Ps,h=this._getArrayFromAccessor(n);for(let d=0,m=l.length;d<m;d++){const g=new c(l[d]+"."+ur[s.path],t.array,h,u);i.interpolation==="CUBICSPLINE"&&this._createCubicSplineTrackInterpolant(g),a.push(g)}return a}_getArrayFromAccessor(e){let t=e.array;if(e.normalized){const n=Xl(t.constructor),i=new Float32Array(t.length);for(let s=0,a=t.length;s<a;s++)i[s]=t[s]*n;t=i}return t}_createCubicSplineTrackInterpolant(e){e.createInterpolant=function(n){const i=this instanceof qr?Uy:Bd;return new i(this.times,this.values,this.getValueSize()/3,n)},e.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline=!0}}function Wy(r,e,t){const n=e.attributes,i=new Ci;if(n.POSITION!==void 0){const o=t.json.accessors[n.POSITION],l=o.min,c=o.max;if(l!==void 0&&c!==void 0){if(i.set(new I(l[0],l[1],l[2]),new I(c[0],c[1],c[2])),o.normalized){const u=Xl(As[o.componentType]);i.min.multiplyScalar(u),i.max.multiplyScalar(u)}}else{console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");return}}else return;const s=e.targets;if(s!==void 0){const o=new I,l=new I;for(let c=0,u=s.length;c<u;c++){const h=s[c];if(h.POSITION!==void 0){const d=t.json.accessors[h.POSITION],m=d.min,g=d.max;if(m!==void 0&&g!==void 0){if(l.setX(Math.max(Math.abs(m[0]),Math.abs(g[0]))),l.setY(Math.max(Math.abs(m[1]),Math.abs(g[1]))),l.setZ(Math.max(Math.abs(m[2]),Math.abs(g[2]))),d.normalized){const _=Xl(As[d.componentType]);l.multiplyScalar(_)}o.max(l)}else console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.")}}i.expandByVector(o)}r.boundingBox=i;const a=new Li;i.getCenter(a.center),a.radius=i.min.distanceTo(i.max)/2,r.boundingSphere=a}function Bh(r,e,t){const n=e.attributes,i=[];function s(a,o){return t.getDependency("accessor",a).then(function(l){r.setAttribute(o,l)})}for(const a in n){const o=Wl[a]||a.toLowerCase();o in r.attributes||i.push(s(n[a],o))}if(e.indices!==void 0&&!r.index){const a=t.getDependency("accessor",e.indices).then(function(o){r.setIndex(o)});i.push(a)}return Pt.workingColorSpace!==Tn&&"COLOR_0"in n&&console.warn(`THREE.GLTFLoader: Converting vertex colors from "srgb-linear" to "${Pt.workingColorSpace}" not supported.`),hr(r,e),Wy(r,e,t),Promise.all(i).then(function(){return e.targets!==void 0?By(r,e.targets,t):r})}const Xy=[2.2945,48.8584],qy=15,Yy=70,jy=-20,Ky="https://tiles.openfreemap.org/styles/liberty",$y={tiles:["https://s3.amazonaws.com/elevation-tiles-prod/terrarium/{z}/{x}/{y}.png"],encoding:"terrarium",tileSize:256,maxzoom:15,exaggeration:1.4},Zy={sun:[0,90]},Jy={minZoom:4,opacity:.88,heightField:"render_height",baseField:"render_min_height",lowColor:"#cfc7b8",highColor:"#ff5c5c",highRiseMeters:40},Qy={sourceLayer:"landcover",landcoverClasses:["wood","grass"],greenColor:"#2f9e44",greenOpacity:.5,trees:{count:220,radius:220,minScale:.7,maxScale:1.6,canopyColor:"#2f7d32",trunkColor:"#6b4423"}},eM={start:[2.2945,48.8584],steerSign:1,character:{primitive:"capsule",radius:3,height:10,color:"#ff5c5c"},follow:{bearingSign:1},street:{providers:["mask"],mask:{sizePx:64,zoom:19,sampleHz:20},friction:{asphalt:1,off:.4}},cameras:[{id:"fps",label:"First-Person · FPS",icon:"👁️",pitch:90,zoom:21,bearingOffset:0,modelBoost:1,targetLift:"eye",speedZoomMult:1},{id:"ots",label:"Third-Person · Over-the-Shoulder",icon:"🎯",pitch:78,zoom:20,bearingOffset:8,modelBoost:1,targetLift:0,speedZoomMult:.4},{id:"chase",label:"Third-Person · Chase-Cam",icon:"🎮",pitch:55,zoom:17.5,bearingOffset:0,modelBoost:1,targetLift:0,speedZoomMult:1.6},{id:"iso",label:"Top-Down · 2.5D",icon:"🔺",pitch:50,zoom:18,bearingOffset:0,modelBoost:2,targetLift:0,speedZoomMult:1},{id:"birdseye",label:"Top-Down · Bird's-Eye",icon:"🐦",pitch:25,zoom:16.8,bearingOffset:0,modelBoost:6,targetLift:0,speedZoomMult:1},{id:"god",label:"Top-Down · God-View",icon:"🛰️",pitch:0,zoom:15,bearingOffset:0,modelBoost:24,targetLift:0,speedZoomMult:1},{id:"side",label:"Side-Scrolling",icon:"🍄",pitch:75,zoom:18.4,bearingOffset:90,modelBoost:1,targetLift:0,speedZoomMult:1}],defaultCamera:"chase",camera:{refSize:4.5,minZoom:3,maxZoom:20,speedZoom:.6,fovBase:55,fovMax:72,rollMax:4,springTau:.12},cockpit:{defaultVisible:!0,views:["cockpit","chase","orbit"],viewCycle:["fps","chase","god"]},flightControls:{mode:2,sticky_throttle:["airplane"],expo:.3},game:{maxLandSink:3,maxLandBank:.25,maxLandPitch:.3,maxLandSpeed:4,maxLandSpeedFwd:75,needsGear:!0,crashRespawnDelay:2,minAirborneAGL:3},joystick:{scale:.5,look:{yawRate:120,pitchRate:90,mapMaxPitch:85,skyMaxPitch:175,minPitch:-85,mouseSensitivity:.18},deadzone:.06,mouseLook:!0},defaultDriver:"walk",drivers:[{id:"walk",label:"Walk",icon:"🚶",control:"character",speed:{idle:0,min:0,cruise:8,max:14},turnRate:180,accel:8,size:1.8,turnAtMax:1,model:{glb:"man.glb",scale:1,yaw:0,y:0},altitude:{model:"elevation",default:0,min:0,max:0,climbRate:0,eyeHeight:1.7}},{id:"cycle",label:"Cycle",icon:"🚴",control:"vehicle",vehicle:{wheelbase:1.05,maxSteer:.785,steerRate:4,steerReturn:7,steerSpeedFalloff:.4,power:1.2,brakeDecel:4,drag:.0135,rollResist:.2,reverseMaxSpeed:1.5,grip:6},speed:{idle:0,min:0,cruise:20,max:34},turnRate:120,accel:2.5,size:1.8,turnAtMax:.6,model:{glb:"vehicles/bike.glb",scale:1,yaw:0,y:0},altitude:{model:"elevation",default:0,min:0,max:0,climbRate:0,eyeHeight:1.5}},{id:"car",label:"Car",icon:"🚗",control:"vehicle",vehicle:{wheelbase:2.7,maxSteer:.61,steerRate:3.5,steerReturn:6,steerSpeedFalloff:.25,power:4,brakeDecel:8,drag:.0036,rollResist:.3,reverseMaxSpeed:6,grip:8.5},speed:{idle:0,min:0,cruise:50,max:120},turnRate:90,accel:.8,size:4.5,turnAtMax:.35,model:{glb:"city/car.glb",scale:1,yaw:0,y:0},altitude:{model:"elevation",default:0,min:0,max:0,climbRate:0,eyeHeight:1.6}},{id:"sail",label:"Sail",icon:"⛵",control:"character",speed:{idle:0,min:0,cruise:28,max:45},turnRate:30,accel:.25,size:10,turnAtMax:.5,model:{glb:"vehicles/sailboat.glb",scale:1,yaw:0,y:0},altitude:{model:"elevation",default:0,min:0,max:0,climbRate:0,eyeHeight:2.5}},{id:"drone",label:"Drone",icon:"🛸",control:"flight",speed:{idle:0,min:0,cruise:40,max:90},turnRate:150,accel:1.5,size:2.5,turnAtMax:.8,model:{glb:"vehicles/drone.glb",scale:1,yaw:0,y:0},altitude:{model:"elevation",default:120,min:0,max:800,climbRate:6,eyeHeight:1},cockpitEyeHeight:.2,flight:{model:"drone",maxTilt:.6,tiltRate:4,tiltReturn:6,dragK:.02,maxSpeed:25,yawRate:2.2,maxClimbRate:6,climbAccel:8,altHoldDamp:4,batteryDrain:.0015,batteryLimp:.15,maxG:2.5,gpwsPullup:25,gpwsCaution:80,gpwsSinkRate:4}},{id:"helicopter",label:"Helicopter",icon:"🚁",control:"flight",speed:{idle:0,min:0,cruise:70,max:180},turnRate:90,accel:.7,size:14,turnAtMax:.5,model:{glb:"vehicles/helicopter.glb",scale:1,yaw:0,y:0},altitude:{model:"elevation",default:300,min:0,max:3e3,climbRate:8,eyeHeight:2},cockpitEyeHeight:1.8,flight:{model:"helicopter",hoverCollective:.5,collectivePower:14,vDamp:1.2,maxVspeed:12,translationalGain:.35,translationalSpeed:12,groundEffectGain:.25,rotorDiameter:14,maxPitch:.35,pitchRate:.9,maxBank:.6,rollRate:1.2,dragK:.0025,maxSpeed:50,maxRearSpeed:8,pedalYawRate:.9,rotorRpmNominal:400,vne:90,maxG:3,gpwsPullup:60,gpwsCaution:200,gpwsSinkRate:6}},{id:"airplane",label:"Airplane",icon:"✈️",control:"flight",speed:{idle:220,min:180,cruise:450,max:900},turnRate:25,accel:.15,size:38,turnAtMax:.4,model:{glb:"vehicles/airplane.glb",scale:1,yaw:0,y:0},altitude:{model:"elevation",default:1200,min:150,max:12e3,climbRate:15,eyeHeight:3},cockpitEyeHeight:2.2,flight:{model:"airplane",maxThrust:12,stallSpeed:45,vne:280,maxBank:1.05,rollRate:1.6,rollReturn:.8,pitchRate:.7,maxPitch:.52,dragK:42e-5,inducedK:9,stallSink:.35,rudderYawRate:.12,brakeDecel:3,gearDragK:2e-4,flapDragK:4e-4,flapStallReduction:.25,maxG:4.5,gpwsPullup:150,gpwsCaution:450,gpwsSinkRate:8}},{id:"constellation",label:"Constellation",icon:"🌌",control:"character",speed:{idle:0,min:0,cruise:0,max:0},turnRate:10,accel:2,size:4.5,turnAtMax:1,model:{glb:"vehicles/satellite.glb",scale:1,yaw:0,y:0},altitude:{model:"zoom",default:4e5,min:2e5,max:2e7,climbRate:5e4,eyeHeight:0},orbitZoom:{refAltitude:4e5,refZoom:3.2},globe:!0}],assetsBase:"https://cdn.jsdelivr.net/gh/diegonmarcos/front-assets-cdn@main/b-Projects/galaxy/static/assets/models/",keys:{forward:["w"],back:["s"],left:["a"],right:["d"],up:["q","+","="],down:["e","-","_"],cameraNext:[","],cameraPrev:["["],driverNext:[".",">"],driverPrev:["]"]},altitudeFrame:"agl"},_n={center:Xy,zoom:qy,pitch:Yy,bearing:jy,basemap:Ky,terrain:$y,sky:Zy,buildings:Jy,nature:Qy,rider:eM},Qe={steer:0,throttle:0,dist:.14,pitch:.5,yaw:0,yawRate:0,pitchRate:0,moveX:0,moveY:0,galaxy:0,climb:0,climbKeys:0,climbPointer:0,climbStick:0,active:!1};function Al(){const r=Qe.climbKeys+Qe.climbPointer+Qe.climbStick;return Math.max(-1,Math.min(1,r))}const Ai={move:null,look:null,drive:null};function tM(r){const e=Symbol(r);return Ai[r]&&console.warn(`freeInput: channel "${r}" claimed while already owned`),Ai[r]=e,e}function nM(r,e){Ai[r]===e&&(Ai[r]=null)}function iM(r,e){return Ai[r]===e}function rM(r,e,t,n){let i=Math.hypot(e.moveX,e.moveY);if(i<(t.deadzone??0)&&(i=0),i>0){let d=(e.camBearing+Math.atan2(e.moveX,e.moveY)-r.heading)%(2*Math.PI);if(d>Math.PI&&(d-=2*Math.PI),d<-Math.PI&&(d+=2*Math.PI),t.turn!=null){const m=t.speedRef&&t.speedRef>0?Math.min(1,Math.abs(r.speed??0)/t.speedRef):0,g=t.turnAtMax==null?1:t.turnAtMax+(1-t.turnAtMax)*(1-m),_=t.turn*g*n;d=Math.max(-_,Math.min(_,d))}r.heading+=d}const s=Math.sin(r.heading),a=-Math.cos(r.heading);let o;if(i<=0)o=t.idle??t.min;else{const h=Math.min(i,1);o=t.cruise==null?t.min+h*(t.max-t.min):h<=.5?t.min+h/.5*(t.cruise-t.min):t.cruise+(h-.5)/.5*(t.max-t.cruise)}if(t.accel!=null){const h=1-Math.exp(-t.accel*n),d=r.speed??0;r.speed=d+(o-d)*h}else r.speed=o;const l=(r.speed??o)*n,c=t.minAlt??0,u=t.maxAlt??1/0;return r.altitude=Math.min(u,Math.max(c,(r.altitude??0)+(t.lift!=null?(e.climb??0)*t.lift:0)*n)),{heading:r.heading,forwardX:s,forwardZ:a,dForward:l,altitude:r.altitude??0}}function sM(r,e,t,n){const i=t.friction??1,s=Math.min(1,Math.abs(r.speed??0)/t.maxSpeed),a=t.maxSteer*(t.steerSpeedFalloff+(1-t.steerSpeedFalloff)*(1-s)),o=Math.max(-1,Math.min(1,e.steerAxis)),l=r.steer??0;let c;if(o!==0){const S=o*a,P=t.steerRate*n;c=S>l?Math.min(l+P,S):Math.max(l-P,S)}else{const S=t.steerReturn*n;c=l>0?Math.max(0,l-S):Math.min(0,l+S)}r.steer=Math.max(-a,Math.min(a,c));const u=r.speed??0,h=Math.max(0,Math.min(1,e.throttle)),d=Math.max(0,Math.min(1,e.brake)),m=h===0&&d>0&&u<=0;let g=h*t.power*i;if(m)g-=d*t.brakeDecel;else{const S=Math.sign(u);g-=d*t.brakeDecel*S,g-=t.drag*u*Math.abs(u),g-=t.rollResist*S}let _=u+g*n;m||(u>0&&_<0&&(_=0),u<0&&_>0&&(_=0)),_=Math.max(-t.reverseMaxSpeed,Math.min(t.maxSpeed,_)),r.speed=_;let f=r.speed*Math.tan(r.steer)/t.wheelbase;const p=t.grip*i,M=Math.abs(f*r.speed);let v=0;if(M>p&&M>0){const S=p/M;v=1-S,f*=S}r.heading+=f*n;const T=Math.sin(r.heading),E=-Math.cos(r.heading),w=r.speed*n;return{heading:r.heading,forwardX:T,forwardZ:E,dForward:w,speed:r.speed,steer:r.steer,yawRate:f,slip:v}}const Fs=9.80665,xt=(r,e,t)=>Math.min(t,Math.max(e,r)),rt=r=>r!=null&&Number.isFinite(r)?r:0,fi=(r,e,t)=>{const n=e-r,i=Math.abs(t);return Math.abs(n)<=i?e:r+Math.sign(n)*i},_c=(r,e,t,n,i)=>r<t&&e<-i?"pullup":r<n?"caution":"none";function kd(r){return Math.exp(-rt(r)/8500)}function kh(r,e,t,n){const i=rt(n.dt),s=rt(n.groundElev),a=xt(rt(e.pitchAxis),-1,1),o=xt(rt(e.rollAxis),-1,1),l=xt(rt(e.yawAxis),-1,1),c=xt(rt(e.throttle),0,1),u=xt(rt(e.flaps),0,1),h=xt(rt(e.brake),0,1),d=!!e.gearDown,m=rt(r.altASL),g=kd(m),_=Math.max(0,rt(r.speed)),f=_*Math.sqrt(g),p=t.stallSpeed*(1-u*t.flapStallReduction),M=f<p,v=xt((f-.6*p)/Math.max(1e-6,.4*p),.15,1),T=xt(a*t.maxPitch,-t.maxPitch,t.maxPitch);let E=xt(fi(rt(r.pitch),T,t.pitchRate*v*i),-t.maxPitch,t.maxPitch),w;if(Math.abs(o)<.05)w=fi(rt(r.bank),0,t.rollReturn*i);else{const K=xt(o*t.maxBank,-t.maxBank,t.maxBank);w=fi(rt(r.bank),K,t.rollRate*v*i)}w=xt(w,-t.maxBank,t.maxBank);const S=c*t.maxThrust*g,P=t.dragK*_*_+t.inducedK/(_*_+1)+(d?t.gearDragK:0)+u*t.flapDragK;let D=_+(S-P-Fs*Math.sin(E)-h*t.brakeDecel)*i;D=Math.max(0,D),M&&(E-=t.stallSink*i);const x=(D>1?Fs*Math.tan(w)/D:0)+l*t.rudderYawRate*v,b=rt(r.heading)+x*i,U=D*Math.sin(E)-(M?t.stallSink:0),j=m+U*i,L=xt(1/Math.max(Math.cos(w),.05),0,t.maxG),F=f>t.vne;r.heading=b,r.bank=w,r.pitch=E,r.speed=D,r.vspeed=U,r.altASL=j;const k=Math.max(0,j-s);return{speed:D,ias:f,altAGL:k,altASL:j,vspeed:U,heading:b,bank:w,pitch:E,gForce:L,throttle:c,stall:M,overspeed:F,gpws:_c(k,U,t.gpwsPullup,t.gpwsCaution,t.gpwsSinkRate),gearDown:d,flaps:u,rotorRpm:null,torque:null,battery:null,altHold:null}}function aM(r,e,t,n){const i=rt(n.dt),s=rt(n.groundElev),a=xt(rt(e.pitchAxis),-1,1),o=xt(rt(e.rollAxis),-1,1),l=xt(rt(e.yawAxis),-1,1),c=xt(rt(e.throttle),0,1),u=xt(rt(e.flaps),0,1),h=!!e.gearDown,d=rt(r.altASL),m=kd(d),g=Math.max(0,d-s),_=rt(r.speed),f=1+t.translationalGain*Math.min(1,Math.abs(_)/Math.max(1e-6,t.translationalSpeed)),p=1+t.groundEffectGain*Math.max(0,1-g/Math.max(1e-6,t.rotorDiameter)),M=(c-t.hoverCollective)*t.collectivePower*m*f*p;let v=rt(r.vspeed)+M*i;v*=Math.max(0,1-t.vDamp*i),v=xt(v,-t.maxVspeed,t.maxVspeed);const T=d+v*i,E=xt(a*t.maxPitch,-t.maxPitch,t.maxPitch),w=xt(fi(rt(r.pitch),E,t.pitchRate*i),-t.maxPitch,t.maxPitch);let S=_+(-Fs*Math.tan(w)-t.dragK*_*Math.abs(_))*i;S=xt(S,-t.maxRearSpeed,t.maxSpeed);const P=xt(o*t.maxBank,-t.maxBank,t.maxBank),D=xt(fi(rt(r.bank),P,t.rollRate*i),-t.maxBank,t.maxBank),x=l*t.pedalYawRate+(S>1?Fs*Math.tan(D)/S:0),b=rt(r.heading)+x*i,U=t.rotorRpmNominal*(.85+.15*c),j=xt(c*.7+Math.min(1,Math.abs(M)/Math.max(1e-6,t.collectivePower))*.3,0,1),L=xt(1/Math.max(Math.cos(D),.05),0,t.maxG),F=Math.abs(S),k=F>t.vne;r.pitch=w,r.bank=D,r.heading=b,r.speed=S,r.vspeed=v,r.altASL=T;const K=Math.max(0,T-s);return{speed:F,ias:F,altAGL:K,altASL:T,vspeed:v,heading:b,bank:D,pitch:w,gForce:L,throttle:c,stall:!1,overspeed:k,gpws:_c(K,v,t.gpwsPullup,t.gpwsCaution,t.gpwsSinkRate),gearDown:h,flaps:u,rotorRpm:U,torque:j,battery:null,altHold:null}}function oM(r,e,t,n){const i=rt(n.dt),s=rt(n.groundElev),a=xt(rt(e.pitchAxis),-1,1),o=xt(rt(e.rollAxis),-1,1),l=xt(rt(e.yawAxis),-1,1),c=xt(rt(e.climbAxis),-1,1),u=xt(rt(e.flaps),0,1),h=!!e.gearDown,d=xt(rt(r.battery??1),0,1),m=d<t.batteryLimp,g=t.maxSpeed*(m?.4:1),_=t.maxClimbRate*(m?.4:1),f=xt(a*t.maxTilt,-t.maxTilt,t.maxTilt),p=Math.abs(a)<.05?fi(rt(r.pitch),0,t.tiltReturn*i):xt(fi(rt(r.pitch),f,t.tiltRate*i),-t.maxTilt,t.maxTilt),M=xt(o*t.maxTilt,-t.maxTilt,t.maxTilt),v=Math.abs(o)<.05?fi(rt(r.bank),0,t.tiltReturn*i):xt(fi(rt(r.bank),M,t.tiltRate*i),-t.maxTilt,t.maxTilt),T=rt(r.heading)+l*t.yawRate*i,E=-Fs*Math.tan(p),w=Fs*Math.tan(v),S=Math.sin(T),P=Math.cos(T),D=Math.cos(T),x=-Math.sin(T);let b=rt(r.velX)+(E*S+w*D)*i,U=rt(r.velZ)+(E*P+w*x)*i;b-=t.dragK*Math.abs(b)*b*i,U-=t.dragK*Math.abs(U)*U*i;const j=Math.hypot(b,U);if(j>g&&j>0){const He=g/j;b*=He,U*=He}const L=Math.hypot(b,U);let F=rt(r.vspeed),k;Math.abs(c)<.05?(F=fi(F,0,t.altHoldDamp*i),k=!0):(F=fi(F,c*_,t.climbAccel*i),k=!1);const K=rt(r.altASL)+F*i,$=xt(Math.max(Math.abs(a),Math.abs(o),Math.abs(c)),0,1),Y=xt(d-t.batteryDrain*(.3+.7*$)*i,0,1),re=Math.max(Math.abs(p),Math.abs(v)),le=xt(1/Math.max(Math.cos(re),.05),0,t.maxG);r.pitch=p,r.bank=v,r.heading=T,r.velX=b,r.velZ=U,r.speed=L,r.vspeed=F,r.altASL=K,r.battery=Y;const ve=Math.max(0,K-s);return{speed:L,ias:L,altAGL:ve,altASL:K,vspeed:F,heading:T,bank:v,pitch:p,gForce:le,throttle:$,stall:!1,overspeed:!1,gpws:_c(ve,F,t.gpwsPullup,t.gpwsCaution,t.gpwsSinkRate),gearDown:h,flaps:u,rotorRpm:null,torque:null,battery:Y,altHold:k}}const ni=r=>r!=null&&Number.isFinite(r)?r:0;function lM(r,e){const t=ni(r.vspeed),n=ni(r.bank),i=ni(r.pitch),s=ni(r.speed),a=!!r.gearDown,o=e.needsGear?e.maxLandSpeedFwd:e.maxLandSpeed;return Math.abs(t)<=e.maxLandSink&&Math.abs(n)<=e.maxLandBank&&Math.abs(i)<=e.maxLandPitch&&s<=o&&(!e.needsGear||a)?"good":"crash"}function cM(r,e,t,n){const i=ni(n),s=ni(e.altAGL),a=ni(t.minAirborneAGL);switch(r.phase){case"spawn":{s>a&&(r.phase="flying",r.airborneTime=0);break}case"flying":{r.airborneTime=ni(r.airborneTime)+i,s<=.5&&r.airborneTime>2&&(lM(e,t)==="good"?(r.phase="landed",r.landings=ni(r.landings)+1):(r.phase="crashed",r.crashes=ni(r.crashes)+1,r.crashTimer=ni(t.crashRespawnDelay)));break}case"landed":{s>a&&(r.phase="flying",r.airborneTime=0);break}case"crashed":{r.crashTimer=ni(r.crashTimer)-i,r.crashTimer<=0&&(r.phase="spawn",r.airborneTime=0);break}}return r.phase}var uM=gt('<div role="slider" tabindex="0"><div class="knob svelte-p85yzo"></div></div>');function zh(r,e){jl(e,!0);let t=Or(e,"side",3,"left"),n=Or(e,"scale",3,1),i=Or(e,"invertX",3,!1),s=Or(e,"invertY",3,!1),a=Or(e,"channel",3,"move"),o=Or(e,"deadzone",3,0),l=Ye(void 0),c=Ye(void 0),u=!1,h=-1,d=0,m=0,g=56,_=Ye(0),f=Ye(0),p=!1;const M=tM(a());Kd(()=>{b(),nM(a(),M)}),ia(()=>{R(c)&&(R(c).style.transform=`translate(${R(_)}px, ${R(f)}px)`)});const v=F=>({x:F.clientX,y:F.clientY});function T(F,k){iM(a(),M)&&(a()==="look"?(Qe.yawRate=F,Qe.pitchRate=k):a()==="drive"?(Qe.moveX=F,Qe.moveY=k):(Qe.steer=F,Qe.throttle=k))}function E(){p||(p=!0,window.addEventListener("pointermove",D),window.addEventListener("pointerup",x),window.addEventListener("pointercancel",x),window.addEventListener("blur",b),window.addEventListener("pagehide",b),document.addEventListener("visibilitychange",S))}function w(){p&&(p=!1,window.removeEventListener("pointermove",D),window.removeEventListener("pointerup",x),window.removeEventListener("pointercancel",x),window.removeEventListener("blur",b),window.removeEventListener("pagehide",b),document.removeEventListener("visibilitychange",S))}function S(){document.hidden&&b()}function P(F){if(!R(l))return;F.preventDefault(),F.stopPropagation();const k=R(l).getBoundingClientRect();d=k.left+k.width/2,m=k.top+k.height/2,g=k.width*.42,u=!0,h=F.pointerId;try{R(l).setPointerCapture(F.pointerId)}catch{}E(),D(F)}function D(F){if(!u||F.pointerId!==h)return;if(F.pointerType==="mouse"&&F.buttons===0){b();return}const k=v(F);let K=k.x-d,$=k.y-m;const Y=Math.hypot(K,$);Y>g&&(K=K/Y*g,$=$/Y*g),ge(_,K,!0),ge(f,$,!0);let re=Y/g;re>1&&(re=1);const le=re<=o()?0:(re-o())/(1-o()),ve=Y>0?K/Y:0,He=Y>0?$/Y:0,X=(i()?-1:1)*ve*le,se=(s()?-1:1)*-He*le;T(X,se)}function x(F){F.pointerId===h&&b()}function b(){u=!1,h=-1,ge(_,0),ge(f,0),T(0,0),w()}var U=uM();let j;vn(U,"aria-valuenow",0),U.__pointerdown=P,U.__contextmenu=F=>{F.preventDefault(),b()};var L=te(U);Si(L,F=>ge(c,F),()=>R(c)),ee(U),Si(U,F=>ge(l,F),()=>R(l)),Bt(()=>{j=qt(U,1,"joy svelte-p85yzo",null,j,{right:t()==="right"}),Xi(U,`--joy-scale: ${n()}`),vn(U,"aria-label",a()==="look"?"Look":a()==="drive"?"Drive":"Move")}),vs("lostpointercapture",U,b),ht(r,U),Kl()}Xh(["pointerdown","contextmenu"]);var hM=gt('<div class="banner pullup svelte-jk7r88" role="alert">PULL UP</div>'),dM=gt('<div class="banner terrain svelte-jk7r88" role="alert">TERRAIN</div>'),fM=gt('<div class="banner stall svelte-jk7r88" role="alert">STALL</div>'),pM=gt('<div class="banner overspeed svelte-jk7r88" role="alert">OVERSPEED</div>'),mM=gt('<div><span class="svelte-jk7r88"> </span></div>'),gM=gt('<div class="tick svelte-jk7r88"></div>'),_M=gt('<div class="instrument small gmeter svelte-jk7r88"><span class="label svelte-jk7r88">G</span> <span class="value-sm svelte-jk7r88"> </span></div>'),vM=gt('<div class="instrument small rotor svelte-jk7r88"><span class="label svelte-jk7r88">RPM</span> <span class="value-sm svelte-jk7r88"> </span></div>'),xM=gt('<div class="instrument small torque svelte-jk7r88"><span class="label svelte-jk7r88">TRQ</span> <span class="value-sm svelte-jk7r88"> </span></div>'),yM=gt('<div><span class="label svelte-jk7r88">BATT</span> <span class="value-sm svelte-jk7r88"> </span></div>'),MM=gt("<div>ALT HOLD</div>"),SM=gt('<div class="cockpit svelte-jk7r88" aria-label="Flight instruments"><div class="warnbar svelte-jk7r88" role="presentation"><!> <!> <!></div> <div class="panel bottom svelte-jk7r88"><div class="instrument adi svelte-jk7r88"><div class="adi-face svelte-jk7r88"><div class="adi-ball svelte-jk7r88"><div class="sky svelte-jk7r88"></div> <div class="ground svelte-jk7r88"></div> <div class="horizon-line svelte-jk7r88"></div> <div class="ladder svelte-jk7r88"></div></div> <div class="bank-scale svelte-jk7r88"><!> <div class="bank-pointer svelte-jk7r88"></div></div> <div class="aircraft-symbol svelte-jk7r88"><span class="wing left svelte-jk7r88"></span> <span class="dot svelte-jk7r88"></span> <span class="wing right svelte-jk7r88"></span></div></div></div> <div class="instrument dial ias svelte-jk7r88"><svg viewBox="0 0 100 100" class="svelte-jk7r88"><path class="arc red svelte-jk7r88" d="M 20 80 A 40 40 0 0 1 24.5 42.5"></path><path class="arc green svelte-jk7r88" d="M 24.5 42.5 A 40 40 0 0 1 75.5 42.5"></path><path class="arc red svelte-jk7r88" d="M 75.5 42.5 A 40 40 0 0 1 80 80"></path><line class="needle svelte-jk7r88" x1="50" y1="50" x2="50" y2="16"></line><circle class="hub svelte-jk7r88" cx="50" cy="50" r="4"></circle></svg> <div class="readout svelte-jk7r88"><span class="value svelte-jk7r88"> </span> <span class="unit svelte-jk7r88">IAS</span></div></div> <div class="instrument tape alt svelte-jk7r88"><span class="label svelte-jk7r88">ALT</span> <span class="value svelte-jk7r88"> </span> <span class="unit svelte-jk7r88">AGL</span> <span class="value-sm svelte-jk7r88"> </span></div> <div class="instrument bar vsi svelte-jk7r88"><span class="label svelte-jk7r88">VSI</span> <div class="track svelte-jk7r88"><div class="zero svelte-jk7r88"></div> <div></div></div> <span class="value-sm svelte-jk7r88"> </span></div> <div class="instrument tape hdg svelte-jk7r88"><span class="label svelte-jk7r88">HDG</span> <span class="value svelte-jk7r88"> </span> <div class="rose svelte-jk7r88"><svg viewBox="0 0 100 100" class="svelte-jk7r88"><circle class="ring svelte-jk7r88" cx="50" cy="50" r="42"></circle><text x="50" y="14" class="cp svelte-jk7r88">N</text><text x="86" y="53" class="cp svelte-jk7r88">E</text><text x="50" y="92" class="cp svelte-jk7r88">S</text><text x="14" y="53" class="cp svelte-jk7r88">W</text></svg> <div class="pointer svelte-jk7r88"></div></div></div> <div class="instrument bar throttle svelte-jk7r88"><span class="label svelte-jk7r88"> </span> <div class="track vertical svelte-jk7r88"><div class="fill svelte-jk7r88"></div></div> <span class="value-sm svelte-jk7r88"> </span></div> <!> <!> <!> <!> <!></div></div>');function EM(r,e){jl(e,!0);let t=Or(e,"visible",3,!0);const n={airplane:{max:300,vne:260,stallBand:55},helicopter:{max:180,vne:150,stallBand:25},drone:{max:90,vne:75,stallBand:8}},i=20,s=D=>D*180/Math.PI,a=(D,x,b)=>Math.min(b,Math.max(x,D)),o=D=>(D%360+360)%360,l=Zn(()=>n[e.model]),c=Zn(()=>a(e.telemetry.ias/R(l).max,0,1)),u=Zn(()=>R(c)*270-225),h=Zn(()=>a(e.telemetry.vspeed,-i,i)),d=Zn(()=>R(h)/i),m=Zn(()=>o(s(e.telemetry.heading))),g=Zn(()=>s(e.telemetry.bank)),_=Zn(()=>s(e.telemetry.pitch)),f=3.2,p=Zn(()=>a(R(_),-30,30)*f),M=Zn(()=>Math.abs(e.telemetry.gForce-1)>.15),v=Zn(()=>e.telemetry.battery!==null&&e.telemetry.battery<.2),T=[{a:-60,len:10},{a:-30,len:14},{a:-20,len:8},{a:-10,len:8},{a:0,len:16},{a:10,len:8},{a:20,len:8},{a:30,len:14},{a:60,len:10}],E=[-30,-20,-10,10,20,30];var w=Uc(),S=aa(w);{var P=D=>{var x=SM(),b=te(x),U=te(b);{var j=J=>{var de=hM();ht(J,de)},L=J=>{var de=Uc(),De=aa(de);{var yt=wt=>{var lt=dM();ht(wt,lt)};Lt(De,wt=>{e.telemetry.gpws==="caution"&&wt(yt)},!0)}ht(J,de)};Lt(U,J=>{e.telemetry.gpws==="pullup"?J(j):J(L,!1)})}var F=Q(U,2);{var k=J=>{var de=fM();ht(J,de)};Lt(F,J=>{e.telemetry.stall&&J(k)})}var K=Q(F,2);{var $=J=>{var de=pM();ht(J,de)};Lt(K,J=>{e.telemetry.overspeed&&J($)})}ee(b);var Y=Q(b,2),re=te(Y),le=te(re),ve=te(le),He=Q(te(ve),6);Yi(He,21,()=>E,ro,(J,de)=>{var De=mM();let yt;var wt=te(De),lt=te(wt,!0);ee(wt),ee(De),Bt(Wt=>{yt=qt(De,1,"rung svelte-jk7r88",null,yt,{major:R(de)%20===0}),Xi(De,`--rung-y: ${-R(de)*f}px`),Ue(lt,Wt)},[()=>Math.abs(R(de))]),ht(J,De)}),ee(He),ee(ve);var X=Q(ve,2),se=te(X);Yi(se,17,()=>T,ro,(J,de)=>{var De=gM();Bt(()=>Xi(De,`--tick-a: ${R(de).a}deg; --tick-len: ${R(de).len}px`)),ht(J,De)});var Se=Q(se,2);ee(X),Ss(2),ee(le),ee(re);var Ve=Q(re,2),Re=te(Ve),Te=Q(te(Re),3);Ss(),ee(Re);var Et=Q(Re,2),je=te(Et),B=te(je,!0);ee(je),Ss(2),ee(Et),ee(Ve);var kt=Q(Ve,2),Ie=Q(te(kt),2),ot=te(Ie,!0);ee(Ie);var Ae=Q(Ie,4),dt=te(Ae);ee(Ae),ee(kt);var Ze=Q(kt,2),Le=Q(te(Ze),2),bt=Q(te(Le),2);let C;ee(Le);var y=Q(Le,2),q=te(y,!0);ee(y),ee(Ze);var Z=Q(Ze,2),ae=Q(te(Z),2),ie=te(ae);ee(ae);var et=Q(ae,2);ee(Z);var Oe=Q(Z,2),ue=te(Oe),fe=te(ue,!0);ee(ue);var Ke=Q(ue,2),ce=te(Ke);ee(Ke);var zt=Q(Ke,2),st=te(zt);ee(zt),ee(Oe);var Ce=Q(Oe,2);{var Ee=J=>{var de=_M(),De=Q(te(de),2),yt=te(De,!0);ee(De),ee(de),Bt((wt,lt)=>{vn(de,"aria-label",wt),Ue(yt,lt)},[()=>`G force ${e.telemetry.gForce.toFixed(2)}`,()=>e.telemetry.gForce.toFixed(2)]),ht(J,de)};Lt(Ce,J=>{R(M)&&J(Ee)})}var we=Q(Ce,2);{var ft=J=>{var de=vM(),De=Q(te(de),2),yt=te(De,!0);ee(De),ee(de),Bt((wt,lt)=>{vn(de,"aria-label",wt),Ue(yt,lt)},[()=>`Rotor RPM ${e.telemetry.rotorRpm.toFixed(0)}`,()=>e.telemetry.rotorRpm.toFixed(0)]),ht(J,de)};Lt(we,J=>{e.telemetry.rotorRpm!==null&&J(ft)})}var Pe=Q(we,2);{var Ut=J=>{var de=xM(),De=Q(te(de),2),yt=te(De);ee(De),ee(de),Bt((wt,lt)=>{vn(de,"aria-label",wt),Ue(yt,`${lt??""}%`)},[()=>`Torque ${e.telemetry.torque.toFixed(0)} percent`,()=>e.telemetry.torque.toFixed(0)]),ht(J,de)};Lt(Pe,J=>{e.telemetry.torque!==null&&J(Ut)})}var N=Q(Pe,2);{var _e=J=>{var de=yM();let De;var yt=Q(te(de),2),wt=te(yt);ee(yt),ee(de),Bt((lt,Wt)=>{De=qt(de,1,"instrument small battery svelte-jk7r88",null,De,{low:R(v)}),vn(de,"aria-label",lt),Ue(wt,`${Wt??""}%`)},[()=>`Battery ${(e.telemetry.battery*100).toFixed(0)} percent`,()=>(e.telemetry.battery*100).toFixed(0)]),ht(J,de)};Lt(N,J=>{e.telemetry.battery!==null&&J(_e)})}var G=Q(N,2);{var he=J=>{var de=MM();let De;Bt(()=>{De=qt(de,1,"lamp svelte-jk7r88",null,De,{on:e.telemetry.altHold}),vn(de,"aria-label",`Altitude hold ${e.telemetry.altHold?"engaged":"off"}`)}),ht(J,de)};Lt(G,J=>{e.telemetry.altHold!==null&&J(he)})}ee(Y),ee(x),Bt((J,de,De,yt,wt,lt,Wt,In,Yr,jr,tr,yr,nr)=>{vn(re,"aria-label",J),Xi(ve,`--bank: ${-R(g)}deg; --shift: ${R(p)}px`),Xi(Se,`--bank: ${R(g)}deg`),vn(Ve,"aria-label",de),Xi(Te,`--deg: ${R(u)}deg`),Ue(B,De),vn(kt,"aria-label",yt),Ue(ot,wt),Ue(dt,`${lt??""} ASL`),vn(Ze,"aria-label",Wt),C=qt(bt,1,"fill svelte-jk7r88",null,C,{up:R(h)>=0}),Xi(bt,`--pct: ${R(d)}`),Ue(q,In),vn(Z,"aria-label",Yr),Ue(ie,`${jr??""}°`),Xi(et,`--hdg: ${-R(m)}deg`),vn(Oe,"aria-label",tr),Ue(fe,e.model==="helicopter"?"COLL":"THR"),Xi(ce,yr),Ue(st,`${nr??""}%`)},[()=>`Attitude: bank ${R(g).toFixed(0)} degrees, pitch ${R(_).toFixed(0)} degrees`,()=>`Indicated airspeed ${e.telemetry.ias.toFixed(0)}`,()=>e.telemetry.ias.toFixed(0),()=>`Altitude ${e.telemetry.altAGL.toFixed(0)} above ground, ${e.telemetry.altASL.toFixed(0)} above sea level`,()=>e.telemetry.altAGL.toFixed(0),()=>e.telemetry.altASL.toFixed(0),()=>`Vertical speed ${e.telemetry.vspeed.toFixed(1)}`,()=>e.telemetry.vspeed.toFixed(1),()=>`Heading ${R(m).toFixed(0)} degrees`,()=>R(m).toFixed(0),()=>`Throttle ${(e.telemetry.throttle*100).toFixed(0)} percent`,()=>`--pct: ${a(e.telemetry.throttle,0,1)}`,()=>(e.telemetry.throttle*100).toFixed(0)]),ht(D,x)};Lt(S,D=>{t()&&D(P)})}ht(r,w),Kl()}const zd={class:null,lanes:null,laneIndex:null,roadHeading:null};function bM(r){return{onRoad:!0,edgeDist:1/0,friction:r.friction.asphalt,...zd}}function TM(r,e){return 156543.03392*Math.cos(r*Math.PI/180)/Math.pow(2,e)}function ql(r,e,t,n){const i=(n*e+t)*4;return r[i]>127||r[i+1]>127||r[i+2]>127}function AM(r,e,t,n,i,s){const a=ql(r,e,n,i),o=Math.ceil(Math.max(e,t)/2);for(let l=1;l<=o;l++){let c=1/0;for(let u=-l;u<=l;u++)for(let h=-l;h<=l;h++){if(Math.max(Math.abs(u),Math.abs(h))!==l)continue;const d=n+u,m=i+h;if(!(d<0||d>=e||m<0||m>=t)&&ql(r,e,d,m)!==a){const g=Math.hypot(u,h);g<c&&(c=g)}}if(c!==1/0)return c*s}return 1/0}const sa=new Map;sa.set("mask",CM);function wM(r,e,t){for(const s of e.providers)if(!sa.has(s))throw new Error(`street: unknown provider "${s}" (registered: ${[...sa.keys()].join(", ")})`);const n=e.providers[0],i=sa.get(n);if(!i)throw new Error(`street: unknown provider "${n}" (registered: ${[...sa.keys()].join(", ")})`);return i(r,e,t)}function RM(r){const e=[{id:"street-mask-bg",type:"background",paint:{"background-color":"#000000"}}];for(const t of r.layers??[]){if(t.type!=="line"||t["source-layer"]!=="transportation")continue;const n={id:`street-mask-${t.id}`,type:"line",source:t.source,"source-layer":t["source-layer"],paint:{"line-color":"#ffffff","line-width":t.paint?.["line-width"]??1,"line-opacity":1}};t.filter&&(n.filter=t.filter),e.push(n)}return{...r,layers:e}}function CM(r,e,t){let n=bM(e),i=[0,0],s=!1,a=null,o=null,l=null,c=null,u=null;if(typeof window<"u"&&typeof document<"u"){const d=e.mask.sizePx;o=document.createElement("div"),o.style.position="absolute",o.style.width=`${d}px`,o.style.height=`${d}px`,o.style.left="-9999px",o.style.top="0",o.style.visibility="hidden",document.body.appendChild(o),l=document.createElement("canvas"),l.width=d,l.height=d,c=l.getContext("2d",{willReadFrequently:!0}),fetch(t).then(m=>m.json()).then(m=>{if(s)return;const g=RM(m);a=new r.Map({container:o,style:g,center:i,zoom:e.mask.zoom,pitch:0,bearing:0,interactive:!1,attributionControl:!1,canvasContextAttributes:{preserveDrawingBuffer:!0}});const _=1e3/e.mask.sampleHz;u=setInterval(()=>{h()},_)}).catch(()=>{})}function h(){if(!(!a||!l||!c))try{const d=a.getCanvas();c.drawImage(d,0,0,l.width,l.height);const m=e.mask.sizePx,g=c.getImageData(0,0,m,m),_=Math.floor(m/2),f=Math.floor(m/2),p=ql(g.data,m,_,f),M=i[1],v=TM(M,e.mask.zoom),T=AM(g.data,m,m,_,f,v);n={onRoad:p,edgeDist:T,friction:p?e.friction.asphalt:e.friction.off,...zd}}catch{}}return{setPosition(d){if(i=d,a&&!s)try{a.jumpTo({center:d})}catch{}},sample(){return n},destroy(){s||(s=!0,u!==null&&(clearInterval(u),u=null),a&&(a.remove(),a=null),o&&o.parentNode&&o.parentNode.removeChild(o),o=null)}}}const Os=(r,e=0)=>typeof r=="number"&&Number.isFinite(r)?r:e,Zi=(r,e,t)=>Math.min(t,Math.max(e,r));function LM(r){const e=Os(r.vspeed),t=Os(r.speed),n=Math.abs(e)/6,i=t/25,s=Zi((n+i)/2,0,3),a=90*(1+.35*s),o=Zi(.15+.25*s,0,1);return{freq:a,gain:o}}function PM(r){const e=r.rotorRpm,t=e!=null&&Number.isFinite(e)?e/60*2:13,n=r.torque!=null&&Number.isFinite(r.torque)?r.torque:Os(r.throttle),i=Zi(.2+.7*Zi(n,0,1),0,1);return{lfoRate:Zi(t,.1,50),thumpDepth:i,engineFreq:55}}function IM(r){const e=Math.max(0,Os(r.ias)),t=Zi(Os(r.throttle),0,1),n=300+e*12,i=70+e*.5,s=Zi(.1+.35*t,0,1);return{filterFreq:n,toneFreq:i,gain:s}}function DM(r){return r.gpws==="pullup"?"pullup":r.stall?"stall":r.overspeed?"overspeed":null}const wl=.1;function NM(){let r=null,e=null,t=!1,n=!1,i=!1,s=null,a=null,o=null,l=null,c=null,u=0,h=0,d=0;function m(E){const w=E.sampleRate*2,S=E.createBuffer(1,w,E.sampleRate),P=S.getChannelData(0);let D=0;for(let x=0;x<w;x++){const b=Math.random()*2-1;D=(D+.02*b)/1.02,P[x]=D*3.5}return S}function g(E,w){const S=E.createOscillator();S.type="square",S.frequency.setValueAtTime(400,E.currentTime);const P=E.createGain();P.gain.setValueAtTime(0,E.currentTime),S.connect(P).connect(w),S.start();const D=E.createOscillator();D.type="square",D.frequency.setValueAtTime(700,E.currentTime);const x=E.createGain();x.gain.setValueAtTime(0,E.currentTime),D.connect(x).connect(w),D.start();const b=E.createOscillator();b.type="sine",b.frequency.setValueAtTime(1200,E.currentTime);const U=E.createGain();return U.gain.setValueAtTime(0,E.currentTime),b.connect(U).connect(w),b.start(),{stallOsc:S,stallGain:P,pullupOsc:D,pullupGain:x,overspeedOsc:b,overspeedGain:U}}function _(E,w){const S=E.createBiquadFilter();S.type="lowpass",S.frequency.setValueAtTime(1800,E.currentTime);const P=E.createGain();P.gain.setValueAtTime(.15,E.currentTime),S.connect(P).connect(w);const D=[-8,-2.5,2.5,8],x=D.map(j=>{const L=E.createOscillator();return L.type="sawtooth",L.frequency.setValueAtTime(90,E.currentTime),L.detune.setValueAtTime(j,E.currentTime),L.connect(S),L.start(),L}),b=E.createOscillator();b.type="sine",b.frequency.setValueAtTime(2200,E.currentTime);const U=E.createGain();return U.gain.setValueAtTime(.02,E.currentTime),b.connect(U).connect(w),b.start(),{oscs:x,detune:D,filter:S,gain:P,whine:b,whineGain:U}}function f(E,w){const S=E.createGain();S.gain.setValueAtTime(.3,E.currentTime),S.connect(w);const P=E.createBufferSource();P.buffer=m(E),P.loop=!0;const D=E.createBiquadFilter();D.type="lowpass",D.frequency.setValueAtTime(400,E.currentTime);const x=E.createOscillator();x.type="square",x.frequency.setValueAtTime(13,E.currentTime);const b=E.createWaveShaper(),U=new Float32Array(2);U[0]=0,U[1]=1,b.curve=U;const j=E.createGain();j.gain.setValueAtTime(.5,E.currentTime),x.connect(b),P.connect(D).connect(j).connect(S),b.connect(j.gain),P.start(),x.start();const L=E.createOscillator();L.type="triangle",L.frequency.setValueAtTime(55,E.currentTime);const F=E.createGain();return F.gain.setValueAtTime(.1,E.currentTime),L.connect(F).connect(S),L.start(),{noise:P,noiseFilter:D,thumpGate:j,lfo:x,lfoShaper:b,engine:L,engineGain:F,master:S}}function p(E,w){const S=E.createGain();S.gain.setValueAtTime(.2,E.currentTime),S.connect(w);const P=E.createBufferSource();P.buffer=m(E),P.loop=!0;const D=E.createBiquadFilter();D.type="lowpass",D.frequency.setValueAtTime(300,E.currentTime);const x=E.createGain();x.gain.setValueAtTime(.3,E.currentTime),P.connect(D).connect(x).connect(S),P.start();const b=E.createOscillator();b.type="sine",b.frequency.setValueAtTime(70,E.currentTime);const U=E.createGain();return U.gain.setValueAtTime(.15,E.currentTime),b.connect(U).connect(S),b.start(),{noise:P,noiseFilter:D,noiseGain:x,tone:b,toneGain:U,master:S}}function M(){const E=w=>{for(const S of w){try{S.stop()}catch{}try{S.disconnect()}catch{}}};try{a&&E([...a.oscs,a.whine]),o&&E([o.noise,o.lfo,o.engine]),l&&E([l.noise,l.tone])}catch{}a=null,o=null,l=null}function v(E){if(!(!r||!e)&&s!==E)try{M(),E==="drone"?a=_(r,e):E==="helicopter"?o=f(r,e):l=p(r,e),s=E}catch{s=null}}function T(E,w,S){if(!r||!c)return;const P=DM(E);u+=S,h+=S;const D=(b,U)=>{try{b.setTargetAtTime(U,w,wl)}catch{}},x=P==="stall"&&Math.sin(2*Math.PI*3*u)>0;if(D(c.stallGain.gain,x?.2:0),P==="pullup"){const b=Math.sin(2*Math.PI*4*h)>0?900:700;try{c.pullupOsc.frequency.setTargetAtTime(b,w,.02)}catch{}D(c.pullupGain.gain,.25)}else D(c.pullupGain.gain,0);D(c.overspeedGain.gain,P==="overspeed"?.08:0)}return{start(){if(!(n||i))try{if(typeof window>"u")return;const E=window.AudioContext??window.webkitAudioContext;if(!E)return;r=new E,e=r.createGain(),e.gain.setValueAtTime(t?0:.25,r.currentTime),e.connect(r.destination),c=g(r,e),d=r.currentTime,n=!0}catch{r=null,e=null,n=!1}},update(E,w){if(!(!n||i||!r||!e))try{const S=r.currentTime,P=Math.max(0,Math.min(.5,S-d||0));d=S,v(w);const D=(x,b,U=wl)=>{try{x.setTargetAtTime(b,S,U)}catch{}};if(w==="drone"&&a){const{freq:x,gain:b}=LM(E);for(let U=0;U<a.oscs.length;U++)D(a.oscs[U].frequency,x);D(a.gain.gain,b)}else if(w==="helicopter"&&o){const{lfoRate:x,thumpDepth:b,engineFreq:U}=PM(E);D(o.lfo.frequency,x),D(o.thumpGate.gain,Zi(b,0,1),.03),D(o.engine.frequency,U),D(o.engineGain.gain,.08+.1*Zi(Os(E.throttle),0,1))}else if(w==="airplane"&&l){const{filterFreq:x,toneFreq:b,gain:U}=IM(E);D(l.noiseFilter.frequency,x),D(l.tone.frequency,b),D(l.master.gain,U)}T(E,S,P)}catch{}},setMuted(E){if(t=E,!(!n||i||!r||!e))try{e.gain.setTargetAtTime(E?0:.25,r.currentTime,wl)}catch{}},destroy(){if(!i){i=!0;try{if(M(),c){try{c.stallOsc.stop()}catch{}try{c.pullupOsc.stop()}catch{}try{c.overspeedOsc.stop()}catch{}}r&&r.close().catch(()=>{})}catch{}r=null,e=null,c=null,n=!1}}}}var UM=gt('<div class="keybinds-row svelte-1uha8ag"><span class="keybinds-key svelte-1uha8ag"> </span><span class="svelte-1uha8ag"> </span></div>'),FM=gt('<div class="keybinds-overlay svelte-1uha8ag"></div>'),OM=gt('<div class="svelte-1uha8ag"> </div>'),BM=gt('<div class="debug-overlay svelte-1uha8ag"><div class="svelte-1uha8ag"> </div> <div class="svelte-1uha8ag"> </div> <div class="svelte-1uha8ag"> </div> <div class="svelte-1uha8ag"> </div> <div class="svelte-1uha8ag"> </div> <div class="svelte-1uha8ag"> </div> <div> </div> <!></div>'),kM=gt('<div class="frame-err-overlay svelte-1uha8ag"><pre class="svelte-1uha8ag"> </pre></div>'),zM=gt('<button type="button" class="frame-err-badge svelte-1uha8ag"> </button> <!>',1),GM=gt('<div class="crash-flash svelte-1uha8ag"></div>'),HM=gt('<div class="landed-toast svelte-1uha8ag">LANDED ✓</div>'),VM=gt('<div class="throttle-lever svelte-1uha8ag"><input type="range" min="0" max="1" step="0.01" aria-label="Throttle" class="svelte-1uha8ag"/> <span class="svelte-1uha8ag"> </span></div> <button type="button">GEAR</button> <button type="button">FLAPS</button>',1),WM=gt('<div class="flight-hud svelte-1uha8ag"><!> <button type="button" class="flight-btn view-cycle svelte-1uha8ag" aria-label="Cycle camera view">⟳</button> <button type="button" class="flight-btn mute-btn svelte-1uha8ag" aria-label="Mute flight audio"> </button></div>'),XM=gt('<a class="menu-item svelte-1uha8ag" rel="external"> </a>'),qM=gt('<button type="button"><span class="icon svelte-1uha8ag"> </span> </button>'),YM=gt('<button type="button"><span class="icon svelte-1uha8ag"> </span> </button>'),jM=gt('<button type="button"> </button> <button type="button"> </button> <button type="button">Brake</button>',1),KM=gt('<p class="svelte-1uha8ag"><strong class="svelte-1uha8ag"> </strong> </p>'),$M=gt('<div class="menu-about svelte-1uha8ag"><!> <p class="svelte-1uha8ag"><strong class="svelte-1uha8ag">debug</strong>: F8</p></div>'),ZM=gt('<div class="menu-about svelte-1uha8ag"><p class="svelte-1uha8ag">Galaxy Earth — a 3D terrain basemap built with SvelteKit, MapLibre GL JS v5, and Three.js. Drive, fly, or walk across real-world terrain in a GTA-style twin-stick rig with a free-look camera.</p> <p class="svelte-1uha8ag"><a href="https://github.com/diegonmarcos/diegonmarcos.github.io" rel="external" class="svelte-1uha8ag">github.com/diegonmarcos/diegonmarcos.github.io</a></p> <p class="svelte-1uha8ag">Part of the Galaxy constellation of apps (Hub, Earth, Gaia, X1).</p></div>'),JM=gt('<nav class="menu svelte-1uha8ag" aria-label="Main menu"><section class="menu-section svelte-1uha8ag"><h2 class="svelte-1uha8ag">Galaxies</h2> <!></section> <section class="menu-section svelte-1uha8ag"><h2 class="svelte-1uha8ag">Camera View</h2> <div class="menu-row svelte-1uha8ag"><button type="button" class="menu-btn svelte-1uha8ag">Zoom +</button> <button type="button" class="menu-btn svelte-1uha8ag">Zoom −</button> <button type="button" class="menu-btn svelte-1uha8ag">Reset View</button> <button type="button"> </button></div> <!></section> <section class="menu-section svelte-1uha8ag"><h2 class="svelte-1uha8ag">Drive Mode</h2> <!></section> <section class="menu-section svelte-1uha8ag"><h2 class="svelte-1uha8ag">Configs</h2> <!> <button type="button">Graph Stats</button> <button type="button">Debug Mode</button> <button type="button">Cockpit HUD</button> <button type="button" class="menu-item svelte-1uha8ag"> </button> <button type="button">Keybindings</button> <!> <button type="button">About</button> <!></section></nav>'),QM=gt('<button type="button"><span class="icon svelte-1uha8ag"> </span> </button>'),eS=gt('<div class="fab-popup svelte-1uha8ag" role="menu" aria-label="Camera view"></div>'),tS=gt('<button type="button"><span class="icon svelte-1uha8ag"> </span> </button>'),nS=gt('<div class="fab-popup svelte-1uha8ag" role="menu" aria-label="Driver"></div>'),iS=gt('<button type="button" aria-label="Toggle performance stats"><canvas width="120" height="36" class="svelte-1uha8ag"></canvas> <div class="perf-text svelte-1uha8ag"><span class="svelte-1uha8ag"> </span> <span class="svelte-1uha8ag"> </span></div></button>'),rS=gt('<div class="perf-stat svelte-1uha8ag"><span class="svelte-1uha8ag">JS heap</span><span class="svelte-1uha8ag"> </span></div>'),sS=gt('<div class="perf-panel svelte-1uha8ag"><div class="perf-row svelte-1uha8ag"><span class="perf-label svelte-1uha8ag">FPS</span> <canvas width="160" height="40" class="svelte-1uha8ag"></canvas> <span class="perf-num svelte-1uha8ag"> </span></div> <div class="perf-row svelte-1uha8ag"><span class="perf-label svelte-1uha8ag">Frame</span> <canvas width="160" height="40" class="svelte-1uha8ag"></canvas> <span> </span></div> <div class="perf-row svelte-1uha8ag"><span class="perf-label svelte-1uha8ag">Draws</span> <canvas width="160" height="40" class="svelte-1uha8ag"></canvas> <span class="perf-num svelte-1uha8ag"> </span></div> <div class="perf-stat svelte-1uha8ag"><span class="svelte-1uha8ag">Draw calls</span><span class="svelte-1uha8ag"> </span></div> <div class="perf-stat svelte-1uha8ag"><span class="svelte-1uha8ag">Triangles</span><span class="svelte-1uha8ag"> </span></div> <div class="perf-stat svelte-1uha8ag"><span class="svelte-1uha8ag">Geometries</span><span class="svelte-1uha8ag"> </span></div> <div class="perf-stat svelte-1uha8ag"><span class="svelte-1uha8ag">Textures</span><span class="svelte-1uha8ag"> </span></div> <!></div>'),aS=gt('<div class="climb svelte-1uha8ag"><button type="button" class="climb-btn svelte-1uha8ag" aria-label="Climb up">▲</button> <button type="button" class="climb-btn svelte-1uha8ag" aria-label="Climb down">▼</button></div>'),oS=gt('<div><div class="map svelte-1uha8ag"></div> <canvas class="sky-overlay svelte-1uha8ag"></canvas> <!> <div><div class="minimap svelte-1uha8ag"></div> <div class="minimap-arrow svelte-1uha8ag"></div></div> <!> <!> <!> <!> <!> <!> <button type="button" aria-label="Menu">☰</button> <!> <div class="fabs svelte-1uha8ag"><div class="fab-anchor svelte-1uha8ag"><!> <button type="button" class="fab svelte-1uha8ag" aria-label="Camera view"> </button></div> <div class="fab-anchor svelte-1uha8ag"><!> <button type="button" class="fab svelte-1uha8ag" aria-label="Driver mode"> </button></div></div> <div class="hud svelte-1uha8ag"><!> <!></div> <div class="velocimeter svelte-1uha8ag"> <span class="redline svelte-1uha8ag"> </span> km/h</div> <div class="altimeter svelte-1uha8ag"> <span class="redline svelte-1uha8ag"> </span> m</div> <!> <!> <!></div>');function pS(r,e){jl(e,!0);const t=1/3.6;let n,i,s;const a=_n.rider,o=a.joystick,l=o.look,c=a.camera;function u(H,me,xe){const Fe=H.size??c.refSize,Be=(H.speed.max??0)*t,ze=Be>0?Math.min(1,(xe??0)/Be):0,Ge=me.zoom+Math.log2(c.refSize/Fe)-c.speedZoom*(me.speedZoomMult??1)*ze;return Math.max(c.minZoom,Math.min(c.maxZoom,Ge))}let h=Ye(No(a.drivers.find(H=>H.id===a.defaultDriver)??a.drivers[0])),d=Ye(No(a.cameras.find(H=>H.id===a.defaultCamera)??a.cameras[0])),m=Ye(0),g=Ye(0),_=Ye(void 0),f=Ye(void 0),p=Ye(0),M=Ye(0),v=Ye(!1),T=Ye(0),E=Ye(0),w=Ye(0),S=Ye(0),P=Ye(void 0),D=Ye(void 0),x=Ye(void 0),b=Ye(void 0),U=Ye(!0),j=Ye(!1),L=Ye(!1),F=Ye(!1),k=Ye(!1),K=Ye(!1);const $=[{key:"W A S D",action:"Move (forward/back/left/right)"},{key:"Arrows / Mouse",action:"Look direction"},{key:"Space",action:"Speed up"},{key:"+ / -",action:"Altitude up/down"},{key:"1 – 7",action:"Camera select"},{key:"Shift+1 – 8",action:"Driver select"},{key:",",action:"Cycle camera"},{key:".",action:"Cycle driver"},{key:"K",action:"Toggle this panel"}];let Y=Ye(!1),re=Ye(!1),le=Ye(!0),ve=()=>{},He=()=>{},X=()=>{},se=()=>{};const Se=[{id:"hub",label:"Galaxy Hub",href:"/galaxy/"},{id:"earth",label:"Galaxy Earth",href:"/galaxy-earth/"},{id:"gaia",label:"Galaxy Gaia",href:"/galaxy-gaia/"},{id:"x1",label:"Galaxy X1",href:"/galaxy-x1/"}],Ve=[];let Re=Ye("");function Te(H){if(typeof H=="string")return H;if(H instanceof Error)return`${H.name}: ${H.message}
${H.stack??""}`;const me=new WeakSet;try{return JSON.stringify(H,(xe,Fe)=>{if(typeof Fe=="bigint")return`${Fe}n`;if(typeof Fe=="object"&&Fe!==null){if(me.has(Fe))return"[Circular]";me.add(Fe)}return Fe},2)??String(H)}catch{return String(H)}}function Et(H,me){const xe=new Date().toISOString(),Fe=me.map(Te).join(" ");Ve.push(`[${xe}] [${H}] ${Fe}`)}async function je(){const H=Ve.join(`
`),me=`galaxy-earth-log-${Date.now()}.log`;ge(Re,"Exporting…");try{await navigator.clipboard.writeText(H)}catch(xe){console.error("[rider] clipboard copy failed",xe)}try{const xe=window.showSaveFilePicker;if(xe){const Be=await(await xe({suggestedName:me})).createWritable();await Be.write(H),await Be.close()}else{const Fe=URL.createObjectURL(new Blob([H],{type:"text/plain"})),Be=document.createElement("a");Be.href=Fe,Be.download=me,Be.click(),URL.revokeObjectURL(Fe)}}catch(xe){console.error("[rider] local log save failed/cancelled",xe)}try{const xe=await fetch("https://api.diegonmarcos.com/c3-infra-api/public/logs",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({source:"galaxy-earth",log:H})});ge(Re,xe.ok?"Copied + saved + uploaded ✓":`Copied + saved, upload failed (${xe.status})`,!0)}catch(xe){console.error("[rider] log upload failed",xe),ge(Re,"Copied + saved, upload failed (offline?)")}setTimeout(()=>ge(Re,""),4e3)}let B=Ye("none"),kt=Ye(0),Ie=Ye(0),ot=Ye(0);const Ae={heading:0};let dt,Ze=0;const Le={heading:0,bank:0,pitch:0,speed:0,vspeed:0,altASL:0,velX:0,velZ:0,battery:1};let bt=Ye(0),C=Ye(null),y=null,q=Ye(!1),Z=()=>{},ae=()=>{};const ie={phase:"spawn",airborneTime:0,landings:0,crashes:0,crashTimer:0};let et=Ye("spawn"),Oe=Ye(0),ue=Ye(!1),fe=Ye(!1),Ke=Ye(0),ce=Ye(""),zt=Ye(!1),st=null,Ce=Ye(!0),Ee=Ye(0),we=Ye(!1),ft=Ye(No(a.cockpit.defaultVisible));ia(()=>{const H=R(h).altitude;Ae.altitude=Pe(H.default,H.min,H.max),Ae.speed=(R(h).speed.idle??0)*t,R(h).control==="flight"&&(Le.heading=Ae.heading,Le.bank=0,Le.pitch=0,Le.speed=0,Le.vspeed=0,Le.velX=0,Le.velZ=0,Le.battery=1,ge(bt,0),st=H.default,ge(C,null)),console.log(`[rider] driver -> '${R(h).id}' (default altitude ${Ae.altitude}m, range [${H.min},${H.max}]m)`)}),ia(()=>{console.log(`[rider] camera -> '${R(d).id}' (pitch ${R(d).pitch}, zoom ${u(R(h),R(d))})`)});function Pe(H,me,xe){return Math.min(xe,Math.max(me,H))}const Ut=.6180339887498949;function N(H,me){const xe=H*Ut+me;return xe-Math.floor(xe)}function _e(){const H=new hc(a.character.radius,a.character.height,4,8),me=new fr({color:a.character.color});return new en(H,me)}function G(H){const me=new $e(a.character.color),xe=new fr({color:me}),Fe=new fr({color:me.clone().multiplyScalar(.6)}),Be=new fr({color:me.clone().multiplyScalar(1.3)});if(H==="drone"){const ze=new gi;ze.add(new en(new di(.6,.15,.6),xe));const Ge=new Ts(.18,.18,.02,12),Je=[[.35,.35],[.35,-.35],[-.35,.35],[-.35,-.35]];for(const[_t,It]of Je){const nn=new en(Ge,Fe);nn.position.set(_t,.1,It),ze.add(nn)}return ze}if(H==="helicopter"){const ze=new gi;ze.add(new en(new di(.8,.6,1.8),xe));const Ge=new en(new di(.2,.2,1.6),xe);Ge.position.set(0,.1,-1.5),ze.add(Ge);const Je=new en(new di(3.2,.06,.15),Fe);return Je.position.set(0,.5,0),ze.add(Je),ze}if(H==="airplane"){const ze=new gi,Ge=new en(new Ts(.25,.25,2.4,10),xe);Ge.rotation.x=Math.PI/2,ze.add(Ge),ze.add(new en(new di(3.2,.06,.5),Be));const Je=new en(new di(.06,.5,.4),Fe);return Je.position.set(0,.25,-1.1),ze.add(Je),ze}return _e()}function he(H,me){const Be=new Ts(.4,.5,3,6).toNonIndexed();Be.translate(0,3/2,0);const ze=new dc(2.4,6,7).toNonIndexed();ze.translate(0,3+6/2,0);const Ge=Be.attributes.position,Je=ze.attributes.position,_t=Be.attributes.normal,It=ze.attributes.normal,nn=new Float32Array(Ge.array.length+Je.array.length);nn.set(Ge.array,0),nn.set(Je.array,Ge.array.length);const Sn=new Float32Array(_t.array.length+It.array.length);Sn.set(_t.array,0),Sn.set(It.array,_t.array.length);const Jt=new Float32Array(Ge.count*3+Je.count*3),on=new $e(me),vt=new $e(H);for(let Qt=0;Qt<Ge.count;Qt++)on.toArray(Jt,Qt*3);for(let Qt=0;Qt<Je.count;Qt++)vt.toArray(Jt,(Ge.count+Qt)*3);const rn=new kn;return rn.setAttribute("position",new dn(nn,3)),rn.setAttribute("normal",new dn(Sn,3)),rn.setAttribute("color",new dn(Jt,3)),rn}$d(()=>{["log","info","warn","error","debug"].forEach(ne=>{const oe=console[ne].bind(console);console[ne]=(...ye)=>{Et(ne,ye),oe(...ye)}}),console.log(`[rider] mount: driver=${R(h).id} camera=${R(d).id} start=${a.start}`);try{console.group("[rider] init self-check"),setTimeout(()=>{try{Ai.drive||console.error("[rider] INIT FAILURE: drive joystick never claimed its channel — no stick input will reach flight/vehicle control"),Ai.look||console.error("[rider] INIT FAILURE: look joystick never claimed its channel — no stick input will reach flight/vehicle control"),console.assert(!!Ai.drive,"[rider] channelOwners.drive is null 500ms after mount"),console.assert(!!Ai.look,"[rider] channelOwners.look is null 500ms after mount")}catch(ne){console.error("[rider] init self-check (channel claim check) threw",ne)}},500);try{const oe=a.drivers.find(ye=>ye.flight?.model==="airplane")?.flight;if(!oe)console.warn("[rider] init self-check: no airplane driver config found in rider.drivers — skipping stepAirplane smoke test");else{const ye={heading:0,bank:0,pitch:0,speed:0,vspeed:0,altASL:1e3},St={groundElev:0,dt:1/60},nt={pitchAxis:0,rollAxis:0,yawAxis:0,throttle:1,climbAxis:0,gearDown:!1,flaps:0,brake:0},Ft=ye.speed;for(let Gn=0;Gn<120;Gn++)kh(ye,nt,oe,St);const sn=ye.speed,Kt=sn>Ft;console.assert(Kt,"[rider] stepAirplane smoke test: speed did not increase under full throttle"),console.log(`[rider] stepAirplane smoke test: ${Kt?"PASS":"FAIL"} — speed ${Ft.toFixed(2)} -> ${sn.toFixed(2)} over 120 steps (2s) @ full throttle`),Kt||console.error("[rider] INIT FAILURE: stepAirplane physics smoke test failed — the flight-dynamics function itself is not producing acceleration; the bug is in physics, not input routing")}}catch(ne){console.error("[rider] init self-check (stepAirplane smoke test) threw",ne)}console.groupEnd()}catch(ne){console.error("[rider] init self-check failed entirely",ne)}let H,me,xe=null,Fe,Be=!1,ze=0,Ge,Je=0,_t=0;const It=NM();let nn=!1;const Sn=()=>{nn||(nn=!0,It.start())};window.addEventListener("pointerdown",Sn,{once:!0}),window.addEventListener("keydown",Sn,{once:!0}),Z=()=>{ge(q,!R(q)),It.setMuted(R(q))};let Jt=null,on=0;const vt=new Set;function rn(){const ne=a.keys;let oe=0,ye=0,St=0;([...vt].some(nt=>ne.forward.includes(nt))||vt.has(" "))&&(ye+=1),[...vt].some(nt=>ne.back.includes(nt))&&(ye-=1),[...vt].some(nt=>ne.left.includes(nt))&&(oe-=1),[...vt].some(nt=>ne.right.includes(nt))&&(oe+=1),[...vt].some(nt=>ne.up.includes(nt))&&(St+=1),[...vt].some(nt=>ne.down.includes(nt))&&(St-=1),Qe.moveX=oe,Qe.moveY=ye,Qe.climbKeys=St}function Qt(){let ne=0,oe=0;vt.has("ArrowLeft")&&(ne-=1),vt.has("ArrowRight")&&(ne+=1),vt.has("ArrowUp")&&(oe+=1),vt.has("ArrowDown")&&(oe-=1),Qe.yawRate=ne,Qe.pitchRate=oe}function ai(){let ne=0,oe=0,ye=0;return vt.has("w")&&(ne+=1),vt.has("s")&&(ne-=1),vt.has("a")&&(oe-=1),vt.has("d")&&(oe+=1),(vt.has("q")||vt.has(" "))&&(ye+=1),(vt.has("e")||vt.has("c"))&&(ye-=1),{pitch:ne,roll:oe,leftY:ye}}function jt(ne,oe){return ne.includes(oe)}function En(ne,oe,ye){const St=ne.indexOf(oe),nt=ne.length;return ne[(St+ye+nt)%nt]}ae=()=>{const oe=a.cockpit.viewCycle.map(St=>a.cameras.find(nt=>nt.id===St)).filter(Boolean);if(oe.length===0)return;const ye=oe.findIndex(St=>St.id===R(d).id);ge(d,ye===-1?oe[0]:En(oe,oe[ye],1),!0)};function zn(ne){if(ne.key==="F8"){ne.preventDefault(),ge(U,!R(U));return}if((ne.key==="k"||ne.key==="K")&&!ne.repeat){ne.preventDefault(),ge(K,!R(K));return}if(!ne.repeat&&ne.code.startsWith("Digit")){const sn=Number(ne.code.slice(5));ne.shiftKey?sn>=1&&sn<=a.drivers.length&&(ne.preventDefault(),ge(h,a.drivers[sn-1],!0)):sn>=1&&sn<=a.cameras.length&&(ne.preventDefault(),ge(d,a.cameras[sn-1],!0));return}const oe=a.keys,ye=ne.key.length===1?ne.key.toLowerCase():ne.key,St=ye==="ArrowUp"||ye==="ArrowDown"||ye==="ArrowLeft"||ye==="ArrowRight",nt=jt(oe.forward,ye)||jt(oe.back,ye)||jt(oe.left,ye)||jt(oe.right,ye)||jt(oe.up,ye)||jt(oe.down,ye)||St,Ft=jt(oe.cameraNext,ye)||jt(oe.cameraPrev,ye)||jt(oe.driverNext,ye)||jt(oe.driverPrev,ye);!nt&&!Ft||(ne.preventDefault(),nt&&(vt.add(ye),rn(),St&&Qt()),Ft&&!ne.repeat&&(jt(oe.cameraNext,ye)?ge(d,En(a.cameras,R(d),1),!0):jt(oe.cameraPrev,ye)?ge(d,En(a.cameras,R(d),-1),!0):jt(oe.driverNext,ye)?ge(h,En(a.drivers,R(h),1),!0):jt(oe.driverPrev,ye)&&ge(h,En(a.drivers,R(h),-1),!0)))}function Wn(ne){const oe=ne.key.length===1?ne.key.toLowerCase():ne.key,ye=oe==="ArrowUp"||oe==="ArrowDown"||oe==="ArrowLeft"||oe==="ArrowRight";vt.has(oe)&&(ne.preventDefault(),vt.delete(oe),rn(),ye&&Qt())}function oi(){vt.clear(),rn(),Qt()}function Ni(){document.hidden&&(vt.clear(),rn(),Qt())}window.addEventListener("keydown",zn),window.addEventListener("keyup",Wn),window.addEventListener("blur",oi),document.addEventListener("visibilitychange",Ni),ge(U,new URLSearchParams(window.location.search).get("debug")!=="0"),R(U)&&(console.info("[rider] debug mode ON — F8 toggles, ?debug=0 disables, throttled frame logs every 30 renders"),Co(()=>import("../chunks/CTQ6XGXZ.js").then(ne=>ne.e),__vite__mapDeps([0,1]),import.meta.url).then(ne=>{(ne.default??ne).init(),console.info("[rider] eruda mobile console attached")}).catch(ne=>console.error("[rider] eruda failed to load",ne)));function Xn(ne){ge(B,ne.message??String(ne),!0),console.error("[rider] window error",ne.error??ne.message)}function Ui(ne){ge(B,ne.reason?.message??String(ne.reason),!0),console.error("[rider] unhandled rejection",ne.reason)}window.addEventListener("error",Xn),window.addEventListener("unhandledrejection",Ui);let xi=!1;function Fi(ne){xi&&(Je+=ne.movementX*l.mouseSensitivity*(Math.PI/180),_t=Pe(_t+ne.movementY*l.mouseSensitivity,l.minPitch,l.skyMaxPitch))}function br(){xi=!!Ge&&document.pointerLockElement===Ge}document.addEventListener("mousemove",Fi),document.addEventListener("pointerlockchange",br);function mn(){Qe.climbPointer=0}window.addEventListener("pointerup",mn),window.addEventListener("pointercancel",mn);let bn,qn,Qn;if(R(_)){bn=new zl({canvas:R(_),alpha:!0}),bn.setSize(window.innerWidth,window.innerHeight),Qn=new On(60,window.innerWidth/window.innerHeight,.1,1e3),qn=new pl;const ne=new fc(500,32,32),oe=new Qi({side:Bn,uniforms:{topColor:{value:new $e(131852)},bottomColor:{value:new $e(1708080)}},vertexShader:`
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
        `}),ye=new en(ne,oe);qn.add(ye);const St=400,nt=new Float32Array(St*3);for(let Kt=0;Kt<St;Kt++){const Gn=N(Kt,.13)*Math.PI*2,Tr=N(Kt,.77)*Math.PI*.5,li=480;nt[Kt*3]=li*Math.sin(Tr)*Math.cos(Gn),nt[Kt*3+1]=li*Math.cos(Tr),nt[Kt*3+2]=li*Math.sin(Tr)*Math.sin(Gn)}const Ft=new kn;Ft.setAttribute("position",new dn(nt,3));const sn=new oc({color:16777215,size:1.5,sizeAttenuation:!1});qn.add(new Cd(Ft,sn))}function $r(){!bn||!Qn||(bn.setSize(window.innerWidth,window.innerHeight),Qn.aspect=window.innerWidth/window.innerHeight,Qn.updateProjectionMatrix())}window.addEventListener("resize",$r);let Rt=!1;return ia(()=>{const ne=R(h);H&&(ne.globe?(Rt||(H.setProjection({type:"globe"}),H.setZoom(1)),Rt=!0):Rt&&(H.setProjection({type:"mercator"}),Rt=!1))}),(async()=>{const ne=(await Co(async()=>{const{default:oe}=await import("../chunks/5L1ekbnn.js").then(ye=>ye.m);return{default:oe}},__vite__mapDeps([2,1]),import.meta.url)).default;if(await Co(()=>Promise.resolve({}),__vite__mapDeps([3]),import.meta.url),!Be){H=new ne.Map({container:n,style:_n.basemap,center:_n.center,zoom:_n.zoom,pitch:_n.pitch,bearing:_n.bearing}),H.setCenterClampedToGround(!1),H.setMaxPitch(l.mapMaxPitch);try{i&&(me=new ne.Map({container:i,style:_n.basemap,center:_n.center,zoom:15,pitch:0,bearing:0,interactive:!1,attributionControl:!1}))}catch(oe){console.error("[rider] minimap init failed",oe),me=void 0}ve=()=>H?.zoomIn(),He=()=>H?.zoomOut(),X=()=>H?.resetNorth(),se=()=>{H&&(ge(le,!R(le)),console.log(`[rider] terrain3d -> ${R(le)}`),H.setTerrain(R(le)?{source:"terrain-dem",exaggeration:_n.terrain.exaggeration}:null))},Ge=H.getCanvas(),Ge.requestPointerLock&&Ge.addEventListener("click",()=>Ge?.requestPointerLock()),H.on("error",oe=>{console.error("[map] error event",oe.error?.message??oe.error??oe)}),H.on("sourcedataloading",oe=>{R(U)&&oe.sourceId&&console.debug(`[map] source loading: ${oe.sourceId}`)}),H.on("dataabort",oe=>{R(U)&&console.warn(`[map] data load aborted for source '${oe.sourceId}'`)}),H.on("styleimagemissing",oe=>{!H||H.hasImage(oe.id)||H.addImage(oe.id,{width:1,height:1,data:new Uint8Array(4)})}),H.on("load",()=>{if(!H)return;try{Jt=wM(ne,a.street,_n.basemap)}catch(We){console.warn("[rider] street provider failed to initialize — falling back to normal driving",We),Jt=null}H.addSource("terrain-dem",{type:"raster-dem",tiles:_n.terrain.tiles,tileSize:_n.terrain.tileSize,maxzoom:_n.terrain.maxzoom,encoding:_n.terrain.encoding}),H.setTerrain({source:"terrain-dem",exaggeration:_n.terrain.exaggeration}),H.setSky({"sky-color":"#88C6FC","horizon-color":"#ffffff","fog-color":"#ffffff","atmosphere-blend":.8});const oe=Object.entries(H.getStyle()?.sources??{}).find(([,We])=>We.type==="vector")?.[0];if(oe){const We=_n.nature;H.addLayer({id:"nature-green",type:"fill",source:oe,"source-layer":We.sourceLayer,filter:["in",["get","class"],["literal",We.landcoverClasses]],paint:{"fill-color":We.greenColor,"fill-opacity":We.greenOpacity}});const it=_n.buildings;H.addLayer({id:"buildings-3d",type:"fill-extrusion",source:oe,"source-layer":"building",minzoom:it.minZoom,paint:{"fill-extrusion-base":["get",it.baseField],"fill-extrusion-height":["get",it.heightField],"fill-extrusion-opacity":it.opacity,"fill-extrusion-color":["interpolate",["linear"],["get",it.heightField],0,it.lowColor,it.highRiseMeters,it.highColor]}})}let ye=[a.start[0],a.start[1]],St,nt,Ft,sn;const Kt={};function Gn(We){return Kt[We.id]||(Kt[We.id]=G(We.id)),Kt[We.id]}const Tr=new hy,li={};function yo(We){const it=We.model?.glb;if(!it||li[We.id])return;li[We.id]="loading";const Ct=a.assetsBase+it;console.log(`[rider] loading model for '${We.id}': ${Ct}`),Tr.load(Ct,Tt=>{const un=Tt.scene,$t=We.model.scale??1;un.scale.setScalar($t),un.rotation.y=We.model.yaw??0,un.position.y=We.model.y??0,li[We.id]=un;const Rn=new Ci().setFromObject(un).getSize(new I);console.log(`[rider] model loaded for '${We.id}': bbox ${Rn.x.toFixed(2)}x${Rn.y.toFixed(2)}x${Rn.z.toFixed(2)} (scale ${$t})`),R(h).id===We.id&&Mo()},Tt=>{Tt.total&&console.debug(`[rider] '${We.id}' loading ${Math.round(Tt.loaded/Tt.total*100)}%`)},Tt=>{li[We.id]="error",console.error(`[rider] FAILED to load model for '${We.id}' from ${Ct} — falling back to procedural mesh`,Tt)})}function Mo(){if(!sn)return;sn.clear();const We=li[R(h).id];R(h).model?.glb&&We&&We!=="loading"&&We!=="error"?sn.add(We):sn.add(Gn(R(h)))}let Xs,Sa,So=0;const Yn={lngLat:[a.start[0],a.start[1]],heading:0,agl:0,groundElev:0,vis:1};let yc="";const Ea=new Array(60).fill(16.7);let Eo=0,qs=60;const Ar=120,Mc=new Array(Ar).fill(16.7),Sc=new Array(Ar).fill(60),bo=new Array(Ar).fill(0);let wr=0;function Vd(){const We=R(f);if(!We)return;const it=We.getContext("2d");if(!it)return;const Ct=We.width,Tt=We.height;it.clearRect(0,0,Ct,Tt);const un=Ea.length,$t=40;it.beginPath();for(let Ot=0;Ot<un;Ot++){const Rn=Ea[(Eo+Ot)%un],jn=Ot/(un-1)*Ct,Hn=Tt-Math.min(Rn,$t)/$t*Tt;Ot===0?it.moveTo(jn,Hn):it.lineTo(jn,Hn)}it.strokeStyle=R(M)>33?"#ff5c5c":R(M)>16?"#ffb84d":"#5ee6a0",it.lineWidth=1.5,it.stroke()}function To(We,it,Ct,Tt,un){if(!We)return;const $t=We.getContext("2d");if(!$t)return;const Ot=We.width,Rn=We.height;$t.clearRect(0,0,Ot,Rn);const jn=it.length;$t.beginPath();for(let Hn=0;Hn<jn;Hn++){const Dn=it[(Ct+Hn)%jn],Oi=Hn/(jn-1)*Ot,Bi=Rn-Math.min(Dn,Tt)/Tt*Rn;Hn===0?$t.moveTo(Oi,Bi):$t.lineTo(Oi,Bi)}$t.strokeStyle=un,$t.lineWidth=1.5,$t.stroke()}function Wd(){if(!R(v))return;To(R(D),Sc,wr,90,"#5ee6a0"),To(R(x),Mc,wr,40,R(M)>33?"#ff5c5c":R(M)>16?"#ffb84d":"#5ee6a0");const We=Math.max(20,...bo);To(R(b),bo,wr,We,"#9db4ff")}const Xd={id:"rider",type:"custom",renderingMode:"3d",onAdd(We,it){St=new pl,St.add(new Dh(16777215,.6));const Ct=new Vl(16777215,.8);Ct.position.set(0,-70,100).normalize(),St.add(Ct),sn=new gi,St.add(sn);for(const Dn of a.drivers)yo(Dn);Mo(),nt=new ec,Ft=new zl({canvas:H.getCanvas(),context:it}),Ft.autoClear=!1;const Tt=_n.nature.trees,un=Math.min(Tt.count,300),$t=he(Tt.canopyColor,Tt.trunkColor),Ot=new fr({vertexColors:!0});Sa=new wd($t,Ot,un);const Rn=[a.start[0],a.start[1]],jn=new Xe;for(let Dn=0;Dn<un;Dn++){const Oi=N(Dn,.1)*Math.PI*2,Bi=Math.sqrt(N(Dn,.7))*Tt.radius,Zr=Tt.minScale+N(Dn,.4)*(Tt.maxScale-Tt.minScale),Ao=Math.cos(Oi)*Bi,wo=Math.sin(Oi)*Bi,yi=ne.MercatorCoordinate.fromLngLat(Rn,0),Rr=yi.meterInMercatorCoordinateUnits();yi.x+=Ao*Rr,yi.y+=wo*Rr;const Cr=yi.meterInMercatorCoordinateUnits();jn.makeTranslation(yi.x,yi.y,yi.z).multiply(new Xe().makeRotationX(Math.PI/2)).multiply(new Xe().makeScale(Cr*Zr,Cr*Zr,Cr*Zr)),Sa.setMatrixAt(Dn,jn)}Sa.instanceMatrix.needsUpdate=!0,Xs=new pl,Xs.add(new Dh(16777215,.7));const Hn=new Vl(16777215,.7);Hn.position.set(0,-70,100).normalize(),Xs.add(Hn),Xs.add(Sa)},render(We,it){Cf(kt),ge(Ie,performance.now(),!0);try{if(!H)return;const Ct=it?.defaultProjectionData?.mainMatrix;if(!Ct){console.warn("[rider] no projection matrix from maplibre v5 render args");return}const Tt=ne.MercatorCoordinate.fromLngLat(Yn.lngLat,Yn.groundElev+Yn.agl),un=new Xe().makeTranslation(Tt.x,Tt.y,Tt.z).multiply(new Xe().makeRotationX(Math.PI/2)).multiply(new Xe().makeRotationZ(-Yn.heading)).multiply(new Xe().makeScale(Yn.vis,Yn.vis,Yn.vis));nt.projectionMatrix=new Xe().fromArray(Ct).multiply(un),Ft.resetState(),Ft.render(St,nt),nt.projectionMatrix=new Xe().fromArray(Ct),Ft.render(Xs,nt),R(U)&&R(kt)%30===0&&(console.groupCollapsed(`[rider] frame ${R(kt)} — driver=${R(h).id}`),console.debug("[rider]",{fps:Math.round(R(p)),renderCalls:R(T),driver:R(h).id,camera:R(d).id,freeInput:{moveX:Qe.moveX,moveY:Qe.moveY,yawRate:Qe.yawRate,pitchRate:Qe.pitchRate,climb:Al()},frameState:Yn}),R(h).control==="flight"&&y&&(console.debug("[rider] channelOwners",y.channelOwners),console.table({"raw.moveX":y.raw.moveX,"raw.moveY":y.raw.moveY,"raw.yawRate":y.raw.yawRate,"raw.pitchRate":y.raw.pitchRate,"key.leftY":y.keyAxes?.leftY,"key.yaw":y.keyAxes?.yaw,"key.pitch":y.keyAxes?.pitch,"key.roll":y.keyAxes?.roll,rawLeftY:y.derived.rawLeftY,rawYaw:y.derived.rawYaw,rawPitch:y.derived.rawPitch,rawRoll:y.derived.rawRoll,pitchAxis:y.axes.pitchAxis,rollAxis:y.axes.rollAxis,yawAxis:y.axes.yawAxis,leftY:y.axes.leftY,throttleOut:y.axes.throttleOut}),console.debug("[rider] telemetry",y.telemetry,"phase",y.phase)),console.groupEnd())}catch(Ct){ge(B,Ct instanceof Error?`${Ct.message}
${Ct.stack??""}`:String(Ct),!0),console.error("[rider] render() threw",Ct)}}};H.addLayer(Xd),Fe=Rf(()=>{ia(()=>{R(h),Mo()})});const Ec=We=>{if(!(Be||!H))try{const it=So?Math.min((We-So)/1e3,.1):0;if(So=We,ge(ot,We,!0),it>0){const At=it*1e3;ge(M,At),qs=qs+(1e3/At-qs)*.1,ge(p,qs,!0),Ea[Eo%Ea.length]=At,Eo++,Vd(),Mc[wr%Ar]=At,Sc[wr%Ar]=qs,wr++,Wd(),Ft&&(ge(T,Ft.info.render.calls,!0),ge(E,Ft.info.render.triangles,!0),ge(w,Ft.info.memory.geometries,!0),ge(S,Ft.info.memory.textures,!0),bo[(wr-1+Ar)%Ar]=R(T));const Xt=performance.memory?.usedJSHeapSize;ge(P,Xt!=null?Xt/(1024*1024):void 0,!0)}R(h).control!=="flight"&&(Je+=Qe.yawRate*(l.yawRate*Math.PI/180)*it,_t=Pe(_t+Qe.pitchRate*l.pitchRate*it,l.minPitch,l.skyMaxPitch));const Ct=R(h).speed,Tt=R(h).altitude;let un=null;if(Jt)try{Jt.setPosition(ye),un=Jt.sample()}catch(At){console.error("[rider] street provider disabled after error",At);try{Jt.destroy()}catch{}Jt=null}const $t=H.queryTerrainElevation(ye)??0;let Ot;if(R(h).control==="flight"){const At=R(h).flight;st!==null&&(Le.altASL=$t+st,st=null);const Xt=a.flightControls,Vn=ai(),Jr=(Ys,Aa)=>{const Qr=Pe(Ys,-1,1);return(1-Aa)*Qr+Aa*Qr*Qr*Qr},Rc=Pe(Qe.moveY+Vn.leftY,-1,1),Cc=Pe(Qe.moveX,-1,1),Lc=Pe(-Qe.pitchRate+Vn.pitch,-1,1),Pc=Pe(Qe.yawRate+Vn.roll,-1,1),Ic=Jr(Lc,Xt.expo),Dc=Jr(Pc,Xt.expo),Nc=Jr(Cc,Xt.expo),ba=Jr(Rc,Xt.expo);let Ta=R(bt);Xt.sticky_throttle.includes(At.model)?(ge(bt,Pe(R(bt)+ba*it*.5,0,1),!0),Ta=R(bt)):At.model==="helicopter"&&(Ta=Pe(.5+ba*.5,0,1));const qd={pitchAxis:Ic,rollAxis:Dc,yawAxis:Nc,throttle:Ta,climbAxis:At.model==="drone"?ba:0,gearDown:R(Ce),flaps:R(Ee),brake:R(we)?1:0},Yd={groundElev:$t,dt:it},Mi=(At.model==="airplane"?kh:At.model==="helicopter"?aM:oM)(Le,qd,At,Yd);if(ge(C,Mi,!0),y={raw:{moveX:Qe.moveX,moveY:Qe.moveY,yawRate:Qe.yawRate,pitchRate:Qe.pitchRate},keyAxes:Vn,derived:{rawLeftY:Rc,rawYaw:Cc,rawPitch:Lc,rawRoll:Pc},axes:{pitchAxis:Ic,rollAxis:Dc,yawAxis:Nc,leftY:ba,throttleOut:Ta},channelOwners:{...Ai},telemetry:Mi,phase:ie.phase},R(d).id!=="fps"){const Ys=Math.max(.001,c.springTau),Aa=1-Math.exp(-it/Ys),Qr=Math.atan2(Math.sin(Mi.heading-Je),Math.cos(Mi.heading-Je));Je+=Qr*Aa}const jd={...a.game,needsGear:At.model==="airplane"&&a.game.needsGear},Ro=ie.phase;if(cM(ie,Mi,jd,it),ge(et,ie.phase,!0),ge(Oe,ie.landings,!0),Ro!=="landed"&&ie.phase==="landed"&&(ge(ue,!0),setTimeout(()=>{ge(ue,!1)},2500)),Ro!=="crashed"&&ie.phase==="crashed"&&(ge(fe,!0),setTimeout(()=>{ge(fe,!1)},400)),Ro==="crashed"&&ie.phase==="spawn"){const Ys=R(h).altitude;Le.altASL=$t+Ys.default,Le.speed=(R(h).speed.idle??0)*t,Le.vspeed=0,Le.bank=0,Le.pitch=0}It.update(Mi,At.model),Ot={heading:Mi.heading,forwardX:Math.sin(Mi.heading),forwardZ:-Math.cos(Mi.heading),dForward:Le.speed*it,altitude:Mi.altAGL}}else if(R(h).control==="vehicle"){const At=R(h).vehicle;Ot={...sM(Ae,{steerAxis:Qe.moveX,throttle:Math.max(0,Qe.moveY),brake:Math.max(0,-Qe.moveY)},{...At,maxSpeed:Ct.max*t,friction:un?.friction??1},it),altitude:Ae.altitude??0}}else Ot=rM(Ae,{moveX:Qe.moveX,moveY:Qe.moveY,camBearing:Je+R(d).bearingOffset*Math.PI/180,climb:Al()},{min:Ct.min*t,cruise:Ct.cruise*t,idle:Ct.idle*t,max:Ct.max*t,turn:R(h).turnRate*(Math.PI/180),accel:R(h).accel,turnAtMax:R(h).turnAtMax,speedRef:Ct.max*t,lift:Tt.climbRate,maxAlt:Tt.max,minAlt:Tt.min,deadzone:a.joystick.deadzone},it);ge(m,R(h).control==="flight"?(R(C)?.speed??0)/t:(Ae.speed??0)/t,!0),ge(g,Ot.altitude,!0);const Rn=ne.MercatorCoordinate.fromLngLat(ye,$t+Ot.altitude),jn=Rn.meterInMercatorCoordinateUnits();Rn.x+=Ot.forwardX*Ot.dForward*jn,Rn.y+=Ot.forwardZ*Ot.dForward*jn;const Hn=Rn.toLngLat();ye=[Hn.lng,Hn.lat],Yn.lngLat=ye,Yn.heading=Ot.heading,Yn.agl=Ot.altitude,Yn.groundElev=$t,Yn.vis=jn*(R(h).model?.scale??1)*(R(d).modelBoost??1);let Dn,Oi;const Bi=R(h).orbitZoom;if(Tt.model==="zoom"&&Bi)Dn=Pe(Bi.refZoom-Math.log2(Math.max(Ot.altitude,1)/Bi.refAltitude),.5,6),Oi=0;else{const At=R(h).control==="flight"?R(C)?.speed??0:Ae.speed;Dn=u(R(h),R(d),At);const Xt=R(d).targetLift,Vn=Xt==="eye"?Tt.eyeHeight:typeof Xt=="number"?Xt:0;Oi=$t+Ot.altitude+Vn}const Zr=`${R(h).id}:${R(d).id}`;yc!==Zr&&(yc=Zr,console.log(`[rider] camera path -> driver '${R(h).id}' camera '${R(d).id}': zoom ${Dn.toFixed(2)}, model '${Tt.model}', size ${R(h).size??c.refSize}`));const Ao=Pe(R(d).pitch+_t,0,l.mapMaxPitch),wo=R(h).control==="vehicle",yi=R(h).control==="flight";let Rr=c.fovBase,Cr=0;if(wo){const At=Ct.max*t,Xt=At>0?Math.min(1,Math.abs(Ae.speed??0)/At):0;Rr=c.fovBase+(c.fovMax-c.fovBase)*Xt;const Vn=R(h).vehicle;Cr=-c.rollMax*((Ae.steer??0)/Vn.maxSteer)*Xt}else if(yi&&R(C)){const At=Ct.max*t,Xt=At>0?Math.min(1,R(C).speed/At):0;Rr=c.fovBase+(c.fovMax-c.fovBase)*Xt,Cr=-(R(C).bank*180)/Math.PI*.5}(dt===void 0||Math.abs(Rr-dt)>.1)&&(dt=Rr,H.setVerticalFieldOfView?.(dt)),Ze=Cr;let bc=Je*180/Math.PI+R(d).bearingOffset,Tc=Ao,Ac=Oi,wc=Ze;if(yi&&R(C)&&R(d).id==="fps"){const Xt=R(h).cockpitEyeHeight??0;bc=R(C).heading*180/Math.PI,Tc=Pe(90-R(C).pitch*180/Math.PI,0,l.mapMaxPitch),wc=-(R(C).bank*180)/Math.PI,Ac=$t+Ot.altitude+Xt}if(H.jumpTo({center:ye,bearing:bc,pitch:Tc,zoom:Dn,elevation:Ac,roll:wc}),me)try{const At=!xe||Math.abs(xe[0]-ye[0])>1e-6||Math.abs(xe[1]-ye[1])>1e-6,Xt=Ot.altitude??0,Vn=Xt>3e3?10:Xt>500?13:15;At&&(xe=ye,me.jumpTo({center:ye,zoom:Vn,bearing:0,pitch:0})),s&&(s.style.transform=`translate(-50%, -50%) rotate(${Ot.heading*180/Math.PI}deg)`)}catch(At){console.error("[rider] minimap update failed",At)}if(R(_)&&bn&&qn&&Qn){const At=Math.min(1,Math.max(0,(_t-l.mapMaxPitch)/20));if(At<=0)R(_).style.display="none";else{R(_).style.display="",R(_).style.opacity=String(At);const Xt=Je,Vn=ad.degToRad(_t-90),Jr=new I(Math.sin(Xt)*Math.cos(Vn),Math.sin(Vn),-Math.cos(Xt)*Math.cos(Vn));Qn.position.set(0,0,0),Qn.lookAt(Jr),bn.render(qn,Qn)}}H.triggerRepaint()}catch(it){on++,ge(Ke,on,!0),on===1&&ge(ce,it instanceof Error?`${it.message}
${it.stack??""}`:String(it),!0),on<=5&&console.error("[rider] frame error",it),on===5&&console.error("[rider] further frame errors suppressed")}finally{ze=requestAnimationFrame(Ec)}};ze=requestAnimationFrame(Ec)})}})(),()=>{Be=!0,ze&&cancelAnimationFrame(ze),window.removeEventListener("keydown",zn),window.removeEventListener("keyup",Wn),window.removeEventListener("blur",oi),document.removeEventListener("visibilitychange",Ni),window.removeEventListener("error",Xn),window.removeEventListener("unhandledrejection",Ui),document.removeEventListener("mousemove",Fi),document.removeEventListener("pointerlockchange",br),window.removeEventListener("resize",$r),window.removeEventListener("pointerup",mn),window.removeEventListener("pointercancel",mn),bn?.dispose(),Fe?.(),Jt?.destroy(),It.destroy();try{me?.remove()}catch{}H?.remove()}});var J=oS();let de;var De=te(J);Si(De,H=>n=H,()=>n);var yt=Q(De,2);Si(yt,H=>ge(_,H),()=>R(_));var wt=Q(yt,2);{var lt=H=>{{let me=Zn(()=>R(ft)&&R(d).id==="fps");EM(H,{get telemetry(){return R(C)},get model(){return R(h).flight.model},get visible(){return R(me)}})}};Lt(wt,H=>{R(h).control==="flight"&&R(C)&&H(lt)})}var Wt=Q(wt,2);qt(Wt,1,"minimap-wrap svelte-1uha8ag",null,{},{hidden:!1});var In=te(Wt);Si(In,H=>i=H,()=>i);var Yr=Q(In,2);Si(Yr,H=>s=H,()=>s),ee(Wt);var jr=Q(Wt,2);{var tr=H=>{var me=FM();Yi(me,21,()=>$,ro,(xe,Fe)=>{var Be=UM(),ze=te(Be),Ge=te(ze,!0);ee(ze);var Je=Q(ze),_t=te(Je,!0);ee(Je),ee(Be),Bt(()=>{Ue(Ge,R(Fe).key),Ue(_t,R(Fe).action)}),ht(xe,Be)}),ee(me),ht(H,me)};Lt(jr,H=>{R(K)&&H(tr)})}var yr=Q(jr,2);{var nr=H=>{var me=BM(),xe=te(me),Fe=te(xe);ee(xe);var Be=Q(xe,2),ze=te(Be);ee(Be);var Ge=Q(Be,2),Je=te(Ge);ee(Ge);var _t=Q(Ge,2),It=te(_t);ee(_t);var nn=Q(_t,2),Sn=te(nn);ee(nn);var Jt=Q(nn,2),on=te(Jt);ee(Jt);var vt=Q(Jt,2);let rn;var Qt=te(vt);ee(vt);var ai=Q(vt,2);{var jt=En=>{var zn=OM(),Wn=te(zn);ee(zn),Bt(()=>Ue(Wn,`game phase ${R(et)??""} · landings ${R(Oe)??""}`)),ht(En,zn)};Lt(ai,En=>{R(h).control==="flight"&&En(jt)})}ee(me),Bt((En,zn,Wn,oi,Ni,Xn,Ui,xi,Fi)=>{Ue(Fe,`fps ${En??""} · ${R(T)??""} draws`),Ue(ze,`render: ${R(kt)??""} calls —
        ${R(ot)-R(Ie)>500?"STALLED":"LIVE"}`),Ue(Je,`moveX ${zn??""} moveY ${Wn??""}`),Ue(It,`yawRate ${oi??""} pitchRate ${Ni??""}
        climb ${Xn??""}`),Ue(Sn,`driver ${R(h).id??""} · camera ${R(d).id??""}`),Ue(on,`heading ${Ui??""}° · alt ${xi??""}m
        · speed ${Fi??""} km/h`),rn=qt(vt,1,"svelte-1uha8ag",null,rn,{err:R(B)!=="none"}),Ue(Qt,`err: ${R(B)??""}`)},[()=>Math.round(R(p)),()=>Qe.moveX.toFixed(2),()=>Qe.moveY.toFixed(2),()=>Qe.yawRate.toFixed(2),()=>Qe.pitchRate.toFixed(2),()=>Al().toFixed(2),()=>(Ae.heading*(180/Math.PI)).toFixed(1),()=>(Ae.altitude??0).toFixed(1),()=>R(m).toFixed(2)]),ht(H,me)};Lt(yr,H=>{R(U)&&H(nr)})}var Vs=Q(yr,2);{var ga=H=>{var me=zM(),xe=aa(me);xe.__click=()=>ge(zt,!R(zt));var Fe=te(xe);ee(xe);var Be=Q(xe,2);{var ze=Ge=>{var Je=kM(),_t=te(Je),It=te(_t,!0);ee(_t),ee(Je),Bt(()=>Ue(It,R(ce))),ht(Ge,Je)};Lt(Be,Ge=>{R(zt)&&Ge(ze)})}Bt(()=>Ue(Fe,`⚠ frame errors: ${R(Ke)??""}`)),ht(H,me)};Lt(Vs,H=>{R(Ke)>0&&H(ga)})}var _a=Q(Vs,2);{var xo=H=>{var me=GM();ht(H,me)};Lt(_a,H=>{R(fe)&&H(xo)})}var va=Q(_a,2);{var A=H=>{var me=HM();ht(H,me)};Lt(va,H=>{R(ue)&&H(A)})}var O=Q(va,2);{var V=H=>{var me=WM(),xe=te(me);{var Fe=Je=>{var _t=VM(),It=aa(_t),nn=te(It);Bf(nn);var Sn=Q(nn,2),Jt=te(Sn);ee(Sn),ee(It);var on=Q(It,2);let vt;on.__click=()=>ge(Ce,!R(Ce));var rn=Q(on,2);let Qt;rn.__click=()=>ge(Ee,R(Ee)>0?0:1,!0),Bt(ai=>{Ue(Jt,`THR ${ai??""}%`),vt=qt(on,1,"flight-btn svelte-1uha8ag",null,vt,{active:R(Ce)}),Qt=qt(rn,1,"flight-btn svelte-1uha8ag",null,Qt,{active:R(Ee)>0})},[()=>(R(bt)*100).toFixed(0)]),Gf(nn,()=>R(bt),ai=>ge(bt,ai)),ht(Je,_t)};Lt(xe,Je=>{R(h).flight.model==="airplane"&&Je(Fe)})}var Be=Q(xe,2);Be.__click=()=>ae();var ze=Q(Be,2);ze.__click=()=>Z();var Ge=te(ze,!0);ee(ze),ee(me),Bt(()=>Ue(Ge,R(q)?"🔇":"🔊")),ht(H,me)};Lt(O,H=>{R(h).control==="flight"&&H(V)})}var W=Q(O,2);let z;W.__click=()=>ge(j,!R(j));var Me=Q(W,2);{var Ne=H=>{var me=JM(),xe=te(me),Fe=Q(te(xe),2);Yi(Fe,17,()=>Se,Rt=>Rt.id,(Rt,ne)=>{var oe=XM(),ye=te(oe,!0);ee(oe),Bt(()=>{vn(oe,"href",R(ne).href),Ue(ye,R(ne).label)}),ht(Rt,oe)}),ee(xe);var Be=Q(xe,2),ze=Q(te(Be),2),Ge=te(ze);Ge.__click=ve;var Je=Q(Ge,2);Je.__click=He;var _t=Q(Je,2);_t.__click=X;var It=Q(_t,2);let nn;It.__click=se;var Sn=te(It);ee(It),ee(ze);var Jt=Q(ze,2);Yi(Jt,17,()=>a.cameras,Rt=>Rt.id,(Rt,ne)=>{var oe=qM();let ye;oe.__click=()=>ge(d,R(ne),!0);var St=te(oe),nt=te(St,!0);ee(St);var Ft=Q(St);ee(oe),Bt(()=>{ye=qt(oe,1,"menu-item svelte-1uha8ag",null,ye,{active:R(ne).id===R(d).id}),Ue(nt,R(ne).icon),Ue(Ft,` ${R(ne).label??""}`)}),ht(Rt,oe)}),ee(Be);var on=Q(Be,2),vt=Q(te(on),2);Yi(vt,17,()=>a.drivers,Rt=>Rt.id,(Rt,ne)=>{var oe=YM();let ye;oe.__click=()=>ge(h,R(ne),!0);var St=te(oe),nt=te(St,!0);ee(St);var Ft=Q(St);ee(oe),Bt(()=>{ye=qt(oe,1,"menu-item svelte-1uha8ag",null,ye,{active:R(ne).id===R(h).id}),Ue(nt,R(ne).icon),Ue(Ft,` ${R(ne).label??""}`)}),ht(Rt,oe)}),ee(on);var rn=Q(on,2),Qt=Q(te(rn),2);{var ai=Rt=>{var ne=jM(),oe=aa(ne);let ye;oe.__click=()=>ge(Ce,!R(Ce));var St=te(oe);ee(oe);var nt=Q(oe,2);let Ft;nt.__click=()=>ge(Ee,R(Ee)>0?0:1,!0);var sn=te(nt);ee(nt);var Kt=Q(nt,2);let Gn;Kt.__pointerdown=()=>ge(we,!0),Kt.__pointerup=()=>ge(we,!1),Bt(()=>{ye=qt(oe,1,"menu-item svelte-1uha8ag",null,ye,{active:R(Ce)}),Ue(St,`Gear ${R(Ce)?"Down":"Up"}`),Ft=qt(nt,1,"menu-item svelte-1uha8ag",null,Ft,{active:R(Ee)>0}),Ue(sn,`Flaps ${R(Ee)>0?"Out":"Up"}`),Gn=qt(Kt,1,"menu-item svelte-1uha8ag",null,Gn,{active:R(we)})}),vs("pointerleave",Kt,()=>ge(we,!1)),ht(Rt,ne)};Lt(Qt,Rt=>{R(h).control==="flight"&&Rt(ai)})}var jt=Q(Qt,2);let En;jt.__click=()=>ge(L,!R(L));var zn=Q(jt,2);let Wn;zn.__click=()=>{const Rt=new URL(window.location.href);R(U)?Rt.searchParams.set("debug","0"):Rt.searchParams.set("debug","1"),window.location.href=Rt.toString()};var oi=Q(zn,2);let Ni;oi.__click=()=>ge(ft,!R(ft));var Xn=Q(oi,2);Xn.__click=je;var Ui=te(Xn);ee(Xn);var xi=Q(Xn,2);let Fi;xi.__click=()=>ge(k,!R(k));var br=Q(xi,2);{var mn=Rt=>{var ne=$M(),oe=te(ne);Yi(oe,17,()=>Object.entries(a.keys),ro,(ye,St)=>{var nt=Zn(()=>Lf(R(St),2));let Ft=()=>R(nt)[0],sn=()=>R(nt)[1];var Kt=KM(),Gn=te(Kt),Tr=te(Gn,!0);ee(Gn);var li=Q(Gn);ee(Kt),Bt(yo=>{Ue(Tr,Ft()),Ue(li,`: ${yo??""}`)},[()=>sn().join(" / ")]),ht(ye,Kt)}),Ss(2),ee(ne),ht(Rt,ne)};Lt(br,Rt=>{R(k)&&Rt(mn)})}var bn=Q(br,2);let qn;bn.__click=()=>ge(F,!R(F));var Qn=Q(bn,2);{var $r=Rt=>{var ne=ZM();ht(Rt,ne)};Lt(Qn,Rt=>{R(F)&&Rt($r)})}ee(rn),ee(me),Bt(()=>{nn=qt(It,1,"menu-btn svelte-1uha8ag",null,nn,{active:R(le)}),Ue(Sn,`3D ${R(le)?"On":"Off"}`),En=qt(jt,1,"menu-item svelte-1uha8ag",null,En,{active:R(L)}),Wn=qt(zn,1,"menu-item svelte-1uha8ag",null,Wn,{active:R(U)}),Ni=qt(oi,1,"menu-item svelte-1uha8ag",null,Ni,{active:R(ft)}),Ue(Ui,`Log Export${R(Re)?` — ${R(Re)}`:""}`),Fi=qt(xi,1,"menu-item svelte-1uha8ag",null,Fi,{active:R(k)}),qn=qt(bn,1,"menu-item svelte-1uha8ag",null,qn,{active:R(F)})}),ht(H,me)};Lt(Me,H=>{R(j)&&H(Ne)})}var ke=Q(Me,2),qe=te(ke),ct=te(qe);{var at=H=>{var me=eS();Yi(me,21,()=>a.cameras,xe=>xe.id,(xe,Fe)=>{var Be=QM();let ze;Be.__click=()=>{ge(d,R(Fe),!0),ge(Y,!1)};var Ge=te(Be),Je=te(Ge,!0);ee(Ge);var _t=Q(Ge);ee(Be),Bt(()=>{ze=qt(Be,1,"fab-popup-item svelte-1uha8ag",null,ze,{active:R(Fe).id===R(d).id}),Ue(Je,R(Fe).icon),Ue(_t,` ${R(Fe).label??""}`)}),ht(xe,Be)}),ee(me),ht(H,me)};Lt(ct,H=>{R(Y)&&H(at)})}var tt=Q(ct,2);tt.__click=()=>{ge(Y,!R(Y)),ge(re,!1)};var Zt=te(tt,!0);ee(tt),ee(qe);var An=Q(qe,2),an=te(An);{var si=H=>{var me=nS();Yi(me,21,()=>a.drivers,xe=>xe.id,(xe,Fe)=>{var Be=tS();let ze;Be.__click=()=>{ge(h,R(Fe),!0),ge(re,!1)};var Ge=te(Be),Je=te(Ge,!0);ee(Ge);var _t=Q(Ge);ee(Be),Bt(()=>{ze=qt(Be,1,"fab-popup-item svelte-1uha8ag",null,ze,{active:R(Fe).id===R(h).id}),Ue(Je,R(Fe).icon),Ue(_t,` ${R(Fe).label??""}`)}),ht(xe,Be)}),ee(me),ht(H,me)};Lt(an,H=>{R(re)&&H(si)})}var Gt=Q(an,2);Gt.__click=()=>{ge(re,!R(re)),ge(Y,!1)};var ut=te(Gt,!0);ee(Gt),ee(An),ee(ke);var Mr=Q(ke,2),Ht=te(Mr);{var Di=H=>{var me=iS();let xe;me.__click=()=>ge(v,!R(v));var Fe=te(me);Si(Fe,It=>ge(f,It),()=>R(f));var Be=Q(Fe,2),ze=te(Be),Ge=te(ze);ee(ze);var Je=Q(ze,2),_t=te(Je);ee(Je),ee(Be),ee(me),Bt(It=>{xe=qt(me,1,"perf svelte-1uha8ag",null,xe,{warn:R(M)>16,bad:R(M)>33}),vn(me,"aria-expanded",R(v)),Ue(Ge,`${It??""} fps`),Ue(_t,`${R(T)??""} draws`)},[()=>Math.round(R(p))]),ht(H,me)};Lt(Ht,H=>{R(L)&&H(Di)})}var xa=Q(Ht,2);{var Sr=H=>{var me=sS(),xe=te(me),Fe=Q(te(xe),2);Si(Fe,mn=>ge(D,mn),()=>R(D));var Be=Q(Fe,2),ze=te(Be,!0);ee(Be),ee(xe);var Ge=Q(xe,2),Je=Q(te(Ge),2);Si(Je,mn=>ge(x,mn),()=>R(x));var _t=Q(Je,2);let It;var nn=te(_t);ee(_t),ee(Ge);var Sn=Q(Ge,2),Jt=Q(te(Sn),2);Si(Jt,mn=>ge(b,mn),()=>R(b));var on=Q(Jt,2),vt=te(on,!0);ee(on),ee(Sn);var rn=Q(Sn,2),Qt=Q(te(rn)),ai=te(Qt,!0);ee(Qt),ee(rn);var jt=Q(rn,2),En=Q(te(jt)),zn=te(En,!0);ee(En),ee(jt);var Wn=Q(jt,2),oi=Q(te(Wn)),Ni=te(oi,!0);ee(oi),ee(Wn);var Xn=Q(Wn,2),Ui=Q(te(Xn)),xi=te(Ui,!0);ee(Ui),ee(Xn);var Fi=Q(Xn,2);{var br=mn=>{var bn=rS(),qn=Q(te(bn)),Qn=te(qn);ee(qn),ee(bn),Bt($r=>Ue(Qn,`${$r??""} MB`),[()=>R(P).toFixed(1)]),ht(mn,bn)};Lt(Fi,mn=>{R(P)!=null&&mn(br)})}ee(me),Bt((mn,bn,qn)=>{Ue(ze,mn),It=qt(_t,1,"perf-num svelte-1uha8ag",null,It,{warn:R(M)>16,bad:R(M)>33}),Ue(nn,`${bn??""} ms`),Ue(vt,R(T)),Ue(ai,R(T)),Ue(zn,qn),Ue(Ni,R(w)),Ue(xi,R(S))},[()=>Math.round(R(p)),()=>R(M).toFixed(1),()=>R(E).toLocaleString()]),ht(H,me)};Lt(xa,H=>{R(L)&&R(v)&&H(Sr)})}ee(Mr);var Er=Q(Mr,2),cn=te(Er),vi=Q(cn),Ws=te(vi);ee(vi),Ss(),ee(Er);var wn=Q(Er,2),Kr=te(wn),ya=Q(Kr),Ma=te(ya);ee(ya),Ss(),ee(wn);var vc=Q(wn,2);{var Gd=H=>{var me=aS(),xe=te(me);xe.__pointerdown=()=>Qe.climbPointer=1,xe.__pointerup=()=>Qe.climbPointer=0;var Fe=Q(xe,2);Fe.__pointerdown=()=>Qe.climbPointer=-1,Fe.__pointerup=()=>Qe.climbPointer=0,ee(me),vs("pointerleave",xe,()=>Qe.climbPointer=0),vs("pointercancel",xe,()=>Qe.climbPointer=0),vs("pointerleave",Fe,()=>Qe.climbPointer=0),vs("pointercancel",Fe,()=>Qe.climbPointer=0),ht(H,me)};Lt(vc,H=>{R(h).altitude.climbRate>0&&H(Gd)})}var xc=Q(vc,2);zh(xc,{side:"left",channel:"drive",get scale(){return o.scale}});var Hd=Q(xc,2);zh(Hd,{side:"right",channel:"look",get scale(){return o.scale}}),ee(J),Bt((H,me)=>{de=qt(J,1,"map-wrap svelte-1uha8ag",null,de,{shake:R(fe)}),z=qt(W,1,"hamburger svelte-1uha8ag",null,z,{active:R(j)}),vn(W,"aria-expanded",R(j)),Ue(Zt,R(d).icon),Ue(ut,R(h).icon),Ue(cn,`${H??""} `),Ue(Ws,`/ ${R(h).speed.max??""}`),Ue(Kr,`${me??""} `),Ue(Ma,`/ ${R(h).altitude.max??""}`)},[()=>Math.round(R(m)),()=>Math.round(R(g))]),ht(r,J),Kl()}Xh(["click","pointerdown","pointerup"]);export{pS as component};
