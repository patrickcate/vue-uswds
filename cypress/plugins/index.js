const path = require('path')
const { startDevServer } = require('@cypress/vite-dev-server')
const codeCoverageTask = require('@cypress/code-coverage/task')
const istanbul = require('vite-plugin-istanbul')

/// <reference types="cypress" />
// ***********************************************************
// This example plugins/index.js can be used to load plugins
//
// You can change the location of this file or turn off loading
// the plugins file with the 'pluginsFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/plugins-guide
// ***********************************************************

// This function is called when a project is opened or re-opened (e.g. due to
// the project's config changing)

/**
 * @type {Cypress.PluginConfig}
 */
// eslint-disable-next-line no-unused-vars
module.exports = (on, config) => {
  // `on` is used to hook into various events Cypress emits
  // `config` is the resolved Cypress config

  on('dev-server:start', options => {
    const viteConfig = {
      resolve: {
        alias: {
          '@': path.resolve(__dirname, '..', '..', 'src'),
          '@module': path.resolve(__dirname, '..', '..', 'node_modules'),
          vue: path.resolve(
            __dirname,
            '..',
            '..',
            'node_modules',
            'vue',
            'dist',
            'vue.esm-bundler.js'
          ),
        },
      },
      plugins: [
        istanbul({
          include: ['src/components', 'src/composables', 'src/utils'],
          exclude: [
            'node_modules',
            '^src/**',
            '**/*.test.js',
            '**/*.stories.js',
          ],
          cypress: true,
          requireEnv: false,
          extension: ['.js', '.vue'],
        }),
      ],
      build: {
        sourcemap: true,
      },
    }

    return startDevServer({ options, viteConfig })
  })

  codeCoverageTask(on, config)

  return config
}
