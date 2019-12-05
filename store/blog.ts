import { ActionTree, MutationTree } from 'vuex';
import client from '../plugins/contentful';
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
        const response = await client.getEntries({
            content_type: 'post',
            order: '-sys.createdAt',
        });

        await commit('setPosts', response.items);
    },
};
