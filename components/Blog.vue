<template>
    <div id="blog" class="blog">
        <h3 class="blogHeader">Blog</h3>
        <div class="articles">
            <blog-article v-for="article in articles" :key="article.id" :article="article" />
        </div>
    </div>
</template>

<script lang="ts">
    import { Component, Prop, Vue } from 'nuxt-property-decorator';
    import { Article } from '~/types';
    import BlogArticle from '~/components/BlogArticle.vue';

    @Component({
        components: { BlogArticle },
    })
    export default class Blog extends Vue {
        @Prop() articles!: {
            slug: string;
            content: Article;
        }[];
    }
</script>

<style scoped>
    .blog {
        margin-top: 100px;
    }

    @media (min-width: 768px) {
        .articles {
            display: flex;
            flex-basis: 33%;
        }
    }

    .blogHeader {
        text-align: center;
    }
</style>
