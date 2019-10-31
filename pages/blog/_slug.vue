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
                <div class="blog-content content" v-html="$md.render(post.body)"></div>
                <shape direction="right" bottom />
            </article>
        </div>
        <p-footer>
            <back-link class="backLink--footer" />
        </p-footer>
    </div>
</template>

<script lang="ts">
    import { Component, Vue } from 'nuxt-property-decorator';
    import hljs from 'highlight.js/lib/highlight';
    import javascript from 'highlight.js/lib/languages/javascript';
    import css from 'highlight.js/lib/languages/css';
    import yaml from 'highlight.js/lib/languages/yaml';
    import bash from 'highlight.js/lib/languages/bash';
    import php from 'highlight.js/lib/languages/php';
    import xml from 'highlight.js/lib/languages/xml';
    import plaintext from 'highlight.js/lib/languages/plaintext';
    import 'highlight.js/styles/a11y-dark.css';
    import PFooter from '~/components/PFooter.vue';
    import PHeader from '~/components/PHeader.vue';
    import BlogHeader from '~/components/BlogHeader.vue';
    import BackLink from '~/components/BackLink.vue';
    import Shape from '~/components/Shape.vue';
    import { Jsonld } from '~/node_modules/nuxt-jsonld';
    import { Post } from '~/types';
    import personSchema from '~/utils/schema/person';
    import organizationSchema from '~/utils/schema/organization';

    hljs.registerLanguage('javascript', javascript);
    hljs.registerLanguage('css', css);
    hljs.registerLanguage('yaml', yaml);
    hljs.registerLanguage('xml', xml);
    hljs.registerLanguage('php', php);
    hljs.registerLanguage('plaintext', plaintext);
    hljs.registerLanguage('bash', bash);

    @Jsonld
    @Component({
        components: { Shape, BackLink, BlogHeader, PHeader, PFooter },
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

        initHighlightJs() {
            const targets = document.querySelectorAll('code');
            targets.forEach(target => {
                hljs.highlightBlock(target);
            });
        }

        mounted() {
            this.initHighlightJs();
        }

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
