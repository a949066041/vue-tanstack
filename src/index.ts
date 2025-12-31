import { VueQueryPlugin } from "@tanstack/vue-query";
import { RouterProvider } from "@tanstack/vue-router";

import { createApp, h } from "vue";
import { router } from "./router";
import "./index.css";

const app = createApp(
  h(RouterProvider, { router }),
);

app.use(VueQueryPlugin);

app.mount("#root");
