import { Article, GithubItem } from '~/types';

export interface RootState {
    repos: GithubItem[];
    snippets: GithubItem[];
    articles: Article[];
}
