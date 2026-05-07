// ============================================
// Service worker — myID (precache + network-first)
// ============================================
// BUILD_HASH and PRECACHE_URLS are injected at build time by mod_esbuild_sw.
declare const BUILD_HASH: string;
declare const PRECACHE_URLS: string[];

const CACHE = `myid-${typeof BUILD_HASH !== 'undefined' ? BUILD_HASH : 'dev'}`;

self.addEventListener('install', (event) => {
  (event as ExtendableEvent).waitUntil(
    caches.open(CACHE).then((cache) => cache.addAll(typeof PRECACHE_URLS !== 'undefined' ? PRECACHE_URLS : []))
      .then(() => (self as unknown as ServiceWorkerGlobalScope).skipWaiting()),
  );
});

self.addEventListener('activate', (event) => {
  (event as ExtendableEvent).waitUntil(
    caches.keys()
      .then((keys) => Promise.all(keys.filter((k) => k !== CACHE).map((k) => caches.delete(k))))
      .then(() => (self as unknown as ServiceWorkerGlobalScope).clients.claim()),
  );
});

self.addEventListener('fetch', (event) => {
  const fe = event as FetchEvent;
  if (fe.request.method !== 'GET') return;
  fe.respondWith(
    fetch(fe.request)
      .then((res) => {
        const copy = res.clone();
        if (res.ok && fe.request.url.startsWith(self.location.origin)) {
          caches.open(CACHE).then((cache) => cache.put(fe.request, copy));
        }
        return res;
      })
      .catch(() => caches.match(fe.request).then((cached) => cached ?? Response.error())),
  );
});
