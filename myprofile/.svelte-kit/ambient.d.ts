
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
	export const KDE_FULL_SESSION: string;
	export const PYTHON_BASIC_REPL: string;
	export const LANGUAGE: string;
	export const PAM_KWALLET5_LOGIN: string;
	export const LC_TIME: string;
	export const USER: string;
	export const CLAUDE_CODE_ENTRYPOINT: string;
	export const npm_config_user_agent: string;
	export const QT_SCREEN_SCALE_FACTORS: string;
	export const STARSHIP_SHELL: string;
	export const XDG_SEAT: string;
	export const GIT_EDITOR: string;
	export const SSH_AGENT_PID: string;
	export const XDG_SESSION_TYPE: string;
	export const GIT_ASKPASS: string;
	export const npm_node_execpath: string;
	export const XCURSOR_SIZE: string;
	export const SHLVL: string;
	export const npm_config_noproxy: string;
	export const KDE_APPLICATIONS_AS_SCOPE: string;
	export const HOME: string;
	export const CHROME_DESKTOP: string;
	export const OLDPWD: string;
	export const TERM_PROGRAM_VERSION: string;
	export const DESKTOP_SESSION: string;
	export const npm_package_json: string;
	export const KDE_SESSION_VERSION: string;
	export const XDG_SEAT_PATH: string;
	export const GTK_RC_FILES: string;
	export const VSCODE_GIT_ASKPASS_MAIN: string;
	export const LC_MONETARY: string;
	export const MANAGERPID: string;
	export const VSCODE_GIT_ASKPASS_NODE: string;
	export const npm_config_userconfig: string;
	export const npm_config_local_prefix: string;
	export const VSCODE_PYTHON_AUTOACTIVATE_GUARD: string;
	export const GSM_SKIP_SSH_AGENT_WORKAROUND: string;
	export const BUNDLED_DEBUGPY_PATH: string;
	export const SYSTEMD_EXEC_PID: string;
	export const DBUS_SESSION_BUS_ADDRESS: string;
	export const PYDEVD_DISABLE_FILE_VALIDATION: string;
	export const SSH_ASKPASS: string;
	export const npm_config_engine_strict: string;
	export const LIBVIRT_DEFAULT_URI: string;
	export const COLORTERM: string;
	export const COLOR: string;
	export const DEBUGINFOD_URLS: string;
	export const IM_CONFIG_PHASE: string;
	export const LOGNAME: string;
	export const GTK_IM_MODULE: string;
	export const QT_AUTO_SCREEN_SCALE_FACTOR: string;
	export const JOURNAL_STREAM: string;
	export const _: string;
	export const npm_config_prefix: string;
	export const npm_config_npm_version: string;
	export const MEMORY_PRESSURE_WATCH: string;
	export const XDG_SESSION_CLASS: string;
	export const CLAUDE_CODE_SSE_PORT: string;
	export const GEMINI_CLI_IDE_WORKSPACE_PATH: string;
	export const XDG_SESSION_ID: string;
	export const TERM: string;
	export const OTEL_EXPORTER_OTLP_METRICS_TEMPORALITY_PREFERENCE: string;
	export const npm_config_cache: string;
	export const GTK2_RC_FILES: string;
	export const GEMINI_CLI_IDE_SERVER_PORT: string;
	export const npm_config_node_gyp: string;
	export const PATH: string;
	export const PAPERSIZE: string;
	export const INVOCATION_ID: string;
	export const SESSION_MANAGER: string;
	export const NODE: string;
	export const npm_package_name: string;
	export const XDG_SESSION_PATH: string;
	export const LC_ADDRESS: string;
	export const XDG_RUNTIME_DIR: string;
	export const GDK_BACKEND: string;
	export const XCURSOR_THEME: string;
	export const COREPACK_ENABLE_AUTO_PIN: string;
	export const ICEAUTHORITY: string;
	export const DISPLAY: string;
	export const XDG_CURRENT_DESKTOP: string;
	export const PYTHONSTARTUP: string;
	export const LC_TELEPHONE: string;
	export const VSCODE_INJECTION: string;
	export const LANG: string;
	export const VSCODE_DEBUGPY_ADAPTER_ENDPOINTS: string;
	export const NoDefaultCurrentDirectoryInExePath: string;
	export const XDG_SESSION_DESKTOP: string;
	export const TERM_PROGRAM: string;
	export const XMODIFIERS: string;
	export const VSCODE_GIT_IPC_HANDLE: string;
	export const XAUTHORITY: string;
	export const npm_lifecycle_script: string;
	export const SSH_AUTH_SOCK: string;
	export const ORIGINAL_XDG_CURRENT_DESKTOP: string;
	export const SHELL: string;
	export const LC_NAME: string;
	export const npm_package_version: string;
	export const npm_lifecycle_event: string;
	export const QT_ACCESSIBILITY: string;
	export const LC_MEASUREMENT: string;
	export const CLAUDECODE: string;
	export const GPG_AGENT_INFO: string;
	export const LC_IDENTIFICATION: string;
	export const XDG_VTNR: string;
	export const QT_IM_MODULE: string;
	export const VSCODE_GIT_ASKPASS_EXTRA_ARGS: string;
	export const npm_config_globalconfig: string;
	export const npm_config_init_module: string;
	export const ENABLE_IDE_INTEGRATION: string;
	export const PWD: string;
	export const npm_execpath: string;
	export const XDG_CONFIG_DIRS: string;
	export const XDG_DATA_DIRS: string;
	export const CLUTTER_IM_MODULE: string;
	export const GEMINI_API_KEY: string;
	export const npm_config_global_prefix: string;
	export const STARSHIP_SESSION_KEY: string;
	export const LC_NUMERIC: string;
	export const QTWEBENGINE_DICTIONARIES_PATH: string;
	export const npm_command: string;
	export const LC_PAPER: string;
	export const KDE_SESSION_UID: string;
	export const MEMORY_PRESSURE_WRITE: string;
	export const INIT_CWD: string;
	export const EDITOR: string;
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
		KDE_FULL_SESSION: string;
		PYTHON_BASIC_REPL: string;
		LANGUAGE: string;
		PAM_KWALLET5_LOGIN: string;
		LC_TIME: string;
		USER: string;
		CLAUDE_CODE_ENTRYPOINT: string;
		npm_config_user_agent: string;
		QT_SCREEN_SCALE_FACTORS: string;
		STARSHIP_SHELL: string;
		XDG_SEAT: string;
		GIT_EDITOR: string;
		SSH_AGENT_PID: string;
		XDG_SESSION_TYPE: string;
		GIT_ASKPASS: string;
		npm_node_execpath: string;
		XCURSOR_SIZE: string;
		SHLVL: string;
		npm_config_noproxy: string;
		KDE_APPLICATIONS_AS_SCOPE: string;
		HOME: string;
		CHROME_DESKTOP: string;
		OLDPWD: string;
		TERM_PROGRAM_VERSION: string;
		DESKTOP_SESSION: string;
		npm_package_json: string;
		KDE_SESSION_VERSION: string;
		XDG_SEAT_PATH: string;
		GTK_RC_FILES: string;
		VSCODE_GIT_ASKPASS_MAIN: string;
		LC_MONETARY: string;
		MANAGERPID: string;
		VSCODE_GIT_ASKPASS_NODE: string;
		npm_config_userconfig: string;
		npm_config_local_prefix: string;
		VSCODE_PYTHON_AUTOACTIVATE_GUARD: string;
		GSM_SKIP_SSH_AGENT_WORKAROUND: string;
		BUNDLED_DEBUGPY_PATH: string;
		SYSTEMD_EXEC_PID: string;
		DBUS_SESSION_BUS_ADDRESS: string;
		PYDEVD_DISABLE_FILE_VALIDATION: string;
		SSH_ASKPASS: string;
		npm_config_engine_strict: string;
		LIBVIRT_DEFAULT_URI: string;
		COLORTERM: string;
		COLOR: string;
		DEBUGINFOD_URLS: string;
		IM_CONFIG_PHASE: string;
		LOGNAME: string;
		GTK_IM_MODULE: string;
		QT_AUTO_SCREEN_SCALE_FACTOR: string;
		JOURNAL_STREAM: string;
		_: string;
		npm_config_prefix: string;
		npm_config_npm_version: string;
		MEMORY_PRESSURE_WATCH: string;
		XDG_SESSION_CLASS: string;
		CLAUDE_CODE_SSE_PORT: string;
		GEMINI_CLI_IDE_WORKSPACE_PATH: string;
		XDG_SESSION_ID: string;
		TERM: string;
		OTEL_EXPORTER_OTLP_METRICS_TEMPORALITY_PREFERENCE: string;
		npm_config_cache: string;
		GTK2_RC_FILES: string;
		GEMINI_CLI_IDE_SERVER_PORT: string;
		npm_config_node_gyp: string;
		PATH: string;
		PAPERSIZE: string;
		INVOCATION_ID: string;
		SESSION_MANAGER: string;
		NODE: string;
		npm_package_name: string;
		XDG_SESSION_PATH: string;
		LC_ADDRESS: string;
		XDG_RUNTIME_DIR: string;
		GDK_BACKEND: string;
		XCURSOR_THEME: string;
		COREPACK_ENABLE_AUTO_PIN: string;
		ICEAUTHORITY: string;
		DISPLAY: string;
		XDG_CURRENT_DESKTOP: string;
		PYTHONSTARTUP: string;
		LC_TELEPHONE: string;
		VSCODE_INJECTION: string;
		LANG: string;
		VSCODE_DEBUGPY_ADAPTER_ENDPOINTS: string;
		NoDefaultCurrentDirectoryInExePath: string;
		XDG_SESSION_DESKTOP: string;
		TERM_PROGRAM: string;
		XMODIFIERS: string;
		VSCODE_GIT_IPC_HANDLE: string;
		XAUTHORITY: string;
		npm_lifecycle_script: string;
		SSH_AUTH_SOCK: string;
		ORIGINAL_XDG_CURRENT_DESKTOP: string;
		SHELL: string;
		LC_NAME: string;
		npm_package_version: string;
		npm_lifecycle_event: string;
		QT_ACCESSIBILITY: string;
		LC_MEASUREMENT: string;
		CLAUDECODE: string;
		GPG_AGENT_INFO: string;
		LC_IDENTIFICATION: string;
		XDG_VTNR: string;
		QT_IM_MODULE: string;
		VSCODE_GIT_ASKPASS_EXTRA_ARGS: string;
		npm_config_globalconfig: string;
		npm_config_init_module: string;
		ENABLE_IDE_INTEGRATION: string;
		PWD: string;
		npm_execpath: string;
		XDG_CONFIG_DIRS: string;
		XDG_DATA_DIRS: string;
		CLUTTER_IM_MODULE: string;
		GEMINI_API_KEY: string;
		npm_config_global_prefix: string;
		STARSHIP_SESSION_KEY: string;
		LC_NUMERIC: string;
		QTWEBENGINE_DICTIONARIES_PATH: string;
		npm_command: string;
		LC_PAPER: string;
		KDE_SESSION_UID: string;
		MEMORY_PRESSURE_WRITE: string;
		INIT_CWD: string;
		EDITOR: string;
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
