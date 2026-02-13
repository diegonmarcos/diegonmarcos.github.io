---
id: web-search
type: mcp
name: WebSearch
path: WebSearch
summary: Search the web
category: Web
parameters:
  - name: query
    type: string
    required: true
    description: The search query
  - name: allowed_domains
    type: "string[]"
    required: false
    description: Only include results from these domains
  - name: blocked_domains
    type: "string[]"
    required: false
    description: Exclude results from these domains
---

Search the web for up-to-date information. Returns search results with links. Must include Sources section in response.

## Example

```typescript
// General search
WebSearch({ query: "React 19 new features 2025" })

// Domain-specific
WebSearch({
  query: "typescript generics",
  allowed_domains: ["typescriptlang.org", "github.com"]
})
```
