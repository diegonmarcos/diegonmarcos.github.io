// ============================================
// App shell — topbar + hierarchical sidebar
// ============================================
import type { Currency, Dataset, NavTree } from './types';
import { store } from './state';
import { navigate } from './router';
import { svgIcon } from './meta';
import { formatRate, currencyFlag } from './format';

const CURRENCIES: Currency[] = ['EUR', 'USD', 'BRL', 'GBP'];
const PERIODS = [
  { months: 1,  label: '1M' },
  { months: 3,  label: '3M' },
  { months: 6,  label: '6M' },
  { months: 12, label: '12M' },
];

const collapsedSections = new Set<string>();

export function renderShell(host: HTMLElement) {
  host.innerHTML = `
    <div class="app">
      <div class="app__brand">
        <div class="brand-mark"><span>L</span></div>
        <div class="brand-name">
          <span class="brand-name__word">Ledger</span>
          <span class="brand-name__tag">Private Wealth</span>
        </div>
      </div>
      <header class="app__topbar topbar" id="topbar"></header>
      <nav class="app__nav sidebar" id="sidebar"></nav>
      <main class="app__main" id="main"></main>
    </div>
  `;
}

export function renderTopbar(data: Dataset) {
  const { reportingCurrency, period } = store.get();
  const topbar = document.getElementById('topbar')!;
  topbar.innerHTML = `
    <div class="topbar__search">
      ${svgIcon('search')}
      <input placeholder="Search transactions, holdings, reports..." />
      <kbd>⌘K</kbd>
    </div>
    <div class="topbar__spacer"></div>
    <div class="topbar__group">
      <div class="fx-pill" title="Live FX rates · ${data.fx.source} · ${data.fx.asOf}">
        <span class="fx-pill__pair">USD/BRL</span>
        <span class="fx-pill__rate">${formatRate('USD', 'BRL', data.fx)}</span>
      </div>
      <div class="fx-pill">
        <span class="fx-pill__pair">EUR/BRL</span>
        <span class="fx-pill__rate">${formatRate('EUR', 'BRL', data.fx)}</span>
      </div>
      <div class="seg-control" id="period-select">
        ${PERIODS.map((p) => `
          <span class="seg-control__btn ${p.months === period.months ? 'is-active' : ''}" data-months="${p.months}" data-label="${p.label}">${p.label}</span>
        `).join('')}
      </div>
      <button class="currency-select" id="currency-select">
        <span class="currency-flag">${currencyFlag(reportingCurrency)}</span>
        <span class="currency-code">${reportingCurrency}</span>
        ${svgIcon('chevron-down')}
      </button>
      <button class="icon-btn icon-btn__dot" aria-label="Notifications">${svgIcon('bell')}</button>
      <button class="icon-btn" aria-label="Settings">${svgIcon('settings')}</button>
      <div class="avatar" title="Diego N. Marcos">DN</div>
    </div>
  `;

  topbar.querySelector('#period-select')!.addEventListener('click', (e) => {
    const t = (e.target as HTMLElement).closest('[data-months]') as HTMLElement | null;
    if (!t) return;
    store.set({ period: { months: parseInt(t.dataset.months!, 10), label: t.dataset.label! } });
  });
  topbar.querySelector('#currency-select')!.addEventListener('click', () => {
    const idx = CURRENCIES.indexOf(reportingCurrency);
    store.set({ reportingCurrency: CURRENCIES[(idx + 1) % CURRENCIES.length] });
  });
}

export function renderSidebar(data: Dataset, nav: NavTree, currentPath: string) {
  const sidebar = document.getElementById('sidebar')!;

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
    <div class="nav-section">
      <header class="nav-section__head" style="cursor:default">
        <span class="nav-section__label" style="padding-left:0">Accounts · ${data.accounts.length}</span>
      </header>
      <div class="nav-section__items">
        ${data.accounts.map((a) => `
          <a class="nav-link" style="cursor:default; padding-left: 12px">
            <span class="fx-tag" style="margin-right:6px">${a.currency}</span>
            <span class="nav-link__label">${a.institution}</span>
          </a>
        `).join('')}
      </div>
    </div>
    <div class="nav-footer">
      <div class="workspace-card">
        <div class="workspace-card__title">${data.meta.user.name}</div>
        <div class="workspace-card__meta">${data.meta.counts.transactions.toLocaleString()} transactions · 1Y</div>
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
    if (link) navigate(link.dataset.route!);
  });
}
