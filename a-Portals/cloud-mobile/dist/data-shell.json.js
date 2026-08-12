// GENERATED FROM shell.json by front-data-json-js-wrapper.sh — DO NOT EDIT BY HAND.
// Re-generate with: bash a-Portals/linktree/src/data/build.sh
(function () {
  var g = (typeof globalThis !== "undefined") ? globalThis : (typeof window !== "undefined" ? window : this);
  g.PORTAL_DATA = g.PORTAL_DATA || {};
  g.PORTAL_DATA["shell"] = {
  "_doc": "App-wide shell data: identity, bottom nav order, the 3 radial star menus, and the home cube. Split out from section content (sections-core.json / sections-content.json) so each file matches one real concern, mirroring the app's own libs/ separation instead of one monolith.",
  "app": {
    "name": "Cloud SuperApp",
    "build": "cloud-mobile · web",
    "user": {
      "name": "Diego Coelho Marcos",
      "email": "me@diegonmarcos.com",
      "initials": "DCM",
      "mode": "Apps"
    }
  },
  "bottomNav": ["communication", "infos", "home", "suite", "tools"],
  "cube": {
    "_doc": "Home3DFragment — the real default (and only) home screen: a 360dp centered wireframe cube, Canvas-drawn in the app, CSS 3D transforms here. cube_anim (ambient rotation) defaults true; cube_interactive (drag-to-spin) defaults false, so this ships the ambient-only default.",
    "glow": "#B794F4",
    "line": "#E9D8FD",
    "dot": "#7C3AED"
  },
  "stars": {
    "sirius": {
      "nodes": [
        { "id": "home-apps", "label": "Home Apps", "icon": "home", "target": "section:home" },
        { "id": "communication", "label": "Comms", "icon": "chat", "target": "section:communication" },
        { "id": "infos", "label": "Infos", "icon": "logs", "target": "section:infos" },
        { "id": "suite", "label": "Suite", "icon": "suite",
          "children": [
            { "id": "suite-cloud", "label": "Cloud",
              "children": [
                { "id": "cloud-ai", "label": "AI", "target": "section:suite" },
                { "id": "cloud-comms", "label": "Communications", "target": "section:suite" },
                { "id": "cloud-data", "label": "Data Apps", "target": "section:suite" },
                { "id": "cloud-tools", "label": "Tools Primary", "target": "section:suite" },
                { "id": "cloud-dash", "label": "Tools Dashboards", "target": "section:suite" }
              ]
            },
            { "id": "suite-phone", "label": "Phone",
              "children": [
                { "id": "phone-home", "label": "Home", "target": "page:suite/phone" },
                { "id": "phone-more", "label": "More", "target": "page:suite/phone/all" }
              ]
            }
          ]
        },
        { "id": "tools", "label": "Labs", "icon": "tools", "target": "section:tools" },
        { "id": "config", "label": "Configs", "icon": "settings", "target": "section:config" }
      ]
    },
    "canopus": { "fixedSection": "config" },
    "centauri": {
      "_doc": "No web equivalent of Android usage-stats — deterministic stand-in list, not truly random (keeps builds reproducible).",
      "recentApps": ["Mail", "Brave", "Mattermost", "Obsidian", "Calendar", "Tidal", "Vault", "Claude", "Settings"]
    }
  },
  "longPress": {
    "_doc": "Bottom-nav long-press fan menus (real app: 380ms hold, PopupWindow anchored above the icon). Home uses a fixed 4-item menu; the other 4 read from each aggregator's own mode toggle.",
    "home": [
      { "id": "home-apps", "label": "Home Apps", "icon": "home", "target": "section:home" },
      { "id": "recent-apps", "label": "Recent Apps", "icon": "cube", "target": null },
      { "id": "tabs", "label": "Tabs", "icon": "suite", "target": "page:apptabs/grid" },
      { "id": "update", "label": "Update", "icon": "refresh", "target": "action:open_update" }
    ]
  },
  "search": {
    "_doc": "SearchSheetFragment — indexes tilesShared + tiles(Apps/Admin) across sections. Reachable via the Home Apps drawer sheet's search pill (the toolbar itself has no search icon).",
    "placeholder": "Search the app…",
    "scopes": [
      { "id": "cloud_apps", "label": "Cloud" },
      { "id": "phone_apps", "label": "Phone" },
      { "id": "cloud_configs", "label": "Configs" },
      { "id": "phone_configs", "label": "Settings" }
    ]
  },
  "notificationCenter": {
    "_doc": "NotificationStore — the app's own event log (crash reports, version-bump notices), not live OS notifications. Normally near-empty in real usage; shipped here with the same 'No notifications yet' placeholder copy as the real fragment.",
    "emptyTitle": "No notifications yet.",
    "emptyBody": "Producers wired:\n• Updater — version-bump on launch\n• Crash — uncaught exceptions"
  },
  "updateOverlay": {
    "title": "Cloud SuperApp",
    "states": {
      "idle": "Up to date",
      "checking": "Checking for updates…",
      "available": "Update available",
      "downloading": "Downloading…",
      "installing": "Installing…",
      "done": "Done"
    }
  }
}
;
})();
