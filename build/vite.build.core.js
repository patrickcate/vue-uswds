import { resolve } from 'path'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { aliasOptions, buildOptions } from './vite.build.common.js'

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
      formats: ['es', 'umd'],
      fileName: format => `vue-uswds.core.${format}.js`,
    },
  },
})
