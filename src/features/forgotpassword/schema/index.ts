'use client'
import * as yup from 'yup'

export const schema = () => {
  return yup.object({
    email: yup
      .string()
      .email('Por favor informe um e-mail válido!')
      .required('O campo e-mail é obrigátório'),
  })
}
