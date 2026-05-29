import { defineConfig } from 'astro/config';

import cloudflare from "@astrojs/cloudflare";

export default defineConfig({
  site: 'https://letsbenow.de',
  output: 'static',
  compressHTML: true,

  build: {
    inlineStylesheets: 'auto',
  },

  prefetch: {
    prefetchAll: false,
  },

  adapter: cloudflare()
});