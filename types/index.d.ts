/* eslint-disable camelcase */
export * from './state';

export type GithubItem = {
    id: string;
    full_name?: string;
    description: string;
    html_url: string;
};
