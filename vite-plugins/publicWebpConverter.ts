import { glob } from "glob";
import fs from "node:fs/promises";
import path from "node:path";
import sharp from "sharp";
import type { Plugin, ResolvedConfig } from "vite";

const SOURCE_IMAGE_EXTENSIONS = ["png", "jpg", "jpeg"] as const;
const SOURCE_IMAGE_PATTERN = `**/*.{${SOURCE_IMAGE_EXTENSIONS.join(",")}}`;
const IMAGE_URL_PATTERN = /^\/images\/.+\.(png|jpe?g)$/i;

const toWebpPath = (value: string) => value.replace(/\.(png|jpe?g)$/i, ".webp");

const capitalize = (value: string) =>
  `${value.charAt(0).toUpperCase()}${value.slice(1)}`;

const toConvertedValue = (value: unknown): unknown => {
  if (typeof value === "string") {
    return IMAGE_URL_PATTERN.test(value) ? toWebpPath(value) : undefined;
  }

  if (Array.isArray(value)) {
    const convertedValues = value.map((item) => {
      if (typeof item !== "string") return item;
      return IMAGE_URL_PATTERN.test(item) ? toWebpPath(item) : item;
    });
    const hasConvertedImage = convertedValues.some(
      (item, index) => item !== value[index]
    );

    return hasConvertedImage ? convertedValues : undefined;
  }

  return undefined;
};

const toConvertedKey = (key: string, value: unknown) => {
  if (key.startsWith("converted")) return undefined;

  const convertedValue = toConvertedValue(value);
  if (convertedValue === undefined) return undefined;

  return {
    key: `converted${capitalize(key.replace(/Url$/, ""))}${key.endsWith("Url") ? "Url" : ""}`,
    value: convertedValue,
  };
};

const addConvertedImagePaths = (value: unknown): unknown => {
  if (Array.isArray(value)) {
    return value.map(addConvertedImagePaths);
  }

  if (value === null || typeof value !== "object") {
    return value;
  }

  const updatedValue: Record<string, unknown> = {};

  for (const [key, childValue] of Object.entries(value)) {
    if (key.startsWith("converted")) continue;

    const updatedChildValue = addConvertedImagePaths(childValue);
    updatedValue[key] = updatedChildValue;

    const convertedEntry = toConvertedKey(key, updatedChildValue);
    if (convertedEntry === undefined) continue;

    updatedValue[convertedEntry.key] = convertedEntry.value;
  }

  return updatedValue;
};

const updateJsonFiles = async (dir: string) => {
  const jsonFiles = await fs
    .access(dir)
    .then(() =>
      glob("**/*.json", {
        cwd: dir,
        absolute: true,
        nodir: true,
        windowsPathsNoEscape: true,
      })
    )
    .catch(() => []);

  const updateResults = await Promise.all(
    jsonFiles.map(async (jsonPath) => {
      const content = await fs.readFile(jsonPath, "utf-8");
      const updatedContent =
        JSON.stringify(addConvertedImagePaths(JSON.parse(content)), null, 2) +
        "\n";

      if (updatedContent === content) return false;

      await fs.writeFile(jsonPath, updatedContent, "utf-8");
      return true;
    })
  );

  return updateResults.filter(Boolean).length;
};

export function publicWebpConverter(quality: number): Plugin {
  let config: ResolvedConfig;
  let contentDir: string;

  return {
    name: "public-webp-converter",
    enforce: "pre",
    apply: "build",

    configResolved(resolvedConfig) {
      config = resolvedConfig;
      contentDir = path.resolve(config.root, "src/content");
    },

    transform(code, id) {
      const cleanId = id.split("?")[0];
      const normalizedId = path.normalize(cleanId);
      const normalizedContentDir = path.normalize(contentDir);

      if (
        !normalizedId.startsWith(normalizedContentDir) ||
        !normalizedId.endsWith(".json")
      ) {
        return;
      }

      return JSON.stringify(
        addConvertedImagePaths(JSON.parse(code)),
        null,
        2
      );
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

      const updatedJsonCount = await updateJsonFiles(dataDir);

      console.log(
        `[public-webp-converter] Converted ${sourceImages.length} images and updated ${updatedJsonCount} JSON files.` +
          ` WebP images are ${averageWebpSizeRate.toFixed(2)}% of the original size on average.`
      );
    },
  };
}
