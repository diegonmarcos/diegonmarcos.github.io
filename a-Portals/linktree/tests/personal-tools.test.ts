import { describe, it, expect, beforeEach } from 'vitest';
import data from '../src/data/personal-tools.json';
import { initPortalRender, listSlideIds, getSlide, renderSlide } from '../src/typescript/modules/portal-render';

interface Link    { label: string; url: string; icon: string; }
interface Column  { header: string; links: Link[]; }
interface Slide   { id: string; kind: string; title: string; columns: Column[]; }
const cfg = data as unknown as { section: { id: string; title: string }; slides: Slide[] };

describe('personal-tools.json — declarative source of truth', () => {
  it('declares the Personal Tools section', () => {
    expect(cfg.section.id).toBe('personal-tools');
    expect(cfg.section.title).toBe('Personal Tools');
  });

  it('exposes all 14 migrated slides across 3 boxes (4 personal-tools + 5 personal-profiles + 5 professional-profiles)', () => {
    const ids = listSlideIds();
    expect(ids.length).toBe(14);
    // Personal Tools — TOOLCHAIN stays hand-coded
    for (const id of ['suite', 'lab-tools', 'circus', 'cloud']) expect(ids).toContain(id);
    // Personal Profiles
    for (const id of ['personal-profile', 'media', 'data', 'brucheion', 'serapeum']) expect(ids).toContain(id);
    // Professional Profiles
    for (const id of ['professional-profile', 'repos', 'nexus', 'leafy', 'stark']) expect(ids).toContain(id);
  });

  it('CLOUD slide carries trailing extras: primary "Cloud Portal" link + 5 profile-icons', () => {
    const cloud = cfg.slides.find(s => s.id === 'cloud') as unknown as { extras?: { primary_link?: { label: string }; profile_icons?: Array<{ url: string }> } };
    expect(cloud.extras?.primary_link?.label).toBe('Cloud Portal');
    expect(cloud.extras?.profile_icons?.length).toBe(5);
  });

  it('SUITE slide has the 8 columns split across 2 rows (top: 4 daily-driver cols, bottom: 4 data cols)', () => {
    const suite = cfg.slides.find(s => s.id === 'suite')! as unknown as { title: string; columns: Array<{ header: string; row?: number }> };
    expect(suite.title).toBe('SUITE');
    const headers = suite.columns.map(c => c.header);
    expect(headers).toEqual(['AI & IDE', 'Suite', 'Comms', 'Nav', 'Media', 'Memory', 'Health', 'Tools']);
    const rows = suite.columns.map(c => c.row ?? 0);
    expect(rows).toEqual([0, 0, 0, 0, 1, 1, 1, 1]);
  });

  it('SUITE AI & IDE no longer has Gitea / JSON Vision (moved to Data)', () => {
    const suite = cfg.slides.find(s => s.id === 'suite')!;
    const aiide = suite.columns.find(c => c.header === 'AI & IDE')!;
    const labels = aiide.links.map(l => l.label);
    expect(labels).not.toContain('Gitea');
    expect(labels).not.toContain('JSON Vision');
    expect(labels).toEqual(['Goose', 'Claude CLI', 'WebIDE', 'Jupyter NB']);
  });

  it('SUITE Suite column has Calendar + Contacts + drops Photos', () => {
    const suite = cfg.slides.find(s => s.id === 'suite')!;
    const suiteCol = suite.columns.find(c => c.header === 'Suite')!;
    const labels = suiteCol.links.map(l => l.label);
    expect(labels).toContain('Calendar');
    expect(labels).toContain('Contacts');
    expect(labels).not.toContain('Photos');
  });

  it('SUITE Comms column has exactly Mail + Mattermost + ntfy', () => {
    const suite = cfg.slides.find(s => s.id === 'suite')!;
    const comms = suite.columns.find(c => c.header === 'Comms')!;
    expect(comms.links.map(l => l.label)).toEqual(['Mail', 'Mattermost', 'ntfy']);
  });

  it('SUITE Nav has only Navigation + Maps (MyTrips moved to Data)', () => {
    const suite = cfg.slides.find(s => s.id === 'suite')!;
    const nav = suite.columns.find(c => c.header === 'Nav')!;
    expect(nav.links.map(l => l.label)).toEqual(['Navigation', 'Maps']);
  });

  it('SUITE bottom row exposes the broken-up Data group (Media / Memory / Health / Tools)', () => {
    const suite = cfg.slides.find(s => s.id === 'suite')!;
    const bottom = suite.columns.filter(c => (c as unknown as { row?: number }).row === 1);
    expect(bottom.map(c => c.header)).toEqual(['Media', 'Memory', 'Health', 'Tools']);
    const all = bottom.flatMap(c => c.links.map(l => l.label));
    // Every original Data item must still be present, just rehomed.
    for (const required of [
      'Feed', 'Movies', 'Music', 'MyPhotos', 'MyTrips', 'PhotoPrism',
      'Tracker', 'FeedYourself', 'Profile',
      'Gitea', 'JSON Vision', 'NocoDB', 'Vault',
    ]) {
      expect(all, `expected ${required} somewhere in the bottom row`).toContain(required);
    }
    // The retired umbrella header must be gone.
    expect(suite.columns.find(c => c.header === 'Data')).toBeUndefined();
    // Group nums skip the retired Data slot (4) — never reused.
    const groups = suite.columns.map(c => (c as unknown as { group: number }).group);
    expect(groups).toEqual([0, 1, 2, 3, 5, 6, 7, 8]);
    expect(groups).not.toContain(4);
  });

  it('LAB TOOLS slide has 3 columns (Data Science & ML, Markets, Engineer) — Quantum merged', () => {
    const labTools = cfg.slides.find(s => s.id === 'lab-tools')!;
    expect(labTools.columns.map(c => c.header)).toEqual(['Data Science & ML', 'Markets', 'Engineer']);
  });

  it('LAB TOOLS Data Science & ML column contains the merged Quantum entries', () => {
    const labTools = cfg.slides.find(s => s.id === 'lab-tools')!;
    const dsml = labTools.columns.find(c => c.header === 'Data Science & ML')!;
    const labels = dsml.links.map(l => l.label);
    for (const q of ['IBM Quantum', 'Qiskit', 'Google QAI', 'Cirq', 'PennyLane', 'Braket', 'Azure QC', 'QInspire']) {
      expect(labels, `expected ${q} in Data Science & ML`).toContain(q);
    }
    for (const ds of ['Colab', 'Kaggle', 'HuggingFace', 'PyTorch', 'TensorFlow', 'Scikit-learn']) {
      expect(labels, `expected ${ds} in Data Science & ML`).toContain(ds);
    }
  });

  it('Markets column has Fin Terminal first and Ledger present', () => {
    const labTools = cfg.slides.find(s => s.id === 'lab-tools')!;
    const markets = labTools.columns.find(c => c.header === 'Markets')!;
    expect(markets.links[0]!.label).toBe('Fin Terminal');
    expect(markets.links[0]!.url).toBe('https://diegonmarcos.github.io/fin-terminal');
    const ledger = markets.links.find(l => l.label === 'Ledger');
    expect(ledger).toBeDefined();
    expect(ledger!.icon).toBe('ledger.svg');
  });

  it('every link has a non-empty label, https URL, and icon filename', () => {
    for (const slide of cfg.slides) {
      for (const col of slide.columns) {
        for (const lk of col.links) {
          expect(lk.label, `slide ${slide.id} column ${col.header}`).toBeTruthy();
          expect(lk.url.startsWith('http'), `link ${lk.label} URL must be absolute`).toBe(true);
          expect(lk.icon, `link ${lk.label} icon`).toMatch(/\.svg$/);
        }
      }
    }
  });

  it('getSlide() round-trips for a known id', () => {
    expect(getSlide('lab-tools')?.title).toBe('LAB TOOLS');
    expect(getSlide('does-not-exist')).toBeUndefined();
  });
});

describe('portal-render — DOM output', () => {
  it('renderSlide("lab-tools") produces .swiper-slide with 3 .tools-column children', () => {
    const tree = renderSlide('lab-tools')!;
    expect(tree.classList.contains('swiper-slide')).toBe(true);
    const linkSection = tree.querySelector('.link-section')!;
    expect(linkSection.querySelector('h2.section-title')?.textContent).toBe('LAB TOOLS');
    expect(linkSection.querySelector('img.featured-image')).not.toBeNull();
    const dashboard = linkSection.querySelector('.tools-dashboard')!;
    // 3-col now (no --4 modifier)
    expect(dashboard.classList.contains('tools-dashboard--4')).toBe(false);
    const columns = dashboard.querySelectorAll('.tools-column');
    expect(columns.length).toBe(3);
  });

  it('renderSlide("suite") produces 2 stacked .tools-dashboard rows (top --4, bottom --4) separated by a .row-divider', () => {
    const tree = renderSlide('suite')!;
    const dashboards = tree.querySelectorAll('.tools-dashboard');
    expect(dashboards.length).toBe(2);
    expect(dashboards[0]!.classList.contains('tools-dashboard--4')).toBe(true);
    expect(dashboards[1]!.classList.contains('tools-dashboard--4')).toBe(true);
    expect(dashboards[0]!.querySelectorAll('.tools-column').length).toBe(4);
    expect(dashboards[1]!.querySelectorAll('.tools-column').length).toBe(4);
    // Sanity: top row carries the daily-driver headers, bottom row the Data split.
    const topHeaders    = Array.from(dashboards[0]!.querySelectorAll('.tools-column__header')).map(h => h.textContent?.trim());
    const bottomHeaders = Array.from(dashboards[1]!.querySelectorAll('.tools-column__header')).map(h => h.textContent?.trim());
    expect(topHeaders).toEqual(['AI & IDE', 'Suite', 'Comms', 'Nav']);
    expect(bottomHeaders).toEqual(['Media', 'Memory', 'Health', 'Tools']);
    // Section break between the two rows.
    const dividers = tree.querySelectorAll('hr.row-divider');
    expect(dividers.length).toBe(1);
    // Divider must sit BETWEEN the two dashboards (DOM order).
    const linksContainer = tree.querySelector('.links-container')!;
    const children = Array.from(linksContainer.children);
    const idxTop = children.indexOf(dashboards[0]!);
    const idxDiv = children.indexOf(dividers[0]!);
    const idxBot = children.indexOf(dashboards[1]!);
    expect(idxTop).toBeLessThan(idxDiv);
    expect(idxDiv).toBeLessThan(idxBot);
  });

  it('every .tools-column has the right .tools-column__header + .tools-column__links structure', () => {
    const tree = renderSlide('lab-tools')!;
    const cols = tree.querySelectorAll('.tools-column');
    for (const col of cols) {
      expect(col.querySelector('.tools-column__header')).not.toBeNull();
      expect(col.querySelector('.tools-column__links')).not.toBeNull();
    }
  });

  it('every rendered .tool-link has class, target=_blank, an icon, and the link label as text', () => {
    const tree = renderSlide('lab-tools')!;
    const links = tree.querySelectorAll('a.tool-link');
    expect(links.length).toBeGreaterThan(0);
    for (const a of Array.from(links)) {
      expect(a.getAttribute('target')).toBe('_blank');
      expect(a.querySelector('img.icon')).not.toBeNull();
      expect(a.textContent?.trim().length).toBeGreaterThan(0);
    }
  });

  it('Fin Terminal link present in LAB TOOLS Markets', () => {
    const tree = renderSlide('lab-tools')!;
    const finLink = Array.from(tree.querySelectorAll<HTMLAnchorElement>('a.tool-link')).find(a => a.textContent?.includes('Fin Terminal'));
    expect(finLink!.href).toBe('https://diegonmarcos.github.io/fin-terminal');
  });
});

describe('portal-render — initPortalRender hydrates the data-portal-mount placeholder', () => {
  beforeEach(() => { document.body.innerHTML = ''; });

  it('replaces the placeholder element with the rendered slide', () => {
    document.body.innerHTML = '<div id="parent"><div data-portal-mount="lab-tools"></div></div>';
    initPortalRender();
    const parent = document.getElementById('parent')!;
    expect(parent.querySelector('[data-portal-mount]')).toBeNull();
    expect(parent.querySelector('.section-title')?.textContent).toBe('LAB TOOLS');
  });

  it('skips placeholders pointing at unknown slide ids without throwing', () => {
    document.body.innerHTML = '<div id="parent"><div data-portal-mount="bogus"></div></div>';
    expect(() => initPortalRender()).not.toThrow();
    expect(document.querySelector('[data-portal-mount="bogus"]')).not.toBeNull();
  });
});
