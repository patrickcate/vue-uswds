import { resolve } from 'path'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { aliasOptions, buildOptions } from './vite.build.common.js'
import { dependencies } from '../package.json'

export default defineConfig({
  ...aliasOptions,
  plugins: [vue()],
  // Don't copy pubic dir with builds.
  publicDir: false,
  build: {
    ...buildOptions,
    lib: {
      entry: resolve(__dirname, '../src/components/index.js'),
      formats: ['es', 'cjs'],
      fileName: format => `vue-uswds.components.${format}.js`,
    },
    rollupOptions: {
      // Externalize dependencies that should not be bundled with library.
      external: ['vue', ...Object.keys(dependencies)],
      output: { ...buildOptions.rollupOptions.output },
    },
  },
})
