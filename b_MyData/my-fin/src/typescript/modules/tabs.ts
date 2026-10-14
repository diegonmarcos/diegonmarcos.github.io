// ============================================
// Tab bar — pure helper (data-driven from NavItem)
// ============================================
import type { NavItem } from './types';
import { setTab } from './router';

export function renderTabbar(item: NavItem, activeTab: string | null): string {
  if (!item.tabs || item.tabs.length === 0) return '';
  return `
    <nav class="view-tabs" data-tabbar="${item.route}">
      ${item.tabs.map((t) => `
        <button class="view-tabs__tab ${t.id === activeTab ? 'is-active' : ''}" data-tab="${t.id}">${t.label}</button>
      `).join('')}
    </nav>
  `;
}

export function bindTabbar(root: HTMLElement, route: string) {
  root.querySelectorAll<HTMLElement>('[data-tabbar]').forEach((bar) => {
    bar.addEventListener('click', (e) => {
      const t = (e.target as HTMLElement).closest('[data-tab]') as HTMLElement | null;
      if (!t) return;
      setTab(route, t.dataset.tab!);
    });
  });
}

export function renderCrumbs(sectionLabel: string, itemId: string, itemLabel: string): string {
  return `
    <div class="crumbs">
      <span>${sectionLabel}</span>
      <span class="crumbs__sep">›</span>
      <span class="fx-tag">${itemId}</span>
      <span class="crumbs__current">${itemLabel}</span>
    </div>
  `;
}
