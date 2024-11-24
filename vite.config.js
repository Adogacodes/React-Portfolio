import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  css: {
    preprocessorOptions: {
      sass: {
        quietDeps: true, // This suppresses Sass compilation warnings and verbose output
      },
    },
  },
})
