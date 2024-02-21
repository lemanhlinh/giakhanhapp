import { fileURLToPath, URL } from 'node:url'

import dotenv from 'dotenv';
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'

dotenv.config();
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    vueJsx(),
  ],
  server: {
    port: 8081, // Số port mong muốn
  },
  define: {
    // Pass environment variables to the application
    'process.env': {
      VITE_API_BASE_URL: JSON.stringify(process.env.VITE_API_BASE_URL),
    },
  },
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  }
})
