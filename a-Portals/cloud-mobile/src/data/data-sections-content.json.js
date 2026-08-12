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
      },
      "phone": {
        "footer": { "id": "more-phone", "label": "More", "icon": "more", "target": "action:open_suite_phone_all" }
      }
    },

    "mail": { "label": "Mail", "icon": "mail", "color": "blue",
      "pages": [
        { "id": "folders", "label": "Folders", "items": [
          { "title": "Inbox", "meta": "12" }, { "title": "Sent" }, { "title": "Drafts", "meta": "2" },
          { "title": "Archive" }, { "title": "Spam", "meta": "3" }, { "title": "Trash" }
        ]},
        { "id": "inbox", "label": "Inbox", "items": [
          { "title": "GitHub", "subtitle": "[cloud] Deploy succeeded", "meta": "2m" },
          { "title": "Diego Coelho Marcos", "subtitle": "Re: Weekly sync notes", "meta": "1h" },
          { "title": "Vaultwarden", "subtitle": "Your vault export is ready", "meta": "3h" },
          { "title": "Grafana", "subtitle": "Alert resolved: disk usage", "meta": "5h" },
          { "title": "Mattermost", "subtitle": "New mention in #ops", "meta": "1d" }
        ]},
        { "id": "accounts", "label": "Accounts", "items": [
          { "title": "me@diegonmarcos.com", "subtitle": "IMAP · Personal", "meta": "Default" },
          { "title": "admin@diegonmarcos.com", "subtitle": "IMAP · Ops" }
        ]},
        { "id": "identities", "label": "Identities", "items": [
          { "title": "Diego Coelho Marcos", "subtitle": "me@diegonmarcos.com" },
          { "title": "DCM", "subtitle": "admin@diegonmarcos.com" }
        ]},
        { "id": "rules", "label": "Rules", "items": [
          { "title": "Archive GitHub notifications", "subtitle": "from: notifications@github.com" },
          { "title": "Star from Grafana", "subtitle": "from: grafana@diegonmarcos.com" }
        ]},
        { "id": "answers", "label": "Answers", "items": [
          { "title": "Out of office", "subtitle": "Thanks for your email…" },
          { "title": "Meeting confirmation", "subtitle": "Confirming our call…" }
        ]},
        { "id": "contacts", "label": "Contacts", "items": [
          { "title": "Support", "subtitle": "support@diegonmarcos.com" },
          { "title": "Ops Team", "subtitle": "ops@diegonmarcos.com" }
        ]},
        { "id": "settings", "label": "Settings", "rows": [
          ["Sync", "Every 5 min"], ["Notifications", "On"], ["Signature", "Enabled"]
        ]}
      ] },

    "rss": { "label": "RSS", "icon": "rss", "color": "amber",
      "pages": [
        { "id": "all-feeds", "label": "All feeds", "items": [
          { "title": "Hacker News", "subtitle": "news.ycombinator.com", "meta": "24" },
          { "title": "Kubernetes Blog", "subtitle": "kubernetes.io/blog", "meta": "3" },
          { "title": "Anthropic News", "subtitle": "anthropic.com/news", "meta": "1" }
        ]},
        { "id": "unread", "label": "Unread", "items": [
          { "title": "Show HN: a self-hosted…", "subtitle": "Hacker News", "meta": "12m" },
          { "title": "v1.32 release notes", "subtitle": "Kubernetes Blog", "meta": "2h" }
        ]},
        { "id": "saved", "label": "Saved", "items": [
          { "title": "Designing data-driven build pipelines", "subtitle": "Saved 3d ago" }
        ]},
        { "id": "subscriptions", "label": "Subscriptions", "items": [
          { "title": "Hacker News", "meta": "Every 15 min" }, { "title": "Kubernetes Blog", "meta": "Daily" }, { "title": "Anthropic News", "meta": "Daily" }
        ]},
        { "id": "subscribe", "label": "+ Subscribe", "items": [
          { "title": "Paste a feed URL to add it", "subtitle": "https://…" }
        ]},
        { "id": "settings", "label": "Settings", "rows": [ ["Refresh", "Every 15 min"], ["Mark read on open", "On"] ] }
      ] },

    "calendar": { "label": "Calendar", "icon": "calendar", "color": "green",
      "pages": [
        { "id": "day", "label": "Day", "items": [
          { "title": "Standup", "subtitle": "09:00", "meta": "Work" },
          { "title": "1:1 with Ops", "subtitle": "14:00", "meta": "Work" }
        ]},
        { "id": "week", "label": "Week", "items": [
          { "title": "Standup", "subtitle": "Mon–Fri · 09:00", "meta": "Work" },
          { "title": "Deploy freeze", "subtitle": "Thu", "meta": "Ops" }
        ]},
        { "id": "month", "label": "Month", "items": [
          { "title": "12 events this month", "subtitle": "3 work · 2 ops · 7 personal" }
        ]},
        { "id": "agenda", "label": "Agenda", "items": [
          { "title": "Standup", "subtitle": "Today · 09:00" },
          { "title": "1:1 with Ops", "subtitle": "Today · 14:00" },
          { "title": "Dentist", "subtitle": "Tomorrow · 10:30" }
        ]},
        { "id": "calendars", "label": "Calendars", "items": [
          { "title": "Personal", "meta": "On" }, { "title": "Work", "meta": "On" }, { "title": "Holidays", "meta": "On" }
        ]},
        { "id": "add-caldav", "label": "+ Add CalDAV", "items": [
          { "title": "Server URL", "subtitle": "https://caldav…" }
        ]},
        { "id": "settings", "label": "Settings", "rows": [ ["Sync", "Every 15 min"], ["Week starts on", "Monday"] ] }
      ] },

    "drive": { "label": "Drive", "icon": "database", "color": "indigo",
      "pages": [
        { "id": "my-files", "label": "My files", "items": [
          { "title": "Projects", "subtitle": "Folder", "meta": "24 items" },
          { "title": "Backups", "subtitle": "Folder", "meta": "6 items" },
          { "title": "resume.pdf", "subtitle": "412 KB", "meta": "2d ago" }
        ]},
        { "id": "photos", "label": "Photos", "items": [
          { "title": "Camera roll", "meta": "1,204 photos" }, { "title": "Screenshots", "meta": "88 photos" }
        ]},
        { "id": "connections", "label": "Connections", "items": [
          { "title": "PhotoPrism", "subtitle": "Self-hosted", "meta": "Connected" },
          { "title": "Nextcloud", "subtitle": "Self-hosted", "meta": "Connected" }
        ]},
        { "id": "recent", "label": "Recent", "items": [
          { "title": "resume.pdf", "meta": "2d ago" }, { "title": "roadmap.md", "meta": "4d ago" }
        ]},
        { "id": "shared", "label": "Shared", "items": [
          { "title": "roadmap.md", "subtitle": "Shared with Ops Team" }
        ]},
        { "id": "trash", "label": "Trash", "items": [
          { "title": "old-notes.txt", "meta": "Deleted 6d ago" }
        ]},
        { "id": "backups", "label": "Backups", "items": [
          { "title": "Nightly snapshot", "subtitle": "2026-08-11", "meta": "4.2 GB" },
          { "title": "Nightly snapshot", "subtitle": "2026-08-10", "meta": "4.1 GB" }
        ]},
        { "id": "upload", "label": "+ Upload", "items": [
          { "title": "Drop files here or tap to browse" }
        ]},
        { "id": "settings", "label": "Settings", "rows": [ ["Auto-backup", "Nightly"], ["Storage used", "48.2 GB / 200 GB"] ] }
      ] },

    "vault": { "label": "Vault", "icon": "lock", "color": "pink",
      "pages": [
        { "id": "logins", "label": "Logins", "items": [
          { "title": "github.com", "subtitle": "diegonmarcos" },
          { "title": "grafana.diegonmarcos.com", "subtitle": "admin" },
          { "title": "vault.diegonmarcos.com", "subtitle": "dcm" }
        ]},
        { "id": "totp", "label": "TOTP", "items": [
          { "title": "GitHub", "subtitle": "2FA code", "meta": "482 913" },
          { "title": "Cloudflare", "subtitle": "2FA code", "meta": "051 774" }
        ]},
        { "id": "generator", "label": "Generator", "items": [
          { "title": "Xk9#mP2$vQr7", "subtitle": "16 chars · upper/lower/digits/symbols" }
        ]},
        { "id": "identities", "label": "Identities", "items": [
          { "title": "Diego Coelho Marcos", "subtitle": "Personal identity" }
        ]},
        { "id": "vaults", "label": "Vaults", "items": [
          { "title": "Personal", "meta": "38 items" }, { "title": "Ops", "meta": "14 items" }
        ]},
        { "id": "settings", "label": "Settings", "rows": [ ["Lock after", "5 min idle"], ["Biometric unlock", "On"] ] }
      ] },

    "chat": { "label": "Chat", "icon": "chat", "color": "teal",
      "pages": [
        { "id": "mattermost", "label": "Mattermost", "items": [
          { "title": "#ops", "subtitle": "New mention", "meta": "1d" },
          { "title": "#general", "meta": "3d" }
        ]},
        { "id": "matrix-bridges", "label": "Matrix-Bridges", "items": [
          { "title": "WhatsApp bridge", "meta": "Connected" }, { "title": "Telegram bridge", "meta": "Connected" }
        ]},
        { "id": "direct-messages", "label": "Direct messages", "items": [
          { "title": "Ops Team", "subtitle": "Deploy looks good 👍", "meta": "2h" }
        ]},
        { "id": "channels", "label": "Channels", "items": [
          { "title": "#ops" }, { "title": "#general" }, { "title": "#random" }
        ]},
        { "id": "servers", "label": "Servers", "items": [
          { "title": "chat.diegonmarcos.com", "subtitle": "Mattermost", "meta": "Connected" }
        ]},
        { "id": "add-server", "label": "+ Add server", "items": [
          { "title": "Server URL", "subtitle": "https://…" }
        ]},
        { "id": "settings", "label": "Settings", "rows": [ ["Notifications", "Mentions only"], ["Theme", "Dark"] ] }
      ] },

    "wg": { "label": "WG", "icon": "mesh", "color": "amber",
      "pages": [
        { "id": "wireguard", "label": "WireGuard", "items": [
          { "title": "phone-mesh", "subtitle": "10.0.0.4", "meta": "Connected" },
          { "title": "laptop-mesh", "subtitle": "10.0.0.7", "meta": "Connected" },
          { "title": "gcp-proxy", "subtitle": "10.0.0.1", "meta": "Connected" }
        ]}
      ] },
    "solutions": { "label": "Solutions", "icon": "briefcase", "color": "purple",
      "pages": [
        { "id": "professional", "label": "Professional", "items": [
          { "title": "Product & Software Engineer" }, { "title": "Venture Capital & Portfolio Analyst" }, { "title": "Civil Engineer B.Sc." }
        ]},
        { "id": "personal", "label": "Personal", "items": [
          { "title": "Berlin, Germany" }, { "title": "diegonmarcos.com" }
        ]}
      ] },
    "apptabs": { "label": "Tabs", "icon": "suite", "color": "teal",
      "pages": [{ "id": "grid", "label": "Grid" }] },
    "myfin": { "label": "MyFin", "icon": "chart", "color": "green",
      "pages": [{ "id": "dashboard", "label": "Dashboard" }] },
    "health": { "label": "MyHealth", "icon": "heart", "color": "pink",
      "pages": [{ "id": "summary", "label": "Summary" }] },
    "wallet": { "label": "Wallet", "icon": "wallet", "color": "indigo",
      "pages": [{ "id": "cards", "label": "Cards" }] },

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
        { "id": "onehand", "label": "One-Hand", "rows": [
          ["Edge handles", "On"],
          ["Left · Top", "Bitwarden"],
          ["Left · Center", "Back"],
          ["Left · Down", "Google Maps"],
          ["Right · Top", "WhatsApp Business"],
          ["Right · Center", "Back"],
          ["Right · Down", "Instagram"],
          ["Sirius (circular menu)", "On"],
          ["Canopus (arc menu)", "On"],
          ["Centauri (recent apps)", "On"]
        ] },
        { "id": "permissions", "label": "Permissions", "rows": [["Notifications", "Granted"], ["Location", "Not requested"], ["Contacts", "Not requested"], ["Nearby devices", "Not requested"]] },
        { "id": "about", "label": "About", "rows": [["Version", "1.0.0"], ["Build", "cloud-mobile · web"], ["Source", "ea_cloud-superapp"]] }
      ]
    }
  }
}
;
})();
