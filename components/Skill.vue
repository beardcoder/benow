<template>
    <li v-in-viewport.once class="skill">
        <div class="skillTitle">{{ title }}</div>
        <div class="skillPercent">
            <div :style="`margin-left: ${value}%`" class="skillPercentNumber">{{ value }}</div>
            <div class="skillPercentBackground"></div>
            <div :style="`width: ${value}%`" class="skillPercentIndicator"></div>
        </div>
    </li>
</template>

<script lang="ts">
    import { Component, Prop, Vue } from 'nuxt-property-decorator';

    @Component({})
    export default class Skill extends Vue {
        @Prop() title;
        @Prop({ default: 0, type: Number }) value;
    }
</script>

<style scoped>
    @import '../assets/css/variables.css';

    .skill {
        margin-bottom: 30px;
    }

    .skillTitle {
        font-family: 'Roboto Slab', serif;
        margin-bottom: -35px;
        color: var(--color__font--secondary);
    }

    .skillPercent {
        margin-left: 0;
        margin-bottom: 20px;
        position: relative;
    }

    .skillPercentBackground {
        background-color: #404040;
        height: 6px;
        margin-top: 20px;
        border-radius: 3px;
    }

    .skillPercentIndicator {
        background-image: linear-gradient(
            135deg,
            var(--color__secondary) 0%,
            var(--color__secondary--dark) 100%
        );
        height: 6px;
        position: relative;
        top: -6px;
        border-radius: 3px;
        transition: width 0.8s;
    }

    .skill:not(.in-viewport) .skillPercentIndicator {
        width: 0 !important;
    }

    .skillPercentNumber {
        background: #404040;
        width: 26px;
        height: 26px;
        border-radius: 13px;
        line-height: 25px;
        text-align: center;
        font-size: 12px;
        position: relative;
        transition: margin-left 0.8s;
        transform: translateX(-50%);
    }

    .skillPercentNumber:after {
        position: absolute;
        content: '';
        width: 0;
        height: 0;
        border-left: 13px solid transparent;
        border-right: 13px solid transparent;
        border-top: 13px solid #404040;
        transform: translateX(-20px);
        bottom: -4px;
    }

    .skill:not(.in-viewport) .skillPercentNumber {
        margin-left: 20% !important;
    }
</style>
