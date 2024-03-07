import { mergeConfig } from "vite";

import configCompressPlugin from "./plugin/compress";
import configImageminPlugin from "./plugin/imagemin";
import configVisualizerPlugin from "./plugin/visualizer";
import baseConfig from "./vite.config.base";

export default mergeConfig(
  {
    mode: "production",
    plugins: [configCompressPlugin("gzip"), configVisualizerPlugin(), configImageminPlugin()],
    build: {
      rollupOptions: {
        output: {
          manualChunks: {
            vue: ["vue", "vue-router", "pinia", "vue-i18n"]
          }
        }
      },
      chunkSizeWarningLimit: 2000
    }
  },
  baseConfig
);
