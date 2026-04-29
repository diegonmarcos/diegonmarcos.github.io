/// <reference lib="webworker" />
// Generic Service Worker template — copied verbatim into a project's
// `src/typescript/` directory by `front-sw-init.sh`. Projects with
// special routing (e.g. third-party-proxy stale-while-revalidate
// carve-outs) should fork this and add their handlers; projects with
// only static assets can use it as-is.
//
// Build-time constants are INJECTED by the `mod_esbuild_sw` step
// (see build.json + _engine.sh + front-sw-build.sh):
//
//   • BUILD_HASH         — 12-char content hash of the `hash_of` files.
//                          Any byte change → new hash → new SW bytes →
//                          browser re-installs → caches purge.
//   • BUILD_PRECACHE     — URLs to precache at install time.
//   • BUILD_ASSET_HASHES — per-asset 12-char SHA-256 prefix map. On cache
//                          miss, the SW hashes the response body and
//                          compares — if a CDN edge returned stale bytes,
//                          the SW retries with `?v=<hash>` to bust the
//                          edge cache. `{}` when verify=false.
//
// All three are esbuild --define constants. Zero hardcoded data.

declare const self: ServiceWorkerGlobalScope;
declare const BUILD_HASH: string;
declare const BUILD_PRECACHE: string[];
declare const BUILD_ASSET_HASHES: Record<string, string>;

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

// Convert a request URL to the "./<file>" form used as the key in
// BUILD_ASSET_HASHES. The map is keyed by SW-scope-relative paths so it
// survives nested deploy paths (GitHub Pages, sub-directory hosting).
function scopeRelative(reqUrl: string): string {
  const scope = self.registration.scope;
  const noQuery = reqUrl.split('?')[0];
  if (noQuery.startsWith(scope)) return './' + noQuery.slice(scope.length);
  return './' + new URL(noQuery).pathname.replace(/^\//, '');
}

// First 12 hex chars of SHA-256(buf) — same truncation rule as the
// build-side `front-cache-hash.sh` engine.
async function sha256_12(buf: ArrayBuffer): Promise<string> {
  const hash = await crypto.subtle.digest('SHA-256', buf);
  let hex = '';
  const view = new Uint8Array(hash);
  for (let i = 0; i < 6; i++) hex += view[i].toString(16).padStart(2, '0');
  return hex;
}

// CDN-edge verification. Compare response bytes against the expected
// hash. If they differ, refetch with a `?v=<hash>` cache-buster — most
// CDNs key on the full URL, so this forces an origin pull. On any
// failure (network, crypto, missing key) fall back to the original
// response — never make caching strictly worse than the no-verify path.
async function verifyAsset(req: Request, res: Response): Promise<Response> {
  try {
    const expected = BUILD_ASSET_HASHES[scopeRelative(req.url)];
    if (!expected) return res;
    const got = await sha256_12(await res.clone().arrayBuffer());
    if (got === expected) return res;
    const bustUrl = new URL(req.url);
    bustUrl.searchParams.set('v', expected);
    const fresh = await fetch(bustUrl.toString(), { cache: 'reload' });
    if (!fresh.ok) return res;
    const freshHash = await sha256_12(await fresh.clone().arrayBuffer());
    return freshHash === expected ? fresh : res;
  } catch {
    return res;
  }
}

self.addEventListener('fetch', (event) => {
  const req = event.request;
  if (req.method !== 'GET') return;
  const url = new URL(req.url);

  // Cache-first for same-origin assets only.
  if (url.origin !== self.location.origin) return;
  event.respondWith((async () => {
    const cache = await caches.open(RUNTIME_CACHE);
    const hit = await cache.match(req);
    if (hit) return hit;
    try {
      const res = await fetch(req);
      if (!res.ok) return res;
      const verified = await verifyAsset(req, res);
      if (verified.ok) cache.put(req, verified.clone()).catch(() => undefined);
      return verified;
    } catch {
      const fallback = await caches.match('./index.html');
      return fallback ?? Response.error();
    }
  })());
});

export {};
