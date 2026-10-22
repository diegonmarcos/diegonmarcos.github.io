#!/usr/bin/env node
// Guard: the shared top nav (the in-page sub-page tab row) is drawn in a browser and NOT drawn when embedded in the SuperApp
// (?embed=1 or the CloudSuperApp-Embed user-agent marker); the CSS also hides it as a second line of defence.
import { readFileSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';
import vm from 'node:vm';

const root = join(dirname(fileURLToPath(import.meta.url)), '..');
const js = readFileSync(join(root, '_shared/dist/nav.js'), 'utf8');
const css = readFileSync(join(root, '_shared/dist/nav.css'), 'utf8');

function run(search, ua) {
  const inserted = [], attrs = {};
  const nav = { id: '', setAttribute() {}, querySelector: () => null };
  const doc = {
    body: { insertBefore: n => inserted.push(n), firstChild: null },
    createElement: () => nav,
    addEventListener() {},
    documentElement: { setAttribute: (k, v) => { attrs[k] = v; } },
  };
  vm.runInNewContext(js, { document: doc, location: { pathname: '/cloud-webapps/cloud-mail/', search }, navigator: { userAgent: ua } });
  return { drawn: inserted.length, attrs };
}
let bad = 0;
const expect = (name, got, want) => { if (got !== want) { console.error(`FAIL ${name}: got ${got}, want ${want}`); bad++; } };
const plain = 'Mozilla/5.0 Chrome/120';
expect('browser draws the nav', run('', plain).drawn, 1);
expect('embed=1 hides the nav', run('?embed=1', plain).drawn, 0);
expect('embed=1 among other params hides the nav', run('?a=1&embed=1&b=2', plain).drawn, 0);
expect('embed marker UA hides the nav on a page without the param', run('', plain + ' CloudSuperApp-Embed/1').drawn, 0);
expect('embed=10 is not embed', run('?embed=10', plain).drawn, 1);
expect('embed sets data-embed', run('?embed=1', plain).attrs['data-embed'], '1');
expect('css hides the nav when data-embed is set', css.includes('html[data-embed] #cwa-nav{display:none}'), true);
if (bad) process.exit(1);
console.log('ok: embed mode hides the in-page tab row');
