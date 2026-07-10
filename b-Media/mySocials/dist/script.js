(()=>{var n=["#e8508a","#4a8aff","#3abb78","#8a6aff","#ff8a4a","#4ac0ff","#ff4a8a","#50c878","#ffa040","#8080ff","#ff6060","#40c0c0","#c060ff","#ff9060","#60b0ff"],f=[{name:"Ana Silva",initial:"A",color:n[0]},{name:"Bruno Costa",initial:"B",color:n[1]},{name:"Carla Souza",initial:"C",color:n[2]},{name:"Daniel Lima",initial:"D",color:n[3]},{name:"Elena Torres",initial:"E",color:n[4]},{name:"Felipe Gomes",initial:"F",color:n[5]},{name:"Gabi Santos",initial:"G",color:n[6]},{name:"Hugo Pereira",initial:"H",color:n[7]},{name:"Isa Oliveira",initial:"I",color:n[8]}],y=[{author:"Ana Silva",initial:"A",color:n[0],text:"Hey Diego! Miss our coding sessions at the uni. We should catch up soon! Saudades demais!",time:"2 hours ago"},{author:"Bruno Costa",initial:"B",color:n[1],text:"Cara, vi que voce ta morando em Berlin agora! Que top! Vamos marcar uma call?",time:"5 hours ago"},{author:"Carla Souza",initial:"C",color:n[2],text:"Happy birthday atrasado!! Hope you had an amazing day. Your projects are looking incredible btw",time:"yesterday"},{author:"Felipe Gomes",initial:"F",color:n[5],text:"Mano, teu MyMaps ta INSANO. Lembra quando a gente fazia mapa no paint? kkkk Evoluimos!",time:"2 days ago"},{author:"Gabi Santos",initial:"G",color:n[6],text:'Diego!! Join our community "Linux Users Brazil" please! We need more devs like you there',time:"3 days ago"},{author:"Hugo Pereira",initial:"H",color:n[7],text:"Saw your Strava activities... beast mode! When did you start cycling?",time:"4 days ago"},{author:"Isa Oliveira",initial:"I",color:n[8],text:"Testimonial request sent! You were the best partner for the compiler project, forever grateful",time:"1 week ago"}],$=[{name:"Eu odeio acordar cedo",members:1247893,emoji:"\u{1F634}",color:"#8a6aff"},{name:"NixOS Brasil",members:3420,emoji:"\u2744\uFE0F",color:"#4a8aff"},{name:"Linux Users",members:89340,emoji:"\u{1F427}",color:"#3abb78"},{name:"Cycling Addicts",members:45200,emoji:"\u{1F6B4}",color:"#ff8a4a"},{name:"Self-hosted Everything",members:12800,emoji:"\u{1F5A5}\uFE0F",color:"#4ac0ff"},{name:"Saudades do Orkut",members:892340,emoji:"\u{1F62D}",color:"#e8508a"},{name:"Maps & Geography",members:23100,emoji:"\u{1F30D}",color:"#50c878"},{name:"Berlin Brasileiros",members:8900,emoji:"\u{1F1E7}\u{1F1F7}",color:"#ffa040"},{name:"Coffee > Sleep",members:456e3,emoji:"\u2615",color:"#c08040"}],E=[{author:"Ana Silva",date:"Dec 2023",text:"Diego is one of those rare people who can debug your code AND your life. An incredible friend, always there when you need help. 10/10 would add as friend again."},{author:"Bruno Costa",date:"Nov 2023",text:"Known Diego since university. The guy literally automated everything in his life with NixOS. Respect the dedication. Best engineer I know, no cap."},{author:"Carla Souza",date:"Oct 2023",text:"The most creative developer I have ever worked with. His projects are not just functional, they are beautiful. An artist disguised as an engineer."},{author:"Elena Torres",date:"Sep 2023",text:"Diego helped me set up my entire self-hosted infrastructure. Refused to let me use any cloud subscription. A true freedom fighter of the internet!"}],g=["#1a2840","#2a1840","#182838","#281828","#1a3028","#302818","#201838","#283018","#381828"];function L(){let a=document.getElementById("friends-grid");a&&f.forEach(e=>{let i=document.createElement("div");i.className="friend-cell",i.innerHTML=`
      <div class="friend-cell__avatar">
        <div class="friend-cell__avatar-inner" style="background:${e.color}">${e.initial}</div>
      </div>
      <span class="friend-cell__name">${e.name.split(" ")[0]}</span>
    `,a.appendChild(i)})}function A(){let a=document.getElementById("scraps-list");a&&y.forEach(e=>{let i=document.createElement("div");i.className="scrap",i.innerHTML=`
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
    `,a.appendChild(i)})}function C(){let a=document.getElementById("communities-grid");a&&$.forEach(e=>{let i=document.createElement("a");i.href="#",i.className="community-card";let t=e.members>=1e6?`${(e.members/1e6).toFixed(1)}M members`:e.members>=1e3?`${(e.members/1e3).toFixed(0)}K members`:`${e.members} members`;i.innerHTML=`
      <div class="community-card__icon" style="background:${e.color}20;color:${e.color}">${e.emoji}</div>
      <div class="community-card__body">
        <span class="community-card__name">${e.name}</span>
        <span class="community-card__members">${t}</span>
      </div>
    `,a.appendChild(i)})}function I(){let a=document.getElementById("testimonials-list");a&&E.forEach(e=>{let i=document.createElement("div");i.className="testimonial",i.innerHTML=`
      <div class="testimonial__header">
        <span class="testimonial__author">${e.author}</span>
        <span class="testimonial__date">${e.date}</span>
      </div>
      <p class="testimonial__text">${e.text}</p>
    `,a.appendChild(i)})}function H(){let a=document.getElementById("photo-grid");if(a)for(let e=0;e<9;e++){let i=document.createElement("div");i.className="photo-cell",i.innerHTML=`<div class="photo-cell__inner" style="background:${g[e%g.length]}"></div>`,a.appendChild(i)}}var v={heart:'<svg viewBox="0 0 24 24"><path d="M20.8 4.6a5.5 5.5 0 0 0-7.8 0L12 5.6l-1-1a5.5 5.5 0 0 0-7.8 7.8l1 1L12 21l7.8-7.6 1-1a5.5 5.5 0 0 0 0-7.8z"/></svg>',comment:'<svg viewBox="0 0 24 24"><path d="M21 11.5a8.4 8.4 0 0 1-9 8.4 9 9 0 0 1-4-1L3 20l1.1-4.9A8.4 8.4 0 0 1 12 3a8.4 8.4 0 0 1 9 8.5z"/></svg>',share:'<svg viewBox="0 0 24 24"><line x1="22" y1="2" x2="11" y2="13"/><polygon points="22 2 15 22 11 13 2 9 22 2"/></svg>',save:'<svg viewBox="0 0 24 24"><path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"/></svg>',home:'<svg viewBox="0 0 24 24"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/></svg>',grid:'<svg viewBox="0 0 24 24"><rect x="3" y="3" width="18" height="18" rx="2"/><line x1="9" y1="3" x2="9" y2="21"/><line x1="15" y1="3" x2="15" y2="21"/><line x1="3" y1="9" x2="21" y2="9"/><line x1="3" y1="15" x2="21" y2="15"/></svg>'};function M(a){let e=g[a%g.length],i=n[a%n.length];return`linear-gradient(135deg, ${e}, ${i})`}function r(a){return a.replace(/[&<>"]/g,e=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"})[e])}function j(a){let e=0;for(let i=0;i<a.length;i++)e=e*31+a.charCodeAt(i)>>>0;return n[e%n.length]}function F(){let a=document.getElementById("ig-view");if(!a)return;let e=globalThis.PORTAL_DATA?.instagram;if(!e){a.innerHTML='<p class="ig-empty">Instagram data not loaded.</p>';return}let i=e.profile,t=s=>s.toLocaleString(),l=e.following.slice(0,24).map(s=>`
    <div class="ig-hl">
      <div class="ig-hl__ring"><div class="ig-hl__avatar" style="background:${j(s)}">${r(s.charAt(0).toUpperCase())}</div></div>
      <span class="ig-hl__name">${r(s)}</span>
    </div>`).join(""),o=e.posts.length?e.posts.map(s=>`<a class="ig-tile" href="#"><img src="${s.media}" alt="post"></a>`).join(""):'<p class="ig-empty">No posts yet.</p>',c=(s,_)=>`
    <a class="ig-tile" href="${r(s.url)}" target="_blank" rel="noopener" style="background:${M(s.url.length)}">
      <span class="ig-tile__cap">${r(s.caption||s.url.replace("https://www.instagram.com/",""))}</span>
      <span class="ig-tile__badge">${_}</span>
    </a>`,p=e.saved.length?e.saved.map(s=>c(s,"\u{1F516}")).join(""):'<p class="ig-empty">Nothing saved.</p>',u=e.liked.length?e.liked.map(s=>c(s,"\u2764\uFE0F")).join(""):'<p class="ig-empty">No likes.</p>',T=e.comments.length?e.comments.map(s=>`
      <div class="ig-comment">
        <div class="ig-comment__text">${r(s.text)}</div>
        <div class="ig-comment__meta">${s.owner?"@"+r(s.owner)+" \xB7 ":""}${r(s.time||"")}</div>
      </div>`).join(""):'<p class="ig-empty">No comments.</p>',h=s=>`<div class="ig-grid">${s}</div>`,B=e.posts[0]?.media?`<img class="ig-head__avatar" src="${e.posts[0].media}" alt="${r(i.username)}">`:'<div class="ig-head__avatar"></div>';a.innerHTML=`
    <nav class="ig-nav">
      <div class="ig-nav__inner">
        <a href="#" class="ig-nav__logo">My Socials</a>
        <div class="ig-nav__search"><input placeholder="Search"></div>
        <div class="ig-nav__icons">${v.home}${v.heart}${v.comment}${v.share}</div>
      </div>
    </nav>
    <div class="ig-page">
      <header class="ig-head">
        ${B}
        <div class="ig-head__body">
          <div class="ig-head__top">
            <span class="ig-head__user">${r(i.username)}</span>
            <span class="ig-head__btn">Follow</span>
            <span class="ig-head__btn">Message</span>
          </div>
          <div class="ig-head__stats">
            <span><strong>${t(i.posts)}</strong> posts</span>
            <span><strong>${t(i.followers)}</strong> followers</span>
            <span><strong>${t(i.following)}</strong> following</span>
          </div>
          <div class="ig-head__name">${r(i.name)}</div>
          <div class="ig-head__bio">${r(i.bio)}</div>
        </div>
      </header>

      <div class="ig-highlights">${l}</div>

      <div class="ig-tabs">
        <div class="ig-tab is-active" data-pane="posts">${v.grid} Posts</div>
        <div class="ig-tab" data-pane="saved">${v.save} Saved ${i.posts,""}(${t(e.saved.length)})</div>
        <div class="ig-tab" data-pane="liked">${v.heart} Liked (${t(e.liked.length)})</div>
        <div class="ig-tab" data-pane="comments">${v.comment} Comments (${t(e.comments.length)})</div>
      </div>

      <div class="ig-pane is-active" data-pane="posts">${h(o)}</div>
      <div class="ig-pane" data-pane="saved">${h(p)}</div>
      <div class="ig-pane" data-pane="liked">${h(u)}</div>
      <div class="ig-pane" data-pane="comments"><div class="ig-comments">${T}</div></div>
    </div>`,a.querySelectorAll(".ig-tab").forEach(s=>{s.addEventListener("click",()=>{let _=s.dataset.pane;a.querySelectorAll(".ig-tab").forEach(m=>m.classList.toggle("is-active",m===s)),a.querySelectorAll(".ig-pane").forEach(m=>m.classList.toggle("is-active",m.dataset.pane===_))})})}var d={home:'<svg viewBox="0 0 24 24"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/></svg>',net:'<svg viewBox="0 0 24 24"><circle cx="9" cy="7" r="4"/><path d="M17 11a4 4 0 1 0-3-6.6M1 21v-2a4 4 0 0 1 4-4h8a4 4 0 0 1 4 4v2M17 15a4 4 0 0 1 4 4v2"/></svg>',jobs:'<svg viewBox="0 0 24 24"><rect x="2" y="7" width="20" height="14" rx="2"/><path d="M8 7V5a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"/></svg>',msg:'<svg viewBox="0 0 24 24"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>',bell:'<svg viewBox="0 0 24 24"><path d="M18 8a6 6 0 1 0-12 0c0 7-3 9-3 9h18s-3-2-3-9M13.7 21a2 2 0 0 1-3.4 0"/></svg>',like:'<svg viewBox="0 0 24 24"><path d="M14 9V5a3 3 0 0 0-6 0v4H5a2 2 0 0 0-2 2l1 7a2 2 0 0 0 2 2h9a2 2 0 0 0 2-2l1-7a2 2 0 0 0-2-2z"/></svg>',comment:'<svg viewBox="0 0 24 24"><path d="M21 11.5a8.4 8.4 0 0 1-9 8.4 9 9 0 0 1-4-1L3 20l1.1-4.9A8.4 8.4 0 0 1 12 3a8.4 8.4 0 0 1 9 8.5z"/></svg>',repost:'<svg viewBox="0 0 24 24"><polyline points="17 1 21 5 17 9"/><path d="M3 11V9a4 4 0 0 1 4-4h14M7 23l-4-4 4-4M21 13v2a4 4 0 0 1-4 4H3"/></svg>',send:'<svg viewBox="0 0 24 24"><line x1="22" y1="2" x2="11" y2="13"/><polygon points="22 2 15 22 11 13 2 9 22 2"/></svg>'};function N(){let a=document.getElementById("li-view");if(!a)return;let e=(o,c)=>`<div class="li-nav__item">${o}<span>${c}</span></div>`,t=[...E,...y.map(o=>({author:o.author,date:o.time,text:o.text}))].map((o,c)=>{let p=f[c%f.length],u=12+c*91%400;return`
    <article class="li-card li-post">
      <div class="li-post__head">
        <div class="li-post__avatar" style="background:${p.color}">${o.author.charAt(0)}</div>
        <div>
          <div class="li-post__name">${o.author}</div>
          <div class="li-post__headline">Software Engineer \xB7 ${o.date}</div>
        </div>
      </div>
      <p class="li-post__text">${o.text}</p>
      <div class="li-post__stats"><span>\u{1F44D}\u2764\uFE0F ${u}</span><span>\xB7</span><span>${2+c%40} comments</span></div>
      <div class="li-post__actions">
        <div class="li-act">${d.like}<span>Like</span></div>
        <div class="li-act">${d.comment}<span>Comment</span></div>
        <div class="li-act">${d.repost}<span>Repost</span></div>
        <div class="li-act">${d.send}<span>Send</span></div>
      </div>
    </article>`}).join(""),l=$.slice(0,5).map(o=>`
    <div class="li-newsitem">
      <div class="li-newsitem__head">${o.name}</div>
      <div class="li-newsitem__meta">${(o.members/1e3).toFixed(0)}K followers</div>
    </div>`).join("");a.innerHTML=`
    <nav class="li-nav">
      <div class="li-nav__inner">
        <span class="li-nav__logo">in</span>
        <div class="li-nav__search"><input placeholder="Search"></div>
        <div class="li-nav__items">
          ${e(d.home,"Home")}
          ${e(d.net,"Network")}
          ${e(d.jobs,"Jobs")}
          ${e(d.msg,"Messaging")}
          ${e(d.bell,"Notifications")}
        </div>
      </div>
    </nav>
    <div class="li-main">
      <div class="li-rail-left">
        <div class="li-card li-profile">
          <div class="li-profile__banner"></div>
          <div class="li-profile__avatar" style="background:${n[3]}">D</div>
          <div class="li-profile__body">
            <div class="li-profile__name">Diego N. Marcos</div>
            <div class="li-profile__tag">Software Engineer & Explorer \xB7 Berlin</div>
            <div class="li-profile__stats">
              <div class="li-profile__stat"><span>Connections</span><strong>142</strong></div>
              <div class="li-profile__stat"><span>Profile views</span><strong>95</strong></div>
            </div>
          </div>
        </div>
      </div>
      <div class="li-feed">
        <div class="li-card li-startpost">
          <div class="li-startpost__avatar" style="background:${n[3]}">D</div>
          <button>Start a post</button>
        </div>
        ${t}
      </div>
      <div class="li-rail-right">
        <div class="li-card li-news">
          <div class="li-news__title">My Socials News</div>
          ${l}
        </div>
      </div>
    </div>`}var b={bell:'<svg viewBox="0 0 24 24"><path d="M18 8a6 6 0 1 0-12 0c0 7-3 9-3 9h18s-3-2-3-9M13.7 21a2 2 0 0 1-3.4 0"/></svg>',chat:'<svg viewBox="0 0 24 24"><path d="M21 11.5a8.4 8.4 0 0 1-9 8.4 9 9 0 0 1-4-1L3 20l1.1-4.9A8.4 8.4 0 0 1 12 3a8.4 8.4 0 0 1 9 8.5z"/></svg>'},w=[220,300,180,340,260,200,320,240,280];function D(){let a=document.getElementById("pin-view");if(!a)return;let i=[...$.map((t,l)=>({title:t.name,emoji:t.emoji,color:t.color,author:t.name,grad:l})),...y.map((t,l)=>({title:t.text.slice(0,60),emoji:"\u{1F4CC}",color:t.color,author:t.author,grad:l+3}))].map((t,l)=>`
    <div class="pin-card">
      <div class="pin-card__media" style="height:${w[l%w.length]}px;background:${M(t.grad)}">
        ${t.emoji}
        <div class="pin-card__overlay"><span class="pin-card__save">Save</span></div>
      </div>
      <div class="pin-card__title">${t.title}</div>
      <div class="pin-card__meta">
        <span class="pin-card__avatar" style="background:${t.color}">${t.author.charAt(0)}</span>
        <span>${t.author.split(" ")[0]}</span>
      </div>
    </div>`).join("");a.innerHTML=`
    <nav class="pin-nav">
      <div class="pin-nav__inner">
        <span class="pin-nav__logo">P</span>
        <a href="#" class="pin-nav__tab pin-nav__tab--active">Home</a>
        <a href="#" class="pin-nav__tab">Explore</a>
        <div class="pin-nav__search"><input placeholder="Search for ideas"></div>
        <div class="pin-nav__icons">${b.bell}${b.chat}<span class="pin-nav__avatar" style="background:${n[3]}">D</span></div>
      </div>
    </nav>
    <div class="pin-board">${i}</div>`}var k="mySocials.theme";function x(a){document.documentElement.setAttribute("data-theme",a);try{localStorage.setItem(k,a)}catch{}document.querySelectorAll("[data-theme-btn]").forEach(e=>{e.classList.toggle("is-active",e.dataset.themeBtn===a)}),window.scrollTo(0,0)}function O(){let a=localStorage.getItem(k)||"orkut";x(["orkut","instagram","linkedin","pinterest"].includes(a)?a:"orkut"),document.querySelectorAll("[data-theme-btn]").forEach(e=>{e.addEventListener("click",()=>x(e.dataset.themeBtn))})}function S(){L(),A(),C(),I(),H(),F(),N(),D(),O(),setTimeout(()=>{document.querySelectorAll(".trust-meter__fill").forEach(a=>{a.style.transition="width 1.2s cubic-bezier(0.16, 1, 0.3, 1)"})},300)}document.readyState==="loading"?document.addEventListener("DOMContentLoaded",S):S();})();
