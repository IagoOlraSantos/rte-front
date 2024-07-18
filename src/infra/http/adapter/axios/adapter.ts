import axios, { Axios } from 'axios'
import type HttpClient from '../../HttpClient'
import { useTokenStorage } from '../../../../services/storage'

export default class AxiosClientAdapter implements HttpClient {
  axiosInstance: Axios

  constructor(baseURL: string) {
    this.axiosInstance = axios.create({
      baseURL,
      headers: {
        'Content-Type': 'application/json'
      },
      withCredentials: true
    })
  }

  async get<T>(url: string): Promise<T> {
    this.configToken();
    return this.axiosInstance.get(url)
  }

  async post<T>(url: string, body?: T): Promise<T> {
    this.configToken();
    return this.axiosInstance.post(url, body)
  }

  async patch<T>(url: string): Promise<T> {
    this.configToken();
    return this.axiosInstance.patch(url)
  }

  private configToken(): void {
    const storage = useTokenStorage()
    const token = storage.getToken()
    if(!token) return;
    this.axiosInstance.defaults.headers.common = {'Authorization': `bearer ${token}`}
  }
}
