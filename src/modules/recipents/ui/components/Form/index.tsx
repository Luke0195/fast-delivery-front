'use client'
import {
  RecipentFormData,
  makeDefaultsValuesToFormData,
  schema,
} from '@app/modules/recipents'
import { Table, TableRow, TableBody, TableCell, Button } from '@app/_widgets/ui'
import { Container, PageHeader, InputRoot } from '@app/components'
import { useForm, yupResolver } from '@app/libs'

export function Ui() {
  const { formState, register, handleSubmit, reset } =
    useForm<RecipentFormData>({
      mode: 'all',
      reValidateMode: 'onBlur',
      defaultValues: makeDefaultsValuesToFormData(),
      resolver: yupResolver(schema()),
    })

  const onSubmit = (data: RecipentFormData) => {
    console.log(data)
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
                    error={false}
                  />
                </InputRoot.InputWrapper>
              </TableCell>
              <TableCell colSpan={5}>
                <InputRoot.InputWrapper>
                  <InputRoot.InputLabel content="Rua" />
                  <InputRoot.ControllerInput
                    placeholder="Informe o nome"
                    className="border border-gray-400"
                    register={register}
                    name="address.name"
                    error={false}
                  />
                </InputRoot.InputWrapper>
              </TableCell>
            </TableRow>

            <TableRow>
              <TableCell colSpan={9}>
                <InputRoot.InputWrapper>
                  <InputRoot.InputLabel content="Bairro" />
                  <InputRoot.ControllerInput
                    placeholder="Informe o nome"
                    className="border border-gray-400"
                    name="address.sub_locallity"
                    register={register}
                    error={false}
                  />
                </InputRoot.InputWrapper>
              </TableCell>

              <TableCell colSpan={1} width={180}>
                <InputRoot.InputWrapper>
                  <InputRoot.InputLabel content="Numero" />
                  <InputRoot.ControllerInput
                    placeholder="Informe o numero"
                    className="border border-gray-400"
                    name="address.number"
                    register={register}
                    error={false}
                  />
                </InputRoot.InputWrapper>
              </TableCell>

              <TableCell colSpan={6}>
                <InputRoot.InputWrapper>
                  <InputRoot.InputLabel content="Complemento" />
                  <InputRoot.ControllerInput
                    placeholder="Informe o nome"
                    className="border border-gray-400"
                    name="address.complement"
                    register={register}
                    error={false}
                  />
                </InputRoot.InputWrapper>
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell colSpan={7}>
                <InputRoot.InputWrapper>
                  <InputRoot.InputLabel content="Cidade" />
                  <InputRoot.ControllerInput
                    placeholder="Informe o nome"
                    className="border border-gray-400"
                    name="address.city"
                    register={register}
                    error={false}
                  />
                </InputRoot.InputWrapper>
              </TableCell>

              <TableCell colSpan={3}>
                <InputRoot.InputWrapper>
                  <InputRoot.InputLabel content="Estado" />
                  <InputRoot.ControllerInput
                    placeholder="Informe o nome"
                    className="border border-gray-400 w-full"
                    name="address.state"
                    register={register}
                    error={false}
                  />
                </InputRoot.InputWrapper>
              </TableCell>

              <TableCell colSpan={6}>
                <InputRoot.InputWrapper>
                  <InputRoot.InputLabel content="CEP" />
                  <InputRoot.ControllerInput
                    placeholder="Informe o nome"
                    className="border border-gray-400"
                    name="address.code"
                    register={register}
                    error={false}
                  />
                </InputRoot.InputWrapper>
              </TableCell>
              <TableCell colSpan={1}></TableCell>
            </TableRow>
            <TableRow style={{ width: '100%' }}>
              <TableCell colSpan={16}>
                <div className=" gap-x-4  flex items-center justify-end">
                  <Button className="bg-red-500 w-60" type="button">
                    Cancelar{' '}
                  </Button>
                  <Button className="bg-purple-600 w-60" type="submit">
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
