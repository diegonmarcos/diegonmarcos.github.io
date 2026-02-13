---
id: glob
type: mcp
name: Glob
path: Glob
summary: Find files by pattern
category: Search
parameters:
  - name: pattern
    type: string
    required: true
    description: "Glob pattern (e.g., \"**/*.ts\", \"src/**/*.{js,jsx}\")"
  - name: path
    type: string
    required: false
    description: "Directory to search in (default: cwd)"
---

Fast file pattern matching tool. Supports glob patterns like "**/*.js" or "src/**/*.ts". Returns matching file paths sorted by modification time.

## Example

```typescript
// Find all TypeScript files
Glob({ pattern: "**/*.ts" })

// Find in specific directory
Glob({ pattern: "*.scss", path: "/project/src/styles" })

// Multiple extensions
Glob({ pattern: "**/*.{ts,tsx}" })
```
