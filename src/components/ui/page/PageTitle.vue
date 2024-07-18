<script setup lang="ts">
defineOptions({
  name: 'PageTitle'
})
</script>

<template>
  <h1 class="page-title">
    <slot></slot>
  </h1>
</template>

<style scoped lang="scss">
.page-title {
  @include responsive('mobile') {
    font-size: var(--size-24);
  }

  @include responsive('tablet') {
    font-size: var(--size-28);
  }

  font-size: var(--size-32);
}
</style>
