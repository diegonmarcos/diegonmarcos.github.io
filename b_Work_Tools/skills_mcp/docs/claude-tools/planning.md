---
type: mcp
category: Planning
items:
  - id: todo-write
    name: TodoWrite
    path: TodoWrite
    summary: Manage task list
    description: Create and manage structured task lists. Track progress with pending/in_progress/completed states. Use for complex multi-step tasks.
    parameters:
      - name: todos
        type: "Todo[]"
        required: true
        description: Array of todo items with content, status, and activeForm
  - id: enter-plan-mode
    name: EnterPlanMode
    path: EnterPlanMode
    summary: Start planning mode
    description: Enter plan mode for non-trivial implementations. Explore codebase and design approach before coding. Requires user approval.
  - id: exit-plan-mode
    name: ExitPlanMode
    path: ExitPlanMode
    summary: Exit planning mode
    description: Signal completion of planning phase. Plan should already be written to the plan file.
---

Planning tools for managing complex tasks and implementation workflows.

## TodoWrite Example

```typescript
TodoWrite({
  todos: [
    { content: "Setup project", status: "completed", activeForm: "Setting up project" },
    { content: "Implement auth", status: "in_progress", activeForm: "Implementing auth" },
    { content: "Write tests", status: "pending", activeForm: "Writing tests" }
  ]
})
```
