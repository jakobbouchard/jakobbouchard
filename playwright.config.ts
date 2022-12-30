import type { PlaywrightTestConfig } from "@playwright/test";

const config: PlaywrightTestConfig = {
	webServer: {
		command: "pnpm turbo build && pnpm turbo preview",
		port: 4173,
	},
	testDir: "tests",
};

export default config;
