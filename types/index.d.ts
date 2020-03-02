/* eslint-disable camelcase */
export * from './post';

export type GithubItem = {
    id: number | string;
    full_name?: string;
    description: string | null;
    html_url: string;
};
