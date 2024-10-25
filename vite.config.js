import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: "/penalty-moto/", // Set your base path here
  build: {
    rollupOptions: {
      output: {
        assetFileNames: "[name][extname]", // Keeps original filenames without hashes
      },
    },
  },
});
