import { InputRoot, ButtonRoot, FieldMessageWarning } from '@app/components'
import {
  FormData,
  schema,
  makeFormDefaultValues,
} from '@app/features/forgotpassword'
import { SubmitHandler, useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import { validators } from '@app/utils'
import { ShowMessage } from '@app/shared/components/ShowMessage'

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
      <ButtonRoot.Button
        type="submit"
        className=" mt-1 bg-primaryYellow cursor-pointer hover:opacity-90 disabled:bg-gray-500 text-white w-full"
        disabled={!isValid}
      >
        <ButtonRoot.ButtonContent>Enviar</ButtonRoot.ButtonContent>
      </ButtonRoot.Button>
    </form>
  )
}
