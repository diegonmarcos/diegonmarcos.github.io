import { el } from './dom';

export interface CommandBarOptions {
  onSubmit: (raw: string) => void;
  panelId?: string;
}

export class CommandBar {
  readonly node: HTMLElement;
  private readonly input: HTMLInputElement;

  constructor(opts: CommandBarOptions) {
    this.input = el<HTMLInputElement>('input', {
      class: 'command-bar__input',
      type: 'text',
      placeholder: 'TYPE SCREEN ID + GO   (e.g. MARKETS-INDICES)',
      'aria-label': 'command',
      spellcheck: 'false',
      autocomplete: 'off',
    });
    this.input.addEventListener('keydown', (e) => {
      if (e.key === 'Enter') { e.preventDefault(); this.submit(); }
      if (e.key === 'Escape') { this.input.value = ''; }
    });

    const goBtn = el<HTMLButtonElement>('button', { class: 'command-bar__go', type: 'button' }, ['<GO>']);
    goBtn.addEventListener('click', () => this.submit());

    this.node = el('div', { class: 'command-bar', role: 'toolbar' }, [
      el('span', { class: 'command-bar__brand' }, ['FIN']),
      el('span', { class: 'command-bar__panel-id' }, [opts.panelId ?? 'P1']),
      el('span', { class: 'command-bar__prompt' }, ['»']),
      this.input,
      goBtn,
      el('span', { class: 'command-bar__hint' }, ['ENTER=GO  ESC=CLEAR  CTRL+T=THEME']),
    ]);

    this.onSubmit = opts.onSubmit;
  }

  private onSubmit: (raw: string) => void;

  focus(): void { this.input.focus(); }

  setValue(v: string): void { this.input.value = v.toUpperCase(); }

  private submit(): void {
    const raw = this.input.value.trim();
    if (!raw) return;
    this.onSubmit(raw);
    this.input.value = '';
  }
}
