import { defineConfig } from "astro/config";

import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
  site: "https://jakobbouchard.dev",
  assets: "_app",
  experimental: {
    assets: true
  },
  server: {
    port: 5173,
    host: true
  },
  image: {
    service: "astro/assets/services/sharp"
  },
  integrations: [sitemap()]
});