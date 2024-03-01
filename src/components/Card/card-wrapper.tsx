import { Card as ShadCard } from '@app/_widgets/ui/card'
import { ComponentWithProps } from '@app/shared/interfaces'

export interface PropsWithChildren extends ComponentWithProps {
  className: string
}

export const CardWrapper = (props: PropsWithChildren) => {
  return <ShadCard {...props}> {props.children}</ShadCard>
}
