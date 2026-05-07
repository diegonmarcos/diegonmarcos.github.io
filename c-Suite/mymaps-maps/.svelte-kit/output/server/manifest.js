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
		client: {start:"_app/immutable/entry/start.C63z6ZYM.js",app:"_app/immutable/entry/app.CfWh-x8z.js",imports:["_app/immutable/entry/start.C63z6ZYM.js","_app/immutable/chunks/CzeJ9Ix_.js","_app/immutable/chunks/Dpyu_rjF.js","_app/immutable/chunks/CRtJQ-j6.js","_app/immutable/chunks/BtcyMc6N.js","_app/immutable/entry/app.CfWh-x8z.js","_app/immutable/chunks/Dpyu_rjF.js","_app/immutable/chunks/CWrTRzAU.js","_app/immutable/chunks/C1f7F5bl.js","_app/immutable/chunks/CRtJQ-j6.js","_app/immutable/chunks/MplqOI1w.js","_app/immutable/chunks/DbnDA8bE.js"],stylesheets:[],fonts:[],uses_env_dynamic_public:false},
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
