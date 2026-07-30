(()=>{var M=["#e8508a","#4a8aff","#3abb78","#8a6aff","#ff8a4a","#4ac0ff","#ff4a8a","#50c878","#ffa040","#8080ff","#ff6060","#40c0c0","#c060ff","#ff9060","#60b0ff"],fe=[{name:"Ana Silva",initial:"A",color:M[0]},{name:"Bruno Costa",initial:"B",color:M[1]},{name:"Carla Souza",initial:"C",color:M[2]},{name:"Daniel Lima",initial:"D",color:M[3]},{name:"Elena Torres",initial:"E",color:M[4]},{name:"Felipe Gomes",initial:"F",color:M[5]},{name:"Gabi Santos",initial:"G",color:M[6]},{name:"Hugo Pereira",initial:"H",color:M[7]},{name:"Isa Oliveira",initial:"I",color:M[8]}],Se=[{author:"Ana Silva",initial:"A",color:M[0],text:"Hey Diego! Miss our coding sessions at the uni. We should catch up soon! Saudades demais!",time:"2 hours ago"},{author:"Bruno Costa",initial:"B",color:M[1],text:"Cara, vi que voce ta morando em Berlin agora! Que top! Vamos marcar uma call?",time:"5 hours ago"},{author:"Carla Souza",initial:"C",color:M[2],text:"Happy birthday atrasado!! Hope you had an amazing day. Your projects are looking incredible btw",time:"yesterday"},{author:"Felipe Gomes",initial:"F",color:M[5],text:"Mano, teu MyMaps ta INSANO. Lembra quando a gente fazia mapa no paint? kkkk Evoluimos!",time:"2 days ago"},{author:"Gabi Santos",initial:"G",color:M[6],text:'Diego!! Join our community "Linux Users Brazil" please! We need more devs like you there',time:"3 days ago"},{author:"Hugo Pereira",initial:"H",color:M[7],text:"Saw your Strava activities... beast mode! When did you start cycling?",time:"4 days ago"},{author:"Isa Oliveira",initial:"I",color:M[8],text:"Testimonial request sent! You were the best partner for the compiler project, forever grateful",time:"1 week ago"}],Ae=[{name:"Eu odeio acordar cedo",members:1247893,emoji:"\u{1F634}",color:"#8a6aff"},{name:"NixOS Brasil",members:3420,emoji:"\u2744\uFE0F",color:"#4a8aff"},{name:"Linux Users",members:89340,emoji:"\u{1F427}",color:"#3abb78"},{name:"Cycling Addicts",members:45200,emoji:"\u{1F6B4}",color:"#ff8a4a"},{name:"Self-hosted Everything",members:12800,emoji:"\u{1F5A5}\uFE0F",color:"#4ac0ff"},{name:"Saudades do Orkut",members:892340,emoji:"\u{1F62D}",color:"#e8508a"},{name:"Maps & Geography",members:23100,emoji:"\u{1F30D}",color:"#50c878"},{name:"Berlin Brasileiros",members:8900,emoji:"\u{1F1E7}\u{1F1F7}",color:"#ffa040"},{name:"Coffee > Sleep",members:456e3,emoji:"\u2615",color:"#c08040"}],Ee=[{author:"Ana Silva",date:"Dec 2023",text:"Diego is one of those rare people who can debug your code AND your life. An incredible friend, always there when you need help. 10/10 would add as friend again."},{author:"Bruno Costa",date:"Nov 2023",text:"Known Diego since university. The guy literally automated everything in his life with NixOS. Respect the dedication. Best engineer I know, no cap."},{author:"Carla Souza",date:"Oct 2023",text:"The most creative developer I have ever worked with. His projects are not just functional, they are beautiful. An artist disguised as an engineer."},{author:"Elena Torres",date:"Sep 2023",text:"Diego helped me set up my entire self-hosted infrastructure. Refused to let me use any cloud subscription. A true freedom fighter of the internet!"}],se=["#1a2840","#2a1840","#182838","#281828","#1a3028","#302818","#201838","#283018","#381828"];function je(){let e=document.getElementById("friends-grid");e&&fe.forEach(t=>{let s=document.createElement("div");s.className="friend-cell",s.innerHTML=`
      <div class="friend-cell__avatar">
        <div class="friend-cell__avatar-inner" style="background:${t.color}">${t.initial}</div>
      </div>
      <span class="friend-cell__name">${t.name.split(" ")[0]}</span>
    `,e.appendChild(s)})}function Ce(){let e=document.getElementById("scraps-list");e&&Se.forEach(t=>{let s=document.createElement("div");s.className="scrap",s.innerHTML=`
      <div class="scrap__avatar">
        <div class="scrap__avatar-inner" style="background:${t.color}">${t.initial}</div>
      </div>
      <div class="scrap__body">
        <div class="scrap__header">
          <span class="scrap__author">${t.author}</span>
          <span class="scrap__time">${t.time}</span>
        </div>
        <p class="scrap__text">${t.text}</p>
      </div>
    `,e.appendChild(s)})}function De(){let e=document.getElementById("communities-grid");e&&Ae.forEach(t=>{let s=document.createElement("a");s.href="#",s.className="community-card";let o=t.members>=1e6?`${(t.members/1e6).toFixed(1)}M members`:t.members>=1e3?`${(t.members/1e3).toFixed(0)}K members`:`${t.members} members`;s.innerHTML=`
      <div class="community-card__icon" style="background:${t.color}20;color:${t.color}">${t.emoji}</div>
      <div class="community-card__body">
        <span class="community-card__name">${t.name}</span>
        <span class="community-card__members">${o}</span>
      </div>
    `,e.appendChild(s)})}function Re(){let e=document.getElementById("testimonials-list");e&&Ee.forEach(t=>{let s=document.createElement("div");s.className="testimonial",s.innerHTML=`
      <div class="testimonial__header">
        <span class="testimonial__author">${t.author}</span>
        <span class="testimonial__date">${t.date}</span>
      </div>
      <p class="testimonial__text">${t.text}</p>
    `,e.appendChild(s)})}function qe(){let e=document.getElementById("photo-grid");if(e)for(let t=0;t<9;t++){let s=document.createElement("div");s.className="photo-cell",s.innerHTML=`<div class="photo-cell__inner" style="background:${se[t%se.length]}"></div>`,e.appendChild(s)}}var W={heart:'<svg viewBox="0 0 24 24"><path d="M20.8 4.6a5.5 5.5 0 0 0-7.8 0L12 5.6l-1-1a5.5 5.5 0 0 0-7.8 7.8l1 1L12 21l7.8-7.6 1-1a5.5 5.5 0 0 0 0-7.8z"/></svg>',comment:'<svg viewBox="0 0 24 24"><path d="M21 11.5a8.4 8.4 0 0 1-9 8.4 9 9 0 0 1-4-1L3 20l1.1-4.9A8.4 8.4 0 0 1 12 3a8.4 8.4 0 0 1 9 8.5z"/></svg>',share:'<svg viewBox="0 0 24 24"><line x1="22" y1="2" x2="11" y2="13"/><polygon points="22 2 15 22 11 13 2 9 22 2"/></svg>',save:'<svg viewBox="0 0 24 24"><path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"/></svg>',home:'<svg viewBox="0 0 24 24"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/></svg>',grid:'<svg viewBox="0 0 24 24"><rect x="3" y="3" width="18" height="18" rx="2"/><line x1="9" y1="3" x2="9" y2="21"/><line x1="15" y1="3" x2="15" y2="21"/><line x1="3" y1="9" x2="21" y2="9"/><line x1="3" y1="15" x2="21" y2="15"/></svg>',reels:'<svg viewBox="0 0 24 24"><rect x="3" y="3" width="18" height="18" rx="3"/><line x1="3" y1="8" x2="21" y2="8"/><line x1="8" y1="3" x2="10" y2="8"/><line x1="14" y1="3" x2="16" y2="8"/><polygon points="10 11 15 13.5 10 16" fill="currentColor" stroke="none"/></svg>',tagged:'<svg viewBox="0 0 24 24"><rect x="3" y="3" width="18" height="18" rx="3"/><circle cx="12" cy="10" r="3"/><path d="M7 18a5 5 0 0 1 10 0"/></svg>'};function Y(e){let t=se[e%se.length],s=M[e%M.length];return`linear-gradient(135deg, ${t}, ${s})`}function n(e){return e.replace(/[&<>"]/g,t=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"})[t])}function He(e){let t=0;for(let s=0;s<e.length;s++)t=t*31+e.charCodeAt(s)>>>0;return M[t%M.length]}var oe=["ana","bruno","carla","diego","elena","felipe","gabi","hugo","isa","joao","lu","marco","nina","otto","paula","rafa","sofia","tiago","vera","yara"],re=["","_",".","__"],pe=["","br","berlin","photo","travel","x","oficial","real","99","mrx","gram"];function Pe(e,t){let s=e.slice();for(let o=0;s.length<t;o++){let u=oe[o%oe.length],h=re[(o>>2)%re.length],f=pe[(o>>1)%pe.length],d=Math.floor(o/(oe.length*re.length)),a=`${u}${h}${f}${d>0?d:""}`;s.includes(a)?s.push(`${a}${s.length}`):s.push(a)}return s}function Be(){let e=document.getElementById("ig-view");if(!e)return;let t=globalThis.PORTAL_DATA?.instagram;if(!t){e.innerHTML='<p class="ig-empty">Instagram data not loaded.</p>';return}let s=t.profile,o=l=>l.toLocaleString(),u=(t.highlights||[]).map((l,v)=>`
    <div class="ig-hl">
      <div class="ig-hl__ring"><div class="ig-hl__avatar" style="background:${Y(v)}"><span class="ig-hl__emoji">${l.emoji}</span></div></div>
      <span class="ig-hl__name">${n(l.label)}</span>
    </div>`).join(""),h=(l,v)=>`
    <a class="ig-tile" href="${n(l.url)}" target="_blank" rel="noopener" style="background:${Y(l.url.length)}">
      <span class="ig-tile__cap">${n(l.caption||l.url.replace("https://www.instagram.com/",""))}</span>
      <span class="ig-tile__badge">${v}</span>
    </a>`,f=t.saved.length?t.saved.map(l=>h(l,"\u{1F516}")).join(""):'<p class="ig-empty">Nothing saved.</p>',d=t.liked.length?t.liked.map(l=>h(l,"\u2764\uFE0F")).join(""):'<p class="ig-empty">No likes.</p>',a=l=>Number(l.match(/(\d+)(?=\.\w+$)/)?.[1]||0),i=t.posts.slice().sort((l,v)=>a(v.media)-a(l.media)),m=30,p=[...t.saved,...t.liked].map(l=>l.caption).filter(Boolean),j=i.map((l,v)=>`<a class="ig-tile" href="#" data-post-idx="${v}"><img src="${l.media}" alt="post"></a>`),C=Array.from({length:Math.max(0,m-j.length)},(l,v)=>`
    <a class="ig-tile ig-tile--post" href="#" style="background:${Y(v)}">
      <span class="ig-tile__cap">${n(p[v%(p.length||1)]||"")}</span>
    </a>`),r=j.length||C.length?[...j,...C].join(""):'<p class="ig-empty">No posts yet.</p>',L='<svg class="ig-tile__ov" viewBox="0 0 24 24"><polygon points="10 8 16 12 10 16 10 8" fill="currentColor" stroke="none"/></svg>',k=Array.from({length:12},(l,v)=>`
    <a class="ig-tile ig-tile--post" href="#" style="background:${Y(v+5)}">${L}
      <span class="ig-tile__cap">${n(p[(v+2)%(p.length||1)]||"")}</span>
    </a>`).join(""),F=Array.from({length:9},(l,v)=>`
    <a class="ig-tile ig-tile--post" href="#" style="background:${Y(v+9)}">
      <span class="ig-tile__badge">@${n(s.username)}</span>
    </a>`).join(""),B=t.comments.length?t.comments.map(l=>`
      <div class="ig-comment">
        <div class="ig-comment__text">${n(l.text)}</div>
        <div class="ig-comment__meta">${l.owner?"@"+n(l.owner)+" \xB7 ":""}${n(l.time||"")}</div>
      </div>`).join(""):'<p class="ig-empty">No comments.</p>',D=l=>`<div class="ig-grid">${l}</div>`,R=s.photo?`<img class="ig-head__avatar" src="${n(s.photo)}" alt="${n(s.name)}">`:`<div class="ig-head__avatar ig-head__avatar--ph">${n(ae(s.name))}</div>`;e.innerHTML=`
    <nav class="ig-nav">
      <div class="ig-nav__inner">
        <a href="#" class="ig-nav__logo">My Socials</a>
        <div class="ig-nav__search"><input placeholder="Search"></div>
        <div class="ig-nav__icons">${W.home}${W.heart}${W.comment}${W.share}</div>
      </div>
    </nav>
    <div class="ig-page">
      <header class="ig-head">
        <div class="ig-head__user">${n(s.username)}</div>
        <div class="ig-head__row">
          ${R}
          <div class="ig-head__stats">
            <div class="ig-head__stat"><strong>${o(s.posts)}</strong><span>posts</span></div>
            <div class="ig-head__stat" data-modal="followers"><strong>${o(s.followers)}</strong><span>followers</span></div>
            <div class="ig-head__stat" data-modal="following"><strong>${o(s.following)}</strong><span>following</span></div>
          </div>
        </div>
        <div class="ig-head__name">${n(s.name)}</div>
        <div class="ig-head__bio">${n(s.bio)}</div>
        <div class="ig-head__actions">
          <span class="ig-head__btn ig-head__btn--primary">Follow</span>
          <span class="ig-head__btn">Message</span>
        </div>
      </header>

      ${u?`<div class="ig-highlights">${u}</div>`:""}

      <div class="ig-tabs">
        <div class="ig-tab is-active" data-pane="posts">${W.grid} Posts</div>
        <div class="ig-tab" data-pane="reels">${W.reels} Reels</div>
        <div class="ig-tab" data-pane="tagged">${W.tagged} Tagged</div>
      </div>

      <div class="ig-subtabs">
        <button class="ig-pill" data-pane="saved">${W.save}<span>Saved</span><em>${o(t.saved.length)}</em></button>
        <button class="ig-pill" data-pane="liked">${W.heart}<span>Liked</span><em>${o(t.liked.length)}</em></button>
        <button class="ig-pill" data-pane="comments">${W.comment}<span>Comments</span><em>${o(t.comments.length)}</em></button>
      </div>

      <div class="ig-pane is-active" data-pane="posts">${D(r)}</div>
      <div class="ig-pane" data-pane="reels">${D(k)}</div>
      <div class="ig-pane" data-pane="tagged">${D(F)}</div>
      <div class="ig-pane" data-pane="saved">${D(f)}</div>
      <div class="ig-pane" data-pane="liked">${D(d)}</div>
      <div class="ig-pane" data-pane="comments"><div class="ig-comments">${B}</div></div>
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
    </div>`,e.querySelectorAll(".ig-tab, .ig-pill").forEach(l=>{l.addEventListener("click",()=>{let v=l.dataset.pane;e.querySelectorAll(".ig-tab, .ig-pill").forEach(E=>E.classList.toggle("is-active",E===l)),e.querySelectorAll(".ig-pane").forEach(E=>E.classList.toggle("is-active",E.dataset.pane===v))})});let _=e.querySelector("#ig-modal"),T=l=>{let v=l==="followers"?t.followers:t.following,E=l==="followers"?s.followers:s.following,N=Pe(v,E);e.querySelector("#ig-modal-title").textContent=l==="followers"?"Followers":"Following",e.querySelector("#ig-modal-sub").textContent=`${o(E)} ${l}`,e.querySelector("#ig-modal-list").innerHTML=N.map(z=>`
      <div class="ig-row">
        <div class="ig-row__avatar" style="background:${He(z)}">${n(z.charAt(0).toUpperCase())}</div>
        <a class="ig-row__handle" href="https://www.instagram.com/${n(z)}" target="_blank" rel="noopener">${n(z)}</a>
        <span class="ig-row__follow">Follow</span>
      </div>`).join(""),_.classList.add("is-open")};e.querySelectorAll(".ig-head__stat[data-modal]").forEach(l=>l.addEventListener("click",()=>T(l.dataset.modal)));let q=()=>_.classList.remove("is-open");e.querySelector("#ig-modal-close").addEventListener("click",q),_.addEventListener("click",l=>{l.target===_&&q()});let g=e.querySelector("#ig-post-modal"),x=e.querySelector("#ig-post-img"),$=e.querySelector("#ig-post-dots"),I=e.querySelector("#ig-post-comments"),S=[],H=0,w=()=>{x.src=S[H],$.innerHTML=S.length>1?S.map((l,v)=>`<span class="ig-post-modal__dot${v===H?" is-active":""}"></span>`).join(""):""},O=l=>{let v=i[l];v&&(S=v.media_all?.length?v.media_all:[v.media],H=0,w(),I.innerHTML='<p class="ig-empty">No per-post comment data in this export.</p>',g.classList.add("is-open"))};e.querySelectorAll(".ig-tile[data-post-idx]").forEach(l=>l.addEventListener("click",v=>{v.preventDefault(),O(Number(l.dataset.postIdx))})),e.querySelector("#ig-post-prev").addEventListener("click",()=>{H=(H-1+S.length)%S.length,w()}),e.querySelector("#ig-post-next").addEventListener("click",()=>{H=(H+1)%S.length,w()});let P=()=>g.classList.remove("is-open");e.querySelector("#ig-post-modal-close").addEventListener("click",P),g.addEventListener("click",l=>{l.target===g&&P()})}var Q={home:'<svg viewBox="0 0 24 24"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/></svg>',net:'<svg viewBox="0 0 24 24"><circle cx="9" cy="7" r="4"/><path d="M17 11a4 4 0 1 0-3-6.6M1 21v-2a4 4 0 0 1 4-4h8a4 4 0 0 1 4 4v2M17 15a4 4 0 0 1 4 4v2"/></svg>',jobs:'<svg viewBox="0 0 24 24"><rect x="2" y="7" width="20" height="14" rx="2"/><path d="M8 7V5a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"/></svg>',msg:'<svg viewBox="0 0 24 24"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>',bell:'<svg viewBox="0 0 24 24"><path d="M18 8a6 6 0 1 0-12 0c0 7-3 9-3 9h18s-3-2-3-9M13.7 21a2 2 0 0 1-3.4 0"/></svg>',like:'<svg viewBox="0 0 24 24"><path d="M14 9V5a3 3 0 0 0-6 0v4H5a2 2 0 0 0-2 2l1 7a2 2 0 0 0 2 2h9a2 2 0 0 0 2-2l1-7a2 2 0 0 0-2-2z"/></svg>',comment:'<svg viewBox="0 0 24 24"><path d="M21 11.5a8.4 8.4 0 0 1-9 8.4 9 9 0 0 1-4-1L3 20l1.1-4.9A8.4 8.4 0 0 1 12 3a8.4 8.4 0 0 1 9 8.5z"/></svg>',repost:'<svg viewBox="0 0 24 24"><polyline points="17 1 21 5 17 9"/><path d="M3 11V9a4 4 0 0 1 4-4h14M7 23l-4-4 4-4M21 13v2a4 4 0 0 1-4 4H3"/></svg>',send:'<svg viewBox="0 0 24 24"><line x1="22" y1="2" x2="11" y2="13"/><polygon points="22 2 15 22 11 13 2 9 22 2"/></svg>'};function Z(e){return n(e).replace(/(https?:\/\/\S+)/g,'<a href="$1" target="_blank" rel="noopener">$1</a>')}var Ie=0;function X(e){let t=`li-clamp-${Ie++}`;return`<div class="li-clamp" id="${t}"><div class="li-clamp__body">${e}</div><button type="button" class="li-clamp__toggle" data-clamp="${t}">Show more</button></div>`}function ae(e){return e.split(/\s+/).filter(Boolean).slice(0,2).map(t=>t.charAt(0).toUpperCase()).join("")}function Oe(){let e=document.getElementById("li-view");if(!e)return;let t=globalThis.PORTAL_DATA?.linkedin;if(!t){e.innerHTML='<p class="li-empty">LinkedIn data not loaded.</p>';return}let s=t.profile,o=(r,L)=>`<div class="li-nav__item">${r}<span>${L}</span></div>`,u=s.photo?`<div class="li-phead__avatar li-phead__avatar--img"><img src="${s.photo}" alt="${n(s.name)}"></div>`:`<div class="li-phead__avatar" style="background:${M[3]}">${n(ae(s.name))}</div>`,h=(r,L)=>`<section class="li-card li-section"><h2 class="li-section__title">${r}</h2>${L}</section>`,f='<p class="li-need">Not in the saved profile page \u2014 add from your LinkedIn data export (Settings \u2192 Get a copy of your data).</p>',d=t.experience.length?t.experience.map(r=>`
      <div class="li-item">
        <div class="li-item__logo">${n(r.company.charAt(0))}</div>
        <div>
          <div class="li-item__title">${n(r.title)}</div>
          <div class="li-item__sub">${n(r.company)}</div>
          <div class="li-item__meta">${n(r.dates)}${r.location?" \xB7 "+n(r.location):""}</div>
          ${r.description?`<div class="li-item__desc">${X(Z(r.description))}</div>`:""}
        </div>
      </div>`).join(""):f,a=t.education.length?t.education.map(r=>`
      <div class="li-item">
        <div class="li-item__logo">${n(r.school.charAt(0))}</div>
        <div>
          <div class="li-item__title">${n(r.school)}</div>
          <div class="li-item__sub">${n(r.degree)}</div>
          <div class="li-item__meta">${n(r.dates)}</div>
          ${r.description?`<div class="li-item__desc">${X(Z(r.description))}</div>`:""}
        </div>
      </div>`).join(""):f,i=(t.featured?.length??0)>0?`<div class="li-featured">${t.featured.map(r=>`
        <a class="li-feat" href="${n(r.url)}" target="_blank" rel="noopener">
          <span class="li-feat__icon">\u{1F517}</span>
          <span class="li-feat__body">
            <span class="li-feat__title">${n(r.title)}</span>
            ${r.subtitle?`<span class="li-feat__sub">${n(r.subtitle)}</span>`:""}
          </span>
        </a>`).join("")}</div>`:"",m=t.skills.length?`<div class="li-skills">${t.skills.map(r=>`<span class="li-skill">${n(r)}</span>`).join("")}</div>`:f,p=t.about?`<div class="li-about">${X(Z(t.about))}</div>`:f,j=t.languages.length?t.languages.map(r=>`
      <div class="li-lang">
        <span class="li-lang__name">${n(r.name)}</span>
        <span class="li-lang__level">${n(r.proficiency)}</span>
      </div>`).join(""):f,C=t.projects.length?t.projects.map(r=>`
      <div class="li-item li-item--proj">
        <div>
          <div class="li-item__title">${n(r.title)}${r.url?` \xB7 <a href="${n(r.url)}" target="_blank" rel="noopener">link</a>`:""}</div>
          ${r.dates?`<div class="li-item__meta">${n(r.dates)}</div>`:""}
          <div class="li-item__desc">${X(Z(r.description))}</div>
        </div>
      </div>`).join(""):f;e.innerHTML=`
    <nav class="li-nav">
      <div class="li-nav__inner">
        <span class="li-nav__logo">in</span>
        <div class="li-nav__search"><input placeholder="Search"></div>
        <div class="li-nav__items">
          ${o(Q.home,"Home")}
          ${o(Q.net,"Network")}
          ${o(Q.jobs,"Jobs")}
          ${o(Q.msg,"Messaging")}
          ${o(Q.bell,"Notifications")}
        </div>
      </div>
    </nav>
    <div class="li-prof">
      <div class="li-prof__main">
        <section class="li-card li-phead">
          <div class="li-phead__banner"></div>
          ${u}
          <div class="li-phead__body">
            <h1 class="li-phead__name">${n(s.name)}</h1>
            <p class="li-phead__headline">${n(s.headline)}</p>
            <p class="li-phead__loc">${n(s.location)} \xB7 <a href="https://${n(s.url)}" target="_blank" rel="noopener">Contact info</a></p>
            <p class="li-phead__meta"><strong>${s.connections}</strong> connections \xB7 <strong>${s.followers.toLocaleString()}</strong> followers</p>
            ${s.open_to_work?`<div class="li-phead__open"><strong>Open to work</strong><br>${n(s.open_to_work)}</div>`:""}
            <div class="li-phead__actions">
              <button class="li-btn li-btn--primary">Connect</button>
              <button class="li-btn">Message</button>
              <button class="li-btn">More</button>
            </div>
          </div>
        </section>
        ${h("About",p)}
        ${i?h("Featured",i):""}
        ${h("Experience",d)}
        ${h("Education",a)}
        ${h("Skills",m)}
        ${h("Projects",C)}
        ${h("Languages",j)}
      </div>
      <aside class="li-prof__rail">
        <div class="li-card li-side">
          <div class="li-side__title">Profile</div>
          <div class="li-side__row"><span>Current</span><strong>${n(s.current)}</strong></div>
          <div class="li-side__row"><span>Location</span><strong>${n(s.location.split(",")[0])}</strong></div>
          <div class="li-side__row"><span>Profile</span><a href="https://${n(s.url)}" target="_blank" rel="noopener">${n(s.url)}</a></div>
        </div>
      </aside>
    </div>`,e.querySelectorAll(".li-clamp").forEach(r=>{let L=r.querySelector(".li-clamp__body"),k=r.querySelector(".li-clamp__toggle");if(L.scrollHeight<=L.clientHeight+4){k.style.display="none";return}k.addEventListener("click",()=>{let F=r.classList.toggle("li-clamp--open");k.textContent=F?"Show less":"Show more"})})}var ge={bell:'<svg viewBox="0 0 24 24"><path d="M18 8a6 6 0 1 0-12 0c0 7-3 9-3 9h18s-3-2-3-9M13.7 21a2 2 0 0 1-3.4 0"/></svg>',chat:'<svg viewBox="0 0 24 24"><path d="M21 11.5a8.4 8.4 0 0 1-9 8.4 9 9 0 0 1-4-1L3 20l1.1-4.9A8.4 8.4 0 0 1 12 3a8.4 8.4 0 0 1 9 8.5z"/></svg>'},ve=[220,300,180,340,260,200,320,240,280];function Fe(){let e=document.getElementById("pin-view");if(!e)return;let t=globalThis.PORTAL_DATA?.pinterest,s=t?.boards??[],o=t?.profile,u=["30% 30%","75% 15%","20% 80%","80% 75%"],h=(d,a)=>`
    <div class="pin-card__grid">
      ${u.map((i,m)=>`<div class="pin-card__cell pin-card__cell--${m}" style="background-image:url('${n(d)}');background-position:${i}" role="img" aria-label="${n(a)}"></div>`).join("")}
    </div>`,f=s.map((d,a)=>{let i=ve[a%ve.length],m=d.cover?h(d.cover,d.name):`<div class="pin-card__ph" style="height:${i}px;background:${Y(a)}">\u{1F4CC}</div>`;return`
    <a class="pin-card" href="https://www.pinterest.com/${n(o?.username||"diegonmarcos")}/${n(d.name.toLowerCase().replace(/[^a-z0-9]+/g,"-"))}/" target="_blank" rel="noopener">
      <div class="pin-card__media">
        ${m}
        <div class="pin-card__overlay"><span class="pin-card__save">${d.pins} pins</span></div>
      </div>
      <div class="pin-card__title">${n(d.name)}</div>
      ${d.desc?`<div class="pin-card__meta">${n(d.desc)}</div>`:`<div class="pin-card__meta">${d.pins} pins</div>`}
    </a>`}).join("");e.innerHTML=`
    <nav class="pin-nav">
      <div class="pin-nav__inner">
        <span class="pin-nav__logo">P</span>
        <a href="#" class="pin-nav__tab pin-nav__tab--active">Boards</a>
        <a href="https://www.pinterest.com/${n(o?.username||"diegonmarcos")}/" target="_blank" rel="noopener" class="pin-nav__tab">Profile</a>
        <div class="pin-nav__search"><input placeholder="Search for ideas"></div>
        <div class="pin-nav__icons">${ge.bell}${ge.chat}<span class="pin-nav__avatar" style="background:${M[3]}">D</span></div>
      </div>
    </nav>
    <div class="pin-head">@${n(o?.username||"diegonmarcos")} \xB7 <strong>${o?.boards??s.length}</strong> boards \xB7 <strong>${o?.pins??0}</strong> pins</div>
    <div class="pin-board">${f||'<p class="pin-empty">No boards.</p>'}</div>`}function Ne(){let e=document.getElementById("tid-view");if(!e)return;let t=globalThis.PORTAL_DATA?.tidal,s=t?.playlists??[],o=t?.folders??[],u=t?.profile,h=i=>{if(!i)return"";let m=Math.floor(i/3600),p=Math.round(i%3600/60);return m?`${m}h ${p}m`:`${p} min`},f=`https://tidal.com/@${n(u?.username||"diegonmarcos")}`,d=s.map((i,m)=>{let p=i.cover?`<img class="tid-card__img" src="${n(i.cover)}" alt="${n(i.name)}" loading="lazy">`:`<div class="tid-card__ph" style="background:${Y(m)}">\u266B</div>`;return`
    <a class="tid-card" href="${i.url?n(i.url):f}" target="_blank" rel="noopener">
      <div class="tid-card__cover">${p}<span class="tid-card__play">\u25B6</span></div>
      <div class="tid-card__name">${n(i.name)}</div>
      <div class="tid-card__meta">${i.tracks} tracks${i.duration_s?" \xB7 "+h(i.duration_s):""}</div>
    </a>`}).join(""),a=o.map(i=>`<span class="tid-folder">${n(i.name)}<em>${i.playlists}</em></span>`).join("");e.innerHTML=`
    <nav class="tid-nav">
      <div class="tid-nav__inner">
        <span class="tid-nav__logo">TIDAL</span>
        <div class="tid-nav__search"><input placeholder="Search"></div>
        <span class="tid-nav__user">@${n(u?.username||"diegonmarcos")}</span>
      </div>
    </nav>
    <div class="tid-main">
      <header class="tid-head">
        <div class="tid-head__title">My Playlists</div>
        <div class="tid-head__sub">${u?.playlists??s.length} playlists \xB7 ${u?.tracks??0} tracks</div>
      </header>
      ${a?`<div class="tid-folders">${a}</div>`:""}
      <div class="tid-grid">${d||'<p class="tid-empty">Playlists load once the Tidal profile ID is set.</p>'}</div>
    </div>`}var ee={run:"\u{1F3C3}",ride:"\u{1F6B4}",swim:"\u{1F3CA}"};function ze(){let e=document.getElementById("str-view");if(!e)return;let t=globalThis.PORTAL_DATA?.strava,s=t?.activities??[],o=t?.profile,u=c=>c&&parseInt(c)||0,h=c=>c.split(" \u2014 ")[1]||"",f=["run","ride","swim"],d=f.reduce((c,b)=>{let y=s.filter(A=>A.type===b);return c[b]={count:y.length,distance:y.reduce((A,G)=>A+(G.distance_km||0),0),minutes:y.reduce((A,G)=>A+u(G.duration),0),elevation:y.reduce((A,G)=>A+(G.elevation_m||0),0)},c},{}),a=f.reduce((c,b)=>c+d[b].minutes,0),i=c=>`${Math.round(c/60)}h`,m=(c,b,y)=>`<div class="str-stat"><span class="str-stat__icon">${c}</span><span class="str-stat__value">${n(b)}</span><span class="str-stat__label">${y}</span></div>`,p=`
    <div class="str-dash">
      ${m("\u{1F3C3}",`${d.run.distance.toFixed(0)} km`,`${d.run.count} runs`)}
      ${m("\u{1F6B4}",`${d.ride.distance.toFixed(0)} km`,`${d.ride.count} rides`)}
      ${m("\u{1F3CA}",`${d.swim.distance.toFixed(1)} km`,`${d.swim.count} swims`)}
      ${m("\u23F1\uFE0F",i(a),"total time")}
      ${m("\u26F0\uFE0F",`${(d.run.elevation+d.ride.elevation).toLocaleString()} m`,"elevation gain")}
    </div>`,j=new Map;s.forEach(c=>{let b=Date.parse(c.date);if(!Number.isNaN(b)){let y=new Date(b).toISOString().slice(0,10);j.set(y,(j.get(y)||0)+1)}});let C=s.length?new Date(Math.max(...s.map(c=>Date.parse(c.date)).filter(c=>!Number.isNaN(c)))):new Date(0),r=53,L=new Date(C);L.setDate(L.getDate()-r*7),L.setDate(L.getDate()-L.getDay());let k=[];for(let c=0;c<r*7;c++){let b=new Date(L);b.setDate(b.getDate()+c);let y=b.toISOString().slice(0,10),A=j.get(y)||0,G=A===0?0:A===1?1:A===2?2:3;k.push(`<span class="str-cal__cell str-cal__cell--${G}" title="${y}: ${A} activit${A===1?"y":"ies"}"></span>`)}let F=`<div class="str-cal">${k.join("")}</div>`,B=new Map;s.forEach(c=>{let b=Date.parse(c.date);if(Number.isNaN(b))return;let y=new Date(b).toISOString().slice(0,10);(B.get(y)??B.set(y,[]).get(y)).push(c)});let D=(c,b)=>new Date(Date.UTC(c,b,1)).toLocaleDateString("en-US",{month:"long",year:"numeric",timeZone:"UTC"}),R=(c,b)=>{let y=new Date(Date.UTC(c,b,1)),A=new Date(Date.UTC(c,b+1,0)).getUTCDate(),G=y.getUTCDay(),K=["S","M","T","W","T","F","S"],Le=Array.from({length:G},()=>'<span class="str-month__day str-month__day--blank"></span>'),Te=Array.from({length:A},(ce,Me)=>{let de=Me+1,ke=new Date(Date.UTC(c,b,de)).toISOString().slice(0,10),me=B.get(ke)||[],xe=me.map(ie=>`<span class="str-month__dot" style="background:${ie.type==="run"?"#fc5200":ie.type==="ride"?"#0a66c2":"#00b8d9"}" title="${n(ie.title)}"></span>`).join("");return`<span class="str-month__day${me.length?" has-activity":""}"><span class="str-month__num">${de}</span><span class="str-month__dots">${xe}</span></span>`});return`
      <div class="str-month__dow">${K.map(ce=>`<span>${ce}</span>`).join("")}</div>
      <div class="str-month__grid">${Le.join("")}${Te.join("")}</div>`},_=C.getUTCFullYear(),T=C.getUTCMonth(),q=`
    <div class="str-month">
      <div class="str-month__head">
        <button class="str-month__nav" id="str-month-prev" aria-label="Previous month">&lsaquo;</button>
        <span class="str-month__label" id="str-month-label">${D(_,T)}</span>
        <button class="str-month__nav" id="str-month-next" aria-label="Next month">&rsaquo;</button>
      </div>
      <div id="str-month-body">${R(_,T)}</div>
    </div>`,g={Berlin:[52.52,13.4],Munich:[48.14,11.58],Amsterdam:[52.37,4.9],Paris:[48.86,2.35],Barcelona:[41.39,2.17],Lisbon:[38.72,-9.14],Vienna:[48.21,16.37],Prague:[50.08,14.44],Copenhagen:[55.68,12.57],Zurich:[47.37,8.54],Rome:[41.9,12.5],Porto:[41.15,-8.61],Krakow:[50.06,19.94],Budapest:[47.5,19.04],Ljubljana:[46.06,14.51],Nice:[43.7,7.27]},x=new Map;s.forEach(c=>{let b=h(c.title);b&&x.set(b,(x.get(b)||0)+1)});let $=Object.values(g).map(([c])=>c),I=Object.values(g).map(([,c])=>c),[S,H]=[Math.min(...$),Math.max(...$)],[w,O]=[Math.min(...I),Math.max(...I)],P=(c,b)=>{let y=20+(b-w)/(O-w||1)*360,A=20+(1-(c-S)/(H-S||1))*260;return[y,A]},l=Math.max(1,...x.values()),v=[...x.entries()].map(([c,b])=>{let y=g[c];if(!y)return"";let[A,G]=P(...y),K=5+b/l*10;return`<g class="str-map__pin"><circle cx="${A}" cy="${G}" r="${K}" /><text x="${A}" y="${G-K-4}">${n(c)} (${b})</text></g>`}).join(""),E=`<svg class="str-map" viewBox="0 0 400 300" role="img" aria-label="Cities visited">${v}</svg>`,N=(c,b)=>b?`<div class="str-card__stat"><span class="str-card__stat-value">${n(b)}</span><span class="str-card__stat-label">${c}</span></div>`:"",z=c=>`
    <div class="str-card" data-type="${c.type}">
      <div class="str-card__header">
        <div class="str-card__icon">${ee[c.type]||"\u{1F3C1}"}</div>
        <div>
          <div class="str-card__title">${n(c.title)}</div>
          <div class="str-card__date">${n(c.date)}</div>
        </div>
      </div>
      <div class="str-card__stats">
        ${N("Distance",c.distance_km?`${c.distance_km} km`:"")}
        ${N("Time",c.duration||"")}
        ${N("Pace",c.pace||"")}
        ${N("Elevation",c.elevation_m?`${c.elevation_m} m`:"")}
      </div>
    </div>`,U=s.map(z).join(""),V=`<div class="str-head__avatar">${n(ae(o?.name||"Diego Nepomuceno Marcos"))}</div>`;e.innerHTML=`
    <nav class="str-nav">
      <div class="str-nav__inner">
        <span class="str-nav__logo">Strava</span>
        <div class="str-nav__search"><input placeholder="Search"></div>
        <span class="str-nav__user">${n(o?.name||"diegonmarcos")}</span>
      </div>
    </nav>
    <div class="str-main">
      <header class="str-head">
        ${V}
        <div>
          <div class="str-head__name">${n(o?.name||"Diego Nepomuceno Marcos")}</div>
        </div>
        <div class="str-head__stats">
          <div class="str-head__stat"><span class="str-head__stat-value">${o?.activities??s.length}</span><span class="str-head__stat-label">Activities</span></div>
          <div class="str-head__stat"><span class="str-head__stat-value">${o?.followers??0}</span><span class="str-head__stat-label">Followers</span></div>
          <div class="str-head__stat"><span class="str-head__stat-value">${o?.following??0}</span><span class="str-head__stat-label">Following</span></div>
        </div>
      </header>

      ${p}

      <section class="str-section">
        <h3 class="str-section__title">Calendar</h3>
        ${q}
        <div class="str-cal__heatmap-label">Last 12 months</div>
        ${F}
      </section>

      ${v?`<section class="str-section">
        <h3 class="str-section__title">Map \u2014 cities visited</h3>
        ${E}
      </section>`:""}

      <div class="str-filters">
        <button class="str-filter is-active" data-type="all">All</button>
        <button class="str-filter" data-type="run">${ee.run} Run</button>
        <button class="str-filter" data-type="ride">${ee.ride} Ride</button>
        <button class="str-filter" data-type="swim">${ee.swim} Swim</button>
      </div>

      <div class="str-feed">${U||'<p class="str-empty">No activities yet. Strava data loads once the profile is exported.</p>'}</div>
    </div>`,e.querySelectorAll(".str-filter").forEach(c=>{c.addEventListener("click",()=>{e.querySelectorAll(".str-filter").forEach(y=>y.classList.toggle("is-active",y===c));let b=c.dataset.type;e.querySelectorAll(".str-card").forEach(y=>{y.style.display=b==="all"||y.dataset.type===b?"":"none"})})});let J=e.querySelector("#str-month-body"),$e=e.querySelector("#str-month-label"),le=c=>{T+=c,T<0&&(T=11,_--),T>11&&(T=0,_++),$e.textContent=D(_,T),J.innerHTML=R(_,T)};e.querySelector("#str-month-prev").addEventListener("click",()=>le(-1)),e.querySelector("#str-month-next").addEventListener("click",()=>le(1))}function Ge(){let e=document.getElementById("yt-view");if(!e)return;let t=globalThis.PORTAL_DATA?.youtube,s=t?.videos??[],o=t?.playlists??[],u=t?.profile,h=(i,m)=>{let p=i.thumbnail?`<img class="yt-card__img" src="${n(i.thumbnail)}" alt="${n(i.title)}" loading="lazy">`:`<div class="yt-card__ph" style="background:${Y(m)}">\u25B6</div>`;return`
    <a class="yt-card" href="${n(i.url||"#")}" target="_blank" rel="noopener">
      <div class="yt-card__thumb">${p}${i.duration?`<span class="yt-card__duration">${n(i.duration)}</span>`:""}</div>
      <div class="yt-card__title">${n(i.title)}</div>
      ${i.channel?`<div class="yt-card__channel">${n(i.channel)}</div>`:""}
      <div class="yt-card__meta">${i.views!==void 0?`${i.views.toLocaleString()} views`:""}${i.views!==void 0&&i.date?" \xB7 ":""}${i.date?n(i.date):""}</div>
    </a>`},f=o.map(i=>`
    <section class="yt-shelf">
      <div class="yt-shelf__title">${n(i.name)}</div>
      <div class="yt-shelf__row">${i.videos.map((m,p)=>h(m,p)).join("")}</div>
    </section>`).join(""),d=s.length?`<div class="yt-grid">${s.map((i,m)=>h(i,m)).join("")}</div>`:"",a=o.length||s.length;e.innerHTML=`
    <nav class="yt-nav">
      <div class="yt-nav__inner">
        <span class="yt-nav__logo">YouTube</span>
        <div class="yt-nav__search"><input placeholder="Search"></div>
        <span class="yt-nav__user">@${n(u?.channel||"diegonmarcos")}</span>
      </div>
    </nav>
    <div class="yt-main">
      <header class="yt-head">
        <div>
          <div class="yt-head__title">${n(u?.channel||"diegonmarcos")}</div>
          <div class="yt-head__sub">${u?.subscribers??0} subscribers \xB7 ${u?.videos??s.length} videos</div>
        </div>
      </header>
      ${a?`${f}${d}`:'<p class="yt-empty">No videos or playlists yet. YouTube data loads once the channel is scraped.</p>'}
    </div>`}var te=(e=!1)=>{let t=e?"#c7cbb9":"#8fbf3f",s=e?"#c7cbb9":"#ef4a2b",o=e?"#e4e4d8":"#ffd400",u=e?"#9a9d90":"#1a1a12";return`<svg class="icq-flower" viewBox="0 0 16 16" aria-hidden="true">${Array.from({length:8},(f,d)=>{let a=d*45;return`<ellipse cx="8" cy="2.9" rx="1.9" ry="2.9" fill="${d===0?s:t}" stroke="${u}" stroke-width="0.5" transform="rotate(${a} 8 8)"/>`}).join("")}<circle cx="8" cy="8" r="2.4" fill="${o}" stroke="${u}" stroke-width="0.5"/></svg>`};var ue={online:!1,away:!1,dnd:!1,offline:!0};function Ue(){let e=document.getElementById("icq-view");if(!e)return;let t=globalThis.PORTAL_DATA||{},s=t.linkedin,o=t.instagram,u=s?.profile.name||"Diego Nepomuceno Marcos",h=o?.profile.username||"diegonmarcos",f=u.split(" ")[0],d=u.split(" ").slice(1).join(" "),a=(s?.profile.location||"Berlin, Germany").split(",").map(g=>g.trim()),i=a[0]||"",m=a[a.length-1]||"",p=s?.experience?.[0],j=s?.about||o?.profile.bio||"",C=s?.skills||[],r=s?.languages||[],L="184-042-518",k=["online","online","away","online","dnd","away","offline","offline","offline"],F=fe.map((g,x)=>({...g,status:k[x%k.length]})),B=F.filter(g=>g.status!=="offline"),D=F.filter(g=>g.status==="offline"),R=g=>`<li class="icq-contact">${te(ue[g.status])}<span>${n(g.name)}</span></li>`,_=(g,x)=>x?`<div class="icq-field"><span class="icq-field__k">${n(g)}</span><span class="icq-field__v">${n(x)}</span></div>`:"",T=[{id:"main",label:"Main",body:`
        ${_("Nickname",h)}
        ${_("First Name",f)}
        ${_("Last Name",d)}
        ${_("ICQ#",L)}
        ${_("Email","me@diegonmarcos.com")}
        ${_("Headline",s?.profile.headline||"")}`},{id:"home",label:"Home",body:`
        ${_("City",i)}
        ${_("Country",m)}
        ${_("Homepage",s?.profile.url||"linktree.diegonmarcos.com")}
        ${r.length?`<div class="icq-field"><span class="icq-field__k">Languages</span><span class="icq-field__v">${r.map(g=>n(g.name)).join(", ")}</span></div>`:""}`},{id:"work",label:"Work",body:p?`
        ${_("Company",p.company)}
        ${_("Title",p.title)}
        ${_("Since",p.dates)}
        ${_("Location",p.location||"")}`:'<p class="icq-empty">No work info.</p>'},{id:"about",label:"About",body:j?`<p class="icq-about">${n(j)}</p>`:'<p class="icq-empty">No about info.</p>'},{id:"interests",label:"Interests",body:C.length?`<div class="icq-interests">${C.map(g=>`<span class="icq-chip">${n(g)}</span>`).join("")}</div>`:'<p class="icq-empty">No interests listed.</p>'}],q='<span class="icq-win__btns"><i>_</i><i>\u25A1</i><i>\u2715</i></span>';e.innerHTML=`
    <div class="icq-desk">
      <!-- Contact list window -->
      <div class="icq-win icq-win--list">
        <div class="icq-win__bar">${te("#ffffff")}<span class="icq-win__title">ICQ</span>${q}</div>
        <div class="icq-list">
          <div class="icq-group icq-group--online">Online (${B.length})</div>
          <ul>${B.map(R).join("")}</ul>
          <div class="icq-group icq-group--offline">Offline (${D.length})</div>
          <ul>${D.map(R).join("")}</ul>
        </div>
        <div class="icq-list__foot">${te(ue.online)}<span>Online</span><span class="icq-uin">#${L}</span></div>
      </div>

      <!-- User details window -->
      <div class="icq-win icq-win--details">
        <div class="icq-win__bar icq-win__bar--alt">${te("#ffffff")}<span class="icq-win__title">User Details \u2014 ${n(h)}</span>${q}</div>
        <div class="icq-detail">
          <div class="icq-detail__head">
            <div class="icq-detail__avatar">${n(ae(u))}</div>
            <div>
              <div class="icq-detail__name">${n(u)}</div>
              <div class="icq-detail__nick">"${n(h)}" \xB7 #${L}</div>
            </div>
          </div>
          <div class="icq-tabs">
            ${T.map((g,x)=>`<button class="icq-tab${x===0?" is-active":""}" data-icq-pane="${g.id}">${g.label}</button>`).join("")}
          </div>
          ${T.map((g,x)=>`<div class="icq-pane${x===0?" is-active":""}" data-icq-pane="${g.id}">${g.body}</div>`).join("")}
        </div>
      </div>
    </div>`,e.querySelectorAll(".icq-tab").forEach(g=>{g.addEventListener("click",()=>{let x=g.dataset.icqPane;e.querySelectorAll(".icq-tab").forEach($=>$.classList.toggle("is-active",$===g)),e.querySelectorAll(".icq-pane").forEach($=>$.classList.toggle("is-active",$.dataset.icqPane===x))})})}function We(){let e=document.getElementById("me-view");if(!e)return;let t=globalThis.PORTAL_DATA||{},s=t.instagram,o=t.linkedin,u=o?.profile.name||s?.profile.name||"Diego Nepomuceno Marcos",h=o?.profile.headline||"",f=o?.profile.location||"",d=s?.profile.bio||"",a=o?.profile.photo||s?.profile.photo,i=globalThis.PORTAL_DATA?.tidal,m=[{theme:"linkedin",label:"LinkedIn",meta:o?`${o.profile.connections} connections \xB7 ${o.profile.followers.toLocaleString()} followers`:"profile",color:"#0a66c2"},{theme:"instagram",label:"Instagram",meta:s?`${s.profile.followers.toLocaleString()} followers \xB7 ${s.profile.posts} post${s.profile.posts===1?"":"s"}`:"profile",color:"#dc2743"},{theme:"pinterest",label:"Pinterest",meta:"boards & pins",color:"#e60023"},{theme:"tidal",label:"TIDAL",meta:i?`${i.profile.playlists} playlists`:"playlists",color:"#00ffff"},{theme:"strava",label:"Strava",meta:"activities & routes",color:"#fc5200"},{theme:"youtube",label:"YouTube",meta:"playlists & videos",color:"#ff0000"},{theme:"orkut",label:"Orkut",meta:"the classic profile",color:"#e9008c"},{theme:"icq",label:"ICQ",meta:"retro IM \xB7 user details",color:"#0a870a"},{theme:"shelf",label:"Shelf",meta:"book shelf \xB7 3D",color:"#8b6914"},{theme:"vinyl",label:"Vinyl",meta:"record store \xB7 3D",color:"#c17f24"}];e.innerHTML=`
    <div class="me-hub">
      <div class="me-card">
        ${a?`<img class="me-avatar" src="${n(a)}" alt="${n(u)}">`:'<div class="me-avatar"></div>'}
        <h1 class="me-name">${n(u)}</h1>
        ${h?`<p class="me-headline">${n(h)}</p>`:""}
        ${f?`<p class="me-loc">${n(f)}</p>`:""}
        ${d?`<p class="me-bio">${n(d)}</p>`:""}
      </div>
      <div class="me-links">
        ${m.map(p=>`
          <button class="me-link" data-goto="${p.theme}" style="--accent:${p.color}">
            <span class="me-link__dot"></span>
            <span class="me-link__body">
              <span class="me-link__name">${p.label}</span>
              <span class="me-link__meta">${n(p.meta)}</span>
            </span>
            <span class="me-link__arrow">\u2192</span>
          </button>`).join("")}
      </div>
    </div>`,e.querySelectorAll(".me-link").forEach(p=>p.addEventListener("click",()=>ye(p.dataset.goto)))}var he=!1;function Ye(){let e=document.getElementById("shelf-view");if(!e||he)return;e.innerHTML='<div class="view--shelf__loading">building shelf\u2026</div>';let t=globalThis.PORTAL_DATA?.shelf;if(!t?.books?.length){e.innerHTML='<div class="view--shelf__error">no data</div>';return}he=!0;function s(o){e.innerHTML="";let u=e.clientWidth||900,h=e.clientHeight||600,f=o.WebGLRenderer,d=new f({antialias:!0,alpha:!1});d.setSize(u,h),d.setPixelRatio(Math.min(window.devicePixelRatio,2)),d.shadowMap.enabled=!0,e.appendChild(d.domElement);let a=o,i=new a.Scene;i.background=new a.Color(1707781),i.fog=new a.Fog(1707781,10,22);let m=new a.PerspectiveCamera(48,u/h,.1,100);m.position.set(2.5,1.8,7.5),m.lookAt(0,.3,0),i.add(new a.AmbientLight(16775399,.6));let p=new a.PointLight(16768426,2.5,22);p.position.set(2,6,5),p.castShadow=!0,i.add(p);let j=new a.PointLight(11189247,.5,15);j.position.set(-5,2,3),i.add(j);let C=new a.PointLight(16750916,1,6);C.position.set(0,.8,-.2),i.add(C);function r($,I,S,H,w,O,P,l=!1){let v=new a.Mesh(new a.BoxGeometry($,I,S),H);v.position.set(w,O,P),l&&(v.castShadow=!0,v.receiveShadow=!0),i.add(v)}let L=new a.MeshLambertMaterial({color:9136404}),k=new a.MeshLambertMaterial({color:6042391}),F=new a.MeshLambertMaterial({color:12884540}),B=new a.MeshLambertMaterial({color:7029286});r(10,.15,6,B,0,-1.5,0,!0),r(10,4.5,.2,L,0,.5,-2.2),r(.2,4.5,4.5,L,-4.2,.5,-.1),r(.2,4.5,4.5,k,4.2,.5,-.1),r(.25,4.5,.25,k,-3.9,.5,1.8),r(.25,4.5,.25,k,3.9,.5,1.8),r(10.5,.3,6,k,0,2.85,-.2),r(10.5,.2,.2,k,0,2.6,1.9);let D=[-.85,-.05,.75,1.55];for(let $ of D)r(7,.07,.38,F,0,$,-.6,!0);let R=new a.TextureLoader;R.crossOrigin="anonymous";let _=5;for(let $=0;$<4;$++){let I=D[$];for(let S=0;S<_;S++){let H=t.books[($*_+S)%t.books.length],w=-2.8+S*1.4,O=I+.38,P=-.6,l=new a.Color(H.spine),v=[new a.MeshLambertMaterial({color:l}),new a.MeshLambertMaterial({color:l}),new a.MeshLambertMaterial({color:16117992}),new a.MeshLambertMaterial({color:16117992}),new a.MeshLambertMaterial({color:l}),new a.MeshLambertMaterial({color:l})],E=new a.Mesh(new a.BoxGeometry(.23,.68,.16),v);E.position.set(w,O,P),E.castShadow=!0,i.add(E),R.load(`https://covers.openlibrary.org/b/isbn/${H.isbn}-M.jpg`,N=>{N.minFilter=a.LinearFilter,v[4]=new a.MeshLambertMaterial({map:N}),E.material=v})}}let T=0,q=0;function g(){T=requestAnimationFrame(g),q+=.004,m.position.x=Math.sin(q)*.8+2.5,m.lookAt(0,.3,0),d.render(i,m)}g(),new window.ResizeObserver(()=>{let $=e.clientWidth,I=e.clientHeight;d.setSize($,I),m.aspect=$/I,m.updateProjectionMatrix()}).observe(e)}if(window.THREE)s(window.THREE);else{let o=document.createElement("script");o.src="https://cdnjs.cloudflare.com/ajax/libs/three.js/r169/three.min.js",o.onload=()=>s(window.THREE),o.onerror=()=>{e.innerHTML='<div class="view--shelf__error">three.js failed to load</div>'},document.head.appendChild(o)}}var be=!1;function Ve(){let e=document.getElementById("vinyl-view");if(!e||be)return;e.innerHTML='<div class="view--vinyl__loading">loading record store\u2026</div>';let t=globalThis.PORTAL_DATA?.vinyl;if(!t?.vinyls?.length){e.innerHTML='<div class="view--vinyl__error">no data</div>';return}be=!0;function s(o){e.innerHTML="";let u=e.clientWidth||900,h=e.clientHeight||600,f=o.WebGLRenderer,d=new f({antialias:!0,alpha:!1});d.setSize(u,h),d.setPixelRatio(Math.min(window.devicePixelRatio,2)),d.shadowMap.enabled=!0,e.appendChild(d.domElement);let a=o,i=new a.Scene;i.background=new a.Color(854021),i.fog=new a.Fog(854021,12,28);let m=new a.PerspectiveCamera(52,u/h,.1,100);m.position.set(0,1.6,8),m.lookAt(0,.2,0),i.add(new a.AmbientLight(16773328,.4));let p=new a.PointLight(16764006,2,20);p.position.set(0,5,2),p.castShadow=!0,i.add(p);let j=new a.PointLight(16750899,1.2,12);j.position.set(-4,2,1),i.add(j);let C=new a.PointLight(16746564,1,12);C.position.set(4,2,1),i.add(C);function r(w,O,P,l,v,E,N,z=!1){let U=new a.Mesh(new a.BoxGeometry(w,O,P),l);U.position.set(v,E,N),z&&(U.castShadow=!0,U.receiveShadow=!0),i.add(U)}let L=new a.MeshLambertMaterial({color:4006928}),k=new a.MeshLambertMaterial({color:1707526}),F=new a.MeshLambertMaterial({color:7031844}),B=new a.MeshLambertMaterial({color:4861968});r(16,.15,10,L,0,-1.6,0,!0),r(16,6,.2,k,0,1.4,-3.2),r(.2,6,8,k,-7.2,1.4,0),r(.2,6,8,k,7.2,1.4,0);let D=[-3.5,0,3.5],R=2.2,_=1.1,T=1.1,q=-1.05,g=.2;for(let w of D)r(R,.07,T,F,w,q-_/2+.04,g),r(.07,_,T,B,w-R/2,q,g),r(.07,_,T,B,w+R/2,q,g),r(R,_,.07,F,w,q,g-T/2),r(R,.25,.07,B,w,q+_/2-.12,g+T/2);let x=new a.TextureLoader;x.crossOrigin="anonymous";let $=t.vinyls;for(let w=0;w<3;w++){let O=D[w];for(let P=0;P<5;P++){let l=$[(w*5+P)%$.length],v=O-R/2+.28+P*.35,E=q-.02,N=g,z=new a.Color(l.color),U=[new a.MeshLambertMaterial({color:z}),new a.MeshLambertMaterial({color:z}),new a.MeshLambertMaterial({color:15920616}),new a.MeshLambertMaterial({color:15920616}),new a.MeshLambertMaterial({color:z}),new a.MeshLambertMaterial({color:z})],V=new a.Mesh(new a.BoxGeometry(.025,.78,.78),U);V.position.set(v,E,N),V.castShadow=!0,i.add(V),x.load(`https://coverartarchive.org/release/${l.mbid}/front-250`,J=>{J.minFilter=a.LinearFilter,U[4]=new a.MeshLambertMaterial({map:J}),V.material=U})}}let I=0;function S(){requestAnimationFrame(S),I+=.003,m.position.x=Math.sin(I)*1.2,m.lookAt(0,.2,0),d.render(i,m)}S(),new window.ResizeObserver(()=>{let w=e.clientWidth,O=e.clientHeight;d.setSize(w,O),m.aspect=w/O,m.updateProjectionMatrix()}).observe(e)}if(window.THREE)s(window.THREE);else{let o=document.createElement("script");o.src="https://cdnjs.cloudflare.com/ajax/libs/three.js/r169/three.min.js",o.onload=()=>s(window.THREE),o.onerror=()=>{e.innerHTML='<div class="view--vinyl__error">three.js failed to load</div>'},document.head.appendChild(o)}}var Qe=["myprofile","orkut","instagram","linkedin","pinterest","tidal","strava","youtube","icq","shelf","vinyl"];function Je(e){return e==="myprofile"?"./":`${e}.html`}function ne(e){document.documentElement.setAttribute("data-theme",e),document.querySelectorAll("[data-theme-btn]").forEach(t=>{t.classList.toggle("is-active",t.dataset.themeBtn===e)}),window.scrollTo(0,0)}function ye(e,t=!0){ne(e),t&&history.pushState({theme:e},"",Je(e))}function Ke(){let e=document.documentElement.dataset.theme||"myprofile";ne(Qe.includes(e)?e:"myprofile"),document.querySelectorAll("[data-theme-btn]").forEach(t=>{t.addEventListener("click",()=>ye(t.dataset.themeBtn))}),window.addEventListener("popstate",t=>{let s=t.state?.theme||"myprofile";ne(s)})}function _e(){je(),Ce(),De(),Re(),qe(),Be(),Oe(),Fe(),Ne(),ze(),Ge(),Ue(),We(),Ye(),Ve(),Ke(),setTimeout(()=>{document.querySelectorAll(".trust-meter__fill").forEach(e=>{e.style.transition="width 1.2s cubic-bezier(0.16, 1, 0.3, 1)"})},300)}async function we(){let e=document.getElementById("theme-switch"),t=[...document.querySelectorAll("[data-theme-btn]")],s=document.documentElement.dataset.theme??"";t.find(m=>m.dataset.themeBtn!==s)?.click();let u=document.documentElement.dataset.theme!==s;u&&s&&ne(s);let h="none",f=[],d={};try{h=navigator.serviceWorker?.controller?.scriptURL??"none",f=(await navigator.serviceWorker?.getRegistrations?.()??[]).map(p=>[p.installing&&"installing",p.waiting&&"waiting",p.active&&`active:${p.active.scriptURL}`].filter(Boolean).join(","));for(let p of await caches.keys())d[p]=(await(await caches.open(p)).keys()).length}catch{}let a="n/a";if(e){let m=e.getBoundingClientRect(),p=document.elementFromPoint(m.left+m.width/2,m.top+m.height/2);a=`<${p?.tagName}.${(p?.className||"").toString().trim()}> inNav:${e.contains(p)}`}let i={url:location.href,theme:document.documentElement.dataset.theme,navButtons:t.length,navWired:u,swController:h,swRegistrations:f,caches:d,navHitTest:a,ua:navigator.userAgent};return console.info("[mySocials debug]",JSON.stringify(i)),i}window.__debugReport=we;document.readyState==="loading"?document.addEventListener("DOMContentLoaded",_e):_e();(/\bdebug\b/.test(location.search)||/\bdebug\b/.test(location.hash))&&setTimeout(()=>{we()},500);})();
