import { el } from './dom';
import type { ScreenEntry } from '../screens/registry';
import navGroupsJson from '../data/nav-groups.json';

interface NavSection { id: string; label: string; }
interface NavGroup { id: string; section: string; label: string; categories: string[]; }
interface NavGroupsCfg { sections: NavSection[]; groups: NavGroup[]; }
const CFG = navGroupsJson as NavGroupsCfg;

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
    const usedCats = new Set<string>();

    for (const section of CFG.sections) {
      const sectionGroups = CFG.groups.filter(g => g.section === section.id);
      // Collect items per group, skip empty.
      const renderableGroups: Array<{ g: NavGroup; items: ScreenEntry[] }> = [];
      for (const g of sectionGroups) {
        const items: ScreenEntry[] = [];
        for (const cat of g.categories) {
          const list = byCategory.get(cat);
          if (list) { items.push(...list); usedCats.add(cat); }
        }
        if (items.length > 0) renderableGroups.push({ g, items });
      }
      if (renderableGroups.length === 0) continue;

      // Section breaker (skip for HOME — its label already lives at the
      // group level and a bare HOME header on its own would be redundant).
      if (section.id !== 'home') {
        this.node.appendChild(el('div', { class: 'nav__section-title' }, [section.label]));
      }
      for (const { g, items } of renderableGroups) {
        this.node.appendChild(this.buildGroup(g.label, items, onActivate));
      }
    }

    // Catch-all for any category not assigned in nav-groups.json. Surfaces
    // immediately rather than silently swallowing — partner test
    // 'every registry category maps to a group' makes this empty in prod.
    const orphanItems: ScreenEntry[] = [];
    for (const [cat, list] of byCategory) if (!usedCats.has(cat)) orphanItems.push(...list);
    if (orphanItems.length > 0) {
      this.node.appendChild(el('div', { class: 'nav__section-title' }, ['UNGROUPED']));
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
