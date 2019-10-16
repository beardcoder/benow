<template>
    <div :key="$route.params.post" class="container">
        <blog-header :slug="slug" />
        <div class="main">
            <article class="article">
                <shape direction="left" />
                <h1>{{ attributes.title }}</h1>
                <div class="subtitle">
                    Veröffentlicht am {{ attributes.ctime }} von {{ attributes.author }}
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
    import 'highlight.js/styles/a11y-dark.css';
    import PFooter from '~/components/PFooter.vue';
    import PHeader from '~/components/PHeader.vue';
    import BlogHeader from '~/components/BlogHeader.vue';
    import BackLink from '~/components/BackLink.vue';
    import Shape from '~/components/Shape.vue';

    hljs.registerLanguage('javascript', javascript);
    hljs.registerLanguage('css', css);
    hljs.registerLanguage('xml', yaml);
    hljs.registerLanguage('bash', bash);

    @Component({
        components: { Shape, BackLink, BlogHeader, PHeader, PFooter },
        transition: 'slide-left',
    })
    export default class Index extends Vue {
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
