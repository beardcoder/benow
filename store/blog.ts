import { ActionTree, MutationTree } from 'vuex';
import { BlogState } from '~/typings';
import { IPost } from '~/typings/contentful';
import client from '~/plugins/contentful';

export const state = (): BlogState => ({
    posts: [],
});

export const mutations: MutationTree<BlogState> = {
    setPosts(state: BlogState, posts: IPost[]): void {
        state.posts = posts;
    },
};

export const actions: ActionTree<BlogState, BlogState> = {
    async fetch({ commit }) {
        const response = await client.getEntries({
            content_type: 'post',
            order: '-sys.createdAt',
        });

        commit('setPosts', response.items);
    },
};
