import { ActionTree, MutationTree } from 'vuex';
import { GithubItem, GithubState } from '~/types';
import { repos as reposAPI, snippets as snippetsAPI } from '~/api/github';

export const state = (): GithubState => ({
    repos: [],
    snippets: [],
});

export const mutations: MutationTree<GithubState> = {
    setRepos(state: GithubState, repos: GithubItem[]): void {
        state.repos = repos;
    },

    setSnippets(state: GithubState, snippets: GithubItem[]): void {
        state.snippets = snippets;
    },
};

export const actions: ActionTree<GithubState, GithubState> = {
    fetch({ commit }) {
        return Promise.all([
            reposAPI(this.$axios).then((data: any) => {
                commit('setRepos', data);
            }),
            snippetsAPI(this.$axios).then((data: any) => {
                commit('setSnippets', data);
            }),
        ]);
    },
};
