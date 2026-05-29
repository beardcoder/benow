import { defineConfig } from 'astro/config';
import sveltia from 'astro-loader-sveltia-cms';

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
  integrations: [
    sveltia({
      route: '/admin',
      title: 'letsbenow CMS',
      config: {
        backend: {
          name: 'github',
          repo: 'beardcoder/benow',
          branch: 'main',
          // Nach Worker-Deployment ersetzen: https://sveltia-cms-auth.<SUBDOMAIN>.workers.dev
          base_url: 'https://letsbenow.de',
        },
        media_folder: 'public/media',
        public_folder: '/media',
        collections: [
          {
            name: 'links',
            label: 'Links',
            label_singular: 'Link',
            folder: 'src/content/links',
            create: true,
            extension: 'yaml',
            format: 'yaml',
            sortable_fields: ['order', 'label'],
            fields: [
              { label: 'Label', name: 'label', widget: 'string' },
              { label: 'Sublabel', name: 'sublabel', widget: 'string', required: false },
              { label: 'URL', name: 'url', widget: 'string' },
              { label: 'Icon', name: 'icon', widget: 'string' },
              {
                label: 'Kategorie',
                name: 'category',
                widget: 'select',
                options: [
                  { label: 'Primär', value: 'primary' },
                  { label: 'Social', value: 'social' },
                  { label: 'Kontakt', value: 'connect' },
                  { label: 'Praxis & Spiel', value: 'spirit' },
                ],
              },
              { label: 'Akzentfarbe', name: 'accent', widget: 'color' },
              { label: 'Featured', name: 'featured', widget: 'boolean', default: false, required: false },
              { label: 'Reihenfolge', name: 'order', widget: 'number', default: 99, required: false },
            ],
          },
          {
            name: 'settings',
            label: 'Einstellungen',
            files: [
              {
                name: 'profile',
                label: 'Profil',
                file: 'src/data/profile.json',
                fields: [
                  { label: 'Name', name: 'name', widget: 'string' },
                  { label: 'Handle', name: 'handle', widget: 'string' },
                  { label: 'Tagline', name: 'tagline', widget: 'text' },
                  { label: 'Location', name: 'location', widget: 'string' },
                  { label: 'Initialen', name: 'initials', widget: 'string' },
                  { label: 'Footer Statement', name: 'footerStatement', widget: 'text' },
                  { label: 'Claim Lines', name: 'claim', widget: 'list' },
                ],
              },
            ],
          },
        ],
      },
    }),
  ],

  adapter: cloudflare()
});
