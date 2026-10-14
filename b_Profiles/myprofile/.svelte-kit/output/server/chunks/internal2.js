import { r as root } from "./root.js";
import "./internal.js";
import "./server.js";
let read_implementation = null;
function set_read_implementation(fn) {
  read_implementation = fn;
}
function set_manifest(_) {
}
let public_env = {};
function set_private_env(environment) {
}
function set_public_env(environment) {
  public_env = environment;
}
const error = ({ status, message }) => '<!doctype html>\n<html lang="en">\n	<head>\n		<meta charset="utf-8" />\n		<title>' + message + `</title>

		<style>
			body {
				--bg: white;
				--fg: #222;
				--divider: #ccc;
				background: var(--bg);
				color: var(--fg);
				font-family:
					system-ui,
					-apple-system,
					BlinkMacSystemFont,
					'Segoe UI',
					Roboto,
					Oxygen,
					Ubuntu,
					Cantarell,
					'Open Sans',
					'Helvetica Neue',
					sans-serif;
				display: flex;
				align-items: center;
				justify-content: center;
				height: 100vh;
				margin: 0;
			}

			.error {
				display: flex;
				align-items: center;
				max-width: 32rem;
				margin: 0 1rem;
			}

			.status {
				font-weight: 200;
				font-size: 3rem;
				line-height: 1;
				position: relative;
				top: -0.05rem;
			}

			.message {
				border-left: 1px solid var(--divider);
				padding: 0 0 0 1rem;
				margin: 0 0 0 1rem;
				min-height: 2.5rem;
				display: flex;
				align-items: center;
			}

			.message h1 {
				font-weight: 400;
				font-size: 1em;
				margin: 0;
			}

			@media (prefers-color-scheme: dark) {
				body {
					--bg: #222;
					--fg: #ddd;
					--divider: #666;
				}
			}
		</style>
	</head>
	<body>
		<div class="error">
			<span class="status">` + status + '</span>\n			<div class="message">\n				<h1>' + message + "</h1>\n			</div>\n		</div>\n	</body>\n</html>\n";
const options = {
  app_template_contains_nonce: false,
  async: false,
  csp: { "mode": "auto", "directives": { "upgrade-insecure-requests": false, "block-all-mixed-content": false }, "reportOnly": { "upgrade-insecure-requests": false, "block-all-mixed-content": false } },
  csrf_check_origin: true,
  csrf_trusted_origins: [],
  embedded: false,
  env_public_prefix: "PUBLIC_",
  env_private_prefix: "",
  hash_routing: false,
  hooks: null,
  // added lazily, via `get_hooks`
  preload_strategy: "modulepreload",
  root,
  service_worker: false,
  service_worker_options: void 0,
  server_error_boundaries: false,
  templates: {
    app: ({ head, body, assets, nonce, env }) => '<!DOCTYPE html>\n<html lang="en">\n<head>\n  <meta charset="utf-8" />\n  <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no" />\n  <link rel="icon" href="' + assets + '/favicon.ico" />\n  <link rel="preconnect" href="https://fonts.googleapis.com">\n  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>\n  <link href="https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@400;500;600;700&family=Rajdhani:wght@400;500;600;700&display=swap" rel="stylesheet">\n  <title>Diego Marcos | Profile</title>\n  ' + head + '\n<!-- Umami Analytics -->\n<script defer src="https://analytics.diegonmarcos.com/umami/script.js" data-website-id="937cbde7-5ec2-450c-9d6a-8117423ac12f"><\/script>\n<!-- End Umami Analytics -->\n</head>\n<body data-sveltekit-preload-data="hover">\n  <div style="display: contents">' + body + `</div>
  <!-- Matomo Tag Manager -->
  <script>
  var _mtm = window._mtm = window._mtm || [];
  _mtm.push({'mtm.startTime': (new Date().getTime()), 'event': 'mtm.Start'});
  (function() {
    var d=document, g=d.createElement('script'), s=d.getElementsByTagName('script')[0];
    g.async=true; g.src='https://analytics.diegonmarcos.com/matomo/js/container_odwLIyPV.js';
    s.parentNode.insertBefore(g,s);
  })();
  <\/script>
<!-- ═══ Bottom nav — shared theme-switch pattern (same as mySocials/myTrackers/DMs) ═══ -->
  <div class="theme-switch" id="theme-switch">
    <div class="theme-switch__row theme-switch__row--hubs">
      <a class="theme-switch__label theme-switch__hub-link" href="/myprofile" rel="external" style="opacity:1;font-weight:700">myProfile</a><span class="theme-switch__label"> :</span>
      <a class="theme-switch__hub-link" href="/DMs" rel="external">DMs</a>
      <span class="theme-switch__divider">|</span>
      <a class="theme-switch__hub-link" href="/mySocials" rel="external">mySocials</a>
      <span class="theme-switch__divider">|</span>
      <a class="theme-switch__hub-link" href="/myTrackers" rel="external">myTrackers</a>
    </div>
  </div>
  <style>
    .theme-switch {
      position: fixed; bottom: 18px; left: 50%; transform: translateX(-50%);
      z-index: 99999;
      display: flex; flex-direction: column; gap: 1px;
      padding: 4px 6px;
      background: rgba(20, 22, 34, 0.92);
      border: 1px solid rgba(255, 255, 255, 0.12);
      border-radius: 16px;
      backdrop-filter: blur(8px);
      box-shadow: 0 6px 24px rgba(0, 0, 0, 0.4);
      max-width: calc(100vw - 24px);
    }
    .theme-switch__row {
      display: flex; align-items: center; gap: 1px;
      overflow-x: auto; scrollbar-width: none;
    }
    .theme-switch__row::-webkit-scrollbar { display: none; }
    .theme-switch__row--hubs {
      border-bottom: 1px solid rgba(255, 255, 255, 0.08);
      font-size: 0.72rem; color: rgba(255, 255, 255, 0.5);
      padding-bottom: 6px; margin-bottom: 4px;
      display: flex; align-items: center; gap: 4px; flex-wrap: wrap;
    }
    .theme-switch__label {
      color: inherit; font-size: 0.72rem; font-weight: 600;
      text-decoration: none; padding: 2px 6px; border-radius: 6px;
    }
    .theme-switch__hub-link {
      color: inherit; text-decoration: none; opacity: 0.6;
      font-size: 0.72rem; font-weight: 600; padding: 2px 6px; border-radius: 6px;
    }
    .theme-switch__hub-link--active { opacity: 1; color: #fff; background: rgba(255,255,255,0.1); }
    .theme-switch__hub-link:hover { color: #fff; text-decoration: none; }
    .theme-switch__divider { color: rgba(255,255,255,0.3); font-size: 0.72rem; padding: 0 2px; }
  </style>
</body>
</html>
`,
    error
  },
  version_hash: "1nge73z"
};
async function get_hooks() {
  let handle;
  let handleFetch;
  let handleError;
  let handleValidationError;
  let init;
  let reroute;
  let transport;
  return {
    handle,
    handleFetch,
    handleError,
    handleValidationError,
    init,
    reroute,
    transport
  };
}
export {
  set_public_env as a,
  set_read_implementation as b,
  set_manifest as c,
  get_hooks as g,
  options as o,
  public_env as p,
  read_implementation as r,
  set_private_env as s
};
