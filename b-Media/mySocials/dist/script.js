(()=>{var _=["#e8508a","#4a8aff","#3abb78","#8a6aff","#ff8a4a","#4ac0ff","#ff4a8a","#50c878","#ffa040","#8080ff","#ff6060","#40c0c0","#c060ff","#ff9060","#60b0ff"],V=[{name:"Ana Silva",initial:"A",color:_[0]},{name:"Bruno Costa",initial:"B",color:_[1]},{name:"Carla Souza",initial:"C",color:_[2]},{name:"Daniel Lima",initial:"D",color:_[3]},{name:"Elena Torres",initial:"E",color:_[4]},{name:"Felipe Gomes",initial:"F",color:_[5]},{name:"Gabi Santos",initial:"G",color:_[6]},{name:"Hugo Pereira",initial:"H",color:_[7]},{name:"Isa Oliveira",initial:"I",color:_[8]}],K=[{author:"Ana Silva",initial:"A",color:_[0],text:"Hey Diego! Miss our coding sessions at the uni. We should catch up soon! Saudades demais!",time:"2 hours ago"},{author:"Bruno Costa",initial:"B",color:_[1],text:"Cara, vi que voce ta morando em Berlin agora! Que top! Vamos marcar uma call?",time:"5 hours ago"},{author:"Carla Souza",initial:"C",color:_[2],text:"Happy birthday atrasado!! Hope you had an amazing day. Your projects are looking incredible btw",time:"yesterday"},{author:"Felipe Gomes",initial:"F",color:_[5],text:"Mano, teu MyMaps ta INSANO. Lembra quando a gente fazia mapa no paint? kkkk Evoluimos!",time:"2 days ago"},{author:"Gabi Santos",initial:"G",color:_[6],text:'Diego!! Join our community "Linux Users Brazil" please! We need more devs like you there',time:"3 days ago"},{author:"Hugo Pereira",initial:"H",color:_[7],text:"Saw your Strava activities... beast mode! When did you start cycling?",time:"4 days ago"},{author:"Isa Oliveira",initial:"I",color:_[8],text:"Testimonial request sent! You were the best partner for the compiler project, forever grateful",time:"1 week ago"}],X=[{name:"Eu odeio acordar cedo",members:1247893,emoji:"\u{1F634}",color:"#8a6aff"},{name:"NixOS Brasil",members:3420,emoji:"\u2744\uFE0F",color:"#4a8aff"},{name:"Linux Users",members:89340,emoji:"\u{1F427}",color:"#3abb78"},{name:"Cycling Addicts",members:45200,emoji:"\u{1F6B4}",color:"#ff8a4a"},{name:"Self-hosted Everything",members:12800,emoji:"\u{1F5A5}\uFE0F",color:"#4ac0ff"},{name:"Saudades do Orkut",members:892340,emoji:"\u{1F62D}",color:"#e8508a"},{name:"Maps & Geography",members:23100,emoji:"\u{1F30D}",color:"#50c878"},{name:"Berlin Brasileiros",members:8900,emoji:"\u{1F1E7}\u{1F1F7}",color:"#ffa040"},{name:"Coffee > Sleep",members:456e3,emoji:"\u2615",color:"#c08040"}],Z=[{author:"Ana Silva",date:"Dec 2023",text:"Diego is one of those rare people who can debug your code AND your life. An incredible friend, always there when you need help. 10/10 would add as friend again."},{author:"Bruno Costa",date:"Nov 2023",text:"Known Diego since university. The guy literally automated everything in his life with NixOS. Respect the dedication. Best engineer I know, no cap."},{author:"Carla Souza",date:"Oct 2023",text:"The most creative developer I have ever worked with. His projects are not just functional, they are beautiful. An artist disguised as an engineer."},{author:"Elena Torres",date:"Sep 2023",text:"Diego helped me set up my entire self-hosted infrastructure. Refused to let me use any cloud subscription. A true freedom fighter of the internet!"}],j=["#1a2840","#2a1840","#182838","#281828","#1a3028","#302818","#201838","#283018","#381828"];function ee(){let s=document.getElementById("friends-grid");s&&V.forEach(e=>{let a=document.createElement("div");a.className="friend-cell",a.innerHTML=`
      <div class="friend-cell__avatar">
        <div class="friend-cell__avatar-inner" style="background:${e.color}">${e.initial}</div>
      </div>
      <span class="friend-cell__name">${e.name.split(" ")[0]}</span>
    `,s.appendChild(a)})}function ae(){let s=document.getElementById("scraps-list");s&&K.forEach(e=>{let a=document.createElement("div");a.className="scrap",a.innerHTML=`
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
    `,s.appendChild(a)})}function se(){let s=document.getElementById("communities-grid");s&&X.forEach(e=>{let a=document.createElement("a");a.href="#",a.className="community-card";let n=e.members>=1e6?`${(e.members/1e6).toFixed(1)}M members`:e.members>=1e3?`${(e.members/1e3).toFixed(0)}K members`:`${e.members} members`;a.innerHTML=`
      <div class="community-card__icon" style="background:${e.color}20;color:${e.color}">${e.emoji}</div>
      <div class="community-card__body">
        <span class="community-card__name">${e.name}</span>
        <span class="community-card__members">${n}</span>
      </div>
    `,s.appendChild(a)})}function ie(){let s=document.getElementById("testimonials-list");s&&Z.forEach(e=>{let a=document.createElement("div");a.className="testimonial",a.innerHTML=`
      <div class="testimonial__header">
        <span class="testimonial__author">${e.author}</span>
        <span class="testimonial__date">${e.date}</span>
      </div>
      <p class="testimonial__text">${e.text}</p>
    `,s.appendChild(a)})}function te(){let s=document.getElementById("photo-grid");if(s)for(let e=0;e<9;e++){let a=document.createElement("div");a.className="photo-cell",a.innerHTML=`<div class="photo-cell__inner" style="background:${j[e%j.length]}"></div>`,s.appendChild(a)}}var b={heart:'<svg viewBox="0 0 24 24"><path d="M20.8 4.6a5.5 5.5 0 0 0-7.8 0L12 5.6l-1-1a5.5 5.5 0 0 0-7.8 7.8l1 1L12 21l7.8-7.6 1-1a5.5 5.5 0 0 0 0-7.8z"/></svg>',comment:'<svg viewBox="0 0 24 24"><path d="M21 11.5a8.4 8.4 0 0 1-9 8.4 9 9 0 0 1-4-1L3 20l1.1-4.9A8.4 8.4 0 0 1 12 3a8.4 8.4 0 0 1 9 8.5z"/></svg>',share:'<svg viewBox="0 0 24 24"><line x1="22" y1="2" x2="11" y2="13"/><polygon points="22 2 15 22 11 13 2 9 22 2"/></svg>',save:'<svg viewBox="0 0 24 24"><path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"/></svg>',home:'<svg viewBox="0 0 24 24"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/></svg>',grid:'<svg viewBox="0 0 24 24"><rect x="3" y="3" width="18" height="18" rx="2"/><line x1="9" y1="3" x2="9" y2="21"/><line x1="15" y1="3" x2="15" y2="21"/><line x1="3" y1="9" x2="21" y2="9"/><line x1="3" y1="15" x2="21" y2="15"/></svg>',reels:'<svg viewBox="0 0 24 24"><rect x="3" y="3" width="18" height="18" rx="3"/><line x1="3" y1="8" x2="21" y2="8"/><line x1="8" y1="3" x2="10" y2="8"/><line x1="14" y1="3" x2="16" y2="8"/><polygon points="10 11 15 13.5 10 16" fill="currentColor" stroke="none"/></svg>',tagged:'<svg viewBox="0 0 24 24"><rect x="3" y="3" width="18" height="18" rx="3"/><circle cx="12" cy="10" r="3"/><path d="M7 18a5 5 0 0 1 10 0"/></svg>'};function k(s){let e=j[s%j.length],a=_[s%_.length];return`linear-gradient(135deg, ${e}, ${a})`}function i(s){return s.replace(/[&<>"]/g,e=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"})[e])}function ne(s){let e=0;for(let a=0;a<s.length;a++)e=e*31+s.charCodeAt(a)>>>0;return _[e%_.length]}var H=["ana","bruno","carla","diego","elena","felipe","gabi","hugo","isa","joao","lu","marco","nina","otto","paula","rafa","sofia","tiago","vera","yara"],R=["","_",".","__"],F=["","br","berlin","photo","travel","x","oficial","real","99","mrx","gram"];function oe(s,e){let a=s.slice();for(let n=0;a.length<e;n++){let c=H[n%H.length],l=R[(n>>2)%R.length],o=F[(n>>1)%F.length],g=Math.floor(n/(H.length*R.length)),m=`${c}${l}${o}${g>0?g:""}`;a.includes(m)?a.push(`${m}${a.length}`):a.push(m)}return a}function le(){let s=document.getElementById("ig-view");if(!s)return;let e=globalThis.PORTAL_DATA?.instagram;if(!e){s.innerHTML='<p class="ig-empty">Instagram data not loaded.</p>';return}let a=e.profile,n=t=>t.toLocaleString(),c=(e.highlights||[]).map((t,v)=>`
    <div class="ig-hl">
      <div class="ig-hl__ring"><div class="ig-hl__avatar" style="background:${k(v)}"><span class="ig-hl__emoji">${t.emoji}</span></div></div>
      <span class="ig-hl__name">${i(t.label)}</span>
    </div>`).join(""),l=(t,v)=>`
    <a class="ig-tile" href="${i(t.url)}" target="_blank" rel="noopener" style="background:${k(t.url.length)}">
      <span class="ig-tile__cap">${i(t.caption||t.url.replace("https://www.instagram.com/",""))}</span>
      <span class="ig-tile__badge">${v}</span>
    </a>`,o=e.saved.length?e.saved.map(t=>l(t,"\u{1F516}")).join(""):'<p class="ig-empty">Nothing saved.</p>',g=e.liked.length?e.liked.map(t=>l(t,"\u2764\uFE0F")).join(""):'<p class="ig-empty">No likes.</p>',m=t=>Number(t.match(/(\d+)(?=\.\w+$)/)?.[1]||0),d=e.posts.slice().sort((t,v)=>m(v.media)-m(t.media)),u=30,p=[...e.saved,...e.liked].map(t=>t.caption).filter(Boolean),y=d.map(t=>`<a class="ig-tile" href="#"><img src="${t.media}" alt="post"></a>`),r=Array.from({length:Math.max(0,u-y.length)},(t,v)=>`
    <a class="ig-tile ig-tile--post" href="#" style="background:${k(v)}">
      <span class="ig-tile__cap">${i(p[v%(p.length||1)]||"")}</span>
    </a>`),$=y.length||r.length?[...y,...r].join(""):'<p class="ig-empty">No posts yet.</p>',w='<svg class="ig-tile__ov" viewBox="0 0 24 24"><polygon points="10 8 16 12 10 16 10 8" fill="currentColor" stroke="none"/></svg>',x=Array.from({length:12},(t,v)=>`
    <a class="ig-tile ig-tile--post" href="#" style="background:${k(v+5)}">${w}
      <span class="ig-tile__cap">${i(p[(v+2)%(p.length||1)]||"")}</span>
    </a>`).join(""),S=Array.from({length:9},(t,v)=>`
    <a class="ig-tile ig-tile--post" href="#" style="background:${k(v+9)}">
      <span class="ig-tile__badge">@${i(a.username)}</span>
    </a>`).join(""),E=e.comments.length?e.comments.map(t=>`
      <div class="ig-comment">
        <div class="ig-comment__text">${i(t.text)}</div>
        <div class="ig-comment__meta">${t.owner?"@"+i(t.owner)+" \xB7 ":""}${i(t.time||"")}</div>
      </div>`).join(""):'<p class="ig-empty">No comments.</p>',T=t=>`<div class="ig-grid">${t}</div>`,M=`<div class="ig-head__avatar ig-head__avatar--ph">${i(O(a.name))}</div>`;s.innerHTML=`
    <nav class="ig-nav">
      <div class="ig-nav__inner">
        <a href="#" class="ig-nav__logo">My Socials</a>
        <div class="ig-nav__search"><input placeholder="Search"></div>
        <div class="ig-nav__icons">${b.home}${b.heart}${b.comment}${b.share}</div>
      </div>
    </nav>
    <div class="ig-page">
      <header class="ig-head">
        <div class="ig-head__user">${i(a.username)}</div>
        <div class="ig-head__row">
          ${M}
          <div class="ig-head__stats">
            <div class="ig-head__stat"><strong>${n(a.posts)}</strong><span>posts</span></div>
            <div class="ig-head__stat" data-modal="followers"><strong>${n(a.followers)}</strong><span>followers</span></div>
            <div class="ig-head__stat" data-modal="following"><strong>${n(a.following)}</strong><span>following</span></div>
          </div>
        </div>
        <div class="ig-head__name">${i(a.name)}</div>
        <div class="ig-head__bio">${i(a.bio)}</div>
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
        <button class="ig-pill" data-pane="saved">${b.save}<span>Saved</span><em>${n(e.saved.length)}</em></button>
        <button class="ig-pill" data-pane="liked">${b.heart}<span>Liked</span><em>${n(e.liked.length)}</em></button>
        <button class="ig-pill" data-pane="comments">${b.comment}<span>Comments</span><em>${n(e.comments.length)}</em></button>
      </div>

      <div class="ig-pane is-active" data-pane="posts">${T($)}</div>
      <div class="ig-pane" data-pane="reels">${T(x)}</div>
      <div class="ig-pane" data-pane="tagged">${T(S)}</div>
      <div class="ig-pane" data-pane="saved">${T(o)}</div>
      <div class="ig-pane" data-pane="liked">${T(g)}</div>
      <div class="ig-pane" data-pane="comments"><div class="ig-comments">${E}</div></div>
    </div>

    <div class="ig-modal" id="ig-modal">
      <div class="ig-modal__box">
        <div class="ig-modal__head">
          <small id="ig-modal-sub"></small><h3 id="ig-modal-title"></h3>
          <button id="ig-modal-close" aria-label="Close">&times;</button>
        </div>
        <div class="ig-modal__list" id="ig-modal-list"></div>
      </div>
    </div>`,s.querySelectorAll(".ig-tab, .ig-pill").forEach(t=>{t.addEventListener("click",()=>{let v=t.dataset.pane;s.querySelectorAll(".ig-tab, .ig-pill").forEach(f=>f.classList.toggle("is-active",f===t)),s.querySelectorAll(".ig-pane").forEach(f=>f.classList.toggle("is-active",f.dataset.pane===v))})});let h=s.querySelector("#ig-modal"),q=t=>{let v=t==="followers"?e.followers:e.following,f=t==="followers"?a.followers:a.following,J=oe(v,f);s.querySelector("#ig-modal-title").textContent=t==="followers"?"Followers":"Following",s.querySelector("#ig-modal-sub").textContent=`${n(f)} ${t}`,s.querySelector("#ig-modal-list").innerHTML=J.map(I=>`
      <div class="ig-row">
        <div class="ig-row__avatar" style="background:${ne(I)}">${i(I.charAt(0).toUpperCase())}</div>
        <a class="ig-row__handle" href="https://www.instagram.com/${i(I)}" target="_blank" rel="noopener">${i(I)}</a>
        <span class="ig-row__follow">Follow</span>
      </div>`).join(""),h.classList.add("is-open")};s.querySelectorAll(".ig-head__stat[data-modal]").forEach(t=>t.addEventListener("click",()=>q(t.dataset.modal)));let A=()=>h.classList.remove("is-open");s.querySelector("#ig-modal-close").addEventListener("click",A),h.addEventListener("click",t=>{t.target===h&&A()})}var L={home:'<svg viewBox="0 0 24 24"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/></svg>',net:'<svg viewBox="0 0 24 24"><circle cx="9" cy="7" r="4"/><path d="M17 11a4 4 0 1 0-3-6.6M1 21v-2a4 4 0 0 1 4-4h8a4 4 0 0 1 4 4v2M17 15a4 4 0 0 1 4 4v2"/></svg>',jobs:'<svg viewBox="0 0 24 24"><rect x="2" y="7" width="20" height="14" rx="2"/><path d="M8 7V5a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"/></svg>',msg:'<svg viewBox="0 0 24 24"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>',bell:'<svg viewBox="0 0 24 24"><path d="M18 8a6 6 0 1 0-12 0c0 7-3 9-3 9h18s-3-2-3-9M13.7 21a2 2 0 0 1-3.4 0"/></svg>',like:'<svg viewBox="0 0 24 24"><path d="M14 9V5a3 3 0 0 0-6 0v4H5a2 2 0 0 0-2 2l1 7a2 2 0 0 0 2 2h9a2 2 0 0 0 2-2l1-7a2 2 0 0 0-2-2z"/></svg>',comment:'<svg viewBox="0 0 24 24"><path d="M21 11.5a8.4 8.4 0 0 1-9 8.4 9 9 0 0 1-4-1L3 20l1.1-4.9A8.4 8.4 0 0 1 12 3a8.4 8.4 0 0 1 9 8.5z"/></svg>',repost:'<svg viewBox="0 0 24 24"><polyline points="17 1 21 5 17 9"/><path d="M3 11V9a4 4 0 0 1 4-4h14M7 23l-4-4 4-4M21 13v2a4 4 0 0 1-4 4H3"/></svg>',send:'<svg viewBox="0 0 24 24"><line x1="22" y1="2" x2="11" y2="13"/><polygon points="22 2 15 22 11 13 2 9 22 2"/></svg>'};function N(s){let e=n=>i(n).replace(/(https?:\/\/\S+)/g,'<a href="$1" target="_blank" rel="noopener">$1</a>');return s.split(/\s*-{3,}\s*/).map(n=>n.trim()).filter(Boolean).map(n=>{let c=n.match(/^@(\S+)\s+([\s\S]*)$/),l=c?.[1],o=(c?c[2]:n).trim().replace(/^>\s*/,""),g=l?`<div class="li-desc__label">${i(l)}</div>`:"",m=o.split(/\s-\s/).map(d=>d.trim()).filter(Boolean);return g+(m.length>=3?`<ul class="li-desc__list">${m.map(d=>`<li>${e(d)}</li>`).join("")}</ul>`:`<p class="li-desc__p">${e(o)}</p>`)}).join("")}function O(s){return s.split(/\s+/).filter(Boolean).slice(0,2).map(e=>e.charAt(0).toUpperCase()).join("")}var B={experience:3,education:3,skills:12,projects:2};function C(s,e,a,n="more"){if(s.length<=e)return s.map(a).join("");let c=s.slice(0,e).map(a).join(""),l=s.slice(e).map(a).join(""),o=`Show ${s.length-e} ${n}`;return`${c}<div class="li-more-wrap">${l}</div><button type="button" class="li-more" aria-expanded="false" data-label="${o}">${o}</button>`}function re(){let s=document.getElementById("li-view");if(!s)return;let e=globalThis.PORTAL_DATA?.linkedin;if(!e){s.innerHTML='<p class="li-empty">LinkedIn data not loaded.</p>';return}let a=e.profile,n=(r,$)=>`<div class="li-nav__item">${r}<span>${$}</span></div>`,c=a.photo?`<div class="li-phead__avatar li-phead__avatar--img"><img src="${a.photo}" alt="${i(a.name)}"></div>`:`<div class="li-phead__avatar" style="background:${_[3]}">${i(O(a.name))}</div>`,l=(r,$)=>`<section class="li-card li-section"><h2 class="li-section__title">${r}</h2>${$}</section>`,o='<p class="li-need">Not in the saved profile page \u2014 add from your LinkedIn data export (Settings \u2192 Get a copy of your data).</p>',g=e.experience.length?C(e.experience,B.experience,r=>`
      <div class="li-item">
        <div class="li-item__logo">${i(r.company.charAt(0))}</div>
        <div>
          <div class="li-item__title">${i(r.title)}</div>
          <div class="li-item__sub">${i(r.company)}</div>
          <div class="li-item__meta">${i(r.dates)}${r.location?" \xB7 "+i(r.location):""}</div>
          ${r.description?`<div class="li-item__desc">${N(r.description)}</div>`:""}
        </div>
      </div>`,"roles"):o,m=e.education.length?C(e.education,B.education,r=>`
      <div class="li-item">
        <div class="li-item__logo">${i(r.school.charAt(0))}</div>
        <div>
          <div class="li-item__title">${i(r.school)}</div>
          <div class="li-item__sub">${i(r.degree)}</div>
          <div class="li-item__meta">${i(r.dates)}</div>
        </div>
      </div>`,"schools"):o,d=e.skills.length?`<div class="li-skills">${C(e.skills,B.skills,r=>`<span class="li-skill">${i(r)}</span>`,"skills")}</div>`:o,u=e.about?`<div class="li-about">${N(e.about)}</div>`:o,p=e.languages.length?e.languages.map(r=>`
      <div class="li-lang">
        <span class="li-lang__name">${i(r.name)}</span>
        <span class="li-lang__level">${i(r.proficiency)}</span>
      </div>`).join(""):o,y=e.projects.length?C(e.projects,B.projects,r=>`
      <div class="li-item li-item--proj">
        <div>
          <div class="li-item__title">${i(r.title)}${r.url?` \xB7 <a href="${i(r.url)}" target="_blank" rel="noopener">link</a>`:""}</div>
          ${r.dates?`<div class="li-item__meta">${i(r.dates)}</div>`:""}
          <div class="li-item__desc">${N(r.description)}</div>
        </div>
      </div>`,"projects"):o;s.innerHTML=`
    <nav class="li-nav">
      <div class="li-nav__inner">
        <span class="li-nav__logo">in</span>
        <div class="li-nav__search"><input placeholder="Search"></div>
        <div class="li-nav__items">
          ${n(L.home,"Home")}
          ${n(L.net,"Network")}
          ${n(L.jobs,"Jobs")}
          ${n(L.msg,"Messaging")}
          ${n(L.bell,"Notifications")}
        </div>
      </div>
    </nav>
    <div class="li-prof">
      <div class="li-prof__main">
        <section class="li-card li-phead">
          <div class="li-phead__banner"></div>
          ${c}
          <div class="li-phead__body">
            <h1 class="li-phead__name">${i(a.name)}</h1>
            <p class="li-phead__headline">${i(a.headline)}</p>
            <p class="li-phead__loc">${i(a.location)} \xB7 <a href="https://${i(a.url)}" target="_blank" rel="noopener">Contact info</a></p>
            <p class="li-phead__meta"><strong>${a.connections}</strong> connections \xB7 <strong>${a.followers.toLocaleString()}</strong> followers</p>
            ${a.open_to_work?`<div class="li-phead__open"><strong>Open to work</strong><br>${i(a.open_to_work)}</div>`:""}
            <div class="li-phead__actions">
              <button class="li-btn li-btn--primary">Connect</button>
              <button class="li-btn">Message</button>
              <button class="li-btn">More</button>
            </div>
          </div>
        </section>
        ${l("About",u)}
        ${l("Experience",g)}
        ${l("Education",m)}
        ${l("Skills",d)}
        ${l("Projects",y)}
        ${l("Languages",p)}
      </div>
      <aside class="li-prof__rail">
        <div class="li-card li-side">
          <div class="li-side__title">Profile</div>
          <div class="li-side__row"><span>Current</span><strong>${i(a.current)}</strong></div>
          <div class="li-side__row"><span>Location</span><strong>${i(a.location.split(",")[0])}</strong></div>
          <div class="li-side__row"><span>Profile</span><a href="https://${i(a.url)}" target="_blank" rel="noopener">${i(a.url)}</a></div>
        </div>
      </aside>
    </div>`,s.querySelectorAll(".li-more").forEach(r=>{r.addEventListener("click",()=>{let $=r.previousElementSibling;if(!($ instanceof HTMLElement)||!$.classList.contains("li-more-wrap"))return;let w=$.classList.toggle("li-more-wrap--open");r.setAttribute("aria-expanded",String(w)),r.textContent=w?"Show less":r.dataset.label??"Show more"})})}var z={bell:'<svg viewBox="0 0 24 24"><path d="M18 8a6 6 0 1 0-12 0c0 7-3 9-3 9h18s-3-2-3-9M13.7 21a2 2 0 0 1-3.4 0"/></svg>',chat:'<svg viewBox="0 0 24 24"><path d="M21 11.5a8.4 8.4 0 0 1-9 8.4 9 9 0 0 1-4-1L3 20l1.1-4.9A8.4 8.4 0 0 1 12 3a8.4 8.4 0 0 1 9 8.5z"/></svg>'},G=[220,300,180,340,260,200,320,240,280];function ce(){let s=document.getElementById("pin-view");if(!s)return;let e=globalThis.PORTAL_DATA?.pinterest,a=e?.boards??[],n=e?.profile,c=a.map((l,o)=>{let g=G[o%G.length],m=l.cover?`<img class="pin-card__img" src="${i(l.cover)}" alt="${i(l.name)}" loading="lazy">`:`<div class="pin-card__ph" style="height:${g}px;background:${k(o)}">\u{1F4CC}</div>`;return`
    <a class="pin-card" href="https://www.pinterest.com/${i(n?.username||"diegonmarcos")}/${i(l.name.toLowerCase().replace(/[^a-z0-9]+/g,"-"))}/" target="_blank" rel="noopener">
      <div class="pin-card__media">
        ${m}
        <div class="pin-card__overlay"><span class="pin-card__save">${l.pins} pins</span></div>
      </div>
      <div class="pin-card__title">${i(l.name)}</div>
      ${l.desc?`<div class="pin-card__meta">${i(l.desc)}</div>`:`<div class="pin-card__meta">${l.pins} pins</div>`}
    </a>`}).join("");s.innerHTML=`
    <nav class="pin-nav">
      <div class="pin-nav__inner">
        <span class="pin-nav__logo">P</span>
        <a href="#" class="pin-nav__tab pin-nav__tab--active">Boards</a>
        <a href="https://www.pinterest.com/${i(n?.username||"diegonmarcos")}/" target="_blank" rel="noopener" class="pin-nav__tab">Profile</a>
        <div class="pin-nav__search"><input placeholder="Search for ideas"></div>
        <div class="pin-nav__icons">${z.bell}${z.chat}<span class="pin-nav__avatar" style="background:${_[3]}">D</span></div>
      </div>
    </nav>
    <div class="pin-head">@${i(n?.username||"diegonmarcos")} \xB7 <strong>${n?.boards??a.length}</strong> boards \xB7 <strong>${n?.pins??0}</strong> pins</div>
    <div class="pin-board">${c||'<p class="pin-empty">No boards.</p>'}</div>`}function de(){let s=document.getElementById("tid-view");if(!s)return;let e=globalThis.PORTAL_DATA?.tidal,a=e?.playlists??[],n=e?.profile,c=o=>{if(!o)return"";let g=Math.floor(o/3600),m=Math.round(o%3600/60);return g?`${g}h ${m}m`:`${m} min`},l=a.map((o,g)=>{let m=o.cover?`<img class="tid-card__img" src="${i(o.cover)}" alt="${i(o.name)}" loading="lazy">`:`<div class="tid-card__ph" style="background:${k(g)}">\u266B</div>`;return`
    <a class="tid-card" href="${i(o.url)}" target="_blank" rel="noopener">
      <div class="tid-card__cover">${m}<span class="tid-card__play">\u25B6</span></div>
      <div class="tid-card__name">${i(o.name)}</div>
      <div class="tid-card__meta">${o.tracks} tracks${o.duration_s?" \xB7 "+c(o.duration_s):""}</div>
    </a>`}).join("");s.innerHTML=`
    <nav class="tid-nav">
      <div class="tid-nav__inner">
        <span class="tid-nav__logo">TIDAL</span>
        <div class="tid-nav__search"><input placeholder="Search"></div>
        <span class="tid-nav__user">@${i(n?.username||"diegonmarcos")}</span>
      </div>
    </nav>
    <div class="tid-main">
      <header class="tid-head">
        <div class="tid-head__title">My Playlists</div>
        <div class="tid-head__sub">${n?.playlists??a.length} playlists \xB7 ${n?.tracks??0} tracks</div>
      </header>
      <div class="tid-grid">${l||'<p class="tid-empty">Playlists load once the Tidal profile ID is set.</p>'}</div>
    </div>`}var me={run:"\u{1F3C3}",ride:"\u{1F6B4}",swim:"\u{1F3CA}"};function ge(){let s=document.getElementById("str-view");if(!s)return;let e=globalThis.PORTAL_DATA?.strava,a=e?.activities??[],n=e?.profile,c=(o,g)=>g?`<div class="str-card__stat"><span class="str-card__stat-value">${i(g)}</span><span class="str-card__stat-label">${o}</span></div>`:"",l=a.map(o=>`
    <div class="str-card">
      <div class="str-card__header">
        <div class="str-card__icon">${me[o.type]||"\u{1F3C1}"}</div>
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
    </div>`).join("");s.innerHTML=`
    <nav class="str-nav">
      <div class="str-nav__inner">
        <span class="str-nav__logo">Strava</span>
        <div class="str-nav__search"><input placeholder="Search"></div>
        <span class="str-nav__user">${i(n?.name||"diegonmarcos")}</span>
      </div>
    </nav>
    <div class="str-main">
      <header class="str-head">
        <div>
          <div class="str-head__name">${i(n?.name||"Diego Nepomuceno Marcos")}</div>
        </div>
        <div class="str-head__stats">
          <div class="str-head__stat"><span class="str-head__stat-value">${n?.activities??a.length}</span><span class="str-head__stat-label">Activities</span></div>
          <div class="str-head__stat"><span class="str-head__stat-value">${n?.followers??0}</span><span class="str-head__stat-label">Followers</span></div>
          <div class="str-head__stat"><span class="str-head__stat-value">${n?.following??0}</span><span class="str-head__stat-label">Following</span></div>
        </div>
      </header>
      <div class="str-feed">${l||'<p class="str-empty">No activities yet. Strava data loads once the profile is exported.</p>'}</div>
    </div>`}function pe(){let s=document.getElementById("yt-view");if(!s)return;let e=globalThis.PORTAL_DATA?.youtube,a=e?.videos??[],n=e?.playlists??[],c=e?.profile,l=(d,u)=>{let p=d.thumbnail?`<img class="yt-card__img" src="${i(d.thumbnail)}" alt="${i(d.title)}" loading="lazy">`:`<div class="yt-card__ph" style="background:${k(u)}">\u25B6</div>`;return`
    <a class="yt-card" href="${i(d.url||"#")}" target="_blank" rel="noopener">
      <div class="yt-card__thumb">${p}${d.duration?`<span class="yt-card__duration">${i(d.duration)}</span>`:""}</div>
      <div class="yt-card__title">${i(d.title)}</div>
      ${d.channel?`<div class="yt-card__channel">${i(d.channel)}</div>`:""}
      <div class="yt-card__meta">${d.views!==void 0?`${d.views.toLocaleString()} views`:""}${d.views!==void 0&&d.date?" \xB7 ":""}${d.date?i(d.date):""}</div>
    </a>`},o=n.map(d=>`
    <section class="yt-shelf">
      <div class="yt-shelf__title">${i(d.name)}</div>
      <div class="yt-shelf__row">${d.videos.map((u,p)=>l(u,p)).join("")}</div>
    </section>`).join(""),g=a.length?`<div class="yt-grid">${a.map((d,u)=>l(d,u)).join("")}</div>`:"",m=n.length||a.length;s.innerHTML=`
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
          <div class="yt-head__sub">${c?.subscribers??0} subscribers \xB7 ${c?.videos??a.length} videos</div>
        </div>
      </header>
      ${m?`${o}${g}`:'<p class="yt-empty">No videos or playlists yet. YouTube data loads once the channel is scraped.</p>'}
    </div>`}var D=(s=!1)=>{let e=s?"#c7cbb9":"#8fbf3f",a=s?"#c7cbb9":"#ef4a2b",n=s?"#e4e4d8":"#ffd400",c=s?"#9a9d90":"#1a1a12";return`<svg class="icq-flower" viewBox="0 0 16 16" aria-hidden="true">${Array.from({length:8},(o,g)=>{let m=g*45;return`<ellipse cx="8" cy="2.9" rx="1.9" ry="2.9" fill="${g===0?a:e}" stroke="${c}" stroke-width="0.5" transform="rotate(${m} 8 8)"/>`}).join("")}<circle cx="8" cy="8" r="2.4" fill="${n}" stroke="${c}" stroke-width="0.5"/></svg>`};var Y={online:!1,away:!1,dnd:!1,offline:!0};function ve(){let s=document.getElementById("icq-view");if(!s)return;let e=globalThis.PORTAL_DATA||{},a=e.linkedin,n=e.instagram,c=a?.profile.name||"Diego Nepomuceno Marcos",l=n?.profile.username||"diegonmarcos",o=c.split(" ")[0],g=c.split(" ").slice(1).join(" "),m=(a?.profile.location||"Berlin, Germany").split(",").map(t=>t.trim()),d=m[0]||"",u=m[m.length-1]||"",p=a?.experience?.[0],y=a?.about||n?.profile.bio||"",r=a?.skills||[],$=a?.languages||[],w="184-042-518",x=["online","online","away","online","dnd","away","offline","offline","offline"],S=V.map((t,v)=>({...t,status:x[v%x.length]})),E=S.filter(t=>t.status!=="offline"),T=S.filter(t=>t.status==="offline"),M=t=>`<li class="icq-contact">${D(Y[t.status])}<span>${i(t.name)}</span></li>`,h=(t,v)=>v?`<div class="icq-field"><span class="icq-field__k">${i(t)}</span><span class="icq-field__v">${i(v)}</span></div>`:"",q=[{id:"main",label:"Main",body:`
        ${h("Nickname",l)}
        ${h("First Name",o)}
        ${h("Last Name",g)}
        ${h("ICQ#",w)}
        ${h("Email","me@diegonmarcos.com")}
        ${h("Headline",a?.profile.headline||"")}`},{id:"home",label:"Home",body:`
        ${h("City",d)}
        ${h("Country",u)}
        ${h("Homepage",a?.profile.url||"linktree.diegonmarcos.com")}
        ${$.length?`<div class="icq-field"><span class="icq-field__k">Languages</span><span class="icq-field__v">${$.map(t=>i(t.name)).join(", ")}</span></div>`:""}`},{id:"work",label:"Work",body:p?`
        ${h("Company",p.company)}
        ${h("Title",p.title)}
        ${h("Since",p.dates)}
        ${h("Location",p.location||"")}`:'<p class="icq-empty">No work info.</p>'},{id:"about",label:"About",body:y?`<p class="icq-about">${i(y)}</p>`:'<p class="icq-empty">No about info.</p>'},{id:"interests",label:"Interests",body:r.length?`<div class="icq-interests">${r.map(t=>`<span class="icq-chip">${i(t)}</span>`).join("")}</div>`:'<p class="icq-empty">No interests listed.</p>'}],A='<span class="icq-win__btns"><i>_</i><i>\u25A1</i><i>\u2715</i></span>';s.innerHTML=`
    <div class="icq-desk">
      <!-- Contact list window -->
      <div class="icq-win icq-win--list">
        <div class="icq-win__bar">${D("#ffffff")}<span class="icq-win__title">ICQ</span>${A}</div>
        <div class="icq-list">
          <div class="icq-group icq-group--online">Online (${E.length})</div>
          <ul>${E.map(M).join("")}</ul>
          <div class="icq-group icq-group--offline">Offline (${T.length})</div>
          <ul>${T.map(M).join("")}</ul>
        </div>
        <div class="icq-list__foot">${D(Y.online)}<span>Online</span><span class="icq-uin">#${w}</span></div>
      </div>

      <!-- User details window -->
      <div class="icq-win icq-win--details">
        <div class="icq-win__bar icq-win__bar--alt">${D("#ffffff")}<span class="icq-win__title">User Details \u2014 ${i(l)}</span>${A}</div>
        <div class="icq-detail">
          <div class="icq-detail__head">
            <div class="icq-detail__avatar">${i(O(c))}</div>
            <div>
              <div class="icq-detail__name">${i(c)}</div>
              <div class="icq-detail__nick">"${i(l)}" \xB7 #${w}</div>
            </div>
          </div>
          <div class="icq-tabs">
            ${q.map((t,v)=>`<button class="icq-tab${v===0?" is-active":""}" data-icq-pane="${t.id}">${t.label}</button>`).join("")}
          </div>
          ${q.map((t,v)=>`<div class="icq-pane${v===0?" is-active":""}" data-icq-pane="${t.id}">${t.body}</div>`).join("")}
        </div>
      </div>
    </div>`,s.querySelectorAll(".icq-tab").forEach(t=>{t.addEventListener("click",()=>{let v=t.dataset.icqPane;s.querySelectorAll(".icq-tab").forEach(f=>f.classList.toggle("is-active",f===t)),s.querySelectorAll(".icq-pane").forEach(f=>f.classList.toggle("is-active",f.dataset.icqPane===v))})})}function ue(){let s=document.getElementById("me-view");if(!s)return;let e=globalThis.PORTAL_DATA||{},a=e.instagram,n=e.linkedin,c=n?.profile.name||a?.profile.name||"Diego Nepomuceno Marcos",l=n?.profile.headline||"",o=n?.profile.location||"",g=a?.profile.bio||"",m=globalThis.PORTAL_DATA?.tidal,d=[{theme:"linkedin",label:"LinkedIn",meta:n?`${n.profile.connections} connections \xB7 ${n.profile.followers.toLocaleString()} followers`:"profile",color:"#0a66c2"},{theme:"instagram",label:"Instagram",meta:a?`${a.profile.followers.toLocaleString()} followers \xB7 ${a.profile.posts} post${a.profile.posts===1?"":"s"}`:"profile",color:"#dc2743"},{theme:"pinterest",label:"Pinterest",meta:"boards & pins",color:"#e60023"},{theme:"tidal",label:"TIDAL",meta:m?`${m.profile.playlists} playlists`:"playlists",color:"#00ffff"},{theme:"strava",label:"Strava",meta:"activities & routes",color:"#fc5200"},{theme:"youtube",label:"YouTube",meta:"playlists & videos",color:"#ff0000"},{theme:"orkut",label:"Orkut",meta:"the classic profile",color:"#e9008c"},{theme:"icq",label:"ICQ",meta:"retro IM \xB7 user details",color:"#0a870a"}];s.innerHTML=`
    <div class="me-hub">
      <div class="me-card">
        <div class="me-avatar"></div>
        <h1 class="me-name">${i(c)}</h1>
        ${l?`<p class="me-headline">${i(l)}</p>`:""}
        ${o?`<p class="me-loc">${i(o)}</p>`:""}
        ${g?`<p class="me-bio">${i(g)}</p>`:""}
      </div>
      <div class="me-links">
        ${d.map(u=>`
          <button class="me-link" data-goto="${u.theme}" style="--accent:${u.color}">
            <span class="me-link__dot"></span>
            <span class="me-link__body">
              <span class="me-link__name">${u.label}</span>
              <span class="me-link__meta">${i(u.meta)}</span>
            </span>
            <span class="me-link__arrow">\u2192</span>
          </button>`).join("")}
      </div>
    </div>`,s.querySelectorAll(".me-link").forEach(u=>u.addEventListener("click",()=>Q(u.dataset.goto)))}var _e=["myprofile","orkut","instagram","linkedin","pinterest","tidal","strava","youtube","icq"];function he(s){return s==="myprofile"?"./":`${s}.html`}function P(s){document.documentElement.setAttribute("data-theme",s),document.querySelectorAll("[data-theme-btn]").forEach(e=>{e.classList.toggle("is-active",e.dataset.themeBtn===s)}),window.scrollTo(0,0)}function Q(s,e=!0){P(s),e&&history.pushState({theme:s},"",he(s))}function fe(){let s=document.documentElement.dataset.theme||"myprofile";P(_e.includes(s)?s:"myprofile"),document.querySelectorAll("[data-theme-btn]").forEach(e=>{e.addEventListener("click",()=>Q(e.dataset.themeBtn))}),window.addEventListener("popstate",e=>{let a=e.state?.theme||"myprofile";P(a)})}function U(){ee(),ae(),se(),ie(),te(),le(),re(),ce(),de(),ge(),pe(),ve(),ue(),fe(),setTimeout(()=>{document.querySelectorAll(".trust-meter__fill").forEach(s=>{s.style.transition="width 1.2s cubic-bezier(0.16, 1, 0.3, 1)"})},300)}async function W(){let s=document.getElementById("theme-switch"),e=[...document.querySelectorAll("[data-theme-btn]")],a=document.documentElement.dataset.theme??"";e.find(u=>u.dataset.themeBtn!==a)?.click();let c=document.documentElement.dataset.theme!==a;c&&a&&P(a);let l="none",o=[],g={};try{l=navigator.serviceWorker?.controller?.scriptURL??"none",o=(await navigator.serviceWorker?.getRegistrations?.()??[]).map(p=>[p.installing&&"installing",p.waiting&&"waiting",p.active&&`active:${p.active.scriptURL}`].filter(Boolean).join(","));for(let p of await caches.keys())g[p]=(await(await caches.open(p)).keys()).length}catch{}let m="n/a";if(s){let u=s.getBoundingClientRect(),p=document.elementFromPoint(u.left+u.width/2,u.top+u.height/2);m=`<${p?.tagName}.${(p?.className||"").toString().trim()}> inNav:${s.contains(p)}`}let d={url:location.href,theme:document.documentElement.dataset.theme,navButtons:e.length,navWired:c,swController:l,swRegistrations:o,caches:g,navHitTest:m,ua:navigator.userAgent};return console.info("[mySocials debug]",JSON.stringify(d)),d}window.__debugReport=W;document.readyState==="loading"?document.addEventListener("DOMContentLoaded",U):U();(/\bdebug\b/.test(location.search)||/\bdebug\b/.test(location.hash))&&setTimeout(()=>{W()},500);})();
