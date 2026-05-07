(() => {
  // src_static/typescript/data.generated.ts
  var mcpTools = [
    {
      id: "ask-user",
      type: "mcp",
      name: "AskUserQuestion",
      path: "AskUserQuestion",
      summary: "Ask user questions",
      description: "Ask the user questions during execution. For clarifying requirements, getting preferences, or validating assumptions.",
      category: "User Interaction",
      parameters: [{ "name": "questions", "type": "Question[]", "required": true, "description": "Array of 1-4 questions with options" }],
      example: 'AskUserQuestion({\n  questions: [{\n    question: "Which auth method should we use?",\n    header: "Auth",\n    options: [\n      { label: "JWT (Recommended)", description: "Stateless tokens" },\n      { label: "Session", description: "Server-side sessions" }\n    ],\n    multiSelect: false\n  }]\n})'
    },
    {
      id: "bash",
      type: "mcp",
      name: "Bash",
      path: "Bash",
      summary: "Execute shell commands",
      description: "Executes bash commands in a persistent shell session. For git, npm, docker, and other CLI operations. NOT for file reading/writing.",
      category: "System",
      parameters: [{ "name": "command", "type": "string", "required": true, "description": "The bash command to execute" }, { "name": "description", "type": "string", "required": false, "description": "Short description of what command does" }, { "name": "timeout", "type": "number", "required": false, "description": "Timeout in ms (max 600000, default 120000)" }, { "name": "run_in_background", "type": "boolean", "required": false, "description": "Run command in background" }],
      example: '// Git operations\nBash({ command: "git status", description: "Check git status" })\n\n// Install dependencies\nBash({ command: "npm install", timeout: 300000 })\n\n// Background process\nBash({ command: "npm run dev", run_in_background: true })'
    },
    {
      id: "edit",
      type: "mcp",
      name: "Edit",
      path: "Edit",
      summary: "Edit file with string replacement",
      description: "Performs exact string replacements in files. Fails if old_string is not unique. Must read the file first before editing.",
      category: "File Operations",
      parameters: [{ "name": "file_path", "type": "string", "required": true, "description": "The absolute path to the file to modify" }, { "name": "old_string", "type": "string", "required": true, "description": "The exact text to replace (must be unique)" }, { "name": "new_string", "type": "string", "required": true, "description": "The replacement text" }, { "name": "replace_all", "type": "boolean", "required": false, "description": "Replace all occurrences (default: false)" }],
      example: `Edit({
  file_path: "/path/to/file.ts",
  old_string: "const old = 'value';",
  new_string: "const updated = 'newValue';"
})`
    },
    {
      id: "glob",
      type: "mcp",
      name: "Glob",
      path: "Glob",
      summary: "Find files by pattern",
      description: 'Fast file pattern matching tool. Supports glob patterns like "**/*.js" or "src/**/*.ts". Returns matching file paths sorted by modification time.',
      category: "Search",
      parameters: [{ "name": "pattern", "type": "string", "required": true, "description": 'Glob pattern (e.g., "**/*.ts", "src/**/*.{js,jsx}")' }, { "name": "path", "type": "string", "required": false, "description": "Directory to search in (default: cwd)" }],
      example: '// Find all TypeScript files\nGlob({ pattern: "**/*.ts" })\n\n// Find in specific directory\nGlob({ pattern: "*.scss", path: "/project/src/styles" })\n\n// Multiple extensions\nGlob({ pattern: "**/*.{ts,tsx}" })'
    },
    {
      id: "grep",
      type: "mcp",
      name: "Grep",
      path: "Grep",
      summary: "Search file contents (ripgrep)",
      description: "Powerful search tool built on ripgrep. Supports regex, file type filtering, context lines, and multiple output modes.",
      category: "Search",
      parameters: [{ "name": "pattern", "type": "string", "required": true, "description": "Regex pattern to search for" }, { "name": "path", "type": "string", "required": false, "description": "File or directory to search" }, { "name": "output_mode", "type": "string", "required": false, "description": "content | files_with_matches | count" }, { "name": "glob", "type": "string", "required": false, "description": "Filter files by glob pattern" }, { "name": "type", "type": "string", "required": false, "description": "File type (js, py, rust, go, etc.)" }, { "name": "-C", "type": "number", "required": false, "description": "Context lines before and after match" }, { "name": "-i", "type": "boolean", "required": false, "description": "Case insensitive search" }, { "name": "multiline", "type": "boolean", "required": false, "description": "Enable multiline matching" }],
      example: '// Find function definitions\nGrep({ pattern: "function\\\\s+\\\\w+", type: "ts" })\n\n// Show content with context\nGrep({ pattern: "TODO|FIXME", output_mode: "content", "-C": 2 })\n\n// Case insensitive search\nGrep({ pattern: "error", "-i": true, glob: "*.log" })'
    },
    {
      id: "kill-shell",
      type: "mcp",
      name: "KillShell",
      path: "KillShell",
      summary: "Kill background shell",
      description: "Terminates a running background bash shell by its ID. Use /tasks to find shell IDs.",
      category: "System",
      parameters: [{ "name": "shell_id", "type": "string", "required": true, "description": "The ID of the background shell to kill" }],
      example: 'KillShell({ shell_id: "abc123" })'
    },
    {
      id: "lsp",
      type: "mcp",
      name: "LSP",
      path: "LSP",
      summary: "Language Server Protocol",
      description: "Code intelligence via LSP: go to definition, find references, hover info, document symbols, call hierarchy.",
      category: "Code Intelligence",
      parameters: [{ "name": "operation", "type": "string", "required": true, "description": "goToDefinition | findReferences | hover | documentSymbol | workspaceSymbol | goToImplementation | prepareCallHierarchy | incomingCalls | outgoingCalls" }, { "name": "filePath", "type": "string", "required": true, "description": "The file to operate on" }, { "name": "line", "type": "number", "required": true, "description": "Line number (1-based)" }, { "name": "character", "type": "number", "required": true, "description": "Character offset (1-based)" }],
      example: '// Go to definition\nLSP({\n  operation: "goToDefinition",\n  filePath: "/src/index.ts",\n  line: 42,\n  character: 15\n})\n\n// Find all references\nLSP({\n  operation: "findReferences",\n  filePath: "/src/utils.ts",\n  line: 10,\n  character: 20\n})'
    },
    {
      id: "notebook-edit",
      type: "mcp",
      name: "NotebookEdit",
      path: "NotebookEdit",
      summary: "Edit Jupyter notebook cells",
      description: "Replaces, inserts, or deletes cells in Jupyter notebooks (.ipynb files). Supports code and markdown cell types.",
      category: "File Operations",
      parameters: [{ "name": "notebook_path", "type": "string", "required": true, "description": "Absolute path to the .ipynb file" }, { "name": "new_source", "type": "string", "required": true, "description": "The new source content for the cell" }, { "name": "cell_id", "type": "string", "required": false, "description": "ID of the cell to edit" }, { "name": "cell_type", "type": "string", "required": false, "description": "code | markdown" }, { "name": "edit_mode", "type": "string", "required": false, "description": "replace | insert | delete" }],
      example: `NotebookEdit({
  notebook_path: "/path/to/notebook.ipynb",
  cell_id: "abc123",
  new_source: "import pandas as pd\\ndf = pd.read_csv('data.csv')",
  cell_type: "code"
})`
    },
    {
      id: "todo-write",
      type: "mcp",
      name: "TodoWrite",
      path: "TodoWrite",
      summary: "Manage task list",
      description: "Create and manage structured task lists. Track progress with pending/in_progress/completed states. Use for complex multi-step tasks.",
      category: "Planning",
      parameters: [{ "name": "todos", "type": "Todo[]", "required": true, "description": "Array of todo items with content, status, and activeForm" }]
    },
    {
      id: "enter-plan-mode",
      type: "mcp",
      name: "EnterPlanMode",
      path: "EnterPlanMode",
      summary: "Start planning mode",
      description: "Enter plan mode for non-trivial implementations. Explore codebase and design approach before coding. Requires user approval.",
      category: "Planning"
    },
    {
      id: "exit-plan-mode",
      type: "mcp",
      name: "ExitPlanMode",
      path: "ExitPlanMode",
      summary: "Exit planning mode",
      description: "Signal completion of planning phase. Plan should already be written to the plan file.",
      category: "Planning"
    },
    {
      id: "read",
      type: "mcp",
      name: "Read",
      path: "Read",
      summary: "Read file contents",
      description: "Reads a file from the local filesystem. Supports text files, images (PNG, JPG), PDFs, and Jupyter notebooks (.ipynb). Returns content with line numbers.",
      category: "File Operations",
      parameters: [{ "name": "file_path", "type": "string", "required": true, "description": "The absolute path to the file to read" }, { "name": "offset", "type": "number", "required": false, "description": "Line number to start reading from" }, { "name": "limit", "type": "number", "required": false, "description": "Number of lines to read (default: 2000)" }],
      example: '// Read entire file\nRead({ file_path: "/path/to/file.ts" })\n\n// Read specific lines (for large files)\nRead({ file_path: "/path/to/file.ts", offset: 100, limit: 50 })'
    },
    {
      id: "task-output",
      type: "mcp",
      name: "TaskOutput",
      path: "TaskOutput",
      summary: "Get agent/task output",
      description: "Retrieves output from running or completed background tasks (agents, shells, remote sessions).",
      category: "Agents",
      parameters: [{ "name": "task_id", "type": "string", "required": true, "description": "The task ID to get output from" }, { "name": "block", "type": "boolean", "required": false, "description": "Wait for completion (default: true)" }, { "name": "timeout", "type": "number", "required": false, "description": "Max wait time in ms (max 600000)" }],
      example: '// Wait for task completion\nTaskOutput({ task_id: "agent-123" })\n\n// Non-blocking check\nTaskOutput({ task_id: "agent-123", block: false })'
    },
    {
      id: "task",
      type: "mcp",
      name: "Task",
      path: "Task",
      summary: "Launch specialized agents",
      description: "Launch autonomous agents for complex multi-step tasks. Types: general-purpose, Explore (codebase search), Plan (architecture), claude-code-guide (docs).",
      category: "Agents",
      parameters: [{ "name": "prompt", "type": "string", "required": true, "description": "The task for the agent to perform" }, { "name": "subagent_type", "type": "string", "required": true, "description": "general-purpose | Explore | Plan | claude-code-guide" }, { "name": "description", "type": "string", "required": true, "description": "Short description (3-5 words)" }, { "name": "run_in_background", "type": "boolean", "required": false, "description": "Run agent in background" }, { "name": "resume", "type": "string", "required": false, "description": "Agent ID to resume from previous execution" }],
      example: '// Explore codebase\nTask({\n  subagent_type: "Explore",\n  description: "Find auth handlers",\n  prompt: "Find where user authentication is implemented"\n})\n\n// Plan implementation\nTask({\n  subagent_type: "Plan",\n  description: "Plan user feature",\n  prompt: "Design implementation for user profile page"\n})'
    },
    {
      id: "web-fetch",
      type: "mcp",
      name: "WebFetch",
      path: "WebFetch",
      summary: "Fetch and analyze web content",
      description: "Fetches URL content, converts HTML to markdown, and processes it with AI. Includes 15-minute cache. Handles redirects.",
      category: "Web",
      parameters: [{ "name": "url", "type": "string", "required": true, "description": "The URL to fetch (HTTP upgraded to HTTPS)" }, { "name": "prompt", "type": "string", "required": true, "description": "What information to extract from the page" }],
      example: 'WebFetch({\n  url: "https://docs.example.com/api",\n  prompt: "Extract the authentication methods and API endpoints"\n})'
    },
    {
      id: "web-search",
      type: "mcp",
      name: "WebSearch",
      path: "WebSearch",
      summary: "Search the web",
      description: "Search the web for up-to-date information. Returns search results with links. Must include Sources section in response.",
      category: "Web",
      parameters: [{ "name": "query", "type": "string", "required": true, "description": "The search query" }, { "name": "allowed_domains", "type": "string[]", "required": false, "description": "Only include results from these domains" }, { "name": "blocked_domains", "type": "string[]", "required": false, "description": "Exclude results from these domains" }],
      example: '// General search\nWebSearch({ query: "React 19 new features 2025" })\n\n// Domain-specific\nWebSearch({\n  query: "typescript generics",\n  allowed_domains: ["typescriptlang.org", "github.com"]\n})'
    },
    {
      id: "write",
      type: "mcp",
      name: "Write",
      path: "Write",
      summary: "Write/create file",
      description: "Writes content to a file on the local filesystem. Overwrites existing files. Requires reading the file first if it exists.",
      category: "File Operations",
      parameters: [{ "name": "file_path", "type": "string", "required": true, "description": "The absolute path to the file to write" }, { "name": "content", "type": "string", "required": true, "description": "The content to write to the file" }],
      example: `Write({
  file_path: "/path/to/new-file.ts",
  content: "export const hello = 'world';"
})`
    }
  ];
  var officialSkills = [
    {
      id: "skill-algorithmic-art",
      type: "skill",
      name: "Algorithmic Art",
      path: "algorithmic-art",
      summary: "Generative art with p5.js",
      description: "Create generative and algorithmic art using p5.js. Supports seeded randomness for reproducibility, particle systems, fractals, Perlin noise, and creative coding patterns. Outputs as HTML with embedded canvas.",
      category: "Design & Creative",
      requiredMcp: ["Write"],
      source: "anthropics/skills"
    },
    {
      id: "skill-brand-guidelines",
      type: "skill",
      name: "Brand Guidelines",
      path: "brand-guidelines",
      summary: "Apply Anthropic brand styling",
      description: "Apply official brand identity: Colors (Dark #141413, Light #faf9f5, Orange #d97757, Blue #6a9bcc, Green #788c5d), Typography (Headings: Poppins, Body: Lora). Smart font application to 24pt+ headings, automatic fallbacks. The skill ensures consistent brand application across all generated documents, presentations, and web pages. The color palette centers on a warm neutral foundation -- dark charcoal (#141413) and warm off-white (#faf9f5) -- with mid-gray (#b0aea5) for secondary elements. Three accent colors serve distinct purposes: orange (#d97757) for primary actions and emphasis, blue (#6a9bcc) for informational elements and links, and green (#788c5d) for success states and positive indicators. Typography uses Poppins for headings at 24pt and above, providing clean geometric authority, with Lora as the body font for comfortable reading at smaller sizes. The skill automatically applies appropriate fallback font stacks and handles cases where custom fonts may not be available.",
      category: "Communication",
      parameters: [{ "name": "Main Colors", "type": "Hex", "required": true, "description": "#141413 (dark), #faf9f5 (light), #b0aea5 (mid gray)" }, { "name": "Accents", "type": "Hex", "required": true, "description": "#d97757 (orange), #6a9bcc (blue), #788c5d (green)" }, { "name": "Fonts", "type": "Typography", "required": true, "description": "Poppins (headings), Lora (body)" }],
      requiredMcp: ["Read", "Write"],
      source: "anthropics/skills"
    },
    {
      id: "skill-canvas-design",
      type: "skill",
      name: "Canvas Design",
      path: "canvas-design",
      summary: "Visual art creation (PNG/PDF)",
      description: "Two-step design process: 1) Create a design philosophy/aesthetic movement (4-6 paragraphs), 2) Express it visually. 90% visual, 10% text. Museum/magazine quality with expert craftsmanship. Subtle conceptual references, not literal.",
      category: "Design & Creative",
      parameters: [{ "name": "Design Philosophy", "type": "Markdown", "required": true, "description": "Name movement, articulate visual essence" }, { "name": "Canvas Expression", "type": "PDF/PNG", "required": true, "description": "Visual output with minimal text" }, { "name": "canvas-fonts", "type": "Directory", "required": false, "description": "Available fonts for typography" }],
      requiredMcp: ["Write", "Read"],
      source: "anthropics/skills"
    },
    {
      id: "skill-doc-coauthoring",
      type: "skill",
      name: "Doc Co-authoring",
      path: "doc-coauthoring",
      summary: "Three-stage collaborative writing",
      description: `Structured 3-stage workflow: 1) Context Gathering (meta-questions, info dumping), 2) Refinement (clarify --> brainstorm --> curate --> draft --> iterate per section), 3) Reader Testing (sub-agent tests with fresh context). For PRDs, specs, proposals, RFCs. **Stage 1 -- Context Gathering**: The skill begins by asking meta-questions to understand the document's purpose, target audience, expected impact, and constraints. It encourages "info dumping" where the author shares raw thoughts, existing notes, and reference materials without worrying about structure. This stage produces a structured brief that guides the rest of the process. **Stage 2 -- Section-by-Section Refinement**: Each section of the document goes through a four-step cycle: clarify (resolve ambiguities with targeted questions), brainstorm (generate multiple approaches), curate (select the strongest direction), and draft (produce polished prose). The author reviews and iterates on each section before moving to the next. **Stage 3 -- Reader Testing**: A fresh sub-agent with no prior context reads the completed document and attempts to answer key comprehension questions. This reveals gaps, unclear sections, and assumptions that insiders might miss. Feedback from the reader test drives final revisions.`,
      category: "Communication",
      parameters: [{ "name": "Stage 1", "type": "Workflow", "required": true, "description": "Context gathering: doc type, audience, impact, constraints" }, { "name": "Stage 2", "type": "Workflow", "required": true, "description": "Section-by-section: clarify --> brainstorm --> curate --> draft" }, { "name": "Stage 3", "type": "Workflow", "required": true, "description": "Reader testing with fresh sub-agent" }],
      requiredMcp: ["Read", "Write", "Edit", "Task", "AskUserQuestion"],
      source: "anthropics/skills"
    },
    {
      id: "skill-docx",
      type: "skill",
      name: "DOCX",
      path: "docx",
      summary: "Word document manipulation",
      description: "Comprehensive Word document handling: text extraction via pandoc, raw XML access for comments/formatting/media, document creation with docx-js, tracked changes (redlining) with OOXML, and visualization via LibreOffice PDF conversion.",
      category: "Document Skills",
      parameters: [{ "name": "pandoc", "type": "CLI", "required": true, "description": "Text extraction with tracked changes" }, { "name": "docx (npm)", "type": "Node.js", "required": true, "description": "Document creation" }, { "name": "LibreOffice", "type": "CLI", "required": false, "description": "PDF/image conversion" }, { "name": "defusedxml", "type": "Python", "required": false, "description": "Secure XML parsing for OOXML" }],
      requiredMcp: ["Read", "Write", "Bash"],
      source: "anthropics/skills"
    },
    {
      id: "skill-frontend-design",
      type: "skill",
      name: "Frontend Design",
      path: "frontend-design",
      summary: "Production-grade bold UI",
      description: `Create distinctive, production-grade frontends avoiding "AI aesthetics". Process: Purpose --> Tone (pick extreme: brutalist, maximalist, retro-futuristic, etc.) --> Constraints --> Differentiation. Avoid: Inter/Roboto, purple gradients, predictable layouts. The skill enforces a deliberate design process that starts with understanding the project's purpose, then selects a strong visual tone rather than defaulting to safe, generic choices. Typography must be distinctive -- no fallback to overused system fonts. Motion design should be intentional with orchestrated reveals and micro-interactions. Backgrounds use gradient meshes, noise textures, or geometric patterns instead of flat solid colors.`,
      category: "Development",
      parameters: [{ "name": "Typography", "type": "Guideline", "required": true, "description": "Distinctive fonts, not Arial/Inter/Roboto" }, { "name": "Motion", "type": "Guideline", "required": false, "description": "CSS animations, orchestrated reveals" }, { "name": "Backgrounds", "type": "Guideline", "required": false, "description": "Gradient meshes, noise, geometric patterns" }],
      requiredMcp: ["Write", "Read", "Glob"],
      source: "anthropics/skills"
    },
    {
      id: "skill-internal-comms",
      type: "skill",
      name: "Internal Comms",
      path: "internal-comms",
      summary: "Status reports & newsletters",
      description: "Write internal communications with company formats: 3P updates (Progress/Plans/Problems), company newsletters, FAQ responses, status reports, leadership updates, incident reports. Load guideline files from examples/ directory. The skill provides structured templates for common internal communication needs. The 3P update format (Progress/Plans/Problems) is used for team and project status reports -- each section is concise and actionable. Company newsletters follow a structured layout with sections for announcements, team highlights, upcoming events, and key metrics. FAQ responses maintain a consistent tone and format for addressing recurring questions. When guideline files exist in the examples/ directory, the skill loads them to ensure formatting matches established organizational patterns. When no template matches the request, it falls back to the general communications template, which provides a clear structure adaptable to any internal message type including leadership updates, incident reports, policy changes, and team announcements.",
      category: "Communication",
      parameters: [{ "name": "3p-updates.md", "type": "Template", "required": false, "description": "Progress/Plans/Problems format" }, { "name": "company-newsletter.md", "type": "Template", "required": false, "description": "Newsletter format" }, { "name": "faq-answers.md", "type": "Template", "required": false, "description": "FAQ response format" }, { "name": "general-comms.md", "type": "Template", "required": false, "description": "Fallback template" }],
      requiredMcp: ["Read", "Write"],
      source: "anthropics/skills"
    },
    {
      id: "skill-mcp-builder",
      type: "skill",
      name: "MCP Builder",
      path: "mcp-builder",
      summary: "Create MCP servers",
      description: "Guide for building Model Context Protocol (MCP) servers to extend Claude with external tools. Research API --> Implement server --> Test with Bash --> Package. Integrates databases, APIs, and services. The skill walks through the full lifecycle of creating an MCP server. It starts with researching the target API or service to understand its capabilities and authentication requirements. Implementation follows the MCP SDK patterns -- defining tools with JSON Schema input validation, implementing handlers, and setting up the stdio transport. Testing is done iteratively using Bash to invoke the server and validate tool responses. The final package includes proper dependency management, configuration examples, and documentation for end users. MCP servers can expose tools (callable functions), resources (readable data), and prompts (reusable templates). The skill covers all three primitives and helps choose which patterns fit the integration being built.",
      category: "Development",
      requiredMcp: ["Write", "Read", "Bash", "Glob", "WebSearch"],
      source: "anthropics/skills"
    },
    {
      id: "skill-pdf",
      type: "skill",
      name: "PDF",
      path: "pdf",
      summary: "PDF manipulation toolkit",
      description: "Comprehensive PDF toolkit: extract text/tables with pdfplumber, OCR scanned docs with pytesseract, create PDFs with reportlab, merge/split with pypdf/qpdf, rotate pages, add watermarks, encrypt/decrypt, and fill form fields.",
      category: "Document Skills",
      parameters: [{ "name": "Libraries", "type": "Python", "required": true, "description": "pypdf, pdfplumber, reportlab, pytesseract, pdf2image, pandas" }, { "name": "CLI Tools", "type": "Bash", "required": false, "description": "pdftotext, qpdf, pdftk (poppler-utils)" }],
      requiredMcp: ["Read", "Write", "Bash"],
      source: "anthropics/skills"
    },
    {
      id: "skill-pptx",
      type: "skill",
      name: "PPTX",
      path: "pptx",
      summary: "PowerPoint presentations",
      description: "Full PowerPoint support: create from HTML via html2pptx, edit via OOXML manipulation, use templates with inventory.py, thumbnail generation, slide rearrangement. Supports web-safe fonts only, two-column layouts preferred, validate with thumbnails.",
      category: "Document Skills",
      parameters: [{ "name": "html2pptx", "type": "Script", "required": true, "description": "Convert HTML slides to PPTX" }, { "name": "ooxml scripts", "type": "Python", "required": true, "description": "unpack.py, pack.py, validate.py" }, { "name": "inventory.py", "type": "Script", "required": false, "description": "Template text inventory" }, { "name": "thumbnail.py", "type": "Script", "required": true, "description": "Generate slide grids for validation" }, { "name": "Sharp", "type": "Node.js", "required": false, "description": "Rasterize gradients/icons to PNG" }],
      requiredMcp: ["Read", "Write", "Bash"],
      source: "anthropics/skills"
    },
    {
      id: "skill-creator",
      type: "skill",
      name: "Skill Creator",
      path: "skill-creator",
      summary: "Build custom skills",
      description: "Create effective skills: SKILL.md (frontmatter + instructions), bundled resources (scripts/, references/, assets/). Progressive disclosure: metadata (100 words) --> SKILL.md (<5k words) --> resources (as-needed). Init --> Edit --> Package --> Iterate. The skill guides the creation of new custom skills for Claude Code. It follows a progressive disclosure model where information is layered from compact metadata to full instructions to supplementary resources. This ensures Claude loads only what it needs for a given task. **Init**: Run `init_skill.py` to create the skeleton directory structure including SKILL.md, scripts/, references/, and assets/ directories. The generated SKILL.md includes the YAML frontmatter template with all required fields. **Edit**: Write the skill instructions in SKILL.md. The frontmatter defines metadata (name, description, tools needed, parameters). The markdown body contains the actual instructions, kept under 500 lines and 5,000 words. Instructions should be specific, actionable, and include examples of expected behavior. **Package**: Run `package_skill.py` to validate the skill structure, check frontmatter completeness, verify referenced files exist, and bundle everything into a distributable `.skill` file. **Iterate**: Test the skill in real conversations, observe where it falls short, and refine instructions based on actual usage patterns.",
      category: "Skill Creation",
      parameters: [{ "name": "init_skill.py", "type": "Script", "required": true, "description": "Create skeleton skill directory" }, { "name": "package_skill.py", "type": "Script", "required": true, "description": "Validate and package to .skill file" }, { "name": "SKILL.md", "type": "Markdown", "required": true, "description": "YAML frontmatter + instructions (<500 lines)" }],
      requiredMcp: ["Write", "Read", "Bash", "AskUserQuestion"],
      source: "anthropics/skills"
    },
    {
      id: "skill-slack-gif",
      type: "skill",
      name: "Slack GIF Creator",
      path: "slack-gif-creator",
      summary: "Animated GIFs for Slack",
      description: "Create Slack-optimized GIFs using GIFBuilder, validators, and easing functions. Emoji: 128x128, 10-30fps, 48-128 colors, <3s. Message: 480x480. PIL for drawing, built-in animations: shake, pulse, bounce, spin, fade, zoom, particles.",
      category: "Design & Creative",
      parameters: [{ "name": "GIFBuilder", "type": "Python class", "required": true, "description": "Assemble and optimize GIFs" }, { "name": "validators", "type": "Python module", "required": true, "description": "validate_gif(), is_slack_ready()" }, { "name": "easing", "type": "Python module", "required": true, "description": "interpolate() with 7 easing types" }, { "name": "pillow/imageio", "type": "Python", "required": true, "description": "pip install pillow imageio numpy" }],
      requiredMcp: ["Write", "Bash"],
      source: "anthropics/skills"
    },
    {
      id: "skill-theme-factory",
      type: "skill",
      name: "Theme Factory",
      path: "theme-factory",
      summary: "Professional theme styling",
      description: "Apply 10 curated themes to artifacts (slides, docs, HTML). Themes include: Ocean Depths, Sunset Boulevard, Forest Canopy, Modern Minimalist, Golden Hour, Arctic Frost, Desert Rose, Tech Innovation, Botanical Garden, Midnight Galaxy.",
      category: "Design & Creative",
      parameters: [{ "name": "theme-showcase.pdf", "type": "PDF", "required": true, "description": "Visual preview of all 10 themes" }, { "name": "themes/", "type": "Directory", "required": true, "description": "Theme files with colors and fonts" }],
      requiredMcp: ["Read", "Write"],
      source: "anthropics/skills"
    },
    {
      id: "skill-web-artifacts",
      type: "skill",
      name: "Web Artifacts Builder",
      path: "web-artifacts-builder",
      summary: "React + Tailwind + shadcn/ui",
      description: 'Build elaborate multi-component artifacts: React 18 + TypeScript + Vite + Parcel bundling + Tailwind CSS + 40+ shadcn/ui components. Init --> Edit --> Bundle to single bundle.html. Avoid "AI slop" (centered layouts, purple gradients, rounded corners). The workflow begins by running `init-artifact.sh` to scaffold a React project with all dependencies pre-installed, including Tailwind CSS, shadcn/ui components, Lucide icons, and Recharts. Development happens through direct file editing of components and pages. When the artifact is ready, `bundle-artifact.sh` uses Parcel to produce a single self-contained `bundle.html` file suitable for embedding or sharing. The skill explicitly warns against generic "AI slop" patterns -- centered hero sections, purple-to-blue gradients, excessive border-radius, and predictable card grids.',
      category: "Development",
      parameters: [{ "name": "init-artifact.sh", "type": "Script", "required": true, "description": "Initialize React project with all deps" }, { "name": "bundle-artifact.sh", "type": "Script", "required": true, "description": "Parcel bundle to single HTML" }, { "name": "Node 18+", "type": "Runtime", "required": true, "description": "Required for Vite version pinning" }],
      requiredMcp: ["Write", "Bash"],
      source: "anthropics/skills"
    },
    {
      id: "skill-webapp-testing",
      type: "skill",
      name: "WebApp Testing",
      path: "webapp-testing",
      summary: "Playwright E2E testing",
      description: "Test local web applications using Playwright MCP. E2E testing, visual regression, accessibility testing. Requires Playwright MCP server configured. Capture screenshots, interact with pages, validate flows. The skill leverages the Playwright MCP server to automate browser interactions against running web applications. It supports end-to-end testing workflows: navigating pages, clicking elements, filling forms, asserting visible text, and capturing screenshots for visual regression. Accessibility testing checks for proper ARIA attributes, keyboard navigation, and color contrast issues. The testing process follows a structured approach: identify critical user flows, write test scenarios that exercise those flows, execute them through the Playwright MCP tools, and report results with screenshots as evidence. Tests run against local dev servers, staging environments, or any reachable URL.",
      category: "Development",
      parameters: [{ "name": "Playwright MCP", "type": "MCP Server", "required": true, "description": "Browser automation capability" }],
      requiredMcp: ["Read", "Write", "Bash", "mcp__playwright"],
      source: "anthropics/skills"
    },
    {
      id: "skill-xlsx",
      type: "skill",
      name: "XLSX",
      path: "xlsx",
      summary: "Excel spreadsheet operations",
      description: "Comprehensive spreadsheet operations: create/edit with formulas using openpyxl, data analysis with pandas, formula recalculation via LibreOffice recalc.py, financial model standards with color coding (blue=inputs, black=formulas).",
      category: "Document Skills",
      parameters: [{ "name": "pandas", "type": "Python", "required": true, "description": "Data analysis and manipulation" }, { "name": "openpyxl", "type": "Python", "required": true, "description": "Complex formatting and formulas" }, { "name": "recalc.py", "type": "Script", "required": true, "description": "LibreOffice formula recalculation" }, { "name": "Zero formula errors", "type": "Validation", "required": true, "description": "No #REF!, #DIV/0!, #VALUE!, #N/A, #NAME?" }],
      requiredMcp: ["Read", "Write", "Bash"],
      source: "anthropics/skills"
    }
  ];
  var communitySkills = [
    {
      id: "agent-ai-engineer",
      type: "skill",
      name: "AI Engineer",
      path: "ai-engineer",
      summary: "ML models & AI integration",
      description: "Manages machine learning models and AI integration. Prompt engineering, model fine-tuning, RAG pipelines, and AI workflow automation.",
      category: "Engineering Agents",
      requiredMcp: ["Read", "Write", "Bash", "WebSearch", "WebFetch"],
      source: "community/diego"
    },
    {
      id: "agent-aso",
      type: "skill",
      name: "App Store Optimizer",
      path: "app-store-optimizer",
      summary: "ASO & marketplace visibility",
      description: "Focuses on ASO and visibility in app marketplaces. Keyword optimization, screenshot design, and review management.",
      category: "Marketing Agents",
      requiredMcp: ["WebSearch", "Write", "Read"],
      source: "community/diego"
    },
    {
      id: "agent-backend-arch",
      type: "skill",
      name: "Backend Architect",
      path: "backend-architect",
      summary: "Server-side & system design",
      description: "Handles server-side logic, API design, and system infrastructure. Database modeling, microservices, and scalability patterns.",
      category: "Engineering Agents",
      requiredMcp: ["Read", "Write", "Edit", "Bash", "Grep"],
      source: "community/diego"
    },
    {
      id: "agent-brand-guardian",
      type: "skill",
      name: "Brand Guardian",
      path: "brand-guardian",
      summary: "Voice, colors & consistency",
      description: "Ensures consistency in voice, colors, and logos. Brand guidelines enforcement and style guide maintenance.",
      category: "Design Agents",
      requiredMcp: ["Read", "Write", "Glob"],
      source: "community/diego"
    },
    {
      id: "agent-content",
      type: "skill",
      name: "Content Creator",
      path: "content-creator",
      summary: "Copywriting & asset production",
      description: "General copywriting and asset production. Blog posts, landing pages, email campaigns, and marketing collateral.",
      category: "Marketing Agents",
      requiredMcp: ["Write", "Read", "WebSearch"],
      source: "community/diego"
    },
    {
      id: "agent-devops",
      type: "skill",
      name: "DevOps Automator",
      path: "devops-automator",
      summary: "CI/CD & infrastructure",
      description: "Focuses on deployment pipelines, workflow automation, Docker, Kubernetes, and infrastructure as code.",
      category: "Engineering Agents",
      requiredMcp: ["Bash", "Read", "Write", "Edit"],
      source: "community/diego"
    },
    {
      id: "agent-experiment",
      type: "skill",
      name: "Experiment Tracker",
      path: "experiment-tracker",
      summary: "A/B tests & data trials",
      description: "Monitors A/B tests and data-driven trials. Experiment design, statistical significance, and result documentation.",
      category: "Project Management Agents",
      requiredMcp: ["Read", "Write", "Grep"],
      source: "community/diego"
    },
    {
      id: "agent-feedback-synth",
      type: "skill",
      name: "Feedback Synthesizer",
      path: "feedback-synthesizer",
      summary: "User data interpretation",
      description: "Aggregates and interprets user reviews, feedback data, and behavioral metrics. Sentiment analysis and actionable insights.",
      category: "Product Agents",
      requiredMcp: ["Read", "Write", "Grep"],
      source: "community/diego"
    },
    {
      id: "agent-frontend-dev",
      type: "skill",
      name: "Frontend Developer",
      path: "frontend-developer",
      summary: "UI/UX implementation specialist",
      description: "Specialized agent for building user-facing code and interfaces. React, Vue, Svelte expertise. Focuses on component architecture, state management, and responsive design.",
      category: "Engineering Agents",
      requiredMcp: ["Read", "Write", "Edit", "Glob", "Grep", "Bash"],
      source: "community/diego"
    },
    {
      id: "agent-growth",
      type: "skill",
      name: "Growth Hacker",
      path: "growth-hacker",
      summary: "Viral loops & user acquisition",
      description: "Specialized in viral loops and rapid user acquisition. A/B testing frameworks, referral programs, and growth experiments.",
      category: "Marketing Agents",
      requiredMcp: ["WebSearch", "Write", "Read", "Bash"],
      source: "community/diego"
    },
    {
      id: "agent-instagram",
      type: "skill",
      name: "Instagram Curator",
      path: "instagram-curator",
      summary: "Visual branding & aesthetics",
      description: "Visual branding and aesthetic feed management. Grid planning, story strategy, and engagement optimization.",
      category: "Marketing Agents",
      requiredMcp: ["Write", "Read", "WebSearch"],
      source: "community/diego"
    },
    {
      id: "agent-mobile-builder",
      type: "skill",
      name: "Mobile App Builder",
      path: "mobile-app-builder",
      summary: "iOS/Android development",
      description: "Specialized in iOS/Android application development. Swift, Kotlin, React Native, Flutter. App Store optimization and mobile-specific UX.",
      category: "Engineering Agents",
      requiredMcp: ["Read", "Write", "Edit", "Bash"],
      source: "community/diego"
    },
    {
      id: "agent-shipper",
      type: "skill",
      name: "Project Shipper",
      path: "project-shipper",
      summary: "Deadlines & delivery",
      description: "Focused on meeting deadlines and final delivery. Release checklists, blocker resolution, and launch coordination.",
      category: "Project Management Agents",
      requiredMcp: ["Read", "Write", "TodoWrite", "Bash"],
      source: "community/diego"
    },
    {
      id: "agent-prototyper",
      type: "skill",
      name: "Rapid Prototyper",
      path: "rapid-prototyper",
      summary: "Quick MVPs & POCs",
      description: "Designed for building quick MVPs and proof-of-concepts. Fast iteration, minimal viable features, rapid validation.",
      category: "Engineering Agents",
      requiredMcp: ["Write", "Bash", "Read"],
      source: "community/diego"
    },
    {
      id: "agent-reddit",
      type: "skill",
      name: "Reddit Community Builder",
      path: "reddit-community-builder",
      summary: "Subreddit & organic growth",
      description: "Navigates niche subreddits and organic growth. Community rules awareness, authentic engagement, and karma building.",
      category: "Marketing Agents",
      requiredMcp: ["WebSearch", "WebFetch", "Write"],
      source: "community/diego"
    },
    {
      id: "agent-sprint-prior",
      type: "skill",
      name: "Sprint Prioritizer",
      path: "sprint-prioritizer",
      summary: "Roadmap & task management",
      description: "Manages the product roadmap and task urgency. Sprint planning, backlog grooming, and priority frameworks.",
      category: "Product Agents",
      requiredMcp: ["Read", "Write", "TodoWrite"],
      source: "community/diego"
    },
    {
      id: "agent-producer",
      type: "skill",
      name: "Studio Producer",
      path: "studio-producer",
      summary: "Multi-disciplinary coordination",
      description: "High-level coordination of multi-disciplinary creative tasks. Resource allocation, timeline management, and stakeholder communication.",
      category: "Project Management Agents",
      requiredMcp: ["Read", "Write", "TodoWrite", "Task"],
      source: "community/diego"
    },
    {
      id: "agent-tiktok",
      type: "skill",
      name: "TikTok Strategist",
      path: "tiktok-strategist",
      summary: "Short-form video strategy",
      description: "Short-form video strategy and trends. Viral hooks, trend analysis, and content calendar for TikTok.",
      category: "Marketing Agents",
      requiredMcp: ["WebSearch", "Write", "Read"],
      source: "community/diego"
    },
    {
      id: "agent-trend-research",
      type: "skill",
      name: "Trend Researcher",
      path: "trend-researcher",
      summary: "Market & industry analysis",
      description: "Analyzes market shifts and industry movements. Competitive intelligence, emerging technology tracking, and opportunity identification.",
      category: "Product Agents",
      requiredMcp: ["WebSearch", "WebFetch", "Read", "Write"],
      source: "community/diego"
    },
    {
      id: "agent-twitter",
      type: "skill",
      name: "Twitter Engager",
      path: "twitter-engager",
      summary: "Real-time community & threads",
      description: "Focuses on real-time community interaction and threads. Trend hijacking, engagement tactics, and viral tweet patterns.",
      category: "Marketing Agents",
      requiredMcp: ["Write", "WebSearch", "Read"],
      source: "community/diego"
    },
    {
      id: "agent-ui-designer",
      type: "skill",
      name: "UI Designer",
      path: "ui-designer",
      summary: "Visual interface & layout",
      description: "Focuses on the visual interface and layout. Component libraries, design systems, and pixel-perfect implementation.",
      category: "Design Agents",
      requiredMcp: ["Write", "Read", "Glob"],
      source: "community/diego"
    },
    {
      id: "agent-ux-researcher",
      type: "skill",
      name: "UX Researcher",
      path: "ux-researcher",
      summary: "User journeys & pain points",
      description: "Analyzes user journeys and pain points. Usability testing, heuristic evaluation, and user interview synthesis.",
      category: "Design Agents",
      requiredMcp: ["Read", "Write", "WebSearch"],
      source: "community/diego"
    },
    {
      id: "agent-visual-story",
      type: "skill",
      name: "Visual Storyteller",
      path: "visual-storyteller",
      summary: "Narrative-driven graphics",
      description: "Creates narrative-driven graphic content. Infographics, presentations, and visual communication.",
      category: "Design Agents",
      requiredMcp: ["Write", "Read"],
      source: "community/diego"
    },
    {
      id: "agent-whimsy",
      type: "skill",
      name: "Whimsy Injector",
      path: "whimsy-injector",
      summary: "Delight & easter eggs",
      description: "Adds personality, easter eggs, and 'delight' features to the product. Micro-interactions, loading states, and surprise moments.",
      category: "Design Agents",
      requiredMcp: ["Write", "Read", "Edit"],
      source: "community/diego"
    }
  ];
  var apiEndpoints = [
    {
      id: "api-container-start",
      type: "api",
      method: "POST",
      name: "Start Container",
      path: "/rust/containers/{name}/start",
      summary: "Start a container by name",
      description: "Start a specific container by name.",
      category: "Container Management",
      parameters: [{ "name": "name", "type": "string", "required": true, "description": "Container name" }]
    },
    {
      id: "api-container-stop",
      type: "api",
      method: "POST",
      name: "Stop Container",
      path: "/rust/containers/{name}/stop",
      summary: "Stop a container by name",
      description: "Stop a specific container by name.",
      category: "Container Management",
      parameters: [{ "name": "name", "type": "string", "required": true, "description": "Container name" }]
    },
    {
      id: "api-container-restart",
      type: "api",
      method: "POST",
      name: "Restart Container",
      path: "/rust/containers/{name}/restart",
      summary: "Restart a container by name",
      description: "Restart a specific container by name.",
      category: "Container Management",
      parameters: [{ "name": "name", "type": "string", "required": true, "description": "Container name" }]
    },
    {
      id: "api-vm-container-start",
      type: "api",
      method: "POST",
      name: "Start Container on VM",
      path: "/rust/vms/{vm_id}/containers/{name}/start",
      summary: "Start container on a specific VM",
      description: "Start a container on a specific VM.",
      category: "Container Management",
      parameters: [{ "name": "vm_id", "type": "string", "required": true, "description": "VM identifier" }, { "name": "name", "type": "string", "required": true, "description": "Container name" }]
    },
    {
      id: "api-vm-container-stop",
      type: "api",
      method: "POST",
      name: "Stop Container on VM",
      path: "/rust/vms/{vm_id}/containers/{name}/stop",
      summary: "Stop container on a specific VM",
      description: "Stop a container on a specific VM.",
      category: "Container Management",
      parameters: [{ "name": "vm_id", "type": "string", "required": true, "description": "VM identifier" }, { "name": "name", "type": "string", "required": true, "description": "Container name" }]
    },
    {
      id: "api-vm-container-restart",
      type: "api",
      method: "POST",
      name: "Restart Container on VM",
      path: "/rust/vms/{vm_id}/containers/{name}/restart",
      summary: "Restart container on a specific VM",
      description: "Restart a container on a specific VM.",
      category: "Container Management",
      parameters: [{ "name": "vm_id", "type": "string", "required": true, "description": "VM identifier" }, { "name": "name", "type": "string", "required": true, "description": "Container name" }]
    },
    {
      id: "api-ondemand-start-all",
      type: "api",
      method: "POST",
      name: "Start All On-Demand",
      path: "/rust/containers/on-demand/start-all",
      summary: "Start all on-demand containers",
      description: "Start all on-demand containers across VMs.",
      category: "Container Management"
    },
    {
      id: "api-ondemand-stop-all",
      type: "api",
      method: "POST",
      name: "Stop All On-Demand",
      path: "/rust/containers/on-demand/stop-all",
      summary: "Stop all on-demand containers",
      description: "Stop all on-demand containers across VMs.",
      category: "Container Management"
    },
    {
      id: "api-ondemand-restart-all",
      type: "api",
      method: "POST",
      name: "Restart All On-Demand",
      path: "/rust/containers/on-demand/restart-all",
      summary: "Restart all on-demand containers",
      description: "Restart all on-demand containers across VMs.",
      category: "Container Management"
    },
    {
      id: "api-matomo-wake",
      type: "api",
      method: "POST",
      name: "Matomo Wake",
      path: "/rust/containers/matomo/wake",
      summary: "Wake Matomo (stop Windmill)",
      description: "Wake Matomo analytics and stop Windmill (hybrid toggle).",
      category: "Container Management"
    },
    {
      id: "api-matomo-sleep",
      type: "api",
      method: "POST",
      name: "Matomo Sleep",
      path: "/rust/containers/matomo/sleep",
      summary: "Sleep Matomo (start Windmill)",
      description: "Sleep Matomo analytics and start Windmill (hybrid toggle).",
      category: "Container Management"
    },
    {
      id: "api-windmill-start",
      type: "api",
      method: "POST",
      name: "Windmill Start",
      path: "/rust/containers/windmill/start",
      summary: "Start Windmill (sleep Matomo)",
      description: "Start Windmill and sleep Matomo (hybrid toggle).",
      category: "Container Management"
    },
    {
      id: "api-windmill-stop",
      type: "api",
      method: "POST",
      name: "Windmill Stop",
      path: "/rust/containers/windmill/stop",
      summary: "Stop Windmill (wake Matomo)",
      description: "Stop Windmill and wake Matomo (hybrid toggle).",
      category: "Container Management"
    },
    {
      id: "api-health",
      type: "api",
      method: "GET",
      name: "Health Check",
      path: "/rust/health",
      summary: "API alive check",
      description: "Simple health check to verify the Rust API is running.",
      category: "Health Monitoring"
    },
    {
      id: "api-health-all",
      type: "api",
      method: "GET",
      name: "Health All",
      path: "/rust/health/all",
      summary: "Full health summary",
      description: "Health of all VMs with services and containers.",
      category: "Health Monitoring"
    },
    {
      id: "api-health-containers-by-vm",
      type: "api",
      method: "GET",
      name: "Containers by VM",
      path: "/rust/health/containers-by-vm",
      summary: "Container health grouped by VM",
      description: "Container health across all VMs grouped by VM.",
      category: "Health Monitoring"
    },
    {
      id: "api-health-containers-by-service",
      type: "api",
      method: "GET",
      name: "Containers by Service",
      path: "/rust/health/containers-by-service",
      summary: "Container health grouped by service",
      description: "Container health grouped by service across VMs.",
      category: "Health Monitoring"
    },
    {
      id: "api-health-proxied",
      type: "api",
      method: "GET",
      name: "Proxied Services",
      path: "/rust/health/proxied-by-services",
      summary: "Public route health probes",
      description: "Public route health probes with redirect chain.",
      category: "Health Monitoring"
    },
    {
      id: "api-health-resources",
      type: "api",
      method: "GET",
      name: "Resources All",
      path: "/rust/health/resources-all",
      summary: "System resources for all VMs",
      description: "System resources, specs, and info for all VMs (CPU, RAM, disk).",
      category: "Health Monitoring"
    },
    {
      id: "api-health-ids",
      type: "api",
      method: "GET",
      name: "Health IDs",
      path: "/rust/health/ids",
      summary: "All valid variable IDs",
      description: "All valid variable IDs: vm_ids, labels, services, containers.",
      category: "Health Monitoring"
    },
    {
      id: "api-health-vm",
      type: "api",
      method: "GET",
      name: "VM Health",
      path: "/rust/health/{vm_id}",
      summary: "Health for a specific VM",
      description: "VM health check by identifier.",
      category: "Health Monitoring",
      parameters: [{ "name": "vm_id", "type": "string", "required": true, "description": "VM identifier" }]
    },
    {
      id: "api-health-vm-container",
      type: "api",
      method: "GET",
      name: "Container Status",
      path: "/rust/health/{vm_id}/{container_name}",
      summary: "Status for a specific container",
      description: "Container status on a specific VM.",
      category: "Health Monitoring",
      parameters: [{ "name": "vm_id", "type": "string", "required": true, "description": "VM identifier" }, { "name": "container_name", "type": "string", "required": true, "description": "Container name" }]
    },
    {
      id: "api-service-start",
      type: "api",
      method: "POST",
      name: "Start Service",
      path: "/rust/services/{service}/start",
      summary: "Start a service by name",
      description: "Start a service by name.",
      category: "Service Management",
      parameters: [{ "name": "service", "type": "string", "required": true, "description": "Service name" }]
    },
    {
      id: "api-service-stop",
      type: "api",
      method: "POST",
      name: "Stop Service",
      path: "/rust/services/{service}/stop",
      summary: "Stop a service by name",
      description: "Stop a service by name.",
      category: "Service Management",
      parameters: [{ "name": "service", "type": "string", "required": true, "description": "Service name" }]
    },
    {
      id: "api-vm-service-start",
      type: "api",
      method: "POST",
      name: "Start Service on VM",
      path: "/rust/vms/{vm_id}/services/{service}/start",
      summary: "Start service on a specific VM",
      description: "Start a service on a specific VM.",
      category: "Service Management",
      parameters: [{ "name": "vm_id", "type": "string", "required": true, "description": "VM identifier" }, { "name": "service", "type": "string", "required": true, "description": "Service name" }]
    },
    {
      id: "api-vm-service-stop",
      type: "api",
      method: "POST",
      name: "Stop Service on VM",
      path: "/rust/vms/{vm_id}/services/{service}/stop",
      summary: "Stop service on a specific VM",
      description: "Stop a service on a specific VM.",
      category: "Service Management",
      parameters: [{ "name": "vm_id", "type": "string", "required": true, "description": "VM identifier" }, { "name": "service", "type": "string", "required": true, "description": "Service name" }]
    },
    {
      id: "api-vm-start",
      type: "api",
      method: "POST",
      name: "Start VM",
      path: "/rust/vms/{vm_id}/start",
      summary: "Start a VM (generic)",
      description: "Start a VM by its identifier.",
      category: "VM Management",
      parameters: [{ "name": "vm_id", "type": "string", "required": true, "description": "VM identifier" }]
    },
    {
      id: "api-vm-stop",
      type: "api",
      method: "POST",
      name: "Stop VM",
      path: "/rust/vms/{vm_id}/stop",
      summary: "Stop a VM (generic)",
      description: "Stop a VM by its identifier.",
      category: "VM Management",
      parameters: [{ "name": "vm_id", "type": "string", "required": true, "description": "VM identifier" }]
    },
    {
      id: "api-vm-reset",
      type: "api",
      method: "POST",
      name: "Reset VM",
      path: "/rust/vms/{vm_id}/reset",
      summary: "Reset/reboot a VM (generic)",
      description: "Reset or reboot a VM by its identifier.",
      category: "VM Management",
      parameters: [{ "name": "vm_id", "type": "string", "required": true, "description": "VM identifier" }]
    },
    {
      id: "api-vm-gcp-proxy-start",
      type: "api",
      method: "POST",
      name: "Start gcp-proxy",
      path: "/rust/vm/gcp-proxy/start",
      summary: "Start gcp-proxy VM",
      description: "Start the gcp-proxy VM directly.",
      category: "VM Management"
    },
    {
      id: "api-vm-gcp-proxy-stop",
      type: "api",
      method: "POST",
      name: "Stop gcp-proxy",
      path: "/rust/vm/gcp-proxy/stop",
      summary: "Stop gcp-proxy VM",
      description: "Stop the gcp-proxy VM directly.",
      category: "VM Management"
    },
    {
      id: "api-vm-gcp-proxy-reset",
      type: "api",
      method: "POST",
      name: "Reset gcp-proxy",
      path: "/rust/vm/gcp-proxy/reset",
      summary: "Reset gcp-proxy VM",
      description: "Reset the gcp-proxy VM directly.",
      category: "VM Management"
    },
    {
      id: "api-vm-oci-flex-start",
      type: "api",
      method: "POST",
      name: "Start oci-flex",
      path: "/rust/vm/oci-flex/start",
      summary: "Start oci-flex VM",
      description: "Start the oci-flex VM directly.",
      category: "VM Management"
    },
    {
      id: "api-vm-oci-flex-stop",
      type: "api",
      method: "POST",
      name: "Stop oci-flex",
      path: "/rust/vm/oci-flex/stop",
      summary: "Stop oci-flex VM",
      description: "Stop the oci-flex VM directly.",
      category: "VM Management"
    },
    {
      id: "api-vm-oci-flex-reset",
      type: "api",
      method: "POST",
      name: "Reset oci-flex",
      path: "/rust/vm/oci-flex/reset",
      summary: "Reset oci-flex VM",
      description: "Reset the oci-flex VM directly.",
      category: "VM Management"
    },
    {
      id: "api-vm-oci-analytics-start",
      type: "api",
      method: "POST",
      name: "Start oci-analytics",
      path: "/rust/vm/oci-analytics/start",
      summary: "Start oci-analytics VM",
      description: "Start the oci-analytics VM directly.",
      category: "VM Management"
    },
    {
      id: "api-vm-oci-analytics-stop",
      type: "api",
      method: "POST",
      name: "Stop oci-analytics",
      path: "/rust/vm/oci-analytics/stop",
      summary: "Stop oci-analytics VM",
      description: "Stop the oci-analytics VM directly.",
      category: "VM Management"
    },
    {
      id: "api-vm-oci-analytics-reset",
      type: "api",
      method: "POST",
      name: "Reset oci-analytics",
      path: "/rust/vm/oci-analytics/reset",
      summary: "Reset oci-analytics VM",
      description: "Reset the oci-analytics VM directly.",
      category: "VM Management"
    },
    {
      id: "api-vm-oci-mail-start",
      type: "api",
      method: "POST",
      name: "Start oci-mail",
      path: "/rust/vm/oci-mail/start",
      summary: "Start oci-mail VM",
      description: "Start the oci-mail VM directly.",
      category: "VM Management"
    },
    {
      id: "api-vm-oci-mail-stop",
      type: "api",
      method: "POST",
      name: "Stop oci-mail",
      path: "/rust/vm/oci-mail/stop",
      summary: "Stop oci-mail VM",
      description: "Stop the oci-mail VM directly.",
      category: "VM Management"
    },
    {
      id: "api-vm-oci-mail-reset",
      type: "api",
      method: "POST",
      name: "Reset oci-mail",
      path: "/rust/vm/oci-mail/reset",
      summary: "Reset oci-mail VM",
      description: "Reset the oci-mail VM directly.",
      category: "VM Management"
    }
  ];
  var endpoints = [...mcpTools, ...officialSkills, ...communitySkills, ...apiEndpoints];

  // src_static/typescript/main.ts
  var DEBUG = true;
  function log(tag, ...args) {
    if (!DEBUG)
      return;
    console.log(`[skills-mcp][${tag}]`, ...args);
  }
  function warn(tag, ...args) {
    console.warn(`[skills-mcp][${tag}]`, ...args);
  }
  function error(tag, ...args) {
    console.error(`[skills-mcp][${tag}]`, ...args);
  }
  function getEl(selector, label) {
    const el = document.querySelector(selector);
    if (!el)
      warn("dom", `Missing element: ${label} (${selector})`);
    else
      log("dom", `Found: ${label}`);
    return el;
  }
  var sidebar = getEl(".sidebar", "sidebar");
  var sidebarToggle = getEl(".sidebar-toggle", "sidebarToggle");
  var sidebarOverlay = getEl(".sidebar-overlay", "sidebarOverlay");
  var searchInput = getEl(".search__input", "searchInput");
  var filterBtns = document.querySelectorAll(".filter-btn");
  var endpointList = getEl(".endpoint-list", "endpointList");
  var sidebarNav = getEl(".sidebar__nav", "sidebarNav");
  log("init", `Data loaded \u2014 MCP: ${mcpTools.length}, Official: ${officialSkills.length}, Community: ${communitySkills.length}, API: ${apiEndpoints.length}, Total: ${endpoints.length}`);
  log("dom", `Filter buttons found: ${filterBtns.length}`);
  var activeFilter = "all";
  var searchQuery = "";
  function toggleSidebar() {
    if (!sidebar || !sidebarOverlay) {
      warn("sidebar", "Cannot toggle \u2014 sidebar or overlay element missing");
      return;
    }
    const willOpen = !sidebar.classList.contains("is-open");
    sidebar.classList.toggle("is-open");
    sidebarOverlay.classList.toggle("is-visible");
    log("sidebar", willOpen ? "opened" : "closed");
  }
  function closeSidebar() {
    if (!sidebar || !sidebarOverlay)
      return;
    const wasOpen = sidebar.classList.contains("is-open");
    sidebar.classList.remove("is-open");
    sidebarOverlay.classList.remove("is-visible");
    if (wasOpen)
      log("sidebar", "closed");
  }
  function toggleEndpoint(element) {
    if (!element) {
      warn("endpoint", "toggleEndpoint called with null element");
      return;
    }
    element.classList.toggle("is-open");
  }
  function filterEndpoints() {
    const filtered = endpoints.filter((ep) => {
      const matchesFilter = activeFilter === "all" || ep.type === activeFilter;
      const matchesSearch = searchQuery === "" || ep.name.toLowerCase().includes(searchQuery) || ep.summary.toLowerCase().includes(searchQuery) || ep.path.toLowerCase().includes(searchQuery) || ep.category.toLowerCase().includes(searchQuery) || ep.description && ep.description.toLowerCase().includes(searchQuery);
      return matchesFilter && matchesSearch;
    });
    log("filter", `filter="${activeFilter}" search="${searchQuery}" \u2192 ${filtered.length}/${endpoints.length} results`);
    return filtered;
  }
  function renderEndpoint(ep) {
    try {
      const paramsHtml = ep.parameters && ep.parameters.length > 0 ? `
      <h4 class="endpoint__section-title">Parameters</h4>
      <table class="params-table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Type</th>
            <th>Required</th>
            <th>Description</th>
          </tr>
        </thead>
        <tbody>
          ${ep.parameters.map((p) => `
            <tr>
              <td class="params-table__name">${p.name}</td>
              <td class="params-table__type">${p.type}</td>
              <td class="params-table__required">${p.required ? "Yes" : "No"}</td>
              <td>${p.description}</td>
            </tr>
          `).join("")}
        </tbody>
      </table>
    ` : "";
      const mcpHtml = ep.requiredMcp && ep.requiredMcp.length > 0 ? `
      <h4 class="endpoint__section-title">Required MCP Tools</h4>
      <div class="tags">
        ${ep.requiredMcp.map((mcp) => `<span class="badge badge--mcp">${mcp}</span>`).join("")}
      </div>
    ` : "";
      const sourceHtml = ep.source ? `
      <div class="mt-md text-xs text-muted">
        Source: <a href="https://github.com/${ep.source}" target="_blank">${ep.source}</a>
      </div>
    ` : "";
      const exampleHtml = ep.example ? `
      <h4 class="endpoint__section-title">Example</h4>
      <div class="code-block">
        <div class="code-block__header">
          <span class="code-block__lang">${ep.type === "mcp" ? "typescript" : "prompt"}</span>
          <button class="code-block__copy" data-code="${encodeURIComponent(ep.example)}">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <rect x="9" y="9" width="13" height="13" rx="2" ry="2"/>
              <path d="M5 15H4a2 2 0 01-2-2V4a2 2 0 012-2h9a2 2 0 012 2v1"/>
            </svg>
            Copy
          </button>
        </div>
        <div class="code-block__content">
          <code>${escapeHtml(ep.example)}</code>
        </div>
      </div>
    ` : "";
      return `
      <article class="endpoint endpoint--${ep.type}" id="${ep.id}" data-category="${ep.category}">
        <div class="endpoint__header" onclick="toggleEndpoint(this.parentElement)">
          <span class="endpoint__method endpoint__method--${ep.type === "api" ? (ep.method || "get").toLowerCase() : ep.type}">${ep.type === "api" ? ep.method || "GET" : ep.type.toUpperCase()}</span>
          <span class="endpoint__path">${ep.path}</span>
          <span class="endpoint__summary">${ep.summary}</span>
          <span class="endpoint__toggle">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <polyline points="6 9 12 15 18 9"/>
            </svg>
          </span>
        </div>
        <div class="endpoint__body">
          <p class="endpoint__description">${ep.description}</p>
          ${mcpHtml}
          ${paramsHtml}
          ${exampleHtml}
          ${sourceHtml}
        </div>
      </article>
    `;
    } catch (err) {
      error("renderEndpoint", `Failed to render "${ep.id || ep.name}"`, err);
      return `<article class="endpoint endpoint--error"><div class="endpoint__header"><span class="endpoint__summary">Error rendering: ${ep.name || "unknown"}</span></div></article>`;
    }
  }
  function renderEndpoints() {
    if (!endpointList) {
      error("render", "endpointList element not found \u2014 cannot render");
      return;
    }
    try {
      const filtered = filterEndpoints();
      const grouped = groupByCategory(filtered);
      let html = "";
      for (const [category, items] of Object.entries(grouped)) {
        const typeLabel = items[0].type === "mcp" ? "tools" : items[0].type === "api" ? "endpoints" : "skills";
        html += `
        <section class="section" id="section-${slugify(category)}">
          <div class="section__title">
            <h2>${category}</h2>
            <span class="badge badge--${items[0].type}">${items.length} ${typeLabel}</span>
          </div>
          ${items.map(renderEndpoint).join("")}
        </section>
      `;
      }
      if (filtered.length === 0) {
        html = `
        <div class="text-center text-muted mt-lg">
          <p>No results found for "${searchQuery}"</p>
        </div>
      `;
      }
      endpointList.innerHTML = html;
      attachCopyHandlers();
      log("render", `Rendered ${filtered.length} endpoints in ${Object.keys(grouped).length} categories`);
    } catch (err) {
      error("render", "renderEndpoints failed", err);
      endpointList.innerHTML = '<div class="text-center text-muted mt-lg"><p>Error rendering endpoints. Check console.</p></div>';
    }
  }
  function renderSidebarNav() {
    if (!sidebarNav) {
      error("sidebar", "sidebarNav element not found \u2014 cannot render nav");
      return;
    }
    try {
      const mcpCategories = [...new Set(mcpTools.map((e) => e.category))];
      const officialSkillCategories = [...new Set(officialSkills.map((e) => e.category))];
      const communitySkillCategories = [...new Set(communitySkills.map((e) => e.category))];
      const apiCategories = [...new Set(apiEndpoints.map((e) => e.category))];
      log("sidebar", `Nav categories \u2014 official: ${officialSkillCategories.length}, community: ${communitySkillCategories.length}, mcp: ${mcpCategories.length}, api: ${apiCategories.length}`);
      let html = `
      <div class="sidebar__section sidebar__section--graph">
        <a href="#" class="sidebar__graph-link" data-view="graph">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <circle cx="18" cy="5" r="3"/>
            <circle cx="6" cy="12" r="3"/>
            <circle cx="18" cy="19" r="3"/>
            <line x1="8.59" y1="13.51" x2="15.42" y2="17.49"/>
            <line x1="15.41" y1="6.51" x2="8.59" y2="10.49"/>
          </svg>
          Graph View
        </a>
      </div>
      <div class="sidebar__section">
        <div class="sidebar__section-title">
          <span class="sidebar__icon sidebar__icon--skill">S</span>
          Official Skills
        </div>
        <div class="sidebar__subtitle">Anthropic</div>
        ${officialSkillCategories.map((cat) => `
          <a href="#section-${slugify(cat)}" class="sidebar__link sidebar__link--skill">${cat}</a>
        `).join("")}
      </div>
      <div class="sidebar__section">
        <div class="sidebar__section-title">
          <span class="sidebar__icon sidebar__icon--community">C</span>
          Community Skills
        </div>
        <div class="sidebar__subtitle">Custom Agents</div>
        ${communitySkillCategories.map((cat) => `
          <a href="#section-${slugify(cat)}" class="sidebar__link sidebar__link--community">${cat}</a>
        `).join("")}
      </div>
      <div class="sidebar__section">
        <div class="sidebar__section-title">
          <span class="sidebar__icon sidebar__icon--mcp">T</span>
          MCP Servers
        </div>
        <div class="sidebar__subtitle">Built-in Capabilities</div>
        ${mcpCategories.map((cat) => `
          <a href="#section-${slugify(cat)}" class="sidebar__link sidebar__link--mcp">${cat}</a>
        `).join("")}
      </div>
      <div class="sidebar__section">
        <div class="sidebar__section-title">
          <span class="sidebar__icon sidebar__icon--api">A</span>
          API Endpoints
        </div>
        <div class="sidebar__subtitle">Rust API (api.diegonmarcos.com)</div>
        ${apiCategories.map((cat) => `
          <a href="#section-${slugify(cat)}" class="sidebar__link sidebar__link--api">${cat}</a>
        `).join("")}
      </div>
    `;
      sidebarNav.innerHTML = html;
      const graphLink = sidebarNav.querySelector(".sidebar__graph-link");
      graphLink?.addEventListener("click", (e) => {
        e.preventDefault();
        const graphTab = document.querySelector('[data-view="graph"]');
        if (graphTab) {
          graphTab.click();
        } else {
          warn("sidebar", "Graph view tab button not found");
        }
      });
      log("sidebar", "Nav rendered");
    } catch (err) {
      error("sidebar", "renderSidebarNav failed", err);
    }
  }
  function groupByCategory(items) {
    return items.reduce((acc, item) => {
      const cat = item.category || "Uncategorized";
      if (!acc[cat])
        acc[cat] = [];
      acc[cat].push(item);
      return acc;
    }, {});
  }
  function slugify(text) {
    return text.toLowerCase().replace(/\s+/g, "-").replace(/[^\w-]/g, "");
  }
  function escapeHtml(text) {
    return text.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/\n/g, "<br>");
  }
  function attachCopyHandlers() {
    document.querySelectorAll(".code-block__copy").forEach((btn) => {
      btn.addEventListener("click", async (e) => {
        e.stopPropagation();
        try {
          const code = decodeURIComponent(btn.dataset.code || "");
          await navigator.clipboard.writeText(code);
          btn.classList.add("is-copied");
          btn.textContent = "Copied!";
          log("copy", `Copied ${code.length} chars to clipboard`);
          setTimeout(() => {
            btn.classList.remove("is-copied");
            btn.innerHTML = `
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <rect x="9" y="9" width="13" height="13" rx="2" ry="2"/>
              <path d="M5 15H4a2 2 0 01-2-2V4a2 2 0 012-2h9a2 2 0 012 2v1"/>
            </svg>
            Copy
          `;
          }, 2e3);
        } catch (err) {
          error("copy", "Clipboard write failed", err);
          btn.textContent = "Failed";
          setTimeout(() => {
            btn.textContent = "Copy";
          }, 2e3);
        }
      });
    });
  }
  window.toggleEndpoint = toggleEndpoint;
  var listView = document.getElementById("list-view");
  var graphView = document.getElementById("graph-view");
  var graphSvg = document.getElementById("graph-svg");
  var graphTooltip = document.getElementById("graph-tooltip");
  var viewTabs = document.querySelectorAll(".view-tab");
  var filtersContainer = document.getElementById("filters-container");
  log("dom", `Graph elements \u2014 listView: ${!!listView}, graphView: ${!!graphView}, graphSvg: ${!!graphSvg}, tooltip: ${!!graphTooltip}, viewTabs: ${viewTabs.length}, filters: ${!!filtersContainer}`);
  var currentView = "list";
  function switchView(view) {
    log("view", `Switching to ${view} view`);
    currentView = view;
    viewTabs.forEach((tab) => {
      tab.classList.toggle("is-active", tab.dataset.view === view);
    });
    if (view === "list") {
      listView.classList.remove("hidden");
      graphView.classList.add("hidden");
      filtersContainer.style.display = "flex";
    } else {
      listView.classList.add("hidden");
      graphView.classList.remove("hidden");
      filtersContainer.style.display = "none";
      renderGraph();
    }
  }
  var transform = { x: 0, y: 0, k: 1 };
  var graphAnimationId = null;
  function renderGraph() {
    try {
      let tick = function() {
        try {
          allNodes.forEach((node) => {
            if (node.fx !== null)
              return;
            const dx = centerX - node.x;
            const dy = centerY - node.y;
            node.x += dx * 8e-3;
            node.y += dy * 8e-3;
            allNodes.forEach((other) => {
              if (node === other)
                return;
              const ddx = node.x - other.x;
              const ddy = node.y - other.y;
              const dist = Math.sqrt(ddx * ddx + ddy * ddy) || 1;
              const minDist = node.type === "mcp" ? 60 : 45;
              if (dist < minDist) {
                const force = (minDist - dist) / dist * 0.3;
                node.x += ddx * force;
                node.y += ddy * force;
              }
            });
            node.x = Math.max(minX, Math.min(maxX, node.x));
            node.y = Math.max(minY, Math.min(maxY, node.y));
          });
          edges.forEach((edge) => {
            const dx = edge.to.x - edge.from.x;
            const dy = edge.to.y - edge.from.y;
            const dist = Math.sqrt(dx * dx + dy * dy) || 1;
            const targetDist = 120;
            const force = (dist - targetDist) / dist * 0.01;
            if (edge.from.fx === null) {
              edge.from.x += dx * force;
              edge.from.y += dy * force;
            }
            if (edge.to.fx === null) {
              edge.to.x -= dx * force * 0.1;
              edge.to.y -= dy * force * 0.1;
            }
          });
          allNodes.forEach((node) => {
            node.x = Math.max(minX, Math.min(maxX, node.x));
            node.y = Math.max(minY, Math.min(maxY, node.y));
            const g = nodeElements.get(node.id);
            if (g) {
              g.setAttribute("transform", `translate(${node.x}, ${node.y})`);
            }
          });
          edges.forEach((edge, i) => {
            const line = edgeElements[i];
            if (!line)
              return;
            const dx = edge.to.x - edge.from.x;
            const dy = edge.to.y - edge.from.y;
            const dist = Math.sqrt(dx * dx + dy * dy) || 1;
            const midX = (edge.from.x + edge.to.x) / 2;
            const midY = (edge.from.y + edge.to.y) / 2;
            const offset = Math.min(30, dist * 0.1);
            const perpX = -dy / dist * offset;
            const perpY = dx / dist * offset;
            line.setAttribute(
              "d",
              `M ${edge.from.x} ${edge.from.y} Q ${midX + perpX} ${midY + perpY} ${edge.to.x} ${edge.to.y}`
            );
          });
          graphAnimationId = requestAnimationFrame(tick);
        } catch (err) {
          error("graph", "Force simulation tick failed", err);
        }
      };
      if (graphAnimationId !== null) {
        cancelAnimationFrame(graphAnimationId);
        graphAnimationId = null;
      }
      const width = graphSvg.clientWidth || 900;
      const height = graphSvg.clientHeight || 600;
      const centerX = width / 2;
      const centerY = height / 2;
      log("graph", `Rendering graph ${width}x${height}, center=(${centerX},${centerY})`);
      const mcpNodes = mcpTools.map((tool, i) => {
        const angle = i / mcpTools.length * Math.PI * 2;
        const radius = 120;
        return {
          id: tool.id,
          name: tool.name,
          type: "mcp",
          x: centerX + Math.cos(angle) * radius,
          y: centerY + Math.sin(angle) * radius,
          connections: [],
          vx: 0,
          vy: 0,
          fx: null,
          fy: null
        };
      });
      const allSkills = [...officialSkills, ...communitySkills];
      const skillNodes = allSkills.map((skill, i) => {
        const angle = i / allSkills.length * Math.PI * 2 + Math.PI / 4;
        const radius = 280 + Math.random() * 80;
        return {
          id: skill.id,
          name: skill.name,
          type: "skill",
          x: centerX + Math.cos(angle) * radius,
          y: centerY + Math.sin(angle) * radius,
          connections: skill.requiredMcp || [],
          vx: 0,
          vy: 0,
          fx: null,
          fy: null,
          isOfficial: officialSkills.includes(skill)
        };
      });
      const allNodes = [...mcpNodes, ...skillNodes];
      const edges = [];
      let unmatchedMcps = [];
      skillNodes.forEach((skill) => {
        skill.connections.forEach((mcpName) => {
          const mcpNode = mcpNodes.find(
            (m) => m.name === mcpName || m.name.toLowerCase() === mcpName.toLowerCase()
          );
          if (mcpNode) {
            edges.push({ from: skill, to: mcpNode, strength: 0.3 });
          } else {
            unmatchedMcps.push(`${skill.name} \u2192 ${mcpName}`);
          }
        });
      });
      log("graph", `Nodes: ${allNodes.length} (${mcpNodes.length} mcp + ${skillNodes.length} skills), Edges: ${edges.length}`);
      if (unmatchedMcps.length > 0) {
        warn("graph", `Unmatched MCP references: ${unmatchedMcps.join(", ")}`);
      }
      graphSvg.innerHTML = "";
      const container = document.createElementNS("http://www.w3.org/2000/svg", "g");
      container.setAttribute("class", "graph-container-inner");
      graphSvg.appendChild(container);
      const defs = document.createElementNS("http://www.w3.org/2000/svg", "defs");
      defs.innerHTML = `
      <filter id="glow" x="-50%" y="-50%" width="200%" height="200%">
        <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
        <feMerge>
          <feMergeNode in="coloredBlur"/>
          <feMergeNode in="SourceGraphic"/>
        </feMerge>
      </filter>
      <radialGradient id="mcp-gradient" cx="30%" cy="30%">
        <stop offset="0%" stop-color="#67e8f9"/>
        <stop offset="100%" stop-color="#06b6d4"/>
      </radialGradient>
      <radialGradient id="skill-gradient" cx="30%" cy="30%">
        <stop offset="0%" stop-color="#c084fc"/>
        <stop offset="100%" stop-color="#a855f7"/>
      </radialGradient>
      <radialGradient id="community-gradient" cx="30%" cy="30%">
        <stop offset="0%" stop-color="#34d399"/>
        <stop offset="100%" stop-color="#10b981"/>
      </radialGradient>
    `;
      graphSvg.appendChild(defs);
      const edgeGroup = document.createElementNS("http://www.w3.org/2000/svg", "g");
      edgeGroup.setAttribute("class", "graph-edges");
      container.appendChild(edgeGroup);
      const edgeElements = [];
      edges.forEach((edge) => {
        const line = document.createElementNS("http://www.w3.org/2000/svg", "path");
        line.setAttribute("class", "graph-edge");
        line.setAttribute("data-from", edge.from.id);
        line.setAttribute("data-to", edge.to.id);
        line.setAttribute("fill", "none");
        line.setAttribute("stroke", "rgba(148, 163, 184, 0.15)");
        line.setAttribute("stroke-width", "1");
        edgeGroup.appendChild(line);
        edgeElements.push(line);
      });
      const nodeGroup = document.createElementNS("http://www.w3.org/2000/svg", "g");
      nodeGroup.setAttribute("class", "graph-nodes");
      container.appendChild(nodeGroup);
      const nodeElements = /* @__PURE__ */ new Map();
      allNodes.forEach((node) => {
        const g = document.createElementNS("http://www.w3.org/2000/svg", "g");
        const isOfficial = node.isOfficial !== false;
        const nodeClass = node.type === "mcp" ? "graph-node--mcp" : isOfficial ? "graph-node--skill" : "graph-node--community";
        g.setAttribute("class", `graph-node ${nodeClass}`);
        g.setAttribute("data-id", node.id);
        g.style.cursor = "pointer";
        const circle = document.createElementNS("http://www.w3.org/2000/svg", "circle");
        const radius = node.type === "mcp" ? 24 : 18;
        circle.setAttribute("r", String(radius));
        circle.setAttribute("cx", "0");
        circle.setAttribute("cy", "0");
        if (node.type === "mcp") {
          circle.setAttribute("fill", "url(#mcp-gradient)");
        } else if (isOfficial) {
          circle.setAttribute("fill", "url(#skill-gradient)");
        } else {
          circle.setAttribute("fill", "url(#community-gradient)");
        }
        circle.setAttribute("filter", "url(#glow)");
        const text = document.createElementNS("http://www.w3.org/2000/svg", "text");
        text.setAttribute("y", String(radius + 14));
        text.setAttribute("text-anchor", "middle");
        text.setAttribute("fill", "#e2e8f0");
        text.setAttribute("font-size", "10");
        text.setAttribute("font-weight", "500");
        text.textContent = node.name.length > 12 ? node.name.substring(0, 11) + "\u2026" : node.name;
        g.appendChild(circle);
        g.appendChild(text);
        g.addEventListener("mouseenter", (e) => showTooltip(e, node));
        g.addEventListener("mouseleave", hideTooltip);
        g.addEventListener("click", () => highlightConnections(node, edges));
        g.addEventListener("mousedown", (e) => {
          node.fx = node.x;
          node.fy = node.y;
          e.stopPropagation();
        });
        nodeGroup.appendChild(g);
        nodeElements.set(node.id, g);
      });
      graphSvg.addEventListener("mousemove", (e) => {
        const rect = graphSvg.getBoundingClientRect();
        const mouseX = (e.clientX - rect.left - transform.x) / transform.k;
        const mouseY = (e.clientY - rect.top - transform.y) / transform.k;
        allNodes.forEach((node) => {
          if (node.fx !== null) {
            node.x = mouseX;
            node.y = mouseY;
            node.fx = mouseX;
            node.fy = mouseY;
          }
        });
      });
      graphSvg.addEventListener("mouseup", () => {
        allNodes.forEach((node) => {
          node.fx = null;
          node.fy = null;
        });
      });
      let isPanning = false;
      let startX = 0, startY = 0;
      graphSvg.addEventListener("wheel", (e) => {
        e.preventDefault();
        const delta = e.deltaY > 0 ? 0.9 : 1.1;
        transform.k = Math.max(0.3, Math.min(3, transform.k * delta));
        container.setAttribute("transform", `translate(${transform.x}, ${transform.y}) scale(${transform.k})`);
      });
      graphSvg.addEventListener("mousedown", (e) => {
        if (e.target === graphSvg || e.target.classList.contains("graph-container-inner")) {
          isPanning = true;
          startX = e.clientX - transform.x;
          startY = e.clientY - transform.y;
        }
      });
      graphSvg.addEventListener("mousemove", (e) => {
        if (isPanning) {
          transform.x = e.clientX - startX;
          transform.y = e.clientY - startY;
          container.setAttribute("transform", `translate(${transform.x}, ${transform.y}) scale(${transform.k})`);
        }
      });
      graphSvg.addEventListener("mouseup", () => {
        isPanning = false;
      });
      graphSvg.addEventListener("mouseleave", () => {
        isPanning = false;
      });
      const padding = 50;
      const minX = padding;
      const maxX = width - padding;
      const minY = padding;
      const maxY = height - padding;
      tick();
      log("graph", "Graph rendered and simulation started");
    } catch (err) {
      error("graph", "renderGraph failed", err);
    }
  }
  function showTooltip(e, node) {
    if (!graphTooltip || !graphView)
      return;
    const endpoint = endpoints.find((ep) => ep.id === node.id);
    if (!endpoint) {
      warn("tooltip", `No endpoint found for node "${node.id}"`);
      return;
    }
    let html = `<div class="graph-tooltip__type">${node.type.toUpperCase()}</div>`;
    html += `<div class="graph-tooltip__title">${endpoint.name}</div>`;
    html += `<div>${endpoint.summary}</div>`;
    if (endpoint.requiredMcp && endpoint.requiredMcp.length > 0) {
      html += `<div class="graph-tooltip__deps">Requires: ${endpoint.requiredMcp.join(", ")}</div>`;
    }
    graphTooltip.innerHTML = html;
    graphTooltip.classList.add("is-visible");
    const rect = graphView.getBoundingClientRect();
    const x = e.clientX - rect.left + 10;
    const y = e.clientY - rect.top + 10;
    graphTooltip.style.left = `${x}px`;
    graphTooltip.style.top = `${y}px`;
  }
  function hideTooltip() {
    graphTooltip?.classList.remove("is-visible");
  }
  function highlightConnections(node, edges) {
    document.querySelectorAll(".graph-node").forEach((n) => {
      n.classList.remove("is-highlighted", "is-dimmed");
    });
    document.querySelectorAll(".graph-edge").forEach((e) => {
      e.classList.remove("is-highlighted");
      e.style.stroke = "rgba(148, 163, 184, 0.15)";
      e.style.strokeWidth = "1";
    });
    const connectedIds = /* @__PURE__ */ new Set();
    connectedIds.add(node.id);
    edges.forEach((edge) => {
      if (edge.from.id === node.id) {
        connectedIds.add(edge.to.id);
      } else if (edge.to.id === node.id) {
        connectedIds.add(edge.from.id);
      }
    });
    log("graph", `Highlight "${node.name}" \u2014 ${connectedIds.size - 1} connections`);
    const currentNodeEl = document.querySelector(`[data-id="${node.id}"]`);
    currentNodeEl?.classList.add("is-highlighted");
    document.querySelectorAll(".graph-node").forEach((n) => {
      const nodeId = n.getAttribute("data-id");
      if (nodeId && !connectedIds.has(nodeId)) {
        n.classList.add("is-dimmed");
      } else if (nodeId && nodeId !== node.id) {
        n.classList.add("is-highlighted");
      }
    });
    edges.forEach((edge) => {
      if (edge.from.id === node.id || edge.to.id === node.id) {
        const edgeEl = document.querySelector(`[data-from="${edge.from.id}"][data-to="${edge.to.id}"]`);
        if (edgeEl) {
          edgeEl.classList.add("is-highlighted");
          edgeEl.style.stroke = node.type === "mcp" ? "#22d3ee" : "#a855f7";
          edgeEl.style.strokeWidth = "2";
        }
      }
    });
  }
  document.addEventListener("DOMContentLoaded", () => {
    log("init", "DOMContentLoaded fired \u2014 initializing app");
    const t0 = performance.now();
    try {
      renderSidebarNav();
      renderEndpoints();
      sidebarToggle?.addEventListener("click", toggleSidebar);
      sidebarOverlay?.addEventListener("click", closeSidebar);
      searchInput?.addEventListener("input", (e) => {
        searchQuery = e.target.value.toLowerCase();
        renderEndpoints();
      });
      document.addEventListener("keydown", (e) => {
        if ((e.metaKey || e.ctrlKey) && e.key === "k") {
          e.preventDefault();
          searchInput?.focus();
        }
        if (e.key === "Escape") {
          closeSidebar();
          searchInput?.blur();
        }
      });
      filterBtns.forEach((btn) => {
        btn.addEventListener("click", () => {
          filterBtns.forEach((b) => b.classList.remove("is-active"));
          btn.classList.add("is-active");
          activeFilter = btn.dataset.filter;
          log("filter", `Active filter: ${activeFilter}`);
          renderEndpoints();
        });
      });
      viewTabs.forEach((tab) => {
        tab.addEventListener("click", () => {
          switchView(tab.dataset.view);
        });
      });
      sidebarNav?.addEventListener("click", (e) => {
        const link = e.target.closest(".sidebar__link");
        if (link) {
          closeSidebar();
        }
      });
      window.addEventListener("resize", () => {
        if (currentView === "graph") {
          renderGraph();
        }
      });
      const elapsed = (performance.now() - t0).toFixed(1);
      log("init", `App initialized in ${elapsed}ms`);
    } catch (err) {
      error("init", "Fatal error during initialization", err);
    }
  });
})();
//# sourceMappingURL=script.js.map
