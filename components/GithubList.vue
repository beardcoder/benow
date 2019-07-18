<template>
    <div class="github">
        <h3>{{title}}</h3>
        <ul class="github__list">
            <template v-for="(item, i) in data">
                <li
                    :aria-hidden="!(i < 3 || showAll) ? true : false"
                    :class="{'github__item': true, 'github__item--hidden': !(i < 3 || showAll)}"
                    v-bind:key="i"
                >
                    <div v-if="!gist">
                        <h4>{{ item.full_name }}</h4>
                        <p>{{ item.description }}</p>
                    </div>
                    <h4 v-else>{{ item.description }}</h4>
                    <a
                        :class="{'btn': true,'btn--secondary': gist}"
                        v-bind:href="item.html_url"
                        target="_blank"
                    >{{linkText}}</a>
                </li>
            </template>
        </ul>
        <div style="text-align: center;">
            <button :class="{'btn': true, 'btn--secondary': gist}" v-on:click="showAll = !showAll">
                <span v-if="!showAll">Alle anzeigen</span>
                <span v-else>wieder ausblenden</span>
            </button>
        </div>
    </div>
</template>

<script lang="ts">
    import { Component, Vue } from 'vue-property-decorator';
    @Component({
        data() {
            return {
                showAll: false,
            };
        },
        props: {
            data: Array,
            linkText: String,
            title: String,
            gist: Boolean,
        },
    })
    export default class GithubList extends Vue {}
</script>

<style scoped lang="postcss">
    .github {
        margin-top: 50px;

        h3 {
            text-align: center;
            margin-bottom: 0;
        }
    }

    .github__item,
    .github__list {
        list-style: none;
        margin: 0;
        padding: 0;
    }

    .github__list {
        display: flex;
        flex-flow: row wrap;
        margin-left: -1rem;
        margin-right: -1rem;
        padding: 1rem;
    }

    .github__item {
        background: #232629;
        box-shadow: 5px 5px 30px 0 rgba(0, 0, 0, 0.5);
        margin: 1rem;
        min-width: calc((100% / 1) - 2rem);
        max-width: calc((100% / 1) - 2rem);
        padding: 1rem;
        box-sizing: border-box;

        @media (min-width: 40em) {
            min-width: calc((100% / 2) - 2rem);
            max-width: calc((100% / 2) - 2rem);
        }

        @media (min-width: 60em) {
            min-width: calc((100% / 3) - 2rem);
            max-width: calc((100% / 3) - 2rem);
        }

        &--hidden {
            display: none;
        }
    }

    h4 {
        text-overflow: ellipsis;
        white-space: nowrap;
        overflow: hidden;
    }
</style>
