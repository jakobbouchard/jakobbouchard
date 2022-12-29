/** @type {import('prettier').Config} */
module.exports = {
	useTabs: true,
	trailingComma: "all",
	plugins: ["prettier-plugin-svelte"],
	pluginSearchDirs: ["."],
	overrides: [{ files: "*.svelte", options: { parser: "svelte" } }],
};
