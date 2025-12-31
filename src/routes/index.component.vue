<script setup lang="ts">
import { useQuery } from "@tanstack/vue-query";
import { fetchTodo } from "../todo";

const { data: todo } = useQuery({
  queryKey: ["todo", "1"],
  queryFn: () => fetchTodo("1"),
});
</script>

<template>
  <div class=" whitespace-pre-wrap">
    {{ todo }}
  </div>
</template>
