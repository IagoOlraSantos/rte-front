<script setup lang="ts">
defineOptions({
  name: 'AppContainer'
})
</script>

<template>
  <div class="app-container">
    <slot></slot>
  </div>
</template>


<style scoped lang="scss">
.app-container {
  @include responsive('mobile') {
    padding: 0 var(--size-16) var(--size-16) var(--size-16);
  }

  display: flex;
  flex: 1;
  padding: 0 var(--size-32) var(--size-32) var(--size-32);
  flex-direction: column;
  scrollbar-gutter: stable;
  overflow-x: auto;
  height: max-content;
}

</style>
