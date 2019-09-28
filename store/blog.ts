import { ActionTree, MutationTree } from 'vuex';
import { Article, BlogState } from '~/types';
import { blog as blogAPI } from '~/api/blog';

export const state = (): BlogState => ({
    articles: [],
});

export const mutations: MutationTree<BlogState> = {
    setArticles(state: BlogState, articles: Article[]): void {
        state.articles = articles;
    },
};

export const actions: ActionTree<BlogState, BlogState> = {
    async fetch({ commit }) {
        return await blogAPI(this.$axios).then(data => {
            commit('setArticles', data);
        });
    },
};
