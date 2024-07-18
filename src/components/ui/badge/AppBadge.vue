<script setup lang="ts">
import Badge from 'primevue/badge';
import { computed } from 'vue'

type Props = {
  color?: 'danger' | 'info',
  type?: 'square' | 'rounded',
  value?: number
}

const props = withDefaults(defineProps<Props>(), {
  color: 'danger',
  value: 0,
  type: 'rounded'
})

const isVisible = computed(() => {
  return props.value > 0
})

const classes = computed(() => {
  return {
    'p-badge-circle': props.type === 'rounded',
    'p-badge-square': props.type === 'square'
  }
})

</script>

<template>
  <Badge v-show="isVisible" :class="classes" value="3" severity="danger"></Badge>
</template>

<style lang="scss">
.p-badge-square {
  border-radius: 6px !important;
}
</style>
