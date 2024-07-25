import { useToast } from 'primevue/usetoast'

type PayloadToast = {
  title: string
  message: string
}

export function useAppToast() {
  const toast = useToast()
  const TTL = 3000;
  return {
    success: ({ title, message }: PayloadToast) => {
      toast.add({
        severity: 'success',
        summary: title,
        detail: message,
        life: TTL,
      })
    },
    error: ({ title, message }: PayloadToast) => {
      console.log(title, message)
      toast.add({
        severity: 'error',
        summary: title,
        detail: message,
        life: TTL,
      })
    }
  }
}
