<script setup lang="ts">
import type { RouteLocationNamedRaw, RouteLocationPathRaw } from 'vue-router'

defineOptions({
  name: 'AppLink'
})

type AppLinkProps = {
  to:  string | RouteLocationPathRaw | RouteLocationNamedRaw
}

defineProps<AppLinkProps>()
</script>

<template>
  <router-link class="app-link" :to="to">
    <slot></slot>
  </router-link>
</template>

<style scoped lang="scss">
.app-link {
  color: currentColor;
}
</style>
