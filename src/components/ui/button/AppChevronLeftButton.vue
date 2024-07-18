<script setup lang="ts">
import AppRoundedButton from './AppRoundedButton.vue'
import AppIcon from '../icons/AppIcon.vue'

defineOptions({
  name: 'AppChevronLeftButton'
})
</script>

<template>
  <AppRoundedButton class="app-button-chevron-left">
    <AppIcon size="xl" name="chevron-left" />
  </AppRoundedButton>
</template>

<style lang="scss" scoped>
.app-button-chevron-left {
  background-color: var(--color-bg-menu-icon) !important;
  color: var(--color-text);
}
</style>
