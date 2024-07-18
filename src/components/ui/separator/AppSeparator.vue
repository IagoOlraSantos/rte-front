<script setup lang="ts">
type Props = {
  text: string
}

defineProps<Props>()
</script>

<template>
  <div class="app-separator">
    <span class="app-separator__text">{{ text }}</span>
  </div>
</template>

<style scoped lang="scss">
.app-separator {
  text-align: center;
  width: 100%;
  margin: 12px 0;
  position: relative;

  &__text {
    font-size: 14px;
    padding-inline: 8px;
    background-color: var(--color-bg);
  }

  &:before {
    content: '';
    width: 100%;
    background-color: #DBDBDB;
    height: 1px;
    display: block;
    position: absolute;

    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: -1;
  }
}
</style>
