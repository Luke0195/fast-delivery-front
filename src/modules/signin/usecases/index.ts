import { AuthenticationParams, Account } from '..'

export interface Authenticate {
  authenticate(params: AuthenticationParams): Promise<Account>
}
