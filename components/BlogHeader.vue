<template>
    <header class="wrapper">
        <div class="backgroundWrapper">
            <div class="backgroundParallax rellax" data-rellax-speed="-5">
                <div
                    v-lazy:background-image="
                        require(`~/assets/images/articles/${slug}/full.jpg?webp`)
                    "
                    :style="
                        `background-color: ${
                            require(`~/assets/images/articles/${slug}/full.jpg?lqip-colors`)[0]
                        }`
                    "
                    role="presentation"
                    class="background"
                />
            </div>
        </div>
        <back-link />
    </header>
</template>

<script lang="ts">
    import { Component, Prop, Vue } from 'nuxt-property-decorator';
    import BackLink from '~/components/BackLink.vue';
    @Component({
        components: { BackLink },
        props: { headerImage: { type: String, default: null, required: false } },
    })
    export default class BlogHeader extends Vue {
        @Prop() slug!: string;
    }
</script>

<style scoped>
    .wrapper {
        height: 50vh;
        min-height: 500px;
        max-height: 800px;
        position: relative;
    }

    .backgroundWrapper,
    .backgroundParallax {
        position: absolute;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        overflow: hidden;
    }

    .background {
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
