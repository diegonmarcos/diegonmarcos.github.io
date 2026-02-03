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
		client: {start:"_app/immutable/entry/start.1HBB-saR.js",app:"_app/immutable/entry/app.C-aw9FFv.js",imports:["_app/immutable/entry/start.1HBB-saR.js","_app/immutable/chunks/DSFBoWwH.js","_app/immutable/chunks/vspoVZMS.js","_app/immutable/chunks/BkQBlPxm.js","_app/immutable/chunks/nJo2DItL.js","_app/immutable/chunks/D8MRWppb.js","_app/immutable/chunks/CXldghGm.js","_app/immutable/entry/app.C-aw9FFv.js","_app/immutable/chunks/vspoVZMS.js","_app/immutable/chunks/Bx4rsG9H.js","_app/immutable/chunks/Caw1DNdb.js","_app/immutable/chunks/D8MRWppb.js","_app/immutable/chunks/CmO1FvvD.js","_app/immutable/chunks/DlIj0L74.js","_app/immutable/chunks/BkQBlPxm.js","_app/immutable/chunks/aXNa29Nn.js"],stylesheets:[],fonts:[],uses_env_dynamic_public:false},
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
		prerendered_routes: new Set(["/mymaps/","/mymaps/settings"]),
		matchers: async () => {
			
			return {  };
		},
		server_assets: {}
	}
}
})();
