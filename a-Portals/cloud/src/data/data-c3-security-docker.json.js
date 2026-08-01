// GENERATED FROM c3-security-docker.json by front-data-json-js-wrapper.sh — DO NOT EDIT BY HAND.
// Re-generate with: bash a-Portals/linktree/src/data/build.sh
(function () {
  var g = (typeof globalThis !== "undefined") ? globalThis : (typeof window !== "undefined" ? window : this);
  g.PORTAL_DATA = g.PORTAL_DATA || {};
  g.PORTAL_DATA["c3-security-docker"] = {
  "vm": "oci-apps",
  "checks": [
    {
      "check": "no-new-privileges",
      "status": "ok"
    },
    {
      "check": "read-only-rootfs",
      "status": "warn",
      "detail": "3 containers writable"
    }
  ]
};
})();
