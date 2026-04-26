import { ApiClient } from './api/client';
import { WsClient } from './api/ws';
import { loadApiConfig } from './api/config';

import { CommandBar } from './shell/command-bar';
import { Panel } from './shell/panel';
import { FunctionBar } from './shell/function-bar';
import { StatusBar } from './shell/status-bar';
import { Nav } from './shell/nav';
import { applyTheme, loadTheme, loadThemesIndex, nextThemeId, readSavedThemeId, saveThemeId } from './shell/theme';

import { buildRegistry, type ScreenContext, type ScreenEntry } from './screens/registry';
import { clear } from './shell/dom';

const BUILD_VERSION = '0.1.0';

export class App {
  private api!: ApiClient;
  private ws!: WsClient;
  private nav!: Nav;
  private commandBar!: CommandBar;
  private panel!: Panel;
  private functionBar!: FunctionBar;
  private statusBar!: StatusBar;
  private screens: ScreenEntry[] = [];
  private screensById = new Map<string, ScreenEntry>();
  private currentScreenId = '';
  private currentThemeId = '';

  async mount(root: HTMLElement): Promise<void> {
    // 1. Theme — apply BEFORE first paint so boot screen looks right.
    const themesIdx = loadThemesIndex();
    this.currentThemeId = readSavedThemeId() ?? themesIdx.default;
    if (!themesIdx.themes.find(t => t.id === this.currentThemeId)) this.currentThemeId = themesIdx.default;
    this.applyCurrentTheme();

    // 2. API config — bundled at build time from build.json
    const apiCfg = loadApiConfig();
    this.api = new ApiClient(apiCfg);
    this.ws = new WsClient(apiCfg.ws);

    // 3. Screens registry
    this.screens = buildRegistry();
    for (const s of this.screens) this.screensById.set(s.id, s);

    // 4. Build shell
    this.commandBar  = new CommandBar({ panelId: 'P1', onSubmit: (raw) => this.handleCommand(raw) });
    this.panel       = new Panel('P1');
    this.functionBar = new FunctionBar((id) => this.activate(id));
    this.statusBar   = new StatusBar(() => this.cycleTheme());
    this.nav         = new Nav(this.screens, (id) => this.activate(id));

    clear(root);
    root.appendChild(this.commandBar.node);
    root.appendChild(this.nav.node);
    root.appendChild(this.panel.node);
    root.appendChild(this.functionBar.node);
    root.appendChild(this.statusBar.node);

    // 5. Status bar fields
    this.statusBar.update({
      build: BUILD_VERSION,
      user: 'anon',
      themeId: this.currentThemeId,
      themeName: this.currentThemeName(),
    });

    // 6. WS lifecycle
    this.ws.onStateChange((state) => this.statusBar.update({ connection: state }));
    this.ws.onMessage(() => { /* future: dispatch by topic */ });
    this.ws.open();

    // 7. Light status polling — info refreshes topics + latency.
    this.pollStatus();
    setInterval(() => this.pollStatus(), 10_000);

    // 8. Keyboard shortcuts
    window.addEventListener('keydown', (e) => this.handleKey(e));

    // 9. Mount initial screen — start at dashboard.
    this.activate('dashboard');
    this.commandBar.focus();
  }

  private activate(id: string): void {
    const screen = this.screensById.get(id);
    if (!screen) {
      console.warn(`[fin-terminal] unknown screen id: ${id}`);
      return;
    }
    this.currentScreenId = id;
    const mount = this.panel.mount(screen.title);
    const ctx: ScreenContext = {
      api: this.api,
      ws: this.ws,
      cycleTheme: () => this.cycleTheme(),
      currentThemeName: () => this.currentThemeName(),
    };
    try { screen.render(mount.body, ctx); }
    catch (err) {
      console.error(`[fin-terminal] screen ${id} render error`, err);
      mount.body.textContent = `screen ${id} render error: ${(err as Error).message}`;
    }
    this.nav.setActive(id);
  }

  private handleCommand(raw: string): void {
    const id = raw.toLowerCase().trim();
    if (!this.screensById.has(id)) {
      console.warn(`[fin-terminal] command "${raw}" did not match any screen id`);
      // Soft-fail: keep user in current screen, status flashes warn.
      this.statusBar.update({ connection: this.ws.getState() });
      return;
    }
    this.activate(id);
  }

  private handleKey(e: KeyboardEvent): void {
    if (e.ctrlKey && (e.key === 't' || e.key === 'T')) { e.preventDefault(); this.cycleTheme(); return; }
    if (e.key === 'F1' || e.key === 'F2' || e.key === 'F3' || e.key === 'F4' ||
        e.key === 'F5' || e.key === 'F6' || e.key === 'F7' || e.key === 'F8' ||
        e.key === 'F9' || e.key === 'F10' || e.key === 'F11' || e.key === 'F12') {
      const id = this.functionBar.resolveKey(e.key);
      if (id) { e.preventDefault(); this.activate(id); }
    }
  }

  private cycleTheme(): void {
    this.currentThemeId = nextThemeId(this.currentThemeId);
    saveThemeId(this.currentThemeId);
    this.applyCurrentTheme();
    this.statusBar.update({ themeId: this.currentThemeId, themeName: this.currentThemeName() });
    // Re-render current screen so chart canvases pick up new palette colors.
    if (this.currentScreenId) this.activate(this.currentScreenId);
  }

  private applyCurrentTheme(): void {
    const t = loadTheme(this.currentThemeId);
    applyTheme(t);
  }

  private currentThemeName(): string {
    const idx = loadThemesIndex();
    return idx.themes.find(t => t.id === this.currentThemeId)?.name ?? this.currentThemeId;
  }

  private async pollStatus(): Promise<void> {
    try {
      const t0 = performance.now();
      const info = await this.api.info();
      const dt = Math.round(performance.now() - t0);
      this.statusBar.update({ topics: info.hub_topics, latency_ms: dt, build: `${BUILD_VERSION} / api ${info.version}` });
    } catch {
      this.statusBar.update({ topics: null, latency_ms: null });
    }
  }
}
