# Cloud Control API Documentation

Interactive API documentation for the Cloud Control system.

---

## API Specs

| Spec | Description | Endpoints |
|------|-------------|-----------|
| **Central Cloud Control API** | Unified API — architecture, VMs, services, domains, topology, cost, monitor, actions | 60 |
| **Containers Control On-Demand API** | oci-flex VM lifecycle & Docker container management via SSH | 12 |

---

## Documentation Access

### Option 1: Swagger UI (Interactive)
Open `index.html` in your browser for full interactive documentation with "Try it out" functionality.

**URL (when deployed):** https://diegonmarcos.github.io/a_Cloud/api/

**Features:**
- Interactive "Try it out" buttons
- Request/response examples
- Schema validation
- cURL/code snippets
- API selector dropdown (Central / On-Demand)

### Option 2: Markdown References
- [Central Cloud Control API](cloud_central_api.md) — 60 endpoints, 12 tags
- [Containers Control On-Demand API](cloud_ondemand_api.md) — 12 endpoints, 2 tags

### Option 3: OpenAPI Spec Files
- **YAML:** `openapi_central.yaml` / `openapi_ondemand.yaml`
- **JSON:** `openapi_central.json` / `openapi_ondemand.json`

**Import into:**
- Postman: Import → Link → `openapi_central.yaml`
- Insomnia: Import → URL → `openapi_central.yaml`
- VS Code: OpenAPI extension

---

## Quick Start

### Test Endpoints

```bash
# Health check
curl https://api.diegonmarcos.com/health

# Architecture (static data)
curl -H 'Authorization: Bearer $TOKEN' https://api.diegonmarcos.com/architecture

# Monitor (runtime)
curl -H 'Authorization: Bearer $TOKEN' https://api.diegonmarcos.com/monitor

# Topology
curl -H 'Authorization: Bearer $TOKEN' https://api.diegonmarcos.com/topology

# Cost
curl -H 'Authorization: Bearer $TOKEN' https://api.diegonmarcos.com/cost

# On-Demand: VM status
curl -H 'Authorization: Bearer $TOKEN' https://api.diegonmarcos.com/vm/status

# On-Demand: List containers
curl -H 'Authorization: Bearer $TOKEN' https://api.diegonmarcos.com/containers
```

---

## Files

```
b_Work_Tools/api/
├── src/
│   ├── index.html                 # Swagger UI documentation page
│   ├── openapi_central.yaml       # Central API spec (YAML)
│   ├── openapi_central.json       # Central API spec (JSON)
│   ├── openapi_ondemand.yaml      # On-Demand API spec (YAML)
│   ├── openapi_ondemand.json      # On-Demand API spec (JSON)
│   ├── cloud_central_api.md       # Central API reference (Markdown)
│   └── cloud_ondemand_api.md      # On-Demand API reference (Markdown)
├── build.json                     # Build config (copy src → dist)
├── build.sh                       # Build script
└── README.md                      # This file
```

---

## Build & Deploy

```bash
# Build (copies src/ → dist/)
bash ~/git/front/b_Work_Tools/api/build.sh build

# Local dev server
bash ~/git/front/b_Work_Tools/api/build.sh serve
```

---

## Customization

### Modify OpenAPI Specs
Edit `openapi_central.yaml` or `openapi_ondemand.yaml` to:
- Add new endpoints
- Update examples
- Change server URLs
- Add authentication schemes

Then regenerate JSON:
```bash
cd src/
npx js-yaml openapi_central.yaml > openapi_central.json
npx js-yaml openapi_ondemand.yaml > openapi_ondemand.json
```

### Customize Swagger UI
Edit `index.html` to:
- Change colors/styling (CSS)
- Modify header/footer
- Add custom links
- Adjust UI settings

---

*Last Updated: 2026-02-08*
