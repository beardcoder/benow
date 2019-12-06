/* eslint-disable camelcase */
export * from '../typings/state';

export type GithubItem = {
    id: string;
    full_name?: string;
    description: string;
    html_url: string;
};

export type Post = {
    fields: {
        headline: string;
        slug: string;
        description: string;
        image: {};
        articleBody: string;
    };
    sys: {};
};
