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
		client: {start:"_app/immutable/entry/start.BuI88gcF.js",app:"_app/immutable/entry/app.DyXGX4b_.js",imports:["_app/immutable/entry/start.BuI88gcF.js","_app/immutable/chunks/By_yprz5.js","_app/immutable/chunks/vspoVZMS.js","_app/immutable/chunks/BkQBlPxm.js","_app/immutable/chunks/C1i15IHn.js","_app/immutable/chunks/D8MRWppb.js","_app/immutable/chunks/B4qfw0Ht.js","_app/immutable/entry/app.DyXGX4b_.js","_app/immutable/chunks/vspoVZMS.js","_app/immutable/chunks/Bx4rsG9H.js","_app/immutable/chunks/Caw1DNdb.js","_app/immutable/chunks/D8MRWppb.js","_app/immutable/chunks/CmO1FvvD.js","_app/immutable/chunks/DlIj0L74.js","_app/immutable/chunks/BkQBlPxm.js","_app/immutable/chunks/aXNa29Nn.js"],stylesheets:[],fonts:[],uses_env_dynamic_public:false},
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
