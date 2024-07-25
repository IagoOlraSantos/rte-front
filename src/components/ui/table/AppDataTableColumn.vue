<script setup lang="ts">
import Column from 'primevue/column'
</script>

<template>
  <Column v-bind="$attrs">
    <template #body="slotProps">
      <slot name="body" v-bind="slotProps"></slot>
    </template>
  </Column>
</template>
