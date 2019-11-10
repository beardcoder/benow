<template>
    <div :key="$route.params.slug" class="container">
        <blog-header :post="post" />
        <div class="main">
            <article class="article">
                <shape direction="left" />
                <h1>{{ post.title }}</h1>
                <div class="subtitle">
                    Veröffentlicht am
                    {{ $dateFns.format(new Date(post.date), 'dd.MM.yyyy') }} von
                    {{ post.author }}
                </div>
                <p class="description">{{ post.description }}</p>
                <div v-html="$md.render(post.body)"></div>
                <shape direction="right" bottom />
            </article>
        </div>
        <lazy-hydrate when-visible>
            <p-footer>
                <back-link class="backLink--footer" />
            </p-footer>
        </lazy-hydrate>
    </div>
</template>

<script lang="ts">
    import LazyHydrate from 'vue-lazy-hydration';
    import { Component, Vue } from 'nuxt-property-decorator';
    import 'highlight.js/styles/a11y-dark.css';
    import BackLink from '~/components/BackLink.vue';
    import Shape from '~/components/Shape.vue';
    import { Jsonld } from '~/node_modules/nuxt-jsonld';
    import { Post } from '~/types';
    import personSchema from '~/utils/schema/person';
    import organizationSchema from '~/utils/schema/organization';

    @Jsonld
    @Component({
        components: {
            LazyHydrate,
            Shape,
            BackLink,
            BlogHeader: () => import('~/components/BlogHeader.vue'),
            PHeader: () => import('~/components/PHeader.vue'),
            PFooter: () => import('~/components/PFooter.vue'),
        },
        transition: 'page',
    })
    export default class Index extends Vue {
        head() {
            return {
                title: this.post.title,
                meta: [
                    {
                        hid: 'description',
                        name: 'description',
                        content: this.post.description,
                    },
                ],
                link: [
                    {
                        hid: 'canonical',
                        rel: 'canonical',
                        href: 'https://creativeworkspace.de/post/' + this.post.slug,
                    },
                ],
            };
        }

        jsonld() {
            return {
                '@context': 'http://schema.org',
                '@type': 'BlogPosting',
                headline: this.post.title,
                description: this.post.description,
                datePublished: this.post.date,
                dateModified: this.post.date,
                author: personSchema,
                publisher: organizationSchema,
                mainEntityOfPage: 'https://creativeworkspace.de/blog/' + this.post.slug,
                image: ['https://creativeworkspace.de' + this.post.image],
            };
        }

        post!: Post;

        async asyncData({ params, payload }) {
            if (payload) return { post: payload };
            else
                try {
                    const post = await require(`~/assets/content/blog/${params.slug}.json`);
                    return { post };
                } catch (e) {
                    console.error(e);
                }
        }
    }
</script>

<style scoped>
    .backLink--footer {
        bottom: auto;
        top: -60px;
    }

    .main {
        position: relative;
        z-index: 20;
        overflow: hidden;
        padding-bottom: 100px;
    }

    @media (min-width: 768px) {
        .article {
            padding: 100px 1rem 0;
        }
    }

    .article {
        max-width: 800px;
        margin: 0 auto;
        position: relative;
        padding: 60px 1rem 0;
    }

    .article h1 {
        font-size: 2.5rem;
        margin-bottom: 1rem;
    }

    @media (min-width: 768px) {
        .article h1 {
            font-size: 3rem;
        }
    }

    .article h3 {
        margin-top: 3rem;
        margin-bottom: 1rem;
    }

    .description {
        margin-bottom: 50px;
        font-style: italic;
    }
</style>

<style>
    code {
        font-size: 0.9rem;
    }
</style>
