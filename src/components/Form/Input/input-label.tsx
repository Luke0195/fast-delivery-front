import { DetailedHTMLProps, LabelHTMLAttributes } from 'react'
interface Props
  extends DetailedHTMLProps<
    LabelHTMLAttributes<HTMLLabelElement>,
    HTMLLabelElement
  > {
  content: string
}
export function InputLabel(props: Props) {
  const { content, className } = props
  return (
    <label
      className={`${className !== null ? className : 'my-2 text-base text-white'} `}
    >
      {content}
    </label>
  )
}
