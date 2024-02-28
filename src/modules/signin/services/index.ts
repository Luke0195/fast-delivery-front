import { AuthenticationParams } from '..'
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
  }: AuthenticationParams): Promise<string> {
    if (email !== 'lucas@mail.com' && password !== 'admin')
      throw new Error('Invalid Request')
    return await v4()
  }
}

export default new SignInService()
