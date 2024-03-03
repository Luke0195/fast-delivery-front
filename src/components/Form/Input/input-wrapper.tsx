type Props = {
  children: React.ReactNode
  className?: string
}
export function InputWrapper(props: Props) {
  const { className } = props

  return (
    <div
      className={
        className !== null
          ? className
          : 'w-96 my-1 flex flex-col items-center justify-center'
      }
    >
      {props.children}
    </div>
  )
}
