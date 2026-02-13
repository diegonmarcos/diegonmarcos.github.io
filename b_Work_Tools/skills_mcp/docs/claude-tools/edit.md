---
id: edit
type: mcp
name: Edit
path: Edit
summary: Edit file with string replacement
category: File Operations
parameters:
  - name: file_path
    type: string
    required: true
    description: The absolute path to the file to modify
  - name: old_string
    type: string
    required: true
    description: The exact text to replace (must be unique)
  - name: new_string
    type: string
    required: true
    description: The replacement text
  - name: replace_all
    type: boolean
    required: false
    description: "Replace all occurrences (default: false)"
---

Performs exact string replacements in files. Fails if old_string is not unique. Must read the file first before editing.

## Example

```typescript
Edit({
  file_path: "/path/to/file.ts",
  old_string: "const old = 'value';",
  new_string: "const updated = 'newValue';"
})
```
