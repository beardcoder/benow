<template>
    <div class="card">
        <slot />
    </div>
</template>

<script lang="ts">
    import { Component, Vue } from 'nuxt-property-decorator';

    @Component({})
    export default class Card extends Vue {}
</script>

<style scoped>
    .card {
        background-image: linear-gradient(45deg, #1c1e20, #303537);
        padding: 1rem;
        box-sizing: border-box;
        height: 100%;
    }
</style>
