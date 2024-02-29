import {
  FormData,
  schema,
  makeFormDefaultValues,
} from '@app/modules/forgotpassword'
import { InputRoot, ButtonRoot } from '@app/components'
import { motion, yupResolver, useForm, Link } from '@app/libs'
import { validators } from '@app/utils'
import { animations, AnimationWrapper, ShowMessage } from '@app/shared'
import { SubmitHandler } from 'react-hook-form'
import { FiLogIn } from 'react-icons/fi'

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
      <AnimationWrapper animation={animations.moveLeft}>
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
      </AnimationWrapper>

      <AnimationWrapper animation={animations.showOpacity} className="w-full">
        <ButtonRoot.Button
          type="submit"
          className=" mt-1 bg-primaryYellow cursor-pointer hover:opacity-90 disabled:bg-gray-500 text-white w-full"
          disabled={!isValid}
        >
          <ButtonRoot.ButtonContent>Enviar</ButtonRoot.ButtonContent>
        </ButtonRoot.Button>
      </AnimationWrapper>

      <AnimationWrapper animation={animations.moveTop}>
        <Link href="/">
          <span className="text-white flex  items-center justify-center mt-2 gap-x-3 cursor-pointer hover: opacity-80">
            <FiLogIn size={20} />
            Já possui conta.
          </span>
        </Link>
      </AnimationWrapper>
    </form>
  )
}
