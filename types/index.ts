/* eslint-disable camelcase */
export * from './state';

export type GithubItem = {
    id: string;
    full_name?: string;
    description: string;
    html_url: string;
};

export type Post = {
    title: string;
    date: string;
    description: string;
    author: string;
    image: string;
    body: string;
    slug: string;
};
