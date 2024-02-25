'use client'
import {
  AuthenticationParams,
  makeDefaultValues,
  schema,
  signInService,
} from '@app/features/signin'
import { InputRoot, ButtonRoot } from '@app/components'
import { animations } from '@app/shared'
import { useState } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'
import { motion } from 'framer-motion'
import { yupResolver } from '@hookform/resolvers/yup'

export function Form() {
  const [loading, setLoading] = useState(false)
  const {
    formState: { isValid, errors },
    register,
    handleSubmit,
  } = useForm<AuthenticationParams>({
    mode: 'all',
    reValidateMode: 'onBlur',
    defaultValues: makeDefaultValues(),
    resolver: yupResolver(schema()),
  })

  const onSubmit: SubmitHandler<AuthenticationParams> = async (data) => {
    setLoading(true)
    try {
      const response = await signInService.authenticated(data)
      console.log(response)
    } catch (error) {
      console.log(error)
    } finally {
      setLoading(false)
    }
  }

  return (
    <form
      className="flex flex-col items-center"
      onSubmit={handleSubmit(onSubmit)}
    >
      <motion.div {...animations.moveLeft}>
        <InputRoot.InputWrapper>
          <InputRoot.InputLabel content="E-mail" />
          <InputRoot.ControllerInput
            name="email"
            placeholder="Informe o seu email"
            register={register}
            error={Boolean(errors.email && errors.email.message)}
          />
        </InputRoot.InputWrapper>
      </motion.div>
      <motion.div {...animations.moveRight}>
        <InputRoot.InputWrapper>
          <InputRoot.InputLabel content="Senha" />
          <InputRoot.ControllerInput
            placeholder="Informe o sua senha"
            type="password"
            name="password"
            error={Boolean(errors.password && errors.password.message)}
            register={register}
          />
        </InputRoot.InputWrapper>
      </motion.div>

      <motion.span
        className="block mt-2 font-normal text-base text-white hover:underline cursor-pointer"
        {...animations.showOpacity}
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
          disabled={loading || !isValid}
          className="mt-4 bg-primaryYellow text-black cursor-pointer hover:opacity-90 disabled:bg-gray-500 text-white "
          style={{ width: 384 }}
        >
          <ButtonRoot.ButtonContent> Entrar </ButtonRoot.ButtonContent>
        </ButtonRoot.Button>
      </motion.div>
    </form>
  )
}
