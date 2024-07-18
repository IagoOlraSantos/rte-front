<script setup lang="ts">
import AppHeaderProfileName from './AppHeaderProfileName.vue'
import AppHeaderProfileImage from './AppHeaderProfileImage.vue'
import AppHeaderProfileOptions from './AppHeaderProfileOptions.vue'
import { ref } from 'vue'

defineOptions({
  name: 'AppHeaderProfile'
})

export type AppProfileInfoProps = {
  name: string
  url: string
}

defineProps<Partial<AppProfileInfoProps>>()

const menu = ref()
const toggle = (event: any) => {
  menu.value.toggle(event)
}
</script>

<template>
  <div class="app-profile-info" @click="toggle" aria-haspopup="true" aria-controls="overlay_menu">
    <AppHeaderProfileName :name="name" />
    <AppHeaderProfileImage alt="Imagem de perfil do usuário" :url="url" />
  </div>
  <AppHeaderProfileOptions ref="menu"/>
</template>

<style scoped lang="scss">
.app-profile-info {
  @include responsive('laptop') {
    margin-left: var(--size-20);
    padding-left: var(--size-20);
  }

  @include responsive('tablet') {
    margin-left: 0;
    padding-left: 0;
    border-left: 0;
  }

  @include responsive('mobile') {
    display: none;
  }

  display: flex;
  align-items: center;
  gap: var(--size-32);
  padding-left: var(--size-40);
  border-left: var(--size-1) solid var(--rte-light-bluish-gray);
  margin-left: var(--size-40);
  position: relative;
  cursor: pointer;
}
</style>
