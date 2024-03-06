import { RecipentFormData, DataInterface } from '../interfaces'
import formatters from '@app/utils/formatters'
export function makeDefaultsValuesToFormData(): RecipentFormData {
  return {
    name: '',
    address: {
      city: '',
      code: '',
      complement: '',
      name: '',
      number: '',
      state: '',
      sub_locallity: '',
    },
  }
}

export function mapDataToDomain(data: RecipentFormData[]): DataInterface[] {
  return data.map((item) => {
    let parsed: DataInterface = {
      id: formatters.emptyStringOrDefault(item.id),
      address_name: formatters.emptyStringOrDefault(item.address.name),
      name: formatters.emptyStringOrDefault(item.name),
      action: <h1> teste </h1>,
    }
    return parsed
  })
}
