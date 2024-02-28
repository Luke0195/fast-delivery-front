import { AuthenticationParams } from '..'

export interface Authenticate {
  authenticate(params: AuthenticationParams): Promise<string>
}
