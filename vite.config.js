import { dirname, resolve } from "path";
import { defineConfig } from "vite";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));

export default defineConfig({
  root: "src", // your source folder

  build: {
    outDir: "../dist", // output folder
    rollupOptions: {
      input: {
        main: resolve(__dirname, "src/index.html"),
        conditions: resolve(__dirname, "src/conditions.html"),
        visitor_center: resolve(__dirname, "src/visitor-center.html")
      }
    }
  }
});
