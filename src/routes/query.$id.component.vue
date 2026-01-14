>
<script setup lang="ts">
import type { Todo } from "../todo";
import { useLoaderData, useParams } from "@tanstack/vue-router";
import { watch } from "vue";

const query = useLoaderData({ from: "/query/$id" }) as unknown as Todo;
const search = useParams({ from: "/query/$id" });

watch(search, () => {
  console.error(search.value.id);
});
</script>

<template>
  <div class=" whitespace-pre-wrap">
    {{ query }}
  </div>
</template>
