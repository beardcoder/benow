<template>
    <div :key="$route.params.post" class="container">
        <blog-header :slug="slug" />
        <div class="main">
            <article class="article">
                <shape direction="left" />
                <h1>{{ attributes.title }}</h1>
                <div class="subtitle">
                    Veröffentlicht am
                    {{ new Date(attributes.datePublished).toLocaleDateString() }} von
                    {{ attributes.author }}
                </div>
                <p class="description">{{ attributes.description }}</p>
                <div class="blog-content content" v-html="content"></div>
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
    import { ArticleAttributes } from '~/types';
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
        transition: 'slide-left',
    })
    export default class Index extends Vue {
        head() {
            return {
                title: this.attributes.title,
                meta: [
                    {
                        hid: 'description',
                        name: 'description',
                        content: this.attributes.description,
                    },
                ],
                link: [
                    {
                        hid: 'canonical',
                        rel: 'canonical',
                        href: 'https://creativeworkspace.de/article/' + this.slug,
                    },
                ],
            };
        }

        jsonld() {
            return {
                '@context': 'http://schema.org',
                '@type': 'BlogPosting',
                headline: this.attributes.title,
                description: this.attributes.description,
                datePublished: this.attributes.datePublished,
                dateModified: this.attributes.datePublished,
                author: personSchema,
                publisher: organizationSchema,
                mainEntityOfPage: 'https://creativeworkspace.de/article/' + this.slug,
                image: [
                    'https://creativeworkspace.de' +
                        require(`~/assets/images/articles/${this.slug}/full.jpg?webp`),
                ],
            };
        }

        attributes!: ArticleAttributes;
        slug!: string;

        initHighlightJs() {
            const targets = document.querySelectorAll('code');
            targets.forEach(target => {
                hljs.highlightBlock(target);
            });
        }

        mounted() {
            this.initHighlightJs();
        }

        async asyncData({ params }) {
            try {
                const fileContent = await import(`~/content/articles/${params.slug}.md`);
                return {
                    attributes: fileContent.attributes,
                    content: fileContent.html,
                    slug: params.slug,
                };
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

    .article {
        max-width: 800px;
        margin: 0 auto;
        position: relative;
        padding: 100px 1rem 0;
    }

    .article h1 {
        font-size: 3rem;
        margin-bottom: 1rem;
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
