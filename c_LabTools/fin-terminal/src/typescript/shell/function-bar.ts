import { el } from './dom';
import fkeysJson from '../data/function-keys.json';

interface FKey {
  key: string;
  label: string;
  color: 'function_key' | 'action_key' | 'cancel_key';
  screen: string;
}
interface FKeyData { keys: FKey[]; }

export class FunctionBar {
  readonly node: HTMLElement;
  private readonly keys: FKey[];

  constructor(onActivate: (screenId: string) => void) {
    this.keys = (fkeysJson as FKeyData).keys;
    this.node = el('div', { class: 'function-bar', role: 'toolbar' });
    for (const k of this.keys) {
      const colorClass =
        k.color === 'action_key' ? 'function-bar__key--action' :
        k.color === 'cancel_key' ? 'function-bar__key--cancel' :
        'function-bar__key--default';
      const btn = el<HTMLButtonElement>('button', {
        class: `function-bar__key ${colorClass}`,
        type: 'button',
        'data-screen': k.screen,
        title: `${k.key} → ${k.screen}`,
      }, [
        el('span', { class: 'function-bar__key-label' }, [k.key]),
        el('span', { class: 'function-bar__key-name' }, [k.label]),
      ]);
      btn.addEventListener('click', () => onActivate(k.screen));
      this.node.appendChild(btn);
    }
  }

  resolveKey(eventKey: string): string | null {
    const found = this.keys.find(k => k.key === eventKey);
    return found ? found.screen : null;
  }
}
