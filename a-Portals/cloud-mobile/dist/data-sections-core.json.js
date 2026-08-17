// GENERATED FROM sections-core.json by front-data-json-js-wrapper.sh — DO NOT EDIT BY HAND.
// Re-generate with: bash a-Portals/linktree/src/data/build.sh
(function () {
  var g = (typeof globalThis !== "undefined") ? globalThis : (typeof window !== "undefined" ? window : this);
  g.PORTAL_DATA = g.PORTAL_DATA || {};
  g.PORTAL_DATA["sections-core"] = {
  "_doc": "The 4 real aggregator sections (communication/infos/suite/tools). Communication/Infos/Tools use TabbedSectionFragment in the real app: literal Apps|Admin tabs, and for most mode combinations the tab body is NOT a tile grid — it's AggregatorStackFragment, a stack of collapsible cards keyed by 'kind' (verbatim from build.json's stack_apps/stack_admin). Suite has neither — it keeps its own tiles_shared + tileGroups/appGroups structure in sections-content.json's suite entry.",
  "sections": {
    "communication": {
      "label": "Inboxes", "icon": "chat", "color": "green",
      "tiles": [
        { "id": "mail", "label": "Mail", "icon": "mail", "target": "section:mail" },
        { "id": "chat-matrix", "label": "Chat · Matrix", "icon": "chat", "target": "section:chat" },
        { "id": "chat-mm", "label": "Chat · Mattermost", "icon": "chat", "target": "section:chat" }
      ],
      "apps": { "type": "stack", "cards": [
        { "kind": "mail_accounts", "title": "Mail · accounts", "target": "section:mail",
          "rows": [["me@diegonmarcos.com", "JMAP"], ["Add IMAP account…", "IMAPS"]],
          "caption": "Unread / total counts pending JMAP slice C2 + IMAP slice." },
        { "kind": "chat_matrix", "title": "Chat · Matrix", "target": "section:chat",
          "linkLabel": "Open Matrix", "caption": "server list + unread counts pending integration" },
        { "kind": "chat_mattermost", "title": "Chat · Mattermost", "target": "section:chat",
          "linkLabel": "Open Mattermost", "caption": "server list + unread counts pending integration" },
        { "kind": "stats", "title": "Messenger (Element)", "subtitle": "Matrix · Element",
          "rows": [["Rooms", "12"], ["Unread", "3"], ["Mentions", "1"], ["Last sync", "2m ago"]] },
        { "kind": "stats", "title": "Dialer (Fossy)", "subtitle": "Fossify Phone",
          "rows": [["Missed calls", "0"], ["Recent", "8"], ["Contacts", "142"], ["Voicemail", "0"]] }
      ]},
      "admin": { "type": "tiles", "tiles": [
        { "id": "pmboards", "label": "Product Management Boards", "icon": "briefcase", "target": "https://paca.diegonmarcos.com" }
      ]}
    },

    "infos": {
      "label": "Infos", "icon": "logs", "color": "purple",
      "tiles": [
        { "id": "cal", "label": "Calendar", "icon": "calendar", "target": "section:calendar" },
        { "id": "rss", "label": "RSS feeds", "icon": "rss", "target": "section:rss" },
        { "id": "wg-mesh", "label": "WG mesh", "icon": "mesh", "target": "section:wg" }
      ],
      "apps": { "type": "stack", "cards": [
        { "kind": "calendar_month", "title": "Calendar", "subtitle": "Month view · CalDAV sync pending", "target": "section:calendar" },
        { "kind": "tasks", "title": "Tasks", "subtitle": "Agenda · Day · ToDo" },
        { "kind": "news_feeds", "title": "News & RSS", "subtitle": "Curated open channels (not ntfy)", "target": "section:rss" },
        { "kind": "stats", "title": "Myfin", "subtitle": "Personal finance",
          "rows": [["Net worth", "—"], ["This month", "—"], ["Spending", "—"], ["Holdings", "—"]] },
        { "kind": "stats", "title": "Myhealth", "subtitle": "Health & fitness",
          "rows": [["Steps today", "—"], ["Sleep", "—"], ["Resting HR", "—"], ["Workouts (wk)", "—"]] },
        { "kind": "stats", "title": "Nav Maps Tracker", "subtitle": "Cloud-Nav location tracker",
          "rows": [["Last location", "—"], ["Trips this week", "—"], ["Distance (wk)", "—"], ["Places logged", "—"]] }
      ]},
      "admin": { "type": "stack", "cards": [
        { "kind": "notifications", "title": "Cloud-SuperApp Notifications" },
        { "kind": "phone_notifications", "title": "Phone Notifications" },
        { "kind": "c3_public", "title": "C3 Health · Public" },
        { "kind": "c3_private", "title": "C3 Health · Private" },
        { "kind": "wg_mesh", "title": "WG Mesh", "target": "section:wg" },
        { "kind": "drive_connections", "title": "Drive · Connections" },
        { "kind": "rss", "title": "RSS · ntfy channels" },
        { "kind": "gha_runs", "title": "GHA · Workflow runs", "subtitle": "3 repos: unix, cloud, front" },
        { "kind": "repos", "title": "Repos · Commits", "subtitle": "3 repos: unix, cloud, front" },
        { "kind": "open_link", "title": "Dagu · Workflow runs" }
      ]}
    },

    "tools": {
      "label": "Labs", "icon": "tools", "color": "teal",
      "tiles": [
        { "id": "c3", "label": "C3", "icon": "mesh", "target": "section:c3" },
        { "id": "data-ml", "label": "Data & ML", "icon": "brain", "target": "page:tools/data-ml" },
        { "id": "eng", "label": "Engineering", "icon": "code", "target": "page:tools/engineering" },
        { "id": "quant", "label": "Quant & Markets", "icon": "chart", "target": "page:tools/quant" },
        { "id": "aero-space", "label": "Aero & Space", "icon": "rocket", "target": "page:tools/aero-space" },
        { "id": "circus", "label": "Circus", "icon": "sparkles", "target": "page:tools/circus" }
      ],
      "apps": { "type": "stack", "cards": [
        { "kind": "link_grid", "title": "Data & ML", "subtitle": "Datasets · ML pipelines · model registry" },
        { "kind": "link_grid", "title": "Engineering", "subtitle": "Build systems · ops tooling · infra notes" },
        { "kind": "link_grid", "title": "Quant & Markets", "subtitle": "Market data · strategies · backtests" },
        { "kind": "link_grid", "title": "Aero & Space", "subtitle": "Mission tracking · orbital data · launches" },
        { "kind": "link_grid", "title": "Circus", "subtitle": "Misc experiments and side quests" }
      ]},
      "admin": { "type": "stack", "cards": [
        { "kind": "section_title", "title": "Containers" },
        { "kind": "cloud_dashboard", "title": "Infra Apps" },
        { "kind": "cloud_dashboard", "title": "User Apps" },
        { "kind": "section_title", "title": "Stack" },
        { "kind": "cloud_dashboard", "title": "Stack" }
      ]},
      "pages": [
        { "id": "data-ml", "label": "Data & ML", "items": [
          { "title": "eu-central-1 · feature-store", "subtitle": "Postgres + parquet lake", "meta": "OK" },
          { "title": "model-registry", "subtitle": "MLflow · 14 registered models", "meta": "OK" },
          { "title": "nightly-retrain", "subtitle": "Dagu DAG · churn-model", "meta": "success" },
          { "title": "labeling-queue", "subtitle": "212 items pending review" },
          { "title": "notebook-runner", "subtitle": "Jupyter kernels · oci-analytics", "meta": "2 active" }
        ]},
        { "id": "engineering", "label": "Engineering", "items": [
          { "title": "ea_cloud-superapp", "subtitle": "GitHub · diegonmarcos", "meta": "main" },
          { "title": "front", "subtitle": "GitHub · diegonmarcos", "meta": "main" },
          { "title": "unix", "subtitle": "GitHub · diegonmarcos", "meta": "main" },
          { "title": "cloud-ship-container-engine", "subtitle": "Build & deploy engine" },
          { "title": "GHA runners", "subtitle": "6 self-hosted VMs", "meta": "green" }
        ]},
        { "id": "quant", "label": "Quant & Markets", "items": [
          { "title": "eod-price-fetcher", "subtitle": "Daily OHLCV · 340 tickers", "meta": "OK" },
          { "title": "backtest-runner", "subtitle": "Strategy: momentum-v3", "meta": "queued" },
          { "title": "portfolio-tracker", "subtitle": "Paper account · +4.2% YTD" },
          { "title": "risk-report", "subtitle": "Nightly VaR snapshot", "meta": "OK" }
        ]},
        { "id": "aero-space", "label": "Aero & Space", "items": [
          { "title": "orbital-tle-sync", "subtitle": "Celestrak feed · 12,400 objects", "meta": "OK" },
          { "title": "launch-tracker", "subtitle": "Upcoming launches · next 30d", "meta": "6" },
          { "title": "mission-notes", "subtitle": "Amateur telemetry logs" },
          { "title": "groundstation-sim", "subtitle": "SDR pass predictor" }
        ]},
        { "id": "circus", "label": "Circus", "items": [
          { "title": "weird-side-quests", "subtitle": "Misc experiments repo" },
          { "title": "font-playground", "subtitle": "Type specimen sandbox" },
          { "title": "esoteric-cli-toys", "subtitle": "Terminal art & games" }
        ]}
      ]
    }
  }
}
;
})();
