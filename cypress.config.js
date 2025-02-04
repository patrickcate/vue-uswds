import { resolve, dirname } from 'node:path'
import { fileURLToPath } from 'node:url'
import vue from '@vitejs/plugin-vue'
import { defineConfig } from 'cypress'
import codeCoverageTask from '@cypress/code-coverage/task'
import istanbul from 'vite-plugin-istanbul'

const __dirname = dirname(fileURLToPath(import.meta.url))

export default defineConfig({
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
            '@': resolve(__dirname, 'src'),
            '@module': resolve(__dirname, 'node_modules'),
            vue: resolve(
              __dirname,
              'node_modules',
              'vue',
              'dist',
              'vue.esm-bundler.js',
            ),
          },
        },
        plugins: [
          vue(),
          istanbul({
            include: 'src/*',
            exclude: ['node_modules', 'cypress', '**/*.fixtures.js'],
            extension: ['.js', '.ts', '.vue'],
            requireEnv: false,
          }),
        ],
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
