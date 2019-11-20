import { ActionTree, MutationTree } from 'vuex';
import { BlogState, Post } from '~/types';

export const state = (): BlogState => ({
    posts: [],
});

export const mutations: MutationTree<BlogState> = {
    setPosts(state: BlogState, posts: Post[]): void {
        state.posts = posts;
    },
};

export const actions: ActionTree<BlogState, BlogState> = {
    async fetch({ commit }) {
        const files = await require.context('~/assets/content/blog/', false, /\.json$/);
        const posts = files.keys().map(key => {
            const res = files(key);
            res.slug = key.slice(2, -5);
            return res;
        });

        await commit('setPosts', posts.reverse());
    },
};
