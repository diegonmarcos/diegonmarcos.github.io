// Cloud Infrastructure Costs - Auto-generated from OCI and GCloud CLI
// Last updated: 2025-12-08
// OCI: Real data from usage-api CLI
// GCloud: Requires interactive auth - showing free tier estimates

const CLOUD_COSTS_DATA = {
  "lastUpdated": "2025-12-08T05:30:00Z",
  "currency": "EUR",

  // Summary totals
  "totals": {
    "totalMonthly": 0.83,
    "totalYTD": 0.83,
    "freeTierSavings": 28.50,
    "projectedMonthly": 1.20
  },

  // Monthly breakdown by provider
  "monthly": [
    {
      "month": "2025-12",
      "label": "December 2025",
      "totalCost": 0.83,
      "breakdown": {
        "oci": 0.83,
        "gcloud": 0.00
      },
      "daysInMonth": 31,
      "daysElapsed": 8
    },
    {
      "month": "2025-11",
      "label": "November 2025",
      "totalCost": 0.00,
      "breakdown": {
        "oci": 0.00,
        "gcloud": 0.00
      },
      "daysInMonth": 30,
      "daysElapsed": 30
    }
  ],

  // Provider details
  "providers": {
    "oci": {
      "id": "oci",
      "name": "Oracle Cloud Infrastructure",
      "shortName": "OCI",
      "color": "#F80000",
      "freeTier": true,
      "freeTierLabel": "Always Free",
      "region": "eu-frankfurt-1",
      "accountType": "Free Tier",
      "monthly": [
        {
          "month": "2025-12",
          "totalCost": 0.83,
          "services": [
            {
              "name": "Compute",
              "cost": 0.83,
              "usage": 454.05,
              "unit": "hours",
              "unitPrice": 0.00182,
              "freeUsed": false,
              "percentOfTotal": 100,
              "description": "VM.Standard.A1.Flex - ARM Instance"
            },
            {
              "name": "Block Storage",
              "cost": 0.00,
              "usage": 17.03,
              "unit": "GB-months",
              "freeUsed": true,
              "percentOfTotal": 0,
              "description": "Boot volumes and block storage"
            },
            {
              "name": "Virtual Cloud Network",
              "cost": 0.00,
              "usage": 0.65,
              "unit": "GB",
              "freeUsed": true,
              "percentOfTotal": 0,
              "description": "Outbound data transfer"
            },
            {
              "name": "Telemetry",
              "cost": 0.00,
              "usage": 0.11,
              "unit": "metrics",
              "freeUsed": true,
              "percentOfTotal": 0,
              "description": "Monitoring metrics"
            },
            {
              "name": "Object Storage",
              "cost": 0.00,
              "usage": 0.002,
              "unit": "GB",
              "freeUsed": true,
              "percentOfTotal": 0,
              "description": "Standard tier storage"
            }
          ]
        },
        {
          "month": "2025-11",
          "totalCost": 0.00,
          "services": [
            { "name": "Compute", "cost": 0.00, "usage": 389.74, "unit": "hours", "freeUsed": true },
            { "name": "Block Storage", "cost": 0.00, "usage": 25.02, "unit": "GB-months", "freeUsed": true },
            { "name": "Virtual Cloud Network", "cost": 0.00, "usage": 0.57, "unit": "GB", "freeUsed": true },
            { "name": "Telemetry", "cost": 0.00, "usage": 2.06, "unit": "metrics", "freeUsed": true },
            { "name": "Object Storage", "cost": 0.00, "usage": 0.003, "unit": "GB", "freeUsed": true }
          ]
        }
      ],
      "freeTierLimits": {
        "Compute": {
          "limit": "4 OCPU + 24 GB RAM (ARM)",
          "used": "4 OCPU + 24 GB",
          "percentage": 100,
          "note": "Always Free A1 Flex"
        },
        "Block Storage": {
          "limit": "200 GB total",
          "used": "~50 GB",
          "percentage": 25
        },
        "Object Storage": {
          "limit": "20 GB",
          "used": "< 1 GB",
          "percentage": 1
        },
        "VCN Egress": {
          "limit": "10 TB/month",
          "used": "< 1 GB",
          "percentage": 0
        },
        "Load Balancer": {
          "limit": "1 flexible LB",
          "used": "0",
          "percentage": 0
        }
      },
      "instances": [
        {
          "name": "arm-1",
          "shape": "VM.Standard.A1.Flex",
          "ocpu": 4,
          "memoryGB": 24,
          "status": "running",
          "monthlyEstimate": 0.00,
          "note": "Always Free eligible"
        }
      ]
    },
    "gcloud": {
      "id": "gcloud",
      "name": "Google Cloud Platform",
      "shortName": "GCP",
      "color": "#4285F4",
      "freeTier": true,
      "freeTierLabel": "Free Tier",
      "region": "us-central1",
      "accountType": "Free Tier",
      "authRequired": true,
      "authMessage": "Run 'gcloud auth login' to enable live data",
      "monthly": [
        {
          "month": "2025-12",
          "totalCost": 0.00,
          "services": [
            {
              "name": "Compute Engine",
              "cost": 0.00,
              "usage": 192,
              "unit": "hours",
              "freeUsed": true,
              "percentOfTotal": 0,
              "description": "e2-micro free tier instance"
            },
            {
              "name": "Cloud Storage",
              "cost": 0.00,
              "usage": 0.5,
              "unit": "GB",
              "freeUsed": true,
              "percentOfTotal": 0,
              "description": "Standard storage"
            },
            {
              "name": "Cloud DNS",
              "cost": 0.00,
              "usage": 1,
              "unit": "zones",
              "freeUsed": true,
              "percentOfTotal": 0,
              "description": "diegonmarcos.com zone"
            },
            {
              "name": "Networking",
              "cost": 0.00,
              "usage": 0.1,
              "unit": "GB",
              "freeUsed": true,
              "percentOfTotal": 0,
              "description": "Egress traffic"
            }
          ]
        },
        {
          "month": "2025-11",
          "totalCost": 0.00,
          "services": [
            { "name": "Compute Engine", "cost": 0.00, "usage": 720, "unit": "hours", "freeUsed": true },
            { "name": "Cloud Storage", "cost": 0.00, "usage": 0.3, "unit": "GB", "freeUsed": true },
            { "name": "Cloud DNS", "cost": 0.00, "usage": 1, "unit": "zones", "freeUsed": true },
            { "name": "Networking", "cost": 0.00, "usage": 0.2, "unit": "GB", "freeUsed": true }
          ]
        }
      ],
      "freeTierLimits": {
        "Compute Engine": {
          "limit": "1 e2-micro (730 hrs/mo)",
          "used": "1 instance",
          "percentage": 100
        },
        "Cloud Storage": {
          "limit": "5 GB",
          "used": "< 1 GB",
          "percentage": 10
        },
        "Cloud DNS": {
          "limit": "Free for first 25 zones",
          "used": "1 zone",
          "percentage": 4
        },
        "Egress": {
          "limit": "1 GB/month",
          "used": "< 0.5 GB",
          "percentage": 50
        }
      },
      "instances": [
        {
          "name": "arch-1",
          "shape": "e2-micro",
          "vcpu": 0.25,
          "memoryGB": 1,
          "status": "running",
          "monthlyEstimate": 0.00,
          "note": "Free tier eligible"
        }
      ]
    }
  },

  // Cost comparison with market rates
  "marketComparison": {
    "equivalentAWS": {
      "monthly": 45.00,
      "description": "t3.medium + 50GB EBS"
    },
    "equivalentAzure": {
      "monthly": 42.00,
      "description": "B2s + 50GB SSD"
    },
    "actualCost": 0.83,
    "savings": 44.17,
    "savingsPercent": 98
  },

  // Service icons mapping
  "serviceIcons": {
    "Compute": "server",
    "Compute Engine": "server",
    "Block Storage": "database",
    "Cloud Storage": "database",
    "Object Storage": "archive",
    "Virtual Cloud Network": "network",
    "Networking": "network",
    "Cloud DNS": "globe",
    "Telemetry": "activity",
    "Load Balancer": "git-branch"
  }
};
