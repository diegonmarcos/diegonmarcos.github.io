
// this file is generated — do not edit it


/// <reference types="@sveltejs/kit" />

/**
 * Environment variables [loaded by Vite](https://vitejs.dev/guide/env-and-mode.html#env-files) from `.env` files and `process.env`. Like [`$env/dynamic/private`](https://svelte.dev/docs/kit/$env-dynamic-private), this module cannot be imported into client-side code. This module only includes variables that _do not_ begin with [`config.kit.env.publicPrefix`](https://svelte.dev/docs/kit/configuration#env) _and do_ start with [`config.kit.env.privatePrefix`](https://svelte.dev/docs/kit/configuration#env) (if configured).
 * 
 * _Unlike_ [`$env/dynamic/private`](https://svelte.dev/docs/kit/$env-dynamic-private), the values exported from this module are statically injected into your bundle at build time, enabling optimisations like dead code elimination.
 * 
 * ```ts
 * import { API_KEY } from '$env/static/private';
 * ```
 * 
 * Note that all environment variables referenced in your code should be declared (for example in an `.env` file), even if they don't have a value until the app is deployed:
 * 
 * ```
 * MY_FEATURE_FLAG=""
 * ```
 * 
 * You can override `.env` values from the command line like so:
 * 
 * ```sh
 * MY_FEATURE_FLAG="enabled" npm run dev
 * ```
 */
declare module '$env/static/private' {
	export const SHELL: string;
	export const npm_command: string;
	export const COREPACK_ENABLE_AUTO_PIN: string;
	export const SESSION_MANAGER: string;
	export const WINDOWID: string;
	export const __ETC_PROFILE_DONE: string;
	export const npm_config_userconfig: string;
	export const JUPYTER_CONFIG_DIR: string;
	export const COLORTERM: string;
	export const __HM_SESS_VARS_SOURCED: string;
	export const GTK_THEME: string;
	export const XDG_CONFIG_DIRS: string;
	export const npm_config_cache: string;
	export const LESS: string;
	export const XDG_SESSION_PATH: string;
	export const XDG_MENU_PREFIX: string;
	export const SPEECHD_CMD: string;
	export const ICEAUTHORITY: string;
	export const LANGUAGE: string;
	export const NODE: string;
	export const LESS_TERMCAP_se: string;
	export const LESS_TERMCAP_so: string;
	export const XDG_DATA_HOME: string;
	export const PROFILE: string;
	export const SHELL_SESSION_ID: string;
	export const XDG_CONFIG_HOME: string;
	export const XCURSOR_PATH: string;
	export const MEMORY_PRESSURE_WRITE: string;
	export const COLOR: string;
	export const LOCALE_ARCHIVE_2_27: string;
	export const npm_config_local_prefix: string;
	export const GNUPGHOME: string;
	export const DESKTOP_SESSION: string;
	export const GDK_PIXBUF_MODULE_FILE: string;
	export const GTK_RC_FILES: string;
	export const npm_config_globalconfig: string;
	export const GPG_TTY: string;
	export const EDITOR: string;
	export const FZF_ALT_C_OPTS: string;
	export const XDG_SEAT: string;
	export const NAUTILUS_4_EXTENSION_DIR: string;
	export const PWD: string;
	export const NIX_PROFILES: string;
	export const XDG_VIDEOS_DIR: string;
	export const NIX_GSETTINGS_OVERRIDES_DIR: string;
	export const XDG_SESSION_DESKTOP: string;
	export const LOGNAME: string;
	export const QT_QPA_PLATFORMTHEME: string;
	export const XDG_SESSION_TYPE: string;
	export const NIX_PATH: string;
	export const npm_config_init_module: string;
	export const SYSTEMD_EXEC_PID: string;
	export const VIPSHOME: string;
	export const NIXPKGS_CONFIG: string;
	export const _: string;
	export const XAUTHORITY: string;
	export const XDG_PICTURES_DIR: string;
	export const NoDefaultCurrentDirectoryInExePath: string;
	export const FZF_DEFAULT_COMMAND: string;
	export const CLAUDECODE: string;
	export const XKB_DEFAULT_MODEL: string;
	export const GTK2_RC_FILES: string;
	export const NIXPKGS_QT6_QML_IMPORT_PATH: string;
	export const HOME: string;
	export const XDG_PUBLICSHARE_DIR: string;
	export const SSH_ASKPASS: string;
	export const LANG: string;
	export const TMUX_TMPDIR: string;
	export const FZF_CTRL_R_OPTS: string;
	export const XDG_CURRENT_DESKTOP: string;
	export const CARGO_HOME: string;
	export const KONSOLE_DBUS_SERVICE: string;
	export const npm_package_version: string;
	export const MEMORY_PRESSURE_WATCH: string;
	export const STARSHIP_SHELL: string;
	export const WAYLAND_DISPLAY: string;
	export const KONSOLE_DBUS_SESSION: string;
	export const PROFILEHOME: string;
	export const GIO_EXTRA_MODULES: string;
	export const XDG_DOWNLOAD_DIR: string;
	export const HM_PROFILE: string;
	export const XDG_SEAT_PATH: string;
	export const XDG_MUSIC_DIR: string;
	export const XDG_TEMPLATES_DIR: string;
	export const INVOCATION_ID: string;
	export const KONSOLE_VERSION: string;
	export const MANAGERPID: string;
	export const PIP_CACHE_DIR: string;
	export const INIT_CWD: string;
	export const STARSHIP_SESSION_KEY: string;
	export const KDE_SESSION_UID: string;
	export const XDG_CACHE_HOME: string;
	export const NIX_USER_PROFILE_DIR: string;
	export const INFOPATH: string;
	export const npm_lifecycle_script: string;
	export const XKB_DEFAULT_LAYOUT: string;
	export const npm_config_npm_version: string;
	export const XDG_SESSION_CLASS: string;
	export const XDG_DESKTOP_DIR: string;
	export const PYTHONPATH: string;
	export const TERM: string;
	export const npm_package_name: string;
	export const LESS_TERMCAP_mb: string;
	export const FZF_CTRL_T_COMMAND: string;
	export const LESS_TERMCAP_me: string;
	export const LESS_TERMCAP_md: string;
	export const GTK_PATH: string;
	export const RUSTUP_HOME: string;
	export const npm_config_prefix: string;
	export const LESSOPEN: string;
	export const USER: string;
	export const FZF_ALT_C_COMMAND: string;
	export const COLORFGBG: string;
	export const TZDIR: string;
	export const FZF_CTRL_T_OPTS: string;
	export const QT_WAYLAND_RECONNECT: string;
	export const KDE_SESSION_VERSION: string;
	export const PAM_KWALLET5_LOGIN: string;
	export const MANPAGER: string;
	export const VISUAL: string;
	export const DISPLAY: string;
	export const npm_lifecycle_event: string;
	export const LESS_TERMCAP_ue: string;
	export const SHLVL: string;
	export const LESS_TERMCAP_us: string;
	export const GIT_EDITOR: string;
	export const __HM_ZSH_SESS_VARS_SOURCED: string;
	export const PAGER: string;
	export const QTWEBKIT_PLUGIN_PATH: string;
	export const __NIXOS_SET_ENVIRONMENT_DONE: string;
	export const XDG_VTNR: string;
	export const XDG_SESSION_ID: string;
	export const LOCALE_ARCHIVE: string;
	export const LESSKEYIN_SYSTEM: string;
	export const npm_config_user_agent: string;
	export const QML2_IMPORT_PATH: string;
	export const TERMINFO_DIRS: string;
	export const DEVICE: string;
	export const OTEL_EXPORTER_OTLP_METRICS_TEMPORALITY_PREFERENCE: string;
	export const XDG_STATE_HOME: string;
	export const npm_execpath: string;
	export const XDG_RUNTIME_DIR: string;
	export const CLAUDE_CODE_ENTRYPOINT: string;
	export const NIX_XDG_DESKTOP_PORTAL_DIR: string;
	export const npm_package_json: string;
	export const XDG_DOCUMENTS_DIR: string;
	export const LC_ALL: string;
	export const QT_AUTO_SCREEN_SCALE_FACTOR: string;
	export const JOURNAL_STREAM: string;
	export const XDG_DATA_DIRS: string;
	export const KDE_FULL_SESSION: string;
	export const LIBEXEC_PATH: string;
	export const npm_config_noproxy: string;
	export const PATH: string;
	export const npm_config_node_gyp: string;
	export const __fish_nixos_env_preinit_sourced: string;
	export const DBUS_SESSION_BUS_ADDRESS: string;
	export const FZF_DEFAULT_OPTS: string;
	export const npm_config_global_prefix: string;
	export const KDE_APPLICATIONS_AS_SCOPE: string;
	export const KPACKAGE_DEP_RESOLVERS_PATH: string;
	export const QT_PLUGIN_PATH: string;
	export const XKB_DEFAULT_OPTIONS: string;
	export const npm_node_execpath: string;
	export const OLDPWD: string;
	export const GOPATH: string;
	export const KONSOLE_DBUS_WINDOW: string;
	export const NODE_ENV: string;
}

/**
 * Similar to [`$env/static/private`](https://svelte.dev/docs/kit/$env-static-private), except that it only includes environment variables that begin with [`config.kit.env.publicPrefix`](https://svelte.dev/docs/kit/configuration#env) (which defaults to `PUBLIC_`), and can therefore safely be exposed to client-side code.
 * 
 * Values are replaced statically at build time.
 * 
 * ```ts
 * import { PUBLIC_BASE_URL } from '$env/static/public';
 * ```
 */
declare module '$env/static/public' {
	
}

/**
 * This module provides access to runtime environment variables, as defined by the platform you're running on. For example if you're using [`adapter-node`](https://github.com/sveltejs/kit/tree/main/packages/adapter-node) (or running [`vite preview`](https://svelte.dev/docs/kit/cli)), this is equivalent to `process.env`. This module only includes variables that _do not_ begin with [`config.kit.env.publicPrefix`](https://svelte.dev/docs/kit/configuration#env) _and do_ start with [`config.kit.env.privatePrefix`](https://svelte.dev/docs/kit/configuration#env) (if configured).
 * 
 * This module cannot be imported into client-side code.
 * 
 * ```ts
 * import { env } from '$env/dynamic/private';
 * console.log(env.DEPLOYMENT_SPECIFIC_VARIABLE);
 * ```
 * 
 * > [!NOTE] In `dev`, `$env/dynamic` always includes environment variables from `.env`. In `prod`, this behavior will depend on your adapter.
 */
declare module '$env/dynamic/private' {
	export const env: {
		SHELL: string;
		npm_command: string;
		COREPACK_ENABLE_AUTO_PIN: string;
		SESSION_MANAGER: string;
		WINDOWID: string;
		__ETC_PROFILE_DONE: string;
		npm_config_userconfig: string;
		JUPYTER_CONFIG_DIR: string;
		COLORTERM: string;
		__HM_SESS_VARS_SOURCED: string;
		GTK_THEME: string;
		XDG_CONFIG_DIRS: string;
		npm_config_cache: string;
		LESS: string;
		XDG_SESSION_PATH: string;
		XDG_MENU_PREFIX: string;
		SPEECHD_CMD: string;
		ICEAUTHORITY: string;
		LANGUAGE: string;
		NODE: string;
		LESS_TERMCAP_se: string;
		LESS_TERMCAP_so: string;
		XDG_DATA_HOME: string;
		PROFILE: string;
		SHELL_SESSION_ID: string;
		XDG_CONFIG_HOME: string;
		XCURSOR_PATH: string;
		MEMORY_PRESSURE_WRITE: string;
		COLOR: string;
		LOCALE_ARCHIVE_2_27: string;
		npm_config_local_prefix: string;
		GNUPGHOME: string;
		DESKTOP_SESSION: string;
		GDK_PIXBUF_MODULE_FILE: string;
		GTK_RC_FILES: string;
		npm_config_globalconfig: string;
		GPG_TTY: string;
		EDITOR: string;
		FZF_ALT_C_OPTS: string;
		XDG_SEAT: string;
		NAUTILUS_4_EXTENSION_DIR: string;
		PWD: string;
		NIX_PROFILES: string;
		XDG_VIDEOS_DIR: string;
		NIX_GSETTINGS_OVERRIDES_DIR: string;
		XDG_SESSION_DESKTOP: string;
		LOGNAME: string;
		QT_QPA_PLATFORMTHEME: string;
		XDG_SESSION_TYPE: string;
		NIX_PATH: string;
		npm_config_init_module: string;
		SYSTEMD_EXEC_PID: string;
		VIPSHOME: string;
		NIXPKGS_CONFIG: string;
		_: string;
		XAUTHORITY: string;
		XDG_PICTURES_DIR: string;
		NoDefaultCurrentDirectoryInExePath: string;
		FZF_DEFAULT_COMMAND: string;
		CLAUDECODE: string;
		XKB_DEFAULT_MODEL: string;
		GTK2_RC_FILES: string;
		NIXPKGS_QT6_QML_IMPORT_PATH: string;
		HOME: string;
		XDG_PUBLICSHARE_DIR: string;
		SSH_ASKPASS: string;
		LANG: string;
		TMUX_TMPDIR: string;
		FZF_CTRL_R_OPTS: string;
		XDG_CURRENT_DESKTOP: string;
		CARGO_HOME: string;
		KONSOLE_DBUS_SERVICE: string;
		npm_package_version: string;
		MEMORY_PRESSURE_WATCH: string;
		STARSHIP_SHELL: string;
		WAYLAND_DISPLAY: string;
		KONSOLE_DBUS_SESSION: string;
		PROFILEHOME: string;
		GIO_EXTRA_MODULES: string;
		XDG_DOWNLOAD_DIR: string;
		HM_PROFILE: string;
		XDG_SEAT_PATH: string;
		XDG_MUSIC_DIR: string;
		XDG_TEMPLATES_DIR: string;
		INVOCATION_ID: string;
		KONSOLE_VERSION: string;
		MANAGERPID: string;
		PIP_CACHE_DIR: string;
		INIT_CWD: string;
		STARSHIP_SESSION_KEY: string;
		KDE_SESSION_UID: string;
		XDG_CACHE_HOME: string;
		NIX_USER_PROFILE_DIR: string;
		INFOPATH: string;
		npm_lifecycle_script: string;
		XKB_DEFAULT_LAYOUT: string;
		npm_config_npm_version: string;
		XDG_SESSION_CLASS: string;
		XDG_DESKTOP_DIR: string;
		PYTHONPATH: string;
		TERM: string;
		npm_package_name: string;
		LESS_TERMCAP_mb: string;
		FZF_CTRL_T_COMMAND: string;
		LESS_TERMCAP_me: string;
		LESS_TERMCAP_md: string;
		GTK_PATH: string;
		RUSTUP_HOME: string;
		npm_config_prefix: string;
		LESSOPEN: string;
		USER: string;
		FZF_ALT_C_COMMAND: string;
		COLORFGBG: string;
		TZDIR: string;
		FZF_CTRL_T_OPTS: string;
		QT_WAYLAND_RECONNECT: string;
		KDE_SESSION_VERSION: string;
		PAM_KWALLET5_LOGIN: string;
		MANPAGER: string;
		VISUAL: string;
		DISPLAY: string;
		npm_lifecycle_event: string;
		LESS_TERMCAP_ue: string;
		SHLVL: string;
		LESS_TERMCAP_us: string;
		GIT_EDITOR: string;
		__HM_ZSH_SESS_VARS_SOURCED: string;
		PAGER: string;
		QTWEBKIT_PLUGIN_PATH: string;
		__NIXOS_SET_ENVIRONMENT_DONE: string;
		XDG_VTNR: string;
		XDG_SESSION_ID: string;
		LOCALE_ARCHIVE: string;
		LESSKEYIN_SYSTEM: string;
		npm_config_user_agent: string;
		QML2_IMPORT_PATH: string;
		TERMINFO_DIRS: string;
		DEVICE: string;
		OTEL_EXPORTER_OTLP_METRICS_TEMPORALITY_PREFERENCE: string;
		XDG_STATE_HOME: string;
		npm_execpath: string;
		XDG_RUNTIME_DIR: string;
		CLAUDE_CODE_ENTRYPOINT: string;
		NIX_XDG_DESKTOP_PORTAL_DIR: string;
		npm_package_json: string;
		XDG_DOCUMENTS_DIR: string;
		LC_ALL: string;
		QT_AUTO_SCREEN_SCALE_FACTOR: string;
		JOURNAL_STREAM: string;
		XDG_DATA_DIRS: string;
		KDE_FULL_SESSION: string;
		LIBEXEC_PATH: string;
		npm_config_noproxy: string;
		PATH: string;
		npm_config_node_gyp: string;
		__fish_nixos_env_preinit_sourced: string;
		DBUS_SESSION_BUS_ADDRESS: string;
		FZF_DEFAULT_OPTS: string;
		npm_config_global_prefix: string;
		KDE_APPLICATIONS_AS_SCOPE: string;
		KPACKAGE_DEP_RESOLVERS_PATH: string;
		QT_PLUGIN_PATH: string;
		XKB_DEFAULT_OPTIONS: string;
		npm_node_execpath: string;
		OLDPWD: string;
		GOPATH: string;
		KONSOLE_DBUS_WINDOW: string;
		NODE_ENV: string;
		[key: `PUBLIC_${string}`]: undefined;
		[key: `${string}`]: string | undefined;
	}
}

/**
 * Similar to [`$env/dynamic/private`](https://svelte.dev/docs/kit/$env-dynamic-private), but only includes variables that begin with [`config.kit.env.publicPrefix`](https://svelte.dev/docs/kit/configuration#env) (which defaults to `PUBLIC_`), and can therefore safely be exposed to client-side code.
 * 
 * Note that public dynamic environment variables must all be sent from the server to the client, causing larger network requests — when possible, use `$env/static/public` instead.
 * 
 * ```ts
 * import { env } from '$env/dynamic/public';
 * console.log(env.PUBLIC_DEPLOYMENT_SPECIFIC_VARIABLE);
 * ```
 */
declare module '$env/dynamic/public' {
	export const env: {
		[key: `PUBLIC_${string}`]: string | undefined;
	}
}
