

export const index = 0;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_layout.svelte.js')).default;
export const universal = {
  "prerender": true,
  "ssr": false,
  "trailingSlash": "always"
};
export const universal_id = "src/routes/+layout.ts";
export const imports = ["_app/immutable/nodes/0.BEDjR9XE.js","_app/immutable/chunks/CSeKS16j.js","_app/immutable/chunks/DeXqAH--.js","_app/immutable/chunks/CND9m1oG.js","_app/immutable/chunks/DDlZ5aNG.js","_app/immutable/chunks/Cj9FeRj9.js","_app/immutable/chunks/D_cYlnOR.js","_app/immutable/chunks/dac92CIf.js","_app/immutable/chunks/C26topPL.js","_app/immutable/chunks/BUxq1CGj.js","_app/immutable/chunks/BomfAg22.js","_app/immutable/chunks/CCRZcMTb.js"];
export const stylesheets = ["_app/immutable/assets/Icon.DskQ8yDc.css","_app/immutable/assets/0.CwSlqlmD.css"];
export const fonts = [];
