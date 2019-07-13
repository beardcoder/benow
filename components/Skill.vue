<template>
    <fragment>
        <dt class="skill__tile">{{ title }}</dt>
        <dd data-in-viewport class="skill__percent">
            <div class="skill__percentNumber" :style="{marginLeft: value + '%'}">{{value}}</div>
            <div class="skill__percentBackground"></div>
            <div class="skill__percentIndicator" :style="{width: value + '%'}"></div>
        </dd>
    </fragment>
</template>

<script lang="ts">
    import Vue from 'vue';
    export default Vue.extend({
        props: {
            value: String,
            title: String,
        },
    });
</script>

<style lang="scss">
    .skill__tile {
        font-family: 'Roboto Slab', serif;
    }

    .skill__percent {
        margin-left: 0;
        margin-bottom: 20px;
        position: relative;
    }

    .skill__percentBackground {
        background-color: #404040;
        height: 6px;
        margin-top: 20px;
    }

    .skill__percentIndicator {
        background-image: linear-gradient(135deg, #32f0d1 0%, #104f98 100%);
        height: 6px;
        position: relative;
        top: -6px;
        transition: width 0.8s;
    }

    .skill__percent:not(.in-viewport) .skill__percentIndicator {
        width: 0 !important;
    }

    .skill__percentNumber {
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

        &:after {
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
    }

    .skill__percent:not(.in-viewport) .skill__percentNumber {
        margin-left: 0 !important;
    }
</style>
