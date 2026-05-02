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
})();

export {};  // module-scope so `declare global` is allowed
