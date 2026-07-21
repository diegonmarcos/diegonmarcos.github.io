(()=>{var h=["#e8508a","#4a8aff","#3abb78","#8a6aff","#ff8a4a","#4ac0ff","#ff4a8a","#50c878","#ffa040","#8080ff","#ff6060","#40c0c0","#c060ff","#ff9060","#60b0ff"],X=[{name:"Ana Silva",initial:"A",color:h[0]},{name:"Bruno Costa",initial:"B",color:h[1]},{name:"Carla Souza",initial:"C",color:h[2]},{name:"Daniel Lima",initial:"D",color:h[3]},{name:"Elena Torres",initial:"E",color:h[4]},{name:"Felipe Gomes",initial:"F",color:h[5]},{name:"Gabi Santos",initial:"G",color:h[6]},{name:"Hugo Pereira",initial:"H",color:h[7]},{name:"Isa Oliveira",initial:"I",color:h[8]}],te=[{author:"Ana Silva",initial:"A",color:h[0],text:"Hey Diego! Miss our coding sessions at the uni. We should catch up soon! Saudades demais!",time:"2 hours ago"},{author:"Bruno Costa",initial:"B",color:h[1],text:"Cara, vi que voce ta morando em Berlin agora! Que top! Vamos marcar uma call?",time:"5 hours ago"},{author:"Carla Souza",initial:"C",color:h[2],text:"Happy birthday atrasado!! Hope you had an amazing day. Your projects are looking incredible btw",time:"yesterday"},{author:"Felipe Gomes",initial:"F",color:h[5],text:"Mano, teu MyMaps ta INSANO. Lembra quando a gente fazia mapa no paint? kkkk Evoluimos!",time:"2 days ago"},{author:"Gabi Santos",initial:"G",color:h[6],text:'Diego!! Join our community "Linux Users Brazil" please! We need more devs like you there',time:"3 days ago"},{author:"Hugo Pereira",initial:"H",color:h[7],text:"Saw your Strava activities... beast mode! When did you start cycling?",time:"4 days ago"},{author:"Isa Oliveira",initial:"I",color:h[8],text:"Testimonial request sent! You were the best partner for the compiler project, forever grateful",time:"1 week ago"}],ne=[{name:"Eu odeio acordar cedo",members:1247893,emoji:"\u{1F634}",color:"#8a6aff"},{name:"NixOS Brasil",members:3420,emoji:"\u2744\uFE0F",color:"#4a8aff"},{name:"Linux Users",members:89340,emoji:"\u{1F427}",color:"#3abb78"},{name:"Cycling Addicts",members:45200,emoji:"\u{1F6B4}",color:"#ff8a4a"},{name:"Self-hosted Everything",members:12800,emoji:"\u{1F5A5}\uFE0F",color:"#4ac0ff"},{name:"Saudades do Orkut",members:892340,emoji:"\u{1F62D}",color:"#e8508a"},{name:"Maps & Geography",members:23100,emoji:"\u{1F30D}",color:"#50c878"},{name:"Berlin Brasileiros",members:8900,emoji:"\u{1F1E7}\u{1F1F7}",color:"#ffa040"},{name:"Coffee > Sleep",members:456e3,emoji:"\u2615",color:"#c08040"}],oe=[{author:"Ana Silva",date:"Dec 2023",text:"Diego is one of those rare people who can debug your code AND your life. An incredible friend, always there when you need help. 10/10 would add as friend again."},{author:"Bruno Costa",date:"Nov 2023",text:"Known Diego since university. The guy literally automated everything in his life with NixOS. Respect the dedication. Best engineer I know, no cap."},{author:"Carla Souza",date:"Oct 2023",text:"The most creative developer I have ever worked with. His projects are not just functional, they are beautiful. An artist disguised as an engineer."},{author:"Elena Torres",date:"Sep 2023",text:"Diego helped me set up my entire self-hosted infrastructure. Refused to let me use any cloud subscription. A true freedom fighter of the internet!"}],N=["#1a2840","#2a1840","#182838","#281828","#1a3028","#302818","#201838","#283018","#381828"];function le(){let a=document.getElementById("friends-grid");a&&X.forEach(e=>{let s=document.createElement("div");s.className="friend-cell",s.innerHTML=`
      <div class="friend-cell__avatar">
        <div class="friend-cell__avatar-inner" style="background:${e.color}">${e.initial}</div>
      </div>
      <span class="friend-cell__name">${e.name.split(" ")[0]}</span>
    `,a.appendChild(s)})}function re(){let a=document.getElementById("scraps-list");a&&te.forEach(e=>{let s=document.createElement("div");s.className="scrap",s.innerHTML=`
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
    `,a.appendChild(s)})}function ce(){let a=document.getElementById("communities-grid");a&&ne.forEach(e=>{let s=document.createElement("a");s.href="#",s.className="community-card";let t=e.members>=1e6?`${(e.members/1e6).toFixed(1)}M members`:e.members>=1e3?`${(e.members/1e3).toFixed(0)}K members`:`${e.members} members`;s.innerHTML=`
      <div class="community-card__icon" style="background:${e.color}20;color:${e.color}">${e.emoji}</div>
      <div class="community-card__body">
        <span class="community-card__name">${e.name}</span>
        <span class="community-card__members">${t}</span>
      </div>
    `,a.appendChild(s)})}function de(){let a=document.getElementById("testimonials-list");a&&oe.forEach(e=>{let s=document.createElement("div");s.className="testimonial",s.innerHTML=`
      <div class="testimonial__header">
        <span class="testimonial__author">${e.author}</span>
        <span class="testimonial__date">${e.date}</span>
      </div>
      <p class="testimonial__text">${e.text}</p>
    `,a.appendChild(s)})}function me(){let a=document.getElementById("photo-grid");if(a)for(let e=0;e<9;e++){let s=document.createElement("div");s.className="photo-cell",s.innerHTML=`<div class="photo-cell__inner" style="background:${N[e%N.length]}"></div>`,a.appendChild(s)}}var b={heart:'<svg viewBox="0 0 24 24"><path d="M20.8 4.6a5.5 5.5 0 0 0-7.8 0L12 5.6l-1-1a5.5 5.5 0 0 0-7.8 7.8l1 1L12 21l7.8-7.6 1-1a5.5 5.5 0 0 0 0-7.8z"/></svg>',comment:'<svg viewBox="0 0 24 24"><path d="M21 11.5a8.4 8.4 0 0 1-9 8.4 9 9 0 0 1-4-1L3 20l1.1-4.9A8.4 8.4 0 0 1 12 3a8.4 8.4 0 0 1 9 8.5z"/></svg>',share:'<svg viewBox="0 0 24 24"><line x1="22" y1="2" x2="11" y2="13"/><polygon points="22 2 15 22 11 13 2 9 22 2"/></svg>',save:'<svg viewBox="0 0 24 24"><path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"/></svg>',home:'<svg viewBox="0 0 24 24"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/></svg>',grid:'<svg viewBox="0 0 24 24"><rect x="3" y="3" width="18" height="18" rx="2"/><line x1="9" y1="3" x2="9" y2="21"/><line x1="15" y1="3" x2="15" y2="21"/><line x1="3" y1="9" x2="21" y2="9"/><line x1="3" y1="15" x2="21" y2="15"/></svg>',reels:'<svg viewBox="0 0 24 24"><rect x="3" y="3" width="18" height="18" rx="3"/><line x1="3" y1="8" x2="21" y2="8"/><line x1="8" y1="3" x2="10" y2="8"/><line x1="14" y1="3" x2="16" y2="8"/><polygon points="10 11 15 13.5 10 16" fill="currentColor" stroke="none"/></svg>',tagged:'<svg viewBox="0 0 24 24"><rect x="3" y="3" width="18" height="18" rx="3"/><circle cx="12" cy="10" r="3"/><path d="M7 18a5 5 0 0 1 10 0"/></svg>'};function L(a){let e=N[a%N.length],s=h[a%h.length];return`linear-gradient(135deg, ${e}, ${s})`}function i(a){return a.replace(/[&<>"]/g,e=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"})[e])}function pe(a){let e=0;for(let s=0;s<a.length;s++)e=e*31+a.charCodeAt(s)>>>0;return h[e%h.length]}var F=["ana","bruno","carla","diego","elena","felipe","gabi","hugo","isa","joao","lu","marco","nina","otto","paula","rafa","sofia","tiago","vera","yara"],G=["","_",".","__"],V=["","br","berlin","photo","travel","x","oficial","real","99","mrx","gram"];function ge(a,e){let s=a.slice();for(let t=0;s.length<e;t++){let c=F[t%F.length],p=G[(t>>2)%G.length],o=V[(t>>1)%V.length],l=Math.floor(t/(F.length*G.length)),d=`${c}${p}${o}${l>0?l:""}`;s.includes(d)?s.push(`${d}${s.length}`):s.push(d)}return s}function ve(){let a=document.getElementById("ig-view");if(!a)return;let e=globalThis.PORTAL_DATA?.instagram;if(!e){a.innerHTML='<p class="ig-empty">Instagram data not loaded.</p>';return}let s=e.profile,t=n=>n.toLocaleString(),c=(e.highlights||[]).map((n,_)=>`
    <div class="ig-hl">
      <div class="ig-hl__ring"><div class="ig-hl__avatar" style="background:${L(_)}"><span class="ig-hl__emoji">${n.emoji}</span></div></div>
      <span class="ig-hl__name">${i(n.label)}</span>
    </div>`).join(""),p=(n,_)=>`
    <a class="ig-tile" href="${i(n.url)}" target="_blank" rel="noopener" style="background:${L(n.url.length)}">
      <span class="ig-tile__cap">${i(n.caption||n.url.replace("https://www.instagram.com/",""))}</span>
      <span class="ig-tile__badge">${_}</span>
    </a>`,o=e.saved.length?e.saved.map(n=>p(n,"\u{1F516}")).join(""):'<p class="ig-empty">Nothing saved.</p>',l=e.liked.length?e.liked.map(n=>p(n,"\u2764\uFE0F")).join(""):'<p class="ig-empty">No likes.</p>',d=n=>Number(n.match(/(\d+)(?=\.\w+$)/)?.[1]||0),r=e.posts.slice().sort((n,_)=>d(_.media)-d(n.media)),g=30,u=[...e.saved,...e.liked].map(n=>n.caption).filter(Boolean),y=r.map((n,_)=>`<a class="ig-tile" href="#" data-post-idx="${_}"><img src="${n.media}" alt="post"></a>`),m=Array.from({length:Math.max(0,g-y.length)},(n,_)=>`
    <a class="ig-tile ig-tile--post" href="#" style="background:${L(_)}">
      <span class="ig-tile__cap">${i(u[_%(u.length||1)]||"")}</span>
    </a>`),w=y.length||m.length?[...y,...m].join(""):'<p class="ig-empty">No posts yet.</p>',E='<svg class="ig-tile__ov" viewBox="0 0 24 24"><polygon points="10 8 16 12 10 16 10 8" fill="currentColor" stroke="none"/></svg>',I=Array.from({length:12},(n,_)=>`
    <a class="ig-tile ig-tile--post" href="#" style="background:${L(_+5)}">${E}
      <span class="ig-tile__cap">${i(u[(_+2)%(u.length||1)]||"")}</span>
    </a>`).join(""),B=Array.from({length:9},(n,_)=>`
    <a class="ig-tile ig-tile--post" href="#" style="background:${L(_+9)}">
      <span class="ig-tile__badge">@${i(s.username)}</span>
    </a>`).join(""),D=e.comments.length?e.comments.map(n=>`
      <div class="ig-comment">
        <div class="ig-comment__text">${i(n.text)}</div>
        <div class="ig-comment__meta">${n.owner?"@"+i(n.owner)+" \xB7 ":""}${i(n.time||"")}</div>
      </div>`).join(""):'<p class="ig-empty">No comments.</p>',T=n=>`<div class="ig-grid">${n}</div>`,C=`<div class="ig-head__avatar ig-head__avatar--ph">${i(Y(s.name))}</div>`;a.innerHTML=`
    <nav class="ig-nav">
      <div class="ig-nav__inner">
        <a href="#" class="ig-nav__logo">My Socials</a>
        <div class="ig-nav__search"><input placeholder="Search"></div>
        <div class="ig-nav__icons">${b.home}${b.heart}${b.comment}${b.share}</div>
      </div>
    </nav>
    <div class="ig-page">
      <header class="ig-head">
        <div class="ig-head__user">${i(s.username)}</div>
        <div class="ig-head__row">
          ${C}
          <div class="ig-head__stats">
            <div class="ig-head__stat"><strong>${t(s.posts)}</strong><span>posts</span></div>
            <div class="ig-head__stat" data-modal="followers"><strong>${t(s.followers)}</strong><span>followers</span></div>
            <div class="ig-head__stat" data-modal="following"><strong>${t(s.following)}</strong><span>following</span></div>
          </div>
        </div>
        <div class="ig-head__name">${i(s.name)}</div>
        <div class="ig-head__bio">${i(s.bio)}</div>
        <div class="ig-head__actions">
          <span class="ig-head__btn ig-head__btn--primary">Follow</span>
          <span class="ig-head__btn">Message</span>
        </div>
      </header>

      ${c?`<div class="ig-highlights">${c}</div>`:""}

      <div class="ig-tabs">
        <div class="ig-tab is-active" data-pane="posts">${b.grid} Posts</div>
        <div class="ig-tab" data-pane="reels">${b.reels} Reels</div>
        <div class="ig-tab" data-pane="tagged">${b.tagged} Tagged</div>
      </div>

      <div class="ig-subtabs">
        <button class="ig-pill" data-pane="saved">${b.save}<span>Saved</span><em>${t(e.saved.length)}</em></button>
        <button class="ig-pill" data-pane="liked">${b.heart}<span>Liked</span><em>${t(e.liked.length)}</em></button>
        <button class="ig-pill" data-pane="comments">${b.comment}<span>Comments</span><em>${t(e.comments.length)}</em></button>
      </div>

      <div class="ig-pane is-active" data-pane="posts">${T(w)}</div>
      <div class="ig-pane" data-pane="reels">${T(I)}</div>
      <div class="ig-pane" data-pane="tagged">${T(B)}</div>
      <div class="ig-pane" data-pane="saved">${T(o)}</div>
      <div class="ig-pane" data-pane="liked">${T(l)}</div>
      <div class="ig-pane" data-pane="comments"><div class="ig-comments">${D}</div></div>
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
    </div>`,a.querySelectorAll(".ig-tab, .ig-pill").forEach(n=>{n.addEventListener("click",()=>{let _=n.dataset.pane;a.querySelectorAll(".ig-tab, .ig-pill").forEach(k=>k.classList.toggle("is-active",k===n)),a.querySelectorAll(".ig-pane").forEach(k=>k.classList.toggle("is-active",k.dataset.pane===_))})});let f=a.querySelector("#ig-modal"),P=n=>{let _=n==="followers"?e.followers:e.following,k=n==="followers"?s.followers:s.following,ie=ge(_,k);a.querySelector("#ig-modal-title").textContent=n==="followers"?"Followers":"Following",a.querySelector("#ig-modal-sub").textContent=`${t(k)} ${n}`,a.querySelector("#ig-modal-list").innerHTML=ie.map(j=>`
      <div class="ig-row">
        <div class="ig-row__avatar" style="background:${pe(j)}">${i(j.charAt(0).toUpperCase())}</div>
        <a class="ig-row__handle" href="https://www.instagram.com/${i(j)}" target="_blank" rel="noopener">${i(j)}</a>
        <span class="ig-row__follow">Follow</span>
      </div>`).join(""),f.classList.add("is-open")};a.querySelectorAll(".ig-head__stat[data-modal]").forEach(n=>n.addEventListener("click",()=>P(n.dataset.modal)));let M=()=>f.classList.remove("is-open");a.querySelector("#ig-modal-close").addEventListener("click",M),f.addEventListener("click",n=>{n.target===f&&M()});let v=a.querySelector("#ig-post-modal"),$=a.querySelector("#ig-post-img"),A=a.querySelector("#ig-post-dots"),se=a.querySelector("#ig-post-comments"),x=[],S=0,O=()=>{$.src=x[S],A.innerHTML=x.length>1?x.map((n,_)=>`<span class="ig-post-modal__dot${_===S?" is-active":""}"></span>`).join(""):""},ae=n=>{let _=r[n];_&&(x=_.media_all?.length?_.media_all:[_.media],S=0,O(),se.innerHTML='<p class="ig-empty">No per-post comment data in this export.</p>',v.classList.add("is-open"))};a.querySelectorAll(".ig-tile[data-post-idx]").forEach(n=>n.addEventListener("click",_=>{_.preventDefault(),ae(Number(n.dataset.postIdx))})),a.querySelector("#ig-post-prev").addEventListener("click",()=>{S=(S-1+x.length)%x.length,O()}),a.querySelector("#ig-post-next").addEventListener("click",()=>{S=(S+1)%x.length,O()});let U=()=>v.classList.remove("is-open");a.querySelector("#ig-post-modal-close").addEventListener("click",U),v.addEventListener("click",n=>{n.target===v&&U()})}var q={home:'<svg viewBox="0 0 24 24"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/></svg>',net:'<svg viewBox="0 0 24 24"><circle cx="9" cy="7" r="4"/><path d="M17 11a4 4 0 1 0-3-6.6M1 21v-2a4 4 0 0 1 4-4h8a4 4 0 0 1 4 4v2M17 15a4 4 0 0 1 4 4v2"/></svg>',jobs:'<svg viewBox="0 0 24 24"><rect x="2" y="7" width="20" height="14" rx="2"/><path d="M8 7V5a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"/></svg>',msg:'<svg viewBox="0 0 24 24"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>',bell:'<svg viewBox="0 0 24 24"><path d="M18 8a6 6 0 1 0-12 0c0 7-3 9-3 9h18s-3-2-3-9M13.7 21a2 2 0 0 1-3.4 0"/></svg>',like:'<svg viewBox="0 0 24 24"><path d="M14 9V5a3 3 0 0 0-6 0v4H5a2 2 0 0 0-2 2l1 7a2 2 0 0 0 2 2h9a2 2 0 0 0 2-2l1-7a2 2 0 0 0-2-2z"/></svg>',comment:'<svg viewBox="0 0 24 24"><path d="M21 11.5a8.4 8.4 0 0 1-9 8.4 9 9 0 0 1-4-1L3 20l1.1-4.9A8.4 8.4 0 0 1 12 3a8.4 8.4 0 0 1 9 8.5z"/></svg>',repost:'<svg viewBox="0 0 24 24"><polyline points="17 1 21 5 17 9"/><path d="M3 11V9a4 4 0 0 1 4-4h14M7 23l-4-4 4-4M21 13v2a4 4 0 0 1-4 4H3"/></svg>',send:'<svg viewBox="0 0 24 24"><line x1="22" y1="2" x2="11" y2="13"/><polygon points="22 2 15 22 11 13 2 9 22 2"/></svg>'};function z(a){let e=t=>i(t).replace(/(https?:\/\/\S+)/g,'<a href="$1" target="_blank" rel="noopener">$1</a>');return a.split(/\s*-{3,}\s*/).map(t=>t.trim()).filter(Boolean).map(t=>{let c=t.match(/^@(\S+)\s+([\s\S]*)$/),p=c?.[1],o=(c?c[2]:t).trim().replace(/^>\s*/,""),l=p?`<div class="li-desc__label">${i(p)}</div>`:"",d=o.split(/\s-\s/).map(r=>r.trim()).filter(Boolean);return l+(d.length>=3?`<ul class="li-desc__list">${d.map(r=>`<li>${e(r)}</li>`).join("")}</ul>`:`<p class="li-desc__p">${e(o)}</p>`)}).join("")}function Y(a){return a.split(/\s+/).filter(Boolean).slice(0,2).map(e=>e.charAt(0).toUpperCase()).join("")}function ue(){let a=document.getElementById("li-view");if(!a)return;let e=globalThis.PORTAL_DATA?.linkedin;if(!e){a.innerHTML='<p class="li-empty">LinkedIn data not loaded.</p>';return}let s=e.profile,t=(m,w)=>`<div class="li-nav__item">${m}<span>${w}</span></div>`,c=s.photo?`<div class="li-phead__avatar li-phead__avatar--img"><img src="${s.photo}" alt="${i(s.name)}"></div>`:`<div class="li-phead__avatar" style="background:${h[3]}">${i(Y(s.name))}</div>`,p=(m,w)=>`<section class="li-card li-section"><h2 class="li-section__title">${m}</h2>${w}</section>`,o='<p class="li-need">Not in the saved profile page \u2014 add from your LinkedIn data export (Settings \u2192 Get a copy of your data).</p>',l=e.experience.length?e.experience.map(m=>`
      <div class="li-item">
        <div class="li-item__logo">${i(m.company.charAt(0))}</div>
        <div>
          <div class="li-item__title">${i(m.title)}</div>
          <div class="li-item__sub">${i(m.company)}</div>
          <div class="li-item__meta">${i(m.dates)}${m.location?" \xB7 "+i(m.location):""}</div>
          ${m.description?`<div class="li-item__desc">${z(m.description)}</div>`:""}
        </div>
      </div>`).join(""):o,d=e.education.length?e.education.map(m=>`
      <div class="li-item">
        <div class="li-item__logo">${i(m.school.charAt(0))}</div>
        <div>
          <div class="li-item__title">${i(m.school)}</div>
          <div class="li-item__sub">${i(m.degree)}</div>
          <div class="li-item__meta">${i(m.dates)}</div>
        </div>
      </div>`).join(""):o,r=e.skills.length?`<div class="li-skills">${e.skills.map(m=>`<span class="li-skill">${i(m)}</span>`).join("")}</div>`:o,g=e.about?`<div class="li-about">${z(e.about)}</div>`:o,u=e.languages.length?e.languages.map(m=>`
      <div class="li-lang">
        <span class="li-lang__name">${i(m.name)}</span>
        <span class="li-lang__level">${i(m.proficiency)}</span>
      </div>`).join(""):o,y=e.projects.length?e.projects.map(m=>`
      <div class="li-item li-item--proj">
        <div>
          <div class="li-item__title">${i(m.title)}${m.url?` \xB7 <a href="${i(m.url)}" target="_blank" rel="noopener">link</a>`:""}</div>
          ${m.dates?`<div class="li-item__meta">${i(m.dates)}</div>`:""}
          <div class="li-item__desc">${z(m.description)}</div>
        </div>
      </div>`).join(""):o;a.innerHTML=`
    <nav class="li-nav">
      <div class="li-nav__inner">
        <span class="li-nav__logo">in</span>
        <div class="li-nav__search"><input placeholder="Search"></div>
        <div class="li-nav__items">
          ${t(q.home,"Home")}
          ${t(q.net,"Network")}
          ${t(q.jobs,"Jobs")}
          ${t(q.msg,"Messaging")}
          ${t(q.bell,"Notifications")}
        </div>
      </div>
    </nav>
    <div class="li-prof">
      <div class="li-prof__main">
        <section class="li-card li-phead">
          <div class="li-phead__banner"></div>
          ${c}
          <div class="li-phead__body">
            <h1 class="li-phead__name">${i(s.name)}</h1>
            <p class="li-phead__headline">${i(s.headline)}</p>
            <p class="li-phead__loc">${i(s.location)} \xB7 <a href="https://${i(s.url)}" target="_blank" rel="noopener">Contact info</a></p>
            <p class="li-phead__meta"><strong>${s.connections}</strong> connections \xB7 <strong>${s.followers.toLocaleString()}</strong> followers</p>
            ${s.open_to_work?`<div class="li-phead__open"><strong>Open to work</strong><br>${i(s.open_to_work)}</div>`:""}
            <div class="li-phead__actions">
              <button class="li-btn li-btn--primary">Connect</button>
              <button class="li-btn">Message</button>
              <button class="li-btn">More</button>
            </div>
          </div>
        </section>
        ${p("About",g)}
        ${p("Experience",l)}
        ${p("Education",d)}
        ${p("Skills",r)}
        ${p("Projects",y)}
        ${p("Languages",u)}
      </div>
      <aside class="li-prof__rail">
        <div class="li-card li-side">
          <div class="li-side__title">Profile</div>
          <div class="li-side__row"><span>Current</span><strong>${i(s.current)}</strong></div>
          <div class="li-side__row"><span>Location</span><strong>${i(s.location.split(",")[0])}</strong></div>
          <div class="li-side__row"><span>Profile</span><a href="https://${i(s.url)}" target="_blank" rel="noopener">${i(s.url)}</a></div>
        </div>
      </aside>
    </div>`}var Q={bell:'<svg viewBox="0 0 24 24"><path d="M18 8a6 6 0 1 0-12 0c0 7-3 9-3 9h18s-3-2-3-9M13.7 21a2 2 0 0 1-3.4 0"/></svg>',chat:'<svg viewBox="0 0 24 24"><path d="M21 11.5a8.4 8.4 0 0 1-9 8.4 9 9 0 0 1-4-1L3 20l1.1-4.9A8.4 8.4 0 0 1 12 3a8.4 8.4 0 0 1 9 8.5z"/></svg>'},W=[220,300,180,340,260,200,320,240,280];function _e(){let a=document.getElementById("pin-view");if(!a)return;let e=globalThis.PORTAL_DATA?.pinterest,s=e?.boards??[],t=e?.profile,c=["30% 30%","75% 15%","20% 80%","80% 75%"],p=(l,d)=>`
    <div class="pin-card__grid">
      ${c.map((r,g)=>`<div class="pin-card__cell pin-card__cell--${g}" style="background-image:url('${i(l)}');background-position:${r}" role="img" aria-label="${i(d)}"></div>`).join("")}
    </div>`,o=s.map((l,d)=>{let r=W[d%W.length],g=l.cover?p(l.cover,l.name):`<div class="pin-card__ph" style="height:${r}px;background:${L(d)}">\u{1F4CC}</div>`;return`
    <a class="pin-card" href="https://www.pinterest.com/${i(t?.username||"diegonmarcos")}/${i(l.name.toLowerCase().replace(/[^a-z0-9]+/g,"-"))}/" target="_blank" rel="noopener">
      <div class="pin-card__media">
        ${g}
        <div class="pin-card__overlay"><span class="pin-card__save">${l.pins} pins</span></div>
      </div>
      <div class="pin-card__title">${i(l.name)}</div>
      ${l.desc?`<div class="pin-card__meta">${i(l.desc)}</div>`:`<div class="pin-card__meta">${l.pins} pins</div>`}
    </a>`}).join("");a.innerHTML=`
    <nav class="pin-nav">
      <div class="pin-nav__inner">
        <span class="pin-nav__logo">P</span>
        <a href="#" class="pin-nav__tab pin-nav__tab--active">Boards</a>
        <a href="https://www.pinterest.com/${i(t?.username||"diegonmarcos")}/" target="_blank" rel="noopener" class="pin-nav__tab">Profile</a>
        <div class="pin-nav__search"><input placeholder="Search for ideas"></div>
        <div class="pin-nav__icons">${Q.bell}${Q.chat}<span class="pin-nav__avatar" style="background:${h[3]}">D</span></div>
      </div>
    </nav>
    <div class="pin-head">@${i(t?.username||"diegonmarcos")} \xB7 <strong>${t?.boards??s.length}</strong> boards \xB7 <strong>${t?.pins??0}</strong> pins</div>
    <div class="pin-board">${o||'<p class="pin-empty">No boards.</p>'}</div>`}function he(){let a=document.getElementById("tid-view");if(!a)return;let e=globalThis.PORTAL_DATA?.tidal,s=e?.playlists??[],t=e?.profile,c=o=>{if(!o)return"";let l=Math.floor(o/3600),d=Math.round(o%3600/60);return l?`${l}h ${d}m`:`${d} min`},p=s.map((o,l)=>{let d=o.cover?`<img class="tid-card__img" src="${i(o.cover)}" alt="${i(o.name)}" loading="lazy">`:`<div class="tid-card__ph" style="background:${L(l)}">\u266B</div>`;return`
    <a class="tid-card" href="${i(o.url)}" target="_blank" rel="noopener">
      <div class="tid-card__cover">${d}<span class="tid-card__play">\u25B6</span></div>
      <div class="tid-card__name">${i(o.name)}</div>
      <div class="tid-card__meta">${o.tracks} tracks${o.duration_s?" \xB7 "+c(o.duration_s):""}</div>
    </a>`}).join("");a.innerHTML=`
    <nav class="tid-nav">
      <div class="tid-nav__inner">
        <span class="tid-nav__logo">TIDAL</span>
        <div class="tid-nav__search"><input placeholder="Search"></div>
        <span class="tid-nav__user">@${i(t?.username||"diegonmarcos")}</span>
      </div>
    </nav>
    <div class="tid-main">
      <header class="tid-head">
        <div class="tid-head__title">My Playlists</div>
        <div class="tid-head__sub">${t?.playlists??s.length} playlists \xB7 ${t?.tracks??0} tracks</div>
      </header>
      <div class="tid-grid">${p||'<p class="tid-empty">Playlists load once the Tidal profile ID is set.</p>'}</div>
    </div>`}var fe={run:"\u{1F3C3}",ride:"\u{1F6B4}",swim:"\u{1F3CA}"};function $e(){let a=document.getElementById("str-view");if(!a)return;let e=globalThis.PORTAL_DATA?.strava,s=e?.activities??[],t=e?.profile,c=(o,l)=>l?`<div class="str-card__stat"><span class="str-card__stat-value">${i(l)}</span><span class="str-card__stat-label">${o}</span></div>`:"",p=s.map(o=>`
    <div class="str-card">
      <div class="str-card__header">
        <div class="str-card__icon">${fe[o.type]||"\u{1F3C1}"}</div>
        <div>
          <div class="str-card__title">${i(o.title)}</div>
          <div class="str-card__date">${i(o.date)}</div>
        </div>
      </div>
      <div class="str-card__stats">
        ${c("Distance",o.distance_km?`${o.distance_km} km`:"")}
        ${c("Time",o.duration||"")}
        ${c("Pace",o.pace||"")}
        ${c("Elevation",o.elevation_m?`${o.elevation_m} m`:"")}
      </div>
    </div>`).join("");a.innerHTML=`
    <nav class="str-nav">
      <div class="str-nav__inner">
        <span class="str-nav__logo">Strava</span>
        <div class="str-nav__search"><input placeholder="Search"></div>
        <span class="str-nav__user">${i(t?.name||"diegonmarcos")}</span>
      </div>
    </nav>
    <div class="str-main">
      <header class="str-head">
        <div>
          <div class="str-head__name">${i(t?.name||"Diego Nepomuceno Marcos")}</div>
        </div>
        <div class="str-head__stats">
          <div class="str-head__stat"><span class="str-head__stat-value">${t?.activities??s.length}</span><span class="str-head__stat-label">Activities</span></div>
          <div class="str-head__stat"><span class="str-head__stat-value">${t?.followers??0}</span><span class="str-head__stat-label">Followers</span></div>
          <div class="str-head__stat"><span class="str-head__stat-value">${t?.following??0}</span><span class="str-head__stat-label">Following</span></div>
        </div>
      </header>
      <div class="str-feed">${p||'<p class="str-empty">No activities yet. Strava data loads once the profile is exported.</p>'}</div>
    </div>`}function be(){let a=document.getElementById("yt-view");if(!a)return;let e=globalThis.PORTAL_DATA?.youtube,s=e?.videos??[],t=e?.playlists??[],c=e?.profile,p=(r,g)=>{let u=r.thumbnail?`<img class="yt-card__img" src="${i(r.thumbnail)}" alt="${i(r.title)}" loading="lazy">`:`<div class="yt-card__ph" style="background:${L(g)}">\u25B6</div>`;return`
    <a class="yt-card" href="${i(r.url||"#")}" target="_blank" rel="noopener">
      <div class="yt-card__thumb">${u}${r.duration?`<span class="yt-card__duration">${i(r.duration)}</span>`:""}</div>
      <div class="yt-card__title">${i(r.title)}</div>
      ${r.channel?`<div class="yt-card__channel">${i(r.channel)}</div>`:""}
      <div class="yt-card__meta">${r.views!==void 0?`${r.views.toLocaleString()} views`:""}${r.views!==void 0&&r.date?" \xB7 ":""}${r.date?i(r.date):""}</div>
    </a>`},o=t.map(r=>`
    <section class="yt-shelf">
      <div class="yt-shelf__title">${i(r.name)}</div>
      <div class="yt-shelf__row">${r.videos.map((g,u)=>p(g,u)).join("")}</div>
    </section>`).join(""),l=s.length?`<div class="yt-grid">${s.map((r,g)=>p(r,g)).join("")}</div>`:"",d=t.length||s.length;a.innerHTML=`
    <nav class="yt-nav">
      <div class="yt-nav__inner">
        <span class="yt-nav__logo">YouTube</span>
        <div class="yt-nav__search"><input placeholder="Search"></div>
        <span class="yt-nav__user">@${i(c?.channel||"diegonmarcos")}</span>
      </div>
    </nav>
    <div class="yt-main">
      <header class="yt-head">
        <div>
          <div class="yt-head__title">${i(c?.channel||"diegonmarcos")}</div>
          <div class="yt-head__sub">${c?.subscribers??0} subscribers \xB7 ${c?.videos??s.length} videos</div>
        </div>
      </header>
      ${d?`${o}${l}`:'<p class="yt-empty">No videos or playlists yet. YouTube data loads once the channel is scraped.</p>'}
    </div>`}var H=(a=!1)=>{let e=a?"#c7cbb9":"#8fbf3f",s=a?"#c7cbb9":"#ef4a2b",t=a?"#e4e4d8":"#ffd400",c=a?"#9a9d90":"#1a1a12";return`<svg class="icq-flower" viewBox="0 0 16 16" aria-hidden="true">${Array.from({length:8},(o,l)=>{let d=l*45;return`<ellipse cx="8" cy="2.9" rx="1.9" ry="2.9" fill="${l===0?s:e}" stroke="${c}" stroke-width="0.5" transform="rotate(${d} 8 8)"/>`}).join("")}<circle cx="8" cy="8" r="2.4" fill="${t}" stroke="${c}" stroke-width="0.5"/></svg>`};var J={online:!1,away:!1,dnd:!1,offline:!0};function ye(){let a=document.getElementById("icq-view");if(!a)return;let e=globalThis.PORTAL_DATA||{},s=e.linkedin,t=e.instagram,c=s?.profile.name||"Diego Nepomuceno Marcos",p=t?.profile.username||"diegonmarcos",o=c.split(" ")[0],l=c.split(" ").slice(1).join(" "),d=(s?.profile.location||"Berlin, Germany").split(",").map(v=>v.trim()),r=d[0]||"",g=d[d.length-1]||"",u=s?.experience?.[0],y=s?.about||t?.profile.bio||"",m=s?.skills||[],w=s?.languages||[],E="184-042-518",I=["online","online","away","online","dnd","away","offline","offline","offline"],B=X.map((v,$)=>({...v,status:I[$%I.length]})),D=B.filter(v=>v.status!=="offline"),T=B.filter(v=>v.status==="offline"),C=v=>`<li class="icq-contact">${H(J[v.status])}<span>${i(v.name)}</span></li>`,f=(v,$)=>$?`<div class="icq-field"><span class="icq-field__k">${i(v)}</span><span class="icq-field__v">${i($)}</span></div>`:"",P=[{id:"main",label:"Main",body:`
        ${f("Nickname",p)}
        ${f("First Name",o)}
        ${f("Last Name",l)}
        ${f("ICQ#",E)}
        ${f("Email","me@diegonmarcos.com")}
        ${f("Headline",s?.profile.headline||"")}`},{id:"home",label:"Home",body:`
        ${f("City",r)}
        ${f("Country",g)}
        ${f("Homepage",s?.profile.url||"linktree.diegonmarcos.com")}
        ${w.length?`<div class="icq-field"><span class="icq-field__k">Languages</span><span class="icq-field__v">${w.map(v=>i(v.name)).join(", ")}</span></div>`:""}`},{id:"work",label:"Work",body:u?`
        ${f("Company",u.company)}
        ${f("Title",u.title)}
        ${f("Since",u.dates)}
        ${f("Location",u.location||"")}`:'<p class="icq-empty">No work info.</p>'},{id:"about",label:"About",body:y?`<p class="icq-about">${i(y)}</p>`:'<p class="icq-empty">No about info.</p>'},{id:"interests",label:"Interests",body:m.length?`<div class="icq-interests">${m.map(v=>`<span class="icq-chip">${i(v)}</span>`).join("")}</div>`:'<p class="icq-empty">No interests listed.</p>'}],M='<span class="icq-win__btns"><i>_</i><i>\u25A1</i><i>\u2715</i></span>';a.innerHTML=`
    <div class="icq-desk">
      <!-- Contact list window -->
      <div class="icq-win icq-win--list">
        <div class="icq-win__bar">${H("#ffffff")}<span class="icq-win__title">ICQ</span>${M}</div>
        <div class="icq-list">
          <div class="icq-group icq-group--online">Online (${D.length})</div>
          <ul>${D.map(C).join("")}</ul>
          <div class="icq-group icq-group--offline">Offline (${T.length})</div>
          <ul>${T.map(C).join("")}</ul>
        </div>
        <div class="icq-list__foot">${H(J.online)}<span>Online</span><span class="icq-uin">#${E}</span></div>
      </div>

      <!-- User details window -->
      <div class="icq-win icq-win--details">
        <div class="icq-win__bar icq-win__bar--alt">${H("#ffffff")}<span class="icq-win__title">User Details \u2014 ${i(p)}</span>${M}</div>
        <div class="icq-detail">
          <div class="icq-detail__head">
            <div class="icq-detail__avatar">${i(Y(c))}</div>
            <div>
              <div class="icq-detail__name">${i(c)}</div>
              <div class="icq-detail__nick">"${i(p)}" \xB7 #${E}</div>
            </div>
          </div>
          <div class="icq-tabs">
            ${P.map((v,$)=>`<button class="icq-tab${$===0?" is-active":""}" data-icq-pane="${v.id}">${v.label}</button>`).join("")}
          </div>
          ${P.map((v,$)=>`<div class="icq-pane${$===0?" is-active":""}" data-icq-pane="${v.id}">${v.body}</div>`).join("")}
        </div>
      </div>
    </div>`,a.querySelectorAll(".icq-tab").forEach(v=>{v.addEventListener("click",()=>{let $=v.dataset.icqPane;a.querySelectorAll(".icq-tab").forEach(A=>A.classList.toggle("is-active",A===v)),a.querySelectorAll(".icq-pane").forEach(A=>A.classList.toggle("is-active",A.dataset.icqPane===$))})})}function we(){let a=document.getElementById("me-view");if(!a)return;let e=globalThis.PORTAL_DATA||{},s=e.instagram,t=e.linkedin,c=t?.profile.name||s?.profile.name||"Diego Nepomuceno Marcos",p=t?.profile.headline||"",o=t?.profile.location||"",l=s?.profile.bio||"",d=globalThis.PORTAL_DATA?.tidal,r=[{theme:"linkedin",label:"LinkedIn",meta:t?`${t.profile.connections} connections \xB7 ${t.profile.followers.toLocaleString()} followers`:"profile",color:"#0a66c2"},{theme:"instagram",label:"Instagram",meta:s?`${s.profile.followers.toLocaleString()} followers \xB7 ${s.profile.posts} post${s.profile.posts===1?"":"s"}`:"profile",color:"#dc2743"},{theme:"pinterest",label:"Pinterest",meta:"boards & pins",color:"#e60023"},{theme:"tidal",label:"TIDAL",meta:d?`${d.profile.playlists} playlists`:"playlists",color:"#00ffff"},{theme:"strava",label:"Strava",meta:"activities & routes",color:"#fc5200"},{theme:"youtube",label:"YouTube",meta:"playlists & videos",color:"#ff0000"},{theme:"orkut",label:"Orkut",meta:"the classic profile",color:"#e9008c"},{theme:"icq",label:"ICQ",meta:"retro IM \xB7 user details",color:"#0a870a"}];a.innerHTML=`
    <div class="me-hub">
      <div class="me-card">
        <div class="me-avatar"></div>
        <h1 class="me-name">${i(c)}</h1>
        ${p?`<p class="me-headline">${i(p)}</p>`:""}
        ${o?`<p class="me-loc">${i(o)}</p>`:""}
        ${l?`<p class="me-bio">${i(l)}</p>`:""}
      </div>
      <div class="me-links">
        ${r.map(g=>`
          <button class="me-link" data-goto="${g.theme}" style="--accent:${g.color}">
            <span class="me-link__dot"></span>
            <span class="me-link__body">
              <span class="me-link__name">${g.label}</span>
              <span class="me-link__meta">${i(g.meta)}</span>
            </span>
            <span class="me-link__arrow">\u2192</span>
          </button>`).join("")}
      </div>
    </div>`,a.querySelectorAll(".me-link").forEach(g=>g.addEventListener("click",()=>Z(g.dataset.goto)))}var Te=["myprofile","orkut","instagram","linkedin","pinterest","tidal","strava","youtube","icq"];function ke(a){return a==="myprofile"?"./":`${a}.html`}function R(a){document.documentElement.setAttribute("data-theme",a),document.querySelectorAll("[data-theme-btn]").forEach(e=>{e.classList.toggle("is-active",e.dataset.themeBtn===a)}),window.scrollTo(0,0)}function Z(a,e=!0){R(a),e&&history.pushState({theme:a},"",ke(a))}function Le(){let a=document.documentElement.dataset.theme||"myprofile";R(Te.includes(a)?a:"myprofile"),document.querySelectorAll("[data-theme-btn]").forEach(e=>{e.addEventListener("click",()=>Z(e.dataset.themeBtn))}),window.addEventListener("popstate",e=>{let s=e.state?.theme||"myprofile";R(s)})}function K(){le(),re(),ce(),de(),me(),ve(),ue(),_e(),he(),$e(),be(),ye(),we(),Le(),setTimeout(()=>{document.querySelectorAll(".trust-meter__fill").forEach(a=>{a.style.transition="width 1.2s cubic-bezier(0.16, 1, 0.3, 1)"})},300)}async function ee(){let a=document.getElementById("theme-switch"),e=[...document.querySelectorAll("[data-theme-btn]")],s=document.documentElement.dataset.theme??"";e.find(g=>g.dataset.themeBtn!==s)?.click();let c=document.documentElement.dataset.theme!==s;c&&s&&R(s);let p="none",o=[],l={};try{p=navigator.serviceWorker?.controller?.scriptURL??"none",o=(await navigator.serviceWorker?.getRegistrations?.()??[]).map(u=>[u.installing&&"installing",u.waiting&&"waiting",u.active&&`active:${u.active.scriptURL}`].filter(Boolean).join(","));for(let u of await caches.keys())l[u]=(await(await caches.open(u)).keys()).length}catch{}let d="n/a";if(a){let g=a.getBoundingClientRect(),u=document.elementFromPoint(g.left+g.width/2,g.top+g.height/2);d=`<${u?.tagName}.${(u?.className||"").toString().trim()}> inNav:${a.contains(u)}`}let r={url:location.href,theme:document.documentElement.dataset.theme,navButtons:e.length,navWired:c,swController:p,swRegistrations:o,caches:l,navHitTest:d,ua:navigator.userAgent};return console.info("[mySocials debug]",JSON.stringify(r)),r}window.__debugReport=ee;document.readyState==="loading"?document.addEventListener("DOMContentLoaded",K):K();(/\bdebug\b/.test(location.search)||/\bdebug\b/.test(location.hash))&&setTimeout(()=>{ee()},500);})();
