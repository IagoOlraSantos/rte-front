export default interface HttpClient {
  get<T>(url: string): Promise<T>;
  post<T>(url: string, data?: T): Promise<T>;
  patch<T>(url: string): Promise<T>;
}
