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
		client: {start:"_app/immutable/entry/start.C-5nu0c_.js",app:"_app/immutable/entry/app.BC5BjNQ3.js",imports:["_app/immutable/entry/start.C-5nu0c_.js","_app/immutable/chunks/Bu0dsqhi.js","_app/immutable/chunks/eaivgScB.js","_app/immutable/chunks/BsAFl5li.js","_app/immutable/entry/app.BC5BjNQ3.js","_app/immutable/chunks/BhiJYi62.js","_app/immutable/chunks/eaivgScB.js","_app/immutable/chunks/IwKa-ZeH.js","_app/immutable/chunks/C2jshoP2.js","_app/immutable/chunks/BsAFl5li.js","_app/immutable/chunks/D43Ukwrx.js"],stylesheets:[],fonts:[],uses_env_dynamic_public:false},
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
