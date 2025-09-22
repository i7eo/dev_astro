// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from "@tailwindcss/vite";
import vue from '@astrojs/vue';

// https://astro.build/config
export default defineConfig({
  site: 'https://chipper-cobbler-26f941.netlify.app',
  prefetch: true,

  vite: {
    plugins: [tailwindcss()],
  },

  integrations: [vue({jsx: true})],

  experimental: {
    clientPrerender: true,
    preserveScriptOrder: true
  },
});