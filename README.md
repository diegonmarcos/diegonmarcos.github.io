# Personal Portfolio & Blog Website

This repository contains the source code for my personal portfolio website and blog, hosted on GitHub Pages.

**Live Site: [https://diegonmarcos.github.io/landpage](https://diegonmarcos.github.io/landpage)**


---

## 1. Tech Stack

### Stack Definition

| **Project**       | **Description**                 | **Classification (Type)**      | **Framework** | Build Strategy           | **Single-File** | **SPA** |
| ----------------- | ------------------------------- | ------------------------------ | ------------- | ------------------------ | --------------- | ------- |
| **Landpage**      | Main landing page & entry point | **Type 1** (Digital Card)      | **Vanilla**   | Server-Side (Static SSG) | Yes             | No      |
| **Linktree**      | Simple links hub & bio page     | **Type 1** (Digital Card)      | **Vanilla**   | Server-Side (Static SSG) | Yes             | No      |
| **CV Web**        | Digital Resume/CV               | **Type 1** (Digital Card)      | **Vanilla**   | Server-Side (Static SSG) | Yes             | No      |
| **Nexus**         | Company Business Website        | **Type 1** (Digital Card)      | **Vanilla**   | Server-Side (Static SSG) | Yes             | Yes     |
| **Cloud**         | Cloud resources monitor         | **Type 3** (Private Dashboard) | **Vanilla**   | Client-Side (CSR)        | Yes             | Yes     |
| **MarketWatch**   | Financial market tracker        | **Type 3** (Private Dashboard) | **Vanilla**   | Client-Side (CSR)        | Yes             | Yes     |
| **HealthTracker** | Personal health monitoring      | **Type 1** (Digital Card)      | **Vanilla**   | Server-Side (Static SSG) | Yes             | No      |
| **Feed Yourself** | Calculator / Utility Tool       | **Type 2** (Browser Tool)      | **Vanilla**   | Client-Side (CSR)        | Yes             | No      |
| **Others**        | Python tools & scripts          | **Scripts**                    | **Python**    | Server-Side (Static SSG) | Yes             | No      |
| **MyFeed**        | Social feed aggregator          | **Type 3** (Private Dashboard) | **Vue 3**     | Client-Side (CSR)        | Yes             | Yes     |
| **MyGames**     | Personal portfolio showcase     | **Type 4** (Public Platform)   | **SvelteKit** | Hybrid (SSR/Hydration)   | No              | Yes     |

### Dev Environment

| **Project**       | **Framework** | **CSS**  | **JS Variant** |
| ----------------- | ------------- | -------- | -------------- |
| **Landpage**      | Vanilla       | Sass     | TypeScript     |
| **Linktree**      | Vanilla       | Sass     | TypeScript     |
| **CV Web**        | Vanilla       | Sass     | TypeScript     |
| **Nexus**         | Vanilla       | Sass+TW  | TypeScript     |
| **Cloud**         | Vanilla       | Sass     | TypeScript     |
| **MarketWatch**   | Vanilla       | Sass     | TypeScript     |
| **HealthTracker** | Vanilla       | Tailwind | -              |
| **Feed Yourself** | Vanilla       | Sass     | TypeScript     |
| **Others**        | Python 3.11+  | -        | -              |
| **MyFeed**        | Vue 3         | Sass     | TypeScript     |
| **MyGames**     | SvelteKit     | Sass     | TypeScript     |

### Dev Servers

| **Project**       | **Dev Server (Port)** | **Watch**  |
| ----------------- | --------------------- | ---------- |
| **Landpage**      | npm-live :8000        | Sass, TS   |
| **Linktree**      | npm-live :8001        | Sass, TS   |
| **CV Web**        | npm-live :8002        | Sass, TS   |
| **Nexus**         | npm-live :8005        | Sass, TS   |
| **Cloud**         | npm-live :8006        | Sass, TS   |
| **MarketWatch**   | npm-live :8010        | Sass, TS   |
| **HealthTracker** | npm-live :8009        | -          |
| **Feed Yourself** | npm-live :8007        | Sass, TS   |
| **Others**        | npm-live :8008        | -          |
| **MyFeed**        | Vite :8003            | HMR        |
| **MyGames**     | Vite :8004            | HMR        |
---

## 2. Project Structure

The repository follows a numbered directory structure for clarity and organization:

```
/
├── .github/workflows/  # GitHub Actions CI/CD
├── 0.spec/             # Specifications & documentation
├── 1.ops/              # Build scripts & operations
├── landpage/           # Main landing page (diegonmarcos.com)
├── linktree/           # Links hub & bio page
├── cv_web/             # Digital Resume/CV
├── cv_pdf/             # PDF Resume
├── cloud/              # Cloud resources monitor
├── market_watch/       # Financial market tracker
├── health_tracker/     # Personal health monitoring
├── feed_yourself/      # Calculator / Utility Tool
├── nexus/              # Company Business Website
├── myfeed/             # Social feed aggregator (Vue 3)
├── mygames/          # Personal portfolio (SvelteKit)
└── others/             # Python tools & scripts
```

For more details on the project's technical specifications and operational workflows, please see the documents in the `0.spec/` directory:

-   [**`spec.md`**](./0.spec/spec.md): The main technical specification for the website.
-   [**`spec_ops.md`**](./0.spec/spec_ops.md): A detailed guide to the build, deployment, and operational aspects of the project.

---

## 3. Ops - Deployment

Deployment is fully automated via a GitHub Actions workflow defined in `.github/workflows/deploy.yml`.

- **Trigger**: A push to the `main` branch triggers the workflow.
- **Conditional Builds**: The workflow is optimized to only build and re-compile assets (Sass, TypeScript, Jekyll posts) if their respective source files have changed in the push. This is achieved by inspecting the Git history on each run, similar to how a Makefile works.
- **Process**: The workflow installs dependencies, conditionally builds the assets, prepares the site in an `_site` directory, and deploys it to the `gh-pages` branch, making it live on GitHub Pages.

For more details on the project's technical specifications and operational workflows, please see the documents in the `0.spec/` directory:

-   [**`spec_ops.md`**](./0.spec/spec_ops.md): A detailed guide to the build, deployment, and operational aspects of the project.

---

## 4. Local Development

The primary tool for local development is the `build.sh` script located in the `1.ops/scripts/` directory. It handles dependency installation, compiling assets, and running a live development server.

1.  **Clone the repository:**
    ```bash
    git clone https://github.com/diegonmarcos/diegonmarcos.github.io.git
    cd diegonmarcos.github.io
    ```

2.  **Navigate to the scripts directory:**
    All development commands should be run from the `1.ops/scripts/` directory.
    ```bash
    cd 1.ops/scripts
    ```

3.  **Run the Development Server:**
    For the best development experience, use the `server` command. It starts a live server on `http://localhost:8000` and automatically watches for file changes.
    ```bash
    ./build.sh server
    ```
    To stop the server and the watcher, run:
    ```bash
    ./build.sh server kill
    ```

4.  **Manual Builds:**
    If you only need to compile the assets without running a server, you can use the `build` or `dev` commands.
    ```bash
    # Compile for production (compressed)
    ./build.sh build all

    # Compile for development (expanded)
    ./build.sh dev all
    ```

5.  **Run the Jekyll blog locally (optional):**
    If you want to preview the blog with live reloading, navigate to the blog's operations directory and run its `serve` script.
    ```bash
    cd ../../blog/1.ops
    ./build.sh serve
    # The blog will be available at http://localhost:4000
    ```

---
<br><br><br><br><br><br><br>


<pre>
+---------------------------------+
|                                 |
|   diegonmarcos.github.io        |
|                                 |
|   C:\> _                        |
|                                 |
+---------------------------------+
      |_______________________|
            |_________|
</pre>
