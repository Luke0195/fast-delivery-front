import {
  Button as ShadButton,
  ButtonProps as ShadButtonProps,
} from '@app/_widgets/ui'

interface ButtonProps extends ShadButtonProps {
  children: React.ReactNode
}

export function Button(props: ButtonProps) {
  return <ShadButton {...props}> {props.children} </ShadButton>
}
