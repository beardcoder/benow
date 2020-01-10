<template>
    <li
        v-observe-visibility="{
            callback: visibilityChanged,
            throttle: 300,
            once: true,
        }"
        :class="{
            'githubItem--hidden': !open,
            'githubItem--visible': isVisible,
            'githubItem--notVisible': !isVisible,
        }"
        class="githubItem"
    >
        <card>
            <div>
                <h4>{{ gist ? item.description : item.full_name }}</h4>
                <p v-if="!gist" class="githubItem__description">{{ item.description }}</p>
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
</template>
<script lang="ts">
    import { createComponent, ref } from '@vue/composition-api';
    import Card from '@/components/Card.vue';
    import GithubItem from '@/components/GithubItem.vue';

    export default createComponent({
        components: {
            GithubItem,
            Card,
        },
        props: {
            item: {
                type: Object,
                default: () => {},
            },
            gist: {
                type: Boolean,
                default: false,
            },
            linkText: {
                type: String,
                default: '',
            },
            open: {
                type: Boolean,
                default: false,
            },
        },
        setup() {
            const isVisible = ref(0);

            function visibilityChanged(visibleValue) {
                isVisible.value = visibleValue;
            }

            return {
                isVisible,
                visibilityChanged,
            };
        },
    });
</script>
<style scoped>
    @import '../assets/css/variables.css';

    .githubItem__description {
        color: var(--color__font--secondary);
        margin-top: 0;
    }

    .githubItem {
        margin: 1rem;
        min-width: calc((100% / 1) - 2rem);
        max-width: calc((100% / 1) - 2rem);
        transition: opacity 0.5s, transform 0.8s;
        list-style: none;
        padding: 0;
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

    .githubItem--notVisible {
        opacity: 0;
        transform: scale3d(0.1, 0.1, 0.1);
    }

    .githubItem--hidden {
        display: none;
    }

    .githubItem--visible {
        opacity: 1;
        transform: scale3d(1, 1, 1);
    }

    h4 {
        text-overflow: ellipsis;
        white-space: nowrap;
        overflow: hidden;
        margin-bottom: 10px;
    }
</style>
