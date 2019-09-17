<template>
    <div class="blog">
        <h3>Blog</h3>
        <ul class="articles">
            <li v-for="article in articles" :key="article.id">
                {{ article.headline }}
            </li>
        </ul>
    </div>
</template>

<script lang="ts">
    import Vue from 'vue';
    import { mapState } from 'vuex';
    import { RootState } from '~/types';

    export default Vue.extend({
        name: 'Blog',
        computed: {
            ...mapState({
                articles: (state: RootState) => state.articles,
            }),
        },
    });
</script>

<style scoped>
    .blog {
        margin-top: 100px;
    }
</style>
