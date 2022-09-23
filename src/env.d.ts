/// <reference types="astro/client" />

interface ImportMetaEnv {
  readonly PUBLIC_DIRECTUS_URL: string
  readonly DIRECTUS_STATIC_TOKEN: string
  // more env variables...
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}
