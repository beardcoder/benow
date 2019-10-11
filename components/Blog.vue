<template>
    <div class="blog">
        <h3 class="blogHeader">Blog</h3>
        <client-only>
            <carousel
                class="articles"
                :per-page-custom="[[320, 1], [768, 2], [1024, 3], [1400, 4]]"
            >
                <slide v-for="article in articles" :key="article.id">
                    <card class="article">
                        <div class="articleHeader">
                            <img
                                v-lazy="article.cover_image"
                                width="1000"
                                height="420"
                                class="articleImage"
                                alt="Article image"
                            />
                        </div>
                        <div class="articleBody">
                            <h4>{{ article.title }}</h4>
                        </div>
                        <div class="articleFooter" style="text-align: right">
                            <a
                                rel="noopener"
                                target="_blank"
                                :href="article.url"
                                :class="{ btn: true }"
                            >
                                Lesen
                            </a>
                        </div>
                    </card>
                </slide>
            </carousel>
        </client-only>
    </div>
</template>

<script lang="ts">
    import { Component, Vue } from 'nuxt-property-decorator';
    import { Article } from '~/types';
    import Card from '~/components/Card.vue';
    @Component({
        components: { Card },
    })
    export default class Blog extends Vue {
        get articles(): Article[] {
            return this.$store.state.blog.articles;
        }
    }
</script>

<style scoped>
    .blog {
        margin-top: 100px;
    }

    .articles {
        list-style: none;
        margin: 0;
        padding: 0;
        display: flex;
    }

    .article {
        margin: 1rem;
    }

    .articleHeader {
        position: relative;
        margin-top: -1rem;
        margin-left: -1rem;
        margin-right: -1rem;
    }

    .articleBody {
        margin: 20px;
    }

    .articleFooter {
        margin-top: 1rem;
    }

    .blogHeader {
        text-align: center;
    }
</style>
