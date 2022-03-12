import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'
import url from 'url'
const filename = url.fileURLToPath(import.meta.url)
const dirname = path.dirname(filename)
console.log(import.meta)
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      '@': path.resolve(dirname,'./src')
    }
  },
  server: {
    host:'localhost',
    port:8080,
    proxy: {
      "/api": {
        target:"http://localhost:3000"
      }
    }
  }
})
