// ============================================
// My Financials — entry
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

function showFatal(stage: string, err: unknown) {
  const message = err instanceof Error ? `${err.message}\n\n${err.stack ?? ''}` : String(err);
  console.error(`[bootstrap] FATAL @ ${stage}:`, err);
  const pre = document.createElement('pre');
  pre.style.cssText = 'background:#200;color:#f88;padding:1rem;margin:1rem;font:12px/1.4 ui-monospace,monospace;white-space:pre-wrap;border:1px solid #f44;border-radius:4px;';
  pre.textContent = `MyFin boot failed @ ${stage}\n\n${message}`;
  document.body.appendChild(pre);
}

async function bootstrap() {
  console.log('[bootstrap] start  PORTAL_DATA keys=', globalThis.PORTAL_DATA ? Object.keys(globalThis.PORTAL_DATA) : '(none)');
  const root = document.getElementById('app');
  if (!root) { showFatal('getElementById(app)', new Error('#app element not found in DOM')); return; }
  console.log('[bootstrap] #app found');

  try { renderShell(root); console.log('[bootstrap] renderShell ok'); }
  catch (e) { showFatal('renderShell', e); return; }

  const main = document.getElementById('main');
  if (!main) { showFatal('getElementById(main)', new Error('#main element not found after renderShell')); return; }
  main.innerHTML = '<div class="view"><div class="empty-state"><div class="skeleton" style="width: 320px; height: 32px"></div></div></div>';

  let data: Dataset; let nav: NavTree;
  try {
    console.log('[bootstrap] loading dataset + nav...');
    [data, nav] = await Promise.all([loadDataset(), loadNav()]);
    console.log('[bootstrap] data loaded — meta=', (data as unknown as { meta?: unknown }).meta);
  } catch (e) {
    main.innerHTML = `<div class="view"><div class="empty-state"><h3 class="t-h2">Could not load data</h3><p class="t-meta">${(e as Error).message}</p></div></div>`;
    showFatal('loadDataset/loadNav', e);
    return;
  }
  try {
    store.set({ data, nav, loading: false });
    store.subscribe(() => render());
    onRouteChange(nav, (route) => store.set({ route }));
    render();
    console.log('[bootstrap] initial render complete');
  } catch (e) { showFatal('store/render init', e); }
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

// Catch ANY uncaught error so the user sees something instead of a blank page.
window.addEventListener('error',           (ev) => { showFatal('window.onerror', ev.error ?? ev.message); });
window.addEventListener('unhandledrejection', (ev) => { showFatal('unhandledrejection', ev.reason); });
(globalThis as unknown as { __myFinBooted?: boolean }).__myFinBooted = true;
const bootDiag = (globalThis as unknown as { __bootDiag?: (l: string, m: string) => void }).__bootDiag;
if (bootDiag) bootDiag('ok', '4. script.js IIFE executing — main.ts module body running');
console.log('[main.ts] module loaded — DOM readyState=', document.readyState);

bootstrap().catch((e) => showFatal('bootstrap()', e));
