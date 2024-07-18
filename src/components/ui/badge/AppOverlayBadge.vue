<script setup lang="ts">
import OverlayBadge from 'primevue/overlaybadge';

type Props = {
  value?: number;
  color?: 'danger' | 'info'
  size?: 'small' | 'large' | 'xlarge'
}

withDefaults(defineProps<Props>(), {
  color: 'info',
  size: 'small',
})
</script>

<template>
  <OverlayBadge :value="value" :severity="color" :size="size" >
    <slot></slot>
  </OverlayBadge>
</template>
