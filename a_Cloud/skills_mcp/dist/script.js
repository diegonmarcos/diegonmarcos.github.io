(()=>{var L=(e,a,t)=>new Promise((r,s)=>{var o=l=>{try{c(t.next(l))}catch(i){s(i)}},d=l=>{try{c(t.throw(l))}catch(i){s(i)}},c=l=>l.done?r(l.value):Promise.resolve(l.value).then(o,d);c((t=t.apply(e,a)).next())});var A=document.querySelector(".sidebar"),S=document.querySelector(".sidebar-toggle"),f=document.querySelector(".sidebar-overlay"),m=document.querySelector(".search__input"),T=document.querySelectorAll(".filter-btn"),D=document.querySelector(".endpoint-list"),b=document.querySelector(".sidebar__nav"),_="all",g="",v=[{id:"read",type:"mcp",name:"Read",path:"Read",summary:"Read file contents",description:"Reads a file from the local filesystem. Supports text files, images (PNG, JPG), PDFs, and Jupyter notebooks (.ipynb). Returns content with line numbers.",category:"File Operations",parameters:[{name:"file_path",type:"string",required:!0,description:"The absolute path to the file to read"},{name:"offset",type:"number",required:!1,description:"Line number to start reading from"},{name:"limit",type:"number",required:!1,description:"Number of lines to read (default: 2000)"}],example:`// Read entire file
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
})`},{id:"enter-plan-mode",type:"mcp",name:"EnterPlanMode",path:"EnterPlanMode",summary:"Start planning mode",description:"Enter plan mode for non-trivial implementations. Explore codebase and design approach before coding. Requires user approval.",category:"Planning",parameters:[]},{id:"exit-plan-mode",type:"mcp",name:"ExitPlanMode",path:"ExitPlanMode",summary:"Exit planning mode",description:"Signal completion of planning phase. Plan should already be written to the plan file.",category:"Planning",parameters:[]}],w=[{id:"skill-pdf",type:"skill",name:"PDF",path:"pdf",summary:"PDF document processing",description:"Extract text and tables from PDFs, create new PDFs, merge/split documents, handle form fields, and analyze PDF content.",category:"Document Skills",source:"anthropics/skills",requiredMcp:["Read","Write","Bash"],example:`"Use the PDF skill to extract all form fields from /path/to/document.pdf"

"Use the PDF skill to merge invoice1.pdf and invoice2.pdf into combined.pdf"

"Extract the table on page 3 of the report.pdf"`},{id:"skill-docx",type:"skill",name:"DOCX",path:"docx",summary:"Word document handling",description:"Create, edit, and analyze Microsoft Word documents. Supports tracked changes, formatting, styles, tables, and document conversion.",category:"Document Skills",source:"anthropics/skills",requiredMcp:["Read","Write","Bash"],example:`"Use the DOCX skill to create a professional report from this outline"

"Convert the markdown file to a formatted Word document with our brand styles"

"Extract all comments and tracked changes from the contract.docx"`},{id:"skill-xlsx",type:"skill",name:"XLSX",path:"xlsx",summary:"Excel spreadsheet handling",description:"Create, edit, and analyze Excel spreadsheets. Supports formulas, formatting, charts, pivot tables, and data analysis.",category:"Document Skills",source:"anthropics/skills",requiredMcp:["Read","Write","Bash"],example:`"Use the XLSX skill to analyze the sales data in Q4_report.xlsx"

"Create an Excel spreadsheet with monthly revenue calculations and charts"

"Extract data from Sheet2 and create a summary pivot table"`},{id:"skill-pptx",type:"skill",name:"PPTX",path:"pptx",summary:"PowerPoint presentations",description:"Create and edit PowerPoint presentations. Supports layouts, templates, charts, animations, speaker notes, and automated slide generation.",category:"Document Skills",source:"anthropics/skills",requiredMcp:["Read","Write","Bash"],example:`"Use the PPTX skill to create a 10-slide presentation from these bullet points"

"Add a chart showing quarterly growth to slide 5 of the deck"

"Convert this markdown outline into a professional presentation"`},{id:"skill-algorithmic-art",type:"skill",name:"Algorithmic Art",path:"algorithmic-art",summary:"Generative art with p5.js",description:"Create generative and algorithmic art using p5.js. Supports seeded randomness, particle systems, fractals, and creative coding patterns.",category:"Design & Creative",source:"anthropics/skills",requiredMcp:["Write","Bash"],example:`"Use the algorithmic art skill to create a generative particle system"

"Create a fractal tree animation with customizable parameters"

"Generate abstract art using Perlin noise and geometric shapes"`},{id:"skill-canvas-design",type:"skill",name:"Canvas Design",path:"canvas-design",summary:"Visual design (PNG/PDF)",description:"Design visual art and graphics. Outputs in PNG and PDF formats. Supports layouts, compositions, and visual hierarchies.",category:"Design & Creative",source:"anthropics/skills",requiredMcp:["Write","Bash"],example:`"Use canvas design to create a social media banner for our product launch"

"Design an infographic showing our company milestones"

"Create a visual diagram of the system architecture"`},{id:"skill-slack-gif",type:"skill",name:"Slack GIF Creator",path:"slack-gif-creator",summary:"Animated GIFs for Slack",description:"Create animated GIFs optimized for Slack. Handles size limits, frame rates, and Slack-specific formatting requirements.",category:"Design & Creative",source:"anthropics/skills",requiredMcp:["Write","Bash"],example:`"Create a celebration GIF for our team Slack channel"

"Make an animated loading spinner GIF optimized for Slack"

"Generate a reaction GIF from this sequence of images"`},{id:"skill-theme-factory",type:"skill",name:"Theme Factory",path:"theme-factory",summary:"Theme generation",description:"Generate and customize themes for applications. Creates consistent color palettes, typography scales, and design tokens.",category:"Design & Creative",source:"anthropics/skills",requiredMcp:["Write","Read"],example:`"Create a dark theme based on our brand colors"

"Generate a complete design token system for our React app"

"Create light and dark theme variants with proper contrast ratios"`},{id:"skill-frontend-design",type:"skill",name:"Frontend Design",path:"frontend-design",summary:"Bold UI/UX design",description:"Instructs Claude to avoid generic aesthetics and make bold design decisions. Emphasizes unique, memorable user interfaces.",category:"Development",source:"anthropics/skills",requiredMcp:["Write","Read","Glob"],example:`"Use frontend design skill to create a unique landing page - avoid generic templates"

"Design a memorable dashboard UI with distinctive visual identity"

"Create an unconventional but usable navigation system"`},{id:"skill-web-artifacts",type:"skill",name:"Web Artifacts Builder",path:"web-artifacts-builder",summary:"Build HTML artifacts",description:"Build complex HTML artifacts using React, Tailwind CSS, and shadcn/ui components. Creates interactive web components.",category:"Development",source:"anthropics/skills",requiredMcp:["Write","Bash"],example:`"Build an interactive data table component with sorting and filtering"

"Create a form wizard artifact with validation and progress indicator"

"Build a dashboard widget showing real-time metrics"`},{id:"skill-mcp-builder",type:"skill",name:"MCP Builder",path:"mcp-builder",summary:"Create MCP servers",description:"Guide for creating Model Context Protocol (MCP) servers. Helps integrate external APIs and services with Claude.",category:"Development",source:"anthropics/skills",requiredMcp:["Write","Read","Bash","Glob"],example:`"Use MCP builder to create a server for our internal API"

"Build an MCP server that connects to PostgreSQL database"

"Create an MCP server for Jira integration"`},{id:"skill-webapp-testing",type:"skill",name:"WebApp Testing",path:"webapp-testing",summary:"Test with Playwright",description:"Test local web applications using Playwright. Supports E2E testing, visual regression, and accessibility testing.",category:"Development",source:"anthropics/skills",requiredMcp:["Read","Write","Bash","mcp__playwright"],example:`"Use webapp testing to create E2E tests for the login flow"

"Test the checkout process and capture screenshots of each step"

"Run accessibility tests on all form components"`},{id:"skill-brand-guidelines",type:"skill",name:"Brand Guidelines",path:"brand-guidelines",summary:"Apply brand identity",description:"Apply official brand colors, typography, voice, and visual guidelines. Ensures consistent brand representation across outputs.",category:"Communication",source:"anthropics/skills",requiredMcp:["Read"],example:`"Apply our brand guidelines to this marketing copy"

"Ensure this document follows our brand voice and tone"

"Check if these colors match our brand palette"`},{id:"skill-internal-comms",type:"skill",name:"Internal Comms",path:"internal-comms",summary:"Internal communications",description:"Write internal communications: status reports, newsletters, FAQs, announcements, and team updates.",category:"Communication",source:"anthropics/skills",requiredMcp:["Read","Write"],example:`"Write a weekly status report for the engineering team"

"Create an FAQ document for the new PTO policy"

"Draft an announcement for the upcoming company event"`},{id:"skill-doc-coauthoring",type:"skill",name:"Doc Co-authoring",path:"doc-coauthoring",summary:"Collaborative writing",description:"Collaborative document authoring with tracked changes, comments, and revision management.",category:"Communication",source:"anthropics/skills",requiredMcp:["Read","Write","Edit"],example:`"Help me co-author this proposal with tracked changes"

"Review this document and add comments for improvement"

"Merge my edits with the team's revisions"`},{id:"skill-creator",type:"skill",name:"Skill Creator",path:"skill-creator",summary:"Create new skills",description:"Interactive tool that guides users through building new custom skills via Q&A. Generates proper SKILL.md structure.",category:"Skill Creation",source:"anthropics/skills",requiredMcp:["Write","Read","AskUserQuestion"],example:`"Use the skill creator to help me build a custom skill for our deployment process"

"Create a new skill for our code review workflow"

"Build a skill that enforces our testing standards"`}],x=[{id:"skill-playwright",type:"skill",name:"Playwright Automation",path:"playwright-skill",summary:"Browser automation",description:"General-purpose browser automation using Playwright. Navigate, interact, screenshot, and scrape web pages.",category:"Community Skills",source:"community",requiredMcp:["Bash","Write","mcp__playwright"],example:`"Use Playwright to scrape product prices from this e-commerce site"

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

"Test for authentication bypass vulnerabilities"`}],F=[...v,...w,...x];function B(){A.classList.toggle("is-open"),f.classList.toggle("is-visible")}function q(){A.classList.remove("is-open"),f.classList.remove("is-visible")}function H(e){e.classList.toggle("is-open")}function I(){return F.filter(e=>{let a=_==="all"||e.type===_,t=g===""||e.name.toLowerCase().includes(g)||e.summary.toLowerCase().includes(g)||e.path.toLowerCase().includes(g)||e.category.toLowerCase().includes(g)||e.description&&e.description.toLowerCase().includes(g);return a&&t})}function z(e){let a=e.parameters&&e.parameters.length>0?`
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
  `:"",r=e.source?`
    <div class="mt-md text-xs text-muted">
      Source: <a href="https://github.com/${e.source}" target="_blank">${e.source}</a>
    </div>
  `:"",s=e.example?`
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
        <code>${O(e.example)}</code>
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
        ${s}
        ${r}
      </div>
    </article>
  `}function C(){let e=I(),a=U(e),t="";for(let[r,s]of Object.entries(a)){let o=s[0].type==="mcp"?"tools":"skills";t+=`
      <section class="section" id="section-${k(r)}">
        <div class="section__title">
          <h2>${r}</h2>
          <span class="badge badge--${s[0].type}">${s.length} ${o}</span>
        </div>
        ${s.map(z).join("")}
      </section>
    `}e.length===0&&(t=`
      <div class="text-center text-muted mt-lg">
        <p>No results found for "${g}"</p>
      </div>
    `),D.innerHTML=t,j()}function N(){let e=[...new Set(v.map(s=>s.category))],a=[...new Set(w.map(s=>s.category))],t=[...new Set(x.map(s=>s.category))],r=`
    <div class="sidebar__section">
      <div class="sidebar__section-title">MCP Tools</div>
      ${e.map(s=>`
        <a href="#section-${k(s)}" class="sidebar__link">${s}</a>
      `).join("")}
    </div>
    <div class="sidebar__section">
      <div class="sidebar__section-title">Official Skills</div>
      ${a.map(s=>`
        <a href="#section-${k(s)}" class="sidebar__link">${s}</a>
      `).join("")}
    </div>
    <div class="sidebar__section">
      <div class="sidebar__section-title">Community Skills</div>
      ${t.map(s=>`
        <a href="#section-${k(s)}" class="sidebar__link">${s}</a>
      `).join("")}
    </div>
  `;b.innerHTML=r}function U(e){return e.reduce((a,t)=>(a[t.category]||(a[t.category]=[]),a[t.category].push(t),a),{})}function k(e){return e.toLowerCase().replace(/\s+/g,"-").replace(/[^\w-]/g,"")}function O(e){return e.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/\n/g,"<br>")}function j(){document.querySelectorAll(".code-block__copy").forEach(e=>{e.addEventListener("click",a=>L(this,null,function*(){a.stopPropagation();let t=decodeURIComponent(e.dataset.code||"");yield navigator.clipboard.writeText(t),e.classList.add("is-copied"),e.textContent="Copied!",setTimeout(()=>{e.classList.remove("is-copied"),e.innerHTML=`
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <rect x="9" y="9" width="13" height="13" rx="2" ry="2"/>
            <path d="M5 15H4a2 2 0 01-2-2V4a2 2 0 012-2h9a2 2 0 012 2v1"/>
          </svg>
          Copy
        `},2e3)}))})}window.toggleEndpoint=H;var M=document.getElementById("list-view"),E=document.getElementById("graph-view"),h=document.getElementById("graph-svg"),y=document.getElementById("graph-tooltip"),W=document.querySelectorAll(".view-tab"),P=document.getElementById("filters-container"),$="list";function V(e){$=e,W.forEach(a=>{a.classList.toggle("is-active",a.dataset.view===e)}),e==="list"?(M.classList.remove("hidden"),E.classList.add("hidden"),P.style.display="flex"):(M.classList.add("hidden"),E.classList.remove("hidden"),P.style.display="none",G())}function G(){let e=h.clientWidth||900,a=h.clientHeight||500,t=v.map((i,n)=>({id:i.id,name:i.name,type:"mcp",x:150,y:50+n*(a-100)/v.length,connections:[]})),r=[...w,...x].map((i,n)=>({id:i.id,name:i.name,type:"skill",x:e-150,y:50+n*(a-100)/(w.length+x.length),connections:i.requiredMcp||[]})),s=[...t,...r],o=[];r.forEach(i=>{i.connections.forEach(n=>{let p=t.find(u=>u.name===n||u.name.toLowerCase()===n.toLowerCase());p&&o.push({from:i,to:p})})}),h.innerHTML="";let d=document.createElementNS("http://www.w3.org/2000/svg","defs");d.innerHTML=`
    <marker id="arrowhead" markerWidth="10" markerHeight="7" refX="10" refY="3.5" orient="auto">
      <polygon points="0 0, 10 3.5, 0 7" fill="#4d4d7a" />
    </marker>
  `,h.appendChild(d),o.forEach(i=>{let n=document.createElementNS("http://www.w3.org/2000/svg","path"),p=(i.from.x+i.to.x)/2,u=`M ${i.from.x} ${i.from.y} Q ${p} ${(i.from.y+i.to.y)/2} ${i.to.x} ${i.to.y}`;n.setAttribute("d",u),n.setAttribute("class","graph-edge"),n.setAttribute("data-from",i.from.id),n.setAttribute("data-to",i.to.id),h.appendChild(n)}),s.forEach(i=>{let n=document.createElementNS("http://www.w3.org/2000/svg","g");n.setAttribute("class",`graph-node graph-node--${i.type}`),n.setAttribute("data-id",i.id),n.setAttribute("transform",`translate(${i.x}, ${i.y})`);let p=document.createElementNS("http://www.w3.org/2000/svg","circle");p.setAttribute("r",i.type==="mcp"?"20":"16"),p.setAttribute("cx","0"),p.setAttribute("cy","0");let u=document.createElementNS("http://www.w3.org/2000/svg","text");u.setAttribute("dy","4"),u.textContent=i.name.length>8?i.name.substring(0,7)+"...":i.name,n.appendChild(p),n.appendChild(u),n.addEventListener("mouseenter",R=>X(R,i)),n.addEventListener("mouseleave",Q),n.addEventListener("click",()=>K(i,o)),h.appendChild(n)});let c=document.createElementNS("http://www.w3.org/2000/svg","text");c.setAttribute("x","150"),c.setAttribute("y","25"),c.setAttribute("text-anchor","middle"),c.setAttribute("fill","#22d3ee"),c.setAttribute("font-size","14"),c.setAttribute("font-weight","600"),c.textContent="MCP TOOLS",h.appendChild(c);let l=document.createElementNS("http://www.w3.org/2000/svg","text");l.setAttribute("x",String(e-150)),l.setAttribute("y","25"),l.setAttribute("text-anchor","middle"),l.setAttribute("fill","#a855f7"),l.setAttribute("font-size","14"),l.setAttribute("font-weight","600"),l.textContent="SKILLS",h.appendChild(l)}function X(e,a){let t=F.find(c=>c.id===a.id);if(!t)return;let r=`<div class="graph-tooltip__type">${a.type.toUpperCase()}</div>`;r+=`<div class="graph-tooltip__title">${t.name}</div>`,r+=`<div>${t.summary}</div>`,t.requiredMcp&&t.requiredMcp.length>0&&(r+=`<div class="graph-tooltip__deps">Requires: ${t.requiredMcp.join(", ")}</div>`),y.innerHTML=r,y.classList.add("is-visible");let s=E.getBoundingClientRect(),o=e.clientX-s.left+10,d=e.clientY-s.top+10;y.style.left=`${o}px`,y.style.top=`${d}px`}function Q(){y.classList.remove("is-visible")}function K(e,a){document.querySelectorAll(".graph-node").forEach(r=>r.classList.remove("is-highlighted")),document.querySelectorAll(".graph-edge").forEach(r=>r.classList.remove("is-highlighted"));let t=document.querySelector(`[data-id="${e.id}"]`);t==null||t.classList.add("is-highlighted"),a.forEach(r=>{if(r.from.id===e.id||r.to.id===e.id){let s=document.querySelector(`[data-from="${r.from.id}"][data-to="${r.to.id}"]`);s==null||s.classList.add("is-highlighted");let o=r.from.id===e.id?r.to.id:r.from.id,d=document.querySelector(`[data-id="${o}"]`);d==null||d.classList.add("is-highlighted")}})}document.addEventListener("DOMContentLoaded",()=>{N(),C(),S==null||S.addEventListener("click",B),f==null||f.addEventListener("click",q),m==null||m.addEventListener("input",e=>{g=e.target.value.toLowerCase(),C()}),document.addEventListener("keydown",e=>{(e.metaKey||e.ctrlKey)&&e.key==="k"&&(e.preventDefault(),m==null||m.focus()),e.key==="Escape"&&(q(),m==null||m.blur())}),T.forEach(e=>{e.addEventListener("click",()=>{T.forEach(a=>a.classList.remove("is-active")),e.classList.add("is-active"),_=e.dataset.filter,C()})}),W.forEach(e=>{e.addEventListener("click",()=>{V(e.dataset.view)})}),b==null||b.addEventListener("click",e=>{e.target.closest(".sidebar__link")&&q()}),window.addEventListener("resize",()=>{$==="graph"&&G()})});})();
