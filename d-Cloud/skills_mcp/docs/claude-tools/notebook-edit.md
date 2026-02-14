---
id: notebook-edit
type: mcp
name: NotebookEdit
path: NotebookEdit
summary: Edit Jupyter notebook cells
category: File Operations
parameters:
  - name: notebook_path
    type: string
    required: true
    description: Absolute path to the .ipynb file
  - name: new_source
    type: string
    required: true
    description: The new source content for the cell
  - name: cell_id
    type: string
    required: false
    description: ID of the cell to edit
  - name: cell_type
    type: string
    required: false
    description: code | markdown
  - name: edit_mode
    type: string
    required: false
    description: replace | insert | delete
---

Replaces, inserts, or deletes cells in Jupyter notebooks (.ipynb files). Supports code and markdown cell types.

## Example

```typescript
NotebookEdit({
  notebook_path: "/path/to/notebook.ipynb",
  cell_id: "abc123",
  new_source: "import pandas as pd\ndf = pd.read_csv('data.csv')",
  cell_type: "code"
})
```
