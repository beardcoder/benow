/* eslint-disable camelcase */
export * from './state';

export type GithubItem = {
    id: string;
    full_name?: string;
    description: string;
    html_url: string;
};

export type Article = {
    type_of: string;
    id: number;
    title: string;
    description: string;
    cover_image: string;
    published_at: string;
    tag_list: string[];
    slug: string;
    path: string;
    url: string;
    canonical_url: string;
    comments_count: number;
    positive_reactions_count: number;
    published_timestamp: string;
    user: {};
};
