import { resolve } from 'path'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { aliasOptions, buildOptions } from './vite.build.common.js'

export default defineConfig({
  ...aliasOptions,
  plugins: [vue()],
  build: {
    ...buildOptions,
    lib: {
      entry: resolve(__dirname, '../src/core.js'),
      name: 'VueUswds',
      fileName: format => `vue-uswds.core.${format}.js`,
    },
  },
})
