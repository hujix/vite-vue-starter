import vue from "@vitejs/plugin-vue";
import { resolve } from "path";
import { defineConfig, loadEnv } from "vite";
import eslint from "vite-plugin-eslint";
import svgLoader from "vite-svg-loader";

import configCompressPlugin from "./plugin/compress";
import configImageminPlugin from "./plugin/imagemin";
import configVisualizerPlugin from "./plugin/visualizer";

export default ({ mode }: { mode: "development" | "production" }) =>
  defineConfig({
    plugins: [
      vue(),
      eslint(),
      svgLoader({ svgoConfig: {} }),
      configCompressPlugin("gzip"),
      configVisualizerPlugin(),
      configImageminPlugin()
    ],
    resolve: {
      alias: [
        {
          find: "@",
          replacement: resolve(__dirname, "./src")
        },
        {
          find: "assets",
          replacement: resolve(__dirname, "./src/assets")
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
          target: loadEnv(mode, process.cwd()).VITE_BASE_API,
          changeOrigin: true,
          rewrite: (path) => path.replace(/^\/api/, "")
        }
      }
    }
  });
