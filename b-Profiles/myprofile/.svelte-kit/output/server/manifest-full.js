export const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["favicon.ico"]),
	mimeTypes: {},
	_: {
		client: {start:"_app/immutable/entry/start.BFfkgqK6.js",app:"_app/immutable/entry/app.Xzmubf6x.js",imports:["_app/immutable/entry/start.BFfkgqK6.js","_app/immutable/chunks/BhKYKdMs.js","_app/immutable/chunks/Du0EjBT8.js","_app/immutable/chunks/DH1vMWid.js","_app/immutable/entry/app.Xzmubf6x.js","_app/immutable/chunks/Du0EjBT8.js","_app/immutable/chunks/poDlVxfP.js","_app/immutable/chunks/nFcBeTHs.js","_app/immutable/chunks/D3pXm4t4.js","_app/immutable/chunks/D_d1iZD_.js","_app/immutable/chunks/3gf1Qcw4.js"],stylesheets:[],fonts:[],uses_env_dynamic_public:false},
		nodes: [
			__memo(() => import('./nodes/0.js')),
			__memo(() => import('./nodes/1.js')),
			__memo(() => import('./nodes/2.js')),
			__memo(() => import('./nodes/3.js')),
			__memo(() => import('./nodes/4.js')),
			__memo(() => import('./nodes/5.js')),
			__memo(() => import('./nodes/6.js')),
			__memo(() => import('./nodes/7.js')),
			__memo(() => import('./nodes/8.js'))
		],
		remotes: {
			
		},
		routes: [
			{
				id: "/",
				pattern: /^\/$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 2 },
				endpoint: null
			},
			{
				id: "/audio",
				pattern: /^\/audio\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 3 },
				endpoint: null
			},
			{
				id: "/bio",
				pattern: /^\/bio\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 4 },
				endpoint: null
			},
			{
				id: "/geo",
				pattern: /^\/geo\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 5 },
				endpoint: null
			},
			{
				id: "/memory",
				pattern: /^\/memory\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 6 },
				endpoint: null
			},
			{
				id: "/syslog",
				pattern: /^\/syslog\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 7 },
				endpoint: null
			},
			{
				id: "/visual",
				pattern: /^\/visual\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 8 },
				endpoint: null
			}
		],
		prerendered_routes: new Set([]),
		matchers: async () => {
			
			return {  };
		},
		server_assets: {}
	}
}
})();
