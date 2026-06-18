import generouted from "@generouted/react-router/plugin";
import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";
import { generateCharactersList, publicWebpConverter } from "./vite-plugins";

export default defineConfig({
  plugins: [
    react(),
    generouted(),
    generateCharactersList(),
    publicWebpConverter(50),
  ],
});
