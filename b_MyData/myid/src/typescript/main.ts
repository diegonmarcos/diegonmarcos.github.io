// ============================================
// myID — entry
// ============================================
const TAG = '[myid]';
console.info(TAG, 'script.js evaluated', { ts: Date.now(), readyState: document.readyState });

import { store } from './modules/state';
import { loadDataset, loadNav } from './modules/loader';
import { renderShell, renderTopbar, renderSidebar } from './modules/shell';
import { onRouteChange } from './modules/router';
import { renderWalletAll, renderWalletCategory } from './views/wallet-grid';
import { renderDetail } from './views/document-detail';
import type { Dataset, NavTree } from './modules/types';

async function bootstrap() {
  console.info(TAG, 'bootstrap entered');

  const root = document.getElementById('app');
  if (!root) { console.error(TAG, 'no #app'); return; }

  renderShell(root);

  const main = document.getElementById('main');
  if (!main) { console.error(TAG, 'no #main'); return; }
  main.innerHTML = '<div class="view"><div class="empty-state"><h3 class="t-h2">Loading…</h3></div></div>';

  let data: Dataset; let nav: NavTree;
  try {
    [data, nav] = await Promise.all([loadDataset(), loadNav()]);
    console.info(TAG, 'data loaded', {
      categories: data.categories.length,
      docs: data.categories.reduce((acc, c) => acc + c.documents.length, 0),
      navSections: nav.sections.length,
    });
  } catch (e) {
    const err = e as Error;
    console.error(TAG, 'data load failed', err.stack || err.message);
    main.innerHTML = `<div class="view"><div class="empty-state"><h3 class="t-h2">Could not load data</h3><p class="t-meta">${err.message}</p></div></div>`;
    return;
  }

  store.set({ data, nav, loading: false });
  store.subscribe(() => render());
  onRouteChange(nav, (route) => {
    console.info(TAG, 'route change', route);
    store.set({ route });
  });
  render();
}

function render() {
  const { data, nav, route, selectedDoc } = store.get();
  if (!data || !nav) return;
  renderTopbar(data);
  renderSidebar(data, nav, route.path);

  const main = document.getElementById('main');
  if (!main) return;

  if (route.path === 'wallet/all') {
    renderWalletAll(main, data);
  } else if (route.path.startsWith('wallet/')) {
    const catId = route.path.split('/')[1];
    renderWalletCategory(main, data, catId);
  } else {
    main.innerHTML = `<div class="view"><div class="empty-state"><h3 class="t-h2">Unknown route</h3><p class="t-meta">${route.path}</p></div></div>`;
  }

  renderDetail(document.body, selectedDoc);
}

bootstrap().catch((e) => console.error(TAG, 'bootstrap rejected', (e as Error).stack || (e as Error).message));
