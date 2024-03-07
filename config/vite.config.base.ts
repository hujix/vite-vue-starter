import vue from "@vitejs/plugin-vue";
import { resolve } from "path";
import { defineConfig } from "vite";
import eslint from "vite-plugin-eslint";
import svgLoader from "vite-svg-loader";

export default defineConfig({
  plugins: [vue(), eslint(), svgLoader({ svgoConfig: {} })],
  resolve: {
    alias: [
      {
        find: "@",
        replacement: resolve(__dirname, "../src")
      },
      {
        find: "assets",
        replacement: resolve(__dirname, "../src/assets")
      }
    ],
    extensions: [".ts", ".js"]
  },
  define: {
    "process.env": {}
  },
  css: {
    preprocessorOptions: {}
  },
  server: {
    host: "0.0.0.0",
    port: 5173,
    proxy: {
      "/api": {
        target: "http://localhost:5173",
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, "")
      }
    }
  }
});
