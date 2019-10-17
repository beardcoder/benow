<template>
    <card class="article">
        <div class="header">
            <img
                v-lazy="require(`~/assets/images/articles/${article.slug}/thumbnail.jpg`)"
                class="articleImage"
                alt="Article image"
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
    .article {
        margin: 1rem;
    }

    @media (min-width: 768px) {
        .article {
            max-width: calc(33% - 2rem);
        }
    }

    .header {
        position: relative;
        margin-top: -1rem;
        margin-left: -1rem;
        margin-right: -1rem;
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
