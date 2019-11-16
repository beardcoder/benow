import { GithubItem, Post } from '~/types';

export interface GithubState {
    repos: GithubItem[];
    snippets: GithubItem[];
}

export interface BlogState {
    posts: Post[];
}

export interface RootState {
    github: GithubState;
    blog: BlogState;
}
