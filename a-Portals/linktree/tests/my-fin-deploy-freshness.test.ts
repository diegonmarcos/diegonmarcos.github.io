// Deploy-freshness regression for the c-MyTools/my-fin project.
//
// The first deploy of the Ledger -> My Financials rename shipped stale
// dist artefacts (title still "Ledger", script src still data-ledger.json.js,
// hitting 404 in production). The engine's mod_copy index.html step
// apparently skipped the copy on a timestamp check after `git mv`.
//
// These tests pin the post-build invariant so a stale dist can never reach
// production again unnoticed: dist/index.html MUST track src/index.html on
// the title + data-script wiring, and the wrapper file dist/ ships MUST
// match what the HTML references.

import { describe, it, expect } from 'vitest';
import { existsSync, readFileSync } from 'node:fs';
import { resolve } from 'node:path';

const FRONT_ROOT = resolve(__dirname, '..', '..', '..');
const SRC_DIR    = resolve(FRONT_ROOT, 'c-MyTools', 'my-fin', 'src');
const DIST_DIR   = resolve(FRONT_ROOT, 'c-MyTools', 'my-fin', 'dist');

function read(p: string): string { return readFileSync(p, 'utf8'); }

describe('c-MyTools/my-fin — deploy artefacts in sync with source', () => {
  it('the project lives at c-MyTools/my-fin (not the legacy c-Suite/ledger path)', () => {
    expect(existsSync(SRC_DIR), 'c-MyTools/my-fin/src must exist').toBe(true);
    expect(existsSync(DIST_DIR), 'c-MyTools/my-fin/dist must exist').toBe(true);
    expect(existsSync(resolve(FRONT_ROOT, 'c-Suite', 'ledger')), 'legacy c-Suite/ledger path must be gone').toBe(false);
  });

  it('build.json declares the new "My Financials" name (not the old "Ledger")', () => {
    const cfg = JSON.parse(read(resolve(FRONT_ROOT, 'c-MyTools', 'my-fin', 'build.json'))) as { name: string };
    expect(cfg.name).toBe('My Financials');
  });

  it('src/index.html and dist/index.html agree on the title — catches stale-dist regressions', () => {
    const src  = read(resolve(SRC_DIR,  'index.html'));
    const dist = read(resolve(DIST_DIR, 'index.html'));
    const titleRe = /<title>([^<]+)<\/title>/;
    const srcTitle  = src.match(titleRe)?.[1];
    const distTitle = dist.match(titleRe)?.[1];
    expect(srcTitle, 'src/index.html must declare a <title>').toBeTruthy();
    expect(distTitle, 'dist/index.html must declare a <title> (was build skipped?)').toBeTruthy();
    expect(distTitle).toBe(srcTitle);
    expect(distTitle).toBe('My Financials — Personal Accounting');
  });

  it('dist/index.html references data-my-fin.json.js (the new wrapper) and never data-ledger.json.js', () => {
    const dist = read(resolve(DIST_DIR, 'index.html'));
    expect(dist).toContain('data-my-fin.json.js');
    expect(dist).toContain('PORTAL_DATA["my-fin"]');
    expect(dist).not.toContain('data-ledger.json.js');
    expect(dist).not.toContain('PORTAL_DATA["ledger"]');
  });

  it('dist ships the data wrapper that index.html references — and does NOT ship the legacy one', () => {
    expect(existsSync(resolve(DIST_DIR, 'data-my-fin.json.js')), 'dist/data-my-fin.json.js must exist').toBe(true);
    expect(existsSync(resolve(DIST_DIR, 'data-ledger.json.js')), 'dist/data-ledger.json.js must NOT exist').toBe(false);
  });

  it('the data wrapper exposes PORTAL_DATA["my-fin"] with the rebranded title (not "Ledger")', () => {
    const wrapper = read(resolve(DIST_DIR, 'data-my-fin.json.js'));
    expect(wrapper).toContain('PORTAL_DATA["my-fin"]');
    expect(wrapper).toContain('My Financials — Personal Accounting');
    expect(wrapper).not.toContain('Ledger — Personal Accounting');
  });

  it('the brand wordmark in shell.ts is "My Financials" (not "Ledger") — title hydrates from the wrapper, but the wordmark is hard-coded', () => {
    const shell = read(resolve(SRC_DIR, 'typescript', 'modules', 'shell.ts'));
    expect(shell).toContain('My Financials');
    // The brand initial in the brand-mark dot was "L" → must be "M" now.
    expect(shell).toMatch(/<div class="brand-mark"><span>M<\/span><\/div>/);
    expect(shell).not.toMatch(/brand-name__word">Ledger</);
  });
});
