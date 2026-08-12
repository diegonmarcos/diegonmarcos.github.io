import type { PortalData, Tile } from './types';
import { renderTileGrid } from './tiles';

const contentTitleEl = document.getElementById('content-title');
const tileGridEl = document.getElementById('tile-grid');
const pageTabsEl = document.getElementById('page-tabs');
const pageBodyEl = document.getElementById('page-body');
const backBtnEl = document.getElementById('back-btn');
const shellEl = document.querySelector('.shell');
const bottomNavButtons = document.querySelectorAll<HTMLElement>('.bottom-nav__item');

let activeData: PortalData | null = null;

function renderSkeletonRows(host: HTMLElement): void {
  host.innerHTML = '';
  for (let i = 0; i < 3; i++) {
    const row = document.createElement('div');
    row.className = 'page-body__skeleton-row';
    host.appendChild(row);
  }
}

export function navigateTo(id: string): void {
  const section = activeData?.sections[id];
  if (!activeData || !section) return;
  if (!contentTitleEl || !tileGridEl || !pageTabsEl || !pageBodyEl || !backBtnEl || !shellEl) {
    return;
  }

  contentTitleEl.textContent = section.label;
  shellEl.classList.toggle('is-home', id === 'home');

  bottomNavButtons.forEach((button) => {
    button.classList.toggle('is-active', button.dataset['section'] === id);
  });

  backBtnEl.hidden = activeData.bottomNav.includes(id);

  if (id === 'home') {
    const tiles: Array<Tile & { color: string }> = Object.entries(activeData.sections)
      .filter(([key]) => key !== 'home')
      .map(([key, value]) => ({
        id: key,
        label: value.label,
        icon: value.icon,
        target: undefined,
        color: value.color,
      }));

    tileGridEl.hidden = false;
    pageTabsEl.hidden = true;
    pageBodyEl.hidden = true;
    renderTileGrid(tileGridEl, tiles, (tile) => navigateTo(tile.id));
  } else if (section.aggregator === true && section.tiles !== undefined) {
    const tiles: Array<Tile & { color: string }> = section.tiles.map((tile) => ({
      ...tile,
      color: section.color,
    }));

    tileGridEl.hidden = false;
    pageTabsEl.hidden = true;
    pageBodyEl.hidden = true;
    renderTileGrid(tileGridEl, tiles, (tile) => navigateTo(tile.target ?? tile.id));
  } else if (section.pages !== undefined && section.pages.length > 0) {
    tileGridEl.hidden = true;
    pageTabsEl.hidden = false;
    pageBodyEl.hidden = false;

    pageTabsEl.innerHTML = '';
    section.pages.forEach((page, index) => {
      const tab = document.createElement('button');
      tab.className = 'page-tabs__item';
      tab.type = 'button';
      tab.textContent = page;
      if (index === 0) tab.classList.add('is-active');
      tab.addEventListener('click', () => {
        pageTabsEl.querySelectorAll('.page-tabs__item').forEach((sibling) => {
          sibling.classList.remove('is-active');
        });
        tab.classList.add('is-active');
      });
      pageTabsEl.appendChild(tab);
    });

    renderSkeletonRows(pageBodyEl);
  } else {
    tileGridEl.hidden = true;
    pageTabsEl.hidden = true;
    pageBodyEl.hidden = false;
    renderSkeletonRows(pageBodyEl);
  }
}

export function initRouter(data: PortalData): void {
  activeData = data;

  bottomNavButtons.forEach((button) => {
    button.addEventListener('click', () => {
      navigateTo(button.dataset['section'] ?? '');
    });
  });

  if (backBtnEl) {
    backBtnEl.addEventListener('click', () => navigateTo('home'));
  }

  navigateTo('home');
}
