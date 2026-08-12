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
    "home": { "label": "Home", "icon": "home", "color": "blue" },

    "communication": {
      "label": "Inboxes",
      "icon": "chat",
      "color": "green",
      "aggregator": true,
      "tiles": [
        { "id": "mail", "label": "Mail", "icon": "mail", "target": "section:mail" },
        { "id": "chat-matrix", "label": "Chat · Matrix", "icon": "chat", "target": "section:chat" },
        { "id": "chat-mm", "label": "Chat · Mattermost", "icon": "chat", "target": "section:chat" }
      ]
    },

    "infos": {
      "label": "Infos",
      "icon": "logs",
      "color": "purple",
      "aggregator": true,
      "tiles": [
        { "id": "cal", "label": "Calendar", "icon": "calendar", "target": "section:calendar" },
        { "id": "rss", "label": "RSS feeds", "icon": "rss", "target": "section:rss" },
        { "id": "wf-cal", "label": "Workflows cal", "icon": "workflow", "target": "stub:wf-cal" },
        { "id": "gha", "label": "GHA events", "icon": "workflow", "target": "stub:gha" },
        { "id": "dagu", "label": "Dagu events", "icon": "workflow", "target": "stub:dagu" },
        { "id": "ntfy", "label": "C3 ntfy", "icon": "bell", "target": "stub:ntfy" },
        { "id": "c3-health", "label": "C3 health", "icon": "heart", "target": "stub:c3-health" },
        { "id": "wg-mesh", "label": "WG mesh", "icon": "mesh", "target": "section:wg" }
      ]
    },

    "suite": {
      "label": "Suite",
      "icon": "suite",
      "color": "orange",
      "aggregator": true,
      "_doc": "Real app has NO apps/admin split here — it's a 2-tab Cloud/Phone structure (SuiteCloudPhoneTabsFragment). tiles_shared are the home-index shortcuts (all target section:suite itself).",
      "tiles": [
        { "id": "suite-ai", "label": "AI", "icon": "sparkles", "target": "section:suite" },
        { "id": "suite-comms", "label": "Comms", "icon": "chat", "target": "section:suite" },
        { "id": "suite-data", "label": "Data Apps", "icon": "database", "target": "section:suite" },
        { "id": "suite-tools", "label": "Tools Primary", "icon": "tools", "target": "section:suite" },
        { "id": "suite-dash", "label": "Tools Dashboard", "icon": "chart", "target": "section:suite" }
      ],
      "tabs": ["cloud", "phone"],
      "cloud": {
        "footer": { "id": "more-cloud", "label": "More", "icon": "more", "target": "action:open_suite_cloud_all" },
        "tileGroups": [
          {
            "title": "AI",
            "tiles": [
              { "id": "ai-tlg-hermes", "label": "AI-Tlg-Hermes", "icon": "robot", "target": "extapp:cloud-agent-hermes" },
              { "id": "ai-tlg-goose", "label": "AI-Tlg-Goose", "icon": "robot", "target": "extapp:cloud-agent-goose" },
              { "id": "ai-tmx", "label": "AI-Tmx", "icon": "sparkles", "target": "extapp:termux-nix" },
              { "id": "drive", "label": "IDE (Files Editor)", "icon": "code", "target": "extapp:cloud-ide" }
            ]
          },
          {
            "title": "Communications",
            "tiles": [
              { "id": "mail", "label": "Mail", "icon": "mail", "target": "extapp:cloud-mail" },
              { "id": "mattermost", "label": "Chat (Mattermost)", "icon": "chat", "target": "extapp:cloud-chat" },
              { "id": "element", "label": "Messenger (Element)", "icon": "chat", "target": "extapp:cloud-matrix" },
              { "id": "dialer", "label": "Dialer", "icon": "phone", "target": "extapp:cloud-dialer" },
              { "id": "c3-bot", "label": "C3-Bot", "icon": "robot", "target": "extapp:cloud-c3-bot" }
            ]
          },
          {
            "title": "Data Apps",
            "tiles": [
              { "id": "calendar", "label": "Calendar", "icon": "calendar", "target": "extapp:cloud-calendar" },
              { "id": "news", "label": "News", "icon": "rss", "target": "extapp:cloud-news" },
              { "id": "contacts", "label": "Contacts", "icon": "user", "target": "extapp:contacts" },
              { "id": "notes", "label": "Notes (Obsidian)", "icon": "logs", "target": "extapp:obsidian" },
              { "id": "sheets", "label": "Sheets", "icon": "database", "target": "extapp:sheets" },
              { "id": "photos", "label": "Photos", "icon": "photos", "target": "extapp:photos" },
              { "id": "mediacenter", "label": "Media Center", "icon": "photos", "target": "extapp:cloud-media-center" },
              { "id": "music", "label": "Music", "icon": "music", "target": "extapp:tidal" }
            ]
          },
          {
            "title": "Tools Primary",
            "tiles": [
              { "id": "browser", "label": "Browser", "icon": "browser", "target": "extapp:cloud-browser" },
              { "id": "apptabs", "label": "Tabs", "icon": "suite", "target": "page:apptabs/grid" },
              { "id": "wallet", "label": "Wallet", "icon": "wallet", "target": "extapp:cloud-wallet" },
              { "id": "maps", "label": "Navigation", "icon": "pin", "target": "extapp:cloud-nav" },
              { "id": "vault", "label": "Vault", "icon": "lock", "target": "section:vault" }
            ]
          },
          {
            "title": "Tools Dashboards",
            "tiles": [
              { "id": "pmboards", "label": "PM Boards", "icon": "briefcase", "target": "https://paca.diegonmarcos.com" },
              { "id": "myfin", "label": "MyFin", "icon": "chart", "target": "page:myfin/dashboard" },
              { "id": "myhealth", "label": "MyHealth", "icon": "heart", "target": "page:health/summary" },
              { "id": "mydata", "label": "MyData", "icon": "database", "target": "https://diegonmarcos.github.io/my-data/" }
            ]
          }
        ]
      },
      "phone": {
        "footer": { "id": "more-phone", "label": "More", "icon": "more", "target": "action:open_suite_phone_all" },
        "_doc": "Each app carries an icon — real installed-app icons can't be replicated on the web (no equivalent API, and bundling third-party app icons would be a trademark/copyright problem anyway), so each is mapped to the closest fit in our own icon set by category rather than shown as a bare letter avatar.",
        "appGroups": [
          { "title": "AI", "apps": [
              { "name": "Claude", "icon": "sparkles" },
              { "name": "Gemini", "icon": "sparkles" },
              { "name": "Termux", "icon": "code" }
            ], "folders": [
            { "label": "Files Editor (IDE)", "apps": [
                { "name": "X-plore", "icon": "database" },
                { "name": "My Files", "icon": "database" },
                { "name": "Google Docs", "icon": "logs" },
                { "name": "Git Sync", "icon": "workflow" },
                { "name": "Acode", "icon": "code" },
                { "name": "Turbo Editor", "icon": "code" }
              ] }
          ]},
          { "title": "Communications", "apps": [
              { "name": "FairEmail", "icon": "mail" },
              { "name": "K-9 Mail", "icon": "mail" },
              { "name": "Mattermost", "icon": "chat" },
              { "name": "Beeper", "icon": "chat" },
              { "name": "Dialer", "icon": "phone" },
              { "name": "Phone", "icon": "phone" }
            ], "folders": [
            { "label": "Others", "apps": [
                { "name": "Samsung Email", "icon": "mail" },
                { "name": "WhatsApp Business", "icon": "chat" },
                { "name": "Gmail", "icon": "mail" },
                { "name": "Telegram", "icon": "chat" },
                { "name": "Instagram", "icon": "photos" },
                { "name": "LinkedIn", "icon": "briefcase" }
              ] }
          ]},
          { "title": "Data Apps", "apps": [
              { "name": "Obsidian", "icon": "logs" },
              { "name": "Gallery", "icon": "photos" },
              { "name": "Calendar", "icon": "calendar" },
              { "name": "Contacts", "icon": "user" },
              { "name": "Tidal", "icon": "music" },
              { "name": "Bitwarden", "icon": "lock" }
            ] },
          { "title": "Tools Primary", "apps": [
              { "name": "Brave", "icon": "browser" },
              { "name": "News", "icon": "rss" },
              { "name": "Maps", "icon": "pin" },
              { "name": "Wallet", "icon": "wallet" },
              { "name": "Translate", "icon": "chat" },
              { "name": "Clock", "icon": "bell" },
              { "name": "Calculator", "icon": "chart" }
            ] },
          { "title": "Tools Dashboards", "apps": [
              { "name": "Cloud SuperApp", "icon": "home" }
            ] },
          { "title": "Configs", "apps": [
              { "name": "Play Store", "icon": "suite" },
              { "name": "F-Droid", "icon": "suite" },
              { "name": "Settings", "icon": "settings" }
            ] }
        ]
      }
    },

    "tools": {
      "label": "Labs",
      "icon": "tools",
      "color": "teal",
      "aggregator": true,
      "tiles": [
        { "id": "c3", "label": "C3", "icon": "cube", "target": "stub:c3" },
        { "id": "data-ml", "label": "Data & ML", "icon": "brain", "target": "stub:data-ml" },
        { "id": "eng", "label": "Engineering", "icon": "code", "target": "stub:eng" },
        { "id": "quant", "label": "Quant & Markets", "icon": "chart", "target": "stub:quant" },
        { "id": "aero", "label": "Aero & Space", "icon": "rocket", "target": "stub:aero" },
        { "id": "circus", "label": "Circus", "icon": "sparkles", "target": "stub:circus" }
      ]
    },

    "mail": { "label": "Mail", "icon": "mail", "color": "blue",
      "pages": ["Folders", "Inbox", "Accounts", "Identities", "Rules", "Answers", "Contacts", "Settings"] },
    "rss": { "label": "RSS", "icon": "rss", "color": "amber",
      "pages": ["All feeds", "Unread", "Saved", "Subscriptions", "+ Subscribe", "Settings"] },
    "calendar": { "label": "Calendar", "icon": "calendar", "color": "green",
      "pages": ["Day", "Week", "Month", "Agenda", "Calendars", "+ Add CalDAV", "Settings"] },
    "drive": { "label": "Drive", "icon": "database", "color": "indigo",
      "pages": ["My files", "Photos", "Connections", "Recent", "Shared", "Trash", "Backups", "+ Upload", "Settings"] },
    "vault": { "label": "Vault", "icon": "lock", "color": "pink",
      "pages": ["Logins", "TOTP", "Generator", "Identities", "Vaults", "Settings"] },
    "chat": { "label": "Chat", "icon": "chat", "color": "teal",
      "pages": ["Mattermost", "Matrix-Bridges", "Direct messages", "Channels", "Servers", "+ Add server", "Settings"] },
    "wg": { "label": "WG", "icon": "mesh", "color": "amber",
      "pages": ["WireGuard"] },
    "solutions": { "label": "Solutions", "icon": "briefcase", "color": "purple",
      "pages": ["Professional", "Personal"] },

    "apptabs": { "label": "Tabs", "icon": "suite", "color": "teal",
      "_doc": "Suite > Cloud > Tools Primary > Tabs (page:apptabs/grid) — last 6 opened sections/pages, LRU. No real usage history on the web; stub page.",
      "pages": [{ "id": "grid", "label": "Grid" }] },
    "myfin": { "label": "MyFin", "icon": "chart", "color": "green",
      "_doc": "Suite > Cloud > Tools Dashboards > MyFin (page:myfin/dashboard) — native in-app dashboard, not an external link.",
      "pages": [{ "id": "dashboard", "label": "Dashboard" }] },
    "health": { "label": "MyHealth", "icon": "heart", "color": "pink",
      "_doc": "Suite > Cloud > Tools Dashboards > MyHealth (page:health/summary).",
      "pages": [{ "id": "summary", "label": "Summary" }] },

    "config": {
      "label": "Configs",
      "icon": "settings",
      "color": "blue",
      "_doc": "Verbatim 12 pages — this is the fixed content Canopus's arc-menu always shows.",
      "pages": [
        { "id": "profile", "label": "Profile" },
        { "id": "wg", "label": "WireGuard", "target": "section:wg" },
        { "id": "kde", "label": "KDE" },
        { "id": "ai", "label": "AI" },
        { "id": "launcher", "label": "Launcher" },
        { "id": "import", "label": "Import", "target": "action:import_configs" },
        { "id": "keyboard", "label": "Keyboard", "target": "extapp:cloud-keyboard" },
        { "id": "update-all", "label": "Update All" },
        { "id": "constellation", "label": "Constellation" },
        { "id": "onehand", "label": "One-Hand" },
        { "id": "permissions", "label": "Permissions" },
        { "id": "about", "label": "About" }
      ]
    }
  },

  "stars": {
    "_doc": "Real app: press-and-drag radial menus, not tap menus. Sirius = recursive CircularMenu (6 top nodes). Canopus = single-level ArcMenu, hardcoded to always show Configs' 12 pages. Centauri = same ArcMenu component, content = last-9-used apps (no web equivalent — using a generated stand-in list).",
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
  }
}
;
})();
