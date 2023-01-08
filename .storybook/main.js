const path = require('path')
const { loadConfigFromFile, mergeConfig } = require('vite')

module.exports = {
  stories: [
    '../docs/**/*.stories.mdx',
    '../stories/**/*.stories.mdx',
    '../src/**/*.stories.@(js|jsx|ts|tsx)',
  ],
  addons: ['@storybook/addon-links', '@storybook/addon-essentials'],
  core: {
    builder: '@storybook/builder-vite',
    disableTelemetry: true,
  },
  framework: '@storybook/vue3',

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
}
