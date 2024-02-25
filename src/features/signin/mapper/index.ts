import { AuthenticationParams } from '../interfaces'
export const makeDefaultValues = (): AuthenticationParams => {
  return {
    email: '',
    password: '',
  }
}
