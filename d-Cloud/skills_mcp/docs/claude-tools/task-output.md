---
id: task-output
type: mcp
name: TaskOutput
path: TaskOutput
summary: Get agent/task output
category: Agents
parameters:
  - name: task_id
    type: string
    required: true
    description: The task ID to get output from
  - name: block
    type: boolean
    required: false
    description: "Wait for completion (default: true)"
  - name: timeout
    type: number
    required: false
    description: Max wait time in ms (max 600000)
---

Retrieves output from running or completed background tasks (agents, shells, remote sessions).

## Example

```typescript
// Wait for task completion
TaskOutput({ task_id: "agent-123" })

// Non-blocking check
TaskOutput({ task_id: "agent-123", block: false })
```
