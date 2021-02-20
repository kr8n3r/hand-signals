import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  build: {
    rollupOptions: {
      output: {
        dir: 'extension/dist',
        assetFileNames: "[name][extname]",
        entryFileNames: "[name].js",
        chunkFileNames: "[name].js"
      }
    }
  }
})
