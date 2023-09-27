import { defineConfig } from "vite";
import path from "path";
import cssInjectedByJsPlugin from "vite-plugin-css-injected-by-js";

export default defineConfig({
  plugins: [cssInjectedByJsPlugin()],

  build: {
    lib: {
      entry: path.resolve(__dirname, "./src/main.js"),
      name: "TarkaChat",
      fileName: (format) => `tarka-chat.${format}.js`,
    },
  },
});
