import { defineConfig, sharpImageService } from "astro/config";
import vercel from '@astrojs/vercel/serverless';
import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
	site: "https://jakobbouchard.dev",
	assets: "_app",
	server: { port: 5173, host: true },
	redirects: {
		"/work/splatoon-style-mechanic": { destination: "/work/bloodtoon", status: 307 },
	},
	image: { service: sharpImageService() },
	integrations: [sitemap()],
	output: 'hybrid',
	adapter: vercel(),
});
