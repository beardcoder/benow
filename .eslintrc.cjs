module.exports = {
  plugins: ['tailwindcss', 'prettier', 'jsx-a11y'],
  parser: '@typescript-eslint/parser',
  extends: [
    'plugin:tailwindcss/recommended',
    'plugin:astro/recommended',
    'plugin:jsx-a11y/recommended',
  ],
  rules: {
    'prettier/prettier': 'error',
  },
  parserOptions: {
    sourceType: 'module',
    ecmaVersion: 2022,
    ecmaFeatures: {
      globalReturn: false,
      impliedStrict: false,
      jsx: false,
    },
  },
  overrides: [
    {
      // Define the configuration for `.astro` file.
      files: ['*.astro'],
      // Allows Astro components to be parsed.
      parser: 'astro-eslint-parser',
      // Parse the script in `.astro` as TypeScript by adding the following configuration.
      // It's the setting you need when using TypeScript.
      parserOptions: {
        parser: '@typescript-eslint/parser',
        extraFileExtensions: ['.astro'],
      },
      rules: {
        'astro/jsx-a11y/alt-text': 'error',
        'astro/jsx-a11y/aria-props': 'error',
        'astro/jsx-a11y/role-supports-aria-props': 'error',
      },
    },
  ],
  settings: {
    tailwindcss: {
      // These are the default values but feel free to customize
      callees: ['classnames', 'clsx', 'ctl', 'cx'],
      config: 'tailwind.config.cjs',
      cssFiles: [
        '**/*.css',
        '!**/node_modules',
        '!**/.*',
        '!**/dist',
        '!**/build',
      ],
      removeDuplicates: true,
      whitelist: [],
    },
  },
}
