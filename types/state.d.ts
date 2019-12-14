import { GithubItem } from '@/types';

import { IPost } from './contentful';

export interface GithubState {
    repos: GithubItem[];
    snippets: GithubItem[];
}

export interface BlogState {
    posts: IPost[];
}

export interface RootState {
    github: GithubState;
    blog: BlogState;
}
