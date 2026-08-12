// GENERATED FROM sections-content.json by front-data-json-js-wrapper.sh — DO NOT EDIT BY HAND.
// Re-generate with: bash a-Portals/linktree/src/data/build.sh
(function () {
  var g = (typeof globalThis !== "undefined") ? globalThis : (typeof window !== "undefined" ? window : this);
  g.PORTAL_DATA = g.PORTAL_DATA || {};
  g.PORTAL_DATA["sections-content"] = {
  "_doc": "Suite (its own tiles_shared/tileGroups/appGroups shape, no Apps|Admin tabs) plus every content-only section (mail/rss/calendar/drive/vault/chat/wg/solutions/config). Config carries real per-page row content instead of generic skeletons, since it's a real, fully-enumerable settings screen.",
  "sections": {
    "suite": {
      "label": "Suite", "icon": "suite", "color": "orange",
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
          { "title": "AI", "tiles": [
              { "id": "ai-tlg-hermes", "label": "AI-Tlg-Hermes", "icon": "robot", "target": "extapp:cloud-agent-hermes" },
              { "id": "ai-tlg-goose", "label": "AI-Tlg-Goose", "icon": "robot", "target": "extapp:cloud-agent-goose" },
              { "id": "ai-tmx", "label": "AI-Tmx", "icon": "sparkles", "target": "extapp:termux-nix" },
              { "id": "drive", "label": "IDE (Files Editor)", "icon": "code", "target": "extapp:cloud-ide" }
            ] },
          { "title": "Communications", "tiles": [
              { "id": "mail", "label": "Mail", "icon": "mail", "target": "extapp:cloud-mail" },
              { "id": "mattermost", "label": "Chat (Mattermost)", "icon": "chat", "target": "extapp:cloud-chat" },
              { "id": "element", "label": "Messenger (Element)", "icon": "chat", "target": "extapp:cloud-matrix" },
              { "id": "dialer", "label": "Dialer", "icon": "phone", "target": "extapp:cloud-dialer" },
              { "id": "c3-bot", "label": "C3-Bot", "icon": "robot", "target": "extapp:cloud-c3-bot" }
            ] },
          { "title": "Data Apps", "tiles": [
              { "id": "calendar", "label": "Calendar", "icon": "calendar", "target": "extapp:cloud-calendar" },
              { "id": "news", "label": "News", "icon": "rss", "target": "extapp:cloud-news" },
              { "id": "contacts", "label": "Contacts", "icon": "user", "target": "extapp:contacts" },
              { "id": "notes", "label": "Notes (Obsidian)", "icon": "logs", "target": "extapp:obsidian" },
              { "id": "sheets", "label": "Sheets", "icon": "database", "target": "extapp:sheets" },
              { "id": "photos", "label": "Photos", "icon": "photos", "target": "extapp:photos" },
              { "id": "mediacenter", "label": "Media Center", "icon": "photos", "target": "extapp:cloud-media-center" },
              { "id": "music", "label": "Music", "icon": "music", "target": "extapp:tidal" }
            ] },
          { "title": "Tools Primary", "tiles": [
              { "id": "browser", "label": "Browser", "icon": "browser", "target": "extapp:cloud-browser" },
              { "id": "apptabs", "label": "Tabs", "icon": "suite", "target": "page:apptabs/grid" },
              { "id": "wallet", "label": "Wallet", "icon": "wallet", "target": "extapp:cloud-wallet" },
              { "id": "maps", "label": "Navigation", "icon": "pin", "target": "extapp:cloud-nav" },
              { "id": "vault", "label": "Vault", "icon": "lock", "target": "section:vault" }
            ] },
          { "title": "Tools Dashboards", "tiles": [
              { "id": "pmboards", "label": "PM Boards", "icon": "briefcase", "target": "https://paca.diegonmarcos.com" },
              { "id": "myfin", "label": "MyFin", "icon": "chart", "target": "page:myfin/dashboard" },
              { "id": "myhealth", "label": "MyHealth", "icon": "heart", "target": "page:health/summary" },
              { "id": "mydata", "label": "MyData", "icon": "database", "target": "https://diegonmarcos.github.io/my-data/" }
            ] }
        ]
      }
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
      "pages": [{ "id": "grid", "label": "Grid" }] },
    "myfin": { "label": "MyFin", "icon": "chart", "color": "green",
      "pages": [{ "id": "dashboard", "label": "Dashboard" }] },
    "health": { "label": "MyHealth", "icon": "heart", "color": "pink",
      "pages": [{ "id": "summary", "label": "Summary" }] },

    "config": {
      "label": "Configs", "icon": "settings", "color": "blue",
      "pages": [
        { "id": "profile", "label": "Profile", "rows": [["Name", "Diego Coelho Marcos"], ["Email", "me@diegonmarcos.com"], ["Initials", "DCM"], ["Mode", "Apps"]] },
        { "id": "wg", "label": "WireGuard", "target": "section:wg" },
        { "id": "kde", "label": "KDE", "rows": [["This device", "cloud-mobile · web"], ["Paired devices", "0"], ["Plugins enabled", "0 / 0"]] },
        { "id": "ai", "label": "AI", "rows": [["Default provider", "Claude"], ["API keys configured", "—"], ["Local model", "Off"]] },
        { "id": "launcher", "label": "Launcher", "rows": [["Theme", "Cloud"], ["Cube animation", "On"], ["Cube drag-to-spin", "Off"]] },
        { "id": "import", "label": "Import", "target": "action:import_configs" },
        { "id": "keyboard", "label": "Keyboard", "target": "extapp:cloud-keyboard" },
        { "id": "update-all", "label": "Update All", "rows": [["Cloud SuperApp", "Up to date"], ["Cloud Mail", "Up to date"], ["Cloud Chat", "Up to date"]] },
        { "id": "constellation", "label": "Constellation", "rows": [["cloud-mail", "Not installed"], ["cloud-chat", "Not installed"], ["cloud-matrix", "Not installed"], ["cloud-dialer", "Not installed"], ["cloud-ide", "Not installed"], ["cloud-wallet", "Not installed"], ["cloud-nav", "Not installed"], ["cloud-vault", "Not installed"], ["cloud-browser", "Not installed"], ["cloud-keyboard", "Not installed"]] },
        { "id": "onehand", "label": "One-Hand", "rows": [["Sirius (circular menu)", "On"], ["Canopus (arc menu)", "On"], ["Centauri (recent apps)", "On"]] },
        { "id": "permissions", "label": "Permissions", "rows": [["Notifications", "Granted"], ["Location", "Not requested"], ["Contacts", "Not requested"], ["Nearby devices", "Not requested"]] },
        { "id": "about", "label": "About", "rows": [["Version", "1.0.0"], ["Build", "cloud-mobile · web"], ["Source", "ea_cloud-superapp"]] }
      ]
    }
  }
}
;
})();
