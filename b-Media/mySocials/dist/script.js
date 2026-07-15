(()=>{var _=["#e8508a","#4a8aff","#3abb78","#8a6aff","#ff8a4a","#4ac0ff","#ff4a8a","#50c878","#ffa040","#8080ff","#ff6060","#40c0c0","#c060ff","#ff9060","#60b0ff"],Y=[{name:"Ana Silva",initial:"A",color:_[0]},{name:"Bruno Costa",initial:"B",color:_[1]},{name:"Carla Souza",initial:"C",color:_[2]},{name:"Daniel Lima",initial:"D",color:_[3]},{name:"Elena Torres",initial:"E",color:_[4]},{name:"Felipe Gomes",initial:"F",color:_[5]},{name:"Gabi Santos",initial:"G",color:_[6]},{name:"Hugo Pereira",initial:"H",color:_[7]},{name:"Isa Oliveira",initial:"I",color:_[8]}],W=[{author:"Ana Silva",initial:"A",color:_[0],text:"Hey Diego! Miss our coding sessions at the uni. We should catch up soon! Saudades demais!",time:"2 hours ago"},{author:"Bruno Costa",initial:"B",color:_[1],text:"Cara, vi que voce ta morando em Berlin agora! Que top! Vamos marcar uma call?",time:"5 hours ago"},{author:"Carla Souza",initial:"C",color:_[2],text:"Happy birthday atrasado!! Hope you had an amazing day. Your projects are looking incredible btw",time:"yesterday"},{author:"Felipe Gomes",initial:"F",color:_[5],text:"Mano, teu MyMaps ta INSANO. Lembra quando a gente fazia mapa no paint? kkkk Evoluimos!",time:"2 days ago"},{author:"Gabi Santos",initial:"G",color:_[6],text:'Diego!! Join our community "Linux Users Brazil" please! We need more devs like you there',time:"3 days ago"},{author:"Hugo Pereira",initial:"H",color:_[7],text:"Saw your Strava activities... beast mode! When did you start cycling?",time:"4 days ago"},{author:"Isa Oliveira",initial:"I",color:_[8],text:"Testimonial request sent! You were the best partner for the compiler project, forever grateful",time:"1 week ago"}],J=[{name:"Eu odeio acordar cedo",members:1247893,emoji:"\u{1F634}",color:"#8a6aff"},{name:"NixOS Brasil",members:3420,emoji:"\u2744\uFE0F",color:"#4a8aff"},{name:"Linux Users",members:89340,emoji:"\u{1F427}",color:"#3abb78"},{name:"Cycling Addicts",members:45200,emoji:"\u{1F6B4}",color:"#ff8a4a"},{name:"Self-hosted Everything",members:12800,emoji:"\u{1F5A5}\uFE0F",color:"#4ac0ff"},{name:"Saudades do Orkut",members:892340,emoji:"\u{1F62D}",color:"#e8508a"},{name:"Maps & Geography",members:23100,emoji:"\u{1F30D}",color:"#50c878"},{name:"Berlin Brasileiros",members:8900,emoji:"\u{1F1E7}\u{1F1F7}",color:"#ffa040"},{name:"Coffee > Sleep",members:456e3,emoji:"\u2615",color:"#c08040"}],K=[{author:"Ana Silva",date:"Dec 2023",text:"Diego is one of those rare people who can debug your code AND your life. An incredible friend, always there when you need help. 10/10 would add as friend again."},{author:"Bruno Costa",date:"Nov 2023",text:"Known Diego since university. The guy literally automated everything in his life with NixOS. Respect the dedication. Best engineer I know, no cap."},{author:"Carla Souza",date:"Oct 2023",text:"The most creative developer I have ever worked with. His projects are not just functional, they are beautiful. An artist disguised as an engineer."},{author:"Elena Torres",date:"Sep 2023",text:"Diego helped me set up my entire self-hosted infrastructure. Refused to let me use any cloud subscription. A true freedom fighter of the internet!"}],j=["#1a2840","#2a1840","#182838","#281828","#1a3028","#302818","#201838","#283018","#381828"];function X(){let i=document.getElementById("friends-grid");i&&Y.forEach(e=>{let a=document.createElement("div");a.className="friend-cell",a.innerHTML=`
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
    `,i.appendChild(a)})}function se(){let i=document.getElementById("photo-grid");if(i)for(let e=0;e<9;e++){let a=document.createElement("div");a.className="photo-cell",a.innerHTML=`<div class="photo-cell__inner" style="background:${j[e%j.length]}"></div>`,i.appendChild(a)}}var b={heart:'<svg viewBox="0 0 24 24"><path d="M20.8 4.6a5.5 5.5 0 0 0-7.8 0L12 5.6l-1-1a5.5 5.5 0 0 0-7.8 7.8l1 1L12 21l7.8-7.6 1-1a5.5 5.5 0 0 0 0-7.8z"/></svg>',comment:'<svg viewBox="0 0 24 24"><path d="M21 11.5a8.4 8.4 0 0 1-9 8.4 9 9 0 0 1-4-1L3 20l1.1-4.9A8.4 8.4 0 0 1 12 3a8.4 8.4 0 0 1 9 8.5z"/></svg>',share:'<svg viewBox="0 0 24 24"><line x1="22" y1="2" x2="11" y2="13"/><polygon points="22 2 15 22 11 13 2 9 22 2"/></svg>',save:'<svg viewBox="0 0 24 24"><path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"/></svg>',home:'<svg viewBox="0 0 24 24"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/></svg>',grid:'<svg viewBox="0 0 24 24"><rect x="3" y="3" width="18" height="18" rx="2"/><line x1="9" y1="3" x2="9" y2="21"/><line x1="15" y1="3" x2="15" y2="21"/><line x1="3" y1="9" x2="21" y2="9"/><line x1="3" y1="15" x2="21" y2="15"/></svg>',reels:'<svg viewBox="0 0 24 24"><rect x="3" y="3" width="18" height="18" rx="3"/><line x1="3" y1="8" x2="21" y2="8"/><line x1="8" y1="3" x2="10" y2="8"/><line x1="14" y1="3" x2="16" y2="8"/><polygon points="10 11 15 13.5 10 16" fill="currentColor" stroke="none"/></svg>',tagged:'<svg viewBox="0 0 24 24"><rect x="3" y="3" width="18" height="18" rx="3"/><circle cx="12" cy="10" r="3"/><path d="M7 18a5 5 0 0 1 10 0"/></svg>'};function T(i){let e=j[i%j.length],a=_[i%_.length];return`linear-gradient(135deg, ${e}, ${a})`}function s(i){return i.replace(/[&<>"]/g,e=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"})[e])}function ie(i){let e=0;for(let a=0;a<i.length;a++)e=e*31+i.charCodeAt(a)>>>0;return _[e%_.length]}var P=["ana","bruno","carla","diego","elena","felipe","gabi","hugo","isa","joao","lu","marco","nina","otto","paula","rafa","sofia","tiago","vera","yara"],H=["","_",".","__"],N=["","br","berlin","photo","travel","x","oficial","real","99","mrx","gram"];function te(i,e){let a=i.slice();for(let n=0;a.length<e;n++){let c=P[n%P.length],r=H[(n>>2)%H.length],l=N[(n>>1)%N.length],d=Math.floor(n/(P.length*H.length)),v=`${c}${r}${l}${d>0?d:""}`;a.includes(v)?a.push(`${v}${a.length}`):a.push(v)}return a}function ne(){let i=document.getElementById("ig-view");if(!i)return;let e=globalThis.PORTAL_DATA?.instagram;if(!e){i.innerHTML='<p class="ig-empty">Instagram data not loaded.</p>';return}let a=e.profile,n=t=>t.toLocaleString(),c=e.stories.map((t,p)=>`
    <div class="ig-hl">
      <div class="ig-hl__ring"><div class="ig-hl__avatar"><img src="${t.media}" alt="story ${p+1}"></div></div>
      <span class="ig-hl__name">${s(t.caption||"Story")}</span>
    </div>`),r=(e.highlights||[]).map((t,p)=>`
    <div class="ig-hl">
      <div class="ig-hl__ring"><div class="ig-hl__avatar" style="background:${T(p)}"><span class="ig-hl__emoji">${t.emoji}</span></div></div>
      <span class="ig-hl__name">${s(t.label)}</span>
    </div>`),l=[...c,...r].join(""),d=(t,p)=>`
    <a class="ig-tile" href="${s(t.url)}" target="_blank" rel="noopener" style="background:${T(t.url.length)}">
      <span class="ig-tile__cap">${s(t.caption||t.url.replace("https://www.instagram.com/",""))}</span>
      <span class="ig-tile__badge">${p}</span>
    </a>`,v=e.saved.length?e.saved.map(t=>d(t,"\u{1F516}")).join(""):'<p class="ig-empty">Nothing saved.</p>',g=e.liked.length?e.liked.map(t=>d(t,"\u2764\uFE0F")).join(""):'<p class="ig-empty">No likes.</p>',f=30,m=[...e.saved,...e.liked].map(t=>t.caption).filter(Boolean),y=e.posts.map(t=>`<a class="ig-tile" href="#"><img src="${t.media}" alt="post"></a>`),A=Array.from({length:Math.max(0,f-y.length)},(t,p)=>`
    <a class="ig-tile ig-tile--post" href="#" style="background:${T(p)}">
      <span class="ig-tile__cap">${s(m[p%(m.length||1)]||"")}</span>
    </a>`),L=y.length||A.length?[...y,...A].join(""):'<p class="ig-empty">No posts yet.</p>',o='<svg class="ig-tile__ov" viewBox="0 0 24 24"><polygon points="10 8 16 12 10 16 10 8" fill="currentColor" stroke="none"/></svg>',$=Array.from({length:12},(t,p)=>`
    <a class="ig-tile ig-tile--post" href="#" style="background:${T(p+5)}">${o}
      <span class="ig-tile__cap">${s(m[(p+2)%(m.length||1)]||"")}</span>
    </a>`).join(""),k=Array.from({length:9},(t,p)=>`
    <a class="ig-tile ig-tile--post" href="#" style="background:${T(p+9)}">
      <span class="ig-tile__badge">@${s(a.username)}</span>
    </a>`).join(""),E=e.comments.length?e.comments.map(t=>`
      <div class="ig-comment">
        <div class="ig-comment__text">${s(t.text)}</div>
        <div class="ig-comment__meta">${t.owner?"@"+s(t.owner)+" \xB7 ":""}${s(t.time||"")}</div>
      </div>`).join(""):'<p class="ig-empty">No comments.</p>',w=t=>`<div class="ig-grid">${t}</div>`,M=e.posts[0]?.media?`<img class="ig-head__avatar" src="${e.posts[0].media}" alt="${s(a.username)}">`:'<div class="ig-head__avatar"></div>';i.innerHTML=`
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
          ${M}
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

      <div class="ig-pane is-active" data-pane="posts">${w(L)}</div>
      <div class="ig-pane" data-pane="reels">${w($)}</div>
      <div class="ig-pane" data-pane="tagged">${w(k)}</div>
      <div class="ig-pane" data-pane="saved">${w(v)}</div>
      <div class="ig-pane" data-pane="liked">${w(g)}</div>
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
    </div>`,i.querySelectorAll(".ig-tab, .ig-pill").forEach(t=>{t.addEventListener("click",()=>{let p=t.dataset.pane;i.querySelectorAll(".ig-tab, .ig-pill").forEach(h=>h.classList.toggle("is-active",h===t)),i.querySelectorAll(".ig-pane").forEach(h=>h.classList.toggle("is-active",h.dataset.pane===p))})});let u=i.querySelector("#ig-modal"),q=t=>{let p=t==="followers"?e.followers:e.following,h=t==="followers"?a.followers:a.following,Q=te(p,h);i.querySelector("#ig-modal-title").textContent=t==="followers"?"Followers":"Following",i.querySelector("#ig-modal-sub").textContent=`${n(h)} ${t}`,i.querySelector("#ig-modal-list").innerHTML=Q.map(I=>`
      <div class="ig-row">
        <div class="ig-row__avatar" style="background:${ie(I)}">${s(I.charAt(0).toUpperCase())}</div>
        <a class="ig-row__handle" href="https://www.instagram.com/${s(I)}" target="_blank" rel="noopener">${s(I)}</a>
        <span class="ig-row__follow">Follow</span>
      </div>`).join(""),u.classList.add("is-open")};i.querySelectorAll(".ig-head__stat[data-modal]").forEach(t=>t.addEventListener("click",()=>q(t.dataset.modal)));let x=()=>u.classList.remove("is-open");i.querySelector("#ig-modal-close").addEventListener("click",x),u.addEventListener("click",t=>{t.target===u&&x()})}var S={home:'<svg viewBox="0 0 24 24"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/></svg>',net:'<svg viewBox="0 0 24 24"><circle cx="9" cy="7" r="4"/><path d="M17 11a4 4 0 1 0-3-6.6M1 21v-2a4 4 0 0 1 4-4h8a4 4 0 0 1 4 4v2M17 15a4 4 0 0 1 4 4v2"/></svg>',jobs:'<svg viewBox="0 0 24 24"><rect x="2" y="7" width="20" height="14" rx="2"/><path d="M8 7V5a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"/></svg>',msg:'<svg viewBox="0 0 24 24"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>',bell:'<svg viewBox="0 0 24 24"><path d="M18 8a6 6 0 1 0-12 0c0 7-3 9-3 9h18s-3-2-3-9M13.7 21a2 2 0 0 1-3.4 0"/></svg>',like:'<svg viewBox="0 0 24 24"><path d="M14 9V5a3 3 0 0 0-6 0v4H5a2 2 0 0 0-2 2l1 7a2 2 0 0 0 2 2h9a2 2 0 0 0 2-2l1-7a2 2 0 0 0-2-2z"/></svg>',comment:'<svg viewBox="0 0 24 24"><path d="M21 11.5a8.4 8.4 0 0 1-9 8.4 9 9 0 0 1-4-1L3 20l1.1-4.9A8.4 8.4 0 0 1 12 3a8.4 8.4 0 0 1 9 8.5z"/></svg>',repost:'<svg viewBox="0 0 24 24"><polyline points="17 1 21 5 17 9"/><path d="M3 11V9a4 4 0 0 1 4-4h14M7 23l-4-4 4-4M21 13v2a4 4 0 0 1-4 4H3"/></svg>',send:'<svg viewBox="0 0 24 24"><line x1="22" y1="2" x2="11" y2="13"/><polygon points="22 2 15 22 11 13 2 9 22 2"/></svg>'};function V(i){return i.split(/\s+/).filter(Boolean).slice(0,2).map(e=>e.charAt(0).toUpperCase()).join("")}var D={experience:3,education:3,skills:12,projects:2};function B(i,e,a,n="more"){if(i.length<=e)return i.map(a).join("");let c=i.slice(0,e).map(a).join(""),r=i.slice(e).map(a).join(""),l=`Show ${i.length-e} ${n}`;return`${c}<div class="li-more-wrap">${r}</div><button type="button" class="li-more" aria-expanded="false" data-label="${l}">${l}</button>`}function le(){let i=document.getElementById("li-view");if(!i)return;let e=globalThis.PORTAL_DATA?.linkedin;if(!e){i.innerHTML='<p class="li-empty">LinkedIn data not loaded.</p>';return}let a=e.profile,n=(o,$)=>`<div class="li-nav__item">${o}<span>${$}</span></div>`,c=globalThis.PORTAL_DATA?.instagram?.posts?.[0]?.media,r=a.photo||c,l=r?`<div class="li-phead__avatar li-phead__avatar--img"><img src="${r}" alt="${s(a.name)}"></div>`:`<div class="li-phead__avatar" style="background:${_[3]}">${s(V(a.name))}</div>`,d=(o,$)=>`<section class="li-card li-section"><h2 class="li-section__title">${o}</h2>${$}</section>`,v='<p class="li-need">Not in the saved profile page \u2014 add from your LinkedIn data export (Settings \u2192 Get a copy of your data).</p>',g=e.experience.length?B(e.experience,D.experience,o=>`
      <div class="li-item">
        <div class="li-item__logo">${s(o.company.charAt(0))}</div>
        <div>
          <div class="li-item__title">${s(o.title)}</div>
          <div class="li-item__sub">${s(o.company)}</div>
          <div class="li-item__meta">${s(o.dates)}${o.location?" \xB7 "+s(o.location):""}</div>
          ${o.description?`<div class="li-item__desc">${longText(formatLI(o.description))}</div>`:""}
        </div>
      </div>`,"roles"):v,f=e.education.length?B(e.education,D.education,o=>`
      <div class="li-item">
        <div class="li-item__logo">${s(o.school.charAt(0))}</div>
        <div>
          <div class="li-item__title">${s(o.school)}</div>
          <div class="li-item__sub">${s(o.degree)}</div>
          <div class="li-item__meta">${s(o.dates)}</div>
        </div>
      </div>`,"schools"):v,m=e.skills.length?`<div class="li-skills">${B(e.skills,D.skills,o=>`<span class="li-skill">${s(o)}</span>`,"skills")}</div>`:v,y=e.about?`<div class="li-about">${longText(formatLI(e.about))}</div>`:v,A=e.languages.length?e.languages.map(o=>`
      <div class="li-lang">
        <span class="li-lang__name">${s(o.name)}</span>
        <span class="li-lang__level">${s(o.proficiency)}</span>
      </div>`).join(""):v,L=e.projects.length?B(e.projects,D.projects,o=>`
      <div class="li-item li-item--proj">
        <div>
          <div class="li-item__title">${s(o.title)}${o.url?` \xB7 <a href="${s(o.url)}" target="_blank" rel="noopener">link</a>`:""}</div>
          ${o.dates?`<div class="li-item__meta">${s(o.dates)}</div>`:""}
          <div class="li-item__desc">${longText(formatLI(o.description))}</div>
        </div>
      </div>`,"projects"):v;i.innerHTML=`
    <nav class="li-nav">
      <div class="li-nav__inner">
        <span class="li-nav__logo">in</span>
        <div class="li-nav__search"><input placeholder="Search"></div>
        <div class="li-nav__items">
          ${n(S.home,"Home")}
          ${n(S.net,"Network")}
          ${n(S.jobs,"Jobs")}
          ${n(S.msg,"Messaging")}
          ${n(S.bell,"Notifications")}
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
        ${d("About",y)}
        ${d("Experience",g)}
        ${d("Education",f)}
        ${d("Skills",m)}
        ${d("Projects",L)}
        ${d("Languages",A)}
      </div>
      <aside class="li-prof__rail">
        <div class="li-card li-side">
          <div class="li-side__title">Profile</div>
          <div class="li-side__row"><span>Current</span><strong>${s(a.current)}</strong></div>
          <div class="li-side__row"><span>Location</span><strong>${s(a.location.split(",")[0])}</strong></div>
          <div class="li-side__row"><span>Profile</span><a href="https://${s(a.url)}" target="_blank" rel="noopener">${s(a.url)}</a></div>
        </div>
      </aside>
    </div>`,i.querySelectorAll(".li-more").forEach(o=>{o.addEventListener("click",()=>{let $=o.previousElementSibling;if(!($ instanceof HTMLElement)||!$.classList.contains("li-more-wrap"))return;let k=$.classList.toggle("li-more-wrap--open");o.setAttribute("aria-expanded",String(k)),o.textContent=k?"Show less":o.dataset.label??"Show more"})})}var R={bell:'<svg viewBox="0 0 24 24"><path d="M18 8a6 6 0 1 0-12 0c0 7-3 9-3 9h18s-3-2-3-9M13.7 21a2 2 0 0 1-3.4 0"/></svg>',chat:'<svg viewBox="0 0 24 24"><path d="M21 11.5a8.4 8.4 0 0 1-9 8.4 9 9 0 0 1-4-1L3 20l1.1-4.9A8.4 8.4 0 0 1 12 3a8.4 8.4 0 0 1 9 8.5z"/></svg>'},F=[220,300,180,340,260,200,320,240,280];function oe(){let i=document.getElementById("pin-view");if(!i)return;let e=globalThis.PORTAL_DATA?.pinterest,a=e?.boards??[],n=e?.profile,c=a.map((r,l)=>{let d=F[l%F.length],v=r.cover?`<img class="pin-card__img" src="${s(r.cover)}" alt="${s(r.name)}" loading="lazy">`:`<div class="pin-card__ph" style="height:${d}px;background:${T(l)}">\u{1F4CC}</div>`;return`
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
        <div class="pin-nav__icons">${R.bell}${R.chat}<span class="pin-nav__avatar" style="background:${_[3]}">D</span></div>
      </div>
    </nav>
    <div class="pin-head">@${s(n?.username||"diegonmarcos")} \xB7 <strong>${n?.boards??a.length}</strong> boards \xB7 <strong>${n?.pins??0}</strong> pins</div>
    <div class="pin-board">${c||'<p class="pin-empty">No boards.</p>'}</div>`}function re(){let i=document.getElementById("tid-view");if(!i)return;let e=globalThis.PORTAL_DATA?.tidal,a=e?.playlists??[],n=e?.profile,c=l=>{if(!l)return"";let d=Math.floor(l/3600),v=Math.round(l%3600/60);return d?`${d}h ${v}m`:`${v} min`},r=a.map((l,d)=>{let v=l.cover?`<img class="tid-card__img" src="${s(l.cover)}" alt="${s(l.name)}" loading="lazy">`:`<div class="tid-card__ph" style="background:${T(d)}">\u266B</div>`;return`
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
    </div>`}function ve(){let i=document.getElementById("yt-view");if(!i)return;let e=globalThis.PORTAL_DATA?.youtube,a=e?.videos??[],n=e?.playlists??[],c=e?.profile,r=(g,f)=>{let m=g.thumbnail?`<img class="yt-card__img" src="${s(g.thumbnail)}" alt="${s(g.title)}" loading="lazy">`:`<div class="yt-card__ph" style="background:${T(f)}">\u25B6</div>`;return`
    <a class="yt-card" href="${s(g.url||"#")}" target="_blank" rel="noopener">
      <div class="yt-card__thumb">${m}${g.duration?`<span class="yt-card__duration">${s(g.duration)}</span>`:""}</div>
      <div class="yt-card__title">${s(g.title)}</div>
      ${g.channel?`<div class="yt-card__channel">${s(g.channel)}</div>`:""}
      <div class="yt-card__meta">${g.views!==void 0?`${g.views.toLocaleString()} views`:""}${g.views!==void 0&&g.date?" \xB7 ":""}${g.date?s(g.date):""}</div>
    </a>`},l=n.map(g=>`
    <section class="yt-shelf">
      <div class="yt-shelf__title">${s(g.name)}</div>
      <div class="yt-shelf__row">${g.videos.map((f,m)=>r(f,m)).join("")}</div>
    </section>`).join(""),d=a.length?`<div class="yt-grid">${a.map((g,f)=>r(g,f)).join("")}</div>`:"",v=n.length||a.length;i.innerHTML=`
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
    </div>`}var C=(i=!1)=>{let e=i?"#c7cbb9":"#8fbf3f",a=i?"#c7cbb9":"#ef4a2b",n=i?"#e4e4d8":"#ffd400",c=i?"#9a9d90":"#1a1a12";return`<svg class="icq-flower" viewBox="0 0 16 16" aria-hidden="true">${Array.from({length:8},(l,d)=>{let v=d*45;return`<ellipse cx="8" cy="2.9" rx="1.9" ry="2.9" fill="${d===0?a:e}" stroke="${c}" stroke-width="0.5" transform="rotate(${v} 8 8)"/>`}).join("")}<circle cx="8" cy="8" r="2.4" fill="${n}" stroke="${c}" stroke-width="0.5"/></svg>`};var z={online:!1,away:!1,dnd:!1,offline:!0};function ge(){let i=document.getElementById("icq-view");if(!i)return;let e=globalThis.PORTAL_DATA||{},a=e.linkedin,n=e.instagram,c=a?.profile.name||"Diego Nepomuceno Marcos",r=n?.profile.username||"diegonmarcos",l=c.split(" ")[0],d=c.split(" ").slice(1).join(" "),v=(a?.profile.location||"Berlin, Germany").split(",").map(t=>t.trim()),g=v[0]||"",f=v[v.length-1]||"",m=a?.experience?.[0],y=a?.about||n?.profile.bio||"",A=a?.skills||[],L=a?.languages||[],o="184-042-518",$=["online","online","away","online","dnd","away","offline","offline","offline"],k=Y.map((t,p)=>({...t,status:$[p%$.length]})),E=k.filter(t=>t.status!=="offline"),w=k.filter(t=>t.status==="offline"),M=t=>`<li class="icq-contact">${C(z[t.status])}<span>${s(t.name)}</span></li>`,u=(t,p)=>p?`<div class="icq-field"><span class="icq-field__k">${s(t)}</span><span class="icq-field__v">${s(p)}</span></div>`:"",q=[{id:"main",label:"Main",body:`
        ${u("Nickname",r)}
        ${u("First Name",l)}
        ${u("Last Name",d)}
        ${u("ICQ#",o)}
        ${u("Email","me@diegonmarcos.com")}
        ${u("Headline",a?.profile.headline||"")}`},{id:"home",label:"Home",body:`
        ${u("City",g)}
        ${u("Country",f)}
        ${u("Homepage",a?.profile.url||"linktree.diegonmarcos.com")}
        ${L.length?`<div class="icq-field"><span class="icq-field__k">Languages</span><span class="icq-field__v">${L.map(t=>s(t.name)).join(", ")}</span></div>`:""}`},{id:"work",label:"Work",body:m?`
        ${u("Company",m.company)}
        ${u("Title",m.title)}
        ${u("Since",m.dates)}
        ${u("Location",m.location||"")}`:'<p class="icq-empty">No work info.</p>'},{id:"about",label:"About",body:y?`<p class="icq-about">${s(y)}</p>`:'<p class="icq-empty">No about info.</p>'},{id:"interests",label:"Interests",body:A.length?`<div class="icq-interests">${A.map(t=>`<span class="icq-chip">${s(t)}</span>`).join("")}</div>`:'<p class="icq-empty">No interests listed.</p>'}],x='<span class="icq-win__btns"><i>_</i><i>\u25A1</i><i>\u2715</i></span>';i.innerHTML=`
    <div class="icq-desk">
      <!-- Contact list window -->
      <div class="icq-win icq-win--list">
        <div class="icq-win__bar">${C("#ffffff")}<span class="icq-win__title">ICQ</span>${x}</div>
        <div class="icq-list">
          <div class="icq-group icq-group--online">Online (${E.length})</div>
          <ul>${E.map(M).join("")}</ul>
          <div class="icq-group icq-group--offline">Offline (${w.length})</div>
          <ul>${w.map(M).join("")}</ul>
        </div>
        <div class="icq-list__foot">${C(z.online)}<span>Online</span><span class="icq-uin">#${o}</span></div>
      </div>

      <!-- User details window -->
      <div class="icq-win icq-win--details">
        <div class="icq-win__bar icq-win__bar--alt">${C("#ffffff")}<span class="icq-win__title">User Details \u2014 ${s(r)}</span>${x}</div>
        <div class="icq-detail">
          <div class="icq-detail__head">
            <div class="icq-detail__avatar">${s(V(c))}</div>
            <div>
              <div class="icq-detail__name">${s(c)}</div>
              <div class="icq-detail__nick">"${s(r)}" \xB7 #${o}</div>
            </div>
          </div>
          <div class="icq-tabs">
            ${q.map((t,p)=>`<button class="icq-tab${p===0?" is-active":""}" data-icq-pane="${t.id}">${t.label}</button>`).join("")}
          </div>
          ${q.map((t,p)=>`<div class="icq-pane${p===0?" is-active":""}" data-icq-pane="${t.id}">${t.body}</div>`).join("")}
        </div>
      </div>
    </div>`,i.querySelectorAll(".icq-tab").forEach(t=>{t.addEventListener("click",()=>{let p=t.dataset.icqPane;i.querySelectorAll(".icq-tab").forEach(h=>h.classList.toggle("is-active",h===t)),i.querySelectorAll(".icq-pane").forEach(h=>h.classList.toggle("is-active",h.dataset.icqPane===p))})})}function pe(){let i=document.getElementById("me-view");if(!i)return;let e=globalThis.PORTAL_DATA||{},a=e.instagram,n=e.linkedin,c=n?.profile.name||a?.profile.name||"Diego Nepomuceno Marcos",r=n?.profile.headline||"",l=n?.profile.location||"",d=a?.profile.bio||"",v=a?.posts[0]?.media,g=globalThis.PORTAL_DATA?.tidal,f=[{theme:"linkedin",label:"LinkedIn",meta:n?`${n.profile.connections} connections \xB7 ${n.profile.followers.toLocaleString()} followers`:"profile",color:"#0a66c2"},{theme:"instagram",label:"Instagram",meta:a?`${a.profile.followers.toLocaleString()} followers \xB7 ${a.profile.posts} post${a.profile.posts===1?"":"s"}`:"profile",color:"#dc2743"},{theme:"pinterest",label:"Pinterest",meta:"boards & pins",color:"#e60023"},{theme:"tidal",label:"TIDAL",meta:g?`${g.profile.playlists} playlists`:"playlists",color:"#00ffff"},{theme:"strava",label:"Strava",meta:"activities & routes",color:"#fc5200"},{theme:"youtube",label:"YouTube",meta:"playlists & videos",color:"#ff0000"},{theme:"orkut",label:"Orkut",meta:"the classic profile",color:"#e9008c"},{theme:"icq",label:"ICQ",meta:"retro IM \xB7 user details",color:"#0a870a"}];i.innerHTML=`
    <div class="me-hub">
      <div class="me-card">
        ${v?`<img class="me-avatar" src="${v}" alt="${s(c)}">`:'<div class="me-avatar"></div>'}
        <h1 class="me-name">${s(c)}</h1>
        ${r?`<p class="me-headline">${s(r)}</p>`:""}
        ${l?`<p class="me-loc">${s(l)}</p>`:""}
        ${d?`<p class="me-bio">${s(d)}</p>`:""}
      </div>
      <div class="me-links">
        ${f.map(m=>`
          <button class="me-link" data-goto="${m.theme}" style="--accent:${m.color}">
            <span class="me-link__dot"></span>
            <span class="me-link__body">
              <span class="me-link__name">${m.label}</span>
              <span class="me-link__meta">${s(m.meta)}</span>
            </span>
            <span class="me-link__arrow">\u2192</span>
          </button>`).join("")}
      </div>
    </div>`,i.querySelectorAll(".me-link").forEach(m=>m.addEventListener("click",()=>O(m.dataset.goto)))}var U="mySocials.theme",me=["myprofile","orkut","instagram","linkedin","pinterest","tidal","strava","youtube","icq"];function O(i){document.documentElement.setAttribute("data-theme",i);try{localStorage.setItem(U,i)}catch{}document.querySelectorAll("[data-theme-btn]").forEach(e=>{e.classList.toggle("is-active",e.dataset.themeBtn===i)}),window.scrollTo(0,0)}function _e(){let i=localStorage.getItem(U);O(me.includes(i)?i:"myprofile"),document.querySelectorAll("[data-theme-btn]").forEach(e=>{e.addEventListener("click",()=>O(e.dataset.themeBtn))})}function G(){X(),Z(),ee(),ae(),se(),ne(),le(),oe(),re(),de(),ve(),ge(),pe(),_e(),setTimeout(()=>{document.querySelectorAll(".trust-meter__fill").forEach(i=>{i.style.transition="width 1.2s cubic-bezier(0.16, 1, 0.3, 1)"})},300)}document.readyState==="loading"?document.addEventListener("DOMContentLoaded",G):G();})();
