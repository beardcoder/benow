import { Article, GithubItem } from '~/types';

export interface RootState {
    github: GithubState;
    blog: BlogState;
}

export interface GithubState {
    repos: GithubItem[];
    snippets: GithubItem[];
}

export interface BlogState {
    articles: Article[];
}
