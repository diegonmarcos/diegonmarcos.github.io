
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
	export const npm_config_yes: string;
	export const npm_config_userconfig: string;
	export const COLORTERM: string;
	export const __HM_SESS_VARS_SOURCED: string;
	export const npm_config_cache: string;
	export const TERMUX_APP__USER_ID: string;
	export const PREFIX: string;
	export const NODE: string;
	export const NODE_OPTIONS: string;
	export const UV_USE_IO_URING: string;
	export const TERMUX_APP__UID: string;
	export const SHELL_CMD__RUNNER_NAME: string;
	export const MALLOC_ARENA_MAX: string;
	export const TERMUX_APP__PACKAGE_NAME: string;
	export const TERMUX_APP__SE_PROCESS_CONTEXT: string;
	export const TERMUX_APP__VERSION_NAME: string;
	export const TERMUX_APP__APK_PATH: string;
	export const COLOR: string;
	export const LOCALE_ARCHIVE_2_27: string;
	export const npm_config_local_prefix: string;
	export const npm_config_globalconfig: string;
	export const TERMUX_APP__IS_INSTALLED_ON_EXTERNAL_STORAGE: string;
	export const EDITOR: string;
	export const TERMUX_APP__PACKAGE_VARIANT: string;
	export const PWD: string;
	export const NIX_PROFILES: string;
	export const PROOT_TMP_DIR: string;
	export const NIX_PATH: string;
	export const npm_config_init_module: string;
	export const TERMUX_APP__FILES_DIR: string;
	export const _: string;
	export const NoDefaultCurrentDirectoryInExePath: string;
	export const TERMUX_VERSION: string;
	export const TERMUX_APP__SE_INFO: string;
	export const CLAUDECODE: string;
	export const SYSTEMSERVERCLASSPATH: string;
	export const EXTERNAL_STORAGE: string;
	export const LD_PRELOAD: string;
	export const HOME: string;
	export const LANG: string;
	export const SHELL_CMD__TERMINAL_SESSION_NUMBER_SINCE_BOOT: string;
	export const TERMUX_APP__PID: string;
	export const TERMUX_APP__PACKAGE_MANAGER: string;
	export const npm_package_version: string;
	export const GC_NPROCS: string;
	export const NIX_SSL_CERT_FILE: string;
	export const DEX2OATBOOTCLASSPATH: string;
	export const TMPDIR: string;
	export const INIT_CWD: string;
	export const npm_lifecycle_script: string;
	export const ANDROID_DATA: string;
	export const TERMUX_APP__AM_SOCKET_SERVER_ENABLED: string;
	export const npm_config_npm_version: string;
	export const SHELL_CMD__SHELL_ID: string;
	export const TERMUX_APP__SE_FILE_CONTEXT: string;
	export const ANDROID_STORAGE: string;
	export const TERM: string;
	export const npm_package_name: string;
	export const PROOT_L2S_DIR: string;
	export const npm_config_prefix: string;
	export const USER: string;
	export const TERMUX_APP__IS_DEBUGGABLE_BUILD: string;
	export const ASEC_MOUNTPOINT: string;
	export const TZDIR: string;
	export const ANDROID_I18N_ROOT: string;
	export const npm_lifecycle_event: string;
	export const SHLVL: string;
	export const GIT_EDITOR: string;
	export const ANDROID_ROOT: string;
	export const MIMALLOC_PAGE_RESET: string;
	export const LOCALE_ARCHIVE: string;
	export const CLAUDE_TMP: string;
	export const MIMALLOC_LARGE_OS_PAGES: string;
	export const npm_config_user_agent: string;
	export const SHELL_CMD__TERMINAL_SESSION_NUMBER_SINCE_APP_START: string;
	export const BOOTCLASSPATH: string;
	export const OTEL_EXPORTER_OTLP_METRICS_TEMPORALITY_PREFERENCE: string;
	export const npm_execpath: string;
	export const TERMUX_APP__APK_RELEASE: string;
	export const NODE_PATH: string;
	export const TERMUX_APP__VERSION_CODE: string;
	export const CLAUDE_CODE_ENTRYPOINT: string;
	export const npm_package_json: string;
	export const ANDROID_TZDATA_ROOT: string;
	export const SHELL_CMD__PACKAGE_NAME: string;
	export const npm_config_noproxy: string;
	export const PATH: string;
	export const npm_config_node_gyp: string;
	export const __NOD_SESS_INIT_SOURCED: string;
	export const FZF_DEFAULT_OPTS: string;
	export const npm_config_global_prefix: string;
	export const ANDROID_ART_ROOT: string;
	export const TERMUX_APP__TARGET_SDK: string;
	export const ANDROID_ASSETS: string;
	export const npm_node_execpath: string;
	export const OLDPWD: string;
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
		npm_config_yes: string;
		npm_config_userconfig: string;
		COLORTERM: string;
		__HM_SESS_VARS_SOURCED: string;
		npm_config_cache: string;
		TERMUX_APP__USER_ID: string;
		PREFIX: string;
		NODE: string;
		NODE_OPTIONS: string;
		UV_USE_IO_URING: string;
		TERMUX_APP__UID: string;
		SHELL_CMD__RUNNER_NAME: string;
		MALLOC_ARENA_MAX: string;
		TERMUX_APP__PACKAGE_NAME: string;
		TERMUX_APP__SE_PROCESS_CONTEXT: string;
		TERMUX_APP__VERSION_NAME: string;
		TERMUX_APP__APK_PATH: string;
		COLOR: string;
		LOCALE_ARCHIVE_2_27: string;
		npm_config_local_prefix: string;
		npm_config_globalconfig: string;
		TERMUX_APP__IS_INSTALLED_ON_EXTERNAL_STORAGE: string;
		EDITOR: string;
		TERMUX_APP__PACKAGE_VARIANT: string;
		PWD: string;
		NIX_PROFILES: string;
		PROOT_TMP_DIR: string;
		NIX_PATH: string;
		npm_config_init_module: string;
		TERMUX_APP__FILES_DIR: string;
		_: string;
		NoDefaultCurrentDirectoryInExePath: string;
		TERMUX_VERSION: string;
		TERMUX_APP__SE_INFO: string;
		CLAUDECODE: string;
		SYSTEMSERVERCLASSPATH: string;
		EXTERNAL_STORAGE: string;
		LD_PRELOAD: string;
		HOME: string;
		LANG: string;
		SHELL_CMD__TERMINAL_SESSION_NUMBER_SINCE_BOOT: string;
		TERMUX_APP__PID: string;
		TERMUX_APP__PACKAGE_MANAGER: string;
		npm_package_version: string;
		GC_NPROCS: string;
		NIX_SSL_CERT_FILE: string;
		DEX2OATBOOTCLASSPATH: string;
		TMPDIR: string;
		INIT_CWD: string;
		npm_lifecycle_script: string;
		ANDROID_DATA: string;
		TERMUX_APP__AM_SOCKET_SERVER_ENABLED: string;
		npm_config_npm_version: string;
		SHELL_CMD__SHELL_ID: string;
		TERMUX_APP__SE_FILE_CONTEXT: string;
		ANDROID_STORAGE: string;
		TERM: string;
		npm_package_name: string;
		PROOT_L2S_DIR: string;
		npm_config_prefix: string;
		USER: string;
		TERMUX_APP__IS_DEBUGGABLE_BUILD: string;
		ASEC_MOUNTPOINT: string;
		TZDIR: string;
		ANDROID_I18N_ROOT: string;
		npm_lifecycle_event: string;
		SHLVL: string;
		GIT_EDITOR: string;
		ANDROID_ROOT: string;
		MIMALLOC_PAGE_RESET: string;
		LOCALE_ARCHIVE: string;
		CLAUDE_TMP: string;
		MIMALLOC_LARGE_OS_PAGES: string;
		npm_config_user_agent: string;
		SHELL_CMD__TERMINAL_SESSION_NUMBER_SINCE_APP_START: string;
		BOOTCLASSPATH: string;
		OTEL_EXPORTER_OTLP_METRICS_TEMPORALITY_PREFERENCE: string;
		npm_execpath: string;
		TERMUX_APP__APK_RELEASE: string;
		NODE_PATH: string;
		TERMUX_APP__VERSION_CODE: string;
		CLAUDE_CODE_ENTRYPOINT: string;
		npm_package_json: string;
		ANDROID_TZDATA_ROOT: string;
		SHELL_CMD__PACKAGE_NAME: string;
		npm_config_noproxy: string;
		PATH: string;
		npm_config_node_gyp: string;
		__NOD_SESS_INIT_SOURCED: string;
		FZF_DEFAULT_OPTS: string;
		npm_config_global_prefix: string;
		ANDROID_ART_ROOT: string;
		TERMUX_APP__TARGET_SDK: string;
		ANDROID_ASSETS: string;
		npm_node_execpath: string;
		OLDPWD: string;
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
