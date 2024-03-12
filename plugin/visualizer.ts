/**
 * Generation packaging analysis
 * 生成打包分析
 */
import { visualizer } from "rollup-plugin-visualizer";
import type { Plugin } from "vite";
import { loadEnv } from "vite";

export default function configVisualizerPlugin(): Plugin | null {
  const config = loadEnv(process.env.NODE_ENV || "development", process.cwd());
  if (config.VITE_VISUALIZER_STATUS === "false" || config.VITE_VISUALIZER_STATUS !== "true") {
    return null;
  }

  console.log("🚀 Activate build visualizer plugin...");
  return visualizer({
    filename: "./node_modules/.cache/visualizer/stats.html",
    open: true,
    gzipSize: true,
    brotliSize: true
  });
}
