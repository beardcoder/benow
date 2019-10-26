<template>
    <card class="article">
        <div class="image">
            <img
                :src="post.thumbnail"
                class="articleImage"
                alt="Article image"
                width="600"
                height="337"
            />
        </div>
        <div class="body">
            <h4>{{ post.title }}</h4>
            <p class="description">{{ post.description }}</p>
        </div>
        <div class="footer" style="text-align: right;">
            <nuxt-link
                :to="{ name: 'blog-slug', params: { slug: post.slug } }"
                :class="{ btn: true }"
            >
                Lesen
            </nuxt-link>
        </div>
    </card>
</template>
<script lang="ts">
    import { Component, Prop, Vue } from 'nuxt-property-decorator';
    import Card from '~/components/Card.vue';
    import { Post as PostType } from '~/types';

    @Component({
        components: {
            Card,
        },
    })
    export default class Post extends Vue {
        @Prop() post!: PostType;
    }
</script>
<style scoped>
    .image {
        position: relative;
        padding-bottom: 56.25%;
        margin-top: -1rem;
        margin-left: -1rem;
        margin-right: -1rem;
    }

    .articleImage {
        position: absolute;
        width: 100%;
        height: 100%;
        top: 0;
        left: 0;
    }

    .body {
        margin-top: 20px;
        margin-bottom: 20px;
    }

    .footer {
        margin-top: 1rem;
    }

    .description {
        font-style: italic;
    }
</style>
