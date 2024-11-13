import path from 'node:path'
import { loadConfigFromFile, mergeConfig } from 'vite'

export default {
  stories: [
    '../docs/**/*.mdx',
    '../stories/**/*.mdx',
    '../src/**/*.stories.@(js|jsx|ts|tsx)',
  ],

  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-mdx-gfm',
  ],

  core: {
    disableTelemetry: true,
  },

  framework: {
    name: '@storybook/vue3-vite',
    options: {
      docgen: 'vue-component-meta',
    },
  },

  async viteFinal(config, { configType }) {
    const { config: userConfig } = await loadConfigFromFile(
      path.resolve(__dirname, '..', 'vite.config.js'),
    )
    return mergeConfig(config, {
      ...userConfig,
      base: '/vue-uswds/',
      // manually specify plugins to avoid conflict
      plugins: [],
    })
  },
  docs: {},
}
