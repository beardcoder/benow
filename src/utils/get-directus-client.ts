import { Directus } from "@directus/sdk";

import type { Field, ID } from "@directus/sdk";

export type Article = {
  id: ID;
  image: string;
  status: Field;
  sort: number;
  date_created: Field;
  date_updated: Field;
  title: Field;
  slug: Field;
  tags?: string[];
  content: Field;
};
export type Home = {
  id: ID;
  title: Field;
  image: Field;
  avatar: Field;
  about_title: Field;
  about_text: Field;
};
export type Project = {
  id: ID;
  image: Field;
  status: Field;
  sort: number;
  date_created: Field;
  name: Field;
  url?: Field;
  keywords?: string[];
};

export type DirectusApi = {
  articles: Article;
  home: Home;
  projects: Project;
};

export const getDirectusClient = async () => {
  const directus = new Directus<DirectusApi>(
    import.meta.env.PUBLIC_DIRECTUS_URL
  );

  if (await directus.auth.token) return directus;

  if (import.meta.env.DIRECTUS_EMAIL && import.meta.env.DIRECTUS_PASSWORD) {
    await directus.auth.login({
      email: import.meta.env.DIRECTUS_EMAIL,
      password: import.meta.env.DIRECTUS_PASSWORD,
    });
  } else if (import.meta.env.DIRECTUS_STATIC_TOKEN) {
    await directus.auth.static(import.meta.env.DIRECTUS_STATIC_TOKEN);
  }

  return directus;
};
