import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";
import react from "@astrojs/react";
import vue from "@astrojs/vue";
import preact from "@astrojs/preact";
import vercel from "@astrojs/vercel/serverless";

import netlify from "@astrojs/netlify";

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind(), react(), vue(), preact()],
  output: "server",
  adapter: vercel()
});