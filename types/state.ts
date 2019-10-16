import { GithubItem } from '~/types';

export interface RootState {
    github: GithubState;
}

export interface GithubState {
    repos: GithubItem[];
    snippets: GithubItem[];
}
