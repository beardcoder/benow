const Octokit = process.server ? require('@octokit/rest') : undefined;

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
        state.data.repos = data.filter((item) => {
            return item.fork === false;
        });
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
    fetchGists() {
        const clientWithAuth = new Octokit({
            auth: 'af546dac1c7586e645262865beea708d6290c12f',
        });

        return clientWithAuth.gists
            .listPublicForUser({
                username: 'beardcoder',
            })
            .then((res) => res.data);
    },

    fetchRepos() {
        const clientWithAuth = new Octokit({
            auth: 'af546dac1c7586e645262865beea708d6290c12f',
        });

        return clientWithAuth.repos
            .listForUser({
                username: 'beardcoder',
            })
            .then((res) => res.data);
    },
};

export const getters = {
    get(state) {
        return state.data;
    },
};
