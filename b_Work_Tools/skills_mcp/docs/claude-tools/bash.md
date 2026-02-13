---
id: bash
type: mcp
name: Bash
path: Bash
summary: Execute shell commands
category: System
parameters:
  - name: command
    type: string
    required: true
    description: The bash command to execute
  - name: description
    type: string
    required: false
    description: Short description of what command does
  - name: timeout
    type: number
    required: false
    description: "Timeout in ms (max 600000, default 120000)"
  - name: run_in_background
    type: boolean
    required: false
    description: Run command in background
---

Executes bash commands in a persistent shell session. For git, npm, docker, and other CLI operations. NOT for file reading/writing.

## Example

```typescript
// Git operations
Bash({ command: "git status", description: "Check git status" })

// Install dependencies
Bash({ command: "npm install", timeout: 300000 })

// Background process
Bash({ command: "npm run dev", run_in_background: true })
```
