import { repos as reposAPI, snippets as snippetsAPI } from '~/api/github';

export const state = () => ({
    repos: [],
    snippets: [],
});

export const mutations = {
    setRepos(state, repos) {
        state.repos = repos;
    },

    setSnippets(state, snippets) {
        state.snippets = snippets;
    },
};

export const actions = {
    fetch({ commit }) {
        return Promise.all([
            reposAPI(this.$axios).then(data => {
                commit('setRepos', data);
            }),
            snippetsAPI(this.$axios).then(data => {
                commit('setSnippets', data);
            }),
        ]);
    },
};
