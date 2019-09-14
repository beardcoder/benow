import { GithubItem } from '~/types';

export interface RootState {
    repos: GithubItem[];
    snippets: GithubItem[];
}
