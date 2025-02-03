import { resolve, dirname } from 'node:path'
import { fileURLToPath } from 'node:url'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { aliasOptions, buildOptions } from './vite.build.common.js'

const __dirname = dirname(fileURLToPath(import.meta.url))

export default defineConfig({
  ...aliasOptions,
  plugins: [vue()],
  // Don't copy pubic dir with builds.
  publicDir: false,
  build: {
    ...buildOptions,
    lib: {
      entry: resolve(__dirname, '../src/core.js'),
      name: 'VueUswds',
      fileName: format => `vue-uswds.core.${format}.js`,
    },
  },
})
