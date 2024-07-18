<script setup lang="ts">
import AppSquareButton from './AppSquareButton.vue'
import AppIcon from '../icons/AppIcon.vue'
import { computed } from 'vue'

defineOptions({
  name: 'AppCloseButton'
})

type AppButtonCloseProps = {
  rotate?: boolean
}

const props = withDefaults(defineProps<AppButtonCloseProps>(), {
  rotate: false,
})

const classes = computed(() => {
  return {
    'app-button-close': true,
    'app-button-close--rotate': props.rotate
  }
})
</script>

<template>
  <AppSquareButton size="md" :class="classes">
    <AppIcon size="lg" name="close" class="app-button-close__icon" />
  </AppSquareButton>
</template>

<style scoped lang="scss">
.app-button-close {
  background-color: var(--color-bg-menu-icon) !important;
  color: var(--color-text);

  &__icon {
    transition: var(--transition-transform);
  }

  &--rotate {
    &:hover {
      .app-button-close__icon {
        transform: var(--rotate-180);
      }
    }
  }
}
</style>
