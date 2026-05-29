export type LinkCategory = 'primary' | 'social' | 'connect' | 'spirit';

export interface LinkItem {
  id: string;
  label: string;
  sublabel?: string;
  url: string;
  icon: string;
  category: LinkCategory;
  accent: string;
  featured?: boolean;
  order?: number;
}
// Content is managed via Sveltia CMS — see src/content/links/*.yaml
