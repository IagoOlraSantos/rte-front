import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import Account from '../../../models/Account'
import { useTokenStorage, useUserStorage } from '../../../services/storage'

export const useAuth = defineStore('auth', () => {
  const userStorage = useUserStorage()
  const tokenStorage = useTokenStorage()

  const account = ref<Account | null>(null)

  const token = computed(() => account.value?.token)
  const user = computed(() => account.value?.user)

  function setAccount(data: Account) {
    account.value = data
    userStorage.setUser(data.user);
    tokenStorage.setToken(data.token)
  }

  function loadAccount() {
    const memoryToken = tokenStorage.getToken()
    const memoryUser = userStorage.getUser()

    if (memoryToken && memoryUser) {
      account.value = new Account({
        token: memoryToken,
        user: memoryUser
      })
      return;
    }

    tokenStorage.removeToken();
    userStorage.removeUser();
  }

  loadAccount();

  function isLoggedIn() {
    loadAccount();
    return !!token.value && !!user.value;
  }

  return { token, user, setAccount, isLoggedIn }
})
