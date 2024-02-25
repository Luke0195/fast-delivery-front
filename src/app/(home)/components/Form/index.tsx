'use client'
import { InputRoot, ButtonRoot } from '@app/components'
import { motion } from 'framer-motion'

export function Form() {
  return (
    <form className="flex flex-col items-center">
      <motion.div
        initial={{ x: 180, opacity: 0.1 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 2 }}
      >
        <InputRoot.InputWrapper>
          <InputRoot.InputLabel content="E-mail" />
          <InputRoot.Input placeholder="Informe o seu email" />
        </InputRoot.InputWrapper>
      </motion.div>
      <motion.div
        initial={{ x: -180, opacity: 0.1 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 2 }}
      >
        <InputRoot.InputWrapper>
          <InputRoot.InputLabel content="Senha" />
          <InputRoot.Input placeholder="Informe o sua senha" type="password" />
        </InputRoot.InputWrapper>
      </motion.div>

      <motion.span
        className="block mt-2 font-normal text-base text-white hover:underline  cursor-pointer"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 5 }}
      >
        {' '}
        Esqueci minha Senha
      </motion.span>
      <motion.div
        initial={{ y: 90, opacity: 0.1 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 2 }}
      >
        <ButtonRoot.Button
          className="mt-4 bg-primaryYellow text-black cursor-pointer hover:opacity-90  "
          style={{ width: 384 }}
        >
          <ButtonRoot.ButtonContent> Entrar </ButtonRoot.ButtonContent>
        </ButtonRoot.Button>
      </motion.div>
    </form>
  )
}
