<script setup lang="ts">
import AppImageRounded from '../img/AppImageRounded.vue'

defineOptions({
  name: 'AppHeaderProfileImage'
})

export type ProfileImageProps = {
  url: string
  alt: string
}

withDefaults(defineProps<Partial<ProfileImageProps>>(), {
  url: 'https://picsum.photos/200',
  alt: 'Imagem de perfil'
})
</script>

<template>
  <AppImageRounded class="app-profile-image" :src="url" :alt="alt" />
</template>

<style scoped lang="scss">
.app-profile-image {
  outline: var(--size-2) solid var(--rte-white);
  cursor: pointer;
}
</style>
