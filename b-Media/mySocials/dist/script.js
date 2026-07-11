(()=>{var c=["#e8508a","#4a8aff","#3abb78","#8a6aff","#ff8a4a","#4ac0ff","#ff4a8a","#50c878","#ffa040","#8080ff","#ff6060","#40c0c0","#c060ff","#ff9060","#60b0ff"],z=[{name:"Ana Silva",initial:"A",color:c[0]},{name:"Bruno Costa",initial:"B",color:c[1]},{name:"Carla Souza",initial:"C",color:c[2]},{name:"Daniel Lima",initial:"D",color:c[3]},{name:"Elena Torres",initial:"E",color:c[4]},{name:"Felipe Gomes",initial:"F",color:c[5]},{name:"Gabi Santos",initial:"G",color:c[6]},{name:"Hugo Pereira",initial:"H",color:c[7]},{name:"Isa Oliveira",initial:"I",color:c[8]}],U=[{author:"Ana Silva",initial:"A",color:c[0],text:"Hey Diego! Miss our coding sessions at the uni. We should catch up soon! Saudades demais!",time:"2 hours ago"},{author:"Bruno Costa",initial:"B",color:c[1],text:"Cara, vi que voce ta morando em Berlin agora! Que top! Vamos marcar uma call?",time:"5 hours ago"},{author:"Carla Souza",initial:"C",color:c[2],text:"Happy birthday atrasado!! Hope you had an amazing day. Your projects are looking incredible btw",time:"yesterday"},{author:"Felipe Gomes",initial:"F",color:c[5],text:"Mano, teu MyMaps ta INSANO. Lembra quando a gente fazia mapa no paint? kkkk Evoluimos!",time:"2 days ago"},{author:"Gabi Santos",initial:"G",color:c[6],text:'Diego!! Join our community "Linux Users Brazil" please! We need more devs like you there',time:"3 days ago"},{author:"Hugo Pereira",initial:"H",color:c[7],text:"Saw your Strava activities... beast mode! When did you start cycling?",time:"4 days ago"},{author:"Isa Oliveira",initial:"I",color:c[8],text:"Testimonial request sent! You were the best partner for the compiler project, forever grateful",time:"1 week ago"}],Q=[{name:"Eu odeio acordar cedo",members:1247893,emoji:"\u{1F634}",color:"#8a6aff"},{name:"NixOS Brasil",members:3420,emoji:"\u2744\uFE0F",color:"#4a8aff"},{name:"Linux Users",members:89340,emoji:"\u{1F427}",color:"#3abb78"},{name:"Cycling Addicts",members:45200,emoji:"\u{1F6B4}",color:"#ff8a4a"},{name:"Self-hosted Everything",members:12800,emoji:"\u{1F5A5}\uFE0F",color:"#4ac0ff"},{name:"Saudades do Orkut",members:892340,emoji:"\u{1F62D}",color:"#e8508a"},{name:"Maps & Geography",members:23100,emoji:"\u{1F30D}",color:"#50c878"},{name:"Berlin Brasileiros",members:8900,emoji:"\u{1F1E7}\u{1F1F7}",color:"#ffa040"},{name:"Coffee > Sleep",members:456e3,emoji:"\u2615",color:"#c08040"}],K=[{author:"Ana Silva",date:"Dec 2023",text:"Diego is one of those rare people who can debug your code AND your life. An incredible friend, always there when you need help. 10/10 would add as friend again."},{author:"Bruno Costa",date:"Nov 2023",text:"Known Diego since university. The guy literally automated everything in his life with NixOS. Respect the dedication. Best engineer I know, no cap."},{author:"Carla Souza",date:"Oct 2023",text:"The most creative developer I have ever worked with. His projects are not just functional, they are beautiful. An artist disguised as an engineer."},{author:"Elena Torres",date:"Sep 2023",text:"Diego helped me set up my entire self-hosted infrastructure. Refused to let me use any cloud subscription. A true freedom fighter of the internet!"}],B=["#1a2840","#2a1840","#182838","#281828","#1a3028","#302818","#201838","#283018","#381828"];function Y(){let s=document.getElementById("friends-grid");s&&z.forEach(e=>{let a=document.createElement("div");a.className="friend-cell",a.innerHTML=`
      <div class="friend-cell__avatar">
        <div class="friend-cell__avatar-inner" style="background:${e.color}">${e.initial}</div>
      </div>
      <span class="friend-cell__name">${e.name.split(" ")[0]}</span>
    `,s.appendChild(a)})}function X(){let s=document.getElementById("scraps-list");s&&U.forEach(e=>{let a=document.createElement("div");a.className="scrap",a.innerHTML=`
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
    `,s.appendChild(a)})}function Z(){let s=document.getElementById("communities-grid");s&&Q.forEach(e=>{let a=document.createElement("a");a.href="#",a.className="community-card";let n=e.members>=1e6?`${(e.members/1e6).toFixed(1)}M members`:e.members>=1e3?`${(e.members/1e3).toFixed(0)}K members`:`${e.members} members`;a.innerHTML=`
      <div class="community-card__icon" style="background:${e.color}20;color:${e.color}">${e.emoji}</div>
      <div class="community-card__body">
        <span class="community-card__name">${e.name}</span>
        <span class="community-card__members">${n}</span>
      </div>
    `,s.appendChild(a)})}function ee(){let s=document.getElementById("testimonials-list");s&&K.forEach(e=>{let a=document.createElement("div");a.className="testimonial",a.innerHTML=`
      <div class="testimonial__header">
        <span class="testimonial__author">${e.author}</span>
        <span class="testimonial__date">${e.date}</span>
      </div>
      <p class="testimonial__text">${e.text}</p>
    `,s.appendChild(a)})}function ae(){let s=document.getElementById("photo-grid");if(s)for(let e=0;e<9;e++){let a=document.createElement("div");a.className="photo-cell",a.innerHTML=`<div class="photo-cell__inner" style="background:${B[e%B.length]}"></div>`,s.appendChild(a)}}var f={heart:'<svg viewBox="0 0 24 24"><path d="M20.8 4.6a5.5 5.5 0 0 0-7.8 0L12 5.6l-1-1a5.5 5.5 0 0 0-7.8 7.8l1 1L12 21l7.8-7.6 1-1a5.5 5.5 0 0 0 0-7.8z"/></svg>',comment:'<svg viewBox="0 0 24 24"><path d="M21 11.5a8.4 8.4 0 0 1-9 8.4 9 9 0 0 1-4-1L3 20l1.1-4.9A8.4 8.4 0 0 1 12 3a8.4 8.4 0 0 1 9 8.5z"/></svg>',share:'<svg viewBox="0 0 24 24"><line x1="22" y1="2" x2="11" y2="13"/><polygon points="22 2 15 22 11 13 2 9 22 2"/></svg>',save:'<svg viewBox="0 0 24 24"><path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"/></svg>',home:'<svg viewBox="0 0 24 24"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/></svg>',grid:'<svg viewBox="0 0 24 24"><rect x="3" y="3" width="18" height="18" rx="2"/><line x1="9" y1="3" x2="9" y2="21"/><line x1="15" y1="3" x2="15" y2="21"/><line x1="3" y1="9" x2="21" y2="9"/><line x1="3" y1="15" x2="21" y2="15"/></svg>',reels:'<svg viewBox="0 0 24 24"><rect x="3" y="3" width="18" height="18" rx="3"/><line x1="3" y1="8" x2="21" y2="8"/><line x1="8" y1="3" x2="10" y2="8"/><line x1="14" y1="3" x2="16" y2="8"/><polygon points="10 11 15 13.5 10 16" fill="currentColor" stroke="none"/></svg>',tagged:'<svg viewBox="0 0 24 24"><rect x="3" y="3" width="18" height="18" rx="3"/><circle cx="12" cy="10" r="3"/><path d="M7 18a5 5 0 0 1 10 0"/></svg>'};function k(s){let e=B[s%B.length],a=c[s%c.length];return`linear-gradient(135deg, ${e}, ${a})`}function t(s){return s.replace(/[&<>"]/g,e=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"})[e])}function ie(s){let e=0;for(let a=0;a<s.length;a++)e=e*31+s.charCodeAt(a)>>>0;return c[e%c.length]}var C=["ana","bruno","carla","diego","elena","felipe","gabi","hugo","isa","joao","lu","marco","nina","otto","paula","rafa","sofia","tiago","vera","yara"],H=["","_",".","__"],N=["","br","berlin","photo","travel","x","oficial","real","99","mrx","gram"];function se(s,e){let a=s.slice();for(let n=0;a.length<e;n++){let r=C[n%C.length],p=H[(n>>2)%H.length],m=N[(n>>1)%N.length],g=Math.floor(n/(C.length*H.length)),v=`${r}${p}${m}${g>0?g:""}`;a.includes(v)?a.push(`${v}${a.length}`):a.push(v)}return a}function te(){let s=document.getElementById("ig-view");if(!s)return;let e=globalThis.PORTAL_DATA?.instagram;if(!e){s.innerHTML='<p class="ig-empty">Instagram data not loaded.</p>';return}let a=e.profile,n=i=>i.toLocaleString(),r=e.stories.map((i,l)=>`
    <div class="ig-hl">
      <div class="ig-hl__ring"><div class="ig-hl__avatar"><img src="${i.media}" alt="story ${l+1}"></div></div>
      <span class="ig-hl__name">${t(i.caption||"Story")}</span>
    </div>`),p=(e.highlights||[]).map((i,l)=>`
    <div class="ig-hl">
      <div class="ig-hl__ring"><div class="ig-hl__avatar" style="background:${k(l)}"><span class="ig-hl__emoji">${i.emoji}</span></div></div>
      <span class="ig-hl__name">${t(i.label)}</span>
    </div>`),m=[...r,...p].join(""),g=(i,l)=>`
    <a class="ig-tile" href="${t(i.url)}" target="_blank" rel="noopener" style="background:${k(i.url.length)}">
      <span class="ig-tile__cap">${t(i.caption||i.url.replace("https://www.instagram.com/",""))}</span>
      <span class="ig-tile__badge">${l}</span>
    </a>`,v=e.saved.length?e.saved.map(i=>g(i,"\u{1F516}")).join(""):'<p class="ig-empty">Nothing saved.</p>',w=e.liked.length?e.liked.map(i=>g(i,"\u2764\uFE0F")).join(""):'<p class="ig-empty">No likes.</p>',h=30,_=[...e.saved,...e.liked].map(i=>i.caption).filter(Boolean),b=e.posts.map(i=>`<a class="ig-tile" href="#"><img src="${i.media}" alt="post"></a>`),x=Array.from({length:Math.max(0,h-b.length)},(i,l)=>`
    <a class="ig-tile ig-tile--post" href="#" style="background:${k(l)}">
      <span class="ig-tile__cap">${t(_[l%(_.length||1)]||"")}</span>
    </a>`),o=b.length||x.length?[...b,...x].join(""):'<p class="ig-empty">No posts yet.</p>',$='<svg class="ig-tile__ov" viewBox="0 0 24 24"><polygon points="10 8 16 12 10 16 10 8" fill="currentColor" stroke="none"/></svg>',S=Array.from({length:12},(i,l)=>`
    <a class="ig-tile ig-tile--post" href="#" style="background:${k(l+5)}">${$}
      <span class="ig-tile__cap">${t(_[(l+2)%(_.length||1)]||"")}</span>
    </a>`).join(""),A=Array.from({length:9},(i,l)=>`
    <a class="ig-tile ig-tile--post" href="#" style="background:${k(l+9)}">
      <span class="ig-tile__badge">@${t(a.username)}</span>
    </a>`).join(""),E=e.comments.length?e.comments.map(i=>`
      <div class="ig-comment">
        <div class="ig-comment__text">${t(i.text)}</div>
        <div class="ig-comment__meta">${i.owner?"@"+t(i.owner)+" \xB7 ":""}${t(i.time||"")}</div>
      </div>`).join(""):'<p class="ig-empty">No comments.</p>',y=i=>`<div class="ig-grid">${i}</div>`,M=e.posts[0]?.media?`<img class="ig-head__avatar" src="${e.posts[0].media}" alt="${t(a.username)}">`:'<div class="ig-head__avatar"></div>';s.innerHTML=`
    <nav class="ig-nav">
      <div class="ig-nav__inner">
        <a href="#" class="ig-nav__logo">My Socials</a>
        <div class="ig-nav__search"><input placeholder="Search"></div>
        <div class="ig-nav__icons">${f.home}${f.heart}${f.comment}${f.share}</div>
      </div>
    </nav>
    <div class="ig-page">
      <header class="ig-head">
        <div class="ig-head__user">${t(a.username)}</div>
        <div class="ig-head__row">
          ${M}
          <div class="ig-head__stats">
            <div class="ig-head__stat"><strong>${n(a.posts)}</strong><span>posts</span></div>
            <div class="ig-head__stat" data-modal="followers"><strong>${n(a.followers)}</strong><span>followers</span></div>
            <div class="ig-head__stat" data-modal="following"><strong>${n(a.following)}</strong><span>following</span></div>
          </div>
        </div>
        <div class="ig-head__name">${t(a.name)}</div>
        <div class="ig-head__bio">${t(a.bio)}</div>
        <div class="ig-head__actions">
          <span class="ig-head__btn ig-head__btn--primary">Follow</span>
          <span class="ig-head__btn">Message</span>
        </div>
      </header>

      ${m?`<div class="ig-highlights">${m}</div>`:""}

      <div class="ig-tabs">
        <div class="ig-tab is-active" data-pane="posts">${f.grid} Posts</div>
        <div class="ig-tab" data-pane="reels">${f.reels} Reels</div>
        <div class="ig-tab" data-pane="tagged">${f.tagged} Tagged</div>
      </div>

      <div class="ig-subtabs">
        <button class="ig-pill" data-pane="saved">${f.save}<span>Saved</span><em>${n(e.saved.length)}</em></button>
        <button class="ig-pill" data-pane="liked">${f.heart}<span>Liked</span><em>${n(e.liked.length)}</em></button>
        <button class="ig-pill" data-pane="comments">${f.comment}<span>Comments</span><em>${n(e.comments.length)}</em></button>
      </div>

      <div class="ig-pane is-active" data-pane="posts">${y(o)}</div>
      <div class="ig-pane" data-pane="reels">${y(S)}</div>
      <div class="ig-pane" data-pane="tagged">${y(A)}</div>
      <div class="ig-pane" data-pane="saved">${y(v)}</div>
      <div class="ig-pane" data-pane="liked">${y(w)}</div>
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
    </div>`,s.querySelectorAll(".ig-tab, .ig-pill").forEach(i=>{i.addEventListener("click",()=>{let l=i.dataset.pane;s.querySelectorAll(".ig-tab, .ig-pill").forEach(u=>u.classList.toggle("is-active",u===i)),s.querySelectorAll(".ig-pane").forEach(u=>u.classList.toggle("is-active",u.dataset.pane===l))})});let d=s.querySelector("#ig-modal"),q=i=>{let l=i==="followers"?e.followers:e.following,u=i==="followers"?a.followers:a.following,J=se(l,u);s.querySelector("#ig-modal-title").textContent=i==="followers"?"Followers":"Following",s.querySelector("#ig-modal-sub").textContent=`${n(u)} ${i}`,s.querySelector("#ig-modal-list").innerHTML=J.map(I=>`
      <div class="ig-row">
        <div class="ig-row__avatar" style="background:${ie(I)}">${t(I.charAt(0).toUpperCase())}</div>
        <a class="ig-row__handle" href="https://www.instagram.com/${t(I)}" target="_blank" rel="noopener">${t(I)}</a>
        <span class="ig-row__follow">Follow</span>
      </div>`).join(""),d.classList.add("is-open")};s.querySelectorAll(".ig-head__stat[data-modal]").forEach(i=>i.addEventListener("click",()=>q(i.dataset.modal)));let L=()=>d.classList.remove("is-open");s.querySelector("#ig-modal-close").addEventListener("click",L),d.addEventListener("click",i=>{i.target===d&&L()})}var T={home:'<svg viewBox="0 0 24 24"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/></svg>',net:'<svg viewBox="0 0 24 24"><circle cx="9" cy="7" r="4"/><path d="M17 11a4 4 0 1 0-3-6.6M1 21v-2a4 4 0 0 1 4-4h8a4 4 0 0 1 4 4v2M17 15a4 4 0 0 1 4 4v2"/></svg>',jobs:'<svg viewBox="0 0 24 24"><rect x="2" y="7" width="20" height="14" rx="2"/><path d="M8 7V5a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"/></svg>',msg:'<svg viewBox="0 0 24 24"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>',bell:'<svg viewBox="0 0 24 24"><path d="M18 8a6 6 0 1 0-12 0c0 7-3 9-3 9h18s-3-2-3-9M13.7 21a2 2 0 0 1-3.4 0"/></svg>',like:'<svg viewBox="0 0 24 24"><path d="M14 9V5a3 3 0 0 0-6 0v4H5a2 2 0 0 0-2 2l1 7a2 2 0 0 0 2 2h9a2 2 0 0 0 2-2l1-7a2 2 0 0 0-2-2z"/></svg>',comment:'<svg viewBox="0 0 24 24"><path d="M21 11.5a8.4 8.4 0 0 1-9 8.4 9 9 0 0 1-4-1L3 20l1.1-4.9A8.4 8.4 0 0 1 12 3a8.4 8.4 0 0 1 9 8.5z"/></svg>',repost:'<svg viewBox="0 0 24 24"><polyline points="17 1 21 5 17 9"/><path d="M3 11V9a4 4 0 0 1 4-4h14M7 23l-4-4 4-4M21 13v2a4 4 0 0 1-4 4H3"/></svg>',send:'<svg viewBox="0 0 24 24"><line x1="22" y1="2" x2="11" y2="13"/><polygon points="22 2 15 22 11 13 2 9 22 2"/></svg>'};function V(s){return s.split(/\s+/).filter(Boolean).slice(0,2).map(e=>e.charAt(0).toUpperCase()).join("")}function O(s){return s.split(/\s*---\s*/).map(e=>e.trim()).filter(Boolean).map(e=>{let a=e.match(/^(@\S[\s\S]*?)\s{2,}([\s\S]*)$/),n=a?a[1].trim():"",r=(a?a[2]:e).split(/\s{2,}/).map(p=>t(p.trim())).filter(Boolean).join("<br>");return`<p class="li-para">${n?`<strong class="li-para__head">${t(n)}</strong>`:""}${r}</p>`}).join("")}function ne(){let s=document.getElementById("li-view");if(!s)return;let e=globalThis.PORTAL_DATA?.linkedin;if(!e){s.innerHTML='<p class="li-empty">LinkedIn data not loaded.</p>';return}let a=e.profile,n=(o,$)=>`<div class="li-nav__item">${o}<span>${$}</span></div>`,r=globalThis.PORTAL_DATA?.instagram?.posts?.[0]?.media,p=r?`<div class="li-phead__avatar li-phead__avatar--img"><img src="${r}" alt="${t(a.name)}"></div>`:`<div class="li-phead__avatar" style="background:${c[3]}">${t(V(a.name))}</div>`,m=(o,$)=>`<section class="li-card li-section"><h2 class="li-section__title">${o}</h2>${$}</section>`,g='<p class="li-need">Not in the saved profile page \u2014 add from your LinkedIn data export (Settings \u2192 Get a copy of your data).</p>',v=e.experience.length?e.experience.map(o=>`
      <div class="li-item">
        <div class="li-item__logo">${t(o.company.charAt(0))}</div>
        <div>
          <div class="li-item__title">${t(o.title)}</div>
          <div class="li-item__sub">${t(o.company)}</div>
          <div class="li-item__meta">${t(o.dates)}${o.location?" \xB7 "+t(o.location):""}</div>
        </div>
      </div>`).join(""):g,w=e.education.length?e.education.map(o=>`
      <div class="li-item">
        <div class="li-item__logo">${t(o.school.charAt(0))}</div>
        <div>
          <div class="li-item__title">${t(o.school)}</div>
          <div class="li-item__sub">${t(o.degree)}</div>
          <div class="li-item__meta">${t(o.dates)}</div>
        </div>
      </div>`).join(""):g,h=e.skills.length?`<div class="li-skills">${e.skills.map(o=>`<span class="li-skill">${t(o)}</span>`).join("")}</div>`:g,_=e.about?`<div class="li-about">${O(e.about)}</div>`:g,b=e.languages.length?e.languages.map(o=>`
      <div class="li-lang">
        <span class="li-lang__name">${t(o.name)}</span>
        <span class="li-lang__level">${t(o.proficiency)}</span>
      </div>`).join(""):g,x=e.projects.length?e.projects.map(o=>`
      <div class="li-item li-item--proj">
        <div>
          <div class="li-item__title">${t(o.title)}${o.url?` \xB7 <a href="${t(o.url)}" target="_blank" rel="noopener">link</a>`:""}</div>
          ${o.dates?`<div class="li-item__meta">${t(o.dates)}</div>`:""}
          <div class="li-item__desc">${O(o.description)}</div>
        </div>
      </div>`).join(""):g;s.innerHTML=`
    <nav class="li-nav">
      <div class="li-nav__inner">
        <span class="li-nav__logo">in</span>
        <div class="li-nav__search"><input placeholder="Search"></div>
        <div class="li-nav__items">
          ${n(T.home,"Home")}
          ${n(T.net,"Network")}
          ${n(T.jobs,"Jobs")}
          ${n(T.msg,"Messaging")}
          ${n(T.bell,"Notifications")}
        </div>
      </div>
    </nav>
    <div class="li-prof">
      <div class="li-prof__main">
        <section class="li-card li-phead">
          <div class="li-phead__banner"></div>
          ${p}
          <div class="li-phead__body">
            <h1 class="li-phead__name">${t(a.name)}</h1>
            <p class="li-phead__headline">${t(a.headline)}</p>
            <p class="li-phead__loc">${t(a.location)} \xB7 <a href="https://${t(a.url)}" target="_blank" rel="noopener">Contact info</a></p>
            <p class="li-phead__meta"><strong>${a.connections}</strong> connections \xB7 <strong>${a.followers.toLocaleString()}</strong> followers</p>
            ${a.open_to_work?`<div class="li-phead__open"><strong>Open to work</strong><br>${t(a.open_to_work)}</div>`:""}
            <div class="li-phead__actions">
              <button class="li-btn li-btn--primary">Connect</button>
              <button class="li-btn">Message</button>
              <button class="li-btn">More</button>
            </div>
          </div>
        </section>
        ${m("About",_)}
        ${m("Experience",v)}
        ${m("Education",w)}
        ${m("Skills",h)}
        ${m("Projects",x)}
        ${m("Languages",b)}
      </div>
      <aside class="li-prof__rail">
        <div class="li-card li-side">
          <div class="li-side__title">Profile</div>
          <div class="li-side__row"><span>Current</span><strong>${t(a.current)}</strong></div>
          <div class="li-side__row"><span>Location</span><strong>${t(a.location.split(",")[0])}</strong></div>
          <div class="li-side__row"><span>Profile</span><a href="https://${t(a.url)}" target="_blank" rel="noopener">${t(a.url)}</a></div>
        </div>
      </aside>
    </div>`}var P={bell:'<svg viewBox="0 0 24 24"><path d="M18 8a6 6 0 1 0-12 0c0 7-3 9-3 9h18s-3-2-3-9M13.7 21a2 2 0 0 1-3.4 0"/></svg>',chat:'<svg viewBox="0 0 24 24"><path d="M21 11.5a8.4 8.4 0 0 1-9 8.4 9 9 0 0 1-4-1L3 20l1.1-4.9A8.4 8.4 0 0 1 12 3a8.4 8.4 0 0 1 9 8.5z"/></svg>'},F=[220,300,180,340,260,200,320,240,280];function oe(){let s=document.getElementById("pin-view");if(!s)return;let a=[...Q.map((n,r)=>({title:n.name,emoji:n.emoji,color:n.color,author:n.name,grad:r})),...U.map((n,r)=>({title:n.text.slice(0,60),emoji:"\u{1F4CC}",color:n.color,author:n.author,grad:r+3}))].map((n,r)=>`
    <div class="pin-card">
      <div class="pin-card__media" style="height:${F[r%F.length]}px;background:${k(n.grad)}">
        ${n.emoji}
        <div class="pin-card__overlay"><span class="pin-card__save">Save</span></div>
      </div>
      <div class="pin-card__title">${n.title}</div>
      <div class="pin-card__meta">
        <span class="pin-card__avatar" style="background:${n.color}">${n.author.charAt(0)}</span>
        <span>${n.author.split(" ")[0]}</span>
      </div>
    </div>`).join("");s.innerHTML=`
    <nav class="pin-nav">
      <div class="pin-nav__inner">
        <span class="pin-nav__logo">P</span>
        <a href="#" class="pin-nav__tab pin-nav__tab--active">Home</a>
        <a href="#" class="pin-nav__tab">Explore</a>
        <div class="pin-nav__search"><input placeholder="Search for ideas"></div>
        <div class="pin-nav__icons">${P.bell}${P.chat}<span class="pin-nav__avatar" style="background:${c[3]}">D</span></div>
      </div>
    </nav>
    <div class="pin-board">${a}</div>`}var j=s=>`<svg class="icq-flower" viewBox="0 0 16 16" aria-hidden="true"><g fill="${s}"><ellipse cx="8" cy="3.2" rx="2.3" ry="2.6"/><ellipse cx="8" cy="12.8" rx="2.3" ry="2.6"/><ellipse cx="3.2" cy="8" rx="2.6" ry="2.3"/><ellipse cx="12.8" cy="8" rx="2.6" ry="2.3"/></g><circle cx="8" cy="8" r="2.3" fill="#ffd400"/></svg>`,R={online:"#33b233",away:"#e0a000",dnd:"#d42a2a",offline:"#9aa0a6"};function le(){let s=document.getElementById("icq-view");if(!s)return;let e=globalThis.PORTAL_DATA||{},a=e.linkedin,n=e.instagram,r=a?.profile.name||"Diego Nepomuceno Marcos",p=n?.profile.username||"diegonmarcos",m=r.split(" ")[0],g=r.split(" ").slice(1).join(" "),v=(a?.profile.location||"Berlin, Germany").split(",").map(i=>i.trim()),w=v[0]||"",h=v[v.length-1]||"",_=a?.experience?.[0],b=a?.about||n?.profile.bio||"",x=a?.skills||[],o=a?.languages||[],$="184-042-518",S=["online","online","away","online","dnd","away","offline","offline","offline"],A=z.map((i,l)=>({...i,status:S[l%S.length]})),E=A.filter(i=>i.status!=="offline"),y=A.filter(i=>i.status==="offline"),M=i=>`<li class="icq-contact">${j(R[i.status])}<span>${t(i.name)}</span></li>`,d=(i,l)=>l?`<div class="icq-field"><span class="icq-field__k">${t(i)}</span><span class="icq-field__v">${t(l)}</span></div>`:"",q=[{id:"main",label:"Main",body:`
        ${d("Nickname",p)}
        ${d("First Name",m)}
        ${d("Last Name",g)}
        ${d("ICQ#",$)}
        ${d("Email","me@diegonmarcos.com")}
        ${d("Headline",a?.profile.headline||"")}`},{id:"home",label:"Home",body:`
        ${d("City",w)}
        ${d("Country",h)}
        ${d("Homepage",a?.profile.url||"linktree.diegonmarcos.com")}
        ${o.length?`<div class="icq-field"><span class="icq-field__k">Languages</span><span class="icq-field__v">${o.map(i=>t(i.name)).join(", ")}</span></div>`:""}`},{id:"work",label:"Work",body:_?`
        ${d("Company",_.company)}
        ${d("Title",_.title)}
        ${d("Since",_.dates)}
        ${d("Location",_.location||"")}`:'<p class="icq-empty">No work info.</p>'},{id:"about",label:"About",body:b?`<p class="icq-about">${t(b)}</p>`:'<p class="icq-empty">No about info.</p>'},{id:"interests",label:"Interests",body:x.length?`<div class="icq-interests">${x.map(i=>`<span class="icq-chip">${t(i)}</span>`).join("")}</div>`:'<p class="icq-empty">No interests listed.</p>'}],L='<span class="icq-win__btns"><i>_</i><i>\u25A1</i><i>\u2715</i></span>';s.innerHTML=`
    <div class="icq-desk">
      <!-- Contact list window -->
      <div class="icq-win icq-win--list">
        <div class="icq-win__bar">${j("#ffffff")}<span class="icq-win__title">ICQ</span>${L}</div>
        <div class="icq-list">
          <div class="icq-group">Online (${E.length})</div>
          <ul>${E.map(M).join("")}</ul>
          <div class="icq-group">Offline (${y.length})</div>
          <ul>${y.map(M).join("")}</ul>
        </div>
        <div class="icq-list__foot">${j(R.online)}<span>Online</span><span class="icq-uin">#${$}</span></div>
      </div>

      <!-- User details window -->
      <div class="icq-win icq-win--details">
        <div class="icq-win__bar icq-win__bar--alt">${j("#ffffff")}<span class="icq-win__title">User Details \u2014 ${t(p)}</span>${L}</div>
        <div class="icq-detail">
          <div class="icq-detail__head">
            <div class="icq-detail__avatar">${t(V(r))}</div>
            <div>
              <div class="icq-detail__name">${t(r)}</div>
              <div class="icq-detail__nick">"${t(p)}" \xB7 #${$}</div>
            </div>
          </div>
          <div class="icq-tabs">
            ${q.map((i,l)=>`<button class="icq-tab${l===0?" is-active":""}" data-icq-pane="${i.id}">${i.label}</button>`).join("")}
          </div>
          ${q.map((i,l)=>`<div class="icq-pane${l===0?" is-active":""}" data-icq-pane="${i.id}">${i.body}</div>`).join("")}
        </div>
      </div>
    </div>`,s.querySelectorAll(".icq-tab").forEach(i=>{i.addEventListener("click",()=>{let l=i.dataset.icqPane;s.querySelectorAll(".icq-tab").forEach(u=>u.classList.toggle("is-active",u===i)),s.querySelectorAll(".icq-pane").forEach(u=>u.classList.toggle("is-active",u.dataset.icqPane===l))})})}function re(){let s=document.getElementById("me-view");if(!s)return;let e=globalThis.PORTAL_DATA||{},a=e.instagram,n=e.linkedin,r=n?.profile.name||a?.profile.name||"Diego Nepomuceno Marcos",p=n?.profile.headline||"",m=n?.profile.location||"",g=a?.profile.bio||"",v=a?.posts[0]?.media,w=[{theme:"linkedin",label:"LinkedIn",meta:n?`${n.profile.connections} connections \xB7 ${n.profile.followers.toLocaleString()} followers`:"profile",color:"#0a66c2"},{theme:"instagram",label:"Instagram",meta:a?`${a.profile.followers.toLocaleString()} followers \xB7 ${a.profile.posts} post${a.profile.posts===1?"":"s"}`:"profile",color:"#dc2743"},{theme:"pinterest",label:"Pinterest",meta:"boards & pins",color:"#e60023"},{theme:"orkut",label:"Orkut",meta:"the classic profile",color:"#e9008c"},{theme:"icq",label:"ICQ",meta:"retro IM \xB7 user details",color:"#0a870a"}];s.innerHTML=`
    <div class="me-hub">
      <div class="me-card">
        ${v?`<img class="me-avatar" src="${v}" alt="${t(r)}">`:'<div class="me-avatar"></div>'}
        <h1 class="me-name">${t(r)}</h1>
        ${p?`<p class="me-headline">${t(p)}</p>`:""}
        ${m?`<p class="me-loc">${t(m)}</p>`:""}
        ${g?`<p class="me-bio">${t(g)}</p>`:""}
      </div>
      <div class="me-links">
        ${w.map(h=>`
          <button class="me-link" data-goto="${h.theme}" style="--accent:${h.color}">
            <span class="me-link__dot"></span>
            <span class="me-link__body">
              <span class="me-link__name">${h.label}</span>
              <span class="me-link__meta">${t(h.meta)}</span>
            </span>
            <span class="me-link__arrow">\u2192</span>
          </button>`).join("")}
      </div>
    </div>`,s.querySelectorAll(".me-link").forEach(h=>h.addEventListener("click",()=>D(h.dataset.goto)))}var W="mySocials.theme",ce=["myprofile","orkut","instagram","linkedin","pinterest","icq"];function D(s){document.documentElement.setAttribute("data-theme",s);try{localStorage.setItem(W,s)}catch{}document.querySelectorAll("[data-theme-btn]").forEach(e=>{e.classList.toggle("is-active",e.dataset.themeBtn===s)}),window.scrollTo(0,0)}function de(){let s=localStorage.getItem(W);D(ce.includes(s)?s:"myprofile"),document.querySelectorAll("[data-theme-btn]").forEach(e=>{e.addEventListener("click",()=>D(e.dataset.themeBtn))})}function G(){Y(),X(),Z(),ee(),ae(),te(),ne(),oe(),le(),re(),de(),setTimeout(()=>{document.querySelectorAll(".trust-meter__fill").forEach(s=>{s.style.transition="width 1.2s cubic-bezier(0.16, 1, 0.3, 1)"})},300)}document.readyState==="loading"?document.addEventListener("DOMContentLoaded",G):G();})();
