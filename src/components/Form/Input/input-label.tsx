type Props = {
  content: string
}
export function InputLabel(props: Props) {
  const { content } = props
  return <label className="my-2 text-base text-white"> {content}</label>
}
