(()=>{var _=["#e8508a","#4a8aff","#3abb78","#8a6aff","#ff8a4a","#4ac0ff","#ff4a8a","#50c878","#ffa040","#8080ff","#ff6060","#40c0c0","#c060ff","#ff9060","#60b0ff"],Y=[{name:"Ana Silva",initial:"A",color:_[0]},{name:"Bruno Costa",initial:"B",color:_[1]},{name:"Carla Souza",initial:"C",color:_[2]},{name:"Daniel Lima",initial:"D",color:_[3]},{name:"Elena Torres",initial:"E",color:_[4]},{name:"Felipe Gomes",initial:"F",color:_[5]},{name:"Gabi Santos",initial:"G",color:_[6]},{name:"Hugo Pereira",initial:"H",color:_[7]},{name:"Isa Oliveira",initial:"I",color:_[8]}],W=[{author:"Ana Silva",initial:"A",color:_[0],text:"Hey Diego! Miss our coding sessions at the uni. We should catch up soon! Saudades demais!",time:"2 hours ago"},{author:"Bruno Costa",initial:"B",color:_[1],text:"Cara, vi que voce ta morando em Berlin agora! Que top! Vamos marcar uma call?",time:"5 hours ago"},{author:"Carla Souza",initial:"C",color:_[2],text:"Happy birthday atrasado!! Hope you had an amazing day. Your projects are looking incredible btw",time:"yesterday"},{author:"Felipe Gomes",initial:"F",color:_[5],text:"Mano, teu MyMaps ta INSANO. Lembra quando a gente fazia mapa no paint? kkkk Evoluimos!",time:"2 days ago"},{author:"Gabi Santos",initial:"G",color:_[6],text:'Diego!! Join our community "Linux Users Brazil" please! We need more devs like you there',time:"3 days ago"},{author:"Hugo Pereira",initial:"H",color:_[7],text:"Saw your Strava activities... beast mode! When did you start cycling?",time:"4 days ago"},{author:"Isa Oliveira",initial:"I",color:_[8],text:"Testimonial request sent! You were the best partner for the compiler project, forever grateful",time:"1 week ago"}],J=[{name:"Eu odeio acordar cedo",members:1247893,emoji:"\u{1F634}",color:"#8a6aff"},{name:"NixOS Brasil",members:3420,emoji:"\u2744\uFE0F",color:"#4a8aff"},{name:"Linux Users",members:89340,emoji:"\u{1F427}",color:"#3abb78"},{name:"Cycling Addicts",members:45200,emoji:"\u{1F6B4}",color:"#ff8a4a"},{name:"Self-hosted Everything",members:12800,emoji:"\u{1F5A5}\uFE0F",color:"#4ac0ff"},{name:"Saudades do Orkut",members:892340,emoji:"\u{1F62D}",color:"#e8508a"},{name:"Maps & Geography",members:23100,emoji:"\u{1F30D}",color:"#50c878"},{name:"Berlin Brasileiros",members:8900,emoji:"\u{1F1E7}\u{1F1F7}",color:"#ffa040"},{name:"Coffee > Sleep",members:456e3,emoji:"\u2615",color:"#c08040"}],K=[{author:"Ana Silva",date:"Dec 2023",text:"Diego is one of those rare people who can debug your code AND your life. An incredible friend, always there when you need help. 10/10 would add as friend again."},{author:"Bruno Costa",date:"Nov 2023",text:"Known Diego since university. The guy literally automated everything in his life with NixOS. Respect the dedication. Best engineer I know, no cap."},{author:"Carla Souza",date:"Oct 2023",text:"The most creative developer I have ever worked with. His projects are not just functional, they are beautiful. An artist disguised as an engineer."},{author:"Elena Torres",date:"Sep 2023",text:"Diego helped me set up my entire self-hosted infrastructure. Refused to let me use any cloud subscription. A true freedom fighter of the internet!"}],C=["#1a2840","#2a1840","#182838","#281828","#1a3028","#302818","#201838","#283018","#381828"];function X(){let i=document.getElementById("friends-grid");i&&Y.forEach(e=>{let a=document.createElement("div");a.className="friend-cell",a.innerHTML=`
      <div class="friend-cell__avatar">
        <div class="friend-cell__avatar-inner" style="background:${e.color}">${e.initial}</div>
      </div>
      <span class="friend-cell__name">${e.name.split(" ")[0]}</span>
    `,i.appendChild(a)})}function Z(){let i=document.getElementById("scraps-list");i&&W.forEach(e=>{let a=document.createElement("div");a.className="scrap",a.innerHTML=`
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
    `,i.appendChild(a)})}function ee(){let i=document.getElementById("communities-grid");i&&J.forEach(e=>{let a=document.createElement("a");a.href="#",a.className="community-card";let n=e.members>=1e6?`${(e.members/1e6).toFixed(1)}M members`:e.members>=1e3?`${(e.members/1e3).toFixed(0)}K members`:`${e.members} members`;a.innerHTML=`
      <div class="community-card__icon" style="background:${e.color}20;color:${e.color}">${e.emoji}</div>
      <div class="community-card__body">
        <span class="community-card__name">${e.name}</span>
        <span class="community-card__members">${n}</span>
      </div>
    `,i.appendChild(a)})}function ae(){let i=document.getElementById("testimonials-list");i&&K.forEach(e=>{let a=document.createElement("div");a.className="testimonial",a.innerHTML=`
      <div class="testimonial__header">
        <span class="testimonial__author">${e.author}</span>
        <span class="testimonial__date">${e.date}</span>
      </div>
      <p class="testimonial__text">${e.text}</p>
    `,i.appendChild(a)})}function se(){let i=document.getElementById("photo-grid");if(i)for(let e=0;e<9;e++){let a=document.createElement("div");a.className="photo-cell",a.innerHTML=`<div class="photo-cell__inner" style="background:${C[e%C.length]}"></div>`,i.appendChild(a)}}var b={heart:'<svg viewBox="0 0 24 24"><path d="M20.8 4.6a5.5 5.5 0 0 0-7.8 0L12 5.6l-1-1a5.5 5.5 0 0 0-7.8 7.8l1 1L12 21l7.8-7.6 1-1a5.5 5.5 0 0 0 0-7.8z"/></svg>',comment:'<svg viewBox="0 0 24 24"><path d="M21 11.5a8.4 8.4 0 0 1-9 8.4 9 9 0 0 1-4-1L3 20l1.1-4.9A8.4 8.4 0 0 1 12 3a8.4 8.4 0 0 1 9 8.5z"/></svg>',share:'<svg viewBox="0 0 24 24"><line x1="22" y1="2" x2="11" y2="13"/><polygon points="22 2 15 22 11 13 2 9 22 2"/></svg>',save:'<svg viewBox="0 0 24 24"><path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"/></svg>',home:'<svg viewBox="0 0 24 24"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/></svg>',grid:'<svg viewBox="0 0 24 24"><rect x="3" y="3" width="18" height="18" rx="2"/><line x1="9" y1="3" x2="9" y2="21"/><line x1="15" y1="3" x2="15" y2="21"/><line x1="3" y1="9" x2="21" y2="9"/><line x1="3" y1="15" x2="21" y2="15"/></svg>',reels:'<svg viewBox="0 0 24 24"><rect x="3" y="3" width="18" height="18" rx="3"/><line x1="3" y1="8" x2="21" y2="8"/><line x1="8" y1="3" x2="10" y2="8"/><line x1="14" y1="3" x2="16" y2="8"/><polygon points="10 11 15 13.5 10 16" fill="currentColor" stroke="none"/></svg>',tagged:'<svg viewBox="0 0 24 24"><rect x="3" y="3" width="18" height="18" rx="3"/><circle cx="12" cy="10" r="3"/><path d="M7 18a5 5 0 0 1 10 0"/></svg>'};function A(i){let e=C[i%C.length],a=_[i%_.length];return`linear-gradient(135deg, ${e}, ${a})`}function s(i){return i.replace(/[&<>"]/g,e=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"})[e])}function ie(i){let e=0;for(let a=0;a<i.length;a++)e=e*31+i.charCodeAt(a)>>>0;return _[e%_.length]}var B=["ana","bruno","carla","diego","elena","felipe","gabi","hugo","isa","joao","lu","marco","nina","otto","paula","rafa","sofia","tiago","vera","yara"],H=["","_",".","__"],P=["","br","berlin","photo","travel","x","oficial","real","99","mrx","gram"];function te(i,e){let a=i.slice();for(let n=0;a.length<e;n++){let c=B[n%B.length],r=H[(n>>2)%H.length],l=P[(n>>1)%P.length],d=Math.floor(n/(B.length*H.length)),v=`${c}${r}${l}${d>0?d:""}`;a.includes(v)?a.push(`${v}${a.length}`):a.push(v)}return a}function ne(){let i=document.getElementById("ig-view");if(!i)return;let e=globalThis.PORTAL_DATA?.instagram;if(!e){i.innerHTML='<p class="ig-empty">Instagram data not loaded.</p>';return}let a=e.profile,n=t=>t.toLocaleString(),c=e.stories.map((t,g)=>`
    <div class="ig-hl">
      <div class="ig-hl__ring"><div class="ig-hl__avatar"><img src="${t.media}" alt="story ${g+1}"></div></div>
      <span class="ig-hl__name">${s(t.caption||"Story")}</span>
    </div>`),r=(e.highlights||[]).map((t,g)=>`
    <div class="ig-hl">
      <div class="ig-hl__ring"><div class="ig-hl__avatar" style="background:${A(g)}"><span class="ig-hl__emoji">${t.emoji}</span></div></div>
      <span class="ig-hl__name">${s(t.label)}</span>
    </div>`),l=[...c,...r].join(""),d=(t,g)=>`
    <a class="ig-tile" href="${s(t.url)}" target="_blank" rel="noopener" style="background:${A(t.url.length)}">
      <span class="ig-tile__cap">${s(t.caption||t.url.replace("https://www.instagram.com/",""))}</span>
      <span class="ig-tile__badge">${g}</span>
    </a>`,v=e.saved.length?e.saved.map(t=>d(t,"\u{1F516}")).join(""):'<p class="ig-empty">Nothing saved.</p>',m=e.liked.length?e.liked.map(t=>d(t,"\u2764\uFE0F")).join(""):'<p class="ig-empty">No likes.</p>',f=30,p=[...e.saved,...e.liked].map(t=>t.caption).filter(Boolean),T=e.posts.map(t=>`<a class="ig-tile" href="#"><img src="${t.media}" alt="post"></a>`),L=Array.from({length:Math.max(0,f-T.length)},(t,g)=>`
    <a class="ig-tile ig-tile--post" href="#" style="background:${A(g)}">
      <span class="ig-tile__cap">${s(p[g%(p.length||1)]||"")}</span>
    </a>`),x=T.length||L.length?[...T,...L].join(""):'<p class="ig-empty">No posts yet.</p>',k='<svg class="ig-tile__ov" viewBox="0 0 24 24"><polygon points="10 8 16 12 10 16 10 8" fill="currentColor" stroke="none"/></svg>',o=Array.from({length:12},(t,g)=>`
    <a class="ig-tile ig-tile--post" href="#" style="background:${A(g+5)}">${k}
      <span class="ig-tile__cap">${s(p[(g+2)%(p.length||1)]||"")}</span>
    </a>`).join(""),$=Array.from({length:9},(t,g)=>`
    <a class="ig-tile ig-tile--post" href="#" style="background:${A(g+9)}">
      <span class="ig-tile__badge">@${s(a.username)}</span>
    </a>`).join(""),y=e.comments.length?e.comments.map(t=>`
      <div class="ig-comment">
        <div class="ig-comment__text">${s(t.text)}</div>
        <div class="ig-comment__meta">${t.owner?"@"+s(t.owner)+" \xB7 ":""}${s(t.time||"")}</div>
      </div>`).join(""):'<p class="ig-empty">No comments.</p>',w=t=>`<div class="ig-grid">${t}</div>`,S=e.posts[0]?.media?`<img class="ig-head__avatar" src="${e.posts[0].media}" alt="${s(a.username)}">`:'<div class="ig-head__avatar"></div>';i.innerHTML=`
    <nav class="ig-nav">
      <div class="ig-nav__inner">
        <a href="#" class="ig-nav__logo">My Socials</a>
        <div class="ig-nav__search"><input placeholder="Search"></div>
        <div class="ig-nav__icons">${b.home}${b.heart}${b.comment}${b.share}</div>
      </div>
    </nav>
    <div class="ig-page">
      <header class="ig-head">
        <div class="ig-head__user">${s(a.username)}</div>
        <div class="ig-head__row">
          ${S}
          <div class="ig-head__stats">
            <div class="ig-head__stat"><strong>${n(a.posts)}</strong><span>posts</span></div>
            <div class="ig-head__stat" data-modal="followers"><strong>${n(a.followers)}</strong><span>followers</span></div>
            <div class="ig-head__stat" data-modal="following"><strong>${n(a.following)}</strong><span>following</span></div>
          </div>
        </div>
        <div class="ig-head__name">${s(a.name)}</div>
        <div class="ig-head__bio">${s(a.bio)}</div>
        <div class="ig-head__actions">
          <span class="ig-head__btn ig-head__btn--primary">Follow</span>
          <span class="ig-head__btn">Message</span>
        </div>
      </header>

      ${l?`<div class="ig-highlights">${l}</div>`:""}

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

      <div class="ig-pane is-active" data-pane="posts">${w(x)}</div>
      <div class="ig-pane" data-pane="reels">${w(o)}</div>
      <div class="ig-pane" data-pane="tagged">${w($)}</div>
      <div class="ig-pane" data-pane="saved">${w(v)}</div>
      <div class="ig-pane" data-pane="liked">${w(m)}</div>
      <div class="ig-pane" data-pane="comments"><div class="ig-comments">${y}</div></div>
    </div>

    <div class="ig-modal" id="ig-modal">
      <div class="ig-modal__box">
        <div class="ig-modal__head">
          <small id="ig-modal-sub"></small><h3 id="ig-modal-title"></h3>
          <button id="ig-modal-close" aria-label="Close">&times;</button>
        </div>
        <div class="ig-modal__list" id="ig-modal-list"></div>
      </div>
    </div>`,i.querySelectorAll(".ig-tab, .ig-pill").forEach(t=>{t.addEventListener("click",()=>{let g=t.dataset.pane;i.querySelectorAll(".ig-tab, .ig-pill").forEach(h=>h.classList.toggle("is-active",h===t)),i.querySelectorAll(".ig-pane").forEach(h=>h.classList.toggle("is-active",h.dataset.pane===g))})});let u=i.querySelector("#ig-modal"),q=t=>{let g=t==="followers"?e.followers:e.following,h=t==="followers"?a.followers:a.following,Q=te(g,h);i.querySelector("#ig-modal-title").textContent=t==="followers"?"Followers":"Following",i.querySelector("#ig-modal-sub").textContent=`${n(h)} ${t}`,i.querySelector("#ig-modal-list").innerHTML=Q.map(I=>`
      <div class="ig-row">
        <div class="ig-row__avatar" style="background:${ie(I)}">${s(I.charAt(0).toUpperCase())}</div>
        <a class="ig-row__handle" href="https://www.instagram.com/${s(I)}" target="_blank" rel="noopener">${s(I)}</a>
        <span class="ig-row__follow">Follow</span>
      </div>`).join(""),u.classList.add("is-open")};i.querySelectorAll(".ig-head__stat[data-modal]").forEach(t=>t.addEventListener("click",()=>q(t.dataset.modal)));let E=()=>u.classList.remove("is-open");i.querySelector("#ig-modal-close").addEventListener("click",E),u.addEventListener("click",t=>{t.target===u&&E()})}var M={home:'<svg viewBox="0 0 24 24"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/></svg>',net:'<svg viewBox="0 0 24 24"><circle cx="9" cy="7" r="4"/><path d="M17 11a4 4 0 1 0-3-6.6M1 21v-2a4 4 0 0 1 4-4h8a4 4 0 0 1 4 4v2M17 15a4 4 0 0 1 4 4v2"/></svg>',jobs:'<svg viewBox="0 0 24 24"><rect x="2" y="7" width="20" height="14" rx="2"/><path d="M8 7V5a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"/></svg>',msg:'<svg viewBox="0 0 24 24"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>',bell:'<svg viewBox="0 0 24 24"><path d="M18 8a6 6 0 1 0-12 0c0 7-3 9-3 9h18s-3-2-3-9M13.7 21a2 2 0 0 1-3.4 0"/></svg>',like:'<svg viewBox="0 0 24 24"><path d="M14 9V5a3 3 0 0 0-6 0v4H5a2 2 0 0 0-2 2l1 7a2 2 0 0 0 2 2h9a2 2 0 0 0 2-2l1-7a2 2 0 0 0-2-2z"/></svg>',comment:'<svg viewBox="0 0 24 24"><path d="M21 11.5a8.4 8.4 0 0 1-9 8.4 9 9 0 0 1-4-1L3 20l1.1-4.9A8.4 8.4 0 0 1 12 3a8.4 8.4 0 0 1 9 8.5z"/></svg>',repost:'<svg viewBox="0 0 24 24"><polyline points="17 1 21 5 17 9"/><path d="M3 11V9a4 4 0 0 1 4-4h14M7 23l-4-4 4-4M21 13v2a4 4 0 0 1-4 4H3"/></svg>',send:'<svg viewBox="0 0 24 24"><line x1="22" y1="2" x2="11" y2="13"/><polygon points="22 2 15 22 11 13 2 9 22 2"/></svg>'};function V(i){return i.split(/\s+/).filter(Boolean).slice(0,2).map(e=>e.charAt(0).toUpperCase()).join("")}function O(i){return i.split(/\s*---\s*/).map(e=>e.trim()).filter(Boolean).map(e=>{let a=e.match(/^(@\S[\s\S]*?)\s{2,}([\s\S]*)$/),n=a?a[1].trim():"",c=(a?a[2]:e).split(/\s{2,}/).map(r=>s(r.trim())).filter(Boolean).join("<br>");return`<p class="li-para">${n?`<strong class="li-para__head">${s(n)}</strong>`:""}${c}</p>`}).join("")}function R(i){return`<div class="li-longtext"><div class="li-clamp">${i}</div><button class="li-more" type="button">\u2026see more</button></div>`}function le(){let i=document.getElementById("li-view");if(!i)return;let e=globalThis.PORTAL_DATA?.linkedin;if(!e){i.innerHTML='<p class="li-empty">LinkedIn data not loaded.</p>';return}let a=e.profile,n=(o,$)=>`<div class="li-nav__item">${o}<span>${$}</span></div>`,c=globalThis.PORTAL_DATA?.instagram?.posts?.[0]?.media,r=a.photo||c,l=r?`<div class="li-phead__avatar li-phead__avatar--img"><img src="${r}" alt="${s(a.name)}"></div>`:`<div class="li-phead__avatar" style="background:${_[3]}">${s(V(a.name))}</div>`,d=(o,$)=>`<section class="li-card li-section"><h2 class="li-section__title">${o}</h2>${$}</section>`,v='<p class="li-need">Not in the saved profile page \u2014 add from your LinkedIn data export (Settings \u2192 Get a copy of your data).</p>',m=e.experience.length?e.experience.map(o=>`
      <div class="li-item">
        <div class="li-item__logo">${s(o.company.charAt(0))}</div>
        <div>
          <div class="li-item__title">${s(o.title)}</div>
          <div class="li-item__sub">${s(o.company)}</div>
          <div class="li-item__meta">${s(o.dates)}${o.location?" \xB7 "+s(o.location):""}</div>
        </div>
      </div>`).join(""):v,f=e.education.length?e.education.map(o=>`
      <div class="li-item">
        <div class="li-item__logo">${s(o.school.charAt(0))}</div>
        <div>
          <div class="li-item__title">${s(o.school)}</div>
          <div class="li-item__sub">${s(o.degree)}</div>
          <div class="li-item__meta">${s(o.dates)}</div>
        </div>
      </div>`).join(""):v,p=e.skills.length?`<div class="li-skills">${e.skills.map(o=>`<span class="li-skill">${s(o)}</span>`).join("")}</div>`:v,T=e.about?`<div class="li-about">${R(O(e.about))}</div>`:v,L=e.languages.length?e.languages.map(o=>`
      <div class="li-lang">
        <span class="li-lang__name">${s(o.name)}</span>
        <span class="li-lang__level">${s(o.proficiency)}</span>
      </div>`).join(""):v,x=e.projects.length?e.projects.map(o=>`
      <div class="li-item li-item--proj">
        <div>
          <div class="li-item__title">${s(o.title)}${o.url?` \xB7 <a href="${s(o.url)}" target="_blank" rel="noopener">link</a>`:""}</div>
          ${o.dates?`<div class="li-item__meta">${s(o.dates)}</div>`:""}
          <div class="li-item__desc">${R(O(o.description))}</div>
        </div>
      </div>`).join(""):v;i.innerHTML=`
    <nav class="li-nav">
      <div class="li-nav__inner">
        <span class="li-nav__logo">in</span>
        <div class="li-nav__search"><input placeholder="Search"></div>
        <div class="li-nav__items">
          ${n(M.home,"Home")}
          ${n(M.net,"Network")}
          ${n(M.jobs,"Jobs")}
          ${n(M.msg,"Messaging")}
          ${n(M.bell,"Notifications")}
        </div>
      </div>
    </nav>
    <div class="li-prof">
      <div class="li-prof__main">
        <section class="li-card li-phead">
          <div class="li-phead__banner"></div>
          ${l}
          <div class="li-phead__body">
            <h1 class="li-phead__name">${s(a.name)}</h1>
            <p class="li-phead__headline">${s(a.headline)}</p>
            <p class="li-phead__loc">${s(a.location)} \xB7 <a href="https://${s(a.url)}" target="_blank" rel="noopener">Contact info</a></p>
            <p class="li-phead__meta"><strong>${a.connections}</strong> connections \xB7 <strong>${a.followers.toLocaleString()}</strong> followers</p>
            ${a.open_to_work?`<div class="li-phead__open"><strong>Open to work</strong><br>${s(a.open_to_work)}</div>`:""}
            <div class="li-phead__actions">
              <button class="li-btn li-btn--primary">Connect</button>
              <button class="li-btn">Message</button>
              <button class="li-btn">More</button>
            </div>
          </div>
        </section>
        ${d("About",T)}
        ${d("Experience",m)}
        ${d("Education",f)}
        ${d("Skills",p)}
        ${d("Projects",x)}
        ${d("Languages",L)}
      </div>
      <aside class="li-prof__rail">
        <div class="li-card li-side">
          <div class="li-side__title">Profile</div>
          <div class="li-side__row"><span>Current</span><strong>${s(a.current)}</strong></div>
          <div class="li-side__row"><span>Location</span><strong>${s(a.location.split(",")[0])}</strong></div>
          <div class="li-side__row"><span>Profile</span><a href="https://${s(a.url)}" target="_blank" rel="noopener">${s(a.url)}</a></div>
        </div>
      </aside>
    </div>`;let k=220;i.querySelectorAll(".li-longtext").forEach(o=>{let $=o.querySelector(".li-clamp"),y=o.querySelector(".li-more");if(($.textContent||"").trim().length<=k){y.style.display="none";return}y.style.display="",y.textContent="\u2026see more",y.addEventListener("click",()=>{let S=$.classList.toggle("is-expanded");y.textContent=S?"see less":"\u2026see more"})})}var N={bell:'<svg viewBox="0 0 24 24"><path d="M18 8a6 6 0 1 0-12 0c0 7-3 9-3 9h18s-3-2-3-9M13.7 21a2 2 0 0 1-3.4 0"/></svg>',chat:'<svg viewBox="0 0 24 24"><path d="M21 11.5a8.4 8.4 0 0 1-9 8.4 9 9 0 0 1-4-1L3 20l1.1-4.9A8.4 8.4 0 0 1 12 3a8.4 8.4 0 0 1 9 8.5z"/></svg>'},F=[220,300,180,340,260,200,320,240,280];function oe(){let i=document.getElementById("pin-view");if(!i)return;let e=globalThis.PORTAL_DATA?.pinterest,a=e?.boards??[],n=e?.profile,c=a.map((r,l)=>{let d=F[l%F.length],v=r.cover?`<img class="pin-card__img" src="${s(r.cover)}" alt="${s(r.name)}" loading="lazy">`:`<div class="pin-card__ph" style="height:${d}px;background:${A(l)}">\u{1F4CC}</div>`;return`
    <a class="pin-card" href="https://www.pinterest.com/${s(n?.username||"diegonmarcos")}/${s(r.name.toLowerCase().replace(/[^a-z0-9]+/g,"-"))}/" target="_blank" rel="noopener">
      <div class="pin-card__media">
        ${v}
        <div class="pin-card__overlay"><span class="pin-card__save">${r.pins} pins</span></div>
      </div>
      <div class="pin-card__title">${s(r.name)}</div>
      ${r.desc?`<div class="pin-card__meta">${s(r.desc)}</div>`:`<div class="pin-card__meta">${r.pins} pins</div>`}
    </a>`}).join("");i.innerHTML=`
    <nav class="pin-nav">
      <div class="pin-nav__inner">
        <span class="pin-nav__logo">P</span>
        <a href="#" class="pin-nav__tab pin-nav__tab--active">Boards</a>
        <a href="https://www.pinterest.com/${s(n?.username||"diegonmarcos")}/" target="_blank" rel="noopener" class="pin-nav__tab">Profile</a>
        <div class="pin-nav__search"><input placeholder="Search for ideas"></div>
        <div class="pin-nav__icons">${N.bell}${N.chat}<span class="pin-nav__avatar" style="background:${_[3]}">D</span></div>
      </div>
    </nav>
    <div class="pin-head">@${s(n?.username||"diegonmarcos")} \xB7 <strong>${n?.boards??a.length}</strong> boards \xB7 <strong>${n?.pins??0}</strong> pins</div>
    <div class="pin-board">${c||'<p class="pin-empty">No boards.</p>'}</div>`}function re(){let i=document.getElementById("tid-view");if(!i)return;let e=globalThis.PORTAL_DATA?.tidal,a=e?.playlists??[],n=e?.profile,c=l=>{if(!l)return"";let d=Math.floor(l/3600),v=Math.round(l%3600/60);return d?`${d}h ${v}m`:`${v} min`},r=a.map((l,d)=>{let v=l.cover?`<img class="tid-card__img" src="${s(l.cover)}" alt="${s(l.name)}" loading="lazy">`:`<div class="tid-card__ph" style="background:${A(d)}">\u266B</div>`;return`
    <a class="tid-card" href="${s(l.url)}" target="_blank" rel="noopener">
      <div class="tid-card__cover">${v}<span class="tid-card__play">\u25B6</span></div>
      <div class="tid-card__name">${s(l.name)}</div>
      <div class="tid-card__meta">${l.tracks} tracks${l.duration_s?" \xB7 "+c(l.duration_s):""}</div>
    </a>`}).join("");i.innerHTML=`
    <nav class="tid-nav">
      <div class="tid-nav__inner">
        <span class="tid-nav__logo">TIDAL</span>
        <div class="tid-nav__search"><input placeholder="Search"></div>
        <span class="tid-nav__user">@${s(n?.username||"diegonmarcos")}</span>
      </div>
    </nav>
    <div class="tid-main">
      <header class="tid-head">
        <div class="tid-head__title">My Playlists</div>
        <div class="tid-head__sub">${n?.playlists??a.length} playlists \xB7 ${n?.tracks??0} tracks</div>
      </header>
      <div class="tid-grid">${r||'<p class="tid-empty">Playlists load once the Tidal profile ID is set.</p>'}</div>
    </div>`}var ce={run:"\u{1F3C3}",ride:"\u{1F6B4}",swim:"\u{1F3CA}"};function de(){let i=document.getElementById("str-view");if(!i)return;let e=globalThis.PORTAL_DATA?.strava,a=e?.activities??[],n=e?.profile,c=(l,d)=>d?`<div class="str-card__stat"><span class="str-card__stat-value">${s(d)}</span><span class="str-card__stat-label">${l}</span></div>`:"",r=a.map(l=>`
    <div class="str-card">
      <div class="str-card__header">
        <div class="str-card__icon">${ce[l.type]||"\u{1F3C1}"}</div>
        <div>
          <div class="str-card__title">${s(l.title)}</div>
          <div class="str-card__date">${s(l.date)}</div>
        </div>
      </div>
      <div class="str-card__stats">
        ${c("Distance",l.distance_km?`${l.distance_km} km`:"")}
        ${c("Time",l.duration||"")}
        ${c("Pace",l.pace||"")}
        ${c("Elevation",l.elevation_m?`${l.elevation_m} m`:"")}
      </div>
    </div>`).join("");i.innerHTML=`
    <nav class="str-nav">
      <div class="str-nav__inner">
        <span class="str-nav__logo">Strava</span>
        <div class="str-nav__search"><input placeholder="Search"></div>
        <span class="str-nav__user">${s(n?.name||"diegonmarcos")}</span>
      </div>
    </nav>
    <div class="str-main">
      <header class="str-head">
        <div>
          <div class="str-head__name">${s(n?.name||"Diego Nepomuceno Marcos")}</div>
        </div>
        <div class="str-head__stats">
          <div class="str-head__stat"><span class="str-head__stat-value">${n?.activities??a.length}</span><span class="str-head__stat-label">Activities</span></div>
          <div class="str-head__stat"><span class="str-head__stat-value">${n?.followers??0}</span><span class="str-head__stat-label">Followers</span></div>
          <div class="str-head__stat"><span class="str-head__stat-value">${n?.following??0}</span><span class="str-head__stat-label">Following</span></div>
        </div>
      </header>
      <div class="str-feed">${r||'<p class="str-empty">No activities yet. Strava data loads once the profile is exported.</p>'}</div>
    </div>`}function ve(){let i=document.getElementById("yt-view");if(!i)return;let e=globalThis.PORTAL_DATA?.youtube,a=e?.videos??[],n=e?.playlists??[],c=e?.profile,r=(m,f)=>{let p=m.thumbnail?`<img class="yt-card__img" src="${s(m.thumbnail)}" alt="${s(m.title)}" loading="lazy">`:`<div class="yt-card__ph" style="background:${A(f)}">\u25B6</div>`;return`
    <a class="yt-card" href="${s(m.url||"#")}" target="_blank" rel="noopener">
      <div class="yt-card__thumb">${p}${m.duration?`<span class="yt-card__duration">${s(m.duration)}</span>`:""}</div>
      <div class="yt-card__title">${s(m.title)}</div>
      ${m.channel?`<div class="yt-card__channel">${s(m.channel)}</div>`:""}
      <div class="yt-card__meta">${m.views!==void 0?`${m.views.toLocaleString()} views`:""}${m.views!==void 0&&m.date?" \xB7 ":""}${m.date?s(m.date):""}</div>
    </a>`},l=n.map(m=>`
    <section class="yt-shelf">
      <div class="yt-shelf__title">${s(m.name)}</div>
      <div class="yt-shelf__row">${m.videos.map((f,p)=>r(f,p)).join("")}</div>
    </section>`).join(""),d=a.length?`<div class="yt-grid">${a.map((m,f)=>r(m,f)).join("")}</div>`:"",v=n.length||a.length;i.innerHTML=`
    <nav class="yt-nav">
      <div class="yt-nav__inner">
        <span class="yt-nav__logo">YouTube</span>
        <div class="yt-nav__search"><input placeholder="Search"></div>
        <span class="yt-nav__user">@${s(c?.channel||"diegonmarcos")}</span>
      </div>
    </nav>
    <div class="yt-main">
      <header class="yt-head">
        <div>
          <div class="yt-head__title">${s(c?.channel||"diegonmarcos")}</div>
          <div class="yt-head__sub">${c?.subscribers??0} subscribers \xB7 ${c?.videos??a.length} videos</div>
        </div>
      </header>
      ${v?`${l}${d}`:'<p class="yt-empty">No videos or playlists yet. YouTube data loads once the channel is scraped.</p>'}
    </div>`}var D=(i=!1)=>{let e=i?"#c7cbb9":"#8fbf3f",a=i?"#c7cbb9":"#ef4a2b",n=i?"#e4e4d8":"#ffd400",c=i?"#9a9d90":"#1a1a12";return`<svg class="icq-flower" viewBox="0 0 16 16" aria-hidden="true">${Array.from({length:8},(l,d)=>{let v=d*45;return`<ellipse cx="8" cy="2.9" rx="1.9" ry="2.9" fill="${d===0?a:e}" stroke="${c}" stroke-width="0.5" transform="rotate(${v} 8 8)"/>`}).join("")}<circle cx="8" cy="8" r="2.4" fill="${n}" stroke="${c}" stroke-width="0.5"/></svg>`};var z={online:!1,away:!1,dnd:!1,offline:!0};function me(){let i=document.getElementById("icq-view");if(!i)return;let e=globalThis.PORTAL_DATA||{},a=e.linkedin,n=e.instagram,c=a?.profile.name||"Diego Nepomuceno Marcos",r=n?.profile.username||"diegonmarcos",l=c.split(" ")[0],d=c.split(" ").slice(1).join(" "),v=(a?.profile.location||"Berlin, Germany").split(",").map(t=>t.trim()),m=v[0]||"",f=v[v.length-1]||"",p=a?.experience?.[0],T=a?.about||n?.profile.bio||"",L=a?.skills||[],x=a?.languages||[],k="184-042-518",o=["online","online","away","online","dnd","away","offline","offline","offline"],$=Y.map((t,g)=>({...t,status:o[g%o.length]})),y=$.filter(t=>t.status!=="offline"),w=$.filter(t=>t.status==="offline"),S=t=>`<li class="icq-contact">${D(z[t.status])}<span>${s(t.name)}</span></li>`,u=(t,g)=>g?`<div class="icq-field"><span class="icq-field__k">${s(t)}</span><span class="icq-field__v">${s(g)}</span></div>`:"",q=[{id:"main",label:"Main",body:`
        ${u("Nickname",r)}
        ${u("First Name",l)}
        ${u("Last Name",d)}
        ${u("ICQ#",k)}
        ${u("Email","me@diegonmarcos.com")}
        ${u("Headline",a?.profile.headline||"")}`},{id:"home",label:"Home",body:`
        ${u("City",m)}
        ${u("Country",f)}
        ${u("Homepage",a?.profile.url||"linktree.diegonmarcos.com")}
        ${x.length?`<div class="icq-field"><span class="icq-field__k">Languages</span><span class="icq-field__v">${x.map(t=>s(t.name)).join(", ")}</span></div>`:""}`},{id:"work",label:"Work",body:p?`
        ${u("Company",p.company)}
        ${u("Title",p.title)}
        ${u("Since",p.dates)}
        ${u("Location",p.location||"")}`:'<p class="icq-empty">No work info.</p>'},{id:"about",label:"About",body:T?`<p class="icq-about">${s(T)}</p>`:'<p class="icq-empty">No about info.</p>'},{id:"interests",label:"Interests",body:L.length?`<div class="icq-interests">${L.map(t=>`<span class="icq-chip">${s(t)}</span>`).join("")}</div>`:'<p class="icq-empty">No interests listed.</p>'}],E='<span class="icq-win__btns"><i>_</i><i>\u25A1</i><i>\u2715</i></span>';i.innerHTML=`
    <div class="icq-desk">
      <!-- Contact list window -->
      <div class="icq-win icq-win--list">
        <div class="icq-win__bar">${D("#ffffff")}<span class="icq-win__title">ICQ</span>${E}</div>
        <div class="icq-list">
          <div class="icq-group icq-group--online">Online (${y.length})</div>
          <ul>${y.map(S).join("")}</ul>
          <div class="icq-group icq-group--offline">Offline (${w.length})</div>
          <ul>${w.map(S).join("")}</ul>
        </div>
        <div class="icq-list__foot">${D(z.online)}<span>Online</span><span class="icq-uin">#${k}</span></div>
      </div>

      <!-- User details window -->
      <div class="icq-win icq-win--details">
        <div class="icq-win__bar icq-win__bar--alt">${D("#ffffff")}<span class="icq-win__title">User Details \u2014 ${s(r)}</span>${E}</div>
        <div class="icq-detail">
          <div class="icq-detail__head">
            <div class="icq-detail__avatar">${s(V(c))}</div>
            <div>
              <div class="icq-detail__name">${s(c)}</div>
              <div class="icq-detail__nick">"${s(r)}" \xB7 #${k}</div>
            </div>
          </div>
          <div class="icq-tabs">
            ${q.map((t,g)=>`<button class="icq-tab${g===0?" is-active":""}" data-icq-pane="${t.id}">${t.label}</button>`).join("")}
          </div>
          ${q.map((t,g)=>`<div class="icq-pane${g===0?" is-active":""}" data-icq-pane="${t.id}">${t.body}</div>`).join("")}
        </div>
      </div>
    </div>`,i.querySelectorAll(".icq-tab").forEach(t=>{t.addEventListener("click",()=>{let g=t.dataset.icqPane;i.querySelectorAll(".icq-tab").forEach(h=>h.classList.toggle("is-active",h===t)),i.querySelectorAll(".icq-pane").forEach(h=>h.classList.toggle("is-active",h.dataset.icqPane===g))})})}function ge(){let i=document.getElementById("me-view");if(!i)return;let e=globalThis.PORTAL_DATA||{},a=e.instagram,n=e.linkedin,c=n?.profile.name||a?.profile.name||"Diego Nepomuceno Marcos",r=n?.profile.headline||"",l=n?.profile.location||"",d=a?.profile.bio||"",v=a?.posts[0]?.media,m=globalThis.PORTAL_DATA?.tidal,f=[{theme:"linkedin",label:"LinkedIn",meta:n?`${n.profile.connections} connections \xB7 ${n.profile.followers.toLocaleString()} followers`:"profile",color:"#0a66c2"},{theme:"instagram",label:"Instagram",meta:a?`${a.profile.followers.toLocaleString()} followers \xB7 ${a.profile.posts} post${a.profile.posts===1?"":"s"}`:"profile",color:"#dc2743"},{theme:"pinterest",label:"Pinterest",meta:"boards & pins",color:"#e60023"},{theme:"tidal",label:"TIDAL",meta:m?`${m.profile.playlists} playlists`:"playlists",color:"#00ffff"},{theme:"strava",label:"Strava",meta:"activities & routes",color:"#fc5200"},{theme:"youtube",label:"YouTube",meta:"playlists & videos",color:"#ff0000"},{theme:"orkut",label:"Orkut",meta:"the classic profile",color:"#e9008c"},{theme:"icq",label:"ICQ",meta:"retro IM \xB7 user details",color:"#0a870a"}];i.innerHTML=`
    <div class="me-hub">
      <div class="me-card">
        ${v?`<img class="me-avatar" src="${v}" alt="${s(c)}">`:'<div class="me-avatar"></div>'}
        <h1 class="me-name">${s(c)}</h1>
        ${r?`<p class="me-headline">${s(r)}</p>`:""}
        ${l?`<p class="me-loc">${s(l)}</p>`:""}
        ${d?`<p class="me-bio">${s(d)}</p>`:""}
      </div>
      <div class="me-links">
        ${f.map(p=>`
          <button class="me-link" data-goto="${p.theme}" style="--accent:${p.color}">
            <span class="me-link__dot"></span>
            <span class="me-link__body">
              <span class="me-link__name">${p.label}</span>
              <span class="me-link__meta">${s(p.meta)}</span>
            </span>
            <span class="me-link__arrow">\u2192</span>
          </button>`).join("")}
      </div>
    </div>`,i.querySelectorAll(".me-link").forEach(p=>p.addEventListener("click",()=>j(p.dataset.goto)))}var U="mySocials.theme",pe=["myprofile","orkut","instagram","linkedin","pinterest","tidal","strava","youtube","icq"];function j(i){document.documentElement.setAttribute("data-theme",i);try{localStorage.setItem(U,i)}catch{}document.querySelectorAll("[data-theme-btn]").forEach(e=>{e.classList.toggle("is-active",e.dataset.themeBtn===i)}),window.scrollTo(0,0)}function _e(){let i=localStorage.getItem(U);j(pe.includes(i)?i:"myprofile"),document.querySelectorAll("[data-theme-btn]").forEach(e=>{e.addEventListener("click",()=>j(e.dataset.themeBtn))})}function G(){X(),Z(),ee(),ae(),se(),ne(),le(),oe(),re(),de(),ve(),me(),ge(),_e(),setTimeout(()=>{document.querySelectorAll(".trust-meter__fill").forEach(i=>{i.style.transition="width 1.2s cubic-bezier(0.16, 1, 0.3, 1)"})},300)}document.readyState==="loading"?document.addEventListener("DOMContentLoaded",G):G();})();
