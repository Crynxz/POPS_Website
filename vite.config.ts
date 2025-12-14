import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(import.meta.dirname, "client", "src"),
      "@shared": path.resolve(import.meta.dirname, "shared"),
      "@assets": path.resolve(import.meta.dirname, "attached_assets"),
    },
  },
  // This points to your client folder correctly
  root: path.resolve(import.meta.dirname, "client"),
  build: {
    // CHANGE: Output directly to "dist", not "dist/public"
    outDir: path.resolve(import.meta.dirname, "dist"),
    emptyOutDir: true,
  },
});