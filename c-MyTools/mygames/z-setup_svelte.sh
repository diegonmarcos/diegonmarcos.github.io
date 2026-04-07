#!/bin/bash

# Ensure the script is run with bash
if [ -z "$BASH_VERSION" ]; then
    echo "This script requires bash. Please run it with 'bash' or as an executable."
    exit 1
fi

# 1. Create SvelteKit Project (non-interactive)
echo "Creating SvelteKit project in the current directory..."
npx sv create . --template minimal --types ts --no-add-ons --install npm

# 2. Manual ESLint and Prettier Setup
echo "Setting up ESLint and Prettier..."

# Install dependencies
npm install -D eslint prettier eslint-plugin-svelte prettier-plugin-svelte

# Create Prettier configuration
cat <<EOT > prettier.config.js
/** @type {import('prettier').Config} */
const config = {
	plugins: ['prettier-plugin-svelte'],
	printWidth: 100,
	tabWidth: 2,
	useTabs: true,
	semi: true,
	singleQuote: true,
	trailingComma: 'all',
	bracketSpacing: true,
	arrowParens: 'always',
	svelteSortOrder: 'options-scripts-template-styles',
	svelteStrictMode: false,
	svelteBracketNewLine: true,
	svelteIndentScriptAndStyle: true,
};

export default config;
EOT

# Create ESLint configuration
cat <<EOT > .eslintrc.cjs
module.exports = {
  root: true,
  parser: '@typescript-eslint/parser',
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:svelte/recommended',
    'prettier'
  ],
  plugins: ['@typescript-eslint'],
  ignorePatterns: ['*.cjs'],
  overrides: [{ files: ['*.svelte'], processor: 'svelte3/svelte3' }],
  settings: {
    'svelte3/typescript': () => require('typescript')
  },
  parserOptions: {
    sourceType: 'module',
    ecmaVersion: 2021
  },
  env: {
    browser: true,
    es2017: true,
    node: true
  }
};
EOT

# Add scripts to package.json
npm pkg set scripts.lint="prettier --check . && eslint ."
npm pkg set scripts.format="prettier --write ."

echo "Svelte project setup complete."
echo "Please review the generated configuration files."
echo "You can now run 'npm run lint' and 'npm run format'."
