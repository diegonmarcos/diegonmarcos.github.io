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
  "statusBar": {
    "_doc": "LauncherStatusStripView — real device metrics (RAM/storage/CPU/battery/radio state) with no web equivalent, so left/right clusters are static mock values; the center clock is genuinely live (real Date, updated client-side).",
    "left": [
      { "label": "5G", "active": true }, { "label": "WiFi", "active": true },
      { "label": "WG", "active": true }, { "label": "KDE", "active": false }, { "label": "BT", "active": true },
      { "label": "USB", "active": false }
    ],
    "right": [
      { "label": "R", "value": "62%" }, { "label": "S", "value": "48%" },
      { "label": "C", "value": "17%" }, { "label": "BAT", "value": "84%" }
    ]
  },
  "cube": {
    "_doc": "Home3DFragment — the real default (and only) home screen: a 360dp centered wireframe cube, Canvas-drawn in the app, CSS 3D transforms here. cube_anim (ambient rotation) defaults true; cube_interactive (drag-to-spin) defaults false, so this ships the ambient-only default.",
    "glow": "#B794F4",
    "line": "#E9D8FD",
    "dot": "#7C3AED"
  },
  "stars": {
    "sirius": {
      "nodes": [
        { "id": "home-apps", "label": "Home Apps", "icon": "home", "target": "page:home-apps" },
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
                { "id": "phone-home", "label": "Home", "target": "page:suite/phone/quickmarks" },
                { "id": "phone-more", "label": "More", "target": "page:suite/phone/quickmarks" }
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
      "_doc": "No web equivalent of Android usage-stats — deterministic stand-in list, not truly random (keeps builds reproducible). Stays plain strings here (not {name,icon} objects): scripts/generate-pages.mjs's own avatarTileHtml() also reads this exact array (Recent Apps grid page) and expects a bare string name — see stars.ts's RECENT_APP_ICONS for where the icon lookup actually lives.",
      "recentApps": ["Mail", "Brave", "Mattermost", "Obsidian", "Calendar", "Tidal", "Vault", "Claude", "Settings"]
    }
  },
  "onehand": {
    "_doc": "Sirius one-hand edge menus — two vertical grab-bar handles (left/right, 5 sectors each) that fan open a small arc menu on an inward swipe. See src/lib/onehand/edge-menu.ts.",
    "handles": [
      {
        "edge": "right",
        "sectors": {
          "top": { "label": "WhatsApp Business" },
          "top_middle": { "label": "Google Translate" },
          "center": { "label": "Back", "action": "back" },
          "down_middle": { "label": "Obsidian" },
          "down": { "label": "Instagram" }
        }
      },
      {
        "edge": "left",
        "sectors": {
          "top": { "label": "Bitwarden" },
          "top_middle": { "label": "Brave" },
          "center": { "label": "Back", "action": "back" },
          "down_middle": { "label": "Gemini" },
          "down": { "label": "Google Maps" }
        }
      }
    ],
    "defaults": { "length_dp": 220, "thickness_dp": 32, "swipe_threshold_dp": 24 }
  },
  "longPress": {
    "_doc": "Bottom-nav long-press fan menus (real app: 380ms hold, PopupWindow anchored above the icon). Home uses a fixed 4-item menu; communication/infos/tools read from each's Apps|Admin mode toggle; suite reads its own Cloud|Phone|More set.",
    "home": [
      { "id": "home-apps", "label": "Home Apps", "icon": "home", "target": "page:home-apps" },
      { "id": "recent-apps", "label": "Recent Apps", "icon": "cube", "target": "page:recentapps/grid" },
      { "id": "tabs", "label": "Tabs", "icon": "suite", "target": "page:apptabs/grid" },
      { "id": "update", "label": "Update", "icon": "refresh", "target": "action:check_updates" }
    ],
    "communication": [
      { "id": "apps", "label": "Apps", "icon": "chat", "target": "section:communication" },
      { "id": "admin", "label": "Admin", "icon": "workflow", "target": "page:communication/admin" }
    ],
    "infos": [
      { "id": "apps", "label": "Apps", "icon": "logs", "target": "section:infos" },
      { "id": "admin", "label": "Admin", "icon": "workflow", "target": "page:infos/admin" }
    ],
    "suite": [
      { "id": "cloud", "label": "Cloud", "icon": "suite", "target": "page:suite/cloud/quickmarks" },
      { "id": "phone", "label": "Phone", "icon": "phone", "target": "page:suite/phone/quickmarks" },
      { "id": "more", "label": "More", "icon": "more", "target": "page:suite/phone/quickmarks" }
    ],
    "tools": [
      { "id": "apps", "label": "Apps", "icon": "tools", "target": "section:tools" },
      { "id": "admin", "label": "Admin", "icon": "workflow", "target": "page:tools/admin" }
    ]
  },
  "notificationCenter": {
    "_doc": "NotificationStore — the app's own event log (crash reports, version-bump notices), not live OS notifications. Normally near-empty in real usage; shipped here with the same 'No notifications yet' placeholder copy as the real fragment. groups is the Android-parity grouped mock feed (Cloud SA · Alerts / Cloud SA · Comms / Cloud / App) rendered when non-empty; the empty state above still ships as the fallback when groups is absent/empty.",
    "emptyTitle": "No notifications yet.",
    "emptyBody": "Producers wired:\n• Updater — version-bump on launch\n• Crash — uncaught exceptions",
    "groups": [
      { "title": "Cloud SA · Alerts", "items": [
          { "title": "WG handshake ok · gcp-proxy" },
          { "title": "Fleet check: 10/10 healthy" }
        ] },
      { "title": "Cloud SA · Comms", "items": [
          { "title": "12 unread · Mail" },
          { "title": "Mattermost mention · @diego in #ops" }
        ] },
      { "title": "Cloud", "items": [
          { "title": "Constellation update available" }
        ] },
      { "title": "App", "items": [
          { "title": "Update installed · 20260812" }
        ] }
    ]
  },
  "footer": {
    "_doc": "Global site footer — Google-Play-style APK download badge + the 13-app Constellation fleet as small glass chips, rendered by scripts/generate-pages.mjs's footerHtml() on every generated page.",
    "apk": { "label": "Cloud SuperApp", "sub": "Download APK · arm64", "url": "https://github.com/diegonmarcos/unix/releases/latest/download/Cloud-SuperApp.apk" },
    "constellation": [
      { "id": "cloud-mail", "label": "Mail", "url": "https://github.com/diegonmarcos/unix/releases/latest/download/cloud-comms-mail.apk" },
      { "id": "cloud-chat", "label": "Chat", "url": "https://github.com/diegonmarcos/unix/releases/latest/download/cloud-comms-chat.apk" },
      { "id": "cloud-matrix", "label": "Messenger", "url": "https://github.com/diegonmarcos/unix/releases/latest/download/cloud-comms-matrix.apk" },
      { "id": "cloud-dialer", "label": "Dialer", "url": "https://github.com/diegonmarcos/unix/releases/latest/download/cloud-comms-dialer.apk" },
      { "id": "cloud-ide", "label": "IDE", "url": "https://github.com/diegonmarcos/unix/releases/latest/download/Cloud-IDE-Hub.apk" },
      { "id": "cloud-nav", "label": "Nav", "url": "https://github.com/diegonmarcos/unix/releases/latest/download/Cloud-Nav.apk" },
      { "id": "cloud-calendar", "label": "Calendar", "url": "https://github.com/diegonmarcos/unix/releases/latest/download/Cloud-Calendar.apk" },
      { "id": "cloud-news", "label": "News", "url": "https://github.com/diegonmarcos/unix/releases/latest/download/Cloud-News.apk" },
      { "id": "cloud-keyboard", "label": "Keyboard", "url": "https://github.com/diegonmarcos/unix/releases/latest/download/Cloud-Keyboard.apk" },
      { "id": "cloud-wallet", "label": "Wallet", "url": "https://github.com/diegonmarcos/unix/releases/latest/download/Cloud-Wallet.apk" },
      { "id": "cloud-browser", "label": "Browser", "url": "https://github.com/diegonmarcos/unix/releases/latest/download/Cloud-Browser.apk" },
      { "id": "cloud-vault", "label": "Vault", "url": "https://github.com/diegonmarcos/unix/releases/latest/download/Cloud-Vault.apk" },
      { "id": "cloud-media-center", "label": "Media", "url": "https://github.com/diegonmarcos/unix/releases/latest/download/cloud-media-center.apk" }
    ]
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
