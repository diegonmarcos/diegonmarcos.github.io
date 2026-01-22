"use strict";(()=>{var xe={physics:{repulsion:0,attraction:0,centerGravity:0,damping:.98,ambientForce:0,ambientFrequency:.002,minVelocity:0,maxVelocity:1},visual:{nodeRadiusByDepth:[45,32,24,16,12],glowIntensityByDepth:[1,.8,.6,.4,.25],opacityByDepth:[1,.95,.85,.7,.5],breatheDuration:4e3,particleCount:80}};var A={levelSpacing:280,siblingSpacing:120,minZoom:.2,maxZoom:2.5,defaultZoom:1,panEasing:.12,hoverFadeSpeed:.15,expansionDuration:2e3,expansionEasing:.08};var Fe={root:{id:"dnm",label:"DNM",fullLabel:"Diego Nepomuceno Marcos",icon:"user",color:"#2196F3",children:["professional","personal"]},nodes:{professional:{id:"professional",label:"Professional",icon:"briefcase",color:"#4CAF50",children:["profile-pro","repos","nexus"]},personal:{id:"personal",label:"Personal",icon:"heart",color:"#E91E63",children:["profile-personal","deving","tools","circus"]},"profile-pro":{id:"profile-pro",label:"Profile",icon:"user",color:"#4CAF50",children:["contact-pro","profiles-pro","ventures","curriculum"]},repos:{id:"repos",label:"Repos",icon:"brand-github",color:"#4CAF50",children:["github-overview","cs-repos","eng-finance-repos"]},nexus:{id:"nexus",label:"Nexus",icon:"rocket",color:"#4CAF50",children:["nexus-contact","nexus-venture"]},"profile-personal":{id:"profile-personal",label:"Profile",icon:"user",color:"#E91E63",children:["contact-personal","profiles-personal","my-media","my-endurance","my-maps","my-bucket"]},deving:{id:"deving",label:"Deving",icon:"code",color:"#E91E63",children:["cloud-portal","ai-tools","inbox-tools","productivity-tools","dev-tools"]},tools:{id:"tools",label:"Tools",icon:"settings",color:"#E91E63",children:["health-tools","finance-tools","content-tools"]},circus:{id:"circus",label:"Circus",icon:"sparkles",color:"#E91E63",children:["games","video","audio"]},"contact-pro":{id:"contact-pro",label:"Contact",icon:"mail",color:"#81C784",links:[{label:"Email",url:"mailto:me@diegonmarcos.com",icon:"mail"},{label:"LinkedIn",url:"https://linkedin.com/in/diegonmarcos",icon:"brand-linkedin"},{label:"vCard",url:"public/diegonmarcos-contact_photo.vcf",icon:"user",download:!0}]},"profiles-pro":{id:"profiles-pro",label:"Profiles",icon:"world",color:"#81C784",links:[{label:"Landpage",url:"https://diegonmarcos.com/",icon:"world"},{label:"LinkedIn",url:"https://linkedin.com/in/diegonmarcos",icon:"brand-linkedin"},{label:"Github",url:"https://github.com/diegonmarcos",icon:"brand-github"}]},ventures:{id:"ventures",label:"Ventures",icon:"rocket",color:"#81C784",links:[{label:"Nexus",url:"https://diegonmarcos.github.io/nexus/",icon:"rocket"}]},curriculum:{id:"curriculum",label:"Curriculum",icon:"file-type-pdf",color:"#81C784",links:[{label:"CV (web)",url:"https://diegonmarcos.github.io/cv_web",icon:"file-type-html"},{label:"CV (pdf)",url:"https://diegonmarcos.github.io/cv_pdf",icon:"file-type-pdf"}]},"github-overview":{id:"github-overview",label:"Overview",icon:"brand-github",color:"#81C784",links:[{label:"Github",url:"https://github.com/diegonmarcos",icon:"brand-github"}]},"cs-repos":{id:"cs-repos",label:"Computer Science",icon:"brain",color:"#81C784",links:[{label:"Back-End",url:"https://github.com/diegonmarcos/back-System",icon:"settings"},{label:"Cyber-Security",url:"https://github.com/diegonmarcos/cyber-Cyberwarfare",icon:"bolt"},{label:"DevOps",url:"https://github.com/diegonmarcos/ops-Tooling",icon:"git-branch"},{label:"Front-End",url:"https://github.com/diegonmarcos/diegonmarcos.github.io",icon:"world"},{label:"ARM Mobile",url:"https://github.com/diegonmarcos/front-android-Portfolio",icon:"device-desktop"},{label:"Data Science",url:"https://github.com/diegonmarcos/ml-DataScience",icon:"brain"}]},"eng-finance-repos":{id:"eng-finance-repos",label:"Engineering & Finance",icon:"database",color:"#81C784",links:[{label:"Civil Engineer",url:"https://github.com/diegonmarcos/cveng_AFrame",icon:"settings"},{label:"Macro Economics",url:"https://github.com/diegonmarcos/ecoqt-thesis1",icon:"world-longitude"},{label:"Quant Finance",url:"https://github.com/diegonmarcos/ecoqt-thesis2",icon:"database"}]},"nexus-contact":{id:"nexus-contact",label:"Contact",icon:"mail",color:"#81C784",links:[{label:"Email",url:"mailto:me@diegonmarcos.com",icon:"mail"},{label:"LinkedIn",url:"https://linkedin.com/in/diegonmarcos",icon:"brand-linkedin"}]},"nexus-venture":{id:"nexus-venture",label:"Venture",icon:"rocket",color:"#81C784",links:[{label:"Website",url:"https://diegonmarcos.github.io/nexus/",icon:"rocket"},{label:"Slides",url:"https://diegonmarcos.github.io/nexus/slides",icon:"slideshow"}]},"contact-personal":{id:"contact-personal",label:"Contact",icon:"send",color:"#F48FB1",links:[{label:"Telegram",url:"https://t.me/diegonmarcos",icon:"send"},{label:"WhatsApp",url:"https://wa.me/34634769833",icon:"brand-whatsapp"}]},"profiles-personal":{id:"profiles-personal",label:"Profiles",icon:"user",color:"#F48FB1",links:[{label:"MyProfile",url:"https://diegonmarcos.github.io/myprofile",icon:"user"}]},"my-media":{id:"my-media",label:"Media",icon:"headphones",color:"#F48FB1",links:[{label:"TIDAL",url:"https://tidal.com/@diegonmarcos",icon:"headphones"},{label:"YouTube",url:"https://www.youtube.com/@diegonmarcos1",icon:"brand-youtube"},{label:"Pinterest",url:"https://www.pinterest.com/diegonmarcos",icon:"slideshow"},{label:"Instagram",url:"https://www.instagram.com/diegonmarcos",icon:"brand-instagram"}]},"my-endurance":{id:"my-endurance",label:"Endurance",icon:"bike",color:"#F48FB1",links:[{label:"Komoot",url:"https://www.komoot.com/user/2474200810898/routes",icon:"christmas-tree"},{label:"Strava",url:"https://www.strava.com/athletes/4662170",icon:"bike"}]},"my-maps":{id:"my-maps",label:"Maps",icon:"map-pin-2",color:"#F48FB1",links:[{label:"NomadMania",url:"https://nomadmania.com/profile/73889",icon:"brand-google-maps"},{label:"Google Maps",url:"https://www.google.com/maps/d/u/0/edit?mid=1Wpors-fGHMZOYPx41nDtyF9vXOJcpsY",icon:"map-pin-2"},{label:"Earth",url:"https://earth.google.com/earth/d/1WF5_9NDew9IB5xkTqXPpm9e9n8JM0a3H",icon:"world-longitude"}]},"my-bucket":{id:"my-bucket",label:"Bucket List",icon:"checklist",color:"#F48FB1",links:[{label:"50 Things",url:"https://bucketlistjourney.net/my-bucket-list",icon:"checklist"}]},"cloud-portal":{id:"cloud-portal",label:"Cloud Portal",icon:"settings",color:"#F48FB1",links:[{label:"Portal",url:"https://diegonmarcos.github.io/cloud",icon:"settings"}]},"ai-tools":{id:"ai-tools",label:"AI",icon:"robot",color:"#F48FB1",links:[{label:"Chat Multi-Model",url:"https://diegonmarcos.github.io/cloud/products.html",icon:"robot"},{label:"WebIDE",url:"https://diegonmarcos.github.io/cloud/products.html",icon:"device-desktop"}]},"inbox-tools":{id:"inbox-tools",label:"Inbox",icon:"mail",color:"#F48FB1",links:[{label:"Mail&Cal",url:"https://diegonmarcos.github.io/mymail",icon:"mail"},{label:"MyFeed",url:"https://diegonmarcos.github.io/myfeed",icon:"file-stack"}]},"productivity-tools":{id:"productivity-tools",label:"Productivity",icon:"file-stack",color:"#F48FB1",links:[{label:"Drive&Suite",url:"https://diegonmarcos.github.io/mydrive",icon:"file-stack"},{label:"JSON Vision",url:"https://diegonmarcos.github.io/json-vision",icon:"database"}]},"dev-tools":{id:"dev-tools",label:"DEV",icon:"git-branch",color:"#F48FB1",links:[{label:"API Endpoints",url:"https://diegonmarcos.github.io/cloud/api",icon:"git-branch"},{label:"MCP Tools",url:"https://diegonmarcos.github.io/cloud/mcp",icon:"settings"}]},"health-tools":{id:"health-tools",label:"Health",icon:"heart",color:"#F48FB1",links:[{label:"Feed Yourself",url:"https://diegonmarcos.github.io/feed_yourself",icon:"brain"},{label:"Health Tracker",url:"https://diegonmarcos.github.io/health_tracker",icon:"heart"}]},"finance-tools":{id:"finance-tools",label:"Finance",icon:"database",color:"#F48FB1",links:[{label:"Market Watch",url:"https://diegonmarcos.github.io/market_watch",icon:"database"},{label:"Central Bank",url:"https://diegonmarcos.github.io/central_bank",icon:"database"}]},"content-tools":{id:"content-tools",label:"Content",icon:"map-pin-2",color:"#F48FB1",links:[{label:"MyMaps",url:"https://diegonmarcos.github.io/mymaps",icon:"map-pin-2"}]},games:{id:"games",label:"Games",icon:"device-gamepad",color:"#F48FB1",links:[{label:"MyGames",url:"https://diegonmarcos.github.io/mygames",icon:"device-gamepad"}]},video:{id:"video",label:"Video",icon:"brand-youtube",color:"#F48FB1",links:[{label:"MyVideos",url:"https://diegonmarcos.github.io/myvideos",icon:"video"},{label:"MyMovies",url:"https://diegonmarcos.github.io/mymovies/",icon:"brand-youtube"}]},audio:{id:"audio",label:"Audio",icon:"headphones",color:"#F48FB1",links:[{label:"MyMusic",url:"https://diegonmarcos.github.io/mymusic/",icon:"headphones"}]}}};async function He(){return Promise.resolve(Fe)}function De(e){let n=[],t=[],o=new Map,i=Ge(e.root,0,null);n.push(i),o.set(i.id,i);function a(r,s,d){s&&s.forEach(l=>{let h=e.nodes[l];if(!h){console.warn(`Node not found: ${l}`);return}let u=Ge(h,d,r);n.push(u),o.set(u.id,u),r.children.push(u),t.push({source:r,target:u,highlighted:!1,opacity:1}),a(u,h.children,d+1),h.links&&h.links.length>0&&(!h.children||h.children.length===0)&&h.links.forEach((m,E)=>{let g=Bt(m,`${u.id}-link-${E}`,d+1,u);n.push(g),o.set(g.id,g),u.children.push(g),t.push({source:u,target:g,highlighted:!1,opacity:1})})})}return a(i,e.root.children,1),{nodes:n,edges:t}}function Bt(e,n,t,o){let i=xe.visual,a=Math.min(t,i.nodeRadiusByDepth.length-1);return{id:n,label:e.label,fullLabel:e.label,icon:e.icon,color:o.color,depth:t,parent:o,children:[],links:[e],x:0,y:0,vx:0,vy:0,targetX:0,targetY:0,radius:i.nodeRadiusByDepth[a],opacity:1,glowIntensity:i.glowIntensityByDepth[a],highlighted:!1,hovered:!1,focused:!1,breathePhase:Math.random()*Math.PI*2,breatheScale:1}}function Ge(e,n,t){let o=xe.visual,i=Math.min(n,o.nodeRadiusByDepth.length-1);return{id:e.id,label:e.label,fullLabel:e.fullLabel,icon:e.icon,color:e.color,depth:n,parent:t,children:[],links:e.links||[],x:0,y:0,vx:0,vy:0,targetX:0,targetY:0,radius:o.nodeRadiusByDepth[i],opacity:1,glowIntensity:o.glowIntensityByDepth[i],highlighted:!1,hovered:!1,focused:!1,breathePhase:Math.random()*Math.PI*2,breatheScale:1}}function At(e){let n=[],t=e.parent;for(;t;)n.push(t),t=t.parent;return n}function It(e){let n=[];function t(o){o.children.forEach(i=>{n.push(i),t(i)})}return t(e),n}function z(e,n,t){if(!t){e.forEach(l=>{l.highlighted=!1,l.opacity=1}),n.forEach(l=>{l.highlighted=!1,l.opacity=1});return}let o=At(t),i=It(t),a=new Set([t,...o,...i]),r=new Map;r.set(t,0),o.forEach((l,h)=>{r.set(l,h+1)});function s(l,h){l.children.forEach(u=>{r.has(u)||(r.set(u,h),s(u,h+1))})}s(t,1);let d=Math.max(...Array.from(r.values()),1);e.forEach(l=>{if(l.highlighted=a.has(l),l.highlighted){let h=r.get(l)||0;l.opacity=Math.max(.3,1-h/(d+1)*.7)}else l.opacity=.08}),n.forEach(l=>{if(l.highlighted=a.has(l.source)&&a.has(l.target),l.highlighted){let h=r.get(l.source)||0,u=r.get(l.target)||0,m=(h+u)/2;l.opacity=Math.max(.3,1-m/(d+1)*.7)}else l.opacity=.03})}var I=null,G=null,w=null,ce=new Map,Le=new Map;function Ye(e){if(I=e,G=document.getElementById("graph-world"),w=document.getElementById("edges-svg"),!G||!w){console.error("Graph DOM elements not found");return}Re(),window.addEventListener("resize",Re)}function Re(){if(!w||!I)return;let e=I.clientWidth,n=I.clientHeight;w.setAttribute("viewBox",`0 0 ${e} ${n}`),w.style.width=`${e}px`,w.style.height=`${n}px`}function de(){return{width:I?.clientWidth||window.innerWidth,height:I?.clientHeight||window.innerHeight}}function Xe(e){G&&(G.innerHTML="",ce.clear(),e.forEach((n,t)=>{let o=document.createElement("div");o.className=`node node--depth-${Math.min(n.depth,5)}`,o.dataset.nodeId=n.id,o.style.setProperty("--node-color",n.color),o.style.setProperty("--enter-delay",String(t)),o.style.setProperty("--icon-url",`url(public/icons/${n.icon}.svg)`),o.style.backgroundImage="none";let i=document.createElement("img");i.className="node-icon",i.src=`public/icons/${n.icon}.svg`,i.alt="",i.draggable=!1,o.appendChild(i);let a=document.createElement("span");if(a.className="node-label",a.textContent=n.label,o.appendChild(a),n.children.length>0&&n.depth<3){let r=document.createElement("span");r.className="node-badge",r.textContent=String(n.children.length),o.appendChild(r)}G.appendChild(o),ce.set(n.id,o)}))}function Ve(e){if(!w)return;w.innerHTML="",Le.clear();let n=document.createElementNS("http://www.w3.org/2000/svg","defs");w.appendChild(n),e.forEach((t,o)=>{let i=`edge-gradient-${o}`,a=document.createElementNS("http://www.w3.org/2000/svg","linearGradient");a.id=i,a.setAttribute("gradientUnits","userSpaceOnUse");let r=document.createElementNS("http://www.w3.org/2000/svg","stop");r.setAttribute("offset","0%"),r.setAttribute("stop-color",t.source.color);let s=document.createElementNS("http://www.w3.org/2000/svg","stop");s.setAttribute("offset","100%"),s.setAttribute("stop-color",t.target.color),a.appendChild(r),a.appendChild(s),n.appendChild(a);let d=document.createElementNS("http://www.w3.org/2000/svg","path");d.className.baseVal="edge",d.setAttribute("stroke",`url(#${i})`),d.dataset.sourceId=t.source.id,d.dataset.targetId=t.target.id,w.appendChild(d),Le.set(`${t.source.id}-${t.target.id}`,d)})}function T(e,n,t){if(!G||!w||!I)return;let o=I.clientWidth/2,i=I.clientHeight/2;G.style.transform=`
    translate(${o+t.x}px, ${i+t.y}px)
    scale(${t.scale})
    translate(${-o}px, ${-i}px)
  `,w.style.transform=G.style.transform,e.forEach(a=>{let r=ce.get(a.id);r&&(r.style.left=`${a.x}px`,r.style.top=`${a.y}px`,r.classList.toggle("highlighted",a.highlighted),r.classList.toggle("dimmed",!a.highlighted&&e.some(s=>s.highlighted)),r.classList.toggle("focused",a.focused),!a.highlighted&&!a.hovered?r.style.opacity=String(a.opacity):r.style.opacity="1")}),n.forEach(a=>{let r=Le.get(`${a.source.id}-${a.target.id}`);if(r){let{source:s,target:d}=a,l=(s.x+d.x)/2,h=(s.y+d.y)/2,u=d.x-s.x,m=d.y-s.y,E=Math.sqrt(u*u+m*m),g=E*.15,B=-m/E,F=u/E,q=l+B*g,ye=h+F*g;r.setAttribute("d",`M ${s.x} ${s.y} Q ${q} ${ye} ${d.x} ${d.y}`);let se=r.getAttribute("stroke")?.match(/url\(#(.+)\)/)?.[1];if(se){let f=w?.querySelector(`#${se}`);f&&(f.setAttribute("x1",String(s.x)),f.setAttribute("y1",String(s.y)),f.setAttribute("x2",String(d.x)),f.setAttribute("y2",String(d.y)))}r.classList.toggle("highlighted",a.highlighted)}})}function ze(e){return ce.get(e)}function $e(e,n,t){let o=e.find(a=>a.depth===0);if(!o)return;o.x=o.targetX=n,o.y=o.targetY=t,Oe(o,n,t,0,Math.PI*2,0,180)}function We(e,n,t){if(e.length===0)return 1;let o=1/0,i=-1/0,a=1/0,r=-1/0;e.forEach(g=>{let B=g.radius+30;o=Math.min(o,g.targetX-B),i=Math.max(i,g.targetX+B),a=Math.min(a,g.targetY-B),r=Math.max(r,g.targetY+B)});let s=i-o,d=r-a,l=n*.9,h=t*.9,u=l/s,m=h/d,E=Math.min(u,m,1);return Math.max(E,A.minZoom)}function Oe(e,n,t,o,i,a,r){if(e.children.length===0)return;let s=r*(a+1),d=e.children.length,l=i/d;e.children.forEach((h,u)=>{let m=o+l*u+l/2;h.x=h.targetX=n+Math.cos(m)*s,h.y=h.targetY=t+Math.sin(m)*s,Oe(h,n,t,o+l*u,l,a+1,r)})}function Ue(){return{x:0,y:0,scale:A.defaultZoom,targetX:0,targetY:0,targetScale:A.defaultZoom}}function qe(e,n,t,o){let i=t/2,a=o/2;n.targetX=i-e.x,n.targetY=a-e.y,n.targetScale=Math.min(1.5,A.maxZoom)}var Ze=1;function je(e){Ze=e}function j(e){e.targetX=0,e.targetY=0,e.targetScale=Ze}function Ke(e){e.targetScale=Math.min(e.targetScale*1.3,A.maxZoom)}function Je(e){e.targetScale=Math.max(e.targetScale/1.3,A.minZoom)}function we(e,n,t,o,i,a){let r=e.targetScale,s=Math.max(A.minZoom,Math.min(A.maxZoom,r*(1-o*.001))),d=i/2,l=a/2,h=n-d,u=t-l,m=s-r;e.targetX-=(h-e.targetX)*(m/r),e.targetY-=(u-e.targetY)*(m/r),e.targetScale=s}var b={hoveredNode:null,focusedNode:null,draggingNode:null,isPanning:!1,panStartX:0,panStartY:0,lastMouseX:0,lastMouseY:0},v=null,H=[],$=[],p=null,K=null,J=null,ke=null,Me=0,ue=!1;function et(e){ke=e}function Y(){ke&&ke()}function tt(e,n,t,o){v=e,H=n,$=t,p=o,H.forEach(i=>{let a=ze(i.id);a&&(a.addEventListener("click",r=>{r.stopPropagation(),K&&K(i)}),a.addEventListener("mouseenter",()=>{b.hoveredNode=i,i.hovered=!0,z(H,$,i),Y()}),a.addEventListener("mouseleave",()=>{i.hovered=!1,b.hoveredNode=null,b.focusedNode||z(H,$,null),Y()}))}),v.addEventListener("mousedown",_t),v.addEventListener("mousemove",Ft),v.addEventListener("mouseup",Qe),v.addEventListener("mouseleave",Qe),v.addEventListener("wheel",Gt,{passive:!1}),v.addEventListener("dblclick",Ht),v.addEventListener("click",i=>{let a=i.target;(a===v||a.id==="graph-world"||a.id==="edges-svg"||a.tagName==="svg"||a.tagName==="path")&&J&&J()}),v.addEventListener("touchstart",Dt,{passive:!1}),v.addEventListener("touchmove",Rt,{passive:!1}),v.addEventListener("touchend",Yt,{passive:!1})}function nt(e,n){K=e,J=n}function _t(e){e.target.closest(".node")||(b.isPanning=!0,b.panStartX=e.clientX,b.panStartY=e.clientY,v&&(v.style.cursor="grabbing"))}function Ft(e){if(!b.isPanning||!p)return;let n=e.clientX-b.panStartX,t=e.clientY-b.panStartY;p.x+=n,p.y+=t,p.targetX=p.x,p.targetY=p.y,b.panStartX=e.clientX,b.panStartY=e.clientY,Y()}function Qe(){b.isPanning=!1,v&&(v.style.cursor="grab")}function Gt(e){if(e.preventDefault(),!p||!v)return;let n=v.getBoundingClientRect(),t=e.clientX-n.left,o=e.clientY-n.top;we(p,t,o,e.deltaY,v.clientWidth,v.clientHeight),p.x=p.targetX,p.y=p.targetY,p.scale=p.targetScale,Y()}function Ht(e){e.target.closest(".node")||p&&(j(p),p.x=p.targetX,p.y=p.targetY,p.scale=p.targetScale,b.focusedNode=null,z(H,$,null),Y())}function Dt(e){let n=e.target;if(n.closest(".node")){let o=n.closest(".node")?.dataset.nodeId,i=H.find(a=>a.id===o);i&&K&&(e.preventDefault(),K(i));return}if(!(n.closest("#ui-overlay")&&!n.closest("#graph-container"))){if(e.preventDefault(),e.touches.length===1)b.isPanning=!0,b.panStartX=e.touches[0].clientX,b.panStartY=e.touches[0].clientY,ue=!1;else if(e.touches.length===2){b.isPanning=!1;let t=e.touches[0],o=e.touches[1];Me=Math.hypot(o.clientX-t.clientX,o.clientY-t.clientY)}}}function Rt(e){if(!p||!v)return;let n=e.target;if(!(n.closest("#ui-overlay")&&!n.closest("#graph-container"))){if(e.preventDefault(),ue=!0,e.touches.length===1&&b.isPanning){let t=e.touches[0],o=t.clientX-b.panStartX,i=t.clientY-b.panStartY;p.x+=o,p.y+=i,p.targetX=p.x,p.targetY=p.y,b.panStartX=t.clientX,b.panStartY=t.clientY,Y()}else if(e.touches.length===2){let t=e.touches[0],o=e.touches[1],i=Math.hypot(o.clientX-t.clientX,o.clientY-t.clientY),a=(t.clientX+o.clientX)/2,r=(t.clientY+o.clientY)/2,s=v.getBoundingClientRect(),d=(Me-i)*2;we(p,a-s.left,r-s.top,d,v.clientWidth,v.clientHeight),p.x=p.targetX,p.y=p.targetY,p.scale=p.targetScale,Me=i,Y()}}}function Yt(e){let n=e.target;!ue&&e.changedTouches.length===1&&!n.closest(".node")&&!n.closest("#ui-overlay")&&J&&J(),b.isPanning=!1,ue=!1}function Se(e){b.focusedNode=e,e&&z(H,$,e)}function Ne(){b.focusedNode=null,z(H,$,null)}var Xt=null,Vt=null,zt=null,$t=null,M=null,he=null,Pe=null,Q=null,ot=null,U=null,it=null,at=null,rt=null,lt=null,fe=null,Ce=null,ne=null,Te=null,S=null,k=null,me=null,pe=null,ee=null,W=null,P=null,st=null,D=null,c=null,oe=0,ie=0,_=[],O=null,ae=null,X=null,N=null;function dt(e,n,t){c=e,oe=n,ie=t,Xt=document.getElementById("tooltip"),Vt=document.getElementById("tooltip-title"),zt=document.getElementById("tooltip-subtitle"),$t=document.getElementById("tooltip-badge"),M=document.getElementById("link-panel"),he=document.getElementById("link-panel-icon"),Pe=document.getElementById("link-panel-title"),Q=document.getElementById("link-panel-links"),ot=document.getElementById("link-panel-close"),U=document.getElementById("btn-back"),it=document.getElementById("btn-home"),at=document.getElementById("btn-reset"),rt=document.getElementById("btn-zoom-in"),lt=document.getElementById("btn-zoom-out"),fe=document.getElementById("btn-fullscreen"),Ce=document.getElementById("zoom-indicator"),ne=document.getElementById("loading"),Te=document.getElementById("search-container"),S=document.getElementById("search-input"),k=document.getElementById("search-results"),me=document.getElementById("breadcrumb"),pe=document.getElementById("breadcrumb-nav"),ee=document.getElementById("minimap-canvas"),W=document.getElementById("minimap-viewport"),P=document.getElementById("keyboard-hints"),st=document.getElementById("hints-close"),D=document.createElement("div"),D.className="panel-backdrop",document.getElementById("ui-overlay")?.appendChild(D),ot?.addEventListener("click",Be),D?.addEventListener("click",Be),at?.addEventListener("click",ge),it?.addEventListener("click",ge),rt?.addEventListener("click",yt),lt?.addEventListener("click",Et),fe?.addEventListener("click",xt),U?.addEventListener("click",Jt),st?.addEventListener("click",bt),S?.addEventListener("input",Ut),S?.addEventListener("focus",()=>Te?.classList.add("focused")),S?.addEventListener("blur",()=>{setTimeout(()=>{Te?.classList.remove("focused"),k&&(k.hidden=!0)},200)}),document.addEventListener("keydown",Qt),R()}function ut(e){_=e}function ht(e){ae=e}function mt(e){X=e}function pt(e){N=e}function ft(e,n){oe=e,ie=n}function gt(){ne&&(ne.hidden=!1)}function Ae(){ne&&(ne.hidden=!0)}function R(){if(Ce&&c){let e=Math.round(c.scale*100);Ce.textContent=`${e}%`}}function C(e){if(!me||!pe)return;if(!e){me.hidden=!0;return}let n=[],t=e;for(;t;)n.unshift(t),t=t.parent;pe.innerHTML=n.map((o,i)=>{let a=i===n.length-1,r=o.label;return a?`<span class="breadcrumb-current" style="color: ${o.color}">${r}</span>`:`<button class="breadcrumb-item" data-node-id="${o.id}" style="--accent: ${o.color}">${r}</button><span class="breadcrumb-sep">\u203A</span>`}).join(""),pe.querySelectorAll(".breadcrumb-item").forEach(o=>{o.addEventListener("click",()=>{let i=o.dataset.nodeId,a=_.find(r=>r.id===i);a&&X&&X(a)})}),me.hidden=!1}function be(e){if(!M||!Pe||!Q||!D)return;O=e,M.style.setProperty("--panel-accent",e.color),he&&(he.innerHTML=`<img src="public/icons/${e.icon}.svg" alt="">`,he.style.backgroundColor=e.color),Pe.textContent=e.fullLabel||e.label,Q.innerHTML="";let n=Wt(e.links);Object.entries(n).forEach(([t,o])=>{if(Object.keys(n).length>1&&o.length>0){let i=document.createElement("div");i.className="link-group-header",i.textContent=t,Q.appendChild(i)}o.forEach(i=>{let a=Ot(i,e.color);Q.appendChild(a)})}),D.classList.add("visible"),M.hidden=!1,requestAnimationFrame(()=>{M?.classList.add("visible")}),C(e)}function Wt(e){let n={};return e.forEach(t=>{let o="Links",i=t.url.toLowerCase();i.includes("mailto:")||i.includes("linkedin")||i.includes("telegram")||i.includes("whatsapp")?o="Contact":i.includes("github")?o="Code":(t.download||i.includes(".pdf")||i.includes(".vcf"))&&(o="Downloads"),n[o]||(n[o]=[]),n[o].push(t)}),n}function Be(){!M||!D||(M.classList.remove("visible"),D.classList.remove("visible"),setTimeout(()=>{M&&!M.classList.contains("visible")&&(M.hidden=!0)},300))}function Ot(e,n){let t=document.createElement("a");return t.className="link-card",t.href=e.url,t.target="_blank",t.rel="noopener noreferrer",t.style.setProperty("--link-accent",n),e.download&&(t.download=""),t.innerHTML=`
    <div class="link-icon">
      <img src="public/icons/${e.icon}.svg" alt="${e.label}">
    </div>
    <span class="link-label">${e.label}</span>
    <svg class="link-arrow" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
      <path d="M7 17L17 7M17 7H7M17 7v10"/>
    </svg>
  `,t.addEventListener("click",o=>{let i=t.getBoundingClientRect(),a=document.createElement("span");a.className="ripple",a.style.left=`${o.clientX-i.left}px`,a.style.top=`${o.clientY-i.top}px`,t.appendChild(a),setTimeout(()=>a.remove(),600)}),t}function Ut(){if(!S||!k)return;let e=S.value.toLowerCase().trim();if(e.length<2){k.hidden=!0;return}let n=_.filter(t=>t.label.toLowerCase().includes(e)||t.fullLabel&&t.fullLabel.toLowerCase().includes(e));if(n.length===0){k.innerHTML='<div class="search-empty">No results found</div>',k.hidden=!1;return}k.innerHTML=n.slice(0,8).map(t=>`
      <button class="search-result" data-node-id="${t.id}">
        <span class="search-result-dot" style="background: ${t.color}"></span>
        <span class="search-result-label">${t.fullLabel||t.label}</span>
        <span class="search-result-path">${qt(t)}</span>
      </button>
    `).join(""),k.querySelectorAll(".search-result").forEach(t=>{t.addEventListener("click",()=>{let o=t.dataset.nodeId,i=_.find(a=>a.id===o);i&&X&&(X(i),S.value="",k.hidden=!0,S.blur())})}),k.hidden=!1}function qt(e){let n=[],t=e.parent;for(;t;)n.unshift(t.label),t=t.parent;return n.join(" \u203A ")}function Zt(e){let n=/^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(e);return n?{r:parseInt(n[1],16),g:parseInt(n[2],16),b:parseInt(n[3],16)}:{r:255,g:255,b:255}}function V(e,n){if(!ee||!W||!c)return;let t=ee.getContext("2d");if(!t)return;let o=ee.width,i=ee.height;t.clearRect(0,0,o,i);let a=1/0,r=-1/0,s=1/0,d=-1/0;e.forEach(f=>{a=Math.min(a,f.x),r=Math.max(r,f.x),s=Math.min(s,f.y),d=Math.max(d,f.y)});let l=20,h=r-a+l*2,u=d-s+l*2,m=Math.min(o/h,i/u),E=(o-h*m)/2-a*m+l*m,g=(i-u*m)/2-s*m+l*m,B=n.some(f=>f.highlighted);n.forEach(f=>{if(f.highlighted){let Z=t.createLinearGradient(f.source.x*m+E,f.source.y*m+g,f.target.x*m+E,f.target.y*m+g);Z.addColorStop(0,f.source.color),Z.addColorStop(1,f.target.color),t.strokeStyle=Z,t.lineWidth=1}else B?(t.strokeStyle="rgba(100,100,100,0.15)",t.lineWidth=.4):(t.strokeStyle="rgba(255,255,255,0.2)",t.lineWidth=.5);t.beginPath(),t.moveTo(f.source.x*m+E,f.source.y*m+g),t.lineTo(f.target.x*m+E,f.target.y*m+g),t.stroke()}),e.forEach(f=>{let Z=f.x*m+E,Pt=f.y*m+g,Ct=Math.max(2,f.radius*m*.3);if(f.highlighted)t.shadowBlur=8,t.shadowColor=f.color,t.fillStyle=f.color;else{t.shadowBlur=0;let Ee=Zt(f.color);t.fillStyle=`rgba(${Ee.r}, ${Ee.g}, ${Ee.b}, 0.8)`}t.beginPath(),t.arc(Z,Pt,Ct,0,Math.PI*2),t.fill()});let F=oe/c.scale*m,q=ie/c.scale*m,ye=(-c.x/c.scale+oe/2/c.scale)*m+E-F/2,se=(-c.y/c.scale+ie/2/c.scale)*m+g-q/2;W.style.width=`${Math.min(o,F)}px`,W.style.height=`${Math.min(i,q)}px`,W.style.left=`${Math.max(0,Math.min(o-F,ye))}px`,W.style.top=`${Math.max(0,Math.min(i-q,se))}px`}function jt(){P&&(P.hidden=!1,requestAnimationFrame(()=>P?.classList.add("visible")))}function bt(){P&&(P.classList.remove("visible"),setTimeout(()=>{P&&(P.hidden=!0)},300),localStorage.setItem("mindmap-hints-shown","true"))}function Kt(){U&&(U.hidden=!1)}function vt(){U&&(U.hidden=!0)}function ge(){c&&(j(c),c.x=c.targetX,c.y=c.targetY,c.scale=c.targetScale,vt(),C(null),R(),ae&&ae(),N&&N())}function yt(){c&&(Ke(c),c.scale=c.targetScale,R(),N&&N())}function Et(){c&&(Je(c),c.scale=c.targetScale,R(),N&&N())}function xt(){document.fullscreenElement?(document.exitFullscreen(),fe?.classList.remove("active")):(document.documentElement.requestFullscreen(),fe?.classList.add("active"))}function Jt(){c&&(j(c),c.x=c.targetX,c.y=c.targetY,c.scale=c.targetScale,vt(),C(null),R(),ae&&ae(),N&&N())}var te=-1;function Qt(e){if(document.activeElement===S){e.key==="Escape"&&(S?.blur(),k&&(k.hidden=!0));return}if(e.key==="/"||e.key==="s"){e.preventDefault(),S?.focus();return}if(e.key==="f"){xt();return}e.key==="Escape"&&(M&&!M.hidden?Be():P&&!P.hidden?bt():c&&ge()),(e.key==="+"||e.key==="=")&&yt(),(e.key==="-"||e.key==="_")&&Et(),(e.key==="0"||e.key==="r")&&ge(),["ArrowUp","ArrowDown","ArrowLeft","ArrowRight"].includes(e.key)&&(e.preventDefault(),en(e.key)),e.key==="Enter"&&O&&O.links.length>0&&be(O),e.key==="?"&&jt()}function en(e){if(_.length===0)return;if(te<0){te=0,ct(_[0]);return}let n=_[te],t=null;switch(e){case"ArrowUp":n.parent&&(t=n.parent);break;case"ArrowDown":n.children.length>0&&(t=n.children[0]);break;case"ArrowLeft":case"ArrowRight":if(n.parent){let o=n.parent.children,r=(o.indexOf(n)+(e==="ArrowRight"?1:-1)+o.length)%o.length;t=o[r]}break}t&&(te=_.indexOf(t),ct(t))}function ct(e){O=e,C(e),X&&X(e)}function Ie(e){O=e,e&&(te=_.indexOf(e),C(e))}function Lt(e){c&&(qe(e,c,oe,ie),c.x=c.targetX,c.y=c.targetY,c.scale=c.targetScale,Kt(),C(e),R(),Ie(e),e.links.length>0&&be(e),N&&N())}var wt=`
  attribute vec2 a_position;
  attribute float a_size;
  attribute float a_speed;
  attribute float a_phase;
  attribute float a_cluster;

  uniform float u_time;
  uniform vec2 u_resolution;

  varying float v_brightness;
  varying float v_size;
  varying float v_flicker;

  // Hash for pseudo-random values
  float hash(float n) {
    return fract(sin(n) * 43758.5453);
  }

  // Noise function for turbulence
  float noise(vec2 p) {
    vec2 i = floor(p);
    vec2 f = fract(p);
    f = f * f * (3.0 - 2.0 * f);

    float a = hash(i.x + i.y * 57.0);
    float b = hash(i.x + 1.0 + i.y * 57.0);
    float c = hash(i.x + (i.y + 1.0) * 57.0);
    float d = hash(i.x + 1.0 + (i.y + 1.0) * 57.0);

    return mix(mix(a, b, f.x), mix(c, d, f.x), f.y);
  }

  // Fractal turbulence
  float turbulence(vec2 p, float t) {
    float sum = 0.0;
    float amplitude = 1.0;
    float frequency = 1.0;

    for (int i = 0; i < 4; i++) {
      sum += amplitude * abs(noise(p * frequency + t * 0.1));
      amplitude *= 0.5;
      frequency *= 2.0;
    }

    return sum;
  }

  void main() {
    float t = u_time * 0.3;

    // Slow vertical drift with individual phase offset
    float baseDrift = mod(t * a_speed + a_phase, 1.0);

    // Add fractal turbulence to position
    vec2 turbPos = a_position * 10.0 + vec2(t * 0.1, t * 0.05);
    float turbX = turbulence(turbPos, t) * 0.03;
    float turbY = turbulence(turbPos + vec2(100.0), t) * 0.02;

    // Cluster-based movement (stars in same cluster move together)
    float clusterPhase = a_cluster * 6.28;
    float clusterDrift = sin(t * 0.5 + clusterPhase) * 0.015;

    // Parallax layers based on size (larger = closer = faster)
    float parallax = a_size * 0.5;
    float adjustedY = mod(a_position.y + baseDrift * parallax + turbY + clusterDrift, 1.0);
    float adjustedX = a_position.x + turbX + sin(t * 0.3 + a_phase * 6.28) * 0.01;

    // Wrap x coordinate
    adjustedX = mod(adjustedX + 1.0, 1.0);

    // Convert from 0-1 to clip space (-1 to 1)
    vec2 clipSpace = (vec2(adjustedX, adjustedY) * 2.0 - 1.0);
    gl_Position = vec4(clipSpace, 0.0, 1.0);

    // Dynamic point size with pulsation
    float pulse = sin(t * 3.0 + a_phase * 12.56) * 0.2 + 1.0;
    gl_PointSize = a_size * (u_resolution.y / 1080.0) * pulse;

    // Complex twinkle effect with multiple frequencies
    float twinkle1 = sin(t * 2.0 + a_phase * 6.28) * 0.5 + 0.5;
    float twinkle2 = sin(t * 4.5 + a_phase * 3.14) * 0.3 + 0.7;
    float twinkle3 = sin(t * 1.3 + a_cluster * 6.28) * 0.2 + 0.8;
    float twinkle = twinkle1 * twinkle2 * twinkle3;

    // Flicker effect for smaller stars
    float flicker = 1.0;
    if (a_size < 2.5) {
      flicker = hash(a_phase + floor(t * 3.0)) > 0.15 ? 1.0 : 0.3;
    }

    v_brightness = twinkle * (0.2 + a_size * 0.8) * flicker;
    v_size = a_size;
    v_flicker = flicker;
  }
`,kt=`
  precision highp float;

  varying float v_brightness;
  varying float v_size;
  varying float v_flicker;

  // Hash for random values
  float hash(vec2 p) {
    return fract(sin(dot(p, vec2(127.1, 311.7))) * 43758.5453);
  }

  // Noise for corona texture
  float noise(vec2 p) {
    vec2 i = floor(p);
    vec2 f = fract(p);
    f = f * f * (3.0 - 2.0 * f);

    float a = hash(i);
    float b = hash(i + vec2(1.0, 0.0));
    float c = hash(i + vec2(0.0, 1.0));
    float d = hash(i + vec2(1.0, 1.0));

    return mix(mix(a, b, f.x), mix(c, d, f.x), f.y);
  }

  void main() {
    vec2 coord = gl_PointCoord - vec2(0.5);
    float dist = length(coord);
    float angle = atan(coord.y, coord.x);

    // Multi-layer glow system
    float glow = 1.0 - smoothstep(0.0, 0.5, dist);
    glow = pow(glow, 1.8);

    // Sharp bright core
    float core = 1.0 - smoothstep(0.0, 0.12, dist);
    core = pow(core, 4.0);

    // Corona with fractal detail for larger stars
    float corona = 0.0;
    if (v_size > 2.0) {
      // Rotating spikes
      float spikes = abs(sin(angle * 4.0 + v_brightness * 6.28)) * 0.5 + 0.5;
      spikes = pow(spikes, 3.0);

      // Fractal noise texture
      vec2 coronaUV = coord * 8.0 + vec2(v_brightness * 2.0);
      float coronaNoise = noise(coronaUV) * 0.5 + noise(coronaUV * 2.0) * 0.25;

      corona = (1.0 - smoothstep(0.15, 0.45, dist)) * spikes * coronaNoise;
      corona *= 0.6;
    }

    // Energy halo for very large stars
    float halo = 0.0;
    if (v_size > 3.5) {
      float haloNoise = noise(coord * 6.0 + vec2(v_flicker * 10.0));
      halo = (1.0 - smoothstep(0.2, 0.5, dist)) * haloNoise;
      halo *= 0.3;
    }

    // Combine all layers
    float intensity = max(max(glow, core), max(corona, halo));

    // Complex color palette based on size and distance
    vec3 color;
    if (v_size > 4.0) {
      // Giant stars - yellow-white supergiants
      vec3 white = vec3(1.0, 0.98, 0.92);
      vec3 yellow = vec3(1.0, 0.95, 0.7);
      color = mix(white, yellow, dist * 2.0);
    } else if (v_size > 3.0) {
      // Large stars - bright white with blue corona
      vec3 white = vec3(1.0, 0.98, 0.95);
      vec3 blue = vec3(0.8, 0.9, 1.0);
      color = mix(white, blue, corona);
    } else if (v_size > 2.0) {
      // Medium stars - white-blue
      vec3 white = vec3(0.95, 0.97, 1.0);
      vec3 cyan = vec3(0.7, 0.9, 1.0);
      color = mix(white, cyan, dist);
    } else if (v_size > 1.5) {
      // Small stars - blue-white
      color = vec3(0.75, 0.85, 1.0);
    } else {
      // Tiny distant stars - deep blue
      vec3 blue = vec3(0.6, 0.7, 1.0);
      vec3 violet = vec3(0.7, 0.6, 1.0);
      color = mix(blue, violet, hash(coord));
    }

    // Add chromatic aberration for large bright stars
    if (v_size > 3.5 && dist > 0.15) {
      float r = (1.0 - smoothstep(0.15, 0.5, dist + 0.01)) * v_brightness;
      float g = (1.0 - smoothstep(0.15, 0.5, dist)) * v_brightness;
      float b = (1.0 - smoothstep(0.15, 0.5, dist - 0.01)) * v_brightness;
      color = vec3(r, g, b);
    }

    // Apply brightness and flicker
    float alpha = intensity * v_brightness * v_flicker;

    // Energy pulse for very bright moments
    if (v_brightness > 0.9 && v_size > 2.5) {
      color += vec3(0.2, 0.15, 0.3) * (v_brightness - 0.9) * 5.0;
    }

    gl_FragColor = vec4(color * alpha, alpha);
  }
`,Mt=`
  attribute vec2 a_position;
  varying vec2 v_uv;

  void main() {
    v_uv = a_position * 0.5 + 0.5;
    gl_Position = vec4(a_position, 0.0, 1.0);
  }
`,St=`
  precision highp float;

  uniform float u_time;
  uniform vec2 u_resolution;

  varying vec2 v_uv;

  // Enhanced hash function for better randomness
  vec3 hash3(vec2 p) {
    vec3 p3 = fract(vec3(p.xyx) * vec3(443.897, 441.423, 437.195));
    p3 += dot(p3, p3.yzx + 19.19);
    return fract((p3.xxy + p3.yzz) * p3.zyx);
  }

  float hash(vec2 p) {
    return fract(sin(dot(p, vec2(127.1, 311.7))) * 43758.5453);
  }

  // Improved noise with smoother interpolation
  float noise(vec2 p) {
    vec2 i = floor(p);
    vec2 f = fract(p);

    // Quintic interpolation for smoother gradients
    f = f * f * f * (f * (f * 6.0 - 15.0) + 10.0);

    float a = hash(i);
    float b = hash(i + vec2(1.0, 0.0));
    float c = hash(i + vec2(0.0, 1.0));
    float d = hash(i + vec2(1.0, 1.0));

    return mix(mix(a, b, f.x), mix(c, d, f.x), f.y);
  }

  // Curl noise for swirling patterns
  vec2 curl(vec2 p, float t) {
    float eps = 0.1;
    float n1 = noise(p + vec2(0.0, eps));
    float n2 = noise(p - vec2(0.0, eps));
    float n3 = noise(p + vec2(eps, 0.0));
    float n4 = noise(p - vec2(eps, 0.0));

    return vec2(n1 - n2, n4 - n3) / (2.0 * eps);
  }

  // Turbulent FBM with 8 octaves for extreme detail
  float fbm(vec2 p) {
    float value = 0.0;
    float amplitude = 0.5;
    float frequency = 1.0;

    // Rotation matrix for each octave
    mat2 rot = mat2(cos(0.5), sin(0.5), -sin(0.5), cos(0.5));

    for (int i = 0; i < 8; i++) {
      value += amplitude * abs(noise(p * frequency));
      p = rot * p * 2.03;
      amplitude *= 0.5;
      frequency *= 2.0;
    }

    return value;
  }

  // Domain warping for chaotic distortion
  vec2 domainWarp(vec2 p, float intensity) {
    vec2 q = vec2(fbm(p), fbm(p + vec2(5.2, 1.3)));
    vec2 r = vec2(fbm(p + 4.0 * q + vec2(1.7, 9.2)),
                  fbm(p + 4.0 * q + vec2(8.3, 2.8)));
    return p + intensity * r;
  }

  // Voronoi for cell-like structures
  float voronoi(vec2 p) {
    vec2 n = floor(p);
    vec2 f = fract(p);

    float minDist = 1.0;
    for (int j = -1; j <= 1; j++) {
      for (int i = -1; i <= 1; i++) {
        vec2 neighbor = vec2(float(i), float(j));
        vec2 point = hash3(n + neighbor).xy;
        vec2 diff = neighbor + point - f;
        float dist = length(diff);
        minDist = min(minDist, dist);
      }
    }

    return minDist;
  }

  // Plasma effect
  float plasma(vec2 p, float t) {
    float c = sin(p.x * 10.0 + t);
    c += sin(p.y * 10.0 + t);
    c += sin((p.x + p.y) * 10.0 + t);
    c += sin(sqrt(p.x * p.x + p.y * p.y) * 10.0 + t);
    return c * 0.25;
  }

  void main() {
    vec2 uv = v_uv;
    vec2 p = (uv - 0.5) * 4.0;

    float t = u_time * 0.015;

    // Multi-layer domain warping for extreme chaos
    vec2 warped1 = domainWarp(p, 0.3);
    vec2 warped2 = domainWarp(p * 0.7 + vec2(t * 0.2, -t * 0.15), 0.5);
    vec2 warped3 = domainWarp(p * 1.3 - vec2(t * 0.1, t * 0.2), 0.4);

    // Swirling patterns with curl noise
    vec2 swirl = curl(p * 2.0 + vec2(t * 0.3, t * 0.2), t);
    vec2 swirled = p + swirl * 0.8;

    // Multiple FBM layers with different frequencies
    float n1 = fbm(warped1 + vec2(t * 0.3, t * 0.2));
    float n2 = fbm(warped2 * 1.5 + swirl);
    float n3 = fbm(warped3 * 2.3 - swirl * 0.5);
    float n4 = fbm(swirled * 0.8 + vec2(-t * 0.15, t * 0.25));
    float n5 = fbm(p * 4.0 + vec2(sin(t * 0.3), cos(t * 0.4)));

    // Voronoi cells for structure
    float cells = voronoi(p * 2.0 + swirl * 0.5);

    // Plasma energy tendrils
    float plasmaEffect = plasma(swirled * 0.5, t * 2.0);

    // Combine all chaos layers
    float chaos = n1 * 0.25 + n2 * 0.2 + n3 * 0.15 + n4 * 0.2 + n5 * 0.1;
    chaos += (1.0 - cells) * 0.1;
    chaos += plasmaEffect * 0.15;

    // Turbulent ridges
    chaos = abs(chaos - 0.5) * 2.0;
    chaos = smoothstep(0.2, 0.9, chaos);

    // Complex color palette with fractal variation
    vec3 deepPurple = vec3(0.08, 0.02, 0.2);
    vec3 darkBlue = vec3(0.02, 0.05, 0.25);
    vec3 violet = vec3(0.15, 0.05, 0.3);
    vec3 cyan = vec3(0.05, 0.15, 0.35);
    vec3 magenta = vec3(0.2, 0.05, 0.2);
    vec3 teal = vec3(0.03, 0.2, 0.25);

    // Multi-stage color mixing based on different noise layers
    vec3 color = mix(deepPurple, darkBlue, n1);
    color = mix(color, violet, n2 * n3);
    color = mix(color, cyan, smoothstep(0.5, 0.8, n4));
    color = mix(color, magenta, (1.0 - cells) * 0.3);
    color = mix(color, teal, abs(plasmaEffect) * 0.4);

    // Energy hotspots
    float hotspot = smoothstep(0.7, 1.0, n1 * n2);
    color += hotspot * vec3(0.2, 0.1, 0.3) * (sin(t * 3.0) * 0.5 + 0.5);

    // Vignette with fractal edge
    float vignetteNoise = noise(p * 0.5 + vec2(t * 0.05));
    float vignette = 1.0 - length(p) * 0.15 - vignetteNoise * 0.1;

    // Apply all effects
    color *= chaos * 0.4 * vignette;

    // Add subtle animated glow
    color += vec3(0.02, 0.05, 0.08) * sin(t + length(p)) * 0.3;

    gl_FragColor = vec4(color, 1.0);
  }
`;var ve=class{constructor(n){this.starProgram=null;this.nebulaProgram=null;this.stars=[];this.starCount=1500;this.animationId=null;this.startTime=Date.now();this.starLocations={};this.nebulaLocations={};this.starBuffer=null;this.nebulaBuffer=null;this.animate=()=>{let n=(Date.now()-this.startTime)/1e3;this.gl.clearColor(0,0,.05,1),this.gl.clear(this.gl.COLOR_BUFFER_BIT),this.gl.enable(this.gl.BLEND),this.gl.blendFunc(this.gl.SRC_ALPHA,this.gl.ONE_MINUS_SRC_ALPHA),this.renderNebula(n),this.renderStars(n),this.animationId=requestAnimationFrame(this.animate)};this.canvas=document.createElement("canvas"),this.canvas.id="galaxy-canvas",this.canvas.style.cssText=`
      position: fixed;
      top: 0;
      left: 0;
      width: 100vw;
      height: 100vh;
      pointer-events: none;
      z-index: 0;
    `;let t=this.canvas.getContext("webgl",{alpha:!0,antialias:!1,depth:!1,preserveDrawingBuffer:!1});if(!t)throw new Error("WebGL not supported");this.gl=t,document.body.insertBefore(this.canvas,document.body.firstChild),this.resize(),this.initShaders(),this.initStars(),this.initBuffers(),window.addEventListener("resize",()=>this.resize()),this.animate()}resize(){let n=window.devicePixelRatio||1;this.canvas.width=window.innerWidth*n,this.canvas.height=window.innerHeight*n,this.gl.viewport(0,0,this.canvas.width,this.canvas.height)}initShaders(){let n=this.compileShader(wt,this.gl.VERTEX_SHADER),t=this.compileShader(kt,this.gl.FRAGMENT_SHADER);this.starProgram=this.createProgram(n,t),this.starProgram&&(this.starLocations={position:this.gl.getAttribLocation(this.starProgram,"a_position"),size:this.gl.getAttribLocation(this.starProgram,"a_size"),speed:this.gl.getAttribLocation(this.starProgram,"a_speed"),phase:this.gl.getAttribLocation(this.starProgram,"a_phase"),cluster:this.gl.getAttribLocation(this.starProgram,"a_cluster"),time:this.gl.getUniformLocation(this.starProgram,"u_time"),resolution:this.gl.getUniformLocation(this.starProgram,"u_resolution")});let o=this.compileShader(Mt,this.gl.VERTEX_SHADER),i=this.compileShader(St,this.gl.FRAGMENT_SHADER);this.nebulaProgram=this.createProgram(o,i),this.nebulaProgram&&(this.nebulaLocations={position:this.gl.getAttribLocation(this.nebulaProgram,"a_position"),time:this.gl.getUniformLocation(this.nebulaProgram,"u_time"),resolution:this.gl.getUniformLocation(this.nebulaProgram,"u_resolution")})}compileShader(n,t){let o=this.gl.createShader(t);if(!o)throw new Error("Failed to create shader");if(this.gl.shaderSource(o,n),this.gl.compileShader(o),!this.gl.getShaderParameter(o,this.gl.COMPILE_STATUS)){let i=this.gl.getShaderInfoLog(o);throw this.gl.deleteShader(o),new Error("Shader compilation failed: "+i)}return o}createProgram(n,t){let o=this.gl.createProgram();if(!o)throw new Error("Failed to create program");if(this.gl.attachShader(o,n),this.gl.attachShader(o,t),this.gl.linkProgram(o),!this.gl.getProgramParameter(o,this.gl.LINK_STATUS)){let i=this.gl.getProgramInfoLog(o);throw this.gl.deleteProgram(o),new Error("Program linking failed: "+i)}return o}noise(n,t){let o=Math.floor(n)&255,i=Math.floor(t)&255;n-=Math.floor(n),t-=Math.floor(t);let a=n*n*n*(n*(n*6-15)+10),r=t*t*t*(t*(t*6-15)+10),s=this.hash2D(o,i),d=this.hash2D(o+1,i),l=this.hash2D(o,i+1),h=this.hash2D(o+1,i+1);return(s*(1-a)+d*a)*(1-r)+(l*(1-a)+h*a)*r}hash2D(n,t){let o=Math.sin(n*12.9898+t*78.233)*43758.5453;return o-Math.floor(o)}fbm(n,t,o){let i=0,a=.5,r=1;for(let s=0;s<o;s++)i+=a*this.noise(n*r,t*r),r*=2,a*=.5;return i}initStars(){this.stars=[];let n=8,t=[];for(let o=0;o<n;o++){let i=o/n*Math.PI*2,a=.3+Math.random()*.3;t.push({x:.5+Math.cos(i)*a,y:.5+Math.sin(i)*a,intensity:.5+Math.random()*.5})}for(let o=0;o<this.starCount;o++){let i,a,r;if(Math.random()<.6){let E=t[Math.floor(Math.random()*n)];r=t.indexOf(E);let g=Math.random()*Math.PI*2,F=this.fbm(g*3,o*.1,4)*.15*E.intensity;i=E.x+Math.cos(g)*F,a=E.y+Math.sin(g)*F,i=(i+1)%1,a=(a+1)%1}else{i=Math.random(),a=Math.random();let E=this.fbm(i*10,a*10,3);i=(i+E*.1)%1,a=(a+E*.1)%1,r=-1}let s=this.fbm(i*20,a*20,4),d=Math.random()*s,l;d<.65?l=.8+Math.random()*1.7:d<.85?l=2.5+Math.random()*1.5:d<.95?l=4+Math.random()*1.5:l=5.5+Math.random()*1.5,r>=0&&(l*=1+t[r].intensity*.3);let h=.004+l/7*.012,u=Math.random(),m=r>=0?r/n:Math.random();this.stars.push({x:i,y:a,size:l,speed:h,phase:u,cluster:m})}}initBuffers(){let n=new Float32Array(this.stars.length*6);this.stars.forEach((o,i)=>{let a=i*6;n[a]=o.x,n[a+1]=o.y,n[a+2]=o.size,n[a+3]=o.speed,n[a+4]=o.phase,n[a+5]=o.cluster}),this.starBuffer=this.gl.createBuffer(),this.gl.bindBuffer(this.gl.ARRAY_BUFFER,this.starBuffer),this.gl.bufferData(this.gl.ARRAY_BUFFER,n,this.gl.STATIC_DRAW);let t=new Float32Array([-1,-1,1,-1,-1,1,1,1]);this.nebulaBuffer=this.gl.createBuffer(),this.gl.bindBuffer(this.gl.ARRAY_BUFFER,this.nebulaBuffer),this.gl.bufferData(this.gl.ARRAY_BUFFER,t,this.gl.STATIC_DRAW)}renderNebula(n){!this.nebulaProgram||!this.nebulaBuffer||(this.gl.useProgram(this.nebulaProgram),this.gl.bindBuffer(this.gl.ARRAY_BUFFER,this.nebulaBuffer),this.nebulaLocations.position!==void 0&&(this.gl.enableVertexAttribArray(this.nebulaLocations.position),this.gl.vertexAttribPointer(this.nebulaLocations.position,2,this.gl.FLOAT,!1,0,0)),this.nebulaLocations.time&&this.gl.uniform1f(this.nebulaLocations.time,n),this.nebulaLocations.resolution&&this.gl.uniform2f(this.nebulaLocations.resolution,this.canvas.width,this.canvas.height),this.gl.drawArrays(this.gl.TRIANGLE_STRIP,0,4))}renderStars(n){if(!this.starProgram||!this.starBuffer)return;this.gl.useProgram(this.starProgram),this.gl.bindBuffer(this.gl.ARRAY_BUFFER,this.starBuffer);let t=6*Float32Array.BYTES_PER_ELEMENT;this.starLocations.position!==void 0&&(this.gl.enableVertexAttribArray(this.starLocations.position),this.gl.vertexAttribPointer(this.starLocations.position,2,this.gl.FLOAT,!1,t,0)),this.starLocations.size!==void 0&&(this.gl.enableVertexAttribArray(this.starLocations.size),this.gl.vertexAttribPointer(this.starLocations.size,1,this.gl.FLOAT,!1,t,2*Float32Array.BYTES_PER_ELEMENT)),this.starLocations.speed!==void 0&&(this.gl.enableVertexAttribArray(this.starLocations.speed),this.gl.vertexAttribPointer(this.starLocations.speed,1,this.gl.FLOAT,!1,t,3*Float32Array.BYTES_PER_ELEMENT)),this.starLocations.phase!==void 0&&(this.gl.enableVertexAttribArray(this.starLocations.phase),this.gl.vertexAttribPointer(this.starLocations.phase,1,this.gl.FLOAT,!1,t,4*Float32Array.BYTES_PER_ELEMENT)),this.starLocations.cluster!==void 0&&(this.gl.enableVertexAttribArray(this.starLocations.cluster),this.gl.vertexAttribPointer(this.starLocations.cluster,1,this.gl.FLOAT,!1,t,5*Float32Array.BYTES_PER_ELEMENT)),this.starLocations.time&&this.gl.uniform1f(this.starLocations.time,n),this.starLocations.resolution&&this.gl.uniform2f(this.starLocations.resolution,this.canvas.width,this.canvas.height),this.gl.drawArrays(this.gl.POINTS,0,this.stars.length)}destroy(){this.animationId!==null&&cancelAnimationFrame(this.animationId),this.starBuffer&&this.gl.deleteBuffer(this.starBuffer),this.nebulaBuffer&&this.gl.deleteBuffer(this.nebulaBuffer),this.starProgram&&this.gl.deleteProgram(this.starProgram),this.nebulaProgram&&this.gl.deleteProgram(this.nebulaProgram),this.canvas.remove(),window.removeEventListener("resize",()=>this.resize())}};var y=[],x=[],L,le=null,re=null,_e=null;async function Nt(){try{if(gt(),re=document.getElementById("graph-container"),!re)throw new Error("Graph container element not found");_e=new ve(re),Ye(re);let e=await He(),n=De(e);y=n.nodes,x=n.edges,L=Ue();let{width:t,height:o}=de();$e(y,t/2,o/2);let i=We(y,t,o);je(i),L.scale=i,L.targetScale=i,Xe(y),Ve(x);let a=t/2,r=o/2;y.forEach(s=>{s.x=a,s.y=r}),tt(re,y,x,L),nt(nn,an),et(()=>{T(y,x,L),V(y,x),R()}),dt(L,t,o),ut(y),ht(rn),mt(on),pt(()=>{T(y,x,L),V(y,x)}),Ae(),tn()}catch(e){console.error("Failed to initialize:",e),Ae(),alert("Failed to load mindmap data. Please refresh the page.")}}function tn(){let e=performance.now(),n=2e3,{width:t,height:o}=de(),i=t/2,a=o/2;function r(s){let d=s-e,l=Math.min(1,d/n),h=1-Math.pow(1-l,3);y.forEach(u=>{u.x=i+(u.targetX-i)*h,u.y=a+(u.targetY-a)*h}),T(y,x,L),l<1?le=requestAnimationFrame(r):(le=null,y.forEach(u=>{u.x=u.targetX,u.y=u.targetY}),T(y,x,L))}le=requestAnimationFrame(r)}function nn(e){if(Se(e),Ie(e),C(e),e.links.length===1&&e.children.length===0){let n=e.links[0];window.open(n.url,"_blank","noopener,noreferrer")}else e.links.length>1&&be(e);T(y,x,L),V(y,x)}function on(e){Se(e),Lt(e),T(y,x,L),V(y,x)}function an(){Ne(),C(null),T(y,x,L),V(y,x)}function rn(){Ne(),C(null),T(y,x,L),V(y,x)}function Tt(){let{width:e,height:n}=de();ft(e,n),T(y,x,L)}window.addEventListener("resize",Tt);function ln(){le!==null&&cancelAnimationFrame(le),_e&&_e.destroy(),window.removeEventListener("resize",Tt)}window.addEventListener("beforeunload",ln);document.readyState==="loading"?document.addEventListener("DOMContentLoaded",Nt):Nt();})();
