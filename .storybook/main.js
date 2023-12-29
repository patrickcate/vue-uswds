const path = require('path')
const { loadConfigFromFile, mergeConfig } = require('vite')

module.exports = {
  stories: [
    '../docs/**/*.stories.mdx',
    '../stories/**/*.stories.mdx',
    '../src/**/*.stories.@(js|jsx|ts|tsx)',
  ],

  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-mdx-gfm'
  ],

  core: {
    disableTelemetry: true
  },

  framework: {
    name: '@storybook/vue3-vite',
    options: {}
  },

  async viteFinal(config, { configType }) {
    const { config: userConfig } = await loadConfigFromFile(
      path.resolve(__dirname, '..', 'vite.config.js')
    )
    return mergeConfig(config, {
      ...userConfig,
      base: '/vue-uswds/',
      // manually specify plugins to avoid conflict
      plugins: [],
    })
  },

  docs: {
    autodocs: true
  }
}
