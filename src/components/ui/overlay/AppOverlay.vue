<script setup lang="ts">
import { computed } from 'vue'

defineOptions({
  name: 'AppOverlay'
})

const emit = defineEmits(['toggle'])

const props = defineProps({
  visible: {
    type: Boolean,
    default: false
  },
  responsive: {
    type: Boolean,
    default: false
  }
})

const classCss = computed(() => {
  return {
    responsive: props.responsive
  }
})
</script>

<template>
  <transition name="fade">
    <div v-if="visible" :class="classCss" class="app-overlay" @click="emit('toggle')"></div>
  </transition>
</template>

<style lang="scss" scoped>
.app-overlay {
  position: absolute;
  background-color: var(--color-bg-overlay);
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: var(--z-1);
  cursor: pointer;

  &.responsive {
    @media screen and (min-width: 990px) {
      display: none;
    }
  }
}
</style>
