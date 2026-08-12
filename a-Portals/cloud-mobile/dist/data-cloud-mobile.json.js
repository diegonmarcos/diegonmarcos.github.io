// GENERATED FROM cloud-mobile.json by front-data-json-js-wrapper.sh — DO NOT EDIT BY HAND.
// Re-generate with: bash a-Portals/linktree/src/data/build.sh
(function () {
  var g = (typeof globalThis !== "undefined") ? globalThis : (typeof window !== "undefined" ? window : this);
  g.PORTAL_DATA = g.PORTAL_DATA || {};
  g.PORTAL_DATA["cloud-mobile"] = {
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
  "sections": {
    "home": {
      "label": "Home",
      "icon": "home",
      "color": "blue"
    },
    "communication": {
      "label": "Inboxes",
      "icon": "chat",
      "color": "green",
      "aggregator": true,
      "tiles": [
        { "id": "mail", "label": "Mail", "icon": "mail", "target": "mail" },
        { "id": "chat-matrix", "label": "Chat · Matrix", "icon": "chat", "target": "chat" },
        { "id": "chat-mm", "label": "Chat · Mattermost", "icon": "chat", "target": "chat" }
      ]
    },
    "infos": {
      "label": "Infos",
      "icon": "logs",
      "color": "purple",
      "aggregator": true,
      "tiles": [
        { "id": "cal", "label": "Calendar", "icon": "calendar", "target": "calendar" },
        { "id": "rss", "label": "RSS feeds", "icon": "rss", "target": "rss" },
        { "id": "wf-cal", "label": "Workflows cal", "icon": "workflow" },
        { "id": "gha", "label": "GHA events", "icon": "workflow" },
        { "id": "dagu", "label": "Dagu events", "icon": "workflow" },
        { "id": "ntfy", "label": "C3 ntfy", "icon": "bell" },
        { "id": "c3-health", "label": "C3 health", "icon": "heart" },
        { "id": "wg-mesh", "label": "WG mesh", "icon": "mesh" }
      ]
    },
    "suite": {
      "label": "Suite",
      "icon": "suite",
      "color": "orange",
      "aggregator": true,
      "tiles": [
        { "id": "ai", "label": "AI", "icon": "robot" },
        { "id": "comms", "label": "Comms", "icon": "chat", "target": "chat" },
        { "id": "data-apps", "label": "Data Apps", "icon": "database" },
        { "id": "tools-primary", "label": "Tools Primary", "icon": "tools" },
        { "id": "tools-dash", "label": "Tools Dashboard", "icon": "chart" }
      ]
    },
    "tools": {
      "label": "Labs",
      "icon": "tools",
      "color": "teal",
      "aggregator": true,
      "tiles": [
        { "id": "c3", "label": "C3", "icon": "cube" },
        { "id": "data-ml", "label": "Data & ML", "icon": "brain" },
        { "id": "eng", "label": "Engineering", "icon": "code" },
        { "id": "quant", "label": "Quant & Markets", "icon": "chart" },
        { "id": "aero", "label": "Aero & Space", "icon": "rocket" },
        { "id": "circus", "label": "Circus", "icon": "sparkles" }
      ]
    },
    "mail": {
      "label": "Mail",
      "icon": "mail",
      "color": "blue",
      "pages": ["Folders", "Inbox", "Accounts", "Identities", "Rules", "Answers", "Contacts", "Settings"]
    },
    "rss": {
      "label": "RSS",
      "icon": "rss",
      "color": "amber",
      "pages": ["All feeds", "Unread", "Saved", "Subscriptions", "+ Subscribe", "Settings"]
    },
    "calendar": {
      "label": "Calendar",
      "icon": "calendar",
      "color": "green",
      "pages": ["Day", "Week", "Month", "Agenda", "Calendars", "+ Add CalDAV", "Settings"]
    },
    "drive": {
      "label": "Drive",
      "icon": "database",
      "color": "indigo",
      "pages": ["My files", "Photos", "Connections", "Recent", "Shared", "Trash", "Backups", "+ Upload", "Settings"]
    },
    "vault": {
      "label": "Vault",
      "icon": "lock",
      "color": "pink",
      "pages": ["Passwords", "TOTP", "Generator", "Identities", "Vaults", "Settings"]
    },
    "chat": {
      "label": "Chat",
      "icon": "chat",
      "color": "teal",
      "pages": ["Mattermost", "Matrix-Bridges", "Direct messages", "Channels", "Servers", "+ Add server", "Settings"]
    },
    "wg": {
      "label": "WG",
      "icon": "mesh",
      "color": "amber",
      "pages": ["WireGuard"]
    },
    "solutions": {
      "label": "Solutions",
      "icon": "briefcase",
      "color": "purple",
      "pages": ["Professional", "Personal"]
    },
    "config": {
      "label": "Configs",
      "icon": "settings",
      "color": "blue",
      "pages": ["Order", "Operations", "Logs", "Certificates", "Legend", "About"]
    }
  }
}
;
})();
