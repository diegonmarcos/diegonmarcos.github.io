(()=>{var c=["#e8508a","#4a8aff","#3abb78","#8a6aff","#ff8a4a","#4ac0ff","#ff4a8a","#50c878","#ffa040","#8080ff","#ff6060","#40c0c0","#c060ff","#ff9060","#60b0ff"],z=[{name:"Ana Silva",initial:"A",color:c[0]},{name:"Bruno Costa",initial:"B",color:c[1]},{name:"Carla Souza",initial:"C",color:c[2]},{name:"Daniel Lima",initial:"D",color:c[3]},{name:"Elena Torres",initial:"E",color:c[4]},{name:"Felipe Gomes",initial:"F",color:c[5]},{name:"Gabi Santos",initial:"G",color:c[6]},{name:"Hugo Pereira",initial:"H",color:c[7]},{name:"Isa Oliveira",initial:"I",color:c[8]}],U=[{author:"Ana Silva",initial:"A",color:c[0],text:"Hey Diego! Miss our coding sessions at the uni. We should catch up soon! Saudades demais!",time:"2 hours ago"},{author:"Bruno Costa",initial:"B",color:c[1],text:"Cara, vi que voce ta morando em Berlin agora! Que top! Vamos marcar uma call?",time:"5 hours ago"},{author:"Carla Souza",initial:"C",color:c[2],text:"Happy birthday atrasado!! Hope you had an amazing day. Your projects are looking incredible btw",time:"yesterday"},{author:"Felipe Gomes",initial:"F",color:c[5],text:"Mano, teu MyMaps ta INSANO. Lembra quando a gente fazia mapa no paint? kkkk Evoluimos!",time:"2 days ago"},{author:"Gabi Santos",initial:"G",color:c[6],text:'Diego!! Join our community "Linux Users Brazil" please! We need more devs like you there',time:"3 days ago"},{author:"Hugo Pereira",initial:"H",color:c[7],text:"Saw your Strava activities... beast mode! When did you start cycling?",time:"4 days ago"},{author:"Isa Oliveira",initial:"I",color:c[8],text:"Testimonial request sent! You were the best partner for the compiler project, forever grateful",time:"1 week ago"}],Q=[{name:"Eu odeio acordar cedo",members:1247893,emoji:"\u{1F634}",color:"#8a6aff"},{name:"NixOS Brasil",members:3420,emoji:"\u2744\uFE0F",color:"#4a8aff"},{name:"Linux Users",members:89340,emoji:"\u{1F427}",color:"#3abb78"},{name:"Cycling Addicts",members:45200,emoji:"\u{1F6B4}",color:"#ff8a4a"},{name:"Self-hosted Everything",members:12800,emoji:"\u{1F5A5}\uFE0F",color:"#4ac0ff"},{name:"Saudades do Orkut",members:892340,emoji:"\u{1F62D}",color:"#e8508a"},{name:"Maps & Geography",members:23100,emoji:"\u{1F30D}",color:"#50c878"},{name:"Berlin Brasileiros",members:8900,emoji:"\u{1F1E7}\u{1F1F7}",color:"#ffa040"},{name:"Coffee > Sleep",members:456e3,emoji:"\u2615",color:"#c08040"}],K=[{author:"Ana Silva",date:"Dec 2023",text:"Diego is one of those rare people who can debug your code AND your life. An incredible friend, always there when you need help. 10/10 would add as friend again."},{author:"Bruno Costa",date:"Nov 2023",text:"Known Diego since university. The guy literally automated everything in his life with NixOS. Respect the dedication. Best engineer I know, no cap."},{author:"Carla Souza",date:"Oct 2023",text:"The most creative developer I have ever worked with. His projects are not just functional, they are beautiful. An artist disguised as an engineer."},{author:"Elena Torres",date:"Sep 2023",text:"Diego helped me set up my entire self-hosted infrastructure. Refused to let me use any cloud subscription. A true freedom fighter of the internet!"}],B=["#1a2840","#2a1840","#182838","#281828","#1a3028","#302818","#201838","#283018","#381828"];function Y(){let s=document.getElementById("friends-grid");s&&z.forEach(e=>{let i=document.createElement("div");i.className="friend-cell",i.innerHTML=`
      <div class="friend-cell__avatar">
        <div class="friend-cell__avatar-inner" style="background:${e.color}">${e.initial}</div>
      </div>
      <span class="friend-cell__name">${e.name.split(" ")[0]}</span>
    `,s.appendChild(i)})}function X(){let s=document.getElementById("scraps-list");s&&U.forEach(e=>{let i=document.createElement("div");i.className="scrap",i.innerHTML=`
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
    `,s.appendChild(i)})}function Z(){let s=document.getElementById("communities-grid");s&&Q.forEach(e=>{let i=document.createElement("a");i.href="#",i.className="community-card";let n=e.members>=1e6?`${(e.members/1e6).toFixed(1)}M members`:e.members>=1e3?`${(e.members/1e3).toFixed(0)}K members`:`${e.members} members`;i.innerHTML=`
      <div class="community-card__icon" style="background:${e.color}20;color:${e.color}">${e.emoji}</div>
      <div class="community-card__body">
        <span class="community-card__name">${e.name}</span>
        <span class="community-card__members">${n}</span>
      </div>
    `,s.appendChild(i)})}function ee(){let s=document.getElementById("testimonials-list");s&&K.forEach(e=>{let i=document.createElement("div");i.className="testimonial",i.innerHTML=`
      <div class="testimonial__header">
        <span class="testimonial__author">${e.author}</span>
        <span class="testimonial__date">${e.date}</span>
      </div>
      <p class="testimonial__text">${e.text}</p>
    `,s.appendChild(i)})}function ie(){let s=document.getElementById("photo-grid");if(s)for(let e=0;e<9;e++){let i=document.createElement("div");i.className="photo-cell",i.innerHTML=`<div class="photo-cell__inner" style="background:${B[e%B.length]}"></div>`,s.appendChild(i)}}var f={heart:'<svg viewBox="0 0 24 24"><path d="M20.8 4.6a5.5 5.5 0 0 0-7.8 0L12 5.6l-1-1a5.5 5.5 0 0 0-7.8 7.8l1 1L12 21l7.8-7.6 1-1a5.5 5.5 0 0 0 0-7.8z"/></svg>',comment:'<svg viewBox="0 0 24 24"><path d="M21 11.5a8.4 8.4 0 0 1-9 8.4 9 9 0 0 1-4-1L3 20l1.1-4.9A8.4 8.4 0 0 1 12 3a8.4 8.4 0 0 1 9 8.5z"/></svg>',share:'<svg viewBox="0 0 24 24"><line x1="22" y1="2" x2="11" y2="13"/><polygon points="22 2 15 22 11 13 2 9 22 2"/></svg>',save:'<svg viewBox="0 0 24 24"><path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"/></svg>',home:'<svg viewBox="0 0 24 24"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/></svg>',grid:'<svg viewBox="0 0 24 24"><rect x="3" y="3" width="18" height="18" rx="2"/><line x1="9" y1="3" x2="9" y2="21"/><line x1="15" y1="3" x2="15" y2="21"/><line x1="3" y1="9" x2="21" y2="9"/><line x1="3" y1="15" x2="21" y2="15"/></svg>',reels:'<svg viewBox="0 0 24 24"><rect x="3" y="3" width="18" height="18" rx="3"/><line x1="3" y1="8" x2="21" y2="8"/><line x1="8" y1="3" x2="10" y2="8"/><line x1="14" y1="3" x2="16" y2="8"/><polygon points="10 11 15 13.5 10 16" fill="currentColor" stroke="none"/></svg>',tagged:'<svg viewBox="0 0 24 24"><rect x="3" y="3" width="18" height="18" rx="3"/><circle cx="12" cy="10" r="3"/><path d="M7 18a5 5 0 0 1 10 0"/></svg>'};function w(s){let e=B[s%B.length],i=c[s%c.length];return`linear-gradient(135deg, ${e}, ${i})`}function t(s){return s.replace(/[&<>"]/g,e=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"})[e])}function ae(s){let e=0;for(let i=0;i<s.length;i++)e=e*31+s.charCodeAt(i)>>>0;return c[e%c.length]}var C=["ana","bruno","carla","diego","elena","felipe","gabi","hugo","isa","joao","lu","marco","nina","otto","paula","rafa","sofia","tiago","vera","yara"],H=["","_",".","__"],N=["","br","berlin","photo","travel","x","oficial","real","99","mrx","gram"];function se(s,e){let i=s.slice();for(let n=0;i.length<e;n++){let r=C[n%C.length],d=H[(n>>2)%H.length],_=N[(n>>1)%N.length],u=Math.floor(n/(C.length*H.length)),m=`${r}${d}${_}${u>0?u:""}`;i.includes(m)?i.push(`${m}${i.length}`):i.push(m)}return i}function te(){let s=document.getElementById("ig-view");if(!s)return;let e=globalThis.PORTAL_DATA?.instagram;if(!e){s.innerHTML='<p class="ig-empty">Instagram data not loaded.</p>';return}let i=e.profile,n=a=>a.toLocaleString(),r=e.stories.map((a,l)=>`
    <div class="ig-hl">
      <div class="ig-hl__ring"><div class="ig-hl__avatar"><img src="${a.media}" alt="story ${l+1}"></div></div>
      <span class="ig-hl__name">${t(a.caption||"Story")}</span>
    </div>`),d=(e.highlights||[]).map((a,l)=>`
    <div class="ig-hl">
      <div class="ig-hl__ring"><div class="ig-hl__avatar" style="background:${w(l)}"><span class="ig-hl__emoji">${a.emoji}</span></div></div>
      <span class="ig-hl__name">${t(a.label)}</span>
    </div>`),_=[...r,...d].join(""),u=(a,l)=>`
    <a class="ig-tile" href="${t(a.url)}" target="_blank" rel="noopener" style="background:${w(a.url.length)}">
      <span class="ig-tile__cap">${t(a.caption||a.url.replace("https://www.instagram.com/",""))}</span>
      <span class="ig-tile__badge">${l}</span>
    </a>`,m=e.saved.length?e.saved.map(a=>u(a,"\u{1F516}")).join(""):'<p class="ig-empty">Nothing saved.</p>',y=e.liked.length?e.liked.map(a=>u(a,"\u2764\uFE0F")).join(""):'<p class="ig-empty">No likes.</p>',v=30,h=[...e.saved,...e.liked].map(a=>a.caption).filter(Boolean),o=e.posts.map(a=>`<a class="ig-tile" href="#"><img src="${a.media}" alt="post"></a>`),$=Array.from({length:Math.max(0,v-o.length)},(a,l)=>`
    <a class="ig-tile ig-tile--post" href="#" style="background:${w(l)}">
      <span class="ig-tile__cap">${t(h[l%(h.length||1)]||"")}</span>
    </a>`),T=o.length||$.length?[...o,...$].join(""):'<p class="ig-empty">No posts yet.</p>',x='<svg class="ig-tile__ov" viewBox="0 0 24 24"><polygon points="10 8 16 12 10 16 10 8" fill="currentColor" stroke="none"/></svg>',S=Array.from({length:12},(a,l)=>`
    <a class="ig-tile ig-tile--post" href="#" style="background:${w(l+5)}">${x}
      <span class="ig-tile__cap">${t(h[(l+2)%(h.length||1)]||"")}</span>
    </a>`).join(""),E=Array.from({length:9},(a,l)=>`
    <a class="ig-tile ig-tile--post" href="#" style="background:${w(l+9)}">
      <span class="ig-tile__badge">@${t(i.username)}</span>
    </a>`).join(""),A=e.comments.length?e.comments.map(a=>`
      <div class="ig-comment">
        <div class="ig-comment__text">${t(a.text)}</div>
        <div class="ig-comment__meta">${a.owner?"@"+t(a.owner)+" \xB7 ":""}${t(a.time||"")}</div>
      </div>`).join(""):'<p class="ig-empty">No comments.</p>',b=a=>`<div class="ig-grid">${a}</div>`,M=e.posts[0]?.media?`<img class="ig-head__avatar" src="${e.posts[0].media}" alt="${t(i.username)}">`:'<div class="ig-head__avatar"></div>';s.innerHTML=`
    <nav class="ig-nav">
      <div class="ig-nav__inner">
        <a href="#" class="ig-nav__logo">My Socials</a>
        <div class="ig-nav__search"><input placeholder="Search"></div>
        <div class="ig-nav__icons">${f.home}${f.heart}${f.comment}${f.share}</div>
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

      ${_?`<div class="ig-highlights">${_}</div>`:""}

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

      <div class="ig-pane is-active" data-pane="posts">${b(T)}</div>
      <div class="ig-pane" data-pane="reels">${b(S)}</div>
      <div class="ig-pane" data-pane="tagged">${b(E)}</div>
      <div class="ig-pane" data-pane="saved">${b(m)}</div>
      <div class="ig-pane" data-pane="liked">${b(y)}</div>
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
    </div>`,s.querySelectorAll(".ig-tab, .ig-pill").forEach(a=>{a.addEventListener("click",()=>{let l=a.dataset.pane;s.querySelectorAll(".ig-tab, .ig-pill").forEach(p=>p.classList.toggle("is-active",p===a)),s.querySelectorAll(".ig-pane").forEach(p=>p.classList.toggle("is-active",p.dataset.pane===l))})});let g=s.querySelector("#ig-modal"),q=a=>{let l=a==="followers"?e.followers:e.following,p=a==="followers"?i.followers:i.following,J=se(l,p);s.querySelector("#ig-modal-title").textContent=a==="followers"?"Followers":"Following",s.querySelector("#ig-modal-sub").textContent=`${n(p)} ${a}`,s.querySelector("#ig-modal-list").innerHTML=J.map(I=>`
      <div class="ig-row">
        <div class="ig-row__avatar" style="background:${ae(I)}">${t(I.charAt(0).toUpperCase())}</div>
        <a class="ig-row__handle" href="https://www.instagram.com/${t(I)}" target="_blank" rel="noopener">${t(I)}</a>
        <span class="ig-row__follow">Follow</span>
      </div>`).join(""),g.classList.add("is-open")};s.querySelectorAll(".ig-head__stat[data-modal]").forEach(a=>a.addEventListener("click",()=>q(a.dataset.modal)));let k=()=>g.classList.remove("is-open");s.querySelector("#ig-modal-close").addEventListener("click",k),g.addEventListener("click",a=>{a.target===g&&k()})}var L={home:'<svg viewBox="0 0 24 24"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/></svg>',net:'<svg viewBox="0 0 24 24"><circle cx="9" cy="7" r="4"/><path d="M17 11a4 4 0 1 0-3-6.6M1 21v-2a4 4 0 0 1 4-4h8a4 4 0 0 1 4 4v2M17 15a4 4 0 0 1 4 4v2"/></svg>',jobs:'<svg viewBox="0 0 24 24"><rect x="2" y="7" width="20" height="14" rx="2"/><path d="M8 7V5a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"/></svg>',msg:'<svg viewBox="0 0 24 24"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>',bell:'<svg viewBox="0 0 24 24"><path d="M18 8a6 6 0 1 0-12 0c0 7-3 9-3 9h18s-3-2-3-9M13.7 21a2 2 0 0 1-3.4 0"/></svg>',like:'<svg viewBox="0 0 24 24"><path d="M14 9V5a3 3 0 0 0-6 0v4H5a2 2 0 0 0-2 2l1 7a2 2 0 0 0 2 2h9a2 2 0 0 0 2-2l1-7a2 2 0 0 0-2-2z"/></svg>',comment:'<svg viewBox="0 0 24 24"><path d="M21 11.5a8.4 8.4 0 0 1-9 8.4 9 9 0 0 1-4-1L3 20l1.1-4.9A8.4 8.4 0 0 1 12 3a8.4 8.4 0 0 1 9 8.5z"/></svg>',repost:'<svg viewBox="0 0 24 24"><polyline points="17 1 21 5 17 9"/><path d="M3 11V9a4 4 0 0 1 4-4h14M7 23l-4-4 4-4M21 13v2a4 4 0 0 1-4 4H3"/></svg>',send:'<svg viewBox="0 0 24 24"><line x1="22" y1="2" x2="11" y2="13"/><polygon points="22 2 15 22 11 13 2 9 22 2"/></svg>'};function V(s){return s.split(/\s+/).filter(Boolean).slice(0,2).map(e=>e.charAt(0).toUpperCase()).join("")}function O(s){return s.split(/\s*---\s*/).map(e=>e.trim()).filter(Boolean).map(e=>{let i=e.match(/^(@\S[\s\S]*?)\s{2,}([\s\S]*)$/),n=i?i[1].trim():"",r=(i?i[2]:e).split(/\s{2,}/).map(d=>t(d.trim())).filter(Boolean).join("<br>");return`<p class="li-para">${n?`<strong class="li-para__head">${t(n)}</strong>`:""}${r}</p>`}).join("")}function ne(){let s=document.getElementById("li-view");if(!s)return;let e=globalThis.PORTAL_DATA?.linkedin;if(!e){s.innerHTML='<p class="li-empty">LinkedIn data not loaded.</p>';return}let i=e.profile,n=(o,$)=>`<div class="li-nav__item">${o}<span>${$}</span></div>`,r=(o,$)=>`<section class="li-card li-section"><h2 class="li-section__title">${o}</h2>${$}</section>`,d='<p class="li-need">Not in the saved profile page \u2014 add from your LinkedIn data export (Settings \u2192 Get a copy of your data).</p>',_=e.experience.length?e.experience.map(o=>`
      <div class="li-item">
        <div class="li-item__logo">${t(o.company.charAt(0))}</div>
        <div>
          <div class="li-item__title">${t(o.title)}</div>
          <div class="li-item__sub">${t(o.company)}</div>
          <div class="li-item__meta">${t(o.dates)}${o.location?" \xB7 "+t(o.location):""}</div>
        </div>
      </div>`).join(""):d,u=e.education.length?e.education.map(o=>`
      <div class="li-item">
        <div class="li-item__logo">${t(o.school.charAt(0))}</div>
        <div>
          <div class="li-item__title">${t(o.school)}</div>
          <div class="li-item__sub">${t(o.degree)}</div>
          <div class="li-item__meta">${t(o.dates)}</div>
        </div>
      </div>`).join(""):d,m=e.skills.length?`<div class="li-skills">${e.skills.map(o=>`<span class="li-skill">${t(o)}</span>`).join("")}</div>`:d,y=e.about?`<div class="li-about">${O(e.about)}</div>`:d,v=e.languages.length?e.languages.map(o=>`
      <div class="li-lang">
        <span class="li-lang__name">${t(o.name)}</span>
        <span class="li-lang__level">${t(o.proficiency)}</span>
      </div>`).join(""):d,h=e.projects.length?e.projects.map(o=>`
      <div class="li-item li-item--proj">
        <div>
          <div class="li-item__title">${t(o.title)}${o.url?` \xB7 <a href="${t(o.url)}" target="_blank" rel="noopener">link</a>`:""}</div>
          ${o.dates?`<div class="li-item__meta">${t(o.dates)}</div>`:""}
          <div class="li-item__desc">${O(o.description)}</div>
        </div>
      </div>`).join(""):d;s.innerHTML=`
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
          <div class="li-phead__avatar" style="background:${c[3]}">${t(V(i.name))}</div>
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
        ${r("About",y)}
        ${r("Experience",_)}
        ${r("Education",u)}
        ${r("Skills",m)}
        ${r("Projects",h)}
        ${r("Languages",v)}
      </div>
      <aside class="li-prof__rail">
        <div class="li-card li-side">
          <div class="li-side__title">Profile</div>
          <div class="li-side__row"><span>Current</span><strong>${t(i.current)}</strong></div>
          <div class="li-side__row"><span>Location</span><strong>${t(i.location.split(",")[0])}</strong></div>
          <div class="li-side__row"><span>Profile</span><a href="https://${t(i.url)}" target="_blank" rel="noopener">${t(i.url)}</a></div>
        </div>
      </aside>
    </div>`}var P={bell:'<svg viewBox="0 0 24 24"><path d="M18 8a6 6 0 1 0-12 0c0 7-3 9-3 9h18s-3-2-3-9M13.7 21a2 2 0 0 1-3.4 0"/></svg>',chat:'<svg viewBox="0 0 24 24"><path d="M21 11.5a8.4 8.4 0 0 1-9 8.4 9 9 0 0 1-4-1L3 20l1.1-4.9A8.4 8.4 0 0 1 12 3a8.4 8.4 0 0 1 9 8.5z"/></svg>'},F=[220,300,180,340,260,200,320,240,280];function oe(){let s=document.getElementById("pin-view");if(!s)return;let i=[...Q.map((n,r)=>({title:n.name,emoji:n.emoji,color:n.color,author:n.name,grad:r})),...U.map((n,r)=>({title:n.text.slice(0,60),emoji:"\u{1F4CC}",color:n.color,author:n.author,grad:r+3}))].map((n,r)=>`
    <div class="pin-card">
      <div class="pin-card__media" style="height:${F[r%F.length]}px;background:${w(n.grad)}">
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
    <div class="pin-board">${i}</div>`}var j=s=>`<svg class="icq-flower" viewBox="0 0 16 16" aria-hidden="true"><g fill="${s}"><ellipse cx="8" cy="3.2" rx="2.3" ry="2.6"/><ellipse cx="8" cy="12.8" rx="2.3" ry="2.6"/><ellipse cx="3.2" cy="8" rx="2.6" ry="2.3"/><ellipse cx="12.8" cy="8" rx="2.6" ry="2.3"/></g><circle cx="8" cy="8" r="2.3" fill="#ffd400"/></svg>`,R={online:"#33b233",away:"#e0a000",dnd:"#d42a2a",offline:"#9aa0a6"};function le(){let s=document.getElementById("icq-view");if(!s)return;let e=globalThis.PORTAL_DATA||{},i=e.linkedin,n=e.instagram,r=i?.profile.name||"Diego Nepomuceno Marcos",d=n?.profile.username||"diegonmarcos",_=r.split(" ")[0],u=r.split(" ").slice(1).join(" "),m=(i?.profile.location||"Berlin, Germany").split(",").map(a=>a.trim()),y=m[0]||"",v=m[m.length-1]||"",h=i?.experience?.[0],o=i?.about||n?.profile.bio||"",$=i?.skills||[],T=i?.languages||[],x="184-042-518",S=["online","online","away","online","dnd","away","offline","offline","offline"],E=z.map((a,l)=>({...a,status:S[l%S.length]})),A=E.filter(a=>a.status!=="offline"),b=E.filter(a=>a.status==="offline"),M=a=>`<li class="icq-contact">${j(R[a.status])}<span>${t(a.name)}</span></li>`,g=(a,l)=>l?`<div class="icq-field"><span class="icq-field__k">${t(a)}</span><span class="icq-field__v">${t(l)}</span></div>`:"",q=[{id:"main",label:"Main",body:`
        ${g("Nickname",d)}
        ${g("First Name",_)}
        ${g("Last Name",u)}
        ${g("ICQ#",x)}
        ${g("Email","me@diegonmarcos.com")}
        ${g("Headline",i?.profile.headline||"")}`},{id:"home",label:"Home",body:`
        ${g("City",y)}
        ${g("Country",v)}
        ${g("Homepage",i?.profile.url||"linktree.diegonmarcos.com")}
        ${T.length?`<div class="icq-field"><span class="icq-field__k">Languages</span><span class="icq-field__v">${T.map(a=>t(a.name)).join(", ")}</span></div>`:""}`},{id:"work",label:"Work",body:h?`
        ${g("Company",h.company)}
        ${g("Title",h.title)}
        ${g("Since",h.dates)}
        ${g("Location",h.location||"")}`:'<p class="icq-empty">No work info.</p>'},{id:"about",label:"About",body:o?`<p class="icq-about">${t(o)}</p>`:'<p class="icq-empty">No about info.</p>'},{id:"interests",label:"Interests",body:$.length?`<div class="icq-interests">${$.map(a=>`<span class="icq-chip">${t(a)}</span>`).join("")}</div>`:'<p class="icq-empty">No interests listed.</p>'}],k='<span class="icq-win__btns"><i>_</i><i>\u25A1</i><i>\u2715</i></span>';s.innerHTML=`
    <div class="icq-desk">
      <!-- Contact list window -->
      <div class="icq-win icq-win--list">
        <div class="icq-win__bar">${j("#ffffff")}<span class="icq-win__title">ICQ</span>${k}</div>
        <div class="icq-list">
          <div class="icq-group">Online (${A.length})</div>
          <ul>${A.map(M).join("")}</ul>
          <div class="icq-group">Offline (${b.length})</div>
          <ul>${b.map(M).join("")}</ul>
        </div>
        <div class="icq-list__foot">${j(R.online)}<span>Online</span><span class="icq-uin">#${x}</span></div>
      </div>

      <!-- User details window -->
      <div class="icq-win icq-win--details">
        <div class="icq-win__bar icq-win__bar--alt">${j("#ffffff")}<span class="icq-win__title">User Details \u2014 ${t(d)}</span>${k}</div>
        <div class="icq-detail">
          <div class="icq-detail__head">
            <div class="icq-detail__avatar">${t(V(r))}</div>
            <div>
              <div class="icq-detail__name">${t(r)}</div>
              <div class="icq-detail__nick">"${t(d)}" \xB7 #${x}</div>
            </div>
          </div>
          <div class="icq-tabs">
            ${q.map((a,l)=>`<button class="icq-tab${l===0?" is-active":""}" data-icq-pane="${a.id}">${a.label}</button>`).join("")}
          </div>
          ${q.map((a,l)=>`<div class="icq-pane${l===0?" is-active":""}" data-icq-pane="${a.id}">${a.body}</div>`).join("")}
        </div>
      </div>
    </div>`,s.querySelectorAll(".icq-tab").forEach(a=>{a.addEventListener("click",()=>{let l=a.dataset.icqPane;s.querySelectorAll(".icq-tab").forEach(p=>p.classList.toggle("is-active",p===a)),s.querySelectorAll(".icq-pane").forEach(p=>p.classList.toggle("is-active",p.dataset.icqPane===l))})})}function re(){let s=document.getElementById("me-view");if(!s)return;let e=globalThis.PORTAL_DATA||{},i=e.instagram,n=e.linkedin,r=n?.profile.name||i?.profile.name||"Diego Nepomuceno Marcos",d=n?.profile.headline||"",_=n?.profile.location||"",u=i?.profile.bio||"",m=i?.posts[0]?.media,y=[{theme:"linkedin",label:"LinkedIn",meta:n?`${n.profile.connections} connections \xB7 ${n.profile.followers.toLocaleString()} followers`:"profile",color:"#0a66c2"},{theme:"instagram",label:"Instagram",meta:i?`${i.profile.followers.toLocaleString()} followers \xB7 ${i.profile.posts} post${i.profile.posts===1?"":"s"}`:"profile",color:"#dc2743"},{theme:"pinterest",label:"Pinterest",meta:"boards & pins",color:"#e60023"},{theme:"orkut",label:"Orkut",meta:"the classic profile",color:"#e9008c"},{theme:"icq",label:"ICQ",meta:"retro IM \xB7 user details",color:"#0a870a"}];s.innerHTML=`
    <div class="me-hub">
      <div class="me-card">
        ${m?`<img class="me-avatar" src="${m}" alt="${t(r)}">`:'<div class="me-avatar"></div>'}
        <h1 class="me-name">${t(r)}</h1>
        ${d?`<p class="me-headline">${t(d)}</p>`:""}
        ${_?`<p class="me-loc">${t(_)}</p>`:""}
        ${u?`<p class="me-bio">${t(u)}</p>`:""}
      </div>
      <div class="me-links">
        ${y.map(v=>`
          <button class="me-link" data-goto="${v.theme}" style="--accent:${v.color}">
            <span class="me-link__dot"></span>
            <span class="me-link__body">
              <span class="me-link__name">${v.label}</span>
              <span class="me-link__meta">${t(v.meta)}</span>
            </span>
            <span class="me-link__arrow">\u2192</span>
          </button>`).join("")}
      </div>
    </div>`,s.querySelectorAll(".me-link").forEach(v=>v.addEventListener("click",()=>D(v.dataset.goto)))}var W="mySocials.theme",ce=["myprofile","orkut","instagram","linkedin","pinterest","icq"];function D(s){document.documentElement.setAttribute("data-theme",s);try{localStorage.setItem(W,s)}catch{}document.querySelectorAll("[data-theme-btn]").forEach(e=>{e.classList.toggle("is-active",e.dataset.themeBtn===s)}),window.scrollTo(0,0)}function de(){let s=localStorage.getItem(W);D(ce.includes(s)?s:"myprofile"),document.querySelectorAll("[data-theme-btn]").forEach(e=>{e.addEventListener("click",()=>D(e.dataset.themeBtn))})}function G(){Y(),X(),Z(),ee(),ie(),te(),ne(),oe(),le(),re(),de(),setTimeout(()=>{document.querySelectorAll(".trust-meter__fill").forEach(s=>{s.style.transition="width 1.2s cubic-bezier(0.16, 1, 0.3, 1)"})},300)}document.readyState==="loading"?document.addEventListener("DOMContentLoaded",G):G();})();
