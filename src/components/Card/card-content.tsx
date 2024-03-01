import { CardContent as ShadContent } from '@app/_widgets/ui'
import { ComponentPropsWithChildrenAndClassName } from '@app/shared/interfaces'

export const CardContent = (props: ComponentPropsWithChildrenAndClassName) => {
  const { children, className } = props
  return <ShadContent className={className}> {children}</ShadContent>
}
