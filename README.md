# Personal Portfolio & Blog Website

This repository contains the source code for my personal portfolio website and blog, hosted on GitHub Pages.

**Live Site: [https://diegonmarcos.github.io/](https://diegonmarcos.github.io/)**


---

## 1. Tech Stack

### Stack
- **Frontend**: HTML5, Sass/SCSS, TypeScript
- **Blog**: Jekyll
- **Build Tools**: Node.js, npm, Sass, TypeScript Compiler (tsc)
- **CI/CD**: GitHub Actions
- **Hosting**: GitHub Pages

### Features

- **Modern & Responsive Design**: A clean, responsive layout built with HTML5 and Sass.
- **Interactive Elements**: Engaging user experience with animations and interactive components built with TypeScript.
- **Modular Architecture**: A well-organized project structure separating concerns (specs, operations, assets, styles, and logic).
- **Jekyll-Powered Blog**: A simple and clean blog powered by Jekyll, with posts written in Markdown.
- **Linktree Page**: A dedicated page for social and professional links.
- **Web CV**: An online, interactive version of my curriculum vitae.
- **Efficient CI/CD**: An optimized GitHub Actions workflow for automated deployment, featuring conditional builds to save time and resources.
---

## 2. Project Structure

The repository follows a numbered directory structure for clarity and organization:

```
/
├── 0.spec/         # Specification documents (project specs, ops specs)
├── 1.ops/          # Build scripts, npm packages, and operational configurations
├── 2.assets/       # Static assets (images, icons, etc.)
├── 3.sass/         # Sass/SCSS source files
├── 4.ts/           # TypeScript source files
├── blog/           # Jekyll blog source and build scripts
├── cv_web/         # Source files for the interactive web CV
├── linktree/       # Source files for the linktree page
├── .github/        # GitHub Actions workflow definitions
├── index.html      # Main landing page
├── script.js       # Compiled JavaScript
└── style.css       # Compiled CSS
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