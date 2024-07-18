<script setup lang="ts">
import AppBreadcrumbItem from './AppBreadcrumbItem.vue'
import useBreadcrumb from '@/services/composables/use-breadcrumb'
defineOptions({
  name: 'AppBreadcrumb'
})

const { breadcrumbs } = useBreadcrumb();
</script>

<template>
  <nav aria-label="breadcrumb">
    <ul class="app-breadcrumb" type="ol">
      <template v-for="(crumb, index) in breadcrumbs" :key="index">
        <AppBreadcrumbItem
          v-if="crumb.path"
          :path="crumb.path"
          :breadcrumb="crumb.breadcrumb"
          :disabled="index < breadcrumbs.length - 1"
        />
      </template>
    </ul>
  </nav>
</template>

<style scoped lang="scss">
.app-breadcrumb {
  display: flex;
  list-style: none;
  padding: 0;
  margin: 0;
}
</style>
