import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { ViteImageOptimizer } from 'vite-plugin-image-optimizer';
import Sitemap from 'vite-plugin-sitemap';
import vitePluginCompression from 'vite-plugin-compression';
import { visualizer } from 'rollup-plugin-visualizer';
import path from 'path'
import { fileURLToPath } from 'url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))

export default defineConfig({
  root: './client',
  plugins: [
    react(),
    ViteImageOptimizer({
      png: { quality: 80 },
      jpeg: { quality: 80 },
      webp: { quality: 80 },
      avif: { quality: 70 },
    }),
    vitePluginCompression({
      algorithm: 'gzip',
      ext: '.gz',
    }),
    vitePluginCompression({
      algorithm: 'brotliCompress',
      ext: '.br',
    }),
    Sitemap({
      hostname: 'https://popshomecare.pt',
      dynamicRoutes: ['/', '/sobre', '/parceiros'],
      outDir: path.resolve(__dirname, "dist/public"),
    }),
    visualizer({
      filename: path.resolve(__dirname, 'dist/stats.html'),
      open: false,
    }),
  ],
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
          'vendor-react': ['react', 'react-dom', 'wouter', 'react-helmet-async'],
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
            'tailwind-merge',
            'lucide-react'
          ],
          'vendor-utils': ['date-fns', 'zod', 'react-hook-form', '@tanstack/react-query'],
          'vendor-charts': ['recharts'],
        }
      }
    }
  }
})

