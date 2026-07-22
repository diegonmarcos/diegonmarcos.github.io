(()=>{var y=["#e8508a","#4a8aff","#3abb78","#8a6aff","#ff8a4a","#4ac0ff","#ff4a8a","#50c878","#ffa040","#8080ff","#ff6060","#40c0c0","#c060ff","#ff9060","#60b0ff"],ue=[{name:"Ana Silva",initial:"A",color:y[0]},{name:"Bruno Costa",initial:"B",color:y[1]},{name:"Carla Souza",initial:"C",color:y[2]},{name:"Daniel Lima",initial:"D",color:y[3]},{name:"Elena Torres",initial:"E",color:y[4]},{name:"Felipe Gomes",initial:"F",color:y[5]},{name:"Gabi Santos",initial:"G",color:y[6]},{name:"Hugo Pereira",initial:"H",color:y[7]},{name:"Isa Oliveira",initial:"I",color:y[8]}],xe=[{author:"Ana Silva",initial:"A",color:y[0],text:"Hey Diego! Miss our coding sessions at the uni. We should catch up soon! Saudades demais!",time:"2 hours ago"},{author:"Bruno Costa",initial:"B",color:y[1],text:"Cara, vi que voce ta morando em Berlin agora! Que top! Vamos marcar uma call?",time:"5 hours ago"},{author:"Carla Souza",initial:"C",color:y[2],text:"Happy birthday atrasado!! Hope you had an amazing day. Your projects are looking incredible btw",time:"yesterday"},{author:"Felipe Gomes",initial:"F",color:y[5],text:"Mano, teu MyMaps ta INSANO. Lembra quando a gente fazia mapa no paint? kkkk Evoluimos!",time:"2 days ago"},{author:"Gabi Santos",initial:"G",color:y[6],text:'Diego!! Join our community "Linux Users Brazil" please! We need more devs like you there',time:"3 days ago"},{author:"Hugo Pereira",initial:"H",color:y[7],text:"Saw your Strava activities... beast mode! When did you start cycling?",time:"4 days ago"},{author:"Isa Oliveira",initial:"I",color:y[8],text:"Testimonial request sent! You were the best partner for the compiler project, forever grateful",time:"1 week ago"}],Ae=[{name:"Eu odeio acordar cedo",members:1247893,emoji:"\u{1F634}",color:"#8a6aff"},{name:"NixOS Brasil",members:3420,emoji:"\u2744\uFE0F",color:"#4a8aff"},{name:"Linux Users",members:89340,emoji:"\u{1F427}",color:"#3abb78"},{name:"Cycling Addicts",members:45200,emoji:"\u{1F6B4}",color:"#ff8a4a"},{name:"Self-hosted Everything",members:12800,emoji:"\u{1F5A5}\uFE0F",color:"#4ac0ff"},{name:"Saudades do Orkut",members:892340,emoji:"\u{1F62D}",color:"#e8508a"},{name:"Maps & Geography",members:23100,emoji:"\u{1F30D}",color:"#50c878"},{name:"Berlin Brasileiros",members:8900,emoji:"\u{1F1E7}\u{1F1F7}",color:"#ffa040"},{name:"Coffee > Sleep",members:456e3,emoji:"\u2615",color:"#c08040"}],Ee=[{author:"Ana Silva",date:"Dec 2023",text:"Diego is one of those rare people who can debug your code AND your life. An incredible friend, always there when you need help. 10/10 would add as friend again."},{author:"Bruno Costa",date:"Nov 2023",text:"Known Diego since university. The guy literally automated everything in his life with NixOS. Respect the dedication. Best engineer I know, no cap."},{author:"Carla Souza",date:"Oct 2023",text:"The most creative developer I have ever worked with. His projects are not just functional, they are beautiful. An artist disguised as an engineer."},{author:"Elena Torres",date:"Sep 2023",text:"Diego helped me set up my entire self-hosted infrastructure. Refused to let me use any cloud subscription. A true freedom fighter of the internet!"}],Z=["#1a2840","#2a1840","#182838","#281828","#1a3028","#302818","#201838","#283018","#381828"];function Me(){let t=document.getElementById("friends-grid");t&&ue.forEach(e=>{let s=document.createElement("div");s.className="friend-cell",s.innerHTML=`
      <div class="friend-cell__avatar">
        <div class="friend-cell__avatar-inner" style="background:${e.color}">${e.initial}</div>
      </div>
      <span class="friend-cell__name">${e.name.split(" ")[0]}</span>
    `,t.appendChild(s)})}function De(){let t=document.getElementById("scraps-list");t&&xe.forEach(e=>{let s=document.createElement("div");s.className="scrap",s.innerHTML=`
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
    `,t.appendChild(s)})}function qe(){let t=document.getElementById("communities-grid");t&&Ae.forEach(e=>{let s=document.createElement("a");s.href="#",s.className="community-card";let n=e.members>=1e6?`${(e.members/1e6).toFixed(1)}M members`:e.members>=1e3?`${(e.members/1e3).toFixed(0)}K members`:`${e.members} members`;s.innerHTML=`
      <div class="community-card__icon" style="background:${e.color}20;color:${e.color}">${e.emoji}</div>
      <div class="community-card__body">
        <span class="community-card__name">${e.name}</span>
        <span class="community-card__members">${n}</span>
      </div>
    `,t.appendChild(s)})}function Ce(){let t=document.getElementById("testimonials-list");t&&Ee.forEach(e=>{let s=document.createElement("div");s.className="testimonial",s.innerHTML=`
      <div class="testimonial__header">
        <span class="testimonial__author">${e.author}</span>
        <span class="testimonial__date">${e.date}</span>
      </div>
      <p class="testimonial__text">${e.text}</p>
    `,t.appendChild(s)})}function Ie(){let t=document.getElementById("photo-grid");if(t)for(let e=0;e<9;e++){let s=document.createElement("div");s.className="photo-cell",s.innerHTML=`<div class="photo-cell__inner" style="background:${Z[e%Z.length]}"></div>`,t.appendChild(s)}}var C={heart:'<svg viewBox="0 0 24 24"><path d="M20.8 4.6a5.5 5.5 0 0 0-7.8 0L12 5.6l-1-1a5.5 5.5 0 0 0-7.8 7.8l1 1L12 21l7.8-7.6 1-1a5.5 5.5 0 0 0 0-7.8z"/></svg>',comment:'<svg viewBox="0 0 24 24"><path d="M21 11.5a8.4 8.4 0 0 1-9 8.4 9 9 0 0 1-4-1L3 20l1.1-4.9A8.4 8.4 0 0 1 12 3a8.4 8.4 0 0 1 9 8.5z"/></svg>',share:'<svg viewBox="0 0 24 24"><line x1="22" y1="2" x2="11" y2="13"/><polygon points="22 2 15 22 11 13 2 9 22 2"/></svg>',save:'<svg viewBox="0 0 24 24"><path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"/></svg>',home:'<svg viewBox="0 0 24 24"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/></svg>',grid:'<svg viewBox="0 0 24 24"><rect x="3" y="3" width="18" height="18" rx="2"/><line x1="9" y1="3" x2="9" y2="21"/><line x1="15" y1="3" x2="15" y2="21"/><line x1="3" y1="9" x2="21" y2="9"/><line x1="3" y1="15" x2="21" y2="15"/></svg>',reels:'<svg viewBox="0 0 24 24"><rect x="3" y="3" width="18" height="18" rx="3"/><line x1="3" y1="8" x2="21" y2="8"/><line x1="8" y1="3" x2="10" y2="8"/><line x1="14" y1="3" x2="16" y2="8"/><polygon points="10 11 15 13.5 10 16" fill="currentColor" stroke="none"/></svg>',tagged:'<svg viewBox="0 0 24 24"><rect x="3" y="3" width="18" height="18" rx="3"/><circle cx="12" cy="10" r="3"/><path d="M7 18a5 5 0 0 1 10 0"/></svg>'};function j(t){let e=Z[t%Z.length],s=y[t%y.length];return`linear-gradient(135deg, ${e}, ${s})`}function a(t){return t.replace(/[&<>"]/g,e=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"})[e])}function Be(t){let e=0;for(let s=0;s<t.length;s++)e=e*31+t.charCodeAt(s)>>>0;return y[e%y.length]}var ae=["ana","bruno","carla","diego","elena","felipe","gabi","hugo","isa","joao","lu","marco","nina","otto","paula","rafa","sofia","tiago","vera","yara"],ie=["","_",".","__"],de=["","br","berlin","photo","travel","x","oficial","real","99","mrx","gram"];function je(t,e){let s=t.slice();for(let n=0;s.length<e;n++){let m=ae[n%ae.length],g=ie[(n>>2)%ie.length],_=de[(n>>1)%de.length],r=Math.floor(n/(ae.length*ie.length)),v=`${m}${g}${_}${r>0?r:""}`;s.includes(v)?s.push(`${v}${s.length}`):s.push(v)}return s}function He(){let t=document.getElementById("ig-view");if(!t)return;let e=globalThis.PORTAL_DATA?.instagram;if(!e){t.innerHTML='<p class="ig-empty">Instagram data not loaded.</p>';return}let s=e.profile,n=l=>l.toLocaleString(),m=(e.highlights||[]).map((l,f)=>`
    <div class="ig-hl">
      <div class="ig-hl__ring"><div class="ig-hl__avatar" style="background:${j(f)}"><span class="ig-hl__emoji">${l.emoji}</span></div></div>
      <span class="ig-hl__name">${a(l.label)}</span>
    </div>`).join(""),g=(l,f)=>`
    <a class="ig-tile" href="${a(l.url)}" target="_blank" rel="noopener" style="background:${j(l.url.length)}">
      <span class="ig-tile__cap">${a(l.caption||l.url.replace("https://www.instagram.com/",""))}</span>
      <span class="ig-tile__badge">${f}</span>
    </a>`,_=e.saved.length?e.saved.map(l=>g(l,"\u{1F516}")).join(""):'<p class="ig-empty">Nothing saved.</p>',r=e.liked.length?e.liked.map(l=>g(l,"\u2764\uFE0F")).join(""):'<p class="ig-empty">No likes.</p>',v=l=>Number(l.match(/(\d+)(?=\.\w+$)/)?.[1]||0),o=e.posts.slice().sort((l,f)=>v(f.media)-v(l.media)),d=30,u=[...e.saved,...e.liked].map(l=>l.caption).filter(Boolean),x=o.map((l,f)=>`<a class="ig-tile" href="#" data-post-idx="${f}"><img src="${l.media}" alt="post"></a>`),c=Array.from({length:Math.max(0,d-x.length)},(l,f)=>`
    <a class="ig-tile ig-tile--post" href="#" style="background:${j(f)}">
      <span class="ig-tile__cap">${a(u[f%(u.length||1)]||"")}</span>
    </a>`),L=x.length||c.length?[...x,...c].join(""):'<p class="ig-empty">No posts yet.</p>',k='<svg class="ig-tile__ov" viewBox="0 0 24 24"><polygon points="10 8 16 12 10 16 10 8" fill="currentColor" stroke="none"/></svg>',H=Array.from({length:12},(l,f)=>`
    <a class="ig-tile ig-tile--post" href="#" style="background:${j(f+5)}">${k}
      <span class="ig-tile__cap">${a(u[(f+2)%(u.length||1)]||"")}</span>
    </a>`).join(""),R=Array.from({length:9},(l,f)=>`
    <a class="ig-tile ig-tile--post" href="#" style="background:${j(f+9)}">
      <span class="ig-tile__badge">@${a(s.username)}</span>
    </a>`).join(""),B=e.comments.length?e.comments.map(l=>`
      <div class="ig-comment">
        <div class="ig-comment__text">${a(l.text)}</div>
        <div class="ig-comment__meta">${l.owner?"@"+a(l.owner)+" \xB7 ":""}${a(l.time||"")}</div>
      </div>`).join(""):'<p class="ig-empty">No comments.</p>',E=l=>`<div class="ig-grid">${l}</div>`,P=`<div class="ig-head__avatar ig-head__avatar--ph">${a(ee(s.name))}</div>`;t.innerHTML=`
    <nav class="ig-nav">
      <div class="ig-nav__inner">
        <a href="#" class="ig-nav__logo">My Socials</a>
        <div class="ig-nav__search"><input placeholder="Search"></div>
        <div class="ig-nav__icons">${C.home}${C.heart}${C.comment}${C.share}</div>
      </div>
    </nav>
    <div class="ig-page">
      <header class="ig-head">
        <div class="ig-head__user">${a(s.username)}</div>
        <div class="ig-head__row">
          ${P}
          <div class="ig-head__stats">
            <div class="ig-head__stat"><strong>${n(s.posts)}</strong><span>posts</span></div>
            <div class="ig-head__stat" data-modal="followers"><strong>${n(s.followers)}</strong><span>followers</span></div>
            <div class="ig-head__stat" data-modal="following"><strong>${n(s.following)}</strong><span>following</span></div>
          </div>
        </div>
        <div class="ig-head__name">${a(s.name)}</div>
        <div class="ig-head__bio">${a(s.bio)}</div>
        <div class="ig-head__actions">
          <span class="ig-head__btn ig-head__btn--primary">Follow</span>
          <span class="ig-head__btn">Message</span>
        </div>
      </header>

      ${m?`<div class="ig-highlights">${m}</div>`:""}

      <div class="ig-tabs">
        <div class="ig-tab is-active" data-pane="posts">${C.grid} Posts</div>
        <div class="ig-tab" data-pane="reels">${C.reels} Reels</div>
        <div class="ig-tab" data-pane="tagged">${C.tagged} Tagged</div>
      </div>

      <div class="ig-subtabs">
        <button class="ig-pill" data-pane="saved">${C.save}<span>Saved</span><em>${n(e.saved.length)}</em></button>
        <button class="ig-pill" data-pane="liked">${C.heart}<span>Liked</span><em>${n(e.liked.length)}</em></button>
        <button class="ig-pill" data-pane="comments">${C.comment}<span>Comments</span><em>${n(e.comments.length)}</em></button>
      </div>

      <div class="ig-pane is-active" data-pane="posts">${E(L)}</div>
      <div class="ig-pane" data-pane="reels">${E(H)}</div>
      <div class="ig-pane" data-pane="tagged">${E(R)}</div>
      <div class="ig-pane" data-pane="saved">${E(_)}</div>
      <div class="ig-pane" data-pane="liked">${E(r)}</div>
      <div class="ig-pane" data-pane="comments"><div class="ig-comments">${B}</div></div>
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
    </div>`,t.querySelectorAll(".ig-tab, .ig-pill").forEach(l=>{l.addEventListener("click",()=>{let f=l.dataset.pane;t.querySelectorAll(".ig-tab, .ig-pill").forEach(q=>q.classList.toggle("is-active",q===l)),t.querySelectorAll(".ig-pane").forEach(q=>q.classList.toggle("is-active",q.dataset.pane===f))})});let b=t.querySelector("#ig-modal"),S=l=>{let f=l==="followers"?e.followers:e.following,q=l==="followers"?s.followers:s.following,F=je(f,q);t.querySelector("#ig-modal-title").textContent=l==="followers"?"Followers":"Following",t.querySelector("#ig-modal-sub").textContent=`${n(q)} ${l}`,t.querySelector("#ig-modal-list").innerHTML=F.map(U=>`
      <div class="ig-row">
        <div class="ig-row__avatar" style="background:${Be(U)}">${a(U.charAt(0).toUpperCase())}</div>
        <a class="ig-row__handle" href="https://www.instagram.com/${a(U)}" target="_blank" rel="noopener">${a(U)}</a>
        <span class="ig-row__follow">Follow</span>
      </div>`).join(""),b.classList.add("is-open")};t.querySelectorAll(".ig-head__stat[data-modal]").forEach(l=>l.addEventListener("click",()=>S(l.dataset.modal)));let N=()=>b.classList.remove("is-open");t.querySelector("#ig-modal-close").addEventListener("click",N),b.addEventListener("click",l=>{l.target===b&&N()});let h=t.querySelector("#ig-post-modal"),T=t.querySelector("#ig-post-img"),M=t.querySelector("#ig-post-dots"),z=t.querySelector("#ig-post-comments"),D=[],I=0,O=()=>{T.src=D[I],M.innerHTML=D.length>1?D.map((l,f)=>`<span class="ig-post-modal__dot${f===I?" is-active":""}"></span>`).join(""):""},te=l=>{let f=o[l];f&&(D=f.media_all?.length?f.media_all:[f.media],I=0,O(),z.innerHTML='<p class="ig-empty">No per-post comment data in this export.</p>',h.classList.add("is-open"))};t.querySelectorAll(".ig-tile[data-post-idx]").forEach(l=>l.addEventListener("click",f=>{f.preventDefault(),te(Number(l.dataset.postIdx))})),t.querySelector("#ig-post-prev").addEventListener("click",()=>{I=(I-1+D.length)%D.length,O()}),t.querySelector("#ig-post-next").addEventListener("click",()=>{I=(I+1)%D.length,O()});let Y=()=>h.classList.remove("is-open");t.querySelector("#ig-post-modal-close").addEventListener("click",Y),h.addEventListener("click",l=>{l.target===h&&Y()})}var G={home:'<svg viewBox="0 0 24 24"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/></svg>',net:'<svg viewBox="0 0 24 24"><circle cx="9" cy="7" r="4"/><path d="M17 11a4 4 0 1 0-3-6.6M1 21v-2a4 4 0 0 1 4-4h8a4 4 0 0 1 4 4v2M17 15a4 4 0 0 1 4 4v2"/></svg>',jobs:'<svg viewBox="0 0 24 24"><rect x="2" y="7" width="20" height="14" rx="2"/><path d="M8 7V5a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"/></svg>',msg:'<svg viewBox="0 0 24 24"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>',bell:'<svg viewBox="0 0 24 24"><path d="M18 8a6 6 0 1 0-12 0c0 7-3 9-3 9h18s-3-2-3-9M13.7 21a2 2 0 0 1-3.4 0"/></svg>',like:'<svg viewBox="0 0 24 24"><path d="M14 9V5a3 3 0 0 0-6 0v4H5a2 2 0 0 0-2 2l1 7a2 2 0 0 0 2 2h9a2 2 0 0 0 2-2l1-7a2 2 0 0 0-2-2z"/></svg>',comment:'<svg viewBox="0 0 24 24"><path d="M21 11.5a8.4 8.4 0 0 1-9 8.4 9 9 0 0 1-4-1L3 20l1.1-4.9A8.4 8.4 0 0 1 12 3a8.4 8.4 0 0 1 9 8.5z"/></svg>',repost:'<svg viewBox="0 0 24 24"><polyline points="17 1 21 5 17 9"/><path d="M3 11V9a4 4 0 0 1 4-4h14M7 23l-4-4 4-4M21 13v2a4 4 0 0 1-4 4H3"/></svg>',send:'<svg viewBox="0 0 24 24"><line x1="22" y1="2" x2="11" y2="13"/><polygon points="22 2 15 22 11 13 2 9 22 2"/></svg>'};function ne(t){let e=n=>a(n).replace(/(https?:\/\/\S+)/g,'<a href="$1" target="_blank" rel="noopener">$1</a>');return t.split(/\s*-{3,}\s*/).map(n=>n.trim()).filter(Boolean).map(n=>{let m=n.match(/^@(\S+)\s+([\s\S]*)$/),g=m?.[1],_=(m?m[2]:n).trim().replace(/^>\s*/,""),r=g?`<div class="li-desc__label">${a(g)}</div>`:"",v=_.split(/\s-\s/).map(o=>o.trim()).filter(Boolean);return r+(v.length>=3?`<ul class="li-desc__list">${v.map(o=>`<li>${e(o)}</li>`).join("")}</ul>`:`<p class="li-desc__p">${e(_)}</p>`)}).join("")}function ee(t){return t.split(/\s+/).filter(Boolean).slice(0,2).map(e=>e.charAt(0).toUpperCase()).join("")}var W={experience:3,education:3,skills:12,projects:2};function Q(t,e,s,n="more"){if(t.length<=e)return t.map(s).join("");let m=t.slice(0,e).map(s).join(""),g=t.slice(e).map(s).join(""),_=`Show ${t.length-e} ${n}`;return`${m}<div class="li-more-wrap">${g}</div><button type="button" class="li-more" aria-expanded="false" data-label="${_}">${_}</button>`}function Pe(){let t=document.getElementById("li-view");if(!t)return;let e=globalThis.PORTAL_DATA?.linkedin;if(!e){t.innerHTML='<p class="li-empty">LinkedIn data not loaded.</p>';return}let s=e.profile,n=(c,L)=>`<div class="li-nav__item">${c}<span>${L}</span></div>`,m=s.photo?`<div class="li-phead__avatar li-phead__avatar--img"><img src="${s.photo}" alt="${a(s.name)}"></div>`:`<div class="li-phead__avatar" style="background:${y[3]}">${a(ee(s.name))}</div>`,g=(c,L)=>`<section class="li-card li-section"><h2 class="li-section__title">${c}</h2>${L}</section>`,_='<p class="li-need">Not in the saved profile page \u2014 add from your LinkedIn data export (Settings \u2192 Get a copy of your data).</p>',r=e.experience.length?Q(e.experience,W.experience,c=>`
      <div class="li-item">
        <div class="li-item__logo">${a(c.company.charAt(0))}</div>
        <div>
          <div class="li-item__title">${a(c.title)}</div>
          <div class="li-item__sub">${a(c.company)}</div>
          <div class="li-item__meta">${a(c.dates)}${c.location?" \xB7 "+a(c.location):""}</div>
          ${c.description?`<div class="li-item__desc">${ne(c.description)}</div>`:""}
        </div>
      </div>`,"roles"):_,v=e.education.length?Q(e.education,W.education,c=>`
      <div class="li-item">
        <div class="li-item__logo">${a(c.school.charAt(0))}</div>
        <div>
          <div class="li-item__title">${a(c.school)}</div>
          <div class="li-item__sub">${a(c.degree)}</div>
          <div class="li-item__meta">${a(c.dates)}</div>
        </div>
      </div>`,"schools"):_,o=e.skills.length?`<div class="li-skills">${Q(e.skills,W.skills,c=>`<span class="li-skill">${a(c)}</span>`,"skills")}</div>`:_,d=e.about?`<div class="li-about">${ne(e.about)}</div>`:_,u=e.languages.length?e.languages.map(c=>`
      <div class="li-lang">
        <span class="li-lang__name">${a(c.name)}</span>
        <span class="li-lang__level">${a(c.proficiency)}</span>
      </div>`).join(""):_,x=e.projects.length?Q(e.projects,W.projects,c=>`
      <div class="li-item li-item--proj">
        <div>
          <div class="li-item__title">${a(c.title)}${c.url?` \xB7 <a href="${a(c.url)}" target="_blank" rel="noopener">link</a>`:""}</div>
          ${c.dates?`<div class="li-item__meta">${a(c.dates)}</div>`:""}
          <div class="li-item__desc">${ne(c.description)}</div>
        </div>
      </div>`,"projects"):_;t.innerHTML=`
    <nav class="li-nav">
      <div class="li-nav__inner">
        <span class="li-nav__logo">in</span>
        <div class="li-nav__search"><input placeholder="Search"></div>
        <div class="li-nav__items">
          ${n(G.home,"Home")}
          ${n(G.net,"Network")}
          ${n(G.jobs,"Jobs")}
          ${n(G.msg,"Messaging")}
          ${n(G.bell,"Notifications")}
        </div>
      </div>
    </nav>
    <div class="li-prof">
      <div class="li-prof__main">
        <section class="li-card li-phead">
          <div class="li-phead__banner"></div>
          ${m}
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
        ${g("About",d)}
        ${g("Experience",r)}
        ${g("Education",v)}
        ${g("Skills",o)}
        ${g("Projects",x)}
        ${g("Languages",u)}
      </div>
      <aside class="li-prof__rail">
        <div class="li-card li-side">
          <div class="li-side__title">Profile</div>
          <div class="li-side__row"><span>Current</span><strong>${a(s.current)}</strong></div>
          <div class="li-side__row"><span>Location</span><strong>${a(s.location.split(",")[0])}</strong></div>
          <div class="li-side__row"><span>Profile</span><a href="https://${a(s.url)}" target="_blank" rel="noopener">${a(s.url)}</a></div>
        </div>
      </aside>
    </div>`,t.querySelectorAll(".li-more").forEach(c=>{c.addEventListener("click",()=>{let L=c.previousElementSibling;if(!(L instanceof HTMLElement)||!L.classList.contains("li-more-wrap"))return;let k=L.classList.toggle("li-more-wrap--open");c.setAttribute("aria-expanded",String(k)),c.textContent=k?"Show less":c.dataset.label??"Show more"})})}var me={bell:'<svg viewBox="0 0 24 24"><path d="M18 8a6 6 0 1 0-12 0c0 7-3 9-3 9h18s-3-2-3-9M13.7 21a2 2 0 0 1-3.4 0"/></svg>',chat:'<svg viewBox="0 0 24 24"><path d="M21 11.5a8.4 8.4 0 0 1-9 8.4 9 9 0 0 1-4-1L3 20l1.1-4.9A8.4 8.4 0 0 1 12 3a8.4 8.4 0 0 1 9 8.5z"/></svg>'},pe=[220,300,180,340,260,200,320,240,280];function Ne(){let t=document.getElementById("pin-view");if(!t)return;let e=globalThis.PORTAL_DATA?.pinterest,s=e?.boards??[],n=e?.profile,m=["30% 30%","75% 15%","20% 80%","80% 75%"],g=(r,v)=>`
    <div class="pin-card__grid">
      ${m.map((o,d)=>`<div class="pin-card__cell pin-card__cell--${d}" style="background-image:url('${a(r)}');background-position:${o}" role="img" aria-label="${a(v)}"></div>`).join("")}
    </div>`,_=s.map((r,v)=>{let o=pe[v%pe.length],d=r.cover?g(r.cover,r.name):`<div class="pin-card__ph" style="height:${o}px;background:${j(v)}">\u{1F4CC}</div>`;return`
    <a class="pin-card" href="https://www.pinterest.com/${a(n?.username||"diegonmarcos")}/${a(r.name.toLowerCase().replace(/[^a-z0-9]+/g,"-"))}/" target="_blank" rel="noopener">
      <div class="pin-card__media">
        ${d}
        <div class="pin-card__overlay"><span class="pin-card__save">${r.pins} pins</span></div>
      </div>
      <div class="pin-card__title">${a(r.name)}</div>
      ${r.desc?`<div class="pin-card__meta">${a(r.desc)}</div>`:`<div class="pin-card__meta">${r.pins} pins</div>`}
    </a>`}).join("");t.innerHTML=`
    <nav class="pin-nav">
      <div class="pin-nav__inner">
        <span class="pin-nav__logo">P</span>
        <a href="#" class="pin-nav__tab pin-nav__tab--active">Boards</a>
        <a href="https://www.pinterest.com/${a(n?.username||"diegonmarcos")}/" target="_blank" rel="noopener" class="pin-nav__tab">Profile</a>
        <div class="pin-nav__search"><input placeholder="Search for ideas"></div>
        <div class="pin-nav__icons">${me.bell}${me.chat}<span class="pin-nav__avatar" style="background:${y[3]}">D</span></div>
      </div>
    </nav>
    <div class="pin-head">@${a(n?.username||"diegonmarcos")} \xB7 <strong>${n?.boards??s.length}</strong> boards \xB7 <strong>${n?.pins??0}</strong> pins</div>
    <div class="pin-board">${_||'<p class="pin-empty">No boards.</p>'}</div>`}function Re(){let t=document.getElementById("tid-view");if(!t)return;let e=globalThis.PORTAL_DATA?.tidal,s=e?.playlists??[],n=e?.folders??[],m=e?.profile,g=o=>{if(!o)return"";let d=Math.floor(o/3600),u=Math.round(o%3600/60);return d?`${d}h ${u}m`:`${u} min`},_=`https://tidal.com/@${a(m?.username||"diegonmarcos")}`,r=s.map((o,d)=>{let u=o.cover?`<img class="tid-card__img" src="${a(o.cover)}" alt="${a(o.name)}" loading="lazy">`:`<div class="tid-card__ph" style="background:${j(d)}">\u266B</div>`;return`
    <a class="tid-card" href="${o.url?a(o.url):_}" target="_blank" rel="noopener">
      <div class="tid-card__cover">${u}<span class="tid-card__play">\u25B6</span></div>
      <div class="tid-card__name">${a(o.name)}</div>
      <div class="tid-card__meta">${o.tracks} tracks${o.duration_s?" \xB7 "+g(o.duration_s):""}</div>
    </a>`}).join(""),v=n.map(o=>`<span class="tid-folder">${a(o.name)}<em>${o.playlists}</em></span>`).join("");t.innerHTML=`
    <nav class="tid-nav">
      <div class="tid-nav__inner">
        <span class="tid-nav__logo">TIDAL</span>
        <div class="tid-nav__search"><input placeholder="Search"></div>
        <span class="tid-nav__user">@${a(m?.username||"diegonmarcos")}</span>
      </div>
    </nav>
    <div class="tid-main">
      <header class="tid-head">
        <div class="tid-head__title">My Playlists</div>
        <div class="tid-head__sub">${m?.playlists??s.length} playlists \xB7 ${m?.tracks??0} tracks</div>
      </header>
      ${v?`<div class="tid-folders">${v}</div>`:""}
      <div class="tid-grid">${r||'<p class="tid-empty">Playlists load once the Tidal profile ID is set.</p>'}</div>
    </div>`}var J={run:"\u{1F3C3}",ride:"\u{1F6B4}",swim:"\u{1F3CA}"};function Oe(){let t=document.getElementById("str-view");if(!t)return;let e=globalThis.PORTAL_DATA?.strava,s=e?.activities??[],n=e?.profile,m=i=>i&&parseInt(i)||0,g=i=>i.split(" \u2014 ")[1]||"",_=["run","ride","swim"],r=_.reduce((i,p)=>{let $=s.filter(w=>w.type===p);return i[p]={count:$.length,distance:$.reduce((w,A)=>w+(A.distance_km||0),0),minutes:$.reduce((w,A)=>w+m(A.duration),0),elevation:$.reduce((w,A)=>w+(A.elevation_m||0),0)},i},{}),v=_.reduce((i,p)=>i+r[p].minutes,0),o=i=>`${Math.round(i/60)}h`,d=(i,p,$)=>`<div class="str-stat"><span class="str-stat__icon">${i}</span><span class="str-stat__value">${a(p)}</span><span class="str-stat__label">${$}</span></div>`,u=`
    <div class="str-dash">
      ${d("\u{1F3C3}",`${r.run.distance.toFixed(0)} km`,`${r.run.count} runs`)}
      ${d("\u{1F6B4}",`${r.ride.distance.toFixed(0)} km`,`${r.ride.count} rides`)}
      ${d("\u{1F3CA}",`${r.swim.distance.toFixed(1)} km`,`${r.swim.count} swims`)}
      ${d("\u23F1\uFE0F",o(v),"total time")}
      ${d("\u26F0\uFE0F",`${(r.run.elevation+r.ride.elevation).toLocaleString()} m`,"elevation gain")}
    </div>`,x=new Map;s.forEach(i=>{let p=Date.parse(i.date);if(!Number.isNaN(p)){let $=new Date(p).toISOString().slice(0,10);x.set($,(x.get($)||0)+1)}});let c=s.length?new Date(Math.max(...s.map(i=>Date.parse(i.date)).filter(i=>!Number.isNaN(i)))):new Date(0),L=53,k=new Date(c);k.setDate(k.getDate()-L*7),k.setDate(k.getDate()-k.getDay());let H=[];for(let i=0;i<L*7;i++){let p=new Date(k);p.setDate(p.getDate()+i);let $=p.toISOString().slice(0,10),w=x.get($)||0,A=w===0?0:w===1?1:w===2?2:3;H.push(`<span class="str-cal__cell str-cal__cell--${A}" title="${$}: ${w} activit${w===1?"y":"ies"}"></span>`)}let R=`<div class="str-cal">${H.join("")}</div>`,B=new Map;s.forEach(i=>{let p=Date.parse(i.date);if(Number.isNaN(p))return;let $=new Date(p).toISOString().slice(0,10);(B.get($)??B.set($,[]).get($)).push(i)});let E=(i,p)=>new Date(Date.UTC(i,p,1)).toLocaleDateString("en-US",{month:"long",year:"numeric",timeZone:"UTC"}),P=(i,p)=>{let $=new Date(Date.UTC(i,p,1)),w=new Date(Date.UTC(i,p+1,0)).getUTCDate(),A=$.getUTCDay(),V=["S","M","T","W","T","F","S"],we=Array.from({length:A},()=>'<span class="str-month__day str-month__day--blank"></span>'),Te=Array.from({length:w},(le,Le)=>{let re=Le+1,ke=new Date(Date.UTC(i,p,re)).toISOString().slice(0,10),ce=B.get(ke)||[],Se=ce.map(se=>`<span class="str-month__dot" style="background:${se.type==="run"?"#fc5200":se.type==="ride"?"#0a66c2":"#00b8d9"}" title="${a(se.title)}"></span>`).join("");return`<span class="str-month__day${ce.length?" has-activity":""}"><span class="str-month__num">${re}</span><span class="str-month__dots">${Se}</span></span>`});return`
      <div class="str-month__dow">${V.map(le=>`<span>${le}</span>`).join("")}</div>
      <div class="str-month__grid">${we.join("")}${Te.join("")}</div>`},b=c.getUTCFullYear(),S=c.getUTCMonth(),N=`
    <div class="str-month">
      <div class="str-month__head">
        <button class="str-month__nav" id="str-month-prev" aria-label="Previous month">&lsaquo;</button>
        <span class="str-month__label" id="str-month-label">${E(b,S)}</span>
        <button class="str-month__nav" id="str-month-next" aria-label="Next month">&rsaquo;</button>
      </div>
      <div id="str-month-body">${P(b,S)}</div>
    </div>`,h={Berlin:[52.52,13.4],Munich:[48.14,11.58],Amsterdam:[52.37,4.9],Paris:[48.86,2.35],Barcelona:[41.39,2.17],Lisbon:[38.72,-9.14],Vienna:[48.21,16.37],Prague:[50.08,14.44],Copenhagen:[55.68,12.57],Zurich:[47.37,8.54],Rome:[41.9,12.5],Porto:[41.15,-8.61],Krakow:[50.06,19.94],Budapest:[47.5,19.04],Ljubljana:[46.06,14.51],Nice:[43.7,7.27]},T=new Map;s.forEach(i=>{let p=g(i.title);p&&T.set(p,(T.get(p)||0)+1)});let M=Object.values(h).map(([i])=>i),z=Object.values(h).map(([,i])=>i),[D,I]=[Math.min(...M),Math.max(...M)],[O,te]=[Math.min(...z),Math.max(...z)],Y=(i,p)=>{let $=20+(p-O)/(te-O||1)*360,w=20+(1-(i-D)/(I-D||1))*260;return[$,w]},l=Math.max(1,...T.values()),f=[...T.entries()].map(([i,p])=>{let $=h[i];if(!$)return"";let[w,A]=Y(...$),V=5+p/l*10;return`<g class="str-map__pin"><circle cx="${w}" cy="${A}" r="${V}" /><text x="${w}" y="${A-V-4}">${a(i)} (${p})</text></g>`}).join(""),q=`<svg class="str-map" viewBox="0 0 400 300" role="img" aria-label="Cities visited">${f}</svg>`,F=(i,p)=>p?`<div class="str-card__stat"><span class="str-card__stat-value">${a(p)}</span><span class="str-card__stat-label">${i}</span></div>`:"",U=i=>`
    <div class="str-card" data-type="${i.type}">
      <div class="str-card__header">
        <div class="str-card__icon">${J[i.type]||"\u{1F3C1}"}</div>
        <div>
          <div class="str-card__title">${a(i.title)}</div>
          <div class="str-card__date">${a(i.date)}</div>
        </div>
      </div>
      <div class="str-card__stats">
        ${F("Distance",i.distance_km?`${i.distance_km} km`:"")}
        ${F("Time",i.duration||"")}
        ${F("Pace",i.pace||"")}
        ${F("Elevation",i.elevation_m?`${i.elevation_m} m`:"")}
      </div>
    </div>`,fe=s.map(U).join(""),$e=`<div class="str-head__avatar">${a(ee(n?.name||"Diego Nepomuceno Marcos"))}</div>`;t.innerHTML=`
    <nav class="str-nav">
      <div class="str-nav__inner">
        <span class="str-nav__logo">Strava</span>
        <div class="str-nav__search"><input placeholder="Search"></div>
        <span class="str-nav__user">${a(n?.name||"diegonmarcos")}</span>
      </div>
    </nav>
    <div class="str-main">
      <header class="str-head">
        ${$e}
        <div>
          <div class="str-head__name">${a(n?.name||"Diego Nepomuceno Marcos")}</div>
        </div>
        <div class="str-head__stats">
          <div class="str-head__stat"><span class="str-head__stat-value">${n?.activities??s.length}</span><span class="str-head__stat-label">Activities</span></div>
          <div class="str-head__stat"><span class="str-head__stat-value">${n?.followers??0}</span><span class="str-head__stat-label">Followers</span></div>
          <div class="str-head__stat"><span class="str-head__stat-value">${n?.following??0}</span><span class="str-head__stat-label">Following</span></div>
        </div>
      </header>

      ${u}

      <section class="str-section">
        <h3 class="str-section__title">Calendar</h3>
        ${N}
        <div class="str-cal__heatmap-label">Last 12 months</div>
        ${R}
      </section>

      ${f?`<section class="str-section">
        <h3 class="str-section__title">Map \u2014 cities visited</h3>
        ${q}
      </section>`:""}

      <div class="str-filters">
        <button class="str-filter is-active" data-type="all">All</button>
        <button class="str-filter" data-type="run">${J.run} Run</button>
        <button class="str-filter" data-type="ride">${J.ride} Ride</button>
        <button class="str-filter" data-type="swim">${J.swim} Swim</button>
      </div>

      <div class="str-feed">${fe||'<p class="str-empty">No activities yet. Strava data loads once the profile is exported.</p>'}</div>
    </div>`,t.querySelectorAll(".str-filter").forEach(i=>{i.addEventListener("click",()=>{t.querySelectorAll(".str-filter").forEach($=>$.classList.toggle("is-active",$===i));let p=i.dataset.type;t.querySelectorAll(".str-card").forEach($=>{$.style.display=p==="all"||$.dataset.type===p?"":"none"})})});let be=t.querySelector("#str-month-body"),ye=t.querySelector("#str-month-label"),oe=i=>{S+=i,S<0&&(S=11,b--),S>11&&(S=0,b++),ye.textContent=E(b,S),be.innerHTML=P(b,S)};t.querySelector("#str-month-prev").addEventListener("click",()=>oe(-1)),t.querySelector("#str-month-next").addEventListener("click",()=>oe(1))}function Fe(){let t=document.getElementById("yt-view");if(!t)return;let e=globalThis.PORTAL_DATA?.youtube,s=e?.videos??[],n=e?.playlists??[],m=e?.profile,g=(o,d)=>{let u=o.thumbnail?`<img class="yt-card__img" src="${a(o.thumbnail)}" alt="${a(o.title)}" loading="lazy">`:`<div class="yt-card__ph" style="background:${j(d)}">\u25B6</div>`;return`
    <a class="yt-card" href="${a(o.url||"#")}" target="_blank" rel="noopener">
      <div class="yt-card__thumb">${u}${o.duration?`<span class="yt-card__duration">${a(o.duration)}</span>`:""}</div>
      <div class="yt-card__title">${a(o.title)}</div>
      ${o.channel?`<div class="yt-card__channel">${a(o.channel)}</div>`:""}
      <div class="yt-card__meta">${o.views!==void 0?`${o.views.toLocaleString()} views`:""}${o.views!==void 0&&o.date?" \xB7 ":""}${o.date?a(o.date):""}</div>
    </a>`},_=n.map(o=>`
    <section class="yt-shelf">
      <div class="yt-shelf__title">${a(o.name)}</div>
      <div class="yt-shelf__row">${o.videos.map((d,u)=>g(d,u)).join("")}</div>
    </section>`).join(""),r=s.length?`<div class="yt-grid">${s.map((o,d)=>g(o,d)).join("")}</div>`:"",v=n.length||s.length;t.innerHTML=`
    <nav class="yt-nav">
      <div class="yt-nav__inner">
        <span class="yt-nav__logo">YouTube</span>
        <div class="yt-nav__search"><input placeholder="Search"></div>
        <span class="yt-nav__user">@${a(m?.channel||"diegonmarcos")}</span>
      </div>
    </nav>
    <div class="yt-main">
      <header class="yt-head">
        <div>
          <div class="yt-head__title">${a(m?.channel||"diegonmarcos")}</div>
          <div class="yt-head__sub">${m?.subscribers??0} subscribers \xB7 ${m?.videos??s.length} videos</div>
        </div>
      </header>
      ${v?`${_}${r}`:'<p class="yt-empty">No videos or playlists yet. YouTube data loads once the channel is scraped.</p>'}
    </div>`}var K=(t=!1)=>{let e=t?"#c7cbb9":"#8fbf3f",s=t?"#c7cbb9":"#ef4a2b",n=t?"#e4e4d8":"#ffd400",m=t?"#9a9d90":"#1a1a12";return`<svg class="icq-flower" viewBox="0 0 16 16" aria-hidden="true">${Array.from({length:8},(_,r)=>{let v=r*45;return`<ellipse cx="8" cy="2.9" rx="1.9" ry="2.9" fill="${r===0?s:e}" stroke="${m}" stroke-width="0.5" transform="rotate(${v} 8 8)"/>`}).join("")}<circle cx="8" cy="8" r="2.4" fill="${n}" stroke="${m}" stroke-width="0.5"/></svg>`};var ge={online:!1,away:!1,dnd:!1,offline:!0};function Ue(){let t=document.getElementById("icq-view");if(!t)return;let e=globalThis.PORTAL_DATA||{},s=e.linkedin,n=e.instagram,m=s?.profile.name||"Diego Nepomuceno Marcos",g=n?.profile.username||"diegonmarcos",_=m.split(" ")[0],r=m.split(" ").slice(1).join(" "),v=(s?.profile.location||"Berlin, Germany").split(",").map(h=>h.trim()),o=v[0]||"",d=v[v.length-1]||"",u=s?.experience?.[0],x=s?.about||n?.profile.bio||"",c=s?.skills||[],L=s?.languages||[],k="184-042-518",H=["online","online","away","online","dnd","away","offline","offline","offline"],R=ue.map((h,T)=>({...h,status:H[T%H.length]})),B=R.filter(h=>h.status!=="offline"),E=R.filter(h=>h.status==="offline"),P=h=>`<li class="icq-contact">${K(ge[h.status])}<span>${a(h.name)}</span></li>`,b=(h,T)=>T?`<div class="icq-field"><span class="icq-field__k">${a(h)}</span><span class="icq-field__v">${a(T)}</span></div>`:"",S=[{id:"main",label:"Main",body:`
        ${b("Nickname",g)}
        ${b("First Name",_)}
        ${b("Last Name",r)}
        ${b("ICQ#",k)}
        ${b("Email","me@diegonmarcos.com")}
        ${b("Headline",s?.profile.headline||"")}`},{id:"home",label:"Home",body:`
        ${b("City",o)}
        ${b("Country",d)}
        ${b("Homepage",s?.profile.url||"linktree.diegonmarcos.com")}
        ${L.length?`<div class="icq-field"><span class="icq-field__k">Languages</span><span class="icq-field__v">${L.map(h=>a(h.name)).join(", ")}</span></div>`:""}`},{id:"work",label:"Work",body:u?`
        ${b("Company",u.company)}
        ${b("Title",u.title)}
        ${b("Since",u.dates)}
        ${b("Location",u.location||"")}`:'<p class="icq-empty">No work info.</p>'},{id:"about",label:"About",body:x?`<p class="icq-about">${a(x)}</p>`:'<p class="icq-empty">No about info.</p>'},{id:"interests",label:"Interests",body:c.length?`<div class="icq-interests">${c.map(h=>`<span class="icq-chip">${a(h)}</span>`).join("")}</div>`:'<p class="icq-empty">No interests listed.</p>'}],N='<span class="icq-win__btns"><i>_</i><i>\u25A1</i><i>\u2715</i></span>';t.innerHTML=`
    <div class="icq-desk">
      <!-- Contact list window -->
      <div class="icq-win icq-win--list">
        <div class="icq-win__bar">${K("#ffffff")}<span class="icq-win__title">ICQ</span>${N}</div>
        <div class="icq-list">
          <div class="icq-group icq-group--online">Online (${B.length})</div>
          <ul>${B.map(P).join("")}</ul>
          <div class="icq-group icq-group--offline">Offline (${E.length})</div>
          <ul>${E.map(P).join("")}</ul>
        </div>
        <div class="icq-list__foot">${K(ge.online)}<span>Online</span><span class="icq-uin">#${k}</span></div>
      </div>

      <!-- User details window -->
      <div class="icq-win icq-win--details">
        <div class="icq-win__bar icq-win__bar--alt">${K("#ffffff")}<span class="icq-win__title">User Details \u2014 ${a(g)}</span>${N}</div>
        <div class="icq-detail">
          <div class="icq-detail__head">
            <div class="icq-detail__avatar">${a(ee(m))}</div>
            <div>
              <div class="icq-detail__name">${a(m)}</div>
              <div class="icq-detail__nick">"${a(g)}" \xB7 #${k}</div>
            </div>
          </div>
          <div class="icq-tabs">
            ${S.map((h,T)=>`<button class="icq-tab${T===0?" is-active":""}" data-icq-pane="${h.id}">${h.label}</button>`).join("")}
          </div>
          ${S.map((h,T)=>`<div class="icq-pane${T===0?" is-active":""}" data-icq-pane="${h.id}">${h.body}</div>`).join("")}
        </div>
      </div>
    </div>`,t.querySelectorAll(".icq-tab").forEach(h=>{h.addEventListener("click",()=>{let T=h.dataset.icqPane;t.querySelectorAll(".icq-tab").forEach(M=>M.classList.toggle("is-active",M===h)),t.querySelectorAll(".icq-pane").forEach(M=>M.classList.toggle("is-active",M.dataset.icqPane===T))})})}function Ge(){let t=document.getElementById("me-view");if(!t)return;let e=globalThis.PORTAL_DATA||{},s=e.instagram,n=e.linkedin,m=n?.profile.name||s?.profile.name||"Diego Nepomuceno Marcos",g=n?.profile.headline||"",_=n?.profile.location||"",r=s?.profile.bio||"",v=globalThis.PORTAL_DATA?.tidal,o=[{theme:"linkedin",label:"LinkedIn",meta:n?`${n.profile.connections} connections \xB7 ${n.profile.followers.toLocaleString()} followers`:"profile",color:"#0a66c2"},{theme:"instagram",label:"Instagram",meta:s?`${s.profile.followers.toLocaleString()} followers \xB7 ${s.profile.posts} post${s.profile.posts===1?"":"s"}`:"profile",color:"#dc2743"},{theme:"pinterest",label:"Pinterest",meta:"boards & pins",color:"#e60023"},{theme:"tidal",label:"TIDAL",meta:v?`${v.profile.playlists} playlists`:"playlists",color:"#00ffff"},{theme:"strava",label:"Strava",meta:"activities & routes",color:"#fc5200"},{theme:"youtube",label:"YouTube",meta:"playlists & videos",color:"#ff0000"},{theme:"orkut",label:"Orkut",meta:"the classic profile",color:"#e9008c"},{theme:"icq",label:"ICQ",meta:"retro IM \xB7 user details",color:"#0a870a"}];t.innerHTML=`
    <div class="me-hub">
      <div class="me-card">
        <div class="me-avatar"></div>
        <h1 class="me-name">${a(m)}</h1>
        ${g?`<p class="me-headline">${a(g)}</p>`:""}
        ${_?`<p class="me-loc">${a(_)}</p>`:""}
        ${r?`<p class="me-bio">${a(r)}</p>`:""}
      </div>
      <div class="me-links">
        ${o.map(d=>`
          <button class="me-link" data-goto="${d.theme}" style="--accent:${d.color}">
            <span class="me-link__dot"></span>
            <span class="me-link__body">
              <span class="me-link__name">${d.label}</span>
              <span class="me-link__meta">${a(d.meta)}</span>
            </span>
            <span class="me-link__arrow">\u2192</span>
          </button>`).join("")}
      </div>
    </div>`,t.querySelectorAll(".me-link").forEach(d=>d.addEventListener("click",()=>he(d.dataset.goto)))}var ze=["myprofile","orkut","instagram","linkedin","pinterest","tidal","strava","youtube","icq"];function Ye(t){return t==="myprofile"?"./":`${t}.html`}function X(t){document.documentElement.setAttribute("data-theme",t),document.querySelectorAll("[data-theme-btn]").forEach(e=>{e.classList.toggle("is-active",e.dataset.themeBtn===t)}),window.scrollTo(0,0)}function he(t,e=!0){X(t),e&&history.pushState({theme:t},"",Ye(t))}function Ve(){let t=document.documentElement.dataset.theme||"myprofile";X(ze.includes(t)?t:"myprofile"),document.querySelectorAll("[data-theme-btn]").forEach(e=>{e.addEventListener("click",()=>he(e.dataset.themeBtn))}),window.addEventListener("popstate",e=>{let s=e.state?.theme||"myprofile";X(s)})}function ve(){Me(),De(),qe(),Ce(),Ie(),He(),Pe(),Ne(),Re(),Oe(),Fe(),Ue(),Ge(),Ve(),setTimeout(()=>{document.querySelectorAll(".trust-meter__fill").forEach(t=>{t.style.transition="width 1.2s cubic-bezier(0.16, 1, 0.3, 1)"})},300)}async function _e(){let t=document.getElementById("theme-switch"),e=[...document.querySelectorAll("[data-theme-btn]")],s=document.documentElement.dataset.theme??"";e.find(d=>d.dataset.themeBtn!==s)?.click();let m=document.documentElement.dataset.theme!==s;m&&s&&X(s);let g="none",_=[],r={};try{g=navigator.serviceWorker?.controller?.scriptURL??"none",_=(await navigator.serviceWorker?.getRegistrations?.()??[]).map(u=>[u.installing&&"installing",u.waiting&&"waiting",u.active&&`active:${u.active.scriptURL}`].filter(Boolean).join(","));for(let u of await caches.keys())r[u]=(await(await caches.open(u)).keys()).length}catch{}let v="n/a";if(t){let d=t.getBoundingClientRect(),u=document.elementFromPoint(d.left+d.width/2,d.top+d.height/2);v=`<${u?.tagName}.${(u?.className||"").toString().trim()}> inNav:${t.contains(u)}`}let o={url:location.href,theme:document.documentElement.dataset.theme,navButtons:e.length,navWired:m,swController:g,swRegistrations:_,caches:r,navHitTest:v,ua:navigator.userAgent};return console.info("[mySocials debug]",JSON.stringify(o)),o}window.__debugReport=_e;document.readyState==="loading"?document.addEventListener("DOMContentLoaded",ve):ve();(/\bdebug\b/.test(location.search)||/\bdebug\b/.test(location.hash))&&setTimeout(()=>{_e()},500);})();
