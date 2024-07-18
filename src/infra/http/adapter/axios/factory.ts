import AxiosClientAdapter from './adapter'
import { env } from '@/env'

export function axiosClientFactory() {
  const baseURL = env.apiUrl;
  return new AxiosClientAdapter(baseURL);
}
