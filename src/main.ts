import { createApp } from 'vue'
import { createPinia } from 'pinia'

import './design/app/index.scss'
import App from './App.vue'

import { bootRouter } from './router'
import AppRouterPlugin from './plugins/app-router'
import AppGatewayPlugin from './plugins/app-gateway'
import AppGlobalErrorPlugin from './plugins/app-global-errors'
import AppDesignPlugin from './plugins/app-design'

export async function bootstrap() {
  const router = await bootRouter()
  const app = createApp(App)

  // Store
  app.use(createPinia())

  // Router
  app.use(router)

  // Plugins
  app.use(AppDesignPlugin)
  app.use(AppRouterPlugin)
  app.use(AppGatewayPlugin)
  app.use(AppGlobalErrorPlugin)

  // App
  app.mount('#app')
}

bootstrap()
  .then(() => {
    console.log('Aplicação inicializada!')
  })
  .catch((e) => {
    console.error(e)
  })
