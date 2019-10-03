<template>
    <div class="blog">
        <h3 class="blogHeader">Blog</h3>
        <client-only>
            <carousel
                class="articles"
                :per-page-custom="[[320, 1], [768, 2], [1024, 3], [1400, 4]]"
            >
                <slide v-for="article in articles" :key="article.id">
                    <div class="article">
                        <div class="articleHeader">
                            <img
                                v-lazy="article.cover_image"
                                width="1000"
                                height="420"
                                alt="Article image"
                            />
                        </div>
                        <div class="articleBody">
                            <h4>{{ article.title }}</h4>
                        </div>
                        <div class="articleFooter">
                            <a
                                rel="noopener"
                                target="_blank"
                                :href="article.url"
                                :class="{ btn: true }"
                            >
                                Lesen
                            </a>
                        </div>
                    </div>
                </slide>
            </carousel>
        </client-only>
    </div>
</template>

<script lang="ts">
    import { Component, Vue } from 'nuxt-property-decorator';
    import { Article } from '~/types';

    @Component
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
        background: #232629;
        box-shadow: 5px 5px 30px 0 rgba(0, 0, 0, 0.5);
        border-radius: 4px;
        margin-left: 20px;
        margin-right: 20px;
        margin-bottom: 20px;
        height: 100%;
    }

    .articleHeader {
        position: relative;
    }

    .articleBody {
        margin: 20px;
    }

    .articleFooter {
        margin: 20px;
        padding-bottom: 20px;
    }

    .blogHeader {
        text-align: center;
    }
</style>
