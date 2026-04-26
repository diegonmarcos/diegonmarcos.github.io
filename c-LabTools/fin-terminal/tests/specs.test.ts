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
  it('has exactly 31 custom screens (egui 10 + Markets + DSGE + ML-ABM + 10 CBM subreports + 7 Valuation types + FX Hedge)', () => {
    expect(customs.length).toBe(31);
  });
  it('Valuation Modelling section has 7 method screens', () => {
    const vm = customs.filter(c => c.category === 'valuation-modelling').map(c => c.id);
    expect(vm.length).toBe(7);
    for (const id of ['val-dcf', 'val-multiples', 'val-ddm', 'val-residual-income', 'val-sotp', 'val-nav', 'val-comparables']) {
      expect(vm, `expected ${id} under Valuation Modelling`).toContain(id);
    }
  });
  it('Central Bank Modelling section has 12 entries: DSGE + ML-ABM + 10 macro subreports', () => {
    const cbm = customs.filter(c => c.category === 'central-bank-modelling').map(c => c.id);
    expect(cbm.length).toBe(12);
    expect(cbm).toContain('dsge');
    expect(cbm).toContain('ml-abm');
    for (const id of [
      'cbm-inflation', 'cbm-unemployment', 'cbm-gdp', 'cbm-money-supply',
      'cbm-interest-rates', 'cbm-banking-credit', 'cbm-external',
      'cbm-financial-conditions', 'cbm-surveys', 'cbm-fiscal',
    ]) expect(cbm, `expected ${id} under CBM section`).toContain(id);
  });
  it('FX Hedge Cost lives under category "forex" alongside spec-driven Forex screens', () => {
    const fx = customs.find(c => c.id === 'fx-hedge-cost');
    expect(fx).toBeDefined();
    expect(fx!.category).toBe('forex');
  });
  it('home section contains exactly Dashboard and Markets dashboards', () => {
    const home = customs.filter(c => c.category === 'home').map(c => c.id);
    expect(home).toEqual(['dashboard', 'markets-dashboard']);
  });
  it('Central Bank Modelling section is NOT under home', () => {
    const homeIds = customs.filter(c => c.category === 'home').map(c => c.id);
    expect(homeIds).not.toContain('dsge');
    expect(homeIds).not.toContain('ml-abm');
  });
  it('Valuation Modelling is its OWN section (not a home dashboard)', () => {
    const homeIds = customs.filter(c => c.category === 'home').map(c => c.id);
    for (const id of ['val-dcf', 'val-multiples', 'val-ddm', 'val-sotp']) {
      expect(homeIds).not.toContain(id);
    }
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
