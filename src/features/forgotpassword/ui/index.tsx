import { Icon, InputRoot, ButtonRoot } from '@app/components'
import logo from '@app/assets/imgs/logo.svg'

export function Ui() {
  return (
    <div className="w-screen h-screen bg-primaryBlue flex">
      <div className="flex-1 bg-red-400"></div>
      <div className="flex-1 flex flex-col items-center  justify-center h-screen">
        <Icon src={logo} width={120} height={30} alt="Logo do fast feet" />
        <span className="inline-block my-2 text-white">
          {' '}
          Recuperação de senha
        </span>
        <form className="flex flex-col items-center justify-center gap-2">
          <span className="text-white font-bold italic text-lg"> E-mail </span>
          <InputRoot.InputWrapper>
            <InputRoot.Input name="e-mail" placeholder="Informe o seu e-mail" />
          </InputRoot.InputWrapper>
          <ButtonRoot.Button className=" mt-1 bg-primaryYellow cursor-pointer hover:opacity-90 disabled:bg-gray-500 text-white w-full">
            <ButtonRoot.ButtonContent>Enviar</ButtonRoot.ButtonContent>
          </ButtonRoot.Button>
        </form>
      </div>
    </div>
  )
}
