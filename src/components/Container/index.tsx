'use client'
import { ComponentWithProps } from '@app/shared/interfaces'

export function Container(props: ComponentWithProps) {
  const { children } = props
  return <div className="p-8 flex-1 ">{children}</div>
}
