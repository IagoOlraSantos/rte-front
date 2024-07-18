<script setup lang="ts">
import { computed } from 'vue'

defineOptions({
  name: 'AppSquareButton'
})

type AppButtonSquareProps = {
  size?: 'sm' | 'md' | 'lg' | 'xl'
}

const props = withDefaults(defineProps<AppButtonSquareProps>(), {
  size: 'xl'
})

const classes = computed(() => {
  return {
    'app-square-button': true,
    'app-square-button--sm': props.size === 'sm',
    'app-square-button--md': props.size === 'md',
    'app-square-button--lg': props.size === 'lg',
    'app-square-button--xl': props.size === 'xl'
  }
})
</script>

<template>
  <button :class="classes">
    <slot></slot>
  </button>
</template>

<style scoped lang="scss">
.app-square-button {
  border-radius: var(--size-16);
  box-shadow: var(--shadow-1);
  cursor: pointer;
  transition: var(--transition-transform);

  &--sm {
    min-width: var(--size-24);
    min-height: var(--size-24);
  }
  &--md {
    min-width: var(--size-40);
    min-height: var(--size-40);
  }
  &--lg {
    min-width: var(--size-48);
    min-height: var(--size-48);
  }
  &--xl {
    min-width: var(--size-56);
    min-height: var(--size-56);
  }

  &:active {
    transform: scale(0.95);
  }
}
</style>
