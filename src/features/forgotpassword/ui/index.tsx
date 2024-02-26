'use client'
import { Icon } from '@app/components'
import { Form } from './components'
import logo from '@app/assets/imgs/logo.svg'

export function Ui() {
  return (
    <div className="w-screen h-screen bg-primaryBlue flex">
      <div className="flex-1 bg-red-400"></div>
      <div className="flex-1 flex flex-col items-center  justify-center h-screen">
        <Icon src={logo} width={120} height={30} alt="Logo do fast feet" />
        <span className="inline-block my-2 text-white text-lg">
          Recuperação de senha
        </span>
        <span className="text-white text-sm ">
          {' '}
          Por favor informe seu e-email para a realizar a recuperação de senha.
        </span>
        <Form />
      </div>
    </div>
  )
}
