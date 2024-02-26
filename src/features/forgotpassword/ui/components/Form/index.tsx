import { InputRoot, ButtonRoot } from '@app/components'
import {
  FormData,
  schema,
  makeFormDefaultValues,
} from '@app/features/forgotpassword'
import { SubmitHandler, useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'

export function Form() {
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
          error={Boolean(errors.email && errors.email.message)}
          name="email"
          placeholder="Informe o seu e-mail"
          register={register}
        />
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
