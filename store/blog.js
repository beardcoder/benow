export const state = () => ({
    posts: [],
});

export const mutations = {
    setPosts(state, posts) {
        state.posts = posts;
    },
};

export const actions = {
    async fetch({ commit }) {
        const files = await require.context('~/assets/content/blog/', false, /\.json$/);
        const posts = files.keys().map(key => {
            const res = files(key);
            res.slug = key.slice(2, -5);
            return res;
        });
        await commit('setPosts', posts);
    },
};
