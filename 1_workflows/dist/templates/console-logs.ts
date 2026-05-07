// ╔══════════════════════════════════════════════════════════════════╗
// ║                                                                  ║
// ║   GENERATED FILE — DO NOT EDIT                                   ║
// ║                                                                  ║
// ║   Source : 1_workflows/src/templates/console-logs.ts
// ║   Engine : 1_workflows/src/scripts/front-ship-repo-workflow-engine.sh
// ║   Rebuild: ./1_workflows/build.sh
// ║                                                                  ║
// ║   Manual edits will be overwritten on next build.                ║
// ║                                                                  ║
// ╚══════════════════════════════════════════════════════════════════╝

// console-logs.ts — single-namespace observability SDK for front projects.
//
// Pattern mirrors Sentry / OpenObserve RUM / Grafana Faro:
//   • ONE global namespace: window.consoleLogs.*
//   • Auto-instruments at script load (no init() required) — monkey-patches
//     console.{log,info,warn,error,debug} so originals fire AND a JSONL line
//     is written to the OPFS file `console.log` in this origin's sandbox.
//   • Auto-captures uncaught errors, unhandled promise rejections, SW lifecycle
//     events, page lifecycle events, failed resource loads.
//   • Sentry-style explicit capture API for code that wants to emit structured
//     events: captureException, captureMessage, addBreadcrumb.
//   • Read/tail/clear/download API for retrieval from DevTools or any script.
//
// Loaded as a single same-origin script with NO async/defer, placed early in
// <head> so it patches console before any other script runs:
//
//   <script src="console-logs.js"></script>
//
// File format: JSON Lines (one parseable JSON object per line) so
// readJSON()/tail() can yield structured records.

interface LogEntry {
  ts:     string;        // ISO timestamp
  sid:    string;        // session id (per page-load)
  level:  string;        // 'log' | 'info' | 'warn' | 'error' | 'debug' | 'fatal'
  source: string;        // 'console' | 'window' | 'promise' | 'resource' | 'sw' | 'page' | 'breadcrumb' | 'exception' | 'message'
  url?:   string;        // location.pathname + hash at write time
  msg:    string;        // free-form text
  data?:  unknown;       // optional structured context
}
interface TailInfo   { from: number; to: number; totalSize: number; entries: LogEntry[] }
interface TailOpts   { intervalMs?: number; fromStart?: boolean }
interface TailHandle { stop: () => void }
interface Breadcrumb { category?: string; message?: string; level?: string; data?: unknown }
interface ConsoleLogsAPI {
  // Identification
  path():     string;
  sessionId:  string;
  // Sentry-style explicit capture
  captureException(err: unknown, context?: unknown): void;
  captureMessage(message: string, level?: string, context?: unknown): void;
  addBreadcrumb(crumb: Breadcrumb): void;
  // OPFS file accessors
  exists():   Promise<boolean>;
  size():     Promise<number>;
  read():     Promise<string>;
  readJSON(): Promise<LogEntry[]>;
  tail(cb: (chunk: string, info: TailInfo) => void, opts?: TailOpts): Promise<TailHandle>;
  clear():    Promise<void>;
  download(): Promise<void>;
}
declare global { interface Window { consoleLogs: ConsoleLogsAPI } }

(() => {
  // ── OPFS handle (silent no-op on browsers without OPFS support) ──────────
  const ROOT_PROMISE: Promise<FileSystemDirectoryHandle> | null =
    (navigator.storage && navigator.storage.getDirectory)
      ? navigator.storage.getDirectory()
      : null;
  const root = (): Promise<FileSystemDirectoryHandle> => {
    if (ROOT_PROMISE) return ROOT_PROMISE;
    const e = new Error('OPFS not supported in this browser') as Error & { name: string };
    e.name = 'NotSupported';
    return Promise.reject(e);
  };
  const getHandle = (create: boolean): Promise<FileSystemFileHandle> =>
    root().then(d => d.getFileHandle('console.log', { create }));

  // ── Session id (12-char hex, unique per page-load) ───────────────────────
  function randomId(): string {
    if (window.crypto && crypto.getRandomValues) {
      const b = new Uint8Array(6); crypto.getRandomValues(b);
      let h = ''; for (let i = 0; i < b.length; i++) h += b[i].toString(16).padStart(2, '0');
      return h;
    }
    return Math.random().toString(16).slice(2, 14);
  }
  const SESSION_ID = randomId();

  // ── Write queue — serialised so concurrent appends don't race in OPFS ────
  let writeQueue: Promise<unknown> = Promise.resolve();
  function persist(line: string): void {
    writeQueue = writeQueue.then(() => getHandle(true))
      .then(fh => fh.createWritable({ keepExistingData: true })
        .then(w => fh.getFile()
          .then(f => w.seek(f.size).then(() => w.write(line)))
          .then(() => w.close())))
      .catch(() => { /* silent on no-OPFS / quota */ });
  }

  function safe(v: unknown): string {
    if (v === null || v === undefined) return String(v);
    if (typeof v === 'string') return v;
    if (v instanceof Error) return v.message + (v.stack ? '\n' + v.stack : '');
    try { return JSON.stringify(v); } catch { return String(v); }
  }

  function emit(level: string, source: string, msg: string, data?: unknown): void {
    const rec: LogEntry = { ts: new Date().toISOString(), sid: SESSION_ID, level, source, url: location.pathname + location.hash, msg };
    if (data !== undefined) rec.data = data;
    let line: string;
    try { line = JSON.stringify(rec) + '\n'; }
    catch { line = JSON.stringify({ ts: rec.ts, sid: rec.sid, level: 'error', source: 'console-logs', msg: 'failed to serialise log entry' }) + '\n'; }
    persist(line);
  }

  // ── Auto-instrument: console.{log,info,warn,error,debug} ────────────────
  // Originals always fire FIRST so DevTools is unchanged.
  (['log','info','warn','error','debug'] as const).forEach(level => {
    const orig = (console as unknown as Record<string,(...a:unknown[])=>void>)[level].bind(console);
    (console as unknown as Record<string,(...a:unknown[])=>void>)[level] = (...args: unknown[]) => {
      orig(...args);
      emit(level, 'console', args.map(safe).join(' '));
    };
  });

  // ── Auto-instrument: uncaught errors + resource-load failures ───────────
  window.addEventListener('error', (ev: ErrorEvent) => {
    const t = ev.target as HTMLElement & { src?: string; href?: string } | null;
    if (t && t !== (window as unknown as HTMLElement) && (t.src || t.href)) {
      emit('error', 'resource', (t.tagName || 'NODE') + ' failed to load: ' + (t.src || t.href));
    } else {
      const stack = ev.error && (ev.error as Error).stack ? '\n' + (ev.error as Error).stack : '';
      emit('error', 'window', (ev.message || 'unknown error') + ' @ ' + (ev.filename || '?') + ':' + (ev.lineno || 0) + ':' + (ev.colno || 0) + stack);
    }
  }, true);
  window.addEventListener('unhandledrejection', (ev: PromiseRejectionEvent) => {
    const r = ev.reason as Error & { message?: string; stack?: string } | null;
    emit('error', 'promise', r && r.message ? r.message + (r.stack ? '\n' + r.stack : '') : safe(r));
  });

  // ── Auto-instrument: service-worker lifecycle ───────────────────────────
  if ('serviceWorker' in navigator) {
    emit('info', 'sw', 'controller@boot=' + (navigator.serviceWorker.controller ? navigator.serviceWorker.controller.scriptURL : 'null'));
    navigator.serviceWorker.addEventListener('controllerchange', () =>
      emit('info', 'sw', 'controllerchange → ' + (navigator.serviceWorker.controller ? navigator.serviceWorker.controller.scriptURL : 'null')));
    navigator.serviceWorker.addEventListener('message', (ev: MessageEvent) => emit('info', 'sw', 'message: ' + safe(ev.data)));
    navigator.serviceWorker.getRegistration().then(reg => {
      if (!reg) { emit('info', 'sw', 'no registration yet'); return; }
      emit('info', 'sw', 'registration: scope=' + reg.scope + ' installing=' + !!reg.installing + ' waiting=' + !!reg.waiting + ' active=' + !!reg.active);
      (['installing','waiting','active'] as const).forEach(slot => {
        const w = reg[slot]; if (!w) return;
        w.addEventListener('statechange', () => emit('info', 'sw', slot + '.statechange → ' + w.state));
      });
    }).catch(e => emit('error', 'sw', 'getRegistration failed: ' + (e as Error).message));
  }

  // ── Auto-instrument: page lifecycle ─────────────────────────────────────
  emit('info', 'page', 'boot readyState=' + document.readyState + ' url=' + location.href + ' ua=' + navigator.userAgent.slice(0, 80));
  document.addEventListener('DOMContentLoaded', () => emit('info', 'page', 'DOMContentLoaded'));
  window.addEventListener('load',               () => emit('info', 'page', 'load'));
  document.addEventListener('visibilitychange', () => emit('info', 'page', 'visibility=' + document.visibilityState));

  // ── Sentry-style explicit capture API ───────────────────────────────────
  const captureException = (err: unknown, context?: unknown): void => {
    const e = err as Error & { message?: string; stack?: string };
    emit('error', 'exception', (e && e.message) || safe(err) + (e && e.stack ? '\n' + e.stack : ''), context);
  };
  const captureMessage = (message: string, level: string = 'info', context?: unknown): void => {
    emit(level, 'message', message, context);
  };
  const addBreadcrumb = (crumb: Breadcrumb): void => {
    emit(crumb.level || 'info', 'breadcrumb', (crumb.category ? '[' + crumb.category + '] ' : '') + (crumb.message || ''), crumb.data);
  };

  // ── Read / tail / clear / download API ──────────────────────────────────
  const API: ConsoleLogsAPI = {
    path: () => 'opfs://' + location.origin + '/console.log',
    sessionId: SESSION_ID,
    captureException, captureMessage, addBreadcrumb,

    exists: () => getHandle(false).then(() => true)
                                  .catch(e => { if (e.name === 'NotFoundError') return false; throw e; }),
    size:   () => getHandle(false).then(fh => fh.getFile()).then(f => f.size)
                                  .catch(e => { if (e.name === 'NotFoundError') return 0; throw e; }),
    read:   () => getHandle(false).then(fh => fh.getFile()).then(f => f.text())
                                  .catch(e => { if (e.name === 'NotFoundError') return ''; throw e; }),
    readJSON: () => API.read().then(text =>
      text.split('\n').filter(Boolean).map(line => {
        try { return JSON.parse(line) as LogEntry; }
        catch { return { ts: '', sid: '', level: 'parse-error', source: 'console-logs', msg: line } as LogEntry; }
      })
    ),
    tail: (cb, opts = {}) => {
      const intervalMs = opts.intervalMs ?? 500;
      const fromStart  = !!opts.fromStart;
      let stopped = false; let lastSize = 0;
      return API.size().then(s => {
        lastSize = fromStart ? 0 : s;
        const tick = () => {
          if (stopped) return;
          getHandle(true).then(fh => fh.getFile()).then(f => {
            if (f.size > lastSize) {
              return f.slice(lastSize, f.size).text().then(chunk => {
                lastSize = f.size;
                const entries = chunk.split('\n').filter(Boolean).map(line => {
                  try { return JSON.parse(line) as LogEntry; }
                  catch { return { ts: '', sid: '', level: 'parse-error', source: 'console-logs', msg: line } as LogEntry; }
                });
                try { cb(chunk, { from: lastSize - chunk.length, to: lastSize, totalSize: f.size, entries }); } catch { /* swallow */ }
              });
            }
          }).catch(() => { /* keep polling */ })
            .then(() => { if (!stopped) setTimeout(tick, intervalMs); });
        };
        tick();
        return { stop: () => { stopped = true; } };
      });
    },
    clear: () => getHandle(true).then(fh => fh.createWritable())
                                .then(w => w.truncate(0).then(() => w.close())),
    download: () => API.read().then(text => {
      const blob = new Blob([text], { type: 'application/x-ndjson;charset=utf-8' });
      const url  = URL.createObjectURL(blob);
      const a    = document.createElement('a');
      a.href = url; a.download = 'console.log';
      document.body.appendChild(a); a.click(); document.body.removeChild(a);
      setTimeout(() => URL.revokeObjectURL(url), 1000);
    }),
  };

  window.consoleLogs = API;

  // ════════════════════════════════════════════════════════════════════════
  // ── BOOT MANIFEST — comprehensive declarative environment dump on load ──
  // ════════════════════════════════════════════════════════════════════════
  // Always runs on every page. Self-contained, no external deps. Goal:
  // the console NEVER stays empty — there's always a visible audit trail
  // of {project, build, env, PORTAL_DATA, DOM, SW, perf, storage, features}.
  // ════════════════════════════════════════════════════════════════════════
  function bytes(n: number): string {
    if (n < 1024) return n + 'B';
    if (n < 1024 * 1024) return (n / 1024).toFixed(1) + 'KB';
    return (n / 1024 / 1024).toFixed(2) + 'MB';
  }
  function rough(o: unknown): number { try { return JSON.stringify(o).length; } catch { return 0; } }
  function feature(name: string, ok: boolean): string { return (ok ? '✓ ' : '✗ ') + name; }

  function projectIdFromPath(): string {
    // GitHub Pages / static hosts: path like /myid/, /my-fin/, /. Treat first
    // segment as the project. Empty path → 'root'.
    const seg = location.pathname.split('/').filter(Boolean)[0];
    return seg || 'root';
  }

  function dumpBootManifest(): void {
    const TAG = '[boot-manifest]';
    const proj = projectIdFromPath();
    const title = document.title || '(no title)';
    const t0 = performance.now();
    try {
      console.group('%c' + TAG + ' ' + proj + ' · ' + title, 'background:#0B0F1A;color:#5B8DEF;font-weight:600;padding:2px 6px;border-radius:3px');

      console.group('▸ identity');
      console.log('project       :', proj);
      console.log('title         :', title);
      console.log('session       :', SESSION_ID);
      console.log('boot-time     :', new Date().toISOString());
      console.log('OPFS log path :', API.path());
      console.groupEnd();

      console.group('▸ location');
      console.log('href      :', location.href);
      console.log('origin    :', location.origin);
      console.log('pathname  :', location.pathname);
      console.log('hash      :', location.hash || '(none)');
      console.log('protocol  :', location.protocol);
      console.log('referrer  :', document.referrer || '(none)');
      console.groupEnd();

      console.group('▸ environment');
      console.log('userAgent       :', navigator.userAgent);
      console.log('languages       :', navigator.languages);
      console.log('online          :', navigator.onLine);
      console.log('viewport        :', window.innerWidth + '×' + window.innerHeight + ' @ ' + (window.devicePixelRatio || 1) + 'x');
      console.log('colorScheme     :', window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
      console.log('reducedMotion   :', window.matchMedia('(prefers-reduced-motion: reduce)').matches);
      console.log('cookieEnabled   :', navigator.cookieEnabled);
      console.log('hardwareConcur  :', (navigator as Navigator & { hardwareConcurrency?: number }).hardwareConcurrency || '?');
      console.log('deviceMemory(GB):', (navigator as Navigator & { deviceMemory?: number }).deviceMemory || '?');
      console.log('connection      :', (navigator as Navigator & { connection?: { effectiveType?: string; downlink?: number } }).connection?.effectiveType || '?');
      console.log('timezone        :', Intl.DateTimeFormat().resolvedOptions().timeZone);
      console.groupEnd();

      console.group('▸ PORTAL_DATA  (data-driven hydration map)');
      const bag = (globalThis as { PORTAL_DATA?: Record<string, unknown> }).PORTAL_DATA;
      if (!bag) {
        console.warn('PORTAL_DATA not present — page may not be data-driven, or wrappers failed to load');
      } else {
        const keys = Object.keys(bag);
        console.log('keys (' + keys.length + '):', keys);
        const rows = keys.map(k => ({
          key: k,
          type: Array.isArray(bag[k]) ? 'array' : typeof bag[k],
          size: bytes(rough(bag[k])),
          topKeys: (typeof bag[k] === 'object' && bag[k]) ? Object.keys(bag[k] as object).slice(0, 6).join(', ') : '—'
        }));
        console.table(rows);
      }
      console.groupEnd();

      console.group('▸ DOM');
      console.log('readyState      :', document.readyState);
      console.log('<body> children :', document.body?.childElementCount ?? '?');
      console.log('#app present    :', !!document.getElementById('app'));
      console.log('#main present   :', !!document.getElementById('main'));
      console.log('#topbar present :', !!document.getElementById('topbar'));
      console.log('#sidebar present:', !!document.getElementById('sidebar'));
      console.log('charset         :', document.characterSet);
      console.log('themeColor      :', document.querySelector('meta[name="theme-color"]')?.getAttribute('content') || '(none)');
      console.log('description     :', document.querySelector('meta[name="description"]')?.getAttribute('content') || '(none)');
      console.log('manifest        :', document.querySelector('link[rel="manifest"]')?.getAttribute('href') || '(none)');
      console.groupEnd();

      console.group('▸ scripts loaded (' + document.scripts.length + ')');
      Array.from(document.scripts).forEach((s, i) => {
        console.log((i + 1) + '. ' + (s.src ? s.src.replace(location.origin, '') : '<inline ' + (s.textContent?.length ?? 0) + 'B>') + (s.async ? ' [async]' : '') + (s.defer ? ' [defer]' : ''));
      });
      console.groupEnd();

      console.group('▸ stylesheets (' + document.styleSheets.length + ')');
      Array.from(document.styleSheets).forEach((ss, i) => {
        try { console.log((i + 1) + '. ' + (ss.href || '<inline>') + ' (rules≈' + (ss.cssRules?.length ?? '?') + ')'); }
        catch { console.log((i + 1) + '. ' + (ss.href || '<inline>') + ' (cross-origin)'); }
      });
      console.groupEnd();

      console.group('▸ service worker');
      if ('serviceWorker' in navigator) {
        console.log('controller :', navigator.serviceWorker.controller?.scriptURL || '(none yet)');
        navigator.serviceWorker.getRegistration().then(reg => {
          if (!reg) { console.log('registration: none'); return; }
          console.log('registration scope :', reg.scope);
          console.log('  installing :', reg.installing?.scriptURL || 'no');
          console.log('  waiting    :', reg.waiting?.scriptURL || 'no');
          console.log('  active     :', reg.active?.scriptURL || 'no');
          console.log('  state      :', reg.active?.state || '?');
        });
        if ('caches' in window) {
          caches.keys().then(keys => console.log('cache keys :', keys.length ? keys : '(empty)'));
        }
      } else {
        console.log('serviceWorker API: NOT supported');
      }
      console.groupEnd();

      console.group('▸ performance');
      const nav = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming | undefined;
      if (nav) {
        console.log('TTFB           :', Math.round(nav.responseStart - nav.requestStart) + 'ms');
        console.log('DOM interactive:', Math.round(nav.domInteractive) + 'ms');
        console.log('DOM complete   :', Math.round(nav.domComplete) + 'ms');
        console.log('Load event     :', Math.round(nav.loadEventEnd) + 'ms');
        console.log('transferSize   :', bytes(nav.transferSize ?? 0));
      } else {
        console.log('navigation timing: unavailable');
      }
      console.log('manifest dump  :', Math.round(performance.now() - t0) + 'ms');
      console.groupEnd();

      console.group('▸ storage');
      try {
        console.log('localStorage   :', Object.keys(localStorage).length + ' keys');
        console.log('sessionStorage :', Object.keys(sessionStorage).length + ' keys');
      } catch { console.log('storage: blocked (private mode?)'); }
      console.log('cookies        :', document.cookie ? document.cookie.split(';').length : 0);
      if (navigator.storage?.estimate) {
        navigator.storage.estimate().then(est => {
          console.log('quota          :', bytes(est.quota ?? 0) + ' (used: ' + bytes(est.usage ?? 0) + ')');
        });
      }
      console.groupEnd();

      console.group('▸ feature support');
      console.log(feature('serviceWorker',     'serviceWorker' in navigator));
      console.log(feature('OPFS',              !!(navigator.storage && navigator.storage.getDirectory)));
      console.log(feature('caches',            'caches' in window));
      console.log(feature('IntersectionObserver', 'IntersectionObserver' in window));
      console.log(feature('ResizeObserver',    'ResizeObserver' in window));
      console.log(feature('clipboard',         !!(navigator.clipboard)));
      console.log(feature('share',             !!(navigator.share)));
      console.log(feature('webShare',          'canShare' in navigator));
      console.log(feature('mediaSession',      'mediaSession' in navigator));
      console.log(feature('geolocation',       'geolocation' in navigator));
      console.log(feature('notifications',     'Notification' in window));
      console.log(feature('webGL',             !!document.createElement('canvas').getContext('webgl')));
      console.log(feature('webGPU',            'gpu' in navigator));
      console.log(feature('crypto.subtle',     !!(window.crypto && (crypto as Crypto & { subtle?: SubtleCrypto }).subtle)));
      console.log(feature('BroadcastChannel',  'BroadcastChannel' in window));
      console.log(feature('SharedArrayBuffer', typeof SharedArrayBuffer !== 'undefined'));
      console.groupEnd();

      console.group('▸ window.consoleLogs API');
      console.log('Use these in DevTools to inspect captured logs:');
      console.log('  await window.consoleLogs.read()       — full OPFS log as text');
      console.log('  await window.consoleLogs.readJSON()   — parsed JSONL entries');
      console.log('  await window.consoleLogs.size()       — bytes on disk');
      console.log('  await window.consoleLogs.tail(cb)     — live-tail handler');
      console.log('  await window.consoleLogs.download()   — save .log file');
      console.log('  await window.consoleLogs.clear()      — wipe OPFS log');
      console.log('Plus emergency:');
      console.log('  window.__resetSW("manual")            — unregister SW + caches + reload');
      console.log('  window.__bootManifest()               — re-dump this manifest');
      console.groupEnd();

      console.groupEnd();
    } catch (e) {
      // Manifest must NEVER throw — it's a debug helper, breaking it would
      // mask real errors. Log the failure and move on.
      console.error('[boot-manifest] dump failed', (e as Error)?.message);
    }
  }

  // Expose for re-runs (developer can call from console)
  (window as Window & { __bootManifest?: () => void }).__bootManifest = dumpBootManifest;

  // Synchronous one-liner so the console NEVER stays empty even if
  // DOMContentLoaded never fires (e.g. detached worker context).
  console.info('[console-logs] live · session=' + SESSION_ID + ' · path=' + location.pathname + ' — call window.__bootManifest() to re-dump');

  // Full dump on DOMContentLoaded (DOM is ready, scripts/sheets enumerable)
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', dumpBootManifest, { once: true });
  } else {
    // Already past DCL — schedule ASAP without blocking the current task
    setTimeout(dumpBootManifest, 0);
  }
})();

export {};  // module-scope so `declare global` is allowed
