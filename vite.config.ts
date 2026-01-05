import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'
import { fileURLToPath } from 'url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))

export default defineConfig({
  root: './client',
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './client/src'),
    },
  },
  server: {
    port: 5173,
  },
  build: {
    outDir: path.resolve(__dirname, "dist/public"),
    emptyOutDir: true,
    minify: 'terser',
    cssMinify: true,
    sourcemap: false,
    rollupOptions: {
      output: {
        manualChunks: {
          'vendor-react': ['react', 'react-dom', 'wouter'],
          'vendor-framer': ['framer-motion'],
          'vendor-ui': [
            '@radix-ui/react-accordion', 
            '@radix-ui/react-dialog', 
            '@radix-ui/react-dropdown-menu', 
            '@radix-ui/react-slot', 
            '@radix-ui/react-toast', 
            '@radix-ui/react-tabs',
            '@radix-ui/react-scroll-area',
            'class-variance-authority', 
            'clsx', 
            'tailwind-merge'
          ],
          'vendor-utils': ['date-fns', 'zod', 'react-hook-form'],
        }
      }
    }
  }
})

