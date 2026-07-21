(()=>{var $=["#e8508a","#4a8aff","#3abb78","#8a6aff","#ff8a4a","#4ac0ff","#ff4a8a","#50c878","#ffa040","#8080ff","#ff6060","#40c0c0","#c060ff","#ff9060","#60b0ff"],ee=[{name:"Ana Silva",initial:"A",color:$[0]},{name:"Bruno Costa",initial:"B",color:$[1]},{name:"Carla Souza",initial:"C",color:$[2]},{name:"Daniel Lima",initial:"D",color:$[3]},{name:"Elena Torres",initial:"E",color:$[4]},{name:"Felipe Gomes",initial:"F",color:$[5]},{name:"Gabi Santos",initial:"G",color:$[6]},{name:"Hugo Pereira",initial:"H",color:$[7]},{name:"Isa Oliveira",initial:"I",color:$[8]}],ne=[{author:"Ana Silva",initial:"A",color:$[0],text:"Hey Diego! Miss our coding sessions at the uni. We should catch up soon! Saudades demais!",time:"2 hours ago"},{author:"Bruno Costa",initial:"B",color:$[1],text:"Cara, vi que voce ta morando em Berlin agora! Que top! Vamos marcar uma call?",time:"5 hours ago"},{author:"Carla Souza",initial:"C",color:$[2],text:"Happy birthday atrasado!! Hope you had an amazing day. Your projects are looking incredible btw",time:"yesterday"},{author:"Felipe Gomes",initial:"F",color:$[5],text:"Mano, teu MyMaps ta INSANO. Lembra quando a gente fazia mapa no paint? kkkk Evoluimos!",time:"2 days ago"},{author:"Gabi Santos",initial:"G",color:$[6],text:'Diego!! Join our community "Linux Users Brazil" please! We need more devs like you there',time:"3 days ago"},{author:"Hugo Pereira",initial:"H",color:$[7],text:"Saw your Strava activities... beast mode! When did you start cycling?",time:"4 days ago"},{author:"Isa Oliveira",initial:"I",color:$[8],text:"Testimonial request sent! You were the best partner for the compiler project, forever grateful",time:"1 week ago"}],oe=[{name:"Eu odeio acordar cedo",members:1247893,emoji:"\u{1F634}",color:"#8a6aff"},{name:"NixOS Brasil",members:3420,emoji:"\u2744\uFE0F",color:"#4a8aff"},{name:"Linux Users",members:89340,emoji:"\u{1F427}",color:"#3abb78"},{name:"Cycling Addicts",members:45200,emoji:"\u{1F6B4}",color:"#ff8a4a"},{name:"Self-hosted Everything",members:12800,emoji:"\u{1F5A5}\uFE0F",color:"#4ac0ff"},{name:"Saudades do Orkut",members:892340,emoji:"\u{1F62D}",color:"#e8508a"},{name:"Maps & Geography",members:23100,emoji:"\u{1F30D}",color:"#50c878"},{name:"Berlin Brasileiros",members:8900,emoji:"\u{1F1E7}\u{1F1F7}",color:"#ffa040"},{name:"Coffee > Sleep",members:456e3,emoji:"\u2615",color:"#c08040"}],le=[{author:"Ana Silva",date:"Dec 2023",text:"Diego is one of those rare people who can debug your code AND your life. An incredible friend, always there when you need help. 10/10 would add as friend again."},{author:"Bruno Costa",date:"Nov 2023",text:"Known Diego since university. The guy literally automated everything in his life with NixOS. Respect the dedication. Best engineer I know, no cap."},{author:"Carla Souza",date:"Oct 2023",text:"The most creative developer I have ever worked with. His projects are not just functional, they are beautiful. An artist disguised as an engineer."},{author:"Elena Torres",date:"Sep 2023",text:"Diego helped me set up my entire self-hosted infrastructure. Refused to let me use any cloud subscription. A true freedom fighter of the internet!"}],O=["#1a2840","#2a1840","#182838","#281828","#1a3028","#302818","#201838","#283018","#381828"];function re(){let s=document.getElementById("friends-grid");s&&ee.forEach(e=>{let t=document.createElement("div");t.className="friend-cell",t.innerHTML=`
      <div class="friend-cell__avatar">
        <div class="friend-cell__avatar-inner" style="background:${e.color}">${e.initial}</div>
      </div>
      <span class="friend-cell__name">${e.name.split(" ")[0]}</span>
    `,s.appendChild(t)})}function ce(){let s=document.getElementById("scraps-list");s&&ne.forEach(e=>{let t=document.createElement("div");t.className="scrap",t.innerHTML=`
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
    `,s.appendChild(t)})}function de(){let s=document.getElementById("communities-grid");s&&oe.forEach(e=>{let t=document.createElement("a");t.href="#",t.className="community-card";let n=e.members>=1e6?`${(e.members/1e6).toFixed(1)}M members`:e.members>=1e3?`${(e.members/1e3).toFixed(0)}K members`:`${e.members} members`;t.innerHTML=`
      <div class="community-card__icon" style="background:${e.color}20;color:${e.color}">${e.emoji}</div>
      <div class="community-card__body">
        <span class="community-card__name">${e.name}</span>
        <span class="community-card__members">${n}</span>
      </div>
    `,s.appendChild(t)})}function me(){let s=document.getElementById("testimonials-list");s&&le.forEach(e=>{let t=document.createElement("div");t.className="testimonial",t.innerHTML=`
      <div class="testimonial__header">
        <span class="testimonial__author">${e.author}</span>
        <span class="testimonial__date">${e.date}</span>
      </div>
      <p class="testimonial__text">${e.text}</p>
    `,s.appendChild(t)})}function pe(){let s=document.getElementById("photo-grid");if(s)for(let e=0;e<9;e++){let t=document.createElement("div");t.className="photo-cell",t.innerHTML=`<div class="photo-cell__inner" style="background:${O[e%O.length]}"></div>`,s.appendChild(t)}}var S={heart:'<svg viewBox="0 0 24 24"><path d="M20.8 4.6a5.5 5.5 0 0 0-7.8 0L12 5.6l-1-1a5.5 5.5 0 0 0-7.8 7.8l1 1L12 21l7.8-7.6 1-1a5.5 5.5 0 0 0 0-7.8z"/></svg>',comment:'<svg viewBox="0 0 24 24"><path d="M21 11.5a8.4 8.4 0 0 1-9 8.4 9 9 0 0 1-4-1L3 20l1.1-4.9A8.4 8.4 0 0 1 12 3a8.4 8.4 0 0 1 9 8.5z"/></svg>',share:'<svg viewBox="0 0 24 24"><line x1="22" y1="2" x2="11" y2="13"/><polygon points="22 2 15 22 11 13 2 9 22 2"/></svg>',save:'<svg viewBox="0 0 24 24"><path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"/></svg>',home:'<svg viewBox="0 0 24 24"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/></svg>',grid:'<svg viewBox="0 0 24 24"><rect x="3" y="3" width="18" height="18" rx="2"/><line x1="9" y1="3" x2="9" y2="21"/><line x1="15" y1="3" x2="15" y2="21"/><line x1="3" y1="9" x2="21" y2="9"/><line x1="3" y1="15" x2="21" y2="15"/></svg>',reels:'<svg viewBox="0 0 24 24"><rect x="3" y="3" width="18" height="18" rx="3"/><line x1="3" y1="8" x2="21" y2="8"/><line x1="8" y1="3" x2="10" y2="8"/><line x1="14" y1="3" x2="16" y2="8"/><polygon points="10 11 15 13.5 10 16" fill="currentColor" stroke="none"/></svg>',tagged:'<svg viewBox="0 0 24 24"><rect x="3" y="3" width="18" height="18" rx="3"/><circle cx="12" cy="10" r="3"/><path d="M7 18a5 5 0 0 1 10 0"/></svg>'};function q(s){let e=O[s%O.length],t=$[s%$.length];return`linear-gradient(135deg, ${e}, ${t})`}function a(s){return s.replace(/[&<>"]/g,e=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"})[e])}function ge(s){let e=0;for(let t=0;t<s.length;t++)e=e*31+s.charCodeAt(t)>>>0;return $[e%$.length]}var Y=["ana","bruno","carla","diego","elena","felipe","gabi","hugo","isa","joao","lu","marco","nina","otto","paula","rafa","sofia","tiago","vera","yara"],U=["","_",".","__"],W=["","br","berlin","photo","travel","x","oficial","real","99","mrx","gram"];function ve(s,e){let t=s.slice();for(let n=0;t.length<e;n++){let v=Y[n%Y.length],u=U[(n>>2)%U.length],c=W[(n>>1)%W.length],l=Math.floor(n/(Y.length*U.length)),m=`${v}${u}${c}${l>0?l:""}`;t.includes(m)?t.push(`${m}${t.length}`):t.push(m)}return t}function ue(){let s=document.getElementById("ig-view");if(!s)return;let e=globalThis.PORTAL_DATA?.instagram;if(!e){s.innerHTML='<p class="ig-empty">Instagram data not loaded.</p>';return}let t=e.profile,n=o=>o.toLocaleString(),v=(e.highlights||[]).map((o,h)=>`
    <div class="ig-hl">
      <div class="ig-hl__ring"><div class="ig-hl__avatar" style="background:${q(h)}"><span class="ig-hl__emoji">${o.emoji}</span></div></div>
      <span class="ig-hl__name">${a(o.label)}</span>
    </div>`).join(""),u=(o,h)=>`
    <a class="ig-tile" href="${a(o.url)}" target="_blank" rel="noopener" style="background:${q(o.url.length)}">
      <span class="ig-tile__cap">${a(o.caption||o.url.replace("https://www.instagram.com/",""))}</span>
      <span class="ig-tile__badge">${h}</span>
    </a>`,c=e.saved.length?e.saved.map(o=>u(o,"\u{1F516}")).join(""):'<p class="ig-empty">Nothing saved.</p>',l=e.liked.length?e.liked.map(o=>u(o,"\u2764\uFE0F")).join(""):'<p class="ig-empty">No likes.</p>',m=o=>Number(o.match(/(\d+)(?=\.\w+$)/)?.[1]||0),r=e.posts.slice().sort((o,h)=>m(h.media)-m(o.media)),p=30,_=[...e.saved,...e.liked].map(o=>o.caption).filter(Boolean),T=r.map((o,h)=>`<a class="ig-tile" href="#" data-post-idx="${h}"><img src="${o.media}" alt="post"></a>`),g=Array.from({length:Math.max(0,p-T.length)},(o,h)=>`
    <a class="ig-tile ig-tile--post" href="#" style="background:${q(h)}">
      <span class="ig-tile__cap">${a(_[h%(_.length||1)]||"")}</span>
    </a>`),L=T.length||g.length?[...T,...g].join(""):'<p class="ig-empty">No posts yet.</p>',k='<svg class="ig-tile__ov" viewBox="0 0 24 24"><polygon points="10 8 16 12 10 16 10 8" fill="currentColor" stroke="none"/></svg>',D=Array.from({length:12},(o,h)=>`
    <a class="ig-tile ig-tile--post" href="#" style="background:${q(h+5)}">${k}
      <span class="ig-tile__cap">${a(_[(h+2)%(_.length||1)]||"")}</span>
    </a>`).join(""),C=Array.from({length:9},(o,h)=>`
    <a class="ig-tile ig-tile--post" href="#" style="background:${q(h+9)}">
      <span class="ig-tile__badge">@${a(t.username)}</span>
    </a>`).join(""),x=e.comments.length?e.comments.map(o=>`
      <div class="ig-comment">
        <div class="ig-comment__text">${a(o.text)}</div>
        <div class="ig-comment__meta">${o.owner?"@"+a(o.owner)+" \xB7 ":""}${a(o.time||"")}</div>
      </div>`).join(""):'<p class="ig-empty">No comments.</p>',A=o=>`<div class="ig-grid">${o}</div>`,E=`<div class="ig-head__avatar ig-head__avatar--ph">${a(G(t.name))}</div>`;s.innerHTML=`
    <nav class="ig-nav">
      <div class="ig-nav__inner">
        <a href="#" class="ig-nav__logo">My Socials</a>
        <div class="ig-nav__search"><input placeholder="Search"></div>
        <div class="ig-nav__icons">${S.home}${S.heart}${S.comment}${S.share}</div>
      </div>
    </nav>
    <div class="ig-page">
      <header class="ig-head">
        <div class="ig-head__user">${a(t.username)}</div>
        <div class="ig-head__row">
          ${E}
          <div class="ig-head__stats">
            <div class="ig-head__stat"><strong>${n(t.posts)}</strong><span>posts</span></div>
            <div class="ig-head__stat" data-modal="followers"><strong>${n(t.followers)}</strong><span>followers</span></div>
            <div class="ig-head__stat" data-modal="following"><strong>${n(t.following)}</strong><span>following</span></div>
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
        <div class="ig-tab is-active" data-pane="posts">${S.grid} Posts</div>
        <div class="ig-tab" data-pane="reels">${S.reels} Reels</div>
        <div class="ig-tab" data-pane="tagged">${S.tagged} Tagged</div>
      </div>

      <div class="ig-subtabs">
        <button class="ig-pill" data-pane="saved">${S.save}<span>Saved</span><em>${n(e.saved.length)}</em></button>
        <button class="ig-pill" data-pane="liked">${S.heart}<span>Liked</span><em>${n(e.liked.length)}</em></button>
        <button class="ig-pill" data-pane="comments">${S.comment}<span>Comments</span><em>${n(e.comments.length)}</em></button>
      </div>

      <div class="ig-pane is-active" data-pane="posts">${A(L)}</div>
      <div class="ig-pane" data-pane="reels">${A(D)}</div>
      <div class="ig-pane" data-pane="tagged">${A(C)}</div>
      <div class="ig-pane" data-pane="saved">${A(c)}</div>
      <div class="ig-pane" data-pane="liked">${A(l)}</div>
      <div class="ig-pane" data-pane="comments"><div class="ig-comments">${x}</div></div>
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
    </div>`,s.querySelectorAll(".ig-tab, .ig-pill").forEach(o=>{o.addEventListener("click",()=>{let h=o.dataset.pane;s.querySelectorAll(".ig-tab, .ig-pill").forEach(M=>M.classList.toggle("is-active",M===o)),s.querySelectorAll(".ig-pane").forEach(M=>M.classList.toggle("is-active",M.dataset.pane===h))})});let b=s.querySelector("#ig-modal"),H=o=>{let h=o==="followers"?e.followers:e.following,M=o==="followers"?t.followers:t.following,ie=ve(h,M);s.querySelector("#ig-modal-title").textContent=o==="followers"?"Followers":"Following",s.querySelector("#ig-modal-sub").textContent=`${n(M)} ${o}`,s.querySelector("#ig-modal-list").innerHTML=ie.map(j=>`
      <div class="ig-row">
        <div class="ig-row__avatar" style="background:${ge(j)}">${a(j.charAt(0).toUpperCase())}</div>
        <a class="ig-row__handle" href="https://www.instagram.com/${a(j)}" target="_blank" rel="noopener">${a(j)}</a>
        <span class="ig-row__follow">Follow</span>
      </div>`).join(""),b.classList.add("is-open")};s.querySelectorAll(".ig-head__stat[data-modal]").forEach(o=>o.addEventListener("click",()=>H(o.dataset.modal)));let I=()=>b.classList.remove("is-open");s.querySelector("#ig-modal-close").addEventListener("click",I),b.addEventListener("click",o=>{o.target===b&&I()});let i=s.querySelector("#ig-post-modal"),d=s.querySelector("#ig-post-img"),f=s.querySelector("#ig-post-dots"),y=s.querySelector("#ig-post-comments"),w=[],B=0,z=()=>{d.src=w[B],f.innerHTML=w.length>1?w.map((o,h)=>`<span class="ig-post-modal__dot${h===B?" is-active":""}"></span>`).join(""):""},ae=o=>{let h=r[o];h&&(w=h.media_all?.length?h.media_all:[h.media],B=0,z(),y.innerHTML='<p class="ig-empty">No per-post comment data in this export.</p>',i.classList.add("is-open"))};s.querySelectorAll(".ig-tile[data-post-idx]").forEach(o=>o.addEventListener("click",h=>{h.preventDefault(),ae(Number(o.dataset.postIdx))})),s.querySelector("#ig-post-prev").addEventListener("click",()=>{B=(B-1+w.length)%w.length,z()}),s.querySelector("#ig-post-next").addEventListener("click",()=>{B=(B+1)%w.length,z()});let Q=()=>i.classList.remove("is-open");s.querySelector("#ig-post-modal-close").addEventListener("click",Q),i.addEventListener("click",o=>{o.target===i&&Q()})}var P={home:'<svg viewBox="0 0 24 24"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/></svg>',net:'<svg viewBox="0 0 24 24"><circle cx="9" cy="7" r="4"/><path d="M17 11a4 4 0 1 0-3-6.6M1 21v-2a4 4 0 0 1 4-4h8a4 4 0 0 1 4 4v2M17 15a4 4 0 0 1 4 4v2"/></svg>',jobs:'<svg viewBox="0 0 24 24"><rect x="2" y="7" width="20" height="14" rx="2"/><path d="M8 7V5a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"/></svg>',msg:'<svg viewBox="0 0 24 24"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>',bell:'<svg viewBox="0 0 24 24"><path d="M18 8a6 6 0 1 0-12 0c0 7-3 9-3 9h18s-3-2-3-9M13.7 21a2 2 0 0 1-3.4 0"/></svg>',like:'<svg viewBox="0 0 24 24"><path d="M14 9V5a3 3 0 0 0-6 0v4H5a2 2 0 0 0-2 2l1 7a2 2 0 0 0 2 2h9a2 2 0 0 0 2-2l1-7a2 2 0 0 0-2-2z"/></svg>',comment:'<svg viewBox="0 0 24 24"><path d="M21 11.5a8.4 8.4 0 0 1-9 8.4 9 9 0 0 1-4-1L3 20l1.1-4.9A8.4 8.4 0 0 1 12 3a8.4 8.4 0 0 1 9 8.5z"/></svg>',repost:'<svg viewBox="0 0 24 24"><polyline points="17 1 21 5 17 9"/><path d="M3 11V9a4 4 0 0 1 4-4h14M7 23l-4-4 4-4M21 13v2a4 4 0 0 1-4 4H3"/></svg>',send:'<svg viewBox="0 0 24 24"><line x1="22" y1="2" x2="11" y2="13"/><polygon points="22 2 15 22 11 13 2 9 22 2"/></svg>'};function V(s){let e=n=>a(n).replace(/(https?:\/\/\S+)/g,'<a href="$1" target="_blank" rel="noopener">$1</a>');return s.split(/\s*-{3,}\s*/).map(n=>n.trim()).filter(Boolean).map(n=>{let v=n.match(/^@(\S+)\s+([\s\S]*)$/),u=v?.[1],c=(v?v[2]:n).trim().replace(/^>\s*/,""),l=u?`<div class="li-desc__label">${a(u)}</div>`:"",m=c.split(/\s-\s/).map(r=>r.trim()).filter(Boolean);return l+(m.length>=3?`<ul class="li-desc__list">${m.map(r=>`<li>${e(r)}</li>`).join("")}</ul>`:`<p class="li-desc__p">${e(c)}</p>`)}).join("")}function G(s){return s.split(/\s+/).filter(Boolean).slice(0,2).map(e=>e.charAt(0).toUpperCase()).join("")}function _e(){let s=document.getElementById("li-view");if(!s)return;let e=globalThis.PORTAL_DATA?.linkedin;if(!e){s.innerHTML='<p class="li-empty">LinkedIn data not loaded.</p>';return}let t=e.profile,n=(g,L)=>`<div class="li-nav__item">${g}<span>${L}</span></div>`,v=t.photo?`<div class="li-phead__avatar li-phead__avatar--img"><img src="${t.photo}" alt="${a(t.name)}"></div>`:`<div class="li-phead__avatar" style="background:${$[3]}">${a(G(t.name))}</div>`,u=(g,L)=>`<section class="li-card li-section"><h2 class="li-section__title">${g}</h2>${L}</section>`,c='<p class="li-need">Not in the saved profile page \u2014 add from your LinkedIn data export (Settings \u2192 Get a copy of your data).</p>',l=e.experience.length?e.experience.map(g=>`
      <div class="li-item">
        <div class="li-item__logo">${a(g.company.charAt(0))}</div>
        <div>
          <div class="li-item__title">${a(g.title)}</div>
          <div class="li-item__sub">${a(g.company)}</div>
          <div class="li-item__meta">${a(g.dates)}${g.location?" \xB7 "+a(g.location):""}</div>
          ${g.description?`<div class="li-item__desc">${V(g.description)}</div>`:""}
        </div>
      </div>`).join(""):c,m=e.education.length?e.education.map(g=>`
      <div class="li-item">
        <div class="li-item__logo">${a(g.school.charAt(0))}</div>
        <div>
          <div class="li-item__title">${a(g.school)}</div>
          <div class="li-item__sub">${a(g.degree)}</div>
          <div class="li-item__meta">${a(g.dates)}</div>
        </div>
      </div>`).join(""):c,r=e.skills.length?`<div class="li-skills">${e.skills.map(g=>`<span class="li-skill">${a(g)}</span>`).join("")}</div>`:c,p=e.about?`<div class="li-about">${V(e.about)}</div>`:c,_=e.languages.length?e.languages.map(g=>`
      <div class="li-lang">
        <span class="li-lang__name">${a(g.name)}</span>
        <span class="li-lang__level">${a(g.proficiency)}</span>
      </div>`).join(""):c,T=e.projects.length?e.projects.map(g=>`
      <div class="li-item li-item--proj">
        <div>
          <div class="li-item__title">${a(g.title)}${g.url?` \xB7 <a href="${a(g.url)}" target="_blank" rel="noopener">link</a>`:""}</div>
          ${g.dates?`<div class="li-item__meta">${a(g.dates)}</div>`:""}
          <div class="li-item__desc">${V(g.description)}</div>
        </div>
      </div>`).join(""):c;s.innerHTML=`
    <nav class="li-nav">
      <div class="li-nav__inner">
        <span class="li-nav__logo">in</span>
        <div class="li-nav__search"><input placeholder="Search"></div>
        <div class="li-nav__items">
          ${n(P.home,"Home")}
          ${n(P.net,"Network")}
          ${n(P.jobs,"Jobs")}
          ${n(P.msg,"Messaging")}
          ${n(P.bell,"Notifications")}
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
        ${u("About",p)}
        ${u("Experience",l)}
        ${u("Education",m)}
        ${u("Skills",r)}
        ${u("Projects",T)}
        ${u("Languages",_)}
      </div>
      <aside class="li-prof__rail">
        <div class="li-card li-side">
          <div class="li-side__title">Profile</div>
          <div class="li-side__row"><span>Current</span><strong>${a(t.current)}</strong></div>
          <div class="li-side__row"><span>Location</span><strong>${a(t.location.split(",")[0])}</strong></div>
          <div class="li-side__row"><span>Profile</span><a href="https://${a(t.url)}" target="_blank" rel="noopener">${a(t.url)}</a></div>
        </div>
      </aside>
    </div>`}var J={bell:'<svg viewBox="0 0 24 24"><path d="M18 8a6 6 0 1 0-12 0c0 7-3 9-3 9h18s-3-2-3-9M13.7 21a2 2 0 0 1-3.4 0"/></svg>',chat:'<svg viewBox="0 0 24 24"><path d="M21 11.5a8.4 8.4 0 0 1-9 8.4 9 9 0 0 1-4-1L3 20l1.1-4.9A8.4 8.4 0 0 1 12 3a8.4 8.4 0 0 1 9 8.5z"/></svg>'},K=[220,300,180,340,260,200,320,240,280];function he(){let s=document.getElementById("pin-view");if(!s)return;let e=globalThis.PORTAL_DATA?.pinterest,t=e?.boards??[],n=e?.profile,v=["30% 30%","75% 15%","20% 80%","80% 75%"],u=(l,m)=>`
    <div class="pin-card__grid">
      ${v.map((r,p)=>`<div class="pin-card__cell pin-card__cell--${p}" style="background-image:url('${a(l)}');background-position:${r}" role="img" aria-label="${a(m)}"></div>`).join("")}
    </div>`,c=t.map((l,m)=>{let r=K[m%K.length],p=l.cover?u(l.cover,l.name):`<div class="pin-card__ph" style="height:${r}px;background:${q(m)}">\u{1F4CC}</div>`;return`
    <a class="pin-card" href="https://www.pinterest.com/${a(n?.username||"diegonmarcos")}/${a(l.name.toLowerCase().replace(/[^a-z0-9]+/g,"-"))}/" target="_blank" rel="noopener">
      <div class="pin-card__media">
        ${p}
        <div class="pin-card__overlay"><span class="pin-card__save">${l.pins} pins</span></div>
      </div>
      <div class="pin-card__title">${a(l.name)}</div>
      ${l.desc?`<div class="pin-card__meta">${a(l.desc)}</div>`:`<div class="pin-card__meta">${l.pins} pins</div>`}
    </a>`}).join("");s.innerHTML=`
    <nav class="pin-nav">
      <div class="pin-nav__inner">
        <span class="pin-nav__logo">P</span>
        <a href="#" class="pin-nav__tab pin-nav__tab--active">Boards</a>
        <a href="https://www.pinterest.com/${a(n?.username||"diegonmarcos")}/" target="_blank" rel="noopener" class="pin-nav__tab">Profile</a>
        <div class="pin-nav__search"><input placeholder="Search for ideas"></div>
        <div class="pin-nav__icons">${J.bell}${J.chat}<span class="pin-nav__avatar" style="background:${$[3]}">D</span></div>
      </div>
    </nav>
    <div class="pin-head">@${a(n?.username||"diegonmarcos")} \xB7 <strong>${n?.boards??t.length}</strong> boards \xB7 <strong>${n?.pins??0}</strong> pins</div>
    <div class="pin-board">${c||'<p class="pin-empty">No boards.</p>'}</div>`}function fe(){let s=document.getElementById("tid-view");if(!s)return;let e=globalThis.PORTAL_DATA?.tidal,t=e?.playlists??[],n=e?.profile,v=c=>{if(!c)return"";let l=Math.floor(c/3600),m=Math.round(c%3600/60);return l?`${l}h ${m}m`:`${m} min`},u=t.map((c,l)=>{let m=c.cover?`<img class="tid-card__img" src="${a(c.cover)}" alt="${a(c.name)}" loading="lazy">`:`<div class="tid-card__ph" style="background:${q(l)}">\u266B</div>`;return`
    <a class="tid-card" href="${a(c.url)}" target="_blank" rel="noopener">
      <div class="tid-card__cover">${m}<span class="tid-card__play">\u25B6</span></div>
      <div class="tid-card__name">${a(c.name)}</div>
      <div class="tid-card__meta">${c.tracks} tracks${c.duration_s?" \xB7 "+v(c.duration_s):""}</div>
    </a>`}).join("");s.innerHTML=`
    <nav class="tid-nav">
      <div class="tid-nav__inner">
        <span class="tid-nav__logo">TIDAL</span>
        <div class="tid-nav__search"><input placeholder="Search"></div>
        <span class="tid-nav__user">@${a(n?.username||"diegonmarcos")}</span>
      </div>
    </nav>
    <div class="tid-main">
      <header class="tid-head">
        <div class="tid-head__title">My Playlists</div>
        <div class="tid-head__sub">${n?.playlists??t.length} playlists \xB7 ${n?.tracks??0} tracks</div>
      </header>
      <div class="tid-grid">${u||'<p class="tid-empty">Playlists load once the Tidal profile ID is set.</p>'}</div>
    </div>`}var N={run:"\u{1F3C3}",ride:"\u{1F6B4}",swim:"\u{1F3CA}"};function $e(){let s=document.getElementById("str-view");if(!s)return;let e=globalThis.PORTAL_DATA?.strava,t=e?.activities??[],n=e?.profile,v=i=>i&&parseInt(i)||0,u=i=>i.split(" \u2014 ")[1]||"",c=["run","ride","swim"],l=c.reduce((i,d)=>{let f=t.filter(y=>y.type===d);return i[d]={count:f.length,distance:f.reduce((y,w)=>y+(w.distance_km||0),0),minutes:f.reduce((y,w)=>y+v(w.duration),0),elevation:f.reduce((y,w)=>y+(w.elevation_m||0),0)},i},{}),m=c.reduce((i,d)=>i+l[d].minutes,0),r=i=>`${Math.round(i/60)}h`,p=(i,d,f)=>`<div class="str-stat"><span class="str-stat__icon">${i}</span><span class="str-stat__value">${a(d)}</span><span class="str-stat__label">${f}</span></div>`,_=`
    <div class="str-dash">
      ${p("\u{1F3C3}",`${l.run.distance.toFixed(0)} km`,`${l.run.count} runs`)}
      ${p("\u{1F6B4}",`${l.ride.distance.toFixed(0)} km`,`${l.ride.count} rides`)}
      ${p("\u{1F3CA}",`${l.swim.distance.toFixed(1)} km`,`${l.swim.count} swims`)}
      ${p("\u23F1\uFE0F",r(m),"total time")}
      ${p("\u26F0\uFE0F",`${(l.run.elevation+l.ride.elevation).toLocaleString()} m`,"elevation gain")}
    </div>`,T=new Map;t.forEach(i=>{let d=Date.parse(i.date);if(!Number.isNaN(d)){let f=new Date(d).toISOString().slice(0,10);T.set(f,(T.get(f)||0)+1)}});let g=t.length?new Date(Math.max(...t.map(i=>Date.parse(i.date)).filter(i=>!Number.isNaN(i)))):new Date(0),L=53,k=new Date(g);k.setDate(k.getDate()-L*7),k.setDate(k.getDate()-k.getDay());let D=[];for(let i=0;i<L*7;i++){let d=new Date(k);d.setDate(d.getDate()+i);let f=d.toISOString().slice(0,10),y=T.get(f)||0,w=y===0?0:y===1?1:y===2?2:3;D.push(`<span class="str-cal__cell str-cal__cell--${w}" title="${f}: ${y} activit${y===1?"y":"ies"}"></span>`)}let C=`<div class="str-cal">${D.join("")}</div>`,x=new Map;t.forEach(i=>{let d=u(i.title);d&&x.set(d,(x.get(d)||0)+1)});let A=[...x.entries()].sort((i,d)=>d[1]-i[1]).map(([i,d])=>`<span class="str-city">${a(i)}<em>${d}</em></span>`).join(""),E=(i,d)=>d?`<div class="str-card__stat"><span class="str-card__stat-value">${a(d)}</span><span class="str-card__stat-label">${i}</span></div>`:"",b=i=>`
    <div class="str-card" data-type="${i.type}">
      <div class="str-card__header">
        <div class="str-card__icon">${N[i.type]||"\u{1F3C1}"}</div>
        <div>
          <div class="str-card__title">${a(i.title)}</div>
          <div class="str-card__date">${a(i.date)}</div>
        </div>
      </div>
      <div class="str-card__stats">
        ${E("Distance",i.distance_km?`${i.distance_km} km`:"")}
        ${E("Time",i.duration||"")}
        ${E("Pace",i.pace||"")}
        ${E("Elevation",i.elevation_m?`${i.elevation_m} m`:"")}
      </div>
    </div>`,H=t.map(b).join(""),I=`<div class="str-head__avatar">${a(G(n?.name||"Diego Nepomuceno Marcos"))}</div>`;s.innerHTML=`
    <nav class="str-nav">
      <div class="str-nav__inner">
        <span class="str-nav__logo">Strava</span>
        <div class="str-nav__search"><input placeholder="Search"></div>
        <span class="str-nav__user">${a(n?.name||"diegonmarcos")}</span>
      </div>
    </nav>
    <div class="str-main">
      <header class="str-head">
        ${I}
        <div>
          <div class="str-head__name">${a(n?.name||"Diego Nepomuceno Marcos")}</div>
        </div>
        <div class="str-head__stats">
          <div class="str-head__stat"><span class="str-head__stat-value">${n?.activities??t.length}</span><span class="str-head__stat-label">Activities</span></div>
          <div class="str-head__stat"><span class="str-head__stat-value">${n?.followers??0}</span><span class="str-head__stat-label">Followers</span></div>
          <div class="str-head__stat"><span class="str-head__stat-value">${n?.following??0}</span><span class="str-head__stat-label">Following</span></div>
        </div>
      </header>

      ${_}

      <section class="str-section">
        <h3 class="str-section__title">Activity calendar</h3>
        ${C}
      </section>

      ${A?`<section class="str-section">
        <h3 class="str-section__title">By city</h3>
        <div class="str-cities">${A}</div>
      </section>`:""}

      <div class="str-filters">
        <button class="str-filter is-active" data-type="all">All</button>
        <button class="str-filter" data-type="run">${N.run} Run</button>
        <button class="str-filter" data-type="ride">${N.ride} Ride</button>
        <button class="str-filter" data-type="swim">${N.swim} Swim</button>
      </div>

      <div class="str-feed">${H||'<p class="str-empty">No activities yet. Strava data loads once the profile is exported.</p>'}</div>
    </div>`,s.querySelectorAll(".str-filter").forEach(i=>{i.addEventListener("click",()=>{s.querySelectorAll(".str-filter").forEach(f=>f.classList.toggle("is-active",f===i));let d=i.dataset.type;s.querySelectorAll(".str-card").forEach(f=>{f.style.display=d==="all"||f.dataset.type===d?"":"none"})})})}function be(){let s=document.getElementById("yt-view");if(!s)return;let e=globalThis.PORTAL_DATA?.youtube,t=e?.videos??[],n=e?.playlists??[],v=e?.profile,u=(r,p)=>{let _=r.thumbnail?`<img class="yt-card__img" src="${a(r.thumbnail)}" alt="${a(r.title)}" loading="lazy">`:`<div class="yt-card__ph" style="background:${q(p)}">\u25B6</div>`;return`
    <a class="yt-card" href="${a(r.url||"#")}" target="_blank" rel="noopener">
      <div class="yt-card__thumb">${_}${r.duration?`<span class="yt-card__duration">${a(r.duration)}</span>`:""}</div>
      <div class="yt-card__title">${a(r.title)}</div>
      ${r.channel?`<div class="yt-card__channel">${a(r.channel)}</div>`:""}
      <div class="yt-card__meta">${r.views!==void 0?`${r.views.toLocaleString()} views`:""}${r.views!==void 0&&r.date?" \xB7 ":""}${r.date?a(r.date):""}</div>
    </a>`},c=n.map(r=>`
    <section class="yt-shelf">
      <div class="yt-shelf__title">${a(r.name)}</div>
      <div class="yt-shelf__row">${r.videos.map((p,_)=>u(p,_)).join("")}</div>
    </section>`).join(""),l=t.length?`<div class="yt-grid">${t.map((r,p)=>u(r,p)).join("")}</div>`:"",m=n.length||t.length;s.innerHTML=`
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
      ${m?`${c}${l}`:'<p class="yt-empty">No videos or playlists yet. YouTube data loads once the channel is scraped.</p>'}
    </div>`}var R=(s=!1)=>{let e=s?"#c7cbb9":"#8fbf3f",t=s?"#c7cbb9":"#ef4a2b",n=s?"#e4e4d8":"#ffd400",v=s?"#9a9d90":"#1a1a12";return`<svg class="icq-flower" viewBox="0 0 16 16" aria-hidden="true">${Array.from({length:8},(c,l)=>{let m=l*45;return`<ellipse cx="8" cy="2.9" rx="1.9" ry="2.9" fill="${l===0?t:e}" stroke="${v}" stroke-width="0.5" transform="rotate(${m} 8 8)"/>`}).join("")}<circle cx="8" cy="8" r="2.4" fill="${n}" stroke="${v}" stroke-width="0.5"/></svg>`};var X={online:!1,away:!1,dnd:!1,offline:!0};function ye(){let s=document.getElementById("icq-view");if(!s)return;let e=globalThis.PORTAL_DATA||{},t=e.linkedin,n=e.instagram,v=t?.profile.name||"Diego Nepomuceno Marcos",u=n?.profile.username||"diegonmarcos",c=v.split(" ")[0],l=v.split(" ").slice(1).join(" "),m=(t?.profile.location||"Berlin, Germany").split(",").map(i=>i.trim()),r=m[0]||"",p=m[m.length-1]||"",_=t?.experience?.[0],T=t?.about||n?.profile.bio||"",g=t?.skills||[],L=t?.languages||[],k="184-042-518",D=["online","online","away","online","dnd","away","offline","offline","offline"],C=ee.map((i,d)=>({...i,status:D[d%D.length]})),x=C.filter(i=>i.status!=="offline"),A=C.filter(i=>i.status==="offline"),E=i=>`<li class="icq-contact">${R(X[i.status])}<span>${a(i.name)}</span></li>`,b=(i,d)=>d?`<div class="icq-field"><span class="icq-field__k">${a(i)}</span><span class="icq-field__v">${a(d)}</span></div>`:"",H=[{id:"main",label:"Main",body:`
        ${b("Nickname",u)}
        ${b("First Name",c)}
        ${b("Last Name",l)}
        ${b("ICQ#",k)}
        ${b("Email","me@diegonmarcos.com")}
        ${b("Headline",t?.profile.headline||"")}`},{id:"home",label:"Home",body:`
        ${b("City",r)}
        ${b("Country",p)}
        ${b("Homepage",t?.profile.url||"linktree.diegonmarcos.com")}
        ${L.length?`<div class="icq-field"><span class="icq-field__k">Languages</span><span class="icq-field__v">${L.map(i=>a(i.name)).join(", ")}</span></div>`:""}`},{id:"work",label:"Work",body:_?`
        ${b("Company",_.company)}
        ${b("Title",_.title)}
        ${b("Since",_.dates)}
        ${b("Location",_.location||"")}`:'<p class="icq-empty">No work info.</p>'},{id:"about",label:"About",body:T?`<p class="icq-about">${a(T)}</p>`:'<p class="icq-empty">No about info.</p>'},{id:"interests",label:"Interests",body:g.length?`<div class="icq-interests">${g.map(i=>`<span class="icq-chip">${a(i)}</span>`).join("")}</div>`:'<p class="icq-empty">No interests listed.</p>'}],I='<span class="icq-win__btns"><i>_</i><i>\u25A1</i><i>\u2715</i></span>';s.innerHTML=`
    <div class="icq-desk">
      <!-- Contact list window -->
      <div class="icq-win icq-win--list">
        <div class="icq-win__bar">${R("#ffffff")}<span class="icq-win__title">ICQ</span>${I}</div>
        <div class="icq-list">
          <div class="icq-group icq-group--online">Online (${x.length})</div>
          <ul>${x.map(E).join("")}</ul>
          <div class="icq-group icq-group--offline">Offline (${A.length})</div>
          <ul>${A.map(E).join("")}</ul>
        </div>
        <div class="icq-list__foot">${R(X.online)}<span>Online</span><span class="icq-uin">#${k}</span></div>
      </div>

      <!-- User details window -->
      <div class="icq-win icq-win--details">
        <div class="icq-win__bar icq-win__bar--alt">${R("#ffffff")}<span class="icq-win__title">User Details \u2014 ${a(u)}</span>${I}</div>
        <div class="icq-detail">
          <div class="icq-detail__head">
            <div class="icq-detail__avatar">${a(G(v))}</div>
            <div>
              <div class="icq-detail__name">${a(v)}</div>
              <div class="icq-detail__nick">"${a(u)}" \xB7 #${k}</div>
            </div>
          </div>
          <div class="icq-tabs">
            ${H.map((i,d)=>`<button class="icq-tab${d===0?" is-active":""}" data-icq-pane="${i.id}">${i.label}</button>`).join("")}
          </div>
          ${H.map((i,d)=>`<div class="icq-pane${d===0?" is-active":""}" data-icq-pane="${i.id}">${i.body}</div>`).join("")}
        </div>
      </div>
    </div>`,s.querySelectorAll(".icq-tab").forEach(i=>{i.addEventListener("click",()=>{let d=i.dataset.icqPane;s.querySelectorAll(".icq-tab").forEach(f=>f.classList.toggle("is-active",f===i)),s.querySelectorAll(".icq-pane").forEach(f=>f.classList.toggle("is-active",f.dataset.icqPane===d))})})}function we(){let s=document.getElementById("me-view");if(!s)return;let e=globalThis.PORTAL_DATA||{},t=e.instagram,n=e.linkedin,v=n?.profile.name||t?.profile.name||"Diego Nepomuceno Marcos",u=n?.profile.headline||"",c=n?.profile.location||"",l=t?.profile.bio||"",m=globalThis.PORTAL_DATA?.tidal,r=[{theme:"linkedin",label:"LinkedIn",meta:n?`${n.profile.connections} connections \xB7 ${n.profile.followers.toLocaleString()} followers`:"profile",color:"#0a66c2"},{theme:"instagram",label:"Instagram",meta:t?`${t.profile.followers.toLocaleString()} followers \xB7 ${t.profile.posts} post${t.profile.posts===1?"":"s"}`:"profile",color:"#dc2743"},{theme:"pinterest",label:"Pinterest",meta:"boards & pins",color:"#e60023"},{theme:"tidal",label:"TIDAL",meta:m?`${m.profile.playlists} playlists`:"playlists",color:"#00ffff"},{theme:"strava",label:"Strava",meta:"activities & routes",color:"#fc5200"},{theme:"youtube",label:"YouTube",meta:"playlists & videos",color:"#ff0000"},{theme:"orkut",label:"Orkut",meta:"the classic profile",color:"#e9008c"},{theme:"icq",label:"ICQ",meta:"retro IM \xB7 user details",color:"#0a870a"}];s.innerHTML=`
    <div class="me-hub">
      <div class="me-card">
        <div class="me-avatar"></div>
        <h1 class="me-name">${a(v)}</h1>
        ${u?`<p class="me-headline">${a(u)}</p>`:""}
        ${c?`<p class="me-loc">${a(c)}</p>`:""}
        ${l?`<p class="me-bio">${a(l)}</p>`:""}
      </div>
      <div class="me-links">
        ${r.map(p=>`
          <button class="me-link" data-goto="${p.theme}" style="--accent:${p.color}">
            <span class="me-link__dot"></span>
            <span class="me-link__body">
              <span class="me-link__name">${p.label}</span>
              <span class="me-link__meta">${a(p.meta)}</span>
            </span>
            <span class="me-link__arrow">\u2192</span>
          </button>`).join("")}
      </div>
    </div>`,s.querySelectorAll(".me-link").forEach(p=>p.addEventListener("click",()=>te(p.dataset.goto)))}var Te=["myprofile","orkut","instagram","linkedin","pinterest","tidal","strava","youtube","icq"];function ke(s){return s==="myprofile"?"./":`${s}.html`}function F(s){document.documentElement.setAttribute("data-theme",s),document.querySelectorAll("[data-theme-btn]").forEach(e=>{e.classList.toggle("is-active",e.dataset.themeBtn===s)}),window.scrollTo(0,0)}function te(s,e=!0){F(s),e&&history.pushState({theme:s},"",ke(s))}function Le(){let s=document.documentElement.dataset.theme||"myprofile";F(Te.includes(s)?s:"myprofile"),document.querySelectorAll("[data-theme-btn]").forEach(e=>{e.addEventListener("click",()=>te(e.dataset.themeBtn))}),window.addEventListener("popstate",e=>{let t=e.state?.theme||"myprofile";F(t)})}function Z(){re(),ce(),de(),me(),pe(),ue(),_e(),he(),fe(),$e(),be(),ye(),we(),Le(),setTimeout(()=>{document.querySelectorAll(".trust-meter__fill").forEach(s=>{s.style.transition="width 1.2s cubic-bezier(0.16, 1, 0.3, 1)"})},300)}async function se(){let s=document.getElementById("theme-switch"),e=[...document.querySelectorAll("[data-theme-btn]")],t=document.documentElement.dataset.theme??"";e.find(p=>p.dataset.themeBtn!==t)?.click();let v=document.documentElement.dataset.theme!==t;v&&t&&F(t);let u="none",c=[],l={};try{u=navigator.serviceWorker?.controller?.scriptURL??"none",c=(await navigator.serviceWorker?.getRegistrations?.()??[]).map(_=>[_.installing&&"installing",_.waiting&&"waiting",_.active&&`active:${_.active.scriptURL}`].filter(Boolean).join(","));for(let _ of await caches.keys())l[_]=(await(await caches.open(_)).keys()).length}catch{}let m="n/a";if(s){let p=s.getBoundingClientRect(),_=document.elementFromPoint(p.left+p.width/2,p.top+p.height/2);m=`<${_?.tagName}.${(_?.className||"").toString().trim()}> inNav:${s.contains(_)}`}let r={url:location.href,theme:document.documentElement.dataset.theme,navButtons:e.length,navWired:v,swController:u,swRegistrations:c,caches:l,navHitTest:m,ua:navigator.userAgent};return console.info("[mySocials debug]",JSON.stringify(r)),r}window.__debugReport=se;document.readyState==="loading"?document.addEventListener("DOMContentLoaded",Z):Z();(/\bdebug\b/.test(location.search)||/\bdebug\b/.test(location.hash))&&setTimeout(()=>{se()},500);})();
