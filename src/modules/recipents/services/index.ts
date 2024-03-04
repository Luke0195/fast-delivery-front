import httpClient from '@app/shared/http/httpclient'
import { RecipentFormData } from '../'

class RecipentService {
  constructor() {}

  async createRecipent(data: RecipentFormData): Promise<RecipentFormData> {
    const response = await httpClient.request({
      method: 'POST',
      url: 'recipents',
      body: data,
    })
    console.log(response)
    return response.body
  }
}

export default new RecipentService()
