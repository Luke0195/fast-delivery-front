import { RecipentFormData } from '../interfaces'

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
