import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'

// https://vite.dev/config/
export default defineConfig({
  plugins: [vue()],
  resolve:{
    alias:{
      '@':path.resolve(__dirname,'src') //配置@指向src目录
    }
  },
  base:'./' //部署应用时的基本URL 默认的根路径（如果部署到域名根目录） ，
  // 例如：https://www.mydomain.com/，则设置为 '/'
  // 如果部署到子目录，例如：https://www.mydomain.com/app/，则设置为 '/app/'
})
