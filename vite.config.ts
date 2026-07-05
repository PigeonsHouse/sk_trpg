import generouted from "@generouted/react-router/plugin";
import react from "@vitejs/plugin-react";
import fs from "node:fs";
import { createRequire } from "node:module";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { defineConfig } from "vite";
import type vitePrerenderType from "vite-plugin-prerender";
import {
  generateCharacterHeightsList,
  generateCharactersList,
  publicWebpConverter,
} from "./vite-plugins";

const dirname = path.dirname(fileURLToPath(import.meta.url));
const require = createRequire(import.meta.url);
const vitePrerender =
  require("vite-plugin-prerender") as typeof vitePrerenderType;
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

const removeHydratedClass = (html: string) =>
  html
    .replace(/\sclass="app-hydrated"/, "")
    .replace(
      /\sclass="([^"]*)\bapp-hydrated\b([^"]*)"/,
      (_match, before, after) => {
        const className = `${before} ${after}`.trim().replace(/\s+/g, " ");
        return className ? ` class="${className}"` : "";
      }
    );

export default defineConfig({
  build: {
    target: "es2018",
  },
  plugins: [
    react(),
    generouted(),
    generateCharactersList(),
    generateCharacterHeightsList(),
    publicWebpConverter(50),
    vitePrerender({
      staticDir: path.join(dirname, "dist"),
      routes: getPrerenderRoutes(),
      postProcess(renderedRoute) {
        renderedRoute.route = renderedRoute.originalRoute;
        renderedRoute.html = removeHydratedClass(renderedRoute.html);

        if (renderedRoute.route === "/") {
          return renderedRoute;
        }

        const nestedOutputPath = path.join(
          dirname,
          "dist",
          renderedRoute.route,
          "index.html"
        );
        fs.mkdirSync(path.dirname(nestedOutputPath), { recursive: true });
        fs.writeFileSync(nestedOutputPath, renderedRoute.html.trim(), "utf-8");

        renderedRoute.outputPath = path.join(
          dirname,
          "dist",
          `${renderedRoute.route.slice(1)}.html`
        );

        return renderedRoute;
      },
      renderer: new PuppeteerRenderer({
        args: ["--no-sandbox", "--disable-setuid-sandbox"],
        maxConcurrentRoutes: 1,
        renderAfterTime: 500,
        viewport: {
          width: 1200,
          height: 900,
        },
      }),
    }),
  ],
});
