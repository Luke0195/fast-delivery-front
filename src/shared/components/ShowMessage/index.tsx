import { FieldMessageWarning } from '@app/components'

export const ShowMessage = (message: string): JSX.Element => {
  return <FieldMessageWarning message={message} />
}
