<script setup lang="ts">
import AppCloseButton from '../button/AppCloseButton.vue'
import AppInfo from '../../app/AppInfo.vue'
import AppDepartment from '../../app/AppDepartment.vue'

defineOptions({
  name: 'AppSidebarHeader'
})
</script>

<template>
  <div class="app-sidebar-header">
    <AppCloseButton class="app-sidebar-header__btn" @click="$emit('toggle')" />
    <AppInfo />
    <AppDepartment />
  </div>
</template>

<style scoped lang="scss">
.app-sidebar-header {
  @include responsive('mobile') {
    flex-direction: row;
  }

  display: flex;
  flex-direction: column;
  align-items: center;
  flex-wrap: nowrap;
  gap: var(--size-24);
  width: 100%;
  padding: var(--size-24);
  border-bottom: 1px solid var(--color-bg-divider);
  position: relative;

  &__btn {
    @include responsive('mobile') {
      display: block;
    }

    display: none;
    top: var(--size-24);
    right: var(--size-24);
    position: absolute;
    border-radius: var(--size-8);
    background-color: var(--rte-translucent-sky-blue) !important;
    color: var(--rte-white);
  }
}
</style>
