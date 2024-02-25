import { Logo, InputRoot, ButtonRoot } from '@app/components'

export function Form() {
  return (
    <form className="flex flex-col items-center">
      <InputRoot.InputWrapper>
        <InputRoot.InputLabel content="E-mail" />
        <InputRoot.Input placeholder="Informe o seu email" />
      </InputRoot.InputWrapper>
      <InputRoot.InputWrapper>
        <InputRoot.InputLabel content="Senha" />
        <InputRoot.Input placeholder="Informe o sua senha" type="password" />
      </InputRoot.InputWrapper>
      <span className="block mt-2 font-normal text-base text-white hover:underline  cursor-pointer">
        {' '}
        Esqueci minha Senha
      </span>
      <ButtonRoot.Button
        className="mt-4 bg-primaryYellow text-black cursor-pointer hover:opacity-90  "
        style={{ width: 384 }}
      >
        <ButtonRoot.ButtonContent> Entrar </ButtonRoot.ButtonContent>
      </ButtonRoot.Button>
    </form>
  )
}
