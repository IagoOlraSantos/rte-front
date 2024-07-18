<script setup lang="ts">
import { computed } from 'vue'

defineOptions({
  name: 'AppRoundedButton'
})

type AppButtonRoundedProps = {
  size?: 'sm' | 'md' | 'lg' | 'xl'
}

const props = withDefaults(defineProps<AppButtonRoundedProps>(), {
  size: 'md'
})

const classes = computed(() => {
  return {
    'app-button-rounded': true,
    'app-button-rounded--sm': props.size === 'sm',
    'app-button-rounded--md': props.size === 'md',
    'app-button-rounded--lg': props.size === 'lg',
    'app-button-rounded--xl': props.size === 'xl'
  }
})
</script>

<template>
  <button :class="classes">
    <slot></slot>
  </button>
</template>

<style scoped lang="scss">
.app-button-rounded {
  border-radius: 50%;
  box-shadow: var(--shadow-1);
  cursor: pointer;
  transition: var(--transition-transform);

  &--sm {
    width: var(--size-24);
    height: var(--size-24);
  }
  &--md {
    width: var(--size-40);
    height: var(--size-40);
  }
  &--lg {
    width: var(--size-48);
    height: var(--size-48);
  }
  &--xl {
    width: var(--size-56);
    height: var(--size-56);
  }

  &:hover {
    transform: var(--scale-sm);
  }

  &:active {
    transform: var(--scale-default);
  }
}
</style>
