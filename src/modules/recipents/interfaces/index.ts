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
  id?: string
  name?: string
  address?: AddressData
}

export interface DataInterface {
  id: string
  name: string
  address_name: string
  action: any
}
