import { yup } from '@app/libs'

export const schema = () => {
  return yup.object({
    name: yup.string().required('O campo Nome é obrigatório'),
    address: yup.object({
      name: yup.string().required('O campo Rua é obrigatório'),
      complement: yup.string().required('O campo Complemeto é obrigatório'),
      number: yup
        .string()
        .min(1, 'O número é obrigatório')
        .required('O campo Número é obrigatório'),
      sub_locallity: yup.string().required('O campo bairro é obrigatório'),
      state: yup.string().required('O campo estado é obrigatório'),
      city: yup.string().required('O campo cidade é obrigatório '),
      code: yup.string().required('O cep é obrigatório'),
    }),
  })
}
