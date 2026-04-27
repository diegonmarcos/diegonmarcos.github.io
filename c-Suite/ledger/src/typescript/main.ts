// ============================================
// Ledger — entry
// ============================================
import { store } from './modules/state';
import { loadDataset, loadNav } from './modules/loader';
import { renderShell, renderTopbar, renderSidebar } from './modules/shell';
import { onRouteChange, findItem } from './modules/router';
import type { Dataset, NavTree } from './modules/types';

import { renderCashflowCategories }   from './views/cashflow-categories';
import { renderCashflowMap }          from './views/cashflow-map';
import { renderCashflowTables }       from './views/cashflow-tables';
import { renderAssetsSources }        from './views/assets-sources';
import { renderAssetsPortfolio }      from './views/assets-portfolio';
import { renderAssetsIncomes }        from './views/assets-incomes';
import { renderLiabilitiesCreditCards }from './views/liabilities-credit-cards';
import { renderLiabilitiesRealEstate }from './views/liabilities-real-estate';
import { renderLiabilitiesLeverage }  from './views/liabilities-leverage';
import { renderAccountingGeneral }    from './views/accounting-general';
import { renderAccountingTaxReturn }  from './views/accounting-tax-return';
import { renderAccountingReports }    from './views/accounting-reports';
import { renderAccountingTaxes }      from './views/accounting-taxes';

type ViewFn = (root: HTMLElement, data: Dataset, item: any, tab: string) => void;

const VIEWS: Record<string, ViewFn> = {
  'cashflow/categories':       renderCashflowCategories,
  'cashflow/map':              renderCashflowMap,
  'cashflow/tables':           renderCashflowTables,
  'assets/sources':            renderAssetsSources,
  'assets/portfolio':          renderAssetsPortfolio,
  'assets/incomes':            renderAssetsIncomes,
  'liabilities/credit-cards':  renderLiabilitiesCreditCards,
  'liabilities/real-estate':   renderLiabilitiesRealEstate,
  'liabilities/leverage':      renderLiabilitiesLeverage,
  'accounting/general':        renderAccountingGeneral,
  'accounting/tax-return':     renderAccountingTaxReturn,
  'accounting/reports':        renderAccountingReports,
  'accounting/taxes':          renderAccountingTaxes,
};

async function bootstrap() {
  const root = document.getElementById('app')!;
  renderShell(root);
  const main = document.getElementById('main')!;
  main.innerHTML = '<div class="view"><div class="empty-state"><div class="skeleton" style="width: 320px; height: 32px"></div></div></div>';

  let data: Dataset; let nav: NavTree;
  try {
    [data, nav] = await Promise.all([loadDataset(), loadNav()]);
  } catch (e) {
    main.innerHTML = `<div class="view"><div class="empty-state"><h3 class="t-h2">Could not load data</h3><p class="t-meta">${(e as Error).message}</p></div></div>`;
    return;
  }
  store.set({ data, nav, loading: false });
  store.subscribe(() => render());
  onRouteChange(nav, (route) => store.set({ route }));
  render();
}

function render() {
  const { data, nav, route } = store.get();
  if (!data || !nav) return;
  renderTopbar(data);
  renderSidebar(data, nav, route.path);
  const main = document.getElementById('main')!;
  const found = findItem(nav, route.path);
  if (!found) { main.innerHTML = `<div class="view"><div class="empty-state"><h3 class="t-h2">Unknown route</h3></div></div>`; return; }
  const fn = VIEWS[route.path];
  if (!fn) { main.innerHTML = `<div class="view"><div class="empty-state"><h3 class="t-h2">${found.item.label}</h3><p class="t-meta">View not yet wired.</p></div></div>`; return; }
  fn(main, data, found.item, route.tab || (found.item.tabs?.[0]?.id ?? ''));
}

bootstrap();
