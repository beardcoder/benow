module.exports = {
    root: true,
    parser: 'vue-eslint-parser',
    env: {
        browser: true,
        node: true,
    },
    'parserOptions': {
        'ecmaVersion': 2018,
        'sourceType': 'module',
        'parser': '@typescript-eslint/parser',
        'ecmaFeatures': {
            'globalReturn': false,
            'impliedStrict': false,
            'jsx': false,
        },
    },
    extends: [
        'plugin:@typescript-eslint/recommended',
        'eslint:recommended',
        'plugin:vue/essential',
        'prettier/vue',
        'plugin:prettier/recommended',
        'prettier',
        '@nuxtjs',
        'prettier',
        'plugin:nuxt/recommended',
    ],
    plugins: [
        'vue',
        'prettier',
    ],
    // add your custom rules here
    rules: {
        '@typescript-eslint/explicit-function-return-type': 'off',
        '@typescript-eslint/no-explicit-any': 'off',
        '@typescript-eslint/ban-ts-ignore': 'off',
        'no-console': 'off',
        '@typescript-eslint/indent': 'off',
        'vue/script-indent': 'off',
        'vue/html-indent': 'off',
        'vue/singleline-html-element-content-newline': 'off',
        'vue/html-self-closing': 'off',
        'vue/no-v-html': 'off',
        'vue/multiline-html-element-content-newline': 'off',
        'vue/max-attributes-per-line': 'off',
        'vue/html-closing-bracket-newline': 'off',
    },
};
