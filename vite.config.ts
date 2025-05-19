import { defineConfig } from 'vite'
import { dirname,resolve } from 'node:path'
import {fileURLToPath} from 'node:url'
import vue from '@vitejs/plugin-vue'

const __dirname = dirname(fileURLToPath(import.meta.url))

//获取pages入口路径
const getRendererPagePath = (pageName:string)=>{
  return resolve(__dirname, `renderer/pages/${pageName}/index.html`)
}

// https://vite.dev/config/
export default defineConfig({
  plugins: [vue()],
  build: {
    cssMinify: 'lightningcss',
    rollupOptions: {
      input: {
        main: getRendererPagePath('main'),
      },
    },
  },
  css:{
    transformer: 'lightningcss',
    // Lightning CSS 配置
    lightningcss: {},

  }
})
