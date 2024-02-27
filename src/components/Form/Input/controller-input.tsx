import { Input as ShadInput, InputProps } from '@app/_widgets/ui'

interface ControllerInputProps extends InputProps {
  register: any
  name: string
  error: boolean
}

export function ControllerInput(props: ControllerInputProps) {
  const { register, name, error, ...rest } = props
  return (
    <ShadInput
      {...register(`${name}`)}
      {...rest}
      className={`${error ? 'border-red-500' : 'border-white'}`}
    />
  )
}
