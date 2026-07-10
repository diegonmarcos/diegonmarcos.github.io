(()=>{var o=["#e8508a","#4a8aff","#3abb78","#8a6aff","#ff8a4a","#4ac0ff","#ff4a8a","#50c878","#ffa040","#8080ff","#ff6060","#40c0c0","#c060ff","#ff9060","#60b0ff"],H=[{name:"Ana Silva",initial:"A",color:o[0]},{name:"Bruno Costa",initial:"B",color:o[1]},{name:"Carla Souza",initial:"C",color:o[2]},{name:"Daniel Lima",initial:"D",color:o[3]},{name:"Elena Torres",initial:"E",color:o[4]},{name:"Felipe Gomes",initial:"F",color:o[5]},{name:"Gabi Santos",initial:"G",color:o[6]},{name:"Hugo Pereira",initial:"H",color:o[7]},{name:"Isa Oliveira",initial:"I",color:o[8]}],M=[{author:"Ana Silva",initial:"A",color:o[0],text:"Hey Diego! Miss our coding sessions at the uni. We should catch up soon! Saudades demais!",time:"2 hours ago"},{author:"Bruno Costa",initial:"B",color:o[1],text:"Cara, vi que voce ta morando em Berlin agora! Que top! Vamos marcar uma call?",time:"5 hours ago"},{author:"Carla Souza",initial:"C",color:o[2],text:"Happy birthday atrasado!! Hope you had an amazing day. Your projects are looking incredible btw",time:"yesterday"},{author:"Felipe Gomes",initial:"F",color:o[5],text:"Mano, teu MyMaps ta INSANO. Lembra quando a gente fazia mapa no paint? kkkk Evoluimos!",time:"2 days ago"},{author:"Gabi Santos",initial:"G",color:o[6],text:'Diego!! Join our community "Linux Users Brazil" please! We need more devs like you there',time:"3 days ago"},{author:"Hugo Pereira",initial:"H",color:o[7],text:"Saw your Strava activities... beast mode! When did you start cycling?",time:"4 days ago"},{author:"Isa Oliveira",initial:"I",color:o[8],text:"Testimonial request sent! You were the best partner for the compiler project, forever grateful",time:"1 week ago"}],S=[{name:"Eu odeio acordar cedo",members:1247893,emoji:"\u{1F634}",color:"#8a6aff"},{name:"NixOS Brasil",members:3420,emoji:"\u2744\uFE0F",color:"#4a8aff"},{name:"Linux Users",members:89340,emoji:"\u{1F427}",color:"#3abb78"},{name:"Cycling Addicts",members:45200,emoji:"\u{1F6B4}",color:"#ff8a4a"},{name:"Self-hosted Everything",members:12800,emoji:"\u{1F5A5}\uFE0F",color:"#4ac0ff"},{name:"Saudades do Orkut",members:892340,emoji:"\u{1F62D}",color:"#e8508a"},{name:"Maps & Geography",members:23100,emoji:"\u{1F30D}",color:"#50c878"},{name:"Berlin Brasileiros",members:8900,emoji:"\u{1F1E7}\u{1F1F7}",color:"#ffa040"},{name:"Coffee > Sleep",members:456e3,emoji:"\u2615",color:"#c08040"}],I=[{author:"Ana Silva",date:"Dec 2023",text:"Diego is one of those rare people who can debug your code AND your life. An incredible friend, always there when you need help. 10/10 would add as friend again."},{author:"Bruno Costa",date:"Nov 2023",text:"Known Diego since university. The guy literally automated everything in his life with NixOS. Respect the dedication. Best engineer I know, no cap."},{author:"Carla Souza",date:"Oct 2023",text:"The most creative developer I have ever worked with. His projects are not just functional, they are beautiful. An artist disguised as an engineer."},{author:"Elena Torres",date:"Sep 2023",text:"Diego helped me set up my entire self-hosted infrastructure. Refused to let me use any cloud subscription. A true freedom fighter of the internet!"}],f=["#1a2840","#2a1840","#182838","#281828","#1a3028","#302818","#201838","#283018","#381828"];function j(){let a=document.getElementById("friends-grid");a&&H.forEach(e=>{let i=document.createElement("div");i.className="friend-cell",i.innerHTML=`
      <div class="friend-cell__avatar">
        <div class="friend-cell__avatar-inner" style="background:${e.color}">${e.initial}</div>
      </div>
      <span class="friend-cell__name">${e.name.split(" ")[0]}</span>
    `,a.appendChild(i)})}function F(){let a=document.getElementById("scraps-list");a&&M.forEach(e=>{let i=document.createElement("div");i.className="scrap",i.innerHTML=`
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
    `,a.appendChild(i)})}function N(){let a=document.getElementById("communities-grid");a&&S.forEach(e=>{let i=document.createElement("a");i.href="#",i.className="community-card";let n=e.members>=1e6?`${(e.members/1e6).toFixed(1)}M members`:e.members>=1e3?`${(e.members/1e3).toFixed(0)}K members`:`${e.members} members`;i.innerHTML=`
      <div class="community-card__icon" style="background:${e.color}20;color:${e.color}">${e.emoji}</div>
      <div class="community-card__body">
        <span class="community-card__name">${e.name}</span>
        <span class="community-card__members">${n}</span>
      </div>
    `,a.appendChild(i)})}function D(){let a=document.getElementById("testimonials-list");a&&I.forEach(e=>{let i=document.createElement("div");i.className="testimonial",i.innerHTML=`
      <div class="testimonial__header">
        <span class="testimonial__author">${e.author}</span>
        <span class="testimonial__date">${e.date}</span>
      </div>
      <p class="testimonial__text">${e.text}</p>
    `,a.appendChild(i)})}function O(){let a=document.getElementById("photo-grid");if(a)for(let e=0;e<9;e++){let i=document.createElement("div");i.className="photo-cell",i.innerHTML=`<div class="photo-cell__inner" style="background:${f[e%f.length]}"></div>`,a.appendChild(i)}}var d={heart:'<svg viewBox="0 0 24 24"><path d="M20.8 4.6a5.5 5.5 0 0 0-7.8 0L12 5.6l-1-1a5.5 5.5 0 0 0-7.8 7.8l1 1L12 21l7.8-7.6 1-1a5.5 5.5 0 0 0 0-7.8z"/></svg>',comment:'<svg viewBox="0 0 24 24"><path d="M21 11.5a8.4 8.4 0 0 1-9 8.4 9 9 0 0 1-4-1L3 20l1.1-4.9A8.4 8.4 0 0 1 12 3a8.4 8.4 0 0 1 9 8.5z"/></svg>',share:'<svg viewBox="0 0 24 24"><line x1="22" y1="2" x2="11" y2="13"/><polygon points="22 2 15 22 11 13 2 9 22 2"/></svg>',save:'<svg viewBox="0 0 24 24"><path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"/></svg>',home:'<svg viewBox="0 0 24 24"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/></svg>',grid:'<svg viewBox="0 0 24 24"><rect x="3" y="3" width="18" height="18" rx="2"/><line x1="9" y1="3" x2="9" y2="21"/><line x1="15" y1="3" x2="15" y2="21"/><line x1="3" y1="9" x2="21" y2="9"/><line x1="3" y1="15" x2="21" y2="15"/></svg>'};function T(a){let e=f[a%f.length],i=o[a%o.length];return`linear-gradient(135deg, ${e}, ${i})`}function t(a){return a.replace(/[&<>"]/g,e=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"})[e])}function w(a){let e=0;for(let i=0;i<a.length;i++)e=e*31+a.charCodeAt(i)>>>0;return o[e%o.length]}function P(){let a=document.getElementById("ig-view");if(!a)return;let e=globalThis.PORTAL_DATA?.instagram;if(!e){a.innerHTML='<p class="ig-empty">Instagram data not loaded.</p>';return}let i=e.profile,n=s=>s.toLocaleString(),r=e.liked_stories.length?e.liked_stories.map(s=>`
    <div class="ig-hl">
      <div class="ig-hl__ring"><div class="ig-hl__avatar" style="background:${w(s.handle)}">${t(s.handle.charAt(0).toUpperCase())}</div></div>
      <span class="ig-hl__name">${t(s.name||s.handle)}</span>
    </div>`).join(""):"",g=e.posts.length?e.posts.map(s=>`<a class="ig-tile" href="#"><img src="${s.media}" alt="post"></a>`).join(""):'<p class="ig-empty">No posts yet.</p>',h=(s,v)=>`
    <a class="ig-tile" href="${t(s.url)}" target="_blank" rel="noopener" style="background:${T(s.url.length)}">
      <span class="ig-tile__cap">${t(s.caption||s.url.replace("https://www.instagram.com/",""))}</span>
      <span class="ig-tile__badge">${v}</span>
    </a>`,y=e.saved.length?e.saved.map(s=>h(s,"\u{1F516}")).join(""):'<p class="ig-empty">Nothing saved.</p>',$=e.liked.length?e.liked.map(s=>h(s,"\u2764\uFE0F")).join(""):'<p class="ig-empty">No likes.</p>',l=e.comments.length?e.comments.map(s=>`
      <div class="ig-comment">
        <div class="ig-comment__text">${t(s.text)}</div>
        <div class="ig-comment__meta">${s.owner?"@"+t(s.owner)+" \xB7 ":""}${t(s.time||"")}</div>
      </div>`).join(""):'<p class="ig-empty">No comments.</p>',c=s=>`<div class="ig-grid">${s}</div>`,B=e.posts[0]?.media?`<img class="ig-head__avatar" src="${e.posts[0].media}" alt="${t(i.username)}">`:'<div class="ig-head__avatar"></div>';a.innerHTML=`
    <nav class="ig-nav">
      <div class="ig-nav__inner">
        <a href="#" class="ig-nav__logo">My Socials</a>
        <div class="ig-nav__search"><input placeholder="Search"></div>
        <div class="ig-nav__icons">${d.home}${d.heart}${d.comment}${d.share}</div>
      </div>
    </nav>
    <div class="ig-page">
      <header class="ig-head">
        ${B}
        <div class="ig-head__body">
          <div class="ig-head__top">
            <span class="ig-head__user">${t(i.username)}</span>
            <span class="ig-head__btn ig-head__btn--primary">Follow</span>
            <span class="ig-head__btn">Message</span>
          </div>
          <div class="ig-head__stats">
            <span class="ig-head__stat"><strong>${n(i.posts)}</strong> posts</span>
            <span class="ig-head__stat" data-modal="followers"><strong>${n(i.followers)}</strong> followers</span>
            <span class="ig-head__stat" data-modal="following"><strong>${n(i.following)}</strong> following</span>
          </div>
          <div class="ig-head__name">${t(i.name)}</div>
          <div class="ig-head__bio">${t(i.bio)}</div>
        </div>
      </header>

      ${r?`<div class="ig-highlights">${r}</div>`:""}

      <div class="ig-tabs">
        <div class="ig-tab is-active" data-pane="posts">${d.grid} Posts</div>
        <div class="ig-tab" data-pane="saved">${d.save} Saved ${i.posts,""}(${n(e.saved.length)})</div>
        <div class="ig-tab" data-pane="liked">${d.heart} Liked (${n(e.liked.length)})</div>
        <div class="ig-tab" data-pane="comments">${d.comment} Comments (${n(e.comments.length)})</div>
      </div>

      <div class="ig-pane is-active" data-pane="posts">${c(g)}</div>
      <div class="ig-pane" data-pane="saved">${c(y)}</div>
      <div class="ig-pane" data-pane="liked">${c($)}</div>
      <div class="ig-pane" data-pane="comments"><div class="ig-comments">${l}</div></div>
    </div>

    <div class="ig-modal" id="ig-modal">
      <div class="ig-modal__box">
        <div class="ig-modal__head">
          <small id="ig-modal-sub"></small><h3 id="ig-modal-title"></h3>
          <button id="ig-modal-close" aria-label="Close">&times;</button>
        </div>
        <div class="ig-modal__list" id="ig-modal-list"></div>
      </div>
    </div>`,a.querySelectorAll(".ig-tab").forEach(s=>{s.addEventListener("click",()=>{let v=s.dataset.pane;a.querySelectorAll(".ig-tab").forEach(m=>m.classList.toggle("is-active",m===s)),a.querySelectorAll(".ig-pane").forEach(m=>m.classList.toggle("is-active",m.dataset.pane===v))})});let u=a.querySelector("#ig-modal"),C=s=>{let v=s==="followers"?e.followers:e.following,m=s==="followers"?i.followers:i.following;a.querySelector("#ig-modal-title").textContent=s==="followers"?"Followers":"Following",a.querySelector("#ig-modal-sub").textContent=`showing ${n(v.length)} of ${n(m)}`,a.querySelector("#ig-modal-list").innerHTML=v.map(_=>`
      <div class="ig-row">
        <div class="ig-row__avatar" style="background:${w(_)}">${t(_.charAt(0).toUpperCase())}</div>
        <a class="ig-row__handle" href="https://www.instagram.com/${t(_)}" target="_blank" rel="noopener">${t(_)}</a>
        <span class="ig-row__follow">Follow</span>
      </div>`).join(""),u.classList.add("is-open")};a.querySelectorAll(".ig-head__stat[data-modal]").forEach(s=>s.addEventListener("click",()=>C(s.dataset.modal)));let b=()=>u.classList.remove("is-open");a.querySelector("#ig-modal-close").addEventListener("click",b),u.addEventListener("click",s=>{s.target===u&&b()})}var p={home:'<svg viewBox="0 0 24 24"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/></svg>',net:'<svg viewBox="0 0 24 24"><circle cx="9" cy="7" r="4"/><path d="M17 11a4 4 0 1 0-3-6.6M1 21v-2a4 4 0 0 1 4-4h8a4 4 0 0 1 4 4v2M17 15a4 4 0 0 1 4 4v2"/></svg>',jobs:'<svg viewBox="0 0 24 24"><rect x="2" y="7" width="20" height="14" rx="2"/><path d="M8 7V5a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"/></svg>',msg:'<svg viewBox="0 0 24 24"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>',bell:'<svg viewBox="0 0 24 24"><path d="M18 8a6 6 0 1 0-12 0c0 7-3 9-3 9h18s-3-2-3-9M13.7 21a2 2 0 0 1-3.4 0"/></svg>',like:'<svg viewBox="0 0 24 24"><path d="M14 9V5a3 3 0 0 0-6 0v4H5a2 2 0 0 0-2 2l1 7a2 2 0 0 0 2 2h9a2 2 0 0 0 2-2l1-7a2 2 0 0 0-2-2z"/></svg>',comment:'<svg viewBox="0 0 24 24"><path d="M21 11.5a8.4 8.4 0 0 1-9 8.4 9 9 0 0 1-4-1L3 20l1.1-4.9A8.4 8.4 0 0 1 12 3a8.4 8.4 0 0 1 9 8.5z"/></svg>',repost:'<svg viewBox="0 0 24 24"><polyline points="17 1 21 5 17 9"/><path d="M3 11V9a4 4 0 0 1 4-4h14M7 23l-4-4 4-4M21 13v2a4 4 0 0 1-4 4H3"/></svg>',send:'<svg viewBox="0 0 24 24"><line x1="22" y1="2" x2="11" y2="13"/><polygon points="22 2 15 22 11 13 2 9 22 2"/></svg>'};function q(a){return a.split(/\s+/).filter(Boolean).slice(0,2).map(e=>e.charAt(0).toUpperCase()).join("")}function z(){let a=document.getElementById("li-view");if(!a)return;let e=globalThis.PORTAL_DATA?.linkedin;if(!e){a.innerHTML='<p class="li-empty">LinkedIn data not loaded.</p>';return}let i=e.profile,n=(l,c)=>`<div class="li-nav__item">${l}<span>${c}</span></div>`,r=(l,c)=>`<section class="li-card li-section"><h2 class="li-section__title">${l}</h2>${c}</section>`,g='<p class="li-need">Not in the saved profile page \u2014 add from your LinkedIn data export (Settings \u2192 Get a copy of your data).</p>',h=e.experience.length?e.experience.map(l=>`
      <div class="li-item">
        <div class="li-item__logo">${t(l.company.charAt(0))}</div>
        <div>
          <div class="li-item__title">${t(l.title)}</div>
          <div class="li-item__sub">${t(l.company)}</div>
          <div class="li-item__meta">${t(l.dates)}${l.location?" \xB7 "+t(l.location):""}</div>
        </div>
      </div>`).join(""):g,y=e.education.length?e.education.map(l=>`
      <div class="li-item">
        <div class="li-item__logo">${t(l.school.charAt(0))}</div>
        <div>
          <div class="li-item__title">${t(l.school)}</div>
          <div class="li-item__sub">${t(l.degree)}</div>
          <div class="li-item__meta">${t(l.dates)}</div>
        </div>
      </div>`).join(""):g,$=e.skills.length?`<div class="li-skills">${e.skills.map(l=>`<span class="li-skill">${t(l)}</span>`).join("")}</div>`:g;a.innerHTML=`
    <nav class="li-nav">
      <div class="li-nav__inner">
        <span class="li-nav__logo">in</span>
        <div class="li-nav__search"><input placeholder="Search"></div>
        <div class="li-nav__items">
          ${n(p.home,"Home")}
          ${n(p.net,"Network")}
          ${n(p.jobs,"Jobs")}
          ${n(p.msg,"Messaging")}
          ${n(p.bell,"Notifications")}
        </div>
      </div>
    </nav>
    <div class="li-prof">
      <div class="li-prof__main">
        <section class="li-card li-phead">
          <div class="li-phead__banner"></div>
          <div class="li-phead__avatar" style="background:${o[3]}">${t(q(i.name))}</div>
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
        ${r("Experience",h)}
        ${r("Education",y)}
        ${r("Skills",$)}
      </div>
      <aside class="li-prof__rail">
        <div class="li-card li-side">
          <div class="li-side__title">Profile</div>
          <div class="li-side__row"><span>Current</span><strong>${t(i.current)}</strong></div>
          <div class="li-side__row"><span>Location</span><strong>${t(i.location.split(",")[0])}</strong></div>
          <div class="li-side__row"><span>Profile</span><a href="https://${t(i.url)}" target="_blank" rel="noopener">${t(i.url)}</a></div>
        </div>
      </aside>
    </div>`}var x={bell:'<svg viewBox="0 0 24 24"><path d="M18 8a6 6 0 1 0-12 0c0 7-3 9-3 9h18s-3-2-3-9M13.7 21a2 2 0 0 1-3.4 0"/></svg>',chat:'<svg viewBox="0 0 24 24"><path d="M21 11.5a8.4 8.4 0 0 1-9 8.4 9 9 0 0 1-4-1L3 20l1.1-4.9A8.4 8.4 0 0 1 12 3a8.4 8.4 0 0 1 9 8.5z"/></svg>'},k=[220,300,180,340,260,200,320,240,280];function R(){let a=document.getElementById("pin-view");if(!a)return;let i=[...S.map((n,r)=>({title:n.name,emoji:n.emoji,color:n.color,author:n.name,grad:r})),...M.map((n,r)=>({title:n.text.slice(0,60),emoji:"\u{1F4CC}",color:n.color,author:n.author,grad:r+3}))].map((n,r)=>`
    <div class="pin-card">
      <div class="pin-card__media" style="height:${k[r%k.length]}px;background:${T(n.grad)}">
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
        <div class="pin-nav__icons">${x.bell}${x.chat}<span class="pin-nav__avatar" style="background:${o[3]}">D</span></div>
      </div>
    </nav>
    <div class="pin-board">${i}</div>`}var A="mySocials.theme";function E(a){document.documentElement.setAttribute("data-theme",a);try{localStorage.setItem(A,a)}catch{}document.querySelectorAll("[data-theme-btn]").forEach(e=>{e.classList.toggle("is-active",e.dataset.themeBtn===a)}),window.scrollTo(0,0)}function G(){let a=localStorage.getItem(A)||"orkut";E(["orkut","instagram","linkedin","pinterest"].includes(a)?a:"orkut"),document.querySelectorAll("[data-theme-btn]").forEach(e=>{e.addEventListener("click",()=>E(e.dataset.themeBtn))})}function L(){j(),F(),N(),D(),O(),P(),z(),R(),G(),setTimeout(()=>{document.querySelectorAll(".trust-meter__fill").forEach(a=>{a.style.transition="width 1.2s cubic-bezier(0.16, 1, 0.3, 1)"})},300)}document.readyState==="loading"?document.addEventListener("DOMContentLoaded",L):L();})();
