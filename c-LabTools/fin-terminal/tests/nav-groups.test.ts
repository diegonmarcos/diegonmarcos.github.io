import { describe, it, expect } from 'vitest';
import navGroups from '../src/typescript/data/nav-groups.json';
import customRegistry from '../src/typescript/data/screen-registry.json';
import specs from '../src/typescript/data/screen-specs.json';

interface NavSection { id: string; label: string; }
interface NavGroup { id: string; section: string; label: string; categories: string[]; }
const cfg = navGroups as { sections: NavSection[]; groups: NavGroup[] };

describe('nav-groups.json — sections (top-letter breakers)', () => {
  it('exposes the 7 sections Diego specified (HOME + A–F)', () => {
    const ids = cfg.sections.map(s => s.id);
    expect(ids).toEqual(['home', 'A', 'B', 'C', 'D', 'E', 'F']);
  });

  it('every section label has the right human name', () => {
    const byId = new Map(cfg.sections.map(s => [s.id, s.label]));
    expect(byId.get('A')!.toUpperCase()).toContain('REPORTS');
    expect(byId.get('B')!.toUpperCase()).toContain('MARKETS');
    expect(byId.get('C')!.toUpperCase()).toContain('MACRO');
    expect(byId.get('D')!.toUpperCase()).toContain('CORPORATE');
    expect(byId.get('E')!.toUpperCase()).toContain('ALLOCATION');
    expect(byId.get('F')!.toUpperCase()).toContain('OTHERS');
  });
});

describe('nav-groups.json — groups pinned to sections', () => {
  it('every group references a defined section id', () => {
    const sectionIds = new Set(cfg.sections.map(s => s.id));
    for (const g of cfg.groups) {
      expect(sectionIds.has(g.section), `group ${g.id} → section "${g.section}" undefined`).toBe(true);
    }
  });

  it('A) REPORTS has A0 + A1 + A2 sub-groups', () => {
    const a = cfg.groups.filter(g => g.section === 'A').map(g => g.id);
    expect(a).toEqual(['A0', 'A1', 'A2']);
  });

  it('B) MARKETS has B0 + B1 + B2 + B3 sub-groups', () => {
    const b = cfg.groups.filter(g => g.section === 'B').map(g => g.id);
    expect(b).toEqual(['B0', 'B1', 'B2', 'B3']);
  });

  it('every group label carries its sub-letter prefix (or HOME)', () => {
    for (const g of cfg.groups) {
      if (g.id === 'home') {
        expect(g.label.toUpperCase()).toContain('HOME');
      } else {
        expect(g.label, `group ${g.id} label "${g.label}"`).toContain(')');
      }
    }
  });

  it('no category is mapped to two different groups', () => {
    const seen = new Set<string>();
    for (const g of cfg.groups) {
      for (const c of g.categories) {
        expect(seen.has(c), `category "${c}" listed in multiple groups`).toBe(false);
        seen.add(c);
      }
    }
  });

  it('every category referenced by ANY custom or spec entry is mapped to a group (orphan guard)', () => {
    const allCats = new Set<string>([
      ...((customRegistry as { custom: Array<{ category: string }> }).custom).map(c => c.category),
      ...((specs as { specs: Array<{ category: string }> }).specs).map(s => s.category),
    ]);
    const mapped = new Set(cfg.groups.flatMap(g => g.categories));
    const orphans = [...allCats].filter(c => !mapped.has(c));
    expect(orphans, `orphan categories not mapped to any nav group: ${orphans.join(', ')}`).toEqual([]);
  });

  it('macro and corporate-valuation groups carry the right anchor categories', () => {
    const macro = cfg.groups.find(g => g.id === 'C0')!;
    expect(macro.categories).toContain('central-bank-modelling');
    expect(macro.categories).toContain('economics');
    const valuation = cfg.groups.find(g => g.id === 'D0')!;
    expect(valuation.categories).toContain('valuation-modelling');
  });
});
