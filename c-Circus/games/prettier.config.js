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
