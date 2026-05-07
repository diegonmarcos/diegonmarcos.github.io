// ============================================
// App shell — topbar + sidebar — myID
// ============================================
import type { Dataset, NavTree } from './types';
import { store } from './state';
import { navigate } from './router';
import { svgIcon } from './icons';
import { holderInitials } from './format';

const collapsedSections = new Set<string>();

export function renderShell(host: HTMLElement) {
  host.innerHTML = `
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
  `;
}

export function renderTopbar(data: Dataset) {
  const topbar = document.getElementById('topbar');
  if (!topbar) return;
  const score = data.meta.kycScore;
  topbar.innerHTML = `
    <div class="topbar__title">
      <div class="topbar__title__heading">${data.holder.fullName}</div>
      <div class="topbar__title__sub">${data.meta.counts.documents} documents · ${data.meta.counts.categories} categories</div>
    </div>
    <div class="topbar__spacer"></div>
    <div class="topbar__group">
      ${score ? `
        <div class="kyc-pill" title="${score.method ?? ''}">
          <span class="kyc-pill__dot"></span>
          <span class="kyc-pill__label">${score.rating}</span>
          <span class="kyc-pill__score">${score.value}/100</span>
        </div>
      ` : ''}
      <button class="icon-btn" aria-label="Search">${svgIcon('search')}</button>
      <button class="icon-btn" aria-label="Share">${svgIcon('external')}</button>
      <div class="avatar">${holderInitials(data.holder.fullName)}</div>
    </div>
  `;
}

export function renderSidebar(_data: Dataset, nav: NavTree, currentPath: string) {
  const sidebar = document.getElementById('sidebar');
  if (!sidebar) return;

  const sectionsHtml = nav.sections.map((s) => {
    const collapsed = collapsedSections.has(s.id);
    return `
      <div class="nav-section ${collapsed ? 'is-collapsed' : ''}" data-section="${s.id}">
        <header class="nav-section__head" data-toggle="${s.id}">
          <span class="nav-section__id">${s.id}</span>
          <span class="nav-section__label">${s.label}</span>
          <span class="nav-section__chevron">${svgIcon('chevron-down')}</span>
        </header>
        <div class="nav-section__items">
          ${s.items.map((it) => `
            <a class="nav-link ${it.route === currentPath ? 'is-active' : ''}" data-route="${it.route}">
              <span class="nav-link__id">${it.id}</span>
              <span class="nav-link__icon">${svgIcon(it.icon)}</span>
              <span class="nav-link__label">${it.label}</span>
              ${it.badge ? `<span class="nav-link__badge">${it.badge}</span>` : ''}
            </a>
          `).join('')}
        </div>
      </div>
    `;
  }).join('');

  sidebar.innerHTML = `
    ${sectionsHtml}
    <hr class="nav-divider" />
    <div class="nav-footer">
      <div class="workspace-card">
        <div class="workspace-card__title">Schema · ${(_data.meta.schemaVersion)}</div>
        <div class="workspace-card__meta">Generated ${_data.meta.generatedAt}</div>
      </div>
    </div>
  `;

  sidebar.addEventListener('click', (e) => {
    const target = e.target as HTMLElement;

    const toggle = target.closest('[data-toggle]') as HTMLElement | null;
    if (toggle) {
      const sid = toggle.dataset.toggle!;
      if (collapsedSections.has(sid)) collapsedSections.delete(sid);
      else collapsedSections.add(sid);
      const sec = sidebar.querySelector(`[data-section="${sid}"]`);
      if (sec) sec.classList.toggle('is-collapsed');
      return;
    }

    const link = target.closest('[data-route]') as HTMLElement | null;
    if (link) {
      navigate(link.dataset.route!);
      // Subscribe will refresh — but also bump store
      store.set({});
    }
  });
}
