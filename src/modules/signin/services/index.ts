import { AuthenticationParams } from '..'
import { AccountModel } from '@app/models/account'
import { Authenticate } from '../usecases'
import { v4 } from 'uuid'

class SignInService implements Authenticate {
  private readonly baseUrl: string
  constructor() {
    this.baseUrl = 'http://localhost:8080'
  }
  async authenticate({
    email,
    password,
  }: AuthenticationParams): Promise<AccountModel> {
    if (email !== 'lucas@mail.com' && password !== 'admin')
      throw new Error('Invalid Request')
    const token = await v4()
    return {
      access_token: token,
    }
  }
}

export default new SignInService()
