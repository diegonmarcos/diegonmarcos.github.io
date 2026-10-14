import { el, clear } from './dom';

export interface PanelMount {
  body: HTMLElement;
  setTitle: (t: string) => void;
}

export class Panel {
  readonly node: HTMLElement;
  private readonly chromeTitle: HTMLElement;
  private readonly clock: HTMLElement;
  private readonly body: HTMLElement;
  private clockTimer?: ReturnType<typeof setInterval>;

  constructor(panelId: string) {
    this.chromeTitle = el('span', { class: 'panel__chrome-title' }, ['—']);
    this.clock = el('span', { class: 'panel__chrome-clock' }, [now()]);
    const chromeId = el('span', { class: 'panel__chrome-id' }, [panelId]);

    const chrome = el('div', { class: 'panel__chrome' }, [
      this.chromeTitle, chromeId, this.clock,
    ]);
    this.body = el('div', { class: 'panel__body' });

    this.node = el('div', { class: 'panel' }, [chrome, this.body]);

    this.clockTimer = setInterval(() => { this.clock.textContent = now(); }, 1000);
  }

  destroy(): void { if (this.clockTimer) clearInterval(this.clockTimer); }

  mount(title: string, modifierClass?: string): PanelMount {
    clear(this.body);
    this.body.className = 'panel__body' + (modifierClass ? ` ${modifierClass}` : '');
    this.chromeTitle.textContent = title;
    return {
      body: this.body,
      setTitle: (t) => { this.chromeTitle.textContent = t; },
    };
  }
}

function now(): string {
  const d = new Date();
  return d.toISOString().slice(11, 19) + ' UTC';
}
