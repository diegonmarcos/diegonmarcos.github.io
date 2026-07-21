(()=>{var u=["#e8508a","#4a8aff","#3abb78","#8a6aff","#ff8a4a","#4ac0ff","#ff4a8a","#50c878","#ffa040","#8080ff","#ff6060","#40c0c0","#c060ff","#ff9060","#60b0ff"],U=[{name:"Ana Silva",initial:"A",color:u[0]},{name:"Bruno Costa",initial:"B",color:u[1]},{name:"Carla Souza",initial:"C",color:u[2]},{name:"Daniel Lima",initial:"D",color:u[3]},{name:"Elena Torres",initial:"E",color:u[4]},{name:"Felipe Gomes",initial:"F",color:u[5]},{name:"Gabi Santos",initial:"G",color:u[6]},{name:"Hugo Pereira",initial:"H",color:u[7]},{name:"Isa Oliveira",initial:"I",color:u[8]}],K=[{author:"Ana Silva",initial:"A",color:u[0],text:"Hey Diego! Miss our coding sessions at the uni. We should catch up soon! Saudades demais!",time:"2 hours ago"},{author:"Bruno Costa",initial:"B",color:u[1],text:"Cara, vi que voce ta morando em Berlin agora! Que top! Vamos marcar uma call?",time:"5 hours ago"},{author:"Carla Souza",initial:"C",color:u[2],text:"Happy birthday atrasado!! Hope you had an amazing day. Your projects are looking incredible btw",time:"yesterday"},{author:"Felipe Gomes",initial:"F",color:u[5],text:"Mano, teu MyMaps ta INSANO. Lembra quando a gente fazia mapa no paint? kkkk Evoluimos!",time:"2 days ago"},{author:"Gabi Santos",initial:"G",color:u[6],text:'Diego!! Join our community "Linux Users Brazil" please! We need more devs like you there',time:"3 days ago"},{author:"Hugo Pereira",initial:"H",color:u[7],text:"Saw your Strava activities... beast mode! When did you start cycling?",time:"4 days ago"},{author:"Isa Oliveira",initial:"I",color:u[8],text:"Testimonial request sent! You were the best partner for the compiler project, forever grateful",time:"1 week ago"}],X=[{name:"Eu odeio acordar cedo",members:1247893,emoji:"\u{1F634}",color:"#8a6aff"},{name:"NixOS Brasil",members:3420,emoji:"\u2744\uFE0F",color:"#4a8aff"},{name:"Linux Users",members:89340,emoji:"\u{1F427}",color:"#3abb78"},{name:"Cycling Addicts",members:45200,emoji:"\u{1F6B4}",color:"#ff8a4a"},{name:"Self-hosted Everything",members:12800,emoji:"\u{1F5A5}\uFE0F",color:"#4ac0ff"},{name:"Saudades do Orkut",members:892340,emoji:"\u{1F62D}",color:"#e8508a"},{name:"Maps & Geography",members:23100,emoji:"\u{1F30D}",color:"#50c878"},{name:"Berlin Brasileiros",members:8900,emoji:"\u{1F1E7}\u{1F1F7}",color:"#ffa040"},{name:"Coffee > Sleep",members:456e3,emoji:"\u2615",color:"#c08040"}],Z=[{author:"Ana Silva",date:"Dec 2023",text:"Diego is one of those rare people who can debug your code AND your life. An incredible friend, always there when you need help. 10/10 would add as friend again."},{author:"Bruno Costa",date:"Nov 2023",text:"Known Diego since university. The guy literally automated everything in his life with NixOS. Respect the dedication. Best engineer I know, no cap."},{author:"Carla Souza",date:"Oct 2023",text:"The most creative developer I have ever worked with. His projects are not just functional, they are beautiful. An artist disguised as an engineer."},{author:"Elena Torres",date:"Sep 2023",text:"Diego helped me set up my entire self-hosted infrastructure. Refused to let me use any cloud subscription. A true freedom fighter of the internet!"}],P=["#1a2840","#2a1840","#182838","#281828","#1a3028","#302818","#201838","#283018","#381828"];function ee(){let s=document.getElementById("friends-grid");s&&U.forEach(e=>{let a=document.createElement("div");a.className="friend-cell",a.innerHTML=`
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
    `,s.appendChild(a)})}function te(){let s=document.getElementById("photo-grid");if(s)for(let e=0;e<9;e++){let a=document.createElement("div");a.className="photo-cell",a.innerHTML=`<div class="photo-cell__inner" style="background:${P[e%P.length]}"></div>`,s.appendChild(a)}}var b={heart:'<svg viewBox="0 0 24 24"><path d="M20.8 4.6a5.5 5.5 0 0 0-7.8 0L12 5.6l-1-1a5.5 5.5 0 0 0-7.8 7.8l1 1L12 21l7.8-7.6 1-1a5.5 5.5 0 0 0 0-7.8z"/></svg>',comment:'<svg viewBox="0 0 24 24"><path d="M21 11.5a8.4 8.4 0 0 1-9 8.4 9 9 0 0 1-4-1L3 20l1.1-4.9A8.4 8.4 0 0 1 12 3a8.4 8.4 0 0 1 9 8.5z"/></svg>',share:'<svg viewBox="0 0 24 24"><line x1="22" y1="2" x2="11" y2="13"/><polygon points="22 2 15 22 11 13 2 9 22 2"/></svg>',save:'<svg viewBox="0 0 24 24"><path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"/></svg>',home:'<svg viewBox="0 0 24 24"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/></svg>',grid:'<svg viewBox="0 0 24 24"><rect x="3" y="3" width="18" height="18" rx="2"/><line x1="9" y1="3" x2="9" y2="21"/><line x1="15" y1="3" x2="15" y2="21"/><line x1="3" y1="9" x2="21" y2="9"/><line x1="3" y1="15" x2="21" y2="15"/></svg>',reels:'<svg viewBox="0 0 24 24"><rect x="3" y="3" width="18" height="18" rx="3"/><line x1="3" y1="8" x2="21" y2="8"/><line x1="8" y1="3" x2="10" y2="8"/><line x1="14" y1="3" x2="16" y2="8"/><polygon points="10 11 15 13.5 10 16" fill="currentColor" stroke="none"/></svg>',tagged:'<svg viewBox="0 0 24 24"><rect x="3" y="3" width="18" height="18" rx="3"/><circle cx="12" cy="10" r="3"/><path d="M7 18a5 5 0 0 1 10 0"/></svg>'};function T(s){let e=P[s%P.length],a=u[s%u.length];return`linear-gradient(135deg, ${e}, ${a})`}function i(s){return s.replace(/[&<>"]/g,e=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"})[e])}function ne(s){let e=0;for(let a=0;a<s.length;a++)e=e*31+s.charCodeAt(a)>>>0;return u[e%u.length]}var H=["ana","bruno","carla","diego","elena","felipe","gabi","hugo","isa","joao","lu","marco","nina","otto","paula","rafa","sofia","tiago","vera","yara"],R=["","_",".","__"],N=["","br","berlin","photo","travel","x","oficial","real","99","mrx","gram"];function oe(s,e){let a=s.slice();for(let n=0;a.length<e;n++){let d=H[n%H.length],r=R[(n>>2)%R.length],o=N[(n>>1)%N.length],g=Math.floor(n/(H.length*R.length)),m=`${d}${r}${o}${g>0?g:""}`;a.includes(m)?a.push(`${m}${a.length}`):a.push(m)}return a}function le(){let s=document.getElementById("ig-view");if(!s)return;let e=globalThis.PORTAL_DATA?.instagram;if(!e){s.innerHTML='<p class="ig-empty">Instagram data not loaded.</p>';return}let a=e.profile,n=t=>t.toLocaleString(),d=e.stories.map((t,p)=>`
    <div class="ig-hl">
      <div class="ig-hl__ring"><div class="ig-hl__avatar"><img src="${t.media}" alt="story ${p+1}"></div></div>
      <span class="ig-hl__name">${i(t.caption||"Story")}</span>
    </div>`),r=(e.highlights||[]).map((t,p)=>`
    <div class="ig-hl">
      <div class="ig-hl__ring"><div class="ig-hl__avatar" style="background:${T(p)}"><span class="ig-hl__emoji">${t.emoji}</span></div></div>
      <span class="ig-hl__name">${i(t.label)}</span>
    </div>`),o=[...d,...r].join(""),g=(t,p)=>`
    <a class="ig-tile" href="${i(t.url)}" target="_blank" rel="noopener" style="background:${T(t.url.length)}">
      <span class="ig-tile__cap">${i(t.caption||t.url.replace("https://www.instagram.com/",""))}</span>
      <span class="ig-tile__badge">${p}</span>
    </a>`,m=e.saved.length?e.saved.map(t=>g(t,"\u{1F516}")).join(""):'<p class="ig-empty">Nothing saved.</p>',v=e.liked.length?e.liked.map(t=>g(t,"\u2764\uFE0F")).join(""):'<p class="ig-empty">No likes.</p>',_=30,c=[...e.saved,...e.liked].map(t=>t.caption).filter(Boolean),y=e.posts.map(t=>`<a class="ig-tile" href="#"><img src="${t.media}" alt="post"></a>`),k=Array.from({length:Math.max(0,_-y.length)},(t,p)=>`
    <a class="ig-tile ig-tile--post" href="#" style="background:${T(p)}">
      <span class="ig-tile__cap">${i(c[p%(c.length||1)]||"")}</span>
    </a>`),L=y.length||k.length?[...y,...k].join(""):'<p class="ig-empty">No posts yet.</p>',l='<svg class="ig-tile__ov" viewBox="0 0 24 24"><polygon points="10 8 16 12 10 16 10 8" fill="currentColor" stroke="none"/></svg>',$=Array.from({length:12},(t,p)=>`
    <a class="ig-tile ig-tile--post" href="#" style="background:${T(p+5)}">${l}
      <span class="ig-tile__cap">${i(c[(p+2)%(c.length||1)]||"")}</span>
    </a>`).join(""),A=Array.from({length:9},(t,p)=>`
    <a class="ig-tile ig-tile--post" href="#" style="background:${T(p+9)}">
      <span class="ig-tile__badge">@${i(a.username)}</span>
    </a>`).join(""),E=e.comments.length?e.comments.map(t=>`
      <div class="ig-comment">
        <div class="ig-comment__text">${i(t.text)}</div>
        <div class="ig-comment__meta">${t.owner?"@"+i(t.owner)+" \xB7 ":""}${i(t.time||"")}</div>
      </div>`).join(""):'<p class="ig-empty">No comments.</p>',w=t=>`<div class="ig-grid">${t}</div>`,M=e.posts[0]?.media?`<img class="ig-head__avatar" src="${e.posts[0].media}" alt="${i(a.username)}">`:'<div class="ig-head__avatar"></div>';s.innerHTML=`
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

      ${o?`<div class="ig-highlights">${o}</div>`:""}

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
      <div class="ig-pane" data-pane="tagged">${w(A)}</div>
      <div class="ig-pane" data-pane="saved">${w(m)}</div>
      <div class="ig-pane" data-pane="liked">${w(v)}</div>
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
    </div>`,s.querySelectorAll(".ig-tab, .ig-pill").forEach(t=>{t.addEventListener("click",()=>{let p=t.dataset.pane;s.querySelectorAll(".ig-tab, .ig-pill").forEach(f=>f.classList.toggle("is-active",f===t)),s.querySelectorAll(".ig-pane").forEach(f=>f.classList.toggle("is-active",f.dataset.pane===p))})});let h=s.querySelector("#ig-modal"),q=t=>{let p=t==="followers"?e.followers:e.following,f=t==="followers"?a.followers:a.following,J=oe(p,f);s.querySelector("#ig-modal-title").textContent=t==="followers"?"Followers":"Following",s.querySelector("#ig-modal-sub").textContent=`${n(f)} ${t}`,s.querySelector("#ig-modal-list").innerHTML=J.map(I=>`
      <div class="ig-row">
        <div class="ig-row__avatar" style="background:${ne(I)}">${i(I.charAt(0).toUpperCase())}</div>
        <a class="ig-row__handle" href="https://www.instagram.com/${i(I)}" target="_blank" rel="noopener">${i(I)}</a>
        <span class="ig-row__follow">Follow</span>
      </div>`).join(""),h.classList.add("is-open")};s.querySelectorAll(".ig-head__stat[data-modal]").forEach(t=>t.addEventListener("click",()=>q(t.dataset.modal)));let x=()=>h.classList.remove("is-open");s.querySelector("#ig-modal-close").addEventListener("click",x),h.addEventListener("click",t=>{t.target===h&&x()})}var S={home:'<svg viewBox="0 0 24 24"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/></svg>',net:'<svg viewBox="0 0 24 24"><circle cx="9" cy="7" r="4"/><path d="M17 11a4 4 0 1 0-3-6.6M1 21v-2a4 4 0 0 1 4-4h8a4 4 0 0 1 4 4v2M17 15a4 4 0 0 1 4 4v2"/></svg>',jobs:'<svg viewBox="0 0 24 24"><rect x="2" y="7" width="20" height="14" rx="2"/><path d="M8 7V5a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"/></svg>',msg:'<svg viewBox="0 0 24 24"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>',bell:'<svg viewBox="0 0 24 24"><path d="M18 8a6 6 0 1 0-12 0c0 7-3 9-3 9h18s-3-2-3-9M13.7 21a2 2 0 0 1-3.4 0"/></svg>',like:'<svg viewBox="0 0 24 24"><path d="M14 9V5a3 3 0 0 0-6 0v4H5a2 2 0 0 0-2 2l1 7a2 2 0 0 0 2 2h9a2 2 0 0 0 2-2l1-7a2 2 0 0 0-2-2z"/></svg>',comment:'<svg viewBox="0 0 24 24"><path d="M21 11.5a8.4 8.4 0 0 1-9 8.4 9 9 0 0 1-4-1L3 20l1.1-4.9A8.4 8.4 0 0 1 12 3a8.4 8.4 0 0 1 9 8.5z"/></svg>',repost:'<svg viewBox="0 0 24 24"><polyline points="17 1 21 5 17 9"/><path d="M3 11V9a4 4 0 0 1 4-4h14M7 23l-4-4 4-4M21 13v2a4 4 0 0 1-4 4H3"/></svg>',send:'<svg viewBox="0 0 24 24"><line x1="22" y1="2" x2="11" y2="13"/><polygon points="22 2 15 22 11 13 2 9 22 2"/></svg>'};function O(s){return i(s).replace(/\n+/g,"<br>")}function V(s){return s.split(/\s+/).filter(Boolean).slice(0,2).map(e=>e.charAt(0).toUpperCase()).join("")}var B={experience:3,education:3,skills:12,projects:2};function D(s,e,a,n="more"){if(s.length<=e)return s.map(a).join("");let d=s.slice(0,e).map(a).join(""),r=s.slice(e).map(a).join(""),o=`Show ${s.length-e} ${n}`;return`${d}<div class="li-more-wrap">${r}</div><button type="button" class="li-more" aria-expanded="false" data-label="${o}">${o}</button>`}function re(){let s=document.getElementById("li-view");if(!s)return;let e=globalThis.PORTAL_DATA?.linkedin;if(!e){s.innerHTML='<p class="li-empty">LinkedIn data not loaded.</p>';return}let a=e.profile,n=(l,$)=>`<div class="li-nav__item">${l}<span>${$}</span></div>`,d=globalThis.PORTAL_DATA?.instagram?.posts?.[0]?.media,r=a.photo||d,o=r?`<div class="li-phead__avatar li-phead__avatar--img"><img src="${r}" alt="${i(a.name)}"></div>`:`<div class="li-phead__avatar" style="background:${u[3]}">${i(V(a.name))}</div>`,g=(l,$)=>`<section class="li-card li-section"><h2 class="li-section__title">${l}</h2>${$}</section>`,m='<p class="li-need">Not in the saved profile page \u2014 add from your LinkedIn data export (Settings \u2192 Get a copy of your data).</p>',v=e.experience.length?D(e.experience,B.experience,l=>`
      <div class="li-item">
        <div class="li-item__logo">${i(l.company.charAt(0))}</div>
        <div>
          <div class="li-item__title">${i(l.title)}</div>
          <div class="li-item__sub">${i(l.company)}</div>
          <div class="li-item__meta">${i(l.dates)}${l.location?" \xB7 "+i(l.location):""}</div>
          ${l.description?`<div class="li-item__desc">${O(l.description)}</div>`:""}
        </div>
      </div>`,"roles"):m,_=e.education.length?D(e.education,B.education,l=>`
      <div class="li-item">
        <div class="li-item__logo">${i(l.school.charAt(0))}</div>
        <div>
          <div class="li-item__title">${i(l.school)}</div>
          <div class="li-item__sub">${i(l.degree)}</div>
          <div class="li-item__meta">${i(l.dates)}</div>
        </div>
      </div>`,"schools"):m,c=e.skills.length?`<div class="li-skills">${D(e.skills,B.skills,l=>`<span class="li-skill">${i(l)}</span>`,"skills")}</div>`:m,y=e.about?`<div class="li-about">${O(e.about)}</div>`:m,k=e.languages.length?e.languages.map(l=>`
      <div class="li-lang">
        <span class="li-lang__name">${i(l.name)}</span>
        <span class="li-lang__level">${i(l.proficiency)}</span>
      </div>`).join(""):m,L=e.projects.length?D(e.projects,B.projects,l=>`
      <div class="li-item li-item--proj">
        <div>
          <div class="li-item__title">${i(l.title)}${l.url?` \xB7 <a href="${i(l.url)}" target="_blank" rel="noopener">link</a>`:""}</div>
          ${l.dates?`<div class="li-item__meta">${i(l.dates)}</div>`:""}
          <div class="li-item__desc">${O(l.description)}</div>
        </div>
      </div>`,"projects"):m;s.innerHTML=`
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
          ${o}
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
        ${g("About",y)}
        ${g("Experience",v)}
        ${g("Education",_)}
        ${g("Skills",c)}
        ${g("Projects",L)}
        ${g("Languages",k)}
      </div>
      <aside class="li-prof__rail">
        <div class="li-card li-side">
          <div class="li-side__title">Profile</div>
          <div class="li-side__row"><span>Current</span><strong>${i(a.current)}</strong></div>
          <div class="li-side__row"><span>Location</span><strong>${i(a.location.split(",")[0])}</strong></div>
          <div class="li-side__row"><span>Profile</span><a href="https://${i(a.url)}" target="_blank" rel="noopener">${i(a.url)}</a></div>
        </div>
      </aside>
    </div>`,s.querySelectorAll(".li-more").forEach(l=>{l.addEventListener("click",()=>{let $=l.previousElementSibling;if(!($ instanceof HTMLElement)||!$.classList.contains("li-more-wrap"))return;let A=$.classList.toggle("li-more-wrap--open");l.setAttribute("aria-expanded",String(A)),l.textContent=A?"Show less":l.dataset.label??"Show more"})})}var F={bell:'<svg viewBox="0 0 24 24"><path d="M18 8a6 6 0 1 0-12 0c0 7-3 9-3 9h18s-3-2-3-9M13.7 21a2 2 0 0 1-3.4 0"/></svg>',chat:'<svg viewBox="0 0 24 24"><path d="M21 11.5a8.4 8.4 0 0 1-9 8.4 9 9 0 0 1-4-1L3 20l1.1-4.9A8.4 8.4 0 0 1 12 3a8.4 8.4 0 0 1 9 8.5z"/></svg>'},z=[220,300,180,340,260,200,320,240,280];function ce(){let s=document.getElementById("pin-view");if(!s)return;let e=globalThis.PORTAL_DATA?.pinterest,a=e?.boards??[],n=e?.profile,d=a.map((r,o)=>{let g=z[o%z.length],m=r.cover?`<img class="pin-card__img" src="${i(r.cover)}" alt="${i(r.name)}" loading="lazy">`:`<div class="pin-card__ph" style="height:${g}px;background:${T(o)}">\u{1F4CC}</div>`;return`
    <a class="pin-card" href="https://www.pinterest.com/${i(n?.username||"diegonmarcos")}/${i(r.name.toLowerCase().replace(/[^a-z0-9]+/g,"-"))}/" target="_blank" rel="noopener">
      <div class="pin-card__media">
        ${m}
        <div class="pin-card__overlay"><span class="pin-card__save">${r.pins} pins</span></div>
      </div>
      <div class="pin-card__title">${i(r.name)}</div>
      ${r.desc?`<div class="pin-card__meta">${i(r.desc)}</div>`:`<div class="pin-card__meta">${r.pins} pins</div>`}
    </a>`}).join("");s.innerHTML=`
    <nav class="pin-nav">
      <div class="pin-nav__inner">
        <span class="pin-nav__logo">P</span>
        <a href="#" class="pin-nav__tab pin-nav__tab--active">Boards</a>
        <a href="https://www.pinterest.com/${i(n?.username||"diegonmarcos")}/" target="_blank" rel="noopener" class="pin-nav__tab">Profile</a>
        <div class="pin-nav__search"><input placeholder="Search for ideas"></div>
        <div class="pin-nav__icons">${F.bell}${F.chat}<span class="pin-nav__avatar" style="background:${u[3]}">D</span></div>
      </div>
    </nav>
    <div class="pin-head">@${i(n?.username||"diegonmarcos")} \xB7 <strong>${n?.boards??a.length}</strong> boards \xB7 <strong>${n?.pins??0}</strong> pins</div>
    <div class="pin-board">${d||'<p class="pin-empty">No boards.</p>'}</div>`}function de(){let s=document.getElementById("tid-view");if(!s)return;let e=globalThis.PORTAL_DATA?.tidal,a=e?.playlists??[],n=e?.profile,d=o=>{if(!o)return"";let g=Math.floor(o/3600),m=Math.round(o%3600/60);return g?`${g}h ${m}m`:`${m} min`},r=a.map((o,g)=>{let m=o.cover?`<img class="tid-card__img" src="${i(o.cover)}" alt="${i(o.name)}" loading="lazy">`:`<div class="tid-card__ph" style="background:${T(g)}">\u266B</div>`;return`
    <a class="tid-card" href="${i(o.url)}" target="_blank" rel="noopener">
      <div class="tid-card__cover">${m}<span class="tid-card__play">\u25B6</span></div>
      <div class="tid-card__name">${i(o.name)}</div>
      <div class="tid-card__meta">${o.tracks} tracks${o.duration_s?" \xB7 "+d(o.duration_s):""}</div>
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
      <div class="tid-grid">${r||'<p class="tid-empty">Playlists load once the Tidal profile ID is set.</p>'}</div>
    </div>`}var ge={run:"\u{1F3C3}",ride:"\u{1F6B4}",swim:"\u{1F3CA}"};function me(){let s=document.getElementById("str-view");if(!s)return;let e=globalThis.PORTAL_DATA?.strava,a=e?.activities??[],n=e?.profile,d=(o,g)=>g?`<div class="str-card__stat"><span class="str-card__stat-value">${i(g)}</span><span class="str-card__stat-label">${o}</span></div>`:"",r=a.map(o=>`
    <div class="str-card">
      <div class="str-card__header">
        <div class="str-card__icon">${ge[o.type]||"\u{1F3C1}"}</div>
        <div>
          <div class="str-card__title">${i(o.title)}</div>
          <div class="str-card__date">${i(o.date)}</div>
        </div>
      </div>
      <div class="str-card__stats">
        ${d("Distance",o.distance_km?`${o.distance_km} km`:"")}
        ${d("Time",o.duration||"")}
        ${d("Pace",o.pace||"")}
        ${d("Elevation",o.elevation_m?`${o.elevation_m} m`:"")}
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
      <div class="str-feed">${r||'<p class="str-empty">No activities yet. Strava data loads once the profile is exported.</p>'}</div>
    </div>`}function ve(){let s=document.getElementById("yt-view");if(!s)return;let e=globalThis.PORTAL_DATA?.youtube,a=e?.videos??[],n=e?.playlists??[],d=e?.profile,r=(v,_)=>{let c=v.thumbnail?`<img class="yt-card__img" src="${i(v.thumbnail)}" alt="${i(v.title)}" loading="lazy">`:`<div class="yt-card__ph" style="background:${T(_)}">\u25B6</div>`;return`
    <a class="yt-card" href="${i(v.url||"#")}" target="_blank" rel="noopener">
      <div class="yt-card__thumb">${c}${v.duration?`<span class="yt-card__duration">${i(v.duration)}</span>`:""}</div>
      <div class="yt-card__title">${i(v.title)}</div>
      ${v.channel?`<div class="yt-card__channel">${i(v.channel)}</div>`:""}
      <div class="yt-card__meta">${v.views!==void 0?`${v.views.toLocaleString()} views`:""}${v.views!==void 0&&v.date?" \xB7 ":""}${v.date?i(v.date):""}</div>
    </a>`},o=n.map(v=>`
    <section class="yt-shelf">
      <div class="yt-shelf__title">${i(v.name)}</div>
      <div class="yt-shelf__row">${v.videos.map((_,c)=>r(_,c)).join("")}</div>
    </section>`).join(""),g=a.length?`<div class="yt-grid">${a.map((v,_)=>r(v,_)).join("")}</div>`:"",m=n.length||a.length;s.innerHTML=`
    <nav class="yt-nav">
      <div class="yt-nav__inner">
        <span class="yt-nav__logo">YouTube</span>
        <div class="yt-nav__search"><input placeholder="Search"></div>
        <span class="yt-nav__user">@${i(d?.channel||"diegonmarcos")}</span>
      </div>
    </nav>
    <div class="yt-main">
      <header class="yt-head">
        <div>
          <div class="yt-head__title">${i(d?.channel||"diegonmarcos")}</div>
          <div class="yt-head__sub">${d?.subscribers??0} subscribers \xB7 ${d?.videos??a.length} videos</div>
        </div>
      </header>
      ${m?`${o}${g}`:'<p class="yt-empty">No videos or playlists yet. YouTube data loads once the channel is scraped.</p>'}
    </div>`}var C=(s=!1)=>{let e=s?"#c7cbb9":"#8fbf3f",a=s?"#c7cbb9":"#ef4a2b",n=s?"#e4e4d8":"#ffd400",d=s?"#9a9d90":"#1a1a12";return`<svg class="icq-flower" viewBox="0 0 16 16" aria-hidden="true">${Array.from({length:8},(o,g)=>{let m=g*45;return`<ellipse cx="8" cy="2.9" rx="1.9" ry="2.9" fill="${g===0?a:e}" stroke="${d}" stroke-width="0.5" transform="rotate(${m} 8 8)"/>`}).join("")}<circle cx="8" cy="8" r="2.4" fill="${n}" stroke="${d}" stroke-width="0.5"/></svg>`};var G={online:!1,away:!1,dnd:!1,offline:!0};function pe(){let s=document.getElementById("icq-view");if(!s)return;let e=globalThis.PORTAL_DATA||{},a=e.linkedin,n=e.instagram,d=a?.profile.name||"Diego Nepomuceno Marcos",r=n?.profile.username||"diegonmarcos",o=d.split(" ")[0],g=d.split(" ").slice(1).join(" "),m=(a?.profile.location||"Berlin, Germany").split(",").map(t=>t.trim()),v=m[0]||"",_=m[m.length-1]||"",c=a?.experience?.[0],y=a?.about||n?.profile.bio||"",k=a?.skills||[],L=a?.languages||[],l="184-042-518",$=["online","online","away","online","dnd","away","offline","offline","offline"],A=U.map((t,p)=>({...t,status:$[p%$.length]})),E=A.filter(t=>t.status!=="offline"),w=A.filter(t=>t.status==="offline"),M=t=>`<li class="icq-contact">${C(G[t.status])}<span>${i(t.name)}</span></li>`,h=(t,p)=>p?`<div class="icq-field"><span class="icq-field__k">${i(t)}</span><span class="icq-field__v">${i(p)}</span></div>`:"",q=[{id:"main",label:"Main",body:`
        ${h("Nickname",r)}
        ${h("First Name",o)}
        ${h("Last Name",g)}
        ${h("ICQ#",l)}
        ${h("Email","me@diegonmarcos.com")}
        ${h("Headline",a?.profile.headline||"")}`},{id:"home",label:"Home",body:`
        ${h("City",v)}
        ${h("Country",_)}
        ${h("Homepage",a?.profile.url||"linktree.diegonmarcos.com")}
        ${L.length?`<div class="icq-field"><span class="icq-field__k">Languages</span><span class="icq-field__v">${L.map(t=>i(t.name)).join(", ")}</span></div>`:""}`},{id:"work",label:"Work",body:c?`
        ${h("Company",c.company)}
        ${h("Title",c.title)}
        ${h("Since",c.dates)}
        ${h("Location",c.location||"")}`:'<p class="icq-empty">No work info.</p>'},{id:"about",label:"About",body:y?`<p class="icq-about">${i(y)}</p>`:'<p class="icq-empty">No about info.</p>'},{id:"interests",label:"Interests",body:k.length?`<div class="icq-interests">${k.map(t=>`<span class="icq-chip">${i(t)}</span>`).join("")}</div>`:'<p class="icq-empty">No interests listed.</p>'}],x='<span class="icq-win__btns"><i>_</i><i>\u25A1</i><i>\u2715</i></span>';s.innerHTML=`
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
        <div class="icq-list__foot">${C(G.online)}<span>Online</span><span class="icq-uin">#${l}</span></div>
      </div>

      <!-- User details window -->
      <div class="icq-win icq-win--details">
        <div class="icq-win__bar icq-win__bar--alt">${C("#ffffff")}<span class="icq-win__title">User Details \u2014 ${i(r)}</span>${x}</div>
        <div class="icq-detail">
          <div class="icq-detail__head">
            <div class="icq-detail__avatar">${i(V(d))}</div>
            <div>
              <div class="icq-detail__name">${i(d)}</div>
              <div class="icq-detail__nick">"${i(r)}" \xB7 #${l}</div>
            </div>
          </div>
          <div class="icq-tabs">
            ${q.map((t,p)=>`<button class="icq-tab${p===0?" is-active":""}" data-icq-pane="${t.id}">${t.label}</button>`).join("")}
          </div>
          ${q.map((t,p)=>`<div class="icq-pane${p===0?" is-active":""}" data-icq-pane="${t.id}">${t.body}</div>`).join("")}
        </div>
      </div>
    </div>`,s.querySelectorAll(".icq-tab").forEach(t=>{t.addEventListener("click",()=>{let p=t.dataset.icqPane;s.querySelectorAll(".icq-tab").forEach(f=>f.classList.toggle("is-active",f===t)),s.querySelectorAll(".icq-pane").forEach(f=>f.classList.toggle("is-active",f.dataset.icqPane===p))})})}function ue(){let s=document.getElementById("me-view");if(!s)return;let e=globalThis.PORTAL_DATA||{},a=e.instagram,n=e.linkedin,d=n?.profile.name||a?.profile.name||"Diego Nepomuceno Marcos",r=n?.profile.headline||"",o=n?.profile.location||"",g=a?.profile.bio||"",m=a?.posts[0]?.media,v=globalThis.PORTAL_DATA?.tidal,_=[{theme:"linkedin",label:"LinkedIn",meta:n?`${n.profile.connections} connections \xB7 ${n.profile.followers.toLocaleString()} followers`:"profile",color:"#0a66c2"},{theme:"instagram",label:"Instagram",meta:a?`${a.profile.followers.toLocaleString()} followers \xB7 ${a.profile.posts} post${a.profile.posts===1?"":"s"}`:"profile",color:"#dc2743"},{theme:"pinterest",label:"Pinterest",meta:"boards & pins",color:"#e60023"},{theme:"tidal",label:"TIDAL",meta:v?`${v.profile.playlists} playlists`:"playlists",color:"#00ffff"},{theme:"strava",label:"Strava",meta:"activities & routes",color:"#fc5200"},{theme:"youtube",label:"YouTube",meta:"playlists & videos",color:"#ff0000"},{theme:"orkut",label:"Orkut",meta:"the classic profile",color:"#e9008c"},{theme:"icq",label:"ICQ",meta:"retro IM \xB7 user details",color:"#0a870a"}];s.innerHTML=`
    <div class="me-hub">
      <div class="me-card">
        ${m?`<img class="me-avatar" src="${m}" alt="${i(d)}">`:'<div class="me-avatar"></div>'}
        <h1 class="me-name">${i(d)}</h1>
        ${r?`<p class="me-headline">${i(r)}</p>`:""}
        ${o?`<p class="me-loc">${i(o)}</p>`:""}
        ${g?`<p class="me-bio">${i(g)}</p>`:""}
      </div>
      <div class="me-links">
        ${_.map(c=>`
          <button class="me-link" data-goto="${c.theme}" style="--accent:${c.color}">
            <span class="me-link__dot"></span>
            <span class="me-link__body">
              <span class="me-link__name">${c.label}</span>
              <span class="me-link__meta">${i(c.meta)}</span>
            </span>
            <span class="me-link__arrow">\u2192</span>
          </button>`).join("")}
      </div>
    </div>`,s.querySelectorAll(".me-link").forEach(c=>c.addEventListener("click",()=>Q(c.dataset.goto)))}var _e=["myprofile","orkut","instagram","linkedin","pinterest","tidal","strava","youtube","icq"];function he(s){return s==="myprofile"?"./":`${s}.html`}function j(s){document.documentElement.setAttribute("data-theme",s),document.querySelectorAll("[data-theme-btn]").forEach(e=>{e.classList.toggle("is-active",e.dataset.themeBtn===s)}),window.scrollTo(0,0)}function Q(s,e=!0){j(s),e&&history.pushState({theme:s},"",he(s))}function fe(){let s=document.documentElement.dataset.theme||"myprofile";j(_e.includes(s)?s:"myprofile"),document.querySelectorAll("[data-theme-btn]").forEach(e=>{e.addEventListener("click",()=>Q(e.dataset.themeBtn))}),window.addEventListener("popstate",e=>{let a=e.state?.theme||"myprofile";j(a)})}function Y(){ee(),ae(),se(),ie(),te(),le(),re(),ce(),de(),me(),ve(),pe(),ue(),fe(),setTimeout(()=>{document.querySelectorAll(".trust-meter__fill").forEach(s=>{s.style.transition="width 1.2s cubic-bezier(0.16, 1, 0.3, 1)"})},300)}async function W(){let s=document.getElementById("theme-switch"),e=[...document.querySelectorAll("[data-theme-btn]")],a=document.documentElement.dataset.theme??"";e.find(_=>_.dataset.themeBtn!==a)?.click();let d=document.documentElement.dataset.theme!==a;d&&a&&j(a);let r="none",o=[],g={};try{r=navigator.serviceWorker?.controller?.scriptURL??"none",o=(await navigator.serviceWorker?.getRegistrations?.()??[]).map(c=>[c.installing&&"installing",c.waiting&&"waiting",c.active&&`active:${c.active.scriptURL}`].filter(Boolean).join(","));for(let c of await caches.keys())g[c]=(await(await caches.open(c)).keys()).length}catch{}let m="n/a";if(s){let _=s.getBoundingClientRect(),c=document.elementFromPoint(_.left+_.width/2,_.top+_.height/2);m=`<${c?.tagName}.${(c?.className||"").toString().trim()}> inNav:${s.contains(c)}`}let v={url:location.href,theme:document.documentElement.dataset.theme,navButtons:e.length,navWired:d,swController:r,swRegistrations:o,caches:g,navHitTest:m,ua:navigator.userAgent};return console.info("[mySocials debug]",JSON.stringify(v)),v}window.__debugReport=W;document.readyState==="loading"?document.addEventListener("DOMContentLoaded",Y):Y();(/\bdebug\b/.test(location.search)||/\bdebug\b/.test(location.hash))&&setTimeout(()=>{W()},500);})();
