// GENERATED FROM c3-topology-network.json by front-data-json-js-wrapper.sh — DO NOT EDIT BY HAND.
// Re-generate with: bash a-Portals/linktree/src/data/build.sh
(function () {
  var g = (typeof globalThis !== "undefined") ? globalThis : (typeof window !== "undefined" ? window : this);
  g.PORTAL_DATA = g.PORTAL_DATA || {};
  g.PORTAL_DATA["c3-topology-network"] = [
  {
    "vm": "oci-mail",
    "networks": [
      {
        "name": "proxy_net",
        "driver": "bridge",
        "containers": [
          "caddy",
          "authelia"
        ]
      },
      {
        "name": "app_net",
        "driver": "bridge",
        "containers": [
          "hickory-dns",
          "unbound-dns64",
          "snappymail",
          "maddy",
          "stalwart",
          "mail-puller"
        ]
      }
    ]
  },
  {
    "vm": "oci-analytics",
    "networks": [
      {
        "name": "proxy_net",
        "driver": "bridge",
        "containers": [
          "caddy",
          "authelia"
        ]
      },
      {
        "name": "app_net",
        "driver": "bridge",
        "containers": [
          "dagu",
          "matomo",
          "umami"
        ]
      }
    ]
  },
  {
    "vm": "oci-apps",
    "networks": [
      {
        "name": "proxy_net",
        "driver": "bridge",
        "containers": [
          "caddy",
          "authelia"
        ]
      },
      {
        "name": "app_net",
        "driver": "bridge",
        "containers": [
          "c3-infra-api",
          "c3-public-api",
          "c3-services-api",
          "c3-infra-mcp",
          "google-personal-mcp",
          "authelia"
        ]
      }
    ]
  },
  {
    "vm": "gcp-f-micro_1",
    "networks": [
      {
        "name": "proxy_net",
        "driver": "bridge",
        "containers": [
          "caddy",
          "authelia"
        ]
      },
      {
        "name": "app_net",
        "driver": "bridge",
        "containers": [
          "wireguard-mesh-ws-tunnel",
          "gcloud"
        ]
      }
    ]
  }
];
})();
