import { antfu } from "@antfu/eslint-config";
import pluginQuery from "@tanstack/eslint-plugin-query";
import pluginRouter from "@tanstack/eslint-plugin-router";

export default antfu({
  stylistic: {
    quotes: "double",
    semi: true,
  },
  markdown: true,
  vue: true,
  yaml: false,
  jsonc: true,
  typescript: true,
  formatters: {
    markdown: "prettier",
    css: "prettier",
  },
}, {
  plugins: {
    "@tanstack/router": pluginRouter,
    "@tanstack/query": pluginQuery,
  },
});
