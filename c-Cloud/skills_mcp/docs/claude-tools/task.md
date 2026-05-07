---
id: task
type: mcp
name: Task
path: Task
summary: Launch specialized agents
category: Agents
parameters:
  - name: prompt
    type: string
    required: true
    description: The task for the agent to perform
  - name: subagent_type
    type: string
    required: true
    description: general-purpose | Explore | Plan | claude-code-guide
  - name: description
    type: string
    required: true
    description: Short description (3-5 words)
  - name: run_in_background
    type: boolean
    required: false
    description: Run agent in background
  - name: resume
    type: string
    required: false
    description: Agent ID to resume from previous execution
---

Launch autonomous agents for complex multi-step tasks. Types: general-purpose, Explore (codebase search), Plan (architecture), claude-code-guide (docs).

## Example

```typescript
// Explore codebase
Task({
  subagent_type: "Explore",
  description: "Find auth handlers",
  prompt: "Find where user authentication is implemented"
})

// Plan implementation
Task({
  subagent_type: "Plan",
  description: "Plan user feature",
  prompt: "Design implementation for user profile page"
})
```
