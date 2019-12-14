<template>
    <card v-if="post" v-in-viewport.once class="article">
        <div class="image">
            <img
                v-lazy="post.fields.image.fields.file.url + '?fm=webp&w=600&h=337'"
                src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mP8xwQAAgQBAmXv/TkAAAAASUVORK5CYII="
                class="articleImage"
                alt="Article image"
                width="600"
                height="337"
            />
        </div>
        <div class="body">
            <h4>{{ post.fields.headline }}</h4>
            <time :datetime="post.sys.createdAt">
                {{ $dateFns.format(new Date(post.sys.createdAt), 'dd.MM.yyyy') }}
            </time>
            <p class="description">{{ post.fields.description }}</p>
        </div>
        <div class="footer">
            <nuxt-link :to="{ name: 'blog-slug', params: { slug: post.fields.slug } }" class="btn">
                Lesen
            </nuxt-link>
        </div>
    </card>
</template>
<script lang="ts">
    import { Component, Prop, Vue } from 'nuxt-property-decorator';
    import Card from '@/components/Card.vue';
    import { IPost } from '@/types/contentful';

    @Component({
        components: {
            Card,
        },
    })
    export default class Post extends Vue {
        @Prop() post: IPost | undefined;
    }
</script>
<style scoped>
    h4 {
        margin-bottom: 0;
    }

    time {
        font-size: 0.8rem;
        margin-bottom: 1.5rem;
    }

    .article {
        opacity: 1;
        transition: opacity 0.5s, transform 0.8s;
    }

    .below-viewport {
        opacity: 0;
        transform: scale3d(0.1, 0.1, 0.1);
    }

    .article.in-viewport {
        opacity: 1;
        transform: scale3d(1, 1, 1);
    }

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
