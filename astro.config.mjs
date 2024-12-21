// @ts-check
import { defineConfig } from "astro/config"

import svelte from "@astrojs/svelte"

// https://astro.build/config
export default defineConfig({
  integrations: [svelte()],

  vite: {
    build: {
      terserOptions: {
        compress: {
          drop_console: true,
          drop_debugger: true
        }
      }
    },
    css: {
      preprocessorOptions: {
        scss: {
          api: "modern-compiler"
        }
      }
    }
  }
})
