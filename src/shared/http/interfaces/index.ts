import { HttpStatusCode } from '../enums'

type HttpMethod = 'GET' | 'POST' | 'PUT' | 'DELETE'

export type HttpRequestData = {
  url: string
  method: HttpMethod
  body?: any
  headers?: any
}

export type HttResponseData<T = any> = {
  statusCode: HttpStatusCode
  body?: T
}

export interface HttpClient<R = any> {
  request(data: HttpRequestData): Promise<HttResponseData<R>>
}
