<script setup lang="ts">
import AppLink from '../link/AppLink.vue'
defineOptions({
  name: 'AppBreadcrumbItem'
})

type AppBreadcrumbItemProps = {
  path: any
  breadcrumb: string
  disabled?: boolean
}

defineProps<AppBreadcrumbItemProps>()
</script>

<template>
  <li class="app-breadcrumb-item">
    <AppLink v-if="disabled" :to="path" > {{ breadcrumb }}</AppLink>
    <span v-else>{{ breadcrumb }}</span>
    <span class="app-breadcrumb-item--separator" >/</span>
  </li>
</template>

<style scoped lang="scss">
.app-breadcrumb-item {
  color: var(--color-breadcrumb-item);

  &:last-child {
    font-weight: bold;
    pointer-events: none;

    & .app-breadcrumb-item--separator {
      display: none;
    }
  }
}
</style>
