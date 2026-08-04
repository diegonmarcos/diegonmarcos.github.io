export const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "maps/_app",
	assets: new Set(["favicon.png"]),
	mimeTypes: {".png":"image/png"},
	_: {
		client: {start:"_app/immutable/entry/start.CcCUo31o.js",app:"_app/immutable/entry/app.yVBh1msV.js",imports:["_app/immutable/entry/start.CcCUo31o.js","_app/immutable/chunks/BlewFYej.js","_app/immutable/chunks/qscThlQe.js","_app/immutable/chunks/D5T3xp-A.js","_app/immutable/chunks/DYxb7XP_.js","_app/immutable/entry/app.yVBh1msV.js","_app/immutable/chunks/qscThlQe.js","_app/immutable/chunks/K9m9GUYm.js","_app/immutable/chunks/N6sx6UCI.js","_app/immutable/chunks/D5T3xp-A.js","_app/immutable/chunks/l6kjVSRW.js","_app/immutable/chunks/BaevXjiz.js"],stylesheets:[],fonts:[],uses_env_dynamic_public:false},
		nodes: [
			__memo(() => import('./nodes/0.js')),
			__memo(() => import('./nodes/1.js')),
			__memo(() => import('./nodes/2.js'))
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
