'use client'
import {
  RecipentFormData,
  makeDefaultsValuesToFormData,
  schema,
  recipentService,
} from '@app/modules/recipents'
import { Table, TableRow, TableBody, TableCell, Button } from '@app/_widgets/ui'
import { toast } from 'react-toastify'
import validators from '@app/utils/validators'
import { useRouter } from 'next/navigation'
import { Container, PageHeader, InputRoot } from '@app/components'
import { yupResolver } from '@app/libs'
import { useState } from 'react'
import { useForm } from 'react-hook-form'

export function Ui() {
  const router = useRouter()
  const [loading, setLoading] = useState<boolean>(false)
  const { validateHookFormField } = validators
  const {
    formState: { errors, isValid },
    register,
    handleSubmit,
    reset,
  } = useForm<RecipentFormData>({
    mode: 'all',
    reValidateMode: 'onBlur',
    defaultValues: makeDefaultsValuesToFormData(),
    resolver: yupResolver(schema()),
  })

  const onSubmit = async (data: RecipentFormData) => {
    setLoading(true)
    try {
      recipentService.createRecipent(data)
      toast.success('Ação realizada com sucesso!')
      reset()
      router.push('/main/recipents')
    } catch (error) {
      toast.error('Ocorreu um erro na operação!')
    } finally {
      setLoading(false)
    }
  }
  return (
    <Container>
      <PageHeader
        title="Cadastro de Destinatários"
        description="Utilize os recursos para criar o destinatário"
      />
      <form className="my-6 w-8/12 m-auto" onSubmit={handleSubmit(onSubmit)}>
        <Table>
          <TableBody>
            <TableRow>
              <TableCell colSpan={11}>
                <InputRoot.InputWrapper>
                  <InputRoot.InputLabel content="Nome" />
                  <InputRoot.ControllerInput
                    placeholder="Informe o nome"
                    name="name"
                    className="border border-gray-500"
                    register={register}
                    error={validateHookFormField(errors, 'name')}
                  />
                  {validateHookFormField(errors, 'name') && (
                    <span className="text-xs text-red-400">
                      {errors.name.message}
                    </span>
                  )}
                </InputRoot.InputWrapper>
              </TableCell>
              <TableCell colSpan={5}>
                <InputRoot.InputWrapper>
                  <InputRoot.InputLabel content="Rua" />
                  <InputRoot.ControllerInput
                    placeholder="Informe o seu endereço"
                    className="border border-gray-400"
                    register={register}
                    name="address.name"
                    error={Boolean(
                      errors &&
                        errors.address &&
                        errors.address.name &&
                        errors.address.name.message,
                    )}
                  />
                  {Boolean(
                    errors &&
                      errors.address?.name &&
                      errors.address.name?.message,
                  ) && (
                    <span className="text-xs text-red-400">
                      {' '}
                      {errors.address.name.message}
                    </span>
                  )}
                </InputRoot.InputWrapper>
              </TableCell>
            </TableRow>

            <TableRow>
              <TableCell colSpan={9}>
                <InputRoot.InputWrapper>
                  <InputRoot.InputLabel content="Bairro" />
                  <InputRoot.ControllerInput
                    placeholder="Informe o bairro"
                    className="border border-gray-400"
                    name="address.sub_locallity"
                    register={register}
                    error={Boolean(
                      (errors &&
                        errors.address &&
                        errors.address.sub_locallity &&
                        errors.address.sub_locallity.message) ||
                        false,
                    )}
                  />
                  {errors &&
                    errors.address &&
                    errors.address.sub_locallity &&
                    errors.address.sub_locallity.message && (
                      <span className="text-xs text-red-400">
                        {' '}
                        {errors.address.sub_locallity.message}
                      </span>
                    )}
                </InputRoot.InputWrapper>
              </TableCell>

              <TableCell colSpan={1} width={180}>
                <InputRoot.InputWrapper>
                  <InputRoot.InputLabel content="Numero" />
                  <InputRoot.ControllerInput
                    placeholder="Informe o complemento"
                    className="border border-gray-400"
                    name="address.number"
                    register={register}
                    error={Boolean(
                      errors && errors.address && errors.address.number,
                    )}
                  />
                </InputRoot.InputWrapper>
                {Boolean(
                  errors &&
                    errors.address &&
                    errors.address.number &&
                    errors.address.number.message,
                ) && (
                  <span className="text-xs text-red-400">
                    {' '}
                    {errors.address.number.message}
                  </span>
                )}
              </TableCell>

              <TableCell colSpan={6}>
                <InputRoot.InputWrapper>
                  <InputRoot.InputLabel content="Complemento" />
                  <InputRoot.ControllerInput
                    placeholder="Informe sua cidade"
                    className="border border-gray-400"
                    name="address.complement"
                    register={register}
                    error={Boolean(
                      errors &&
                        errors.address &&
                        errors.address.complement &&
                        errors.address.complement.message,
                    )}
                  />
                  {Boolean(
                    errors &&
                      errors.address &&
                      errors.address.complement &&
                      errors.address.complement.message,
                  ) && (
                    <span className="text-xs text-red-400">
                      {' '}
                      {errors.address.complement.message}
                    </span>
                  )}
                </InputRoot.InputWrapper>
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell colSpan={7}>
                <InputRoot.InputWrapper>
                  <InputRoot.InputLabel content="Cidade" />
                  <InputRoot.ControllerInput
                    placeholder="Informe o cidade"
                    className="border border-gray-400"
                    name="address.city"
                    register={register}
                    error={Boolean(
                      errors &&
                        errors.address &&
                        errors.address.city &&
                        errors.address.city.message,
                    )}
                  />
                  {Boolean(
                    errors &&
                      errors.address &&
                      errors.address.city &&
                      errors.address.city.message,
                  ) && (
                    <span className="text-xs text-red-400">
                      {' '}
                      {errors.address.city.message}
                    </span>
                  )}
                </InputRoot.InputWrapper>
              </TableCell>

              <TableCell colSpan={3}>
                <InputRoot.InputWrapper>
                  <InputRoot.InputLabel content="Estado" />
                  <InputRoot.ControllerInput
                    placeholder="Informe o estado"
                    className="border border-gray-400 w-full"
                    name="address.state"
                    register={register}
                    error={Boolean(
                      errors &&
                        errors.address &&
                        errors.address.state &&
                        errors.address.state.message,
                    )}
                  />
                  {Boolean(
                    errors &&
                      errors.address &&
                      errors.address.state &&
                      errors.address.state.message,
                  ) && (
                    <span className="text-xs text-red-400">
                      {' '}
                      {errors.address.state.message}
                    </span>
                  )}
                </InputRoot.InputWrapper>
              </TableCell>

              <TableCell colSpan={6}>
                <InputRoot.InputWrapper>
                  <InputRoot.InputLabel content="CEP" />
                  <InputRoot.ControllerInput
                    placeholder="Informe o cep"
                    className="border border-gray-400"
                    name="address.code"
                    register={register}
                    error={Boolean(
                      errors &&
                        errors.address &&
                        errors.address.code &&
                        errors.address.code.message,
                    )}
                  />
                  {Boolean(
                    errors &&
                      errors.address &&
                      errors.address.code &&
                      errors.address.code.message,
                  ) && (
                    <span className="text-xs text-red-400">
                      {' '}
                      {errors.address.code.message}
                    </span>
                  )}
                </InputRoot.InputWrapper>
              </TableCell>
              <TableCell colSpan={1}></TableCell>
            </TableRow>
            <TableRow style={{ width: '100%' }}>
              <TableCell colSpan={16}>
                <div className=" gap-x-4  flex items-center justify-end">
                  <Button
                    className="bg-red-500 w-60"
                    type="button"
                    onClick={() => reset()}
                  >
                    Cancelar{' '}
                  </Button>
                  <Button
                    className="bg-purple-600 w-60"
                    type="submit"
                    disabled={!isValid || loading}
                  >
                    {' '}
                    Salvar{' '}
                  </Button>
                </div>
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </form>
    </Container>
  )
}
