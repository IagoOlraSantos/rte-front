<script setup lang="ts">
import AppSquareButton from './AppSquareButton.vue'
import AppIcon from '../icons/AppIcon.vue'

defineOptions({
  name: 'AppButtonBurger'
})
</script>

<template>
  <AppSquareButton class="app-button-burger">
    <AppIcon size="xl" name="bars" />
  </AppSquareButton>
</template>

<style lang="scss" scoped>
.app-button-burger {
  background-color: var(--color-bg-menu-icon) !important;
  color: var(--color-text);
}
</style>
