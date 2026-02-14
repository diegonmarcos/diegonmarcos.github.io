---
id: read
type: mcp
name: Read
path: Read
summary: Read file contents
category: File Operations
parameters:
  - name: file_path
    type: string
    required: true
    description: The absolute path to the file to read
  - name: offset
    type: number
    required: false
    description: Line number to start reading from
  - name: limit
    type: number
    required: false
    description: "Number of lines to read (default: 2000)"
---

Reads a file from the local filesystem. Supports text files, images (PNG, JPG), PDFs, and Jupyter notebooks (.ipynb). Returns content with line numbers.

## Example

```typescript
// Read entire file
Read({ file_path: "/path/to/file.ts" })

// Read specific lines (for large files)
Read({ file_path: "/path/to/file.ts", offset: 100, limit: 50 })
```
