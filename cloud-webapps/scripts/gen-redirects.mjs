#!/usr/bin/env node
// Writes redirect stubs for URLs that moved, into the deploy dir (arg 1, default _site):
//   /cloud-mobile/            -> /cloud-superapp/        (deep links: root 404.html maps the rest)
//   /cloud-superapp/cloud/apps/ (the old WebApps landing) -> /cloud-webapps/ (query kept, so ?embed=1 survives)
//   /c__Cloud/, /c__Cloud/<group>/, /c__Cloud/<group>/<app>/ -> /cloud-webapps/[<app>/]
import { mkdirSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

const site = process.argv[2] ?? '_site';
const GROUPS = {
  c_agi: 'ai-chat cloud-code cloud-myterminal cloud-search cloud-terminal cloud-tools-small-llms',
  c_configs: 'cloud-c3 cloud-store cloud-superapp',
  c_inboxes: 'c3-bot cloud-chat cloud-dialer cloud-mail cloud-matrix cloud-news',
  'c_data-apps': 'cloud-contacts cloud-drive cloud-gallery cloud-media cloud-notes cloud-office cloud-tasks cloud-vault',
  c_tools: 'cloud-browser cloud-calc cloud-camera cloud-keyboard cloud-me cloud-nav cloud-wallet cloud-writer',
};
const stub = (to) => `<!DOCTYPE html><html><head><meta charset="utf-8"><title>Moved</title><meta http-equiv="refresh" content="0; url=${to}"><link rel="canonical" href="https://diegonmarcos.github.io${to}"><script>location.replace(${JSON.stringify(to)}+location.search+location.hash)</script></head><body>Moved to <a href="${to}">${to}</a></body></html>\n`;
const put = (path, to) => { const d = join(site, path); mkdirSync(d, { recursive: true }); writeFileSync(join(d, 'index.html'), stub(to)); };

put('cloud-mobile', '/cloud-superapp/');
put('cloud-superapp/cloud/apps', '/cloud-webapps/');
put('c__Cloud', '/cloud-webapps/');
for (const [g, apps] of Object.entries(GROUPS)) {
  put(`c__Cloud/${g}`, '/cloud-webapps/');
  for (const a of apps.split(' ')) put(`c__Cloud/${g}/${a}`, `/cloud-webapps/${a}/`);
}
console.log('redirect stubs written to', site);
