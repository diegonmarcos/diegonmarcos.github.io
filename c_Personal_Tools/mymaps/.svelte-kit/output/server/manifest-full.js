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
		client: {start:"_app/immutable/entry/start.DxheELvt.js",app:"_app/immutable/entry/app.jZPUAHgO.js",imports:["_app/immutable/entry/start.DxheELvt.js","_app/immutable/chunks/LI97MpaX.js","_app/immutable/chunks/vspoVZMS.js","_app/immutable/chunks/BkQBlPxm.js","_app/immutable/chunks/vu5nP4Q1.js","_app/immutable/chunks/D8MRWppb.js","_app/immutable/chunks/DVLWD1uq.js","_app/immutable/entry/app.jZPUAHgO.js","_app/immutable/chunks/vspoVZMS.js","_app/immutable/chunks/Bx4rsG9H.js","_app/immutable/chunks/Caw1DNdb.js","_app/immutable/chunks/D8MRWppb.js","_app/immutable/chunks/CmO1FvvD.js","_app/immutable/chunks/DlIj0L74.js","_app/immutable/chunks/BkQBlPxm.js","_app/immutable/chunks/aXNa29Nn.js"],stylesheets:[],fonts:[],uses_env_dynamic_public:false},
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
