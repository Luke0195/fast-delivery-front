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
  }: AuthenticationParams): Promise<string | null> {
    if (email === 'lucas@mail.com' && password === 'admin') {
      return await v4()
    }
    return null
  }
}

export default new SignInService()
