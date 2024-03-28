/**
 * @type {import("eslint").ESLint.ConfigData}
 */
export default {
	root: true,
	env: { browser: true, es2022: true, node: true },
	extends: [
		"eslint:recommended",
		"plugin:@typescript-eslint/recommended",
		"plugin:react-hooks/recommended",
	],
	global: {
		Bun: true,
		Codepark: true,
	},
	ignorePatterns: ["dist", ".codepark", ".schemas", "eslint.config.mjs"],
	parser: "@typescript-eslint/parser",
	plugins: ["react-refresh", "@typescript-eslint"],
	rules: {
		"react-refresh/only-export-components": [
			"warn",
			{ allowConstantExport: true },
		],
	},
	parserOptions: {
		ecmaFeatures: {
			jsx: true,
		},
		ecmaVersion: "latest",
		sourceType: "module",
	},
};
