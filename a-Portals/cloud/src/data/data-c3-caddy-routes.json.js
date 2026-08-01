// GENERATED FROM c3-caddy-routes.json by front-data-json-js-wrapper.sh — DO NOT EDIT BY HAND.
// Re-generate with: bash a-Portals/linktree/src/data/build.sh
(function () {
  var g = (typeof globalThis !== "undefined") ? globalThis : (typeof window !== "undefined" ? window : this);
  g.PORTAL_DATA = g.PORTAL_DATA || {};
  g.PORTAL_DATA["c3-caddy-routes"] = {
  "_generated": "2026-08-01T09:00:00Z",
  "routes": [
    {
      "domain": "api.diegonmarcos.com/c3-infra-api",
      "upstream": "c3-infra-api:8080",
      "auth": "none"
    },
    {
      "domain": "api.diegonmarcos.com/pub",
      "upstream": "c3-public-api:8080",
      "auth": "none"
    },
    {
      "domain": "api.diegonmarcos.com/c3-services-api",
      "upstream": "c3-services-api:8080",
      "auth": "none"
    },
    {
      "domain": "mcp.diegonmarcos.com/c3-infra-mcp",
      "upstream": "c3-infra-mcp:8080",
      "auth": "two_factor"
    },
    {
      "domain": "mcp.diegonmarcos.com",
      "upstream": "google-personal-mcp:8080",
      "auth": "two_factor"
    },
    {
      "domain": "auth.diegonmarcos.com",
      "upstream": "authelia:8080",
      "auth": "none"
    },
    {
      "domain": "proxy.diegonmarcos.com",
      "upstream": "caddy:8080",
      "auth": "none"
    },
    {
      "domain": "*.diegonmarcos.com",
      "upstream": "caddy-public:8080",
      "auth": "none"
    },
    {
      "domain": "crowdsec.diegonmarcos.com",
      "upstream": "crowdsec:8080",
      "auth": "two_factor"
    },
    {
      "domain": "workflows.diegonmarcos.com",
      "upstream": "dagu:8080",
      "auth": "two_factor"
    },
    {
      "domain": "db.diegonmarcos.com",
      "upstream": "dbgate:8080",
      "auth": "two_factor"
    },
    {
      "domain": "analytics.diegonmarcos.com/matomo",
      "upstream": "matomo:8080",
      "auth": "none"
    },
    {
      "domain": "analytics.diegonmarcos.com/umami",
      "upstream": "umami:8080",
      "auth": "none"
    },
    {
      "domain": "analytics.diegonmarcos.com/openobserve",
      "upstream": "openobserve:8080",
      "auth": "none"
    },
    {
      "domain": "rss.diegonmarcos.com",
      "upstream": "ntfy:8080",
      "auth": "two_factor"
    },
    {
      "domain": "dns.internal",
      "upstream": "hickory-dns:8080",
      "auth": "two_factor"
    },
    {
      "domain": "dns64.internal",
      "upstream": "unbound-dns64:8080",
      "auth": "two_factor"
    },
    {
      "domain": "mesh.diegonmarcos.com",
      "upstream": "wireguard-mesh:8080",
      "auth": "two_factor"
    },
    {
      "domain": "vpn.diegonmarcos.com",
      "upstream": "wireguard-mesh-ws-tunnel:8080",
      "auth": "none"
    },
    {
      "domain": "git.diegonmarcos.com",
      "upstream": "gitea:8080",
      "auth": "none"
    },
    {
      "domain": "languagetool.diegonmarcos.com",
      "upstream": "languagetool:8080",
      "auth": "two_factor"
    },
    {
      "domain": "chat.diegonmarcos.com",
      "upstream": "chat-mattermost:8080",
      "auth": "none"
    },
    {
      "domain": "messenger.diegonmarcos.com",
      "upstream": "matrix-element:8080",
      "auth": "none"
    },
    {
      "domain": "webmail.diegonmarcos.com",
      "upstream": "snappymail:8080",
      "auth": "none"
    },
    {
      "domain": "mail.diegonmarcos.com",
      "upstream": "maddy:8080",
      "auth": "none"
    },
    {
      "domain": "jmap.diegonmarcos.com",
      "upstream": "stalwart:8080",
      "auth": "none"
    },
    {
      "domain": "mail-puller.diegonmarcos.com",
      "upstream": "mail-puller:8080",
      "auth": "two_factor"
    },
    {
      "domain": "vault.diegonmarcos.com",
      "upstream": "vaultwarden:8080",
      "auth": "two_factor"
    },
    {
      "domain": "photos.diegonmarcos.com",
      "upstream": "photoprism:8080",
      "auth": "two_factor"
    },
    {
      "domain": "playlist.diegonmarcos.com",
      "upstream": "playlist-syncer:8080",
      "auth": "none"
    },
    {
      "domain": "cal.diegonmarcos.com",
      "upstream": "calendar-radicale:8080",
      "auth": "none"
    },
    {
      "domain": "contacts.diegonmarcos.com",
      "upstream": "contacts-radicale:8080",
      "auth": "none"
    },
    {
      "domain": "ide.diegonmarcos.com",
      "upstream": "code-server:8080",
      "auth": "two_factor"
    },
    {
      "domain": "app.diegonmarcos.com/etherpad",
      "upstream": "etherpad:8080",
      "auth": "none"
    },
    {
      "domain": "app.diegonmarcos.com/filebrowser",
      "upstream": "filebrowser:8080",
      "auth": "none"
    },
    {
      "domain": "sheets.diegonmarcos.com",
      "upstream": "grist:8080",
      "auth": "two_factor"
    },
    {
      "domain": "app.diegonmarcos.com/hedgedoc",
      "upstream": "hedgedoc:8080",
      "auth": "none"
    },
    {
      "domain": "paca.diegonmarcos.com",
      "upstream": "paca:8080",
      "auth": "none"
    },
    {
      "domain": "send.diegonmarcos.com",
      "upstream": "send:8080",
      "auth": "none"
    },
    {
      "domain": "api.diegonmarcos.com/scrappers",
      "upstream": "scrappers-api:8080",
      "auth": "none"
    },
    {
      "domain": "api.diegonmarcos.com/fin-api",
      "upstream": "fin-api:8080",
      "auth": "two_factor"
    },
    {
      "domain": "diegonmarcos.com",
      "upstream": "front-end:8080",
      "auth": "none"
    },
    {
      "domain": "matrix.diegonmarcos.com",
      "upstream": "matrix-continuwuity:8080",
      "auth": "none"
    }
  ]
};
})();
