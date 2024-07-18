import { z } from 'zod'

const envSchema = z.object({
  MODE: z.enum(['production', 'development']).default('development'),
  VITE_SERVER_URL: z.coerce.string().default(''),
  VITE_API_PRODUCTION: z.coerce.string().default(''),
  VITE_API_DEVELOPMENT: z.coerce.string().default('')
})

type ConfigType = {
  serverUrl: string
  apiUrl: string
  isProd: boolean
  isDev: boolean
}

export const config = (): ConfigType => {
  const _env = envSchema.safeParse(import.meta.env)

  if (!_env.success) {
    console.error('env not found', _env.error.format())
    throw new Error('env not found')
  }

  const url = import.meta.env.VITE_SERVER_URL
  const apiProd = import.meta.env.VITE_API_PRODUCTION
  const apiDev = import.meta.env.VITE_API_DEVELOPMENT

  const isProd = import.meta.env.MODE === 'production'
  const isDev = import.meta.env.MODE === 'development'
  const apiUrl = isProd ? apiProd : apiDev
  return {
    serverUrl: url,
    apiUrl,
    isProd,
    isDev
  }
}

export const env = config()
