import { PropsWithChildren } from 'react'

export type ComponentWithProps = PropsWithChildren

export interface ComponentPropsWithChildrenAndClassName
  extends ComponentWithProps {
  className?: string
}
