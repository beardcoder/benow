<template>
    <li v-in-viewport.once class="skill">
        <div class="skillTitle">{{ title }}</div>
        <div class="skillPercent">
            <div class="skillPercentNumber" :style="`margin-left: ${value}%`">{{ value }}</div>
            <div class="skillPercentBackground"></div>
            <div class="skillPercentIndicator" :style="`width: ${value}%`"></div>
        </div>
    </li>
</template>

<script>
    export default {
        name: 'Skill',
        props: {
            title: { type: String, default: '', required: true },
            value: { type: Number, default: 0, required: true },
        },
    };
</script>

<style scoped>
    .skillTitle {
        font-family: 'Roboto Slab', serif;
        margin-bottom: -20px;
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
    }

    .skillPercentIndicator {
        background-image: linear-gradient(135deg, #32f0d1 0%, #104f98 100%);
        height: 6px;
        position: relative;
        top: -6px;
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
