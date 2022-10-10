<% if (options.jsCompiler === 'ts') { %>// @ts-check

module.exports = {
	extends: [
		'@namics/eslint-config/configurations/typescript-browser.js',
		'@namics/eslint-config/configurations/typescript-browser-disable-styles.js',
	].map(require.resolve),
	rules: {
		'no-restricted-syntax': ['error', 'LabeledStatement', 'WithStatement'],
		'new-cap': [2, { capIsNew: false }],
		'@typescript-eslint/member-ordering': 1,
		// due to issues with outdated @typescript-eslint
		'@typescript-eslint/no-unused-vars': 0,
	},
	parserOptions: {
		project: './tsconfig.json',
	},
	settings: {
		'import/resolver': {
			node: {
				paths: ['src'],
				extensions: ['.js', '.jsx', '.ts', '.tsx'],
			},
		},
	},
};<% } else { %>module.exports = {
	extends: [
		'@namics/eslint-config/configurations/es8-browser.js',
		'@namics/eslint-config/configurations/es8-browser-disable-styles.js',
	].map(require.resolve),
	rules: {
		'new-cap': [2, { capIsNew: false }],
		'require-jsdoc': 'off',
	},
	parser: '@babel/eslint-parser',
};<% } %>
