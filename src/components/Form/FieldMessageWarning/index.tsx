import { AiOutlineWarning } from 'react-icons/ai'

type Props = {
  message: string
}

export function FieldMessageWarning({ message }: Props) {
  return (
    <div className="w-full p-1 rounded-sm flex items-center justify-center bg-red-300 gap-x-2 my-2">
      <span className="text-red-700 text-sm">{message}</span>
      <AiOutlineWarning size={18} color="red" />
    </div>
  )
}
