// Service Worker — cache-first for static assets, stale-while-revalidate
// for the GDELT proxy. The cache version + precache list are INJECTED at
// build time by the `mod_esbuild_sw` step (see build.json + build.sh):
//   • BUILD_HASH       — 12-char content hash of (index.html + script.js +
//                        style.css). Any byte change → new hash → SW bytes
//                        change → browser re-installs → caches purge.
//   • BUILD_PRECACHE   — array of URLs to precache at install time, sourced
//                        from build.json's `service_worker.precache`.
// Both are esbuild --define constants. Zero hardcoded data in this file.

declare const self: ServiceWorkerGlobalScope;
declare const BUILD_HASH: string;
declare const BUILD_PRECACHE: string[];

const STATIC_CACHE  = `static-${BUILD_HASH}`;
const RUNTIME_CACHE = `runtime-${BUILD_HASH}`;
const PRECACHE: string[] = BUILD_PRECACHE;

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(STATIC_CACHE)
      .then((c) => c.addAll(PRECACHE).catch(() => undefined))
      .then(() => self.skipWaiting()),
  );
});

self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((keys) =>
      Promise.all(keys
        .filter((k) => k !== STATIC_CACHE && k !== RUNTIME_CACHE)
        .map((k) => caches.delete(k))),
    ).then(() => self.clients.claim()),
  );
});

const isGdeltProxy = (url: URL) =>
  url.host.endsWith('diegonmarcos.com') && url.pathname.startsWith('/news');

self.addEventListener('fetch', (event) => {
  const req = event.request;
  if (req.method !== 'GET') return;
  const url = new URL(req.url);

  // Stale-while-revalidate for the GDELT proxy: serve cached if present,
  // refresh in the background.
  if (isGdeltProxy(url)) {
    event.respondWith((async () => {
      const cache = await caches.open(RUNTIME_CACHE);
      const hit = await cache.match(req);
      const networkP = fetch(req).then((r) => {
        if (r.ok) cache.put(req, r.clone()).catch(() => undefined);
        return r;
      }).catch(() => hit ?? Response.error());
      return hit ?? networkP;
    })());
    return;
  }

  // Cache-first for everything else (only same-origin / public assets).
  if (url.origin !== self.location.origin) return;
  event.respondWith((async () => {
    const cache = await caches.open(RUNTIME_CACHE);
    const hit = await cache.match(req);
    if (hit) return hit;
    try {
      const res = await fetch(req);
      if (res.ok) cache.put(req, res.clone()).catch(() => undefined);
      return res;
    } catch {
      const fallback = await caches.match('./index.html');
      return fallback ?? Response.error();
    }
  })());
});

export {};
