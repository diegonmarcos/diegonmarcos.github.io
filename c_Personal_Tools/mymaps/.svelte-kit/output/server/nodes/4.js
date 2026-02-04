

export const index = 4;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/settings/_page.svelte.js')).default;
export const universal = {
  "trailingSlash": "always",
  "prerender": true,
  "ssr": false
};
export const universal_id = "src/routes/settings/+page.ts";
export const imports = ["_app/immutable/nodes/4.BxcxNqD_.js","_app/immutable/chunks/Caw1DNdb.js","_app/immutable/chunks/vspoVZMS.js","_app/immutable/chunks/Cf6CUyyp.js","_app/immutable/chunks/Bx4rsG9H.js","_app/immutable/chunks/CmO1FvvD.js","_app/immutable/chunks/DlIj0L74.js","_app/immutable/chunks/BkQBlPxm.js","_app/immutable/chunks/NLOkJi2Q.js","_app/immutable/chunks/0n6Vdrcu.js","_app/immutable/chunks/wtnrgyJl.js"];
export const stylesheets = [];
export const fonts = [];
