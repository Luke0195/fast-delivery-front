type AddressData = {
  name?: string
  complement?: string
  code?: string
  sub_locallity?: string
  state?: string
  city?: string
  number?: string
}

export interface RecipentFormData {
  name?: string
  address?: AddressData
}
