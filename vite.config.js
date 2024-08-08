import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/',
  assetsInclude: ['**/*.ttf', '**/*.otf', '**/*.woff2'],
  build: {
    rollupOptions: {
      external: ['react-toastify']
    }
  }
})
