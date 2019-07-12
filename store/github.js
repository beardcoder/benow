import Octokit from '@octokit/rest';

export const state = () => ({
    isLoading: {
        repos: false,
        gists: false,
    },
    data: {
        repos: [],
        gists: [],
    },
});

export const mutations = {
    addGists(state, data) {
        state.data.gists = data;
        state.isLoading.gists = false;
    },
    addRepos(state, data) {
        state.data.repos = data;
    },

    loadingGists(state) {
        state.isLoading.gists = true;
        state.data.gists = [];
    },

    loadingRepos(state) {
        state.isLoading.repos = true;
        state.data.repos = [];
    },
};

export const actions = {
    fetch({ commit }) {
        commit('loadingGists');
        commit('loadingRepos');

        const clientWithAuth = new Octokit({
            auth: 'af546dac1c7586e645262865beea708d6290c12f',
        });

        clientWithAuth.gists
            .listPublicForUser({
                username: 'beardcoder',
            })
            .then((res) => commit('addGists', res.data));

        clientWithAuth.repos
            .listForUser({
                username: 'beardcoder',
            })
            .then((res) => commit('addRepos', res.data));
    },
};

export const getters = {
    get(state) {
        return state.data;
    },
};
