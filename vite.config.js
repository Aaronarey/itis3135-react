/*
  vite.config.js - build settings for the React version of my course site.
  The output follows the class folder standards where a React build allows:
  the stylesheet is written to styles/default.css, scripts go in scripts/,
  CSS is not minified so its explanatory comments survive, and the
  Accumulus (lint.page) script is moved to the end of <head> after Vite
  adds its own tags.
  Vite config reference: https://vite.dev/config/
*/
import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

// Moves the lint.page Accumulus script to be the last tag in <head>
function accumulusLastInHead() {
  const tag = '<script src="https://lint.page/kit/4d0fe3.js" crossorigin="anonymous"></script>';
  return {
    name: "accumulus-last-in-head",
    enforce: "post",
    transformIndexHtml: {
      order: "post",
      handler(html) {
        return html.replace(tag, "").replace("</head>", `  ${tag}\n</head>`);
      }
    }
  };
}

export default defineConfig({
  plugins: [react(), accumulusLastInHead()],
  build: {
    cssMinify: false,
    rollupOptions: {
      output: {
        entryFileNames: "scripts/main.js",
        chunkFileNames: "scripts/[name].js",
        assetFileNames: (asset) =>
          asset.names && asset.names.some((n) => n.endsWith(".css"))
            ? "styles/default.css"
            : "assets/[name][extname]"
      }
    }
  }
});
