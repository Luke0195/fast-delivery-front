import { CardTitle as ShadTitle } from '@app/_widgets/ui/card'
import { ComponentPropsWithChildrenAndClassName } from '@app/shared/interfaces'

export const CardTitle = (props: ComponentPropsWithChildrenAndClassName) => {
  return <ShadTitle className={props.className}> {props.children}</ShadTitle>
}
