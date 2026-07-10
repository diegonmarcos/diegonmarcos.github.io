(()=>{var s=["#e8508a","#4a8aff","#3abb78","#8a6aff","#ff8a4a","#4ac0ff","#ff4a8a","#50c878","#ffa040","#8080ff","#ff6060","#40c0c0","#c060ff","#ff9060","#60b0ff"],d=[{name:"Ana Silva",initial:"A",color:s[0]},{name:"Bruno Costa",initial:"B",color:s[1]},{name:"Carla Souza",initial:"C",color:s[2]},{name:"Daniel Lima",initial:"D",color:s[3]},{name:"Elena Torres",initial:"E",color:s[4]},{name:"Felipe Gomes",initial:"F",color:s[5]},{name:"Gabi Santos",initial:"G",color:s[6]},{name:"Hugo Pereira",initial:"H",color:s[7]},{name:"Isa Oliveira",initial:"I",color:s[8]}],m=[{author:"Ana Silva",initial:"A",color:s[0],text:"Hey Diego! Miss our coding sessions at the uni. We should catch up soon! Saudades demais!",time:"2 hours ago"},{author:"Bruno Costa",initial:"B",color:s[1],text:"Cara, vi que voce ta morando em Berlin agora! Que top! Vamos marcar uma call?",time:"5 hours ago"},{author:"Carla Souza",initial:"C",color:s[2],text:"Happy birthday atrasado!! Hope you had an amazing day. Your projects are looking incredible btw",time:"yesterday"},{author:"Felipe Gomes",initial:"F",color:s[5],text:"Mano, teu MyMaps ta INSANO. Lembra quando a gente fazia mapa no paint? kkkk Evoluimos!",time:"2 days ago"},{author:"Gabi Santos",initial:"G",color:s[6],text:'Diego!! Join our community "Linux Users Brazil" please! We need more devs like you there',time:"3 days ago"},{author:"Hugo Pereira",initial:"H",color:s[7],text:"Saw your Strava activities... beast mode! When did you start cycling?",time:"4 days ago"},{author:"Isa Oliveira",initial:"I",color:s[8],text:"Testimonial request sent! You were the best partner for the compiler project, forever grateful",time:"1 week ago"}],u=[{name:"Eu odeio acordar cedo",members:1247893,emoji:"\u{1F634}",color:"#8a6aff"},{name:"NixOS Brasil",members:3420,emoji:"\u2744\uFE0F",color:"#4a8aff"},{name:"Linux Users",members:89340,emoji:"\u{1F427}",color:"#3abb78"},{name:"Cycling Addicts",members:45200,emoji:"\u{1F6B4}",color:"#ff8a4a"},{name:"Self-hosted Everything",members:12800,emoji:"\u{1F5A5}\uFE0F",color:"#4ac0ff"},{name:"Saudades do Orkut",members:892340,emoji:"\u{1F62D}",color:"#e8508a"},{name:"Maps & Geography",members:23100,emoji:"\u{1F30D}",color:"#50c878"},{name:"Berlin Brasileiros",members:8900,emoji:"\u{1F1E7}\u{1F1F7}",color:"#ffa040"},{name:"Coffee > Sleep",members:456e3,emoji:"\u2615",color:"#c08040"}],_=[{author:"Ana Silva",date:"Dec 2023",text:"Diego is one of those rare people who can debug your code AND your life. An incredible friend, always there when you need help. 10/10 would add as friend again."},{author:"Bruno Costa",date:"Nov 2023",text:"Known Diego since university. The guy literally automated everything in his life with NixOS. Respect the dedication. Best engineer I know, no cap."},{author:"Carla Souza",date:"Oct 2023",text:"The most creative developer I have ever worked with. His projects are not just functional, they are beautiful. An artist disguised as an engineer."},{author:"Elena Torres",date:"Sep 2023",text:"Diego helped me set up my entire self-hosted infrastructure. Refused to let me use any cloud subscription. A true freedom fighter of the internet!"}],v=["#1a2840","#2a1840","#182838","#281828","#1a3028","#302818","#201838","#283018","#381828"];function $(){let a=document.getElementById("friends-grid");a&&d.forEach(e=>{let i=document.createElement("div");i.className="friend-cell",i.innerHTML=`
      <div class="friend-cell__avatar">
        <div class="friend-cell__avatar-inner" style="background:${e.color}">${e.initial}</div>
      </div>
      <span class="friend-cell__name">${e.name.split(" ")[0]}</span>
    `,a.appendChild(i)})}function b(){let a=document.getElementById("scraps-list");a&&m.forEach(e=>{let i=document.createElement("div");i.className="scrap",i.innerHTML=`
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
    `,a.appendChild(i)})}function w(){let a=document.getElementById("communities-grid");a&&u.forEach(e=>{let i=document.createElement("a");i.href="#",i.className="community-card";let c=e.members>=1e6?`${(e.members/1e6).toFixed(1)}M members`:e.members>=1e3?`${(e.members/1e3).toFixed(0)}K members`:`${e.members} members`;i.innerHTML=`
      <div class="community-card__icon" style="background:${e.color}20;color:${e.color}">${e.emoji}</div>
      <div class="community-card__body">
        <span class="community-card__name">${e.name}</span>
        <span class="community-card__members">${c}</span>
      </div>
    `,a.appendChild(i)})}function S(){let a=document.getElementById("testimonials-list");a&&_.forEach(e=>{let i=document.createElement("div");i.className="testimonial",i.innerHTML=`
      <div class="testimonial__header">
        <span class="testimonial__author">${e.author}</span>
        <span class="testimonial__date">${e.date}</span>
      </div>
      <p class="testimonial__text">${e.text}</p>
    `,a.appendChild(i)})}function x(){let a=document.getElementById("photo-grid");if(a)for(let e=0;e<9;e++){let i=document.createElement("div");i.className="photo-cell",i.innerHTML=`<div class="photo-cell__inner" style="background:${v[e%v.length]}"></div>`,a.appendChild(i)}}var l={heart:'<svg viewBox="0 0 24 24"><path d="M20.8 4.6a5.5 5.5 0 0 0-7.8 0L12 5.6l-1-1a5.5 5.5 0 0 0-7.8 7.8l1 1L12 21l7.8-7.6 1-1a5.5 5.5 0 0 0 0-7.8z"/></svg>',comment:'<svg viewBox="0 0 24 24"><path d="M21 11.5a8.4 8.4 0 0 1-9 8.4 9 9 0 0 1-4-1L3 20l1.1-4.9A8.4 8.4 0 0 1 12 3a8.4 8.4 0 0 1 9 8.5z"/></svg>',share:'<svg viewBox="0 0 24 24"><line x1="22" y1="2" x2="11" y2="13"/><polygon points="22 2 15 22 11 13 2 9 22 2"/></svg>',save:'<svg viewBox="0 0 24 24"><path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"/></svg>',home:'<svg viewBox="0 0 24 24"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/></svg>'};function E(a){let e=v[a%v.length],i=s[a%s.length];return`linear-gradient(135deg, ${e}, ${i})`}function M(){let a=document.getElementById("ig-view");if(!a)return;let e=d.map(t=>`
    <div class="ig-story">
      <div class="ig-story__ring"><div class="ig-story__avatar" style="background:${t.color}">${t.initial}</div></div>
      <span class="ig-story__name">${t.name.split(" ")[0].toLowerCase()}</span>
    </div>`).join(""),i=m.map((t,o)=>{let r=40+o*137%900;return`
    <article class="ig-post">
      <div class="ig-post__head">
        <div class="ig-post__avatar" style="background:${t.color}">${t.initial}</div>
        <span class="ig-post__user">${t.author.split(" ")[0].toLowerCase()}_${t.initial.toLowerCase()}</span>
        <span class="ig-post__time">${t.time}</span>
        <span class="ig-post__more">\xB7\xB7\xB7</span>
      </div>
      <div class="ig-post__image" style="background:${E(o)}">\u{1F4F7}</div>
      <div class="ig-post__actions">
        ${l.heart}${l.comment}${l.share}<span class="ig-post__save">${l.save}</span>
      </div>
      <div class="ig-post__likes">${r.toLocaleString()} likes</div>
      <p class="ig-post__caption"><span class="ig-post__user">${t.author.split(" ")[0].toLowerCase()}_${t.initial.toLowerCase()}</span>${t.text}</p>
      <div class="ig-post__comments">View all ${2+o%30} comments</div>
      <div class="ig-post__addcomment"><input placeholder="Add a comment..."><button>Post</button></div>
    </article>`}).join(""),c=d.slice(0,5).map(t=>`
    <div class="ig-sugg">
      <div class="ig-sugg__avatar" style="background:${t.color}">${t.initial}</div>
      <div>
        <div class="ig-sugg__name">${t.name.split(" ")[0].toLowerCase()}_${t.initial.toLowerCase()}</div>
        <div class="ig-sugg__meta">Followed by others</div>
      </div>
      <span class="ig-sugg__follow">Follow</span>
    </div>`).join("");a.innerHTML=`
    <nav class="ig-nav">
      <div class="ig-nav__inner">
        <a href="#" class="ig-nav__logo">My Socials</a>
        <div class="ig-nav__search"><input placeholder="Search"></div>
        <div class="ig-nav__icons">${l.home}${l.heart}${l.comment}${l.share}</div>
      </div>
    </nav>
    <div class="ig-main">
      <div class="ig-feed">
        <div class="ig-stories">${e}</div>
        ${i}
      </div>
      <aside class="ig-aside">
        <div class="ig-me">
          <div class="ig-me__avatar" style="background:${s[3]}">D</div>
          <div>
            <div class="ig-me__name">diego_marcos</div>
            <div class="ig-me__sub">Diego N. Marcos</div>
          </div>
          <span class="ig-me__switch">Switch</span>
        </div>
        <div class="ig-suggest__head"><span>Suggestions for you</span><span>See All</span></div>
        ${c}
      </aside>
    </div>`}var n={home:'<svg viewBox="0 0 24 24"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/></svg>',net:'<svg viewBox="0 0 24 24"><circle cx="9" cy="7" r="4"/><path d="M17 11a4 4 0 1 0-3-6.6M1 21v-2a4 4 0 0 1 4-4h8a4 4 0 0 1 4 4v2M17 15a4 4 0 0 1 4 4v2"/></svg>',jobs:'<svg viewBox="0 0 24 24"><rect x="2" y="7" width="20" height="14" rx="2"/><path d="M8 7V5a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"/></svg>',msg:'<svg viewBox="0 0 24 24"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>',bell:'<svg viewBox="0 0 24 24"><path d="M18 8a6 6 0 1 0-12 0c0 7-3 9-3 9h18s-3-2-3-9M13.7 21a2 2 0 0 1-3.4 0"/></svg>',like:'<svg viewBox="0 0 24 24"><path d="M14 9V5a3 3 0 0 0-6 0v4H5a2 2 0 0 0-2 2l1 7a2 2 0 0 0 2 2h9a2 2 0 0 0 2-2l1-7a2 2 0 0 0-2-2z"/></svg>',comment:'<svg viewBox="0 0 24 24"><path d="M21 11.5a8.4 8.4 0 0 1-9 8.4 9 9 0 0 1-4-1L3 20l1.1-4.9A8.4 8.4 0 0 1 12 3a8.4 8.4 0 0 1 9 8.5z"/></svg>',repost:'<svg viewBox="0 0 24 24"><polyline points="17 1 21 5 17 9"/><path d="M3 11V9a4 4 0 0 1 4-4h14M7 23l-4-4 4-4M21 13v2a4 4 0 0 1-4 4H3"/></svg>',send:'<svg viewBox="0 0 24 24"><line x1="22" y1="2" x2="11" y2="13"/><polygon points="22 2 15 22 11 13 2 9 22 2"/></svg>'};function k(){let a=document.getElementById("li-view");if(!a)return;let e=(o,r)=>`<div class="li-nav__item">${o}<span>${r}</span></div>`,c=[..._,...m.map(o=>({author:o.author,date:o.time,text:o.text}))].map((o,r)=>{let f=d[r%d.length],y=12+r*91%400;return`
    <article class="li-card li-post">
      <div class="li-post__head">
        <div class="li-post__avatar" style="background:${f.color}">${o.author.charAt(0)}</div>
        <div>
          <div class="li-post__name">${o.author}</div>
          <div class="li-post__headline">Software Engineer \xB7 ${o.date}</div>
        </div>
      </div>
      <p class="li-post__text">${o.text}</p>
      <div class="li-post__stats"><span>\u{1F44D}\u2764\uFE0F ${y}</span><span>\xB7</span><span>${2+r%40} comments</span></div>
      <div class="li-post__actions">
        <div class="li-act">${n.like}<span>Like</span></div>
        <div class="li-act">${n.comment}<span>Comment</span></div>
        <div class="li-act">${n.repost}<span>Repost</span></div>
        <div class="li-act">${n.send}<span>Send</span></div>
      </div>
    </article>`}).join(""),t=u.slice(0,5).map(o=>`
    <div class="li-newsitem">
      <div class="li-newsitem__head">${o.name}</div>
      <div class="li-newsitem__meta">${(o.members/1e3).toFixed(0)}K followers</div>
    </div>`).join("");a.innerHTML=`
    <nav class="li-nav">
      <div class="li-nav__inner">
        <span class="li-nav__logo">in</span>
        <div class="li-nav__search"><input placeholder="Search"></div>
        <div class="li-nav__items">
          ${e(n.home,"Home")}
          ${e(n.net,"Network")}
          ${e(n.jobs,"Jobs")}
          ${e(n.msg,"Messaging")}
          ${e(n.bell,"Notifications")}
        </div>
      </div>
    </nav>
    <div class="li-main">
      <div class="li-rail-left">
        <div class="li-card li-profile">
          <div class="li-profile__banner"></div>
          <div class="li-profile__avatar" style="background:${s[3]}">D</div>
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
          <div class="li-startpost__avatar" style="background:${s[3]}">D</div>
          <button>Start a post</button>
        </div>
        ${c}
      </div>
      <div class="li-rail-right">
        <div class="li-card li-news">
          <div class="li-news__title">My Socials News</div>
          ${t}
        </div>
      </div>
    </div>`}var h="mySocials.theme";function g(a){document.documentElement.setAttribute("data-theme",a);try{localStorage.setItem(h,a)}catch{}document.querySelectorAll("[data-theme-btn]").forEach(e=>{e.classList.toggle("is-active",e.dataset.themeBtn===a)}),window.scrollTo(0,0)}function B(){let a=localStorage.getItem(h)||"orkut";g(["orkut","instagram","linkedin"].includes(a)?a:"orkut"),document.querySelectorAll("[data-theme-btn]").forEach(e=>{e.addEventListener("click",()=>g(e.dataset.themeBtn))})}function p(){$(),b(),w(),S(),x(),M(),k(),B(),setTimeout(()=>{document.querySelectorAll(".trust-meter__fill").forEach(a=>{a.style.transition="width 1.2s cubic-bezier(0.16, 1, 0.3, 1)"})},300)}document.readyState==="loading"?document.addEventListener("DOMContentLoaded",p):p();})();
