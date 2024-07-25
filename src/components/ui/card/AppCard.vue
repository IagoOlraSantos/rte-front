<script setup lang="ts">
import Card from 'primevue/card'
</script>

<template>
  <Card>
    <template #title>
      <slot name="title"></slot>
    </template>

    <template #content>
      <slot></slot>
    </template>
  </Card>
</template>
