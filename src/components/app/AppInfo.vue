<script setup lang="ts">
import AppName from './AppName.vue'
import AppLogo from './AppLogo.vue'

defineOptions({
  name: 'AppInfo'
})
</script>

<template>
  <div class="app-info">
    <AppLogo />
    <AppName class="app-info--name" />
  </div>
</template>

<style scoped lang="scss">
.app-info {
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  gap: var(--size-24);

  &--name {
    @include responsive('mobile') {
      display: none;
    }
  }
}
</style>
