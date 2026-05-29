import { defineCollection } from 'astro:content';
import { sveltiaLoader } from 'astro-loader-sveltia-cms/loader';

const links = defineCollection({
  loader: sveltiaLoader('links'),
});

export const collections = { links };
