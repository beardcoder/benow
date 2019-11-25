/* eslint-disable camelcase */
export * from './state';

export type GithubItem = {
    id: string;
    name?: string;
    description: string;
    url: string;
};

export type Post = {
    title: string;
    date: string;
    description: string;
    author: string;
    image: string;
    thumbnail: string;
    body: string;
    slug: string;
};
