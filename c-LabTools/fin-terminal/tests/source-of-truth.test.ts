import { describe, it, expect } from 'vitest';
import { readFileSync, existsSync } from 'node:fs';
import { resolve } from 'node:path';

// Diff guard — fails when our local copy diverges from the fin-api source-of-truth.
// If this fails, the egui side changed; reconcile by re-copying:
//   cp ~/git/cloud/a_solutions/ac-fin_fin-api/src/code/screen-specs.json src/typescript/data/screen-specs.json
//   cp ~/git/cloud/a_solutions/ac-fin_fin-api/src/code/assets/themes/dark.json src/typescript/data/palette-egui-dark.json

const FIN_API_ROOT = resolve(process.env['FIN_API_ROOT'] ?? `${process.env['HOME']}/git/cloud/a_solutions/ac-fin_fin-api/src/code`);

const PAIRS: Array<{ local: string; upstream: string; label: string }> = [
  {
    local: resolve(__dirname, '../src/typescript/data/screen-specs.json'),
    upstream: resolve(FIN_API_ROOT, 'screen-specs.json'),
    label: 'screen-specs.json',
  },
  {
    local: resolve(__dirname, '../src/typescript/data/palette-egui-dark.json'),
    upstream: resolve(FIN_API_ROOT, 'assets/themes/dark.json'),
    label: 'egui dark theme',
  },
];

describe('source-of-truth diff guard', () => {
  for (const p of PAIRS) {
    it(`local copy of ${p.label} matches fin-api upstream`, () => {
      if (!existsSync(p.upstream)) {
        // Upstream not available (e.g. CI env without the cloud repo); skip rather than fail.
        console.warn(`[source-of-truth] upstream ${p.upstream} not found; skipping`);
        return;
      }
      const local = JSON.parse(readFileSync(p.local, 'utf8'));
      const upstream = JSON.parse(readFileSync(p.upstream, 'utf8'));
      expect(local, `local ${p.label} diverges from fin-api upstream — re-copy if intentional`).toEqual(upstream);
    });
  }
});
