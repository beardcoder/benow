<template>
    <header v-if="post" class="wrapper">
        <div class="background">
            <div
                v-lazy:background-image="post.image"
                role="presentation"
                class="background__image"
            />
        </div>
        <back-link />
    </header>
</template>

<script lang="ts">
    import { Component, Prop, Vue } from 'nuxt-property-decorator';
    import BackLink from '~/components/BackLink.vue';
    import { Post } from '~/types';

    @Component({
        components: { BackLink },
    })
    export default class BlogHeader extends Vue {
        @Prop() post: Post | undefined;
    }
</script>

<style scoped>
    .wrapper {
        height: 20vh;
        min-height: 200px;
        max-height: 800px;
        position: relative;
    }

    @media (min-width: 768px) {
        .wrapper {
            height: 50vh;
            min-height: 500px;
            max-height: 800px;
            position: relative;
        }
    }

    .background,
    .background__parallax {
        position: absolute;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        overflow: hidden;
    }

    .background__image {
        background-position: center center;
        background-size: cover;
        position: absolute;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        will-change: transform;
    }
</style>
