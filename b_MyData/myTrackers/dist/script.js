"use strict";(()=>{var t="myTrackers";function n(a){return`
    <a class="app-card" href="${a.url}" target="_blank" rel="noopener noreferrer">
      <span class="app-card__icon" aria-hidden="true">${a.icon}</span>
      <span class="app-card__body">
        <span class="app-card__name">${a.name}</span>
        <span class="app-card__description">${a.description}</span>
        ${a.stat?`<span class="app-card__stat">${a.stat}</span>`:""}
      </span>
    </a>
  `}function s(a){return`
    <section class="category" id="category-${a.id}">
      <h2 class="category__label">${a.label}</h2>
      <div class="category__grid">
        ${a.apps.map(n).join("")}
      </div>
    </section>
  `}function o(a){let e=document.getElementById("tracker-root");e&&(e.innerHTML=a.categories.map(s).join(""))}function r(){let a=globalThis.PORTAL_DATA?.[t];a&&(a.title&&(document.title=a.title),o(a))}document.readyState==="loading"?document.addEventListener("DOMContentLoaded",r):r();})();
