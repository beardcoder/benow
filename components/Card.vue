<template functional>
    <div class="card">
        <slot />
    </div>
</template>

<script>
    export default {
        name: 'Card',
    };
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
