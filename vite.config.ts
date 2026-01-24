import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react'
import { ViteImageOptimizer } from 'vite-plugin-image-optimizer';
// import Sitemap from 'vite-plugin-sitemap';
// import vitePluginCompression from 'vite-plugin-compression';
// import { visualizer } from 'rollup-plugin-visualizer';
import path from 'path'
import { fileURLToPath } from 'url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '');
  return {
    root: './client',
    base: env.VITE_CDN_URL || '/', // CDN Integration: Allows setting a remote base URL for assets
    plugins: [
      react(),
      ViteImageOptimizer({
        png: { quality: 80 },
        jpeg: { quality: 80 },
        webp: { quality: 80 },
        avif: { quality: 70 },
      }),
      {
        name: 'inline-css',
        apply: 'build',
        enforce: 'post',
        generateBundle(_, bundle) {
          const htmlFile = Object.values(bundle).find(
            (file) => file.fileName.endsWith('.html')
          );
          if (!htmlFile || htmlFile.type !== 'asset') return;

          const cssFiles = Object.values(bundle).filter(
            (file) => file.fileName.endsWith('.css') && file.type === 'asset'
          );

          if (!cssFiles.length) return;

          let html = htmlFile.source as string;

          cssFiles.forEach((cssFile) => {
            if (cssFile.type === 'asset') {
              const fileName = cssFile.fileName;
              const escapedFileName = fileName.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
              const linkRegex = new RegExp(
                `<link[^>]+href="[^"]*${escapedFileName}"[^>]*>`,
                'i'
              );

              if (linkRegex.test(html)) {
                html = html.replace(linkRegex, `<style>${cssFile.source}</style>`);
                delete bundle[fileName];
              }
            }
          });

          htmlFile.source = html;
        }
      },
      // vitePluginCompression({
      //   algorithm: 'gzip',
      //   ext: '.gz',
      // }),
      // vitePluginCompression({
      //   algorithm: 'brotliCompress',
      //   ext: '.br',
      // }),
      // Sitemap({
      //   hostname: 'https://popshomecare.pt',
      //   dynamicRoutes: ['/', '/sobre', '/parceiros'],
      //   outDir: path.resolve(__dirname, "dist/public"),
      // }),
      // visualizer({
      //   filename: path.resolve(__dirname, 'dist/stats.html'),
      //   open: false,
      // }),
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
          }
        }
      }
    }
  };
})

