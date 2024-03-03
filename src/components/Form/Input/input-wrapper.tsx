type Props = {
  children: React.ReactNode
  className?: string
}
export function InputWrapper(props: Props) {
  const { className } = props
  const styles = className !== null ? className : 'my-2 text-base text-white'
  return <div className={styles}>{props.children}</div>
}
