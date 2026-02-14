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
		client: {start:"_app/immutable/entry/start.BMGj7D1G.js",app:"_app/immutable/entry/app.aVgr7iD8.js",imports:["_app/immutable/entry/start.BMGj7D1G.js","_app/immutable/chunks/BBz07Icr.js","_app/immutable/chunks/BH0XA-ZU.js","_app/immutable/chunks/CblLKELC.js","_app/immutable/chunks/CyuSA9oO.js","_app/immutable/entry/app.aVgr7iD8.js","_app/immutable/chunks/BH0XA-ZU.js","_app/immutable/chunks/CJc-qb04.js","_app/immutable/chunks/DC8EVfpz.js","_app/immutable/chunks/CblLKELC.js","_app/immutable/chunks/Bul1e3B-.js","_app/immutable/chunks/B9h5jyGQ.js"],stylesheets:[],fonts:[],uses_env_dynamic_public:false},
		nodes: [
			__memo(() => import('./nodes/0.js')),
			__memo(() => import('./nodes/1.js'))
		],
		remotes: {
			
		},
		routes: [
			
		],
		prerendered_routes: new Set(["/maps/"]),
		matchers: async () => {
			
			return {  };
		},
		server_assets: {}
	}
}
})();
