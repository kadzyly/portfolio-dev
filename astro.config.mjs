// @ts-check
import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";
import react from "@astrojs/react";
import mdx from "@astrojs/mdx";

// https://astro.build/config
export default defineConfig({
  site: "https://kadzyly.github.io",
  base: import.meta.env.MODE === "production" ? "/portfolio-dev" : "/" ,
  trailingSlash: "always",
  integrations: [react(), mdx()],
  vite: {
    plugins: [
      tailwindcss()
    ],
    resolve: {
      alias: {
        '@/': new URL('./src/', import.meta.url).pathname
      },
    },
  },
});
