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
		client: {start:"_app/immutable/entry/start.ZBiAfmda.js",app:"_app/immutable/entry/app.mcsvN_ny.js",imports:["_app/immutable/entry/start.ZBiAfmda.js","_app/immutable/chunks/DEvTkc61.js","_app/immutable/chunks/CT5iHjui.js","_app/immutable/chunks/CBRKw_vw.js","_app/immutable/entry/app.mcsvN_ny.js","_app/immutable/chunks/CT5iHjui.js","_app/immutable/chunks/DTUAH-37.js","_app/immutable/chunks/D3HREAe1.js","_app/immutable/chunks/CBRKw_vw.js","_app/immutable/chunks/0nx_1rOs.js","_app/immutable/chunks/C8ChVqV2.js"],stylesheets:[],fonts:[],uses_env_dynamic_public:false},
		nodes: [
			__memo(() => import('./nodes/0.js')),
			__memo(() => import('./nodes/1.js'))
		],
		remotes: {
			
		},
		routes: [
			
		],
		prerendered_routes: new Set(["/"]),
		matchers: async () => {
			
			return {  };
		},
		server_assets: {}
	}
}
})();
