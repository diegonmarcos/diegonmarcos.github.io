// GENERATED FROM c3-firewall-rules.json by front-data-json-js-wrapper.sh — DO NOT EDIT BY HAND.
// Re-generate with: bash a-Portals/linktree/src/data/build.sh
(function () {
  var g = (typeof globalThis !== "undefined") ? globalThis : (typeof window !== "undefined" ? window : this);
  g.PORTAL_DATA = g.PORTAL_DATA || {};
  g.PORTAL_DATA["c3-firewall-rules"] = {
  "_generated": "2026-08-01T09:00:00Z",
  "vms": {
    "oci-mail": {
      "ingress": [
        {
          "port": 443,
          "proto": "tcp",
          "source": "0.0.0.0/0",
          "origin": "terraform"
        },
        {
          "port": 51820,
          "proto": "udp",
          "source": "0.0.0.0/0",
          "origin": "terraform"
        }
      ],
      "source": [
        "terraform",
        "os"
      ]
    },
    "oci-analytics": {
      "ingress": [
        {
          "port": 443,
          "proto": "tcp",
          "source": "0.0.0.0/0",
          "origin": "terraform"
        },
        {
          "port": 51820,
          "proto": "udp",
          "source": "0.0.0.0/0",
          "origin": "terraform"
        }
      ],
      "source": [
        "terraform",
        "os"
      ]
    },
    "oci-apps": {
      "ingress": [
        {
          "port": 443,
          "proto": "tcp",
          "source": "0.0.0.0/0",
          "origin": "terraform"
        },
        {
          "port": 51820,
          "proto": "udp",
          "source": "0.0.0.0/0",
          "origin": "terraform"
        }
      ],
      "source": [
        "terraform",
        "os"
      ]
    },
    "gcp-f-micro_1": {
      "ingress": [
        {
          "port": 443,
          "proto": "tcp",
          "source": "0.0.0.0/0",
          "origin": "terraform"
        },
        {
          "port": 51820,
          "proto": "udp",
          "source": "0.0.0.0/0",
          "origin": "terraform"
        }
      ],
      "source": [
        "terraform",
        "os"
      ]
    }
  }
};
})();
