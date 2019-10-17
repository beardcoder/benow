<template>
    <card class="article">
        <div
            class="image"
            :style="
                `background-color: ${
                    require(`~/assets/images/articles/${article.slug}/thumbnail.jpg?lqip-colors`)[0]
                }`
            "
        >
            <img
                v-lazy="require(`~/assets/images/articles/${article.slug}/thumbnail.jpg?webp`)"
                src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAlgAAAFRCAQAAAACiBsCAAADSklEQVR42u3UMQ0AAAzDsJU/6SEogEo2hBzJAYyIBIBhARgWYFgAhgVgWIBhARgWgGEBhgVgWACGBRgWgGEBGBZgWACGBWBYgGEBGBaAYQGGBWBYAIYFGBaAYQEYFmBYAIYFGBaAYQEYFmBYAIYFYFiAYQEYFoBhAYYFYFgAhgUYFoBhARgWYFgAhgVgWIBhARgWgGEBhgVgWACGBRgWgGEBGBZgWACGBRgWgGEBGBZgWACGBWBYgGEBGBaAYQGGBWBYAIYFGBaAYQEYFmBYAIYFYFiAYQEYFoBhAYYFYFgAhgUYFoBhARgWYFgAhgUYFoBhARgWYFgAhgVgWIBhARgWgGEBhgVgWACGBRgWgGEBGBZgWACGBWBYgGEBGBaAYQGGBWBYAIYFGBaAYQEYFmBYAIYFGBaAYQEYFmBYAIYFYFiAYQEYFoBhAYYFYFgAhgUYFoBhARgWYFgAhgVgWIBhARgWgGEBhgVgWACGBRgWgGEBGBZgWACGBRgWgGEBGBZgWACGBWBYgGEBGBaAYQGGBWBYAIYFGBaAYQEYFmBYAIYFYFiAYQEYFoBhAYYFYFgAhgUYFoBhARgWYFgAhgUYFoBhARgWYFgAhgVgWIBhARgWgGEBhgVgWACGBRgWgGEBGBZgWACGBWBYgGEBGBaAYQGGBWBYAIYFGBaAYQEYFmBYAIYFGBaAYQEYFmBYAIYFYFiAYQEYFoBhAYYFYFgAhgUYFoBhARgWYFgAhgVgWIBhARgWgGEBhgVgWACGBRgWgGEBGBZgWACGBRgWgGEBGBZgWACGBWBYgGEBGBaAYQGGBWBYAIYFGBaAYQEYFmBYAIYFYFiAYQEYFoBhAYYFYFgAhgUYFoBhAYYlAWBYAIYFGBaAYQEYFmBYAIYFYFiAYQEYFoBhAYYFYFgAhgUYFoBhARgWYFgAhgVgWIBhARgWgGEBhgVgWACGBRgWgGEBhgVgWACGBRgWgGEBGBZgWACGBWBYgGEBGBaAYQGGBWBYAIYFGBaAYQEYFmBYAIYFYFiAYQEYFoBhAYYFYFgAhgUYFoBhAYYFYFgAhgUYFoBhARgWYFgAhgVgWIBhARgWgGEBhgVgWACGBRgWgGEBGBZgWACGBVA8IDABUgzSsTgAAAAASUVORK5CYII="
                class="articleImage"
                alt="Article image"
                width="600"
                height="337"
            />
        </div>
        <div class="body">
            <h4>{{ article.content.attributes.title }}</h4>
            <p class="description">{{ article.content.attributes.description }}</p>
        </div>
        <div class="footer" style="text-align: right">
            <nuxt-link
                :to="{ name: 'article-slug', params: { slug: article.slug } }"
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
    import { Article } from '~/types';

    @Component({
        components: {
            Card,
        },
    })
    export default class Index extends Vue {
        @Prop() article!: {
            slug: string;
            content: Article;
        };
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
