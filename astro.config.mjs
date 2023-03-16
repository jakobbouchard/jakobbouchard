import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";
import vercel from "@astrojs/vercel/serverless";

// https://astro.build/config
export default defineConfig({
	site: "https://jakobbouchard.dev",
	assets: "_app",
	output: "server",
	adapter: vercel(),
	experimental: {
		assets: true,
	},
	server: {
		port: 5173,
		host: true,
	},
	image: {
		service: "astro/assets/services/sharp",
	},
	integrations: [sitemap()],
});
