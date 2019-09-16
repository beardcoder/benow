import { MutationTree, ActionTree } from 'vuex';
import { RootState, GithubItem } from '~/types';
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
        // @ts-ignore
        const repos: GithubItem[] = await reposAPI(this.$axios);

        // @ts-ignore
        const snippets: GithubItem[] = await snippetsAPI(this.$axios);

        commit('setRepos', repos);
        commit('setSnippets', snippets);
    },
};
