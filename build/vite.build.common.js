import { resolve } from 'path'

const aliasOptions = {
  resolve: {
    alias: {
      '@': resolve(__dirname, '../src'),
      '@module': resolve(__dirname, '../node_modules'),
    },
    dedupe: ['vue'],
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
