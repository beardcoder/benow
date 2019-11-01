<template>
    <div class="github">
        <h3>{{ title }}</h3>
        <ul class="githubList">
            <li
                v-for="(item, index) in items"
                :key="item.id"
                v-in-viewport.once
                class="githubItem"
                :class="{ githubItemHidden: !open && index >= 6 }"
            >
                <card>
                    <div>
                        <h4>{{ gist ? item.description : item.full_name }}</h4>
                        <p v-if="!gist">{{ item.description }}</p>
                    </div>
                    <a
                        :href="item.html_url"
                        rel="noreferrer"
                        target="_blank"
                        :class="{ btn: true, btnSecondary: gist }"
                    >
                        {{ linkText }}
                    </a>
                </card>
            </li>
        </ul>
        <div style="text-align: center;">
            <button :class="{ btn: true, btnSecondary: gist }" @click="open = !open">
                {{ open ? 'Verbergen' : 'Alle anzeigen' }}
            </button>
        </div>
    </div>
</template>

<script lang="ts">
    import { Component, Prop, Vue } from 'nuxt-property-decorator';
    import { GithubItem } from '~/types';
    import Card from '~/components/Card.vue';

    @Component({
        components: { Card },
        data() {
            return {
                open: false,
            };
        },
    })
    export default class GithubList extends Vue {
        @Prop() items!: GithubItem[];
        @Prop({ default: false, type: Boolean }) gist!: boolean;
        @Prop() linkText!: string;
        @Prop() title!: string;
    }
</script>

<style scoped>
    .github {
        margin-top: 50px;
    }

    .github h3 {
        text-align: center;
        margin-bottom: 0;
    }

    .githubItem,
    .githubList {
        list-style: none;
        margin: 0;
        padding: 0;
    }

    .githubList {
        display: flex;
        flex-flow: row wrap;
        margin-left: -1rem;
        margin-right: -1rem;
        padding: 1rem;
    }

    .githubItem {
        margin: 1rem;
        min-width: calc((100% / 1) - 2rem);
        max-width: calc((100% / 1) - 2rem);
        transition: opacity 0.5s, transform 0.8s;
    }

    .githubItem.below-viewport {
        opacity: 0;
        transform: scale3d(0.1, 0.1, 0.1);
    }

    .githubItemHidden {
        display: none;
    }

    .githubItem.in-viewport {
        opacity: 1;
        transform: scale3d(1, 1, 1);
    }

    @media (min-width: 40em) {
        .githubItem {
            min-width: calc((100% / 2) - 2rem);
            max-width: calc((100% / 2) - 2rem);
        }
    }

    @media (min-width: 60em) {
        .githubItem {
            min-width: calc((100% / 3) - 2rem);
            max-width: calc((100% / 3) - 2rem);
        }
    }

    h4 {
        text-overflow: ellipsis;
        white-space: nowrap;
        overflow: hidden;
    }
</style>
