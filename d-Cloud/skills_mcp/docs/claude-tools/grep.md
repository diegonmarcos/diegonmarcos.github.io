---
id: grep
type: mcp
name: Grep
path: Grep
summary: Search file contents (ripgrep)
category: Search
parameters:
  - name: pattern
    type: string
    required: true
    description: Regex pattern to search for
  - name: path
    type: string
    required: false
    description: File or directory to search
  - name: output_mode
    type: string
    required: false
    description: content | files_with_matches | count
  - name: glob
    type: string
    required: false
    description: Filter files by glob pattern
  - name: type
    type: string
    required: false
    description: "File type (js, py, rust, go, etc.)"
  - name: "-C"
    type: number
    required: false
    description: Context lines before and after match
  - name: "-i"
    type: boolean
    required: false
    description: Case insensitive search
  - name: multiline
    type: boolean
    required: false
    description: Enable multiline matching
---

Powerful search tool built on ripgrep. Supports regex, file type filtering, context lines, and multiple output modes.

## Example

```typescript
// Find function definitions
Grep({ pattern: "function\\s+\\w+", type: "ts" })

// Show content with context
Grep({ pattern: "TODO|FIXME", output_mode: "content", "-C": 2 })

// Case insensitive search
Grep({ pattern: "error", "-i": true, glob: "*.log" })
```
