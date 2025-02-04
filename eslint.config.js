import js from '@eslint/js'
import pluginStorybook from 'eslint-plugin-storybook'
import pluginVue from 'eslint-plugin-vue'
import pluginCypress from 'eslint-plugin-cypress/flat'
import eslintPluginPrettierRecommended from 'eslint-plugin-prettier/recommended'
import globals from 'globals'

export default [
  {
    languageOptions: {
      globals: {
        ...globals.browser,
        ...globals.node,
      },
    },
  },
  js.configs.recommended,
  ...pluginStorybook.configs['flat/recommended'],
  pluginCypress.configs.recommended,
  ...pluginVue.configs['flat/recommended'],
  eslintPluginPrettierRecommended,
  {
    ignores: [
      'dist/**',
      'dist-ssr/**',
      'cypress/examples/**',
      //  Symlinked USWDS files.
      'assets/**',
      // Playground test projects.
      'playground/**',
      // Static storybook doc files.
      'storybook-static/**',
      // Generated code coverage files.
      'coverage/**',
      // Ignore dot files.
      '**/.*',
    ],
  },
  {
    rules: {
      'no-unused-vars':
        process.env.NODE_ENV === 'production' ? 'error' : 'warn',
      'vue/block-order':
        process.env.NODE_ENV === 'production' ? 'error' : 'warn',
    },
  },
]
