<script setup lang="ts">
defineOptions({
  name: 'AppContent'
})
</script>

<template>
  <main class="app-content">
    <slot></slot>
  </main>
</template>

<style lang="scss">
.app-content {
  @include scrollbar();

  scrollbar-gutter: stable;
  overflow-y: auto;
  height: auto;
}
</style>
