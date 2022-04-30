import { resolve } from 'path'

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
      assetFileNames: `vue-uswds.[ext]`, // without this, it generates dist/styles.css
    },
  },
}

export { aliasOptions, buildOptions }
