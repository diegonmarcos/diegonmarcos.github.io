#!/bin/bash
set -e

# Navigate to the SvelteKit project directory
cd "$(dirname "$0")/../1.3.svelte"

# Install dependencies
npm install

# Build the project
npm run build
