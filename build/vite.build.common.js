import { resolve, dirname } from 'node:path'
import { fileURLToPath } from 'node:url'

const __dirname = dirname(fileURLToPath(import.meta.url))

const aliasOptions = {
  resolve: {
    alias: {
      '@': resolve(__dirname, '../src'),
      '@module': resolve(__dirname, '../node_modules'),
    },
  },
}

const buildOptions = {
  sourcemap: true,
  emptyOutDir: false,
  rollupOptions: {
    // Externalize dependencies that should not be bundled with library.
    external: ['vue'],
    output: {
      globals: {
        vue: 'Vue',
      },
    },
  },
}

export { aliasOptions, buildOptions }
