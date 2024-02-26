import { InputRoot, ButtonRoot } from '@app/components'
import {
  FormData,
  schema,
  makeFormDefaultValues,
} from '@app/features/forgotpassword'
import { SubmitHandler, useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import { validators } from '@app/utils'
import { ShowMessage } from '@app/shared/components/ShowMessage'
import { motion } from 'framer-motion'
import { animations } from '@app/shared'
import { FiLogIn } from 'react-icons/fi'
import Link from 'next/link'

export function Form() {
  const { validateHookFormField } = validators
  const {
    register,
    formState: { isValid, errors },
    handleSubmit,
  } = useForm<FormData>({
    mode: 'all',
    defaultValues: makeFormDefaultValues(),
    reValidateMode: 'onBlur',
    resolver: yupResolver(schema()),
  })

  const onSubmit: SubmitHandler<FormData> = (data) => {
    console.log(data)
  }

  return (
    <form
      className="flex flex-col items-center justify-center gap-1"
      onSubmit={handleSubmit(onSubmit)}
    >
      <motion.div {...animations.moveLeft}>
        <InputRoot.InputWrapper>
          <InputRoot.InputLabel content="E-mail" />
          <InputRoot.ControllerInput
            error={validateHookFormField(errors, 'email')}
            name="email"
            placeholder="Informe o seu e-mail"
            register={register}
          />
          {validateHookFormField(errors, 'email') &&
            ShowMessage(errors.email.message)}
        </InputRoot.InputWrapper>
      </motion.div>
      <motion.div {...animations.showOpacity} className="w-full">
        <ButtonRoot.Button
          type="submit"
          className=" mt-1 bg-primaryYellow cursor-pointer hover:opacity-90 disabled:bg-gray-500 text-white w-full"
          disabled={!isValid}
        >
          <ButtonRoot.ButtonContent>Enviar</ButtonRoot.ButtonContent>
        </ButtonRoot.Button>
      </motion.div>
      <motion.div {...animations.moveTop}>
        <Link href="/">
          <span className="text-white flex  items-center justify-center mt-2 gap-x-3 cursor-pointer hover: opacity-80">
            <FiLogIn size={20} />
            Já possui conta.
          </span>
        </Link>
      </motion.div>
    </form>
  )
}
