(()=>{var y=["#e8508a","#4a8aff","#3abb78","#8a6aff","#ff8a4a","#4ac0ff","#ff4a8a","#50c878","#ffa040","#8080ff","#ff6060","#40c0c0","#c060ff","#ff9060","#60b0ff"],ve=[{name:"Ana Silva",initial:"A",color:y[0]},{name:"Bruno Costa",initial:"B",color:y[1]},{name:"Carla Souza",initial:"C",color:y[2]},{name:"Daniel Lima",initial:"D",color:y[3]},{name:"Elena Torres",initial:"E",color:y[4]},{name:"Felipe Gomes",initial:"F",color:y[5]},{name:"Gabi Santos",initial:"G",color:y[6]},{name:"Hugo Pereira",initial:"H",color:y[7]},{name:"Isa Oliveira",initial:"I",color:y[8]}],Se=[{author:"Ana Silva",initial:"A",color:y[0],text:"Hey Diego! Miss our coding sessions at the uni. We should catch up soon! Saudades demais!",time:"2 hours ago"},{author:"Bruno Costa",initial:"B",color:y[1],text:"Cara, vi que voce ta morando em Berlin agora! Que top! Vamos marcar uma call?",time:"5 hours ago"},{author:"Carla Souza",initial:"C",color:y[2],text:"Happy birthday atrasado!! Hope you had an amazing day. Your projects are looking incredible btw",time:"yesterday"},{author:"Felipe Gomes",initial:"F",color:y[5],text:"Mano, teu MyMaps ta INSANO. Lembra quando a gente fazia mapa no paint? kkkk Evoluimos!",time:"2 days ago"},{author:"Gabi Santos",initial:"G",color:y[6],text:'Diego!! Join our community "Linux Users Brazil" please! We need more devs like you there',time:"3 days ago"},{author:"Hugo Pereira",initial:"H",color:y[7],text:"Saw your Strava activities... beast mode! When did you start cycling?",time:"4 days ago"},{author:"Isa Oliveira",initial:"I",color:y[8],text:"Testimonial request sent! You were the best partner for the compiler project, forever grateful",time:"1 week ago"}],Ae=[{name:"Eu odeio acordar cedo",members:1247893,emoji:"\u{1F634}",color:"#8a6aff"},{name:"NixOS Brasil",members:3420,emoji:"\u2744\uFE0F",color:"#4a8aff"},{name:"Linux Users",members:89340,emoji:"\u{1F427}",color:"#3abb78"},{name:"Cycling Addicts",members:45200,emoji:"\u{1F6B4}",color:"#ff8a4a"},{name:"Self-hosted Everything",members:12800,emoji:"\u{1F5A5}\uFE0F",color:"#4ac0ff"},{name:"Saudades do Orkut",members:892340,emoji:"\u{1F62D}",color:"#e8508a"},{name:"Maps & Geography",members:23100,emoji:"\u{1F30D}",color:"#50c878"},{name:"Berlin Brasileiros",members:8900,emoji:"\u{1F1E7}\u{1F1F7}",color:"#ffa040"},{name:"Coffee > Sleep",members:456e3,emoji:"\u2615",color:"#c08040"}],xe=[{author:"Ana Silva",date:"Dec 2023",text:"Diego is one of those rare people who can debug your code AND your life. An incredible friend, always there when you need help. 10/10 would add as friend again."},{author:"Bruno Costa",date:"Nov 2023",text:"Known Diego since university. The guy literally automated everything in his life with NixOS. Respect the dedication. Best engineer I know, no cap."},{author:"Carla Souza",date:"Oct 2023",text:"The most creative developer I have ever worked with. His projects are not just functional, they are beautiful. An artist disguised as an engineer."},{author:"Elena Torres",date:"Sep 2023",text:"Diego helped me set up my entire self-hosted infrastructure. Refused to let me use any cloud subscription. A true freedom fighter of the internet!"}],Z=["#1a2840","#2a1840","#182838","#281828","#1a3028","#302818","#201838","#283018","#381828"];function Ee(){let s=document.getElementById("friends-grid");s&&ve.forEach(e=>{let t=document.createElement("div");t.className="friend-cell",t.innerHTML=`
      <div class="friend-cell__avatar">
        <div class="friend-cell__avatar-inner" style="background:${e.color}">${e.initial}</div>
      </div>
      <span class="friend-cell__name">${e.name.split(" ")[0]}</span>
    `,s.appendChild(t)})}function Me(){let s=document.getElementById("scraps-list");s&&Se.forEach(e=>{let t=document.createElement("div");t.className="scrap",t.innerHTML=`
      <div class="scrap__avatar">
        <div class="scrap__avatar-inner" style="background:${e.color}">${e.initial}</div>
      </div>
      <div class="scrap__body">
        <div class="scrap__header">
          <span class="scrap__author">${e.author}</span>
          <span class="scrap__time">${e.time}</span>
        </div>
        <p class="scrap__text">${e.text}</p>
      </div>
    `,s.appendChild(t)})}function qe(){let s=document.getElementById("communities-grid");s&&Ae.forEach(e=>{let t=document.createElement("a");t.href="#",t.className="community-card";let l=e.members>=1e6?`${(e.members/1e6).toFixed(1)}M members`:e.members>=1e3?`${(e.members/1e3).toFixed(0)}K members`:`${e.members} members`;t.innerHTML=`
      <div class="community-card__icon" style="background:${e.color}20;color:${e.color}">${e.emoji}</div>
      <div class="community-card__body">
        <span class="community-card__name">${e.name}</span>
        <span class="community-card__members">${l}</span>
      </div>
    `,s.appendChild(t)})}function De(){let s=document.getElementById("testimonials-list");s&&xe.forEach(e=>{let t=document.createElement("div");t.className="testimonial",t.innerHTML=`
      <div class="testimonial__header">
        <span class="testimonial__author">${e.author}</span>
        <span class="testimonial__date">${e.date}</span>
      </div>
      <p class="testimonial__text">${e.text}</p>
    `,s.appendChild(t)})}function Ce(){let s=document.getElementById("photo-grid");if(s)for(let e=0;e<9;e++){let t=document.createElement("div");t.className="photo-cell",t.innerHTML=`<div class="photo-cell__inner" style="background:${Z[e%Z.length]}"></div>`,s.appendChild(t)}}var I={heart:'<svg viewBox="0 0 24 24"><path d="M20.8 4.6a5.5 5.5 0 0 0-7.8 0L12 5.6l-1-1a5.5 5.5 0 0 0-7.8 7.8l1 1L12 21l7.8-7.6 1-1a5.5 5.5 0 0 0 0-7.8z"/></svg>',comment:'<svg viewBox="0 0 24 24"><path d="M21 11.5a8.4 8.4 0 0 1-9 8.4 9 9 0 0 1-4-1L3 20l1.1-4.9A8.4 8.4 0 0 1 12 3a8.4 8.4 0 0 1 9 8.5z"/></svg>',share:'<svg viewBox="0 0 24 24"><line x1="22" y1="2" x2="11" y2="13"/><polygon points="22 2 15 22 11 13 2 9 22 2"/></svg>',save:'<svg viewBox="0 0 24 24"><path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"/></svg>',home:'<svg viewBox="0 0 24 24"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/></svg>',grid:'<svg viewBox="0 0 24 24"><rect x="3" y="3" width="18" height="18" rx="2"/><line x1="9" y1="3" x2="9" y2="21"/><line x1="15" y1="3" x2="15" y2="21"/><line x1="3" y1="9" x2="21" y2="9"/><line x1="3" y1="15" x2="21" y2="15"/></svg>',reels:'<svg viewBox="0 0 24 24"><rect x="3" y="3" width="18" height="18" rx="3"/><line x1="3" y1="8" x2="21" y2="8"/><line x1="8" y1="3" x2="10" y2="8"/><line x1="14" y1="3" x2="16" y2="8"/><polygon points="10 11 15 13.5 10 16" fill="currentColor" stroke="none"/></svg>',tagged:'<svg viewBox="0 0 24 24"><rect x="3" y="3" width="18" height="18" rx="3"/><circle cx="12" cy="10" r="3"/><path d="M7 18a5 5 0 0 1 10 0"/></svg>'};function P(s){let e=Z[s%Z.length],t=y[s%y.length];return`linear-gradient(135deg, ${e}, ${t})`}function a(s){return s.replace(/[&<>"]/g,e=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"})[e])}function Ie(s){let e=0;for(let t=0;t<s.length;t++)e=e*31+s.charCodeAt(t)>>>0;return y[e%y.length]}var ae=["ana","bruno","carla","diego","elena","felipe","gabi","hugo","isa","joao","lu","marco","nina","otto","paula","rafa","sofia","tiago","vera","yara"],ie=["","_",".","__"],ce=["","br","berlin","photo","travel","x","oficial","real","99","mrx","gram"];function Be(s,e){let t=s.slice();for(let l=0;t.length<e;l++){let v=ae[l%ae.length],u=ie[(l>>2)%ie.length],$=ce[(l>>1)%ce.length],c=Math.floor(l/(ae.length*ie.length)),_=`${v}${u}${$}${c>0?c:""}`;t.includes(_)?t.push(`${_}${t.length}`):t.push(_)}return t}function He(){let s=document.getElementById("ig-view");if(!s)return;let e=globalThis.PORTAL_DATA?.instagram;if(!e){s.innerHTML='<p class="ig-empty">Instagram data not loaded.</p>';return}let t=e.profile,l=o=>o.toLocaleString(),v=(e.highlights||[]).map((o,h)=>`
    <div class="ig-hl">
      <div class="ig-hl__ring"><div class="ig-hl__avatar" style="background:${P(h)}"><span class="ig-hl__emoji">${o.emoji}</span></div></div>
      <span class="ig-hl__name">${a(o.label)}</span>
    </div>`).join(""),u=(o,h)=>`
    <a class="ig-tile" href="${a(o.url)}" target="_blank" rel="noopener" style="background:${P(o.url.length)}">
      <span class="ig-tile__cap">${a(o.caption||o.url.replace("https://www.instagram.com/",""))}</span>
      <span class="ig-tile__badge">${h}</span>
    </a>`,$=e.saved.length?e.saved.map(o=>u(o,"\u{1F516}")).join(""):'<p class="ig-empty">Nothing saved.</p>',c=e.liked.length?e.liked.map(o=>u(o,"\u2764\uFE0F")).join(""):'<p class="ig-empty">No likes.</p>',_=o=>Number(o.match(/(\d+)(?=\.\w+$)/)?.[1]||0),n=e.posts.slice().sort((o,h)=>_(h.media)-_(o.media)),p=30,d=[...e.saved,...e.liked].map(o=>o.caption).filter(Boolean),S=n.map((o,h)=>`<a class="ig-tile" href="#" data-post-idx="${h}"><img src="${o.media}" alt="post"></a>`),x=Array.from({length:Math.max(0,p-S.length)},(o,h)=>`
    <a class="ig-tile ig-tile--post" href="#" style="background:${P(h)}">
      <span class="ig-tile__cap">${a(d[h%(d.length||1)]||"")}</span>
    </a>`),r=S.length||x.length?[...S,...x].join(""):'<p class="ig-empty">No posts yet.</p>',T='<svg class="ig-tile__ov" viewBox="0 0 24 24"><polygon points="10 8 16 12 10 16 10 8" fill="currentColor" stroke="none"/></svg>',E=Array.from({length:12},(o,h)=>`
    <a class="ig-tile ig-tile--post" href="#" style="background:${P(h+5)}">${T}
      <span class="ig-tile__cap">${a(d[(h+2)%(d.length||1)]||"")}</span>
    </a>`).join(""),H=Array.from({length:9},(o,h)=>`
    <a class="ig-tile ig-tile--post" href="#" style="background:${P(h+9)}">
      <span class="ig-tile__badge">@${a(t.username)}</span>
    </a>`).join(""),j=e.comments.length?e.comments.map(o=>`
      <div class="ig-comment">
        <div class="ig-comment__text">${a(o.text)}</div>
        <div class="ig-comment__meta">${o.owner?"@"+a(o.owner)+" \xB7 ":""}${a(o.time||"")}</div>
      </div>`).join(""):'<p class="ig-empty">No comments.</p>',M=o=>`<div class="ig-grid">${o}</div>`,N=t.photo?`<img class="ig-head__avatar" src="${a(t.photo)}" alt="${a(t.name)}">`:`<div class="ig-head__avatar ig-head__avatar--ph">${a(ee(t.name))}</div>`;s.innerHTML=`
    <nav class="ig-nav">
      <div class="ig-nav__inner">
        <a href="#" class="ig-nav__logo">My Socials</a>
        <div class="ig-nav__search"><input placeholder="Search"></div>
        <div class="ig-nav__icons">${I.home}${I.heart}${I.comment}${I.share}</div>
      </div>
    </nav>
    <div class="ig-page">
      <header class="ig-head">
        <div class="ig-head__user">${a(t.username)}</div>
        <div class="ig-head__row">
          ${N}
          <div class="ig-head__stats">
            <div class="ig-head__stat"><strong>${l(t.posts)}</strong><span>posts</span></div>
            <div class="ig-head__stat" data-modal="followers"><strong>${l(t.followers)}</strong><span>followers</span></div>
            <div class="ig-head__stat" data-modal="following"><strong>${l(t.following)}</strong><span>following</span></div>
          </div>
        </div>
        <div class="ig-head__name">${a(t.name)}</div>
        <div class="ig-head__bio">${a(t.bio)}</div>
        <div class="ig-head__actions">
          <span class="ig-head__btn ig-head__btn--primary">Follow</span>
          <span class="ig-head__btn">Message</span>
        </div>
      </header>

      ${v?`<div class="ig-highlights">${v}</div>`:""}

      <div class="ig-tabs">
        <div class="ig-tab is-active" data-pane="posts">${I.grid} Posts</div>
        <div class="ig-tab" data-pane="reels">${I.reels} Reels</div>
        <div class="ig-tab" data-pane="tagged">${I.tagged} Tagged</div>
      </div>

      <div class="ig-subtabs">
        <button class="ig-pill" data-pane="saved">${I.save}<span>Saved</span><em>${l(e.saved.length)}</em></button>
        <button class="ig-pill" data-pane="liked">${I.heart}<span>Liked</span><em>${l(e.liked.length)}</em></button>
        <button class="ig-pill" data-pane="comments">${I.comment}<span>Comments</span><em>${l(e.comments.length)}</em></button>
      </div>

      <div class="ig-pane is-active" data-pane="posts">${M(r)}</div>
      <div class="ig-pane" data-pane="reels">${M(E)}</div>
      <div class="ig-pane" data-pane="tagged">${M(H)}</div>
      <div class="ig-pane" data-pane="saved">${M($)}</div>
      <div class="ig-pane" data-pane="liked">${M(c)}</div>
      <div class="ig-pane" data-pane="comments"><div class="ig-comments">${j}</div></div>
    </div>

    <div class="ig-modal" id="ig-modal">
      <div class="ig-modal__box">
        <div class="ig-modal__head">
          <small id="ig-modal-sub"></small><h3 id="ig-modal-title"></h3>
          <button id="ig-modal-close" aria-label="Close">&times;</button>
        </div>
        <div class="ig-modal__list" id="ig-modal-list"></div>
      </div>
    </div>

    <div class="ig-post-modal" id="ig-post-modal">
      <div class="ig-post-modal__box">
        <button class="ig-post-modal__close" id="ig-post-modal-close" aria-label="Close">&times;</button>
        <div class="ig-post-modal__viewer">
          <button class="ig-post-modal__nav ig-post-modal__nav--prev" id="ig-post-prev" aria-label="Previous photo">&lsaquo;</button>
          <img class="ig-post-modal__img" id="ig-post-img" alt="post photo">
          <button class="ig-post-modal__nav ig-post-modal__nav--next" id="ig-post-next" aria-label="Next photo">&rsaquo;</button>
          <div class="ig-post-modal__dots" id="ig-post-dots"></div>
        </div>
        <div class="ig-post-modal__side">
          <div class="ig-post-modal__comments" id="ig-post-comments"></div>
        </div>
      </div>
    </div>`,s.querySelectorAll(".ig-tab, .ig-pill").forEach(o=>{o.addEventListener("click",()=>{let h=o.dataset.pane;s.querySelectorAll(".ig-tab, .ig-pill").forEach(C=>C.classList.toggle("is-active",C===o)),s.querySelectorAll(".ig-pane").forEach(C=>C.classList.toggle("is-active",C.dataset.pane===h))})});let b=s.querySelector("#ig-modal"),k=o=>{let h=o==="followers"?e.followers:e.following,C=o==="followers"?t.followers:t.following,F=Be(h,C);s.querySelector("#ig-modal-title").textContent=o==="followers"?"Followers":"Following",s.querySelector("#ig-modal-sub").textContent=`${l(C)} ${o}`,s.querySelector("#ig-modal-list").innerHTML=F.map(U=>`
      <div class="ig-row">
        <div class="ig-row__avatar" style="background:${Ie(U)}">${a(U.charAt(0).toUpperCase())}</div>
        <a class="ig-row__handle" href="https://www.instagram.com/${a(U)}" target="_blank" rel="noopener">${a(U)}</a>
        <span class="ig-row__follow">Follow</span>
      </div>`).join(""),b.classList.add("is-open")};s.querySelectorAll(".ig-head__stat[data-modal]").forEach(o=>o.addEventListener("click",()=>k(o.dataset.modal)));let R=()=>b.classList.remove("is-open");s.querySelector("#ig-modal-close").addEventListener("click",R),b.addEventListener("click",o=>{o.target===b&&R()});let g=s.querySelector("#ig-post-modal"),L=s.querySelector("#ig-post-img"),q=s.querySelector("#ig-post-dots"),z=s.querySelector("#ig-post-comments"),D=[],B=0,O=()=>{L.src=D[B],q.innerHTML=D.length>1?D.map((o,h)=>`<span class="ig-post-modal__dot${h===B?" is-active":""}"></span>`).join(""):""},te=o=>{let h=n[o];h&&(D=h.media_all?.length?h.media_all:[h.media],B=0,O(),z.innerHTML='<p class="ig-empty">No per-post comment data in this export.</p>',g.classList.add("is-open"))};s.querySelectorAll(".ig-tile[data-post-idx]").forEach(o=>o.addEventListener("click",h=>{h.preventDefault(),te(Number(o.dataset.postIdx))})),s.querySelector("#ig-post-prev").addEventListener("click",()=>{B=(B-1+D.length)%D.length,O()}),s.querySelector("#ig-post-next").addEventListener("click",()=>{B=(B+1)%D.length,O()});let Y=()=>g.classList.remove("is-open");s.querySelector("#ig-post-modal-close").addEventListener("click",Y),g.addEventListener("click",o=>{o.target===g&&Y()})}var G={home:'<svg viewBox="0 0 24 24"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/></svg>',net:'<svg viewBox="0 0 24 24"><circle cx="9" cy="7" r="4"/><path d="M17 11a4 4 0 1 0-3-6.6M1 21v-2a4 4 0 0 1 4-4h8a4 4 0 0 1 4 4v2M17 15a4 4 0 0 1 4 4v2"/></svg>',jobs:'<svg viewBox="0 0 24 24"><rect x="2" y="7" width="20" height="14" rx="2"/><path d="M8 7V5a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"/></svg>',msg:'<svg viewBox="0 0 24 24"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>',bell:'<svg viewBox="0 0 24 24"><path d="M18 8a6 6 0 1 0-12 0c0 7-3 9-3 9h18s-3-2-3-9M13.7 21a2 2 0 0 1-3.4 0"/></svg>',like:'<svg viewBox="0 0 24 24"><path d="M14 9V5a3 3 0 0 0-6 0v4H5a2 2 0 0 0-2 2l1 7a2 2 0 0 0 2 2h9a2 2 0 0 0 2-2l1-7a2 2 0 0 0-2-2z"/></svg>',comment:'<svg viewBox="0 0 24 24"><path d="M21 11.5a8.4 8.4 0 0 1-9 8.4 9 9 0 0 1-4-1L3 20l1.1-4.9A8.4 8.4 0 0 1 12 3a8.4 8.4 0 0 1 9 8.5z"/></svg>',repost:'<svg viewBox="0 0 24 24"><polyline points="17 1 21 5 17 9"/><path d="M3 11V9a4 4 0 0 1 4-4h14M7 23l-4-4 4-4M21 13v2a4 4 0 0 1-4 4H3"/></svg>',send:'<svg viewBox="0 0 24 24"><line x1="22" y1="2" x2="11" y2="13"/><polygon points="22 2 15 22 11 13 2 9 22 2"/></svg>'};function W(s){return a(s).replace(/(https?:\/\/\S+)/g,'<a href="$1" target="_blank" rel="noopener">$1</a>')}var je=0;function Q(s){let e=`li-clamp-${je++}`;return`<div class="li-clamp" id="${e}"><div class="li-clamp__body">${s}</div><button type="button" class="li-clamp__toggle" data-clamp="${e}">Show more</button></div>`}function ee(s){return s.split(/\s+/).filter(Boolean).slice(0,2).map(e=>e.charAt(0).toUpperCase()).join("")}function Pe(){let s=document.getElementById("li-view");if(!s)return;let e=globalThis.PORTAL_DATA?.linkedin;if(!e){s.innerHTML='<p class="li-empty">LinkedIn data not loaded.</p>';return}let t=e.profile,l=(r,T)=>`<div class="li-nav__item">${r}<span>${T}</span></div>`,v=t.photo?`<div class="li-phead__avatar li-phead__avatar--img"><img src="${t.photo}" alt="${a(t.name)}"></div>`:`<div class="li-phead__avatar" style="background:${y[3]}">${a(ee(t.name))}</div>`,u=(r,T)=>`<section class="li-card li-section"><h2 class="li-section__title">${r}</h2>${T}</section>`,$='<p class="li-need">Not in the saved profile page \u2014 add from your LinkedIn data export (Settings \u2192 Get a copy of your data).</p>',c=e.experience.length?e.experience.map(r=>`
      <div class="li-item">
        <div class="li-item__logo">${a(r.company.charAt(0))}</div>
        <div>
          <div class="li-item__title">${a(r.title)}</div>
          <div class="li-item__sub">${a(r.company)}</div>
          <div class="li-item__meta">${a(r.dates)}${r.location?" \xB7 "+a(r.location):""}</div>
          ${r.description?`<div class="li-item__desc">${Q(W(r.description))}</div>`:""}
        </div>
      </div>`).join(""):$,_=e.education.length?e.education.map(r=>`
      <div class="li-item">
        <div class="li-item__logo">${a(r.school.charAt(0))}</div>
        <div>
          <div class="li-item__title">${a(r.school)}</div>
          <div class="li-item__sub">${a(r.degree)}</div>
          <div class="li-item__meta">${a(r.dates)}</div>
          ${r.description?`<div class="li-item__desc">${Q(W(r.description))}</div>`:""}
        </div>
      </div>`).join(""):$,n=(e.featured?.length??0)>0?`<div class="li-featured">${e.featured.map(r=>`
        <a class="li-feat" href="${a(r.url)}" target="_blank" rel="noopener">
          <span class="li-feat__icon">\u{1F517}</span>
          <span class="li-feat__body">
            <span class="li-feat__title">${a(r.title)}</span>
            ${r.subtitle?`<span class="li-feat__sub">${a(r.subtitle)}</span>`:""}
          </span>
        </a>`).join("")}</div>`:"",p=e.skills.length?`<div class="li-skills">${e.skills.map(r=>`<span class="li-skill">${a(r)}</span>`).join("")}</div>`:$,d=e.about?`<div class="li-about">${Q(W(e.about))}</div>`:$,S=e.languages.length?e.languages.map(r=>`
      <div class="li-lang">
        <span class="li-lang__name">${a(r.name)}</span>
        <span class="li-lang__level">${a(r.proficiency)}</span>
      </div>`).join(""):$,x=e.projects.length?e.projects.map(r=>`
      <div class="li-item li-item--proj">
        <div>
          <div class="li-item__title">${a(r.title)}${r.url?` \xB7 <a href="${a(r.url)}" target="_blank" rel="noopener">link</a>`:""}</div>
          ${r.dates?`<div class="li-item__meta">${a(r.dates)}</div>`:""}
          <div class="li-item__desc">${Q(W(r.description))}</div>
        </div>
      </div>`).join(""):$;s.innerHTML=`
    <nav class="li-nav">
      <div class="li-nav__inner">
        <span class="li-nav__logo">in</span>
        <div class="li-nav__search"><input placeholder="Search"></div>
        <div class="li-nav__items">
          ${l(G.home,"Home")}
          ${l(G.net,"Network")}
          ${l(G.jobs,"Jobs")}
          ${l(G.msg,"Messaging")}
          ${l(G.bell,"Notifications")}
        </div>
      </div>
    </nav>
    <div class="li-prof">
      <div class="li-prof__main">
        <section class="li-card li-phead">
          <div class="li-phead__banner"></div>
          ${v}
          <div class="li-phead__body">
            <h1 class="li-phead__name">${a(t.name)}</h1>
            <p class="li-phead__headline">${a(t.headline)}</p>
            <p class="li-phead__loc">${a(t.location)} \xB7 <a href="https://${a(t.url)}" target="_blank" rel="noopener">Contact info</a></p>
            <p class="li-phead__meta"><strong>${t.connections}</strong> connections \xB7 <strong>${t.followers.toLocaleString()}</strong> followers</p>
            ${t.open_to_work?`<div class="li-phead__open"><strong>Open to work</strong><br>${a(t.open_to_work)}</div>`:""}
            <div class="li-phead__actions">
              <button class="li-btn li-btn--primary">Connect</button>
              <button class="li-btn">Message</button>
              <button class="li-btn">More</button>
            </div>
          </div>
        </section>
        ${u("About",d)}
        ${n?u("Featured",n):""}
        ${u("Experience",c)}
        ${u("Education",_)}
        ${u("Skills",p)}
        ${u("Projects",x)}
        ${u("Languages",S)}
      </div>
      <aside class="li-prof__rail">
        <div class="li-card li-side">
          <div class="li-side__title">Profile</div>
          <div class="li-side__row"><span>Current</span><strong>${a(t.current)}</strong></div>
          <div class="li-side__row"><span>Location</span><strong>${a(t.location.split(",")[0])}</strong></div>
          <div class="li-side__row"><span>Profile</span><a href="https://${a(t.url)}" target="_blank" rel="noopener">${a(t.url)}</a></div>
        </div>
      </aside>
    </div>`,s.querySelectorAll(".li-clamp").forEach(r=>{let T=r.querySelector(".li-clamp__body"),E=r.querySelector(".li-clamp__toggle");if(T.scrollHeight<=T.clientHeight+4){E.style.display="none";return}E.addEventListener("click",()=>{let H=r.classList.toggle("li-clamp--open");E.textContent=H?"Show less":"Show more"})})}var de={bell:'<svg viewBox="0 0 24 24"><path d="M18 8a6 6 0 1 0-12 0c0 7-3 9-3 9h18s-3-2-3-9M13.7 21a2 2 0 0 1-3.4 0"/></svg>',chat:'<svg viewBox="0 0 24 24"><path d="M21 11.5a8.4 8.4 0 0 1-9 8.4 9 9 0 0 1-4-1L3 20l1.1-4.9A8.4 8.4 0 0 1 12 3a8.4 8.4 0 0 1 9 8.5z"/></svg>'},me=[220,300,180,340,260,200,320,240,280];function Ne(){let s=document.getElementById("pin-view");if(!s)return;let e=globalThis.PORTAL_DATA?.pinterest,t=e?.boards??[],l=e?.profile,v=["30% 30%","75% 15%","20% 80%","80% 75%"],u=(c,_)=>`
    <div class="pin-card__grid">
      ${v.map((n,p)=>`<div class="pin-card__cell pin-card__cell--${p}" style="background-image:url('${a(c)}');background-position:${n}" role="img" aria-label="${a(_)}"></div>`).join("")}
    </div>`,$=t.map((c,_)=>{let n=me[_%me.length],p=c.cover?u(c.cover,c.name):`<div class="pin-card__ph" style="height:${n}px;background:${P(_)}">\u{1F4CC}</div>`;return`
    <a class="pin-card" href="https://www.pinterest.com/${a(l?.username||"diegonmarcos")}/${a(c.name.toLowerCase().replace(/[^a-z0-9]+/g,"-"))}/" target="_blank" rel="noopener">
      <div class="pin-card__media">
        ${p}
        <div class="pin-card__overlay"><span class="pin-card__save">${c.pins} pins</span></div>
      </div>
      <div class="pin-card__title">${a(c.name)}</div>
      ${c.desc?`<div class="pin-card__meta">${a(c.desc)}</div>`:`<div class="pin-card__meta">${c.pins} pins</div>`}
    </a>`}).join("");s.innerHTML=`
    <nav class="pin-nav">
      <div class="pin-nav__inner">
        <span class="pin-nav__logo">P</span>
        <a href="#" class="pin-nav__tab pin-nav__tab--active">Boards</a>
        <a href="https://www.pinterest.com/${a(l?.username||"diegonmarcos")}/" target="_blank" rel="noopener" class="pin-nav__tab">Profile</a>
        <div class="pin-nav__search"><input placeholder="Search for ideas"></div>
        <div class="pin-nav__icons">${de.bell}${de.chat}<span class="pin-nav__avatar" style="background:${y[3]}">D</span></div>
      </div>
    </nav>
    <div class="pin-head">@${a(l?.username||"diegonmarcos")} \xB7 <strong>${l?.boards??t.length}</strong> boards \xB7 <strong>${l?.pins??0}</strong> pins</div>
    <div class="pin-board">${$||'<p class="pin-empty">No boards.</p>'}</div>`}function Re(){let s=document.getElementById("tid-view");if(!s)return;let e=globalThis.PORTAL_DATA?.tidal,t=e?.playlists??[],l=e?.folders??[],v=e?.profile,u=n=>{if(!n)return"";let p=Math.floor(n/3600),d=Math.round(n%3600/60);return p?`${p}h ${d}m`:`${d} min`},$=`https://tidal.com/@${a(v?.username||"diegonmarcos")}`,c=t.map((n,p)=>{let d=n.cover?`<img class="tid-card__img" src="${a(n.cover)}" alt="${a(n.name)}" loading="lazy">`:`<div class="tid-card__ph" style="background:${P(p)}">\u266B</div>`;return`
    <a class="tid-card" href="${n.url?a(n.url):$}" target="_blank" rel="noopener">
      <div class="tid-card__cover">${d}<span class="tid-card__play">\u25B6</span></div>
      <div class="tid-card__name">${a(n.name)}</div>
      <div class="tid-card__meta">${n.tracks} tracks${n.duration_s?" \xB7 "+u(n.duration_s):""}</div>
    </a>`}).join(""),_=l.map(n=>`<span class="tid-folder">${a(n.name)}<em>${n.playlists}</em></span>`).join("");s.innerHTML=`
    <nav class="tid-nav">
      <div class="tid-nav__inner">
        <span class="tid-nav__logo">TIDAL</span>
        <div class="tid-nav__search"><input placeholder="Search"></div>
        <span class="tid-nav__user">@${a(v?.username||"diegonmarcos")}</span>
      </div>
    </nav>
    <div class="tid-main">
      <header class="tid-head">
        <div class="tid-head__title">My Playlists</div>
        <div class="tid-head__sub">${v?.playlists??t.length} playlists \xB7 ${v?.tracks??0} tracks</div>
      </header>
      ${_?`<div class="tid-folders">${_}</div>`:""}
      <div class="tid-grid">${c||'<p class="tid-empty">Playlists load once the Tidal profile ID is set.</p>'}</div>
    </div>`}var J={run:"\u{1F3C3}",ride:"\u{1F6B4}",swim:"\u{1F3CA}"};function Oe(){let s=document.getElementById("str-view");if(!s)return;let e=globalThis.PORTAL_DATA?.strava,t=e?.activities??[],l=e?.profile,v=i=>i&&parseInt(i)||0,u=i=>i.split(" \u2014 ")[1]||"",$=["run","ride","swim"],c=$.reduce((i,m)=>{let f=t.filter(w=>w.type===m);return i[m]={count:f.length,distance:f.reduce((w,A)=>w+(A.distance_km||0),0),minutes:f.reduce((w,A)=>w+v(A.duration),0),elevation:f.reduce((w,A)=>w+(A.elevation_m||0),0)},i},{}),_=$.reduce((i,m)=>i+c[m].minutes,0),n=i=>`${Math.round(i/60)}h`,p=(i,m,f)=>`<div class="str-stat"><span class="str-stat__icon">${i}</span><span class="str-stat__value">${a(m)}</span><span class="str-stat__label">${f}</span></div>`,d=`
    <div class="str-dash">
      ${p("\u{1F3C3}",`${c.run.distance.toFixed(0)} km`,`${c.run.count} runs`)}
      ${p("\u{1F6B4}",`${c.ride.distance.toFixed(0)} km`,`${c.ride.count} rides`)}
      ${p("\u{1F3CA}",`${c.swim.distance.toFixed(1)} km`,`${c.swim.count} swims`)}
      ${p("\u23F1\uFE0F",n(_),"total time")}
      ${p("\u26F0\uFE0F",`${(c.run.elevation+c.ride.elevation).toLocaleString()} m`,"elevation gain")}
    </div>`,S=new Map;t.forEach(i=>{let m=Date.parse(i.date);if(!Number.isNaN(m)){let f=new Date(m).toISOString().slice(0,10);S.set(f,(S.get(f)||0)+1)}});let x=t.length?new Date(Math.max(...t.map(i=>Date.parse(i.date)).filter(i=>!Number.isNaN(i)))):new Date(0),r=53,T=new Date(x);T.setDate(T.getDate()-r*7),T.setDate(T.getDate()-T.getDay());let E=[];for(let i=0;i<r*7;i++){let m=new Date(T);m.setDate(m.getDate()+i);let f=m.toISOString().slice(0,10),w=S.get(f)||0,A=w===0?0:w===1?1:w===2?2:3;E.push(`<span class="str-cal__cell str-cal__cell--${A}" title="${f}: ${w} activit${w===1?"y":"ies"}"></span>`)}let H=`<div class="str-cal">${E.join("")}</div>`,j=new Map;t.forEach(i=>{let m=Date.parse(i.date);if(Number.isNaN(m))return;let f=new Date(m).toISOString().slice(0,10);(j.get(f)??j.set(f,[]).get(f)).push(i)});let M=(i,m)=>new Date(Date.UTC(i,m,1)).toLocaleDateString("en-US",{month:"long",year:"numeric",timeZone:"UTC"}),N=(i,m)=>{let f=new Date(Date.UTC(i,m,1)),w=new Date(Date.UTC(i,m+1,0)).getUTCDate(),A=f.getUTCDay(),V=["S","M","T","W","T","F","S"],ye=Array.from({length:A},()=>'<span class="str-month__day str-month__day--blank"></span>'),we=Array.from({length:w},(oe,Te)=>{let le=Te+1,Le=new Date(Date.UTC(i,m,le)).toISOString().slice(0,10),re=j.get(Le)||[],ke=re.map(se=>`<span class="str-month__dot" style="background:${se.type==="run"?"#fc5200":se.type==="ride"?"#0a66c2":"#00b8d9"}" title="${a(se.title)}"></span>`).join("");return`<span class="str-month__day${re.length?" has-activity":""}"><span class="str-month__num">${le}</span><span class="str-month__dots">${ke}</span></span>`});return`
      <div class="str-month__dow">${V.map(oe=>`<span>${oe}</span>`).join("")}</div>
      <div class="str-month__grid">${ye.join("")}${we.join("")}</div>`},b=x.getUTCFullYear(),k=x.getUTCMonth(),R=`
    <div class="str-month">
      <div class="str-month__head">
        <button class="str-month__nav" id="str-month-prev" aria-label="Previous month">&lsaquo;</button>
        <span class="str-month__label" id="str-month-label">${M(b,k)}</span>
        <button class="str-month__nav" id="str-month-next" aria-label="Next month">&rsaquo;</button>
      </div>
      <div id="str-month-body">${N(b,k)}</div>
    </div>`,g={Berlin:[52.52,13.4],Munich:[48.14,11.58],Amsterdam:[52.37,4.9],Paris:[48.86,2.35],Barcelona:[41.39,2.17],Lisbon:[38.72,-9.14],Vienna:[48.21,16.37],Prague:[50.08,14.44],Copenhagen:[55.68,12.57],Zurich:[47.37,8.54],Rome:[41.9,12.5],Porto:[41.15,-8.61],Krakow:[50.06,19.94],Budapest:[47.5,19.04],Ljubljana:[46.06,14.51],Nice:[43.7,7.27]},L=new Map;t.forEach(i=>{let m=u(i.title);m&&L.set(m,(L.get(m)||0)+1)});let q=Object.values(g).map(([i])=>i),z=Object.values(g).map(([,i])=>i),[D,B]=[Math.min(...q),Math.max(...q)],[O,te]=[Math.min(...z),Math.max(...z)],Y=(i,m)=>{let f=20+(m-O)/(te-O||1)*360,w=20+(1-(i-D)/(B-D||1))*260;return[f,w]},o=Math.max(1,...L.values()),h=[...L.entries()].map(([i,m])=>{let f=g[i];if(!f)return"";let[w,A]=Y(...f),V=5+m/o*10;return`<g class="str-map__pin"><circle cx="${w}" cy="${A}" r="${V}" /><text x="${w}" y="${A-V-4}">${a(i)} (${m})</text></g>`}).join(""),C=`<svg class="str-map" viewBox="0 0 400 300" role="img" aria-label="Cities visited">${h}</svg>`,F=(i,m)=>m?`<div class="str-card__stat"><span class="str-card__stat-value">${a(m)}</span><span class="str-card__stat-label">${i}</span></div>`:"",U=i=>`
    <div class="str-card" data-type="${i.type}">
      <div class="str-card__header">
        <div class="str-card__icon">${J[i.type]||"\u{1F3C1}"}</div>
        <div>
          <div class="str-card__title">${a(i.title)}</div>
          <div class="str-card__date">${a(i.date)}</div>
        </div>
      </div>
      <div class="str-card__stats">
        ${F("Distance",i.distance_km?`${i.distance_km} km`:"")}
        ${F("Time",i.duration||"")}
        ${F("Pace",i.pace||"")}
        ${F("Elevation",i.elevation_m?`${i.elevation_m} m`:"")}
      </div>
    </div>`,he=t.map(U).join(""),fe=`<div class="str-head__avatar">${a(ee(l?.name||"Diego Nepomuceno Marcos"))}</div>`;s.innerHTML=`
    <nav class="str-nav">
      <div class="str-nav__inner">
        <span class="str-nav__logo">Strava</span>
        <div class="str-nav__search"><input placeholder="Search"></div>
        <span class="str-nav__user">${a(l?.name||"diegonmarcos")}</span>
      </div>
    </nav>
    <div class="str-main">
      <header class="str-head">
        ${fe}
        <div>
          <div class="str-head__name">${a(l?.name||"Diego Nepomuceno Marcos")}</div>
        </div>
        <div class="str-head__stats">
          <div class="str-head__stat"><span class="str-head__stat-value">${l?.activities??t.length}</span><span class="str-head__stat-label">Activities</span></div>
          <div class="str-head__stat"><span class="str-head__stat-value">${l?.followers??0}</span><span class="str-head__stat-label">Followers</span></div>
          <div class="str-head__stat"><span class="str-head__stat-value">${l?.following??0}</span><span class="str-head__stat-label">Following</span></div>
        </div>
      </header>

      ${d}

      <section class="str-section">
        <h3 class="str-section__title">Calendar</h3>
        ${R}
        <div class="str-cal__heatmap-label">Last 12 months</div>
        ${H}
      </section>

      ${h?`<section class="str-section">
        <h3 class="str-section__title">Map \u2014 cities visited</h3>
        ${C}
      </section>`:""}

      <div class="str-filters">
        <button class="str-filter is-active" data-type="all">All</button>
        <button class="str-filter" data-type="run">${J.run} Run</button>
        <button class="str-filter" data-type="ride">${J.ride} Ride</button>
        <button class="str-filter" data-type="swim">${J.swim} Swim</button>
      </div>

      <div class="str-feed">${he||'<p class="str-empty">No activities yet. Strava data loads once the profile is exported.</p>'}</div>
    </div>`,s.querySelectorAll(".str-filter").forEach(i=>{i.addEventListener("click",()=>{s.querySelectorAll(".str-filter").forEach(f=>f.classList.toggle("is-active",f===i));let m=i.dataset.type;s.querySelectorAll(".str-card").forEach(f=>{f.style.display=m==="all"||f.dataset.type===m?"":"none"})})});let $e=s.querySelector("#str-month-body"),be=s.querySelector("#str-month-label"),ne=i=>{k+=i,k<0&&(k=11,b--),k>11&&(k=0,b++),be.textContent=M(b,k),$e.innerHTML=N(b,k)};s.querySelector("#str-month-prev").addEventListener("click",()=>ne(-1)),s.querySelector("#str-month-next").addEventListener("click",()=>ne(1))}function Fe(){let s=document.getElementById("yt-view");if(!s)return;let e=globalThis.PORTAL_DATA?.youtube,t=e?.videos??[],l=e?.playlists??[],v=e?.profile,u=(n,p)=>{let d=n.thumbnail?`<img class="yt-card__img" src="${a(n.thumbnail)}" alt="${a(n.title)}" loading="lazy">`:`<div class="yt-card__ph" style="background:${P(p)}">\u25B6</div>`;return`
    <a class="yt-card" href="${a(n.url||"#")}" target="_blank" rel="noopener">
      <div class="yt-card__thumb">${d}${n.duration?`<span class="yt-card__duration">${a(n.duration)}</span>`:""}</div>
      <div class="yt-card__title">${a(n.title)}</div>
      ${n.channel?`<div class="yt-card__channel">${a(n.channel)}</div>`:""}
      <div class="yt-card__meta">${n.views!==void 0?`${n.views.toLocaleString()} views`:""}${n.views!==void 0&&n.date?" \xB7 ":""}${n.date?a(n.date):""}</div>
    </a>`},$=l.map(n=>`
    <section class="yt-shelf">
      <div class="yt-shelf__title">${a(n.name)}</div>
      <div class="yt-shelf__row">${n.videos.map((p,d)=>u(p,d)).join("")}</div>
    </section>`).join(""),c=t.length?`<div class="yt-grid">${t.map((n,p)=>u(n,p)).join("")}</div>`:"",_=l.length||t.length;s.innerHTML=`
    <nav class="yt-nav">
      <div class="yt-nav__inner">
        <span class="yt-nav__logo">YouTube</span>
        <div class="yt-nav__search"><input placeholder="Search"></div>
        <span class="yt-nav__user">@${a(v?.channel||"diegonmarcos")}</span>
      </div>
    </nav>
    <div class="yt-main">
      <header class="yt-head">
        <div>
          <div class="yt-head__title">${a(v?.channel||"diegonmarcos")}</div>
          <div class="yt-head__sub">${v?.subscribers??0} subscribers \xB7 ${v?.videos??t.length} videos</div>
        </div>
      </header>
      ${_?`${$}${c}`:'<p class="yt-empty">No videos or playlists yet. YouTube data loads once the channel is scraped.</p>'}
    </div>`}var K=(s=!1)=>{let e=s?"#c7cbb9":"#8fbf3f",t=s?"#c7cbb9":"#ef4a2b",l=s?"#e4e4d8":"#ffd400",v=s?"#9a9d90":"#1a1a12";return`<svg class="icq-flower" viewBox="0 0 16 16" aria-hidden="true">${Array.from({length:8},($,c)=>{let _=c*45;return`<ellipse cx="8" cy="2.9" rx="1.9" ry="2.9" fill="${c===0?t:e}" stroke="${v}" stroke-width="0.5" transform="rotate(${_} 8 8)"/>`}).join("")}<circle cx="8" cy="8" r="2.4" fill="${l}" stroke="${v}" stroke-width="0.5"/></svg>`};var pe={online:!1,away:!1,dnd:!1,offline:!0};function Ue(){let s=document.getElementById("icq-view");if(!s)return;let e=globalThis.PORTAL_DATA||{},t=e.linkedin,l=e.instagram,v=t?.profile.name||"Diego Nepomuceno Marcos",u=l?.profile.username||"diegonmarcos",$=v.split(" ")[0],c=v.split(" ").slice(1).join(" "),_=(t?.profile.location||"Berlin, Germany").split(",").map(g=>g.trim()),n=_[0]||"",p=_[_.length-1]||"",d=t?.experience?.[0],S=t?.about||l?.profile.bio||"",x=t?.skills||[],r=t?.languages||[],T="184-042-518",E=["online","online","away","online","dnd","away","offline","offline","offline"],H=ve.map((g,L)=>({...g,status:E[L%E.length]})),j=H.filter(g=>g.status!=="offline"),M=H.filter(g=>g.status==="offline"),N=g=>`<li class="icq-contact">${K(pe[g.status])}<span>${a(g.name)}</span></li>`,b=(g,L)=>L?`<div class="icq-field"><span class="icq-field__k">${a(g)}</span><span class="icq-field__v">${a(L)}</span></div>`:"",k=[{id:"main",label:"Main",body:`
        ${b("Nickname",u)}
        ${b("First Name",$)}
        ${b("Last Name",c)}
        ${b("ICQ#",T)}
        ${b("Email","me@diegonmarcos.com")}
        ${b("Headline",t?.profile.headline||"")}`},{id:"home",label:"Home",body:`
        ${b("City",n)}
        ${b("Country",p)}
        ${b("Homepage",t?.profile.url||"linktree.diegonmarcos.com")}
        ${r.length?`<div class="icq-field"><span class="icq-field__k">Languages</span><span class="icq-field__v">${r.map(g=>a(g.name)).join(", ")}</span></div>`:""}`},{id:"work",label:"Work",body:d?`
        ${b("Company",d.company)}
        ${b("Title",d.title)}
        ${b("Since",d.dates)}
        ${b("Location",d.location||"")}`:'<p class="icq-empty">No work info.</p>'},{id:"about",label:"About",body:S?`<p class="icq-about">${a(S)}</p>`:'<p class="icq-empty">No about info.</p>'},{id:"interests",label:"Interests",body:x.length?`<div class="icq-interests">${x.map(g=>`<span class="icq-chip">${a(g)}</span>`).join("")}</div>`:'<p class="icq-empty">No interests listed.</p>'}],R='<span class="icq-win__btns"><i>_</i><i>\u25A1</i><i>\u2715</i></span>';s.innerHTML=`
    <div class="icq-desk">
      <!-- Contact list window -->
      <div class="icq-win icq-win--list">
        <div class="icq-win__bar">${K("#ffffff")}<span class="icq-win__title">ICQ</span>${R}</div>
        <div class="icq-list">
          <div class="icq-group icq-group--online">Online (${j.length})</div>
          <ul>${j.map(N).join("")}</ul>
          <div class="icq-group icq-group--offline">Offline (${M.length})</div>
          <ul>${M.map(N).join("")}</ul>
        </div>
        <div class="icq-list__foot">${K(pe.online)}<span>Online</span><span class="icq-uin">#${T}</span></div>
      </div>

      <!-- User details window -->
      <div class="icq-win icq-win--details">
        <div class="icq-win__bar icq-win__bar--alt">${K("#ffffff")}<span class="icq-win__title">User Details \u2014 ${a(u)}</span>${R}</div>
        <div class="icq-detail">
          <div class="icq-detail__head">
            <div class="icq-detail__avatar">${a(ee(v))}</div>
            <div>
              <div class="icq-detail__name">${a(v)}</div>
              <div class="icq-detail__nick">"${a(u)}" \xB7 #${T}</div>
            </div>
          </div>
          <div class="icq-tabs">
            ${k.map((g,L)=>`<button class="icq-tab${L===0?" is-active":""}" data-icq-pane="${g.id}">${g.label}</button>`).join("")}
          </div>
          ${k.map((g,L)=>`<div class="icq-pane${L===0?" is-active":""}" data-icq-pane="${g.id}">${g.body}</div>`).join("")}
        </div>
      </div>
    </div>`,s.querySelectorAll(".icq-tab").forEach(g=>{g.addEventListener("click",()=>{let L=g.dataset.icqPane;s.querySelectorAll(".icq-tab").forEach(q=>q.classList.toggle("is-active",q===g)),s.querySelectorAll(".icq-pane").forEach(q=>q.classList.toggle("is-active",q.dataset.icqPane===L))})})}function Ge(){let s=document.getElementById("me-view");if(!s)return;let e=globalThis.PORTAL_DATA||{},t=e.instagram,l=e.linkedin,v=l?.profile.name||t?.profile.name||"Diego Nepomuceno Marcos",u=l?.profile.headline||"",$=l?.profile.location||"",c=t?.profile.bio||"",_=l?.profile.photo||t?.profile.photo,n=globalThis.PORTAL_DATA?.tidal,p=[{theme:"linkedin",label:"LinkedIn",meta:l?`${l.profile.connections} connections \xB7 ${l.profile.followers.toLocaleString()} followers`:"profile",color:"#0a66c2"},{theme:"instagram",label:"Instagram",meta:t?`${t.profile.followers.toLocaleString()} followers \xB7 ${t.profile.posts} post${t.profile.posts===1?"":"s"}`:"profile",color:"#dc2743"},{theme:"pinterest",label:"Pinterest",meta:"boards & pins",color:"#e60023"},{theme:"tidal",label:"TIDAL",meta:n?`${n.profile.playlists} playlists`:"playlists",color:"#00ffff"},{theme:"strava",label:"Strava",meta:"activities & routes",color:"#fc5200"},{theme:"youtube",label:"YouTube",meta:"playlists & videos",color:"#ff0000"},{theme:"orkut",label:"Orkut",meta:"the classic profile",color:"#e9008c"},{theme:"icq",label:"ICQ",meta:"retro IM \xB7 user details",color:"#0a870a"}];s.innerHTML=`
    <div class="me-hub">
      <div class="me-card">
        ${_?`<img class="me-avatar" src="${a(_)}" alt="${a(v)}">`:'<div class="me-avatar"></div>'}
        <h1 class="me-name">${a(v)}</h1>
        ${u?`<p class="me-headline">${a(u)}</p>`:""}
        ${$?`<p class="me-loc">${a($)}</p>`:""}
        ${c?`<p class="me-bio">${a(c)}</p>`:""}
      </div>
      <div class="me-links">
        ${p.map(d=>`
          <button class="me-link" data-goto="${d.theme}" style="--accent:${d.color}">
            <span class="me-link__dot"></span>
            <span class="me-link__body">
              <span class="me-link__name">${d.label}</span>
              <span class="me-link__meta">${a(d.meta)}</span>
            </span>
            <span class="me-link__arrow">\u2192</span>
          </button>`).join("")}
      </div>
    </div>`,s.querySelectorAll(".me-link").forEach(d=>d.addEventListener("click",()=>ue(d.dataset.goto)))}var ze=["myprofile","orkut","instagram","linkedin","pinterest","tidal","strava","youtube","icq"];function Ye(s){return s==="myprofile"?"./":`${s}.html`}function X(s){document.documentElement.setAttribute("data-theme",s),document.querySelectorAll("[data-theme-btn]").forEach(e=>{e.classList.toggle("is-active",e.dataset.themeBtn===s)}),window.scrollTo(0,0)}function ue(s,e=!0){X(s),e&&history.pushState({theme:s},"",Ye(s))}function Ve(){let s=document.documentElement.dataset.theme||"myprofile";X(ze.includes(s)?s:"myprofile"),document.querySelectorAll("[data-theme-btn]").forEach(e=>{e.addEventListener("click",()=>ue(e.dataset.themeBtn))}),window.addEventListener("popstate",e=>{let t=e.state?.theme||"myprofile";X(t)})}function ge(){Ee(),Me(),qe(),De(),Ce(),He(),Pe(),Ne(),Re(),Oe(),Fe(),Ue(),Ge(),Ve(),setTimeout(()=>{document.querySelectorAll(".trust-meter__fill").forEach(s=>{s.style.transition="width 1.2s cubic-bezier(0.16, 1, 0.3, 1)"})},300)}async function _e(){let s=document.getElementById("theme-switch"),e=[...document.querySelectorAll("[data-theme-btn]")],t=document.documentElement.dataset.theme??"";e.find(p=>p.dataset.themeBtn!==t)?.click();let v=document.documentElement.dataset.theme!==t;v&&t&&X(t);let u="none",$=[],c={};try{u=navigator.serviceWorker?.controller?.scriptURL??"none",$=(await navigator.serviceWorker?.getRegistrations?.()??[]).map(d=>[d.installing&&"installing",d.waiting&&"waiting",d.active&&`active:${d.active.scriptURL}`].filter(Boolean).join(","));for(let d of await caches.keys())c[d]=(await(await caches.open(d)).keys()).length}catch{}let _="n/a";if(s){let p=s.getBoundingClientRect(),d=document.elementFromPoint(p.left+p.width/2,p.top+p.height/2);_=`<${d?.tagName}.${(d?.className||"").toString().trim()}> inNav:${s.contains(d)}`}let n={url:location.href,theme:document.documentElement.dataset.theme,navButtons:e.length,navWired:v,swController:u,swRegistrations:$,caches:c,navHitTest:_,ua:navigator.userAgent};return console.info("[mySocials debug]",JSON.stringify(n)),n}window.__debugReport=_e;document.readyState==="loading"?document.addEventListener("DOMContentLoaded",ge):ge();(/\bdebug\b/.test(location.search)||/\bdebug\b/.test(location.hash))&&setTimeout(()=>{_e()},500);})();
