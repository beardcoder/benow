<template>
    <div v-if="post" :key="$route.params.slug" class="container">
        <blog-header :post="post" />
        <div class="main">
            <article class="article">
                <shape direction="left" />
                <h1>{{ post.fields.headline }}</h1>
                <div class="subtitle">
                    Veröffentlicht am
                    <time :datetime="post.sys.createdAt">
                        {{ new Date(post.sys.createdAt).toLocaleDateString() }}
                    </time>
                    von Markus Sommer
                    <br />
                    Letzte Änderung
                    <time :datetime="post.sys.updatedAt">
                        {{ new Date(post.sys.updatedAt).toLocaleDateString() }}
                    </time>
                </div>
                <p class="description">{{ post.fields.description }}</p>
                <div v-html="$md(post.fields.articleBody)"></div>
                <shape direction="right" bottom />
            </article>
        </div>
        <p-footer>
            <back-link class="backLink--footer" />
        </p-footer>
    </div>
</template>

<script lang="ts">
    import { createComponent } from '@vue/composition-api';
    import personSchema from '@/utils/schema/person';
    import organizationSchema from '@/utils/schema/organization';
    import Shape from '@/components/Shape.vue';
    import BackLink from '@/components/BackLink.vue';
    import BlogHeader from '@/components/BlogHeader.vue';
    import PFooter from '@/components/PFooter.vue';

    export default createComponent({
        components: {
            Shape,
            BackLink,
            BlogHeader,
            PFooter,
        },

        setup() {},

        data() {
            return {
                post: {},
            };
        },

        head() {
            return {
                title: this.post.fields.headline,
                meta: [
                    {
                        hid: 'description',
                        name: 'description',
                        content: this.post.fields.description,
                    },
                ],
                link: [
                    {
                        hid: 'canonical',
                        rel: 'canonical',
                        href: 'https://creativeworkspace.de/blog/' + this.$route.params.slug + '/',
                    },
                ],
            };
        },

        jsonld() {
            return {
                '@context': 'http://schema.org',
                '@type': 'BlogPosting',
                headline: this.post.fields.headline,
                description: this.post.fields.description,
                datePublished: this.post.sys.createdAt,
                dateModified: this.post.sys.updatedAt,
                author: personSchema,
                publisher: organizationSchema,
                mainEntityOfPage:
                    'https://creativeworkspace.de/blog/' + this.$route.params.slug + '/',
                image: [this.post.fields.image.fields.file.url + '?fm=webp'],
            };
        },

        async asyncData(context) {
            const { $axios, $payloadURL, route, params } = context;
            if (process.static && process.client && $payloadURL) {
                const payload = await $axios.$get($payloadURL(route));
                return payload;
            }

            const post = await import(`@/.content/blog/${params.slug}.json`);
            return { post: { ...post } };
        },
    });
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
