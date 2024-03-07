/**
 * Generation packaging analysis
 * 生成打包分析
 */
import { visualizer } from "rollup-plugin-visualizer";

export default function configVisualizerPlugin() {
  console.info("📦 打包分析已开启...");
  if (process.env.NODE_ENV === "production") {
    return visualizer({
      filename: "./node_modules/.cache/visualizer/stats.html",
      open: true,
      gzipSize: true,
      brotliSize: true
    });
  }
  return [];
}
