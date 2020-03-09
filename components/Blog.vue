<template>
    <div id="blog" class="blog">
        <div
            class="shape_wrapper"
            :style="`background-image:url(${require('@/assets/images/shape_3.svg')});`"
        ></div>
        <h2 class="blog__header">Blog</h2>
        <div class="articles">
            <post v-for="(post, index) in posts" :key="index" :post="post" />
        </div>
    </div>
</template>

<script>
    import Post from '@/components/Post.vue';

    export default {
        name: 'Blog',
        components: {
            Post,
        },
        props: {
            posts: {
                type: Array,
                default: () => [],
            },
        },
    };
</script>

<style scoped>
    .blog {
        max-width: 1440px;
        margin: 100px auto;
        padding-left: 1rem;
        padding-right: 1rem;
        margin-top: 150px;
    }

    .articles {
        display: grid;
        grid-template-columns: 1fr;
        grid-template-rows: 1fr;
        grid-template-areas: '.';
        grid-gap: 2rem;
    }

    @media (min-width: 768px) {
        .articles {
            grid-template-columns: 1fr 1fr 1fr;
            grid-template-rows: 1fr;
            grid-template-areas: '. . .';
        }
    }

    .blog__header {
        text-align: center;
    }

    .shape_wrapper {
        position: absolute;
        width: 100%;
        min-width: 1000px;
        left: 50%;
        transform: translateX(-50%);
        margin-top: -100px;
        z-index: -1;
        padding-bottom: 68.82%;
        background-size: 100%;
        background-repeat: no-repeat;
    }
</style>
