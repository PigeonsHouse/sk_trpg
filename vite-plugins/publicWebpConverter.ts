import { glob } from "glob";
import fs from "node:fs/promises";
import path from "node:path";
import sharp from "sharp";
import type { Plugin, ResolvedConfig } from "vite";

const SOURCE_IMAGE_EXTENSIONS = ["png", "jpg", "jpeg"] as const;
const SOURCE_IMAGE_PATTERN = `**/*.{${SOURCE_IMAGE_EXTENSIONS.join(",")}}`;
const IMAGE_URL_PATTERN =
  /\/images\/[^"'\\\s?#]+\.(?:png|jpe?g)(?=$|["'\\\s?#])/gi;

const toWebpPath = (value: string) => value.replace(/\.(png|jpe?g)$/i, ".webp");

export function publicWebpConverter(quality: number): Plugin {
  let config: ResolvedConfig;

  return {
    name: "public-webp-converter",
    apply: "build",

    configResolved(resolvedConfig) {
      config = resolvedConfig;
    },

    async closeBundle() {
      const distDir = path.resolve(config.root, config.build.outDir);
      const imagesDir = path.join(distDir, "images");
      const dataDir = path.join(distDir, "data");

      const sourceImages = await glob(SOURCE_IMAGE_PATTERN, {
        cwd: imagesDir,
        absolute: true,
        nodir: true,
        windowsPathsNoEscape: true,
      });

      const webpSizeRates = await Promise.all(
        sourceImages.map(async (imagePath) => {
          const webpPath = toWebpPath(imagePath);
          const originalSize = (await fs.stat(imagePath)).size;

          await sharp(imagePath).webp({ quality }).toFile(webpPath);
          const webpSize = (await fs.stat(webpPath)).size;
          await fs.rm(imagePath);

          return originalSize === 0 ? 0 : (webpSize / originalSize) * 100;
        })
      );
      const averageWebpSizeRate =
        webpSizeRates.length === 0
          ? 0
          : webpSizeRates.reduce((sum, rate) => sum + rate, 0) /
            webpSizeRates.length;

      const jsonFiles = await glob("**/*.json", {
        cwd: dataDir,
        absolute: true,
        nodir: true,
        windowsPathsNoEscape: true,
      });

      let updatedJsonCount = 0;

      await Promise.all(
        jsonFiles.map(async (jsonPath) => {
          const content = await fs.readFile(jsonPath, "utf-8");
          const updatedContent = content.replace(IMAGE_URL_PATTERN, (url) =>
            toWebpPath(url)
          );

          if (updatedContent !== content) {
            updatedJsonCount += 1;
            await fs.writeFile(jsonPath, updatedContent, "utf-8");
          }
        })
      );

      console.log(
        `[public-webp-converter] Converted ${sourceImages.length} images and updated ${updatedJsonCount} JSON files.` +
          `WebP images are ${averageWebpSizeRate.toFixed(2)}% of the original size on average.`
      );
    },
  };
}
