# FOLDER STRUCTURE


### PRODUCT FILES
- 0.spec/
	- spec.md                   # simple stack explanation
	- Spec-kit                  # full spec-kit gh model
	- archive/                  # folder

### DEVOPS
- 1.ops/
	- analytics/                # folder to keep the scripts and GTM and GTAG infos
	- logs/                     # folder for all logs
	- build.sh                  # modes: watch, dev, test, deploy
	- spec-ops.md               # explanation of the build and deployment of the prj
    - CI/                       # folder to symlink ALL CI/CD and json and build.js...
        - *.json (symlinks)     # Config files as symlinks add ALL
        - build.js (symlink)    # Build scripts as symlinks
        - deploy.yml (symlink)  # GitHub Actions as symlinks
        - vite.config.js        # as symlinks
- package.json                  # Keep at root
- package-lock.json             # Keep at root
- tsconfig.json                 # rooot
- vite.config.js                # Keep at root
- tsconfig.json                 # Keep at root
- script.js.map                 # keept root
- node_modules/                 # node local dev build
- .github/
	- workflows/                # CI/CD pipelines

### SRC FILES
- src_static
	- scss/                     # Compiles to → style.css (root)
	- typescript/               # Compiles to → script.js (root)
- src/
	- vue vs svelte structure
	- ...
- public/                       # Static Assets (Served as-is, no processing)

### FILES FOR PRODUCTION
- dist/
	- index.html                # Regular build from src/
	- index_spa.html            # Standalone SPA from src/
	- Index.html                # if from static
	- Script.js                 # if from static
	- Style.css                 # if from static









