(()=>{var y=["#e8508a","#4a8aff","#3abb78","#8a6aff","#ff8a4a","#4ac0ff","#ff4a8a","#50c878","#ffa040","#8080ff","#ff6060","#40c0c0","#c060ff","#ff9060","#60b0ff"],ve=[{name:"Ana Silva",initial:"A",color:y[0]},{name:"Bruno Costa",initial:"B",color:y[1]},{name:"Carla Souza",initial:"C",color:y[2]},{name:"Daniel Lima",initial:"D",color:y[3]},{name:"Elena Torres",initial:"E",color:y[4]},{name:"Felipe Gomes",initial:"F",color:y[5]},{name:"Gabi Santos",initial:"G",color:y[6]},{name:"Hugo Pereira",initial:"H",color:y[7]},{name:"Isa Oliveira",initial:"I",color:y[8]}],Se=[{author:"Ana Silva",initial:"A",color:y[0],text:"Hey Diego! Miss our coding sessions at the uni. We should catch up soon! Saudades demais!",time:"2 hours ago"},{author:"Bruno Costa",initial:"B",color:y[1],text:"Cara, vi que voce ta morando em Berlin agora! Que top! Vamos marcar uma call?",time:"5 hours ago"},{author:"Carla Souza",initial:"C",color:y[2],text:"Happy birthday atrasado!! Hope you had an amazing day. Your projects are looking incredible btw",time:"yesterday"},{author:"Felipe Gomes",initial:"F",color:y[5],text:"Mano, teu MyMaps ta INSANO. Lembra quando a gente fazia mapa no paint? kkkk Evoluimos!",time:"2 days ago"},{author:"Gabi Santos",initial:"G",color:y[6],text:'Diego!! Join our community "Linux Users Brazil" please! We need more devs like you there',time:"3 days ago"},{author:"Hugo Pereira",initial:"H",color:y[7],text:"Saw your Strava activities... beast mode! When did you start cycling?",time:"4 days ago"},{author:"Isa Oliveira",initial:"I",color:y[8],text:"Testimonial request sent! You were the best partner for the compiler project, forever grateful",time:"1 week ago"}],Ae=[{name:"Eu odeio acordar cedo",members:1247893,emoji:"\u{1F634}",color:"#8a6aff"},{name:"NixOS Brasil",members:3420,emoji:"\u2744\uFE0F",color:"#4a8aff"},{name:"Linux Users",members:89340,emoji:"\u{1F427}",color:"#3abb78"},{name:"Cycling Addicts",members:45200,emoji:"\u{1F6B4}",color:"#ff8a4a"},{name:"Self-hosted Everything",members:12800,emoji:"\u{1F5A5}\uFE0F",color:"#4ac0ff"},{name:"Saudades do Orkut",members:892340,emoji:"\u{1F62D}",color:"#e8508a"},{name:"Maps & Geography",members:23100,emoji:"\u{1F30D}",color:"#50c878"},{name:"Berlin Brasileiros",members:8900,emoji:"\u{1F1E7}\u{1F1F7}",color:"#ffa040"},{name:"Coffee > Sleep",members:456e3,emoji:"\u2615",color:"#c08040"}],xe=[{author:"Ana Silva",date:"Dec 2023",text:"Diego is one of those rare people who can debug your code AND your life. An incredible friend, always there when you need help. 10/10 would add as friend again."},{author:"Bruno Costa",date:"Nov 2023",text:"Known Diego since university. The guy literally automated everything in his life with NixOS. Respect the dedication. Best engineer I know, no cap."},{author:"Carla Souza",date:"Oct 2023",text:"The most creative developer I have ever worked with. His projects are not just functional, they are beautiful. An artist disguised as an engineer."},{author:"Elena Torres",date:"Sep 2023",text:"Diego helped me set up my entire self-hosted infrastructure. Refused to let me use any cloud subscription. A true freedom fighter of the internet!"}],J=["#1a2840","#2a1840","#182838","#281828","#1a3028","#302818","#201838","#283018","#381828"];function Ee(){let t=document.getElementById("friends-grid");t&&ve.forEach(e=>{let s=document.createElement("div");s.className="friend-cell",s.innerHTML=`
      <div class="friend-cell__avatar">
        <div class="friend-cell__avatar-inner" style="background:${e.color}">${e.initial}</div>
      </div>
      <span class="friend-cell__name">${e.name.split(" ")[0]}</span>
    `,t.appendChild(s)})}function Me(){let t=document.getElementById("scraps-list");t&&Se.forEach(e=>{let s=document.createElement("div");s.className="scrap",s.innerHTML=`
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
    `,t.appendChild(s)})}function qe(){let t=document.getElementById("communities-grid");t&&Ae.forEach(e=>{let s=document.createElement("a");s.href="#",s.className="community-card";let l=e.members>=1e6?`${(e.members/1e6).toFixed(1)}M members`:e.members>=1e3?`${(e.members/1e3).toFixed(0)}K members`:`${e.members} members`;s.innerHTML=`
      <div class="community-card__icon" style="background:${e.color}20;color:${e.color}">${e.emoji}</div>
      <div class="community-card__body">
        <span class="community-card__name">${e.name}</span>
        <span class="community-card__members">${l}</span>
      </div>
    `,t.appendChild(s)})}function De(){let t=document.getElementById("testimonials-list");t&&xe.forEach(e=>{let s=document.createElement("div");s.className="testimonial",s.innerHTML=`
      <div class="testimonial__header">
        <span class="testimonial__author">${e.author}</span>
        <span class="testimonial__date">${e.date}</span>
      </div>
      <p class="testimonial__text">${e.text}</p>
    `,t.appendChild(s)})}function Ce(){let t=document.getElementById("photo-grid");if(t)for(let e=0;e<9;e++){let s=document.createElement("div");s.className="photo-cell",s.innerHTML=`<div class="photo-cell__inner" style="background:${J[e%J.length]}"></div>`,t.appendChild(s)}}var C={heart:'<svg viewBox="0 0 24 24"><path d="M20.8 4.6a5.5 5.5 0 0 0-7.8 0L12 5.6l-1-1a5.5 5.5 0 0 0-7.8 7.8l1 1L12 21l7.8-7.6 1-1a5.5 5.5 0 0 0 0-7.8z"/></svg>',comment:'<svg viewBox="0 0 24 24"><path d="M21 11.5a8.4 8.4 0 0 1-9 8.4 9 9 0 0 1-4-1L3 20l1.1-4.9A8.4 8.4 0 0 1 12 3a8.4 8.4 0 0 1 9 8.5z"/></svg>',share:'<svg viewBox="0 0 24 24"><line x1="22" y1="2" x2="11" y2="13"/><polygon points="22 2 15 22 11 13 2 9 22 2"/></svg>',save:'<svg viewBox="0 0 24 24"><path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"/></svg>',home:'<svg viewBox="0 0 24 24"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/></svg>',grid:'<svg viewBox="0 0 24 24"><rect x="3" y="3" width="18" height="18" rx="2"/><line x1="9" y1="3" x2="9" y2="21"/><line x1="15" y1="3" x2="15" y2="21"/><line x1="3" y1="9" x2="21" y2="9"/><line x1="3" y1="15" x2="21" y2="15"/></svg>',reels:'<svg viewBox="0 0 24 24"><rect x="3" y="3" width="18" height="18" rx="3"/><line x1="3" y1="8" x2="21" y2="8"/><line x1="8" y1="3" x2="10" y2="8"/><line x1="14" y1="3" x2="16" y2="8"/><polygon points="10 11 15 13.5 10 16" fill="currentColor" stroke="none"/></svg>',tagged:'<svg viewBox="0 0 24 24"><rect x="3" y="3" width="18" height="18" rx="3"/><circle cx="12" cy="10" r="3"/><path d="M7 18a5 5 0 0 1 10 0"/></svg>'};function H(t){let e=J[t%J.length],s=y[t%y.length];return`linear-gradient(135deg, ${e}, ${s})`}function a(t){return t.replace(/[&<>"]/g,e=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"})[e])}function Ie(t){let e=0;for(let s=0;s<t.length;s++)e=e*31+t.charCodeAt(s)>>>0;return y[e%y.length]}var te=["ana","bruno","carla","diego","elena","felipe","gabi","hugo","isa","joao","lu","marco","nina","otto","paula","rafa","sofia","tiago","vera","yara"],se=["","_",".","__"],ce=["","br","berlin","photo","travel","x","oficial","real","99","mrx","gram"];function Be(t,e){let s=t.slice();for(let l=0;s.length<e;l++){let m=te[l%te.length],p=se[(l>>2)%se.length],u=ce[(l>>1)%ce.length],r=Math.floor(l/(te.length*se.length)),g=`${m}${p}${u}${r>0?r:""}`;s.includes(g)?s.push(`${g}${s.length}`):s.push(g)}return s}function je(){let t=document.getElementById("ig-view");if(!t)return;let e=globalThis.PORTAL_DATA?.instagram;if(!e){t.innerHTML='<p class="ig-empty">Instagram data not loaded.</p>';return}let s=e.profile,l=o=>o.toLocaleString(),m=(e.highlights||[]).map((o,f)=>`
    <div class="ig-hl">
      <div class="ig-hl__ring"><div class="ig-hl__avatar" style="background:${H(f)}"><span class="ig-hl__emoji">${o.emoji}</span></div></div>
      <span class="ig-hl__name">${a(o.label)}</span>
    </div>`).join(""),p=(o,f)=>`
    <a class="ig-tile" href="${a(o.url)}" target="_blank" rel="noopener" style="background:${H(o.url.length)}">
      <span class="ig-tile__cap">${a(o.caption||o.url.replace("https://www.instagram.com/",""))}</span>
      <span class="ig-tile__badge">${f}</span>
    </a>`,u=e.saved.length?e.saved.map(o=>p(o,"\u{1F516}")).join(""):'<p class="ig-empty">Nothing saved.</p>',r=e.liked.length?e.liked.map(o=>p(o,"\u2764\uFE0F")).join(""):'<p class="ig-empty">No likes.</p>',g=o=>Number(o.match(/(\d+)(?=\.\w+$)/)?.[1]||0),n=e.posts.slice().sort((o,f)=>g(f.media)-g(o.media)),d=30,_=[...e.saved,...e.liked].map(o=>o.caption).filter(Boolean),A=n.map((o,f)=>`<a class="ig-tile" href="#" data-post-idx="${f}"><img src="${o.media}" alt="post"></a>`),c=Array.from({length:Math.max(0,d-A.length)},(o,f)=>`
    <a class="ig-tile ig-tile--post" href="#" style="background:${H(f)}">
      <span class="ig-tile__cap">${a(_[f%(_.length||1)]||"")}</span>
    </a>`),k=A.length||c.length?[...A,...c].join(""):'<p class="ig-empty">No posts yet.</p>',L='<svg class="ig-tile__ov" viewBox="0 0 24 24"><polygon points="10 8 16 12 10 16 10 8" fill="currentColor" stroke="none"/></svg>',I=Array.from({length:12},(o,f)=>`
    <a class="ig-tile ig-tile--post" href="#" style="background:${H(f+5)}">${L}
      <span class="ig-tile__cap">${a(_[(f+2)%(_.length||1)]||"")}</span>
    </a>`).join(""),R=Array.from({length:9},(o,f)=>`
    <a class="ig-tile ig-tile--post" href="#" style="background:${H(f+9)}">
      <span class="ig-tile__badge">@${a(s.username)}</span>
    </a>`).join(""),j=e.comments.length?e.comments.map(o=>`
      <div class="ig-comment">
        <div class="ig-comment__text">${a(o.text)}</div>
        <div class="ig-comment__meta">${o.owner?"@"+a(o.owner)+" \xB7 ":""}${a(o.time||"")}</div>
      </div>`).join(""):'<p class="ig-empty">No comments.</p>',E=o=>`<div class="ig-grid">${o}</div>`,P=`<div class="ig-head__avatar ig-head__avatar--ph">${a(Z(s.name))}</div>`;t.innerHTML=`
    <nav class="ig-nav">
      <div class="ig-nav__inner">
        <a href="#" class="ig-nav__logo">My Socials</a>
        <div class="ig-nav__search"><input placeholder="Search"></div>
        <div class="ig-nav__icons">${C.home}${C.heart}${C.comment}${C.share}</div>
      </div>
    </nav>
    <div class="ig-page">
      <header class="ig-head">
        <div class="ig-head__user">${a(s.username)}</div>
        <div class="ig-head__row">
          ${P}
          <div class="ig-head__stats">
            <div class="ig-head__stat"><strong>${l(s.posts)}</strong><span>posts</span></div>
            <div class="ig-head__stat" data-modal="followers"><strong>${l(s.followers)}</strong><span>followers</span></div>
            <div class="ig-head__stat" data-modal="following"><strong>${l(s.following)}</strong><span>following</span></div>
          </div>
        </div>
        <div class="ig-head__name">${a(s.name)}</div>
        <div class="ig-head__bio">${a(s.bio)}</div>
        <div class="ig-head__actions">
          <span class="ig-head__btn ig-head__btn--primary">Follow</span>
          <span class="ig-head__btn">Message</span>
        </div>
      </header>

      ${m?`<div class="ig-highlights">${m}</div>`:""}

      <div class="ig-tabs">
        <div class="ig-tab is-active" data-pane="posts">${C.grid} Posts</div>
        <div class="ig-tab" data-pane="reels">${C.reels} Reels</div>
        <div class="ig-tab" data-pane="tagged">${C.tagged} Tagged</div>
      </div>

      <div class="ig-subtabs">
        <button class="ig-pill" data-pane="saved">${C.save}<span>Saved</span><em>${l(e.saved.length)}</em></button>
        <button class="ig-pill" data-pane="liked">${C.heart}<span>Liked</span><em>${l(e.liked.length)}</em></button>
        <button class="ig-pill" data-pane="comments">${C.comment}<span>Comments</span><em>${l(e.comments.length)}</em></button>
      </div>

      <div class="ig-pane is-active" data-pane="posts">${E(k)}</div>
      <div class="ig-pane" data-pane="reels">${E(I)}</div>
      <div class="ig-pane" data-pane="tagged">${E(R)}</div>
      <div class="ig-pane" data-pane="saved">${E(u)}</div>
      <div class="ig-pane" data-pane="liked">${E(r)}</div>
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
    </div>`,t.querySelectorAll(".ig-tab, .ig-pill").forEach(o=>{o.addEventListener("click",()=>{let f=o.dataset.pane;t.querySelectorAll(".ig-tab, .ig-pill").forEach(D=>D.classList.toggle("is-active",D===o)),t.querySelectorAll(".ig-pane").forEach(D=>D.classList.toggle("is-active",D.dataset.pane===f))})});let b=t.querySelector("#ig-modal"),S=o=>{let f=o==="followers"?e.followers:e.following,D=o==="followers"?s.followers:s.following,F=Be(f,D);t.querySelector("#ig-modal-title").textContent=o==="followers"?"Followers":"Following",t.querySelector("#ig-modal-sub").textContent=`${l(D)} ${o}`,t.querySelector("#ig-modal-list").innerHTML=F.map(U=>`
      <div class="ig-row">
        <div class="ig-row__avatar" style="background:${Ie(U)}">${a(U.charAt(0).toUpperCase())}</div>
        <a class="ig-row__handle" href="https://www.instagram.com/${a(U)}" target="_blank" rel="noopener">${a(U)}</a>
        <span class="ig-row__follow">Follow</span>
      </div>`).join(""),b.classList.add("is-open")};t.querySelectorAll(".ig-head__stat[data-modal]").forEach(o=>o.addEventListener("click",()=>S(o.dataset.modal)));let N=()=>b.classList.remove("is-open");t.querySelector("#ig-modal-close").addEventListener("click",N),b.addEventListener("click",o=>{o.target===b&&N()});let h=t.querySelector("#ig-post-modal"),T=t.querySelector("#ig-post-img"),M=t.querySelector("#ig-post-dots"),z=t.querySelector("#ig-post-comments"),q=[],B=0,O=()=>{T.src=q[B],M.innerHTML=q.length>1?q.map((o,f)=>`<span class="ig-post-modal__dot${f===B?" is-active":""}"></span>`).join(""):""},X=o=>{let f=n[o];f&&(q=f.media_all?.length?f.media_all:[f.media],B=0,O(),z.innerHTML='<p class="ig-empty">No per-post comment data in this export.</p>',h.classList.add("is-open"))};t.querySelectorAll(".ig-tile[data-post-idx]").forEach(o=>o.addEventListener("click",f=>{f.preventDefault(),X(Number(o.dataset.postIdx))})),t.querySelector("#ig-post-prev").addEventListener("click",()=>{B=(B-1+q.length)%q.length,O()}),t.querySelector("#ig-post-next").addEventListener("click",()=>{B=(B+1)%q.length,O()});let Y=()=>h.classList.remove("is-open");t.querySelector("#ig-post-modal-close").addEventListener("click",Y),h.addEventListener("click",o=>{o.target===h&&Y()})}var G={home:'<svg viewBox="0 0 24 24"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/></svg>',net:'<svg viewBox="0 0 24 24"><circle cx="9" cy="7" r="4"/><path d="M17 11a4 4 0 1 0-3-6.6M1 21v-2a4 4 0 0 1 4-4h8a4 4 0 0 1 4 4v2M17 15a4 4 0 0 1 4 4v2"/></svg>',jobs:'<svg viewBox="0 0 24 24"><rect x="2" y="7" width="20" height="14" rx="2"/><path d="M8 7V5a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"/></svg>',msg:'<svg viewBox="0 0 24 24"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>',bell:'<svg viewBox="0 0 24 24"><path d="M18 8a6 6 0 1 0-12 0c0 7-3 9-3 9h18s-3-2-3-9M13.7 21a2 2 0 0 1-3.4 0"/></svg>',like:'<svg viewBox="0 0 24 24"><path d="M14 9V5a3 3 0 0 0-6 0v4H5a2 2 0 0 0-2 2l1 7a2 2 0 0 0 2 2h9a2 2 0 0 0 2-2l1-7a2 2 0 0 0-2-2z"/></svg>',comment:'<svg viewBox="0 0 24 24"><path d="M21 11.5a8.4 8.4 0 0 1-9 8.4 9 9 0 0 1-4-1L3 20l1.1-4.9A8.4 8.4 0 0 1 12 3a8.4 8.4 0 0 1 9 8.5z"/></svg>',repost:'<svg viewBox="0 0 24 24"><polyline points="17 1 21 5 17 9"/><path d="M3 11V9a4 4 0 0 1 4-4h14M7 23l-4-4 4-4M21 13v2a4 4 0 0 1-4 4H3"/></svg>',send:'<svg viewBox="0 0 24 24"><line x1="22" y1="2" x2="11" y2="13"/><polygon points="22 2 15 22 11 13 2 9 22 2"/></svg>'};function ae(t){let e=m=>a(m).replace(/(https?:\/\/\S+)/g,'<a href="$1" target="_blank" rel="noopener">$1</a>'),s=m=>{let p=m.trim().replace(/^>\s*/,"").replace(/^-\s*/,"");if(!p)return"";let u=p.split(/\s*>{2,3}\s*/).map(g=>g.trim()).filter(Boolean);if(u.length>=2)return u.map(g=>s(g)).join("");let r=p.split(/\s-\s/).map(g=>g.trim()).filter(Boolean);return r.length>=3?`<ul class="li-desc__list">${r.map(g=>`<li>${e(g)}</li>`).join("")}</ul>`:`<p class="li-desc__p">${e(p)}</p>`};return t.split(/\s*-{3,}\s*/).map(m=>m.trim()).filter(Boolean).map(m=>m.split(/(?=@\w+)/g).map(p=>p.trim()).filter(Boolean).map(p=>{let u=p.match(/^@(\S+)\s+([\s\S]*)$/),r=u?.[1];return(r?`<div class="li-desc__label">${a(r)}</div>`:"")+s(u?u[2]:p)}).join("")).join("")}var He=0;function ie(t){let e=`li-clamp-${He++}`;return`<div class="li-clamp" id="${e}"><div class="li-clamp__body">${t}</div><button type="button" class="li-clamp__toggle" data-clamp="${e}">Show more</button></div>`}function Z(t){return t.split(/\s+/).filter(Boolean).slice(0,2).map(e=>e.charAt(0).toUpperCase()).join("")}function Pe(){let t=document.getElementById("li-view");if(!t)return;let e=globalThis.PORTAL_DATA?.linkedin;if(!e){t.innerHTML='<p class="li-empty">LinkedIn data not loaded.</p>';return}let s=e.profile,l=(c,k)=>`<div class="li-nav__item">${c}<span>${k}</span></div>`,m=s.photo?`<div class="li-phead__avatar li-phead__avatar--img"><img src="${s.photo}" alt="${a(s.name)}"></div>`:`<div class="li-phead__avatar" style="background:${y[3]}">${a(Z(s.name))}</div>`,p=(c,k)=>`<section class="li-card li-section"><h2 class="li-section__title">${c}</h2>${k}</section>`,u='<p class="li-need">Not in the saved profile page \u2014 add from your LinkedIn data export (Settings \u2192 Get a copy of your data).</p>',r=e.experience.length?e.experience.map(c=>`
      <div class="li-item">
        <div class="li-item__logo">${a(c.company.charAt(0))}</div>
        <div>
          <div class="li-item__title">${a(c.title)}</div>
          <div class="li-item__sub">${a(c.company)}</div>
          <div class="li-item__meta">${a(c.dates)}${c.location?" \xB7 "+a(c.location):""}</div>
          ${c.description?`<div class="li-item__desc">${ie(ae(c.description))}</div>`:""}
        </div>
      </div>`).join(""):u,g=e.education.length?e.education.map(c=>`
      <div class="li-item">
        <div class="li-item__logo">${a(c.school.charAt(0))}</div>
        <div>
          <div class="li-item__title">${a(c.school)}</div>
          <div class="li-item__sub">${a(c.degree)}</div>
          <div class="li-item__meta">${a(c.dates)}</div>
        </div>
      </div>`).join(""):u,n=e.skills.length?`<div class="li-skills">${e.skills.map(c=>`<span class="li-skill">${a(c)}</span>`).join("")}</div>`:u,d=e.about?`<div class="li-about">${ie(ae(e.about))}</div>`:u,_=e.languages.length?e.languages.map(c=>`
      <div class="li-lang">
        <span class="li-lang__name">${a(c.name)}</span>
        <span class="li-lang__level">${a(c.proficiency)}</span>
      </div>`).join(""):u,A=e.projects.length?e.projects.map(c=>`
      <div class="li-item li-item--proj">
        <div>
          <div class="li-item__title">${a(c.title)}${c.url?` \xB7 <a href="${a(c.url)}" target="_blank" rel="noopener">link</a>`:""}</div>
          ${c.dates?`<div class="li-item__meta">${a(c.dates)}</div>`:""}
          <div class="li-item__desc">${ie(ae(c.description))}</div>
        </div>
      </div>`).join(""):u;t.innerHTML=`
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
          ${m}
          <div class="li-phead__body">
            <h1 class="li-phead__name">${a(s.name)}</h1>
            <p class="li-phead__headline">${a(s.headline)}</p>
            <p class="li-phead__loc">${a(s.location)} \xB7 <a href="https://${a(s.url)}" target="_blank" rel="noopener">Contact info</a></p>
            <p class="li-phead__meta"><strong>${s.connections}</strong> connections \xB7 <strong>${s.followers.toLocaleString()}</strong> followers</p>
            ${s.open_to_work?`<div class="li-phead__open"><strong>Open to work</strong><br>${a(s.open_to_work)}</div>`:""}
            <div class="li-phead__actions">
              <button class="li-btn li-btn--primary">Connect</button>
              <button class="li-btn">Message</button>
              <button class="li-btn">More</button>
            </div>
          </div>
        </section>
        ${p("About",d)}
        ${p("Experience",r)}
        ${p("Education",g)}
        ${p("Skills",n)}
        ${p("Projects",A)}
        ${p("Languages",_)}
      </div>
      <aside class="li-prof__rail">
        <div class="li-card li-side">
          <div class="li-side__title">Profile</div>
          <div class="li-side__row"><span>Current</span><strong>${a(s.current)}</strong></div>
          <div class="li-side__row"><span>Location</span><strong>${a(s.location.split(",")[0])}</strong></div>
          <div class="li-side__row"><span>Profile</span><a href="https://${a(s.url)}" target="_blank" rel="noopener">${a(s.url)}</a></div>
        </div>
      </aside>
    </div>`,t.querySelectorAll(".li-clamp").forEach(c=>{let k=c.querySelector(".li-clamp__body"),L=c.querySelector(".li-clamp__toggle");if(k.scrollHeight<=k.clientHeight+4){L.style.display="none";return}L.addEventListener("click",()=>{let I=c.classList.toggle("li-clamp--open");L.textContent=I?"Show less":"Show more"})})}var de={bell:'<svg viewBox="0 0 24 24"><path d="M18 8a6 6 0 1 0-12 0c0 7-3 9-3 9h18s-3-2-3-9M13.7 21a2 2 0 0 1-3.4 0"/></svg>',chat:'<svg viewBox="0 0 24 24"><path d="M21 11.5a8.4 8.4 0 0 1-9 8.4 9 9 0 0 1-4-1L3 20l1.1-4.9A8.4 8.4 0 0 1 12 3a8.4 8.4 0 0 1 9 8.5z"/></svg>'},me=[220,300,180,340,260,200,320,240,280];function Ne(){let t=document.getElementById("pin-view");if(!t)return;let e=globalThis.PORTAL_DATA?.pinterest,s=e?.boards??[],l=e?.profile,m=["30% 30%","75% 15%","20% 80%","80% 75%"],p=(r,g)=>`
    <div class="pin-card__grid">
      ${m.map((n,d)=>`<div class="pin-card__cell pin-card__cell--${d}" style="background-image:url('${a(r)}');background-position:${n}" role="img" aria-label="${a(g)}"></div>`).join("")}
    </div>`,u=s.map((r,g)=>{let n=me[g%me.length],d=r.cover?p(r.cover,r.name):`<div class="pin-card__ph" style="height:${n}px;background:${H(g)}">\u{1F4CC}</div>`;return`
    <a class="pin-card" href="https://www.pinterest.com/${a(l?.username||"diegonmarcos")}/${a(r.name.toLowerCase().replace(/[^a-z0-9]+/g,"-"))}/" target="_blank" rel="noopener">
      <div class="pin-card__media">
        ${d}
        <div class="pin-card__overlay"><span class="pin-card__save">${r.pins} pins</span></div>
      </div>
      <div class="pin-card__title">${a(r.name)}</div>
      ${r.desc?`<div class="pin-card__meta">${a(r.desc)}</div>`:`<div class="pin-card__meta">${r.pins} pins</div>`}
    </a>`}).join("");t.innerHTML=`
    <nav class="pin-nav">
      <div class="pin-nav__inner">
        <span class="pin-nav__logo">P</span>
        <a href="#" class="pin-nav__tab pin-nav__tab--active">Boards</a>
        <a href="https://www.pinterest.com/${a(l?.username||"diegonmarcos")}/" target="_blank" rel="noopener" class="pin-nav__tab">Profile</a>
        <div class="pin-nav__search"><input placeholder="Search for ideas"></div>
        <div class="pin-nav__icons">${de.bell}${de.chat}<span class="pin-nav__avatar" style="background:${y[3]}">D</span></div>
      </div>
    </nav>
    <div class="pin-head">@${a(l?.username||"diegonmarcos")} \xB7 <strong>${l?.boards??s.length}</strong> boards \xB7 <strong>${l?.pins??0}</strong> pins</div>
    <div class="pin-board">${u||'<p class="pin-empty">No boards.</p>'}</div>`}function Re(){let t=document.getElementById("tid-view");if(!t)return;let e=globalThis.PORTAL_DATA?.tidal,s=e?.playlists??[],l=e?.folders??[],m=e?.profile,p=n=>{if(!n)return"";let d=Math.floor(n/3600),_=Math.round(n%3600/60);return d?`${d}h ${_}m`:`${_} min`},u=`https://tidal.com/@${a(m?.username||"diegonmarcos")}`,r=s.map((n,d)=>{let _=n.cover?`<img class="tid-card__img" src="${a(n.cover)}" alt="${a(n.name)}" loading="lazy">`:`<div class="tid-card__ph" style="background:${H(d)}">\u266B</div>`;return`
    <a class="tid-card" href="${n.url?a(n.url):u}" target="_blank" rel="noopener">
      <div class="tid-card__cover">${_}<span class="tid-card__play">\u25B6</span></div>
      <div class="tid-card__name">${a(n.name)}</div>
      <div class="tid-card__meta">${n.tracks} tracks${n.duration_s?" \xB7 "+p(n.duration_s):""}</div>
    </a>`}).join(""),g=l.map(n=>`<span class="tid-folder">${a(n.name)}<em>${n.playlists}</em></span>`).join("");t.innerHTML=`
    <nav class="tid-nav">
      <div class="tid-nav__inner">
        <span class="tid-nav__logo">TIDAL</span>
        <div class="tid-nav__search"><input placeholder="Search"></div>
        <span class="tid-nav__user">@${a(m?.username||"diegonmarcos")}</span>
      </div>
    </nav>
    <div class="tid-main">
      <header class="tid-head">
        <div class="tid-head__title">My Playlists</div>
        <div class="tid-head__sub">${m?.playlists??s.length} playlists \xB7 ${m?.tracks??0} tracks</div>
      </header>
      ${g?`<div class="tid-folders">${g}</div>`:""}
      <div class="tid-grid">${r||'<p class="tid-empty">Playlists load once the Tidal profile ID is set.</p>'}</div>
    </div>`}var W={run:"\u{1F3C3}",ride:"\u{1F6B4}",swim:"\u{1F3CA}"};function Oe(){let t=document.getElementById("str-view");if(!t)return;let e=globalThis.PORTAL_DATA?.strava,s=e?.activities??[],l=e?.profile,m=i=>i&&parseInt(i)||0,p=i=>i.split(" \u2014 ")[1]||"",u=["run","ride","swim"],r=u.reduce((i,v)=>{let $=s.filter(w=>w.type===v);return i[v]={count:$.length,distance:$.reduce((w,x)=>w+(x.distance_km||0),0),minutes:$.reduce((w,x)=>w+m(x.duration),0),elevation:$.reduce((w,x)=>w+(x.elevation_m||0),0)},i},{}),g=u.reduce((i,v)=>i+r[v].minutes,0),n=i=>`${Math.round(i/60)}h`,d=(i,v,$)=>`<div class="str-stat"><span class="str-stat__icon">${i}</span><span class="str-stat__value">${a(v)}</span><span class="str-stat__label">${$}</span></div>`,_=`
    <div class="str-dash">
      ${d("\u{1F3C3}",`${r.run.distance.toFixed(0)} km`,`${r.run.count} runs`)}
      ${d("\u{1F6B4}",`${r.ride.distance.toFixed(0)} km`,`${r.ride.count} rides`)}
      ${d("\u{1F3CA}",`${r.swim.distance.toFixed(1)} km`,`${r.swim.count} swims`)}
      ${d("\u23F1\uFE0F",n(g),"total time")}
      ${d("\u26F0\uFE0F",`${(r.run.elevation+r.ride.elevation).toLocaleString()} m`,"elevation gain")}
    </div>`,A=new Map;s.forEach(i=>{let v=Date.parse(i.date);if(!Number.isNaN(v)){let $=new Date(v).toISOString().slice(0,10);A.set($,(A.get($)||0)+1)}});let c=s.length?new Date(Math.max(...s.map(i=>Date.parse(i.date)).filter(i=>!Number.isNaN(i)))):new Date(0),k=53,L=new Date(c);L.setDate(L.getDate()-k*7),L.setDate(L.getDate()-L.getDay());let I=[];for(let i=0;i<k*7;i++){let v=new Date(L);v.setDate(v.getDate()+i);let $=v.toISOString().slice(0,10),w=A.get($)||0,x=w===0?0:w===1?1:w===2?2:3;I.push(`<span class="str-cal__cell str-cal__cell--${x}" title="${$}: ${w} activit${w===1?"y":"ies"}"></span>`)}let R=`<div class="str-cal">${I.join("")}</div>`,j=new Map;s.forEach(i=>{let v=Date.parse(i.date);if(Number.isNaN(v))return;let $=new Date(v).toISOString().slice(0,10);(j.get($)??j.set($,[]).get($)).push(i)});let E=(i,v)=>new Date(Date.UTC(i,v,1)).toLocaleDateString("en-US",{month:"long",year:"numeric",timeZone:"UTC"}),P=(i,v)=>{let $=new Date(Date.UTC(i,v,1)),w=new Date(Date.UTC(i,v+1,0)).getUTCDate(),x=$.getUTCDay(),V=["S","M","T","W","T","F","S"],ye=Array.from({length:x},()=>'<span class="str-month__day str-month__day--blank"></span>'),we=Array.from({length:w},(oe,Te)=>{let le=Te+1,Le=new Date(Date.UTC(i,v,le)).toISOString().slice(0,10),re=j.get(Le)||[],ke=re.map(ee=>`<span class="str-month__dot" style="background:${ee.type==="run"?"#fc5200":ee.type==="ride"?"#0a66c2":"#00b8d9"}" title="${a(ee.title)}"></span>`).join("");return`<span class="str-month__day${re.length?" has-activity":""}"><span class="str-month__num">${le}</span><span class="str-month__dots">${ke}</span></span>`});return`
      <div class="str-month__dow">${V.map(oe=>`<span>${oe}</span>`).join("")}</div>
      <div class="str-month__grid">${ye.join("")}${we.join("")}</div>`},b=c.getUTCFullYear(),S=c.getUTCMonth(),N=`
    <div class="str-month">
      <div class="str-month__head">
        <button class="str-month__nav" id="str-month-prev" aria-label="Previous month">&lsaquo;</button>
        <span class="str-month__label" id="str-month-label">${E(b,S)}</span>
        <button class="str-month__nav" id="str-month-next" aria-label="Next month">&rsaquo;</button>
      </div>
      <div id="str-month-body">${P(b,S)}</div>
    </div>`,h={Berlin:[52.52,13.4],Munich:[48.14,11.58],Amsterdam:[52.37,4.9],Paris:[48.86,2.35],Barcelona:[41.39,2.17],Lisbon:[38.72,-9.14],Vienna:[48.21,16.37],Prague:[50.08,14.44],Copenhagen:[55.68,12.57],Zurich:[47.37,8.54],Rome:[41.9,12.5],Porto:[41.15,-8.61],Krakow:[50.06,19.94],Budapest:[47.5,19.04],Ljubljana:[46.06,14.51],Nice:[43.7,7.27]},T=new Map;s.forEach(i=>{let v=p(i.title);v&&T.set(v,(T.get(v)||0)+1)});let M=Object.values(h).map(([i])=>i),z=Object.values(h).map(([,i])=>i),[q,B]=[Math.min(...M),Math.max(...M)],[O,X]=[Math.min(...z),Math.max(...z)],Y=(i,v)=>{let $=20+(v-O)/(X-O||1)*360,w=20+(1-(i-q)/(B-q||1))*260;return[$,w]},o=Math.max(1,...T.values()),f=[...T.entries()].map(([i,v])=>{let $=h[i];if(!$)return"";let[w,x]=Y(...$),V=5+v/o*10;return`<g class="str-map__pin"><circle cx="${w}" cy="${x}" r="${V}" /><text x="${w}" y="${x-V-4}">${a(i)} (${v})</text></g>`}).join(""),D=`<svg class="str-map" viewBox="0 0 400 300" role="img" aria-label="Cities visited">${f}</svg>`,F=(i,v)=>v?`<div class="str-card__stat"><span class="str-card__stat-value">${a(v)}</span><span class="str-card__stat-label">${i}</span></div>`:"",U=i=>`
    <div class="str-card" data-type="${i.type}">
      <div class="str-card__header">
        <div class="str-card__icon">${W[i.type]||"\u{1F3C1}"}</div>
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
    </div>`,he=s.map(U).join(""),fe=`<div class="str-head__avatar">${a(Z(l?.name||"Diego Nepomuceno Marcos"))}</div>`;t.innerHTML=`
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
          <div class="str-head__stat"><span class="str-head__stat-value">${l?.activities??s.length}</span><span class="str-head__stat-label">Activities</span></div>
          <div class="str-head__stat"><span class="str-head__stat-value">${l?.followers??0}</span><span class="str-head__stat-label">Followers</span></div>
          <div class="str-head__stat"><span class="str-head__stat-value">${l?.following??0}</span><span class="str-head__stat-label">Following</span></div>
        </div>
      </header>

      ${_}

      <section class="str-section">
        <h3 class="str-section__title">Calendar</h3>
        ${N}
        <div class="str-cal__heatmap-label">Last 12 months</div>
        ${R}
      </section>

      ${f?`<section class="str-section">
        <h3 class="str-section__title">Map \u2014 cities visited</h3>
        ${D}
      </section>`:""}

      <div class="str-filters">
        <button class="str-filter is-active" data-type="all">All</button>
        <button class="str-filter" data-type="run">${W.run} Run</button>
        <button class="str-filter" data-type="ride">${W.ride} Ride</button>
        <button class="str-filter" data-type="swim">${W.swim} Swim</button>
      </div>

      <div class="str-feed">${he||'<p class="str-empty">No activities yet. Strava data loads once the profile is exported.</p>'}</div>
    </div>`,t.querySelectorAll(".str-filter").forEach(i=>{i.addEventListener("click",()=>{t.querySelectorAll(".str-filter").forEach($=>$.classList.toggle("is-active",$===i));let v=i.dataset.type;t.querySelectorAll(".str-card").forEach($=>{$.style.display=v==="all"||$.dataset.type===v?"":"none"})})});let $e=t.querySelector("#str-month-body"),be=t.querySelector("#str-month-label"),ne=i=>{S+=i,S<0&&(S=11,b--),S>11&&(S=0,b++),be.textContent=E(b,S),$e.innerHTML=P(b,S)};t.querySelector("#str-month-prev").addEventListener("click",()=>ne(-1)),t.querySelector("#str-month-next").addEventListener("click",()=>ne(1))}function Fe(){let t=document.getElementById("yt-view");if(!t)return;let e=globalThis.PORTAL_DATA?.youtube,s=e?.videos??[],l=e?.playlists??[],m=e?.profile,p=(n,d)=>{let _=n.thumbnail?`<img class="yt-card__img" src="${a(n.thumbnail)}" alt="${a(n.title)}" loading="lazy">`:`<div class="yt-card__ph" style="background:${H(d)}">\u25B6</div>`;return`
    <a class="yt-card" href="${a(n.url||"#")}" target="_blank" rel="noopener">
      <div class="yt-card__thumb">${_}${n.duration?`<span class="yt-card__duration">${a(n.duration)}</span>`:""}</div>
      <div class="yt-card__title">${a(n.title)}</div>
      ${n.channel?`<div class="yt-card__channel">${a(n.channel)}</div>`:""}
      <div class="yt-card__meta">${n.views!==void 0?`${n.views.toLocaleString()} views`:""}${n.views!==void 0&&n.date?" \xB7 ":""}${n.date?a(n.date):""}</div>
    </a>`},u=l.map(n=>`
    <section class="yt-shelf">
      <div class="yt-shelf__title">${a(n.name)}</div>
      <div class="yt-shelf__row">${n.videos.map((d,_)=>p(d,_)).join("")}</div>
    </section>`).join(""),r=s.length?`<div class="yt-grid">${s.map((n,d)=>p(n,d)).join("")}</div>`:"",g=l.length||s.length;t.innerHTML=`
    <nav class="yt-nav">
      <div class="yt-nav__inner">
        <span class="yt-nav__logo">YouTube</span>
        <div class="yt-nav__search"><input placeholder="Search"></div>
        <span class="yt-nav__user">@${a(m?.channel||"diegonmarcos")}</span>
      </div>
    </nav>
    <div class="yt-main">
      <header class="yt-head">
        <div>
          <div class="yt-head__title">${a(m?.channel||"diegonmarcos")}</div>
          <div class="yt-head__sub">${m?.subscribers??0} subscribers \xB7 ${m?.videos??s.length} videos</div>
        </div>
      </header>
      ${g?`${u}${r}`:'<p class="yt-empty">No videos or playlists yet. YouTube data loads once the channel is scraped.</p>'}
    </div>`}var Q=(t=!1)=>{let e=t?"#c7cbb9":"#8fbf3f",s=t?"#c7cbb9":"#ef4a2b",l=t?"#e4e4d8":"#ffd400",m=t?"#9a9d90":"#1a1a12";return`<svg class="icq-flower" viewBox="0 0 16 16" aria-hidden="true">${Array.from({length:8},(u,r)=>{let g=r*45;return`<ellipse cx="8" cy="2.9" rx="1.9" ry="2.9" fill="${r===0?s:e}" stroke="${m}" stroke-width="0.5" transform="rotate(${g} 8 8)"/>`}).join("")}<circle cx="8" cy="8" r="2.4" fill="${l}" stroke="${m}" stroke-width="0.5"/></svg>`};var pe={online:!1,away:!1,dnd:!1,offline:!0};function Ue(){let t=document.getElementById("icq-view");if(!t)return;let e=globalThis.PORTAL_DATA||{},s=e.linkedin,l=e.instagram,m=s?.profile.name||"Diego Nepomuceno Marcos",p=l?.profile.username||"diegonmarcos",u=m.split(" ")[0],r=m.split(" ").slice(1).join(" "),g=(s?.profile.location||"Berlin, Germany").split(",").map(h=>h.trim()),n=g[0]||"",d=g[g.length-1]||"",_=s?.experience?.[0],A=s?.about||l?.profile.bio||"",c=s?.skills||[],k=s?.languages||[],L="184-042-518",I=["online","online","away","online","dnd","away","offline","offline","offline"],R=ve.map((h,T)=>({...h,status:I[T%I.length]})),j=R.filter(h=>h.status!=="offline"),E=R.filter(h=>h.status==="offline"),P=h=>`<li class="icq-contact">${Q(pe[h.status])}<span>${a(h.name)}</span></li>`,b=(h,T)=>T?`<div class="icq-field"><span class="icq-field__k">${a(h)}</span><span class="icq-field__v">${a(T)}</span></div>`:"",S=[{id:"main",label:"Main",body:`
        ${b("Nickname",p)}
        ${b("First Name",u)}
        ${b("Last Name",r)}
        ${b("ICQ#",L)}
        ${b("Email","me@diegonmarcos.com")}
        ${b("Headline",s?.profile.headline||"")}`},{id:"home",label:"Home",body:`
        ${b("City",n)}
        ${b("Country",d)}
        ${b("Homepage",s?.profile.url||"linktree.diegonmarcos.com")}
        ${k.length?`<div class="icq-field"><span class="icq-field__k">Languages</span><span class="icq-field__v">${k.map(h=>a(h.name)).join(", ")}</span></div>`:""}`},{id:"work",label:"Work",body:_?`
        ${b("Company",_.company)}
        ${b("Title",_.title)}
        ${b("Since",_.dates)}
        ${b("Location",_.location||"")}`:'<p class="icq-empty">No work info.</p>'},{id:"about",label:"About",body:A?`<p class="icq-about">${a(A)}</p>`:'<p class="icq-empty">No about info.</p>'},{id:"interests",label:"Interests",body:c.length?`<div class="icq-interests">${c.map(h=>`<span class="icq-chip">${a(h)}</span>`).join("")}</div>`:'<p class="icq-empty">No interests listed.</p>'}],N='<span class="icq-win__btns"><i>_</i><i>\u25A1</i><i>\u2715</i></span>';t.innerHTML=`
    <div class="icq-desk">
      <!-- Contact list window -->
      <div class="icq-win icq-win--list">
        <div class="icq-win__bar">${Q("#ffffff")}<span class="icq-win__title">ICQ</span>${N}</div>
        <div class="icq-list">
          <div class="icq-group icq-group--online">Online (${j.length})</div>
          <ul>${j.map(P).join("")}</ul>
          <div class="icq-group icq-group--offline">Offline (${E.length})</div>
          <ul>${E.map(P).join("")}</ul>
        </div>
        <div class="icq-list__foot">${Q(pe.online)}<span>Online</span><span class="icq-uin">#${L}</span></div>
      </div>

      <!-- User details window -->
      <div class="icq-win icq-win--details">
        <div class="icq-win__bar icq-win__bar--alt">${Q("#ffffff")}<span class="icq-win__title">User Details \u2014 ${a(p)}</span>${N}</div>
        <div class="icq-detail">
          <div class="icq-detail__head">
            <div class="icq-detail__avatar">${a(Z(m))}</div>
            <div>
              <div class="icq-detail__name">${a(m)}</div>
              <div class="icq-detail__nick">"${a(p)}" \xB7 #${L}</div>
            </div>
          </div>
          <div class="icq-tabs">
            ${S.map((h,T)=>`<button class="icq-tab${T===0?" is-active":""}" data-icq-pane="${h.id}">${h.label}</button>`).join("")}
          </div>
          ${S.map((h,T)=>`<div class="icq-pane${T===0?" is-active":""}" data-icq-pane="${h.id}">${h.body}</div>`).join("")}
        </div>
      </div>
    </div>`,t.querySelectorAll(".icq-tab").forEach(h=>{h.addEventListener("click",()=>{let T=h.dataset.icqPane;t.querySelectorAll(".icq-tab").forEach(M=>M.classList.toggle("is-active",M===h)),t.querySelectorAll(".icq-pane").forEach(M=>M.classList.toggle("is-active",M.dataset.icqPane===T))})})}function Ge(){let t=document.getElementById("me-view");if(!t)return;let e=globalThis.PORTAL_DATA||{},s=e.instagram,l=e.linkedin,m=l?.profile.name||s?.profile.name||"Diego Nepomuceno Marcos",p=l?.profile.headline||"",u=l?.profile.location||"",r=s?.profile.bio||"",g=globalThis.PORTAL_DATA?.tidal,n=[{theme:"linkedin",label:"LinkedIn",meta:l?`${l.profile.connections} connections \xB7 ${l.profile.followers.toLocaleString()} followers`:"profile",color:"#0a66c2"},{theme:"instagram",label:"Instagram",meta:s?`${s.profile.followers.toLocaleString()} followers \xB7 ${s.profile.posts} post${s.profile.posts===1?"":"s"}`:"profile",color:"#dc2743"},{theme:"pinterest",label:"Pinterest",meta:"boards & pins",color:"#e60023"},{theme:"tidal",label:"TIDAL",meta:g?`${g.profile.playlists} playlists`:"playlists",color:"#00ffff"},{theme:"strava",label:"Strava",meta:"activities & routes",color:"#fc5200"},{theme:"youtube",label:"YouTube",meta:"playlists & videos",color:"#ff0000"},{theme:"orkut",label:"Orkut",meta:"the classic profile",color:"#e9008c"},{theme:"icq",label:"ICQ",meta:"retro IM \xB7 user details",color:"#0a870a"}];t.innerHTML=`
    <div class="me-hub">
      <div class="me-card">
        <div class="me-avatar"></div>
        <h1 class="me-name">${a(m)}</h1>
        ${p?`<p class="me-headline">${a(p)}</p>`:""}
        ${u?`<p class="me-loc">${a(u)}</p>`:""}
        ${r?`<p class="me-bio">${a(r)}</p>`:""}
      </div>
      <div class="me-links">
        ${n.map(d=>`
          <button class="me-link" data-goto="${d.theme}" style="--accent:${d.color}">
            <span class="me-link__dot"></span>
            <span class="me-link__body">
              <span class="me-link__name">${d.label}</span>
              <span class="me-link__meta">${a(d.meta)}</span>
            </span>
            <span class="me-link__arrow">\u2192</span>
          </button>`).join("")}
      </div>
    </div>`,t.querySelectorAll(".me-link").forEach(d=>d.addEventListener("click",()=>ue(d.dataset.goto)))}var ze=["myprofile","orkut","instagram","linkedin","pinterest","tidal","strava","youtube","icq"];function Ye(t){return t==="myprofile"?"./":`${t}.html`}function K(t){document.documentElement.setAttribute("data-theme",t),document.querySelectorAll("[data-theme-btn]").forEach(e=>{e.classList.toggle("is-active",e.dataset.themeBtn===t)}),window.scrollTo(0,0)}function ue(t,e=!0){K(t),e&&history.pushState({theme:t},"",Ye(t))}function Ve(){let t=document.documentElement.dataset.theme||"myprofile";K(ze.includes(t)?t:"myprofile"),document.querySelectorAll("[data-theme-btn]").forEach(e=>{e.addEventListener("click",()=>ue(e.dataset.themeBtn))}),window.addEventListener("popstate",e=>{let s=e.state?.theme||"myprofile";K(s)})}function ge(){Ee(),Me(),qe(),De(),Ce(),je(),Pe(),Ne(),Re(),Oe(),Fe(),Ue(),Ge(),Ve(),setTimeout(()=>{document.querySelectorAll(".trust-meter__fill").forEach(t=>{t.style.transition="width 1.2s cubic-bezier(0.16, 1, 0.3, 1)"})},300)}async function _e(){let t=document.getElementById("theme-switch"),e=[...document.querySelectorAll("[data-theme-btn]")],s=document.documentElement.dataset.theme??"";e.find(d=>d.dataset.themeBtn!==s)?.click();let m=document.documentElement.dataset.theme!==s;m&&s&&K(s);let p="none",u=[],r={};try{p=navigator.serviceWorker?.controller?.scriptURL??"none",u=(await navigator.serviceWorker?.getRegistrations?.()??[]).map(_=>[_.installing&&"installing",_.waiting&&"waiting",_.active&&`active:${_.active.scriptURL}`].filter(Boolean).join(","));for(let _ of await caches.keys())r[_]=(await(await caches.open(_)).keys()).length}catch{}let g="n/a";if(t){let d=t.getBoundingClientRect(),_=document.elementFromPoint(d.left+d.width/2,d.top+d.height/2);g=`<${_?.tagName}.${(_?.className||"").toString().trim()}> inNav:${t.contains(_)}`}let n={url:location.href,theme:document.documentElement.dataset.theme,navButtons:e.length,navWired:m,swController:p,swRegistrations:u,caches:r,navHitTest:g,ua:navigator.userAgent};return console.info("[mySocials debug]",JSON.stringify(n)),n}window.__debugReport=_e;document.readyState==="loading"?document.addEventListener("DOMContentLoaded",ge):ge();(/\bdebug\b/.test(location.search)||/\bdebug\b/.test(location.hash))&&setTimeout(()=>{_e()},500);})();
