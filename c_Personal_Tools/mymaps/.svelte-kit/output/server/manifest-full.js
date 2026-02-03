export const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "mymaps/_app",
	assets: new Set(["favicon.svg"]),
	mimeTypes: {".svg":"image/svg+xml"},
	_: {
		client: {start:"_app/immutable/entry/start.Cv2NC7Ob.js",app:"_app/immutable/entry/app.BCl75aZ5.js",imports:["_app/immutable/entry/start.Cv2NC7Ob.js","_app/immutable/chunks/fP1z-QxD.js","_app/immutable/chunks/asKwNPUx.js","_app/immutable/chunks/BZCT7ppd.js","_app/immutable/chunks/Z4_l6nNT.js","_app/immutable/chunks/Dl1iZ6KQ.js","_app/immutable/chunks/BMRHAAWg.js","_app/immutable/entry/app.BCl75aZ5.js","_app/immutable/chunks/asKwNPUx.js","_app/immutable/chunks/DhYG5ZPg.js","_app/immutable/chunks/CZqZxQ13.js","_app/immutable/chunks/Dl1iZ6KQ.js","_app/immutable/chunks/CuBdEQPs.js","_app/immutable/chunks/Dno6Q1ME.js","_app/immutable/chunks/BZCT7ppd.js","_app/immutable/chunks/nxaZ-_5b.js"],stylesheets:[],fonts:[],uses_env_dynamic_public:false},
		nodes: [
			__memo(() => import('./nodes/0.js')),
			__memo(() => import('./nodes/1.js')),
			__memo(() => import('./nodes/2.js')),
			__memo(() => import('./nodes/3.js')),
			__memo(() => import('./nodes/4.js'))
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
				id: "/place/[id]",
				pattern: /^\/place\/([^/]+?)\/?$/,
				params: [{"name":"id","optional":false,"rest":false,"chained":false}],
				page: { layouts: [0,], errors: [1,], leaf: 3 },
				endpoint: null
			},
			{
				id: "/settings",
				pattern: /^\/settings\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 4 },
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
