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
		client: {start:"_app/immutable/entry/start.BTsAod75.js",app:"_app/immutable/entry/app.C7eD1lcM.js",imports:["_app/immutable/entry/start.BTsAod75.js","_app/immutable/chunks/-iLk2tyo.js","_app/immutable/chunks/CFxgbuDx.js","_app/immutable/chunks/-OYE0GWI.js","_app/immutable/entry/app.C7eD1lcM.js","_app/immutable/chunks/CFxgbuDx.js","_app/immutable/chunks/DaMykeKc.js","_app/immutable/chunks/TcwDEmaU.js","_app/immutable/chunks/BWcEFERt.js","_app/immutable/chunks/BuDxADCf.js","_app/immutable/chunks/B1OHHPkl.js"],stylesheets:[],fonts:[],uses_env_dynamic_public:false},
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
