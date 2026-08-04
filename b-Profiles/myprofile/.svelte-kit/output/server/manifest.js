export const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["favicon.ico"]),
	mimeTypes: {},
	_: {
		client: {start:"_app/immutable/entry/start.DDZ77TTU.js",app:"_app/immutable/entry/app.Dy4YkTfg.js",imports:["_app/immutable/entry/start.DDZ77TTU.js","_app/immutable/chunks/C6uf3S23.js","_app/immutable/chunks/DeXqAH--.js","_app/immutable/chunks/BzCZRzbh.js","_app/immutable/entry/app.Dy4YkTfg.js","_app/immutable/chunks/DeXqAH--.js","_app/immutable/chunks/CND9m1oG.js","_app/immutable/chunks/CSeKS16j.js","_app/immutable/chunks/DDlZ5aNG.js","_app/immutable/chunks/CCRZcMTb.js","_app/immutable/chunks/dac92CIf.js"],stylesheets:[],fonts:[],uses_env_dynamic_public:false},
		nodes: [
			__memo(() => import('./nodes/0.js')),
			__memo(() => import('./nodes/1.js'))
		],
		remotes: {
			
		},
		routes: [
			
		],
		prerendered_routes: new Set(["/","/audio/","/bio/","/geo/","/memory/","/syslog/","/visual/"]),
		matchers: async () => {
			
			return {  };
		},
		server_assets: {}
	}
}
})();
