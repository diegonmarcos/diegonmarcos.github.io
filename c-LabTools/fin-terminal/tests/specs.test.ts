import { describe, it, expect } from 'vitest';
import specs from '../src/typescript/data/screen-specs.json';
import customRegistry from '../src/typescript/data/screen-registry.json';

interface Spec { id: string; title: string; category: string; summary: string; }

describe('screen-specs.json', () => {
  const list = (specs as { specs: Spec[] }).specs;

  it('contains exactly 41 spec-driven screens', () => {
    expect(list.length).toBe(41);
  });

  it('every spec has id, title, category, summary', () => {
    for (const s of list) {
      expect(s.id, `spec missing id`).toBeTruthy();
      expect(s.title, `spec ${s.id} missing title`).toBeTruthy();
      expect(s.category, `spec ${s.id} missing category`).toBeTruthy();
      expect(s.summary, `spec ${s.id} missing summary`).toBeTruthy();
    }
  });

  it('spec ids are unique', () => {
    const seen = new Set<string>();
    for (const s of list) {
      expect(seen.has(s.id), `dup id: ${s.id}`).toBe(false);
      seen.add(s.id);
    }
  });

  it('no collision between custom registry ids and spec ids', () => {
    const customIds = new Set((customRegistry as { custom: Array<{ id: string }> }).custom.map(c => c.id));
    for (const s of list) {
      expect(customIds.has(s.id), `id ${s.id} present in both custom and spec lists`).toBe(false);
    }
  });
});

describe('screen-registry.json (custom)', () => {
  const customs = (customRegistry as { custom: Array<{ id: string; title: string; category: string; module: string }> }).custom;
  it('has exactly 13 custom screens (egui 10 + Markets dashboard + Central Bank Modelling + Valuation Modelling)', () => {
    expect(customs.length).toBe(13);
  });
  it('home section contains exactly Dashboard and Markets dashboards', () => {
    const home = customs.filter(c => c.category === 'home').map(c => c.id);
    expect(home).toEqual(['dashboard', 'markets-dashboard']);
  });
  it('Central Bank Modelling is its OWN section (not a home dashboard)', () => {
    const cbm = customs.find(c => c.id === 'central-bank-modelling');
    expect(cbm).toBeDefined();
    expect(cbm!.category).toBe('central-bank-modelling');
    const homeIds = customs.filter(c => c.category === 'home').map(c => c.id);
    expect(homeIds).not.toContain('central-bank-modelling');
  });
  it('Valuation Modelling is its OWN section (not a home dashboard)', () => {
    const vm = customs.find(c => c.id === 'valuation-modelling');
    expect(vm).toBeDefined();
    expect(vm!.category).toBe('valuation-modelling');
    const homeIds = customs.filter(c => c.category === 'home').map(c => c.id);
    expect(homeIds).not.toContain('valuation-modelling');
  });
  it('every custom screen has id, title, category, module', () => {
    for (const c of customs) {
      expect(c.id).toBeTruthy();
      expect(c.title).toBeTruthy();
      expect(c.category).toBeTruthy();
      expect(c.module).toBeTruthy();
    }
  });
});
