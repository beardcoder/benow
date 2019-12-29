/* eslint-disable camelcase */
export * from './contentful';

export type GithubItem = {
    id: string;
    full_name?: string;
    description: string;
    html_url: string;
};
