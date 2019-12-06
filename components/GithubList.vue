<template>
    <div class="github">
        <h3>{{ title }}</h3>
        <ul v-if="items" class="githubList">
            <li
                v-for="(item, index) in items"
                :key="item.id"
                v-in-viewport.once
                :class="{ githubItemHidden: !open && index >= 6 }"
                class="githubItem"
            >
                <card>
                    <div>
                        <h4>{{ gist ? item.description : item.full_name }}</h4>
                        <p v-if="!gist">{{ item.description }}</p>
                    </div>
                    <a
                        :href="item.html_url"
                        :class="{ btn: true, btnSecondary: gist }"
                        rel="noreferrer"
                        target="_blank"
                    >
                        {{ linkText }}
                        <img
                            src="@/assets/icons/external-link-duotone.svg"
                            width="15"
                            height="15"
                            alt="external link icon"
                            style="margin-left: 5px; margin-bottom: 2px"
                        />
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
    import { GithubItem } from '~/typings';
    import Card from '~/components/Card.vue';

    @Component({
        components: { Card },
    })
    export default class GithubList extends Vue {
        @Prop() items: GithubItem[] | undefined;
        @Prop({ default: false, type: Boolean }) gist: boolean | undefined;
        @Prop() linkText;
        @Prop() title;
        open = false;
    }
</script>

<style scoped>
    .github {
        margin-top: 100px;
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
