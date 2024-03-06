import { AuthenticationParams } from '..'
import { AccountModel } from '@app/models/account'

export interface Authenticate {
  authenticate(params: AuthenticationParams): Promise<AccountModel>
}
