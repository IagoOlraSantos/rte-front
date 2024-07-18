<script setup lang="ts">
import Avatar from 'primevue/avatar';

defineOptions({
  name: 'AppImageRounded',
})

export type AppImageRoundedProps = {
  url: string
  alt: string
}

withDefaults(defineProps<Partial<AppImageRoundedProps>>(), {
  url: 'https://picsum.photos/200',
  alt: 'Descrição da imagem'
})
</script>

<template>
  <Avatar class="p-avatar-lg" :image="url" shape="circle" />
</template>

<style lang="scss">
.p-avatar-lg {
  height: 3.5rem;
  width: 3.5rem;
}
</style>
