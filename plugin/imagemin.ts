/**
 * Image resource files used to compress the output of the production environment
 * 图片压缩
 * https://github.com/anncwb/vite-plugin-imagemin
 */
import type { Plugin } from "vite";
import { loadEnv } from "vite";
import viteImagemin from "vite-plugin-imagemin";

export default function configImageminPlugin(): Plugin | null {
  const config = loadEnv(process.env.NODE_ENV || "development", process.cwd());
  if (config.VITE_IMAGEMIN_STATUS === "false" || config.VITE_IMAGEMIN_STATUS !== "true") {
    return null;
  }
  console.log("🚀 Activate image compression plugin...");
  const imageminPlugin = viteImagemin({
    gifsicle: {
      optimizationLevel: 7,
      interlaced: false
    },
    optipng: {
      optimizationLevel: 7
    },
    mozjpeg: {
      quality: 20
    },
    pngquant: {
      quality: [0.8, 0.9],
      speed: 4
    },
    svgo: {
      plugins: [
        {
          name: "removeViewBox"
        },
        {
          name: "removeEmptyAttrs",
          active: false
        }
      ]
    }
  });
  return imageminPlugin;
}
