(()=>{var P=Object.defineProperty;var V=(t,e,a)=>e in t?P(t,e,{enumerable:!0,configurable:!0,writable:!0,value:a}):t[e]=a;var b=(t,e,a)=>(V(t,typeof e!="symbol"?e+"":e,a),a);var U={route:{path:"wallet/all",params:{}},data:null,nav:null,loading:!0,error:null,selectedDoc:null},D=class{constructor(){b(this,"state",{...U});b(this,"listeners",new Set)}get(){return this.state}set(e){this.state={...this.state,...e},this.listeners.forEach(a=>a())}subscribe(e){return this.listeners.add(e),()=>{this.listeners.delete(e)}}},o=new D;var q="mock",K="nav";function w(t){let e=globalThis.PORTAL_DATA;if(console.info("[myid]","loader.readPortalData",{key:t,bagKeys:e?Object.keys(e):null,valueType:e&&t in e?Array.isArray(e[t])?"array":typeof e[t]:"missing"}),!e||!(t in e))throw new Error(`PORTAL_DATA["${t}"] not found. Make sure data-${t}.json.js is loaded BEFORE script.js in index.html.`);return e[t]}var T=null,M=null;async function x(){return T||(T=w(q)),T}async function S(){return M||(M=w(K)),M}function W(t){let e=t.replace(/^#\/?/,""),[a,n]=e.split("?"),r={};return n&&n.split("&").forEach(i=>{let[d,c]=i.split("=");d&&(r[decodeURIComponent(d)]=decodeURIComponent(c??""))}),{path:a||"",params:r}}function L(t,e={}){let a=Object.entries(e).map(([n,r])=>`${encodeURIComponent(n)}=${encodeURIComponent(r)}`).join("&");location.hash=`#/${t}${a?"?"+a:""}`}function E(t,e){let a=()=>{let n=W(location.hash);n.path||(n={path:t.default,params:{}}),e(n)};window.addEventListener("hashchange",a),a()}var H={wallet:'<path d="M20 7H4a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2Z"/><path d="M16 14h2"/><path d="M2 10h20"/>',"id-card":'<rect x="3" y="5" width="18" height="14" rx="2"/><circle cx="9" cy="12" r="2.5"/><path d="M14 10h4"/><path d="M14 13h3"/>',graduation:'<path d="M22 10 12 4 2 10l10 6 10-6Z"/><path d="M6 12v5c2 2 10 2 12 0v-5"/>',car:'<path d="M5 13l1.6-4.5A2 2 0 0 1 8.5 7h7a2 2 0 0 1 1.9 1.5L19 13"/><path d="M3 13h18v5H3z"/><circle cx="7" cy="18" r="1.5"/><circle cx="17" cy="18" r="1.5"/>',briefcase:'<rect x="3" y="7" width="18" height="13" rx="2"/><path d="M9 7V5a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v2"/><path d="M3 12h18"/>',award:'<circle cx="12" cy="9" r="6"/><path d="M9 14l-2 7 5-3 5 3-2-7"/>',"credit-card":'<rect x="2" y="6" width="20" height="13" rx="2"/><path d="M2 11h20"/><path d="M6 16h3"/>',home:'<path d="M3 11l9-7 9 7"/><path d="M5 10v10h14V10"/>',heart:'<path d="M12 21s-7-4.5-9.5-9A4.8 4.8 0 0 1 7 5c2 0 3.5 1.5 5 3 1.5-1.5 3-3 5-3a4.8 4.8 0 0 1 4.5 7C19 16.5 12 21 12 21Z"/>',shield:'<path d="M12 3 4 6v6c0 5 3.5 8.5 8 9 4.5-.5 8-4 8-9V6l-8-3Z"/>',scale:'<path d="M12 3v18"/><path d="M5 7l-3 6h6l-3-6Z"/><path d="M19 7l-3 6h6l-3-6Z"/><path d="M5 21h14"/>',search:'<circle cx="11" cy="11" r="7"/><path d="m21 21-4.3-4.3"/>',globe:'<circle cx="12" cy="12" r="9"/><path d="M3 12h18"/><path d="M12 3a14 14 0 0 1 0 18"/><path d="M12 3a14 14 0 0 0 0 18"/>',tag:'<path d="M20 12 12 4H4v8l8 8 8-8Z"/><circle cx="8" cy="8" r="1.4"/>',key:'<circle cx="8" cy="15" r="3.5"/><path d="m11 12 9-9"/><path d="m18 5 2 2"/><path d="m15 8 2 2"/>',user:'<circle cx="12" cy="8" r="4"/><path d="M4 21c0-4 4-7 8-7s8 3 8 7"/>',"chevron-down":'<path d="m6 9 6 6 6-6"/>',x:'<path d="m6 6 12 12"/><path d="M18 6 6 18"/>',external:'<path d="M14 4h6v6"/><path d="M10 14 20 4"/><path d="M19 14v5a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2h5"/>',check:'<path d="m5 12 5 5 9-12"/>'};function l(t,e=18){let a=H[t]??H.tag;return`<svg viewBox="0 0 24 24" width="${e}" height="${e}" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${a}</svg>`}function h(t){if(!t)return"\u2014";let e=new Date(t);return Number.isNaN(e.getTime())?t:e.toLocaleDateString("en-GB",{year:"numeric",month:"short",day:"2-digit"})}function s(t){return String(t??"").replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#39;")}var Z={ES:"\u{1F1EA}\u{1F1F8}",DE:"\u{1F1E9}\u{1F1EA}",FR:"\u{1F1EB}\u{1F1F7}",IT:"\u{1F1EE}\u{1F1F9}",PT:"\u{1F1F5}\u{1F1F9}",GB:"\u{1F1EC}\u{1F1E7}",US:"\u{1F1FA}\u{1F1F8}",NL:"\u{1F1F3}\u{1F1F1}",SE:"\u{1F1F8}\u{1F1EA}",FI:"\u{1F1EB}\u{1F1EE}",NO:"\u{1F1F3}\u{1F1F4}",DK:"\u{1F1E9}\u{1F1F0}",AT:"\u{1F1E6}\u{1F1F9}",BE:"\u{1F1E7}\u{1F1EA}",CH:"\u{1F1E8}\u{1F1ED}",IE:"\u{1F1EE}\u{1F1EA}",LT:"\u{1F1F1}\u{1F1F9}",RO:"\u{1F1F7}\u{1F1F4}",HR:"\u{1F1ED}\u{1F1F7}",SI:"\u{1F1F8}\u{1F1EE}",IS:"\u{1F1EE}\u{1F1F8}",SK:"\u{1F1F8}\u{1F1F0}",CA:"\u{1F1E8}\u{1F1E6}",BR:"\u{1F1E7}\u{1F1F7}",JP:"\u{1F1EF}\u{1F1F5}",EU:"\u{1F1EA}\u{1F1FA}"};function f(t){return t?Z[t.toUpperCase()]??"\u{1F3F3}":""}function _(t){if(!t)return"";let e=t.toLowerCase();return["active","clean","passed","filed","paid","ready"].includes(e)?`is-${e}`:["expired","revoked"].includes(e)?"is-expired":e==="reference"?"is-reference":""}function $(t){return t.split(/\s+/).filter(Boolean).slice(0,2).map(e=>e[0]).join("").toUpperCase()}var y=new Set;function I(t){t.innerHTML=`
    <div class="app">
      <div class="app__brand">
        <div class="brand-mark"><span>I</span></div>
        <div class="brand-name">
          <span class="brand-name__word">myID</span>
          <span class="brand-name__tag">Personal Wallet</span>
        </div>
      </div>
      <header class="app__topbar topbar" id="topbar"></header>
      <nav class="app__nav sidebar" id="sidebar"></nav>
      <main class="app__main" id="main"></main>
    </div>
  `}function N(t){let e=document.getElementById("topbar");if(!e)return;let a=t.meta.kycScore;e.innerHTML=`
    <div class="topbar__title">
      <div class="topbar__title__heading">${t.holder.fullName}</div>
      <div class="topbar__title__sub">${t.meta.counts.documents} documents \xB7 ${t.meta.counts.categories} categories</div>
    </div>
    <div class="topbar__spacer"></div>
    <div class="topbar__group">
      ${a?`
        <div class="kyc-pill" title="${a.method??""}">
          <span class="kyc-pill__dot"></span>
          <span class="kyc-pill__label">${a.rating}</span>
          <span class="kyc-pill__score">${a.value}/100</span>
        </div>
      `:""}
      <button class="icon-btn" aria-label="Search">${l("search")}</button>
      <button class="icon-btn" aria-label="Share">${l("external")}</button>
      <div class="avatar">${$(t.holder.fullName)}</div>
    </div>
  `}function k(t,e,a){let n=document.getElementById("sidebar");if(!n)return;let r=e.sections.map(i=>`
      <div class="nav-section ${y.has(i.id)?"is-collapsed":""}" data-section="${i.id}">
        <header class="nav-section__head" data-toggle="${i.id}">
          <span class="nav-section__id">${i.id}</span>
          <span class="nav-section__label">${i.label}</span>
          <span class="nav-section__chevron">${l("chevron-down")}</span>
        </header>
        <div class="nav-section__items">
          ${i.items.map(c=>`
            <a class="nav-link ${c.route===a?"is-active":""}" data-route="${c.route}">
              <span class="nav-link__id">${c.id}</span>
              <span class="nav-link__icon">${l(c.icon)}</span>
              <span class="nav-link__label">${c.label}</span>
              ${c.badge?`<span class="nav-link__badge">${c.badge}</span>`:""}
            </a>
          `).join("")}
        </div>
      </div>
    `).join("");n.innerHTML=`
    ${r}
    <hr class="nav-divider" />
    <div class="nav-footer">
      <div class="workspace-card">
        <div class="workspace-card__title">Schema \xB7 ${t.meta.schemaVersion}</div>
        <div class="workspace-card__meta">Generated ${t.meta.generatedAt}</div>
      </div>
    </div>
  `,n.addEventListener("click",i=>{let d=i.target,c=d.closest("[data-toggle]");if(c){let v=c.dataset.toggle;y.has(v)?y.delete(v):y.add(v);let g=n.querySelector(`[data-section="${v}"]`);g&&g.classList.toggle("is-collapsed");return}let p=d.closest("[data-route]");p&&(L(p.dataset.route),o.set({}))})}function G(t){let e=t.holder,a=t.meta.kycScore,n=e.nationality.map(r=>`${f(r)} ${s(r)}`).join(" \xB7 ");return`
    <div class="holder-card">
      <div class="holder-card__avatar">${$(e.fullName)}</div>
      <div>
        <div class="holder-card__name">${s(e.fullName)}</div>
        <div class="holder-card__sub">${s(e.placeOfBirth)} \xB7 ${h(e.dateOfBirth)} \xB7 resident in ${f(e.residency.country)} ${s(e.residency.country)}</div>
        <div class="holder-card__chips">
          <div class="holder-card__chip"><span>nat.</span>${n}</div>
          ${e.taxIds.slice(0,3).map(r=>`<div class="holder-card__chip"><span>${s(r.type)}</span>${s(r.value)}</div>`).join("")}
        </div>
      </div>
      ${a?`
        <div class="holder-card__metrics">
          <div class="holder-card__score">${a.value}</div>
          <div class="holder-card__score-label">KYC \xB7 ${s(a.rating)}</div>
        </div>
      `:""}
    </div>
  `}function F(t){let e=t.assets??{},a=e.front||e.thumb||e.back||e.alt||e.alt2010;return a?`<img src="${s(a)}" alt="${s(t.label)}" loading="lazy" />`:e.qr?`<div class="doc-card__placeholder">${l("check",48)}<span>${s(t.type)}</span></div>`:`<div class="doc-card__placeholder">${l("id-card",48)}<span>${s(t.type)}</span></div>`}function A(t,e){let a=(t.tags??[]).slice(0,3).map(n=>`<span class="tag">${s(n)}</span>`).join("");return`
    <article class="doc-card" data-doc-id="${s(t.id)}" style="--cat-accent:${s(e)}">
      <div class="doc-card__accent-bar"></div>
      <div class="doc-card__media">${F(t)}</div>
      <div class="doc-card__body">
        <div class="doc-card__head">
          <div class="doc-card__title">${s(t.label)}</div>
          <span class="pill ${_(String(t.status))}">${s(String(t.status))}</span>
        </div>
        <div class="doc-card__meta">${f(t.issuer.country)} ${s(t.issuer.name)}</div>
        ${t.documentNumber?`<div class="doc-card__row"><span class="lbl">no.</span><span class="val">${s(String(t.documentNumber))}</span></div>`:""}
        ${t.expiryDate?`<div class="doc-card__row"><span class="lbl">exp.</span><span class="val">${h(t.expiryDate)}</span></div>`:""}
        <div class="doc-card__footer">
          <div class="doc-card__tags">${a}</div>
        </div>
      </div>
    </article>
  `}function Y(t){return`
    <section class="cat-section" style="${`--cat-bg: ${t.color}22; --cat-fg: ${t.color}`}">
      <div class="cat-section__head">
        <div class="cat-section__title">
          <div class="cat-section__icon">${l(t.icon)}</div>
          <h2>${s(t.label)}</h2>
        </div>
        <div class="cat-section__count">${t.documents.length} document${t.documents.length===1?"":"s"}</div>
      </div>
      <p class="cat-section__desc">${s(t.description)}</p>
      <div class="doc-grid">
        ${t.documents.map(a=>A(a,t.color)).join("")}
      </div>
    </section>
  `}function C(t,e){t.innerHTML=`
    <div class="view">
      <div class="view__head">
        <div class="view__title">
          <h1>All documents</h1>
          <p>${e.meta.counts.documents} items across ${e.meta.counts.categories} categories</p>
        </div>
        <div class="view__count">schema ${s(e.meta.schemaVersion)}</div>
      </div>
      ${G(e)}
      ${e.categories.map(Y).join("")}
    </div>
  `,R(t,e)}function j(t,e,a){let n=e.categories.find(r=>r.id===a);if(!n){t.innerHTML=`<div class="view"><div class="empty-state"><h3 class="t-h2">Category not found</h3><p class="t-meta">${s(a)}</p></div></div>`;return}t.innerHTML=`
    <div class="view">
      <div class="view__head">
        <div class="view__title">
          <h1>${s(n.label)}</h1>
          <p>${s(n.description)}</p>
        </div>
        <div class="view__count">${n.documents.length} item${n.documents.length===1?"":"s"}</div>
      </div>
      <div class="doc-grid">
        ${n.documents.map(r=>`${""}${J(r,n.color)}`).join("")}
      </div>
    </div>
  `,R(t,e)}function J(t,e){return A(t,e)}function R(t,e){t.addEventListener("click",a=>{let n=a.target.closest("[data-doc-id]");if(!n)return;let r=n.dataset.docId;if(!r)return;let i=z(e,r);i&&o.set({selectedDoc:i})})}function z(t,e){for(let a of t.categories){let n=a.documents.find(r=>r.id===e);if(n)return n}return null}var Q=new Set(["id","type","label","issuer","documentNumber","issueDate","expiryDate","status","tags","verifications","assets","notes","lastVerified","_source"]);function u(t,e){return`<div class="detail__row"><span class="lbl">${s(t)}</span><span class="val">${e}</span></div>`}function X(t){let e=t.assets??{},a=e.front||e.thumb||e.back||e.alt||e.alt2010||e.qr;return a?`<img src="${s(a)}" alt="${s(t.label)}" />`:`<div class="doc-card__placeholder" style="opacity:0.7">${l("id-card",96)}<span>${s(t.type)}</span></div>`}function B(t,e){let a=t.querySelector("#detail-overlay");if(a||(a=document.createElement("div"),a.id="detail-overlay",a.className="detail-overlay",t.appendChild(a),a.addEventListener("click",c=>{c.target===a&&o.set({selectedDoc:null})})),!e){a.classList.remove("is-open"),a.innerHTML="";return}let n=[];for(let[c,p]of Object.entries(e)){if(Q.has(c)||p==null)continue;let v;Array.isArray(p)?v=p.map(g=>typeof g=="object"?JSON.stringify(g):s(String(g))).join(", "):typeof p=="object"?v=`<pre>${s(JSON.stringify(p,null,2))}</pre>`:v=s(String(p)),n.push(u(c,v))}let r=(e.tags??[]).map(c=>`<span class="tag">${s(c)}</span>`).join(" "),i=(e.verifications??[]).map(c=>`<div>${s(c.type)}: <span class="u-mono">${s(c.method)}</span></div>`).join("");a.innerHTML=`
    <div class="detail" role="dialog" aria-label="${s(e.label)}">
      <div class="detail__media">${X(e)}</div>
      <div class="detail__body">
        <button class="detail__close" id="detail-close">${l("x")}</button>
        <div class="detail__title">${s(e.label)}</div>
        <div class="detail__sub">${f(e.issuer.country)} ${s(e.issuer.name)} \xB7 <span class="pill ${_(String(e.status))}">${s(String(e.status))}</span></div>

        <div class="detail__rows">
          ${e.documentNumber?u("document no.",`<span class="u-mono">${s(String(e.documentNumber))}</span>`):""}
          ${e.issueDate?u("issued",h(e.issueDate)):""}
          ${e.expiryDate?u("expires",h(e.expiryDate)):""}
          ${e.lastVerified?u("verified",h(e.lastVerified)):""}
          ${r?u("tags",r):""}
          ${i?u("verifications",i):""}
          ${n.join("")}
          ${e._source?u("source",`<span class="u-muted">${s(e._source)}</span>`):""}
        </div>
      </div>
    </div>
  `,a.classList.add("is-open");let d=a.querySelector("#detail-close");d&&d.addEventListener("click",()=>o.set({selectedDoc:null}))}var m="[myid]";console.info(m,"script.js evaluated",{ts:Date.now(),readyState:document.readyState});async function ee(){console.info(m,"bootstrap entered");let t=document.getElementById("app");if(!t){console.error(m,"no #app");return}I(t);let e=document.getElementById("main");if(!e){console.error(m,"no #main");return}e.innerHTML='<div class="view"><div class="empty-state"><h3 class="t-h2">Loading\u2026</h3></div></div>';let a,n;try{[a,n]=await Promise.all([x(),S()]),console.info(m,"data loaded",{categories:a.categories.length,docs:a.categories.reduce((r,i)=>r+i.documents.length,0),navSections:n.sections.length})}catch(r){let i=r;console.error(m,"data load failed",i.stack||i.message),e.innerHTML=`<div class="view"><div class="empty-state"><h3 class="t-h2">Could not load data</h3><p class="t-meta">${i.message}</p></div></div>`;return}o.set({data:a,nav:n,loading:!1}),o.subscribe(()=>O()),E(n,r=>{console.info(m,"route change",r),o.set({route:r})}),O()}function O(){let{data:t,nav:e,route:a,selectedDoc:n}=o.get();if(!t||!e)return;N(t),k(t,e,a.path);let r=document.getElementById("main");if(r){if(a.path==="wallet/all")C(r,t);else if(a.path.startsWith("wallet/")){let i=a.path.split("/")[1];j(r,t,i)}else r.innerHTML=`<div class="view"><div class="empty-state"><h3 class="t-h2">Unknown route</h3><p class="t-meta">${a.path}</p></div></div>`;B(document.body,n)}}ee().catch(t=>console.error(m,"bootstrap rejected",t.stack||t.message));})();
