import { resolve } from 'path'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { aliasOptions, buildOptions } from './vite.build.common.js'

export default defineConfig({
  ...aliasOptions,
  plugins: [vue()],
  build: {
    ...buildOptions,
    emptyOutDir: true,
    lib: {
      entry: resolve(__dirname, '../src/index.js'),
      name: 'VueUswds',
      formats: ['es', 'umd'],
      fileName: format => `vue-uswds.${format}.js`,
    },
  },
})
