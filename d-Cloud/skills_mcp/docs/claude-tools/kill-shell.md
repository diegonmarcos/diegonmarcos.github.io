---
id: kill-shell
type: mcp
name: KillShell
path: KillShell
summary: Kill background shell
category: System
parameters:
  - name: shell_id
    type: string
    required: true
    description: The ID of the background shell to kill
---

Terminates a running background bash shell by its ID. Use /tasks to find shell IDs.

## Example

```typescript
KillShell({ shell_id: "abc123" })
```
