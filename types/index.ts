/* eslint-disable camelcase */
export * from './state';

export type GithubItem = {
    id: string;
    full_name?: string;
    description: string;
    html_url: string;
};

export type Article = {
    attributes: ArticleAttributes;
    html: string;
};

export type ArticleAttributes = {
    title: string;
    ctime: string;
    author: string;
    description: string;
};
