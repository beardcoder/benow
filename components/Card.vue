<template>
    <div class="card">
        <slot />
    </div>
</template>

<script lang="ts">
    import { createComponent } from '@vue/composition-api';

    export default createComponent({});
</script>

<style scoped>
    @import '../assets/css/variables.css';

    .card {
        background-color: var(--color__card--level-1);
        padding: 1rem;
        box-sizing: border-box;
        height: 100%;
        position: relative;
        border-radius: var(--border-radius);
        overflow: hidden;
    }
</style>
