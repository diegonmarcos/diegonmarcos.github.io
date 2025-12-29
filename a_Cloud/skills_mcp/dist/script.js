(()=>{var P=(e,a,t)=>new Promise((s,r)=>{var o=l=>{try{c(t.next(l))}catch(i){r(i)}},d=l=>{try{c(t.throw(l))}catch(i){r(i)}},c=l=>l.done?s(l.value):Promise.resolve(l.value).then(o,d);c((t=t.apply(e,a)).next())});var A=document.querySelector(".sidebar"),q=document.querySelector(".sidebar-toggle"),f=document.querySelector(".sidebar-overlay"),m=document.querySelector(".search__input"),E=document.querySelectorAll(".filter-btn"),I=document.querySelector(".endpoint-list"),b=document.querySelector(".sidebar__nav"),_="all",g="",v=[{id:"read",type:"mcp",name:"Read",path:"Read",summary:"Read file contents",description:"Reads a file from the local filesystem. Supports text files, images (PNG, JPG), PDFs, and Jupyter notebooks (.ipynb). Returns content with line numbers.",category:"File Operations",parameters:[{name:"file_path",type:"string",required:!0,description:"The absolute path to the file to read"},{name:"offset",type:"number",required:!1,description:"Line number to start reading from"},{name:"limit",type:"number",required:!1,description:"Number of lines to read (default: 2000)"}],example:`// Read entire file
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
})`},{id:"enter-plan-mode",type:"mcp",name:"EnterPlanMode",path:"EnterPlanMode",summary:"Start planning mode",description:"Enter plan mode for non-trivial implementations. Explore codebase and design approach before coding. Requires user approval.",category:"Planning",parameters:[]},{id:"exit-plan-mode",type:"mcp",name:"ExitPlanMode",path:"ExitPlanMode",summary:"Exit planning mode",description:"Signal completion of planning phase. Plan should already be written to the plan file.",category:"Planning",parameters:[]}],w=[{id:"skill-pdf",type:"skill",name:"PDF",path:"pdf",summary:"PDF manipulation toolkit",description:"Comprehensive PDF toolkit: extract text/tables with pdfplumber, OCR scanned docs with pytesseract, create PDFs with reportlab, merge/split with pypdf/qpdf, rotate pages, add watermarks, encrypt/decrypt, and fill form fields.",category:"Document Skills",source:"anthropics/skills",requiredMcp:["Read","Write","Bash"],parameters:[{name:"Libraries",type:"Python",required:!0,description:"pypdf, pdfplumber, reportlab, pytesseract, pdf2image, pandas"},{name:"CLI Tools",type:"Bash",required:!1,description:"pdftotext, qpdf, pdftk (poppler-utils)"}],example:`"Extract the table from page 3 of report.pdf and convert to CSV"

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

"scripts/package_skill.py ./skills/my-skill \u2192 my-skill.skill"`}],x=[{id:"skill-playwright",type:"skill",name:"Playwright Automation",path:"playwright-skill",summary:"Browser automation",description:"General-purpose browser automation using Playwright. Navigate, interact, screenshot, and scrape web pages.",category:"Community Skills",source:"community",requiredMcp:["Bash","Write","mcp__playwright"],example:`"Use Playwright to scrape product prices from this e-commerce site"

"Automate filling out this form and submitting it"

"Take screenshots of our app at different viewport sizes"`},{id:"skill-ios-simulator",type:"skill",name:"iOS Simulator",path:"ios-simulator-skill",summary:"iOS app testing",description:"Build and test iOS applications through simulator automation. Launch apps, interact with UI, capture screenshots.",category:"Community Skills",source:"community",requiredMcp:["Bash","Write","Read"],example:`"Build and run the app in iOS Simulator"

"Test the onboarding flow on iPhone 15 Pro simulator"

"Capture screenshots of all screens for App Store submission"`},{id:"skill-d3js",type:"skill",name:"D3.js Visualizations",path:"claude-d3js-skill",summary:"Data visualizations",description:"Create interactive data visualizations using D3.js. Charts, graphs, maps, and custom visual representations.",category:"Community Skills",source:"community",requiredMcp:["Write","Read"],example:`"Create an interactive bar chart showing monthly sales"

"Build a force-directed graph of our team structure"

"Visualize geographic data on an interactive map"`},{id:"skill-scientific",type:"skill",name:"Scientific Computing",path:"claude-scientific-skills",summary:"Scientific libraries",description:"Scientific computing with NumPy, Pandas, SciPy, and database integration. Data analysis and research workflows.",category:"Community Skills",source:"community",requiredMcp:["Bash","Write","Read"],example:`"Analyze this CSV with statistical methods"

"Run regression analysis on the experimental data"

"Process and visualize the research dataset"`},{id:"skill-web-assets",type:"skill",name:"Web Asset Generator",path:"web-asset-generator",summary:"Generate web assets",description:"Generate favicons, app icons, social media images, and other web assets at all required sizes.",category:"Community Skills",source:"community",requiredMcp:["Write","Bash"],example:`"Generate all favicon sizes from our logo"

"Create Open Graph images for each blog post"

"Generate PWA icons at all required dimensions"`},{id:"skill-ffuf",type:"skill",name:"FFUF Web Fuzzing",path:"ffuf-web-fuzzing",summary:"Security testing",description:"Web fuzzing and penetration testing guidance using FFUF. Directory discovery, parameter fuzzing, authenticated testing.",category:"Community Skills",source:"community",requiredMcp:["Bash","Read","Write"],example:`"Fuzz the API endpoints for hidden parameters"

"Discover hidden directories on the target application"

"Test for authentication bypass vulnerabilities"`}],R=[...v,...w,...x];function B(){A.classList.toggle("is-open"),f.classList.toggle("is-visible")}function S(){A.classList.remove("is-open"),f.classList.remove("is-visible")}function $(e){e.classList.toggle("is-open")}function H(){return R.filter(e=>{let a=_==="all"||e.type===_,t=g===""||e.name.toLowerCase().includes(g)||e.summary.toLowerCase().includes(g)||e.path.toLowerCase().includes(g)||e.category.toLowerCase().includes(g)||e.description&&e.description.toLowerCase().includes(g);return a&&t})}function N(e){let a=e.parameters&&e.parameters.length>0?`
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
        ${e.parameters.map(o=>`
          <tr>
            <td class="params-table__name">${o.name}</td>
            <td class="params-table__type">${o.type}</td>
            <td class="params-table__required">${o.required?"Yes":"No"}</td>
            <td>${o.description}</td>
          </tr>
        `).join("")}
      </tbody>
    </table>
  `:"",t=e.requiredMcp&&e.requiredMcp.length>0?`
    <h4 class="endpoint__section-title">Required MCP Tools</h4>
    <div class="tags">
      ${e.requiredMcp.map(o=>`<span class="badge badge--mcp">${o}</span>`).join("")}
    </div>
  `:"",s=e.source?`
    <div class="mt-md text-xs text-muted">
      Source: <a href="https://github.com/${e.source}" target="_blank">${e.source}</a>
    </div>
  `:"",r=e.example?`
    <h4 class="endpoint__section-title">Example</h4>
    <div class="code-block">
      <div class="code-block__header">
        <span class="code-block__lang">${e.type==="mcp"?"typescript":"prompt"}</span>
        <button class="code-block__copy" data-code="${encodeURIComponent(e.example)}">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <rect x="9" y="9" width="13" height="13" rx="2" ry="2"/>
            <path d="M5 15H4a2 2 0 01-2-2V4a2 2 0 012-2h9a2 2 0 012 2v1"/>
          </svg>
          Copy
        </button>
      </div>
      <div class="code-block__content">
        <code>${j(e.example)}</code>
      </div>
    </div>
  `:"";return`
    <article class="endpoint endpoint--${e.type}" id="${e.id}" data-category="${e.category}">
      <div class="endpoint__header" onclick="toggleEndpoint(this.parentElement)">
        <span class="endpoint__method">${e.type.toUpperCase()}</span>
        <span class="endpoint__path">${e.path}</span>
        <span class="endpoint__summary">${e.summary}</span>
        <span class="endpoint__toggle">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <polyline points="6 9 12 15 18 9"/>
          </svg>
        </span>
      </div>
      <div class="endpoint__body">
        <p class="endpoint__description">${e.description}</p>
        ${t}
        ${a}
        ${r}
        ${s}
      </div>
    </article>
  `}function C(){let e=H(),a=z(e),t="";for(let[s,r]of Object.entries(a)){let o=r[0].type==="mcp"?"tools":"skills";t+=`
      <section class="section" id="section-${k(s)}">
        <div class="section__title">
          <h2>${s}</h2>
          <span class="badge badge--${r[0].type}">${r.length} ${o}</span>
        </div>
        ${r.map(N).join("")}
      </section>
    `}e.length===0&&(t=`
      <div class="text-center text-muted mt-lg">
        <p>No results found for "${g}"</p>
      </div>
    `),I.innerHTML=t,V()}function O(){let e=[...new Set(v.map(r=>r.category))],a=[...new Set(w.map(r=>r.category))],t=[...new Set(x.map(r=>r.category))],s=`
    <div class="sidebar__section">
      <div class="sidebar__section-title">MCP Tools</div>
      ${e.map(r=>`
        <a href="#section-${k(r)}" class="sidebar__link">${r}</a>
      `).join("")}
    </div>
    <div class="sidebar__section">
      <div class="sidebar__section-title">Official Skills</div>
      ${a.map(r=>`
        <a href="#section-${k(r)}" class="sidebar__link">${r}</a>
      `).join("")}
    </div>
    <div class="sidebar__section">
      <div class="sidebar__section-title">Community Skills</div>
      ${t.map(r=>`
        <a href="#section-${k(r)}" class="sidebar__link">${r}</a>
      `).join("")}
    </div>
  `;b.innerHTML=s}function z(e){return e.reduce((a,t)=>(a[t.category]||(a[t.category]=[]),a[t.category].push(t),a),{})}function k(e){return e.toLowerCase().replace(/\s+/g,"-").replace(/[^\w-]/g,"")}function j(e){return e.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/\n/g,"<br>")}function V(){document.querySelectorAll(".code-block__copy").forEach(e=>{e.addEventListener("click",a=>P(null,null,function*(){a.stopPropagation();let t=decodeURIComponent(e.dataset.code||"");yield navigator.clipboard.writeText(t),e.classList.add("is-copied"),e.textContent="Copied!",setTimeout(()=>{e.classList.remove("is-copied"),e.innerHTML=`
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <rect x="9" y="9" width="13" height="13" rx="2" ry="2"/>
            <path d="M5 15H4a2 2 0 01-2-2V4a2 2 0 012-2h9a2 2 0 012 2v1"/>
          </svg>
          Copy
        `},2e3)}))})}window.toggleEndpoint=$;var T=document.getElementById("list-view"),L=document.getElementById("graph-view"),h=document.getElementById("graph-svg"),y=document.getElementById("graph-tooltip"),F=document.querySelectorAll(".view-tab"),M=document.getElementById("filters-container"),G="list";function U(e){G=e,F.forEach(a=>{a.classList.toggle("is-active",a.dataset.view===e)}),e==="list"?(T.classList.remove("hidden"),L.classList.add("hidden"),M.style.display="flex"):(T.classList.add("hidden"),L.classList.remove("hidden"),M.style.display="none",D())}function D(){let e=h.clientWidth||900,a=h.clientHeight||500,t=v.map((i,n)=>({id:i.id,name:i.name,type:"mcp",x:150,y:50+n*(a-100)/v.length,connections:[]})),s=[...w,...x].map((i,n)=>({id:i.id,name:i.name,type:"skill",x:e-150,y:50+n*(a-100)/(w.length+x.length),connections:i.requiredMcp||[]})),r=[...t,...s],o=[];s.forEach(i=>{i.connections.forEach(n=>{let p=t.find(u=>u.name===n||u.name.toLowerCase()===n.toLowerCase());p&&o.push({from:i,to:p})})}),h.innerHTML="";let d=document.createElementNS("http://www.w3.org/2000/svg","defs");d.innerHTML=`
    <marker id="arrowhead" markerWidth="10" markerHeight="7" refX="10" refY="3.5" orient="auto">
      <polygon points="0 0, 10 3.5, 0 7" fill="#4d4d7a" />
    </marker>
  `,h.appendChild(d),o.forEach(i=>{let n=document.createElementNS("http://www.w3.org/2000/svg","path"),p=(i.from.x+i.to.x)/2,u=`M ${i.from.x} ${i.from.y} Q ${p} ${(i.from.y+i.to.y)/2} ${i.to.x} ${i.to.y}`;n.setAttribute("d",u),n.setAttribute("class","graph-edge"),n.setAttribute("data-from",i.from.id),n.setAttribute("data-to",i.to.id),h.appendChild(n)}),r.forEach(i=>{let n=document.createElementNS("http://www.w3.org/2000/svg","g");n.setAttribute("class",`graph-node graph-node--${i.type}`),n.setAttribute("data-id",i.id),n.setAttribute("transform",`translate(${i.x}, ${i.y})`);let p=document.createElementNS("http://www.w3.org/2000/svg","circle");p.setAttribute("r",i.type==="mcp"?"20":"16"),p.setAttribute("cx","0"),p.setAttribute("cy","0");let u=document.createElementNS("http://www.w3.org/2000/svg","text");u.setAttribute("dy","4"),u.textContent=i.name.length>8?i.name.substring(0,7)+"...":i.name,n.appendChild(p),n.appendChild(u),n.addEventListener("mouseenter",W=>X(W,i)),n.addEventListener("mouseleave",Q),n.addEventListener("click",()=>K(i,o)),h.appendChild(n)});let c=document.createElementNS("http://www.w3.org/2000/svg","text");c.setAttribute("x","150"),c.setAttribute("y","25"),c.setAttribute("text-anchor","middle"),c.setAttribute("fill","#22d3ee"),c.setAttribute("font-size","14"),c.setAttribute("font-weight","600"),c.textContent="MCP TOOLS",h.appendChild(c);let l=document.createElementNS("http://www.w3.org/2000/svg","text");l.setAttribute("x",String(e-150)),l.setAttribute("y","25"),l.setAttribute("text-anchor","middle"),l.setAttribute("fill","#a855f7"),l.setAttribute("font-size","14"),l.setAttribute("font-weight","600"),l.textContent="SKILLS",h.appendChild(l)}function X(e,a){let t=R.find(c=>c.id===a.id);if(!t)return;let s=`<div class="graph-tooltip__type">${a.type.toUpperCase()}</div>`;s+=`<div class="graph-tooltip__title">${t.name}</div>`,s+=`<div>${t.summary}</div>`,t.requiredMcp&&t.requiredMcp.length>0&&(s+=`<div class="graph-tooltip__deps">Requires: ${t.requiredMcp.join(", ")}</div>`),y.innerHTML=s,y.classList.add("is-visible");let r=L.getBoundingClientRect(),o=e.clientX-r.left+10,d=e.clientY-r.top+10;y.style.left=`${o}px`,y.style.top=`${d}px`}function Q(){y.classList.remove("is-visible")}function K(e,a){document.querySelectorAll(".graph-node").forEach(s=>s.classList.remove("is-highlighted")),document.querySelectorAll(".graph-edge").forEach(s=>s.classList.remove("is-highlighted"));let t=document.querySelector(`[data-id="${e.id}"]`);t==null||t.classList.add("is-highlighted"),a.forEach(s=>{if(s.from.id===e.id||s.to.id===e.id){let r=document.querySelector(`[data-from="${s.from.id}"][data-to="${s.to.id}"]`);r==null||r.classList.add("is-highlighted");let o=s.from.id===e.id?s.to.id:s.from.id,d=document.querySelector(`[data-id="${o}"]`);d==null||d.classList.add("is-highlighted")}})}document.addEventListener("DOMContentLoaded",()=>{O(),C(),q==null||q.addEventListener("click",B),f==null||f.addEventListener("click",S),m==null||m.addEventListener("input",e=>{g=e.target.value.toLowerCase(),C()}),document.addEventListener("keydown",e=>{(e.metaKey||e.ctrlKey)&&e.key==="k"&&(e.preventDefault(),m==null||m.focus()),e.key==="Escape"&&(S(),m==null||m.blur())}),E.forEach(e=>{e.addEventListener("click",()=>{E.forEach(a=>a.classList.remove("is-active")),e.classList.add("is-active"),_=e.dataset.filter,C()})}),F.forEach(e=>{e.addEventListener("click",()=>{U(e.dataset.view)})}),b==null||b.addEventListener("click",e=>{e.target.closest(".sidebar__link")&&S()}),window.addEventListener("resize",()=>{G==="graph"&&D()})});})();
