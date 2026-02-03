export const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "mymaps-pro/_app",
	assets: new Set(["favicon.svg"]),
	mimeTypes: {".svg":"image/svg+xml"},
	_: {
		client: {start:"_app/immutable/entry/start.CM1USXma.js",app:"_app/immutable/entry/app.Bcd6aHvO.js",imports:["_app/immutable/entry/start.CM1USXma.js","_app/immutable/chunks/B2qZTTib.js","_app/immutable/chunks/CsEt7wkl.js","_app/immutable/chunks/DHWuI-b2.js","_app/immutable/chunks/BQ5vValz.js","_app/immutable/chunks/BhAN65R9.js","_app/immutable/chunks/CdXDmEGE.js","_app/immutable/entry/app.Bcd6aHvO.js","_app/immutable/chunks/CsEt7wkl.js","_app/immutable/chunks/gAqsdKty.js","_app/immutable/chunks/BsUTZ2wg.js","_app/immutable/chunks/BhAN65R9.js","_app/immutable/chunks/DSfmRzg0.js","_app/immutable/chunks/BO_sHbwD.js","_app/immutable/chunks/DHWuI-b2.js","_app/immutable/chunks/wMiDVtCj.js"],stylesheets:[],fonts:[],uses_env_dynamic_public:false},
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
