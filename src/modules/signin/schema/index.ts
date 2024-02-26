import * as yup from 'yup'

export const schema = () => {
  return yup.object({
    email: yup
      .string()
      .email('Informe um e-mail valido!')
      .required('O campo email é obrigatório'),
    password: yup
      .string()
      .min(5, 'A senha deve ter no mínino 5 caracteres')
      .required('O campo senha é obrigatório'),
  })
}
