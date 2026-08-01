// GENERATED FROM c3-services.json by front-data-json-js-wrapper.sh — DO NOT EDIT BY HAND.
// Re-generate with: bash a-Portals/linktree/src/data/build.sh
(function () {
  var g = (typeof globalThis !== "undefined") ? globalThis : (typeof window !== "undefined" ? window : this);
  g.PORTAL_DATA = g.PORTAL_DATA || {};
  g.PORTAL_DATA["c3-services"] = {
  "services": [
    {
      "name": "c3-infra-api",
      "prefix": "infra-api",
      "vm": "oci-apps",
      "domain": "api.diegonmarcos.com/c3-infra-api",
      "wg_only": false,
      "status": "on",
      "description": "Fastify infra control-plane API"
    },
    {
      "name": "c3-public-api",
      "prefix": "infra-api",
      "vm": "oci-apps",
      "domain": "api.diegonmarcos.com/pub",
      "wg_only": false,
      "status": "on",
      "description": "Public read-only API"
    },
    {
      "name": "c3-services-api",
      "prefix": "infra-api",
      "vm": "oci-apps",
      "domain": "api.diegonmarcos.com/c3-services-api",
      "wg_only": false,
      "status": "on",
      "description": "Services API"
    },
    {
      "name": "c3-infra-mcp",
      "prefix": "infra-api",
      "vm": "oci-apps",
      "domain": "mcp.diegonmarcos.com/c3-infra-mcp",
      "wg_only": true,
      "status": "on",
      "description": "Infra MCP server"
    },
    {
      "name": "google-personal-mcp",
      "prefix": "infra-api",
      "vm": "oci-apps",
      "domain": "mcp.diegonmarcos.com",
      "wg_only": true,
      "status": "on",
      "description": "Google personal MCP"
    },
    {
      "name": "authelia",
      "prefix": "infra-sec",
      "vm": "oci-apps",
      "domain": "auth.diegonmarcos.com",
      "wg_only": false,
      "status": "on",
      "description": "Two-factor / SSO gate"
    },
    {
      "name": "caddy",
      "prefix": "infra-sec",
      "vm": "oci-apps",
      "domain": "proxy.diegonmarcos.com",
      "wg_only": false,
      "status": "on",
      "description": "Reverse proxy"
    },
    {
      "name": "caddy-public",
      "prefix": "infra-sec",
      "vm": "oci-apps",
      "domain": "*.diegonmarcos.com",
      "wg_only": false,
      "status": "on",
      "description": "Public edge proxy"
    },
    {
      "name": "crowdsec",
      "prefix": "infra-sec",
      "vm": "oci-apps",
      "domain": "crowdsec.diegonmarcos.com",
      "wg_only": true,
      "status": "on",
      "description": "Intrusion detection"
    },
    {
      "name": "introspect-proxy",
      "prefix": "infra-sec",
      "vm": "oci-apps",
      "domain": null,
      "wg_only": true,
      "status": "on",
      "description": "OAuth introspection proxy"
    },
    {
      "name": "dagu",
      "prefix": "infra-obs",
      "vm": "oci-analytics",
      "domain": "workflows.diegonmarcos.com",
      "wg_only": true,
      "status": "on",
      "description": "Workflow/DAG engine"
    },
    {
      "name": "dbgate",
      "prefix": "infra-obs",
      "vm": "oci-apps",
      "domain": "db.diegonmarcos.com",
      "wg_only": true,
      "status": "on",
      "description": "DB admin UI"
    },
    {
      "name": "matomo",
      "prefix": "infra-obs",
      "vm": "oci-analytics",
      "domain": "analytics.diegonmarcos.com/matomo",
      "wg_only": false,
      "status": "on",
      "description": "Web analytics"
    },
    {
      "name": "umami",
      "prefix": "infra-obs",
      "vm": "oci-analytics",
      "domain": "analytics.diegonmarcos.com/umami",
      "wg_only": false,
      "status": "on",
      "description": "Privacy-first analytics"
    },
    {
      "name": "openobserve",
      "prefix": "infra-obs",
      "vm": "oci-apps",
      "domain": "analytics.diegonmarcos.com/openobserve",
      "wg_only": false,
      "status": "on",
      "description": "Observability platform (logs/traces/metrics)"
    },
    {
      "name": "ntfy",
      "prefix": "infra-obs",
      "vm": "oci-apps",
      "domain": "rss.diegonmarcos.com",
      "wg_only": true,
      "status": "on",
      "description": "Push notifications"
    },
    {
      "name": "cloud-spec",
      "prefix": "infra-obs",
      "vm": "oci-apps",
      "domain": null,
      "wg_only": true,
      "status": "on",
      "description": "OpenAPI spec hub"
    },
    {
      "name": "postlite",
      "prefix": "infra-db",
      "vm": "oci-apps",
      "domain": null,
      "wg_only": true,
      "status": "on",
      "description": "SQLite-backed Postgres-compatible store"
    },
    {
      "name": "redis",
      "prefix": "infra-db",
      "vm": "oci-apps",
      "domain": null,
      "wg_only": true,
      "status": "on",
      "description": "Cache / queue"
    },
    {
      "name": "hickory-dns",
      "prefix": "infra-net",
      "vm": "oci-mail",
      "domain": "dns.internal",
      "wg_only": true,
      "status": "on",
      "description": "Authoritative mesh DNS"
    },
    {
      "name": "unbound-dns64",
      "prefix": "infra-net",
      "vm": "oci-mail",
      "domain": "dns64.internal",
      "wg_only": true,
      "status": "on",
      "description": "Recursive resolver"
    },
    {
      "name": "wireguard-mesh",
      "prefix": "infra-net",
      "vm": "oci-apps",
      "domain": "mesh.diegonmarcos.com",
      "wg_only": true,
      "status": "on",
      "description": "WireGuard mesh hub"
    },
    {
      "name": "wireguard-mesh-ws-tunnel",
      "prefix": "infra-net",
      "vm": "gcp-f-micro_1",
      "domain": "vpn.diegonmarcos.com",
      "wg_only": false,
      "status": "on",
      "description": "WebSocket-tunneled WG"
    },
    {
      "name": "wireguard-public",
      "prefix": "infra-net",
      "vm": "oci-apps",
      "domain": null,
      "wg_only": true,
      "status": "on",
      "description": "Public WG endpoint"
    },
    {
      "name": "gitea",
      "prefix": "infra-dat",
      "vm": "oci-apps",
      "domain": "git.diegonmarcos.com",
      "wg_only": false,
      "status": "on",
      "description": "Self-hosted git"
    },
    {
      "name": "backup-borg",
      "prefix": "infra-dat",
      "vm": "oci-apps",
      "domain": null,
      "wg_only": true,
      "status": "on",
      "description": "Borg backups"
    },
    {
      "name": "backup-bup",
      "prefix": "infra-dat",
      "vm": "oci-apps",
      "domain": null,
      "wg_only": true,
      "status": "on",
      "description": "Bup backups"
    },
    {
      "name": "languagetool",
      "prefix": "infra-ai",
      "vm": "oci-apps",
      "domain": "languagetool.diegonmarcos.com",
      "wg_only": true,
      "status": "on",
      "description": "Grammar checker API"
    },
    {
      "name": "cloud-builder-x",
      "prefix": "infra-bld",
      "vm": "oci-apps",
      "domain": null,
      "wg_only": true,
      "status": "on",
      "description": "Container build service"
    },
    {
      "name": "gha-runner",
      "prefix": "infra-bld",
      "vm": "oci-apps",
      "domain": null,
      "wg_only": true,
      "status": "on",
      "description": "Self-hosted GitHub Actions runner"
    },
    {
      "name": "cloudflare-worker",
      "prefix": "infra-cloud",
      "vm": null,
      "domain": null,
      "wg_only": true,
      "status": "on",
      "description": "Edge worker functions"
    },
    {
      "name": "gcloud",
      "prefix": "infra-cloud",
      "vm": "gcp-f-micro_1",
      "domain": null,
      "wg_only": true,
      "status": "on",
      "description": "GCP project glue"
    },
    {
      "name": "my-ai-api",
      "prefix": "user-ai",
      "vm": "oci-apps",
      "domain": null,
      "wg_only": true,
      "status": "on",
      "description": "Personal AI gateway (loopback-only)"
    },
    {
      "name": "hermes-agent",
      "prefix": "user-ai",
      "vm": "oci-apps",
      "domain": null,
      "wg_only": true,
      "status": "on",
      "description": "Autonomous agent runner"
    },
    {
      "name": "kg-store",
      "prefix": "user-ai",
      "vm": "oci-apps",
      "domain": null,
      "wg_only": true,
      "status": "on",
      "description": "Knowledge-graph store"
    },
    {
      "name": "session-memory",
      "prefix": "user-ai",
      "vm": "oci-apps",
      "domain": null,
      "wg_only": true,
      "status": "on",
      "description": "Agent session memory"
    },
    {
      "name": "db-agent",
      "prefix": "user-ai",
      "vm": "oci-apps",
      "domain": null,
      "wg_only": true,
      "status": "on",
      "description": "DB query agent"
    },
    {
      "name": "claude-superset-api",
      "prefix": "user-ai",
      "vm": "oci-apps",
      "domain": null,
      "wg_only": true,
      "status": "on",
      "description": "Claude superset gateway"
    },
    {
      "name": "cloud-cgc-mcp",
      "prefix": "user-ai",
      "vm": "oci-apps",
      "domain": null,
      "wg_only": true,
      "status": "on",
      "description": "Cloud-config-generator MCP"
    },
    {
      "name": "chat-mattermost",
      "prefix": "user-comm",
      "vm": "oci-apps",
      "domain": "chat.diegonmarcos.com",
      "wg_only": false,
      "status": "on",
      "description": "Team chat"
    },
    {
      "name": "matrix-element",
      "prefix": "user-comm",
      "vm": "oci-apps",
      "domain": "messenger.diegonmarcos.com",
      "wg_only": false,
      "status": "on",
      "description": "Matrix web client"
    },
    {
      "name": "matrix-mautrix-whatsapp",
      "prefix": "user-comm",
      "vm": "oci-apps",
      "domain": null,
      "wg_only": true,
      "status": "on",
      "description": "WhatsApp bridge"
    },
    {
      "name": "snappymail",
      "prefix": "user-comm",
      "vm": "oci-mail",
      "domain": "webmail.diegonmarcos.com",
      "wg_only": false,
      "status": "on",
      "description": "Webmail client"
    },
    {
      "name": "maddy",
      "prefix": "user-comm",
      "vm": "oci-mail",
      "domain": "mail.diegonmarcos.com",
      "wg_only": false,
      "status": "on",
      "description": "SMTP/IMAP mail server"
    },
    {
      "name": "stalwart",
      "prefix": "user-comm",
      "vm": "oci-mail",
      "domain": "jmap.diegonmarcos.com",
      "wg_only": false,
      "status": "on",
      "description": "JMAP mail server"
    },
    {
      "name": "mail-puller",
      "prefix": "user-comm",
      "vm": "oci-mail",
      "domain": "mail-puller.diegonmarcos.com",
      "wg_only": true,
      "status": "on",
      "description": "Mail fetch bridge"
    },
    {
      "name": "cypht",
      "prefix": "user-comm",
      "vm": "oci-mail",
      "domain": null,
      "wg_only": true,
      "status": "on",
      "description": "Webmail aggregator"
    },
    {
      "name": "vaultwarden",
      "prefix": "user-vault",
      "vm": "oci-apps",
      "domain": "vault.diegonmarcos.com",
      "wg_only": true,
      "status": "on",
      "description": "Password manager"
    },
    {
      "name": "photoprism",
      "prefix": "user-media",
      "vm": "oci-apps",
      "domain": "photos.diegonmarcos.com",
      "wg_only": true,
      "status": "on",
      "description": "Photo library"
    },
    {
      "name": "playlist-syncer",
      "prefix": "user-media",
      "vm": "oci-apps",
      "domain": "playlist.diegonmarcos.com",
      "wg_only": false,
      "status": "on",
      "description": "Playlist sync tool"
    },
    {
      "name": "news-gdelt",
      "prefix": "user-news",
      "vm": "oci-apps",
      "domain": null,
      "wg_only": true,
      "status": "on",
      "description": "GDELT news ingest"
    },
    {
      "name": "calendar-radicale",
      "prefix": "user-prod",
      "vm": "oci-apps",
      "domain": "cal.diegonmarcos.com",
      "wg_only": false,
      "status": "on",
      "description": "CalDAV calendar"
    },
    {
      "name": "contacts-radicale",
      "prefix": "user-prod",
      "vm": "oci-apps",
      "domain": "contacts.diegonmarcos.com",
      "wg_only": false,
      "status": "on",
      "description": "CardDAV contacts"
    },
    {
      "name": "code-server",
      "prefix": "user-prod",
      "vm": "oci-apps",
      "domain": "ide.diegonmarcos.com",
      "wg_only": true,
      "status": "on",
      "description": "Browser VS Code"
    },
    {
      "name": "etherpad",
      "prefix": "user-prod",
      "vm": "oci-apps",
      "domain": "app.diegonmarcos.com/etherpad",
      "wg_only": false,
      "status": "on",
      "description": "Collaborative notepad"
    },
    {
      "name": "filebrowser",
      "prefix": "user-prod",
      "vm": "oci-apps",
      "domain": "app.diegonmarcos.com/filebrowser",
      "wg_only": false,
      "status": "on",
      "description": "Web file manager"
    },
    {
      "name": "grist",
      "prefix": "user-prod",
      "vm": "oci-apps",
      "domain": "sheets.diegonmarcos.com",
      "wg_only": true,
      "status": "on",
      "description": "Spreadsheet/DB hybrid"
    },
    {
      "name": "hedgedoc",
      "prefix": "user-prod",
      "vm": "oci-apps",
      "domain": "app.diegonmarcos.com/hedgedoc",
      "wg_only": false,
      "status": "on",
      "description": "Markdown notes"
    },
    {
      "name": "paca",
      "prefix": "user-prod",
      "vm": "oci-apps",
      "domain": "paca.diegonmarcos.com",
      "wg_only": false,
      "status": "on",
      "description": "Personal assistant / calendar app"
    },
    {
      "name": "revealmd",
      "prefix": "user-prod",
      "vm": "oci-apps",
      "domain": null,
      "wg_only": true,
      "status": "on",
      "description": "Markdown slide decks"
    },
    {
      "name": "send",
      "prefix": "user-prod",
      "vm": "oci-apps",
      "domain": "send.diegonmarcos.com",
      "wg_only": false,
      "status": "on",
      "description": "Encrypted file transfer"
    },
    {
      "name": "scrappers-api",
      "prefix": "user-data",
      "vm": "oci-apps",
      "domain": "api.diegonmarcos.com/scrappers",
      "wg_only": false,
      "status": "on",
      "description": "Web scraping API"
    },
    {
      "name": "fin-api",
      "prefix": "user-fin",
      "vm": "oci-apps",
      "domain": "api.diegonmarcos.com/fin-api",
      "wg_only": true,
      "status": "on",
      "description": "Personal finance API"
    },
    {
      "name": "crawlee-cloud",
      "prefix": "user-fin",
      "vm": "oci-apps",
      "domain": null,
      "wg_only": true,
      "status": "on",
      "description": "Crawlee-based crawler service"
    },
    {
      "name": "front-end",
      "prefix": "user-web",
      "vm": "oci-apps",
      "domain": "diegonmarcos.com",
      "wg_only": false,
      "status": "on",
      "description": "Portfolio / portal front-end"
    },
    {
      "name": "matrix-continuwuity",
      "prefix": "aa-sui",
      "vm": "oci-apps",
      "domain": "matrix.diegonmarcos.com",
      "wg_only": false,
      "status": "on",
      "description": "Matrix homeserver (Continuwuity)"
    },
    {
      "name": "vaultwarden-mic",
      "prefix": "ab-mic",
      "vm": "oci-apps",
      "domain": null,
      "wg_only": true,
      "status": "on",
      "description": "Secondary vault instance"
    },
    {
      "name": "alerts-api",
      "prefix": "bc-obs",
      "vm": "oci-apps",
      "domain": null,
      "wg_only": true,
      "status": "on",
      "description": "Alerting API"
    }
  ]
};
})();
