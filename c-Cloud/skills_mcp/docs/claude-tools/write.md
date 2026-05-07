---
id: write
type: mcp
name: Write
path: Write
summary: Write/create file
category: File Operations
parameters:
  - name: file_path
    type: string
    required: true
    description: The absolute path to the file to write
  - name: content
    type: string
    required: true
    description: The content to write to the file
---

Writes content to a file on the local filesystem. Overwrites existing files. Requires reading the file first if it exists.

## Example

```typescript
Write({
  file_path: "/path/to/new-file.ts",
  content: "export const hello = 'world';"
})
```
