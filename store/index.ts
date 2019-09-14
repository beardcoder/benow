import { MutationTree, ActionTree } from 'vuex';
import { RootState, GithubItem } from '~/types';
const auth = 'af546dac1c7586e645262865beea708d6290c12f';
const username = 'beardcoder';

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
    async nuxtServerInit({ commit }, context) {
        let repos: GithubItem[] = [];
        let snippets: GithubItem[] = [];

        // @ts-ignore
        repos = await this.$axios
            .$get(`https://api.github.com/users/${username}/repos`, {
                headers: {
                    Authorization: `token ${auth}`,
                    'Content-Type': 'application/json',
                },
            })
            .then((data: any[]) => {
                // Only get non forked repos
                const resReduce = data.filter((item: GithubItem | any) => {
                    return !item.fork;
                });

                return resReduce.map((item: GithubItem) => {
                    return {
                        id: item.id,
                        description: item.description,
                        full_name: item.full_name,
                        html_url: item.html_url,
                    };
                });
            });

        // @ts-ignore
        snippets = await this.$axios
            .$get(`https://api.github.com/users/${username}/gists`, {
                headers: {
                    Authorization: `token ${auth}`,
                    'Content-Type': 'application/json',
                },
            })
            .then((data: any[]) =>
                data.map((item: GithubItem) => {
                    return {
                        id: item.id,
                        description: item.description,
                        html_url: item.html_url,
                    };
                }),
            );

        commit('setRepos', repos);
        commit('setSnippets', snippets);
    },
};
