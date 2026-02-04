

export const index = 2;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_page.svelte.js')).default;
export const universal = {
  "trailingSlash": "always",
  "prerender": true,
  "ssr": false
};
export const universal_id = "src/routes/+page.ts";
export const imports = ["_app/immutable/nodes/2.COmeXAWh.js","_app/immutable/chunks/Caw1DNdb.js","_app/immutable/chunks/vspoVZMS.js","_app/immutable/chunks/Cf6CUyyp.js","_app/immutable/chunks/D8MRWppb.js","_app/immutable/chunks/0n6Vdrcu.js","_app/immutable/chunks/C1ojmhOt.js","_app/immutable/chunks/aXNa29Nn.js","_app/immutable/chunks/CmO1FvvD.js","_app/immutable/chunks/DlIj0L74.js","_app/immutable/chunks/BkQBlPxm.js","_app/immutable/chunks/C1i15IHn.js","_app/immutable/chunks/B4qfw0Ht.js","_app/immutable/chunks/Bx4rsG9H.js","_app/immutable/chunks/NLOkJi2Q.js"];
export const stylesheets = [];
export const fonts = [];
