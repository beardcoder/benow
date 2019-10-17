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
        max-width: 1440px;
        margin: 100px auto;
        padding-left: 1rem;
        padding-right: 1rem;
    }

    @media (min-width: 768px) {
        .articles {
            display: grid;
            grid-template-columns: 1fr 1fr 1fr;
            grid-template-rows: 1fr;
            grid-template-areas: '. . .';
            grid-gap: 2rem;
        }
    }

    .blogHeader {
        text-align: center;
    }
</style>
