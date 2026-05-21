import { defineConfig } from 'astro/config';

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
});
