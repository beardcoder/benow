module.exports = {
    root: true,
    env: {
        browser: true,
        node: true,
    },
    parserOptions: {
        parser: 'babel-eslint',
        ecmaFeatures: {
            legacyDecorators: true,
        },
    },
    extends: ['prettier', 'prettier/react'],
    plugins: ['prettier'],
    // add your custom rules here
    rules: {
        'no-console': 'off',
    },
};
