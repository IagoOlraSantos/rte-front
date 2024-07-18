import { ref } from 'vue'

export function useLoading() {
  const isLoading = ref(false)
  return {
    isLoading,
    startLoading() {
      isLoading.value = true
    },
    stopLoading() {
      isLoading.value = false
    }
  }
}
