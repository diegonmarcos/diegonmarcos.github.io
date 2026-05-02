(()=>{var be=Object.defineProperty;var fe=(e,s,a)=>s in e?be(e,s,{enumerable:!0,configurable:!0,writable:!0,value:a}):e[s]=a;var ut=(e,s,a)=>(fe(e,typeof s!="symbol"?s+"":s,a),a);var _e={route:{path:"cashflow/categories",tab:"overview",params:{}},reportingCurrency:"EUR",period:{months:12,label:"12M"},data:null,nav:null,loading:!0,error:null},mt=class{constructor(){ut(this,"state",{..._e});ut(this,"listeners",new Set)}get(){return this.state}set(s){this.state={...this.state,...s},this.listeners.forEach(a=>a())}subscribe(s){return this.listeners.add(s),()=>this.listeners.delete(s)}},T=new mt;var $e="mock",xe="nav";function At(e){let s=globalThis.PORTAL_DATA;if(console.info("[my-fin]","loader.readPortalData",{key:e,bagKeys:s?Object.keys(s):null,valueType:s&&e in s?Array.isArray(s[e])?"array":typeof s[e]:"missing"}),!s||!(e in s))throw new Error(`PORTAL_DATA["${e}"] not found. Make sure data-${e}.json.js is loaded BEFORE script.js in index.html.`);return s[e]}var ht=null,gt=null;async function Bt(){return ht||(ht=At($e)),ht}async function Rt(){return gt||(gt=At(xe)),gt}function Te(e){let s=window.location.hash.replace(/^#\/?/,"");if(!s)return{path:e.default,tab:vt(e,e.default),params:{}};let[a,n=""]=s.split("?"),t=new URLSearchParams(n),r=t.get("tab"),d={};for(let[p,h]of t.entries())p!=="tab"&&(d[p]=h);return we(e,a)?{path:a,tab:r??vt(e,a),params:d}:{path:e.default,tab:vt(e,e.default),params:{}}}function yt(e,s,a){let n=new URLSearchParams;s&&n.set("tab",s);for(let[r,d]of Object.entries(a))n.set(r,d);let t=n.toString();return t?`#/${e}?${t}`:`#/${e}`}function bt(e,s=null,a={}){window.location.hash=yt(e,s,a)}function Ht(e,s){let a=Nt();if(a.path!==e){bt(e,s);return}window.location.hash=yt(e,s,a.params)}function Dt(e,s){let a=Nt(),n={...a.params,[e]:s};window.location.hash=yt(a.path,a.tab,n)}function It(e,s){let a=()=>s(Te(e));return window.addEventListener("hashchange",a),a(),()=>window.removeEventListener("hashchange",a)}function we(e,s){return e.sections.some(a=>a.items.some(n=>n.route===s))}function vt(e,s){for(let a of e.sections)for(let n of a.items)if(n.route===s)return n.tabs&&n.tabs.length>0?n.tabs[0].id:null;return null}function Pt(e,s){for(let a of e.sections)for(let n of a.items)if(n.route===s)return{section:a,item:n};return null}function Nt(){let e=window.location.hash.replace(/^#\/?/,""),[s,a=""]=e.split("?"),n=new URLSearchParams(a),t=n.get("tab"),r={};for(let[d,p]of n.entries())d!=="tab"&&(r[d]=p);return{path:s,tab:t,params:r}}var N={housing:{label:"Accommodation",color:"#B89968",icon:"home"},food:{label:"Food & dining",color:"#6FA78A",icon:"utensils"},transport:{label:"Transport",color:"#7B95A8",icon:"car"},travel:{label:"Travel",color:"#A07B8C",icon:"plane"},entertainment:{label:"Entertainment",color:"#C89456",icon:"film"},shopping:{label:"Shopping",color:"#5F7884",icon:"bag"},health:{label:"Health",color:"#B66758",icon:"heart"},education:{label:"Education",color:"#8C7A6B",icon:"book"},utilities:{label:"Subscriptions",color:"#6E665D",icon:"plug"},taxes:{label:"Taxes",color:"#C89456",icon:"receipt"},income:{label:"Employment income",color:"#6FA78A",icon:"briefcase"},investment_income:{label:"Investment income",color:"#B89968",icon:"trending-up"},other:{label:"Other",color:"#6A6357",icon:"circle"}},X={etf_intl:{label:"International equity ETFs",color:"#B89968"},etf_br:{label:"Brazilian equity ETFs",color:"#6FA78A"},etf_bonds:{label:"Fixed-income ETFs",color:"#7B95A8"},etf_crypto:{label:"Digital-asset ETFs",color:"#A07B8C"},cash:{label:"Cash & equivalents",color:"#6E665D"}},Ft={home:'<path d="M3 9.5L12 3l9 6.5V20a2 2 0 0 1-2 2h-4v-7H9v7H5a2 2 0 0 1-2-2V9.5z"/>',utensils:'<path d="M3 2v7c0 1.1.9 2 2 2h2v11"/><path d="M7 2v20"/><path d="M21 15V2a5 5 0 0 0-5 5v6c0 1.1.9 2 2 2h3z"/>',car:'<path d="M5 17h14M3 13l2-6h14l2 6M5 13v4M19 13v4M7 17a1 1 0 1 0 0 2 1 1 0 0 0 0-2zM17 17a1 1 0 1 0 0 2 1 1 0 0 0 0-2z"/>',plane:'<path d="M17.8 19.2L16 11l3.5-3.5C21 6 21.5 4 21 3c-1-.5-3 0-4.5 1.5L13 8 4.8 6.2c-.5-.1-.9.1-1.1.5L3 8.7c-.2.4 0 .9.4 1.1L9 13l-2 3H4l-1 1 3 1.5 1.5 3 1-1v-3l3-2 4.4 5.6c.2.4.7.6 1.1.4l2-.6c.4-.2.6-.6.5-1.1z"/>',film:'<rect x="2" y="3" width="20" height="18" rx="2"/><line x1="2" y1="8" x2="22" y2="8"/><line x1="2" y1="16" x2="22" y2="16"/><line x1="7" y1="3" x2="7" y2="21"/><line x1="17" y1="3" x2="17" y2="21"/>',bag:'<path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"/><line x1="3" y1="6" x2="21" y2="6"/><path d="M16 10a4 4 0 0 1-8 0"/>',heart:'<path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/>',book:'<path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"/>',plug:'<path d="M9 2v6M15 2v6M6 8h12v4a6 6 0 0 1-12 0V8z"/><path d="M12 18v4"/>',receipt:'<path d="M4 2v20l3-2 3 2 3-2 3 2 3-2V2H4z"/><line x1="8" y1="7" x2="16" y2="7"/><line x1="8" y1="11" x2="16" y2="11"/><line x1="8" y1="15" x2="13" y2="15"/>',briefcase:'<rect x="2" y="7" width="20" height="14" rx="2"/><path d="M8 7V5a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"/>',"trending-up":'<polyline points="23 6 13.5 15.5 8.5 10.5 1 18"/><polyline points="17 6 23 6 23 12"/>',circle:'<circle cx="12" cy="12" r="10"/>',expenses:'<path d="M2 12h6m4 0h10"/><circle cx="10" cy="12" r="2"/><path d="M5 6v12M19 6v12M5 18h14"/>',portfolio:'<rect x="3" y="3" width="18" height="18" rx="2"/><path d="M7 12l3 3 7-7"/>',map:'<path d="M1 6v16l7-4 8 4 7-4V2l-7 4-8-4z"/><line x1="8" y1="2" x2="8" y2="18"/><line x1="16" y1="6" x2="16" y2="22"/>',reports:'<path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="9" y1="13" x2="15" y2="13"/><line x1="9" y1="17" x2="15" y2="17"/>',search:'<circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/>',bell:'<path d="M18 8a6 6 0 0 0-12 0c0 7-3 9-3 9h18s-3-2-3-9"/><path d="M13.73 21a2 2 0 0 1-3.46 0"/>',settings:'<circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"/>',"arrow-up":'<polyline points="18 15 12 9 6 15"/>',"arrow-down":'<polyline points="6 9 12 15 18 9"/>',download:'<path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/>',filter:'<polygon points="22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3"/>',"file-text":'<path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/>',globe:'<circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/>',shield:'<path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>',award:'<circle cx="12" cy="8" r="6"/><polyline points="9 13.5 9 22 12 19 15 22 15 13.5"/>',plus:'<line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/>',"chevron-down":'<polyline points="6 9 12 15 18 9"/>',"credit-card":'<rect x="2" y="5" width="20" height="14" rx="2"/><line x1="2" y1="10" x2="22" y2="10"/>',building:'<rect x="4" y="3" width="16" height="18" rx="1"/><line x1="9" y1="7" x2="9" y2="7"/><line x1="15" y1="7" x2="15" y2="7"/><line x1="9" y1="11" x2="9" y2="11"/><line x1="15" y1="11" x2="15" y2="11"/><line x1="9" y1="15" x2="9" y2="15"/><line x1="15" y1="15" x2="15" y2="15"/><line x1="10" y1="21" x2="10" y2="17"/><line x1="14" y1="21" x2="14" y2="17"/>',"home-key":'<path d="M3 9.5L12 3l9 6.5V20a2 2 0 0 1-2 2h-4v-7H9v7H5a2 2 0 0 1-2-2V9.5z"/>'};function x(e,s={}){let a=Ft[e]||Ft.circle,n='viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"',t=Object.entries(s).map(([r,d])=>`${r}="${d}"`).join(" ");return`<svg ${n} ${t}>${a}</svg>`}var ft={USD:"en-US",EUR:"de-DE",BRL:"pt-BR",GBP:"en-GB"};var Me={USD:"\u{1F1FA}\u{1F1F8}",EUR:"\u{1F1EA}\u{1F1FA}",BRL:"\u{1F1E7}\u{1F1F7}",GBP:"\u{1F1EC}\u{1F1E7}"};function jt(e){return Me[e]}function w(e,s,a,n){return s===a?e:e*n[s]/n[a]}function o(e,s,a={}){let{signed:n=!1,abs:t=!1,decimals:r,compact:d=!1}=a,p=t?Math.abs(e):e;return new Intl.NumberFormat(ft[s],{style:"currency",currency:s,minimumFractionDigits:r??2,maximumFractionDigits:r??2,notation:d?"compact":"standard",signDisplay:n?"always":"auto"}).format(p)}function K(e,s=1){return`${e>0?"+":""}${e.toFixed(s)}%`}function P(e,s="BRL"){let a=new Date(e+"T00:00:00");return new Intl.DateTimeFormat(ft[s],{day:"2-digit",month:"short"}).format(a)}function _t(e,s="BRL"){let[a,n]=e.split("-").map(Number),t=new Date(a,n-1,1);return new Intl.DateTimeFormat(ft[s],{month:"short",year:"numeric"}).format(t)}function $t(e,s,a){let n=w(1,e,s,a),t=n<1?4:n<100?2:0;return n.toFixed(t)}var xt=["EUR","USD","BRL","GBP"],Ce=[{months:1,label:"1M"},{months:3,label:"3M"},{months:6,label:"6M"},{months:12,label:"12M"}],st=new Set;function Vt(e){e.innerHTML=`
    <div class="app">
      <div class="app__brand">
        <div class="brand-mark"><span>M</span></div>
        <div class="brand-name">
          <span class="brand-name__word">My Financials</span>
          <span class="brand-name__tag">Private Wealth</span>
        </div>
      </div>
      <header class="app__topbar topbar" id="topbar"></header>
      <nav class="app__nav sidebar" id="sidebar"></nav>
      <main class="app__main" id="main"></main>
    </div>
  `}function Ot(e){let{reportingCurrency:s,period:a}=T.get(),n=document.getElementById("topbar");n.innerHTML=`
    <div class="topbar__search">
      ${x("search")}
      <input placeholder="Search transactions, holdings, reports..." />
      <kbd>\u2318K</kbd>
    </div>
    <div class="topbar__spacer"></div>
    <div class="topbar__group">
      <div class="fx-pill" title="Live FX rates \xB7 ${e.fx.source} \xB7 ${e.fx.asOf}">
        <span class="fx-pill__pair">USD/BRL</span>
        <span class="fx-pill__rate">${$t("USD","BRL",e.fx)}</span>
      </div>
      <div class="fx-pill">
        <span class="fx-pill__pair">EUR/BRL</span>
        <span class="fx-pill__rate">${$t("EUR","BRL",e.fx)}</span>
      </div>
      <div class="seg-control" id="period-select">
        ${Ce.map(t=>`
          <span class="seg-control__btn ${t.months===a.months?"is-active":""}" data-months="${t.months}" data-label="${t.label}">${t.label}</span>
        `).join("")}
      </div>
      <button class="currency-select" id="currency-select">
        <span class="currency-flag">${jt(s)}</span>
        <span class="currency-code">${s}</span>
        ${x("chevron-down")}
      </button>
      <button class="icon-btn icon-btn__dot" aria-label="Notifications">${x("bell")}</button>
      <button class="icon-btn" aria-label="Settings">${x("settings")}</button>
      <div class="avatar" title="Diego N. Marcos">DN</div>
    </div>
  `,n.querySelector("#period-select").addEventListener("click",t=>{let r=t.target.closest("[data-months]");r&&T.set({period:{months:parseInt(r.dataset.months,10),label:r.dataset.label}})}),n.querySelector("#currency-select").addEventListener("click",()=>{let t=xt.indexOf(s);T.set({reportingCurrency:xt[(t+1)%xt.length]})})}function qt(e,s,a){let n=document.getElementById("sidebar"),t=s.sections.map(r=>`
      <div class="nav-section ${st.has(r.id)?"is-collapsed":""}" data-section="${r.id}">
        <header class="nav-section__head" data-toggle="${r.id}">
          <span class="nav-section__id">${r.id}</span>
          <span class="nav-section__label">${r.label}</span>
          <span class="nav-section__chevron">${x("chevron-down")}</span>
        </header>
        <div class="nav-section__items">
          ${r.items.map(p=>`
            <a class="nav-link ${p.route===a?"is-active":""}" data-route="${p.route}">
              <span class="nav-link__id">${p.id}</span>
              <span class="nav-link__icon">${x(p.icon)}</span>
              <span class="nav-link__label">${p.label}</span>
              ${p.badge?`<span class="nav-link__badge">${p.badge}</span>`:""}
            </a>
          `).join("")}
        </div>
      </div>
    `).join("");n.innerHTML=`
    ${t}
    <hr class="nav-divider" />
    <div class="nav-section">
      <header class="nav-section__head" style="cursor:default">
        <span class="nav-section__label" style="padding-left:0">Accounts \xB7 ${e.accounts.length}</span>
      </header>
      <div class="nav-section__items">
        ${e.accounts.map(r=>`
          <a class="nav-link" style="cursor:default; padding-left: 12px">
            <span class="fx-tag" style="margin-right:6px">${r.currency}</span>
            <span class="nav-link__label">${r.institution}</span>
          </a>
        `).join("")}
      </div>
    </div>
    <div class="nav-footer">
      <div class="workspace-card">
        <div class="workspace-card__title">${e.meta.user.name}</div>
        <div class="workspace-card__meta">${e.meta.counts.transactions.toLocaleString()} transactions \xB7 1Y</div>
      </div>
    </div>
  `,n.addEventListener("click",r=>{let d=r.target,p=d.closest("[data-toggle]");if(p){let b=p.dataset.toggle;st.has(b)?st.delete(b):st.add(b);let _=n.querySelector(`[data-section="${b}"]`);_&&_.classList.toggle("is-collapsed");return}let h=d.closest("[data-route]");h&&bt(h.dataset.route)})}var Le=["income","investment_income"];function R(e){return e.amount>0||Le.includes(e.category)}function V(e,s){let a=new Date(e.meta.period.to);a.setMonth(a.getMonth()-s);let n=a.toISOString().slice(0,10);return e.transactions.filter(t=>t.date>=n)}function H(e,s,a){return w(e.amount,e.currency,s,a.fx)}function at(e,s,a){let n=new Map;for(let t of e){let r=t.date.slice(0,7);n.has(r)||n.set(r,{yearMonth:r,income:0,expense:0,net:0});let d=n.get(r),p=H(t,s,a);R(t)?d.income+=p:d.expense+=Math.abs(p),d.net=d.income-d.expense}return[...n.values()].sort((t,r)=>t.yearMonth.localeCompare(r.yearMonth))}function nt(e,s,a){let n=new Map,t=0;for(let r of e){if(R(r))continue;let d=Math.abs(H(r,s,a));n.has(r.category)||n.set(r.category,{category:r.category,amount:0,share:0,count:0});let p=n.get(r.category);p.amount+=d,p.count+=1,t+=d}for(let r of n.values())r.share=t>0?r.amount/t:0;return[...n.values()].sort((r,d)=>d.amount-r.amount)}function Gt(e,s,a){let n=new Map;for(let t of e){if(!t.location||t.location.cc==="--"||R(t))continue;let r=`${t.location.cc}|${t.location.city}`;n.has(r)||n.set(r,{city:t.location.city,country:t.location.country,cc:t.location.cc,lat:t.location.lat,lng:t.location.lng,amount:0,count:0});let d=n.get(r);d.amount+=Math.abs(H(t,s,a)),d.count+=1}return[...n.values()].sort((t,r)=>r.amount-t.amount)}function rt(e,s,a){return e.reduce((n,t)=>{let r=t.assetClass==="cash"?t.avgCost:t.quantity*t.currentPrice;return n+w(r,t.currency,s,a.fx)},0)}function Ut(e,s,a){return e.reduce((n,t)=>{let r=t.assetClass==="cash"?t.avgCost:t.quantity*t.avgCost;return n+w(r,t.currency,s,a.fx)},0)}function Z(e,s,a){let n=e.assetClass==="cash"?e.avgCost:e.quantity*e.currentPrice;return w(n,e.currency,s,a.fx)}function zt(e,s,a){if(e.assetClass==="cash")return{value:0,pct:0};let n=w(e.quantity*e.avgCost,e.currency,s,a.fx),t=w(e.quantity*e.currentPrice,e.currency,s,a.fx);return{value:t-n,pct:n>0?(t-n)/n*100:0}}function Yt(e,s,a){let n=new Map,t=0;for(let r of e){let d=Z(r,s,a);n.has(r.assetClass)||n.set(r.assetClass,{assetClass:r.assetClass,amount:0,share:0}),n.get(r.assetClass).amount+=d,t+=d}for(let r of n.values())r.share=t>0?r.amount/t:0;return[...n.values()].sort((r,d)=>d.amount-r.amount)}var Ee="http://www.w3.org/2000/svg",I=(e,s={},a=[])=>{let n=document.createElementNS(Ee,e);for(let[t,r]of Object.entries(s))n.setAttribute(t,String(r));return a.forEach(t=>{typeof t=="string"?n.appendChild(document.createTextNode(t)):n.appendChild(t)}),n};function Wt(e){let{data:s,width:a,height:n,yLabel:t}=e,r={l:50,r:12,t:8,b:26},d=a-r.l-r.r,p=n-r.t-r.b,h=Math.max(1,...s.flatMap(f=>[f.income,f.expense])),b=Xt(h),_=f=>r.t+p-f/b*p,u=I("svg",{class:"chart",viewBox:`0 0 ${a} ${n}`,preserveAspectRatio:"xMidYMid meet"}),c=[0,.25,.5,.75,1].map(f=>f*b);for(let f of c){let g=_(f);u.appendChild(I("line",{class:"chart__grid-line",x1:r.l,x2:a-r.r,y1:g,y2:g})),u.appendChild(I("text",{x:r.l-8,y:g+3,"text-anchor":"end"},[t(f)]))}let i=d/s.length,l=Math.min(14,i/3);return s.forEach((f,g)=>{let y=r.l+i*g+i/2,m=_(f.income);u.appendChild(I("rect",{class:"chart__bar chart__bar--income",x:y-l-1,y:m,width:l,height:r.t+p-m,rx:2}));let $=_(f.expense);u.appendChild(I("rect",{class:"chart__bar chart__bar--expense",x:y+1,y:$,width:l,height:r.t+p-$,rx:2})),(s.length<=8||g%2===0)&&u.appendChild(I("text",{x:y,y:n-8,"text-anchor":"middle"},[f.label]))}),u}function Xt(e){if(e<=0)return 1;let s=Math.pow(10,Math.floor(Math.log10(e))),a=e/s;return(a<=1?1:a<=2?2:a<=5?5:10)*s}function G(e){let{segments:s,size:a,thickness:n=18}=e,t=a/2-4,r=t-n,d=a/2,p=a/2,h=s.reduce((u,c)=>u+c.value,0)||1,b=I("svg",{class:"chart",viewBox:`0 0 ${a} ${a}`,width:a,height:a});b.appendChild(I("circle",{class:"chart__donut-track",cx:d,cy:p,r:(t+r)/2,fill:"none","stroke-width":n,stroke:"rgba(255,255,255,0.04)"}));let _=-Math.PI/2;return s.forEach(u=>{if(u.value<=0)return;let c=u.value/h*Math.PI*2,i=d+t*Math.cos(_),l=p+t*Math.sin(_),f=d+t*Math.cos(_+c),g=p+t*Math.sin(_+c),y=d+r*Math.cos(_),m=p+r*Math.sin(_),$=d+r*Math.cos(_+c),A=p+r*Math.sin(_+c),S=c>Math.PI?1:0,O=[`M ${i} ${l}`,`A ${t} ${t} 0 ${S} 1 ${f} ${g}`,`L ${$} ${A}`,`A ${r} ${r} 0 ${S} 0 ${y} ${m}`,"Z"].join(" ");b.appendChild(I("path",{d:O,fill:u.color,opacity:.92})),_+=c}),b}function Kt(e){let{values:s,labels:a,width:n,height:t,yLabel:r}=e,d={l:60,r:12,t:12,b:26},p=n-d.l-d.r,h=t-d.t-d.b,b=Math.max(...s),_=Math.min(...s),u=Xt(b),c=Math.max(0,ke(_)),i=u-c||1,l=j=>d.t+h-(j-c)/i*h,f=I("svg",{class:"chart",viewBox:`0 0 ${n} ${t}`}),g=[0,.25,.5,.75,1].map(j=>c+j*(u-c));for(let j of g){let F=l(j);f.appendChild(I("line",{class:"chart__grid-line",x1:d.l,x2:n-d.r,y1:F,y2:F})),f.appendChild(I("text",{x:d.l-8,y:F+3,"text-anchor":"end"},[r(j)]))}let y=s.map((j,F)=>{let z=d.l+F/Math.max(1,s.length-1)*p,Y=l(j);return[z,Y]}),m=y.map(([j,F],z)=>`${z===0?"M":"L"} ${j.toFixed(1)} ${F.toFixed(1)}`).join(" "),$=`${m} L ${y[y.length-1][0].toFixed(1)} ${d.t+h} L ${d.l} ${d.t+h} Z`,A=`area-${Math.random().toString(36).slice(2,8)}`,S=I("defs"),O=I("linearGradient",{id:A,x1:"0",x2:"0",y1:"0",y2:"1"});O.appendChild(I("stop",{offset:"0%","stop-color":"#5B8CFF","stop-opacity":"0.20"})),O.appendChild(I("stop",{offset:"100%","stop-color":"#5B8CFF","stop-opacity":"0"})),S.appendChild(O),f.appendChild(S),f.appendChild(I("path",{class:"chart__area",d:$,fill:`url(#${A})`})),f.appendChild(I("path",{class:"chart__line",d:m,fill:"none"}));let et=Math.ceil(a.length/8);return a.forEach((j,F)=>{if(F%et!==0&&F!==a.length-1)return;let z=d.l+F/Math.max(1,a.length-1)*p;f.appendChild(I("text",{x:z,y:t-8,"text-anchor":"middle"},[j]))}),f}function ke(e){if(e<=0)return 0;let s=Math.pow(10,Math.floor(Math.log10(e))),a=e/s;return(a>=5?5:a>=2?2:1)*s}function E(e,s){return!e.tabs||e.tabs.length===0?"":`
    <nav class="view-tabs" data-tabbar="${e.route}">
      ${e.tabs.map(a=>`
        <button class="view-tabs__tab ${a.id===s?"is-active":""}" data-tab="${a.id}">${a.label}</button>
      `).join("")}
    </nav>
  `}function C(e,s){e.querySelectorAll("[data-tabbar]").forEach(a=>{a.addEventListener("click",n=>{let t=n.target.closest("[data-tab]");t&&Ht(s,t.dataset.tab)})})}function Jt(e,s,a,n){let{reportingCurrency:t,period:r}=T.get(),d=V(s,r.months),p=at(d,t,s),h=nt(d,t,s),b=p.reduce((m,$)=>m+$.income,0),_=p.reduce((m,$)=>m+$.expense,0),u=p.filter(m=>m.expense>100),c=u.length?u.reduce((m,$)=>m+$.expense,0)/u.length:0,i=p[p.length-1],l=p[p.length-2],f=l&&l.expense>0?(i.expense-l.expense)/l.expense*100:0,g=b>0?(b-_)/b*100:0;e.innerHTML=`
    <div class="view fade-in">
      <header class="view__head">
        <div class="view__title">
          <span class="t-eyebrow">A \xB7 Cashflow</span>
          <h1 class="t-display">${a.label}</h1>
        </div>
        <div class="view__actions">
          <button class="btn btn--secondary">${x("download")} Export CSV</button>
        </div>
      </header>

      ${E(a,n)}

      <section class="grid-4">
        ${it("positive","Net savings",o(b-_,t,{decimals:0}),K(g,1)+" rate")}
        ${it("brand","Avg monthly",o(c,t,{decimals:0}),`${u.length} months`)}
        ${it("violet","This month",o(i?.expense||0,t,{decimals:0}),K(f,1)+" vs last")}
        ${it("gold","Top category",h[0]?N[h[0].category].label:"\u2014",h[0]?o(h[0].amount,t,{decimals:0}):"")}
      </section>

      <section id="tab-content"></section>
    </div>
  `;let y=e.querySelector("#tab-content");if(n==="overview"){y.innerHTML=`
      <div class="grid-2">
        <article class="card">
          <header class="card__head"><div><h2 class="card__title">Income vs expense</h2><p class="card__subtitle">Last ${p.length} months</p></div></header>
          <div id="bars"></div>
        </article>
        <article class="card">
          <header class="card__head"><div><h2 class="card__title">Category split</h2><p class="card__subtitle">Total spend</p></div></header>
          <div id="donut" class="donut-wrap" style="height: 220px"></div>
          <div id="leg" class="chart-legend" style="flex-direction:column; gap: 8px"></div>
        </article>
      </div>
    `,y.querySelector("#bars").appendChild(Wt({data:p.map($=>({label:_t($.yearMonth,t).split(" ")[0],income:$.income,expense:$.expense})),width:720,height:240,yLabel:$=>o($,t,{decimals:0,compact:!0})}));let m=y.querySelector("#donut");m.appendChild(G({segments:h.slice(0,8).map($=>({label:N[$.category].label,value:$.amount,color:N[$.category].color})),size:200,thickness:28})),m.insertAdjacentHTML("beforeend",`<div class="donut-wrap__center"><div class="donut-wrap__label">Total</div><div class="donut-wrap__value">${o(_,t,{decimals:0,compact:!0})}</div></div>`),y.querySelector("#leg").innerHTML=Zt(h.slice(0,8),t)}else if(n==="donut"){y.innerHTML=`
      <article class="card">
        <header class="card__head"><div><h2 class="card__title">Categories</h2><p class="card__subtitle">${h.length} active categories</p></div></header>
        <div style="display:grid; grid-template-columns: 280px 1fr; gap: 32px; align-items: center">
          <div id="big-donut" class="donut-wrap" style="height: 280px"></div>
          <div id="big-leg" class="chart-legend" style="flex-direction:column; gap: 12px"></div>
        </div>
      </article>
    `;let m=y.querySelector("#big-donut");m.appendChild(G({segments:h.map($=>({label:N[$.category].label,value:$.amount,color:N[$.category].color})),size:260,thickness:36})),m.insertAdjacentHTML("beforeend",`<div class="donut-wrap__center"><div class="donut-wrap__label">Spend</div><div class="donut-wrap__value">${o(_,t,{decimals:0,compact:!0})}</div></div>`),y.querySelector("#big-leg").innerHTML=Zt(h,t)}else n==="trend"&&(y.innerHTML=`
      <article class="card">
        <header class="card__head"><div><h2 class="card__title">Spend trend</h2><p class="card__subtitle">Total monthly expense over time</p></div></header>
        <div id="line"></div>
      </article>
      <article class="card">
        <header class="card__head"><div><h2 class="card__title">Category-by-month heat</h2><p class="card__subtitle">Concentration of spend per category</p></div></header>
        <div id="heat"></div>
      </article>
    `,y.querySelector("#line").appendChild(Kt({values:p.map(m=>m.expense),labels:p.map(m=>_t(m.yearMonth,t).split(" ")[0]),width:1100,height:260,yLabel:m=>o(m,t,{decimals:0,compact:!0})})),y.querySelector("#heat").innerHTML=Se(d,p,h.slice(0,8),t,s));C(e,a.route)}function Zt(e,s){return e.map(a=>`
    <div class="chart-legend__item" style="display:flex; align-items:center; justify-content:space-between; width:100%">
      <span style="display:flex; align-items:center; gap:8px">
        <span class="chart-legend__item-dot" style="background:${N[a.category].color}"></span>
        <span class="chart-legend__item-label">${N[a.category].label}</span>
      </span>
      <span style="display:flex; align-items:center; gap:10px">
        <span class="t-meta">${(a.share*100).toFixed(1)}%</span>
        <span class="chart-legend__item-value">${o(a.amount,s,{decimals:0})}</span>
      </span>
    </div>
  `).join("")}function Se(e,s,a,n,t){return`<div style="overflow:auto"><table class="tbl">
    <thead><tr><th>Category</th>${s.map(r=>`<th class="num">${r.yearMonth.slice(5)}</th>`).join("")}</tr></thead>
    <tbody>
      ${a.map(r=>{let d=N[r.category];return`<tr>
          <td><span class="tag" style="--tag-color:${d.color}"><span class="tag__dot"></span>${d.label}</span></td>
          ${s.map(p=>{let b=t.transactions.filter(c=>c.date.startsWith(p.yearMonth)&&c.category===r.category&&!R(c)).reduce((c,i)=>c+Math.abs(w(i.amount,i.currency,n,t.fx)),0),_=r.amount?b/(r.amount/s.length):0,u=Math.min(.9,.05+_*.25);return`<td class="num" style="background:${d.color}${Math.round(u*255).toString(16).padStart(2,"0")}">${o(b,n,{decimals:0,compact:!0})}</td>`}).join("")}
        </tr>`}).join("")}
    </tbody></table></div>`}function it(e,s,a,n){return`<div class="kpi kpi--${e}"><div class="kpi__label">${s}</div><div class="kpi__value">${a}</div><div class="kpi__caption">${n}</div></div>`}var q=null;function Qt(e,s,a,n){let{reportingCurrency:t,period:r}=T.get(),d=V(s,r.months),p=Gt(d,t,s),h=p.reduce((c,i)=>c+i.amount,0),b=new Map;for(let c of p){b.has(c.country)||b.set(c.country,{country:c.country,cc:c.cc,amount:0,count:0,cities:0});let i=b.get(c.country);i.amount+=c.amount,i.count+=c.count,i.cities+=1}let _=[...b.values()].sort((c,i)=>i.amount-c.amount);e.innerHTML=`
    <div class="view fade-in">
      <header class="view__head">
        <div class="view__title">
          <span class="t-eyebrow">A \xB7 Cashflow</span>
          <h1 class="t-display">${a.label}</h1>
        </div>
        <div class="view__actions">
          <span class="badge badge--gold"><span class="badge__dot"></span>${p.length} cities \xB7 ${_.length} countries</span>
          <button class="btn btn--secondary">${x("download")} Export GPX</button>
        </div>
      </header>

      ${E(a,n)}

      <section id="tab-content"></section>
    </div>
  `;let u=e.querySelector("#tab-content");if(n==="cities"){u.innerHTML=`
      <section class="grid-3">
        ${J("brand","Total spent abroad",o(h,t,{decimals:0}))}
        ${J("violet","Cities visited",String(p.length),`${_.length} countries`)}
        ${J("gold","Top destination",p[0]?p[0].city:"\u2014",p[0]?o(p[0].amount,t,{decimals:0}):"")}
      </section>
      <section class="map-shell">
        <article class="card card--flush">
          <div id="leaflet-map" class="map-canvas"></div>
        </article>
        <aside class="map-side">
          <article class="card card--compact">
            <header class="card__head"><div><h2 class="card__title">Top destinations</h2><p class="card__subtitle">By spend</p></div></header>
            <div class="city-list" id="city-list"></div>
          </article>
        </aside>
      </section>
    `;let c=u.querySelector("#city-list"),i=p[0]?.amount||1;c.innerHTML=p.map((l,f)=>`
      <div class="city-row" data-idx="${f}">
        <div class="city-row__main">
          <span class="city-row__city">${tt(l.city)}</span>
          <span class="city-row__meta">${tt(l.country)} \xB7 ${l.count} tx</span>
        </div>
        <span class="city-row__amount">${o(l.amount,t,{decimals:0,compact:!0})}</span>
        <span class="city-row__bar" style="opacity:${.3+.7*(l.amount/i)}"></span>
      </div>
    `).join(""),c.addEventListener("click",l=>{let f=l.target.closest("[data-idx]");if(!f)return;let g=p[parseInt(f.dataset.idx,10)];q&&g&&q.flyTo([g.lat,g.lng],7,{duration:.9}),c.querySelectorAll(".is-active").forEach(y=>y.classList.remove("is-active")),f.classList.add("is-active")}),requestAnimationFrame(()=>Ae(p,t,i))}else n==="countries"&&(u.innerHTML=`
      <section class="grid-3">
        ${J("brand","Countries visited",String(_.length))}
        ${J("violet","Top country",_[0]?_[0].country:"\u2014",_[0]?o(_[0].amount,t,{decimals:0}):"")}
        ${J("gold","Avg per country",o(h/Math.max(1,_.length),t,{decimals:0}))}
      </section>
      <article class="card card--flush">
        <header class="card__head card__head--bordered"><div><h2 class="card__title">By country</h2><p class="card__subtitle">${_.length} countries</p></div></header>
        <div style="overflow:auto">
          <table class="tbl">
            <thead><tr><th>Country</th><th class="num">Cities</th><th class="num">Transactions</th><th class="num">Spent</th><th class="num">Share</th></tr></thead>
            <tbody>
              ${_.map(c=>{let i=h>0?c.amount/h*100:0;return`<tr>
                  <td><span class="fx-tag" style="margin-right:8px">${c.cc}</span>${tt(c.country)}</td>
                  <td class="num">${c.cities}</td>
                  <td class="num">${c.count}</td>
                  <td class="num">${o(c.amount,t,{decimals:0})}</td>
                  <td class="num"><div style="display:flex;align-items:center;gap:8px;justify-content:flex-end"><span>${i.toFixed(1)}%</span><div style="width:60px;height:4px;background:rgba(255,255,255,0.06);border-radius:2px;overflow:hidden"><div style="height:100%;width:${i.toFixed(1)}%;background:#5B8CFF"></div></div></div></td>
                </tr>`}).join("")}
            </tbody>
          </table>
        </div>
      </article>
    `);C(e,a.route)}function Ae(e,s,a){if(!(typeof L>"u")){q&&(q.remove(),q=null),q=L.map("leaflet-map",{zoomControl:!0,worldCopyJump:!0,minZoom:2}).setView([47,5],4),L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",{attribution:"&copy; OpenStreetMap",maxZoom:18}).addTo(q);for(let n of e){let t=10+Math.round(n.amount/a*18),r=t>20?"map-pin--lg":t>14?"map-pin--md":"",d=L.divIcon({html:`<div class="map-pin ${r}"></div>`,className:"map-pin-wrap",iconSize:[t,t],iconAnchor:[t/2,t/2]});L.marker([n.lat,n.lng],{icon:d}).bindPopup(`
      <div class="map-popup">
        <div class="map-popup__city">${tt(n.city)}</div>
        <div class="map-popup__country">${tt(n.country)} \xB7 ${n.cc}</div>
        <div class="map-popup__amount">${o(n.amount,s,{decimals:0})}</div>
        <div class="map-popup__count">${n.count} transactions</div>
      </div>
    `).addTo(q)}}}function J(e,s,a,n=""){return`<div class="kpi kpi--${e}"><div class="kpi__label">${s}</div><div class="kpi__value">${a}</div>${n?`<div class="kpi__caption">${n}</div>`:""}</div>`}function tt(e){return e.replace(/[&<>"']/g,s=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"})[s])}function te(e,s,a,n){let{reportingCurrency:t,period:r}=T.get(),d=V(s,r.months),p=new Map(s.accounts.map(c=>[c.id,c])),h=d;n==="expenses"?h=d.filter(c=>!R(c)):n==="incomes"&&(h=d.filter(c=>R(c)));let b=[...h].sort((c,i)=>i.date.localeCompare(c.date)),_=h.filter(R).reduce((c,i)=>c+H(i,t,s),0),u=h.filter(c=>!R(c)).reduce((c,i)=>c+Math.abs(H(i,t,s)),0);e.innerHTML=`
    <div class="view fade-in">
      <header class="view__head">
        <div class="view__title">
          <span class="t-eyebrow">A \xB7 Cashflow</span>
          <h1 class="t-display">${a.label}</h1>
        </div>
        <div class="view__actions">
          <button class="btn btn--secondary">${x("download")} Export CSV</button>
          <button class="btn btn--primary">${x("plus")} New transaction</button>
        </div>
      </header>

      ${E(a,n)}

      <section class="grid-3">
        ${Tt("positive","Total income",o(_,t,{decimals:0}),`${h.filter(R).length} entries`)}
        ${Tt("brand","Total expense",o(u,t,{decimals:0}),`${h.filter(c=>!R(c)).length} entries`)}
        ${Tt("gold","Net",o(_-u,t,{decimals:0,signed:!0}),"income \u2212 expense")}
      </section>

      <article class="card card--flush">
        <header class="card__head card__head--bordered">
          <div><h2 class="card__title">${Be(n)}</h2><p class="card__subtitle">${b.length.toLocaleString()} entries \xB7 showing ${Math.min(120,b.length)}</p></div>
        </header>
        <div style="overflow:auto; padding: 8px 0 12px">
          <table class="tbl">
            <thead>
              <tr>
                <th>Date</th>
                <th>Merchant</th>
                <th>Category</th>
                <th>Location</th>
                <th>Account</th>
                <th class="num">Native</th>
                <th class="num">${t}</th>
              </tr>
            </thead>
            <tbody>
              ${b.slice(0,120).map(c=>{let i=N[c.category],l=p.get(c.accountId),f=o(c.amount,c.currency,{abs:!0}),g=o(Math.abs(H(c,t,s)),t,{abs:!0}),y=R(c);return`
                  <tr>
                    <td class="dim">${P(c.date,t)}</td>
                    <td>
                      <div class="tbl-cell">
                        <span class="tbl-cell__icon" style="--cell-color:${i.color}; --cell-bg:${i.color}22">${x(i.icon)}</span>
                        <span class="tbl-cell__main">
                          <span class="tbl-cell__title">${ot(c.merchant)}</span>
                          <span class="tbl-cell__meta">${c.note?ot(c.note):""}</span>
                        </span>
                      </div>
                    </td>
                    <td><span class="tag" style="--tag-color:${i.color}"><span class="tag__dot"></span>${i.label}</span></td>
                    <td class="dim">${c.location&&c.location.cc!=="--"?`${ot(c.location.city)} <span class="t-dim">\xB7 ${c.location.cc}</span>`:'<span class="t-dim">\u2014</span>'}</td>
                    <td class="dim">${l?ot(l.institution):""}</td>
                    <td class="num"><span class="${y?"t-pos":"t-neg"}">${y?"+":"\u2212"}${f}</span> <span class="fx-tag">${c.currency}</span></td>
                    <td class="num dim">${g}</td>
                  </tr>
                `}).join("")}
            </tbody>
          </table>
        </div>
      </article>
    </div>
  `,C(e,a.route)}function Be(e){return e==="expenses"?"Expense ledger":e==="incomes"?"Income ledger":"All transactions"}function Tt(e,s,a,n=""){return`<div class="kpi kpi--${e}"><div class="kpi__label">${s}</div><div class="kpi__value">${a}</div>${n?`<div class="kpi__caption">${n}</div>`:""}</div>`}function ot(e){return e.replace(/[&<>"']/g,s=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"})[s])}var ee={Salary:"#34D399","13th salary":"#22D3EE","US ETF distributions":"#5B8CFF","EU ETF distributions":"#C084FC","BR ETF distributions":"#F472B6",Other:"#5E6884"};function se(e,s,a,n){let{reportingCurrency:t,period:r}=T.get(),d=V(s,r.months).filter(R),p=(g,y)=>y==="income"&&g.includes("13\xBA")?"13th salary":y==="income"?"Salary":g.includes("VTI")||g.includes("VOO")||g.includes("BND")?"US ETF distributions":g.includes("VWCE")||g.includes("IWDA")?"EU ETF distributions":g.includes("IVVB")||g.includes("BOVA")||g.includes("HASH")?"BR ETF distributions":"Other",h=new Map;for(let g of d){let y=p(g.merchant,g.category);h.has(y)||h.set(y,{label:y,amount:0,count:0});let m=h.get(y);m.amount+=H(g,t,s),m.count+=1}let b=[...h.values()].sort((g,y)=>y.amount-g.amount),_=b.reduce((g,y)=>g+y.amount,0),u=b.filter(g=>g.label==="Salary"||g.label==="13th salary"),c=b.filter(g=>g.label!=="Salary"&&g.label!=="13th salary"),i=b;n==="active"?i=u:n==="passive"&&(i=c),e.innerHTML=`
    <div class="view fade-in">
      <header class="view__head">
        <div class="view__title">
          <span class="t-eyebrow">B \xB7 Assets & Incomes</span>
          <h1 class="t-display">${a.label}</h1>
        </div>
      </header>

      ${E(a,n)}

      <section class="grid-3">
        ${wt("positive","Total income",o(_,t,{decimals:0}),`${d.length} entries`)}
        ${wt("brand","Active",o(u.reduce((g,y)=>g+y.amount,0),t,{decimals:0}),`${(u.reduce((g,y)=>g+y.amount,0)/_*100).toFixed(1)}% of total`)}
        ${wt("violet","Passive",o(c.reduce((g,y)=>g+y.amount,0),t,{decimals:0}),`${(c.reduce((g,y)=>g+y.amount,0)/_*100).toFixed(1)}% of total`)}
      </section>

      <article class="card">
        <header class="card__head"><div><h2 class="card__title">Income sources</h2><p class="card__subtitle">${n==="donut"?"All sources":n==="active"?"Active only":"Passive only"}</p></div></header>
        <div style="display:grid; grid-template-columns: 240px 1fr; gap: 32px; align-items: center">
          <div id="donut" class="donut-wrap" style="height: 240px"></div>
          <div id="leg" class="chart-legend" style="flex-direction:column; gap: 12px"></div>
        </div>
      </article>
    </div>
  `;let l=e.querySelector("#donut"),f=i.map(g=>({label:g.label,value:g.amount,color:ee[g.label]||"#5E6884"}));l.appendChild(G({segments:f,size:220,thickness:32})),l.insertAdjacentHTML("beforeend",`<div class="donut-wrap__center"><div class="donut-wrap__label">Total</div><div class="donut-wrap__value">${o(i.reduce((g,y)=>g+y.amount,0),t,{decimals:0,compact:!0})}</div></div>`),e.querySelector("#leg").innerHTML=i.map(g=>`
    <div class="chart-legend__item" style="display:flex; align-items:center; justify-content:space-between; width:100%">
      <span style="display:flex; align-items:center; gap:8px">
        <span class="chart-legend__item-dot" style="background:${ee[g.label]||"#5E6884"}"></span>
        <span class="chart-legend__item-label">${g.label}</span>
      </span>
      <span style="display:flex; align-items:center; gap:10px">
        <span class="t-meta">${g.count} entries</span>
        <span class="chart-legend__item-value">${o(g.amount,t,{decimals:0})}</span>
      </span>
    </div>
  `).join(""),C(e,a.route)}function wt(e,s,a,n=""){return`<div class="kpi kpi--${e}"><div class="kpi__label">${s}</div><div class="kpi__value">${a}</div>${n?`<div class="kpi__caption">${n}</div>`:""}</div>`}function ae(e,s,a,n){let{reportingCurrency:t}=T.get(),r=rt(s.holdings,t,s),d=Ut(s.holdings,t,s),p=r-d,h=d>0?p/d*100:0,b=Yt(s.holdings,t,s);e.innerHTML=`
    <div class="view fade-in">
      <header class="view__head">
        <div class="view__title">
          <span class="t-eyebrow">B \xB7 Assets & Incomes</span>
          <h1 class="t-display">${a.label}</h1>
        </div>
        <div class="view__actions">
          <button class="btn btn--ghost">${x("download")} Export</button>
          <button class="btn btn--secondary">${x("plus")} New holding</button>
        </div>
      </header>

      ${E(a,n)}

      <section class="grid-4">
        ${ct("brand","Net worth",o(r,t,{decimals:0}),`${s.holdings.length} positions`)}
        ${ct(p>=0?"positive":"gold","P&L",o(p,t,{decimals:0,signed:!0}),K(h,1)+" unrealised")}
        ${ct("violet","Cost basis",o(d,t,{decimals:0,compact:!0}),"Aggregate book value")}
        ${ct("gold","Cash",o(b.find(u=>u.assetClass==="cash")?.amount||0,t,{decimals:0,compact:!0}),"USD/EUR/GBP/BRL")}
      </section>

      <section id="tab-content"></section>
    </div>
  `;let _=e.querySelector("#tab-content");if(n==="allocation"){_.innerHTML=`
      <article class="card">
        <header class="card__head"><div><h2 class="card__title">Asset allocation</h2><p class="card__subtitle">By class \xB7 ${t}</p></div></header>
        <div style="display:grid; grid-template-columns: 240px 1fr; gap: 32px; align-items: center">
          <div id="alloc" class="donut-wrap" style="height: 240px"></div>
          <div class="chart-legend" style="flex-direction:column; gap: 12px">
            ${b.map(c=>`
              <div class="chart-legend__item" style="display:flex; justify-content:space-between; width:100%">
                <span style="display:flex; align-items:center; gap:8px">
                  <span class="chart-legend__item-dot" style="background:${X[c.assetClass].color}"></span>
                  <span class="chart-legend__item-label">${X[c.assetClass].label}</span>
                </span>
                <span style="display:flex; align-items:center; gap:10px">
                  <span class="t-meta">${(c.share*100).toFixed(1)}%</span>
                  <span class="chart-legend__item-value">${o(c.amount,t,{decimals:0,compact:!0})}</span>
                </span>
              </div>
            `).join("")}
          </div>
        </div>
      </article>
    `;let u=_.querySelector("#alloc");u.appendChild(G({segments:b.map(c=>({label:X[c.assetClass].label,value:c.amount,color:X[c.assetClass].color})),size:220,thickness:32})),u.insertAdjacentHTML("beforeend",`<div class="donut-wrap__center"><div class="donut-wrap__label">Total</div><div class="donut-wrap__value">${o(r,t,{decimals:0,compact:!0})}</div></div>`)}else if(n==="holdings"){let u=[...s.holdings].sort((c,i)=>Z(i,t,s)-Z(c,t,s));_.innerHTML=`
      <article class="card card--flush">
        <header class="card__head card__head--bordered"><div><h2 class="card__title">Holdings</h2><p class="card__subtitle">${s.holdings.length} positions</p></div></header>
        <div style="overflow:auto">
          <table class="tbl">
            <thead><tr><th>Holding</th><th>Class</th><th class="num">Qty</th><th class="num">Price</th><th class="num">Value</th><th class="num">P&amp;L</th><th class="num">Allocation</th></tr></thead>
            <tbody>
              ${u.map(c=>{let i=X[c.assetClass],l=Z(c,t,s),{value:f,pct:g}=zt(c,t,s),y=r>0?l/r*100:0,m=c.assetClass==="cash";return`<tr>
                  <td><div class="tbl-cell"><span class="tbl-cell__icon" style="--cell-color:${i.color}; --cell-bg:${i.color}22">${x("portfolio")}</span><span class="tbl-cell__main"><span class="tbl-cell__title">${c.ticker}</span><span class="tbl-cell__meta">${c.name} <span class="fx-tag" style="margin-left:4px">${c.currency}</span></span></span></div></td>
                  <td><span class="tag" style="--tag-color:${i.color}"><span class="tag__dot"></span>${i.label}</span></td>
                  <td class="num">${m?"\u2014":c.quantity.toLocaleString()}</td>
                  <td class="num">${m?"\u2014":o(c.currentPrice,c.currency)}</td>
                  <td class="num"><div class="dual-amount"><span class="dual-amount__primary">${o(l,t,{decimals:0})}</span>${c.currency!==t?`<span class="dual-amount__native">${o(m?c.avgCost:c.quantity*c.currentPrice,c.currency,{decimals:0})}</span>`:""}</div></td>
                  <td class="num">${m?'<span class="t-dim">\u2014</span>':`<span class="${f>=0?"t-pos":"t-neg"}">${o(f,t,{decimals:0,signed:!0})}</span><div class="t-meta">${K(g,1)}</div>`}</td>
                  <td class="num"><div style="display:flex;align-items:center;gap:8px;justify-content:flex-end"><span>${y.toFixed(1)}%</span><div style="width:60px;height:4px;background:rgba(255,255,255,0.06);border-radius:2px;overflow:hidden"><div style="height:100%;width:${y.toFixed(1)}%;background:${i.color};opacity:0.85"></div></div></div></td>
                </tr>`}).join("")}
            </tbody>
          </table>
        </div>
      </article>
    `}else if(n==="currency"){let u={};for(let i of s.holdings){let l=Z(i,t,s);u[i.currency]=(u[i.currency]||0)+l}let c=Object.values(u).reduce((i,l)=>i+l,0)||1;_.innerHTML=`
      <article class="card">
        <header class="card__head"><div><h2 class="card__title">Currency exposure</h2><p class="card__subtitle">Native currency of each holding</p></div></header>
        <div>
          ${Object.entries(u).sort((i,l)=>l[1]-i[1]).map(([i,l])=>{let f=l/c*100;return`
              <div style="display:flex; flex-direction:column; gap:6px; padding: 10px 0; border-bottom: 1px solid rgba(255,255,255,0.04)">
                <div style="display:flex; justify-content: space-between">
                  <span><span class="fx-tag" style="margin-right:8px">${i}</span><span class="t-meta">${f.toFixed(1)}%</span></span>
                  <span class="t-num">${o(l,t,{decimals:0})}</span>
                </div>
                <div style="height: 6px; border-radius: 3px; background: rgba(255,255,255,0.04); overflow: hidden">
                  <div style="height:100%; width:${f.toFixed(1)}%; background: linear-gradient(90deg, #5B8CFF, #C084FC); border-radius: 3px"></div>
                </div>
              </div>
            `}).join("")}
        </div>
      </article>
    `}C(e,a.route)}function ct(e,s,a,n=""){return`<div class="kpi kpi--${e}"><div class="kpi__label">${s}</div><div class="kpi__value">${a}</div>${n?`<div class="kpi__caption">${n}</div>`:""}</div>`}function ne(e,s,a,n){let{reportingCurrency:t,period:r}=T.get(),d=V(s,r.months).filter(R),p=d;n==="salary"?p=d.filter(u=>u.category==="income"):n==="dividends"&&(p=d.filter(u=>u.category==="investment_income"));let h=[...p].sort((u,c)=>c.date.localeCompare(u.date)),b=p.reduce((u,c)=>u+H(c,t,s),0),_=new Map(s.accounts.map(u=>[u.id,u]));e.innerHTML=`
    <div class="view fade-in">
      <header class="view__head">
        <div class="view__title">
          <span class="t-eyebrow">B \xB7 Assets & Incomes</span>
          <h1 class="t-display">${a.label}</h1>
        </div>
      </header>

      ${E(a,n)}

      <section class="grid-3">
        ${Mt("positive","Total",o(b,t,{decimals:0}),`${p.length} entries`)}
        ${Mt("brand","Average",o(p.length>0?b/p.length:0,t,{decimals:0}),"per entry")}
        ${Mt("gold","Latest",h[0]?P(h[0].date,t):"\u2014",h[0]?o(Math.abs(H(h[0],t,s)),t,{decimals:0}):"")}
      </section>

      <article class="card card--flush">
        <header class="card__head card__head--bordered"><div><h2 class="card__title">${n==="salary"?"Salary inflows":n==="dividends"?"Dividend / distribution events":"All income"}</h2><p class="card__subtitle">${p.length} entries</p></div></header>
        <div style="overflow:auto">
          <table class="tbl">
            <thead><tr><th>Date</th><th>Source</th><th>Type</th><th>Account</th><th class="num">Native</th><th class="num">${t}</th></tr></thead>
            <tbody>
              ${h.map(u=>{let c=N[u.category],i=_.get(u.accountId);return`<tr>
                  <td class="dim">${P(u.date,t)}</td>
                  <td><div class="tbl-cell"><span class="tbl-cell__icon" style="--cell-color:${c.color}; --cell-bg:${c.color}22">${x(c.icon)}</span><span class="tbl-cell__main"><span class="tbl-cell__title">${Ct(u.merchant)}</span><span class="tbl-cell__meta">${u.note?Ct(u.note):""}</span></span></div></td>
                  <td><span class="tag" style="--tag-color:${c.color}"><span class="tag__dot"></span>${c.label}</span></td>
                  <td class="dim">${i?Ct(i.institution):""}</td>
                  <td class="num"><span class="t-pos">+${o(u.amount,u.currency,{abs:!0})}</span> <span class="fx-tag">${u.currency}</span></td>
                  <td class="num">${o(H(u,t,s),t)}</td>
                </tr>`}).join("")}
            </tbody>
          </table>
        </div>
      </article>
    </div>
  `,C(e,a.route)}function Mt(e,s,a,n=""){return`<div class="kpi kpi--${e}"><div class="kpi__label">${s}</div><div class="kpi__value">${a}</div>${n?`<div class="kpi__caption">${n}</div>`:""}</div>`}function Ct(e){return e.replace(/[&<>"']/g,s=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"})[s])}function ie(e,s,a,n){let{reportingCurrency:t,period:r}=T.get(),d=s.accounts.filter(m=>m.type==="credit_card"),p=new Date;p.setDate(p.getDate()-30);let h=p.toISOString().slice(0,10),b=s.transactions.filter(m=>d.some($=>$.id===m.accountId)&&m.date>=h&&!R(m)),_=V(s,r.months).filter(m=>d.some($=>$.id===m.accountId)&&!R(m)),u=new Map;for(let m of d)u.set(m.id,{count:0,outstanding:0,ytd:0});for(let m of b){let $=u.get(m.accountId);$.outstanding+=Math.abs(H(m,t,s)),$.count+=1}for(let m of _){let $=u.get(m.accountId);$.ytd+=Math.abs(H(m,t,s))}let c=[...u.values()].reduce((m,$)=>m+$.outstanding,0),i=[...u.values()].reduce((m,$)=>m+$.ytd,0),l=new Map,f=new Map;for(let m of _){let $=m.date.slice(0,7);l.has(m.merchant)||l.set(m.merchant,new Set),l.get(m.merchant).add($),f.set(m.merchant,(f.get(m.merchant)||0)+Math.abs(H(m,t,s)))}let g=[...l.entries()].filter(([m,$])=>$.size>=6).map(([m,$])=>({merchant:m,months:$.size,total:f.get(m)})).sort((m,$)=>$.total-m.total);e.innerHTML=`
    <div class="view fade-in">
      <header class="view__head">
        <div class="view__title">
          <div class="crumbs"><span>C \xB7 Liabilities</span><span class="crumbs__sep">\u203A</span><span class="fx-tag">C0</span><span class="crumbs__current">${a.label}</span></div>
          <h1 class="t-display">${a.label}</h1>
        </div>
      </header>

      ${E(a,n)}

      <section class="grid-3">
        ${Lt("Outstanding \xB7 30d",o(c,t,{decimals:0}),`${b.length} charges`,"warning")}
        ${Lt("Spend \xB7 "+r.label,o(i,t,{decimals:0}),`${_.length} entries`)}
        ${Lt("Recurring annual",o(g.reduce((m,$)=>m+$.total,0),t,{decimals:0}),`${g.length} subscriptions`)}
      </section>

      <section id="tab-content"></section>
    </div>
  `;let y=e.querySelector("#tab-content");n==="outstanding"?y.innerHTML=`
      <article class="card card--flush">
        <header class="card__head card__head--bordered"><div><h2 class="card__title">Outstanding balances</h2><p class="card__subtitle">Last 30 days \xB7 pre-statement</p></div></header>
        <div style="overflow:auto">
          <table class="tbl">
            <thead><tr><th>Card</th><th>Currency</th><th class="num">Charges</th><th class="num">Outstanding (${t})</th><th class="num">Spend \xB7 ${r.label}</th></tr></thead>
            <tbody>
              ${d.map(m=>{let $=u.get(m.id);return`<tr>
                  <td><div class="tbl-cell"><span class="tbl-cell__icon" style="--cell-color:#B89968">${x("credit-card")}</span><span class="tbl-cell__main"><span class="tbl-cell__title">${m.institution}</span><span class="tbl-cell__meta">${m.name}</span></span></div></td>
                  <td><span class="fx-tag">${m.currency}</span></td>
                  <td class="num">${$.count}</td>
                  <td class="num">${o($.outstanding,t,{decimals:0})}</td>
                  <td class="num dim">${o($.ytd,t,{decimals:0})}</td>
                </tr>`}).join("")}
            </tbody>
          </table>
        </div>
      </article>
    `:n==="by-card"?y.innerHTML=d.map(m=>{let $=b.filter(A=>A.accountId===m.id).slice(0,30);return`
        <article class="card card--flush" style="margin-bottom: 16px">
          <header class="card__head card__head--bordered">
            <div><h2 class="card__title">${m.institution}</h2><p class="card__subtitle">${m.name} \xB7 <span class="fx-tag" style="margin-left:4px">${m.currency}</span></p></div>
            <span class="badge badge--gold"><span class="badge__dot"></span>${$.length} charges</span>
          </header>
          <div style="overflow:auto">
            <table class="tbl">
              <thead><tr><th>Date</th><th>Merchant</th><th>Category</th><th class="num">Amount</th></tr></thead>
              <tbody>
                ${$.map(A=>{let S=N[A.category];return`<tr>
                    <td class="dim">${P(A.date,t)}</td>
                    <td>${re(A.merchant)}</td>
                    <td><span class="tag" style="--tag-color:${S.color}"><span class="tag__dot"></span>${S.label}</span></td>
                    <td class="num"><span class="t-neg">\u2212${o(A.amount,A.currency,{abs:!0})}</span></td>
                  </tr>`}).join("")}
              </tbody>
            </table>
          </div>
        </article>`}).join(""):n==="recurring"&&(y.innerHTML=`
      <article class="card card--flush">
        <header class="card__head card__head--bordered"><div><h2 class="card__title">Recurring charges</h2><p class="card__subtitle">Detected in \u2265 6 of last ${r.months} months</p></div></header>
        <div style="overflow:auto">
          <table class="tbl">
            <thead><tr><th>Merchant</th><th class="num">Months active</th><th class="num">Avg / month</th><th class="num">Annual total</th></tr></thead>
            <tbody>
              ${g.map(m=>`<tr>
                <td><strong>${re(m.merchant)}</strong></td>
                <td class="num">${m.months}/${r.months}</td>
                <td class="num">${o(m.total/m.months,t,{decimals:0})}</td>
                <td class="num">${o(m.total,t,{decimals:0})}</td>
              </tr>`).join("")}
            </tbody>
          </table>
        </div>
      </article>
    `),C(e,a.route)}function Lt(e,s,a="",n){return`<div class="kpi"><div class="kpi__label">${e}</div><div class="kpi__value">${s}</div>${a?`<div class="kpi__caption">${a}</div>`:""}</div>`}function re(e){return e.replace(/[&<>"']/g,s=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"})[s])}function oe(e,s,a,n){let{reportingCurrency:t}=T.get(),r=s.realEstate||[],d=r.reduce((i,l)=>i+w(l.marketValue*l.ownershipPct/100,l.currency,t,s.fx),0),p=r.reduce((i,l)=>i+(l.mortgage?w(l.mortgage.outstandingBalance*l.ownershipPct/100,l.mortgage.currency,t,s.fx):0),0),h=d-p,b=d>0?p/d*100:0,_=r.reduce((i,l)=>i+(l.monthlyRent?w(l.monthlyRent,l.currency,t,s.fx):0),0),u=r.reduce((i,l)=>i+(l.mortgage?w(l.mortgage.monthlyPayment,l.mortgage.currency,t,s.fx):0),0);e.innerHTML=`
    <div class="view fade-in">
      <header class="view__head">
        <div class="view__title">
          <div class="crumbs"><span>C \xB7 Liabilities</span><span class="crumbs__sep">\u203A</span><span class="fx-tag">C1</span><span class="crumbs__current">${a.label}</span></div>
          <h1 class="t-display">${a.label}</h1>
        </div>
        <div class="view__actions">
          <button class="btn btn--secondary">${x("download")} Export valuation</button>
          <button class="btn btn--primary">${x("plus")} New property</button>
        </div>
      </header>

      ${E(a,n)}

      <section class="grid-4">
        ${lt("Aggregate market value",o(d,t,{decimals:0,compact:!0}),`${r.length} properties`)}
        ${lt("Outstanding mortgage debt",o(p,t,{decimals:0,compact:!0}))}
        ${lt("Net equity",o(h,t,{decimals:0,compact:!0}),`LTV ${b.toFixed(1)}%`)}
        ${lt("Monthly rent / debt service",`${o(_,t,{decimals:0})} / ${o(u,t,{decimals:0})}`,`Net ${o(_-u,t,{decimals:0,signed:!0})}`)}
      </section>

      <section id="tab-content"></section>
    </div>
  `;let c=e.querySelector("#tab-content");n==="portfolio"?c.innerHTML=`
      <article class="card card--flush">
        <header class="card__head card__head--bordered"><div><h2 class="card__title">Property portfolio</h2><p class="card__subtitle">${r.length} positions across ${new Set(r.map(i=>i.country)).size} countries</p></div></header>
        <div style="overflow:auto">
          <table class="tbl">
            <thead><tr><th>Property</th><th>Location</th><th class="num">Market value</th><th class="num">Outstanding</th><th class="num">Equity</th><th class="num">LTV</th><th class="num">Yield</th></tr></thead>
            <tbody>
              ${r.map(i=>{let l=i.marketValue*i.ownershipPct/100,f=i.mortgage?i.mortgage.outstandingBalance*i.ownershipPct/100:0,g=l-f,y=l>0?f/l*100:0,m=i.monthlyRent?i.monthlyRent*12/l*100:0;return`<tr>
                  <td><div class="tbl-cell"><span class="tbl-cell__icon" style="--cell-color:#B89968">${x("building")}</span><span class="tbl-cell__main"><span class="tbl-cell__title">${U(i.name)}</span><span class="tbl-cell__meta">${U(i.address)} \xB7 ${i.ownershipPct}% ownership</span></span></div></td>
                  <td><span class="fx-tag">${i.cc}</span> ${U(i.city)}</td>
                  <td class="num">${o(l,i.currency,{decimals:0})}</td>
                  <td class="num dim">${f>0?o(f,i.mortgage.currency,{decimals:0}):'<span class="t-dim">\u2014</span>'}</td>
                  <td class="num"><span class="t-pos">${o(g,i.currency,{decimals:0})}</span></td>
                  <td class="num">${y>0?y.toFixed(1)+"%":'<span class="t-dim">\u2014</span>'}</td>
                  <td class="num">${m>0?m.toFixed(2)+"%":'<span class="t-dim">\u2014</span>'}</td>
                </tr>`}).join("")}
              <tr style="background: rgba(184,153,104,0.04)">
                <td colspan="2" class="dim" style="text-align:right; padding-right:16px"><strong>Aggregate (${t})</strong></td>
                <td class="num"><strong>${o(d,t,{decimals:0})}</strong></td>
                <td class="num"><strong>${o(p,t,{decimals:0})}</strong></td>
                <td class="num"><strong class="t-pos">${o(h,t,{decimals:0})}</strong></td>
                <td class="num"><strong>${b.toFixed(1)}%</strong></td>
                <td class="num dim">\u2014</td>
              </tr>
            </tbody>
          </table>
        </div>
      </article>
    `:n==="mortgages"?c.innerHTML=`
      <article class="card card--flush">
        <header class="card__head card__head--bordered"><div><h2 class="card__title">Mortgage schedule</h2><p class="card__subtitle">Outstanding loans \xB7 debt service</p></div></header>
        <div style="overflow:auto">
          <table class="tbl">
            <thead><tr><th>Property</th><th>Lender</th><th>Type</th><th class="num">Rate</th><th class="num">Outstanding</th><th class="num">Monthly payment</th><th>Term</th></tr></thead>
            <tbody>
              ${r.filter(i=>i.mortgage).map(i=>{let l=i.mortgage;return`<tr>
                  <td><strong>${U(i.name)}</strong><div class="t-meta">${U(i.city)}, ${i.cc}</div></td>
                  <td>${U(l.lender)}</td>
                  <td><span class="badge ${l.rateType==="fixed"?"badge--positive":"badge--warning"}">${l.rateType}</span></td>
                  <td class="num">${l.rate.toFixed(2)}%</td>
                  <td class="num">${o(l.outstandingBalance,l.currency,{decimals:0})} <span class="fx-tag">${l.currency}</span></td>
                  <td class="num">${o(l.monthlyPayment,l.currency,{decimals:0})}</td>
                  <td class="dim">${l.termYears}y \xB7 from ${P(l.startDate,l.currency)}</td>
                </tr>`}).join("")}
            </tbody>
          </table>
        </div>
      </article>
    `:n==="yield"&&(c.innerHTML=`
      <article class="card card--flush">
        <header class="card__head card__head--bordered"><div><h2 class="card__title">Rental yield</h2><p class="card__subtitle">Gross & net yield \xB7 cap rate proxy</p></div></header>
        <div style="overflow:auto">
          <table class="tbl">
            <thead><tr><th>Property</th><th class="num">Monthly rent</th><th class="num">HOA</th><th class="num">Mortgage P&amp;I</th><th class="num">Net cashflow</th><th class="num">Gross yield</th><th class="num">Net yield</th></tr></thead>
            <tbody>
              ${r.filter(i=>i.monthlyRent).map(i=>{let l=i.marketValue*i.ownershipPct/100,f=i.monthlyRent,g=i.monthlyHoa||0,y=i.mortgage?i.mortgage.monthlyPayment:0,m=f-g-y,$=f*12/l*100,A=m*12/l*100;return`<tr>
                  <td><strong>${U(i.name)}</strong></td>
                  <td class="num">${o(f,i.currency,{decimals:0})}</td>
                  <td class="num dim">${o(g,i.currency,{decimals:0})}</td>
                  <td class="num dim">${o(y,i.currency,{decimals:0})}</td>
                  <td class="num"><span class="${m>=0?"t-pos":"t-neg"}">${o(m,i.currency,{decimals:0,signed:!0})}</span></td>
                  <td class="num">${$.toFixed(2)}%</td>
                  <td class="num"><span class="${A>=0?"t-pos":"t-neg"}">${A.toFixed(2)}%</span></td>
                </tr>`}).join("")}
            </tbody>
          </table>
        </div>
      </article>
    `),C(e,a.route)}function lt(e,s,a=""){return`<div class="kpi"><div class="kpi__label">${e}</div><div class="kpi__value">${s}</div>${a?`<div class="kpi__caption">${a}</div>`:""}</div>`}function U(e){return e.replace(/[&<>"']/g,s=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"})[s])}var Et={margin_loan:"Margin loan",securities_backed_credit:"Securities-backed credit",derivative_notional:"Derivative notional",fx_forward:"FX forward"};function ce(e,s,a,n){let{reportingCurrency:t}=T.get(),r=s.leverage||[],d=r.reduce((i,l)=>i+w(l.notional,l.currency,t,s.fx),0),p=r.reduce((i,l)=>i+w(l.collateralValue,l.collateralCurrency,t,s.fx),0),h=p>0?d/p*100:0,b=r.reduce((i,l)=>i+w(l.monthlyCost,l.currency,t,s.fx),0),_=r.filter(i=>i.rate!==null),u=_.length>0?_.reduce((i,l)=>i+(l.rate||0)*w(l.notional,l.currency,t,s.fx),0)/_.reduce((i,l)=>i+w(l.notional,l.currency,t,s.fx),0):0;e.innerHTML=`
    <div class="view fade-in">
      <header class="view__head">
        <div class="view__title">
          <div class="crumbs"><span>C \xB7 Liabilities</span><span class="crumbs__sep">\u203A</span><span class="fx-tag">C2</span><span class="crumbs__current">${a.label}</span></div>
          <h1 class="t-display">${a.label}</h1>
        </div>
        <div class="view__actions">
          <button class="btn btn--secondary">${x("download")} Export risk report</button>
        </div>
      </header>

      ${E(a,n)}

      <section class="grid-4">
        ${dt("Aggregate notional",o(d,t,{decimals:0,compact:!0}),`${r.length} positions`)}
        ${dt("Collateral value",o(p,t,{decimals:0,compact:!0}))}
        ${dt("Blended LTV",h.toFixed(1)+"%","Aggregate exposure")}
        ${dt("Monthly carry",o(b,t,{decimals:0}),`Blended rate ${u.toFixed(2)}%`)}
      </section>

      <section id="tab-content"></section>
    </div>
  `;let c=e.querySelector("#tab-content");n==="positions"?c.innerHTML=`
      <article class="card card--flush">
        <header class="card__head card__head--bordered"><div><h2 class="card__title">Open positions</h2><p class="card__subtitle">Margin \xB7 SBL \xB7 derivatives \xB7 FX hedges</p></div></header>
        <div style="overflow:auto">
          <table class="tbl">
            <thead><tr><th>Type</th><th>Counterparty</th><th class="num">Notional</th><th class="num">Rate</th><th class="num">Collateral</th><th class="num">LTV</th><th>Maturity</th><th>Opened</th></tr></thead>
            <tbody>
              ${r.map(i=>`
                <tr>
                  <td><span class="badge badge--gold">${Et[i.type]||i.type}</span></td>
                  <td>${kt(i.counterparty)}</td>
                  <td class="num">${o(i.notional,i.currency,{decimals:0})} <span class="fx-tag">${i.currency}</span></td>
                  <td class="num">${i.rate!==null?i.rate.toFixed(2)+"%":'<span class="t-dim">\u2014</span>'}</td>
                  <td class="num dim">${o(i.collateralValue,i.collateralCurrency,{decimals:0})}</td>
                  <td class="num">${i.currentLtv>0?i.currentLtv.toFixed(1)+"%":'<span class="t-dim">\u2014</span>'}</td>
                  <td class="dim">${i.maturity?P(i.maturity,t):"open-ended"}</td>
                  <td class="dim">${P(i.openedAt,t)}</td>
                </tr>
              `).join("")}
            </tbody>
          </table>
        </div>
      </article>
    `:n==="ltv"?c.innerHTML=`
      <article class="card card--flush">
        <header class="card__head card__head--bordered"><div><h2 class="card__title">Loan-to-value monitor</h2><p class="card__subtitle">Margin call thresholds & headroom</p></div></header>
        <div style="overflow:auto">
          <table class="tbl">
            <thead><tr><th>Type</th><th>Counterparty</th><th class="num">Notional</th><th class="num">Collateral</th><th class="num">Current LTV</th><th class="num">Margin call</th><th class="num">Headroom</th><th>Status</th></tr></thead>
            <tbody>
              ${r.filter(i=>i.marginCallThreshold>0).map(i=>{let l=i.marginCallThreshold-i.currentLtv,f=l>20?"safe":l>10?"monitor":"risk";return`<tr>
                  <td><span class="badge badge--gold">${Et[i.type]||i.type}</span></td>
                  <td>${kt(i.counterparty)}</td>
                  <td class="num">${o(i.notional,i.currency,{decimals:0})}</td>
                  <td class="num">${o(i.collateralValue,i.collateralCurrency,{decimals:0})}</td>
                  <td class="num"><strong>${i.currentLtv.toFixed(1)}%</strong></td>
                  <td class="num dim">${i.marginCallThreshold.toFixed(1)}%</td>
                  <td class="num"><span class="${f==="safe"?"t-pos":f==="monitor"?"t-warn":"t-neg"}">${l.toFixed(1)} pts</span></td>
                  <td>${f==="safe"?'<span class="badge badge--positive"><span class="badge__dot"></span>Safe</span>':f==="monitor"?'<span class="badge badge--warning"><span class="badge__dot"></span>Monitor</span>':'<span class="badge badge--negative"><span class="badge__dot"></span>At risk</span>'}</td>
                </tr>`}).join("")}
            </tbody>
          </table>
        </div>
      </article>
    `:n==="cost"&&(c.innerHTML=`
      <article class="card card--flush">
        <header class="card__head card__head--bordered"><div><h2 class="card__title">Carry cost</h2><p class="card__subtitle">Monthly interest expense by position</p></div></header>
        <div style="overflow:auto">
          <table class="tbl">
            <thead><tr><th>Type</th><th>Counterparty</th><th class="num">Notional</th><th class="num">Rate</th><th class="num">Monthly cost (${t})</th><th class="num">Annualised</th></tr></thead>
            <tbody>
              ${r.map(i=>{let l=w(i.monthlyCost,i.currency,t,s.fx);return`<tr>
                  <td><span class="badge badge--gold">${Et[i.type]||i.type}</span></td>
                  <td>${kt(i.counterparty)}</td>
                  <td class="num">${o(i.notional,i.currency,{decimals:0})}</td>
                  <td class="num">${i.rate!==null?i.rate.toFixed(2)+"%":'<span class="t-dim">\u2014</span>'}</td>
                  <td class="num">${o(l,t,{decimals:0})}</td>
                  <td class="num dim">${o(l*12,t,{decimals:0})}</td>
                </tr>`}).join("")}
              <tr style="background: rgba(184,153,104,0.04)">
                <td colspan="4" class="dim" style="text-align:right; padding-right:16px"><strong>Aggregate carry</strong></td>
                <td class="num"><strong>${o(b,t,{decimals:0})}</strong></td>
                <td class="num"><strong>${o(b*12,t,{decimals:0})}</strong></td>
              </tr>
            </tbody>
          </table>
        </div>
      </article>
    `),C(e,a.route)}function dt(e,s,a=""){return`<div class="kpi"><div class="kpi__label">${e}</div><div class="kpi__value">${s}</div>${a?`<div class="kpi__caption">${a}</div>`:""}</div>`}function kt(e){return e.replace(/[&<>"']/g,s=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"})[s])}function le(e,s,a,n){let{reportingCurrency:t,period:r}=T.get(),d=V(s,r.months),p=at(d,t,s),h=nt(d,t,s),b=p.reduce((g,y)=>g+y.income,0),_=p.reduce((g,y)=>g+y.expense,0),u=b-_,c=d.filter(g=>g.category==="income").reduce((g,y)=>g+H(y,t,s),0),i=d.filter(g=>g.category==="investment_income").reduce((g,y)=>g+H(y,t,s),0),l=rt(s.holdings,t,s);e.innerHTML=`
    <div class="view fade-in">
      <header class="view__head">
        <div class="view__title">
          <span class="t-eyebrow">D \xB7 Accounting</span>
          <h1 class="t-display">${a.label}</h1>
        </div>
        <div class="view__actions">
          <button class="btn btn--secondary">${x("download")} Export PDF</button>
        </div>
      </header>
      ${E(a,n)}
      <section id="tab-content"></section>
    </div>
  `;let f=e.querySelector("#tab-content");if(n==="income-stmt")f.innerHTML=`
      <article class="card">
        <header class="card__head"><div><h2 class="card__title">Income Statement</h2><p class="card__subtitle">Last ${r.months} months \xB7 ${t}</p></div></header>
        <table class="tbl">
          <tbody>
            ${k("Revenues","","",!0)}
            ${k("Salary income",o(c,t,{decimals:0}))}
            ${k("Investment income",o(i,t,{decimals:0}))}
            ${k("Total revenue",o(b,t,{decimals:0}),"",!1,!0)}
            ${k("","")}
            ${k("Expenses by category","","",!0)}
            ${h.map(g=>k(`  ${N[g.category].label}`,o(g.amount,t,{decimals:0}))).join("")}
            ${k("Total expenses",o(_,t,{decimals:0}),"",!1,!0)}
            ${k("","")}
            ${k("NET INCOME",o(u,t,{decimals:0,signed:!0}),u>=0?"t-pos":"t-neg",!1,!0)}
          </tbody>
        </table>
      </article>
    `;else if(n==="balance"){let g=s.holdings.find(S=>S.ticker==="CASH-USD")?.avgCost||0,y=s.holdings.find(S=>S.ticker==="CASH-EUR")?.avgCost||0,m=s.holdings.find(S=>S.ticker==="CASH-GBP")?.avgCost||0,$=s.holdings.find(S=>S.ticker==="CASH-BRL")?.avgCost||0,A=l-s.holdings.filter(S=>S.assetClass==="cash").reduce((S,O)=>S+O.avgCost*s.fx[O.currency]/s.fx[t],0);f.innerHTML=`
      <article class="card">
        <header class="card__head"><div><h2 class="card__title">Balance Sheet</h2><p class="card__subtitle">As of ${s.meta.period.to} \xB7 ${t}</p></div></header>
        <table class="tbl">
          <tbody>
            ${k("ASSETS","","",!0)}
            ${k("  Cash \xB7 USD",o(g*s.fx.USD/s.fx[t],t,{decimals:0}))}
            ${k("  Cash \xB7 EUR",o(y*s.fx.EUR/s.fx[t],t,{decimals:0}))}
            ${k("  Cash \xB7 GBP",o(m*s.fx.GBP/s.fx[t],t,{decimals:0}))}
            ${k("  Cash \xB7 BRL",o($*s.fx.BRL/s.fx[t],t,{decimals:0}))}
            ${k("  Investments (ETFs)",o(A,t,{decimals:0}))}
            ${k("Total assets",o(l,t,{decimals:0}),"",!1,!0)}
            ${k("","")}
            ${k("LIABILITIES","","",!0)}
            ${k("  Credit-card pending",o(0,t,{decimals:0}))}
            ${k("  Loans",o(0,t,{decimals:0}))}
            ${k("Total liabilities",o(0,t,{decimals:0}),"",!1,!0)}
            ${k("","")}
            ${k("NET WORTH",o(l,t,{decimals:0}),"t-pos",!1,!0)}
          </tbody>
        </table>
      </article>
    `}else n==="cashflow"&&(f.innerHTML=`
      <article class="card">
        <header class="card__head"><div><h2 class="card__title">Cash Flow Statement</h2><p class="card__subtitle">By month \xB7 ${t}</p></div></header>
        <table class="tbl">
          <thead><tr><th>Month</th><th class="num">Inflows</th><th class="num">Outflows</th><th class="num">Net</th></tr></thead>
          <tbody>
            ${p.map(g=>`<tr>
              <td>${g.yearMonth}</td>
              <td class="num t-pos">${o(g.income,t,{decimals:0})}</td>
              <td class="num t-neg">${o(g.expense,t,{decimals:0})}</td>
              <td class="num"><strong class="${g.net>=0?"t-pos":"t-neg"}">${o(g.net,t,{decimals:0,signed:!0})}</strong></td>
            </tr>`).join("")}
            <tr style="background: rgba(91,140,255,0.04)">
              <td><strong>Total \xB7 ${r.months}M</strong></td>
              <td class="num"><strong>${o(b,t,{decimals:0})}</strong></td>
              <td class="num"><strong>${o(_,t,{decimals:0})}</strong></td>
              <td class="num"><strong class="${u>=0?"t-pos":"t-neg"}">${o(u,t,{decimals:0,signed:!0})}</strong></td>
            </tr>
          </tbody>
        </table>
      </article>
    `);C(e,a.route)}function k(e,s,a="",n=!1,t=!1){return n?`<tr style="background: rgba(255,255,255,0.02)"><td colspan="2"><strong style="text-transform: uppercase; font-size: 0.72rem; letter-spacing: 0.10em; color: var(--c-text-tertiary, #5E6884)">${e}</strong></td></tr>`:t?`<tr style="border-top: 1px solid rgba(255,255,255,0.10)"><td><strong>${e}</strong></td><td class="num"><strong class="${a}">${s}</strong></td></tr>`:`<tr><td>${e}</td><td class="num ${a}">${s}</td></tr>`}function de(e,s,a,n){let{route:t}=T.get(),r=s.fx,d=new Set;for(let v of s.transactions)d.add(parseInt(v.date.slice(0,4),10));let p=[...d].sort((v,M)=>M-v),b=new Date(s.meta.period.to).getFullYear(),_=p.find(v=>v<b)??p[0]??b,u=parseInt(t.params.year||String(_),10),c=`${u}-01-01`,i=`${u}-12-31`,l=s.transactions.filter(v=>v.date>=c&&v.date<=i),f=u===b,g=u<b,y=l.length===0,m=s.holdings.map(v=>{let M=v.assetClass==="cash"?v.avgCost:v.quantity*v.currentPrice,B=w(M,v.currency,"BRL",r);return{holding:v,native:M,valBrl:B}}).sort((v,M)=>M.valBrl-v.valBrl),$=m.reduce((v,M)=>v+M.valBrl,0),A=l.filter(v=>v.category==="income"&&v.amount>0).reduce((v,M)=>v+w(M.amount,M.currency,"BRL",r),0),S=l.filter(v=>v.category==="investment_income"&&v.merchant.startsWith("Distribution \xB7 IVVB")).reduce((v,M)=>v+w(M.amount,M.currency,"BRL",r),0),O=l.filter(v=>v.category==="investment_income"&&!v.merchant.startsWith("Distribution \xB7 IVVB")).reduce((v,M)=>v+w(M.amount,M.currency,"BRL",r),0),et=Math.min(A*.14,9e3),j=A-et,F=Math.max(0,Re(j)),Y=F*.95-F,W=s.darfs.filter(v=>v.yearMonth.startsWith(String(u))),ve=W.reduce((v,M)=>v+M.taxOwed,0),ye=W.filter(v=>v.paid).reduce((v,M)=>v+M.taxOwed,0);e.innerHTML=`
    <div class="view fade-in">
      <header class="view__head">
        <div class="view__title">
          <div class="crumbs"><span>D \xB7 Accounting</span><span class="crumbs__sep">\u203A</span><span class="fx-tag">D1</span><span class="crumbs__current">${a.label}</span></div>
          <h1 class="t-display">${a.label} \xB7 FY ${u}${f?' <span class="badge badge--warning" style="vertical-align:middle; font-size:0.5em">In progress</span>':""}</h1>
        </div>
        <div class="view__actions">
          <div class="seg-control" id="year-switcher">
            ${p.map(v=>{let M=v===b?"in-progress":v<b?"historical":"future";return`<span class="seg-control__btn ${v===u?"is-active":""}" data-year="${v}" title="${M}">${v}${v===b?" \xB7":""}</span>`}).join("")}
          </div>
          <button class="btn btn--secondary">${x("download")} Export filing package</button>
          <button class="btn btn--gold">${x("file-text")} Generate report</button>
        </div>
      </header>

      ${E(a,n)}

      <section id="tab-content"></section>
    </div>
  `,e.querySelector("#year-switcher").addEventListener("click",v=>{let M=v.target.closest("[data-year]");M&&Dt("year",M.dataset.year)});let Q=e.querySelector("#tab-content");if(y){Q.innerHTML=`
      <article class="card">
        <div class="empty-state">
          ${x("file-text")}
          <h3 class="t-h2">No data for FY ${u}</h3>
          <p class="t-meta">No transactions are recorded for the selected fiscal year. Pick another year above.</p>
        </div>
      </article>
    `,C(e,a.route);return}if(n==="summary")Q.innerHTML=`
      <section class="report-banner">
        <div class="report-banner__seal">${x("award")}</div>
        <div class="report-banner__body">
          <h3>Annual personal income tax return \u2014 FY ${u}${f?" (in progress)":""}</h3>
          <p>${f?`Year-to-date estimate as of ${s.meta.period.to}. ${l.length.toLocaleString()} transactions recorded so far. Final figures will populate once the calendar year closes.`:g?`Final filing summary based on ${l.length.toLocaleString()} transactions and ${s.holdings.length} positions held at year-end. Foreign assets and income translated to BRL at PTAX (${r.asOf}).`:`Forward-looking estimate based on ${l.length.toLocaleString()} projected transactions.`}</p>
        </div>
        <div class="report-banner__actions">
          <span class="badge ${Y>0?"badge--positive":"badge--warning"}"><span class="badge__dot"></span>${Y>0?"Estimated refund":"Tax due"}</span>
          <span class="t-num-lg ${Y>0?"t-pos":"t-neg"}">${o(Math.abs(Y),"BRL",{decimals:0})}</span>
        </div>
      </section>
      <section class="kv-grid">
        <div class="kv"><div class="kv__label">Total assets</div><div class="kv__value">${o($,"BRL",{decimals:0,compact:!0})}</div><div class="kv__note">${m.length} positions \xB7 BRL \xB7 12-31-${u}</div></div>
        <div class="kv"><div class="kv__label">Taxable income</div><div class="kv__value">${o(A,"BRL",{decimals:0})}</div><div class="kv__note">Employment compensation</div></div>
        <div class="kv"><div class="kv__label">Tax-exempt income</div><div class="kv__value">${o(S,"BRL",{decimals:0})}</div><div class="kv__note">Domestic ETF distributions</div></div>
        <div class="kv"><div class="kv__label">Foreign-source income</div><div class="kv__value">${o(O,"BRL",{decimals:0})}</div><div class="kv__note">Subject to monthly reporting</div></div>
        <div class="kv"><div class="kv__label">Social security withheld</div><div class="kv__value">${o(et,"BRL",{decimals:0})}</div><div class="kv__note">Deducted from base</div></div>
        <div class="kv"><div class="kv__label">Estimated tax due</div><div class="kv__value">${o(F,"BRL",{decimals:0})}</div><div class="kv__note">Progressive bracket \xB7 ${u}</div></div>
      </section>
      ${f?`<p class="disclaim"><strong>Notice:</strong> FY ${u} is still in progress; numbers update as new transactions arrive.</p>`:""}
    `;else if(n==="assets")Q.innerHTML=`
      <article class="card report-section">
        <header class="report-section__title"><span class="num">1</span><h3>Asset schedule \xB7 12-31-${u}</h3><span class="meta">PTAX ${r.asOf}</span></header>
        <div style="overflow:auto">
          <table class="tbl">
            <thead><tr><th>Code</th><th>Description</th><th>Country</th><th class="num">Native value</th><th class="num">BRL value \xB7 12-31</th></tr></thead>
            <tbody>
              ${m.map(v=>`<tr>
                <td><span class="fx-tag">${He(v.holding.assetClass)}</span></td>
                <td><div class="tbl-cell"><span class="tbl-cell__main"><span class="tbl-cell__title">${v.holding.ticker} \xB7 ${v.holding.name}</span><span class="tbl-cell__meta">${v.holding.assetClass==="cash"?"Cash position":v.holding.quantity.toLocaleString()+" units"}</span></span></div></td>
                <td><span class="fx-tag">${v.holding.country}</span></td>
                <td class="num dim">${o(v.native,v.holding.currency,{decimals:0})}</td>
                <td class="num">${o(v.valBrl,"BRL",{decimals:0})}</td>
              </tr>`).join("")}
              ${(s.realEstate||[]).map(v=>`<tr>
                <td><span class="fx-tag">11</span></td>
                <td><div class="tbl-cell"><span class="tbl-cell__icon" style="--cell-color:#B89968">${x("building")}</span><span class="tbl-cell__main"><span class="tbl-cell__title">${pt(v.name)}</span><span class="tbl-cell__meta">${pt(v.address)} \xB7 ${v.ownershipPct}%</span></span></div></td>
                <td><span class="fx-tag">${v.cc}</span></td>
                <td class="num dim">${o(v.acquisitionCost*v.ownershipPct/100,v.currency,{decimals:0})}</td>
                <td class="num">${o(w(v.acquisitionCost*v.ownershipPct/100,v.currency,"BRL",r),"BRL",{decimals:0})}</td>
              </tr>`).join("")}
              <tr style="background: rgba(184,153,104,0.04)"><td colspan="4" class="dim" style="text-align:right; padding-right:16px"><strong>Total</strong></td><td class="num"><strong>${o($,"BRL",{decimals:0})}</strong></td></tr>
            </tbody>
          </table>
        </div>
      </article>
    `;else if(n==="income"){let v=l.filter(B=>B.category==="investment_income"&&B.merchant.startsWith("Distribution \xB7 IVVB")),M=l.filter(B=>B.category==="investment_income"&&!B.merchant.startsWith("Distribution \xB7 IVVB"));Q.innerHTML=`
      <article class="card report-section">
        <header class="report-section__title"><span class="num">2</span><h3>Tax-exempt and non-taxable income \xB7 ${u}</h3></header>
        <div style="overflow:auto">
          <table class="tbl">
            <thead><tr><th>Date</th><th>Source</th><th class="num">Native amount</th><th class="num">BRL amount</th></tr></thead>
            <tbody>${v.length===0?`<tr><td colspan="4" class="dim center" style="text-align:center; padding: 24px">No entries for ${u}</td></tr>`:v.map(B=>`<tr><td class="dim">${P(B.date,"BRL")}</td><td>${pt(B.merchant)}</td><td class="num dim">${o(B.amount,B.currency)}</td><td class="num">${o(w(B.amount,B.currency,"BRL",r),"BRL")}</td></tr>`).join("")}</tbody>
          </table>
        </div>
      </article>
      <article class="card report-section">
        <header class="report-section__title"><span class="num">3</span><h3>Foreign-source income \xB7 ${u}</h3></header>
        <div style="overflow:auto">
          <table class="tbl">
            <thead><tr><th>Date</th><th>Source</th><th class="num">Native amount</th><th class="num">BRL amount</th></tr></thead>
            <tbody>${M.length===0?`<tr><td colspan="4" class="dim" style="text-align:center; padding: 24px">No entries for ${u}</td></tr>`:M.map(B=>`<tr><td class="dim">${P(B.date,"BRL")}</td><td>${pt(B.merchant)}</td><td class="num dim">${o(B.amount,B.currency)}</td><td class="num">${o(w(B.amount,B.currency,"BRL",r),"BRL")}</td></tr>`).join("")}</tbody>
          </table>
        </div>
      </article>
    `}else n==="vouchers"&&(Q.innerHTML=`
      <article class="card report-section">
        <header class="report-section__title"><span class="num">4</span><h3>Capital-gains tax vouchers \xB7 ${u}</h3><span class="meta">${W.filter(v=>!v.paid).length} pending</span></header>
        <div style="overflow:auto">
          <table class="tbl">
            <thead><tr><th>Month</th><th>Type</th><th class="num">Tax base</th><th class="num">Rate</th><th class="num">Tax due</th><th>Due date</th><th>Status</th></tr></thead>
            <tbody>
              ${W.length===0?`<tr><td colspan="7" class="dim" style="text-align:center; padding: 24px">No vouchers for ${u}</td></tr>`:W.map(v=>`<tr>
                <td><span class="fx-tag">${v.yearMonth}</span></td>
                <td>${De(v.type)}</td>
                <td class="num">${o(v.baseValue,"BRL",{decimals:0})}</td>
                <td class="num dim">${(v.taxRate*100).toFixed(0)}%</td>
                <td class="num">${o(v.taxOwed,"BRL",{decimals:2})}</td>
                <td class="dim">${P(v.dueDate,"BRL")}</td>
                <td>${v.paid?'<span class="badge badge--positive"><span class="badge__dot"></span>Paid</span>':'<span class="badge badge--warning"><span class="badge__dot"></span>Pending</span>'}</td>
              </tr>`).join("")}
              ${W.length>0?`<tr style="background: rgba(184,153,104,0.04)"><td colspan="4" class="dim" style="text-align:right; padding-right:16px"><strong>Total due</strong></td><td class="num"><strong>${o(ve,"BRL",{decimals:0})}</strong></td><td colspan="2" class="dim">${o(ye,"BRL",{decimals:0})} paid</td></tr>`:""}
            </tbody>
          </table>
        </div>
        <p class="disclaim"><strong>Notice:</strong> Estimates only; final filing must be validated by a licensed accountant.</p>
      </article>
    `);C(e,a.route)}function Re(e){return e<=24511.92?0:e<=33919.8?e*.075-1838.39:e<=45012.6?e*.15-4382.38:e<=55976.16?e*.225-7758.32:e*.275-10557.13}function He(e){return e==="cash"?"61":e==="etf_br"||e==="etf_intl"?"74":e==="etf_bonds"?"47":e==="etf_crypto"?"81":"99"}function De(e){return e==="swing_trade"?"Swing trade \xB7 equities":e==="day_trade"?"Day trade":e==="reit"?"REIT distribution":e}function pt(e){return e.replace(/[&<>"']/g,s=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"})[s])}var Ie=[{id:"monthly-summary",name:"Monthly summary",description:"Income, expense, savings rate and top categories per month.",icon:"file-text",status:"live"},{id:"yearly-recap",name:"Yearly recap",description:"End-of-year retrospective with charts and YoY comparisons.",icon:"reports",status:"live"},{id:"travel-report",name:"Travel report",description:"Per-trip breakdown: flights, hotels, food, local transport.",icon:"map",status:"beta"},{id:"cbe",name:"CBE \xB7 BCB declaration",description:"Capitais brasileiros no exterior \u2014 required if foreign assets > USD 1M.",icon:"globe",status:"soon"},{id:"capital-gains",name:"Capital gains schedule",description:"Lot-by-lot cost basis and realized gains for tax filing.",icon:"trending-up",status:"soon"},{id:"expense-audit",name:"Expense audit",description:"Outliers, duplicates, recurring detection, suspicious patterns.",icon:"shield",status:"soon"}];function pe(e,s,a,n){e.innerHTML=`
    <div class="view fade-in">
      <header class="view__head">
        <div class="view__title">
          <span class="t-eyebrow">D \xB7 Accounting</span>
          <h1 class="t-display">${a.label}</h1>
        </div>
        <div class="view__actions">
          <button class="btn btn--primary">${x("plus")} New report</button>
        </div>
      </header>
      ${E(a,n)}
      <section id="tab-content"></section>
    </div>
  `;let t=e.querySelector("#tab-content");n==="templates"?t.innerHTML=`
      <section class="grid-3">
        ${Ie.map(r=>`
          <article class="card">
            <div style="display:flex; align-items:center; gap:12px; margin-bottom: 8px">
              <span class="tbl-cell__icon" style="--cell-color:#5B8CFF; --cell-bg:rgba(91,140,255,0.14); width:36px; height:36px">${x(r.icon)}</span>
              <div style="flex:1">
                <h3 class="card__title">${r.name}</h3>
              </div>
              ${r.status==="live"?'<span class="badge badge--positive"><span class="badge__dot"></span>Live</span>':r.status==="beta"?'<span class="badge badge--brand"><span class="badge__dot"></span>Beta</span>':'<span class="badge badge--neutral"><span class="badge__dot"></span>Soon</span>'}
            </div>
            <p class="t-meta">${r.description}</p>
            <div style="display:flex; gap: 8px; margin-top: 12px">
              <button class="btn btn--secondary" ${r.status==="soon"?"disabled":""}>${x("download")} Generate</button>
              <button class="btn btn--ghost">${x("settings")} Configure</button>
            </div>
          </article>
        `).join("")}
      </section>
    `:n==="saved"&&(t.innerHTML=`
      <article class="card">
        <div class="empty-state">
          ${x("file-text")}
          <h3 class="t-h2">No saved reports yet</h3>
          <p class="t-meta">Generate a report from a template and it will appear here.</p>
        </div>
      </article>
    `),C(e,a.route)}function me(e,s,a,n){let t=[];for(let h of s.darfs)t.push({id:h.id,date:h.dueDate,label:`Capital-gains voucher \xB7 ${h.type==="swing_trade"?"Equities":h.type==="reit"?"REIT":"Day trade"} \xB7 ${h.yearMonth}`,type:"CAPGAINS",amountBrl:h.taxOwed,status:h.paid?"paid":"pending"});let r=s.transactions.filter(h=>h.merchant.startsWith("Property Tax"));for(let h of r)t.push({id:h.id,date:h.date,label:h.merchant,type:"PROPERTY",amountBrl:Math.abs(h.amount),status:"paid"});t.push({id:"tr-2025-deadline",date:"2026-05-31",label:"Personal tax return 2025 \xB7 filing deadline",type:"TAX-RETURN",amountBrl:0,status:"scheduled"}),t.push({id:"tr-2025-quota1",date:"2026-04-30",label:"Personal tax return 2025 \xB7 1st installment",type:"TAX-RETURN",amountBrl:0,status:"scheduled"}),t.sort((h,b)=>h.date.localeCompare(b.date));let d=t.filter(h=>h.status==="pending").reduce((h,b)=>h+b.amountBrl,0);e.innerHTML=`
    <div class="view fade-in">
      <header class="view__head">
        <div class="view__title">
          <span class="t-eyebrow">D \xB7 Accounting</span>
          <h1 class="t-display">${a.label}</h1>
        </div>
        <div class="view__actions">
          <button class="btn btn--secondary">${x("download")} Export ICS</button>
        </div>
      </header>
      ${E(a,n)}

      <section class="grid-3">
        ${St("warning","Pending",o(d,"BRL",{decimals:0}),`${t.filter(h=>h.status==="pending").length} obligations`)}
        ${St("positive","Paid YTD",o(t.filter(h=>h.status==="paid").reduce((h,b)=>h+b.amountBrl,0),"BRL",{decimals:0}),`${t.filter(h=>h.status==="paid").length} payments`)}
        ${St("brand","Upcoming events",String(t.filter(h=>h.status==="scheduled").length),"in calendar")}
      </section>

      <section id="tab-content"></section>
    </div>
  `;let p=e.querySelector("#tab-content");n==="calendar"?p.innerHTML=he(t):n==="vouchers"?p.innerHTML=ue(t.filter(h=>h.type==="CAPGAINS")):n==="property"&&(p.innerHTML=ue(t.filter(h=>h.type==="PROPERTY"))),C(e,a.route)}function he(e){return`
    <article class="card card--flush">
      <header class="card__head card__head--bordered"><div><h2 class="card__title">Tax calendar</h2><p class="card__subtitle">Chronological view</p></div></header>
      <div style="overflow:auto">
        <table class="tbl">
          <thead><tr><th>Date</th><th>Event</th><th>Type</th><th class="num">Amount</th><th>Status</th></tr></thead>
          <tbody>
            ${e.map(s=>`<tr>
              <td class="dim">${P(s.date,"BRL")} <span class="t-meta">\xB7 ${s.date.slice(0,4)}</span></td>
              <td>${s.label}</td>
              <td><span class="fx-tag">${s.type}</span></td>
              <td class="num">${s.amountBrl>0?o(s.amountBrl,"BRL",{decimals:2}):'<span class="t-dim">\u2014</span>'}</td>
              <td>${Pe(s.status)}</td>
            </tr>`).join("")}
          </tbody>
        </table>
      </div>
    </article>
  `}function ue(e){return e.length===0?`<article class="card"><div class="empty-state">${x("receipt")}<h3 class="t-h2">No events in this category yet</h3></div></article>`:he(e)}function Pe(e){return e==="paid"?'<span class="badge badge--positive"><span class="badge__dot"></span>Paid</span>':e==="pending"?'<span class="badge badge--warning"><span class="badge__dot"></span>Pending</span>':'<span class="badge badge--neutral"><span class="badge__dot"></span>Scheduled</span>'}function St(e,s,a,n=""){return`<div class="kpi kpi--${e}"><div class="kpi__label">${s}</div><div class="kpi__value">${a}</div>${n?`<div class="kpi__caption">${n}</div>`:""}</div>`}var D="[my-fin]";console.info(D,"script.js evaluated",{ts:Date.now(),readyState:document.readyState});var Ne={"cashflow/categories":Jt,"cashflow/map":Qt,"cashflow/tables":te,"assets/sources":se,"assets/portfolio":ae,"assets/incomes":ne,"liabilities/credit-cards":ie,"liabilities/real-estate":oe,"liabilities/leverage":ce,"accounting/general":le,"accounting/tax-return":de,"accounting/reports":pe,"accounting/taxes":me};async function Fe(){console.info(D,"bootstrap entered");let e=document.getElementById("app");if(!e){console.error(D,"bootstrap.no-#app",'document.getElementById("app") is null');return}console.info(D,"bootstrap.#app found",{childCount:e.childElementCount});try{Vt(e),console.info(D,"renderShell done")}catch(t){throw console.error(D,"renderShell threw",t.stack||t.message),t}let s=document.getElementById("main");if(!s){console.error(D,"bootstrap.no-#main","#main not in DOM after renderShell");return}s.innerHTML='<div class="view"><div class="empty-state"><div class="skeleton" style="width: 320px; height: 32px"></div></div></div>';let a,n;try{[a,n]=await Promise.all([Bt(),Rt()]),console.info(D,"data loaded",{datasetKeys:Object.keys(a),navSections:n.sections?.length})}catch(t){let r=t;console.error(D,"data load failed",r.stack||r.message),s.innerHTML=`<div class="view"><div class="empty-state"><h3 class="t-h2">Could not load data</h3><p class="t-meta">${r.message}</p></div></div>`;return}T.set({data:a,nav:n,loading:!1}),T.subscribe(()=>ge()),It(n,t=>{console.info(D,"route change",t),T.set({route:t})});try{ge(),console.info(D,"first render done")}catch(t){throw console.error(D,"first render threw",t.stack||t.message),t}}function ge(){let{data:e,nav:s,route:a}=T.get();if(!e||!s){console.warn(D,"render skipped",{hasData:!!e,hasNav:!!s});return}try{Ot(e)}catch(d){console.error(D,"renderTopbar threw",d.stack||d.message)}try{qt(e,s,a.path)}catch(d){console.error(D,"renderSidebar threw",d.stack||d.message)}let n=document.getElementById("main"),t=Pt(s,a.path);if(!t){console.warn(D,"render.unknown-route",a.path),n.innerHTML='<div class="view"><div class="empty-state"><h3 class="t-h2">Unknown route</h3></div></div>';return}let r=Ne[a.path];if(!r){console.warn(D,"render.view-not-wired",a.path),n.innerHTML=`<div class="view"><div class="empty-state"><h3 class="t-h2">${t.item.label}</h3><p class="t-meta">View not yet wired.</p></div></div>`;return}try{r(n,e,t.item,a.tab||(t.item.tabs?.[0]?.id??"")),console.info(D,"view rendered",{route:a.path,tab:a.tab})}catch(d){console.error(D,"view threw",{route:a.path,err:d.stack||d.message})}}Fe().catch(e=>console.error(D,"bootstrap rejected",e.stack||e.message));})();
