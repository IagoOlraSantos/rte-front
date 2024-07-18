<script setup lang="ts">
defineOptions({
  name: 'AppPageTitleContainer'
})
</script>

<template>
  <div class="app-page-title-container">
    <slot></slot>
  </div>
</template>

<style scoped lang="scss">
.app-page-title-container {
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  align-items: center;
  justify-content: space-between;
}
</style>
