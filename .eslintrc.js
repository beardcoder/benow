module.exports = {
    root: true,
    env: {
        browser: true,
        node: true,
    },
    parser: 'vue-eslint-parser',
    parserOptions: {
        parser: '@typescript-eslint/parser',
        ecmaFeatures: {
            legacyDecorators: true,
        },
    },
    extends: [
        '@nuxtjs',
        'prettier',
        'prettier/vue',
        'plugin:prettier/recommended',
        'plugin:nuxt/recommended',
    ],
    plugins: ['prettier', '@typescript-eslint', 'eslint-plugin-vue'],
    // add your custom rules here
    rules: {
        'no-console': 'off',
        'vue/no-v-html': 'off',
        'no-unused-vars': 'off',
    },
};
