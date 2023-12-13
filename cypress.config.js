const path = require('path')
const vue = require('@vitejs/plugin-vue')
const { defineConfig } = require('cypress')
const codeCoverageTask = require('@cypress/code-coverage/task')
const istanbul = require('vite-plugin-istanbul')

module.exports = defineConfig({
  video: false,
  numTestsKeptInMemory: 0,
  experimentalMemoryManagement: true,
  retries: {
    runMode: 1,
    openMode: 0,
  },
  e2e: {
    // setupNodeEvents(on, config) {},
  },
  component: {
    devServer: {
      framework: 'vue',
      bundler: 'vite',
      viteConfig: {
        logLevel: 'silent',
        resolve: {
          alias: {
            '@': path.resolve(__dirname, 'src'),
            '@module': path.resolve(__dirname, 'node_modules'),
            vue: path.resolve(
              __dirname,
              'node_modules',
              'vue',
              'dist',
              'vue.esm-bundler.js'
            ),
          },
        },
        plugins: [
          vue(),
          istanbul({
            include: ['src/components', 'src/composables', 'src/utils'],
            exclude: [
              'node_modules',
              '^src/**',
              '**/*.test.js',
              '**/*.stories.js',
              '**/*.fixtures.js',
            ],
            cypress: true,
            requireEnv: false,
            extension: ['.js', '.vue'],
          }),
        ],
        build: {
          sourcemap: true,
        },
      },
    },
    setupNodeEvents(on, config) {
      codeCoverageTask(on, config)

      return config
    },
    port: 3030,
    specPattern: 'src/components/**/*.test.js',
  },
})
