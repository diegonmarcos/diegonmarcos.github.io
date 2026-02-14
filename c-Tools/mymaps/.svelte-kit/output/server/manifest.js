export const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["favicon.svg"]),
	mimeTypes: {".svg":"image/svg+xml"},
	_: {
		client: {start:"_app/immutable/entry/start.CQ_51l1N.js",app:"_app/immutable/entry/app.BASQe1j9.js",imports:["_app/immutable/entry/start.CQ_51l1N.js","_app/immutable/chunks/DSZnI5l_.js","_app/immutable/chunks/BSqcXsmM.js","_app/immutable/chunks/B69dQJDB.js","_app/immutable/chunks/D1Gr2jRS.js","_app/immutable/chunks/QGu8DR6T.js","_app/immutable/chunks/D7RmcINs.js","_app/immutable/entry/app.BASQe1j9.js","_app/immutable/chunks/BSqcXsmM.js","_app/immutable/chunks/hNxkNSV9.js","_app/immutable/chunks/DTA30TDk.js","_app/immutable/chunks/QGu8DR6T.js","_app/immutable/chunks/01WRiMFs.js","_app/immutable/chunks/NWNhCqId.js","_app/immutable/chunks/B69dQJDB.js","_app/immutable/chunks/UQwkWiHW.js"],stylesheets:[],fonts:[],uses_env_dynamic_public:false},
		nodes: [
			__memo(() => import('./nodes/0.js')),
			__memo(() => import('./nodes/1.js')),
			__memo(() => import('./nodes/3.js'))
		],
		remotes: {
			
		},
		routes: [
			{
				id: "/place/[id]",
				pattern: /^\/place\/([^/]+?)\/?$/,
				params: [{"name":"id","optional":false,"rest":false,"chained":false}],
				page: { layouts: [0,], errors: [1,], leaf: 2 },
				endpoint: null
			}
		],
		prerendered_routes: new Set(["/","/settings/"]),
		matchers: async () => {
			
			return {  };
		},
		server_assets: {}
	}
}
})();
