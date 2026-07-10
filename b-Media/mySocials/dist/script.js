(()=>{var o=["#e8508a","#4a8aff","#3abb78","#8a6aff","#ff8a4a","#4ac0ff","#ff4a8a","#50c878","#ffa040","#8080ff","#ff6060","#40c0c0","#c060ff","#ff9060","#60b0ff"],B=[{name:"Ana Silva",initial:"A",color:o[0]},{name:"Bruno Costa",initial:"B",color:o[1]},{name:"Carla Souza",initial:"C",color:o[2]},{name:"Daniel Lima",initial:"D",color:o[3]},{name:"Elena Torres",initial:"E",color:o[4]},{name:"Felipe Gomes",initial:"F",color:o[5]},{name:"Gabi Santos",initial:"G",color:o[6]},{name:"Hugo Pereira",initial:"H",color:o[7]},{name:"Isa Oliveira",initial:"I",color:o[8]}],E=[{author:"Ana Silva",initial:"A",color:o[0],text:"Hey Diego! Miss our coding sessions at the uni. We should catch up soon! Saudades demais!",time:"2 hours ago"},{author:"Bruno Costa",initial:"B",color:o[1],text:"Cara, vi que voce ta morando em Berlin agora! Que top! Vamos marcar uma call?",time:"5 hours ago"},{author:"Carla Souza",initial:"C",color:o[2],text:"Happy birthday atrasado!! Hope you had an amazing day. Your projects are looking incredible btw",time:"yesterday"},{author:"Felipe Gomes",initial:"F",color:o[5],text:"Mano, teu MyMaps ta INSANO. Lembra quando a gente fazia mapa no paint? kkkk Evoluimos!",time:"2 days ago"},{author:"Gabi Santos",initial:"G",color:o[6],text:'Diego!! Join our community "Linux Users Brazil" please! We need more devs like you there',time:"3 days ago"},{author:"Hugo Pereira",initial:"H",color:o[7],text:"Saw your Strava activities... beast mode! When did you start cycling?",time:"4 days ago"},{author:"Isa Oliveira",initial:"I",color:o[8],text:"Testimonial request sent! You were the best partner for the compiler project, forever grateful",time:"1 week ago"}],T=[{name:"Eu odeio acordar cedo",members:1247893,emoji:"\u{1F634}",color:"#8a6aff"},{name:"NixOS Brasil",members:3420,emoji:"\u2744\uFE0F",color:"#4a8aff"},{name:"Linux Users",members:89340,emoji:"\u{1F427}",color:"#3abb78"},{name:"Cycling Addicts",members:45200,emoji:"\u{1F6B4}",color:"#ff8a4a"},{name:"Self-hosted Everything",members:12800,emoji:"\u{1F5A5}\uFE0F",color:"#4ac0ff"},{name:"Saudades do Orkut",members:892340,emoji:"\u{1F62D}",color:"#e8508a"},{name:"Maps & Geography",members:23100,emoji:"\u{1F30D}",color:"#50c878"},{name:"Berlin Brasileiros",members:8900,emoji:"\u{1F1E7}\u{1F1F7}",color:"#ffa040"},{name:"Coffee > Sleep",members:456e3,emoji:"\u2615",color:"#c08040"}],H=[{author:"Ana Silva",date:"Dec 2023",text:"Diego is one of those rare people who can debug your code AND your life. An incredible friend, always there when you need help. 10/10 would add as friend again."},{author:"Bruno Costa",date:"Nov 2023",text:"Known Diego since university. The guy literally automated everything in his life with NixOS. Respect the dedication. Best engineer I know, no cap."},{author:"Carla Souza",date:"Oct 2023",text:"The most creative developer I have ever worked with. His projects are not just functional, they are beautiful. An artist disguised as an engineer."},{author:"Elena Torres",date:"Sep 2023",text:"Diego helped me set up my entire self-hosted infrastructure. Refused to let me use any cloud subscription. A true freedom fighter of the internet!"}],b=["#1a2840","#2a1840","#182838","#281828","#1a3028","#302818","#201838","#283018","#381828"];function C(){let i=document.getElementById("friends-grid");i&&B.forEach(e=>{let a=document.createElement("div");a.className="friend-cell",a.innerHTML=`
      <div class="friend-cell__avatar">
        <div class="friend-cell__avatar-inner" style="background:${e.color}">${e.initial}</div>
      </div>
      <span class="friend-cell__name">${e.name.split(" ")[0]}</span>
    `,i.appendChild(a)})}function j(){let i=document.getElementById("scraps-list");i&&E.forEach(e=>{let a=document.createElement("div");a.className="scrap",a.innerHTML=`
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
    `,i.appendChild(a)})}function D(){let i=document.getElementById("communities-grid");i&&T.forEach(e=>{let a=document.createElement("a");a.href="#",a.className="community-card";let s=e.members>=1e6?`${(e.members/1e6).toFixed(1)}M members`:e.members>=1e3?`${(e.members/1e3).toFixed(0)}K members`:`${e.members} members`;a.innerHTML=`
      <div class="community-card__icon" style="background:${e.color}20;color:${e.color}">${e.emoji}</div>
      <div class="community-card__body">
        <span class="community-card__name">${e.name}</span>
        <span class="community-card__members">${s}</span>
      </div>
    `,i.appendChild(a)})}function F(){let i=document.getElementById("testimonials-list");i&&H.forEach(e=>{let a=document.createElement("div");a.className="testimonial",a.innerHTML=`
      <div class="testimonial__header">
        <span class="testimonial__author">${e.author}</span>
        <span class="testimonial__date">${e.date}</span>
      </div>
      <p class="testimonial__text">${e.text}</p>
    `,i.appendChild(a)})}function N(){let i=document.getElementById("photo-grid");if(i)for(let e=0;e<9;e++){let a=document.createElement("div");a.className="photo-cell",a.innerHTML=`<div class="photo-cell__inner" style="background:${b[e%b.length]}"></div>`,i.appendChild(a)}}var g={heart:'<svg viewBox="0 0 24 24"><path d="M20.8 4.6a5.5 5.5 0 0 0-7.8 0L12 5.6l-1-1a5.5 5.5 0 0 0-7.8 7.8l1 1L12 21l7.8-7.6 1-1a5.5 5.5 0 0 0 0-7.8z"/></svg>',comment:'<svg viewBox="0 0 24 24"><path d="M21 11.5a8.4 8.4 0 0 1-9 8.4 9 9 0 0 1-4-1L3 20l1.1-4.9A8.4 8.4 0 0 1 12 3a8.4 8.4 0 0 1 9 8.5z"/></svg>',share:'<svg viewBox="0 0 24 24"><line x1="22" y1="2" x2="11" y2="13"/><polygon points="22 2 15 22 11 13 2 9 22 2"/></svg>',save:'<svg viewBox="0 0 24 24"><path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"/></svg>',home:'<svg viewBox="0 0 24 24"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/></svg>',grid:'<svg viewBox="0 0 24 24"><rect x="3" y="3" width="18" height="18" rx="2"/><line x1="9" y1="3" x2="9" y2="21"/><line x1="15" y1="3" x2="15" y2="21"/><line x1="3" y1="9" x2="21" y2="9"/><line x1="3" y1="15" x2="21" y2="15"/></svg>'};function M(i){let e=b[i%b.length],a=o[i%o.length];return`linear-gradient(135deg, ${e}, ${a})`}function t(i){return i.replace(/[&<>"]/g,e=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"})[e])}function O(i){let e=0;for(let a=0;a<i.length;a++)e=e*31+i.charCodeAt(a)>>>0;return o[e%o.length]}function P(){let i=document.getElementById("ig-view");if(!i)return;let e=globalThis.PORTAL_DATA?.instagram;if(!e){i.innerHTML='<p class="ig-empty">Instagram data not loaded.</p>';return}let a=e.profile,s=n=>n.toLocaleString(),r=e.stories.length?e.stories.map((n,m)=>`
    <div class="ig-hl">
      <div class="ig-hl__ring"><div class="ig-hl__avatar"><img src="${n.media}" alt="story ${m+1}"></div></div>
      <span class="ig-hl__name">${t(n.caption||"Story")}</span>
    </div>`).join(""):"",d=e.posts.length?e.posts.map(n=>`<a class="ig-tile" href="#"><img src="${n.media}" alt="post"></a>`).join(""):'<p class="ig-empty">No posts yet.</p>',v=(n,m)=>`
    <a class="ig-tile" href="${t(n.url)}" target="_blank" rel="noopener" style="background:${M(n.url.length)}">
      <span class="ig-tile__cap">${t(n.caption||n.url.replace("https://www.instagram.com/",""))}</span>
      <span class="ig-tile__badge">${m}</span>
    </a>`,h=e.saved.length?e.saved.map(n=>v(n,"\u{1F516}")).join(""):'<p class="ig-empty">Nothing saved.</p>',u=e.liked.length?e.liked.map(n=>v(n,"\u2764\uFE0F")).join(""):'<p class="ig-empty">No likes.</p>',l=e.comments.length?e.comments.map(n=>`
      <div class="ig-comment">
        <div class="ig-comment__text">${t(n.text)}</div>
        <div class="ig-comment__meta">${n.owner?"@"+t(n.owner)+" \xB7 ":""}${t(n.time||"")}</div>
      </div>`).join(""):'<p class="ig-empty">No comments.</p>',c=n=>`<div class="ig-grid">${n}</div>`,A=e.posts[0]?.media?`<img class="ig-head__avatar" src="${e.posts[0].media}" alt="${t(a.username)}">`:'<div class="ig-head__avatar"></div>';i.innerHTML=`
    <nav class="ig-nav">
      <div class="ig-nav__inner">
        <a href="#" class="ig-nav__logo">My Socials</a>
        <div class="ig-nav__search"><input placeholder="Search"></div>
        <div class="ig-nav__icons">${g.home}${g.heart}${g.comment}${g.share}</div>
      </div>
    </nav>
    <div class="ig-page">
      <header class="ig-head">
        ${A}
        <div class="ig-head__body">
          <div class="ig-head__top">
            <span class="ig-head__user">${t(a.username)}</span>
            <span class="ig-head__btn ig-head__btn--primary">Follow</span>
            <span class="ig-head__btn">Message</span>
          </div>
          <div class="ig-head__stats">
            <span class="ig-head__stat"><strong>${s(a.posts)}</strong> posts</span>
            <span class="ig-head__stat" data-modal="followers"><strong>${s(a.followers)}</strong> followers</span>
            <span class="ig-head__stat" data-modal="following"><strong>${s(a.following)}</strong> following</span>
          </div>
          <div class="ig-head__name">${t(a.name)}</div>
          <div class="ig-head__bio">${t(a.bio)}</div>
        </div>
      </header>

      ${r?`<div class="ig-highlights">${r}</div>`:""}

      <div class="ig-tabs">
        <div class="ig-tab is-active" data-pane="posts">${g.grid} Posts</div>
        <div class="ig-tab" data-pane="saved">${g.save} Saved ${a.posts,""}(${s(e.saved.length)})</div>
        <div class="ig-tab" data-pane="liked">${g.heart} Liked (${s(e.liked.length)})</div>
        <div class="ig-tab" data-pane="comments">${g.comment} Comments (${s(e.comments.length)})</div>
      </div>

      <div class="ig-pane is-active" data-pane="posts">${c(d)}</div>
      <div class="ig-pane" data-pane="saved">${c(h)}</div>
      <div class="ig-pane" data-pane="liked">${c(u)}</div>
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
    </div>`,i.querySelectorAll(".ig-tab").forEach(n=>{n.addEventListener("click",()=>{let m=n.dataset.pane;i.querySelectorAll(".ig-tab").forEach(p=>p.classList.toggle("is-active",p===n)),i.querySelectorAll(".ig-pane").forEach(p=>p.classList.toggle("is-active",p.dataset.pane===m))})});let f=i.querySelector("#ig-modal"),I=n=>{let m=n==="followers"?e.followers:e.following,p=n==="followers"?a.followers:a.following;i.querySelector("#ig-modal-title").textContent=n==="followers"?"Followers":"Following",i.querySelector("#ig-modal-sub").textContent=`showing ${s(m.length)} of ${s(p)}`,i.querySelector("#ig-modal-list").innerHTML=m.map($=>`
      <div class="ig-row">
        <div class="ig-row__avatar" style="background:${O($)}">${t($.charAt(0).toUpperCase())}</div>
        <a class="ig-row__handle" href="https://www.instagram.com/${t($)}" target="_blank" rel="noopener">${t($)}</a>
        <span class="ig-row__follow">Follow</span>
      </div>`).join(""),f.classList.add("is-open")};i.querySelectorAll(".ig-head__stat[data-modal]").forEach(n=>n.addEventListener("click",()=>I(n.dataset.modal)));let w=()=>f.classList.remove("is-open");i.querySelector("#ig-modal-close").addEventListener("click",w),f.addEventListener("click",n=>{n.target===f&&w()})}var _={home:'<svg viewBox="0 0 24 24"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/></svg>',net:'<svg viewBox="0 0 24 24"><circle cx="9" cy="7" r="4"/><path d="M17 11a4 4 0 1 0-3-6.6M1 21v-2a4 4 0 0 1 4-4h8a4 4 0 0 1 4 4v2M17 15a4 4 0 0 1 4 4v2"/></svg>',jobs:'<svg viewBox="0 0 24 24"><rect x="2" y="7" width="20" height="14" rx="2"/><path d="M8 7V5a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"/></svg>',msg:'<svg viewBox="0 0 24 24"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>',bell:'<svg viewBox="0 0 24 24"><path d="M18 8a6 6 0 1 0-12 0c0 7-3 9-3 9h18s-3-2-3-9M13.7 21a2 2 0 0 1-3.4 0"/></svg>',like:'<svg viewBox="0 0 24 24"><path d="M14 9V5a3 3 0 0 0-6 0v4H5a2 2 0 0 0-2 2l1 7a2 2 0 0 0 2 2h9a2 2 0 0 0 2-2l1-7a2 2 0 0 0-2-2z"/></svg>',comment:'<svg viewBox="0 0 24 24"><path d="M21 11.5a8.4 8.4 0 0 1-9 8.4 9 9 0 0 1-4-1L3 20l1.1-4.9A8.4 8.4 0 0 1 12 3a8.4 8.4 0 0 1 9 8.5z"/></svg>',repost:'<svg viewBox="0 0 24 24"><polyline points="17 1 21 5 17 9"/><path d="M3 11V9a4 4 0 0 1 4-4h14M7 23l-4-4 4-4M21 13v2a4 4 0 0 1-4 4H3"/></svg>',send:'<svg viewBox="0 0 24 24"><line x1="22" y1="2" x2="11" y2="13"/><polygon points="22 2 15 22 11 13 2 9 22 2"/></svg>'};function q(i){return i.split(/\s+/).filter(Boolean).slice(0,2).map(e=>e.charAt(0).toUpperCase()).join("")}function z(){let i=document.getElementById("li-view");if(!i)return;let e=globalThis.PORTAL_DATA?.linkedin;if(!e){i.innerHTML='<p class="li-empty">LinkedIn data not loaded.</p>';return}let a=e.profile,s=(l,c)=>`<div class="li-nav__item">${l}<span>${c}</span></div>`,r=(l,c)=>`<section class="li-card li-section"><h2 class="li-section__title">${l}</h2>${c}</section>`,d='<p class="li-need">Not in the saved profile page \u2014 add from your LinkedIn data export (Settings \u2192 Get a copy of your data).</p>',v=e.experience.length?e.experience.map(l=>`
      <div class="li-item">
        <div class="li-item__logo">${t(l.company.charAt(0))}</div>
        <div>
          <div class="li-item__title">${t(l.title)}</div>
          <div class="li-item__sub">${t(l.company)}</div>
          <div class="li-item__meta">${t(l.dates)}${l.location?" \xB7 "+t(l.location):""}</div>
        </div>
      </div>`).join(""):d,h=e.education.length?e.education.map(l=>`
      <div class="li-item">
        <div class="li-item__logo">${t(l.school.charAt(0))}</div>
        <div>
          <div class="li-item__title">${t(l.school)}</div>
          <div class="li-item__sub">${t(l.degree)}</div>
          <div class="li-item__meta">${t(l.dates)}</div>
        </div>
      </div>`).join(""):d,u=e.skills.length?`<div class="li-skills">${e.skills.map(l=>`<span class="li-skill">${t(l)}</span>`).join("")}</div>`:d;i.innerHTML=`
    <nav class="li-nav">
      <div class="li-nav__inner">
        <span class="li-nav__logo">in</span>
        <div class="li-nav__search"><input placeholder="Search"></div>
        <div class="li-nav__items">
          ${s(_.home,"Home")}
          ${s(_.net,"Network")}
          ${s(_.jobs,"Jobs")}
          ${s(_.msg,"Messaging")}
          ${s(_.bell,"Notifications")}
        </div>
      </div>
    </nav>
    <div class="li-prof">
      <div class="li-prof__main">
        <section class="li-card li-phead">
          <div class="li-phead__banner"></div>
          <div class="li-phead__avatar" style="background:${o[3]}">${t(q(a.name))}</div>
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
        ${r("Experience",v)}
        ${r("Education",h)}
        ${r("Skills",u)}
      </div>
      <aside class="li-prof__rail">
        <div class="li-card li-side">
          <div class="li-side__title">Profile</div>
          <div class="li-side__row"><span>Current</span><strong>${t(a.current)}</strong></div>
          <div class="li-side__row"><span>Location</span><strong>${t(a.location.split(",")[0])}</strong></div>
          <div class="li-side__row"><span>Profile</span><a href="https://${t(a.url)}" target="_blank" rel="noopener">${t(a.url)}</a></div>
        </div>
      </aside>
    </div>`}var x={bell:'<svg viewBox="0 0 24 24"><path d="M18 8a6 6 0 1 0-12 0c0 7-3 9-3 9h18s-3-2-3-9M13.7 21a2 2 0 0 1-3.4 0"/></svg>',chat:'<svg viewBox="0 0 24 24"><path d="M21 11.5a8.4 8.4 0 0 1-9 8.4 9 9 0 0 1-4-1L3 20l1.1-4.9A8.4 8.4 0 0 1 12 3a8.4 8.4 0 0 1 9 8.5z"/></svg>'},k=[220,300,180,340,260,200,320,240,280];function R(){let i=document.getElementById("pin-view");if(!i)return;let a=[...T.map((s,r)=>({title:s.name,emoji:s.emoji,color:s.color,author:s.name,grad:r})),...E.map((s,r)=>({title:s.text.slice(0,60),emoji:"\u{1F4CC}",color:s.color,author:s.author,grad:r+3}))].map((s,r)=>`
    <div class="pin-card">
      <div class="pin-card__media" style="height:${k[r%k.length]}px;background:${M(s.grad)}">
        ${s.emoji}
        <div class="pin-card__overlay"><span class="pin-card__save">Save</span></div>
      </div>
      <div class="pin-card__title">${s.title}</div>
      <div class="pin-card__meta">
        <span class="pin-card__avatar" style="background:${s.color}">${s.author.charAt(0)}</span>
        <span>${s.author.split(" ")[0]}</span>
      </div>
    </div>`).join("");i.innerHTML=`
    <nav class="pin-nav">
      <div class="pin-nav__inner">
        <span class="pin-nav__logo">P</span>
        <a href="#" class="pin-nav__tab pin-nav__tab--active">Home</a>
        <a href="#" class="pin-nav__tab">Explore</a>
        <div class="pin-nav__search"><input placeholder="Search for ideas"></div>
        <div class="pin-nav__icons">${x.bell}${x.chat}<span class="pin-nav__avatar" style="background:${o[3]}">D</span></div>
      </div>
    </nav>
    <div class="pin-board">${a}</div>`}function G(){let i=document.getElementById("me-view");if(!i)return;let e=globalThis.PORTAL_DATA||{},a=e.instagram,s=e.linkedin,r=s?.profile.name||a?.profile.name||"Diego Nepomuceno Marcos",d=s?.profile.headline||"",v=s?.profile.location||"",h=a?.profile.bio||"",u=a?.posts[0]?.media,l=[{theme:"linkedin",label:"LinkedIn",meta:s?`${s.profile.connections} connections \xB7 ${s.profile.followers.toLocaleString()} followers`:"profile",color:"#0a66c2"},{theme:"instagram",label:"Instagram",meta:a?`${a.profile.followers.toLocaleString()} followers \xB7 ${a.profile.posts} post${a.profile.posts===1?"":"s"}`:"profile",color:"#dc2743"},{theme:"pinterest",label:"Pinterest",meta:"boards & pins",color:"#e60023"},{theme:"orkut",label:"Orkut",meta:"the classic profile",color:"#e9008c"}];i.innerHTML=`
    <div class="me-hub">
      <div class="me-card">
        ${u?`<img class="me-avatar" src="${u}" alt="${t(r)}">`:'<div class="me-avatar"></div>'}
        <h1 class="me-name">${t(r)}</h1>
        ${d?`<p class="me-headline">${t(d)}</p>`:""}
        ${v?`<p class="me-loc">${t(v)}</p>`:""}
        ${h?`<p class="me-bio">${t(h)}</p>`:""}
      </div>
      <div class="me-links">
        ${l.map(c=>`
          <button class="me-link" data-goto="${c.theme}" style="--accent:${c.color}">
            <span class="me-link__dot"></span>
            <span class="me-link__body">
              <span class="me-link__name">${c.label}</span>
              <span class="me-link__meta">${t(c.meta)}</span>
            </span>
            <span class="me-link__arrow">\u2192</span>
          </button>`).join("")}
      </div>
    </div>`,i.querySelectorAll(".me-link").forEach(c=>c.addEventListener("click",()=>y(c.dataset.goto)))}var S="mySocials.theme",V=["myprofile","orkut","instagram","linkedin","pinterest"];function y(i){document.documentElement.setAttribute("data-theme",i);try{localStorage.setItem(S,i)}catch{}document.querySelectorAll("[data-theme-btn]").forEach(e=>{e.classList.toggle("is-active",e.dataset.themeBtn===i)}),window.scrollTo(0,0)}function U(){let i=localStorage.getItem(S);y(V.includes(i)?i:"myprofile"),document.querySelectorAll("[data-theme-btn]").forEach(e=>{e.addEventListener("click",()=>y(e.dataset.themeBtn))})}function L(){C(),j(),D(),F(),N(),P(),z(),R(),G(),U(),setTimeout(()=>{document.querySelectorAll(".trust-meter__fill").forEach(i=>{i.style.transition="width 1.2s cubic-bezier(0.16, 1, 0.3, 1)"})},300)}document.readyState==="loading"?document.addEventListener("DOMContentLoaded",L):L();})();
