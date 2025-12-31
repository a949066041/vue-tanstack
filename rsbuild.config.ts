import { defineConfig } from "@rsbuild/core";
import { pluginVue } from "@rsbuild/plugin-vue";
import tailwind from "@tailwindcss/postcss";
import { tanstackRouter as TanstackRouter } from "@tanstack/router-plugin/rspack";

export default defineConfig({
  plugins: [pluginVue()],
  tools: {
    postcss: {
      postcssOptions: {
        plugins: [tailwind],
      },
    },
    rspack: {
      plugins: [
        TanstackRouter({
          target: "vue",
          autoCodeSplitting: true,
          routeFileIgnorePrefix: "components",
        }),
      ],
    },
  },
});
