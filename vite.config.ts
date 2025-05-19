import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { getRollupInput } from './vite/pages.config'

console.log(process.env.MODE);
// https://vite.dev/config/
export default defineConfig({

  plugins: [vue()],
  build: {
    cssMinify: 'lightningcss',
    rollupOptions: {
      input: getRollupInput(),
    },
  },
  css: {
    transformer: 'lightningcss',
    // Lightning CSS 配置
    lightningcss: {},
  }
})
