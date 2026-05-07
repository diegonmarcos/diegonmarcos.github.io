---
id: web-fetch
type: mcp
name: WebFetch
path: WebFetch
summary: Fetch and analyze web content
category: Web
parameters:
  - name: url
    type: string
    required: true
    description: The URL to fetch (HTTP upgraded to HTTPS)
  - name: prompt
    type: string
    required: true
    description: What information to extract from the page
---

Fetches URL content, converts HTML to markdown, and processes it with AI. Includes 15-minute cache. Handles redirects.

## Example

```typescript
WebFetch({
  url: "https://docs.example.com/api",
  prompt: "Extract the authentication methods and API endpoints"
})
```
