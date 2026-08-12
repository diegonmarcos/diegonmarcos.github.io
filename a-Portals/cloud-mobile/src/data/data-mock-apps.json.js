// GENERATED FROM mock-apps.json by front-data-json-js-wrapper.sh — DO NOT EDIT BY HAND.
// Re-generate with: bash a-Portals/linktree/src/data/build.sh
(function () {
  var g = (typeof globalThis !== "undefined") ? globalThis : (typeof window !== "undefined" ? window : this);
  g.PORTAL_DATA = g.PORTAL_DATA || {};
  g.PORTAL_DATA["mock-apps"] = {
  "_doc": "Single source of truth for the Suite > Phone tab's installed-app grid. No real Android usage/package API exists on the web, so this is explicitly mock data — but it IS the data: generate-pages.mjs derives BOTH suite/phone/quickmarks (pinned apps) and suite/phone/all (every app) from this one list, grouped by category, rather than hand-duplicating per-view arrays. 'real' entries are the actual packages transcribed from ea_cloud-superapp's phone_app_groups; 'pinned:false' entries pad the category out to a believable full app-drawer size and are clearly mock.",
  "apps": [
    { "name": "Claude", "icon": "sparkles", "category": "AI", "pinned": true, "real": true },
    { "name": "Gemini", "icon": "sparkles", "category": "AI", "pinned": true, "real": true },
    { "name": "Termux", "icon": "code", "category": "AI", "pinned": true, "real": true },
    { "name": "Perplexity", "icon": "sparkles", "category": "AI", "pinned": false },
    { "name": "ChatGPT", "icon": "sparkles", "category": "AI", "pinned": false },
    { "name": "Copilot", "icon": "code", "category": "AI", "pinned": false },
    { "name": "Poe", "icon": "chat", "category": "AI", "pinned": false },

    { "name": "FairEmail", "icon": "mail", "category": "Communications", "pinned": true, "real": true },
    { "name": "K-9 Mail", "icon": "mail", "category": "Communications", "pinned": true, "real": true },
    { "name": "Mattermost", "icon": "chat", "category": "Communications", "pinned": true, "real": true },
    { "name": "Beeper", "icon": "chat", "category": "Communications", "pinned": true, "real": true },
    { "name": "Dialer", "icon": "phone", "category": "Communications", "pinned": true, "real": true },
    { "name": "Phone", "icon": "phone", "category": "Communications", "pinned": true, "real": true },
    { "name": "Signal", "icon": "chat", "category": "Communications", "pinned": false },
    { "name": "Slack", "icon": "chat", "category": "Communications", "pinned": false },
    { "name": "Discord", "icon": "chat", "category": "Communications", "pinned": false },
    { "name": "Zulip", "icon": "chat", "category": "Communications", "pinned": false },

    { "name": "Obsidian", "icon": "logs", "category": "Data Apps", "pinned": true, "real": true },
    { "name": "Gallery", "icon": "photos", "category": "Data Apps", "pinned": true, "real": true },
    { "name": "Calendar", "icon": "calendar", "category": "Data Apps", "pinned": true, "real": true },
    { "name": "Contacts", "icon": "user", "category": "Data Apps", "pinned": true, "real": true },
    { "name": "Tidal", "icon": "music", "category": "Data Apps", "pinned": true, "real": true },
    { "name": "Bitwarden", "icon": "lock", "category": "Data Apps", "pinned": true, "real": true },
    { "name": "Spotify", "icon": "music", "category": "Data Apps", "pinned": false },
    { "name": "Notion", "icon": "logs", "category": "Data Apps", "pinned": false },
    { "name": "Todoist", "icon": "logs", "category": "Data Apps", "pinned": false },
    { "name": "1Password", "icon": "lock", "category": "Data Apps", "pinned": false },

    { "name": "Brave", "icon": "browser", "category": "Tools Primary", "pinned": true, "real": true },
    { "name": "News", "icon": "rss", "category": "Tools Primary", "pinned": true, "real": true },
    { "name": "Maps", "icon": "pin", "category": "Tools Primary", "pinned": true, "real": true },
    { "name": "Wallet", "icon": "wallet", "category": "Tools Primary", "pinned": true, "real": true },
    { "name": "Translate", "icon": "chat", "category": "Tools Primary", "pinned": true, "real": true },
    { "name": "Clock", "icon": "bell", "category": "Tools Primary", "pinned": true, "real": true },
    { "name": "Calculator", "icon": "chart", "category": "Tools Primary", "pinned": true, "real": true },
    { "name": "Firefox", "icon": "browser", "category": "Tools Primary", "pinned": false },
    { "name": "Uber", "icon": "pin", "category": "Tools Primary", "pinned": false },
    { "name": "Weather", "icon": "mesh", "category": "Tools Primary", "pinned": false },
    { "name": "Camera", "icon": "photos", "category": "Tools Primary", "pinned": false },

    { "name": "Cloud SuperApp", "icon": "home", "category": "Tools Dashboards", "pinned": true, "real": true },
    { "name": "Grafana", "icon": "chart", "category": "Tools Dashboards", "pinned": false },
    { "name": "Portainer", "icon": "cube", "category": "Tools Dashboards", "pinned": false },
    { "name": "Uptime Kuma", "icon": "heart", "category": "Tools Dashboards", "pinned": false },
    { "name": "Home Assistant", "icon": "home", "category": "Tools Dashboards", "pinned": false },

    { "name": "Play Store", "icon": "suite", "category": "Configs", "pinned": true, "real": true },
    { "name": "F-Droid", "icon": "suite", "category": "Configs", "pinned": true, "real": true },
    { "name": "Settings", "icon": "settings", "category": "Configs", "pinned": true, "real": true },
    { "name": "Termius", "icon": "code", "category": "Configs", "pinned": false },
    { "name": "Tasker", "icon": "workflow", "category": "Configs", "pinned": false },
    { "name": "Nova Launcher", "icon": "suite", "category": "Configs", "pinned": false },
    { "name": "Files by Google", "icon": "database", "category": "Configs", "pinned": false }
  ],
  "folders": [
    { "category": "AI", "label": "Files Editor (IDE)", "apps": [
        { "name": "X-plore", "icon": "database" },
        { "name": "My Files", "icon": "database" },
        { "name": "Google Docs", "icon": "logs" },
        { "name": "Git Sync", "icon": "workflow" },
        { "name": "Acode", "icon": "code" },
        { "name": "Turbo Editor", "icon": "code" }
      ] },
    { "category": "Communications", "label": "Others", "apps": [
        { "name": "Samsung Email", "icon": "mail" },
        { "name": "WhatsApp Business", "icon": "chat" },
        { "name": "Gmail", "icon": "mail" },
        { "name": "Telegram", "icon": "chat" },
        { "name": "Instagram", "icon": "photos" },
        { "name": "LinkedIn", "icon": "briefcase" }
      ] }
  ]
}
;
})();
