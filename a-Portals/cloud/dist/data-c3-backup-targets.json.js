// GENERATED FROM c3-backup-targets.json by front-data-json-js-wrapper.sh — DO NOT EDIT BY HAND.
// Re-generate with: bash a-Portals/linktree/src/data/build.sh
(function () {
  var g = (typeof globalThis !== "undefined") ? globalThis : (typeof window !== "undefined" ? window : this);
  g.PORTAL_DATA = g.PORTAL_DATA || {};
  g.PORTAL_DATA["c3-backup-targets"] = {
  "_generated": "2026-08-01T09:00:00Z",
  "targets": [
    {
      "service": "gitea",
      "vm": "oci-apps",
      "volumes": [
        "gitea-data"
      ],
      "schedule": "0 3 * * *",
      "retention": "30d"
    },
    {
      "service": "vaultwarden",
      "vm": "oci-apps",
      "volumes": [
        "vw-data"
      ],
      "schedule": "0 3 * * *",
      "retention": "30d"
    }
  ]
};
})();
