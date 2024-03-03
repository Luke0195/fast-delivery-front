import { Container, PageHeader, InputRoot } from '@app/components'
import { Table, TableRow, TableBody, TableCell, Button } from '@app/_widgets/ui'

export function Ui() {
  return (
    <Container>
      <PageHeader
        title="Cadastro de Destinatários"
        description="Utilize os recursos para criar o destinatário"
      />
      <form className="my-6 w-8/12 m-auto">
        <Table>
          <TableBody>
            <TableRow>
              <TableCell colSpan={16}>
                <InputRoot.InputWrapper>
                  <InputRoot.InputLabel content="Nome" />
                  <InputRoot.Input
                    placeholder="Informe o nome"
                    className="border border-gray-400"
                  />
                </InputRoot.InputWrapper>
              </TableCell>
            </TableRow>

            <TableRow>
              <TableCell colSpan={9}>
                <InputRoot.InputWrapper>
                  <InputRoot.InputLabel content="Rua" />
                  <InputRoot.Input
                    placeholder="Informe o nome"
                    className="border border-gray-400"
                  />
                </InputRoot.InputWrapper>
              </TableCell>

              <TableCell colSpan={1} width={180}>
                <InputRoot.InputWrapper>
                  <InputRoot.InputLabel content="Numero" />
                  <InputRoot.Input
                    placeholder="Informe o numero"
                    className="border border-gray-400"
                  />
                </InputRoot.InputWrapper>
              </TableCell>

              <TableCell colSpan={6}>
                <InputRoot.InputWrapper>
                  <InputRoot.InputLabel content="Complemento" />
                  <InputRoot.Input
                    placeholder="Informe o nome"
                    className="border border-gray-400"
                  />
                </InputRoot.InputWrapper>
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell colSpan={7}>
                <InputRoot.InputWrapper>
                  <InputRoot.InputLabel content="Cidade" />
                  <InputRoot.Input
                    placeholder="Informe o nome"
                    className="border border-gray-400"
                  />
                </InputRoot.InputWrapper>
              </TableCell>

              <TableCell colSpan={3}>
                <InputRoot.InputWrapper>
                  <InputRoot.InputLabel content="Estado" />
                  <InputRoot.Input
                    placeholder="Informe o nome"
                    className="border border-gray-400 w-full"
                  />
                </InputRoot.InputWrapper>
              </TableCell>

              <TableCell colSpan={6}>
                <InputRoot.InputWrapper>
                  <InputRoot.InputLabel content="CEP" />
                  <InputRoot.Input
                    placeholder="Informe o nome"
                    className="border border-gray-400"
                  />
                </InputRoot.InputWrapper>
              </TableCell>
              <TableCell colSpan={1}></TableCell>
            </TableRow>
            <TableRow style={{ width: '100%' }}>
              <TableCell colSpan={16}>
                <div className=" gap-x-4  flex items-center justify-end">
                  <Button className="bg-red-500 w-60"> Cancelar </Button>
                  <Button className="bg-purple-600 w-60"> Salvar </Button>
                </div>
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </form>
    </Container>
  )
}
