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
    `,t.appendChild(s)})}function qe(){let t=document.getElementById("communities-grid");t&&Ae.forEach(e=>{let s=document.createElement("a");s.href="#",s.className="community-card";let i=e.members>=1e6?`${(e.members/1e6).toFixed(1)}M members`:e.members>=1e3?`${(e.members/1e3).toFixed(0)}K members`:`${e.members} members`;s.innerHTML=`
      <div class="community-card__icon" style="background:${e.color}20;color:${e.color}">${e.emoji}</div>
      <div class="community-card__body">
        <span class="community-card__name">${e.name}</span>
        <span class="community-card__members">${i}</span>
      </div>
    `,t.appendChild(s)})}function Ce(){let t=document.getElementById("testimonials-list");t&&Ee.forEach(e=>{let s=document.createElement("div");s.className="testimonial",s.innerHTML=`
      <div class="testimonial__header">
        <span class="testimonial__author">${e.author}</span>
        <span class="testimonial__date">${e.date}</span>
      </div>
      <p class="testimonial__text">${e.text}</p>
    `,t.appendChild(s)})}function Ie(){let t=document.getElementById("photo-grid");if(t)for(let e=0;e<9;e++){let s=document.createElement("div");s.className="photo-cell",s.innerHTML=`<div class="photo-cell__inner" style="background:${Z[e%Z.length]}"></div>`,t.appendChild(s)}}var C={heart:'<svg viewBox="0 0 24 24"><path d="M20.8 4.6a5.5 5.5 0 0 0-7.8 0L12 5.6l-1-1a5.5 5.5 0 0 0-7.8 7.8l1 1L12 21l7.8-7.6 1-1a5.5 5.5 0 0 0 0-7.8z"/></svg>',comment:'<svg viewBox="0 0 24 24"><path d="M21 11.5a8.4 8.4 0 0 1-9 8.4 9 9 0 0 1-4-1L3 20l1.1-4.9A8.4 8.4 0 0 1 12 3a8.4 8.4 0 0 1 9 8.5z"/></svg>',share:'<svg viewBox="0 0 24 24"><line x1="22" y1="2" x2="11" y2="13"/><polygon points="22 2 15 22 11 13 2 9 22 2"/></svg>',save:'<svg viewBox="0 0 24 24"><path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"/></svg>',home:'<svg viewBox="0 0 24 24"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/></svg>',grid:'<svg viewBox="0 0 24 24"><rect x="3" y="3" width="18" height="18" rx="2"/><line x1="9" y1="3" x2="9" y2="21"/><line x1="15" y1="3" x2="15" y2="21"/><line x1="3" y1="9" x2="21" y2="9"/><line x1="3" y1="15" x2="21" y2="15"/></svg>',reels:'<svg viewBox="0 0 24 24"><rect x="3" y="3" width="18" height="18" rx="3"/><line x1="3" y1="8" x2="21" y2="8"/><line x1="8" y1="3" x2="10" y2="8"/><line x1="14" y1="3" x2="16" y2="8"/><polygon points="10 11 15 13.5 10 16" fill="currentColor" stroke="none"/></svg>',tagged:'<svg viewBox="0 0 24 24"><rect x="3" y="3" width="18" height="18" rx="3"/><circle cx="12" cy="10" r="3"/><path d="M7 18a5 5 0 0 1 10 0"/></svg>'};function j(t){let e=Z[t%Z.length],s=y[t%y.length];return`linear-gradient(135deg, ${e}, ${s})`}function a(t){return t.replace(/[&<>"]/g,e=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"})[e])}function Be(t){let e=0;for(let s=0;s<t.length;s++)e=e*31+t.charCodeAt(s)>>>0;return y[e%y.length]}var ae=["ana","bruno","carla","diego","elena","felipe","gabi","hugo","isa","joao","lu","marco","nina","otto","paula","rafa","sofia","tiago","vera","yara"],ie=["","_",".","__"],de=["","br","berlin","photo","travel","x","oficial","real","99","mrx","gram"];function je(t,e){let s=t.slice();for(let i=0;s.length<e;i++){let v=ae[i%ae.length],u=ie[(i>>2)%ie.length],r=de[(i>>1)%de.length],l=Math.floor(i/(ae.length*ie.length)),m=`${v}${u}${r}${l>0?l:""}`;s.includes(m)?s.push(`${m}${s.length}`):s.push(m)}return s}function He(){let t=document.getElementById("ig-view");if(!t)return;let e=globalThis.PORTAL_DATA?.instagram;if(!e){t.innerHTML='<p class="ig-empty">Instagram data not loaded.</p>';return}let s=e.profile,i=o=>o.toLocaleString(),v=(e.highlights||[]).map((o,h)=>`
    <div class="ig-hl">
      <div class="ig-hl__ring"><div class="ig-hl__avatar" style="background:${j(h)}"><span class="ig-hl__emoji">${o.emoji}</span></div></div>
      <span class="ig-hl__name">${a(o.label)}</span>
    </div>`).join(""),u=(o,h)=>`
    <a class="ig-tile" href="${a(o.url)}" target="_blank" rel="noopener" style="background:${j(o.url.length)}">
      <span class="ig-tile__cap">${a(o.caption||o.url.replace("https://www.instagram.com/",""))}</span>
      <span class="ig-tile__badge">${h}</span>
    </a>`,r=e.saved.length?e.saved.map(o=>u(o,"\u{1F516}")).join(""):'<p class="ig-empty">Nothing saved.</p>',l=e.liked.length?e.liked.map(o=>u(o,"\u2764\uFE0F")).join(""):'<p class="ig-empty">No likes.</p>',m=o=>Number(o.match(/(\d+)(?=\.\w+$)/)?.[1]||0),d=e.posts.slice().sort((o,h)=>m(h.media)-m(o.media)),p=30,f=[...e.saved,...e.liked].map(o=>o.caption).filter(Boolean),x=d.map((o,h)=>`<a class="ig-tile" href="#" data-post-idx="${h}"><img src="${o.media}" alt="post"></a>`),c=Array.from({length:Math.max(0,p-x.length)},(o,h)=>`
    <a class="ig-tile ig-tile--post" href="#" style="background:${j(h)}">
      <span class="ig-tile__cap">${a(f[h%(f.length||1)]||"")}</span>
    </a>`),L=x.length||c.length?[...x,...c].join(""):'<p class="ig-empty">No posts yet.</p>',k='<svg class="ig-tile__ov" viewBox="0 0 24 24"><polygon points="10 8 16 12 10 16 10 8" fill="currentColor" stroke="none"/></svg>',H=Array.from({length:12},(o,h)=>`
    <a class="ig-tile ig-tile--post" href="#" style="background:${j(h+5)}">${k}
      <span class="ig-tile__cap">${a(f[(h+2)%(f.length||1)]||"")}</span>
    </a>`).join(""),R=Array.from({length:9},(o,h)=>`
    <a class="ig-tile ig-tile--post" href="#" style="background:${j(h+9)}">
      <span class="ig-tile__badge">@${a(s.username)}</span>
    </a>`).join(""),B=e.comments.length?e.comments.map(o=>`
      <div class="ig-comment">
        <div class="ig-comment__text">${a(o.text)}</div>
        <div class="ig-comment__meta">${o.owner?"@"+a(o.owner)+" \xB7 ":""}${a(o.time||"")}</div>
      </div>`).join(""):'<p class="ig-empty">No comments.</p>',E=o=>`<div class="ig-grid">${o}</div>`,P=`<div class="ig-head__avatar ig-head__avatar--ph">${a(ee(s.name))}</div>`;t.innerHTML=`
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
            <div class="ig-head__stat"><strong>${i(s.posts)}</strong><span>posts</span></div>
            <div class="ig-head__stat" data-modal="followers"><strong>${i(s.followers)}</strong><span>followers</span></div>
            <div class="ig-head__stat" data-modal="following"><strong>${i(s.following)}</strong><span>following</span></div>
          </div>
        </div>
        <div class="ig-head__name">${a(s.name)}</div>
        <div class="ig-head__bio">${a(s.bio)}</div>
        <div class="ig-head__actions">
          <span class="ig-head__btn ig-head__btn--primary">Follow</span>
          <span class="ig-head__btn">Message</span>
        </div>
      </header>

      ${v?`<div class="ig-highlights">${v}</div>`:""}

      <div class="ig-tabs">
        <div class="ig-tab is-active" data-pane="posts">${C.grid} Posts</div>
        <div class="ig-tab" data-pane="reels">${C.reels} Reels</div>
        <div class="ig-tab" data-pane="tagged">${C.tagged} Tagged</div>
      </div>

      <div class="ig-subtabs">
        <button class="ig-pill" data-pane="saved">${C.save}<span>Saved</span><em>${i(e.saved.length)}</em></button>
        <button class="ig-pill" data-pane="liked">${C.heart}<span>Liked</span><em>${i(e.liked.length)}</em></button>
        <button class="ig-pill" data-pane="comments">${C.comment}<span>Comments</span><em>${i(e.comments.length)}</em></button>
      </div>

      <div class="ig-pane is-active" data-pane="posts">${E(L)}</div>
      <div class="ig-pane" data-pane="reels">${E(H)}</div>
      <div class="ig-pane" data-pane="tagged">${E(R)}</div>
      <div class="ig-pane" data-pane="saved">${E(r)}</div>
      <div class="ig-pane" data-pane="liked">${E(l)}</div>
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
    </div>`,t.querySelectorAll(".ig-tab, .ig-pill").forEach(o=>{o.addEventListener("click",()=>{let h=o.dataset.pane;t.querySelectorAll(".ig-tab, .ig-pill").forEach(q=>q.classList.toggle("is-active",q===o)),t.querySelectorAll(".ig-pane").forEach(q=>q.classList.toggle("is-active",q.dataset.pane===h))})});let b=t.querySelector("#ig-modal"),S=o=>{let h=o==="followers"?e.followers:e.following,q=o==="followers"?s.followers:s.following,F=je(h,q);t.querySelector("#ig-modal-title").textContent=o==="followers"?"Followers":"Following",t.querySelector("#ig-modal-sub").textContent=`${i(q)} ${o}`,t.querySelector("#ig-modal-list").innerHTML=F.map(U=>`
      <div class="ig-row">
        <div class="ig-row__avatar" style="background:${Be(U)}">${a(U.charAt(0).toUpperCase())}</div>
        <a class="ig-row__handle" href="https://www.instagram.com/${a(U)}" target="_blank" rel="noopener">${a(U)}</a>
        <span class="ig-row__follow">Follow</span>
      </div>`).join(""),b.classList.add("is-open")};t.querySelectorAll(".ig-head__stat[data-modal]").forEach(o=>o.addEventListener("click",()=>S(o.dataset.modal)));let N=()=>b.classList.remove("is-open");t.querySelector("#ig-modal-close").addEventListener("click",N),b.addEventListener("click",o=>{o.target===b&&N()});let _=t.querySelector("#ig-post-modal"),T=t.querySelector("#ig-post-img"),M=t.querySelector("#ig-post-dots"),z=t.querySelector("#ig-post-comments"),D=[],I=0,O=()=>{T.src=D[I],M.innerHTML=D.length>1?D.map((o,h)=>`<span class="ig-post-modal__dot${h===I?" is-active":""}"></span>`).join(""):""},te=o=>{let h=d[o];h&&(D=h.media_all?.length?h.media_all:[h.media],I=0,O(),z.innerHTML='<p class="ig-empty">No per-post comment data in this export.</p>',_.classList.add("is-open"))};t.querySelectorAll(".ig-tile[data-post-idx]").forEach(o=>o.addEventListener("click",h=>{h.preventDefault(),te(Number(o.dataset.postIdx))})),t.querySelector("#ig-post-prev").addEventListener("click",()=>{I=(I-1+D.length)%D.length,O()}),t.querySelector("#ig-post-next").addEventListener("click",()=>{I=(I+1)%D.length,O()});let Y=()=>_.classList.remove("is-open");t.querySelector("#ig-post-modal-close").addEventListener("click",Y),_.addEventListener("click",o=>{o.target===_&&Y()})}var G={home:'<svg viewBox="0 0 24 24"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/></svg>',net:'<svg viewBox="0 0 24 24"><circle cx="9" cy="7" r="4"/><path d="M17 11a4 4 0 1 0-3-6.6M1 21v-2a4 4 0 0 1 4-4h8a4 4 0 0 1 4 4v2M17 15a4 4 0 0 1 4 4v2"/></svg>',jobs:'<svg viewBox="0 0 24 24"><rect x="2" y="7" width="20" height="14" rx="2"/><path d="M8 7V5a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"/></svg>',msg:'<svg viewBox="0 0 24 24"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>',bell:'<svg viewBox="0 0 24 24"><path d="M18 8a6 6 0 1 0-12 0c0 7-3 9-3 9h18s-3-2-3-9M13.7 21a2 2 0 0 1-3.4 0"/></svg>',like:'<svg viewBox="0 0 24 24"><path d="M14 9V5a3 3 0 0 0-6 0v4H5a2 2 0 0 0-2 2l1 7a2 2 0 0 0 2 2h9a2 2 0 0 0 2-2l1-7a2 2 0 0 0-2-2z"/></svg>',comment:'<svg viewBox="0 0 24 24"><path d="M21 11.5a8.4 8.4 0 0 1-9 8.4 9 9 0 0 1-4-1L3 20l1.1-4.9A8.4 8.4 0 0 1 12 3a8.4 8.4 0 0 1 9 8.5z"/></svg>',repost:'<svg viewBox="0 0 24 24"><polyline points="17 1 21 5 17 9"/><path d="M3 11V9a4 4 0 0 1 4-4h14M7 23l-4-4 4-4M21 13v2a4 4 0 0 1-4 4H3"/></svg>',send:'<svg viewBox="0 0 24 24"><line x1="22" y1="2" x2="11" y2="13"/><polygon points="22 2 15 22 11 13 2 9 22 2"/></svg>'};function ne(t){let e=i=>a(i).replace(/(https?:\/\/\S+)/g,'<a href="$1" target="_blank" rel="noopener">$1</a>');return t.split(/\s*-{3,}\s*/).map(i=>i.trim()).filter(Boolean).map(i=>{let v=i.match(/^@(\S+)\s+([\s\S]*)$/),u=v?.[1],r=(v?v[2]:i).trim().replace(/^>\s*/,""),l=u?`<div class="li-desc__label">${a(u)}</div>`:"",m=r.split(/\s-\s/).map(d=>d.trim()).filter(Boolean);return l+(m.length>=3?`<ul class="li-desc__list">${m.map(d=>`<li>${e(d)}</li>`).join("")}</ul>`:`<p class="li-desc__p">${e(r)}</p>`)}).join("")}function ee(t){return t.split(/\s+/).filter(Boolean).slice(0,2).map(e=>e.charAt(0).toUpperCase()).join("")}var W={experience:3,education:3,skills:12,projects:2};function Q(t,e,s,i="more"){if(t.length<=e)return t.map(s).join("");let v=t.slice(0,e).map(s).join(""),u=t.slice(e).map(s).join(""),r=`Show ${t.length-e} ${i}`;return`${v}<div class="li-more-wrap">${u}</div><button type="button" class="li-more" aria-expanded="false" data-label="${r}">${r}</button>`}function Pe(){let t=document.getElementById("li-view");if(!t)return;let e=globalThis.PORTAL_DATA?.linkedin;if(!e){t.innerHTML='<p class="li-empty">LinkedIn data not loaded.</p>';return}let s=e.profile,i=(c,L)=>`<div class="li-nav__item">${c}<span>${L}</span></div>`,v=s.photo?`<div class="li-phead__avatar li-phead__avatar--img"><img src="${s.photo}" alt="${a(s.name)}"></div>`:`<div class="li-phead__avatar" style="background:${y[3]}">${a(ee(s.name))}</div>`,u=(c,L)=>`<section class="li-card li-section"><h2 class="li-section__title">${c}</h2>${L}</section>`,r='<p class="li-need">Not in the saved profile page \u2014 add from your LinkedIn data export (Settings \u2192 Get a copy of your data).</p>',l=e.experience.length?Q(e.experience,W.experience,c=>`
      <div class="li-item">
        <div class="li-item__logo">${a(c.company.charAt(0))}</div>
        <div>
          <div class="li-item__title">${a(c.title)}</div>
          <div class="li-item__sub">${a(c.company)}</div>
          <div class="li-item__meta">${a(c.dates)}${c.location?" \xB7 "+a(c.location):""}</div>
          ${c.description?`<div class="li-item__desc">${ne(c.description)}</div>`:""}
        </div>
      </div>`,"roles"):r,m=e.education.length?Q(e.education,W.education,c=>`
      <div class="li-item">
        <div class="li-item__logo">${a(c.school.charAt(0))}</div>
        <div>
          <div class="li-item__title">${a(c.school)}</div>
          <div class="li-item__sub">${a(c.degree)}</div>
          <div class="li-item__meta">${a(c.dates)}</div>
        </div>
      </div>`,"schools"):r,d=e.skills.length?`<div class="li-skills">${Q(e.skills,W.skills,c=>`<span class="li-skill">${a(c)}</span>`,"skills")}</div>`:r,p=e.about?`<div class="li-about">${ne(e.about)}</div>`:r,f=e.languages.length?e.languages.map(c=>`
      <div class="li-lang">
        <span class="li-lang__name">${a(c.name)}</span>
        <span class="li-lang__level">${a(c.proficiency)}</span>
      </div>`).join(""):r,x=e.projects.length?Q(e.projects,W.projects,c=>`
      <div class="li-item li-item--proj">
        <div>
          <div class="li-item__title">${a(c.title)}${c.url?` \xB7 <a href="${a(c.url)}" target="_blank" rel="noopener">link</a>`:""}</div>
          ${c.dates?`<div class="li-item__meta">${a(c.dates)}</div>`:""}
          <div class="li-item__desc">${ne(c.description)}</div>
        </div>
      </div>`,"projects"):r;t.innerHTML=`
    <nav class="li-nav">
      <div class="li-nav__inner">
        <span class="li-nav__logo">in</span>
        <div class="li-nav__search"><input placeholder="Search"></div>
        <div class="li-nav__items">
          ${i(G.home,"Home")}
          ${i(G.net,"Network")}
          ${i(G.jobs,"Jobs")}
          ${i(G.msg,"Messaging")}
          ${i(G.bell,"Notifications")}
        </div>
      </div>
    </nav>
    <div class="li-prof">
      <div class="li-prof__main">
        <section class="li-card li-phead">
          <div class="li-phead__banner"></div>
          ${v}
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
        ${u("About",p)}
        ${u("Experience",l)}
        ${u("Education",m)}
        ${u("Skills",d)}
        ${u("Projects",x)}
        ${u("Languages",f)}
      </div>
      <aside class="li-prof__rail">
        <div class="li-card li-side">
          <div class="li-side__title">Profile</div>
          <div class="li-side__row"><span>Current</span><strong>${a(s.current)}</strong></div>
          <div class="li-side__row"><span>Location</span><strong>${a(s.location.split(",")[0])}</strong></div>
          <div class="li-side__row"><span>Profile</span><a href="https://${a(s.url)}" target="_blank" rel="noopener">${a(s.url)}</a></div>
        </div>
      </aside>
    </div>`,t.querySelectorAll(".li-more").forEach(c=>{c.addEventListener("click",()=>{let L=c.previousElementSibling;if(!(L instanceof HTMLElement)||!L.classList.contains("li-more-wrap"))return;let k=L.classList.toggle("li-more-wrap--open");c.setAttribute("aria-expanded",String(k)),c.textContent=k?"Show less":c.dataset.label??"Show more"})})}var me={bell:'<svg viewBox="0 0 24 24"><path d="M18 8a6 6 0 1 0-12 0c0 7-3 9-3 9h18s-3-2-3-9M13.7 21a2 2 0 0 1-3.4 0"/></svg>',chat:'<svg viewBox="0 0 24 24"><path d="M21 11.5a8.4 8.4 0 0 1-9 8.4 9 9 0 0 1-4-1L3 20l1.1-4.9A8.4 8.4 0 0 1 12 3a8.4 8.4 0 0 1 9 8.5z"/></svg>'},pe=[220,300,180,340,260,200,320,240,280];function Ne(){let t=document.getElementById("pin-view");if(!t)return;let e=globalThis.PORTAL_DATA?.pinterest,s=e?.boards??[],i=e?.profile,v=["30% 30%","75% 15%","20% 80%","80% 75%"],u=(l,m)=>`
    <div class="pin-card__grid">
      ${v.map((d,p)=>`<div class="pin-card__cell pin-card__cell--${p}" style="background-image:url('${a(l)}');background-position:${d}" role="img" aria-label="${a(m)}"></div>`).join("")}
    </div>`,r=s.map((l,m)=>{let d=pe[m%pe.length],p=l.cover?u(l.cover,l.name):`<div class="pin-card__ph" style="height:${d}px;background:${j(m)}">\u{1F4CC}</div>`;return`
    <a class="pin-card" href="https://www.pinterest.com/${a(i?.username||"diegonmarcos")}/${a(l.name.toLowerCase().replace(/[^a-z0-9]+/g,"-"))}/" target="_blank" rel="noopener">
      <div class="pin-card__media">
        ${p}
        <div class="pin-card__overlay"><span class="pin-card__save">${l.pins} pins</span></div>
      </div>
      <div class="pin-card__title">${a(l.name)}</div>
      ${l.desc?`<div class="pin-card__meta">${a(l.desc)}</div>`:`<div class="pin-card__meta">${l.pins} pins</div>`}
    </a>`}).join("");t.innerHTML=`
    <nav class="pin-nav">
      <div class="pin-nav__inner">
        <span class="pin-nav__logo">P</span>
        <a href="#" class="pin-nav__tab pin-nav__tab--active">Boards</a>
        <a href="https://www.pinterest.com/${a(i?.username||"diegonmarcos")}/" target="_blank" rel="noopener" class="pin-nav__tab">Profile</a>
        <div class="pin-nav__search"><input placeholder="Search for ideas"></div>
        <div class="pin-nav__icons">${me.bell}${me.chat}<span class="pin-nav__avatar" style="background:${y[3]}">D</span></div>
      </div>
    </nav>
    <div class="pin-head">@${a(i?.username||"diegonmarcos")} \xB7 <strong>${i?.boards??s.length}</strong> boards \xB7 <strong>${i?.pins??0}</strong> pins</div>
    <div class="pin-board">${r||'<p class="pin-empty">No boards.</p>'}</div>`}function Re(){let t=document.getElementById("tid-view");if(!t)return;let e=globalThis.PORTAL_DATA?.tidal,s=e?.playlists??[],i=e?.profile,v=r=>{if(!r)return"";let l=Math.floor(r/3600),m=Math.round(r%3600/60);return l?`${l}h ${m}m`:`${m} min`},u=s.map((r,l)=>{let m=r.cover?`<img class="tid-card__img" src="${a(r.cover)}" alt="${a(r.name)}" loading="lazy">`:`<div class="tid-card__ph" style="background:${j(l)}">\u266B</div>`;return`
    <a class="tid-card" href="${a(r.url)}" target="_blank" rel="noopener">
      <div class="tid-card__cover">${m}<span class="tid-card__play">\u25B6</span></div>
      <div class="tid-card__name">${a(r.name)}</div>
      <div class="tid-card__meta">${r.tracks} tracks${r.duration_s?" \xB7 "+v(r.duration_s):""}</div>
    </a>`}).join("");t.innerHTML=`
    <nav class="tid-nav">
      <div class="tid-nav__inner">
        <span class="tid-nav__logo">TIDAL</span>
        <div class="tid-nav__search"><input placeholder="Search"></div>
        <span class="tid-nav__user">@${a(i?.username||"diegonmarcos")}</span>
      </div>
    </nav>
    <div class="tid-main">
      <header class="tid-head">
        <div class="tid-head__title">My Playlists</div>
        <div class="tid-head__sub">${i?.playlists??s.length} playlists \xB7 ${i?.tracks??0} tracks</div>
      </header>
      <div class="tid-grid">${u||'<p class="tid-empty">Playlists load once the Tidal profile ID is set.</p>'}</div>
    </div>`}var J={run:"\u{1F3C3}",ride:"\u{1F6B4}",swim:"\u{1F3CA}"};function Oe(){let t=document.getElementById("str-view");if(!t)return;let e=globalThis.PORTAL_DATA?.strava,s=e?.activities??[],i=e?.profile,v=n=>n&&parseInt(n)||0,u=n=>n.split(" \u2014 ")[1]||"",r=["run","ride","swim"],l=r.reduce((n,g)=>{let $=s.filter(w=>w.type===g);return n[g]={count:$.length,distance:$.reduce((w,A)=>w+(A.distance_km||0),0),minutes:$.reduce((w,A)=>w+v(A.duration),0),elevation:$.reduce((w,A)=>w+(A.elevation_m||0),0)},n},{}),m=r.reduce((n,g)=>n+l[g].minutes,0),d=n=>`${Math.round(n/60)}h`,p=(n,g,$)=>`<div class="str-stat"><span class="str-stat__icon">${n}</span><span class="str-stat__value">${a(g)}</span><span class="str-stat__label">${$}</span></div>`,f=`
    <div class="str-dash">
      ${p("\u{1F3C3}",`${l.run.distance.toFixed(0)} km`,`${l.run.count} runs`)}
      ${p("\u{1F6B4}",`${l.ride.distance.toFixed(0)} km`,`${l.ride.count} rides`)}
      ${p("\u{1F3CA}",`${l.swim.distance.toFixed(1)} km`,`${l.swim.count} swims`)}
      ${p("\u23F1\uFE0F",d(m),"total time")}
      ${p("\u26F0\uFE0F",`${(l.run.elevation+l.ride.elevation).toLocaleString()} m`,"elevation gain")}
    </div>`,x=new Map;s.forEach(n=>{let g=Date.parse(n.date);if(!Number.isNaN(g)){let $=new Date(g).toISOString().slice(0,10);x.set($,(x.get($)||0)+1)}});let c=s.length?new Date(Math.max(...s.map(n=>Date.parse(n.date)).filter(n=>!Number.isNaN(n)))):new Date(0),L=53,k=new Date(c);k.setDate(k.getDate()-L*7),k.setDate(k.getDate()-k.getDay());let H=[];for(let n=0;n<L*7;n++){let g=new Date(k);g.setDate(g.getDate()+n);let $=g.toISOString().slice(0,10),w=x.get($)||0,A=w===0?0:w===1?1:w===2?2:3;H.push(`<span class="str-cal__cell str-cal__cell--${A}" title="${$}: ${w} activit${w===1?"y":"ies"}"></span>`)}let R=`<div class="str-cal">${H.join("")}</div>`,B=new Map;s.forEach(n=>{let g=Date.parse(n.date);if(Number.isNaN(g))return;let $=new Date(g).toISOString().slice(0,10);(B.get($)??B.set($,[]).get($)).push(n)});let E=(n,g)=>new Date(Date.UTC(n,g,1)).toLocaleDateString("en-US",{month:"long",year:"numeric",timeZone:"UTC"}),P=(n,g)=>{let $=new Date(Date.UTC(n,g,1)),w=new Date(Date.UTC(n,g+1,0)).getUTCDate(),A=$.getUTCDay(),V=["S","M","T","W","T","F","S"],we=Array.from({length:A},()=>'<span class="str-month__day str-month__day--blank"></span>'),Te=Array.from({length:w},(le,Le)=>{let re=Le+1,ke=new Date(Date.UTC(n,g,re)).toISOString().slice(0,10),ce=B.get(ke)||[],Se=ce.map(se=>`<span class="str-month__dot" style="background:${se.type==="run"?"#fc5200":se.type==="ride"?"#0a66c2":"#00b8d9"}" title="${a(se.title)}"></span>`).join("");return`<span class="str-month__day${ce.length?" has-activity":""}"><span class="str-month__num">${re}</span><span class="str-month__dots">${Se}</span></span>`});return`
      <div class="str-month__dow">${V.map(le=>`<span>${le}</span>`).join("")}</div>
      <div class="str-month__grid">${we.join("")}${Te.join("")}</div>`},b=c.getUTCFullYear(),S=c.getUTCMonth(),N=`
    <div class="str-month">
      <div class="str-month__head">
        <button class="str-month__nav" id="str-month-prev" aria-label="Previous month">&lsaquo;</button>
        <span class="str-month__label" id="str-month-label">${E(b,S)}</span>
        <button class="str-month__nav" id="str-month-next" aria-label="Next month">&rsaquo;</button>
      </div>
      <div id="str-month-body">${P(b,S)}</div>
    </div>`,_={Berlin:[52.52,13.4],Munich:[48.14,11.58],Amsterdam:[52.37,4.9],Paris:[48.86,2.35],Barcelona:[41.39,2.17],Lisbon:[38.72,-9.14],Vienna:[48.21,16.37],Prague:[50.08,14.44],Copenhagen:[55.68,12.57],Zurich:[47.37,8.54],Rome:[41.9,12.5],Porto:[41.15,-8.61],Krakow:[50.06,19.94],Budapest:[47.5,19.04],Ljubljana:[46.06,14.51],Nice:[43.7,7.27]},T=new Map;s.forEach(n=>{let g=u(n.title);g&&T.set(g,(T.get(g)||0)+1)});let M=Object.values(_).map(([n])=>n),z=Object.values(_).map(([,n])=>n),[D,I]=[Math.min(...M),Math.max(...M)],[O,te]=[Math.min(...z),Math.max(...z)],Y=(n,g)=>{let $=20+(g-O)/(te-O||1)*360,w=20+(1-(n-D)/(I-D||1))*260;return[$,w]},o=Math.max(1,...T.values()),h=[...T.entries()].map(([n,g])=>{let $=_[n];if(!$)return"";let[w,A]=Y(...$),V=5+g/o*10;return`<g class="str-map__pin"><circle cx="${w}" cy="${A}" r="${V}" /><text x="${w}" y="${A-V-4}">${a(n)} (${g})</text></g>`}).join(""),q=`<svg class="str-map" viewBox="0 0 400 300" role="img" aria-label="Cities visited">${h}</svg>`,F=(n,g)=>g?`<div class="str-card__stat"><span class="str-card__stat-value">${a(g)}</span><span class="str-card__stat-label">${n}</span></div>`:"",U=n=>`
    <div class="str-card" data-type="${n.type}">
      <div class="str-card__header">
        <div class="str-card__icon">${J[n.type]||"\u{1F3C1}"}</div>
        <div>
          <div class="str-card__title">${a(n.title)}</div>
          <div class="str-card__date">${a(n.date)}</div>
        </div>
      </div>
      <div class="str-card__stats">
        ${F("Distance",n.distance_km?`${n.distance_km} km`:"")}
        ${F("Time",n.duration||"")}
        ${F("Pace",n.pace||"")}
        ${F("Elevation",n.elevation_m?`${n.elevation_m} m`:"")}
      </div>
    </div>`,fe=s.map(U).join(""),$e=`<div class="str-head__avatar">${a(ee(i?.name||"Diego Nepomuceno Marcos"))}</div>`;t.innerHTML=`
    <nav class="str-nav">
      <div class="str-nav__inner">
        <span class="str-nav__logo">Strava</span>
        <div class="str-nav__search"><input placeholder="Search"></div>
        <span class="str-nav__user">${a(i?.name||"diegonmarcos")}</span>
      </div>
    </nav>
    <div class="str-main">
      <header class="str-head">
        ${$e}
        <div>
          <div class="str-head__name">${a(i?.name||"Diego Nepomuceno Marcos")}</div>
        </div>
        <div class="str-head__stats">
          <div class="str-head__stat"><span class="str-head__stat-value">${i?.activities??s.length}</span><span class="str-head__stat-label">Activities</span></div>
          <div class="str-head__stat"><span class="str-head__stat-value">${i?.followers??0}</span><span class="str-head__stat-label">Followers</span></div>
          <div class="str-head__stat"><span class="str-head__stat-value">${i?.following??0}</span><span class="str-head__stat-label">Following</span></div>
        </div>
      </header>

      ${f}

      <section class="str-section">
        <h3 class="str-section__title">Calendar</h3>
        ${N}
        <div class="str-cal__heatmap-label">Last 12 months</div>
        ${R}
      </section>

      ${h?`<section class="str-section">
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
    </div>`,t.querySelectorAll(".str-filter").forEach(n=>{n.addEventListener("click",()=>{t.querySelectorAll(".str-filter").forEach($=>$.classList.toggle("is-active",$===n));let g=n.dataset.type;t.querySelectorAll(".str-card").forEach($=>{$.style.display=g==="all"||$.dataset.type===g?"":"none"})})});let be=t.querySelector("#str-month-body"),ye=t.querySelector("#str-month-label"),oe=n=>{S+=n,S<0&&(S=11,b--),S>11&&(S=0,b++),ye.textContent=E(b,S),be.innerHTML=P(b,S)};t.querySelector("#str-month-prev").addEventListener("click",()=>oe(-1)),t.querySelector("#str-month-next").addEventListener("click",()=>oe(1))}function Fe(){let t=document.getElementById("yt-view");if(!t)return;let e=globalThis.PORTAL_DATA?.youtube,s=e?.videos??[],i=e?.playlists??[],v=e?.profile,u=(d,p)=>{let f=d.thumbnail?`<img class="yt-card__img" src="${a(d.thumbnail)}" alt="${a(d.title)}" loading="lazy">`:`<div class="yt-card__ph" style="background:${j(p)}">\u25B6</div>`;return`
    <a class="yt-card" href="${a(d.url||"#")}" target="_blank" rel="noopener">
      <div class="yt-card__thumb">${f}${d.duration?`<span class="yt-card__duration">${a(d.duration)}</span>`:""}</div>
      <div class="yt-card__title">${a(d.title)}</div>
      ${d.channel?`<div class="yt-card__channel">${a(d.channel)}</div>`:""}
      <div class="yt-card__meta">${d.views!==void 0?`${d.views.toLocaleString()} views`:""}${d.views!==void 0&&d.date?" \xB7 ":""}${d.date?a(d.date):""}</div>
    </a>`},r=i.map(d=>`
    <section class="yt-shelf">
      <div class="yt-shelf__title">${a(d.name)}</div>
      <div class="yt-shelf__row">${d.videos.map((p,f)=>u(p,f)).join("")}</div>
    </section>`).join(""),l=s.length?`<div class="yt-grid">${s.map((d,p)=>u(d,p)).join("")}</div>`:"",m=i.length||s.length;t.innerHTML=`
    <nav class="yt-nav">
      <div class="yt-nav__inner">
        <span class="yt-nav__logo">YouTube</span>
        <div class="yt-nav__search"><input placeholder="Search"></div>
        <span class="yt-nav__user">@${a(v?.channel||"diegonmarcos")}</span>
      </div>
    </nav>
    <div class="yt-main">
      <header class="yt-head">
        <div>
          <div class="yt-head__title">${a(v?.channel||"diegonmarcos")}</div>
          <div class="yt-head__sub">${v?.subscribers??0} subscribers \xB7 ${v?.videos??s.length} videos</div>
        </div>
      </header>
      ${m?`${r}${l}`:'<p class="yt-empty">No videos or playlists yet. YouTube data loads once the channel is scraped.</p>'}
    </div>`}var K=(t=!1)=>{let e=t?"#c7cbb9":"#8fbf3f",s=t?"#c7cbb9":"#ef4a2b",i=t?"#e4e4d8":"#ffd400",v=t?"#9a9d90":"#1a1a12";return`<svg class="icq-flower" viewBox="0 0 16 16" aria-hidden="true">${Array.from({length:8},(r,l)=>{let m=l*45;return`<ellipse cx="8" cy="2.9" rx="1.9" ry="2.9" fill="${l===0?s:e}" stroke="${v}" stroke-width="0.5" transform="rotate(${m} 8 8)"/>`}).join("")}<circle cx="8" cy="8" r="2.4" fill="${i}" stroke="${v}" stroke-width="0.5"/></svg>`};var ge={online:!1,away:!1,dnd:!1,offline:!0};function Ue(){let t=document.getElementById("icq-view");if(!t)return;let e=globalThis.PORTAL_DATA||{},s=e.linkedin,i=e.instagram,v=s?.profile.name||"Diego Nepomuceno Marcos",u=i?.profile.username||"diegonmarcos",r=v.split(" ")[0],l=v.split(" ").slice(1).join(" "),m=(s?.profile.location||"Berlin, Germany").split(",").map(_=>_.trim()),d=m[0]||"",p=m[m.length-1]||"",f=s?.experience?.[0],x=s?.about||i?.profile.bio||"",c=s?.skills||[],L=s?.languages||[],k="184-042-518",H=["online","online","away","online","dnd","away","offline","offline","offline"],R=ue.map((_,T)=>({..._,status:H[T%H.length]})),B=R.filter(_=>_.status!=="offline"),E=R.filter(_=>_.status==="offline"),P=_=>`<li class="icq-contact">${K(ge[_.status])}<span>${a(_.name)}</span></li>`,b=(_,T)=>T?`<div class="icq-field"><span class="icq-field__k">${a(_)}</span><span class="icq-field__v">${a(T)}</span></div>`:"",S=[{id:"main",label:"Main",body:`
        ${b("Nickname",u)}
        ${b("First Name",r)}
        ${b("Last Name",l)}
        ${b("ICQ#",k)}
        ${b("Email","me@diegonmarcos.com")}
        ${b("Headline",s?.profile.headline||"")}`},{id:"home",label:"Home",body:`
        ${b("City",d)}
        ${b("Country",p)}
        ${b("Homepage",s?.profile.url||"linktree.diegonmarcos.com")}
        ${L.length?`<div class="icq-field"><span class="icq-field__k">Languages</span><span class="icq-field__v">${L.map(_=>a(_.name)).join(", ")}</span></div>`:""}`},{id:"work",label:"Work",body:f?`
        ${b("Company",f.company)}
        ${b("Title",f.title)}
        ${b("Since",f.dates)}
        ${b("Location",f.location||"")}`:'<p class="icq-empty">No work info.</p>'},{id:"about",label:"About",body:x?`<p class="icq-about">${a(x)}</p>`:'<p class="icq-empty">No about info.</p>'},{id:"interests",label:"Interests",body:c.length?`<div class="icq-interests">${c.map(_=>`<span class="icq-chip">${a(_)}</span>`).join("")}</div>`:'<p class="icq-empty">No interests listed.</p>'}],N='<span class="icq-win__btns"><i>_</i><i>\u25A1</i><i>\u2715</i></span>';t.innerHTML=`
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
        <div class="icq-win__bar icq-win__bar--alt">${K("#ffffff")}<span class="icq-win__title">User Details \u2014 ${a(u)}</span>${N}</div>
        <div class="icq-detail">
          <div class="icq-detail__head">
            <div class="icq-detail__avatar">${a(ee(v))}</div>
            <div>
              <div class="icq-detail__name">${a(v)}</div>
              <div class="icq-detail__nick">"${a(u)}" \xB7 #${k}</div>
            </div>
          </div>
          <div class="icq-tabs">
            ${S.map((_,T)=>`<button class="icq-tab${T===0?" is-active":""}" data-icq-pane="${_.id}">${_.label}</button>`).join("")}
          </div>
          ${S.map((_,T)=>`<div class="icq-pane${T===0?" is-active":""}" data-icq-pane="${_.id}">${_.body}</div>`).join("")}
        </div>
      </div>
    </div>`,t.querySelectorAll(".icq-tab").forEach(_=>{_.addEventListener("click",()=>{let T=_.dataset.icqPane;t.querySelectorAll(".icq-tab").forEach(M=>M.classList.toggle("is-active",M===_)),t.querySelectorAll(".icq-pane").forEach(M=>M.classList.toggle("is-active",M.dataset.icqPane===T))})})}function Ge(){let t=document.getElementById("me-view");if(!t)return;let e=globalThis.PORTAL_DATA||{},s=e.instagram,i=e.linkedin,v=i?.profile.name||s?.profile.name||"Diego Nepomuceno Marcos",u=i?.profile.headline||"",r=i?.profile.location||"",l=s?.profile.bio||"",m=globalThis.PORTAL_DATA?.tidal,d=[{theme:"linkedin",label:"LinkedIn",meta:i?`${i.profile.connections} connections \xB7 ${i.profile.followers.toLocaleString()} followers`:"profile",color:"#0a66c2"},{theme:"instagram",label:"Instagram",meta:s?`${s.profile.followers.toLocaleString()} followers \xB7 ${s.profile.posts} post${s.profile.posts===1?"":"s"}`:"profile",color:"#dc2743"},{theme:"pinterest",label:"Pinterest",meta:"boards & pins",color:"#e60023"},{theme:"tidal",label:"TIDAL",meta:m?`${m.profile.playlists} playlists`:"playlists",color:"#00ffff"},{theme:"strava",label:"Strava",meta:"activities & routes",color:"#fc5200"},{theme:"youtube",label:"YouTube",meta:"playlists & videos",color:"#ff0000"},{theme:"orkut",label:"Orkut",meta:"the classic profile",color:"#e9008c"},{theme:"icq",label:"ICQ",meta:"retro IM \xB7 user details",color:"#0a870a"}];t.innerHTML=`
    <div class="me-hub">
      <div class="me-card">
        <div class="me-avatar"></div>
        <h1 class="me-name">${a(v)}</h1>
        ${u?`<p class="me-headline">${a(u)}</p>`:""}
        ${r?`<p class="me-loc">${a(r)}</p>`:""}
        ${l?`<p class="me-bio">${a(l)}</p>`:""}
      </div>
      <div class="me-links">
        ${d.map(p=>`
          <button class="me-link" data-goto="${p.theme}" style="--accent:${p.color}">
            <span class="me-link__dot"></span>
            <span class="me-link__body">
              <span class="me-link__name">${p.label}</span>
              <span class="me-link__meta">${a(p.meta)}</span>
            </span>
            <span class="me-link__arrow">\u2192</span>
          </button>`).join("")}
      </div>
    </div>`,t.querySelectorAll(".me-link").forEach(p=>p.addEventListener("click",()=>_e(p.dataset.goto)))}var ze=["myprofile","orkut","instagram","linkedin","pinterest","tidal","strava","youtube","icq"];function Ye(t){return t==="myprofile"?"./":`${t}.html`}function X(t){document.documentElement.setAttribute("data-theme",t),document.querySelectorAll("[data-theme-btn]").forEach(e=>{e.classList.toggle("is-active",e.dataset.themeBtn===t)}),window.scrollTo(0,0)}function _e(t,e=!0){X(t),e&&history.pushState({theme:t},"",Ye(t))}function Ve(){let t=document.documentElement.dataset.theme||"myprofile";X(ze.includes(t)?t:"myprofile"),document.querySelectorAll("[data-theme-btn]").forEach(e=>{e.addEventListener("click",()=>_e(e.dataset.themeBtn))}),window.addEventListener("popstate",e=>{let s=e.state?.theme||"myprofile";X(s)})}function ve(){Me(),De(),qe(),Ce(),Ie(),He(),Pe(),Ne(),Re(),Oe(),Fe(),Ue(),Ge(),Ve(),setTimeout(()=>{document.querySelectorAll(".trust-meter__fill").forEach(t=>{t.style.transition="width 1.2s cubic-bezier(0.16, 1, 0.3, 1)"})},300)}async function he(){let t=document.getElementById("theme-switch"),e=[...document.querySelectorAll("[data-theme-btn]")],s=document.documentElement.dataset.theme??"";e.find(p=>p.dataset.themeBtn!==s)?.click();let v=document.documentElement.dataset.theme!==s;v&&s&&X(s);let u="none",r=[],l={};try{u=navigator.serviceWorker?.controller?.scriptURL??"none",r=(await navigator.serviceWorker?.getRegistrations?.()??[]).map(f=>[f.installing&&"installing",f.waiting&&"waiting",f.active&&`active:${f.active.scriptURL}`].filter(Boolean).join(","));for(let f of await caches.keys())l[f]=(await(await caches.open(f)).keys()).length}catch{}let m="n/a";if(t){let p=t.getBoundingClientRect(),f=document.elementFromPoint(p.left+p.width/2,p.top+p.height/2);m=`<${f?.tagName}.${(f?.className||"").toString().trim()}> inNav:${t.contains(f)}`}let d={url:location.href,theme:document.documentElement.dataset.theme,navButtons:e.length,navWired:v,swController:u,swRegistrations:r,caches:l,navHitTest:m,ua:navigator.userAgent};return console.info("[mySocials debug]",JSON.stringify(d)),d}window.__debugReport=he;document.readyState==="loading"?document.addEventListener("DOMContentLoaded",ve):ve();(/\bdebug\b/.test(location.search)||/\bdebug\b/.test(location.hash))&&setTimeout(()=>{he()},500);})();
