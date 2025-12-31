import { createRouter } from "@tanstack/vue-router";
import { routeTree } from "./routeTree.gen";

export const router = createRouter({
  routeTree,
  defaultPreload: "intent",
  defaultStaleTime: 5000,
  scrollRestoration: true,
});

declare module "@tanstack/vue-router" {
  interface Register {
    router: typeof router;
  }
}
