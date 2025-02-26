import { resolve, dirname } from 'node:path'
import { fileURLToPath } from 'node:url'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { aliasOptions, buildOptions } from './vite.build.common.js'
import { dependencies } from '../package.json'

const __dirname = dirname(fileURLToPath(import.meta.url))

export default defineConfig({
  ...aliasOptions,
  plugins: [vue()],
  // Don't copy pubic dir with builds.
  publicDir: false,
  build: {
    ...buildOptions,
    lib: {
      formats: ['es', 'cjs'],
      entry: resolve(__dirname, '../src/components/index.js'),
      fileName: format =>
        `vue-uswds.components.${format === 'es' ? 'mjs' : 'cjs'}`,
    },
    rollupOptions: {
      // Externalize dependencies that should not be bundled with library.
      external: ['vue', ...Object.keys(dependencies)],
    },
  },
})
