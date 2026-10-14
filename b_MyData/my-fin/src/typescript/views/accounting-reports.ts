// ============================================
// D2 — Custom reports (templates)
// ============================================
import type { Dataset, NavItem } from '../modules/types';
import { svgIcon } from '../modules/meta';
import { renderTabbar, bindTabbar } from '../modules/tabs';

interface ReportTemplate {
  id: string;
  name: string;
  description: string;
  icon: string;
  status: 'live' | 'beta' | 'soon';
}

const TEMPLATES: ReportTemplate[] = [
  { id: 'monthly-summary', name: 'Monthly summary',         description: 'Income, expense, savings rate and top categories per month.', icon: 'file-text', status: 'live' },
  { id: 'yearly-recap',    name: 'Yearly recap',            description: 'End-of-year retrospective with charts and YoY comparisons.', icon: 'reports', status: 'live' },
  { id: 'travel-report',   name: 'Travel report',           description: 'Per-trip breakdown: flights, hotels, food, local transport.', icon: 'map', status: 'beta' },
  { id: 'cbe',             name: 'CBE · BCB declaration',   description: 'Capitais brasileiros no exterior — required if foreign assets > USD 1M.', icon: 'globe', status: 'soon' },
  { id: 'capital-gains',   name: 'Capital gains schedule',  description: 'Lot-by-lot cost basis and realized gains for tax filing.',   icon: 'trending-up', status: 'soon' },
  { id: 'expense-audit',   name: 'Expense audit',           description: 'Outliers, duplicates, recurring detection, suspicious patterns.', icon: 'shield', status: 'soon' },
];

export function renderAccountingReports(root: HTMLElement, _data: Dataset, item: NavItem, tab: string) {
  root.innerHTML = `
    <div class="view fade-in">
      <header class="view__head">
        <div class="view__title">
          <span class="t-eyebrow">D · Accounting</span>
          <h1 class="t-display">${item.label}</h1>
        </div>
        <div class="view__actions">
          <button class="btn btn--primary">${svgIcon('plus')} New report</button>
        </div>
      </header>
      ${renderTabbar(item, tab)}
      <section id="tab-content"></section>
    </div>
  `;
  const tabRoot = root.querySelector('#tab-content') as HTMLElement;

  if (tab === 'templates') {
    tabRoot.innerHTML = `
      <section class="grid-3">
        ${TEMPLATES.map((t) => `
          <article class="card">
            <div style="display:flex; align-items:center; gap:12px; margin-bottom: 8px">
              <span class="tbl-cell__icon" style="--cell-color:#5B8CFF; --cell-bg:rgba(91,140,255,0.14); width:36px; height:36px">${svgIcon(t.icon)}</span>
              <div style="flex:1">
                <h3 class="card__title">${t.name}</h3>
              </div>
              ${t.status === 'live' ? '<span class="badge badge--positive"><span class="badge__dot"></span>Live</span>' : t.status === 'beta' ? '<span class="badge badge--brand"><span class="badge__dot"></span>Beta</span>' : '<span class="badge badge--neutral"><span class="badge__dot"></span>Soon</span>'}
            </div>
            <p class="t-meta">${t.description}</p>
            <div style="display:flex; gap: 8px; margin-top: 12px">
              <button class="btn btn--secondary" ${t.status === 'soon' ? 'disabled' : ''}>${svgIcon('download')} Generate</button>
              <button class="btn btn--ghost">${svgIcon('settings')} Configure</button>
            </div>
          </article>
        `).join('')}
      </section>
    `;
  } else if (tab === 'saved') {
    tabRoot.innerHTML = `
      <article class="card">
        <div class="empty-state">
          ${svgIcon('file-text')}
          <h3 class="t-h2">No saved reports yet</h3>
          <p class="t-meta">Generate a report from a template and it will appear here.</p>
        </div>
      </article>
    `;
  }

  bindTabbar(root, item.route);
}
