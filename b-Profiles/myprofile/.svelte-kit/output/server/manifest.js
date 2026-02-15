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
		client: {start:"_app/immutable/entry/start.BFfkgqK6.js",app:"_app/immutable/entry/app.Xzmubf6x.js",imports:["_app/immutable/entry/start.BFfkgqK6.js","_app/immutable/chunks/BhKYKdMs.js","_app/immutable/chunks/Du0EjBT8.js","_app/immutable/chunks/DH1vMWid.js","_app/immutable/entry/app.Xzmubf6x.js","_app/immutable/chunks/Du0EjBT8.js","_app/immutable/chunks/poDlVxfP.js","_app/immutable/chunks/nFcBeTHs.js","_app/immutable/chunks/D3pXm4t4.js","_app/immutable/chunks/D_d1iZD_.js","_app/immutable/chunks/3gf1Qcw4.js"],stylesheets:[],fonts:[],uses_env_dynamic_public:false},
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
