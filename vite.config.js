/* eslint-env node */
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    // Same-origin /api in dev too, so the auth cookie behaves as in production.
    // API_PROXY_TARGET=https://pitbox-api.milespurvis.me npm run dev  → use the live backend.
    proxy: {
      '/api': {
        target: process.env.API_PROXY_TARGET ?? 'http://localhost:4000',
        changeOrigin: true,
      },
    },
  },
})
