(()=>{var k=["#e8508a","#4a8aff","#3abb78","#8a6aff","#ff8a4a","#4ac0ff","#ff4a8a","#50c878","#ffa040","#8080ff","#ff6060","#40c0c0","#c060ff","#ff9060","#60b0ff"],he=[{name:"Ana Silva",initial:"A",color:k[0]},{name:"Bruno Costa",initial:"B",color:k[1]},{name:"Carla Souza",initial:"C",color:k[2]},{name:"Daniel Lima",initial:"D",color:k[3]},{name:"Elena Torres",initial:"E",color:k[4]},{name:"Felipe Gomes",initial:"F",color:k[5]},{name:"Gabi Santos",initial:"G",color:k[6]},{name:"Hugo Pereira",initial:"H",color:k[7]},{name:"Isa Oliveira",initial:"I",color:k[8]}],xe=[{author:"Ana Silva",initial:"A",color:k[0],text:"Hey Diego! Miss our coding sessions at the uni. We should catch up soon! Saudades demais!",time:"2 hours ago"},{author:"Bruno Costa",initial:"B",color:k[1],text:"Cara, vi que voce ta morando em Berlin agora! Que top! Vamos marcar uma call?",time:"5 hours ago"},{author:"Carla Souza",initial:"C",color:k[2],text:"Happy birthday atrasado!! Hope you had an amazing day. Your projects are looking incredible btw",time:"yesterday"},{author:"Felipe Gomes",initial:"F",color:k[5],text:"Mano, teu MyMaps ta INSANO. Lembra quando a gente fazia mapa no paint? kkkk Evoluimos!",time:"2 days ago"},{author:"Gabi Santos",initial:"G",color:k[6],text:'Diego!! Join our community "Linux Users Brazil" please! We need more devs like you there',time:"3 days ago"},{author:"Hugo Pereira",initial:"H",color:k[7],text:"Saw your Strava activities... beast mode! When did you start cycling?",time:"4 days ago"},{author:"Isa Oliveira",initial:"I",color:k[8],text:"Testimonial request sent! You were the best partner for the compiler project, forever grateful",time:"1 week ago"}],Se=[{name:"Eu odeio acordar cedo",members:1247893,emoji:"\u{1F634}",color:"#8a6aff"},{name:"NixOS Brasil",members:3420,emoji:"\u2744\uFE0F",color:"#4a8aff"},{name:"Linux Users",members:89340,emoji:"\u{1F427}",color:"#3abb78"},{name:"Cycling Addicts",members:45200,emoji:"\u{1F6B4}",color:"#ff8a4a"},{name:"Self-hosted Everything",members:12800,emoji:"\u{1F5A5}\uFE0F",color:"#4ac0ff"},{name:"Saudades do Orkut",members:892340,emoji:"\u{1F62D}",color:"#e8508a"},{name:"Maps & Geography",members:23100,emoji:"\u{1F30D}",color:"#50c878"},{name:"Berlin Brasileiros",members:8900,emoji:"\u{1F1E7}\u{1F1F7}",color:"#ffa040"},{name:"Coffee > Sleep",members:456e3,emoji:"\u2615",color:"#c08040"}],Ae=[{author:"Ana Silva",date:"Dec 2023",text:"Diego is one of those rare people who can debug your code AND your life. An incredible friend, always there when you need help. 10/10 would add as friend again."},{author:"Bruno Costa",date:"Nov 2023",text:"Known Diego since university. The guy literally automated everything in his life with NixOS. Respect the dedication. Best engineer I know, no cap."},{author:"Carla Souza",date:"Oct 2023",text:"The most creative developer I have ever worked with. His projects are not just functional, they are beautiful. An artist disguised as an engineer."},{author:"Elena Torres",date:"Sep 2023",text:"Diego helped me set up my entire self-hosted infrastructure. Refused to let me use any cloud subscription. A true freedom fighter of the internet!"}],ee=["#1a2840","#2a1840","#182838","#281828","#1a3028","#302818","#201838","#283018","#381828"];function Ee(){let e=document.getElementById("friends-grid");e&&he.forEach(t=>{let s=document.createElement("div");s.className="friend-cell",s.innerHTML=`
      <div class="friend-cell__avatar">
        <div class="friend-cell__avatar-inner" style="background:${t.color}">${t.initial}</div>
      </div>
      <span class="friend-cell__name">${t.name.split(" ")[0]}</span>
    `,e.appendChild(s)})}function Ce(){let e=document.getElementById("scraps-list");e&&xe.forEach(t=>{let s=document.createElement("div");s.className="scrap",s.innerHTML=`
      <div class="scrap__avatar">
        <div class="scrap__avatar-inner" style="background:${t.color}">${t.initial}</div>
      </div>
      <div class="scrap__body">
        <div class="scrap__header">
          <span class="scrap__author">${t.author}</span>
          <span class="scrap__time">${t.time}</span>
        </div>
        <p class="scrap__text">${t.text}</p>
      </div>
    `,e.appendChild(s)})}function je(){let e=document.getElementById("communities-grid");e&&Se.forEach(t=>{let s=document.createElement("a");s.href="#",s.className="community-card";let c=t.members>=1e6?`${(t.members/1e6).toFixed(1)}M members`:t.members>=1e3?`${(t.members/1e3).toFixed(0)}K members`:`${t.members} members`;s.innerHTML=`
      <div class="community-card__icon" style="background:${t.color}20;color:${t.color}">${t.emoji}</div>
      <div class="community-card__body">
        <span class="community-card__name">${t.name}</span>
        <span class="community-card__members">${c}</span>
      </div>
    `,e.appendChild(s)})}function De(){let e=document.getElementById("testimonials-list");e&&Ae.forEach(t=>{let s=document.createElement("div");s.className="testimonial",s.innerHTML=`
      <div class="testimonial__header">
        <span class="testimonial__author">${t.author}</span>
        <span class="testimonial__date">${t.date}</span>
      </div>
      <p class="testimonial__text">${t.text}</p>
    `,e.appendChild(s)})}function qe(){let e=document.getElementById("photo-grid");if(e)for(let t=0;t<9;t++){let s=document.createElement("div");s.className="photo-cell",s.innerHTML=`<div class="photo-cell__inner" style="background:${ee[t%ee.length]}"></div>`,e.appendChild(s)}}var z={heart:'<svg viewBox="0 0 24 24"><path d="M20.8 4.6a5.5 5.5 0 0 0-7.8 0L12 5.6l-1-1a5.5 5.5 0 0 0-7.8 7.8l1 1L12 21l7.8-7.6 1-1a5.5 5.5 0 0 0 0-7.8z"/></svg>',comment:'<svg viewBox="0 0 24 24"><path d="M21 11.5a8.4 8.4 0 0 1-9 8.4 9 9 0 0 1-4-1L3 20l1.1-4.9A8.4 8.4 0 0 1 12 3a8.4 8.4 0 0 1 9 8.5z"/></svg>',share:'<svg viewBox="0 0 24 24"><line x1="22" y1="2" x2="11" y2="13"/><polygon points="22 2 15 22 11 13 2 9 22 2"/></svg>',save:'<svg viewBox="0 0 24 24"><path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"/></svg>',home:'<svg viewBox="0 0 24 24"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/></svg>',grid:'<svg viewBox="0 0 24 24"><rect x="3" y="3" width="18" height="18" rx="2"/><line x1="9" y1="3" x2="9" y2="21"/><line x1="15" y1="3" x2="15" y2="21"/><line x1="3" y1="9" x2="21" y2="9"/><line x1="3" y1="15" x2="21" y2="15"/></svg>',reels:'<svg viewBox="0 0 24 24"><rect x="3" y="3" width="18" height="18" rx="3"/><line x1="3" y1="8" x2="21" y2="8"/><line x1="8" y1="3" x2="10" y2="8"/><line x1="14" y1="3" x2="16" y2="8"/><polygon points="10 11 15 13.5 10 16" fill="currentColor" stroke="none"/></svg>',tagged:'<svg viewBox="0 0 24 24"><rect x="3" y="3" width="18" height="18" rx="3"/><circle cx="12" cy="10" r="3"/><path d="M7 18a5 5 0 0 1 10 0"/></svg>'};function U(e){let t=ee[e%ee.length],s=k[e%k.length];return`linear-gradient(135deg, ${t}, ${s})`}function a(e){return e.replace(/[&<>"]/g,t=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"})[t])}function Be(e){let t=0;for(let s=0;s<e.length;s++)t=t*31+e.charCodeAt(s)>>>0;return k[t%k.length]}var ie=["ana","bruno","carla","diego","elena","felipe","gabi","hugo","isa","joao","lu","marco","nina","otto","paula","rafa","sofia","tiago","vera","yara"],ne=["","_",".","__"],de=["","br","berlin","photo","travel","x","oficial","real","99","mrx","gram"];function He(e,t){let s=e.slice();for(let c=0;s.length<t;c++){let g=ie[c%ie.length],h=ne[(c>>2)%ne.length],b=de[(c>>1)%de.length],d=Math.floor(c/(ie.length*ne.length)),i=`${g}${h}${b}${d>0?d:""}`;s.includes(i)?s.push(`${i}${s.length}`):s.push(i)}return s}function Ie(){let e=document.getElementById("ig-view");if(!e)return;let t=globalThis.PORTAL_DATA?.instagram;if(!t){e.innerHTML='<p class="ig-empty">Instagram data not loaded.</p>';return}let s=t.profile,c=l=>l.toLocaleString(),g=(t.highlights||[]).map((l,_)=>`
    <div class="ig-hl">
      <div class="ig-hl__ring"><div class="ig-hl__avatar" style="background:${U(_)}"><span class="ig-hl__emoji">${l.emoji}</span></div></div>
      <span class="ig-hl__name">${a(l.label)}</span>
    </div>`).join(""),h=(l,_)=>`
    <a class="ig-tile" href="${a(l.url)}" target="_blank" rel="noopener" style="background:${U(l.url.length)}">
      <span class="ig-tile__cap">${a(l.caption||l.url.replace("https://www.instagram.com/",""))}</span>
      <span class="ig-tile__badge">${_}</span>
    </a>`,b=t.saved.length?t.saved.map(l=>h(l,"\u{1F516}")).join(""):'<p class="ig-empty">Nothing saved.</p>',d=t.liked.length?t.liked.map(l=>h(l,"\u2764\uFE0F")).join(""):'<p class="ig-empty">No likes.</p>',i=l=>Number(l.match(/(\d+)(?=\.\w+$)/)?.[1]||0),n=t.posts.slice().sort((l,_)=>i(_.media)-i(l.media)),p=30,m=[...t.saved,...t.liked].map(l=>l.caption).filter(Boolean),E=n.map((l,_)=>`<a class="ig-tile" href="#" data-post-idx="${_}"><img src="${l.media}" alt="post"></a>`),D=Array.from({length:Math.max(0,p-E.length)},(l,_)=>`
    <a class="ig-tile ig-tile--post" href="#" style="background:${U(_)}">
      <span class="ig-tile__cap">${a(m[_%(m.length||1)]||"")}</span>
    </a>`),o=E.length||D.length?[...E,...D].join(""):'<p class="ig-empty">No posts yet.</p>',w='<svg class="ig-tile__ov" viewBox="0 0 24 24"><polygon points="10 8 16 12 10 16 10 8" fill="currentColor" stroke="none"/></svg>',L=Array.from({length:12},(l,_)=>`
    <a class="ig-tile ig-tile--post" href="#" style="background:${U(_+5)}">${w}
      <span class="ig-tile__cap">${a(m[(_+2)%(m.length||1)]||"")}</span>
    </a>`).join(""),F=Array.from({length:9},(l,_)=>`
    <a class="ig-tile ig-tile--post" href="#" style="background:${U(_+9)}">
      <span class="ig-tile__badge">@${a(s.username)}</span>
    </a>`).join(""),O=t.comments.length?t.comments.map(l=>`
      <div class="ig-comment">
        <div class="ig-comment__text">${a(l.text)}</div>
        <div class="ig-comment__meta">${l.owner?"@"+a(l.owner)+" \xB7 ":""}${a(l.time||"")}</div>
      </div>`).join(""):'<p class="ig-empty">No comments.</p>',q=l=>`<div class="ig-grid">${l}</div>`,R=s.photo?`<img class="ig-head__avatar" src="${a(s.photo)}" alt="${a(s.name)}">`:`<div class="ig-head__avatar ig-head__avatar--ph">${a(se(s.name))}</div>`;e.innerHTML=`
    <nav class="ig-nav">
      <div class="ig-nav__inner">
        <a href="#" class="ig-nav__logo">My Socials</a>
        <div class="ig-nav__search"><input placeholder="Search"></div>
        <div class="ig-nav__icons">${z.home}${z.heart}${z.comment}${z.share}</div>
      </div>
    </nav>
    <div class="ig-page">
      <header class="ig-head">
        <div class="ig-head__user">${a(s.username)}</div>
        <div class="ig-head__row">
          ${R}
          <div class="ig-head__stats">
            <div class="ig-head__stat"><strong>${c(s.posts)}</strong><span>posts</span></div>
            <div class="ig-head__stat" data-modal="followers"><strong>${c(s.followers)}</strong><span>followers</span></div>
            <div class="ig-head__stat" data-modal="following"><strong>${c(s.following)}</strong><span>following</span></div>
          </div>
        </div>
        <div class="ig-head__name">${a(s.name)}</div>
        <div class="ig-head__bio">${a(s.bio)}</div>
        <div class="ig-head__actions">
          <span class="ig-head__btn ig-head__btn--primary">Follow</span>
          <span class="ig-head__btn">Message</span>
        </div>
      </header>

      ${g?`<div class="ig-highlights">${g}</div>`:""}

      <div class="ig-tabs">
        <div class="ig-tab is-active" data-pane="posts">${z.grid} Posts</div>
        <div class="ig-tab" data-pane="reels">${z.reels} Reels</div>
        <div class="ig-tab" data-pane="tagged">${z.tagged} Tagged</div>
      </div>

      <div class="ig-subtabs">
        <button class="ig-pill" data-pane="saved">${z.save}<span>Saved</span><em>${c(t.saved.length)}</em></button>
        <button class="ig-pill" data-pane="liked">${z.heart}<span>Liked</span><em>${c(t.liked.length)}</em></button>
        <button class="ig-pill" data-pane="comments">${z.comment}<span>Comments</span><em>${c(t.comments.length)}</em></button>
      </div>

      <div class="ig-pane is-active" data-pane="posts">${q(o)}</div>
      <div class="ig-pane" data-pane="reels">${q(L)}</div>
      <div class="ig-pane" data-pane="tagged">${q(F)}</div>
      <div class="ig-pane" data-pane="saved">${q(b)}</div>
      <div class="ig-pane" data-pane="liked">${q(d)}</div>
      <div class="ig-pane" data-pane="comments"><div class="ig-comments">${O}</div></div>
    </div>

    <div class="ig-modal" id="ig-modal">
      <div class="ig-modal__box">
        <div class="ig-modal__head">
          <small id="ig-modal-sub"></small><h3 id="ig-modal-title"></h3>
          <button id="ig-modal-close" aria-label="Close">&times;</button>
        </div>
        <div class="ig-modal__list" id="ig-modal-list"></div>
      </div>
    </div>

    <div class="ig-post-modal" id="ig-post-modal">
      <div class="ig-post-modal__box">
        <button class="ig-post-modal__close" id="ig-post-modal-close" aria-label="Close">&times;</button>
        <div class="ig-post-modal__viewer">
          <button class="ig-post-modal__nav ig-post-modal__nav--prev" id="ig-post-prev" aria-label="Previous photo">&lsaquo;</button>
          <img class="ig-post-modal__img" id="ig-post-img" alt="post photo">
          <button class="ig-post-modal__nav ig-post-modal__nav--next" id="ig-post-next" aria-label="Next photo">&rsaquo;</button>
          <div class="ig-post-modal__dots" id="ig-post-dots"></div>
        </div>
        <div class="ig-post-modal__side">
          <div class="ig-post-modal__comments" id="ig-post-comments"></div>
        </div>
      </div>
    </div>`,e.querySelectorAll(".ig-tab, .ig-pill").forEach(l=>{l.addEventListener("click",()=>{let _=l.dataset.pane;e.querySelectorAll(".ig-tab, .ig-pill").forEach(A=>A.classList.toggle("is-active",A===l)),e.querySelectorAll(".ig-pane").forEach(A=>A.classList.toggle("is-active",A.dataset.pane===_))})});let $=e.querySelector("#ig-modal"),M=l=>{let _=l==="followers"?t.followers:t.following,A=l==="followers"?s.followers:s.following,j=He(_,A);e.querySelector("#ig-modal-title").textContent=l==="followers"?"Followers":"Following",e.querySelector("#ig-modal-sub").textContent=`${c(A)} ${l}`,e.querySelector("#ig-modal-list").innerHTML=j.map(N=>`
      <div class="ig-row">
        <div class="ig-row__avatar" style="background:${Be(N)}">${a(N.charAt(0).toUpperCase())}</div>
        <a class="ig-row__handle" href="https://www.instagram.com/${a(N)}" target="_blank" rel="noopener">${a(N)}</a>
        <span class="ig-row__follow">Follow</span>
      </div>`).join(""),$.classList.add("is-open")};e.querySelectorAll(".ig-head__stat[data-modal]").forEach(l=>l.addEventListener("click",()=>M(l.dataset.modal)));let G=()=>$.classList.remove("is-open");e.querySelector("#ig-modal-close").addEventListener("click",G),$.addEventListener("click",l=>{l.target===$&&G()});let v=e.querySelector("#ig-post-modal"),x=e.querySelector("#ig-post-img"),B=e.querySelector("#ig-post-dots"),Y=e.querySelector("#ig-post-comments"),y=[],T=0,C=()=>{x.src=y[T],B.innerHTML=y.length>1?y.map((l,_)=>`<span class="ig-post-modal__dot${_===T?" is-active":""}"></span>`).join(""):""},H=l=>{let _=n[l];_&&(y=_.media_all?.length?_.media_all:[_.media],T=0,C(),Y.innerHTML='<p class="ig-empty">No per-post comment data in this export.</p>',v.classList.add("is-open"))};e.querySelectorAll(".ig-tile[data-post-idx]").forEach(l=>l.addEventListener("click",_=>{_.preventDefault(),H(Number(l.dataset.postIdx))})),e.querySelector("#ig-post-prev").addEventListener("click",()=>{T=(T-1+y.length)%y.length,C()}),e.querySelector("#ig-post-next").addEventListener("click",()=>{T=(T+1)%y.length,C()});let I=()=>v.classList.remove("is-open");e.querySelector("#ig-post-modal-close").addEventListener("click",I),v.addEventListener("click",l=>{l.target===v&&I()})}var W={home:'<svg viewBox="0 0 24 24"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/></svg>',net:'<svg viewBox="0 0 24 24"><circle cx="9" cy="7" r="4"/><path d="M17 11a4 4 0 1 0-3-6.6M1 21v-2a4 4 0 0 1 4-4h8a4 4 0 0 1 4 4v2M17 15a4 4 0 0 1 4 4v2"/></svg>',jobs:'<svg viewBox="0 0 24 24"><rect x="2" y="7" width="20" height="14" rx="2"/><path d="M8 7V5a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"/></svg>',msg:'<svg viewBox="0 0 24 24"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>',bell:'<svg viewBox="0 0 24 24"><path d="M18 8a6 6 0 1 0-12 0c0 7-3 9-3 9h18s-3-2-3-9M13.7 21a2 2 0 0 1-3.4 0"/></svg>',like:'<svg viewBox="0 0 24 24"><path d="M14 9V5a3 3 0 0 0-6 0v4H5a2 2 0 0 0-2 2l1 7a2 2 0 0 0 2 2h9a2 2 0 0 0 2-2l1-7a2 2 0 0 0-2-2z"/></svg>',comment:'<svg viewBox="0 0 24 24"><path d="M21 11.5a8.4 8.4 0 0 1-9 8.4 9 9 0 0 1-4-1L3 20l1.1-4.9A8.4 8.4 0 0 1 12 3a8.4 8.4 0 0 1 9 8.5z"/></svg>',repost:'<svg viewBox="0 0 24 24"><polyline points="17 1 21 5 17 9"/><path d="M3 11V9a4 4 0 0 1 4-4h14M7 23l-4-4 4-4M21 13v2a4 4 0 0 1-4 4H3"/></svg>',send:'<svg viewBox="0 0 24 24"><line x1="22" y1="2" x2="11" y2="13"/><polygon points="22 2 15 22 11 13 2 9 22 2"/></svg>'};function J(e){return a(e).replace(/(https?:\/\/\S+)/g,'<a href="$1" target="_blank" rel="noopener">$1</a>')}var Pe=0;function K(e){let t=`li-clamp-${Pe++}`;return`<div class="li-clamp" id="${t}"><div class="li-clamp__body">${e}</div><button type="button" class="li-clamp__toggle" data-clamp="${t}">Show more</button></div>`}function se(e){return e.split(/\s+/).filter(Boolean).slice(0,2).map(t=>t.charAt(0).toUpperCase()).join("")}function Re(){let e=document.getElementById("li-view");if(!e)return;let t=globalThis.PORTAL_DATA?.linkedin;if(!t){e.innerHTML='<p class="li-empty">LinkedIn data not loaded.</p>';return}let s=t.profile,c=(o,w)=>`<div class="li-nav__item">${o}<span>${w}</span></div>`,g=s.photo?`<div class="li-phead__avatar li-phead__avatar--img"><img src="${s.photo}" alt="${a(s.name)}"></div>`:`<div class="li-phead__avatar" style="background:${k[3]}">${a(se(s.name))}</div>`,h=(o,w)=>`<section class="li-card li-section"><h2 class="li-section__title">${o}</h2>${w}</section>`,b='<p class="li-need">Not in the saved profile page \u2014 add from your LinkedIn data export (Settings \u2192 Get a copy of your data).</p>',d=t.experience.length?t.experience.map(o=>`
      <div class="li-item">
        <div class="li-item__logo">${a(o.company.charAt(0))}</div>
        <div>
          <div class="li-item__title">${a(o.title)}</div>
          <div class="li-item__sub">${a(o.company)}</div>
          <div class="li-item__meta">${a(o.dates)}${o.location?" \xB7 "+a(o.location):""}</div>
          ${o.description?`<div class="li-item__desc">${K(J(o.description))}</div>`:""}
        </div>
      </div>`).join(""):b,i=t.education.length?t.education.map(o=>`
      <div class="li-item">
        <div class="li-item__logo">${a(o.school.charAt(0))}</div>
        <div>
          <div class="li-item__title">${a(o.school)}</div>
          <div class="li-item__sub">${a(o.degree)}</div>
          <div class="li-item__meta">${a(o.dates)}</div>
          ${o.description?`<div class="li-item__desc">${K(J(o.description))}</div>`:""}
        </div>
      </div>`).join(""):b,n=(t.featured?.length??0)>0?`<div class="li-featured">${t.featured.map(o=>`
        <a class="li-feat" href="${a(o.url)}" target="_blank" rel="noopener">
          <span class="li-feat__icon">\u{1F517}</span>
          <span class="li-feat__body">
            <span class="li-feat__title">${a(o.title)}</span>
            ${o.subtitle?`<span class="li-feat__sub">${a(o.subtitle)}</span>`:""}
          </span>
        </a>`).join("")}</div>`:"",p=t.skills.length?`<div class="li-skills">${t.skills.map(o=>`<span class="li-skill">${a(o)}</span>`).join("")}</div>`:b,m=t.about?`<div class="li-about">${K(J(t.about))}</div>`:b,E=t.languages.length?t.languages.map(o=>`
      <div class="li-lang">
        <span class="li-lang__name">${a(o.name)}</span>
        <span class="li-lang__level">${a(o.proficiency)}</span>
      </div>`).join(""):b,D=t.projects.length?t.projects.map(o=>`
      <div class="li-item li-item--proj">
        <div>
          <div class="li-item__title">${a(o.title)}${o.url?` \xB7 <a href="${a(o.url)}" target="_blank" rel="noopener">link</a>`:""}</div>
          ${o.dates?`<div class="li-item__meta">${a(o.dates)}</div>`:""}
          <div class="li-item__desc">${K(J(o.description))}</div>
        </div>
      </div>`).join(""):b;e.innerHTML=`
    <nav class="li-nav">
      <div class="li-nav__inner">
        <span class="li-nav__logo">in</span>
        <div class="li-nav__search"><input placeholder="Search"></div>
        <div class="li-nav__items">
          ${c(W.home,"Home")}
          ${c(W.net,"Network")}
          ${c(W.jobs,"Jobs")}
          ${c(W.msg,"Messaging")}
          ${c(W.bell,"Notifications")}
        </div>
      </div>
    </nav>
    <div class="li-prof">
      <div class="li-prof__main">
        <section class="li-card li-phead">
          <div class="li-phead__banner"></div>
          ${g}
          <div class="li-phead__body">
            <h1 class="li-phead__name">${a(s.name)}</h1>
            <p class="li-phead__headline">${a(s.headline)}</p>
            <p class="li-phead__loc">${a(s.location)} \xB7 <a href="https://${a(s.url)}" target="_blank" rel="noopener">Contact info</a></p>
            <p class="li-phead__meta"><strong>${s.connections}</strong> connections \xB7 <strong>${s.followers.toLocaleString()}</strong> followers</p>
            ${s.open_to_work?`<div class="li-phead__open"><strong>Open to work</strong><br>${a(s.open_to_work)}</div>`:""}
            <div class="li-phead__actions">
              <button class="li-btn li-btn--primary">Connect</button>
              <button class="li-btn">Message</button>
              <button class="li-btn">More</button>
            </div>
          </div>
        </section>
        ${h("About",m)}
        ${n?h("Featured",n):""}
        ${h("Experience",d)}
        ${h("Education",i)}
        ${h("Skills",p)}
        ${h("Projects",D)}
        ${h("Languages",E)}
      </div>
      <aside class="li-prof__rail">
        <div class="li-card li-side">
          <div class="li-side__title">Profile</div>
          <div class="li-side__row"><span>Current</span><strong>${a(s.current)}</strong></div>
          <div class="li-side__row"><span>Location</span><strong>${a(s.location.split(",")[0])}</strong></div>
          <div class="li-side__row"><span>Profile</span><a href="https://${a(s.url)}" target="_blank" rel="noopener">${a(s.url)}</a></div>
        </div>
      </aside>
    </div>`,e.querySelectorAll(".li-clamp").forEach(o=>{let w=o.querySelector(".li-clamp__body"),L=o.querySelector(".li-clamp__toggle");if(w.scrollHeight<=w.clientHeight+4){L.style.display="none";return}L.addEventListener("click",()=>{let F=o.classList.toggle("li-clamp--open");L.textContent=F?"Show less":"Show more"})})}var me={bell:'<svg viewBox="0 0 24 24"><path d="M18 8a6 6 0 1 0-12 0c0 7-3 9-3 9h18s-3-2-3-9M13.7 21a2 2 0 0 1-3.4 0"/></svg>',chat:'<svg viewBox="0 0 24 24"><path d="M21 11.5a8.4 8.4 0 0 1-9 8.4 9 9 0 0 1-4-1L3 20l1.1-4.9A8.4 8.4 0 0 1 12 3a8.4 8.4 0 0 1 9 8.5z"/></svg>'},pe=[220,300,180,340,260,200,320,240,280];function Ne(){let e=document.getElementById("pin-view");if(!e)return;let t=globalThis.PORTAL_DATA?.pinterest,s=t?.boards??[],c=t?.profile,g=["30% 30%","75% 15%","20% 80%","80% 75%"],h=(d,i)=>`
    <div class="pin-card__grid">
      ${g.map((n,p)=>`<div class="pin-card__cell pin-card__cell--${p}" style="background-image:url('${a(d)}');background-position:${n}" role="img" aria-label="${a(i)}"></div>`).join("")}
    </div>`,b=s.map((d,i)=>{let n=pe[i%pe.length],p=d.cover?h(d.cover,d.name):`<div class="pin-card__ph" style="height:${n}px;background:${U(i)}">\u{1F4CC}</div>`;return`
    <a class="pin-card" href="https://www.pinterest.com/${a(c?.username||"diegonmarcos")}/${a(d.name.toLowerCase().replace(/[^a-z0-9]+/g,"-"))}/" target="_blank" rel="noopener">
      <div class="pin-card__media">
        ${p}
        <div class="pin-card__overlay"><span class="pin-card__save">${d.pins} pins</span></div>
      </div>
      <div class="pin-card__title">${a(d.name)}</div>
      ${d.desc?`<div class="pin-card__meta">${a(d.desc)}</div>`:`<div class="pin-card__meta">${d.pins} pins</div>`}
    </a>`}).join("");e.innerHTML=`
    <nav class="pin-nav">
      <div class="pin-nav__inner">
        <span class="pin-nav__logo">P</span>
        <a href="#" class="pin-nav__tab pin-nav__tab--active">Boards</a>
        <a href="https://www.pinterest.com/${a(c?.username||"diegonmarcos")}/" target="_blank" rel="noopener" class="pin-nav__tab">Profile</a>
        <div class="pin-nav__search"><input placeholder="Search for ideas"></div>
        <div class="pin-nav__icons">${me.bell}${me.chat}<span class="pin-nav__avatar" style="background:${k[3]}">D</span></div>
      </div>
    </nav>
    <div class="pin-head">@${a(c?.username||"diegonmarcos")} \xB7 <strong>${c?.boards??s.length}</strong> boards \xB7 <strong>${c?.pins??0}</strong> pins</div>
    <div class="pin-board">${b||'<p class="pin-empty">No boards.</p>'}</div>`}function Fe(){let e=document.getElementById("tid-view");if(!e)return;let t=globalThis.PORTAL_DATA?.tidal,s=t?.playlists??[],c=t?.folders??[],g=t?.profile,h=n=>{if(!n)return"";let p=Math.floor(n/3600),m=Math.round(n%3600/60);return p?`${p}h ${m}m`:`${m} min`},b=`https://tidal.com/@${a(g?.username||"diegonmarcos")}`,d=s.map((n,p)=>{let m=n.cover?`<img class="tid-card__img" src="${a(n.cover)}" alt="${a(n.name)}" loading="lazy">`:`<div class="tid-card__ph" style="background:${U(p)}">\u266B</div>`;return`
    <a class="tid-card" href="${n.url?a(n.url):b}" target="_blank" rel="noopener">
      <div class="tid-card__cover">${m}<span class="tid-card__play">\u25B6</span></div>
      <div class="tid-card__name">${a(n.name)}</div>
      <div class="tid-card__meta">${n.tracks} tracks${n.duration_s?" \xB7 "+h(n.duration_s):""}</div>
    </a>`}).join(""),i=c.map(n=>`<span class="tid-folder">${a(n.name)}<em>${n.playlists}</em></span>`).join("");e.innerHTML=`
    <nav class="tid-nav">
      <div class="tid-nav__inner">
        <span class="tid-nav__logo">TIDAL</span>
        <div class="tid-nav__search"><input placeholder="Search"></div>
        <span class="tid-nav__user">@${a(g?.username||"diegonmarcos")}</span>
      </div>
    </nav>
    <div class="tid-main">
      <header class="tid-head">
        <div class="tid-head__title">My Playlists</div>
        <div class="tid-head__sub">${g?.playlists??s.length} playlists \xB7 ${g?.tracks??0} tracks</div>
      </header>
      ${i?`<div class="tid-folders">${i}</div>`:""}
      <div class="tid-grid">${d||'<p class="tid-empty">Playlists load once the Tidal profile ID is set.</p>'}</div>
    </div>`}var Z={run:"\u{1F3C3}",ride:"\u{1F6B4}",swim:"\u{1F3CA}"};function Oe(){let e=document.getElementById("str-view");if(!e)return;let t=globalThis.PORTAL_DATA?.strava,s=t?.activities??[],c=t?.profile,g=r=>r&&parseInt(r)||0,h=r=>r.split(" \u2014 ")[1]||"",b=["run","ride","swim"],d=b.reduce((r,u)=>{let f=s.filter(S=>S.type===u);return r[u]={count:f.length,distance:f.reduce((S,P)=>S+(P.distance_km||0),0),minutes:f.reduce((S,P)=>S+g(P.duration),0),elevation:f.reduce((S,P)=>S+(P.elevation_m||0),0)},r},{}),i=b.reduce((r,u)=>r+d[u].minutes,0),n=r=>`${Math.round(r/60)}h`,p=(r,u,f)=>`<div class="str-stat"><span class="str-stat__icon">${r}</span><span class="str-stat__value">${a(u)}</span><span class="str-stat__label">${f}</span></div>`,m=`
    <div class="str-dash">
      ${p("\u{1F3C3}",`${d.run.distance.toFixed(0)} km`,`${d.run.count} runs`)}
      ${p("\u{1F6B4}",`${d.ride.distance.toFixed(0)} km`,`${d.ride.count} rides`)}
      ${p("\u{1F3CA}",`${d.swim.distance.toFixed(1)} km`,`${d.swim.count} swims`)}
      ${p("\u23F1\uFE0F",n(i),"total time")}
      ${p("\u26F0\uFE0F",`${(d.run.elevation+d.ride.elevation).toLocaleString()} m`,"elevation gain")}
    </div>`,E=new Map;s.forEach(r=>{let u=Date.parse(r.date);if(!Number.isNaN(u)){let f=new Date(u).toISOString().slice(0,10);E.set(f,(E.get(f)||0)+1)}});let D=s.length?new Date(Math.max(...s.map(r=>Date.parse(r.date)).filter(r=>!Number.isNaN(r)))):new Date(0),o=53,w=new Date(D);w.setDate(w.getDate()-o*7),w.setDate(w.getDate()-w.getDay());let L=[];for(let r=0;r<o*7;r++){let u=new Date(w);u.setDate(u.getDate()+r);let f=u.toISOString().slice(0,10),S=E.get(f)||0,P=S===0?0:S===1?1:S===2?2:3;L.push(`<span class="str-cal__cell str-cal__cell--${P}" title="${f}: ${S} activit${S===1?"y":"ies"}"></span>`)}let F=`<div class="str-cal">${L.join("")}</div>`,O=new Map;s.forEach(r=>{let u=Date.parse(r.date);if(Number.isNaN(u))return;let f=new Date(u).toISOString().slice(0,10);(O.get(f)??O.set(f,[]).get(f)).push(r)});let q=(r,u)=>new Date(Date.UTC(r,u,1)).toLocaleDateString("en-US",{month:"long",year:"numeric",timeZone:"UTC"}),R=(r,u)=>{let f=new Date(Date.UTC(r,u,1)),S=new Date(Date.UTC(r,u+1,0)).getUTCDate(),P=f.getUTCDay(),Q=["S","M","T","W","T","F","S"],we=Array.from({length:P},()=>'<span class="str-month__day str-month__day--blank"></span>'),Le=Array.from({length:S},(le,Te)=>{let re=Te+1,ke=new Date(Date.UTC(r,u,re)).toISOString().slice(0,10),ce=O.get(ke)||[],Me=ce.map(ae=>`<span class="str-month__dot" style="background:${ae.type==="run"?"#fc5200":ae.type==="ride"?"#0a66c2":"#00b8d9"}" title="${a(ae.title)}"></span>`).join("");return`<span class="str-month__day${ce.length?" has-activity":""}"><span class="str-month__num">${re}</span><span class="str-month__dots">${Me}</span></span>`});return`
      <div class="str-month__dow">${Q.map(le=>`<span>${le}</span>`).join("")}</div>
      <div class="str-month__grid">${we.join("")}${Le.join("")}</div>`},$=D.getUTCFullYear(),M=D.getUTCMonth(),G=`
    <div class="str-month">
      <div class="str-month__head">
        <button class="str-month__nav" id="str-month-prev" aria-label="Previous month">&lsaquo;</button>
        <span class="str-month__label" id="str-month-label">${q($,M)}</span>
        <button class="str-month__nav" id="str-month-next" aria-label="Next month">&rsaquo;</button>
      </div>
      <div id="str-month-body">${R($,M)}</div>
    </div>`,v={Berlin:[52.52,13.4],Munich:[48.14,11.58],Amsterdam:[52.37,4.9],Paris:[48.86,2.35],Barcelona:[41.39,2.17],Lisbon:[38.72,-9.14],Vienna:[48.21,16.37],Prague:[50.08,14.44],Copenhagen:[55.68,12.57],Zurich:[47.37,8.54],Rome:[41.9,12.5],Porto:[41.15,-8.61],Krakow:[50.06,19.94],Budapest:[47.5,19.04],Ljubljana:[46.06,14.51],Nice:[43.7,7.27]},x=new Map;s.forEach(r=>{let u=h(r.title);u&&x.set(u,(x.get(u)||0)+1)});let B=Object.values(v).map(([r])=>r),Y=Object.values(v).map(([,r])=>r),[y,T]=[Math.min(...B),Math.max(...B)],[C,H]=[Math.min(...Y),Math.max(...Y)],I=(r,u)=>{let f=20+(u-C)/(H-C||1)*360,S=20+(1-(r-y)/(T-y||1))*260;return[f,S]},l=Math.max(1,...x.values()),_=[...x.entries()].map(([r,u])=>{let f=v[r];if(!f)return"";let[S,P]=I(...f),Q=5+u/l*10;return`<g class="str-map__pin"><circle cx="${S}" cy="${P}" r="${Q}" /><text x="${S}" y="${P-Q-4}">${a(r)} (${u})</text></g>`}).join(""),A=`<svg class="str-map" viewBox="0 0 400 300" role="img" aria-label="Cities visited">${_}</svg>`,j=(r,u)=>u?`<div class="str-card__stat"><span class="str-card__stat-value">${a(u)}</span><span class="str-card__stat-label">${r}</span></div>`:"",N=r=>`
    <div class="str-card" data-type="${r.type}">
      <div class="str-card__header">
        <div class="str-card__icon">${Z[r.type]||"\u{1F3C1}"}</div>
        <div>
          <div class="str-card__title">${a(r.title)}</div>
          <div class="str-card__date">${a(r.date)}</div>
        </div>
      </div>
      <div class="str-card__stats">
        ${j("Distance",r.distance_km?`${r.distance_km} km`:"")}
        ${j("Time",r.duration||"")}
        ${j("Pace",r.pace||"")}
        ${j("Elevation",r.elevation_m?`${r.elevation_m} m`:"")}
      </div>
    </div>`,V=s.map(N).join(""),fe=`<div class="str-head__avatar">${a(se(c?.name||"Diego Nepomuceno Marcos"))}</div>`;e.innerHTML=`
    <nav class="str-nav">
      <div class="str-nav__inner">
        <span class="str-nav__logo">Strava</span>
        <div class="str-nav__search"><input placeholder="Search"></div>
        <span class="str-nav__user">${a(c?.name||"diegonmarcos")}</span>
      </div>
    </nav>
    <div class="str-main">
      <header class="str-head">
        ${fe}
        <div>
          <div class="str-head__name">${a(c?.name||"Diego Nepomuceno Marcos")}</div>
        </div>
        <div class="str-head__stats">
          <div class="str-head__stat"><span class="str-head__stat-value">${c?.activities??s.length}</span><span class="str-head__stat-label">Activities</span></div>
          <div class="str-head__stat"><span class="str-head__stat-value">${c?.followers??0}</span><span class="str-head__stat-label">Followers</span></div>
          <div class="str-head__stat"><span class="str-head__stat-value">${c?.following??0}</span><span class="str-head__stat-label">Following</span></div>
        </div>
      </header>

      ${m}

      <section class="str-section">
        <h3 class="str-section__title">Calendar</h3>
        ${G}
        <div class="str-cal__heatmap-label">Last 12 months</div>
        ${F}
      </section>

      ${_?`<section class="str-section">
        <h3 class="str-section__title">Map \u2014 cities visited</h3>
        ${A}
      </section>`:""}

      <div class="str-filters">
        <button class="str-filter is-active" data-type="all">All</button>
        <button class="str-filter" data-type="run">${Z.run} Run</button>
        <button class="str-filter" data-type="ride">${Z.ride} Ride</button>
        <button class="str-filter" data-type="swim">${Z.swim} Swim</button>
      </div>

      <div class="str-feed">${V||'<p class="str-empty">No activities yet. Strava data loads once the profile is exported.</p>'}</div>
    </div>`,e.querySelectorAll(".str-filter").forEach(r=>{r.addEventListener("click",()=>{e.querySelectorAll(".str-filter").forEach(f=>f.classList.toggle("is-active",f===r));let u=r.dataset.type;e.querySelectorAll(".str-card").forEach(f=>{f.style.display=u==="all"||f.dataset.type===u?"":"none"})})});let $e=e.querySelector("#str-month-body"),ye=e.querySelector("#str-month-label"),oe=r=>{M+=r,M<0&&(M=11,$--),M>11&&(M=0,$++),ye.textContent=q($,M),$e.innerHTML=R($,M)};e.querySelector("#str-month-prev").addEventListener("click",()=>oe(-1)),e.querySelector("#str-month-next").addEventListener("click",()=>oe(1))}function ze(){let e=document.getElementById("yt-view");if(!e)return;let t=globalThis.PORTAL_DATA?.youtube,s=t?.videos??[],c=t?.playlists??[],g=t?.profile,h=(n,p)=>{let m=n.thumbnail?`<img class="yt-card__img" src="${a(n.thumbnail)}" alt="${a(n.title)}" loading="lazy">`:`<div class="yt-card__ph" style="background:${U(p)}">\u25B6</div>`;return`
    <a class="yt-card" href="${a(n.url||"#")}" target="_blank" rel="noopener">
      <div class="yt-card__thumb">${m}${n.duration?`<span class="yt-card__duration">${a(n.duration)}</span>`:""}</div>
      <div class="yt-card__title">${a(n.title)}</div>
      ${n.channel?`<div class="yt-card__channel">${a(n.channel)}</div>`:""}
      <div class="yt-card__meta">${n.views!==void 0?`${n.views.toLocaleString()} views`:""}${n.views!==void 0&&n.date?" \xB7 ":""}${n.date?a(n.date):""}</div>
    </a>`},b=c.map(n=>`
    <section class="yt-shelf">
      <div class="yt-shelf__title">${a(n.name)}</div>
      <div class="yt-shelf__row">${n.videos.map((p,m)=>h(p,m)).join("")}</div>
    </section>`).join(""),d=s.length?`<div class="yt-grid">${s.map((n,p)=>h(n,p)).join("")}</div>`:"",i=c.length||s.length;e.innerHTML=`
    <nav class="yt-nav">
      <div class="yt-nav__inner">
        <span class="yt-nav__logo">YouTube</span>
        <div class="yt-nav__search"><input placeholder="Search"></div>
        <span class="yt-nav__user">@${a(g?.channel||"diegonmarcos")}</span>
      </div>
    </nav>
    <div class="yt-main">
      <header class="yt-head">
        <div>
          <div class="yt-head__title">${a(g?.channel||"diegonmarcos")}</div>
          <div class="yt-head__sub">${g?.subscribers??0} subscribers \xB7 ${g?.videos??s.length} videos</div>
        </div>
      </header>
      ${i?`${b}${d}`:'<p class="yt-empty">No videos or playlists yet. YouTube data loads once the channel is scraped.</p>'}
    </div>`}var X=(e=!1)=>{let t=e?"#c7cbb9":"#8fbf3f",s=e?"#c7cbb9":"#ef4a2b",c=e?"#e4e4d8":"#ffd400",g=e?"#9a9d90":"#1a1a12";return`<svg class="icq-flower" viewBox="0 0 16 16" aria-hidden="true">${Array.from({length:8},(b,d)=>{let i=d*45;return`<ellipse cx="8" cy="2.9" rx="1.9" ry="2.9" fill="${d===0?s:t}" stroke="${g}" stroke-width="0.5" transform="rotate(${i} 8 8)"/>`}).join("")}<circle cx="8" cy="8" r="2.4" fill="${c}" stroke="${g}" stroke-width="0.5"/></svg>`};var ge={online:!1,away:!1,dnd:!1,offline:!0};function Ge(){let e=document.getElementById("icq-view");if(!e)return;let t=globalThis.PORTAL_DATA||{},s=t.linkedin,c=t.instagram,g=s?.profile.name||"Diego Nepomuceno Marcos",h=c?.profile.username||"diegonmarcos",b=g.split(" ")[0],d=g.split(" ").slice(1).join(" "),i=(s?.profile.location||"Berlin, Germany").split(",").map(v=>v.trim()),n=i[0]||"",p=i[i.length-1]||"",m=s?.experience?.[0],E=s?.about||c?.profile.bio||"",D=s?.skills||[],o=s?.languages||[],w="184-042-518",L=["online","online","away","online","dnd","away","offline","offline","offline"],F=he.map((v,x)=>({...v,status:L[x%L.length]})),O=F.filter(v=>v.status!=="offline"),q=F.filter(v=>v.status==="offline"),R=v=>`<li class="icq-contact">${X(ge[v.status])}<span>${a(v.name)}</span></li>`,$=(v,x)=>x?`<div class="icq-field"><span class="icq-field__k">${a(v)}</span><span class="icq-field__v">${a(x)}</span></div>`:"",M=[{id:"main",label:"Main",body:`
        ${$("Nickname",h)}
        ${$("First Name",b)}
        ${$("Last Name",d)}
        ${$("ICQ#",w)}
        ${$("Email","me@diegonmarcos.com")}
        ${$("Headline",s?.profile.headline||"")}`},{id:"home",label:"Home",body:`
        ${$("City",n)}
        ${$("Country",p)}
        ${$("Homepage",s?.profile.url||"linktree.diegonmarcos.com")}
        ${o.length?`<div class="icq-field"><span class="icq-field__k">Languages</span><span class="icq-field__v">${o.map(v=>a(v.name)).join(", ")}</span></div>`:""}`},{id:"work",label:"Work",body:m?`
        ${$("Company",m.company)}
        ${$("Title",m.title)}
        ${$("Since",m.dates)}
        ${$("Location",m.location||"")}`:'<p class="icq-empty">No work info.</p>'},{id:"about",label:"About",body:E?`<p class="icq-about">${a(E)}</p>`:'<p class="icq-empty">No about info.</p>'},{id:"interests",label:"Interests",body:D.length?`<div class="icq-interests">${D.map(v=>`<span class="icq-chip">${a(v)}</span>`).join("")}</div>`:'<p class="icq-empty">No interests listed.</p>'}],G='<span class="icq-win__btns"><i>_</i><i>\u25A1</i><i>\u2715</i></span>';e.innerHTML=`
    <div class="icq-desk">
      <!-- Contact list window -->
      <div class="icq-win icq-win--list">
        <div class="icq-win__bar">${X("#ffffff")}<span class="icq-win__title">ICQ</span>${G}</div>
        <div class="icq-list">
          <div class="icq-group icq-group--online">Online (${O.length})</div>
          <ul>${O.map(R).join("")}</ul>
          <div class="icq-group icq-group--offline">Offline (${q.length})</div>
          <ul>${q.map(R).join("")}</ul>
        </div>
        <div class="icq-list__foot">${X(ge.online)}<span>Online</span><span class="icq-uin">#${w}</span></div>
      </div>

      <!-- User details window -->
      <div class="icq-win icq-win--details">
        <div class="icq-win__bar icq-win__bar--alt">${X("#ffffff")}<span class="icq-win__title">User Details \u2014 ${a(h)}</span>${G}</div>
        <div class="icq-detail">
          <div class="icq-detail__head">
            <div class="icq-detail__avatar">${a(se(g))}</div>
            <div>
              <div class="icq-detail__name">${a(g)}</div>
              <div class="icq-detail__nick">"${a(h)}" \xB7 #${w}</div>
            </div>
          </div>
          <div class="icq-tabs">
            ${M.map((v,x)=>`<button class="icq-tab${x===0?" is-active":""}" data-icq-pane="${v.id}">${v.label}</button>`).join("")}
          </div>
          ${M.map((v,x)=>`<div class="icq-pane${x===0?" is-active":""}" data-icq-pane="${v.id}">${v.body}</div>`).join("")}
        </div>
      </div>
    </div>`,e.querySelectorAll(".icq-tab").forEach(v=>{v.addEventListener("click",()=>{let x=v.dataset.icqPane;e.querySelectorAll(".icq-tab").forEach(B=>B.classList.toggle("is-active",B===v)),e.querySelectorAll(".icq-pane").forEach(B=>B.classList.toggle("is-active",B.dataset.icqPane===x))})})}function Ue(){let e=document.getElementById("me-view");if(!e)return;let t=globalThis.PORTAL_DATA||{},s=t.instagram,c=t.linkedin,g=c?.profile.name||s?.profile.name||"Diego Nepomuceno Marcos",h=c?.profile.headline||"",b=c?.profile.location||"",d=s?.profile.bio||"",i=c?.profile.photo||s?.profile.photo,n=globalThis.PORTAL_DATA?.tidal,p=[{theme:"linkedin",label:"LinkedIn",meta:c?`${c.profile.connections} connections \xB7 ${c.profile.followers.toLocaleString()} followers`:"profile",color:"#0a66c2"},{theme:"instagram",label:"Instagram",meta:s?`${s.profile.followers.toLocaleString()} followers \xB7 ${s.profile.posts} post${s.profile.posts===1?"":"s"}`:"profile",color:"#dc2743"},{theme:"pinterest",label:"Pinterest",meta:"boards & pins",color:"#e60023"},{theme:"tidal",label:"TIDAL",meta:n?`${n.profile.playlists} playlists`:"playlists",color:"#00ffff"},{theme:"strava",label:"Strava",meta:"activities & routes",color:"#fc5200"},{theme:"youtube",label:"YouTube",meta:"playlists & videos",color:"#ff0000"},{theme:"orkut",label:"Orkut",meta:"the classic profile",color:"#e9008c"},{theme:"icq",label:"ICQ",meta:"retro IM \xB7 user details",color:"#0a870a"},{theme:"shelter",label:"Shelter",meta:"books & vinyl \xB7 3D",color:"#8b6914"}];e.innerHTML=`
    <div class="me-hub">
      <div class="me-card">
        ${i?`<img class="me-avatar" src="${a(i)}" alt="${a(g)}">`:'<div class="me-avatar"></div>'}
        <h1 class="me-name">${a(g)}</h1>
        ${h?`<p class="me-headline">${a(h)}</p>`:""}
        ${b?`<p class="me-loc">${a(b)}</p>`:""}
        ${d?`<p class="me-bio">${a(d)}</p>`:""}
      </div>
      <div class="me-links">
        ${p.map(m=>`
          <button class="me-link" data-goto="${m.theme}" style="--accent:${m.color}">
            <span class="me-link__dot"></span>
            <span class="me-link__body">
              <span class="me-link__name">${m.label}</span>
              <span class="me-link__meta">${a(m.meta)}</span>
            </span>
            <span class="me-link__arrow">\u2192</span>
          </button>`).join("")}
      </div>
    </div>`,e.querySelectorAll(".me-link").forEach(m=>m.addEventListener("click",()=>_e(m.dataset.goto)))}var ve=!1;function Ye(){let e=document.getElementById("shelter-view");if(!e||ve)return;e.innerHTML='<div class="view--shelter__loading">building shelter\u2026</div>';let t=globalThis.PORTAL_DATA?.shelter;if(!t?.books?.length){e.innerHTML='<div class="view--shelter__error">no data</div>';return}ve=!0;function s(c){e.innerHTML="";let g=e.clientWidth||900,h=e.clientHeight||600,b=c.WebGLRenderer,d=new b({antialias:!0,alpha:!1});d.setSize(g,h),d.setPixelRatio(Math.min(window.devicePixelRatio,2)),d.shadowMap.enabled=!0,e.appendChild(d.domElement);let i=c,n=new i.Scene;n.background=new i.Color(1707781),n.fog=new i.Fog(1707781,10,22);let p=new i.PerspectiveCamera(48,g/h,.1,100);p.position.set(2.5,1.8,7.5),p.lookAt(0,.3,0),n.add(new i.AmbientLight(16775399,.6));let m=new i.PointLight(16768426,2.5,22);m.position.set(2,6,5),m.castShadow=!0,n.add(m);let E=new i.PointLight(11189247,.5,15);E.position.set(-5,2,3),n.add(E);let D=new i.PointLight(16750916,1,6);D.position.set(0,.8,-.2),n.add(D);function o(y,T,C,H,I,l,_,A=!1){let j=new i.Mesh(new i.BoxGeometry(y,T,C),H);j.position.set(I,l,_),A&&(j.castShadow=!0,j.receiveShadow=!0),n.add(j)}let w=new i.MeshLambertMaterial({color:9136404}),L=new i.MeshLambertMaterial({color:6042391}),F=new i.MeshLambertMaterial({color:12884540}),O=new i.MeshLambertMaterial({color:7029286});o(10,.15,6,O,0,-1.5,0,!0),o(10,4.5,.2,w,0,.5,-2.2),o(.2,4.5,4.5,w,-4.2,.5,-.1),o(.2,4.5,4.5,L,4.2,.5,-.1),o(.25,4.5,.25,L,-3.9,.5,1.8),o(.25,4.5,.25,L,3.9,.5,1.8),o(10.5,.3,6,L,0,2.85,-.2),o(10.5,.2,.2,L,0,2.6,1.9);let q=[-.85,-.05,.75,1.55];for(let y of q)o(7,.07,.38,F,0,y,-.6,!0);let R=new i.TextureLoader;R.crossOrigin="anonymous";let $=5;for(let y=0;y<4;y++){let T=q[y];for(let C=0;C<$;C++){let H=t.books[(y*$+C)%t.books.length],I=-2.8+C*1.4,l=T+.38,_=-.6,A=new i.Color(H.spine),j=[new i.MeshLambertMaterial({color:A}),new i.MeshLambertMaterial({color:A}),new i.MeshLambertMaterial({color:16117992}),new i.MeshLambertMaterial({color:16117992}),new i.MeshLambertMaterial({color:A}),new i.MeshLambertMaterial({color:A})],N=new i.Mesh(new i.BoxGeometry(.23,.68,.16),j);N.position.set(I,l,_),N.castShadow=!0,n.add(N),R.load(`https://covers.openlibrary.org/b/isbn/${H.isbn}-M.jpg`,V=>{V.minFilter=i.LinearFilter,j[4]=new i.MeshLambertMaterial({map:V}),N.material=j})}}let M=3.5;o(.06,2,1.9,L,M+1,-.2,-.5),o(1.1,.07,1.9,L,M+.45,-1.2,-.5),o(1.1,.07,1.9,L,M+.45,.8,-.5),o(1.1,2,.07,L,M+.45,-.2,.45),o(1.1,2,.07,L,M+.45,-.2,-1.45);let G=Math.min(t.vinyls.length,10);for(let y=0;y<G;y++){let T=t.vinyls[y],C=M+.08+y*.09,H=[new i.MeshLambertMaterial({color:new i.Color(T.color)}),new i.MeshLambertMaterial({color:new i.Color(T.color)}),new i.MeshLambertMaterial({color:15658734}),new i.MeshLambertMaterial({color:15658734}),new i.MeshLambertMaterial({color:new i.Color(T.color)}),new i.MeshLambertMaterial({color:new i.Color(T.color)})],I=new i.Mesh(new i.BoxGeometry(.025,.76,.76),H);I.position.set(C,-.2,-.5),n.add(I),R.load(`https://coverartarchive.org/release/${T.mbid}/front-250`,l=>{l.minFilter=i.LinearFilter,H[4]=new i.MeshLambertMaterial({map:l}),I.material=H})}let v=0,x=0;function B(){v=requestAnimationFrame(B),x+=.004,p.position.x=Math.sin(x)*.8+2.5,p.lookAt(0,.3,0),d.render(n,p)}B(),new window.ResizeObserver(()=>{let y=e.clientWidth,T=e.clientHeight;d.setSize(y,T),p.aspect=y/T,p.updateProjectionMatrix()}).observe(e)}if(window.THREE)s(window.THREE);else{let c=document.createElement("script");c.src="https://cdn.jsdelivr.net/npm/three@0.170.0/build/three.min.js",c.onload=()=>s(window.THREE),c.onerror=()=>{e.innerHTML='<div class="view--shelter__error">three.js failed to load</div>'},document.head.appendChild(c)}}var We=["myprofile","orkut","instagram","linkedin","pinterest","tidal","strava","youtube","icq","shelter"];function Ve(e){return e==="myprofile"?"./":`${e}.html`}function te(e){document.documentElement.setAttribute("data-theme",e),document.querySelectorAll("[data-theme-btn]").forEach(t=>{t.classList.toggle("is-active",t.dataset.themeBtn===e)}),window.scrollTo(0,0)}function _e(e,t=!0){te(e),t&&history.pushState({theme:e},"",Ve(e))}function Qe(){let e=document.documentElement.dataset.theme||"myprofile";te(We.includes(e)?e:"myprofile"),document.querySelectorAll("[data-theme-btn]").forEach(t=>{t.addEventListener("click",()=>_e(t.dataset.themeBtn))}),window.addEventListener("popstate",t=>{let s=t.state?.theme||"myprofile";te(s)})}function ue(){Ee(),Ce(),je(),De(),qe(),Ie(),Re(),Ne(),Fe(),Oe(),ze(),Ge(),Ue(),Ye(),Qe(),setTimeout(()=>{document.querySelectorAll(".trust-meter__fill").forEach(e=>{e.style.transition="width 1.2s cubic-bezier(0.16, 1, 0.3, 1)"})},300)}async function be(){let e=document.getElementById("theme-switch"),t=[...document.querySelectorAll("[data-theme-btn]")],s=document.documentElement.dataset.theme??"";t.find(p=>p.dataset.themeBtn!==s)?.click();let g=document.documentElement.dataset.theme!==s;g&&s&&te(s);let h="none",b=[],d={};try{h=navigator.serviceWorker?.controller?.scriptURL??"none",b=(await navigator.serviceWorker?.getRegistrations?.()??[]).map(m=>[m.installing&&"installing",m.waiting&&"waiting",m.active&&`active:${m.active.scriptURL}`].filter(Boolean).join(","));for(let m of await caches.keys())d[m]=(await(await caches.open(m)).keys()).length}catch{}let i="n/a";if(e){let p=e.getBoundingClientRect(),m=document.elementFromPoint(p.left+p.width/2,p.top+p.height/2);i=`<${m?.tagName}.${(m?.className||"").toString().trim()}> inNav:${e.contains(m)}`}let n={url:location.href,theme:document.documentElement.dataset.theme,navButtons:t.length,navWired:g,swController:h,swRegistrations:b,caches:d,navHitTest:i,ua:navigator.userAgent};return console.info("[mySocials debug]",JSON.stringify(n)),n}window.__debugReport=be;document.readyState==="loading"?document.addEventListener("DOMContentLoaded",ue):ue();(/\bdebug\b/.test(location.search)||/\bdebug\b/.test(location.hash))&&setTimeout(()=>{be()},500);})();
