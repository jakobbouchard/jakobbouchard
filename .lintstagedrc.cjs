module.exports = {
	// Run Svelte Check on whole project
	"*.{ts,svelte}": () => "pnpm check",
	// Run TypeScript check on whole project
	"*.ts": () => "tsc --noEmit",
	// Run ESLint on Svelte and TS files
	"*.{ts,svelte}": "eslint --cache --fix",
	// Run Prettier everywhere
	"*": "prettier --cache --write --ignore-unknown",
};
