<script setup lang="ts">
import { useGlobalState } from '@/services/composables'
defineOptions({
  name: 'AppLogo'
})

const app = useGlobalState();
</script>

<template>
  <div class="app-img-logo">
    {{ app.appName }}
  </div>
</template>

<style scoped lang="scss">
.app-img-logo {
  height: var(--size-40);
  width: var(--size-40);
  border-radius: var(--size-8);
  background-color: var(--rte-sky-blue);
  color: var(--rte-white);
  display: grid;
  place-content: center;
}
</style>
