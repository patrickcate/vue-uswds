import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { aliasOptions } from './build/vite.build.common.js'

export default defineConfig({
  ...aliasOptions,
  plugins: [vue()],
})
