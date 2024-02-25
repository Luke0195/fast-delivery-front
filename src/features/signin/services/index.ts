import { AuthenticationParams } from '../interfaces'
import { v4 } from 'uuid'

class SignInService {
  private readonly baseUrl: string
  constructor() {
    this.baseUrl = 'http://localhost:8080'
  }

  async authenticated({
    email,
    password,
  }: AuthenticationParams): Promise<string> {
    if (email !== 'lucas@mail.com' && password !== 'admin')
      throw new Error('Invalid Request')
    return await v4()
  }
}

export default new SignInService()
