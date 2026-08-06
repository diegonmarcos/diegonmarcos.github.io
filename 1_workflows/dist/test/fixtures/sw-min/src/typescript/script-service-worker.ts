// ╔══════════════════════════════════════════════════════════════════╗
// ║                                                                  ║
// ║   GENERATED FILE — DO NOT EDIT                                   ║
// ║                                                                  ║
// ║   Source : 1_workflows/src/test/fixtures/sw-min/src/typescript/script-service-worker.ts
// ║   Engine : 1_workflows/src/scripts/front-ship-repo-workflow-engine.sh
// ║   Rebuild: ./1_workflows/build.sh
// ║                                                                  ║
// ║   Manual edits will be overwritten on next build.                ║
// ║                                                                  ║
// ╚══════════════════════════════════════════════════════════════════╝

// Minimal SW for fixture testing — references all three injected
// constants so esbuild's --define inlining is exercised by the test.
declare const self: ServiceWorkerGlobalScope;
declare const BUILD_HASH: string;
declare const BUILD_PRECACHE: string[];
declare const BUILD_ASSET_HASHES: Record<string, string>;

const CACHE = `static-${BUILD_HASH}`;
const PRECACHE: string[] = BUILD_PRECACHE;
const HASHES: Record<string, string> = BUILD_ASSET_HASHES;

self.addEventListener('install', (e) => {
  e.waitUntil(caches.open(CACHE).then((c) => c.addAll(PRECACHE)));
});

self.addEventListener('fetch', () => {
  // Reference HASHES so esbuild keeps the define.
  void HASHES;
});

export {};
