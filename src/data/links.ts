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
}

export const links: LinkItem[] = [
  {
    id: 'portfolio',
    label: 'Portfolio',
    sublabel: 'Arbeiten & Projekte',
    url: 'https://markussommer.de',
    icon: 'portfolio',
    category: 'primary',
    accent: '#f7c873',
    featured: true,
  },
  {
    id: 'calendar',
    label: 'Termin buchen',
    sublabel: '30 Min · Kennenlernen',
    url: 'https://cal.com/letsbenow',
    icon: 'calendar',
    category: 'primary',
    accent: '#9eead6',
    featured: true,
  },
  {
    id: 'email',
    label: 'E-Mail',
    sublabel: 'hello@letsbenow.de',
    url: 'mailto:hello@letsbenow.de',
    icon: 'mail',
    category: 'connect',
    accent: '#c8b6ff',
  },
  {
    id: 'instagram',
    label: 'Instagram',
    sublabel: '@letsbenow',
    url: 'https://instagram.com/letsbenow',
    icon: 'instagram',
    category: 'social',
    accent: '#ff8fb1',
  },
  {
    id: 'linkedin',
    label: 'LinkedIn',
    sublabel: 'Markus Sommer',
    url: 'https://linkedin.com/in/markussommer',
    icon: 'linkedin',
    category: 'social',
    accent: '#7cc4ff',
  },
  {
    id: 'github',
    label: 'GitHub',
    sublabel: 'Code & Open Source',
    url: 'https://github.com/letsbenow',
    icon: 'github',
    category: 'social',
    accent: '#e7e2d8',
  },
  {
    id: 'yoga',
    label: 'Yoga & Breathwork',
    sublabel: 'Klassen · Retreats',
    url: 'https://letsbenow.de/yoga',
    icon: 'lotus',
    category: 'spirit',
    accent: '#ffb88c',
  },
  {
    id: 'larp',
    label: 'LARP',
    sublabel: 'Charaktere & Welten',
    url: 'https://letsbenow.de/larp',
    icon: 'sword',
    category: 'spirit',
    accent: '#b8a4ff',
  },
];
