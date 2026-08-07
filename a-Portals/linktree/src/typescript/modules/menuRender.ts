// Renders the FAB control list and the hamburger nav from the same
// MENU_GROUPS data, so the two menus can never drift out of sync.

import { MENU_GROUPS, type MenuItem } from './menuData';

function renderFabButton(item: MenuItem): HTMLElement {
  const el = document.createElement(item.href ? 'a' : 'button');
  el.id = item.id;
  el.className = 'icon-btn';
  el.setAttribute('data-fab', 'icon-btn');
  el.title = item.label;
  if (item.href) {
    el.setAttribute('href', item.href);
    el.setAttribute('target', '_blank');
  } else {
    el.setAttribute('type', 'button');
  }
  const img = document.createElement('img');
  img.src = `public/icons/${item.icon}`;
  img.alt = item.label;
  img.setAttribute('data-fab-img', '');
  el.appendChild(img);
  return el;
}

function renderHamburgerItem(item: MenuItem): HTMLElement {
  const btn = document.createElement('button');
  btn.className = 'hamburger-item';
  btn.dataset['trigger'] = item.id;
  btn.textContent = item.label;
  return btn;
}

export function renderMenu(): void {
  const controlsList = document.getElementById('controls-list');
  const hamburgerNav = document.getElementById('hamburger-nav');
  if (!controlsList || !hamburgerNav) return;

  controlsList.innerHTML = '';
  hamburgerNav.innerHTML = '';

  for (const group of MENU_GROUPS) {
    const fabGroup = document.createElement('div');
    fabGroup.className = 'fab-group';
    const fabLabel = document.createElement('span');
    fabLabel.className = 'fab-group__label';
    fabLabel.textContent = group.label;
    fabGroup.appendChild(fabLabel);

    const hbGroup = document.createElement('div');
    hbGroup.className = 'hamburger-group';
    const hbLabel = document.createElement('span');
    hbLabel.className = 'hamburger-group__label';
    hbLabel.textContent = group.label;
    hbGroup.appendChild(hbLabel);

    for (const item of group.items) {
      fabGroup.appendChild(renderFabButton(item));
      hbGroup.appendChild(renderHamburgerItem(item));
    }

    controlsList.appendChild(fabGroup);
    hamburgerNav.appendChild(hbGroup);
  }
}
