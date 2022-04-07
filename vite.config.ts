// import path from 'path'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import styleImport from 'vite-plugin-style-import'
import ViteComponents, { ElementPlusResolver } from 'vite-plugin-components'

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      "@": '/src'
    }
  },
  plugins: [
    vue(),
    ViteComponents({
      customComponentResolvers: [ElementPlusResolver()],
    }),
    styleImport({
      libs: [
        {
          libraryName: 'element-plus',
          esModule: true,
          resolveStyle: (name) => {
            return `element-plus/lib/theme-chalk/${name}.css` // 按需引入样式
          },
        },
      ],
    })
  ],
  // 设置反向代理，跨域
  server: {
    proxy: {
      '/fz': {
        // 后台地址
        target: 'http://82.157.6.212:8990/',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/fz/, ''),
      }
    }
  }
  
})
