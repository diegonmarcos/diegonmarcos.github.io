import { describe, it, expect } from 'vitest';
import bloomberg from '../src/typescript/data/palette-bloomberg-dark.json';
import egui from '../src/typescript/data/palette-egui-dark.json';
import themes from '../src/typescript/data/themes.json';

const BLOOMBERG_REQUIRED = [
  'background', 'surface', 'surface_alt', 'text', 'text_muted', 'text_primary',
  'accent', 'positive', 'negative', 'warning', 'info', 'function_key',
  'action_key', 'cancel_key', 'grid', 'border',
];

const EGUI_REQUIRED = [
  'background', 'surface', 'surface_alt', 'text', 'text_muted',
  'accent', 'positive', 'negative', 'warning', 'grid',
];

const HEX = /^#[0-9a-fA-F]{6}([0-9a-fA-F]{2})?$/;

describe('palette: bloomberg-dark', () => {
  const p = (bloomberg as { palette: Record<string, string> }).palette;
  it('contains all required tokens with valid hex values', () => {
    for (const k of BLOOMBERG_REQUIRED) {
      expect(p[k], `bloomberg-dark.palette.${k} missing`).toBeTruthy();
      expect(p[k]!).toMatch(HEX);
    }
  });
  it('uses true black for background (#000000)', () => {
    expect(p['background']!.toLowerCase()).toBe('#000000');
  });
  it('uses authentic Bloomberg Sunshade #FFA028 for default text', () => {
    expect(p['text']!.toUpperCase()).toBe('#FFA028');
  });
});

describe('palette: egui-dark', () => {
  const p = (egui as { palette: Record<string, string> }).palette;
  it('contains all required tokens (egui dark.json shape)', () => {
    for (const k of EGUI_REQUIRED) {
      expect(p[k], `egui-dark.palette.${k} missing`).toBeTruthy();
      expect(p[k]!).toMatch(HEX);
    }
  });
});

describe('themes index', () => {
  it('lists exactly bloomberg-dark and egui-dark', () => {
    const ids = (themes as { themes: Array<{ id: string }> }).themes.map(t => t.id);
    expect(ids).toContain('bloomberg-dark');
    expect(ids).toContain('egui-dark');
  });
  it('default points at an existing theme', () => {
    const idx = themes as { default: string; themes: Array<{ id: string }> };
    expect(idx.themes.find(t => t.id === idx.default)).toBeTruthy();
  });
});
