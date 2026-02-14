export const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["favicon.svg"]),
	mimeTypes: {".svg":"image/svg+xml"},
	_: {
		client: {start:"_app/immutable/entry/start.Br2d86Za.js",app:"_app/immutable/entry/app.BRct8JEi.js",imports:["_app/immutable/entry/start.Br2d86Za.js","_app/immutable/chunks/0UakKImo.js","_app/immutable/chunks/Dyi0cJRJ.js","_app/immutable/chunks/Bs5Te_zd.js","_app/immutable/chunks/DWVVDL2F.js","_app/immutable/chunks/Co4gL7Fm.js","_app/immutable/chunks/DXl8p3-Q.js","_app/immutable/entry/app.BRct8JEi.js","_app/immutable/chunks/Dyi0cJRJ.js","_app/immutable/chunks/IR8sAqcL.js","_app/immutable/chunks/BpHFVdBK.js","_app/immutable/chunks/Co4gL7Fm.js","_app/immutable/chunks/B7AKX-54.js","_app/immutable/chunks/D32J1AuY.js","_app/immutable/chunks/Bs5Te_zd.js","_app/immutable/chunks/OdnnCPwg.js"],stylesheets:[],fonts:[],uses_env_dynamic_public:false},
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
