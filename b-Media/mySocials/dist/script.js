(()=>{var c=["#e8508a","#4a8aff","#3abb78","#8a6aff","#ff8a4a","#4ac0ff","#ff4a8a","#50c878","#ffa040","#8080ff","#ff6060","#40c0c0","#c060ff","#ff9060","#60b0ff"],U=[{name:"Ana Silva",initial:"A",color:c[0]},{name:"Bruno Costa",initial:"B",color:c[1]},{name:"Carla Souza",initial:"C",color:c[2]},{name:"Daniel Lima",initial:"D",color:c[3]},{name:"Elena Torres",initial:"E",color:c[4]},{name:"Felipe Gomes",initial:"F",color:c[5]},{name:"Gabi Santos",initial:"G",color:c[6]},{name:"Hugo Pereira",initial:"H",color:c[7]},{name:"Isa Oliveira",initial:"I",color:c[8]}],Q=[{author:"Ana Silva",initial:"A",color:c[0],text:"Hey Diego! Miss our coding sessions at the uni. We should catch up soon! Saudades demais!",time:"2 hours ago"},{author:"Bruno Costa",initial:"B",color:c[1],text:"Cara, vi que voce ta morando em Berlin agora! Que top! Vamos marcar uma call?",time:"5 hours ago"},{author:"Carla Souza",initial:"C",color:c[2],text:"Happy birthday atrasado!! Hope you had an amazing day. Your projects are looking incredible btw",time:"yesterday"},{author:"Felipe Gomes",initial:"F",color:c[5],text:"Mano, teu MyMaps ta INSANO. Lembra quando a gente fazia mapa no paint? kkkk Evoluimos!",time:"2 days ago"},{author:"Gabi Santos",initial:"G",color:c[6],text:'Diego!! Join our community "Linux Users Brazil" please! We need more devs like you there',time:"3 days ago"},{author:"Hugo Pereira",initial:"H",color:c[7],text:"Saw your Strava activities... beast mode! When did you start cycling?",time:"4 days ago"},{author:"Isa Oliveira",initial:"I",color:c[8],text:"Testimonial request sent! You were the best partner for the compiler project, forever grateful",time:"1 week ago"}],V=[{name:"Eu odeio acordar cedo",members:1247893,emoji:"\u{1F634}",color:"#8a6aff"},{name:"NixOS Brasil",members:3420,emoji:"\u2744\uFE0F",color:"#4a8aff"},{name:"Linux Users",members:89340,emoji:"\u{1F427}",color:"#3abb78"},{name:"Cycling Addicts",members:45200,emoji:"\u{1F6B4}",color:"#ff8a4a"},{name:"Self-hosted Everything",members:12800,emoji:"\u{1F5A5}\uFE0F",color:"#4ac0ff"},{name:"Saudades do Orkut",members:892340,emoji:"\u{1F62D}",color:"#e8508a"},{name:"Maps & Geography",members:23100,emoji:"\u{1F30D}",color:"#50c878"},{name:"Berlin Brasileiros",members:8900,emoji:"\u{1F1E7}\u{1F1F7}",color:"#ffa040"},{name:"Coffee > Sleep",members:456e3,emoji:"\u2615",color:"#c08040"}],Y=[{author:"Ana Silva",date:"Dec 2023",text:"Diego is one of those rare people who can debug your code AND your life. An incredible friend, always there when you need help. 10/10 would add as friend again."},{author:"Bruno Costa",date:"Nov 2023",text:"Known Diego since university. The guy literally automated everything in his life with NixOS. Respect the dedication. Best engineer I know, no cap."},{author:"Carla Souza",date:"Oct 2023",text:"The most creative developer I have ever worked with. His projects are not just functional, they are beautiful. An artist disguised as an engineer."},{author:"Elena Torres",date:"Sep 2023",text:"Diego helped me set up my entire self-hosted infrastructure. Refused to let me use any cloud subscription. A true freedom fighter of the internet!"}],H=["#1a2840","#2a1840","#182838","#281828","#1a3028","#302818","#201838","#283018","#381828"];function X(){let a=document.getElementById("friends-grid");a&&U.forEach(e=>{let i=document.createElement("div");i.className="friend-cell",i.innerHTML=`
      <div class="friend-cell__avatar">
        <div class="friend-cell__avatar-inner" style="background:${e.color}">${e.initial}</div>
      </div>
      <span class="friend-cell__name">${e.name.split(" ")[0]}</span>
    `,a.appendChild(i)})}function Z(){let a=document.getElementById("scraps-list");a&&Q.forEach(e=>{let i=document.createElement("div");i.className="scrap",i.innerHTML=`
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
    `,a.appendChild(i)})}function ee(){let a=document.getElementById("communities-grid");a&&V.forEach(e=>{let i=document.createElement("a");i.href="#",i.className="community-card";let n=e.members>=1e6?`${(e.members/1e6).toFixed(1)}M members`:e.members>=1e3?`${(e.members/1e3).toFixed(0)}K members`:`${e.members} members`;i.innerHTML=`
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
    `,a.appendChild(i)})}function ae(){let a=document.getElementById("photo-grid");if(a)for(let e=0;e<9;e++){let i=document.createElement("div");i.className="photo-cell",i.innerHTML=`<div class="photo-cell__inner" style="background:${H[e%H.length]}"></div>`,a.appendChild(i)}}var $={heart:'<svg viewBox="0 0 24 24"><path d="M20.8 4.6a5.5 5.5 0 0 0-7.8 0L12 5.6l-1-1a5.5 5.5 0 0 0-7.8 7.8l1 1L12 21l7.8-7.6 1-1a5.5 5.5 0 0 0 0-7.8z"/></svg>',comment:'<svg viewBox="0 0 24 24"><path d="M21 11.5a8.4 8.4 0 0 1-9 8.4 9 9 0 0 1-4-1L3 20l1.1-4.9A8.4 8.4 0 0 1 12 3a8.4 8.4 0 0 1 9 8.5z"/></svg>',share:'<svg viewBox="0 0 24 24"><line x1="22" y1="2" x2="11" y2="13"/><polygon points="22 2 15 22 11 13 2 9 22 2"/></svg>',save:'<svg viewBox="0 0 24 24"><path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"/></svg>',home:'<svg viewBox="0 0 24 24"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/></svg>',grid:'<svg viewBox="0 0 24 24"><rect x="3" y="3" width="18" height="18" rx="2"/><line x1="9" y1="3" x2="9" y2="21"/><line x1="15" y1="3" x2="15" y2="21"/><line x1="3" y1="9" x2="21" y2="9"/><line x1="3" y1="15" x2="21" y2="15"/></svg>',reels:'<svg viewBox="0 0 24 24"><rect x="3" y="3" width="18" height="18" rx="3"/><line x1="3" y1="8" x2="21" y2="8"/><line x1="8" y1="3" x2="10" y2="8"/><line x1="14" y1="3" x2="16" y2="8"/><polygon points="10 11 15 13.5 10 16" fill="currentColor" stroke="none"/></svg>',tagged:'<svg viewBox="0 0 24 24"><rect x="3" y="3" width="18" height="18" rx="3"/><circle cx="12" cy="10" r="3"/><path d="M7 18a5 5 0 0 1 10 0"/></svg>'};function T(a){let e=H[a%H.length],i=c[a%c.length];return`linear-gradient(135deg, ${e}, ${i})`}function t(a){return a.replace(/[&<>"]/g,e=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"})[e])}function se(a){let e=0;for(let i=0;i<a.length;i++)e=e*31+a.charCodeAt(i)>>>0;return c[e%c.length]}var B=["ana","bruno","carla","diego","elena","felipe","gabi","hugo","isa","joao","lu","marco","nina","otto","paula","rafa","sofia","tiago","vera","yara"],C=["","_",".","__"],N=["","br","berlin","photo","travel","x","oficial","real","99","mrx","gram"];function te(a,e){let i=a.slice();for(let n=0;i.length<e;n++){let r=B[n%B.length],p=C[(n>>2)%C.length],m=N[(n>>1)%N.length],g=Math.floor(n/(B.length*C.length)),v=`${r}${p}${m}${g>0?g:""}`;i.includes(v)?i.push(`${v}${i.length}`):i.push(v)}return i}function ne(){let a=document.getElementById("ig-view");if(!a)return;let e=globalThis.PORTAL_DATA?.instagram;if(!e){a.innerHTML='<p class="ig-empty">Instagram data not loaded.</p>';return}let i=e.profile,n=s=>s.toLocaleString(),r=e.stories.map((s,l)=>`
    <div class="ig-hl">
      <div class="ig-hl__ring"><div class="ig-hl__avatar"><img src="${s.media}" alt="story ${l+1}"></div></div>
      <span class="ig-hl__name">${t(s.caption||"Story")}</span>
    </div>`),p=(e.highlights||[]).map((s,l)=>`
    <div class="ig-hl">
      <div class="ig-hl__ring"><div class="ig-hl__avatar" style="background:${T(l)}"><span class="ig-hl__emoji">${s.emoji}</span></div></div>
      <span class="ig-hl__name">${t(s.label)}</span>
    </div>`),m=[...r,...p].join(""),g=(s,l)=>`
    <a class="ig-tile" href="${t(s.url)}" target="_blank" rel="noopener" style="background:${T(s.url.length)}">
      <span class="ig-tile__cap">${t(s.caption||s.url.replace("https://www.instagram.com/",""))}</span>
      <span class="ig-tile__badge">${l}</span>
    </a>`,v=e.saved.length?e.saved.map(s=>g(s,"\u{1F516}")).join(""):'<p class="ig-empty">Nothing saved.</p>',x=e.liked.length?e.liked.map(s=>g(s,"\u2764\uFE0F")).join(""):'<p class="ig-empty">No likes.</p>',h=30,f=[...e.saved,...e.liked].map(s=>s.caption).filter(Boolean),b=e.posts.map(s=>`<a class="ig-tile" href="#"><img src="${s.media}" alt="post"></a>`),L=Array.from({length:Math.max(0,h-b.length)},(s,l)=>`
    <a class="ig-tile ig-tile--post" href="#" style="background:${T(l)}">
      <span class="ig-tile__cap">${t(f[l%(f.length||1)]||"")}</span>
    </a>`),o=b.length||L.length?[...b,...L].join(""):'<p class="ig-empty">No posts yet.</p>',_='<svg class="ig-tile__ov" viewBox="0 0 24 24"><polygon points="10 8 16 12 10 16 10 8" fill="currentColor" stroke="none"/></svg>',y=Array.from({length:12},(s,l)=>`
    <a class="ig-tile ig-tile--post" href="#" style="background:${T(l+5)}">${_}
      <span class="ig-tile__cap">${t(f[(l+2)%(f.length||1)]||"")}</span>
    </a>`).join(""),k=Array.from({length:9},(s,l)=>`
    <a class="ig-tile ig-tile--post" href="#" style="background:${T(l+9)}">
      <span class="ig-tile__badge">@${t(i.username)}</span>
    </a>`).join(""),A=e.comments.length?e.comments.map(s=>`
      <div class="ig-comment">
        <div class="ig-comment__text">${t(s.text)}</div>
        <div class="ig-comment__meta">${s.owner?"@"+t(s.owner)+" \xB7 ":""}${t(s.time||"")}</div>
      </div>`).join(""):'<p class="ig-empty">No comments.</p>',w=s=>`<div class="ig-grid">${s}</div>`,M=e.posts[0]?.media?`<img class="ig-head__avatar" src="${e.posts[0].media}" alt="${t(i.username)}">`:'<div class="ig-head__avatar"></div>';a.innerHTML=`
    <nav class="ig-nav">
      <div class="ig-nav__inner">
        <a href="#" class="ig-nav__logo">My Socials</a>
        <div class="ig-nav__search"><input placeholder="Search"></div>
        <div class="ig-nav__icons">${$.home}${$.heart}${$.comment}${$.share}</div>
      </div>
    </nav>
    <div class="ig-page">
      <header class="ig-head">
        <div class="ig-head__user">${t(i.username)}</div>
        <div class="ig-head__row">
          ${M}
          <div class="ig-head__stats">
            <div class="ig-head__stat"><strong>${n(i.posts)}</strong><span>posts</span></div>
            <div class="ig-head__stat" data-modal="followers"><strong>${n(i.followers)}</strong><span>followers</span></div>
            <div class="ig-head__stat" data-modal="following"><strong>${n(i.following)}</strong><span>following</span></div>
          </div>
        </div>
        <div class="ig-head__name">${t(i.name)}</div>
        <div class="ig-head__bio">${t(i.bio)}</div>
        <div class="ig-head__actions">
          <span class="ig-head__btn ig-head__btn--primary">Follow</span>
          <span class="ig-head__btn">Message</span>
        </div>
      </header>

      ${m?`<div class="ig-highlights">${m}</div>`:""}

      <div class="ig-tabs">
        <div class="ig-tab is-active" data-pane="posts">${$.grid} Posts</div>
        <div class="ig-tab" data-pane="reels">${$.reels} Reels</div>
        <div class="ig-tab" data-pane="tagged">${$.tagged} Tagged</div>
      </div>

      <div class="ig-subtabs">
        <button class="ig-pill" data-pane="saved">${$.save}<span>Saved</span><em>${n(e.saved.length)}</em></button>
        <button class="ig-pill" data-pane="liked">${$.heart}<span>Liked</span><em>${n(e.liked.length)}</em></button>
        <button class="ig-pill" data-pane="comments">${$.comment}<span>Comments</span><em>${n(e.comments.length)}</em></button>
      </div>

      <div class="ig-pane is-active" data-pane="posts">${w(o)}</div>
      <div class="ig-pane" data-pane="reels">${w(y)}</div>
      <div class="ig-pane" data-pane="tagged">${w(k)}</div>
      <div class="ig-pane" data-pane="saved">${w(v)}</div>
      <div class="ig-pane" data-pane="liked">${w(x)}</div>
      <div class="ig-pane" data-pane="comments"><div class="ig-comments">${A}</div></div>
    </div>

    <div class="ig-modal" id="ig-modal">
      <div class="ig-modal__box">
        <div class="ig-modal__head">
          <small id="ig-modal-sub"></small><h3 id="ig-modal-title"></h3>
          <button id="ig-modal-close" aria-label="Close">&times;</button>
        </div>
        <div class="ig-modal__list" id="ig-modal-list"></div>
      </div>
    </div>`,a.querySelectorAll(".ig-tab, .ig-pill").forEach(s=>{s.addEventListener("click",()=>{let l=s.dataset.pane;a.querySelectorAll(".ig-tab, .ig-pill").forEach(u=>u.classList.toggle("is-active",u===s)),a.querySelectorAll(".ig-pane").forEach(u=>u.classList.toggle("is-active",u.dataset.pane===l))})});let d=a.querySelector("#ig-modal"),q=s=>{let l=s==="followers"?e.followers:e.following,u=s==="followers"?i.followers:i.following,K=te(l,u);a.querySelector("#ig-modal-title").textContent=s==="followers"?"Followers":"Following",a.querySelector("#ig-modal-sub").textContent=`${n(u)} ${s}`,a.querySelector("#ig-modal-list").innerHTML=K.map(I=>`
      <div class="ig-row">
        <div class="ig-row__avatar" style="background:${se(I)}">${t(I.charAt(0).toUpperCase())}</div>
        <a class="ig-row__handle" href="https://www.instagram.com/${t(I)}" target="_blank" rel="noopener">${t(I)}</a>
        <span class="ig-row__follow">Follow</span>
      </div>`).join(""),d.classList.add("is-open")};a.querySelectorAll(".ig-head__stat[data-modal]").forEach(s=>s.addEventListener("click",()=>q(s.dataset.modal)));let E=()=>d.classList.remove("is-open");a.querySelector("#ig-modal-close").addEventListener("click",E),d.addEventListener("click",s=>{s.target===d&&E()})}var S={home:'<svg viewBox="0 0 24 24"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/></svg>',net:'<svg viewBox="0 0 24 24"><circle cx="9" cy="7" r="4"/><path d="M17 11a4 4 0 1 0-3-6.6M1 21v-2a4 4 0 0 1 4-4h8a4 4 0 0 1 4 4v2M17 15a4 4 0 0 1 4 4v2"/></svg>',jobs:'<svg viewBox="0 0 24 24"><rect x="2" y="7" width="20" height="14" rx="2"/><path d="M8 7V5a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"/></svg>',msg:'<svg viewBox="0 0 24 24"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>',bell:'<svg viewBox="0 0 24 24"><path d="M18 8a6 6 0 1 0-12 0c0 7-3 9-3 9h18s-3-2-3-9M13.7 21a2 2 0 0 1-3.4 0"/></svg>',like:'<svg viewBox="0 0 24 24"><path d="M14 9V5a3 3 0 0 0-6 0v4H5a2 2 0 0 0-2 2l1 7a2 2 0 0 0 2 2h9a2 2 0 0 0 2-2l1-7a2 2 0 0 0-2-2z"/></svg>',comment:'<svg viewBox="0 0 24 24"><path d="M21 11.5a8.4 8.4 0 0 1-9 8.4 9 9 0 0 1-4-1L3 20l1.1-4.9A8.4 8.4 0 0 1 12 3a8.4 8.4 0 0 1 9 8.5z"/></svg>',repost:'<svg viewBox="0 0 24 24"><polyline points="17 1 21 5 17 9"/><path d="M3 11V9a4 4 0 0 1 4-4h14M7 23l-4-4 4-4M21 13v2a4 4 0 0 1-4 4H3"/></svg>',send:'<svg viewBox="0 0 24 24"><line x1="22" y1="2" x2="11" y2="13"/><polygon points="22 2 15 22 11 13 2 9 22 2"/></svg>'};function W(a){return a.split(/\s+/).filter(Boolean).slice(0,2).map(e=>e.charAt(0).toUpperCase()).join("")}function O(a){return a.split(/\s*---\s*/).map(e=>e.trim()).filter(Boolean).map(e=>{let i=e.match(/^(@\S[\s\S]*?)\s{2,}([\s\S]*)$/),n=i?i[1].trim():"",r=(i?i[2]:e).split(/\s{2,}/).map(p=>t(p.trim())).filter(Boolean).join("<br>");return`<p class="li-para">${n?`<strong class="li-para__head">${t(n)}</strong>`:""}${r}</p>`}).join("")}function P(a){return`<div class="li-longtext"><div class="li-clamp">${a}</div><button class="li-more" type="button">\u2026see more</button></div>`}function oe(){let a=document.getElementById("li-view");if(!a)return;let e=globalThis.PORTAL_DATA?.linkedin;if(!e){a.innerHTML='<p class="li-empty">LinkedIn data not loaded.</p>';return}let i=e.profile,n=(o,_)=>`<div class="li-nav__item">${o}<span>${_}</span></div>`,r=globalThis.PORTAL_DATA?.instagram?.posts?.[0]?.media,p=r?`<div class="li-phead__avatar li-phead__avatar--img"><img src="${r}" alt="${t(i.name)}"></div>`:`<div class="li-phead__avatar" style="background:${c[3]}">${t(W(i.name))}</div>`,m=(o,_)=>`<section class="li-card li-section"><h2 class="li-section__title">${o}</h2>${_}</section>`,g='<p class="li-need">Not in the saved profile page \u2014 add from your LinkedIn data export (Settings \u2192 Get a copy of your data).</p>',v=e.experience.length?e.experience.map(o=>`
      <div class="li-item">
        <div class="li-item__logo">${t(o.company.charAt(0))}</div>
        <div>
          <div class="li-item__title">${t(o.title)}</div>
          <div class="li-item__sub">${t(o.company)}</div>
          <div class="li-item__meta">${t(o.dates)}${o.location?" \xB7 "+t(o.location):""}</div>
        </div>
      </div>`).join(""):g,x=e.education.length?e.education.map(o=>`
      <div class="li-item">
        <div class="li-item__logo">${t(o.school.charAt(0))}</div>
        <div>
          <div class="li-item__title">${t(o.school)}</div>
          <div class="li-item__sub">${t(o.degree)}</div>
          <div class="li-item__meta">${t(o.dates)}</div>
        </div>
      </div>`).join(""):g,h=e.skills.length?`<div class="li-skills">${e.skills.map(o=>`<span class="li-skill">${t(o)}</span>`).join("")}</div>`:g,f=e.about?`<div class="li-about">${P(O(e.about))}</div>`:g,b=e.languages.length?e.languages.map(o=>`
      <div class="li-lang">
        <span class="li-lang__name">${t(o.name)}</span>
        <span class="li-lang__level">${t(o.proficiency)}</span>
      </div>`).join(""):g,L=e.projects.length?e.projects.map(o=>`
      <div class="li-item li-item--proj">
        <div>
          <div class="li-item__title">${t(o.title)}${o.url?` \xB7 <a href="${t(o.url)}" target="_blank" rel="noopener">link</a>`:""}</div>
          ${o.dates?`<div class="li-item__meta">${t(o.dates)}</div>`:""}
          <div class="li-item__desc">${P(O(o.description))}</div>
        </div>
      </div>`).join(""):g;a.innerHTML=`
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
          ${p}
          <div class="li-phead__body">
            <h1 class="li-phead__name">${t(i.name)}</h1>
            <p class="li-phead__headline">${t(i.headline)}</p>
            <p class="li-phead__loc">${t(i.location)} \xB7 <a href="https://${t(i.url)}" target="_blank" rel="noopener">Contact info</a></p>
            <p class="li-phead__meta"><strong>${i.connections}</strong> connections \xB7 <strong>${i.followers.toLocaleString()}</strong> followers</p>
            ${i.open_to_work?`<div class="li-phead__open"><strong>Open to work</strong><br>${t(i.open_to_work)}</div>`:""}
            <div class="li-phead__actions">
              <button class="li-btn li-btn--primary">Connect</button>
              <button class="li-btn">Message</button>
              <button class="li-btn">More</button>
            </div>
          </div>
        </section>
        ${m("About",f)}
        ${m("Experience",v)}
        ${m("Education",x)}
        ${m("Skills",h)}
        ${m("Projects",L)}
        ${m("Languages",b)}
      </div>
      <aside class="li-prof__rail">
        <div class="li-card li-side">
          <div class="li-side__title">Profile</div>
          <div class="li-side__row"><span>Current</span><strong>${t(i.current)}</strong></div>
          <div class="li-side__row"><span>Location</span><strong>${t(i.location.split(",")[0])}</strong></div>
          <div class="li-side__row"><span>Profile</span><a href="https://${t(i.url)}" target="_blank" rel="noopener">${t(i.url)}</a></div>
        </div>
      </aside>
    </div>`,a.querySelectorAll(".li-longtext").forEach(o=>{let _=o.querySelector(".li-clamp"),y=o.querySelector(".li-more");if(_.scrollHeight-_.clientHeight<4){y.style.display="none";return}y.addEventListener("click",()=>{let k=_.classList.toggle("is-expanded");y.textContent=k?"see less":"\u2026see more"})})}var F={bell:'<svg viewBox="0 0 24 24"><path d="M18 8a6 6 0 1 0-12 0c0 7-3 9-3 9h18s-3-2-3-9M13.7 21a2 2 0 0 1-3.4 0"/></svg>',chat:'<svg viewBox="0 0 24 24"><path d="M21 11.5a8.4 8.4 0 0 1-9 8.4 9 9 0 0 1-4-1L3 20l1.1-4.9A8.4 8.4 0 0 1 12 3a8.4 8.4 0 0 1 9 8.5z"/></svg>'},R=[220,300,180,340,260,200,320,240,280];function le(){let a=document.getElementById("pin-view");if(!a)return;let i=[...V.map((n,r)=>({title:n.name,emoji:n.emoji,color:n.color,author:n.name,grad:r})),...Q.map((n,r)=>({title:n.text.slice(0,60),emoji:"\u{1F4CC}",color:n.color,author:n.author,grad:r+3}))].map((n,r)=>`
    <div class="pin-card">
      <div class="pin-card__media" style="height:${R[r%R.length]}px;background:${T(n.grad)}">
        ${n.emoji}
        <div class="pin-card__overlay"><span class="pin-card__save">Save</span></div>
      </div>
      <div class="pin-card__title">${n.title}</div>
      <div class="pin-card__meta">
        <span class="pin-card__avatar" style="background:${n.color}">${n.author.charAt(0)}</span>
        <span>${n.author.split(" ")[0]}</span>
      </div>
    </div>`).join("");a.innerHTML=`
    <nav class="pin-nav">
      <div class="pin-nav__inner">
        <span class="pin-nav__logo">P</span>
        <a href="#" class="pin-nav__tab pin-nav__tab--active">Home</a>
        <a href="#" class="pin-nav__tab">Explore</a>
        <div class="pin-nav__search"><input placeholder="Search for ideas"></div>
        <div class="pin-nav__icons">${F.bell}${F.chat}<span class="pin-nav__avatar" style="background:${c[3]}">D</span></div>
      </div>
    </nav>
    <div class="pin-board">${i}</div>`}var j=a=>`<svg class="icq-flower" viewBox="0 0 16 16" aria-hidden="true"><g fill="${a}"><ellipse cx="8" cy="3.2" rx="2.3" ry="2.6"/><ellipse cx="8" cy="12.8" rx="2.3" ry="2.6"/><ellipse cx="3.2" cy="8" rx="2.6" ry="2.3"/><ellipse cx="12.8" cy="8" rx="2.6" ry="2.3"/></g><circle cx="8" cy="8" r="2.3" fill="#ffd400"/></svg>`,G={online:"#33b233",away:"#e0a000",dnd:"#d42a2a",offline:"#9aa0a6"};function re(){let a=document.getElementById("icq-view");if(!a)return;let e=globalThis.PORTAL_DATA||{},i=e.linkedin,n=e.instagram,r=i?.profile.name||"Diego Nepomuceno Marcos",p=n?.profile.username||"diegonmarcos",m=r.split(" ")[0],g=r.split(" ").slice(1).join(" "),v=(i?.profile.location||"Berlin, Germany").split(",").map(s=>s.trim()),x=v[0]||"",h=v[v.length-1]||"",f=i?.experience?.[0],b=i?.about||n?.profile.bio||"",L=i?.skills||[],o=i?.languages||[],_="184-042-518",y=["online","online","away","online","dnd","away","offline","offline","offline"],k=U.map((s,l)=>({...s,status:y[l%y.length]})),A=k.filter(s=>s.status!=="offline"),w=k.filter(s=>s.status==="offline"),M=s=>`<li class="icq-contact">${j(G[s.status])}<span>${t(s.name)}</span></li>`,d=(s,l)=>l?`<div class="icq-field"><span class="icq-field__k">${t(s)}</span><span class="icq-field__v">${t(l)}</span></div>`:"",q=[{id:"main",label:"Main",body:`
        ${d("Nickname",p)}
        ${d("First Name",m)}
        ${d("Last Name",g)}
        ${d("ICQ#",_)}
        ${d("Email","me@diegonmarcos.com")}
        ${d("Headline",i?.profile.headline||"")}`},{id:"home",label:"Home",body:`
        ${d("City",x)}
        ${d("Country",h)}
        ${d("Homepage",i?.profile.url||"linktree.diegonmarcos.com")}
        ${o.length?`<div class="icq-field"><span class="icq-field__k">Languages</span><span class="icq-field__v">${o.map(s=>t(s.name)).join(", ")}</span></div>`:""}`},{id:"work",label:"Work",body:f?`
        ${d("Company",f.company)}
        ${d("Title",f.title)}
        ${d("Since",f.dates)}
        ${d("Location",f.location||"")}`:'<p class="icq-empty">No work info.</p>'},{id:"about",label:"About",body:b?`<p class="icq-about">${t(b)}</p>`:'<p class="icq-empty">No about info.</p>'},{id:"interests",label:"Interests",body:L.length?`<div class="icq-interests">${L.map(s=>`<span class="icq-chip">${t(s)}</span>`).join("")}</div>`:'<p class="icq-empty">No interests listed.</p>'}],E='<span class="icq-win__btns"><i>_</i><i>\u25A1</i><i>\u2715</i></span>';a.innerHTML=`
    <div class="icq-desk">
      <!-- Contact list window -->
      <div class="icq-win icq-win--list">
        <div class="icq-win__bar">${j("#ffffff")}<span class="icq-win__title">ICQ</span>${E}</div>
        <div class="icq-list">
          <div class="icq-group">Online (${A.length})</div>
          <ul>${A.map(M).join("")}</ul>
          <div class="icq-group">Offline (${w.length})</div>
          <ul>${w.map(M).join("")}</ul>
        </div>
        <div class="icq-list__foot">${j(G.online)}<span>Online</span><span class="icq-uin">#${_}</span></div>
      </div>

      <!-- User details window -->
      <div class="icq-win icq-win--details">
        <div class="icq-win__bar icq-win__bar--alt">${j("#ffffff")}<span class="icq-win__title">User Details \u2014 ${t(p)}</span>${E}</div>
        <div class="icq-detail">
          <div class="icq-detail__head">
            <div class="icq-detail__avatar">${t(W(r))}</div>
            <div>
              <div class="icq-detail__name">${t(r)}</div>
              <div class="icq-detail__nick">"${t(p)}" \xB7 #${_}</div>
            </div>
          </div>
          <div class="icq-tabs">
            ${q.map((s,l)=>`<button class="icq-tab${l===0?" is-active":""}" data-icq-pane="${s.id}">${s.label}</button>`).join("")}
          </div>
          ${q.map((s,l)=>`<div class="icq-pane${l===0?" is-active":""}" data-icq-pane="${s.id}">${s.body}</div>`).join("")}
        </div>
      </div>
    </div>`,a.querySelectorAll(".icq-tab").forEach(s=>{s.addEventListener("click",()=>{let l=s.dataset.icqPane;a.querySelectorAll(".icq-tab").forEach(u=>u.classList.toggle("is-active",u===s)),a.querySelectorAll(".icq-pane").forEach(u=>u.classList.toggle("is-active",u.dataset.icqPane===l))})})}function ce(){let a=document.getElementById("me-view");if(!a)return;let e=globalThis.PORTAL_DATA||{},i=e.instagram,n=e.linkedin,r=n?.profile.name||i?.profile.name||"Diego Nepomuceno Marcos",p=n?.profile.headline||"",m=n?.profile.location||"",g=i?.profile.bio||"",v=i?.posts[0]?.media,x=[{theme:"linkedin",label:"LinkedIn",meta:n?`${n.profile.connections} connections \xB7 ${n.profile.followers.toLocaleString()} followers`:"profile",color:"#0a66c2"},{theme:"instagram",label:"Instagram",meta:i?`${i.profile.followers.toLocaleString()} followers \xB7 ${i.profile.posts} post${i.profile.posts===1?"":"s"}`:"profile",color:"#dc2743"},{theme:"pinterest",label:"Pinterest",meta:"boards & pins",color:"#e60023"},{theme:"orkut",label:"Orkut",meta:"the classic profile",color:"#e9008c"},{theme:"icq",label:"ICQ",meta:"retro IM \xB7 user details",color:"#0a870a"}];a.innerHTML=`
    <div class="me-hub">
      <div class="me-card">
        ${v?`<img class="me-avatar" src="${v}" alt="${t(r)}">`:'<div class="me-avatar"></div>'}
        <h1 class="me-name">${t(r)}</h1>
        ${p?`<p class="me-headline">${t(p)}</p>`:""}
        ${m?`<p class="me-loc">${t(m)}</p>`:""}
        ${g?`<p class="me-bio">${t(g)}</p>`:""}
      </div>
      <div class="me-links">
        ${x.map(h=>`
          <button class="me-link" data-goto="${h.theme}" style="--accent:${h.color}">
            <span class="me-link__dot"></span>
            <span class="me-link__body">
              <span class="me-link__name">${h.label}</span>
              <span class="me-link__meta">${t(h.meta)}</span>
            </span>
            <span class="me-link__arrow">\u2192</span>
          </button>`).join("")}
      </div>
    </div>`,a.querySelectorAll(".me-link").forEach(h=>h.addEventListener("click",()=>D(h.dataset.goto)))}var J="mySocials.theme",de=["myprofile","orkut","instagram","linkedin","pinterest","icq"];function D(a){document.documentElement.setAttribute("data-theme",a);try{localStorage.setItem(J,a)}catch{}document.querySelectorAll("[data-theme-btn]").forEach(e=>{e.classList.toggle("is-active",e.dataset.themeBtn===a)}),window.scrollTo(0,0)}function ge(){let a=localStorage.getItem(J);D(de.includes(a)?a:"myprofile"),document.querySelectorAll("[data-theme-btn]").forEach(e=>{e.addEventListener("click",()=>D(e.dataset.themeBtn))})}function z(){X(),Z(),ee(),ie(),ae(),ne(),oe(),le(),re(),ce(),ge(),setTimeout(()=>{document.querySelectorAll(".trust-meter__fill").forEach(a=>{a.style.transition="width 1.2s cubic-bezier(0.16, 1, 0.3, 1)"})},300)}document.readyState==="loading"?document.addEventListener("DOMContentLoaded",z):z();})();
