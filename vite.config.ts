import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import critical from "rollup-plugin-critical";
import { ViteImageOptimizer } from "vite-plugin-image-optimizer";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  server: {
    host: "localhost",
    port: 8080,
  },
  plugins: [
    react(),
    critical({
      criticalUrl: "http://localhost:8080/",
      criticalBase: "dist/",
      criticalPages: [{ uri: "/", template: "index" }],
      criticalConfig: {
        inline: true,
        extract: false,
        width: 1300,
        height: 900,
      },
    }),
    ViteImageOptimizer({
      png: {
        quality: 70,
      },
      jpeg: {
        quality: 70,
      },
      jpg: {
        quality: 70,
      },
      gif: {
        quality: 70,
      },
    }),
  ],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
}));
