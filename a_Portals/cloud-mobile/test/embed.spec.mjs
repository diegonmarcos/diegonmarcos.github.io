// Playwright (Chromium) checks for cloud-mobile: embed mode + the nav generated from the Android build.json.
//   node test/embed.spec.mjs                 # serves ./dist locally under /cloud-mobile/
//   BASE_URL=https://diegonmarcos.github.io/cloud-mobile node test/embed.spec.mjs   # against the live site
// Needs `playwright` (global is fine) and Chromium (PW_CHROMIUM or /opt/pw-browsers).
import http from 'node:http';
import { readFileSync, existsSync, statSync, readdirSync } from 'node:fs';
import { join, extname, dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';
import { createRequire } from 'node:module';
import { spawnSync } from 'node:child_process';

const HERE = dirname(fileURLToPath(import.meta.url));
const DIST = resolve(HERE, '../dist');
const require = createRequire(import.meta.url);
let chromium;
for (const m of ['playwright', 'playwright-core', '/opt/node22/lib/node_modules/playwright']) {
  try { ({ chromium } = require(m)); break; } catch { /* next */ }
}
if (!chromium) throw new Error('playwright not found');
function findChromium() {
  if (process.env.PW_CHROMIUM) return process.env.PW_CHROMIUM;
  const root = '/opt/pw-browsers';
  if (!existsSync(root)) return undefined;
  for (const d of readdirSync(root).filter((x) => x.startsWith('chromium-')).sort().reverse()) {
    for (const rel of ['chrome-linux/chrome', 'chrome-linux64/chrome']) if (existsSync(join(root, d, rel))) return join(root, d, rel);
  }
  return undefined;
}

const TYPES = { '.html': 'text/html', '.js': 'text/javascript', '.css': 'text/css', '.json': 'application/json', '.svg': 'image/svg+xml', '.webmanifest': 'application/manifest+json' };
function serve() {
  const srv = http.createServer((req, res) => {
    let p = decodeURIComponent(new URL(req.url, 'http://x').pathname).replace(/^\/cloud-mobile/, '');
    let f = join(DIST, p);
    if (existsSync(f) && statSync(f).isDirectory()) f = join(f, 'index.html');
    if (!f.startsWith(DIST) || !existsSync(f)) { res.writeHead(404); return res.end('nf'); }
    res.writeHead(200, { 'content-type': TYPES[extname(f)] ?? 'application/octet-stream' });
    res.end(readFileSync(f));
  });
  return new Promise((r) => srv.listen(0, '127.0.0.1', () => r(srv)));
}

let failed = 0;
const ok = (c, msg) => { if (!c) failed++; console.log(`${c ? 'PASS' : 'FAIL'}  ${msg}`); };

const srv = process.env.BASE_URL ? null : await serve();
const BASE = (process.env.BASE_URL ?? `http://127.0.0.1:${srv.address().port}/cloud-mobile`).replace(/\/$/, '');
const browser = await chromium.launch({ executablePath: findChromium(), args: ['--no-sandbox'] });

async function probe(ctxOpts, path) {
  const ctx = await browser.newContext({ viewport: { width: 412, height: 860 }, ...ctxOpts });
  if (process.env.LIVE_VIA_CURL) {
    // sandboxes whose HTTPS goes through a MITM proxy Chromium does not trust: fetch with curl (which does) and fulfil
    await ctx.route('**/*', (route) => {
      const r = spawnSync('curl', ['-sS', '-L', '-w', '\n%{http_code} %{content_type}', route.request().url()], { maxBuffer: 64 * 1024 * 1024 });
      const out = r.stdout; const nl = out.lastIndexOf(10);
      const [code, type] = out.subarray(nl + 1).toString().split(' ');
      route.fulfill({ status: Number(code) || 502, contentType: type, body: out.subarray(0, nl) });
    });
  }
  const page = await ctx.newPage();
  await page.goto(`${BASE}${path}`, { waitUntil: 'load' });
  const r = await page.evaluate(() => {
    const vis = (sel) => { const e = document.querySelector(sel); if (!e) return false; const cs = getComputedStyle(e); const b = e.getBoundingClientRect(); return cs.display !== 'none' && cs.visibility !== 'hidden' && b.width > 0 && b.height > 0; };
    const c = document.querySelector('.content').getBoundingClientRect();
    const first = document.querySelector('.content > *')?.getBoundingClientRect();
    return {
      embed: document.documentElement.classList.contains('embed'),
      topBar: vis('.status-strip') || vis('.app-top-bar'),
      appTopBar: vis('.app-top-bar'),
      bottomNav: vis('.bottom-nav'),
      contentTop: Math.round(c.top), firstTop: first ? Math.round(first.top) : null,
    };
  });
  return { ctx, page, r };
}

// 1. default: full UI
for (const path of ['/cloud/', '/apps/c3/']) {
  const { ctx, r } = await probe({}, path);
  ok(!r.embed, `default ${path}: no .embed class`);
  ok(r.topBar && r.bottomNav, `default ${path}: top bar + bottom nav visible`);
  ok(r.contentTop > 0, `default ${path}: content starts below the top layer (top=${r.contentTop})`);
  await ctx.close();
}
// 2. ?embed=1 and 3. UA marker: both hidden, content at top 0
for (const path of ['/cloud/', '/apps/c3/', '/']) {
  for (const [name, opts, q] of [['?embed=1', {}, '?embed=1'], ['UA marker', { userAgent: 'Mozilla/5.0 (Linux; Android 14) CloudSuperApp-Embed/1.0' }, '']]) {
    const { ctx, r } = await probe(opts, `${path}${q}`);
    ok(r.embed, `${name} ${path}: html.embed set`);
    ok(!r.topBar && !r.appTopBar && !r.bottomNav, `${name} ${path}: top bar and bottom nav hidden`);
    ok(r.contentTop === 0, `${name} ${path}: content top is 0 (got ${r.contentTop}, first child ${r.firstTop})`);
    await ctx.close();
  }
}
// 4. flag survives in-site navigation (internal link click, no param typed)
{
  const { ctx, page } = await probe({}, '/cloud/?embed=1');
  await page.locator('.content a[href]').first().click();
  await page.waitForLoadState('load');
  const still = await page.evaluate(() => document.documentElement.classList.contains('embed'));
  ok(still, `embed persists after navigating to ${new URL(page.url()).pathname}`);
  await ctx.close();
}
// 5. generated nav shows up (default UI)
{
  const { ctx, page } = await probe({}, '/cloud/');
  const tabs = await page.$$eval('.page-tabs-bar:not(.page-tabs-bar--sub) .page-tabs__item', (els) => els.map((e) => e.textContent.trim()));
  ok(/^App \| WebApps \| Lnk?tree \| Configs$/.test(tabs.join(' | ')), `Cloud tabs = App | WebApps | Linktree | Configs (${tabs.join(' | ')})`);
  const nav = await page.$$eval('.bottom-nav__item span', (els) => els.map((e) => e.textContent.trim()));
  ok(nav.join('|') === 'Notify|Projects|Home|Cloud|Phone', `bottom nav from build.json (${nav.join(' | ')})`);
  await page.goto(`${BASE}/config/`);
  const heads = await page.$$eval('.config-group, .config-subgroup', (els) => els.map((e) => e.textContent.trim()));
  ok(['Setup', 'Connect', 'Apps', 'Launcher', 'Network', 'Fleet', 'Observability'].every((h) => heads.includes(h)), `Configs tree groups (${heads.join(' / ')})`);
  await page.goto(`${BASE}/cloud/configs/`);
  const tiles = await page.$$eval('[data-configs-group] .tile__label, [data-configs-group] .tile-sep', (els) => els.map((e) => e.textContent.trim()).join(' '));
  ok(tiles === 'SuperApp | Account | Store Controls Firewall | C3 | About', `Cloud Configs tile group (${tiles})`);
  await page.goto(`${BASE}/apps/c3/`);
  const c3 = await page.$$eval('.bottom-nav__item span', (els) => els.map((e) => e.textContent.trim()).join('|'));
  ok(c3 === 'Infra|Containers|Home|Ops|Observ', `C3 bottom island (${c3})`);
  const bar = await page.$eval('.app-top-bar', (e) => ({ title: e.querySelector('.app-top-bar__title').textContent, ham: !!e.querySelector('.app-top-bar__hamburger'), ai: !!e.querySelector('.app-top-bar__ai'), set: !!e.querySelector('.app-top-bar__settings') }));
  ok(bar.title === 'Cloud C3' && bar.ham && bar.ai && bar.set, 'C3 AppTopBar: hamburger + title + AI + Settings');
  await ctx.close();
}

await browser.close();
srv?.close();
console.log(failed ? `\n${failed} FAILED` : '\nall passed');
process.exit(failed ? 1 : 0);
