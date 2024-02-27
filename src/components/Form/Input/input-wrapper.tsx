type Props = {
  children: React.ReactNode
}
export function InputWrapper(props: Props) {
  return (
    <div className="w-96 my-1 flex flex-col items-center justify-center">
      {props.children}
    </div>
  )
}
