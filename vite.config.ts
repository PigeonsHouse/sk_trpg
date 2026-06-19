import generouted from "@generouted/react-router/plugin";
import react from "@vitejs/plugin-react";
import fs from "node:fs";
import { createRequire } from "node:module";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { defineConfig } from "vite";
import type vitePrerenderType from "vite-plugin-prerender";
import { generateCharactersList, publicWebpConverter } from "./vite-plugins";

const dirname = path.dirname(fileURLToPath(import.meta.url));
const require = createRequire(import.meta.url);
const vitePrerender = require("vite-plugin-prerender") as typeof vitePrerenderType;
const PuppeteerRenderer = vitePrerender.PuppeteerRenderer;

const getPrerenderRoutes = () => {
  const charactersDir = path.join(dirname, "src/content/characters");
  const characterRoutes = fs
    .readdirSync(charactersDir)
    .filter((file) => file.endsWith(".json"))
    .map((file) => {
      const [, ...idParts] = file.replace(".json", "").split("-");
      return `/characters/${idParts.join("-")}`;
    });

  return ["/", "/about", ...characterRoutes];
};

export default defineConfig({
  build: {
    target: "es2018",
  },
  plugins: [
    react(),
    generouted(),
    generateCharactersList(),
    publicWebpConverter(50),
    vitePrerender({
      staticDir: path.join(dirname, "dist"),
      routes: getPrerenderRoutes(),
      renderer: new PuppeteerRenderer({
        args: ["--no-sandbox", "--disable-setuid-sandbox"],
        maxConcurrentRoutes: 1,
        renderAfterTime: 500,
      }),
    }),
  ],
});
