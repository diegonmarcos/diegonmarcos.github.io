import { describe, it, expect } from 'vitest';
import navGroups from '../src/typescript/data/nav-groups.json';
import customRegistry from '../src/typescript/data/screen-registry.json';
import specs from '../src/typescript/data/screen-specs.json';

interface NavGroup { id: string; label: string; categories: string[]; }
const groups = (navGroups as { groups: NavGroup[] }).groups;

describe('nav-groups.json', () => {
  it('exposes the macro groups Diego specified (HOME + A0–A2 + B0–B3 + C + D0 + E + F)', () => {
    const ids = groups.map(g => g.id);
    expect(ids).toEqual(['home', 'A0', 'A1', 'A2', 'B0', 'B1', 'B2', 'B3', 'C', 'D0', 'E', 'F']);
  });

  it('every group label carries its letter prefix (or HOME)', () => {
    for (const g of groups) {
      if (g.id === 'home') {
        expect(g.label.toUpperCase()).toContain('HOME');
      } else {
        expect(g.label.toUpperCase()).toContain(g.id.toUpperCase() + ')');
      }
    }
  });

  it('no category is mapped to two different groups', () => {
    const seen = new Set<string>();
    for (const g of groups) {
      for (const c of g.categories) {
        expect(seen.has(c), `category "${c}" listed in multiple groups`).toBe(false);
        seen.add(c);
      }
    }
  });

  it('every category referenced by any custom or spec entry is mapped to a group (no orphans)', () => {
    const allCats = new Set<string>([
      ...((customRegistry as { custom: Array<{ category: string }> }).custom).map(c => c.category),
      ...((specs as { specs: Array<{ category: string }> }).specs).map(s => s.category),
    ]);
    const mapped = new Set(groups.flatMap(g => g.categories));
    const orphans = [...allCats].filter(c => !mapped.has(c));
    expect(orphans, `orphan categories not mapped to any nav group: ${orphans.join(', ')}`).toEqual([]);
  });

  it('macro and corporate-valuation groups carry the right categories', () => {
    const macro = groups.find(g => g.id === 'C')!;
    expect(macro.categories).toContain('central-bank-modelling');
    expect(macro.categories).toContain('economics');
    const valuation = groups.find(g => g.id === 'D0')!;
    expect(valuation.categories).toContain('valuation-modelling');
  });
});
