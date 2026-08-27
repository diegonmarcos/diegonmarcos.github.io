export const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "_app",
	assets: new Set([]),
	mimeTypes: {},
	_: {
		client: {start:"_app/immutable/entry/start.DNXDam-Y.js",app:"_app/immutable/entry/app.CnELR1FE.js",imports:["_app/immutable/entry/start.DNXDam-Y.js","_app/immutable/chunks/CdJb-T5W.js","_app/immutable/chunks/rnULtISp.js","_app/immutable/chunks/CEMNzUZZ.js","_app/immutable/entry/app.CnELR1FE.js","_app/immutable/chunks/rnULtISp.js","_app/immutable/chunks/PbSXGiyl.js","_app/immutable/chunks/C8SwF1nt.js","_app/immutable/chunks/CEMNzUZZ.js","_app/immutable/chunks/CJlHfTV4.js","_app/immutable/chunks/DM6dy9g1.js"],stylesheets:[],fonts:[],uses_env_dynamic_public:false},
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
