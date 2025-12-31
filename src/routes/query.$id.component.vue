>
<script setup lang="ts">
import type { Todo } from "../todo";
import { useLoaderData } from "@tanstack/vue-router";

const query = useLoaderData({ from: "/query/$id" }) as unknown as Todo;
</script>

<template>
  <div class=" whitespace-pre-wrap">
    {{ query }}
  </div>
</template>
