// GENERATED FROM nav.json by front-data-json-js-wrapper.sh — DO NOT EDIT BY HAND.
// Re-generate with: bash a-Portals/linktree/src/data/build.sh
(function () {
  var g = (typeof globalThis !== "undefined") ? globalThis : (typeof window !== "undefined" ? window : this);
  g.PORTAL_DATA = g.PORTAL_DATA || {};
  g.PORTAL_DATA["nav"] = {
  "sections": [
    {
      "id": "A",
      "label": "Cash Flow",
      "icon": "expenses",
      "items": [
        { "id": "A0", "route": "cashflow/categories", "label": "Cash flow by category", "icon": "expenses",
          "tabs": [
            { "id": "overview",  "label": "Overview" },
            { "id": "donut",     "label": "Categories" },
            { "id": "trend",     "label": "Trend" }
          ]
        },
        { "id": "A1", "route": "cashflow/map", "label": "Geographical view", "icon": "map",
          "tabs": [
            { "id": "cities",    "label": "Cities" },
            { "id": "countries", "label": "Countries" }
          ]
        },
        { "id": "A2", "route": "cashflow/tables", "label": "Income & expense ledger", "icon": "file-text",
          "tabs": [
            { "id": "all",      "label": "All" },
            { "id": "expenses", "label": "Expenses" },
            { "id": "incomes",  "label": "Income" }
          ]
        }
      ]
    },
    {
      "id": "B",
      "label": "Assets & Income",
      "icon": "trending-up",
      "items": [
        { "id": "B0", "route": "assets/sources", "label": "Income by source", "icon": "trending-up",
          "tabs": [
            { "id": "donut",   "label": "Distribution" },
            { "id": "active",  "label": "Active" },
            { "id": "passive", "label": "Passive" }
          ]
        },
        { "id": "B1", "route": "assets/portfolio", "label": "Portfolio NAV", "icon": "portfolio",
          "tabs": [
            { "id": "allocation", "label": "Allocation" },
            { "id": "holdings",   "label": "Holdings" },
            { "id": "currency",   "label": "Currency exposure" }
          ]
        },
        { "id": "B2", "route": "assets/incomes", "label": "Income detail", "icon": "briefcase",
          "tabs": [
            { "id": "salary",     "label": "Employment" },
            { "id": "dividends",  "label": "Distributions" },
            { "id": "all",        "label": "All income" }
          ]
        }
      ]
    },
    {
      "id": "C",
      "label": "Liabilities",
      "icon": "shield",
      "items": [
        { "id": "C0", "route": "liabilities/credit-cards", "label": "Credit cards", "icon": "credit-card",
          "tabs": [
            { "id": "outstanding", "label": "Outstanding" },
            { "id": "by-card",     "label": "By card" },
            { "id": "recurring",   "label": "Recurring charges" }
          ]
        },
        { "id": "C1", "route": "liabilities/real-estate", "label": "Real estate & mortgages", "icon": "building",
          "tabs": [
            { "id": "portfolio",  "label": "Property portfolio" },
            { "id": "mortgages",  "label": "Mortgage schedule" },
            { "id": "yield",      "label": "Rental yield" }
          ]
        },
        { "id": "C2", "route": "liabilities/leverage", "label": "Capital markets leverage", "icon": "shield",
          "tabs": [
            { "id": "positions", "label": "Positions" },
            { "id": "ltv",       "label": "LTV monitor" },
            { "id": "cost",      "label": "Carry cost" }
          ]
        }
      ]
    },
    {
      "id": "D",
      "label": "Accounting",
      "icon": "reports",
      "items": [
        { "id": "D0", "route": "accounting/general", "label": "General report", "icon": "file-text",
          "tabs": [
            { "id": "income-stmt", "label": "Income statement" },
            { "id": "balance",     "label": "Balance sheet" },
            { "id": "cashflow",    "label": "Cash flow statement" }
          ]
        },
        { "id": "D1", "route": "accounting/tax-return", "label": "Personal tax return", "icon": "award", "badge": "BR",
          "tabs": [
            { "id": "summary",   "label": "Summary" },
            { "id": "assets",    "label": "Asset schedule" },
            { "id": "income",    "label": "Income schedule" },
            { "id": "vouchers",  "label": "Tax vouchers" }
          ]
        },
        { "id": "D2", "route": "accounting/reports", "label": "Custom reports", "icon": "reports",
          "tabs": [
            { "id": "templates", "label": "Templates" },
            { "id": "saved",     "label": "Saved" }
          ]
        },
        { "id": "D3", "route": "accounting/taxes", "label": "Tax calendar", "icon": "receipt",
          "tabs": [
            { "id": "calendar", "label": "Calendar" },
            { "id": "vouchers", "label": "Tax vouchers" },
            { "id": "property", "label": "Property tax" }
          ]
        }
      ]
    }
  ],
  "default": "cashflow/categories"
}
;
})();
