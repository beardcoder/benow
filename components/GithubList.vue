<template>
    <div class="github">
        <h3>{{ title }}</h3>
        <ul v-if="items" class="githubList">
            <GithubItem
                v-for="(item, index) in items"
                :key="item.id"
                :gist="gist"
                :open="open || index <= 5"
                :item="item"
                :link-text="linkText"
            />
        </ul>
        <div style="text-align: center;">
            <button :class="{ btn: true, btnSecondary: gist }" @click="open = !open">
                {{ open ? 'Verbergen' : 'Alle anzeigen' }}
            </button>
        </div>
    </div>
</template>

<script>
    import GithubItem from '@/components/GithubItem.vue';

    export default {
        name: 'GithubList',
        components: {
            GithubItem,
        },
        props: {
            items: {
                type: Array,
                default: () => [],
            },
            gist: {
                type: Boolean,
                default: false,
            },
            linkText: {
                type: String,
                default: '',
            },
            title: {
                type: String,
                default: '',
            },
        },
        data() {
            return {
                open: false,
            };
        },
    };
</script>

<style scoped>
    @import '../assets/css/variables.css';

    .github {
        margin-top: 100px;
    }

    .github h3 {
        text-align: center;
        margin-bottom: 0;
    }

    .githubList {
        list-style: none;
        display: flex;
        flex-flow: row wrap;
        margin: 0 -1rem;
        padding: 1rem;
    }

    h4 {
        text-overflow: ellipsis;
        white-space: nowrap;
        overflow: hidden;
        margin-bottom: 10px;
    }
</style>
