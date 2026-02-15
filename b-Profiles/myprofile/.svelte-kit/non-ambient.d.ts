
// this file is generated — do not edit it


declare module "svelte/elements" {
	export interface HTMLAttributes<T> {
		'data-sveltekit-keepfocus'?: true | '' | 'off' | undefined | null;
		'data-sveltekit-noscroll'?: true | '' | 'off' | undefined | null;
		'data-sveltekit-preload-code'?:
			| true
			| ''
			| 'eager'
			| 'viewport'
			| 'hover'
			| 'tap'
			| 'off'
			| undefined
			| null;
		'data-sveltekit-preload-data'?: true | '' | 'hover' | 'tap' | 'off' | undefined | null;
		'data-sveltekit-reload'?: true | '' | 'off' | undefined | null;
		'data-sveltekit-replacestate'?: true | '' | 'off' | undefined | null;
	}
}

export {};


declare module "$app/types" {
	export interface AppTypes {
		RouteId(): "/" | "/audio" | "/bio" | "/geo" | "/memory" | "/syslog" | "/visual";
		RouteParams(): {
			
		};
		LayoutParams(): {
			"/": Record<string, never>;
			"/audio": Record<string, never>;
			"/bio": Record<string, never>;
			"/geo": Record<string, never>;
			"/memory": Record<string, never>;
			"/syslog": Record<string, never>;
			"/visual": Record<string, never>
		};
		Pathname(): "/" | "/audio" | "/audio/" | "/bio" | "/bio/" | "/geo" | "/geo/" | "/memory" | "/memory/" | "/syslog" | "/syslog/" | "/visual" | "/visual/";
		ResolvedPathname(): `${"" | `/${string}`}${ReturnType<AppTypes['Pathname']>}`;
		Asset(): "/favicon.ico" | string & {};
	}
}