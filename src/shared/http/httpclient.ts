import { HttResponseData, HttpClient, HttpRequestData } from './interfaces'

class HttpFetchClient implements HttpClient {
  private readonly baseUrl: string
  constructor() {
    this.baseUrl = 'http://localhost:8080'
  }
  async request({
    url,
    method,
    body,
    headers,
  }: HttpRequestData): Promise<HttResponseData<any>> {
    console.log(body)
    const response = await fetch(`${this.baseUrl}/${url}`, {
      body: body,
      method: method,
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
    })
    return response.json()
  }
}

export default new HttpFetchClient()
