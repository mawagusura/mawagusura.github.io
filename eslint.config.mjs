import typescriptEslint from "@typescript-eslint/eslint-plugin";
import astro from "eslint-plugin-astro";
import deprecation from "eslint-plugin-deprecation";
import perfectionist from "eslint-plugin-perfectionist";
import regexp from "eslint-plugin-regexp";
import typescriptSortKeys from "eslint-plugin-typescript-sort-keys";
import globals from "globals";
import tsParser from "@typescript-eslint/parser";
import parser from "astro-eslint-parser";
import path from "node:path";
import { fileURLToPath } from "node:url";
import js from "@eslint/js";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const compat = new FlatCompat({
	baseDirectory: __dirname,
	recommendedConfig: js.configs.recommended,
	allConfig: js.configs.all,
});

export default [
	{
		ignores: [
			"**/node_modules",
			"**/dist",
			"**/dist",
			"**/node_modules",
			"**/.github",
			"**/.changeset",
		],
	},
	...compat.extends(
		"eslint:recommended",
		"plugin:@typescript-eslint/recommended",
		"plugin:astro/recommended",
		"plugin:astro/jsx-a11y-recommended",
		"plugin:perfectionist/recommended-natural",
		"plugin:regexp/recommended",
		"plugin:typescript-sort-keys/recommended",
	),
	{
		plugins: {
			"@typescript-eslint": typescriptEslint,
			astro,
			deprecation,
			perfectionist,
			regexp,
			"typescript-sort-keys": typescriptSortKeys,
		},

		languageOptions: {
			globals: {
				...globals.node,
			},

			parser: tsParser,
		},

		rules: {
			"@typescript-eslint/no-unused-vars": [
				"warn",
				{
					ignoreRestSiblings: true,
					varsIgnorePattern: "Props",
				},
			],

			"@typescript-eslint/no-var-requires": "warn",
		},
	},
	...compat
		.extends("plugin:@typescript-eslint/strict", "plugin:@typescript-eslint/stylistic")
		.map((config) => ({
			...config,
			files: ["**/*.astro"],
		})),
	{
		files: ["**/*.astro"],

		languageOptions: {
			parser: parser,
			ecmaVersion: 5,
			sourceType: "script",

			parserOptions: {
				extraFileExtensions: [".astro"],
				parser: "@typescript-eslint/parser",
			},
		},

		rules: {
			"astro/jsx-a11y/no-redundant-roles": [
				"error",
				{
					ol: ["list"],
					ul: ["list"],
				},
			],
		},
	},
	...compat
		.extends(
			"plugin:@typescript-eslint/strict-type-checked",
			"plugin:@typescript-eslint/stylistic-type-checked",
		)
		.map((config) => ({
			...config,
			files: ["**/*.ts", "**/*.tsx"],
		})),
	{
		files: ["**/*.ts", "**/*.tsx"],

		rules: {
			"deprecation/deprecation": "error",
		},
	},
	...compat.extends("plugin:markdown/recommended").map((config) => ({
		...config,
		files: ["**/*.md"],
	})),
	{
		files: ["**/*.md"],
		processor: "markdown/markdown",
	},
];
