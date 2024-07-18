<script setup lang="ts">
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { useAppRoutes } from '../../../services/composables'
import { useAccountGateway } from '../../../services/gateway'
import { useTokenStorage, useUserStorage } from '../../../services/storage'
import AppConfirmModal from './AppConfirmModal.vue'

const modal = ref()
const router = useRouter();
const appRoutes = useAppRoutes();
const accountGateway = useAccountGateway();
const userStorage = useUserStorage();
const tokenStorage = useTokenStorage();

const buttonReject = {
  label: 'Cancelar',
  outlined: true,
  severity: 'secondary',
}

const buttonAccept = {
  label: 'Sair',
  severity: 'danger',
}

const showModal = () => {
  modal.value.showModal();
}

const accept = async () => {
  try {
    await accountGateway.logout();
    userStorage.removeUser();
    tokenStorage.removeToken();
    await router.push(appRoutes.login());
  } catch (e) {
    console.error('Ocorreu algum erro ao sair da aplicação!')
  }
}

const reject = () => {
  //
}

defineExpose({
  showModal
})
</script>

<template>
  <AppConfirmModal
    ref="modal"
    message="Você deseja realmente sair ?"
    header="Sair"
    :accept="accept"
    :reject="reject"
    :reject-props="buttonReject"
    :accept-props="buttonAccept"
  />
</template>
