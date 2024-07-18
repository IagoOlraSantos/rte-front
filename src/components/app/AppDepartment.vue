<script setup lang="ts">
import { useGlobalState } from '@/services/composables'
defineOptions({
  name: 'AppDepartment'
})

const app = useGlobalState();
</script>

<template>
  <span class="app-setor-name">
    <slot>{{ app.appDepartment }}</slot>
  </span>
</template>

<style scoped lang="scss">
.app-setor-name {
  color: var(--color-app-name);
  font-size: var(--size-20);
  font-weight: 800;
  text-transform: uppercase;
  white-space: break-spaces;
  text-align: center;
  max-width: 200px;
}
</style>
