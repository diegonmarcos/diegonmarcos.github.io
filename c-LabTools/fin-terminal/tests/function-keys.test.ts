import { describe, it, expect } from 'vitest';
import fkeys from '../src/typescript/data/function-keys.json';
import customRegistry from '../src/typescript/data/screen-registry.json';
import specs from '../src/typescript/data/screen-specs.json';

interface FKey { key: string; label: string; color: string; screen: string; }

describe('function-keys.json', () => {
  const list = (fkeys as { keys: FKey[] }).keys;
  const allIds = new Set<string>([
    ...(customRegistry as { custom: Array<{ id: string }> }).custom.map(c => c.id),
    ...(specs as { specs: Array<{ id: string }> }).specs.map(s => s.id),
  ]);

  it('has exactly 12 entries (F1–F12)', () => {
    expect(list.length).toBe(12);
    expect(list.map(k => k.key)).toEqual(['F1','F2','F3','F4','F5','F6','F7','F8','F9','F10','F11','F12']);
  });

  it('every function key maps to an existing screen id', () => {
    for (const k of list) {
      expect(allIds.has(k.screen), `F-key ${k.key} → "${k.screen}" — no such screen`).toBe(true);
    }
  });

  it('color values are restricted to known palette tokens', () => {
    const allowed = new Set(['function_key', 'action_key', 'cancel_key']);
    for (const k of list) expect(allowed.has(k.color)).toBe(true);
  });
});
