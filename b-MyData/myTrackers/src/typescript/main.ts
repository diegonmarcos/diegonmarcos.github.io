import type { PortalData, TrackerCategory, TrackerApp } from './types';

declare global {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  var PORTAL_DATA: Record<string, any> | undefined;
}

const DATA_KEY = 'myTrackers';

function renderApp(app: TrackerApp): string {
  return `
    <a class="app-card" href="${app.url}" target="_blank" rel="noopener noreferrer">
      <span class="app-card__icon" aria-hidden="true">${app.icon}</span>
      <span class="app-card__body">
        <span class="app-card__name">${app.name}</span>
        <span class="app-card__description">${app.description}</span>
        ${app.stat ? `<span class="app-card__stat">${app.stat}</span>` : ''}
      </span>
    </a>
  `;
}

function renderCategory(category: TrackerCategory): string {
  return `
    <section class="category" id="category-${category.id}">
      <h2 class="category__label">${category.label}</h2>
      <div class="category__grid">
        ${category.apps.map(renderApp).join('')}
      </div>
    </section>
  `;
}

function render(data: PortalData): void {
  const root = document.getElementById('tracker-root');
  if (!root) return;
  root.innerHTML = data.categories.map(renderCategory).join('');
}

function init(): void {
  const data: PortalData | undefined = globalThis.PORTAL_DATA?.[DATA_KEY];
  if (!data) return;
  if (data.title) document.title = data.title;
  render(data);
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', init);
} else {
  init();
}
