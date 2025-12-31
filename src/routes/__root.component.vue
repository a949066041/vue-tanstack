<script setup lang="ts">
import { VueQueryDevtools } from "@tanstack/vue-query-devtools";
import { Link, Outlet } from "@tanstack/vue-router";
import { TanStackRouterDevtools } from "@tanstack/vue-router-devtools";
</script>

<template>
  <div>
    <Link to="/" :active-props="{ class: ' text-green-500' }">
      Home
    </Link>
    <Link to="/query/123" :active-props="{ class: ' text-green-500' }">
      query 123
    </Link>
    <Outlet />
    <TanStackRouterDevtools />
    <VueQueryDevtools />
  </div>
</template>
