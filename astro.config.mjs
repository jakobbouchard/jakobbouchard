import { defineConfig, sharpImageService } from "astro/config";
import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
	site: "https://jakobbouchard.dev",
	assets: "_app",
	server: { port: 5173, host: true },
	image: { service: sharpImageService() },
	integrations: [sitemap()],
});
