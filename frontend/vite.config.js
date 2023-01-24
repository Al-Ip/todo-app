// vite.config.ts
import { defineConfig } from 'vite'
import reactRefresh from '@vitejs/plugin-react-refresh'
import vue from '@vitejs/plugin-vue'

export default defineConfig({
  plugins: [reactRefresh(), vue()],
  server: {
    port: 8081
  },
  define: {
    'process.env': {}
  }
})