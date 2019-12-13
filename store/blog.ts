import { ActionTree, MutationTree } from 'vuex';
import client from '~/plugins/contentful';
import { BlogState } from '~/types';
import { set } from '~/utils/store_utils';

export const state = (): BlogState => ({
    posts: [],
});

export const mutations: MutationTree<BlogState> = {
    setPosts: set('posts'),
};

export const actions: ActionTree<BlogState, BlogState> = {
    fetch({ commit }) {
        client
            .getEntries({
                content_type: 'post',
                order: '-sys.createdAt',
            })
            .then(response => commit('setPosts', response.items));
    },
};
