<template>
    <div id="blog" class="blog">
        <h3 class="blog__header">Blog</h3>
        <div class="articles">
            <post v-for="(post, index) in posts" :key="index" :post="post" />
        </div>
    </div>
</template>

<script lang="ts">
    import { Component, Prop, Vue } from 'nuxt-property-decorator';
    import { Post as PostType } from '~/types';
    import Post from '~/components/Post.vue';

    @Component({
        components: { Post },
    })
    export default class Blog extends Vue {
        @Prop() posts!: PostType[];
    }
</script>

<style scoped>
    .blog {
        max-width: 1440px;
        margin: 100px auto;
        padding-left: 1rem;
        padding-right: 1rem;
    }

    .articles {
        display: grid;
        grid-template-columns: 1fr;
        grid-template-rows: 1fr;
        grid-template-areas: '.';
        grid-gap: 2rem;
    }

    @media (min-width: 768px) {
        .articles {
            grid-template-columns: 1fr 1fr 1fr;
            grid-template-rows: 1fr;
            grid-template-areas: '. . .';
        }
    }

    .blog__header {
        text-align: center;
    }
</style>
