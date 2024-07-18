<script setup lang="ts">
import ConfirmDialog from 'primevue/confirmdialog';
import { useConfirm } from "primevue/useconfirm";
import type { ConfirmationOptions } from 'primevue/confirmationoptions'

const confirm = useConfirm();
const props = defineProps<ConfirmationOptions>()

const showModal = () => {
  confirm.require(props)
}

defineExpose({
  showModal
})
</script>

<template>
  <ConfirmDialog></ConfirmDialog>
</template>
