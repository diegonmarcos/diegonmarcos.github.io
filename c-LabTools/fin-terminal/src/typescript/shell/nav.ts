import { el } from './dom';
import type { ScreenEntry } from '../screens/registry';
import navGroupsJson from '../data/nav-groups.json';

interface NavGroup { id: string; label: string; categories: string[]; }
interface NavGroupsCfg { groups: NavGroup[]; }
const NAV_GROUPS: NavGroup[] = (navGroupsJson as NavGroupsCfg).groups;

export class Nav {
  readonly node: HTMLElement;
  private readonly buttons = new Map<string, HTMLButtonElement>();

  constructor(entries: ScreenEntry[], onActivate: (id: string) => void) {
    this.node = el('aside', { class: 'nav', role: 'navigation' });

    const byCategory = new Map<string, ScreenEntry[]>();
    for (const e of entries) {
      if (!byCategory.has(e.category)) byCategory.set(e.category, []);
      byCategory.get(e.category)!.push(e);
    }
    const used = new Set<string>();

    for (const g of NAV_GROUPS) {
      const items: ScreenEntry[] = [];
      for (const cat of g.categories) {
        const list = byCategory.get(cat);
        if (list) { items.push(...list); used.add(cat); }
      }
      if (items.length === 0) continue;
      this.node.appendChild(this.buildGroup(g.label, items, onActivate));
    }

    // Catch-all for any category not assigned in nav-groups.json. Surfaces
    // immediately rather than silently swallowing — partner test
    // 'every registry category maps to a group' should make this empty.
    const orphanItems: ScreenEntry[] = [];
    for (const [cat, list] of byCategory) if (!used.has(cat)) orphanItems.push(...list);
    if (orphanItems.length > 0) {
      this.node.appendChild(this.buildGroup('UNGROUPED', orphanItems, onActivate));
    }
  }

  private buildGroup(label: string, items: ScreenEntry[], onActivate: (id: string) => void): HTMLElement {
    const groupNode = el('div', { class: 'nav__group' }, [
      el('span', { class: 'nav__group-title' }, [label]),
    ]);
    for (const item of items) {
      const btn = el<HTMLButtonElement>('button', {
        class: 'nav__item',
        type: 'button',
        'data-screen': item.id,
        title: item.id.toUpperCase(),
      }, [item.title]);
      btn.addEventListener('click', () => onActivate(item.id));
      this.buttons.set(item.id, btn);
      groupNode.appendChild(btn);
    }
    return groupNode;
  }

  setActive(id: string): void {
    for (const [k, btn] of this.buttons) {
      btn.classList.toggle('nav__item--active', k === id);
    }
  }
}
