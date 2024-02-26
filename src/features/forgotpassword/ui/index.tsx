'use client'
import { Icon } from '@app/components'
import { Form } from './components'
import logo from '@app/assets/imgs/logo.svg'
import { FiLogIn } from 'react-icons/fi'
import Link from 'next/link'

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
        <Link href="/">
          <span className="text-white flex  items-center justify-center mt-2 gap-x-3 cursor-pointer hover: opacity-80">
            <FiLogIn size={20} />
            Já possui conta.
          </span>
        </Link>
      </div>
    </div>
  )
}
