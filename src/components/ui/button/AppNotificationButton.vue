<script setup lang="ts">
import AppSquareButton from './AppSquareButton.vue'

defineOptions({
  name: 'AppButtonBurger'
})
</script>

<template>
  <AppSquareButton class="app-button-burger">
    <slot></slot>
  </AppSquareButton>
</template>

<style lang="scss">
.app-button-burger {
  background-color: var(--rte-sky-100);
  color: var(--rte-sky-500);
}
</style>
