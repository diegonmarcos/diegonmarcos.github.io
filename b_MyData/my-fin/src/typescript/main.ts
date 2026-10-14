// ============================================
// My Financials — entry
// ============================================
// Verbose boot logging: every stage emits console.info — captured in
// DevTools, AND mirrored by the engine-injected console-log snippet
// (mod_console_log) which ships JSONL to the local server-log-receiver
// → browser-console.log. Keep messages stable + grep-friendly.
const TAG = '[my-fin]';
console.info(TAG, 'script.js evaluated', { ts: Date.now(), readyState: document.readyState });

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
  console.info(TAG,'bootstrap entered');

  const root = document.getElementById('app');
  if (!root) { console.error(TAG,'bootstrap.no-#app', 'document.getElementById("app") is null'); return; }
  console.info(TAG,'bootstrap.#app found', { childCount: root.childElementCount });

  try { renderShell(root); console.info(TAG,'renderShell done'); }
  catch (e) { console.error(TAG,'renderShell threw', (e as Error).stack || (e as Error).message); throw e; }

  const main = document.getElementById('main');
  if (!main) { console.error(TAG,'bootstrap.no-#main', '#main not in DOM after renderShell'); return; }
  main.innerHTML = '<div class="view"><div class="empty-state"><div class="skeleton" style="width: 320px; height: 32px"></div></div></div>';

  let data: Dataset; let nav: NavTree;
  try {
    [data, nav] = await Promise.all([loadDataset(), loadNav()]);
    console.info(TAG,'data loaded', { datasetKeys: Object.keys(data as object), navSections: (nav as { sections: unknown[] }).sections?.length });
  } catch (e) {
    const err = e as Error;
    console.error(TAG,'data load failed', err.stack || err.message);
    main.innerHTML = `<div class="view"><div class="empty-state"><h3 class="t-h2">Could not load data</h3><p class="t-meta">${err.message}</p></div></div>`;
    return;
  }
  store.set({ data, nav, loading: false });
  store.subscribe(() => render());
  onRouteChange(nav, (route) => { console.info(TAG,'route change', route); store.set({ route }); });
  try { render(); console.info(TAG,'first render done'); }
  catch (e) { console.error(TAG,'first render threw', (e as Error).stack || (e as Error).message); throw e; }
}

function render() {
  const { data, nav, route } = store.get();
  if (!data || !nav) { console.warn(TAG,'render skipped', { hasData: !!data, hasNav: !!nav }); return; }
  try { renderTopbar(data); } catch (e) { console.error(TAG,'renderTopbar threw', (e as Error).stack || (e as Error).message); }
  try { renderSidebar(data, nav, route.path); } catch (e) { console.error(TAG,'renderSidebar threw', (e as Error).stack || (e as Error).message); }
  const main = document.getElementById('main')!;
  const found = findItem(nav, route.path);
  if (!found) { console.warn(TAG,'render.unknown-route', route.path); main.innerHTML = `<div class="view"><div class="empty-state"><h3 class="t-h2">Unknown route</h3></div></div>`; return; }
  const fn = VIEWS[route.path];
  if (!fn) { console.warn(TAG,'render.view-not-wired', route.path); main.innerHTML = `<div class="view"><div class="empty-state"><h3 class="t-h2">${found.item.label}</h3><p class="t-meta">View not yet wired.</p></div></div>`; return; }
  try { fn(main, data, found.item, route.tab || (found.item.tabs?.[0]?.id ?? '')); console.info(TAG,'view rendered', { route: route.path, tab: route.tab }); }
  catch (e) { console.error(TAG,'view threw', { route: route.path, err: (e as Error).stack || (e as Error).message }); }
}

bootstrap().catch((e) => console.error(TAG,'bootstrap rejected', (e as Error).stack || (e as Error).message));
