(()=>{var V=(t,s,a)=>new Promise((d,i)=>{var n=g=>{try{y(a.next(g))}catch(f){i(f)}},w=g=>{try{y(a.throw(g))}catch(f){i(f)}},y=g=>g.done?d(g.value):Promise.resolve(g.value).then(n,w);y((a=a.apply(t,s)).next())});var X=document.querySelector(".sidebar"),T=document.querySelector(".sidebar-toggle"),S=document.querySelector(".sidebar-overlay"),k=document.querySelector(".search__input"),j=document.querySelectorAll(".filter-btn"),te=document.querySelector(".endpoint-list"),E=document.querySelector(".sidebar__nav"),G="all",v="",C=[{id:"read",type:"mcp",name:"Read",path:"Read",summary:"Read file contents",description:"Reads a file from the local filesystem. Supports text files, images (PNG, JPG), PDFs, and Jupyter notebooks (.ipynb). Returns content with line numbers.",category:"File Operations",parameters:[{name:"file_path",type:"string",required:!0,description:"The absolute path to the file to read"},{name:"offset",type:"number",required:!1,description:"Line number to start reading from"},{name:"limit",type:"number",required:!1,description:"Number of lines to read (default: 2000)"}],example:`// Read entire file
Read({ file_path: "/path/to/file.ts" })

// Read specific lines (for large files)
Read({ file_path: "/path/to/file.ts", offset: 100, limit: 50 })`},{id:"write",type:"mcp",name:"Write",path:"Write",summary:"Write/create file",description:"Writes content to a file on the local filesystem. Overwrites existing files. Requires reading the file first if it exists.",category:"File Operations",parameters:[{name:"file_path",type:"string",required:!0,description:"The absolute path to the file to write"},{name:"content",type:"string",required:!0,description:"The content to write to the file"}],example:`Write({
  file_path: "/path/to/new-file.ts",
  content: "export const hello = 'world';"
})`},{id:"edit",type:"mcp",name:"Edit",path:"Edit",summary:"Edit file with string replacement",description:"Performs exact string replacements in files. Fails if old_string is not unique. Must read the file first before editing.",category:"File Operations",parameters:[{name:"file_path",type:"string",required:!0,description:"The absolute path to the file to modify"},{name:"old_string",type:"string",required:!0,description:"The exact text to replace (must be unique)"},{name:"new_string",type:"string",required:!0,description:"The replacement text"},{name:"replace_all",type:"boolean",required:!1,description:"Replace all occurrences (default: false)"}],example:`Edit({
  file_path: "/path/to/file.ts",
  old_string: "const old = 'value';",
  new_string: "const updated = 'newValue';"
})`},{id:"notebook-edit",type:"mcp",name:"NotebookEdit",path:"NotebookEdit",summary:"Edit Jupyter notebook cells",description:"Replaces, inserts, or deletes cells in Jupyter notebooks (.ipynb files). Supports code and markdown cell types.",category:"File Operations",parameters:[{name:"notebook_path",type:"string",required:!0,description:"Absolute path to the .ipynb file"},{name:"new_source",type:"string",required:!0,description:"The new source content for the cell"},{name:"cell_id",type:"string",required:!1,description:"ID of the cell to edit"},{name:"cell_type",type:"string",required:!1,description:"code | markdown"},{name:"edit_mode",type:"string",required:!1,description:"replace | insert | delete"}],example:`NotebookEdit({
  notebook_path: "/path/to/notebook.ipynb",
  cell_id: "abc123",
  new_source: "import pandas as pd\\ndf = pd.read_csv('data.csv')",
  cell_type: "code"
})`},{id:"glob",type:"mcp",name:"Glob",path:"Glob",summary:"Find files by pattern",description:'Fast file pattern matching tool. Supports glob patterns like "**/*.js" or "src/**/*.ts". Returns matching file paths sorted by modification time.',category:"Search",parameters:[{name:"pattern",type:"string",required:!0,description:'Glob pattern (e.g., "**/*.ts", "src/**/*.{js,jsx}")'},{name:"path",type:"string",required:!1,description:"Directory to search in (default: cwd)"}],example:`// Find all TypeScript files
Glob({ pattern: "**/*.ts" })

// Find in specific directory
Glob({ pattern: "*.scss", path: "/project/src/styles" })

// Multiple extensions
Glob({ pattern: "**/*.{ts,tsx}" })`},{id:"grep",type:"mcp",name:"Grep",path:"Grep",summary:"Search file contents (ripgrep)",description:"Powerful search tool built on ripgrep. Supports regex, file type filtering, context lines, and multiple output modes.",category:"Search",parameters:[{name:"pattern",type:"string",required:!0,description:"Regex pattern to search for"},{name:"path",type:"string",required:!1,description:"File or directory to search"},{name:"output_mode",type:"string",required:!1,description:"content | files_with_matches | count"},{name:"glob",type:"string",required:!1,description:"Filter files by glob pattern"},{name:"type",type:"string",required:!1,description:"File type (js, py, rust, go, etc.)"},{name:"-C",type:"number",required:!1,description:"Context lines before and after match"},{name:"-i",type:"boolean",required:!1,description:"Case insensitive search"},{name:"multiline",type:"boolean",required:!1,description:"Enable multiline matching"}],example:`// Find function definitions
Grep({ pattern: "function\\\\s+\\\\w+", type: "ts" })

// Show content with context
Grep({ pattern: "TODO|FIXME", output_mode: "content", "-C": 2 })

// Case insensitive search
Grep({ pattern: "error", "-i": true, glob: "*.log" })`},{id:"bash",type:"mcp",name:"Bash",path:"Bash",summary:"Execute shell commands",description:"Executes bash commands in a persistent shell session. For git, npm, docker, and other CLI operations. NOT for file reading/writing.",category:"System",parameters:[{name:"command",type:"string",required:!0,description:"The bash command to execute"},{name:"description",type:"string",required:!1,description:"Short description of what command does"},{name:"timeout",type:"number",required:!1,description:"Timeout in ms (max 600000, default 120000)"},{name:"run_in_background",type:"boolean",required:!1,description:"Run command in background"}],example:`// Git operations
Bash({ command: "git status", description: "Check git status" })

// Install dependencies
Bash({ command: "npm install", timeout: 300000 })

// Background process
Bash({ command: "npm run dev", run_in_background: true })`},{id:"kill-shell",type:"mcp",name:"KillShell",path:"KillShell",summary:"Kill background shell",description:"Terminates a running background bash shell by its ID. Use /tasks to find shell IDs.",category:"System",parameters:[{name:"shell_id",type:"string",required:!0,description:"The ID of the background shell to kill"}],example:'KillShell({ shell_id: "abc123" })'},{id:"web-fetch",type:"mcp",name:"WebFetch",path:"WebFetch",summary:"Fetch and analyze web content",description:"Fetches URL content, converts HTML to markdown, and processes it with AI. Includes 15-minute cache. Handles redirects.",category:"Web",parameters:[{name:"url",type:"string",required:!0,description:"The URL to fetch (HTTP upgraded to HTTPS)"},{name:"prompt",type:"string",required:!0,description:"What information to extract from the page"}],example:`WebFetch({
  url: "https://docs.example.com/api",
  prompt: "Extract the authentication methods and API endpoints"
})`},{id:"web-search",type:"mcp",name:"WebSearch",path:"WebSearch",summary:"Search the web",description:"Search the web for up-to-date information. Returns search results with links. Must include Sources section in response.",category:"Web",parameters:[{name:"query",type:"string",required:!0,description:"The search query"},{name:"allowed_domains",type:"string[]",required:!1,description:"Only include results from these domains"},{name:"blocked_domains",type:"string[]",required:!1,description:"Exclude results from these domains"}],example:`// General search
WebSearch({ query: "React 19 new features 2025" })

// Domain-specific
WebSearch({
  query: "typescript generics",
  allowed_domains: ["typescriptlang.org", "github.com"]
})`},{id:"task",type:"mcp",name:"Task",path:"Task",summary:"Launch specialized agents",description:"Launch autonomous agents for complex multi-step tasks. Types: general-purpose, Explore (codebase search), Plan (architecture), claude-code-guide (docs).",category:"Agents",parameters:[{name:"prompt",type:"string",required:!0,description:"The task for the agent to perform"},{name:"subagent_type",type:"string",required:!0,description:"general-purpose | Explore | Plan | claude-code-guide"},{name:"description",type:"string",required:!0,description:"Short description (3-5 words)"},{name:"run_in_background",type:"boolean",required:!1,description:"Run agent in background"},{name:"resume",type:"string",required:!1,description:"Agent ID to resume from previous execution"}],example:`// Explore codebase
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
})`},{id:"task-output",type:"mcp",name:"TaskOutput",path:"TaskOutput",summary:"Get agent/task output",description:"Retrieves output from running or completed background tasks (agents, shells, remote sessions).",category:"Agents",parameters:[{name:"task_id",type:"string",required:!0,description:"The task ID to get output from"},{name:"block",type:"boolean",required:!1,description:"Wait for completion (default: true)"},{name:"timeout",type:"number",required:!1,description:"Max wait time in ms (max 600000)"}],example:`// Wait for task completion
TaskOutput({ task_id: "agent-123" })

// Non-blocking check
TaskOutput({ task_id: "agent-123", block: false })`},{id:"lsp",type:"mcp",name:"LSP",path:"LSP",summary:"Language Server Protocol",description:"Code intelligence via LSP: go to definition, find references, hover info, document symbols, call hierarchy.",category:"Code Intelligence",parameters:[{name:"operation",type:"string",required:!0,description:"goToDefinition | findReferences | hover | documentSymbol | workspaceSymbol | goToImplementation | prepareCallHierarchy | incomingCalls | outgoingCalls"},{name:"filePath",type:"string",required:!0,description:"The file to operate on"},{name:"line",type:"number",required:!0,description:"Line number (1-based)"},{name:"character",type:"number",required:!0,description:"Character offset (1-based)"}],example:`// Go to definition
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
})`},{id:"ask-user",type:"mcp",name:"AskUserQuestion",path:"AskUserQuestion",summary:"Ask user questions",description:"Ask the user questions during execution. For clarifying requirements, getting preferences, or validating assumptions.",category:"User Interaction",parameters:[{name:"questions",type:"Question[]",required:!0,description:"Array of 1-4 questions with options"}],example:`AskUserQuestion({
  questions: [{
    question: "Which auth method should we use?",
    header: "Auth",
    options: [
      { label: "JWT (Recommended)", description: "Stateless tokens" },
      { label: "Session", description: "Server-side sessions" }
    ],
    multiSelect: false
  }]
})`},{id:"todo-write",type:"mcp",name:"TodoWrite",path:"TodoWrite",summary:"Manage task list",description:"Create and manage structured task lists. Track progress with pending/in_progress/completed states. Use for complex multi-step tasks.",category:"Planning",parameters:[{name:"todos",type:"Todo[]",required:!0,description:"Array of todo items with content, status, and activeForm"}],example:`TodoWrite({
  todos: [
    { content: "Setup project", status: "completed", activeForm: "Setting up project" },
    { content: "Implement auth", status: "in_progress", activeForm: "Implementing auth" },
    { content: "Write tests", status: "pending", activeForm: "Writing tests" }
  ]
})`},{id:"enter-plan-mode",type:"mcp",name:"EnterPlanMode",path:"EnterPlanMode",summary:"Start planning mode",description:"Enter plan mode for non-trivial implementations. Explore codebase and design approach before coding. Requires user approval.",category:"Planning",parameters:[]},{id:"exit-plan-mode",type:"mcp",name:"ExitPlanMode",path:"ExitPlanMode",summary:"Exit planning mode",description:"Signal completion of planning phase. Plan should already be written to the plan file.",category:"Planning",parameters:[]}],A=[{id:"skill-pdf",type:"skill",name:"PDF",path:"pdf",summary:"PDF manipulation toolkit",description:"Comprehensive PDF toolkit: extract text/tables with pdfplumber, OCR scanned docs with pytesseract, create PDFs with reportlab, merge/split with pypdf/qpdf, rotate pages, add watermarks, encrypt/decrypt, and fill form fields.",category:"Document Skills",source:"anthropics/skills",requiredMcp:["Read","Write","Bash"],parameters:[{name:"Libraries",type:"Python",required:!0,description:"pypdf, pdfplumber, reportlab, pytesseract, pdf2image, pandas"},{name:"CLI Tools",type:"Bash",required:!1,description:"pdftotext, qpdf, pdftk (poppler-utils)"}],example:`"Extract the table from page 3 of report.pdf and convert to CSV"

"Merge invoice1.pdf and invoice2.pdf, then add a watermark"

"OCR this scanned document and extract all text with layout preservation"

"Fill out the form fields in application.pdf programmatically"`},{id:"skill-docx",type:"skill",name:"DOCX",path:"docx",summary:"Word document manipulation",description:"Comprehensive Word document handling: text extraction via pandoc, raw XML access for comments/formatting/media, document creation with docx-js, tracked changes (redlining) with OOXML, and visualization via LibreOffice PDF conversion.",category:"Document Skills",source:"anthropics/skills",requiredMcp:["Read","Write","Bash"],parameters:[{name:"pandoc",type:"CLI",required:!0,description:"Text extraction with tracked changes"},{name:"docx (npm)",type:"Node.js",required:!0,description:"Document creation"},{name:"LibreOffice",type:"CLI",required:!1,description:"PDF/image conversion"},{name:"defusedxml",type:"Python",required:!1,description:"Secure XML parsing for OOXML"}],example:`"Extract text preserving tracked changes from contract.docx"

"Create a Word document with proper styles from this markdown"

"Implement tracked changes for minimal, precise edits only"

"Convert the DOCX to images for visual review"`},{id:"skill-xlsx",type:"skill",name:"XLSX",path:"xlsx",summary:"Excel spreadsheet operations",description:"Comprehensive spreadsheet operations: create/edit with formulas using openpyxl, data analysis with pandas, formula recalculation via LibreOffice recalc.py, financial model standards with color coding (blue=inputs, black=formulas).",category:"Document Skills",source:"anthropics/skills",requiredMcp:["Read","Write","Bash"],parameters:[{name:"pandas",type:"Python",required:!0,description:"Data analysis and manipulation"},{name:"openpyxl",type:"Python",required:!0,description:"Complex formatting and formulas"},{name:"recalc.py",type:"Script",required:!0,description:"LibreOffice formula recalculation"},{name:"Zero formula errors",type:"Validation",required:!0,description:"No #REF!, #DIV/0!, #VALUE!, #N/A, #NAME?"}],example:`"Create a financial model with dynamic formulas (never hardcode values)"

"Analyze Q4 sales data and create pivot summary"

"Validate all formulas and fix any #REF! errors"

"Apply financial formatting: blue for inputs, black for calculations"`},{id:"skill-pptx",type:"skill",name:"PPTX",path:"pptx",summary:"PowerPoint presentations",description:"Full PowerPoint support: create from HTML via html2pptx, edit via OOXML manipulation, use templates with inventory.py, thumbnail generation, slide rearrangement. Supports web-safe fonts only, two-column layouts preferred, validate with thumbnails.",category:"Document Skills",source:"anthropics/skills",requiredMcp:["Read","Write","Bash"],parameters:[{name:"html2pptx",type:"Script",required:!0,description:"Convert HTML slides to PPTX"},{name:"ooxml scripts",type:"Python",required:!0,description:"unpack.py, pack.py, validate.py"},{name:"inventory.py",type:"Script",required:!1,description:"Template text inventory"},{name:"thumbnail.py",type:"Script",required:!0,description:"Generate slide grids for validation"},{name:"Sharp",type:"Node.js",required:!1,description:"Rasterize gradients/icons to PNG"}],example:`"Create presentation from HTML (720pt \xD7 405pt slides for 16:9)"

"Edit existing deck: unpack \u2192 modify XML \u2192 validate \u2192 pack"

"Use template: extract inventory, rearrange slides, replace text"

"Generate thumbnail grid to check for layout issues"`},{id:"skill-algorithmic-art",type:"skill",name:"Algorithmic Art",path:"algorithmic-art",summary:"Generative art with p5.js",description:"Create generative and algorithmic art using p5.js. Supports seeded randomness for reproducibility, particle systems, fractals, Perlin noise, and creative coding patterns. Outputs as HTML with embedded canvas.",category:"Design & Creative",source:"anthropics/skills",requiredMcp:["Write"],example:`"Create a generative particle system with seeded randomness"

"Build a fractal tree animation with adjustable branching angle"

"Generate abstract art using layered Perlin noise fields"

"Create an interactive piece responding to mouse movement"`},{id:"skill-canvas-design",type:"skill",name:"Canvas Design",path:"canvas-design",summary:"Visual art creation (PNG/PDF)",description:"Two-step design process: 1) Create a design philosophy/aesthetic movement (4-6 paragraphs), 2) Express it visually. 90% visual, 10% text. Museum/magazine quality with expert craftsmanship. Subtle conceptual references, not literal.",category:"Design & Creative",source:"anthropics/skills",requiredMcp:["Write","Read"],parameters:[{name:"Design Philosophy",type:"Markdown",required:!0,description:"Name movement, articulate visual essence"},{name:"Canvas Expression",type:"PDF/PNG",required:!0,description:"Visual output with minimal text"},{name:"canvas-fonts",type:"Directory",required:!1,description:"Available fonts for typography"}],example:`"Create poster with 'Brutalist Joy' aesthetic movement"

"Design infographic following 'Chromatic Language' philosophy"

"Make museum-quality visual: dense patterns, limited palette, thin fonts"

"Refine existing composition - make it more pristine, not busier"`},{id:"skill-slack-gif",type:"skill",name:"Slack GIF Creator",path:"slack-gif-creator",summary:"Animated GIFs for Slack",description:"Create Slack-optimized GIFs using GIFBuilder, validators, and easing functions. Emoji: 128x128, 10-30fps, 48-128 colors, <3s. Message: 480x480. PIL for drawing, built-in animations: shake, pulse, bounce, spin, fade, zoom, particles.",category:"Design & Creative",source:"anthropics/skills",requiredMcp:["Write","Bash"],parameters:[{name:"GIFBuilder",type:"Python class",required:!0,description:"Assemble and optimize GIFs"},{name:"validators",type:"Python module",required:!0,description:"validate_gif(), is_slack_ready()"},{name:"easing",type:"Python module",required:!0,description:"interpolate() with 7 easing types"},{name:"pillow/imageio",type:"Python",required:!0,description:"pip install pillow imageio numpy"}],example:`"Create 128x128 emoji GIF with bounce animation"

"Make celebration GIF: optimize_for_emoji=True, num_colors=48"

"Build particle burst animation with elastic_out easing"

"Validate GIF is Slack-ready before uploading"`},{id:"skill-theme-factory",type:"skill",name:"Theme Factory",path:"theme-factory",summary:"Professional theme styling",description:"Apply 10 curated themes to artifacts (slides, docs, HTML). Themes include: Ocean Depths, Sunset Boulevard, Forest Canopy, Modern Minimalist, Golden Hour, Arctic Frost, Desert Rose, Tech Innovation, Botanical Garden, Midnight Galaxy.",category:"Design & Creative",source:"anthropics/skills",requiredMcp:["Read","Write"],parameters:[{name:"theme-showcase.pdf",type:"PDF",required:!0,description:"Visual preview of all 10 themes"},{name:"themes/",type:"Directory",required:!0,description:"Theme files with colors and fonts"}],example:`"Show theme-showcase.pdf for user to select visually"

"Apply 'Tech Innovation' theme to the presentation"

"Generate custom theme based on user brand description"

"Style landing page with 'Midnight Galaxy' color palette"`},{id:"skill-frontend-design",type:"skill",name:"Frontend Design",path:"frontend-design",summary:"Production-grade bold UI",description:'Create distinctive, production-grade frontends avoiding "AI aesthetics". Process: Purpose \u2192 Tone (pick extreme: brutalist, maximalist, retro-futuristic, etc.) \u2192 Constraints \u2192 Differentiation. Avoid: Inter/Roboto, purple gradients, predictable layouts.',category:"Development",source:"anthropics/skills",requiredMcp:["Write","Read","Glob"],parameters:[{name:"Typography",type:"Guideline",required:!0,description:"Distinctive fonts, not Arial/Inter/Roboto"},{name:"Motion",type:"Guideline",required:!1,description:"CSS animations, orchestrated reveals"},{name:"Backgrounds",type:"Guideline",required:!1,description:"Gradient meshes, noise, geometric patterns"}],example:`"Create landing page with 'Brutalist/raw' aesthetic"

"Design dashboard avoiding generic AI patterns"

"Build UI with asymmetric layout and grid-breaking elements"

"Add dramatic shadows, custom cursors, grain overlays"`},{id:"skill-web-artifacts",type:"skill",name:"Web Artifacts Builder",path:"web-artifacts-builder",summary:"React + Tailwind + shadcn/ui",description:'Build elaborate multi-component artifacts: React 18 + TypeScript + Vite + Parcel bundling + Tailwind CSS + 40+ shadcn/ui components. Init \u2192 Edit \u2192 Bundle to single bundle.html. Avoid "AI slop" (centered layouts, purple gradients, rounded corners).',category:"Development",source:"anthropics/skills",requiredMcp:["Write","Bash"],parameters:[{name:"init-artifact.sh",type:"Script",required:!0,description:"Initialize React project with all deps"},{name:"bundle-artifact.sh",type:"Script",required:!0,description:"Parcel bundle to single HTML"},{name:"Node 18+",type:"Runtime",required:!0,description:"Required for Vite version pinning"}],example:`"bash scripts/init-artifact.sh my-dashboard"

"Build artifact using shadcn/ui components from ui.shadcn.com/docs"

"bash scripts/bundle-artifact.sh \u2192 outputs bundle.html"

"Share bundle.html as Claude artifact"`},{id:"skill-mcp-builder",type:"skill",name:"MCP Builder",path:"mcp-builder",summary:"Create MCP servers",description:"Guide for building Model Context Protocol (MCP) servers to extend Claude with external tools. Research API \u2192 Implement server \u2192 Test with Bash \u2192 Package. Integrates databases, APIs, and services.",category:"Development",source:"anthropics/skills",requiredMcp:["Write","Read","Bash","Glob","WebSearch"],example:`"Create MCP server for PostgreSQL database queries"

"Build Jira integration MCP with issue creation/updates"

"Make MCP server for internal REST API"

"Test MCP server locally before configuring in Claude"`},{id:"skill-webapp-testing",type:"skill",name:"WebApp Testing",path:"webapp-testing",summary:"Playwright E2E testing",description:"Test local web applications using Playwright MCP. E2E testing, visual regression, accessibility testing. Requires Playwright MCP server configured. Capture screenshots, interact with pages, validate flows.",category:"Development",source:"anthropics/skills",requiredMcp:["Read","Write","Bash","mcp__playwright"],parameters:[{name:"Playwright MCP",type:"MCP Server",required:!0,description:"Browser automation capability"}],example:`"Test login flow with invalid credentials handling"

"Capture screenshots at each checkout step"

"Run accessibility audit on all form components"

"Visual regression test comparing to baseline screenshots"`},{id:"skill-brand-guidelines",type:"skill",name:"Brand Guidelines",path:"brand-guidelines",summary:"Apply Anthropic brand styling",description:"Apply official brand identity: Colors (Dark #141413, Light #faf9f5, Orange #d97757, Blue #6a9bcc, Green #788c5d), Typography (Headings: Poppins, Body: Lora). Smart font application to 24pt+ headings, automatic fallbacks.",category:"Communication",source:"anthropics/skills",requiredMcp:["Read","Write"],parameters:[{name:"Main Colors",type:"Hex",required:!0,description:"#141413 (dark), #faf9f5 (light), #b0aea5 (mid gray)"},{name:"Accents",type:"Hex",required:!0,description:"#d97757 (orange), #6a9bcc (blue), #788c5d (green)"},{name:"Fonts",type:"Typography",required:!0,description:"Poppins (headings), Lora (body)"}],example:`"Apply Anthropic brand colors to this presentation"

"Style document with Poppins headings and Lora body text"

"Use accent colors for shapes: orange, blue, green cycling"

"Ensure text colors have proper contrast on backgrounds"`},{id:"skill-internal-comms",type:"skill",name:"Internal Comms",path:"internal-comms",summary:"Status reports & newsletters",description:"Write internal communications with company formats: 3P updates (Progress/Plans/Problems), company newsletters, FAQ responses, status reports, leadership updates, incident reports. Load guideline files from examples/ directory.",category:"Communication",source:"anthropics/skills",requiredMcp:["Read","Write"],parameters:[{name:"3p-updates.md",type:"Template",required:!1,description:"Progress/Plans/Problems format"},{name:"company-newsletter.md",type:"Template",required:!1,description:"Newsletter format"},{name:"faq-answers.md",type:"Template",required:!1,description:"FAQ response format"},{name:"general-comms.md",type:"Template",required:!1,description:"Fallback template"}],example:`"Write 3P update following examples/3p-updates.md format"

"Create company newsletter for product launch"

"Draft FAQ responses for the new benefits policy"

"Write incident report following company template"`},{id:"skill-doc-coauthoring",type:"skill",name:"Doc Co-authoring",path:"doc-coauthoring",summary:"Three-stage collaborative writing",description:"Structured 3-stage workflow: 1) Context Gathering (meta-questions, info dumping), 2) Refinement (clarify\u2192brainstorm\u2192curate\u2192draft\u2192iterate per section), 3) Reader Testing (sub-agent tests with fresh context). For PRDs, specs, proposals, RFCs.",category:"Communication",source:"anthropics/skills",requiredMcp:["Read","Write","Edit","Task","AskUserQuestion"],parameters:[{name:"Stage 1",type:"Workflow",required:!0,description:"Context gathering: doc type, audience, impact, constraints"},{name:"Stage 2",type:"Workflow",required:!0,description:"Section-by-section: clarify \u2192 brainstorm \u2192 curate \u2192 draft"},{name:"Stage 3",type:"Workflow",required:!0,description:"Reader testing with fresh sub-agent"}],example:`"Co-author this PRD using the three-stage workflow"

"Stage 2: Let's brainstorm options for the Requirements section"

"Use str_replace for surgical edits, never reprint whole doc"

"Stage 3: Test document with sub-agent asking reader questions"`},{id:"skill-creator",type:"skill",name:"Skill Creator",path:"skill-creator",summary:"Build custom skills",description:"Create effective skills: SKILL.md (frontmatter + instructions), bundled resources (scripts/, references/, assets/). Progressive disclosure: metadata (100 words) \u2192 SKILL.md (<5k words) \u2192 resources (as-needed). Init \u2192 Edit \u2192 Package \u2192 Iterate.",category:"Skill Creation",source:"anthropics/skills",requiredMcp:["Write","Read","Bash","AskUserQuestion"],parameters:[{name:"init_skill.py",type:"Script",required:!0,description:"Create skeleton skill directory"},{name:"package_skill.py",type:"Script",required:!0,description:"Validate and package to .skill file"},{name:"SKILL.md",type:"Markdown",required:!0,description:"YAML frontmatter + instructions (<500 lines)"}],example:`"scripts/init_skill.py my-skill --path ./skills/"

"Create scripts/ for reusable, deterministic code"

"Add references/ for documentation loaded as-needed"

"scripts/package_skill.py ./skills/my-skill \u2192 my-skill.skill"`}],F=[{id:"agent-frontend-dev",type:"skill",name:"Frontend Developer",path:"frontend-developer",summary:"UI/UX implementation specialist",description:"Specialized agent for building user-facing code and interfaces. React, Vue, Svelte expertise. Focuses on component architecture, state management, and responsive design.",category:"Engineering Agents",source:"community/diego",requiredMcp:["Read","Write","Edit","Glob","Grep","Bash"]},{id:"agent-backend-arch",type:"skill",name:"Backend Architect",path:"backend-architect",summary:"Server-side & system design",description:"Handles server-side logic, API design, and system infrastructure. Database modeling, microservices, and scalability patterns.",category:"Engineering Agents",source:"community/diego",requiredMcp:["Read","Write","Edit","Bash","Grep"]},{id:"agent-mobile-builder",type:"skill",name:"Mobile App Builder",path:"mobile-app-builder",summary:"iOS/Android development",description:"Specialized in iOS/Android application development. Swift, Kotlin, React Native, Flutter. App Store optimization and mobile-specific UX.",category:"Engineering Agents",source:"community/diego",requiredMcp:["Read","Write","Edit","Bash"]},{id:"agent-ai-engineer",type:"skill",name:"AI Engineer",path:"ai-engineer",summary:"ML models & AI integration",description:"Manages machine learning models and AI integration. Prompt engineering, model fine-tuning, RAG pipelines, and AI workflow automation.",category:"Engineering Agents",source:"community/diego",requiredMcp:["Read","Write","Bash","WebSearch","WebFetch"]},{id:"agent-devops",type:"skill",name:"DevOps Automator",path:"devops-automator",summary:"CI/CD & infrastructure",description:"Focuses on deployment pipelines, workflow automation, Docker, Kubernetes, and infrastructure as code.",category:"Engineering Agents",source:"community/diego",requiredMcp:["Bash","Read","Write","Edit"]},{id:"agent-prototyper",type:"skill",name:"Rapid Prototyper",path:"rapid-prototyper",summary:"Quick MVPs & POCs",description:"Designed for building quick MVPs and proof-of-concepts. Fast iteration, minimal viable features, rapid validation.",category:"Engineering Agents",source:"community/diego",requiredMcp:["Write","Bash","Read"]},{id:"agent-trend-research",type:"skill",name:"Trend Researcher",path:"trend-researcher",summary:"Market & industry analysis",description:"Analyzes market shifts and industry movements. Competitive intelligence, emerging technology tracking, and opportunity identification.",category:"Product Agents",source:"community/diego",requiredMcp:["WebSearch","WebFetch","Read","Write"]},{id:"agent-feedback-synth",type:"skill",name:"Feedback Synthesizer",path:"feedback-synthesizer",summary:"User data interpretation",description:"Aggregates and interprets user reviews, feedback data, and behavioral metrics. Sentiment analysis and actionable insights.",category:"Product Agents",source:"community/diego",requiredMcp:["Read","Write","Grep"]},{id:"agent-sprint-prior",type:"skill",name:"Sprint Prioritizer",path:"sprint-prioritizer",summary:"Roadmap & task management",description:"Manages the product roadmap and task urgency. Sprint planning, backlog grooming, and priority frameworks.",category:"Product Agents",source:"community/diego",requiredMcp:["Read","Write","TodoWrite"]},{id:"agent-tiktok",type:"skill",name:"TikTok Strategist",path:"tiktok-strategist",summary:"Short-form video strategy",description:"Short-form video strategy and trends. Viral hooks, trend analysis, and content calendar for TikTok.",category:"Marketing Agents",source:"community/diego",requiredMcp:["WebSearch","Write","Read"]},{id:"agent-instagram",type:"skill",name:"Instagram Curator",path:"instagram-curator",summary:"Visual branding & aesthetics",description:"Visual branding and aesthetic feed management. Grid planning, story strategy, and engagement optimization.",category:"Marketing Agents",source:"community/diego",requiredMcp:["Write","Read","WebSearch"]},{id:"agent-twitter",type:"skill",name:"Twitter Engager",path:"twitter-engager",summary:"Real-time community & threads",description:"Focuses on real-time community interaction and threads. Trend hijacking, engagement tactics, and viral tweet patterns.",category:"Marketing Agents",source:"community/diego",requiredMcp:["Write","WebSearch","Read"]},{id:"agent-reddit",type:"skill",name:"Reddit Community Builder",path:"reddit-community-builder",summary:"Subreddit & organic growth",description:"Navigates niche subreddits and organic growth. Community rules awareness, authentic engagement, and karma building.",category:"Marketing Agents",source:"community/diego",requiredMcp:["WebSearch","WebFetch","Write"]},{id:"agent-aso",type:"skill",name:"App Store Optimizer",path:"app-store-optimizer",summary:"ASO & marketplace visibility",description:"Focuses on ASO and visibility in app marketplaces. Keyword optimization, screenshot design, and review management.",category:"Marketing Agents",source:"community/diego",requiredMcp:["WebSearch","Write","Read"]},{id:"agent-content",type:"skill",name:"Content Creator",path:"content-creator",summary:"Copywriting & asset production",description:"General copywriting and asset production. Blog posts, landing pages, email campaigns, and marketing collateral.",category:"Marketing Agents",source:"community/diego",requiredMcp:["Write","Read","WebSearch"]},{id:"agent-growth",type:"skill",name:"Growth Hacker",path:"growth-hacker",summary:"Viral loops & user acquisition",description:"Specialized in viral loops and rapid user acquisition. A/B testing frameworks, referral programs, and growth experiments.",category:"Marketing Agents",source:"community/diego",requiredMcp:["WebSearch","Write","Read","Bash"]},{id:"agent-ui-designer",type:"skill",name:"UI Designer",path:"ui-designer",summary:"Visual interface & layout",description:"Focuses on the visual interface and layout. Component libraries, design systems, and pixel-perfect implementation.",category:"Design Agents",source:"community/diego",requiredMcp:["Write","Read","Glob"]},{id:"agent-ux-researcher",type:"skill",name:"UX Researcher",path:"ux-researcher",summary:"User journeys & pain points",description:"Analyzes user journeys and pain points. Usability testing, heuristic evaluation, and user interview synthesis.",category:"Design Agents",source:"community/diego",requiredMcp:["Read","Write","WebSearch"]},{id:"agent-brand-guardian",type:"skill",name:"Brand Guardian",path:"brand-guardian",summary:"Voice, colors & consistency",description:"Ensures consistency in voice, colors, and logos. Brand guidelines enforcement and style guide maintenance.",category:"Design Agents",source:"community/diego",requiredMcp:["Read","Write","Glob"]},{id:"agent-visual-story",type:"skill",name:"Visual Storyteller",path:"visual-storyteller",summary:"Narrative-driven graphics",description:"Creates narrative-driven graphic content. Infographics, presentations, and visual communication.",category:"Design Agents",source:"community/diego",requiredMcp:["Write","Read"]},{id:"agent-whimsy",type:"skill",name:"Whimsy Injector",path:"whimsy-injector",summary:"Delight & easter eggs",description:'Adds personality, easter eggs, and "delight" features to the product. Micro-interactions, loading states, and surprise moments.',category:"Design Agents",source:"community/diego",requiredMcp:["Write","Read","Edit"]},{id:"agent-experiment",type:"skill",name:"Experiment Tracker",path:"experiment-tracker",summary:"A/B tests & data trials",description:"Monitors A/B tests and data-driven trials. Experiment design, statistical significance, and result documentation.",category:"Project Management Agents",source:"community/diego",requiredMcp:["Read","Write","Grep"]},{id:"agent-shipper",type:"skill",name:"Project Shipper",path:"project-shipper",summary:"Deadlines & delivery",description:"Focused on meeting deadlines and final delivery. Release checklists, blocker resolution, and launch coordination.",category:"Project Management Agents",source:"community/diego",requiredMcp:["Read","Write","TodoWrite","Bash"]},{id:"agent-producer",type:"skill",name:"Studio Producer",path:"studio-producer",summary:"Multi-disciplinary coordination",description:"High-level coordination of multi-disciplinary creative tasks. Resource allocation, timeline management, and stakeholder communication.",category:"Project Management Agents",source:"community/diego",requiredMcp:["Read","Write","TodoWrite","Task"]}],Q=[...C,...A,...F];function ie(){X.classList.toggle("is-open"),S.classList.toggle("is-visible")}function R(){X.classList.remove("is-open"),S.classList.remove("is-visible")}function re(t){t.classList.toggle("is-open")}function ae(){return Q.filter(t=>{let s=G==="all"||t.type===G,a=v===""||t.name.toLowerCase().includes(v)||t.summary.toLowerCase().includes(v)||t.path.toLowerCase().includes(v)||t.category.toLowerCase().includes(v)||t.description&&t.description.toLowerCase().includes(v);return s&&a})}function se(t){let s=t.parameters&&t.parameters.length>0?`
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
        ${t.parameters.map(n=>`
          <tr>
            <td class="params-table__name">${n.name}</td>
            <td class="params-table__type">${n.type}</td>
            <td class="params-table__required">${n.required?"Yes":"No"}</td>
            <td>${n.description}</td>
          </tr>
        `).join("")}
      </tbody>
    </table>
  `:"",a=t.requiredMcp&&t.requiredMcp.length>0?`
    <h4 class="endpoint__section-title">Required MCP Tools</h4>
    <div class="tags">
      ${t.requiredMcp.map(n=>`<span class="badge badge--mcp">${n}</span>`).join("")}
    </div>
  `:"",d=t.source?`
    <div class="mt-md text-xs text-muted">
      Source: <a href="https://github.com/${t.source}" target="_blank">${t.source}</a>
    </div>
  `:"",i=t.example?`
    <h4 class="endpoint__section-title">Example</h4>
    <div class="code-block">
      <div class="code-block__header">
        <span class="code-block__lang">${t.type==="mcp"?"typescript":"prompt"}</span>
        <button class="code-block__copy" data-code="${encodeURIComponent(t.example)}">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <rect x="9" y="9" width="13" height="13" rx="2" ry="2"/>
            <path d="M5 15H4a2 2 0 01-2-2V4a2 2 0 012-2h9a2 2 0 012 2v1"/>
          </svg>
          Copy
        </button>
      </div>
      <div class="code-block__content">
        <code>${ce(t.example)}</code>
      </div>
    </div>
  `:"";return`
    <article class="endpoint endpoint--${t.type}" id="${t.id}" data-category="${t.category}">
      <div class="endpoint__header" onclick="toggleEndpoint(this.parentElement)">
        <span class="endpoint__method">${t.type.toUpperCase()}</span>
        <span class="endpoint__path">${t.path}</span>
        <span class="endpoint__summary">${t.summary}</span>
        <span class="endpoint__toggle">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <polyline points="6 9 12 15 18 9"/>
          </svg>
        </span>
      </div>
      <div class="endpoint__body">
        <p class="endpoint__description">${t.description}</p>
        ${a}
        ${s}
        ${i}
        ${d}
      </div>
    </article>
  `}function W(){let t=ae(),s=oe(t),a="";for(let[d,i]of Object.entries(s)){let n=i[0].type==="mcp"?"tools":"skills";a+=`
      <section class="section" id="section-${_(d)}">
        <div class="section__title">
          <h2>${d}</h2>
          <span class="badge badge--${i[0].type}">${i.length} ${n}</span>
        </div>
        ${i.map(se).join("")}
      </section>
    `}t.length===0&&(a=`
      <div class="text-center text-muted mt-lg">
        <p>No results found for "${v}"</p>
      </div>
    `),te.innerHTML=a,le()}function ne(){let t=[...new Set(C.map(i=>i.category))],s=[...new Set(A.map(i=>i.category))],a=[...new Set(F.map(i=>i.category))],d=`
    <div class="sidebar__section">
      <div class="sidebar__section-title">
        <span class="sidebar__icon sidebar__icon--skill">S</span>
        Official Skills
      </div>
      <div class="sidebar__subtitle">Anthropic</div>
      ${s.map(i=>`
        <a href="#section-${_(i)}" class="sidebar__link sidebar__link--skill">${i}</a>
      `).join("")}
    </div>
    <div class="sidebar__section">
      <div class="sidebar__section-title">
        <span class="sidebar__icon sidebar__icon--community">C</span>
        Community Skills
      </div>
      <div class="sidebar__subtitle">Custom Agents</div>
      ${a.map(i=>`
        <a href="#section-${_(i)}" class="sidebar__link sidebar__link--community">${i}</a>
      `).join("")}
    </div>
    <div class="sidebar__section">
      <div class="sidebar__section-title">
        <span class="sidebar__icon sidebar__icon--mcp">T</span>
        MCP Tools
      </div>
      <div class="sidebar__subtitle">Built-in Capabilities</div>
      ${t.map(i=>`
        <a href="#section-${_(i)}" class="sidebar__link sidebar__link--mcp">${i}</a>
      `).join("")}
    </div>
  `;E.innerHTML=d}function oe(t){return t.reduce((s,a)=>(s[a.category]||(s[a.category]=[]),s[a.category].push(a),s),{})}function _(t){return t.toLowerCase().replace(/\s+/g,"-").replace(/[^\w-]/g,"")}function ce(t){return t.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/\n/g,"<br>")}function le(){document.querySelectorAll(".code-block__copy").forEach(t=>{t.addEventListener("click",s=>V(null,null,function*(){s.stopPropagation();let a=decodeURIComponent(t.dataset.code||"");yield navigator.clipboard.writeText(a),t.classList.add("is-copied"),t.textContent="Copied!",setTimeout(()=>{t.classList.remove("is-copied"),t.innerHTML=`
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <rect x="9" y="9" width="13" height="13" rx="2" ry="2"/>
            <path d="M5 15H4a2 2 0 01-2-2V4a2 2 0 012-2h9a2 2 0 012 2v1"/>
          </svg>
          Copy
        `},2e3)}))})}window.toggleEndpoint=re;var U=document.getElementById("list-view"),D=document.getElementById("graph-view"),u=document.getElementById("graph-svg"),q=document.getElementById("graph-tooltip"),K=document.querySelectorAll(".view-tab"),z=document.getElementById("filters-container"),Y="list";function de(t){Y=t,K.forEach(s=>{s.classList.toggle("is-active",s.dataset.view===t)}),t==="list"?(U.classList.remove("hidden"),D.classList.add("hidden"),z.style.display="flex"):(U.classList.add("hidden"),D.classList.remove("hidden"),z.style.display="none",J())}var p={x:0,y:0,k:1};function J(){let t=u.clientWidth||900,s=u.clientHeight||600,a=t/2,d=s/2,i=C.map((e,r)=>{let c=r/C.length*Math.PI*2,o=120;return{id:e.id,name:e.name,type:"mcp",x:a+Math.cos(c)*o,y:d+Math.sin(c)*o,connections:[],vx:0,vy:0,fx:null,fy:null}}),n=[...A,...F],w=n.map((e,r)=>{let c=r/n.length*Math.PI*2+Math.PI/4,o=280+Math.random()*80;return{id:e.id,name:e.name,type:"skill",x:a+Math.cos(c)*o,y:d+Math.sin(c)*o,connections:e.requiredMcp||[],vx:0,vy:0,fx:null,fy:null,isOfficial:A.includes(e)}}),y=[...i,...w],g=[];w.forEach(e=>{e.connections.forEach(r=>{let c=i.find(o=>o.name===r||o.name.toLowerCase()===r.toLowerCase());c&&g.push({from:e,to:c,strength:.3})})}),u.innerHTML="";let f=document.createElementNS("http://www.w3.org/2000/svg","g");f.setAttribute("class","graph-container-inner"),u.appendChild(f);let I=document.createElementNS("http://www.w3.org/2000/svg","defs");I.innerHTML=`
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
  `,u.appendChild(I);let L=document.createElementNS("http://www.w3.org/2000/svg","g");L.setAttribute("class","graph-edges"),f.appendChild(L);let B=[];g.forEach(e=>{let r=document.createElementNS("http://www.w3.org/2000/svg","path");r.setAttribute("class","graph-edge"),r.setAttribute("data-from",e.from.id),r.setAttribute("data-to",e.to.id),r.setAttribute("fill","none"),r.setAttribute("stroke","rgba(148, 163, 184, 0.15)"),r.setAttribute("stroke-width","1"),L.appendChild(r),B.push(r)});let P=document.createElementNS("http://www.w3.org/2000/svg","g");P.setAttribute("class","graph-nodes"),f.appendChild(P);let $=new Map;y.forEach(e=>{let r=document.createElementNS("http://www.w3.org/2000/svg","g"),c=e.isOfficial!==!1,o=e.type==="mcp"?"graph-node--mcp":c?"graph-node--skill":"graph-node--community";r.setAttribute("class",`graph-node ${o}`),r.setAttribute("data-id",e.id),r.style.cursor="pointer";let l=document.createElementNS("http://www.w3.org/2000/svg","circle"),m=e.type==="mcp"?24:18;l.setAttribute("r",String(m)),l.setAttribute("cx","0"),l.setAttribute("cy","0"),e.type==="mcp"?l.setAttribute("fill","url(#mcp-gradient)"):c?l.setAttribute("fill","url(#skill-gradient)"):l.setAttribute("fill","url(#community-gradient)"),l.setAttribute("filter","url(#glow)");let h=document.createElementNS("http://www.w3.org/2000/svg","text");h.setAttribute("y",String(m+14)),h.setAttribute("text-anchor","middle"),h.setAttribute("fill","#e2e8f0"),h.setAttribute("font-size","10"),h.setAttribute("font-weight","500"),h.textContent=e.name.length>12?e.name.substring(0,11)+"\u2026":e.name,r.appendChild(l),r.appendChild(h),r.addEventListener("mouseenter",b=>pe(b,e)),r.addEventListener("mouseleave",me),r.addEventListener("click",()=>ue(e,g));let x=!1;r.addEventListener("mousedown",b=>{x=!0,e.fx=e.x,e.fy=e.y,b.stopPropagation()}),P.appendChild(r),$.set(e.id,r)}),u.addEventListener("mousemove",e=>{let r=u.getBoundingClientRect(),c=(e.clientX-r.left-p.x)/p.k,o=(e.clientY-r.top-p.y)/p.k;y.forEach(l=>{l.fx!==null&&(l.x=c,l.y=o,l.fx=c,l.fy=o)})}),u.addEventListener("mouseup",()=>{y.forEach(e=>{e.fx=null,e.fy=null})});let M=!1,H=0,N=0;u.addEventListener("wheel",e=>{e.preventDefault();let r=e.deltaY>0?.9:1.1;p.k=Math.max(.3,Math.min(3,p.k*r)),f.setAttribute("transform",`translate(${p.x}, ${p.y}) scale(${p.k})`)}),u.addEventListener("mousedown",e=>{(e.target===u||e.target.classList.contains("graph-container-inner"))&&(M=!0,H=e.clientX-p.x,N=e.clientY-p.y)}),u.addEventListener("mousemove",e=>{M&&(p.x=e.clientX-H,p.y=e.clientY-N,f.setAttribute("transform",`translate(${p.x}, ${p.y}) scale(${p.k})`))}),u.addEventListener("mouseup",()=>{M=!1}),u.addEventListener("mouseleave",()=>{M=!1});function O(){y.forEach(e=>{if(e.fx!==null)return;let r=a-e.x,c=d-e.y;e.x+=r*.001,e.y+=c*.001,y.forEach(o=>{if(e===o)return;let l=e.x-o.x,m=e.y-o.y,h=Math.sqrt(l*l+m*m)||1,x=e.type==="mcp"?80:60;if(h<x){let b=(x-h)/h*.5;e.x+=l*b,e.y+=m*b}})}),g.forEach(e=>{let r=e.to.x-e.from.x,c=e.to.y-e.from.y,o=Math.sqrt(r*r+c*c)||1,m=(o-180)/o*.02;e.from.fx===null&&(e.from.x+=r*m,e.from.y+=c*m),e.to.fx===null&&(e.to.x-=r*m*.2,e.to.y-=c*m*.2)}),y.forEach(e=>{let r=$.get(e.id);r&&r.setAttribute("transform",`translate(${e.x}, ${e.y})`)}),g.forEach((e,r)=>{let c=B[r],o=e.to.x-e.from.x,l=e.to.y-e.from.y,m=Math.sqrt(o*o+l*l),h=(e.from.x+e.to.x)/2,x=(e.from.y+e.to.y)/2,b=Math.min(30,m*.1),Z=-l/m*b,ee=o/m*b;c.setAttribute("d",`M ${e.from.x} ${e.from.y} Q ${h+Z} ${x+ee} ${e.to.x} ${e.to.y}`)}),requestAnimationFrame(O)}O()}function pe(t,s){let a=Q.find(y=>y.id===s.id);if(!a)return;let d=`<div class="graph-tooltip__type">${s.type.toUpperCase()}</div>`;d+=`<div class="graph-tooltip__title">${a.name}</div>`,d+=`<div>${a.summary}</div>`,a.requiredMcp&&a.requiredMcp.length>0&&(d+=`<div class="graph-tooltip__deps">Requires: ${a.requiredMcp.join(", ")}</div>`),q.innerHTML=d,q.classList.add("is-visible");let i=D.getBoundingClientRect(),n=t.clientX-i.left+10,w=t.clientY-i.top+10;q.style.left=`${n}px`,q.style.top=`${w}px`}function me(){q.classList.remove("is-visible")}function ue(t,s){document.querySelectorAll(".graph-node").forEach(i=>{i.classList.remove("is-highlighted","is-dimmed")}),document.querySelectorAll(".graph-edge").forEach(i=>{i.classList.remove("is-highlighted"),i.style.stroke="rgba(148, 163, 184, 0.15)",i.style.strokeWidth="1"});let a=new Set;a.add(t.id),s.forEach(i=>{i.from.id===t.id?a.add(i.to.id):i.to.id===t.id&&a.add(i.from.id)});let d=document.querySelector(`[data-id="${t.id}"]`);d==null||d.classList.add("is-highlighted"),document.querySelectorAll(".graph-node").forEach(i=>{let n=i.getAttribute("data-id");n&&!a.has(n)?i.classList.add("is-dimmed"):n&&n!==t.id&&i.classList.add("is-highlighted")}),s.forEach(i=>{if(i.from.id===t.id||i.to.id===t.id){let n=document.querySelector(`[data-from="${i.from.id}"][data-to="${i.to.id}"]`);n&&(n.classList.add("is-highlighted"),n.style.stroke=t.type==="mcp"?"#22d3ee":"#a855f7",n.style.strokeWidth="2")}})}document.addEventListener("DOMContentLoaded",()=>{ne(),W(),T==null||T.addEventListener("click",ie),S==null||S.addEventListener("click",R),k==null||k.addEventListener("input",t=>{v=t.target.value.toLowerCase(),W()}),document.addEventListener("keydown",t=>{(t.metaKey||t.ctrlKey)&&t.key==="k"&&(t.preventDefault(),k==null||k.focus()),t.key==="Escape"&&(R(),k==null||k.blur())}),j.forEach(t=>{t.addEventListener("click",()=>{j.forEach(s=>s.classList.remove("is-active")),t.classList.add("is-active"),G=t.dataset.filter,W()})}),K.forEach(t=>{t.addEventListener("click",()=>{de(t.dataset.view)})}),E==null||E.addEventListener("click",t=>{t.target.closest(".sidebar__link")&&R()}),window.addEventListener("resize",()=>{Y==="graph"&&J()})});})();
