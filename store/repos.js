import Octokit from '@octokit/rest';

export default {
    namespaced: true,
    state: {
        isLoading: {
            repos: false,
            gists: false
        },
        data: {
            repos: [],
            gists: []
        },
    },
    mutations: {
        ['FETCHING'](state) {
            state.isLoading.repos = true;
            state.isLoading.gists = true;
        },
        ['FETCHING_GISTS_SUCCESS'](state, data) {
            state.isLoading.gists = false;
            state.data.gists = data;
        },
        ['FETCHING_REPOS_SUCCESS'](state, data) {
            state.isLoading.repos = false;
            state.data.repos = data;
        },
    },
    getters: {
        isLoading(state) {
            return state.isLoading;
        },
    },
    actions: {
        fetchData({ commit }) {
            commit('FETCHING');
            const clientWithAuth = new Octokit({
                auth: 'af546dac1c7586e645262865beea708d6290c12f',
            });

            clientWithAuth.gists.listPublicForUser({
                username: 'beardcoder',
            }).then(res => commit('FETCHING_GISTS_SUCCESS', res.data));

            clientWithAuth.repos.listForUser({
                username: 'beardcoder',
            }).then(res => commit('FETCHING_REPOS_SUCCESS', res.data));
        },
    },
};
