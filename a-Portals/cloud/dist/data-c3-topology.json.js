// GENERATED FROM c3-topology.json by front-data-json-js-wrapper.sh — DO NOT EDIT BY HAND.
// Re-generate with: bash a-Portals/linktree/src/data/build.sh
(function () {
  var g = (typeof globalThis !== "undefined") ? globalThis : (typeof window !== "undefined" ? window : this);
  g.PORTAL_DATA = g.PORTAL_DATA || {};
  g.PORTAL_DATA["c3-topology"] = {
  "_generated": "2026-08-01T09:00:00Z",
  "vms": {
    "oci-mail": {
      "ssh_alias": "oci-mail",
      "ip": "130.110.251.193",
      "wg_ip": "10.0.0.3",
      "specs": {
        "cpu": 1,
        "ram_gb": 1
      }
    },
    "oci-analytics": {
      "ssh_alias": "oci-analytics",
      "ip": "129.151.228.66",
      "wg_ip": "10.0.0.4",
      "specs": {
        "cpu": 1,
        "ram_gb": 1
      }
    },
    "oci-apps": {
      "ssh_alias": "oci-apps",
      "ip": "82.70.229.129",
      "wg_ip": "10.0.0.6",
      "specs": {
        "cpu": 4,
        "ram_gb": 24
      }
    },
    "gcp-f-micro_1": {
      "ssh_alias": "gcp-f-micro_1",
      "ip": "34.140.10.20",
      "wg_ip": "10.0.0.9",
      "specs": {
        "cpu": 2,
        "ram_gb": 1
      }
    }
  },
  "services": {
    "c3-infra-api": {
      "vm": "oci-apps",
      "domain": "api.diegonmarcos.com/c3-infra-api",
      "wg_only": false,
      "description": "Fastify infra control-plane API"
    },
    "c3-public-api": {
      "vm": "oci-apps",
      "domain": "api.diegonmarcos.com/pub",
      "wg_only": false,
      "description": "Public read-only API"
    },
    "c3-services-api": {
      "vm": "oci-apps",
      "domain": "api.diegonmarcos.com/c3-services-api",
      "wg_only": false,
      "description": "Services API"
    },
    "c3-infra-mcp": {
      "vm": "oci-apps",
      "domain": "mcp.diegonmarcos.com/c3-infra-mcp",
      "wg_only": true,
      "description": "Infra MCP server"
    },
    "google-personal-mcp": {
      "vm": "oci-apps",
      "domain": "mcp.diegonmarcos.com",
      "wg_only": true,
      "description": "Google personal MCP"
    },
    "authelia": {
      "vm": "oci-apps",
      "domain": "auth.diegonmarcos.com",
      "wg_only": false,
      "description": "Two-factor / SSO gate"
    },
    "caddy": {
      "vm": "oci-apps",
      "domain": "proxy.diegonmarcos.com",
      "wg_only": false,
      "description": "Reverse proxy"
    },
    "caddy-public": {
      "vm": "oci-apps",
      "domain": "*.diegonmarcos.com",
      "wg_only": false,
      "description": "Public edge proxy"
    },
    "crowdsec": {
      "vm": "oci-apps",
      "domain": "crowdsec.diegonmarcos.com",
      "wg_only": true,
      "description": "Intrusion detection"
    },
    "introspect-proxy": {
      "vm": "oci-apps",
      "domain": null,
      "wg_only": true,
      "description": "OAuth introspection proxy"
    },
    "dagu": {
      "vm": "oci-analytics",
      "domain": "workflows.diegonmarcos.com",
      "wg_only": true,
      "description": "Workflow/DAG engine"
    },
    "dbgate": {
      "vm": "oci-apps",
      "domain": "db.diegonmarcos.com",
      "wg_only": true,
      "description": "DB admin UI"
    },
    "matomo": {
      "vm": "oci-analytics",
      "domain": "analytics.diegonmarcos.com/matomo",
      "wg_only": false,
      "description": "Web analytics"
    },
    "umami": {
      "vm": "oci-analytics",
      "domain": "analytics.diegonmarcos.com/umami",
      "wg_only": false,
      "description": "Privacy-first analytics"
    },
    "openobserve": {
      "vm": "oci-apps",
      "domain": "analytics.diegonmarcos.com/openobserve",
      "wg_only": false,
      "description": "Observability platform (logs/traces/metrics)"
    },
    "ntfy": {
      "vm": "oci-apps",
      "domain": "rss.diegonmarcos.com",
      "wg_only": true,
      "description": "Push notifications"
    },
    "cloud-spec": {
      "vm": "oci-apps",
      "domain": null,
      "wg_only": true,
      "description": "OpenAPI spec hub"
    },
    "postlite": {
      "vm": "oci-apps",
      "domain": null,
      "wg_only": true,
      "description": "SQLite-backed Postgres-compatible store"
    },
    "redis": {
      "vm": "oci-apps",
      "domain": null,
      "wg_only": true,
      "description": "Cache / queue"
    },
    "hickory-dns": {
      "vm": "oci-mail",
      "domain": "dns.internal",
      "wg_only": true,
      "description": "Authoritative mesh DNS"
    },
    "unbound-dns64": {
      "vm": "oci-mail",
      "domain": "dns64.internal",
      "wg_only": true,
      "description": "Recursive resolver"
    },
    "wireguard-mesh": {
      "vm": "oci-apps",
      "domain": "mesh.diegonmarcos.com",
      "wg_only": true,
      "description": "WireGuard mesh hub"
    },
    "wireguard-mesh-ws-tunnel": {
      "vm": "gcp-f-micro_1",
      "domain": "vpn.diegonmarcos.com",
      "wg_only": false,
      "description": "WebSocket-tunneled WG"
    },
    "wireguard-public": {
      "vm": "oci-apps",
      "domain": null,
      "wg_only": true,
      "description": "Public WG endpoint"
    },
    "gitea": {
      "vm": "oci-apps",
      "domain": "git.diegonmarcos.com",
      "wg_only": false,
      "description": "Self-hosted git"
    },
    "backup-borg": {
      "vm": "oci-apps",
      "domain": null,
      "wg_only": true,
      "description": "Borg backups"
    },
    "backup-bup": {
      "vm": "oci-apps",
      "domain": null,
      "wg_only": true,
      "description": "Bup backups"
    },
    "languagetool": {
      "vm": "oci-apps",
      "domain": "languagetool.diegonmarcos.com",
      "wg_only": true,
      "description": "Grammar checker API"
    },
    "cloud-builder-x": {
      "vm": "oci-apps",
      "domain": null,
      "wg_only": true,
      "description": "Container build service"
    },
    "gha-runner": {
      "vm": "oci-apps",
      "domain": null,
      "wg_only": true,
      "description": "Self-hosted GitHub Actions runner"
    },
    "gcloud": {
      "vm": "gcp-f-micro_1",
      "domain": null,
      "wg_only": true,
      "description": "GCP project glue"
    },
    "my-ai-api": {
      "vm": "oci-apps",
      "domain": null,
      "wg_only": true,
      "description": "Personal AI gateway (loopback-only)"
    },
    "hermes-agent": {
      "vm": "oci-apps",
      "domain": null,
      "wg_only": true,
      "description": "Autonomous agent runner"
    },
    "kg-store": {
      "vm": "oci-apps",
      "domain": null,
      "wg_only": true,
      "description": "Knowledge-graph store"
    },
    "session-memory": {
      "vm": "oci-apps",
      "domain": null,
      "wg_only": true,
      "description": "Agent session memory"
    },
    "db-agent": {
      "vm": "oci-apps",
      "domain": null,
      "wg_only": true,
      "description": "DB query agent"
    },
    "claude-superset-api": {
      "vm": "oci-apps",
      "domain": null,
      "wg_only": true,
      "description": "Claude superset gateway"
    },
    "cloud-cgc-mcp": {
      "vm": "oci-apps",
      "domain": null,
      "wg_only": true,
      "description": "Cloud-config-generator MCP"
    },
    "chat-mattermost": {
      "vm": "oci-apps",
      "domain": "chat.diegonmarcos.com",
      "wg_only": false,
      "description": "Team chat"
    },
    "matrix-element": {
      "vm": "oci-apps",
      "domain": "messenger.diegonmarcos.com",
      "wg_only": false,
      "description": "Matrix web client"
    },
    "matrix-mautrix-whatsapp": {
      "vm": "oci-apps",
      "domain": null,
      "wg_only": true,
      "description": "WhatsApp bridge"
    },
    "snappymail": {
      "vm": "oci-mail",
      "domain": "webmail.diegonmarcos.com",
      "wg_only": false,
      "description": "Webmail client"
    },
    "maddy": {
      "vm": "oci-mail",
      "domain": "mail.diegonmarcos.com",
      "wg_only": false,
      "description": "SMTP/IMAP mail server"
    },
    "stalwart": {
      "vm": "oci-mail",
      "domain": "jmap.diegonmarcos.com",
      "wg_only": false,
      "description": "JMAP mail server"
    },
    "mail-puller": {
      "vm": "oci-mail",
      "domain": "mail-puller.diegonmarcos.com",
      "wg_only": true,
      "description": "Mail fetch bridge"
    },
    "cypht": {
      "vm": "oci-mail",
      "domain": null,
      "wg_only": true,
      "description": "Webmail aggregator"
    },
    "vaultwarden": {
      "vm": "oci-apps",
      "domain": "vault.diegonmarcos.com",
      "wg_only": true,
      "description": "Password manager"
    },
    "photoprism": {
      "vm": "oci-apps",
      "domain": "photos.diegonmarcos.com",
      "wg_only": true,
      "description": "Photo library"
    },
    "playlist-syncer": {
      "vm": "oci-apps",
      "domain": "playlist.diegonmarcos.com",
      "wg_only": false,
      "description": "Playlist sync tool"
    },
    "news-gdelt": {
      "vm": "oci-apps",
      "domain": null,
      "wg_only": true,
      "description": "GDELT news ingest"
    },
    "calendar-radicale": {
      "vm": "oci-apps",
      "domain": "cal.diegonmarcos.com",
      "wg_only": false,
      "description": "CalDAV calendar"
    },
    "contacts-radicale": {
      "vm": "oci-apps",
      "domain": "contacts.diegonmarcos.com",
      "wg_only": false,
      "description": "CardDAV contacts"
    },
    "code-server": {
      "vm": "oci-apps",
      "domain": "ide.diegonmarcos.com",
      "wg_only": true,
      "description": "Browser VS Code"
    },
    "etherpad": {
      "vm": "oci-apps",
      "domain": "app.diegonmarcos.com/etherpad",
      "wg_only": false,
      "description": "Collaborative notepad"
    },
    "filebrowser": {
      "vm": "oci-apps",
      "domain": "app.diegonmarcos.com/filebrowser",
      "wg_only": false,
      "description": "Web file manager"
    },
    "grist": {
      "vm": "oci-apps",
      "domain": "sheets.diegonmarcos.com",
      "wg_only": true,
      "description": "Spreadsheet/DB hybrid"
    },
    "hedgedoc": {
      "vm": "oci-apps",
      "domain": "app.diegonmarcos.com/hedgedoc",
      "wg_only": false,
      "description": "Markdown notes"
    },
    "paca": {
      "vm": "oci-apps",
      "domain": "paca.diegonmarcos.com",
      "wg_only": false,
      "description": "Personal assistant / calendar app"
    },
    "revealmd": {
      "vm": "oci-apps",
      "domain": null,
      "wg_only": true,
      "description": "Markdown slide decks"
    },
    "send": {
      "vm": "oci-apps",
      "domain": "send.diegonmarcos.com",
      "wg_only": false,
      "description": "Encrypted file transfer"
    },
    "scrappers-api": {
      "vm": "oci-apps",
      "domain": "api.diegonmarcos.com/scrappers",
      "wg_only": false,
      "description": "Web scraping API"
    },
    "fin-api": {
      "vm": "oci-apps",
      "domain": "api.diegonmarcos.com/fin-api",
      "wg_only": true,
      "description": "Personal finance API"
    },
    "crawlee-cloud": {
      "vm": "oci-apps",
      "domain": null,
      "wg_only": true,
      "description": "Crawlee-based crawler service"
    },
    "front-end": {
      "vm": "oci-apps",
      "domain": "diegonmarcos.com",
      "wg_only": false,
      "description": "Portfolio / portal front-end"
    },
    "matrix-continuwuity": {
      "vm": "oci-apps",
      "domain": "matrix.diegonmarcos.com",
      "wg_only": false,
      "description": "Matrix homeserver (Continuwuity)"
    },
    "vaultwarden-mic": {
      "vm": "oci-apps",
      "domain": null,
      "wg_only": true,
      "description": "Secondary vault instance"
    },
    "alerts-api": {
      "vm": "oci-apps",
      "domain": null,
      "wg_only": true,
      "description": "Alerting API"
    }
  }
};
})();
