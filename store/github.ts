import { ActionTree, MutationTree } from 'vuex';
import { GithubItem, GithubState } from '~/types';
import queryFetchRepos from '~/apollo/queries/fetchRepos.graphql';

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
        // @ts-ignore
        const client = this.app.apolloProvider.defaultClient;
        return client.query({ query: queryFetchRepos }).then(({ data }) => {
            commit('setRepos', data.viewer.repositories.nodes);
            commit('setSnippets', data.viewer.gists.nodes);
        });
    },
};
