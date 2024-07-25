import type { App, ObjectPlugin } from 'vue'
import PrimeVue from 'primevue/config'
import Aura from '@primevue/themes/aura'
import { definePreset } from '@primevue/themes'
import ToastService from 'primevue/toastservice'
import Toast from 'primevue/toast';
import ConfirmationService from 'primevue/confirmationservice'

const AppDesignPlugin: ObjectPlugin = {
  install(app: App) {
    const RtePreset = definePreset(Aura, {
      semantic: {
        primary: {
          50: '{sky.50}',
          100: '{sky.100}',
          200: '{sky.200}',
          300: '{sky.300}',
          400: '{sky.400}',
          500: '{sky.500}',
          600: '{sky.600}',
          700: '{sky.700}',
          800: '{sky.800}',
          900: '{sky.900}',
          950: '{sky.950}'
        }
      }
    })

    app.use(PrimeVue, {
      theme: {
        preset: RtePreset,
        options: {
          prefix: 'rte',
          darkModeSelector: 'system',
          cssLayer: false
        }
      }
    })

    // Toast
    app.use(ToastService)
    app.component('AppToast', Toast)

    // Modal
    app.use(ConfirmationService)
  }
}

export default AppDesignPlugin
