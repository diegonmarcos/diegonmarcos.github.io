# Cloud Control API Documentation

Interactive API documentation for the Cloud Control system.

---

## 📚 Documentation Access

### Option 1: Swagger UI (Interactive)
Open `index.html` in your browser for full interactive documentation with "Try it out" functionality.

**URL (when deployed):** https://diegonmarcos.github.io/a_Cloud/api/

**Features:**
- ✅ Interactive "Try it out" buttons
- ✅ Request/response examples
- ✅ Schema validation
- ✅ cURL/code snippets
- ✅ Beautiful UI

### Option 2: OpenAPI Spec Files
- **YAML:** `openapi.yaml` (human-readable)
- **JSON:** Download from Swagger UI or convert YAML

**Import into:**
- Postman: Import → Link → `openapi.yaml`
- Insomnia: Import → URL → `openapi.yaml`
- VS Code: OpenAPI extension

---

## 🔗 API Endpoints

| Endpoint | Method | Purpose | Fallback |
|----------|--------|---------|----------|
| `/api/cloud_control/monitor` | GET | VM & service status | `monitor.js` |
| `/api/cloud_control/costs_infra` | GET | Infrastructure costs | `costs_infra.js` |
| `/api/cloud_control/costs_ai` | GET | AI service costs | `costs_ai.js` |
| `/api/cloud_control/infrastructure` | GET | Full infrastructure | `infrastructure.js` |

**Base URL:** http://34.55.55.234:5000/api

---

## 🚀 Quick Start

### Test Endpoints

```bash
# Monitor (VMs & Services)
curl http://34.55.55.234:5000/api/cloud_control/monitor

# Infrastructure Costs
curl http://34.55.55.234:5000/api/cloud_control/costs_infra

# AI Costs
curl http://34.55.55.234:5000/api/cloud_control/costs_ai

# Full Infrastructure
curl http://34.55.55.234:5000/api/cloud_control/infrastructure
```

### JavaScript Fetch

```javascript
// Try API first
const response = await fetch('http://34.55.55.234:5000/api/cloud_control/monitor');
const data = await response.json();

// Fallback to static file
if (!response.ok) {
  // Use pre-loaded MONITOR variable from monitor.js
  const data = MONITOR;
}
```

---

## 📁 Files in this Directory

```
a_Cloud/api/
├── index.html                      # Swagger UI documentation page
├── openapi.yaml                    # OpenAPI 3.0 specification
├── README.md                       # This file
├── export_cloud_control_data.py   # Script to generate .js files
├── monitor.js                      # Static fallback data (MONITOR)
├── costs_infra.js                  # Static fallback data (COSTS_INFRA)
├── costs_ai.js                     # Static fallback data (COSTS_AI)
└── infrastructure.js               # Static fallback data (INFRASTRUCTURE)
```

---

## 🔄 Update Workflow

### 1. Update Source Data
Edit the master configuration:
```bash
vim /home/diego/Documents/Git/back-System/cloud/1.ops/cloud_dash.json
```

### 2. Regenerate Static Files
Run the export script:
```bash
cd /home/diego/Documents/Git/front-Github_io/a_Cloud/api
python export_cloud_control_data.py
```

**Output:**
```
✓ monitor.js → MONITOR
✓ costs_infra.js → COSTS_INFRA
✓ costs_ai.js → COSTS_AI
✓ infrastructure.js → INFRASTRUCTURE
```

### 3. Update API Specification (if needed)
Edit `openapi.yaml` if you:
- Add/remove endpoints
- Change request/response schemas
- Update descriptions

### 4. Rebuild & Deploy
```bash
cd /home/diego/Documents/Git/front-Github_io/cloud
./1.ops/build.sh build

# Commit and push to GitHub
git add .
git commit -m "Update cloud control API data"
git push
```

---

## 🎨 Customization

### Modify OpenAPI Spec
Edit `openapi.yaml` to:
- Add new endpoints
- Update examples
- Change server URLs
- Add authentication schemes

### Customize Swagger UI
Edit `index.html` to:
- Change colors/styling (CSS)
- Modify header/footer
- Add custom links
- Adjust UI settings

---

## 📖 OpenAPI Spec Structure

```yaml
openapi: 3.0.3
info:
  title: Cloud Control API
  version: 1.0.0

servers:
  - url: http://34.55.55.234:5000/api

paths:
  /cloud_control/monitor:
    get:
      summary: Get VM and service status
      responses:
        '200':
          description: Success
          content:
            application/json:
              schema: {...}
```

---

## 🧪 Testing

### Browser
```
1. Open index.html in browser
2. Click "Try it out" on any endpoint
3. Click "Execute"
4. View response
```

### cURL
```bash
curl -X GET "http://34.55.55.234:5000/api/cloud_control/monitor" \
     -H "accept: application/json"
```

### Python
```python
import requests

response = requests.get('http://34.55.55.234:5000/api/cloud_control/monitor')
data = response.json()
print(data)
```

### JavaScript
```javascript
fetch('http://34.55.55.234:5000/api/cloud_control/monitor')
  .then(res => res.json())
  .then(data => console.log(data));
```

---

## 📦 Deployment

### GitHub Pages (Recommended)
The Swagger UI (`index.html`) will be automatically deployed via GitHub Pages at:
```
https://diegonmarcos.github.io/a_Cloud/api/
```

**Setup:**
1. Push to `main` branch
2. GitHub Actions builds and deploys
3. Access docs at GitHub Pages URL

### Local Testing
```bash
# Option 1: Python HTTP server
cd /home/diego/Documents/Git/front-Github_io/a_Cloud/api
python -m http.server 8080

# Access: http://localhost:8080

# Option 2: Node.js http-server
npx http-server . -p 8080
```

---

## 🔍 Tools & Resources

### Import OpenAPI Spec Into:
- **Postman:** File → Import → `openapi.yaml`
- **Insomnia:** Import → From URL
- **VS Code:** OpenAPI (Swagger) Editor extension
- **Swagger Editor:** https://editor.swagger.io

### Generate Client SDKs:
```bash
# Install OpenAPI Generator
npm install @openapitools/openapi-generator-cli -g

# Generate JavaScript client
openapi-generator-cli generate \
  -i openapi.yaml \
  -g javascript \
  -o ./client-sdk

# Generate Python client
openapi-generator-cli generate \
  -i openapi.yaml \
  -g python \
  -o ./client-sdk-python
```

---

## 📝 Response Format Examples

### Monitor Endpoint
```json
{
  "vms": [{
    "category": "services",
    "categoryName": "Services",
    "vms": [{
      "id": "oci-f-micro_1",
      "name": "OCI Free Micro 1",
      "ip": "130.110.251.193",
      "status": "Online"
    }]
  }],
  "services": [{
    "category": "user-productivity",
    "services": [{
      "id": "matomo",
      "name": "Matomo Analytics",
      "health_status": "healthy"
    }]
  }]
}
```

### Costs Infra Endpoint
```json
{
  "costs": {
    "oracle": {
      "name": "Oracle Cloud",
      "tier": "always-free",
      "monthly": 0
    },
    "gcloud": {
      "name": "Google Cloud",
      "tier": "free-tier",
      "monthly": 0
    }
  },
  "timestamp": "2025-12-07"
}
```

---

## 🛠️ Troubleshooting

### Swagger UI doesn't load
- Check browser console for errors
- Ensure `openapi.yaml` is in same directory
- Check CORS settings if accessing from different domain

### API returns 404
- Verify Flask server is running
- Check server URL in `openapi.yaml`
- Test endpoint directly with cURL

### Static files not updating
- Run `export_cloud_control_data.py` again
- Clear browser cache
- Check file timestamps with `ls -lh`

---

## 📞 Support

**Owner:** Diego Nepomuceno Marcos
**Email:** diego@diegonmarcos.com
**Website:** https://diegonmarcos.com
**Docs:** https://github.com/diegonmarcos/back-System/tree/main/cloud/1.ops

---

## 📄 License

Private - Internal Use Only

---

*Last Updated: 2025-12-14*
