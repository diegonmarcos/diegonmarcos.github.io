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
		client: {start:"_app/immutable/entry/start.BHAFJd4-.js",app:"_app/immutable/entry/app.BbhCBPF6.js",imports:["_app/immutable/entry/start.BHAFJd4-.js","_app/immutable/chunks/CwNDOS1R.js","_app/immutable/chunks/BeyDceIe.js","_app/immutable/chunks/D1mpTHC2.js","_app/immutable/chunks/CI9tqkQd.js","_app/immutable/entry/app.BbhCBPF6.js","_app/immutable/chunks/BeyDceIe.js","_app/immutable/chunks/jjs3inW3.js","_app/immutable/chunks/DUnnsJax.js","_app/immutable/chunks/D1mpTHC2.js","_app/immutable/chunks/B1540Zmh.js","_app/immutable/chunks/C4lkNuRl.js"],stylesheets:[],fonts:[],uses_env_dynamic_public:false},
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
