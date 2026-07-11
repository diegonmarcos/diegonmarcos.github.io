(()=>{var p=["#e8508a","#4a8aff","#3abb78","#8a6aff","#ff8a4a","#4ac0ff","#ff4a8a","#50c878","#ffa040","#8080ff","#ff6060","#40c0c0","#c060ff","#ff9060","#60b0ff"],U=[{name:"Ana Silva",initial:"A",color:p[0]},{name:"Bruno Costa",initial:"B",color:p[1]},{name:"Carla Souza",initial:"C",color:p[2]},{name:"Daniel Lima",initial:"D",color:p[3]},{name:"Elena Torres",initial:"E",color:p[4]},{name:"Felipe Gomes",initial:"F",color:p[5]},{name:"Gabi Santos",initial:"G",color:p[6]},{name:"Hugo Pereira",initial:"H",color:p[7]},{name:"Isa Oliveira",initial:"I",color:p[8]}],J=[{author:"Ana Silva",initial:"A",color:p[0],text:"Hey Diego! Miss our coding sessions at the uni. We should catch up soon! Saudades demais!",time:"2 hours ago"},{author:"Bruno Costa",initial:"B",color:p[1],text:"Cara, vi que voce ta morando em Berlin agora! Que top! Vamos marcar uma call?",time:"5 hours ago"},{author:"Carla Souza",initial:"C",color:p[2],text:"Happy birthday atrasado!! Hope you had an amazing day. Your projects are looking incredible btw",time:"yesterday"},{author:"Felipe Gomes",initial:"F",color:p[5],text:"Mano, teu MyMaps ta INSANO. Lembra quando a gente fazia mapa no paint? kkkk Evoluimos!",time:"2 days ago"},{author:"Gabi Santos",initial:"G",color:p[6],text:'Diego!! Join our community "Linux Users Brazil" please! We need more devs like you there',time:"3 days ago"},{author:"Hugo Pereira",initial:"H",color:p[7],text:"Saw your Strava activities... beast mode! When did you start cycling?",time:"4 days ago"},{author:"Isa Oliveira",initial:"I",color:p[8],text:"Testimonial request sent! You were the best partner for the compiler project, forever grateful",time:"1 week ago"}],K=[{name:"Eu odeio acordar cedo",members:1247893,emoji:"\u{1F634}",color:"#8a6aff"},{name:"NixOS Brasil",members:3420,emoji:"\u2744\uFE0F",color:"#4a8aff"},{name:"Linux Users",members:89340,emoji:"\u{1F427}",color:"#3abb78"},{name:"Cycling Addicts",members:45200,emoji:"\u{1F6B4}",color:"#ff8a4a"},{name:"Self-hosted Everything",members:12800,emoji:"\u{1F5A5}\uFE0F",color:"#4ac0ff"},{name:"Saudades do Orkut",members:892340,emoji:"\u{1F62D}",color:"#e8508a"},{name:"Maps & Geography",members:23100,emoji:"\u{1F30D}",color:"#50c878"},{name:"Berlin Brasileiros",members:8900,emoji:"\u{1F1E7}\u{1F1F7}",color:"#ffa040"},{name:"Coffee > Sleep",members:456e3,emoji:"\u2615",color:"#c08040"}],Y=[{author:"Ana Silva",date:"Dec 2023",text:"Diego is one of those rare people who can debug your code AND your life. An incredible friend, always there when you need help. 10/10 would add as friend again."},{author:"Bruno Costa",date:"Nov 2023",text:"Known Diego since university. The guy literally automated everything in his life with NixOS. Respect the dedication. Best engineer I know, no cap."},{author:"Carla Souza",date:"Oct 2023",text:"The most creative developer I have ever worked with. His projects are not just functional, they are beautiful. An artist disguised as an engineer."},{author:"Elena Torres",date:"Sep 2023",text:"Diego helped me set up my entire self-hosted infrastructure. Refused to let me use any cloud subscription. A true freedom fighter of the internet!"}],C=["#1a2840","#2a1840","#182838","#281828","#1a3028","#302818","#201838","#283018","#381828"];function X(){let a=document.getElementById("friends-grid");a&&U.forEach(e=>{let i=document.createElement("div");i.className="friend-cell",i.innerHTML=`
      <div class="friend-cell__avatar">
        <div class="friend-cell__avatar-inner" style="background:${e.color}">${e.initial}</div>
      </div>
      <span class="friend-cell__name">${e.name.split(" ")[0]}</span>
    `,a.appendChild(i)})}function Z(){let a=document.getElementById("scraps-list");a&&J.forEach(e=>{let i=document.createElement("div");i.className="scrap",i.innerHTML=`
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
    `,a.appendChild(i)})}function ee(){let a=document.getElementById("communities-grid");a&&K.forEach(e=>{let i=document.createElement("a");i.href="#",i.className="community-card";let n=e.members>=1e6?`${(e.members/1e6).toFixed(1)}M members`:e.members>=1e3?`${(e.members/1e3).toFixed(0)}K members`:`${e.members} members`;i.innerHTML=`
      <div class="community-card__icon" style="background:${e.color}20;color:${e.color}">${e.emoji}</div>
      <div class="community-card__body">
        <span class="community-card__name">${e.name}</span>
        <span class="community-card__members">${n}</span>
      </div>
    `,a.appendChild(i)})}function ie(){let a=document.getElementById("testimonials-list");a&&Y.forEach(e=>{let i=document.createElement("div");i.className="testimonial",i.innerHTML=`
      <div class="testimonial__header">
        <span class="testimonial__author">${e.author}</span>
        <span class="testimonial__date">${e.date}</span>
      </div>
      <p class="testimonial__text">${e.text}</p>
    `,a.appendChild(i)})}function ae(){let a=document.getElementById("photo-grid");if(a)for(let e=0;e<9;e++){let i=document.createElement("div");i.className="photo-cell",i.innerHTML=`<div class="photo-cell__inner" style="background:${C[e%C.length]}"></div>`,a.appendChild(i)}}var b={heart:'<svg viewBox="0 0 24 24"><path d="M20.8 4.6a5.5 5.5 0 0 0-7.8 0L12 5.6l-1-1a5.5 5.5 0 0 0-7.8 7.8l1 1L12 21l7.8-7.6 1-1a5.5 5.5 0 0 0 0-7.8z"/></svg>',comment:'<svg viewBox="0 0 24 24"><path d="M21 11.5a8.4 8.4 0 0 1-9 8.4 9 9 0 0 1-4-1L3 20l1.1-4.9A8.4 8.4 0 0 1 12 3a8.4 8.4 0 0 1 9 8.5z"/></svg>',share:'<svg viewBox="0 0 24 24"><line x1="22" y1="2" x2="11" y2="13"/><polygon points="22 2 15 22 11 13 2 9 22 2"/></svg>',save:'<svg viewBox="0 0 24 24"><path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"/></svg>',home:'<svg viewBox="0 0 24 24"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/></svg>',grid:'<svg viewBox="0 0 24 24"><rect x="3" y="3" width="18" height="18" rx="2"/><line x1="9" y1="3" x2="9" y2="21"/><line x1="15" y1="3" x2="15" y2="21"/><line x1="3" y1="9" x2="21" y2="9"/><line x1="3" y1="15" x2="21" y2="15"/></svg>',reels:'<svg viewBox="0 0 24 24"><rect x="3" y="3" width="18" height="18" rx="3"/><line x1="3" y1="8" x2="21" y2="8"/><line x1="8" y1="3" x2="10" y2="8"/><line x1="14" y1="3" x2="16" y2="8"/><polygon points="10 11 15 13.5 10 16" fill="currentColor" stroke="none"/></svg>',tagged:'<svg viewBox="0 0 24 24"><rect x="3" y="3" width="18" height="18" rx="3"/><circle cx="12" cy="10" r="3"/><path d="M7 18a5 5 0 0 1 10 0"/></svg>'};function x(a){let e=C[a%C.length],i=p[a%p.length];return`linear-gradient(135deg, ${e}, ${i})`}function s(a){return a.replace(/[&<>"]/g,e=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"})[e])}function se(a){let e=0;for(let i=0;i<a.length;i++)e=e*31+a.charCodeAt(i)>>>0;return p[e%p.length]}var H=["ana","bruno","carla","diego","elena","felipe","gabi","hugo","isa","joao","lu","marco","nina","otto","paula","rafa","sofia","tiago","vera","yara"],j=["","_",".","__"],P=["","br","berlin","photo","travel","x","oficial","real","99","mrx","gram"];function te(a,e){let i=a.slice();for(let n=0;i.length<e;n++){let m=H[n%H.length],l=j[(n>>2)%j.length],r=P[(n>>1)%P.length],g=Math.floor(n/(H.length*j.length)),c=`${m}${l}${r}${g>0?g:""}`;i.includes(c)?i.push(`${c}${i.length}`):i.push(c)}return i}function ne(){let a=document.getElementById("ig-view");if(!a)return;let e=globalThis.PORTAL_DATA?.instagram;if(!e){a.innerHTML='<p class="ig-empty">Instagram data not loaded.</p>';return}let i=e.profile,n=t=>t.toLocaleString(),m=e.stories.map((t,d)=>`
    <div class="ig-hl">
      <div class="ig-hl__ring"><div class="ig-hl__avatar"><img src="${t.media}" alt="story ${d+1}"></div></div>
      <span class="ig-hl__name">${s(t.caption||"Story")}</span>
    </div>`),l=(e.highlights||[]).map((t,d)=>`
    <div class="ig-hl">
      <div class="ig-hl__ring"><div class="ig-hl__avatar" style="background:${x(d)}"><span class="ig-hl__emoji">${t.emoji}</span></div></div>
      <span class="ig-hl__name">${s(t.label)}</span>
    </div>`),r=[...m,...l].join(""),g=(t,d)=>`
    <a class="ig-tile" href="${s(t.url)}" target="_blank" rel="noopener" style="background:${x(t.url.length)}">
      <span class="ig-tile__cap">${s(t.caption||t.url.replace("https://www.instagram.com/",""))}</span>
      <span class="ig-tile__badge">${d}</span>
    </a>`,c=e.saved.length?e.saved.map(t=>g(t,"\u{1F516}")).join(""):'<p class="ig-empty">Nothing saved.</p>',w=e.liked.length?e.liked.map(t=>g(t,"\u2764\uFE0F")).join(""):'<p class="ig-empty">No likes.</p>',_=30,h=[...e.saved,...e.liked].map(t=>t.caption).filter(Boolean),T=e.posts.map(t=>`<a class="ig-tile" href="#"><img src="${t.media}" alt="post"></a>`),k=Array.from({length:Math.max(0,_-T.length)},(t,d)=>`
    <a class="ig-tile ig-tile--post" href="#" style="background:${x(d)}">
      <span class="ig-tile__cap">${s(h[d%(h.length||1)]||"")}</span>
    </a>`),A=T.length||k.length?[...T,...k].join(""):'<p class="ig-empty">No posts yet.</p>',L='<svg class="ig-tile__ov" viewBox="0 0 24 24"><polygon points="10 8 16 12 10 16 10 8" fill="currentColor" stroke="none"/></svg>',o=Array.from({length:12},(t,d)=>`
    <a class="ig-tile ig-tile--post" href="#" style="background:${x(d+5)}">${L}
      <span class="ig-tile__cap">${s(h[(d+2)%(h.length||1)]||"")}</span>
    </a>`).join(""),f=Array.from({length:9},(t,d)=>`
    <a class="ig-tile ig-tile--post" href="#" style="background:${x(d+9)}">
      <span class="ig-tile__badge">@${s(i.username)}</span>
    </a>`).join(""),$=e.comments.length?e.comments.map(t=>`
      <div class="ig-comment">
        <div class="ig-comment__text">${s(t.text)}</div>
        <div class="ig-comment__meta">${t.owner?"@"+s(t.owner)+" \xB7 ":""}${s(t.time||"")}</div>
      </div>`).join(""):'<p class="ig-empty">No comments.</p>',y=t=>`<div class="ig-grid">${t}</div>`,E=e.posts[0]?.media?`<img class="ig-head__avatar" src="${e.posts[0].media}" alt="${s(i.username)}">`:'<div class="ig-head__avatar"></div>';a.innerHTML=`
    <nav class="ig-nav">
      <div class="ig-nav__inner">
        <a href="#" class="ig-nav__logo">My Socials</a>
        <div class="ig-nav__search"><input placeholder="Search"></div>
        <div class="ig-nav__icons">${b.home}${b.heart}${b.comment}${b.share}</div>
      </div>
    </nav>
    <div class="ig-page">
      <header class="ig-head">
        <div class="ig-head__user">${s(i.username)}</div>
        <div class="ig-head__row">
          ${E}
          <div class="ig-head__stats">
            <div class="ig-head__stat"><strong>${n(i.posts)}</strong><span>posts</span></div>
            <div class="ig-head__stat" data-modal="followers"><strong>${n(i.followers)}</strong><span>followers</span></div>
            <div class="ig-head__stat" data-modal="following"><strong>${n(i.following)}</strong><span>following</span></div>
          </div>
        </div>
        <div class="ig-head__name">${s(i.name)}</div>
        <div class="ig-head__bio">${s(i.bio)}</div>
        <div class="ig-head__actions">
          <span class="ig-head__btn ig-head__btn--primary">Follow</span>
          <span class="ig-head__btn">Message</span>
        </div>
      </header>

      ${r?`<div class="ig-highlights">${r}</div>`:""}

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

      <div class="ig-pane is-active" data-pane="posts">${y(A)}</div>
      <div class="ig-pane" data-pane="reels">${y(o)}</div>
      <div class="ig-pane" data-pane="tagged">${y(f)}</div>
      <div class="ig-pane" data-pane="saved">${y(c)}</div>
      <div class="ig-pane" data-pane="liked">${y(w)}</div>
      <div class="ig-pane" data-pane="comments"><div class="ig-comments">${$}</div></div>
    </div>

    <div class="ig-modal" id="ig-modal">
      <div class="ig-modal__box">
        <div class="ig-modal__head">
          <small id="ig-modal-sub"></small><h3 id="ig-modal-title"></h3>
          <button id="ig-modal-close" aria-label="Close">&times;</button>
        </div>
        <div class="ig-modal__list" id="ig-modal-list"></div>
      </div>
    </div>`,a.querySelectorAll(".ig-tab, .ig-pill").forEach(t=>{t.addEventListener("click",()=>{let d=t.dataset.pane;a.querySelectorAll(".ig-tab, .ig-pill").forEach(u=>u.classList.toggle("is-active",u===t)),a.querySelectorAll(".ig-pane").forEach(u=>u.classList.toggle("is-active",u.dataset.pane===d))})});let v=a.querySelector("#ig-modal"),q=t=>{let d=t==="followers"?e.followers:e.following,u=t==="followers"?i.followers:i.following,W=te(d,u);a.querySelector("#ig-modal-title").textContent=t==="followers"?"Followers":"Following",a.querySelector("#ig-modal-sub").textContent=`${n(u)} ${t}`,a.querySelector("#ig-modal-list").innerHTML=W.map(I=>`
      <div class="ig-row">
        <div class="ig-row__avatar" style="background:${se(I)}">${s(I.charAt(0).toUpperCase())}</div>
        <a class="ig-row__handle" href="https://www.instagram.com/${s(I)}" target="_blank" rel="noopener">${s(I)}</a>
        <span class="ig-row__follow">Follow</span>
      </div>`).join(""),v.classList.add("is-open")};a.querySelectorAll(".ig-head__stat[data-modal]").forEach(t=>t.addEventListener("click",()=>q(t.dataset.modal)));let S=()=>v.classList.remove("is-open");a.querySelector("#ig-modal-close").addEventListener("click",S),v.addEventListener("click",t=>{t.target===v&&S()})}var M={home:'<svg viewBox="0 0 24 24"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/></svg>',net:'<svg viewBox="0 0 24 24"><circle cx="9" cy="7" r="4"/><path d="M17 11a4 4 0 1 0-3-6.6M1 21v-2a4 4 0 0 1 4-4h8a4 4 0 0 1 4 4v2M17 15a4 4 0 0 1 4 4v2"/></svg>',jobs:'<svg viewBox="0 0 24 24"><rect x="2" y="7" width="20" height="14" rx="2"/><path d="M8 7V5a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"/></svg>',msg:'<svg viewBox="0 0 24 24"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>',bell:'<svg viewBox="0 0 24 24"><path d="M18 8a6 6 0 1 0-12 0c0 7-3 9-3 9h18s-3-2-3-9M13.7 21a2 2 0 0 1-3.4 0"/></svg>',like:'<svg viewBox="0 0 24 24"><path d="M14 9V5a3 3 0 0 0-6 0v4H5a2 2 0 0 0-2 2l1 7a2 2 0 0 0 2 2h9a2 2 0 0 0 2-2l1-7a2 2 0 0 0-2-2z"/></svg>',comment:'<svg viewBox="0 0 24 24"><path d="M21 11.5a8.4 8.4 0 0 1-9 8.4 9 9 0 0 1-4-1L3 20l1.1-4.9A8.4 8.4 0 0 1 12 3a8.4 8.4 0 0 1 9 8.5z"/></svg>',repost:'<svg viewBox="0 0 24 24"><polyline points="17 1 21 5 17 9"/><path d="M3 11V9a4 4 0 0 1 4-4h14M7 23l-4-4 4-4M21 13v2a4 4 0 0 1-4 4H3"/></svg>',send:'<svg viewBox="0 0 24 24"><line x1="22" y1="2" x2="11" y2="13"/><polygon points="22 2 15 22 11 13 2 9 22 2"/></svg>'};function Q(a){return a.split(/\s+/).filter(Boolean).slice(0,2).map(e=>e.charAt(0).toUpperCase()).join("")}function O(a){return a.split(/\s*---\s*/).map(e=>e.trim()).filter(Boolean).map(e=>{let i=e.match(/^(@\S[\s\S]*?)\s{2,}([\s\S]*)$/),n=i?i[1].trim():"",m=(i?i[2]:e).split(/\s{2,}/).map(l=>s(l.trim())).filter(Boolean).join("<br>");return`<p class="li-para">${n?`<strong class="li-para__head">${s(n)}</strong>`:""}${m}</p>`}).join("")}function N(a){return`<div class="li-longtext"><div class="li-clamp">${a}</div><button class="li-more" type="button">\u2026see more</button></div>`}function oe(){let a=document.getElementById("li-view");if(!a)return;let e=globalThis.PORTAL_DATA?.linkedin;if(!e){a.innerHTML='<p class="li-empty">LinkedIn data not loaded.</p>';return}let i=e.profile,n=(o,f)=>`<div class="li-nav__item">${o}<span>${f}</span></div>`,m=globalThis.PORTAL_DATA?.instagram?.posts?.[0]?.media,l=i.photo||m,r=l?`<div class="li-phead__avatar li-phead__avatar--img"><img src="${l}" alt="${s(i.name)}"></div>`:`<div class="li-phead__avatar" style="background:${p[3]}">${s(Q(i.name))}</div>`,g=(o,f)=>`<section class="li-card li-section"><h2 class="li-section__title">${o}</h2>${f}</section>`,c='<p class="li-need">Not in the saved profile page \u2014 add from your LinkedIn data export (Settings \u2192 Get a copy of your data).</p>',w=e.experience.length?e.experience.map(o=>`
      <div class="li-item">
        <div class="li-item__logo">${s(o.company.charAt(0))}</div>
        <div>
          <div class="li-item__title">${s(o.title)}</div>
          <div class="li-item__sub">${s(o.company)}</div>
          <div class="li-item__meta">${s(o.dates)}${o.location?" \xB7 "+s(o.location):""}</div>
        </div>
      </div>`).join(""):c,_=e.education.length?e.education.map(o=>`
      <div class="li-item">
        <div class="li-item__logo">${s(o.school.charAt(0))}</div>
        <div>
          <div class="li-item__title">${s(o.school)}</div>
          <div class="li-item__sub">${s(o.degree)}</div>
          <div class="li-item__meta">${s(o.dates)}</div>
        </div>
      </div>`).join(""):c,h=e.skills.length?`<div class="li-skills">${e.skills.map(o=>`<span class="li-skill">${s(o)}</span>`).join("")}</div>`:c,T=e.about?`<div class="li-about">${N(O(e.about))}</div>`:c,k=e.languages.length?e.languages.map(o=>`
      <div class="li-lang">
        <span class="li-lang__name">${s(o.name)}</span>
        <span class="li-lang__level">${s(o.proficiency)}</span>
      </div>`).join(""):c,A=e.projects.length?e.projects.map(o=>`
      <div class="li-item li-item--proj">
        <div>
          <div class="li-item__title">${s(o.title)}${o.url?` \xB7 <a href="${s(o.url)}" target="_blank" rel="noopener">link</a>`:""}</div>
          ${o.dates?`<div class="li-item__meta">${s(o.dates)}</div>`:""}
          <div class="li-item__desc">${N(O(o.description))}</div>
        </div>
      </div>`).join(""):c;a.innerHTML=`
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
          ${r}
          <div class="li-phead__body">
            <h1 class="li-phead__name">${s(i.name)}</h1>
            <p class="li-phead__headline">${s(i.headline)}</p>
            <p class="li-phead__loc">${s(i.location)} \xB7 <a href="https://${s(i.url)}" target="_blank" rel="noopener">Contact info</a></p>
            <p class="li-phead__meta"><strong>${i.connections}</strong> connections \xB7 <strong>${i.followers.toLocaleString()}</strong> followers</p>
            ${i.open_to_work?`<div class="li-phead__open"><strong>Open to work</strong><br>${s(i.open_to_work)}</div>`:""}
            <div class="li-phead__actions">
              <button class="li-btn li-btn--primary">Connect</button>
              <button class="li-btn">Message</button>
              <button class="li-btn">More</button>
            </div>
          </div>
        </section>
        ${g("About",T)}
        ${g("Experience",w)}
        ${g("Education",_)}
        ${g("Skills",h)}
        ${g("Projects",A)}
        ${g("Languages",k)}
      </div>
      <aside class="li-prof__rail">
        <div class="li-card li-side">
          <div class="li-side__title">Profile</div>
          <div class="li-side__row"><span>Current</span><strong>${s(i.current)}</strong></div>
          <div class="li-side__row"><span>Location</span><strong>${s(i.location.split(",")[0])}</strong></div>
          <div class="li-side__row"><span>Profile</span><a href="https://${s(i.url)}" target="_blank" rel="noopener">${s(i.url)}</a></div>
        </div>
      </aside>
    </div>`;let L=220;a.querySelectorAll(".li-longtext").forEach(o=>{let f=o.querySelector(".li-clamp"),$=o.querySelector(".li-more");if((f.textContent||"").trim().length<=L){$.style.display="none";return}$.style.display="",$.textContent="\u2026see more",$.addEventListener("click",()=>{let E=f.classList.toggle("is-expanded");$.textContent=E?"see less":"\u2026see more"})})}var R={bell:'<svg viewBox="0 0 24 24"><path d="M18 8a6 6 0 1 0-12 0c0 7-3 9-3 9h18s-3-2-3-9M13.7 21a2 2 0 0 1-3.4 0"/></svg>',chat:'<svg viewBox="0 0 24 24"><path d="M21 11.5a8.4 8.4 0 0 1-9 8.4 9 9 0 0 1-4-1L3 20l1.1-4.9A8.4 8.4 0 0 1 12 3a8.4 8.4 0 0 1 9 8.5z"/></svg>'},F=[220,300,180,340,260,200,320,240,280];function le(){let a=document.getElementById("pin-view");if(!a)return;let e=globalThis.PORTAL_DATA?.pinterest,i=e?.boards??[],n=e?.profile,m=i.map((l,r)=>{let g=F[r%F.length],c=l.cover?`<img class="pin-card__img" src="${s(l.cover)}" alt="${s(l.name)}" loading="lazy">`:`<div class="pin-card__ph" style="height:${g}px;background:${x(r)}">\u{1F4CC}</div>`;return`
    <a class="pin-card" href="https://www.pinterest.com/${s(n?.username||"diegonmarcos")}/${s(l.name.toLowerCase().replace(/[^a-z0-9]+/g,"-"))}/" target="_blank" rel="noopener">
      <div class="pin-card__media">
        ${c}
        <div class="pin-card__overlay"><span class="pin-card__save">${l.pins} pins</span></div>
      </div>
      <div class="pin-card__title">${s(l.name)}</div>
      ${l.desc?`<div class="pin-card__meta">${s(l.desc)}</div>`:`<div class="pin-card__meta">${l.pins} pins</div>`}
    </a>`}).join("");a.innerHTML=`
    <nav class="pin-nav">
      <div class="pin-nav__inner">
        <span class="pin-nav__logo">P</span>
        <a href="#" class="pin-nav__tab pin-nav__tab--active">Boards</a>
        <a href="https://www.pinterest.com/${s(n?.username||"diegonmarcos")}/" target="_blank" rel="noopener" class="pin-nav__tab">Profile</a>
        <div class="pin-nav__search"><input placeholder="Search for ideas"></div>
        <div class="pin-nav__icons">${R.bell}${R.chat}<span class="pin-nav__avatar" style="background:${p[3]}">D</span></div>
      </div>
    </nav>
    <div class="pin-head">@${s(n?.username||"diegonmarcos")} \xB7 <strong>${n?.boards??i.length}</strong> boards \xB7 <strong>${n?.pins??0}</strong> pins</div>
    <div class="pin-board">${m||'<p class="pin-empty">No boards.</p>'}</div>`}function re(){let a=document.getElementById("tid-view");if(!a)return;let e=globalThis.PORTAL_DATA?.tidal,i=e?.playlists??[],n=e?.profile,m=r=>{if(!r)return"";let g=Math.floor(r/3600),c=Math.round(r%3600/60);return g?`${g}h ${c}m`:`${c} min`},l=i.map((r,g)=>{let c=r.cover?`<img class="tid-card__img" src="${s(r.cover)}" alt="${s(r.name)}" loading="lazy">`:`<div class="tid-card__ph" style="background:${x(g)}">\u266B</div>`;return`
    <a class="tid-card" href="${s(r.url)}" target="_blank" rel="noopener">
      <div class="tid-card__cover">${c}<span class="tid-card__play">\u25B6</span></div>
      <div class="tid-card__name">${s(r.name)}</div>
      <div class="tid-card__meta">${r.tracks} tracks${r.duration_s?" \xB7 "+m(r.duration_s):""}</div>
    </a>`}).join("");a.innerHTML=`
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
        <div class="tid-head__sub">${n?.playlists??i.length} playlists \xB7 ${n?.tracks??0} tracks</div>
      </header>
      <div class="tid-grid">${l||'<p class="tid-empty">Playlists load once the Tidal profile ID is set.</p>'}</div>
    </div>`}var B=(a=!1)=>{let e=a?"#c7cbb9":"#8fbf3f",i=a?"#c7cbb9":"#ef4a2b",n=a?"#e4e4d8":"#ffd400",m=a?"#9a9d90":"#1a1a12";return`<svg class="icq-flower" viewBox="0 0 16 16" aria-hidden="true">${Array.from({length:8},(r,g)=>{let c=g*45;return`<ellipse cx="8" cy="2.9" rx="1.9" ry="2.9" fill="${g===0?i:e}" stroke="${m}" stroke-width="0.5" transform="rotate(${c} 8 8)"/>`}).join("")}<circle cx="8" cy="8" r="2.4" fill="${n}" stroke="${m}" stroke-width="0.5"/></svg>`};var z={online:!1,away:!1,dnd:!1,offline:!0};function ce(){let a=document.getElementById("icq-view");if(!a)return;let e=globalThis.PORTAL_DATA||{},i=e.linkedin,n=e.instagram,m=i?.profile.name||"Diego Nepomuceno Marcos",l=n?.profile.username||"diegonmarcos",r=m.split(" ")[0],g=m.split(" ").slice(1).join(" "),c=(i?.profile.location||"Berlin, Germany").split(",").map(t=>t.trim()),w=c[0]||"",_=c[c.length-1]||"",h=i?.experience?.[0],T=i?.about||n?.profile.bio||"",k=i?.skills||[],A=i?.languages||[],L="184-042-518",o=["online","online","away","online","dnd","away","offline","offline","offline"],f=U.map((t,d)=>({...t,status:o[d%o.length]})),$=f.filter(t=>t.status!=="offline"),y=f.filter(t=>t.status==="offline"),E=t=>`<li class="icq-contact">${B(z[t.status])}<span>${s(t.name)}</span></li>`,v=(t,d)=>d?`<div class="icq-field"><span class="icq-field__k">${s(t)}</span><span class="icq-field__v">${s(d)}</span></div>`:"",q=[{id:"main",label:"Main",body:`
        ${v("Nickname",l)}
        ${v("First Name",r)}
        ${v("Last Name",g)}
        ${v("ICQ#",L)}
        ${v("Email","me@diegonmarcos.com")}
        ${v("Headline",i?.profile.headline||"")}`},{id:"home",label:"Home",body:`
        ${v("City",w)}
        ${v("Country",_)}
        ${v("Homepage",i?.profile.url||"linktree.diegonmarcos.com")}
        ${A.length?`<div class="icq-field"><span class="icq-field__k">Languages</span><span class="icq-field__v">${A.map(t=>s(t.name)).join(", ")}</span></div>`:""}`},{id:"work",label:"Work",body:h?`
        ${v("Company",h.company)}
        ${v("Title",h.title)}
        ${v("Since",h.dates)}
        ${v("Location",h.location||"")}`:'<p class="icq-empty">No work info.</p>'},{id:"about",label:"About",body:T?`<p class="icq-about">${s(T)}</p>`:'<p class="icq-empty">No about info.</p>'},{id:"interests",label:"Interests",body:k.length?`<div class="icq-interests">${k.map(t=>`<span class="icq-chip">${s(t)}</span>`).join("")}</div>`:'<p class="icq-empty">No interests listed.</p>'}],S='<span class="icq-win__btns"><i>_</i><i>\u25A1</i><i>\u2715</i></span>';a.innerHTML=`
    <div class="icq-desk">
      <!-- Contact list window -->
      <div class="icq-win icq-win--list">
        <div class="icq-win__bar">${B("#ffffff")}<span class="icq-win__title">ICQ</span>${S}</div>
        <div class="icq-list">
          <div class="icq-group icq-group--online">Online (${$.length})</div>
          <ul>${$.map(E).join("")}</ul>
          <div class="icq-group icq-group--offline">Offline (${y.length})</div>
          <ul>${y.map(E).join("")}</ul>
        </div>
        <div class="icq-list__foot">${B(z.online)}<span>Online</span><span class="icq-uin">#${L}</span></div>
      </div>

      <!-- User details window -->
      <div class="icq-win icq-win--details">
        <div class="icq-win__bar icq-win__bar--alt">${B("#ffffff")}<span class="icq-win__title">User Details \u2014 ${s(l)}</span>${S}</div>
        <div class="icq-detail">
          <div class="icq-detail__head">
            <div class="icq-detail__avatar">${s(Q(m))}</div>
            <div>
              <div class="icq-detail__name">${s(m)}</div>
              <div class="icq-detail__nick">"${s(l)}" \xB7 #${L}</div>
            </div>
          </div>
          <div class="icq-tabs">
            ${q.map((t,d)=>`<button class="icq-tab${d===0?" is-active":""}" data-icq-pane="${t.id}">${t.label}</button>`).join("")}
          </div>
          ${q.map((t,d)=>`<div class="icq-pane${d===0?" is-active":""}" data-icq-pane="${t.id}">${t.body}</div>`).join("")}
        </div>
      </div>
    </div>`,a.querySelectorAll(".icq-tab").forEach(t=>{t.addEventListener("click",()=>{let d=t.dataset.icqPane;a.querySelectorAll(".icq-tab").forEach(u=>u.classList.toggle("is-active",u===t)),a.querySelectorAll(".icq-pane").forEach(u=>u.classList.toggle("is-active",u.dataset.icqPane===d))})})}function de(){let a=document.getElementById("me-view");if(!a)return;let e=globalThis.PORTAL_DATA||{},i=e.instagram,n=e.linkedin,m=n?.profile.name||i?.profile.name||"Diego Nepomuceno Marcos",l=n?.profile.headline||"",r=n?.profile.location||"",g=i?.profile.bio||"",c=i?.posts[0]?.media,w=[{theme:"linkedin",label:"LinkedIn",meta:n?`${n.profile.connections} connections \xB7 ${n.profile.followers.toLocaleString()} followers`:"profile",color:"#0a66c2"},{theme:"instagram",label:"Instagram",meta:i?`${i.profile.followers.toLocaleString()} followers \xB7 ${i.profile.posts} post${i.profile.posts===1?"":"s"}`:"profile",color:"#dc2743"},{theme:"pinterest",label:"Pinterest",meta:"boards & pins",color:"#e60023"},{theme:"orkut",label:"Orkut",meta:"the classic profile",color:"#e9008c"},{theme:"icq",label:"ICQ",meta:"retro IM \xB7 user details",color:"#0a870a"}];a.innerHTML=`
    <div class="me-hub">
      <div class="me-card">
        ${c?`<img class="me-avatar" src="${c}" alt="${s(m)}">`:'<div class="me-avatar"></div>'}
        <h1 class="me-name">${s(m)}</h1>
        ${l?`<p class="me-headline">${s(l)}</p>`:""}
        ${r?`<p class="me-loc">${s(r)}</p>`:""}
        ${g?`<p class="me-bio">${s(g)}</p>`:""}
      </div>
      <div class="me-links">
        ${w.map(_=>`
          <button class="me-link" data-goto="${_.theme}" style="--accent:${_.color}">
            <span class="me-link__dot"></span>
            <span class="me-link__body">
              <span class="me-link__name">${_.label}</span>
              <span class="me-link__meta">${s(_.meta)}</span>
            </span>
            <span class="me-link__arrow">\u2192</span>
          </button>`).join("")}
      </div>
    </div>`,a.querySelectorAll(".me-link").forEach(_=>_.addEventListener("click",()=>D(_.dataset.goto)))}var V="mySocials.theme",ge=["myprofile","orkut","instagram","linkedin","pinterest","tidal","icq"];function D(a){document.documentElement.setAttribute("data-theme",a);try{localStorage.setItem(V,a)}catch{}document.querySelectorAll("[data-theme-btn]").forEach(e=>{e.classList.toggle("is-active",e.dataset.themeBtn===a)}),window.scrollTo(0,0)}function me(){let a=localStorage.getItem(V);D(ge.includes(a)?a:"myprofile"),document.querySelectorAll("[data-theme-btn]").forEach(e=>{e.addEventListener("click",()=>D(e.dataset.themeBtn))})}function G(){X(),Z(),ee(),ie(),ae(),ne(),oe(),le(),re(),ce(),de(),me(),setTimeout(()=>{document.querySelectorAll(".trust-meter__fill").forEach(a=>{a.style.transition="width 1.2s cubic-bezier(0.16, 1, 0.3, 1)"})},300)}document.readyState==="loading"?document.addEventListener("DOMContentLoaded",G):G();})();
