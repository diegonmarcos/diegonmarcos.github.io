---
id: lsp
type: mcp
name: LSP
path: LSP
summary: Language Server Protocol
category: Code Intelligence
parameters:
  - name: operation
    type: string
    required: true
    description: goToDefinition | findReferences | hover | documentSymbol | workspaceSymbol | goToImplementation | prepareCallHierarchy | incomingCalls | outgoingCalls
  - name: filePath
    type: string
    required: true
    description: The file to operate on
  - name: line
    type: number
    required: true
    description: Line number (1-based)
  - name: character
    type: number
    required: true
    description: Character offset (1-based)
---

Code intelligence via LSP: go to definition, find references, hover info, document symbols, call hierarchy.

## Example

```typescript
// Go to definition
LSP({
  operation: "goToDefinition",
  filePath: "/src/index.ts",
  line: 42,
  character: 15
})

// Find all references
LSP({
  operation: "findReferences",
  filePath: "/src/utils.ts",
  line: 10,
  character: 20
})
```
