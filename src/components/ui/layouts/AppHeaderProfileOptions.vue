<script setup lang="ts">
import Menu from 'primevue/menu'
import { ref } from 'vue'
import AppIcon from '@/components/ui/icons/AppIcon.vue'
import AppConfirmToExitModal from '@/components/ui/modal/AppConfirmToExitModal.vue'

const menu = ref()
const modal = ref()
const items = ref([
  {
    label: 'Sair'
  }
])

const toggle = (event: any) => {
  menu.value.toggle(event)
}

const openModal = () => {
  modal.value.showModal();
}

defineExpose({
  toggle
})
</script>

<template>
  <Menu class="app-profile-options" ref="menu" id="overlay_menu" :model="items" :popup="true">
    <template #item="{ item }">
      <div class="app-profile-options--exit" @click="openModal">
        <AppIcon name="right-from-bracket" />
        <span>{{ item.label }}</span>
      </div>
    </template>
  </Menu>

  <AppConfirmToExitModal ref="modal" />
</template>

<style lang="scss">
.app-profile-options {
  cursor: pointer;

  &--exit {
    color: #cb2b41;
    padding: 8px 12px;
    display: flex;
    align-items: center;
    gap: 8px;
  }
}
</style>
