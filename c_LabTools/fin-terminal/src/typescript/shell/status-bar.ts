import { el } from './dom';
import type { WsState } from '../api/ws';

export interface StatusFields {
  connection: WsState | 'unknown';
  topics: number | null;
  latency_ms: number | null;
  build: string;
  user: string;
  themeId: string;
  themeName: string;
}

export class StatusBar {
  readonly node: HTMLElement;
  private readonly conn: HTMLElement;
  private readonly connDot: HTMLElement;
  private readonly connLabel: HTMLElement;
  private readonly topics: HTMLElement;
  private readonly latency: HTMLElement;
  private readonly user: HTMLElement;
  private readonly build: HTMLElement;
  private readonly clock: HTMLElement;
  private readonly themeBtn: HTMLButtonElement;
  private timer?: ReturnType<typeof setInterval>;

  constructor(onCycleTheme: () => void) {
    this.connDot = el('span', { class: 'status-bar__dot' });
    this.connLabel = el('span', {}, ['—']);
    this.conn = el('span', { class: 'status-bar__cell' }, [this.connDot, this.connLabel]);

    this.topics = el('span', { class: 'status-bar__cell' }, ['topics ', el('span', { class: 'status-bar__value' }, ['—'])]);
    this.latency = el('span', { class: 'status-bar__cell' }, ['lat ', el('span', { class: 'status-bar__value' }, ['—'])]);
    this.user = el('span', { class: 'status-bar__cell' }, ['user ', el('span', { class: 'status-bar__value' }, ['anon'])]);
    this.build = el('span', { class: 'status-bar__cell' }, ['build ', el('span', { class: 'status-bar__value' }, ['—'])]);

    this.themeBtn = el<HTMLButtonElement>('button', {
      class: 'status-bar__theme-switch',
      type: 'button',
      title: 'Cycle theme (Ctrl+T)',
    }, ['theme: —']);
    this.themeBtn.addEventListener('click', onCycleTheme);

    const themeCell = el('span', { class: 'status-bar__cell' }, [this.themeBtn]);
    this.clock = el('span', { class: 'status-bar__cell' }, [el('span', { class: 'status-bar__value' }, [now()])]);

    this.node = el('div', { class: 'status-bar' }, [
      this.conn, this.topics, this.latency, this.user, this.build, themeCell, this.clock,
    ]);

    this.timer = setInterval(() => { this.setClock(now()); }, 1000);
  }

  destroy(): void { if (this.timer) clearInterval(this.timer); }

  update(s: Partial<StatusFields>): void {
    if (s.connection !== undefined) {
      this.connLabel.textContent = s.connection.toUpperCase();
      this.conn.classList.remove('status-bar__cell--ok', 'status-bar__cell--warn', 'status-bar__cell--down');
      if (s.connection === 'open') this.conn.classList.add('status-bar__cell--ok');
      else if (s.connection === 'connecting' || s.connection === 'reconnecting') this.conn.classList.add('status-bar__cell--warn');
      else this.conn.classList.add('status-bar__cell--down');
    }
    if (s.topics !== undefined) this.topics.lastElementChild!.textContent = s.topics === null ? '—' : String(s.topics);
    if (s.latency_ms !== undefined) this.latency.lastElementChild!.textContent = s.latency_ms === null ? '—' : `${s.latency_ms}ms`;
    if (s.user !== undefined) this.user.lastElementChild!.textContent = s.user;
    if (s.build !== undefined) this.build.lastElementChild!.textContent = s.build;
    if (s.themeName !== undefined) this.themeBtn.textContent = `theme: ${s.themeName}`;
  }

  private setClock(t: string): void { this.clock.lastElementChild!.textContent = t; }
}

function now(): string {
  return new Date().toISOString().slice(11, 19) + ' UTC';
}
