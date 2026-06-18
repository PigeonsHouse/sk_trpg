import fs from "node:fs/promises";
import path from "node:path";
import { glob } from "glob";
import sharp from "sharp";
import type { Plugin, ResolvedConfig } from "vite";

const SOURCE_IMAGE_EXTENSIONS = ["png", "jpg", "jpeg"] as const;
const SOURCE_IMAGE_PATTERN = `**/*.{${SOURCE_IMAGE_EXTENSIONS.join(",")}}`;
const IMAGE_URL_PATTERN =
  /\/images\/[^"'\\\s?#]+\.(?:png|jpe?g)(?=$|["'\\\s?#])/gi;

const toWebpPath = (value: string) =>
  value.replace(/\.(png|jpe?g)$/i, ".webp");

export function publicWebpConverter(): Plugin {
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

      await Promise.all(
        sourceImages.map(async (imagePath) => {
          const webpPath = toWebpPath(imagePath);

          await sharp(imagePath).webp({ quality: 80 }).toFile(webpPath);
          await fs.rm(imagePath);
        })
      );

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
        `[public-webp-converter] Converted ${sourceImages.length} images and updated ${updatedJsonCount} JSON files.`
      );
    },
  };
}
