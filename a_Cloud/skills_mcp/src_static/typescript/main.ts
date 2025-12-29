// ============================================
// SKILLS & MCP TOOLS DOCS - MAIN TS
// ============================================

interface Endpoint {
  id: string;
  type: 'mcp' | 'skill';
  name: string;
  path: string;
  summary: string;
  description: string;
  parameters?: Parameter[];
  example?: string;
  category: string;
  requiredMcp?: string[];
  source?: string;
}

interface Parameter {
  name: string;
  type: string;
  required: boolean;
  description: string;
}

// ============================================
// DOM Elements
// ============================================
const sidebar = document.querySelector('.sidebar') as HTMLElement;
const sidebarToggle = document.querySelector('.sidebar-toggle') as HTMLElement;
const sidebarOverlay = document.querySelector('.sidebar-overlay') as HTMLElement;
const searchInput = document.querySelector('.search__input') as HTMLInputElement;
const filterBtns = document.querySelectorAll('.filter-btn') as NodeListOf<HTMLButtonElement>;
const endpointList = document.querySelector('.endpoint-list') as HTMLElement;
const sidebarNav = document.querySelector('.sidebar__nav') as HTMLElement;

// ============================================
// State
// ============================================
let activeFilter: 'all' | 'mcp' | 'skill' = 'all';
let searchQuery = '';

// ============================================
// Data - MCP Tools (Claude Code Built-in)
// ============================================
const mcpTools: Endpoint[] = [
  // === FILE OPERATIONS ===
  {
    id: 'read',
    type: 'mcp',
    name: 'Read',
    path: 'Read',
    summary: 'Read file contents',
    description: 'Reads a file from the local filesystem. Supports text files, images (PNG, JPG), PDFs, and Jupyter notebooks (.ipynb). Returns content with line numbers.',
    category: 'File Operations',
    parameters: [
      { name: 'file_path', type: 'string', required: true, description: 'The absolute path to the file to read' },
      { name: 'offset', type: 'number', required: false, description: 'Line number to start reading from' },
      { name: 'limit', type: 'number', required: false, description: 'Number of lines to read (default: 2000)' }
    ],
    example: `// Read entire file
Read({ file_path: "/path/to/file.ts" })

// Read specific lines (for large files)
Read({ file_path: "/path/to/file.ts", offset: 100, limit: 50 })`
  },
  {
    id: 'write',
    type: 'mcp',
    name: 'Write',
    path: 'Write',
    summary: 'Write/create file',
    description: 'Writes content to a file on the local filesystem. Overwrites existing files. Requires reading the file first if it exists.',
    category: 'File Operations',
    parameters: [
      { name: 'file_path', type: 'string', required: true, description: 'The absolute path to the file to write' },
      { name: 'content', type: 'string', required: true, description: 'The content to write to the file' }
    ],
    example: `Write({
  file_path: "/path/to/new-file.ts",
  content: "export const hello = 'world';"
})`
  },
  {
    id: 'edit',
    type: 'mcp',
    name: 'Edit',
    path: 'Edit',
    summary: 'Edit file with string replacement',
    description: 'Performs exact string replacements in files. Fails if old_string is not unique. Must read the file first before editing.',
    category: 'File Operations',
    parameters: [
      { name: 'file_path', type: 'string', required: true, description: 'The absolute path to the file to modify' },
      { name: 'old_string', type: 'string', required: true, description: 'The exact text to replace (must be unique)' },
      { name: 'new_string', type: 'string', required: true, description: 'The replacement text' },
      { name: 'replace_all', type: 'boolean', required: false, description: 'Replace all occurrences (default: false)' }
    ],
    example: `Edit({
  file_path: "/path/to/file.ts",
  old_string: "const old = 'value';",
  new_string: "const updated = 'newValue';"
})`
  },
  {
    id: 'notebook-edit',
    type: 'mcp',
    name: 'NotebookEdit',
    path: 'NotebookEdit',
    summary: 'Edit Jupyter notebook cells',
    description: 'Replaces, inserts, or deletes cells in Jupyter notebooks (.ipynb files). Supports code and markdown cell types.',
    category: 'File Operations',
    parameters: [
      { name: 'notebook_path', type: 'string', required: true, description: 'Absolute path to the .ipynb file' },
      { name: 'new_source', type: 'string', required: true, description: 'The new source content for the cell' },
      { name: 'cell_id', type: 'string', required: false, description: 'ID of the cell to edit' },
      { name: 'cell_type', type: 'string', required: false, description: 'code | markdown' },
      { name: 'edit_mode', type: 'string', required: false, description: 'replace | insert | delete' }
    ],
    example: `NotebookEdit({
  notebook_path: "/path/to/notebook.ipynb",
  cell_id: "abc123",
  new_source: "import pandas as pd\\ndf = pd.read_csv('data.csv')",
  cell_type: "code"
})`
  },

  // === SEARCH ===
  {
    id: 'glob',
    type: 'mcp',
    name: 'Glob',
    path: 'Glob',
    summary: 'Find files by pattern',
    description: 'Fast file pattern matching tool. Supports glob patterns like "**/*.js" or "src/**/*.ts". Returns matching file paths sorted by modification time.',
    category: 'Search',
    parameters: [
      { name: 'pattern', type: 'string', required: true, description: 'Glob pattern (e.g., "**/*.ts", "src/**/*.{js,jsx}")' },
      { name: 'path', type: 'string', required: false, description: 'Directory to search in (default: cwd)' }
    ],
    example: `// Find all TypeScript files
Glob({ pattern: "**/*.ts" })

// Find in specific directory
Glob({ pattern: "*.scss", path: "/project/src/styles" })

// Multiple extensions
Glob({ pattern: "**/*.{ts,tsx}" })`
  },
  {
    id: 'grep',
    type: 'mcp',
    name: 'Grep',
    path: 'Grep',
    summary: 'Search file contents (ripgrep)',
    description: 'Powerful search tool built on ripgrep. Supports regex, file type filtering, context lines, and multiple output modes.',
    category: 'Search',
    parameters: [
      { name: 'pattern', type: 'string', required: true, description: 'Regex pattern to search for' },
      { name: 'path', type: 'string', required: false, description: 'File or directory to search' },
      { name: 'output_mode', type: 'string', required: false, description: 'content | files_with_matches | count' },
      { name: 'glob', type: 'string', required: false, description: 'Filter files by glob pattern' },
      { name: 'type', type: 'string', required: false, description: 'File type (js, py, rust, go, etc.)' },
      { name: '-C', type: 'number', required: false, description: 'Context lines before and after match' },
      { name: '-i', type: 'boolean', required: false, description: 'Case insensitive search' },
      { name: 'multiline', type: 'boolean', required: false, description: 'Enable multiline matching' }
    ],
    example: `// Find function definitions
Grep({ pattern: "function\\\\s+\\\\w+", type: "ts" })

// Show content with context
Grep({ pattern: "TODO|FIXME", output_mode: "content", "-C": 2 })

// Case insensitive search
Grep({ pattern: "error", "-i": true, glob: "*.log" })`
  },

  // === SYSTEM ===
  {
    id: 'bash',
    type: 'mcp',
    name: 'Bash',
    path: 'Bash',
    summary: 'Execute shell commands',
    description: 'Executes bash commands in a persistent shell session. For git, npm, docker, and other CLI operations. NOT for file reading/writing.',
    category: 'System',
    parameters: [
      { name: 'command', type: 'string', required: true, description: 'The bash command to execute' },
      { name: 'description', type: 'string', required: false, description: 'Short description of what command does' },
      { name: 'timeout', type: 'number', required: false, description: 'Timeout in ms (max 600000, default 120000)' },
      { name: 'run_in_background', type: 'boolean', required: false, description: 'Run command in background' }
    ],
    example: `// Git operations
Bash({ command: "git status", description: "Check git status" })

// Install dependencies
Bash({ command: "npm install", timeout: 300000 })

// Background process
Bash({ command: "npm run dev", run_in_background: true })`
  },
  {
    id: 'kill-shell',
    type: 'mcp',
    name: 'KillShell',
    path: 'KillShell',
    summary: 'Kill background shell',
    description: 'Terminates a running background bash shell by its ID. Use /tasks to find shell IDs.',
    category: 'System',
    parameters: [
      { name: 'shell_id', type: 'string', required: true, description: 'The ID of the background shell to kill' }
    ],
    example: `KillShell({ shell_id: "abc123" })`
  },

  // === WEB ===
  {
    id: 'web-fetch',
    type: 'mcp',
    name: 'WebFetch',
    path: 'WebFetch',
    summary: 'Fetch and analyze web content',
    description: 'Fetches URL content, converts HTML to markdown, and processes it with AI. Includes 15-minute cache. Handles redirects.',
    category: 'Web',
    parameters: [
      { name: 'url', type: 'string', required: true, description: 'The URL to fetch (HTTP upgraded to HTTPS)' },
      { name: 'prompt', type: 'string', required: true, description: 'What information to extract from the page' }
    ],
    example: `WebFetch({
  url: "https://docs.example.com/api",
  prompt: "Extract the authentication methods and API endpoints"
})`
  },
  {
    id: 'web-search',
    type: 'mcp',
    name: 'WebSearch',
    path: 'WebSearch',
    summary: 'Search the web',
    description: 'Search the web for up-to-date information. Returns search results with links. Must include Sources section in response.',
    category: 'Web',
    parameters: [
      { name: 'query', type: 'string', required: true, description: 'The search query' },
      { name: 'allowed_domains', type: 'string[]', required: false, description: 'Only include results from these domains' },
      { name: 'blocked_domains', type: 'string[]', required: false, description: 'Exclude results from these domains' }
    ],
    example: `// General search
WebSearch({ query: "React 19 new features 2025" })

// Domain-specific
WebSearch({
  query: "typescript generics",
  allowed_domains: ["typescriptlang.org", "github.com"]
})`
  },

  // === AGENTS ===
  {
    id: 'task',
    type: 'mcp',
    name: 'Task',
    path: 'Task',
    summary: 'Launch specialized agents',
    description: 'Launch autonomous agents for complex multi-step tasks. Types: general-purpose, Explore (codebase search), Plan (architecture), claude-code-guide (docs).',
    category: 'Agents',
    parameters: [
      { name: 'prompt', type: 'string', required: true, description: 'The task for the agent to perform' },
      { name: 'subagent_type', type: 'string', required: true, description: 'general-purpose | Explore | Plan | claude-code-guide' },
      { name: 'description', type: 'string', required: true, description: 'Short description (3-5 words)' },
      { name: 'run_in_background', type: 'boolean', required: false, description: 'Run agent in background' },
      { name: 'resume', type: 'string', required: false, description: 'Agent ID to resume from previous execution' }
    ],
    example: `// Explore codebase
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
})`
  },
  {
    id: 'task-output',
    type: 'mcp',
    name: 'TaskOutput',
    path: 'TaskOutput',
    summary: 'Get agent/task output',
    description: 'Retrieves output from running or completed background tasks (agents, shells, remote sessions).',
    category: 'Agents',
    parameters: [
      { name: 'task_id', type: 'string', required: true, description: 'The task ID to get output from' },
      { name: 'block', type: 'boolean', required: false, description: 'Wait for completion (default: true)' },
      { name: 'timeout', type: 'number', required: false, description: 'Max wait time in ms (max 600000)' }
    ],
    example: `// Wait for task completion
TaskOutput({ task_id: "agent-123" })

// Non-blocking check
TaskOutput({ task_id: "agent-123", block: false })`
  },

  // === CODE INTELLIGENCE ===
  {
    id: 'lsp',
    type: 'mcp',
    name: 'LSP',
    path: 'LSP',
    summary: 'Language Server Protocol',
    description: 'Code intelligence via LSP: go to definition, find references, hover info, document symbols, call hierarchy.',
    category: 'Code Intelligence',
    parameters: [
      { name: 'operation', type: 'string', required: true, description: 'goToDefinition | findReferences | hover | documentSymbol | workspaceSymbol | goToImplementation | prepareCallHierarchy | incomingCalls | outgoingCalls' },
      { name: 'filePath', type: 'string', required: true, description: 'The file to operate on' },
      { name: 'line', type: 'number', required: true, description: 'Line number (1-based)' },
      { name: 'character', type: 'number', required: true, description: 'Character offset (1-based)' }
    ],
    example: `// Go to definition
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
})`
  },

  // === USER INTERACTION ===
  {
    id: 'ask-user',
    type: 'mcp',
    name: 'AskUserQuestion',
    path: 'AskUserQuestion',
    summary: 'Ask user questions',
    description: 'Ask the user questions during execution. For clarifying requirements, getting preferences, or validating assumptions.',
    category: 'User Interaction',
    parameters: [
      { name: 'questions', type: 'Question[]', required: true, description: 'Array of 1-4 questions with options' }
    ],
    example: `AskUserQuestion({
  questions: [{
    question: "Which auth method should we use?",
    header: "Auth",
    options: [
      { label: "JWT (Recommended)", description: "Stateless tokens" },
      { label: "Session", description: "Server-side sessions" }
    ],
    multiSelect: false
  }]
})`
  },

  // === PLANNING ===
  {
    id: 'todo-write',
    type: 'mcp',
    name: 'TodoWrite',
    path: 'TodoWrite',
    summary: 'Manage task list',
    description: 'Create and manage structured task lists. Track progress with pending/in_progress/completed states. Use for complex multi-step tasks.',
    category: 'Planning',
    parameters: [
      { name: 'todos', type: 'Todo[]', required: true, description: 'Array of todo items with content, status, and activeForm' }
    ],
    example: `TodoWrite({
  todos: [
    { content: "Setup project", status: "completed", activeForm: "Setting up project" },
    { content: "Implement auth", status: "in_progress", activeForm: "Implementing auth" },
    { content: "Write tests", status: "pending", activeForm: "Writing tests" }
  ]
})`
  },
  {
    id: 'enter-plan-mode',
    type: 'mcp',
    name: 'EnterPlanMode',
    path: 'EnterPlanMode',
    summary: 'Start planning mode',
    description: 'Enter plan mode for non-trivial implementations. Explore codebase and design approach before coding. Requires user approval.',
    category: 'Planning',
    parameters: []
  },
  {
    id: 'exit-plan-mode',
    type: 'mcp',
    name: 'ExitPlanMode',
    path: 'ExitPlanMode',
    summary: 'Exit planning mode',
    description: 'Signal completion of planning phase. Plan should already be written to the plan file.',
    category: 'Planning',
    parameters: []
  }
];

// ============================================
// Data - Official Anthropic Skills (all 16 from github.com/anthropics/skills)
// ============================================
const officialSkills: Endpoint[] = [
  // === DOCUMENT SKILLS ===
  {
    id: 'skill-pdf',
    type: 'skill',
    name: 'PDF',
    path: 'pdf',
    summary: 'PDF manipulation toolkit',
    description: 'Comprehensive PDF toolkit: extract text/tables with pdfplumber, OCR scanned docs with pytesseract, create PDFs with reportlab, merge/split with pypdf/qpdf, rotate pages, add watermarks, encrypt/decrypt, and fill form fields.',
    category: 'Document Skills',
    source: 'anthropics/skills',
    requiredMcp: ['Read', 'Write', 'Bash'],
    parameters: [
      { name: 'Libraries', type: 'Python', required: true, description: 'pypdf, pdfplumber, reportlab, pytesseract, pdf2image, pandas' },
      { name: 'CLI Tools', type: 'Bash', required: false, description: 'pdftotext, qpdf, pdftk (poppler-utils)' }
    ],
    example: `"Extract the table from page 3 of report.pdf and convert to CSV"

"Merge invoice1.pdf and invoice2.pdf, then add a watermark"

"OCR this scanned document and extract all text with layout preservation"

"Fill out the form fields in application.pdf programmatically"`
  },
  {
    id: 'skill-docx',
    type: 'skill',
    name: 'DOCX',
    path: 'docx',
    summary: 'Word document manipulation',
    description: 'Comprehensive Word document handling: text extraction via pandoc, raw XML access for comments/formatting/media, document creation with docx-js, tracked changes (redlining) with OOXML, and visualization via LibreOffice PDF conversion.',
    category: 'Document Skills',
    source: 'anthropics/skills',
    requiredMcp: ['Read', 'Write', 'Bash'],
    parameters: [
      { name: 'pandoc', type: 'CLI', required: true, description: 'Text extraction with tracked changes' },
      { name: 'docx (npm)', type: 'Node.js', required: true, description: 'Document creation' },
      { name: 'LibreOffice', type: 'CLI', required: false, description: 'PDF/image conversion' },
      { name: 'defusedxml', type: 'Python', required: false, description: 'Secure XML parsing for OOXML' }
    ],
    example: `"Extract text preserving tracked changes from contract.docx"

"Create a Word document with proper styles from this markdown"

"Implement tracked changes for minimal, precise edits only"

"Convert the DOCX to images for visual review"`
  },
  {
    id: 'skill-xlsx',
    type: 'skill',
    name: 'XLSX',
    path: 'xlsx',
    summary: 'Excel spreadsheet operations',
    description: 'Comprehensive spreadsheet operations: create/edit with formulas using openpyxl, data analysis with pandas, formula recalculation via LibreOffice recalc.py, financial model standards with color coding (blue=inputs, black=formulas).',
    category: 'Document Skills',
    source: 'anthropics/skills',
    requiredMcp: ['Read', 'Write', 'Bash'],
    parameters: [
      { name: 'pandas', type: 'Python', required: true, description: 'Data analysis and manipulation' },
      { name: 'openpyxl', type: 'Python', required: true, description: 'Complex formatting and formulas' },
      { name: 'recalc.py', type: 'Script', required: true, description: 'LibreOffice formula recalculation' },
      { name: 'Zero formula errors', type: 'Validation', required: true, description: 'No #REF!, #DIV/0!, #VALUE!, #N/A, #NAME?' }
    ],
    example: `"Create a financial model with dynamic formulas (never hardcode values)"

"Analyze Q4 sales data and create pivot summary"

"Validate all formulas and fix any #REF! errors"

"Apply financial formatting: blue for inputs, black for calculations"`
  },
  {
    id: 'skill-pptx',
    type: 'skill',
    name: 'PPTX',
    path: 'pptx',
    summary: 'PowerPoint presentations',
    description: 'Full PowerPoint support: create from HTML via html2pptx, edit via OOXML manipulation, use templates with inventory.py, thumbnail generation, slide rearrangement. Supports web-safe fonts only, two-column layouts preferred, validate with thumbnails.',
    category: 'Document Skills',
    source: 'anthropics/skills',
    requiredMcp: ['Read', 'Write', 'Bash'],
    parameters: [
      { name: 'html2pptx', type: 'Script', required: true, description: 'Convert HTML slides to PPTX' },
      { name: 'ooxml scripts', type: 'Python', required: true, description: 'unpack.py, pack.py, validate.py' },
      { name: 'inventory.py', type: 'Script', required: false, description: 'Template text inventory' },
      { name: 'thumbnail.py', type: 'Script', required: true, description: 'Generate slide grids for validation' },
      { name: 'Sharp', type: 'Node.js', required: false, description: 'Rasterize gradients/icons to PNG' }
    ],
    example: `"Create presentation from HTML (720pt × 405pt slides for 16:9)"

"Edit existing deck: unpack → modify XML → validate → pack"

"Use template: extract inventory, rearrange slides, replace text"

"Generate thumbnail grid to check for layout issues"`
  },

  // === DESIGN & CREATIVE ===
  {
    id: 'skill-algorithmic-art',
    type: 'skill',
    name: 'Algorithmic Art',
    path: 'algorithmic-art',
    summary: 'Generative art with p5.js',
    description: 'Create generative and algorithmic art using p5.js. Supports seeded randomness for reproducibility, particle systems, fractals, Perlin noise, and creative coding patterns. Outputs as HTML with embedded canvas.',
    category: 'Design & Creative',
    source: 'anthropics/skills',
    requiredMcp: ['Write'],
    example: `"Create a generative particle system with seeded randomness"

"Build a fractal tree animation with adjustable branching angle"

"Generate abstract art using layered Perlin noise fields"

"Create an interactive piece responding to mouse movement"`
  },
  {
    id: 'skill-canvas-design',
    type: 'skill',
    name: 'Canvas Design',
    path: 'canvas-design',
    summary: 'Visual art creation (PNG/PDF)',
    description: 'Two-step design process: 1) Create a design philosophy/aesthetic movement (4-6 paragraphs), 2) Express it visually. 90% visual, 10% text. Museum/magazine quality with expert craftsmanship. Subtle conceptual references, not literal.',
    category: 'Design & Creative',
    source: 'anthropics/skills',
    requiredMcp: ['Write', 'Read'],
    parameters: [
      { name: 'Design Philosophy', type: 'Markdown', required: true, description: 'Name movement, articulate visual essence' },
      { name: 'Canvas Expression', type: 'PDF/PNG', required: true, description: 'Visual output with minimal text' },
      { name: 'canvas-fonts', type: 'Directory', required: false, description: 'Available fonts for typography' }
    ],
    example: `"Create poster with 'Brutalist Joy' aesthetic movement"

"Design infographic following 'Chromatic Language' philosophy"

"Make museum-quality visual: dense patterns, limited palette, thin fonts"

"Refine existing composition - make it more pristine, not busier"`
  },
  {
    id: 'skill-slack-gif',
    type: 'skill',
    name: 'Slack GIF Creator',
    path: 'slack-gif-creator',
    summary: 'Animated GIFs for Slack',
    description: 'Create Slack-optimized GIFs using GIFBuilder, validators, and easing functions. Emoji: 128x128, 10-30fps, 48-128 colors, <3s. Message: 480x480. PIL for drawing, built-in animations: shake, pulse, bounce, spin, fade, zoom, particles.',
    category: 'Design & Creative',
    source: 'anthropics/skills',
    requiredMcp: ['Write', 'Bash'],
    parameters: [
      { name: 'GIFBuilder', type: 'Python class', required: true, description: 'Assemble and optimize GIFs' },
      { name: 'validators', type: 'Python module', required: true, description: 'validate_gif(), is_slack_ready()' },
      { name: 'easing', type: 'Python module', required: true, description: 'interpolate() with 7 easing types' },
      { name: 'pillow/imageio', type: 'Python', required: true, description: 'pip install pillow imageio numpy' }
    ],
    example: `"Create 128x128 emoji GIF with bounce animation"

"Make celebration GIF: optimize_for_emoji=True, num_colors=48"

"Build particle burst animation with elastic_out easing"

"Validate GIF is Slack-ready before uploading"`
  },
  {
    id: 'skill-theme-factory',
    type: 'skill',
    name: 'Theme Factory',
    path: 'theme-factory',
    summary: 'Professional theme styling',
    description: 'Apply 10 curated themes to artifacts (slides, docs, HTML). Themes include: Ocean Depths, Sunset Boulevard, Forest Canopy, Modern Minimalist, Golden Hour, Arctic Frost, Desert Rose, Tech Innovation, Botanical Garden, Midnight Galaxy.',
    category: 'Design & Creative',
    source: 'anthropics/skills',
    requiredMcp: ['Read', 'Write'],
    parameters: [
      { name: 'theme-showcase.pdf', type: 'PDF', required: true, description: 'Visual preview of all 10 themes' },
      { name: 'themes/', type: 'Directory', required: true, description: 'Theme files with colors and fonts' }
    ],
    example: `"Show theme-showcase.pdf for user to select visually"

"Apply 'Tech Innovation' theme to the presentation"

"Generate custom theme based on user brand description"

"Style landing page with 'Midnight Galaxy' color palette"`
  },

  // === DEVELOPMENT ===
  {
    id: 'skill-frontend-design',
    type: 'skill',
    name: 'Frontend Design',
    path: 'frontend-design',
    summary: 'Production-grade bold UI',
    description: 'Create distinctive, production-grade frontends avoiding "AI aesthetics". Process: Purpose → Tone (pick extreme: brutalist, maximalist, retro-futuristic, etc.) → Constraints → Differentiation. Avoid: Inter/Roboto, purple gradients, predictable layouts.',
    category: 'Development',
    source: 'anthropics/skills',
    requiredMcp: ['Write', 'Read', 'Glob'],
    parameters: [
      { name: 'Typography', type: 'Guideline', required: true, description: 'Distinctive fonts, not Arial/Inter/Roboto' },
      { name: 'Motion', type: 'Guideline', required: false, description: 'CSS animations, orchestrated reveals' },
      { name: 'Backgrounds', type: 'Guideline', required: false, description: 'Gradient meshes, noise, geometric patterns' }
    ],
    example: `"Create landing page with 'Brutalist/raw' aesthetic"

"Design dashboard avoiding generic AI patterns"

"Build UI with asymmetric layout and grid-breaking elements"

"Add dramatic shadows, custom cursors, grain overlays"`
  },
  {
    id: 'skill-web-artifacts',
    type: 'skill',
    name: 'Web Artifacts Builder',
    path: 'web-artifacts-builder',
    summary: 'React + Tailwind + shadcn/ui',
    description: 'Build elaborate multi-component artifacts: React 18 + TypeScript + Vite + Parcel bundling + Tailwind CSS + 40+ shadcn/ui components. Init → Edit → Bundle to single bundle.html. Avoid "AI slop" (centered layouts, purple gradients, rounded corners).',
    category: 'Development',
    source: 'anthropics/skills',
    requiredMcp: ['Write', 'Bash'],
    parameters: [
      { name: 'init-artifact.sh', type: 'Script', required: true, description: 'Initialize React project with all deps' },
      { name: 'bundle-artifact.sh', type: 'Script', required: true, description: 'Parcel bundle to single HTML' },
      { name: 'Node 18+', type: 'Runtime', required: true, description: 'Required for Vite version pinning' }
    ],
    example: `"bash scripts/init-artifact.sh my-dashboard"

"Build artifact using shadcn/ui components from ui.shadcn.com/docs"

"bash scripts/bundle-artifact.sh → outputs bundle.html"

"Share bundle.html as Claude artifact"`
  },
  {
    id: 'skill-mcp-builder',
    type: 'skill',
    name: 'MCP Builder',
    path: 'mcp-builder',
    summary: 'Create MCP servers',
    description: 'Guide for building Model Context Protocol (MCP) servers to extend Claude with external tools. Research API → Implement server → Test with Bash → Package. Integrates databases, APIs, and services.',
    category: 'Development',
    source: 'anthropics/skills',
    requiredMcp: ['Write', 'Read', 'Bash', 'Glob', 'WebSearch'],
    example: `"Create MCP server for PostgreSQL database queries"

"Build Jira integration MCP with issue creation/updates"

"Make MCP server for internal REST API"

"Test MCP server locally before configuring in Claude"`
  },
  {
    id: 'skill-webapp-testing',
    type: 'skill',
    name: 'WebApp Testing',
    path: 'webapp-testing',
    summary: 'Playwright E2E testing',
    description: 'Test local web applications using Playwright MCP. E2E testing, visual regression, accessibility testing. Requires Playwright MCP server configured. Capture screenshots, interact with pages, validate flows.',
    category: 'Development',
    source: 'anthropics/skills',
    requiredMcp: ['Read', 'Write', 'Bash', 'mcp__playwright'],
    parameters: [
      { name: 'Playwright MCP', type: 'MCP Server', required: true, description: 'Browser automation capability' }
    ],
    example: `"Test login flow with invalid credentials handling"

"Capture screenshots at each checkout step"

"Run accessibility audit on all form components"

"Visual regression test comparing to baseline screenshots"`
  },

  // === COMMUNICATION ===
  {
    id: 'skill-brand-guidelines',
    type: 'skill',
    name: 'Brand Guidelines',
    path: 'brand-guidelines',
    summary: 'Apply Anthropic brand styling',
    description: 'Apply official brand identity: Colors (Dark #141413, Light #faf9f5, Orange #d97757, Blue #6a9bcc, Green #788c5d), Typography (Headings: Poppins, Body: Lora). Smart font application to 24pt+ headings, automatic fallbacks.',
    category: 'Communication',
    source: 'anthropics/skills',
    requiredMcp: ['Read', 'Write'],
    parameters: [
      { name: 'Main Colors', type: 'Hex', required: true, description: '#141413 (dark), #faf9f5 (light), #b0aea5 (mid gray)' },
      { name: 'Accents', type: 'Hex', required: true, description: '#d97757 (orange), #6a9bcc (blue), #788c5d (green)' },
      { name: 'Fonts', type: 'Typography', required: true, description: 'Poppins (headings), Lora (body)' }
    ],
    example: `"Apply Anthropic brand colors to this presentation"

"Style document with Poppins headings and Lora body text"

"Use accent colors for shapes: orange, blue, green cycling"

"Ensure text colors have proper contrast on backgrounds"`
  },
  {
    id: 'skill-internal-comms',
    type: 'skill',
    name: 'Internal Comms',
    path: 'internal-comms',
    summary: 'Status reports & newsletters',
    description: 'Write internal communications with company formats: 3P updates (Progress/Plans/Problems), company newsletters, FAQ responses, status reports, leadership updates, incident reports. Load guideline files from examples/ directory.',
    category: 'Communication',
    source: 'anthropics/skills',
    requiredMcp: ['Read', 'Write'],
    parameters: [
      { name: '3p-updates.md', type: 'Template', required: false, description: 'Progress/Plans/Problems format' },
      { name: 'company-newsletter.md', type: 'Template', required: false, description: 'Newsletter format' },
      { name: 'faq-answers.md', type: 'Template', required: false, description: 'FAQ response format' },
      { name: 'general-comms.md', type: 'Template', required: false, description: 'Fallback template' }
    ],
    example: `"Write 3P update following examples/3p-updates.md format"

"Create company newsletter for product launch"

"Draft FAQ responses for the new benefits policy"

"Write incident report following company template"`
  },
  {
    id: 'skill-doc-coauthoring',
    type: 'skill',
    name: 'Doc Co-authoring',
    path: 'doc-coauthoring',
    summary: 'Three-stage collaborative writing',
    description: 'Structured 3-stage workflow: 1) Context Gathering (meta-questions, info dumping), 2) Refinement (clarify→brainstorm→curate→draft→iterate per section), 3) Reader Testing (sub-agent tests with fresh context). For PRDs, specs, proposals, RFCs.',
    category: 'Communication',
    source: 'anthropics/skills',
    requiredMcp: ['Read', 'Write', 'Edit', 'Task', 'AskUserQuestion'],
    parameters: [
      { name: 'Stage 1', type: 'Workflow', required: true, description: 'Context gathering: doc type, audience, impact, constraints' },
      { name: 'Stage 2', type: 'Workflow', required: true, description: 'Section-by-section: clarify → brainstorm → curate → draft' },
      { name: 'Stage 3', type: 'Workflow', required: true, description: 'Reader testing with fresh sub-agent' }
    ],
    example: `"Co-author this PRD using the three-stage workflow"

"Stage 2: Let's brainstorm options for the Requirements section"

"Use str_replace for surgical edits, never reprint whole doc"

"Stage 3: Test document with sub-agent asking reader questions"`
  },

  // === SKILL CREATION ===
  {
    id: 'skill-creator',
    type: 'skill',
    name: 'Skill Creator',
    path: 'skill-creator',
    summary: 'Build custom skills',
    description: 'Create effective skills: SKILL.md (frontmatter + instructions), bundled resources (scripts/, references/, assets/). Progressive disclosure: metadata (100 words) → SKILL.md (<5k words) → resources (as-needed). Init → Edit → Package → Iterate.',
    category: 'Skill Creation',
    source: 'anthropics/skills',
    requiredMcp: ['Write', 'Read', 'Bash', 'AskUserQuestion'],
    parameters: [
      { name: 'init_skill.py', type: 'Script', required: true, description: 'Create skeleton skill directory' },
      { name: 'package_skill.py', type: 'Script', required: true, description: 'Validate and package to .skill file' },
      { name: 'SKILL.md', type: 'Markdown', required: true, description: 'YAML frontmatter + instructions (<500 lines)' }
    ],
    example: `"scripts/init_skill.py my-skill --path ./skills/"

"Create scripts/ for reusable, deterministic code"

"Add references/ for documentation loaded as-needed"

"scripts/package_skill.py ./skills/my-skill → my-skill.skill"`
  }
];

// ============================================
// Data - Community Skills (Diego's Custom Agents)
// ============================================
const communitySkills: Endpoint[] = [
  // === ENGINEERING ===
  {
    id: 'agent-frontend-dev',
    type: 'skill',
    name: 'Frontend Developer',
    path: 'frontend-developer',
    summary: 'UI/UX implementation specialist',
    description: 'Specialized agent for building user-facing code and interfaces. React, Vue, Svelte expertise. Focuses on component architecture, state management, and responsive design.',
    category: 'Engineering Agents',
    source: 'community/diego',
    requiredMcp: ['Read', 'Write', 'Edit', 'Glob', 'Grep', 'Bash']
  },
  {
    id: 'agent-backend-arch',
    type: 'skill',
    name: 'Backend Architect',
    path: 'backend-architect',
    summary: 'Server-side & system design',
    description: 'Handles server-side logic, API design, and system infrastructure. Database modeling, microservices, and scalability patterns.',
    category: 'Engineering Agents',
    source: 'community/diego',
    requiredMcp: ['Read', 'Write', 'Edit', 'Bash', 'Grep']
  },
  {
    id: 'agent-mobile-builder',
    type: 'skill',
    name: 'Mobile App Builder',
    path: 'mobile-app-builder',
    summary: 'iOS/Android development',
    description: 'Specialized in iOS/Android application development. Swift, Kotlin, React Native, Flutter. App Store optimization and mobile-specific UX.',
    category: 'Engineering Agents',
    source: 'community/diego',
    requiredMcp: ['Read', 'Write', 'Edit', 'Bash']
  },
  {
    id: 'agent-ai-engineer',
    type: 'skill',
    name: 'AI Engineer',
    path: 'ai-engineer',
    summary: 'ML models & AI integration',
    description: 'Manages machine learning models and AI integration. Prompt engineering, model fine-tuning, RAG pipelines, and AI workflow automation.',
    category: 'Engineering Agents',
    source: 'community/diego',
    requiredMcp: ['Read', 'Write', 'Bash', 'WebSearch', 'WebFetch']
  },
  {
    id: 'agent-devops',
    type: 'skill',
    name: 'DevOps Automator',
    path: 'devops-automator',
    summary: 'CI/CD & infrastructure',
    description: 'Focuses on deployment pipelines, workflow automation, Docker, Kubernetes, and infrastructure as code.',
    category: 'Engineering Agents',
    source: 'community/diego',
    requiredMcp: ['Bash', 'Read', 'Write', 'Edit']
  },
  {
    id: 'agent-prototyper',
    type: 'skill',
    name: 'Rapid Prototyper',
    path: 'rapid-prototyper',
    summary: 'Quick MVPs & POCs',
    description: 'Designed for building quick MVPs and proof-of-concepts. Fast iteration, minimal viable features, rapid validation.',
    category: 'Engineering Agents',
    source: 'community/diego',
    requiredMcp: ['Write', 'Bash', 'Read']
  },

  // === PRODUCT ===
  {
    id: 'agent-trend-research',
    type: 'skill',
    name: 'Trend Researcher',
    path: 'trend-researcher',
    summary: 'Market & industry analysis',
    description: 'Analyzes market shifts and industry movements. Competitive intelligence, emerging technology tracking, and opportunity identification.',
    category: 'Product Agents',
    source: 'community/diego',
    requiredMcp: ['WebSearch', 'WebFetch', 'Read', 'Write']
  },
  {
    id: 'agent-feedback-synth',
    type: 'skill',
    name: 'Feedback Synthesizer',
    path: 'feedback-synthesizer',
    summary: 'User data interpretation',
    description: 'Aggregates and interprets user reviews, feedback data, and behavioral metrics. Sentiment analysis and actionable insights.',
    category: 'Product Agents',
    source: 'community/diego',
    requiredMcp: ['Read', 'Write', 'Grep']
  },
  {
    id: 'agent-sprint-prior',
    type: 'skill',
    name: 'Sprint Prioritizer',
    path: 'sprint-prioritizer',
    summary: 'Roadmap & task management',
    description: 'Manages the product roadmap and task urgency. Sprint planning, backlog grooming, and priority frameworks.',
    category: 'Product Agents',
    source: 'community/diego',
    requiredMcp: ['Read', 'Write', 'TodoWrite']
  },

  // === MARKETING ===
  {
    id: 'agent-tiktok',
    type: 'skill',
    name: 'TikTok Strategist',
    path: 'tiktok-strategist',
    summary: 'Short-form video strategy',
    description: 'Short-form video strategy and trends. Viral hooks, trend analysis, and content calendar for TikTok.',
    category: 'Marketing Agents',
    source: 'community/diego',
    requiredMcp: ['WebSearch', 'Write', 'Read']
  },
  {
    id: 'agent-instagram',
    type: 'skill',
    name: 'Instagram Curator',
    path: 'instagram-curator',
    summary: 'Visual branding & aesthetics',
    description: 'Visual branding and aesthetic feed management. Grid planning, story strategy, and engagement optimization.',
    category: 'Marketing Agents',
    source: 'community/diego',
    requiredMcp: ['Write', 'Read', 'WebSearch']
  },
  {
    id: 'agent-twitter',
    type: 'skill',
    name: 'Twitter Engager',
    path: 'twitter-engager',
    summary: 'Real-time community & threads',
    description: 'Focuses on real-time community interaction and threads. Trend hijacking, engagement tactics, and viral tweet patterns.',
    category: 'Marketing Agents',
    source: 'community/diego',
    requiredMcp: ['Write', 'WebSearch', 'Read']
  },
  {
    id: 'agent-reddit',
    type: 'skill',
    name: 'Reddit Community Builder',
    path: 'reddit-community-builder',
    summary: 'Subreddit & organic growth',
    description: 'Navigates niche subreddits and organic growth. Community rules awareness, authentic engagement, and karma building.',
    category: 'Marketing Agents',
    source: 'community/diego',
    requiredMcp: ['WebSearch', 'WebFetch', 'Write']
  },
  {
    id: 'agent-aso',
    type: 'skill',
    name: 'App Store Optimizer',
    path: 'app-store-optimizer',
    summary: 'ASO & marketplace visibility',
    description: 'Focuses on ASO and visibility in app marketplaces. Keyword optimization, screenshot design, and review management.',
    category: 'Marketing Agents',
    source: 'community/diego',
    requiredMcp: ['WebSearch', 'Write', 'Read']
  },
  {
    id: 'agent-content',
    type: 'skill',
    name: 'Content Creator',
    path: 'content-creator',
    summary: 'Copywriting & asset production',
    description: 'General copywriting and asset production. Blog posts, landing pages, email campaigns, and marketing collateral.',
    category: 'Marketing Agents',
    source: 'community/diego',
    requiredMcp: ['Write', 'Read', 'WebSearch']
  },
  {
    id: 'agent-growth',
    type: 'skill',
    name: 'Growth Hacker',
    path: 'growth-hacker',
    summary: 'Viral loops & user acquisition',
    description: 'Specialized in viral loops and rapid user acquisition. A/B testing frameworks, referral programs, and growth experiments.',
    category: 'Marketing Agents',
    source: 'community/diego',
    requiredMcp: ['WebSearch', 'Write', 'Read', 'Bash']
  },

  // === DESIGN ===
  {
    id: 'agent-ui-designer',
    type: 'skill',
    name: 'UI Designer',
    path: 'ui-designer',
    summary: 'Visual interface & layout',
    description: 'Focuses on the visual interface and layout. Component libraries, design systems, and pixel-perfect implementation.',
    category: 'Design Agents',
    source: 'community/diego',
    requiredMcp: ['Write', 'Read', 'Glob']
  },
  {
    id: 'agent-ux-researcher',
    type: 'skill',
    name: 'UX Researcher',
    path: 'ux-researcher',
    summary: 'User journeys & pain points',
    description: 'Analyzes user journeys and pain points. Usability testing, heuristic evaluation, and user interview synthesis.',
    category: 'Design Agents',
    source: 'community/diego',
    requiredMcp: ['Read', 'Write', 'WebSearch']
  },
  {
    id: 'agent-brand-guardian',
    type: 'skill',
    name: 'Brand Guardian',
    path: 'brand-guardian',
    summary: 'Voice, colors & consistency',
    description: 'Ensures consistency in voice, colors, and logos. Brand guidelines enforcement and style guide maintenance.',
    category: 'Design Agents',
    source: 'community/diego',
    requiredMcp: ['Read', 'Write', 'Glob']
  },
  {
    id: 'agent-visual-story',
    type: 'skill',
    name: 'Visual Storyteller',
    path: 'visual-storyteller',
    summary: 'Narrative-driven graphics',
    description: 'Creates narrative-driven graphic content. Infographics, presentations, and visual communication.',
    category: 'Design Agents',
    source: 'community/diego',
    requiredMcp: ['Write', 'Read']
  },
  {
    id: 'agent-whimsy',
    type: 'skill',
    name: 'Whimsy Injector',
    path: 'whimsy-injector',
    summary: 'Delight & easter eggs',
    description: 'Adds personality, easter eggs, and "delight" features to the product. Micro-interactions, loading states, and surprise moments.',
    category: 'Design Agents',
    source: 'community/diego',
    requiredMcp: ['Write', 'Read', 'Edit']
  },

  // === PROJECT MANAGEMENT ===
  {
    id: 'agent-experiment',
    type: 'skill',
    name: 'Experiment Tracker',
    path: 'experiment-tracker',
    summary: 'A/B tests & data trials',
    description: 'Monitors A/B tests and data-driven trials. Experiment design, statistical significance, and result documentation.',
    category: 'Project Management Agents',
    source: 'community/diego',
    requiredMcp: ['Read', 'Write', 'Grep']
  },
  {
    id: 'agent-shipper',
    type: 'skill',
    name: 'Project Shipper',
    path: 'project-shipper',
    summary: 'Deadlines & delivery',
    description: 'Focused on meeting deadlines and final delivery. Release checklists, blocker resolution, and launch coordination.',
    category: 'Project Management Agents',
    source: 'community/diego',
    requiredMcp: ['Read', 'Write', 'TodoWrite', 'Bash']
  },
  {
    id: 'agent-producer',
    type: 'skill',
    name: 'Studio Producer',
    path: 'studio-producer',
    summary: 'Multi-disciplinary coordination',
    description: 'High-level coordination of multi-disciplinary creative tasks. Resource allocation, timeline management, and stakeholder communication.',
    category: 'Project Management Agents',
    source: 'community/diego',
    requiredMcp: ['Read', 'Write', 'TodoWrite', 'Task']
  }
];

// Combine all endpoints
const endpoints: Endpoint[] = [...mcpTools, ...officialSkills, ...communitySkills];

// ============================================
// Functions
// ============================================

function toggleSidebar(): void {
  sidebar.classList.toggle('is-open');
  sidebarOverlay.classList.toggle('is-visible');
}

function closeSidebar(): void {
  sidebar.classList.remove('is-open');
  sidebarOverlay.classList.remove('is-visible');
}

function toggleEndpoint(element: HTMLElement): void {
  element.classList.toggle('is-open');
}

function filterEndpoints(): Endpoint[] {
  return endpoints.filter(ep => {
    const matchesFilter = activeFilter === 'all' || ep.type === activeFilter;
    const matchesSearch = searchQuery === '' ||
      ep.name.toLowerCase().includes(searchQuery) ||
      ep.summary.toLowerCase().includes(searchQuery) ||
      ep.path.toLowerCase().includes(searchQuery) ||
      ep.category.toLowerCase().includes(searchQuery) ||
      (ep.description && ep.description.toLowerCase().includes(searchQuery));
    return matchesFilter && matchesSearch;
  });
}

function renderEndpoint(ep: Endpoint): string {
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
        ${ep.parameters.map(p => `
          <tr>
            <td class="params-table__name">${p.name}</td>
            <td class="params-table__type">${p.type}</td>
            <td class="params-table__required">${p.required ? 'Yes' : 'No'}</td>
            <td>${p.description}</td>
          </tr>
        `).join('')}
      </tbody>
    </table>
  ` : '';

  const mcpHtml = ep.requiredMcp && ep.requiredMcp.length > 0 ? `
    <h4 class="endpoint__section-title">Required MCP Tools</h4>
    <div class="tags">
      ${ep.requiredMcp.map(mcp => `<span class="badge badge--mcp">${mcp}</span>`).join('')}
    </div>
  ` : '';

  const sourceHtml = ep.source ? `
    <div class="mt-md text-xs text-muted">
      Source: <a href="https://github.com/${ep.source}" target="_blank">${ep.source}</a>
    </div>
  ` : '';

  const exampleHtml = ep.example ? `
    <h4 class="endpoint__section-title">Example</h4>
    <div class="code-block">
      <div class="code-block__header">
        <span class="code-block__lang">${ep.type === 'mcp' ? 'typescript' : 'prompt'}</span>
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
  ` : '';

  return `
    <article class="endpoint endpoint--${ep.type}" id="${ep.id}" data-category="${ep.category}">
      <div class="endpoint__header" onclick="toggleEndpoint(this.parentElement)">
        <span class="endpoint__method">${ep.type.toUpperCase()}</span>
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
}

function renderEndpoints(): void {
  const filtered = filterEndpoints();
  const grouped = groupByCategory(filtered);

  let html = '';
  for (const [category, items] of Object.entries(grouped)) {
    const typeLabel = items[0].type === 'mcp' ? 'tools' : 'skills';
    html += `
      <section class="section" id="section-${slugify(category)}">
        <div class="section__title">
          <h2>${category}</h2>
          <span class="badge badge--${items[0].type}">${items.length} ${typeLabel}</span>
        </div>
        ${items.map(renderEndpoint).join('')}
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
}

function renderSidebarNav(): void {
  const mcpCategories = [...new Set(mcpTools.map(e => e.category))];
  const officialSkillCategories = [...new Set(officialSkills.map(e => e.category))];
  const communitySkillCategories = [...new Set(communitySkills.map(e => e.category))];

  let html = `
    <div class="sidebar__section">
      <div class="sidebar__section-title">
        <span class="sidebar__icon sidebar__icon--skill">S</span>
        Official Skills
      </div>
      <div class="sidebar__subtitle">Anthropic</div>
      ${officialSkillCategories.map(cat => `
        <a href="#section-${slugify(cat)}" class="sidebar__link sidebar__link--skill">${cat}</a>
      `).join('')}
    </div>
    <div class="sidebar__section">
      <div class="sidebar__section-title">
        <span class="sidebar__icon sidebar__icon--community">C</span>
        Community Skills
      </div>
      <div class="sidebar__subtitle">Custom Agents</div>
      ${communitySkillCategories.map(cat => `
        <a href="#section-${slugify(cat)}" class="sidebar__link sidebar__link--community">${cat}</a>
      `).join('')}
    </div>
    <div class="sidebar__section">
      <div class="sidebar__section-title">
        <span class="sidebar__icon sidebar__icon--mcp">T</span>
        MCP Tools
      </div>
      <div class="sidebar__subtitle">Built-in Capabilities</div>
      ${mcpCategories.map(cat => `
        <a href="#section-${slugify(cat)}" class="sidebar__link sidebar__link--mcp">${cat}</a>
      `).join('')}
    </div>
  `;

  sidebarNav.innerHTML = html;
}

function groupByCategory(items: Endpoint[]): Record<string, Endpoint[]> {
  return items.reduce((acc, item) => {
    if (!acc[item.category]) acc[item.category] = [];
    acc[item.category].push(item);
    return acc;
  }, {} as Record<string, Endpoint[]>);
}

function slugify(text: string): string {
  return text.toLowerCase().replace(/\s+/g, '-').replace(/[^\w-]/g, '');
}

function escapeHtml(text: string): string {
  return text
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/\n/g, '<br>');
}

function attachCopyHandlers(): void {
  document.querySelectorAll('.code-block__copy').forEach(btn => {
    btn.addEventListener('click', async (e) => {
      e.stopPropagation();
      const code = decodeURIComponent((btn as HTMLElement).dataset.code || '');
      await navigator.clipboard.writeText(code);
      btn.classList.add('is-copied');
      btn.textContent = 'Copied!';
      setTimeout(() => {
        btn.classList.remove('is-copied');
        btn.innerHTML = `
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <rect x="9" y="9" width="13" height="13" rx="2" ry="2"/>
            <path d="M5 15H4a2 2 0 01-2-2V4a2 2 0 012-2h9a2 2 0 012 2v1"/>
          </svg>
          Copy
        `;
      }, 2000);
    });
  });
}

// Make toggleEndpoint available globally
(window as any).toggleEndpoint = toggleEndpoint;

// ============================================
// Graph View
// ============================================
const listView = document.getElementById('list-view') as HTMLElement;
const graphView = document.getElementById('graph-view') as HTMLElement;
const graphSvg = document.getElementById('graph-svg') as SVGSVGElement;
const graphTooltip = document.getElementById('graph-tooltip') as HTMLElement;
const viewTabs = document.querySelectorAll('.view-tab') as NodeListOf<HTMLButtonElement>;
const filtersContainer = document.getElementById('filters-container') as HTMLElement;

let currentView: 'list' | 'graph' = 'list';

interface GraphNode {
  id: string;
  name: string;
  type: 'mcp' | 'skill';
  x: number;
  y: number;
  connections: string[];
}

function switchView(view: 'list' | 'graph'): void {
  currentView = view;
  viewTabs.forEach(tab => {
    tab.classList.toggle('is-active', tab.dataset.view === view);
  });

  if (view === 'list') {
    listView.classList.remove('hidden');
    graphView.classList.add('hidden');
    filtersContainer.style.display = 'flex';
  } else {
    listView.classList.add('hidden');
    graphView.classList.remove('hidden');
    filtersContainer.style.display = 'none';
    renderGraph();
  }
}

// Force simulation state
let simulation: any = null;
let transform = { x: 0, y: 0, k: 1 };

function renderGraph(): void {
  const width = graphSvg.clientWidth || 900;
  const height = graphSvg.clientHeight || 600;
  const centerX = width / 2;
  const centerY = height / 2;

  // Build nodes with initial positions in a circular layout
  const mcpNodes: GraphNode[] = mcpTools.map((tool, i) => {
    const angle = (i / mcpTools.length) * Math.PI * 2;
    const radius = 120;
    return {
      id: tool.id,
      name: tool.name,
      type: 'mcp' as const,
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
  const skillNodes: GraphNode[] = allSkills.map((skill, i) => {
    const angle = (i / allSkills.length) * Math.PI * 2 + Math.PI / 4;
    const radius = 280 + Math.random() * 80;
    return {
      id: skill.id,
      name: skill.name,
      type: 'skill' as const,
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

  // Build edges
  interface Edge { from: GraphNode; to: GraphNode; strength: number }
  const edges: Edge[] = [];
  skillNodes.forEach(skill => {
    skill.connections.forEach(mcpName => {
      const mcpNode = mcpNodes.find(m =>
        m.name === mcpName ||
        m.name.toLowerCase() === mcpName.toLowerCase()
      );
      if (mcpNode) {
        edges.push({ from: skill, to: mcpNode, strength: 0.3 });
      }
    });
  });

  // Clear SVG
  graphSvg.innerHTML = '';

  // Create container group for zoom/pan
  const container = document.createElementNS('http://www.w3.org/2000/svg', 'g');
  container.setAttribute('class', 'graph-container-inner');
  graphSvg.appendChild(container);

  // Create defs for gradients and filters
  const defs = document.createElementNS('http://www.w3.org/2000/svg', 'defs');
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

  // Draw edges first (behind nodes)
  const edgeGroup = document.createElementNS('http://www.w3.org/2000/svg', 'g');
  edgeGroup.setAttribute('class', 'graph-edges');
  container.appendChild(edgeGroup);

  const edgeElements: SVGPathElement[] = [];
  edges.forEach(edge => {
    const line = document.createElementNS('http://www.w3.org/2000/svg', 'path');
    line.setAttribute('class', 'graph-edge');
    line.setAttribute('data-from', edge.from.id);
    line.setAttribute('data-to', edge.to.id);
    line.setAttribute('fill', 'none');
    line.setAttribute('stroke', 'rgba(148, 163, 184, 0.15)');
    line.setAttribute('stroke-width', '1');
    edgeGroup.appendChild(line);
    edgeElements.push(line);
  });

  // Draw nodes
  const nodeGroup = document.createElementNS('http://www.w3.org/2000/svg', 'g');
  nodeGroup.setAttribute('class', 'graph-nodes');
  container.appendChild(nodeGroup);

  const nodeElements: Map<string, SVGGElement> = new Map();
  allNodes.forEach(node => {
    const g = document.createElementNS('http://www.w3.org/2000/svg', 'g');
    const isOfficial = (node as any).isOfficial !== false;
    const nodeClass = node.type === 'mcp' ? 'graph-node--mcp' :
                      (isOfficial ? 'graph-node--skill' : 'graph-node--community');
    g.setAttribute('class', `graph-node ${nodeClass}`);
    g.setAttribute('data-id', node.id);
    g.style.cursor = 'pointer';

    // Node circle
    const circle = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
    const radius = node.type === 'mcp' ? 24 : 18;
    circle.setAttribute('r', String(radius));
    circle.setAttribute('cx', '0');
    circle.setAttribute('cy', '0');

    if (node.type === 'mcp') {
      circle.setAttribute('fill', 'url(#mcp-gradient)');
    } else if (isOfficial) {
      circle.setAttribute('fill', 'url(#skill-gradient)');
    } else {
      circle.setAttribute('fill', 'url(#community-gradient)');
    }
    circle.setAttribute('filter', 'url(#glow)');

    // Node label
    const text = document.createElementNS('http://www.w3.org/2000/svg', 'text');
    text.setAttribute('y', String(radius + 14));
    text.setAttribute('text-anchor', 'middle');
    text.setAttribute('fill', '#e2e8f0');
    text.setAttribute('font-size', '10');
    text.setAttribute('font-weight', '500');
    text.textContent = node.name.length > 12 ? node.name.substring(0, 11) + '…' : node.name;

    g.appendChild(circle);
    g.appendChild(text);

    // Events
    g.addEventListener('mouseenter', (e) => showTooltip(e, node));
    g.addEventListener('mouseleave', hideTooltip);
    g.addEventListener('click', () => highlightConnections(node, edges));

    // Dragging
    let isDragging = false;
    g.addEventListener('mousedown', (e) => {
      isDragging = true;
      (node as any).fx = node.x;
      (node as any).fy = node.y;
      e.stopPropagation();
    });

    nodeGroup.appendChild(g);
    nodeElements.set(node.id, g);
  });

  // Mouse move for dragging
  graphSvg.addEventListener('mousemove', (e) => {
    const rect = graphSvg.getBoundingClientRect();
    const mouseX = (e.clientX - rect.left - transform.x) / transform.k;
    const mouseY = (e.clientY - rect.top - transform.y) / transform.k;

    allNodes.forEach(node => {
      if ((node as any).fx !== null) {
        node.x = mouseX;
        node.y = mouseY;
        (node as any).fx = mouseX;
        (node as any).fy = mouseY;
      }
    });
  });

  graphSvg.addEventListener('mouseup', () => {
    allNodes.forEach(node => {
      (node as any).fx = null;
      (node as any).fy = null;
    });
  });

  // Zoom and pan
  let isPanning = false;
  let startX = 0, startY = 0;

  graphSvg.addEventListener('wheel', (e) => {
    e.preventDefault();
    const delta = e.deltaY > 0 ? 0.9 : 1.1;
    transform.k = Math.max(0.3, Math.min(3, transform.k * delta));
    container.setAttribute('transform', `translate(${transform.x}, ${transform.y}) scale(${transform.k})`);
  });

  graphSvg.addEventListener('mousedown', (e) => {
    if (e.target === graphSvg || (e.target as Element).classList.contains('graph-container-inner')) {
      isPanning = true;
      startX = e.clientX - transform.x;
      startY = e.clientY - transform.y;
    }
  });

  graphSvg.addEventListener('mousemove', (e) => {
    if (isPanning) {
      transform.x = e.clientX - startX;
      transform.y = e.clientY - startY;
      container.setAttribute('transform', `translate(${transform.x}, ${transform.y}) scale(${transform.k})`);
    }
  });

  graphSvg.addEventListener('mouseup', () => { isPanning = false; });
  graphSvg.addEventListener('mouseleave', () => { isPanning = false; });

  // Simple force simulation
  function tick() {
    // Apply forces
    allNodes.forEach(node => {
      if ((node as any).fx !== null) return;

      // Center gravity
      const dx = centerX - node.x;
      const dy = centerY - node.y;
      node.x += dx * 0.001;
      node.y += dy * 0.001;

      // Node repulsion
      allNodes.forEach(other => {
        if (node === other) return;
        const ddx = node.x - other.x;
        const ddy = node.y - other.y;
        const dist = Math.sqrt(ddx * ddx + ddy * ddy) || 1;
        const minDist = node.type === 'mcp' ? 80 : 60;
        if (dist < minDist) {
          const force = (minDist - dist) / dist * 0.5;
          node.x += ddx * force;
          node.y += ddy * force;
        }
      });
    });

    // Edge attraction
    edges.forEach(edge => {
      const dx = edge.to.x - edge.from.x;
      const dy = edge.to.y - edge.from.y;
      const dist = Math.sqrt(dx * dx + dy * dy) || 1;
      const targetDist = 180;
      const force = (dist - targetDist) / dist * 0.02;

      if ((edge.from as any).fx === null) {
        edge.from.x += dx * force;
        edge.from.y += dy * force;
      }
      if ((edge.to as any).fx === null) {
        edge.to.x -= dx * force * 0.2;
        edge.to.y -= dy * force * 0.2;
      }
    });

    // Update positions
    allNodes.forEach(node => {
      const g = nodeElements.get(node.id);
      if (g) {
        g.setAttribute('transform', `translate(${node.x}, ${node.y})`);
      }
    });

    // Update edges
    edges.forEach((edge, i) => {
      const line = edgeElements[i];
      const dx = edge.to.x - edge.from.x;
      const dy = edge.to.y - edge.from.y;
      const dist = Math.sqrt(dx * dx + dy * dy);
      const midX = (edge.from.x + edge.to.x) / 2;
      const midY = (edge.from.y + edge.to.y) / 2;
      const offset = Math.min(30, dist * 0.1);
      const perpX = -dy / dist * offset;
      const perpY = dx / dist * offset;

      line.setAttribute('d',
        `M ${edge.from.x} ${edge.from.y} Q ${midX + perpX} ${midY + perpY} ${edge.to.x} ${edge.to.y}`
      );
    });

    requestAnimationFrame(tick);
  }

  tick();
}

function showTooltip(e: MouseEvent, node: GraphNode): void {
  const endpoint = endpoints.find(ep => ep.id === node.id);
  if (!endpoint) return;

  let html = `<div class="graph-tooltip__type">${node.type.toUpperCase()}</div>`;
  html += `<div class="graph-tooltip__title">${endpoint.name}</div>`;
  html += `<div>${endpoint.summary}</div>`;

  if (endpoint.requiredMcp && endpoint.requiredMcp.length > 0) {
    html += `<div class="graph-tooltip__deps">Requires: ${endpoint.requiredMcp.join(', ')}</div>`;
  }

  graphTooltip.innerHTML = html;
  graphTooltip.classList.add('is-visible');

  const rect = graphView.getBoundingClientRect();
  const x = e.clientX - rect.left + 10;
  const y = e.clientY - rect.top + 10;
  graphTooltip.style.left = `${x}px`;
  graphTooltip.style.top = `${y}px`;
}

function hideTooltip(): void {
  graphTooltip.classList.remove('is-visible');
}

function highlightConnections(node: GraphNode, edges: { from: GraphNode; to: GraphNode; strength?: number }[]): void {
  // Reset all
  document.querySelectorAll('.graph-node').forEach(n => {
    n.classList.remove('is-highlighted', 'is-dimmed');
  });
  document.querySelectorAll('.graph-edge').forEach(e => {
    e.classList.remove('is-highlighted');
    (e as SVGElement).style.stroke = 'rgba(148, 163, 184, 0.15)';
    (e as SVGElement).style.strokeWidth = '1';
  });

  // Find connected nodes
  const connectedIds = new Set<string>();
  connectedIds.add(node.id);

  edges.forEach(edge => {
    if (edge.from.id === node.id) {
      connectedIds.add(edge.to.id);
    } else if (edge.to.id === node.id) {
      connectedIds.add(edge.from.id);
    }
  });

  // Highlight current node
  const currentNodeEl = document.querySelector(`[data-id="${node.id}"]`);
  currentNodeEl?.classList.add('is-highlighted');

  // Dim non-connected nodes, highlight connected
  document.querySelectorAll('.graph-node').forEach(n => {
    const nodeId = n.getAttribute('data-id');
    if (nodeId && !connectedIds.has(nodeId)) {
      n.classList.add('is-dimmed');
    } else if (nodeId && nodeId !== node.id) {
      n.classList.add('is-highlighted');
    }
  });

  // Highlight connected edges
  edges.forEach(edge => {
    if (edge.from.id === node.id || edge.to.id === node.id) {
      const edgeEl = document.querySelector(`[data-from="${edge.from.id}"][data-to="${edge.to.id}"]`) as SVGElement;
      if (edgeEl) {
        edgeEl.classList.add('is-highlighted');
        edgeEl.style.stroke = node.type === 'mcp' ? '#22d3ee' : '#a855f7';
        edgeEl.style.strokeWidth = '2';
      }
    }
  });
}

// ============================================
// Event Listeners
// ============================================

document.addEventListener('DOMContentLoaded', () => {
  renderSidebarNav();
  renderEndpoints();

  // Sidebar toggle
  sidebarToggle?.addEventListener('click', toggleSidebar);
  sidebarOverlay?.addEventListener('click', closeSidebar);

  // Search
  searchInput?.addEventListener('input', (e) => {
    searchQuery = (e.target as HTMLInputElement).value.toLowerCase();
    renderEndpoints();
  });

  // Keyboard shortcut for search
  document.addEventListener('keydown', (e) => {
    if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
      e.preventDefault();
      searchInput?.focus();
    }
    if (e.key === 'Escape') {
      closeSidebar();
      searchInput?.blur();
    }
  });

  // Filter buttons
  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => b.classList.remove('is-active'));
      btn.classList.add('is-active');
      activeFilter = btn.dataset.filter as 'all' | 'mcp' | 'skill';
      renderEndpoints();
    });
  });

  // View tabs
  viewTabs.forEach(tab => {
    tab.addEventListener('click', () => {
      switchView(tab.dataset.view as 'list' | 'graph');
    });
  });

  // Smooth scroll for sidebar links
  sidebarNav?.addEventListener('click', (e) => {
    const link = (e.target as HTMLElement).closest('.sidebar__link');
    if (link) {
      closeSidebar();
    }
  });

  // Resize handler for graph
  window.addEventListener('resize', () => {
    if (currentView === 'graph') {
      renderGraph();
    }
  });
});
