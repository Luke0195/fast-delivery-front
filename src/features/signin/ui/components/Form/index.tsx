'use client'
import {
  AuthenticationParams,
  makeDefaultValues,
  schema,
  signInService,
} from '@app/features/signin'
import { InputRoot, ButtonRoot } from '@app/components'
import { useForm, toast, motion, yupResolver, useRouter } from '@app/libs'
import { validators } from '@app/utils'
import { animations, ShowMessage } from '@app/shared'
import { SubmitHandler } from 'react-hook-form'
import { useState } from 'react'

import Link from 'next/link'

export function Form() {
  const { validateHookFormField } = validators
  const router = useRouter()
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
      toast.success('Usuário Authenticado')
      router.push('/home')
    } catch (error) {
      toast.error('Erro na Autenticação')
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
            error={validateHookFormField(errors, 'email')}
          />
        </InputRoot.InputWrapper>
        {validateHookFormField(errors, 'email') &&
          ShowMessage(errors.email.message)}
      </motion.div>

      <motion.div {...animations.moveRight}>
        <InputRoot.InputWrapper>
          <InputRoot.InputLabel content="Senha" />
          <InputRoot.ControllerInput
            placeholder="Informe o sua senha"
            type="password"
            name="password"
            error={validateHookFormField(errors, 'password')}
            register={register}
          />
          {validateHookFormField(errors, 'password') &&
            ShowMessage(errors.password.message)}
        </InputRoot.InputWrapper>
      </motion.div>

      <Link href={'/forgotpassword'}>
        <motion.span
          className="block mt-2 font-normal text-base text-white hover:underline cursor-pointer"
          {...animations.showOpacity}
        >
          Esqueci minha Senha
        </motion.span>
      </Link>

      <motion.div {...animations.moveTop}>
        <ButtonRoot.Button
          disabled={loading || !isValid}
          className="mt-4 bg-primaryYellow cursor-pointer hover:opacity-90 disabled:bg-gray-500 text-white "
          style={{ width: 384 }}
        >
          <ButtonRoot.ButtonContent> Entrar </ButtonRoot.ButtonContent>
        </ButtonRoot.Button>
      </motion.div>
    </form>
  )
}
