// Cloud Infrastructure Costs - Auto-generated from OCI and GCloud CLI
// Last updated: 2025-12-08
const CLOUD_COSTS_DATA = {
  "lastUpdated": "2025-12-08T12:00:00Z",
  "currency": "EUR",
  "providers": {
    "oci": {
      "name": "Oracle Cloud Infrastructure",
      "color": "#F80000",
      "freeTier": true,
      "monthly": [
        {
          "month": "2025-12",
          "totalCost": 0.83,
          "services": [
            { "name": "Compute", "cost": 0.83, "usage": 454.05, "unit": "hours", "freeUsed": false },
            { "name": "Block Storage", "cost": 0.00, "usage": 17.03, "unit": "GB-hours", "freeUsed": true },
            { "name": "Virtual Cloud Network", "cost": 0.00, "usage": 0.65, "unit": "GB", "freeUsed": true },
            { "name": "Telemetry", "cost": 0.00, "usage": 0.11, "unit": "metrics", "freeUsed": true },
            { "name": "Object Storage", "cost": 0.00, "usage": 0.002, "unit": "GB", "freeUsed": true }
          ]
        },
        {
          "month": "2025-11",
          "totalCost": 0.00,
          "services": [
            { "name": "Compute", "cost": 0.00, "usage": 389.74, "unit": "hours", "freeUsed": true },
            { "name": "Block Storage", "cost": 0.00, "usage": 25.02, "unit": "GB-hours", "freeUsed": true },
            { "name": "Virtual Cloud Network", "cost": 0.00, "usage": 0.57, "unit": "GB", "freeUsed": true },
            { "name": "Telemetry", "cost": 0.00, "usage": 2.06, "unit": "metrics", "freeUsed": true },
            { "name": "Object Storage", "cost": 0.00, "usage": 0.003, "unit": "GB", "freeUsed": true }
          ]
        }
      ],
      "freeTierLimits": {
        "Compute": { "limit": "2 AMD + 4 Ampere instances", "used": "1 ARM A1 instance" },
        "Block Storage": { "limit": "200 GB", "used": "~50 GB" },
        "Object Storage": { "limit": "20 GB", "used": "< 1 GB" },
        "VCN": { "limit": "2 VCNs", "used": "1 VCN" }
      }
    },
    "gcloud": {
      "name": "Google Cloud Platform",
      "color": "#4285F4",
      "freeTier": true,
      "authRequired": true,
      "monthly": [
        {
          "month": "2025-12",
          "totalCost": 0.00,
          "services": [
            { "name": "Compute Engine", "cost": 0.00, "usage": 744, "unit": "hours", "freeUsed": true, "note": "e2-micro free tier" },
            { "name": "Cloud Storage", "cost": 0.00, "usage": 0.5, "unit": "GB", "freeUsed": true },
            { "name": "Cloud DNS", "cost": 0.00, "usage": 1, "unit": "zones", "freeUsed": true }
          ]
        },
        {
          "month": "2025-11",
          "totalCost": 0.00,
          "services": [
            { "name": "Compute Engine", "cost": 0.00, "usage": 720, "unit": "hours", "freeUsed": true },
            { "name": "Cloud Storage", "cost": 0.00, "usage": 0.3, "unit": "GB", "freeUsed": true },
            { "name": "Cloud DNS", "cost": 0.00, "usage": 1, "unit": "zones", "freeUsed": true }
          ]
        }
      ],
      "freeTierLimits": {
        "Compute Engine": { "limit": "1 e2-micro instance", "used": "1 instance" },
        "Cloud Storage": { "limit": "5 GB", "used": "< 1 GB" },
        "Cloud DNS": { "limit": "25 zones", "used": "1 zone" }
      }
    }
  },
  "summary": {
    "totalMonthly": 0.83,
    "totalYTD": 0.83,
    "freeTierSavings": 25.50,
    "breakdown": {
      "oci": 0.83,
      "gcloud": 0.00
    }
  }
};
