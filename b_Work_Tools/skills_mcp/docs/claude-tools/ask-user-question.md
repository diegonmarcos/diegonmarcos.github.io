---
id: ask-user
type: mcp
name: AskUserQuestion
path: AskUserQuestion
summary: Ask user questions
category: User Interaction
parameters:
  - name: questions
    type: "Question[]"
    required: true
    description: Array of 1-4 questions with options
---

Ask the user questions during execution. For clarifying requirements, getting preferences, or validating assumptions.

## Example

```typescript
AskUserQuestion({
  questions: [{
    question: "Which auth method should we use?",
    header: "Auth",
    options: [
      { label: "JWT (Recommended)", description: "Stateless tokens" },
      { label: "Session", description: "Server-side sessions" }
    ],
    multiSelect: false
  }]
})
```
