import { el } from './dom';
import type { ScreenEntry } from '../screens/registry';

export class Nav {
  readonly node: HTMLElement;
  private readonly buttons = new Map<string, HTMLButtonElement>();

  constructor(entries: ScreenEntry[], onActivate: (id: string) => void) {
    this.node = el('aside', { class: 'nav', role: 'navigation' });
    const groups = groupByCategory(entries);
    for (const [category, items] of groups) {
      const groupNode = el('div', { class: 'nav__group' }, [
        el('span', { class: 'nav__group-title' }, [category]),
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
      this.node.appendChild(groupNode);
    }
  }

  setActive(id: string): void {
    for (const [k, btn] of this.buttons) {
      btn.classList.toggle('nav__item--active', k === id);
    }
  }
}

function groupByCategory(entries: ScreenEntry[]): Map<string, ScreenEntry[]> {
  const order: string[] = [];
  const out = new Map<string, ScreenEntry[]>();
  for (const e of entries) {
    if (!out.has(e.category)) { order.push(e.category); out.set(e.category, []); }
    out.get(e.category)!.push(e);
  }
  return out;
}
