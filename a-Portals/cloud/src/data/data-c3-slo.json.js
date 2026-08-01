// GENERATED FROM c3-slo.json by front-data-json-js-wrapper.sh — DO NOT EDIT BY HAND.
// Re-generate with: bash a-Portals/linktree/src/data/build.sh
(function () {
  var g = (typeof globalThis !== "undefined") ? globalThis : (typeof window !== "undefined" ? window : this);
  g.PORTAL_DATA = g.PORTAL_DATA || {};
  g.PORTAL_DATA["c3-slo"] = {
  "slos": [
    { "vm": "oci-apps", "target": 99.9, "uptimePercent": 99.95, "checks": 4320, "windowHours": 720, "errorBudgetPercent": 0.1, "errorBudgetConsumedPercent": 0.05, "errorBudgetRemainingPercent": 0.05, "errorBudgetRemainingPercentOfBudget": 50, "breached": false },
    { "vm": "oci-db", "target": 99.9, "uptimePercent": 99.82, "checks": 4320, "windowHours": 720, "errorBudgetPercent": 0.1, "errorBudgetConsumedPercent": 0.18, "errorBudgetRemainingPercent": -0.08, "errorBudgetRemainingPercentOfBudget": -80, "breached": true },
    { "vm": "gcp-mesh", "target": 99.5, "uptimePercent": 99.7, "checks": 4320, "windowHours": 720, "errorBudgetPercent": 0.5, "errorBudgetConsumedPercent": 0.3, "errorBudgetRemainingPercent": 0.2, "errorBudgetRemainingPercentOfBudget": 40, "breached": false }
  ]
}
;
})();
