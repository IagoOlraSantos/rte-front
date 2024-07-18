import { ref, watch } from 'vue'

export function useAppSidebar() {
  const isOpen = ref(false);

  const toggle = (isOpened?: boolean) => {
    console.log({ isOpened })
    if(isOpened === false) {
      isOpen.value = false;
      return;
    }
    isOpen.value = !isOpen.value
  }

  watch(
    () => isOpen.value,
    (isOpen: boolean) => {
      if (isOpen) {
        document.body.classList.add('app-sidebar__open')
        return
      }
      document.body.classList.remove('app-sidebar__open')
    },
    { immediate: true }
  )

  return {
    isOpen,
    toggle
  }
}
