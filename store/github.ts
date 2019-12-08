import { ActionTree, MutationTree } from 'vuex';
import { repos as reposAPI, snippets as snippetsAPI } from '~/api/github';
import { GithubState } from '~/types';
import { set } from '~/utils/store_utils';

export const state = (): GithubState => ({
    repos: [],
    snippets: [],
});

export const mutations: MutationTree<GithubState> = {
    setRepos: set('repos'),
    setSnippets: set('snippets'),
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
