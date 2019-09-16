import { ActionTree, MutationTree } from 'vuex';
import { GithubItem, RootState } from '~/types';
import { repos as reposAPI, snippets as snippetsAPI } from '~/api/github';

export const state = (): RootState => ({
    repos: [],
    snippets: [],
});

export const mutations: MutationTree<RootState> = {
    setRepos(state: RootState, repos: GithubItem[]): void {
        state.repos = repos;
    },

    setSnippets(state: RootState, snippets: GithubItem[]): void {
        state.snippets = snippets;
    },
};

export const actions: ActionTree<RootState, RootState> = {
    async fetchGithub({ commit }) {
        const repos: GithubItem[] = await reposAPI(this.$axios);
        const snippets: GithubItem[] = await snippetsAPI(this.$axios);

        commit('setRepos', repos);
        commit('setSnippets', snippets);
    },
};
