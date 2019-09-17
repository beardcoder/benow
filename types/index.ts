export * from './state';

export type GithubItem = {
    id: string;
    full_name?: string;
    description: string;
    html_url: string;
};

export type Article = {
    created_on: string;
    headline: string;
    author: string;
    description: string;
    image: string;
    articlebody: string;
    id: string;
    slug: string;
    status: string;
    date_published: string;
};
