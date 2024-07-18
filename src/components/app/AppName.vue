<script setup lang="ts">
import { useGlobalState } from '@/services/composables'

defineOptions({
  name: 'AppName'
})

const app = useGlobalState();
</script>

<template>
  <span class="app-name">
    <slot>{{ app.appName }}</slot>
  </span>
</template>

<style scoped lang="scss">
.app-name {
  color: var(--color-app-name);
  font-size: var(--size-24);
}
</style>
