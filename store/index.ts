import { ActionTree, MutationTree } from 'vuex';
import { Article, GithubItem, RootState } from '~/types';
import { repos as reposAPI, snippets as snippetsAPI } from '~/api/github';
import { blog as blogAPI } from '~/api/blog';

export const state = (): RootState => ({
    repos: [],
    snippets: [],
    articles: [],
});

export const mutations: MutationTree<RootState> = {
    setRepos(state: RootState, repos: GithubItem[]): void {
        state.repos = repos;
    },

    setSnippets(state: RootState, snippets: GithubItem[]): void {
        state.snippets = snippets;
    },

    setBlog(state: RootState, articles: Article[]): void {
        state.articles = articles;
    },
};

export const actions: ActionTree<RootState, RootState> = {
    fetchGithub({ commit }) {
        return Promise.all([
            reposAPI(this.$axios).then((data: any) => {
                commit('setRepos', data);
            }),
            snippetsAPI(this.$axios).then((data: any) => {
                commit('setSnippets', data);
            }),
        ]);
    },

    fetchBlog({ commit }) {
        return blogAPI().then(data => {
            commit('setBlog', data);
        });
    },
};
