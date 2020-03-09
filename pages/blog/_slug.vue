<template>
    <div v-if="post" :key="$route.params.slug" class="container">
        <blog-header :post="post" />
        <div class="main">
            <article class="article">
                <shape direction="left" />
                <h1>{{ post.attributes.title }}</h1>
                <div class="subtitle">
                    Veröffentlicht am
                    <time :datetime="post.attributes.date">
                        {{ new Date(post.attributes.date).toLocaleDateString() }}
                    </time>
                    von Markus Sommer
                </div>
                <p class="description">{{ post.attributes.description }}</p>
                <div v-html="post.html"></div>
                <shape direction="right" bottom />
            </article>
        </div>
        <p-footer>
            <back-link top />
        </p-footer>
    </div>
</template>

<script>
    import personSchema from '@/utils/schema/person';
    import organizationSchema from '@/utils/schema/organization';
    import Shape from '@/components/Shape.vue';
    import BackLink from '@/components/BackLink.vue';
    import BlogHeader from '@/components/BlogHeader.vue';
    import PFooter from '@/components/PFooter.vue';

    export default {
        name: 'PageBlogSlug',
        components: {
            Shape,
            BackLink,
            BlogHeader,
            PFooter,
        },

        asyncData(context) {
            const { params } = context;

            const post = require(`~/content/posts/${params.slug}.md`);
            return { post: { ...post } };
        },

        data() {
            return {
                post: {},
            };
        },

        head() {
            return {
                title: this.post.attributes.title,
                meta: [
                    {
                        hid: 'description',
                        name: 'description',
                        content: this.post.attributes.description,
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
                title: this.post.attributes.title,
                description: this.post.attributes.description,
                datePublished: this.post.attributes.date,
                dateModified: this.post.attributes.date,
                author: personSchema,
                publisher: organizationSchema,
                mainEntityOfPage:
                    'https://creativeworkspace.de/blog/' + this.$route.params.slug + '/',
                image: [this.post.attributes.image],
            };
        },
    };
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
