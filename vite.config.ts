import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import generouted from "@generouted/react-router/plugin";
import { generateCharactersList } from "./vite-plugins/generate-characters-list";

export default defineConfig({
  plugins: [react(), generouted(), generateCharactersList()],
});
