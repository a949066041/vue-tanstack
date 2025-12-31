import { createFileRoute } from "@tanstack/vue-router";
import { fetchTodo } from "../todo";

export const Route = createFileRoute("/query/$id")({
  loader({ params }) {
    return fetchTodo(params.id);
  },
});
