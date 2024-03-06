import httpClient from '@app/shared/http/httpclient'
import { RecipentFormData } from '../'
import { HttResponseData } from '@app/shared/http/interfaces'

class RecipentService {
  constructor() {}

  async createRecipent(data: RecipentFormData): Promise<RecipentFormData> {
    const response = await httpClient.request({
      method: 'POST',
      url: 'recipents',
      body: JSON.stringify(data),
    })
    console.log(response)
    return response.body
  }

  async getAllRecipents(): Promise<HttResponseData> {
    const response: any = await httpClient.request({
      method: 'GET',
      url: 'recipents',
    })

    return {
      body: response.content,
    } as HttResponseData
  }
}

export default new RecipentService()
