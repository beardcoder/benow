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
        background-color: #23242a;
        padding: 1rem;
        box-sizing: border-box;
        height: 100%;
        position: relative;
        border-radius: 5px;
        overflow: hidden;
    }
</style>
